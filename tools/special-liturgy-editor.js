const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { spawnSync } = require('node:child_process');
const { buildFirebaseUploadPayload } = require('./firebase-upload-support');

const clone = value => JSON.parse(JSON.stringify(value));
function merge(base = {}, override = {}) {
  const result = clone(base);
  for (const [key, value] of Object.entries(override)) {
    result[key] = value && typeof value === 'object' && !Array.isArray(value)
      ? merge(result[key] || {}, value) : clone(value);
  }
  return result;
}

function createSpecialEditorBackend({ root = path.resolve(__dirname, '..') } = {}) {
  const registryPath = path.join(root, 'JS file', 'country_special_liturgies_v29.js');
  const compiler = path.join(root, 'tools', 'build-special-liturgies.py');
  function registry() {
    const context = {};
    vm.runInNewContext(fs.readFileSync(registryPath, 'utf8'), context);
    return context.countrySpecialLiturgies;
  }
  function countryFiles(country) {
    const profile = registry().countries[country];
    if (!profile) throw new Error('지원하지 않는 국가입니다.');
    const file = path.basename(profile.definitionFile || '');
    if (!/^[a-z_]+\.py$/.test(file)) throw new Error('국가 전례 파일이 없습니다.');
    return { profile, sidecar: path.join(root, 'tools', 'special_liturgies', 'editor_overrides', file.replace(/\.py$/, '.json')) };
  }
  function patchFor(country) {
    const { profile, sidecar } = countryFiles(country);
    return fs.existsSync(sidecar) ? JSON.parse(fs.readFileSync(sidecar, 'utf8'))
      : { jurisdiction: profile.jurisdiction, vigils: [], celebrations: [], allSouls: {} };
  }
  function entries(country) {
    const data = registry(), profile = countryFiles(country).profile, output = [];
    for (const kind of ['celebrations', 'vigils']) {
      const map = new Map((data.universal[kind] || []).map(entry => [entry.id, entry]));
      (profile[kind] || []).forEach(entry => map.set(entry.id, merge(map.get(entry.id), entry)));
      map.forEach((entry, id) => output.push({ kind, id, entry }));
    }
    for (const id of ['first', 'second', 'third']) {
      output.push({ kind: 'allSouls', id, entry: merge(data.universal.allSouls[id], profile.allSouls[id]) });
    }
    return clone(output);
  }
  function runCompiler(args) {
    const result = spawnSync(process.env.ORDO_PYTHON || 'python', ['-X', 'utf8', compiler, ...args], {
      cwd: root, encoding: 'utf8', windowsHide: true, timeout: 60000, maxBuffer: 1024 * 1024
    });
    if (result.error || result.status !== 0) throw new Error((result.error?.message || result.stderr || result.stdout).trim());
  }
  function validateSelection(kind, id) {
    if (!['vigils', 'celebrations', 'allSouls'].includes(kind) || !/^[a-z][a-z0-9_]*$/.test(id || '')) throw new Error('잘못된 전례 구분입니다.');
    if (kind === 'allSouls' && !['first', 'second', 'third'].includes(id)) throw new Error('위령의 날은 첫째·둘째·셋째 미사만 지정할 수 있습니다.');
  }
  function save({ country, kind, id, entry }) {
    validateSelection(kind, id);
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) throw new Error('전례 정의가 필요합니다.');
    if (kind !== 'allSouls' && entry.id !== id) throw new Error('전례 ID가 일치하지 않습니다.');
    const { sidecar } = countryFiles(country), patch = patchFor(country);
    if (kind === 'allSouls') patch.allSouls[id] = clone(entry);
    else patch[kind] = [...patch[kind].filter(item => item.id !== id), clone(entry)];
    fs.mkdirSync(path.dirname(sidecar), { recursive: true });
    const candidate = sidecar + '.candidate.json';
    const before = fs.existsSync(sidecar) ? fs.readFileSync(sidecar) : null;
    const registryBefore = fs.readFileSync(registryPath);
    try {
      fs.writeFileSync(candidate, JSON.stringify(patch, null, 2) + '\n');
      runCompiler(['--validate-profile', candidate]);
      fs.renameSync(candidate, sidecar);
      runCompiler([]);
    } catch (error) {
      if (before) fs.writeFileSync(sidecar, before);
      else if (fs.existsSync(sidecar)) fs.unlinkSync(sidecar);
      fs.writeFileSync(registryPath, registryBefore);
      throw error;
    } finally {
      if (fs.existsSync(candidate)) fs.unlinkSync(candidate);
    }
    return { file: path.relative(root, sidecar).replace(/\\/g, '/'), entries: entries(country) };
  }
  function state() {
    const data = registry();
    return { countries: Object.keys(data.countries).map(code => ({ code, file: data.countries[code].definitionFile })), languages: ['KR','VN','EN','JP','LA','ZH','IT','PT','ES','DE'] };
  }
  function firebaseExport() {
    const directory = path.join(root, 'tools', 'special_liturgies', 'editor_overrides');
    const items = fs.existsSync(directory) ? fs.readdirSync(directory).filter(file => file.endsWith('.json')).flatMap(file => {
      const patch = JSON.parse(fs.readFileSync(path.join(directory, file), 'utf8'));
      const jurisdictions = Array.isArray(patch.jurisdiction) ? patch.jurisdiction : [patch.jurisdiction];
      return jurisdictions.map(jurisdiction => ({ ...patch, jurisdiction, __firebaseDocId: jurisdiction }));
    }) : [];
    return buildFirebaseUploadPayload({ collectionName: 'country_special_liturgies', label: '특수미사', items, idPrefix: 'special' });
  }
  return { state, entries, save, firebaseExport };
}
module.exports = { createSpecialEditorBackend };
