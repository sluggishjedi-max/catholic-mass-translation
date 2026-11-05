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

async function check(browser, base, filename, width, timing) {
    const context = await browser.newContext({ viewport: { width, height: 844 }, timezoneId: 'Asia/Seoul' });
    const page = await context.newPage();
    if (timing === 'before-notice-script') await page.addInitScript(() => {
        const schedule = window.setTimeout.bind(window);
        window.setTimeout = (callback, delay, ...args) => schedule(callback, delay === 30000 ? 100 : delay, ...args);
    });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.addInitScript(({ registry, countries }) => {
        window.uploadedCountryMassData = registry;
        window.uploadedCountryMassMetadata = countries;
        window.testMassReady = new Promise(resolve => { window.releaseTestMass = resolve; });
    }, { registry, countries });
    let releaseNotice, releaseRuntime;
    const notice = new Promise(resolve => { releaseNotice = resolve; });
    const runtime = new Promise(resolve => { releaseRuntime = resolve; });
    await page.route('**/*', async route => {
        const url = new URL(route.request().url());
        if (url.hostname !== '127.0.0.1') return route.abort();
        if (url.pathname.endsWith('/startup_notice.js')) {
            if (timing === 'missing-notice-script') return route.abort();
            await notice;
        }
        if (url.pathname.endsWith('/app_v31_2.min.js')) await runtime;
        if (url.pathname.endsWith('/firebase_data_loader.js')) return route.fulfill({
            contentType: 'application/javascript',
            body: 'window.ordoFirebaseDataReady = Promise.resolve({deferred:true}); window.ordoFirebaseDataApi = {ensure: () => window.testMassReady};'
        });
        return route.continue();
    });
    try {
        await page.goto(`${base}/${filename}`, { waitUntil: 'commit' });
        await page.locator('#consent-accept').waitFor({ state: 'visible' });
        if (timing === 'before-notice-script' || timing === 'missing-notice-script') {
            assert.equal(await page.evaluate(() => typeof acceptStartupNotice), 'undefined');
        } else {
            releaseNotice();
            if (timing === 'after-runtime') releaseRuntime();
            await page.waitForFunction(timing === 'after-runtime'
                ? () => typeof restoreStartupNoticeDecision === 'function'
                : () => typeof ordoShowStartupLoading === 'function');
        }
        await page.locator('#consent-accept').click();
        await page.locator('#consent-modal').waitFor({ state: 'hidden', timeout: 1000 });
        await page.locator('#startup-loading-screen').waitFor({ state: 'visible', timeout: 1000 });
        assert.equal(await page.evaluate(() => window.ordoStartupNoticeDecision), true);
        const spinner = await page.locator('.startup-loading-spinner').evaluate(node => ({
            animation: getComputedStyle(node).animationName,
            rect: { width: node.getBoundingClientRect().width, height: node.getBoundingClientRect().height },
            overflow: document.documentElement.scrollWidth > innerWidth
        }));
        assert.equal(spinner.animation, 'pull-refresh-spin');
        assert(spinner.rect.width > 0 && spinner.rect.height > 0 && !spinner.overflow);
        releaseNotice();
        if (timing !== 'missing-notice-script') await page.waitForFunction(() => typeof ordoShowStartupLoading === 'function');
        // Acceptance survives the bootstrap arriving after the click.
        assert.equal(await page.evaluate(() => window.ordoStartupNoticeDecision), true);
        releaseRuntime();
        await page.waitForFunction(() => typeof restoreStartupNoticeDecision === 'function');
        assert.equal(await page.evaluate(() => startupNoticeDecision), true);
        assert.equal(await page.locator('#startup-loading-screen').isVisible(), true, 'Pending Mass data dismissed the spinner');
        if (process.env.ORDO_STARTUP_SCREENSHOT && width === 390 && timing === 'after-runtime') {
            await page.screenshot({ path: process.env.ORDO_STARTUP_SCREENSHOT });
        }
        if (timing === 'before-notice-script') {
            await page.locator('#startup-loading-delayed button').waitFor({ state: 'visible' });
            assert.equal(await page.locator('#consent-modal').isVisible(), false);
        }
        await page.evaluate(() => window.releaseTestMass());
        await page.locator('#missal-root .part-container').first().waitFor({ state: 'visible' });
        await page.locator('#startup-loading-screen').waitFor({ state: 'hidden' });
        assert.equal(await page.evaluate(() => document.body.classList.contains('consent-pending')), false);
        // Duplicate acceptance must neither reopen the notice nor cover a ready Mass.
        await page.evaluate(() => acceptStartupNotice());
        assert.equal(await page.locator('#startup-loading-screen').isVisible(), false);
        assert.deepEqual(errors, []);
        console.log(`${filename}: ${width}px, ${timing}: notice closes immediately, spinner survives delayed scripts/data, Mass opens.`);
    } finally {
        releaseNotice(); releaseRuntime();
        await context.close();
    }
}

(async () => {
    const server = http.createServer((req, res) => {
        const file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
        if (!file.startsWith(root + path.sep)) return res.writeHead(403).end();
        fs.readFile(file, (error, data) => {
            if (error) return res.writeHead(404).end();
            res.setHeader('Content-Type', file.endsWith('.js') ? 'application/javascript' : file.endsWith('.svg') ? 'image/svg+xml' : 'text/html;charset=utf-8');
            res.end(data);
        });
    });
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    const browser = await chromium.launch({ headless: true });
    try {
        for (const filename of ['index.html', 'V31.2.html']) {
            for (const width of [1280, 390]) {
                for (const timing of ['before-notice-script', 'before-runtime', 'after-runtime']) {
                    await check(browser, `http://127.0.0.1:${server.address().port}`, filename, width, timing);
                }
            }
        }
        await check(browser, `http://127.0.0.1:${server.address().port}`, 'index.html', 390, 'missing-notice-script');
    } finally {
        await browser.close();
        server.closeAllConnections();
        await new Promise(resolve => server.close(resolve));
    }
})().catch(error => { console.error(error); process.exitCode = 1; });
