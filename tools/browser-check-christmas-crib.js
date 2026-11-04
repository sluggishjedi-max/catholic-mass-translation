// Verify the common Christmas Vigil order and localized rubrics in the rendered app.
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require('@playwright/test');
const root = path.resolve(__dirname, '..');
const live = process.argv.includes('--live');
const korean = '지역에따라 미사 전 혹은 미사 후에 아기예수님을 구유에 모시는 행렬과 신자들의 구유경배를 실시한다.';

(async () => {
  const server = live ? null : http.createServer((req, res) => {
    const file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
    if (!file.startsWith(root + path.sep)) return res.writeHead(403).end();
    fs.readFile(file, (error, body) => {
      if (error) return res.writeHead(404).end();
      res.setHeader('Content-Type', file.endsWith('.js') ? 'application/javascript' : 'text/html; charset=utf-8');
      res.end(body);
    });
  });
  if (server) await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch({ headless: true });
  try {
    for (const viewport of [{ width: 1280, height: 900 }, { width: 390, height: 844 }]) {
      const page = await browser.newPage({ viewport, timezoneId: 'Asia/Seoul' });
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      if (!live) {
        const mass = require('./mass-data-editor');
        const registry = mass.runCountryMassSources(mass.readCountryMassSources()).registry;
        const metadata = Object.fromEntries(require('./country-metadata-upload-tool').countryMetadataItems().map(item => [item.jurisdiction, item]));
        await page.addInitScript(({ registry, metadata }) => {
          globalThis.countryMassData = registry;
          globalThis.uploadedCountryMassData = registry;
          globalThis.uploadedCountryMassMetadata = metadata;
          globalThis.ordoPrayerEditorPreview = true;
        }, { registry, metadata });
        await page.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
      }
      const base = live ? 'https://sluggishjedi-max.github.io/catholic-mass-translation/' : `http://127.0.0.1:${server.address().port}/V31.1.html`;
      await page.goto(base + '?crib-check=' + Date.now(), { waitUntil: 'domcontentloaded', timeout: 60000 });
      await page.waitForFunction(() => typeof state !== 'undefined' && typeof ordoSpecialOrder !== 'undefined', null, { timeout: 90000 });
      const result = await page.evaluate(async ({ korean, live }) => {
        const check = (condition, message) => { if (!condition) throw Error(message); };
        startupNoticeDecision = true;
        document.getElementById('consent-modal').style.display = 'none';
        document.body.classList.remove('consent-pending');
        state.useGps = false;
        await Promise.all([
          ordoDataLoader.ensure('special', Object.keys(ordoDataLoader.manifest.special)),
          ordoDataLoader.ensure('missal', Object.keys(ordoDataLoader.manifest.missal))
        ]);
        if (live) {
          await ordoFirebaseDataApi.ensure('mass', Object.keys(ordoDataLoader.manifest.special));
          check(globalThis.ordoFirebaseDataStatus?.massCount > 0, 'Published Mass data did not load');
        }
        const countries = Object.keys(ordoDataLoader.manifest.special);
        const select = (country, lang, vigil = true, day = 24) => {
          state.currentLoc = 'KR'; state.selectedLocationCode = country;
          state.targetLang = lang; state.targetLocationCode = ({ EN:'US', VN:'VN', JP:'JP', LA:'VA', ZH:'TW', IT:'IT', PT:'PT', ES:'MX', DE:'DE' })[lang] || 'KR';
          const date = new Date(2026, 11, day);
          getStrictDateBase = () => ({ localDay: cloneDateOnly(date), hour: 12, timeZone: 'Asia/Seoul' });
          state.dayOffset = 0; state.liturgyNavSlot = vigil ? 'vigil' : 'day';
          state.specialVigilNavKey = vigil ? 'christmas_vigil' : '';
          state.liturgicalDateContext = null;
          rememberLiturgicalDateContext(getStrictDateContext());
          state.liturgyInfo = buildGeneratedLiturgyInfo(date);
          resetMassDataFrom(getStartupOrdinaryMassData());
          const ordinary = JSON.parse(JSON.stringify(massData));
          const ordered = ordoSpecialOrder.build(date, massData);
          if (ordered) massData.splice(0, massData.length, ...ordered);
          render();
          return ordinary;
        };
        const translations = {};
        for (const lang of SUPPORTED_LANGS) {
          const ordinary = select('KR', lang);
          const crib = document.querySelector('[data-part-id="christmas_crib"]');
          check(crib && document.querySelector('#missal-root .part-container') === crib, lang + ': crib must be first');
          check(massData[0].id === 'special_section_christmas_crib' && massData[0].type === 'section', lang + ': large crib heading must come first');
          check(massData[0].kr === '구유경배예식', lang + ': exact Korean section title missing');
          const heading = massData[0][lang.toLowerCase()];
          check(heading && (lang === 'KR' || heading !== massData[0].kr), lang + ': localized section title missing');
          check(document.querySelector('#missal-root').textContent.includes(heading), lang + ': localized section title absent from DOM');
          check(massData[1].id === 'christmas_crib', lang + ': crib must precede the opening section');
          check(massData.filter(item => getBaseId(item.id) === 'christmas_crib').length === 1, lang + ': duplicate crib');
          const lines = massData[1].lines;
          check(lines.length === 1 && lines[0].rubric_kr === korean, lang + ': exact Korean rubric missing');
          const text = lines[0]['rubric_' + lang.toLowerCase()];
          check(text && (lang === 'KR' || text !== korean), lang + ': localized rubric missing');
          check(crib.textContent.includes(text), lang + ': localized rubric is absent from DOM');
          check(!crib.querySelector('.ai-btn,.ai-button,a'), lang + ': unexpected AI button or source link');
          check(!crib.textContent.includes('God of every nation'), lang + ': obsolete blessing remains');
          const universal = list => list.find(item => getBaseId(item.id) === 'universal');
          check(JSON.stringify(universal(massData).lines) === JSON.stringify(universal(ordinary).lines), lang + ': Universal Prayer was changed');
          translations[lang] = text;
        }
        for (const country of countries) {
          select(country, 'EN');
          check(massData[0].id === 'special_section_christmas_crib' && massData[1].id === 'christmas_crib', country + ': crib heading and rite do not start the Mass');
          check(massData[1].lines[0].rubric_kr === korean, country + ': stale country override');
        }
        select('KR', 'EN', false);
        check(!document.querySelector('[data-part-id="christmas_crib"]'), 'Crib appears at December 24 daytime Mass');
        select('KR', 'EN', false, 25);
        check(!document.querySelector('[data-part-id="christmas_crib"]'), 'Crib appears at December 25 Mass');
        select('KR', 'EN');
        return { languages: Object.keys(translations), countries: countries.length, korean, english: translations.EN };
      }, { korean, live });
      assert.deepEqual(errors, [], 'Browser runtime errors');
      const dir = path.join(root, 'tmp', 'christmas-crib-check');
      fs.mkdirSync(dir, { recursive: true });
      await page.screenshot({ path: path.join(dir, `${live ? 'live' : 'local'}-${viewport.width}.png`) });
      console.log(JSON.stringify({ passed: true, live, viewport: viewport.width, ...result }));
      await page.close();
    }
  } finally {
    await browser.close();
    if (server) await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
