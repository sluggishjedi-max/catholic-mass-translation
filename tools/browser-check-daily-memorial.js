const fs = require('fs');
const http = require('http');
const path = require('path');
const { chromium } = require('@playwright/test');
const massTool = require('./mass-data-editor');
const metadataTool = require('./country-metadata-upload-tool');
const root = path.resolve(__dirname, '..');

// Preserve the official headings, citations and mixed proper/weekday notice;
// short synthetic stanza bodies keep the regression independent of the web.
const fixtureLines = {
  kr: [
    '[백] 수호천사 기념일', '본기도',
    '하느님, 천사들의 보호를 받다가 영원한 기쁨을 누리게 하소서.', '성부와 성령과 ……,.',
    '제1독서', '<나의 천사가 앞장설 것이다.>', '▥ 탈출기의 말씀입니다.', '23,20-23',
    '20 보라, 내가 너희 앞에 천사를 보내어 길에서 너희를 지키겠다.',
    '주님의 말씀입니다.', '◎ 하느님, 감사합니다.',
    '화답송 시편 91(90),1-2.3-4ㄱㄴ.4ㄷ-6.10-11(◎ 11 참조)',
    '◎ 천사들이 너를 지켜 주시리라.',
    '○ 첫째 연. ◎', '○ 둘째 연. ◎', '○ 셋째 연. ◎', '○ 넷째 연. ◎',
    '복음', '<그들의 천사들이 하늘에 있다.>', '✠ 마태오가 전한 거룩한 복음입니다.',
    '18,1-5.10', '1 제자들이 예수님께 다가왔다.', '10 그들의 천사들이 하늘에 있다.',
    '주님의 말씀입니다.', '◎ 그리스도님, 찬미합니다.'
  ],
  en: [
    'Memorial of the Holy Guardian Angels', 'Lectionary: 459/650',
    'The Gospel for this memorial is proper.', 'Reading 1', 'Job 38:1, 12-21; 40:3-5',
    'The Lord addressed Job.', 'Responsorial Psalm', 'Psalm 139:1-3, 7-8, 9-10, 13-14ab',
    'R. (24b) Guide me, Lord, along the everlasting way.',
    'First weekday stanza.', 'R. Guide me, Lord, along the everlasting way.',
    'Second weekday stanza.', 'R. Guide me, Lord, along the everlasting way.',
    'Third weekday stanza.', 'R. Guide me, Lord, along the everlasting way.',
    'Fourth weekday stanza.', 'R. Guide me, Lord, along the everlasting way.',
    'Gospel', 'Matthew 18:1-5, 10', 'The disciples approached Jesus.'
  ]
};
const sources = [
  { name: 'HTML fixture', ...Object.fromEntries(Object.entries(fixtureLines)
    .map(([lang, lines]) => [lang, lines.map(line => `<p>${line.replaceAll('<', '&lt;').replaceAll('>', '&gt;')}</p>`).join('\n')])) },
  { name: 'Markdown fixture', ...Object.fromEntries(Object.entries(fixtureLines)
    .map(([lang, lines]) => [lang, 'Markdown Content:\n' + lines.join('\n\n')])) }
];
sources[0].en = `<div class="b-lectionary"><div class="innerblock"><h2>${fixtureLines.en[0]}</h2><p>${fixtureLines.en[1]}</p></div></div>
  <div class="b-lectionary"><div class="innerblock"><p>${fixtureLines.en[2]}</p></div></div>`;
const englishHeadings = ['Reading 1', 'Responsorial Psalm', 'Gospel'];
englishHeadings.forEach((heading, index) => {
  const start = fixtureLines.en.indexOf(heading);
  const end = index + 1 < englishHeadings.length ? fixtureLines.en.indexOf(englishHeadings[index + 1]) : fixtureLines.en.length;
  const lines = fixtureLines.en.slice(start + 2, end);
  sources[0].en += `<div class="b-verse"><div class="content-header"><span class="name">${heading}</span><span class="address">${fixtureLines.en[start + 1]}</span></div>
    <div class="content-body">${lines.map(line => `<p>${line}</p>`).join('')}</div></div>`;
});

(async () => {
  const sourceDirectoryIndex = process.argv.indexOf('--source-dir');
  if (sourceDirectoryIndex >= 0) {
    const directory = process.argv[sourceDirectoryIndex + 1];
    if (!directory) throw new Error('--source-dir requires a directory with kr/en HTML and Jina snapshots');
    for (const extension of ['.html', '-jina.txt']) {
      sources.push({ name: 'Captured official ' + extension, ...Object.fromEntries(['kr', 'en']
        .map(lang => [lang, fs.readFileSync(path.join(directory, lang + extension), 'utf8')])) });
    }
  }
  if (process.argv.includes('--live')) {
    for (const markdown of [false, true]) {
      const urls = { kr: 'https://missa.cbck.or.kr/DailyMissa/20261002', en: 'https://bible.usccb.org/bible/readings/100226.cfm' };
      const entries = await Promise.all(Object.entries(urls).map(async ([lang, url]) => {
        const response = await fetch((markdown ? 'https://r.jina.ai/' : '') + url, { signal: AbortSignal.timeout(30000) });
        if (!response.ok) throw new Error(`${lang} source returned ${response.status}`);
        return [lang, await response.text()];
      }));
      sources.push({ name: markdown ? 'Official Markdown sources' : 'Official HTML sources', ...Object.fromEntries(entries) });
    }
  }
  const runtime = massTool.runCountryMassSources(massTool.readCountryMassSources());
  const mass = Object.fromEntries(Object.entries(runtime.registry)
    .filter(([, module]) => Array.isArray(module?.ordinary))
    .map(([jurisdiction, module]) => [jurisdiction, {
      jurisdiction, language: module.language, ordinaryLanguage: module.ordinaryLanguage,
      ordinary: JSON.parse(JSON.stringify(module.ordinary))
    }]));
  const metadata = Object.fromEntries(metadataTool.countryMetadataItems()
    .map(item => [item.jurisdiction, item]));
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
    const page = await browser.newPage();
    await page.addInitScript(({ mass, metadata }) => {
      globalThis.uploadedCountryMassData = mass;
      globalThis.uploadedCountryMassMetadata = metadata;
      globalThis.countryMassData = mass;
    }, { mass, metadata });
    await page.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
    await page.goto(`http://127.0.0.1:${server.address().port}/${process.env.ORDO_CHECK_HTML || 'index.html'}`, { waitUntil: 'load' });
    await page.waitForFunction(() => typeof strictParseDailyMass === 'function');
    const result = await page.evaluate(async sources => {
      const check = (value, message) => { if (!value) throw new Error(message); };
      const date = new Date(2026, 9, 2, 12);
      state.currentLoc = 'KR'; state.selectedLocationCode = 'KR';
      state.targetLang = 'EN'; state.targetLocationCode = 'US'; state.uiLang = 'KR';
      getActiveLiturgicalSourceDate = () => cloneDateOnly(date);
      state.liturgyInfo = buildGeneratedLiturgyInfo(date);
      const reports = [];
      for (const source of sources) {
        resetMassDataFrom(getStartupOrdinaryMassData());
        const parsed = { kr: strictParseDailyMass('KR', source.kr, date, 'KR'), en: strictParseDailyMass('EN', source.en, date, 'US') };
        check(parsed.en.data.reading1.optionKinds?.[0] === 'common', source.name + ': English weekday reading marked proper');
        check(parsed.en.data.gospel.optionKinds?.[0] === 'proper', source.name + ': proper Gospel lost');
        const fetched = {};
        for (const lower of ['kr', 'en']) {
          for (const [key, section] of Object.entries(parsed[lower].data)) {
            fetched[key] ||= {};
            fetched[key][lower] = section.text;
            fetched[key][lower + '_lines'] = section.lines;
            for (const name of ['optionCits', 'optionKinds', 'optionLabels']) {
              if (section[name]) fetched[key][name + '_' + lower] = section[name];
            }
            if (section['cit_' + lower]) fetched[key]['cit_' + lower] = section['cit_' + lower];
          }
        }
        const englishPsalm = bibleCitation.parse(fetched.psalm.cit_en, 'EN');
        check(englishPsalm?.chapter === 139, source.name + ': singular Psalm/refrain citation did not parse');
        check(!bibleCitation.wholeVerseCoverage(englishPsalm).split(',').includes('24'), 'Response verse entered passage coverage');
        check(JSON.stringify(parsed.en.data.psalm.lines.at(-1).verseRefs) === '[13,14]', 'Response verse entered final stanza');
        finalizeDailyReadingsData(fetched);
        await alignDailySelectableVariantsWithAI(fetched, date);
        applyDailyReadingsToMassData(fetched);
        check(fetched.psalm.variantAlignment.length === 2, source.name + ': different Psalms were merged');
        check(!fetched.psalm.variantAlignment.some(group => group.kr === 0 && group.en === 0), 'Cross-Psalm stanza correspondence');
        check(fetched.gospel.variantAlignment.length === 1, source.name + ': identical proper Gospel split');
        const reading = massData.find(item => getBaseId(item.id) === 'reading1');
        const readings = Object.values(reading.variants);
        check(readings.find(v => v.__dailySourceIndexes.kr === 0)?.__dailyOptionKind === 'proper', 'Korean proper reading relabelled');
        const englishReading = readings.find(v => v.__dailySourceIndexes.en === 0);
        check(englishReading?.__dailyOptionKind === 'common' && englishReading.label.kr.includes('공통 영어'), 'English common reading label lost');
        const psalm = massData.find(item => getBaseId(item.id) === 'psalm');
        check(psalm.type === 'selectable' && Object.keys(psalm.variants).length === 2, 'Psalm alternatives missing');
        for (const variant of Object.values(psalm.variants)) {
          const lower = Number.isInteger(variant.__dailySourceIndexes.kr) ? 'kr' : 'en';
          const opposite = lower === 'kr' ? 'en' : 'kr';
          check(variant.lines.filter(line => isPsalmDisplayVersicle(line, lower)).length === 4, 'Native Psalm stanzas were lost or joined');
          check(!variant.lines.some(line => cleanNodeText(line['text_' + opposite])), 'Different Psalm text contaminated source-only option');
          state.options.psalm = Object.keys(psalm.variants).find(key => psalm.variants[key] === variant);
          render();
          const section = document.querySelector('section[data-part-id="psalm"]');
          check(section.querySelector('select.select-inline'), 'Psalm source selector not rendered');
          check(section.querySelectorAll('.btn-ai-trans').length === 5, 'Missing Psalm counterpart lost response/stanza AI buttons');
          check(!section.querySelector('.psalm-stanza-group'), 'Unrelated native stanzas grouped on screen');
        }
        const collect = massData.find(item => getBaseId(item.id) === 'collect');
        const collectLines = collect.type === 'selectable' ? Object.values(collect.variants).flatMap(v => v.lines) : collect.lines;
        const collectBody = collectLines.find(line => line.role_kr === 'body')?.text_kr || '';
        check(collectBody.includes('영원한 기쁨을 누리게 하소서.'), 'Local collect OCR error persisted');
        check(!/[⋯…]|성부와 성령/.test(collectBody), 'Collect abbreviation leaked into body');
        check(collectLines.some(line => line.role_kr === 'conclusion' && line.text_kr === localizedPrayerConclusionFormula('KR', 'collect', 'through_son')), 'Collect conclusion was not separated/expanded');
        reports.push({ source: source.name, psalmOptions: 2, stanzasPerOption: 4, englishReading: englishReading.label.kr, collect: 'body and conclusion verified' });
      }
      // All supported languages use the same refrain-reference cleanup.
      for (const language of SUPPORTED_LANGS) {
        const alias = bibleCitation.entries(language).find(entry => entry.id === 'PSA')?.key;
        if (!alias) continue;
        const citation = `${alias} 139:1-3,7-8,9-10,13-14ab (24b)`;
        check(bibleCitation.parse(citation, language)?.chapter === 139, language + ': shared Psalm metadata cleanup failed');
      }
      const allProper = strictParseDailyMass('EN', sources[1].en.replace(
        'The Gospel for this memorial is proper.', 'The readings for this memorial are proper.'), date, 'US');
      check(['reading1', 'psalm', 'gospel'].every(key => allProper.data[key].optionKinds[0] === 'proper'), 'All-proper notice lost');
      const noNotice = strictParseDailyMass('EN', sources[1].en.replace('The Gospel for this memorial is proper.', ''), date, 'US');
      check(!noNotice.data.reading1.optionKinds, 'Absent source notice invented common/proper metadata');
      const legacy = parseEnglishDailyMass(sources[1].en, date);
      check(legacy.data.reading1.optionKinds[0] === 'common' && legacy.data.gospel.optionKinds[0] === 'proper', 'English fallback parser lost scoped notice');
      return reports;
    }, sources);
    console.log(JSON.stringify(result, null, 2));
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
