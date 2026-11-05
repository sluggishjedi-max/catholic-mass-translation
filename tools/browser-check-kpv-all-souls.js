'use strict';
const fs = require('node:fs'), path = require('node:path'), http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const { createRuntime } = require('../functions/daily-runtime');
const mass = require('./mass-data-editor'), metadata = require('./country-metadata-upload-tool');
const root = path.resolve(__dirname, '..');
const citations = [['G 19,1.23-27a', 'Rm 5,5-11', 'Ga 6,37-40'], ['Is 25,6a.7-9', 'Rm 8,14-23', 'Lc 23,33.39-43'], ['2 Mcb 12,43-45', 'Kh 21,1-5a.6b-7', 'Ga 11,17-27']];
function fixtureMass(index) {
  const content = (code, ref, text) => ({ code, ref, text, html: '<p>' + text + '</p>' });
  return {
    setCode: 'all-souls', via: 'celebration', celebrationCode: 'all-souls',
    celebration: { code: 'all-souls', name: 'Cầu Cho Các Tín Hữu Đã Qua Đời' },
    formCode: ['principal', 'ii', 'iii'][index], formName: [null, 'Lễ II', 'Lễ III'][index],
    templates: [{ units: [{ options: [{ contents: {
      'entrance_antiphon/1': content('entrance-' + index, '', 'Ca nhập lễ của Thánh lễ.'),
      'reading/1': content('reading1-' + index, citations[index][0], 'Bài đọc thứ nhất của Thánh lễ ' + (index + 1) + '.'),
      'responsorial_psalm/1': content('psalm-' + index, 'Tv 26,1.4.13-14', 'Chúa là nguồn ánh sáng và ơn cứu độ của tôi.'),
      'antiphon/1': content('response-' + index, '', 'Tôi vững vàng tin tưởng nơi Chúa.'),
      'reading/2': content('reading2-' + index, citations[index][1], 'Bài đọc thứ hai của Thánh lễ ' + (index + 1) + '.'),
      'gospel_acclamation/1': content('acclamation-' + index, 'Ga 6,40', 'Ha-lê-lui-a. Ha-lê-lui-a. Chúa ban sự sống đời đời. Ha-lê-lui-a.'),
      'gospel/1': content('gospel-' + index, citations[index][2], 'Tin Mừng của Thánh lễ ' + (index + 1) + '. Chúa ban sự sống đời đời.'),
      'communion_antiphon/1': content('communion-' + index, '', 'Ca hiệp lễ của Thánh lễ.')
    } }] }] }]
  };
}
const payload = process.env.ORDO_KPV_FIXTURE
  ? JSON.parse(fs.readFileSync(process.env.ORDO_KPV_FIXTURE, 'utf8'))
  : { date: '2026-11-02', profile: 'VIETNAM_SOUTH', primary: fixtureMass(0), alternatives: [fixtureMass(1), fixtureMass(2)] };
async function main() {
  // The deployed collector packages the same app module and must also collect
  // the three dated sources without silently publishing a fixed formulary.
  const runtime = createRuntime({ country: 'VN', date: payload.date, source: 'ktcg' }, { ktcgProvider: async () => payload });
  try {
    runtime.run('applyVietnameseKtcgDiocesanPrayers = async () => {};');
    for (const [index, variant] of ['first', 'second', 'third'].entries()) {
      const result = await runtime.collect(variant);
      assert(result.validation.complete, variant + ': incomplete collected readings');
      assert(!result.parsed.fallbackSource, variant + ': collector used a fixed formulary');
      assert.equal(result.parsed.data.reading1.cit_vn, citations[index][0]);
      assert.equal(result.parsed.data.gospel.cit_vn, citations[index][2]);
    }
  } finally { runtime.close(); }
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
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.addInitScript(({ registry, countries }) => {
      window.ordoPrayerEditorPreview = true;
      window.uploadedCountryMassData = registry; window.uploadedCountryMassMetadata = countries;
    }, { registry, countries });
    await page.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
    await page.goto('http://127.0.0.1:' + server.address().port + '/V31.2.html');
    const result = await page.evaluate(async ({ payload, citations }) => {
      const check = (value, message) => { if (!value) throw Error(message); };
      const date = new Date(2026, 10, 2, 12), reports = [];
      state.useGps = false; state.currentLoc = 'VN'; state.selectedLocationCode = 'VN';
      state.targetLang = 'KR'; state.targetLocationCode = 'KR'; state.vnReadingSource = 'ktcg';
      getStrictDateBase = () => ({ localDay: cloneDateOnly(date), hour: 12, timeZone: 'Asia/Ho_Chi_Minh' });
      getActiveLiturgicalSourceDate = () => date;
      await ensureActiveMassData(); await loadAllSoulsMassConfigIfNeeded(date);
      startupNoticeDecision = true; document.body.classList.remove('consent-pending');
      document.getElementById('consent-modal').style.display = 'none';
      fetchKtcgkpvMassReadingJson = async () => payload;
      for (const country of ['VN', 'KR']) for (const reordered of [false, true]) {
        state.selectedLocationCode = country;
        const current = { ...payload, alternatives: reordered ? [...payload.alternatives].reverse() : payload.alternatives };
        fetchKtcgkpvMassReadingJson = async () => current;
        for (const [index, variant] of ['first', 'second', 'third'].entries()) {
          state.allSoulsNavChoice = variant;
          state.liturgicalDateContext = { date, localDate: date, navSlot: 'day', allSoulsChoice: variant };
          getStrictMassSelector = () => ({ slot: 'day', specialVigil: '', allSoulsChoice: variant });
          state.liturgyInfo = buildGeneratedLiturgyInfo(date);
          const parsed = await dailySourceFetchers.VN(date, { locationCode: country });
          check(!parsed.fallbackSource, country + ' ' + variant + ': fixed-formulary fallback');
          for (const key of ['reading1', 'psalm', 'reading2', 'gospel_accl', 'gospel']) check(sourceSectionHasContent(parsed.data[key]), variant + ': missing ' + key);
          check(parsed.data.reading1.cit_vn === citations[index][0], variant + ': wrong first reading');
          check(parsed.data.reading2.cit_vn === citations[index][1], variant + ': wrong second reading');
          check(parsed.data.gospel.cit_vn === citations[index][2], variant + ': wrong Gospel');
          const expectedMassKey = index === 0 ? 'primary' : 'alternative-' + (reordered ? 2 - index : index - 1);
          check(new URL(parsed.sourceUrl).searchParams.get('mass') === expectedMassKey, variant + ': wrong source link');
          resetMassDataFrom(getStartupOrdinaryMassData());
          state.dailySourceProvenance = { VN: { date: '2026-11-02', source: { authority: 'stale fallback' } } };
          const merged = {}; mergeSourceData(merged, parsed, 'VN'); finalizeDailyReadingsData(merged); render();
          check(!state.dailySourceProvenance.VN, variant + ': stale fallback provenance retained');
          check(!document.querySelector('.daily-source-provenance'), variant + ': false source-unavailable notice rendered');
          const gospel = document.querySelector('[data-part-id="gospel"]');
          check(gospel && gospel.textContent.includes(parsed.data.gospel.lines.find(line => line.role !== 'summary' && line.text)?.text), variant + ': source Gospel was not rendered');
          reports.push({ country, reordered, variant, gospel: parsed.data.gospel.cit_vn, sourceUrl: parsed.sourceUrl });
        }
      }
      getStrictMassSelector = () => ({ slot: 'day', specialVigil: '', allSoulsChoice: 'second' });
      const missing = { ...payload, alternatives: payload.alternatives.filter(mass => mass.formCode !== 'ii') };
      check(selectKpvMassCandidate(missing, date) === null, 'Missing second Mass was replaced by another form');
      const unnamed = structuredClone(payload); unnamed.alternatives.forEach(mass => { mass.formName = null; });
      check(selectKpvMassCandidate(unnamed, date)?.formCode === 'ii', 'Structured form code was ignored without a display label');
      return { reports, missingFormRejected: true, staleNoticeCleared: true, viewport: innerWidth };
    }, { payload, citations });
    console.log(JSON.stringify({ serverVariants: 3, browserCases: result.reports.length, ...result }, null, 2));
  } finally { await browser.close(); server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
