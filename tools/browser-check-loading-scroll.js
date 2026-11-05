const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const { chromium } = require('playwright');
const mass = require('./mass-data-editor');
const metadata = require('./country-metadata-upload-tool');
const root = path.resolve(__dirname, '..');
const registry = mass.runCountryMassSources(mass.readCountryMassSources()).registry;
const countries = Object.fromEntries(metadata.countryMetadataItems().map(item => [item.jurisdiction, item]));
const filename = process.env.ORDO_CHECK_HTML || 'V31.2.html';

(async () => {
  const server = http.createServer((req, res) => {
    const file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
    if (!file.startsWith(root + path.sep)) return res.writeHead(403).end();
    fs.readFile(file, (error, data) => {
      if (error) return res.writeHead(404).end();
      res.setHeader('Content-Type', file.endsWith('.js') ? 'application/javascript' : 'text/html;charset=utf-8');
      res.end(data);
    });
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch({ headless: true });
  try {
    for (const width of [1280, 390, 320]) {
      const page = await browser.newPage({ viewport: { width, height: 844 } });
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.addInitScript(({ registry, countries }) => {
        window.ordoPrayerEditorPreview = true;
        window.uploadedCountryMassData = registry;
        window.uploadedCountryMassMetadata = countries;
      }, { registry, countries });
      await page.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
      await page.goto(`http://127.0.0.1:${server.address().port}/${filename}`);
      await page.evaluate(async () => {
        await Promise.all([ordoDataLoader.ensure('special', ['KR', 'US']), ordoDataLoader.ensure('missal', ['KR', 'EN'])]);
        startupNoticeDecision = true;
        document.body.classList.remove('consent-pending');
        document.getElementById('consent-modal').style.display = 'none';
        state.useGps = false;
        state.currentLoc = state.selectedLocationCode = 'KR';
        state.targetLang = 'EN'; state.targetLocationCode = 'US';
        const date = new Date(2026, 9, 28, 12);
        getStrictDateBase = () => ({ localDay: cloneDateOnly(date), hour: 12, timeZone: 'Asia/Seoul' });
        rememberLiturgicalDateContext(getStrictDateContext());
        state.liturgyInfo = buildGeneratedLiturgyInfo(date);
        resetMassDataFrom(getStartupOrdinaryMassData());
        setupFloatingLiturgyBanner();
        markDailyReadingLanguagesLoading(['KR', 'EN']);
        showLiturgyLoadingMessage();
        render();
        window.scrollTo(0, 1400);
      });
      await page.evaluate(() => new Promise(requestAnimationFrame));
      assert.equal(await page.locator('#floating-liturgy-banner').getAttribute('aria-hidden'), 'true', 'Loading scroll displayed a competing floating liturgy banner');
      assert.equal(await page.locator('#liturgy-status-bar.is-visible').count(), 1, 'Loading progress must use one status bar');
      const renderMetrics = await page.evaluate(() => {
        const positions = [], timings = [], replacements = [];
        for (let index = 0; index < 3; index++) {
          const observer = new MutationObserver(() => {});
          observer.observe(document.getElementById('missal-root'), { childList: true });
          const start = performance.now();
          render();
          timings.push(performance.now() - start);
          replacements.push(observer.takeRecords().length);
          observer.disconnect();
          positions.push(window.scrollY);
        }
        return { timings, replacements, positions };
      });
      assert(renderMetrics.replacements.every(count => count === 1), 'Incremental loading rebuilt the live body in multiple DOM mutations');
      assert(renderMetrics.positions.every(y => y > 1000), 'Loading render lost the reading position');
      await page.evaluate(() => { state.dailyReadingsLoading = false; state.dailyReadingLanguageStatus = {}; render(); });
      await page.waitForFunction(() => document.getElementById('floating-liturgy-banner').classList.contains('is-visible'));
      await page.waitForTimeout(220);
      const geometry = await page.evaluate(() => {
        const banner = document.getElementById('floating-liturgy-banner').getBoundingClientRect();
        const legend = document.getElementById('role-legend').getBoundingClientRect();
        return { bannerBottom: banner.bottom, legendTop: legend.top, count: document.querySelectorAll('#floating-liturgy-banner').length };
      });
      assert.equal(geometry.count, 1);
      assert(geometry.legendTop >= geometry.bannerBottom - 1, 'Floating liturgy and notice overlap');
      const cache = await page.evaluate(async () => {
        const date = getActiveLiturgicalSourceDate();
        const parsed = version => ({ title: 'Cached liturgy', data: Object.fromEntries(['entrance', 'collect', 'reading1', 'psalm', 'gospel_accl', 'gospel', 'communion', 'prayer_offerings', 'prayer_after'].map(key => [key, { text: 'Cached daily passage version ' + version, lines: [parsedLine('', 'Cached daily passage version ' + version)] }])), serverRecord: { version, kind: 'edited' } });
        writeCachedDailySource('KR', date, parsed(1), { locationCode: 'KR' });
        for (const key of Object.keys(dailySourceCache)) delete dailySourceCache[key];
        let release;
        const pending = new Promise(resolve => { release = resolve; });
        window.ordoDailyServer = { read: () => pending };
        const started = performance.now();
        const first = await Promise.race([fetchParsedDailyMass('KR', date, { locationCode: 'KR' }), new Promise((_, reject) => setTimeout(() => reject(Error('Warm cache waited for the server')), 800))]);
        const elapsed = performance.now() - started;
        release(parsed(2));
        await new Promise(resolve => setTimeout(resolve, 0));
        const second = await fetchParsedDailyMass('KR', date, { locationCode: 'KR' });
        // Administrator and forced refresh still wait for the authoritative server.
        window.ordoAdminReview = { isVerified: () => true };
        let adminReads = 0;
        window.ordoDailyServer = { read: async () => { adminReads++; return parsed(3); } };
        const admin = await fetchParsedDailyMass('KR', date, { locationCode: 'KR' });
        window.ordoAdminReview = { isVerified: () => false };
        window.ordoDailyServer = { read: async () => parsed(4) };
        const forced = await fetchParsedDailyMass('KR', date, { locationCode: 'KR', forceRemote: true });
        return { elapsed, first: first.serverRecord.version, second: second.serverRecord.version, admin: admin.serverRecord.version, adminReads, forced: forced.serverRecord.version };
      });
      assert.deepEqual([cache.first, cache.second, cache.admin, cache.adminReads, cache.forced], [1, 2, 3, 1, 4]);
      assert.deepEqual(errors, []);
      console.log(JSON.stringify({ width, renderMetrics, geometry, cache }));
      await page.close();
    }
  } finally {
    await browser.close(); server.closeAllConnections();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
