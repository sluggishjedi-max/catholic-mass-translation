'use strict';
const fs = require('node:fs'), http = require('node:http'), path = require('node:path');
const { chromium } = require('playwright');
const mass = require('./mass-data-editor'), metadata = require('./country-metadata-upload-tool');
const root = path.resolve(__dirname, '..');
const live = process.env.ORDO_COLOR_RECORDS ? JSON.parse(fs.readFileSync(process.env.ORDO_COLOR_RECORDS, 'utf8')) : [];

(async () => {
  const registry = mass.runCountryMassSources(mass.readCountryMassSources()).registry;
  const countries = Object.fromEntries(metadata.countryMetadataItems().map(item => [item.jurisdiction, item]));
  const server = http.createServer((req, res) => {
    const file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
    if (!file.startsWith(root + path.sep)) return res.writeHead(403).end();
    fs.readFile(file, (error, data) => error ? res.writeHead(404).end() : res.setHeader('Content-Type', file.endsWith('.js') ? 'application/javascript' : 'text/html;charset=utf-8').end(data));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch({ headless: true });
  try {
    for (const width of [1280, 390]) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      await page.addInitScript(({ registry, countries }) => {
        window.ordoPrayerEditorPreview = true;
        window.uploadedCountryMassData = registry; window.uploadedCountryMassMetadata = countries;
      }, { registry, countries });
      await page.route('**/*', route => {
        const url = new URL(route.request().url());
        if (url.pathname.endsWith('/dailyMassData')) {
          const saved = live.find(row => Object.entries(row.request).every(([key, value]) => url.searchParams.get(key) === value));
          return saved ? route.fulfill({ contentType: 'application/json', body: JSON.stringify(saved) }) : route.abort();
        }
        return url.hostname === '127.0.0.1' ? route.continue() : route.abort();
      });
      await page.goto(`http://127.0.0.1:${server.address().port}/V31.html`);
      const result = await page.evaluate(async live => {
        const check = (value, message) => { if (!value) throw Error(message); };
        let date = new Date(2026, 10, 4, 12);
        const locations = { KR: 'KR', VN: 'VN', EN: 'US', JP: 'JP', LA: 'VA', ZH: 'TW', IT: 'IT', PT: 'PT', ES: 'MX', DE: 'DE' };
        getStrictDateBase = () => ({ localDay: cloneDateOnly(date), hour: 12, timeZone: 'Asia/Seoul' });
        getActiveLiturgicalSourceDate = () => date;
        getStrictMassSelector = () => ({ slot: 'day', specialVigil: '', allSoulsChoice: '' });
        state.useGps = false; state.liturgicalDateContext = null;
        await ensureActiveMassData();
        startupNoticeDecision = true; document.body.classList.remove('consent-pending'); document.getElementById('consent-modal').style.display = 'none';
        const setup = (left, right) => {
          state.currentLoc = left; state.targetLang = right; state.selectedLocationCode = locations[left]; state.targetLocationCode = locations[right];
          state.liturgyInfo = buildGeneratedLiturgyInfo(date);
          resetMassDataFrom(getStartupOrdinaryMassData());
        };
        const screenColor = expected => {
          render();
          const theme = liturgyColorVisualTheme(expected);
          check(document.documentElement.style.getPropertyValue('--liturgy-bg-color') === theme.bg, 'Header theme differs from original color');
          check(document.documentElement.style.getPropertyValue('--primary-color') === theme.accent, 'Section theme differs from original color');
          const probe = document.createElement('div'); probe.style.backgroundColor = theme.bg; document.body.append(probe);
          check(getComputedStyle(document.getElementById('main-header')).backgroundColor === getComputedStyle(probe).backgroundColor, 'Rendered header differs from original color'); probe.remove();
        };
        let cases = 0;
        for (const left of SUPPORTED_LANGS) for (const right of SUPPORTED_LANGS.filter(lang => lang !== left)) for (const originalFirst of [true, false]) {
          setup(left, right);
          const original = { title: '[홍] Original source title', color: liturgyColorMap.green, serverRecord: { kind: 'edited', version: 7 }, data: {} };
          const translation = { title: '[백] Translated source title', color: liturgyColorMap.white, serverRecord: { kind: 'collected', version: 2 }, data: {} };
          const data = {}; let originalMerged = false;
          for (const lang of originalFirst ? [left, right] : [right, left]) {
            mergeSourceData(data, lang === left ? original : translation, lang);
            finalizeDailyReadingsData(data);
            originalMerged ||= lang === left;
            if (originalMerged) check(state.liturgyInfo.color === liturgyColorMap.green, left + '/' + right + ': source color was overwritten, originalFirst=' + originalFirst);
          }
          if (right === (left === 'KR' ? 'VN' : 'KR')) screenColor(original.color);
          cases++;
        }
        let vestmentCases = 0;
        for (const color of Object.values(liturgyColorMap)) {
          setup('VN', 'KR'); const data = {};
          mergeSourceData(data, { title: '[홍] Source title', color, data: {} }, 'VN', { suppressTitle: true });
          mergeSourceData(data, { title: '[백] Translation title', color: liturgyColorMap.white, data: {} }, 'KR');
          finalizeDailyReadingsData(data); check(state.liturgyInfo.color === color, 'Stored source color lost: ' + color); screenColor(color); vestmentCases++;
        }
        setup('VN', 'KR');
        const noColor = {};
        mergeSourceData(noColor, { title: 'Thứ Tư tuần XXXI Thường niên', data: {} }, 'VN');
        mergeSourceData(noColor, { title: '[홍] Translation title', color: liturgyColorMap.red, data: {} }, 'KR');
        finalizeDailyReadingsData(noColor);
        check(state.liturgyInfo.color !== liturgyColorMap.red, 'Translation supplied a missing original color');
        setup('VN', 'KR');
        const calendarColor = {};
        mergeSourceData(calendarColor, { title: '[홍] Source title', calendarContext: { confirmed: true, priority: true, color: liturgyColorMap.purple }, data: {} }, 'VN');
        finalizeDailyReadingsData(calendarColor); check(state.liturgyInfo.color === liturgyColorMap.purple, 'Confirmed original calendar color was overwritten');
        date = new Date(2026, 11, 25, 12); setup('VN', 'KR');
        const christmas = {};
        mergeSourceData(christmas, { title: 'Giáng Sinh', color: liturgyColorMap.white, data: {} }, 'VN');
        finalizeDailyReadingsData(christmas); check(state.liturgyInfo.color === liturgyColorMap.white, 'Gold recommendation replaced the stored original white color');
        const liveCases = [];
        for (const left of live) for (const right of live.filter(row => row.lang !== left.lang)) {
          const [year, month, day] = left.request.date.split('-').map(Number); date = new Date(year, month - 1, day, 12);
          const variant = left.request.variant;
          state.allSoulsNavChoice = variant === 'day' ? '' : variant;
          getStrictMassSelector = () => ({ slot: 'day', specialVigil: '', allSoulsChoice: state.allSoulsNavChoice });
          state.liturgicalDateContext = { date, localDate: date, navSlot: 'day', allSoulsChoice: state.allSoulsNavChoice };
          await loadAllSoulsMassConfigIfNeeded(date);
          setup(left.lang, right.lang); const data = {};
          state.vnReadingSource = 'ktcg'; state.vnReadingSourceConfirmed = true; state.gpsCoordinates = { lat: 10.78, lon: 106.69 };
          window.ordoPrayerEditorPreview = false;
          const original = await fetchParsedDailyMass(left.lang, date, { locationCode: left.request.country, forceRemote: true });
          const translated = await fetchParsedDailyMass(right.lang, date, { locationCode: right.request.country, forceRemote: true });
          check(original.serverRecord?.version === left.version && translated.serverRecord?.version === right.version, 'Configured published Firestore records were not loaded');
          mergeSourceData(data, translated, right.lang); mergeSourceData(data, original, left.lang);
          finalizeDailyReadingsData(data); check(state.liturgyInfo.color === left.parsed.color, 'Firestore original color lost'); screenColor(left.parsed.color);
          liveCases.push({ original: left.lang, translation: right.lang, color: state.liturgyInfo.color, title: left.parsed.title });
        }
        return { languages: SUPPORTED_LANGS.length, conflictingPairs: cases, vestmentCases, liveCases };
      }, live);
      console.log(JSON.stringify({ width, ...result }));
      await page.close();
    }
  } finally { await browser.close(); server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); }
})().catch(error => { console.error(error); process.exitCode = 1; });
