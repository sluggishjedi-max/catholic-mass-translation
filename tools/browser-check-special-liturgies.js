const fs = require('fs');
const path = require('path');
const http = require('http');
const assert = require('assert/strict');
const { chromium } = require('@playwright/test');
const root = process.env.ORDO_CHECK_ROOT || path.resolve(__dirname, '..');
const massTool = require(path.join(root, 'tools/mass-data-editor'));
const metadataTool = require(path.join(root, 'tools/country-metadata-upload-tool'));
const registry = massTool.runCountryMassSources(massTool.readCountryMassSources()).registry;
const metadata = Object.fromEntries(metadataTool.countryMetadataItems().map(item => [item.jurisdiction, item]));

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
    const page = await browser.newPage({ timezoneId: 'Asia/Seoul' });
    const logs = [];
    page.on('console', msg => { if (msg.type() === 'warning' || msg.type() === 'error') logs.push(msg.text()); });
    await page.addInitScript(({ mass, metadata }) => {
      globalThis.ordoPrayerEditorPreview = true;
      globalThis.uploadedCountryMassData = mass;
      globalThis.countryMassData = mass;
      globalThis.uploadedCountryMassMetadata = metadata;
    }, { mass: registry, metadata });
    await page.route('**/*', route => {
      const host = new URL(route.request().url()).hostname;
      return host === '127.0.0.1' || process.env.ORDO_DIAGNOSE_TODAY && !host.includes('gstatic') && !host.includes('firestore')
        ? route.continue() : route.abort();
    });
    await page.goto(`http://127.0.0.1:${server.address().port}/${process.env.ORDO_CHECK_HTML || 'V28.html'}`, { waitUntil: 'load' });
    await page.waitForFunction(() => typeof buildLiturgicalNavigationEntries === 'function');
    if (process.env.ORDO_DIAGNOSE_TODAY) {
      const diagnostic = await page.evaluate(async () => {
        state.useGps = false; state.selectedLocationCode = 'KR'; state.currentLoc = 'KR'; state.targetLang = 'EN'; state.targetLocationCode = 'US';
        const date = new Date(2026, 9, 7);
        state.liturgicalDateContext = { date, localDate: date, slot: 'day', navSlot: 'day' };
        state.liturgyInfo = buildGeneratedLiturgyInfo(date);
        resetMassDataFrom(getStartupOrdinaryMassData());
        const parsed = await Promise.allSettled([fetchKoreanDailyMass(date), fetchEnglishDailyMass(date)]);
        const section = {};
        parsed.forEach((result, index) => { if (result.status === 'fulfilled') mergeSourceData(section, result.value, index ? 'EN' : 'KR', { allowExternalLiturgy: true }); });
        const offering = section.prayer_offerings;
        const { optionMap } = selectableOptionMapFromData(offering, 'prayer_offerings');
        const deterministic = buildDeterministicDailyVariantAlignment('prayer_offerings', offering, optionMap);
        let ai;
        try { ai = await requestVariantAlignmentWithGemini('prayer_offerings', optionMap); }
        catch (error) { ai = { error: String(error) }; }
        finalizeDailyReadingsData(section);
        const item = massData.find(item => getBaseId(item.id) === 'prayer_offerings');
        const tasks = collectDailySemanticEquivalenceTasks(date).filter(task => task.baseId === 'prayer_offerings' && [task.leftLower, task.rightLower].includes('en'));
        const semantic = [];
        for (const task of tasks) {
          try { semantic.push({ task, equivalent: await requestSemanticEquivalenceWithGemini(task) }); }
          catch (error) { semantic.push({ task, error: String(error) }); }
        }
        return { date: formatDateIso(date), info: state.liturgyInfo, parsed: parsed.map(result => result.status === 'fulfilled' ? { title: result.value.title, offerings: result.value.data.prayer_offerings, preface: result.value.data.preface } : { error: String(result.reason) }), offering, deterministic, ai, item, semantic };
      });
      fs.mkdirSync(path.join(root, 'tmp/special-liturgies-20261007'), { recursive: true });
      fs.writeFileSync(path.join(root, 'tmp/special-liturgies-20261007/today-diagnostic.json'), JSON.stringify({ diagnostic, logs }, null, 2));
      console.log(JSON.stringify(diagnostic, null, 2));
      return;
    }
    const result = await page.evaluate(async () => {
      const check = (value, message) => { if (!value) throw new Error(message); };
      state.currentLoc = 'KR'; state.selectedLocationCode = 'KR'; state.useGps = false;
      for (const year of [2024, 2026, 2027, 2028]) {
        const base = { localDay: new Date(year, 10, 2), hour: 12, timeZone: 'Asia/Seoul' };
        const entries = buildLiturgicalNavigationEntries(base);
        const souls = entries.filter(entry => entry.offset === 0 && entry.slot === 'day');
        check(souls.map(entry => entry.allSoulsChoice).join() === 'first,second,third', 'All Souls ordering');
        check(souls.every(entry => formatDateIso(navigationEntryToContext(base, entry).date) === `${year}-11-02`), 'All Souls dates must remain identical');
        check(new Set(entries.map(entry => entry.offset)).size === 15, 'The range must still cover 15 calendar days');
        for (const offset of [-7, 7]) {
          const edgeBase = { ...base, localDay: addDays(base.localDay, -offset) };
          check(buildLiturgicalNavigationEntries(edgeBase).filter(entry => entry.offset === offset && entry.allSoulsChoice).length === 3, 'All three Masses must be available at range edges');
        }
      }
      // Drive the actual arrow buttons with a frozen clock around All Souls.
      const originalBase = getStrictDateBase;
      getStrictDateBase = () => ({ localDay: new Date(2026, 10, 2), hour: 12, timeZone: 'Asia/Seoul' });
      const originalFetch = fetchMassData;
      fetchMassData = () => {};
      state.dayOffset = 0; state.liturgyNavSlot = 'day';
      const cacheKeys = [];
      for (const [index, expected] of ['first', 'second', 'third'].entries()) {
        const date = getTargetDate();
        state.liturgyInfo = buildGeneratedLiturgyInfo(date);
        check(getStrictMassSelector(date).allSoulsChoice === expected, 'Arrow selector mismatch');
        check(state.liturgyInfo.names.KR === ['위령의날 첫째미사', '위령의날 둘째미사', '위령의날 셋째미사'][index], 'Mass title mismatch');
        document.getElementById('header-liturgy-name').innerHTML = liturgyDateNavigationHtml(state.liturgyInfo.names.KR, state.liturgyInfo.names.EN);
        cacheKeys.push(strictDailySourceCacheVariant(date));
        document.querySelector('.liturgy-nav-next').click();
      }
      check(formatDateIso(getTargetDate()) === '2026-11-03', 'Third Mass must lead to November 3');
      changeLiturgicalDay(-1); check(getAllSoulsMassChoice(getTargetDate()) === 'third', 'Reverse navigation');
      check(new Set(cacheKeys).size === 3, 'Mass caches must be distinct');
      getStrictDateBase = originalBase; fetchMassData = originalFetch;
      state.dayOffset = 0; state.liturgyNavSlot = 'day'; state.allSoulsNavChoice = ''; state.specialVigilNavKey = ''; state.liturgicalDateContext = null;
      for (const locationCode of COUNTRY_LOCATION_CODES.concat('FUTURE')) {
        state.selectedLocationCode = locationCode;
        for (const date of [new Date(2026, 11, 24), addDays(computeEasterSunday(2026), -1)]) {
          const expected = date.getMonth() === 11 ? 'christmas_vigil' : 'easter_vigil';
          const base = { localDay: date, hour: 20, timeZone: 'Asia/Seoul' };
          const entry = buildLiturgicalNavigationEntries(base).find(entry => entry.offset === 0 && entry.specialVigil === expected);
          check(entry, `${locationCode}: missing ${expected}`);
          check(navigationEntryToContext(base, entry).specialVigil === expected, 'Named vigil context');
          check(liveNavigationSlotForBase({ ...base, hour: 12 }) === 'day' && liveNavigationSlotForBase(base) === 'vigil', 'Vigil clock selection');
        }
      }
      state.selectedLocationCode = 'VN';
      const joseph = countrySpecialLiturgies.countries.VN.vigils.find(entry => entry.id === 'saint_joseph_vigil');
      joseph.dates.push('2026-03-18');
      check(specialVigilsForDay(new Date(2026, 2, 18)).some(entry => entry.id === joseph.id), 'Country-specific vigil missing');
      check(!specialVigilsForDay(new Date(2027, 2, 18)).some(entry => entry.id === joseph.id), 'Date-specific observance leaked into another year');
      check(!specialVigilsForDay(new Date(2026, 2, 18), 'KR').some(entry => entry.id === joseph.id), 'Vigil leaked to Korea');
      state.liturgicalDateContext = { date: new Date(2026, 2, 18), localDate: new Date(2026, 2, 18), navSlot: 'vigil', specialVigil: joseph.id };
      joseph.data = { VN: { collect: { text: 'COUNTRY FIXTURE', lines: [{ text: 'COUNTRY FIXTURE' }] } } };
      const parsed = await dailySourceFetchers.VN(new Date(2026, 2, 18), { locationCode: 'VN' });
      check(parsed.data.collect.text === 'COUNTRY FIXTURE', 'Country Python data failed to load');
      check(buildGeneratedLiturgyInfo(new Date(2026, 2, 18)).names.VN === joseph.names.VN, 'Country vigil title missing');
      joseph.dates.pop();
      state.selectedLocationCode = 'KR'; state.liturgicalDateContext = { date: new Date(2026, 10, 2), localDate: new Date(2026, 10, 2), allSoulsChoice: 'second' };
      check(strictScopeLinesForMassVariant(['First Mass', 'FIRST', 'Second Mass', 'SECOND', 'Third Mass', 'THIRD'], getStrictMassSelector(new Date(2026, 10, 2))).join() === 'SECOND', 'Variant content scoping');
      check(!strictScopeLinesForMassVariant(['First Mass', 'FIRST'], { allSoulsChoice: 'second' }).length, 'Missing variants must not reuse the first Mass');
      const rosaryDate = new Date(2026, 9, 7);
      state.currentLoc = 'KR'; state.targetLang = 'EN'; state.targetLocationCode = 'US';
      state.liturgicalDateContext = { date: rosaryDate, localDate: rosaryDate, navSlot: 'day' };
      state.liturgyInfo = buildGeneratedLiturgyInfo(rosaryDate);
      check(state.liturgyInfo.prefaceKey === 'mary_1' && state.liturgyInfo.prefaceKeys.includes('mary_2'), 'Rosary preface must be Mary I or II');
      const kr = localMissalEntryForLanguage('KR', rosaryDate);
      const en = localMissalEntryForLanguage('EN', rosaryDate);
      const body = (lang, entry) => variantOptionMeaningText('prayer_offerings', normalizePrayerParsedLinesBeforeApply(lang, 'prayer_offerings', formattedLocalMissalSection(lang.toUpperCase(), 'prayer_offerings', entry.data.prayer_offerings).lines));
      const leftText = body('kr', kr);
      const rightText = body('en', en);
      check(localMissalPrayerPairMatches('prayer_offerings', leftText, rightText, 'kr', 'en', rosaryDate), 'Missal prayer correspondence');
      writeCachedDailySemanticEquivalence(rosaryDate, 'prayer_offerings', leftText, rightText, false);
      check(sourceChoiceMismatchIndexes([{ text_kr: leftText, text_en: rightText }], 'prayer_offerings', {}, 'kr', 'en').length === 0, 'Incorrect cached AI decision split an authorized prayer');
      check(!localMissalPrayerPairMatches('prayer_offerings', leftText, 'Different prayer intention', 'kr', 'en', rosaryDate), 'Distinct prayers must remain distinguishable');
      const report = [];
      const eucharist = getStartupOrdinaryMassData().find(item => getBaseId(item.id) === 'eucharist');
      const songs = getEucharistSongMap(eucharist);
      check(songs.mary_2.content[0].text_en.includes('echo her thankful hymn') && !songs.mary_2.content[0].text_en.includes('Standing beside the Cross'), 'Mary II contains a different preface');
      check(songs.mary_2.content[0].text_kr.includes('마리아의 노래') && songs.mary_2.content[0].text_vn.includes('lời ca tụng'), 'Mary II translations differ from the supplied Missal');
      const motherInfo = { names: maryMotherOfChurchNames, meta: { rank: 'memorial' } };
      check(defaultPrefaceSelectionForLiturgyInfo(motherInfo, addDays(computeEasterSunday(2026), 50)).key === 'mary_mother_of_church', 'Mother of Church preface mismatch');
      check(songs.mary_mother_of_church.content[0].text_en.includes('Standing beside the Cross'), 'Mother of Church preface missing');
      for (const [dateKey, fixed] of Object.entries(fixedSaintsCalendar)) {
        if (!['memorial', 'optional'].includes(fixed.meta && fixed.meta.rank)) continue;
        const [month, day] = dateKey.split('-').map(Number);
        const date = new Date(2026, month - 1, day);
        const info = { names: fixed.names, meta: fixed.meta, isSunday: false };
        const selection = defaultPrefaceSelectionForLiturgyInfo(info, date);
        const missal = missalPrefaceIndex.entries.find(entry => entry.date === dateKey && localMissalTitleScore(fixed.names.EN || '', entry.title) >= 0.72);
        if (missal && missal.keys.length) check(missal.keys.includes(selection.key), `${dateKey}: selected ${selection.key} instead of ${missal.keys}`);
        check(songs[selection.key], `${dateKey}: unavailable preface ${selection.key}`);
        report.push({ date: dateKey, title: fixed.names.KR, selected: selection.key, source: selection.source, missalPage: missal && missal.page || null, explicitKeys: missal && missal.keys || [], common: missal && missal.common || '' });
      }
      // Every locally observed memorial in both calendar years must resolve
      // to an available preface; local proper keys remain jurisdiction-scoped.
      let countryMemorials = 0;
      let countryExplicitPrefaces = 0;
      for (const locationCode of COUNTRY_LOCATION_CODES.filter(code => code !== 'GB-NIR')) {
        state.selectedLocationCode = locationCode;
        state.currentLoc = getLangFromLocation(locationCode);
        for (const year of [2026, 2027]) {
          for (let date = new Date(year, 0, 1); date.getFullYear() === year; date = addDays(date, 1)) {
            state.liturgicalDateContext = { date, localDate: date, navSlot: 'day' };
            const info = buildGeneratedLiturgyInfo(date);
            if (!['memorial', 'optional'].includes(info.meta && info.meta.rank)) continue;
            const selection = defaultPrefaceSelectionForLiturgyInfo(info, date);
            check(songs[selection.key] || !selection.key && selection.hint, `${locationCode} ${formatDateIso(date)}: unavailable preface`);
            const sourceEntry = missalPrefaceIndex.entries.find(entry => entry.date === calendarDateKey(date)
              && entry.keys.length && localMissalTitleScore(info.names.EN || '', entry.title) >= 0.72);
            if (sourceEntry && !['calendar-local', 'calendar-exception'].includes(selection.source)) {
              check(sourceEntry.keys.includes(selection.key), `${locationCode} ${formatDateIso(date)}: preface disagrees with Missal rubric`);
              countryExplicitPrefaces++;
            }
            countryMemorials++;
          }
        }
      }
      return { allSouls: 'three same-day Masses; arrows and ±7-day boundaries verified', vigils: 'all countries and future countries; local dates and data verified', prayers: 'verified Missal translations survive an incorrect AI decision; distinct texts remain separate', memorials: report, countryMemorials, countryExplicitPrefaces };
    });
    assert.ok(result.allSouls && result.vigils);
    fs.mkdirSync(path.join(root, 'tmp/special-liturgies-20261007'), { recursive: true });
    fs.writeFileSync(path.join(root, 'tmp/special-liturgies-20261007/memorial-preface-audit.json'), JSON.stringify(result, null, 2));
    console.log(JSON.stringify({ ...result, memorials: result.memorials.length }, null, 2));
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
