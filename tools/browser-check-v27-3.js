const fs = require('fs');
const http = require('http');
const path = require('path');
const { chromium } = require('@playwright/test');

const root = path.resolve(__dirname, '..');
const liveSources = process.env.ORDO_LIVE_SOURCES === '1';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function startServer() {
  const mime = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png'
  };
  const server = http.createServer((request, response) => {
    const url = new URL(request.url, 'http://127.0.0.1');
    const route = decodeURIComponent(url.pathname === '/' ? '/V27.4.html' : url.pathname);
    const file = path.resolve(root, route.replace(/^\/+/, ''));
    if (!file.startsWith(root)) return response.writeHead(403).end('Forbidden');
    fs.readFile(file, (error, data) => {
      if (error) return response.writeHead(404).end('Not found');
      response.writeHead(200, { 'content-type': mime[path.extname(file)] || 'application/octet-stream' });
      response.end(data);
    });
  });
  return new Promise(resolve => server.listen(0, '127.0.0.1', () => resolve(server)));
}

(async () => {
  const server = await startServer();
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 412, height: 915 } });
  const page = await context.newPage();
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.stack || String(error)));
  await page.addInitScript(() => {
    const originalFetch = window.fetch.bind(window);
    window.__ordoOriginalFetch = originalFetch;
    window.fetch = async (url, options) => {
      if (String(url).startsWith(location.origin)) return originalFetch(url, options);
      throw new Error('Remote fetch disabled by V27.4 browser check');
    };
    Object.defineProperty(navigator, 'geolocation', {
      configurable: true,
      value: {
        getCurrentPosition(success) {
          success({ coords: { latitude: 14.5995, longitude: 120.9842 } });
        }
      }
    });
  });

  try {
    await page.goto(`http://127.0.0.1:${server.address().port}/V27.4.html`, {
      waitUntil: 'domcontentloaded',
      timeout: 90000
    });
    await page.waitForFunction(() => (
      typeof syncStartupConsentControls === 'function'
      && state.selectedLocationCode === 'PH'
    ), null, { timeout: 15000 });
    const startupConsent = await page.evaluate(() => {
      const inspectRows = () => Array.from(document.querySelectorAll('#consent-language-grid .consent-warning-line')).map(line => ({
        lang: Array.from(line.classList).find(name => /^lang-/.test(name)) || '',
        label: (line.querySelector('.consent-warning-language') || {}).textContent || '',
        text: (line.querySelector('.consent-warning-text') || {}).textContent || '',
        display: getComputedStyle(line).display,
        columns: getComputedStyle(line).gridTemplateColumns,
        fontFamily: getComputedStyle(line.querySelector('.consent-warning-text')).fontFamily
      }));
      const englishRegion = {
        location: state.selectedLocationCode,
        accept: document.getElementById('consent-accept').textContent,
        decline: document.getElementById('consent-decline').textContent
      };
      applyDetectedLocation('TW', 'Asia/Taipei');
      const taiwanRegion = {
        location: state.selectedLocationCode,
        accept: document.getElementById('consent-accept').textContent,
        decline: document.getElementById('consent-decline').textContent
      };
      const regionalButtons = Object.fromEntries(['PH', 'VA', 'KR', 'JP', 'TW', 'VN'].map(locationCode => {
        applyDetectedLocation(locationCode);
        return [locationCode, {
          accept: document.getElementById('consent-accept').textContent,
          decline: document.getElementById('consent-decline').textContent
        }];
      }));
      applyDetectedLocation('PH', 'Asia/Manila');
      const grid = document.getElementById('consent-language-grid');
      return {
        rows: inspectRows(),
        englishRegion,
        taiwanRegion,
        regionalButtons,
        hasLegacyCards: Boolean(grid.querySelector('.consent-language-block')),
        fitsWidth: grid.scrollWidth <= grid.clientWidth + 1
      };
    });
    if (process.env.ORDO_SCREENSHOT === '1') {
      const screenshotDir = path.join(root, 'tmp');
      fs.mkdirSync(screenshotDir, { recursive: true });
      await page.locator('#consent-modal .consent-content').screenshot({
        path: path.join(screenshotDir, 'v27-4-consent-gothic-font.png')
      });
    }
    await page.locator('#consent-accept').click({ timeout: 15000 }).catch(() => {});
    await page.waitForFunction(() => typeof render === 'function' && typeof updateSettings === 'function', null, {
      timeout: 90000
    });
    await page.waitForFunction(() => state.selectedLocationCode === 'PH' && document.querySelector('#set-loc').disabled, null, {
      timeout: 15000
    });

    const result = await page.evaluate(async liveSourceCheck => {
      const unsupported = ['CN', 'ID', 'TH', 'KH', 'SG', 'MY', 'BN', 'HK', 'MO'];
      const locationSelect = document.getElementById('set-loc');
      const visibleGpsOptions = Array.from(locationSelect.options).filter(option => !option.hidden).map(option => option.value);
      const initial = {
        useGps: state.useGps,
        code: state.selectedLocationCode,
        left: state.currentLoc,
        disabled: locationSelect.disabled,
        visibleGpsOptions
      };

      document.getElementById('set-target-lang').value = 'JP';
      updateSettings();
      const afterRightChange = { useGps: state.useGps, code: state.selectedLocationCode, target: state.targetLang };

      document.getElementById('set-gps').checked = true;
      updateSettings();
      const manualEnabled = !locationSelect.disabled;
      locationSelect.value = 'IE';
      selectManualLocation();
      const afterManual = { useGps: state.useGps, code: state.selectedLocationCode, left: state.currentLoc };

      document.getElementById('set-ui-lang').value = 'JP';
      updateSettings();
      const jpUi = {
        settingsTitle: document.getElementById('lbl-settings-title').textContent,
        consentTitle: document.getElementById('consent-title').textContent,
        targetLabel: document.querySelector('#set-target-lang option[value="JP"]').textContent,
        uiLabel: document.querySelector('#set-ui-lang option[value="JP"]').textContent
      };
      const savedUiLanguage = state.uiLang;
      const localizedSettings = {};
      ['KR', 'VN', 'EN', 'JP', 'LA'].forEach(ui => {
        state.uiLang = ui;
        syncLocalizedChromeAndSettings();
        const inspectLocationSelect = selectId => {
          const select = document.getElementById(selectId);
          return {
            regions: Object.fromEntries(Array.from(select.querySelectorAll('optgroup[data-region-key]')).map(group => [group.dataset.regionKey, group.label])),
            order: Array.from(select.options).filter(option => locationMeta[option.value] && option.value !== 'INTL').map(option => option.value),
            labels: Object.fromEntries(Array.from(select.options).filter(option => locationMeta[option.value] && option.value !== 'INTL').map(option => [option.value, option.textContent]))
          };
        };
        localizedSettings[ui] = {
          left: inspectLocationSelect('set-loc'),
          target: inspectLocationSelect('set-target-lang')
        };
      });
      state.uiLang = savedUiLanguage;
      syncLocalizedChromeAndSettings();

      const modules = globalThis.countryMassData;
      const date = (year, month, day) => new Date(year, month - 1, day, 12, 0, 0);
      const activeProperWasIreland = localMissalLanguageData('EN') === modules.IE.romanMissalProperData;
      const irelandLocalProper = localMissalEntryForLanguage('EN', date(2026, 2, 1));
      locationSelect.value = 'PH';
      selectManualLocation();
      const philippinesGeneralProper = localMissalEntryForLanguage('EN', date(2026, 8, 29));
      const philippinesSantoNinoProper = localMissalEntryForLanguage('EN', date(2026, 1, 18));
      const cbcpBoundaryFixture = `Title: Today's Readings
URL Source: https://cbcp.ph/readings/august-29-2026/
Markdown Content:
# Today's Readings
### Reading 1
1 Corinthians 1:26-31
Consider your own calling, brothers and sisters.
### Responsorial Psalm
Psalm 33:12-13
R. Blessed the people the Lord has chosen to be his own.
### Gospel
Matthew 25:14-30
Jesus told his disciples this parable.
### Saint of the Day
St. Example
This biography must never be parsed as part of the Gospel.`;
      const cbcpBoundaryParsed = strictParseDailyMass('EN', cbcpBoundaryFixture, date(2026, 8, 29));
      const universalisFixture = `Title: Readings at Mass
URL Source: https://universalis.com/L/europe.ireland/20260831/mass.htm
Markdown Content:
| First reading |
| --- |
| 1 Corinthians 2:1-5 |
#### The Spirit reaches even the depths of God
The Spirit reaches the depths of everything, even the depths of God. After all, this is the complete first-reading body used by the parser regression.
| Responsorial Psalm |
| --- |
| Psalm 118:97-102 |
R. Lord, I love your law.
The psalm body remains attached to its section.
| Gospel Acclamation | John 8:12 |
| --- | --- |
Alleluia, alleluia.
The word of the Lord is light.
Alleluia.
| Gospel | Luke 4:16-30 |
| --- | --- |
#### A Gospel summary
This is the complete Gospel body used by the parser regression.
You can also view this page with the New Testament in Greek and English.`;
      const universalisSharedParser = Object.fromEntries(['IE', 'GB-ENG', 'GB-WLS', 'GB-SCT'].map(code => {
        const parsed = strictParseDailyMass('EN', universalisFixture, date(2026, 8, 31), code);
        return [code, {
          sections: Object.keys(parsed.data || {}),
          missing: missingCoreDailyReadingSections(parsed),
          readingLines: parsed.data && parsed.data.reading1 && parsed.data.reading1.lines,
          gospelLines: parsed.data && parsed.data.gospel && parsed.data.gospel.lines
        }];
      }));
      const unmarkedEnglishPsalm = strictFormatSection('EN', 'psalm', {
        heading: 'Responsorial Psalm',
        lines: [
          'Psalm 144(145):8-14',
          'The Lord is just in all his ways.',
          'The Lord is kind and full of compassion,',
          'slow to anger, abounding in love.',
          'The Lord is just in all his ways.',
          'All your creatures shall thank you, O Lord,',
          'and your friends shall repeat their blessing.',
          'The Lord is just in all his ways.'
        ]
      });
      const savedPsalmPair = { currentLoc: state.currentLoc, targetLang: state.targetLang };
      state.currentLoc = 'KR';
      state.targetLang = 'EN';
      const britishPsalmSection = {
        cit_kr: '시편 145(144),8-9.10-11.12-13ㄱㄴ.13ㄷ-14',
        cit_en: 'Ps 145(144):8-14',
        kr_lines: [
          parsedLine('◎', '주님은 당신의 모든 길에서 의로우시네.'),
          parsedLine('○', '주님은 너그럽고 자비하시네. - ◎')
        ],
        en_lines: [
          parsedLine('R.', 'The Lord is just in all his ways.'),
          parsedLine('Versicle', 'The Lord is kind and full of compassion. - R.')
        ]
      };
      const britishPsalmData = { psalm: britishPsalmSection };
      applyCachedVariantAlignments(britishPsalmData, date(2026, 9, 1));
      const britishPsalmCitationAlignment = {
        koreanStarts: citationStartsForCompare(britishPsalmSection.cit_kr),
        englishStarts: citationStartsForCompare(britishPsalmSection.cit_en),
        reversedEnglishStarts: citationStartsForCompare('Psalm 144(145):8-14'),
        different: citationsAreDifferent(britishPsalmSection.cit_kr, britishPsalmSection.cit_en),
        alignment: britishPsalmSection.variantAlignment
      };
      state.currentLoc = savedPsalmPair.currentLoc;
      state.targetLang = savedPsalmPair.targetLang;
      const vietnameseAlternativeAcclamation = parseVietnameseAcclamationLines([
        'Alleluia, alleluia! – Ai giữ lời Chúa Kitô, thì tình yêu Thiên Chúa đã tuyệt hảo nơi người ấy. – Alleluia.',
        '(Hoặc đọc: Vị ngôn sứ vĩ đại đã xuất hiện giữa chúng ta.)'
      ]);
      const sharedApplyLines = [Object.assign(emptyMassLine(), {
        text_kr: '주님의 말씀입니다.',
        role_kr: 'body',
        text_vn: 'Đó là lời Chúa.',
        role_vn: 'body'
      })];
      let sharedApplyError = '';
      try {
        normalizeDailySectionLines(sharedApplyLines, 'reading1');
      } catch (error) {
        sharedApplyError = String(error && (error.stack || error));
      }
      const japaneseDayWordFixture = `Markdown Content:
第一朗読
エレミヤ20・7-9
主の言葉のゆえに、わたしは恥を受けねばならない。
エレミヤの預言
20・7 わたしは一日中、笑い者にされる。
答唱詩編
詩編63・2、3+4
神よ、わたしはあなたを慕う。
詩編63
63・2 神よ、わたしはあなたをしたう。
第二朗読
ローマ12・1-2
自分の体を生けるいけにえとして献げなさい。
使徒パウロのローマの教会への手紙
12・1 兄弟たち、神の憐れみによって勧めます。
福音朗読
マタイ16・21-27
アレルヤ、アレルヤ。父がわたしたちの心の目を開いてくださる。アレルヤ、アレルヤ。
マタイによる福音
16・21 そのとき、イエスは弟子たちに話された。`;
      const japaneseDayWordParsed = strictParseDailyMass('JP', japaneseDayWordFixture, date(2026, 8, 30));
      const japaneseVerseSuffixFixture = `Markdown Content:
第一朗読
①コリント2・10b-16
神は霊によって、そのことをわたしたちに明らかにされた。
使徒パウロのコリントの教会への手紙
(2・10b) 神は霊によって、そのことをわたしたちに明らかにされた。`;
      const japaneseVerseSuffixParsed = strictParseDailyMass('JP', japaneseVerseSuffixFixture, date(2026, 9, 1));
      const latinPsalmParsed = strictFormatSection('LA', 'psalm', {
        heading: 'Psalmus Responsorialis',
        lines: [
          'Ps 62, 2. 3-4',
          '℟. (2b) Sitívit in te ánima mea, Dómine, Deus meus.',
          'Deus, Deus meus es tu, ad te de luce vígilo.',
          '℟. Sitívit in te ánima mea, Dómine, Deus meus.',
          'In terra desérta et árida et inaquósa.',
          '℟. Sitívit in te ánima mea, Dómine, Deus meus.'
        ]
      });
      const traditionalChineseFixture = `Markdown Content:
常年期第廿二主日
進堂詠 詠八五 3, 5
上主，求祢憐憫我。
光榮頌
天主在天受光榮。
集禱經
全能的天主，求祢俯聽我們。
讀經一（上主的話，為我成為受侮辱和譏笑的因由。）
恭讀耶肋米亞先知書 二十 7-9
上主的話天天為我成為受侮辱的原因。──上主的聖言。
答唱詠 詠六二 2-6
答：上主，我的天主，我的靈魂渴慕祢。
一、
天主，祢是我的天主，我急切尋覓祢；
我的靈魂渴慕祢。 答
二、
我要一生一世讚美祢，
我的口唇讚美祢。 答
讀經二（獻上你們的身體，當作生活的祭品。）
恭讀聖保祿宗徒致羅馬人書 十二 1-2
獻上你們的身體當作生活的祭品。──上主的聖言。
福音前歡呼 雅一 21
答：阿肋路亞。
領：你們要以柔順的心接受聖言。
答：阿肋路亞。
福音（誰願意跟隨我，就該捨棄自己。）
恭讀聖瑪竇福音 十六 21-27
那時候，耶穌對門徒說：誰願意跟隨我，就該捨棄自己。──上主的聖言。
信經
我信唯一的天主。
獻禮經
上主，求祢悅納我們的祭獻。`;
      const traditionalChineseParsed = strictParseDailyMass('ZH', traditionalChineseFixture, date(2026, 8, 30), 'TW');
      const savedDisplayLanguages = { currentLoc: state.currentLoc, targetLang: state.targetLang };
      state.currentLoc = 'KR';
      state.targetLang = 'ZH';
      localizeAuxPanels();
      const warningElement = document.getElementById('prayer-dev-warning');
      const chineseWarning = {
        text: warningElement.innerText,
        lines: warningElement.querySelectorAll('.aux-warning-line').length,
        borderStyle: getComputedStyle(warningElement).borderStyle,
        backgroundColor: getComputedStyle(warningElement).backgroundColor,
        boxShadow: getComputedStyle(warningElement).boxShadow,
        insideCard: Boolean(warningElement.closest('.aux-card')),
        rows: Array.from(warningElement.querySelectorAll('.aux-warning-line')).map(line => ({
          display: getComputedStyle(line).display,
          columns: getComputedStyle(line).gridTemplateColumns,
          label: (line.querySelector('.aux-warning-language') || {}).textContent || '',
          text: (line.querySelector('.aux-warning-text') || {}).textContent || ''
        }))
      };
      state.currentLoc = savedDisplayLanguages.currentLoc;
      state.targetLang = savedDisplayLanguages.targetLang;
      localizeAuxPanels();

      const sourceChoiceLine = Object.assign(emptyMassLine(), {
        text_vn: 'Lạy Chúa, xin thánh hóa lễ vật này.',
        __sourceChoiceOriginal: true,
        __clearedDisplayLanguages: { kr: true }
      });
      const sourceChoiceAi = {
        suppressed: shouldSuppressAIFallbackForLine(sourceChoiceLine, 'prayer_offerings', 'kr'),
        source: fallbackSourceTextForLine(sourceChoiceLine, 'kr', 'prayer_offerings')
      };
      sourceChoiceAi.button = makeAIButton(sourceChoiceAi.source, '', 'KR');

      const alignedReadingFixture = splitDailyReadingBodyRowsByKorean([Object.assign(emptyMassLine(), {
        text_kr: '첫째 한국어 단락입니다.\n둘째 한국어 단락입니다.\n셋째 한국어 단락입니다.',
        role_kr: 'body',
        text_zh: '這是第一個自然語句，接著說明第二個重點；最後完成第三個段落。',
        role_zh: 'body',
        text_en: 'This is the first natural phrase, followed by the second point; the third paragraph completes the reading.',
        role_en: 'body',
        text_vn: 'Đây là câu thứ nhất. Tiếp theo là ý thứ hai; sau cùng là đoạn thứ ba.',
        role_vn: 'body',
        text_jp: 'これは第一の文です。続いて第二の要点です。最後に第三の段落です。',
        role_jp: 'body',
        text_la: 'Haec est prima sententia. Sequitur altera pars; denique tertia pars perficitur.',
        role_la: 'body'
      })], 'reading1');
      const quotedSentenceSplit = splitSentences(`He answered, "Peace be with you." Then he said, 'Remain here.' Next sentence.`).split('\n');
      const quotedAlignedReadingFixture = splitDailyReadingBodyRowsByKorean([Object.assign(emptyMassLine(), {
        text_kr: '예수님께서 평화가 함께하기를 빈다고 말씀하셨다.\n그리고 다음 말씀을 이어 가셨다.',
        role_kr: 'body',
        text_en: `Jesus said, "Peace be with you." Then he continued with the next teaching.`,
        role_en: 'body'
      })], 'reading1');

      const taiwanManifestEntry = traditionalChineseStaticMassRecord(date(2026, 8, 30));
      const originalFetch = window.fetch;
      let taiwanProxyRequest = null;
      window.fetch = async (url, options) => {
        taiwanProxyRequest = JSON.parse(options.body);
        return new Response(JSON.stringify({ success: true, source: 'Markdown Content:\n讀經一\n測試' }), {
          status: 200,
          headers: { 'content-type': 'application/json' }
        });
      };
      const taiwanProxySource = fetchTraditionalChineseDailyStaticSource(date(2026, 8, 30));
      const taiwanStaticData = traditionalChineseStaticMassData();
      const taiwanStaticLines = strictExpandTraditionalChineseLines(strictSourceLines(taiwanProxySource));
      const taiwanStaticRaw = strictExtractRawSections(taiwanStaticLines, 'ZH', getStrictMassSelector(date(2026, 8, 30)));
      const taiwanStaticParsed = strictParseDailyMass('ZH', taiwanProxySource, date(2026, 8, 30), 'TW');
      const taiwanActualLoaded = await fetchStrictDailyMass('ZH', date(2026, 9, 1), { locationCode: 'TW' });
      const savedTaiwanDisplayState = {
        selectedLocationCode: state.selectedLocationCode,
        currentLoc: state.currentLoc,
        targetLocationCode: state.targetLocationCode,
        targetLang: state.targetLang,
        liturgyInfo: cloneData(state.liturgyInfo),
        isSunday: state.isSunday,
        options: cloneData(state.options)
      };
      const savedMassData = cloneData(massData);
      state.selectedLocationCode = 'TW';
      state.currentLoc = 'ZH';
      state.targetLocationCode = 'KR';
      state.targetLang = 'KR';
      state.liturgyInfo = buildGeneratedLiturgyInfo(date(2026, 9, 1));
      state.isSunday = false;
      resetMassDataFrom(getStartupOrdinaryMassData());
      const taiwanDisplayData = createDailyReadingData();
      mergeSourceData(taiwanDisplayData, taiwanActualLoaded, 'ZH');
      applyDailyReadingsToMassData(taiwanDisplayData);
      render();
      const taiwanDisplayAudit = Object.fromEntries(['collect', 'reading1', 'gospel', 'prayer_offerings', 'communion', 'prayer_after'].map(baseId => {
        const section = document.querySelector(`.part-container[data-part-id="${baseId}"]`);
        const sourceLines = section ? Array.from(section.querySelectorAll('.line-zh .text-content')) : [];
        return [baseId, {
          sourceText: sourceLines.map(line => line.textContent).join('\n'),
          sourceButtons: sourceLines.reduce((count, line) => count + line.querySelectorAll('.btn-ai-trans').length, 0)
        }];
      }));
      resetMassDataFrom(savedMassData);
      state.selectedLocationCode = savedTaiwanDisplayState.selectedLocationCode;
      state.currentLoc = savedTaiwanDisplayState.currentLoc;
      state.targetLocationCode = savedTaiwanDisplayState.targetLocationCode;
      state.targetLang = savedTaiwanDisplayState.targetLang;
      state.liturgyInfo = savedTaiwanDisplayState.liturgyInfo;
      state.isSunday = savedTaiwanDisplayState.isSunday;
      state.options = savedTaiwanDisplayState.options;
      render();
      const taiwanTodayRequiredSections = ['entrance', 'collect', 'reading1', 'psalm', 'gospel_accl', 'gospel', 'prayer_offerings', 'communion', 'prayer_after'];
      const taiwanFutureBRecord = traditionalChineseStaticMassRecord(date(2027, 8, 29));
      const taiwanBRequiredSections = ['collect', 'reading1', 'psalm', 'reading2', 'gospel_accl', 'gospel', 'prayer_offerings', 'communion', 'prayer_after'];
      const taiwanBFailures = (taiwanStaticData.cycles.sundays.B || []).map(id => {
        const record = taiwanStaticData.records[id];
        const canonical = traditionalChineseStaticDate(record && record.canonicalDate);
        const source = [
          `Title: ${record && record.title || ''}`,
          `URL Source: ${record && record.sourceUrl || ''}`,
          'Markdown Content:',
          record && record.text || ''
        ].join('\n');
        const parsed = canonical && strictParseDailyMass('ZH', source, canonical, 'TW');
        const sections = Object.keys(parsed && parsed.data || {});
        const missing = taiwanBRequiredSections.filter(key => !sections.includes(key));
        return missing.length ? { id, date: record && record.canonicalDate, title: record && record.title, missing } : null;
      }).filter(Boolean);
      window.fetch = originalFetch;
      const liveAudit = { enabled: liveSourceCheck, results: {} };
      if (liveSourceCheck) {
        const blockedFetch = window.fetch;
        window.fetch = window.__ordoOriginalFetch;
        const liveDate = date(2026, 9, 1);
        const specs = [
          ['KR', 'KR', () => fetchStrictDailyMass('KR', liveDate, { locationCode: 'KR' })],
          ['VN', 'VN', () => fetchStrictDailyMass('VN', liveDate, { locationCode: 'VN' })],
          ['JP', 'JP', () => fetchStrictDailyMass('JP', liveDate, { locationCode: 'JP' })],
          ['LA', 'VA', () => fetchLatinDailyMass(liveDate)],
          ['EN-IE', 'IE', () => fetchStrictDailyMass('EN', liveDate, { locationCode: 'IE' })],
          ['EN-GB-ENG', 'GB-ENG', () => fetchStrictDailyMass('EN', liveDate, { locationCode: 'GB-ENG' })],
          ['EN-GB-WLS', 'GB-WLS', () => fetchStrictDailyMass('EN', liveDate, { locationCode: 'GB-WLS' })],
          ['EN-GB-SCT', 'GB-SCT', () => fetchStrictDailyMass('EN', liveDate, { locationCode: 'GB-SCT' })],
          ['EN-PH', 'PH', () => fetchStrictDailyMass('EN', liveDate, { locationCode: 'PH' })]
        ];
        const settled = await Promise.all(specs.map(async ([name, locationCode, load]) => {
          try {
            const parsed = await load();
            return [name, {
              parsed,
              audit: {
                locationCode,
                sections: Object.keys(parsed && parsed.data || {}),
                missing: missingCoreDailyReadingSections(parsed),
                title: parsed && parsed.title || ''
              }
            }];
          } catch (error) {
            return [name, {
              parsed: null,
              audit: { locationCode, sections: [], missing: coreDailyReadingSectionKeys.slice(), error: String(error && (error.stack || error)) }
            }];
          }
        }));
        const loadedByName = Object.fromEntries(settled);
        liveAudit.results = Object.fromEntries(Object.entries(loadedByName).map(([name, entry]) => [name, entry.audit]));
        liveAudit.psalmAlignments = {};
        const koreanPsalm = loadedByName.KR && loadedByName.KR.parsed && loadedByName.KR.parsed.data.psalm;
        const savedLivePair = { currentLoc: state.currentLoc, targetLang: state.targetLang };
        state.currentLoc = 'KR';
        state.targetLang = 'EN';
        ['EN-IE', 'EN-GB-ENG', 'EN-GB-WLS', 'EN-GB-SCT'].forEach(name => {
          const englishPsalm = loadedByName[name] && loadedByName[name].parsed && loadedByName[name].parsed.data.psalm;
          if (!koreanPsalm || !englishPsalm) {
            liveAudit.psalmAlignments[name] = { joined: false, error: 'Psalm source missing' };
            return;
          }
          const section = {
            cit_kr: koreanPsalm.cit_kr || '',
            cit_en: englishPsalm.cit_en || '',
            kr_lines: koreanPsalm.lines || [],
            en_lines: englishPsalm.lines || []
          };
          applyCachedVariantAlignments({ psalm: section }, liveDate);
          liveAudit.psalmAlignments[name] = {
            koreanCitation: section.cit_kr,
            englishCitation: section.cit_en,
            joined: Array.isArray(section.variantAlignment)
              && section.variantAlignment.some(group => group.kr === 0 && group.en === 0),
            alignment: section.variantAlignment || []
          };
        });
        state.currentLoc = savedLivePair.currentLoc;
        state.targetLang = savedLivePair.targetLang;
        window.fetch = blockedFetch;
      }
      return {
        version: APP_VERSION,
        versionLabel: document.getElementById('settings-version-label').textContent,
        footerText: document.getElementById('main-footer').textContent,
        initial,
        afterRightChange,
        manualEnabled,
        afterManual,
        jpUi,
        localizedSettings,
        unsupportedOptions: unsupported.filter(code => document.querySelector(`#set-loc option[value="${code}"]`)),
        unsupportedProfiles: unsupported.filter(code => liturgicalCalendarProfiles[code]),
        modules: Object.fromEntries(['IE', 'GB-ENG', 'GB-WLS', 'GB-SCT', 'PH'].map(code => [code, {
          ordinaryLength: modules[code].ordinary.length,
          independentFromUs: modules[code].ordinary !== modules.US.ordinary,
          properCalendarKeys: Object.keys(modules[code].romanMissalProperData.calendar || {}).length,
          properCatalogLength: (modules[code].romanMissalProperData.catalog || []).length,
          parser: modules[code].dailyReadings.parser,
          dailyUrl: modules[code].dailyReadings.url('20260829')
        }])),
        properDatasetsIndependent: new Set(['IE', 'GB-ENG', 'GB-WLS', 'GB-SCT', 'PH']
          .map(code => modules[code].romanMissalProperData)).size,
        activeProperIsIreland: activeProperWasIreland,
        properResolution: {
          irelandLocalSections: Object.values(irelandLocalProper && irelandLocalProper.data || {}).filter(Boolean).length,
          philippinesGeneralSections: Object.values(philippinesGeneralProper && philippinesGeneralProper.data || {}).filter(Boolean).length,
          philippinesSantoNinoSections: Object.values(philippinesSantoNinoProper && philippinesSantoNinoProper.data || {}).filter(Boolean).length
        },
        cbcpBoundary: {
          hasReading: Boolean(cbcpBoundaryParsed.data && cbcpBoundaryParsed.data.reading1),
          gospel: JSON.stringify(cbcpBoundaryParsed.data && cbcpBoundaryParsed.data.gospel || {})
        },
        universalisSharedParser,
        parserRegression: {
          sharedApplyError,
          unmarkedEnglishPsalm: unmarkedEnglishPsalm.lines,
          britishPsalmCitationAlignment,
          vietnameseAlternativeAcclamation: vietnameseAlternativeAcclamation.lines,
          japaneseDayWordIsMassLabel: strictIsDayMassLabel('わたしは一日中、笑い者にされる。'),
          japaneseDayMassLabelRecognized: strictIsDayMassLabel('主の降誕（日中）'),
          japaneseSections: Object.keys(japaneseDayWordParsed.data || {}),
          japaneseVerseSuffix: japaneseVerseSuffixParsed.data && japaneseVerseSuffixParsed.data.reading1,
          traditionalChineseSourceLabel: sourceChoiceLabelForLower('zh'),
          quotedSentenceSplit,
          quotedAlignedReading: quotedAlignedReadingFixture.map(line => line.text_en),
          latinPsalm: latinPsalmParsed.lines,
          chineseEntrance: JSON.stringify(traditionalChineseParsed.data && traditionalChineseParsed.data.entrance || {}),
          chinesePsalm: traditionalChineseParsed.data && traditionalChineseParsed.data.psalm && traditionalChineseParsed.data.psalm.lines,
          chineseGospel: traditionalChineseParsed.data && traditionalChineseParsed.data.gospel
        },
        chineseWarning,
        sourceChoiceAi,
        alignedReadingFixture: {
          rows: alignedReadingFixture.length,
          korean: alignedReadingFixture.map(line => line.text_kr),
          chinese: alignedReadingFixture.map(line => line.text_zh),
          english: alignedReadingFixture.map(line => line.text_en),
          vietnamese: alignedReadingFixture.map(line => line.text_vn),
          japanese: alignedReadingFixture.map(line => line.text_jp),
          latin: alignedReadingFixture.map(line => line.text_la)
        },
        taiwanStatic: {
          pdfCount: taiwanStaticData && taiwanStaticData.coverage.pdfCount,
          supplementalProperPdfCount: taiwanStaticData && taiwanStaticData.coverage.supplementalProperPdfCount,
          sundayCycles: taiwanStaticData && taiwanStaticData.coverage.sundayCycles,
          weekdayCycles: taiwanStaticData && taiwanStaticData.coverage.weekdayCycles,
          proper31Url: taiwanStaticData && taiwanStaticData.records['sunday-b-20241103'].properSourceUrl,
          proper32Url: taiwanStaticData && taiwanStaticData.records['sunday-b-20241110'].properSourceUrl,
          title: taiwanManifestEntry && taiwanManifestEntry.title,
          request: taiwanProxyRequest,
          source: taiwanProxySource,
          lineCount: taiwanStaticLines.length,
          markerLines: taiwanStaticLines.filter(line => /(?:讀經|答唱|福音)/u.test(line)).map(line => ({ line, marker: strictIdentifySection(line, 'ZH') })),
          variantLines: taiwanStaticLines.map(line => ({ line, kind: strictVariantKind(line) })).filter(item => item.kind),
          rawSections: Object.fromEntries(Object.entries(taiwanStaticRaw).map(([key, value]) => [key, value.lines.length])),
          sections: Object.keys(taiwanStaticParsed.data || {}),
          actualTodaySections: Object.keys(taiwanActualLoaded.data || {}),
          actualTodayMissing: taiwanTodayRequiredSections.filter(key => !sourceSectionHasContent(taiwanActualLoaded.data && taiwanActualLoaded.data[key])),
          displayAudit: taiwanDisplayAudit,
          futureBTitle: taiwanFutureBRecord && taiwanFutureBRecord.title,
          bCycleFailures: taiwanBFailures
        },
        liveAudit,
        philippines: {
          fallbackUrl: modules.PH.dailyReadings.fallbackUrl('20260829'),
          hasUniversalisProperParser: Boolean(modules.PH.dailyPropers),
          santoNinoSource: modules.PH.properSources.santoNino,
          santoNino: modules.PH.dynamicCalendar(date(2026, 1, 18), {})[0],
          careOfCreation: modules.PH.dynamicCalendar(date(2026, 9, 6), {})[0],
          april2: getCountryCalendarOverride(date(2026, 4, 2), 'PH'),
          october21: getCountryCalendarOverride(date(2026, 10, 21), 'PH'),
          creationDay: getCountryCalendarOverride(date(2026, 9, 6), 'PH')
        },
        gps: {
          manila: gpsLocationForCoordinates(14.5995, 120.9842),
          taipeiUnsupported: gpsLocationForCoordinates(25.033, 121.5654),
          parisUnsupported: gpsLocationForCoordinates(48.8566, 2.3522)
        },
        church: {
          total: globalThis.churchLocalDetailRecords.length,
          hasEngland: globalThis.churchLocalDetailRecords.some(entry => entry.country === 'GB-ENG'),
          hasScotland: globalThis.churchLocalDetailRecords.some(entry => entry.country === 'GB-SCT'),
          hasPhilippines: globalThis.churchLocalDetailRecords.some(entry => entry.country === 'PH')
        }
      };
    }, liveSources);

    result.startupConsent = startupConsent;
    result.locationSelectionAliases = await page.evaluate(() => ({
      wales: representativeLocationSelectionCode('GB-WLS'),
      northernIreland: representativeLocationSelectionCode('GB-NIR')
    }));

    if (process.env.ORDO_SCREENSHOT === '1') {
      await page.evaluate(() => {
        state.uiLang = 'KR';
        syncLocalizedChromeAndSettings();
        openSettings();
        const targetSelect = document.getElementById('set-target-lang');
        targetSelect.size = targetSelect.options.length;
        targetSelect.style.maxWidth = '100%';
        targetSelect.style.flexBasis = '100%';
        targetSelect.closest('.setting-row').style.alignItems = 'flex-start';
      });
      await page.locator('#settings-modal .settings-content').screenshot({
        path: path.join(root, 'tmp', 'v27-4-regional-language-selector.png')
      });
      await page.evaluate(() => {
        closeSettings();
        const targetSelect = document.getElementById('set-target-lang');
        targetSelect.removeAttribute('size');
        targetSelect.style.maxWidth = '';
        targetSelect.style.flexBasis = '';
        targetSelect.closest('.setting-row').style.alignItems = '';
      });
    }

    await page.evaluate(() => {
      document.getElementById('set-gps').checked = true;
      updateSettings();
      document.getElementById('set-loc').value = 'TW';
      selectManualLocation();
      document.getElementById('set-target-lang').value = 'KR';
      updateSettings();
    });
    await page.waitForFunction(() => (
      state.selectedLocationCode === 'TW'
      && state.currentLoc === 'ZH'
      && !state.dailyReadingsLoading
      && state.dailyReadingLanguageStatus
      && state.dailyReadingLanguageStatus.ZH === 'done'
    ), null, { timeout: 30000 });
    result.taiwanEndToEnd = await page.evaluate(() => ({
      location: state.selectedLocationCode,
      originalLanguage: state.currentLoc,
      translationLanguage: state.targetLang,
      languageStatus: Object.assign({}, state.dailyReadingLanguageStatus || {}),
      liturgyName: state.liturgyInfo && state.liturgyInfo.names && state.liturgyInfo.names.ZH,
      sections: Object.fromEntries(['entrance', 'collect', 'reading1', 'psalm', 'gospel_accl', 'gospel', 'prayer_offerings', 'communion', 'prayer_after'].map(baseId => {
        const section = document.querySelector(`.part-container[data-part-id="${baseId}"]`);
        const sourceLines = section ? Array.from(section.querySelectorAll('.line-zh')) : [];
        return [baseId, {
          originalText: sourceLines
            .filter(line => !line.classList.contains('ai-pending'))
            .map(line => (line.querySelector('.text-content') || {}).textContent || '')
            .filter(Boolean)
            .join('\n'),
          aiButtons: sourceLines.reduce((count, line) => count + line.querySelectorAll('.btn-ai-trans').length, 0),
          citation: section ? Array.from(section.querySelectorAll('.citation')).map(node => node.textContent).join(' | ') : ''
        }];
      }))
    }));
    await page.evaluate(() => {
      document.getElementById('set-loc').value = 'KR';
      selectManualLocation();
      document.getElementById('set-target-lang').value = 'TW';
      updateSettings();
    });
    await page.waitForFunction(() => (
      state.selectedLocationCode === 'KR'
      && state.currentLoc === 'KR'
      && state.targetLocationCode === 'TW'
      && state.targetLang === 'ZH'
      && !state.dailyReadingsLoading
      && state.dailyReadingLanguageStatus
      && state.dailyReadingLanguageStatus.ZH === 'done'
    ), null, { timeout: 30000 });
    const taiwanTargetSourceChoices = await page.evaluate(() => Object.fromEntries(
      ['entrance', 'collect', 'prayer_offerings', 'communion', 'prayer_after'].map(baseId => {
        const section = document.querySelector(`.part-container[data-part-id="${baseId}"]`);
        const select = section && section.querySelector('.select-inline');
        return [baseId, select ? Array.from(select.options).map(option => ({ value: option.value, text: option.textContent })) : []];
      })
    ));
    const taiwanTargetVariants = await page.evaluate(() => Object.fromEntries(
      ['entrance', 'collect', 'prayer_offerings', 'communion', 'prayer_after'].map(baseId => {
        const item = massData.find(entry => getBaseId(entry.id) === baseId);
        return [baseId, {
          selected: state.options[baseId],
          variants: Object.fromEntries(Object.entries(item && item.variants || {}).map(([key, variant]) => [key, {
            label: variant.label,
            sources: variant.__dailySourceIndexes,
            kind: variant.__dailyOptionKind,
            hasZh: (variant.lines || []).some(line => cleanNodeText(line.text_zh)
              && !isPrayerOpenerText(line.text_zh) && !isPrayerAmenText(line.text_zh)),
            hasKr: (variant.lines || []).some(line => cleanNodeText(line.text_kr)
              && !isPrayerOpenerText(line.text_kr) && !isPrayerAmenText(line.text_kr))
          }]))
        }];
      })
    ));
    await page.evaluate(() => {
      ['entrance', 'collect', 'prayer_offerings', 'communion', 'prayer_after'].forEach(baseId => {
        const item = massData.find(entry => getBaseId(entry.id) === baseId);
        const targetEntry = Object.entries(item && item.variants || {}).find(([, variant]) => (
          Number.isInteger(variant && variant.__dailySourceIndexes && variant.__dailySourceIndexes.zh)
        ));
        if (targetEntry) state.options[baseId] = targetEntry[0];
      });
      render();
    });
    if (process.env.ORDO_SCREENSHOT === '1') {
      await page.evaluate(() => {
        const sourceModal = document.getElementById('vn-source-modal');
        if (sourceModal) sourceModal.classList.remove('is-visible');
      });
      const screenshotDir = path.join(root, 'tmp');
      fs.mkdirSync(screenshotDir, { recursive: true });
      await page.screenshot({
        path: path.join(screenshotDir, 'v27-4-taiwan-traditional-chinese.png'),
        fullPage: true
      });
      await page.locator('.part-container[data-part-id="collect"]').screenshot({
        path: path.join(screenshotDir, 'v27-4-taiwan-collect.png')
      });
      await page.locator('.part-container[data-part-id="reading1"]').screenshot({
        path: path.join(screenshotDir, 'v27-4-taiwan-reading1.png')
      });
    }
    result.taiwanTargetEndToEnd = await page.evaluate(({ sourceChoices, variants }) => ({
      location: state.selectedLocationCode,
      originalLanguage: state.currentLoc,
      targetLocation: state.targetLocationCode,
      translationLanguage: state.targetLang,
      languageStatus: Object.assign({}, state.dailyReadingLanguageStatus || {}),
      sourceChoices,
      variants,
      sections: Object.fromEntries(['entrance', 'collect', 'reading1', 'psalm', 'gospel_accl', 'gospel', 'prayer_offerings', 'communion', 'prayer_after'].map(baseId => {
        const section = document.querySelector(`.part-container[data-part-id="${baseId}"]`);
        const sourceLines = section ? Array.from(section.querySelectorAll('.line-zh')) : [];
        return [baseId, {
          originalText: sourceLines
            .filter(line => !line.classList.contains('ai-pending'))
            .map(line => (line.querySelector('.text-content') || {}).textContent || '')
            .filter(Boolean)
            .join('\n'),
          aiButtons: sourceLines.reduce((count, line) => count + line.querySelectorAll('.btn-ai-trans').length, 0)
        }];
      }))
    }), { sourceChoices: taiwanTargetSourceChoices, variants: taiwanTargetVariants });

    assert(/^V27\.4-/.test(result.version), `Unexpected runtime version: ${result.version}`);
    assert(result.versionLabel === 'V27.4', `Settings version label is wrong: ${result.versionLabel}`);
    assert(!/V27\.4/.test(result.footerText), 'Version must not be displayed in the footer.');
    assert(JSON.stringify(result.startupConsent.rows.map(row => row.lang)) === JSON.stringify(['lang-EN', 'lang-LA', 'lang-KR', 'lang-JP', 'lang-ZH', 'lang-VN'])
      && result.startupConsent.rows.length === 6
      && result.startupConsent.rows.every(row => row.label && row.text && row.display === 'grid' && row.columns !== 'none')
      && new Set(result.startupConsent.rows.map(row => row.fontFamily)).size === 1
      && result.startupConsent.rows.every(row => /sans-serif/i.test(row.fontFamily) && !/Times New Roman/i.test(row.fontFamily))
      && !result.startupConsent.hasLegacyCards
      && result.startupConsent.fitsWidth,
    `Startup consent warnings are not six ordered language rows: ${JSON.stringify(result.startupConsent)}`);
    assert(result.startupConsent.englishRegion.location === 'PH'
      && result.startupConsent.englishRegion.accept === 'Agree'
      && result.startupConsent.englishRegion.decline === 'Exit without agreeing'
      && !/[\/]/.test(`${result.startupConsent.englishRegion.accept}${result.startupConsent.englishRegion.decline}`)
      && result.startupConsent.taiwanRegion.location === 'TW'
      && result.startupConsent.taiwanRegion.accept === '同意'
      && result.startupConsent.taiwanRegion.decline === '不同意並離開',
    `Startup consent buttons did not follow the GPS region language: ${JSON.stringify(result.startupConsent)}`);
    assert(JSON.stringify(result.startupConsent.regionalButtons) === JSON.stringify({
      PH: { accept: 'Agree', decline: 'Exit without agreeing' },
      VA: { accept: 'Assentior', decline: 'Non assentior et exeo' },
      KR: { accept: '동의합니다', decline: '동의하지 않고 종료' },
      JP: { accept: '同意する', decline: '同意せず終了' },
      TW: { accept: '同意', decline: '不同意並離開' },
      VN: { accept: 'Đồng ý', decline: 'Không đồng ý và thoát' }
    }), `Not every GPS-region button pair uses one local language: ${JSON.stringify(result.startupConsent.regionalButtons)}`);
    assert(result.initial.useGps && result.initial.code === 'PH' && result.initial.left === 'EN', `GPS did not select Philippines: ${JSON.stringify(result.initial)}`);
    assert(result.initial.disabled && JSON.stringify(result.initial.visibleGpsOptions) === '["PH"]', `GPS location control is not locked to one country: ${JSON.stringify(result.initial)}`);
    assert(result.afterRightChange.useGps && result.afterRightChange.code === 'PH' && result.afterRightChange.target === 'JP', `Right language changed GPS state: ${JSON.stringify(result.afterRightChange)}`);
    assert(result.manualEnabled && !result.afterManual.useGps && result.afterManual.code === 'IE', `Manual selection did not unlock correctly: ${JSON.stringify(result.afterManual)}`);
    assert(result.locationSelectionAliases.wales === 'GB-ENG' && result.locationSelectionAliases.northernIreland === 'IE',
      `GPS country aliases did not map to their bishops-conference selections: ${JSON.stringify(result.locationSelectionAliases)}`);
    assert(result.jpUi.settingsTitle === '設定' && result.jpUi.consentTitle === 'ご利用前のご案内', `Japanese beta UI warnings are missing: ${JSON.stringify(result.jpUi)}`);
    assert(/Beta/.test(result.jpUi.targetLabel) && /Beta/.test(result.jpUi.uiLabel), `Japanese beta labels are missing: ${JSON.stringify(result.jpUi)}`);
    const expectedLocationOrder = ['VA', 'US', 'GB-ENG', 'GB-SCT', 'IE', 'AU', 'NZ', 'KR', 'JP', 'TW', 'VN', 'PH'];
    assert(JSON.stringify(result.localizedSettings.KR.left.order) === JSON.stringify(expectedLocationOrder)
      && result.localizedSettings.KR.left.labels.VA === '보편로마전례 | Lingua Latina'
      && result.localizedSettings.KR.left.labels.US === '미국(USCCB) | English'
      && result.localizedSettings.KR.left.labels['GB-ENG'] === '잉글랜드·웨일즈(CBCEW) | English (Beta)'
      && result.localizedSettings.KR.left.labels.IE === '아일랜드·북아일랜드(ICBC) | English (Beta)'
      && result.localizedSettings.KR.left.labels.JP === '일본(CBJC) | 日本語 (Beta)'
      && result.localizedSettings.KR.left.labels.TW === '대만(CRCB) | 繁體中文 (Beta)',
    `Korean regional language selection is wrong: ${JSON.stringify(result.localizedSettings.KR)}`);
    assert(JSON.stringify(Object.values(result.localizedSettings.KR.left.regions)) === JSON.stringify([
      '영미권', '서유럽권', '동유럽권', '동북아시아', '동남아시아', '서아시아', '중남미권', '아프리카'
    ]), `Korean region order is wrong: ${JSON.stringify(result.localizedSettings.KR.left.regions)}`);
    assert(result.localizedSettings.EN.left.labels.US === 'United States(USCCB) | English'
      && result.localizedSettings.EN.left.labels['GB-ENG'] === 'England & Wales(CBCEW) | English (Beta)'
      && result.localizedSettings.EN.left.labels.IE === 'Ireland & Northern Ireland(ICBC) | English (Beta)'
      && result.localizedSettings.EN.left.regions.NORTHEAST_ASIA === 'Northeast Asia',
    `English regional language selection is wrong: ${JSON.stringify(result.localizedSettings.EN)}`);
    assert(new Set(Object.values(result.localizedSettings).map(entry => entry.left.labels.TW)).size === 5
      && new Set(Object.values(result.localizedSettings).map(entry => entry.left.regions.NORTHEAST_ASIA)).size === 5,
    `Country and region labels did not follow the UI language: ${JSON.stringify(result.localizedSettings)}`);
    Object.entries(result.localizedSettings).forEach(([ui, entry]) => {
      assert(JSON.stringify(entry.left.labels) === JSON.stringify(entry.target.labels)
        && JSON.stringify(entry.left.regions) === JSON.stringify(entry.target.regions),
        `${ui} left/right settings labels are inconsistent: ${JSON.stringify(entry)}`);
    });
    assert(!result.unsupportedOptions.length && !result.unsupportedProfiles.length, `Unsupported country remnants: ${JSON.stringify(result)}`);
    Object.entries(result.modules).forEach(([code, module]) => {
      assert(module.ordinaryLength === 32 && module.independentFromUs, `${code} does not own a complete independent ordinary: ${JSON.stringify(module)}`);
      assert(module.properCalendarKeys === 201 && module.properCatalogLength === 242, `${code} does not own the complete Roman Missal proper dataset: ${JSON.stringify(module)}`);
      assert(module.parser === 'strict-english-daily-mass', `${code} daily parser metadata is missing.`);
    });
    assert(result.properDatasetsIndependent === 4, `Conference proper datasets are aliased: ${result.properDatasetsIndependent}`);
    assert(result.activeProperIsIreland, 'The active English jurisdiction did not select its own proper dataset before the country switch.');
    assert(result.properResolution.irelandLocalSections >= 5, `Ireland local/Common proper composition failed: ${JSON.stringify(result.properResolution)}`);
    assert(result.properResolution.philippinesGeneralSections >= 5, `Philippines general Roman Missal proper resolution failed: ${JSON.stringify(result.properResolution)}`);
    assert(result.properResolution.philippinesSantoNinoSections === 5, `Philippines national proper resolution failed: ${JSON.stringify(result.properResolution)}`);
    assert(result.cbcpBoundary.hasReading, 'CBCP regression fixture did not parse the readings.');
    assert(!/Saint of the Day|St\. Example|biography/i.test(result.cbcpBoundary.gospel), `CBCP Saint of the Day leaked into the Gospel: ${result.cbcpBoundary.gospel}`);
    Object.entries(result.universalisSharedParser).forEach(([code, audit]) => {
      assert(audit.missing.length === 0, `${code} lost Universalis reading sections: ${JSON.stringify(audit)}`);
      assert(audit.readingLines[0].role === 'summary'
        && audit.readingLines[1].role === 'intro'
        && audit.readingLines[2].role === 'body'
        && /The Spirit reaches even the depths of God The Spirit reaches the depths of everything, even the depths of God\./.test(audit.readingLines[0].text)
        && /^After all,/.test(audit.readingLines[2].text),
      `${code} did not preserve summary-intro-body order: ${JSON.stringify(audit.readingLines)}`);
      assert(audit.gospelLines[0].role === 'summary'
        && audit.gospelLines[1].role === 'intro'
        && audit.gospelLines[2].role === 'body',
      `${code} Gospel did not preserve summary-intro-body order: ${JSON.stringify(audit.gospelLines)}`);
    });
    assert(!result.parserRegression.sharedApplyError, `Shared multilingual reading application crashed: ${result.parserRegression.sharedApplyError}`);
    assert(result.parserRegression.unmarkedEnglishPsalm.length === 3
      && result.parserRegression.unmarkedEnglishPsalm[0].sp === 'R.'
      && result.parserRegression.unmarkedEnglishPsalm.slice(1).every(line => line.sp === 'Versicle' && /- R\.$/.test(line.text)),
    `Unmarked repeated English psalm response was not split: ${JSON.stringify(result.parserRegression.unmarkedEnglishPsalm)}`);
    assert(!result.parserRegression.britishPsalmCitationAlignment.different
      && result.parserRegression.britishPsalmCitationAlignment.koreanStarts.some(start => result.parserRegression.britishPsalmCitationAlignment.englishStarts.includes(start))
      && result.parserRegression.britishPsalmCitationAlignment.koreanStarts.some(start => result.parserRegression.britishPsalmCitationAlignment.reversedEnglishStarts.includes(start))
      && result.parserRegression.britishPsalmCitationAlignment.alignment.length === 1
      && result.parserRegression.britishPsalmCitationAlignment.alignment[0].kr === 0
      && result.parserRegression.britishPsalmCitationAlignment.alignment[0].en === 0,
    `Matching Korean/UK Psalm citations were split into separate choices: ${JSON.stringify(result.parserRegression.britishPsalmCitationAlignment)}`);
    assert(result.parserRegression.vietnameseAlternativeAcclamation.length === 7
      && result.parserRegression.vietnameseAlternativeAcclamation[4].sp === 'Mọi người'
      && /^Alleluia/i.test(result.parserRegression.vietnameseAlternativeAcclamation[4].text)
      && /^Alleluia/i.test(result.parserRegression.vietnameseAlternativeAcclamation[6].text),
    `Vietnamese alternative acclamation lost its responses: ${JSON.stringify(result.parserRegression.vietnameseAlternativeAcclamation)}`);
    assert(!result.parserRegression.japaneseDayWordIsMassLabel, 'Japanese 一日中 text was mistaken for a daytime Mass label.');
    assert(result.parserRegression.japaneseDayMassLabelRecognized, 'A real Japanese daytime Mass label was not recognized.');
    assert(['reading1', 'psalm', 'reading2', 'gospel_accl', 'gospel'].every(key => result.parserRegression.japaneseSections.includes(key)), `Japanese day-word fixture lost sections: ${JSON.stringify(result.parserRegression.japaneseSections)}`);
    assert(/①コリント2・10b-16/u.test(result.parserRegression.japaneseVerseSuffix.cit_jp || '')
      && !/(^|\n)\s*\(?2・10b\)?(?:\s|$)/u.test(result.parserRegression.japaneseVerseSuffix.text || ''),
    `Japanese verse suffix leaked from the citation into the body: ${JSON.stringify(result.parserRegression.japaneseVerseSuffix)}`);
    assert(result.parserRegression.traditionalChineseSourceLabel.zh === '繁體中文原文'
      && result.parserRegression.traditionalChineseSourceLabel.en === 'Traditional Chinese source',
    `Traditional Chinese source-choice label is wrong: ${JSON.stringify(result.parserRegression.traditionalChineseSourceLabel)}`);
    assert(result.parserRegression.quotedSentenceSplit.length === 3
      && result.parserRegression.quotedSentenceSplit[0].endsWith('you."')
      && result.parserRegression.quotedSentenceSplit[1].endsWith("here.'")
      && result.parserRegression.quotedSentenceSplit.every((line, index) => index === 0 || !/^["'’”」』]/u.test(line)),
    `Closing quotation marks were split into the following sentence: ${JSON.stringify(result.parserRegression.quotedSentenceSplit)}`);
    assert(result.parserRegression.quotedAlignedReading.length === 2
      && result.parserRegression.quotedAlignedReading[0].includes('you."')
      && !/^["'’”」』]/u.test(result.parserRegression.quotedAlignedReading[1]),
    `Closing quotation marks moved to the following aligned row: ${JSON.stringify(result.parserRegression.quotedAlignedReading)}`);
    assert(result.parserRegression.latinPsalm.length === 3 && result.parserRegression.latinPsalm[0].sp === '℟' && /Sitívit/.test(result.parserRegression.latinPsalm[0].text), `Latin psalm response was not preserved: ${JSON.stringify(result.parserRegression.latinPsalm)}`);
    assert(!/光榮頌|天主在天受光榮/u.test(result.parserRegression.chineseEntrance), `Chinese Gloria leaked into the Entrance Antiphon: ${result.parserRegression.chineseEntrance}`);
    assert(result.parserRegression.chinesePsalm.length === 3 && result.parserRegression.chinesePsalm.filter(line => line.sp === '領').length === 2, `Chinese psalm stanzas were not joined: ${JSON.stringify(result.parserRegression.chinesePsalm)}`);
    assert(result.parserRegression.chineseGospel.lines[0].role === 'summary' && result.parserRegression.chineseGospel.lines[0].text === '誰願意跟隨我，就該捨棄自己。', `Chinese Gospel summary was not preserved: ${JSON.stringify(result.parserRegression.chineseGospel)}`);
    assert(!/信經|我信唯一/u.test(JSON.stringify(result.parserRegression.chineseGospel)), `Chinese Creed leaked into the Gospel: ${JSON.stringify(result.parserRegression.chineseGospel)}`);
    assert(result.chineseWarning.lines === 2 && /한국어\s*:/.test(result.chineseWarning.text) && /中文\s*:/.test(result.chineseWarning.text), `Chinese paired warning is missing: ${JSON.stringify(result.chineseWarning)}`);
    assert(result.chineseWarning.borderStyle === 'none'
      && result.chineseWarning.backgroundColor === 'rgba(0, 0, 0, 0)'
      && result.chineseWarning.boxShadow === 'none'
      && !result.chineseWarning.insideCard
      && result.chineseWarning.rows.every(row => row.display === 'grid' && row.label && row.text),
    `Auxiliary warning is still boxed or not aligned: ${JSON.stringify(result.chineseWarning)}`);
    assert(!result.sourceChoiceAi.suppressed && /Lạy Chúa/.test(result.sourceChoiceAi.source) && /btn-ai-trans/.test(result.sourceChoiceAi.button), `Prayer source choice did not expose the Korean AI button: ${JSON.stringify(result.sourceChoiceAi)}`);
    assert(result.alignedReadingFixture.rows === 3
      && ['korean', 'chinese', 'english', 'vietnamese', 'japanese', 'latin'].every(lang => (
        result.alignedReadingFixture[lang].length === 3 && result.alignedReadingFixture[lang].every(Boolean)
      )), `Reading paragraphs were not aligned to Korean rows: ${JSON.stringify(result.alignedReadingFixture)}`);
    assert(result.alignedReadingFixture.chinese.join('') === '這是第一個自然語句，接著說明第二個重點；最後完成第三個段落。', `Chinese reading punctuation was damaged: ${JSON.stringify(result.alignedReadingFixture)}`);
    assert(result.alignedReadingFixture.vietnamese.join(' ') === 'Đây là câu thứ nhất. Tiếp theo là ý thứ hai; sau cùng là đoạn thứ ba.', `Vietnamese reading boundaries were damaged: ${JSON.stringify(result.alignedReadingFixture)}`);
    assert(result.alignedReadingFixture.japanese.join('') === 'これは第一の文です。続いて第二の要点です。最後に第三の段落です。', `Japanese reading boundaries were damaged: ${JSON.stringify(result.alignedReadingFixture)}`);
    assert(result.taiwanStatic.pdfCount === 763
      && result.taiwanStatic.supplementalProperPdfCount === 2
      && result.taiwanStatic.sundayCycles.A === 54
      && result.taiwanStatic.sundayCycles.B === 52
      && result.taiwanStatic.sundayCycles.C === 53
      && result.taiwanStatic.weekdayCycles.I === 331
      && result.taiwanStatic.weekdayCycles.II === 313
      && /15ISYse9Cu257WrlcWS49NgszhHBpp6Lj/.test(result.taiwanStatic.proper31Url)
      && /15WOOKZ0qCAPIExxc9tWrVCIctCWgv5IE/.test(result.taiwanStatic.proper32Url),
    `Taiwan static cycle coverage is wrong: ${JSON.stringify(result.taiwanStatic)}`);
    assert(!result.taiwanStatic.request
      && /常年期第廿二主日/.test(result.taiwanStatic.title)
      && /讀經一/.test(result.taiwanStatic.source)
      && ['reading1', 'psalm', 'reading2', 'gospel_accl', 'gospel'].every(key => result.taiwanStatic.sections.includes(key))
      && result.taiwanStatic.actualTodayMissing.length === 0
      && Object.values(result.taiwanStatic.displayAudit).every(section => section.sourceText && section.sourceButtons === 0)
      && /常年期第廿二主日/.test(result.taiwanStatic.futureBTitle)
      && result.taiwanStatic.bCycleFailures.length === 0,
    `Taiwan static daily Mass selection/parsing failed: ${JSON.stringify(result.taiwanStatic)}`);
    if (result.liveAudit.enabled) {
      Object.entries(result.liveAudit.results).forEach(([source, audit]) => {
        assert(!audit.error && audit.missing.length === 0, `${source} live daily source is incomplete: ${JSON.stringify(audit)}`);
      });
      Object.entries(result.liveAudit.psalmAlignments).forEach(([source, audit]) => {
        assert(!audit.error && audit.joined, `${source} live Psalm citation was split into another choice: ${JSON.stringify(audit)}`);
      });
    }
    assert(/cbcp\.ph\/readings\/august-29-2026/.test(result.modules.PH.dailyUrl), `CBCP daily URL is wrong: ${result.modules.PH.dailyUrl}`);
    assert(/bible\.usccb\.org\/bible\/readings\/082926\.cfm/.test(result.philippines.fallbackUrl), `Philippines approved-text fallback is wrong: ${result.philippines.fallbackUrl}`);
    assert(!result.philippines.hasUniversalisProperParser, 'Universalis readings-only page must not be treated as a Philippines proper parser.');
    assert(/feast-of-the-santo-nino\.pdf/i.test(result.philippines.santoNinoSource), `Santo Niño source metadata is missing: ${result.philippines.santoNinoSource}`);
    assert(Object.values(result.philippines.santoNino.data || {}).filter(Boolean).length === 5, 'The Philippines Santo Niño proper is incomplete.');
    assert(Object.values(result.philippines.careOfCreation.data || {}).filter(Boolean).length === 5, 'The Philippines Care of Creation proper is incomplete.');
    assert(!result.philippines.april2 && /Pedro Calungsod/i.test(JSON.stringify(result.philippines.october21)), 'Philippines Pedro Calungsod calendar date is wrong.');
    assert(/Creation Day/i.test(JSON.stringify(result.philippines.creationDay)), 'CBCP Creation Day is missing.');
    assert(result.gps.manila === 'PH' && result.gps.taipeiUnsupported === 'TW' && result.gps.parisUnsupported === 'INTL', `GPS country resolution is wrong: ${JSON.stringify(result.gps)}`);
    assert(result.church.hasEngland && result.church.hasScotland && result.church.hasPhilippines, `Country church rebuild is incomplete: ${JSON.stringify(result.church)}`);
    assert(result.taiwanEndToEnd.location === 'TW'
      && result.taiwanEndToEnd.originalLanguage === 'ZH'
      && result.taiwanEndToEnd.languageStatus.ZH === 'done'
      && Object.values(result.taiwanEndToEnd.sections).every(section => section.originalText && section.aiButtons === 0),
    `Taiwan settings-to-DOM flow did not render the original readings and propers: ${JSON.stringify(result.taiwanEndToEnd)}`);
    assert(result.taiwanTargetEndToEnd.location === 'KR'
      && result.taiwanTargetEndToEnd.targetLocation === 'TW'
      && result.taiwanTargetEndToEnd.translationLanguage === 'ZH'
      && result.taiwanTargetEndToEnd.languageStatus.ZH === 'done'
      && Object.values(result.taiwanTargetEndToEnd.sourceChoices).every(options => (
        options.some(option => /중국어 번체 (?:원문|입당송|영성체송)/u.test(option.text))
      ))
      && Object.values(result.taiwanTargetEndToEnd.sections).every(section => section.originalText && section.aiButtons === 0),
    `Taiwan target-language flow did not render official Traditional Chinese text: ${JSON.stringify(result.taiwanTargetEndToEnd)}`);
    assert(pageErrors.length === 0, `Page errors:\n${pageErrors.join('\n')}`);
    console.log(JSON.stringify(result, null, 2));
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
