// Exercise the published Firebase data, complete render, and actual date buttons.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require('@playwright/test');
const root = path.resolve(__dirname, '..');
const local = process.argv.includes('--local');
const mobile = process.argv.includes('--mobile');

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ timezoneId: 'Asia/Seoul', viewport:mobile ? {width:390,height:844} : {width:1280,height:900} });
    if (local) await page.route('**/JS%20file/*.js*', route => {
      const name = path.basename(new URL(route.request().url()).pathname);
      if (!['app_v29.js', 'country_special_liturgies_v29.js'].includes(name)) return route.continue();
      return route.fulfill({ contentType: 'application/javascript', body: fs.readFileSync(path.join(root, 'JS file', name), 'utf8') });
    });
    await page.goto('https://sluggishjedi-max.github.io/catholic-mass-translation/?christmas-check=' + Date.now(), {
      waitUntil: 'domcontentloaded', timeout: 60000
    });
    await page.waitForFunction(() => globalThis.ordoFirebaseDataStatus && typeof state !== 'undefined', null, { timeout: 90000 });
    const setup = await page.evaluate(async () => {
      state.useGps = false;
      state.selectedLocationCode = 'KR'; state.currentLoc = 'KR';
      state.targetLang = 'EN'; state.targetLocationCode = 'US';
      state.uiLang = 'KR';
      getStrictDateBase = () => ({ localDay: new Date(2026, 11, 24), hour: 12, timeZone: 'Asia/Seoul' });
      state.dayOffset = 0; state.liturgyNavSlot = 'day'; state.specialVigilNavKey = '';
      state.liturgicalDateContext = null;
      acceptStartupNotice();
      await fetchMassData({ skipStartupPrompts: true, forceRemote: true });
      return { version: APP_VERSION, firebase: ordoFirebaseDataStatus };
    });
    assert.ok(setup.firebase.massCount > 0, 'Published ordinary Mass data did not load');
    const snapshot = () => page.evaluate(() => {
      const parts = {};
      for (const item of massData) {
        const id = getBaseId(item.id);
        if (!['reading1', 'psalm', 'reading2', 'gospel_accl', 'gospel'].includes(id)) continue;
        const selected = item.variants?.[state.options[id]] || item.variants?.A || item;
        const lines = selected.lines || item.lines || [];
        parts[id] = {
          kr: lines.map(line => line.text_kr || '').join('\n'),
          en: lines.map(line => line.text_en || '').join('\n'),
          citation: Object.assign({}, item.cit || {}, selected.cit || {}),
          secondReading: item.__dailyHasSecondReading
        };
      }
      return {
        status: Object.assign({}, state.dailyReadingLanguageStatus),
        title: state.liturgyInfo.names.KR, preface: state.liturgyInfo.prefaceKey,
        header: document.querySelector('header').innerText,
        body: document.getElementById('missal-root').innerText,
        blessing: koreanBlessingDateSelection(getTargetDate(), state.liturgyInfo)?.key,
        date: formatDateIso(getTargetDate()), parts
      };
    });
    const daytime = await snapshot();
    assert.equal(daytime.title, '12월 24일');
    assert.match(daytime.header, /낮 미사/);
    assert.equal(daytime.preface, 'advent_2');
    assert.equal(daytime.blessing, 'advent');
    assert.deepEqual(daytime.status, { KR: 'done', EN: 'done' });
    assert.match(daytime.parts.gospel.citation.cit_kr, /루카\s*1,67-79/);
    assert.match(daytime.parts.gospel.en, /Blessed be the Lord|Zechariah/i);
    assert.match(daytime.body, /Blessed be the Lord|Zechariah/i, 'English daytime Gospel is absent from the rendered DOM');
    await page.locator('#header-liturgy-name .liturgy-nav-next').click();
    await page.waitForFunction(() => state.specialVigilNavKey === 'christmas_vigil'
      && !state.dailyReadingsLoading
      && state.dailyReadingLanguageStatus.KR === 'done' && state.dailyReadingLanguageStatus.EN === 'done'
      && /62,1-5/.test(massData.find(item=>getBaseId(item.id)==='reading1')?.cit?.cit_kr || ''), null, { timeout: 90000 });
    const vigil = await snapshot();
    assert.equal(vigil.date, '2026-12-24');
    assert.match(vigil.title, /성탄.*전야/); assert.doesNotMatch(vigil.title, /성야/);
    assert.equal(vigil.preface, 'nativity_1'); assert.equal(vigil.blessing, 'christmas');
    for (const id of ['reading1', 'psalm', 'reading2', 'gospel_accl', 'gospel']) {
      assert.ok(vigil.parts[id].kr.trim(), id + ': Korean render is empty');
      assert.ok(vigil.parts[id].en.trim(), id + ': English render is empty');
    }
    assert.match(vigil.parts.reading1.citation.cit_kr, /이사\s*62,1-5/);
    assert.match(vigil.parts.reading2.citation.cit_kr, /사도\s*13,16-17\.22-25/);
    assert.match(vigil.parts.gospel.kr, /아브라함|마리아/);
    assert.match(vigil.parts.gospel.en, /genealogy of Jesus Christ|birth of Jesus Christ/i);
    assert.match(vigil.body, /genealogy of Jesus Christ|birth of Jesus Christ/i, 'English Vigil Gospel is absent from the rendered DOM');
    await page.locator('#header-liturgy-name .liturgy-nav-prev').click();
    await page.waitForFunction(() => state.liturgyNavSlot === 'day'
      && !state.dailyReadingsLoading
      && state.dailyReadingLanguageStatus.KR === 'done' && state.dailyReadingLanguageStatus.EN === 'done'
      && /루카\s*1,67-79/.test(massData.find(item=>getBaseId(item.id)==='gospel')?.cit?.cit_kr || ''), null, { timeout: 90000 });
    const returned = await snapshot();
    assert.equal(returned.title, daytime.title); assert.equal(returned.blessing, 'advent');
    assert.match(returned.parts.gospel.citation.cit_kr, /루카\s*1,67-79/);
    console.log(JSON.stringify({ local, mobile, version: setup.version, publishedMassCount: setup.firebase.massCount,
      daytime: daytime.title, vigil: vigil.title, bilingualReadings: true, actualDateButtons: true, passed: true }, null, 2));
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
