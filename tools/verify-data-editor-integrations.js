const assert = require('assert');
const vm = require('vm');

const prayerTool = require('./prayer-data-insert-tool');
const hymnTool = require('./hymn-data-entry-tool');
const massTool = require('./mass-data-editor');
const { buildFirebaseUploadPayload } = require('./firebase-upload-support');

function compileInlineScripts(html, label) {
  const scripts = Array.from(html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/giu));
  assert(scripts.length, `${label}: inline script is missing`);
  scripts.forEach((match, index) => new vm.Script(match[1], { filename: `${label}-inline-${index + 1}.js` }));
}

async function listen(server) {
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  return server.address();
}

async function close(server) {
  await new Promise(resolve => server.close(resolve));
}

async function verifyServer(label, createServer, expected) {
  const server = createServer();
  const address = await listen(server);
  const base = `http://127.0.0.1:${address.port}`;
  try {
    const htmlResponse = await fetch(`${base}/`);
    assert.strictEqual(htmlResponse.status, 200, `${label}: root response`);
    const html = await htmlResponse.text();
    expected.html.forEach(text => assert(html.includes(text), `${label}: missing UI text ${text}`));
    (expected.absent || []).forEach(text => assert(!html.includes(text), `${label}: obsolete UI text or control remains: ${text}`));
    assert(html.includes('/firebase-upload-client.js'), `${label}: Firebase client is not linked`);
    compileInlineScripts(html, label);

    const clientResponse = await fetch(`${base}/firebase-upload-client.js`);
    assert.strictEqual(clientResponse.status, 200, `${label}: Firebase client response`);
    new vm.Script(await clientResponse.text(), { filename: `${label}-firebase-client.js` });

    const uploadResponse = await fetch(`${base}/api/firebase-export`);
    assert.strictEqual(uploadResponse.status, 200, `${label}: Firebase export response`);
    const upload = await uploadResponse.json();
    assert.strictEqual(upload.collectionName, expected.collectionName, `${label}: Firebase collection`);
    assert(upload.items.length > 0, `${label}: Firebase export is empty`);
    assert(upload.items.every(item => item.docId && item.data && Number.isFinite(item.data.order)), `${label}: invalid Firebase documents`);
    assert.strictEqual(new Set(upload.items.map(item => item.docId)).size, upload.items.length, `${label}: duplicate Firebase document ids`);

    return { html, base };
  } finally {
    await close(server);
  }
}

async function verifyPrayerCountryUi() {
  const server = prayerTool.createServer();
  const address = await listen(server);
  const base = `http://127.0.0.1:${address.port}`;
  try {
    const state = await (await fetch(`${base}/api/state`)).json();
    assert(state.ok && state.countries.length >= 10, 'Prayer editor country state is missing');
    assert(state.countries.some(country => country.jurisdiction === 'KR' && country.language === 'KR'));
    assert.deepStrictEqual(state.categories.slice(0, 9), [
      'common', 'rosary', 'stations_of_cross', 'litany', 'Various',
      'sacrament', 'blessing_household', 'funeral', 'monthly'
    ], 'Prayer categories are out of the requested order');
    const list = await (await fetch(`${base}/api/prayers?country=KR&language=KR`)).json();
    assert(list.ok && list.prayers.length > 0, 'Korean prayer list is empty');
    const sortedIds = list.prayers.map(prayer => prayer.id)
      .slice()
      .sort(prayerTool.comparePrayerIds);
    assert.deepStrictEqual(list.prayers.map(prayer => prayer.id), sortedIds, 'Prayer list must use natural id order');
    const signOfCross = list.prayers.findIndex(prayer => prayer.id === '001.sign_of_cross');
    const doubleSignOfCross = list.prayers.findIndex(prayer => prayer.id === '001-1.sign_of_cross_double');
    const lordsPrayer = list.prayers.findIndex(prayer => prayer.id === '002.lords_prayer');
    assert(signOfCross < doubleSignOfCross && doubleSignOfCross < lordsPrayer, 'Base and sub-number prayer ids are out of order');
    const sharedPrayer = list.prayers.find(prayer => prayer.id === '001.sign_of_cross');
    assert(sharedPrayer.jurisdictions.includes('KR'), 'Prayer country tags must include the selected country');
    assert(sharedPrayer.jurisdictions.length > 1, 'Shared prayers must expose every owning country tag');
    const titleOnlyPrayer = list.prayers.find(prayer => prayer.id === 'kr_10_99');
    assert(titleOnlyPrayer && !titleOnlyPrayer.hasText, 'Title-only prayer fixture is missing');
    assert(!titleOnlyPrayer.jurisdictions.includes('KR'), 'A title-only country must not appear in prayer country tags');
    const first = list.prayers[0];
    const detail = await (await fetch(`${base}/api/prayer?country=KR&lang=KR&id=${encodeURIComponent(first.id)}`)).json();
    assert(detail.ok && detail.prayer.id === first.id && detail.prayer.lang === 'KR');
    const firstMeta = state.prayers.find(prayer => prayer.id === first.id);
    assert(Array.isArray(firstMeta.countryEntries) && Array.isArray(firstMeta.countryTextEntries),
      'Prayer state must expose country-specific entry status');
    const unusedCountry = state.countries.find(country => !firstMeta.countryEntries.includes(country.jurisdiction));
    if (unusedCountry) {
      const countryDetail = await (await fetch(`${base}/api/prayer?country=${unusedCountry.jurisdiction}&lang=${unusedCountry.language}&id=${encodeURIComponent(first.id)}`)).json();
      assert(countryDetail.ok && countryDetail.prayer.id === first.id && !countryDetail.prayer.existsInCountry,
        'Prayer editor must load an empty country slot for the selected id');
    }
  } finally {
    await close(server);
  }
}

function verifyExplicitCountryOwnership() {
  const sources = prayerTool.readCountryModuleSources();
  const data = JSON.parse(JSON.stringify(prayerTool.loadPrayerData()));
  prayerTool.updatePrayerDetail(data, {
    id: 'codex.country.owner.check',
    jurisdiction: 'AU',
    lang: 'EN',
    category: 'national',
    title: 'Country ownership check',
    text: 'Amen.',
    sourceCategory: 'Check'
  });
  const prepared = prayerTool.prepareCountryModuleSources(data, sources);
  const changed = prepared.filter((source, index) => source.code !== sources[index].code).map(source => source.jurisdiction);
  assert.deepStrictEqual(changed, ['AU'], 'Explicit country ownership must route a new prayer to Australia');
}

function verifyPrayerCategoryEditing() {
  const data = JSON.parse(JSON.stringify(prayerTool.loadPrayerData()));
  const target = data.prayers.find(prayer => prayer.titles && prayer.titles.KR);
  assert(target, 'Korean prayer category fixture is missing');
  const nextCategory = target.category === 'common' ? 'rosary' : 'common';
  const updated = prayerTool.updatePrayerCategory(data, {
    targetId: target.id,
    targetLang: 'KR',
    category: nextCategory
  });
  assert.strictEqual(updated.category, nextCategory);
  assert.strictEqual(data.prayers.find(prayer => prayer.id === target.id).category, nextCategory);
}

function verifyCountrySpecificSaveRouting() {
  const sources = prayerTool.readCountryModuleSources();
  const data = prayerTool.runCountryModuleSources(sources).data;
  const target = data.prayers.find(prayer => prayer.titles && prayer.titles.EN);
  assert(target, 'English prayer fixture is unavailable');
  const us = prayerTool.prepareCountryPrayerUpdate({
    originalId: target.id, id: target.id, jurisdiction: 'US', category: target.category,
    title: 'US country variant', text: 'US country-specific body', sourceCategory: ''
  }, sources);
  assert.deepStrictEqual(us.nextSources.filter((source, index) => source.code !== sources[index].code)
    .map(source => source.jurisdiction), ['US'], 'US editing must touch only the US country module');
  const au = prayerTool.prepareCountryPrayerUpdate({
    originalId: target.id, id: target.id, jurisdiction: 'AU', category: target.category,
    title: 'AU country variant', text: 'AU country-specific body', sourceCategory: ''
  }, us.nextSources);
  assert.deepStrictEqual(au.nextSources.filter((source, index) => source.code !== us.nextSources[index].code)
    .map(source => source.jurisdiction), ['AU'], 'AU editing must touch only the AU country module');
  const runtime = prayerTool.runCountryModuleSources(au.nextSources);
  const usEntry = runtime.countries.US.entries.find(prayer => prayer.id === target.id);
  const auEntry = runtime.countries.AU.entries.find(prayer => prayer.id === target.id);
  assert.strictEqual(usEntry.texts.EN, 'US country-specific body');
  assert.strictEqual(auEntry.texts.EN, 'AU country-specific body');
  assert.notStrictEqual(usEntry.texts.EN, auEntry.texts.EN, 'English prayer variants must remain independent by country');
  const deletedUs = prayerTool.prepareCountryPrayerLanguageDelete({
    id: target.id, jurisdiction: 'US'
  }, au.nextSources);
  const afterDelete = prayerTool.runCountryModuleSources(deletedUs.nextSources);
  const remainingUs = afterDelete.countries.US.entries.find(prayer => prayer.id === target.id);
  const remainingAu = afterDelete.countries.AU.entries.find(prayer => prayer.id === target.id);
  assert(!remainingUs || !remainingUs.texts.EN, 'Deleting the US body must remove only the US variant');
  assert.strictEqual(remainingAu.texts.EN, 'AU country-specific body', 'Deleting the US body must preserve the AU variant');
}

function verifyFirebasePayloadCompatibility() {
  const payload = buildFirebaseUploadPayload({
    collectionName: 'test',
    label: '검증',
    idPrefix: 'item',
    items: [{ id: 'same', value: 1 }, { id: 'same', value: 2 }, { value: 3 }]
  });
  assert.deepStrictEqual(payload.items.map(item => item.docId), ['same', 'item_2']);
  assert.strictEqual(payload.items[0].data.value, 2, 'Later duplicate ids must match the legacy uploader overwrite behavior');
}

async function main() {
  verifyFirebasePayloadCompatibility();
  verifyExplicitCountryOwnership();
  verifyPrayerCategoryEditing();
  verifyCountrySpecificSaveRouting();
  await verifyServer('prayer', prayerTool.createServer, {
    collectionName: 'prayer_data',
    html: [
      '국가별 기도문 편집기', '국가별 기도문 목록', '국가별 본문', '새 국가 추가',
      '새 기도문 추가', '앱 표시 미리보기', '중복 기도문 하나로 합치기',
      '남길 기도문', '오른쪽 기도문을 왼쪽 ID로 합치기', '이 국가 본문 삭제',
      '로컬에 저장', 'Firebase에 업로드'
    ],
    absent: ['id="language"', 'id="editor-language"', 'id="add-language"', 'id="save-category"', '다른 언어 추가']
  });
  await verifyPrayerCountryUi();
  await verifyServer('hymn', hymnTool.createServer, {
    collectionName: 'hymn_data',
    html: ['성가 데이터 편집기', '로컬에 저장', 'Firebase에 업로드']
  });
  await verifyServer('mass', massTool.createServer, {
    collectionName: 'order_of_mass',
    html: ['미사통상문 원문 · 번역문 편집기', '왼쪽 로컬 저장', '오른쪽 로컬 저장', 'Firebase에 업로드']
  });
  console.log('Data editor UI and Firebase integration checks passed.');
}

main().catch(error => {
  console.error(error && error.stack ? error.stack : error);
  process.exit(1);
});
