const fs = require('fs');
const os = require('os');
const path = require('path');
const assert = require('assert/strict');
const { FIREBASE_CONFIG } = require('./firebase-upload-support');
const { mergeHymnDuplicates, mergeMissing } = require('./hymn-merge');
const hymnTool = require('./hymn-data-entry-tool');
const database = `projects/${FIREBASE_CONFIG.projectId}/databases/(default)`;
const collection = `${database}/documents/hymn_data`;
const directory = path.join(os.tmpdir(), 'order-mass-hymn-merge');

function decode(value) {
  if ('stringValue' in value) return value.stringValue;
  if ('integerValue' in value) return Number(value.integerValue);
  if ('doubleValue' in value) return value.doubleValue;
  if ('booleanValue' in value) return value.booleanValue;
  if ('nullValue' in value) return null;
  if (value.arrayValue) return (value.arrayValue.values || []).map(decode);
  if (value.mapValue) return decodeFields(value.mapValue.fields || {});
  // Leave unusual Firestore types unchanged when their fields are not edited.
  return value;
}
function decodeFields(fields) {
  return Object.fromEntries(Object.entries(fields || {}).map(([key, value]) => [key, decode(value)]));
}
function encode(value) {
  if (value === null) return { nullValue: null };
  if (typeof value === 'string') return { stringValue: value };
  if (typeof value === 'boolean') return { booleanValue: value };
  if (typeof value === 'number') return Number.isInteger(value) ? { integerValue: String(value) } : { doubleValue: value };
  if (Array.isArray(value)) return { arrayValue: { values: value.map(encode) } };
  return { mapValue: { fields: Object.fromEntries(Object.entries(value).map(([key, item]) => [key, encode(item)])) } };
}
async function request(resource, options = {}) {
  const url = new URL('https://firestore.googleapis.com/v1/' + resource);
  url.searchParams.set('key', FIREBASE_CONFIG.apiKey);
  Object.entries(options.query || {}).forEach(([key, value]) => url.searchParams.set(key, value));
  const response = await fetch(url, { method: options.body ? 'POST' : 'GET',
    headers: options.body ? { 'Content-Type': 'application/json' } : undefined,
    body: options.body ? JSON.stringify(options.body) : undefined, signal: AbortSignal.timeout(60000) });
  const result = await response.json();
  if (!response.ok) throw new Error(`Firestore ${response.status}: ${result.error?.message || 'Request failed'}`);
  return result;
}
async function readDocuments() {
  const documents = [];
  let pageToken;
  do {
    const query = { pageSize: '1000' };
    if (pageToken) query.pageToken = pageToken;
    const result = await request(collection, { query });
    documents.push(...(result.documents || []));
    pageToken = result.nextPageToken;
  } while (pageToken);
  return documents;
}
function scope(documents, jurisdiction) {
  return documents.filter(document => {
    const entry = decodeFields(document.fields);
    return String(entry.jurisdiction || entry.country || entry.language || '').toUpperCase() === jurisdiction;
  });
}
function makePlan(documents, jurisdiction) {
  const scoped = scope(documents, jurisdiction);
  const merged = mergeHymnDuplicates(scoped.map(document => decodeFields(document.fields)));
  return { scoped, ...merged };
}
function updatedDocument(document, entry) {
  const fields = { ...document.fields };
  const previous = decodeFields(fields);
  Object.entries(entry).forEach(([key, value]) => {
    if (JSON.stringify(value) !== JSON.stringify(previous[key])) fields[key] = encode(value);
  });
  return { name: document.name, fields };
}
function localUpdates(plan) {
  const runtime = hymnTool.runCountryModuleSources(hymnTool.readCountryModuleSources());
  const entries = new Map(runtime.data.map(entry => [entry.id, entry]));
  const updates = [];
  for (const merge of plan.merges) {
    const local = entries.get(merge.entry.id);
    if (!local) throw new Error(`Local canonical hymn missing: ${merge.entry.id}`);
    const combined = mergeMissing(local, merge.entry);
    // Only absent metadata is inserted; existing local lyrics and scores stay intact.
    const additions = Object.fromEntries(Object.entries(combined).filter(([key]) => !(key in local) && key !== 'order' && key !== 'jurisdiction'));
    if (Object.keys(additions).length) updates.push({ id: local.id, additions });
  }
  return updates;
}
function syncLocal(updates) {
  const sources = hymnTool.readCountryModuleSources();
  const prepared = sources.map(source => ({ ...source }));
  for (const update of updates) {
    const needle = `"id": ${JSON.stringify(update.id)},`;
    const owners = prepared.filter(source => source.code.includes(needle));
    if (owners.length !== 1) throw new Error(`Expected one local owner for ${update.id}`);
    const source = owners[0];
    const start = source.code.indexOf(needle);
    const indent = source.code.slice(source.code.lastIndexOf('\n', start) + 1, start);
    if (!/^\s*$/.test(indent)) throw new Error(`Unexpected source formatting: ${update.id}`);
    const fields = Object.entries(update.additions).map(([key, value]) => `${indent}${JSON.stringify(key)}: ${JSON.stringify(value)},`).join('\n');
    source.code = source.code.slice(0, start) + needle + '\n' + fields + source.code.slice(start + needle.length);
  }
  const runtime = hymnTool.runCountryModuleSources(prepared);
  hymnTool.validateData(runtime.data);
  assert.equal(runtime.data.length, hymnTool.loadHymnData().length);
  fs.mkdirSync(directory, { recursive: true });
  prepared.forEach((source, index) => {
    if (source.code === sources[index].code) return;
    fs.writeFileSync(path.join(directory, source.jurisdiction + '-local-before.js'), sources[index].code);
    fs.writeFileSync(source.path, source.code);
  });
}
async function main() {
  const args = process.argv.slice(2);
  const jurisdictionIndex = args.indexOf('--jurisdiction');
  const jurisdiction = args[jurisdictionIndex + 1]?.toUpperCase();
  if (jurisdictionIndex < 0 || !jurisdiction) throw new Error('Specify --jurisdiction KR (or another exact country scope)');
  const snapshotIndex = args.indexOf('--snapshot');
  const documents = snapshotIndex >= 0 ? JSON.parse(fs.readFileSync(args[snapshotIndex + 1], 'utf8')) : await readDocuments();
  if (args.includes('--apply') && snapshotIndex >= 0) throw new Error('Apply always requires a fresh Firestore snapshot');
  const plan = makePlan(documents, jurisdiction);
  const updates = localUpdates(plan);
  const summary = { project: FIREBASE_CONFIG.projectId, collection: 'hymn_data', jurisdiction,
    before: plan.scoped.length, after: plan.entries.length, mergedSongs: plan.merges.length,
    removedDocuments: plan.merges.reduce((sum, merge) => sum + merge.removedIndexes.length, 0), localMetadataUpdates: updates.length };
  console.log(JSON.stringify(summary, null, 2));
  if (args.includes('--sync-local')) syncLocal(updates);
  if (!args.includes('--apply') || !plan.merges.length) return;
  const backup = path.join(directory, `firebase-backup-${Date.now()}.json`);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(backup, JSON.stringify(documents));
  // Atomic pairs: never delete an old entry until its preserved content is written.
  let writes = [];
  for (const merge of plan.merges) {
    const current = plan.scoped[merge.keepIndex];
    const pair = [{ update: updatedDocument(current, merge.entry), currentDocument: { updateTime: current.updateTime } },
      ...merge.removedIndexes.map(index => ({ delete: plan.scoped[index].name,
        currentDocument: { updateTime: plan.scoped[index].updateTime } }))];
    if (writes.length + pair.length > 400) { await request(`${database}/documents:commit`, { body: { writes } }); writes = []; }
    writes.push(...pair);
  }
  if (writes.length) await request(`${database}/documents:commit`, { body: { writes } });
  const after = await readDocuments();
  const afterMap = new Map(after.map(document => [document.name, document]));
  for (const merge of plan.merges) {
    const current = plan.scoped[merge.keepIndex];
    assert.deepEqual(decodeFields(afterMap.get(current.name)?.fields), merge.entry, `Firebase merged content differs: ${current.name}`);
    merge.removedIndexes.forEach(index => assert(!afterMap.has(plan.scoped[index].name), 'Duplicate document remains'));
  }
  const touched = new Set(plan.merges.flatMap(merge => [plan.scoped[merge.keepIndex].name, ...merge.removedIndexes.map(index => plan.scoped[index].name)]));
  documents.filter(document => !touched.has(document.name)).forEach(document =>
    assert.deepEqual(afterMap.get(document.name), document, `Unrelated hymn changed: ${document.name}`));
  assert.equal(after.length, documents.length - summary.removedDocuments);
  assert.equal(makePlan(after, jurisdiction).merges.length, 0, 'Merge is not idempotent');
  console.log(JSON.stringify({ verified: true, remaining: scope(after, jurisdiction).length, backup }, null, 2));
}

module.exports = { decodeFields, encode, makePlan, updatedDocument, localUpdates, syncLocal };
if (require.main === module) main().catch(error => { console.error(error); process.exitCode = 1; });
