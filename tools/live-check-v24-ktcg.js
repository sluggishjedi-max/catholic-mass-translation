const fs = require('fs');
const http = require('http');
const path = require('path');
const { chromium } = require('@playwright/test');

const root = path.resolve(__dirname, '..');
const targetHtml = process.env.ORDO_CHECK_HTML || 'V24.html';

function startServer() {
  const server = http.createServer((request, response) => {
    const url = new URL(request.url, 'http://127.0.0.1');
    const route = decodeURIComponent(url.pathname === '/' ? `/${targetHtml}` : url.pathname);
    const file = path.resolve(root, route.replace(/^\/+/, ''));
    if (!file.startsWith(root)) return response.writeHead(403).end('Forbidden');
    fs.readFile(file, (error, data) => {
      if (error) return response.writeHead(404).end('Not found');
      const contentType = path.extname(file) === '.html' ? 'text/html; charset=utf-8' : 'application/octet-stream';
      response.writeHead(200, { 'content-type': contentType });
      response.end(data);
    });
  });
  return new Promise(resolve => server.listen(0, '127.0.0.1', () => resolve(server)));
}

(async () => {
  const server = await startServer();
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    page.on('console', message => {
      if (message.type() === 'warning' || message.type() === 'error') console.error(message.text());
    });
    await page.goto(`http://127.0.0.1:${server.address().port}/${targetHtml}`, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => typeof fetchVietnameseKtcgDailyMass === 'function' && typeof applyVietnameseKtcgDiocesanPrayers === 'function');
    const results = await page.evaluate(async () => {
      const dates = ['2026-07-22', '2026-07-23', '2026-07-24', '2026-07-25', '2026-07-26'];
      const output = [];
      for (const iso of dates) {
        const [year, month, day] = iso.split('-').map(Number);
        const date = new Date(year, month - 1, day, 9);
        state.currentLoc = 'VN';
        state.targetLang = 'KR';
        state.vnReadingSource = 'ktcg';
        state.liturgyInfo = buildGeneratedLiturgyInfo(date);
        const parsed = await fetchVietnameseKtcgDailyMass(date);
        await applyVietnameseKtcgDiocesanPrayers(parsed, date);
        output.push({
          date: iso,
          title: parsed.title,
          source: parsed.prayerSourceUrl || '',
          acclamation: parsed.data.gospel_accl || null,
          communion: parsed.data.communion || null,
          collect: parsed.data.collect?.text || '',
          offering: parsed.data.prayer_offerings?.text || '',
          after: parsed.data.prayer_after?.text || ''
        });
      }
      return output;
    });
    for (const result of results) {
      if (!result.source || !result.collect || !result.offering || !result.after) {
        throw new Error(`Missing diocesan prayers for ${result.date}: ${JSON.stringify(result)}`);
      }
    }
    console.log(JSON.stringify(results, null, 2));
    const fridayAlignment = await page.evaluate(async () => {
      const date = new Date(2026, 6, 24, 9);
      state.currentLoc = 'KR';
      state.targetLang = 'VN';
      state.vnReadingSource = 'ktcg';
      state.liturgyInfo = buildGeneratedLiturgyInfo(date);
      const korean = await fetchStrictDailyMass('KR', date);
      const vietnamese = await fetchStrictDailyMass('VN', date);
      const merged = createDailyReadingData();
      mergeSourceData(merged, korean, 'KR');
      mergeSourceData(merged, vietnamese, 'VN');
      const section = merged.communion || {};
      const selectable = selectableOptionMapFromData(section, 'communion');
      applyCachedVariantAlignments(merged, date);
      applyDailyReadingsToMassData(merged);
      const rendered = massData.find(item => getBaseId(item.id) === 'communion');
      return {
        korean: korean.data?.communion || null,
        vietnamese: vietnamese.data?.communion || null,
        optionMap: selectable.optionMap,
        fallbackAlignment: buildFallbackVariantAlignment('communion', selectable.optionMap, section),
        appliedAlignment: section.variantAlignment || [],
        renderedVariants: Object.fromEntries(Object.entries(rendered?.variants || {}).map(([key, variant]) => [
          key,
          {
            label: variant.label,
            citation: variant.cit,
            korean: (variant.lines || []).map(line => line.text_kr).filter(Boolean),
            vietnamese: (variant.lines || []).map(line => line.text_vn).filter(Boolean)
          }
        ]))
      };
    });
    console.log(JSON.stringify({ fridayAlignment }, null, 2));
    const prayerDiagnostics = await page.evaluate(async () => {
      const date = new Date(2026, 6, 22, 9);
      state.currentLoc = 'KR';
      state.targetLang = 'VN';
      state.vnReadingSource = 'ktcg';
      state.liturgyInfo = buildGeneratedLiturgyInfo(date);
      const korean = await fetchStrictDailyMass('KR', date);
      const vietnamese = await fetchStrictDailyMass('VN', date);
      const merged = createDailyReadingData();
      mergeSourceData(merged, korean, 'KR');
      mergeSourceData(merged, vietnamese, 'VN');
      applyCachedVariantAlignments(merged, date);
      const sections = {};
      for (const key of ['collect', 'prayer_offerings', 'prayer_after']) {
        const section = merged[key] || {};
        const selectable = selectableOptionMapFromData(section, key);
        sections[key] = {
          krLines: section.kr_lines || [],
          vnLines: section.vn_lines || [],
          optionCounts: Object.fromEntries(Object.entries(selectable.optionMap).map(([lang, options]) => [lang, options.length])),
          maxOptions: selectable.maxOptions,
          alignment: section.variantAlignment || []
        };
      }
      applyDailyReadingsToMassData(merged);
      for (const key of Object.keys(sections)) {
        const item = massData.find(candidate => getBaseId(candidate.id) === key);
        sections[key].renderType = item?.type || '';
        sections[key].renderVariants = Object.fromEntries(Object.entries(item?.variants || {}).map(([variantKey, variant]) => [
          variantKey,
          {
            label: variant.label,
            kr: (variant.lines || []).map(line => line.text_kr).filter(Boolean),
            vn: (variant.lines || []).map(line => line.text_vn).filter(Boolean)
          }
        ]));
      }
      return sections;
    });
    console.log(JSON.stringify({ prayerDiagnostics }, null, 2));
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error.stack || error);
  process.exit(1);
});
