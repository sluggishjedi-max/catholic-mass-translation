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
      const originalCalendarState = {
        currentLoc: state.currentLoc,
        selectedLocationCode: state.selectedLocationCode,
        targetLang: state.targetLang,
        targetLocationCode: state.targetLocationCode,
        uiLang: state.uiLang,
        gpsCoordinates: state.gpsCoordinates
      };
      const prayerFallbackLocations = {
        IE: 'EN', 'GB-ENG': 'EN', 'GB-SCT': 'EN', PH: 'EN', TW: 'ZH', AU: 'EN', NZ: 'EN',
        IT: 'IT', PT: 'PT', MX: 'ES', DE: 'DE', BR: 'PT', INTL: 'EN'
      };
      for (const [locationCode, languageCode] of Object.entries(prayerFallbackLocations)) {
        state.selectedLocationCode = locationCode;
        state.currentLoc = languageCode;
        state.targetLang = languageCode === 'KR' ? 'EN' : 'KR';
        state.targetLocationCode = state.targetLang === 'KR' ? 'KR' : 'US';
        const fallbackPrayers = getPrayerData();
        check(fallbackPrayers.length >= 15, `${locationCode} has no fallback prayer places`);
        check(fallbackPrayers.every(entry => entry.__aiPrayerFallback), `${locationCode} prayer fallback contains an unscoped entry`);
        const latinPrayer = fallbackPrayers.find(entry => localizedPrayerValueStrict(entry.texts, 'LA') && localizedPrayerValueStrict(entry.texts, 'KR'));
        const translation = prayerAutomaticTranslationInfo(latinPrayer, languageCode, 'KR', 'body');
        check(translation && translation.targetLang === languageCode && translation.sourceLang === 'LA', `${locationCode} prayer fallback did not prioritize Latin`);
        if (languageCode === 'EN') {
          check(fallbackPrayers.every(entry => !localizedPrayerValueStrict(entry.texts, 'EN')), `${locationCode} reused a United States English prayer`);
        }
      }
      state.selectedLocationCode = 'TW';
      state.currentLoc = 'ZH';
      state.targetLang = 'KR';
      state.targetLocationCode = 'KR';
      const taiwanFallbackPrayers = getPrayerData();
      const koreanOnlyPrayer = taiwanFallbackPrayers.find(entry => localizedPrayerValueStrict(entry.texts, 'KR') && !localizedPrayerValueStrict(entry.texts, 'LA'));
      check(koreanOnlyPrayer, 'Taiwan fallback has no Korean-only prayer source');
      const taiwanTranslation = prayerAutomaticTranslationInfo(koreanOnlyPrayer, 'ZH', 'KR', 'body');
      check(taiwanTranslation && taiwanTranslation.sourceLang === 'KR' && taiwanTranslation.targetLang === 'ZH', 'Taiwan fallback did not translate the available Korean prayer into Traditional Chinese');
      check(!localizedPrayerValueStrict(koreanOnlyPrayer.texts, 'ZH'), 'Taiwan fallback duplicated Korean text into the Traditional Chinese field');
      check(prayerBodyHtml(koreanOnlyPrayer, 'ZH', 'KR').includes('btn-ai-trans'), 'Taiwan fallback did not offer AI translation in the missing language');
      const koreanSourceBodyHtml = prayerBodyHtml(koreanOnlyPrayer, 'KR', 'ZH');
      check(koreanSourceBodyHtml.length > 10 && !koreanSourceBodyHtml.includes('btn-ai-trans'), 'Taiwan fallback lost the available Korean prayer');
      const originalTaiwanPrayerTranslator = translatePrayerTextWithFallback;
      try {
        translatePrayerTextWithFallback = async (text, sourceLang, targetLang) => {
          check(sourceLang === 'KR' && targetLang === 'ZH', 'Taiwan prayer used the wrong AI translation direction');
          return targetLang === 'ZH' ? '繁體中文祈禱譯文' : `${targetLang} prayer translation`;
        };
        openPrayerEntryKeys.add(prayerEntryKey(koreanOnlyPrayer));
        check(requestAutomaticPrayerTranslations(koreanOnlyPrayer, 'ZH', 'KR'), 'Taiwan Korean-source prayer translation did not start');
        await new Promise(resolve => setTimeout(resolve, 0));
        await new Promise(resolve => setTimeout(resolve, 0));
        check(prayerAutomaticTranslatedText(koreanOnlyPrayer, 'ZH', 'KR', 'body') === '繁體中文祈禱譯文', 'Taiwan Korean-source prayer did not produce a Traditional Chinese body');
      } finally {
        translatePrayerTextWithFallback = originalTaiwanPrayerTranslator;
        openPrayerEntryKeys.delete(prayerEntryKey(koreanOnlyPrayer));
        aiTranslationRecords.clear();
      }
      state.selectedLocationCode = 'AU';
      state.currentLoc = 'EN';
      state.targetLang = 'KR';
      state.targetLocationCode = 'KR';
      renderPrayerPanel();
      const australianPrayerPanel = document.getElementById('prayer-results');
      check(australianPrayerPanel.querySelectorAll('details.aux-prayer-list-item').length >= 15, 'Australian prayer places were not rendered');
      check(australianPrayerPanel.querySelectorAll('.btn-ai-trans').length >= 30, 'AI translation actions were not rendered for the country prayer fallback');
      check(!australianPrayerPanel.textContent.includes('기도문 본문은 업로드 파일이 연결되면 이 자리에 표시됩니다.'), 'Uploaded-file prayer placeholder is still visible');
      check(prayerBodyHtml({ texts: {} }, 'EN', 'LA') === '', 'Missing prayer body still renders an uploaded-file placeholder');
      state.uiLang = 'IT';
      state.currentLoc = 'EN';
      state.targetLang = 'DE';
      localizeAuxPanels();
      const prayerWarningLines = [...document.querySelectorAll('#prayer-dev-warning .aux-warning-line')];
      check(prayerWarningLines.length === 2, 'Prayer warning did not render the UI and translation languages');
      check(prayerWarningLines[0].textContent.includes('Italiano') && prayerWarningLines[0].textContent.includes(auxUiText.IT.prayerWarning), 'Prayer warning omitted the UI language');
      check(prayerWarningLines[1].textContent.includes('Deutsch') && prayerWarningLines[1].textContent.includes(auxUiText.DE.prayerWarning), 'Prayer warning omitted the translation language');
      check(!document.getElementById('prayer-dev-warning').textContent.includes('English'), 'Prayer warning incorrectly used the country language');
      state.uiLang = originalCalendarState.uiLang;
      state.currentLoc = 'EN';
      state.targetLang = 'KR';
      const australianFallbackPrayer = getPrayerData()[0];
      const originalPrayerFallbackTranslator = translatePrayerTextWithFallback;
      try {
        translatePrayerTextWithFallback = async (text, sourceLang, targetLang) => {
          check(sourceLang === 'LA', 'Country prayer AI translation did not use Latin as its source');
          return `${targetLang} AI prayer translation`;
        };
        openPrayerEntryKeys.add(prayerEntryKey(australianFallbackPrayer));
        check(requestAutomaticPrayerTranslations(australianFallbackPrayer, 'EN', 'KR'), 'Country prayer AI translation did not start');
        await new Promise(resolve => setTimeout(resolve, 0));
        await new Promise(resolve => setTimeout(resolve, 0));
        check(prayerAutomaticTranslatedText(australianFallbackPrayer, 'EN', 'KR', 'body') === 'EN AI prayer translation', 'Country-language AI prayer body was not displayed automatically');
      } finally {
        translatePrayerTextWithFallback = originalPrayerFallbackTranslator;
        openPrayerEntryKeys.delete(prayerEntryKey(australianFallbackPrayer));
        aiTranslationRecords.clear();
      }
      Object.assign(state, originalCalendarState);
      check(vietnameseKpvProfileForCoordinates({lat:21.0285,lon:105.8542}) === KPV_PROFILE_NORTH, 'Hanoi did not select the northern KPV calendar');
      check(vietnameseKpvProfileForCoordinates({lat:10.7769,lon:106.7009}) === KPV_PROFILE_SOUTH, 'Ho Chi Minh City did not select the southern KPV calendar');
      check(vietnameseKpvProfileForCoordinates({lat:17.47,lon:106.62}) === KPV_PROFILE_NORTH, 'Vietnam north of the regional boundary did not select the northern calendar');
      check(vietnameseKpvProfileForCoordinates({lat:16.054,lon:108.202}) === KPV_PROFILE_SOUTH, 'Vietnam south of the regional boundary did not select the southern calendar');
      check(vietnameseKpvProfileForCoordinates({lat:37.5665,lon:126.9780}) === KPV_PROFILE_SOUTH, 'Foreign GPS location did not default to the southern KPV calendar');
      check(vietnameseKpvProfileForCoordinates({lat:17.9757,lon:102.6331}) === KPV_PROFILE_SOUTH, 'Laos was incorrectly classified as northern Vietnam');
      check(vietnameseKpvProfileForCoordinates({lat:11.5564,lon:104.9282}) === KPV_PROFILE_SOUTH, 'Cambodia was incorrectly classified as southern Vietnam');
      check(gpsLocationForCoordinates(17.9757,102.6331) !== 'VN'&&gpsLocationForCoordinates(11.5564,104.9282) !== 'VN','Legacy GPS country detection still classified neighboring countries as Vietnam');
      const kpvMockContent = (code, ref, text, extra = {}) => ({code,ref,text,html:`<p>${text}</p>`,heading:extra.heading||null,lead:extra.lead||null});
      const kpvTemporalMass = {
        setCode:'ot-w26-monday-ii',via:'temporal',celebrationCode:null,celebration:null,
        templates:[{units:[
          {options:[{contents:{'entrance_antiphon/1':kpvMockContent('e1','Tv 1,1','Ca nhập lễ ngày thường')}}]},
          {options:[{contents:{
            'reading/1':kpvMockContent('r1','G 1,6-22','Bài đọc ngày thường',{heading:'Đức Chúa đã ban cho.',lead:'Bài trích sách Gióp.'}),
            'responsorial_psalm/1':kpvMockContent('p1','Tv 16,1-7','Xướng 1'),
            'antiphon/1':kpvMockContent('a1',null,'Xin Chúa lắng tai.')
          }}]},
          {options:[{contents:{
            'gospel_acclamation/1':kpvMockContent('ga1','Mc 10,45b','Ha-lê-lui-a. Con Người đến để phục vụ. Ha-lê-lui-a.'),
            'gospel/1':kpvMockContent('g1','Lc 9,46-50','Tin Mừng ngày thường',{heading:'Ai là người nhỏ nhất.',lead:'✠ Tin Mừng Chúa Giê-su Ki-tô theo thánh Lu-ca.'})
          }}]},
          {options:[{contents:{'communion_antiphon/1':kpvMockContent('c1','Tv 118,49-50','Ca hiệp lễ ngày thường')}}]}
        ]}]
      };
      const kpvSaintMass = JSON.parse(JSON.stringify(kpvTemporalMass));
      kpvSaintMass.setCode='saint-proper'; kpvSaintMass.via='celebration'; kpvSaintMass.celebrationCode='saint-proper';
      kpvSaintMass.celebration={name:'Thánh thử nghiệm',rank:'memorial'};
      kpvSaintMass.templates[0].units[1].options[0].contents['reading/1'].text='Bài đọc riêng của thánh';
      kpvSaintMass.templates[0].units[1].options[0].contents['reading/1'].html='<p>Bài đọc riêng của thánh</p>';
      const kpvPayload={profile:KPV_PROFILE_SOUTH,primary:kpvTemporalMass,alternatives:[kpvSaintMass]};
      state.currentLoc='VN'; state.selectedLocationCode='VN'; state.gpsCoordinates={lat:10.7769,lon:106.7009};
      check(selectKpvMassCandidate(kpvPayload,new Date(2026,8,28,12))===kpvTemporalMass,'Vietnam weekday incorrectly selected a saint alternative');
      const normalizedVietnamKpv=normalizeKpvMassReadingPayload(kpvPayload,new Date(2026,8,28,12));
      check(normalizedVietnamKpv.mass_reading.length===1&&normalizedVietnamKpv.kpvSelectedVia==='temporal','Vietnam weekday exposed multiple KPV Masses');
      const kpvParsedSections=ktcgkpvDailySectionsFromChoices(normalizedVietnamKpv.mass_reading,normalizedVietnamKpv.mass_reading,new Date(2026,8,28,12));
      check(kpvParsedSections.reading1?.text.includes('Bài đọc ngày thường')&&!kpvParsedSections.reading1.text.includes('riêng của thánh'),'Saint proper leaked into Vietnam weekday reading');
      check(kpvParsedSections.psalm?.text.includes('Xin Chúa lắng tai.'),'KPV responsorial antiphon was not parsed');
      const koreanMartyrsSelectionDate=new Date(2026,8,20,12);
      state.currentLoc='KR'; state.selectedLocationCode='KR'; state.gpsCoordinates={lat:37.5665,lon:126.9780};
      const expectedKoreanProperNames=kpvExpectedCelebrationNames(koreanMartyrsSelectionDate);
      check(expectedKoreanProperNames.length>0,'Korean local celebration names unavailable for KPV matching');
      const foreignSaintMass=JSON.parse(JSON.stringify(kpvSaintMass));
      foreignSaintMass.celebration.name=expectedKoreanProperNames[0];
      check(selectKpvMassCandidate({primary:kpvTemporalMass,alternatives:[foreignSaintMass]},koreanMartyrsSelectionDate)===foreignSaintMass,'Foreign-country saint proper did not select the matching KPV translation');
      const foreignOrdinaryDate=new Date(2026,8,22,12);
      check(kpvExpectedCelebrationNames(foreignOrdinaryDate).length===0,'Foreign ordinary-day test unexpectedly has a proper celebration');
      check(selectKpvMassCandidate({primary:kpvSaintMass,alternatives:[kpvTemporalMass]},foreignOrdinaryDate)===kpvTemporalMass,'Vietnamese saint proper replaced a foreign ordinary weekday');
      check(selectKpvMassCandidate({primary:kpvSaintMass,alternatives:[]},foreignOrdinaryDate)===null,'Unmatched Vietnamese saint proper was exposed outside Vietnam');
      check(selectKpvMassCandidate({primary:kpvTemporalMass,alternatives:[kpvSaintMass]},koreanMartyrsSelectionDate)===null,'Different Vietnamese saint proper was used for a foreign local celebration');
      const originalFetch=window.fetch;
      let kpvRequestUrl='';
      window.fetch=async url=>{kpvRequestUrl=String(url);return new Response(JSON.stringify({success:true,data:kpvPayload}),{status:200,headers:{'Content-Type':'application/json'}});};
      state.gpsCoordinates={lat:21.0285,lon:105.8542};
      await fetchKtcgkpvMassReadingJson(new Date(2026,8,28,12));
      window.fetch=originalFetch;
      check(kpvRequestUrl.includes('profile=VIETNAM_NORTH'),'KPV proxy request omitted the GPS-selected northern profile');
      state.currentLoc = 'KR'; state.selectedLocationCode = 'KR';
      const chuseokDate = new Date(2026, 8, 25, 12);
      const chuseokInfo = buildGeneratedLiturgyInfo(chuseokDate);
      check(koreanLunarMonthDay(chuseokDate)?.month === 8 && koreanLunarMonthDay(chuseokDate)?.day === 15, '2026 Chuseok lunar date');
      check(chuseokInfo.names.KR === '한가위', `Chuseok Korean title: ${chuseokInfo.names.KR}`);
      check(chuseokInfo.localCalendar?.lang === 'KR', 'Chuseok Korean local calendar marker');
      check(chuseokInfo.prefaceKey === 'kr_proper_3_chuseok', `Chuseok proper preface: ${chuseokInfo.prefaceKey}`);
      check(chuseokInfo.color === liturgyColorMap.white, `Chuseok liturgical color: ${chuseokInfo.color}`);
      const lunarNewYearDate = new Date(2026, 1, 17, 12);
      const lunarNewYearInfo = buildGeneratedLiturgyInfo(lunarNewYearDate);
      check(koreanLunarMonthDay(lunarNewYearDate)?.month === 1 && koreanLunarMonthDay(lunarNewYearDate)?.day === 1, '2026 Korean Lunar New Year date');
      check(lunarNewYearInfo.names.KR === '설', `Korean Lunar New Year title: ${lunarNewYearInfo.names.KR}`);
      check(lunarNewYearInfo.prefaceKey === 'kr_proper_2_lunar_new_year', `Korean Lunar New Year proper preface: ${lunarNewYearInfo.prefaceKey}`);
      const koreanMartyrsDate = new Date(2026, 8, 20, 12);
      const englishKoreanMartyrsProper = `Title: Memorial of Saint Andrew Kim Taegon and Companions, Martyrs
URL Source: https://bible.usccb.org/bible/readings/0920-memorial-andrew-kim-taegon.cfm
Markdown Content:
### Reading 1
Wisdom 3:1-9
The souls of the just are in the hand of God.
### Or
Romans
8:31b-39
If God is for us, who can be against us?
### Responsorial Psalm
Psalm 126:1-2, 4-6
R. Those who sow in tears shall reap rejoicing.
Those who go forth weeping shall return rejoicing. R.
### Alleluia
1 Peter 4:14
R. Alleluia, alleluia.
The Spirit of God rests upon you.
R. Alleluia, alleluia.
### Gospel
Luke 9:23-26
Jesus said, take up your cross daily and follow me.`;
      const spanishKoreanMartyrsProper = `Title: Memoria de San Andrés Kim Taegon y compañeros, mártires
URL Source: https://bible.usccb.org/es/bible/lecturas/0920-memorial-andrew-kim-taegon.cfm
Markdown Content:
### Lectura I
Sabidurίa 3, 1-9
Las almas de los justos están en las manos de Dios.
### O bien:
Romanos 8, 31-39
Si Dios está a nuestro favor, ¿quién estará en contra nuestra?
### Salmo Responsorial
Del Salmo 125
R. Entre gritos de júbilo cosecharán aquellos que siembran con dolor.
Al regresar, cantando vendrán con sus gavillas. R.
### Aclamación antes del Evangelio
1 Pedro 4, 14
R. Aleluya, aleluya.
El Espíritu de Dios descansa en ustedes.
R. Aleluya.
### Evangelio
Lucas 9, 23-26
Jesús dijo: tome su cruz de cada día y me siga.`;
      const ordinarySundayParsed = () => ({
        title: 'Twenty-fifth Sunday in Ordinary Time',
        data: {
          collect: {text:'Ordinary Sunday prayer',lines:[parsedLine('', 'Ordinary Sunday prayer')]},
          reading1: {text:'Ordinary Sunday reading',lines:[parsedLine('', 'Ordinary Sunday reading')]},
          psalm: {text:'Ordinary Sunday psalm',lines:[parsedLine('', 'Ordinary Sunday psalm')]},
          gospel_accl: {text:'Ordinary Sunday acclamation',lines:[parsedLine('', 'Ordinary Sunday acclamation')]},
          gospel: {text:'Ordinary Sunday gospel',lines:[parsedLine('', 'Ordinary Sunday gospel')]}
        }
      });
      state.targetLang = 'EN'; state.targetLocationCode = 'US';
      state.liturgicalDateContext = {date:koreanMartyrsDate,localDate:koreanMartyrsDate};
      state.liturgyInfo = buildGeneratedLiturgyInfo(koreanMartyrsDate);
      check(activeKoreanLocalLectionaryProperKey(koreanMartyrsDate) === '09-20', 'Korean Martyrs proper Lectionary key');
      const englishProperParsed = await applyOfficialKoreanLocalProperReadings(
        ordinarySundayParsed(), 'EN', koreanMartyrsDate, 'US', async () => englishKoreanMartyrsProper
      );
      check(englishProperParsed.officialLocalProper?.lectionary === '642A', 'English official proper source metadata');
      check(englishProperParsed.data.reading1.cit_en === 'Wisdom 3:1-9', `English proper first reading: ${englishProperParsed.data.reading1.cit_en}`);
      check(englishProperParsed.data.reading2.cit_en === 'Romans 8:31b-39', `English proper second reading: ${englishProperParsed.data.reading2.cit_en}`);
      check(englishProperParsed.data.gospel.cit_en === 'Luke 9:23-26', `English proper Gospel: ${englishProperParsed.data.gospel.cit_en}`);
      const englishProperMerged = {};
      mergeSourceData(englishProperMerged, englishProperParsed, 'EN');
      check(!!englishProperMerged.reading2 && !englishProperMerged.collect, 'English proper readings did not replace mismatched Sunday formulary');
      state.targetLang = 'ES'; state.targetLocationCode = 'MX';
      const spanishProperParsed = await applyOfficialKoreanLocalProperReadings(
        ordinarySundayParsed(), 'ES', koreanMartyrsDate, 'MX', async () => spanishKoreanMartyrsProper
      );
      check(spanishProperParsed.data.reading1.cit_es === 'Sabiduría 3, 1-9', `Spanish proper first reading: ${spanishProperParsed.data.reading1.cit_es}`);
      check(spanishProperParsed.data.reading2.cit_es === 'Romanos 8, 31-39', `Spanish proper second reading: ${spanishProperParsed.data.reading2.cit_es}`);
      check(spanishProperParsed.data.gospel.cit_es === 'Lucas 9, 23-26', `Spanish proper Gospel: ${spanishProperParsed.data.gospel.cit_es}`);
      const spanishProperMerged = {};
      mergeSourceData(spanishProperMerged, spanishProperParsed, 'ES');
      check(!!spanishProperMerged.reading2 && !spanishProperMerged.collect, 'Spanish proper readings did not replace mismatched Sunday formulary');
      check(!citationsAreDifferent('지혜 3,1-9', englishProperParsed.data.reading1.cit_en, 'KR', 'EN'), 'English proper first reading did not align with Korean');
      check(!citationsAreDifferent('로마 8,31ㄴ-39', englishProperParsed.data.reading2.cit_en, 'KR', 'EN'), 'English proper second reading did not align with Korean');
      check(!citationsAreDifferent('로마 8,31ㄴ-39', spanishProperParsed.data.reading2.cit_es, 'KR', 'ES'), 'Spanish proper second reading did not align with Korean');
      check(!citationsAreDifferent('루카 9,23-26', spanishProperParsed.data.gospel.cit_es, 'KR', 'ES'), 'Spanish proper Gospel did not align with Korean');
      state.currentLoc = originalCalendarState.currentLoc;
      state.selectedLocationCode = originalCalendarState.selectedLocationCode;
      state.targetLang = originalCalendarState.targetLang;
      state.targetLocationCode = originalCalendarState.targetLocationCode;
      state.gpsCoordinates = originalCalendarState.gpsCoordinates;
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
      const taiwanSourceEucharist = eucharisticPrayerEntry(tw);
      check(taiwanSourceEucharist.type === 'selectable' && taiwanSourceEucharist.isEucharist, 'Taiwan Eucharist is not a selectable part');
      check(isEucharistSongMap(taiwanSourceEucharist.songs), 'Taiwan preface placeholder is not merge-safe');
      const taiwanMergedEucharist = eucharisticPrayerEntry(massData);
      check(getEucharistSongKeys(taiwanMergedEucharist).length >= 80, 'Taiwan merge erased the shared preface catalogue');
      state.options.eucharist = '2';
      state.options.eucharist_song = 'ordinary_1';
      state.autoEucharistSongKey = '';
      state.liturgyInfo.prefaceKey = 'ordinary_1';
      render();
      const taiwanEucharistSection = document.querySelector('section[data-part-id="eucharist"]');
      const taiwanEucharistSelects = Array.from(taiwanEucharistSection.querySelectorAll('select.select-inline'));
      const taiwanPrayerSelect = taiwanEucharistSelects.find(select => (select.getAttribute('onchange') || '').includes("'eucharist'"));
      const taiwanPrefaceSelect = taiwanEucharistSelects.find(select => (select.getAttribute('onchange') || '').includes("'eucharist_song'"));
      check(taiwanPrayerSelect && taiwanPrayerSelect.options.length === 4, 'Taiwan Eucharistic Prayer I-IV selector missing');
      check(taiwanPrefaceSelect && taiwanPrefaceSelect.options.length >= 80, 'Taiwan preface selector missing');
      check(taiwanEucharistSection.textContent.includes('파스카의 신비로'), 'Selected Taiwan preface was not rendered');
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
      // Distinct proper passages are alternatives, never long/short forms.
      // The fixed-celebration fallback must also produce the same labels when
      // one source (such as USCCB) does not publish common/proper metadata.
      const archangelsDate=new Date(2026,8,29,12);
      const properVariantFixture=(targetLower,withSourceKind)=>({
        A:{
          lines:[{role_kr:'body',text_kr:'같은 낱말을 포함한 매우 긴 첫째 고유 독서 본문입니다.',["role_"+targetLower]:'body',["text_"+targetLower]:'A deliberately long first proper reading containing shared words.'}],
          cit:{cit_kr:'다니 7,9-10.13-14',["cit_"+targetLower]:targetLower==='en'?'Daniel 7:9-10, 13-14':'Đn 7,9-10.13-14'},
          __dailySourceIndexes:{kr:0,[targetLower]:0},
          ...(withSourceKind?{__dailyOptionKind:'proper'}:{})
        },
        B:{
          lines:[{role_kr:'body',text_kr:'같은 낱말을 포함한 본문입니다.',["role_"+targetLower]:'body',["text_"+targetLower]:'shared words.'}],
          cit:{cit_kr:'묵시 12,7-12ㄱ',["cit_"+targetLower]:targetLower==='en'?'Revelation 12:7-12ab':'Kh 12,7-12a'},
          __dailySourceIndexes:{kr:1,[targetLower]:1},
          ...(withSourceKind?{__dailyOptionKind:'proper'}:{})
        }
      });
      state.currentLoc='KR'; state.targetLang='EN';
      const krEnProperVariants=properVariantFixture('en',false);
      applyDailyLengthVariantLabels(krEnProperVariants,'reading1');
      check(!Object.values(krEnProperVariants).some(variant=>variant.__dailyLengthKind),'Different Bible passages were classified as long/short readings');
      inferDailyVariantKinds(krEnProperVariants,'reading1',archangelsDate);
      applyDailyKindedVariantLabels(krEnProperVariants,'reading1');
      state.currentLoc='KR'; state.targetLang='VN';
      const krVnProperVariants=properVariantFixture('vn',true);
      applyDailyLengthVariantLabels(krVnProperVariants,'reading1');
      inferDailyVariantKinds(krVnProperVariants,'reading1',archangelsDate);
      applyDailyKindedVariantLabels(krVnProperVariants,'reading1');
      check(krEnProperVariants.A.label.kr==='고유 독서 1'&&krEnProperVariants.B.label.kr==='고유 독서 2','KR-EN proper readings were not numbered');
      check(krVnProperVariants.A.label.kr===krEnProperVariants.A.label.kr&&krVnProperVariants.B.label.kr===krEnProperVariants.B.label.kr,'KR-EN and KR-VN proper reading labels diverged');
      check(krEnProperVariants.A.label.en==='Proper Reading 1'&&krVnProperVariants.A.label.vn==='Bài đọc riêng 1','Localized proper reading labels missing');
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
      const koreanVietnamesePsalmAlignment=buildParallelPassageAlignment('psalm',{
        kr:[[parsedLine('','주님, 귀 기울여 제 말씀 들어 주소서.')]],
        vn:[[parsedLine('','Xin Chúa lắng tai và nghe tiếng con cầu.')],[parsedLine('','Ai nghẹn ngào ra đi gieo giống.')]]
      },{
        cit_kr:'시편 17(16),1.2-3.6-7(◎ 6ㄷ 참조)',
        optionCits_vn:[{cit_vn:'Tv 16,1.2-3.6-7 Đ. c.6b'},{cit_vn:'Tv 125,1-2ab.2cd-3.4-5.6 Đ. c.5'}]
      });
      check(koreanVietnamesePsalmAlignment.some(group=>group.kr===0&&group.vn===0),'Same Korean/Vietnamese responsorial Psalm stayed split');
      const explicitAlternatives=buildParallelPassageAlignment('reading1',{kr:[[],[]],zh:[[]]},sept11.reading1);
      check(explicitAlternatives.length===2 && explicitAlternatives.some(group=>group.kr===0&&group.zh===0) && explicitAlternatives.some(group=>group.kr===1&&group.zh===null),'Explicit source alternative was lost');
      // The KTCG core response is complete enough to render and cache.  The
      // slower diocesan prayer supplement must not be awaited by first load.
      const originalVietnameseSource=state.vnReadingSource;
      const originalKtcgLoader=fetchVietnameseKtcgDailyMass;
      const originalPrayerSupplement=applyVietnameseKtcgDiocesanPrayers;
      const completeSection=text=>({text,lines:[parsedLine('',text)]});
      const ktcgCore={title:'Ngày thường',data:Object.fromEntries(
        ['entrance','reading1','psalm','gospel_accl','gospel','communion'].map(id=>[id,completeSection(id)])
      )};
      let prayerSupplementCalls=0;
      try {
        state.vnReadingSource='ktcg';
        fetchVietnameseKtcgDailyMass=async()=>ktcgCore;
        applyVietnameseKtcgDiocesanPrayers=async parsed=>{ prayerSupplementCalls+=1; return parsed; };
        const firstLoad=await fetchStrictDailyMass('VN',date);
        check(firstLoad===ktcgCore&&prayerSupplementCalls===0,'KTCG first load still awaited diocesan prayers');
        writeCachedDailySource('VN',date,ktcgCore,{locationCode:'VN'});
        const cachedKtcgCore=readCachedDailySource('VN',date,{locationCode:'VN'});
        check(cachedKtcgCore?.data?.gospel?.text==='gospel','KTCG core response was not cacheable');
        localStorage.removeItem(dailySourceStorageKey('VN',date,'VN'));
      } finally {
        fetchVietnameseKtcgDailyMass=originalKtcgLoader;
        applyVietnameseKtcgDiocesanPrayers=originalPrayerSupplement;
        state.vnReadingSource=originalVietnameseSource;
      }
      // Actual source-only choices must offer AI on either side, including KR.
      const originalFontSize=state.fontSize;
      const originalUiLanguage=state.uiLang;
      const fontSelect=document.getElementById('set-font-size');
      state.fontSize='18px'; fontSelect.value='14px'; state.uiLang='VN';
      syncLocalizedChromeAndSettings();
      check(fontSelect.value==='18px','UI language change reset the normal font size');
      state.fontSize=originalFontSize; state.uiLang=originalUiLanguage;
      syncLocalizedChromeAndSettings();
      for(const id of ['reading1','psalm']) {
        aiTranslationRecords.clear();
        const data={[id]:{cit_kr:'1코린 9,16-19',cit_zh:'聖保祿宗徒致格林多人前書 10,1-5',
          kr_lines:[{text:'서로 다른 한국어 원문 첫 문단',role:'body'},{text:'한국어 원문 둘째 문단',role:'body'}],
          zh_lines:[{text:'另一篇中文原文第一段',role:'body'},{text:'中文原文第二段',role:'body'}],
          variantAlignment:[{kr:0,zh:null},{kr:null,zh:0}]}};
        resetMassDataFrom(getStartupOrdinaryMassData());
        applyDailyReadingsToMassData(data);
        for(const choice of ['A','B']) {
          state.options[id]=choice; render();
          const buttons=document.querySelectorAll('section[data-part-id="'+id+'"] .btn-ai-trans');
          check(buttons.length===(id==='reading1'?1:2),id+' '+choice+' AI must cover the whole source choice (found '+buttons.length+')');
        }
        if(id==='reading1') {
          state.layoutStacked=true; render();
          check(document.querySelectorAll('section[data-part-id="reading1"] .btn-ai-trans').length===1,'Mobile source-only reading split AI by sentence');
          check(document.querySelector('section[data-part-id="reading1"]').textContent.includes('另一篇中文原文第一段'),'Mobile source-only original missing');
          state.layoutStacked=false; render();
        }
        const originalTranslator=translateWithGemini;
        try {
          translateWithGemini=async(text,lang)=>{
            check(lang==='KR' && text.includes('另一篇中文原文第一段'),'Wrong AI direction/source');
            if(id==='reading1') check(text.includes('中文原文第二段'),'Whole source-only reading was not sent for AI translation');
            return '확인용 AI 번역';
          };
          document.querySelector('section[data-part-id="'+id+'"] .btn-ai-trans').click();
          await new Promise(resolve=>setTimeout(resolve,0));
          const element=document.querySelector('section[data-part-id="'+id+'"]');
          check(element.querySelector('.ai-badge') && element.textContent.includes('확인용 AI 번역'),id+' labelled AI output missing');
          check(element.textContent.includes('另一篇中文原文'),id+' original overwritten by AI');
        } finally { translateWithGemini=originalTranslator; aiTranslationRecords.clear(); }
      }
      aiTranslationRecords.clear();
      resetMassDataFrom(getStartupOrdinaryMassData());
      applyDailyReadingsToMassData({reading1:{cit_kr:'창세 1,1-2',kr_lines:[
        {text:'한 언어에만 있는 첫 문단',role:'body'},
        {text:'한 언어에만 있는 둘째 문단',role:'body'}
      ]}});
      render();
      check(document.querySelectorAll('section[data-part-id="reading1"] .btn-ai-trans').length===1,'Single source-only reading split AI by sentence');
      const vietnamesePeterIntro='Bài trích thư thứ nhất của thánh Phê-rô tông đồ.';
      state.currentLoc='KR'; state.selectedLocationCode='KR'; state.targetLang='VN'; state.targetLocationCode='VN';
      resetMassDataFrom(getStartupOrdinaryMassData());
      applyDailyReadingsToMassData({reading1:{cit_vn:'1 Pr 1,3-9',vn_lines:[
        {sp:'N.',text:vietnamesePeterIntro,role:'intro'},
        {text:'Chúc tụng Thiên Chúa là Thân Phụ Đức Giê-su Ki-tô, Chúa chúng ta.',role:'body'}
      ]}});
      const peterReading=massData.find(item=>getBaseId(item.id)==='reading1');
      const peterLines=peterReading.type==='selectable' ? peterReading.variants[state.options.reading1||'A'].lines : peterReading.lines;
      const sourcePeterIntro=peterLines.find(line=>line.role_vn==='intro');
      const koreanPeterIntro=peterLines.find(line=>line.role_kr==='intro');
      check(sourcePeterIntro && sourcePeterIntro.text_vn===vietnamesePeterIntro,'Parsed Vietnamese reading intro was replaced');
      check(sourcePeterIntro.intro_origin_vn==='source','Parsed Vietnamese reading intro lost source provenance');
      check(koreanPeterIntro && koreanPeterIntro.sp_kr==='▥' && koreanPeterIntro.text_kr==='베드로 1서의 말씀입니다.','Vietnamese 1 Peter intro did not produce the Korean default');
      check(SUPPORTED_LANGS.every(lang=>peterLines.some(line=>line['role_'+lang.toLowerCase()]==='intro'&&line['text_'+lang.toLowerCase()])), 'Reading intro defaults were not stored for every supported language');
      check(canonicalBookIdFromReadingIntro(vietnamesePeterIntro,'VN','reading1')==='1PE','Vietnamese intro-only book recognition failed');
      check(localizedReadingIntroText('gospel','KR','JHN')==='요한이 전하는 거룩한 복음입니다.','Korean Gospel subject particle fallback failed');
      render();
      const vietnameseSourceOnlyReading=document.querySelector('section[data-part-id="reading1"]');
      check(vietnameseSourceOnlyReading.textContent.includes(vietnamesePeterIntro),'Parsed Vietnamese intro missing from rendering');
      check(vietnameseSourceOnlyReading.textContent.includes('베드로 1서의 말씀입니다.'),'Derived Korean intro missing from rendering');
      check(vietnameseSourceOnlyReading.querySelectorAll('.btn-ai-trans').length===1,'Derived intro suppressed whole-reading AI fallback');
      const peterRows=[...vietnameseSourceOnlyReading.querySelectorAll('.source-only-reading-whole')];
      const peterIntroRow=peterRows.find(row=>row.textContent.includes(vietnamesePeterIntro)&&row.textContent.includes('베드로 1서의 말씀입니다.'));
      const peterBodyRow=peterRows.find(row=>row.classList.contains('source-only-reading-body-row'));
      const peterEndingRow=peterRows.find(row=>row.textContent.includes('주님의 말씀입니다'));
      check(peterIntroRow && !peterIntroRow.textContent.includes('Chúc tụng Thiên Chúa'),'Source-only reading intro did not stay on its own aligned PC row');
      check(peterBodyRow && peterBodyRow.textContent.includes('Chúc tụng Thiên Chúa') && peterBodyRow.querySelector('.btn-ai-trans'),'Source-only reading body row missing');
      check(peterEndingRow && peterEndingRow!==peterIntroRow && !peterEndingRow.textContent.includes('Chúc tụng Thiên Chúa'),'Source-only reading ending did not stay on its own aligned PC row');
      const multiReading={reading1:{
        cit_kr:'욥 1,6-22',cit_vn:'G 1,6-22',
        optionCits_kr:[{cit_kr:'욥 1,6-22'}],
        optionCits_vn:[{cit_vn:'G 1,6-22'},{cit_vn:'1 Pr 1,3-9'},{cit_vn:'2 Mcb 7,1-2.9-14'}],
        optionKinds_vn:['common','common','common'],
        kr_lines:[{text:'욥기의 말씀입니다.',role:'intro'},{text:'한국어 욥기 본문',role:'body'}],
        vn_lines:[
          {text:'Bài trích sách Gióp.',role:'intro'},{text:'Bài đọc ngày thường.',role:'body'},
          {text:'Hoặc:'},
          {text:vietnamesePeterIntro,role:'intro'},{text:'Bài đọc chung thứ nhất.',role:'body'},
          {text:'Hoặc:'},
          {text:'Bài trích sách Ma-ca-bê quyển thứ hai.',role:'intro'},{text:'Bài đọc chung thứ hai.',role:'body'}
        ]
      }};
      applyCachedVariantAlignments(multiReading,date);
      check(multiReading.reading1.variantAlignment.length===3,'Three reading sources collapsed before rendering');
      resetMassDataFrom(getStartupOrdinaryMassData());
      applyDailyReadingsToMassData(multiReading);
      state.options.reading1='A'; render();
      const multiReadingItem=massData.find(item=>getBaseId(item.id)==='reading1');
      const multiReadingSelect=document.querySelector('section[data-part-id="reading1"] select.select-inline');
      check(multiReadingItem.type==='selectable' && Object.keys(multiReadingItem.variants).length===3,'Reading variants collapsed to one part');
      check(multiReadingSelect && multiReadingSelect.options.length===3,'Reading choice selector disappeared');
      state.options.reading1='B'; render();
      check(document.querySelector('section[data-part-id="reading1"]').textContent.includes('베드로 1서의 말씀입니다.'),'Second reading choice lost its translated intro');
      aiTranslationRecords.clear();
      state.currentLoc='KR'; state.selectedLocationCode='KR'; state.targetLang='ZH'; state.targetLocationCode='TW'; state.layoutStacked=false;
      check(isGospelDialogueLine({text_kr:'주님께서 여러분과 함께.'}),'Korean Gospel dialogue recognition');
      resetMassDataFrom(getStartupOrdinaryMassData());
      applyDailyReadingsToMassData({gospel:{cit_zh:'瑪竇福音 5,1-12',zh_lines:[
        {text:'真福八端',role:'summary'},
        {text:'恭讀聖瑪竇福音',role:'intro'},
        {text:'那時候，耶穌上了山，開始教訓門徒。',role:'body'}
      ]}});
      render();
      const sourceOnlyGospel=document.querySelector('section[data-part-id="gospel"]');
      const koreanGospelFrame=sourceOnlyGospel.textContent;
      check(sourceOnlyGospel.querySelectorAll('.btn-ai-trans').length===1,'Source-only Gospel split AI by sentence');
      check(sourceOnlyGospel.textContent.includes('那時候，耶穌上了山'),'Source-only Gospel original missing');
      check(koreanGospelFrame.includes('마태오가 전하는 거룩한 복음입니다.'),'Source-only Gospel missing derived Korean intro');
      for(const phrase of ['주님께서 여러분과 함께','또한 사제(부제)의 영과 함께','주님 영광 받으소서','주님의 말씀입니다','그리스도님 찬미합니다']) {
        check(koreanGospelFrame.includes(phrase),'Source-only Gospel lost fixed response: '+phrase);
      }
      const gospelRows=[...sourceOnlyGospel.querySelectorAll('.source-only-reading-whole')];
      const gospelIntroRow=gospelRows.find(row=>row.textContent.includes('마태오가 전하는 거룩한 복음입니다.')&&row.textContent.includes('恭讀聖瑪竇福音'));
      const gospelBodyRow=gospelRows.find(row=>row.classList.contains('source-only-reading-body-row'));
      const gospelEndingRow=gospelRows.find(row=>row.textContent.includes('주님의 말씀입니다'));
      check(gospelIntroRow && !gospelIntroRow.textContent.includes('那時候，耶穌上了山'),'Source-only Gospel intro did not stay on its own aligned PC row');
      check(gospelBodyRow && gospelBodyRow.textContent.includes('那時候，耶穌上了山') && gospelBodyRow.querySelector('.btn-ai-trans'),'Source-only Gospel body row missing');
      check(gospelEndingRow && gospelEndingRow!==gospelIntroRow && !gospelEndingRow.textContent.includes('那時候，耶穌上了山'),'Source-only Gospel ending did not stay on its own aligned PC row');
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
      const missingCollectConclusion=[];
      applyParsedLinesForLanguage(missingCollectConclusion,'kr',[
        {text:'한국어 본기도 본문',role:'body'},
        {text:localizedPrayerConclusionFormula('KR','collect','relative_son'),role:'conclusion'}
      ],'collect');
      applyParsedLinesForLanguage(missingCollectConclusion,'vn',[
        {text:'Lời nguyện nhập lễ tiếng Việt không có câu kết.',role:'body'}
      ],'collect');
      ensureLocalizedPrayerConclusions(missingCollectConclusion,'collect');
      const suppliedVietnameseCollect=missingCollectConclusion.find(line=>line.role_vn==='conclusion');
      check(suppliedVietnameseCollect && suppliedVietnameseCollect.text_vn===localizedPrayerConclusionFormula('VN','collect','relative_son'),'Missing collect conclusion did not follow the adjacent language');
      check(!suppliedVietnameseCollect.text_vn_ai,'Supplied collect conclusion was marked as AI');
      aiTranslationRecords.clear();
      state.currentLoc='KR'; state.selectedLocationCode='KR'; state.targetLang='VN'; state.targetLocationCode='VN'; state.layoutStacked=false;
      const koreanCollectBody='평화의 은총을 저희에게 내려 주소서.';
      const koreanCollectEnding=localizedPrayerConclusionFormula('KR','collect','through_son');
      check(aiFallbackSourceText(koreanCollectBody+' '+koreanCollectEnding,'kr','collect')===koreanCollectBody,'Prayer AI render guard did not remove a combined conclusion');
      resetMassDataFrom(getStartupOrdinaryMassData());
      applyDailyReadingsToMassData({collect:{kr:koreanCollectBody+' '+koreanCollectEnding}});
      const flatCollect=massData.find(item=>getBaseId(item.id)==='collect');
      const flatCollectLines=flatCollect.type==='selectable' ? flatCollect.variants[state.options.collect||'A'].lines : flatCollect.lines;
      check(flatCollectLines.some(line=>line.role_kr==='body' && line.text_kr===koreanCollectBody),'Flat collect body was not separated from its conclusion');
      check(flatCollectLines.some(line=>line.role_kr==='conclusion' && line.text_kr===koreanCollectEnding),'Flat collect conclusion was not stored separately');
      render();
      const flatCollectElement=document.querySelector('section[data-part-id="collect"]');
      const flatCollectButton=flatCollectElement.querySelector('.btn-ai-trans');
      check(flatCollectButton,'Flat collect body has no AI translation button');
      const originalPrayerTranslator=translateWithGemini;
      try {
        translateWithGemini=async(text,lang)=>{
          check(lang==='VN','Flat collect AI target language changed');
          check(text.includes(koreanCollectBody),'Flat collect AI lost its body');
          check(!text.includes(koreanCollectEnding),'Flat collect AI still included the conclusion');
          return 'Bản dịch phần thân lời nguyện.';
        };
        flatCollectButton.click();
        await new Promise(resolve=>setTimeout(resolve,0));
        const vietnameseEnding=localizedPrayerConclusionFormula('VN','collect','through_son');
        check(flatCollectElement.textContent.includes('Bản dịch phần thân lời nguyện.'),'Flat collect AI body result missing');
        check((flatCollectElement.textContent.match(new RegExp(vietnameseEnding.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'g'))||[]).length===1,'Flat collect official conclusion was lost or duplicated');
      } finally { translateWithGemini=originalPrayerTranslator; aiTranslationRecords.clear(); }
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
