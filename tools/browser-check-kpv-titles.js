'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs'), http = require('node:http'), path = require('node:path');
const { chromium } = require('playwright');
const { parseKpvTemporalTitle, withKpvTemporalTitle } = require('../functions/kpv-title');
const { resolveKtcg } = require('../functions/daily-ktcg');
const { createRuntime } = require('../functions/daily-runtime');
const massTool = require('./mass-data-editor'), metadata = require('./country-metadata-upload-tool');
const root = path.resolve(__dirname, '..');
const title = 'Thứ Ba · Tuần XXXI · Mùa Thường Niên';
const header = `<p class="massr__hero-eyebrow"><span class="massr__hero-eyebrow-date">3 tháng 11, 2026</span><span class="massr__hero-eyebrow-season massr__hero-eyebrow-season--ordinary">${title}</span></p><h1>Bài Đọc Thánh Lễ</h1><h2>Lễ ngày thường</h2>`;
const content = (ref, text) => ({ ref, text, html: `<p>${text}</p>` });
const payload = { date: '2026-11-03', profile: 'VIETNAM_SOUTH', primary: {
  via: 'temporal', celebration: null, setCode: 'ot-w31-tuesday-ii', templates: [{ units: [{ options: [{ contents: {
    'entrance_antiphon/1': content('Tv 37,22-23', 'Ca nhập lễ của ngày trong tuần.'),
    'reading/1': content('Pl 2,5-11', 'Bài đọc thứ nhất được giữ nguyên.'),
    'responsorial_psalm/1': content('Tv 21,26b-27', 'Lời thánh vịnh được giữ nguyên.'),
    'antiphon/1': content('', 'Lạy Chúa, con nguyện tán dương Ngài.'),
    'gospel_acclamation/1': content('Mt 11,28', 'Ha-lê-lui-a. Ha-lê-lui-a. Hãy đến cùng tôi. Ha-lê-lui-a.'),
    'gospel/1': content('Lc 14,15-24', 'Tin Mừng của ngày trong tuần được giữ nguyên.'),
    'communion_antiphon/1': content('Tv 15,11', 'Ca hiệp lễ của ngày trong tuần.')
  } }] }] }]
}, alternatives: [] };

async function main() {
  assert.equal(parseKpvTemporalTitle(header, payload.date), title);
  assert.equal(parseKpvTemporalTitle(header, '2026-11-05'), '', 'Another date was accepted');
  assert.equal(parseKpvTemporalTitle('<h2>Ngày thường</h2>', payload.date), '');
  const enriched = await withKpvTemporalTitle(payload, async url => {
    assert.equal(new URL(url).searchParams.get('date'), payload.date);
    assert.equal(new URL(url).searchParams.get('profile'), payload.profile);
    return new Response(header);
  });
  assert.equal(enriched.temporalTitle, title);
  assert.equal((await withKpvTemporalTitle(payload, async () => { throw Error('offline'); })), payload);
  assert.equal((await withKpvTemporalTitle(payload, async () => new Response(header.replace('3 tháng', '2 tháng')))), payload);
  const proper = { ...payload, primary: { ...payload.primary, via: 'celebration', celebration: { name: 'Thánh Ca-rô-lô, giám mục' } } };
  let properRequests = 0;
  await withKpvTemporalTitle(proper, async () => { properRequests++; return new Response(header); });
  assert.equal(properRequests, 0, 'A named celebration fetched a temporal title');
  const runtime = createRuntime({ country: 'VN', date: payload.date, source: 'ktcg' });
  let legacy;
  try {
    legacy = runtime.normalizeLegacy(payload);
    legacy.mass_reading[0].display_text = 'Ngày thường';
    legacy.mass_reading[0].date_info.daily_title = 'Thứ Ba Tuần XXXI - Mùa Thường Niên';
    runtime.fetch = async url => new Response(String(url).includes('/api/') ? JSON.stringify(payload)
      : String(url).includes('ktcgkpv.org') ? JSON.stringify({ success: true, data: legacy }) : header);
    const resolved = await resolveKtcg(payload.date, payload.profile, runtime);
    assert.equal(resolved.legacyPreferred, true);
    assert.equal(resolved.mass_reading[0].display_text, title, 'Legacy menu label overwrote the source title');
    assert.equal(resolved.mass_reading[0].date_info.daily_title, title);
    runtime.window.__legacy = legacy;
    assert.equal(runtime.run('ktcgkpvChoiceTitle(__legacy.mass_reading[0])'), legacy.mass_reading[0].date_info.daily_title);
    assert.equal(runtime.run("ktcgkpvChoiceTitle({display_text:'Thánh Ca-rô-lô',date_info:{daily_title:'Ngày thường'}})"), 'Thánh Ca-rô-lô');
    legacy.mass_reading[0].gospel[0].CONTENT = '<p>A different legacy Gospel.</p>';
    const different = await resolveKtcg(payload.date, payload.profile, runtime);
    assert(!different.legacyPreferred);
    assert.equal(different.mass_reading[0].display_text, title, 'Modern-only path lost the source title');
    assert(different.mass_reading[0].gospel[0].CONTENT.includes('được giữ nguyên'));
  } finally { runtime.close(); }

  const registry = massTool.runCountryMassSources(massTool.readCountryMassSources()).registry;
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
    await page.goto(`http://127.0.0.1:${server.address().port}/V31.html`);
    const result = await page.evaluate(async ({ payload, title, legacy, proper }) => {
      const check = (value, message) => { if (!value) throw Error(message); };
      const date = new Date(2026, 10, 3, 12);
      state.useGps = false; state.currentLoc = 'VN'; state.selectedLocationCode = 'VN';
      state.targetLang = 'KR'; state.targetLocationCode = 'KR'; state.vnReadingSource = 'ktcg';
      getStrictDateBase = () => ({ localDay: cloneDateOnly(date), hour: 12, timeZone: 'Asia/Ho_Chi_Minh' });
      getActiveLiturgicalSourceDate = () => date;
      getStrictMassSelector = () => ({ slot: 'day', specialVigil: '', allSoulsChoice: '' });
      await ensureActiveMassData();
      state.liturgyInfo = buildGeneratedLiturgyInfo(date);
      startupNoticeDecision = true; document.body.classList.remove('consent-pending');
      document.getElementById('consent-modal').style.display = 'none';
      const reports = [];
      for (const [kind, source, expected] of [['modern', { ...payload, temporalTitle: title }, title], ['legacy', legacy, legacy.mass_reading[0].date_info.daily_title], ['proper', { ...proper, temporalTitle: title }, proper.primary.celebration.name]]) {
        state.liturgyInfo = buildGeneratedLiturgyInfo(date);
        fetchKtcgkpvMassReadingJson = async () => source;
        const parsed = await fetchVietnameseKtcgDailyMass(date);
        check(parsed.title === expected, kind + ': incorrect parsed title: ' + parsed.title);
        check(parsed.data.gospel.cit_vn === 'Lc 14,15-24', kind + ': Gospel citation changed');
        resetMassDataFrom(getStartupOrdinaryMassData());
        const merged = {}; mergeSourceData(merged, parsed, 'VN'); finalizeDailyReadingsData(merged); render();
        const rendered = document.querySelector('.liturgy-name-text').textContent;
        check(rendered.includes(expected), kind + ': detailed title missing from rendered header: ' + rendered);
        reports.push({ kind, title: parsed.title, rendered });
      }
      return reports;
    }, { payload, title, legacy, proper });
    console.log(JSON.stringify({ viewport: 390, titleCases: result, legacyBodyPreserved: true, wrongDateRejected: true }, null, 2));
  } finally { await browser.close(); server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
