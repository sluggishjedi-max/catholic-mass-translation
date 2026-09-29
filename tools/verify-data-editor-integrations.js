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
    const list = await (await fetch(`${base}/api/prayers?country=KR&language=KR`)).json();
    assert(list.ok && list.prayers.length > 0, 'Korean prayer list is empty');
    const first = list.prayers[0];
    const detail = await (await fetch(`${base}/api/prayer?country=KR&lang=KR&id=${encodeURIComponent(first.id)}`)).json();
    assert(detail.ok && detail.prayer.id === first.id && detail.prayer.lang === 'KR');
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
  await verifyServer('prayer', prayerTool.createServer, {
    collectionName: 'prayer_data',
    html: ['국가별 기도문 편집기', '언어별 기도문 목록', '앱 표시 미리보기', '다른 언어 추가', '두 기도문 병합', '로컬에 저장', 'Firebase에 업로드']
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
