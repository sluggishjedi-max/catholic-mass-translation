const fs = require('fs');
const http = require('http');
const os = require('os');
const path = require('path');
const { chromium } = require('@playwright/test');

const root = path.resolve(__dirname, '..');
const outputDir = process.env.ORDO_TEST_OUTPUT_DIR || path.join(os.tmpdir(), 'order-of-mass-test-results');
const targetHtml = process.env.ORDO_CHECK_HTML || 'V22.5.html';
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png'
};

function startServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://127.0.0.1');
    const route = decodeURIComponent(url.pathname === '/' ? `/${targetHtml}` : url.pathname);
    const file = path.resolve(root, route.replace(/^\/+/, ''));
    if (!file.startsWith(root)) {
      res.writeHead(403).end('Forbidden');
      return;
    }
    fs.readFile(file, (error, data) => {
      if (error) {
        res.writeHead(404).end('Not found');
        return;
      }
      res.writeHead(200, { 'content-type': mime[path.extname(file)] || 'application/octet-stream' });
      res.end(data);
    });
  });
  return new Promise(resolve => server.listen(0, '127.0.0.1', () => resolve(server)));
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

(async () => {
  fs.mkdirSync(outputDir, { recursive: true });
  const server = await startServer();
  const port = server.address().port;
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } });
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.stack || String(error)));
  await page.addInitScript(() => {
    window.fetch = async () => { throw new Error('Remote fetch disabled by versioned browser check'); };
  });

  try {
    await page.goto(`http://127.0.0.1:${port}/${targetHtml}`, { waitUntil: 'domcontentloaded' });
    await page.locator('#consent-accept').click({ timeout: 5000 }).catch(() => {});
    await page.locator('[data-vn-source="hanoi"]').click({ timeout: 5000 }).catch(() => {});
    await page.waitForFunction(() => typeof massData !== 'undefined' && Array.isArray(massData) && massData.length > 20);

    const prefaceData = await page.evaluate(() => {
      const eucharist = massData.find(item => item && item.id === '3.3 eucharist');
      const keys = getEucharistSongKeys(eucharist);
      const combinedTitles = Object.entries(eucharist.songs).flatMap(([key, entry]) =>
        Object.entries(entry.title || {}).filter(([, value]) => /;|\s\/\s/.test(String(value || ''))).map(([lang, value]) => ({ key, lang, value }))
      );
      return {
        count: keys.length,
        firstSixteen: keys.slice(0, 16),
        lastTen: keys.slice(-10),
        groupedFixture: getEucharistSongKeys({ songs: { apostles_1: {}, mary_1: {}, apostles_2: {}, mary_2: {} } }),
        compactCommonOne: compactEucharistSongLabel(eucharist.songs.common_1.title.kr),
        commonOne: eucharist.songs.common_1.title,
        missingTitles: Object.entries(eucharist.songs).flatMap(([key, entry]) =>
          ['kr', 'vn', 'en', 'jp', 'la'].filter(lang => !String(entry.title?.[lang] || '').trim()).map(lang => `${key}:${lang}`)
        ),
        combinedTitles
      };
    });
    assert(prefaceData.count === 90, `Expected 90 Prefaces, got ${prefaceData.count}`);
    assert(JSON.stringify(prefaceData.firstSixteen) === JSON.stringify([
      'ordinary_1', 'ordinary_2', 'ordinary_3', 'ordinary_4', 'ordinary_5', 'ordinary_6', 'ordinary_7', 'ordinary_8',
      'common_1', 'common_2', 'common_3', 'common_4', 'common_5', 'common_6', 'advent_1', 'advent_2'
    ]), `Ordinary/weekday/Advent Preface order is wrong: ${prefaceData.firstSixteen.join(', ')}`);
    assert(JSON.stringify(prefaceData.lastTen) === JSON.stringify([
      'kr_proper_1', 'kr_proper_2_lunar_new_year', 'kr_proper_3_chuseok', 'kr_proper_4_unification',
      'vn_martyrs', 'us_thanksgiving', 'us_independence', 'us_guadalupe', 'jp_26_martyrs', 'jp_discovery_of_christians'
    ]), `Country proper Preface order is wrong: ${prefaceData.lastTen.join(', ')}`);
    assert(Object.values(prefaceData.commonOne).every(value => String(value || '').length > 12), 'Common Preface I titles are incomplete in one or more languages');
    assert(JSON.stringify(prefaceData.groupedFixture) === JSON.stringify(['apostles_1', 'apostles_2', 'mary_1', 'mary_2']), `Preface variations are not kept together: ${JSON.stringify(prefaceData.groupedFixture)}`);
    assert(prefaceData.compactCommonOne === '공통 감사송 1', `Collapsed Preface title should omit the subtitle: ${prefaceData.compactCommonOne}`);
    assert(prefaceData.missingTitles.length === 0, `Missing Preface title translations: ${prefaceData.missingTitles.join(', ')}`);
    assert(prefaceData.combinedTitles.length === 0, `Combined multi-Preface titles remain: ${JSON.stringify(prefaceData.combinedTitles.slice(0, 3))}`);

    const perpetualCalendar = await page.evaluate(() => {
      const findLunarDate = (year, lunarMonth, lunarDay) => {
        for (let date = new Date(year, 0, 1, 9); date.getFullYear() === year; date.setDate(date.getDate() + 1)) {
          const lunar = koreanLunarMonthDay(date);
          if (lunar && lunar.month === lunarMonth && lunar.day === lunarDay) return new Date(date);
        }
        return null;
      };
      const select = (date, lang) => {
        state.currentLoc = lang;
        state.targetLang = lang === 'EN' ? 'KR' : 'EN';
        state.liturgicalDateContext = { date, localDate: date, leftLang: lang, slot: 'day' };
        state.liturgyInfo = buildGeneratedLiturgyInfo(date);
        return defaultPrefaceSelectionForLiturgyInfo(state.liturgyInfo, date).key;
      };
      const lunarNewYear = findLunarDate(2037, 1, 1);
      const chuseok = findLunarDate(2041, 8, 15);
      const week16 = Array.from({ length: 366 }, (_, index) => new Date(2038, 0, index + 1, 9))
        .find(date => {
          const meta = getSeasonMeta(date);
          return date.getDay() === 0 && meta.season === 'ordinary' && meta.week === 16;
        });
      return {
        hasYearAsset: !!globalThis.liturgicalCalendarPrefaces,
        hasYearScript: !!document.querySelector('script[src*="liturgical_calendar_2026"]'),
        lunarNewYear: lunarNewYear ? { date: formatDateIso(lunarNewYear), key: select(lunarNewYear, 'KR') } : null,
        chuseok: chuseok ? { date: formatDateIso(chuseok), key: select(chuseok, 'KR') } : null,
        unification: select(new Date(2045, 5, 25, 9), 'KR'),
        vietnamMartyrs: select(new Date(2046, 10, 24, 9), 'VN'),
        usThanksgiving: select(new Date(2040, 10, 22, 9), 'EN'),
        japanMartyrs: select(new Date(2044, 1, 5, 9), 'JP'),
        ordinaryWeek16: week16 ? { date: formatDateIso(week16), key: select(week16, 'KR') } : null
      };
    });
    assert(!perpetualCalendar.hasYearAsset && !perpetualCalendar.hasYearScript, 'The removed one-year calendar asset is still loaded');
    assert(perpetualCalendar.lunarNewYear?.key === 'kr_proper_2_lunar_new_year', `Future Lunar New Year rule failed: ${JSON.stringify(perpetualCalendar.lunarNewYear)}`);
    assert(perpetualCalendar.chuseok?.key === 'kr_proper_3_chuseok', `Future Chuseok rule failed: ${JSON.stringify(perpetualCalendar.chuseok)}`);
    assert(perpetualCalendar.unification === 'kr_proper_4_unification', `Future Korean unification rule failed: ${perpetualCalendar.unification}`);
    assert(perpetualCalendar.vietnamMartyrs === 'vn_martyrs', `Future Vietnamese proper rule failed: ${perpetualCalendar.vietnamMartyrs}`);
    assert(perpetualCalendar.usThanksgiving === 'us_thanksgiving', `Future US Thanksgiving rule failed: ${perpetualCalendar.usThanksgiving}`);
    assert(perpetualCalendar.japanMartyrs === 'jp_26_martyrs', `Future Japanese proper rule failed: ${perpetualCalendar.japanMartyrs}`);
    assert(perpetualCalendar.ordinaryWeek16?.key === 'ordinary_6', `Future ordinary Sunday rule failed: ${JSON.stringify(perpetualCalendar.ordinaryWeek16)}`);

    const koreanMissalOverlays = await page.evaluate(() => {
      const date = value => {
        const [year, month, day] = value.split('-').map(Number);
        return new Date(year, month - 1, day, 9, 0, 0);
      };
      const foreignProperCases = [
        ['JP', '2026-02-05'],
        ['EN', '2026-09-09'],
        ['EN', '2026-10-19'],
        ['VN', '2026-11-24'],
        ['EN', '2026-12-12']
      ].map(([left, dateText]) => {
        const value = date(dateText);
        state.currentLoc = left;
        state.targetLang = 'KR';
        state.liturgyInfo = buildGeneratedLiturgyInfo(value);
        const target = {};
        const entry = applyKoreanMissalForeignProperOverlay(target, value);
        return { left, dateText, page: entry && entry.sourcePage, keys: Object.keys(target), target };
      });
      state.currentLoc = 'EN';
      state.targetLang = 'KR';
      const unavailableDate = date('2026-07-14');
      state.liturgyInfo = buildGeneratedLiturgyInfo(unavailableDate);
      const unavailable = applyKoreanMissalForeignProperOverlay({}, unavailableDate);

      const ordinaryCases = ['2026-07-05', '2026-09-20', '2041-09-10'].map(dateText => {
        const value = date(dateText);
        state.currentLoc = 'EN';
        state.targetLang = 'KR';
        state.liturgyInfo = buildGeneratedLiturgyInfo(value);
        const target = {};
        const entry = applyKoreanMissalOrdinaryConflictOverlay(target, value);
        target.entrance.en_lines = [
          strictParsedLine('', 'Foreign ordinary entrance'),
          strictParsedLine('', 'Or:'),
          strictParsedLine('', 'Foreign ordinary entrance alternative')
        ];
        const entranceOptions = selectableOptionMapFromData(target.entrance, 'entrance').optionMap;
        const paired = buildKoreanOrdinaryTranslationAlignment('entrance', target.entrance, entranceOptions);
        return {
          dateText,
          week: entry && entry.week,
          pdfPage: entry && entry.pdfPage,
          keys: Object.keys(target),
          entrance: target.entrance && target.entrance.kr,
          collect: target.collect && target.collect.kr,
          communionOptions: target.communion && target.communion.optionCits_kr,
          hasStructuredCollect: !!(target.collect && target.collect.kr_lines && target.collect.kr_lines.length),
          pairedFirstOption: !!(paired[0] && paired[0].en === 0 && paired[0].kr === 0)
        };
      });
      const normalDate = date('2026-07-12');
      state.liturgyInfo = buildGeneratedLiturgyInfo(normalDate);
      const normalEntry = koreanMissalOrdinaryConflictEntry(normalDate);
      return {
        ordinaryWeekCount: Object.keys(globalThis.koreanMissalOrdinaryWeekData || {}).length,
        foreignProperCases,
        unavailable: unavailable === null,
        ordinaryCases,
        normalEntry: normalEntry === null
      };
    });
    assert(koreanMissalOverlays.ordinaryWeekCount === 34, `Korean Missal ordinary-week asset is incomplete: ${JSON.stringify(koreanMissalOverlays)}`);
    assert(koreanMissalOverlays.foreignProperCases.every(item => item.page && item.keys.includes('collect')), `Official Korean foreign-proper overlays are incomplete: ${JSON.stringify(koreanMissalOverlays)}`);
    assert(koreanMissalOverlays.foreignProperCases.find(item => item.left === 'VN')?.keys.length === 5, `Vietnamese martyrs should have five official Korean proper sections: ${JSON.stringify(koreanMissalOverlays)}`);
    assert(koreanMissalOverlays.unavailable, `A local proper absent from the Korean Missal should not be fabricated: ${JSON.stringify(koreanMissalOverlays)}`);
    assert(koreanMissalOverlays.ordinaryCases[0]?.week === 14 && koreanMissalOverlays.ordinaryCases[0]?.pdfPage === 946, `7/5 foreign ordinary liturgy did not select Korean Missal week 14: ${JSON.stringify(koreanMissalOverlays)}`);
    assert(koreanMissalOverlays.ordinaryCases[1]?.week === 25 && koreanMissalOverlays.ordinaryCases[1]?.pdfPage === 957, `9/20 foreign ordinary liturgy did not select Korean Missal week 25: ${JSON.stringify(koreanMissalOverlays)}`);
    assert(koreanMissalOverlays.ordinaryCases[2]?.week && koreanMissalOverlays.ordinaryCases[2]?.hasStructuredCollect, `Future Korean local-calendar conflict did not use the perpetual ordinary-week overlay: ${JSON.stringify(koreanMissalOverlays)}`);
    assert(koreanMissalOverlays.ordinaryCases.every(item => item.entrance && item.collect && item.communionOptions?.length === 2), `Korean ordinary-week overlays are missing official sections/options: ${JSON.stringify(koreanMissalOverlays)}`);
    assert(koreanMissalOverlays.ordinaryCases.every(item => item.pairedFirstOption), `Foreign ordinary source and official Korean translation were split into separate first options: ${JSON.stringify(koreanMissalOverlays)}`);
    assert(koreanMissalOverlays.normalEntry, `The ordinary overlay was applied on a date without a Korean local conflict: ${JSON.stringify(koreanMissalOverlays)}`);

    const timeZoneRouting = await page.evaluate(() => {
      const instant = new Date('2026-07-15T00:00:00Z');
      const forced = code => {
        state.useGps = false;
        state.selectedLocationCode = code;
        state.currentLoc = getLangFromLocation(code);
        state.gpsTimeZone = '';
        return { date: formatDateIso(getStrictDateBase(instant).localDay), zone: activeLiturgicalTimeZone() };
      };
      const result = {
        KR: forced('KR'),
        US: forced('US'),
        VN: forced('VN'),
        VA: forced('VA')
      };
      state.useGps = true;
      state.currentLoc = 'EN';
      state.gpsTimeZone = 'America/Los_Angeles';
      result.gpsCalifornia = { date: formatDateIso(getStrictDateBase(instant).localDay), zone: activeLiturgicalTimeZone() };
      state.useGps = false;
      state.selectedLocationCode = 'KR';
      state.currentLoc = 'KR';
      state.gpsTimeZone = '';
      return result;
    });
    assert(timeZoneRouting.KR.date === '2026-07-15' && timeZoneRouting.KR.zone === 'Asia/Seoul', `Korean forced timezone failed: ${JSON.stringify(timeZoneRouting)}`);
    assert(timeZoneRouting.US.date === '2026-07-14' && timeZoneRouting.US.zone === 'America/New_York', `US forced timezone failed: ${JSON.stringify(timeZoneRouting)}`);
    assert(timeZoneRouting.VN.date === '2026-07-15' && timeZoneRouting.VA.date === '2026-07-15', `Vietnam/Vatican timezone failed: ${JSON.stringify(timeZoneRouting)}`);
    assert(timeZoneRouting.gpsCalifornia.date === '2026-07-14' && timeZoneRouting.gpsCalifornia.zone === 'America/Los_Angeles', `GPS timezone failed: ${JSON.stringify(timeZoneRouting)}`);

    const languageDefaults = await page.evaluate(async () => {
      state.currentLoc = 'LA';
      state.targetLang = 'KR';
      updateRoleLegend('LA', 'KR');
      const legendOrder = Array.from(document.querySelectorAll('#role-legend [data-legend-lang]'))
        .filter(node => !node.hidden)
        .map(node => node.dataset.legendLang);
      const legendParents = Array.from(document.querySelectorAll('#role-legend [data-legend-lang]'))
        .filter(node => !node.hidden)
        .map(node => node.parentElement?.className || '');
      const legendColumnCount = getComputedStyle(document.querySelector('.role-legend-grid')).gridTemplateColumns.split(/\s+/).filter(Boolean).length;
      state.currentLoc = 'EN';
      state.targetLang = 'KR';
      state.options.dismissal = '';
      state.autoDismissalOptionKey = '';
      const dismissal = massData.find(item => getBaseId(item.id) === 'dismissal');
      ensureDismissalDefaultOption(dismissal, 'dismissal');
      const originalService = churchPlacesService;
      const originalMap = churchMap;
      const originalGoogle = window.google;
      const nearbyRequests = [];
      const bounds = {
        getCenter: () => ({ lat: () => 37.5, lng: () => 127.0 }),
        getNorthEast: () => ({ lat: () => 37.55, lng: () => 127.06 })
      };
      window.google = { maps: { places: { PlacesServiceStatus: { OK: 'OK' } } } };
      churchMap = { getBounds: () => bounds };
      state.currentLoc = 'KR';
      churchPlacesService = {
        textSearch: (_request, callback) => callback([], 'ZERO_RESULTS', null),
        nearbySearch: (request, callback) => { nearbyRequests.push({ keyword: request.keyword, radius: request.radius }); callback([], 'ZERO_RESULTS', null); }
      };
      searchChurchesInCurrentView();
      await new Promise(resolve => setTimeout(resolve, 20));
      churchPlacesService = originalService;
      churchMap = originalMap;
      if (typeof originalGoogle === 'undefined') delete window.google;
      else window.google = originalGoogle;
      state.uiLang = 'KR';
      return {
        legendOrder,
        legendParents,
        legendColumnCount,
        dismissal: state.options.dismissal,
        firestoreSdkLoaded: typeof window.firebase !== 'undefined',
        firebaseScriptCount: document.querySelectorAll('script[src*="firebase-firestore"], script[src*="firebase-app-compat"]').length,
        ordinaryFirestoreReferences: Array.from(document.scripts).filter(script => !script.src)
          .some(script => /order_of_mass|loadOrdinaryMassDataFromFirestore|waitForFirebaseReady/.test(script.textContent || '')),
        churchReadyText: Object.fromEntries(Object.entries(auxUiText).map(([lang, copy]) => [lang, copy.churchReady])),
        koreanChurchQueries: churchSearchQueriesForLocation('KR'),
        vietnameseChurchQueries: churchSearchQueriesForLocation('VN'),
        koreanChurchNearbyKeywords: churchNearbyKeywordsForLocation('KR'),
        mapsConfigColdStartSafe: /timeoutMs:\s*8000/.test(fetchGoogleMapsApiKey.toString()) && /churchMapsApiKeyPromise\s*=\s*null/.test(fetchGoogleMapsApiKey.toString()),
        modernPlacesSearch: /Place\.searchByText/.test(searchChurchesWithModernPlaces.toString()) && /Place\.searchNearby/.test(searchChurchesWithModernPlaces.toString()),
        legacyAutocompleteRemoved: !/new google\.maps\.places\.Autocomplete/.test(initializeChurchMap.toString()),
        mapsAuthFailureFallback: typeof window.gm_authFailure === 'function' && /gm-err-container/.test(initializeChurchMap.toString()),
        placesAuthFailureFallback: isChurchPlacesAuthorizationError(new Error('PLACES_SEARCH_TEXT: PERMISSION_DENIED: Requests from referer are blocked.'))
          && /showChurchFallback/.test(searchChurchesInCurrentView.toString())
          && /showChurchFallback/.test(searchChurchByName.toString()),
        normalizedModernChurch: normalizeModernChurchPlace({ id: 'test', displayName: '천주교 벌말성당', formattedAddress: '대한민국', location: { lat: 1, lng: 2 } }),
        churchMarkerNameLabels: /label:\s*name/.test(addChurchMarker.toString()) && /church-marker-label/.test(addChurchMarker.toString()),
        churchDetailsOnDemand: /fetchFields/.test(fetchChurchPlaceDetails.toString()) && /nationalPhoneNumber/.test(fetchChurchPlaceDetails.toString()) && /regularOpeningHours/.test(fetchChurchPlaceDetails.toString()),
        churchInfoFixture: churchInfoWindowHtml({
          name: '천주교 벌말성당',
          formatted_address: '경기도 의왕시 테스트로 1',
          phone: '031-000-0000',
          website: 'https://example.org/church',
          google_maps_url: 'https://maps.google.com/?q=test',
          priestNames: ['홍길동 신부'],
          sisterNames: ['김마리아 수녀'],
          massTimes: ['주일 09:00', '주일 11:00'],
          opening_hours: ['월요일 09:00~18:00']
        }),
        churchDirectory: {
          count: globalThis.churchLocalDetailsMeta?.recordCount || 0,
          countries: globalThis.churchLocalDetailsMeta?.sourceCounts || {},
          bellmal: churchLocalDetailsForPlace({ name: '천주교 벌말성당' }),
          maegok: churchLocalDetailsForPlace({ name: '천주교 매곡성당' }),
          canthoAnBinh: churchLocalDetailsForPlace({ name: 'Nhà thờ An Bình' }),
          canthoAnHoi: churchLocalDetailsForPlace({ name: 'Nhà thờ An Hội' }),
          bariaThuLuu: churchLocalDetailsForPlace({ name: 'Nhà thờ Thủ Lựu' }),
          bellmalCard: churchInfoWindowHtml({ name: '천주교 벌말성당' }),
          canthoAnBinhCard: churchInfoWindowHtml({ name: 'Nhà thờ An Bình' }),
          canthoAnHoiCard: churchInfoWindowHtml({ name: 'Nhà thờ An Hội' }),
          bariaThuLuuCard: churchInfoWindowHtml({ name: 'Nhà thờ Thủ Lựu' })
        },
        nearbyRequests,
        koreanPenitentialLabels: Object.values(massData.find(item => item.id === '1.3 penitential')?.variants || {})
          .map(variant => variant?.label?.kr || '')
      };
    });
    assert(JSON.stringify(languageDefaults.legendOrder) === JSON.stringify(['LA', 'KR']), `Legend does not follow left/right language order: ${JSON.stringify(languageDefaults)}`);
    assert(languageDefaults.legendParents.every(name => name === 'role-legend-grid'), `Legend groups escaped the two-column grid: ${JSON.stringify(languageDefaults)}`);
    assert(languageDefaults.legendColumnCount === 2, `Desktop legend should use two left/right columns: ${JSON.stringify(languageDefaults)}`);
    assert(languageDefaults.dismissal === 'D', `English dismissal should prefer form 4/D: ${JSON.stringify(languageDefaults)}`);
    assert(!languageDefaults.firestoreSdkLoaded && languageDefaults.firebaseScriptCount === 0 && !languageDefaults.ordinaryFirestoreReferences, `Ordinary Mass should not read Firestore: ${JSON.stringify(languageDefaults)}`);
    assert(Object.values(languageDefaults.churchReadyText).every(text => text === ''), `The church map instruction was not removed in every UI language: ${JSON.stringify(languageDefaults)}`);
    assert(languageDefaults.koreanChurchQueries.includes('천주교 성당') && languageDefaults.koreanChurchQueries.includes('Catholic church') && languageDefaults.vietnameseChurchQueries.includes('nhà thờ Công giáo'), `Localized church searches are incomplete: ${JSON.stringify(languageDefaults)}`);
    assert(languageDefaults.koreanChurchNearbyKeywords.includes('천주교') && languageDefaults.nearbyRequests.some(item => item.keyword === '천주교' && item.radius >= 1000), `Current-map Catholic nearby search is not active: ${JSON.stringify(languageDefaults)}`);
    assert(languageDefaults.mapsConfigColdStartSafe, `Google Maps config fetch is not cold-start safe or retryable: ${JSON.stringify(languageDefaults)}`);
    assert(languageDefaults.modernPlacesSearch && languageDefaults.legacyAutocompleteRemoved && languageDefaults.normalizedModernChurch?.name === '천주교 벌말성당', `Places API (New) church search is not wired correctly: ${JSON.stringify(languageDefaults)}`);
    assert(languageDefaults.mapsAuthFailureFallback, `Google Maps authentication failures should fall back to the iframe map: ${JSON.stringify(languageDefaults)}`);
    assert(languageDefaults.placesAuthFailureFallback, `Places authorization failures should fall back to a usable Google map instead of leaving an empty marker layer: ${JSON.stringify(languageDefaults)}`);
    assert(languageDefaults.churchMarkerNameLabels && languageDefaults.churchDetailsOnDemand, `Church marker names or on-demand Place details are not wired: ${JSON.stringify(languageDefaults)}`);
    assert(['주소', '사제', '수녀', '미사 시간', '홍길동 신부', '김마리아 수녀', '주일 11:00'].every(text => languageDefaults.churchInfoFixture.includes(text)), `Church info card is missing requested fields: ${languageDefaults.churchInfoFixture}`);
    assert(languageDefaults.churchDirectory.count >= 2050 && languageDefaults.churchDirectory.countries.KR >= 1789 && languageDefaults.churchDirectory.countries['VN-CanTho'] >= 165 && languageDefaults.churchDirectory.countries['VN-BaRia'] === 99 && languageDefaults.churchDirectory.bellmal?.diocese === '수원교구' && languageDefaults.churchDirectory.maegok?.diocese === '수원교구', `Official local church directory did not load or match named parishes: ${JSON.stringify(languageDefaults.churchDirectory)}`);
    assert(['14058', '수원교구', '031-424-6401', '주일 07:00, 10:30, 16:00, 19:30', '2026년 07월 13일'].every(text => languageDefaults.churchDirectory.bellmalCard.includes(text)), `Official Bellmal parish details are missing from the marker card: ${languageDefaults.churchDirectory.bellmalCard}`);
    assert(languageDefaults.churchDirectory.canthoAnBinh?.diocese === 'Giáo phận Cần Thơ' && ['55/1', 'Chúa Nhật', 'Giáo phận Cần Thơ'].every(text => languageDefaults.churchDirectory.canthoAnBinhCard.includes(text)), `Official Cần Thơ parish details are missing from the marker card: ${languageDefaults.churchDirectory.canthoAnBinhCard}`);
    assert(['Thứ Bảy: 17g30', 'Chúa Nhật: 05g00, 07g00, 17g30'].every(text => languageDefaults.churchDirectory.canthoAnHoiCard.includes(text)), `An Hội anticipated and Sunday evening Mass times were not corrected: ${languageDefaults.churchDirectory.canthoAnHoiCard}`);
    assert(languageDefaults.churchDirectory.bariaThuLuu?.diocese === 'Giáo phận Bà Rịa' && ['20 Hà Huy Tập', 'Thứ 7: 18g00', 'Giáo phận Bà Rịa'].every(text => languageDefaults.churchDirectory.bariaThuLuuCard.includes(text)), `Official Bà Rịa parish details are missing from the marker card: ${languageDefaults.churchDirectory.bariaThuLuuCard}`);
    assert(JSON.stringify(languageDefaults.koreanPenitentialLabels) === JSON.stringify(['제1양식', '제2양식', '제3양식']), `Korean penitential-form labels are wrong: ${JSON.stringify(languageDefaults)}`);

    const uiHeaderLocalization = await page.evaluate(() => {
      const date = new Date(2026, 6, 15, 9, 0, 0);
      state.currentLoc = 'KR';
      state.targetLang = 'VN';
      state.liturgicalDateContext = { date, localDate: date, leftLang: 'KR', slot: 'day' };
      state.liturgyInfo = buildGeneratedLiturgyInfo(date);
      const rows = ['KR', 'VN', 'EN', 'JP', 'LA'].map(uiLang => {
        state.uiLang = uiLang;
        render();
        return {
          uiLang,
          title: document.getElementById('header-main-title')?.textContent.trim() || '',
          date: document.getElementById('header-date')?.textContent.trim() || ''
        };
      });
      state.uiLang = 'KR';
      return rows;
    });
    assert(uiHeaderLocalization.find(item => item.uiLang === 'VN')?.title === 'Thánh lễ hôm nay', `Vietnamese UI header did not localize: ${JSON.stringify(uiHeaderLocalization)}`);
    assert(/Wednesday/.test(uiHeaderLocalization.find(item => item.uiLang === 'EN')?.date || '') && /2026年7月15日/.test(uiHeaderLocalization.find(item => item.uiLang === 'JP')?.date || ''), `UI-language date localization failed: ${JSON.stringify(uiHeaderLocalization)}`);

    const cases = [
      ['2026-01-02', 'KR', 'nativity_2'],
      ['2026-02-08', 'KR', 'ordinary_1'],
      ['2026-02-18', 'KR', 'lent_3'],
      ['2026-03-23', 'KR', 'passion_1'],
      ['2026-04-05', 'KR', 'easter_1'],
      ['2026-01-11', 'LA', 'baptism_of_the_lord'],
      ['2026-02-02', 'LA', 'presentation_of_the_lord'],
      ['2026-04-05', 'LA', 'easter_1'],
      ['2026-05-18', 'KR', 'ascension_1'],
      ['2026-05-24', 'KR', 'pentecost'],
      ['2026-06-07', 'LA', 'eucharist_2'],
      ['2026-06-12', 'LA', 'sacred_heart'],
      ['2026-06-24', 'LA', 'john_the_baptist'],
      ['2026-07-22', 'LA', 'mary_magdalene'],
      ['2026-08-29', 'LA', 'john_the_baptist'],
      ['2026-09-08', 'LA', 'mary_1'],
      ['2026-09-29', 'LA', 'angels'],
      ['2026-11-02', 'LA', 'dead_1'],
      ['2026-11-09', 'LA', 'dedication_of_a_church'],
      ['2027-03-28', 'LA', 'easter_1'],
      ['2027-04-05', 'LA', 'annunciation'],
      ['2027-02-28', 'LA', 'lent_1'],
      ['2027-03-07', 'LA', 'lent_1'],
      ['2027-03-14', 'LA', 'lent_1'],
      ['2027-05-30', 'LA', 'eucharist_2'],
      ['2027-07-22', 'LA', 'mary_magdalene'],
      ['2026-07-12', 'KR', 'ordinary_4'],
      ['2026-07-19', 'KR', 'ordinary_6'],
      ['2026-07-19', 'VN', 'ordinary_6'],
      ['2026-07-19', 'EN', 'ordinary_6'],
      ['2026-07-19', 'JP', 'ordinary_6'],
      ['2026-08-19', 'KR', 'common_1'],
      ['2026-09-20', 'KR', 'kr_proper_1'],
      ['2026-11-24', 'VN', 'vn_martyrs'],
      ['2026-11-26', 'EN', 'us_thanksgiving'],
      ['2026-02-05', 'JP', 'jp_26_martyrs'],
      ['2026-03-17', 'JP', 'jp_discovery_of_christians']
    ];
    const selections = await page.evaluate(cases => {
      return cases.map(([dateText, lang, expected]) => {
        const [year, month, day] = dateText.split('-').map(Number);
        const date = new Date(year, month - 1, day, 9, 0, 0);
        state.currentLoc = lang;
        state.targetLang = lang === 'EN' ? 'KR' : 'EN';
        state.liturgicalDateContext = { date, localDate: date, leftLang: lang, slot: 'day' };
        state.liturgyInfo = buildGeneratedLiturgyInfo(date);
        state.options.eucharist_song = '';
        state.autoEucharistSongKey = '';
        const eucharist = massData.find(item => item && item.id === '3.3 eucharist');
        const selected = getSelectedEucharistSongKey(eucharist);
        return {
          date: dateText,
          lang,
          expected,
          selected,
          hint: state.liturgyInfo.prefaceHint,
          hintKey: state.liturgyInfo.prefaceKey,
          source: state.liturgyInfo.prefaceHintSource
        };
      });
    }, cases);
    for (const item of selections) {
      assert(item.selected === item.expected, `${item.date} ${item.lang}: expected ${item.expected}, got ${item.selected} (${item.hint}; ${item.source})`);
    }
    const annunciationTransfer = await page.evaluate(() => {
      const buildName = dateText => {
        const [year, month, day] = dateText.split('-').map(Number);
        const date = new Date(year, month - 1, day, 9, 0, 0);
        state.currentLoc = 'LA';
        state.targetLang = 'KR';
        state.liturgicalDateContext = { date, localDate: date, leftLang: 'LA', slot: 'day' };
        return cleanNodeText(buildGeneratedLiturgyInfo(date).names?.LA || '');
      };
      return {
        nominal: buildName('2027-03-25'),
        observed: buildName('2027-04-05'),
        baptist2026: buildName('2026-08-29'),
        baptist2027: buildName('2027-08-29')
      };
    });
    assert(/Cena Domini/.test(annunciationTransfer.nominal) && /Annuntiatione Domini/.test(annunciationTransfer.observed), `2027 Annunciation transfer is wrong: ${JSON.stringify(annunciationTransfer)}`);
    assert(/Passione Sancti Ioannis Baptistae/.test(annunciationTransfer.baptist2026) && !/Baptistae/.test(annunciationTransfer.baptist2027), `Saint John the Baptist memorial precedence is wrong: ${JSON.stringify(annunciationTransfer)}`);

    const ktcgParsing = await page.evaluate(() => {
      const entrance = ktcgkpvReadingSection([{ INDEXING: 'Ga 20,17', CONTENT: '<p>Ca nhập lễ KTCG,<br>dòng thứ hai.</p><p>Dòng thứ ba.</p>' }], { mergeBodyParagraphs: true });
      const communion = ktcgkpvReadingSection([{ INDEXING: '2 Cr 5,14-15', CONTENT: '<p>Ca hiệp lễ KTCG.</p><p>Dòng tiếp theo.</p>' }], { mergeBodyParagraphs: true });
      const psalm = ktcgkpvPsalmSection([{
        INDEXING_2: 'Tv 62',
        CONTENT_2: '<p class="response"><span class="pre">Đ.</span><span class="body">Câu đáp.</span></p><p class="leading">Câu xướng một.<br>Tiếp câu một.</p><p class="response"><span class="pre">Đ.</span><span class="body">Câu đáp.</span></p><p class="leading">Câu xướng hai.</p><p class="response"><span class="pre">Đ.</span><span class="body">Câu đáp.</span></p>'
      }]);
      const acclamation = ktcgkpvAcclamationSection([{
        INDEXING_2: '',
        CONTENT_2: '<p>Ha-lê-lui-a. Ha-lê-lui-a.</p><p>Ma-ri-a hỡi, xin kể lại,<br>trên đường đi đã thấy gì cô ?</p><p>- Thấy mồ trống Đức Ki-tô</p><p>phục sinh vinh hiển thiên thu khải hoàn. Ha-lê-lui-a.</p>'
      }]);
      const gospel = ktcgkpvReadingSection([{
        INDEXING: 'Ga 20,1-2.11-18',
        LEAD: '<span class="holycross">✠</span>Tin Mừng Chúa Giê-su Ki-tô theo thánh Gio-an.',
        CONTENT: '<p>Nội dung Tin Mừng.</p>'
      }]);
      const july23 = new Date(2026, 6, 23, 9);
      const july25 = new Date(2026, 6, 25, 9);
      const feedLinks = [
        { text: 'Lời Chúa THỨ NĂM TUẦN 16 THƯỜNG NIÊN', href: 'https://gpbanmethuot.net/song-dao/loi-chua-thu-nam-tuan-16-thuong-nien-23451.html' },
        { text: 'Lời Chúa THỨ SÁU TUẦN 16 THƯỜNG NIÊN', href: 'https://gpbanmethuot.net/song-dao/loi-chua-thu-sau-tuan-16-thuong-nien-23452.html' },
        { text: 'Lời Chúa THỨ BẢY TUẦN 16 THƯỜNG NIÊN', href: 'https://gpbanmethuot.net/song-dao/loi-chua-thu-bay-tuan-16-thuong-nien-23453.html' }
      ];
      const diocesanFixture = `Title: Lời Chúa THỨ BẢY TUẦN 16 THƯỜNG NIÊN
URL Source: https://gpbanmethuot.net/song-dao/example.html
Markdown Content:
25/07/2026
**BÀI ĐỌC TRONG THÁNH LỄ**
**Thứ bảy tuần 16 THƯỜNG NIÊN**
Ca nhập lễ
Ca nhập lễ ngày thường.
Lời nguyện nhập lễ
Lạy Chúa, đây là bản văn bản ngày thường đủ dài để kiểm tra việc chọn sai khối.
Bài Đọc I: Gr 1,1-2
Nội dung bài đọc ngày thường.
Lời nguyện tiến lễ
Lạy Chúa, đây là lời nguyện tiến lễ ngày thường đủ dài để kiểm tra.
Ca hiệp lễ
Ca hiệp lễ ngày thường.
Lời nguyện hiệp lễ
Lạy Chúa, đây là lời nguyện hiệp lễ ngày thường đủ dài để kiểm tra.
Suy niệm
**Thánh Giacôbê, tông đồ**
**BÀI ĐỌC TRONG THÁNH LỄ**
**Thánh Giacôbê, tông đồ**
Ca nhập lễ
Ca nhập lễ kính thánh Gia-cô-bê.
Lời nguyện nhập lễ
Lạy Thiên Chúa toàn năng hằng hữu, Chúa đã ban cho thánh Gia-cô-bê vinh dự làm chứng cho Tin Mừng.
Bài Đọc I: 2 Cr 4,7-15
Nội dung bài đọc kính thánh Gia-cô-bê.
Lời nguyện tiến lễ
Lạy Thiên Chúa là Chúa chúng con, xin nhận của lễ trong ngày kính thánh Gia-cô-bê tông đồ.
Ca hiệp lễ
Các ông đã uống chén đau khổ của Chúa Ki-tô.
Lời nguyện hiệp lễ
Lạy Chúa, chúng con hân hoan đón nhận hồng ân trong ngày lễ kính thánh Gia-cô-bê tông đồ.`;
      const properPrayers = parseVietnameseKtcgDiocesanPrayers(diocesanFixture, july25, 'THÁNH GIA-CÔ-BÊ, TÔNG ĐỒ');
      const previousPair = { currentLoc: state.currentLoc, targetLang: state.targetLang };
      state.currentLoc = 'VN';
      state.targetLang = 'KR';
      syncVietnameseSourceChoiceLabels();
      const popupButton = document.querySelector('[data-vn-source="ktcg"]');
      const hanoiButton = document.querySelector('[data-vn-source="hanoi"]');
      const vietnameseMain = popupButton?.querySelector('[data-vn-source-main]')?.textContent.trim() || '';
      const koreanTranslation = popupButton?.querySelector('[data-vn-source-translation]')?.textContent.trim() || '';
      const koreanHanoiTranslation = hanoiButton?.querySelector('[data-vn-source-translation]')?.textContent.trim() || '';
      const translationOpacity = Number.parseFloat(getComputedStyle(popupButton?.querySelector('[data-vn-source-translation]')).opacity || '1');
      const vietnameseTitle = document.querySelector('[data-vn-source-title-main]')?.textContent.trim() || '';
      const koreanTitleTranslation = document.querySelector('[data-vn-source-title-translation]')?.textContent.trim() || '';
      const vietnameseDescription = document.querySelector('[data-vn-source-description-main]')?.textContent.trim() || '';
      const koreanDescriptionTranslation = document.querySelector('[data-vn-source-description-translation]')?.textContent.trim() || '';
      const modalTranslationOpacity = Number.parseFloat(getComputedStyle(document.querySelector('[data-vn-source-title-translation]')).opacity || '1');
      state.currentLoc = 'EN';
      state.targetLang = 'JP';
      syncVietnameseSourceChoiceLabels();
      const englishMain = popupButton?.querySelector('[data-vn-source-main]')?.textContent.trim() || '';
      const englishHanoiMain = hanoiButton?.querySelector('[data-vn-source-main]')?.textContent.trim() || '';
      const japaneseTranslation = popupButton?.querySelector('[data-vn-source-translation]')?.textContent.trim() || '';
      const japaneseHanoiTranslation = hanoiButton?.querySelector('[data-vn-source-translation]')?.textContent.trim() || '';
      const englishTitle = document.querySelector('[data-vn-source-title-main]')?.textContent.trim() || '';
      const japaneseTitleTranslation = document.querySelector('[data-vn-source-title-translation]')?.textContent.trim() || '';
      const englishDescription = document.querySelector('[data-vn-source-description-main]')?.textContent.trim() || '';
      const japaneseDescriptionTranslation = document.querySelector('[data-vn-source-description-translation]')?.textContent.trim() || '';
      state.currentLoc = previousPair.currentLoc;
      state.targetLang = previousPair.targetLang;
      syncVietnameseSourceChoiceLabels();
      return {
        entranceText: entrance?.text,
        communionText: communion?.text,
        psalmLines: psalm?.lines || [],
        acclamationParagraphs: (acclamation?.lines || []).map(line => line.text),
        gospelIntro: gospel?.lines?.find(line => line.role === 'intro')?.text || '',
        vietnameseMain,
        koreanTranslation,
        koreanHanoiTranslation,
        englishMain,
        englishHanoiMain,
        japaneseTranslation,
        japaneseHanoiTranslation,
        translationOpacity,
        vietnameseTitle,
        koreanTitleTranslation,
        vietnameseDescription,
        koreanDescriptionTranslation,
        modalTranslationOpacity,
        englishTitle,
        japaneseTitleTranslation,
        englishDescription,
        japaneseDescriptionTranslation,
        settingText: document.querySelector('#set-vn-source option[value="ktcg"]')?.textContent.trim() || '',
        requiredSections: requiredVietnameseKtcgSectionKeys,
        july23Link: rankVietnameseKtcgDiocesanLinks(feedLinks, july23)[0]?.href || '',
        july25Link: rankVietnameseKtcgDiocesanLinks(feedLinks, july25)[0]?.href || '',
        properCollect: properPrayers.collect?.text || '',
        properOffering: properPrayers.prayer_offerings?.text || '',
        properAfter: properPrayers.prayer_after?.text || '',
        diocesanRssUrl: VIETNAMESE_KTCG_DIOCESAN_RSS_URL,
        dateMatched: vietnameseKtcgDiocesanSourceMatchesDate(diocesanFixture, july25),
        hardcodedMapRemoved: typeof vietnameseKtcgDiocesanPrayerSources === 'undefined'
      };
    });
    assert(ktcgParsing.entranceText === 'Ca nhập lễ KTCG, dòng thứ hai. Dòng thứ ba.' && ktcgParsing.communionText === 'Ca hiệp lễ KTCG. Dòng tiếp theo.', `KTCG antiphon line breaks were not merged into one paragraph: ${JSON.stringify(ktcgParsing)}`);
    assert(JSON.stringify(ktcgParsing.psalmLines) === JSON.stringify([
      { sp: 'Đáp', text: 'Câu đáp.' },
      { sp: 'Xướng', text: 'Câu xướng một. Tiếp câu một. - Đáp.' },
      { sp: 'Xướng', text: 'Câu xướng hai. - Đáp.' }
    ]), `KTCG Psalm does not match the Hanoi Đáp/Xướng structure: ${JSON.stringify(ktcgParsing)}`);
    assert(JSON.stringify(ktcgParsing.acclamationParagraphs) === JSON.stringify(['Ha-lê-lui-a. Ha-lê-lui-a.', 'Ma-ri-a hỡi, xin kể lại, trên đường đi đã thấy gì cô ? Thấy mồ trống Đức Ki-tô phục sinh vinh hiển thiên thu khải hoàn.', 'Ha-lê-lui-a.']), `KTCG Gospel acclamation paragraphs are wrong: ${JSON.stringify(ktcgParsing)}`);
    assert(ktcgParsing.gospelIntro === 'Tin Mừng Chúa Giê-su Ki-tô theo thánh Gio-an.' && !ktcgParsing.gospelIntro.includes('✠'), `KTCG Gospel cross was not removed: ${JSON.stringify(ktcgParsing)}`);
    assert(/^Bản dịch KTCGKPV/.test(ktcgParsing.vietnameseMain) && /^베트남 성무일도번역위원회/.test(ktcgParsing.koreanTranslation) && ktcgParsing.translationOpacity < 0.7, `KTCG source labels do not prioritize the original language: ${JSON.stringify(ktcgParsing)}`);
    assert(/KTCGKPV translation/.test(ktcgParsing.englishMain) && /KTCGKPV訳/.test(ktcgParsing.japaneseTranslation) && !JSON.stringify(ktcgParsing).includes('Nhóm Phiên Dịch'), `KTCG source labels are fixed to Korean/Vietnamese or use the old name: ${JSON.stringify(ktcgParsing)}`);
    assert(/미사독서$/.test(ktcgParsing.koreanHanoiTranslation) && /미사전례독서$/.test(ktcgParsing.koreanTranslation) && /Mass Readings$/.test(ktcgParsing.englishHanoiMain) && /Liturgical Readings for Mass$/.test(ktcgParsing.englishMain) && /ミサ朗読$/.test(ktcgParsing.japaneseHanoiTranslation) && /ミサ典礼朗読$/.test(ktcgParsing.japaneseTranslation), `Vietnamese source publication labels are not consistently distinguished: ${JSON.stringify(ktcgParsing)}`);
    assert(/^Chọn bản dịch/.test(ktcgParsing.vietnameseTitle) && /^베트남어 전례독서/.test(ktcgParsing.koreanTitleTranslation) && /^Vui lòng/.test(ktcgParsing.vietnameseDescription) && /^베트남어 본문/.test(ktcgParsing.koreanDescriptionTranslation) && ktcgParsing.modalTranslationOpacity < 0.7, `Vietnamese source modal copy does not follow the VN/KR language pair: ${JSON.stringify(ktcgParsing)}`);
    assert(/^Choose a Vietnamese/.test(ktcgParsing.englishTitle) && /^ベトナム語典礼朗読/.test(ktcgParsing.japaneseTitleTranslation) && /^Choose the Vietnamese/.test(ktcgParsing.englishDescription) && /^ベトナム語本文/.test(ktcgParsing.japaneseDescriptionTranslation), `Vietnamese source modal copy does not follow the EN/JP language pair: ${JSON.stringify(ktcgParsing)}`);
    assert(/23451\.html$/.test(ktcgParsing.july23Link) && /23453\.html$/.test(ktcgParsing.july25Link) && ktcgParsing.dateMatched && ktcgParsing.hardcodedMapRemoved, `KTCG diocesan RSS resolver is wrong: ${JSON.stringify(ktcgParsing)}`);
    assert(/Gia-cô-bê/.test(ktcgParsing.properCollect) && /Gia-cô-bê/.test(ktcgParsing.properOffering) && /Gia-cô-bê/.test(ktcgParsing.properAfter) && !/ngày thường/.test(ktcgParsing.properCollect), `KTCG diocesan proper-prayer block selection is wrong: ${JSON.stringify(ktcgParsing)}`);
    assert(ktcgParsing.requiredSections.includes('entrance') && ktcgParsing.requiredSections.includes('communion') && /gpbanmethuot\.net/.test(ktcgParsing.diocesanRssUrl), `KTCG required/source metadata is incomplete: ${JSON.stringify(ktcgParsing)}`);

    const renderedSelections = await page.evaluate(() => {
      const cases = [
        ['2026-07-12', 'KR', 'VN', 'ordinary_4'],
        ['2026-07-19', 'KR', 'EN', 'ordinary_6'],
        ['2026-11-26', 'EN', 'KR', 'us_thanksgiving'],
        ['2026-02-05', 'JP', 'EN', 'jp_26_martyrs']
      ];
      return cases.map(([dateText, left, right, expected]) => {
        const [year, month, day] = dateText.split('-').map(Number);
        const date = new Date(year, month - 1, day, 9, 0, 0);
        state.currentLoc = left;
        state.targetLang = right;
        state.liturgicalDateContext = { date, localDate: date, leftLang: left, slot: 'day' };
        state.liturgyInfo = buildGeneratedLiturgyInfo(date);
        state.isSunday = !!(state.liturgyInfo.isSunday || state.liturgyInfo.isSolemnity);
        state.options.eucharist = '2';
        state.options.eucharist_song = '';
        state.autoEucharistSongKey = '';
        render();
        const section = document.querySelector('[data-part-id="eucharist"]');
        const select = section && Array.from(section.querySelectorAll('select')).find(node => (node.getAttribute('onchange') || '').includes('eucharist_song'));
        return {
          date: dateText,
          left,
          expected,
          value: select ? select.value : '',
          label: select && select.selectedOptions[0] ? select.selectedOptions[0].textContent.trim() : '',
          fullLabel: select && select.selectedOptions[0] ? select.selectedOptions[0].dataset.fullLabel || '' : '',
          width: select ? select.getBoundingClientRect().width : 0,
          fieldSizing: select ? getComputedStyle(select).fieldSizing : ''
        };
      });
    });
    for (const item of renderedSelections) {
      assert(item.value === item.expected, `${item.date} ${item.left}: rendered Preface select expected ${item.expected}, got ${item.value}`);
      assert(item.label.length > 8, `${item.date} ${item.left}: rendered Preface label is missing`);
      assert(item.fieldSizing === 'content' && item.width > 0, `${item.date} ${item.left}: select width still follows the longest option: ${JSON.stringify(item)}`);
    }
    const ordinaryRendered = renderedSelections.find(item => item.expected === 'ordinary_4');
    assert(ordinaryRendered && !ordinaryRendered.label.includes(':') && ordinaryRendered.fullLabel.includes(':'), `Collapsed Preface should show only its main title while retaining the full option label: ${JSON.stringify(ordinaryRendered)}`);

    const romanCanon = await page.evaluate(() => {
      const cases = [
        ['2026-07-19', 'ordinary'],
        ['2025-12-25', 'christmas'],
        ['2026-01-04', 'epiphany'],
        ['2026-04-05', 'easter'],
        ['2026-05-17', 'ascension'],
        ['2026-05-24', 'pentecost']
      ];
      const eucharist = massData.find(item => item && item.id === '3.3 eucharist');
      return cases.map(([dateText, expected]) => {
        const [year, month, day] = dateText.split('-').map(Number);
        const date = new Date(year, month - 1, day, 9, 0, 0);
        state.currentLoc = 'KR';
        state.liturgicalDateContext = { date, localDate: date, leftLang: 'KR', slot: 'day' };
        state.liturgyInfo = buildGeneratedLiturgyInfo(date);
        const key = romanCanonSeasonalKeyForDate(date);
        const lines = filterRomanCanonSeasonalLines(eucharist.forms['1'], date);
        const text = lines.map(line => line.text_kr || '').join(' ');
        return {
          date: dateText,
          expected,
          key,
          hasChristmas: text.includes('복되신 마리아께서 동정의 순결한 몸으로'),
          hasEpiphany: text.includes('아버지의 영광을 영원히 함께 누리시는'),
          hasEaster: text.includes('우리 주 그리스도께서 육신으로 부활하신'),
          hasEasterOblation: text.includes('물과 성령으로 모든 죄를 용서하시고') && text.includes('새로 나게 하신 형제들을 위하여'),
          hasAscension: text.includes('저희의 연약한 육신을 취하신 성자 우리 주님께서'),
          hasPentecost: text.includes('성령께서 사도들에게 혀 모양의 불길로 나타나신')
        };
      });
    });
    for (const item of romanCanon) {
      assert(item.key === item.expected, `${item.date}: expected Roman Canon ${item.expected}, got ${item.key}`);
      if (item.expected === 'christmas') assert(item.hasChristmas, 'Christmas Communicantes was not rendered');
      if (item.expected === 'epiphany') assert(item.hasEpiphany, 'Epiphany Communicantes was not rendered');
      if (item.expected === 'easter') {
        assert(item.hasEaster, 'Easter Communicantes was not rendered');
        assert(item.hasEasterOblation, 'Easter Hanc igitur was not rendered');
      }
      if (item.expected === 'ascension') assert(item.hasAscension, 'Ascension Communicantes was not rendered');
      if (item.expected === 'pentecost') assert(item.hasPentecost, 'Pentecost Communicantes was not rendered');
    }

    const renderedEasterCanon = await page.evaluate(() => {
      const date = new Date(2026, 3, 5, 9, 0, 0);
      state.currentLoc = 'KR';
      state.targetLang = 'EN';
      state.liturgicalDateContext = { date, localDate: date, leftLang: 'KR', slot: 'day' };
      state.liturgyInfo = buildGeneratedLiturgyInfo(date);
      state.isSunday = true;
      state.options.eucharist = '1';
      state.options.eucharist_song = '';
      state.autoEucharistSongKey = '';
      render();
      const text = document.querySelector('[data-part-id="eucharist"]')?.innerText || '';
      return {
        hasCommunicantes: text.includes('우리 주 그리스도께서 육신으로 부활하신'),
        hasOblation: text.includes('물과 성령으로 모든 죄를 용서하시고'),
        seasonalBlockCount: (text.match(/저희는 온 교회와 일치하여/g) || []).length
      };
    });
    assert(renderedEasterCanon.hasCommunicantes, 'Rendered Easter Roman Canon is missing its proper Communicantes');
    assert(renderedEasterCanon.hasOblation, 'Rendered Easter Roman Canon is missing its proper oblation');
    assert(renderedEasterCanon.seasonalBlockCount === 1, `Rendered Easter Roman Canon should include one seasonal block, got ${renderedEasterCanon.seasonalBlockCount}`);

    const romanCanonMultilingual = await page.evaluate(() => {
      const date = new Date(2026, 6, 14, 9, 0, 0);
      const renderPair = (left, right) => {
        state.currentLoc = left;
        state.targetLang = right;
        state.liturgicalDateContext = { date, localDate: date, leftLang: left, slot: 'day' };
        state.liturgyInfo = buildGeneratedLiturgyInfo(date);
        state.isSunday = false;
        state.options.eucharist = '1';
        state.options.eucharist_song = '';
        state.autoEucharistSongKey = '';
        render();
        return document.querySelector('[data-part-id="eucharist"]')?.innerText || '';
      };
      const vietnameseLatin = renderPair('VN', 'LA');
      const japaneseEnglish = renderPair('JP', 'EN');
      const eucharist = massData.find(item => item && item.id === '3.3 eucharist');
      const form = eucharist?.forms?.['1'] || [];
      return {
        filled: Object.fromEntries(['vn', 'la', 'jp'].map(lang => [lang,
          form.filter(line => String(line[`text_${lang}`] || '').trim()).length
        ])),
        vietnameseLatin: {
          hasVietnameseOpening: vietnameseLatin.includes('Lạy Cha rất nhân từ'),
          hasLatinOpening: vietnameseLatin.includes('TE ÍGETUR'),
          hasVietnameseInstitution: vietnameseLatin.includes('TẤT CẢ CÁC CON HÃY NHẬN LẤY MÀ ĂN'),
          hasLatinInstitution: vietnameseLatin.includes('ACCÍPITE ET MANDUCÁTE EX HOC OMNES')
        },
        japaneseEnglish: {
          hasJapaneseOpening: japaneseEnglish.includes('いつくしみ深い父よ'),
          hasJapaneseMystery: japaneseEnglish.includes('信仰の神秘'),
          hasEnglishOpening: japaneseEnglish.includes('To you, therefore, most merciful Father')
        }
      };
    });
    for (const [lang, count] of Object.entries(romanCanonMultilingual.filled)) {
      assert(count === 205, `Roman Canon ${lang.toUpperCase()} should contain 205 text rows, got ${count}`);
    }
    assert(Object.values(romanCanonMultilingual.vietnameseLatin).every(Boolean), `Rendered Vietnamese/Latin Roman Canon is incomplete: ${JSON.stringify(romanCanonMultilingual.vietnameseLatin)}`);
    assert(Object.values(romanCanonMultilingual.japaneseEnglish).every(Boolean), `Rendered Japanese/English Roman Canon is incomplete: ${JSON.stringify(romanCanonMultilingual.japaneseEnglish)}`);

    const vietnameseDirectUrls = await page.evaluate(() => {
      const date = (year, month, day) => new Date(year, month - 1, day, 9, 0, 0);
      return Promise.all([
        resolveVietnameseDailyUrls(date(2026, 7, 11), { directOnly: true }),
        resolveVietnameseDailyUrls(date(2026, 7, 12), { directOnly: true }),
        resolveVietnameseDailyUrls(date(2026, 7, 15), { directOnly: true })
      ]).then(([july11, july12, july15]) => ({ july11, july12, july15 }));
    });
    assert(vietnameseDirectUrls.july11[0].includes('thanh-be-ne-dic-to'), `7/11 Vietnamese phonetic proper URL is not first: ${JSON.stringify(vietnameseDirectUrls.july11)}`);
    assert(vietnameseDirectUrls.july11.some(url => url.includes('thu-bay-tuan-xiv-thuong-nien')), `7/11 seasonal reading URL is missing: ${JSON.stringify(vietnameseDirectUrls.july11)}`);
    assert(vietnameseDirectUrls.july12[0] === 'https://www.tonggiaophanhanoi.org/chua-nhat-xv-thuong-nien-a/', `7/12 Sunday Mass URL is wrong: ${JSON.stringify(vietnameseDirectUrls.july12)}`);
    assert(!vietnameseDirectUrls.july12.some(url => url.includes('nam-a-nam-a')), `Duplicated Sunday cycle remains: ${JSON.stringify(vietnameseDirectUrls.july12)}`);
    assert(vietnameseDirectUrls.july15[0].includes('thanh-bo-na-ven-tu-ra'), `7/15 Vietnamese phonetic proper URL is missing: ${JSON.stringify(vietnameseDirectUrls.july15)}`);
    assert(vietnameseDirectUrls.july15.some(url => url.includes('ngay-15-7-thanh-bo-na-ven-tu-ra')), `7/15 Vietnamese dated phonetic proper URL is missing: ${JSON.stringify(vietnameseDirectUrls.july15)}`);
    assert(vietnameseDirectUrls.july15.some(url => url.includes('thu-tu-tuan-xv-thuong-nien')), `7/15 seasonal reading URL is missing: ${JSON.stringify(vietnameseDirectUrls.july15)}`);

    const vietnameseTemporalFallback = await page.evaluate(() => {
      const requested = new Date(2026, 6, 16, 9, 0, 0);
      const future = (() => {
        for (let date = new Date(2032, 0, 1, 9); date.getFullYear() === 2032; date.setDate(date.getDate() + 1)) {
          const meta = getSeasonMeta(date);
          if (meta.season === 'ordinary' && meta.week === 15 && meta.day === 4 && meta.weekdayCycle === 'II') return new Date(date);
        }
        return null;
      })();
      const parsed = vietnameseTemporalFallbackParsed(requested);
      const futureParsed = future ? vietnameseTemporalFallbackParsed(future) : null;
      const source = vietnameseTemporalFallbackSources[vietnameseTemporalFallbackKey(requested)] || '';
      const directParsed = parseVietnameseDailyMass(source, requested);
      const rawLines = strictSourceLines(source);
      const scopedLines = strictScopeVietnameseByCalendarReading(getVietnameseBodyLines(rawLines), requested);
      const rawSections = strictExtractRawSections(scopedLines, 'VN', getStrictMassSelector(requested));
      return {
        key: vietnameseTemporalFallbackKey(requested),
        complete: hasCompleteVietnameseParsedMass(parsed),
        sourceMode: parsed?.sourceMode || '',
        reading: parsed?.data?.reading1?.text || parsed?.data?.reading1 || '',
        gospel: parsed?.data?.gospel?.text || parsed?.data?.gospel || '',
        futureDate: future ? formatDateIso(future) : '',
        futureComplete: hasCompleteVietnameseParsedMass(futureParsed),
        rawLineSample: rawLines.slice(0, 18),
        scopedLineSample: scopedLines.slice(0, 18),
        rawSectionKeys: Object.keys(rawSections)
        ,directKeys: Object.keys(directParsed?.data || {})
        ,directMissing: missingVietnameseDailySections(directParsed)
      };
    });
    assert(vietnameseTemporalFallback.key === 'ordinary:15:4:II' && vietnameseTemporalFallback.complete, `7/16 Vietnamese perpetual fallback is incomplete: ${JSON.stringify(vietnameseTemporalFallback)}`);
    assert(vietnameseTemporalFallback.sourceMode === 'perpetual-temporal-fallback' && /Isaia|Is 26/i.test(vietnameseTemporalFallback.reading) && /Giêsu|Mt 11/i.test(vietnameseTemporalFallback.gospel), `7/16 Vietnamese fallback content is wrong: ${JSON.stringify(vietnameseTemporalFallback)}`);
    assert(vietnameseTemporalFallback.futureDate && vietnameseTemporalFallback.futureComplete, `Vietnamese fallback was hard-coded to 2026: ${JSON.stringify(vietnameseTemporalFallback)}`);

    const desktopVietnamRouting = await page.evaluate(() => ({
      bangkok: gpsLanguageForTimeZone('Asia/Bangkok'),
      hoChiMinh: gpsLanguageForTimeZone('Asia/Ho_Chi_Minh'),
      seoul: gpsLanguageForTimeZone('Asia/Seoul')
    }));
    assert(desktopVietnamRouting.bangkok === 'VN' && desktopVietnamRouting.hoChiMinh === 'VN' && desktopVietnamRouting.seoul === 'KR', `Desktop Vietnam timezone routing is wrong: ${JSON.stringify(desktopVietnamRouting)}`);

    const vietnameseSplitSourceComposition = await page.evaluate(async () => {
      const date = new Date(2037, 10, 24, 9, 0, 0);
      const properTitle = vietnameseLookupTitle(date);
      const seasonalTitle = vietnameseSeasonalLookupTitle(date);
      const properParsed = {
        title: properTitle,
        color: 'red',
        data: {
          entrance: 'proper entrance',
          collect: 'proper collect',
          prayer_after: 'proper prayer after communion'
        }
      };
      const readingParsed = {
        title: seasonalTitle,
        color: 'green',
        data: {
          entrance: 'seasonal entrance',
          collect: 'seasonal collect',
          reading1: 'weekday first reading',
          psalm: 'weekday psalm',
          gospel_accl: 'weekday acclamation',
          gospel: 'weekday gospel',
          prayer_offerings: 'seasonal prayer over offerings',
          communion: 'seasonal communion',
          prayer_after: 'seasonal prayer after communion'
        }
      };
      const properUrl = `https://www.tonggiaophanhanoi.org/${slugifyVietnamese(properTitle)}/`;
      const merged = mergeVietnameseProperPartialWithReadings(readingParsed, properParsed);
      const urls = await resolveVietnameseDailyUrls(date, { directOnly: true });
      const prioritizedUrls = urls.slice();
      prioritizeVietnameseSeasonalReadingUrl(prioritizedUrls, 0, date);
      return {
        priority: hasPriorityCelebrationForLookup(date, buildGeneratedLiturgyInfo(date)),
        properClassified: vietnameseParsedLooksLikeProperSource(properParsed, properUrl, date),
        properTitle,
        properSlug: slugifyVietnamese(properTitle),
        seasonalTitle,
        seasonalSlug: slugifyVietnamese(seasonalTitle),
        urls,
        prioritizedUrls,
        mergedTitle: merged.title,
        mergedColor: merged.color,
        entrance: merged.data.entrance,
        collect: merged.data.collect,
        reading1: merged.data.reading1,
        gospel: merged.data.gospel,
        offerings: merged.data.prayer_offerings,
        prayerAfter: merged.data.prayer_after,
        complete: hasCompleteVietnameseParsedMass(merged)
      };
    });
    assert(vietnameseSplitSourceComposition.priority && vietnameseSplitSourceComposition.properClassified, `Future Vietnamese proper source was not classified generically: ${JSON.stringify(vietnameseSplitSourceComposition)}`);
    assert(vietnameseSplitSourceComposition.urls[0].includes(vietnameseSplitSourceComposition.properSlug), `Future Vietnamese proper URL is not first: ${JSON.stringify(vietnameseSplitSourceComposition)}`);
    assert(vietnameseSplitSourceComposition.prioritizedUrls[1].includes(vietnameseSplitSourceComposition.seasonalSlug), `Vietnamese seasonal reading URL was not moved directly after a successful proper source: ${JSON.stringify(vietnameseSplitSourceComposition)}`);
    assert(vietnameseSplitSourceComposition.entrance === 'proper entrance' && vietnameseSplitSourceComposition.collect === 'proper collect' && vietnameseSplitSourceComposition.prayerAfter === 'proper prayer after communion', `Vietnamese proper sections did not override the weekday source: ${JSON.stringify(vietnameseSplitSourceComposition)}`);
    assert(vietnameseSplitSourceComposition.reading1 === 'weekday first reading' && vietnameseSplitSourceComposition.gospel === 'weekday gospel' && vietnameseSplitSourceComposition.offerings === 'seasonal prayer over offerings' && vietnameseSplitSourceComposition.complete, `Vietnamese weekday readings were not retained in the combined Mass: ${JSON.stringify(vietnameseSplitSourceComposition)}`);

    const vietnameseProperPrayerBoundaries = await page.evaluate(() => {
      const source = [
        'Title: Ngày 15/7: Thánh Bônaventura',
        'URL Source: https://www.tonggiaophanhanoi.org/ngay-15-7-thanh-bo-na-ven-tu-ra-giam-muc-tien-si-hoi-thanh/',
        'Markdown Content:',
        'Bậc lễ: Nhớ',
        'Ca nhập lễ',
        'Người công chính nói lời khôn ngoan.',
        'Lời nguyện nhập lễ',
        'Lạy Thiên Chúa toàn năng, xin cho chúng con noi gương thánh Bônaventura. Chúng con cầu xin… Bài đọc Phụng vụ Lời Chúa – (theo ngày trong tuần)',
        'Lời nguyện tiến lễ',
        'Lạy Chúa, xin chấp nhận lễ vật chúng con dâng. Chúng con cầu xin…',
        'Ca hiệp lễ',
        'Ai ăn thịt và uống máu tôi thì ở lại trong tôi.',
        'Lời nguyện hiệp lễ',
        'Lạy Chúa, xin cho bí tích đã lãnh nhận đổi mới chúng con. Chúng con cầu xin… Post Views:2.946 Tìm kiếm Tìm kiếm LỄ KÍNH CÁC THÁNH Tháng 1 Ngày 01/01'
      ].join('\n');
      const parsed = parseVietnameseDailyMass(source, new Date(2026, 6, 15, 9, 0, 0));
      const strictCollect = strictParsePrayerOrAntiphon('VN', 'collect', {
        heading: 'Lời nguyện nhập lễ',
        lines: ['Lạy Thiên Chúa toàn năng, xin cho chúng con noi gương thánh Bônaventura. Chúng con cầu xin… Bài đọc Phụng vụ Lời Chúa – (theo ngày trong tuần)']
      });
      const joinedBody = normalizePrayerParsedLinesBeforeApply('vn', 'collect', [
        { sp: '', text: 'Lạy Chúa, đây là câu thứ nhất.' },
        { sp: '', text: 'Đây là câu thứ hai.' },
        { sp: '', text: 'Chúng con cầu xin nhờ Đức Giê-su Ki-tô Con Chúa, Thiên Chúa và là Chúa chúng con, Người hằng sống và hiển trị cùng Chúa, hiệp nhất với Chúa Thánh Thần đến muôn thuở muôn đời.' }
      ]);
      const magdaleneCollect = strictParsePrayerOrAntiphon('VN', 'collect', {
        heading: 'Lời nguyện nhập lễ',
        lines: ['Lạy Chúa Cha hằng hữu, xin cho chúng con loan báo mầu nhiệm Phục Sinh để được chiêm ngưỡng Chúa Ki-tô là Thiên Chúa hằng sống và hiển trị cùng Chúa hiệp nhất với Chúa Thánh Thần đến muôn thuở muôn đời.']
      });
      const magdaleneAfter = strictParsePrayerOrAntiphon('VN', 'prayer_after', {
        heading: 'Lời nguyện hiệp lễ',
        lines: ['Lạy Chúa, xin liên kết chúng con với Đức Ki-tô, Con Một Chúa Ðấng hằng sống và hiển trị muôn đời.']
      });
      const prayerItem = {
        id: 'fixture collect',
        type: 'part',
        header: {},
        lines: [makePrayerOpenerLine(), emptyMassLine(), makePrayerAmenLine()]
      };
      const generatedChoice = ensureDailySelectableVariants(prayerItem, {
        kr_lines: [
          { sp: '', text: '첫째 기도문입니다.' },
          { sp: '', text: 'Or:' },
          { sp: '', text: '둘째 기도문입니다.' }
        ]
      }, 'collect');
      const collapsedChoice = ensureDailySelectableVariants(prayerItem, {
        kr_lines: [
          { sp: '', text: '오늘의 하나뿐인 기도문입니다.' },
          { sp: '', text: '성자께서는 성부와 성령과 함께 천주로서 영원히 살아 계시며 다스리시나이다.' }
        ]
      }, 'collect');
      const sections = {};
      ['collect', 'prayer_offerings', 'prayer_after'].forEach(key => {
        const section = parsed.data[key] || {};
        const lines = normalizePrayerParsedLinesBeforeApply('vn', key, section.lines || []);
        sections[key] = {
          text: section.text || '',
          lines: lines.map(line => ({ text: line.text || '', role: line.role || '' })),
          conclusions: lines.filter(line => line.role === 'conclusion').length
        };
      });
      state.currentLoc = 'KR';
      state.targetLang = 'VN';
      const sourceChoiceLine = {
        text_kr: '주님, 이 예물을 받아들이소서.',
        text_vn: '',
        __sourceChoiceOriginal: true,
        __clearedDisplayLanguages: { vn: true }
      };
      const aiSource = fallbackSourceTextForLine(sourceChoiceLine, 'vn', 'prayer_offerings');
      return {
        sections,
        strictCollect: {
          text: strictCollect.text || '',
          lines: (strictCollect.lines || []).map(line => ({ text: line.text || '', role: line.role || '' }))
        },
        joinedBody: joinedBody.map(line => ({ text: line.text || '', role: line.role || '' })),
        magdaleneCollect: (magdaleneCollect.lines || []).map(line => ({ text: line.text || '', role: line.role || '' })),
        magdaleneAfter: (magdaleneAfter.lines || []).map(line => ({ text: line.text || '', role: line.role || '' })),
        stalePrayerChoice: {
          generatedChoice,
          collapsedChoice,
          type: prayerItem.type,
          variantCount: Object.keys(prayerItem.variants || {}).length
        },
        sourceChoiceAiSuppressed: shouldSuppressAIFallbackForLine(sourceChoiceLine, 'prayer_offerings', 'vn'),
        aiSource,
        aiButton: makeAIButton(aiSource, '', 'VN')
      };
    });
    const properPrayerText = Object.values(vietnameseProperPrayerBoundaries.sections).map(section => section.text).join(' ');
    assert(!/Bài đọc|Phụng vụ Lời Chúa/.test(properPrayerText), `Vietnamese liturgical reading directives leaked into a prayer: ${JSON.stringify(vietnameseProperPrayerBoundaries)}`);
    assert(!/Post Views|Tìm kiếm|LỄ KÍNH CÁC THÁNH/.test(properPrayerText), `Vietnamese article footer leaked into a prayer: ${JSON.stringify(vietnameseProperPrayerBoundaries)}`);
    assert(Object.values(vietnameseProperPrayerBoundaries.sections).every(section => section.conclusions === 1 && section.lines.length === 2), `Vietnamese prayer conclusions were not split from their bodies: ${JSON.stringify(vietnameseProperPrayerBoundaries)}`);
    assert(vietnameseProperPrayerBoundaries.sections.collect.lines[1].text.includes('Đức Giê-su Ki-tô Con Chúa') && vietnameseProperPrayerBoundaries.sections.prayer_offerings.lines[1].text === 'Chúng con cầu xin nhờ Đức Ki-tô, Chúa chúng con.' && vietnameseProperPrayerBoundaries.sections.prayer_after.lines[1].text === 'Chúng con cầu xin nhờ Đức Ki-tô, Chúa chúng con.', `Vietnamese abbreviated prayer endings were expanded incorrectly: ${JSON.stringify(vietnameseProperPrayerBoundaries)}`);
    assert(!/Bài đọc|Phụng vụ Lời Chúa/.test(vietnameseProperPrayerBoundaries.strictCollect.text) && vietnameseProperPrayerBoundaries.strictCollect.lines.length === 2 && vietnameseProperPrayerBoundaries.strictCollect.lines[1].text.includes('Đức Giê-su Ki-tô Con Chúa'), `Strict Vietnamese proper parser did not trim the inline reading directive and split the collect conclusion: ${JSON.stringify(vietnameseProperPrayerBoundaries)}`);
    assert(vietnameseProperPrayerBoundaries.joinedBody.length === 2 && vietnameseProperPrayerBoundaries.joinedBody[0].text.includes('câu thứ nhất. Đây là câu thứ hai.') && vietnameseProperPrayerBoundaries.joinedBody[1].role === 'conclusion', `Prayer body sentences were not merged into one paragraph: ${JSON.stringify(vietnameseProperPrayerBoundaries)}`);
    assert(vietnameseProperPrayerBoundaries.magdaleneCollect.length === 2 && vietnameseProperPrayerBoundaries.magdaleneCollect[1].text.startsWith('Chúa Ki-tô là Thiên Chúa') && vietnameseProperPrayerBoundaries.magdaleneAfter.length === 2 && /Con Một Chúa Ðấng hằng sống/.test(vietnameseProperPrayerBoundaries.magdaleneAfter[1].text), `Vietnamese proper prayer conclusions were not separated: ${JSON.stringify(vietnameseProperPrayerBoundaries)}`);
    assert(vietnameseProperPrayerBoundaries.stalePrayerChoice.generatedChoice && !vietnameseProperPrayerBoundaries.stalePrayerChoice.collapsedChoice && vietnameseProperPrayerBoundaries.stalePrayerChoice.type === 'part' && vietnameseProperPrayerBoundaries.stalePrayerChoice.variantCount === 0, `A stale prayer option selector was not removed on a single-prayer day: ${JSON.stringify(vietnameseProperPrayerBoundaries)}`);
    assert(!vietnameseProperPrayerBoundaries.sourceChoiceAiSuppressed && vietnameseProperPrayerBoundaries.aiSource === '주님, 이 예물을 받아들이소서.' && /btn-ai-trans/.test(vietnameseProperPrayerBoundaries.aiButton), `Prayer source choices should expose an AI translation button in the empty column: ${JSON.stringify(vietnameseProperPrayerBoundaries)}`);

    const july12EntranceSourceChoice = await page.evaluate(() => {
      state.currentLoc = 'KR';
      state.targetLang = 'VN';
      const date = new Date(2026, 6, 12, 9, 0, 0);
      state.liturgicalDateContext = { date, localDate: date, leftLang: 'KR', slot: 'day' };
      const data = {
        cit: { cit_kr: '시편 17(16),15 참조', cit_vn: 'Tv 16,15' },
        lines: [{
          text_kr: '저는 의로움으로 당신 얼굴 뵈옵고, 당신 영광 드러날 때 흡족하리이다.',
          text_vn: 'Phần tôi, nhờ công chính, tôi sẽ được nhìn thấy thánh nhan Chúa, tôi sẽ được no thoả khi Chúa tỏ bầy sự vinh quang của Chúa.'
        }]
      };
      return {
        koreanStarts: citationStartsForCompare(data.cit.cit_kr),
        vietnameseStarts: citationStartsForCompare(data.cit.cit_vn),
        citationsDifferent: citationsAreDifferent(data.cit.cit_kr, data.cit.cit_vn),
        mismatchIndexes: sourceChoiceMismatchIndexes(data.lines, 'entrance', data, 'kr', 'vn'),
        sourceChoice: buildSourceChoiceDisplayData(data, 'entrance', 'kr', 'vn')
      };
    });
    assert(!july12EntranceSourceChoice.citationsDifferent, `Dual-numbered Psalm citation was treated as different: ${JSON.stringify(july12EntranceSourceChoice)}`);
    assert(july12EntranceSourceChoice.mismatchIndexes.length === 0 && july12EntranceSourceChoice.sourceChoice === null, `7/12 entrance antiphon was split into duplicate source choices: ${JSON.stringify(july12EntranceSourceChoice)}`);

    const distinctSourceVariantLabels = await page.evaluate(() => {
      state.currentLoc = 'KR';
      state.targetLang = 'VN';
      const groups = [{ kr: 0 }, { kr: 1 }, { vn: 0 }];
      return groups.map((group, index) => dailyVariantLabelForAlignment(group, index, groups, 'entrance'));
    });
    assert(JSON.stringify(distinctSourceVariantLabels.map(label => label.kr)) === JSON.stringify(['한국어 원문 1', '한국어 원문 2', '베트남어 원문']), `Distinct Korean/Vietnamese source labels are incorrect: ${JSON.stringify(distinctSourceVariantLabels)}`);
    assert(JSON.stringify(distinctSourceVariantLabels.map(label => label.vn)) === JSON.stringify(['Nguyên bản tiếng Hàn 1', 'Nguyên bản tiếng Hàn 2', 'Nguyên bản tiếng Việt']), `Localized distinct source labels are incorrect: ${JSON.stringify(distinctSourceVariantLabels)}`);

    const englishSourceVariantLabels = await page.evaluate(() => {
      state.currentLoc = 'KR';
      state.targetLang = 'EN';
      const groups = [{ kr: 0 }, { en: 0 }, { en: 1 }];
      return groups.map((group, index) => dailyVariantLabelForAlignment(group, index, groups, 'communion'));
    });
    assert(JSON.stringify(englishSourceVariantLabels.map(label => label.kr)) === JSON.stringify(['한국어 원문', '영어 원문 1', '영어 원문 2']), `English source labels are incorrect: ${JSON.stringify(englishSourceVariantLabels)}`);

    const englishIbreviaryEntranceChoices = await page.evaluate(() => {
      const parsed = parseIbreviaryAntiphonAndCollect('EN', [
        'Title: iBreviary',
        'URL Source: https://www.ibreviary.com/m2/letture.php',
        'Markdown Content:',
        '[Common of Doctors of the Church]',
        'Cf. Sir 15: 5',
        'In the midst of the Church he opened his mouth, and the Lord filled him with wisdom.',
        'Or: Ps 37 (36): 30-31',
        'The mouth of the just man utters wisdom.',
        '[Schema 2]',
        'Cf. Dn 12: 3',
        'Those who are wise will shine brightly like the stars for ever.',
        'Or: Cf. Sir 44: 15, 14',
        'Let the peoples recount the wisdom of the Saints, and let the Church proclaim their praise.',
        'Grant, we pray, almighty God, that we may imitate the ardor of Saint Bonaventure.',
        'Through our Lord Jesus Christ, your Son.'
      ].join('\n'));
      const entrance = parsed.entrance || {};
      return {
        optionCount: splitParsedAlternatives(entrance.lines || []).length,
        text: entrance.text || '',
        citationCount: (entrance.optionCits || []).length
      };
    });
    assert(englishIbreviaryEntranceChoices.optionCount === 4 && englishIbreviaryEntranceChoices.citationCount === 4, `iBreviary bracketed English entrance choices were not split correctly: ${JSON.stringify(englishIbreviaryEntranceChoices)}`);
    assert(!/Common of Doctors|Schema 2|\[|\]/.test(englishIbreviaryEntranceChoices.text), `iBreviary entrance metadata leaked into the antiphon body: ${JSON.stringify(englishIbreviaryEntranceChoices)}`);

    const ibreviaryOfferingChoices = await page.evaluate(() => {
      const english = parseIbreviaryOfferings('EN', [
        'Title: iBreviary',
        'URL Source: https://www.ibreviary.com/m2/letture.php',
        'Markdown Content:',
        'Prayer over the Offerings',
        '[Common of Doctors of the Church] May the sacrifice which we gladly present on the feast day of blessed Bonaventure, be pleasing to you, O God. Through Christ our Lord. [Schema 2] As we celebrate the divine mysteries, O Lord, we pray, may the Holy Spirit fill us with the light of faith. Through Christ our Lord. [Common of Pastors] Look with favor, O Lord, on the offerings we set upon this sacred altar. Through Christ our Lord. [Schema 2] Receive, O Lord, these offerings of your people. Through Christ our Lord. Preface of Holy Pastors.'
      ].join('\n')).prayer_offerings;
      const latin = parseIbreviaryOfferings('LA', [
        'Title: iBreviary',
        'URL Source: https://www.ibreviary.com/m2/letture.php',
        'Markdown Content:',
        'Super oblata',
        'Pro doctoribus [Schema 1] Sacrifícium tibi pláceat, Deus, in festivitáte beáti Bonaventúræ libénter exhíbitum. Per Christum Dóminum nostrum. [Schema 2] Illa nos, quǽsumus, Dómine, divína tractántes, Spíritus Sanctus fídei luce perfúndat. Per Christum Dóminum nostrum. Pro pastoribus [Schema 1] Hóstias, quǽsumus, Dómine, propítius réspice. Per Christum Dóminum nostrum. [Schema 2] Súscipe, Dómine, hæc múnera pópuli tui. Per Christum Dóminum nostrum. Præfatio de Sanctis Pastoribus.'
      ].join('\n')).prayer_offerings;
      const summarize = section => {
        const options = splitParsedAlternatives(section?.lines || []);
        return {
          optionCount: options.length,
          texts: options.map(option => option.map(line => line.text || '').join(' ')),
          roles: options.map(option => option.map(line => line.role || '')),
          fullText: section?.text || ''
        };
      };
      return { english: summarize(english), latin: summarize(latin) };
    });
    assert(ibreviaryOfferingChoices.english.optionCount === 4 && ibreviaryOfferingChoices.latin.optionCount === 4, `iBreviary English/Latin offering prayers were not split into four proper choices: ${JSON.stringify(ibreviaryOfferingChoices)}`);
    assert(ibreviaryOfferingChoices.english.texts.every(text => text.endsWith('Through Christ our Lord.')) && ibreviaryOfferingChoices.latin.texts.every(text => text.endsWith('Per Christum Dóminum nostrum.')), `iBreviary offering-prayer conclusions were not split consistently: ${JSON.stringify(ibreviaryOfferingChoices)}`);
    assert(!/Common of|Schema|Preface of|Pro doctoribus|Pro pastoribus|Præfatio de/.test(`${ibreviaryOfferingChoices.english.fullText} ${ibreviaryOfferingChoices.latin.fullText}`), `iBreviary offering rubrics leaked into prayer text: ${JSON.stringify(ibreviaryOfferingChoices)}`);

    const unpairedOfferingAlignment = await page.evaluate(() => {
      const prayer = text => [parsedLine('', text, 'body')];
      const optionMap = {
        kr: [prayer('주님, 이 예물을 굽어보소서. 우리 주 그리스도를 통하여 비나이다.')],
        en: [
          prayer('May the sacrifice which we present be pleasing to you. Through Christ our Lord.'),
          prayer('Fill us with the light of faith. Through Christ our Lord.'),
          prayer('Look with favor on these offerings. Through Christ our Lord.'),
          prayer('Receive these gifts of your people. Through Christ our Lord.')
        ]
      };
      const alignment = buildFallbackVariantAlignment('prayer_offerings', optionMap, {});
      return {
        alignment,
        semanticKeys: optionMap.en.map(option => variantSemanticKey('prayer_offerings', variantOptionMeaningText('prayer_offerings', option))),
        labels: alignment.map((group, index) => dailyVariantLabelForAlignment(group, index, alignment, 'prayer_offerings').kr)
      };
    });
    assert(unpairedOfferingAlignment.alignment.length === 5 && unpairedOfferingAlignment.alignment.every(group => !(Number.isInteger(group.kr) && Number.isInteger(group.en))), `Offering prayers with only a shared conclusion were falsely aligned: ${JSON.stringify(unpairedOfferingAlignment)}`);
    assert(unpairedOfferingAlignment.semanticKeys.every(key => !key), `A standard prayer conclusion was treated as semantic equivalence: ${JSON.stringify(unpairedOfferingAlignment)}`);
    assert(JSON.stringify(unpairedOfferingAlignment.labels) === JSON.stringify(['한국어 원문', '영어 원문 1', '영어 원문 2', '영어 원문 3', '영어 원문 4']), `Unpaired offering source labels are incorrect: ${JSON.stringify(unpairedOfferingAlignment)}`);

    const singleVariantHeaderControls = await page.evaluate(() => {
      const line = parsedLine('', '한 개뿐인 전례문', 'body');
      const single = genHeaderControls({
        type: 'selectable',
        variants: { A: { label: dailyVariantLabel(0), lines: [line] } }
      }, 'entrance', 'KR');
      const multiple = genHeaderControls({
        type: 'selectable',
        variants: {
          A: { label: dailyVariantLabel(0), lines: [line] },
          B: { label: dailyVariantLabel(1), lines: [line] }
        }
      }, 'entrance', 'KR');
      return {
        singleSelect: single.selectHtml,
        multipleOptionCount: (multiple.selectHtml.match(/<option\b/g) || []).length
      };
    });
    assert(!singleVariantHeaderControls.singleSelect && singleVariantHeaderControls.multipleOptionCount === 2, `Single-choice liturgy headers should hide the default selector: ${JSON.stringify(singleVariantHeaderControls)}`);

    const july12GospelAlternatives = await page.evaluate(() => {
      const parsed = parseVietnameseReadingLines([
        'Kìa, có người gieo giống đi gieo lúa',
        'Tin Mừng Chúa Giêsu Kitô theo Thánh Matthêu.',
        'Ngày ấy, Chúa Giêsu nói dụ ngôn người gieo giống. [Các môn đệ đến gần và Người giải thích dụ ngôn.]'
      ], true);
      const options = splitParsedAlternatives(parsed);
      const curlyParsed = parseVietnameseReadingLines([
        'Tin Mừng Chúa Giêsu Kitô theo Thánh Matthêu.',
        'Chúa Giêsu bắt đầu giảng dạy. {Đoạn này chỉ đọc trong bài Tin Mừng dài.} Người tiếp tục lên đường.'
      ], true);
      const curlyOptions = splitParsedAlternatives(curlyParsed);
      const citations = vietnameseGospelOptionCitations('Mt 13, 1-9 {hoặc 1-23}', parsed);
      const koreanShort = normalizeGospelAlternativeOption([parsedLine('', '<씨 뿌리는 사람이 씨를 뿌리러 나갔다.>\n✠ 마태오가 전한 거룩한 복음입니다.\n그날 예수님께서 말씀하셨다.', 'body')], 'kr');
      const alignment = buildFallbackVariantAlignment('gospel_accl', {
        kr: [[parsedLine('', '씨앗은 하느님의 말씀, 씨 뿌리는 이는 그리스도이시다.')]],
        vn: [
          [parsedLine('', 'Chúa phán: Lời Cha là chân lý; xin hãy thánh hoá chúng trong sự thật.')],
          [parsedLine('', 'Hạt giống là lời Thiên Chúa, người gieo giống là Đức Ki-tô.')]
        ]
      });
      const wrapped = [];
      pushVietnameseAcclamationContent(wrapped, 'Alleluia, alleluia! Hạt giống là lời Thiên Chúa, người gieo giống là Đức Ki-tô. Alleluia.', 'Mọi người');
      const gospelVariants = {
        A: { label: dailyVariantLabel(0), lines: [{ role_kr: 'body', text_kr: '긴 복음 본문 '.repeat(30) }] },
        B: { label: dailyVariantLabel(1), lines: [{ role_kr: 'body', text_kr: '짧은 복음 본문' }] }
      };
      applyGospelLengthVariantLabels(gospelVariants);
      const priorGospelState = {
        option: state.options.gospel,
        key: state.autoGospelVariantKey,
        signature: state.autoGospelVariantSignature
      };
      state.options.gospel = 'A';
      state.autoGospelVariantKey = '';
      state.autoGospelVariantSignature = '';
      preferShortGospelVariant(gospelVariants);
      const shortDefault = state.options.gospel;
      const shortKey = Object.keys(gospelVariants).find(key => gospelVariants[key].label.kr === '짧은 복음');
      const longKey = Object.keys(gospelVariants).find(key => gospelVariants[key].label.kr === '긴 복음');
      state.options.gospel = longKey;
      preferShortGospelVariant(gospelVariants);
      const manualLongPreserved = state.options.gospel === longKey;
      state.options.gospel = priorGospelState.option;
      state.autoGospelVariantKey = priorGospelState.key;
      state.autoGospelVariantSignature = priorGospelState.signature;
      return {
        optionCount: options.length,
        longText: variantOptionMeaningText('gospel', options[0]),
        shortText: variantOptionMeaningText('gospel', options[1]),
        curlyOptionCount: curlyOptions.length,
        curlyLongText: variantOptionMeaningText('gospel', curlyOptions[0]),
        curlyShortText: variantOptionMeaningText('gospel', curlyOptions[1]),
        citations,
        koreanShortBody: koreanShort.map(line => line.text).join('\n'),
        alignment,
        wrappedLines: wrapped.map(line => line.text),
        shortDefault,
        shortKey,
        manualLongPreserved
      };
    });
    assert(july12GospelAlternatives.optionCount === 2, `Vietnamese bracketed Gospel did not create long/short options: ${JSON.stringify(july12GospelAlternatives)}`);
    assert(!july12GospelAlternatives.longText.includes('[') && july12GospelAlternatives.longText.includes('Các môn đệ'), `Vietnamese long Gospel brackets were not normalized: ${JSON.stringify(july12GospelAlternatives)}`);
    assert(!july12GospelAlternatives.shortText.includes('Các môn đệ'), `Vietnamese short Gospel kept bracketed verses: ${JSON.stringify(july12GospelAlternatives)}`);
    assert(july12GospelAlternatives.curlyOptionCount === 2, `Vietnamese brace-marked Gospel did not create long/short options: ${JSON.stringify(july12GospelAlternatives)}`);
    assert(!/[{}]/.test(july12GospelAlternatives.curlyLongText) && july12GospelAlternatives.curlyLongText.includes('Đoạn này chỉ đọc'), `Vietnamese long Gospel braces were not normalized: ${JSON.stringify(july12GospelAlternatives)}`);
    assert(!july12GospelAlternatives.curlyShortText.includes('Đoạn này chỉ đọc'), `Vietnamese short Gospel kept brace-marked verses: ${JSON.stringify(july12GospelAlternatives)}`);
    assert(july12GospelAlternatives.citations[0]?.cit_vn === 'Mt 13, 1-23' && july12GospelAlternatives.citations[1]?.cit_vn === 'Mt 13, 1-9', `Vietnamese Gospel citations were not split: ${JSON.stringify(july12GospelAlternatives)}`);
    assert(!july12GospelAlternatives.koreanShortBody.includes('마태오가 전한 거룩한 복음입니다') && !july12GospelAlternatives.koreanShortBody.includes('<'), `Korean short Gospel repeated its summary/intro: ${JSON.stringify(july12GospelAlternatives)}`);
    assert(july12GospelAlternatives.alignment[0]?.kr === 0 && july12GospelAlternatives.alignment[0]?.vn === 1, `Gospel acclamation did not keep the Korean source first with the matching Vietnamese option: ${JSON.stringify(july12GospelAlternatives)}`);
    assert(july12GospelAlternatives.wrappedLines.length === 3, `Wrapped Vietnamese Alleluia was not split into response/verse/response: ${JSON.stringify(july12GospelAlternatives)}`);
    assert(july12GospelAlternatives.shortDefault === july12GospelAlternatives.shortKey && july12GospelAlternatives.manualLongPreserved, `Short Gospel was not selected by default or a manual long-Gospel choice was overwritten: ${JSON.stringify(july12GospelAlternatives)}`);

    const citationAlignedAcclamation = await page.evaluate(() => {
      state.currentLoc = 'KR';
      state.targetLang = 'VN';
      const optionMap = {
        kr: [[parsedLine('', '주님이 말씀하신다. 내 말 안에 머무르면 참으로 나의 제자가 되리라.')]],
        vn: [
          [parsedLine('', 'Lạy Cha là Chúa trời đất, chúc tụng Cha.')],
          [parsedLine('', 'Chúa nói: Nếu các con ở trong lời Thầy, các con sẽ thật là môn đệ Thầy.')]
        ]
      };
      const section = {
        cit_kr: '요한 8,31 참조',
        optionCits_vn: [{ cit_vn: 'Mt 11,25' }, { cit_vn: 'Ga 8,31' }]
      };
      const forced = buildLeftCitationFirstAlignment('gospel_accl', section, optionMap);
      const alignment = buildFallbackVariantAlignment('gospel_accl', optionMap, section);
      return {
        forced,
        alignment,
        labels: alignment.map((group, index) => dailyVariantLabelForAlignment(group, index, alignment, 'gospel_accl'))
      };
    });
    assert(citationAlignedAcclamation.forced.length === 0 && citationAlignedAcclamation.alignment[0]?.kr === 0 && citationAlignedAcclamation.alignment[0]?.vn === 1, `Matching Korean and Vietnamese Gospel acclamations were not paired by citation: ${JSON.stringify(citationAlignedAcclamation)}`);
    assert(JSON.stringify(citationAlignedAcclamation.labels.map(label => label.kr)) === JSON.stringify(['한국어 원문', '베트남어 원문 1']), `Paired Gospel acclamation source labels are incorrect: ${JSON.stringify(citationAlignedAcclamation)}`);

    const semanticAlignedAcclamation = await page.evaluate(() => {
      state.currentLoc = 'KR';
      state.targetLang = 'VN';
      const optionMap = {
        kr: [[parsedLine('', '하늘과 땅의 주님이신 아버지, 찬미받으소서. 아버지는 하늘 나라의 신비를 철부지들에게 드러내 보이셨나이다.')]],
        vn: [
          [parsedLine('', 'Ước chi hôm nay các bạn nghe tiếng Chúa và đừng cứng lòng.')],
          [parsedLine('', 'Lạy Cha là Chúa Tể trời đất, con xin ngợi khen Cha, vì Cha đã mạc khải mầu nhiệm Nước Trời cho những người bé mọn.')]
        ]
      };
      const alignment = buildFallbackVariantAlignment('gospel_accl', optionMap, {
        cit_kr: '마태 11,25 참조',
        optionCits_vn: [{ cit_vn: 'Tv 94,8' }, {}]
      });
      const forced = buildLeftCitationFirstAlignment('gospel_accl', { cit_kr: '마태 11,25 참조', cit_vn: 'Tv 94,8' }, optionMap);
      return { alignment, forced };
    });
    assert(semanticAlignedAcclamation.forced.length === 0 && semanticAlignedAcclamation.alignment[0]?.kr === 0 && semanticAlignedAcclamation.alignment[0]?.vn === 1, `Uncited translated Gospel acclamation was not paired by liturgical meaning: ${JSON.stringify(semanticAlignedAcclamation)}`);

    const alternatePsalmNumberingAlignment = await page.evaluate(() => {
      state.currentLoc = 'KR';
      state.targetLang = 'VN';
      const optionMap = {
        kr: [
          [parsedLine('', '당신 기적들 기억하게 하시니, 주님은 너그럽고 자비로우시다. 당신 경외하는 이들에게 양식을 주신다.')],
          [parsedLine('', '주님이 말씀하신다. 보라, 내가 문 앞에 서서 문을 두드리고 있다.')]
        ],
        vn: [
          [parsedLine('', 'Chúa đã làm những điều lạ lùng đáng ghi nhớ; Người đã ban lương thực cho những ai tôn sợ Người.')],
          [parsedLine('', 'Chúa phán: Này Ta đứng ngoài cửa Ta gõ cửa.')]
        ]
      };
      const section = {
        optionCits_kr: [{ cit_kr: '시편 111(110),4-5' }, { cit_kr: '묵시 3,20 참조' }],
        optionCits_vn: [{ cit_vn: 'Tv 110,4-5' }, { cit_vn: 'Kh 3,20' }]
      };
      return buildFallbackVariantAlignment('communion', optionMap, section);
    });
    assert(
      alternatePsalmNumberingAlignment[0]?.kr === 0
        && alternatePsalmNumberingAlignment[0]?.vn === 0
        && alternatePsalmNumberingAlignment[1]?.kr === 1
        && alternatePsalmNumberingAlignment[1]?.vn === 1,
      `Korean/Vietnamese Communion antiphons split on alternate Psalm numbering: ${JSON.stringify(alternatePsalmNumberingAlignment)}`
    );

    const inferredSourceVariantLabels = await page.evaluate(() => {
      state.currentLoc = 'KR';
      state.targetLang = 'VN';
      const variants = {
        A: { label: {}, lines: [{ text_kr: '첫째 한국어 입당송' }] },
        B: { label: {}, lines: [{ text_kr: '둘째 한국어 입당송' }] },
        C: { label: {}, lines: [{ text_vn: 'Ca nhập lễ tiếng Việt' }] }
      };
      applyDailySourceVariantLabels(variants, 'entrance');
      return Object.values(variants).map(variant => variant.label);
    });
    assert(JSON.stringify(inferredSourceVariantLabels.map(label => label.kr)) === JSON.stringify(['한국어 원문 1', '한국어 원문 2', '베트남어 원문']), `Rendered source labels were not inferred from the actual option language: ${JSON.stringify(inferredSourceVariantLabels)}`);

    const eucharisticNamePlaceholders = await page.evaluate(() => {
      const full = formatDynamicLineText('Remember, Lord, your servants [Person Name]. and [the Other Person Name].', 'en');
      const short = formatDynamicLineText('Remember also, Lord, your servants [Person N.] and [the Other Person N.],', 'en');
      return { full, short };
    });
    assert((eucharisticNamePlaceholders.full.match(/muted-name-placeholder/g) || []).length === 2, `Full English Eucharistic Prayer name placeholders are not bold: ${JSON.stringify(eucharisticNamePlaceholders)}`);
    assert((eucharisticNamePlaceholders.short.match(/muted-name-placeholder/g) || []).length === 2, `Abbreviated English Eucharistic Prayer name placeholders are not bold: ${JSON.stringify(eucharisticNamePlaceholders)}`);

    const gpsDiocesanBishops = await page.evaluate(() => {
      const previousContext = state.bishopContext;
      const previousDiocese = state.gpsDiocese;
      const renderFixture = context => {
        state.bishopContext = context;
        return plainTextFromHtml(formatDynamicLineText('교황 [교황명]와 저희 주교 [주교명]와 (협력주교들과)', 'kr'));
      };
      const seoul = renderFixture(bishopContextForDiocese('서울대교구'));
      const suwon = renderFixture(bishopContextForDiocese('수원교구'));
      const daejeon = renderFixture(bishopContextForDiocese('대전교구'));
      const daegu = renderFixture(bishopContextForDiocese('대구대교구'));
      const baRia = renderFixture(bishopContextForDiocese('Giáo phận Bà Rịa'));
      state.bishopContext = null;
      const unresolved = formatDynamicLineText('저희 주교 [주교명]와 [세례명]', 'kr');
      const nearby = bishopContextFromNearbyChurchPlaces([{
        name: '천주교 벌말성당',
        formatted_address: '경기도 의왕시',
        geometry: { location: { lat: 37.39, lng: 126.97 } }
      }], { lat: 37.39, lng: 126.97 });
      state.bishopContext = previousContext;
      state.gpsDiocese = previousDiocese;
      return {
        seoul,
        suwon,
        daejeon,
        daegu,
        baRia,
        unresolved,
        nearbyDiocese: nearby?.diocese || '',
        dataUpdatedAt: globalThis.diocesanBishopData?.updatedAt || ''
      };
    });
    assert(gpsDiocesanBishops.seoul === '교황 레오와 저희 주교 베드로와, 협력주교들과', `Seoul bishop summary is wrong: ${JSON.stringify(gpsDiocesanBishops)}`);
    assert(gpsDiocesanBishops.suwon === '교황 레오와 저희 주교 마티아와, 요한과, 제르마노와', `Suwon bishop list is wrong: ${JSON.stringify(gpsDiocesanBishops)}`);
    assert(gpsDiocesanBishops.daejeon === '교황 레오와 저희 주교 아우구스티노와, 스테파노와', `Daejeon bishop list is wrong: ${JSON.stringify(gpsDiocesanBishops)}`);
    assert(gpsDiocesanBishops.daegu === '교황 레오와 저희 주교 타대오와, 협력주교들과', `Daegu bishop summary is wrong: ${JSON.stringify(gpsDiocesanBishops)}`);
    assert(gpsDiocesanBishops.baRia === '교황 레오와 저희 주교 임마누엘과', `Bà Rịa bishop name is wrong: ${JSON.stringify(gpsDiocesanBishops)}`);
    assert(gpsDiocesanBishops.nearbyDiocese === '수원교구' && gpsDiocesanBishops.dataUpdatedAt === '2026-07-23', `Nearby-church GPS diocese lookup is wrong: ${JSON.stringify(gpsDiocesanBishops)}`);
    assert((gpsDiocesanBishops.unresolved.match(/muted-name-placeholder/g) || []).length === 2, `Unresolved bishop/person placeholders were overwritten: ${JSON.stringify(gpsDiocesanBishops)}`);

    const voiceUi = await page.evaluate(() => {
      state.uiLang = 'KR';
      updateVoiceStatusBar(voiceText('listening'), { recording: true });
      const button = document.getElementById('btn-ai-voice');
      const bar = document.getElementById('voice-status-bar');
      const stop = document.getElementById('voice-status-stop');
      const play = document.getElementById('voice-status-play');
      const recording = {
        message: document.getElementById('voice-status-message')?.textContent || '',
        flexDirection: getComputedStyle(bar).flexDirection,
        background: getComputedStyle(bar).backgroundColor,
        stopHidden: stop.hidden,
        playHidden: play.hidden,
        stopWidth: getComputedStyle(stop).width,
        stopRadius: getComputedStyle(stop).borderRadius
      };
      updateVoiceStatusBar(voiceText('paused'), { paused: true });
      const paused = {
        message: document.getElementById('voice-status-message')?.textContent || '',
        stopHidden: stop.hidden,
        playHidden: play.hidden,
        playBackground: getComputedStyle(play).backgroundColor,
        playWidth: getComputedStyle(play).width,
        playRadius: getComputedStyle(play).borderRadius
      };
      state.aiVoiceOn = true;
      setVoiceStatus(voiceText('found', '아멘'), true);
      const settingsStatus = document.getElementById('set-ai-voice-status')?.textContent || '';
      setVoiceStatus(voiceText('paused'), false, { paused: true, settingsText: voiceText('pausedShort') });
      const pausedSettingsStatus = document.getElementById('set-ai-voice-status')?.textContent || '';
      const fixture = document.createElement('div');
      fixture.innerHTML = '<div class="pair-block"><div class="rubric">위치에서 제외</div><div class="pair-line"><span class="rubric">본문 안 전례 안내</span><span>아멘</span></div></div>';
      const searchableFixture = voiceSearchableTextForNode(fixture.firstElementChild);
      state.aiVoiceOn = false;
      isRecordingVoice = false;
      syncVoiceControls(voiceText('off'));
      hideVoiceStatusBar();
      return {
        mainButtonText: voiceText('start'),
        mainButtonBackground: getComputedStyle(button).backgroundColor,
        mainButtonColor: getComputedStyle(button).color,
        mainButtonRadius: getComputedStyle(button).borderRadius,
        mainButtonHeight: button.getBoundingClientRect().height,
        settingsStatus,
        pausedSettingsStatus,
        searchableFixture,
        recording,
        paused
      };
    });
    assert(voiceUi.mainButtonText === '시작' && voiceUi.mainButtonBackground === 'rgb(255, 255, 255)', `Main voice button was not restored to the original white control: ${JSON.stringify(voiceUi)}`);
    assert(voiceUi.mainButtonRadius === '6px' && voiceUi.mainButtonHeight < 40, `Main voice button was not restored to the original compact size: ${JSON.stringify(voiceUi)}`);
    assert(voiceUi.recording.flexDirection === 'row' && voiceUi.recording.background.includes('73, 80, 87'), `Voice status controls are not inside the gray row: ${JSON.stringify(voiceUi)}`);
    assert(!voiceUi.recording.stopHidden && voiceUi.recording.playHidden && !/[■▶]/.test(voiceUi.recording.message), `Recording status did not use the red circular stop control: ${JSON.stringify(voiceUi)}`);
    assert(voiceUi.settingsStatus === '음성 인식 중', `Settings should show only the short active voice status: ${JSON.stringify(voiceUi)}`);
    assert(voiceUi.pausedSettingsStatus === '음성인식 정지됨', `Settings should show only the short paused voice status: ${JSON.stringify(voiceUi)}`);
    assert(!voiceUi.recording.message.includes('오른쪽') && voiceUi.recording.message.includes('정지 버튼'), `Voice guidance still contains the old right-button wording: ${JSON.stringify(voiceUi)}`);
    assert(!voiceUi.searchableFixture.includes('위치에서 제외') && voiceUi.searchableFixture.includes('본문 안 전례 안내') && voiceUi.searchableFixture.includes('아멘'), `Rubric voice matching filter is wrong: ${JSON.stringify(voiceUi)}`);
    assert(voiceUi.paused.stopHidden && !voiceUi.paused.playHidden && voiceUi.paused.message.includes('정지됨'), `Paused status did not use the green circular play control: ${JSON.stringify(voiceUi)}`);
    assert(voiceUi.recording.stopWidth === '32px' && voiceUi.recording.stopRadius === '50%' && voiceUi.paused.playWidth === '32px' && voiceUi.paused.playRadius === '50%', `Voice bar controls are not small circles: ${JSON.stringify(voiceUi)}`);

    await page.evaluate(() => {
      state.currentLoc = 'KR';
      state.targetLang = 'EN';
      state.activeTab = 'mass';
      render();
      document.querySelector('[data-part-id="eucharist"]')?.scrollIntoView({ block: 'center' });
      showAppTab('hymns');
      showAppTab('mass');
    });
    await page.waitForTimeout(720);
    const massTabScrollReturn = await page.evaluate(() => {
      const snapshot = state.massScrollSnapshot;
      const selector = '#missal-root .part-container, #missal-root .section-bar, #missal-root .pair-block, #missal-root .pc-line-row:not(.pc-header-row)';
      const anchors = Array.from(document.querySelectorAll(selector));
      const anchor = snapshot && snapshot.index >= 0 ? anchors[snapshot.index] : null;
      return {
        activeTab: state.activeTab,
        savedY: snapshot?.y || 0,
        currentY: window.scrollY,
        anchorOffsetDifference: anchor ? Math.abs(anchor.getBoundingClientRect().top - snapshot.offset) : null
      };
    });
    assert(massTabScrollReturn.activeTab === 'mass' && massTabScrollReturn.anchorOffsetDifference !== null && massTabScrollReturn.anchorOffsetDifference <= 3, `Mass tab did not return to the previous reading position: ${JSON.stringify(massTabScrollReturn)}`);

    await page.evaluate(() => {
      state.currentLoc = 'KR';
      state.targetLang = 'EN';
      showAppTab('prayers');
      renderPrayerPanel();
    });
    const prayerUi = await page.evaluate(() => {
      const items = Array.from(document.querySelectorAll('#prayer-results details.aux-prayer-list-item'));
      const first = items[0];
      const translated = first && first.querySelector('summary .aux-prayer-translation-title');
      return {
        count: items.length,
        firstOpen: !!(first && first.open),
        firstSummary: first && first.querySelector('summary') ? first.querySelector('summary').textContent.trim() : '',
        translatedTitle: translated ? translated.textContent.trim() : '',
        translatedOpacity: translated ? Number.parseFloat(getComputedStyle(translated).opacity) : 1,
        firstBoxes: first ? first.querySelectorAll('.aux-language-block').length : 0,
        genericPrayerTagCount: Array.from(document.querySelectorAll('#prayer-results .aux-pill')).filter(node => node.textContent.trim() === '기도문').length,
        summaryCategoryCount: Array.from(first ? first.querySelectorAll('summary .aux-prayer-tag') : []).length
      };
    });
    assert(prayerUi.count >= 150 && prayerUi.count < 300, `Language-exclusive prayer filtering is not active for Korean: ${prayerUi.count} items`);
    assert(!prayerUi.firstOpen, 'Prayer list items should start collapsed');
    assert(prayerUi.firstSummary.includes('성호경'), `First prayer title did not come from prayer_data.js: ${prayerUi.firstSummary}`);
    assert(prayerUi.translatedTitle.includes('Sign of the Cross'), `Translated prayer title is missing: ${prayerUi.translatedTitle}`);
    assert(prayerUi.translatedOpacity < 0.8, `Translated title should be muted; opacity=${prayerUi.translatedOpacity}`);
    assert(prayerUi.firstBoxes === 2, `Expected two language boxes inside each prayer, got ${prayerUi.firstBoxes}`);
    assert(prayerUi.genericPrayerTagCount === 0, 'The generic 기도문 tag is still visible');
    assert(prayerUi.summaryCategoryCount === 0, 'Prayer category markers are still visible in the collapsed table of contents');

    const vietnamesePrayerSourceCategory = await page.evaluate(() => {
      const entry = getPrayerData().find(item => item.sourceCategory?.VN === 'Các Kinh Cầu');
      const host = document.createElement('div');
      host.innerHTML = entry ? prayerMetaHtml(entry, 'VN', 'KR') : '';
      return {
        id: entry?.id || '',
        pills: Array.from(host.querySelectorAll('.aux-pill')).map(node => node.textContent.trim())
      };
    });
    assert(vietnamesePrayerSourceCategory.id && vietnamesePrayerSourceCategory.pills.includes('Các Kinh Cầu'), `Vietnamese prayer sourceCategory is missing from body tags: ${JSON.stringify(vietnamesePrayerSourceCategory)}`);

    const prayerLanguageVisibility = await page.evaluate(() => {
      const countFor = (left, query) => {
        state.currentLoc = left;
        state.targetLang = left === 'KR' ? 'EN' : 'KR';
        const search = document.getElementById('prayer-search');
        if (search) search.value = query;
        const category = document.getElementById('prayer-category');
        if (category) category.value = '';
        renderPrayerPanel();
        return document.querySelectorAll('#prayer-results details.aux-prayer-list-item').length;
      };
      return {
        morningOfferingRecords: prayerData.filter(prayer => prayer.titles?.EN === 'Morning Offering').map(prayer => prayer.id),
        doubleCrossKr: countFor('KR', 'Dấu Thánh Giá (kép)'),
        doubleCrossVn: countFor('VN', 'Dấu Thánh Giá (kép)'),
        victimBlessingKr: countFor('KR', 'Order for the Blessing of a Victim of Crime or Oppression'),
        victimBlessingEn: countFor('EN', 'Order for the Blessing of a Victim of Crime or Oppression')
      };
    });
    assert(prayerLanguageVisibility.morningOfferingRecords.length === 1, `Duplicate Morning Offering records remain: ${JSON.stringify(prayerLanguageVisibility)}`);
    assert(prayerLanguageVisibility.doubleCrossKr === 0 && prayerLanguageVisibility.doubleCrossVn === 1, `Vietnamese-only prayer visibility is wrong: ${JSON.stringify(prayerLanguageVisibility)}`);
    assert(prayerLanguageVisibility.victimBlessingKr === 0 && prayerLanguageVisibility.victimBlessingEn === 1, `English-only prayer visibility is wrong: ${JSON.stringify(prayerLanguageVisibility)}`);
    await page.evaluate(() => {
      state.currentLoc = 'KR';
      state.targetLang = 'EN';
      const search = document.getElementById('prayer-search');
      if (search) search.value = '';
      renderPrayerPanel();
    });

    const vietnamesePrayerImport = await page.evaluate(() => {
      const byId = id => prayerData.find(prayer => prayer.id === id);
      return {
        total: prayerData.length,
        inserted: prayerData.filter(prayer => /^vn_ocr_/.test(prayer.id)).length,
        withVietnamese: prayerData.filter(prayer => String(prayer.titles?.VN || '').trim() && String(prayer.texts?.VN || '').trim()).length,
        niceneMassLabel: getStartupOrdinaryMassData().find(item => item.id === '2.8 creed')?.variants?.B?.label?.vn || '',
        doubleCrossText: byId('001-1.sign_of_cross_double')?.texts?.VN || '',
        signOfCrossBreaks: (byId('001.sign_of_cross')?.texts?.VN.match(/\n/g) || []).length,
        faithMeaningBreaks: (byId('vn_ocr_027_kinh_nghia_duc_tin')?.texts?.VN.match(/\n/g) || []).length,
        hasNiceneVietnamese: !!byId('006.nicene_creed')?.texts?.VN,
        hasRawSlash: prayerData.some(prayer => /^vn_ocr_/.test(prayer.id) && /\//.test(String(prayer.texts?.VN || ''))),
        hasKnownOcrErrors: prayerData.some(prayer => /Thầnh|khổi/.test(String(prayer.texts?.VN || ''))),
        hasOcrGarbage: prayerData.some(prayer => /^vn_ocr_/.test(prayer.id) && /[0-9]{5,}|[a-z]{12,}|[¬_`#]{2,}|(?:[ewmnrpy]{2,}\s*){4,}/i.test(String(prayer.texts?.VN || '')))
      };
    });
    assert(vietnamesePrayerImport.total === 575, `Unexpected prayer count after safe duplicate merging: ${JSON.stringify(vietnamesePrayerImport)}`);
    assert(vietnamesePrayerImport.inserted === 41 && vietnamesePrayerImport.withVietnamese >= 66, `Vietnamese prayer import is incomplete: ${JSON.stringify(vietnamesePrayerImport)}`);
    assert(vietnamesePrayerImport.niceneMassLabel === 'Kinh Tin Kính Nicêa - Constantinôpôli', `Vietnamese Nicene Creed label is wrong: ${JSON.stringify(vietnamesePrayerImport)}`);
    assert((vietnamesePrayerImport.doubleCrossText.match(/<rubric>/g) || []).length === (vietnamesePrayerImport.doubleCrossText.match(/<\/rubric>/g) || []).length && !/ngực\/rubric>/.test(vietnamesePrayerImport.doubleCrossText), `Vietnamese Double Sign of the Cross has malformed rubric tags: ${JSON.stringify(vietnamesePrayerImport)}`);
    assert(vietnamesePrayerImport.signOfCrossBreaks === 1 && vietnamesePrayerImport.faithMeaningBreaks === 0, `OCR line-break rules were not preserved: ${JSON.stringify(vietnamesePrayerImport)}`);
    assert(vietnamesePrayerImport.hasNiceneVietnamese && !vietnamesePrayerImport.hasRawSlash && !vietnamesePrayerImport.hasKnownOcrErrors && !vietnamesePrayerImport.hasOcrGarbage, `Vietnamese prayer cleanup failed: ${JSON.stringify(vietnamesePrayerImport)}`);

    await page.locator('#prayer-results details.aux-prayer-list-item').first().locator('summary').click();
    const prayerDetailUi = await page.evaluate(() => {
      const first = document.querySelector('#prayer-results details.aux-prayer-list-item');
      const rightTitle = first?.querySelector('.aux-language-block-translation .aux-prayer-title');
      const style = rightTitle ? getComputedStyle(rightTitle) : null;
      return {
        rightTitleColor: style?.color || '',
        rightTitleOpacity: style ? Number.parseFloat(style.opacity) : 0,
        leftBodyCategoryTags: first?.querySelectorAll('.aux-language-block:first-child .aux-prayer-tag').length || 0
      };
    });
    assert(prayerDetailUi.rightTitleColor === 'rgb(51, 51, 51)' && prayerDetailUi.rightTitleOpacity === 1, `Prayer translation box title should be black: ${JSON.stringify(prayerDetailUi)}`);

    await page.evaluate(() => {
      globalThis.__savedUploadedPrayerDataForAutoTest = globalThis.uploadedPrayerData;
      globalThis.__savedPrayerTranslatorForAutoTest = globalThis.translatePrayerTextWithFallback;
      globalThis.translatePrayerTextWithFallback = async sourceText => {
        if (String(sourceText).includes('국가 기도 자동 번역 테스트')) return 'Automatic National Prayer Test';
        return 'God, protect this nation and guide its people.';
      };
      globalThis.uploadedPrayerData = [{
        id: 'test-national-auto-translation',
        category: 'national',
        titles: { KR: '국가 기도 자동 번역 테스트' },
        texts: { KR: '하느님, 이 나라를 지켜 주시고 백성을 이끌어 주소서.' },
        sourceCategory: { KR: '국가별 기도문' },
        source: { KR: '자동번역 회귀검사' }
      }];
      openPrayerEntryKeys.clear();
      state.currentLoc = 'KR';
      state.targetLang = 'EN';
      renderPrayerPanel();
    });
    await page.locator('#prayer-results details.aux-prayer-list-item summary').click();
    await page.waitForFunction(() => {
      const item = document.querySelector('#prayer-results details.aux-prayer-list-item');
      const summaryTranslation = item?.querySelector('summary .aux-prayer-translation-title')?.textContent || '';
      const bodyTranslation = item?.querySelector('.aux-language-block-translation .aux-prayer-body')?.textContent || '';
      return item?.open && summaryTranslation.includes('Automatic National Prayer Test') && bodyTranslation.includes('protect this nation');
    });
    const automaticPrayerTranslation = await page.evaluate(() => {
      const item = document.querySelector('#prayer-results details.aux-prayer-list-item');
      return {
        open: !!item?.open,
        category: item?.querySelector('.aux-result-meta')?.textContent || '',
        summaryTranslation: item?.querySelector('summary .aux-prayer-translation-title')?.textContent.trim() || '',
        detailTitle: item?.querySelector('.aux-language-block-translation .aux-prayer-title')?.textContent.trim() || '',
        detailBody: item?.querySelector('.aux-language-block-translation .aux-prayer-body')?.textContent.trim() || '',
        aiBadges: item?.querySelectorAll('.aux-language-block-translation .ai-badge').length || 0
      };
    });
    assert(automaticPrayerTranslation.open && automaticPrayerTranslation.category.includes('국가별') && automaticPrayerTranslation.summaryTranslation.includes('Automatic National Prayer Test') && automaticPrayerTranslation.detailBody.includes('protect this nation') && automaticPrayerTranslation.aiBadges >= 2, `Missing national-prayer translations did not start automatically when details opened: ${JSON.stringify(automaticPrayerTranslation)}`);
    await page.evaluate(() => {
      globalThis.uploadedPrayerData = globalThis.__savedUploadedPrayerDataForAutoTest;
      globalThis.translatePrayerTextWithFallback = globalThis.__savedPrayerTranslatorForAutoTest;
      delete globalThis.__savedUploadedPrayerDataForAutoTest;
      delete globalThis.__savedPrayerTranslatorForAutoTest;
      openPrayerEntryKeys.clear();
      state.currentLoc = 'KR';
      state.targetLang = 'EN';
      renderPrayerPanel();
    });
    await page.evaluate(() => { state.dailyReadingsLoading = false; state.dailyReadingLanguageStatus = {}; hideLiturgyStatusBar(); window.scrollTo(0, 0); });
    await page.waitForTimeout(250);
    await page.screenshot({ path: path.join(outputDir, 'v22-5-prayer-list.png'), fullPage: false });

    const importedPrayerUi = await page.evaluate(() => {
      state.currentLoc = 'VN';
      state.targetLang = 'KR';
      const search = document.getElementById('prayer-search');
      if (search) search.value = 'Kinh Sáng Soi';
      renderPrayerPanel();
      const item = document.querySelector('#prayer-results details.aux-prayer-list-item');
      if (item) item.open = true;
      const left = item?.querySelector('.aux-language-block:first-child');
      return {
        count: document.querySelectorAll('#prayer-results details.aux-prayer-list-item').length,
        title: left?.querySelector('.aux-prayer-title')?.textContent.trim() || '',
        body: left?.querySelector('.aux-prayer-body')?.innerText || ''
      };
    });
    assert(importedPrayerUi.count === 1 && importedPrayerUi.title.startsWith('Kinh Sáng Soi'), `Imported Vietnamese prayer is not searchable/rendered: ${JSON.stringify(importedPrayerUi)}`);
    assert(importedPrayerUi.body.split(/\n+/).filter(Boolean).length === 2, `Imported Vietnamese slash line break was not rendered: ${JSON.stringify(importedPrayerUi)}`);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(250);
    await page.screenshot({ path: path.join(outputDir, 'v22-5-prayer-vn-import.png'), fullPage: false });

    const panelAlignment = await page.evaluate(() => {
      const measure = tab => {
        showAppTab(tab);
        const card = document.querySelector(`#${tab === 'prayers' ? 'prayer' : 'hymn'}-panel .aux-panel-header-card`);
        const heading = card?.querySelector('h2');
        const warning = card?.querySelector('.aux-dev-warning');
        const anchor = card?.querySelector('.aux-controls-anchor');
        const cardRect = card.getBoundingClientRect();
        return {
          height: cardRect.height,
          headingTop: heading.getBoundingClientRect().top - cardRect.top,
          warningTop: warning.getBoundingClientRect().top - cardRect.top,
          searchTop: anchor.getBoundingClientRect().top - cardRect.top
        };
      };
      return { prayers: measure('prayers'), hymns: measure('hymns') };
    });
    for (const key of ['height', 'headingTop', 'warningTop', 'searchTop']) {
      assert(Math.abs(panelAlignment.prayers[key] - panelAlignment.hymns[key]) <= 2, `Prayer/hymn header ${key} is misaligned: ${JSON.stringify(panelAlignment)}`);
    }

    const hymnUi = await page.evaluate(() => {
      state.currentLoc = 'KR';
      state.targetLang = 'EN';
      showAppTab('hymns');
      document.getElementById('hymn-country').value = 'KR';
      renderHymnPanel({ resetCategory: true });
      const first = document.querySelector('#hymn-results .hymn-list-item');
      const translated = first?.querySelector('.aux-prayer-translation-title');
      const vietnameseHymns = getHymnData().filter(item => item.country === 'VN');
      const lightHymn = vietnameseHymns.find(item => item.title === 'Chúa là ánh sáng');
      const titlesById = id => vietnameseHymns.find(item => item.id === id)?.translations || {};
      const restoredFirstTen = (globalThis.ordoHymnData || [])
        .filter(item => /^vn-tcvn1-00[1-9]$|^vn-tcvn1-010$/.test(item.id || ''))
        .map(item => ({
          id: item.id,
          lyrics: item.lyrics || '',
          hasText: Object.prototype.hasOwnProperty.call(item, 'text'),
          hasVerses: Object.prototype.hasOwnProperty.call(item, 'verses'),
          firstLine: item.firstLine || '',
          composer: item.composer || '',
          lyricist: item.lyricist || '',
          scorePathsValid: (item.scoreImages || []).every(score => /^assets\/hymns\/vn-tcvn1\/.+\.webp$/.test(score.src || ''))
        }));
      return {
        itemCount: document.querySelectorAll('#hymn-results .hymn-list-item').length,
        vietnameseStoredKoreanTitles: vietnameseHymns.filter(item => String(item.translations?.KR?.title || '').trim()).length,
        vietnameseCompleteTargetTitles: vietnameseHymns.filter(item => ['EN', 'LA', 'JP'].every(lang => String(item.translations?.[lang]?.title || '').trim())).length,
        suspiciousVietnameseTargetTitles: vietnameseHymns.filter(item => /i'?m sorry|paenitet|ごめんなさい|[가-힣]/i.test([item.translations?.EN?.title, item.translations?.LA?.title, item.translations?.JP?.title].join(' '))).length,
        lightHymnTitles: lightHymn?.translations || {},
        caLenDiSeries: ['vn-tcvn1-001', 'vn-tcvn1-002', 'vn-tcvn1-003', 'vn-tcvn1-004'].map(titlesById),
        caLenDiMassSettings: ['vn-tcvn1-448', 'vn-tcvn1-449'].map(titlesById),
        immaculateHeartSeries: ['vn-tcvn1-289', 'vn-tcvn1-290'].map(titlesById),
        trustHymn: titlesById('vn-tcvn2-020'),
        naturalTitleAudit: ['vn-tcvn1-007', 'vn-tcvn1-230', 'vn-tcvn2-065', 'vn-tcvn2-087', 'vn-tcvn2-210'].map(id => {
          const item = vietnameseHymns.find(row => row.id === id);
          return { id, title: item?.title || '', kr: item?.translations?.KR?.title || '' };
        }),
        restoredFirstTen,
        awkwardKoreanLiteralCount: vietnameseHymns.filter(item => /제발|화음으로 노래하기|귀먹|돌 동굴|축하드리고 싶/.test(item.translations?.KR?.title || '')).length,
        tocTags: Array.from(first?.querySelectorAll('.hymn-tags .aux-pill') || []).map(node => node.textContent.trim()),
        translatedTitle: translated?.textContent.trim() || '',
        translatedOpacity: translated ? Number.parseFloat(getComputedStyle(translated).opacity) : 1,
        listAlignItems: first ? getComputedStyle(first).alignItems : '',
        hasDisclosure: !!first?.querySelector('.hymn-disclosure'),
        expanded: first?.querySelector('.hymn-title-button')?.getAttribute('aria-expanded') || ''
      };
    });
    assert(hymnUi.itemCount > 1000, `Expected hymn_data.js entries, got ${hymnUi.itemCount}`);
    assert(hymnUi.restoredFirstTen.length === 10 && hymnUi.restoredFirstTen.every(item => item.lyrics && !item.hasText && !item.hasVerses && item.scorePathsValid), `Vietnamese hymns 001-010 or duplicate-field cleanup is wrong: ${JSON.stringify(hymnUi.restoredFirstTen)}`);
    assert(hymnUi.restoredFirstTen[0].lyrics.includes('vì tình Ngài yêu ta bền vững muôn đời') && hymnUi.restoredFirstTen[5].composer === 'Hùng Lân' && hymnUi.restoredFirstTen[5].lyricist === 'Ngô Quang Tuyên & Dao Kim', `Vietnamese hymn 001-010 local corrections are missing: ${JSON.stringify(hymnUi.restoredFirstTen)}`);
    assert(hymnUi.vietnameseStoredKoreanTitles === 798, `Vietnamese hymn Korean titles are not fully stored: ${JSON.stringify(hymnUi)}`);
    assert(hymnUi.vietnameseCompleteTargetTitles === 798 && hymnUi.suspiciousVietnameseTargetTitles === 0, `Vietnamese hymn EN/LA/JP titles were not rebuilt cleanly: ${JSON.stringify(hymnUi)}`);
    assert(/Lord/i.test(hymnUi.lightHymnTitles.EN?.title || '') && /Dominus/i.test(hymnUi.lightHymnTitles.LA?.title || '') && /主/.test(hymnUi.lightHymnTitles.JP?.title || ''), `Known Vietnamese hymn title translations are still wrong: ${JSON.stringify(hymnUi.lightHymnTitles)}`);
    assert(JSON.stringify(hymnUi.caLenDiSeries.map(item => item.KR?.title)) === JSON.stringify(['노래하여라 2', '노래하여라 3', '노래하여라 4', '노래하여라 6']), `Ca lên đi Korean series titles are inconsistent: ${JSON.stringify(hymnUi.caLenDiSeries)}`);
    assert(hymnUi.caLenDiSeries.every((item, index) => item.EN?.title === `Sing Out ${[2, 3, 4, 6][index]}` && item.LA?.title === `Cantate ${[2, 3, 4, 6][index]}`), `Ca lên đi multilingual series titles are inconsistent: ${JSON.stringify(hymnUi.caLenDiSeries)}`);
    assert(JSON.stringify(hymnUi.caLenDiMassSettings.map(item => item.KR?.title)) === JSON.stringify(['「노래하여라」 미사곡 2', '「노래하여라」 미사곡 3']), `Ca lên đi Mass-setting titles are inconsistent: ${JSON.stringify(hymnUi.caLenDiMassSettings)}`);
    assert(JSON.stringify(hymnUi.immaculateHeartSeries.map(item => item.KR?.title)) === JSON.stringify(['성모 성심께 드리는 보속 1', '성모 성심께 드리는 보속 2']), `Immaculate Heart series titles are inconsistent: ${JSON.stringify(hymnUi.immaculateHeartSeries)}`);
    assert(hymnUi.trustHymn.KR?.title === '주님께 의탁하나이다' && hymnUi.trustHymn.EN?.title === 'I Trust in You', `Con cậy trông title meaning is still wrong: ${JSON.stringify(hymnUi.trustHymn)}`);
    assert(hymnUi.naturalTitleAudit.find(item => item.id === 'vn-tcvn1-007')?.kr === '함께 노래해요' && hymnUi.naturalTitleAudit.find(item => item.id === 'vn-tcvn2-065')?.title === 'Thắp sáng trong con', `Audited Vietnamese hymn titles are wrong: ${JSON.stringify(hymnUi.naturalTitleAudit)}`);
    assert(hymnUi.awkwardKoreanLiteralCount === 0, `Known awkward Korean literal translations remain: ${JSON.stringify(hymnUi.naturalTitleAudit)}`);
    assert(hymnUi.tocTags.length === 1 && hymnUi.tocTags[0] === '가톨릭성가', `Hymn TOC should show only the book tag: ${JSON.stringify(hymnUi.tocTags)}`);
    assert(hymnUi.translatedTitle === 'I Believe' && hymnUi.translatedOpacity < 0.8, `Hymn translated title is missing or not muted: ${JSON.stringify(hymnUi)}`);
    assert(hymnUi.listAlignItems === 'center', `Hymn list rows should be vertically centered: ${JSON.stringify(hymnUi)}`);
    assert(hymnUi.hasDisclosure && hymnUi.expanded === 'false', 'Collapsed hymn disclosure state is wrong');
    await page.locator('#hymn-results .hymn-title-button').first().click();
    const hymnDetailUi = await page.evaluate(() => {
      const first = document.querySelector('#hymn-results .hymn-list-item');
      const detailTags = Array.from(document.querySelectorAll('#hymn-results .hymn-inline-detail .hymn-tags .aux-pill')).map(node => node.textContent.trim());
      return {
        expanded: first?.querySelector('.hymn-title-button')?.getAttribute('aria-expanded') || '',
        detailTags,
        languageBoxes: document.querySelectorAll('#hymn-results .hymn-inline-detail .aux-language-block').length
      };
    });
    assert(hymnDetailUi.expanded === 'true', 'Opened hymn disclosure state is wrong');
    assert(hymnDetailUi.detailTags.includes('연중') && !hymnDetailUi.detailTags.includes('가톨릭성가'), `Hymn body tags are wrong: ${JSON.stringify(hymnDetailUi.detailTags)}`);
    assert(hymnDetailUi.languageBoxes === 2, `Hymn detail should have original and translation boxes: ${JSON.stringify(hymnDetailUi)}`);

    const vietnameseHymnMarkers = await page.evaluate(() => {
      const host = document.createElement('div');
      host.innerHTML = hymnLyricsHtml('Đ. Đây là điệp khúc\n1. Đây là câu một\n2. Đây là câu hai', 'VN');
      document.body.appendChild(host);
      const labels = Array.from(host.querySelectorAll('.hymn-structure-label'));
      const result = {
        labels: labels.map(node => node.textContent.trim()),
        colors: labels.map(node => getComputedStyle(node).color),
        weights: labels.map(node => getComputedStyle(node).fontWeight)
      };
      host.remove();
      return result;
    });
    assert(JSON.stringify(vietnameseHymnMarkers.labels) === JSON.stringify(['Đ.', '1.', '2.']), `Vietnamese hymn structure markers were not detected: ${JSON.stringify(vietnameseHymnMarkers)}`);
    assert(vietnameseHymnMarkers.colors.every(color => color === 'rgb(22, 130, 75)') && vietnameseHymnMarkers.weights.every(weight => Number(weight) >= 700), `Vietnamese hymn structure markers are not green/bold: ${JSON.stringify(vietnameseHymnMarkers)}`);

    const hymnLanguageRouting = await page.evaluate(() => {
      const languages = ['KR', 'VN', 'EN', 'JP', 'LA'];
      const cases = [];
      for (const local of languages) {
        for (const target of languages) {
          if (local === target) continue;
          state.currentLoc = local;
          state.targetLang = target;
          cases.push({
            local,
            target,
            localHymnalTarget: hymnTargetLanguage(local),
            targetHymnalTarget: hymnTargetLanguage(target),
            localHymnalAutomatic: usesAutomaticHymnTranslation(local),
            targetHymnalAutomatic: usesAutomaticHymnTranslation(target)
          });
        }
      }
      state.currentLoc = 'KR';
      state.targetLang = 'VN';
      return cases;
    });
    assert(hymnLanguageRouting.every(item =>
      item.localHymnalTarget === item.target &&
      item.targetHymnalTarget === item.local &&
      item.localHymnalAutomatic && item.targetHymnalAutomatic
    ), `Hymn translation routing is not consistent across languages: ${JSON.stringify(hymnLanguageRouting)}`);

    const reverseEntryId = await page.evaluate(() => {
      state.currentLoc = 'KR';
      state.targetLang = 'VN';
      document.getElementById('hymn-country').value = 'VN';
      state.selectedHymnId = '';
      translateHymnWithGemini = async () => ({
        title: '노래하여라 2',
        lyrics: '후렴. 모든 민족들아, 일어나 하느님을 찬미하여라.\n1. 주님의 사랑은 끝이 없으시다.'
      });
      renderHymnPanel({ resetCategory: true });
      const entry = getHymnData().find(item => item.country === 'VN' && String(item.text || '').trim());
      if (entry) openHymnDetail(entry.id);
      return entry?.id || '';
    });
    await page.waitForFunction(id => {
      const entry = getHymnData().find(item => item.id === id);
      const record = entry && hymnTranslationRecord(entry, 'VN');
      return !!(record && record.status === 'done' && document.querySelector('#hymn-results .hymn-translated-lyrics'));
    }, reverseEntryId);
    const reversedHymnTranslation = await page.evaluate(id => {
      const entry = getHymnData().find(item => item.id === id);
      const record = entry && hymnTranslationRecord(entry, 'VN');
      const item = document.querySelector('#hymn-results .hymn-list-item.is-selected');
      const pane = document.querySelector('#hymn-results .hymn-translation-pane');
      return {
        target: hymnTargetLanguage('VN'),
        selectedId: entry?.id || '',
        status: record?.status || '',
        translatedTitle: item?.querySelector('.aux-prayer-translation-title')?.textContent.trim() || '',
        paneLanguage: pane?.querySelector('.aux-language-label')?.textContent.trim() || '',
        paneTitle: pane?.querySelector('.aux-prayer-title')?.textContent.trim() || '',
        translatedLyrics: pane?.querySelector('.hymn-translated-lyrics')?.innerText.trim() || '',
        languageBoxes: document.querySelectorAll('#hymn-results .hymn-inline-detail .aux-language-block').length
      };
    }, reverseEntryId);
    assert(reversedHymnTranslation.target === 'KR', `Vietnamese hymnal should translate back to local Korean: ${JSON.stringify(reversedHymnTranslation)}`);
    assert(reversedHymnTranslation.selectedId && reversedHymnTranslation.status === 'done', `Vietnamese hymn automatic Korean translation did not finish: ${JSON.stringify(reversedHymnTranslation)}`);
    assert(reversedHymnTranslation.translatedTitle === '노래하여라 2' && reversedHymnTranslation.paneTitle === '노래하여라 2', `Vietnamese hymn Korean title is missing: ${JSON.stringify(reversedHymnTranslation)}`);
    assert(reversedHymnTranslation.paneLanguage === '한국어' && reversedHymnTranslation.translatedLyrics.includes('모든 민족들아') && reversedHymnTranslation.languageBoxes === 2, `Vietnamese hymn Korean translation pane is missing: ${JSON.stringify(reversedHymnTranslation)}`);

    const forwardEntryId = await page.evaluate(() => {
      state.currentLoc = 'KR';
      state.targetLang = 'VN';
      document.getElementById('hymn-country').value = 'KR';
      state.selectedHymnId = '';
      translateHymnWithGemini = async () => ({
        title: 'Tiêu đề dịch tự động',
        lyrics: '1. Tôi tin kính Thiên Chúa là Cha toàn năng.\n2. Xin dẫn đưa chúng con trong ánh sáng.'
      });
      renderHymnPanel({ resetCategory: true });
      const entry = getHymnData().find(item => item.country === 'KR' && String(item.text || '').trim());
      if (entry) openHymnDetail(entry.id);
      return entry?.id || '';
    });
    await page.waitForFunction(id => {
      const entry = getHymnData().find(item => item.id === id);
      const record = entry && hymnTranslationRecord(entry, 'KR');
      return !!(record && record.status === 'done' && document.querySelector('#hymn-results .hymn-translated-lyrics'));
    }, forwardEntryId);
    const forwardHymnTranslation = await page.evaluate(id => {
      const entry = getHymnData().find(item => item.id === id);
      const record = entry && hymnTranslationRecord(entry, 'KR');
      const item = document.querySelector('#hymn-results .hymn-list-item.is-selected');
      const pane = document.querySelector('#hymn-results .hymn-translation-pane');
      return {
        target: hymnTargetLanguage('KR'),
        status: record?.status || '',
        translatedTitle: item?.querySelector('.aux-prayer-translation-title')?.textContent.trim() || '',
        storedTitle: entry?.translations?.VN?.title || '',
        paneLanguage: pane?.querySelector('.aux-language-label')?.textContent.trim() || '',
        paneTitle: pane?.querySelector('.aux-prayer-title')?.textContent.trim() || '',
        translatedLyrics: pane?.querySelector('.hymn-translated-lyrics')?.innerText.trim() || ''
      };
    }, forwardEntryId);
    assert(forwardHymnTranslation.target === 'VN' && forwardHymnTranslation.status === 'done', `Korean hymn did not auto-translate into Vietnamese: ${JSON.stringify(forwardHymnTranslation)}`);
    assert(forwardHymnTranslation.translatedTitle === forwardHymnTranslation.storedTitle && forwardHymnTranslation.paneTitle === forwardHymnTranslation.storedTitle, `Stored Korean-hymn Vietnamese title was replaced by a runtime title: ${JSON.stringify(forwardHymnTranslation)}`);
    assert(forwardHymnTranslation.paneLanguage === 'Tiếng Việt' && forwardHymnTranslation.translatedLyrics.includes('Tôi tin kính'), `Korean hymn Vietnamese detail translation is missing: ${JSON.stringify(forwardHymnTranslation)}`);
    await page.evaluate(() => { state.dailyReadingsLoading = false; state.dailyReadingLanguageStatus = {}; hideLiturgyStatusBar(); window.scrollTo(0, 0); });
    await page.waitForTimeout(250);
    await page.screenshot({ path: path.join(outputDir, 'v22-5-hymn-list.png'), fullPage: false });

    const backgroundLiturgyLoading = await page.evaluate(() => {
      state.currentLoc = 'KR';
      state.targetLang = 'VN';
      state.dailyReadingsLoading = true;
      state.dailyReadingLanguageStatus = { KR: 'loading', VN: 'loading' };
      state.dailyReadingLanguageErrorAt = {};
      showAppTab('mass');
      syncLiturgyLoadingStatusBar('KR', 'VN');
      const bar = document.getElementById('liturgy-status-bar');
      const massVisibleBefore = !!bar?.classList.contains('is-visible');
      showAppTab('prayers');
      const hiddenOnPrayerTab = !bar?.classList.contains('is-visible');
      const loadingContinuesOffTab = state.dailyReadingsLoading
        && state.dailyReadingLanguageStatus.KR === 'loading'
        && state.dailyReadingLanguageStatus.VN === 'loading';
      showAppTab('mass');
      const visibleAgainOnMass = !!bar?.classList.contains('is-visible');
      const returnedText = bar?.textContent.trim() || '';
      showAppTab('hymns');
      state.dailyReadingsLoading = false;
      state.dailyReadingLanguageStatus = { KR: 'done', VN: 'done' };
      render();
      const hiddenAfterBackgroundCompletion = !bar?.classList.contains('is-visible');
      showAppTab('mass');
      const staysHiddenAfterReturn = !bar?.classList.contains('is-visible');
      return {
        massVisibleBefore,
        hiddenOnPrayerTab,
        loadingContinuesOffTab,
        visibleAgainOnMass,
        returnedText,
        hiddenAfterBackgroundCompletion,
        staysHiddenAfterReturn
      };
    });
    assert(backgroundLiturgyLoading.massVisibleBefore && backgroundLiturgyLoading.hiddenOnPrayerTab && backgroundLiturgyLoading.loadingContinuesOffTab, `Liturgy loading should continue silently outside the Mass tab: ${JSON.stringify(backgroundLiturgyLoading)}`);
    assert(backgroundLiturgyLoading.visibleAgainOnMass && /불러오는 중입니다/.test(backgroundLiturgyLoading.returnedText), `Liturgy loading status did not return with the still-loading Mass tab: ${JSON.stringify(backgroundLiturgyLoading)}`);
    assert(backgroundLiturgyLoading.hiddenAfterBackgroundCompletion && backgroundLiturgyLoading.staysHiddenAfterReturn, `Completed background liturgy loading should stay hidden after returning to Mass: ${JSON.stringify(backgroundLiturgyLoading)}`);

    const koreanBlessingRouting = await page.evaluate(() => {
      const select = (year, month, day) => {
        const date = new Date(year, month - 1, day, 12);
        return koreanBlessingDateSelection(date, {
          meta: getSeasonMeta(date),
          names: { KR: formatSeasonalName('KR', getSeasonMeta(date).season, getSeasonMeta(date).week, getSeasonMeta(date).day, getSeasonMeta(date).sundayCycle) }
        });
      };
      const summarize = value => value ? {
        type: value.type,
        key: value.key,
        title: value.entry?.title || value.entry?.label || '',
        lines: value.entry?.lines || []
      } : null;
      return {
        prayerCount: Object.keys(globalThis.koreanBlessingData?.lentenPrayers || {}).length,
        solemnCount: Object.keys(globalThis.koreanBlessingData?.solemnBlessings || {}).length,
        generalCollectionExposed: globalThis.koreanBlessingData?.source?.generalPrayerCollectionExposed,
        generalCollectionPresent: Array.isArray(globalThis.koreanBlessingData?.prayersOverPeople),
        solemnAlternates: Object.values(globalThis.koreanBlessingData?.solemnBlessings || {}).every(entry => {
          const lines = entry?.lines || [];
          return lines.length >= 4 && lines.length % 2 === 0 && lines.every((line, index) => index % 2 === 0 ? line.startsWith('╋ ') : line === '◎ 아멘.');
        }),
        ashWednesday: summarize(select(2026, 2, 18)),
        firstSunday: summarize(select(2026, 2, 22)),
        thirdSunday: summarize(select(2026, 3, 8)),
        fourthSunday: summarize(select(2026, 3, 15)),
        fifthSunday: summarize(select(2026, 3, 22)),
        ordinarySunday: summarize(select(2026, 7, 19)),
        maryMagdalene: summarize(select(2026, 7, 22))
      };
    });
    assert(koreanBlessingRouting.prayerCount === 37 && koreanBlessingRouting.solemnCount === 20 && koreanBlessingRouting.generalCollectionExposed === false && koreanBlessingRouting.generalCollectionPresent === false, `Korean date-specific prayer corpus is incomplete or exposes the general collection: ${JSON.stringify(koreanBlessingRouting)}`);
    assert(koreanBlessingRouting.solemnAlternates, `Korean solemn blessings do not alternate prayer and Amen correctly: ${JSON.stringify(koreanBlessingRouting)}`);
    assert(koreanBlessingRouting.ashWednesday?.key === 'lent_0_3' && koreanBlessingRouting.ashWednesday.lines.join(' ').includes('엄위하신 하느님'), `Ash Wednesday prayer over the people is missing: ${JSON.stringify(koreanBlessingRouting)}`);
    assert(koreanBlessingRouting.firstSunday === null, `A general prayer was assigned to a day without a PDF date assignment: ${JSON.stringify(koreanBlessingRouting)}`);
    assert(koreanBlessingRouting.thirdSunday?.key === 'lent_3_0' && koreanBlessingRouting.fourthSunday?.key === 'lent_4_0' && koreanBlessingRouting.fifthSunday?.key === 'lent_5_0', `Lenten Sunday prayer routing is wrong: ${JSON.stringify(koreanBlessingRouting)}`);
    assert(koreanBlessingRouting.ordinarySunday === null, `A generic Ordinary Time Sunday should not be routed to a solemn blessing automatically: ${JSON.stringify(koreanBlessingRouting)}`);
    assert(koreanBlessingRouting.maryMagdalene === null, `Saint Mary Magdalene was incorrectly routed to the Blessed Virgin Mary solemn blessing: ${JSON.stringify(koreanBlessingRouting)}`);

    const renderedKoreanBlessings = await page.evaluate(() => {
      const renderFor = (year, month, day) => {
        const date = new Date(year, month - 1, day, 12);
        state.currentLoc = 'KR';
        state.targetLang = 'VN';
        state.dayOffset = 0;
        state.liturgyNavSlot = 'day';
        // Exercise the renderer with the same remembered date context that a
        // completed daily-data load supplies.  Using a large UI navigation
        // offset here would test the seven-day navigation guard instead.
        state.liturgicalDateContext = {
          date: cloneDateOnly(date),
          localDate: cloneDateOnly(date),
          timeZone: activeLiturgicalTimeZone(),
          navOffset: 0,
          navSlot: 'day'
        };
        state.liturgyInfo = buildGeneratedLiturgyInfo(date);
        const activeDate = getActiveLiturgicalSourceDate();
        const directSelection = koreanBlessingDateSelection(activeDate, state.liturgyInfo);
        state.autoBlessingSignature = '';
        const source = massData.find(item => item?.id === '4.2 blessing');
        const item = JSON.parse(JSON.stringify(source));
        prepareKoreanBlessingForActiveDate(item, 'blessing');
        const variant = item.variants.C;
        return {
          label: variant.label.kr,
          lineCount: variant.lines.length,
          koreanText: variant.lines.map(line => line.text_kr || line.rubric_kr || '').join('\n'),
          selected: state.options.blessing,
          selectedLabel: item.variants[state.options.blessing]?.label?.kr || '',
          activeDate: formatDateIso(activeDate),
          season: state.liturgyInfo?.meta,
          directKey: directSelection?.key || null
        };
      };
      const result = {
        ashWednesday: renderFor(2026, 2, 18),
        firstSunday: renderFor(2026, 2, 22),
        pentecost: renderFor(2026, 5, 24),
        ordinarySunday: renderFor(2026, 7, 19),
        maryMagdalene: renderFor(2026, 7, 22)
      };
      state.dayOffset = 0;
      state.liturgicalDateContext = null;
      return result;
    });
    assert(renderedKoreanBlessings.ashWednesday.label.startsWith('백성을 위한 기도 - 재의 수요일') && renderedKoreanBlessings.ashWednesday.lineCount === 8 && renderedKoreanBlessings.ashWednesday.koreanText.includes('엄위하신 하느님') && !renderedKoreanBlessings.ashWednesday.koreanText.includes('사제의 기도 끝에'), `A single date-specific prayer over the people was not rendered: ${JSON.stringify(renderedKoreanBlessings)}`);
    assert(renderedKoreanBlessings.firstSunday.selected === 'A' && renderedKoreanBlessings.firstSunday.selectedLabel === '일반적인 강복', `An unassigned Lenten day should default to the simple blessing: ${JSON.stringify(renderedKoreanBlessings)}`);
    assert(renderedKoreanBlessings.pentecost.label === '장엄강복 - 성령 강림' && renderedKoreanBlessings.pentecost.koreanText.includes('위로자 성령') && renderedKoreanBlessings.pentecost.selected === 'C', `Pentecost solemn blessing did not render from the Missal: ${JSON.stringify(renderedKoreanBlessings)}`);
    assert(renderedKoreanBlessings.ordinarySunday.directKey === null && renderedKoreanBlessings.ordinarySunday.selected === 'A' && renderedKoreanBlessings.ordinarySunday.selectedLabel === '일반적인 강복', `A generic Ordinary Time Sunday should default to the simple blessing: ${JSON.stringify(renderedKoreanBlessings)}`);
    assert(renderedKoreanBlessings.maryMagdalene.directKey === null && renderedKoreanBlessings.maryMagdalene.selected === 'A' && renderedKoreanBlessings.maryMagdalene.selectedLabel === '일반적인 강복', `Saint Mary Magdalene should default to the simple blessing: ${JSON.stringify(renderedKoreanBlessings)}`);

    const vietnameseLoading = await page.evaluate(() => {
      const section = text => ({ text, lines: [{ text }] });
      const partial = { title: 'Thánh lễ', data: { reading1: section('Bài đọc'), gospel: section('Tin Mừng') } };
      const complete = { title: 'Thánh lễ', data: Object.fromEntries(requiredVietnameseDailySectionKeys.map(key => [key, section(key)])) };
      state.dailyReadingsLoading = false;
      state.dailyReadingLanguageStatus = { VN: 'error' };
      state.dailyReadingLanguageErrorAt = { VN: Date.now() };
      showAppTab('mass');
      syncLiturgyLoadingStatusBar('VN', 'EN');
      const bar = document.getElementById('liturgy-status-bar');
      return {
        partialAccepted: hasCompleteVietnameseParsedMass(partial),
        missing: missingVietnameseDailySections(partial),
        completeAccepted: hasCompleteVietnameseParsedMass(complete),
        errorVisible: !!bar?.classList.contains('is-visible'),
        errorText: bar?.textContent.trim() || ''
      };
    });
    assert(!vietnameseLoading.partialAccepted && vietnameseLoading.missing.includes('collect'), `Partial Vietnamese liturgy was accepted: ${JSON.stringify(vietnameseLoading)}`);
    assert(vietnameseLoading.completeAccepted, 'Complete Vietnamese liturgy was rejected');
    assert(vietnameseLoading.errorVisible && vietnameseLoading.errorText.includes('전체를 불러오지 못했습니다'), `Vietnamese load failure disappeared silently: ${JSON.stringify(vietnameseLoading)}`);
    await page.waitForTimeout(8250);
    const vietnameseFailureAutoHide = await page.evaluate(() => {
      syncLiturgyLoadingStatusBar('VN', 'EN');
      const bar = document.getElementById('liturgy-status-bar');
      return {
        visible: !!bar?.classList.contains('is-visible'),
        status: state.dailyReadingLanguageStatus.VN
      };
    });
    assert(!vietnameseFailureAutoHide.visible && vietnameseFailureAutoHide.status === 'error-hidden', `Vietnamese failure message reappeared after timeout: ${JSON.stringify(vietnameseFailureAutoHide)}`);

    await page.setViewportSize({ width: 390, height: 844 });
    const mobileBoxSpacing = await page.evaluate(() => {
      const fixture = document.createElement('div');
      fixture.innerHTML = [
        '<div class="pc-line-row"><div class="pc-col">미사 간격 검사</div></div>',
        '<div class="aux-card aux-panel-header-card"><h2>검색 제목</h2><div class="aux-dev-warning">검색 안내문</div><div class="aux-controls"><div class="aux-search-row"><select class="aux-select"><option>분류</option></select><input class="aux-input"><button class="aux-button">검색</button></div></div></div>',
        '<div id="prayer-results" class="aux-results"><div class="aux-card">기도문 1</div><div class="aux-card">기도문 2</div></div>',
        '<div class="hymn-list"><div class="hymn-list-item"><span>태그</span><span>성가 1</span></div><div class="hymn-list-item"><span>태그</span><span>성가 2</span></div></div>',
        '<div class="aux-two-column"><div class="aux-language-block">원문</div><div class="aux-language-block">번역문</div></div>'
      ].join('');
      document.body.appendChild(fixture);
      const row = fixture.querySelector(':scope > .pc-line-row');
      const column = row?.querySelector('.pc-col');
      const headerCard = fixture.querySelector('.aux-panel-header-card');
      const headerTitle = headerCard?.querySelector('h2');
      const headerWarning = headerCard?.querySelector('.aux-dev-warning');
      const headerSearchRow = headerCard?.querySelector('.aux-search-row');
      const headerSearchButton = headerCard?.querySelector('.aux-button');
      const prayerResults = fixture.querySelector('#prayer-results');
      const prayerCard = prayerResults?.querySelector('.aux-card');
      const hymnList = fixture.querySelector('.hymn-list');
      const hymnItem = hymnList?.querySelector('.hymn-list-item');
      const languageGrid = fixture.querySelector('.aux-two-column');
      const quickMenu = document.getElementById('quick-home-menu');
      const quickActive = quickMenu?.querySelector('.quick-home-btn.is-active');
      const quickInactive = quickMenu?.querySelector('.quick-home-btn:not(.is-active)');
      const rowStyle = row ? getComputedStyle(row) : null;
      const columnStyle = column ? getComputedStyle(column) : null;
      const result = {
        massRowMarginBottom: rowStyle?.marginBottom || '',
        massColumnPaddingTop: columnStyle?.paddingTop || '',
        massColumnPaddingBottom: columnStyle?.paddingBottom || '',
        headerMinHeight: getComputedStyle(headerCard).minHeight,
        headerMarginBottom: getComputedStyle(headerCard).marginBottom,
        headerTitleMinHeight: getComputedStyle(headerTitle).minHeight,
        headerWarningMinHeight: getComputedStyle(headerWarning).minHeight,
        headerSearchColumns: getComputedStyle(headerSearchRow).gridTemplateColumns.split(/\s+/).filter(Boolean).length,
        headerSearchButtonStart: getComputedStyle(headerSearchButton).gridColumnStart,
        headerSearchButtonEnd: getComputedStyle(headerSearchButton).gridColumnEnd,
        prayerGap: getComputedStyle(prayerResults).rowGap,
        prayerCardMarginBottom: getComputedStyle(prayerCard).marginBottom,
        hymnGap: getComputedStyle(hymnList).rowGap,
        hymnItemGap: getComputedStyle(hymnItem).rowGap,
        hymnItemPaddingTop: getComputedStyle(hymnItem).paddingTop,
        languageBoxGap: getComputedStyle(languageGrid).rowGap,
        quickMenuBackground: quickMenu ? getComputedStyle(quickMenu).backgroundColor : '',
        quickInactiveBackground: quickInactive ? getComputedStyle(quickInactive).backgroundColor : '',
        quickInactiveColor: quickInactive ? getComputedStyle(quickInactive).color : '',
        quickInactiveOpacity: quickInactive ? getComputedStyle(quickInactive).opacity : '',
        quickInactiveRadius: quickInactive ? getComputedStyle(quickInactive).borderRadius : '',
        quickInactiveShadow: quickInactive ? getComputedStyle(quickInactive).boxShadow : '',
        quickActiveBackground: quickActive ? getComputedStyle(quickActive).backgroundColor : '',
        quickActiveColor: quickActive ? getComputedStyle(quickActive).color : '',
        quickActiveOpacity: quickActive ? getComputedStyle(quickActive).opacity : '',
        quickActiveRadius: quickActive ? getComputedStyle(quickActive).borderRadius : '',
        quickActiveShadow: quickActive ? getComputedStyle(quickActive).boxShadow : ''
      };
      fixture.remove();
      return result;
    });
    assert(mobileBoxSpacing.massRowMarginBottom === '5px' && mobileBoxSpacing.massColumnPaddingTop === '5px' && mobileBoxSpacing.massColumnPaddingBottom === '5px', `Mobile Mass spacing was not restored: ${JSON.stringify(mobileBoxSpacing)}`);
    assert(mobileBoxSpacing.headerMinHeight === '0px' && mobileBoxSpacing.headerTitleMinHeight === '38px' && mobileBoxSpacing.headerWarningMinHeight === '72px' && mobileBoxSpacing.headerSearchColumns === 2 && mobileBoxSpacing.headerSearchButtonStart === '1' && mobileBoxSpacing.headerSearchButtonEnd === '-1', `Mobile prayer/hymn search cards were not compacted: ${JSON.stringify(mobileBoxSpacing)}`);
    assert(mobileBoxSpacing.headerMarginBottom === '14px' && mobileBoxSpacing.prayerGap === '12px' && mobileBoxSpacing.prayerCardMarginBottom === '14px' && mobileBoxSpacing.hymnGap === '8px' && mobileBoxSpacing.hymnItemGap === '6px' && mobileBoxSpacing.hymnItemPaddingTop === '9px' && mobileBoxSpacing.languageBoxGap === '12px', `Prayer/hymn result-card spacing should remain unchanged: ${JSON.stringify(mobileBoxSpacing)}`);
    assert(mobileBoxSpacing.quickMenuBackground === 'rgba(26, 37, 47, 0.16)' && mobileBoxSpacing.quickInactiveBackground === 'rgb(26, 37, 47)' && mobileBoxSpacing.quickInactiveColor === 'rgb(255, 255, 255)' && mobileBoxSpacing.quickInactiveOpacity === '1' && mobileBoxSpacing.quickInactiveRadius !== '0px' && mobileBoxSpacing.quickInactiveShadow !== 'none' && mobileBoxSpacing.quickActiveBackground === 'rgb(38, 55, 70)' && mobileBoxSpacing.quickActiveColor === 'rgb(255, 255, 255)' && mobileBoxSpacing.quickActiveOpacity === '1' && mobileBoxSpacing.quickActiveRadius !== '0px' && mobileBoxSpacing.quickActiveShadow !== 'none', `Quick navigation buttons must remain fully opaque pills with shadows: ${JSON.stringify(mobileBoxSpacing)}`);
    const mobilePanelAlignment = await page.evaluate(() => {
      const measure = tab => {
        showAppTab(tab);
        const card = document.querySelector(`#${tab === 'prayers' ? 'prayer' : 'hymn'}-panel .aux-panel-header-card`);
        const cardRect = card.getBoundingClientRect();
        return {
          height: cardRect.height,
          headingTop: card.querySelector('h2').getBoundingClientRect().top - cardRect.top,
          warningTop: card.querySelector('.aux-dev-warning').getBoundingClientRect().top - cardRect.top,
          searchTop: card.querySelector('.aux-controls-anchor').getBoundingClientRect().top - cardRect.top
        };
      };
      return { prayers: measure('prayers'), hymns: measure('hymns') };
    });
    for (const key of ['height', 'headingTop', 'warningTop', 'searchTop']) {
      assert(Math.abs(mobilePanelAlignment.prayers[key] - mobilePanelAlignment.hymns[key]) <= 2, `Mobile prayer/hymn header ${key} is misaligned: ${JSON.stringify(mobilePanelAlignment)}`);
    }
    assert(mobilePanelAlignment.prayers.height <= 280 && mobilePanelAlignment.hymns.height <= 280, `Mobile prayer/hymn search cards still obscure too much of the results list: ${JSON.stringify(mobilePanelAlignment)}`);
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.locator('#consent-accept').click({ timeout: 1500 }).catch(() => {});
    await page.locator('[data-vn-source="hanoi"]').click({ timeout: 1500 }).catch(() => {});
    await page.waitForFunction(() => typeof massData !== 'undefined' && Array.isArray(massData) && massData.length > 20);
    await page.evaluate(() => { state.currentLoc = 'KR'; state.targetLang = 'EN'; state.dailyReadingsLoading = false; state.dailyReadingLanguageStatus = {}; hideLiturgyStatusBar(); showAppTab('prayers'); renderPrayerPanel(); window.scrollTo(0, 0); });
    await page.locator('#prayer-results details.aux-prayer-list-item').first().locator('summary').click();
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(250);
    await page.screenshot({ path: path.join(outputDir, 'v22-5-prayer-list-mobile.png'), fullPage: false });
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.locator('#consent-accept').click({ timeout: 1500 }).catch(() => {});
    await page.locator('[data-vn-source="hanoi"]').click({ timeout: 1500 }).catch(() => {});
    await page.waitForFunction(() => typeof massData !== 'undefined' && Array.isArray(massData) && massData.length > 20);
    await page.evaluate(() => { state.currentLoc = 'KR'; state.targetLang = 'EN'; state.dailyReadingsLoading = false; state.dailyReadingLanguageStatus = {}; hideLiturgyStatusBar(); showAppTab('hymns'); document.getElementById('hymn-country').value = 'KR'; renderHymnPanel({ resetCategory: true }); window.scrollTo(0, 0); });
    await page.waitForTimeout(250);
    await page.screenshot({ path: path.join(outputDir, 'v22-5-hymn-list-mobile.png'), fullPage: false });

    assert(pageErrors.length === 0, `Page errors: ${pageErrors.join('\n')}`);
    console.log(JSON.stringify({ prefaceData, perpetualCalendar, koreanMissalOverlays, timeZoneRouting, languageDefaults, selections, ktcgParsing, renderedSelections, romanCanon, renderedEasterCanon, vietnameseDirectUrls, vietnameseTemporalFallback, desktopVietnamRouting, vietnameseSplitSourceComposition, july12EntranceSourceChoice, ibreviaryOfferingChoices, unpairedOfferingAlignment, july12GospelAlternatives, voiceUi, massTabScrollReturn, prayerUi, vietnamesePrayerSourceCategory, prayerLanguageVisibility, vietnamesePrayerImport, prayerDetailUi, automaticPrayerTranslation, importedPrayerUi, panelAlignment, mobilePanelAlignment, mobileBoxSpacing, hymnUi, hymnDetailUi, vietnameseHymnMarkers, reversedHymnTranslation, forwardHymnTranslation, backgroundLiturgyLoading, koreanBlessingRouting, renderedKoreanBlessings, vietnameseLoading, vietnameseFailureAutoHide, pageErrors }, null, 2));
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error.stack || error);
  process.exit(1);
});
