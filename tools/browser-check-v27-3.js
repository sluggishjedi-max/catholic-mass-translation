const fs = require('fs');
const http = require('http');
const path = require('path');
const { chromium } = require('@playwright/test');

const root = path.resolve(__dirname, '..');

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
    const route = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
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
    window.fetch = async (url, options) => {
      if (String(url).startsWith(location.origin)) return originalFetch(url, options);
      throw new Error('Remote fetch disabled by V27.3 browser check');
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
    await page.goto(`http://127.0.0.1:${server.address().port}/index.html`, {
      waitUntil: 'domcontentloaded',
      timeout: 90000
    });
    await page.locator('#consent-accept').click({ timeout: 15000 }).catch(() => {});
    await page.waitForFunction(() => typeof render === 'function' && typeof updateSettings === 'function', null, {
      timeout: 90000
    });
    await page.waitForFunction(() => state.selectedLocationCode === 'PH' && document.querySelector('#set-loc').disabled, null, {
      timeout: 15000
    });

    const result = await page.evaluate(async () => {
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
        backgroundColor: getComputedStyle(warningElement).backgroundColor
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
      return {
        version: APP_VERSION,
        versionLabel: document.getElementById('settings-version-label').textContent,
        footerText: document.getElementById('main-footer').textContent,
        initial,
        afterRightChange,
        manualEnabled,
        afterManual,
        jpUi,
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
        parserRegression: {
          sharedApplyError,
          japaneseDayWordIsMassLabel: strictIsDayMassLabel('わたしは一日中、笑い者にされる。'),
          japaneseDayMassLabelRecognized: strictIsDayMassLabel('主の降誕（日中）'),
          japaneseSections: Object.keys(japaneseDayWordParsed.data || {}),
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
          futureBTitle: taiwanFutureBRecord && taiwanFutureBRecord.title,
          bCycleFailures: taiwanBFailures
        },
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
    });

    assert(/^V27\.3-/.test(result.version), `Unexpected runtime version: ${result.version}`);
    assert(result.versionLabel === 'V27.3', `Settings version label is wrong: ${result.versionLabel}`);
    assert(!/V27\.3/.test(result.footerText), 'Version must not be displayed in the footer.');
    assert(result.initial.useGps && result.initial.code === 'PH' && result.initial.left === 'EN', `GPS did not select Philippines: ${JSON.stringify(result.initial)}`);
    assert(result.initial.disabled && JSON.stringify(result.initial.visibleGpsOptions) === '["PH"]', `GPS location control is not locked to one country: ${JSON.stringify(result.initial)}`);
    assert(result.afterRightChange.useGps && result.afterRightChange.code === 'PH' && result.afterRightChange.target === 'JP', `Right language changed GPS state: ${JSON.stringify(result.afterRightChange)}`);
    assert(result.manualEnabled && !result.afterManual.useGps && result.afterManual.code === 'IE', `Manual selection did not unlock correctly: ${JSON.stringify(result.afterManual)}`);
    assert(result.jpUi.settingsTitle === '設定' && result.jpUi.consentTitle === 'ご利用前のご案内', `Japanese beta UI warnings are missing: ${JSON.stringify(result.jpUi)}`);
    assert(/Beta/.test(result.jpUi.targetLabel) && /Beta/.test(result.jpUi.uiLabel), `Japanese beta labels are missing: ${JSON.stringify(result.jpUi)}`);
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
    assert(!result.parserRegression.sharedApplyError, `Shared multilingual reading application crashed: ${result.parserRegression.sharedApplyError}`);
    assert(!result.parserRegression.japaneseDayWordIsMassLabel, 'Japanese 一日中 text was mistaken for a daytime Mass label.');
    assert(result.parserRegression.japaneseDayMassLabelRecognized, 'A real Japanese daytime Mass label was not recognized.');
    assert(['reading1', 'psalm', 'reading2', 'gospel_accl', 'gospel'].every(key => result.parserRegression.japaneseSections.includes(key)), `Japanese day-word fixture lost sections: ${JSON.stringify(result.parserRegression.japaneseSections)}`);
    assert(result.parserRegression.latinPsalm.length === 3 && result.parserRegression.latinPsalm[0].sp === '℟' && /Sitívit/.test(result.parserRegression.latinPsalm[0].text), `Latin psalm response was not preserved: ${JSON.stringify(result.parserRegression.latinPsalm)}`);
    assert(!/光榮頌|天主在天受光榮/u.test(result.parserRegression.chineseEntrance), `Chinese Gloria leaked into the Entrance Antiphon: ${result.parserRegression.chineseEntrance}`);
    assert(result.parserRegression.chinesePsalm.length === 3 && result.parserRegression.chinesePsalm.filter(line => line.sp === '領').length === 2, `Chinese psalm stanzas were not joined: ${JSON.stringify(result.parserRegression.chinesePsalm)}`);
    assert(result.parserRegression.chineseGospel.lines[0].role === 'summary' && result.parserRegression.chineseGospel.lines[0].text === '誰願意跟隨我，就該捨棄自己。', `Chinese Gospel summary was not preserved: ${JSON.stringify(result.parserRegression.chineseGospel)}`);
    assert(!/信經|我信唯一/u.test(JSON.stringify(result.parserRegression.chineseGospel)), `Chinese Creed leaked into the Gospel: ${JSON.stringify(result.parserRegression.chineseGospel)}`);
    assert(result.chineseWarning.lines === 2 && /한국어\s*:/.test(result.chineseWarning.text) && /中文\s*:/.test(result.chineseWarning.text), `Chinese paired warning is missing: ${JSON.stringify(result.chineseWarning)}`);
    assert(result.chineseWarning.borderStyle === 'none' && result.chineseWarning.backgroundColor === 'rgba(0, 0, 0, 0)', `Auxiliary warning is still boxed: ${JSON.stringify(result.chineseWarning)}`);
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
      && /常年期第廿二主日/.test(result.taiwanStatic.futureBTitle)
      && result.taiwanStatic.bCycleFailures.length === 0,
    `Taiwan static daily Mass selection/parsing failed: ${JSON.stringify(result.taiwanStatic)}`);
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
