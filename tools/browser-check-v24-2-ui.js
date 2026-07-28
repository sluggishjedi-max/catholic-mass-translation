const fs = require('fs');
const http = require('http');
const os = require('os');
const path = require('path');
const { chromium } = require('@playwright/test');

const root = path.resolve(__dirname, '..');
const targetHtml = 'V24.2.html';
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
    window.fetch = async () => { throw new Error('Remote fetch disabled by V24.2 UI check'); };
    window.__androidBarState = { status: false, navigation: false, calls: 0 };
    window.OrdoAndroid = {
      isStatusBarHidden: () => window.__androidBarState.status,
      isNavigationBarHidden: () => window.__androidBarState.navigation,
      setSystemBarsHidden: (status, navigation) => {
        window.__androidBarState = {
          status: !!status,
          navigation: !!navigation,
          calls: window.__androidBarState.calls + 1
        };
      }
    };
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
      const mainHeader = document.getElementById('main-header').getBoundingClientRect();
      const mainNav = document.querySelector('nav').getBoundingClientRect();
      const mainNavInner = document.querySelector('.nav-inner').getBoundingClientRect();
      const missal = document.getElementById('missal-root').getBoundingClientRect();
      const floatingBanner = document.getElementById('floating-liturgy-banner').getBoundingClientRect();
      const floatingInner = document.querySelector('.floating-liturgy-inner').getBoundingClientRect();
      const navButtons = Array.from(document.querySelectorAll('nav .nav-item'));
      const navButtonWidths = navButtons.map(button => button.getBoundingClientRect().width);
      const navButtonFlexGrow = navButtons.map(button => getComputedStyle(button).flexGrow);
      const deviceUiLanguageFixtures = {
        korean: preferredUiLanguageFromDevice(['ko-KR', 'en-US']),
        vietnamese: preferredUiLanguageFromDevice(['vi-VN', 'en-US']),
        english: preferredUiLanguageFromDevice(['en-GB']),
        japanese: preferredUiLanguageFromDevice(['ja-JP']),
        latin: preferredUiLanguageFromDevice(['la'])
      };
      const storedUiLanguage = localStorage.getItem(UI_LANGUAGE_STORAGE_KEY);
      const uiLanguageBeforeGps = state.uiLang;
      const locationStateBeforeGps = {
        currentLoc: state.currentLoc,
        targetLang: state.targetLang,
        gpsTimeZone: state.gpsTimeZone,
        selectedLocation: document.getElementById('set-loc').value
      };
      applyDetectedLocation('EN', 'America/New_York');
      const uiLanguageAfterGps = state.uiLang;
      state.currentLoc = locationStateBeforeGps.currentLoc;
      state.targetLang = locationStateBeforeGps.targetLang;
      state.gpsTimeZone = locationStateBeforeGps.gpsTimeZone;
      document.getElementById('set-loc').value = locationStateBeforeGps.selectedLocation;
      syncTargetLanguageOptions();
      openSettings();
      const androidRowsVisible = [
        document.getElementById('android-status-bar-row'),
        document.getElementById('android-navigation-bar-row')
      ].every(row => !row.hidden);
      const settingsModalZIndex = Number(getComputedStyle(document.getElementById('settings-modal')).zIndex);
      const quickMenuZIndex = Number(getComputedStyle(document.getElementById('quick-home-menu')).zIndex);
      const settingsRowOrder = Array.from(document.querySelectorAll('.settings-content > .setting-row'))
        .map(row => row.id)
        .filter(Boolean);
      document.getElementById('set-hide-status-bar').checked = true;
      document.getElementById('set-hide-navigation-bar').checked = true;
      updateAndroidSystemBarSettings();
      const androidBarState = { ...window.__androidBarState };
      closeSettings();
      const ktcgFixture = ktcgkpvReadingSection([{
        INDEXING: 'Gr 14,17-22',
        LEAD: '<p>Bài trích sách ngôn sứ Giê-rê-mi-a.</p>',
        CONTENT: '<p><strong>Mắt tôi hãy tuôn trào suối lệ cả ngày đêm không ngớt ?</strong><br><strong>vì trinh nữ cô gái dân tôi đã bị đánh nhừ đòn !</strong><br><strong>vết trọng thương hết đường cứu chữa .</strong></p>'
      }]);
      const pairedGroups = [{ kr: 0, vn: 0 }, { kr: 1, vn: 1 }];
      const pairedLabels = pairedGroups.map((group, index) =>
        dailyVariantLabelForAlignment(group, index, pairedGroups, 'prayer_after')
      );
      const pairedVariants = {
        A: { label: {}, lines: [{ text_kr: '한국어 기도 1', text_vn: 'Lời nguyện 1' }] },
        B: { label: {}, lines: [{ text_kr: '한국어 기도 2', text_vn: 'Lời nguyện 2' }] }
      };
      applyDailySourceVariantLabels(pairedVariants, 'prayer_after', pairedGroups);
      const koreanPrayerAfter = '주님, 저희가 성체를 받아 모시며 언제나 성자의 수난을 기념하오니 성자께서 극진한 사랑으로 베풀어 주신 이 선물이 저희 구원에 도움이 되게 하소서.';
      const vietnamesePrayerAfter = 'Lạy Chúa, Chúa đã cho chúng con tham dự vào bí tích Thánh Thể, để chúng con đời đời tưởng nhớ Đức Giêsu Con Một Chúa, đã chịu khổ hình và sống lại hiển vinh; xin cho bí tích tình yêu Người trối lại dẫn chúng con tới hưởng ơn cứu độ muôn đời.';

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
          'lbl-set-voice-note', 'lbl-set-font', 'lbl-set-ui-lang',
          'lbl-set-hide-status-bar', 'lbl-set-hide-navigation-bar', 'lbl-close-btn'
        ].map(id => document.getElementById(id).textContent.trim()),
        androidSystemBars: {
          rowsVisible: androidRowsVisible,
          settingsAboveQuickMenu: settingsModalZIndex > quickMenuZIndex,
          state: androidBarState
        },
        settingsRowOrder,
        htmlLang: document.documentElement.lang,
        deviceUiLanguageFixtures,
        storedUiLanguage,
        gpsUiLanguageIsolation: {
          before: uiLanguageBeforeGps,
          after: uiLanguageAfterGps
        },
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
        floatingSettingsButton: { width: floatingSettingsButton.width, height: floatingSettingsButton.height },
        widthLimits: {
          header: mainHeader.width,
          nav: mainNav.width,
          navInner: mainNavInner.width,
          navButtonWidths,
          navButtonFlexGrow,
          missal: missal.width,
          floating: floatingBanner.width,
          floatingInner: floatingInner.width,
          headerMax: getComputedStyle(document.getElementById('main-header')).maxWidth,
          navMax: getComputedStyle(document.querySelector('nav')).maxWidth,
          navInnerMax: getComputedStyle(document.querySelector('.nav-inner')).maxWidth,
          floatingMax: getComputedStyle(document.getElementById('floating-liturgy-banner')).maxWidth,
          floatingInnerMax: getComputedStyle(document.querySelector('.floating-liturgy-inner')).maxWidth,
          legendMax: getComputedStyle(document.getElementById('role-legend')).maxWidth
        },
        ktcgFixture: {
          bodyCount: ktcgFixture.lines.filter(line => line.role === 'body').length,
          bodyText: ktcgFixture.lines.find(line => line.role === 'body')?.text || ''
        },
        prayerAfterEquivalent: localSemanticEquivalent('prayer_after', koreanPrayerAfter, vietnamesePrayerAfter),
        prayerAfterConclusionEquivalent: localSemanticEquivalent(
          'prayer_after',
          'Chúng con cầu xin nhờ Đức Ki-tô, Chúa chúng con.',
          '성자께서는 성부와 함께 영원히 살아 계시며 다스리시나이다.'
        ),
        prayerAfterConclusionNegative: localSemanticEquivalent(
          'prayer_after',
          'Chúng con xin được no say ơn Chúa.',
          '성자께서는 성부와 함께 영원히 살아 계시며 다스리시나이다.'
        ),
        pairedLabels,
        appliedPairedLabels: Object.values(pairedVariants).map(variant => variant.label)
      };
    });

    assert(JSON.stringify(result.navTexts) === JSON.stringify(['Thánh lễ', 'Kinh nguyện', 'Thánh ca', 'Nhà thờ']), `Vietnamese header menu mismatch: ${JSON.stringify(result.navTexts)}`);
    assert(JSON.stringify(result.quickTexts) === JSON.stringify(['Thánh lễ', 'Kinh nguyện', 'Thánh ca', 'Nhà thờ']), `Vietnamese quick menu mismatch: ${JSON.stringify(result.quickTexts)}`);
    assert(result.targetOptions.includes('Tiếng Hàn / 한국어') && result.targetOptions.includes('Tiếng Anh / English'), `Localized target options missing: ${JSON.stringify(result.targetOptions)}`);
    assert(JSON.stringify(result.fontOptions) === JSON.stringify(['Nhỏ', 'Bình thường', 'Lớn', 'Rất lớn']), `Vietnamese font choices mismatch: ${JSON.stringify(result.fontOptions)}`);
    assert(result.sourceOptions.every(text => /Bản dịch|KTCGKPV/.test(text)), `Vietnamese source choices are not localized: ${JSON.stringify(result.sourceOptions)}`);
    assert(result.settingsLabels.every(text => !/[가-힣]/.test(text)), `Fixed Korean remains in Vietnamese settings: ${JSON.stringify(result.settingsLabels)}`);
    assert(result.htmlLang === 'vi', `Document language should be vi, got ${result.htmlLang}`);
    assert(JSON.stringify(result.deviceUiLanguageFixtures) === JSON.stringify({
      korean: 'KR', vietnamese: 'VN', english: 'EN', japanese: 'JP', latin: 'LA'
    }), `Device/browser UI language routing is incorrect: ${JSON.stringify(result.deviceUiLanguageFixtures)}`);
    assert(result.storedUiLanguage === 'VN'
      && result.gpsUiLanguageIsolation.before === 'VN'
      && result.gpsUiLanguageIsolation.after === 'VN',
    `GPS changed the settings language or the user choice was not stored: ${JSON.stringify({
      stored: result.storedUiLanguage,
      gps: result.gpsUiLanguageIsolation
    })}`);
    assert(result.legend.visibleCount === 2 && result.legend.lineCounts.every(count => count === 1) && !result.legend.hasTitles, `Legend was not reduced to two psalm notes: ${JSON.stringify(result.legend)}`);
    assert(result.enlarged.header === result.enlarged.date
      && result.enlarged.header === result.enlarged.liturgy
      && result.enlarged.header === result.enlarged.liturgySecondary
      && result.enlarged.header === result.enlarged.legend
      && result.enlarged.header === result.enlarged.nav,
    `Header, date, liturgy and legend sizes differ: ${JSON.stringify(result.enlarged)}`);
    assert(Object.entries(result.baseline).every(([key, value]) => value === (key === 'quick' ? 12 : 16)),
      `Normal chrome fonts or fixed quick-menu font are incorrect: ${JSON.stringify(result.baseline)}`);
    assert(result.enlarged.header > result.baseline.header * 1.3
      && result.enlarged.nav > result.baseline.nav * 1.3
      && result.enlarged.legend > result.baseline.legend * 1.3,
    `Chrome fonts did not scale proportionally: ${JSON.stringify({ baseline: result.baseline, enlarged: result.enlarged })}`);
    assert(result.baseline.quick === 12 && result.enlarged.quick === 12,
      `Quick menu font must stay fixed at 12px: ${JSON.stringify({ baseline: result.baseline.quick, enlarged: result.enlarged.quick })}`);
    assert(result.androidSystemBars.rowsVisible
      && result.androidSystemBars.settingsAboveQuickMenu
      && result.androidSystemBars.state.status
      && result.androidSystemBars.state.navigation
      && result.androidSystemBars.state.calls === 1,
    `APK-only system bar settings are not connected: ${JSON.stringify(result.androidSystemBars)}`);
    assert(result.settingsRowOrder.indexOf('ui-language-row') < result.settingsRowOrder.indexOf('stacked-layout-row')
      && result.settingsRowOrder.indexOf('stacked-layout-row') < result.settingsRowOrder.indexOf('android-status-bar-row'),
    `Stacked-layout setting is not between UI language and status-bar settings: ${JSON.stringify(result.settingsRowOrder)}`);
    assert(result.firstGap === 0, `A blank strip remains before the first Mass section: ${result.firstGap}px`);
    assert(result.bodyPaddingBottom === '0px' && parseFloat(result.missalPaddingBottom) >= 64, `The end strip/footer spacing is not attached to the white missal: ${JSON.stringify(result)}`);
    assert(result.settingsButton.width >= 44 && result.settingsButton.height >= 44
      && result.floatingSettingsButton.width >= 44 && result.floatingSettingsButton.height >= 42,
    `Settings buttons are too small: ${JSON.stringify(result)}`);
    assert(result.widthLimits.headerMax === '1100px'
      && result.widthLimits.navMax === 'none'
      && result.widthLimits.navInnerMax === '1100px'
      && result.widthLimits.navButtonFlexGrow.every(value => value === '0')
      && new Set(result.widthLimits.navButtonWidths.map(value => Math.round(value))).size > 1
      && result.widthLimits.floatingMax === 'none'
      && result.widthLimits.floatingInnerMax === '1100px'
      && result.widthLimits.legendMax === '1100px'
      && result.widthLimits.header <= result.widthLimits.missal
      && result.widthLimits.navInner <= result.widthLimits.missal
      && result.widthLimits.nav >= result.widthLimits.navInner
      && result.widthLimits.floating >= result.widthLimits.floatingInner
      && result.widthLimits.floatingInner <= result.widthLimits.missal,
    `Header, content-sized nav, or full-width floating banner is invalid: ${JSON.stringify(result.widthLimits)}`);
    assert(result.ktcgFixture.bodyCount === 1
      && result.ktcgFixture.bodyText === 'Mắt tôi hãy tuôn trào suối lệ cả ngày đêm không ngớt?\\nvì trinh nữ cô gái dân tôi đã bị đánh nhừ đòn!\\nvết trọng thương hết đường cứu chữa.'.replace(/\\n/g, '\n')
      && !/[ \t\u00a0]+[,.;:!?]/.test(result.ktcgFixture.bodyText),
    `KTCG reading lines were not kept as one newline-preserving paragraph: ${JSON.stringify(result.ktcgFixture)}`);
    assert(result.prayerAfterEquivalent, 'Today’s Korean and Vietnamese Prayer after Communion should be semantically equivalent');
    assert(result.prayerAfterConclusionEquivalent, 'Vietnamese and Korean authorized Prayer after Communion conclusions should remain in one option');
    assert(!result.prayerAfterConclusionNegative, 'A non-conclusion Prayer after Communion line must not be matched only to a Korean conclusion');
    assert(result.pairedLabels.every((label, index) => label.kr === `선택지 ${index + 1}` && label.vn === `Lựa chọn ${index + 1}`),
      `Paired alignment labels are source-labeled: ${JSON.stringify(result.pairedLabels)}`);
    assert(result.appliedPairedLabels.every((label, index) => label.kr === `선택지 ${index + 1}` && label.vn === `Lựa chọn ${index + 1}`),
      `Applied paired variant labels are source-labeled: ${JSON.stringify(result.appliedPairedLabels)}`);
    assert(pageErrors.length === 0, `Page errors: ${pageErrors.join('\n')}`);

    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: path.join(os.tmpdir(), 'v24-2-ui-top.png') });
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    await page.screenshot({ path: path.join(os.tmpdir(), 'v24-2-ui-bottom.png') });
    console.log(JSON.stringify(result, null, 2));
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error.stack || String(error));
  process.exitCode = 1;
});
