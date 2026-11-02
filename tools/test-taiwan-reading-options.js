const assert = require('node:assert/strict');
const { createRuntime } = require('../functions/daily-runtime');
const runtime = createRuntime({ country: 'TW', date: '2026-09-08', source: 'official' });
try {
  const result = JSON.parse(runtime.run(`JSON.stringify((() => {
    const date = getActiveLiturgicalSourceDate();
    const parsed = strictParseDailyMass('ZH', fetchTraditionalChineseDailyStaticSource(date), date, 'TW');
    const numberedRecords = Object.values(taiwanDailyMassTextData.records)
      .filter(record => /第[一二三123]\\s*式/u.test(record.text || ''));
    const lostSections = [];
    for (const record of numberedRecords) {
      const recordDate = traditionalChineseStaticDate(record.canonicalDate);
      const source = 'Title: ' + record.title + '\\nMarkdown Content:\\n' + record.text;
      const lines = strictExpandTraditionalChineseLines(strictSourceLines(source));
      const expected = [...new Set(lines.map(line => strictIdentifySection(line, 'ZH')?.key)
        .filter(key => ['reading1', 'psalm', 'gospel_accl', 'gospel'].includes(key)))];
      const actual = strictParseDailyMass('ZH', source, recordDate, 'TW');
      const missing = expected.filter(key => !sourceSectionHasContent(actual.data[key]));
      if (missing.length) lostSections.push({ title: record.title, date: record.canonicalDate, missing });
    }
    const allSoulsDate = new Date(2026, 10, 2);
    const allSouls = ['first', 'second', 'third'].map(choice => {
      getStrictMassSelector = () => ({ slot:'day', specialVigil:'', allSoulsChoice:choice });
      const source = fetchTraditionalChineseDailyStaticSource(allSoulsDate);
      const selected = strictParseDailyMass('ZH', source, allSoulsDate, 'TW');
      return { choice, selected:strictSourceLines(source).map(strictAllSoulsRank).find(Boolean), title:selected.title,
        complete:hasCompleteCoreDailyReadings(selected,allSoulsDate,'ZH','TW') };
    });
    return {
      sections: Object.keys(parsed.data),
      complete: hasCompleteTraditionalChineseDailyMass(parsed, 'TW'),
      alternatives: splitParsedAlternatives(parsed.data.reading1.lines).length,
      optionCitations: parsed.data.reading1.optionCits,
      gospelCitation: parsed.data.gospel.cit_zh,
      numberedRecords: numberedRecords.length,
      lostSections,
      allSouls
    };
  })())`));
  assert(result.complete, 'September 8 daily Mass is incomplete');
  assert.equal(result.alternatives, 2, 'The two approved reading alternatives were merged or lost');
  assert.equal(result.optionCitations.length, 2);
  assert.equal(result.gospelCitation, '聖瑪竇福音 1,18-23');
  assert.deepEqual(result.lostSections, [], 'Numbered reading options truncated another Taiwan formulary');
  assert(result.allSouls.every(mass => mass.complete), 'An actual Taiwan All Souls Mass was truncated');
  assert.deepEqual(result.allSouls.map(mass => mass.selected), ['first', 'second', 'third']);
  console.log(JSON.stringify(result));
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
} finally { runtime.close(); }
