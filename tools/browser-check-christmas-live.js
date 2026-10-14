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
      if (!['app_v29.js', 'country_special_liturgies_v29.js', 'special_liturgy_order.js'].includes(name)) return route.continue();
      return route.fulfill({ contentType: 'application/javascript', body: fs.readFileSync(path.join(root, 'JS file', name), 'utf8') });
    });
    await page.goto('https://sluggishjedi-max.github.io/catholic-mass-translation/?christmas-check=' + Date.now(), {
      waitUntil: 'domcontentloaded', timeout: 60000
    });
    await page.waitForFunction(() => globalThis.ordoFirebaseDataStatus && typeof state !== 'undefined', null, { timeout: 90000 });
    const parserChecks = await page.evaluate(() => {
      let cases = 0;
      const body = 'Preserve this petition.';
      for (const lang of SUPPORTED_LANGS) for (const key of ['collect','prayer_offerings','prayer_after']) {
        for (const style of ['through_son','relative_son','addressed_son']) {
          const ending = localizedPrayerConclusionFormula(lang, key, style);
          if (!ending) continue;
          const parsed = normalizePrayerParsedLinesBeforeApply(lang.toLowerCase(), key,
            [{text:body + ' ' + ending + ' !Image 1: source footer © publisher'}]);
          if (parsed.filter(line => line.role === 'conclusion').length !== 1
              || !parsed.some(line => line.text === body)
              || parsed.some(line => /source footer|publisher|!Image/.test(line.text))) throw Error(lang + ' ' + key + ' ' + style);
          cases += 1;
        }
      }
      for (const style of ['through_son','relative_son','addressed_son']) {
        const ending = localizedPrayerConclusionFormula('EN','collect',style).replace(', God,', ', one God,');
        const parsed = normalizePrayerParsedLinesBeforeApply('en','collect',[{text:body + ' ' + ending}]);
        const expected = style === 'through_son' ? ending.replace(', one God,', ', God,') : ending;
        if (parsed.find(line => line.role === 'conclusion')?.text !== expected) throw Error('English one God ending was not separated: ' + style);
        cases += 1;
      }
      const korean = normalizePrayerParsedLinesBeforeApply('kr','prayer_after',[
        {text:'주님, 저희를 지켜 주소서. 성자께서는 영원히 ……. !Image 1: 공유하기'},
        {text:'이전 오늘 목록 출력 글자 -;'}
      ]);
      if (korean.length !== 2 || korean[1].role !== 'conclusion' || /…|공유하기|목록/.test(parsedLinesToText(korean))) throw Error('Korean abbreviated ending/footer');
      return cases + 1;
    });
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
        if (!['reading1', 'psalm', 'reading2', 'gospel_accl', 'gospel', 'collect', 'prayer_offerings', 'prayer_after'].includes(id)) continue;
        const selected = item.variants?.[state.options[id]] || item.variants?.A || item;
        const lines = selected.lines || item.lines || [];
        parts[id] = {
          kr: lines.map(line => line.text_kr || '').join('\n'),
          en: lines.map(line => line.text_en || '').join('\n'),
          citation: Object.assign({}, item.cit || {}, selected.cit || {}),
          secondReading: item.__dailyHasSecondReading,
          roles: Object.fromEntries(['kr', 'en'].map(lang => [lang, lines.filter(line => line['role_' + lang] === 'conclusion').length]))
        };
      }
      return {
        status: Object.assign({}, state.dailyReadingLanguageStatus),
        title: state.liturgyInfo.names.KR, preface: state.liturgyInfo.prefaceKey,
        header: document.querySelector('header').innerText,
        body: document.getElementById('missal-root').innerText,
        blessing: koreanBlessingDateSelection(getTargetDate(), state.liturgyInfo)?.key,
        date: formatDateIso(getTargetDate()), parts,
        displayedNames: { KR: getLiturgyDisplayName('KR'), EN: getLiturgyDisplayName('EN') },
        ids: [...document.querySelectorAll('#missal-root .part-container')].map(item => item.dataset.partId),
        cribLinks: [...document.querySelectorAll('[data-part-id="christmas_crib"] a')].map(link => link.href)
      };
    });
    const daytime = await snapshot();
    assert.equal(daytime.title, '대림 제4주간 목요일');
    assert.deepEqual(daytime.displayedNames, {KR:'[나해] 대림 제4주간 목요일', EN:'Thursday of the Fourth Week of Advent - Year B'});
    assert.ok(!daytime.ids.includes('christmas_crib'));
    assert.match(daytime.header, /낮 미사/);
    assert.equal(daytime.preface, 'advent_2');
    assert.equal(daytime.blessing, 'advent');
    assert.deepEqual(daytime.status, { KR: 'done', EN: 'done' });
    assert.match(daytime.parts.gospel.citation.cit_kr, /루카\s*1,67-79/);
    assert.match(daytime.parts.gospel.en, /Blessed be the Lord|Zechariah/i);
    assert.match(daytime.body, /Blessed be the Lord|Zechariah/i, 'English daytime Gospel is absent from the rendered DOM');
    const verifyPrayers = snapshot => {
      for (const id of ['collect', 'prayer_offerings', 'prayer_after']) {
        const part = snapshot.parts[id];
        assert.deepEqual(part.roles, {kr:1,en:1}, snapshot.title + ': ' + id + ' conclusion roles');
        assert.equal((part.en.match(/^(?:Who lives? and reigns?|Through (?:our Lord Jesus Christ|Christ our Lord))/gim) || []).length, 1, id + ': duplicate English conclusion');
        assert.doesNotMatch(part.kr, /…|\.{2,}|!Image|공유하기|글자크기|한국천주교중앙협의회|목록 출력|©/, id + ': source footer or abbreviated conclusion');
        assert.equal((part.kr.match(/(?:성자께서는|주님께서는|우리 주 그리스도를 통하여|성부와 성령과 함께 천주로서 영원히 살아 계시며 다스리시는)/g) || []).length, 1, id + ': duplicate Korean conclusion');
        const section = snapshot.body;
        assert.doesNotMatch(section, /!Image\s*\d|페이스북 공유하기|글자크기/, 'Source chrome is rendered');
      }
    };
    verifyPrayers(daytime);
    await page.locator('#header-liturgy-name .liturgy-nav-next').click();
    await page.waitForFunction(() => state.specialVigilNavKey === 'christmas_vigil'
      && !state.dailyReadingsLoading
      && state.dailyReadingLanguageStatus.KR === 'done' && state.dailyReadingLanguageStatus.EN === 'done'
      && /62,1-5/.test(massData.find(item=>getBaseId(item.id)==='reading1')?.cit?.cit_kr || ''), null, { timeout: 90000 });
    const vigil = await snapshot();
    verifyPrayers(vigil);
    assert.ok(vigil.ids.indexOf('christmas_crib') === vigil.ids.indexOf('universal') + 1
      && vigil.ids.indexOf('christmas_crib') < vigil.ids.indexOf('offertory'), 'Crib blessing is not after the Universal Prayer and before the Offertory');
    assert.doesNotMatch(await page.locator('[data-part-id="universal"]').innerText(), /전능하신 주 하느님/, 'The ordinary conclusion was not replaced by the prayer of blessing');
    assert.ok(vigil.ids.includes('penitential') && vigil.ids.includes('gospel'), 'Crib devotion replaced an ordinary rite');
    assert.deepEqual(vigil.cribLinks, [], 'Crib devotion contains source links');
    const cribOriginals = await page.locator('[data-part-id="christmas_crib"]').evaluate(element => ({
      languages:[...element.querySelectorAll('[data-source-lang]')].map(block => block.dataset.sourceLang),
      aiButtons:element.querySelectorAll('.ai-btn, .ai-button').length,
      text:[...element.querySelectorAll('.special-rite-original > p')].map(p => p.innerText).join('\n'),
      standalone:[...element.querySelectorAll('.special-rite-standalone p')].map(p => p.textContent).join('\n')
    }));
    assert.deepEqual(cribOriginals.languages, ['EN'], 'The complete original is missing or an unverified translation is displayed');
    assert.equal(cribOriginals.aiButtons, 0, 'Crib original was offered for automatic translation');
    assert.match(cribOriginals.text, /With hands outstretched, the celebrant says the prayer of blessing:/);
    assert.match(cribOriginals.text, /God of every nation and people,/);
    assert.match(cribOriginals.text, /justice, mercy, and love\./);
    assert.match(cribOriginals.text, /and who lives and reigns forever and ever\.\s*R\/\. Amen\.$/);
    assert.doesNotMatch(cribOriginals.text, /excerpt|…|[가-힣]|Our help|Reader:|Luke 2:1/i);
    assert.match(cribOriginals.standalone, /All make the sign of the cross as the leader says:/);
    assert.match(cribOriginals.standalone, /Luke 2:1 \(lines 1-8\)/);
    assert.match(cribOriginals.standalone, /R\/\. Amen\.$/);
    await page.evaluate(() => {state.targetLang='VN'; render();});
    assert.equal(await page.locator('[data-part-id="christmas_crib"]').evaluate(element => [...element.querySelectorAll('.special-rite-original > p')].map(p => p.innerText).join('\n')), cribOriginals.text,
      'The English original disappeared when English was not in the selected language pair');
    await page.evaluate(() => {state.targetLang='EN'; render();});
    if (process.argv.includes('--screenshots')) {
      const dir = path.join(root, 'tmp', 'christmas-check');
      fs.mkdirSync(dir, {recursive:true});
      await page.locator('[data-part-id="christmas_crib"]').evaluate(element => window.scrollTo(0, window.scrollY + element.getBoundingClientRect().top - 245));
      await page.screenshot({path:path.join(dir, mobile ? 'mobile.png' : 'desktop.png'), fullPage:false});
    }
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
    verifyPrayers(returned);
    assert.ok(!returned.ids.includes('christmas_crib'));
    assert.equal(returned.title, daytime.title); assert.equal(returned.blessing, 'advent');
    assert.match(returned.parts.gospel.citation.cit_kr, /루카\s*1,67-79/);
    console.log(JSON.stringify({ local, mobile, version: setup.version, publishedMassCount: setup.firebase.massCount,
      daytime: daytime.title, vigil: vigil.title, bilingualReadings: true, singlePrayerConclusions: true,
      cleanPrayerAfterCommunion: true, optionalCribRite: true, parserChecks, actualDateButtons: true, passed: true }, null, 2));
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
