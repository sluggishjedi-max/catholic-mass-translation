'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const crypto = require('node:crypto');
const {
  blockPair,
  blocksForCountry,
  getLoadedState,
  prepareMassSourceEdit,
  readCountryMassSources
} = require('./mass-data-editor');

function digest(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
}

function firstEditableRow(loaded, jurisdiction) {
  for (const block of blocksForCountry(loaded, jurisdiction)) {
    const row = block.rows.find(candidate => candidate.textPath);
    if (row) return { block, row };
  }
  throw new Error(`No editable Mass row found for ${jurisdiction}`);
}

function verifyInMemoryEdit(sources, loaded, jurisdiction) {
  const beforeHashes = new Map(sources.map(source => [source.path, digest(source.path)]));
  const { block, row } = firstEditableRow(loaded, jurisdiction);
  const marker = `${row.text} [편집기 검증]`;
  const prepared = prepareMassSourceEdit({
    jurisdiction,
    blockKey: block.key,
    updates: [{
      key: row.key,
      text: marker,
      expectedText: row.text,
      speaker: row.speaker,
      expectedSpeaker: row.speaker
    }]
  }, sources);

  assert.equal(prepared.changed.length, 1, `${jurisdiction}: exactly one text field should change`);
  assert.equal(prepared.changed[0].value, marker, `${jurisdiction}: edited text should round-trip`);
  sources.forEach((source, index) => {
    if (index === prepared.sourceIndex) assert.notEqual(prepared.sources[index].code, source.code);
    else assert.equal(prepared.sources[index].code, source.code, `${jurisdiction}: other country source changed`);
    assert.equal(digest(source.path), beforeHashes.get(source.path), `${jurisdiction}: verification wrote a live file`);
  });

  assert.throws(() => prepareMassSourceEdit({
    jurisdiction,
    blockKey: block.key,
    updates: [{
      key: row.key,
      text: marker,
      expectedText: `${row.text} stale`,
      speaker: row.speaker,
      expectedSpeaker: row.speaker
    }]
  }, sources), error => error && error.statusCode === 409, `${jurisdiction}: stale edits must be rejected`);
  return prepared;
}

function verifyMissingTranslationCreation(sources, loaded, targetJurisdiction, sourceBlock, translatedText, structural = false) {
  const beforeHashes = new Map(sources.map(source => [source.path, digest(source.path)]));
  // A live translation may now be complete. Supply a missing reference row in
  // memory so this check does not depend on gaps in the published prayers.
  const fixtureKey = `verify-missing-${targetJurisdiction}:text`;
  const withReference = state => {
    const country = state.runtime.countries.KR;
    const ordinary = JSON.parse(JSON.stringify(country.ordinary));
    const rows = sourceBlock.relativePath.reduce((value, key) => value[key], ordinary[sourceBlock.entryIndex]);
    rows.push({ text_kr: '번역 생성 검증용 문장', __massEditorPairKeys: { text_kr: fixtureKey } });
    return { ...state, runtime: { ...state.runtime, countries: { ...state.runtime.countries, KR: { ...country, ordinary } } } };
  };
  loaded = withReference(loaded);
  const pair = blockPair(loaded, 'KR', targetJurisdiction, sourceBlock.key);
  const missing = pair.rows.find(item => item.key === fixtureKey && item.right && item.right.virtual);
  assert.ok(missing, `${targetJurisdiction}: a missing translation input should be available`);
  const updates = pair.rows.filter(item => !structural || !item.right.virtual || item.key === missing.key).map(item => ({
    key: item.right.key,
    kind: item.right.kind,
    expectedKind: item.right.kind,
    text: item.key === missing.key ? translatedText : item.right.text,
    expectedText: item.right.text,
    speaker: item.right.speaker,
    expectedSpeaker: item.right.speaker,
    create: item.right.create || null
  }));
  const prepared = prepareMassSourceEdit({
    jurisdiction: targetJurisdiction,
    blockKey: pair.rightBlockKey,
    updates,
    ...(structural ? { structure: { revision: pair.rightRevision, order: updates.map(row => row.key) } } : {})
  }, sources);
  assert.match(prepared.nextCode, /MASS_DATA_EDITOR_OVERRIDES_START/u, `${targetJurisdiction}: missing text should use an override section`);
  const reloaded = withReference(getLoadedState(prepared.sources));
  const after = blockPair(reloaded, 'KR', targetJurisdiction, sourceBlock.key).rows.find(item => item.key === missing.key);
  assert.equal(after.right.text, translatedText, `${targetJurisdiction}: created translation should round-trip`);
  assert.equal(Boolean(after.right.virtual), false, `${targetJurisdiction}: created translation should become a regular row`);
  sources.forEach(source => assert.equal(digest(source.path), beforeHashes.get(source.path), `${targetJurisdiction}: missing-row verification wrote a live file`));
}

function verifyRowTypeAndAddition(sources, loaded, jurisdiction) {
  const beforeHashes = new Map(sources.map(source => [source.path, digest(source.path)]));
  const { block, row } = firstEditableRow(loaded, jurisdiction);
  const nextKind = row.kind === 'rubric' ? 'text' : 'rubric';
  const renamed = prepareMassSourceEdit({
    jurisdiction,
    blockKey: block.key,
    updates: [{
      key: row.key,
      text: row.text,
      expectedText: row.text,
      speaker: row.speaker,
      expectedSpeaker: row.speaker,
      kind: nextKind,
      expectedKind: row.kind
    }]
  }, sources);
  const renamedState = getLoadedState(renamed.sources);
  const renamedRow = blocksForCountry(renamedState, jurisdiction)
    .find(candidate => candidate.key === block.key)?.rows.find(candidate => candidate.key === row.key);
  assert.equal(renamedRow?.kind, nextKind, `${jurisdiction}: row type should round-trip`);
  assert.equal(renamedRow?.text, row.text, `${jurisdiction}: changing row type should preserve text`);

  const rowKey = `verify-added-${Date.now()}:rubric`;
  const preferredIndex = Math.max(...block.rows.map(candidate => candidate.rowIndex), -1) + 1;
  const added = prepareMassSourceEdit({
    jurisdiction,
    blockKey: block.key,
    updates: [{
      key: rowKey,
      text: '',
      expectedText: '',
      speaker: '',
      expectedSpeaker: '',
      kind: 'rubric',
      create: {
        entryId: block.entryId,
        relativePath: block.relativePath,
        rowKey,
        preferredIndex,
        kind: 'rubric',
        forceCreate: true
      }
    }]
  }, sources);
  const addedState = getLoadedState(added.sources);
  const addedRow = blocksForCountry(addedState, jurisdiction)
    .find(candidate => candidate.key === block.key)?.rows.find(candidate => candidate.key === rowKey);
  assert.ok(addedRow, `${jurisdiction}: an explicitly added blank row should round-trip`);
  assert.equal(addedRow.kind, 'rubric', `${jurisdiction}: added row type should round-trip`);
  assert.equal(addedRow.text, '', `${jurisdiction}: added blank row should stay blank`);
  sources.forEach(source => assert.equal(digest(source.path), beforeHashes.get(source.path), `${jurisdiction}: row controls verification wrote a live file`));
}

function structurePayload(jurisdiction, block, order, overrides = new Map()) {
  return {
    jurisdiction, blockKey: block.key,
    structure: { revision: block.revision, order: order.map(row => row.key) },
    updates: order.map(row => ({
      key: row.key, kind: row.kind, expectedKind: row.kind, text: row.text, expectedText: row.text,
      speaker: row.speaker, expectedSpeaker: row.speaker, ...overrides.get(row.key)
    }))
  };
}

function verifySentenceStructure(sources, loaded, jurisdiction) {
  const block = blocksForCountry(loaded, jurisdiction).find(item => item.rows.length >= 3);
  assert.ok(block, `${jurisdiction}: a multi-sentence block is required`);
  const beforeHashes = sources.map(source => digest(source.path));
  const added = { key: 'verify-middle-sentence', text: '', speaker: '', kind: 'text' };
  const addedUpdate = {
    text: `Inserted ${jurisdiction}`, speaker: '',
    create: { entryId: block.entryId, relativePath: block.relativePath, rowKey: added.key, preferredIndex: 1, kind: 'text', forceCreate: true }
  };
  const desired = [block.rows[2], added, block.rows[0], ...block.rows.slice(3)];
  const payload = structurePayload(jurisdiction, block, desired, new Map([[added.key, addedUpdate]]));
  const prepared = prepareMassSourceEdit(payload, sources);
  const afterState = getLoadedState(prepared.sources);
  const after = blocksForCountry(afterState, jurisdiction).find(item => item.key === block.key);
  assert.deepEqual(after.rows.map(row => row.key), desired.map(row => row.key), `${jurisdiction}: move, middle insert, and delete must persist in order`);
  assert.equal(after.rows[1].text, `Inserted ${jurisdiction}`);
  assert(!after.rows.some(row => row.key === block.rows[1].key), `${jurisdiction}: deleted sentence must be absent`);
  for (const other of loaded.countries.filter(country => country.jurisdiction !== jurisdiction)) {
    // Derived countries intentionally inherit their parent module; their source files still stay untouched.
    assert.equal(prepared.sources.find(source => source.jurisdiction === other.jurisdiction).code,
      sources.find(source => source.jurisdiction === other.jurisdiction).code, `${jurisdiction}: only the selected source may change`);
  }
  assert.throws(() => prepareMassSourceEdit(payload, prepared.sources), error => error.statusCode === 409,
    `${jurisdiction}: a stale structural save must not overwrite newer work`);
  const repeated = prepareMassSourceEdit(structurePayload(jurisdiction, after, after.rows), prepared.sources);
  assert.equal(repeated.changed.length, 0, `${jurisdiction}: saving unchanged sentences should do nothing`);
  const second = prepareMassSourceEdit(structurePayload(jurisdiction, after, after.rows.slice().reverse()), prepared.sources);
  const secondBlock = blocksForCountry(getLoadedState(second.sources), jurisdiction).find(item => item.key === block.key);
  assert.deepEqual(secondBlock.rows.map(row => row.key), after.rows.map(row => row.key).reverse(), `${jurisdiction}: repeated moves must persist`);
  const empty = prepareMassSourceEdit(structurePayload(jurisdiction, secondBlock, []), second.sources);
  const emptyBlock = blocksForCountry(getLoadedState(empty.sources), jurisdiction).find(item => item.key === block.key);
  assert.ok(emptyBlock, `${jurisdiction}: an empty block must remain selectable`);
  assert.equal(emptyBlock.rows.length, 0);
  const restored = prepareMassSourceEdit(structurePayload(jurisdiction, emptyBlock, [added], new Map([[added.key, addedUpdate]])), empty.sources);
  assert.equal(blocksForCountry(getLoadedState(restored.sources), jurisdiction).find(item => item.key === block.key).rows[0].text, `Inserted ${jurisdiction}`);
  sources.forEach((source, index) => assert.equal(digest(source.path), beforeHashes[index], 'Verification must not write live Mass data'));
}

function verifyCompoundRow() {
  const source = {
    jurisdiction: 'KR', path: 'compound-row-fixture.js',
    code: `(function(global) {
      global.countryMassData = {};
      const ordinary = Object.freeze([{id:'fixture', lines:[
        {text_kr:'Body',rubric_kr:'Rubric',cit_kr:'Citation',sp_kr:'Priest',text_en:'Foreign body',custom:{keep:true}},
        {divider:true}, {text_kr:'Last'}
      ]}]);
      global.countryMassData.KR = Object.freeze({jurisdiction:'KR',ordinaryLanguage:'KR',ordinary});
    })(globalThis);`
  };
  const sources = [source], loaded = getLoadedState(sources), block = blocksForCountry(loaded, 'KR')[0];
  const desired = [block.rows[2], block.rows[1], block.rows[3]];
  const prepared = prepareMassSourceEdit(structurePayload('KR', block, desired), sources);
  const reloaded = getLoadedState(prepared.sources), after = blocksForCountry(reloaded, 'KR')[0];
  assert.deepEqual(after.rows.map(row => row.text), ['Citation', 'Rubric', 'Last'], 'A sentence inside a compound row must move/delete independently');
  const rows = reloaded.runtime.countries.KR.ordinary[0].lines;
  assert.equal(rows.filter(row => row.text_en).length, 1, 'Foreign text must survive exactly once');
  assert(rows.some(row => row.divider), 'Non-sentence rows must survive');
  assert(rows.some(row => row.custom?.keep), 'Custom metadata must survive');
  const invalid = structurePayload('KR', after, [after.rows[0], after.rows[0]]);
  assert.throws(() => prepareMassSourceEdit(invalid, prepared.sources), error => error.statusCode === 400, 'Duplicate sentence keys must be rejected');
  const edited = prepareMassSourceEdit({ jurisdiction: 'KR', blockKey: after.key, updates: [{
    key: after.rows[0].key, text: 'Edited after moving', expectedText: after.rows[0].text,
    speaker: after.rows[0].speaker, expectedSpeaker: after.rows[0].speaker
  }] }, prepared.sources);
  assert.equal(blocksForCountry(getLoadedState(edited.sources), 'KR')[0].rows[0].text, 'Edited after moving',
    'Field-only saves after structural edits must update the snapshot');
}

function main() {
  const sources = readCountryMassSources();
  const loaded = getLoadedState(sources);
  assert.equal(loaded.countries.length, 17, 'all country Mass modules should load');
  assert.equal(loaded.countries.filter(country => country.editable).length, 17, 'all country Mass modules should be editable');

  if (process.argv.includes('--structure-only')) {
    const requestedCountry = process.argv.find(arg => arg.startsWith('--country='))?.slice('--country='.length);
    loaded.countries.filter(country => !requestedCountry || country.jurisdiction === requestedCountry).forEach(country => {
      verifySentenceStructure(sources, loaded, country.jurisdiction);
      console.log(`${country.jurisdiction}: insert, move, delete, reload, conflict, and empty-block checks passed`);
    });
    verifyCompoundRow();
    const koreanBlocks = blocksForCountry(loaded, 'KR');
    verifyMissingTranslationCreation(sources, loaded, 'IT', koreanBlocks.find(block => block.entryId === '3.3 eucharist' && block.relativePath.includes('ordinary_1')), 'Inserted missing translation', true);
    verifyMissingTranslationCreation(sources, loaded, 'TW', koreanBlocks.find(block => block.entryId === '1.5 gloria'), 'Inserted missing translation', true);
    console.log('Sentence structure checks passed; no live data files were written.');
    return;
  }

  const verifiedEdits = loaded.countries
    .map(country => {
      const prepared = verifyInMemoryEdit(sources, loaded, country.jurisdiction);
      if (['TW', 'AU', 'NZ'].includes(country.jurisdiction)) {
        assert.match(prepared.nextCode, /MASS_DATA_EDITOR_OVERRIDES_START/u, `${country.jurisdiction}: derived edits should use an override block`);
        assert.match(prepared.nextCode, /\[편집기 검증\]/u, `${country.jurisdiction}: override value should be serialized`);
        const reloaded = getLoadedState(prepared.sources);
        const reloadedBlock = blocksForCountry(reloaded, country.jurisdiction).find(block => block.key === prepared.block.key);
        const reloadedRow = reloadedBlock.rows.find(row => row.key === prepared.changed[0].key);
        const revised = prepareMassSourceEdit({
          jurisdiction: country.jurisdiction,
          blockKey: reloadedBlock.key,
          updates: [{
            key: reloadedRow.key,
            text: `${reloadedRow.text} [재수정]`,
            expectedText: reloadedRow.text,
            speaker: reloadedRow.speaker,
            expectedSpeaker: reloadedRow.speaker
          }]
        }, prepared.sources);
        assert.match(revised.nextCode, /\[재수정\]/u, `${country.jurisdiction}: an existing override should be updateable`);
      }
      return country.jurisdiction;
    });

  const leftBlocks = blocksForCountry(loaded, 'KR');
  const rightKeys = new Set(blocksForCountry(loaded, 'VN').map(block => block.key));
  const shared = leftBlocks.find(block => rightKeys.has(block.key));
  assert.ok(shared, 'Korean and Vietnamese data should have a shared passage');
  const pair = blockPair(loaded, 'KR', 'VN', shared.key);
  assert.ok(pair.rows.length > 0, 'the side-by-side passage should contain rows');
  assert.ok(pair.rows.some(row => row.left && row.right), 'the paired passage should align at least one row');

  const koreanBlocks = blocksForCountry(loaded, 'KR');
  verifyMissingTranslationCreation(
    sources,
    loaded,
    'IT',
    koreanBlocks.find(block => block.entryId === '3.3 eucharist' && block.relativePath.includes('ordinary_1')),
    'Santo, Santo, Santo.'
  );
  verifyMissingTranslationCreation(
    sources,
    loaded,
    'TW',
    koreanBlocks.find(block => block.entryId === '1.5 gloria'),
    '新增譯文。'
  );
  ['KR', 'TW', 'AU', 'NZ'].forEach(jurisdiction => verifyRowTypeAndAddition(sources, loaded, jurisdiction));
  loaded.countries.forEach(country => verifySentenceStructure(sources, loaded, country.jurisdiction));
  verifyCompoundRow();

  const report = {
    ok: true,
    countries: loaded.countries.length,
    editableCountries: loaded.countries.filter(country => country.editable).length,
    sideBySideRows: pair.rows.length,
    verifiedEdits,
    sentenceStructureCountries: loaded.countries.length,
    liveFilesWritten: 0
  };
  console.log(JSON.stringify(report, null, 2));
}

main();
