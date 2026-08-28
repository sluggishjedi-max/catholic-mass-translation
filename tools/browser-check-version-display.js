const fs = require('fs');
const http = require('http');
const path = require('path');
const { chromium } = require('@playwright/test');

const root = path.resolve(__dirname, '..');
const targetHtml = process.env.ORDO_CHECK_HTML || 'index.html';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function startServer() {
  const mime = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png'
  };
  const server = http.createServer((request, response) => {
    const url = new URL(request.url, 'http://127.0.0.1');
    const route = decodeURIComponent(url.pathname === '/' ? `/${targetHtml}` : url.pathname);
    const file = path.resolve(root, route.replace(/^\/+/, ''));
    if (!file.startsWith(root)) return response.writeHead(403).end('Forbidden');
    fs.readFile(file, (error, data) => {
      if (error) return response.writeHead(404).end('Not found');
      response.writeHead(200, { 'content-type': mime[path.extname(file)] || 'application/octet-stream' });
      response.end(data);
    });
  });
  return new Promise(resolve => server.listen(0, '127.0.0.1', () => resolve(server)));
}

(async () => {
  const server = await startServer();
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 412, height: 915 } });
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.stack || String(error)));
  await page.addInitScript(() => {
    window.fetch = async () => { throw new Error('Remote fetch disabled by version-display check'); };
  });

  try {
    await page.goto(`http://127.0.0.1:${server.address().port}/${targetHtml}`, {
      waitUntil: 'domcontentloaded',
      timeout: 90000
    });
    await page.locator('#consent-accept').click({ timeout: 15000 }).catch(() => {});
    await page.waitForFunction(() => document.querySelector('#main-footer .app-version-label'), null, { timeout: 90000 });
    const result = await page.evaluate(() => ({
      internalVersion: APP_VERSION,
      publicVersion: publicAppVersionLabel(),
      footerText: document.querySelector('#main-footer .app-version-label')?.textContent.trim() || '',
      footerVersion: document.querySelector('#main-footer .app-version-label')?.dataset.appVersion || '',
      rootVersion: document.documentElement.dataset.appVersion || ''
    }));
    assert(/^V\d+(?:\.\d+)?$/i.test(result.publicVersion), `Invalid public version: ${result.publicVersion}`);
    assert(result.footerText === `Ordo Missae ${result.publicVersion}`, `Unexpected footer label: ${result.footerText}`);
    assert(result.footerVersion === result.publicVersion, 'Footer data version does not match APP_VERSION.');
    assert(result.rootVersion === result.publicVersion, 'Root data version does not match APP_VERSION.');
    assert(pageErrors.length === 0, `Page errors:\n${pageErrors.join('\n')}`);
    console.log(JSON.stringify(result, null, 2));
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
