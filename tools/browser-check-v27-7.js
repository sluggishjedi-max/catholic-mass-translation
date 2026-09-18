const fs = require('fs');
const http = require('http');
const path = require('path');
const assert = require('assert/strict');
const { chromium } = require('@playwright/test');
const root = path.resolve(__dirname, '..');
(async () => {
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
    await page.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
    await page.goto(`http://127.0.0.1:${server.address().port}/${process.env.ORDO_CHECK_HTML || 'V27.7.html'}`, {waitUntil: 'load'});
    await page.waitForFunction(() => typeof strictParseDailyMass === 'function' && globalThis.taiwanDailyMassTextData);
    const result = await page.evaluate(async () => {
      const date = new Date(2026, 8, 8, 12);
      const check = (value, message) => { if (!value) throw new Error(message); };
      check(!citationsAreDifferent('마태 1,18-23', '聖瑪竇福音 一,18-23', 'KR', 'ZH'), 'Chinese identical passage compared as different');
      check(!citationsAreDifferent('마르 1,1-8', 'Mk 1:1-8', 'KR', 'DE'), 'German Mk confused with Vietnamese Micah');
      check(!citationsAreDifferent('요한 3,16-18', 'Gv 3,16-18', 'KR', 'IT'), 'Italian John confused with Vietnamese Ecclesiastes');
      check(citationsAreDifferent('마태 1,1-25', '聖瑪竇福音 1,1-23', 'KR', 'ZH'), 'Long and short readings incorrectly merged');
      const allLanguageOptions = {}, allLanguageSection = {};
      for (const lang of SUPPORTED_LANGS) {
        const lower = lang.toLowerCase();
        const table = globalThis.bibleLanguageTables[lang];
        const citation = `${table.books.MAT.name} 1,18-23`;
        allLanguageOptions[lower] = [[parsedLine('', `${lang} official text`)]];
        allLanguageSection[`cit_${lower}`] = citation;
      }
      const allLanguageAlignment = buildStrictReadingCitationAlignment('gospel', allLanguageOptions, allLanguageSection);
      check(allLanguageAlignment.length === 1 && SUPPORTED_LANGS.every(lang => allLanguageAlignment[0][lang.toLowerCase()] === 0), 'Ten-language passage did not form one option');
      const sameOptions = {kr:[[{text:'본문'}]], zh:[[{text:'正文'}]]};
      const sameSection = {cit_kr:'마태 1,18-23', cit_zh:'聖瑪竇福音 1,18-23'};
      const sameAlignment = buildStrictReadingCitationAlignment('gospel', sameOptions, sameSection);
      check(sameAlignment.length === 1 && sameAlignment[0].kr === 0 && sameAlignment[0].zh === 0, 'Identical readings offered as language-separated alternatives');
      const unknownCitationAlignment = buildStrictReadingCitationAlignment('gospel', sameOptions, {cit_kr:'알 수 없는 표기',cit_zh:'新增語言格式'});
      check(unknownCitationAlignment.length === 1 && unknownCitationAlignment[0].kr === 0 && unknownCitationAlignment[0].zh === 0, 'Unknown future-language notation created a false option');
      const shuffledOptions = {
        kr:[[parsedLine('','한국어 바오로')],[parsedLine('','한국어 마태오')]],
        zh:[[parsedLine('','中文瑪竇')],[parsedLine('','中文保祿')]],
        en:[[parsedLine('','English Paul')],[parsedLine('','English Matthew')]],
        jp:[[parsedLine('','日本語マタイ')],[parsedLine('','日本語パウロ')]]
      };
      const shuffledSection = {
        optionCits_kr:[{cit_kr:'1코린 9,16-19.22ㄴ-27'},{cit_kr:'마태 1,18-23'}],
        optionCits_zh:[{cit_zh:'聖瑪竇福音 1,18-23'},{cit_zh:'聖保祿宗徒致格林多人前書 9,16-19,22-27'}],
        optionCits_en:[{cit_en:'1 Corinthians 9:16-19,22-27'},{cit_en:'Matthew 1:18-23'}],
        optionCits_jp:[{cit_jp:'新言語の未登録表記 A'},{cit_jp:'新言語の未登録表記 B'}],
        optionKinds_kr:['common','proper'], optionKinds_zh:['proper','common'],
        optionKinds_en:['common','proper'], optionKinds_jp:['proper','common']
      };
      const shuffledAlignment = buildStrictReadingCitationAlignment('reading1', shuffledOptions, shuffledSection);
      check(shuffledAlignment.length === 2, 'Multilingual alternatives were multiplied');
      check(shuffledAlignment.some(group => group.kr === 0 && group.zh === 1 && group.en === 0 && group.jp === 1), 'Paul reading was not aligned across languages');
      check(shuffledAlignment.some(group => group.kr === 1 && group.zh === 0 && group.en === 1 && group.jp === 0), 'Matthew reading was not aligned across languages');
      const differentAlignment = buildStrictReadingCitationAlignment('gospel', sameOptions, {...sameSection, cit_zh:'聖瑪竇福音 1,18-25'});
      check(differentAlignment.length === 2, 'Different ranges need separate options');
      state.liturgicalDateContext = {date, localDate:date};
      const parsed = await fetchParsedDailyMass('ZH', date, {locationCode:'TW', forceRemote:true});
      check(hasCompleteTraditionalChineseDailyMass(parsed, 'TW'), 'Sept 8 Chinese complete');
      check(parsed.data.reading1.optionCits.length === 2, 'Chinese reading alternatives must remain distinct');
      check(parsed.data.gospel.cit_zh === '聖瑪竇福音 1,18-23', 'Chinese chapter/citation normalization');
      check(parsed.data.gospel.lines.some(x => x.role === 'intro' && x.text === '恭讀聖瑪竇福音'), 'Chinese intro preserved');
      check(!parsed.data.reading1.lines.filter(x => x.role === 'body').some(x => /上主的聖言|第二式|恭讀/.test(x.text)), 'No Chinese formulas/options leaked into body');
      for (const text of ['(prayer ending)', '(끝맺음)', '(祈りの終わり)', '(Fines Precum)', '(Kết thúc cầu nguyện)']) check(isLiturgicalPlaceholderText(text), 'Placeholder: ' + text);
      for (const text of ['— Đó là Lời Chúa.', '──上主的聖言。', '◎ 주님의 말씀입니다.']) check(strictIsProclamationEnding(text), 'Ending: ' + text);
      const cleaned = strictCleanReadingBodyText('그때에 예수님께서 말씀하셨다.\n마태오가 전한 거룩한 복음입니다.\n주님 영광 받으소서.\n주님의 말씀입니다.', '마태오가 전한 거룩한 복음입니다.');
      check(cleaned === '그때에 예수님께서 말씀하셨다.', 'Shared duplicate formula cleanup');
      state.currentLoc = 'KR'; state.selectedLocationCode = 'KR'; state.targetLang = 'ZH'; state.targetLocationCode = 'TW';
      state.liturgyInfo = buildGeneratedLiturgyInfo(date);
      state.liturgyInfo.localCalendar = {lang:'KR', name:'지역 고유 전례'};
      state.liturgyInfo.meta.special = false;
      check(!shouldSuppressMismatchedLocalProperLanguage('ZH'), 'Selected official target blocked by calendar guard');
      resetMassDataFrom(getStartupOrdinaryMassData());
      const merged = {}; mergeSourceData(merged, parsed, 'ZH');
      applyDailyReadingsToMassData(merged);
      render();
      const rendered = Object.fromEntries(['reading1','psalm','gospel'].map(id => [id, document.querySelector(`section[data-part-id="${id}"]`)?.textContent]));
      check(rendered.reading1.includes('伯利恆'), 'Chinese reading not rendered');
      check(rendered.psalm.includes('我因上主而歡欣踴躍'), 'Chinese psalm not rendered');
      check(rendered.gospel.includes('瑪利亞已經和若瑟訂了婚'), 'Chinese gospel not rendered');
      const sameFetched = {gospel: {...sameSection, kr_lines:[parsedLine('', '같은 본문')], zh_lines:[parsedLine('', '相同正文')],
        variantAlignment:[{kr:0,zh:null},{kr:null,zh:0}]}};
      applyCachedVariantAlignments(sameFetched,date);
      await alignDailySelectableVariantsWithAI(sameFetched,date);
      check(sameFetched.gospel.variantAlignment.length === 1, 'Stale language-split alignment survived');
      applyDailyReadingsToMassData(sameFetched);
      render();
      const sameSelect = document.querySelector('section[data-part-id="gospel"] select.select-inline');
      check(!sameSelect || sameSelect.options.length <= 1, 'Same passage still offered as separate UI options');
      const differentFetched = {gospel:{...sameFetched.gospel,cit_zh:'聖瑪竇福音 1,18-25'}};
      applyCachedVariantAlignments(differentFetched,date);
      applyDailyReadingsToMassData(differentFetched);
      render();
      const differentSelect = document.querySelector('section[data-part-id="gospel"] select.select-inline');
      check(differentSelect && differentSelect.options.length === 2, 'Different range choices missing from UI');
      const tw = countryMassData.TW.ordinary;
      const kr = countryMassData.KR.ordinary;
      for (const key of ['gloria','lords_prayer','peace','lamb','offertory']) {
        const a = tw.find(x => getBaseId(x.id) === key), b = kr.find(x => getBaseId(x.id) === key);
        check(a.lines.length === b.lines.length, key + ' Korean row count');
      }
      const creed = tw.find(x => getBaseId(x.id) === 'creed');
      check(creed.variants.A.lines.length === 14 && creed.variants.B.lines.length === 25, 'Creed phrase rows');
      check(creed.variants.A.label.zh === '宗徒信經', 'Creed option identity');
      // All six proper-text sections use one deterministic alignment engine.
      const unifiedSectionIds = ['entrance','collect','gospel_accl','prayer_offerings','communion','prayer_after'];
      for (const id of unifiedSectionIds) {
        const section = {};
        for (const lang of SUPPORTED_LANGS) section[`${lang.toLowerCase()}_lines`] = [parsedLine('', `${lang} ${id} official text`)];
        applyCachedVariantAlignments({[id]: section}, date);
        check(section.variantAlignment.length === 1, `${id} single official texts split`);
        check(SUPPORTED_LANGS.every(lang => section.variantAlignment[0][lang.toLowerCase()] === 0), `${id} did not align all languages`);
        const twoOptions = Object.fromEntries(SUPPORTED_LANGS.map(lang => [lang.toLowerCase(), [
          [parsedLine('', `${lang} ${id} common`)], [parsedLine('', `${lang} ${id} proper`)]
        ]]));
        const kinds = Object.fromEntries(SUPPORTED_LANGS.flatMap(lang => [[`optionKinds_${lang.toLowerCase()}`, ['common','proper']]]));
        const alignment = buildFallbackVariantAlignment(id, twoOptions, kinds);
        check(alignment.length === 2, `${id} parallel alternatives multiplied`);
        check(alignment.every(group => SUPPORTED_LANGS.every(lang => Number.isInteger(group[lang.toLowerCase()]))), `${id} alternatives lost a language`);
      }
      const conflictSection = {
        kr_lines:[parsedLine('', '행복하여라, 마음이 가난한 사람들! 하늘 나라가 그들의 것이다.')],
        en_lines:[parsedLine('', 'I am the light of the world; whoever follows me will have the light of life.')]
      };
      applyCachedVariantAlignments({gospel_accl:conflictSection}, date);
      check(conflictSection.variantAlignment.length === 2, 'Known acclamation conflict was over-merged');
      // A manual choice follows the same source option when group letters are reordered.
      const selectionItem = {variants:{
        A:{__dailySourceIndexes:{kr:0,en:1}}, B:{__dailySourceIndexes:{kr:1,en:0}}
      }};
      state.currentLoc='KR'; state.targetLang='EN'; state.options.collect='B';
      state.autoDailySourceVariantSelections.collect={key:'A',signature:'test'};
      const capturedSelection = captureDailyVariantSelection(selectionItem,'collect');
      const reorderedVariants = {
        A:{__dailySourceIndexes:{kr:1,en:0}}, B:{__dailySourceIndexes:{kr:0,en:1}}
      };
      restoreDailyVariantSelection(reorderedVariants,'collect',capturedSelection);
      check(state.options.collect === 'A', 'Manual daily choice stayed on a stale letter instead of its source text');
      // One shared bishop renderer handles all language columns and Eucharistic
      // Prayers I-IV. Archdioceses retain the collective auxiliary-bishop wording;
      // dioceses name every auxiliary in the language of the rendered column.
      const previousBishopContext = state.bishopContext;
      await globalThis.ordoBishopDataApi.loadForLocation('KR');
      const seoulBishops = bishopContextForDiocese('서울대교구','KR');
      const suwonBishops = bishopContextForDiocese('수원교구','KR');
      check(seoulBishops && seoulBishops.isArchdiocese, 'Seoul archdiocese context missing');
      check(suwonBishops && !suwonBishops.isArchdiocese && suwonBishops.auxiliaries.length === 2, 'Suwon auxiliary-bishop context missing');
      const expectedSeoulOrdinary = {
        kr:'베드로',vn:'Phêrô',en:'Peter',jp:'ペトロ',la:'Petrus',zh:'伯多祿',it:'Pietro',pt:'Pedro',es:'Pedro',de:'Petrus'
      };
      const collaboratorLabels = {
        kr:'협력 주교들과',vn:'các Đức Giám mục phụ tá',en:'the Auxiliary Bishops',jp:'補佐司教団',la:'Episcopis auxiliaribus',
        zh:'輔理主教們',it:'Vescovi ausiliari',pt:'Bispos auxiliares',es:'Obispos auxiliares',de:'Weihbischöfen'
      };
      const bishopPrayerTemplates = {
        kr:['저희 주교 [주교명]와 (협력주교들과)','저희 주교 [주교명]와(과) (협력 주교들과)','저희 주교 [주교명]와(과) (협력 주교들과)','저희 주교 [주교명]와(과) (협력 주교들과)'],
        vn:['Đức Giám Mục [Tên GM.] chúng con','Đức Giám Mục [Tên GM.], (hay Giám Mục khác) chúng con','Đức Giám Mục [Ten GM.], (hay Giám Mục khác) chúng con','Đức Giám Mục T… chúng con'],
        en:['[Bishop Name] our Bishop, (and Auxiliary Bishops,)','[Bishop N.] our Bishop, (and Auxiliary Bishops,)','our Bishop N.','[Bishop Name] our Bishop'],
        jp:['わたしたちの司教 [司教名]、','わたしたちの司教 [司教名]、','わたしたちの司教○○○○、','わたしたちの司教○○○○、'],
        la:['Antístite nostro [Nomen Episcopi]','Epíscopo nostro [Episcopus N.]','Episcopo nostro N.','Epíscopi nostri N.'],
        zh:['我們的主教與所有主教','台北總教區的主教若翰,與所有主教','我們的主教、所有主教','我們的主教、所有主教'],
        it:['il nostro vescovo N.*','il nostro vescovo N.','il nostro vescovo N.*, l’ordine episcopale','del nostro vescovo N.*, dell’ordine episcopale'],
        pt:['o nosso bispo N.','o nosso bispo N.','o nosso bispo N.','o nosso bispo N.'],
        es:['con nuestro obispo N.','con nuestro Obispo N.','a nuestro obispo N.','de nuestro obispo N.'],
        de:['mit unserem Bischof N.','unserem Bischof N. und allen Bischöfen','unseren Bischof N.','unseren Bischof N.']
      };
      state.bishopContext = seoulBishops;
      let bishopPrayerCases = 0;
      for (const [lang, templates] of Object.entries(bishopPrayerTemplates)) {
        check(localizedBishopName(seoulBishops.ordinary,lang) === expectedSeoulOrdinary[lang], `${lang} Seoul bishop name is not localized`);
        for (const [index, template] of templates.entries()) {
          const renderedBishops = plainTextFromHtml(replaceBishopPlaceholder(template,lang));
          check(renderedBishops.includes(expectedSeoulOrdinary[lang]), `${lang} Eucharistic Prayer ${index + 1} ordinary missing`);
          check(renderedBishops.includes(collaboratorLabels[lang]), `${lang} Eucharistic Prayer ${index + 1} collaborators missing`);
          bishopPrayerCases++;
        }
      }
      const koreanPrayerForms = eucharisticPrayerEntry(countryMassData.KR.ordinary).forms;
      check(koreanPrayerForms['3'].some(line => (line.text_kr || '') === '주님의 일꾼, 교황 [교황명]와(과)')
        && koreanPrayerForms['3'].some(line => (line.text_kr || '') === '저희 주교 [주교명]와(과) (협력 주교들과)'),
      'Local Korean Eucharistic Prayer III placeholders were not preserved');
      for (const number of ['1','2','3','4']) {
        const bishopLine = koreanPrayerForms[number].find(line => /저희\s*주교/u.test(line.text_kr || ''));
        check(!!bishopLine, `Korean Eucharistic Prayer ${number} bishop line missing`);
        const renderedBishops = plainTextFromHtml(formatDynamicLineText(bishopLine.text_kr,'kr'));
        check(renderedBishops.includes('베드로') && renderedBishops.includes('협력 주교들과'), `Korean Eucharistic Prayer ${number} bishop rendering failed`);
      }
      state.bishopContext = suwonBishops;
      const expectedSuwonNames = {
        kr:['마티아','요한','제르마노'],vn:['Mátthia','Gioan','Germanô'],en:['Matthias','John','Germanus'],jp:['マティア','ヨハネ','ゲルマノ'],
        la:['Matthias','Ioannes','Germanus'],zh:['瑪弟亞','若望','日爾曼'],it:['Mattia','Giovanni','Germano'],pt:['Matias','João','Germano'],es:['Matías','Juan','Germán'],de:['Matthias','Johannes','Germanus']
      };
      for (const [lang, names] of Object.entries(expectedSuwonNames)) {
        const renderedBishops = plainTextFromHtml(replaceBishopPlaceholder(bishopPrayerTemplates[lang][0],lang));
        check(names.every(name => renderedBishops.includes(name)), `${lang} named auxiliary bishops missing`);
      }
      state.bishopContext = previousBishopContext;
      // Eucharistic Prayer IV is normalized to the Korean 88-clause layout in
      // every jurisdiction before ordinary data is merged by row.
      const koreanPrayerFour = eucharisticPrayerEntry(countryMassData.KR.ordinary).forms['4'];
      check(koreanPrayerFour.length === 88, 'Korean Eucharistic Prayer IV clause count');
      const ep4Locations = ['KR','VN','US','IE','GB-ENG','GB-WLS','GB-SCT','PH','TW','AU','NZ','JP','IT','PT','MX','DE','BR','VA'];
      const ep4Language = {KR:'KR',VN:'VN',US:'EN',IE:'EN','GB-ENG':'EN','GB-WLS':'EN','GB-SCT':'EN',PH:'EN',TW:'ZH',AU:'EN',NZ:'EN',JP:'JP',IT:'IT',PT:'PT',MX:'ES',DE:'DE',BR:'PT',VA:'LA'};
      const ep4EmptyRows = {};
      for (const code of ep4Locations) {
        const module = countryMassData[code] || (code === 'GB-WLS' ? countryMassData['GB-ENG'] : null);
        check(!!module, `${code} Mass module missing`);
        const normalizedOrdinary = normalizedOrdinaryForMerge(module,code,koreanPrayerFour);
        const normalizedPrayer = eucharisticPrayerEntry(normalizedOrdinary).forms['4'];
        check(normalizedPrayer.length === 88, `${code} Eucharistic Prayer IV is not on the shared layout`);
        const lower = eucharisticPrayerLanguageLower(module,code);
        ep4EmptyRows[code] = normalizedPrayer.filter(row => !(row[`text_${lower}`] || row[`rubric_${lower}`])).length;
        check(ep4EmptyRows[code] === (code === 'DE' ? 10 : 0), `${code} unexpected empty Eucharistic Prayer IV clauses`);
        const bodyText = normalizedPrayer.slice(10,35).map(row => row[`text_${lower}`] || '').join(' ');
        const epiclesisText = normalizedPrayer.slice(35,57).map(row => row[`text_${lower}`] || row[`rubric_${lower}`] || '').join(' ');
        const endingText = normalizedPrayer.slice(61).map(row => row[`text_${lower}`] || '').join(' ');
        check(bodyText.trim().length > 20, `${code} salvation-history clauses missing`);
        check(epiclesisText.trim().length > 20, `${code} institution clauses missing`);
        check(endingText.trim().length > 20, `${code} intercession clauses missing`);
        state.selectedLocationCode='KR'; state.currentLoc='KR';
        state.targetLocationCode=code; state.targetLang=ep4Language[code];
        resetMassDataFrom(getStartupOrdinaryMassData());
        const mergedPrayer = eucharisticPrayerEntry(massData).forms['4'];
        check(mergedPrayer.length === 88, `${code} merged Eucharistic Prayer IV row count`);
        check(mergedPrayer.some(row => row[`text_${lower}`] || row[`rubric_${lower}`]), `${code} merged language text missing`);
      }
      const repeated = [];
      for (const [lang, locationCode] of [['VN','VN'], ['EN','US'], ['ZH','TW']]) {
        state.targetLang = lang; state.targetLocationCode = locationCode;
        resetMassDataFrom(getStartupOrdinaryMassData());
        const collect = massData.find(x => getBaseId(x.id) === 'collect').lines;
        ensurePrayerFrameLines(collect, 'collect');
        applyParsedLinesForLanguage(collect, 'en', [{text:'We pray for peace.',role:'body'}, {text:'Through Christ our Lord.',role:'conclusion'}], 'collect');
        applyParsedLinesForLanguage(collect, 'en', [{text:'We pray for peace.',role:'body'}], 'collect');
        check(!collect.some(x => /prayer ending|Through Christ/i.test(x.text_en || '')), 'Stale conclusion slots cleared');
        const gospel = massData.find(x => getBaseId(x.id) === 'gospel').lines;
        for (let n = 0; n < 3; n++) {
          for (const lower of ['kr', lang.toLowerCase()]) {
            const intro = lower === 'kr' ? '마태오가 전한 거룩한 복음입니다.' : 'TEST INTRO';
            applyParsedLinesForLanguage(gospel, lower, [{role:'summary',text:'SUMMARY'}, {role:'intro',text:intro}, {role:'body',text:'BODY\n' + intro + '\n주님 영광 받으소서.\n— Đó là Lời Chúa.'}], 'gospel');
          }
        }
        check(gospel.filter(x => x.text_kr === '주님 영광 받으소서.').length === 1, lang + ' one glory response');
        check(gospel.filter(x => x.text_kr === '주님의 말씀입니다.').length === 1, lang + ' one closing formula');
        check(gospel.filter(x => x.text_kr === '마태오가 전한 거룩한 복음입니다.').length === 1, lang + ' one intro');
        check(gospel.find(x => x.role_kr === 'body').text_kr === 'BODY', lang + ' clean body');
        render();
        const visibleGospel = document.querySelector('section[data-part-id="gospel"]').textContent;
        check((visibleGospel.match(/주님 영광 받으소서/g) || []).length === 1, lang + ' rendered glory duplicated');
        check((visibleGospel.match(/마태오가 전한 거룩한 복음입니다/g) || []).length === 1, lang + ' rendered intro duplicated');
        repeated.push(lang);
      }
      // Same liturgical passage is not necessarily a byte-identical verse range.
      const sept11 = {
        reading1:{cit_kr:'1코린 9,16-19.22ㄴ-27',cit_zh:'聖保祿宗徒致格林多人前書 9,16-19, 22-27',kr_lines:[parsedLine('','한국어 독서 본문')],zh_lines:[parsedLine('','中文讀經正文')]},
        psalm:{cit_kr:'시편 84(83),3.4.5-6.12(◎ 2)',cit_zh:'詠八三3-6, 8, 12',kr_lines:[parsedLine('','만군의 주님, 당신 계신 곳 사랑하나이다!')],zh_lines:[parsedLine('','萬有的上主，祢的殿宇多麼可愛。')]},
        gospel_accl:{cit_kr:'요한 17,17 참조',cit_zh:'若十七7, 17',kr_lines:[parsedLine('','주님, 당신 말씀은 진리이시니 저희를 진리로 거룩하게 해 주소서.')],zh_lines:[parsedLine('','主，祢的話就是真理，求祢以真理聖化我們。')]}
      };
      state.targetLang='ZH'; state.targetLocationCode='TW';
      resetMassDataFrom(getStartupOrdinaryMassData());
      applyCachedVariantAlignments(sept11,date);
      await alignDailySelectableVariantsWithAI(sept11,date);
      applyDailyReadingsToMassData(sept11); render();
      for(const id of Object.keys(sept11)) {
        check(sept11[id].variantAlignment.length===1,id+' Sept 11 split');
        const element=document.querySelector('section[data-part-id="'+id+'"]');
        check(!element.querySelector('select.select-inline'),id+' unnecessary choice');
        check(element.textContent.includes(id==='reading1'?'中文讀經正文':id==='psalm'?'殿宇':'真理聖化'),id+' official target lost');
      }
      check(buildParallelPassageAlignment('psalm',sameOptions,{cit_kr:'시편 84(83),3-6.12',cit_zh:'詠八三3-6,9,12'}).length===1,'Same responsorial Psalm split by stanza notation');
      const explicitAlternatives=buildParallelPassageAlignment('reading1',{kr:[[],[]],zh:[[]]},sept11.reading1);
      check(explicitAlternatives.length===2 && explicitAlternatives.some(group=>group.kr===0&&group.zh===0) && explicitAlternatives.some(group=>group.kr===1&&group.zh===null),'Explicit source alternative was lost');
      // Actual source-only choices must offer AI on either side, including KR.
      for(const id of ['reading1','psalm']) {
        aiTranslationRecords.clear();
        const data={[id]:{cit_kr:'1코린 9,16-19',cit_zh:'聖保祿宗徒致格林多人前書 10,1-5',
          kr_lines:[{text:'서로 다른 한국어 원문',role:'body'}],zh_lines:[{text:'另一篇中文原文',role:'body'}],
          variantAlignment:[{kr:0,zh:null},{kr:null,zh:0}]}};
        resetMassDataFrom(getStartupOrdinaryMassData());
        applyDailyReadingsToMassData(data);
        for(const choice of ['A','B']) {
          state.options[id]=choice; render();
          check(document.querySelector('section[data-part-id="'+id+'"] .btn-ai-trans'),id+' '+choice+' missing opposite AI');
        }
        const originalTranslator=translateWithGemini;
        try {
          translateWithGemini=async(text,lang)=>{
            check(lang==='KR' && text.includes('另一篇中文原文'),'Wrong AI direction/source');
            return '확인용 AI 번역';
          };
          document.querySelector('section[data-part-id="'+id+'"] .btn-ai-trans').click();
          await new Promise(resolve=>setTimeout(resolve,0));
          const element=document.querySelector('section[data-part-id="'+id+'"]');
          check(element.querySelector('.ai-badge') && element.textContent.includes('확인용 AI 번역'),id+' labelled AI output missing');
          check(element.textContent.includes('另一篇中文原文'),id+' original overwritten by AI');
        } finally { translateWithGemini=originalTranslator; aiTranslationRecords.clear(); }
      }
      // Antiphons: dual Psalm numbering and the Chinese inline "or" marker.
      check(!citationsAreDifferent('시편 119(118),137.124','詠一一八137, 124','KR','ZH'),'Entrance Psalm numbering split');
      const communionZh=strictParsePrayerOrAntiphon('ZH','communion',{heading:'領主詠',lines:[
        '詠四一2-3','天主，我的心渴慕祢，就像小鹿渴望清泉。我的心靈渴慕天主，生活的天主。',
        '或：若八12主說：我是世界的光；跟隨我的，決不在黑暗中行走，必有生命的光。'
      ]});
      check(splitParsedAlternatives(communionZh.lines).length===2,'Chinese communion options not split');
      check(communionZh.optionCits[1].cit_zh==='若八12','Chinese second citation lost');
      const antiphons={
        entrance:{cit_kr:'시편 119(118),137.124',cit_zh:'詠一一八137, 124',
          kr_lines:[parsedLine('','주님, 당신은 의로우시고 당신 법규는 바르옵니다. 당신 종에게 자애를 베푸소서.')],
          zh_lines:[parsedLine('','上主，只有祢大公無私，祢的判斷非常正直。祢是仁慈的，求祢恩待祢的僕人。')]},
        communion:{cit_kr:'시편 42(41),2-3',cit_zh:communionZh.cit_zh,
          kr_lines:[parsedLine('','사슴이 시냇물을 그리워하듯, 하느님, 제 영혼이 당신을 그리나이다.'),parsedLine('','Or:'),parsedLine('','나는 세상의 빛이다. 생명의 빛을 얻으리라.')],
          zh_lines:communionZh.lines,optionCits_zh:communionZh.optionCits,
          optionCits_kr:[{cit_kr:'시편 42(41),2-3'},{cit_kr:'요한 8,12'}]}
      };
      resetMassDataFrom(getStartupOrdinaryMassData());
      applyCachedVariantAlignments(antiphons,date);
      await alignDailySelectableVariantsWithAI(antiphons,date);
      applyDailyReadingsToMassData(antiphons); render();
      check(!document.querySelector('section[data-part-id="entrance"] select.select-inline'),'Entrance unnecessary variants');
      check(antiphons.communion.variantAlignment.length===2 && antiphons.communion.variantAlignment.every(g=>Number.isInteger(g.kr)&&Number.isInteger(g.zh)),'Communion 2 parallel options');
      for(const choice of ['A','B']) {
        state.options.communion=choice;render();
        const element=document.querySelector('section[data-part-id="communion"]');
        check(element.querySelector('select.select-inline').options.length===2,'Communion choices multiplied');
        check(element.textContent.includes(choice==='A'?'渴慕':'生命的光'),'Communion Chinese choice missing');
        check(!element.querySelector('.btn-ai-trans'),'Official communion replaced with AI');
      }
      // Three conclusions × three prayer types × all supported languages.
      let conclusionCases=0;
      for(const key of ['collect','prayer_offerings','prayer_after']) {
        for(const style of ['through_son','relative_son','addressed_son']) {
          for(const lang of SUPPORTED_LANGS) {
            const formula=localizedPrayerConclusionFormula(lang,key,style);
            check(!!formula,lang+' '+key+' '+style+' missing formula');
            check(prayerConclusionStyle(lang,key,formula)===style,lang+' '+key+' '+style+' detection');
            const parsed=splitPrayerParsedLineByConclusion({text:'BODY. '+formula,role:'body'},lang,key);
            check(parsed.length===2 && parsed[1].role==='conclusion',lang+' ending not split');
            const lines=[];
            applyParsedLinesForLanguage(lines,'kr',[{text:'본문',role:'body'},{text:localizedPrayerConclusionFormula('KR',key,style),role:'conclusion'}],key);
            for(let n=0;n<3;n++) {
              applyParsedLinesForLanguage(lines,lang.toLowerCase(),[{text:'BODY. '+formula,role:'body'}],key);
              ensureLocalizedPrayerConclusions(lines,key);
            }
            check(lines.filter(line=>line['role_'+lang.toLowerCase()]==='conclusion' && line['text_'+lang.toLowerCase()]).length===1,lang+' duplicate ending');
            check(!lines.some(line=>line['role_'+lang.toLowerCase()]==='conclusion' && line['text_'+lang.toLowerCase()+'_ai']),lang+' ending AI');
            conclusionCases++;
          }
        }
      }
      check(strictExpandPrayerEnding('DE','collect','Gebet. Darum bitten wir durch Jesus Christus.').includes('Heiligen Geistes'),'DE abbreviated conclusion');
      return {version: APP_VERSION, conclusionCases, bishopPrayerCases, ep4EmptyRows, chineseSections: Object.keys(parsed.data), repeatedLanguagePairs: repeated, chineseRendered: Object.fromEntries(Object.entries(rendered).map(([key,value]) => [key,value.length]))};
    });
    console.log(JSON.stringify(result, null, 2));
    await page.setViewportSize({width:412,height:915});
    const mobile = await page.evaluate(() => {
      render();
      return {gospel:document.querySelector('section[data-part-id="gospel"]').textContent,
        width:document.documentElement.scrollWidth, viewport:innerWidth};
    });
    assert.equal((mobile.gospel.match(/주님 영광 받으소서/g) || []).length, 1);
    assert(mobile.width <= mobile.viewport + 2, 'Mobile horizontal overflow');
    console.log('Desktop and mobile rendering passed.');
  } finally { await browser.close(); await new Promise(resolve => server.close(resolve)); }
})().catch(error => { console.error(error); process.exitCode = 1; });
