// Optional live-source diagnostic for Korean/Vietnamese daily-reading alignment.
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const { chromium } = require('@playwright/test');

const root = path.resolve(__dirname, '..');
const iso = process.env.ORDO_AUDIT_DATE || '2026-09-28';
const targetHtml = process.env.ORDO_CHECK_HTML || 'index.html';

(async () => {
  const [year, month, day] = iso.split('-').map(Number);
  const server = http.createServer((req, res) => {
    const file = path.resolve(root, `.${decodeURIComponent(new URL(req.url, 'http://localhost').pathname)}`);
    if (!file.startsWith(`${root}${path.sep}`)) return res.writeHead(403).end();
    fs.readFile(file, (error, data) => {
      if (error) return res.writeHead(404).end();
      res.setHeader('Content-Type', file.endsWith('.js') ? 'application/javascript' : 'text/html; charset=utf-8');
      res.end(data);
    });
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch({ headless: true });
  try {
    const [koreanResponse, vietnameseResponse] = await Promise.all([
      fetch(`https://missa.cbck.or.kr/DailyMissa/${iso.replaceAll('-', '')}`, { signal: AbortSignal.timeout(30000) }),
      fetch(`https://us-central1-ordinary-mass-app.cloudfunctions.net/ktcgProxy?date=${iso}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ day: String(day), month: String(month), year: String(year) }),
        signal: AbortSignal.timeout(30000)
      })
    ]);
    if (!koreanResponse.ok || !vietnameseResponse.ok) {
      throw new Error(`Live source failed: KR ${koreanResponse.status}, VN ${vietnameseResponse.status}`);
    }
    const koreanSource = await koreanResponse.text();
    const vietnamesePayload = await vietnameseResponse.json();
    const page = await browser.newPage();
    await page.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
    await page.goto(`http://127.0.0.1:${server.address().port}/${targetHtml}`, { waitUntil: 'load' });
    await page.waitForFunction(() => typeof strictParseDailyMass === 'function');
    const result = await page.evaluate(({ koreanSource, vietnameseData, iso }) => {
      const [year, month, day] = iso.split('-').map(Number);
      const date = new Date(year, month - 1, day, 12);
      state.currentLoc = 'KR';
      state.selectedLocationCode = 'KR';
      state.targetLang = 'VN';
      state.targetLocationCode = 'VN';
      state.vnReadingSource = 'ktcg';
      state.vnReadingSourceConfirmed = true;
      state.liturgicalDateContext = { date, localDate: date };
      state.liturgyInfo = buildGeneratedLiturgyInfo(date);
      const korean = strictParseDailyMass('KR', koreanSource, date);
      const choices = ktcgkpvOrderedReadingChoices(vietnameseData, date, null);
      const liturgyChoices = ktcgkpvOrderedLiturgyChoices(vietnameseData, date, null);
      const vietnamese = {
        title: state.liturgyInfo.names.VN,
        color: state.liturgyInfo.color,
        data: ktcgkpvDailySectionsFromChoices(choices, liturgyChoices, date)
      };
      const merged = {};
      mergeSourceData(merged, korean, 'KR');
      mergeSourceData(merged, vietnamese, 'VN');
      applyCachedVariantAlignments(merged, date);
      const optionMap = selectableOptionMapFromData(merged.psalm, 'psalm').optionMap;
      const readingDiagnostics = Object.fromEntries(['reading1', 'reading2', 'gospel'].map(baseId => {
        const section = merged[baseId] || {};
        const selectable = selectableOptionMapFromData(section, baseId);
        return [baseId, {
          optionCounts: Object.fromEntries(Object.entries(selectable.optionMap).map(([lang, options]) => [lang, options.length])),
          alignment: section.variantAlignment || [],
          citations: Object.fromEntries(Object.entries(section).filter(([key, value]) => /^cit_/.test(key) && value))
        }];
      }));
      resetMassDataFrom(getStartupOrdinaryMassData());
      applyDailyReadingsToMassData(merged);
      for (const baseId of Object.keys(readingDiagnostics)) {
        const item = massData.find(candidate => getBaseId(candidate.id) === baseId);
        readingDiagnostics[baseId].renderType = item && item.type;
        readingDiagnostics[baseId].renderedChoices = Object.fromEntries(Object.entries(item && item.variants || {}).map(([key, variant]) => [
          key,
          {
            label: variant.label,
            sourceIndexes: variant.__dailySourceIndexes,
            koreanIntro: (variant.lines || []).find(line => line.role_kr === 'intro')?.text_kr || '',
            vietnameseIntro: (variant.lines || []).find(line => line.role_vn === 'intro')?.text_vn || ''
          }
        ]));
      }
      render();
      for (const baseId of ['reading1', 'gospel']) {
        const selector = document.querySelector(`section[data-part-id="${baseId}"] select.select-inline`);
        readingDiagnostics[baseId].visibleSelectorChoices = selector ? selector.options.length : 0;
      }
      return {
        koreanTitle: korean.title,
        vietnameseChoiceTitles: choices.map(ktcgkpvChoiceTitle),
        citations: { kr: merged.psalm.cit_kr, vn: merged.psalm.cit_vn },
        optionCitations: { kr: merged.psalm.optionCits_kr, vn: merged.psalm.optionCits_vn },
        meanings: Object.fromEntries(Object.entries(optionMap).map(([lang, options]) => [
          lang,
          options.map(option => variantOptionMeaningText('psalm', option))
        ])),
        alignment: merged.psalm.variantAlignment,
        readingDiagnostics,
        parsedCitations: {
          kr: (merged.psalm.optionCits_kr?.length ? merged.psalm.optionCits_kr : [{ cit_kr: merged.psalm.cit_kr }])
            .map(entry => globalThis.bibleCitation.parse(entry.cit_kr, 'KR')),
          vn: (merged.psalm.optionCits_vn?.length ? merged.psalm.optionCits_vn : [{ cit_vn: merged.psalm.cit_vn }])
            .map(entry => globalThis.bibleCitation.parse(entry.cit_vn, 'VN'))
        }
      };
    }, { koreanSource, vietnameseData: vietnamesePayload.data, iso });
    console.log(JSON.stringify(result, null, 2));
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
