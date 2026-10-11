const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const http = require('node:http');
const { chromium } = require('@playwright/test');
const root = path.resolve(__dirname, '..');

(async () => {
  const context = {};
  vm.runInNewContext(fs.readFileSync(path.join(root, 'JS file/countries/korea/korea_churches.js'), 'utf8'), context);
  const module = context.countryChurchData.KR;
  const entries = module.entries;
  const report = JSON.parse(fs.readFileSync(path.join(root, 'docs/korea-church-coverage.json'), 'utf8'));
  assert.equal(new Set(entries.map(e => e.diocese)).size, 16);
  assert.equal(new Set(entries.map(e => e.sourceCode)).size, entries.length, 'A parish source ID was duplicated');
  assert.equal(entries.length, report.after.total);
  assert.equal(report.cbckListed, report.cbckChecked, 'The national directory was only partially fetched');
  assert.equal(report.goodnewsListed, report.goodnewsChecked);
  assert.equal(report.errors.length, 0, 'The collection report contains failed requests');
  assert.equal(entries.filter(e => /directory\.cbck\.or\.kr/.test(e.sourceUrl)).length, report.cbckListed);
  for (const entry of entries) {
    assert(entry.name && entry.diocese && entry.sourceUrl && entry.directoryCheckedAt);
    assert(['published', 'previously-published', 'not-published'].includes(entry.massTimesStatus));
    for (const name of entry.sisterNames || []) {
      assert(!/수녀회|수도회|시녀회|회$|^\d/.test(name), 'Community/count was labelled as a personal name: ' + name);
      assert(entry.sisterPersonalSourceUrl || entry.sistersSourceUrl, 'A personal name has no source');
    }
    for (const community of entry.sisterCongregations || []) {
      assert(!/^[\d\s()\-.,]+$|^\d+명$/.test(community), 'A count/phone was labelled as a congregation');
    }
    if (entry.massTimesCheckedAt === module.checkedAt && entry.massTimes?.length) {
      assert(/^https?:\/\//.test(entry.massTimesSourceUrl), 'Fresh timetable has no source');
    }
  }
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
    const url = match[1].split('?')[0];
    if (/^(?:https?:|data:|mailto:|tel:|\/\/)/.test(url)) continue;
    assert(fs.existsSync(path.resolve(root, decodeURIComponent(url))), 'Published entrypoint asset is missing: ' + url);
  }
  const server = http.createServer((req, res) => {
    const file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
    if (!file.startsWith(root + path.sep)) return res.writeHead(403).end();
    fs.readFile(file, (error, data) => {
      if (error) return res.writeHead(404).end();
      res.setHeader('Content-Type', file.endsWith('.js') ? 'application/javascript' : 'text/html; charset=utf-8');
      res.end(data);
    });
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.addInitScript(() => { globalThis.ordoPrayerEditorPreview = true; });
    await page.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
    await page.goto(`http://127.0.0.1:${server.address().port}/index.html`);
    await page.waitForFunction(() => typeof churchInfoWindowHtml === 'function');
    const result = await page.evaluate(() => {
      state.selectedLocationCode = 'KR'; state.currentLoc = 'KR'; state.uiLang = 'KR';
      rebuildCountryChurchDirectory();
      const entries = countryChurchData.KR.entries;
      const gamgol = entries.find(e => e.diocese === '수원교구' && e.directoryName === '감골');
      const html = churchInfoWindowHtml({ name: gamgol.name, formatted_address: gamgol.address });
      const other = entries.find(e => e.sisterCongregations?.length && !e.sisterNames?.length);
      const otherHtml = churchInfoWindowHtml({ name: other.name, formatted_address: other.address });
      const alias = entries.find(e => e.aliases?.length && e.address);
      const aliasMatch = churchLocalDetailsForPlace({ name: alias.aliases[0], formatted_address: alias.address });
      const escaped = churchInfoWindowHtml({ name: '<img src=x onerror=alert(1)>', priestNames: ['<script>bad()</script>'], website: 'javascript:bad()' });
      const pane = document.createElement('div'); pane.innerHTML = escaped;
      const screenshot = document.createElement('section'); screenshot.id = 'directory-check-preview';
      screenshot.style.cssText = 'position:fixed;inset:0;z-index:999999;background:white;padding:16px;overflow:auto';
      screenshot.innerHTML = html + '<hr>' + otherHtml;
      document.body.appendChild(screenshot);
      return { gamgol: html, other: otherHtml, aliasExpected: alias.sourceCode, aliasMatched: aliasMatch.sourceCode,
        unsafeElements: pane.querySelectorAll('img,script,a[href^="javascript:"]').length,
        width: document.documentElement.scrollWidth, viewport: innerWidth };
    });
    assert(result.gamgol.includes('오택련 시메온 수녀') && result.gamgol.includes('김주희 체칠리아 수녀'));
    assert(result.gamgol.includes('자료 확인일') && result.gamgol.includes('co_id=priests'));
    assert(result.other.includes('개별 명단 미공개') && result.other.includes('소속 수녀회'));
    assert.equal(result.aliasMatched, result.aliasExpected, 'Merged alias resolved to the wrong parish');
    assert.equal(result.unsafeElements, 0, 'Directory values can inject markup');
    assert(result.width <= result.viewport + 2, 'Mobile popup causes horizontal overflow');
    assert.deepEqual(errors, []);
    fs.mkdirSync(path.join(root, 'test-results'), { recursive: true });
    await page.screenshot({ path: path.join(root, 'test-results/korea-directory-mobile.png') });
    console.log(JSON.stringify({ passed: true, coverage: report.after, cbck: report.cbckChecked, goodnews: report.goodnewsChecked,
      aliasSearch: true, sources: true, personalNamesSeparated: true, safeMarkup: true, mobile: true }, null, 2));
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
