const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const indexPath = path.join(root, 'index.html');
const versionPath = path.join(root, 'V25.html');
const runtimePath = path.join(root, 'JS file', 'app_v25.js');
const runtimeTag = '<script src="JS%20file/app_v25.js?v=20260812-v25"></script>';

function removeInlineHymnTitleData(runtimeSource) {
  const startMarker = '    const canonicalCatholicHymnTitleTranslations = Object.freeze({';
  const endMarker = '    function usesAutomaticHymnTranslation(country) {';
  const start = runtimeSource.indexOf(startMarker);
  const end = runtimeSource.indexOf(endMarker, start);
  if (start < 0 || end <= start) throw new Error('The inline hymn-title data block was not found.');
  const adapter = [
    '    function normalizeHymnTranslatedTitle(entry, targetLang, value) {',
    '        const target = normalizeSelectableLang(targetLang, DEFAULT_TARGET_LANG);',
    '        const normalized = typeof window.ordoNormalizeCatholicHymnTitle === \'function\'',
    '            ? window.ordoNormalizeCatholicHymnTitle(entry, target, value)',
    '            : cleanNodeText(value);',
    '        return target === \'KR\'',
    '            ? cleanNodeText(enforceCatholicTranslationTerminology(normalized, \'KR\'))',
    '            : cleanNodeText(normalized);',
    '    }',
    '',
    ''
  ].join('\n');
  return runtimeSource.slice(0, start) + adapter + runtimeSource.slice(end);
}

if (process.argv.includes('--runtime-only')) {
  const existingRuntime = fs.readFileSync(runtimePath, 'utf8');
  const cleanedRuntime = removeInlineHymnTitleData(existingRuntime);
  fs.writeFileSync(runtimePath, cleanedRuntime, 'utf8');
  console.log(JSON.stringify({ runtimeBytesBefore: Buffer.byteLength(existingRuntime), runtimeBytesAfter: Buffer.byteLength(cleanedRuntime) }, null, 2));
  process.exit(0);
}

const source = fs.readFileSync(indexPath, 'utf8');
const inlineStart = source.indexOf('<script>\n');
const inlineEnd = source.lastIndexOf('\n</script>');
if (inlineStart < 0 || inlineEnd <= inlineStart) {
  throw new Error('The main inline runtime script was not found in index.html.');
}

const runtime = removeInlineHymnTitleData(source.slice(inlineStart + '<script>\n'.length, inlineEnd));
if (!runtime.includes("const APP_VERSION = 'V25-20260812'")) {
  throw new Error('Refusing to extract a runtime that is not marked as V25.');
}

const html = source.slice(0, inlineStart) + runtimeTag + source.slice(inlineEnd + '\n</script>'.length);
fs.writeFileSync(runtimePath, `// Order of Mass V25 application runtime. Data remains in the dedicated *_data.js files.\n${runtime}\n`, 'utf8');
fs.writeFileSync(indexPath, html, 'utf8');
fs.writeFileSync(versionPath, html, 'utf8');

console.log(JSON.stringify({
  htmlBytesBefore: Buffer.byteLength(source),
  htmlBytesAfter: Buffer.byteLength(html),
  runtimeBytes: Buffer.byteLength(runtime),
  runtimePath,
  versionPath
}, null, 2));
