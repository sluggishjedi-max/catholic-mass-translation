const assert = require('assert/strict');
const fs = require('fs');
const path = require('path');
const { chromium } = require('@playwright/test');
const prayerTool = require('./prayer-data-insert-tool');
const root = path.resolve(__dirname, '..');

function copyFileToFixture(fixture, file) {
  const target = path.resolve(fixture, path.relative(root, file));
  assert(target.startsWith(fixture + path.sep), 'Fixture copy escaped its temporary directory');
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(file, target);
}

function snapshot(tool) {
  return new Map(tool.readCountryModuleSources().map(source => [source.jurisdiction, source.code]));
}

async function post(base, body) {
  const response = await fetch(base + '/api/delete-entries', {
    method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body)
  });
  return { status: response.status, body: await response.json() };
}

async function listen(server) {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  return `http://127.0.0.1:${server.address().port}`;
}

async function verifyLegacy(fixture) {
  const dataFile = path.join(fixture, 'legacy-prayers.js');
  fs.writeFileSync(dataFile, 'globalThis.prayerCategoryLabels={common:{KR:"공통기도문"}};globalThis.prayerData=' + JSON.stringify([
    { id: '001.a', category: 'common', titles: { KR: 'A', EN: 'A' }, texts: { KR: '본문 A', EN: 'Body A' } },
    { id: '002.b', category: 'common', titles: { EN: 'B' }, texts: { EN: 'Body B' } }
  ]) + ';');
  const legacyToolFile = path.join(fixture, 'tools', 'prayer-legacy-check.js');
  fs.copyFileSync(path.join(fixture, 'tools', 'prayer-data-insert-tool.js'), legacyToolFile);
  const previousPath = process.env.PRAYER_DATA_PATH;
  let legacyTool;
  try {
    process.env.PRAYER_DATA_PATH = dataFile;
    legacyTool = require(legacyToolFile);
  } finally {
    if (previousPath === undefined) delete process.env.PRAYER_DATA_PATH;
    else process.env.PRAYER_DATA_PATH = previousPath;
  }
  const server = legacyTool.createServer();
  const base = await listen(server);
  try {
    const before = fs.readFileSync(dataFile, 'utf8');
    const invalid = await post(base, { ids: ['001.a', '002.b'], scope: 'country', lang: 'KR' });
    assert.equal(invalid.status, 409);
    assert.equal(fs.readFileSync(dataFile, 'utf8'), before, 'Legacy failure partially deleted the first prayer');
    const country = await post(base, { ids: ['001.a'], scope: 'country', lang: 'KR' });
    assert.equal(country.status, 200);
    assert.equal(legacyTool.loadPrayerData().prayers[0].texts.EN, 'Body A');
    assert.equal(legacyTool.loadPrayerData().prayers[0].texts.KR, undefined);
    const all = await post(base, { ids: ['001.a', '002.b', '001.a'], scope: 'all' });
    assert.equal(all.status, 200);
    assert.equal(all.body.updated.count, 2, 'Duplicate ids should be deleted only once');
    assert.equal(legacyTool.loadPrayerData().prayers.length, 0);
    assert(fs.existsSync(all.body.backupPath), 'Legacy bulk delete did not create a backup');
    assert.notEqual(country.body.backupPath, all.body.backupPath, 'Rapid deletes overwrote an earlier backup');
    assert(fs.readFileSync(country.body.backupPath, 'utf8') === before, 'The first backup no longer contains the original data');
  } finally { await new Promise(resolve => server.close(resolve)); }
}

(async () => {
  fs.mkdirSync(path.join(root, 'tmp'), { recursive: true });
  const fixture = fs.mkdtempSync(path.join(root, 'tmp', 'prayer-bulk-test-'));
  let server;
  let browser;
  try {
    for (const relative of [
      'index.html', 'JS file/app_v28.js', 'JS file/prayer_editor_preview.js', 'assets/app-logo.svg',
      'tools/prayer-data-insert-tool.js', 'tools/prayer-data-editor.html', 'tools/firebase-upload-support.js'
    ]) copyFileToFixture(fixture, path.join(root, relative));
    for (const module of prayerTool.countryPrayerModules) copyFileToFixture(fixture, module.path);
    const fixtureToolPath = path.join(fixture, 'tools', 'prayer-data-insert-tool.js');
    // Force consecutive saves into the same second to check backup collisions.
    fs.writeFileSync(fixtureToolPath, fs.readFileSync(fixtureToolPath, 'utf8')
      .replace('function timestamp() {', 'function timestamp() { return "20261006T000000Z";'));
    const fixtureTool = require(path.join(fixture, 'tools', 'prayer-data-insert-tool.js'));
    const initialSources = fixtureTool.readCountryModuleSources();
    const loaded = fixtureTool.prayerEditorState(initialSources);
    const korea = fixtureTool.prayersForCountry(loaded, 'KR', 'KR');
    assert(korea.length >= 8, 'Bulk selection check needs at least eight Korean prayers');
    const prepared = fixtureTool.prepareCountryPrayerEntriesDelete({
      ids: [korea[0].id, korea[1].id, korea[0].id], jurisdiction: 'KR', scope: 'country'
    }, initialSources);
    assert.equal(prepared.updated.count, 2);
    assert(prepared.nextSources.filter((source, index) => source.code !== initialSources[index].code)
      .every(source => source.jurisdiction === 'KR'), 'Country deletion changed a foreign module');
    assert.deepEqual(snapshot(fixtureTool), new Map(initialSources.map(source => [source.jurisdiction, source.code])), 'Preparation wrote fixture files');

    server = fixtureTool.createServer();
    const base = await listen(server);
    const beforeFailure = snapshot(fixtureTool);
    const invalid = await post(base, { ids: [korea[0].id, 'missing.bulk.id'], scope: 'all', jurisdiction: 'KR' });
    assert.equal(invalid.status, 404);
    assert.deepEqual(snapshot(fixtureTool), beforeFailure, 'Invalid selection partially deleted country files');
    assert.equal((await post(base, { ids: [], scope: 'all', jurisdiction: 'KR' })).status, 400);
    assert.equal((await post(base, { ids: [korea[0].id], scope: 'unknown', jurisdiction: 'KR' })).status, 400);

    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({ viewport: { width: 1450, height: 1100 } });
    const errors = [];
    let bulkPosts = 0;
    page.on('pageerror', error => errors.push(error.message));
    page.on('request', request => { if (request.url().endsWith('/api/delete-entries')) bulkPosts += 1; });
    await page.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
    await page.goto(base, { waitUntil: 'load' });
    await page.waitForFunction(() => state.list.length >= 8 && state.previewReady);
    const ids = await page.evaluate(() => state.list.map(item => item.id));
    const row = index => page.locator('#prayer-list [data-prayer-id]').nth(index);
    const selected = () => page.evaluate(() => [...state.selectedIds]);
    await row(1).click();
    await page.waitForFunction(id => state.currentPrayer?.id === id, ids[1]);
    await row(4).click({ modifiers: ['Shift'] });
    assert.deepEqual(await selected(), ids.slice(1, 5), 'Forward Shift range did not include both endpoints');
    await row(0).click({ modifiers: ['Shift'] });
    assert.deepEqual(await selected(), ids.slice(0, 2), 'Reverse Shift range failed');
    await row(5).click({ modifiers: ['Control'] });
    assert((await selected()).includes(ids[5]), 'Ctrl did not add an item');
    await row(7).click({ modifiers: ['Meta'] });
    assert((await selected()).includes(ids[7]), 'Meta did not add an item');
    await row(5).click({ modifiers: ['Control'] });
    assert(!(await selected()).includes(ids[5]), 'Ctrl did not remove an item');
    await page.locator('#prayer-list [data-selection-id]').nth(6).click();
    assert((await selected()).includes(ids[6]), 'Checkbox did not add an item');
    assert.equal(await page.locator('#prayer-list input:checked').count(), (await selected()).length);
    assert.equal(await page.evaluate(() => state.originalId), ids[1], 'Range selection overwrote the editor');

    await page.fill('#search', ids[0]);
    await page.click('#search-button');
    const visible = await page.evaluate(() => filteredList(state.list, state.appliedSearch).map(item => item.id));
    assert((await selected()).every(id => visible.includes(id)), 'Hidden selections survived filtering');
    await page.click('#select-visible');
    assert.deepEqual(await selected(), visible, 'Select all included hidden items');
    await page.click('#clear-selection');
    assert.equal((await selected()).length, 0);
    assert.equal(await page.locator('#bulk-delete-all').isDisabled(), true);
    await page.fill('#search', '');
    await page.click('#search-button');
    await row(0).click();
    await page.selectOption('#country', 'US');
    await page.waitForFunction(() => state.listJurisdiction === 'US' && state.originalId === '');
    assert.equal((await selected()).length, 0, 'Selection survived a country change');
    await page.selectOption('#country', 'KR');
    await page.waitForFunction(() => state.listJurisdiction === 'KR' && state.originalId === '');

    await row(0).click();
    await page.waitForFunction(id => state.currentPrayer?.id === id && state.currentPrayer.jurisdiction === 'KR', ids[0]);
    await page.fill('#title', '보존할 미저장 편집 내용');
    await row(0).click({ modifiers: ['Control'] });
    await page.locator('#prayer-list [data-selection-id]').nth(1).click();
    await page.locator('#prayer-list [data-selection-id]').nth(3).click({ modifiers: ['Shift'] });
    const countryIds = ids.slice(1, 4);
    assert.deepEqual(await selected(), countryIds, 'Shift checkbox range failed');
    page.once('dialog', dialog => dialog.dismiss());
    await page.click('#bulk-delete-country');
    assert.equal(bulkPosts, 0, 'Cancelled bulk delete sent a request');
    assert.deepEqual(snapshot(fixtureTool), beforeFailure, 'Cancelled bulk delete changed files');

    const responsePromise = page.waitForResponse(response => response.url().endsWith('/api/delete-entries') && response.request().method() === 'POST');
    page.once('dialog', dialog => {
      assert(dialog.message().includes('3개') && dialog.message().includes('대한민국'));
      dialog.accept();
    });
    await page.click('#bulk-delete-country');
    const countryResponse = await (await responsePromise).json();
    assert.equal(countryResponse.updated.count, 3);
    await page.waitForFunction(() => !state.bulkBusy && state.selectedIds.size === 0);
    assert.equal(await page.inputValue('#title'), '보존할 미저장 편집 내용', 'Bulk delete discarded an unrelated draft');
    assert.equal(await page.evaluate(() => state.originalId), ids[0]);
    const afterCountry = snapshot(fixtureTool);
    for (const [jurisdiction, code] of beforeFailure) {
      if (jurisdiction !== 'KR') assert.equal(afterCountry.get(jurisdiction), code, 'Country bulk delete changed a foreign module');
    }
    const countryRegistry = fixtureTool.prayerEditorState().runtime.countries;
    assert(countryIds.every(id => !countryRegistry.KR.entries.some(entry => entry.id === id && (entry.texts || {}).KR)));
    assert(countryResponse.backupPath && fs.existsSync(countryResponse.backupPath), 'Country bulk delete did not make a backup');

    const allIds = await page.evaluate(() => state.list.slice(0, 2).map(item => item.id));
    await row(0).click();
    await page.waitForFunction(id => state.currentPrayer?.id === id, allIds[0]);
    await row(1).click({ modifiers: ['Shift'] });
    const allResponsePromise = page.waitForResponse(response => response.url().endsWith('/api/delete-entries') && response.request().method() === 'POST');
    page.once('dialog', dialog => { assert(dialog.message().includes('모든 국가') && dialog.message().includes('2개')); dialog.accept(); });
    await page.click('#bulk-delete-all');
    const allResponse = await (await allResponsePromise).json();
    assert.equal(allResponse.updated.count, 2);
    await page.waitForFunction(() => !state.bulkBusy && state.originalId === '' && state.selectedIds.size === 0);
    const allRegistry = fixtureTool.prayerEditorState().runtime.countries;
    for (const module of Object.values(allRegistry)) assert(module.entries.every(entry => !allIds.includes(entry.id)), 'Global bulk delete left a foreign entry behind');
    assert(fs.existsSync(allResponse.backupPath), 'Global bulk delete did not make a backup');
    const koreanFile = fixtureTool.countryPrayerModules.find(module => module.jurisdiction === 'KR').path;
    const firstBackup = path.join(countryResponse.backupPath, path.relative(fixture, koreanFile));
    assert(fs.readFileSync(firstBackup, 'utf8') === beforeFailure.get('KR'), 'A later delete overwrote the earlier country backup');
    assert.deepEqual(errors, [], 'Bulk editor generated script errors');
    await page.close();
    await verifyLegacy(fixture);
    console.log('Shift/Ctrl/Meta/checkbox selection, filtered selection, cancellation, draft preservation, scoped bulk deletion, validation and backups passed on temporary fixtures.');
  } finally {
    if (browser) await browser.close();
    if (server) await new Promise(resolve => server.close(resolve));
    assert(path.resolve(fixture).startsWith(path.resolve(root, 'tmp') + path.sep), 'Cleanup escaped the test directory');
    fs.rmSync(fixture, { recursive: true, force: true });
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
