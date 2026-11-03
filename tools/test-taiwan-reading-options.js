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
    const novemberDate = new Date(2026, 10, 3);
    const november = strictParseDailyMass('ZH', fetchTraditionalChineseDailyStaticSource(novemberDate), novemberDate, 'TW');
    const novemberReadings = {complete:hasCompleteTraditionalChineseDailyMass(november,'TW'),reading:november.data.reading1?.cit_zh,gospel:november.data.gospel?.cit_zh,
      communionAlternatives:splitParsedAlternatives(november.data.communion.lines).length,
      communionCitations:november.data.communion.optionCits,
      secondCommunion:splitParsedAlternatives(november.data.communion.lines)[1]?.map(line=>line.text).join(' ')};
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
      allSouls,
      novemberReadings
    };
  })())`));
  assert(result.complete, 'September 8 daily Mass is incomplete');
  assert.equal(result.alternatives, 2, 'The two approved reading alternatives were merged or lost');
  assert.equal(result.optionCitations.length, 2);
  assert.equal(result.gospelCitation, '聖瑪竇福音 1,18-23');
  assert.deepEqual(result.lostSections, [], 'Numbered reading options truncated another Taiwan formulary');
  assert(result.allSouls.every(mass => mass.complete), 'An actual Taiwan All Souls Mass was truncated');
  assert.deepEqual(result.allSouls.map(mass => mass.selected), ['first', 'second', 'third']);
  assert(result.novemberReadings.complete, 'November 3 weekday Mass is missing from the bundled corpus');
  assert.match(result.novemberReadings.reading, /斐理伯.*2,5-11/u);
  assert.match(result.novemberReadings.gospel, /路加.*14,15-24/u);
  assert.equal(result.novemberReadings.communionAlternatives, 2, 'The second approved Communion antiphon was lost');
  assert.match(result.novemberReadings.secondCommunion, /那以我為飲食的人/u);
  assert.equal(result.novemberReadings.communionCitations[1].cit_zh, '若六 57');
  console.log(JSON.stringify(result));
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
} finally { runtime.close(); }
