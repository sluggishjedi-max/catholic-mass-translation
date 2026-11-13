// Verify floating controls and app-faithful previews without saving or uploading real data.
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
const mass = require('./mass-data-editor');
const hymns = require('./hymn-data-entry-tool');
const root = path.resolve(__dirname, '..');
async function listen(server) {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  return 'http://127.0.0.1:' + server.address().port;
}
function toolForFile(file) {
  const modulePath = require.resolve('./hymn-data-entry-tool');
  const previousPath = process.env.HYMN_DATA_PATH;
  const previousModule = require.cache[modulePath];
  try {
    process.env.HYMN_DATA_PATH = file;
    delete require.cache[modulePath];
    return require(modulePath);
  } finally {
    if (previousPath === undefined) delete process.env.HYMN_DATA_PATH;
    else process.env.HYMN_DATA_PATH = previousPath;
    if (previousModule) require.cache[modulePath] = previousModule;
    else delete require.cache[modulePath];
  }
}
async function post(base, route, body) {
  const response = await fetch(base + route, { method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify(body) });
  assert.equal(response.status, 200, route);
  return response.json();
}
async function floatingBounds(page, { footer = false } = {}) {
  await page.evaluate(() => window.scrollTo(0, Math.min(700, document.documentElement.scrollHeight - innerHeight)));
  await page.waitForTimeout(100);
  const bounds = await page.evaluate(() => {
    const header = document.querySelector('.editor-top').getBoundingClientRect();
    const controls = document.querySelector('.editor-controls').getBoundingClientRect();
    const footer = document.querySelector('.editor-footer')?.getBoundingClientRect();
    return { headerTop:header.top, headerBottom:header.bottom, controlsTop:controls.top, controlsBottom:controls.bottom,
      footerTop:footer?.top, footerBottom:footer?.bottom, height:innerHeight,
      overflow:document.documentElement.scrollWidth - innerWidth };
  });
  assert(Math.abs(bounds.headerTop) < 1, JSON.stringify(bounds));
  assert(bounds.controlsTop >= bounds.headerBottom && bounds.controlsTop <= bounds.headerBottom + 10, JSON.stringify(bounds));
  assert(bounds.controlsBottom < bounds.height - 80, 'Toolbar consumes the whole viewport');
  assert(bounds.overflow <= 1, 'Horizontal overflow: ' + JSON.stringify(bounds));
  if (footer) assert(bounds.footerTop > bounds.height - 110 && bounds.footerBottom <= bounds.height, JSON.stringify(bounds));
}
(async () => {
  const data = hymns.loadHymnData();
  fs.mkdirSync(path.join(root, 'tmp'), { recursive:true });
  const output = fs.mkdtempSync(path.join(root, 'tmp', 'local-editor-layout-'));
  const snapshotFile = path.join(output, 'snapshot-hymns.js');
  const snapshot = Buffer.from('globalThis.hymnData = ' + JSON.stringify(data) + ';\n');
  fs.writeFileSync(snapshotFile, snapshot);
  // Every hymn request runs against this snapshot, allowing concurrent user edits.
  const massServer = mass.createServer(), hymnServer = toolForFile(snapshotFile).createServer();
  const massBase = await listen(massServer), hymnBase = await listen(hymnServer);
  const browser = await chromium.launch({ headless:true });
  try {
    // Numeric searches must never mix 1, 10, 101, or lyrics containing a number.
    const exact = (await post(hymnBase, '/api/suggest', { book:'가톨릭성가', query:'1' })).suggestions;
    assert(exact.length > 0);
    assert(exact.every(entry => Number(entry.number) === 1 && entry.book === '가톨릭성가'));
    const allBook = (await post(hymnBase, '/api/suggest', { book:'가톨릭성가' })).suggestions;
    assert.equal(allBook.length, data.filter(entry => entry.book === '가톨릭성가').length);
    const fixture = data.find(entry => entry.book === '가톨릭성가' && entry.verses?.length > 1 && entry.text);
    assert(fixture, 'Needs a hymn with stored structured verses');
    const initialDraft = { targetId:fixture.id, book:fixture.book, season:fixture.tags?.[1] || '연중', number:fixture.number,
      title:fixture.title, lyrics:fixture.text, composer:fixture.composer, lyricist:fixture.lyricist, copyright:fixture.copyright };
    const unchanged = (await post(hymnBase, '/api/preview', initialDraft)).entry;
    assert.deepEqual(unchanged.verses, JSON.parse(JSON.stringify(fixture.verses)), 'Unchanged lyrics lost stored sections');
    const changed = (await post(hymnBase, '/api/preview', { ...initialDraft, lyrics:'[도입]\n시작 가사\n1. 첫째 절\n[후렴]\n후렴 가사' })).entry;
    assert(changed.verses.some(verse => verse.label === '도입'));
    assert(changed.verses.some(verse => verse.label === '후렴'));
    const foreign = data.find(entry => entry.country === 'EN' && entry.book);
    assert(foreign);
    const foreignNew = (await post(hymnBase, '/api/preview', { book:foreign.book, title:'New draft', lyrics:'Draft words', season:'연중' })).entry;
    assert.equal(foreignNew.country, 'EN', 'A new English hymn was assigned to Korea');
    const blank = (await post(hymnBase, '/api/preview', {})).entry;
    assert.equal(blank.text, '');
    assert.deepEqual(blank.verses, []);
    for (const width of [1440, 1024, 768, 390, 320]) {
      const page = await browser.newPage({ viewport:{width,height:width <= 390 ? 844 : 1000} });
      const errors = [], writes = [], external = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.route('**/*', route => {
        const req = route.request(), url = new URL(req.url());
        if (url.hostname !== '127.0.0.1') { external.push(req.url()); return route.abort(); }
        if (/\/api\/(save|number|tags|voice-type|delete|firebase-export)$/.test(url.pathname)) {
          writes.push(url.pathname); return route.abort();
        }
        return route.continue();
      });
      await page.goto(massBase, { waitUntil:'domcontentloaded' });
      await page.waitForFunction(() => state.block && state.drafts.left.length);
      assert.equal(await page.locator('.editor-top a').evaluate(node => getComputedStyle(node).color), 'rgb(255, 240, 168)');
      await floatingBounds(page);
      await page.screenshot({ path:path.join(output, 'mass-' + width + '.png') });
      await page.goto(hymnBase, { waitUntil:'domcontentloaded' });
      await page.waitForFunction(() => state.books.length && state.previewReady);
      await page.fill('#search-query', String(Number(fixture.number)));
      await page.press('#search-query', 'Enter');
      await page.waitForFunction(id => state.selected?.id === id, fixture.id);
      await page.waitForFunction(() => document.getElementById('app-preview-frame').contentDocument.querySelector('.hymn-detail'));
      const frame = page.frameLocator('#app-preview-frame');
      await frame.locator('.hymn-verse-block').first().waitFor();
      assert.equal(await frame.locator('.hymn-verse-block').count(), fixture.verses.length);
      assert.equal(await page.locator('#preview-target-language option[value=KR]').evaluate(option => option.disabled), true);
      await page.selectOption('#preview-target-language', 'VN');
      await frame.locator('.hymn-translation-pane .aux-language-label').filter({ hasText:'Tiếng Việt' }).waitFor();
      await page.selectOption('#preview-target-language', 'EN');
      assert((await frame.locator('.hymn-detail h3').innerText()).includes(fixture.title));
      const columns = await page.evaluate(() => {
        const left = document.querySelector('[aria-label="성가 정보"]').getBoundingClientRect();
        const right = document.querySelector('[aria-label="가사 편집"]').getBoundingClientRect();
        const preview = document.querySelector('.preview-panel').getBoundingClientRect();
        return { left:{x:left.x,y:left.y,bottom:left.bottom}, right:{x:right.x,y:right.y,bottom:right.bottom}, previewTop:preview.top };
      });
      if (width > 850) assert(columns.right.x > columns.left.x && Math.abs(columns.right.y - columns.left.y) < 1);
      else assert(columns.right.y > columns.left.y);
      assert(columns.previewTop >= Math.max(columns.left.bottom,columns.right.bottom));
      await page.screenshot({ path:path.join(output, 'hymn-form-' + width + '.png') });
      await floatingBounds(page, { footer:true });
      await page.screenshot({ path:path.join(output, 'hymn-' + width + '.png') });
      await page.fill('#lyrics', '[도입]\n새 도입\n1. 수정한 절\n[후렴]\n새 후렴');
      await frame.getByText('수정한 절', { exact:false }).waitFor();
      assert((await frame.locator('.hymn-original-pane').innerText()).includes('새 후렴'));
      assert.equal(await frame.locator('.hymn-verse-block').count(), 3);
      await page.fill('#composer', '<script>alert(1)</script>');
      await frame.getByText('작곡: <script>alert(1)</script>', { exact:true }).waitFor();
      await page.fill('#search-query', 'zzqvxzznonexistentzz');
      await page.press('#search-query', 'Enter');
      await page.waitForFunction(() => state.resultRows.length === 0);
      await page.fill('#search-query', '');
      await page.press('#search-query', 'Enter');
      await page.waitForFunction(count => state.resultRows.length === count, allBook.length);
      await page.selectOption('#filter-book', '');
      await page.waitForFunction(count => state.resultRows.length === count, data.length);
      await page.click('#reload');
      await page.waitForFunction(() => document.getElementById('status').textContent.endsWith('곡 로드됨'));
      assert.equal(await page.inputValue('#filter-book'), '', 'Reload lost the all-books filter');
      await page.selectOption('#results', '0');
      await page.waitForFunction(() => !!state.selected);
      await page.click('#new');
      assert.equal(await page.inputValue('#title'), '');
      assert.equal(await page.inputValue('#lyrics'), '');
      await page.waitForFunction(() => getComputedStyle(document.getElementById('toast')).opacity === '1');
      assert.deepEqual(errors, [], 'Browser errors');
      assert.deepEqual(writes, [], 'A preview tried to write/upload data');
      assert.deepEqual(external, [], 'Local preview made external requests');
      console.log(JSON.stringify({ width, stickyTools:true, fixedSavebar:true, exactNumberSearch:true, appPreview:true, noWrites:true }));
      await page.close();
    }
    // Exercise the real save endpoint against a disposable file, never country datasets.
    const fixtureFile = path.join(output, 'fixture-hymns.js');
    fs.writeFileSync(fixtureFile, 'globalThis.hymnData = ' + JSON.stringify([fixture,foreign]) + ';\n');
    const isolated = toolForFile(fixtureFile);
    const isolatedServer = isolated.createServer(), isolatedBase = await listen(isolatedServer);
    try {
      await post(isolatedBase, '/api/save', { ...initialDraft, title:fixture.title + ' 수정', composer:'검증 작곡자' });
      let saved = isolated.loadHymnData();
      assert.equal(saved[0].composer, '검증 작곡자');
      assert.deepEqual(JSON.parse(JSON.stringify(saved[0].verses)), JSON.parse(JSON.stringify(fixture.verses)));
      await post(isolatedBase, '/api/save', { book:foreign.book, number:'9999', title:'Isolated new hymn', season:'연중', lyrics:'1. First verse\n[후렴]\nWe sing in praise.' });
      saved = isolated.loadHymnData();
      assert.equal(saved.at(-1).country, 'EN');
      assert.equal(saved.at(-1).verses.length, 2);
    } finally {
      isolatedServer.closeAllConnections(); await new Promise(resolve => isolatedServer.close(resolve));
    }
    assert(fs.readFileSync(snapshotFile).equals(snapshot), 'Preview changed the hymn snapshot');
    console.log('Local editor desktop/mobile checks passed. Screenshots: ' + output);
  } finally {
    await browser.close();
    for (const server of [massServer,hymnServer]) {
      server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
    }
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
