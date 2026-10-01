const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const prayerTool = require('./prayer-data-insert-tool');
const hymnTool = require('./hymn-data-entry-tool');
const massTool = require('./mass-data-editor');
const countryMetadataTool = require('./country-metadata-upload-tool');
const { buildFirebaseUploadPayload, FIREBASE_UPLOAD_CLIENT } = require('./firebase-upload-support');

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
    if (expected.toast) {
      assert(/position:\s*fixed/u.test(html) && /\.(?:status|toast)\.show/u.test(html),
        `${label}: bottom popup status styling is missing`);
    }
    assert(html.includes('/firebase-upload-client.js'), `${label}: Firebase client is not linked`);
    compileInlineScripts(html, label);

    const clientResponse = await fetch(`${base}/firebase-upload-client.js`);
    assert.strictEqual(clientResponse.status, 200, `${label}: Firebase client response`);
    const firebaseClient = await clientResponse.text();
    new vm.Script(firebaseClient, { filename: `${label}-firebase-client.js` });
    assert(firebaseClient.includes('batch.delete(doc.ref)'), `${label}: Firebase upload must remove stale documents`);

    const uploadResponse = await fetch(`${base}/api/firebase-export`);
    assert.strictEqual(uploadResponse.status, 200, `${label}: Firebase export response`);
    const upload = await uploadResponse.json();
    assert.strictEqual(upload.collectionName, expected.collectionName, `${label}: Firebase collection`);
    assert(upload.items.length > 0, `${label}: Firebase export is empty`);
    assert(upload.items.every(item => item.docId && item.data && Number.isFinite(item.data.order)), `${label}: invalid Firebase documents`);
    assert.strictEqual(new Set(upload.items.map(item => item.docId)).size, upload.items.length, `${label}: duplicate Firebase document ids`);
    if (expected.countryScoped) {
      assert(upload.items.every(item => item.data.jurisdiction), `${label}: Firebase documents must retain their country jurisdiction`);
      assert(upload.items.some(item => item.docId.includes('__')), `${label}: country-scoped Firebase document ids are missing`);
    }

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
    // Merging prayers can remove a former sample id from the editable data.
    assert.deepStrictEqual(['002.lords_prayer', '001-1.sign_of_cross_double', '001.sign_of_cross'].sort(prayerTool.comparePrayerIds),
      ['001.sign_of_cross', '001-1.sign_of_cross_double', '002.lords_prayer'], 'Base and sub-number prayer ids are out of order');
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
  assert(changed.includes('AU'), 'Explicit country ownership must route a new prayer to Australia');
  const runtime = prayerTool.runCountryModuleSources(prepared);
  const owners = Object.entries(runtime.countries)
    .filter(([, module]) => module.entries.some(entry => entry.id === 'codex.country.owner.check'))
    .map(([jurisdiction]) => jurisdiction);
  assert.deepStrictEqual(owners, ['AU'], 'The new explicitly owned prayer must exist only in Australia');
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

function uploadClientContext(db, payload) {
  const context = {
    document: {
      scripts:[],
      createElement:() => ({ dataset:{}, addEventListener(event, callback) { this[event] = callback; } }),
      head:{ appendChild:script => { context.document.scripts.push(script); queueMicrotask(() => script.load()); } }
    },
    confirm:() => true,
    fetch:async () => ({ ok:true, json:async () => payload }),
    firebase:{ apps:[], initializeApp() { this.apps.push({}); }, firestore:() => db }
  };
  context.window = context;
  vm.createContext(context);
  vm.runInContext(FIREBASE_UPLOAD_CLIENT, context);
  return context;
}

async function verifyFirebaseCollectionReplacement() {
  for (const collectionName of ['prayer_data', 'hymn_data', 'order_of_mass', 'country_mass_metadata']) {
    const payload = buildFirebaseUploadPayload({ collectionName, label:'검증', idPrefix:'item',
      items:Array.from({ length:401 }, (_, index) => ({ id:`current-${index}`, value:index })) });
    const documents = new Map(Array.from({ length:401 }, (_, index) => [`stale-${index}`, { value:'old' }]));
    documents.set('current-0', { value:'old', previousField:true });
    const commits = [];
    let allowDelete = collectionName !== 'prayer_data';
    const db = {
      collection:name => {
        assert.strictEqual(name, collectionName, 'Uploader selected the wrong collection');
        return { doc:id => ({ id }), get:async () => ({ docs:Array.from(documents.keys(), id => ({ id, ref:{ id } })) }) };
      },
      batch:() => {
        const writes = [];
        return {
          set:(ref, data) => writes.push({ ref, data }),
          delete:ref => writes.push({ ref, delete:true }),
          commit:async () => {
            assert(writes.length <= 500, 'Firestore batch limit exceeded');
            if (!allowDelete && writes.some(write => write.delete)) {
              throw Object.assign(new Error('Missing or insufficient permissions.'), { code:'permission-denied' });
            }
            writes.forEach(write => {
              if (write.delete) documents.delete(write.ref.id);
              else documents.set(write.ref.id, JSON.parse(JSON.stringify(write.data)));
            });
            commits.push(writes);
          }
        };
      }
    };
    const context = uploadClientContext(db, payload);
    const button = { disabled:false };
    if (!allowDelete) {
      await assert.rejects(context.ordoFirebaseUploader.upload({ button }), { code:'permission-denied' });
      assert.strictEqual(documents.size, 802, 'Denied cleanup must retain stale documents after successful writes');
      assert.strictEqual(button.disabled, false, 'Failed upload must re-enable the button');
      allowDelete = true;
      commits.length = 0;
    }
    const statuses = [];
    const result = await context.ordoFirebaseUploader.upload({ button, setStatus:(text, type) => statuses.push({ text, type }) });
    assert.strictEqual(result.uploaded, 401);
    assert.strictEqual(result.removed, 401);
    assert.strictEqual(documents.size, 401, 'Collection must contain exactly the uploaded entries');
    assert(!documents.has('stale-0'), 'Obsolete entries were not removed');
    assert(!('previousField' in documents.get('current-0')), 'Existing entries must be replaced');
    assert.strictEqual(commits.length, 4, 'Both upload and cleanup must handle multiple batches');
    assert.strictEqual(statuses.at(-1).type, 'ok');
    assert.strictEqual(button.disabled, false);
    assert.strictEqual((await context.ordoFirebaseUploader.upload()).removed, 0, 'Repeating an upload must not remove active entries');
  }
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
  const scoped = buildFirebaseUploadPayload({
    collectionName: 'test', label: '검증', idPrefix: 'item',
    items: [{ id: 'same', __firebaseDocId: 'US__same', jurisdiction: 'US' }]
  });
  assert.strictEqual(scoped.items[0].docId, 'US__same');
  assert(!('__firebaseDocId' in scoped.items[0].data), 'Internal Firebase document ids must not leak into app data');
}

async function verifyHomepageFirebaseBridge() {
  const root = path.resolve(__dirname, '..');
  const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const versionedPage = fs.readFileSync(path.join(root, 'V28.html'), 'utf8');
  const loader = fs.readFileSync(path.join(root, 'JS file', 'firebase_data_loader.js'), 'utf8');
  const app = fs.readFileSync(path.join(root, 'JS file', 'app_v28.js'), 'utf8');
  new vm.Script(loader, { filename: 'firebase_data_loader.js' });
  assert(index.includes('firebase-firestore-compat.js') && index.includes('firebase_data_loader.js'),
    'Homepage must load Firestore and the published-data bridge');
  assert(index.includes('app_v28.js') && index.indexOf('firebase_data_loader.js') < index.indexOf('app_v28.js'),
    'Published Firebase data must start loading before the app runtime');
  assert.strictEqual(versionedPage, index, 'V28.html must be the versioned snapshot of index.html');
  assert(!/countries\/[^/"?]+\/[^/"?]+_mass\.js/u.test(index),
    'V28 homepage must not load local country Order of Mass modules');
  ['uploadedCountryPrayerData', 'uploadedCountryHymnData', 'uploadedCountryMassData', 'uploadedCountryMassMetadata']
    .forEach(name => assert(loader.includes(name) && app.includes(name), `Homepage bridge is missing ${name}`));
  assert(app.includes('ordoFirebaseDataReady'), 'App runtime must refresh after Firebase data is ready');
  assert(app.includes('let massData = [];'), 'V28 must start without bundled Order of Mass data');
  assert(!app.includes('missaDataApi'), 'V28 must not use the bundled Order of Mass API');
  assert(!app.includes('window.uploadedCountryMassData || window.countryMassData'),
    'V28 must not fall back to bundled Order of Mass content');
  assert(!app.includes('countryMassData'), 'V28 runtime must not read local country Order of Mass modules');
  assert(app.includes('firebaseDailyReadingUrl') && app.includes('dynamicCalendarByDate'),
    'V28 must rebuild country URL adapters and dynamic calendars from Firebase metadata');
  const fixtures = {
    prayer_data: [{ order:10, jurisdiction:'US', id:'firebase-prayer', category:'common', titles:{ EN:'Firebase prayer' }, texts:{ EN:'Amen.' } }],
    hymn_data: [{ order:10, jurisdiction:'US', id:'firebase-hymn', country:'EN', title:'Firebase hymn' }],
    order_of_mass: [{ order:10, jurisdiction:'US', id:'firebase-mass', type:'section', en:'Firebase Mass' }],
    country_mass_metadata: [{ order:10, jurisdiction:'US', jurisdictionName:'United States', calendar:{ '01-01':[{ title:'Mary, Mother of God' }] } }]
  };
  const context = {
    console,
    Date,
    CustomEvent: class CustomEvent { constructor(type, options) { this.type = type; this.detail = options.detail; } },
    dispatchEvent() {},
    firebase: {
      apps: [],
      initializeApp() { this.apps.push({}); },
      firestore() {
        return { collection: name => ({ get: async () => ({ docs: (fixtures[name] || []).map(data => ({ data: () => data })) }) }) };
      }
    }
  };
  context.globalThis = context;
  vm.runInNewContext(loader, context, { filename: 'firebase_data_loader.js' });
  const status = await context.ordoFirebaseDataReady;
  assert.deepStrictEqual([status.prayerCount, status.hymnCount, status.massCount, status.countryMetadataCount], [1, 1, 1, 1]);
  assert.strictEqual(context.uploadedCountryPrayerData.US.entries[0].id, 'firebase-prayer');
  assert.strictEqual(context.uploadedHymnData[0].id, 'firebase-hymn');
  assert.strictEqual(context.uploadedCountryMassData.US.ordinary[0].id, 'firebase-mass');
  assert.strictEqual(context.uploadedCountryMassMetadata.US.jurisdictionName, 'United States');
  const archiveRoot = path.join(root, 'Order of Mass 정리 보관함', 'V27.7 로컬 통상문', 'JS file', 'countries');
  const archivedMassFiles = fs.readdirSync(archiveRoot, { recursive:true })
    .filter(name => String(name).endsWith('_mass.js'));
  assert.strictEqual(archivedMassFiles.length, 17, 'The V27.7 local Order of Mass archive must contain 17 source modules');
}

async function main() {
  verifyFirebasePayloadCompatibility();
  await verifyFirebaseCollectionReplacement();
  await verifyHomepageFirebaseBridge();
  verifyExplicitCountryOwnership();
  verifyPrayerCategoryEditing();
  verifyCountrySpecificSaveRouting();
  await verifyServer('prayer', prayerTool.createServer, {
    collectionName: 'prayer_data',
    countryScoped: true,
    toast: true,
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
    countryScoped: true,
    toast: true,
    html: ['성가 데이터 편집기', '로컬에 저장', 'Firebase에 업로드']
  });
  await verifyServer('mass', massTool.createServer, {
    collectionName: 'order_of_mass',
    countryScoped: true,
    toast: true,
    html: ['미사통상문 원문 · 번역문 편집기', '왼쪽 로컬 저장', '오른쪽 로컬 저장', 'Firebase에 업로드']
  });
  await verifyServer('country metadata', countryMetadataTool.createServer, {
    collectionName: 'country_mass_metadata',
    countryScoped: true,
    toast: true,
    html: ['국가별 전례력·메타데이터 업로드', 'Firebase에 수동 업로드', '통상문 본문은 제외']
  });
  console.log('Data editor UI and Firebase integration checks passed.');
}

main().catch(error => {
  console.error(error && error.stack ? error.stack : error);
  process.exit(1);
});
