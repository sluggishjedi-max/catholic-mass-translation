const fs = require('fs');
const http = require('http');
const os = require('os');
const path = require('path');
const { chromium } = require('@playwright/test');

const root = path.resolve(__dirname, '..');
const targetHtml = 'V24.1.html';
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png'
};

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function startServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://127.0.0.1');
    const route = decodeURIComponent(url.pathname === '/' ? `/${targetHtml}` : url.pathname);
    const file = path.resolve(root, route.replace(/^\/+/, ''));
    if (!file.startsWith(root)) return res.writeHead(403).end('Forbidden');
    fs.readFile(file, (error, data) => {
      if (error) return res.writeHead(404).end('Not found');
      res.writeHead(200, { 'content-type': mime[path.extname(file)] || 'application/octet-stream' });
      res.end(data);
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
    window.fetch = async () => { throw new Error('Remote fetch disabled by V24.1 UI check'); };
  });

  try {
    await page.goto(`http://127.0.0.1:${server.address().port}/${targetHtml}`, { waitUntil: 'domcontentloaded' });
    await page.locator('#consent-accept').click({ timeout: 5000 }).catch(() => {});
    await page.locator('[data-vn-source="hanoi"]').click({ timeout: 5000 }).catch(() => {});
    await page.waitForFunction(() => typeof render === 'function' && document.querySelectorAll('#missal-root > *').length > 0);

    const result = await page.evaluate(() => {
      const px = selector => parseFloat(getComputedStyle(document.querySelector(selector)).fontSize);
      const setSelect = (id, value) => {
        const element = document.getElementById(id);
        element.value = value;
      };

      document.getElementById('set-gps').checked = false;
      setSelect('set-loc', 'KR');
      setSelect('set-target-lang', 'VN');
      setSelect('set-ui-lang', 'KR');
      setSelect('set-font-size', '16px');
      updateSettings();
      render();
      const baseline = {
        nav: px('nav'),
        header: px('.header-title'),
        date: px('.date-display'),
        liturgy: px('.liturgy-name'),
        legend: px('.role-legend'),
        quick: px('.quick-home-btn')
      };

      setSelect('set-ui-lang', 'VN');
      setSelect('set-font-size', '22px');
      updateSettings();
      render();

      const navTexts = Array.from(document.querySelectorAll('nav .nav-item')).map(node => node.textContent.trim());
      const quickTexts = Array.from(document.querySelectorAll('#quick-home-menu .quick-home-btn')).map(node => node.textContent.trim());
      const targetOptions = Array.from(document.querySelectorAll('#set-target-lang option')).map(node => node.textContent.trim());
      const fontOptions = Array.from(document.querySelectorAll('#set-font-size option')).map(node => node.textContent.trim());
      const sourceOptions = Array.from(document.querySelectorAll('#set-vn-source option')).map(node => node.textContent.trim());
      const visibleLegendGroups = Array.from(document.querySelectorAll('#role-legend [data-legend-lang]'))
        .filter(node => !node.hidden && getComputedStyle(node).display !== 'none');
      const firstSection = document.querySelector('#missal-root > .section-bar');
      const legend = document.getElementById('role-legend');
      const settingsButton = document.querySelector('.settings-btn').getBoundingClientRect();
      const floatingSettingsButton = document.querySelector('.floating-settings-btn').getBoundingClientRect();

      return {
        baseline,
        enlarged: {
          nav: px('nav'),
          header: px('.header-title'),
          date: px('.date-display'),
          liturgy: px('.liturgy-name'),
          liturgySecondary: px('.liturgy-name-secondary'),
          legend: px('.role-legend'),
          quick: px('.quick-home-btn')
        },
        navTexts,
        quickTexts,
        targetOptions,
        fontOptions,
        sourceOptions,
        settingsLabels: [
          'lbl-settings-title', 'lbl-set-gps', 'lbl-set-loc', 'lbl-set-target',
          'lbl-set-vn-source', 'lbl-set-stacked', 'lbl-set-voice',
          'lbl-set-voice-note', 'lbl-set-font', 'lbl-set-ui-lang', 'lbl-close-btn'
        ].map(id => document.getElementById(id).textContent.trim()),
        htmlLang: document.documentElement.lang,
        legend: {
          visibleCount: visibleLegendGroups.length,
          languages: visibleLegendGroups.map(node => node.dataset.legendLang),
          lineCounts: visibleLegendGroups.map(node => node.querySelectorAll('.role-legend-line').length),
          hasTitles: !!document.querySelector('.role-legend-title'),
          text: visibleLegendGroups.map(node => node.textContent.trim())
        },
        firstGap: firstSection && legend ? Math.round(firstSection.getBoundingClientRect().top - legend.getBoundingClientRect().bottom) : null,
        bodyPaddingBottom: getComputedStyle(document.body).paddingBottom,
        missalPaddingBottom: getComputedStyle(document.getElementById('missal-root')).paddingBottom,
        settingsButton: { width: settingsButton.width, height: settingsButton.height },
        floatingSettingsButton: { width: floatingSettingsButton.width, height: floatingSettingsButton.height }
      };
    });

    assert(JSON.stringify(result.navTexts) === JSON.stringify(['Thánh lễ', 'Kinh nguyện', 'Thánh ca', 'Nhà thờ lân cận']), `Vietnamese header menu mismatch: ${JSON.stringify(result.navTexts)}`);
    assert(JSON.stringify(result.quickTexts) === JSON.stringify(['Thánh lễ', 'Kinh nguyện', 'Thánh ca', 'Nhà thờ']), `Vietnamese quick menu mismatch: ${JSON.stringify(result.quickTexts)}`);
    assert(result.targetOptions.includes('Tiếng Hàn / 한국어') && result.targetOptions.includes('Tiếng Anh / English'), `Localized target options missing: ${JSON.stringify(result.targetOptions)}`);
    assert(JSON.stringify(result.fontOptions) === JSON.stringify(['Nhỏ', 'Bình thường', 'Lớn', 'Rất lớn']), `Vietnamese font choices mismatch: ${JSON.stringify(result.fontOptions)}`);
    assert(result.sourceOptions.every(text => /Bản dịch|KTCGKPV/.test(text)), `Vietnamese source choices are not localized: ${JSON.stringify(result.sourceOptions)}`);
    assert(result.settingsLabels.every(text => !/[가-힣]/.test(text)), `Fixed Korean remains in Vietnamese settings: ${JSON.stringify(result.settingsLabels)}`);
    assert(result.htmlLang === 'vi', `Document language should be vi, got ${result.htmlLang}`);
    assert(result.legend.visibleCount === 2 && result.legend.lineCounts.every(count => count === 1) && !result.legend.hasTitles, `Legend was not reduced to two psalm notes: ${JSON.stringify(result.legend)}`);
    assert(result.enlarged.header === result.enlarged.date
      && result.enlarged.header === result.enlarged.liturgy
      && result.enlarged.header === result.enlarged.liturgySecondary
      && result.enlarged.header === result.enlarged.legend,
    `Header, date, liturgy and legend sizes differ: ${JSON.stringify(result.enlarged)}`);
    assert(result.enlarged.header > result.baseline.header * 1.3
      && result.enlarged.nav > result.baseline.nav * 1.3
      && result.enlarged.legend > result.baseline.legend * 1.3
      && result.enlarged.quick > result.baseline.quick * 1.3,
    `Chrome fonts did not scale proportionally: ${JSON.stringify({ baseline: result.baseline, enlarged: result.enlarged })}`);
    assert(result.firstGap === 0, `A blank strip remains before the first Mass section: ${result.firstGap}px`);
    assert(result.bodyPaddingBottom === '0px' && parseFloat(result.missalPaddingBottom) >= 64, `The end strip/footer spacing is not attached to the white missal: ${JSON.stringify(result)}`);
    assert(result.settingsButton.width >= 44 && result.settingsButton.height >= 44
      && result.floatingSettingsButton.width >= 44 && result.floatingSettingsButton.height >= 42,
    `Settings buttons are too small: ${JSON.stringify(result)}`);
    assert(pageErrors.length === 0, `Page errors: ${pageErrors.join('\n')}`);

    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: path.join(os.tmpdir(), 'v24-1-ui-top.png') });
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    await page.screenshot({ path: path.join(os.tmpdir(), 'v24-1-ui-bottom.png') });
    console.log(JSON.stringify(result, null, 2));
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error.stack || String(error));
  process.exitCode = 1;
});
