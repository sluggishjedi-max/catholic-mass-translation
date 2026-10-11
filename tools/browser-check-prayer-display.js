const assert = require('assert/strict');
const fs = require('fs');
const http = require('http');
const path = require('path');
const { chromium } = require('@playwright/test');

const root = path.resolve(__dirname, '..');
const imagePath = '/prayer-test-wide.svg';

(async () => {
  const server = http.createServer((req, res) => {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (pathname === imagePath) {
      res.setHeader('Content-Type', 'image/svg+xml');
      return res.end('<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="500"><rect width="1600" height="500" fill="#ddd"/></svg>');
    }
    const file = path.resolve(root, '.' + pathname);
    if (!file.startsWith(root + path.sep)) return res.writeHead(403).end();
    fs.readFile(file, (error, data) => {
      if (error) return res.writeHead(404).end();
      res.setHeader('Content-Type', file.endsWith('.js') ? 'application/javascript' : 'text/html; charset=utf-8');
      res.end(data);
    });
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    for (const filename of ['index.html', 'V28.html']) {
      const page = await browser.newPage();
      await page.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
      await page.goto(`http://127.0.0.1:${server.address().port}/${filename}`, { waitUntil: 'load' });
      await page.waitForFunction(() => typeof renderPrayerPanel === 'function' && !!window.ordoPrayerDataApi);
      const result = await page.evaluate(() => {
        const check = (condition, message) => { if (!condition) throw Error(message); };
        const body = '<rubric>안내</rubric> **후렴** <b>굵게</b> <i>기울임</i> <u>밑줄</u>\n'
          + '<rubric>봉헌성가가 끝나면</rubric>\n형제 여러분...\n'
          + '<indent>들여쓰기 **강조**\n둘째 줄</indent>\n'
          + '<img src=/prayer-test-wide.svg alt=묵주기도>\n'
          + '<IMG SRC="/prayer-test-wide.svg?label=**keep**&a=1" alt="따옴표 & 설명 > 1" title="사진 안내">';
        const fixture = (id, category, title) => ({
          id, category,
          titles: Object.fromEntries(SUPPORTED_LANGS.map(lang => [lang, title])),
          texts: Object.fromEntries(SUPPORTED_LANGS.map(lang => [lang, body]))
        });
        const entries = [
          fixture('030.last', 'common', 'A 기도문 정렬검사'),
          fixture('010.rosary', 'rosary', '묵주기도 바치는 법'),
          fixture('002.second', 'common', 'Z 기도문 정렬검사'),
          fixture('001-10.variant', 'common', '변형 10'),
          fixture('custom', 'common', '번호 없음'),
          fixture('001-2.variant', 'common', '변형 2'),
          fixture('001.first', 'common', '첫 기도문 정렬검사')
        ];
        delete globalThis.uploadedCountryPrayerData;
        globalThis.uploadedPrayerData = entries;
        const originalOrder = entries.map(entry => entry.id).join('|');
        const expected = ['001.first', '001-2.variant', '001-10.variant', '002.second', '010.rosary', '030.last', 'custom'];
        state.activeTab = 'prayers';
        document.getElementById('consent-modal').style.display = 'none';
        showAppTab('prayers');
        const ids = () => [...document.querySelectorAll('#prayer-results details')].map(row => row.dataset.prayerKey);
        for (const lang of SUPPORTED_LANGS) {
          state.currentLoc = lang;
          state.targetLang = lang === 'KR' ? 'EN' : 'KR';
          renderPrayerPanel();
          check(JSON.stringify(ids()) === JSON.stringify(expected), `${lang}: prayers are not in numeric ID order`);
          const expectedImages = entries.length * 4;
          check(document.querySelectorAll('#prayer-results img.aux-prayer-image').length === expectedImages, `${lang}: images missing from available source panes`);
          // Exercise the shared renderer for every app language.
          const directBody = document.createElement('div');
          directBody.innerHTML = prayerBodyHtml(entries[0], lang, 'KR');
          check(directBody.querySelectorAll('img').length === 2 && directBody.querySelector('.aux-prayer-indent'), `${lang}: shared body rendering failed`);
        }
        check(entries.map(entry => entry.id).join('|') === originalOrder, 'Rendering changed the uploaded source order');
        document.getElementById('prayer-category').value = 'common';
        document.getElementById('prayer-search').value = '정렬검사';
        renderPrayerPanel();
        check(JSON.stringify(ids()) === JSON.stringify(['001.first', '002.second', '030.last']), 'Category/search filters lost numeric ordering');
        document.getElementById('prayer-category').value = '';
        document.getElementById('prayer-search').value = '';

        // The same display order applies when Firebase country modules are merged.
        delete globalThis.uploadedPrayerData;
        globalThis.uploadedCountryPrayerData = {
          VA: { entries: entries.slice(0, 3), language: 'LA' },
          KR: { entries: entries.slice(3), language: 'KR' }
        };
        fallbackPrayerDataByJurisdiction.clear();
        state.currentLoc = 'KR'; state.selectedLocationCode = 'KR';
        state.targetLang = 'LA'; state.targetLocationCode = 'VA';
        renderPrayerPanel();
        check(JSON.stringify(ids()) === JSON.stringify(expected), 'Merged Firebase country prayers are not in numeric ID order');
        const rosary = document.querySelector('[data-prayer-key="010.rosary"]');
        rosary.open = true;
        const pane = rosary.querySelector('.aux-prayer-body');
        check(pane.querySelector('.rubric').textContent === '안내', 'Rubric formatting changed');
        check(pane.querySelector('.rubric').nextSibling.nodeType === Node.TEXT_NODE, 'Inline rubric inserted a forced line break');
        check(pane.querySelectorAll('.rubric')[1].nextElementSibling.tagName === 'BR', 'Explicit line break after rubric was lost');
        check(pane.querySelectorAll('strong').length === 3 && pane.querySelector('em') && pane.querySelector('u'), 'Existing emphasis formatting changed');
        check(pane.querySelector('.aux-prayer-indent').textContent === '들여쓰기 강조둘째 줄', 'Indented text changed');
        check(pane.querySelector('.aux-prayer-indent br'), 'Indent lost its line break');
        const images = pane.querySelectorAll('img');
        check(images[0].getAttribute('alt') === '묵주기도', 'Unquoted image attributes failed');
        check(images[1].getAttribute('src') === '/prayer-test-wide.svg?label=**keep**&a=1', 'Text formatting changed image URL');
        check(images[1].alt === '따옴표 & 설명 > 1' && images[1].title === '사진 안내', 'Quoted image attributes changed');

        const unsafe = document.createElement('div');
        unsafe.innerHTML = formatPrayerMarkupHtml(
          '<img src="/missing.svg" onerror="globalThis.prayerUnsafeRan=true" style="position:fixed" srcset="https://invalid.example/img">'
          + '<img src="javascript:alert(1)"><img src="data:image/svg+xml,evil"><img src="file:///private"><img>'
          + '<script>globalThis.prayerUnsafeRan=true</script><iframe src="https://invalid.example"></iframe>'
          + '<indent><u>안전한 본문</u></indent>'
        );
        check(unsafe.querySelectorAll('img').length === 1, 'Unsafe or empty image URLs were accepted');
        check(!unsafe.querySelector('[onerror], [style], [srcset], script, iframe'), 'Unsafe markup or attributes were accepted');
        check(unsafe.querySelector('.aux-prayer-indent u').textContent === '안전한 본문', 'Safe markup within indent was lost');
        return { languages: SUPPORTED_LANGS.length, ids: ids(), images: images.length };
      });
      for (const width of [1100, 412, 320]) {
        await page.setViewportSize({ width, height: 915 });
        await page.locator('[data-prayer-key="010.rosary"]').scrollIntoViewIfNeeded();
        await page.waitForFunction(() => [...document.querySelectorAll('[data-prayer-key="010.rosary"] img')].every(image => image.complete && image.naturalWidth === 1600));
        const layout = await page.evaluate(() => {
          const pane = document.querySelector('[data-prayer-key="010.rosary"] .aux-prayer-body');
          const image = pane.querySelector('img');
          const indent = pane.querySelector('.aux-prayer-indent');
          const rubrics = pane.querySelectorAll('.rubric');
          const inlineBody = pane.querySelector('strong');
          const nextLine = document.createRange();
          nextLine.selectNode(rubrics[1].nextElementSibling.nextSibling);
          return {
            width: document.documentElement.scrollWidth, viewport: innerWidth,
            imageWidth: image.getBoundingClientRect().width,
            paneWidth: pane.getBoundingClientRect().width,
            indent: parseFloat(getComputedStyle(indent).marginInlineStart),
            rubricDisplay: getComputedStyle(rubrics[0]).display,
            inlineRubricTop: rubrics[0].getBoundingClientRect().top,
            inlineBodyTop: inlineBody.getBoundingClientRect().top,
            blockRubricTop: rubrics[1].getBoundingClientRect().top,
            nextLineTop: nextLine.getBoundingClientRect().top,
            lineHeight: parseFloat(getComputedStyle(pane).lineHeight)
          };
        });
        assert(layout.width <= layout.viewport + 2, `${filename} at ${width}px: horizontal overflow`);
        assert(layout.imageWidth <= layout.paneWidth + 1, `${filename} at ${width}px: image exceeds text column`);
        assert(layout.indent > 0, 'Indent has no visible margin');
        assert.equal(layout.rubricDisplay, 'inline', 'Rubric still forces a block');
        assert(Math.abs(layout.inlineRubricTop - layout.inlineBodyTop) < 5, 'Inline rubric and body are on different lines');
        const lineGap = layout.nextLineTop - layout.blockRubricTop;
        assert(lineGap > layout.lineHeight * 0.8 && lineGap < layout.lineHeight * 1.2, 'Explicit rubric newline inserted extra blank space');
      }
      console.log(`${filename}: ${result.languages} languages, numeric ordering, images, indentation, rubric line breaks, safe markup, desktop/mobile passed.`);
      await page.close();
    }
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
