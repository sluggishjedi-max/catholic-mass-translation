// Serve an editor-only frame using the current application's exact renderer and CSS.
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const release = require('./app-release');
const root = path.resolve(__dirname, '..');
function previewHtml() {
  const html = fs.readFileSync(path.join(root, release.html), 'utf8')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
  return html.replace('</head>', `<script>window.ordoPrayerEditorPreview = true;</script>
    <style>
      html,body { min-height:0; overflow:hidden; }
      body { background:white; padding:12px; }
      body > :not(#hymn-editor-preview) { display:none !important; }
      #hymn-editor-preview { width:100%; }
    </style></head>`)
    .replace('</body>', `<div id="hymn-editor-preview"></div>
      <script src="/app-preview-runtime.js"></script>
      <script src="/hymn-preview-client.js"></script></body>`);
}
function serveHymnPreview(req, res, url) {
  if (req.method !== 'GET') return false;
  let body, type;
  if (url.pathname === '/app-preview.html') {
    body = previewHtml(); type = 'text/html';
  } else if (url.pathname === '/app-preview-runtime.js') {
    body = fs.readFileSync(path.join(root, release.runtime)); type = 'text/javascript';
  } else if (url.pathname === '/hymn-preview-client.js') {
    body = fs.readFileSync(path.join(__dirname, 'hymn-preview-client.js')); type = 'text/javascript';
  } else {
    const pathname = decodeURIComponent(url.pathname);
    if (!pathname.startsWith('/assets/hymns/') && pathname !== '/assets/app-logo.svg') return false;
    const asset = path.resolve(root, '.' + pathname);
    const assetsRoot = path.join(root, 'assets') + path.sep;
    if (!asset.startsWith(assetsRoot) || !fs.existsSync(asset) || !fs.statSync(asset).isFile()) return false;
    const types = { '.webp':'image/webp', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.svg':'image/svg+xml' };
    type = types[path.extname(asset).toLowerCase()];
    if (!type) return false;
    body = fs.readFileSync(asset);
  }
  res.writeHead(200, {
    'content-type':type + (type.startsWith('text/') ? '; charset=utf-8' : ''),
    'cache-control':'no-store',
    // Previewing must never trigger Firebase, GPS, daily collection, or AI requests.
    'content-security-policy':"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'none'; img-src 'self' data: https:; object-src 'none'; base-uri 'none'"
  });
  res.end(body);
  return true;
}
module.exports = { serveHymnPreview };
