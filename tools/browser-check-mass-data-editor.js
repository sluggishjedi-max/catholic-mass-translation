'use strict';

// Exercise real UI controls and the real save preparation without writing liturgical data.
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const mass = require('./mass-data-editor');

async function verifyLiveTranslations(browser, base) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  try {
    await page.goto(base, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => state.block && state.drafts.left.length > 0);
    await page.selectOption('#left-country', 'US');
    await page.waitForFunction(() => state.block.leftCountry.jurisdiction === 'US');
    await page.selectOption('#right-country', 'KR');
    await page.waitForFunction(() => state.block.rightCountry.jurisdiction === 'KR');
    const row = page.locator('.row-card').first();
    const left = row.locator('textarea[data-side="left"]'), right = row.locator('textarea[data-side="right"]');
    for (const mode of ['ai', 'google']) {
      await left.fill('Peace be with you.');
      await right.fill('');
      await row.locator(`[data-mode="${mode}"][data-direction="right"]`).click();
      await page.waitForFunction(() => !!document.querySelector('textarea[data-side="right"]').value.trim()
        || document.getElementById('status').classList.contains('error'), null, { timeout: 70000 });
      const result = await right.inputValue();
      assert.match(result, /[가-힣]/u, `${mode}: ${await page.locator('#status').textContent()}`);
      console.log(JSON.stringify({ live: true, mode, direction: 'EN to KR', result }));
    }
    await page.fill('#translator-source', 'Peace be with you.');
    await page.waitForFunction(() => !!document.getElementById('translator-output').value.trim()
      || document.getElementById('translator-status').textContent.startsWith('번역 실패'), null, { timeout: 70000 });
    assert.match(await page.inputValue('#translator-output'), /[가-힣]/u, await page.locator('#translator-status').textContent());
    await page.locator('#translator-output').evaluate(input => { input.value = ''; });
    await page.click('#translator-ai');
    await page.waitForFunction(() => !!document.getElementById('translator-output').value.trim()
      || document.getElementById('translator-status').textContent.startsWith('번역 실패'), null, { timeout: 70000 });
    assert.match(await page.inputValue('#translator-output'), /[가-힣]/u, await page.locator('#translator-status').textContent());
    assert.deepEqual(errors, []);
    console.log('Live sentence buttons and automatic translator both passed for AI and Google; no Mass data was saved.');
  } finally { await page.close(); }
}

async function main() {
  const originalSources = mass.readCountryMassSources();
  const server = mass.createServer();
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch({ headless: true });
  try {
    if (process.argv.includes('--live-translations')) {
      await verifyLiveTranslations(browser, `http://127.0.0.1:${server.address().port}/`);
      return;
    }
    for (const width of [1280, 390, 320]) {
      let sources = originalSources;
      let loaded = mass.getLoadedState(sources);
      let saved = 0;
      const page = await browser.newPage({ viewport: { width, height: 1000 } });
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.route('**/api/**', async route => {
        const url = new URL(route.request().url());
        let body;
        if (url.pathname === '/api/state') body = { countries: loaded.countries };
        else if (url.pathname === '/api/blocks') body = { blocks: mass.blocksForCountry(loaded, url.searchParams.get('country')).map(block => ({ key: block.key, title: block.title, rows: block.rows.length })) };
        else if (url.pathname === '/api/block') body = { block: mass.blockPair(loaded, url.searchParams.get('left'), url.searchParams.get('right'), url.searchParams.get('key')) };
        else if (url.pathname === '/api/save') {
          try {
            const prepared = mass.prepareMassSourceEdit(route.request().postDataJSON(), sources);
            sources = prepared.sources;
            loaded = mass.getLoadedState(sources);
            saved++;
            body = { changed: prepared.changed, backup: '(in-memory verification)' };
          } catch (error) {
            return route.fulfill({ status: error.statusCode || 500, contentType: 'application/json', body: JSON.stringify({ ok: false, error: error.message }) });
          }
        } else if (url.pathname === '/api/translate') body = { text: 'Translated sentence' };
        else throw new Error(`Unexpected request: ${url.pathname}`);
        return route.fulfill({ contentType: 'application/json', body: JSON.stringify({ ok: true, ...body }) });
      });
      await page.goto(`http://127.0.0.1:${server.address().port}/`, { waitUntil: 'domcontentloaded' });
      await page.waitForFunction(() => state.block && state.drafts.left.length > 0);
      assert.equal(await page.locator('#add-left,#add-right,.addbar').count(), 0, 'Obsolete bottom add buttons must be removed');
      assert.equal((await page.locator('.columns-head span').nth(1).textContent()).trim(), '', 'The middle translation heading must be blank');
      const chosen = mass.blocksForCountry(loaded, 'KR').find(block => block.rows.length >= 4);
      await page.selectOption('#block', chosen.key);
      await page.waitForFunction(key => state.block.key === key, chosen.key);
      if (width !== 390) {
        await page.selectOption('#right-country', 'TW');
        await page.waitForFunction(() => state.block.rightCountry.jurisdiction === 'TW');
      }
      const text = side => page.locator(`textarea[data-side="${side}"][data-role="text"]`);
      const persistedText = side => page.evaluate(side => state.drafts[side].filter(row => !row.virtual || row.create?.forceCreate).map(row => row.draftText), side);
      const action = (side, name, index) => page.locator(`[data-action-side="${side}"][data-action="${name}"]`).nth(index);
      await text('left').nth(0).fill('Edited first sentence');
      await text('right').nth(0).fill('Unsaved opposite sentence');
      await action('left', 'after', 0).click();
      assert.equal(await text('left').nth(0).inputValue(), 'Edited first sentence', 'Insertion must retain unsaved input');
      assert.equal(await text('right').nth(0).inputValue(), 'Unsaved opposite sentence', 'Insertion must retain the opposite draft');
      await text('left').nth(1).fill('Inserted in the middle');
      await action('left', 'up', 1).click();
      assert.equal(await text('left').nth(0).inputValue(), 'Inserted in the middle');
      assert(await action('left', 'up', 0).isDisabled());
      await action('left', 'down', 0).click();
      assert.equal(await text('left').nth(1).inputValue(), 'Inserted in the middle');

      const countBeforeDelete = await text('left').count();
      page.once('dialog', dialog => dialog.dismiss());
      await action('left', 'delete', 2).click();
      assert.equal(await text('left').count(), countBeforeDelete, 'Cancelling deletion must keep the sentence');
      page.once('dialog', dialog => dialog.accept());
      await action('left', 'delete', 2).click();
      assert.equal(await text('left').count(), countBeforeDelete - 1);
      const expected = await text('left').evaluateAll(inputs => inputs.map(input => input.value));
      await page.click('#save-left');
      await page.waitForFunction(() => !state.saving);
      assert.equal(saved, 1);
      assert.deepEqual(await persistedText('left'), expected);
      assert.equal(await text('right').nth(0).inputValue(), 'Unsaved opposite sentence', 'Saving one side must preserve the opposite draft');
      await page.click('#save-right');
      await page.waitForFunction(() => !state.saving);
      assert.equal(saved, 2);
      await page.click('#reload');
      await page.waitForFunction(() => state.drafts.right[0]?.text === 'Unsaved opposite sentence');
      assert.deepEqual(await persistedText('left'), expected);
      assert.equal(await text('right').nth(0).inputValue(), 'Unsaved opposite sentence');
      for (let reload = 0; reload < 2; reload++) {
        await Promise.all([page.waitForResponse(response => new URL(response.url()).pathname === '/api/block'), page.click('#reload')]);
        await page.waitForFunction(() => ['left','right'].every(side => state.drafts[side].length === state.block[side+'RowKeys'].length));
        assert.equal(await text('left').count(), expected.length, 'Reloading must not append virtual blank sentences');
      }

      // The two columns may have different row keys after independent reordering.
      await page.locator('.row-card').first().locator('[data-mode="google"][data-direction="right"]').click();
      await page.waitForFunction(() => document.querySelector('textarea[data-side="right"]').value === 'Translated sentence');
      await action('left', 'before', 0).click();
      assert.equal(await text('right').nth(0).inputValue(), 'Translated sentence');
      page.once('dialog', dialog => dialog.accept());
      await action('left', 'delete', 0).click();
      assert.equal(await text('left').nth(0).inputValue(), expected[0]);

      while (await text('left').count()) {
        page.once('dialog', dialog => dialog.accept());
        await action('left', 'delete', 0).click();
      }
      await page.click('#save-left');
      await page.waitForFunction(() => !state.saving);
      assert.equal(await text('left').count(), 0, 'An empty country block must stay empty');
      await page.locator('[data-action="first"][data-action-side="left"]').click();
      assert.equal(await text('left').count(), 1, 'Empty blocks must allow the first sentence without bottom add buttons');

      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}px: horizontal overflow`);
      assert.deepEqual(errors, [], `${width}px: browser errors`);
      console.log(JSON.stringify({ width, saved, sentences: expected.length, passed: true }));
      await page.close();
    }
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
}

main().catch(error => { console.error(error); process.exitCode = 1; });
