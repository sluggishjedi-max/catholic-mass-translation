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

function verifyMissingTranslationCreation(sources, loaded, targetJurisdiction, sourceBlock, translatedText) {
  const beforeHashes = new Map(sources.map(source => [source.path, digest(source.path)]));
  const pair = blockPair(loaded, 'KR', targetJurisdiction, sourceBlock.key);
  const missing = pair.rows.find(item => item.right && item.right.virtual);
  assert.ok(missing, `${targetJurisdiction}: a missing translation input should be available`);
  const updates = pair.rows.map(item => ({
    key: item.right.key,
    text: item.key === missing.key ? translatedText : item.right.text,
    expectedText: item.right.text,
    speaker: item.right.speaker,
    expectedSpeaker: item.right.speaker,
    create: item.right.create || null
  }));
  const prepared = prepareMassSourceEdit({
    jurisdiction: targetJurisdiction,
    blockKey: pair.rightBlockKey,
    updates
  }, sources);
  assert.match(prepared.nextCode, /MASS_DATA_EDITOR_OVERRIDES_START/u, `${targetJurisdiction}: missing text should use an override section`);
  const reloaded = getLoadedState(prepared.sources);
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

function main() {
  const sources = readCountryMassSources();
  const loaded = getLoadedState(sources);
  assert.equal(loaded.countries.length, 17, 'all country Mass modules should load');
  assert.equal(loaded.countries.filter(country => country.editable).length, 17, 'all country Mass modules should be editable');

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

  const report = {
    ok: true,
    countries: loaded.countries.length,
    editableCountries: loaded.countries.filter(country => country.editable).length,
    sideBySideRows: pair.rows.length,
    verifiedEdits,
    liveFilesWritten: 0
  };
  console.log(JSON.stringify(report, null, 2));
}

main();
