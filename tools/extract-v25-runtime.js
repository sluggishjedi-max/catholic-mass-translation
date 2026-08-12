const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const indexPath = path.join(root, 'index.html');
const versionPath = path.join(root, 'V25.html');
const runtimePath = path.join(root, 'JS file', 'app_v25.js');
const runtimeTag = '<script src="JS%20file/app_v25.js?v=20260812-v25"></script>';

if (process.argv.includes('--runtime-only')) {
  const existingRuntime = fs.readFileSync(runtimePath, 'utf8');
  if (!existingRuntime.includes('function normalizeHymnTranslatedTitle')) {
    throw new Error('The V25 hymn-title runtime is missing.');
  }
  console.log(JSON.stringify({ runtimeBytes: Buffer.byteLength(existingRuntime), unchanged: true }, null, 2));
  process.exit(0);
}

const source = fs.readFileSync(indexPath, 'utf8');
const inlineStart = source.indexOf('<script>\n');
const inlineEnd = source.lastIndexOf('\n</script>');
if (inlineStart < 0 || inlineEnd <= inlineStart) {
  throw new Error('The main inline runtime script was not found in index.html.');
}

const runtime = source.slice(inlineStart + '<script>\n'.length, inlineEnd);
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
