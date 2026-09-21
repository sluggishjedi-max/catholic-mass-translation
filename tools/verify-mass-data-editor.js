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
}

function main() {
  const sources = readCountryMassSources();
  const loaded = getLoadedState(sources);
  assert.equal(loaded.countries.length, 17, 'all country Mass modules should load');
  assert.ok(loaded.countries.filter(country => country.editable).length >= 10, 'direct country modules should remain editable');
  assert.equal(loaded.countries.find(country => country.jurisdiction === 'TW').editable, false, 'runtime-restructured Taiwan data should be protected');
  assert.equal(loaded.countries.find(country => country.jurisdiction === 'AU').editable, false, 'derived Australia data should be protected');
  assert.equal(loaded.countries.find(country => country.jurisdiction === 'NZ').editable, false, 'derived New Zealand data should be protected');
  assert.throws(() => prepareMassSourceEdit({ jurisdiction: 'TW', blockKey: '', updates: [] }, sources), error => error && error.statusCode === 409, 'protected Taiwan data must reject writes');

  const verifiedEdits = loaded.countries
    .filter(country => country.editable)
    .map(country => {
      verifyInMemoryEdit(sources, loaded, country.jurisdiction);
      return country.jurisdiction;
    });

  const leftBlocks = blocksForCountry(loaded, 'KR');
  const rightKeys = new Set(blocksForCountry(loaded, 'VN').map(block => block.key));
  const shared = leftBlocks.find(block => rightKeys.has(block.key));
  assert.ok(shared, 'Korean and Vietnamese data should have a shared passage');
  const pair = blockPair(loaded, 'KR', 'VN', shared.key);
  assert.ok(pair.rows.length > 0, 'the side-by-side passage should contain rows');
  assert.ok(pair.rows.some(row => row.left && row.right), 'the paired passage should align at least one row');

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
