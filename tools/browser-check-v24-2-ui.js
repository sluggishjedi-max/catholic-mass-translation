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
      const quickMenuRect = document.getElementById('quick-home-menu').getBoundingClientRect();
      const footerRect = document.getElementById('main-footer').getBoundingClientRect();
      const mainHeader = document.getElementById('main-header').getBoundingClientRect();
      const mainHeaderInner = document.querySelector('.header-inner').getBoundingClientRect();
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
      const savedSourceVisibilityState = {
        currentLoc: state.currentLoc,
        targetLang: state.targetLang,
        useGps: state.useGps
      };
      const probeVietnameseSourceVisibility = (currentLoc, targetLang, useGps) => {
        state.currentLoc = currentLoc;
        state.targetLang = targetLang;
        state.useGps = useGps;
        return syncVietnameseReadingSourceSettingVisibility();
      };
      const vietnameseSourceSettingVisibility = {
        translatedVietnamese: probeVietnameseSourceVisibility('KR', 'VN', false),
        forcedVietnameseOriginal: probeVietnameseSourceVisibility('VN', 'KR', false),
        gpsVietnameseOriginal: probeVietnameseSourceVisibility('VN', 'EN', true),
        forcedNonVietnamese: probeVietnameseSourceVisibility('EN', 'KR', false),
        gpsNonVietnamese: probeVietnameseSourceVisibility('KR', 'EN', true)
      };
      state.currentLoc = savedSourceVisibilityState.currentLoc;
      state.targetLang = savedSourceVisibilityState.targetLang;
      state.useGps = savedSourceVisibilityState.useGps;
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
      const properDate = new Date(2026, 6, 29);
      const properDateKey = formatDateIso(properDate);
      const properCalendarContext = parseVietnameseCalendarDayContext([
        '29 (16/6) Thứ Tư Tuần XVII Thường Niên',
        'Bậc lễ: Nhớ',
        '– Thánh Mác-ta, Ma-ri-a và La-da-rô',
        'Lễ nhớ có bài đọc riêng',
        'Màu phụng vụ: Trắng',
        'Bài đọc: 1Ga 4,7-16; Ga 11,19-27'
      ], properDate);
      const sundayCalendarContext = parseVietnameseCalendarDayContext([
        '02 (20/6) CHÚA NHẬT XVIII THƯỜNG NIÊN',
        'Bậc lễ: Chúa Nhật',
        '– Ca vịnh tuần II.',
        '– Không cử hành lễ các thánh trùng ngày.',
        '– Chúa Nhật III trong tháng, ngày truyền giáo của giáo phận.',
        'Màu phụng vụ: Xanh',
        'Bài đọc: Is 55,1-3; Rm 8,35.37-39; Mt 14,13-21'
      ], new Date(2026, 7, 2));
      const ordinaryChoice = {
        display_text: 'Ngày thường',
        is_special: false,
        date_info: { daily_title: 'Thứ Tư Tuần XVII - Mùa Thường Niên' },
        reading1: [{ INDEXING: 'Gr 15,10.16-21' }],
        gospel: [{ INDEXING: 'Mt 13,44-46' }]
      };
      const properChoice = {
        display_text: 'Các thánh Mác-ta',
        is_special: false,
        date_info: { daily_title: 'Thứ Tư Tuần XVII - Mùa Thường Niên' },
        reading1: [{ INDEXING: '1 Ga 4,7-16' }],
        gospel: [{ INDEXING: 'Ga 11,19-27' }]
      };
      const previousProperHints = vietnameseCalendarReadingHints[properDateKey];
      vietnameseCalendarReadingHints[properDateKey] = {
        readings: [
          { display: '1Ga 4,7-16', key: normalizeVietnameseCalendarCitation('1Ga 4,7-16'), isGospel: false },
          { display: 'Ga 11,19-27', key: normalizeVietnameseCalendarCitation('Ga 11,19-27'), isGospel: true }
        ],
        context: properCalendarContext
      };
      const properSelected = ktcgkpvReadingChoice(
        { mass_reading: [ordinaryChoice, properChoice] },
        properDate,
        properCalendarContext
      );

      const ordinaryDate = new Date(2026, 6, 30);
      const ordinaryDateKey = formatDateIso(ordinaryDate);
      const ordinaryCalendarContext = {
        confirmed: true,
        priority: false,
        rank: 'Thường',
        rankKey: 'feria',
        title: '',
        color: liturgyColorMap.green,
        date: ordinaryDateKey
      };
      const previousOrdinaryHints = vietnameseCalendarReadingHints[ordinaryDateKey];
      vietnameseCalendarReadingHints[ordinaryDateKey] = {
        readings: [
          { display: 'Gr 18,1-6', key: normalizeVietnameseCalendarCitation('Gr 18,1-6'), isGospel: false },
          { display: 'Mt 13,47-53', key: normalizeVietnameseCalendarCitation('Mt 13,47-53'), isGospel: true }
        ],
        context: ordinaryCalendarContext
      };
      const ordinarySelected = ktcgkpvReadingChoice({
        mass_reading: [
          {
            display_text: 'Thánh Phê-rô Kim Ngôn',
            is_special: true,
            reading1: [{ INDEXING: '2 Tm 4,1-5' }],
            gospel: [{ INDEXING: 'Mt 5,13-19' }]
          },
          {
            display_text: 'Ngày thường',
            is_special: false,
            date_info: { daily_title: 'Thứ Năm Tuần XVII - Mùa Thường Niên' },
            reading1: [{ INDEXING: 'Gr 18,1-6' }],
            gospel: [{ INDEXING: 'Mt 13,47-53' }]
          }
        ]
      }, ordinaryDate, ordinaryCalendarContext);
      const augustFourthSelected = ktcgkpvReadingChoice({
        mass_reading: [
          {
            display_text: 'Ngày thường',
            is_special: false,
            date_info: { daily_title: 'Thứ Ba Tuần XVIII - Mùa Thường Niên' },
            reading1: [{ INDEXING: 'Gr 30,1-2.12-15.18-22' }],
            gospel: [{ INDEXING: 'Mt 14,22-36' }]
          },
          {
            display_text: 'Thánh Gio-an Ma-ri-a Vi-a-nê',
            is_special: true,
            reading1: [{ INDEXING: 'Ed 3,16-21' }],
            gospel: [{ INDEXING: 'Mt 9,35-10,1' }]
          }
        ]
      }, new Date(2026, 7, 4), null);
      if (previousProperHints) vietnameseCalendarReadingHints[properDateKey] = previousProperHints;
      else delete vietnameseCalendarReadingHints[properDateKey];
      if (previousOrdinaryHints) vietnameseCalendarReadingHints[ordinaryDateKey] = previousOrdinaryHints;
      else delete vietnameseCalendarReadingHints[ordinaryDateKey];

      const generatedProper = buildGeneratedLiturgyInfo(properDate);
      const savedMergeState = {
        liturgyInfo: state.liturgyInfo,
        isSunday: state.isSunday,
        currentLoc: state.currentLoc,
        targetLang: state.targetLang,
        liturgicalDateContext: state.liturgicalDateContext
      };
      const mergeDate = new Date(2026, 7, 4);
      state.currentLoc = 'KR';
      state.targetLang = 'VN';
      state.liturgicalDateContext = { date: mergeDate, localDate: mergeDate };
      state.liturgyInfo = buildGeneratedLiturgyInfo(mergeDate);
      const mergedCalendarData = {};
      mergeSourceData(mergedCalendarData, {
        title: 'Tiêu đề KTCG bị phân tích sai',
        color: liturgyColorMap.red,
        calendarContext: {
          confirmed: true,
          priority: true,
          rank: 'Lễ trọng',
          rankKey: 'solemnity',
          title: 'Tiêu đề lịch ngoài bị sai',
          color: liturgyColorMap.red,
          date: formatDateIso(mergeDate)
        },
        data: {
          reading1: {
            text: 'Bài đọc riêng theo lịch phụng vụ Việt Nam.',
            lines: [{ sp: '', text: 'Bài đọc riêng theo lịch phụng vụ Việt Nam.', role: 'body' }]
          }
        }
      }, 'VN');
      const calendarMergeFixture = {
        title: state.liturgyInfo.names.VN,
        special: !!state.liturgyInfo.meta.special,
        confirmed: !!state.liturgyInfo.meta.vietnameseCalendarConfirmed,
        color: state.liturgyInfo.color,
        reading: mergedCalendarData.reading1 && mergedCalendarData.reading1.vn
      };
      state.liturgyInfo = savedMergeState.liturgyInfo;
      state.isSunday = savedMergeState.isSunday;
      state.currentLoc = savedMergeState.currentLoc;
      state.targetLang = savedMergeState.targetLang;
      state.liturgicalDateContext = savedMergeState.liturgicalDateContext;
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
      const koreanOfferingPrayer = '주님, 복된 라우렌시오를 기리며 기쁘게 바치는 이 예물을 받으시고 저희를 자비로이 도우시어 구원하여 주소서.';
      const vietnameseOfferingPrayer = 'Lạy Thiên Chúa nhân từ xin chấp nhận của lễ chúng con vui mừng dâng lên Chúa trong ngày lễ kính thánh Lô-ren-xô. Xin cho của lễ này giúp chúng con đạt tới ơn cứu độ.';
      const navColor = getComputedStyle(document.querySelector('nav')).backgroundColor;
      const brandColorToken = getComputedStyle(document.documentElement)
        .getPropertyValue('--brand-logo-color')
        .trim();
      const brandColorProbe = document.createElement('span');
      brandColorProbe.style.color = brandColorToken;
      document.body.appendChild(brandColorProbe);
      const brandColor = getComputedStyle(brandColorProbe).color;
      brandColorProbe.remove();
      const sourceChoiceButton = document.querySelector('.vn-source-btn');
      const startupAndSourceColors = {
        brandToken: brandColorToken,
        brand: brandColor,
        nav: navColor,
        noticeTitle: getComputedStyle(document.querySelector('.consent-content h2')).color,
        noticeLanguageTitle: getComputedStyle(document.querySelector('.consent-language-title')).color,
        noticeAccept: getComputedStyle(document.querySelector('.consent-btn.accept')).backgroundColor,
        sourceTitle: getComputedStyle(document.querySelector('.vn-source-content h2')).color,
        sourceChoice: getComputedStyle(sourceChoiceButton.querySelector('strong')).color
      };
      updateFloatingLiturgyBanner('전례명 원문', 'Translated liturgy name');
      const floatingPrimary = document.querySelector('.floating-liturgy-primary');
      const floatingSecondary = document.querySelector('.floating-liturgy-secondary');
      const floatingPrimaryRect = floatingPrimary.getBoundingClientRect();
      const floatingSecondaryRect = floatingSecondary.getBoundingClientRect();
      const floatingTranslation = {
        primary: floatingPrimary?.textContent || '',
        secondary: floatingSecondary?.textContent || '',
        secondaryOpacity: Number.parseFloat(getComputedStyle(floatingSecondary).opacity || '1'),
        primaryDisplay: getComputedStyle(floatingPrimary).display,
        secondaryDisplay: getComputedStyle(floatingSecondary).display,
        primaryWhiteSpace: getComputedStyle(floatingPrimary).whiteSpace,
        secondaryWhiteSpace: getComputedStyle(floatingSecondary).whiteSpace,
        fixedRows: floatingSecondaryRect.top >= floatingPrimaryRect.bottom - 0.5,
        separatorCount: document.querySelectorAll('.floating-liturgy-separator').length
      };
      updateFloatingLiturgyBanner(
        '한국 교회의 수호자 원죄 없이 잉태되신 복되신 동정 마리아 대축일 전야 미사',
        'Solemnity of the Immaculate Conception of the Blessed Virgin Mary, Principal Patroness of the Church in Korea'
      );
      fitFloatingLiturgyLines();
      const fittedText = document.getElementById('floating-liturgy-text');
      const fittedPrimary = document.querySelector('.floating-liturgy-primary');
      const fittedSecondary = document.querySelector('.floating-liturgy-secondary');
      const fittedPrimaryRect = fittedPrimary.getBoundingClientRect();
      const fittedSecondaryRect = fittedSecondary.getBoundingClientRect();
      const floatingLongTitleFit = {
        availableWidth: fittedText.clientWidth,
        primaryTextWidth: floatingLiturgyLineTextWidth(fittedPrimary),
        secondaryTextWidth: floatingLiturgyLineTextWidth(fittedSecondary),
        primaryAdjusted: fittedPrimary.dataset.fitAdjusted,
        secondaryAdjusted: fittedSecondary.dataset.fitAdjusted,
        primaryWhiteSpace: getComputedStyle(fittedPrimary).whiteSpace,
        secondaryWhiteSpace: getComputedStyle(fittedSecondary).whiteSpace,
        fixedRows: fittedSecondaryRect.top >= fittedPrimaryRect.bottom - 0.5
      };
      const rectanglesOverlap = (first, second) => first.left < second.right
        && first.right > second.left
        && first.top < second.bottom
        && first.bottom > second.top;
      state.dailyReadingsLoading = true;
      state.dailyReadingLanguageStatus = { VN: 'loading', KR: 'done', EN: 'done' };
      state.dailyReadingLanguageErrorAt = {};
      markDailyReadingLanguagesLoading(['VN', 'KR', 'EN'], { preserveDone: true });
      showAppTab('mass');
      syncLiturgyLoadingStatusBar('VN', 'EN');
      updateVoiceStatusBar(voiceText('listening'), { recording: true });
      const liturgyStatusBar = document.getElementById('liturgy-status-bar');
      const voiceStatusBar = document.getElementById('voice-status-bar');
      const statusQuickMenuRect = document.getElementById('quick-home-menu').getBoundingClientRect();
      const statusFooterRect = document.getElementById('main-footer').getBoundingClientRect();
      const liturgyStatusRect = liturgyStatusBar.getBoundingClientRect();
      const voiceStatusRect = voiceStatusBar.getBoundingClientRect();
      const runtimeStatusLayout = {
        preservedStatuses: Object.assign({}, state.dailyReadingLanguageStatus),
        includesKoreanLoading: liturgyStatusBar.textContent.includes(localizedLiturgyLoadingMessageForLang('KR')),
        includesVietnameseLoading: liturgyStatusBar.textContent.includes(localizedLiturgyLoadingMessageForLang('VN')),
        statusBarsOverlap: rectanglesOverlap(liturgyStatusRect, voiceStatusRect),
        liturgyOverlapsQuickMenu: rectanglesOverlap(liturgyStatusRect, statusQuickMenuRect),
        voiceOverlapsQuickMenu: rectanglesOverlap(voiceStatusRect, statusQuickMenuRect),
        liturgyOverlapsFooter: rectanglesOverlap(liturgyStatusRect, statusFooterRect),
        voiceOverlapsFooter: rectanglesOverlap(voiceStatusRect, statusFooterRect),
        footerGap: Math.round(statusFooterRect.top - voiceStatusRect.bottom)
      };
      hideVoiceStatusBar();
      hideLiturgyStatusBar();
      state.dailyReadingsLoading = false;
      state.dailyReadingLanguageStatus = {};
      state.dailyReadingLanguageErrorAt = {};
      const sourceChoiceModal = document.getElementById('vn-source-modal');
      sourceChoiceModal.classList.add('is-visible');
      const completionRemembered = rememberLiturgyCompletionDuringChoice('KR');
      sourceChoiceModal.classList.remove('is-visible');
      const completionShown = showPendingLiturgyCompletionAfterChoice();
      const completionNotice = {
        remembered: completionRemembered,
        shown: completionShown,
        text: document.getElementById('liturgy-status-bar').textContent.trim()
      };
      hideLiturgyStatusBar();

      const applyVisualTheme = theme => {
        document.documentElement.style.setProperty('--primary-color', theme.accent);
        document.documentElement.style.setProperty('--liturgy-bg-color', theme.bg);
        document.documentElement.style.setProperty('--liturgy-text-color', theme.text);
        document.documentElement.style.setProperty('--liturgy-primary-name-color', theme.primaryName || theme.text);
        document.documentElement.style.setProperty('--liturgy-secondary-color', theme.secondary || theme.text);
        document.documentElement.style.setProperty('--translation-color', theme.translation || '#6c757d');
        document.documentElement.style.setProperty('--translation-heading-color', theme.translationHeading || theme.accent);
        document.documentElement.style.setProperty('--section-bar-bg', theme.sectionBg || '#eee');
        document.getElementById('main-header').style.background = theme.bg;
        document.getElementById('main-header').style.color = theme.text;
      };
      const savedVisualTheme = liturgyColorVisualTheme(state.liturgyInfo.color);
      applyVisualTheme(liturgyColorVisualTheme(liturgyColorMap.white));
      const computedColor = selector => {
        const node = document.querySelector(selector);
        return node ? getComputedStyle(node).color : '';
      };
      const bodyPair = Array.from(document.querySelectorAll('#missal-root .pair-block')).find(block => (
        block.querySelector(':scope > .pair-line:not(.translation):not(.summary) .text-content')
        && block.querySelector(':scope > .pair-line.translation:not(.summary) .text-content')
      ));
      const whiteLiturgyContrast = {
        headerPrimary: computedColor('.liturgy-name-primary'),
        headerTranslation: computedColor('.liturgy-name-secondary'),
        floatingPrimary: computedColor('.floating-liturgy-primary'),
        floatingTranslation: computedColor('.floating-liturgy-secondary'),
        partPrimary: computedColor('.part-title'),
        partTranslation: computedColor('.stacked-header-translation'),
        sectionPrimary: computedColor('.section-bar-primary'),
        sectionTranslation: computedColor('.section-bar-secondary'),
        sourceBody: bodyPair ? getComputedStyle(bodyPair.querySelector(':scope > .pair-line:not(.translation):not(.summary) .text-content')).color : '',
        translatedBody: bodyPair ? getComputedStyle(bodyPair.querySelector(':scope > .pair-line.translation:not(.summary) .text-content')).color : '',
        sectionBackground: getComputedStyle(document.querySelector('.section-bar')).backgroundColor
      };
      const stackedHeaderProbe = document.createElement('div');
      stackedHeaderProbe.innerHTML = genStackedHeader(
        { type: 'part', cit: { cit_kr: '하바쿡 1,12', cit_vn: 'Kb 1,12' } },
        {
          type: 'part',
          header: { kr: '독서', vn: 'Bài đọc' },
          cit: { cit_kr: '하바쿡 1,12', cit_vn: 'Kb 1,12' }
        },
        'KR',
        'VN',
        'reading1'
      );
      document.body.appendChild(stackedHeaderProbe);
      const stackedTranslationColors = Object.entries({
        green: liturgyColorMap.green,
        red: liturgyColorMap.red,
        purple: liturgyColorMap.purple,
        gold: liturgyColorMap.gold,
        rose: liturgyColorMap.rose,
        white: liturgyColorMap.white
      }).map(([name, value]) => {
        const theme = liturgyColorVisualTheme(value);
        applyVisualTheme(theme);
        const accentProbe = document.createElement('span');
        accentProbe.style.color = theme.accent;
        stackedHeaderProbe.appendChild(accentProbe);
        const result = {
          name,
          accent: getComputedStyle(accentProbe).color,
          sourceTitle: getComputedStyle(stackedHeaderProbe.querySelector('.part-title')).color,
          translationTitle: getComputedStyle(stackedHeaderProbe.querySelector('.stacked-header-translation')).color,
          sourceCitation: getComputedStyle(stackedHeaderProbe.querySelector('.stacked-citation-primary')).color,
          translationCitation: getComputedStyle(stackedHeaderProbe.querySelector('.stacked-citation-translation')).color
        };
        accentProbe.remove();
        return result;
      });
      stackedHeaderProbe.remove();
      applyVisualTheme(savedVisualTheme);

      const entry = (citation, body) => ({ INDEXING: citation, CONTENT: `<p>${body}</p>` });
      const aug7KtcgPayload = {
        mass_reading: [
          {
            display_text: 'Ngày thường',
            date_info: { daily_title: 'Thứ Sáu Tuần XVIII - Mùa Thường Niên' },
            reading1: [entry('Nk 2,1.3 ; 3,1-3.6-7', 'Na-khum')],
            gospel: [entry('Mt 16,24-28', 'Mát-thêu')]
          },
          {
            display_text: 'Thánh Xíttô II, Giáo hoàng và các bạn tử đạo',
            is_special: true,
            reading1: [entry('Kn 3,1-9', 'Khôn ngoan')],
            gospel: [entry('Mt 10,28-33', 'Mát-thêu riêng')]
          },
          {
            display_text: 'Thánh Gaetanô, Linh mục',
            is_special: true,
            reading1: [entry('Hc 2,7-13', 'Huấn ca')],
            gospel: [entry('Lc 12,32-34', 'Lu-ca')]
          }
        ]
      };
      const aug8KtcgPayload = {
        mass_reading: [
          {
            display_text: 'Ngày thường',
            date_info: { daily_title: 'Thứ Bảy Tuần XVIII - Mùa Thường Niên' },
            introit: [entry('Tv 69,2.6', 'Ca nhập lễ ngày thường')],
            reading1: [entry('Kb 1,12 - 2,4', 'Kha-ba-cúc')],
            gospel: [entry('Mt 17,14-20', 'Mát-thêu')],
            communion: [entry('Kn 16,20', 'Ca hiệp lễ ngày thường')]
          },
          {
            display_text: 'Thánh Đa Minh, Linh mục',
            is_special: true,
            introit: [entry('Tv 15,5-6', 'Ca nhập lễ thánh Đa Minh')],
            reading1: [entry('Kn 7,7-10', 'Khôn ngoan'), entry('1 Cr 2,1-10a', 'Cô-rin-tô')],
            gospel: [entry('Lc 9,57-62', 'Lu-ca')],
            communion: [entry('x. Mt 19,27-29', 'Ca hiệp lễ thánh Đa Minh')]
          }
        ]
      };
      const aug7KtcgSections = ktcgkpvDailySectionsFromChoices(
        ktcgkpvOrderedReadingChoices(aug7KtcgPayload, new Date(2026, 7, 7))
      );
      const aug8KtcgChoices = ktcgkpvOrderedReadingChoices(aug8KtcgPayload, new Date(2026, 7, 8));
      const aug8KtcgLiturgyChoices = ktcgkpvOrderedLiturgyChoices(aug8KtcgPayload, new Date(2026, 7, 8));
      const aug8KtcgSections = ktcgkpvDailySectionsFromChoices(aug8KtcgChoices, aug8KtcgLiturgyChoices);
      const readingChoiceFixture = {
        aug7: {
          reading1: aug7KtcgSections.reading1.optionCits.map(item => item.cit_vn),
          gospel: aug7KtcgSections.gospel.optionCits.map(item => item.cit_vn),
          labels: aug7KtcgSections.reading1.optionLabels
        },
        aug8: {
          primary: ktcgkpvChoiceTitle(aug8KtcgChoices[0]),
          entrance: aug8KtcgSections.entrance.optionCits.map(item => item.cit_vn),
          reading1: aug8KtcgSections.reading1.optionCits.map(item => item.cit_vn),
          gospel: aug8KtcgSections.gospel.optionCits.map(item => item.cit_vn),
          communion: aug8KtcgSections.communion.optionCits.map(item => item.cit_vn),
          labels: aug8KtcgSections.reading1.optionLabels
        }
      };
      const duplicateKtcgPayload = {
        mass_reading: [
          {
            display_text: 'Ngày thường',
            reading1: [entry('2 Cr 9,6-10', 'Cô-rin-tô chung')],
            gospel: [entry('Ga 12,24-26', 'Gio-an chung')]
          },
          {
            display_text: 'Thánh Lô-ren-xô',
            is_special: true,
            reading1: [entry('2 Cr 9,6-10', 'Cô-rin-tô riêng')],
            gospel: [entry('Ga 12,24-26', 'Gio-an riêng')]
          }
        ]
      };
      const duplicateKtcgChoices = ktcgkpvOrderedReadingChoices(duplicateKtcgPayload, new Date(2026, 7, 10));
      const duplicateKtcgSections = ktcgkpvDailySectionsFromChoices(duplicateKtcgChoices);
      const duplicateReadingFixture = {
        readingCitations: duplicateKtcgSections.reading1.optionCits.map(item => item.cit_vn),
        readingKinds: duplicateKtcgSections.reading1.optionKinds,
        gospelCitations: duplicateKtcgSections.gospel.optionCits.map(item => item.cit_vn),
        koreanRomans: buildKoreanCitation('▥ 사도 바오로의 로마서 말씀입니다.', '9,1-5'),
        koreanCorinthians: buildKoreanCitation('▥ 사도 바오로의 코린토 2서 말씀입니다.', '9,6ㄴ-10'),
        commonReadingLabel: dailyVariantLabelFromSourceMetadata({ optionKinds_kr: ['common'] }, null, 0, null, 'reading2'),
        properGospelLabel: dailyVariantLabelFromSourceMetadata({ optionKinds_kr: ['proper'] }, null, 0, null, 'gospel')
      };
      const aug11OrdinaryChoice = {
        display_text: 'Ngày thường',
        date_info: { daily_title: 'Thứ Ba Tuần XIX - Mùa Thường Niên' },
        introit: [entry('', 'Lạy Chúa, xin nhớ lại giao ước của Chúa, và đừng bỏ rơi đến cùng những người nghèo khổ của Chúa.')]
      };
      const aug11ClareChoice = {
        display_text: 'Thánh Cơ-la-ra, Trinh nữ',
        is_special: true,
        introit: [
          entry('', 'Đây là trinh nữ khôn ngoan, đã cầm đèn sáng ra đón Đức Ki-tô.'),
          entry('Tv 15,5', 'Lạy Chúa, Chúa là phần sản nghiệp và phần chén của con.')
        ]
      };
      const aug11Sections = ktcgkpvDailySectionsFromChoices(
        [aug11ClareChoice, aug11OrdinaryChoice],
        [aug11ClareChoice, aug11OrdinaryChoice],
        new Date(2026, 7, 11)
      );
      const aug11EntranceOptions = {
        kr: [
          [{ text: '슬기로운 동정녀는 등불을 밝혀 들고 그리스도를 맞으러 나갔네.' }],
          [{ text: '그리스도의 동정녀는 얼마나 아름다운가! 그가 영원한 동정의 화관을 받았네.' }]
        ],
        vn: [
          [{ text: 'Đây là trinh nữ khôn ngoan, đã cầm đèn sáng ra đón Đức Ki-tô.' }],
          [{ text: 'Lạy Chúa, Chúa là phần sản nghiệp và phần chén của con.' }],
          [{ text: 'Lạy Chúa, xin nhớ lại giao ước của Chúa, và đừng bỏ rơi đến cùng những người nghèo khổ của Chúa.' }]
        ]
      };
      const aug11Alignment = buildFallbackVariantAlignment('entrance', aug11EntranceOptions, {});
      const unsafeAiAlignment = normalizeSafeVariantAlignmentGroups(
        'entrance',
        aug11EntranceOptions,
        [{ kr: 0, vn: 0 }, { kr: 1, vn: 1 }, { vn: 2 }]
      );
      const aug12OrdinaryChoice = {
        display_text: 'Ngày thường',
        date_info: { daily_title: 'Thứ Tư Tuần XIX - Mùa Thường Niên' },
        introit: [entry('Tv 73,20.19.22.23', 'Lạy Chúa, xin nhớ lại giao ước của Chúa.')]
      };
      const aug12OptionalChoice = {
        display_text: 'Thánh Gio-an-na Phan-xi-ca Săng-tan',
        is_special: true,
        introit: [entry('Tv 73,20.19.22.23', 'Lạy Chúa, xin nhớ lại giao ước của Chúa.')],
        reading1: [entry('Cn 31,10-13.19-20.30-31', 'Bài đọc riêng của thánh nữ.')]
      };
      const aug12Sections = ktcgkpvDailySectionsFromChoices(
        [aug12OrdinaryChoice, aug12OptionalChoice],
        [aug12OrdinaryChoice, aug12OptionalChoice],
        new Date(2026, 7, 12)
      );
      const adjacentVigilChoices = ktcgkpvOrderedReadingChoices({
        mass_reading: [
          { display_text: 'Ngày thường', reading1: [entry('Gs 24,14-29', 'Bài đọc ngày thường')] },
          { display_text: 'Thánh Mác-xi-mi-li-a-nô Ma-ri-a Kôn-bê', reading1: [entry('1 Ga 3,13-18', 'Bài đọc lễ nhớ')] },
          { display_text: 'Ngày 15 tháng 8 - ĐỨC MẸ LÊN TRỜI - Thánh lễ Vọng', reading1: [entry('1 Sb 15,3-4', 'Bài đọc lễ vọng')] }
        ]
      }, new Date(2026, 7, 14));
      const kindedEntranceVariants = {
        A: {
          label: dailyVariantLabelForKind('proper', 'entrance'),
          lines: [{ text_kr: '고유 입당송', text_vn: 'Ca nhập lễ riêng' }],
          __dailyOptionKind: 'proper'
        }
      };
      applyDailySourceVariantLabels(kindedEntranceVariants, 'entrance', [{ kr: 0, vn: 0 }]);
      const optionBodyLine = (kr, vn = '') => ({
        text_kr: kr,
        role_kr: kr ? 'body' : '',
        text_vn: vn,
        role_vn: vn ? 'body' : ''
      });
      const multilingualEntranceOptionMap = {
        kr: [
          [{ text: '이 슬기롭고 지혜로운 동정녀는 등불을 밝혀 들고 그리스도를 맞으러 나갔네.' }],
          [{ text: '그리스도의 동정녀, 얼마나 아름다운가! 주님의 화관, 영원한 동정의 화관을 받았네.' }]
        ],
        en: [
          [{ text: 'Here is a wise virgin, from among the number of the prudent, who went forth with lighted lamp to meet Christ.' }],
          [{ text: 'How beautiful you are, O virgin of Christ, who were worthy to receive the Lord’s crown, the crown of perpetual virginity.' }],
          [{ text: 'Let us rejoice and exult for joy for a holy and glorious virgin.' }]
        ],
        la: [
          [{ text: 'Hæc est sápiens, et una de número prudéntum, quæ óbviam Christo cum lámpade accénsa éxiit.' }],
          [{ text: 'O quam pulchra es, virgo Christi, quæ corónam Dómini digna fuísti accípere, corónam perpétuæ virginitátis.' }],
          [{ text: 'Gaudeámus et exsultémus, quia Dóminus ómnium diléxit vírginem sanctam atque gloriósam.' }]
        ]
      };
      const multilingualEntranceAlignment = buildFallbackVariantAlignment('entrance', multilingualEntranceOptionMap, {});
      const completedMultilingualEntranceAlignment = combineTrustedVariantAlignments(
        'entrance',
        multilingualEntranceOptionMap,
        multilingualEntranceAlignment,
        [{ kr: 0, en: 0, la: 0 }, { kr: 1, en: 1, la: 1 }, { en: 2, la: 2 }]
      );
      const citationPriorityOptionMap = {
        kr: [[{ text: '보라, 신랑이 오신다. 주 그리스도를 맞으러 나가라.' }]],
        la: [
          [{ text: 'Ecce Sponsus venit: exíte óbviam Christo Dómino.' }],
          [{ text: 'Média nocte clamor factus est: Ecce sponsus venit, exíte.' }]
        ]
      };
      const citationPriorityAlignment = buildFallbackVariantAlignment('communion', citationPriorityOptionMap, {
        optionCits_kr: [{ cit_kr: '마태 25,6 참조' }],
        optionCits_la: [{ cit_la: 'Cf. Mt 25, 6' }, { cit_la: 'Mt 25, 6' }]
      });
      const clareOfferingOptionMap = {
        kr: [[{ text: '주님, 복된 동정녀 클라라를 기리는 저희가 놀라우신 주님을 찬양하며 그의 공로를 기꺼워하셨듯이 저희가 바치는 제사도 기쁘게 받아 주소서.' }]],
        en: [[{ text: 'As we proclaim your wonders, O Lord, in the Virgin Clare, we humbly implore that, as her merits are pleasing to you, so, too, our dutiful service may find favor in your sight.' }]],
        la: [[{ text: 'In beáta vírgine Clara te, Dómine, mirábilem prædicántes, maiestátem tuam supplíciter exorámus, ut, sicut eius tibi grata sunt mérita, sic nostræ servitútis accépta reddántur offícia.' }]]
      };
      const clareOfferingAlignment = buildFallbackVariantAlignment('prayer_offerings', clareOfferingOptionMap, {});
      const vietnameseEnglishPsalmOptionMap = {
        vn: [[{ text: 'Các lời sấm của Chúa ngọt ngào trong cổ họng con là dường nào.' }]],
        en: [[{ text: 'How sweet to my taste is your promise!' }]]
      };
      const vietnameseEnglishPsalmAlignment = buildFallbackVariantAlignment('psalm', vietnameseEnglishPsalmOptionMap, {
        optionCits_vn: [{ cit_vn: 'Tv 118,14.24.72.103.111.131' }],
        optionCits_en: [{ cit_en: 'Psalm 119:14,24,72,103,111,131' }]
      });
      const incompleteAlignment = normalizeVariantAlignmentGroups(multilingualEntranceOptionMap, [{ kr: 0, en: 0, la: 0 }]);
      const propagatedKindVariants = {
        A: { lines: [optionBodyLine('고유 한국어 입당송', 'Ca nhập lễ riêng')], __dailyOptionKind: 'proper', __dailySourceIndexes: { kr: 0, vn: 0 } },
        B: { lines: [optionBodyLine('메타데이터가 빠진 한국어 입당송')], __dailyOptionKind: '', __dailySourceIndexes: { kr: 1 } },
        C: { lines: [optionBodyLine('', 'Ca nhập lễ riêng thứ hai')], __dailyOptionKind: 'proper', __dailySourceIndexes: { vn: 1 } },
        D: { lines: [optionBodyLine('', 'Ca nhập lễ chung')], __dailyOptionKind: 'common', __dailySourceIndexes: { vn: 2 } }
      };
      inferDailyVariantKinds(propagatedKindVariants, 'entrance', new Date(2026, 7, 11));
      applyDailyKindedVariantLabels(propagatedKindVariants, 'entrance');
      const implicitFixedProperVariants = {
        A: { lines: [optionBodyLine('하노이 한국어 입당송 하나')], __dailyOptionKind: '', __dailySourceIndexes: { kr: 0 } },
        B: { lines: [optionBodyLine('하노이 한국어 입당송 둘')], __dailyOptionKind: '', __dailySourceIndexes: { kr: 1 } },
        C: { lines: [optionBodyLine('', 'Ca nhập lễ Hà Nội')], __dailyOptionKind: '', __dailySourceIndexes: { vn: 0 } }
      };
      inferDailyVariantKinds(implicitFixedProperVariants, 'entrance', new Date(2026, 7, 11));
      applyDailyKindedVariantLabels(implicitFixedProperVariants, 'entrance');
      const ordinaryUnknownVariant = {
        A: { lines: [optionBodyLine('연중 평일 입당송')], __dailyOptionKind: '', __dailySourceIndexes: { kr: 0 } }
      };
      inferDailyVariantKinds(ordinaryUnknownVariant, 'entrance', new Date(2026, 7, 12));
      const descriptiveChoiceVariants = {
        A: { lines: [optionBodyLine('고유 독서 첫째 본문', 'Bài đọc riêng thứ nhất')], __dailyOptionKind: 'proper', __dailySourceIndexes: { kr: 0, vn: 0 } },
        B: { lines: [optionBodyLine('고유 독서 둘째 본문', 'Bài đọc riêng thứ hai')], __dailyOptionKind: 'proper', __dailySourceIndexes: { kr: 1, vn: 1 } },
        C: { lines: [optionBodyLine('공통 한국어 독서 첫째 본문')], __dailyOptionKind: 'common', __dailySourceIndexes: { kr: 2 } },
        D: { lines: [optionBodyLine('공통 한국어 독서 둘째 본문')], __dailyOptionKind: 'common', __dailySourceIndexes: { kr: 3 } },
        E: { lines: [optionBodyLine('', 'Bài đọc chung tiếng Việt')], __dailyOptionKind: 'common', __dailySourceIndexes: { vn: 2 } }
      };
      applyDailyKindedVariantLabels(descriptiveChoiceVariants, 'reading1');
      const readingLengthVariants = {
        A: {
          lines: [optionBodyLine(
            '처음 말씀 하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열 마지막 말씀',
            'Khởi đầu lời một hai ba bốn năm sáu bảy tám chín mười lời cuối cùng'
          )],
          __dailyOptionKind: 'proper',
          __dailySourceIndexes: { kr: 0, vn: 0 }
        },
        B: {
          lines: [optionBodyLine('처음 말씀 하나 둘 마지막 말씀', 'Khởi đầu lời một hai lời cuối cùng')],
          __dailyOptionKind: 'proper',
          __dailySourceIndexes: { kr: 1, vn: 1 }
        },
        C: {
          lines: [optionBodyLine('공통 시작 하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 공통 마침')],
          __dailyOptionKind: 'common',
          __dailySourceIndexes: { kr: 2 }
        },
        D: {
          lines: [optionBodyLine('공통 시작 하나 둘 공통 마침')],
          __dailyOptionKind: 'common',
          __dailySourceIndexes: { kr: 3 }
        }
      };
      applyDailyLengthVariantLabels(readingLengthVariants, 'reading1');
      applyDailyKindedVariantLabels(readingLengthVariants, 'reading1');
      const gospelLengthVariants = {
        A: JSON.parse(JSON.stringify(readingLengthVariants.A)),
        B: JSON.parse(JSON.stringify(readingLengthVariants.B))
      };
      delete gospelLengthVariants.A.__dailyLengthKind;
      delete gospelLengthVariants.B.__dailyLengthKind;
      applyDailyLengthVariantLabels(gospelLengthVariants, 'gospel');
      applyDailyKindedVariantLabels(gospelLengthVariants, 'gospel');
      const provisionalAlignmentFixture = {
        entrance: {
          kr_lines: [[{ text: '한국어 미확인 입당송 하나' }], [{ text: '한국어 미확인 입당송 둘' }]].flatMap((option, index) =>
            index ? [{ text: '또는:' }, ...option] : option
          ),
          vn_lines: [[{ text: 'Ca nhập lễ chưa xác định một' }], [{ text: 'Ca nhập lễ chưa xác định hai' }]].flatMap((option, index) =>
            index ? [{ text: 'Hoặc:' }, ...option] : option
          )
        },
        communion: {
          kr_lines: [{ text: '서로 다른 인용문의 한국어 영성체송' }],
          vn_lines: [{ text: 'Ca hiệp lễ có trích dẫn khác' }],
          optionCits_kr: [{ cit_kr: '마태 5,3' }],
          optionCits_vn: [{ cit_vn: 'Ga 6,52' }]
        }
      };
      applyCachedVariantAlignments(provisionalAlignmentFixture, new Date(2040, 0, 17));
      const ktcgVerseNumberFixture = ktcgkpvReadingSection([{
        INDEXING: 'Ed 2,8 - 3,4',
        CONTENT: '<p><sup>2</sup> Đức Chúa phán với tôi.</p><p><sup>3</sup> Hỡi con người, hãy ăn cuộn sách này.</p>'
      }], { stripVerseNumbers: true });
      const hanoiSingleCommunionFixture = {
        data: {
          communion: {
            lines: [parsedLine('', 'Ca hiệp lễ duy nhất từ nguồn Hà Nội.')]
          }
        }
      };
      applyKtcgkpvCitationToParsed(
        hanoiSingleCommunionFixture,
        'communion',
        [{ cit_vn: 'Mt 25,6' }, { cit_vn: 'Tv 26,4' }],
        [
          { cit_vn: 'Mt 25,6', text: 'Kìa Tân Lang đã tới.' },
          { cit_vn: 'Tv 26,4', text: 'Một điều tôi kiếm tôi xin.' }
        ]
      );
      const choiceRuleFixture = {
        aug11Kinds: aug11Sections.entrance.optionKinds,
        aug11Labels: aug11Sections.entrance.optionLabels,
        aug11SemanticKeys: {
          kr: aug11EntranceOptions.kr.map(option => variantSemanticKey('entrance', variantOptionMeaningText('entrance', option))),
          vn: aug11EntranceOptions.vn.map(option => variantSemanticKey('entrance', variantOptionMeaningText('entrance', option)))
        },
        aug11Alignment,
        unsafeAiAlignment,
        aug12EntranceCount: splitParsedAlternatives(aug12Sections.entrance.lines).length,
        aug12HasRawAlternative: aug12Sections.entrance.lines.some(line => /Hoặc\s*:/i.test(line.text || '')),
        aug12Kinds: aug12Sections.entrance.optionKinds,
        adjacentVigilChoiceTitles: adjacentVigilChoices.map(ktcgkpvChoiceTitle),
        ordinaryWeekdayProperReadingKind: ktcgkpvChoiceKind(aug12OptionalChoice, 'reading1', new Date(2026, 7, 12)),
        fixedMemorialProperReadingKind: ktcgkpvChoiceKind(aug11ClareChoice, 'reading1', new Date(2026, 7, 11)),
        ktcgVerseNumberText: ktcgVerseNumberFixture.text,
        hanoiSingleCommunionCitationCount: Array.isArray(hanoiSingleCommunionFixture.data.communion.optionCits)
          ? hanoiSingleCommunionFixture.data.communion.optionCits.length
          : 0,
        provisionalEntranceAlignment: provisionalAlignmentFixture.entrance.variantAlignment,
        citedSingleConflictAlignment: provisionalAlignmentFixture.communion.variantAlignment,
        labels: {
          commonEntrance: dailyVariantLabelFromSourceMetadata({ optionKinds_kr: ['common'] }, null, 0, null, 'entrance'),
          properPsalm: dailyVariantLabelFromSourceMetadata({ optionKinds_vn: ['proper'] }, null, 0, null, 'psalm'),
          commonCommunion: dailyVariantLabelFromSourceMetadata({ optionKinds_en: ['common'] }, null, 0, null, 'communion'),
          preservedProperEntrance: kindedEntranceVariants.A.label
        },
        descriptiveChoiceLabels: {
          kr: Object.values(descriptiveChoiceVariants).map(variant => variant.label.kr),
          vn: Object.values(descriptiveChoiceVariants).map(variant => variant.label.vn)
        },
        inferredKindFixture: {
          propagatedKinds: Object.values(propagatedKindVariants).map(variant => variant.__dailyOptionKind),
          propagatedLabels: Object.values(propagatedKindVariants).map(variant => variant.label.kr),
          fixedKinds: Object.values(implicitFixedProperVariants).map(variant => variant.__dailyOptionKind),
          fixedLabels: Object.values(implicitFixedProperVariants).map(variant => variant.label.kr),
          ordinaryKind: ordinaryUnknownVariant.A.__dailyOptionKind
        },
        multilingualAlignmentFixture: {
          entrance: multilingualEntranceAlignment,
          citationPriority: citationPriorityAlignment,
          clareOffering: clareOfferingAlignment,
          vietnameseEnglishPsalm: vietnameseEnglishPsalmAlignment,
          incompleteNeedsAi: variantAlignmentNeedsSemanticCompletion(incompleteAlignment),
          fallbackNeedsAi: variantAlignmentNeedsSemanticCompletion(multilingualEntranceAlignment),
          combinedNeedsAi: variantAlignmentNeedsSemanticCompletion(completedMultilingualEntranceAlignment),
          japaneseMatthewStart: citationStartsForCompare('マタイ18・1-5、10、12-14'),
          koreanMatthewStart: citationStartsForCompare('마태 18,1-5.10.12-14'),
          japaneseEzekielStart: citationStartsForCompare('エゼキエル2・8-3・4'),
          koreanEzekielStart: citationStartsForCompare('에제 2,8─3,4'),
          englishPsalmStart: citationStartsForCompare('Psalm 119:14, 24, 72, 103, 111, 131'),
          koreanPsalmStarts: citationStartsForCompare('시편 119(118),14.24.72.103.111.131'),
          vietnamesePsalmStart: citationStartsForCompare('Tv 118,14.24.72.103.111.131'),
          latinPsalmStart: citationStartsForCompare('Ps 26,4'),
          koreanPsalm27Start: citationStartsForCompare('시편 27(26),4'),
          adjacentEnglishPsalmsDiffer: !citationStartsForCompare('Psalm 118:14').some(start =>
            citationStartsForCompare('Psalm 119:14').includes(start)),
          latinLongVirginAntiphonKey: variantSemanticKey(
            'communion',
            'Quinque prudentes virgines acceperunt oleum in vasis suis cum lampadibus. Media autem nocte clamor factus est: Ecce sponsus venit.'
          )
        },
        readingLengthLabels: Object.values(readingLengthVariants).map(variant => variant.label.kr),
        readingLengthKinds: Object.values(readingLengthVariants).map(variant => variant.__dailyLengthKind),
        gospelLengthLabels: Object.values(gospelLengthVariants).map(variant => variant.label.kr),
        gospelLengthKinds: Object.values(gospelLengthVariants).map(variant => variant.__dailyLengthKind)
      };
      const diocesanPrayerSourceFixture = `<p>08/08/2026 BÀI ĐỌC TRONG THÁNH LỄ Thứ bảy tuần 18 THƯỜNG NIÊN Ca nhập lễ Ca thường. Lời nguyện nhập lễ Lạy Chúa, lời nguyện ngày thường. Chúng con cầu xin… Lời nguyện tiến lễ Lạy Chúa, lễ vật ngày thường. Chúng con cầu xin… Ca hiệp lễ Ca thường. Lời nguyện hiệp lễ Lạy Chúa, hiệp lễ ngày thường. Chúng con cầu xin… BÀI ĐỌC TRONG THÁNH LỄ Thánh Đa Minh, linh mục Ca nhập lễ Ca riêng. Lời nguyện nhập lễ Lạy Thiên Chúa toàn năng Chúa đã cho xuất hiện trong Hội Thánh một Tông Đồ nhiệt tâm truyền giảng chân lý là thánh Đa-minh. Chúng con cầu xin… Lời nguyện tiến lễ Lạy Chúa, vì lời chuyển cầu của thánh Đa-minh, xin nâng đỡ những người đang chiến đấu bảo vệ đức tin. Chúng con cầu xin… Ca hiệp lễ Ca riêng. Lời nguyện hiệp lễ Lạy Thiên Chúa toàn năng hằng hữu, nhân ngày mừng lễ thánh Đa-minh, xin cho Hội Thánh được thánh nhân cầu thay nguyện giúp. Chúng con cầu xin…</p>`;
      const diocesanPrayerBlocks = vietnameseKtcgPrayerMassBlocks(diocesanPrayerSourceFixture);
      const diocesanPrayerData = parseVietnameseKtcgDiocesanPrayers(
        diocesanPrayerSourceFixture,
        new Date(2026, 7, 8),
        'Thánh Đa-minh, Linh mục'
      );
      const diocesanPrayerFixture = {
        blockCount: diocesanPrayerBlocks.length,
        collect: diocesanPrayerData.collect && diocesanPrayerData.collect.text || '',
        offerings: diocesanPrayerData.prayer_offerings && diocesanPrayerData.prayer_offerings.text || '',
        after: diocesanPrayerData.prayer_after && diocesanPrayerData.prayer_after.text || ''
      };
      const aug9PrayerSourceFixture = `<p>09/08/2026 Lời nguyện nhập lễ Lạy Thiên Chúa toàn năng hằng hữu, chúng con đã được phúc gọi Chúa là Cha; xin cho chúng con ngày càng thêm lòng hiếu thảo, hầu đáng được hưởng gia nghiệp Chúa hứa ban. Chúng con cầu xin… Bài Đọc I: 1 V 19,9a.11-13a Bài trích sách các Vua quyển thứ nhất. Đáp Ca: Tv 84 Phúc Âm: Mt 14,22-33 Lời nguyện tiến lễ Lạy Chúa, xin chấp nhận lễ vật Hội Thánh dâng lên. Chúng con cầu xin nhờ Đức Ki-tô, Chúa chúng con. Ca hiệp lễ Ca hiệp lễ. Lời nguyện hiệp lễ Lạy Chúa, xin cho bí tích này cứu độ chúng con. Chúng con cầu xin nhờ Đức Ki-tô, Chúa chúng con.</p>`;
      const aug9PrayerData = parseVietnameseKtcgDiocesanPrayers(
        aug9PrayerSourceFixture,
        new Date(2026, 7, 9),
        'Chúa Nhật XIX Thường Niên - Năm A'
      );
      const aug9PrayerFixture = {
        collect: aug9PrayerData.collect && aug9PrayerData.collect.text || '',
        offerings: aug9PrayerData.prayer_offerings && aug9PrayerData.prayer_offerings.text || '',
        after: aug9PrayerData.prayer_after && aug9PrayerData.prayer_after.text || ''
      };
      const aug7OptionMap = { kr: [[{ text: '나훔' }]], vn: [[{ text: '나훔' }], [{ text: '지혜' }], [{ text: '집회' }]] };
      const aug8OptionMap = {
        kr: [[{ text: '하바쿡' }], [{ text: '코린토' }]],
        vn: [[{ text: '하바쿡' }], [{ text: '지혜' }], [{ text: '코린토' }]]
      };
      const citationAlignmentFixture = {
        aug7: buildStrictReadingCitationAlignment('reading1', aug7OptionMap, {
          optionCits_kr: [{ cit_kr: '나훔 2,1.3; 3,1-3.6-7' }],
          optionCits_vn: [{ cit_vn: 'Nk 2,1.3 ; 3,1-3.6-7' }, { cit_vn: 'Kn 3,1-9' }, { cit_vn: 'Hc 2,7-13' }]
        }),
        aug8: buildStrictReadingCitationAlignment('reading1', aug8OptionMap, {
          optionCits_kr: [{ cit_kr: '하바쿡 1,12-2,4' }, { cit_kr: '1코린 2,1-10ㄱ' }],
          optionCits_vn: [{ cit_vn: 'Kb 1,12 - 2,4' }, { cit_vn: 'Kn 7,7-10' }, { cit_vn: '1 Cr 2,1-10a' }]
        })
      };
      const koreanProperSource = '<p>또는, 기념일 독서(1코린 2,1-10ㄱ)와 복음(루카 9,57-62)을 봉독할 수 있다.</p>';
      const koreanBibleMarkdown = `1\n첫째 절입니다.\n2\n둘째 절입니다.\n10\n열째 절의 첫 문장입니다. 열째 절의 둘째 문장입니다.`;
      const koreanProperFixture = {
        references: koreanProperReadingReferencePairs(koreanProperSource),
        descriptor: koreanBibleCitationDescriptor('1코린 2,1-10ㄱ'),
        verses: parseKoreanBibleChapterVerses(koreanBibleMarkdown),
        habakkuk: parseKoreanReadingSection([
          '“의인은 성실함으로 산다.”',
          '▥ 하바쿡 예언서의 말씀입니다.',
          '1,12─2,4',
          '12 주님, 당신은 옛날부터 불멸하시는 저의 하느님이 아니십니까?'
        ], false),
        strictHabakkukCitation: strictLooksLikeCitation('1,12─2,4', 'KR'),
        attachedVerseBody: strictStripArabicVerseNumbers('형제 여러분, 6적게 뿌리는 이는 적게 거두어들이고', '9,6ㄴ-10'),
        spacedVerseBody: strictStripArabicVerseNumbers('7 저마다 마음에 작정한 대로 해야지')
      };
      const savedLiturgyInfoForCycle = state.liturgyInfo;
      state.liturgyInfo = { meta: { day: 5, sundayCycle: 'A' } };
      const weekdayCycleTitle = formatDisplayLiturgyTitle('VN', 'Thứ Sáu Tuần XVII - Mùa Thường Niên');
      state.liturgyInfo = { meta: { day: 0, sundayCycle: 'A' } };
      const sundayCycleTitle = formatDisplayLiturgyTitle('VN', 'Chúa Nhật Tuần XVII - Mùa Thường Niên');
      state.liturgyInfo = savedLiturgyInfoForCycle;
      const mergedVietnameseTitle = cleanLiturgyTitle(
        'Thánh I-nha-xi-ô Lôi-ô-la (Loyola), Linh mục.– Thánh Phê-rô Đoàn Công Quý, Linh mục, Tử đạo.'
      );
      const prayerBoundarySource = `Title: Lời Chúa THỨ SÁU TUẦN 17 THƯỜNG NIÊN
URL Source: https://gpbanmethuot.net/loi-chua-moi-ngay/example.html
Markdown Content:
31/07/2026
BÀI ĐỌC TRONG THÁNH LỄ
Thánh Ignatiô Loyôla, linh mục
Lời nguyện nhập lễ
Lạy Chúa, xin nhận lời nguyện nhập lễ đầy đủ của chúng con. Chúng con cầu xin…
Lời nguyện tiến lễ
Lạy Chúa, xin nhận lời nguyện tiến lễ đầy đủ của chúng con. Chúng con cầu xin…
Lời nguyện hiệp lễ
Lạy Chúa, xin nhận lời nguyện hiệp lễ đầy đủ của chúng con. Chúng con cầu xin…
Ghi nhận lịch sử – phụng vụ
Nội dung lịch sử không thuộc lời nguyện.`;
      const prayerBoundaryFixture = parseVietnameseKtcgPrayerBlock({
        lines: strictSourceLines(prayerBoundarySource)
      }, new Date(2026, 6, 31));

      const savedCalendarAuditState = {
        currentLoc: state.currentLoc,
        targetLang: state.targetLang,
        liturgyInfo: state.liturgyInfo,
        isSunday: state.isSunday
      };
      const calendarAudit = {
        daysChecked: 0,
        missingNames: [],
        badColors: [],
        fixedEntriesMissingNames: [],
        transfersChecked: 0,
        transferFailures: []
      };
      const currentLanguages = ['KR', 'VN', 'EN', 'JP', 'LA'];
      const validColors = new Set(Object.values(liturgyColorMap));
      for (const profile of currentLanguages) {
        state.currentLoc = profile;
        for (let year = 2026; year <= 2040; year += 1) {
          for (let date = new Date(year, 0, 1); date.getFullYear() === year; date = addDays(date, 1)) {
            const info = buildGeneratedLiturgyInfoV15(date);
            calendarAudit.daysChecked += 1;
            const missing = currentLanguages.filter(lang => !String(info.names && info.names[lang] || '').trim());
            if (missing.length && calendarAudit.missingNames.length < 10) {
              calendarAudit.missingNames.push({ profile, date: formatDateIso(date), missing });
            }
            if (!validColors.has(info.color) && calendarAudit.badColors.length < 10) {
              calendarAudit.badColors.push({ profile, date: formatDateIso(date), color: info.color });
            }
          }
        }
      }
      Object.entries(fixedSaintsCalendar).forEach(([dateKey, entry]) => {
        const missing = currentLanguages.filter(lang => !String(entry.names && entry.names[lang] || '').trim());
        if (missing.length) calendarAudit.fixedEntriesMissingNames.push({ dateKey, missing });
      });
      calendarAudit.fixedEntryCount = Object.keys(fixedSaintsCalendar).length;
      state.currentLoc = 'LA';
      for (let year = 2026; year <= 2040; year += 1) {
        transferredFixedCelebrationsForYear(year).forEach(item => {
          if (calendarDateKey(item.observed) === item.key) return;
          calendarAudit.transfersChecked += 1;
          const observed = buildGeneratedLiturgyInfoV15(item.observed);
          const nominalParts = item.key.split('-').map(Number);
          const nominalDate = new Date(year, nominalParts[0] - 1, nominalParts[1]);
          const nominal = buildGeneratedLiturgyInfoV15(nominalDate);
          const expected = fixedSaintsCalendar[item.key].names.LA;
          if (observed.names.LA !== expected || nominal.names.LA === expected) {
            calendarAudit.transferFailures.push({
              year,
              key: item.key,
              observed: formatDateIso(item.observed),
              observedTitle: observed.names.LA,
              nominalTitle: nominal.names.LA,
              expected
            });
          }
        });
      }
      const calendarRuleFixtures = {};
      state.currentLoc = 'KR';
      calendarRuleFixtures.korean = {
        aug4: buildGeneratedLiturgyInfoV15(new Date(2026, 7, 4)).names,
        baptismAfterLateEpiphany: buildGeneratedLiturgyInfoV15(new Date(2029, 0, 8)).names.KR,
        maryMotherOfChurch: buildGeneratedLiturgyInfoV15(addDays(computeEasterSunday(2026), 50)).names.KR
      };
      state.currentLoc = 'LA';
      calendarRuleFixtures.latin = {
        epiphany: buildGeneratedLiturgyInfoV15(new Date(2026, 0, 6)).names.LA,
        ascension: buildGeneratedLiturgyInfoV15(addDays(computeEasterSunday(2026), 39)).names.LA,
        corpusChristi: buildGeneratedLiturgyInfoV15(addDays(computeEasterSunday(2026), 60)).names.LA
      };
      state.currentLoc = 'KR';
      calendarRuleFixtures.koreanTransferredPatroness = {
        nominal: buildGeneratedLiturgyInfoV15(new Date(2030, 11, 8)).names.KR,
        observed: buildGeneratedLiturgyInfoV15(new Date(2030, 11, 9)).names.KR
      };
      const futureProperFixtures = {};
      [
        ['FR', new Date(2026, 4, 30)],
        ['ES', new Date(2026, 6, 25)],
        ['MX', new Date(2026, 11, 12)],
        ['BR', new Date(2026, 9, 12)],
        ['ZH', new Date(2026, 6, 9)]
      ].forEach(([profile, date]) => {
        state.currentLoc = profile;
        futureProperFixtures[profile] = buildGeneratedLiturgyInfoV15(date).names[profile];
      });
      state.currentLoc = savedCalendarAuditState.currentLoc;
      state.targetLang = savedCalendarAuditState.targetLang;
      state.liturgyInfo = savedCalendarAuditState.liturgyInfo;
      state.isSunday = savedCalendarAuditState.isSunday;
      const savedCopyrightState = {
        activeTab: state.activeTab,
        currentLoc: state.currentLoc,
        targetLang: state.targetLang
      };
      state.activeTab = 'mass';
      state.currentLoc = 'KR';
      state.targetLang = 'VN';
      updateFooterCopyright();
      const vietnameseMassCopyright = document.getElementById('main-footer').textContent.trim();
      Object.assign(state, savedCopyrightState);
      updateFooterCopyright();

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
        vietnameseSourceSettingVisibility,
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
        quickMenuFooterSpacing: {
          right: Math.round(window.innerWidth - quickMenuRect.right),
          bottom: Math.round(footerRect.top - quickMenuRect.bottom),
          overlapsFooter: quickMenuRect.bottom > footerRect.top
        },
        widthLimits: {
          header: mainHeader.width,
          headerInner: mainHeaderInner.width,
          nav: mainNav.width,
          navInner: mainNavInner.width,
          navButtonWidths,
          navButtonFlexGrow,
          missal: missal.width,
          floating: floatingBanner.width,
          floatingInner: floatingInner.width,
          headerMax: getComputedStyle(document.getElementById('main-header')).maxWidth,
          headerInnerMax: getComputedStyle(document.querySelector('.header-inner')).maxWidth,
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
        vietnameseCalendarFixture: {
          parsed: properCalendarContext,
          sunday: sundayCalendarContext,
          properChoice: properSelected && properSelected.display_text,
          ordinaryChoice: ordinarySelected && ordinarySelected.display_text,
          augustFourthChoice: augustFourthSelected && augustFourthSelected.display_text,
          generatedTitle: generatedProper.names && generatedProper.names.VN,
          merged: calendarMergeFixture
        },
        prayerAfterEquivalent: localSemanticEquivalent('prayer_after', koreanPrayerAfter, vietnamesePrayerAfter),
        offeringPrayerEquivalent: localSemanticEquivalent('prayer_offerings', koreanOfferingPrayer, vietnameseOfferingPrayer),
        offertoryHeaderVietnamese: (globalThis.missaData || []).find(item => item.id === '3.1 offertory')?.header?.vn || '',
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
        startupAndSourceColors,
        floatingTranslation,
        floatingLongTitleFit,
        runtimeStatusLayout,
        completionNotice,
        whiteLiturgyContrast,
        stackedTranslationColors,
        readingChoiceFixture,
        duplicateReadingFixture,
        choiceRuleFixture,
        diocesanPrayerFixture,
        aug9PrayerFixture,
        citationAlignmentFixture,
        koreanProperFixture,
        liturgyTitleParsing: {
          weekdayCycleTitle,
          sundayCycleTitle,
          mergedVietnameseTitle
        },
        prayerBoundaryText: prayerBoundaryFixture.prayer_after?.text || '',
        calendarAudit,
        calendarRuleFixtures,
        futureProperFixtures,
        vietnameseMassCopyright,
        pairedLabels,
        appliedPairedLabels: Object.values(pairedVariants).map(variant => variant.label)
      };
    });

    await page.setViewportSize({ width: 1440, height: 900 });
    const desktopHeaderLayout = await page.evaluate(() => {
      window.scrollTo(0, 0);
      const rect = selector => document.querySelector(selector).getBoundingClientRect();
      const header = rect('#main-header');
      const headerInner = rect('.header-inner');
      const missal = rect('#missal-root');
      const floating = rect('#floating-liturgy-banner');
      const floatingInner = rect('.floating-liturgy-inner');
      return {
        headerWidth: header.width,
        headerInnerWidth: headerInner.width,
        missalWidth: missal.width,
        floatingWidth: floating.width,
        floatingInnerWidth: floatingInner.width,
        headerBackground: getComputedStyle(document.getElementById('main-header')).backgroundColor,
        floatingBackground: getComputedStyle(document.getElementById('floating-liturgy-banner')).backgroundColor
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
    assert(result.vietnameseSourceSettingVisibility.translatedVietnamese
      && result.vietnameseSourceSettingVisibility.forcedVietnameseOriginal
      && result.vietnameseSourceSettingVisibility.gpsVietnameseOriginal
      && !result.vietnameseSourceSettingVisibility.forcedNonVietnamese
      && !result.vietnameseSourceSettingVisibility.gpsNonVietnamese,
    `Vietnamese reading-source setting visibility is incorrect: ${JSON.stringify(result.vietnameseSourceSettingVisibility)}`);
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
    assert(!result.quickMenuFooterSpacing.overlapsFooter
      && result.quickMenuFooterSpacing.right === result.quickMenuFooterSpacing.bottom
      && result.quickMenuFooterSpacing.right === 8,
    `Mobile quick menu does not keep equal right/footer gaps: ${JSON.stringify(result.quickMenuFooterSpacing)}`);
    assert(result.widthLimits.headerMax === 'none'
      && result.widthLimits.headerInnerMax === '1100px'
      && result.widthLimits.navMax === 'none'
      && result.widthLimits.navInnerMax === '1100px'
      && result.widthLimits.navButtonFlexGrow.every(value => value === '0')
      && new Set(result.widthLimits.navButtonWidths.map(value => Math.round(value))).size > 1
      && result.widthLimits.floatingMax === 'none'
      && result.widthLimits.floatingInnerMax === '1100px'
      && result.widthLimits.legendMax === '1100px'
      && result.widthLimits.header >= result.widthLimits.headerInner
      && result.widthLimits.headerInner <= result.widthLimits.missal
      && result.widthLimits.navInner <= result.widthLimits.missal
      && result.widthLimits.nav >= result.widthLimits.navInner
      && result.widthLimits.floating >= result.widthLimits.floatingInner
      && result.widthLimits.floatingInner <= result.widthLimits.missal,
    `Header, content-sized nav, or full-width floating banner is invalid: ${JSON.stringify(result.widthLimits)}`);
    assert(desktopHeaderLayout.headerWidth === desktopHeaderLayout.floatingWidth
      && desktopHeaderLayout.headerWidth > desktopHeaderLayout.missalWidth
      && desktopHeaderLayout.headerInnerWidth === desktopHeaderLayout.missalWidth
      && desktopHeaderLayout.floatingInnerWidth === desktopHeaderLayout.missalWidth
      && desktopHeaderLayout.headerBackground === desktopHeaderLayout.floatingBackground,
    `Desktop main liturgy color band does not match the floating banner width: ${JSON.stringify(desktopHeaderLayout)}`);
    assert(result.ktcgFixture.bodyCount === 1
      && result.ktcgFixture.bodyText === 'Mắt tôi hãy tuôn trào suối lệ cả ngày đêm không ngớt?\\nvì trinh nữ cô gái dân tôi đã bị đánh nhừ đòn!\\nvết trọng thương hết đường cứu chữa.'.replace(/\\n/g, '\n')
      && !/[ \t\u00a0]+[,.;:!?]/.test(result.ktcgFixture.bodyText),
    `KTCG reading lines were not kept as one newline-preserving paragraph: ${JSON.stringify(result.ktcgFixture)}`);
    assert(result.vietnameseCalendarFixture.parsed.confirmed
      && result.vietnameseCalendarFixture.parsed.priority
      && result.vietnameseCalendarFixture.parsed.rankKey === 'memorial'
      && result.vietnameseCalendarFixture.parsed.title === 'Thánh Mác-ta, Ma-ri-a và La-da-rô'
      && result.vietnameseCalendarFixture.parsed.color === '#f7f8fa',
    `Vietnamese official calendar context was not parsed correctly: ${JSON.stringify(result.vietnameseCalendarFixture)}`);
    assert(result.vietnameseCalendarFixture.sunday.confirmed
      && result.vietnameseCalendarFixture.sunday.rankKey === 'sunday'
      && result.vietnameseCalendarFixture.sunday.title === 'Chúa Nhật XVIII Thường Niên - Năm A'
      && !/Ca vịnh|Không cử hành/i.test(result.vietnameseCalendarFixture.sunday.title),
    `Vietnamese Sunday metadata was mistaken for the liturgy title: ${JSON.stringify(result.vietnameseCalendarFixture.sunday)}`);
    assert(result.vietnameseCalendarFixture.properChoice === 'Các thánh Mác-ta'
      && result.vietnameseCalendarFixture.ordinaryChoice === 'Ngày thường'
      && /Vi-a-nê/.test(result.vietnameseCalendarFixture.augustFourthChoice),
    `KTCG did not follow proper/ordinary Vietnamese calendar citations: ${JSON.stringify(result.vietnameseCalendarFixture)}`);
    assert(/Mác-ta.*Ma-ri-a.*La-da-rô/.test(result.vietnameseCalendarFixture.generatedTitle)
      && !/Thường Niên/i.test(result.vietnameseCalendarFixture.generatedTitle),
    `Built-in Vietnamese liturgy title fell back to Ordinary Time: ${JSON.stringify(result.vietnameseCalendarFixture)}`);
    assert(result.vietnameseCalendarFixture.merged.title === 'Thánh Gio-an Ma-ri-a Vi-a-nê, Linh mục'
      && result.vietnameseCalendarFixture.merged.special
      && !result.vietnameseCalendarFixture.merged.confirmed
      && result.vietnameseCalendarFixture.merged.color === '#f7f8fa'
      && result.vietnameseCalendarFixture.merged.reading === 'Bài đọc riêng theo lịch phụng vụ Việt Nam.',
    `External Vietnamese metadata overwrote the internal calendar or its reading was dropped: ${JSON.stringify(result.vietnameseCalendarFixture)}`);
    assert(result.calendarAudit.daysChecked === 27395
      && result.calendarAudit.missingNames.length === 0
      && result.calendarAudit.badColors.length === 0
      && result.calendarAudit.fixedEntryCount >= 100
      && result.calendarAudit.fixedEntriesMissingNames.length === 0
      && result.calendarAudit.transfersChecked > 0
      && result.calendarAudit.transferFailures.length === 0,
    `2026-2040 internal calendar audit failed: ${JSON.stringify(result.calendarAudit)}`);
    assert(/비안네/.test(result.calendarRuleFixtures.korean.aug4.KR)
      && /Vi-a-nê/.test(result.calendarRuleFixtures.korean.aug4.VN)
      && /Vianney/.test(result.calendarRuleFixtures.korean.aug4.EN)
      && /ヴィアンネ/.test(result.calendarRuleFixtures.korean.aug4.JP)
      && /Vianney/.test(result.calendarRuleFixtures.korean.aug4.LA)
      && /주님 세례/.test(result.calendarRuleFixtures.korean.baptismAfterLateEpiphany)
      && /교회의 어머니/.test(result.calendarRuleFixtures.korean.maryMotherOfChurch),
    `Universal calendar names or movable memorials are wrong: ${JSON.stringify(result.calendarRuleFixtures.korean)}`);
    assert(result.calendarRuleFixtures.latin.epiphany === 'In Epiphania Domini'
      && result.calendarRuleFixtures.latin.ascension === 'In Ascensione Domini'
      && result.calendarRuleFixtures.latin.corpusChristi === 'Sanctissimi Corporis et Sanguinis Christi',
    `Latin General Roman Calendar observances are wrong: ${JSON.stringify(result.calendarRuleFixtures.latin)}`);
    assert(!/원죄 없이 잉태/.test(result.calendarRuleFixtures.koreanTransferredPatroness.nominal)
      && /한국 교회의 수호자.*원죄 없이 잉태/.test(result.calendarRuleFixtures.koreanTransferredPatroness.observed),
    `Korean proper solemnity was not transferred with the General Roman Calendar: ${JSON.stringify(result.calendarRuleFixtures.koreanTransferredPatroness)}`);
    assert(/Jeanne d’Arc/.test(result.futureProperFixtures.FR)
      && /Santiago/.test(result.futureProperFixtures.ES)
      && /Guadalupe/.test(result.futureProperFixtures.MX)
      && /Aparecida/.test(result.futureProperFixtures.BR)
      && /中華殉道聖人/.test(result.futureProperFixtures.ZH),
    `Future jurisdiction proper-calendar seeds are missing: ${JSON.stringify(result.futureProperFixtures)}`);
    assert(result.vietnameseMassCopyright.includes('2005 © - Hội đồng Giám mục Việt Nam')
      && !result.vietnameseMassCopyright.includes('2024 © - Hội đồng Giám mục Việt Nam'),
    `Vietnamese Mass copyright year is incorrect: ${result.vietnameseMassCopyright}`);
    assert(result.startupAndSourceColors.brandToken.toLowerCase() === '#e52020'
      && result.startupAndSourceColors.brand === 'rgb(229, 32, 32)'
      && result.startupAndSourceColors.nav !== result.startupAndSourceColors.brand
      && [
        result.startupAndSourceColors.noticeTitle,
        result.startupAndSourceColors.noticeLanguageTitle,
        result.startupAndSourceColors.noticeAccept,
        result.startupAndSourceColors.sourceTitle,
        result.startupAndSourceColors.sourceChoice
      ].every(color => color === result.startupAndSourceColors.brand),
    `Startup notice and Vietnamese source selection do not use the official-mark color: ${JSON.stringify(result.startupAndSourceColors)}`);
    assert(result.floatingTranslation.primary === '전례명 원문'
      && result.floatingTranslation.secondary === 'Translated liturgy name'
      && result.floatingTranslation.secondaryOpacity < 0.9
      && result.floatingTranslation.primaryDisplay === 'block'
      && result.floatingTranslation.secondaryDisplay === 'block'
      && result.floatingTranslation.primaryWhiteSpace === 'nowrap'
      && result.floatingTranslation.secondaryWhiteSpace === 'nowrap'
      && result.floatingTranslation.fixedRows
      && result.floatingTranslation.separatorCount === 0,
    `Floating liturgy translation is not visually secondary: ${JSON.stringify(result.floatingTranslation)}`);
    assert(result.floatingLongTitleFit.primaryAdjusted === 'true'
      && result.floatingLongTitleFit.secondaryAdjusted === 'true'
      && result.floatingLongTitleFit.primaryWhiteSpace === 'nowrap'
      && result.floatingLongTitleFit.secondaryWhiteSpace === 'nowrap'
      && result.floatingLongTitleFit.fixedRows
      && result.floatingLongTitleFit.primaryTextWidth <= result.floatingLongTitleFit.availableWidth + 1
      && result.floatingLongTitleFit.secondaryTextWidth <= result.floatingLongTitleFit.availableWidth + 1,
    `Long floating liturgy names do not fit one fixed row per language: ${JSON.stringify(result.floatingLongTitleFit)}`);
    assert(!result.runtimeStatusLayout.includesKoreanLoading
      && result.runtimeStatusLayout.includesVietnameseLoading
      && result.runtimeStatusLayout.preservedStatuses.KR === 'done'
      && result.runtimeStatusLayout.preservedStatuses.EN === 'done'
      && result.runtimeStatusLayout.preservedStatuses.VN === 'loading',
    `Loading status did not hide an already-loaded language: ${JSON.stringify(result.runtimeStatusLayout)}`);
    assert(result.completionNotice.remembered
      && result.completionNotice.shown
      && /(?:한국어 전례 불러오기 완료|Đã tải xong phụng vụ tiếng Hàn)/.test(result.completionNotice.text),
    `Background completion was not announced after source selection: ${JSON.stringify(result.completionNotice)}`);
    assert(!result.runtimeStatusLayout.statusBarsOverlap
      && !result.runtimeStatusLayout.liturgyOverlapsQuickMenu
      && !result.runtimeStatusLayout.voiceOverlapsQuickMenu
      && !result.runtimeStatusLayout.liturgyOverlapsFooter
      && !result.runtimeStatusLayout.voiceOverlapsFooter
      && Math.abs(result.runtimeStatusLayout.footerGap - 8) <= 1,
    `Mobile loading/voice status layout overlaps navigation or sits too far from the footer: ${JSON.stringify(result.runtimeStatusLayout)}`);
    assert(result.whiteLiturgyContrast.headerPrimary
      && result.whiteLiturgyContrast.headerPrimary === 'rgb(124, 91, 23)'
      && result.whiteLiturgyContrast.headerPrimary === result.whiteLiturgyContrast.floatingPrimary
      && result.whiteLiturgyContrast.headerTranslation === result.whiteLiturgyContrast.floatingTranslation
      && result.whiteLiturgyContrast.headerPrimary !== result.whiteLiturgyContrast.headerTranslation
      && result.whiteLiturgyContrast.partPrimary !== result.whiteLiturgyContrast.partTranslation
      && result.whiteLiturgyContrast.sectionPrimary !== result.whiteLiturgyContrast.sectionTranslation
      && result.whiteLiturgyContrast.sourceBody !== result.whiteLiturgyContrast.translatedBody
      && result.whiteLiturgyContrast.sectionBackground !== 'rgb(238, 238, 238)',
    `White-liturgy source and translation hierarchy is not visually distinct: ${JSON.stringify(result.whiteLiturgyContrast)}`);
    assert(result.stackedTranslationColors.every(item =>
      item.sourceTitle === item.accent
      && item.sourceCitation === item.accent
      && item.translationTitle === 'rgb(108, 117, 125)'
      && item.translationCitation === 'rgb(108, 117, 125)'
      && item.sourceTitle !== item.translationTitle
    ), `Stacked source/translation subtitles or citations use the wrong colors: ${JSON.stringify(result.stackedTranslationColors)}`);
    assert(JSON.stringify(result.readingChoiceFixture.aug7.reading1) === JSON.stringify([
      'Nk 2,1.3 ; 3,1-3.6-7', 'Kn 3,1-9', 'Hc 2,7-13'
    ]) && JSON.stringify(result.readingChoiceFixture.aug7.gospel) === JSON.stringify([
      'Mt 16,24-28', 'Mt 10,28-33', 'Lc 12,32-34'
    ]) && result.readingChoiceFixture.aug7.labels.length === 3,
    `August 7 KTCG ordinary/proper reading choices were dropped or reordered: ${JSON.stringify(result.readingChoiceFixture.aug7)}`);
    assert(result.readingChoiceFixture.aug8.primary === 'Ngày thường'
      && JSON.stringify(result.readingChoiceFixture.aug8.entrance) === JSON.stringify(['Tv 15,5-6', 'Tv 69,2.6'])
      && JSON.stringify(result.readingChoiceFixture.aug8.reading1) === JSON.stringify([
        'Kb 1,12 - 2,4', 'Kn 7,7-10', '1 Cr 2,1-10a'
      ])
      && JSON.stringify(result.readingChoiceFixture.aug8.gospel) === JSON.stringify(['Mt 17,14-20', 'Lc 9,57-62'])
      && JSON.stringify(result.readingChoiceFixture.aug8.communion) === JSON.stringify(['x. Mt 19,27-29', 'Kn 16,20'])
      && result.readingChoiceFixture.aug8.labels.length === 3,
    `August 8 KTCG memorial/general reading choices are wrong: ${JSON.stringify(result.readingChoiceFixture.aug8)}`);
    assert(JSON.stringify(result.duplicateReadingFixture.readingCitations) === JSON.stringify(['2 Cr 9,6-10'])
      && JSON.stringify(result.duplicateReadingFixture.gospelCitations) === JSON.stringify(['Ga 12,24-26'])
      && JSON.stringify(result.duplicateReadingFixture.readingKinds) === JSON.stringify(['proper'])
      && result.duplicateReadingFixture.koreanRomans === '로마 9,1-5'
      && result.duplicateReadingFixture.koreanCorinthians === '2코린 9,6ㄴ-10'
      && result.duplicateReadingFixture.commonReadingLabel.kr === '공통 독서'
      && result.duplicateReadingFixture.properGospelLabel.kr === '고유 복음',
    `Same-citation readings were split or labeled incorrectly: ${JSON.stringify(result.duplicateReadingFixture)}`);
    assert(JSON.stringify(result.choiceRuleFixture.aug11Kinds) === JSON.stringify(['proper', 'proper', 'common'])
      && JSON.stringify(result.choiceRuleFixture.aug11SemanticKeys.kr) === JSON.stringify([
        'wise_virgin_lamp_meet_christ', 'virgin_beautiful_eternal_crown'
      ])
      && JSON.stringify(result.choiceRuleFixture.aug11SemanticKeys.vn) === JSON.stringify([
        'wise_virgin_lamp_meet_christ', 'lord_portion_inheritance_cup', ''
      ])
      && result.choiceRuleFixture.aug11Alignment.some(group => group.kr === 0 && group.vn === 0)
      && !result.choiceRuleFixture.aug11Alignment.some(group => group.kr === 1 && Number.isInteger(group.vn))
      && !result.choiceRuleFixture.unsafeAiAlignment.some(group => group.kr === 1 && group.vn === 1),
    `August 11 mismatched entrance antiphons were paired: ${JSON.stringify(result.choiceRuleFixture)}`);
    assert(result.choiceRuleFixture.aug12EntranceCount === 1
      && !result.choiceRuleFixture.aug12HasRawAlternative
      && JSON.stringify(result.choiceRuleFixture.aug12Kinds) === JSON.stringify(['common'])
      && result.choiceRuleFixture.adjacentVigilChoiceTitles.length === 2
      && !result.choiceRuleFixture.adjacentVigilChoiceTitles.some(title => /15 tháng 8/i.test(title))
      && result.choiceRuleFixture.ordinaryWeekdayProperReadingKind === ''
      && result.choiceRuleFixture.fixedMemorialProperReadingKind === 'proper',
    `August 12 duplicate Hoặc or ordinary-weekday proper label remains: ${JSON.stringify(result.choiceRuleFixture)}`);
    assert(!/(?:^|\n)\s*[23]\s*(?:\n|$)/u.test(result.choiceRuleFixture.ktcgVerseNumberText)
      && !/(?:^|\n)\s*[23](?=\p{L})/u.test(result.choiceRuleFixture.ktcgVerseNumberText),
    `KTCG body verse numbers remain in reading text: ${result.choiceRuleFixture.ktcgVerseNumberText}`);
    assert(result.choiceRuleFixture.hanoiSingleCommunionCitationCount === 0,
      `Multiple KTCG citations were attached to one unmatched Hanoi option: ${result.choiceRuleFixture.hanoiSingleCommunionCitationCount}`);
    assert(result.choiceRuleFixture.provisionalEntranceAlignment.length === 4
      && result.choiceRuleFixture.provisionalEntranceAlignment.every(group =>
        Number.isInteger(group.kr) !== Number.isInteger(group.vn)
      )
      && result.choiceRuleFixture.citedSingleConflictAlignment.length === 2
      && result.choiceRuleFixture.citedSingleConflictAlignment.every(group =>
        Number.isInteger(group.kr) !== Number.isInteger(group.vn)
      ),
    `Unverified source options were position-paired before AI review: ${JSON.stringify({
      entrance: result.choiceRuleFixture.provisionalEntranceAlignment,
      communion: result.choiceRuleFixture.citedSingleConflictAlignment
    })}`);
    assert(result.choiceRuleFixture.multilingualAlignmentFixture.entrance.some(group =>
        group.kr === 0 && group.en === 0 && group.la === 0)
      && result.choiceRuleFixture.multilingualAlignmentFixture.entrance.some(group =>
        group.kr === 1 && group.en === 1 && group.la === 1)
      && result.choiceRuleFixture.multilingualAlignmentFixture.citationPriority.some(group =>
        group.kr === 0 && group.la === 0)
      && !result.choiceRuleFixture.multilingualAlignmentFixture.citationPriority.some(group =>
        group.kr === 0 && group.la === 1)
      && result.choiceRuleFixture.multilingualAlignmentFixture.clareOffering.some(group =>
        group.kr === 0 && group.en === 0 && group.la === 0)
      && result.choiceRuleFixture.multilingualAlignmentFixture.vietnameseEnglishPsalm.some(group =>
        group.vn === 0 && group.en === 0)
      && result.choiceRuleFixture.multilingualAlignmentFixture.incompleteNeedsAi
      && result.choiceRuleFixture.multilingualAlignmentFixture.fallbackNeedsAi
      && !result.choiceRuleFixture.multilingualAlignmentFixture.combinedNeedsAi
      && JSON.stringify(result.choiceRuleFixture.multilingualAlignmentFixture.japaneseMatthewStart)
        === JSON.stringify(result.choiceRuleFixture.multilingualAlignmentFixture.koreanMatthewStart)
      && JSON.stringify(result.choiceRuleFixture.multilingualAlignmentFixture.japaneseEzekielStart)
        === JSON.stringify(result.choiceRuleFixture.multilingualAlignmentFixture.koreanEzekielStart)
      && result.choiceRuleFixture.multilingualAlignmentFixture.englishPsalmStart.some(start =>
        result.choiceRuleFixture.multilingualAlignmentFixture.koreanPsalmStarts.includes(start))
      && result.choiceRuleFixture.multilingualAlignmentFixture.vietnamesePsalmStart.some(start =>
        result.choiceRuleFixture.multilingualAlignmentFixture.englishPsalmStart.includes(start))
      && result.choiceRuleFixture.multilingualAlignmentFixture.latinPsalmStart.some(start =>
        result.choiceRuleFixture.multilingualAlignmentFixture.koreanPsalm27Start.includes(start))
      && result.choiceRuleFixture.multilingualAlignmentFixture.adjacentEnglishPsalmsDiffer
      && result.choiceRuleFixture.multilingualAlignmentFixture.latinLongVirginAntiphonKey === 'wise_virgin_lamp_meet_christ',
    `Cross-language choice alignment is incomplete or citation-first: ${JSON.stringify(result.choiceRuleFixture.multilingualAlignmentFixture)}`);
    assert(result.choiceRuleFixture.labels.commonEntrance.kr === '공통 입당송'
      && result.choiceRuleFixture.labels.commonEntrance.vn === 'Ca nhập lễ chung'
      && result.choiceRuleFixture.labels.properPsalm.kr === '고유 화답송'
      && result.choiceRuleFixture.labels.properPsalm.vn === 'Đáp ca riêng'
      && result.choiceRuleFixture.labels.commonCommunion.en === 'Common Communion Antiphon'
      && result.choiceRuleFixture.labels.preservedProperEntrance.kr === '고유 입당송'
      && result.choiceRuleFixture.labels.preservedProperEntrance.vn === 'Ca nhập lễ riêng',
    `Section-specific common/proper labels were overwritten: ${JSON.stringify(result.choiceRuleFixture.labels)}`);
    assert(JSON.stringify(result.choiceRuleFixture.descriptiveChoiceLabels.kr) === JSON.stringify([
      '고유 독서 1',
      '고유 독서 2',
      '공통 한국어 독서 1',
      '공통 한국어 독서 2',
      '공통 베트남어 독서'
    ]) && JSON.stringify(result.choiceRuleFixture.descriptiveChoiceLabels.vn) === JSON.stringify([
      'Bài đọc riêng 1',
      'Bài đọc riêng 2',
      'Bài đọc chung tiếng Hàn 1',
      'Bài đọc chung tiếng Hàn 2',
      'Bài đọc chung tiếng Việt'
    ]), `Common/proper language and ordinal choice labels are incorrect: ${JSON.stringify(result.choiceRuleFixture.descriptiveChoiceLabels)}`);
    assert(JSON.stringify(result.choiceRuleFixture.inferredKindFixture.propagatedKinds) === JSON.stringify([
      'proper', 'proper', 'proper', 'common'
    ]) && JSON.stringify(result.choiceRuleFixture.inferredKindFixture.propagatedLabels) === JSON.stringify([
      '고유 입당송',
      '고유 한국어 입당송',
      '고유 베트남어 입당송',
      '공통 베트남어 입당송'
    ]) && JSON.stringify(result.choiceRuleFixture.inferredKindFixture.fixedKinds) === JSON.stringify([
      'proper', 'proper', 'proper'
    ]) && JSON.stringify(result.choiceRuleFixture.inferredKindFixture.fixedLabels) === JSON.stringify([
      '고유 한국어 입당송 1',
      '고유 한국어 입당송 2',
      '고유 베트남어 입당송'
    ]) && result.choiceRuleFixture.inferredKindFixture.ordinaryKind === '',
    `Missing common/proper metadata was inferred incorrectly: ${JSON.stringify(result.choiceRuleFixture.inferredKindFixture)}`);
    assert(JSON.stringify(result.choiceRuleFixture.readingLengthKinds) === JSON.stringify(['long', 'short', 'long', 'short'])
      && JSON.stringify(result.choiceRuleFixture.readingLengthLabels) === JSON.stringify([
        '고유 독서 (긴 독서)',
        '고유 독서 (짧은 독서)',
        '공통 한국어 독서 (긴 독서)',
        '공통 한국어 독서 (짧은 독서)'
      ])
      && JSON.stringify(result.choiceRuleFixture.gospelLengthKinds) === JSON.stringify(['long', 'short'])
      && JSON.stringify(result.choiceRuleFixture.gospelLengthLabels) === JSON.stringify([
        '고유 복음 (긴 복음)',
        '고유 복음 (짧은 복음)'
      ]), `Long/short reading or Gospel labels are incorrect: ${JSON.stringify(result.choiceRuleFixture)}`);
    assert(result.citationAlignmentFixture.aug7.length === 3
      && result.citationAlignmentFixture.aug7[0].kr === 0
      && result.citationAlignmentFixture.aug7[0].vn === 0
      && result.citationAlignmentFixture.aug7.slice(1).every(group => group.kr === null && Number.isInteger(group.vn)),
    `August 7 different readings were paired as translations: ${JSON.stringify(result.citationAlignmentFixture.aug7)}`);
    assert(result.citationAlignmentFixture.aug8.length === 3
      && result.citationAlignmentFixture.aug8[0].kr === 0
      && result.citationAlignmentFixture.aug8[0].vn === 0
      && result.citationAlignmentFixture.aug8[1].kr === 1
      && result.citationAlignmentFixture.aug8[1].vn === 2
      && result.citationAlignmentFixture.aug8[2].kr === null
      && result.citationAlignmentFixture.aug8[2].vn === 1,
    `August 8 proper/general readings were paired by position instead of citation: ${JSON.stringify(result.citationAlignmentFixture.aug8)}`);
    assert(result.diocesanPrayerFixture.blockCount === 2
      && /thánh Đa-minh/.test(result.diocesanPrayerFixture.collect)
      && /chiến đấu bảo vệ đức tin/.test(result.diocesanPrayerFixture.offerings)
      && /toàn năng hằng hữu/.test(result.diocesanPrayerFixture.after)
      && !/ngày thường/.test(result.diocesanPrayerFixture.collect),
    `August 8 Vietnamese proper prayers fell back to the Ordinary weekday block: ${JSON.stringify(result.diocesanPrayerFixture)}`);
    assert(/được phúc gọi Chúa là Cha/.test(result.aug9PrayerFixture.collect)
      && !/Bài trích|1 V 19|Mt 14/.test(result.aug9PrayerFixture.collect)
      && /chấp nhận lễ vật/.test(result.aug9PrayerFixture.offerings)
      && /bí tích này cứu độ/.test(result.aug9PrayerFixture.after),
    `August 9 Vietnamese collect crossed into the readings: ${JSON.stringify(result.aug9PrayerFixture)}`);
    assert(result.koreanProperFixture.references.length === 1
      && result.koreanProperFixture.references[0].reading === '1코린 2,1-10ㄱ'
      && result.koreanProperFixture.references[0].gospel === '루카 9,57-62'
      && result.koreanProperFixture.descriptor.urlBook === '1Cor'
      && result.koreanProperFixture.descriptor.verses.length === 10
      && result.koreanProperFixture.descriptor.verses[9].part === 'ㄱ'
      && result.koreanProperFixture.verses['10'].startsWith('열째 절의 첫 문장')
      && result.koreanProperFixture.habakkuk.cit_kr === '하바 1,12─2,4'
      && !result.koreanProperFixture.habakkuk.text.includes('\n,12─2,4')
      && result.koreanProperFixture.strictHabakkukCitation
      && result.koreanProperFixture.attachedVerseBody === '형제 여러분, 적게 뿌리는 이는 적게 거두어들이고'
      && result.koreanProperFixture.spacedVerseBody === '저마다 마음에 작정한 대로 해야지',
    `Korean memorial proper-reading references or Bible verses were not parsed: ${JSON.stringify(result.koreanProperFixture)}`);
    assert(/Năm A/.test(result.liturgyTitleParsing.weekdayCycleTitle)
      && /Năm A/.test(result.liturgyTitleParsing.sundayCycleTitle)
      && result.liturgyTitleParsing.mergedVietnameseTitle === 'Thánh I-nha-xi-ô Lôi-ô-la (Loyola), Linh mục',
    `Vietnamese liturgy title parsing or cycle labels are wrong: ${JSON.stringify(result.liturgyTitleParsing)}`);
    assert(/lời nguyện hiệp lễ đầy đủ/.test(result.prayerBoundaryText)
      && !/Nội dung lịch sử/.test(result.prayerBoundaryText),
    `Vietnamese Prayer after Communion absorbed the following article: ${result.prayerBoundaryText}`);
    assert(result.prayerAfterEquivalent, 'Today’s Korean and Vietnamese Prayer after Communion should be semantically equivalent');
    assert(result.offeringPrayerEquivalent, 'Today’s Korean and Vietnamese Prayer over the Offerings should remain one translated option');
    assert(result.offertoryHeaderVietnamese === 'Lời Nguyện trên lễ vật', `Vietnamese offertory heading still has terminal punctuation: ${result.offertoryHeaderVietnamese}`);
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
