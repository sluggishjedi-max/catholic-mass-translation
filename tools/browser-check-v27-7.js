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
      const sameOptions = {kr:[[{text:'본문'}]], zh:[[{text:'正文'}]]};
      const sameSection = {cit_kr:'마태 1,18-23', cit_zh:'聖瑪竇福音 1,18-23'};
      const sameAlignment = buildStrictReadingCitationAlignment('gospel', sameOptions, sameSection);
      check(sameAlignment.length === 1 && sameAlignment[0].kr === 0 && sameAlignment[0].zh === 0, 'Identical readings offered as language-separated alternatives');
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
      return {version: APP_VERSION, chineseSections: Object.keys(parsed.data), repeatedLanguagePairs: repeated, chineseRendered: Object.fromEntries(Object.entries(rendered).map(([key,value]) => [key,value.length]))};
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
