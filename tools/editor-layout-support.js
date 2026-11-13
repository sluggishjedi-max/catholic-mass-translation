// Shared chrome for the local data editors; never changes the public application.
'use strict';
const fs = require('node:fs');
const path = require('node:path');
function serveEditorLayout(req, res, url) {
  const assets = {
    '/editor-layout.css': ['editor-layout.css', 'text/css'],
    '/editor-layout.js': ['editor-layout.js', 'text/javascript']
  };
  const asset = assets[url.pathname];
  if (req.method !== 'GET' || !asset) return false;
  res.writeHead(200, { 'content-type': asset[1] + '; charset=utf-8', 'cache-control': 'no-store' });
  res.end(fs.readFileSync(path.join(__dirname, asset[0])));
  return true;
}
module.exports = { serveEditorLayout };
