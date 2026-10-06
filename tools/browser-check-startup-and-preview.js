const assert = require('assert/strict');
const fs = require('fs');
const http = require('http');
const path = require('path');
const { chromium } = require('@playwright/test');
const prayerTool = require('./prayer-data-insert-tool');
const root = path.resolve(__dirname, '..');

function staticServer() {
  return http.createServer((req, res) => {
    const file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
    if (!file.startsWith(root + path.sep)) return res.writeHead(403).end();
    fs.readFile(file, (error, data) => {
      if (error) return res.writeHead(404).end();
      res.setHeader('Content-Type', file.endsWith('.js') ? 'application/javascript' : file.endsWith('.svg') ? 'image/svg+xml' : 'text/html; charset=utf-8');
      res.end(data);
    });
  });
}

async function listen(server) {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  return `http://127.0.0.1:${server.address().port}`;
}

async function checkStartup(browser, base, filename, decision) {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.addInitScript(() => { window.close = () => { window.closeAttempted = true; }; });
  let release;
  const blockedData = new Promise(resolve => { release = resolve; });
  await page.route('**/*', async route => {
    const url = new URL(route.request().url());
    if (url.hostname !== '127.0.0.1') return route.abort();
    if (url.pathname.includes('taiwan_daily_mass_data.js')) await blockedData;
    if (url.pathname.includes('firebase_data_loader.js')) {
      return route.fulfill({ contentType: 'application/javascript', body: 'window.ordoFirebaseDataReady = new Promise(() => {});' });
    }
    return route.continue();
  });
  try {
    await page.goto(`${base}/${filename}`, { waitUntil: 'commit' });
    await page.waitForFunction(() => typeof acceptStartupNotice === 'function');
    assert.equal(await page.evaluate(() => typeof fetchMassData), 'undefined', 'Consent did not become interactive before country scripts');
    if (decision !== 'late-accept') {
      await page.locator(decision === 'accept' ? '#consent-accept' : '#consent-decline').click();
      assert.equal(await page.evaluate(() => window.ordoStartupNoticeDecision), decision === 'accept');
      if (decision === 'accept') await assert.doesNotReject(() => page.locator('#consent-modal').waitFor({ state: 'hidden', timeout: 1000 }));
    }
    release();
    await page.waitForFunction(() => typeof restoreStartupNoticeDecision === 'function');
    assert.equal(await page.evaluate(() => !!window.ordoFirebaseDataStatus), false, 'Test must keep Firebase data pending');
    if (decision === 'late-accept') {
      assert.equal(await page.evaluate(() => startupNoticeDecision), null, 'Notice was accepted without user input');
      await page.locator('#consent-accept').click();
    }
    const result = await page.evaluate(async () => ({
      decision: startupNoticeDecision,
      resolved: await waitForStartupNoticeDecision(),
      pending: document.body.classList.contains('consent-pending'),
      closeAttempted: !!window.closeAttempted
    }));
    assert.equal(result.decision, decision !== 'decline');
    assert.equal(result.resolved, decision !== 'decline');
    assert.equal(result.pending, decision === 'decline');
    if (decision === 'decline') assert.equal(result.closeAttempted, true);
    assert.deepEqual(errors, [], 'Startup produced a script error');
    console.log(`${filename}: ${decision} works while Firebase is pending.`);
  } finally {
    release();
    await page.close();
  }
}

async function checkPreview(browser, editorBase, appBase) {
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
  try {
    await page.goto(editorBase, { waitUntil: 'load' });
    await page.waitForFunction(() => state.previewReady && state.list.length > 0);
    await page.locator('[data-prayer-id]').first().click();
    await page.waitForFunction(() => state.currentPrayer);
    await page.fill('#title', '실제 앱 미리보기 검증');
    await page.fill('#source-category', '공식 출처 분류 검증');
    const body = '<rubric>가슴을 치며</rubric> 제 탓이요...\n'
      + '<indent>들여쓴 문단</indent>\n다음 문장\n'
      + '<indent>같은 줄</indent> 바로 이어지는 문장\n'
      + '<img src="/assets/app-logo.svg" alt="기도문 사진">\n[괄호 본문]';
    await page.fill('#text', body);
    await page.evaluate(() => {
      state.currentPrayer.source = { KR: '실제 출처 검증' };
      updatePreview();
    });
    const frame = page.frames().find(item => item.url().endsWith('/app-preview.html'));
    assert(frame, 'Actual app preview iframe is missing');
    await frame.waitForFunction(() => document.querySelector('.aux-prayer-body')?.textContent.includes('[괄호 본문]'));
    const preview = await frame.evaluate(() => {
      const pane = document.querySelector('.aux-prayer-body');
      const indent = pane.querySelector('.aux-prayer-indent');
      const nextLine = document.createRange();
      nextLine.selectNode(indent.nextElementSibling.nextSibling);
      return {
        registry: uploadedCountryPrayerData,
        sourceState: { currentLoc: state.currentLoc, selectedLocationCode: state.selectedLocationCode, targetLang: state.targetLang, targetLocationCode: state.targetLocationCode, uiLang: state.uiLang },
        markup: document.querySelector('#prayer-results').innerHTML,
        text: document.querySelector('#prayer-results').textContent,
        bodyHtml: pane.innerHTML,
        indentTag: indent.tagName,
        gap: nextLine.getBoundingClientRect().top - indent.getBoundingClientRect().bottom,
        lineHeight: parseFloat(getComputedStyle(pane).lineHeight),
        css: { font: getComputedStyle(pane).font, rubric: getComputedStyle(pane.querySelector('.rubric')).display, indent: getComputedStyle(indent).display },
        width: innerWidth,
        hasFirebase: !!window.ordoFirebaseDataReady
      };
    });
    assert(preview.text.includes('공식 출처 분류 검증') && preview.text.includes('실제 출처 검증'), 'Preview did not apply edited source category and original source');
    assert(!preview.text.includes('Universal Latin prayer text'), 'Internal Latin-source marker remains visible');
    assert(preview.bodyHtml.includes('<img ') && preview.bodyHtml.includes('<span class="aux-prayer-indent">'), 'Preview did not render image/indent tags');
    assert.equal(preview.indentTag, 'SPAN');
    assert(preview.gap < preview.lineHeight * 0.3, 'Indent inserted an additional empty line');
    assert.equal(preview.hasFirebase, false, 'Preview started Firebase loading');

    const app = await browser.newPage({ viewport: { width: preview.width, height: 650 } });
    try {
      await app.addInitScript(() => { window.ordoPrayerEditorPreview = true; });
      await app.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
      await app.goto(`${appBase}/index.html`, { waitUntil: 'load' });
      const actual = await app.evaluate(({ registry, sourceState }) => {
        window.uploadedCountryPrayerData = registry;
        Object.assign(state, sourceState);
        document.body.classList.remove('consent-pending');
        document.getElementById('consent-modal').style.display = 'none';
        showAppTab('prayers');
        const card = document.querySelector('#prayer-results details');
        card.removeAttribute('ontoggle'); card.open = true;
        const pane = card.querySelector('.aux-prayer-body');
        return {
          markup: document.querySelector('#prayer-results').innerHTML,
          css: { font: getComputedStyle(pane).font, rubric: getComputedStyle(pane.querySelector('.rubric')).display, indent: getComputedStyle(pane.querySelector('.aux-prayer-indent')).display }
        };
      }, preview);
      assert.equal(preview.markup, actual.markup, 'Preview DOM differs from the real app');
      assert.deepEqual(preview.css, actual.css, 'Preview styling differs from the real app');
    } finally { await app.close(); }
    const countries = await page.evaluate(() => state.countries.filter((country, index, values) => values.findIndex(item => item.language === country.language) === index));
    for (const country of countries) {
      await page.selectOption('#editor-country', country.jurisdiction);
      await page.waitForFunction(code => state.currentPrayer?.jurisdiction === code, country.jurisdiction);
      await page.fill('#source-category', country.language + ' 출처 분류; ' + country.language + ' 다른 출처 ; ; ' + country.language + ' 출처 분류');
      await page.fill('#text', '<rubric>안내</rubric> ' + country.language + ' 기도문\n<indent>들여쓰기</indent>\n다음 문장');
      await page.evaluate(code => {
        state.currentPrayer.source = { [code]: code + ' 원문 출처; ' + code + ' 추가 원문; ;' + code + ' 원문 출처' };
        updatePreview();
      }, country.language);
      await frame.waitForFunction(code => {
        const card = document.querySelector('#prayer-results details');
        const pane = card?.querySelector('.aux-prayer-body');
        return pane?.textContent.includes(code + ' 기도문') && card.textContent.includes(code + ' 추가 원문')
          && card.querySelector('.aux-prayer-title').textContent.includes(code + ' 다른 출처');
      }, country.language);
      const sources = await frame.evaluate(() => {
        const card = document.querySelector('#prayer-results details');
        return {
          tags: [...card.querySelector('.aux-prayer-title').querySelectorAll('.aux-prayer-book-tag')].map(tag => tag.textContent),
          pills: [...card.querySelectorAll('.aux-result-meta .aux-pill')].map(pill => pill.textContent)
        };
      });
      assert.deepEqual(sources.tags, [country.language + ' 출처 분류', country.language + ' 다른 출처'], 'Semicolon-separated source categories did not become individual tags');
      for (const source of [country.language + ' 원문 출처', country.language + ' 추가 원문']) {
        assert.equal(sources.pills.filter(pill => pill === source).length, 1, 'Sources were not split or deduplicated');
      }
    }
    assert.deepEqual(errors, [], 'Editor preview produced a script error');
    console.log(`Editor preview: actual app DOM/styles, source metadata, markup and indent spacing matched in ${countries.length} languages.`);
  } finally { await page.close(); }
}

(async () => {
  const appServer = staticServer();
  const editorServer = prayerTool.createServer();
  const appBase = await listen(appServer);
  const editorBase = await listen(editorServer);
  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    if (!process.argv.includes('--preview-only')) {
      for (const filename of ['index.html', 'V28.html']) {
        for (const decision of ['accept', 'late-accept', 'decline']) await checkStartup(browser, appBase, filename, decision);
      }
    }
    await checkPreview(browser, editorBase, appBase);
  } finally {
    if (browser) await browser.close();
    await Promise.all([appServer, editorServer].map(server => new Promise(resolve => server.close(resolve))));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
