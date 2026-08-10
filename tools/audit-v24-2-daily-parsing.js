const fs = require('fs');
const http = require('http');
const path = require('path');
const { chromium } = require('@playwright/test');

const root = path.resolve(__dirname, '..');
const targetHtml = process.env.ORDO_CHECK_HTML || 'V24.2.html';
const startIso = process.env.ORDO_AUDIT_START || '2026-07-10';
const endIso = process.env.ORDO_AUDIT_END || '2026-09-10';
const krOnly = process.env.ORDO_AUDIT_KR_ONLY === '1';
const auditedSections = [
  'entrance', 'collect', 'reading1', 'psalm', 'reading2', 'gospel_accl',
  'gospel', 'prayer_offerings', 'communion', 'prayer_after'
];

function startServer() {
  const server = http.createServer((request, response) => {
    const url = new URL(request.url, 'http://127.0.0.1');
    const route = decodeURIComponent(url.pathname === '/' ? `/${targetHtml}` : url.pathname);
    const file = path.resolve(root, route.replace(/^\/+/, ''));
    if (!file.startsWith(root)) return response.writeHead(403).end('Forbidden');
    fs.readFile(file, (error, data) => {
      if (error) return response.writeHead(404).end('Not found');
      const type = path.extname(file) === '.html' ? 'text/html; charset=utf-8' : 'application/octet-stream';
      response.writeHead(200, { 'content-type': type });
      response.end(data);
    });
  });
  return new Promise(resolve => server.listen(0, '127.0.0.1', () => resolve(server)));
}

function isoDates(start, end) {
  const dates = [];
  for (let date = new Date(`${start}T09:00:00`); date <= new Date(`${end}T09:00:00`); date.setDate(date.getDate() + 1)) {
    dates.push(`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`);
  }
  return dates;
}

(async () => {
  const server = await startServer();
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.stack || String(error)));

  try {
    await page.goto(`http://127.0.0.1:${server.address().port}/${targetHtml}`, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => typeof fetchKtcgkpvMassReadingJson === 'function'
      && typeof fetchStrictDailyMass === 'function'
      && typeof applyCachedVariantAlignments === 'function');

    const dates = isoDates(startIso, endIso);
    const results = [];
    for (let dateIndex = 0; dateIndex < dates.length; dateIndex += 1) {
      const iso = dates[dateIndex];
      const result = await page.evaluate(async ({ iso, auditedSections, krOnly }) => {
        const date = new Date(`${iso}T09:00:00`);
        state.currentLoc = 'KR';
        state.targetLang = 'VN';
        state.vnReadingSource = 'ktcg';
        state.liturgicalDateContext = { date, localDate: date, leftLang: 'KR', slot: 'day' };
        state.liturgyInfo = buildGeneratedLiturgyInfo(date);

        const issues = [];
        const fetchWithAuditRetry = async factory => {
          let lastError = null;
          for (let attempt = 0; attempt < 4; attempt += 1) {
            try {
              return await factory();
            } catch (error) {
              lastError = error;
              if (!/HTTP 429/i.test(String(error)) || attempt === 3) throw error;
              await new Promise(resolve => setTimeout(resolve, 1200 * (attempt + 1)));
            }
          }
          throw lastError;
        };
        const [payloadResult, koreanResult] = await Promise.allSettled([
          krOnly ? Promise.resolve(null) : fetchWithAuditRetry(() => fetchKtcgkpvMassReadingJson(date)),
          fetchWithAuditRetry(() => fetchStrictDailyMass('KR', date))
        ]);
        const sourceErrors = [];
        if (payloadResult.status !== 'fulfilled') sourceErrors.push(`KTCG_FETCH:${payloadResult.reason}`);
        if (koreanResult.status !== 'fulfilled') {
          return { date: iso, title: state.liturgyInfo.names.KR, issues: [], sourceErrors: [`KR_FETCH:${koreanResult.reason}`] };
        }

        const payload = payloadResult.status === 'fulfilled' ? payloadResult.value : null;
        const korean = koreanResult.value;
        const choices = payload ? ktcgkpvOrderedReadingChoices(payload, date, null) : [];
        const liturgyChoices = payload ? ktcgkpvOrderedLiturgyChoices(payload, date, null) : [];
        const vietnameseSections = payload ? ktcgkpvDailySectionsFromChoices(choices, liturgyChoices, date) : {};
        const merged = createDailyReadingData();
        mergeSourceData(merged, korean, 'KR');
        if (payload) mergeSourceData(merged, { data: vietnameseSections }, 'VN');
        applyCachedVariantAlignments(merged, date);

        const names = state.liturgyInfo.names || {};
        ['KR', 'VN', 'EN', 'JP', 'LA'].forEach(lang => {
          if (!String(names[lang] || '').trim()) issues.push(`TITLE_MISSING:${lang}`);
        });

        const sectionStats = {};
        auditedSections.forEach(baseId => {
          const section = merged[baseId];
          if (!section) return;
          const { optionMap, maxOptions } = selectableOptionMapFromData(section, baseId);
          const rawVnOptions = Array.isArray(section.vn_lines)
            ? splitParsedAlternatives(section.vn_lines).filter(option => option.length)
            : [];
          const vnOptions = optionMap.vn || [];
          const krOptions = optionMap.kr || [];
          const rawAlternativeCount = Array.isArray(section.vn_lines)
            ? section.vn_lines.filter(line => /^(?:Hoặc|Hoặc là)\s*:/iu.test(cleanNodeText([line && line.rubric, line && line.text].filter(Boolean).join(' ')))).length
            : 0;
          if (rawVnOptions.length > vnOptions.length) issues.push(`${baseId}:DUPLICATE_VN_OPTIONS:${rawVnOptions.length}->${vnOptions.length}`);
          if (rawAlternativeCount > Math.max(0, vnOptions.length - 1)) {
            issues.push(`${baseId}:RAW_HOAC:${rawAlternativeCount}/${vnOptions.length}`);
          }

          ['optionCits_vn', 'optionLabels_vn', 'optionKinds_vn'].forEach(key => {
            if (Array.isArray(section[key]) && section[key].length !== vnOptions.length) {
              issues.push(`${baseId}:METADATA_LENGTH:${key}:${section[key].length}/${vnOptions.length}`);
            }
          });

          if (ktcgkpvDateIsOrdinaryWeekdayOnly(date) && ['reading1', 'reading2', 'gospel'].includes(baseId)) {
            const improperKind = (section.optionKinds_vn || []).some(kind => kind === 'proper');
            const improperLabel = (section.optionLabels_vn || []).some(label => /\briêng\b/iu.test(label));
            if (improperKind || improperLabel) issues.push(`${baseId}:ORDINARY_PROPER_LABEL`);
          }

          if (['reading1', 'reading2', 'gospel'].includes(baseId)) {
            vnOptions.forEach((option, optionIndex) => {
              const body = variantOptionMeaningText(baseId, option);
              if (body.split(/\n+/).some(line => /^\s*\d+\s*$/u.test(line) || /^\s*\d+(?=\p{L})/u.test(line))) {
                issues.push(`${baseId}:VERSE_MARKER:${optionIndex}`);
              }
            });
          }

          const alignment = Array.isArray(section.variantAlignment) ? section.variantAlignment : [];
          const used = {};
          Object.keys(optionMap).forEach(lower => { used[lower] = new Set(); });
          alignment.forEach((group, groupIndex) => {
            const semanticKeys = [];
            Object.keys(optionMap).forEach(lower => {
              if (!Number.isInteger(group && group[lower])) return;
              const index = group[lower];
              if (index < 0 || index >= optionMap[lower].length) issues.push(`${baseId}:ALIGN_RANGE:${lower}:${index}`);
              if (used[lower].has(index)) issues.push(`${baseId}:ALIGN_DUPLICATE:${lower}:${index}`);
              used[lower].add(index);
              const option = optionMap[lower][index];
              const semanticKey = variantSemanticKey(baseId, variantOptionMeaningText(baseId, option));
              if (semanticKey) semanticKeys.push(semanticKey);
            });
            if (new Set(semanticKeys).size > 1) issues.push(`${baseId}:SEMANTIC_CONFLICT:${groupIndex}`);
            if (['reading1', 'reading2', 'gospel'].includes(baseId)) {
              const mapped = Object.keys(optionMap).filter(lower => Number.isInteger(group && group[lower]));
              for (let leftIndex = 0; leftIndex < mapped.length; leftIndex += 1) {
                for (let rightIndex = leftIndex + 1; rightIndex < mapped.length; rightIndex += 1) {
                  const left = mapped[leftIndex];
                  const right = mapped[rightIndex];
                  const leftCitation = strictReadingOptionCitation(section, left, group[left]);
                  const rightCitation = strictReadingOptionCitation(section, right, group[right]);
                  if (leftCitation && rightCitation && citationsAreDifferent(leftCitation, rightCitation)) {
                    issues.push(`${baseId}:CITATION_CONFLICT:${groupIndex}:${left}/${right}`);
                  }
                }
              }
            }
          });

          if (alignment.length) {
            Object.keys(optionMap).forEach(lower => {
              if (used[lower].size !== optionMap[lower].length) {
                issues.push(`${baseId}:ALIGN_COVERAGE:${lower}:${used[lower].size}/${optionMap[lower].length}`);
              }
            });
          }

          const sharedKeys = new Set(krOptions
            .map(option => variantSemanticKey(baseId, variantOptionMeaningText(baseId, option)))
            .filter(Boolean));
          const commonSemanticKeys = vnOptions
            .map(option => variantSemanticKey(baseId, variantOptionMeaningText(baseId, option)))
            .filter(key => key && sharedKeys.has(key));
          commonSemanticKeys.forEach(key => {
            // Readings and Gospels are aligned by normalized biblical
            // citation. A generic refrain such as "love one another" is not
            // enough to override different lectionary passages.
            if (['reading1', 'reading2', 'gospel'].includes(baseId)) return;
            const paired = alignment.some(group => {
              if (!Number.isInteger(group.kr) || !Number.isInteger(group.vn)) return false;
              const krKey = variantSemanticKey(baseId, variantOptionMeaningText(baseId, krOptions[group.kr]));
              const vnKey = variantSemanticKey(baseId, variantOptionMeaningText(baseId, vnOptions[group.vn]));
              return krKey === key && vnKey === key;
            });
            if (maxOptions > 1 && !paired) issues.push(`${baseId}:MISSED_SEMANTIC_MATCH:${key}`);
          });

          sectionStats[baseId] = {
            kr: krOptions.length,
            vn: vnOptions.length,
            alignment: alignment.length,
            kinds: section.optionKinds_vn || []
          };
        });

        ['reading1', 'psalm', 'gospel'].forEach(baseId => {
          if (!merged[baseId]) issues.push(`${baseId}:CORE_SECTION_MISSING`);
        });
        return {
          date: iso,
          title: names.KR,
          vietnameseTitle: names.VN,
          choiceTitles: choices.map(ktcgkpvChoiceTitle),
          sectionStats,
          issues,
          sourceErrors
        };
      }, { iso, auditedSections, krOnly });
      results.push(result);
      if ((dateIndex + 1) % 5 === 0 || result.issues.length || result.sourceErrors.length || dateIndex === dates.length - 1) {
        console.log(`[${dateIndex + 1}/${dates.length}] ${iso} issues=${result.issues.length} sourceErrors=${result.sourceErrors.length}`);
      }
      await new Promise(resolve => setTimeout(resolve, 350));
    }

    const failures = results.filter(result => result.issues.length);
    const unavailable = results.filter(result => result.sourceErrors && result.sourceErrors.length);
    const summary = {
      html: targetHtml,
      mode: krOnly ? 'kr-only' : 'kr-vn',
      range: { start: startIso, end: endIso, days: results.length },
      daysWithIssues: failures.length,
      issueCount: failures.reduce((sum, result) => sum + result.issues.length, 0),
      daysUnavailable: unavailable.length,
      sourceErrorCount: unavailable.reduce((sum, result) => sum + result.sourceErrors.length, 0),
      pageErrors,
      failures,
      unavailable,
      results
    };
    const reportPath = path.join(root, 'tmp', 'v24-2-daily-parsing-audit.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, `${JSON.stringify(summary, null, 2)}\n`, 'utf8');
    console.log(`Report: ${reportPath}`);
    console.log(`Audited ${results.length} days; ${summary.issueCount} parser issues across ${summary.daysWithIssues} days; ${summary.daysUnavailable} source-unavailable days.`);
    if (pageErrors.length || failures.length) process.exitCode = 1;
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error.stack || String(error));
  process.exitCode = 1;
});
