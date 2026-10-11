const fs = require('fs');
const path = require('path');
const { chromium } = require('@playwright/test');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'assets', 'app-logo.svg');
const output = path.join(root, 'android', 'app', 'src', 'main', 'res', 'drawable-nodpi', 'app_logo_launcher.png');

(async () => {
  const svg = fs.readFileSync(source, 'utf8');
  fs.mkdirSync(path.dirname(output), { recursive: true });
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 512, height: 512 }, deviceScaleFactor: 1 });
    await page.setContent([
      '<style>',
      'html,body{width:512px;height:512px;margin:0;background:transparent;overflow:hidden}',
      '.icon{width:512px;height:512px;display:grid;place-items:center}',
      '.icon img{display:block;width:424px;height:424px;object-fit:contain}',
      '</style>',
      `<div class="icon"><img src="data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}"></div>`
    ].join(''));
    await page.locator('.icon img').waitFor({ state: 'visible' });
    await page.screenshot({ path: output, omitBackground: true });
    console.log(output);
  } finally {
    await browser.close();
  }
})().catch(error => {
  console.error(error.stack || error);
  process.exit(1);
});
