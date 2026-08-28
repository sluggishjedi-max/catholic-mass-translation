// Order of Mass V27 application runtime. Liturgical data is loaded from country-owned modules.
    const missaDataApi = window.ordoMissaDataApi;
    let massData = missaDataApi ? missaDataApi.cloneEntries() : [];

    // 데이터 ID 앞의 번호/기호를 제거해 화면 로직이 진짜 이름표만 보도록 합니다.
    function getBaseId(id) {
        return String(id || '').replace(/^[\d.\-\s]+/, '').trim();
    }

    const UI_LANGUAGE_STORAGE_KEY = 'ordoMass:uiLanguage';
    const ANDROID_SETTINGS_STORAGE_KEY = 'ordoMass:android:settings';

    function isAndroidAppRuntime() {
        return /\bOrdoMissaeAndroid\/[\d.]+\b/i.test(String(navigator.userAgent || ''));
    }

    function readInitialAndroidSettings() {
        if (!isAndroidAppRuntime()) return null;
        try {
            const raw = localStorage.getItem(ANDROID_SETTINGS_STORAGE_KEY);
            const parsed = raw ? JSON.parse(raw) : null;
            return parsed && typeof parsed === 'object' ? parsed : null;
        } catch (error) {
            console.warn('APK 설정값을 불러오지 못했습니다.', error);
            return null;
        }
    }

    const initialAndroidSettings = readInitialAndroidSettings();
    const COUNTRY_LOCATION_CODES = Object.freeze([
        'KR', 'VN', 'US', 'IE', 'GB-NIR', 'JP', 'VA',
        'TW', 'CN', 'PH', 'ID', 'TH', 'KH', 'SG', 'MY', 'BN', 'HK', 'MO'
    ]);
    const initialAndroidLocation = initialAndroidSettings
        && COUNTRY_LOCATION_CODES.includes(initialAndroidSettings.selectedLocationCode)
        ? initialAndroidSettings.selectedLocationCode
        : 'KR';
    const initialAndroidLocationLang = {
        KR: 'KR', VN: 'VN', US: 'EN', IE: 'EN', 'GB-NIR': 'EN', JP: 'JP', VA: 'LA',
        TW: 'EN', CN: 'EN', PH: 'EN', ID: 'EN', TH: 'EN', KH: 'EN', SG: 'EN', MY: 'EN', BN: 'EN', HK: 'EN', MO: 'EN'
    }[initialAndroidLocation] || 'KR';
    const initialAndroidTarget = initialAndroidSettings
        && ['KR', 'VN', 'EN', 'JP', 'LA'].includes(initialAndroidSettings.targetLang)
        ? initialAndroidSettings.targetLang
        : 'EN';
    const initialAndroidFontSize = initialAndroidSettings
        && ['14px', '18px', '20px', '22px'].includes(initialAndroidSettings.fontSize)
        ? initialAndroidSettings.fontSize
        : '18px';

    function preferredUiLanguageFromDevice(languageList) {
        const candidates = Array.isArray(languageList)
            ? languageList
            : (Array.isArray(navigator.languages) && navigator.languages.length
                ? navigator.languages
                : [navigator.language || '']);
        const languageMap = { ko: 'KR', vi: 'VN', en: 'EN', ja: 'JP', la: 'LA' };
        for (const candidate of candidates) {
            const base = String(candidate || '').trim().toLowerCase().split(/[-_]/)[0];
            if (languageMap[base]) return languageMap[base];
        }
        return 'KR';
    }

    function initialUiLanguage() {
        try {
            const stored = localStorage.getItem(UI_LANGUAGE_STORAGE_KEY);
            if (['KR', 'VN', 'EN', 'JP', 'LA'].includes(stored)) return stored;
        } catch (error) {
            console.warn('설정 언어 저장값을 불러오지 못했습니다.', error);
        }
        return preferredUiLanguageFromDevice();
    }

    function rememberUiLanguage(languageCode) {
        try {
            localStorage.setItem(UI_LANGUAGE_STORAGE_KEY, languageCode);
        } catch (error) {
            console.warn('설정 언어를 저장하지 못했습니다.', error);
        }
    }

    let state = {
        useGps: initialAndroidSettings && typeof initialAndroidSettings.useGps === 'boolean' ? initialAndroidSettings.useGps : true,
        currentLoc: initialAndroidSettings && ['KR', 'VN', 'EN', 'JP', 'LA'].includes(initialAndroidSettings.currentLoc)
            ? initialAndroidSettings.currentLoc
            : initialAndroidLocationLang, // 좌측 (현지어)
        targetLang: initialAndroidTarget, // 우측 (번역어)
        uiLang: initialAndroidSettings && ['KR', 'VN', 'EN', 'JP', 'LA'].includes(initialAndroidSettings.uiLang)
            ? initialAndroidSettings.uiLang
            : initialUiLanguage(), // 최초에는 기기/브라우저 언어를 따르고, 이후에는 사용자의 선택을 기억합니다.
        layoutStacked: !!(initialAndroidSettings && initialAndroidSettings.layoutStacked),
        fontSize: initialAndroidFontSize,
        vnReadingSource: initialAndroidSettings && initialAndroidSettings.vnReadingSource === 'ktcg' ? 'ktcg' : 'hanoi',
        vnReadingSourceConfirmed: !!initialAndroidSettings,
        aiVoiceOn: false,
        isSunday: false,
        liturgyInfo: { krName: '로딩중...', vnName: 'Đang tải...', names: { KR: '로딩중...', VN: 'Đang tải...', EN: 'Loading...', JP: '読み込み中...', LA: 'Exspecta...' }, color: '#27ae60', dateStr: '로딩중...', meta: {} },
        options: { entrance: 'A', greeting: 'A', penitential: 'A', creed: 'A', eucharist: '2', eucharist_song: '', eucharist3_intercession: 'ordinary', dismissal: '' },
        autoEucharistSongKey: '',
        autoDismissalOptionKey: '',
        autoDailySourceVariantSelections: {},
        autoCreedOptionKey: '',
        autoCreedLocation: '',
        autoBlessingSignature: '',
        popeNames: { kr: '레오', vn: 'Lêô', en: 'Leo', jp: 'レオ', la: 'Leo' },
        popeSourceName: 'Leo XIV',
        startupConsentDeclined: false,
        activeTab: 'mass',
        churchCountry: '',
        selectedLocationCode: initialAndroidLocation,
        gpsTimeZone: '',
        gpsCoordinates: null,
        gpsDiocese: '',
        bishopContext: null,
        massScrollSnapshot: null,
        dayOffset: 0,
        liturgyNavSlot: '',
        liturgicalDateContext: null,
        dailyReadingsLoading: false,
        dailyReadingLanguageStatus: {},
        dailyReadingLanguageErrorAt: {},
        dailyReadingCompletedDuringChoice: {},
    };

    const DEFAULT_TARGET_LANG = 'EN';
    const hiddenSelectableLangs = new Set();
    const SUPPORTED_LANGS = ['KR', 'VN', 'EN', 'JP', 'LA'];
    const dailySourceCache = {};
    const APP_VERSION = 'V27-20260828-ASIA-CONFERENCE-BETA';
    const STORAGE_PREFIX = `ordoMass:${APP_VERSION}:`;
    const DATE_NAV_LIMIT_DAYS = 7;
    const DATE_NAV_LIMIT_MESSAGE = '금일 전 후 7일이 초과하는 전례는 조회할 수 없습니다';
    const DAILY_SOURCE_CACHE_TTL_MS = 26 * 60 * 60 * 1000;
    const POPE_NAME_CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;
    const VATICAN_PONTIFFS_URL = 'https://www.vatican.va/content/vatican/en/holy-father.html';
    const REMOTE_FETCH_RETRIES = 0;
    const REMOTE_FETCH_TIMEOUT_MS = 8000;
    const DAILY_SOURCE_LANGUAGE_TIMEOUT_MS = 60000;
    const KTCG_CITATION_TIMEOUT_MS = 10000;
    const liturgicalTimeZones = {
        KR: 'Asia/Seoul',
        VN: 'Asia/Ho_Chi_Minh',
        EN: 'America/New_York',
        IE: 'Europe/Dublin',
        'GB-NIR': 'Europe/London',
        TW: 'Asia/Taipei',
        CN: 'Asia/Shanghai',
        PH: 'Asia/Manila',
        ID: 'Asia/Jakarta',
        TH: 'Asia/Bangkok',
        KH: 'Asia/Phnom_Penh',
        SG: 'Asia/Singapore',
        MY: 'Asia/Kuala_Lumpur',
        BN: 'Asia/Brunei',
        HK: 'Asia/Hong_Kong',
        MO: 'Asia/Macau',
        JP: 'Asia/Tokyo',
        LA: 'Europe/Rome'
    };
    let activeMassDataLoadId = 0;

    function cloneData(value) {
        return JSON.parse(JSON.stringify(value));
    }

    function readStorageJSON(key) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : null;
        } catch (error) {
            console.warn(`localStorage 읽기 실패: ${key}`, error);
            return null;
        }
    }

    function writeStorageJSON(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.warn(`localStorage 저장 실패: ${key}`, error);
            return false;
        }
    }

    function persistAndroidAppSettings(overrides = {}) {
        if (!isAndroidAppRuntime()) return false;
        const snapshot = {
            consentAccepted: !!(initialAndroidSettings && initialAndroidSettings.consentAccepted),
            useGps: !!state.useGps,
            selectedLocationCode: state.selectedLocationCode || 'KR',
            currentLoc: state.currentLoc || 'KR',
            targetLang: state.targetLang || DEFAULT_TARGET_LANG,
            uiLang: state.uiLang || 'KR',
            layoutStacked: !!state.layoutStacked,
            fontSize: state.fontSize || '18px',
            vnReadingSource: normalizeVietnameseReadingSource(state.vnReadingSource)
        };
        Object.assign(snapshot, overrides || {});
        return writeStorageJSON(ANDROID_SETTINGS_STORAGE_KEY, snapshot);
    }

    function isFreshCacheEntry(entry, ttlMs) {
        return !!(entry && entry.cachedAt && Date.now() - entry.cachedAt < ttlMs);
    }

    function withTimeout(promise, timeoutMs, message = 'Operation timed out') {
        if (!timeoutMs || timeoutMs <= 0) return promise;
        let timer = null;
        const timeout = new Promise((_, reject) => {
            timer = setTimeout(() => reject(new Error(message)), timeoutMs);
        });
        return Promise.race([promise, timeout]).finally(() => {
            if (timer) clearTimeout(timer);
        });
    }

    function stripPapalOrdinal(name) {
        return cleanNodeText(name)
            .replace(/\b(?:Pope|Papa|Pontifex|Holy Father)\b/gi, '')
            .replace(/\s+(?:[IVXLCDM]+|\d+)(?:st|nd|rd|th|세)?\s*$/iu, '')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function popeNameLocalization(baseName) {
        const normalized = stripPapalOrdinal(baseName)
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
        const map = {
            'leo': { kr: '레오', vn: 'Lêô', en: 'Leo', jp: 'レオ', la: 'Leo' },
            'francis': { kr: '프란치스코', vn: 'Phanxicô', en: 'Francis', jp: 'フランシスコ', la: 'Franciscus' },
            'benedict': { kr: '베네딕토', vn: 'Bênêđictô', en: 'Benedict', jp: 'ベネディクト', la: 'Benedictus' },
            'john paul': { kr: '요한 바오로', vn: 'Gioan Phaolô', en: 'John Paul', jp: 'ヨハネ・パウロ', la: 'Ioannes Paulus' },
            'john': { kr: '요한', vn: 'Gioan', en: 'John', jp: 'ヨハネ', la: 'Ioannes' },
            'paul': { kr: '바오로', vn: 'Phaolô', en: 'Paul', jp: 'パウロ', la: 'Paulus' },
            'pius': { kr: '비오', vn: 'Piô', en: 'Pius', jp: 'ピオ', la: 'Pius' }
        };
        return Object.assign({ kr: baseName, vn: baseName, en: baseName, jp: baseName, la: baseName }, map[normalized] || {});
    }

    function popeNameCacheKey() {
        return `${STORAGE_PREFIX}popeNames:vatican`;
    }

    function applyPopeNameCache(entry) {
        if (!entry || !entry.names) return false;
        state.popeNames = Object.assign({}, state.popeNames || {}, entry.names);
        state.popeSourceName = entry.sourceName || state.popeSourceName || '';
        return true;
    }

    function applyCachedPopeNames() {
        const cached = readStorageJSON(popeNameCacheKey());
        return isFreshCacheEntry(cached, POPE_NAME_CACHE_TTL_MS) && applyPopeNameCache(cached);
    }

    function extractCurrentPopeNameFromVaticanPontiffs(source) {
        let current = null;
        String(source || '').split(/\r?\n/).map(cleanNodeText).forEach(line => {
            const tableMatch = line.match(/^\|\s*(\d{1,3})\s*\|\s*(?:\[([^\]]+)\][^|]*|([^|]+?))\s*\|/u);
            const textMatch = line.match(/^\s*(\d{1,3})\s+([A-Z][A-Za-z]+(?:\s+(?:[A-Z][A-Za-z]+|[IVXLCDM]+))*)\s+(?:\d|[a-z]+\.)/iu);
            const listMatch = line.match(/^\s*(\d{1,3})\s+\[?([A-Z][A-Za-z]+(?:\s+(?:[A-Z][A-Za-z]+|[IVXLCDM]+))*)\]?/u);
            const match = tableMatch
                ? [tableMatch[0], tableMatch[1], cleanNodeText(tableMatch[2] || tableMatch[3] || '')]
                : (textMatch || listMatch);
            if (!match) return;
            const order = Number.parseInt(match[1], 10);
            if (!Number.isFinite(order)) return;
            if (!current || order > current.order) current = { order, name: match[2] };
        });
        if (current && current.name) return current.name;
        const fallback = String(source || '').match(/\b(Leo\s+XIV|Francis|Benedict\s+XVI|John\s+Paul\s+II)\b/u);
        return fallback ? fallback[1] : '';
    }

    async function refreshPopeNamesFromVatican() {
        if (applyCachedPopeNames()) return false;
        try {
            const source = await fetchTextWithFallbacks(VATICAN_PONTIFFS_URL, { retries: 0, timeoutMs: 15000 });
            const officialName = extractCurrentPopeNameFromVaticanPontiffs(source);
            const baseName = stripPapalOrdinal(officialName);
            if (!baseName) return false;
            const names = popeNameLocalization(baseName);
            const changed = JSON.stringify(state.popeNames || {}) !== JSON.stringify(names);
            state.popeNames = names;
            state.popeSourceName = officialName || baseName;
            writeStorageJSON(popeNameCacheKey(), { cachedAt: Date.now(), sourceName: state.popeSourceName, names });
            return changed;
        } catch (error) {
            console.warn('Vatican pope-name refresh failed; keeping cached/default pope name.', error);
            const cached = readStorageJSON(popeNameCacheKey());
            return applyPopeNameCache(cached);
        }
    }

    function resetMassDataFrom(source) {
        massData.length = 0;
        (Array.isArray(source) ? source : []).forEach(item => massData.push(cloneData(item)));
        mergeLocalOnlyEucharistSongs();
        mergeLocalEucharist3Intercession();
    }

    function mergeLocalOnlyEucharistSongs() {
        const localEucharist = missaDataApi ? missaDataApi.findEucharisticSongEntry() : null;
        const activeEucharist = massData.find(item => item && item.songs);
        if (!localEucharist || !activeEucharist) return;
        const localSongs = localEucharist.songs || {};
        if (!activeEucharist.songs || typeof activeEucharist.songs !== 'object') activeEucharist.songs = {};
        Object.keys(localSongs).forEach(key => {
            if (!activeEucharist.songs[key]) activeEucharist.songs[key] = cloneData(localSongs[key]);
        });
    }

    function findEucharist3IntercessionBlock(item) {
        const lines = item && item.forms && Array.isArray(item.forms['3']) ? item.forms['3'] : [];
        return lines.find(line => line && line.type === 'optionBlock' && line.optionKey === 'eucharist3_intercession') || null;
    }

    function findEucharist3IntercessionIndex(item) {
        const lines = item && item.forms && Array.isArray(item.forms['3']) ? item.forms['3'] : [];
        return lines.findIndex(line => line && line.type === 'optionBlock' && line.optionKey === 'eucharist3_intercession');
    }

    function mergeLocalEucharist3Intercession() {
        const localEucharist = missaDataApi ? missaDataApi.findEucharisticPrayerThreeEntry() : null;
        const activeEucharist = massData.find(item => item && item.forms && Array.isArray(item.forms['3']));
        const localBlock = findEucharist3IntercessionBlock(localEucharist);
        if (!localEucharist || !activeEucharist || !localBlock) return;

        const activeLines = activeEucharist.forms['3'];
        const activeIndex = findEucharist3IntercessionIndex(activeEucharist);
        if (activeIndex >= 0) {
            activeLines[activeIndex] = cloneData(localBlock);
            return;
        }

        const localIndex = findEucharist3IntercessionIndex(localEucharist);
        if (localIndex >= 0) activeLines.splice(localIndex, activeLines.length - localIndex, cloneData(localBlock));
    }

    function getStartupOrdinaryMassData() {
        return missaDataApi ? missaDataApi.entries : [];
    }

    function normalizeSelectableLang(langCode, fallback = DEFAULT_TARGET_LANG) {
        return hiddenSelectableLangs.has(langCode) ? fallback : (langCode || fallback);
    }

    function liturgicalTimeZoneForLang(langCode) {
        const normalized = normalizeSelectableLang(langCode || state.currentLoc || 'KR', 'KR');
        return liturgicalTimeZones[normalized] || liturgicalTimeZones.KR;
    }

    function zonedDateParts(date, timeZone) {
        try {
            const parts = new Intl.DateTimeFormat('en-US', {
                timeZone,
                year: 'numeric', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
            }).formatToParts(date).reduce((map, part) => {
                if (part.type !== 'literal') map[part.type] = Number(part.value);
                return map;
            }, {});
            return parts;
        } catch (error) {
            return {
                year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate(),
                hour: date.getHours(), minute: date.getMinutes()
            };
        }
    }

    function dateFromZonedParts(parts) {
        return new Date(parts.year, parts.month - 1, parts.day, parts.hour || 0, parts.minute || 0, 0);
    }

    function getTargetDate(now = new Date()) {
        const leftTimeZone = liturgicalTimeZoneForLang(state.currentLoc || 'KR');
        const parts = zonedDateParts(now, leftTimeZone);
        let d = dateFromZonedParts(parts);
        const easter = computeEasterSunday(d.getFullYear());
        const holySaturday = addDays(easter, -1);
        const christmasEve = d.getMonth() === 11 && d.getDate() === 24;
        if (d.getDay() === 6 && (parts.hour || 0) >= 16 && !sameDay(d, holySaturday) && !christmasEve) {
            d.setDate(d.getDate() + 1);
        }
        return d;
    }

    function computeEasterSunday(year) {
        const a = year % 19;
        const b = Math.floor(year / 100);
        const c = year % 100;
        const d = Math.floor(b / 4);
        const e = b % 4;
        const f = Math.floor((b + 8) / 25);
        const g = Math.floor((b - f + 1) / 3);
        const h = (19 * a + b - d - g + 15) % 30;
        const i = Math.floor(c / 4);
        const k = c % 4;
        const l = (32 + 2 * e + 2 * i - h - k) % 7;
        const m = Math.floor((a + 11 * h + 22 * l) / 451);
        const month = Math.floor((h + l - 7 * m + 114) / 31);
        const day = ((h + l - 7 * m + 114) % 31) + 1;
        return new Date(year, month - 1, day);
    }

    function isEasterOrPentecost(date) {
        const y = date.getFullYear();
        const easter = computeEasterSunday(y);
        const pentecost = new Date(easter);
        pentecost.setDate(easter.getDate() + 49);
        return (date.getFullYear() === easter.getFullYear() && date.getMonth() === easter.getMonth() && date.getDate() === easter.getDate()) ||
               (date.getFullYear() === pentecost.getFullYear() && date.getMonth() === pentecost.getMonth() && date.getDate() === pentecost.getDate());
    }

    const MS_PER_DAY = 24 * 60 * 60 * 1000;
    const liturgyColorMap = {
        green: '#27ae60',
        white: '#f7f8fa',
        gold: '#d4af37',
        red: '#c0392b',
        purple: '#8e44ad',
        rose: '#e67ab1',
        black: '#2c3e50'
    };

    const romanNumerals = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI', 'XXVII', 'XXVIII', 'XXIX', 'XXX', 'XXXI', 'XXXII', 'XXXIII', 'XXXIV'];
    const englishOrdinals = ['', 'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth', 'Eleventh', 'Twelfth', 'Thirteenth', 'Fourteenth', 'Fifteenth', 'Sixteenth', 'Seventeenth', 'Eighteenth', 'Nineteenth', 'Twentieth', 'Twenty-first', 'Twenty-second', 'Twenty-third', 'Twenty-fourth', 'Twenty-fifth', 'Twenty-sixth', 'Twenty-seventh', 'Twenty-eighth', 'Twenty-ninth', 'Thirtieth', 'Thirty-first', 'Thirty-second', 'Thirty-third', 'Thirty-fourth'];
    const weekdayNames = {
        KR: ['주일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        VN: ['Chúa Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'],
        EN: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        JP: ['主日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
        LA: ['Dominica', 'Feria secunda', 'Feria tertia', 'Feria quarta', 'Feria quinta', 'Feria sexta', 'Sabbato']
    };

    function saintEntry(color, names, meta = {}) {
        return { color, names, meta };
    }

    const immaculateHeartNames = {
        KR: '티 없이 깨끗하신 성모 성심 기념일',
        VN: 'Lễ Trái Tim Vô Nhiễm Đức Mẹ Maria',
        EN: 'The Immaculate Heart of the Blessed Virgin Mary',
        JP: '聖母マリアの汚れなき心',
        LA: 'Cordis Immaculati Beatae Mariae Virginis'
    };

    const maryMotherOfChurchNames = {
        KR: '교회의 어머니 복되신 동정 마리아 기념일',
        VN: 'Đức Trinh Nữ Maria, Mẹ Hội Thánh',
        EN: 'The Blessed Virgin Mary, Mother of the Church',
        JP: '教会の母聖マリア',
        LA: 'Beatae Mariae Virginis, Ecclesiae Matris'
    };

    // Language and calendar jurisdiction are intentionally separate. The
    // currently selectable languages use the first five profiles; the other
    // reviewed profiles are ready for the planned language expansion.
    const liturgicalCalendarProfiles = Object.freeze({
        KR: Object.freeze({ id: 'KR', countryCalendar: 'KR', epiphany: 'sunday', ascension: 'sunday', corpusChristi: 'sunday' }),
        VN: Object.freeze({ id: 'VN', countryCalendar: 'VN', epiphany: 'sunday', ascension: 'sunday', corpusChristi: 'sunday' }),
        US: Object.freeze({ id: 'US', countryCalendar: 'US', epiphany: 'sunday', ascension: 'sunday', corpusChristi: 'sunday' }),
        IE: Object.freeze({ id: 'IRELAND', countryCalendar: 'IE', epiphany: 'fixed', ascension: 'sunday', corpusChristi: 'sunday' }),
        'GB-NIR': Object.freeze({ id: 'IRELAND', countryCalendar: 'IE', epiphany: 'fixed', ascension: 'sunday', corpusChristi: 'sunday' }),
        TW: Object.freeze({ id: 'TAIWAN', countryCalendar: 'TW', languageVariant: 'ZH-TW', epiphany: 'sunday', ascension: 'sunday', corpusChristi: 'sunday' }),
        CN: Object.freeze({ id: 'CHINA', countryCalendar: 'CN', languageVariant: 'ZH-CN', epiphany: 'sunday', ascension: 'sunday', corpusChristi: 'sunday' }),
        PH: Object.freeze({ id: 'PHILIPPINES', countryCalendar: 'PH', epiphany: 'sunday', ascension: 'sunday', corpusChristi: 'sunday' }),
        ID: Object.freeze({ id: 'INDONESIA', countryCalendar: 'ID', epiphany: 'sunday', ascension: 'thursday', corpusChristi: 'sunday' }),
        TH: Object.freeze({ id: 'THAILAND', countryCalendar: 'TH', epiphany: 'sunday', ascension: 'sunday', corpusChristi: 'sunday' }),
        KH: Object.freeze({ id: 'CAMBODIA', countryCalendar: 'KH', epiphany: 'sunday', ascension: 'sunday', corpusChristi: 'sunday' }),
        SG: Object.freeze({ id: 'SINGAPORE', countryCalendar: 'SG', epiphany: 'sunday', ascension: 'thursday', corpusChristi: 'sunday' }),
        MY: Object.freeze({ id: 'MALAYSIA', countryCalendar: 'MY', epiphany: 'sunday', ascension: 'thursday', corpusChristi: 'sunday' }),
        BN: Object.freeze({ id: 'BRUNEI', countryCalendar: 'BN', epiphany: 'sunday', ascension: 'thursday', corpusChristi: 'sunday' }),
        HK: Object.freeze({ id: 'HONG_KONG', countryCalendar: 'HK', languageVariant: 'ZH-HK', epiphany: 'sunday', ascension: 'sunday', corpusChristi: 'sunday' }),
        MO: Object.freeze({ id: 'MACAO', countryCalendar: 'MO', languageVariant: 'ZH-MO', epiphany: 'sunday', ascension: 'sunday', corpusChristi: 'sunday' }),
        EN: Object.freeze({ id: 'US', countryCalendar: 'US', epiphany: 'sunday', ascension: 'sunday', corpusChristi: 'sunday' }),
        JP: Object.freeze({ id: 'JP', countryCalendar: 'JP', epiphany: 'sunday', ascension: 'sunday', corpusChristi: 'sunday' }),
        LA: Object.freeze({ id: 'GENERAL_ROMAN', countryCalendar: 'LA', epiphany: 'fixed', ascension: 'thursday', corpusChristi: 'thursday' }),
        FR: Object.freeze({ id: 'FR', countryCalendar: 'FR', epiphany: 'sunday', ascension: 'thursday', corpusChristi: 'sunday' }),
        ES: Object.freeze({ id: 'ES', countryCalendar: 'ES', epiphany: 'fixed', ascension: 'sunday', corpusChristi: 'sunday' }),
        PT: Object.freeze({ id: 'PT', countryCalendar: 'PT', epiphany: 'sunday', ascension: 'sunday', corpusChristi: 'thursday' }),
        MX: Object.freeze({ id: 'MX', countryCalendar: 'MX', epiphany: 'sunday', ascension: 'sunday', corpusChristi: 'thursday' }),
        BR: Object.freeze({ id: 'BR', countryCalendar: 'BR', epiphany: 'sunday', ascension: 'sunday', corpusChristi: 'thursday' }),
        ZH: Object.freeze({ id: 'ZH', countryCalendar: 'ZH', epiphany: 'sunday', ascension: 'sunday', corpusChristi: 'sunday' })
    });

    function getLiturgicalCalendarProfile(langOrJurisdiction = state.selectedLocationCode || state.currentLoc) {
        let key = String(langOrJurisdiction || 'LA').trim().toUpperCase();
        if (key === 'EN' && locationMeta && locationMeta[state.selectedLocationCode]
            && locationMeta[state.selectedLocationCode].lang === 'EN') key = state.selectedLocationCode;
        return liturgicalCalendarProfiles[key] || liturgicalCalendarProfiles.LA;
    }

    const fixedSaintsCalendar = {
        '01-01': saintEntry('white', { KR: '천주의 성모 마리아 대축일', VN: 'Lễ Đức Maria, Mẹ Thiên Chúa', EN: 'Solemnity of Mary, the Holy Mother of God', JP: '神の母聖マリア', LA: 'In sollemnitate Sanctae Dei Genetricis Mariae' }, { rank: 'solemnity' }),
        '01-02': saintEntry('white', { KR: '성 대 바실리오와 나지안조의 성 그레고리오 주교 학자 기념일', VN: 'Thánh Basiliô Cả và Thánh Grêgôriô Nazianzênô, Giám mục, Tiến sĩ Hội Thánh', EN: 'Saints Basil the Great and Gregory Nazianzen, Bishops and Doctors of the Church', JP: '聖大バジリオ・聖グレゴリオ（ナジアンゾスの）司教教会博士', LA: 'Sanctorum Basilii Magni et Gregorii Nazianzeni' }, { rank: 'memorial' }),
        '01-17': saintEntry('white', { KR: '성 안토니오 아빠스 기념일', VN: 'Thánh Antôn, Viện phụ', EN: 'Saint Anthony, Abbot', JP: '聖アントニオ修道院長', LA: 'Sancti Antonii, abbatis' }, { rank: 'memorial' }),
        '01-21': saintEntry('red', { KR: '성녀 아녜스 동정 순교자 기념일', VN: 'Thánh Anê, Trinh nữ, Tử đạo', EN: 'Saint Agnes, Virgin and Martyr', JP: '聖アグネスおとめ殉教者', LA: 'Sanctae Agnetis, virginis et martyris' }, { rank: 'memorial' }),
        '01-24': saintEntry('white', { KR: '성 프란치스코 살레시오 주교 학자 기념일', VN: 'Thánh Phanxicô Salêsiô, Giám mục, Tiến sĩ Hội Thánh', EN: 'Saint Francis de Sales, Bishop and Doctor of the Church', JP: '聖フランシスコ・サレジオ司教教会博士', LA: 'Sancti Francisci de Sales' }, { rank: 'memorial' }),
        '01-25': saintEntry('white', { KR: '성 바오로 사도의 회심 축일', VN: 'Thánh Phaolô Tông đồ trở lại', EN: 'The Conversion of Saint Paul the Apostle', JP: '聖パウロの回心', LA: 'In Conversione Sancti Pauli, apostoli' }, { rank: 'feast' }),
        '01-26': saintEntry('white', { KR: '성 티모테오와 성 티토 주교 기념일', VN: 'Thánh Timôthê và Thánh Titô, Giám mục', EN: 'Saints Timothy and Titus, Bishops', JP: '聖テモテ・聖テトス司教', LA: 'Sanctorum Timothei et Titi' }, { rank: 'memorial' }),
        '01-28': saintEntry('white', { KR: '성 토마스 아퀴나스 사제 학자 기념일', VN: 'Thánh Tôma Aquinô, Linh mục, Tiến sĩ Hội Thánh', EN: 'Saint Thomas Aquinas, Priest and Doctor of the Church', JP: '聖トマス・アクィナス司祭教会博士', LA: 'Sancti Thomae de Aquino' }, { rank: 'memorial' }),
        '01-31': saintEntry('white', { KR: '성 요한 보스코 사제 기념일', VN: 'Thánh Gioan Boscô, Linh mục', EN: 'Saint John Bosco, Priest', JP: '聖ヨハネ・ボスコ司祭', LA: 'Sancti Ioannis Bosco' }, { rank: 'memorial' }),
        '02-02': saintEntry('white', { KR: '주님 봉헌 축일', VN: 'Lễ Dâng Chúa Giêsu trong Đền Thánh', EN: 'The Presentation of the Lord', JP: '主の奉献', LA: 'In Praesentatione Domini' }, { rank: 'feastOfLord' }),
        '02-05': saintEntry('red', { KR: '성녀 아가타 동정 순교자 기념일', VN: 'Thánh Agatha, Trinh nữ, Tử đạo', EN: 'Saint Agatha, Virgin and Martyr', JP: '聖アガタおとめ殉教者', LA: 'Sanctae Agathae' }, { rank: 'memorial' }),
        '02-06': saintEntry('red', { KR: '성 바오로 미키와 동료 순교자들 기념일', VN: 'Thánh Phaolô Miki và các bạn tử đạo', EN: 'Saint Paul Miki and Companions, Martyrs', JP: '聖パウロ三木と同志殉教者', LA: 'Sanctorum Pauli Miki et sociorum martyrum' }, { rank: 'memorial' }),
        '02-10': saintEntry('white', { KR: '성녀 스콜라스티카 동정 기념일', VN: 'Thánh Scholastica, Trinh nữ', EN: 'Saint Scholastica, Virgin', JP: '聖スコラスティカおとめ', LA: 'Sanctae Scholasticae' }, { rank: 'memorial' }),
        '02-14': saintEntry('white', { KR: '성 치릴로 수도자와 성 메토디오 주교 기념일', VN: 'Thánh Cyrillô, Đan sĩ, và Thánh Mêthôđiô, Giám mục', EN: 'Saints Cyril, Monk, and Methodius, Bishop', JP: '聖チリロ隠世修道者・聖メトディオ司教', LA: 'Sanctorum Cyrilli et Methodii' }, { rank: 'memorial' }),
        '02-22': saintEntry('white', { KR: '성 베드로 사도좌 축일', VN: 'Lập Tông tòa Thánh Phêrô, Tông đồ', EN: 'The Chair of Saint Peter the Apostle', JP: '聖ペトロの使徒座', LA: 'Cathedrae Sancti Petri, apostoli' }, { rank: 'feast' }),
        '02-23': saintEntry('red', { KR: '성 폴리카르포 주교 순교자 기념일', VN: 'Thánh Polycarpô, Giám mục, Tử đạo', EN: 'Saint Polycarp, Bishop and Martyr', JP: '聖ポリカルポ司教殉教者', LA: 'Sancti Polycarpi, episcopi et martyris' }, { rank: 'memorial' }),
        '03-19': saintEntry('white', { KR: '복되신 동정 마리아의 배필 성 요셉 대축일', VN: 'Lễ Thánh Giuse, Bạn Trăm Năm Đức Trinh Nữ Maria', EN: 'Solemnity of Saint Joseph, Spouse of the Blessed Virgin Mary', JP: '聖ヨセフ', LA: 'Sancti Ioseph, Sponsi Beatae Mariae Virginis' }, { rank: 'solemnity' }),
        '03-25': saintEntry('white', { KR: '주님 탄생 예고 대축일', VN: 'Lễ Truyền Tin', EN: 'The Annunciation of the Lord', JP: '神のお告げ', LA: 'In Annuntiatione Domini' }, { rank: 'solemnity' }),
        '04-07': saintEntry('white', { KR: '성 요한 밥티스타 드 라 살 사제 기념일', VN: 'Thánh Gioan Baotixita La San, Linh mục', EN: 'Saint John Baptist de La Salle, Priest', JP: '聖ヨハネ・バプティスト・ド・ラ・サール司祭', LA: 'Sancti Ioannis Baptistae de La Salle, presbyteri' }, { rank: 'memorial' }),
        '04-25': saintEntry('red', { KR: '성 마르코 복음사가 축일', VN: 'Thánh Máccô, Tác giả Tin Mừng', EN: 'Saint Mark, Evangelist', JP: '聖マルコ福音記者', LA: 'Sancti Marci, evangelistae' }, { rank: 'feast' }),
        '04-29': saintEntry('white', { KR: '시에나의 성녀 가타리나 동정 학자 기념일', VN: 'Thánh Catarina Siêna, Trinh nữ, Tiến sĩ Hội Thánh', EN: 'Saint Catherine of Siena, Virgin and Doctor of the Church', JP: '聖カタリナ（シエナの）おとめ教会博士', LA: 'Sanctae Catharinae Senensis' }, { rank: 'memorial' }),
        '05-02': saintEntry('white', { KR: '성 아타나시오 주교 학자 기념일', VN: 'Thánh Athanasiô, Giám mục, Tiến sĩ Hội Thánh', EN: 'Saint Athanasius, Bishop and Doctor of the Church', JP: '聖アタナシオ司教教会博士', LA: 'Sancti Athanasii' }, { rank: 'memorial' }),
        '05-03': saintEntry('red', { KR: '성 필립보와 성 야고보 사도 축일', VN: 'Thánh Philipphê và Thánh Giacôbê, Tông đồ', EN: 'Saints Philip and James, Apostles', JP: '聖フィリポ・聖ヤコブ使徒', LA: 'Sanctorum Philippi et Iacobi, apostolorum' }, { rank: 'feast' }),
        '05-14': saintEntry('red', { KR: '성 마티아 사도 축일', VN: 'Thánh Matthia, Tông đồ', EN: 'Saint Matthias, Apostle', JP: '聖マチア使徒', LA: 'Sancti Matthiae, apostoli' }, { rank: 'feast' }),
        '05-26': saintEntry('white', { KR: '성 필립보 네리 사제 기념일', VN: 'Thánh Philipphê Nêri, Linh mục', EN: 'Saint Philip Neri, Priest', JP: '聖フィリポ・ネリ司祭', LA: 'Sancti Philippi Neri, presbyteri' }, { rank: 'memorial' }),
        '05-31': saintEntry('white', { KR: '복되신 동정 마리아의 방문 축일', VN: 'Đức Maria thăm viếng bà Êlisabét', EN: 'The Visitation of the Blessed Virgin Mary', JP: '聖母の訪問', LA: 'Visitationis Beatae Mariae Virginis' }, { rank: 'feast' }),
        '06-01': saintEntry('red', { KR: '성 유스티노 순교자 기념일', VN: 'Thánh Justinô, Tử đạo', EN: 'Saint Justin, Martyr', JP: '聖ユスティノ殉教者', LA: 'Sancti Iustini' }, { rank: 'memorial' }),
        '06-03': saintEntry('red', { KR: '성 가롤로 르왕가와 동료 순교자들 기념일', VN: 'Thánh Carôlô Lwanga và các bạn tử đạo', EN: 'Saint Charles Lwanga and Companions, Martyrs', JP: '聖カロロ・ルワンガと同志殉教者', LA: 'Sanctorum Caroli Lwanga et sociorum' }, { rank: 'memorial' }),
        '06-05': saintEntry('red', { KR: '성 보니파시오 주교 순교자 기념일', VN: 'Thánh Bônifaciô, Giám mục, Tử đạo', EN: 'Saint Boniface, Bishop and Martyr', JP: '聖ボニファツィオ司教殉教者', LA: 'Sancti Bonifatii' }, { rank: 'memorial' }),
        '06-11': saintEntry('red', { KR: '성 바르나바 사도 기념일', VN: 'Thánh Banaba, Tông đồ', EN: 'Memorial of Saint Barnabas, Apostle', JP: '聖バルナバ使徒', LA: 'Sancti Barnabae, Apostoli' }, { rank: 'memorial' }),
        '06-13': saintEntry('white', { KR: '파도바의 성 안토니오 사제 학자 기념일', VN: 'Thánh Antôn Pađôva, Linh mục, Tiến sĩ Hội Thánh', EN: 'Saint Anthony of Padua, Priest and Doctor of the Church', JP: '聖アントニオ（パドヴァの）司祭教会博士', LA: 'Sancti Antonii de Padova' }, { rank: 'memorial' }),
        '06-21': saintEntry('white', { KR: '성 알로이시오 곤자가 수도자 기념일', VN: 'Thánh Louis Gonzaga, Tu sĩ', EN: 'Saint Aloysius Gonzaga, Religious', JP: '聖アロイジオ・ゴンザガ修道者', LA: 'Sancti Aloisii Gonzaga, religiosi' }, { rank: 'memorial' }),
        '06-24': saintEntry('white', { KR: '성 요한 세례자 탄생 대축일', VN: 'Lễ Sinh Nhật Thánh Gioan Tẩy Giả', EN: 'The Nativity of Saint John the Baptist', JP: '洗礼者聖ヨハネの誕生', LA: 'In Nativitate Sancti Ioannis Baptistae' }, { rank: 'solemnity' }),
        '06-28': saintEntry('red', { KR: '성 이레네오 주교 순교자 학자 기념일', VN: 'Thánh Irênê, Giám mục, Tử đạo, Tiến sĩ Hội Thánh', EN: 'Saint Irenaeus, Bishop, Martyr and Doctor of the Church', JP: '聖イレネオ司教殉教者教会博士', LA: 'Sancti Irenaei, episcopi, martyris et Ecclesiae doctoris' }, { rank: 'memorial' }),
        '06-29': saintEntry('red', { KR: '성 베드로와 성 바오로 사도 대축일', VN: 'Lễ Thánh Phêrô và Thánh Phaolô, Tông Đồ', EN: 'Solemnity of Saints Peter and Paul, Apostles', JP: '聖ペトロ 聖パウロ使徒', LA: 'Sanctorum Petri et Pauli, Apostolorum' }, { rank: 'solemnity' }),
        '07-03': saintEntry('red', { KR: '성 토마스 사도 축일', VN: 'Lễ Thánh Tôma, Tông Đồ', EN: 'Feast of Saint Thomas, Apostle', JP: '聖トマス使徒', LA: 'Sancti Thomae, Apostoli' }, { rank: 'feast' }),
        '07-11': saintEntry('white', { KR: '성 베네딕토 아빠스 기념일', VN: 'Thánh Bênêđictô, Viện phụ', EN: 'Saint Benedict, Abbot', JP: '聖ベネディクト修道院長', LA: 'Sancti Benedicti' }, { rank: 'memorial' }),
        '07-15': saintEntry('white', { KR: '성 보나벤투라 주교 학자 기념일', VN: 'Thánh Bônaventura, Giám mục, Tiến sĩ Hội Thánh', EN: 'Saint Bonaventure, Bishop and Doctor of the Church', JP: '聖ボナヴェントゥラ司教教会博士記念日', LA: 'Sancti Bonaventurae, episcopi et Ecclesiae doctoris' }, { rank: 'memorial' }),
        '07-22': saintEntry('white', { KR: '성녀 마리아 막달레나 축일', VN: 'Thánh Maria Mađalêna', EN: 'Saint Mary Magdalene', JP: '聖マリア（マグダラ）', LA: 'Sanctae Mariae Magdalenae' }, { rank: 'feast' }),
        '07-25': saintEntry('red', { KR: '성 야고보 사도 축일', VN: 'Thánh Giacôbê, Tông đồ', EN: 'Saint James, Apostle', JP: '聖ヤコブ使徒', LA: 'Sancti Iacobi, apostoli' }, { rank: 'feast' }),
        '07-26': saintEntry('white', { KR: '복되신 동정 마리아의 부모 성 요아킴과 성녀 안나 기념일', VN: 'Thánh Gioakim và Thánh Anna, song thân Đức Trinh Nữ Maria', EN: 'Saints Joachim and Anne, Parents of the Blessed Virgin Mary', JP: '聖マリアの両親聖ヨアキム・聖アンナ', LA: 'Sanctorum Ioachim et Annae, parentum Beatae Mariae Virginis' }, { rank: 'memorial' }),
        '07-29': saintEntry('white', { KR: '성녀 마르타와 성녀 마리아와 성 라자로 기념일', VN: 'Thánh Mác-ta, Ma-ri-a và La-da-rô', EN: 'Saints Martha, Mary and Lazarus', JP: '聖マルタ・聖マリア・聖ラザロ', LA: 'Sanctorum Marthae, Mariae et Lazari' }, { rank: 'memorial' }),
        '07-31': saintEntry('white', { KR: '성 이냐시오 데 로욜라 사제 기념일', VN: 'Thánh I-nha-xi-ô Lôi-ô-la, Linh mục', EN: 'Saint Ignatius of Loyola, Priest', JP: '聖イグナチオ（ロヨラ）司祭', LA: 'Sancti Ignatii de Loyola, presbyteri' }, { rank: 'memorial' }),
        '08-01': saintEntry('white', { KR: '성 알폰소 마리아 데 리구오리 주교 학자 기념일', VN: 'Thánh An-phong-sô Ma-ri-a Li-gô-ri, Giám mục, Tiến sĩ Hội Thánh', EN: 'Saint Alphonsus Liguori, Bishop and Doctor of the Church', JP: '聖アルフォンソ・マリア・デ・リゴリ司教教会博士', LA: 'Sancti Alfonsi Mariae de Liguori, episcopi et Ecclesiae doctoris' }, { rank: 'memorial' }),
        '08-04': saintEntry('white', { KR: '성 요한 마리아 비안네 사제 기념일', VN: 'Thánh Gio-an Ma-ri-a Vi-a-nê, Linh mục', EN: 'Saint John Vianney, Priest', JP: '聖ヨハネ・マリア・ヴィアンネ司祭', LA: 'Sancti Ioannis Mariae Vianney, presbyteri' }, { rank: 'memorial' }),
        '08-06': saintEntry('white', { KR: '주님 변모 축일', VN: 'Lễ Chúa Hiển Dung', EN: 'The Transfiguration of the Lord', JP: '主の変容', LA: 'In Transfiguratione Domini' }, { rank: 'feastOfLord' }),
        '08-08': saintEntry('white', { KR: '성 도미니코 사제 기념일', VN: 'Thánh Đa-minh, Linh mục', EN: 'Saint Dominic, Priest', JP: '聖ドミニコ司祭', LA: 'Sancti Dominici, presbyteri' }, { rank: 'memorial' }),
        '08-10': saintEntry('red', { KR: '성 라우렌시오 부제 순교자 축일', VN: 'Thánh Laurensô, Phó tế, Tử đạo', EN: 'Saint Lawrence, Deacon and Martyr', JP: '聖ラウレンチオ助祭殉教者', LA: 'Sancti Laurentii' }, { rank: 'feast' }),
        '08-11': saintEntry('white', { KR: '성녀 클라라 동정 기념일', VN: 'Thánh Clara, Trinh nữ', EN: 'Saint Clare, Virgin', JP: '聖クララおとめ', LA: 'Sanctae Clarae, virginis' }, { rank: 'memorial' }),
        '08-14': saintEntry('red', { KR: '성 막시밀리아노 마리아 콜베 사제 순교자 기념일', VN: 'Thánh Maximilianô Maria Kolbê, Linh mục, Tử đạo', EN: 'Saint Maximilian Kolbe, Priest and Martyr', JP: '聖マキシミリアノ・マリア・コルベ司祭殉教者', LA: 'Sancti Maximiliani Mariae Kolbe, presbyteri et martyris' }, { rank: 'memorial' }),
        '08-15': saintEntry('white', { KR: '성모 승천 대축일', VN: 'Lễ Đức Mẹ Hồn Xác Lên Trời', EN: 'The Assumption of the Blessed Virgin Mary', JP: '聖母の被昇天', LA: 'In Assumptione Beatae Mariae Virginis' }, { rank: 'solemnity' }),
        '08-20': saintEntry('white', { KR: '성 베르나르도 아빠스 학자 기념일', VN: 'Thánh Bênađô, Viện phụ, Tiến sĩ Hội Thánh', EN: 'Saint Bernard, Abbot and Doctor of the Church', JP: '聖ベルナルド修道院長教会博士', LA: 'Sancti Bernardi, abbatis et Ecclesiae doctoris' }, { rank: 'memorial' }),
        '08-21': saintEntry('white', { KR: '성 비오 10세 교황 기념일', VN: 'Thánh Piô X, Giáo hoàng', EN: 'Saint Pius X, Pope', JP: '聖ピオ十世教皇', LA: 'Sancti Pii X, papae' }, { rank: 'memorial' }),
        '08-22': saintEntry('white', { KR: '복되신 동정 마리아 모후 기념일', VN: 'Đức Trinh Nữ Maria Nữ Vương', EN: 'The Queenship of the Blessed Virgin Mary', JP: '天の元后聖マリア', LA: 'Beatae Mariae Virginis Reginae' }, { rank: 'memorial' }),
        '08-24': saintEntry('red', { KR: '성 바르톨로메오 사도 축일', VN: 'Thánh Batôlômêô, Tông đồ', EN: 'Saint Bartholomew, Apostle', JP: '聖バルトロマイ使徒', LA: 'Sancti Bartholomaei, apostoli' }, { rank: 'feast' }),
        '08-27': saintEntry('white', { KR: '성녀 모니카 기념일', VN: 'Thánh Mônica', EN: 'Saint Monica', JP: '聖モニカ', LA: 'Sanctae Monicae' }, { rank: 'memorial' }),
        '08-28': saintEntry('white', { KR: '성 아우구스티노 주교 학자 기념일', VN: 'Thánh Augustinô, Giám mục, Tiến sĩ Hội Thánh', EN: 'Saint Augustine, Bishop and Doctor of the Church', JP: '聖アウグスチヌス司教教会博士', LA: 'Sancti Augustini, episcopi et Ecclesiae doctoris' }, { rank: 'memorial' }),
        '08-29': saintEntry('red', { KR: '성 요한 세례자의 수난 기념일', VN: 'Thánh Gioan Tẩy Giả bị trảm quyết', EN: 'The Passion of Saint John the Baptist', JP: '洗礼者聖ヨハネの殉教', LA: 'In Passione Sancti Ioannis Baptistae' }, { rank: 'memorial' }),
        '09-03': saintEntry('white', { KR: '성 대 그레고리오 교황 학자 기념일', VN: 'Thánh Grêgôriô Cả, Giáo hoàng, Tiến sĩ Hội Thánh', EN: 'Saint Gregory the Great, Pope and Doctor of the Church', JP: '聖グレゴリオ一世教皇教会博士', LA: 'Sancti Gregorii Magni, papae et Ecclesiae doctoris' }, { rank: 'memorial' }),
        '09-08': saintEntry('white', { KR: '복되신 동정 마리아 탄생 축일', VN: 'Sinh nhật Đức Trinh Nữ Maria', EN: 'The Nativity of the Blessed Virgin Mary', JP: '聖母マリアの誕生', LA: 'In Nativitate Beatae Mariae Virginis' }, { rank: 'feast' }),
        '09-13': saintEntry('white', { KR: '성 요한 크리소스토모 주교 학자 기념일', VN: 'Thánh Gioan Kim Khẩu, Giám mục, Tiến sĩ Hội Thánh', EN: 'Saint John Chrysostom, Bishop and Doctor of the Church', JP: '聖ヨハネ・クリゾストモ司教教会博士', LA: 'Sancti Ioannis Chrysostomi, episcopi et Ecclesiae doctoris' }, { rank: 'memorial' }),
        '09-14': saintEntry('red', { KR: '성 십자가 현양 축일', VN: 'Lễ Suy Tôn Thánh Giá', EN: 'The Exaltation of the Holy Cross', JP: '十字架称賛', LA: 'In Exaltatione Sanctae Crucis' }, { rank: 'feastOfLord' }),
        '09-15': saintEntry('white', { KR: '고통의 성모 마리아 기념일', VN: 'Đức Mẹ Sầu Bi', EN: 'Our Lady of Sorrows', JP: '悲しみの聖母', LA: 'Beatae Mariae Virginis Perdolentis' }, { rank: 'memorial' }),
        '09-16': saintEntry('red', { KR: '성 고르넬리오 교황과 성 치프리아노 주교 순교자 기념일', VN: 'Thánh Cornêliô, Giáo hoàng, và Thánh Cyprianô, Giám mục, Tử đạo', EN: 'Saints Cornelius, Pope, and Cyprian, Bishop, Martyrs', JP: '聖コルネリオ教皇・聖チプリアノ司教殉教者', LA: 'Sanctorum Cornelii, papae, et Cypriani, episcopi, martyrum' }, { rank: 'memorial' }),
        '09-20': saintEntry('red', { KR: '성 김대건 안드레아 사제와 성 정하상 바오로와 동료 순교자들 기념일', VN: 'Thánh Anrê Kim Taegon, Thánh Phaolô Chong Hasang và các bạn tử đạo', EN: 'Saints Andrew Kim Tae-gon, Paul Chong Ha-sang, and Companions, Martyrs', JP: '聖アンデレ金大建司祭と聖パウロ丁夏祥と同志殉教者', LA: 'Sanctorum Andreae Kim Tae-gon, Pauli Chong Ha-sang et sociorum martyrum' }, { rank: 'memorial' }),
        '09-21': saintEntry('red', { KR: '성 마태오 사도 복음사가 축일', VN: 'Thánh Matthêu, Tông đồ, Tác giả Tin Mừng', EN: 'Saint Matthew, Apostle and Evangelist', JP: '聖マタイ使徒福音記者', LA: 'Sancti Matthaei, apostoli et evangelistae' }, { rank: 'feast' }),
        '09-23': saintEntry('white', { KR: '피에트렐치나의 성 비오 사제 기념일', VN: 'Thánh Piô Pietrelcina, Linh mục', EN: 'Saint Pius of Pietrelcina, Priest', JP: 'ピエトレルチーナの聖ピオ司祭', LA: 'Sancti Pii de Pietrelcina, presbyteri' }, { rank: 'memorial' }),
        '09-27': saintEntry('white', { KR: '성 빈첸시오 드 폴 사제 기념일', VN: 'Thánh Vinh Sơn Phaolô, Linh mục', EN: 'Saint Vincent de Paul, Priest', JP: '聖ビンセンチオ・ア・パウロ司祭', LA: 'Sancti Vincentii de Paul, presbyteri' }, { rank: 'memorial' }),
        '09-29': saintEntry('white', { KR: '성 미카엘, 성 가브리엘, 성 라파엘 대천사 축일', VN: 'Các Tổng Lãnh Thiên Thần Micae, Gabriel và Raphael', EN: 'Saints Michael, Gabriel, and Raphael, Archangels', JP: '聖ミカエル 聖ガブリエル 聖ラファエル大天使', LA: 'Sanctorum Michaelis, Gabrielis et Raphaelis' }, { rank: 'feast' }),
        '09-30': saintEntry('white', { KR: '성 예로니모 사제 학자 기념일', VN: 'Thánh Giêrônimô, Linh mục, Tiến sĩ Hội Thánh', EN: 'Saint Jerome, Priest and Doctor of the Church', JP: '聖ヒエロニモ司祭教会博士', LA: 'Sancti Hieronymi, presbyteri et Ecclesiae doctoris' }, { rank: 'memorial' }),
        '10-01': saintEntry('white', { KR: '아기 예수의 성녀 데레사 동정 학자 기념일', VN: 'Thánh Têrêsa Hài Đồng Giêsu, Trinh nữ, Tiến sĩ Hội Thánh', EN: 'Saint Therese of the Child Jesus, Virgin and Doctor of the Church', JP: '幼きイエスの聖テレジアおとめ教会博士', LA: 'Sanctae Teresiae a Iesu Infante' }, { rank: 'memorial' }),
        '10-02': saintEntry('white', { KR: '수호천사 기념일', VN: 'Các Thiên Thần Hộ Thủ', EN: 'The Holy Guardian Angels', JP: '守護の天使', LA: 'Sanctorum Angelorum Custodum' }, { rank: 'memorial' }),
        '10-04': saintEntry('white', { KR: '아시시의 성 프란치스코 기념일', VN: 'Thánh Phanxicô Assisi', EN: 'Saint Francis of Assisi', JP: 'アシジの聖フランシスコ', LA: 'Sancti Francisci Assisiensis' }, { rank: 'memorial' }),
        '10-07': saintEntry('white', { KR: '묵주 기도의 복되신 동정 마리아 기념일', VN: 'Đức Mẹ Mân Côi', EN: 'Our Lady of the Rosary', JP: 'ロザリオの聖母', LA: 'Beatae Mariae Virginis a Rosario' }, { rank: 'memorial' }),
        '10-15': saintEntry('white', { KR: '예수의 성녀 데레사 동정 학자 기념일', VN: 'Thánh Têrêsa Giêsu, Trinh nữ, Tiến sĩ Hội Thánh', EN: 'Saint Teresa of Jesus, Virgin and Doctor of the Church', JP: 'イエスの聖テレジアおとめ教会博士', LA: 'Sanctae Teresiae a Iesu, virginis et Ecclesiae doctoris' }, { rank: 'memorial' }),
        '10-17': saintEntry('red', { KR: '안티오키아의 성 이냐시오 주교 순교자 기념일', VN: 'Thánh Ignatiô Antiôkhia, Giám mục, Tử đạo', EN: 'Saint Ignatius of Antioch, Bishop and Martyr', JP: 'アンティオキアの聖イグナチオ司教殉教者', LA: 'Sancti Ignatii Antiocheni, episcopi et martyris' }, { rank: 'memorial' }),
        '10-18': saintEntry('red', { KR: '성 루카 복음사가 축일', VN: 'Thánh Luca, Tác giả Tin Mừng', EN: 'Saint Luke, Evangelist', JP: '聖ルカ福音記者', LA: 'Sancti Lucae, evangelistae' }, { rank: 'feast' }),
        '10-28': saintEntry('red', { KR: '성 시몬과 성 유다 사도 축일', VN: 'Thánh Simon và Thánh Giuđa, Tông đồ', EN: 'Saints Simon and Jude, Apostles', JP: '聖シモン 聖ユダ使徒', LA: 'Sanctorum Simonis et Iudae' }, { rank: 'feast' }),
        '11-01': saintEntry('white', { KR: '모든 성인 대축일', VN: 'Lễ Các Thánh Nam Nữ', EN: 'Solemnity of All Saints', JP: '諸聖人', LA: 'Omnium Sanctorum' }, { rank: 'solemnity' }),
        '11-02': saintEntry('black', { KR: '죽은 모든 이를 기억하는 위령의 날', VN: 'Cầu cho các tín hữu đã qua đời', EN: 'The Commemoration of All the Faithful Departed', JP: '死者の日', LA: 'In Commemoratione Omnium Fidelium Defunctorum' }, { rank: 'commemoration' }),
        '11-04': saintEntry('white', { KR: '성 가롤로 보로메오 주교 기념일', VN: 'Thánh Carôlô Bôrômêô, Giám mục', EN: 'Saint Charles Borromeo, Bishop', JP: '聖カロロ・ボロメオ司教', LA: 'Sancti Caroli Borromaei, episcopi' }, { rank: 'memorial' }),
        '11-09': saintEntry('white', { KR: '라테라노 대성전 봉헌 축일', VN: 'Cung hiến Đền thờ Latêranô', EN: 'The Dedication of the Lateran Basilica', JP: 'ラテラノ教会の献堂', LA: 'In Dedicatione Basilicae Lateranensis' }, { rank: 'feastOfLord' }),
        '11-10': saintEntry('white', { KR: '성 대 레오 교황 학자 기념일', VN: 'Thánh Lêô Cả, Giáo hoàng, Tiến sĩ Hội Thánh', EN: 'Saint Leo the Great, Pope and Doctor of the Church', JP: '聖レオ一世教皇教会博士', LA: 'Sancti Leonis Magni, papae et Ecclesiae doctoris' }, { rank: 'memorial' }),
        '11-11': saintEntry('white', { KR: '투르의 성 마르티노 주교 기념일', VN: 'Thánh Martinô thành Tours, Giám mục', EN: 'Saint Martin of Tours, Bishop', JP: '聖マルチノ（ツール）司教', LA: 'Sancti Martini Turonensis, episcopi' }, { rank: 'memorial' }),
        '11-12': saintEntry('red', { KR: '성 요사팟 주교 순교자 기념일', VN: 'Thánh Giôsaphát, Giám mục, Tử đạo', EN: 'Saint Josaphat, Bishop and Martyr', JP: '聖ヨサファト司教殉教者', LA: 'Sancti Iosaphat, episcopi et martyris' }, { rank: 'memorial' }),
        '11-17': saintEntry('white', { KR: '헝가리의 성녀 엘리사벳 수도자 기념일', VN: 'Thánh Êlisabét Hungari, Nữ tu', EN: 'Saint Elizabeth of Hungary, Religious', JP: 'ハンガリーの聖エリザベト修道女', LA: 'Sanctae Elisabeth Hungariae, religiosae' }, { rank: 'memorial' }),
        '11-21': saintEntry('white', { KR: '복되신 동정 마리아의 자헌 기념일', VN: 'Đức Trinh Nữ Maria dâng mình trong Đền thờ', EN: 'The Presentation of the Blessed Virgin Mary', JP: '聖マリアの奉献', LA: 'In Praesentatione Beatae Mariae Virginis' }, { rank: 'memorial' }),
        '11-22': saintEntry('red', { KR: '성녀 체칠리아 동정 순교자 기념일', VN: 'Thánh Cêcilia, Trinh nữ, Tử đạo', EN: 'Saint Cecilia, Virgin and Martyr', JP: '聖セシリアおとめ殉教者', LA: 'Sanctae Caeciliae, virginis et martyris' }, { rank: 'memorial' }),
        '11-24': saintEntry('red', { KR: '성 안드레아 둥락 사제와 동료 순교자들 기념일', VN: 'Thánh Anrê Dũng Lạc, Linh mục, và các bạn tử đạo', EN: 'Saint Andrew Dung-Lac, Priest, and Companions, Martyrs', JP: '聖アンデレ・ズンラク司祭と同志殉教者', LA: 'Sanctorum Andreae Dung-Lac presbyteri et sociorum martyrum' }, { rank: 'memorial' }),
        '11-30': saintEntry('red', { KR: '성 안드레아 사도 축일', VN: 'Thánh Anrê, Tông đồ', EN: 'Saint Andrew, Apostle', JP: '聖アンデレ使徒', LA: 'Sancti Andreae, apostoli' }, { rank: 'feast' }),
        '12-03': saintEntry('white', { KR: '성 프란치스코 하비에르 사제 기념일', VN: 'Thánh Phanxicô Xaviê, Linh mục', EN: 'Saint Francis Xavier, Priest', JP: '聖フランシスコ・ザビエル司祭', LA: 'Sancti Francisci Xavier' }, { rank: 'memorial' }),
        '12-07': saintEntry('white', { KR: '성 암브로시오 주교 학자 기념일', VN: 'Thánh Ambrôsiô, Giám mục, Tiến sĩ Hội Thánh', EN: 'Saint Ambrose, Bishop and Doctor of the Church', JP: '聖アンブロジオ司教教会博士', LA: 'Sancti Ambrosii, episcopi et Ecclesiae doctoris' }, { rank: 'memorial' }),
        '12-08': saintEntry('white', { KR: '원죄 없이 잉태되신 복되신 동정 마리아 대축일', VN: 'Lễ Đức Mẹ Vô Nhiễm Nguyên Tội', EN: 'The Immaculate Conception of the Blessed Virgin Mary', JP: '無原罪の聖マリア', LA: 'In Conceptione Immaculata Beatae Mariae Virginis' }, { rank: 'solemnity' }),
        '12-13': saintEntry('red', { KR: '성녀 루치아 동정 순교자 기념일', VN: 'Thánh Lucia, Trinh nữ, Tử đạo', EN: 'Saint Lucy, Virgin and Martyr', JP: '聖ルチアおとめ殉教者', LA: 'Sanctae Luciae' }, { rank: 'memorial' }),
        '12-14': saintEntry('white', { KR: '십자가의 성 요한 사제 학자 기념일', VN: 'Thánh Gioan Thánh Giá, Linh mục, Tiến sĩ Hội Thánh', EN: 'Saint John of the Cross, Priest and Doctor of the Church', JP: '十字架の聖ヨハネ司祭教会博士', LA: 'Sancti Ioannis a Cruce' }, { rank: 'memorial' }),
        '12-24': saintEntry('gold', { KR: '주님 성탄 대축일 - 성야 미사', VN: 'Lễ Vọng Giáng Sinh', EN: 'The Nativity of the Lord - Vigil Mass', JP: '主の降誕 - 前晩のミサ', LA: 'In Vigilia Nativitatis Domini' }, { rank: 'solemnity', specialMassKey: 'christmas_vigil' }),
        '12-25': saintEntry('gold', { KR: '주님 성탄 대축일', VN: 'Lễ Chúa Giáng Sinh', EN: 'The Nativity of the Lord', JP: '主の降誕', LA: 'In Nativitate Domini' }, { rank: 'solemnity' }),
        '12-26': saintEntry('red', { KR: '성 스테파노 첫 순교자 축일', VN: 'Thánh Stêphanô, Tử đạo tiên khởi', EN: 'Saint Stephen, The First Martyr', JP: '最初の殉教者聖ステファノ', LA: 'Sancti Stephani, protomartyris' }, { rank: 'feast' }),
        '12-27': saintEntry('white', { KR: '성 요한 사도 복음사가 축일', VN: 'Thánh Gioan, Tông đồ, Tác giả Tin Mừng', EN: 'Saint John, Apostle and Evangelist', JP: '聖ヨハネ使徒福音記者', LA: 'Sancti Ioannis, apostoli et evangelistae' }, { rank: 'feast' }),
        '12-28': saintEntry('red', { KR: '죄 없는 아기 순교자들 축일', VN: 'Các Thánh Anh Hài, Tử đạo', EN: 'The Holy Innocents, Martyrs', JP: '幼子殉教者', LA: 'Sanctorum Innocentium, martyrum' }, { rank: 'feast' })
    };

    function countryMassModuleForJurisdiction(jurisdiction) {
        const registry = globalThis.countryMassData;
        const key = String(jurisdiction || '').trim().toUpperCase();
        return registry && typeof registry === 'object' ? registry[key] || null : null;
    }

    function countryMassCalendarAsSaintEntries(jurisdiction) {
        const module = countryMassModuleForJurisdiction(jurisdiction);
        return Object.fromEntries(Object.entries((module && module.calendar) || {}).map(([dateKey, entries]) => {
            const entry = Array.isArray(entries) ? entries[0] : entries;
            const source = module && module.source || {};
            return [dateKey, saintEntry(entry.color || 'white', entry.names || { EN: entry.title }, {
                rank: entry.rank || 'optional',
                localOnly: true,
                source: source.title || `${jurisdiction} proper calendar`,
                sourceUrl: entry.sourceUrl || source.calendarUrl || source.url || '',
                sourcePage: entry.page,
                countryProper: true,
                properTitle: entry.title
            })];
        }));
    }

    function countryMassProperEntriesForDate(jurisdiction, date) {
        const module = countryMassModuleForJurisdiction(jurisdiction);
        if (!module || !date) return [];
        const fixed = module.calendar && module.calendar[calendarDateKey(date)];
        const dynamic = typeof module.dynamicCalendar === 'function' ? module.dynamicCalendar(date) : [];
        return [
            ...(Array.isArray(fixed) ? fixed : (fixed ? [fixed] : [])),
            ...(Array.isArray(dynamic) ? dynamic : (dynamic ? [dynamic] : []))
        ].filter(Boolean);
    }

    const countryFixedSaintsCalendar = {
        US: {
            '01-05': saintEntry('white', { KR: '성 요한 노이만 주교 기념일', VN: 'Thánh Gioan Neumann, Giám mục', EN: 'Saint John Neumann, Bishop', JP: '聖ヨハネ・ノイマン司教', LA: 'Sancti Ioannis Neumann' }, { rank: 'memorial', localOnly: true, source: 'US proper calendar' }),
            '01-22': saintEntry('white', { KR: '태아의 생명 보호를 위한 기도의 날', VN: 'Ngày cầu nguyện cho việc bảo vệ pháp lý các thai nhi', EN: 'Day of Prayer for the Legal Protection of Unborn Children', JP: '胎児の法的保護のための祈りの日', LA: 'Dies orationis pro tutela vitae nascentium' }, { rank: 'optional', localOnly: true, source: 'US proper calendar' }),
            '03-03': saintEntry('white', { KR: '성녀 캐서린 드렉셀 동정', VN: 'Thánh Katharine Drexel, Trinh nữ', EN: 'Saint Katharine Drexel, Virgin', JP: '聖キャサリン・ドレクセルおとめ', LA: 'Sanctae Catharinae Drexel' }, { rank: 'optional', localOnly: true, source: 'US proper calendar' }),
            '07-01': saintEntry('white', { KR: '성 후니페로 세라 사제', VN: 'Thánh Junípero Serra, Linh mục', EN: 'Saint Junipero Serra, Priest', JP: '聖フニペロ・セラ司祭', LA: 'Sancti Iuniperi Serra' }, { rank: 'optional', localOnly: true, source: 'US proper calendar' }),
            '07-04': saintEntry('green', { KR: '미국 독립 기념일', VN: 'Ngày Độc lập Hoa Kỳ', EN: 'Independence Day', JP: 'アメリカ独立記念日', LA: 'Dies Libertatis Civitatum Foederatarum' }, { rank: 'optional', localOnly: true, source: 'US proper calendar' }),
            '07-14': saintEntry('white', { KR: '성녀 카테리 테카크위타 동정 기념일', VN: 'Thánh Kateri Tekakwitha, Trinh nữ', EN: 'Saint Kateri Tekakwitha, Virgin', JP: '聖カテリ・テカクウィタおとめ', LA: 'Sanctae Kateri Tekakwitha' }, { rank: 'memorial', localOnly: true, source: 'US proper calendar' }),
            '09-09': saintEntry('white', { KR: '성 베드로 클라베르 사제 기념일', VN: 'Thánh Phêrô Claver, Linh mục', EN: 'Saint Peter Claver, Priest', JP: '聖ペトロ・クラベル司祭', LA: 'Sancti Petri Claver' }, { rank: 'memorial', localOnly: true, source: 'US proper calendar' }),
            '10-19': saintEntry('red', { KR: '성 요한 드 브레뵈프와 성 이사악 조그 사제와 동료 순교자들 기념일', VN: 'Thánh Gioan Brébeuf, Thánh Isaac Jogues và các bạn tử đạo', EN: 'Saints John de Brebeuf and Isaac Jogues, Priests, and Companions, Martyrs', JP: '聖ヨハネ・ド・ブレブフ 聖イサク・ジョーグと同志殉教者', LA: 'Sanctorum Ioannis de Brebeuf et Isaac Jogues' }, { rank: 'memorial', localOnly: true, source: 'US proper calendar' }),
            '11-13': saintEntry('white', { KR: '성녀 프란체스카 하비에르 카브리니 동정 기념일', VN: 'Thánh Frances Xavier Cabrini, Trinh nữ', EN: 'Saint Frances Xavier Cabrini, Virgin', JP: '聖フランシスカ・ザビエル・カブリニおとめ', LA: 'Sanctae Franciscae Xaveriae Cabrini' }, { rank: 'memorial', localOnly: true, source: 'US proper calendar' }),
            '12-12': saintEntry('white', { KR: '과달루페의 복되신 동정 마리아 축일', VN: 'Đức Mẹ Guadalupe', EN: 'Our Lady of Guadalupe', JP: 'グアダルペの聖母マリア', LA: 'Beatae Mariae Virginis de Guadalupe' }, { rank: 'feast', localOnly: true, source: 'US proper calendar' })
        },
        IE: countryMassCalendarAsSaintEntries('IE'),
        TW: countryMassCalendarAsSaintEntries('TW'),
        CN: countryMassCalendarAsSaintEntries('CN'),
        PH: countryMassCalendarAsSaintEntries('PH'),
        ID: countryMassCalendarAsSaintEntries('ID'),
        TH: countryMassCalendarAsSaintEntries('TH'),
        KH: countryMassCalendarAsSaintEntries('KH'),
        SG: countryMassCalendarAsSaintEntries('SG'),
        MY: countryMassCalendarAsSaintEntries('MY'),
        BN: countryMassCalendarAsSaintEntries('BN'),
        HK: countryMassCalendarAsSaintEntries('HK'),
        MO: countryMassCalendarAsSaintEntries('MO'),
        JP: {
            '02-03': saintEntry('red', { KR: '복자 유스토 다카야마 우콘 순교자 기념일', VN: 'Chân phước Justo Takayama Ukon, Tử đạo', EN: 'Blessed Justus Takayama Ukon, Martyr', JP: '福者ユスト高山右近殉教者', LA: 'Beati Iusti Takayama Ukon, martyris' }, { rank: 'memorial', localOnly: true, source: 'Japan proper calendar' }),
            '02-05': saintEntry('red', { KR: '일본 26 성인 순교자 축일', VN: 'Hai mươi sáu Thánh Tử đạo Nhật Bản', EN: 'The Twenty-Six Martyrs of Japan', JP: '日本26聖人殉教者（聖パウロ三木と同志殉教者）', LA: 'Viginti sex martyrum Iaponiae' }, { rank: 'feast', localOnly: true, source: 'Japan proper calendar' }),
            '03-17': saintEntry('white', { KR: '일본 신자 발견의 성모 축일', VN: 'Đức Mẹ của cuộc tìm thấy các tín hữu Nhật Bản', EN: 'Our Lady of the Discovery of Japanese Christians', JP: '日本の信徒発見の聖母', LA: 'Beatae Mariae Virginis inventionis christianorum Iaponiae' }, { rank: 'feast', localOnly: true, source: 'Japan proper calendar' }),
            '07-01': saintEntry('red', { KR: '복자 베드로 기베 사제와 187위 순교자 기념일', VN: 'Chân phước Phêrô Kibe, Linh mục, và 187 vị tử đạo', EN: 'Blessed Peter Kibe, Priest, and 187 Martyrs', JP: '福者ペトロ岐部司祭と187殉教者', LA: 'Beati Petri Kibe presbyteri et centum octoginta septem martyrum' }, { rank: 'memorial', localOnly: true, source: 'Japan proper calendar' }),
            '12-03': saintEntry('white', { KR: '일본 선교의 수호자 성 프란치스코 하비에르 사제 축일', VN: 'Thánh Phanxicô Xaviê, Linh mục, Bổn mạng công cuộc truyền giáo Nhật Bản', EN: 'Saint Francis Xavier, Priest, Patron of the Missions in Japan', JP: '日本宣教の保護者聖フランシスコ・ザビエル司祭', LA: 'Sancti Francisci Xavier, presbyteri, patroni missionum in Iaponia' }, { rank: 'feast', localOnly: true, source: 'Japan proper calendar' })
        },
        KR: {
            '05-29': saintEntry('red', { KR: '복자 윤지충 바오로와 동료 순교자들', VN: 'Chân phước Phaolô Yun Ji-chung và các bạn tử đạo', EN: 'Blessed Paul Yun Ji-chung and Companions, Martyrs', JP: '福者パウロ尹持忠と同志殉教者', LA: 'Beati Pauli Yun Ji-chung et sociorum martyrum' }, { rank: 'optional', localOnly: true, source: 'Korean proper calendar' }),
            '07-05': saintEntry('red', { KR: '한국 성직자들의 수호자 성 김대건 안드레아 사제 순교자 - 신심 미사', VN: 'Thánh Anrê Kim Tae-gon, linh mục tử đạo, bổn mạng hàng giáo sĩ Hàn Quốc', EN: 'Saint Andrew Kim Tae-gon, Priest and Martyr, Patron of Korean Clergy - Votive Mass', JP: '韓国聖職者の保護者聖アンデレ金大建司祭殉教者', LA: 'Sancti Andreae Kim Tae-gon, presbyteri et martyris, patroni clericorum Coreae' }, { rank: 'solemnity', localOnly: true, source: 'Korean proper calendar', prefaceHint: '한국 고유 감사송 1' }),
            '09-20': saintEntry('red', { KR: '성 김대건 안드레아 사제와 성 정하상 바오로와 동료 순교자들 대축일', VN: 'Thánh Anrê Kim Taegon, Thánh Phaolô Chong Hasang và các bạn tử đạo', EN: 'Saints Andrew Kim Tae-gon, Paul Chong Ha-sang, and Companions, Martyrs', JP: '聖アンデレ金大建司祭と聖パウロ丁夏祥と同志殉教者', LA: 'Sanctorum Andreae Kim Tae-gon, Pauli Chong Ha-sang et sociorum martyrum' }, { rank: 'solemnity', localOnly: true, source: 'Korean proper calendar' }),
            '12-08': saintEntry('white', { KR: '한국 교회의 수호자 원죄 없이 잉태되신 복되신 동정 마리아 대축일', VN: 'Đức Mẹ Vô Nhiễm Nguyên Tội, bổn mạng Giáo Hội Hàn Quốc', EN: 'The Immaculate Conception of the Blessed Virgin Mary, Patroness of the Church in Korea', JP: '韓国教会の保護者・無原罪の聖マリア', LA: 'In Conceptione Immaculata Beatae Mariae Virginis, Patrona Ecclesiae Coreanae' }, { rank: 'solemnity', localOnly: true, source: 'Korean proper calendar' })
        },
        VN: {
            '11-24': saintEntry('red', { KR: '성 안드레아 둥락 사제와 동료 순교자들 대축일', VN: 'Thánh Anrê Dũng Lạc và các bạn tử đạo', EN: 'Saint Andrew Dung-Lac, Priest, and Companions, Martyrs', JP: '聖アンデレ・ズンラク司祭と同志殉教者', LA: 'Sanctorum Andreae Dung-Lac presbyteri et sociorum martyrum' }, { rank: 'solemnity', localOnly: true, source: 'Vietnamese proper calendar' })
        },
        FR: {
            '05-30': saintEntry('white', { KR: '프랑스의 제2수호자 성녀 잔 다르크 동정 기념일', VN: 'Thánh Jeanne d’Arc, Trinh nữ, Bổn mạng thứ hai của Pháp', EN: 'Saint Joan of Arc, Virgin, Secondary Patroness of France', JP: 'フランスの副保護者聖ジャンヌ・ダルクおとめ', LA: 'Sanctae Ioannae de Arc, virginis, patronae secundariae Galliae', FR: 'Sainte Jeanne d’Arc, vierge, patronne secondaire de la France' }, { rank: 'memorial', localOnly: true, source: 'France proper calendar' })
        },
        ES: {
            '07-25': saintEntry('red', { KR: '스페인의 수호자 성 야고보 사도 대축일', VN: 'Thánh Giacôbê Tông đồ, Bổn mạng Tây Ban Nha', EN: 'Saint James, Apostle, Patron of Spain', JP: 'スペインの保護者聖ヤコブ使徒', LA: 'Sancti Iacobi, apostoli, patroni Hispaniae', ES: 'Santiago, apóstol, patrono de España' }, { rank: 'solemnity', localOnly: true, source: 'Spain proper calendar' })
        },
        PT: {
            '12-08': saintEntry('white', { KR: '포르투갈의 수호자 원죄 없이 잉태되신 복되신 동정 마리아 대축일', VN: 'Đức Mẹ Vô Nhiễm Nguyên Tội, Bổn mạng Bồ Đào Nha', EN: 'The Immaculate Conception of the Blessed Virgin Mary, Patroness of Portugal', JP: 'ポルトガルの保護者・無原罪の聖マリア', LA: 'In Conceptione Immaculata Beatae Mariae Virginis, patronae Portugalliae', PT: 'Imaculada Conceição da Virgem Santa Maria, Padroeira principal de Portugal' }, { rank: 'solemnity', localOnly: true, source: 'Portugal proper calendar' })
        },
        MX: {
            '12-12': saintEntry('white', { KR: '멕시코의 수호자 과달루페의 복되신 동정 마리아 대축일', VN: 'Đức Mẹ Guadalupe, Bổn mạng Mêxicô', EN: 'Our Lady of Guadalupe, Patroness of Mexico', JP: 'メキシコの保護者グアダルペの聖母', LA: 'Beatae Mariae Virginis de Guadalupe, patronae Mexici', ES: 'Nuestra Señora de Guadalupe, patrona de México', MX: 'Nuestra Señora de Guadalupe, patrona de México' }, { rank: 'solemnity', localOnly: true, source: 'Mexico proper calendar' })
        },
        BR: {
            '10-12': saintEntry('white', { KR: '브라질의 수호자 아파레시다의 원죄 없이 잉태되신 성모 마리아 대축일', VN: 'Đức Mẹ Vô Nhiễm Aparecida, Bổn mạng Brasil', EN: 'Our Lady of the Conception Aparecida, Patroness of Brazil', JP: 'ブラジルの保護者アパレシーダの聖母', LA: 'Beatae Mariae Virginis de Conceptione Aparecida, patronae Brasiliae', PT: 'Nossa Senhora da Conceição Aparecida, Padroeira do Brasil', BR: 'Nossa Senhora da Conceição Aparecida, Padroeira do Brasil' }, { rank: 'solemnity', localOnly: true, source: 'Brazil proper calendar' })
        },
        ZH: {
            '07-09': saintEntry('red', { KR: '중국의 거룩한 순교자들 축일', VN: 'Các Thánh Tử đạo Trung Hoa', EN: 'The Holy Martyrs and Blessed of China', JP: '中国の聖なる殉教者と福者', LA: 'Sanctorum martyrum et beatorum Sinarum', ZH: '中華殉道聖人' }, { rank: 'feast', localOnly: true, source: 'Chinese proper calendar' })
        }
    };

    // Official Korean texts verified against 참고자료/미사/전문/한국어.pdf.
    // These are translation overlays only for a foreign local calendar shown
    // on the left and Korean shown on the right. Entries absent from the
    // Korean Missal remain eligible for the normal translation workflow.
    const koreanMissalForeignProperData = Object.freeze({
        'JP:02-05': {
            sourcePage: 672,
            printedPage: 792,
            sourceTitle: '성 바오로 미키와 동료 순교자들',
            sourceDate: '02-06',
            data: {
                collect: '모든 성인에게 힘을 주시는 하느님,\n복된 바오로 미키와 그의 동료 순교자들에게\n십자가를 통하여 생명에 이르는 길을 열어 주셨으니\n그들의 전구로\n저희도 죽기까지 신앙을 증언하게 하소서.'
            }
        },
        'US:09-09': {
            sourcePage: 784,
            printedPage: 904,
            sourceTitle: '성 베드로 클라베르 사제',
            sourceDate: '09-09',
            data: {
                collect: '하느님,\n복된 베드로 클라베르가 놀라운 사랑과 인내로\n노예들을 사랑하고 섬기게 하셨으니\n그의 전구를 들으시어\n저희도 예수 그리스도의 가르침을 충실히 따라\n마음과 행동으로 이웃을 사랑하게 하소서.'
            }
        },
        'US:10-19': {
            sourcePage: 814,
            printedPage: 934,
            sourceTitle: '성 요한 드 브레뵈프, 성 이사악 조그 사제와 동료 순교자들',
            sourceDate: '10-19',
            data: {
                collect: '하느님,\n거룩한 요한과 이사악과 동료 순교자들이 복음을 전하고 피를 흘려\n영원한 나라의 복된 희망을 보여 주게 하셨으니\n그들의 전구를 들으시어\n모든 그리스도인의 믿음이 나날이 굳세어지게 하소서.'
            }
        },
        'VN:11-24': {
            sourcePage: 838,
            printedPage: 958,
            sourceTitle: '성 안드레아 둥락 사제와 동료 순교자들',
            sourceDate: '11-24',
            data: {
                entrance: {
                    text: '우리는 우리 주 예수 그리스도의 십자가 외에는 어떠한 것도 자랑하지 않으리라. 십자가의 말씀이 구원받은 우리에게는 하느님의 힘이다.',
                    cit_kr: '갈라 6,14; 1코린 1,18 참조'
                },
                collect: '만물의 기원이시며 아버지이신 하느님,\n복된 안드레아와 동료 순교자들이\n피를 흘리기까지 성자의 십자가를 충실히 따르게 하셨으니\n그들의 전구를 들으시어\n저희가 하느님의 사랑을 형제들에게 전하며\n하느님의 참된 자녀로 살아가게 하소서.',
                prayer_offerings: '거룩하신 아버지,\n거룩한 순교자들의 수난을 공경하며 바치는 이 예물을 받으시고\n저희가 세상의 어려움 속에서도 언제나 주님께 충실하며\n저희 자신을 주님께서 기꺼워하시는 제물로 바치게 하소서.',
                communion: {
                    text: '행복하여라, 의로움 때문에 박해를 받는 사람들! 하늘 나라가 그들의 것이다.',
                    cit_kr: '마태 5,10'
                },
                prayer_after: '주님,\n거룩한 순교자들을 기억하며 하나의 빵을 함께 나누고 간절히 청하오니\n저희가 주님의 사랑 안에서 한마음이 되고\n끝까지 인내하여 영원한 상을 받게 하소서.'
            }
        },
        'US:12-12': {
            sourcePage: 848,
            printedPage: 968,
            sourceTitle: '과달루페의 복되신 동정 마리아',
            sourceDate: '12-12',
            data: {
                collect: '자애로우신 아버지 하느님,\n성자의 지극히 거룩하신 어머니께서 하느님의 백성을 특별히 보호하게 하셨으니\n저희 모두 과달루페의 동정 마리아의 도움을 받아\n활기찬 믿음으로 정의와 평화의 길을 걸으며\n민족들의 발전을 위하여 충실히 일하게 하소서.'
            }
        }
    });

    function calendarDateKey(date) {
        return String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
    }

    function calendarColorsForEntry(entry) {
        const colors = {};
        Object.keys(entry.names || {}).forEach(lang => { colors[lang] = entry.color || 'green'; });
        return colors;
    }

    function calendarOverrideFromEntry(entry, meta = {}) {
        if (!entry) return null;
        return {
            names: Object.assign({}, entry.names || {}),
            colors: calendarColorsForEntry(entry),
            meta: Object.assign({}, entry.meta || {}, meta)
        };
    }

    function protectedSeasonPreventsFixedEntry(date, rank) {
        const meta = getSeasonMeta(date);
        if (date.getDay() === 0 && !['solemnity', 'feastOfLord', 'commemoration'].includes(rank)) return true;
        if (meta.season === 'lent' && rank === 'memorial') return true;
        if (meta.season === 'easter' && meta.week === 1 && !['solemnity', 'feastOfLord'].includes(rank)) return true;
        if (meta.season === 'advent' && date.getMonth() === 11 && date.getDate() >= 17 && rank === 'memorial') return true;
        if (meta.season === 'christmas' && date.getMonth() === 11 && date.getDate() >= 25 && date.getDate() <= 31 && rank === 'memorial') return true;
        return false;
    }

    function fixedCalendarEntryApplies(date, entry) {
        if (!entry) return false;
        const rank = (entry.meta && entry.meta.rank) || 'memorial';
        return !protectedSeasonPreventsFixedEntry(date, rank);
    }

    function generatedSeasonalCalendarOverride(date, options = {}) {
        const includeFixed = options.includeFixed !== false;
        const special = getMovableCelebration(date) || (includeFixed ? getFixedCelebration(date) : null);
        const meta = special ? Object.assign(getSeasonMeta(date), special.meta || {}) : getSeasonMeta(date);
        const names = special ? special.names : (meta.names || {
            KR: formatSeasonalName('KR', meta.season, meta.week, meta.day, meta.sundayCycle),
            VN: formatSeasonalName('VN', meta.season, meta.week, meta.day, meta.sundayCycle),
            EN: formatSeasonalName('EN', meta.season, meta.week, meta.day, meta.sundayCycle),
            JP: formatSeasonalName('JP', meta.season, meta.week, meta.day, meta.sundayCycle),
            LA: formatSeasonalName('LA', meta.season, meta.week, meta.day, meta.sundayCycle)
        });
        const colorName = colorNameFromLiturgyColor(special ? special.color : meta.color);
        return {
            names: Object.assign({}, names),
            colors: { KR: colorName, VN: colorName, EN: colorName, JP: colorName, LA: colorName },
            meta: Object.assign({ source: 'generated liturgical calendar' }, special && special.meta ? special.meta : {})
        };
    }

    function getImmaculateHeartDate(year) {
        return addDays(computeEasterSunday(year), 69);
    }

    function isImmaculateHeartMemorialDate(date) {
        return !!(date && sameDay(date, getImmaculateHeartDate(date.getFullYear())));
    }

    function hasImmaculateHeartFixedMemorialConflict(date) {
        if (!isImmaculateHeartMemorialDate(date)) return false;
        const fixed = fixedSaintsCalendar[calendarDateKey(date)];
        const rank = fixed && fixed.meta && fixed.meta.rank;
        return rank === 'memorial';
    }

    function getAnnunciationObservedDate(year) {
        const nominal = new Date(year, 2, 25);
        const easter = computeEasterSunday(year);
        const palmSunday = addDays(easter, -7);
        const octaveEnd = addDays(easter, 7);
        if (nominal >= palmSunday && nominal <= octaveEnd) return addDays(easter, 8);
        if (nominal.getDay() === 0 && getSeasonMeta(nominal).season === 'lent') return addDays(nominal, 1);
        return nominal;
    }

    function getSaintJosephObservedDate(year) {
        const nominal = new Date(year, 2, 19);
        const easter = computeEasterSunday(year);
        const palmSunday = addDays(easter, -7);
        const holySaturday = addDays(easter, -1);
        if (nominal >= palmSunday && nominal <= holySaturday) return addDays(palmSunday, -1);
        if (nominal.getDay() === 0 && getSeasonMeta(nominal).season === 'lent') return addDays(nominal, 1);
        return nominal;
    }

    function getImmaculateConceptionObservedDate(year) {
        const nominal = new Date(year, 11, 8);
        return nominal.getDay() === 0 && getSeasonMeta(nominal).season === 'advent'
            ? addDays(nominal, 1)
            : nominal;
    }

    function getNativityJohnBaptistObservedDate(year) {
        const nominal = new Date(year, 5, 24);
        const sacredHeart = addDays(computeEasterSunday(year), 68);
        return sameDay(nominal, sacredHeart) ? addDays(nominal, -1) : nominal;
    }

    function transferredFixedCelebrationsForYear(year) {
        return [
            { key: '03-19', observed: getSaintJosephObservedDate(year), source: 'General Roman Calendar Saint Joseph transfer rule' },
            { key: '03-25', observed: getAnnunciationObservedDate(year), source: 'General Roman Calendar Annunciation transfer rule' },
            { key: '06-24', observed: getNativityJohnBaptistObservedDate(year), source: 'General Roman Calendar Sacred Heart conflict rule' },
            { key: '12-08', observed: getImmaculateConceptionObservedDate(year), source: 'General Roman Calendar Immaculate Conception transfer rule' }
        ];
    }

    function isTransferredFixedCelebrationNominalDate(date, key = calendarDateKey(date)) {
        return transferredFixedCelebrationsForYear(date.getFullYear()).some(item =>
            item.key === key && calendarDateKey(item.observed) !== item.key
        );
    }

    function getUniversalDynamicCalendarOverride(date) {
        const transferred = transferredFixedCelebrationsForYear(date.getFullYear());
        for (const item of transferred) {
            if (calendarDateKey(item.observed) === item.key) continue;
            if (sameDay(date, item.observed)) {
                return calendarOverrideFromEntry(fixedSaintsCalendar[item.key], {
                    source: item.source,
                    transferredFrom: item.key
                });
            }
            if (calendarDateKey(date) === item.key) {
                return generatedSeasonalCalendarOverride(date, { includeFixed: false });
            }
        }
        if (sameDay(date, addDays(computeEasterSunday(date.getFullYear()), 50))) {
            return calendarOverrideFromEntry(saintEntry('white', maryMotherOfChurchNames, {
                rank: 'memorial',
                source: 'General Roman Calendar Easter+50 memorial'
            }));
        }
        if (isImmaculateHeartMemorialDate(date)) {
            return calendarOverrideFromEntry(saintEntry('white', immaculateHeartNames, { rank: 'memorial', source: 'Easter+69 dynamic calendar' }));
        }
        return null;
    }

    function getFourthThursdayOfNovember(year) {
        let found = 0;
        for (let day = 1; day <= 30; day += 1) {
            const d = new Date(year, 10, day);
            if (d.getDay() === 4) {
                found += 1;
                if (found === 4) return d;
            }
        }
        return new Date(year, 10, 26);
    }

    function usImmaculateHeartConflictEntry(date) {
        if (!hasImmaculateHeartFixedMemorialConflict(date)) return null;
        const seasonal = generatedSeasonalCalendarOverride(date, { includeFixed: false });
        seasonal.meta = Object.assign({}, seasonal.meta, {
            source: 'US 2026 liturgical calendar conflict rule',
            localOnly: true,
            optionalMemorials: ['Immaculate Heart of the Blessed Virgin Mary', 'Saint Anthony of Padua, Priest and Doctor of the Church']
        });
        return seasonal;
    }

    function jpImmaculateHeartConflictEntry(date) {
        if (!hasImmaculateHeartFixedMemorialConflict(date)) return null;
        return calendarOverrideFromEntry(saintEntry('white', immaculateHeartNames, {
            rank: 'memorial',
            source: 'Japan 2026 liturgical calendar conflict rule',
            localOnly: true,
            omitted: 'Saint Anthony of Padua, Priest and Doctor of the Church'
        }));
    }

    function getCountryCalendarOverride(date, countryLang = state.selectedLocationCode || state.currentLoc) {
        const requested = String(countryLang || state.selectedLocationCode || state.currentLoc || '').trim().toUpperCase();
        const profile = getLiturgicalCalendarProfile(requested);
        const countryKey = profile.countryCalendar || requested;
        const countryEntries = countryFixedSaintsCalendar[countryKey] || {};
        const countryModule = countryMassModuleForJurisdiction(countryKey);
        const dynamicEntries = countryModule && typeof countryModule.dynamicCalendar === 'function'
            ? countryModule.dynamicCalendar(date)
            : [];
        const dynamicEntry = Array.isArray(dynamicEntries) ? dynamicEntries[0] : dynamicEntries;
        if (dynamicEntry) {
            const source = countryModule.source || {};
            const calendarEntry = saintEntry(dynamicEntry.color || 'white', dynamicEntry.names || { EN: dynamicEntry.title }, {
                rank: dynamicEntry.rank || 'optional',
                localOnly: true,
                source: source.title || `${countryKey} proper calendar`,
                sourceUrl: dynamicEntry.sourceUrl || source.calendarUrl || source.url || '',
                countryProper: true,
                properTitle: dynamicEntry.title
            });
            if (['solemnity', 'feast', 'feastOfLord'].includes(calendarEntry.meta.rank)
                || fixedCalendarEntryApplies(date, calendarEntry)) return calendarOverrideFromEntry(calendarEntry);
        }
        for (const item of transferredFixedCelebrationsForYear(date.getFullYear())) {
            const localEntry = countryEntries[item.key];
            if (!localEntry || calendarDateKey(item.observed) === item.key) continue;
            if (sameDay(date, item.observed)) {
                return calendarOverrideFromEntry(localEntry, { source: `${localEntry.meta.source} transferred solemnity rule`, transferredFrom: item.key });
            }
            if (calendarDateKey(date) === item.key) return null;
        }
        if (profile.id === 'US') {
            const usConflict = usImmaculateHeartConflictEntry(date);
            if (usConflict) return usConflict;
            if (sameDay(date, getFourthThursdayOfNovember(date.getFullYear()))) {
                return calendarOverrideFromEntry(saintEntry('white', { KR: '미국 추수감사절', VN: 'Ngày Tạ Ơn', EN: 'Thanksgiving Day', JP: '感謝祭', LA: 'Dies Gratiarum Actionis' }, { rank: 'optional', localOnly: true, source: 'US proper calendar' }));
            }
        }
        if (profile.id === 'JP') {
            const jpConflict = jpImmaculateHeartConflictEntry(date);
            if (jpConflict) return jpConflict;
        }
        const entry = countryEntries[calendarDateKey(date)];
        return fixedCalendarEntryApplies(date, entry) ? calendarOverrideFromEntry(entry) : null;
    }

    function getGeneratedCalendarOverride(date) {
        return mergeCalendarOverrideEntries(getUniversalDynamicCalendarOverride(date), generatedSeasonalCalendarOverride(date));
    }

    function localCalendarOverrideForDate(date) {
        return mergeCalendarOverrideEntries(getCountryCalendarOverride(date), getGeneratedCalendarOverride(date));
    }

    function toDateOnly(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }

    function addDays(date, days) {
        const d = toDateOnly(date);
        d.setDate(d.getDate() + days);
        return d;
    }

    function sameDay(a, b) {
        return toDateOnly(a).getTime() === toDateOnly(b).getTime();
    }

    function dayDiff(a, b) {
        return Math.round((toDateOnly(a).getTime() - toDateOnly(b).getTime()) / MS_PER_DAY);
    }

    function firstSundayBetween(year, monthIndex, startDay, endDay) {
        for (let day = startDay; day <= endDay; day++) {
            const d = new Date(year, monthIndex, day);
            if (d.getDay() === 0) return d;
        }
        return new Date(year, monthIndex, startDay);
    }

    function getAdventStart(year) {
        const dec3 = new Date(year, 11, 3);
        return addDays(dec3, -dec3.getDay());
    }

    function getEpiphanyObserved(year) {
        const profile = getLiturgicalCalendarProfile();
        return profile.epiphany === 'fixed' ? new Date(year, 0, 6) : firstSundayBetween(year, 0, 2, 8);
    }

    function getBaptismOfLord(year) {
        const epiphany = getEpiphanyObserved(year);
        const profile = getLiturgicalCalendarProfile();
        if (profile.epiphany === 'sunday' && epiphany.getDate() >= 7) return addDays(epiphany, 1);
        const daysToSunday = (7 - epiphany.getDay()) % 7 || 7;
        return addDays(epiphany, daysToSunday);
    }

    function getHolyFamilyObserved(year) {
        for (let day = 26; day <= 31; day += 1) {
            const date = new Date(year, 11, day);
            if (date.getDay() === 0) return date;
        }
        return new Date(year, 11, 30);
    }

    function getSecondSundayAfterChristmas(year) {
        for (let day = 2; day <= 5; day += 1) {
            const date = new Date(year, 0, day);
            if (date.getDay() === 0) return date;
        }
        return null;
    }

    function getLiturgicalYear(date) {
        const d = toDateOnly(date);
        return d >= getAdventStart(d.getFullYear()) ? d.getFullYear() + 1 : d.getFullYear();
    }

    function getSundayCycle(date) {
        const mod = getLiturgicalYear(date) % 3;
        return mod === 1 ? 'A' : mod === 2 ? 'B' : 'C';
    }

    function getWeekdayCycle(date) {
        return date.getFullYear() % 2 === 0 ? 'II' : 'I';
    }

    function toRoman(num) {
        return romanNumerals[num] || String(num);
    }

    function ordinalEN(num) {
        return englishOrdinals[num] || `${num}th`;
    }

    function celebration(names, color, meta = {}) {
        return {
            names,
            color,
            isSunday: meta.isSunday || false,
            meta: Object.assign({ special: true }, meta)
        };
    }

    function getMovableCelebration(date) {
        const y = date.getFullYear();
        const easter = computeEasterSunday(y);
        const adventStart = getAdventStart(y);
        const epiphany = getEpiphanyObserved(y);
        const baptism = getBaptismOfLord(y);
        const profile = getLiturgicalCalendarProfile();
        const ascension = addDays(easter, profile.ascension === 'thursday' ? 39 : 42);
        const corpusChristi = addDays(easter, profile.corpusChristi === 'thursday' ? 60 : 63);
        const secondSundayAfterChristmas = profile.epiphany === 'fixed' ? getSecondSundayAfterChristmas(y) : null;
        const movable = [
            { date: addDays(easter, -46), color: 'purple', isSunday: false, names: { KR: '재의 수요일', VN: 'Thứ Tư Lễ Tro', EN: 'Ash Wednesday', JP: '灰の水曜日', LA: 'Feria quarta Cinerum' }, specialMassKey: 'ash_wednesday' },
            { date: addDays(easter, -7), color: 'red', isSunday: true, names: { KR: '주님 수난 성지 주일', VN: 'Chúa Nhật Lễ Lá và Cuộc Thương Khó của Chúa', EN: 'Palm Sunday of the Passion of the Lord', JP: '受難の主日（枝の主日）', LA: 'Dominica in Palmis de Passione Domini' }, specialMassKey: 'palm_sunday' },
            { date: addDays(easter, -3), color: 'white', isSunday: false, names: { KR: '주님 만찬 성목요일', VN: 'Thứ Năm Tuần Thánh - Thánh Lễ Tiệc Ly', EN: 'Holy Thursday - Evening Mass of the Lord’s Supper', JP: '聖木曜日・主の晩さんの夕べのミサ', LA: 'Feria quinta in Cena Domini' }, specialMassKey: 'holy_thursday' },
            { date: addDays(easter, -2), color: 'red', isSunday: false, names: { KR: '주님 수난 성금요일', VN: 'Thứ Sáu Tuần Thánh', EN: 'Friday of the Passion of the Lord', JP: '聖金曜日・主の受難', LA: 'Feria sexta in Passione Domini' }, specialMassKey: 'good_friday' },
            { date: addDays(easter, -1), color: 'gold', isSunday: false, names: { KR: '주님 부활 대축일 파스카 성야', VN: 'Đêm Canh Thức Vượt Qua', EN: 'Easter Vigil in the Holy Night', JP: '復活の聖なる徹夜祭', LA: 'Vigilia Paschalis in Nocte Sancta' }, specialMassKey: 'easter_vigil' },
            { date: easter, color: 'gold', isSunday: true, names: { KR: '주님 부활 대축일', VN: 'Chúa Nhật Phục Sinh', EN: 'Easter Sunday of the Resurrection of the Lord', JP: '復活の主日', LA: 'Dominica Resurrectionis Domini' } },
            { date: ascension, color: 'white', isSunday: ascension.getDay() === 0, names: { KR: '주님 승천 대축일', VN: 'Lễ Chúa Thăng Thiên', EN: 'The Ascension of the Lord', JP: '主の昇天', LA: 'In Ascensione Domini' } },
            { date: addDays(easter, 49), color: 'red', isSunday: true, names: { KR: '성령 강림 대축일', VN: 'Chúa Nhật Lễ Chúa Thánh Thần Hiện Xuống', EN: 'Pentecost Sunday', JP: '聖霊降臨の主日', LA: 'Dominica Pentecostes' } },
            { date: addDays(easter, 56), color: 'white', isSunday: true, names: { KR: '지극히 거룩하신 삼위일체 대축일', VN: 'Chúa Nhật Lễ Chúa Ba Ngôi', EN: 'The Solemnity of the Most Holy Trinity', JP: '三位一体の主日', LA: 'Sanctissimae Trinitatis' } },
            { date: corpusChristi, color: 'white', isSunday: corpusChristi.getDay() === 0, names: { KR: '지극히 거룩하신 그리스도의 성체 성혈 대축일', VN: 'Lễ Mình Máu Thánh Chúa Kitô', EN: 'The Solemnity of the Most Holy Body and Blood of Christ', JP: 'キリストの聖体', LA: 'Sanctissimi Corporis et Sanguinis Christi' } },
            { date: addDays(easter, 68), color: 'white', isSunday: false, names: { KR: '지극히 거룩하신 예수 성심 대축일', VN: 'Lễ Thánh Tâm Chúa Giêsu', EN: 'The Solemnity of the Most Sacred Heart of Jesus', JP: 'イエスのみ心', LA: 'Sacratissimi Cordis Iesu' } },
            { date: addDays(adventStart, -7), color: 'white', isSunday: true, names: { KR: '온 누리의 임금이신 우리 주 예수 그리스도왕 대축일', VN: 'Chúa Nhật Lễ Chúa Giêsu Kitô Vua Vũ Trụ', EN: 'The Solemnity of Our Lord Jesus Christ, King of the Universe', JP: '王であるキリスト', LA: 'Domini Nostri Iesu Christi Universorum Regis' } },
            { date: epiphany, color: 'white', isSunday: epiphany.getDay() === 0, names: { KR: '주님 공현 대축일', VN: 'Lễ Chúa Hiển Linh', EN: 'The Epiphany of the Lord', JP: '主の公現', LA: 'In Epiphania Domini' } },
            { date: baptism, color: 'white', isSunday: baptism.getDay() === 0, names: { KR: '주님 세례 축일', VN: 'Lễ Chúa Giêsu Chịu Phép Rửa', EN: 'The Baptism of the Lord', JP: '主の洗礼', LA: 'In Baptismate Domini' } },
            { date: getHolyFamilyObserved(y), color: 'white', isSunday: getHolyFamilyObserved(y).getDay() === 0, names: { KR: '예수, 마리아, 요셉의 성가정 축일', VN: 'Lễ Thánh Gia: Chúa Giêsu, Đức Maria và Thánh Giuse', EN: 'The Holy Family of Jesus, Mary and Joseph', JP: '聖家族', LA: 'Sanctae Familiae Iesu, Mariae et Ioseph' } },
            ...(secondSundayAfterChristmas ? [{ date: secondSundayAfterChristmas, color: 'white', isSunday: true, names: { KR: '주님 성탄 후 제2주일', VN: 'Chúa Nhật II sau Lễ Giáng Sinh', EN: 'Second Sunday after the Nativity', JP: '主の降誕後第2主日', LA: 'Dominica II post Nativitatem' } }] : [])
        ];
        const hit = movable.find(item => sameDay(date, item.date));
        return hit ? celebration(hit.names, liturgyColorMap[hit.color], { isSunday: hit.isSunday, season: 'special', specialMassKey: hit.specialMassKey || '' }) : null;
    }

    function getFixedCelebration(date) {
        const key = calendarDateKey(date);
        if (isTransferredFixedCelebrationNominalDate(date, key)) return null;
        const fixed = fixedSaintsCalendar[key];
        if (!fixedCalendarEntryApplies(date, fixed)) return null;
        return celebration(fixed.names, liturgyColorMap[fixed.color], Object.assign({ season: 'special' }, fixed.meta || {}));
    }

    function colorNameFromLiturgyColor(colorValue, fallback = 'green') {
        return Object.keys(liturgyColorMap).find(key => liturgyColorMap[key] === colorValue) || fallback;
    }

    function isRoseVestmentDate(date) {
        const d = toDateOnly(date);
        const easter = computeEasterSunday(d.getFullYear());
        const adventStart = getAdventStart(d.getFullYear());
        const firstSundayLent = addDays(easter, -42);
        const adventWeek = Math.floor(dayDiff(d, adventStart) / 7) + 1;
        const lentWeek = Math.floor(dayDiff(d, firstSundayLent) / 7) + 1;
        return d.getDay() === 0 && ((d >= adventStart && adventWeek === 3) || (d >= firstSundayLent && d < easter && lentWeek === 4));
    }

    function isGoldVestmentDate(date, info = {}) {
        const d = toDateOnly(date);
        const easter = computeEasterSunday(d.getFullYear());
        const meta = info.meta || {};
        return sameDay(d, easter)
            || meta.specialMassKey === 'easter_vigil'
            || meta.specialMassKey === 'christmas_vigil'
            || (d.getMonth() === 11 && d.getDate() === 25);
    }

    function recommendedVestmentColor(date, colorValue, info = {}) {
        if (info && info.localCalendar) return colorValue;
        if (isGoldVestmentDate(date, info)) return liturgyColorMap.gold;
        if (isRoseVestmentDate(date)) return liturgyColorMap.rose;
        const celebration = getMovableCelebration(date) || getFixedCelebration(date);
        if (celebration && celebration.color) return celebration.color;
        return colorValue;
    }

    function liturgyColorVisualTheme(colorValue) {
        const name = colorNameFromLiturgyColor(colorValue, '');
        if (name === 'white') {
            return {
                bg: '#f7f8fa',
                text: '#111827',
                accent: '#7c5b17',
                primaryName: '#7c5b17',
                secondary: '#526173',
                translation: '#526173',
                translationHeading: '#a98b45',
                sectionBg: '#f4efe3',
                border: 'rgba(17, 24, 39, 0.24)',
                hover: 'rgba(17, 24, 39, 0.08)',
                settingsBg: 'rgba(255, 255, 255, 0.74)',
                settingsBorder: 'rgba(17, 24, 39, 0.28)'
            };
        }
        if (name === 'gold') {
            return {
                bg: liturgyColorMap.gold,
                text: '#1f1600',
                accent: '#9a6f00',
                translationHeading: '#b99c58',
                border: 'rgba(31, 22, 0, 0.28)',
                hover: 'rgba(31, 22, 0, 0.10)',
                settingsBg: 'rgba(255, 255, 255, 0.26)',
                settingsBorder: 'rgba(31, 22, 0, 0.36)'
            };
        }
        if (name === 'rose') {
            return {
                bg: liturgyColorMap.rose,
                text: '#34121f',
                accent: '#b84f7a',
                translationHeading: '#d08aa6',
                border: 'rgba(52, 18, 31, 0.25)',
                hover: 'rgba(52, 18, 31, 0.10)',
                settingsBg: 'rgba(255, 255, 255, 0.24)',
                settingsBorder: 'rgba(52, 18, 31, 0.34)'
            };
        }
        return {
            bg: colorValue || liturgyColorMap.green,
            text: 'white',
            accent: colorValue || liturgyColorMap.green,
            translationHeading: name === 'red'
                ? '#d98076'
                : (name === 'purple'
                    ? '#b887cb'
                    : (name === 'black' ? '#7c8d9a' : '#78c99a')),
            border: 'rgba(255, 255, 255, 0.3)',
            hover: 'rgba(255, 255, 255, 0.13)',
            settingsBg: 'rgba(0, 0, 0, 0.3)',
            settingsBorder: 'rgba(255, 255, 255, 0.78)'
        };
    }

    function mergeCalendarOverrideEntries(base, extra) {
        if (!base && !extra) return null;
        const meta = Object.assign({}, extra && extra.meta, base && base.meta);
        if (base && base.meta && base.meta.localOnly && !meta.localOnlyLangs) {
            meta.localOnlyLangs = [normalizeSelectableLang(state.currentLoc || '', '')].filter(Boolean);
        }
        return {
            names: Object.assign({}, extra && extra.names, base && base.names),
            colors: Object.assign({}, extra && extra.colors, base && base.colors),
            meta
        };
    }

    function isOverrideLocalOnlyForLang(override, lang) {
        const meta = override && override.meta;
        if (!meta || !meta.localOnly) return false;
        const explicit = Array.isArray(meta.localOnlyLangs) ? meta.localOnlyLangs : [];
        return explicit.length ? explicit.includes(normalizeSelectableLang(lang, '')) : true;
    }

    function getLocalCalendarColor(override, fallbackColor) {
        const colorName = override.colors && override.colors[state.currentLoc];
        if (colorName && liturgyColorMap[colorName]) return liturgyColorMap[colorName];
        return fallbackColor;
    }

    function romanToNumber(value) {
        const roman = String(value || '').toUpperCase();
        const map = { I: 1, V: 5, X: 10, L: 50, C: 100 };
        let total = 0;
        for (let index = 0; index < roman.length; index += 1) {
            const current = map[roman[index]] || 0;
            const next = map[roman[index + 1]] || 0;
            total += current < next ? -current : current;
        }
        return total || Number.MAX_SAFE_INTEGER;
    }

    function normalizeCalendarNameForCompare(value) {
        return String(value || '')
            .toLowerCase()
            .replace(/\[[^\]]*?[가나다]해[^\]]*?\]/g, '')
            .replace(/\b(?:cycle|year|năm)\s*[abc]\b/gi, '')
            .replace(/[가나다]해/g, '')
            .replace(/\b[ivxlcdm]{1,8}\b/gi, match => {
                const value = romanToNumber(match);
                return value && Number.isFinite(value) && value < Number.MAX_SAFE_INTEGER ? String(value) : match;
            })
            .replace(/[()\[\],.'’・:：\s\-–—]+/g, '')
            .trim();
    }

    function applyLocalCalendarOverrides(info, date) {
        const override = localCalendarOverrideForDate(date);
        if (!override) return info;
        const leftLang = state.currentLoc || 'KR';
        const leftName = override.names && override.names[leftLang];
        if (!leftName) return info;
        const names = Object.assign({}, info.names, override.names || {});
        const isLocalSpecific = isOverrideLocalOnlyForLang(override, leftLang)
            && normalizeCalendarNameForCompare(leftName) !== normalizeCalendarNameForCompare(info.names[leftLang]);
        return Object.assign({}, info, {
            names,
            krName: names.KR,
            vnName: names.VN,
            color: getLocalCalendarColor(override, info.color),
            localCalendar: isLocalSpecific ? { lang: leftLang, name: leftName } : info.localCalendar
        });
    }

    function formatSeasonalName(lang, season, week, day, sundayCycle) {
        const roman = toRoman(week);
        const sunday = day === 0;
        if (season === 'ordinary') {
            if (lang === 'KR') return sunday ? `연중 제${week}주일` : `연중 제${week}주간 ${weekdayNames.KR[day]}`;
            if (lang === 'VN') return sunday ? `Chúa Nhật ${roman} Thường Niên - Năm ${sundayCycle}` : `${weekdayNames.VN[day]} Tuần ${roman} Mùa Thường Niên`;
            if (lang === 'EN') return sunday ? `${ordinalEN(week)} Sunday in Ordinary Time` : `${weekdayNames.EN[day]} of the ${ordinalEN(week)} Week in Ordinary Time`;
            if (lang === 'JP') return sunday ? `年間第${week}主日` : `年間第${week}${weekdayNames.JP[day]}`;
            if (lang === 'LA') return sunday ? `Dominica ${roman} per annum` : `${weekdayNames.LA[day]} hebdomadae ${roman} per annum`;
        }
        if (season === 'advent') {
            if (lang === 'KR') return sunday ? `대림 제${week}주일` : `대림 제${week}주간 ${weekdayNames.KR[day]}`;
            if (lang === 'VN') return sunday ? `Chúa Nhật ${roman} Mùa Vọng` : `${weekdayNames.VN[day]} Tuần ${roman} Mùa Vọng`;
            if (lang === 'EN') return sunday ? `${ordinalEN(week)} Sunday of Advent` : `${weekdayNames.EN[day]} of the ${ordinalEN(week)} Week of Advent`;
            if (lang === 'JP') return sunday ? `待降節第${week}主日` : `待降節第${week}${weekdayNames.JP[day]}`;
            if (lang === 'LA') return sunday ? `Dominica ${roman} Adventus` : `${weekdayNames.LA[day]} hebdomadae ${roman} Adventus`;
        }
        if (season === 'lent') {
            if (lang === 'KR') return sunday ? `사순 제${week}주일` : `사순 제${week}주간 ${weekdayNames.KR[day]}`;
            if (lang === 'VN') return sunday ? `Chúa Nhật ${roman} Mùa Chay` : `${weekdayNames.VN[day]} Tuần ${roman} Mùa Chay`;
            if (lang === 'EN') return sunday ? `${ordinalEN(week)} Sunday of Lent` : `${weekdayNames.EN[day]} of the ${ordinalEN(week)} Week of Lent`;
            if (lang === 'JP') return sunday ? `四旬節第${week}主日` : `四旬節第${week}${weekdayNames.JP[day]}`;
            if (lang === 'LA') return sunday ? `Dominica ${roman} Quadragesimae` : `${weekdayNames.LA[day]} hebdomadae ${roman} Quadragesimae`;
        }
        if (season === 'easter') {
            if (lang === 'KR') return sunday ? `부활 제${week}주일` : `부활 제${week}주간 ${weekdayNames.KR[day]}`;
            if (lang === 'VN') return sunday ? `Chúa Nhật ${roman} Phục Sinh` : `${weekdayNames.VN[day]} Tuần ${roman} Phục Sinh`;
            if (lang === 'EN') return sunday ? `${ordinalEN(week)} Sunday of Easter` : `${weekdayNames.EN[day]} of the ${ordinalEN(week)} Week of Easter`;
            if (lang === 'JP') return sunday ? `復活節第${week}主日` : `復活節第${week}${weekdayNames.JP[day]}`;
            if (lang === 'LA') return sunday ? `Dominica ${roman} Paschae` : `${weekdayNames.LA[day]} hebdomadae ${roman} Paschae`;
        }
        if (lang === 'KR') return `성탄 시기 ${weekdayNames.KR[day]}`;
        if (lang === 'VN') return `${weekdayNames.VN[day]} Mùa Giáng Sinh`;
        if (lang === 'EN') return `${weekdayNames.EN[day]} of Christmas Time`;
        if (lang === 'JP') return `降誕節${weekdayNames.JP[day]}`;
        return `${weekdayNames.LA[day]} tempore Nativitatis`;
    }

    function getSeasonMeta(date) {
        const d = toDateOnly(date);
        const y = d.getFullYear();
        const day = d.getDay();
        const easter = computeEasterSunday(y);
        const ashWednesday = addDays(easter, -46);
        const firstSundayLent = addDays(ashWednesday, 4);
        const palmSunday = addDays(easter, -7);
        const pentecost = addDays(easter, 49);
        const adventStart = getAdventStart(y);
        const baptism = getBaptismOfLord(y);
        const ordinaryStart = addDays(baptism, 1);
        const mondayBeforeAdvent = addDays(adventStart, -6);
        const sundayCycle = getSundayCycle(d);
        const weekdayCycle = getWeekdayCycle(d);

        if (d >= adventStart && d < new Date(y, 11, 25)) {
            const week = Math.floor(dayDiff(d, adventStart) / 7) + 1;
            return { season: 'advent', week, day, sundayCycle, weekdayCycle, color: (day === 0 && week === 3) ? liturgyColorMap.rose : liturgyColorMap.purple };
        }
        if (d > baptism && d < ashWednesday) {
            const week = Math.floor(dayDiff(d, ordinaryStart) / 7) + (day === 0 ? 2 : 1);
            return { season: 'ordinary', week, day, sundayCycle, weekdayCycle, color: liturgyColorMap.green };
        }
        if (d >= ashWednesday && d < firstSundayLent) {
            const names = {
                KR: `재의 예식 다음 ${weekdayNames.KR[day]}`,
                VN: `${weekdayNames.VN[day]} sau Lễ Tro`,
                EN: `${weekdayNames.EN[day]} after Ash Wednesday`,
                JP: `灰の水曜日後の${weekdayNames.JP[day]}`,
                LA: `${weekdayNames.LA[day]} post Cineres`
            };
            return { season: 'lent', week: 0, day, sundayCycle, weekdayCycle, color: liturgyColorMap.purple, names };
        }
        if (d >= firstSundayLent && d < easter) {
            if (d >= palmSunday) {
                const names = {
                    KR: `성주간 ${weekdayNames.KR[day]}`,
                    VN: `${weekdayNames.VN[day]} Tuần Thánh`,
                    EN: `${weekdayNames.EN[day]} of Holy Week`,
                    JP: `聖週間${weekdayNames.JP[day]}`,
                    LA: `${weekdayNames.LA[day]} Hebdomadae Sanctae`
                };
                return { season: 'lent', week: 6, day, sundayCycle, weekdayCycle, color: liturgyColorMap.purple, names };
            }
            const week = Math.floor(dayDiff(d, firstSundayLent) / 7) + 1;
            return { season: 'lent', week, day, sundayCycle, weekdayCycle, color: (day === 0 && week === 4) ? liturgyColorMap.rose : liturgyColorMap.purple };
        }
        if (d >= easter && d <= addDays(easter, 7)) {
            const names = {
                KR: `부활 팔일 축제 ${weekdayNames.KR[day]}`,
                VN: `${weekdayNames.VN[day]} trong Tuần Bát Nhật Phục Sinh`,
                EN: `${weekdayNames.EN[day]} within the Octave of Easter`,
                JP: `復活の八日間${weekdayNames.JP[day]}`,
                LA: `${weekdayNames.LA[day]} infra octavam Paschae`
            };
            return { season: 'easter', week: 1, day, sundayCycle, weekdayCycle, color: liturgyColorMap.white, names };
        }
        if (d > addDays(easter, 7) && d <= pentecost) {
            return { season: 'easter', week: Math.floor(dayDiff(d, easter) / 7) + 1, day, sundayCycle, weekdayCycle, color: liturgyColorMap.white };
        }
        if (d > pentecost && d < adventStart) {
            const ordinaryWeekAnchor = day === 0 ? d : addDays(d, -(day - 1));
            const week = 34 - Math.floor(dayDiff(mondayBeforeAdvent, ordinaryWeekAnchor) / 7);
            return { season: 'ordinary', week, day, sundayCycle, weekdayCycle, color: liturgyColorMap.green };
        }
        if (d.getMonth() === 11 && d.getDate() >= 29 && d.getDate() <= 31) {
            const octaveDay = d.getDate() - 24;
            const ordinal = { 5: 'fifth', 6: 'sixth', 7: 'seventh' }[octaveDay];
            const latinOrdinal = { 5: 'quinta', 6: 'sexta', 7: 'septima' }[octaveDay];
            const names = {
                KR: `성탄 팔일 축제 제${octaveDay}일`,
                VN: `Ngày thứ ${octaveDay === 5 ? 'năm' : octaveDay === 6 ? 'sáu' : 'bảy'} trong Tuần Bát Nhật Giáng Sinh`,
                EN: `${ordinal.charAt(0).toUpperCase() + ordinal.slice(1)} Day within the Octave of the Nativity`,
                JP: `主の降誕第${octaveDay}日`,
                LA: `Die ${latinOrdinal} infra octavam Nativitatis Domini`
            };
            return { season: 'christmas', week: 1, day, sundayCycle, weekdayCycle, color: liturgyColorMap.white, names };
        }
        if (d.getMonth() === 0 && d.getDate() >= 2 && d < baptism) {
            const relation = d < getEpiphanyObserved(y) ? 'before' : 'after';
            const names = {
                KR: `주님 공현 대축일 ${relation === 'before' ? '전' : '후'} ${weekdayNames.KR[day]}`,
                VN: `${weekdayNames.VN[day]} ${relation === 'before' ? 'trước' : 'sau'} lễ Hiển Linh`,
                EN: `${weekdayNames.EN[day]} ${relation} Epiphany`,
                JP: `主の公現${relation === 'before' ? '前' : '後'}の${weekdayNames.JP[day]}`,
                LA: `${weekdayNames.LA[day]} ${relation === 'before' ? 'ante' : 'post'} Epiphaniam`
            };
            return { season: 'christmas', week: 1, day, sundayCycle, weekdayCycle, color: liturgyColorMap.white, names };
        }
        return { season: 'christmas', week: 1, day, sundayCycle, weekdayCycle, color: liturgyColorMap.white };
    }

    function isSolemnityTitle(value) {
        return /대축일|Solemnity|sollemn|Lễ\s*Trọng/i.test(String(value || ''));
    }

    function isSolemnityNameMap(names) {
        return Object.values(names || {}).some(isSolemnityTitle);
    }

    const prefaceSelectionBySpecialMassKey = {
        ash_wednesday: { key: 'lent_3', hint: '사순 감사송 3' },
        palm_sunday: { key: 'passion_1', hint: '주님 수난 감사송 1' },
        holy_thursday: { key: 'eucharist_1', hint: '성찬 감사송 1' },
        easter_vigil: { key: 'easter_1', hint: '부활 감사송 1' },
        christmas_vigil: { key: 'nativity_1', hint: '주님 성탄 감사송 1' }
    };

    function activePrefaceLanguage() {
        return normalizeSelectableLang(state.currentLoc || getLiturgicalBaseLang() || 'KR', 'KR');
    }

    function firstCalendarPrefaceCandidate(value, langCode) {
        const lang = normalizeSelectableLang(langCode || 'KR', 'KR');
        const splitPattern = {
            KR: /\s*(?:\r?\n|또는)\s*/i,
            VN: /\s*(?:;|\/|\bhoặc\b)\s*/i,
            EN: /\s*(?:;|\/|\bor\b)\s*/i,
            JP: /\s*(?:／|または)\s*/,
            LA: /\s*(?:;|\/|\bvel\b)\s*/i
        }[lang] || /\s*(?:;|\r?\n)\s*/;
        return String(value || '')
            .split(splitPattern)
            .map(candidate => candidate.replace(/^(?:또는|or|hoặc|vel|または)\s+/i, '').trim())
            .find(Boolean) || '';
    }

    function leftLiturgyName(info, langCode) {
        const lang = normalizeSelectableLang(langCode || activePrefaceLanguage(), 'KR');
        const names = info && info.names ? info.names : {};
        return cleanNodeText(names[lang] || names[getLangFromLocation(lang)] || '');
    }

    function koreanLunarMonthDay(date) {
        try {
            const value = toDateOnly(date || getActiveLiturgicalSourceDate());
            const localNoon = new Date(value.getFullYear(), value.getMonth(), value.getDate(), 12);
            const formatter = new Intl.DateTimeFormat('en-u-ca-chinese', {
                month: 'numeric',
                day: 'numeric',
                timeZone: 'Asia/Seoul'
            });
            const parts = formatter.formatToParts(localNoon);
            const month = Number((parts.find(part => part.type === 'month') || {}).value);
            const day = Number((parts.find(part => part.type === 'day') || {}).value);
            return Number.isFinite(month) && Number.isFinite(day) ? { month, day } : null;
        } catch (error) {
            console.warn('한국 음력 날짜 계산을 지원하지 않는 브라우저입니다.', error);
            return null;
        }
    }

    function localProperPrefaceByDate(date, langCode) {
        const value = toDateOnly(date || getActiveLiturgicalSourceDate());
        const lang = normalizeSelectableLang(langCode || activePrefaceLanguage(), 'KR');
        const month = value.getMonth() + 1;
        const day = value.getDate();
        if (lang === 'KR') {
            const lunar = koreanLunarMonthDay(value);
            if (lunar && lunar.month === 1 && lunar.day === 1) return { key: 'kr_proper_2_lunar_new_year', source: 'perpetual-local-rule' };
            if (lunar && lunar.month === 8 && lunar.day === 15) return { key: 'kr_proper_3_chuseok', source: 'perpetual-local-rule' };
            if (month === 6 && day === 25) return { key: 'kr_proper_4_unification', source: 'perpetual-local-rule' };
            if ((month === 7 && day === 5) || (month === 9 && day === 20)) return { key: 'kr_proper_1', source: 'perpetual-local-rule' };
        }
        if (lang === 'VN' && month === 11 && day === 24) return { key: 'vn_martyrs', source: 'perpetual-local-rule' };
        if (lang === 'EN' && getLiturgicalCalendarProfile().id === 'US') {
            if (month === 7 && day === 4) return { key: 'us_independence', source: 'perpetual-local-rule' };
            if (month === 11 && value.getDay() === 4 && day >= 22 && day <= 28) return { key: 'us_thanksgiving', source: 'perpetual-local-rule' };
            if (month === 12 && day === 12) return { key: 'us_guadalupe', source: 'perpetual-local-rule' };
        }
        if (lang === 'JP') {
            if (month === 2 && day === 5) return { key: 'jp_26_martyrs', source: 'perpetual-local-rule' };
            if (month === 3 && day === 17) return { key: 'jp_discovery_of_christians', source: 'perpetual-local-rule' };
        }
        return null;
    }

    function localProperPrefaceSelection(info, langCode, date = null) {
        const lang = normalizeSelectableLang(langCode || activePrefaceLanguage(), 'KR');
        const byDate = localProperPrefaceByDate(date || getActiveLiturgicalSourceDate(), lang);
        if (byDate) return byDate;
        const title = leftLiturgyName(info, lang);
        const rules = {
            KR: [
                [/한국 성직자들의 수호자|김대건|정하상|한국 순교/i, 'kr_proper_1'],
                [/설날/i, 'kr_proper_2_lunar_new_year'],
                [/한가위|추석/i, 'kr_proper_3_chuseok'],
                [/민족의 화해|남북통일|통일 기원/i, 'kr_proper_4_unification']
            ],
            VN: [[/CÁC THÁNH TỬ ĐẠO VIỆT NAM|Tử Đạo Việt Nam/i, 'vn_martyrs']],
            EN: [
                [/Thanksgiving Day/i, 'us_thanksgiving'],
                [/Independence Day/i, 'us_independence'],
                [/Our Lady of Guadalupe/i, 'us_guadalupe']
            ],
            JP: [
                [/日本\s*26\s*聖人殉教者|日本二十六聖人殉教者/i, 'jp_26_martyrs'],
                [/日本の信徒発見の聖母|日本の徒発見の聖母/i, 'jp_discovery_of_christians']
            ]
        };
        const matched = (rules[lang] || []).find(([pattern]) => pattern.test(title));
        return matched ? { key: matched[1], hint: title, source: 'calendar-local' } : null;
    }

    function explicitPrefaceSelectionFromLiturgyInfo(info, langCode) {
        const meta = info && info.meta ? info.meta : {};
        const lang = normalizeSelectableLang(langCode || activePrefaceLanguage(), 'KR');
        if (meta.specialMassKey && prefaceSelectionBySpecialMassKey[meta.specialMassKey]) {
            return Object.assign({ source: 'special-mass' }, prefaceSelectionBySpecialMassKey[meta.specialMassKey]);
        }
        if (lang === 'KR' && meta.prefaceHint) return { hint: firstCalendarPrefaceCandidate(meta.prefaceHint, lang), source: 'calendar-local' };
        const text = leftLiturgyName(info, lang);
        const rules = [
            [/주님 공현|Epiphany|Hiển Linh|公現|Epiphan/i, 'epiphany'],
            [/주님 세례|Baptism of the Lord|Chịu Phép Rửa|洗礼|Baptismate Domini/i, 'baptism_of_the_lord'],
            [/주님 봉헌|Presentation of the Lord|Dâng Chúa.*Đền Thánh|主の奉献|Praesentatione Domini/i, 'presentation_of_the_lord'],
            [/마리아 막달레나|Mary Magdalene|Ma-ri-a Ma-đa-lê-na|マリア.*マグダレナ|Mariae Magdalenae/i, 'mary_magdalene'],
            [/세례자 요한|John the Baptist|Gioan Tẩy Giả|洗礼者.*ヨハネ|Ioannis Baptistae/i, 'john_the_baptist'],
            [/주님 성탄|Nativity of the Lord|Giáng Sinh|主の降誕|Nativitate Domini/i, 'nativity_1'],
            [/부활 대축일|Easter Sunday|Phục Sinh|復活|Pasch|Resurrectionis Domini/i, 'easter_1'],
            [/성모.*승천|Assumption|Lên Trời|被昇天|Assumptione/i, 'assumption'],
            [/승천|Ascension|Thăng Thiên|昇天|Ascensione/i, 'ascension_1'],
            [/성령 강림|Pentecost|Hiện Xuống|聖霊降臨/i, 'pentecost'],
            [/삼위일체|Trinity|Ba Ngôi|三位一体|Trinit/i, 'holy_trinity'],
            [/성체 성혈|Body and Blood|Mình Máu|Corpus|Corporis et Sanguinis|聖体/i, 'eucharist_2'],
            [/예수 성심|Sacred Heart|Thánh Tâm|み心|Corde Iesu|Cordis Iesu/i, 'sacred_heart'],
            [/그리스도\s*왕|Christ.*King|Kitô Vua|キリスト.*王|Regis/i, 'christ_the_king'],
            [/성 요셉|Saint Joseph|Thánh Giuse|聖ヨセフ|Ioseph/i, 'saint_joseph'],
            [/탄생 예고|Annunciation|Truyền Tin|お告げ|Annuntiation/i, 'annunciation'],
            [/베드로.*바오로|Peter and Paul|Phêrô.*Phaolô|ペトロ.*パウロ|Petri.*Pauli/i, 'peter_and_paul'],
            [/변모|Transfiguration|Hiển Dung|変容|Transfiguratione/i, 'transfiguration'],
            [/십자가 현양|Holy Cross|Thánh Giá|十字架|Exaltatione/i, 'holy_cross'],
            [/원죄 없이|Immaculate Conception|Vô Nhiễm|無原罪|Immaculata/i, 'immaculate_conception'],
            [/모든 성인|All Saints|諸聖人|Omnium Sanctorum/i, 'all_saints'],
            [/위령의 날|All Souls|Các tín hữu đã qua đời|死者の日|Omnium Fidelium Defunctorum/i, 'dead_1'],
            [/라테라노.*봉헌|Lateran.*Dedication|Cung hiến.*Latêranô|ラテラノ.*献堂|Dedicatione Basilicae Lateranensis/i, 'dedication_of_a_church'],
            [/대천사|수호천사|Archangels?|Guardian Angels?|Tổng lãnh Thiên thần|Các Thiên thần Hộ thủ|大天使|守護の天使|Michaelis.*Gabrielis.*Raphaelis|Angelorum Custodum/i, 'angels'],
            [/성모|Our Lady|Blessed Virgin|Đức Mẹ|聖母|Beata Maria|Beatae Mariae/i, 'mary_1'],
            [/사도|Apostle|Tông Đồ|使徒|Apostol|evangelistae|Simonis.*Iudae/i, 'apostles_1'],
            [/순교|Martyr|Tử Đạo|殉教|Martyr|Laurentii/i, 'martyrs'],
            [/사제|주교|Pastor|Priest|Bishop|Linh Mục|Giám Mục|司祭|司教|Pastor/i, 'pastors'],
            [/동정녀|Virgin|Trinh Nữ|おとめ|Virgine/i, 'virgins_and_religious']
        ];
        const matched = rules.find(([pattern]) => pattern.test(text));
        return matched ? { key: matched[1], hint: text, source: 'calendar-rule' } : null;
    }

    function defaultPrefaceSelectionForLiturgyInfo(info, date = null) {
        const activeDate = date ? toDateOnly(date) : getActiveLiturgicalSourceDate();
        const meta = (info && info.meta && info.meta.season) ? info.meta : getSeasonMeta(activeDate);
        const lang = activePrefaceLanguage();
        const month = activeDate.getMonth() + 1;
        const day = activeDate.getDate();

        // 사용자가 지정한 예외: 12/29~1/2은 성탄 2, 부활 7주는 승천 1.
        if ((month === 12 && day >= 29) || (month === 1 && day <= 2)) {
            return { key: 'nativity_2', hint: '주님 성탄 감사송 2', source: 'calendar-exception' };
        }
        if (meta.season === 'easter' && meta.week === 7) {
            return { key: 'ascension_1', hint: '주님 승천 감사송 1', source: 'calendar-exception' };
        }

        const localProper = localProperPrefaceSelection(info, lang, activeDate);
        if (localProper) return localProper;
        const explicit = explicitPrefaceSelectionFromLiturgyInfo(info, lang);
        if (explicit) return explicit;

        if (meta.season === 'advent') return { key: activeDate.getMonth() === 11 && activeDate.getDate() >= 17 ? 'advent_2' : 'advent_1', source: 'season-rule' };
        if (meta.season === 'christmas') return { key: 'nativity_1', source: 'season-rule' };
        if (meta.season === 'lent') {
            if (meta.week === 0) return { key: activeDate.getDay() === 3 ? 'lent_3' : 'lent_1', source: 'season-rule' };
            if (meta.week === 6) return { key: activeDate.getDay() === 0 ? 'passion_1' : 'passion_2', source: 'season-rule' };
            if (activeDate.getDay() === 0 && meta.week >= 1 && meta.week <= 5) {
                if (meta.week <= 2 || meta.sundayCycle === 'A') {
                    return { key: `lent_${['1st', '2nd', '3rd', '4th', '5th'][meta.week - 1]}_sunday`, source: 'season-rule' };
                }
                return { key: 'lent_1', source: 'season-rule' };
            }
            if (meta.week === 5) return { key: 'passion_1', source: 'season-rule' };
            return { key: 'lent_1', source: 'season-rule' };
        }
        if (meta.season === 'easter') return { key: 'easter_1', source: 'season-rule' };
        if (meta.season === 'ordinary' && info && info.isSunday) {
            const koreanOrdinarySundayPrefaceByWeek = {
                2: 1, 3: 1, 4: 1, 5: 1, 6: 2,
                11: 2, 12: 2, 13: 2, 15: 4,
                16: 6, 17: 6, 18: 6, 19: 6, 20: 6,
                21: 8, 22: 7, 23: 7, 24: 7,
                26: 6, 27: 6, 28: 6, 30: 6, 32: 6, 33: 3
            };
            const number = koreanOrdinarySundayPrefaceByWeek[meta.week] || 1;
            return { key: `ordinary_${number}`, source: 'perpetual-ordinary-week-rule' };
        }
        return { key: 'common_1', source: 'season-rule' };
    }

    function ensureDefaultPrefaceHint(info, date = null) {
        const activeDate = date ? toDateOnly(date) : getActiveLiturgicalSourceDate();
        const lang = activePrefaceLanguage();
        const followsKoreanDefault = lang !== 'KR' && !localProperPrefaceSelection(info, lang, activeDate);
        if (info && (
            !info.prefaceHint
            || /^(?:default|calendar|season)/.test(info.prefaceHintSource || '')
            || (followsKoreanDefault && info.prefaceHintSource === 'source')
        )) {
            const selection = defaultPrefaceSelectionForLiturgyInfo(info, activeDate);
            info.prefaceHint = selection.hint || selection.key || '';
            info.prefaceKey = selection.key || '';
            info.prefaceHintSource = selection.source || 'default';
        }
        return info;
    }

    function formatKoreanDateString(date) {
        const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
        return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 (${dayNames[date.getDay()]})`;
    }

    function applyNavigationDateLabel(info, dateContext) {
        if (info && dateContext && dateContext.navSlot === 'vigil') {
            const namesText = cleanNodeText([
                info.krName,
                info.names && info.names.KR,
                info.names && info.names.EN,
                info.names && info.names.VN
            ].filter(Boolean).join(' '));
            const isNamedVigil = dateContext.specialVigil || /전야\s*미사|Vigil|Vigilia|Vọng/i.test(namesText);
            const label = isNamedVigil ? '전야미사' : '토요일 저녁 주일미사';
            info.dateStr = `${formatKoreanDateString(dateContext.localDate)} ${label}`;
        }
        return info;
    }

    const headerMainTitles = {
        KR: '오늘의 미사',
        VN: 'Thánh lễ hôm nay',
        EN: "Today's Mass",
        JP: '今日のミサ',
        LA: 'Missa hodierna'
    };

    function localizedHeaderMainTitle(langCode) {
        return headerMainTitles[normalizeSelectableLang(langCode, 'KR')] || headerMainTitles.KR;
    }

    function localizedNavigationLabel(dateContext, langCode) {
        if (!dateContext || dateContext.navSlot !== 'vigil') return '';
        const namedVigil = dateContext.specialVigil;
        const labels = namedVigil ? {
            KR: '전야미사',
            VN: 'Lễ vọng',
            EN: 'Vigil Mass',
            JP: '前晩ミサ',
            LA: 'Missa in Vigilia'
        } : {
            KR: '토요일 저녁 주일미사',
            VN: 'Thánh lễ Chúa Nhật chiều thứ Bảy',
            EN: 'Saturday evening Sunday Mass',
            JP: '土曜夕方の主日ミサ',
            LA: 'Missa dominicalis vespertina sabbati'
        };
        return labels[normalizeSelectableLang(langCode, 'KR')] || labels.KR;
    }

    function localizedHeaderDate(dateContext, langCode, fallbackText = '') {
        const ctx = dateContext || {};
        const lang = normalizeSelectableLang(langCode, 'KR');
        const date = cloneDateOnly(ctx.navSlot === 'vigil' && ctx.localDate ? ctx.localDate : (ctx.date || getTargetDate()));
        const label = localizedNavigationLabel(ctx, lang);
        const weekday = date.getDay();
        const month = date.getMonth();
        const day = date.getDate();
        const year = date.getFullYear();
        let text = '';
        if (lang === 'VN') {
            const days = ['Chúa Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
            text = `${days[weekday]}, ngày ${day} tháng ${month + 1} năm ${year}`;
        } else if (lang === 'EN') {
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            text = `${days[weekday]}, ${months[month]} ${day}, ${year}`;
        } else if (lang === 'JP') {
            const days = ['日', '月', '火', '水', '木', '金', '土'];
            text = `${year}年${month + 1}月${day}日（${days[weekday]}）`;
        } else if (lang === 'LA') {
            const days = ['Dominica', 'Feria secunda', 'Feria tertia', 'Feria quarta', 'Feria quinta', 'Feria sexta', 'Sabbato'];
            const months = ['Ianuarii', 'Februarii', 'Martii', 'Aprilis', 'Maii', 'Iunii', 'Iulii', 'Augusti', 'Septembris', 'Octobris', 'Novembris', 'Decembris'];
            text = `${days[weekday]}, ${day} ${months[month]} ${year}`;
        } else {
            text = label ? formatKoreanDateString(date) : (fallbackText || formatKoreanDateString(date));
        }
        return label ? `${text} - ${label}` : text;
    }

    function buildGeneratedLiturgyInfo(date) {
        const special = getMovableCelebration(date) || getFixedCelebration(date);
        const meta = special ? Object.assign(getSeasonMeta(date), special.meta) : getSeasonMeta(date);
        const names = special ? special.names : (meta.names || {
            KR: formatSeasonalName('KR', meta.season, meta.week, meta.day, meta.sundayCycle),
            VN: formatSeasonalName('VN', meta.season, meta.week, meta.day, meta.sundayCycle),
            EN: formatSeasonalName('EN', meta.season, meta.week, meta.day, meta.sundayCycle),
            JP: formatSeasonalName('JP', meta.season, meta.week, meta.day, meta.sundayCycle),
            LA: formatSeasonalName('LA', meta.season, meta.week, meta.day, meta.sundayCycle)
        });
        const info = applyLocalCalendarOverrides({
            names,
            krName: names.KR,
            vnName: names.VN,
            color: special ? special.color : meta.color,
            dateStr: formatKoreanDateString(date),
            meta,
            isSunday: date.getDay() === 0 || (special && special.isSunday),
            isSolemnity: isSolemnityNameMap(names)
        }, date);
        info.isSolemnity = !!(info.isSolemnity || isSolemnityNameMap(info.names));
        return ensureDefaultPrefaceHint(info, date);
    }

    function stripAlternativeLiturgyTitle(raw) {
        return String(raw || '')
            .replace(/\s*또는(?:\s*[:：]?\s*.*)?$/u, ' ')
            .replace(/\s+\bor\b(?:\s+.*)?$/i, ' ')
            .replace(/[.;]?\s*[–—•]\s*(?=(?:Thánh|Lễ)\b).*$/iu, ' ')
            .trim();
    }

    function primaryLiturgyTitle(raw) {
        return stripAlternativeLiturgyTitle(String(raw || '')
            .replace(/^Title:\s*/i, ' ')
            .replace(/\[([^\]]+)\]\((?:https?:\/\/|\/)[^)]+\)/gi, '$1')
            .replace(/\]\((?:https?:\/\/|\/)[^)]+\)/gi, ' ')
            .replace(/https?:\/\/\S+/gi, ' ')
            .replace(/\s+URL Source:.*$/i, ' '))
            .trim();
    }

    function stripCalendarDateFromTitle(raw) {
        return String(raw || '')
            .replace(/\b\d{4}\s*[.\/-]\s*\d{1,2}\s*[.\/-]\s*\d{1,2}\b/g, ' ')
            .replace(/\b\d{4}\s*년\s*\d{1,2}\s*월\s*\d{1,2}\s*일(?:\s*\([^)]+\)|\s*[가-힣]+요일)?/g, ' ')
            .replace(/\b(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday),?\s+(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}\b/gi, ' ')
            .replace(/\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}\b/gi, ' ')
            .replace(/\b\d{4}年\s*\d{1,2}月\s*\d{1,2}日(?:\s*\([^)]*\))?/g, ' ');
    }

    function cleanLiturgyTitle(raw) {
        return stripCalendarDateFromTitle(primaryLiturgyTitle(raw))
            .replace(/^TGP\s+(?:Hà\s+Nội|Ha\s+Noi)\s*[·|:-]\s*/iu, ' ')
            .replace(/^Ngày\s+\d{1,2}\s*\/\s*\d{1,2}\s*:\s*/i, ' ')
            .replace(/\[([^\]]+)\]\((?:https?:\/\/|\/)[^)]+\)/gi, '$1')
            .replace(/\]\((?:https?:\/\/|\/)[^)]+\)/gi, ' ')
            .replace(/https?:\/\/\S+/gi, ' ')
            .replace(/\[[^\]]+\]/g, ' ')
            .replace(/_\{([^}]+)\}/g, ' $1 ')
            .replace(/\s*\|\s*USCCB\s*$/i, ' ')
            .replace(/\s*\|\s*TGP\s+(?:Hà\s+Nội|Ha\s+Noi)\s*$/iu, ' ')
            .replace(/\s*\|\s*Tổng\s+Giáo\s+Phận\s+Hà\s+Nội\s*$/iu, ' ')
            .replace(/\s*\|\s*/g, ' | ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function liturgicalCycleLabel(langCode) {
        const meta = state.liturgyInfo && state.liturgyInfo.meta;
        if (!meta) return '';
        const cycle = meta.sundayCycle;
        if (!cycle) return '';
        if (langCode === 'KR') return { A: '가해', B: '나해', C: '다해' }[cycle] || '';
        if (langCode === 'JP') return `${cycle}年`;
        if (langCode === 'EN') return `Year ${cycle}`;
        if (langCode === 'VN') return `Năm ${cycle}`;
        if (langCode === 'LA') return `Annus ${cycle}`;
        return '';
    }

    function formatDisplayLiturgyTitle(langCode, rawTitle) {
        const title = cleanLiturgyTitle(rawTitle);
        if (!title || /^(로딩중|Loading|読み込み中|Đang tải|Exspecta)/i.test(title)) return title;
        const label = liturgicalCycleLabel(langCode);
        if (!label) return title;
        if (langCode === 'KR') return `[${label}] ${title.replace(/^\[(?:가|나|다)해\]\s*/, '')}`;
        if (langCode === 'JP') return `[${label}] ${title.replace(/^\[[ABC]年\]\s*/, '')}`;
        if (langCode === 'EN') return `${title.replace(/\s+-\s+Year\s+[ABC]\s*$/i, '')} - ${label}`;
        if (langCode === 'VN') {
            const withoutCycle = title
                .replace(/\s*[-–—]\s*Năm\s+[ABC]\s*$/iu, '')
                .replace(/\s+[ABC]\s*$/i, '');
            return `${withoutCycle} - ${label}`;
        }
        if (langCode === 'LA') return `${title.replace(/\s+-\s+Annus\s+[ABC]\s*$/i, '')} - ${label}`;
        return title;
    }

    function colorFromSourceTitle(raw, fallbackColor) {
        const title = primaryLiturgyTitle(raw);
        if (/\[홍\]|순교|성령|수난|성지|사도|Passion|Pentecost|Martyr|Apostle|Apostoli|殉教|聖霊|使徒|tử đạo|Tông\s*Đồ|Đỏ/i.test(title)) return liturgyColorMap.red;
        if (/\[자\]|대림|사순|Advent|Lent|待降|四旬|Mùa Vọng|Mùa Chay/i.test(title)) return liturgyColorMap.purple;
        if (/\[백\]|대축일|축일|부활|성탄|Solemnity|Feast|Easter|Christmas|主日|Phục Sinh|Giáng Sinh|Trắng/i.test(title)) return liturgyColorMap.white;
        if (/\[녹\]|연중|Ordinary Time|年間|Thường Niên|Xanh/i.test(title)) return liturgyColorMap.green;
        return fallbackColor || liturgyColorMap.green;
    }

    function colorFromSourceLines(lines, fallbackColor) {
        const colorLine = (lines || []).find(line => /\[[홍백녹자]\]|Màu phụng vụ/i.test(line));
        return colorLine ? colorFromSourceTitle(colorLine, fallbackColor) : fallbackColor;
    }

    function escapeHtml(value) {
        const div = document.createElement('div');
        div.textContent = value == null ? '' : String(value);
        return div.innerHTML;
    }

    function escapeAttr(value) {
        return escapeHtml(value)
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function getLiturgyDisplayName(langCode) {
        const names = state.liturgyInfo.names || {};
        const localCalendar = state.liturgyInfo.localCalendar;
        let displayName = names[langCode] || state.liturgyInfo.krName || '';
        if (localCalendar) {
            const translatedName = names[langCode];
            if (langCode === localCalendar.lang) displayName = names[localCalendar.lang] || localCalendar.name;
            else displayName = translatedName && !isGeneratedSeasonalName(langCode, translatedName)
                ? translatedName
                : translateKnownLocalProperTitle(localCalendar.name, langCode);
        }
        return formatDisplayLiturgyTitle(langCode, displayName);
    }

    function translateKnownLocalProperTitle(title, langCode) {
        const normalized = normalizeCalendarNameForCompare(title);
        if (normalized.includes('민족의화해와일치') && normalized.includes('남북통일')) {
            return {
                KR: '민족의 화해와 일치를 위한 기도의 날 - 남북통일 기원 미사',
                VN: 'Ngày cầu nguyện cho sự hòa giải và hiệp nhất dân tộc - Thánh lễ cầu cho thống nhất Nam-Bắc Triều Tiên',
                EN: 'Day of Prayer for Reconciliation and Unity of the Korean People - Mass for the Reunification of North and South Korea',
                JP: '民族の和解と一致のための祈願日 - 南北統一祈願ミサ',
                LA: 'Dies orationis pro reconciliatione et unitate gentis Coreanae - Missa pro reunificatione Coreae Septentrionalis et Meridionalis'
            }[langCode] || '';
        }
        return '';
    }

    function stripSeasonalTitleAnnotation(value) {
        return String(value || '')
            .replace(/\s*[（(][^()（）]*[）)]\s*/g, ' ')
            .replace(/\s+\b(?:cycle|year|năm|annus)\s+[abc]\b\s*$/i, ' ')
            .replace(/\s*[-–—]\s*(?:cycle|year|năm|annus)\s+[abc]\s*$/i, ' ')
            .replace(/\b(?:tuần|mùa)\b/giu, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function isGeneratedSeasonalNameForInfo(langCode, value, info = state.liturgyInfo) {
        const meta = info && info.meta ? info.meta : {};
        if (!['ordinary', 'advent', 'lent', 'easter'].includes(meta.season) || !meta.week) return false;
        const generated = formatSeasonalName(langCode, meta.season, meta.week, meta.day, meta.sundayCycle);
        return normalizeCalendarNameForCompare(stripSeasonalTitleAnnotation(value))
            === normalizeCalendarNameForCompare(stripSeasonalTitleAnnotation(generated));
    }

    function isGeneratedSeasonalName(langCode, value) {
        return isGeneratedSeasonalNameForInfo(langCode, value, state.liturgyInfo);
    }

    function showLiturgyLoadingMessage(message) {
        state.dailyReadingsLoading = true;
        const leftLang = normalizeSelectableLang(state.currentLoc || 'KR', 'KR');
        const rightLang = normalizeSelectableLang(state.targetLang || DEFAULT_TARGET_LANG, DEFAULT_TARGET_LANG);
        if ((state.activeTab || 'mass') !== 'mass') {
            hideLiturgyStatusBar();
            return;
        }
        if (message) updateLiturgyStatusBar([message], { loading: true });
        else syncLiturgyLoadingStatusBar(leftLang, rightLang);
    }

    // 언어 메타데이터
    const langMeta = {
        'KR': { name: '한국어', code: 'ko', class: 'lang-KR' },
        'VN': { name: 'Tiếng Việt', code: 'vi', class: 'lang-VN' },
        'EN': { name: 'English', code: 'en', class: 'lang-EN' },
        'JP': { name: '日本語', code: 'ja', class: 'lang-JP' },
        'LA': { name: 'Latin', code: 'la', class: 'lang-LA' }
    };

    // 위치 선택은 국가 기준이고, 화면 렌더링은 언어 코드 기준이라 둘을 명시적으로 연결합니다.
    const locationMeta = {
        'KR': { lang: 'KR', label: '한국 / 한국어', timeZone: 'Asia/Seoul' },
        'VN': { lang: 'VN', label: '베트남 / Tiếng Việt', timeZone: 'Asia/Ho_Chi_Minh' },
        'US': { lang: 'EN', label: '미국 / English', timeZone: 'America/New_York' },
        'IE': { lang: 'EN', label: '아일랜드 / English (Beta)', timeZone: 'Europe/Dublin', beta: true, dataJurisdiction: 'IE' },
        'GB-NIR': { lang: 'EN', label: '북아일랜드 / English (Beta)', timeZone: 'Europe/London', beta: true, dataJurisdiction: 'IE' },
        'TW': { lang: 'EN', label: '대만 / ZH-TW · English (Beta)', timeZone: 'Asia/Taipei', beta: true, dataJurisdiction: 'TW', languageVariant: 'ZH-TW' },
        'CN': { lang: 'EN', label: '중국 / ZH-CN · English (Beta)', timeZone: 'Asia/Shanghai', beta: true, dataJurisdiction: 'CN', languageVariant: 'ZH-CN' },
        'PH': { lang: 'EN', label: '필리핀 / English (Beta)', timeZone: 'Asia/Manila', beta: true, dataJurisdiction: 'PH' },
        'ID': { lang: 'EN', label: '인도네시아 / English (Beta)', timeZone: 'Asia/Jakarta', beta: true, dataJurisdiction: 'ID' },
        'TH': { lang: 'EN', label: '태국 / English (Beta)', timeZone: 'Asia/Bangkok', beta: true, dataJurisdiction: 'TH' },
        'KH': { lang: 'EN', label: '캄보디아 / English (Beta)', timeZone: 'Asia/Phnom_Penh', beta: true, dataJurisdiction: 'KH' },
        'SG': { lang: 'EN', label: '싱가포르 / English (Beta)', timeZone: 'Asia/Singapore', beta: true, dataJurisdiction: 'SG' },
        'MY': { lang: 'EN', label: '말레이시아 / English (Beta)', timeZone: 'Asia/Kuala_Lumpur', beta: true, dataJurisdiction: 'MY' },
        'BN': { lang: 'EN', label: '브루나이 / English (Beta)', timeZone: 'Asia/Brunei', beta: true, dataJurisdiction: 'BN' },
        'HK': { lang: 'EN', label: '홍콩 / ZH-HK · English (Beta)', timeZone: 'Asia/Hong_Kong', beta: true, dataJurisdiction: 'HK', languageVariant: 'ZH-HK' },
        'MO': { lang: 'EN', label: '마카오 / ZH-MO · English (Beta)', timeZone: 'Asia/Macau', beta: true, dataJurisdiction: 'MO', languageVariant: 'ZH-MO' },
        'JP': { lang: 'JP', label: '일본 / 日本語 (Beta)', timeZone: 'Asia/Tokyo' },
        'VA': { lang: 'LA', label: '바티칸 / Latin', timeZone: 'Europe/Rome' }
    };

    function getLangFromLocation(locationCode) {
        return (locationMeta[locationCode] && locationMeta[locationCode].lang) || locationCode || 'KR';
    }

    function dataJurisdictionForLocation(locationCode = state.selectedLocationCode) {
        const meta = locationMeta[locationCode];
        return (meta && meta.dataJurisdiction) || locationCode || 'KR';
    }

    function isIrelandJurisdiction(locationCode = state.selectedLocationCode) {
        return dataJurisdictionForLocation(locationCode) === 'IE';
    }

    function activeCountryMassModule(locationCode = state.selectedLocationCode) {
        return countryMassModuleForJurisdiction(dataJurisdictionForLocation(locationCode));
    }

    function hasCountryDailyReadings(locationCode = state.selectedLocationCode) {
        const module = activeCountryMassModule(locationCode);
        return !!(module && module.dailyReadings && typeof module.dailyReadings.url === 'function');
    }

    function usesUniversalisCountryReadings(locationCode = state.selectedLocationCode) {
        const module = activeCountryMassModule(locationCode);
        return !!(module && module.dailyReadings && /universalis/i.test(module.dailyReadings.provider || ''));
    }

    const targetLanguageOrder = ['VN', 'KR', 'EN', 'JP', 'LA'];

    function fallbackTargetLangFor(leftLang, preferred = DEFAULT_TARGET_LANG) {
        const left = normalizeSelectableLang(leftLang || 'KR', 'KR');
        const preferredLang = normalizeSelectableLang(preferred || DEFAULT_TARGET_LANG, DEFAULT_TARGET_LANG);
        if (preferredLang && preferredLang !== left && langMeta[preferredLang]) return preferredLang;
        return targetLanguageOrder.find(lang => lang !== left && langMeta[lang]) || DEFAULT_TARGET_LANG;
    }

    function targetLangForUiLanguage(uiLang, leftLang = state.currentLoc) {
        const left = normalizeSelectableLang(leftLang || 'KR', 'KR');
        const ui = normalizeSelectableLang(uiLang || DEFAULT_TARGET_LANG, DEFAULT_TARGET_LANG);
        if (ui === left) return normalizeDistinctTargetLang(left === 'KR' ? DEFAULT_TARGET_LANG : 'KR', left);
        return normalizeDistinctTargetLang(ui, left);
    }

    function normalizeDistinctTargetLang(value, leftLang = state.currentLoc) {
        const left = normalizeSelectableLang(leftLang || 'KR', 'KR');
        const target = normalizeSelectableLang(value || DEFAULT_TARGET_LANG, fallbackTargetLangFor(left));
        return target && target !== left ? target : fallbackTargetLangFor(left, target);
    }

    function shouldShowVietnameseReadingSourceSetting() {
        const originalLang = normalizeSelectableLang(state.currentLoc || 'KR', 'KR');
        const translationLang = normalizeSelectableLang(state.targetLang || DEFAULT_TARGET_LANG, DEFAULT_TARGET_LANG);
        return originalLang === 'VN' || translationLang === 'VN';
    }

    function syncVietnameseReadingSourceSettingVisibility() {
        const row = document.getElementById('vn-reading-source-row');
        if (!row) return false;
        const visible = shouldShowVietnameseReadingSourceSetting();
        row.hidden = !visible;
        row.style.display = visible ? 'flex' : 'none';
        row.setAttribute('aria-hidden', visible ? 'false' : 'true');
        return visible;
    }

    function syncTargetLanguageOptions() {
        const select = document.getElementById('set-target-lang');
        const left = normalizeSelectableLang(state.currentLoc || 'KR', 'KR');
        state.targetLang = normalizeDistinctTargetLang(state.targetLang, left);
        if (!select) return;
        Array.from(select.options).forEach(option => {
            const sameAsLeft = normalizeSelectableLang(option.value, '') === left;
            option.hidden = sameAsLeft;
            option.disabled = sameAsLeft;
        });
        select.value = state.targetLang;
        syncVietnameseReadingSourceSettingVisibility();
    }

    function updateRoleLegend(leftLang, rightLang) {
        const activeLangs = new Set([leftLang, rightLang].filter(lang => langMeta[lang]));
        const legend = document.getElementById('role-legend');
        if (!legend) return;
        const grid = legend.querySelector('.role-legend-grid');
        if (!grid) return;
        const groups = Array.from(legend.querySelectorAll('[data-legend-lang]'));
        groups.forEach(group => {
            const isActive = activeLangs.has(group.dataset.legendLang);
            group.hidden = !isActive;
            group.style.display = isActive ? '' : 'none';
            group.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        });
        [leftLang, rightLang].forEach(lang => {
            const group = groups.find(candidate => candidate.dataset.legendLang === lang);
            if (group) grid.appendChild(group);
        });
    }

    const hymnSeedData = [];

    const churchMapDefaults = {
        KR: { center: { lat: 37.5665, lng: 126.9780 }, zoom: 12, query: '가톨릭 성당 서울' },
        VN: { center: { lat: 10.7769, lng: 106.7009 }, zoom: 12, query: 'nhà thờ Công giáo Hồ Chí Minh' },
        US: { center: { lat: 40.7128, lng: -74.0060 }, zoom: 12, query: 'Catholic church New York' },
        EN: { center: { lat: 40.7128, lng: -74.0060 }, zoom: 12, query: 'Catholic church New York' },
        IE: { center: { lat: 53.3498, lng: -6.2603 }, zoom: 12, query: 'Catholic church Dublin Ireland' },
        'GB-NIR': { center: { lat: 54.5973, lng: -5.9301 }, zoom: 12, query: 'Catholic church Belfast Northern Ireland' },
        TW: { center: { lat: 25.0330, lng: 121.5654 }, zoom: 11, query: '天主教堂 台北 台灣' },
        CN: { center: { lat: 39.9042, lng: 116.4074 }, zoom: 11, query: '天主教堂 北京 中國' },
        PH: { center: { lat: 14.5995, lng: 120.9842 }, zoom: 11, query: 'Catholic church Manila Philippines' },
        ID: { center: { lat: -6.2088, lng: 106.8456 }, zoom: 11, query: 'gereja Katolik Jakarta Indonesia' },
        TH: { center: { lat: 13.7563, lng: 100.5018 }, zoom: 11, query: 'โบสถ์คาทอลิก กรุงเทพ ประเทศไทย' },
        KH: { center: { lat: 11.5564, lng: 104.9282 }, zoom: 11, query: 'ព្រះវិហារកាតូលិក ភ្នំពេញ កម្ពុជា' },
        SG: { center: { lat: 1.3521, lng: 103.8198 }, zoom: 12, query: 'Catholic church Singapore' },
        MY: { center: { lat: 3.1390, lng: 101.6869 }, zoom: 11, query: 'Catholic church Kuala Lumpur Malaysia' },
        BN: { center: { lat: 4.9031, lng: 114.9398 }, zoom: 11, query: 'Catholic church Bandar Seri Begawan Brunei' },
        HK: { center: { lat: 22.3193, lng: 114.1694 }, zoom: 11, query: '天主教堂 香港' },
        MO: { center: { lat: 22.1987, lng: 113.5439 }, zoom: 12, query: '天主教堂 澳門' },
        JP: { center: { lat: 35.6895, lng: 139.6917 }, zoom: 12, query: 'カトリック教会 東京' },
        LA: { center: { lat: 41.9029, lng: 12.4534 }, zoom: 13, query: 'chiesa cattolica Vaticano' }
    };

    let churchMap = null;
    let churchPlacesService = null;
    let churchInfoWindow = null;
    let churchInfoWindowOpen = false;
    let churchMarkers = [];
    let churchMapLoadPromise = null;
    let churchIdleTimer = null;
    let churchMapInitialized = false;
    let churchRenderedCountry = '';
    let churchMapsApiKey = '';
    let churchMapsApiKeyPromise = null;
    let churchSearchRequestId = 0;
    let churchInfoRequestId = 0;
    let gpsBishopRequestId = 0;
    const churchPlaceDetailsCache = new Map();
    const usMassTimesCache = new Map();
    const CHURCH_MAX_RESULTS = 120;
    const CHURCH_MAX_RESULTS_PER_QUERY = 60;
    const CHURCH_TEXT_SEARCH_PAGE_DELAY_MS = 1800;
    const GPS_BISHOP_CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;
    const GOOGLE_MAPS_CONFIG_ENDPOINT = window.ORDO_MAPS_CONFIG_ENDPOINT || 'https://us-central1-ordinary-mass-app.cloudfunctions.net/mapsConfig';
    const US_MASS_TIMES_ENDPOINT = window.ORDO_US_MASS_TIMES_ENDPOINT || 'https://us-central1-ordinary-mass-app.cloudfunctions.net/usMassTimesProxy';
    const BISHOP_DIRECTORY_ENDPOINT = window.ORDO_BISHOP_DIRECTORY_ENDPOINT || 'https://us-central1-ordinary-mass-app.cloudfunctions.net/bishopDirectoryProxy';

    function appLanguageName(langCode) {
        const names = {
            KR: '한국어',
            VN: 'Tiếng Việt',
            EN: 'English',
            JP: '日本語',
            LA: 'Latin'
        };
        return names[normalizeSelectableLang(langCode, 'KR')] || langCode || '';
    }

    function nativeHymnLabel(langCode) {
        const labels = {
            KR: '한국어 성가',
            VN: 'Thánh ca tiếng Việt',
            EN: 'English Hymns',
            JP: '日本語聖歌',
            LA: 'Cantus Latini'
        };
        return labels[normalizeSelectableLang(langCode, 'KR')] || labels.KR;
    }

    function translatedHymnLabel(langCode, uiLang = state.uiLang) {
        const labels = {
            KR: { KR: '한국어 성가', VN: 'Thánh ca tiếng Hàn', EN: 'Korean Hymns', JP: '韓国語聖歌', LA: 'Cantus Coreani' },
            VN: { KR: '베트남어 성가', VN: 'Thánh ca tiếng Việt', EN: 'Vietnamese Hymns', JP: 'ベトナム語聖歌', LA: 'Cantus Vietnamici' },
            EN: { KR: '영어 성가', VN: 'Thánh ca tiếng Anh', EN: 'English Hymns', JP: '英語聖歌', LA: 'Cantus Anglici' },
            JP: { KR: '일본어 성가', VN: 'Thánh ca tiếng Nhật', EN: 'Japanese Hymns', JP: '日本語聖歌', LA: 'Cantus Iaponici' },
            LA: { KR: '라틴어 성가', VN: 'Thánh ca tiếng Latinh', EN: 'Latin Hymns', JP: 'ラテン語聖歌', LA: 'Cantus Latini' }
        };
        const lang = normalizeSelectableLang(langCode, 'KR');
        const ui = normalizeSelectableLang(uiLang || 'KR', 'KR');
        return (labels[lang] && labels[lang][ui]) || nativeHymnLabel(lang);
    }

    function hymnOptionLabel(langCode, uiLang = state.uiLang) {
        const native = nativeHymnLabel(langCode);
        const translated = translatedHymnLabel(langCode, uiLang);
        return normalizeSelectableLang(langCode, 'KR') === normalizeSelectableLang(uiLang || 'KR', 'KR') || native === translated
            ? native
            : `${native} | ${translated}`;
    }

    function updateHymnCountryOptionLabels() {
        const select = document.getElementById('hymn-country');
        if (!select) return;
        Array.from(select.options).forEach(option => {
            option.textContent = hymnOptionLabel(option.value, state.uiLang || 'KR');
        });
    }

    function updateHymnPanelNativeTitle(langCode) {
        const select = document.getElementById('hymn-country');
        if (select) {
            updateHymnCountryOptionLabels();
            select.value = normalizeSelectableLang(langCode, 'KR');
        }
    }

    const hiddenHymnTags = new Set(['전례', '그레고리오']);
    const hymnCategoryOrder = ['연중', '대림', '성탄', '사순', '부활', '성령', '성체', '성심', '봉헌', '참회', '위령', '성모', '성인', '축가', '미사곡', '젠'];

    const auxUiText = {
        KR: {
            prayerTitle: '다국어 기도문',
            prayerNote: '',
            prayerWarning: '현재 기도문 작업중으로, 본문 표출이 정상적이지 않을 수 있습니다.',
            prayerPlaceholder: '기도문 제목 검색',
            prayerEmpty: '기도문 검색 결과가 없습니다. 업로드 기도문 파일을 연결하면 이 영역에서 제목과 본문을 검색합니다.',
            prayerBodyPlaceholder: '기도문 본문은 업로드 파일이 연결되면 이 자리에 표시됩니다.',
            hymnTitle: '성가 검색',
            hymnNote: '',
            hymnPlaceholder: '성가 번호, 제목, 가사 검색',
            hymnWarning: '현재 한국어/베트남어 성가 작업중으로, 가사 표출이 정상적이지 않습니다.',
            hymnCategoryAll: '전체',
            hymnEmpty: '성가 검색 결과가 없습니다. 업로드 성가 파일을 연결하면 이 영역에서 번호·제목·가사를 검색합니다.',
            hymnBodyPlaceholder: '가사 본문은 업로드 파일 연결 후 이 자리에 표시됩니다.',
            churchTitle: '인근 성당',
            churchNote: '아래 검색창에서 성당 이름을 검색하시면 성당 위치를 표시하며, GPS를 활성화 할 경우 인근의 성당이 표출됩니다.',
            churchPlaceholder: '성당 이름 검색',
            churchReady: '',
            churchFallback: '',
            search: '검색'
        },
        VN: {
            prayerTitle: 'Kinh nguyện đa ngôn ngữ',
            prayerNote: '',
            prayerWarning: 'Hiện đang xử lý phần kinh nguyện, nên nội dung có thể hiển thị chưa chính xác.',
            prayerPlaceholder: 'Tìm tên kinh nguyện',
            prayerEmpty: 'Không có kết quả tìm kiếm kinh nguyện. Khi nối tệp đã tải lên, bạn có thể tìm theo tên và nội dung tại đây.',
            prayerBodyPlaceholder: 'Nội dung kinh nguyện sẽ hiển thị ở đây sau khi nối tệp đã tải lên.',
            hymnTitle: 'Tìm thánh ca',
            hymnNote: '',
            hymnPlaceholder: 'Tìm số, tên, hoặc lời ca',
            hymnWarning: 'Hiện đang xử lý thánh ca tiếng Hàn/tiếng Việt, nên lời ca có thể hiển thị chưa chính xác.',
            hymnCategoryAll: 'Tất cả',
            hymnEmpty: 'Không có kết quả tìm kiếm thánh ca. Khi nối tệp thánh ca đã tải lên, bạn có thể tìm theo số, tên và lời ca.',
            hymnBodyPlaceholder: 'Lời bài hát sẽ hiển thị ở đây sau khi nối tệp đã tải lên.',
            churchTitle: 'Nhà thờ gần đây',
            churchNote: 'Hãy tìm tên nhà thờ trong ô bên dưới để hiển thị vị trí. Nếu bật GPS, các nhà thờ gần bạn sẽ được hiển thị.',
            churchPlaceholder: 'Tìm tên nhà thờ',
            churchReady: '',
            churchFallback: '',
            search: 'Tìm'
        },
        EN: {
            prayerTitle: 'Multilingual Prayers',
            prayerNote: '',
            prayerWarning: 'Prayers are currently being worked on, so text may not display correctly.',
            prayerPlaceholder: 'Search prayer title',
            prayerEmpty: 'No prayer results. Connect uploaded prayer files to search by title and body here.',
            prayerBodyPlaceholder: 'Prayer text will appear here once an uploaded file is connected.',
            hymnTitle: 'Hymn Search',
            hymnNote: '',
            hymnPlaceholder: 'Search hymn number, title, or lyrics',
            hymnWarning: 'Korean/Vietnamese hymns are currently being worked on, so lyrics may not display correctly.',
            hymnCategoryAll: 'All',
            hymnEmpty: 'No hymn results. Connect uploaded hymn files to search by number, title, and lyrics.',
            hymnBodyPlaceholder: 'Lyrics will appear here after an uploaded file is connected.',
            churchTitle: 'Nearby Churches',
            churchNote: 'Search for a church name below to display its location. If GPS is enabled, nearby churches will be shown.',
            churchPlaceholder: 'Search church name',
            churchReady: '',
            churchFallback: '',
            search: 'Search'
        },
        JP: {
            prayerTitle: '多言語の祈り',
            prayerNote: '',
            prayerWarning: '現在、祈り文を作業中のため、本文の表示が正常でない場合があります。',
            prayerPlaceholder: '祈りの題名を検索',
            prayerEmpty: '祈りの検索結果がありません。アップロードファイルを接続すると題名と本文を検索できます。',
            prayerBodyPlaceholder: 'アップロードファイルを接続すると祈りの本文がここに表示されます。',
            hymnTitle: '聖歌検索',
            hymnNote: '',
            hymnPlaceholder: '聖歌番号、題名、歌詞を検索',
            hymnWarning: '現在、韓国語/ベトナム語聖歌を作業中のため、歌詞の表示が正常でない場合があります。',
            hymnCategoryAll: 'すべて',
            hymnEmpty: '聖歌の検索結果がありません。アップロードファイルを接続すると番号、題名、歌詞を検索できます。',
            hymnBodyPlaceholder: 'アップロードファイルを接続すると歌詞がここに表示されます。',
            churchTitle: '近くの教会',
            churchNote: '下の検索欄で教会名を検索すると位置を表示します。GPSを有効にすると近くの教会が表示されます。',
            churchPlaceholder: '教会名を検索',
            churchReady: '',
            churchFallback: '',
            search: '検索'
        },
        LA: {
            prayerTitle: 'Preces multilingues',
            prayerNote: '',
            prayerWarning: 'Preces nunc parantur; textus non semper recte ostendi possunt.',
            prayerPlaceholder: 'Quaere titulum precis',
            prayerEmpty: 'Nullus exitus precum inventus est. Fasciculis additis coniunctis titulum et textum quaerere poteris.',
            prayerBodyPlaceholder: 'Textus precis hic apparebit cum fasciculus additus coniungetur.',
            hymnTitle: 'Cantus quaerere',
            hymnNote: '',
            hymnPlaceholder: 'Quaere numerum, titulum, vel verba',
            hymnWarning: 'Cantus Coreani/Vietnamici nunc parantur; verba cantuum non semper recte ostendi possunt.',
            hymnCategoryAll: 'Omnia',
            hymnEmpty: 'Nullus cantus inventus est. Fasciculis additis coniunctis numerum, titulum, et verba quaerere poteris.',
            hymnBodyPlaceholder: 'Verba cantus hic apparebunt cum fasciculus additus coniungetur.',
            churchTitle: 'Ecclesiae proximae',
            churchNote: 'Nomen ecclesiae infra quaere ut locus eius ostendatur. Si GPS activum est, ecclesiae proximae monstrabuntur.',
            churchPlaceholder: 'Quaere nomen ecclesiae',
            churchReady: '',
            churchFallback: '',
            search: 'Quaerere'
        }
    };

    function auxText() {
        return auxUiText[normalizeSelectableLang(state.uiLang || 'KR', 'KR')] || auxUiText.KR;
    }

    function setTextIfExists(id, text) {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    }

    function setHymnPanelTitleText(text) {
        const label = document.getElementById('hymn-panel-title-label');
        if (label) {
            label.textContent = text;
            return;
        }
        const title = document.getElementById('hymn-panel-title');
        if (!title) return;
        const span = document.getElementById('hymn-panel-title-native');
        if (!span) {
            title.textContent = text;
            return;
        }
        const firstTextNode = Array.from(title.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
        if (firstTextNode) firstTextNode.nodeValue = `${text} `;
        else title.insertBefore(document.createTextNode(`${text} `), span);
    }

    function localizeAuxPanels() {
        const dict = auxText();
        setTextIfExists('prayer-panel-title', dict.prayerTitle);
        setTextIfExists('prayer-panel-note', dict.prayerNote);
        setTextIfExists('prayer-dev-warning', dict.prayerWarning || '현재 기도문 작업중으로, 본문 표출이 정상적이지 않을 수 있습니다.');
        setTextIfExists('prayer-search-button', dict.search);
        setHymnPanelTitleText(dict.hymnTitle);
        setTextIfExists('hymn-dev-warning', dict.hymnWarning || '현재 한국어/베트남어 성가 작업중으로, 가사 표출이 정상적이지 않습니다.');
        setTextIfExists('hymn-search-button', dict.search);
        updateHymnCountryOptionLabels();
        setTextIfExists('church-panel-title', dict.churchTitle);
        setTextIfExists('church-panel-note', dict.churchNote);
        setTextIfExists('church-search-button', dict.search);
        const prayerSearch = document.getElementById('prayer-search');
        if (prayerSearch) prayerSearch.placeholder = dict.prayerPlaceholder;
        const hymnSearch = document.getElementById('hymn-search');
        if (hymnSearch) hymnSearch.placeholder = dict.hymnPlaceholder;
        const churchSearch = document.getElementById('church-search');
        if (churchSearch) churchSearch.placeholder = dict.churchPlaceholder;
    }

    function normalizeAuxSearch(value) {
        return cleanNodeText(value)
            .normalize('NFKD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .replace(/\s+/g, '')
            .normalize('NFKC');
    }

    function localizedFlatKeys(baseNames, langCode) {
        const lang = normalizeSelectableLang(langCode || 'KR', 'KR');
        const lower = lang.toLowerCase();
        return (baseNames || []).flatMap(base => [
            `${base}_${lang}`,
            `${base}_${lower}`,
            `${base}${lang}`,
            `${base}${lower}`,
            `${lang}_${base}`,
            `${lower}_${base}`
        ]);
    }

    function localizedObjectFromFlatEntry(entry, directValue, baseNames, defaultLang = 'KR') {
        const output = {};
        if (directValue && typeof directValue === 'object' && !Array.isArray(directValue)) {
            Object.keys(directValue).forEach(key => {
                const lang = normalizeSelectableLang(String(key).toUpperCase(), '');
                if (lang) output[lang] = directValue[key];
            });
        } else if (typeof directValue === 'string' && directValue.trim()) {
            const lang = normalizeSelectableLang(entry.lang || entry.language || entry.country || defaultLang, defaultLang);
            output[lang] = directValue;
        }
        SUPPORTED_LANGS.forEach(lang => {
            localizedFlatKeys(baseNames, lang).some(key => {
                const value = entry && entry[key];
                if (value === undefined || value === null || value === '') return false;
                output[lang] = value;
                return true;
            });
        });
        return Object.keys(output).length ? output : (directValue || {});
    }

    function localizedFlatValue(entry, directValue, baseNames, langCode, defaultLang = 'KR') {
        const value = localizedObjectFromFlatEntry(entry, directValue, baseNames, defaultLang);
        if (typeof value === 'string') return cleanNodeText(value);
        const lang = normalizeSelectableLang(langCode || defaultLang, defaultLang);
        return cleanNodeText(value[lang] || value[lang.toLowerCase()] || value.KR || value.kr || value.EN || value.en || Object.values(value).find(Boolean) || '');
    }

    function normalizeHymnTags(entry, country) {
        const tagSource = Array.isArray(entry.tags)
            ? [entry.book, ...entry.tags]
            : [entry.book, entry.tag, entry.category, entry.season, entry.part, entry.form, entry.type];
        return Array.from(new Set(tagSource
            .flatMap(value => Array.isArray(value) ? value : String(value || '').split(/[\/,|]/))
            .map(value => localizedFlatValue(entry, value, ['tag', 'category', 'season', 'part', 'form', 'type'], country))
            .map(cleanNodeText)
            .filter(value => value && !hiddenHymnTags.has(value))));
    }

    function normalizeHymnTranslations(entry) {
        const source = entry && entry.translations && typeof entry.translations === 'object' ? entry.translations : {};
        const output = {};
        SUPPORTED_LANGS.forEach(lang => {
            const raw = source[lang] || source[lang.toLowerCase()] || null;
            const title = cleanNodeText(raw && typeof raw === 'object' ? (raw.title || raw.name || '') : raw);
            if (title) output[lang] = { title };
        });
        return output;
    }

    function normalizeHymnScoreImages(entry) {
        const source = Array.isArray(entry.scoreImages)
            ? entry.scoreImages
            : (entry.scoreImage ? [entry.scoreImage] : []);
        return source.map((image, index) => {
            if (typeof image === 'string') {
                return { src: cleanNodeText(image), label: '' };
            }
            if (!image || typeof image !== 'object') return { src: '', label: '' };
            return {
                src: cleanNodeText(image.src || image.url || image.path || ''),
                label: cleanNodeText(image.label || image.caption || image.title || ((index + 1) + ''))
            };
        }).filter(image => image.src);
    }

    function hymnDisplayTitle(entry) {
        const number = cleanNodeText(entry.number || '');
        const title = cleanNodeText(entry.title || '');
        const fallback = [number, title].filter(Boolean).join('. ')
            .replace(/^(\d{1,3})\./, function(_, n) { return n.padStart(3, '0') + '.'; });
        return cleanNodeText(entry.displayTitle || fallback);
    }

    function getUploadedHymnData() {
        const data = Array.isArray(window.uploadedHymnData) && window.uploadedHymnData.length
            ? window.uploadedHymnData
            : (Array.isArray(window.hymnData) ? window.hymnData : []);
        return data.map(entry => {
            const country = normalizeSelectableLang(entry.country || entry.lang || entry.language || 'KR', 'KR');
            const number = cleanNodeText(entry.number || entry.no || entry.num || '');
            const title = localizedFlatValue(entry, entry.title || entry.name || '', ['title', 'name'], country);
            const book = cleanNodeText(entry.book || entry.sourceBook || '');
            const tags = normalizeHymnTags(entry, country);
            const rawVerses = Array.isArray(entry.verses) ? entry.verses : [];
            const verses = rawVerses.map((verse, index) => ({
                label: cleanNodeText((verse && verse.label) || (index + 1) + ')'),
                text: localizedFlatValue(verse || {}, (verse && verse.text) || '', ['text', 'lyrics', 'body'], country)
            })).filter(verse => verse.label || verse.text);
            const verseText = verses.map(verse => [verse.label, verse.text].filter(Boolean).join(' ')).join('\n\n');
            const text = localizedFlatValue(entry, entry.text || entry.lyrics || entry.body || '', ['text', 'lyrics', 'body'], country) || verseText;
            const firstLine = localizedFlatValue(entry, entry.firstLine || '', ['firstLine'], country);
            const copyright = localizedFlatValue(entry, entry.copyright || entry.copyrightNotice || '', ['copyright', 'copyrightNotice'], country);
            const normalized = {
                id: cleanNodeText(entry.id || (country + '-hymn-' + (number || title))),
                country,
                number,
                title,
                book,
                displayTitle: cleanNodeText(entry.displayTitle || ''),
                tags,
                category: tags.join(' / '),
                translations: normalizeHymnTranslations(entry),
                firstLine,
                searchAliases: Array.isArray(entry.searchAliases) ? entry.searchAliases.map(cleanNodeText).filter(Boolean) : [],
                composer: cleanNodeText(entry.composer || ''),
                lyricist: cleanNodeText(entry.lyricist || ''),
                arranger: cleanNodeText(entry.arranger || entry.arrangedBy || ''),
                selector: cleanNodeText(entry.selector || entry.selectedBy || entry.songSelector || ''),
                scripture: localizedFlatValue(entry, entry.scripture || entry.bibleVerse || entry.scriptureReference || '', ['scripture', 'bibleVerse', 'scriptureReference'], country),
                lyricsNote: localizedFlatValue(entry, entry.lyricsNote || '', ['lyricsNote'], country),
                copyright,
                sourceFormat: cleanNodeText(entry.sourceFormat || entry.fileFormat || entry.originalFormat || ''),
                originalFileName: cleanNodeText(entry.originalFileName || entry.originalFile || ''),
                originalFileSize: Number(entry.originalFileSize || 0) || 0,
                originalFileAvailable: !!entry.originalFileAvailable,
                scoreImages: normalizeHymnScoreImages(entry),
                scoreNote: localizedFlatValue(entry, entry.scoreNote || '', ['scoreNote'], country),
                verses,
                text,
                lyrics: text
            };
            normalized.displayTitle = hymnDisplayTitle(normalized);
            return normalized;
        }).filter(entry => entry.title || entry.number || entry.text);
    }

    function getHymnData() {
        const uploaded = getUploadedHymnData();
        return uploaded.length ? uploaded : hymnSeedData;
    }

    function hymnTargetLanguage(country) {
        const hymnLang = normalizeSelectableLang(country || state.currentLoc || 'KR', 'KR');
        const configuredTarget = normalizeSelectableLang(state.targetLang || DEFAULT_TARGET_LANG, DEFAULT_TARGET_LANG);
        const localLang = normalizeSelectableLang(state.currentLoc || 'KR', 'KR');
        if (hymnLang === configuredTarget && localLang !== hymnLang) return localLang;
        return normalizeDistinctTargetLang(configuredTarget, hymnLang);
    }

    const hymnTranslationRecords = new Map();

    const canonicalCatholicHymnTitleTranslations = Object.freeze({
        '자비송': { VN: 'Kinh Thương Xót', EN: 'Kyrie (Lord, Have Mercy)', LA: 'Kyrie eleison', JP: 'あわれみの賛歌（キリエ）' },
        '대영광송': { VN: 'Kinh Vinh Danh', EN: 'Gloria', LA: 'Gloria', JP: '栄光の賛歌（グロリア）' },
        '거룩하시도다': { VN: 'Thánh, Thánh, Thánh', EN: 'Sanctus (Holy, Holy, Holy)', LA: 'Sanctus', JP: '感謝の賛歌（サンクトゥス）' },
        '하느님의 어린양': { VN: 'Kinh Chiên Thiên Chúa', EN: 'Agnus Dei (Lamb of God)', LA: 'Agnus Dei', JP: '平和の賛歌（アニュス・デイ）' },
        '신앙의 신비여': { VN: 'Mầu nhiệm đức tin', EN: 'The Mystery of Faith', LA: 'Mysterium fidei', JP: '信仰の神秘' },
        '주님의 기도': { VN: 'Kinh Lạy Cha', EN: 'The Lord’s Prayer', LA: 'Pater noster', JP: '主の祈り' },
        '주님의 기도 – 주님께 나라와': { VN: 'Kinh Lạy Cha – Vì vương quyền, uy lực và vinh quang là của Chúa', EN: 'The Lord’s Prayer – For the Kingdom, the Power and the Glory Are Yours', LA: 'Pater noster – Quia tuum est regnum et potestas et gloria', JP: '主の祈り－国と力と栄光は限りなくあなたのもの' },
        '미사시작': { VN: 'Mở đầu Thánh lễ', EN: 'Beginning of Mass', LA: 'Initium Missae', JP: 'ミサの開祭' },
        '미사 시작': { VN: 'Mở đầu Thánh lễ', EN: 'Beginning of Mass', LA: 'Initium Missae', JP: 'ミサの開祭' },
        '영광송': { VN: 'Kinh Sáng Danh', EN: 'Doxology', LA: 'Doxologia', JP: '栄唱' },
        '복음 환호송': { VN: 'Tung hô Tin Mừng', EN: 'Gospel Acclamation', LA: 'Acclamatio ante Evangelium', JP: '福音朗読前のアレルヤ唱' },
        '복음환호송': { VN: 'Tung hô Tin Mừng', EN: 'Gospel Acclamation', LA: 'Acclamatio ante Evangelium', JP: '福音朗読前のアレルヤ唱' },
        '봉헌': { VN: 'Dâng lễ', EN: 'Offertory', LA: 'Offertorium', JP: '奉納' },
        '마침 성가': { VN: 'Ca kết lễ', EN: 'Recessional Hymn', LA: 'Cantus ad recessum', JP: '閉祭の歌' },
        '미사 끝': { VN: 'Kết lễ', EN: 'Conclusion of Mass', LA: 'Conclusio Missae', JP: 'ミサの閉祭' },
        '입당송': { VN: 'Ca nhập lễ', EN: 'Entrance Antiphon', LA: 'Antiphona ad introitum', JP: '入祭唱' },
        '화답송': { VN: 'Thánh vịnh đáp ca', EN: 'Responsorial Psalm', LA: 'Psalmus responsorius', JP: '答唱詩編' },
        '연송': { VN: 'Thánh ca liên xướng', EN: 'Tract', LA: 'Tractus', JP: '詠唱' },
        '영성체': { VN: 'Hiệp lễ', EN: 'Holy Communion', LA: 'Communio', JP: '聖体拝領' },
        '영성체송': { VN: 'Ca hiệp lễ', EN: 'Communion Antiphon', LA: 'Antiphona ad communionem', JP: '拝領唱' },
        '보편 지향 기도 응답': { VN: 'Đáp lời nguyện tín hữu', EN: 'Response to the Universal Prayer', LA: 'Responsum orationis universalis', JP: '共同祈願の応答' },
        '보편지향기도 응답': { VN: 'Đáp lời nguyện tín hữu', EN: 'Response to the Universal Prayer', LA: 'Responsum orationis universalis', JP: '共同祈願の応答' },
        '아멘': { VN: 'Amen', EN: 'Amen', LA: 'Amen', JP: 'アーメン' },
        '알렐루야': { VN: 'Alleluia', EN: 'Alleluia', LA: 'Alleluia', JP: 'アレルヤ' },
        '사도신경': { VN: 'Kinh Tin Kính các Tông đồ', EN: 'The Apostles’ Creed', LA: 'Symbolum Apostolorum', JP: '使徒信条' },
        '성모송': { VN: 'Kinh Kính Mừng', EN: 'Hail Mary', LA: 'Ave Maria', JP: 'アヴェ・マリアの祈り' },
        '평화의 인사': { VN: 'Chúc bình an', EN: 'Sign of Peace', LA: 'Pax Domini', JP: '平和のあいさつ' },
        '마침영광송 - 아멘': { VN: 'Vinh tụng ca kết thúc – Amen', EN: 'Concluding Doxology – Amen', LA: 'Doxologia finalis – Amen', JP: '結びの栄唱－アーメン' },
        '마침영광송 – 아멘': { VN: 'Vinh tụng ca kết thúc – Amen', EN: 'Concluding Doxology – Amen', LA: 'Doxologia finalis – Amen', JP: '結びの栄唱－アーメン' },
        '주님의 몸 주님의 피': { VN: 'Mình và Máu Chúa', EN: 'The Body and Blood of the Lord', LA: 'Corpus et Sanguis Domini', JP: '主の御からだと御血' },
        '나의 주님 나의 하느님': { VN: 'Lạy Chúa của con, lạy Thiên Chúa của con', EN: 'My Lord and My God', LA: 'Dominus meus et Deus meus', JP: 'わたしの主、わたしの神' },
        '주님께 나라와 권능과': { VN: 'Vì vương quyền, uy lực và vinh quang là của Chúa', EN: 'For the Kingdom, the Power and the Glory Are Yours', LA: 'Quia tuum est regnum et potestas et gloria', JP: '国と力と栄光は限りなくあなたのもの' },
        '병인 순교자 노래': { VN: 'Thánh ca các vị tử đạo Bính Dần', EN: 'Hymn of the Byeongin Martyrs', LA: 'Canticum Martyrum Byeongin', JP: '丙寅迫害の殉教者の歌' },
        '순교자 믿음': { VN: 'Đức tin của các vị tử đạo', EN: 'Faith of the Martyrs', LA: 'Fides martyrum', JP: '殉教者の信仰' },
        '글로리아 높으신 이의 탄생': { JP: 'グロリア、いと高き方の誕生' },
        '거룩한 주의 십자가': { JP: '主の聖なる十字架' },
        '주의 승천 찬미하네': { JP: '主の昇天をたたえよう' },
        '주의 얼이': { JP: '主の霊が' },
        '주의 잔치': { JP: '主の宴' },
        '주의 성심 홀로': { JP: '主の聖心だけが' },
        '간절한 주의 사랑': { JP: '主の切なる愛' },
        '주의 영광': { JP: '主の栄光' },
        '부드러운 주의 손이': { JP: '主の優しい御手が' },
        '주의 나라 임하면': { JP: '主の国が来るとき' },
        '우리는 주의 사랑을': { JP: 'わたしたちは主の愛を' },
        '주의 말씀 듣고': { JP: '主のみことばを聞いて' },
        '주의 빵을 서로 나누세': { JP: '主のパンを分かち合おう' },
        '오 나의 자비로운 주여 Spirit song': { JP: 'ああ、慈しみ深い主よ · Spirit Song' },
        '주의 거룩하심 생각할 때 When I look into Your holiness': { JP: '主の聖性を仰ぐとき · When I Look into Your Holiness' },
        '주의 길을 버리고': { JP: '主の道を離れて' },
        '주의 사랑으로 사랑합니다 I love you with the love of the Lord': { JP: '主の愛で愛します · I Love You with the Love of the Lord' },
        '주의 이름 높이며 Lord I lift Your name on high': { JP: '主のみ名を掲げて · Lord, I Lift Your Name on High' },
        '주의 인자는 끝이 없고 The steadfast love': { JP: '主の慈しみは尽きることなく · The Steadfast Love' },
        '주의 자비가 내려와 Mercy is falling': { JP: '主の慈しみが降り注ぐ · Mercy Is Falling' },
        '주의 정결한 피로': { JP: '主の清い御血によって' },
        '어둠도 La ténèbre': { JP: '闇も · La ténèbre' },
        '우리 모일 때 주 성령 As we gather may Your Spirit work': { JP: 'わたしたちが集うとき、主の霊が · As We Gather, May Your Spirit Work' },
        '경배하리 내 온 맘 다해 You’re worthy of my praise': { JP: '心を尽くして礼拝します · You’re Worthy of My Praise' },
        '오라 우리가 Come and let us go': { JP: 'さあ、共に行こう · Come and Let Us Go' },
        '온 맘 다해 With all my heart': { JP: '心を尽くして · With All My Heart' }
    });

    function canonicalHymnTitleTranslation(entry, targetLang) {
        const target = normalizeSelectableLang(targetLang, DEFAULT_TARGET_LANG);
        const sourceTitle = cleanNodeText(entry && entry.title);
        const direct = canonicalCatholicHymnTitleTranslations[sourceTitle];
        if (direct && direct[target]) return direct[target];
        const prefix = ['주님의 기도', '주님께 나라와 권능과', '마침영광송']
            .find(key => sourceTitle.startsWith(key));
        if (!prefix) return '';
        const base = canonicalCatholicHymnTitleTranslations[prefix]
            || canonicalCatholicHymnTitleTranslations['마침영광송 - 아멘'];
        if (!base || !base[target]) return '';
        const suffix = sourceTitle.slice(prefix.length).replace(/^[\s·:–—-]+/u, '').trim();
        return suffix && /^[\p{L}\p{N}\s'’.,()\-–—]+$/u.test(suffix) ? `${base[target]} · ${suffix}` : base[target];
    }

    function normalizeHymnTranslatedTitle(entry, targetLang, value) {
        const canonical = canonicalHymnTitleTranslation(entry, targetLang);
        if (canonical) return canonical;
        const target = normalizeSelectableLang(targetLang, DEFAULT_TARGET_LANG);
        let title = cleanNodeText(value);
        if (target === 'KR') title = cleanNodeText(enforceCatholicTranslationTerminology(title, 'KR'));
        if (target === 'VN') title = title.replace(/Bài hát Zabi/giu, 'Kinh Thương Xót').replace(/Bài hát Gloria/giu, 'Kinh Vinh Danh');
        if (target === 'EN') title = title.replace(/Zabi Song/giu, 'Kyrie (Lord, Have Mercy)').replace(/Gloria Song/giu, 'Gloria');
        if (target === 'LA') title = title.replace(/Zabi Song/giu, 'Kyrie eleison').replace(/Gloria Song/giu, 'Gloria');
        if (target === 'JP') title = title.replace(/自費ソング/gu, 'あわれみの賛歌（キリエ）').replace(/注意/gu, '主の').replace(/主人/gu, '主');
        return title;
    }

    function usesAutomaticHymnTranslation(country) {
        const hymnLang = normalizeSelectableLang(country || 'KR', 'KR');
        return hymnTargetLanguage(hymnLang) !== hymnLang;
    }

    function hymnTranslationRecordKey(entry, targetLang) {
        const source = [entry && entry.id, entry && entry.title, entry && entry.text].filter(Boolean).join('\n');
        return `${normalizeSelectableLang(targetLang, DEFAULT_TARGET_LANG)}:${cleanNodeText(entry && entry.id)}:${stableTextHash(source)}`;
    }

    function hymnTranslationRecord(entry, country) {
        const targetLang = hymnTargetLanguage(country);
        return hymnTranslationRecords.get(hymnTranslationRecordKey(entry, targetLang)) || null;
    }

    function hymnTranslationUiText(kind, targetLang) {
        const targetName = appLanguageName(targetLang);
        const uiLang = normalizeSelectableLang(state.uiLang || 'KR', 'KR');
        const messages = {
            KR: {
                pending: `${targetName} 번역 중...`,
                action: `${targetName} 번역`,
                retry: `${targetName} 번역 다시 시도`,
                failed: `${targetName} 번역을 불러오지 못했습니다.`
            },
            VN: {
                pending: `Đang dịch sang ${targetName}...`,
                action: `Dịch sang ${targetName}`,
                retry: `Thử dịch lại sang ${targetName}`,
                failed: `Không tải được bản dịch ${targetName}.`
            },
            EN: {
                pending: `Translating into ${targetName}...`,
                action: `Translate into ${targetName}`,
                retry: `Retry ${targetName} translation`,
                failed: `The ${targetName} translation could not be loaded.`
            },
            JP: {
                pending: `${targetName}に翻訳中...`,
                action: `${targetName}に翻訳`,
                retry: `${targetName}翻訳を再試行`,
                failed: `${targetName}翻訳を読み込めませんでした。`
            },
            LA: {
                pending: `In ${targetName} vertitur...`,
                action: `In ${targetName} verte`,
                retry: `Conversionem ${targetName} repete`,
                failed: `Conversio ${targetName} onerari non potuit.`
            }
        };
        return (messages[uiLang] || messages.KR)[kind] || '';
    }

    function parseHymnTranslationPayload(value) {
        const raw = String(value || '').trim();
        const unfenced = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();
        const jsonCandidate = unfenced.match(/\{[\s\S]*\}/);
        if (!jsonCandidate) throw new Error('성가 번역 결과 형식이 올바르지 않습니다.');
        const parsed = JSON.parse(jsonCandidate[0]);
        const title = cleanNodeText(parsed && (parsed.title || parsed.name || ''));
        const lyrics = String(parsed && (parsed.lyrics || parsed.text || '') || '').trim();
        if (!lyrics) throw new Error('성가 번역 결과가 비어 있습니다.');
        return { title, lyrics };
    }

    function hymnTranslationUsesTargetScript(result, targetLang) {
        const translated = `${cleanNodeText(result && result.title)}\n${String(result && result.lyrics || '')}`;
        const targetScript = {
            KR: /[\uAC00-\uD7A3]/,
            VN: /[\u00C0-\u00C3\u00C8-\u00CA\u00CC\u00CD\u00D2-\u00D5\u00D9\u00DA\u00DD\u0102\u0110\u0128\u0168\u01A0\u01AF\u1EA0-\u1EF9]/i,
            JP: /[\u3040-\u30FF\u3400-\u9FFF]/
        }[targetLang];
        return !targetScript || targetScript.test(translated);
    }

    async function translateHymnWithGemini(entry, targetLang) {
        const targetName = aiLanguageNames[targetLang] || targetLang;
        const sourceLang = normalizeSelectableLang(entry && entry.country, 'VN');
        const sourceName = aiLanguageNames[sourceLang] || sourceLang;
        const prompt = [
            `Translate this Catholic hymn from ${sourceName} into ${targetName}.`,
            `Source language: ${sourceName}. Target language: ${targetName}.`,
            `Translate every ${sourceName} sentence into natural ${targetName}; do not copy the source-language sentences into the result.`,
            catholicTranslationStyleInstruction(targetLang),
            'Return strict JSON only in this shape: {"title":"target-language title","lyrics":"target-language lyrics"}.',
            'Preserve stanza numbers, refrain labels, and paragraph breaks.',
            'Do not add commentary or Markdown fences.',
            '',
            JSON.stringify({
                sourceLanguage: sourceName,
                targetLanguage: targetName,
                title: cleanNodeText(entry && entry.title),
                lyrics: plainTextFromHtml(entry && entry.text)
            })
        ].filter(Boolean).join('\n');
        const payload = await fetchGeminiViaFirebase('translate', {
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.2, responseMimeType: 'application/json' }
        }, {
            timeoutMs: 30000,
            label: 'Hymn translation'
        });
        const result = parseHymnTranslationPayload(geminiTextFromPayload(payload));
        if (!hymnTranslationUsesTargetScript(result, targetLang)) {
            throw new Error(`${targetName} translation did not contain the target-language script.`);
        }
        return {
            title: normalizeHymnTranslatedTitle(entry, targetLang, result.title),
            lyrics: enforceCatholicTranslationTerminology(result.lyrics, targetLang)
        };
    }

    const hymnMachineTranslationLanguageCodes = {
        KR: 'ko',
        VN: 'vi',
        EN: 'en',
        JP: 'ja',
        LA: 'la'
    };

    function splitHymnTranslationText(value, maxLength = 3000) {
        const source = String(value || '').trim();
        if (!source) return [];
        const chunks = [];
        let remaining = source;
        while (remaining.length > maxLength) {
            let cutAt = remaining.lastIndexOf('\n', maxLength);
            if (cutAt < Math.floor(maxLength * 0.55)) cutAt = remaining.lastIndexOf(' ', maxLength);
            if (cutAt < Math.floor(maxLength * 0.55)) cutAt = maxLength;
            chunks.push(remaining.slice(0, cutAt).trim());
            remaining = remaining.slice(cutAt).trim();
        }
        if (remaining) chunks.push(remaining);
        return chunks;
    }

    async function translateHymnTextWithMachineFallback(value, sourceLang, targetLang) {
        const sourceCode = hymnMachineTranslationLanguageCodes[sourceLang] || 'auto';
        const targetCode = hymnMachineTranslationLanguageCodes[targetLang];
        if (!targetCode) throw new Error('The fallback translation language is not supported.');
        const chunks = splitHymnTranslationText(value, 1200);
        const translatedChunks = [];
        for (const chunk of chunks) {
            const response = await fetchWithTimeout(GEMINI_PROXY_ENDPOINT, {
                method: 'POST',
                cache: 'no-cache',
                timeoutMs: 25000,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    kind: 'translateFallback',
                    sourceLang: sourceCode,
                    targetLang: targetCode,
                    text: chunk
                })
            });
            if (!response.ok) throw new Error(`Fallback translation failed: HTTP ${response.status}`);
            const payload = await response.json();
            const translated = String(payload && payload.text || '');
            if (!cleanNodeText(translated)) throw new Error('Fallback translation returned an empty result.');
            translatedChunks.push(translated.trim());
        }
        return enforceCatholicTranslationTerminology(translatedChunks.join('\n'), targetLang);
    }

    async function translateHymnWithFallback(entry, targetLang) {
        try {
            return await translateHymnWithGemini(entry, targetLang);
        } catch (geminiError) {
            const sourceLang = normalizeSelectableLang(entry && entry.country, 'VN');
            try {
                const [title, lyrics] = await Promise.all([
                    translateHymnTextWithMachineFallback(cleanNodeText(entry && entry.title), sourceLang, targetLang),
                    translateHymnTextWithMachineFallback(plainTextFromHtml(entry && entry.text), sourceLang, targetLang)
                ]);
                const result = { title: normalizeHymnTranslatedTitle(entry, targetLang, title), lyrics };
                if (!hymnTranslationUsesTargetScript(result, targetLang)) throw new Error('Fallback result did not contain the target-language script.');
                return result;
            } catch (fallbackError) {
                const primaryMessage = geminiError && geminiError.message ? geminiError.message : 'AI hymn translation failed.';
                const fallbackMessage = fallbackError && fallbackError.message ? fallbackError.message : 'Fallback translation failed.';
                throw new Error(`${primaryMessage} / ${fallbackMessage}`);
            }
        }
    }

    function requestAutomaticHymnTranslation(entry, country, force = false) {
        if (!entry || !entry.text || !usesAutomaticHymnTranslation(country)) return null;
        const targetLang = hymnTargetLanguage(country);
        const key = hymnTranslationRecordKey(entry, targetLang);
        const existing = hymnTranslationRecords.get(key);
        if (!force && existing && ['pending', 'done'].includes(existing.status)) return existing;
        hymnTranslationRecords.set(key, { status: 'pending', targetLang });
        translateHymnWithFallback(entry, targetLang).then(result => {
            hymnTranslationRecords.set(key, {
                status: 'done',
                targetLang,
                title: result.title,
                text: result.lyrics
            });
            if (state.selectedHymnId === entry.id) renderHymnPanel();
        }).catch(error => {
            hymnTranslationRecords.set(key, {
                status: 'error',
                targetLang,
                message: error && error.message ? error.message : '성가 번역 실패'
            });
            if (state.selectedHymnId === entry.id) renderHymnPanel();
        });
        return hymnTranslationRecords.get(key);
    }

    function hymnTranslatedTitle(entry, country) {
        const targetLang = hymnTargetLanguage(country);
        const record = hymnTranslationRecord(entry, country);
        if (record && record.status === 'done' && record.title) return normalizeHymnTranslatedTitle(entry, targetLang, record.title);
        const stored = entry && entry.translations && entry.translations[targetLang];
        const storedTitle = cleanNodeText(stored && stored.title);
        if (storedTitle) return normalizeHymnTranslatedTitle(entry, targetLang, storedTitle);
        return '';
    }

    window.retryHymnTranslation = function(id, country) {
        const entry = getHymnData().find(item => cleanNodeText(item && item.id) === cleanNodeText(id));
        if (!entry) return;
        requestAutomaticHymnTranslation(entry, country, true);
        renderHymnPanel();
    };

    function hymnDetailLabels() {
        return {
            lyrics: '\uAC00\uC0AC',
            lyricsPending: '\uAC00\uC0AC \uC790\uB8CC\uAC00 \uC5F0\uACB0\uB418\uBA74 \uC774 \uC790\uB9AC\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.',
            ai: 'AI \uBC88\uC5ED',
            composer: '\uC791\uACE1',
            lyricist: '\uC791\uC0AC',
            arranger: '\uD3B8\uACE1',
            selector: '\uC120\uACE1',
            scripture: '\uC131\uACBD\uAD6C\uC808',
            score: '\uC545\uBCF4',
            scorePending: '\uC545\uBCF4 \uC774\uBBF8\uC9C0\uB97C \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4.',
            copyright: '\uC800\uC791\uAD8C'
        };
    }

    function hymnLyricsHtml(value, langCode = '') {
        let html = escapeHtml(value).replace(/\*\*([^*\n]+)\*\*/g, '<strong class="hymn-lyric-emphasis">$1</strong>');
        html = html.replace(/\[\s*(?:(?:ĐK|ÐK|DK|Đ|Ð|D|R|℟|Ref)\.?|후렴구?|후렴|refrain|chorus|antiphona|antiphon|antífona|ant\.?|điệp\s*(?:khúc|ca|xướng)|diep\s*(?:khuc|ca|xuong)|đáp\s*ca|dap\s*ca|コーラス|リフレイン|答唱(?:詩編|詩篇)?)(?=\s|:|：|\.|\)|\x5d|-|$)[^\]\n]*\]/giu, '<span class="hymn-structure-label">$&</span>');
        return html.replace(/(^|\r?\n|<br\s*\/?\s*>)(\s*)((?:(?:ĐK|ÐK|DK|Đ|Ð|D|R|℟|Ref)\.|(?:\uD6C4\uB834\uAD6C?|\uD6C4\uB834|コーラス|リフレイン)(?:[):：.]|\s*-)?|(?:refrain|chorus|antiphona|antiphon|antífona|điệp\s*(?:khúc|ca|xướng)|diep\s*(?:khuc|ca|xuong)|đáp\s*ca|dap\s*ca|答唱(?:詩編|詩篇)?)(?:[:：.)\]-])?|\d{1,2}(?:[A-Z]|[-–]\d{1,2})?[.):]))(?=\s|&nbsp;|$)/giu,
            '$1$2<span class="hymn-structure-label">$3</span>');
    }

    function hymnUsageTags(entry) {
        const book = cleanNodeText(entry && entry.book);
        const tags = Array.isArray(entry && entry.tags) ? entry.tags : (entry && entry.category ? [entry.category] : []);
        return tags
            .map(cleanNodeText)
            .filter(tag => tag && tag !== book)
            .filter((tag, index, values) => values.indexOf(tag) === index);
    }

    const hymnMetadataTerms = [
        [['가톨릭성가'], { KR: '가톨릭성가', VN: 'Thánh ca Công giáo', EN: 'Catholic Hymns', JP: 'カトリック聖歌', LA: 'Cantus catholici' }],
        [['야훼이레 (신판)'], { KR: '야훼이레 (신판)', VN: 'Gia-vê Di-rê (ấn bản mới)', EN: 'Yahweh Jireh (New Edition)', JP: 'ヤハウェ・イルエ（新版）', LA: 'Iahveh Iireh (editio nova)' }],
        [['Tuyển tập Thánh ca Việt Nam quyển 1'], { KR: '베트남 성가 선집 제1권', VN: 'Tuyển tập Thánh ca Việt Nam quyển 1', EN: 'Vietnamese Hymn Collection, Vol. 1', JP: 'ベトナム聖歌選集 第1巻', LA: 'Collectio cantuum Vietnamicorum I' }],
        [['Tuyển tập Thánh ca Việt Nam quyển 2'], { KR: '베트남 성가 선집 제2권', VN: 'Tuyển tập Thánh ca Việt Nam quyển 2', EN: 'Vietnamese Hymn Collection, Vol. 2', JP: 'ベトナム聖歌選集 第2巻', LA: 'Collectio cantuum Vietnamicorum II' }],
        [['연중', 'Mùa Thường Niên'], { KR: '연중', VN: 'Mùa Thường Niên', EN: 'Ordinary Time', JP: '年間', LA: 'Tempus per annum' }],
        [['대림', 'Mùa Vọng'], { KR: '대림', VN: 'Mùa Vọng', EN: 'Advent', JP: '待降節', LA: 'Adventus' }],
        [['성탄', 'Mùa Giáng Sinh', 'Giáng Sinh'], { KR: '성탄', VN: 'Mùa Giáng Sinh', EN: 'Christmas', JP: '降誕節', LA: 'Tempus Nativitatis' }],
        [['사순', 'Mùa Chay'], { KR: '사순', VN: 'Mùa Chay', EN: 'Lent', JP: '四旬節', LA: 'Quadragesima' }],
        [['부활', 'Mua Phuc Sinh', 'Phục Sinh'], { KR: '부활', VN: 'Mùa Phục Sinh', EN: 'Easter', JP: '復活節', LA: 'Tempus paschale' }],
        [['부활/승천'], { KR: '부활/승천', VN: 'Phục Sinh / Thăng Thiên', EN: 'Easter / Ascension', JP: '復活／昇天', LA: 'Pascha / Ascensio' }],
        [['성령', 'Chúa Thánh Thần'], { KR: '성령', VN: 'Chúa Thánh Thần', EN: 'Holy Spirit', JP: '聖霊', LA: 'Spiritus Sanctus' }],
        [['성체', 'Thánh Thể'], { KR: '성체', VN: 'Thánh Thể', EN: 'Eucharist', JP: '聖体', LA: 'Eucharistia' }],
        [['성심', 'Thánh Tâm'], { KR: '성심', VN: 'Thánh Tâm', EN: 'Sacred Heart', JP: '聖心', LA: 'Sacratissimum Cor' }],
        [['Thánh Thể và Thánh Tâm'], { KR: '성체·성심', VN: 'Thánh Thể và Thánh Tâm', EN: 'Eucharist and Sacred Heart', JP: '聖体・聖心', LA: 'Eucharistia et Sacratissimum Cor' }],
        [['봉헌', 'Dâng Lễ'], { KR: '봉헌', VN: 'Dâng Lễ', EN: 'Offertory', JP: '奉納', LA: 'Offertorium' }],
        [['참회'], { KR: '참회', VN: 'Sám Hối', EN: 'Penitential', JP: '回心', LA: 'Paenitentia' }],
        [['위령', 'Cầu Hồn'], { KR: '위령', VN: 'Cầu Hồn', EN: 'For the Dead', JP: '死者のため', LA: 'Pro defunctis' }],
        [['성모', 'Đức Mẹ'], { KR: '성모', VN: 'Đức Mẹ', EN: 'Blessed Virgin Mary', JP: '聖母', LA: 'Beata Maria Virgo' }],
        [['성인', 'Các Thánh'], { KR: '성인', VN: 'Các Thánh', EN: 'Saints', JP: '聖人', LA: 'Sancti' }],
        [['축가'], { KR: '축가', VN: 'Ca Mừng', EN: 'Festal Hymns', JP: '祝歌', LA: 'Cantus festivi' }],
        [['미사곡', 'Bộ Lễ'], { KR: '미사곡', VN: 'Bộ Lễ', EN: 'Mass Settings', JP: 'ミサ曲', LA: 'Ordinarium Missae' }],
        [['떼제'], { KR: '떼제', VN: 'Taizé', EN: 'Taizé', JP: 'テゼ', LA: 'Taizé' }],
        [['생활성가'], { KR: '생활성가', VN: 'Thánh ca Đương đại', EN: 'Contemporary Hymns', JP: '現代聖歌', LA: 'Cantus hodierni' }],
        [['Ca Nguyện'], { KR: '기도 성가', VN: 'Ca Nguyện', EN: 'Prayer Hymns', JP: '祈りの聖歌', LA: 'Cantus precum' }],
        [['Thánh Vịnh'], { KR: '시편 성가', VN: 'Thánh Vịnh', EN: 'Psalms', JP: '詩編', LA: 'Psalmi' }],
        [['Nhập Lễ'], { KR: '입당', VN: 'Nhập Lễ', EN: 'Entrance', JP: '入祭', LA: 'Introitus' }],
        [['Hiệp Lễ'], { KR: '영성체', VN: 'Hiệp Lễ', EN: 'Communion', JP: '聖体拝領', LA: 'Communio' }],
        [['Tuần Thánh'], { KR: '성주간', VN: 'Tuần Thánh', EN: 'Holy Week', JP: '聖週間', LA: 'Hebdomada Sancta' }],
        [['Hiệp Nhất'], { KR: '일치', VN: 'Hiệp Nhất', EN: 'Christian Unity', JP: '一致', LA: 'Unitas christianorum' }],
        [['Thánh Hiến'], { KR: '축성 생활', VN: 'Thánh Hiến', EN: 'Consecrated Life', JP: '奉献生活', LA: 'Vita consecrata' }],
        [['Xuân - Hôn Nhân - Cha Mẹ'], { KR: '봄·혼인·부모', VN: 'Xuân - Hôn Nhân - Cha Mẹ', EN: 'Spring, Marriage and Parents', JP: '春・結婚・両親', LA: 'Ver, matrimonium et parentes' }],
        [['Linh Mục và Thánh Hiến'], { KR: '사제·축성 생활', VN: 'Linh Mục và Thánh Hiến', EN: 'Priesthood and Consecrated Life', JP: '司祭・奉献生活', LA: 'Sacerdotium et vita consecrata' }],
        [['Hôn Phối và Cha Mẹ'], { KR: '혼인·부모', VN: 'Hôn Phối và Cha Mẹ', EN: 'Marriage and Parents', JP: '結婚・両親', LA: 'Matrimonium et parentes' }],
        [['Xuân và Trung Thu'], { KR: '봄·추석', VN: 'Xuân và Trung Thu', EN: 'Spring and Mid-Autumn', JP: '春・中秋', LA: 'Ver et medium autumnum' }],
        [['Loan Báo Tin Mừng'], { KR: '복음 선포', VN: 'Loan Báo Tin Mừng', EN: 'Evangelization', JP: '福音宣教', LA: 'Evangelizatio' }],
        [['Kết Lễ'], { KR: '마침', VN: 'Kết Lễ', EN: 'Recessional', JP: '閉祭', LA: 'Recessus' }]
    ];
    const hymnMetadataLabelByAlias = new Map();
    hymnMetadataTerms.forEach(([aliases, labels]) => aliases.forEach((alias) => {
        hymnMetadataLabelByAlias.set(cleanNodeText(alias).normalize('NFKC').toLocaleLowerCase(), labels);
    }));

    function localizedHymnMetadataTerm(value, sourceLang, uiLang = state.uiLang) {
        const raw = cleanNodeText(value);
        if (!raw) return '';
        const source = normalizeSelectableLang(sourceLang || 'KR', 'KR');
        const ui = normalizeSelectableLang(uiLang || 'KR', 'KR');
        if (source === ui) return raw;
        const labels = hymnMetadataLabelByAlias.get(raw.normalize('NFKC').toLocaleLowerCase());
        return (labels && labels[ui]) || raw;
    }

    function hymnTitleTagsHtml(entry, sourceLang = entry && entry.country) {
        return hymnUsageTags(entry)
            .map(tag => '<span class="aux-prayer-book-tag hymn-title-tag">' + escapeHtml(localizedHymnMetadataTerm(tag, sourceLang)) + '</span>')
            .join('');
    }

    function renderHymnDetail(entry, country) {
        const labels = hymnDetailLabels();
        const targetLang = hymnTargetLanguage(country);
        const automaticTranslation = usesAutomaticHymnTranslation(country);
        const translationRecord = hymnTranslationRecord(entry, country);
        const versesHtml = Array.isArray(entry.verses) && entry.verses.length
            ? entry.verses.map(verse => {
                const verseText = cleanNodeText(verse && verse.text);
                const labelHtml = verse.label ? '<span class="hymn-structure-label">' + escapeHtml(verse.label || '') + '</span> ' : '';
                return '<div class="hymn-verse-block"><p class="aux-prayer-body">' + labelHtml + hymnLyricsHtml(verseText, entry.country) + '</p></div>';
            }).join('')
            : '';
        const lyricsHtml = versesHtml || (entry.text
            ? '<p class="aux-prayer-body">' + hymnLyricsHtml(entry.text, entry.country) + '</p>'
            : '<p class="aux-muted">' + labels.lyricsPending + '</p>');
        const lyricsNoteHtml = entry.lyricsNote ? '<p class="aux-muted">' + escapeHtml(entry.lyricsNote) + '</p>' : '';
        let translatedLyricsHtml = '';
        if (automaticTranslation && translationRecord && translationRecord.status === 'done') {
            translatedLyricsHtml = '<p class="aux-prayer-body hymn-translated-lyrics">' + hymnLyricsHtml(translationRecord.text, targetLang) + '</p>';
        } else if (automaticTranslation && translationRecord && translationRecord.status === 'pending') {
            translatedLyricsHtml = '<p class="aux-muted hymn-translation-status">' + escapeHtml(hymnTranslationUiText('pending', targetLang)) + '</p>';
        } else if (automaticTranslation) {
            const failedText = translationRecord && translationRecord.status === 'error'
                ? '<p class="hymn-translation-error">' + escapeHtml(hymnTranslationUiText('failed', targetLang)) + '</p>'
                : '';
            const actionText = hymnTranslationUiText(translationRecord && translationRecord.status === 'error' ? 'retry' : 'action', targetLang);
            translatedLyricsHtml = failedText + '<div class="hymn-detail-actions"><button type="button" class="btn-ai-trans hymn-ai-button" onclick="retryHymnTranslation(' + escapeInlineArg(entry.id) + ', ' + escapeInlineArg(country) + ')">🤖 ' + escapeHtml(actionText) + '</button></div>';
        } else {
            translatedLyricsHtml = entry.text
                ? '<div class="hymn-detail-actions">' + makeAIButton(entry.text, '', targetLang) + '</div>'
                : '<button type="button" class="btn-ai-trans hymn-ai-button" disabled>' + labels.ai + ' (' + escapeHtml(appLanguageName(targetLang)) + ')</button>';
        }
        const metaRows = [
            entry.lyricist ? labels.lyricist + ': ' + entry.lyricist : '',
            entry.composer ? labels.composer + ': ' + entry.composer : '',
            entry.arranger ? labels.arranger + ': ' + entry.arranger : '',
            entry.selector ? labels.selector + ': ' + entry.selector : '',
            entry.scripture ? labels.scripture + ': ' + entry.scripture : '',
        ].filter(Boolean);
        const metaHtml = metaRows.length
            ? '<div class="hymn-meta">' + metaRows.map(row => {
                return '<div>' + escapeHtml(row) + '</div>';
            }).join('') + '</div>'
            : '';
        const scoreImages = Array.isArray(entry.scoreImages) ? entry.scoreImages : [];
        const scoreBodyHtml = scoreImages.length
            ? '<div class="hymn-score-list">' + scoreImages.map((image, index) => {
                const label = image.label || (index + 1);
                return [
                    '<figure class="hymn-score-figure">',
                    '<img class="hymn-score-image" loading="lazy" decoding="async" src="' + escapeAttr(image.src) + '" alt="' + escapeAttr((entry.displayTitle || entry.title || '') + ' ' + labels.score + ' ' + label) + '">',
                    image.label ? '<figcaption class="hymn-score-caption">' + escapeHtml(image.label) + '</figcaption>' : '',
                    '</figure>'
                ].join('');
            }).join('') + '</div>'
            : '<p class="aux-muted">' + labels.scorePending + '</p>';
        const scoreNoteHtml = entry.scoreNote ? '<p class="aux-muted">' + escapeHtml(entry.scoreNote) + '</p>' : '';
        const scoreHtml = [
            '<div class="hymn-detail-section hymn-score-section">',
            scoreBodyHtml,
            scoreNoteHtml,
            '</div>'
        ].join('');
        const copyrightText = cleanNodeText(entry.copyright || '');
        const copyrightDisplay = copyrightText && /^[©ⓒ]/u.test(copyrightText) ? copyrightText : (copyrightText ? 'ⓒ ' + copyrightText : '');
        const copyrightHtml = copyrightDisplay
            ? '<div class="hymn-detail-section aux-muted">' + escapeHtml(copyrightDisplay) + '</div>'
            : '';

        const translatedTitle = hymnTranslatedTitle(entry, country);
        const sourceTitleHtml = escapeHtml(entry.displayTitle || entry.title);
        const translatedTitleHtml = translatedTitle ? '<span class="aux-prayer-translation-title">' + escapeHtml(translatedTitle) + '</span>' : '';
        const titleHtml = sourceTitleHtml + translatedTitleHtml + hymnTitleTagsHtml(entry, country);
        const translationPaneTitle = translatedTitle || hymnTranslationUiText(translationRecord && translationRecord.status === 'pending' ? 'pending' : 'action', targetLang);

        return [
            '<article class="hymn-detail">',
            '<h3>' + titleHtml + '</h3>',
            metaHtml,
            '<div class="aux-two-column hymn-translation-grid">',
            '<section class="aux-language-block hymn-original-pane">',
            '<div class="aux-language-label">' + escapeHtml(appLanguageName(country)) + '</div>',
            '<div class="aux-prayer-title">' + escapeHtml(entry.title || entry.displayTitle) + '</div>',
            lyricsHtml,
            lyricsNoteHtml,
            '</section>',
            '<section class="aux-language-block aux-language-block-translation hymn-translation-pane">',
            '<div class="aux-language-label">' + escapeHtml(appLanguageName(targetLang)) + '</div>',
            '<div class="aux-prayer-title">' + escapeHtml(translationPaneTitle) + '</div>',
            translatedLyricsHtml,
            '</section>',
            '</div>',
            scoreHtml,
            copyrightHtml,
            '</article>'
        ].join('');
    }

    window.openHymnDetail = function(id) {
        const normalizedId = cleanNodeText(id);
        const willOpen = state.selectedHymnId !== normalizedId;
        state.selectedHymnId = willOpen ? normalizedId : '';
        if (willOpen) {
            const country = normalizeSelectableLang((document.getElementById('hymn-country') || {}).value || state.currentLoc || 'KR', 'KR');
            const entry = getHymnData().find(item => cleanNodeText(item && item.id) === normalizedId);
            if (entry) requestAutomaticHymnTranslation(entry, country);
        }
        renderHymnPanel();
        if (!willOpen) return;
        requestAnimationFrame(() => {
            const detailId = 'hymn-detail-' + normalizedId.replace(/[^\w-]+/g, '-');
            const detail = document.getElementById(detailId);
            if (detail) detail.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        });
    };

    function hymnCategorySort(a, b) {
        const ai = hymnCategoryOrder.indexOf(a);
        const bi = hymnCategoryOrder.indexOf(b);
        if (ai !== -1 || bi !== -1) return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
        return a.localeCompare(b, 'ko');
    }

    function syncHymnCategoryOptions(rows, selectedValue, resetCategory) {
        const select = document.getElementById('hymn-category');
        if (!select) return '';
        const dict = auxText();
        const categories = Array.from(new Set((rows || []).flatMap(entry => entry.tags || [])))
            .filter(tag => tag && !hiddenHymnTags.has(tag))
            .sort(hymnCategorySort);
        const current = resetCategory ? '' : cleanNodeText(selectedValue || select.value || '');
        select.innerHTML = '';
        const allOption = document.createElement('option');
        allOption.value = '';
        allOption.textContent = dict.hymnCategoryAll || '전체';
        select.appendChild(allOption);
        categories.forEach(tag => {
            const option = document.createElement('option');
            option.value = tag;
            const sourceLang = rows && rows[0] ? rows[0].country : state.currentLoc;
            option.textContent = localizedHymnMetadataTerm(tag, sourceLang);
            select.appendChild(option);
        });
        select.value = categories.includes(current) ? current : '';
        return select.value;
    }

    function activeCountryAuxModule(registryName) {
        const registry = globalThis[registryName];
        if (!registry || typeof registry !== 'object') return null;
        return registry[dataJurisdictionForLocation()] || null;
    }

    function countryAuxDevelopmentMessage(kind) {
        const ui = normalizeSelectableLang(state.uiLang || 'KR', 'KR');
        const locationCode = state.selectedLocationCode || 'IE';
        const country = (localizedCountryNames[ui] && localizedCountryNames[ui][locationCode]) || locationCode;
        const labels = {
            KR: { hymns: '성가집', prayers: '공식 기도서', pending: '제작중' },
            VN: { hymns: 'Thánh ca', prayers: 'Sách kinh chính thức', pending: 'Đang phát triển' },
            EN: { hymns: 'Hymnal', prayers: 'Official prayer book', pending: 'Under development' },
            JP: { hymns: '聖歌集', prayers: '公式祈祷書', pending: '制作中' },
            LA: { hymns: 'Liber cantuum', prayers: 'Liber precum officialis', pending: 'In praeparatione' }
        };
        const copy = labels[ui] || labels.KR;
        return `${country} ${copy[kind]} (${copy.pending})`;
    }

    function renderHymnPanel(options = {}) {
        localizeAuxPanels();
        const country = normalizeSelectableLang((document.getElementById('hymn-country') || {}).value || state.currentLoc || 'KR', 'KR');
        const query = normalizeAuxSearch((document.getElementById('hymn-search') || {}).value || '');
        const root = document.getElementById('hymn-results');
        const dict = auxText();
        updateHymnPanelNativeTitle(country);
        if (!root) return;
        const countryModule = activeCountryAuxModule('countryHymnData');
        if (countryModule && countryModule.status === 'under-development') {
            syncHymnCategoryOptions([], '', true);
            root.innerHTML = `<div class="aux-empty">${escapeHtml(countryAuxDevelopmentMessage('hymns'))}</div>`;
            requestAuxSearchSync();
            return;
        }
        const countryRows = getHymnData()
            .filter(entry => normalizeSelectableLang(entry.country || 'KR', 'KR') === country);
        const category = syncHymnCategoryOptions(countryRows, (document.getElementById('hymn-category') || {}).value || '', !!options.resetCategory);
        const rows = countryRows
            .filter(entry => !category || (entry.tags || []).includes(category))
            .filter(entry => {
                if (!query) return true;
                return normalizeAuxSearch([entry.number, entry.title, entry.displayTitle, entry.book, (entry.tags || []).join(' '), (entry.searchAliases || []).join(' '), entry.firstLine, entry.text, entry.lyricist, entry.composer, entry.arranger, entry.selector, entry.scripture, entry.copyright].join(' ')).includes(query);
            });
        if (!rows.length) {
            root.innerHTML = '<div class="aux-empty">' + escapeHtml(appLanguageName(country)) + ' ' + escapeHtml(dict.hymnEmpty) + '</div>';
            requestAuxSearchSync();
            return;
        }
        if (state.selectedHymnId && !rows.some(entry => entry.id === state.selectedHymnId)) state.selectedHymnId = '';
        const selected = state.selectedHymnId ? rows.find(entry => entry.id === state.selectedHymnId) : null;

        const targetLang = hymnTargetLanguage(country);

        const listHtml = rows.map(entry => {
            const tagHtml = entry.book ? '<span class="aux-pill">' + escapeHtml(localizedHymnMetadataTerm(entry.book, country)) + '</span>' : '';
            const selectedClass = selected && selected.id === entry.id ? ' is-selected' : '';
            const detailId = 'hymn-detail-' + cleanNodeText(entry.id).replace(/[^\w-]+/g, '-');
            const inlineDetailHtml = selected && selected.id === entry.id
                ? '<div id="' + escapeAttr(detailId) + '" class="hymn-inline-detail">' + renderHymnDetail(selected, country) + '</div>'
                : '';

            const translatedTitle = hymnTranslatedTitle(entry, country);
            const translationRecord = hymnTranslationRecord(entry, country);
            const pendingTitle = usesAutomaticHymnTranslation(country) && translationRecord && translationRecord.status === 'pending'
                ? hymnTranslationUiText('pending', targetLang)
                : '';
            const sourceTitleHtml = escapeHtml(entry.displayTitle || entry.title);
            const titleTagHtml = hymnTitleTagsHtml(entry, country);
            const titleHtml = translatedTitle || pendingTitle
                ? sourceTitleHtml + '<span class="aux-prayer-translation-title">' + escapeHtml(translatedTitle || pendingTitle) + '</span>' + titleTagHtml
                : sourceTitleHtml + titleTagHtml;

            return [
                '<article class="hymn-list-item' + selectedClass + '">',
                '<div class="hymn-tags">' + tagHtml + '</div>',
                '<button type="button" class="hymn-title-button" aria-expanded="' + (selectedClass ? 'true' : 'false') + '" aria-controls="' + escapeAttr(detailId) + '" onclick="openHymnDetail(' + escapeInlineArg(entry.id) + ')"><span class="hymn-title-text">' + titleHtml + '</span><span class="hymn-disclosure" aria-hidden="true">▼</span></button>',
                '</article>',
                inlineDetailHtml
            ].join('');
        }).join('');
        root.innerHTML = '<div class="hymn-layout"><div class="hymn-list">' + listHtml + '</div></div>';
        requestAuxSearchSync();
    }

    function googleMapsApiKey() {
        return String(window.ORDO_GOOGLE_MAPS_API_KEY || window.GOOGLE_MAPS_API_KEY || churchMapsApiKey || '').trim();
    }

    async function fetchGoogleMapsApiKey() {
        const inlineKey = String(window.ORDO_GOOGLE_MAPS_API_KEY || window.GOOGLE_MAPS_API_KEY || '').trim();
        if (inlineKey) return inlineKey;
        if (churchMapsApiKey) return churchMapsApiKey;
        if (!GOOGLE_MAPS_CONFIG_ENDPOINT || /YOUR_|example\.com/i.test(GOOGLE_MAPS_CONFIG_ENDPOINT)) return '';
        if (!churchMapsApiKeyPromise) {
            churchMapsApiKeyPromise = fetchWithTimeout(GOOGLE_MAPS_CONFIG_ENDPOINT, {
                method: 'GET',
                headers: { 'Accept': 'application/json' },
                timeoutMs: 8000
            }).then(async response => {
                if (!response.ok) throw new Error(`mapsConfig HTTP ${response.status}`);
                const payload = await response.json();
                churchMapsApiKey = String(payload && (payload.apiKey || payload.key) || '').trim();
                return churchMapsApiKey;
            }).catch(error => {
                console.warn('Google Maps 설정을 불러오지 못해 iframe 지도로 대체합니다.', error);
                churchMapsApiKeyPromise = null;
                return '';
            });
        }
        return churchMapsApiKeyPromise;
    }

    function googleMapsEmbedUrl(query) {
        return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=14&output=embed`;
    }

    function churchCountryFromLocation(value = state.selectedLocationCode || state.currentLoc) {
        const code = String(value || '').trim().toUpperCase();
        return locationMeta[code] ? code : normalizeSelectableLang(code || 'KR', 'KR');
    }

    function churchMapDefaultForLang(langCode = state.selectedLocationCode || state.currentLoc) {
        const code = churchCountryFromLocation(langCode);
        return churchMapDefaults[code] || churchMapDefaults[getLangFromLocation(code)] || churchMapDefaults.KR;
    }

    function setChurchStatus(text) {
        const status = document.getElementById('church-map-status');
        if (status) status.textContent = text || '';
    }

    function setChurchCaption(text) {
        const caption = document.getElementById('church-map-caption');
        if (caption) {
            caption.textContent = '';
            caption.hidden = true;
        }
    }

    function churchFoundText(count) {
        const lang = normalizeSelectableLang(state.uiLang || 'KR', 'KR');
        if (lang === 'VN') return `Đã tìm thấy ${count} nhà thờ trong vùng bản đồ đang hiển thị.`;
        if (lang === 'EN') return `${count} churches found in the visible map area.`;
        if (lang === 'JP') return `表示中の地図範囲で${count}件の教会を見つけました。`;
        if (lang === 'LA') return `${count} ecclesiae intra conspectum tabulae inventae sunt.`;
        return `현재 지도 영역에서 성당 ${count}곳을 찾았습니다.`;
    }

    function showChurchFallback(query = '') {
        const frame = document.getElementById('church-map-frame');
        const mapNode = document.getElementById('church-map');
        const fallbackQuery = query || churchMapDefaultForLang().query;
        if (mapNode) mapNode.hidden = true;
        if (frame) {
            frame.hidden = false;
            frame.src = googleMapsEmbedUrl(fallbackQuery);
        }
        setChurchStatus(auxText().churchReady);
        setChurchCaption('');
    }

    window.gm_authFailure = function() {
        churchMapInitialized = false;
        const input = document.getElementById('church-search');
        showChurchFallback(cleanNodeText(input && input.value));
    };

    async function loadGoogleMapsForChurches() {
        if (window.google && google.maps && google.maps.places) return Promise.resolve();
        const key = await fetchGoogleMapsApiKey();
        if (!key) return Promise.reject(new Error('Google Maps API key is not configured.'));
        if (churchMapLoadPromise) return churchMapLoadPromise;
        churchMapLoadPromise = new Promise((resolve, reject) => {
            const callbackName = `__ordoChurchMapsReady_${Date.now()}`;
            window[callbackName] = () => {
                delete window[callbackName];
                resolve();
            };
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&libraries=places&callback=${callbackName}&loading=async`;
            script.async = true;
            script.defer = true;
            script.onerror = () => reject(new Error('Google Maps JavaScript API load failed.'));
            document.head.appendChild(script);
        });
        return churchMapLoadPromise;
    }

    function getGpsPositionForChurchMap(options = {}) {
        return new Promise(resolve => {
            if (!(state.useGps && navigator.geolocation)) {
                resolve(null);
                return;
            }
            navigator.geolocation.getCurrentPosition(
                pos => {
                    const lat = Number(pos && pos.coords && pos.coords.latitude);
                    const lng = Number(pos && pos.coords && pos.coords.longitude);
                    const accuracy = Number(pos && pos.coords && pos.coords.accuracy);
                    if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
                        resolve(null);
                        return;
                    }
                    state.gpsCoordinates = { lat, lon: lng };
                    resolve({
                        lat,
                        lng,
                        accuracy: Number.isFinite(accuracy) ? accuracy : null
                    });
                },
                () => resolve(null),
                { timeout: 8000, maximumAge: options.forceFresh ? 0 : 60000, enableHighAccuracy: true }
            );
        });
    }

    function clearChurchMarkers() {
        churchMarkers.forEach(marker => marker.setMap(null));
        churchMarkers = [];
    }

    function churchDetailLabels() {
        const lang = normalizeSelectableLang(state.uiLang || 'KR', 'KR');
        const labels = {
            KR: { address: '주소', diocese: '교구', phone: '전화', website: '홈페이지', priest: '사제', sisters: '수녀', massTimes: '미사 시간', massTimesPeriod: '미사 시간 기준', maps: 'Google 지도', loading: '상세 정보를 불러오는 중입니다.', unavailable: '확인되지 않음', official: '공식 홈페이지에서 확인' },
            VN: { address: 'Địa chỉ', diocese: 'Giáo phận', phone: 'Điện thoại', website: 'Trang web', priest: 'Linh mục', sisters: 'Nữ tu', massTimes: 'Giờ lễ', massTimesPeriod: 'Thời gian áp dụng', maps: 'Google Maps', loading: 'Đang tải thông tin chi tiết.', unavailable: 'Chưa xác nhận', official: 'Xem trên trang chính thức' },
            EN: { address: 'Address', diocese: 'Diocese', phone: 'Phone', website: 'Website', priest: 'Priest', sisters: 'Sisters', massTimes: 'Mass times', massTimesPeriod: 'Schedule period', maps: 'Google Maps', loading: 'Loading details.', unavailable: 'Not confirmed', official: 'Check the official website' },
            JP: { address: '住所', diocese: '教区', phone: '電話', website: '公式サイト', priest: '司祭', sisters: '修道女', massTimes: 'ミサ時間', massTimesPeriod: '適用期間', maps: 'Google マップ', loading: '詳細情報を読み込んでいます。', unavailable: '未確認', official: '公式サイトで確認' },
            LA: { address: 'Inscriptio', diocese: 'Dioecesis', phone: 'Telephonum', website: 'Pagina', priest: 'Sacerdos', sisters: 'Sorores', massTimes: 'Horae Missae', massTimesPeriod: 'Tempus indicis', maps: 'Google Maps', loading: 'Notitiae onerantur.', unavailable: 'Non confirmatum', official: 'Vide paginam officialem' }
        };
        return labels[lang] || labels.EN;
    }

    function churchLocalDetailsForPlace(place) {
        const source = globalThis.churchLocalDetails && typeof globalThis.churchLocalDetails === 'object'
            ? globalThis.churchLocalDetails
            : {};
        const placeId = cleanNodeText(place && place.place_id);
        const name = cleanNodeText(place && place.name).toLowerCase();
        const normalizeChurchLookup = value => cleanNodeText(value).toLowerCase()
            .normalize('NFKC')
            .replace(/천주교|가톨릭|catholic|roman catholic|nhà thờ|giao xu|giáo xứ|họ đạo|giáo điểm|カトリック/gu, '')
            .replace(/성당|본당|교회|church|parish|教会/gu, '')
            .replace(/[^\p{L}\p{N}]+/gu, '');
        const normalizeChurchContext = value => {
            let normalized = normalizeSearchText(value);
            if (/\b(?:ho chi minh|sai gon|tphcm|tp hcm)\b/.test(normalized)) {
                normalized += ' ho chi minh sai gon tphcm';
            }
            if (/\b(?:can tho|tpct)\b/.test(normalized)) {
                normalized += ' can tho tpct';
            }
            return normalized;
        };
        const normalizedName = normalizeChurchLookup(name);
        const normalizeChurchTokens = value => normalizeSearchText(value)
            .replace(/\b(?:천주교|가톨릭|성당|본당|교회|catholic|roman|church|parish|the|of|nhà|thờ|giao|giáo|xứ|họ|đạo|điểm|công|カトリック|教会)\b/gu, ' ')
            .split(/\s+/)
            .filter(token => token.length >= 2 || /^\d+$/.test(token));
        const placeNameTokens = new Set(normalizeChurchTokens(name));
        const candidates = (Array.isArray(globalThis.churchLocalDetailRecords) ? globalThis.churchLocalDetailRecords : [])
            .map(record => {
                const recordNames = [
                    record && record.name,
                    record && record.directoryName,
                    record && record.officialDirectoryName,
                    ...(Array.isArray(record && record.aliases) ? record.aliases : [])
                ].filter(Boolean);
                let nameScore = 0;
                recordNames.forEach(value => {
                    const recordKey = normalizeChurchLookup(value);
                    if (!recordKey || !normalizedName) return;
                    if (recordKey === normalizedName) {
                        nameScore = Math.max(nameScore, 1000 + recordKey.length);
                        return;
                    }
                    if (recordKey.length >= 4 && normalizedName.includes(recordKey)) {
                        nameScore = Math.max(nameScore, 500 + recordKey.length);
                        return;
                    }
                    if (normalizedName.length >= 4 && recordKey.includes(normalizedName)) {
                        nameScore = Math.max(nameScore, 450 + normalizedName.length);
                        return;
                    }
                    const recordTokens = new Set(normalizeChurchTokens(value));
                    const shared = Array.from(recordTokens).filter(token => placeNameTokens.has(token));
                    const coverage = shared.length / Math.max(recordTokens.size, placeNameTokens.size, 1);
                    if (shared.length >= 2 && coverage >= 0.72) {
                        nameScore = Math.max(nameScore, 300 + shared.length * 10);
                    }
                });
                return { record, nameScore };
            })
            .filter(candidate => candidate.nameScore > 0);
        if (candidates.length) {
            const placeContext = normalizeChurchContext([
                place && place.formatted_address,
                place && place.vicinity,
                place && place.diocese
            ].filter(Boolean).join(' '));
            const tokens = Array.from(new Set(
                placeContext.split(/\s+/).filter(token => token.length >= 2 || /^\d+$/.test(token))
            ));
            const placePoint = churchPointCoordinates(place);
            const ranked = candidates.map((candidate, index) => {
                const record = candidate.record;
                const recordContext = normalizeChurchContext([
                    record.address, record.diocese, record.deanery
                ].filter(Boolean).join(' '));
                const recordTokens = recordContext.split(/\s+/);
                let score = candidate.nameScore
                    + tokens.reduce((sum, token) => sum + (recordTokens.includes(token) ? 10 : 0), 0);
                let distanceKm = Number.POSITIVE_INFINITY;
                const recordPoint = churchPointCoordinates(record);
                if (placePoint && recordPoint) {
                    const latitudeScale = Math.cos((placePoint.lat + recordPoint.lat) * Math.PI / 360);
                    const dx = (placePoint.lng - recordPoint.lng) * 111.32 * latitudeScale;
                    const dy = (placePoint.lat - recordPoint.lat) * 110.57;
                    distanceKm = Math.sqrt(dx * dx + dy * dy);
                    if (distanceKm <= 1) score += 200;
                    else if (distanceKm <= 5) score += 100;
                    else if (distanceKm <= 20) score += 30;
                }
                return { record, index, score, distanceKm };
            }).sort((a, b) => b.score - a.score || a.distanceKm - b.distanceKm || a.index - b.index);
            return ranked[0].record;
        }
        return (placeId && source[placeId])
            || (name && source[name])
            || (normalizedName && source[normalizedName])
            || {};
    }

    function churchPointCoordinates(value) {
        const location = value && value.geometry && value.geometry.location
            ? value.geometry.location
            : value;
        const lat = Number(location && (typeof location.lat === 'function' ? location.lat() : (location.lat ?? location.latitude)));
        const lng = Number(location && (typeof location.lng === 'function' ? location.lng() : (location.lng ?? location.longitude)));
        return Number.isFinite(lat) && Number.isFinite(lng) ? { lat, lng } : null;
    }

    function usMassTimesCacheKey(lat, lng) {
        return `${Number(lat).toFixed(3)}:${Number(lng).toFixed(3)}`;
    }

    async function fetchUsMassTimesNearby(lat, lng) {
        const key = usMassTimesCacheKey(lat, lng);
        if (usMassTimesCache.has(key)) return usMassTimesCache.get(key);
        const promise = fetchWithTimeout(US_MASS_TIMES_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ lat: Number(lat), lon: Number(lng), page: 1 }),
            cache: 'no-cache',
            timeoutMs: 15000
        }).then(async response => {
            if (!response.ok) throw new Error(`USCCB/MassTimes HTTP ${response.status}`);
            const payload = await response.json();
            return Array.isArray(payload && payload.churches) ? payload.churches : [];
        }).catch(error => {
            usMassTimesCache.delete(key);
            throw error;
        });
        usMassTimesCache.set(key, promise);
        return promise;
    }

    function usMassTimeText(item) {
        const serviceType = cleanNodeText(item && item.serviceType);
        if (!/^(?:Weekend|Week Days|Holy Days)$/i.test(serviceType)) return '';
        const time = [cleanNodeText(item && item.start), cleanNodeText(item && item.end)]
            .filter(Boolean)
            .map(value => value.replace(/:\d{2}$/, ''))
            .join('–');
        return [
            cleanNodeText(item && item.day),
            time,
            cleanNodeText(item && item.language),
            cleanNodeText(item && item.comment)
        ].filter(Boolean).join(' · ');
    }

    function normalizeUsMassTimesChurch(church) {
        if (!church || typeof church !== 'object') return null;
        const dioceseName = cleanNodeText(church.dioceseName);
        const dioceseType = cleanNodeText(church.dioceseType);
        const massTimes = (Array.isArray(church.worshipTimes) ? church.worshipTimes : [])
            .map(usMassTimeText)
            .filter(Boolean);
        const address = [
            cleanNodeText(church.address),
            cleanNodeText(church.city),
            cleanNodeText(church.state),
            cleanNodeText(church.postalCode)
        ].filter(Boolean).join(', ');
        return {
            place_id: church.id ? `masstimes-${church.id}` : '',
            name: cleanNodeText(church.name),
            formatted_address: address,
            phone: cleanNodeText(church.phone),
            website: String(church.website || '').trim(),
            priestNames: churchDetailList(church.pastor),
            diocese: [dioceseType, dioceseName].filter(Boolean).join(' of '),
            massTimes,
            massTimesPeriod: [
                'USCCB / MassTimes.org',
                cleanNodeText(church.lastUpdate) ? `updated ${cleanNodeText(church.lastUpdate)}` : ''
            ].filter(Boolean).join(' · '),
            massTimesSourceUrl: 'https://www.usccb.org/mass-times',
            geometry: Number.isFinite(Number(church.latitude)) && Number.isFinite(Number(church.longitude))
                ? { location: { lat: Number(church.latitude), lng: Number(church.longitude) } }
                : null
        };
    }

    function churchCoordinateDistanceMeters(left, right) {
        const a = churchPointCoordinates(left);
        const b = churchPointCoordinates(right);
        if (!a || !b) return Number.POSITIVE_INFINITY;
        const rad = value => value * Math.PI / 180;
        const dLat = rad(b.lat - a.lat);
        const dLng = rad(b.lng - a.lng);
        const sinLat = Math.sin(dLat / 2);
        const sinLng = Math.sin(dLng / 2);
        const h = sinLat * sinLat + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * sinLng * sinLng;
        return 6371000 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(Math.max(0, 1 - h)));
    }

    function bestUsMassTimesChurch(place, churches) {
        const normalizedPlaceName = normalizeSearchText(cleanNodeText(place && place.name))
            .replace(/\b(?:roman|catholic|church|parish|cathedral|basilica|shrine)\b/gu, '')
            .replace(/\s+/g, '');
        const ranked = (Array.isArray(churches) ? churches : [])
            .map(normalizeUsMassTimesChurch)
            .filter(Boolean)
            .map(church => {
                const normalizedName = normalizeSearchText(church.name)
                    .replace(/\b(?:roman|catholic|church|parish|cathedral|basilica|shrine)\b/gu, '')
                    .replace(/\s+/g, '');
                const nameScore = normalizedPlaceName && normalizedName && (
                    normalizedPlaceName === normalizedName ? 4
                        : (normalizedPlaceName.includes(normalizedName) || normalizedName.includes(normalizedPlaceName) ? 2 : 0)
                );
                return { church, nameScore, distance: churchCoordinateDistanceMeters(place, church) };
            })
            .sort((a, b) => b.nameScore - a.nameScore || a.distance - b.distance);
        const best = ranked[0];
        return best && (best.nameScore > 0 || best.distance <= 800) ? best.church : null;
    }

    async function enrichUsChurchPlaceDetails(place) {
        if (state.selectedLocationCode !== 'US') return place;
        const coordinates = churchPointCoordinates(place);
        if (!coordinates) return place;
        try {
            const churches = await fetchUsMassTimesNearby(coordinates.lat, coordinates.lng);
            const local = bestUsMassTimesChurch(place, churches);
            return local ? mergeChurchPlaceDetails(place, local) : place;
        } catch (error) {
            console.warn('USCCB/MassTimes 성당 미사시간 조회에 실패했습니다.', error);
            return place;
        }
    }

    function normalizeDioceseLookup(value) {
        return normalizeSemanticText(value)
            .replace(/\b(?:archdiocese|diocese)(?:\s+of)?\b/gu, '')
            .replace(/\b(?:tong giao phan|giao phan)\b/gu, '')
            .replace(/(?:대)?교구/gu, '')
            .replace(/(?:大司教区|司教区|教区)/gu, '')
            .replace(/[^\p{L}\p{N}]+/gu, '');
    }

    function bishopContextForDiocese(diocese) {
        const entries = globalThis.diocesanBishopData && globalThis.diocesanBishopData.entries;
        if (!entries || !diocese) return null;
        const exact = entries[diocese];
        const normalized = normalizeDioceseLookup(diocese);
        const matchedKey = exact ? diocese : Object.keys(entries).find(key => normalizeDioceseLookup(key) === normalized);
        const entry = exact || (matchedKey && entries[matchedKey]);
        if (!entry || !entry.ordinary) {
            const usDiocese = cleanNodeText(diocese);
            if (/^(?:Archdiocese|Diocese) of /i.test(usDiocese)) {
                return {
                    diocese: usDiocese,
                    ordinary: null,
                    auxiliaries: [],
                    collaboratorSummary: false,
                    sourceUrls: []
                };
            }
            return null;
        }
        return {
            diocese: matchedKey || diocese,
            ordinary: entry.ordinary,
            auxiliaries: Array.isArray(entry.auxiliaries) ? entry.auxiliaries : [],
            collaboratorSummary: !!entry.collaboratorSummary,
            sourceUrls: Array.isArray(entry.sourceUrls) ? entry.sourceUrls : []
        };
    }

    const vietnamBishopDirectoryPaths = {
        'Giáo phận Lạng Sơn – Cao Bằng': '/diocese/dlscb.html',
        'Giáo phận Hưng Hóa': '/diocese/dhung.html',
        'Giáo phận Bắc Ninh': '/diocese/dbacn.html',
        'Tổng Giáo phận Hà Nội': '/diocese/dhano.html',
        'Giáo phận Hải Phòng': '/diocese/dhaip.html',
        'Giáo phận Thái Bình': '/diocese/dthai.html',
        'Giáo phận Bùi Chu': '/diocese/dbuic.html',
        'Giáo phận Phát Diệm': '/diocese/dphat.html',
        'Giáo phận Thanh Hóa': '/diocese/dthho.html',
        'Giáo phận Vinh': '/diocese/dvinh.html',
        'Giáo phận Hà Tĩnh': '/diocese/dhati.html',
        'Tổng Giáo phận Huế': '/diocese/dhuev.html',
        'Giáo phận Đà Nẵng': '/diocese/ddana.html',
        'Giáo phận Qui Nhơn': '/diocese/dquyn.html',
        'Giáo phận Kontum': '/diocese/dkont.html',
        'Giáo phận Nha Trang': '/diocese/dnhat.html',
        'Giáo phận Ban Mê Thuột': '/diocese/dbanm.html',
        'Giáo phận Đà Lạt': '/diocese/ddala.html',
        'Giáo phận Phan Thiết': '/diocese/dphan.html',
        'Giáo phận Phú Cường': '/diocese/dphuc.html',
        'Giáo phận Xuân Lộc': '/diocese/dxuan.html',
        'Giáo phận Bà Rịa': '/diocese/dbria.html',
        'Tổng Giáo phận Sài Gòn': '/diocese/dthan.html',
        'Giáo phận Mỹ Tho': '/diocese/dmyth.html',
        'Giáo phận Vĩnh Long': '/diocese/dvinl.html',
        'Giáo phận Long Xuyên': '/diocese/dloxu.html',
        'Giáo phận Cần Thơ': '/diocese/dcanv.html'
    };

    function bishopDirectoryRequestForContext(context) {
        if (!context || !context.diocese) return null;
        const sourceUrls = Array.isArray(context.sourceUrls) ? context.sourceUrls : [];
        const cbckSource = sourceUrls.find(url => /^https:\/\/directory\.cbck\.or\.kr\/m\/catholicInfo\.asp/i.test(url));
        if (cbckSource) return { country: 'KR', diocese: context.diocese, sourceUrl: cbckSource };
        const cbcjSource = sourceUrls.find(url => /^https:\/\/www\.cbcj\.catholic\.jp\/english\/japan\/diocese\//i.test(url));
        if (cbcjSource) return { country: 'JP', diocese: context.diocese, sourceUrl: cbcjSource };
        const lookupPath = vietnamBishopDirectoryPaths[context.diocese];
        if (lookupPath) return { country: 'VN', diocese: context.diocese, lookupPath };
        if (/^(?:Archdiocese|Diocese) of /i.test(context.diocese)) {
            return { country: 'US', diocese: context.diocese };
        }
        return null;
    }

    function normalizeBishopPersonLookup(value) {
        return String(value || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[’']/g, '')
            .replace(/[^a-z0-9가-힣ぁ-んァ-ヶ一-龠]+/gi, '')
            .toLowerCase();
    }

    function knownBishopPeople() {
        const entries = globalThis.diocesanBishopData && globalThis.diocesanBishopData.entries;
        if (!entries) return [];
        const people = [];
        Object.values(entries).forEach(entry => {
            if (entry && entry.ordinary) people.push(entry.ordinary);
            if (entry && Array.isArray(entry.auxiliaries)) people.push(...entry.auxiliaries);
        });
        return people.filter(Boolean);
    }

    function bishopPersonLocalization(name) {
        const normalized = normalizeBishopPersonLookup(name);
        const aliases = {
            tarcisio: 'tarcisius',
            mathias: 'matthias',
            petrus: 'peter',
            paulus: 'paul',
            ioannes: 'john',
            ioseph: 'joseph'
        };
        const wanted = aliases[normalized] || normalized;
        const matched = knownBishopPeople().find(person =>
            ['kr', 'vn', 'en', 'jp', 'la'].some(lower => {
                const candidate = normalizeBishopPersonLookup(person && person[lower]);
                return candidate === wanted || (aliases[candidate] || candidate) === wanted;
            })
        );
        if (matched) return Object.assign({}, matched);
        const fallback = cleanNodeText(name);
        return { kr: fallback, vn: fallback, en: fallback, jp: fallback, la: fallback };
    }

    function bishopDirectoryCacheKey(diocese) {
        return `${STORAGE_PREFIX}bishopDirectory:${normalizeDioceseLookup(diocese)}`;
    }

    function applyBishopDirectoryPayload(context, payload) {
        if (!context || !payload || !cleanNodeText(payload.ordinary)) return context;
        const ordinary = bishopPersonLocalization(payload.ordinary);
        const auxiliaries = (Array.isArray(payload.auxiliaries) ? payload.auxiliaries : [])
            .map(bishopPersonLocalization)
            .filter((person, index, list) => {
                const key = normalizeBishopPersonLookup(person.en || person.kr || '');
                return key && list.findIndex(candidate =>
                    normalizeBishopPersonLookup(candidate.en || candidate.kr || '') === key
                ) === index;
            });
        return Object.assign({}, context, {
            ordinary,
            auxiliaries,
            sourceUrls: Array.from(new Set([
                ...(Array.isArray(context.sourceUrls) ? context.sourceUrls : []),
                cleanNodeText(payload.sourceUrl)
            ].filter(Boolean))),
            directoryCheckedAt: cleanNodeText(payload.checkedAt)
        });
    }

    async function refreshBishopContextFromDirectory(context) {
        const request = bishopDirectoryRequestForContext(context);
        if (!request) return context;
        const cacheKey = bishopDirectoryCacheKey(context.diocese);
        const cached = readStorageJSON(cacheKey);
        if (isFreshCacheEntry(cached, GPS_BISHOP_CACHE_TTL_MS) && cached.payload) {
            return applyBishopDirectoryPayload(context, cached.payload);
        }
        try {
            const response = await fetchWithTimeout(BISHOP_DIRECTORY_ENDPOINT, {
                method: 'POST',
                cache: 'no-cache',
                timeoutMs: 35000,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request)
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const payload = await response.json();
            if (!payload || !payload.ordinary) throw new Error('Current bishop directory response is empty');
            writeStorageJSON(cacheKey, { cachedAt: Date.now(), payload });
            return applyBishopDirectoryPayload(context, payload);
        } catch (error) {
            console.warn('교구 주교명 주간 갱신에 실패하여 기존 명단을 유지합니다.', error);
            return cached && cached.payload ? applyBishopDirectoryPayload(context, cached.payload) : context;
        }
    }

    function refreshResolvedBishopContext(context, requestId) {
        if (!context) return;
        refreshBishopContextFromDirectory(context).then(refreshed => {
            if (requestId !== gpsBishopRequestId || !refreshed) return;
            if (normalizeDioceseLookup(state.gpsDiocese) !== normalizeDioceseLookup(refreshed.diocese)) return;
            if (applyGpsBishopContext(refreshed)) render();
        });
    }

    function bishopContextFromNearbyChurchPlaces(places, center = null) {
        const ranked = (Array.isArray(places) ? places : []).map((place, index) => ({
            place,
            index,
            distance: center && place && place.geometry && place.geometry.location
                ? churchDistanceMeters(center, place.geometry.location)
                : index
        })).sort((a, b) => a.distance - b.distance || a.index - b.index);
        for (const item of ranked) {
            const local = churchLocalDetailsForPlace(item.place);
            const context = bishopContextForDiocese(local && local.diocese);
            if (context) return context;
        }
        return null;
    }

    function gpsBishopCacheKey(lat, lon) {
        return `${STORAGE_PREFIX}gpsBishop:${Number(lat).toFixed(2)}:${Number(lon).toFixed(2)}`;
    }

    function applyGpsBishopContext(context) {
        const previous = JSON.stringify({
            diocese: cleanNodeText(state.gpsDiocese),
            context: state.bishopContext || null
        });
        state.bishopContext = context || null;
        state.gpsDiocese = context ? cleanNodeText(context.diocese) : '';
        return previous !== JSON.stringify({
            diocese: state.gpsDiocese,
            context: state.bishopContext
        });
    }

    async function nearbyCatholicChurchesForBishop(lat, lon) {
        await loadGoogleMapsForChurches();
        const center = { lat: Number(lat), lng: Number(lon) };
        const Place = await modernChurchPlaceClass();
        if (Place && typeof Place.searchNearby === 'function') {
            const result = await Place.searchNearby({
                fields: ['id', 'displayName', 'formattedAddress', 'location'],
                locationRestriction: { center, radius: 30000 },
                includedPrimaryTypes: ['church'],
                maxResultCount: 20
            });
            return (result.places || [])
                .filter(isLikelyCatholicChurchPlace)
                .map(normalizeModernChurchPlace)
                .filter(Boolean);
        }
        if (!(window.google && google.maps && google.maps.places)) return [];
        const service = churchPlacesService || new google.maps.places.PlacesService(document.createElement('div'));
        const results = await new Promise(resolve => {
            service.nearbySearch({
                location: center,
                radius: 30000,
                keyword: churchNearbyKeywordsForLocation()[0],
                type: 'church'
            }, (items, status) => resolve(
                status === google.maps.places.PlacesServiceStatus.OK && Array.isArray(items) ? items : []
            ));
        });
        return results;
    }

    async function refreshGpsBishopContext(lat, lon, locationCode = state.selectedLocationCode || state.currentLoc) {
        const normalizedLang = normalizeSelectableLang(getLangFromLocation(locationCode) || '', '');
        if (!['KR', 'VN', 'JP', 'EN'].includes(normalizedLang)) {
            if (applyGpsBishopContext(null)) render();
            return null;
        }
        const requestId = ++gpsBishopRequestId;
        const cacheKey = gpsBishopCacheKey(lat, lon);
        const cached = readStorageJSON(cacheKey);
        if (isFreshCacheEntry(cached, GPS_BISHOP_CACHE_TTL_MS)) {
            const cachedContext = bishopContextForDiocese(cached.diocese);
            if (cachedContext) {
                if (applyGpsBishopContext(cachedContext)) render();
                refreshResolvedBishopContext(cachedContext, requestId);
                return cachedContext;
            }
        }
        try {
            const center = { lat: Number(lat), lng: Number(lon) };
            let context = null;
            if (locationCode === 'US') {
                const churches = await fetchUsMassTimesNearby(lat, lon);
                const nearest = churches
                    .filter(church => !church.rite || /roman|latin/i.test(church.rite))
                    .map(normalizeUsMassTimesChurch)
                    .find(Boolean);
                context = bishopContextForDiocese(nearest && nearest.diocese);
            } else {
                const places = await nearbyCatholicChurchesForBishop(lat, lon);
                context = bishopContextFromNearbyChurchPlaces(places, center);
            }
            if (requestId !== gpsBishopRequestId) return null;
            if (context) writeStorageJSON(cacheKey, { cachedAt: Date.now(), diocese: context.diocese });
            if (applyGpsBishopContext(context)) render();
            refreshResolvedBishopContext(context, requestId);
            return context;
        } catch (error) {
            console.warn('GPS 교구/주교 판별에 실패하여 주교명 자리표시자를 유지합니다.', error);
            return null;
        }
    }

    function churchDetailList(value) {
        if (Array.isArray(value)) return value.map(cleanNodeText).filter(Boolean);
        const text = cleanNodeText(value);
        return text ? [text] : [];
    }

    function churchSafeLink(url, label) {
        const value = String(url || '').trim();
        if (!/^https?:\/\//i.test(value)) return '';
        return `<a href="${escapeAttr(value)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`;
    }

    function churchInfoField(label, valueHtml) {
        return `<span class="church-info-label">${escapeHtml(label)}</span><span class="church-info-value">${valueHtml}</span>`;
    }

    function churchInfoWindowHtml(place, options = {}) {
        const labels = churchDetailLabels();
        const local = churchLocalDetailsForPlace(place);
        const name = cleanNodeText((place && place.name) || local.name || auxText().churchTitle);
        const address = cleanNodeText((place && (place.formatted_address || place.vicinity)) || local.address);
        const diocese = cleanNodeText((place && place.diocese) || local.diocese);
        const phone = cleanNodeText((place && place.phone) || local.phone);
        const website = String((place && place.website) || local.website || '').trim();
        const mapsUrl = String((place && place.google_maps_url) || local.googleMapsUrl || '').trim();
        const priestNames = churchDetailList((place && (place.priestNames || place.priest)) || local.priestNames || local.priest);
        const sisterNames = churchDetailList((place && (place.sisterNames || place.sisters)) || local.sisterNames || local.sisters);
        const massTimes = churchDetailList((place && place.massTimes) || local.massTimes);
        const massTimesPeriod = cleanNodeText((place && place.massTimesPeriod) || local.massTimesPeriod);
        const officialUrl = String(
            (place && place.massTimesSourceUrl)
            || local.officialDioceseUrl
            || website
            || local.sourceUrl
            || ''
        ).trim();
        const officialFallback = churchSafeLink(officialUrl, labels.official) || escapeHtml(labels.unavailable);
        const rows = [];
        rows.push(churchInfoField(labels.address, address ? escapeHtml(address) : escapeHtml(labels.unavailable)));
        if (diocese) rows.push(churchInfoField(labels.diocese, escapeHtml(diocese)));
        rows.push(churchInfoField(labels.phone, phone ? escapeHtml(phone) : escapeHtml(labels.unavailable)));
        rows.push(churchInfoField(labels.website, churchSafeLink(website, labels.website) || escapeHtml(labels.unavailable)));
        rows.push(churchInfoField(labels.priest, priestNames.length ? priestNames.map(escapeHtml).join('<br>') : officialFallback));
        rows.push(churchInfoField(labels.sisters, sisterNames.length ? sisterNames.map(escapeHtml).join('<br>') : officialFallback));
        rows.push(churchInfoField(labels.massTimes, massTimes.length ? massTimes.map(escapeHtml).join('<br>') : officialFallback));
        if (massTimesPeriod) rows.push(churchInfoField(labels.massTimesPeriod, escapeHtml(massTimesPeriod)));
        if (mapsUrl) rows.push(churchInfoField(labels.maps, churchSafeLink(mapsUrl, labels.maps)));
        if (options.loading) rows.push(churchInfoField('', escapeHtml(labels.loading)));
        return `<div class="church-info-card"><div class="church-info-title">${escapeHtml(name)}</div><div class="church-info-grid">${rows.join('')}</div></div>`;
    }

    function normalizeLegacyChurchDetails(place) {
        if (!place) return null;
        return {
            place_id: place.place_id || '',
            name: cleanNodeText(place.name || ''),
            formatted_address: cleanNodeText(place.formatted_address || place.vicinity || ''),
            vicinity: cleanNodeText(place.vicinity || place.formatted_address || ''),
            phone: cleanNodeText(place.formatted_phone_number || place.international_phone_number || ''),
            website: String(place.website || '').trim(),
            google_maps_url: String(place.url || '').trim(),
            geometry: place.geometry || null
        };
    }

    function mergeChurchPlaceDetails(base, details) {
        const merged = Object.assign({}, base || {}, details || {});
        merged.geometry = (details && details.geometry) || (base && base.geometry) || null;
        return merged;
    }

    async function fetchChurchPlaceDetails(place) {
        const placeId = cleanNodeText(place && place.place_id);
        if (!placeId) return place;
        if (churchPlaceDetailsCache.has(placeId)) return churchPlaceDetailsCache.get(placeId);
        try {
            const Place = await modernChurchPlaceClass();
            if (Place) {
                const detailPlace = new Place({ id: placeId });
                const result = await detailPlace.fetchFields({ fields: ['displayName', 'formattedAddress', 'location', 'nationalPhoneNumber', 'websiteURI', 'googleMapsURI'] });
                const normalized = normalizeModernChurchPlace((result && result.place) || detailPlace);
                const merged = mergeChurchPlaceDetails(place, normalized);
                churchPlaceDetailsCache.set(placeId, merged);
                return merged;
            }
        } catch (error) {
            console.warn('Places API (New) 성당 상세 정보 조회에 실패했습니다.', error);
        }
        if (churchPlacesService && typeof churchPlacesService.getDetails === 'function') {
            const legacy = await new Promise(resolve => {
                churchPlacesService.getDetails({
                    placeId,
                    fields: ['name', 'formatted_address', 'formatted_phone_number', 'international_phone_number', 'website', 'url', 'geometry', 'place_id']
                }, (result, status) => resolve(status === google.maps.places.PlacesServiceStatus.OK ? result : null));
            });
            const merged = mergeChurchPlaceDetails(place, normalizeLegacyChurchDetails(legacy));
            churchPlaceDetailsCache.set(placeId, merged);
            return merged;
        }
        return place;
    }

    function addChurchMarker(place, focus = false) {
        if (!churchMap || !(window.google && google.maps && typeof google.maps.Marker === 'function')
            || !place || !place.geometry || !place.geometry.location) return null;
        const name = cleanNodeText(place.name || '');
        const marker = new google.maps.Marker({
            map: churchMap,
            position: place.geometry.location,
            title: name,
            label: name ? { text: name, color: '#1a252f', fontSize: '11px', fontWeight: '800', className: 'church-marker-label' } : null,
            optimized: false
        });
        marker.addListener('click', async () => {
            const requestId = ++churchInfoRequestId;
            churchInfoWindowOpen = true;
            churchInfoWindow.setContent(churchInfoWindowHtml(place, { loading: true }));
            churchInfoWindow.open(churchMap, marker);
            const details = await enrichUsChurchPlaceDetails(await fetchChurchPlaceDetails(place));
            if (requestId !== churchInfoRequestId) return;
            churchInfoWindow.setContent(churchInfoWindowHtml(details));
        });
        churchMarkers.push(marker);
        if (focus) {
            churchMap.setCenter(place.geometry.location);
            churchMap.setZoom(16);
            google.maps.event.trigger(marker, 'click');
        }
        return marker;
    }

    function localPinnedChurchPlacesForBounds(bounds) {
        const records = Array.isArray(globalThis.churchLocalDetailRecords)
            ? globalThis.churchLocalDetailRecords
            : [];
        return records.filter(record => {
            if (!record || !record.showOnMap) return false;
            const point = churchPointCoordinates(record);
            if (!point) return false;
            if (!bounds || typeof bounds.contains !== 'function') return true;
            return bounds.contains(point);
        }).map(record => {
            const point = churchPointCoordinates(record);
            return {
                place_id: record.placeId || `local:${record.country || ''}:${record.diocese || ''}:${record.directoryName || record.name || ''}`,
                name: cleanNodeText(record.name || record.directoryName || ''),
                formatted_address: cleanNodeText(record.address || ''),
                vicinity: cleanNodeText(record.address || ''),
                diocese: cleanNodeText(record.diocese || ''),
                phone: cleanNodeText(record.phone || ''),
                website: String(record.website || '').trim(),
                google_maps_url: String(record.googleMapsUrl || '').trim(),
                priestNames: record.priestNames || [],
                sisterNames: record.sisterNames || [],
                massTimes: record.massTimes || [],
                massTimesPeriod: record.massTimesPeriod || '',
                massTimesSourceUrl: record.officialDioceseUrl || record.sourceUrl || '',
                geometry: { location: point },
                __localPinned: true
            };
        });
    }

    function renderChurchPlaces(results = []) {
        if (churchInfoWindowOpen) return;
        const combined = new Map();
        results.slice(0, CHURCH_MAX_RESULTS).forEach(place => {
            if (place && place.place_id) combined.set(place.place_id, place);
        });
        const bounds = churchMap && typeof churchMap.getBounds === 'function' ? churchMap.getBounds() : null;
        localPinnedChurchPlacesForBounds(bounds).forEach(place => combined.set(place.place_id, place));
        const places = Array.from(combined.values());
        clearChurchMarkers();
        places.forEach(place => addChurchMarker(place));
        if (places.length) setChurchCaption(churchFoundText(places.length));
    }

    function churchSearchQueriesForLocation(value = state.selectedLocationCode || state.currentLoc) {
        const code = churchCountryFromLocation(value);
        const lang = normalizeSelectableLang(getLangFromLocation(code) || 'KR', 'KR');
        const localized = {
            KR: ['천주교 성당', '가톨릭 성당'],
            VN: ['nhà thờ Công giáo', 'giáo xứ Công giáo'],
            EN: ['Catholic church', 'Catholic parish'],
            JP: ['カトリック教会', 'カトリック聖堂'],
            LA: ['chiesa cattolica', 'parrocchia cattolica']
        };
        const regional = {
            IE: ['Catholic church Ireland', 'Catholic parish Ireland'],
            'GB-NIR': ['Catholic church Northern Ireland', 'Catholic parish Northern Ireland'],
            TW: ['天主教堂 台灣', '天主教堂 台北'],
            CN: ['天主教堂 中國', '天主教堂 北京'],
            PH: ['Catholic church Philippines', 'Catholic parish Philippines'],
            ID: ['gereja Katolik Indonesia', 'paroki Katolik Indonesia'],
            TH: ['โบสถ์คาทอลิก ประเทศไทย', 'วัดคาทอลิก ประเทศไทย'],
            KH: ['ព្រះវិហារកាតូលិក កម្ពុជា', 'Catholic church Cambodia'],
            SG: ['Catholic church Singapore', 'Catholic parish Singapore'],
            MY: ['Catholic church Malaysia', 'gereja Katolik Malaysia'],
            BN: ['Catholic church Brunei', 'Roman Catholic church Brunei'],
            HK: ['天主教堂 香港', '天主教聖堂 香港'],
            MO: ['天主教堂 澳門', '天主教聖堂 澳門']
        };
        return Array.from(new Set([...(regional[code] || localized[lang] || localized.EN), 'Catholic church']));
    }

    function churchNearbyKeywordsForLocation(value = state.selectedLocationCode || state.currentLoc) {
        const code = churchCountryFromLocation(value);
        const lang = normalizeSelectableLang(getLangFromLocation(code) || 'KR', 'KR');
        const localized = {
            KR: ['천주교', '가톨릭'],
            VN: ['Công giáo', 'giáo xứ'],
            EN: ['Catholic', 'Catholic parish'],
            JP: ['カトリック'],
            LA: ['cattolica']
        };
        const regional = {
            IE: ['Roman Catholic', 'Catholic parish'],
            'GB-NIR': ['Roman Catholic', 'Catholic parish'],
            TW: ['天主教', '堂區'], CN: ['天主教', '堂區'], HK: ['天主教', '堂區'], MO: ['天主教', '堂區'],
            PH: ['Catholic', 'Catholic parish'], ID: ['Katolik', 'paroki'], TH: ['คาทอลิก'], KH: ['កាតូលិក'],
            SG: ['Catholic', 'Catholic parish'], MY: ['Catholic', 'Katolik'], BN: ['Catholic', 'Roman Catholic']
        };
        if (regional[code]) return regional[code];
        return Array.from(new Set(localized[lang] || localized.EN));
    }

    function isChurchPlacesAuthorizationError(error) {
        const text = cleanNodeText(error && (error.message || error)).toLowerCase();
        return /permission_denied|referer.*blocked|api.?target.?blocked|not authorized|origin.*not allowed/.test(text);
    }

    function churchLatLngNumber(point, axis) {
        if (!point) return NaN;
        const value = point[axis];
        return Number(typeof value === 'function' ? value.call(point) : value);
    }

    function churchDistanceMeters(from, to) {
        const lat1 = churchLatLngNumber(from, 'lat');
        const lng1 = churchLatLngNumber(from, 'lng');
        const lat2 = churchLatLngNumber(to, 'lat');
        const lng2 = churchLatLngNumber(to, 'lng');
        if (![lat1, lng1, lat2, lng2].every(Number.isFinite)) return 0;
        const radians = value => value * Math.PI / 180;
        const dLat = radians(lat2 - lat1);
        const dLng = radians(lng2 - lng1);
        const a = Math.sin(dLat / 2) ** 2
            + Math.cos(radians(lat1)) * Math.cos(radians(lat2)) * Math.sin(dLng / 2) ** 2;
        return 6371000 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }

    function churchBoundsRadiusMeters(bounds) {
        if (!bounds || typeof bounds.getCenter !== 'function' || typeof bounds.getNorthEast !== 'function') return 5000;
        const radius = churchDistanceMeters(bounds.getCenter(), bounds.getNorthEast()) * 1.08;
        return Math.max(1000, Math.min(50000, Math.ceil(radius || 5000)));
    }

    function normalizeModernChurchPlace(place) {
        if (!place || !place.location) return null;
        return {
            place_id: place.id || `${place.displayName || ''}|${place.formattedAddress || ''}`,
            name: cleanNodeText(place.displayName || ''),
            formatted_address: cleanNodeText(place.formattedAddress || ''),
            vicinity: cleanNodeText(place.formattedAddress || ''),
            phone: cleanNodeText(place.nationalPhoneNumber || place.internationalPhoneNumber || ''),
            website: String(place.websiteURI || '').trim(),
            google_maps_url: String(place.googleMapsURI || '').trim(),
            geometry: { location: place.location }
        };
    }

    function isLikelyCatholicChurchPlace(place) {
        const text = `${place && (place.displayName || place.name) || ''} ${place && (place.formattedAddress || place.formatted_address || place.vicinity) || ''}`;
        if (/tin\s*lành|protestant|baptist|methodist|evangelical/i.test(text)) return false;
        return /천주교|가톨릭|catholic|công\s*giáo|giáo\s*xứ|giáo\s*phận|cathedral|カトリック|cattolic|parrocchia/i.test(text);
    }

    function isClearlyNonCatholicChurchPlace(place) {
        const text = `${place && (place.displayName || place.name) || ''} ${place && (place.formattedAddress || place.formatted_address || place.vicinity) || ''}`;
        return /tin\s*lành|protestant|baptist|methodist|evangelical/i.test(text);
    }

    async function modernChurchPlaceClass() {
        if (!(window.google && google.maps && typeof google.maps.importLibrary === 'function')) return null;
        const library = await google.maps.importLibrary('places');
        return library && library.Place && typeof library.Place.searchByText === 'function' ? library.Place : null;
    }

    async function searchChurchesWithModernPlaces(bounds) {
        const Place = await modernChurchPlaceClass();
        if (!Place) return null;
        const fields = ['id', 'displayName', 'formattedAddress', 'location'];
        const center = bounds.getCenter();
        const radius = churchBoundsRadiusMeters(bounds);
        const tasks = churchSearchQueriesForLocation().map(textQuery => Place.searchByText({
            textQuery,
            fields,
            includedType: 'church',
            locationRestriction: bounds,
            maxResultCount: 20
        }));
        if (typeof Place.searchNearby === 'function') {
            tasks.push(Place.searchNearby({
                fields,
                locationRestriction: { center, radius },
                includedPrimaryTypes: ['church'],
                maxResultCount: 20
            }).then(result => ({ places: (result.places || []).filter(isLikelyCatholicChurchPlace) })));
        }
        const settled = await Promise.allSettled(tasks);
        const fulfilled = settled.filter(result => result.status === 'fulfilled');
        if (!fulfilled.length) throw (settled.find(result => result.status === 'rejected') || {}).reason || new Error('Places API (New) search failed.');
        const collected = new Map();
        fulfilled.forEach(result => {
            (result.value && result.value.places || []).forEach(place => {
                if (isClearlyNonCatholicChurchPlace(place)) return;
                const normalized = normalizeModernChurchPlace(place);
                if (normalized && normalized.place_id && !collected.has(normalized.place_id)) collected.set(normalized.place_id, normalized);
            });
        });
        return Array.from(collected.values());
    }

    async function searchChurchesInCurrentView() {
        if (!churchMap || !churchMap.getBounds()) return;
        const requestId = ++churchSearchRequestId;
        const collected = new Map();
        const bounds = churchMap.getBounds();
        setChurchStatus('');

        try {
            const modernResults = await searchChurchesWithModernPlaces(bounds);
            if (requestId !== churchSearchRequestId) return;
            if (Array.isArray(modernResults)) {
                renderChurchPlaces(modernResults);
                if (!modernResults.length) setChurchCaption(churchFoundText(0));
                return;
            }
        } catch (error) {
            console.warn('Places API (New) 성당 검색에 실패하여 기존 검색으로 재시도합니다.', error);
            if (isChurchPlacesAuthorizationError(error)) {
                showChurchFallback(churchMapDefaultForLang().query);
                return;
            }
        }

        if (!churchPlacesService) {
            showChurchFallback();
            return;
        }

        const runPagedSearch = startSearch => new Promise(resolve => {
            let queryResultCount = 0;
            const handleChurchResults = (results, status, pagination) => {
                if (requestId !== churchSearchRequestId) {
                    resolve();
                    return;
                }
                if (status === google.maps.places.PlacesServiceStatus.OK && Array.isArray(results)) {
                    results.forEach(place => {
                        if (!place || !place.place_id) return;
                        if (isClearlyNonCatholicChurchPlace(place)) return;
                        queryResultCount += 1;
                        if (!collected.has(place.place_id)) collected.set(place.place_id, place);
                    });
                    renderChurchPlaces(Array.from(collected.values()));
                    if (pagination && pagination.hasNextPage && queryResultCount < CHURCH_MAX_RESULTS_PER_QUERY && collected.size < CHURCH_MAX_RESULTS) {
                        setTimeout(() => {
                            if (requestId === churchSearchRequestId) pagination.nextPage();
                            else resolve();
                        }, CHURCH_TEXT_SEARCH_PAGE_DELAY_MS);
                        return;
                    }
                }
                resolve();
            };
            startSearch(handleChurchResults);
        });

        const textSearches = churchSearchQueriesForLocation().map(query => runPagedSearch(callback => {
            churchPlacesService.textSearch({ query, bounds, type: 'church' }, callback);
        }));
        const center = bounds.getCenter();
        const radius = churchBoundsRadiusMeters(bounds);
        const nearbySearches = churchNearbyKeywordsForLocation().map(keyword => runPagedSearch(callback => {
            churchPlacesService.nearbySearch({ location: center, radius, keyword, type: 'church' }, callback);
        }));

        Promise.all([...textSearches, ...nearbySearches]).then(() => {
            if (requestId !== churchSearchRequestId) return;
            const results = Array.from(collected.values());
            renderChurchPlaces(results);
            if (!results.length) setChurchCaption(churchFoundText(0));
        });
    }

    function scheduleChurchViewportSearch() {
        if (churchInfoWindowOpen) return;
        if (!churchMarkers.length && churchMap && typeof churchMap.getBounds === 'function' && churchMap.getBounds()) {
            renderChurchPlaces([]);
        }
        if (churchIdleTimer) clearTimeout(churchIdleTimer);
        churchIdleTimer = setTimeout(searchChurchesInCurrentView, 650);
    }

    function focusChurchPlace(place) {
        if (!place || !place.geometry || !place.geometry.location) return false;
        if (churchInfoWindow) churchInfoWindow.close();
        churchInfoWindowOpen = false;
        churchInfoRequestId += 1;
        clearChurchMarkers();
        addChurchMarker(place, true);
        setChurchCaption(place.name || auxText().churchTitle);
        return true;
    }

    async function searchChurchWithModernPlaces(query) {
        const Place = await modernChurchPlaceClass();
        if (!Place) return false;
        const request = {
            textQuery: query,
            fields: ['id', 'displayName', 'formattedAddress', 'location'],
            includedType: 'church',
            maxResultCount: 5
        };
        if (churchMap && typeof churchMap.getCenter === 'function') request.locationBias = churchMap.getCenter();
        const result = await Place.searchByText(request);
        const matched = result && result.places && result.places[0];
        return focusChurchPlace(normalizeModernChurchPlace(matched));
    }

    function searchChurchWithPlaces(query) {
        if (!churchPlacesService || !query) return false;
        churchPlacesService.findPlaceFromQuery({
            query,
            fields: ['name', 'geometry', 'formatted_address', 'place_id']
        }, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && results && results[0]) {
                focusChurchPlace(results[0]);
            } else {
                churchPlacesService.textSearch({ query: `${query} Catholic church` }, (textResults, textStatus) => {
                    if (textStatus === google.maps.places.PlacesServiceStatus.OK && textResults && textResults[0]) focusChurchPlace(textResults[0]);
                    else showChurchFallback(query);
                });
            }
        });
        return true;
    }

    async function initializeChurchMap(options = {}) {
        localizeAuxPanels();
        const mapNode = document.getElementById('church-map');
        const frame = document.getElementById('church-map-frame');
        if (!mapNode) return;
        try {
            await loadGoogleMapsForChurches();
            if (frame) frame.hidden = true;
            mapNode.hidden = false;
            const fallback = churchMapDefaultForLang();
            const gpsCenter = Object.prototype.hasOwnProperty.call(options, 'gpsCenter')
                ? options.gpsCenter
                : await getGpsPositionForChurchMap();
            const center = gpsCenter || fallback.center;
            if (!churchMap) {
                churchMap = new google.maps.Map(mapNode, {
                    center,
                    zoom: gpsCenter ? 14 : fallback.zoom,
                    mapTypeControl: false,
                    streetViewControl: false,
                    fullscreenControl: true
                });
                churchPlacesService = new google.maps.places.PlacesService(churchMap);
                churchInfoWindow = new google.maps.InfoWindow();
                churchInfoWindow.addListener('closeclick', () => {
                    churchInfoWindowOpen = false;
                    churchInfoRequestId += 1;
                    scheduleChurchViewportSearch();
                });
                churchMap.addListener('idle', scheduleChurchViewportSearch);
                churchMap.addListener('dragend', scheduleChurchViewportSearch);
                churchMap.addListener('zoom_changed', scheduleChurchViewportSearch);
                setTimeout(() => {
                    if (mapNode.querySelector('.gm-err-container, .gm-err-message')) {
                        console.warn('Google Maps 인증 오류를 감지하여 iframe 지도로 전환합니다.');
                        churchMapInitialized = false;
                        const input = document.getElementById('church-search');
                        showChurchFallback(cleanNodeText(input && input.value));
                    }
                }, 1500);
            } else {
                if (churchInfoWindow) churchInfoWindow.close();
                churchInfoWindowOpen = false;
                churchInfoRequestId += 1;
                churchMap.setCenter(center);
                churchMap.setZoom(gpsCenter ? 14 : fallback.zoom);
            }
            churchMapInitialized = true;
            setChurchStatus(auxText().churchReady);
            searchChurchesInCurrentView();
        } catch (error) {
            console.warn('Google Maps church map failed, using iframe fallback.', error);
            churchMapInitialized = false;
            showChurchFallback();
        }
    }

    async function renderChurchPanel() {
        localizeAuxPanels();
        updateFooterCopyright();
        const activeCountry = churchCountryFromLocation(state.selectedLocationCode || state.currentLoc);
        const countryChanged = churchRenderedCountry !== activeCountry;
        state.churchCountry = activeCountry;
        churchRenderedCountry = activeCountry;
        if (countryChanged && churchMapInitialized && churchMap) {
            const fallback = churchMapDefaultForLang(activeCountry);
            churchMap.setCenter(fallback.center);
            churchMap.setZoom(fallback.zoom);
            clearChurchMarkers();
            searchChurchesInCurrentView();
        }
        const key = googleMapsApiKey();
        if (!key) {
            showChurchFallback();
            fetchGoogleMapsApiKey().then(remoteKey => {
                if (remoteKey && (state.activeTab || '') === 'churches') initializeChurchMap();
            });
            return;
        }
        initializeChurchMap();
    }

    window.searchChurchByName = async function() {
        const input = document.getElementById('church-search');
        const query = cleanNodeText(input && input.value);
        if (!query) return;
        if (churchMapInitialized) {
            try {
                if (await searchChurchWithModernPlaces(query)) return;
            } catch (error) {
                console.warn('Places API (New) 성당 이름 검색에 실패하여 기존 검색으로 재시도합니다.', error);
                if (isChurchPlacesAuthorizationError(error)) {
                    showChurchFallback(query);
                    return;
                }
            }
            if (searchChurchWithPlaces(query)) return;
        }
        showChurchFallback(query);
    };

    window.handleChurchSearchKey = function(event) {
        if (event && event.key === 'Enter') {
            event.preventDefault();
            searchChurchByName();
        }
    };

    function getUploadedPrayerData() {
        const hasUploadedPrayerData = Array.isArray(window.uploadedPrayerData);
        const data = hasUploadedPrayerData ? window.uploadedPrayerData : (Array.isArray(window.prayerData) ? window.prayerData : []);
        return window.ordoPrayerDataApi.normalizeEntries(data, { uploaded: hasUploadedPrayerData });
    }

    function getPrayerData() {
        const uploaded = getUploadedPrayerData();
        return uploaded;
    }

    function localizedPrayerValueStrict(value, langCode) {
        return window.ordoPrayerDataApi.valueStrict(value, langCode);
    }

    function localizedPrayerValue(value, langCode) {
        return window.ordoPrayerDataApi.value(value, langCode);
    }

    function prayerCategoryLabel(categoryKey, langCode = state.uiLang || 'KR') {
        return window.ordoPrayerDataApi.categoryLabel(categoryKey, langCode);
    }

    function prayerOfficialCategory(entry, langCode) {
        return window.ordoPrayerDataApi.officialCategory(entry, langCode);
    }

    function prayerSourceText(entry, langCode) {
        return window.ordoPrayerDataApi.sourceText(entry, langCode);
    }

    function prayerEntrySearchText(entry, leftLang, rightLang) {
        return window.ordoPrayerDataApi.searchText(entry, leftLang, rightLang);
    }

    function prayerCategoryAllLabel(langCode) {
        return window.ordoPrayerDataApi.allCategoryLabel(langCode);
    }

    function populatePrayerCategoryOptions(selectedValue = '') {
        const select = document.getElementById('prayer-category');
        if (!select) return;
        const current = cleanNodeText(selectedValue || select.value || '');
        const data = getPrayerData();
        const keys = window.ordoPrayerDataApi.categoryKeys(data);
        select.innerHTML = [
            `<option value="">${escapeHtml(prayerCategoryAllLabel(state.uiLang || 'KR'))}</option>`,
            ...keys.map(key => `<option value="${escapeHtml(key)}">${escapeHtml(prayerCategoryLabel(key, state.uiLang || 'KR'))}</option>`)
        ].join('');
        if (Array.from(select.options).some(option => option.value === current)) select.value = current;
    }

    function prayerPlaceholder(entry, langCode) {
        return `${appLanguageName(langCode)} ${auxText().prayerBodyPlaceholder}`;
    }

    const openPrayerEntryKeys = new Set();

    function prayerEntryKey(entry) {
        return window.ordoPrayerDataApi.entryKey(entry);
    }

    function prayerAutomaticTranslationInfo(entry, targetLang, otherLang, field) {
        const source = window.ordoPrayerDataApi.translationSource(entry, targetLang, otherLang, field);
        if (!source) return null;
        const key = aiTranslationKey(source.sourceText, source.targetLang);
        return Object.assign({}, source, { key, record: aiTranslationRecords.get(key) || null });
    }

    function prayerAutomaticTranslatedText(entry, targetLang, otherLang, field) {
        const info = prayerAutomaticTranslationInfo(entry, targetLang, otherLang, field);
        return info && info.record && info.record.status === 'done' ? cleanNodeText(info.record.text) : '';
    }

    function prayerTitleHtml(entry, langCode, otherLangCode, isTranslation = false) {
        const directTitle = localizedPrayerValueStrict(entry.titles, langCode);
        const automaticTitle = directTitle ? '' : prayerAutomaticTranslatedText(entry, langCode, otherLangCode, 'title');
        const category = prayerOfficialCategory(entry, langCode);
        const officialTag = category ? `<span class="aux-prayer-book-tag">${escapeHtml(category)}</span>` : '';
        if (isTranslation) {
            if (directTitle) return `${escapeHtml(directTitle)}${officialTag}`;
            return automaticTitle ? `<span class="ai-badge">AI</span>${escapeHtml(automaticTitle)}${officialTag}` : '';
        }
        const fallbackTitle = localizedPrayerValue(entry.titles, langCode) || localizedPrayerValue(entry.titles, otherLangCode) || '기도문';
        const missingTag = directTitle ? '' : (automaticTitle ? '<span class="ai-badge">AI</span>' : '<span class="aux-prayer-tag">AI 번역</span>');
        return `${escapeHtml(directTitle || automaticTitle || fallbackTitle)}${officialTag}${missingTag}`;
    }

    function prayerSummaryTitleHtml(entry, langCode, otherLangCode) {
        const directTitle = localizedPrayerValueStrict(entry.titles, langCode);
        const automaticTitle = directTitle ? '' : prayerAutomaticTranslatedText(entry, langCode, otherLangCode, 'title');
        const fallbackTitle = localizedPrayerValue(entry.titles, langCode) || localizedPrayerValue(entry.titles, otherLangCode) || '기도문';
        return escapeHtml(directTitle || automaticTitle || fallbackTitle);
    }

    function prayerSummaryTranslationTitleHtml(entry, langCode, otherLangCode) {
        const directTitle = localizedPrayerValueStrict(entry.titles, langCode);
        if (directTitle) return escapeHtml(directTitle);
        const info = prayerAutomaticTranslationInfo(entry, langCode, otherLangCode, 'title');
        if (!info || !info.record) return '';
        if (info.record.status === 'done') return `<span class="ai-badge">AI</span>${escapeHtml(info.record.text)}`;
        if (info.record.status === 'pending') return escapeHtml(hymnTranslationUiText('pending', info.targetLang));
        return '';
    }

    function formatPrayerMarkupHtml(value) {
        let html = escapeHtml(value);
        html = html.replace(/&lt;rubric&gt;([\s\S]*?)&lt;\/rubric&gt;/gi, (_, inner) => {
            const text = cleanNodeText(inner);
            return text ? `<span class="rubric">${text}</span>` : '';
        });
        html = html.replace(/&lt;(b|strong)&gt;([\s\S]*?)&lt;\/(?:b|strong)&gt;/gi, '<strong>$2</strong>');
        html = html.replace(/&lt;(i|em)&gt;([\s\S]*?)&lt;\/(?:i|em)&gt;/gi, '<em>$2</em>');
        html = html.replace(/&lt;u&gt;([\s\S]*?)&lt;\/u&gt;/gi, '<u>$1</u>');
        html = html.replace(/\*\*([\s\S]*?)\*\*/g, (_, inner) => `<strong>${inner}</strong>`);
        return html.replace(/\r?\n/g, '<br>');
    }

    function prayerBodyHtml(entry, langCode, otherLangCode) {
        const directBody = localizedPrayerValueStrict(entry.texts, langCode);
        if (directBody) return formatPrayerMarkupHtml(directBody);
        const automaticInfo = prayerAutomaticTranslationInfo(entry, langCode, otherLangCode, 'body');
        if (automaticInfo && automaticInfo.sourceText) return makeAIButton(automaticInfo.sourceText, '', langCode);
        return escapeHtml(prayerPlaceholder(entry, langCode));
    }

    function prayerMetaHtml(entry, leftLang, rightLang) {
        const pills = [];
        const categoryLabel = prayerCategoryLabel(entry.category, state.uiLang || 'KR');
        if (categoryLabel) pills.push(categoryLabel);
        [leftLang, rightLang].forEach(lang => {
            const source = prayerSourceText(entry, lang);
            if (source && !pills.includes(source)) pills.push(source);
        });
        return pills.map(value => `<span class="aux-pill">${escapeHtml(value)}</span>`).join('');
    }

    function prayerVisibleForLeftLanguage(entry, leftLang) {
        return window.ordoPrayerDataApi.visibleForLeftLanguage(entry, leftLang);
    }

    async function translatePrayerTextWithFallback(sourceText, sourceLang, targetLang) {
        try {
            return await translateWithGemini(sourceText, targetLang);
        } catch (primaryError) {
            try {
                return await translateHymnTextWithMachineFallback(sourceText, sourceLang, targetLang);
            } catch (fallbackError) {
                const primaryMessage = primaryError && primaryError.message ? primaryError.message : 'AI prayer translation failed.';
                const fallbackMessage = fallbackError && fallbackError.message ? fallbackError.message : 'Fallback translation failed.';
                throw new Error(`${primaryMessage} / ${fallbackMessage}`);
            }
        }
    }

    function requestAutomaticPrayerTranslations(entry, leftLang, rightLang) {
        const entryKey = prayerEntryKey(entry);
        const requests = [];
        [
            { targetLang: leftLang, otherLang: rightLang },
            { targetLang: rightLang, otherLang: leftLang }
        ].forEach(({ targetLang, otherLang }) => {
            ['title', 'body'].forEach(field => {
                const info = prayerAutomaticTranslationInfo(entry, targetLang, otherLang, field);
                if (!info || info.record) return;
                aiTranslationRecords.set(info.key, { status: 'pending' });
                requests.push(
                    translatePrayerTextWithFallback(info.sourceText, info.sourceLang, info.targetLang)
                        .then(resultText => {
                            if (!cleanNodeText(resultText)) throw new Error('AI 기도문 번역 결과가 비어 있습니다.');
                            aiTranslationRecords.set(info.key, { status: 'done', text: resultText });
                        })
                        .catch(error => {
                            aiTranslationRecords.set(info.key, {
                                status: 'error',
                                message: error && error.message ? error.message : 'AI 기도문 번역 실패'
                            });
                        })
                );
            });
        });
        if (!requests.length) return false;
        renderPrayerPanel();
        Promise.allSettled(requests).then(() => {
            if (openPrayerEntryKeys.has(entryKey)) renderPrayerPanel();
        });
        return true;
    }

    window.handlePrayerToggle = function(details) {
        const entryKey = cleanNodeText(details && details.dataset && details.dataset.prayerKey);
        if (!entryKey) return;
        if (!details.open) {
            openPrayerEntryKeys.delete(entryKey);
            return;
        }
        openPrayerEntryKeys.add(entryKey);
        const entry = getPrayerData().find(candidate => prayerEntryKey(candidate) === entryKey);
        if (entry) {
            requestAutomaticPrayerTranslations(
                entry,
                normalizeSelectableLang(state.currentLoc || 'KR', 'KR'),
                normalizeSelectableLang(state.targetLang || DEFAULT_TARGET_LANG, DEFAULT_TARGET_LANG)
            );
        }
    };

    function renderPrayerPanel() {
        localizeAuxPanels();
        updateFooterCopyright();
        const leftLang = normalizeSelectableLang(state.currentLoc || 'KR', 'KR');
        const rightLang = normalizeSelectableLang(state.targetLang || DEFAULT_TARGET_LANG, DEFAULT_TARGET_LANG);
        populatePrayerCategoryOptions((document.getElementById('prayer-category') || {}).value || '');
        const category = cleanNodeText((document.getElementById('prayer-category') || {}).value || '');
        const query = normalizeAuxSearch((document.getElementById('prayer-search') || {}).value || '');
        const root = document.getElementById('prayer-results');
        const dict = auxText();
        if (!root) return;
        const countryModule = activeCountryAuxModule('countryPrayerData');
        if (countryModule && countryModule.status === 'under-development') {
            root.innerHTML = `<div class="aux-empty">${escapeHtml(countryAuxDevelopmentMessage('prayers'))}</div>`;
            requestAuxSearchSync();
            return;
        }
        const rows = getPrayerData()
            .filter(entry => prayerVisibleForLeftLanguage(entry, leftLang))
            .filter(entry => !category || cleanNodeText(entry.category || 'national') === category)
            .filter(entry => {
                if (!query) return true;
                const haystack = prayerEntrySearchText(entry, leftLang, rightLang);
                return normalizeAuxSearch(haystack).includes(query);
            });
        if (!rows.length) {
            root.innerHTML = `<div class="aux-empty">${escapeHtml(dict.prayerEmpty)}</div>`;
            requestAuxSearchSync();
            return;
        }
        root.innerHTML = rows.map(entry => {
            const entryKey = prayerEntryKey(entry);
            const summaryLeftTitle = prayerSummaryTitleHtml(entry, leftLang, rightLang);
            const leftTitle = prayerTitleHtml(entry, leftLang, rightLang, false);
            const rightTitle = prayerTitleHtml(entry, rightLang, leftLang, true);
            const summaryRightTitle = prayerSummaryTranslationTitleHtml(entry, rightLang, leftLang);
            const translatedTitleHtml = summaryRightTitle ? `<span class="aux-prayer-translation-title">${summaryRightTitle}</span>` : '';
            const leftBody = prayerBodyHtml(entry, leftLang, rightLang);
            const rightBody = prayerBodyHtml(entry, rightLang, leftLang);
            const openAttribute = openPrayerEntryKeys.has(entryKey) ? ' open' : '';
            return [
                `<details class="aux-card aux-prayer-list-item" data-prayer-key="${escapeAttr(entryKey)}" ontoggle="handlePrayerToggle(this)"${openAttribute}>`,
                `<summary><span class="aux-prayer-summary-title">${summaryLeftTitle}${translatedTitleHtml}</span></summary>`,
                '<div class="aux-prayer-list-detail">',
                `<div class="aux-result-meta">${prayerMetaHtml(entry, leftLang, rightLang)}</div>`,
                '<div class="aux-two-column">',
                `<div class="aux-language-block"><div class="aux-language-label">${escapeHtml(appLanguageName(leftLang))}</div><div class="aux-prayer-title">${leftTitle}</div><div class="aux-prayer-body">${leftBody}</div></div>`,
                `<div class="aux-language-block aux-language-block-translation"><div class="aux-language-label">${escapeHtml(appLanguageName(rightLang))}</div><div class="aux-prayer-title">${rightTitle}</div><div class="aux-prayer-body">${rightBody}</div></div>`,
                '</div>',
                '</div>',
                '</details>'
            ].join('');
        }).join('');
        requestAuxSearchSync();
    }

    const auxSearchControlConfig = {
        prayers: {
            controlsId: 'prayer-controls',
            anchorId: 'prayer-controls-anchor',
            triggerSelector: '#prayer-results .aux-card, #prayer-results .aux-empty',
            label: { KR: '기도문 검색', VN: 'Tìm kinh', EN: 'Prayer search', JP: '祈り検索', LA: 'Quaerere preces' }
        },
        hymns: {
            controlsId: 'hymn-controls',
            anchorId: 'hymn-controls-anchor',
            triggerSelector: '#hymn-results .hymn-list-item, #hymn-results .aux-empty',
            label: { KR: '성가 검색', VN: 'Tìm thánh ca', EN: 'Hymn search', JP: '聖歌検索', LA: 'Quaerere cantus' }
        },
        churches: {
            disabled: true,
            controlsId: 'church-controls',
            anchorId: 'church-controls-anchor',
            label: { KR: '성당 검색', VN: 'Tìm nhà thờ', EN: 'Church search', JP: '教会検索', LA: 'Quaerere ecclesiam' }
        }
    };
    let auxSearchMountedTab = '';
    let auxSearchPopupOpen = false;
    let auxSearchSyncFrame = 0;

    function auxSearchPopupLabel(tab) {
        const config = auxSearchControlConfig[tab] || {};
        return getLocalizedObjectValue(config.label, state.uiLang || 'KR') || config.label?.KR || '검색';
    }

    function restoreAuxSearchControls() {
        if (!auxSearchMountedTab) return;
        const config = auxSearchControlConfig[auxSearchMountedTab];
        const controls = config && document.getElementById(config.controlsId);
        const anchor = config && document.getElementById(config.anchorId);
        if (controls && anchor && anchor.nextElementSibling !== controls) {
            anchor.insertAdjacentElement('afterend', controls);
        }
        if (anchor) anchor.style.height = '';
        auxSearchMountedTab = '';
    }

    function auxSearchFloatTopOffset() {
        const value = getComputedStyle(document.documentElement).getPropertyValue('--floating-liturgy-offset');
        const offset = Number.parseFloat(value);
        return (Number.isFinite(offset) ? offset : 0) + 8;
    }

    function shouldFloatAuxSearchControls(tab) {
        const config = auxSearchControlConfig[tab];
        if (!config) return false;
        if (config.disabled) return false;
        const anchor = document.getElementById(config.anchorId);
        const panel = anchor && anchor.closest('.aux-panel');
        const trigger = panel && config.triggerSelector ? panel.querySelector(config.triggerSelector) : anchor;
        if (!anchor || !panel || panel.hidden || !panel.classList.contains('active')) return false;
        if (!trigger) return false;
        const panelRect = panel.getBoundingClientRect();
        if (panelRect.bottom <= auxSearchFloatTopOffset()) return false;
        return trigger.getBoundingClientRect().top <= auxSearchFloatTopOffset();
    }

    function preserveAuxSearchInlineSpace(anchor, controls) {
        if (!anchor || !controls) return;
        let height = Math.ceil(controls.getBoundingClientRect().height);
        if (height) {
            const style = getComputedStyle(controls);
            const marginTop = Number.parseFloat(style.marginTop) || 0;
            const marginBottom = Number.parseFloat(style.marginBottom) || 0;
            height = Math.ceil(height + marginTop + marginBottom);
        }
        if (!height) height = Math.ceil(Number.parseFloat(controls.dataset.inlineHeight || '0'));
        if (!height) height = Math.ceil(Number.parseFloat(anchor.style.height || '0'));
        if (!height) return;
        controls.dataset.inlineHeight = String(height);
        anchor.style.height = height + 'px';
    }

    function mountAuxSearchControls(tab) {
        const popup = document.getElementById('aux-search-popup');
        const menu = document.getElementById('aux-search-menu');
        const toggle = document.getElementById('aux-search-toggle');
        const config = auxSearchControlConfig[tab];
        if (!popup || !menu || !toggle) return;
        if (!config) {
            restoreAuxSearchControls();
            auxSearchPopupOpen = false;
            popup.hidden = true;
            menu.hidden = true;
            toggle.setAttribute('aria-expanded', 'false');
            return;
        }
        if (!shouldFloatAuxSearchControls(tab)) {
            restoreAuxSearchControls();
            popup.hidden = true;
            menu.hidden = true;
            toggle.setAttribute('aria-expanded', 'false');
            return;
        }
        if (auxSearchMountedTab && auxSearchMountedTab !== tab) restoreAuxSearchControls();
        const controls = document.getElementById(config.controlsId);
        const anchor = document.getElementById(config.anchorId);
        if (controls && controls.parentElement !== menu) {
            preserveAuxSearchInlineSpace(anchor, controls);
            menu.appendChild(controls);
            auxSearchMountedTab = tab;
        } else if (controls && anchor && controls.parentElement === menu) {
            preserveAuxSearchInlineSpace(anchor, controls);
        }
        const label = auxSearchPopupLabel(tab);
        toggle.textContent = label;
        toggle.setAttribute('aria-label', label);
        toggle.setAttribute('aria-expanded', auxSearchPopupOpen ? 'true' : 'false');
        popup.hidden = false;
        menu.hidden = !auxSearchPopupOpen;
    }

    function requestAuxSearchSync() {
        if (auxSearchSyncFrame) return;
        auxSearchSyncFrame = requestAnimationFrame(() => {
            auxSearchSyncFrame = 0;
            mountAuxSearchControls(state.activeTab || 'mass');
        });
    }

    function setAuxSearchPopupOpen(open) {
        auxSearchPopupOpen = !!open;
        mountAuxSearchControls(state.activeTab || 'mass');
    }

    window.toggleAuxSearchPopup = function() {
        setAuxSearchPopupOpen(!auxSearchPopupOpen);
    };

    window.addEventListener('scroll', requestAuxSearchSync, { passive: true });
    window.addEventListener('resize', requestAuxSearchSync);

    function syncQuickHomeMenu(tab) {
        document.querySelectorAll('#quick-home-menu .quick-home-btn[data-home-tab]').forEach(btn => {
            const active = btn.dataset.homeTab === tab;
            btn.classList.toggle('is-active', active);
            btn.setAttribute('aria-current', active ? 'page' : 'false');
        });
    }

    window.goAppHome = function(tab) {
        if (tab === 'mass') state.massScrollSnapshot = null;
        showAppTab(tab);
        requestAnimationFrame(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    };

    function setSelectIfAvailable(id, value) {
        const el = document.getElementById(id);
        if (el && Array.from(el.options).some(option => option.value === value)) el.value = value;
    }

    function syncAuxPanelsWithSettings() {
        const activeTab = state.activeTab || 'mass';
        if (activeTab === 'prayers') {
            renderPrayerPanel();
        }
        if (activeTab === 'hymns') {
            setSelectIfAvailable('hymn-country', normalizeSelectableLang(state.currentLoc || 'KR', 'KR'));
            renderHymnPanel();
        }
        if (activeTab === 'churches') {
            state.churchCountry = churchCountryFromLocation(state.selectedLocationCode || state.currentLoc || 'KR');
            renderChurchPanel(state.churchCountry);
        }
    }

    function applyActiveTabState() {
        const tab = state.activeTab || 'mass';
        document.querySelectorAll('nav .nav-item[data-tab]').forEach(btn => {
            const isActive = btn.dataset.tab === tab;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
        const isMass = tab === 'mass';
        const missal = document.getElementById('missal-root');
        const legend = document.getElementById('role-legend');
        const prayerPanel = document.getElementById('prayer-panel');
        const hymnPanel = document.getElementById('hymn-panel');
        const churchPanel = document.getElementById('church-panel');
        document.body.classList.toggle('non-mass-tab', !isMass);
        if (missal) missal.hidden = !isMass;
        if (legend) legend.hidden = !isMass;
        if (prayerPanel) {
            const show = tab === 'prayers';
            prayerPanel.hidden = !show;
            prayerPanel.classList.toggle('active', show);
        }
        if (hymnPanel) {
            const show = tab === 'hymns';
            hymnPanel.hidden = !show;
            hymnPanel.classList.toggle('active', show);
        }
        if (churchPanel) {
            const show = tab === 'churches';
            churchPanel.hidden = !show;
            churchPanel.classList.toggle('active', show);
        }
        if (tab === 'prayers') renderPrayerPanel();
        if (tab === 'hymns') renderHymnPanel();
        if (tab === 'churches') renderChurchPanel(state.churchCountry || churchCountryFromLocation());
        mountAuxSearchControls(tab);
        syncQuickHomeMenu(tab);
        updateFooterCopyright();
        syncFloatingLiturgyBannerVisibility();
        syncLiturgyLoadingStatusBar(
            normalizeSelectableLang(state.currentLoc || 'KR', 'KR'),
            normalizeDistinctTargetLang(state.targetLang, state.currentLoc || 'KR')
        );
    }

    function captureMassTabScroll() {
        const selector = '#missal-root .part-container, #missal-root .section-bar, #missal-root .pair-block, #missal-root .pc-line-row:not(.pc-header-row)';
        const anchors = Array.from(document.querySelectorAll(selector));
        const probeY = Math.max(70, Math.min(window.innerHeight - 80, Math.round(window.innerHeight * 0.35)));
        const visible = anchors
            .map((anchor, index) => ({ anchor, index, rect: anchor.getBoundingClientRect() }))
            .filter(item => item.rect.height > 0 && item.rect.bottom >= 0 && item.rect.top <= window.innerHeight)
            .sort((left, right) => Math.abs(left.rect.top - probeY) - Math.abs(right.rect.top - probeY))[0];
        return {
            y: window.scrollY || document.documentElement.scrollTop || 0,
            index: visible ? visible.index : -1,
            offset: visible ? visible.rect.top : 0
        };
    }

    function restoreMassTabScroll(snapshot) {
        if (!snapshot) return;
        const selector = '#missal-root .part-container, #missal-root .section-bar, #missal-root .pair-block, #missal-root .pc-line-row:not(.pc-header-row)';
        const anchors = Array.from(document.querySelectorAll(selector));
        const anchor = snapshot.index >= 0 ? anchors[snapshot.index] : null;
        if (anchor) {
            window.scrollBy({ top: anchor.getBoundingClientRect().top - snapshot.offset, left: 0, behavior: 'auto' });
        } else {
            window.scrollTo({ top: snapshot.y || 0, left: 0, behavior: 'auto' });
        }
    }

    function scheduleMassTabScrollRestore(snapshot) {
        requestAnimationFrame(() => restoreMassTabScroll(snapshot));
        [80, 240, 600].forEach(delay => setTimeout(() => restoreMassTabScroll(snapshot), delay));
    }

    function showAppTab(tab) {
        const previousTab = state.activeTab || 'mass';
        const nextTab = ['mass', 'prayers', 'hymns', 'churches'].includes(tab) ? tab : 'mass';
        if (previousTab === 'mass' && nextTab !== 'mass') state.massScrollSnapshot = captureMassTabScroll();
        state.activeTab = nextTab;
        if (state.activeTab === 'hymns') {
            setSelectIfAvailable('hymn-country', normalizeSelectableLang(state.currentLoc || 'KR', 'KR'));
        }
        if (state.activeTab === 'churches' && !state.churchCountry) {
            state.churchCountry = churchCountryFromLocation(state.selectedLocationCode || state.currentLoc || 'KR');
        }
        applyActiveTabState();
        if (previousTab !== 'mass' && state.activeTab === 'mass') scheduleMassTabScrollRestore(state.massScrollSnapshot);
    }

    const pullRefreshUiLabels = {
        KR: { pull: '당겨서 새로고침', release: '놓아서 새로고침', loading: '새로고침 중', done: '새로고침 완료', error: '새로고침 실패' },
        VN: { pull: 'Kéo xuống để làm mới', release: 'Thả ra để làm mới', loading: 'Đang làm mới', done: 'Đã làm mới', error: 'Không thể làm mới' },
        EN: { pull: 'Pull to refresh', release: 'Release to refresh', loading: 'Refreshing', done: 'Refreshed', error: 'Refresh failed' },
        JP: { pull: '下に引いて更新', release: '離して更新', loading: '更新中', done: '更新しました', error: '更新できませんでした' },
        LA: { pull: 'Trahe ad renovandum', release: 'Dimitte ad renovandum', loading: 'Renovatur', done: 'Renovatum est', error: 'Renovari non potuit' }
    };
    const PULL_REFRESH_THRESHOLD = 86;
    let pullRefreshStartY = 0;
    let pullRefreshStartX = 0;
    let pullRefreshDistance = 0;
    let pullRefreshTracking = false;
    let pullRefreshBusy = false;

    function pullRefreshUiText(key) {
        const lang = normalizeSelectableLang(state.uiLang || 'KR', 'KR');
        const labels = pullRefreshUiLabels[lang] || pullRefreshUiLabels.KR;
        return labels[key] || pullRefreshUiLabels.KR[key] || '';
    }

    function updatePullRefreshIndicator(mode = 'hidden', distance = 0) {
        const indicator = document.getElementById('pull-refresh-indicator');
        const label = document.getElementById('pull-refresh-label');
        if (!indicator || !label) return;
        const visible = mode !== 'hidden';
        indicator.classList.toggle('is-visible', visible);
        indicator.classList.toggle('is-ready', mode === 'release');
        indicator.classList.toggle('is-refreshing', mode === 'loading');
        indicator.setAttribute('aria-hidden', visible ? 'false' : 'true');
        label.textContent = pullRefreshUiText(mode === 'hidden' ? 'pull' : mode);
        if (mode === 'pull' || mode === 'release') {
            const visualDistance = Math.min(112, Math.max(0, distance) * 0.62);
            indicator.style.transform = `translate(-50%, ${Math.max(-48, visualDistance - 54)}px)`;
        } else if (mode === 'done' || mode === 'error') {
            indicator.style.transform = 'translate(-50%, 0)';
        } else {
            indicator.style.removeProperty('transform');
        }
    }

    function pageDataScriptUrl(fileName) {
        const url = new URL(`JS file/${fileName}`, window.location.href);
        url.searchParams.set('pullRefresh', String(Date.now()));
        return url.href;
    }

    function reloadPageDataScript(fileName, onLoaded) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.async = true;
            script.src = pageDataScriptUrl(fileName);
            script.onload = () => {
                try {
                    if (typeof onLoaded === 'function') onLoaded();
                    resolve();
                } catch (error) {
                    reject(error);
                } finally {
                    script.remove();
                }
            };
            script.onerror = () => {
                script.remove();
                reject(new Error(`${fileName} reload failed`));
            };
            document.head.appendChild(script);
        });
    }

    async function refreshMassTabContent() {
        return fetchMassData({ skipStartupPrompts: true, forceRemote: true });
    }

    async function refreshPrayerTabContent() {
        await reloadPageDataScript('prayer_data.js');
        aiTranslationRecords.clear();
        renderPrayerPanel();
    }

    async function refreshHymnTabContent() {
        await reloadPageDataScript('hymn_data.js', () => {
            if (Array.isArray(window.ordoHymnData)) window.hymnData = window.ordoHymnData;
        });
        hymnTranslationRecords.clear();
        renderHymnPanel();
    }

    async function refreshChurchTabContent() {
        await reloadPageDataScript('church_local_details.js');
        churchPlaceDetailsCache.clear();
        usMassTimesCache.clear();
        churchSearchRequestId += 1;
        churchInfoRequestId += 1;
        if (churchIdleTimer) clearTimeout(churchIdleTimer);
        churchIdleTimer = null;
        if (churchInfoWindow) churchInfoWindow.close();
        churchInfoWindowOpen = false;
        clearChurchMarkers();
        const gpsCenter = await getGpsPositionForChurchMap({ forceFresh: true });
        const key = googleMapsApiKey() || await fetchGoogleMapsApiKey();
        if (key) await initializeChurchMap({ gpsCenter });
        else showChurchFallback(gpsCenter ? `${gpsCenter.lat},${gpsCenter.lng} Catholic church` : '');
    }

    const pageRefreshHandlers = {
        mass: refreshMassTabContent,
        prayers: refreshPrayerTabContent,
        hymns: refreshHymnTabContent,
        churches: refreshChurchTabContent
    };

    async function refreshActiveAppTab() {
        const tab = ['mass', 'prayers', 'hymns', 'churches'].includes(state.activeTab) ? state.activeTab : 'mass';
        const handler = pageRefreshHandlers[tab] || pageRefreshHandlers.mass;
        await handler();
        return tab;
    }
    window.refreshActiveAppTab = refreshActiveAppTab;

    function pullRefreshBlockedByUi() {
        if (document.body.classList.contains('consent-pending') || startupNoticeDecision !== true) return true;
        const settings = document.getElementById('settings-modal');
        const sourceChoice = document.getElementById('vn-source-modal');
        return !!((settings && getComputedStyle(settings).display !== 'none')
            || (sourceChoice && sourceChoice.classList.contains('is-visible')));
    }

    function pullRefreshCanStart(event) {
        if (pullRefreshBusy || pullRefreshBlockedByUi()) return false;
        if (!(navigator.maxTouchPoints > 0 || 'ontouchstart' in window)) return false;
        if (window.innerWidth > 1024) return false;
        if ((window.scrollY || document.documentElement.scrollTop || 0) > 1) return false;
        const target = event && event.target;
        return !(target && target.closest && target.closest('input, select, textarea, button, a, iframe, [role="application"], .gm-style'));
    }

    function resetPullRefreshGesture() {
        pullRefreshTracking = false;
        pullRefreshDistance = 0;
        pullRefreshStartY = 0;
        pullRefreshStartX = 0;
    }

    function handlePullRefreshTouchStart(event) {
        if (!event.touches || event.touches.length !== 1 || !pullRefreshCanStart(event)) return;
        pullRefreshTracking = true;
        pullRefreshStartY = event.touches[0].clientY;
        pullRefreshStartX = event.touches[0].clientX;
        pullRefreshDistance = 0;
    }

    function handlePullRefreshTouchMove(event) {
        if (!pullRefreshTracking || !event.touches || event.touches.length !== 1) return;
        const deltaY = event.touches[0].clientY - pullRefreshStartY;
        const deltaX = event.touches[0].clientX - pullRefreshStartX;
        if (deltaY <= 0 || Math.abs(deltaX) > deltaY) {
            updatePullRefreshIndicator('hidden');
            resetPullRefreshGesture();
            return;
        }
        pullRefreshDistance = deltaY;
        if (event.cancelable) event.preventDefault();
        updatePullRefreshIndicator(deltaY >= PULL_REFRESH_THRESHOLD ? 'release' : 'pull', deltaY);
    }

    async function runPullRefresh() {
        pullRefreshBusy = true;
        updatePullRefreshIndicator('loading');
        try {
            await window.refreshActiveAppTab();
            updatePullRefreshIndicator('done');
            await new Promise(resolve => setTimeout(resolve, 650));
        } catch (error) {
            console.warn('현재 페이지 새로고침 실패', error);
            updatePullRefreshIndicator('error');
            await new Promise(resolve => setTimeout(resolve, 1100));
        } finally {
            pullRefreshBusy = false;
            updatePullRefreshIndicator('hidden');
        }
    }

    function handlePullRefreshTouchEnd() {
        if (!pullRefreshTracking) return;
        const shouldRefresh = pullRefreshDistance >= PULL_REFRESH_THRESHOLD;
        resetPullRefreshGesture();
        if (shouldRefresh) runPullRefresh();
        else updatePullRefreshIndicator('hidden');
    }

    document.addEventListener('touchstart', handlePullRefreshTouchStart, { passive: true });
    document.addEventListener('touchmove', handlePullRefreshTouchMove, { passive: false });
    document.addEventListener('touchend', handlePullRefreshTouchEnd, { passive: true });
    document.addEventListener('touchcancel', () => {
        resetPullRefreshGesture();
        if (!pullRefreshBusy) updatePullRefreshIndicator('hidden');
    }, { passive: true });

    function syncFloatingLiturgyBannerVisibility() {
        const banner = document.getElementById('floating-liturgy-banner');
        const bannerText = document.getElementById('floating-liturgy-text') || banner;
        const header = document.getElementById('main-header');
        if (!banner || !header) return;
        const shouldShow = !!bannerText.textContent.trim() && header.getBoundingClientRect().bottom <= 0;
        const offset = shouldShow ? Math.ceil(banner.getBoundingClientRect().height) : 0;
        banner.classList.toggle('is-visible', shouldShow);
        banner.setAttribute('aria-hidden', shouldShow ? 'false' : 'true');
        document.documentElement.style.setProperty('--floating-liturgy-offset', `${offset}px`);
    }

    let floatingLiturgyFitFrame = 0;

    function floatingLiturgyLineTextWidth(line) {
        if (!line || !line.firstChild) return 0;
        const range = document.createRange();
        range.selectNodeContents(line);
        const width = range.getBoundingClientRect().width;
        if (typeof range.detach === 'function') range.detach();
        return width;
    }

    function fitFloatingLiturgyLines() {
        const banner = document.getElementById('floating-liturgy-banner');
        const bannerText = document.getElementById('floating-liturgy-text');
        if (!banner || !bannerText) return;
        const availableWidth = bannerText.clientWidth;
        const baseFontSize = Number.parseFloat(getComputedStyle(banner).fontSize) || 16;
        if (!(availableWidth > 0)) return;

        bannerText.querySelectorAll('.floating-liturgy-primary, .floating-liturgy-secondary').forEach(line => {
            line.style.removeProperty('font-size');
            line.style.removeProperty('letter-spacing');
            line.style.removeProperty('transform');
            line.dataset.fitAdjusted = 'false';
            let textWidth = floatingLiturgyLineTextWidth(line);
            if (textWidth <= availableWidth + 0.5) return;

            line.dataset.fitAdjusted = 'true';
            line.style.letterSpacing = '-0.04em';
            textWidth = floatingLiturgyLineTextWidth(line);
            if (textWidth > availableWidth + 0.5) {
                const fontScale = Math.max(0.78, Math.min(1, availableWidth / textWidth));
                line.style.fontSize = `${baseFontSize * fontScale}px`;
                textWidth = floatingLiturgyLineTextWidth(line);
            }
            if (textWidth > availableWidth + 0.5) {
                line.style.transform = `scaleX(${Math.min(1, availableWidth / textWidth)})`;
            }
        });
    }

    function scheduleFloatingLiturgyLineFit() {
        if (floatingLiturgyFitFrame) cancelAnimationFrame(floatingLiturgyFitFrame);
        floatingLiturgyFitFrame = requestAnimationFrame(() => {
            floatingLiturgyFitFrame = 0;
            fitFloatingLiturgyLines();
            syncFloatingLiturgyBannerVisibility();
        });
    }

    function updateFloatingLiturgyBanner(leftName, rightName) {
        const banner = document.getElementById('floating-liturgy-banner');
        const bannerText = document.getElementById('floating-liturgy-text') || banner;
        if (!banner) return;
        const names = [leftName, rightName].map(cleanNodeText).filter(Boolean);
        bannerText.replaceChildren();
        bannerText.setAttribute('aria-label', names.join(' / '));
        if (names[0]) {
            const primary = document.createElement('span');
            primary.className = 'floating-liturgy-primary';
            primary.textContent = names[0];
            bannerText.appendChild(primary);
        }
        if (names[1]) {
            const secondary = document.createElement('span');
            secondary.className = 'floating-liturgy-secondary';
            secondary.textContent = names[1];
            bannerText.appendChild(secondary);
        }
        fitFloatingLiturgyLines();
        syncFloatingLiturgyBannerVisibility();
        scheduleFloatingLiturgyLineFit();
    }

    function setupFloatingLiturgyBanner() {
        const banner = document.getElementById('floating-liturgy-banner');
        if (banner && !banner.dataset.clickBound) {
            banner.dataset.clickBound = 'true';
            banner.addEventListener('click', event => {
                if (event.target && event.target.closest && event.target.closest('button')) return;
                showAppTab('mass');
            });
        }
        window.addEventListener('scroll', syncFloatingLiturgyBannerVisibility, { passive: true });
        window.addEventListener('resize', scheduleFloatingLiturgyLineFit, { passive: true });
        syncFloatingLiturgyBannerVisibility();
    }

    function setLocationSelectByLang(langCode) {
        const select = document.getElementById('set-loc');
        if (!select) return;
        const matched = Object.keys(locationMeta).find(code => locationMeta[code].lang === langCode);
        if (matched) select.value = matched;
    }

    function setLocationSelectByCode(locationCode) {
        const select = document.getElementById('set-loc');
        if (select && locationMeta[locationCode]) select.value = locationCode;
    }

    // 설정 모달 제어
    function getAndroidSystemBarBridge() {
        const bridge = window.OrdoAndroid;
        return bridge
            && typeof bridge.isStatusBarHidden === 'function'
            && typeof bridge.isNavigationBarHidden === 'function'
            && typeof bridge.setSystemBarsHidden === 'function'
            ? bridge
            : null;
    }

    function syncAndroidSystemBarSettings() {
        const bridge = getAndroidSystemBarBridge();
        const statusRow = document.getElementById('android-status-bar-row');
        const navigationRow = document.getElementById('android-navigation-bar-row');
        if (statusRow) statusRow.hidden = !bridge;
        if (navigationRow) navigationRow.hidden = !bridge;
        if (!bridge) return;
        try {
            document.getElementById('set-hide-status-bar').checked = !!bridge.isStatusBarHidden();
            document.getElementById('set-hide-navigation-bar').checked = !!bridge.isNavigationBarHidden();
        } catch (error) {
            console.warn('Android 시스템 바 설정을 불러오지 못했습니다.', error);
        }
    }

    function updateAndroidSystemBarSettings() {
        const bridge = getAndroidSystemBarBridge();
        if (!bridge) return;
        const hideStatusBar = document.getElementById('set-hide-status-bar').checked;
        const hideNavigationBar = document.getElementById('set-hide-navigation-bar').checked;
        try {
            bridge.setSystemBarsHidden(hideStatusBar, hideNavigationBar);
        } catch (error) {
            console.warn('Android 시스템 바 설정을 적용하지 못했습니다.', error);
        }
    }

    function openSettings() {
        syncLocalizedChromeAndSettings();
        syncAndroidSystemBarSettings();
        syncVietnameseReadingSourceSettingVisibility();
        document.getElementById('settings-modal').style.display = 'flex';
    }
    function closeSettings() { document.getElementById('settings-modal').style.display = 'none'; }

    let startupNoticeDecision = null;
    let resolveStartupNoticeDecision = null;
    const startupNoticeDecisionPromise = new Promise(resolve => { resolveStartupNoticeDecision = resolve; });
    let vietnameseSourceChoicePromise = null;
    let resolveVietnameseSourceChoice = null;

    function waitForStartupNoticeDecision() {
        if (startupNoticeDecision !== null) return Promise.resolve(startupNoticeDecision);
        if (!document.body.classList.contains('consent-pending')) return Promise.resolve(true);
        return startupNoticeDecisionPromise;
    }

    function normalizeVietnameseReadingSource(value) {
        return value === 'ktcg' ? 'ktcg' : 'hanoi';
    }

    const vietnameseReadingSourceLabels = Object.freeze({
        hanoi: {
            KR: '베트남 주교회의 전례위원회 번역 · 미사독서',
            VN: 'Bản dịch Ủy ban Phụng tự (UBPT) · Sách Bài Đọc',
            EN: 'Vietnamese Episcopal Liturgy Commission (UBPT) translation · Mass Readings',
            JP: 'ベトナム司教協議会典礼委員会（UBPT）訳 · ミサ朗読',
            LA: 'Versio Commissionis Liturgicae Episcoporum Vietnamiae (UBPT) · Lectiones Missae'
        },
        ktcg: {
            KR: '베트남 성무일도번역위원회 번역 · 미사전례독서',
            VN: 'Bản dịch KTCGKPV · Sách Bài Đọc trong Thánh Lễ',
            EN: 'KTCGKPV translation · Liturgical Readings for Mass',
            JP: 'KTCGKPV訳 · ミサ典礼朗読',
            LA: 'Versio KTCGKPV · Lectiones liturgicae Missae'
        }
    });

    const vietnameseReadingSourceModalCopy = Object.freeze({
        KR: {
            title: '베트남어 전례독서 번역 선택',
            description: '베트남어 본문을 불러오기 전에 사용할 번역을 선택해 주세요.'
        },
        VN: {
            title: 'Chọn bản dịch bài đọc phụng vụ tiếng Việt',
            description: 'Vui lòng chọn bản dịch bài đọc phụng vụ tiếng Việt trước khi tải.'
        },
        EN: {
            title: 'Choose a Vietnamese Lectionary Translation',
            description: 'Choose the Vietnamese liturgical reading translation before loading the text.'
        },
        JP: {
            title: 'ベトナム語典礼朗読の翻訳を選択',
            description: 'ベトナム語本文を読み込む前に、使用する典礼朗読の翻訳を選択してください。'
        },
        LA: {
            title: 'Selectio versionis Lectionarii Vietnamici',
            description: 'Antequam textus Vietnamicus oneretur, versionem lectionum liturgicarum elige.'
        }
    });

    function vietnameseReadingSourceLabel(source, langCode) {
        const labels = vietnameseReadingSourceLabels[normalizeVietnameseReadingSource(source)] || vietnameseReadingSourceLabels.hanoi;
        const lang = normalizeSelectableLang(langCode || 'KR', 'KR');
        return labels[lang] || labels.KR;
    }

    function syncVietnameseSourceChoiceLabels() {
        const originalLang = normalizeSelectableLang(state.currentLoc || 'KR', 'KR');
        const translatedLang = normalizeDistinctTargetLang(state.targetLang, originalLang);
        const originalCopy = vietnameseReadingSourceModalCopy[originalLang] || vietnameseReadingSourceModalCopy.KR;
        const translatedCopy = vietnameseReadingSourceModalCopy[translatedLang] || vietnameseReadingSourceModalCopy.KR;
        const modalCopyTargets = [
            ['[data-vn-source-title-main]', originalCopy.title],
            ['[data-vn-source-title-translation]', translatedCopy.title],
            ['[data-vn-source-description-main]', originalCopy.description],
            ['[data-vn-source-description-translation]', translatedCopy.description]
        ];
        modalCopyTargets.forEach(([selector, value]) => {
            const target = document.querySelector(selector);
            if (target) target.textContent = value;
        });
        document.querySelectorAll('.vn-source-btn[data-vn-source]').forEach(button => {
            const source = normalizeVietnameseReadingSource(button.dataset.vnSource);
            const main = button.querySelector('[data-vn-source-main]');
            const translation = button.querySelector('[data-vn-source-translation]');
            if (main) main.textContent = vietnameseReadingSourceLabel(source, originalLang);
            if (translation) translation.textContent = vietnameseReadingSourceLabel(source, translatedLang);
        });
    }

    function syncVietnameseReadingSourceSelect() {
        const select = document.getElementById('set-vn-source');
        if (select) select.value = normalizeVietnameseReadingSource(state.vnReadingSource);
        syncVietnameseSourceChoiceLabels();
    }

    function activeSourcesIncludeVietnamese(sources = getActiveDailySourceLanguages()) {
        return (sources || []).some(lang => normalizeSelectableLang(lang, '') === 'VN');
    }

    function ensureVietnameseReadingSourceChoice(sources) {
        if (!activeSourcesIncludeVietnamese(sources) || state.vnReadingSourceConfirmed) {
            syncVietnameseReadingSourceSelect();
            return Promise.resolve(state.vnReadingSource);
        }
        const modal = document.getElementById('vn-source-modal');
        if (!modal) return Promise.resolve(state.vnReadingSource);
        modal.classList.add('is-visible');
        syncVietnameseReadingSourceSelect();
        if (!vietnameseSourceChoicePromise) {
            vietnameseSourceChoicePromise = new Promise(resolve => { resolveVietnameseSourceChoice = resolve; });
        }
        return vietnameseSourceChoicePromise;
    }

    function chooseVietnameseReadingSource(source) {
        state.vnReadingSource = normalizeVietnameseReadingSource(source);
        state.vnReadingSourceConfirmed = true;
        persistAndroidAppSettings();
        syncVietnameseReadingSourceSelect();
        const modal = document.getElementById('vn-source-modal');
        if (modal) modal.classList.remove('is-visible');
        if (resolveVietnameseSourceChoice) resolveVietnameseSourceChoice(state.vnReadingSource);
        vietnameseSourceChoicePromise = null;
        resolveVietnameseSourceChoice = null;
        queuePendingLiturgyCompletionAfterChoice();
    }

    function acceptStartupNotice() {
        const modal = document.getElementById('consent-modal');
        if (modal) modal.style.display = 'none';
        document.body.classList.remove('consent-pending');
        startupNoticeDecision = true;
        persistAndroidAppSettings({ consentAccepted: true });
        if (resolveStartupNoticeDecision) resolveStartupNoticeDecision(true);
        syncFloatingLiturgyBannerVisibility();
        queuePendingLiturgyCompletionAfterChoice();
    }

    function declineStartupNotice() {
        state.startupConsentDeclined = true;
        startupNoticeDecision = false;
        if (resolveStartupNoticeDecision) resolveStartupNoticeDecision(false);
        window.close();
        document.body.innerHTML = [
            '<div class="closed-message">',
            '<div>동의하지 않아 이용을 종료합니다.<br>',
            'You chose not to agree, so this page has been closed.</div>',
            '</div>'
        ].join('');
    }

    function updateSettings() {
        const previousLoc = state.currentLoc;
        const previousLocationCode = state.selectedLocationCode;
        const previousTargetLang = state.targetLang;
        const previousUiLang = state.uiLang;
        const previousUseGps = state.useGps;
        const previousVnReadingSource = state.vnReadingSource;
        const previousTimeZone = activeLiturgicalTimeZone();
        state.useGps = document.getElementById('set-gps').checked;
        document.getElementById('manual-loc-row').style.display = state.useGps ? 'none' : 'flex';

        if (!state.useGps) {
            state.selectedLocationCode = document.getElementById('set-loc').value || 'KR';
            state.gpsTimeZone = '';
            state.gpsCoordinates = null;
            applyGpsBishopContext(null);
            state.currentLoc = normalizeSelectableLang(getLangFromLocation(state.selectedLocationCode), 'KR');
        } else if (!previousUseGps) {
            simulateGPS(); // GPS 스위치를 방금 켰을 때만 재탐색
        }

        if (previousLoc !== state.currentLoc || previousLocationCode !== state.selectedLocationCode
            || previousUseGps !== state.useGps || previousTimeZone !== activeLiturgicalTimeZone()) {
            state.liturgicalDateContext = null;
        }

        state.targetLang = normalizeDistinctTargetLang(document.getElementById('set-target-lang').value, state.currentLoc);
        state.vnReadingSource = normalizeVietnameseReadingSource(document.getElementById('set-vn-source').value);
        state.vnReadingSourceConfirmed = true;
        state.layoutStacked = document.getElementById('set-stacked').checked;
        state.fontSize = document.getElementById('set-font-size').value;
        state.uiLang = normalizeSelectableLang(document.getElementById('set-ui-lang').value, 'KR'); /* 사용자가 바꾼 설정창 언어를 기억 창고에 저장합니다. */
        rememberUiLanguage(state.uiLang);
        if ((state.activeTab || 'mass') === 'mass' && previousUiLang !== state.uiLang) {
            state.targetLang = targetLangForUiLanguage(state.uiLang, state.currentLoc);
        }
        syncTargetLanguageOptions();
        syncVietnameseReadingSourceSelect();
        document.getElementById('set-ui-lang').value = state.uiLang;
        syncLocalizedChromeAndSettings();
        syncAuxPanelsWithSettings();

        document.documentElement.style.setProperty('--font-size-base', state.fontSize);
        persistAndroidAppSettings({ consentAccepted: startupNoticeDecision === true });
        if (previousLoc !== state.currentLoc || previousLocationCode !== state.selectedLocationCode
            || previousUseGps !== state.useGps || previousTimeZone !== activeLiturgicalTimeZone()) {
            fetchMassData();
            return;
        }
        if (previousTargetLang !== state.targetLang) {
            fetchMassData();
            return;
        }
        if (previousVnReadingSource !== state.vnReadingSource && activeSourcesIncludeVietnamese()) {
            fetchMassData();
            return;
        }
        render();
    }


    const bibleMap = {
        // 구약성경 (46권)
        // = "한국어단축어": ["베트남어", "영어", "일본어", "라틴어"]
        "창세": ["St", "Gn", "創", "Gen."],
        "탈출": ["Xh", "Ex", "出", "Ex."],
        "레위": ["Lv", "Lv", "レビ", "Lv."],
        "민수": ["Ds", "Nm", "民", "Nm."],
        "신명": ["Đnl", "Dt", "申", "Dt."],
        "여호": ["Gs", "Jos", "ヨシュ", "Ios."],
        "판관": ["Tl", "Jgs", "士", "Idc."],
        "룻": ["R", "Ru", "ルツ", "Rt."],
        "1사무": ["1 Sm", "1 Sm", "サム上", "1 Sm."],
        "2사무": ["2 Sm", "2 Sm", "サム下", "2 Sm."],
        "1열왕": ["1 V", "1 Kgs", "列上", "1 Reg."],
        "2열왕": ["2 V", "2 Kgs", "列下", "2 Reg."],
        "1역대": ["1 Sb", "1 Chr", "歴上", "1 Chr."],
        "2역대": ["2 Sb", "2 Chr", "歴下", "2 Chr."],
        "에즈": ["Er", "Ezr", "エズ", "Ezr."],
        "느헤": ["Nkm", "Neh", "ネヘ", "Neh."],
        "토빗": ["Tb", "Tb", "トビ", "Tb."],
        "유딧": ["Gđt", "Jdt", "ユデ", "Idt."],
        "에스": ["Et", "Est", "エス", "Est."],
        "1마카": ["1 Mcb", "1 Mc", "マカ一", "1 Mc."],
        "2마카": ["2 Mcb", "2 Mc", "マカ二", "2 Mc."],
        "욥": ["G", "Jb", "ヨブ", "Iob."],
        "시편": ["Tv", "Ps", "詩", "Ps."],
        "잠언": ["Cn", "Prv", "箴", "Prv."],
        "코헬": ["Gv", "Eccl", "コヘ", "Eccl."],
        "아가": ["Dc", "Song", "雅", "Ct."],
        "지혜": ["Kn", "Wis", "知", "Sap."],
        "집회": ["Hc", "Sir", "シラ", "Sir."],
        "이사": ["Is", "Is", "イザ", "Is."],
        "예레": ["Gr", "Jer", "エレ", "Ier."],
        "애가": ["Ac", "Lam", "哀", "Lam."],
        "바룩": ["Br", "Bar", "バル", "Bar."],
        "에제": ["Ed", "Ez", "エゼ", "Ez."],
        "다니": ["Đn", "Dn", "ダニ", "Dn."],
        "호세": ["Hs", "Hos", "ホセ", "Os."],
        "요엘": ["Ge", "Jl", "ヨエ", "Ioel."],
        "아모": ["Am", "Am", "アモ", "Am."],
        "오바": ["Ôv", "Ob", "オバ", "Abd."],
        "요나": ["Gn", "Jon", "ヨナ", "Ion."],
        "미카": ["Mk", "Mi", "ミカ", "Mi."],
        "나훔": ["Nk", "Na", "ナホ", "Na."],
        "하바": ["Kb", "Hb", "ハバ", "Hb."],
        "스파": ["Xp", "Zep", "ゼファ", "So."],
        "학개": ["Kg", "Hg", "ハガ", "Ag."],
        "즈카": ["Dcr", "Zec", "ゼカ", "Za."],
        "말라": ["Ml", "Mal", "マラ", "Ml."],

        // 신약성경 (27권)
        "마태": ["Mt", "Mt", "マタ", "Mt."],
        "마르": ["Mc", "Mk", "マル", "Mc."],
        "루카": ["Lc", "Lk", "ルカ", "Lc."],
        "요한": ["Ga", "Jn", "ヨハ", "Io."],
        "사도": ["Cv", "Acts", "使", "Act."],
        "로마": ["Rm", "Rom", "ロマ", "Rom."],
        "1코린": ["1 Cr", "1 Cor", "コリ一", "1 Cor."],
        "2코린": ["2 Cr", "2 Cor", "コリ二", "2 Cor."],
        "갈라": ["Gl", "Gal", "ガラ", "Gal."],
        "에페": ["Ep", "Eph", "エフェ", "Eph."],
        "필리": ["Pl", "Phil", "フィリ", "Phil."],
        "콜로": ["Cl", "Col", "コロ", "Col."],
        "1테살": ["1 Tx", "1 Thes", "テサ一", "1 Thess."],
        "2테살": ["2 Tx", "2 Thes", "テサ二", "2 Thess."],
        "1티모": ["1 Tm", "1 Tm", "テモ一", "1 Tim."],
        "2티모": ["2 Tm", "2 Tm", "テモ二", "2 Tim."],
        "티토": ["Tt", "Ti", "テト", "Tit."],
        "필레": ["Plm", "Phlm", "フィレ", "Phlm."],
        "히브": ["Hr", "Heb", "ヘブ", "Hebr."],
        "야고": ["Gc", "Jas", "ヤコ", "Iac."],
        "1베드": ["1 Pr", "1 Pt", "ペト一", "1 Pt."],
        "2베드": ["2 Pr", "2 Pt", "ペト二", "2 Pt."],
        "1요한": ["1 Ga", "1 Jn", "ヨハ一", "1 Io."],
        "2요한": ["2 Ga", "2 Jn", "ヨハ二", "2 Io."],
        "3요한": ["3 Ga", "3 Jn", "ヨハ三", "3 Io."],
        "유다": ["Gđ", "Jude", "ユダ", "Iud."],
        "묵시": ["Kh", "Rv", "黙", "Apc."]
    };

    const suffixMap = { 'ㄱ': 'a', 'ㄴ': 'b', 'ㄷ': 'c', 'ㄹ': 'd', 'ㅁ': 'e', 'ㅂ': 'f', 'ㅅ': 'g', 'ㅇ': 'h', 'ㅈ': 'i', 'ㅊ': 'j', 'ㅋ': 'k', 'ㅌ': 'l', 'ㅍ': 'm', 'ㅎ': 'n'};

    function formatBibleCit(cit, targetLang) {
        if (!cit) return cit;
        let converted = cit;

        // 🌟 언어별로 서랍 번호를 지정합니다 (VN:0, EN:1, JP:2, LA:3)
        const langIndex = {'VN': 0, 'EN': 1, 'JP': 2, 'LA': 3}[targetLang];
        const referenceMarkerPrefix = { 'VN': 'x.', 'EN': 'cf.', 'JP': '\u53C2\u7167', 'LA': 'cf.' }[targetLang] || 'x.';
        const shouldTranslateReferenceMarker = langIndex !== undefined && /(?:\uCC38\uACE0|\uCC38\uC870)\s*$/u.test(converted);
        if (shouldTranslateReferenceMarker) {
            converted = converted.replace(/\s*(?:\uCC38\uACE0|\uCC38\uC870)\s*$/u, '').trim();
        }

        // 1. 성경 권 이름 변환
        const sortedKeys = Object.keys(bibleMap).sort((a, b) => b.length - a.length);
        for (let kr of sortedKeys) {
            if (converted.includes(kr)) {
                // 한국어면 원본 유지, 다른 언어면 알맞은 번호의 서랍에서 꺼냅니다!
                const replacement = langIndex !== undefined ? bibleMap[kr][langIndex] : kr;
                converted = converted.replace(kr, replacement);
                break;
            }
        }

        // 2. 한국어 첨자 변환 (ㄱ->a, ㄴ->b 등)
        if (langIndex !== undefined) {
            for (let krChar in suffixMap) {
                if (converted.includes(krChar)) {
                    converted = converted.split(krChar).join(suffixMap[krChar]);
                }
            }
        }
        if (shouldTranslateReferenceMarker && converted) {
            converted = targetLang === 'JP' ? `${converted} ${referenceMarkerPrefix}` : `${referenceMarkerPrefix} ${converted}`;
        }
        return converted;
    }

    function langCodeFromLowerKey(lower) {
        return { kr: 'KR', vn: 'VN', en: 'EN', jp: 'JP', la: 'LA' }[lower] || String(lower || '').toUpperCase();
    }

    function fillMissingCitationsFromKorean(cit, lowerLangs) {
        if (!cit || !cit.cit_kr) return cit;
        lowerLangs.forEach(lower => {
            if (lower === 'kr') return;
            const key = `cit_${lower}`;
            if (cit[key]) return;
            const translated = formatBibleCit(cit.cit_kr, langCodeFromLowerKey(lower));
            if (translated) cit[key] = translated;
        });
        return cit;
    }

    function languageHasActualSourceText(lines, lower, baseId) {
        return (Array.isArray(lines) ? lines : []).some(line => {
            const text = cleanNodeText(line && line[`text_${lower}`]);
            if (!text || isAIButton(text)) return false;
            if (baseId === 'gospel_accl' && isAlleluiaOnlyText(text)) return false;
            return true;
        });
    }

    function filterCitationsByVariantText(cit, lines, lowerLangs, baseId) {
        if (!cit) return cit;
        lowerLangs.forEach(lower => {
            const key = `cit_${lower}`;
            if (cit[key] && !languageHasActualSourceText(lines, lower, baseId)) delete cit[key];
        });
        return cit;
    }

    const dailySectionMarkers = {
        KR: {
            entrance: [/^입당송/], collect: [/^본기도/], reading1: [/^제1독서/], psalm: [/^화답송/], reading2: [/^제2독서/], gospel_accl: [/^복음\s*환호송/], gospel: [/^복음$/], prayer_offerings: [/^예물\s*기도/], preface: [/^감사송/], communion: [/^영성체송/], meditation_after_communion: [/^영성체\s*후\s*묵상/], prayer_after: [/^영성체\s*후\s*기도/], meditation: [/^오늘의\s*묵상/]
        },
        EN: {
            reading1: [/^Reading\s*(1|I)\b/i, /^First Reading\b/i], psalm: [/^Responsorial( Psalm)?\b/i], reading2: [/^Reading\s*(2|II)\b/i, /^Second Reading\b/i], gospel_accl: [/^Alleluia\b/i, /^Verse Before the Gospel\b/i], gospel: [/^Gospel\b/i], preface: [/^Preface\b/i]
        },
        JP: {
            reading1: [/^第一朗読/], psalm: [/^答唱詩編/], reading2: [/^第二朗読/], gospel_accl: [/^アレルヤ唱/, /^詠唱/], gospel: [/^福音朗読/], preface: [/^叙唱/]
        },
        VN: {
            entrance: [/^Ca nhập lễ/i], collect: [/^Lời nguyện nhập lễ/i], reading1: [/^Bài [ĐÐ]ọc I/i], psalm: [/^[ĐÐ]áp Ca/i, /^[ĐÐ]áp ca/i], reading2: [/^Bài [ĐÐ]ọc II/i], gospel_accl: [/^Alleluia/i, /^Tung hô Tin Mừng/i], gospel: [/^Phúc Âm/i, /^Tin Mừng\s*:/i], prayer_offerings: [/^Lời nguyện tiến lễ/i], preface: [/^Lời tiền tụng/i, /^Kinh Tiền Tụng/i], communion: [/^Ca hiệp lễ/i], meditation_after_communion: [/^Suy niệm sau hiệp lễ/i], prayer_after: [/^Lời nguyện (?:hiệp|kết) lễ/i], meditation: [/^Suy niệm/i]
        }
    };

    const sourceUrls = {
        KR: date => `https://missa.cbck.or.kr/DailyMissa/${formatDateYmd(date)}`,
        EN_RSS: () => 'https://bible.usccb.org/readings.rss',
        EN: date => `https://bible.usccb.org/bible/readings/${formatDateMmddyy(date)}.cfm`,
        IBREVIARY: (section, date, lang) => `https://www.ibreviary.com/m2/letture.php?s=${encodeURIComponent(section)}&b=1&lang=${lang === 'LA' ? 'la' : 'en'}&giorno=${date.getDate()}&mese=${date.getMonth() + 1}&anno=${date.getFullYear()}`,
        JP: date => `https://higotonofukuin.org/spip.php?date=${formatDateIso(date)}&page=quotidien`,
        VN_INDEX: () => 'https://www.tonggiaophanhanoi.org/bai-doc-thanh-le-moi-ngay/',
        VN_CALENDAR_INDEX: () => 'https://www.tonggiaophanhanoi.org/category/phung-vu/lich-cong-giao/'
    };

    // Official Hanoi missal text, indexed by the perpetual liturgical cycle
    // rather than by a calendar date. This fallback therefore serves every
    // even-year Thursday of Ordinary Time week XV when the remote reader is
    // throttled, including but not limited to 2026-07-16.
    const vietnameseTemporalFallbackSources = {
        'ordinary:15:4:II': `Title: Thứ Năm tuần XV Thường Niên
URL Source: https://www.tonggiaophanhanoi.org/thu-nam-tuan-xv-thuong-nien/
Markdown Content:
Thứ Năm tuần XV Thường Niên
Màu phụng vụ: Xanh
Ca nhập lễ
Phần tôi, nhờ công chính, tôi sẽ được nhìn thấy thánh nhan Chúa, tôi sẽ được no thoả khi Chúa tỏ bày sự vinh quang của Chúa.
Lời nguyện nhập lễ
Lạy Chúa, Chúa cho kẻ lầm lạc thấy ánh sáng chân lý của Chúa để họ được trở về nẻo chính đường ngay; xin ban cho những người xưng mình là Kitô hữu biết tránh mọi điều bất xứng và theo đuổi những gì thích hợp với danh nghĩa của mình. Chúng con cầu xin…
Bài Đọc I: (Năm II) Is 26, 7-9. 12. 16-19
“Hỡi những kẻ nằm trong tro bụi, hãy thức dậy và hãy nhảy mừng”.
Trích sách Tiên tri Isaia.
Đường lối người công chính thì ngay thẳng, Chúa ban cho bằng phẳng đường nẻo của người công chính. Lạy Chúa, chúng con cậy trông Chúa trong đường xét xử của Chúa. Thánh danh và sự kính nhớ Chúa là sự ước mong của tâm hồn. Ban đêm hồn con khát khao Chúa, và sớm mai khi thức dậy, lòng trí con hướng về Chúa. Từ khi Chúa thực hiện việc xét xử ở trần gian, thì người dương thế học biết sự công chính.
Lạy Chúa, Chúa ban cho chúng con ơn bình an, vì mọi việc chúng con làm, đều do Chúa làm cho chúng con.
Lạy Chúa, trong cơn hoạn nạn, chúng con đã tìm kiếm Chúa, và trong khi Chúa sửa dạy, chúng con kêu van đến Chúa. Lạy Chúa, trước tôn nhan Chúa, chúng con khác nào như đàn bà mang thai sắp sinh, kêu la đau đớn. Chúng con cưu mang, chúng con đau đớn như phải sinh con.
Chúng con không mang lại sự cứu độ cho trần gian, và không còn người sinh ra trên trần gian. Người chết của Chúa sẽ được sống, các xác chết của con sẽ sống lại. Hỡi những kẻ nằm trong tro bụi, hãy thức dậy và nhảy mừng, vì sương Chúa là sương ánh sáng, và trái đất sẽ làm tái sinh u tối.
Đó là lời Chúa.
Đáp Ca: Tv 101, 13-14ab và 15. 16-18. 19-21
Đáp: Từ trời cao xanh Chúa đã quan sát địa cầu.
Xướng: Phần Chúa, lạy Chúa, đời đời còn mãi và danh Ngài tồn tại đời nọ tới đời kia. Xin Ngài đứng lên, thương xót Sion, nay là thời để Ngài quan tâm phù trợ. Các bầy tôi ưa thích tường hoa móng đá, và ngậm ngùi thương đống gạch tro hoang tàn. – Đáp.
Xướng: Lạy Chúa, muôn dân sẽ kính tôn danh thánh Chúa, và mọi vua trên địa cầu sẽ quý trọng vinh quang Ngài; khi Chúa sẽ tái lập Sion, Ngài xuất hiện trong vinh quang xán lạn; Ngài sẽ đoái nghe lời nguyện kẻ túng nghèo, và không chê lời họ kêu van. – Đáp.
Xướng: Những điều này được ghi lại cho thế hệ mai sau, và dân tộc được tác tạo sẽ ca tụng Thiên Chúa. Từ thánh điện cao sang Chúa đã đoái nhìn, từ trời cao Chúa đã ngó xuống trần thế, để nghe tiếng than khóc của tù nhân, để giải thoát kẻ bị lên án tử. – Đáp.
Alleluia: Tv 118, 27
Alleluia, alleluia! – Xin Chúa cho con hiểu đường lối những huấn lệnh của Chúa, và con suy gẫm các điều lạ lùng của Chúa. – Alleluia.
Hoặc đọc: Alleluia, alleluia! – Chúa nói: “Tất cả những ai đang vất vả mang gánh nặng nề, hãy đến cùng tôi, tôi sẽ cho nghỉ ngơi bồi dưỡng”. – Alleluia.
Phúc Âm: Mt 11, 28-30
“Ta hiền lành và khiêm nhượng trong lòng”.
Tin Mừng Chúa Giêsu Kitô theo Thánh Matthêu.
Khi ấy, Chúa Giêsu phán rằng: “Hãy đến với Ta tất cả, hỡi những ai khó nhọc và gánh nặng, Ta sẽ nâng đỡ bổ sức cho các ngươi. Hãy mang lấy ách của Ta và hãy học cùng Ta, vì Ta hiền lành và khiêm nhượng trong lòng, và tâm hồn các ngươi sẽ gặp được bình an. Vì ách của Ta thì êm ái và gánh của Ta thì nhẹ nhàng”.
Đó là lời Chúa.
Lời nguyện tiến lễ
Lạy Chúa, Hội Thánh Chúa thành tâm cầu nguyện và dâng lên Chúa lễ vật này; xin thương đoái nhìn và làm cho trở nên của ăn bổ dưỡng giúp chúng con vững bước trên đường nên thánh. Chúng con cầu xin…
Ca hiệp lễ
Đến như chim sẻ còn kiếm được nhà, và chim nhạn tìm ra tổ ấm, để làm nơi ấp ủ con mình, cạnh bàn thờ Chúa, ôi Chúa thiên binh. Ôi đại vương và Thiên Chúa tôi. Phúc cho những ai trú ngụ nơi nhà Chúa, họ sẽ ca tụng Chúa tới muôn đời.
Hoặc đọc:
Chúa phán: “Ai ăn thịt Ta và uống máu Ta, thì ở trong Ta, và Ta ở trong kẻ ấy”.
Lời nguyện kết lễ
Lạy Chúa, chúng con vừa lãnh nhận hồng ân Chúa ban, xin cho chúng con mỗi khi cử hành bí tích này được hưởng dồi dào ơn cứu độ. Chúng con cầu xin…`
    };

    function vietnameseTemporalFallbackKey(date) {
        const meta = getSeasonMeta(date);
        if (!meta || !meta.season || !meta.week || !Number.isInteger(meta.day)) return '';
        return `${meta.season}:${meta.week}:${meta.day}:${meta.weekdayCycle || getWeekdayCycle(date)}`;
    }

    function vietnameseTemporalFallbackParsed(date) {
        const source = vietnameseTemporalFallbackSources[vietnameseTemporalFallbackKey(date)];
        if (!source) return null;
        const parsed = parseVietnameseDailyMass(source, date);
        if (!hasCompleteVietnameseParsedMass(parsed)) return null;
        parsed.sourceUrl = 'https://www.tonggiaophanhanoi.org/thu-nam-tuan-xv-thuong-nien/';
        parsed.sourceMode = 'perpetual-temporal-fallback';
        return parsed;
    }

    const specialMassFiles = {
        ash_wednesday: { file: 'JS%20file/ash-wednesday.js', names: { KR: '재의 수요일', EN: 'Ash Wednesday' } },
        palm_sunday: { file: 'JS%20file/palm-sunday.js', names: { KR: '주님 수난 성지 주일', EN: 'Palm Sunday of the Passion of the Lord' } },
        holy_thursday: { file: 'JS%20file/holy-thursday.js', names: { KR: '주님 만찬 성목요일', EN: 'Holy Thursday - Evening Mass of the Lord’s Supper' } },
        good_friday: { file: 'JS%20file/good-friday.js', names: { KR: '주님 수난 성금요일', EN: 'Friday of the Passion of the Lord' } },
        easter_vigil: { file: 'JS%20file/easter-vigil.js', names: { KR: '주님 부활 대축일 파스카 성야', EN: 'Easter Vigil in the Holy Night' } },
        christmas_vigil: { file: 'JS%20file/christmas-vigil.js', names: { KR: '주님 성탄 대축일 - 성야 미사', EN: 'The Nativity of the Lord - Vigil Mass' } }
    };
    const loadedSpecialMassScripts = {};

    function toJinaReaderUrl(url) {
        if (/^https:\/\/r\.jina\.ai\//i.test(url)) return url;
        const safeTarget = encodeURI(url).replace(/\?/g, '%3F').replace(/&/g, '%26');
        return `https://r.jina.ai/${safeTarget}`;
    }

    function toNestedJinaReaderUrl(url) {
        if (/^https:\/\/r\.jina\.ai\//i.test(url)) return '';
        const withoutScheme = String(url || '').replace(/^https?:\/\//i, '');
        if (!withoutScheme) return '';
        const nestedTarget = `http://r.jina.ai/http://${withoutScheme}`;
        const safeTarget = encodeURI(nestedTarget).replace(/\?/g, '%3F').replace(/&/g, '%26');
        return `https://r.jina.ai/${safeTarget}`;
    }

    function buildFetchCandidates(url) {
        const candidates = [toJinaReaderUrl(url), toNestedJinaReaderUrl(url)];
        return candidates.filter((candidate, index, list) => candidate && list.indexOf(candidate) === index);
    }

    function formatDateYmd(date) {
        return `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
    }

    function formatDateIso(date) {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    }

    function formatDateMmddyy(date) {
        return `${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}${String(date.getFullYear()).slice(-2)}`;
    }

    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function fetchWithTimeout(url, options = {}) {
        const controller = new AbortController();
        const timeoutMs = Number.isFinite(options.timeoutMs) ? options.timeoutMs : REMOTE_FETCH_TIMEOUT_MS;
        const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
        try {
            return await fetch(url, Object.assign({}, options, { signal: controller.signal }));
        } finally {
            clearTimeout(timeoutId);
        }
    }

    async function fetchTextWithFallbacks(url, options = {}) {
        const candidates = buildFetchCandidates(url);
        const maxRetries = Number.isFinite(options.retries) ? options.retries : REMOTE_FETCH_RETRIES;
        let lastError = null;
        let attempt = 0;
        while (true) {
            for (const candidate of candidates) {
                try {
                    const response = await fetchWithTimeout(candidate, { cache: 'no-cache', timeoutMs: options.timeoutMs });
                    if (!response.ok) {
                        const error = new Error(`HTTP ${response.status}`);
                        error.status = response.status;
                        error.permanent = [400, 401, 403, 404, 410].includes(response.status);
                        throw error;
                    }
                    return await response.text();
                } catch (error) {
                    lastError = error;
                }
            }
            if (lastError && lastError.permanent) throw lastError;
            attempt += 1;
            if (attempt > maxRetries) throw lastError || new Error(`전례 소스를 읽지 못했습니다: ${url}`);
            const delay = Math.min(30000, 1500 * attempt);
            showLiturgyLoadingMessage();
            console.warn(`전례 소스 읽기 재시도 ${attempt}: ${url}`, lastError);
            await wait(delay);
        }
    }

    async function fetchJinaHtml(url, options = {}) {
        let lastError = null;
        for (const candidate of buildFetchCandidates(url)) {
            try {
                const response = await fetchWithTimeout(candidate, {
                    cache: 'no-cache',
                    timeoutMs: options.timeoutMs || REMOTE_FETCH_TIMEOUT_MS,
                    headers: { 'x-respond-with': 'html', 'x-no-cache': 'true' }
                });
                if (!response.ok) {
                    const error = new Error(`HTTP ${response.status}`);
                    error.status = response.status;
                    throw error;
                }
                return response.text();
            } catch (error) {
                lastError = error;
            }
        }
        throw lastError || new Error(`전례 HTML 소스를 읽지 못했습니다: ${url}`);
    }

    function ktcgkpvFormBody(date) {
        return {
            day: String(date.getDate()),
            month: String(date.getMonth() + 1),
            year: String(date.getFullYear())
        };
    }

    const KTCG_PROXY_ENDPOINT = window.ORDO_KTCG_PROXY_ENDPOINT || 'https://us-central1-ordinary-mass-app.cloudfunctions.net/ktcgProxy';

    async function fetchKtcgkpvMassReadingJson(date) {
        const body = ktcgkpvFormBody(date);
        const cacheDate = formatDateIso(date);
        const endpoint = `${KTCG_PROXY_ENDPOINT}${KTCG_PROXY_ENDPOINT.includes('?') ? '&' : '?'}date=${encodeURIComponent(cacheDate)}`;
        const response = await fetchWithTimeout(endpoint, {
            method: 'POST',
            cache: 'no-cache',
            timeoutMs: KTCG_CITATION_TIMEOUT_MS,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const payload = await response.json();
        if (!payload || !payload.success || !payload.data) throw new Error('KTCG mass-reading JSON is empty');
        return payload.data;
    }

    function ktcgkpvChoiceTitle(choice) {
        if (!choice) return '';
        const dateInfo = choice.date_info || {};
        return cleanLiturgyTitle(choice.display_text || dateInfo.daily_title || '');
    }

    function ktcgkpvChoiceCitations(choice, names) {
        return firstNonEmptyKtcgkpvArray(choice, names).flatMap(entry => [
            ktcgkpvCitationFromEntry(entry),
            cleanCitation(entry && (entry.OPTIONAL_INDEXING || entry.optional_indexing || ''))
        ]).filter(Boolean);
    }

    function ktcgkpvChoiceIsSeasonal(choice) {
        const dateInfo = (choice && choice.date_info) || {};
        const normalized = normalizeVietnameseDiocesanMatchText(
            `${choice && choice.display_text || ''} ${dateInfo.daily_title || ''}`
        );
        return /\b(?:ngay thuong|mua thuong nien|tuan [ivx\d]+(?:\s*-\s*mua)? thuong nien)\b/.test(normalized);
    }

    function ktcgkpvChoiceMatchesRequestedDate(choice, date) {
        if (!(date instanceof Date) || Number.isNaN(date.getTime())) return true;
        const normalized = normalizeVietnameseDiocesanMatchText(ktcgkpvChoiceTitle(choice));
        const match = normalized.match(/\bngay\s+(\d{1,2})\s+(?:thang|[\/.\-])\s*(\d{1,2})\b/);
        if (!match) return true;
        return Number(match[1]) === date.getDate() && Number(match[2]) === date.getMonth() + 1;
    }

    function ktcgkpvReadingChoice(data, date = null, calendarContext = null) {
        const readings = data && Array.isArray(data.mass_reading)
            ? data.mass_reading.filter(choice => choice && ktcgkpvChoiceMatchesRequestedDate(choice, date))
            : [];
        if (!readings.length) return null;
        const dateKey = date ? formatDateIso(date) : '';
        const calendarHints = dateKey && vietnameseCalendarReadingHints[dateKey]
            ? vietnameseCalendarReadingHints[dateKey]
            : {};
        const context = calendarContext || null;
        const officialReadings = Array.isArray(calendarHints.readings) ? calendarHints.readings : [];
        const readingHint = officialReadings.find(item => !item.isGospel) || null;
        const gospelHint = officialReadings.find(item => item.isGospel) || null;
        const generatedInfo = date ? buildGeneratedLiturgyInfo(date) : null;
        const priority = !!(date && hasPriorityCelebrationForLookup(date, generatedInfo));
        const expectedTitle = priority && date ? vietnameseLookupTitle(date) : '';

        const scored = readings.map((choice, index) => {
            const title = ktcgkpvChoiceTitle(choice);
            const seasonal = ktcgkpvChoiceIsSeasonal(choice);
            const readingCitations = ktcgkpvChoiceCitations(choice, ['reading1', 'reading_1']);
            const gospelCitations = ktcgkpvChoiceCitations(choice, ['gospel']);
            let score = 0;
            if (readingHint) {
                score += readingCitations.some(citation => vietnameseCitationMatchesHint(citation, readingHint)) ? 20 : -4;
            }
            if (gospelHint) {
                score += gospelCitations.some(citation => vietnameseCitationMatchesHint(citation, gospelHint)) ? 20 : -4;
            }
            if (expectedTitle) score += vietnameseDiocesanTextMatchScore(title, expectedTitle, date) * 6;
            if (priority) score += seasonal ? -6 : 4;
            else score += seasonal ? 5 : -1;
            if (choice.is_special === true && priority) score += 1;
            return { choice, index, score };
        });
        scored.sort((a, b) => b.score - a.score || a.index - b.index);
        return scored[0].choice;
    }

    function ktcgkpvOrderedReadingChoices(data, date = null, calendarContext = null) {
        const choices = data && Array.isArray(data.mass_reading)
            ? data.mass_reading.filter(choice => choice && ktcgkpvChoiceMatchesRequestedDate(choice, date))
            : [];
        if (!choices.length) return [];
        let primary = ktcgkpvReadingChoice({ mass_reading: choices }, date, calendarContext);
        if (date) {
            const internalInfo = buildGeneratedLiturgyInfo(date);
            const seasonalMeta = getSeasonMeta(date);
            const isOrdinaryWeekdayMemorial = seasonalMeta.season === 'ordinary'
                && date.getDay() !== 0
                && internalInfo.meta
                && internalInfo.meta.rank === 'memorial';
            if (isOrdinaryWeekdayMemorial) {
                primary = choices.find(ktcgkpvChoiceIsSeasonal) || primary;
            }
        }
        return primary ? [primary].concat(choices.filter(choice => choice !== primary)) : choices;
    }

    function ktcgkpvOrderedLiturgyChoices(data, date = null, calendarContext = null) {
        const choices = data && Array.isArray(data.mass_reading)
            ? data.mass_reading.filter(choice => choice && ktcgkpvChoiceMatchesRequestedDate(choice, date))
            : [];
        if (!choices.length) return [];
        const primary = ktcgkpvReadingChoice({ mass_reading: choices }, date, calendarContext);
        return primary ? [primary].concat(choices.filter(choice => choice !== primary)) : choices;
    }

    function normalizeKtcgkpvPunctuation(value) {
        return String(value || '').replace(/[ \t\u00a0]+([,.;:!?])/g, '$1');
    }

    function ktcgkpvHtmlParagraphs(html) {
        const doc = parseHtml(`<main id="ktcg-root">${String(html || '')}</main>`);
        const root = doc.getElementById('ktcg-root');
        if (!root) return [];
        root.querySelectorAll('script, style, .holycross').forEach(node => node.remove());
        root.querySelectorAll('sup').forEach(node => node.replaceWith('\n'));
        root.querySelectorAll('br').forEach(node => node.replaceWith('\n'));
        const blocks = Array.from(root.querySelectorAll('p'));
        const nodes = blocks.length ? blocks : [root];
        return nodes.flatMap(node =>
            String(node.textContent || '')
                .replace(/\u00a0/g, ' ')
                .split(/\n+/)
                .map(cleanNodeText)
                .map(normalizeKtcgkpvPunctuation)
                .filter(Boolean)
        );
    }

    function ktcgkpvReadingSection(entries, options = {}) {
        const sourceEntries = (Array.isArray(entries) ? entries : []).filter(entry => entry && typeof entry === 'object');
        const lines = [];
        const optionCits = [];
        sourceEntries.forEach((entry, entryIndex) => {
            const citation = ktcgkpvCitationFromEntry(entry);
            const rawBodyParagraphs = ktcgkpvHtmlParagraphs(entry.CONTENT || entry.content || '');
            const bodyParagraphs = options.stripVerseNumbers
                ? rawBodyParagraphs.map(text => strictStripArabicVerseNumbers(text, citation)).filter(Boolean)
                : rawBodyParagraphs;
            const body = bodyParagraphs.length
                ? [bodyParagraphs.join(options.mergeBodyParagraphs ? ' ' : '\n')]
                : [];
            if (!citation && !body.length) return;
            if (lines.length || entryIndex > 0) lines.push(parsedLine('', 'Hoặc:'));
            optionCits.push({ cit_vn: citation });
            const summary = normalizeKtcgkpvPunctuation(cleanNodeText(entry.EPITOMIZE || entry.epitomize || ''));
            const intro = ktcgkpvHtmlParagraphs(entry.LEAD || entry.lead || '').join(' ');
            if (summary) lines.push(parsedLine('', summary, 'summary'));
            if (intro) lines.push(parsedLine('', intro, 'intro'));
            body.forEach(text => lines.push(parsedLine('', text, 'body')));

            const optionalCitation = cleanCitation(entry.OPTIONAL_INDEXING || entry.optional_indexing || '');
            const rawOptionalBodyParagraphs = ktcgkpvHtmlParagraphs(entry.OPTIONAL_CONTENT || entry.optional_content || '');
            const optionalBodyParagraphs = options.stripVerseNumbers
                ? rawOptionalBodyParagraphs.map(text => strictStripArabicVerseNumbers(text, optionalCitation)).filter(Boolean)
                : rawOptionalBodyParagraphs;
            const optionalBody = optionalBodyParagraphs.length
                ? [optionalBodyParagraphs.join(options.mergeBodyParagraphs ? ' ' : '\n')]
                : [];
            if (optionalCitation && optionalBody.length) {
                lines.push(parsedLine('', 'Hoặc:'));
                optionCits.push({ cit_vn: optionalCitation });
                if (summary) lines.push(parsedLine('', summary, 'summary'));
                if (intro) lines.push(parsedLine('', intro, 'intro'));
                optionalBody.forEach(text => lines.push(parsedLine('', text, 'body')));
            }
        });
        if (!lines.length) return null;
        const cit_vn = optionCits.map(item => item.cit_vn).find(Boolean) || '';
        return { cit_vn, optionCits, lines, text: parsedLinesToText(lines) };
    }

    function ktcgkpvSupplementChoices(entries) {
        const seen = new Set();
        return (Array.isArray(entries) ? entries : []).reduce((choices, entry) => {
            if (!entry || typeof entry !== 'object') return choices;
            const citation = cleanCitation(entry.INDEXING_2 || entry.indexing_2 || '');
            const html = String(entry.CONTENT_2 || entry.content_2 || '');
            const key = `${citation}\u0000${cleanNodeText(html)}`;
            if ((!citation && !html) || seen.has(key)) return choices;
            seen.add(key);
            choices.push({ citation, html });
            return choices;
        }, []);
    }

    const KTCGKPV_ALLELUIA_TOKEN_SOURCE = '(?:Alleluia|Aleluia|Ha?-l[eê]-lui(?:-a)?)';

    function normalizeKtcgkpvAcclamationText(value) {
        return normalizeKtcgkpvPunctuation(cleanNodeText(value))
            // Some KTCGKPV entries omit the final “-a” in the second
            // opening response (for example 24 July 2026).
            .replace(/\bHa-lê-lui(?=\s*[,.!?:;)]|\s|$)/giu, 'Ha-lê-lui-a')
            .replace(/\bHa-le-lui(?=\s*[,.!?:;)]|\s|$)/giu, 'Ha-le-lui-a');
    }

    function ktcgkpvSplitAcclamation(value) {
        const text = normalizeKtcgkpvAcclamationText(value);
        if (!text) return null;
        const token = KTCGKPV_ALLELUIA_TOKEN_SOURCE;
        const openingPattern = new RegExp(
            `^((?:${token}\\s*[,.;!?]?\\s*){2}(?:\\(\\s*(?:${token}\\s*[,.;!?]?\\s*){2}\\))?)\\s*`,
            'iu'
        );
        const closingPattern = new RegExp(
            `\\s*(${token}\\s*[,.;!?]?(?:\\s*\\(\\s*${token}\\s*[,.;!?]?\\s*\\))?)\\s*$`,
            'iu'
        );
        const opening = text.match(openingPattern);
        const closing = text.match(closingPattern);
        if (!opening || !closing || closing.index < opening[0].length) return null;
        return {
            opening: cleanNodeText(opening[1]),
            verse: cleanNodeText(text.slice(opening[0].length, closing.index)),
            closing: cleanNodeText(closing[1])
        };
    }

    function ktcgkpvPsalmSection(readingEntries) {
        const choices = ktcgkpvSupplementChoices(readingEntries);
        const lines = [];
        const optionCits = [];
        choices.forEach((choice, index) => {
            if (index) lines.push(parsedLine('', 'Hoặc:'));
            optionCits.push({ cit_vn: choice.citation });
            let responseAdded = false;
            const hanoiStyleLines = [];
            const doc = parseHtml(`<main id="ktcg-psalm">${choice.html}</main>`);
            const root = doc.getElementById('ktcg-psalm');
            if (!root) return;
            root.querySelectorAll('script, style').forEach(node => node.remove());
            root.querySelectorAll('sup').forEach(node => node.replaceWith('\n'));
            root.querySelectorAll('br').forEach(node => node.replaceWith('\n'));
            const blocks = Array.from(root.querySelectorAll('p'));
            (blocks.length ? blocks : [root]).forEach(node => {
                const isResponse = node.matches('.response');
                if (isResponse && responseAdded) return;
                const bodyNode = isResponse ? node.querySelector('.body') : node;
                const text = normalizeKtcgkpvPunctuation(cleanNodeText(bodyNode && bodyNode.textContent))
                    .replace(/\s+/g, ' ')
                    .trim();
                if (!text) return;
                hanoiStyleLines.push(`${isResponse ? 'Đáp' : 'Xướng'}: ${text}`);
                if (isResponse) responseAdded = true;
            });
            const parsedLines = parseVietnamesePsalmLines(hanoiStyleLines).lines;
            attachPsalmVerseRefs('VN', choice.citation, parsedLines);
            lines.push(...parsedLines);
        });
        if (!lines.length) return null;
        const cit_vn = optionCits.map(item => item.cit_vn).find(Boolean) || '';
        return { cit_vn, optionCits, lines, text: parsedLinesToText(lines) };
    }

    function ktcgkpvAcclamationSection(gospelEntries) {
        const choices = ktcgkpvSupplementChoices(gospelEntries);
        const lines = [];
        const optionCits = [];
        choices.forEach((choice, index) => {
            if (index) lines.push(parsedLine('', 'Hoặc:'));
            optionCits.push({ cit_vn: choice.citation });
            const paragraphs = ktcgkpvHtmlParagraphs(choice.html).map(text => text.replace(/^[-–—]\s*/, ''));
            const split = ktcgkpvSplitAcclamation(paragraphs.join(' '));
            if (split) {
                lines.push(parsedLine('Mọi người', split.opening));
                if (split.verse) lines.push(parsedLine('', split.verse));
                lines.push(parsedLine('', split.closing));
            } else {
                const parsed = parseVietnameseAcclamationLines(paragraphs);
                lines.push(...(parsed.lines || []));
            }
        });
        if (!lines.length) return null;
        const cit_vn = optionCits.map(item => item.cit_vn).find(Boolean) || '';
        return { cit_vn, optionCits, lines, text: parsedLinesToText(lines) };
    }

    const ktcgkpvKindedSectionIds = new Set([
        'entrance', 'reading1', 'psalm', 'reading2', 'gospel_accl', 'gospel', 'communion'
    ]);

    function ktcgkpvDateIsOrdinaryWeekdayOnly(date) {
        if (!(date instanceof Date) || Number.isNaN(date.getTime()) || date.getDay() === 0) return false;
        const info = buildGeneratedLiturgyInfo(date);
        const meta = info && info.meta || {};
        return meta.season === 'ordinary' && !meta.special && !meta.rank;
    }

    function ktcgkpvChoiceKind(choice, baseId, date = null) {
        if (!ktcgkpvKindedSectionIds.has(baseId)) return '';
        if (ktcgkpvChoiceIsSeasonal(choice)) return 'common';
        if (strictReadingKeys.has(baseId) && ktcgkpvDateIsOrdinaryWeekdayOnly(date)) return '';
        return 'proper';
    }

    function ktcgkpvChoiceOptionLabel(choice, citation, optionIndex, optionCount, baseId = '', date = null) {
        const kind = ktcgkpvChoiceKind(choice, baseId, date);
        if (kind) {
            const section = {
                entrance: 'Ca nhập lễ',
                reading1: 'Bài đọc',
                psalm: 'Đáp ca',
                reading2: 'Bài đọc',
                gospel_accl: 'Tung hô Tin Mừng',
                gospel: 'Tin Mừng',
                communion: 'Ca hiệp lễ'
            }[baseId] || 'Phần lễ';
            const label = `${section} ${kind === 'common' ? 'chung' : 'riêng'}`;
            return citation ? `${label} — ${cleanCitation(citation)}` : label;
        }
        const title = ktcgkpvChoiceTitle(choice) || 'Lựa chọn phụng vụ';
        const suffix = cleanCitation(citation) || (optionCount > 1 ? String(optionIndex + 1) : '');
        return suffix ? `${title} — ${suffix}` : title;
    }

    function mergeKtcgkpvChoiceSections(choiceSections, baseId = '', date = null) {
        const lines = [];
        const optionCits = [];
        const optionLabels = [];
        const optionKinds = [];
        const seenReadingCitations = new Set();
        const seenOptionBodies = new Set();
        (choiceSections || []).forEach(({ choice, section }) => {
            if (!section || !Array.isArray(section.lines) || !section.lines.length) return;
            const options = splitParsedAlternatives(section.lines).filter(option => Array.isArray(option) && option.length);
            const citations = Array.isArray(section.optionCits) ? section.optionCits : [];
            options.forEach((option, optionIndex) => {
                const optionBodyKey = normalizeSemanticText(variantOptionMeaningText(baseId, option))
                    .replace(/[^\p{L}\p{N}]+/gu, '');
                if (optionBodyKey && seenOptionBodies.has(optionBodyKey)) return;
                const citationEntry = citations[optionIndex]
                    || (optionIndex === 0 && section.cit_vn ? { cit_vn: section.cit_vn } : {});
                const citation = citationEntry && citationEntry.cit_vn;
                const citationKey = strictReadingKeys.has(baseId) && citation
                    ? normalizedCitationForCompare(citation)
                    : '';
                if (citationKey && seenReadingCitations.has(citationKey)) return;
                if (citationKey) seenReadingCitations.add(citationKey);
                if (optionBodyKey) seenOptionBodies.add(optionBodyKey);
                if (lines.length) lines.push(parsedLine('', 'Hoặc:'));
                lines.push(...option);
                optionCits.push(citationEntry);
                optionKinds.push(ktcgkpvChoiceKind(choice, baseId, date));
                optionLabels.push(ktcgkpvChoiceOptionLabel(
                    choice,
                    citation,
                    optionIndex,
                    options.length,
                    baseId,
                    date
                ));
            });
        });
        if (!lines.length) return null;
        const cit_vn = optionCits.map(item => item && item.cit_vn).find(Boolean) || '';
        return { cit_vn, optionCits, optionLabels, optionKinds, lines, text: parsedLinesToText(lines) };
    }

    function ktcgkpvDailySectionsFromChoices(choices, liturgyChoices = choices, date = null) {
        const sectionBuilders = {
            entrance: choice => ktcgkpvReadingSection(firstNonEmptyKtcgkpvArray(choice, ['introit', 'entrance']), { mergeBodyParagraphs: true }),
            reading1: choice => ktcgkpvReadingSection(firstNonEmptyKtcgkpvArray(choice, ['reading1', 'reading_1']), { stripVerseNumbers: true }),
            psalm: choice => ktcgkpvPsalmSection(firstNonEmptyKtcgkpvArray(choice, ['reading1', 'reading_1'])),
            reading2: choice => ktcgkpvReadingSection(firstNonEmptyKtcgkpvArray(choice, ['reading2', 'reading_2']), { stripVerseNumbers: true }),
            gospel_accl: choice => ktcgkpvAcclamationSection(firstNonEmptyKtcgkpvArray(choice, ['gospel'])),
            gospel: choice => ktcgkpvReadingSection(firstNonEmptyKtcgkpvArray(choice, ['gospel']), { stripVerseNumbers: true }),
            communion: choice => ktcgkpvReadingSection(firstNonEmptyKtcgkpvArray(choice, ['communion']), { mergeBodyParagraphs: true })
        };
        return Object.entries(sectionBuilders).reduce((data, [key, buildSection]) => {
            const sourceChoices = ['entrance', 'communion'].includes(key) ? liturgyChoices : choices;
            const merged = mergeKtcgkpvChoiceSections((sourceChoices || []).map(choice => ({
                choice,
                section: buildSection(choice)
            })), key, date);
            if (merged) data[key] = merged;
            return data;
        }, {});
    }

    async function fetchVietnameseKtcgDailyMass(date) {
        const payload = await fetchKtcgkpvMassReadingJson(date);
        const choices = ktcgkpvOrderedReadingChoices(payload, date, null);
        const liturgyChoices = ktcgkpvOrderedLiturgyChoices(payload, date, null);
        if (!choices.length) throw new Error('KTCG mass-reading choices are empty');
        const data = ktcgkpvDailySectionsFromChoices(choices, liturgyChoices, date);
        const internalInfo = buildGeneratedLiturgyInfo(date);
        const title = cleanLiturgyTitle(internalInfo.names.VN || getLiturgyDisplayName('VN'));
        const parsed = {
            title,
            color: internalInfo.color,
            titleSource: 'internal-calendar',
            ktcgChoiceTitles: choices.map(ktcgkpvChoiceTitle).filter(Boolean),
            data
        };
        return strictEnsureReadingSummarySlots(parsed, 'VN');
    }

    // KTCG publishes readings and antiphons, but not the Roman Missal prayers.
    // Resolve the matching Ban Me Thuot diocesan article from its current
    // category page. The RSS XML contains the same articles, but the browser's
    // text relay strips its item links, so keep RSS only as a fallback.
    const VIETNAMESE_KTCG_DIOCESAN_INDEX_URL = 'https://gpbanmethuot.net/loi-chua-moi-ngay/';
    const VIETNAMESE_KTCG_DIOCESAN_RSS_URL = 'https://gpbanmethuot.net/rss/loi-chua-moi-ngay/';
    let vietnameseKtcgDiocesanFeedPromise = null;

    function normalizeVietnameseDiocesanMatchText(value) {
        let text = String(value || '');
        let joined = '';
        do {
            joined = text;
            text = text.replace(/([A-Za-zÀ-ỹĐđ])-\s*(?=[A-Za-zÀ-ỹĐđ])/g, '$1');
        } while (text !== joined);
        return normalizeSearchText(text);
    }

    function vietnameseDiocesanMatchVariants(value, date) {
        const normalized = normalizeVietnameseDiocesanMatchText(value);
        const meta = getSeasonMeta(date);
        const roman = meta && meta.week ? toRoman(meta.week).toLowerCase() : '';
        const arabic = roman
            ? normalized.replace(new RegExp(`\\b${roman}\\b`, 'g'), String(meta.week))
            : normalized;
        return [normalized, arabic].filter((item, index, list) => item && list.indexOf(item) === index);
    }

    function vietnameseDiocesanTextMatchScore(actualText, expectedText, date) {
        const actual = normalizeVietnameseDiocesanMatchText(actualText);
        if (!actual) return 0;
        return vietnameseDiocesanMatchVariants(expectedText, date).reduce((best, expected) => {
            if (!expected) return best;
            const tokens = expected.split(/\s+/).filter(token => token.length >= 2 && !['loi', 'chua'].includes(token));
            const actualTokens = new Set(actual.split(/\s+/));
            const matched = tokens.filter(token => actualTokens.has(token)).length;
            const tokenScore = tokens.length ? matched / tokens.length : 0;
            return Math.max(best, tokenScore + (actual.includes(expected) ? 1 : 0));
        }, 0);
    }

    function vietnameseKtcgDiocesanLinkScore(link, date) {
        if (!link || !/gpbanmethuot\.net\/(?:song-dao|loi-chua-moi-ngay)\//i.test(link.href || '')) return 0;
        const expected = vietnameseSeasonalLookupTitle(date);
        const actual = `${link.text || ''} ${decodeURIComponent(String(link.href || ''))}`;
        return vietnameseDiocesanTextMatchScore(actual, expected, date);
    }

    function rankVietnameseKtcgDiocesanLinks(links, date) {
        return (links || [])
            .map(link => ({ link, score: vietnameseKtcgDiocesanLinkScore(link, date) }))
            .filter(item => item.score >= 0.55)
            .sort((a, b) => b.score - a.score)
            .map(item => item.link);
    }

    async function fetchVietnameseKtcgDiocesanLinks() {
        if (!vietnameseKtcgDiocesanFeedPromise) {
            vietnameseKtcgDiocesanFeedPromise = (async () => {
                let lastError = null;
                for (const sourceUrl of [VIETNAMESE_KTCG_DIOCESAN_INDEX_URL, VIETNAMESE_KTCG_DIOCESAN_RSS_URL]) {
                    try {
                        const source = await fetchTextWithFallbacks(sourceUrl, { timeoutMs: 12000 });
                        const seen = new Set();
                        const links = extractSourceLinks(source, sourceUrl).filter(link => {
                            if (!/gpbanmethuot\.net\/(?:song-dao|loi-chua-moi-ngay)\/loi-chua-[^?#]+\.html/i.test(link.href || '')) return false;
                            if (seen.has(link.href)) return false;
                            seen.add(link.href);
                            return true;
                        });
                        if (links.length) return links;
                    } catch (error) {
                        lastError = error;
                    }
                }
                throw lastError || new Error('No Ban Me Thuot daily-word article links found');
            })()
                .catch(error => {
                    vietnameseKtcgDiocesanFeedPromise = null;
                    throw error;
                });
        }
        return vietnameseKtcgDiocesanFeedPromise;
    }

    async function resolveVietnameseKtcgDiocesanPrayerUrls(date) {
        const links = await fetchVietnameseKtcgDiocesanLinks();
        return rankVietnameseKtcgDiocesanLinks(links, date).slice(0, 6).map(link => link.href);
    }

    function vietnameseKtcgDiocesanSourceMatchesDate(source, date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const pattern = new RegExp(`(?:^|\\D)0?${day}\\s*[\\/.-]\\s*0?${month}\\s*[\\/.-]\\s*${year}(?:\\D|$)`);
        return pattern.test(String(source || ''));
    }

    function vietnameseKtcgPrayerMassBlocks(source) {
        const embeddedHeading = /(?=(?:BÀI\s+[ĐÐ]ỌC\s+TRONG\s+THÁNH\s+LỄ|Bài\s+[ĐÐ]ọc\s+(?:I{1,2}|1|2)\s*:?|[ĐÐ]áp\s+Ca\s*:?|Alleluia\s*:?|Phúc\s+Âm\s*:?|Tin\s+Mừng\s*:?|Lời\s+nguyện\s+tín\s+hữu|Ca\s+nhập\s+lễ|Lời\s+nguyện\s+nhập\s+lễ|Lời\s+nguyện\s+tiến\s+lễ|Ca\s+hiệp\s+lễ|Lời\s+nguyện\s+(?:hiệp|kết)\s+lễ|Suy\s+niệm|Ghi\s+nhận\s+(?:lịch\s+sử|phụng\s+vụ)))/giu;
        const lines = strictSourceLines(source)
            .flatMap(line => String(line || '').split(embeddedHeading))
            .map(strictCleanLine)
            .filter(Boolean);
        const starts = [];
        lines.forEach((line, index) => {
            if (/\bbai doc trong thanh le\b/.test(normalizeVietnameseDiocesanMatchText(line))) starts.push(index);
        });
        if (!starts.length) return [{ lines, descriptor: lines.slice(0, 12).join(' ') }];
        return starts.map((start, index) => ({
            lines: lines.slice(start, starts[index + 1] || lines.length),
            descriptor: lines.slice(Math.max(0, start - 8), Math.min(lines.length, start + 6)).join(' ')
        }));
    }

    function parseVietnameseKtcgPrayerBlock(block, date) {
        const rawSections = strictExtractRawSections(block.lines || [], 'VN', getStrictMassSelector(date));
        const data = {};
        ['collect', 'prayer_offerings', 'prayer_after'].forEach(key => {
            if (!rawSections[key]) return;
            const parsed = strictFormatSection('VN', key, rawSections[key]);
            if (sourceSectionHasContent(parsed)) data[key] = parsed;
        });
        return data;
    }

    function vietnameseKtcgPrayerBlockScore(block, date, ktcgTitle) {
        const normalizedTitle = normalizeVietnameseDiocesanMatchText(ktcgTitle);
        const isTemporal = /\b(?:ngay thuong|tuan|mua|chua nhat)\b/.test(normalizedTitle);
        const candidates = isTemporal
            ? [ktcgTitle, vietnameseSeasonalLookupTitle(date)]
            : [ktcgTitle, vietnameseLookupTitle(date)];
        const score = candidates.reduce((best, title) => Math.max(
            best,
            vietnameseDiocesanTextMatchScore(block.descriptor || '', title, date)
        ), 0);
        const descriptor = normalizeVietnameseDiocesanMatchText(block.descriptor || '');
        return score - (!isTemporal && /\btuan\b/.test(descriptor) ? 0.25 : 0);
    }

    function parseVietnameseKtcgDiocesanPrayers(source, date, ktcgTitle) {
        const prayerKeys = ['collect', 'prayer_offerings', 'prayer_after'];
        const normalizedTitle = normalizeVietnameseDiocesanMatchText(ktcgTitle);
        const isTemporalTitle = /\b(?:ngay thuong|tuan|mua|chua nhat)\b/.test(normalizedTitle);
        const candidates = vietnameseKtcgPrayerMassBlocks(source)
            .map(block => ({ block, score: vietnameseKtcgPrayerBlockScore(block, date, ktcgTitle) }))
            .sort((a, b) => b.score - a.score);
        for (const candidate of candidates) {
            if (!isTemporalTitle && candidate.score < 0.55) continue;
            const data = parseVietnameseKtcgPrayerBlock(candidate.block, date);
            if (prayerKeys.every(key => sourceSectionHasContent(data[key]))) return data;
        }
        return {};
    }

    function hasVietnameseKtcgDiocesanPrayers(parsed) {
        const data = (parsed && parsed.data) || {};
        return ['collect', 'prayer_offerings', 'prayer_after'].every(key => sourceSectionHasContent(data[key]));
    }

    async function fetchVietnameseKtcgDiocesanSource(url) {
        try {
            const endpoint = `${KTCG_PROXY_ENDPOINT}${KTCG_PROXY_ENDPOINT.includes('?') ? '&' : '?'}source=${encodeURIComponent(url)}`;
            const response = await fetchWithTimeout(endpoint, {
                method: 'POST',
                cache: 'no-cache',
                timeoutMs: 15000,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ kind: 'vietnameseDiocesanPage', url })
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const payload = await response.json();
            if (!payload || !payload.success || !payload.source) throw new Error('Vietnamese diocesan proxy returned no source');
            return payload.source;
        } catch (error) {
            console.warn('Vietnamese diocesan direct proxy failed, using text relay.', error);
            return fetchTextWithFallbacks(url, { timeoutMs: 12000 });
        }
    }

    async function applyVietnameseKtcgDiocesanPrayers(parsed, date) {
        if (!parsed || !parsed.data) return parsed;
        try {
            const sourceUrls = await resolveVietnameseKtcgDiocesanPrayerUrls(date);
            for (const sourceUrl of sourceUrls) {
                try {
                    const source = await fetchVietnameseKtcgDiocesanSource(sourceUrl);
                    if (!vietnameseKtcgDiocesanSourceMatchesDate(source, date)) continue;
                    const prayers = parseVietnameseKtcgDiocesanPrayers(source, date, parsed.title);
                    if (!['collect', 'prayer_offerings', 'prayer_after'].every(key => sourceSectionHasContent(prayers[key]))) continue;
                    Object.assign(parsed.data, prayers);
                    parsed.prayerSourceUrl = sourceUrl;
                    parsed.prayerSourceName = 'Giáo Phận Ban Mê Thuột';
                    return parsed;
                } catch (sourceError) {
                    console.warn(`Vietnamese diocesan prayer candidate failed: ${sourceUrl}`, sourceError);
                }
            }
            throw new Error('No matching diocesan Roman Missal prayer article found');
        } catch (error) {
            console.warn('Vietnamese diocesan prayer supplement failed; keeping KTCG sections.', error);
        }
        return parsed;
    }

    function ktcgkpvCitationFromEntry(entry) {
        if (!entry || typeof entry !== 'object') return '';
        return cleanCitation(entry.INDEXING || entry.indexing || entry.CITATION || entry.citation || '');
    }

    function ktcgkpvTextFromEntry(entry) {
        if (!entry || typeof entry !== 'object') return '';
        const raw = entry.CONTENT || entry.content || entry.TEXT || entry.text || '';
        return cleanNodeText(String(raw)
            .replace(/<script[\s\S]*?<\/script>/gi, ' ')
            .replace(/<style[\s\S]*?<\/style>/gi, ' ')
            .replace(/<br\s*\/?>/gi, ' ')
            .replace(/<\/p>/gi, ' ')
            .replace(/<[^>]+>/g, ' '));
    }

    function ktcgkpvOptionCitations(entries) {
        return (Array.isArray(entries) ? entries : [])
            .map(ktcgkpvCitationFromEntry)
            .filter(Boolean)
            .map(citation => ({ cit_vn: citation }));
    }

    function ktcgkpvCitationOptions(entries) {
        return (Array.isArray(entries) ? entries : [])
            .map(entry => ({ cit_vn: ktcgkpvCitationFromEntry(entry), text: ktcgkpvTextFromEntry(entry) }))
            .filter(item => item.cit_vn || item.text);
    }

    function vietnameseMeaningTokens(text) {
        const normalized = cleanNodeText(text)
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D')
            .replace(/[^\p{L}\p{N}\s]/gu, ' ')
            .toLowerCase();
        const stop = new Set(['mot', 'nhung', 'nhung', 'chung', 'con', 'cac', 'cua', 'cho', 'voi', 'trong', 'rang', 'ngay', 'nay', 'duoc', 'la', 'va', 'xin', 'hay', 'chu', 'chua', 'toi', 'ta']);
        return normalized.split(/\s+/)
            .map(token => token.trim())
            .filter(token => token.length >= 3 && !stop.has(token));
    }

    function vietnameseMeaningScore(a, b) {
        const left = new Set(vietnameseMeaningTokens(a));
        const right = new Set(vietnameseMeaningTokens(b));
        if (!left.size || !right.size) return 0;
        let overlap = 0;
        left.forEach(token => { if (right.has(token)) overlap += 1; });
        return overlap / Math.min(left.size, right.size);
    }

    function parsedOptionTextForCitation(lines) {
        return (lines || [])
            .map(line => cleanNodeText([line && line.rubric, line && line.sp, line && line.text].filter(Boolean).join(' ')))
            .filter(Boolean)
            .join(' ');
    }

    function splitParsedOptionsForCitation(lines) {
        const options = [];
        let current = [];
        (Array.isArray(lines) ? lines : []).forEach(line => {
            const text = cleanNodeText([line && line.rubric, line && line.text].filter(Boolean).join(' '));
            const match = strictAlternativeMatch(text);
            if (match) {
                if (current.length) options.push(current);
                current = [];
                if (match.rest) current.push(Object.assign({}, line, { sp: '', text: match.rest, rubric: '' }));
                return;
            }
            current.push(line);
        });
        if (current.length) options.push(current);
        return options.length ? options : [lines || []];
    }

    function alignKtcgkpvCitationsByMeaning(section, ktcgOptions) {
        const parsedOptions = splitParsedOptionsForCitation(section && section.lines).map(parsedOptionTextForCitation);
        if (!parsedOptions.length || !Array.isArray(ktcgOptions) || !ktcgOptions.length) return [];
        const used = new Set();
        return parsedOptions.map(text => {
            let best = null;
            ktcgOptions.forEach((option, index) => {
                if (used.has(index)) return;
                const score = vietnameseMeaningScore(text, option.text);
                if (!best || score > best.score) best = { index, score, option };
            });
            if (best && best.score >= 0.28) {
                used.add(best.index);
                return best.option.cit_vn ? { cit_vn: best.option.cit_vn } : {};
            }
            return {};
        });
    }

    function firstNonEmptyKtcgkpvArray(choice, names) {
        for (const name of names) {
            const value = choice && choice[name];
            if (Array.isArray(value) && value.length) return value;
        }
        return [];
    }

    function applyKtcgkpvCitationToParsed(parsed, key, optionCits, ktcgOptions = []) {
        if (['entrance', 'communion'].includes(key) && parsed.data && parsed.data[key]) {
            const existingOptionCits = Array.isArray(parsed.data[key].optionCits) ? parsed.data[key].optionCits : [];
            const parsedOptionCount = splitParsedOptionsForCitation(parsed.data[key].lines).length;
            const aligned = alignKtcgkpvCitationsByMeaning(parsed.data[key], ktcgOptions);
            if (aligned.some(item => item.cit_vn)) optionCits = aligned;
            else if (existingOptionCits.some(item => item.cit_vn) && optionCits.length < parsedOptionCount) optionCits = existingOptionCits;
            else if (optionCits.length !== parsedOptionCount) optionCits = [];
        }
        if (!Array.isArray(optionCits) || !optionCits.length || !optionCits.some(item => item.cit_vn)) return;
        if (!parsed.data[key] || typeof parsed.data[key] !== 'object') parsed.data[key] = parsed.data[key] || {};
        parsed.data[key].optionCits = optionCits;
        parsed.data[key].cit_vn = optionCits.map(item => item.cit_vn).find(Boolean) || parsed.data[key].cit_vn || '';
    }

    async function applyKtcgkpvCitationSource(parsed, date) {
        try {
            const [data, calendarContext] = await Promise.all([
                fetchKtcgkpvMassReadingJson(date),
                ensureVietnameseCalendarContext(date).catch(() => null)
            ]);
            const choice = ktcgkpvReadingChoice(data, date, calendarContext);
            if (!choice || !parsed || !parsed.data) return parsed;
            const map = {
                entrance: ['introit', 'entrance'],
                collect: ['collect', 'opening_prayer', 'prayer_collect'],
                prayer_offerings: ['prayer_offerings', 'offertory_prayer', 'over_offerings'],
                communion: ['communion'],
                prayer_after: ['prayer_after', 'postcommunion', 'after_communion', 'prayer_after_communion']
            };
            Object.keys(map).forEach(key => {
                const entries = firstNonEmptyKtcgkpvArray(choice, map[key]);
                const optionCits = ktcgkpvOptionCitations(entries);
                applyKtcgkpvCitationToParsed(parsed, key, optionCits, ktcgkpvCitationOptions(entries));
            });
        } catch (error) {
            console.warn('KTCG mass-reading citation source failed; keeping existing VN citations.', error);
        }
        return parsed;
    }

    function getSpecialMassFileEntry(date) {
        const key = state.liturgyInfo && state.liturgyInfo.meta && state.liturgyInfo.meta.specialMassKey;
        return key && specialMassFiles[key] ? Object.assign({ key }, specialMassFiles[key]) : null;
    }

    function loadScriptOnce(src) {
        if (loadedSpecialMassScripts[src]) return loadedSpecialMassScripts[src];
        loadedSpecialMassScripts[src] = new Promise(resolve => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.head.appendChild(script);
        });
        return loadedSpecialMassScripts[src];
    }

    async function loadSpecialMassFileIfNeeded(date) {
        const entry = getSpecialMassFileEntry(date);
        if (!entry) return;
        state.liturgyInfo.specialMassFile = entry.file;
        const loaded = await loadScriptOnce(entry.file);
        if (!loaded) {
            console.warn(`특수 미사 파일이 아직 없습니다: ${entry.file}`);
            return;
        }
        const container = window.specialMassData || {};
        const specialData = container[entry.key];
        const nextMassData = Array.isArray(specialData) ? specialData : (specialData && specialData.massData);
        if (Array.isArray(nextMassData) && nextMassData.length) {
            massData.length = 0;
            nextMassData.forEach(item => massData.push(JSON.parse(JSON.stringify(item))));
            console.log(`특수 미사 데이터 적용: ${entry.key}`);
        }
    }

    function parseHtml(text) {
        return new DOMParser().parseFromString(text || '', 'text/html');
    }

    function cleanNodeText(value) {
        return String(value || '').replace(/\u00a0/g, ' ').replace(/[ \t]+/g, ' ').trim();
    }

    function cleanMarkdownLine(line) {
        return cleanNodeText(line)
            .replace(/^[-*]\s+/, '')
            .replace(/^#{1,6}\s*/, '')
            .replace(/\*\*/g, '')
            .replace(/_{1,2}/g, '')
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
            .trim();
    }

    function textFromDoc(doc) {
        const root = doc.body || doc.documentElement;
        if (!root) return '';
        const blockNodes = Array.from(root.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, blockquote, td, th'));
        const blockLines = blockNodes.map(node => cleanNodeText(node.textContent)).filter(Boolean);
        return blockLines.length ? blockLines.join('\n') : (root.textContent || root.innerText || '');
    }

    function textLinesFromDoc(doc) {
        doc.querySelectorAll('script, style, nav, footer, iframe, noscript').forEach(node => node.remove());
        return textFromDoc(doc)
            .split(/\r?\n/)
            .map(cleanMarkdownLine)
            .filter(Boolean)
            .filter(line => !/^(MENU|Search|검색|LISTEN|VIEW|SUBSCRIBE|Get Daily Readings|Copyright|©|Facebook|Twitter|LINE|メール|前の日|次の日)/i.test(line));
    }

    function sourceTitleFromLines(lines) {
        const titleLine = lines.find(line => /^Title:\s*/i.test(line));
        return titleLine ? titleLine.replace(/^Title:\s*/i, '').trim() : '';
    }

    function sourceMetadataTitle(source, lang) {
        if (lang !== 'KR' || !isJinaMarkdownSource(source)) return '';
        const lines = sourceTextLines(source).map(strictCleanLine).filter(Boolean);
        const title = cleanLiturgyTitle(sourceTitleFromLines(lines));
        return title && !isMassTitleNoise(title, lang) ? title : '';
    }

    function contentLinesFromSource(lines) {
        const start = lines.findIndex(line => /^Markdown Content:?$/i.test(line));
        const body = start >= 0 ? lines.slice(start + 1) : lines.slice();
        return body.filter(line => !/^(Title:|URL Source:|Published Time:|Markdown Content:?)/i.test(line));
    }

    function splitSentences(text) {
        return String(text || '')
            .replace(/\s+/g, ' ')
            .replace(/\s*([.!?。！？…]+)(\s+|$)/g, '$1\n')
            .replace(/\n{2,}/g, '\n')
            .trim();
    }

    function joinAsParagraph(lines, maxChars = 3600) {
        return compactSection(lines, maxChars);
    }

    function cleanCitation(raw) {
        return String(raw || '')
            .replace(/\*\*/g, '')
            .replace(/[()]/g, '')
            .replace(/^Năm\s+[IVX]+\s*/i, '')
            .replace(/^1\s+(?=1\s*V\b)/i, '')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function extractCitationFromHeading(line) {
        const cleaned = cleanMarkdownLine(line)
            .replace(/^Bài\s*[ĐÐ]ọc\s*(I|II|1|2)\s*:\s*/i, '')
            .replace(/^Phúc\s*Âm\s*:\s*/i, '')
            .replace(/^Tin\s*Mừng\s*:\s*/i, '')
            .replace(/^:\s*/, '')
            .trim();
        return cleanCitation(cleaned);
    }

    function parsedLine(sp, text, role = '') {
        const line = { sp: cleanNodeText(sp), text: cleanNodeText(text) };
        if (role) line.role = role;
        return line;
    }

    function isStandaloneDashText(value) {
        const text = cleanNodeText(value)
            .replace(/<[^>]*>/g, '')
            .replace(/\s+/g, '');
        return /^[\u002d\u2010-\u2015\u2212]+$/u.test(text);
    }

    function parsedRubricLine(rubric, text) {
        const line = parsedLine('', text);
        line.rubric = cleanNodeText(rubric);
        return line;
    }

    function parsedLinesToText(lines) {
        return (lines || [])
            .map(line => cleanNodeText([line.rubric, line.sp, line.text].filter(Boolean).join(' ')))
            .filter(Boolean)
            .join('\n');
    }

    function splitSourceBlocks(lines) {
        return lines
            .join('\n')
            .replace(/<br\s*\/?>/gi, '\n')
            .split(/\n+/)
            .map(cleanMarkdownLine)
            .filter(Boolean);
    }

    function splitOptionsByMarker(lines, markerRegex) {
        const options = [];
        let current = [];
        splitSourceBlocks(lines).forEach(line => {
            const markerText = cleanNodeText(line).replace(/[<>]/g, '').trim();
            const alternative = strictAlternativeMatch(markerText);
            if (alternative || markerRegex.test(line) || markerRegex.test(markerText)) {
                if (current.length) options.push(current);
                current = alternative && alternative.rest ? [alternative.rest] : [];
            } else {
                current.push(line);
            }
        });
        if (current.length) options.push(current);
        return options.length ? options : [[]];
    }

    function removeParentheticalRef(text) {
        return cleanNodeText(String(text || '')
            .replace(/\s*\(\s*(?:x\.?|xem|c\.|cf\.|see)[^)]+\)\s*/giu, ' ')
            .replace(/\s+([.,;:!?])/g, '$1'));
    }

    function extractParentheticalRef(text) {
        const source = String(text || '');
        const hit = source.match(/\(\s*(?:x\.?|xem|c\.|cf\.|see)[^)]+\)/iu)
            || source.match(/\([^)]*\bc\.\s*\d+[a-z]?\s*\)/iu);
        return hit ? cleanNodeText(hit[0]) : '';
    }

    function isKoreanStandaloneCitationLine(line) {
        const text = cleanNodeText(line);
        if (!text || text.length > 80) return false;
        if (/참조\s*$/i.test(text)) return true;
        if (/^(?:시편|요한|마태|마르|루카|코린토|로마|묵시|이사야|예레미야|에제키엘|잠언|지혜|히브리|갈라|에페|필리|콜로|티모|베드로)\s*\d/i.test(text)) return true;
        return false;
    }

    function extractKoreanOptionCitation(block) {
        const citationIndex = (block || []).findIndex(isKoreanStandaloneCitationLine);
        if (citationIndex < 0) return { citation: '', lines: block || [] };
        const citation = cleanCitation(block[citationIndex]);
        const lines = block.filter((_, index) => index !== citationIndex);
        return { citation, lines };
    }

    function isVietnameseStandaloneCitationLine(line) {
        const text = cleanCitation(line);
        if (!text || text.length > 80) return false;
        return /^(?:[123]\s*)?(?:Tv|Ga|Mt|Mc|Lc|Rm|Cr|Gl|Ep|Pl|Cl|Tx|Tm|Tt|Dt|Hr|Gc|Pr|Kh|Cv|St|Kn|Is|Gr|Ed|Hs|Ge|Xh|Lv|Ds|Đnl)\s*\d/i.test(text);
    }

    function extractVietnameseOptionCitation(block) {
        const citationIndex = (block || []).findIndex(isVietnameseStandaloneCitationLine);
        if (citationIndex < 0) return { citation: '', lines: block || [] };
        const citation = cleanCitation(block[citationIndex]);
        const lines = block.filter((_, index) => index !== citationIndex);
        return { citation, lines };
    }

    function extractVietnameseAntiphonHeadingCitation(heading) {
        const citation = cleanCitation(cleanMarkdownLine(heading).replace(/^Ca\s+(?:nhập|hiệp)\s+lễ\s*:?\s*/i, ''));
        return isVietnameseStandaloneCitationLine(citation) ? citation : '';
    }

    function vietnameseAntiphonCitationMatchesText(citation, text) {
        const cit = normalizeBibleAliasForCompare(citation);
        const normalized = normalizeSemanticText(text);
        if (!cit || !normalized) return false;
        if (/^(?:mt|mat|matt|matthieu)\s*11\s*[,.:]\s*28/.test(cit)) {
            return /kho nhoc|ganh nang|den cung ta|bo s[ứu]c|bo xuc|mang do/i.test(normalized);
        }
        if (/^(?:tv|ps|psalm)\s*(?:33|34)\s*[,.:]\s*9/.test(cit)) {
            return /nem thu|nhin coi|thien hao|nua tu[aạ]/i.test(normalized);
        }
        if (/^(?:tv|ps|psalm)\s*(?:102|103)\s*[,.:]\s*1/.test(cit)) {
            return /linh hon.*chuc tung|thanh danh/i.test(normalized);
        }
        if (/^(?:ga|jn|john|gioan)\s*17\s*[,.:]\s*20/.test(cit)) {
            return /nen mot|cha da sai con|the gian tin/i.test(normalized);
        }
        return false;
    }

    function prepareVietnameseAntiphonSection(heading, lines) {
        const headingCitation = extractVietnameseAntiphonHeadingCitation(heading);
        const optionCits = [];
        const preparedLines = [];
        const optionBlocks = splitOptionsByMarker(lines, /^Hoặc\b|^Hoặc đọc/i);
        const citationResults = optionBlocks.map(block => extractVietnameseOptionCitation(block));
        const headingCitationIndex = headingCitation && citationResults.length > 1
            ? citationResults.findIndex(result => vietnameseAntiphonCitationMatchesText(headingCitation, result.lines.join(' ')))
            : 0;
        citationResults.forEach((citationResult, index) => {
            if (index > 0) preparedLines.push('Hoặc:');
            const citation = citationResult.citation || (index === headingCitationIndex ? headingCitation : '');
            optionCits.push(citation ? { cit_vn: citation } : {});
            preparedLines.push(...citationResult.lines);
        });
        return { lines: preparedLines, optionCits, citation: optionCits.map(item => item.cit_vn).find(Boolean) || '' };
    }

    function stripKoreanVerseNumbers(text) {
        return cleanNodeText(String(text || '')
            .replace(/(^|[\s“"‘'「『(])\d(?=[\d,.;:·・\-–—ㄱ-ㅎa-zA-Z]*[,.;:·・\-–—])[\d,.;:·・\-–—ㄱ-ㅎa-zA-Z]*\d(?=\s|[.,;:!?。！？、，"”’」』])/g, '$1')
            .replace(/(^|[\s“"‘'「『(])\d{1,3}(?=\s|[가-힣A-Za-z“"‘'「『])/g, '$1')
            .replace(/\s+/g, ' '));
    }

    function stripJapaneseVerseNumbers(text) {
        return cleanNodeText(String(text || '')
            .replace(/(^|[\s　「『])\d{1,3}・\d{1,3}[a-z]?/gi, '$1')
            .replace(/(^|[\s　「『])\d{1,3}[a-z]{0,2}/gi, '$1')
            .replace(/\s+/g, ' '));
    }

    function normalizeJapaneseVerseKey(value) {
        return String(value || '').toLowerCase().replace(/[^0-9a-z]/g, '');
    }

    function japaneseVerseMarker(line) {
        const text = cleanNodeText(line);
        const match = text.match(/^(?:(\d{1,3})[・.．])?(\d{1,3}[a-z]{0,2})\s+(.+)$/i);
        if (!match) return null;
        return {
            key: normalizeJapaneseVerseKey(match[2]),
            text: stripJapaneseVerseNumbers(text)
        };
    }

    function japanesePsalmCitationGroups(citation) {
        const refs = cleanNodeText(citation).replace(/^詩編\s*\d+\s*[・:：]?/u, '');
        return refs.split(/[、,;]/)
            .map(group => group.split(/[+＋]/).map(normalizeJapaneseVerseKey).filter(Boolean))
            .filter(group => group.length);
    }

    function buildJapanesePsalmLines(lines, citation = '') {
        const blocks = splitSourceBlocks(lines || []).map(cleanNodeText).filter(Boolean);
        const content = blocks
            .filter(line => line !== citation)
            .filter(line => !/^詩編\s*\d+\s*$/u.test(line));
        const responseIndex = content.findIndex(line => line && !japaneseVerseMarker(line));
        const response = responseIndex >= 0 ? stripJapaneseVerseNumbers(content[responseIndex]) : '';
        const verseSource = responseIndex >= 0 ? content.slice(responseIndex + 1) : content;
        const verseEntries = [];
        let current = null;
        verseSource.forEach(line => {
            const marker = japaneseVerseMarker(line);
            if (marker) {
                current = { key: marker.key, parts: [marker.text] };
                verseEntries.push(current);
                return;
            }
            if (current) current.parts.push(stripJapaneseVerseNumbers(line));
        });
        const entryByKey = verseEntries.reduce((map, entry) => {
            if (!map[entry.key]) map[entry.key] = entry;
            return map;
        }, {});
        const groups = japanesePsalmCitationGroups(citation);
        const used = new Set();
        const paragraphGroups = groups.length
            ? groups.map(group => group.map(key => entryByKey[key]).filter(Boolean)).filter(group => group.length)
            : verseEntries.map(entry => [entry]);
        verseEntries.forEach(entry => {
            if (!paragraphGroups.some(group => group.includes(entry))) paragraphGroups.push([entry]);
        });
        const out = [];
        if (response) out.push(parsedLine('答', response));
        paragraphGroups.forEach(group => {
            const text = cleanNodeText(group.flatMap(entry => {
                used.add(entry);
                return entry.parts;
            }).join(' '));
            if (text) out.push(parsedLine('詩', `${text} - 答唱。`));
        });
        return out;
    }

    function buildJapaneseAcclamationLines(lines) {
        const text = cleanNodeText(splitSourceBlocks(lines || [])
            .map(stripJapaneseVerseNumbers)
            .filter(line => line && !/^(アレルヤ唱|詠唱)$/u.test(line))
            .join(' '));
        if (!text) return [];
        const match = text.match(/^(アレルヤ[、,]\s*アレルヤ。?)\s*(.+?)\s*(アレルヤ[、,]\s*アレルヤ。?)$/u);
        if (match) {
            return [
                parsedLine('会', cleanNodeText(match[1])),
                parsedLine('', cleanNodeText(match[2])),
                parsedLine('', cleanNodeText(match[3]))
            ];
        }
        return splitSourceBlocks([text]).map((line, index) =>
            parsedLine(index === 0 && /アレルヤ/u.test(line) ? '会' : '', stripJapaneseVerseNumbers(line))
        );
    }

    function extractQuotedSummary(lines) {
        const index = lines.findIndex(line => /^<[^>]+>/.test(line) || /^[“"「『_].+[“”"」』_]\.?$/.test(line));
        if (index < 0) return { summary: '', lines };
        return {
            summary: cleanNodeText(lines[index].replace(/^[“"「『_]+|[“”"」』_\.]+$/g, '')),
            lines: lines.filter((_, i) => i !== index)
        };
    }

    const koreanIntroBookAliases = [
        ['열왕기 상권', '1열왕'], ['열왕기 하권', '2열왕'],
        ['사무엘기 상권', '1사무'], ['사무엘기 하권', '2사무'],
        ['역대기 상권', '1역대'], ['역대기 하권', '2역대'],
        ['마카베오기 상권', '1마카'], ['마카베오기 하권', '2마카'],
        ['마태오가 전한', '마태'], ['마르코가 전한', '마르'],
        ['루카가 전한', '루카'], ['요한이 전한', '요한'],
        ['마태오 복음', '마태'], ['마르코 복음', '마르'],
        ['루카 복음', '루카'], ['요한 복음', '요한'],
        ['사도행전', '사도'], ['로마서', '로마'],
        ['코린토 1서', '1코린'], ['코린토 2서', '2코린'],
        ['갈라티아서', '갈라'], ['에페소서', '에페'], ['필리피서', '필리'], ['콜로새서', '콜로'],
        ['테살로니카 1서', '1테살'], ['테살로니카 2서', '2테살'],
        ['티모테오 1서', '1티모'], ['티모테오 2서', '2티모'],
        ['티토서', '티토'], ['필레몬서', '필레'], ['히브리서', '히브'], ['야고보서', '야고'],
        ['베드로 1서', '1베드'], ['베드로 2서', '2베드'],
        ['요한 1서', '1요한'], ['요한 2서', '2요한'], ['요한 3서', '3요한'],
        ['유다서', '유다'], ['요한 묵시록', '묵시'],
        ['창세기', '창세'], ['탈출기', '탈출'], ['레위기', '레위'],
        ['민수기', '민수'], ['신명기', '신명'], ['여호수아기', '여호'],
        ['판관기', '판관'], ['룻기', '룻'], ['에즈라기', '에즈'],
        ['느헤미야기', '느헤'], ['토빗기', '토빗'], ['유딧기', '유딧'],
        ['에스테르기', '에스'], ['욥기', '욥'], ['시편', '시편'],
        ['잠언', '잠언'], ['코헬렛', '코헬'], ['아가', '아가'],
        ['지혜서', '지혜'], ['집회서', '집회'], ['이사야서', '이사'],
        ['예레미야서', '예레'], ['애가', '애가'], ['바룩서', '바룩'],
        ['에제키엘서', '에제'], ['다니엘서', '다니'], ['호세아서', '호세'],
        ['요엘서', '요엘'], ['아모스서', '아모'], ['오바드야서', '오바'],
        ['요나서', '요나'], ['미카서', '미카'], ['나훔서', '나훔'],
        ['하바쿡서', '하바'], ['스바니야서', '스파'], ['하까이서', '학개'],
        ['즈카르야서', '즈카'], ['말라키서', '말라']
    ];

    function koreanBookKeyFromIntro(intro) {
        const normalized = cleanNodeText(intro);
        const alias = koreanIntroBookAliases
            .sort((a, b) => b[0].length - a[0].length)
            .find(([label]) => normalized.includes(label));
        if (alias) return alias[1];
        const keys = Object.keys(bibleMap || {}).sort((a, b) => b.length - a.length);
        return keys.find(key => normalized.includes(key)) || '';
    }

    function buildKoreanCitation(intro, citation) {
        const cleaned = cleanCitation(citation);
        if (!cleaned) return '';
        const book = koreanBookKeyFromIntro(intro);
        return book ? `${book} ${cleaned}` : cleaned;
    }

    function splitKoreanMarkedLines(lines, markers) {
        const output = [];
        splitSourceBlocks(lines).forEach(line => {
            let parts = [line];
            markers.forEach(marker => {
                parts = parts.flatMap(part => String(part).split(new RegExp(`(?=${marker})`, 'g')));
            });
            parts.map(cleanNodeText).filter(Boolean).forEach(part => {
                const marker = markers.find(candidate => part.startsWith(candidate));
                if (!marker) return;
                const text = part.replace(marker, '').trim();
                if (!text && marker === '◎' && output.length && output[output.length - 1].sp === '○') {
                    output[output.length - 1].text = cleanNodeText(`${output[output.length - 1].text} ◎`);
                    return;
                }
                output.push(parsedLine(marker, text));
            });
        });
        return output;
    }

    function normalizeKoreanPrayerEnding(text) {
        let out = String(text || '').replace(/<br\s*\/?>/gi, '\n');
        out = out.replace(/성부와 성령과\s*[.…]+/g, '\n성부와 성령과 함께 천주로서 영원히 살아계시며 다스리시는 성자, 우리 주 예수 그리스도를 통하여 비나이다.');
        out = out.replace(/성자께서는(?:\s*영원히)?\s*[.…]+/g, '\n성자께서는 영원히 살아계시며 다스리시나이다.');
        out = out.replace(/주님께서는\s*[.…]+/g, '\n주님께서는 성부와 성령과 함께 천주로서 영원히 살아계시며 다스리시나이다.');
        out = out.replace(/우리 주\s*[.…]+/g, '\n우리 주 그리스도를 통하여 비나이다.');
        return out;
    }

    function parseKoreanPrayerOrAntiphon(key, lines) {
        const optionBlocks = splitOptionsByMarker(lines, /^또는\b/);
        const parsed = [];
        const optionCits = [];
        const usesOptionCitations = ['entrance', 'communion'].includes(key);
        optionBlocks.forEach((block, index) => {
            if (index > 0) parsed.push(parsedLine('', '또는:'));
            const citationResult = usesOptionCitations ? extractKoreanOptionCitation(block) : { citation: '', lines: block };
            optionCits.push(citationResult.citation ? { cit_kr: citationResult.citation } : {});
            let text = citationResult.lines.join(' ');
            if (['collect', 'prayer_offerings', 'prayer_after'].includes(key)) text = normalizeKoreanPrayerEnding(text);
            splitSourceBlocks([text]).forEach(part => parsed.push(parsedLine('', splitSentences(part))));
        });
        const result = { text: parsedLinesToText(parsed), lines: parsed };
        if (usesOptionCitations && optionCits.some(cit => cit.cit_kr)) result.optionCits = optionCits;
        return result;
    }

    function parseKoreanReadingSection(lines, isGospel = false) {
        let blocks = splitSourceBlocks(lines).filter(line => !/^(?:[◎○✚▥✠]\s*)?(주님의\s*말씀입니다|그리스도님,?\s*찬미합니다|하느님,?\s*감사합니다)/i.test(line));
        if (isGospel) {
            const terminalIndex = blocks.findIndex(line => /^(신자들의\s*기도|보편\s*(?:지향\s*)?기도|오늘의\s*묵상|영성체\s*후\s*묵상|강론)(?:$|\s|[:：])/i.test(cleanNodeText(line)));
            if (terminalIndex >= 0) blocks = blocks.slice(0, terminalIndex);
            blocks = blocks.reduce((acc, line) => {
                const cleaned = cleanNodeText(line);
                const tailIndex = [/오늘의\s*묵상/i, /영성체\s*후\s*묵상/i, /보편\s*(?:지향\s*)?기도/i, /강론/i]
                    .map(pattern => cleaned.search(pattern))
                    .filter(index => index >= 0)
                    .sort((a, b) => a - b)[0];
                if (tailIndex >= 0) {
                    const beforeTail = cleanNodeText(cleaned.slice(0, tailIndex));
                    if (beforeTail) acc.push(beforeTail);
                    return acc;
                }
                acc.push(line);
                return acc;
            }, []);
        }
        const summaryResult = extractQuotedSummary(blocks);
        blocks = summaryResult.lines;
        const introIndex = blocks.findIndex(line => /^[▥✠]\s*/.test(line));
        const intro = introIndex >= 0 ? blocks[introIndex] : '';
        if (introIndex >= 0) blocks.splice(introIndex, 1);
        const citIndex = blocks.findIndex(line => /^[\dIVX]+[,\dㄱ-ㅎa-zA-Z;.\s\-–—―─()]+$/.test(line));
        const citation = citIndex >= 0 ? blocks[citIndex] : '';
        if (citIndex >= 0) blocks.splice(citIndex, 1);
        const out = [];
        if (summaryResult.summary) out.push(parsedLine('', summaryResult.summary, 'summary'));
        if (intro) out.push(parsedLine(intro.charAt(0), intro.slice(1).trim(), 'intro'));
        const body = blocks.map(stripKoreanVerseNumbers).filter(Boolean).join('\n');
        if (body) out.push(parsedLine('', body, 'body'));
        return {
            text: parsedLinesToText(out),
            lines: out,
            cit_kr: buildKoreanCitation(intro, citation)
        };
    }

    function parseKoreanPsalm(lines) {
        const blocks = splitSourceBlocks(lines);
        const citation = blocks.find(line => /^시편|^화답송(?:\s|$|[:：])/.test(line)) || '';
        const content = blocks.filter(line => line !== citation);
        const out = splitKoreanMarkedLines(content, ['◎', '○']).map(line => line.sp === '○'
            ? parsedLine('○', stripKoreanVerseNumbers(line.text))
            : line);
        attachPsalmVerseRefs('KR', cleanNodeText(citation.replace(/^화답송\s*/, '')), out);
        return { text: parsedLinesToText(out), lines: out, cit_kr: cleanNodeText(citation.replace(/^화답송\s*/, '')) };
    }

    function parseKoreanAcclamation(lines) {
        const out = splitKoreanMarkedLines(lines, ['◎', '○']).map(line => parsedLine(line.sp, stripKoreanVerseNumbers(line.text)));
        return { text: parsedLinesToText(out), lines: out };
    }

    function parseKoreanDailySections(lines) {
        const raw = extractRawSections(lines, 'KR');
        const result = {};
        Object.keys(raw).forEach(key => {
            if (key === 'preface') {
                state.liturgyInfo.prefaceHint = cleanNodeText(raw[key][0] || '감사송');
                state.liturgyInfo.prefaceHintSource = 'source';
                return;
            }
            if (key === 'meditation_after_communion' || key === 'meditation') return;
            if (key === 'reading1' || key === 'reading2') result[key] = parseKoreanReadingSection(raw[key], false);
            else if (key === 'gospel') result[key] = parseKoreanReadingSection(raw[key], true);
            else if (key === 'psalm') result[key] = parseKoreanPsalm(raw[key]);
            else if (key === 'gospel_accl') result[key] = parseKoreanAcclamation(raw[key]);
            else result[key] = parseKoreanPrayerOrAntiphon(key, raw[key]);
        });
        return result;
    }

    function normalizeVietnamesePrayerEnding(text, key = 'prayer_after') {
        let out = String(text || '').trim();
        const petitionEnding = key === 'collect'
            ? 'Chúng con cầu xin nhờ Đức Giê-su Ki-tô Con Chúa, Thiên Chúa và là Chúa chúng con, Người hằng sống và hiển trị cùng Chúa, hiệp nhất với Chúa Thánh Thần đến muôn thuở muôn đời.'
            : 'Chúng con cầu xin nhờ Đức Ki-tô, Chúa chúng con.';
        out = out.replace(/Chúng con cầu xin(?:\s*[.…]+)?\s*$/i, petitionEnding);
        out = out.replace(/Xin Thiên Chúa toàn năng(?:\s*[.…]+)?\s*$/i, 'Xin Thiên Chúa toàn năng thương xót, tha tội, và dẫn đưa chúng ta đến sự sống muôn đời.');
        out = out.replace(/Người là Thiên Chúa(?:\s*[.…]+)?\s*$/i, 'Người là Thiên Chúa hằng sống và hiển trị cùng Chúa, hiệp nhất với Chúa Thánh Thần đến muôn thuở muôn đời.');
        out = out.replace(/Chúa hằng sống(?:\s*[.…]+)?\s*$/i, 'Chúa hằng sống và hiển trị cùng Thiên Chúa Cha, hiệp nhất với Chúa Thánh Thần đến muôn thuở muôn đời.');
        out = out.replace(/Người hằng sống(?:\s+và\s+hiển trị\s+muôn đời\.?)?\s*$/i, 'Người hằng sống và hiển trị muôn đời.');
        return out;
    }

    function splitVietnamesePrayerParagraphs(text, key) {
        const normalized = normalizeVietnamesePrayerEnding(text, key).replace(/\s+/g, ' ').trim();
        const ending = strictPrayerEndingFormulas('VN', key).find(item => normalized.endsWith(item)) || '';
        if (!ending) return normalized ? [normalized] : [];
        const before = normalized.slice(0, normalized.length - ending.length).trim();
        return [before, ending].filter(Boolean);
    }

    function vietnameseParagraphsForSection(key, text) {
        if (['collect', 'prayer_offerings', 'prayer_after'].includes(key)) return splitVietnamesePrayerParagraphs(text, key);
        const paragraph = cleanNodeText(String(text || '').replace(/\s+/g, ' '));
        return paragraph ? [paragraph] : [];
    }

    function isVietnameseLiturgicalReadingDirectiveLine(line) {
        const text = cleanNodeText(line);
        return /^Bài\s+[ĐÐđd]ọc(?:\s+Phụng\s+vụ\s+Lời\s+Chúa)?\s*[-–—:]?\s*(?:\(\s*theo\s+ngày\s+trong\s+tuần\s*\))?\s*$/iu.test(text)
            || /^Phụng\s+vụ\s+Lời\s+Chúa\s*[-–—:]?\s*\(\s*theo\s+ngày\s+trong\s+tuần\s*\)\s*$/iu.test(text);
    }

    function vietnameseLiturgicalReadingDirectiveIndex(line) {
        const text = cleanNodeText(line);
        const match = text.match(/(?:^|\s)(?:Bài\s+[ĐÐđd]ọc(?:\s+Phụng\s+vụ\s+Lời\s+Chúa)?|Phụng\s+vụ\s+Lời\s+Chúa)\s*[-–—:]?\s*(?:\(\s*theo\s+ngày\s+trong\s+tuần\s*\))?\s*$/iu);
        if (!match) return -1;
        return match.index + (/^\s/u.test(match[0]) ? 1 : 0);
    }

    function cleanVietnameseSectionSourceLines(key, lines) {
        const output = [];
        for (const sourceLine of splitSourceBlocks(lines).map(cleanMarkdownLine).filter(Boolean)) {
            const directiveIndex = vietnameseLiturgicalReadingDirectiveIndex(sourceLine);
            if (directiveIndex >= 0) {
                const beforeDirective = cleanNodeText(sourceLine.slice(0, directiveIndex));
                if (beforeDirective) output.push(beforeDirective);
                if (key === 'collect') break;
                continue;
            }
            if (!isVietnameseLiturgicalReadingDirectiveLine(sourceLine)) output.push(sourceLine);
        }
        return output;
    }

    function formatVietnameseSectionLines(key, lines) {
        const cleaned = cleanVietnameseSectionSourceLines(key, lines);
        if (key === 'psalm') return parseVietnamesePsalmLines(cleaned).lines;
        if (key === 'gospel_accl') return parseVietnameseAcclamationLines(cleaned).lines;
        const output = [];
        splitOptionsByMarker(cleaned, /^Hoặc\b|^Hoặc đọc/i).forEach((optionLines, index) => {
            if (index > 0) output.push(parsedLine('', 'Hoặc:'));
            vietnameseParagraphsForSection(key, optionLines.join(' ')).forEach(part => output.push(parsedLine('', part)));
        });
        return output;
    }

    function formatVietnameseSection(key, lines) {
        const cleaned = cleanVietnameseSectionSourceLines(key, lines);
        if (key === 'psalm') {
            return parsedLinesToText(parseVietnamesePsalmLines(cleaned).lines);
        }
        if (key === 'gospel_accl') return parsedLinesToText(parseVietnameseAcclamationLines(cleaned).lines);
        const formattedOptions = splitOptionsByMarker(cleaned, /^Hoặc\b|^Hoặc đọc/i)
            .map(optionLines => vietnameseParagraphsForSection(key, optionLines.join(' ')).join('\n'))
            .filter(Boolean);
        if (formattedOptions.length > 1) return formattedOptions.map((text, index) => index === 0 ? text : `Hoặc:\n${text}`).join('\n\n');
        return formattedOptions[0] || '';
    }

    function parseVietnameseReadingLines(lines, isGospel = false) {
        let blocks = splitSourceBlocks(lines)
            .filter(line => !/^[ĐÐ]ó là lời Chúa\.?$/i.test(line));
        const summaryResult = extractQuotedSummary(blocks);
        blocks = summaryResult.lines;
        const introIndex = blocks.findIndex(line => /^Trích\b/i.test(line) || /^Tin Mừng Chúa Gi/i.test(line));
        const intro = introIndex >= 0 ? blocks[introIndex] : '';
        if (introIndex >= 0) blocks.splice(introIndex, 1);
        const out = [];
        const appendOption = body => {
            if (summaryResult.summary) out.push(parsedLine('', summaryResult.summary, 'summary'));
            if (intro) out.push(parsedLine('', intro, 'intro'));
            if (cleanNodeText(body)) out.push(parsedLine('', body, 'body'));
        };
        const joinedBody = blocks.join('\n');
        const hasMarkedShortForm = isGospel && /(?:\[[\s\S]+?\]|\{[\s\S]+?\})/u.test(joinedBody);
        if (hasMarkedShortForm) {
            const longBody = joinedBody.replace(/[\[\]{}]/g, '').replace(/\n{3,}/g, '\n\n').trim();
            const shortBody = joinedBody.replace(/(?:\[[\s\S]*?\]|\{[\s\S]*?\})/gu, '').replace(/\n{3,}/g, '\n\n').trim();
            appendOption(longBody);
            out.push(parsedLine('', 'Hoặc:'));
            appendOption(shortBody);
        } else {
            appendOption(joinedBody);
        }
        return out;
    }

    function vietnameseGospelOptionCitations(citation, parsedLines) {
        if (splitParsedAlternatives(parsedLines).length < 2) return [];
        const source = cleanNodeText(citation);
        const match = source.match(/^(.*?)\s*\{\s*(?:hoặc|hoac|or)\s+([^}]+)\}\s*$/iu);
        if (!match) return [{ cit_vn: source }, { cit_vn: source }];
        const shortCitation = cleanNodeText(match[1]);
        const alternative = cleanNodeText(match[2]);
        let longCitation = alternative;
        const rangePrefix = shortCitation.match(/^(.*?,\s*)[^,{}]+$/u);
        if (rangePrefix && !alternative.includes(',')) longCitation = `${rangePrefix[1]}${alternative}`;
        else if (!/^[1-3]?\s*[A-Za-zÀ-ỹ]+\s+/u.test(alternative)) {
            const bookPrefix = shortCitation.match(/^([^\d]+)\s*/u);
            if (bookPrefix) longCitation = `${bookPrefix[1].trim()} ${alternative}`;
        }
        return [{ cit_vn: cleanNodeText(longCitation) }, { cit_vn: shortCitation }];
    }

    function normalizeVietnamesePsalmResponseTail(text) {
        const response = '(?:Đáp|Ðáp|Dap|Đ\\.|Ð\\.)';
        return cleanNodeText(text)
            .replace(new RegExp(`\\s*[–—-]\\s*${response}\\.?\\s*(?:[–—-]\\s*${response}\\.?\\s*)+$`, 'iu'), ' - Đáp.')
            .replace(new RegExp(`\\s*[–—-]\\s*${response}\\.?\\s*$`, 'iu'), ' - Đáp.');
    }

    function parseVietnamesePsalmLines(lines) {
        const out = [];
        let responseRef = '';
        let pendingRubric = '';
        splitSourceBlocks(lines).forEach(line => {
            const alternative = strictAlternativeMatch(line.replace(/^\((.*)\)$/u, '$1'));
            if (alternative) {
                pendingRubric = 'Hoặc đọc:';
                if (alternative.rest) {
                    responseRef = responseRef || extractParentheticalRef(alternative.rest);
                    out.push(parsedRubricLine(pendingRubric, removeParentheticalRef(alternative.rest)));
                    pendingRubric = '';
                }
                return;
            }
            if (/^(Đáp|Ðáp|Đ\.|Ð\.)\s*[:.：]?/i.test(line)) {
                responseRef = responseRef || extractParentheticalRef(line);
                out.push(parsedLine('Đáp', removeParentheticalRef(line.replace(/^(Đáp|Ðáp|Đ\.|Ð\.)\s*[:.：]?\s*/i, ''))));
                return;
            }
            if (/^Xướng:/i.test(line)) {
                let text = normalizeVietnamesePsalmResponseTail(line.replace(/^Xướng:\s*/i, '').trim());
                if (!/[–—-]\s*(?:Đáp|Ðáp|Dap|Đ\.|Ð\.)\.?$/iu.test(text)) text = `${text} - Đáp.`;
                text = normalizeVietnamesePsalmResponseTail(text);
                out.push(parsedLine('Xướng', text));
                return;
            }
            if (pendingRubric) {
                responseRef = responseRef || extractParentheticalRef(line);
                out.push(parsedRubricLine(pendingRubric, removeParentheticalRef(line)));
                pendingRubric = '';
            }
        });
        return { lines: out, responseRef };
    }

    function appendVietnameseResponseRef(citation, responseRef) {
        const cit = strictCleanCitation(citation, { preserveParentheses: true });
        const ref = cleanNodeText(responseRef);
        if (!ref || cit.includes(ref)) return cit;
        return [cit, ref].filter(Boolean).join(' ');
    }

    function pushVietnameseAcclamationContent(out, raw, speaker = '') {
        if (isStandaloneDashText(raw)) return;
        const cleaned = cleanNodeText(String(raw || '')
            .replace(/^\((.*)\)$/u, '$1')
            .replace(/^[\u002d\u2010-\u2015\u2212]\s*/u, '')
            .replace(/^A\s+lleluia/iu, 'Alleluia')
            .replace(/\s*\)\s*$/u, ''));
        if (!cleaned || isStandaloneDashText(cleaned)) return;
        const cleanAcclamationVerse = value => cleanNodeText(String(value || '')
            .replace(/^[\u002d\u2010-\u2015\u2212]\s*/u, '')
            .replace(/\s*[\u002d\u2010-\u2015\u2212]\s*$/u, ''));
        const inlineAlleluia = cleaned.match(/^(Alleluia(?:,\s*alleluia)?[!.])\s+(.+?)\s*[–-]\s*(Alleluia[!.]?)$/i);
        if (inlineAlleluia) {
            out.push(parsedLine(speaker, inlineAlleluia[1]));
            out.push(parsedLine('', cleanAcclamationVerse(inlineAlleluia[2])));
            out.push(parsedLine('', inlineAlleluia[3]));
            return;
        }
        const combinedAlleluia = cleaned.match(/^(Alleluia[^!.\n]*[!.])\s*[–-]\s*(.+?)\s*[–-]?\s*(Alleluia[!.]?)$/i);
        if (combinedAlleluia) {
            out.push(parsedLine(speaker, combinedAlleluia[1]));
            out.push(parsedLine('', cleanAcclamationVerse(combinedAlleluia[2])));
            out.push(parsedLine('', combinedAlleluia[3]));
            return;
        }
        const wrappedAlleluia = cleaned.match(/^(Alleluia(?:,\s*alleluia)?[!.])\s+(.+?)\s+(Alleluia[!.]?)$/i);
        if (wrappedAlleluia) {
            out.push(parsedLine(speaker, wrappedAlleluia[1]));
            out.push(parsedLine('', cleanAcclamationVerse(wrappedAlleluia[2])));
            out.push(parsedLine('', wrappedAlleluia[3]));
            return;
        }
        if (/^Alleluia/i.test(cleaned)) out.push(parsedLine(speaker, cleaned));
        else out.push(parsedLine('', cleaned));
    }

    function parseVietnameseAcclamationLines(lines) {
        const out = [];
        let hasPrimary = false;
        splitSourceBlocks(lines).forEach(line => {
            if (isStandaloneDashText(line)) return;
            const cleaned = line.replace(/^[\u002d\u2010-\u2015\u2212]\s*/u, '').trim();
            if (!cleaned || isStandaloneDashText(cleaned)) return;
            const alternative = strictAlternativeMatch(cleaned.replace(/^\((.*)\)$/u, '$1'));
            if (alternative) {
                out.push(parsedLine('', 'Hoặc:'));
                pushVietnameseAcclamationContent(out, alternative.rest, 'Mọi người');
                return;
            }
            pushVietnameseAcclamationContent(out, cleaned, hasPrimary ? '' : 'Mọi người');
            hasPrimary = true;
        });
        return { lines: out };
    }

    function isVietnameseArticleStartLine(line) {
        return /^(Bậc lễ|Màu phụng vụ|Ca nhập lễ|Lời nguyện nhập lễ|Bài [ĐÐ]ọc I|[ĐÐ]áp Ca|Phúc Âm|Tin Mừng\s*:)/i.test(cleanNodeText(line));
    }

    function isVietnameseIntroductoryLineStart(line) {
        return /^Dẫn vào Thánh Lễ/i.test(cleanNodeText(line));
    }

    function isVietnameseSectionAfterIntroLine(line) {
        return /^(Ca nhập lễ|Lời nguyện nhập lễ|Bài [ĐÐ]ọc I|[ĐÐ]áp Ca|Bài [ĐÐ]ọc II|Alleluia|Tung hô Tin Mừng|Phúc Âm|Tin Mừng|Lời nguyện tiến lễ|Lời tiền tụng|Kinh Tiền Tụng|Ca hiệp lễ|Lời nguyện (?:hiệp|kết) lễ)/i.test(cleanNodeText(line));
    }

    function stripVietnameseIntroductoryLines(lines) {
        const output = [];
        let skippingIntro = false;
        (lines || []).forEach(line => {
            if (isVietnameseIntroductoryLineStart(line)) {
                skippingIntro = true;
                return;
            }
            if (skippingIntro && isVietnameseSectionAfterIntroLine(line)) {
                skippingIntro = false;
            }
            if (!skippingIntro) output.push(line);
        });
        return output;
    }

    function vietnameseArticleTailIndex(line) {
        const text = cleanNodeText(line);
        return text.search(/(?:^|\s)(?:Post\s+Views?\s*:|Tìm\s+kiếm\s+Tìm\s+kiếm(?:\s|$)|LỄ\s+KÍNH\s+CÁC\s+THÁNH(?:\s|$)|CÁC\s+MÙA\s+TRONG\s+NĂM\s+PHỤNG\s+VỤ(?:\s|$)|TỔNG\s+GIÁO\s+PHẬN\s+HÀ\s+NỘI(?:\s|$))/iu);
    }

    function trimVietnameseArticleTail(lines) {
        const output = [];
        for (const line of lines || []) {
            const text = cleanNodeText(line);
            const tailIndex = vietnameseArticleTailIndex(text);
            if (tailIndex >= 0) {
                const beforeTail = text.slice(0, tailIndex).trim();
                if (beforeTail) output.push(beforeTail);
                break;
            }
            if (text) output.push(line);
        }
        return output;
    }

    function getVietnameseBodyLines(lines) {
        const body = contentLinesFromSource(lines);
        const articleStart = body.findIndex(isVietnameseArticleStartLine);
        const scoped = articleStart >= 0 ? body.slice(articleStart) : body;
        const withoutIntro = stripVietnameseIntroductoryLines(scoped);
        const withoutTail = trimVietnameseArticleTail(withoutIntro);
        const meditationStart = withoutTail.findIndex(line => /^Suy niệm(?:\s|$)/i.test(cleanNodeText(line)));
        return meditationStart >= 0 ? withoutTail.slice(0, meditationStart) : withoutTail;
    }

    function firstIndex(lines, patterns, start = 0) {
        for (let i = start; i < lines.length; i++) {
            if (patterns.some(pattern => pattern.test(lines[i]))) return i;
        }
        return -1;
    }

    function sliceVietnameseSection(lines, startPatterns, endPatterns) {
        const start = firstIndex(lines, startPatterns);
        if (start < 0) return { heading: '', lines: [] };
        let end = lines.length;
        for (let i = start + 1; i < lines.length; i++) {
            if (endPatterns.some(pattern => pattern.test(lines[i]))) { end = i; break; }
        }
        const heading = lines[start];
        const inlineContentHeading = /^(?:Ca nhập lễ|Lời nguyện nhập lễ|Lời nguyện tiến lễ|Ca hiệp lễ|Lời nguyện (?:hiệp|kết) lễ)(?:\s|$|[:：])/iu.test(heading);
        const matchedStart = inlineContentHeading
            ? startPatterns.map(pattern => heading.match(pattern)).find(Boolean)
            : null;
        const inlineRest = matchedStart
            ? cleanNodeText(heading.slice(matchedStart[0].length).replace(/^\s*[:：-]?\s*/, ''))
            : '';
        return {
            heading,
            lines: (inlineRest ? [inlineRest] : []).concat(lines.slice(start + 1, end))
        };
    }

    function extractVietnameseDailySections(lines, date) {
        const body = splitEmbeddedDailySectionHeadings(selectVietnameseCycle(getVietnameseBodyLines(lines), date), 'VN');
        const result = {};
        const entrance = sliceVietnameseSection(body, [/^Ca nhập lễ/i], [/^Lời nguyện nhập lễ/i]);
        const collect = sliceVietnameseSection(body, [/^Lời nguyện nhập lễ/i], [/^Bài\s+[ĐÐđd]ọc(?:\s|$)/iu, /^Phụng vụ Lời Chúa(?:\s|$)/iu]);
        const reading1 = sliceVietnameseSection(body, [/^Bài [ĐÐ]ọc I/i], [/^[ĐÐ]áp Ca/i, /^[ĐÐ]áp ca/i]);
        const psalm = sliceVietnameseSection(body, [/^[ĐÐ]áp Ca/i, /^[ĐÐ]áp ca/i], [/^Bài [ĐÐ]ọc II/i, /^Alleluia/i, /^Tung hô Tin Mừng/i, /^Phúc Âm/i, /^Tin Mừng\s*:/i]);
        const reading2 = sliceVietnameseSection(body, [/^Bài [ĐÐ]ọc II/i], [/^Alleluia/i, /^Tung hô Tin Mừng/i, /^Phúc Âm/i, /^Tin Mừng\s*:/i]);
        const accl = sliceVietnameseSection(body, [/^Alleluia/i, /^Tung hô Tin Mừng/i], [/^Phúc Âm/i, /^Tin Mừng\s*:/i]);
        const gospel = sliceVietnameseSection(body, [/^Phúc Âm/i, /^Tin Mừng\s*:/i], [/^Lời nguyện tín hữu/i, /^Lời nguyện tiến lễ/i]);
        const offerings = sliceVietnameseSection(body, [/^Lời nguyện tiến lễ/i], [/^Lời tiền tụng/i, /^Kinh Tiền Tụng/i, /^Ca hiệp lễ/i]);
        const preface = sliceVietnameseSection(body, [/^Lời tiền tụng/i, /^Kinh Tiền Tụng/i], [/^Ca hiệp lễ/i]);
        const communion = sliceVietnameseSection(body, [/^Ca hiệp lễ/i], [/^Suy niệm sau hiệp lễ/i, /^Lời nguyện (?:hiệp|kết) lễ/i]);
        const after = sliceVietnameseSection(body, [/^Lời nguyện (?:hiệp|kết) lễ/i], [/^Suy niệm/i, /^Chia sẻ/i, /^Bài liên quan/i, /^Tags?:/i]);
        if (preface.lines.length) {
            state.liturgyInfo.prefaceHint = cleanNodeText(preface.heading || preface.lines[0]);
            state.liturgyInfo.prefaceHintSource = 'source';
        }

        if (entrance.lines.length) {
            const preparedEntrance = prepareVietnameseAntiphonSection(entrance.heading, entrance.lines);
            result.entrance = { text: formatVietnameseSection('entrance', preparedEntrance.lines), lines: formatVietnameseSectionLines('entrance', preparedEntrance.lines), optionCits: preparedEntrance.optionCits, cit_vn: preparedEntrance.citation };
        }
        if (collect.lines.length) result.collect = { text: formatVietnameseSection('collect', collect.lines), lines: formatVietnameseSectionLines('collect', collect.lines) };
        if (reading1.lines.length) {
            const parsedLines = parseVietnameseReadingLines(reading1.lines, false);
            result.reading1 = { text: parsedLinesToText(parsedLines), lines: parsedLines, cit_vn: extractCitationFromHeading(reading1.heading) };
        }
        if (reading2.lines.length) {
            const parsedLines = parseVietnameseReadingLines(reading2.lines, false);
            result.reading2 = { text: parsedLinesToText(parsedLines), lines: parsedLines, cit_vn: extractCitationFromHeading(reading2.heading) };
        }
        if (psalm.lines.length) {
            const parsedPsalm = parseVietnamesePsalmLines(psalm.lines);
            const baseCit = extractCitationFromHeading(psalm.heading) || psalm.heading.replace(/^[ĐÐ]áp Ca:\s*/i, '').trim();
            attachPsalmVerseRefs('VN', baseCit, parsedPsalm.lines);
            result.psalm = { text: parsedLinesToText(parsedPsalm.lines), lines: parsedPsalm.lines, cit_vn: appendVietnameseResponseRef(baseCit, parsedPsalm.responseRef) };
        }
        if (accl.lines.length) result.gospel_accl = { text: formatVietnameseSection('gospel_accl', accl.lines), lines: formatVietnameseSectionLines('gospel_accl', accl.lines) };
        if (gospel.lines.length) {
            const parsedLines = parseVietnameseReadingLines(gospel.lines, true);
            const citation = extractCitationFromHeading(gospel.heading);
            const optionCits = vietnameseGospelOptionCitations(citation, parsedLines);
            result.gospel = {
                text: parsedLinesToText(parsedLines),
                lines: parsedLines,
                cit_vn: optionCits[0] && optionCits[0].cit_vn ? optionCits[0].cit_vn : citation,
                optionCits
            };
        }
        if (offerings.lines.length) result.prayer_offerings = { text: formatVietnameseSection('prayer_offerings', offerings.lines), lines: formatVietnameseSectionLines('prayer_offerings', offerings.lines) };
        if (communion.lines.length) {
            const preparedCommunion = prepareVietnameseAntiphonSection(communion.heading, communion.lines);
            result.communion = { text: formatVietnameseSection('communion', preparedCommunion.lines), lines: formatVietnameseSectionLines('communion', preparedCommunion.lines), optionCits: preparedCommunion.optionCits, cit_vn: preparedCommunion.citation };
        }
        if (after.lines.length) result.prayer_after = { text: formatVietnameseSection('prayer_after', after.lines), lines: formatVietnameseSectionLines('prayer_after', after.lines) };
        return result;
    }

    function lineMatches(line, patterns) {
        return patterns.some(pattern => pattern.test(line));
    }

    function compactSection(lines, maxChars = 3600) {
        const text = lines
            .filter(line => !/^(Bậc lễ|Màu phụng vụ|Năm [IVX]+:|Lectionary:|Reading I|Reading II)$/i.test(line))
            .join('\n')
            .replace(/\n{3,}/g, '\n\n')
            .trim();
        return text.length > maxChars ? `${text.slice(0, maxChars).trim()}...` : text;
    }

    function trimTerminalDailyContent(lines) {
        const terminalIndex = (lines || []).findIndex(line => /^(영성체\s*후\s*묵상|오늘의\s*묵상|Suy niệm|LISTEN(?:\s+PODCAST)?|PODCAST|View Calendar|Get Daily Readings|Daily Readings Audio|Post Views|Tìm kiếm|##\s|LỄ KÍNH|Bài liên quan|Tags?:|관련\s*글|이전\s*글|다음\s*글|日ごとの福音|聖書本文|配信停止|プライバシーポリシー|お問合せ)/i.test(line));
        return terminalIndex >= 0 ? lines.slice(0, terminalIndex) : lines;
    }

    const embeddedDailySectionBoundaryPatterns = {
        KR: /(?:예물\s*기도|감사송|영성체송|영성체\s*후\s*기도)(?=\s|$|[:：])/gu,
        VN: /(?:Lời\s+nguyện\s+tiến\s+lễ|Lời\s+tiền\s+tụng|Kinh\s+Tiền\s+Tụng|Ca\s+hiệp\s+lễ|Lời\s+nguyện\s+(?:hiệp|kết)\s+lễ)(?=\s|$|[:：])/giu,
        EN: /(?:Prayer\s+over\s+the\s+Offerings|Preface|Communion\s+Antiphon|Prayer\s+after\s+Communion)(?=\s|$|[:：])/giu,
        JP: /(?:奉納祈願|奉納文|叙唱|聖体拝領唱|拝領唱|拝領後の祈願|拝領祈願)(?=\s|$|[:：])/gu,
        LA: /(?:Super\s+oblata|Pr(?:æ|ae)fatio|Antiphona\s+ad\s+communionem|Post\s+communionem)(?=\s|$|[:：])/giu
    };

    // Some proxy/article sources flatten adjacent headings and their content into
    // one physical line. Split only the distinctive post-Gospel headings so a
    // prayer can never absorb a preface or the following Communion section.
    function splitEmbeddedDailySectionHeadings(lines, lang) {
        const normalizedLang = normalizeSelectableLang(lang, lang);
        const pattern = embeddedDailySectionBoundaryPatterns[normalizedLang] || null;
        if (!pattern) return Array.isArray(lines) ? lines.slice() : [];
        return (lines || []).flatMap(rawLine => {
            const raw = String(rawLine || '');
            const matcher = new RegExp(pattern.source, pattern.flags);
            const starts = Array.from(raw.matchAll(matcher))
                .filter(match => {
                    const index = match.index;
                    if (index > 0 && !/\s/u.test(raw.charAt(index - 1))) return false;
                    if (!['VN', 'EN', 'LA'].includes(normalizedLang)) return true;
                    const first = String(match[0] || '').charAt(0);
                    return first === first.toUpperCase();
                })
                .map(match => match.index)
                .filter((index, position, values) => position === 0 || index !== values[position - 1]);
            if (!starts.length) return raw.trim() ? [raw.trim()] : [];
            const boundaries = starts[0] === 0 ? starts : [0].concat(starts);
            return boundaries.map((start, index) => raw.slice(start, boundaries[index + 1] || raw.length).trim()).filter(Boolean);
        });
    }

    function extractRawSections(lines, lang) {
        lines = splitEmbeddedDailySectionHeadings(lines, lang);
        const markers = dailySectionMarkers[lang] || {};
        const allMarkers = Object.values(markers).flat();
        const result = {};
        Object.keys(markers).forEach(key => {
            const start = lines.findIndex(line => lineMatches(line, markers[key]));
            if (start < 0) return;
            let end = lines.length;
            for (let i = start + 1; i < lines.length; i++) {
                if (lineMatches(lines[i], allMarkers)) { end = i; break; }
            }
            const sectionLines = (lang === 'KR' && key === 'psalm') ? lines.slice(start, end) : lines.slice(start + 1, end);
            result[key] = trimTerminalDailyContent(sectionLines)
                .filter(line => !/^(Bậc lễ|Màu phụng vụ|Năm [IVX]+:|Lectionary:|Reading I|Reading II)$/i.test(line));
        });
        return result;
    }

    function extractEnglishCitationLine(blocks) {
        const index = blocks.findIndex(line => /^(?:[1-3]\s*)?[A-Z][A-Za-z .]+(?:\s+\d|:)/.test(line) && /\d/.test(line));
        if (index < 0) return { citation: '', blocks };
        return { citation: cleanCitation(blocks[index]), blocks: blocks.filter((_, i) => i !== index) };
    }

    const englishBookNameMap = [
        [/^(Acts|Acts of the Apostles)\b/i, 'the Acts of the Apostles', 'acts'],
        [/^(Rv|Rev|Revelation|Apocalypse)\b/i, 'the Apocalypse', 'apocalypse'],
        [/^(Gn|Gen|Genesis)\b/i, 'Genesis'], [/^(Ex|Exod|Exodus)\b/i, 'Exodus'], [/^(Lv|Lev|Leviticus)\b/i, 'Leviticus'], [/^(Nm|Num|Numbers)\b/i, 'Numbers'], [/^(Dt|Deut|Deuteronomy)\b/i, 'Deuteronomy'],
        [/^(Jos|Josh|Joshua)\b/i, 'Joshua'], [/^(Jgs|Judg|Judges)\b/i, 'Judges'], [/^(Ru|Ruth)\b/i, 'Ruth'], [/^1\s*(Sm|Sam|Samuel)\b/i, '1 Samuel'], [/^2\s*(Sm|Sam|Samuel)\b/i, '2 Samuel'], [/^1\s*(Kgs|Kings)\b/i, '1 Kings'], [/^2\s*(Kgs|Kings)\b/i, '2 Kings'],
        [/^1\s*(Chr|Chronicles)\b/i, '1 Chronicles'], [/^2\s*(Chr|Chronicles)\b/i, '2 Chronicles'], [/^(Ezr|Ezra)\b/i, 'Ezra'], [/^(Neh|Nehemiah)\b/i, 'Nehemiah'], [/^(Tb|Tob|Tobit)\b/i, 'Tobit'], [/^(Jdt|Judith)\b/i, 'Judith'], [/^(Est|Esther)\b/i, 'Esther'],
        [/^1\s*(Mc|Mac|Maccabees)\b/i, '1 Maccabees'], [/^2\s*(Mc|Mac|Maccabees)\b/i, '2 Maccabees'], [/^(Jb|Job)\b/i, 'Job'], [/^(Ps|Psalm|Psalms)\b/i, 'Psalms'], [/^(Prv|Prov|Proverbs)\b/i, 'Proverbs'], [/^(Eccl|Ecclesiastes)\b/i, 'Ecclesiastes'],
        [/^(Sg|Song|Song of Songs|Song of Solomon)\b/i, 'Song of Songs'], [/^(Wis|Wisdom)\b/i, 'Wisdom'], [/^(Sir|Sirach|Ecclesiasticus)\b/i, 'Sirach'], [/^(Is|Isa|Isaiah)\b/i, 'Isaiah'], [/^(Jer|Jeremiah)\b/i, 'Jeremiah'], [/^(Lam|Lamentations)\b/i, 'Lamentations'],
        [/^(Bar|Baruch)\b/i, 'Baruch'], [/^(Ez|Ezek|Ezekiel)\b/i, 'Ezekiel'], [/^(Dn|Dan|Daniel)\b/i, 'Daniel'], [/^(Hos|Hosea)\b/i, 'Hosea'], [/^(Jl|Joel)\b/i, 'Joel'], [/^(Am|Amos)\b/i, 'Amos'], [/^(Ob|Obadiah)\b/i, 'Obadiah'],
        [/^(Jon|Jonah)\b/i, 'Jonah'], [/^(Mi|Mic|Micah)\b/i, 'Micah'], [/^(Na|Nah|Nahum)\b/i, 'Nahum'], [/^(Hb|Hab|Habakkuk)\b/i, 'Habakkuk'], [/^(Zep|Zephaniah)\b/i, 'Zephaniah'], [/^(Hg|Hag|Haggai)\b/i, 'Haggai'],
        [/^(Zec|Zech|Zechariah)\b/i, 'Zechariah'], [/^(Mal|Malachi)\b/i, 'Malachi'], [/^(Rom|Romans)\b/i, 'Romans'], [/^1\s*(Cor|Corinthians)\b/i, '1 Corinthians'], [/^2\s*(Cor|Corinthians)\b/i, '2 Corinthians'],
        [/^(Gal|Galatians)\b/i, 'Galatians'], [/^(Eph|Ephesians)\b/i, 'Ephesians'], [/^(Phil|Philippians)\b/i, 'Philippians'], [/^(Col|Colossians)\b/i, 'Colossians'], [/^1\s*(Thes|Thess|Thessalonians)\b/i, '1 Thessalonians'], [/^2\s*(Thes|Thess|Thessalonians)\b/i, '2 Thessalonians'],
        [/^1\s*(Tm|Tim|Timothy)\b/i, '1 Timothy'], [/^2\s*(Tm|Tim|Timothy)\b/i, '2 Timothy'], [/^(Ti|Titus)\b/i, 'Titus'], [/^(Phlm|Philemon)\b/i, 'Philemon'], [/^(Heb|Hebrews)\b/i, 'Hebrews'], [/^(Jas|James)\b/i, 'James'],
        [/^1\s*(Pt|Pet|Peter)\b/i, '1 Peter'], [/^2\s*(Pt|Pet|Peter)\b/i, '2 Peter'], [/^1\s*(Jn|John)\b/i, '1 John'], [/^2\s*(Jn|John)\b/i, '2 John'], [/^3\s*(Jn|John)\b/i, '3 John'], [/^(Jude)\b/i, 'Jude']
    ];

    const englishGospelNameMap = [[/^(Mt|Matt|Matthew)\b/i, 'Matthew'], [/^(Mk|Mark)\b/i, 'Mark'], [/^(Lk|Luke)\b/i, 'Luke'], [/^(Jn|John)\b/i, 'John']];
    const englishNumberedBookOrdinals = { '1': 'first', '2': 'second', '3': 'third' };
    const englishPaulineLetterRecipients = {
        'Corinthians': 'to the Corinthians',
        'Thessalonians': 'to the Thessalonians',
        'Timothy': 'to Timothy'
    };
    const englishUnnumberedLetterSources = {
        'Romans': 'the Letter of Saint Paul to the Romans',
        'Galatians': 'the Letter of Saint Paul to the Galatians',
        'Ephesians': 'the Letter of Saint Paul to the Ephesians',
        'Philippians': 'the Letter of Saint Paul to the Philippians',
        'Colossians': 'the Letter of Saint Paul to the Colossians',
        'Titus': 'the Letter of Saint Paul to Titus',
        'Philemon': 'the Letter of Saint Paul to Philemon',
        'Hebrews': 'the Letter to the Hebrews',
        'James': 'the Letter of Saint James',
        'Jude': 'the Letter of Saint Jude'
    };

    function englishBookInfoFromCitation(citation) {
        const normalized = cleanNodeText(citation).replace(/^cf\.\s*/i, '');
        const found = englishBookNameMap.find(item => item[0].test(normalized));
        return found ? { name: found[1], special: found[2] || '' } : null;
    }

    function englishGospelNameFromCitation(citation) {
        const normalized = cleanNodeText(citation).replace(/^cf\.\s*/i, '');
        const found = englishGospelNameMap.find(item => item[0].test(normalized));
        return found ? found[1] : '';
    }

    function englishReadingSourcePhrase(book) {
        const name = book && book.name ? book.name : '';
        const numbered = name.match(/^([1-3])\s+(.+)$/);
        if (numbered) {
            const ordinal = englishNumberedBookOrdinals[numbered[1]] || numbered[1];
            const baseName = numbered[2];
            if (englishPaulineLetterRecipients[baseName]) {
                return `the ${ordinal} Letter of Saint Paul ${englishPaulineLetterRecipients[baseName]}`;
            }
            if (baseName === 'Peter') return `the ${ordinal} Letter of Saint Peter`;
            if (baseName === 'John') return `the ${ordinal} Letter of Saint John`;
            return `the ${ordinal} Book of ${baseName}`;
        }
        return englishUnnumberedLetterSources[name] || `the Book of ${name}`;
    }

    function buildEnglishReadingIntro(baseId, citation) {
        if (baseId === 'gospel') {
            const gospelName = englishGospelNameFromCitation(citation);
            return gospelName ? `A reading from the holy Gospel according to ${gospelName}.` : '';
        }
        const book = englishBookInfoFromCitation(citation);
        if (!book) return '';
        if (book.special === 'acts' || book.special === 'apocalypse') return `A reading from ${book.name}.`;
        return `A reading from ${englishReadingSourcePhrase(book)}.`;
    }

    function trimEnglishGospelTail(blocks) {
        const index = (blocks || []).findIndex(line => /^(LISTEN(?:\s+PODCAST)?|PODCAST|View Calendar|Get Daily Readings|Daily Readings Audio|Subscribe|Dive into|Daily Reflection)/i.test(line));
        return index >= 0 ? blocks.slice(0, index) : blocks;
    }

    function parseEnglishReadingSection(lines, baseId = '') {
        let blocks = splitSourceBlocks(lines)
            .filter(line => !/^Lectionary:/i.test(line))
            .filter(line => !/^The word of the Lord\.?$/i.test(line))
            .filter(line => !/^Thanks be to God\.?$/i.test(line));
        if (baseId === 'gospel') blocks = trimEnglishGospelTail(blocks);
        const citationResult = extractEnglishCitationLine(blocks);
        const out = [];
        const intro = buildEnglishReadingIntro(baseId, citationResult.citation);
        if (intro) out.push(parsedLine('', intro, 'intro'));
        const body = baseId === 'entrance'
            ? removeEnglishEntranceGloriaInstruction(citationResult.blocks.join('\n'))
            : citationResult.blocks.join('\n');
        if (body) out.push(parsedLine('', body, 'body'));
        return { text: parsedLinesToText(out), lines: out, cit_en: citationResult.citation };
    }

    function removeEnglishEntranceGloriaInstruction(value) {
        return cleanNodeText(String(value || '').replace(
            /\bThe\s+Gloria\s+in\s+excelsis\s*(?:\(\s*Glory\s+to\s+God\s+in\s+the\s+highest\s*\))?\s+is\s+said\.?/gi,
            ' '
        ));
    }

    function appendCitationRef(citation, ref) {
        if (!ref || !citation || citation.includes(ref)) return citation;
        return `${citation} ${ref}`;
    }

    function parseEnglishPsalm(lines) {
        const blocks = splitSourceBlocks(lines);
        const out = [];
        let citation = '';
        let verseBuffer = [];
        const flushVerse = (withResponse = false) => {
            if (!verseBuffer.length) return;
            const text = cleanNodeText(`${verseBuffer.join(' ')}${withResponse ? ' -R.' : ''}`);
            if (text) out.push(parsedLine('Versicle', text));
            verseBuffer = [];
        };
        blocks.forEach(line => {
            if (/^(Psalm|Ps)\b/i.test(line)) {
                citation = citation || cleanCitation(line);
                return;
            }
            if (/^R\./i.test(line)) {
                const ref = extractParentheticalRef(line);
                citation = appendCitationRef(citation, ref);
                const text = removeParentheticalRef(line.replace(/^R\.\s*/i, ''));
                if (!out.some(item => item.sp === 'Response')) out.push(parsedLine('Response', text));
                else flushVerse(true);
                return;
            }
            const endsWithResponse = /\s*[-–—]\s*R\.?\s*$/i.test(line);
            const text = cleanNodeText(line.replace(/\s*[-–—]\s*R\.?\s*$/i, ''));
            if (text) verseBuffer.push(text);
            if (endsWithResponse) flushVerse(true);
        });
        flushVerse(false);
        return { text: parsedLinesToText(out), lines: out, cit_en: citation };
    }

    function parseEnglishAcclamation(lines) {
        const out = [];
        const citationResult = extractEnglishCitationLine(splitSourceBlocks(lines));
        let verseBuffer = [];
        const flushVerse = () => {
            const text = cleanNodeText(verseBuffer.join(' '));
            if (text) out.push(parsedLine('Versicle', text));
            verseBuffer = [];
        };
        citationResult.blocks.forEach(line => {
            if (/^R\./i.test(line)) {
                flushVerse();
                out.push(parsedLine('R.', removeParentheticalRef(line.replace(/^R\.\s*/i, ''))));
            } else if (line) {
                verseBuffer.push(line);
            }
        });
        flushVerse();
        const result = { text: parsedLinesToText(out), lines: out };
        if (citationResult.citation) result.cit_en = citationResult.citation;
        return result;
    }

    function parseEnglishDailySections(lines) {
        const raw = extractRawSections(lines, 'EN');
        const result = {};
        Object.keys(raw).forEach(key => {
            if (key === 'preface') return;
            if (key === 'psalm') result[key] = parseEnglishPsalm(raw[key]);
            else if (key === 'gospel_accl') result[key] = parseEnglishAcclamation(raw[key]);
            else result[key] = parseEnglishReadingSection(raw[key], key);
        });
        return result;
    }

    function isJapaneseCitationLine(line) {
        const text = cleanCitation(line);
        if (!text || text.length > 80) return false;
        return /\d+・\d+/.test(text) || /^詩編\s*\d+/.test(text);
    }

    function isJapaneseSourceTailLine(line) {
        const text = cleanNodeText(line);
        return /^(信仰の糧|今日のために|カトリック教会より|Image:|聖書本文は|寄付します|Facebook|Twitter|LINE)$/i.test(text)
            || /(日ごとの福音|メール配信|ご協力|facebook\.com|twitter\.com|line\.me|日本聖書協会|パリ外国宣教会|配信停止|プライバシーポリシー|お問合せ|他の言語で|©)/i.test(text);
    }

    function isJapaneseBookHeadingLine(line) {
        const text = cleanNodeText(line).replace(/\s+/g, '');
        if (!text || text.length > 40) return false;
        if (/[。！？、，,.]/.test(text) || /\d+・\d+/.test(text)) return false;
        if (/^(第一朗読|第二朗読|答唱詩編|福音朗読|アレルヤ唱|詠唱)$/.test(text)) return false;
        return /^(?:[一二三四五六七八九十①②③１２３1-3])?[一-龯々ぁ-んァ-ヶー・]+(?:による福音|の手紙)?$/u.test(text);
    }

    function japaneseReadingIntroFromBookName(bookName) {
        const book = cleanNodeText(bookName).replace(/\s+/g, '');
        if (!book || /福音/u.test(book)) return '';
        return `${book}${/記$/u.test(book) ? 'らの朗読です。' : 'からの朗読です。'}`;
    }

    function japaneseBookNameFromCitation(citation) {
        const text = strictCleanLine(citation).replace(/\s+/g, ' ');
        const match = text.match(/^(.+?)\s*[0-9０-９]+[・.．:：]/u);
        return match ? cleanNodeText(match[1]) : '';
    }

    function extractJapaneseReadingIntro(blocks, citation) {
        const index = (blocks || []).findIndex((line, i) => i < 5 && isJapaneseBookHeadingLine(line) && !/福音/u.test(line));
        if (index >= 0) {
            return {
                intro: japaneseReadingIntroFromBookName(blocks[index]),
                blocks: blocks.filter((_, i) => i !== index)
            };
        }
        return {
            intro: japaneseReadingIntroFromBookName(japaneseBookNameFromCitation(citation)),
            blocks: blocks || []
        };
    }

    function extractJapaneseSummaryLine(lines) {
        const quoted = extractQuotedSummary(lines);
        if (quoted.summary) return quoted;
        const bookIndex = lines.findIndex((line, index) => index < 4 && isJapaneseBookHeadingLine(line));
        if (bookIndex > 0) {
            return {
                summary: cleanNodeText(lines.slice(0, bookIndex).filter(line => !isJapaneseSourceTailLine(line)).join(' ')),
                lines: lines.slice(bookIndex)
            };
        }
        return { summary: '', lines };
    }

    function extractJapaneseCitationLine(blocks) {
        const index = blocks.findIndex(isJapaneseCitationLine);
        if (index < 0) return { citation: '', blocks };
        return { citation: cleanCitation(blocks[index]), blocks: blocks.filter((_, i) => i !== index) };
    }

    function parseJapaneseReadingSection(lines, baseId = '') {
        let blocks = splitSourceBlocks(lines).filter(line => !isJapaneseSourceTailLine(line));
        const citationResult = extractJapaneseCitationLine(blocks);
        blocks = citationResult.blocks;
        const summaryResult = extractJapaneseSummaryLine(blocks);
        blocks = summaryResult.lines;
        const headingIndex = blocks.findIndex((line, index) => index < 4 && isJapaneseBookHeadingLine(line));
        const introBook = headingIndex >= 0 ? cleanNodeText(blocks[headingIndex]) : '';
        const intro = baseId === 'gospel' ? introBook : japaneseReadingIntroFromBookName(introBook || japaneseBookNameFromCitation(citationResult.citation));
        if (headingIndex >= 0) blocks = blocks.filter((_, index) => index !== headingIndex);
        const out = [];
        if (summaryResult.summary) out.push(parsedLine('', summaryResult.summary, 'summary'));
        if (intro) out.push(parsedLine('', intro, 'intro'));
        const body = blocks.map(stripJapaneseVerseNumbers).filter(Boolean).join('\n');
        if (body) out.push(parsedLine('', body, 'body'));
        return { text: parsedLinesToText(out), lines: out, cit_jp: citationResult.citation };
    }

    function parseJapanesePsalm(lines) {
        const blocks = splitSourceBlocks(lines);
        const citation = blocks.find(line => /^詩編/.test(line)) || '';
        const out = buildJapanesePsalmLines(blocks, citation);
        return { text: parsedLinesToText(out), lines: out, cit_jp: citation };
    }

    function parseJapaneseAcclamation(lines) {
        const out = buildJapaneseAcclamationLines(lines);
        return { text: parsedLinesToText(out), lines: out };
    }

    function findJapaneseSectionIndex(lines, patterns, start = 0) {
        for (let i = start; i < lines.length; i++) {
            if (patterns.some(pattern => pattern.test(lines[i]))) return i;
        }
        return -1;
    }

    function sliceJapaneseSection(lines, startPatterns, endPatterns) {
        const start = findJapaneseSectionIndex(lines, startPatterns);
        if (start < 0) return [];
        let end = lines.length;
        for (let i = start + 1; i < lines.length; i++) {
            if (endPatterns.some(pattern => pattern.test(lines[i]))) { end = i; break; }
        }
        return trimTerminalDailyContent(lines.slice(start + 1, end))
            .filter(line => !isJapaneseSourceTailLine(line));
    }

    function isJapaneseGospelBookHeading(line) {
        return /(マタイ|マルコ|ルカ|ヨハネ).*(による福音|の福音)/.test(cleanNodeText(line));
    }

    function splitJapaneseGospelAndAcclamation(gospelLines) {
        const citationResult = extractJapaneseCitationLine(splitSourceBlocks(gospelLines));
        const withoutCitation = citationResult.blocks.filter(line => !isJapaneseSourceTailLine(line));
        const bookIndex = withoutCitation.findIndex(isJapaneseGospelBookHeading);
        const preBook = bookIndex > 0 ? withoutCitation.slice(0, bookIndex) : [];
        const body = bookIndex >= 0 ? withoutCitation.slice(bookIndex) : withoutCitation;
        const accl = preBook.filter(line => /アレルヤ|詠唱/.test(line));
        const gospel = citationResult.citation ? [citationResult.citation].concat(body) : body;
        return { accl, gospel };
    }

    function parseJapaneseDailySections(lines) {
        const cleaned = (lines || []).map(cleanMarkdownLine).filter(Boolean);
        const result = {};
        const reading1 = sliceJapaneseSection(cleaned, [/^第一朗読/], [/^答唱詩編/, /^第二朗読/, /^福音朗読/]);
        const psalm = sliceJapaneseSection(cleaned, [/^答唱詩編/], [/^第二朗読/, /^福音朗読/]);
        const reading2 = sliceJapaneseSection(cleaned, [/^第二朗読/], [/^福音朗読/]);
        const gospelBlock = sliceJapaneseSection(cleaned, [/^福音朗読/], [/^奉納/, /^聖書本文/, /^日ごとの福音/]);
        if (reading1.length) result.reading1 = parseJapaneseReadingSection(reading1, 'reading1');
        if (psalm.length) result.psalm = parseJapanesePsalm(psalm);
        if (reading2.length) result.reading2 = parseJapaneseReadingSection(reading2, 'reading2');
        if (gospelBlock.length) {
            const parts = splitJapaneseGospelAndAcclamation(gospelBlock);
            if (parts.accl.length) result.gospel_accl = parseJapaneseAcclamation(parts.accl);
            if (parts.gospel.length) result.gospel = parseJapaneseReadingSection(parts.gospel, 'gospel');
        }
        return result;
    }

    function sourceSectionHasContent(value) {
        if (value == null) return false;
        if (typeof value !== 'object') return !!cleanNodeText(value);
        if (cleanNodeText(value.text)) return true;
        if (Array.isArray(value.lines) && value.lines.length) return true;
        return Object.keys(value).some(field => /_lines$/i.test(field) && Array.isArray(value[field]) && value[field].length);
    }

    function prefaceHintFromParsedSection(value) {
        const lines = Array.isArray(value && value.lines) ? value.lines : [];
        const lineHint = lines.map(line => cleanNodeText(line && line.text)).find(text =>
            text && text.length < 90 && !/^(감사송|Preface|叙唱|Lời tiền tụng|Kinh Tiền Tụng)$/i.test(text)
        );
        if (lineHint) return lineHint;
        const text = cleanNodeText(value && value.text);
        const firstLine = text.split(/\n+/).map(cleanNodeText).find(Boolean);
        return firstLine && firstLine.length < 90 ? firstLine : '';
    }

    const properLocalDailySectionIds = new Set([
        'entrance', 'collect', 'reading1', 'psalm', 'reading2', 'gospel_accl', 'gospel',
        'prayer_offerings', 'communion', 'prayer_after'
    ]);

    function isLeftLocalProperLiturgyActive() {
        const local = state.liturgyInfo && state.liturgyInfo.localCalendar;
        if (!local || !local.lang) return false;
        return normalizeSelectableLang(local.lang, '') === normalizeSelectableLang(state.currentLoc, '');
    }

    function shouldSuppressMismatchedLocalProperLanguage(lang) {
        if (!isLeftLocalProperLiturgyActive()) return false;
        const activeDate = getActiveLiturgicalSourceDate();
        if (!isLocalOnlyCalendarOverrideDate(activeDate)
            && state.liturgyInfo
            && state.liturgyInfo.meta
            && state.liturgyInfo.meta.special) return false;
        if (!isLocalOnlyCalendarOverrideDate(activeDate)
            && hasNonSeasonalLiturgyNameForLookup(state.liturgyInfo, activeDate)) return false;
        const localLang = normalizeSelectableLang(state.liturgyInfo.localCalendar.lang, '');
        return normalizeSelectableLang(lang, '') !== localLang;
    }

    function shouldSuppressMismatchedLocalProperSection(lang, key) {
        return properLocalDailySectionIds.has(key) && shouldSuppressMismatchedLocalProperLanguage(lang);
    }

    function isLocalOnlyCalendarOverrideDate(date) {
        const override = localCalendarOverrideForDate(date);
        return isOverrideLocalOnlyForLang(override, state.currentLoc);
    }

    function isNonLeftLocalProperSource(lang, title) {
        if (normalizeSelectableLang(lang, '') === normalizeSelectableLang(state.currentLoc, '')) return false;
        const activeOverride = localCalendarOverrideForDate(getActiveLiturgicalSourceDate());
        if (isOverrideLocalOnlyForLang(activeOverride, state.currentLoc)
            && activeOverride.names && activeOverride.names[lang]) return true;
        if (!title || (state.liturgyInfo.meta && state.liturgyInfo.meta.special)) return false;
        const cleanTitle = cleanLiturgyTitle(title);
        const expectedTitle = state.liturgyInfo.names && state.liturgyInfo.names[lang];
        if (!cleanTitle || !expectedTitle) return false;
        return normalizeCalendarNameForCompare(cleanTitle) !== normalizeCalendarNameForCompare(expectedTitle);
    }

    function rememberLeftSourceTitleAsLocalProper(lang, title) {
        if (normalizeSelectableLang(lang, '') !== normalizeSelectableLang(state.currentLoc, '')) return;
        if (state.liturgyInfo.meta && state.liturgyInfo.meta.special) return;
        const cleanTitle = cleanLiturgyTitle(title);
        if (!cleanTitle) return;
        const currentTitle = state.liturgyInfo.names && state.liturgyInfo.names[lang];
        if (!currentTitle) return;
        // Daily sources often reorder harmless seasonal words (for example,
        // "Chúa Nhật Tuần XVII - Mùa Thường Niên"). Do not mistake that for a
        // country-only proper and erase the official counterpart languages.
        if (isGeneratedSeasonalNameForInfo(lang, cleanTitle, state.liturgyInfo)) return;
        const fixedSharedTitle = strictFixedDailyTitle(lang, getActiveLiturgicalSourceDate());
        if (fixedSharedTitle && normalizeCalendarNameForCompare(cleanTitle) === normalizeCalendarNameForCompare(fixedSharedTitle)) return;
        const activeDate = getActiveLiturgicalSourceDate();
        if (!isLocalOnlyCalendarOverrideDate(activeDate) && hasNonSeasonalLiturgyNameForLookup(state.liturgyInfo, activeDate)) return;
        if (normalizeCalendarNameForCompare(cleanTitle) === normalizeCalendarNameForCompare(currentTitle)) return;
        state.liturgyInfo.localCalendar = {
            lang,
            name: cleanTitle,
            source: 'daily-source'
        };
        Object.keys(state.liturgyInfo.names || {}).forEach(code => {
            if (normalizeSelectableLang(code, '') !== normalizeSelectableLang(lang, '')) {
                state.liturgyInfo.names[code] = '';
            }
        });
    }

    function mergeSourceData(target, parsed, lang, options = {}) {
        if (!parsed) return;
        const lower = lang.toLowerCase();
        const allowExternalLiturgy = options.allowExternalLiturgy === true;
        const calendarContext = allowExternalLiturgy && parsed.calendarContext && parsed.calendarContext.confirmed
            ? parsed.calendarContext
            : null;
        const calendarPriority = !!(calendarContext && calendarContext.priority);
        if (calendarPriority) {
            state.liturgyInfo.meta = Object.assign({}, state.liturgyInfo.meta || {}, {
                special: true,
                rank: calendarContext.rankKey || (state.liturgyInfo.meta && state.liturgyInfo.meta.rank) || 'memorial',
                vietnameseCalendarConfirmed: true
            });
            if (calendarContext.color) state.liturgyInfo.color = calendarContext.color;
        }
        const suppressNonLeftProper = calendarPriority ? false : isNonLeftLocalProperSource(lang, parsed.title);
        if (allowExternalLiturgy && parsed.title && !options.suppressTitle) rememberLeftSourceTitleAsLocalProper(lang, parsed.title);
        Object.keys(parsed.data || {}).forEach(key => {
            if (suppressNonLeftProper && properLocalDailySectionIds.has(key)) return;
            if (shouldSuppressMismatchedLocalProperSection(lang, key)) return;
            const value = parsed.data[key];
            if (!sourceSectionHasContent(value)) return;
            if (key === 'preface') {
                const prefaceHint = prefaceHintFromParsedSection(value);
                if (prefaceHint) {
                    state.liturgyInfo.prefaceHint = prefaceHint;
                    state.liturgyInfo.prefaceHintSource = 'source';
                }
                return;
            }
            if (!target[key]) target[key] = {};
            if (typeof value === 'object' && value !== null) {
                if (value.text) target[key][lower] = value.text;
                if (Array.isArray(value.lines) && value.lines.length) target[key][`${lower}_lines`] = value.lines;
                if (Array.isArray(value.optionCits) && value.optionCits.length) target[key][`optionCits_${lower}`] = value.optionCits;
                if (Array.isArray(value.optionLabels) && value.optionLabels.length) target[key][`optionLabels_${lower}`] = value.optionLabels;
                if (Array.isArray(value.optionKinds) && value.optionKinds.length) target[key][`optionKinds_${lower}`] = value.optionKinds;
                Object.keys(value).forEach(field => {
                    if (/^cit_/i.test(field) && value[field]) target[key][field] = value[field];
                });
            } else {
                target[key][lower] = value;
            }
        });
        if (allowExternalLiturgy && !options.suppressTitle && parsed.title && !suppressNonLeftProper && !shouldSuppressMismatchedLocalProperLanguage(lang)) {
            state.liturgyInfo.names[lang] = cleanLiturgyTitle(parsed.title);
            state.liturgyInfo.krName = state.liturgyInfo.names.KR;
            state.liturgyInfo.vnName = state.liturgyInfo.names.VN;
            if (isSolemnityTitle(parsed.title) || isSolemnityNameMap(state.liturgyInfo.names)) {
                state.liturgyInfo.isSolemnity = true;
                state.isSunday = state.isSunday || state.liturgyInfo.isSolemnity;
            }
        }
        if (allowExternalLiturgy && !options.suppressTitle && parsed.color && !suppressNonLeftProper && !shouldSuppressMismatchedLocalProperLanguage(lang)) state.liturgyInfo.color = parsed.color;
    }

    function parseKoreanDailyMass(html) {
        const doc = parseHtml(html);
        const lines = textLinesFromDoc(doc);
        const bodyLines = contentLinesFromSource(lines);
        const firstContentIndex = lines.findIndex(line => /^입당송/.test(line));
        const titleStart = lines.findIndex(line => /^\[[^\]]+\]/.test(line));
        const title = sourceTitleFromLines(lines) || (titleStart >= 0 && firstContentIndex > titleStart
            ? lines.slice(titleStart, firstContentIndex).join(' ')
            : (doc.querySelector('h2, h3, .title') || {}).textContent || '');
        const data = parseKoreanDailySections(lines);
        if (!Object.keys(data).length && bodyLines.length) {
            const end = bodyLines.findIndex(line => /^주님의 말씀입니다/.test(line));
            data.reading1 = joinAsParagraph(end >= 0 ? bodyLines.slice(0, end) : bodyLines);
        }
        return { title: cleanLiturgyTitle(title), color: colorFromSourceTitle(title, colorFromSourceLines(lines, state.liturgyInfo.color)), data };
    }

    function isEnglishLiturgyTitleNoise(line) {
        const text = cleanMarkdownLine(line);
        if (!text) return true;
        if (/^(Daily Readings|Lectionary:|Reading\s*(1|2|I|II)|Responsorial Psalm|Alleluia|Verse Before the Gospel|Gospel|LISTEN|VIEW|Get Daily Readings|Menu|Skip to|About USCCB|Dive into|Copyright|©)/i.test(text)) return true;
        if (/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday),?\s+(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}$/i.test(text)) return true;
        if (/^(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}$/i.test(text)) return true;
        if (/^Daily Readings for/i.test(text)) return true;
        return false;
    }

    function findEnglishLiturgyTitle(lines) {
        const candidates = (lines || []).map(cleanMarkdownLine).filter(line => !isEnglishLiturgyTitleNoise(line));
        return candidates.find(line => /^(Solemnity|Feast|Memorial|Optional Memorial|The Nativity|Ash Wednesday|Palm Sunday|Holy Thursday|Good Friday|Easter Sunday|Christmas|.+Sunday|(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)\s+of\s+the\s+.+Week|.+Ordinary Time)/i.test(line)) || '';
    }

    function parseEnglishDailyMass(html, date) {
        const doc = parseHtml(html);
        const rawLines = textFromDoc(doc).split(/\r?\n/).map(cleanNodeText).filter(Boolean);
        const mmddyy = date ? formatDateMmddyy(date) : '';
        const dayStart = mmddyy ? rawLines.findIndex(line => line.includes(mmddyy) && /^#+\s*\[/.test(line)) : -1;
        let scopedRaw = rawLines;
        if (dayStart >= 0) {
            let dayEnd = rawLines.length;
            for (let i = dayStart + 1; i < rawLines.length; i++) {
                if (/^###\s+\[/.test(rawLines[i])) { dayEnd = i; break; }
            }
            scopedRaw = rawLines.slice(dayStart, dayEnd);
        }
        const lines = scopedRaw.map(cleanMarkdownLine).filter(Boolean);
        const titleCandidates = Array.from(doc.querySelectorAll('h1, h2, h3'))
            .map(node => cleanNodeText(node.textContent))
            .filter(title => title && !/^Daily Readings$/i.test(title));
        const sourceTitle = cleanLiturgyTitle(sourceTitleFromLines(rawLines));
        const pageTitle = sourceTitle && !/^USCCB Daily Readings$/i.test(sourceTitle) ? sourceTitle : '';
        const title = pageTitle || findEnglishLiturgyTitle(lines) || titleCandidates[0] || '';
        const data = parseEnglishDailySections(lines);
        if (!Object.keys(data).length) {
            const bodyLines = contentLinesFromSource(lines).filter(line => !/^(Wednesday|Tuesday|Monday|Thursday|Friday|Saturday|Sunday|Daily Readings)/i.test(line));
            if (bodyLines.length) data.reading1 = joinAsParagraph(bodyLines);
        }
        return { title, data };
    }

    function parseJapaneseDailyMass(html) {
        const doc = parseHtml(html);
        const lines = textLinesFromDoc(doc);
        const firstReadingIndex = lines.findIndex(line => /^第一朗読/.test(line));
        const title = lines.slice(0, firstReadingIndex > 0 ? firstReadingIndex : 20)
            .find(line => /(年間|待降節|四旬節|復活節|降誕節|主日|祝日|祭日)/.test(line)) || '';
        const data = parseJapaneseDailySections(lines);
        if (!Object.keys(data).length) {
            const bodyLines = contentLinesFromSource(lines);
            const start = bodyLines.findIndex(line => /^第一朗読/.test(line));
            if (start >= 0) data.reading1 = joinAsParagraph(bodyLines.slice(start + 1));
        }
        return { title, data };
    }

    function normalizeSearchText(value) {
        return String(value || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D')
            .replace(/[^a-zA-Z0-9IVX]+/g, ' ')
            .trim()
            .toLowerCase();
    }

    function slugifyVietnamese(value) {
        return normalizeSearchText(value).replace(/\s+/g, '-');
    }

    // The Hanoi source sometimes spells imported saint names phonetically in
    // its permalink (for example Bô-na-ven-tu-ra) while the calendar title
    // uses the joined form (Bonaventura).  Keep these as reusable name aliases,
    // not date exceptions, and try both forms whenever a proper is resolved.
    const vietnameseProperSlugAliases = Object.freeze({
        benedicto: 'be-ne-dic-to',
        bonaventura: 'bo-na-ven-tu-ra'
    });

    function vietnameseSlugVariants(value) {
        const baseSlug = slugifyVietnamese(value);
        if (!baseSlug) return [];
        const aliasedSlug = Object.entries(vietnameseProperSlugAliases).reduce((slug, [joined, phonetic]) => (
            slug.replace(new RegExp(`(^|-)${joined}(?=-|$)`, 'g'), `$1${phonetic}`)
        ), baseSlug);
        // Prefer the source's phonetic permalink when one of the aliases was
        // applied, then retain the normalized title as a fallback.
        return [aliasedSlug, baseSlug]
            .filter((slug, index, list) => slug && list.indexOf(slug) === index);
    }

    const vietnameseMonthSlugs = [
        'thang-gieng', 'thang-hai', 'thang-ba', 'thang-tu', 'thang-nam', 'thang-sau',
        'thang-bay', 'thang-tam', 'thang-chin', 'thang-muoi', 'thang-muoi-mot', 'thang-muoi-hai'
    ];
    const vietnameseMonthNames = [
        'Tháng Giêng', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu',
        'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai'
    ];

    function absoluteUrl(href, baseUrl) {
        try {
            return new URL(href, baseUrl).href;
        } catch (error) {
            return href || '';
        }
    }

    function extractSourceLinks(source, baseUrl) {
        const links = [];
        try {
            const doc = parseHtml(source);
            Array.from(doc.querySelectorAll('a[href]')).forEach(a => {
                links.push({ text: cleanNodeText(a.textContent), href: absoluteUrl(a.getAttribute('href'), baseUrl) });
            });
        } catch (error) {
            // Markdown fallback below covers Jina Reader responses.
        }
        const markdownLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]+)(?:\s+["'][^)]*["'])?\)/g;
        let match;
        while ((match = markdownLinkRegex.exec(source || '')) !== null) {
            links.push({ text: cleanNodeText(match[1]), href: absoluteUrl(match[2], baseUrl) });
        }
        return links.filter((link, index, list) =>
            link.href && list.findIndex(item => item.href === link.href && item.text === link.text) === index
        );
    }

    function vietnameseDatedSlug(date, title) {
        return `ngay-${date.getDate()}-${date.getMonth() + 1}-${slugifyVietnamese(title)}`.replace(/-+/g, '-');
    }

    function vietnameseLookupCandidates(date) {
        const expected = vietnameseLookupTitle(date);
        const info = buildGeneratedLiturgyInfo(date);
        const meta = info.meta || getSeasonMeta(date);
        const lookupNames = lookupLiturgyNamesForDate(date, info);
        const candidates = [];
        if (expected && meta.sundayCycle && !new RegExp(`Năm\\s+${meta.sundayCycle}\\b`, 'i').test(expected)) {
            candidates.push(`${expected} Năm ${meta.sundayCycle}`);
            candidates.push(`${expected} - Năm ${meta.sundayCycle}`);
        }
        candidates.push(expected);
        if (hasPriorityCelebrationForLookup(date, info)) {
            candidates.push(vietnameseDatedSlug(date, expected));
            candidates.push(`ngay ${date.getDate()} ${date.getMonth() + 1} ${expected}`);
            Object.entries(lookupNames || {}).forEach(([lang, title]) => {
                if (title && !isGeneratedSeasonalNameForInfo(lang, title, info)) candidates.push(title);
            });
        }
        return candidates.filter((candidate, index, list) => candidate && list.indexOf(candidate) === index);
    }

    function lookupLiturgyNamesForDate(date, info) {
        const override = localCalendarOverrideForDate(date);
        return Object.assign({}, (info && info.names) || {}, (override && override.names) || {});
    }

    function hasNonSeasonalLiturgyNameForLookup(info, date = null) {
        const names = date ? lookupLiturgyNamesForDate(date, info) : ((info && info.names) || {});
        return Object.entries(names).some(([lang, title]) =>
            title && !isGeneratedSeasonalNameForInfo(lang, title, info)
        );
    }

    function hasPriorityCelebrationForLookup(date, info = null) {
        const lookupInfo = info || buildGeneratedLiturgyInfo(date);
        const meta = lookupInfo.meta || {};
        return !!(meta.special || lookupInfo.localCalendar || hasNonSeasonalLiturgyNameForLookup(lookupInfo, date));
    }

    function vietnameseLookupTitle(date) {
        const info = buildGeneratedLiturgyInfo(date);
        const meta = info.meta || getSeasonMeta(date);
        const lookupNames = lookupLiturgyNamesForDate(date, info);
        const priorityName = lookupNames && lookupNames.VN;
        if (hasPriorityCelebrationForLookup(date, info) && priorityName && !isGeneratedSeasonalName('VN', priorityName)) {
            return priorityName;
        }
        if (meta.season === 'ordinary') {
            const roman = toRoman(meta.week);
            return meta.day === 0
                ? `Chúa Nhật ${roman} Thường Niên - Năm ${meta.sundayCycle}`
                : `${weekdayNames.VN[meta.day]} tuần ${roman} Thường niên`;
        }
        return info.names.VN || '';
    }

    function vietnameseSeasonalLookupTitle(date) {
        const meta = getSeasonMeta(date);
        if (meta.season === 'ordinary') {
            const roman = toRoman(meta.week);
            return meta.day === 0
                ? `Chúa Nhật ${roman} Thường Niên - Năm ${meta.sundayCycle}`
                : `${weekdayNames.VN[meta.day]} tuần ${roman} Thường niên`;
        }
        return formatSeasonalName('VN', meta.season, meta.week, meta.day, meta.sundayCycle) || '';
    }

    function vietnameseCalendarMonthFallbackUrl(date) {
        const slug = vietnameseMonthSlugs[date.getMonth()];
        return `https://www.tonggiaophanhanoi.org/${slug}-${date.getFullYear()}/`;
    }

    async function resolveVietnameseCalendarMonthUrl(date) {
        const fallbackUrl = vietnameseCalendarMonthFallbackUrl(date);
        try {
            const indexHtml = await fetchTextWithFallbacks(sourceUrls.VN_CALENDAR_INDEX());
            const links = extractSourceLinks(indexHtml, sourceUrls.VN_CALENDAR_INDEX());
            const monthKey = normalizeSearchText(vietnameseMonthNames[date.getMonth()]);
            const yearKey = String(date.getFullYear());
            const fallbackKey = normalizeSearchText(fallbackUrl);
            const matched = links.find(link => {
                const textKey = normalizeSearchText(link.text);
                const hrefKey = normalizeSearchText(link.href);
                return (textKey.includes(monthKey) && hrefKey.includes(yearKey)) || hrefKey.includes(fallbackKey);
            });
            if (matched) return matched.href;
        } catch (error) {
            console.warn('베트남어 전례력 월 링크 파싱 실패, 기본 월 URL로 재시도합니다.', error);
        }
        return fallbackUrl;
    }

    function isVietnameseCalendarDayHeader(line, date = null) {
        const text = cleanNodeText(line).replace(/\u00a0/g, ' ');
        const match = text.match(/^(?:[*\-]\s*)?(\d{1,2})(?:\s|\()/);
        if (!match) return false;
        if (!/\(\d{1,2}\/\d{1,2}\)|Thứ|CHÚA NHẬT/i.test(text)) return false;
        return date ? Number(match[1]) === date.getDate() : true;
    }

    function extractVietnameseCalendarDayBlock(source, date) {
        const lines = contentLinesFromSource((source || '').split(/\r?\n/).map(cleanMarkdownLine).filter(Boolean));
        const start = lines.findIndex(line => isVietnameseCalendarDayHeader(line, date));
        if (start < 0) return [];
        let end = lines.length;
        for (let i = start + 1; i < lines.length; i++) {
            if (isVietnameseCalendarDayHeader(lines[i])) { end = i; break; }
        }
        return lines.slice(start, end);
    }

    const vietnameseCalendarReadingHints = {};
    const vietnameseCalendarContextPromises = {};

    function vietnameseCalendarDayHeaderTitle(line, date) {
        const rawTitle = cleanLiturgyTitle(cleanNodeText(line)
            .replace(/^(?:[*\-]\s*)?\d{1,2}(?:\s*\(\d{1,2}\s*\/\s*\d{1,2}\))?\s*/u, ' '));
        const normalized = normalizeSearchText(rawTitle);
        const isSeasonalHeader = /^(?:chua nhat|thu hai|thu ba|thu tu|thu nam|thu sau|thu bay)\b/.test(normalized)
            && /\b(?:thuong nien|mua vong|mua chay|phuc sinh|giang sinh)\b/.test(normalized);
        return isSeasonalHeader && date ? (vietnameseSeasonalLookupTitle(date) || rawTitle) : rawTitle;
    }

    function isVietnameseCalendarTitleMetadata(line) {
        const normalized = normalizeSearchText(String(line || '').replace(/^[*\-–—•]\s*/u, ' '));
        return /^(?:ca vinh(?:\s+tuan)?|khong cu hanh|mau phung vu|bai doc|cac giao xu|cac giao ho|cung nhau hoc|y le|y cau nguyen|luu y|h\.|t\.|\d+\s*\/)/.test(normalized);
    }

    function parseVietnameseCalendarDayContext(dayBlock, date) {
        const lines = (dayBlock || []).map(cleanMarkdownLine).map(cleanNodeText).filter(Boolean);
        if (!lines.length) return null;
        const rankIndex = lines.findIndex(line => /Bậc\s*lễ\s*:/iu.test(line));
        const colorIndex = lines.findIndex(line => /Màu\s*phụng\s*vụ\s*:/iu.test(line));
        const rankLine = rankIndex >= 0 ? lines[rankIndex] : '';
        const colorLine = colorIndex >= 0 ? lines[colorIndex] : '';
        const rankLabel = cleanNodeText((rankLine.match(/Bậc\s*lễ\s*:\s*(.+)$/iu) || [])[1] || '');
        const normalizedRank = normalizeSearchText(rankLabel);
        const priority = !!rankLabel && !/\bthuong\b/.test(normalizedRank);
        const rankKey = /\bchua nhat\b/.test(normalizedRank)
            ? 'sunday'
            : (/\btrong\b/.test(normalizedRank)
                ? 'solemnity'
                : (/\bkinh\b/.test(normalizedRank)
                    ? 'feast'
                    : (/\bnho\b/.test(normalizedRank) ? 'memorial' : 'feria')));
        const normalizedColor = normalizeSearchText(
            (colorLine.match(/Màu\s*phụng\s*vụ\s*:\s*(.+)$/iu) || [])[1] || ''
        );
        const colorKey = /\btrang\b/.test(normalizedColor)
            ? 'white'
            : (/\bdo\b/.test(normalizedColor)
                ? 'red'
                : (/\btim\b/.test(normalizedColor)
                    ? 'purple'
                    : (/\bhong\b/.test(normalizedColor)
                        ? 'rose'
                        : (/\bden\b/.test(normalizedColor) ? 'black' : 'green'))));
        const titleStart = rankIndex >= 0 ? rankIndex + 1 : 1;
        const titleEnd = colorIndex > titleStart ? colorIndex : lines.length;
        const properTitle = rankKey === 'sunday' ? '' : lines.slice(titleStart, titleEnd)
            .map(line => line.replace(/^[*•\-–—]\s*/u, '').trim())
            .filter(line => line
                && !isVietnameseCalendarTitleMetadata(line)
                && !/^(?:Lễ\s*(?:nhớ|kính|trọng)|Bài\s*[ĐÐ]ọc|Màu\s*phụng\s*vụ|Ý\s*(?:lễ|cầu nguyện)|Lưu ý)\b/iu.test(line)
                && !/^_?Lễ\b.*\bbài đọc riêng\b/iu.test(line))
            .map(cleanLiturgyTitle)
            .find(Boolean) || '';
        const title = properTitle || vietnameseCalendarDayHeaderTitle(lines[0], date);
        return {
            confirmed: !!(rankLabel || colorLine || title),
            priority,
            rank: rankLabel,
            rankKey,
            title,
            color: liturgyColorMap[colorKey] || liturgyColorMap.green,
            date: date ? formatDateIso(date) : '',
            source: 'Tổng Giáo phận Hà Nội'
        };
    }

    function normalizeVietnameseCalendarCitation(value) {
        return String(value || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/Đ/g, 'D')
            .replace(/đ/g, 'd')
            .replace(/\*\*/g, '')
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
            .replace(/\([^)]*\)/g, '')
            .replace(/Bai\s*doc\s*:/ig, '')
            .replace(/Nam\s+[IVX]+\s*:/ig, '')
            .replace(/\bHoac\b.*$/ig, '')
            .replace(/[\\\s.;:,\-–—/]+/g, '')
            .toLowerCase();
    }

    function parseVietnameseCalendarReadingHints(readingText, links) {
        const linkText = (links || []).map(link => cleanNodeText(link && link.text)).filter(Boolean).join('; ');
        const sourceText = String(readingText || '')
            .replace(/Bài\s*[ĐÐ]ọc\s*:/i, '')
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
        const hints = sourceText
            .split(/[;\n]/)
            .map(part => cleanCitation(part))
            .map(part => part.replace(/\([^)]*\)/g, '').trim())
            .filter(part => /\d/.test(part))
            .map(part => ({
                display: part,
                key: normalizeVietnameseCalendarCitation(part),
                isGospel: /^(?:Mt|Mc|Lc|Ga|Gioan|Matth?eu|Marco|Luca)/i.test(part.trim())
            }))
            .filter(item => item.key);
        const fallbackHints = hints.length ? [] : linkText
            .split(/[;\n]/)
            .map(part => cleanCitation(part))
            .filter(part => /\d/.test(part))
            .map(part => ({
                display: part,
                key: normalizeVietnameseCalendarCitation(part),
                isGospel: /^(?:Mt|Mc|Lc|Ga|Gioan|Matth?eu|Marco|Luca)/i.test(part.trim())
            }))
            .filter(item => item.key);
        return hints.concat(fallbackHints).filter((item, index, list) => list.findIndex(candidate => candidate.key === item.key) === index);
    }

    function vietnameseCalendarReadingText(dayBlock, readingIndex) {
        const firstLine = dayBlock[readingIndex] || '';
        if (!/\[[^\]]+\]\([^)]*$/i.test(firstLine)) return firstLine;
        const lines = [];
        for (let i = readingIndex; i < dayBlock.length; i++) {
            const line = dayBlock[i];
            if (i > readingIndex && /^(?:Ý lễ|Ý cầu nguyện|Lưu ý|Thánh lễ|Ca nhập lễ|Lời nguyện|Bài đọc|Đáp ca|Tin Mừng|Phúc Âm)\b/i.test(line)) break;
            lines.push(line);
            if (/\[[^\]]+\]\([^)]+\)/.test(line) || /https?:\/\/\S+/i.test(line)) break;
        }
        return lines.join('\n');
    }

    function vietnameseCalendarLinkMatchesHints(link, hints) {
        if (!link || !Array.isArray(hints) || !hints.length) return false;
        const textKey = normalizeVietnameseCalendarCitation(link.text);
        const hrefKey = normalizeVietnameseCalendarCitation(decodeURIComponent(link.href || ''));
        return hints.some(hint => hint && hint.key && (textKey.includes(hint.key) || hrefKey.includes(hint.key)));
    }

    function parseVietnameseCitationStart(value) {
        const text = String(value || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/Đ/g, 'D')
            .replace(/đ/g, 'd')
            .replace(/\[[^\]]+\]\([^)]+\)/g, match => match.replace(/^\[|\]\([^)]+\)$/g, ''))
            .replace(/\([^)]*\)/g, ' ')
            .replace(/Bai\s*doc\s*:/ig, ' ')
            .replace(/Nam\s+[IVX]+\s*:/ig, ' ')
            .trim()
            .toLowerCase();
        const match = text.match(/^([1-3]?\s*[a-z]+)\s*(\d+)\s*[,.:]\s*(\d+)/i);
        if (!match) return null;
        return {
            book: match[1].replace(/\s+/g, ''),
            chapter: match[2],
            verse: match[3]
        };
    }

    function vietnameseCitationMatchesHint(citation, hint) {
        const citationKey = normalizeVietnameseCalendarCitation(citation);
        if (!hint || !hint.key) return true;
        if (citationKey && citationKey.includes(hint.key)) return true;
        const citationStart = parseVietnameseCitationStart(citation);
        const hintStart = parseVietnameseCitationStart(hint.display || hint.key);
        return !!(citationStart && hintStart
            && citationStart.book === hintStart.book
            && citationStart.chapter === hintStart.chapter
            && citationStart.verse === hintStart.verse);
    }

    function extractVietnameseCalendarReadingUrl(source, date, baseUrl) {
        const dayBlock = extractVietnameseCalendarDayBlock(source, date);
        if (!dayBlock.length) return '';
        const dateKey = formatDateIso(date);
        const context = parseVietnameseCalendarDayContext(dayBlock, date);
        const readingIndex = dayBlock.findIndex(line => /Bài\s*[ĐÐ]ọc/i.test(line));
        if (readingIndex < 0) {
            vietnameseCalendarReadingHints[dateKey] = {
                raw: '',
                readings: [],
                context: context ? Object.assign({}, context, { sourceUrl: baseUrl || '' }) : null
            };
            return '';
        }
        const readingText = vietnameseCalendarReadingText(dayBlock, readingIndex);
        const links = extractSourceLinks(readingText, baseUrl);
        const readings = parseVietnameseCalendarReadingHints(readingText, links);
        vietnameseCalendarReadingHints[dateKey] = {
            raw: readingText,
            readings,
            context: context ? Object.assign({}, context, { sourceUrl: baseUrl || '' }) : null
        };
        const matched = links.find(link => vietnameseCalendarLinkMatchesHints(link, readings));
        return matched ? matched.href : (links[0] ? links[0].href : '');
    }

    async function resolveVietnameseCalendarReadingUrl(date) {
        const monthUrl = await resolveVietnameseCalendarMonthUrl(date);
        const monthHtml = await fetchTextWithFallbacks(monthUrl);
        return extractVietnameseCalendarReadingUrl(monthHtml, date, monthUrl);
    }

    async function ensureVietnameseCalendarContext(date) {
        const dateKey = formatDateIso(date);
        const cached = vietnameseCalendarReadingHints[dateKey];
        if (cached && cached.context && cached.context.confirmed) return cached.context;
        if (!vietnameseCalendarContextPromises[dateKey]) {
            vietnameseCalendarContextPromises[dateKey] = resolveVietnameseCalendarReadingUrl(date)
                .then(() => {
                    const resolved = vietnameseCalendarReadingHints[dateKey];
                    return resolved && resolved.context && resolved.context.confirmed ? resolved.context : null;
                })
                .catch(error => {
                    delete vietnameseCalendarContextPromises[dateKey];
                    throw error;
                });
        }
        return vietnameseCalendarContextPromises[dateKey];
    }

    function vietnameseProperLinkMatchesDate(link, date) {
        if (!link || !date) return false;
        const key = normalizeSearchText(`${link.text || ''} ${decodeURIComponent(link.href || '')}`);
        return new RegExp(`\\bngay\\s+0?${date.getDate()}\\s+0?${date.getMonth() + 1}\\b`, 'i').test(key);
    }

    async function resolveVietnameseIndexUrl(date, expectedCandidates, preferProperDate = false) {
        const indexHtml = await fetchTextWithFallbacks(sourceUrls.VN_INDEX());
        const links = extractSourceLinks(indexHtml, sourceUrls.VN_INDEX());
        if (preferProperDate) {
            const dateMatched = links.find(link => vietnameseProperLinkMatchesDate(link, date));
            if (dateMatched) return dateMatched.href;
        }
        const normalizedCandidates = (expectedCandidates || []).map(normalizeSearchText).filter(Boolean);
        const matched = links.find(link => {
            const textKey = normalizeSearchText(link.text);
            const hrefKey = normalizeSearchText(link.href);
            return normalizedCandidates.some(expectedKey => textKey.includes(expectedKey) || hrefKey.includes(expectedKey));
        });
        return matched ? matched.href : '';
    }

    function vietnameseFixedDailyUrls(date) {
        if (isImmaculateHeartMemorialDate(date)) {
            return ['https://www.tonggiaophanhanoi.org/le-trai-tim-vo-nhiem-duc-me-maria-thu-bay-sau-chua-nhat-ii-sau-le-hien-xuong/'];
        }
        if (date.getMonth() === 5 && date.getDate() === 24) {
            return ['https://www.tonggiaophanhanoi.org/ngay-24-6-sinh-nhat-thanh-gioan-baotixita/'];
        }
        if (date.getMonth() === 5 && date.getDate() === 26) {
            return ['https://www.tonggiaophanhanoi.org/thu-sau-tuan-xii-thuong-nien/'];
        }
        if (date.getMonth() === 5 && date.getDate() === 29) {
            return ['https://www.tonggiaophanhanoi.org/ngay-29-6-thanh-phero-va-phaolo-tong-do/'];
        }
        if (date.getMonth() === 6 && date.getDate() === 3) {
            return ['https://www.tonggiaophanhanoi.org/ngay-03-7-thanh-toma-tong-do/'];
        }
        return [];
    }

    function vietnameseFixedDailyTitle(date) {
        if (isImmaculateHeartMemorialDate(date)) return immaculateHeartNames.VN;
        if (date.getMonth() === 5 && date.getDate() === 24) return 'Lễ Sinh Nhật Thánh Gioan Tẩy Giả';
        if (date.getMonth() === 5 && date.getDate() === 29) return 'Lễ Thánh Phêrô và Thánh Phaolô, Tông Đồ';
        if (date.getMonth() === 6 && date.getDate() === 3) return 'Lễ Thánh Tô-ma, Tông Đồ';
        if (date.getMonth() === 10 && date.getDate() === 24) return 'Thánh Anrê Dũng Lạc và các bạn tử đạo';
        return '';
    }

    function strictFixedDailyTitle(lang, date) {
        if (isImmaculateHeartMemorialDate(date)) {
            const currentLang = normalizeSelectableLang(state.currentLoc || '', '');
            if (lang === 'EN' && currentLang === 'EN' && hasImmaculateHeartFixedMemorialConflict(date)) return '';
            if (lang === 'VN') return vietnameseFixedDailyTitle(date);
            return immaculateHeartNames[lang] || '';
        }
        if (lang === 'VN') return vietnameseFixedDailyTitle(date);
        return '';
    }

    async function resolveVietnameseDailyUrls(date, options = {}) {
        const fixedUrls = vietnameseFixedDailyUrls(date);
        const info = buildGeneratedLiturgyInfo(date);
        const meta = info.meta || getSeasonMeta(date);
        const preferProperDate = hasPriorityCelebrationForLookup(date, info);
        const expectedCandidates = vietnameseLookupCandidates(date);
        const properTitle = vietnameseLookupTitle(date);
        const seasonalTitle = vietnameseSeasonalLookupTitle(date);
        const urlsForTitle = title => {
            const slugs = vietnameseSlugVariants(title);
            if (!slugs.length) return [];
            const cycle = String(meta.sundayCycle || '').toLowerCase();
            const cyclePattern = cycle ? new RegExp(`(?:^|-)nam-${cycle}(?:-|$)`) : null;
            const urls = [];
            slugs.forEach(slug => {
                if (meta.day === 0 && cycle && cyclePattern.test(slug)) {
                    urls.push(`https://www.tonggiaophanhanoi.org/${slug.replace(new RegExp(`-nam-${cycle}(?=-|$)`), `-${cycle}`)}/`);
                }
                urls.push(`https://www.tonggiaophanhanoi.org/${slug}/`);
                if (meta.day === 0 && cycle && !cyclePattern.test(slug)) urls.push(`https://www.tonggiaophanhanoi.org/${slug}-${cycle}/`);
            });
            return urls;
        };
        const properTitleUrls = urlsForTitle(properTitle);
        const seasonalTitleUrls = properTitle === seasonalTitle ? [] : urlsForTitle(seasonalTitle);
        const datedSlugs = properTitle
            ? vietnameseSlugVariants(properTitle).map(slug => (
                `ngay-${date.getDate()}-${date.getMonth() + 1}-${slug}`.replace(/-+/g, '-')
            ))
            : [];
        const datedUrls = datedSlugs.flatMap(datedSlug => [
            `https://www.tonggiaophanhanoi.org/${datedSlug}/`,
            `https://www.tonggiaophanhanoi.org/${datedSlug}-2/`,
            `https://www.tonggiaophanhanoi.org/${datedSlug}-1/`
        ]);
        // A memorial or feast page often contains only its proper prayers and
        // antiphons, while the seasonal weekday page contains the readings.
        // Exhaust every proper candidate first so the two independent sources
        // can be combined without a date-specific exception.
        const orderedDirectUrls = preferProperDate
            ? fixedUrls.concat(properTitleUrls, datedUrls, seasonalTitleUrls)
            : fixedUrls.concat(properTitleUrls, seasonalTitleUrls, datedUrls);
        const slugUrls = orderedDirectUrls
            .filter((url, index, list) => url && list.indexOf(url) === index);
        if (options.directOnly) return slugUrls;

        const discoveredUrls = [];
        if (preferProperDate) {
            try {
                const matchedIndexUrl = await resolveVietnameseIndexUrl(date, expectedCandidates, true);
                if (matchedIndexUrl) discoveredUrls.push(matchedIndexUrl);
            } catch (error) {
                console.warn('베트남어 고유미사 목록 파싱 실패, 전례력 기반 링크로 재시도합니다.', error);
            }
        }

        try {
            const calendarReadingUrl = await resolveVietnameseCalendarReadingUrl(date);
            if (calendarReadingUrl) discoveredUrls.push(calendarReadingUrl);
        } catch (error) {
            console.warn('베트남어 전례력 기반 미사독서 링크 파싱 실패, 미사독서 목록으로 재시도합니다.', error);
        }

        try {
            const matchedIndexUrl = await resolveVietnameseIndexUrl(date, expectedCandidates, preferProperDate);
            if (matchedIndexUrl) discoveredUrls.push(matchedIndexUrl);
        } catch (error) {
            console.warn('베트남어 미사 목록 파싱 실패, slug URL로 재시도합니다.', error);
        }
        return discoveredUrls.concat(slugUrls).filter((url, index, list) => url && list.indexOf(url) === index);
    }

    function selectVietnameseCycle(lines, date) {
        const cycle = getWeekdayCycle(date);
        const firstN1 = lines.findIndex(line => /^Bài [ĐÐ]ọc I.*Năm I/i.test(line));
        const firstN2 = lines.findIndex(line => /^Bài [ĐÐ]ọc I.*Năm II/i.test(line));
        if (firstN1 < 0 || firstN2 < 0) return lines;
        const before = lines.slice(0, firstN1);
        const commonStart = lines.findIndex((line, index) => index > firstN2 && (/^Alleluia/i.test(line) || /^Phúc Âm/i.test(line) || /^Tin Mừng/i.test(line)));
        if (cycle === 'I') {
            return before.concat(lines.slice(firstN1, firstN2), commonStart > 0 ? lines.slice(commonStart) : []);
        }
        return before.concat(lines.slice(firstN2));
    }

    function strictVietnameseCalendarHintForDate(date, kind = 'reading') {
        const hints = vietnameseCalendarReadingHints[formatDateIso(date)];
        const readings = hints && Array.isArray(hints.readings) ? hints.readings : [];
        return readings.find(item => kind === 'gospel' ? item.isGospel : !item.isGospel) || null;
    }

    function strictVietnameseReading1Start(line) {
        return /^Bài\s*(?:đọc|Ðọc|Đọc)\s*I(?:\s|$|[:：])/iu.test(strictCleanLine(line));
    }

    function strictVietnameseCommonAfterReading1(line) {
        return /^(Alleluia|Tung hô Tin Mừng|Phúc Âm|Tin Mừng)(?:\s|$|[:：])/iu.test(strictCleanLine(line));
    }

    function strictVietnameseBlockMatchesHint(lines, start, end, hint) {
        if (!hint || !hint.key) return false;
        return lines.slice(start, Math.min(end, start + 10)).some(line =>
            normalizeVietnameseCalendarCitation(line).includes(hint.key)
        );
    }

    function strictVietnameseBlockMatchesCycle(lines, start, end, cycle) {
        const cyclePattern = new RegExp(`N[aă]m\\s*${cycle}`, 'i');
        return lines.slice(start, Math.min(end, start + 4)).some(line => cyclePattern.test(line.normalize('NFD').replace(/[\u0300-\u036f]/g, '')));
    }

    function strictVietnameseParsedMatchesCalendarHints(parsed, date) {
        const hints = vietnameseCalendarReadingHints[formatDateIso(date)];
        const readings = hints && Array.isArray(hints.readings) ? hints.readings : [];
        if (!readings.length || !parsed || !parsed.data) return true;
        const checks = [
            { key: 'reading1', hint: readings.find(item => !item.isGospel) },
            { key: 'gospel', hint: readings.find(item => item.isGospel) }
        ];
        return checks.every(check => {
            if (!check.hint || !check.hint.key) return true;
            const section = parsed.data[check.key];
            const citation = section && section[`cit_vn`] ? section[`cit_vn`] : '';
            return citation && vietnameseCitationMatchesHint(citation, check.hint);
        });
    }

    function strictScopeVietnameseByCalendarReading(lines, date) {
        const starts = [];
        (lines || []).forEach((line, index) => {
            if (strictVietnameseReading1Start(line)) starts.push(index);
        });
        if (starts.length < 2) return lines || [];
        const hint = strictVietnameseCalendarHintForDate(date, 'reading');
        const commonStart = (lines || []).findIndex((line, index) => index > starts[starts.length - 1] && strictVietnameseCommonAfterReading1(line));
        const ends = starts.map((start, index) => starts[index + 1] || (commonStart >= 0 ? commonStart : lines.length));
        let chosenIndex = hint ? starts.findIndex((start, index) => strictVietnameseBlockMatchesHint(lines, start, ends[index], hint)) : -1;
        if (chosenIndex < 0) {
            const cycle = getWeekdayCycle(date);
            chosenIndex = starts.findIndex((start, index) => strictVietnameseBlockMatchesCycle(lines, start, ends[index], cycle));
        }
        if (chosenIndex < 0) chosenIndex = getWeekdayCycle(date) === 'II' ? starts.length - 1 : 0;
        const before = lines.slice(0, starts[0]);
        const chosen = lines.slice(starts[chosenIndex], ends[chosenIndex]);
        const after = commonStart >= 0
            ? lines.slice(commonStart)
            : (chosenIndex === starts.length - 1 ? lines.slice(ends[chosenIndex]) : []);
        return before.concat(chosen, after);
    }

    function isJinaMarkdownSource(source) {
        return /^(Title:|URL Source:|Published Time:|Markdown Content:)/m.test(String(source || ''));
    }

    function sourceTextLines(source) {
        if (isJinaMarkdownSource(source)) {
            return String(source || '')
                .split(/\r?\n/)
                .map(cleanMarkdownLine)
                .filter(Boolean)
                .filter(line => !/^(MENU|Search|검색|LISTEN|VIEW|SUBSCRIBE|Get Daily Readings|Copyright|©|Facebook|Twitter|LINE|メール|前の日|次の日)/i.test(line));
        }
        return textLinesFromDoc(parseHtml(source));
    }

    function inspectVietnameseSourceStructure(source, date) {
        const lines = sourceTextLines(source);
        const body = selectVietnameseCycle(getVietnameseBodyLines(lines), date);
        const hasReading1 = firstIndex(body, [/^Bài [ĐÐ]ọc I/i]) >= 0;
        const hasPsalm = firstIndex(body, [/^[ĐÐ]áp Ca/i, /^[ĐÐ]áp ca/i]) >= 0;
        const hasGospel = firstIndex(body, [/^Phúc Âm/i, /^Tin Mừng\s*:/i]) >= 0;
        return { lines, body, hasReadingStructure: hasReading1 && hasGospel, hasReading1, hasPsalm, hasGospel };
    }

    function parseVietnameseDailyMass(html, date, sourceStructure = null) {
        const structure = sourceStructure || inspectVietnameseSourceStructure(html, date);
        const lines = structure.lines || [];
        const doc = isJinaMarkdownSource(html) ? null : parseHtml(html);
        const title = (doc && cleanNodeText((doc.querySelector('h1, h2, h3') || {}).textContent)) || lines.find(line => /Thường Niên|Mùa Vọng|Mùa Chay|Phục Sinh|Giáng Sinh/i.test(line)) || '';
        return { title: sourceTitleFromLines(lines) || title, color: colorFromSourceTitle(title, colorFromSourceLines(lines, state.liturgyInfo.color)), data: extractVietnameseDailySections(lines, date) };
    }

    async function fetchKoreanDailyMass(date) {
        return parseKoreanDailyMass(await fetchTextWithFallbacks(sourceUrls.KR(date)));
    }

    async function fetchEnglishDailyMass(date) {
        const directUrl = sourceUrls.EN(date);
        try {
            const parsed = parseEnglishDailyMass(await fetchTextWithFallbacks(directUrl), date);
            if (parsed && (parsed.title || Object.keys(parsed.data || {}).length)) return parsed;
        } catch (error) {
            console.warn('USCCB 날짜별 페이지를 읽지 못해 RSS로 재시도합니다.', error);
        }

        let url = directUrl;
        try {
            const rssText = await fetchTextWithFallbacks(sourceUrls.EN_RSS());
            const parsedFromRssText = parseEnglishDailyMass(rssText, date);
            if (parsedFromRssText && parsedFromRssText.title && Object.keys(parsedFromRssText.data || {}).length) return parsedFromRssText;
            const rss = new DOMParser().parseFromString(rssText, 'application/xml');
            const mmddyy = formatDateMmddyy(date);
            const item = Array.from(rss.querySelectorAll('item')).find(node => cleanNodeText((node.querySelector('link') || {}).textContent).includes(mmddyy));
            const rssUrl = item && cleanNodeText((item.querySelector('link') || {}).textContent);
            if (rssUrl) url = rssUrl;
        } catch (error) {
            console.warn('USCCB RSS를 읽지 못해 날짜 URL로 재시도합니다.', error);
        }
        return parseEnglishDailyMass(await fetchTextWithFallbacks(url), date);
    }

    async function fetchJapaneseDailyMass(date) {
        return parseJapaneseDailyMass(await fetchTextWithFallbacks(sourceUrls.JP(date)));
    }

    function isVietnameseMassTitleNoise(value) {
        const normalized = normalizeSearchText(value);
        if (!normalized) return false;
        return /^(gio le|lich le|thong bao|chuong trinh)(?:\b|$)/i.test(normalized);
    }

    function isKoreanMassTitleNoise(value) {
        const text = cleanNodeText(value);
        if (/^(?:\uC624\uB298(?:\uC740|\s*\uC804\uB840|\uC758\s*(?:\uC804\uB840|\uBBF8\uC0AC)))(?:\s|[:\uFF1A]|$)/u.test(text)) return true;
        return /^오늘의\s*전례(?:\s|[:：]|$)/u.test(text)
            || /^오늘의\s*미사\s*(?:안내|해설|묵상|말씀)(?:\s|[:：]|$)/u.test(text);
    }

    function isMassTitleNoise(value, lang) {
        if (lang === 'KR') return isKoreanMassTitleNoise(value);
        if (lang === 'VN') return isVietnameseMassTitleNoise(value);
        return false;
    }

    function japaneseReadingTitleFromLines(lines) {
        const line = (lines || [])
            .map(cleanNodeText)
            .find(text => /^今日の聖書朗読\s*[:：]/u.test(text));
        if (!line) return '';
        return cleanNodeText(line.replace(/^今日の聖書朗読\s*[:：]\s*/u, ''));
    }

    function hasVietnameseParsedMass(parsed) {
        const data = (parsed && parsed.data) || {};
        if (isMassTitleNoise(parsed && parsed.title, 'VN')) return false;
        return !!(sourceSectionHasContent(data.reading1) && sourceSectionHasContent(data.gospel));
    }

    const requiredVietnameseDailySectionKeys = [
        'entrance', 'collect', 'reading1', 'psalm', 'gospel_accl', 'gospel',
        'prayer_offerings', 'communion', 'prayer_after'
    ];

    const requiredVietnameseKtcgSectionKeys = ['entrance', 'reading1', 'psalm', 'gospel_accl', 'gospel', 'communion'];

    function activeRequiredVietnameseDailySectionKeys() {
        return normalizeVietnameseReadingSource(state.vnReadingSource) === 'ktcg'
            ? requiredVietnameseKtcgSectionKeys
            : requiredVietnameseDailySectionKeys;
    }

    function missingVietnameseDailySections(parsed) {
        const data = (parsed && parsed.data) || {};
        return activeRequiredVietnameseDailySectionKeys().filter(key => !sourceSectionHasContent(data[key]));
    }

    function hasCompleteVietnameseParsedMass(parsed) {
        return hasVietnameseParsedMass(parsed) && missingVietnameseDailySections(parsed).length === 0;
    }

    async function fetchVietnameseSourceForParsing(url, date) {
        const source = await fetchTextWithFallbacks(url);
        const structure = inspectVietnameseSourceStructure(source, date);
        if (!structure.hasReadingStructure) {
            throw new Error('베트남어 소스에서 Bài Đọc I/Phúc Âm 구조를 찾지 못했습니다.');
        }
        return { source, structure };
    }

    async function fetchVietnameseDailyMass(date) {
        const urls = await resolveVietnameseDailyUrls(date);
        let lastError = null;
        for (const url of urls) {
            try {
                const sourceInfo = await fetchVietnameseSourceForParsing(url, date);
                const parsed = parseVietnameseDailyMass(sourceInfo.source, date, sourceInfo.structure);
                if (!hasVietnameseParsedMass(parsed)) throw new Error('베트남어 미사 독서 본문을 찾지 못했습니다.');
                return parsed;
            } catch (error) {
                lastError = error;
                console.warn(`베트남어 전례문 후보 실패: ${url}`, error);
            }
        }
        throw lastError || new Error('베트남어 전례문 URL을 찾지 못했습니다.');
    }

    const strictDailySectionKeys = new Set([
        'entrance', 'collect', 'reading1', 'psalm', 'reading2', 'Sequence',
        'gospel_accl', 'gospel', 'prayer_offerings', 'preface', 'communion', 'prayer_after'
    ]);
    const strictReadingKeys = new Set(['reading1', 'reading2', 'gospel']);
    const strictPrayerKeys = new Set(['collect', 'prayer_offerings', 'prayer_after']);
    const strictSpecialVigilKeys = new Set(['easter_vigil', 'christmas_vigil']);
    const STRICT_PARSER_CACHE_VERSION = 'strict84';
    const ALL_SOULS_CONFIG_FILE = 'JS%20file/all-souls-config.js';

    function cloneDateOnly(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }

    function isChristmasEve(date) {
        return date.getMonth() === 11 && date.getDate() === 24;
    }

    function isHolySaturday(date) {
        return sameDay(date, addDays(computeEasterSunday(date.getFullYear()), -1));
    }

    function isAllSoulsDate(date) {
        return date.getMonth() === 10 && date.getDate() === 2;
    }

    function activeLiturgicalTimeZone() {
        if (state.useGps && state.gpsTimeZone) return state.gpsTimeZone;
        const selectedCode = state.selectedLocationCode || ((document.getElementById('set-loc') || {}).value || '');
        const selectedMeta = locationMeta[selectedCode];
        if (!state.useGps && selectedMeta && selectedMeta.timeZone) return selectedMeta.timeZone;
        return liturgicalTimeZoneForLang(state.currentLoc || 'KR');
    }

    function getStrictDateBase(now = new Date()) {
        const leftTimeZone = activeLiturgicalTimeZone();
        const parts = zonedDateParts(now, leftTimeZone);
        const localDate = dateFromZonedParts(parts);
        const hour = parts.hour || 0;
        return {
            localDay: cloneDateOnly(localDate),
            hour,
            timeZone: leftTimeZone
        };
    }

    function hasVigilNavigationEntry(localDay) {
        return localDay.getDay() === 6 || isHolySaturday(localDay) || isChristmasEve(localDay);
    }

    function liveNavigationSlotForBase(base) {
        const localDay = cloneDateOnly(base.localDay);
        if (isHolySaturday(localDay) && base.hour >= 19) return 'vigil';
        if (isChristmasEve(localDay) && base.hour >= 19) return 'vigil';
        if (localDay.getDay() === 6 && base.hour >= 16) return 'vigil';
        return 'day';
    }

    function navigationEntryToContext(base, entry) {
        const localDay = addDays(base.localDay, entry.offset || 0);
        let date = cloneDateOnly(localDay);
        let specialVigil = '';

        if (entry.slot === 'vigil' && isHolySaturday(localDay)) {
            specialVigil = 'easter_vigil';
        } else if (entry.slot === 'vigil' && isChristmasEve(localDay)) {
            specialVigil = 'christmas_vigil';
        } else if (entry.slot === 'vigil' && localDay.getDay() === 6) {
            date = addDays(localDay, 1);
        }

        return {
            date,
            localDate: localDay,
            hour: base.hour,
            timeZone: base.timeZone,
            slot: specialVigil ? 'vigil' : 'day',
            specialVigil,
            navOffset: entry.offset || 0,
            navSlot: entry.slot || 'day'
        };
    }

    function currentNavigationEntry(base) {
        const slot = state.liturgyNavSlot || liveNavigationSlotForBase(base);
        return {
            offset: Number(state.dayOffset || 0),
            slot
        };
    }

    function getStrictDateContext(now = new Date()) {
        const base = getStrictDateBase(now);
        return navigationEntryToContext(base, currentNavigationEntry(base));
    }

    function buildLiturgicalNavigationEntries(base) {
        const entries = [];
        for (let offset = -DATE_NAV_LIMIT_DAYS; offset <= DATE_NAV_LIMIT_DAYS; offset++) {
            const localDay = addDays(base.localDay, offset);
            entries.push({ offset, slot: 'day' });
            if (hasVigilNavigationEntry(localDay)) entries.push({ offset, slot: 'vigil' });
        }
        return entries;
    }

    function sameNavigationEntry(a, b) {
        return a && b && Number(a.offset || 0) === Number(b.offset || 0) && (a.slot || 'day') === (b.slot || 'day');
    }

    getTargetDate = function(now = new Date()) {
        return getStrictDateContext(now).date;
    };

    function changeLiturgicalDay(delta) {
        const base = getStrictDateBase(new Date());
        const entries = buildLiturgicalNavigationEntries(base);
        const current = currentNavigationEntry(base);
        const currentIndex = entries.findIndex(entry => sameNavigationEntry(entry, current));
        const nextEntry = entries[currentIndex + delta];
        if (!nextEntry) {
            alert(DATE_NAV_LIMIT_MESSAGE);
            return;
        }
        state.dayOffset = nextEntry.offset;
        state.liturgyNavSlot = nextEntry.slot;
        fetchMassData();
    }

    function rememberLiturgicalDateContext(ctx) {
        if (!ctx || !ctx.date) return null;
        const normalized = Object.assign({}, ctx, {
            date: cloneDateOnly(ctx.date),
            localDate: cloneDateOnly(ctx.localDate || ctx.date),
            leftLang: state.currentLoc || 'KR'
        });
        normalized.dateIso = formatDateIso(normalized.date);
        normalized.localDateIso = formatDateIso(normalized.localDate);
        state.liturgicalDateContext = normalized;
        return normalized;
    }

    function getActiveLiturgicalDateContext() {
        const ctx = state.liturgicalDateContext;
        if (ctx && ctx.date && !ctx.dateIso) {
            return Object.assign({}, ctx, {
                date: cloneDateOnly(ctx.date),
                localDate: cloneDateOnly(ctx.localDate || ctx.date)
            });
        }
        const fresh = getStrictDateContext(new Date());
        const freshDateIso = formatDateIso(fresh.date);
        const freshLocalDateIso = formatDateIso(fresh.localDate || fresh.date);
        const contextIsCurrent = ctx && ctx.date
            && ctx.leftLang === (state.currentLoc || 'KR')
            && ctx.timeZone === fresh.timeZone
            && ctx.dateIso === freshDateIso
            && ctx.localDateIso === freshLocalDateIso
            && Number(ctx.navOffset || 0) === Number(fresh.navOffset || 0)
            && (ctx.navSlot || 'day') === (fresh.navSlot || 'day');
        if (contextIsCurrent) {
            return Object.assign({}, ctx, {
                date: cloneDateOnly(ctx.date),
                localDate: cloneDateOnly(ctx.localDate || ctx.date)
            });
        }
        return rememberLiturgicalDateContext(fresh);
    }

    function getActiveLiturgicalSourceDate() {
        const ctx = getActiveLiturgicalDateContext();
        return cloneDateOnly(ctx.date);
    }

    const buildGeneratedLiturgyInfoV15 = buildGeneratedLiturgyInfo;

    function strictSeasonalLiturgyInfo(date, overrides = {}) {
        const meta = Object.assign(getSeasonMeta(date), overrides.meta || {});
        const names = overrides.names || meta.names || {
            KR: formatSeasonalName('KR', meta.season, meta.week, meta.day, meta.sundayCycle),
            VN: formatSeasonalName('VN', meta.season, meta.week, meta.day, meta.sundayCycle),
            EN: formatSeasonalName('EN', meta.season, meta.week, meta.day, meta.sundayCycle),
            JP: formatSeasonalName('JP', meta.season, meta.week, meta.day, meta.sundayCycle),
            LA: formatSeasonalName('LA', meta.season, meta.week, meta.day, meta.sundayCycle)
        };
        const dateStr = new Intl.DateTimeFormat('ko-KR', {
            year: 'numeric', month: 'long', day: 'numeric', weekday: 'short'
        }).format(date);
        const info = applyLocalCalendarOverrides({
            names,
            krName: names.KR,
            vnName: names.VN,
            color: overrides.color || meta.color,
            dateStr,
            meta,
            isSunday: date.getDay() === 0,
            isSolemnity: isSolemnityNameMap(names)
        }, date);
        info.isSolemnity = !!(info.isSolemnity || isSolemnityNameMap(info.names));
        return ensureDefaultPrefaceHint(info, date);
    }

    buildGeneratedLiturgyInfo = function(date) {
        const ctx = getActiveLiturgicalDateContext();
        const isLiveDate = sameDay(date, ctx.localDate) || sameDay(date, ctx.date);
        if (isLiveDate && isHolySaturday(date) && ctx.specialVigil !== 'easter_vigil') {
            return strictSeasonalLiturgyInfo(date, {
                color: liturgyColorMap.purple,
                names: {
                    KR: '성토요일',
                    VN: 'Thứ Bảy Tuần Thánh',
                    EN: 'Holy Saturday',
                    JP: '聖土曜日',
                    LA: 'Sabbato Sancto'
                },
                meta: { season: 'holy_week', special: true }
            });
        }
        if (isLiveDate && isChristmasEve(date) && ctx.specialVigil !== 'christmas_vigil') {
            return strictSeasonalLiturgyInfo(date);
        }
        return buildGeneratedLiturgyInfoV15(date);
    };

    async function loadAllSoulsMassConfigIfNeeded(date) {
        if (!isAllSoulsDate(date) || window.allSoulsMassConfig) return;
        await loadScriptOnce(ALL_SOULS_CONFIG_FILE);
    }

    function getAllSoulsMassChoice(date) {
        if (!isAllSoulsDate(date)) return '';
        const stored = readStorageJSON(`${STORAGE_PREFIX}allSoulsMass`) || {};
        const config = window.allSoulsMassConfig || {};
        return String(stored.choice || stored.preferredMass || config.choice || config.preferredMass || 'first').toLowerCase();
    }

    function getStrictMassSelector(date) {
        const ctx = getActiveLiturgicalDateContext();
        const isLiveDate = sameDay(date, ctx.localDate) || sameDay(date, ctx.date);
        const specialVigil = isLiveDate ? ctx.specialVigil : '';
        return {
            slot: specialVigil ? 'vigil' : 'day',
            specialVigil,
            allSoulsChoice: getAllSoulsMassChoice(date)
        };
    }

    function strictDailySourceCacheVariant(date) {
        const selector = getStrictMassSelector(date);
        return [
            STRICT_PARSER_CACHE_VERSION,
            selector.slot || 'day',
            selector.specialVigil || '',
            selector.allSoulsChoice ? `all-souls-${selector.allSoulsChoice}` : ''
        ].filter(Boolean).join(':');
    }

    function strictDailySourceEntryUrl(lang, date) {
        if (lang === 'KR') return `https://missa.cbck.or.kr/DailyMissa/${formatDateYmd(date)}`;
        if (lang === 'JP') return `https://higotonofukuin.org/spip.php?page=quotidien&date=${formatDateIso(date)}%2000:00:00`;
        if (lang === 'EN' && hasCountryDailyReadings()) {
            return activeCountryMassModule().dailyReadings.url(formatDateYmd(date));
        }
        if (lang === 'EN') return `https://bible.usccb.org/bible/readings/${formatDateMmddyy(date)}.cfm`;
        return '';
    }

    function strictCleanLine(line) {
        return cleanMarkdownLine(String(line || '').replace(/^\s*>\s*/, ''))
            .replace(/[ \t]+/g, ' ')
            .replace(/\s+([:：])/g, '$1')
            .trim();
    }

    function strictTextWithoutSelector(node, selector) {
        if (!node) return '';
        const clone = node.cloneNode(true);
        clone.querySelectorAll(selector).forEach(child => child.remove());
        return strictCleanLine(clone.textContent);
    }

    function strictHtmlNodeLines(node) {
        if (!node) return [];
        if (node.classList && node.classList.contains('title-block')) {
            const lines = [];
            const heading = node.querySelector('h4, h5, h6');
            if (heading) lines.push(strictCleanLine(heading.textContent));
            Array.from(node.children || []).forEach(child => {
                if ((child.tagName || '').toLowerCase() === 'span') lines.push(strictCleanLine(child.textContent));
            });
            return lines.filter(Boolean);
        }
        const directH5 = Array.from(node.children || []).filter(child => (child.tagName || '').toLowerCase() === 'h5');
        if (directH5.length) {
            const main = strictTextWithoutSelector(node, 'h5');
            const refs = directH5.map(child => strictCleanLine(child.textContent)).filter(Boolean);
            return [main].concat(refs).filter(Boolean);
        }
        return [strictCleanLine(node.textContent)].filter(Boolean);
    }

    function strictNodeTextLinesWithBreaks(node) {
        if (!node) return [];
        const clone = node.cloneNode(true);
        clone.querySelectorAll('br').forEach(br => br.replaceWith('\n'));
        clone.querySelectorAll('p, li, blockquote').forEach(block => block.appendChild(clone.ownerDocument.createTextNode('\n')));
        return clone.textContent
            .split(/\n+/)
            .map(strictCleanLine)
            .filter(Boolean);
    }

    function strictUsccbHtmlLinesFromDoc(doc) {
        if (!doc || !doc.querySelector('.b-verse .content-header')) return [];
        const lines = [];
        const lectionary = doc.querySelector('.b-lectionary .innerblock');
        if (lectionary) {
            const title = strictCleanLine((lectionary.querySelector('h1, h2, h3') || {}).textContent || '');
            const ref = strictCleanLine((lectionary.querySelector('p') || {}).textContent || '');
            if (title) lines.push(title);
            if (ref) lines.push(ref);
        }
        Array.from(doc.querySelectorAll('.b-verse')).forEach(section => {
            const heading = strictCleanLine((section.querySelector('.content-header .name') || {}).textContent || '');
            const citation = strictCleanLine((section.querySelector('.content-header .address') || {}).textContent || '');
            if (heading) lines.push(heading);
            if (citation) lines.push(citation);
            strictNodeTextLinesWithBreaks(section.querySelector('.content-body')).forEach(line => lines.push(line));
        });
        return lines.filter(Boolean);
    }

    function strictHtmlLinesFromDoc(doc) {
        doc.querySelectorAll('script, style, nav, footer, iframe, noscript').forEach(node => node.remove());
        const usccbLines = strictUsccbHtmlLinesFromDoc(doc);
        if (usccbLines.length) return usccbLines;
        const blockSelector = 'h1, h2, h3, h4, h5, h6, p, li, blockquote, td, th, div';
        const nodes = Array.from(doc.querySelectorAll(blockSelector)).filter(node => {
            if (node.closest && node.closest('.title-block') && !(node.classList && node.classList.contains('title-block'))) return false;
            if ((node.tagName || '').toLowerCase() === 'h5' && node.parentElement && Array.from(node.parentElement.children || []).includes(node)) return false;
            if (node.classList && node.classList.contains('title-block')) return true;
            const hasDirectH5 = Array.from(node.children || []).some(child => (child.tagName || '').toLowerCase() === 'h5');
            if (hasDirectH5) return true;
            return !Array.from(node.children || []).some(child => child.matches && child.matches(blockSelector));
        });
        return nodes.flatMap(strictHtmlNodeLines)
            .map(strictCleanLine)
            .filter(Boolean)
            .filter(line => !/^(Title:|URL Source:|Published Time:|Markdown Content:|Image:|MENU|Search|LISTEN|VIEW|Subscribe|Copyright|©)/i.test(line));
    }

    function strictSourceLines(source) {
        if (!isJinaMarkdownSource(source)) {
            const doc = parseHtml(source);
            return strictHtmlLinesFromDoc(doc);
        }
        return sourceTextLines(source)
            .map(strictCleanLine)
            .filter(Boolean)
            .filter(line => !/^(Title:|URL Source:|Published Time:|Markdown Content:|Image:|MENU|Search|LISTEN|VIEW|Subscribe|Copyright|©)/i.test(line));
    }

    function strictNormalizeUniversalisDailyLine(line) {
        const text = strictCleanLine(line);
        if (!text) return '';
        if (/^\*(?:\s*\*)*$/u.test(text)) return '';
        if (/^\|\s*(?:-{3,}\s*\|\s*)+$/u.test(text)) return '';
        if (!/^\|.*\|$/u.test(text)) return text;
        const cells = text.slice(1, -1).split('|').map(strictCleanLine).filter(Boolean);
        if (!cells.length) return '';
        const heading = cells[0];
        if (/^(First reading|Second reading|Responsorial Psalm|Gospel Acclamation|Gospel)$/i.test(heading)) {
            return cells.length > 1 ? `${heading}: ${cells.slice(1).join(' ')}` : heading;
        }
        if (/^Or:?$/i.test(heading)) {
            return cells.length > 1 ? `Or: ${cells.slice(1).join(' ')}` : 'Or:';
        }
        return cells.join(' ');
    }

    function strictScopeUniversalisCountryDailyLines(lines, date) {
        const normalized = (lines || []).map(strictNormalizeUniversalisDailyLine).filter(Boolean);
        const markers = normalized.map((line, index) => {
            const match = strictCleanLine(line).match(/^These are the readings for the\s+(.+)$/i);
            return match ? { index, label: match[1] } : null;
        }).filter(Boolean);
        const local = getCountryCalendarOverride(date, state.selectedLocationCode);
        const info = buildGeneratedLiturgyInfo(date);
        const title = info && info.names && info.names.EN;
        if (markers.length <= 1) {
            const start = markers.length === 1 ? markers[0].index : 0;
            return (title ? [title] : []).concat(normalized.slice(start));
        }
        const rank = String((local && local.meta && local.meta.rank) || (info.meta && info.meta.rank) || '').toLowerCase();
        const preferCelebration = !!rank && !['optional', 'commemoration', 'weekday'].includes(rank);
        const chosen = markers.find(marker => preferCelebration
            ? !/\bferia\b/i.test(marker.label)
            : /\bferia\b/i.test(marker.label)) || markers[0];
        const chosenPosition = markers.indexOf(chosen);
        const end = markers[chosenPosition + 1] ? markers[chosenPosition + 1].index : normalized.length;
        return (title ? [title] : []).concat(normalized.slice(chosen.index, end));
    }

    function strictLinkLabel(link) {
        return strictCleanLine([link && link.text, link && link.href].filter(Boolean).join(' '));
    }

    function strictIsVigilLabel(label) {
        return /(전야|성야|前晩|Vigil|Vigilia|Vọng)/i.test(label);
    }

    function strictIsDayMassLabel(label) {
        return /(낮\s*미사|당일|当日のミサ|日中|Mass during the Day|During the Day|day mass|Ban ngày)/i.test(label);
    }

    function strictIsNightMassLabel(label) {
        return /(밤\s*미사|야간|夜半|夜のミサ|Mass during the Night|Midnight|Dawn|새벽)/i.test(label);
    }

    function strictAllSoulsRank(label) {
        const text = strictCleanLine(label);
        if (!text || text.length > 140 || /(?:copyright|rights reserved|typical edition|lectionary for mass)/i.test(text)) return '';
        if (!/(위령|All Souls|Faithful Departed|미사|Mass|Missa|Lễ|ミサ|死者|Defunctorum)/i.test(text)) return '';
        if (/(첫째|제\s*1(?!\d)|1\s*미사|First|Missa\s*I\b|第\s*1(?!\d)|一|Lễ\s*I\b)/i.test(text)) return 'first';
        if (/(둘째|제\s*2(?!\d)|2\s*미사|Second|Missa\s*II\b|第\s*2(?!\d)|二|Lễ\s*II\b)/i.test(text)) return 'second';
        if (/(셋째|제\s*3(?!\d)|3\s*미사|Third|Missa\s*III\b|第\s*3(?!\d)|三|Lễ\s*III\b)/i.test(text)) return 'third';
        return '';
    }

    function strictRelevantSourceLinks(lang, source, baseUrl, date) {
        if (lang === 'EN' && usesUniversalisCountryReadings()) return [];
        const ymd = formatDateYmd(date);
        const iso = formatDateIso(date);
        return extractSourceLinks(source, baseUrl).filter(link => {
            const href = String(link.href || '');
            const label = strictLinkLabel(link);
            if (lang === 'KR') return /missa\.cbck\.or\.kr\/DailyMissa/i.test(href) && (href.includes(ymd) || label.includes(ymd));
            if (lang === 'JP') return /higotonofukuin\.org/i.test(href) && (href.includes(iso) || decodeURIComponent(href).includes(iso) || label.includes(iso));
            if (lang === 'EN') return /bible\.usccb\.org\/bible\/readings/i.test(href) || /(Vigil|Mass during the Day)/i.test(label);
            return false;
        });
    }

    function strictChooseMassLink(lang, source, baseUrl, date, selector) {
        const links = strictRelevantSourceLinks(lang, source, baseUrl, date);
        if (!links.length) return null;
        const hasVariantLinks = links.some(link => {
            const label = strictLinkLabel(link);
            return strictIsVigilLabel(label) || strictIsDayMassLabel(label) || strictIsNightMassLabel(label) || strictAllSoulsRank(label);
        });
        if (!hasVariantLinks) return null;
        if (selector.allSoulsChoice) {
            const allSoulsMatch = links.find(link => strictAllSoulsRank(strictLinkLabel(link)) === selector.allSoulsChoice);
            if (allSoulsMatch) return allSoulsMatch;
        }
        if (selector.slot === 'vigil' && strictSpecialVigilKeys.has(selector.specialVigil)) {
            const vigilLink = links.find(link => strictIsVigilLabel(strictLinkLabel(link)));
            if (vigilLink) return vigilLink;
        }
        const dayLink = links.find(link => strictIsDayMassLabel(strictLinkLabel(link)));
        if (dayLink) return dayLink;
        return links.find(link => {
            const label = strictLinkLabel(link);
            return !strictIsVigilLabel(label) && !strictIsNightMassLabel(label);
        }) || null;
    }

    function strictVariantKind(line) {
        const text = strictCleanLine(line);
        const allSouls = strictAllSoulsRank(text);
        if (allSouls) return allSouls;
        if (strictIsVigilLabel(text)) return 'vigil';
        if (strictIsNightMassLabel(text)) return 'night';
        if (strictIsDayMassLabel(text)) return 'day';
        return '';
    }

    function strictScopeLinesForMassVariant(lines, selector) {
        const markers = [];
        (lines || []).forEach((line, index) => {
            const kind = strictVariantKind(line);
            if (kind) markers.push({ index, kind });
        });
        if (!markers.length) return lines || [];
        let chosen = null;
        if (selector.allSoulsChoice) chosen = markers.find(marker => marker.kind === selector.allSoulsChoice);
        if (!chosen && selector.slot === 'vigil') chosen = markers.find(marker => marker.kind === 'vigil');
        if (!chosen) chosen = markers.find(marker => marker.kind === 'day');
        if (!chosen) chosen = markers.find(marker => !['vigil', 'night'].includes(marker.kind));
        if (!chosen) return lines || [];
        const markerPosition = markers.indexOf(chosen);
        const end = markerPosition >= 0 && markers[markerPosition + 1] ? markers[markerPosition + 1].index : lines.length;
        return lines.slice(chosen.index + 1, end);
    }

    const strictSectionMarkers = {
        KR: [
            ['entrance', /^입당송(?:\s|$|[:：])/u],
            ['collect', /^본기도(?:\s|$|[:：])/u],
            ['reading1', /^제\s*1\s*독서(?:\s|$|[:：])/u],
            ['psalm', /^화답송(?=\s|$|[:：]|시편)/u],
            ['reading2', /^제\s*2\s*독서(?:\s|$|[:：])/u],
            ['Sequence', /^부속가(?:\s|$|[:：])/u],
            ['gospel_accl', /^복음\s*환호송(?=\s|$|[:：]|[가-힣0-9])/u],
            ['gospel', /^복음(?!\s*환호송)(?:\s|$|[:：])/u],
            ['prayer_offerings', /^예물\s*기도(?:\s|$|[:：])/u],
            ['communion', /^영성체송(?:\s|$|[:：])/u],
            ['prayer_after', /^영성체\s*후\s*기도(?:\s|$|[:：])/u]
        ],
        EN: [
            ['entrance', /^Entrance Antiphon(?:\s|$|[:：])/i],
            ['collect', /^Collect(?:\s|$|[:：])/i],
            ['reading1', /^(Reading\s*(?:1|I)|First Reading)(?:\s|$|[:：])/i],
            ['psalm', /^Responsorial Psalm(?:\s|$|[:：])/i],
            ['reading2', /^(Reading\s*(?:2|II)|Second Reading)(?:\s|$|[:：])/i],
            ['Sequence', /^Sequence(?:\s|$|[:：])/i],
            ['gospel_accl', /^(Alleluia|Verse Before the Gospel|Gospel Acclamation)(?:\s|$|[:：])/i],
            ['gospel', /^Gospel(?:\s|$|[:：])/i],
            ['prayer_offerings', /^Prayer over the Offerings(?:\s|$|[:：])/i],
            ['communion', /^Communion Antiphon(?:\s|$|[:：])/i],
            ['prayer_after', /^Prayer after Communion(?:\s|$|[:：])/i]
        ],
        JP: [
            ['entrance', /^(入祭唱|入堂唱)(?:\s|$|[:：])/u],
            ['collect', /^(集会祈願|集祷文)(?:\s|$|[:：])/u],
            ['reading1', /^(第一朗読|第1朗読)(?:\s|$|[:：])/u],
            ['psalm', /^(答唱詩編|答唱詩篇)(?:\s|$|[:：])/u],
            ['reading2', /^(第二朗読|第2朗読)(?:\s|$|[:：])/u],
            ['Sequence', /^(続唱|セクエンツィア)(?:\s|$|[:：])/u],
            ['gospel_accl', /^(アレルヤ唱|福音歓呼)(?:\s|$|[:：])/u],
            ['gospel', /^(福音朗読|福音)(?:\s|$|[:：])/u],
            ['prayer_offerings', /^(奉納祈願|奉納文)(?:\s|$|[:：])/u],
            ['communion', /^(拝領唱|聖体拝領唱)(?:\s|$|[:：])/u],
            ['prayer_after', /^(拝領祈願|拝領後の祈願)(?:\s|$|[:：])/u]
        ],
        VN: [
            ['entrance', /^Ca nhập lễ(?:\s|$|[:：])/iu],
            ['collect', /^Lời nguyện nhập lễ(?:\s|$|[:：])/iu],
            ['reading1', /^Bài\s*(?:đọc|Ðọc|Đọc)\s*I(?:\s|$|[:：])/iu],
            ['psalm', /^(Đáp ca|Ðáp ca)(?:\s|$|[:：])/iu],
            ['reading2', /^Bài\s*(?:đọc|Ðọc|Đọc)\s*II(?:\s|$|[:：])/iu],
            ['Sequence', /^Ca tiếp liên(?:\s|$|[:：])/iu],
            ['gospel_accl', /^(Alleluia|Tung hô Tin Mừng)(?:\s|$|[:：])/iu],
            ['gospel', /^(?:Phúc Âm(?:\s|$|[:：])|Tin Mừng(?:$|[:：]))/iu],
            ['prayer_offerings', /^Lời nguyện tiến lễ(?:\s|$|[:：])/iu],
            ['communion', /^Ca hiệp lễ(?:\s|$|[:：])/iu],
            ['prayer_after', /^Lời nguyện (?:hiệp|kết) lễ(?:\s|$|[:：])/iu]
        ]
    };

    const strictTerminalSectionPatterns = {
        KR: [/^감사송/u, /^오늘의 묵상/u, /^영성체 후 묵상/u, /^보편\s*지향\s*기도/u, /^강론/u],
        EN: [
            /^Preface/i,
            /^Reflection/i,
            /^Meditation/i,
            /^Universal Prayer/i,
            /^Daily Reflection/i,
            /^Continue$/i,
            /^You can also view this page/i,
            /^Christian Art$/i,
            /^The responsorial psalms at Mass cannot be displayed/i,
            /^The readings on this page are from/i
        ],
        JP: [/^叙唱/u, /^今日の/u, /^共同祈願/u],
        VN: [/^Lời tiền tụng/iu, /^Kinh Tiền Tụng/iu, /^Suy niệm/iu, /^Lời nguyện tín hữu/iu, /^Ghi nhận (?:lịch sử|phụng vụ)/iu]
    };

    function strictIdentifySection(line, lang) {
        const cleaned = strictCleanLine(line);
        const markers = strictSectionMarkers[lang] || [];
        for (const [key, regex] of markers) {
            if (!regex.test(cleaned)) continue;
            return { key, rest: strictCleanLine(cleaned.replace(regex, '').replace(/^[:：\s-]+/, '')) };
        }
        return null;
    }

    function strictIsTerminalSection(line, lang) {
        return (strictTerminalSectionPatterns[lang] || []).some(pattern => pattern.test(strictCleanLine(line)));
    }

    function strictExtractRawSections(lines, lang, selector) {
        const scoped = splitEmbeddedDailySectionHeadings(strictScopeLinesForMassVariant(lines, selector), lang);
        const result = {};
        let current = null;
        scoped.forEach(line => {
            const marker = strictIdentifySection(line, lang);
            if (marker && strictDailySectionKeys.has(marker.key)) {
                current = { key: marker.key, heading: line, lines: [] };
                if (!result[marker.key]) result[marker.key] = current;
                else current = result[marker.key];
                if (marker.rest) current.lines.push(marker.rest);
                return;
            }
            if (strictIsTerminalSection(line, lang)) {
                current = null;
                return;
            }
            if (!current) return;
            if (/^(Lectionary:|Reading\s*(?:1|2|I|II)$|Daily Readings|Get Daily Readings|View Calendar)$/i.test(line)) return;
            current.lines.push(line);
        });
        return result;
    }

    function strictSplitBlocks(lines) {
        return splitSourceBlocks(lines || []).map(strictCleanLine).filter(Boolean);
    }

    function strictExtractQuotedSummary(blocks) {
        const index = (blocks || []).findIndex((line, i) => i < 4 && (
            /^<[^>]{2,300}>$/.test(line) ||
            /^[“"「『〈《].{2,300}[“”"」』〉》]\.?$/.test(line) ||
            /^\*.{2,300}\*$/.test(line)
        ));
        if (index < 0) return { summary: '', blocks: blocks || [] };
        const summary = strictCleanLine(blocks[index].replace(/^<|>$/g, '').replace(/^[“"「『〈《*]+|[“”"」』〉》*.]+$/g, ''));
        return { summary, blocks: blocks.filter((_, i) => i !== index) };
    }

    function strictLooksLikeCitation(line, lang) {
        const text = strictCitationCandidate(line, lang);
        if (!text || text.length > 120 || !/\d/.test(text)) return false;
        if (/^\d[\d\s,.;:·+\-–—―─()ㄱ-ㅎ]*$/.test(text)) return true;
        if (lang === 'KR') return /^(?:[1-3]\s*)?[가-힣]{1,12}\s*\d/.test(text);
        if (lang === 'EN') return /^(?:[1-3]\s*)?[A-Z][A-Za-z. ]{1,30}\s+\d/.test(text);
        if (lang === 'JP') return /^[一-龯ァ-ヶー]{1,20}\s*\d/.test(text);
        if (lang === 'VN') return /^(?:[1-3]\s*)?[A-ZĐÐ][A-Za-zÀ-ỹĐđÐð. ]{0,30}\s+\d/i.test(text);
        if (lang === 'LA') return /^(?:[1-3]\s*)?[A-ZÆŒ][A-Za-zÀ-ỹÆæŒœ. ]{0,30}\s+\d/i.test(text);
        return false;
    }

    function strictCitationCandidate(line, lang) {
        let text = strictCleanLine(line);
        text = text.replace(/^(?:Cf\.|Cfr\.|See)\s+/i, '');
        if (lang === 'VN') {
            text = text
                .replace(/^\(?\s*Năm\s+[IVX]+\s*\)?\s*/i, '')
                .replace(/^((?:[1-3]\s*)?[A-Za-zÀ-ỹĐđÐð.]{1,12})\s*,\s*(?=\d)/u, '$1 ');
        }
        return text;
    }

    function strictCleanCitation(raw, options = {}) {
        return String(raw || '')
            .replace(/\*\*/g, '')
            .replace(options.preserveParentheses ? /$a/ : /[()]/g, '')
            .replace(/^\s*Năm\s+[IVX]+\s*/i, '')
            .replace(/^((?:[1-3]\s*)?[A-Za-zÀ-ỹĐđÐð.]{1,12})\s*,\s*(?=\d)/u, '$1 ')
            .replace(/^1\s+(?=1\s*V\b)/i, '')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function strictExtractCitation(section, blocks, lang, options = {}) {
        const headingRest = strictIdentifySection(section.heading || '', lang);
        const headingCitation = headingRest && strictLooksLikeCitation(headingRest.rest, lang) ? headingRest.rest : '';
        const index = blocks.findIndex(line => strictLooksLikeCitation(line, lang));
        if (index < 0) return { citation: strictCleanCitation(headingCitation, options), blocks };
        const citationSource = options.preferBlockCitation && blocks[index] ? blocks[index] : (headingCitation || blocks[index]);
        return {
            citation: strictCleanCitation(citationSource, options),
            blocks: blocks.filter((_, i) => i !== index)
        };
    }

    function strictCitationVerseNumbers(citation) {
        const plain = String(citation || '').replace(/\([^)]*\)/g, ' ');
        const separatorIndex = plain.search(/[,.:]/);
        if (separatorIndex < 0) return [];
        const verseText = plain.slice(separatorIndex + 1);
        const found = new Set(Array.from(verseText.matchAll(/\d{1,3}/g), match => Number(match[0])));
        for (const match of verseText.matchAll(/(\d{1,3})[ㄱ-ㅎa-z]*\s*[-─–—]\s*(\d{1,3})/giu)) {
            const start = Number(match[1]);
            const end = Number(match[2]);
            if (end >= start && end - start <= 176) {
                for (let verse = start; verse <= end; verse += 1) found.add(verse);
            }
        }
        return Array.from(found).filter(Number.isInteger);
    }

    function psalmCitationVerseGroups(citation) {
        const raw = String(citation || '');
        const separatorIndex = raw.search(/[,：:・]/u);
        if (separatorIndex < 0) return [];
        const verseText = raw.slice(separatorIndex + 1)
            .replace(/\((?=[^)]*(?:◎|R\.?|Đ|Ð|℟|答))[^)]*\)/giu, ' ')
            .replace(/\s+(?:Đ|Ð)\s*\.?(?:\s+(?:x|c)\s*\.)?[\s\S]*$/iu, ' ');
        return verseText.split(/[.,;、]/u).map(token => {
            const refs = new Set();
            let remainder = token;
            for (const match of token.matchAll(/(\d{1,3})[ㄱ-ㅎa-z]*\s*[-─–—]\s*(\d{1,3})/giu)) {
                const start = Number(match[1]);
                const end = Number(match[2]);
                if (end >= start && end - start <= 176) {
                    for (let verse = start; verse <= end; verse += 1) refs.add(verse);
                }
                remainder = remainder.replace(match[0], ' ');
            }
            Array.from(remainder.matchAll(/\d{1,3}/g), match => Number(match[0])).forEach(verse => refs.add(verse));
            return Array.from(refs).filter(Number.isFinite).sort((a, b) => a - b);
        }).filter(group => group.length);
    }

    function attachPsalmVerseRefs(lang, citation, lines) {
        const groups = psalmCitationVerseGroups(citation);
        const versicles = (lines || []).filter(line => strictShouldAppendPsalmResponse(lang, line && line.sp));
        if (!groups.length || groups.length !== versicles.length) return lines || [];
        versicles.forEach((line, index) => { line.verseRefs = groups[index].slice(); });
        return lines || [];
    }

    function strictStripArabicVerseNumbers(text, citation = '') {
        let source = String(text || '');
        const citationVerses = strictCitationVerseNumbers(citation).sort((a, b) => b - a);
        if (citationVerses.length) {
            const attachedMarker = new RegExp(`(^|[\\s([{「『"“‘、。，．,;:!?])(?:${citationVerses.join('|')})(?=[\\p{L}])`, 'gu');
            source = source.replace(attachedMarker, '$1');
        }
        return cleanNodeText(source
            .replace(/(^|[\s([{「『"“‘、。，．])\d+(?:[\s,.;:·・•*+\-–—/]\d+)*(?=$|[\s)\]}「」『』,.;:!?"'”’、。，．])/gu, '$1')
            .replace(/\s+([,.;:!?])/g, '$1')
            .replace(/\s{2,}/g, ' '));
    }

    function strictExtractIntro(blocks, lang, baseId) {
        const introPatterns = {
            KR: [/말씀입니다\.?$/u, /복음입니다\.?$/u],
            EN: [/^A reading from/i, /^A Reading from/i],
            JP: [/朗読/u, /福音/u],
            VN: [/^Trích/iu, /^Tin Mừng Chúa/iu, /Chúa Giêsu Kitô theo/iu],
            LA: [/^L[eé]ctio/iu, /^✠?\s*L[eé]ctio sancti Evang/iu]
        };
        const patterns = introPatterns[lang] || [];
        const index = blocks.findIndex((line, i) => i < 3 && patterns.some(pattern => pattern.test(line)));
        if (index < 0) return { intro: '', blocks };
        return { intro: blocks[index], blocks: blocks.filter((_, i) => i !== index) };
    }

    function strictParsedLine(sp, text, role = '', ai = '', rubric = '') {
        const line = parsedLine(sp, text, role);
        if (ai) line.ai = ai;
        if (rubric) line.rubric = rubric;
        return line;
    }

    function strictSplitLeadingSpeaker(lang, key, text) {
        const cleaned = strictCleanLine(text);
        if (!cleaned) return { sp: '', text: '' };
        let match = null;
        if (lang === 'KR') match = cleaned.match(/^([◎○●✚✠▥])\s*(.+)$/u);
        else if (lang === 'VN') match = cleaned.match(/^(Đáp|Ðáp|Đ\.|Ð\.|Xướng|X\.|Mọi người|Cộng đoàn|Tất cả|Alleluia)\s*[:.：]?\s*(.*)$/iu);
        else if (lang === 'EN') match = cleaned.match(/^(R\.|V\.|All|People|L\.|P\.|P\.\s*\(D\.\))\s*[:.：]?\s*(.*)$/i);
        else if (lang === 'LA') match = cleaned.match(/^(℟\.?|℣\.?|L\.|S\.|P\.)\s*[:.：]?\s*(.*)$/iu);
        else if (lang === 'JP') match = cleaned.match(/^(答|先|会|朗|司(?:\s*\(助\))?)\s*[:.：]?\s*(.*)$/u);
        return match ? { sp: strictCleanLine(match[1]), text: strictCleanLine(match[2]) } : { sp: '', text: cleaned };
    }

    function strictReadingCitation(lang, intro, citation) {
        if (lang === 'KR') return buildKoreanCitation(intro, citation);
        return strictCleanCitation(citation);
    }

    function strictPsalmResponseTail(lang) {
        return { KR: '◎', VN: '- Đáp.', EN: '- Response.', JP: '- 答唱。', LA: '- ℟' }[lang] || '';
    }

    function englishPsalmResponseRef(line) {
        const match = strictCleanLine(line).match(/^R\.\s*\(([^)]+)\)\s*/i);
        return match ? `(${match[1].trim()})` : '';
    }

    function appendEnglishPsalmResponseRef(citation, ref) {
        const cleanedCitation = strictCleanCitation(citation, { preserveParentheses: true });
        const cleanedRef = strictCleanLine(ref);
        if (!cleanedRef || cleanedCitation.includes(cleanedRef)) return cleanedCitation;
        return cleanedCitation ? `${cleanedCitation} ${cleanedRef}` : cleanedRef;
    }

    function latinPsalmResponseRef(line) {
        const match = strictCleanLine(line).match(/^(?:℟\.?|R\.)\s*\(([^)]+)\)/iu);
        return match ? `(${match[1].trim()})` : '';
    }

    function latinPsalmResponseText(line) {
        const match = strictCleanLine(line).match(/^(?:℟\.?|R\.)\s*[:.：]?\s*(.*)$/iu);
        if (!match) return '';
        return strictCleanLine(match[1].replace(/^\([^)]+\)\s*/, ''));
    }

    function isLatinPsalmResponseMarker(line) {
        return /^(?:℟\.?|R\.)\s*(?:\([^)]+\))?\s*[:.：]?/iu.test(strictCleanLine(line));
    }

    function isLatinPsalmRitLabel(line) {
        return /^Rit\.?\s*[:.：]?$/iu.test(strictCleanLine(line));
    }

    function latinPsalmLineText(line) {
        const split = strictSplitLeadingSpeaker('LA', 'psalm', line);
        return strictStripArabicVerseNumbers(split.text || line);
    }

    function latinPsalmResponseChunks(blocks, markerIndex, maxLines = 4) {
        const chunks = [];
        const markerText = latinPsalmResponseText(blocks[markerIndex]);
        if (markerText) chunks.push(markerText);
        for (let i = markerIndex + 1; i < blocks.length && chunks.length < maxLines; i += 1) {
            const line = strictCleanLine(blocks[i]);
            if (!line || isLatinPsalmResponseMarker(line) || isLatinPsalmRitLabel(line) || strictLooksLikeCitation(line, 'LA')) break;
            chunks.push(latinPsalmLineText(line));
        }
        return chunks;
    }

    function latinPsalmComparableText(text) {
        return String(text || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^\p{L}\p{N}]+/gu, ' ')
            .replace(/\s+/g, ' ')
            .trim()
            .toLowerCase();
    }

    function latinPsalmRepeatedResponseLineCount(blocks, markerIndexes) {
        if (markerIndexes.length < 2) return 1;
        const chunkSets = markerIndexes.map(index => latinPsalmResponseChunks(blocks, index));
        const first = chunkSets[0] || [];
        let count = 0;
        for (let i = 0; i < first.length; i += 1) {
            const token = latinPsalmComparableText(first[i]);
            if (!token) break;
            if (!chunkSets.every(chunks => latinPsalmComparableText(chunks[i]) === token)) break;
            count += 1;
        }
        return Math.max(1, count);
    }

    function appendLatinPsalmResponseTail(text) {
        const cleaned = strictCleanLine(text);
        return /-\s*℟\s*$/u.test(cleaned) ? cleaned : `${cleaned} - ℟`;
    }

    function strictParseLatinPsalm(citation, blocks) {
        const cleanedBlocks = (blocks || [])
            .map(strictCleanLine)
            .filter(Boolean)
            .filter(line => !isLatinPsalmRitLabel(line))
            .filter(line => !strictLooksLikeCitation(line, 'LA'));
        const markerIndexes = cleanedBlocks
            .map((line, index) => isLatinPsalmResponseMarker(line) ? index : -1)
            .filter(index => index >= 0);
        let finalCitation = strictCleanCitation(citation, { preserveParentheses: true });
        const ref = markerIndexes.length ? latinPsalmResponseRef(cleanedBlocks[markerIndexes[0]]) : '';
        if (ref) finalCitation = appendEnglishPsalmResponseRef(finalCitation, ref);
        const out = [];
        if (markerIndexes.length >= 2) {
            const responseLineCount = latinPsalmRepeatedResponseLineCount(cleanedBlocks, markerIndexes);
            markerIndexes.forEach((markerIndex, markerOrder) => {
                const start = markerIndex + responseLineCount;
                const end = markerIndexes[markerOrder + 1] || cleanedBlocks.length;
                const text = strictCleanLine(cleanedBlocks.slice(start, end).map(latinPsalmLineText).join(' '));
                if (text) out.push(strictParsedLine('℣', appendLatinPsalmResponseTail(text)));
            });
        } else {
            cleanedBlocks.forEach(line => {
                if (isLatinPsalmResponseMarker(line)) return;
                const text = latinPsalmLineText(line);
                if (text) out.push(strictParsedLine('℣', appendLatinPsalmResponseTail(text)));
            });
        }
        attachPsalmVerseRefs('LA', finalCitation, out);
        const result = { text: parsedLinesToText(out), lines: out };
        if (finalCitation) result.cit_la = finalCitation;
        return result;
    }

    function strictParseEnglishPsalm(citation, blocks) {
        const out = [];
        let finalCitation = strictCleanCitation(citation, { preserveParentheses: true });
        let responseSeen = false;
        let verseBuffer = [];
        const flushVerse = withResponse => {
            if (!verseBuffer.length) return;
            const text = strictCleanLine(verseBuffer.map(strictStripArabicVerseNumbers).join(' '));
            if (text) out.push(strictParsedLine('Versicle', withResponse ? `${text} - R.` : text));
            verseBuffer = [];
        };
        (blocks || []).forEach(line => {
            if (strictLooksLikeCitation(line, 'EN')) return;
            const responseMatch = strictCleanLine(line).match(/^R\.\s*(.*)$/i);
            if (responseMatch) {
                const responseRef = englishPsalmResponseRef(line);
                if (responseRef) finalCitation = appendEnglishPsalmResponseRef(finalCitation, responseRef);
                const responseText = strictCleanLine(responseMatch[1].replace(/^\([^)]+\)\s*/, ''));
                if (!responseSeen) {
                    if (responseText) out.push(strictParsedLine('R.', responseText));
                    responseSeen = true;
                } else {
                    flushVerse(true);
                }
                return;
            }
            if (line) verseBuffer.push(line);
        });
        flushVerse(false);
        attachPsalmVerseRefs('EN', finalCitation, out);
        const result = { text: parsedLinesToText(out), lines: out };
        if (finalCitation) result.cit_en = finalCitation;
        return result;
    }

    function strictShouldAppendPsalmResponse(lang, speaker) {
        const sp = strictCleanLine(speaker);
        if (lang === 'KR') return sp === '○' || sp === '●';
        if (lang === 'VN') return /^(Xướng|X\.|CV\.)$/iu.test(sp);
        if (lang === 'EN') return /^(V\.|Verse|Versicle|Ps\.)$/i.test(sp);
        if (lang === 'JP') return /^(先|詩)$/u.test(sp);
        if (lang === 'LA') return /^(℣\.?|V\.|Ps\.)$/iu.test(sp);
        return false;
    }

    function strictAppendPsalmResponse(lang, key, speaker, text) {
        const cleaned = strictCleanLine(text);
        if (key !== 'psalm' || !strictShouldAppendPsalmResponse(lang, speaker)) return cleaned;
        if (lang === 'VN') {
            const normalized = normalizeVietnamesePsalmResponseTail(cleaned);
            if (/[–—-]\s*(?:Đáp|Ðáp|Dap|Đ\.|Ð\.)\.?$/iu.test(normalized)) return normalized;
        }
        const suffix = strictPsalmResponseTail(lang);
        if (!suffix) return cleaned;
        const escaped = suffix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        if (new RegExp(`${escaped}\\s*$`, 'iu').test(cleaned)) return cleaned;
        if (lang === 'KR' && /◎\s*$/.test(cleaned)) return cleaned;
        const withSuffix = `${cleaned} ${suffix}`;
        return lang === 'VN' ? normalizeVietnamesePsalmResponseTail(withSuffix) : withSuffix;
    }

    function strictParseJoinedAcclamation(lang, blocks) {
        const out = [];
        let verseBuffer = [];
        const responsePattern = /^(R\.|℟\.?|Alleluia)\s*[:.：]?\s*(.+)$/iu;
        const speakerOnlyPattern = /^(R\.|℟\.?|Alleluia)\s*[:.：]?\s*$/iu;
        const flushVerse = () => {
            const text = strictCleanLine(verseBuffer.join(' '));
            if (text) out.push(strictParsedLine(lang === 'EN' ? 'Versicle' : '', text));
            verseBuffer = [];
        };
        (blocks || []).forEach(line => {
            if (isStandaloneDashText(line)) return;
            if (strictLooksLikeCitation(line, lang)) return;
            if (speakerOnlyPattern.test(line)) return;
            const split = line.match(responsePattern);
            if (split) {
                flushVerse();
                out.push(strictParsedLine(split[1], split[2]));
            } else if (line) {
                verseBuffer.push(line);
            }
        });
        flushVerse();
        return out;
    }

    function strictMissingSummaryAI(lang) {
        const labels = {
            KR: 'AI 요약 번역',
            VN: 'Bản dịch tóm tắt AI',
            EN: 'AI summary translation',
            JP: 'AI要約翻訳',
            LA: 'Summarium AI'
        };
        return labels[lang] || labels.EN;
    }

    function strictAlternativeMatch(line) {
        const text = strictCleanLine(line).replace(/[<>]/g, ' ').replace(/\s+/g, ' ').trim();
        const standalone = text.match(/^(또는|或いは|または|又は|Hoặc|Hoac|Or|Vel)(?:\s+(?:đọc|doc|read))?\s*[:：]?\s*$/iu);
        if (standalone) return { marker: standalone[1], rest: '' };
        const match = text.match(/^(또는|或いは|または|又は|Hoặc|Hoac|Or|Vel)\s*[:：]\s*(.+)$/iu)
            || text.match(/^(Hoặc|Hoac)\s+(?:đọc|doc)\s*[:：]\s*(.+)$/iu);
        if (!match) return null;
        const rest = strictCleanLine((match[2] || '').replace(/^(?:đọc|doc)\b\s*:?\s*/iu, ''));
        return { marker: match[1], rest };
    }

    function strictIsAlternativeLine(line) {
        const match = strictAlternativeMatch(line);
        return !!match && !match.rest;
    }

    function strictGroupAlternativeBlocks(blocks) {
        const groups = [];
        let current = [];
        (blocks || []).forEach(line => {
            const match = strictAlternativeMatch(line);
            if (match) {
                if (current.length) groups.push(current);
                current = match.rest ? [match.rest] : [];
                return;
            }
            current.push(line);
        });
        if (current.length) groups.push(current);
        return groups.length ? groups : [blocks || []];
    }

    function strictIsProclamationEnding(text) {
        const cleaned = strictCleanLine(text)
            .replace(/^[◎○●✚✠▥]\s*/u, '')
            .replace(/[.。]+$/u, '')
            .trim();
        if (!cleaned) return false;
        if (/^(주님의\s*말씀입니다|하느님,?\s*감사합니다|그리스도님,?\s*찬미합니다)$/u.test(cleaned)) return true;
        if (/^(The word of the Lord|Thanks be to God|The Gospel of the Lord|Praise to you,\s*Lord Jesus Christ)$/i.test(cleaned)) return true;
        if (/^(Verbum Domini|Deo gratias|Evangelium Domini|Laus tibi Christe)$/i.test(cleaned)) return true;
        if (/^(神に感謝|主に感謝|キリストに賛美)$/u.test(cleaned)) return true;
        if (/(主|神)の(ことば|御言葉)$/u.test(cleaned)) return true;
        const loose = cleaned.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[ĐÐ]/g, 'D')
            .replace(/[đð]/g, 'd')
            .replace(/[,.]/g, '')
            .replace(/\s+/g, ' ')
            .toLowerCase();
        return /^(do la loi chua|ta on chua|loi chua|lay chua kito ngoi khen chua|verbum domini|laus tibi christe)$/.test(loose);
    }

    function strictTrimReadingAfterProclamation(blocks) {
        let finalEndingIndex = -1;
        (blocks || []).forEach((line, index) => {
            if (strictIsProclamationEnding(line)) finalEndingIndex = index;
        });
        return finalEndingIndex >= 0 ? blocks.slice(0, finalEndingIndex) : (blocks || []);
    }

    function strictTrimReadingTail(lang, key, blocks) {
        const terminalPatterns = strictTerminalSectionPatterns[lang] || [];
        const inlineTailPatterns = lang === 'KR'
            ? [/오늘의\s*묵상/u, /영성체\s*후\s*묵상/u, /보편\s*지향\s*기도/u, /강론/u]
            : [];
        const trimmed = [];
        for (const line of blocks || []) {
            const cleaned = strictCleanLine(line);
            if (!cleaned) continue;
            if (terminalPatterns.some(pattern => pattern.test(cleaned))) break;
            const tailIndex = inlineTailPatterns
                .map(pattern => cleaned.search(pattern))
                .filter(index => index >= 0)
                .sort((a, b) => a - b)[0];
            if (tailIndex >= 0) {
                const beforeTail = strictCleanLine(cleaned.slice(0, tailIndex));
                if (beforeTail) trimmed.push(beforeTail);
                break;
            }
            trimmed.push(line);
        }
        return trimmed;
    }

    function strictParseReadingSection(lang, key, section) {
        let blocks = strictTrimReadingTail(lang, key, strictTrimReadingAfterProclamation(strictSplitBlocks(section.lines)))
            .filter(line => !strictIsProclamationEnding(line));
        const summaryResult = strictExtractQuotedSummary(blocks);
        blocks = summaryResult.blocks;
        const citationResult = strictExtractCitation(section, blocks, lang);
        blocks = citationResult.blocks;
        const introResult = strictExtractIntro(blocks, lang, key);
        blocks = introResult.blocks;
        const japaneseIntroResult = lang === 'JP' && !introResult.intro && key !== 'gospel'
            ? extractJapaneseReadingIntro(blocks, citationResult.citation)
            : { intro: '', blocks };
        blocks = japaneseIntroResult.blocks;
        const generatedIntro = lang === 'EN' && !introResult.intro
            ? buildEnglishReadingIntro(key, citationResult.citation)
            : '';
        const introParts = strictSplitLeadingSpeaker(lang, key, introResult.intro || generatedIntro || japaneseIntroResult.intro);
        const out = [];
        const bodyGroups = strictGroupAlternativeBlocks(blocks);
        bodyGroups.forEach((group, index) => {
            if (index > 0) out.push(strictParsedLine('', 'Or:'));
            out.push(strictParsedLine('', summaryResult.summary || '', 'summary', summaryResult.summary ? '' : strictMissingSummaryAI(lang)));
            if (introParts.text) {
                out.push(strictParsedLine(introParts.sp, introParts.text, 'intro'));
            }
            const body = group.map(line => strictStripArabicVerseNumbers(line, citationResult.citation)).filter(Boolean).join('\n');
            if (body) out.push(strictParsedLine('', body, 'body'));
        });
        const result = { text: parsedLinesToText(out), lines: out };
        const finalCitation = strictReadingCitation(lang, introResult.intro, citationResult.citation);
        if (finalCitation) result[`cit_${lang.toLowerCase()}`] = finalCitation;
        return result;
    }

    function strictParsePsalmOrAcclamation(lang, key, section) {
        const blocks = strictSplitBlocks(section.lines);
        const citationResult = strictExtractCitation(section, blocks, lang, { preserveParentheses: true });
        const contentBlocks = key === 'gospel_accl'
            ? citationResult.blocks.filter(line => !isStandaloneDashText(line))
            : citationResult.blocks;
        const out = [];
        if (lang === 'VN' && key === 'psalm') {
            const parsedPsalm = parseVietnamesePsalmLines(citationResult.blocks);
            parsedPsalm.lines.forEach(line => out.push(strictParsedLine(line.sp, line.text, '', '', line.rubric)));
            attachPsalmVerseRefs('VN', citationResult.citation, out);
            const result = { text: parsedLinesToText(out), lines: out };
            const finalCitation = appendVietnameseResponseRef(citationResult.citation, parsedPsalm.responseRef);
            if (finalCitation) result.cit_vn = finalCitation;
            return result;
        }
        if (lang === 'VN' && key === 'gospel_accl') {
            parseVietnameseAcclamationLines(contentBlocks).lines.forEach(line => {
                out.push(strictParsedLine(line.sp, line.text));
            });
            const result = { text: parsedLinesToText(out), lines: out };
            if (citationResult.citation) result[`cit_${lang.toLowerCase()}`] = citationResult.citation;
            return result;
        }
        if (lang === 'KR') {
            splitKoreanMarkedLines(contentBlocks, ['◎', '○', '●']).forEach(line => {
                out.push(strictParsedLine(line.sp, strictAppendPsalmResponse(lang, key, line.sp, strictStripArabicVerseNumbers(line.text))));
            });
            if (key === 'psalm') attachPsalmVerseRefs('KR', citationResult.citation, out);
            const result = { text: parsedLinesToText(out), lines: out };
            if (citationResult.citation) result[`cit_${lang.toLowerCase()}`] = citationResult.citation;
            return result;
        }
        if (lang === 'JP' && key === 'psalm') {
            buildJapanesePsalmLines(citationResult.blocks, citationResult.citation).forEach(line => out.push(line));
            attachPsalmVerseRefs('JP', citationResult.citation, out);
            const result = { text: parsedLinesToText(out), lines: out };
            if (citationResult.citation) result.cit_jp = citationResult.citation;
            return result;
        }
        if (lang === 'JP' && key === 'gospel_accl') {
            buildJapaneseAcclamationLines(contentBlocks).forEach(line => out.push(line));
            const result = { text: parsedLinesToText(out), lines: out };
            if (citationResult.citation) result.cit_jp = citationResult.citation;
            return result;
        }
        if (lang === 'EN' && key === 'psalm') {
            return strictParseEnglishPsalm(citationResult.citation, citationResult.blocks);
        }
        if (lang === 'LA' && key === 'psalm') {
            return strictParseLatinPsalm(citationResult.citation, citationResult.blocks);
        }
        if (['EN', 'LA'].includes(lang) && key === 'gospel_accl') {
            strictParseJoinedAcclamation(lang, contentBlocks).forEach(line => out.push(line));
            const result = { text: parsedLinesToText(out), lines: out };
            if (citationResult.citation) result[`cit_${lang.toLowerCase()}`] = citationResult.citation;
            return result;
        }
        strictGroupAlternativeBlocks(contentBlocks).forEach((group, index) => {
            if (index > 0) out.push(strictParsedLine('', 'Or:'));
            group.forEach(line => {
                if (key === 'gospel_accl' && isStandaloneDashText(line)) return;
                if (/^(◎|○|●|R\.|V\.|℟\.?|℣\.?|Rit|Response|Responsorial|Alleluia|Đ\.|Ð\.|X\.|Xướng|Đáp|Ðáp)\s*[:.：]?\s*$/iu.test(line)) return;
                const split = line.match(/^(◎|○|●|R\.|V\.|℟\.?|℣\.?|Rit|Response|Responsorial|Alleluia|Đ\.|Ð\.|X\.|Xướng|Đáp|Ðáp)\s*[:.：]?\s*(.+)$/iu);
                if (split) out.push(strictParsedLine(split[1], strictAppendPsalmResponse(lang, key, split[1], split[2])));
                else out.push(strictParsedLine('', line));
            });
        });
        if (key === 'psalm') attachPsalmVerseRefs(lang, citationResult.citation, out);
        const result = { text: parsedLinesToText(out), lines: out };
        if (citationResult.citation) result[`cit_${lang.toLowerCase()}`] = citationResult.citation;
        return result;
    }

    function strictExpandKoreanPrayerEnding(key, text) {
        let out = String(text || '').replace(/\s+/g, ' ').trim();
        if (key === 'collect') {
            out = out.replace(/성부와\s*성령[과괴].*(?:…+|\.{2,}|⋯+)[,.;]?\s*$/u, '성부와 성령과 함께 천주로서 영원히 살아 계시며 다스리시는 성자 우리 주 예수 그리스도를 통하여 비나이다.');
            out = out.replace(/성자께서는.*(?:…+|\.{2,}|⋯+)[,.;]?\s*$/u, '성자께서는 성부와 성령과 함께 천주로서 영원히 살아 계시며 다스리시나이다.');
            out = out.replace(/주님께서는.*(?:…+|\.{2,}|⋯+)[,.;]?\s*$/u, '주님께서는 성부와 성령과 함께 천주로서 영원히 살아 계시며 다스리시나이다.');
            out = out.replace(/성부와\s*성령[과괴]\s*[,.;]?\s*$/u, '성부와 성령과 함께 천주로서 영원히 살아 계시며 다스리시는 성자 우리 주 예수 그리스도를 통하여 비나이다.');
            out = out.replace(/성자께서는\s*[,.;]?\s*$/u, '성자께서는 성부와 성령과 함께 천주로서 영원히 살아 계시며 다스리시나이다.');
            out = out.replace(/주님께서는\s*[,.;]?\s*$/u, '주님께서는 성부와 성령과 함께 천주로서 영원히 살아 계시며 다스리시나이다.');
        } else if (key === 'prayer_offerings' || key === 'prayer_after') {
            out = out.replace(/우리\s*주.*(?:…+|\.{2,}|⋯+)[,.;]?\s*$/u, '우리 주 그리스도를 통하여 비나이다.');
            out = out.replace(/성자께서는.*(?:…+|\.{2,}|⋯+)[,.;]?\s*$/u, source => {
                const toSon = /성자(?:이신|예수|그리스도|주님)|주\s*예수/u.test(out.slice(0, Math.max(0, out.length - source.length)));
                return toSon ? '성자께서는 영원히 살아 계시며 다스리시나이다.' : '성자께서는 성부와 함께 영원히 살아 계시며 다스리시나이다.';
            });
            out = out.replace(/우리\s*주(?:\s*그리스도를\s*통하여)?\s*[,.;]?\s*$/u, '우리 주 그리스도를 통하여 비나이다.');
        }
        strictPrayerEndingFormulas('KR', key).forEach(formula => {
            const withoutPeriod = formula.replace(/\.$/, '');
            if (out.endsWith(withoutPeriod)) out = `${out.slice(0, -withoutPeriod.length)}${formula}`;
        });
        return out;
    }

    function strictPrayerLooksDirectedToSon(text) {
        const opening = strictCleanLine(text).slice(0, 180);
        return /^(?:O\s+)?(?:Lord\s+Jesus|Jesus|Christ|Lord,\s*Jesus|O\s+Christ|Son of God|Lạy\s+Chúa\s+Gi[êe]su|Lạy\s+Đức\s+Gi[êe]su|주\s*예수|예수님|그리스도님|성자|主イエス|キリスト|D[oó]mine\s+Iesu|Iesu|Christe|Fili\s+Dei)/iu.test(opening);
    }

    function strictExpandVietnamesePrayerEnding(key, text) {
        let out = String(text || '').replace(/\s+/g, ' ').trim();
        if (key === 'collect') {
            out = out.replace(/Chúng con cầu xin\s*(?:…+|\.{2,}|⋯+)\.?\s*$/iu, 'Chúng con cầu xin nhờ Đức Giê-su Ki-tô Con Chúa, Thiên Chúa và là Chúa chúng con, Người hằng sống và hiển trị cùng Chúa, hiệp nhất với Chúa Thánh Thần đến muôn thuở muôn đời.');
            out = out.replace(/Người là Thiên Chúa\s*(?:…+|\.{2,}|⋯+)\.?\s*$/iu, 'Người là Thiên Chúa, Người hằng sống và hiển trị cùng Chúa, hiệp nhất với Chúa Thánh Thần đến muôn thuở muôn đời.');
            out = out.replace(/Chúa hằng sống\s*(?:…+|\.{2,}|⋯+)\.?\s*$/iu, 'Chúa hằng sống và hiển trị cùng Thiên Chúa Cha, hiệp nhất với Chúa Thánh Thần đến muôn thuở muôn đời.');
            out = out.replace(/Chúng con cầu xin\s*\.?\s*$/iu, 'Chúng con cầu xin nhờ Đức Giê-su Ki-tô Con Chúa, Thiên Chúa và là Chúa chúng con, Người hằng sống và hiển trị cùng Chúa, hiệp nhất với Chúa Thánh Thần đến muôn thuở muôn đời.');
            out = out.replace(/Người là Thiên Chúa\s*\.?\s*$/iu, 'Người là Thiên Chúa, Người hằng sống và hiển trị cùng Chúa, hiệp nhất với Chúa Thánh Thần đến muôn thuở muôn đời.');
            out = out.replace(/Chúa hằng sống\s*\.?\s*$/iu, 'Chúa hằng sống và hiển trị cùng Thiên Chúa Cha, hiệp nhất với Chúa Thánh Thần đến muôn thuở muôn đời.');
        } else if (key === 'prayer_offerings' || key === 'prayer_after') {
            out = out.replace(/Chúng con cầu xin\s*(?:…+|\.{2,}|⋯+)\.?\s*$/iu, 'Chúng con cầu xin nhờ Đức Ki-tô, Chúa chúng con.');
            out = out.replace(/Chúa là Thiên Chúa,\s*(?:…+|\.{2,}|⋯+)\.?\s*$/iu, 'Chúa là Thiên Chúa, hằng sống và hiển trị muôn đời.');
            out = out.replace(/Chúa hằng sống\s*(?:…+|\.{2,}|⋯+)\.?\s*$/iu, 'Chúa hằng sống và hiển trị muôn đời.');
            out = out.replace(/Người hằng sống\s*(?:…+|\.{2,}|⋯+)\.?\s*$/iu, 'Người hằng sống và hiển trị muôn đời.');
            out = out.replace(/Chúng con cầu xin\s*\.?\s*$/iu, 'Chúng con cầu xin nhờ Đức Ki-tô, Chúa chúng con.');
            out = out.replace(/Chúa là Thiên Chúa,?\s*\.?\s*$/iu, 'Chúa là Thiên Chúa, hằng sống và hiển trị muôn đời.');
            out = out.replace(/Chúa hằng sống\s*\.?\s*$/iu, 'Chúa hằng sống và hiển trị muôn đời.');
            out = out.replace(/Người hằng sống\s*\.?\s*$/iu, 'Người hằng sống và hiển trị muôn đời.');
        }
        strictPrayerEndingFormulas('VN', key).forEach(formula => {
            const withoutPeriod = formula.replace(/\.$/, '');
            if (out.endsWith(withoutPeriod)) out = `${out.slice(0, -withoutPeriod.length)}${formula}`;
        });
        return out;
    }

    function strictExpandEnglishPrayerEnding(key, text) {
        let out = String(text || '').replace(/\s+/g, ' ').trim();
        if (key === 'collect') {
            out = out.replace(/Through our Lord Jesus Christ,?\s*(?:…+|\.{2,}|⋯+)\.?\s*$/iu, 'Through our Lord Jesus Christ, your Son, who lives and reigns with you in the unity of the Holy Spirit, God, for ever and ever.');
            out = out.replace(/Through our Lord Jesus Christ, your Son,\s*who lives and reigns with you in the unity of the Holy Spirit,\s*(?:one\s+)?God,\s*for ever and ever\.?\s*$/iu, 'Through our Lord Jesus Christ, your Son, who lives and reigns with you in the unity of the Holy Spirit, God, for ever and ever.');
            out = out.replace(/Through our Lord Jesus Christ\s*\.?\s*$/iu, 'Through our Lord Jesus Christ, your Son, who lives and reigns with you in the unity of the Holy Spirit, God, for ever and ever.');
            out = out.replace(/Who\s+lives?\s+and\s+reigns?.*(?:…+|\.{2,}|⋯+)\.?\s*$/iu, () =>
                strictPrayerLooksDirectedToSon(out)
                    ? 'Who live and reign with God the Father in the unity of the Holy Spirit, God, for ever and ever.'
                    : 'Who lives and reigns with you in the unity of the Holy Spirit, God, for ever and ever.'
            );
        } else if (key === 'prayer_offerings' || key === 'prayer_after') {
            out = out.replace(/Through Christ our Lord,?\s*(?:…+|\.{2,}|⋯+)\.?\s*$/iu, 'Through Christ our Lord.');
            out = out.replace(/Through Christ(?: our Lord)?\s*\.?\s*$/iu, 'Through Christ our Lord.');
            out = out.replace(/Who\s+lives?\s+and\s+reigns?.*(?:…+|\.{2,}|⋯+)\.?\s*$/iu, () =>
                strictPrayerLooksDirectedToSon(out)
                    ? 'Who live and reign for ever and ever.'
                    : 'Who lives and reigns for ever and ever.'
            );
        }
        return out;
    }

    function strictExpandLatinPrayerEnding(key, text) {
        let out = String(text || '').replace(/\s+/g, ' ').trim();
        if (key === 'collect') {
            out = out.replace(/Per D[oó]minum(?:\s*(?:…+|\.{2,}|⋯+))?\.?\s*$/iu, 'Per Dóminum nostrum Iesum Christum Fílium tuum, qui tecum vivit et regnat in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum.');
            out = out.replace(/Qui tecum(?:\s*(?:…+|\.{2,}|⋯+))?\.?\s*$/iu, 'Qui tecum vivit et regnat in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum.');
            out = out.replace(/Qui vivis(?:\s*(?:…+|\.{2,}|⋯+))?\.?\s*$/iu, 'Qui vivis et regnas cum Deo Patre in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum.');
        } else if (key === 'prayer_offerings' || key === 'prayer_after') {
            out = out.replace(/Per Christum(?:\s+D[oó]minum nostrum)?(?:\s*(?:…+|\.{2,}|⋯+))?\.?\s*$/iu, 'Per Christum Dóminum nostrum.');
            out = out.replace(/Qui vivit et regnat in s[ǽæ]cula s[ǽæ]cul[oó]rum\.?\s*$/iu, 'Qui vivit et regnat in sǽcula sæculórum.');
            out = out.replace(/Qui vivis et regnas in s[ǽæ]cula s[ǽæ]cul[oó]rum\.?\s*$/iu, 'Qui vivis et regnas in sǽcula sæculórum.');
        }
        return out;
    }

    function strictExpandJapanesePrayerEnding(key, text) {
        let out = String(text || '').replace(/\s+/g, ' ').trim();
        if (key === 'collect') {
            out = out.replace(/聖霊の交わりの中で、あなたとともに.*(?:…+|\.{2,}|⋯+)\.?\s*$/u, '聖霊の交わりの中で、あなたとともに世々に生き、支配しておられる御子、わたしたちの主イエス・キリストによって。');
            out = out.replace(/御子は聖霊の交わりの中で、あなたとともに.*(?:…+|\.{2,}|⋯+)\.?\s*$/u, '御子は聖霊の交わりの中で、あなたとともに世々に生き、支配しておられる。おん名によって。');
            out = out.replace(/主は聖霊の交わりの中で、父である神とともに.*(?:…+|\.{2,}|⋯+)\.?\s*$/u, '主は聖霊の交わりの中で、父である神とともに世々に生き、支配しておられる。おん名によって。');
        } else if (key === 'prayer_offerings' || key === 'prayer_after') {
            out = out.replace(/わたしたちの主(?:イエス・キリスト)?によって.*(?:…+|\.{2,}|⋯+)\.?\s*$/u, 'わたしたちの主イエス・キリストによって。');
            out = out.replace(/世々とこしえに生き、治められる御子.*(?:…+|\.{2,}|⋯+)\.?\s*$/u, '世々とこしえに生き、治められる御子によって。');
            out = out.replace(/世々とこしえに生き、治められる主(?:キリスト)?.*(?:…+|\.{2,}|⋯+)\.?\s*$/u, '世々とこしえに生き、治められる主キリストによって。');
        }
        return out;
    }

    function strictExpandPrayerEnding(lang, key, text) {
        if (lang === 'KR') return strictExpandKoreanPrayerEnding(key, text);
        if (lang === 'VN') return strictExpandVietnamesePrayerEnding(key, text);
        if (lang === 'EN') return strictExpandEnglishPrayerEnding(key, text);
        if (lang === 'JP') return strictExpandJapanesePrayerEnding(key, text);
        if (lang === 'LA') return strictExpandLatinPrayerEnding(key, text);
        return text;
    }

    function strictPrayerEndingFormulas(lang, key) {
        const formulas = {
            KR: {
                collect: [
                    '성부와 성령과 함께 천주로서 영원히 살아 계시며 다스리시는 성자 우리 주 예수 그리스도를 통하여 비나이다.',
                    '성자께서는 성부와 성령과 함께 천주로서 영원히 살아 계시며 다스리시나이다.',
                    '주님께서는 성부와 성령과 함께 천주로서 영원히 살아 계시며 다스리시나이다.'
                ],
                prayer_offerings: [
                    '우리 주 그리스도를 통하여 비나이다.',
                    '성자께서는 성부와 함께 영원히 살아 계시며 다스리시나이다.',
                    '성자께서는 영원히 살아 계시며 다스리시나이다.'
                ],
                prayer_after: [
                    '우리 주 그리스도를 통하여 비나이다.',
                    '성자께서는 성부와 함께 영원히 살아 계시며 다스리시나이다.',
                    '성자께서는 영원히 살아 계시며 다스리시나이다.'
                ]
            },
            VN: {
                collect: [
                    'Chúng con cầu xin nhờ Đức Giê-su Ki-tô Con Chúa, Thiên Chúa và là Chúa chúng con, Người hằng sống và hiển trị cùng Chúa, hiệp nhất với Chúa Thánh Thần đến muôn thuở muôn đời.',
                    'Người là Thiên Chúa hằng sống và hiển trị cùng Chúa, hiệp nhất với Chúa Thánh Thần đến muôn thuở muôn đời.',
                    'Người là Thiên Chúa, Người hằng sống và hiển trị cùng Chúa, hiệp nhất với Chúa Thánh Thần đến muôn thuở muôn đời.',
                    'Chúa hằng sống và hiển trị cùng Thiên Chúa Cha, hiệp nhất với Chúa Thánh Thần đến muôn thuở muôn đời.',
                    'Chúa Ki-tô là Thiên Chúa hằng sống và hiển trị cùng Chúa hiệp nhất với Chúa Thánh Thần đến muôn thuở muôn đời.'
                ],
                prayer_offerings: [
                    'Chúng con cầu xin nhờ Đức Ki-tô, Chúa chúng con.',
                    'Chúa là Thiên Chúa, hằng sống và hiển trị muôn đời.',
                    'Chúa là Đấng hằng sống và hiển trị muôn đời.',
                    'Chúa hằng sống và hiển trị muôn đời.',
                    'Người hằng sống và hiển trị muôn đời.',
                    'Đấng hằng sống và hiển trị muôn đời.',
                    'Ðấng hằng sống và hiển trị muôn đời.'
                ],
                prayer_after: [
                    'Chúng con cầu xin nhờ Đức Ki-tô, Chúa chúng con.',
                    'Chúa là Thiên Chúa, hằng sống và hiển trị muôn đời.',
                    'Chúa là Đấng hằng sống và hiển trị muôn đời.',
                    'Chúa hằng sống và hiển trị muôn đời.',
                    'Người hằng sống và hiển trị muôn đời.',
                    'Đấng hằng sống và hiển trị muôn đời.',
                    'Ðấng hằng sống và hiển trị muôn đời.'
                ]
            },
            EN: {
                collect: [
                    'Through our Lord Jesus Christ, your Son, who lives and reigns with you in the unity of the Holy Spirit, God, for ever and ever.',
                    'Who lives and reigns with you in the unity of the Holy Spirit, God, for ever and ever.',
                    'Who live and reign with God the Father in the unity of the Holy Spirit, God, for ever and ever.'
                ],
                prayer_offerings: [
                    'Through Christ our Lord.',
                    'Who lives and reigns for ever and ever.',
                    'Who live and reign for ever and ever.'
                ],
                prayer_after: [
                    'Through Christ our Lord.',
                    'Who lives and reigns for ever and ever.',
                    'Who live and reign for ever and ever.'
                ]
            },
            JP: {
                collect: [
                    '聖霊の交わりの中で、あなたとともに世々に生き、支配しておられる御子、わたしたちの主イエス・キリストによって。',
                    '御子は聖霊の交わりの中で、あなたとともに世々に生き、支配しておられる。おん名によって。',
                    '主は聖霊の交わりの中で、父である神とともに世々に生き、支配しておられる。おん名によって。'
                ],
                prayer_offerings: [
                    'わたしたちの主イエス・キリストによって。',
                    '世々とこしえに生き、治められる御子によって。',
                    '世々とこしえに生き、治められる主キリストによって。'
                ],
                prayer_after: [
                    'わたしたちの主イエス・キリストによって。',
                    '世々とこしえに生き、治められる御子によって。',
                    '世々とこしえに生き、治められる主キリストによって。'
                ]
            },
            LA: {
                collect: [
                    'Per Dóminum nostrum Iesum Christum Fílium tuum, qui tecum vivit et regnat in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum.',
                    'Qui tecum vivit et regnat in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum.',
                    'Qui vivis et regnas cum Deo Patre in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum.'
                ],
                prayer_offerings: [
                    'Per Christum Dóminum nostrum.',
                    'Qui vivit et regnat in sǽcula sæculórum.',
                    'Qui vivis et regnas in sǽcula sæculórum.'
                ],
                prayer_after: [
                    'Per Christum Dóminum nostrum.',
                    'Qui vivit et regnat in sǽcula sæculórum.',
                    'Qui vivis et regnas in sǽcula sæculórum.'
                ]
            }
        };
        return (formulas[lang] && formulas[lang][key]) || [];
    }

    const localizedPrayerConclusionFormulas = Object.freeze({
        collect: {
            through_son: {
                KR: '성부와 성령과 함께 천주로서 영원히 살아 계시며 다스리시는 성자 우리 주 예수 그리스도를 통하여 비나이다.',
                VN: 'Chúng con cầu xin nhờ Đức Giê-su Ki-tô Con Chúa, Thiên Chúa và là Chúa chúng con, Người hằng sống và hiển trị cùng Chúa, hiệp nhất với Chúa Thánh Thần đến muôn thuở muôn đời.',
                EN: 'Through our Lord Jesus Christ, your Son, who lives and reigns with you in the unity of the Holy Spirit, God, for ever and ever.',
                JP: '聖霊の交わりの中で、あなたとともに世々に生き、支配しておられる御子、わたしたちの主イエス・キリストによって。',
                LA: 'Per Dóminum nostrum Iesum Christum Fílium tuum, qui tecum vivit et regnat in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum.'
            },
            relative_son: {
                KR: '성자께서는 성부와 성령과 함께 천주로서 영원히 살아 계시며 다스리시나이다.',
                VN: 'Người là Thiên Chúa hằng sống và hiển trị cùng Chúa, hiệp nhất với Chúa Thánh Thần đến muôn thuở muôn đời.',
                EN: 'Who lives and reigns with you in the unity of the Holy Spirit, God, for ever and ever.',
                JP: '御子は聖霊の交わりの中で、あなたとともに世々に生き、支配しておられる。おん名によって。',
                LA: 'Qui tecum vivit et regnat in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum.'
            },
            addressed_son: {
                KR: '주님께서는 성부와 성령과 함께 천주로서 영원히 살아 계시며 다스리시나이다.',
                VN: 'Chúa hằng sống và hiển trị cùng Thiên Chúa Cha, hiệp nhất với Chúa Thánh Thần đến muôn thuở muôn đời.',
                EN: 'Who live and reign with God the Father in the unity of the Holy Spirit, God, for ever and ever.',
                JP: '主は聖霊の交わりの中で、父である神とともに世々に生き、支配しておられる。おん名によって。',
                LA: 'Qui vivis et regnas cum Deo Patre in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum.'
            }
        },
        short: {
            through_son: {
                KR: '우리 주 그리스도를 통하여 비나이다.',
                VN: 'Chúng con cầu xin nhờ Đức Ki-tô, Chúa chúng con.',
                EN: 'Through Christ our Lord.',
                JP: 'わたしたちの主イエス・キリストによって。',
                LA: 'Per Christum Dóminum nostrum.'
            },
            relative_son: {
                KR: '성자께서는 성부와 함께 영원히 살아 계시며 다스리시나이다.',
                VN: 'Người hằng sống và hiển trị muôn đời.',
                EN: 'Who lives and reigns for ever and ever.',
                JP: '世々とこしえに生き、治められる御子によって。',
                LA: 'Qui vivit et regnat in sǽcula sæculórum.'
            },
            addressed_son: {
                KR: '성자께서는 영원히 살아 계시며 다스리시나이다.',
                VN: 'Chúa hằng sống và hiển trị muôn đời.',
                EN: 'Who live and reign for ever and ever.',
                JP: '世々とこしえに生き、治められる主キリストによって。',
                LA: 'Qui vivis et regnas in sǽcula sæculórum.'
            }
        }
    });

    function prayerConclusionStyle(lang, key, text) {
        const conclusion = prayerConclusionEndingForText(lang, key, text);
        if (!conclusion) return '';
        if (lang === 'KR') {
            if (/^(?:성부와|우리\s*주\s*그리스도를)/u.test(conclusion)) return 'through_son';
            if (/^주님께서는/u.test(conclusion)) return 'addressed_son';
            if (!/^성자께서는/u.test(conclusion)) return '';
            return key === 'collect' || /성부와\s*함께/u.test(conclusion) ? 'relative_son' : 'addressed_son';
        }
        if (lang === 'VN') {
            if (/^Chúng con cầu xin/iu.test(conclusion)) return 'through_son';
            if (/^Chúa\b/iu.test(conclusion) && /(?:Thiên Chúa Cha|hiển trị muôn đời)/iu.test(conclusion)) return 'addressed_son';
            return /^(?:Người|Đấng|Ðấng|Con Một Chúa|(?:Đức|Ðức) Ki-tô|Chúa Ki-tô|Chúa\s+là\s+Thiên Chúa)/iu.test(conclusion) ? 'relative_son' : '';
        }
        if (lang === 'EN') {
            if (/^Through\b/iu.test(conclusion)) return 'through_son';
            if (/^Who live\b/iu.test(conclusion)) return 'addressed_son';
            return /^Who lives\b/iu.test(conclusion) ? 'relative_son' : '';
        }
        if (lang === 'JP') {
            if (/^(?:聖霊の交わり|わたしたちの主)/u.test(conclusion)) return 'through_son';
            if (/^主は|主キリスト/u.test(conclusion)) return 'addressed_son';
            return /御子/u.test(conclusion) ? 'relative_son' : '';
        }
        if (lang === 'LA') {
            if (/^Per\b/iu.test(conclusion)) return 'through_son';
            if (/^Qui vivis\b/iu.test(conclusion)) return 'addressed_son';
            return /^Qui (?:tecum )?vivit\b/iu.test(conclusion) ? 'relative_son' : '';
        }
        return '';
    }

    function localizedPrayerConclusionFormula(lang, key, style) {
        const group = key === 'collect' ? localizedPrayerConclusionFormulas.collect : localizedPrayerConclusionFormulas.short;
        return (group[style] && group[style][lang]) || '';
    }

    function strictPrayerParagraphs(lang, key, blocks) {
        let text = strictCleanLine(blocks.join(' '));
        text = strictExpandPrayerEnding(lang, key, text);
        const ending = prayerConclusionEndingForText(lang, key, text);
        if (!ending) return text ? [text] : [];
        const body = text.slice(0, text.length - ending.length).trim();
        return [body, ending].filter(Boolean);
    }

    function strictPrayerConclusionPattern(lang, key) {
        if (lang === 'VN' && key === 'collect') {
            return /((?:Chúng con cầu xin nhờ Đức Gi[êe]-su Ki-tô[\s\S]*?|(?:Chúa|Đức|Ðức)\s+Ki-tô\s+là\s+Thiên Chúa\s+|(?:Người|Chúa)(?:\s+là\s+Thiên Chúa,?\s*)?)hằng sống và hiển trị[\s\S]*?muôn (?:thuở\s+)?muôn đời\.)$/iu;
        }
        if (lang === 'VN' && (key === 'prayer_offerings' || key === 'prayer_after')) {
            return /((?:(?:Con Một Chúa|(?:Đức|Ðức)\s+Ki-tô),?\s*)?(?:Chúa|Người|Đấng|Ðấng)(?:\s+là\s+(?:Thiên Chúa|Đấng))?,?\s*hằng sống và hiển trị muôn đời\.|Chúng con cầu xin nhờ Đức Ki-tô, Chúa chúng con\.)$/iu;
        }
        return null;
    }

    function prayerConclusionEndingForText(lang, key, text) {
        if (!strictPrayerKeys.has(key)) return '';
        const expanded = strictExpandPrayerEnding(lang, key, text);
        const pattern = strictPrayerConclusionPattern(lang, key);
        const matched = pattern && expanded.match(pattern);
        if (matched) return strictCleanLine(matched[1]);
        return strictPrayerEndingFormulas(lang, key).find(item => expanded.endsWith(item)) || '';
    }

    function splitPrayerParsedLineByConclusion(parsed, lang, key) {
        const text = cleanNodeText(parsed && parsed.text);
        if (!text || isAlternativeText(text) || isPrayerOpenerText(text) || isPrayerAmenText(text)) return [parsed];
        const expanded = strictExpandPrayerEnding(lang, key, text);
        const ending = prayerConclusionEndingForText(lang, key, expanded);
        if (!ending) return [Object.assign({}, parsed, { text: expanded })];
        const body = expanded.slice(0, expanded.length - ending.length).trim();
        const output = [];
        if (body) output.push(Object.assign({}, parsed, { text: body, role: parsed.role || 'body' }));
        output.push(Object.assign({}, parsed, { sp: '', text: ending, role: 'conclusion' }));
        return output;
    }

    function normalizePrayerParsedLinesBeforeApply(lower, baseId, parsedLines) {
        if (!strictPrayerKeys.has(baseId) || !Array.isArray(parsedLines)) return parsedLines;
        const lang = langCodeFromLowerKey(lower);
        const splitLines = parsedLines.flatMap(parsed => {
            return splitPrayerParsedLineByConclusion(parsed, lang, baseId);
        });
        const output = [];
        let body = null;
        const flushBody = () => {
            if (!body) return;
            body.text = strictCleanLine(body.text);
            if (body.ai) body.ai = strictCleanLine(body.ai);
            if (body.text || body.ai) output.push(body);
            body = null;
        };
        splitLines.forEach(line => {
            if (!line) return;
            const text = cleanNodeText(line.text);
            const isBoundary = !text || line.role === 'conclusion' || line.rubric
                || isAlternativeText(text) || isPrayerOpenerText(text) || isPrayerAmenText(text);
            if (isBoundary) {
                flushBody();
                output.push(line);
                return;
            }
            if (!body) {
                body = Object.assign({}, line, { sp: '', text: '', ai: '', role: 'body' });
            }
            body.text = [body.text, line.text].filter(Boolean).join(' ');
            body.ai = [body.ai, line.ai].filter(Boolean).join(' ');
        });
        flushBody();
        return output;
    }

    function strictAntiphonParagraphs(lang, key, blocks) {
        const shouldJoin = ['entrance', 'communion'].includes(key);
        if (!shouldJoin) return blocks.map(line => strictCleanLine(line)).filter(Boolean);
        const joined = strictCleanLine(blocks.join(' '));
        const text = lang === 'EN' && key === 'entrance'
            ? removeEnglishEntranceGloriaInstruction(joined)
            : joined;
        return text ? [text] : [];
    }

    function strictParsePrayerOrAntiphon(lang, key, section) {
        const sourceBlocks = strictSplitBlocks(section.lines);
        const blocks = lang === 'VN'
            ? cleanVietnameseSectionSourceLines(key, sourceBlocks)
            : sourceBlocks;
        const parsed = [];
        const optionCits = [];
        const usesOptionCitations = ['entrance', 'communion'].includes(key);
        strictGroupAlternativeBlocks(blocks).forEach((group, index) => {
            if (index > 0) parsed.push(strictParsedLine('', 'Or:'));
            const citationResult = usesOptionCitations ? strictExtractCitation(section, group, lang, { preserveParentheses: true, preferBlockCitation: true }) : { citation: '', blocks: group };
            if (usesOptionCitations) {
                optionCits.push(citationResult.citation ? { [`cit_${lang.toLowerCase()}`]: citationResult.citation } : {});
            }
            const paragraphs = strictPrayerKeys.has(key)
                ? strictPrayerParagraphs(lang, key, citationResult.blocks)
                : strictAntiphonParagraphs(lang, key, citationResult.blocks);
            paragraphs.forEach(part => parsed.push(strictParsedLine('', part)));
        });
        const result = { text: parsedLinesToText(parsed), lines: parsed };
        if (optionCits.length) {
            result.optionCits = optionCits;
            result[`cit_${lang.toLowerCase()}`] = optionCits.map(item => item[`cit_${lang.toLowerCase()}`]).find(Boolean) || '';
        }
        return result;
    }

    function ibreviaryIsDelimiter(line) {
        return /^\*+(?:\s*\*)*$/.test(strictCleanLine(line)) || /^-?\s*Menu\s*-?$/i.test(strictCleanLine(line));
    }

    function decodeHtmlEntities(value) {
        const doc = parseHtml(`<textarea>${String(value || '')}</textarea>`);
        const node = doc.querySelector('textarea');
        return node ? node.value : String(value || '');
    }

    function ibreviaryHtmlLines(source) {
        const html = String(source || '');
        if (!/<span[^>]+class=["'][^"']*(?:titolo|sezione|citazione|rubrica)[^"']*["']/i.test(html)) return null;
        const bodyMatch = html.match(/<div id=["']contenuto["'][\s\S]*?<\/body>/i);
        const body = bodyMatch ? bodyMatch[0] : html;
        const text = body
            .replace(/<script[\s\S]*?<\/script>/gi, '')
            .replace(/<style[\s\S]*?<\/style>/gi, '')
            .replace(/<span[^>]+class=["'][^"']*titolo[^"']*["'][^>]*>([\s\S]*?)<\/span>\s*<br\s*\/?>\s*<span[^>]+class=["'][^"']*citazione[^"']*["'][^>]*>([\s\S]*?)<\/span>/gi, '\n$1\n$2\n')
            .replace(/<span[^>]+class=["'][^"']*titolo[^"']*["'][^>]*>([\s\S]*?)<\/span>/gi, '\n$1\n')
            .replace(/<span[^>]+class=["'][^"']*sezione[^"']*["'][^>]*>([\s\S]*?)<\/span>/gi, '\n$1\n')
            .replace(/<span[^>]+class=["'][^"']*citazione[^"']*["'][^>]*>([\s\S]*?)<\/span>/gi, '\n$1\n')
            .replace(/<span[^>]+class=["'][^"']*rubrica[^"']*["'][^>]*>([\s\S]*?)<\/span>/gi, '\n$1\n')
            .replace(/<hr\s*\/?>/gi, '\n* * *\n')
            .replace(/<br\s*\/?>/gi, '\n')
            .replace(/<\/p>/gi, '\n')
            .replace(/<[^>]+>/g, '\n');
        return ibreviaryNormalizeLines(decodeHtmlEntities(text)
            .split(/\r?\n/)
            .map(cleanMarkdownLine)
            .filter(Boolean));
    }

    function ibreviaryNormalizeLines(lines) {
        const normalized = [];
        for (let i = 0; i < (lines || []).length; i += 1) {
            const line = strictCleanLine(lines[i]);
            const next = strictCleanLine(lines[i + 1]);
            if (/^[A-ZÁÉÍÓÚÝÆŒ]$/u.test(line) && next && /^[a-záéíóúýæœàèìòù]/u.test(next)) {
                normalized.push(`${line}${next}`);
                i += 1;
                continue;
            }
            if (/^(?:R\.|V\.|℟\.|℣\.|Rit)\s*(?:\([^)]+\))?$/iu.test(line) && next && !ibreviaryIsDelimiter(next) && !strictLooksLikeCitation(next, 'LA')) {
                normalized.push(`${line} ${next}`);
                i += 1;
                continue;
            }
            normalized.push(line);
        }
        return normalized;
    }

    function ibreviaryLines(source) {
        return ibreviaryNormalizeLines(ibreviaryHtmlLines(source) || strictSourceLines(source))
            .map(strictCleanLine)
            .filter(Boolean)
            .filter(line => !/^(iBreviary|Breviary|Reading|Readings|Prayers|Missal|More|Breviarium|Lectionis|Orationis|Missale|Cetera)$/i.test(line))
            .filter(line => !/^window\.dataLayer|^function gtag|^gtag\(/i.test(line));
    }

    function ibreviaryMatches(line, patterns) {
        const text = strictCleanLine(line);
        return (patterns || []).some(pattern => pattern.test(text));
    }

    function ibreviaryFindIndex(lines, patterns, from = 0) {
        for (let i = Math.max(0, from); i < lines.length; i += 1) {
            if (ibreviaryMatches(lines[i], patterns)) return i;
        }
        return -1;
    }

    function ibreviaryBlock(lines, startPatterns, endPatterns = []) {
        const start = ibreviaryFindIndex(lines, startPatterns);
        if (start < 0) return { heading: '', lines: [] };
        let end = lines.length;
        for (let i = start + 1; i < lines.length; i += 1) {
            if (ibreviaryIsDelimiter(lines[i]) || ibreviaryMatches(lines[i], endPatterns)) {
                end = i;
                break;
            }
        }
        return {
            heading: lines[start],
            lines: lines.slice(start + 1, end).filter(line => !ibreviaryIsDelimiter(line))
        };
    }

    function ibreviaryAntiphonEndIndex(lines, lang) {
        let lastCitationIndex = -1;
        (lines || []).forEach((line, index) => {
            const alternative = strictAlternativeMatch(line);
            const citationCandidate = alternative && alternative.rest ? alternative.rest : line;
            if (strictLooksLikeCitation(citationCandidate, lang)) lastCitationIndex = index;
        });
        if (lastCitationIndex < 0) return -1;
        for (let i = lastCitationIndex + 1; i < lines.length - 1; i += 1) {
            const text = strictCleanLine(lines[i]);
            if (/[.!?。]$/.test(text)) return i + 1;
        }
        return -1;
    }

    function ibreviarySplitUnlabelledAntiphonAndPrayer(lines, lang) {
        const boundary = ibreviaryAntiphonEndIndex(lines, lang);
        if (boundary <= 0 || boundary >= lines.length) {
            return { antiphon: [], prayer: [] };
        }
        return {
            antiphon: lines.slice(0, boundary).filter(line => !ibreviaryIsDelimiter(line)),
            prayer: lines.slice(boundary).filter(line => !ibreviaryIsDelimiter(line))
        };
    }

    function ibreviaryPrepareAntiphonChoiceLines(lines) {
        const prepared = [];
        let hasChoiceContent = false;
        (lines || []).forEach(rawLine => {
            const line = strictCleanLine(rawLine);
            if (!line) return;
            if (/^\[[^\]]+\]$/u.test(line)) {
                if (hasChoiceContent && !strictIsAlternativeLine(prepared[prepared.length - 1] || '')) prepared.push('Or:');
                return;
            }
            prepared.push(line);
            if (!ibreviaryIsDelimiter(line) && !strictIsAlternativeLine(line)) hasChoiceContent = true;
        });
        return prepared;
    }

    function ibreviaryPrayerChoiceTokens(line, lang) {
        let text = strictCleanLine(line);
        const terminalPattern = lang === 'LA'
            ? /\bPr(?:æ|ae)fatio\b/iu
            : /\bPreface\b/iu;
        const terminalIndex = text.search(terminalPattern);
        const terminalFound = terminalIndex >= 0;
        if (terminalFound) text = strictCleanLine(text.slice(0, terminalIndex));
        text = text.replace(/(\[(?:Common\s+of\s+[^\]]+|Schema\s+\d+)\])/giu, '\n$1\n');
        if (lang === 'LA') text = text.replace(/\b(Pro\s+(?:doctoribus|pastoribus))\b/giu, '\n$1\n');
        return {
            tokens: text.split(/\n+/).map(strictCleanLine).filter(Boolean),
            terminalFound
        };
    }

    function ibreviaryIsPrayerChoiceRubric(line, lang) {
        const text = strictCleanLine(line);
        return /^\[(?:Common\s+of\s+[^\]]+|Schema\s+\d+)\]$/iu.test(text)
            || (lang === 'LA' && /^Pro\s+(?:doctoribus|pastoribus)$/iu.test(text));
    }

    function ibreviaryPreparePrayerChoiceLines(lines, lang) {
        const prepared = [];
        let currentHasContent = false;
        for (const rawLine of lines || []) {
            const split = ibreviaryPrayerChoiceTokens(rawLine, lang);
            for (const token of split.tokens) {
                const alternative = strictAlternativeMatch(token);
                if (ibreviaryIsPrayerChoiceRubric(token, lang) || alternative) {
                    if (currentHasContent && !strictIsAlternativeLine(prepared[prepared.length - 1] || '')) prepared.push('Or:');
                    currentHasContent = false;
                    if (alternative && alternative.rest) {
                        prepared.push(alternative.rest);
                        currentHasContent = true;
                    }
                    continue;
                }
                if (ibreviaryIsDelimiter(token)) continue;
                prepared.push(token);
                currentHasContent = true;
            }
            if (split.terminalFound) break;
        }
        return prepared;
    }

    function ibreviaryPreferProperReadings(lines) {
        const source = lines || [];
        const start = source.findIndex(line => /^(Proper readings|Readings proper)$/i.test(strictCleanLine(line)));
        if (start < 0) return source;
        const end = source.findIndex((line, index) =>
            index > start && /^(Readings of the day|Alternative readings|Common readings|Proper prayers|Prayers)$/i.test(strictCleanLine(line))
        );
        return source.slice(start + 1, end > start ? end : source.length);
    }

    const ibreviaryLabels = {
        EN: {
            entrance: [/^Antiphon$/i],
            collect: [/^Collect$/i],
            offerings: [/^Prayer over the Offerings$/i],
            communion: [/^Antiphon$/i],
            after: [/^Prayer after Communion$/i],
            reading1: [/^First Reading$/i],
            psalm: [/^Responsorial Psalm$/i],
            reading2: [/^Second Reading$/i],
            accl: [/^(Acclamation before the Gospel|Alleluia)$/i],
            gospel: [/^Gospel$/i]
        },
        LA: {
            entrance: [/^Antiphona ad introitum$/iu, /^Antiphona$/iu],
            collect: [/^Collecta$/iu],
            offerings: [/^Super oblata$/iu],
            communion: [/^Antiphona ad (?:introitum|communionem)$/iu, /^Antiphona$/iu],
            after: [/^Post communionem$/iu],
            reading1: [/^Lectio Prima$/iu],
            psalm: [/^Psalmus Responsorialis$/iu],
            reading2: [/^Lectio Secunda$/iu],
            accl: [/^(Alleluia|Versus ante Evangelium)$/iu],
            gospel: [/^Evang[ée]lium$/iu]
        }
    };

    function parseIbreviaryAntiphonAndCollect(lang, source) {
        const labels = ibreviaryLabels[lang] || ibreviaryLabels.EN;
        const lines = ibreviaryLines(source);
        let entrance = ibreviaryBlock(lines, labels.entrance, labels.collect);
        let collect = ibreviaryBlock(lines, labels.collect);
        if (!entrance.lines.length || !collect.lines.length) {
            const fallback = ibreviarySplitUnlabelledAntiphonAndPrayer(lines, lang);
            if (!entrance.lines.length && fallback.antiphon.length) entrance = { heading: '', lines: fallback.antiphon };
            if (!collect.lines.length && fallback.prayer.length) collect = { heading: '', lines: fallback.prayer };
        }
        entrance = Object.assign({}, entrance, { lines: ibreviaryPrepareAntiphonChoiceLines(entrance.lines) });
        const data = {};
        if (entrance.lines.length) data.entrance = strictFormatSection(lang, 'entrance', entrance);
        if (collect.lines.length) data.collect = strictFormatSection(lang, 'collect', Object.assign({}, collect, { lines: ibreviaryPreparePrayerChoiceLines(collect.lines, lang) }));
        return data;
    }

    function parseIbreviaryOfferings(lang, source) {
        const labels = ibreviaryLabels[lang] || ibreviaryLabels.EN;
        const lines = ibreviaryLines(source);
        let offerings = ibreviaryBlock(lines, labels.offerings);
        if (!offerings.lines.length && lines.length) {
            offerings = {
                heading: '',
                lines: lines.filter(line => !ibreviaryIsDelimiter(line) && !/^(?:Preface|Praefatio)\b/iu.test(strictCleanLine(line)))
            };
        }
        return offerings.lines.length ? {
            prayer_offerings: strictFormatSection(lang, 'prayer_offerings', Object.assign({}, offerings, { lines: ibreviaryPreparePrayerChoiceLines(offerings.lines, lang) }))
        } : {};
    }

    function parseIbreviaryCommunion(lang, source) {
        const labels = ibreviaryLabels[lang] || ibreviaryLabels.EN;
        const lines = ibreviaryLines(source);
        const afterIndex = ibreviaryFindIndex(lines, labels.after);
        const communionStart = ibreviaryFindIndex(lines, labels.communion);
        let communion = communionStart >= 0
            ? {
                heading: lines[communionStart],
                lines: lines.slice(communionStart + 1, afterIndex >= 0 ? afterIndex : lines.length).filter(line => !ibreviaryIsDelimiter(line))
            }
            : { heading: '', lines: [] };
        let after = ibreviaryBlock(lines, labels.after);
        if (!communion.lines.length || !after.lines.length) {
            const fallback = ibreviarySplitUnlabelledAntiphonAndPrayer(lines, lang);
            if (!communion.lines.length && fallback.antiphon.length) communion = { heading: '', lines: fallback.antiphon };
            if (!after.lines.length && fallback.prayer.length) after = { heading: '', lines: fallback.prayer };
        }
        communion = Object.assign({}, communion, { lines: ibreviaryPrepareAntiphonChoiceLines(communion.lines) });
        const data = {};
        if (communion.lines.length) data.communion = strictFormatSection(lang, 'communion', communion);
        if (after.lines.length) data.prayer_after = strictFormatSection(lang, 'prayer_after', Object.assign({}, after, { lines: ibreviaryPreparePrayerChoiceLines(after.lines, lang) }));
        return data;
    }

    function parseIbreviaryReadings(lang, source) {
        const labels = ibreviaryLabels[lang] || ibreviaryLabels.EN;
        const lines = ibreviaryPreferProperReadings(ibreviaryLines(source));
        const reading1 = ibreviaryBlock(lines, labels.reading1, labels.psalm.concat(labels.reading2, labels.accl, labels.gospel));
        const psalm = ibreviaryBlock(lines, labels.psalm, labels.reading2.concat(labels.accl, labels.gospel));
        const reading2 = ibreviaryBlock(lines, labels.reading2, labels.accl.concat(labels.gospel));
        const accl = ibreviaryBlock(lines, labels.accl, labels.gospel);
        const gospel = ibreviaryBlock(lines, labels.gospel);
        const data = {};
        if (reading1.lines.length) data.reading1 = strictFormatSection(lang, 'reading1', ibreviaryMarkReadingSummary(lang, 'reading1', reading1));
        if (psalm.lines.length) data.psalm = strictFormatSection(lang, 'psalm', psalm);
        if (reading2.lines.length) data.reading2 = strictFormatSection(lang, 'reading2', ibreviaryMarkReadingSummary(lang, 'reading2', reading2));
        if (accl.lines.length) data.gospel_accl = strictFormatSection(lang, 'gospel_accl', accl);
        if (gospel.lines.length) data.gospel = strictFormatSection(lang, 'gospel', ibreviaryMarkReadingSummary(lang, 'gospel', gospel));
        return data;
    }

    function ibreviaryMarkReadingSummary(lang, key, section) {
        const lines = (section.lines || []).slice();
        const index = lines.findIndex(line => {
            const text = strictCleanLine(line);
            if (!text || text === '✠' || ibreviaryIsDelimiter(text)) return false;
            if (strictLooksLikeCitation(text, lang) || strictIsProclamationEnding(text)) return false;
            if (strictExtractIntro([text], lang, key).intro) return false;
            return true;
        });
        if (index >= 0 && !/^<[^>]+>$/.test(lines[index])) lines[index] = `<${lines[index]}>`;
        return Object.assign({}, section, { lines: lines.filter(line => strictCleanLine(line) !== '✠' && !ibreviaryIsDelimiter(line)) });
    }

    async function fetchIbreviarySource(lang, date, section) {
        return fetchJinaHtml(sourceUrls.IBREVIARY(section, date, lang));
    }

    function ibreviaryCurrentCalendarDate(now = new Date()) {
        const parts = zonedDateParts(now, 'Europe/Rome');
        return new Date(parts.year, parts.month - 1, parts.day);
    }

    function ibreviarySupportsRequestedDate(date, now = new Date()) {
        return !!date && sameDay(date, ibreviaryCurrentCalendarDate(now));
    }

    async function fetchIbreviaryDailyMass(lang, date, options = {}) {
        // This endpoint ignores giorno/mese/anno and serves its current Roman
        // date. Never let today's formulary overwrite a requested past or
        // future liturgy.
        if (!ibreviarySupportsRequestedDate(date)) {
            throw new Error(`iBreviary only serves its current Roman date, not ${formatDateIso(date)}.`);
        }
        const [antiphonCollect, offerings, communion, readings] = await Promise.all([
            fetchIbreviarySource(lang, date, 'antifona_e_colletta'),
            fetchIbreviarySource(lang, date, 'sulle_offerte'),
            fetchIbreviarySource(lang, date, 'antifona_ed_orazione_dopo_comunione'),
            options.includeReadings ? fetchIbreviarySource(lang, date, 'letture') : Promise.resolve('')
        ]);
        const data = Object.assign(
            {},
            parseIbreviaryAntiphonAndCollect(lang, antiphonCollect),
            parseIbreviaryOfferings(lang, offerings),
            parseIbreviaryCommunion(lang, communion),
            options.includeReadings ? parseIbreviaryReadings(lang, readings) : {}
        );
        return strictEnsureReadingSummarySlots({
            title: '',
            color: state.liturgyInfo.color,
            data
        }, lang);
    }

    function strictFormatSection(lang, key, section) {
        if (strictReadingKeys.has(key)) return strictParseReadingSection(lang, key, section);
        if (key === 'psalm' || key === 'gospel_accl') return strictParsePsalmOrAcclamation(lang, key, section);
        return strictParsePrayerOrAntiphon(lang, key, section);
    }

    function strictSplitJapaneseInlineAcclamation(rawSections) {
        if (!rawSections.gospel || rawSections.gospel_accl) return;
        const lines = rawSections.gospel.lines || [];
        const acclamationIndexes = lines
            .map((line, index) => ({ line, index }))
            .filter(item => /アレルヤ|いのちのことば|世を照らし/u.test(strictCleanLine(item.line)))
            .map(item => item.index);
        if (!acclamationIndexes.length) return;
        rawSections.gospel_accl = {
            key: 'gospel_accl',
            heading: 'アレルヤ唱',
            lines: acclamationIndexes.map(index => lines[index])
        };
        rawSections.gospel.lines = lines.filter((_, index) => !acclamationIndexes.includes(index));
    }

    function strictEnsureReadingSummarySlots(parsed, lang) {
        if (!parsed || !parsed.data) return parsed;
        ['reading1', 'reading2', 'gospel'].forEach(key => {
            let section = parsed.data[key];
            if (!section) return;
            if (typeof section === 'string') {
                section = { text: section };
                parsed.data[key] = section;
            }
            if (!Array.isArray(section.lines) || !section.lines.length) {
                const body = cleanNodeText(section.text || section.en || section.kr || '');
                if (body) {
                    section.lines = [
                        strictParsedLine('', '', 'summary', strictMissingSummaryAI(lang)),
                        strictParsedLine('', body, 'body')
                    ];
                    section.text = parsedLinesToText(section.lines);
                }
            }
            if (!Array.isArray(section.lines) || !section.lines.length) return;
            if (!section.lines.some(line => line.role === 'summary')) {
                section.lines.unshift(strictParsedLine('', '', 'summary', strictMissingSummaryAI(lang)));
                section.text = parsedLinesToText(section.lines);
            }
        });
        return parsed;
    }

    function strictFindLiturgyTitle(lines, lang) {
        const japaneseReadingTitle = lang === 'JP' ? japaneseReadingTitleFromLines(lines) : '';
        if (japaneseReadingTitle) return japaneseReadingTitle;
        const fromSource = cleanLiturgyTitle(sourceTitleFromLines(lines));
        const hasVietnameseLiturgyWords = value => /(Chúa|Thánh|Lễ|Tuần|Mùa|Ngày|Thứ|Phục Sinh|Giáng Sinh|Vọng)/i.test(value || '');
        if (fromSource
            && !isMassTitleNoise(fromSource, lang)
            && !/Daily Readings|Lectionary|Markdown Content|higotonofukuin|^Bậc lễ|^Màu phụng vụ/i.test(fromSource)
            && (lang !== 'VN' || hasVietnameseLiturgyWords(fromSource))) return fromSource;
        const firstSectionIndex = (lines || []).findIndex(line => strictIdentifySection(line, lang));
        const titleLines = firstSectionIndex >= 0 ? lines.slice(0, firstSectionIndex) : (lines || []);
        const liturgical = titleLines.find(line => /^\[[^\]]+\]\s*/.test(strictCleanLine(line)));
        if (liturgical) return liturgical;
        return titleLines.find(line => {
            const text = strictCleanLine(line);
            if (isMassTitleNoise(text, lang)) return false;
            if (!text || strictIdentifySection(text, lang) || strictVariantKind(text)) return false;
            if (/^(이전|오늘|목록|출력|글자|다음)(?:\s|$)/.test(text)) return false;
            if (/^(Daily Readings|Lectionary|Reading|Responsorial|Alleluia|Gospel|MENU|Search)/i.test(text)) return false;
            if (/^Bậc lễ/i.test(text)) return false;
            if (/^Màu phụng vụ/i.test(text)) return false;
            if (lang === 'VN' && !hasVietnameseLiturgyWords(text)) return false;
            if (strictLooksLikeCitation(text, lang)) return false;
            if (lang === 'JP' && /(列王記|詩編|マタイ|マルコ|ルカ|ヨハネ|福音).*\d/u.test(text)) return false;
            return text.length > 5 && text.length < 160;
        }) || '';
    }

    function strictParseDailyMass(lang, source, date) {
        const selector = getStrictMassSelector(date);
        const metadataTitle = sourceMetadataTitle(source, lang);
        let lines = strictSourceLines(source);
        if (lang === 'EN' && usesUniversalisCountryReadings()) lines = strictScopeUniversalisCountryDailyLines(lines, date);
        if (lang === 'VN') {
            lines = strictScopeVietnameseByCalendarReading(getVietnameseBodyLines(lines), date);
        }
        const rawSections = strictExtractRawSections(lines, lang, selector);
        if (lang === 'JP') strictSplitJapaneseInlineAcclamation(rawSections);
        const data = {};
        Object.keys(rawSections).forEach(key => {
            if (!strictDailySectionKeys.has(key)) return;
            const parsed = strictFormatSection(lang, key, rawSections[key]);
            if (lang === 'EN'
                && usesUniversalisCountryReadings()
                && key === 'psalm'
                && parsed.cit_en
                && !sourceSectionHasContent(parsed)) {
                parsed.lines = [strictParsedLine('', 'Psalm text is not available on the public web source.', 'body')];
                parsed.text = parsedLinesToText(parsed.lines);
            }
            if (sourceSectionHasContent(parsed)) data[key] = parsed;
        });
        const title = metadataTitle || strictFindLiturgyTitle(lines, lang);
        return strictEnsureReadingSummarySlots({
            title: cleanLiturgyTitle(title),
            color: colorFromSourceTitle(title, colorFromSourceLines(lines, state.liturgyInfo.color)),
            data
        }, lang);
    }

    const vietnameseProperOverrideSectionKeys = new Set(['entrance', 'collect', 'prayer_offerings', 'preface', 'communion', 'prayer_after']);
    const vietnameseReadingSectionKeys = new Set(['reading1', 'psalm', 'reading2', 'gospel_accl', 'gospel']);

    function hasAnyParsedDailySection(parsed) {
        return Object.values((parsed && parsed.data) || {}).some(sourceSectionHasContent);
    }

    function vietnameseParsedHasAnySectionIn(parsed, sectionKeys) {
        const data = (parsed && parsed.data) || {};
        return Array.from(sectionKeys).some(key => sourceSectionHasContent(data[key]));
    }

    function vietnameseSourceMatchesTitle(parsed, url, title) {
        const expected = normalizeSearchText(title);
        if (!expected) return false;
        let decodedUrl = String(url || '');
        try {
            decodedUrl = decodeURIComponent(decodedUrl);
        } catch (error) {
            // A malformed escape in an external URL must not stop source selection.
        }
        const actual = normalizeSearchText(`${(parsed && parsed.title) || ''} ${decodedUrl}`);
        if (!actual) return false;
        if (actual.includes(expected)) return true;
        const expectedTokens = expected.split(/\s+/).filter(token => token.length >= 3 && !/^([ivx]+|nam|tuan|ngay)$/.test(token));
        if (!expectedTokens.length) return false;
        const actualTokens = new Set(actual.split(/\s+/));
        const matchedTokens = expectedTokens.filter(token => actualTokens.has(token));
        return matchedTokens.length >= Math.min(3, expectedTokens.length)
            && matchedTokens.length / expectedTokens.length >= 0.5;
    }

    function vietnameseParsedLooksLikeProperSource(parsed, url, date) {
        const info = buildGeneratedLiturgyInfo(date);
        if (!hasPriorityCelebrationForLookup(date, info) || !hasAnyParsedDailySection(parsed)) return false;
        if (vietnameseProperLinkMatchesDate({ href: url, text: (parsed && parsed.title) || '' }, date)) return true;
        const properMatch = vietnameseSourceMatchesTitle(parsed, url, vietnameseLookupTitle(date));
        const seasonalMatch = vietnameseSourceMatchesTitle(parsed, url, vietnameseSeasonalLookupTitle(date));
        if (properMatch && !seasonalMatch) return true;
        return properMatch
            && vietnameseParsedHasAnySectionIn(parsed, vietnameseProperOverrideSectionKeys)
            && !vietnameseParsedHasAnySectionIn(parsed, vietnameseReadingSectionKeys);
    }

    function mergeVietnameseSectionFallbacks(primaryParsed, supplementalParsed) {
        if (!primaryParsed) return supplementalParsed;
        if (!supplementalParsed || !supplementalParsed.data) return primaryParsed;
        const merged = Object.assign({}, primaryParsed, {
            data: Object.assign({}, primaryParsed.data || {})
        });
        Object.keys(supplementalParsed.data).forEach(key => {
            if (!sourceSectionHasContent(merged.data[key]) && sourceSectionHasContent(supplementalParsed.data[key])) {
                merged.data[key] = supplementalParsed.data[key];
            }
        });
        return merged;
    }

    function mergeVietnameseProperPartials(primaryParsed, supplementalParsed) {
        if (!primaryParsed) return supplementalParsed;
        if (!supplementalParsed || !supplementalParsed.data) return primaryParsed;
        const merged = Object.assign({}, primaryParsed, {
            title: cleanLiturgyTitle(primaryParsed.title) || supplementalParsed.title,
            color: primaryParsed.color || supplementalParsed.color,
            data: Object.assign({}, primaryParsed.data || {})
        });
        vietnameseProperOverrideSectionKeys.forEach(key => {
            if (!sourceSectionHasContent(merged.data[key]) && sourceSectionHasContent(supplementalParsed.data[key])) {
                merged.data[key] = supplementalParsed.data[key];
            }
        });
        return merged;
    }

    function prioritizeVietnameseSeasonalReadingUrl(urls, currentIndex, date) {
        if (!Array.isArray(urls) || currentIndex < 0) return;
        const seasonalSlug = slugifyVietnamese(vietnameseSeasonalLookupTitle(date));
        if (!seasonalSlug) return;
        const seasonalIndex = urls.findIndex((url, index) => index > currentIndex && String(url || '').includes(`/${seasonalSlug}`));
        if (seasonalIndex <= currentIndex + 1) return;
        const [seasonalUrl] = urls.splice(seasonalIndex, 1);
        urls.splice(currentIndex + 1, 0, seasonalUrl);
    }

    function mergeVietnameseProperPartialWithReadings(readingParsed, properParsed) {
        if (!properParsed || !properParsed.data) return readingParsed;
        const merged = Object.assign({}, readingParsed, {
            title: cleanLiturgyTitle(properParsed.title) || readingParsed.title,
            color: properParsed.color || readingParsed.color,
            data: Object.assign({}, readingParsed.data || {})
        });
        Object.keys(properParsed.data || {}).forEach(key => {
            if (vietnameseProperOverrideSectionKeys.has(key) && sourceSectionHasContent(properParsed.data[key])) {
                merged.data[key] = properParsed.data[key];
            }
        });
        return merged;
    }

    const koreanBibleChapterPromiseCache = new Map();

    function koreanProperReadingReferencePairs(source) {
        const text = sourceTextLines(source).join('\n');
        const pattern = /(?:기념일\s*)?(?:고유\s*)?독서\s*\(\s*([^)]+?)\s*\)\s*와\s*(?:기념일\s*)?(?:고유\s*)?복음\s*\(\s*([^)]+?)\s*\)/gu;
        const seen = new Set();
        return Array.from(text.matchAll(pattern)).reduce((pairs, match) => {
            const reading = cleanCitation(match[1]);
            const gospel = cleanCitation(match[2]);
            const key = `${reading}\u0000${gospel}`;
            if (!reading || !gospel || seen.has(key)) return pairs;
            seen.add(key);
            pairs.push({ reading, gospel });
            return pairs;
        }, []);
    }

    function koreanBibleCitationDescriptor(citation) {
        const source = cleanCitation(citation).replace(/[–—]/g, '-');
        const bookKey = Object.keys(bibleMap || {})
            .sort((a, b) => b.length - a.length)
            .find(key => source === key || source.startsWith(`${key} `));
        if (!bookKey) return null;
        const rest = source.slice(bookKey.length).trim();
        const chapterMatch = rest.match(/^(\d+)\s*[,.:]\s*(.+)$/u);
        if (!chapterMatch) return null;
        const chapter = Number(chapterMatch[1]);
        const verseSpec = chapterMatch[2];
        const verses = [];
        const seen = new Set();
        Array.from(verseSpec.matchAll(/(\d+)([ㄱ-ㅎ]?)(?:\s*-\s*(\d+)([ㄱ-ㅎ]?))?/gu)).forEach(match => {
            const first = Number(match[1]);
            const last = Number(match[3] || match[1]);
            const low = Math.min(first, last);
            const high = Math.max(first, last);
            for (let number = low; number <= high; number += 1) {
                const part = number === first && match[2]
                    ? match[2]
                    : (number === last && match[4] ? match[4] : '');
                const key = `${number}:${part}`;
                if (!seen.has(key)) {
                    verses.push({ number, part });
                    seen.add(key);
                }
            }
        });
        if (!Number.isInteger(chapter) || !verses.length) return null;
        const englishAlias = bibleMap[bookKey] && bibleMap[bookKey][1];
        const urlBook = cleanNodeText(englishAlias).replace(/\s+/g, '');
        return urlBook ? { bookKey, urlBook, chapter, verses, citation: source } : null;
    }

    function parseKoreanBibleChapterVerses(source) {
        const verses = {};
        if (/<(?:html|body|div)\b/i.test(String(source || ''))) {
            const doc = parseHtml(source);
            doc.querySelectorAll('.row').forEach(row => {
                const number = Number(cleanNodeText((row.querySelector('.col-1 .highlight, .col-1') || {}).textContent));
                const bodyNode = row.querySelector('.col-11 .text-justify, .col-11');
                if (!Number.isInteger(number) || !bodyNode || verses[number]) return;
                const clone = bodyNode.cloneNode(true);
                clone.querySelectorAll('sup, .annotation').forEach(node => node.remove());
                const text = cleanNodeText(clone.textContent);
                if (text) verses[number] = text;
            });
            if (Object.keys(verses).length) return verses;
        }

        let current = null;
        String(source || '').split(/\r?\n/).forEach(rawLine => {
            const line = String(rawLine || '').replace(/^\s*>\s?/, '').trim();
            if (/^#{1,6}\s+/.test(line)) return;
            if (/^(?:Title|URL Source|Published Time|Markdown Content):/i.test(line)) return;
            if (/^\d+$/.test(line)) {
                current = Number(line);
                return;
            }
            if (!current || !line || /^[-*]\s/.test(line)) return;
            const text = cleanNodeText(line.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'));
            if (!text) return;
            verses[current] = verses[current] ? `${verses[current]} ${text}` : text;
        });
        return verses;
    }

    function koreanBibleVersePart(text, part) {
        const cleaned = cleanNodeText(text);
        if (part !== 'ㄱ') return cleaned;
        const sentences = cleaned.split(/(?<=[.!?])\s+/u).filter(Boolean);
        return sentences[0] || cleaned;
    }

    async function fetchKoreanBibleChapter(descriptor) {
        const key = `${descriptor.urlBook}:${descriptor.chapter}`;
        if (!koreanBibleChapterPromiseCache.has(key)) {
            const url = `https://bible.cbck.or.kr/Knb/${descriptor.urlBook}/${descriptor.chapter}`;
            koreanBibleChapterPromiseCache.set(key, fetchTextWithFallbacks(url, { timeoutMs: 15000 })
                .then(parseKoreanBibleChapterVerses)
                .catch(error => {
                    koreanBibleChapterPromiseCache.delete(key);
                    throw error;
                }));
        }
        return koreanBibleChapterPromiseCache.get(key);
    }

    function koreanBibleReadingIntro(bookKey, isGospel) {
        const gospelNames = { 마태: '마태오', 마르: '마르코', 루카: '루카', 요한: '요한' };
        if (isGospel && gospelNames[bookKey]) return `${gospelNames[bookKey]}가 전한 거룩한 복음입니다.`;
        const bookNames = {
            지혜: '지혜서', 집회: '집회서', 사도: '사도행전', 로마: '사도 바오로의 로마서',
            '1코린': '사도 바오로의 코린토 1서', '2코린': '사도 바오로의 코린토 2서',
            갈라: '사도 바오로의 갈라티아서', 에페: '사도 바오로의 에페소서', 필리: '사도 바오로의 필리피서',
            콜로: '사도 바오로의 콜로새서', '1테살': '사도 바오로의 테살로니카 1서',
            '2테살': '사도 바오로의 테살로니카 2서', '1티모': '사도 바오로의 티모테오 1서',
            '2티모': '사도 바오로의 티모테오 2서', 티토: '사도 바오로의 티토서', 필레: '사도 바오로의 필레몬서',
            히브: '히브리서', 야고: '야고보서', '1베드': '베드로 1서', '2베드': '베드로 2서',
            '1요한': '요한 1서', '2요한': '요한 2서', '3요한': '요한 3서', 유다: '유다서', 묵시: '요한 묵시록'
        };
        const oldTestamentName = koreanIntroBookAliases.find(([, key]) => key === bookKey);
        const title = bookNames[bookKey] || (oldTestamentName && oldTestamentName[0]) || bookKey;
        return `${title}${/^사도 바오로의/u.test(title) ? ' ' : '의 '}말씀입니다.`;
    }

    async function fetchKoreanProperPassageSection(citation, isGospel) {
        const descriptor = koreanBibleCitationDescriptor(citation);
        if (!descriptor) throw new Error(`Unsupported Korean proper-reading citation: ${citation}`);
        const chapterVerses = await fetchKoreanBibleChapter(descriptor);
        const body = descriptor.verses
            .map(({ number, part }) => koreanBibleVersePart(chapterVerses[number], part))
            .filter(Boolean)
            .join('\n');
        if (!body) throw new Error(`Korean Bible passage is empty: ${citation}`);
        const lines = [
            parsedLine(isGospel ? '✠' : '▥', koreanBibleReadingIntro(descriptor.bookKey, isGospel), 'intro'),
            parsedLine('', body, 'body')
        ];
        return { text: parsedLinesToText(lines), lines, cit_kr: descriptor.citation };
    }

    function appendKoreanProperSectionOption(section, properSection, baseId) {
        if (!properSection || !sourceSectionHasContent(properSection)) return section;
        if (!section || !sourceSectionHasContent(section)) {
            properSection.optionCits = [{ cit_kr: properSection.cit_kr }];
            properSection.optionLabels = [`고유 ${baseId === 'gospel' ? '복음' : '독서'} — ${properSection.cit_kr}`];
            properSection.optionKinds = ['proper'];
            return properSection;
        }
        const options = splitParsedAlternatives(section.lines || []).filter(option => option.length);
        const existingCits = Array.isArray(section.optionCits) && section.optionCits.length
            ? section.optionCits.slice()
            : options.map((_, index) => index === 0 && section.cit_kr ? { cit_kr: section.cit_kr } : {});
        const duplicate = existingCits.some(entry => {
            const citation = entry && entry.cit_kr;
            return citation && !citationsAreDifferent(citation, properSection.cit_kr);
        });
        if (duplicate) return section;
        const labels = Array.isArray(section.optionLabels) ? section.optionLabels.slice() : [];
        const kinds = Array.isArray(section.optionKinds) ? section.optionKinds.slice() : [];
        while (labels.length < options.length) {
            const index = labels.length;
            const citation = existingCits[index] && existingCits[index].cit_kr;
            labels.push(`공통 ${baseId === 'gospel' ? '복음' : '독서'}${citation ? ` — ${citation}` : ''}`);
        }
        while (kinds.length < options.length) kinds.push('common');
        const lines = Array.isArray(section.lines) ? section.lines.slice() : [];
        if (lines.length) lines.push(parsedLine('', '또는:'));
        lines.push(...(properSection.lines || []));
        section.lines = lines;
        section.text = parsedLinesToText(lines);
        section.optionCits = existingCits.concat([{ cit_kr: properSection.cit_kr }]);
        section.optionLabels = labels.concat([`고유 ${baseId === 'gospel' ? '복음' : '독서'} — ${properSection.cit_kr}`]);
        section.optionKinds = kinds.concat(['proper']);
        return section;
    }

    async function appendKoreanProperReadingOptions(parsed, source) {
        if (!parsed || !parsed.data) return parsed;
        const pairs = koreanProperReadingReferencePairs(source);
        for (const pair of pairs) {
            try {
                const [reading, gospel] = await Promise.all([
                    fetchKoreanProperPassageSection(pair.reading, false),
                    fetchKoreanProperPassageSection(pair.gospel, true)
                ]);
                parsed.data.reading1 = appendKoreanProperSectionOption(parsed.data.reading1, reading, 'reading1');
                parsed.data.gospel = appendKoreanProperSectionOption(parsed.data.gospel, gospel, 'gospel');
            } catch (error) {
                console.warn(`한국어 기념일 고유 독서 선택지를 불러오지 못했습니다: ${pair.reading} / ${pair.gospel}`, error);
            }
        }
        return parsed;
    }

    async function fetchStrictDailyMass(lang, date) {
        await loadAllSoulsMassConfigIfNeeded(date);
        if (lang === 'VN') {
            if (normalizeVietnameseReadingSource(state.vnReadingSource) === 'ktcg') {
                const parsed = await fetchVietnameseKtcgDailyMass(date);
                return applyVietnameseKtcgDiocesanPrayers(parsed, date);
            }
            const temporalFallback = vietnameseTemporalFallbackParsed(date);
            if (temporalFallback) {
                return applyKtcgkpvCitationSource(temporalFallback, date);
            }
            let urls = await resolveVietnameseDailyUrls(date, { directOnly: true });
            let lastError = null;
            let properPartialParsed = null;
            let readingParsedCandidate = null;
            const preferProperDate = hasPriorityCelebrationForLookup(date, buildGeneratedLiturgyInfo(date));
            for (let pass = 0; pass < 2; pass += 1) {
                for (let index = 0; index < urls.length; index += 1) {
                    const url = urls[index];
                    try {
                        const source = await fetchTextWithFallbacks(url);
                        const parsed = strictParseDailyMass(lang, source, date);
                        const isProperCandidate = preferProperDate && vietnameseParsedLooksLikeProperSource(parsed, url, date);
                        const fixedTitle = strictFixedDailyTitle(lang, date);
                        const calendarTitle = preferProperDate ? vietnameseLookupTitle(date) : '';
                        if (fixedTitle || calendarTitle) parsed.title = fixedTitle || calendarTitle;
                        if (isProperCandidate && hasAnyParsedDailySection(parsed)) {
                            properPartialParsed = mergeVietnameseProperPartials(properPartialParsed, parsed);
                            prioritizeVietnameseSeasonalReadingUrl(urls, index, date);
                        }
                        if (hasVietnameseParsedMass(parsed)) {
                            if (!strictVietnameseParsedMatchesCalendarHints(parsed, date)) {
                                throw new Error('VN source did not match calendar reading hints');
                            }
                            readingParsedCandidate = mergeVietnameseSectionFallbacks(readingParsedCandidate, parsed);
                            const mergedParsed = properPartialParsed
                                ? mergeVietnameseProperPartialWithReadings(readingParsedCandidate, properPartialParsed)
                                : readingParsedCandidate;
                            const citedParsed = await applyKtcgkpvCitationSource(mergedParsed, date);
                            if (hasCompleteVietnameseParsedMass(citedParsed)
                                && (!preferProperDate || properPartialParsed || isProperCandidate)) return citedParsed;
                            throw new Error('VN source is incomplete: ' + missingVietnameseDailySections(citedParsed).join(', '));
                        }
                        if (properPartialParsed && readingParsedCandidate) {
                            const mergedParsed = mergeVietnameseProperPartialWithReadings(readingParsedCandidate, properPartialParsed);
                            const citedParsed = await applyKtcgkpvCitationSource(mergedParsed, date);
                            if (hasCompleteVietnameseParsedMass(citedParsed)) return citedParsed;
                        }
                        throw new Error('No strict VN readings found');
                    } catch (error) {
                        lastError = error;
                        console.warn(`VN strict source failed: ${url}`, error);
                    }
                }
                const expandedUrls = await resolveVietnameseDailyUrls(date);
                urls = expandedUrls.filter(url => !urls.includes(url));
                if (!urls.length) break;
            }
            if (readingParsedCandidate) {
                const mergedParsed = properPartialParsed
                    ? mergeVietnameseProperPartialWithReadings(readingParsedCandidate, properPartialParsed)
                    : readingParsedCandidate;
                const citedParsed = await applyKtcgkpvCitationSource(mergedParsed, date);
                if (hasCompleteVietnameseParsedMass(citedParsed)) return citedParsed;
                lastError = new Error('VN combined source is incomplete: ' + missingVietnameseDailySections(citedParsed).join(', '));
            }
            throw lastError || new Error('VN strict source not found');
        }

        const fetchStrictSource = async url => {
            if (lang !== 'EN') return fetchTextWithFallbacks(url);
            try {
                return await fetchJinaHtml(url);
            } catch (error) {
                console.warn('EN HTML source failed, trying markdown source.', error);
                return fetchTextWithFallbacks(url);
            }
        };
        const entryUrl = strictDailySourceEntryUrl(lang, date);
        const selector = getStrictMassSelector(date);
        let source = await fetchStrictSource(entryUrl);
        const selectedLink = strictChooseMassLink(lang, source, entryUrl, date, selector);
        if (selectedLink && selectedLink.href && selectedLink.href !== entryUrl) {
            source = await fetchStrictSource(selectedLink.href);
        }
        let parsed = strictParseDailyMass(lang, source, date);
        if (lang === 'EN' && !['reading1', 'psalm', 'gospel'].every(key => parsed.data && parsed.data[key])) {
            try {
                parsed = strictParseDailyMass(lang, await fetchJinaHtml(selectedLink && selectedLink.href ? selectedLink.href : entryUrl), date);
            } catch (error) {
                console.warn('EN HTML reparsing failed, keeping current parse result.', error);
            }
        }
        if (lang === 'KR' && Object.keys(parsed.data || {}).length < 4) {
            try {
                parsed = strictParseDailyMass(lang, await fetchJinaHtml(selectedLink && selectedLink.href ? selectedLink.href : entryUrl), date);
            } catch (error) {
                console.warn('KR HTML fallback failed, keeping markdown parse result.', error);
            }
        }
        if (!Object.keys(parsed.data || {}).length && lang === 'EN') {
            return strictEnsureReadingSummarySlots(parseEnglishDailyMass(source, date), lang);
        }
        if (lang === 'KR') parsed = await appendKoreanProperReadingOptions(parsed, source);
        const fixedTitle = strictFixedDailyTitle(lang, date);
        if (fixedTitle) parsed.title = fixedTitle;
        return parsed;
    }

    fetchKoreanDailyMass = date => fetchStrictDailyMass('KR', date);

    fetchEnglishDailyMass = async date => {
        if (hasCountryDailyReadings()) return fetchStrictDailyMass('EN', date);
        let parsed = null;
        let strictError = null;
        try {
            parsed = await fetchStrictDailyMass('EN', date);
        } catch (error) {
            strictError = error;
            console.warn('EN strict source failed, trying iBreviary fallback.', error);
        }
        try {
            const ibreviary = await fetchIbreviaryDailyMass('EN', date, { includeReadings: !parsed });
            if (!parsed) parsed = ibreviary;
            else parsed.data = Object.assign({}, parsed.data || {}, ibreviary.data || {});
        } catch (error) {
            console.warn('EN iBreviary source failed.', error);
            if (!parsed && strictError) throw strictError;
        }
        return parsed || { title: '', color: state.liturgyInfo.color, data: {} };
    };
    fetchJapaneseDailyMass = date => fetchStrictDailyMass('JP', date);
    fetchVietnameseDailyMass = date => fetchStrictDailyMass('VN', date);
    fetchLatinDailyMass = date => fetchIbreviaryDailyMass('LA', date, { includeReadings: true });

    const dailySourceFetchers = {
        KR: fetchKoreanDailyMass,
        VN: fetchVietnameseDailyMass,
        EN: fetchEnglishDailyMass,
        JP: fetchJapaneseDailyMass,
        LA: fetchLatinDailyMass
    };

    function getActiveDailySourceLanguages() {
        const baseLang = normalizeSelectableLang(getLiturgicalBaseLang(), 'KR');
        const currentLang = normalizeSelectableLang(state.currentLoc || 'KR', 'KR');
        const targetLang = normalizeDistinctTargetLang(state.targetLang, currentLang);
        return [currentLang, baseLang, targetLang]
            .filter((lang, index, list) => lang && dailySourceFetchers[lang] && list.indexOf(lang) === index);
    }

    function markDailyReadingLanguagesLoading(sources = getActiveDailySourceLanguages(), options = {}) {
        const langs = Array.from(new Set((sources || [])
            .map(lang => normalizeSelectableLang(lang, ''))
            .filter(lang => lang && dailySourceFetchers[lang])));
        const previousStatus = state.dailyReadingLanguageStatus || {};
        state.dailyReadingsLoading = true;
        state.dailyReadingLanguageStatus = Object.fromEntries(langs.map(lang => [
            lang,
            options.preserveDone && previousStatus[lang] === 'done' ? 'done' : 'loading'
        ]));
        state.dailyReadingLanguageErrorAt = {};
        langs.forEach(lang => { delete (state.dailyReadingCompletedDuringChoice || {})[lang]; });
        return langs;
    }

    function dailySourceStorageKey(lang, date) {
        const sourceVariant = lang === 'VN'
            ? `:${normalizeVietnameseReadingSource(state.vnReadingSource)}`
            : (lang === 'EN' ? `:${dataJurisdictionForLocation()}` : '');
        return `${STORAGE_PREFIX}dailySource:${formatDateIso(date)}:${lang}:${strictDailySourceCacheVariant(date)}${sourceVariant}`;
    }

    function readCachedDailySource(lang, date, options = {}) {
        const entry = readStorageJSON(dailySourceStorageKey(lang, date));
        if (!entry || !entry.parsed) return null;
        if (!options.allowStale && !isFreshCacheEntry(entry, DAILY_SOURCE_CACHE_TTL_MS)) return null;
        if (lang === 'VN' && !hasCompleteVietnameseParsedMass(entry.parsed)) return null;
        if (lang === 'VN' && normalizeVietnameseReadingSource(state.vnReadingSource) === 'ktcg'
            && !hasVietnameseKtcgDiocesanPrayers(entry.parsed)) return null;
        return entry.parsed;
    }

    function writeCachedDailySource(lang, date, parsed) {
        if (lang === 'VN' && !hasCompleteVietnameseParsedMass(parsed)) return;
        if (lang === 'VN' && normalizeVietnameseReadingSource(state.vnReadingSource) === 'ktcg'
            && !hasVietnameseKtcgDiocesanPrayers(parsed)) return;
        if (parsed && parsed.data) {
            writeStorageJSON(dailySourceStorageKey(lang, date), { cachedAt: Date.now(), parsed });
        }
    }

    async function fetchParsedDailyMass(lang, date, options = {}) {
        const sourceVariant = lang === 'VN'
            ? `:${normalizeVietnameseReadingSource(state.vnReadingSource)}`
            : (lang === 'EN' ? `:${dataJurisdictionForLocation()}` : '');
        const key = `${formatDateIso(date)}:${lang}:${strictDailySourceCacheVariant(date)}${sourceVariant}`;
        if (options.forceRemote) delete dailySourceCache[key];
        if (!dailySourceCache[key]) {
            const cached = options.forceRemote ? null : readCachedDailySource(lang, date);
            if (cached) {
                dailySourceCache[key] = Promise.resolve(cached);
            } else {
                dailySourceCache[key] = dailySourceFetchers[lang](date)
                    .then(parsed => {
                        if (lang === 'VN' && !hasCompleteVietnameseParsedMass(parsed)) {
                            throw new Error('VN source is incomplete: ' + missingVietnameseDailySections(parsed).join(', '));
                        }
                        writeCachedDailySource(lang, date, parsed);
                        return parsed;
                    })
                    .catch(error => {
                        delete dailySourceCache[key];
                        const stale = readCachedDailySource(lang, date, { allowStale: true });
                        if (stale) {
                            console.warn(`${lang} 일일 독서 원격 갱신 실패, 만료 캐시를 사용합니다.`, error);
                            return stale;
                        }
                        throw error;
                    });
        }
        }
        return dailySourceCache[key];
    }

    function createDailyReadingData() {
        return {};
    }

    function getLiturgicalBaseLang() {
        return (state.liturgyInfo.localCalendar && state.liturgyInfo.localCalendar.lang) || state.currentLoc || 'KR';
    }

    function emptyMassLine() {
        return { sp_kr: '', sp_vn: '', sp_en: '', sp_jp: '', sp_la: '' };
    }

    function isDailyEndingLine(line) {
        return /주님의\s*말씀입니다|하느님,?\s*감사합니다|그리스도님,?\s*찬미합니다/.test(combinedLineText(line));
    }

    function isGospelDialogueLine(line) {
        return /주님께서\s*여러분과\s*함께|또한\s*사제(?:\(부제\))?의\s*영과\s*함께|주님\s*영광\s*받으소서/.test(combinedLineText(line));
    }

    function isPrayerPart(baseId) {
        return ['collect', 'prayer_offerings', 'prayer_after'].includes(baseId);
    }

    function isPrayerOpenerText(text) {
        return /기도합시다|Let us pray|Chúng ta dâng lời cầu nguyện|Orémus|祈りましょう/.test(cleanNodeText(text));
    }

    function isPrayerAmenText(text) {
        return /^(아멘\.?|Amen\.?|アーメン。?)$/i.test(cleanNodeText(text));
    }

    function isPrayerConclusionText(text) {
        const cleaned = cleanNodeText(text);
        if (!cleaned) return false;
        return ['KR', 'VN', 'EN', 'JP', 'LA'].some(lang =>
            ['collect', 'prayer_offerings', 'prayer_after'].some(key =>
                prayerConclusionEndingForText(lang, key, cleaned) === cleaned
            )
        );
    }

    function isPrayerOpenerLine(line) {
        return ['kr', 'vn', 'en', 'jp', 'la'].some(lower => isPrayerOpenerText(line && line[`text_${lower}`]));
    }

    function isPrayerAmenLine(line) {
        return ['kr', 'vn', 'en', 'jp', 'la'].some(lower => isPrayerAmenText(line && line[`text_${lower}`]));
    }

    function isPrayerFrameLine(line) {
        return isPrayerOpenerLine(line) || isPrayerAmenLine(line);
    }

    const celebrantSpeakerByLang = { kr: '✚', vn: 'CT.', en: 'C.', jp: '司', la: 'C.' };
    const lectorSpeakerByLang = { kr: '▥', vn: 'N.', en: 'L.', jp: '朗', la: 'L.' };
    const peopleSpeakerByLang = { kr: '◎', vn: 'CĐ.', en: 'ALL', jp: '会', la: 'P.' };
    const gospelSpeakerByLang = { kr: celebrantSpeakerByLang.kr, vn: 'LM. (PT.)', en: 'P. (D.)', jp: '司 (助)', la: celebrantSpeakerByLang.la };

    function makePrayerOpenerLine() {
        return {
            sp_kr: celebrantSpeakerByLang.kr, text_kr: '기도합시다',
            sp_vn: celebrantSpeakerByLang.vn, text_vn: 'Chúng ta dâng lời cầu nguyện.',
            sp_en: celebrantSpeakerByLang.en, text_en: 'Let us pray.',
            sp_la: celebrantSpeakerByLang.la, text_la: 'Orémus.',
            sp_jp: celebrantSpeakerByLang.jp, text_jp: '祈りましょう。'
        };
    }

    function makePrayerAmenLine() {
        return {
            sp_kr: peopleSpeakerByLang.kr, text_kr: '아멘.',
            sp_vn: peopleSpeakerByLang.vn, text_vn: 'Amen.',
            sp_en: peopleSpeakerByLang.en, text_en: 'Amen.',
            sp_la: peopleSpeakerByLang.la, text_la: 'Amen.',
            sp_jp: peopleSpeakerByLang.jp, text_jp: 'アーメン。'
        };
    }

    function ensurePrayerFrameLines(targetLines, baseId = '') {
        if (baseId === 'prayer_offerings') {
            for (let i = targetLines.length - 1; i >= 0; i--) {
                if (isPrayerOpenerLine(targetLines[i])) targetLines.splice(i, 1);
            }
        } else if (!targetLines.some(isPrayerOpenerLine)) {
            targetLines.unshift(makePrayerOpenerLine());
        }
        if (!targetLines.some(isPrayerAmenLine)) targetLines.push(makePrayerAmenLine());
        const hasBodyLine = targetLines.some(line => !isPrayerFrameLine(line) && !line.rubric_kr && !line.rubric_vn && !line.rubric_en && !line.rubric_jp && !line.rubric_la);
        if (!hasBodyLine) {
            const amenIndex = targetLines.findIndex(isPrayerAmenLine);
            targetLines.splice(amenIndex >= 0 ? amenIndex : targetLines.length, 0, emptyMassLine());
        }
    }

    function lineHasAnyRubric(line) {
        return !!(line && (line.rubric_kr || line.rubric_vn || line.rubric_en || line.rubric_jp || line.rubric_la));
    }

    function isProtectedParsedTargetLine(line, baseId) {
        if (!line || lineHasAnyRubric(line)) return true;
        if (isDailyEndingLine(line)) return true;
        if (isPrayerPart(baseId) && isPrayerFrameLine(line)) return true;
        if (baseId === 'gospel' && isGospelDialogueLine(line)) return true;
        return false;
    }

    function isProtectedParsedTargetLineForLanguage(line, baseId) {
        if (!line) return true;
        if ((baseId === 'communion' || baseId === 'entrance') && lineHasAnyRubric(line)) return true;
        if (isDailyEndingLine(line)) return true;
        if (isPrayerPart(baseId) && isPrayerFrameLine(line)) return true;
        if (baseId === 'gospel' && isGospelDialogueLine(line)) return true;
        return false;
    }

    function parsedInsertIndex(targetLines, baseId) {
        if (isPrayerPart(baseId)) {
            const amenIndex = targetLines.findIndex(isPrayerAmenLine);
            if (amenIndex >= 0) return amenIndex;
        }
        const endingIndex = targetLines.findIndex(isDailyEndingLine);
        return endingIndex >= 0 ? endingIndex : targetLines.length;
    }

    function entranceRubricBoundaryIndex(targetLines) {
        if (!Array.isArray(targetLines)) return -1;
        let boundary = -1;
        targetLines.forEach((line, index) => {
            if (lineHasAnyRubric(line)) boundary = index;
        });
        return boundary;
    }

    function parsedInsertIndexForLanguage(targetLines, baseId) {
        if (baseId === 'entrance') {
            const rubricBoundary = entranceRubricBoundaryIndex(targetLines);
            if (rubricBoundary >= 0) return rubricBoundary + 1;
        }
        return parsedInsertIndex(targetLines, baseId);
    }

    function editableParsedIndexesForLanguage(targetLines, lower, baseId) {
        const rubricBoundary = baseId === 'entrance' ? entranceRubricBoundaryIndex(targetLines) : -1;
        return targetLines
            .map((line, index) => ({ line, index }))
            .filter(item => !isProtectedParsedTargetLineForLanguage(item.line, baseId, lower))
            .filter(item => rubricBoundary < 0 || item.index > rubricBoundary)
            .map(item => item.index);
    }

    function usesReadingRoles(baseId, parsedLines) {
        if (['reading1', 'reading2', 'gospel'].includes(baseId)) return parsedLines.some(line => line.role);
        if (isPrayerPart(baseId)) return parsedLines.some(line => line.role === 'conclusion');
        return false;
    }

    function lineHasAnyRole(line, role) {
        return ['kr', 'vn', 'en', 'jp', 'la'].some(lower => line && line[`role_${lower}`] === role);
    }

    function ensureExistingRoleTargetLines(targetLines, baseId, roles) {
        const targets = roles.reduce((map, role) => {
            const line = targetLines.find(candidate => lineHasAnyRole(candidate, role));
            if (line) map[role] = line;
            return map;
        }, {});
        if (!Object.keys(targets).length) return null;
        let insertAt = parsedInsertIndex(targetLines, baseId);
        roles.forEach(role => {
            if (targets[role]) return;
            const inserted = emptyMassLine();
            targetLines.splice(insertAt, 0, inserted);
            targets[role] = inserted;
            insertAt += 1;
        });
        return targets;
    }

    function parsedRoles(parsedLines) {
        const roles = (parsedLines || []).map(line => line.role || 'body').filter((role, index, list) => role && list.indexOf(role) === index);
        return roles.length ? roles : ['summary', 'intro', 'body'];
    }

    function ensureRoleTargetLines(targetLines, baseId, parsedLines = []) {
        const roles = parsedRoles(parsedLines);
        const existingTargets = ensureExistingRoleTargetLines(targetLines, baseId, roles);
        if (existingTargets) return existingTargets;
        if (baseId === 'gospel') {
            const firstDialogueIndex = targetLines.findIndex(isGospelDialogueLine);
            const targets = {};
            let summaryLine = null;
            if (roles.includes('summary')) {
                summaryLine = firstDialogueIndex > 0
                    ? targetLines.slice(0, firstDialogueIndex).find(line => !isProtectedParsedTargetLine(line, baseId))
                    : null;
                if (!summaryLine) {
                    summaryLine = emptyMassLine();
                    targetLines.splice(firstDialogueIndex >= 0 ? firstDialogueIndex : 0, 0, summaryLine);
                }
                targets.summary = summaryLine;
            }
            const contentRoles = roles.filter(role => role !== 'summary');
            const editableAfterSummary = targetLines.filter(line => line !== summaryLine && !isProtectedParsedTargetLine(line, baseId));
            let insertAt = parsedInsertIndex(targetLines, baseId);
            while (editableAfterSummary.length < contentRoles.length) {
                const inserted = emptyMassLine();
                targetLines.splice(insertAt, 0, inserted);
                editableAfterSummary.push(inserted);
                insertAt += 1;
            }
            contentRoles.forEach((role, index) => { targets[role] = editableAfterSummary[index]; });
            return targets;
        }

        const editable = targetLines
            .map((line, index) => ({ line, index }))
            .filter(item => !isProtectedParsedTargetLine(item.line, baseId));
        let insertAt = parsedInsertIndex(targetLines, baseId);
        while (editable.length < roles.length) {
            const inserted = emptyMassLine();
            targetLines.splice(insertAt, 0, inserted);
            editable.push({ line: inserted, index: insertAt });
            insertAt += 1;
        }
        return roles.reduce((map, role, index) => {
            map[role] = editable[index].line;
            return map;
        }, {});
    }

    const prayerBodySpeakerIds = new Set(['collect', 'prayer_offerings', 'prayer_after']);
    const briefDailySpeakerMap = {
        psalm: {
            kr: { '◎': '◎', '○': '○', '●': '●' },
            vn: { 'Đáp': 'Đ.', 'Ðáp': 'Đ.', 'Đ.': 'Đ.', 'Ð.': 'Đ.', 'Xướng': 'X.', 'X.': 'X.', 'Mọi người': 'CĐ.', 'Cộng đoàn': 'CĐ.', 'Tất cả': 'TC.', 'Giáo dân': 'GĐ.' },
            en: { 'Response': 'R.', 'R': 'R.', 'R.': 'R.', 'Versicle': 'V.', 'Verse': 'V.', 'V': 'V.', 'V.': 'V.', 'All': 'ALL', 'The People': 'ALL' },
            jp: { '答唱': '答', '答': '答', '先唱': '先', '先': '先', '会衆': '会', '会': '会', '詩編詠唱者': '詩' },
            la: { 'Responsum': '℟', 'Rit': '℟', 'R': '℟', 'R.': '℟', '℟': '℟', '℟.': '℟', 'Versiculus': '℣', 'V': '℣', 'V.': '℣', '℣': '℣', '℣.': '℣', 'Populus': 'P.', 'Omnes': 'P.' }
        },
        gospel_accl: {
            kr: { '◎': '◎', '○': '○', '●': '●' },
            vn: { 'Đáp': 'Đ.', 'Ðáp': 'Đ.', 'Đ.': 'Đ.', 'Ð.': 'Đ.', 'Xướng': 'X.', 'X.': 'X.', 'Mọi người': 'CĐ.', 'Cộng đoàn': 'CĐ.', 'Tất cả': 'TC.', 'Giáo dân': 'GĐ.' },
            en: { 'Response': 'R.', 'R': 'R.', 'R.': 'R.', 'Versicle': 'V.', 'Verse': 'V.', 'V': 'V.', 'V.': 'V.', 'All': 'ALL', 'The People': 'ALL' },
            jp: { '答唱': '答', '答': '答', '先唱': '先', '先': '先', '会衆': '会', '会': '会' },
            la: { 'Responsum': '℟', 'Rit': '℟', 'R': '℟', 'R.': '℟', '℟': '℟', '℟.': '℟', 'Versiculus': '℣', 'V': '℣', 'V.': '℣', '℣': '℣', '℣.': '℣', 'Populus': 'P.', 'Omnes': 'P.' }
        }
    };

    function isAlternativeText(text) {
        return !!strictAlternativeMatch(text);
    }

    function normalizeDailySpeaker(baseId, lower, speaker, role = '', text = '') {
        const cleaned = cleanNodeText(speaker);
        const cleanText = cleanNodeText(text);
        if (baseId === 'reading1' || baseId === 'reading2') {
            return role === 'intro' && cleanText ? (lectorSpeakerByLang[lower] || cleaned) : '';
        }
        if (baseId === 'gospel' && ['intro', 'body'].includes(role) && cleanText) return gospelSpeakerByLang[lower] || celebrantSpeakerByLang[lower] || cleaned;
        if (prayerBodySpeakerIds.has(baseId)) return '';
        if (!cleaned) return '';
        const sectionMap = briefDailySpeakerMap[baseId];
        if (!sectionMap) return cleaned;
        const langMap = sectionMap[lower] || {};
        return langMap[cleaned] || cleaned;
    }

    function lineHasLanguageContent(line, lower) {
        if (!line) return false;
        return !!(
            cleanNodeText(line[`sp_${lower}`]) ||
            cleanNodeText(line[`text_${lower}`]) ||
            cleanNodeText(line[`text_${lower}_ai`]) ||
            cleanNodeText(line[`role_${lower}`]) ||
            cleanNodeText(line[`rubric_${lower}`])
        );
    }

    function lineHasOtherLanguageContent(line, lower) {
        return ['kr', 'vn', 'en', 'jp', 'la'].some(candidate => candidate !== lower && lineHasLanguageContent(line, candidate));
    }

    function languageTextMatches(line, lower, pattern) {
        return pattern.test(cleanNodeText(line && line[`text_${lower}`]));
    }

    function removeDailyProclamationEndingLines(targetLines, baseId) {
        if (!['reading1', 'reading2', 'gospel'].includes(baseId)) return;
        const lowers = ['kr', 'vn', 'en', 'jp', 'la'];
        const touched = new Set();
        targetLines.forEach(line => {
            if (!line) return;
            lowers.forEach(lower => {
                if (!line[`role_${lower}`]) return;
                if (!strictIsProclamationEnding(line[`text_${lower}`])) return;
                line[`sp_${lower}`] = '';
                line[`text_${lower}`] = '';
                line[`text_${lower}_ai`] = '';
                line[`role_${lower}`] = '';
                touched.add(line);
            });
        });
        for (let index = targetLines.length - 1; index >= 0; index -= 1) {
            const line = targetLines[index];
            if (!touched.has(line)) continue;
            const hasContent = lowers.some(lower =>
                cleanNodeText(line[`sp_${lower}`]) ||
                cleanNodeText(line[`text_${lower}`]) ||
                cleanNodeText(line[`text_${lower}_ai`]) ||
                cleanNodeText(line[`rubric_${lower}`])
            );
            if (!hasContent) targetLines.splice(index, 1);
        }
    }

    function normalizeDailySectionLines(targetLines, baseId) {
        const lowers = ['kr', 'vn', 'en', 'jp', 'la'];
        const readingEndingPatterns = {
            kr: /주님의\s*말씀입니다/,
            vn: /^[ĐÐ]ó là lời Chúa\.?$/i,
            en: /^The word of the Lord\.?$/i,
            jp: /(神|主).{0,6}(ことば|御言葉)/,
            la: /^Verbum Domini\.?$/i
        };
        const gospelIntroPatterns = {
            kr: /전한\s+거룩한\s+복음입니다|복음입니다/,
            vn: /^Tin Mừng Chúa Giêsu Kitô/i,
            en: /(holy )?Gospel according to/i,
            jp: /福音/,
            la: /(sancti|secundum).{0,20}Evangel/i
        };
        const gospelBodyPatterns = {
            kr: /^그때에/,
            vn: /^(Khi ấy|Hôm ấy|Khi đó)\b/i,
            en: /^(Jesus|At that time|When)/i,
            jp: /^(そのとき|その時|イエス)/,
            la: /^(In illo tempore|Dixit|Factum est)/i
        };

        targetLines.forEach(line => {
            if (!line) return;
            lowers.forEach(lower => {
                const text = cleanNodeText(line[`text_${lower}`]);
                const role = line[`role_${lower}`] || '';
                const speaker = cleanNodeText(line[`sp_${lower}`]);
                if (baseId === 'gospel') {
                    if (lower === 'vn' && /^(CT\.|LM\.?\s*\(?PT\.?\)?)$/i.test(speaker)) line[`sp_${lower}`] = gospelSpeakerByLang.vn;
                    if (lower === 'en' && /^(S\.|C\.|P\.?\s*\(?D\.?\)?)$/i.test(speaker)) line[`sp_${lower}`] = gospelSpeakerByLang.en;
                    if (lower === 'jp' && speaker === '司') line[`sp_${lower}`] = gospelSpeakerByLang.jp;
                }
                if (baseId === 'reading1' || baseId === 'reading2') {
                    if (role === 'intro' && text) line[`sp_${lower}`] = lectorSpeakerByLang[lower] || line[`sp_${lower}`] || '';
                    if ((role === 'summary' || role === 'body') && text) line[`sp_${lower}`] = '';
                    if (languageTextMatches(line, lower, readingEndingPatterns[lower])) {
                        line[`sp_${lower}`] = lectorSpeakerByLang[lower] || line[`sp_${lower}`] || '';
                    }
                }
                if (baseId === 'gospel' && (languageTextMatches(line, lower, gospelIntroPatterns[lower]) || languageTextMatches(line, lower, gospelBodyPatterns[lower]))) {
                    line[`sp_${lower}`] = gospelSpeakerByLang[lower] || celebrantSpeakerByLang[lower] || line[`sp_${lower}`] || '';
                }
                if (prayerBodySpeakerIds.has(baseId)) {
                    if (isPrayerOpenerText(text)) {
                        line[`sp_${lower}`] = celebrantSpeakerByLang[lower] || line[`sp_${lower}`] || '';
                    } else if (isPrayerAmenText(text)) {
                        line[`sp_${lower}`] = peopleSpeakerByLang[lower] || line[`sp_${lower}`] || '';
                    } else if (isPrayerConclusionText(text)) {
                        line[`sp_${lower}`] = '';
                        line[`role_${lower}`] = 'conclusion';
                    } else if (text && !isAlternativeText(text)) {
                        line[`sp_${lower}`] = '';
                    }
                }
            });
        });

        if (baseId === 'prayer_offerings') {
            lowers.forEach(lower => {
                const firstBodyLine = targetLines.find(line => {
                    if (!line || line[`rubric_${lower}`]) return false;
                    const text = cleanNodeText(line[`text_${lower}`]);
                    return text && !isAlternativeText(text) && !isPrayerOpenerText(text) && !isPrayerAmenText(text);
                });
                if (firstBodyLine) firstBodyLine[`sp_${lower}`] = celebrantSpeakerByLang[lower] || firstBodyLine[`sp_${lower}`] || '';
            });
        }
    }

    function prayerConclusionForLanguage(targetLines, lower, baseId) {
        const lang = langCodeFromLowerKey(lower);
        for (const line of targetLines || []) {
            const text = cleanNodeText(line && line[`text_${lower}`]);
            if (!text) continue;
            const ending = prayerConclusionEndingForText(lang, baseId, text);
            const style = ending ? prayerConclusionStyle(lang, baseId, ending) : '';
            if (ending && style) return { line, ending, style };
        }
        return null;
    }

    function prayerHasBodyForLanguage(targetLines, lower, baseId) {
        const lang = langCodeFromLowerKey(lower);
        return (targetLines || []).some(line => {
            if (!line || line[`rubric_${lower}`]) return false;
            const text = cleanNodeText(line[`text_${lower}`] || line[`text_${lower}_ai`]);
            if (!text || isAlternativeText(text) || isPrayerOpenerText(text) || isPrayerAmenText(text)) return false;
            if (line[`role_${lower}`] === 'conclusion') return false;
            return prayerConclusionEndingForText(lang, baseId, text) !== text;
        });
    }

    function inferredPrayerConclusionReference(targetLines, baseId, preferredLowers) {
        for (const lower of preferredLowers) {
            if (!prayerHasBodyForLanguage(targetLines, lower, baseId)) continue;
            const body = (targetLines || [])
                .map(line => cleanNodeText(line && (line[`text_${lower}`] || line[`text_${lower}_ai`])))
                .filter(text => text && !isAlternativeText(text) && !isPrayerOpenerText(text) && !isPrayerAmenText(text))
                .join(' ');
            return {
                line: null,
                style: strictPrayerLooksDirectedToSon(body) ? 'addressed_son' : 'through_son'
            };
        }
        return null;
    }

    // A remote missal often abbreviates a conclusion, and some pages omit it
    // altogether. Preserve the theological direction of the source-language
    // conclusion and supply the authorized local formula without sending any
    // conclusion through AI translation.
    function ensureLocalizedPrayerConclusions(targetLines, baseId) {
        if (!strictPrayerKeys.has(baseId) || !Array.isArray(targetLines)) return;
        const lowers = ['kr', 'vn', 'en', 'jp', 'la'];
        targetLines.forEach(line => {
            if (!line || (!lineHasAnyRole(line, 'conclusion') && !isPrayerConclusionText(combinedLineText(line)))) return;
            lowers.forEach(lower => { line[`text_${lower}_ai`] = ''; });
        });
        const preferred = [
            normalizeSelectableLang(state.currentLoc || '', ''),
            normalizeSelectableLang(getLiturgicalBaseLang() || '', ''),
            'KR', 'VN', 'EN', 'JP', 'LA'
        ].map(lang => String(lang || '').toLowerCase())
            .filter((lower, index, list) => lowers.includes(lower) && list.indexOf(lower) === index);
        let reference = null;
        for (const lower of preferred) {
            reference = prayerConclusionForLanguage(targetLines, lower, baseId);
            if (reference) break;
        }
        if (!reference) reference = inferredPrayerConclusionReference(targetLines, baseId, preferred);
        if (!reference) return;

        lowers.forEach(lower => {
            const existing = prayerConclusionForLanguage(targetLines, lower, baseId);
            if (existing) {
                existing.line[`text_${lower}_ai`] = '';
                existing.line[`role_${lower}`] = 'conclusion';
                return;
            }
            const lang = langCodeFromLowerKey(lower);
            const formula = localizedPrayerConclusionFormula(lang, baseId, reference.style);
            if (!formula) return;
            let conclusionLine = reference.line && !lineHasLanguageContent(reference.line, lower)
                ? reference.line
                : targetLines.find(line => lineHasAnyRole(line, 'conclusion') && !lineHasLanguageContent(line, lower));
            if (!conclusionLine) {
                conclusionLine = emptyMassLine();
                targetLines.splice(parsedInsertIndex(targetLines, baseId), 0, conclusionLine);
            }
            conclusionLine[`sp_${lower}`] = '';
            conclusionLine[`text_${lower}`] = formula;
            conclusionLine[`text_${lower}_ai`] = '';
            conclusionLine[`role_${lower}`] = 'conclusion';
            conclusionLine[`rubric_${lower}`] = '';
            conclusionLine[`verse_refs_${lower}`] = [];
        });
    }

    function normalizedSummaryText(value) {
        return cleanNodeText(value)
            .replace(/^[“"「『〈《<]+|[”"」』〉》>.]+$/g, '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[đð]/g, 'd')
            .replace(/[ĐÐ]/g, 'D')
            .replace(/[^\p{L}\p{N}]+/gu, ' ')
            .replace(/\s+/g, ' ')
            .trim()
            .toLowerCase();
    }

    function normalizedTokenEndIndexes(value) {
        const raw = String(value || '');
        const tokens = [];
        let token = '';
        let tokenEnd = 0;
        for (let index = 0; index < raw.length;) {
            const codePoint = raw.codePointAt(index);
            const nextIndex = index + (codePoint > 0xffff ? 2 : 1);
            const normalized = String.fromCodePoint(codePoint)
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[đð]/g, 'd')
                .replace(/[ĐÐ]/g, 'D');
            for (const piece of normalized) {
                if (/[\p{L}\p{N}]/u.test(piece)) {
                    token += piece.toLowerCase();
                    tokenEnd = nextIndex;
                } else if (token) {
                    tokens.push({ token, end: tokenEnd });
                    token = '';
                }
            }
            index = nextIndex;
        }
        if (token) tokens.push({ token, end: tokenEnd });
        return tokens;
    }

    function stripLeadingSummaryByTokens(body, summary) {
        const summaryTokens = normalizedSummaryText(summary).split(' ').filter(Boolean);
        if (!summaryTokens.length) return body || '';
        const raw = String(body || '');
        const bodyTokens = normalizedTokenEndIndexes(raw);
        if (bodyTokens.length < summaryTokens.length) return body;
        const matches = summaryTokens.every((token, index) => bodyTokens[index] && bodyTokens[index].token === token);
        if (!matches) return body;
        return raw.slice(bodyTokens[summaryTokens.length - 1].end)
            .replace(/^[\s“”"「」『』〈〉《》<>\-–—.,:;。]+/u, '')
            .trim();
    }

    function stripLeadingSummaryFromBody(body, summary) {
        const normalizedSummary = normalizedSummaryText(summary);
        if (!normalizedSummary) return body || '';
        const parts = String(body || '').split(/\n+/);
        while (parts.length && normalizedSummaryText(parts[0]) === normalizedSummary) parts.shift();
        const joined = parts.join('\n').trim();
        if (joined !== String(body || '').trim()) return joined;
        const tokenStripped = stripLeadingSummaryByTokens(body, summary);
        if (tokenStripped !== String(body || '')) return tokenStripped;
        const raw = String(body || '');
        const candidates = [
            summary,
            `“${summary}”`,
            `"${summary}"`,
            `<${summary}>`
        ].map(item => String(item || '').trim()).filter(Boolean);
        const matched = candidates.find(candidate => raw.trim().startsWith(candidate));
        return matched ? raw.trim().slice(matched.length).replace(/^[\s.。]+/, '').trim() : body;
    }

    function normalizeParsedLinesBeforeApply(lower, baseId, parsedLines) {
        if (lower !== 'vn' || baseId !== 'gospel' || !Array.isArray(parsedLines)) return parsedLines;
        const summary = parsedLines.map(line => line && line.role === 'summary' ? cleanNodeText(line.text) : '').find(Boolean);
        if (!summary) return parsedLines;
        return parsedLines.map(line => {
            if (!line || line.role !== 'body' || !line.text) return line;
            const nextText = stripLeadingSummaryFromBody(line.text, summary);
            return nextText === line.text ? line : Object.assign({}, line, { text: nextText });
        });
    }

    function consolidateParsedReadingBodyLines(baseId, parsedLines) {
        if (!['reading1', 'reading2', 'gospel'].includes(baseId) || !Array.isArray(parsedLines)) return parsedLines;
        const output = [];
        let bodyLine = null;
        parsedLines.forEach(line => {
            if (!line || (line.role || 'body') !== 'body') {
                output.push(line);
                return;
            }
            if (!bodyLine) {
                bodyLine = Object.assign({}, line);
                output.push(bodyLine);
                return;
            }
            const nextText = String(line.text || '').trim();
            if (nextText) bodyLine.text = [String(bodyLine.text || '').trim(), nextText].filter(Boolean).join('\n');
            const nextAi = String(line.ai || '').trim();
            if (nextAi) bodyLine.ai = [String(bodyLine.ai || '').trim(), nextAi].filter(Boolean).join('\n');
            if (!bodyLine.sp && line.sp) bodyLine.sp = line.sp;
            if (!bodyLine.rubric && line.rubric) bodyLine.rubric = line.rubric;
        });
        return output;
    }

    function normalizedPsalmVerseRefs(value) {
        return Array.from(new Set((Array.isArray(value) ? value : [])
            .map(Number)
            .filter(Number.isInteger)))
            .sort((a, b) => a - b);
    }

    function psalmLineVerseRefs(line, lower = '') {
        if (!line) return [];
        if (lower) return normalizedPsalmVerseRefs(line[`verse_refs_${lower}`]);
        return normalizedPsalmVerseRefs(['kr', 'vn', 'en', 'jp', 'la'].flatMap(candidate => line[`verse_refs_${candidate}`] || []));
    }

    function psalmVerseRefsOverlap(left, right) {
        const rightSet = new Set(normalizedPsalmVerseRefs(right));
        return normalizedPsalmVerseRefs(left).some(verse => rightSet.has(verse));
    }

    function assignParsedLineToTarget(line, lower, parsed, baseId) {
        line[`sp_${lower}`] = normalizeDailySpeaker(baseId, lower, parsed.sp, parsed.role || '', parsed.text);
        line[`text_${lower}`] = parsed.text || '';
        line[`text_${lower}_ai`] = parsed.ai || '';
        line[`role_${lower}`] = parsed.role || '';
        line[`rubric_${lower}`] = parsed.rubric || '';
        line[`verse_refs_${lower}`] = normalizedPsalmVerseRefs(parsed.verseRefs);
    }

    function clearParsedLineLanguage(line, lower) {
        if (!line) return;
        line[`sp_${lower}`] = '';
        line[`text_${lower}`] = '';
        line[`text_${lower}_ai`] = '';
        line[`role_${lower}`] = '';
        line[`rubric_${lower}`] = '';
        line[`verse_refs_${lower}`] = [];
    }

    function applyParsedPsalmLinesForLanguage(targetLines, lower, parsedLines, baseId) {
        targetLines
            .filter(line => !isProtectedParsedTargetLineForLanguage(line, baseId, lower))
            .forEach(line => clearParsedLineLanguage(line, lower));
        let usedIndexes = new Set();
        const shiftUsedIndexes = insertedAt => {
            usedIndexes = new Set(Array.from(usedIndexes, index => index >= insertedAt ? index + 1 : index));
        };
        parsedLines.forEach(parsed => {
            const refs = normalizedPsalmVerseRefs(parsed && parsed.verseRefs);
            let targetIndex = -1;
            if (refs.length) {
                targetIndex = targetLines.findIndex((line, index) => {
                    if (usedIndexes.has(index) || isProtectedParsedTargetLineForLanguage(line, baseId, lower)) return false;
                    const otherRefs = normalizedPsalmVerseRefs(['kr', 'vn', 'en', 'jp', 'la']
                        .filter(candidate => candidate !== lower)
                        .flatMap(candidate => line[`verse_refs_${candidate}`] || []));
                    return otherRefs.length && psalmVerseRefsOverlap(refs, otherRefs);
                });
            }
            if (targetIndex < 0) {
                targetIndex = targetLines.findIndex((line, index) =>
                    !usedIndexes.has(index)
                    && !isProtectedParsedTargetLineForLanguage(line, baseId, lower)
                    && !psalmLineVerseRefs(line).length
                    && !lineHasLanguageContent(line, lower)
                );
            }
            if (targetIndex < 0 && refs.length) {
                const firstVerse = refs[0];
                targetIndex = targetLines.findIndex(line => {
                    const existing = psalmLineVerseRefs(line);
                    return existing.length && existing[0] > firstVerse;
                });
            }
            if (targetIndex < 0) targetIndex = parsedInsertIndexForLanguage(targetLines, baseId);
            if (!targetLines[targetIndex]
                || usedIndexes.has(targetIndex)
                || (refs.length && psalmLineVerseRefs(targetLines[targetIndex]).length && !psalmVerseRefsOverlap(refs, psalmLineVerseRefs(targetLines[targetIndex])))) {
                const inserted = emptyMassLine();
                targetLines.splice(targetIndex, 0, inserted);
                shiftUsedIndexes(targetIndex);
            }
            assignParsedLineToTarget(targetLines[targetIndex], lower, parsed, baseId);
            usedIndexes.add(targetIndex);
        });
    }

    function applyParsedLinesForLanguage(targetLines, lower, parsedLines, baseId) {
        parsedLines = normalizePrayerParsedLinesBeforeApply(lower, baseId, parsedLines);
        parsedLines = normalizeParsedLinesBeforeApply(lower, baseId, parsedLines);
        parsedLines = consolidateParsedReadingBodyLines(baseId, parsedLines);
        if (!Array.isArray(parsedLines) || !parsedLines.length) return;
        if (baseId === 'psalm' && parsedLines.some(line => normalizedPsalmVerseRefs(line && line.verseRefs).length)) {
            applyParsedPsalmLinesForLanguage(targetLines, lower, parsedLines, baseId);
            return;
        }
        if (usesReadingRoles(baseId, parsedLines)) {
            const targetsByRole = ensureRoleTargetLines(targetLines, baseId, parsedLines);
            Object.keys(targetsByRole).forEach(role => {
                const line = targetsByRole[role];
                line[`sp_${lower}`] = '';
                line[`text_${lower}`] = '';
                line[`text_${lower}_ai`] = '';
                line[`role_${lower}`] = '';
                line[`rubric_${lower}`] = '';
            });
            parsedLines.forEach(parsed => {
                const role = parsed.role || 'body';
                const line = targetsByRole[role] || targetsByRole.body;
                line[`sp_${lower}`] = normalizeDailySpeaker(baseId, lower, parsed.sp, role, parsed.text);
                line[`text_${lower}`] = parsed.text || '';
                line[`text_${lower}_ai`] = parsed.ai || '';
                line[`role_${lower}`] = role;
                line[`rubric_${lower}`] = parsed.rubric || '';
            });
            return;
        }
        let editableIndexes = editableParsedIndexesForLanguage(targetLines, lower, baseId);
        let insertAt = editableIndexes.length ? Math.max(...editableIndexes) + 1 : parsedInsertIndexForLanguage(targetLines, baseId);
        parsedLines.forEach((parsed, index) => {
            let targetIndex = editableIndexes[index];
            if (targetIndex == null) {
                const inserted = emptyMassLine();
                targetLines.splice(insertAt, 0, inserted);
                targetIndex = insertAt;
                insertAt += 1;
            } else if (parsed.rubric && lineHasOtherLanguageContent(targetLines[targetIndex], lower)) {
                const inserted = emptyMassLine();
                targetLines.splice(targetIndex, 0, inserted);
                editableIndexes = editableIndexes.map(value => value >= targetIndex ? value + 1 : value);
                editableIndexes.splice(index, 0, targetIndex);
                insertAt += 1;
            }
            const line = targetLines[targetIndex];
            assignParsedLineToTarget(line, lower, parsed, baseId);
        });
        editableIndexes.slice(parsedLines.length).forEach(index => {
            const line = targetLines[index];
            if (!line) return;
            clearParsedLineLanguage(line, lower);
        });
    }

    function clearParsedLanguageLines(targetLines, lower, baseId) {
        targetLines
            .filter(line => !isProtectedParsedTargetLineForLanguage(line, baseId, lower))
            .forEach(line => clearParsedLineLanguage(line, lower));
    }

    const dailyVariantKeys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    function cloneMassLines(lines) {
        return JSON.parse(JSON.stringify(Array.isArray(lines) ? lines : []));
    }

    function alternativeMarkerText(line) {
        return cleanNodeText([line && line.sp, line && line.text].filter(Boolean).join(' ')).replace(/[<>]/g, '').trim();
    }

    function isAlternativeMarkerLine(line) {
        const match = strictAlternativeMatch(alternativeMarkerText(line));
        return !!match && !match.rest;
    }

    function splitParsedAlternatives(parsedLines) {
        const options = [];
        let current = [];
        (parsedLines || []).forEach(line => {
            const text = alternativeMarkerText(line);
            const inline = strictAlternativeMatch(text);
            if (isAlternativeMarkerLine(line) || inline) {
                if (current.length) options.push(current);
                current = [];
                if (inline && inline.rest) current.push(Object.assign({}, line, { sp: '', text: inline.rest }));
                return;
            }
            current.push(line);
        });
        if (current.length) options.push(current);
        return options.length ? options : [parsedLines || []];
    }

    function normalizeGospelAlternativeOption(option, lower) {
        if (lower !== 'kr') return option;
        return (option || []).map(line => {
            if (!line || line.role !== 'body') return line;
            const text = String(line.text || '')
                .replace(/^\s*<[^>\n]+>\s*(?:\r?\n|$)/u, '')
                .replace(/^\s*[✠▥]\s*[^\n]*전한\s+거룩한\s+복음입니다\.?\s*(?:\r?\n|$)/u, '')
                .trim();
            return Object.assign({}, line, { text });
        }).filter(line => cleanNodeText(line && line.text) || cleanNodeText(line && line.sp) || cleanNodeText(line && line.rubric));
    }

    function expandBracketedVietnameseGospelLines(parsedLines) {
        const source = Array.isArray(parsedLines) ? parsedLines : [];
        if (splitParsedAlternatives(source).length > 1) return source;
        const hasMarkedBody = source.some(line => line && line.role === 'body' && /(?:\[[\s\S]+?\]|\{[\s\S]+?\})/u.test(String(line.text || '')));
        if (!hasMarkedBody) return source;
        const makeOption = shortForm => source.map(line => {
            if (!line || line.role !== 'body') return Object.assign({}, line);
            const raw = String(line.text || '');
            const text = shortForm
                ? raw.replace(/(?:\[[\s\S]*?\]|\{[\s\S]*?\})/gu, '').replace(/\n{3,}/g, '\n\n').trim()
                : raw.replace(/[\[\]{}]/g, '').replace(/\n{3,}/g, '\n\n').trim();
            return Object.assign({}, line, { text });
        }).filter(line => cleanNodeText(line && line.text) || cleanNodeText(line && line.sp) || cleanNodeText(line && line.rubric));
        return makeOption(false).concat([parsedLine('', 'Hoặc:')], makeOption(true));
    }

    function normalizeDailyGospelOptions(newData) {
        if (!newData || !Array.isArray(newData.vn_lines)) return;
        newData.vn_lines = expandBracketedVietnameseGospelLines(newData.vn_lines);
        if (splitParsedAlternatives(newData.vn_lines).length < 2) return;
        const existingOptionCits = Array.isArray(newData.optionCits_vn) && newData.optionCits_vn.length >= 2
            ? newData.optionCits_vn
            : [];
        const optionCits = existingOptionCits.length
            ? existingOptionCits
            : vietnameseGospelOptionCitations(newData.cit_vn || '', newData.vn_lines);
        if (optionCits.some(item => Object.keys(item).length)) {
            newData.optionCits_vn = optionCits;
            if (optionCits[0].cit_vn) newData.cit_vn = optionCits[0].cit_vn;
        }
    }

    function koreanMissalForeignProperEntry(date) {
        const leftLang = normalizeSelectableLang(state.currentLoc || '', '');
        const rightLang = normalizeSelectableLang(state.targetLang || '', '');
        if (!date || !leftLang || leftLang === 'KR' || rightLang !== 'KR') return null;
        const countryKey = getLiturgicalCalendarProfile(state.selectedLocationCode || leftLang).countryCalendar || leftLang;
        if (!getCountryCalendarOverride(date, countryKey)) return null;
        return koreanMissalForeignProperData[`${countryKey}:${calendarDateKey(date)}`] || null;
    }

    function applyKoreanMissalForeignProperOverlay(fetchedData, date) {
        const entry = koreanMissalForeignProperEntry(date);
        if (!entry || !entry.data) return null;
        Object.entries(entry.data).forEach(([sectionKey, sectionValue]) => {
            if (!fetchedData[sectionKey]) fetchedData[sectionKey] = {};
            if (sectionValue && typeof sectionValue === 'object') {
                if (sectionValue.text) fetchedData[sectionKey].kr = sectionValue.text;
                if (sectionValue.cit_kr) fetchedData[sectionKey].cit_kr = sectionValue.cit_kr;
                return;
            }
            if (sectionValue) fetchedData[sectionKey].kr = sectionValue;
        });
        return entry;
    }

    function koreanMissalOrdinaryConflictEntry(date) {
        const leftLang = normalizeSelectableLang(state.currentLoc || '', '');
        const rightLang = normalizeSelectableLang(state.targetLang || '', '');
        if (!date || !leftLang || leftLang === 'KR' || rightLang !== 'KR') return null;
        const seasonalMeta = getSeasonMeta(date);
        if (seasonalMeta.season !== 'ordinary' || !seasonalMeta.week) return null;
        const info = state.liturgyInfo || buildGeneratedLiturgyInfo(date);
        const leftTitle = info.names && info.names[leftLang];
        if (!isGeneratedSeasonalNameForInfo(leftLang, leftTitle, info)) return null;
        const koreanCountryProper = getCountryCalendarOverride(date, 'KR');
        const koreanPerpetualProper = localProperPrefaceByDate(date, 'KR');
        if (!koreanCountryProper && !koreanPerpetualProper) return null;
        return (globalThis.koreanMissalOrdinaryWeekData || {})[seasonalMeta.week] || null;
    }

    function applyKoreanMissalOrdinaryConflictOverlay(fetchedData, date) {
        const entry = koreanMissalOrdinaryConflictEntry(date);
        if (!entry || !entry.data) return null;
        Object.entries(entry.data).forEach(([sectionKey, sectionValue]) => {
            if (!sectionValue || typeof sectionValue !== 'object') return;
            if (!fetchedData[sectionKey]) fetchedData[sectionKey] = {};
            // This Korean text is the official translation counterpart of the
            // foreign temporal Mass, not an independent Korean local proper.
            // Preserve that relationship when selectable options are built.
            fetchedData[sectionKey].__pairKoreanOrdinaryTranslation = true;
            if (sectionValue.text) fetchedData[sectionKey].kr = sectionValue.text;
            if (Array.isArray(sectionValue.lines) && sectionValue.lines.length) {
                fetchedData[sectionKey].kr_lines = sectionValue.lines;
            }
            if (Array.isArray(sectionValue.optionCits) && sectionValue.optionCits.length) {
                fetchedData[sectionKey].optionCits_kr = sectionValue.optionCits;
            }
            Object.keys(sectionValue).forEach(field => {
                if (/^cit_/i.test(field) && sectionValue[field]) fetchedData[sectionKey][field] = sectionValue[field];
            });
        });
        return entry;
    }

    const localMissalPrayerSectionIds = new Set(['entrance', 'collect', 'prayer_offerings', 'preface', 'communion', 'prayer_after']);
    const localMissalDataLanguages = new Set(['KR', 'VN', 'EN', 'LA']);
    const localMissalComparisonTtlMs = 180 * 24 * 60 * 60 * 1000;
    const pendingLocalMissalComparisonKeys = new Set();

    function localMissalLanguageData(lang) {
        const code = normalizeSelectableLang(lang, '');
        const root = globalThis.localMissalPrayerData;
        return code && root && root.languages ? root.languages[code] || null : null;
    }

    function localMissalTitleTokens(value) {
        return normalizeSemanticText(value)
            .replace(/\b(chúa nhật|chua nhat)\s+([ivxlcdm]+)\b/giu, (full, label, numeral) => {
                const week = romanNumerals.findIndex(value => value.toUpperCase() === numeral.toUpperCase());
                return week > 0 ? `${label} tuan ${week}` : full;
            })
            .replace(/\b(tuần|tuan|week|hebdomada)\s+([ivxlcdm]+)\b/giu, (full, label, numeral) => {
                const week = romanNumerals.findIndex(value => value.toUpperCase() === numeral.toUpperCase());
                return week > 0 ? `${label} ${week}` : full;
            })
            .replace(/제\s*(\d+)\s*주(?:일|간)/gu, '제$1주')
            .replace(/\b(?:solemnity|feast|memorial|optional|proper|common|memoria|festum|sollemnitas)\b/giu, ' ')
            .replace(/(?:대축일|축일|기념일|고유|공통)/gu, ' ')
            .match(/[\p{L}\p{N}]+/gu) || [];
    }

    function localMissalTitleScore(currentTitle, candidateTitle) {
        const currentKey = normalizeCalendarNameForCompare(currentTitle);
        const candidateKey = normalizeCalendarNameForCompare(candidateTitle);
        if (!currentKey || !candidateKey) return 0;
        if (currentKey === candidateKey) return 1;
        const shorter = currentKey.length <= candidateKey.length ? currentKey : candidateKey;
        const longer = currentKey.length > candidateKey.length ? currentKey : candidateKey;
        if (shorter.length >= 4 && shorter.length / longer.length >= 0.55 && longer.includes(shorter)) return 0.92;
        const currentTokens = Array.from(new Set(localMissalTitleTokens(currentTitle)));
        const candidateTokens = Array.from(new Set(localMissalTitleTokens(candidateTitle)));
        if (!currentTokens.length || !candidateTokens.length) return 0;
        const candidateSet = new Set(candidateTokens);
        const matches = currentTokens.filter(token => candidateSet.has(token)).length;
        const containment = matches / Math.max(1, Math.min(currentTokens.length, candidateTokens.length));
        const balance = matches / Math.max(currentTokens.length, candidateTokens.length);
        return containment * 0.75 + balance * 0.25;
    }

    function bestLocalMissalEntry(entries, currentTitle) {
        let best = null;
        (entries || []).forEach((entry, index) => {
            if (!entry || !entry.data) return;
            const score = localMissalTitleScore(currentTitle, entry.title || '');
            const completeness = localMissalPrayerSectionIds.size
                ? Array.from(localMissalPrayerSectionIds).filter(key => cleanNodeText(entry.data[key])).length
                : 0;
            const candidate = { entry, score, completeness, index };
            if (!best
                || candidate.score > best.score
                || (candidate.score === best.score && candidate.completeness > best.completeness)
                || (candidate.score === best.score && candidate.completeness === best.completeness && candidate.index < best.index)) {
                best = candidate;
            }
        });
        return best;
    }

    function localMissalLiturgyInfoForDate(date) {
        const current = state.liturgyInfo;
        if (current && current.dateStr === formatKoreanDateString(date)) return current;
        return buildGeneratedLiturgyInfo(date);
    }

    function localMissalEntryForLanguage(lang, date) {
        const code = normalizeSelectableLang(lang, '');
        if (!date || !localMissalDataLanguages.has(code)) return null;
        if (code === 'EN') {
            const countryModule = activeCountryMassModule();
            const countryKey = dataJurisdictionForLocation();
            const datedEntries = countryModule ? countryMassProperEntriesForDate(countryKey, date) : [];
            const info = localMissalLiturgyInfoForDate(date);
            const currentTitle = info.names && info.names.EN || '';
            const dated = bestLocalMissalEntry(datedEntries, currentTitle);
            if (dated && (dated.score >= 0.52 || datedEntries.length === 1)) return dated.entry;
            if (countryModule && countryKey !== 'US') return null;
        }
        const languageData = localMissalLanguageData(code);
        if (!languageData) return null;
        const info = localMissalLiturgyInfoForDate(date);
        const currentTitle = info.names && info.names[code] || '';
        const datedEntries = languageData.calendar && languageData.calendar[calendarDateKey(date)] || [];
        const dated = bestLocalMissalEntry(datedEntries, currentTitle);
        if (dated && dated.score >= 0.52) return dated.entry;
        const seasonalTitle = isGeneratedSeasonalNameForInfo(code, currentTitle, info);
        if (dated && !seasonalTitle && datedEntries.length === 1) return dated.entry;
        const catalog = bestLocalMissalEntry(languageData.catalog || [], currentTitle);
        return catalog && catalog.score >= 0.72 ? catalog.entry : null;
    }

    function localMissalParsedSnapshot(section, lower) {
        if (!section.__localMissalParsedSnapshots) section.__localMissalParsedSnapshots = {};
        if (!section.__localMissalParsedSnapshots[lower]) {
            const fields = [
                lower,
                `${lower}_lines`,
                `optionCits_${lower}`,
                `optionLabels_${lower}`,
                `optionKinds_${lower}`,
                `cit_${lower}`
            ];
            section.__localMissalParsedSnapshots[lower] = Object.fromEntries(fields.map(field => {
                const exists = Object.prototype.hasOwnProperty.call(section, field);
                return [field, {
                    exists,
                    value: exists ? cloneData(section[field]) : null
                }];
            }));
        }
        return section.__localMissalParsedSnapshots[lower];
    }

    function localMissalSnapshotText(snapshot, lower) {
        const direct = snapshot && snapshot[lower];
        if (direct && direct.exists && cleanNodeText(direct.value)) return cleanNodeText(direct.value);
        const structured = snapshot && snapshot[`${lower}_lines`];
        if (!structured || !structured.exists || !Array.isArray(structured.value)) return '';
        return structured.value.map(line => cleanNodeText(line && line.text)).filter(Boolean).join('\n');
    }

    function restoreLocalMissalSnapshot(section, snapshot) {
        Object.entries(snapshot || {}).forEach(([field, saved]) => {
            if (saved && saved.exists) section[field] = cloneData(saved.value);
            else delete section[field];
        });
    }

    function formattedLocalMissalSection(lang, sectionKey, text) {
        const source = cleanNodeText(text);
        if (!source) return null;
        try {
            return strictFormatSection(lang, sectionKey, {
                text: source,
                lines: String(text).split(/\r?\n/).map(cleanNodeText).filter(Boolean)
            });
        } catch (error) {
            console.warn(`${lang} local Missal ${sectionKey} formatting failed.`, error);
            return { text: source, lines: [parsedLine('', source, strictPrayerKeys.has(sectionKey) ? 'body' : '')] };
        }
    }

    function localMissalComparisonStorageKey(date, lang, sectionKey, localText, parsedText) {
        return `${STORAGE_PREFIX}localMissal:${formatDateIso(date)}:${lang}:${sectionKey}:${stableTextHash(localText)}:${stableTextHash(parsedText)}`;
    }

    function readCachedLocalMissalComparison(date, lang, sectionKey, localText, parsedText) {
        const entry = readStorageJSON(localMissalComparisonStorageKey(date, lang, sectionKey, localText, parsedText));
        if (!entry || typeof entry.equivalent !== 'boolean' || !isFreshCacheEntry(entry, localMissalComparisonTtlMs)) return null;
        return entry.equivalent;
    }

    function writeCachedLocalMissalComparison(date, lang, sectionKey, localText, parsedText, equivalent) {
        writeStorageJSON(localMissalComparisonStorageKey(date, lang, sectionKey, localText, parsedText), {
            cachedAt: Date.now(),
            equivalent: !!equivalent
        });
    }

    function applyLocalMissalPrayerOverlay(fetchedData, date) {
        if (!fetchedData || !date || !globalThis.localMissalPrayerData) return [];
        if (!fetchedData.__localMissalEntries) fetchedData.__localMissalEntries = {};
        const applied = [];
        getActiveDailySourceLanguages().forEach(lang => {
            if (!localMissalDataLanguages.has(lang)) return;
            const info = localMissalLiturgyInfoForDate(date);
            const titleKey = cleanNodeText(info && info.names && info.names[lang]);
            const cachedEntry = fetchedData.__localMissalEntries[lang];
            if (!cachedEntry || cachedEntry.titleKey !== titleKey) {
                fetchedData.__localMissalEntries[lang] = {
                    titleKey,
                    entry: localMissalEntryForLanguage(lang, date) || null
                };
            }
            const entry = fetchedData.__localMissalEntries[lang].entry;
            const lower = lang.toLowerCase();
            if (!entry || !entry.data) {
                localMissalPrayerSectionIds.forEach(sectionKey => {
                    const section = fetchedData[sectionKey];
                    if (!section || !section.__localMissalOverlays || !section.__localMissalOverlays[lower]) return;
                    restoreLocalMissalSnapshot(section, section.__localMissalParsedSnapshots && section.__localMissalParsedSnapshots[lower]);
                    delete section.__localMissalOverlays[lower];
                });
                return;
            }
            localMissalPrayerSectionIds.forEach(sectionKey => {
                const localText = cleanNodeText(entry.data[sectionKey]);
                if (!localText) {
                    const previousSection = fetchedData[sectionKey];
                    if (previousSection && previousSection.__localMissalOverlays && previousSection.__localMissalOverlays[lower]) {
                        restoreLocalMissalSnapshot(
                            previousSection,
                            previousSection.__localMissalParsedSnapshots && previousSection.__localMissalParsedSnapshots[lower]
                        );
                        delete previousSection.__localMissalOverlays[lower];
                    }
                    return;
                }
                if (!fetchedData[sectionKey]) fetchedData[sectionKey] = {};
                const section = fetchedData[sectionKey];
                const snapshot = localMissalParsedSnapshot(section, lower);
                const parsedText = localMissalSnapshotText(snapshot, lower);
                const equivalent = parsedText
                    ? readCachedLocalMissalComparison(date, lang, sectionKey, localText, parsedText)
                    : true;
                if (equivalent === false) {
                    restoreLocalMissalSnapshot(section, snapshot);
                    if (section.__localMissalOverlays) delete section.__localMissalOverlays[lower];
                    return;
                }
                const formatted = formattedLocalMissalSection(lang, sectionKey, localText);
                if (!formatted) return;
                section[lower] = formatted.text || localText;
                section[`${lower}_lines`] = Array.isArray(formatted.lines) && formatted.lines.length
                    ? formatted.lines
                    : [parsedLine('', localText)];
                delete section[`optionCits_${lower}`];
                delete section[`optionLabels_${lower}`];
                delete section[`optionKinds_${lower}`];
                if (!section.__localMissalOverlays) section.__localMissalOverlays = {};
                section.__localMissalOverlays[lower] = {
                    lang,
                    sectionKey,
                    entryTitle: entry.title || '',
                    page: entry.page || 0,
                    localText,
                    parsedText
                };
                applied.push(section.__localMissalOverlays[lower]);
            });
        });
        return applied;
    }

    function collectLocalMissalComparisonTasks(fetchedData, date) {
        const tasks = [];
        localMissalPrayerSectionIds.forEach(sectionKey => {
            const section = fetchedData && fetchedData[sectionKey];
            Object.values(section && section.__localMissalOverlays || {}).forEach(overlay => {
                if (!overlay || !overlay.localText || !overlay.parsedText) return;
                const exactLocal = normalizeSemanticText(overlay.localText).replace(/[^\p{L}\p{N}]+/gu, '');
                const exactParsed = normalizeSemanticText(overlay.parsedText).replace(/[^\p{L}\p{N}]+/gu, '');
                if (exactLocal && exactLocal === exactParsed) {
                    writeCachedLocalMissalComparison(date, overlay.lang, sectionKey, overlay.localText, overlay.parsedText, true);
                    return;
                }
                if (readCachedLocalMissalComparison(date, overlay.lang, sectionKey, overlay.localText, overlay.parsedText) !== null) return;
                const signature = localMissalComparisonStorageKey(date, overlay.lang, sectionKey, overlay.localText, overlay.parsedText);
                if (pendingLocalMissalComparisonKeys.has(signature)) return;
                pendingLocalMissalComparisonKeys.add(signature);
                tasks.push(Object.assign({}, overlay, { signature }));
            });
        });
        return tasks;
    }

    function buildLocalMissalComparisonPrompt(task) {
        return [
            'Compare a locally stored Roman Missal text with a live website transcription in the same language.',
            'Return equivalent=true only when they are the same authorized prayer or antiphon.',
            'Ignore line wrapping, punctuation, citation formatting, abbreviated versus expanded conclusions, and a small number of obvious OCR letter errors.',
            'Return equivalent=false when the saint, feast, biblical antiphon, central petition, or formular source is different.',
            'If uncertain, return false so the live parsed text safely replaces the local text.',
            'Return strict JSON only: {"equivalent":true} or {"equivalent":false}.',
            '',
            JSON.stringify({
                language: task.lang,
                section: task.sectionKey,
                localEntryTitle: task.entryTitle,
                localPdfPage: task.page,
                localMissalText: task.localText,
                liveParsedText: task.parsedText
            }, null, 2)
        ].join('\n');
    }

    async function compareLocalMissalPrayersWithAI(fetchedData, date) {
        const tasks = collectLocalMissalComparisonTasks(fetchedData, date).slice(0, 15);
        if (!tasks.length) return false;
        let changed = false;
        for (const task of tasks) {
            try {
                const payload = await fetchGeminiViaFirebase('align', {
                    contents: [{ parts: [{ text: buildLocalMissalComparisonPrompt(task) }] }],
                    generationConfig: { temperature: 0 }
                }, { timeoutMs: 30000, label: 'Local Missal comparison' });
                const parsed = extractJsonObjectFromText(geminiTextFromPayload(payload));
                if (typeof parsed.equivalent !== 'boolean') throw new Error('Local Missal comparison returned no boolean decision.');
                writeCachedLocalMissalComparison(date, task.lang, task.sectionKey, task.localText, task.parsedText, parsed.equivalent);
                changed = true;
            } catch (error) {
                console.warn(`${task.lang} local Missal ${task.sectionKey} comparison failed; kept local text.`, error);
            } finally {
                pendingLocalMissalComparisonKeys.delete(task.signature);
            }
            await new Promise(resolve => setTimeout(resolve, 180));
        }
        return changed;
    }

    function buildKoreanOrdinaryTranslationAlignment(baseId, section, optionMap) {
        if (!section || !section.__pairKoreanOrdinaryTranslation) return [];
        const left = normalizeSelectableLang(state.currentLoc || '', '').toLowerCase();
        if (!left || left === 'kr') return [];
        if (!Array.isArray(optionMap && optionMap[left]) || !optionMap[left].length) return [];
        if (!Array.isArray(optionMap && optionMap.kr) || !optionMap.kr.length) return [];
        return normalizeVariantAlignmentGroups(optionMap, [{ [left]: 0, kr: 0 }]);
    }

    // When two or more displayed languages come from the bundled Missal for
    // the same liturgical day, their formular order is authoritative.  Pair
    // those options before the asynchronous semantic check so the UI never
    // flashes source-only choices and then collapses them after a click.
    function buildLocalMissalTranslationAlignment(baseId, section, optionMap) {
        if (!localMissalPrayerSectionIds.has(baseId) || !section || !section.__localMissalOverlays) return [];
        const lowers = ['kr', 'vn', 'en', 'la']
            .filter(lower => section.__localMissalOverlays[lower]
                && Array.isArray(optionMap && optionMap[lower])
                && optionMap[lower].length);
        if (lowers.length < 2) return [];
        const maxOptions = Math.max(...lowers.map(lower => optionMap[lower].length));
        const groups = Array.from({ length: maxOptions }, (_, index) => Object.fromEntries(
            lowers.filter(lower => optionMap[lower][index]).map(lower => [lower, index])
        )).filter(group => Object.keys(group).length);
        return normalizeVariantAlignmentGroups(optionMap, groups);
    }

    const dailyLengthVariantLabels = {
        reading: {
            long: { kr: '긴 독서', vn: 'Bài đọc dài', en: 'Long Reading', jp: '長い朗読', la: 'Lectio longior' },
            short: { kr: '짧은 독서', vn: 'Bài đọc ngắn', en: 'Short Reading', jp: '短い朗読', la: 'Lectio brevior' }
        },
        gospel: {
            long: { kr: '긴 복음', vn: 'Bài Tin Mừng dài', en: 'Long Gospel', jp: '長い福音', la: 'Evangelium longum' },
            short: { kr: '짧은 복음', vn: 'Bài Tin Mừng ngắn', en: 'Short Gospel', jp: '短い福音', la: 'Evangelium breve' }
        }
    };
    const gospelLengthVariantLabels = dailyLengthVariantLabels.gospel;

    function dailyVariantBodyText(variant, lower) {
        const lines = Array.isArray(variant && variant.lines) ? variant.lines : [];
        const body = lines
            .filter(line => line && line[`role_${lower}`] === 'body')
            .map(line => cleanNodeText(line[`text_${lower}`]))
            .filter(Boolean);
        if (body.length) return body.join(' ');
        return lines
            .filter(line => line && !lineHasAnyRubric(line))
            .map(line => cleanNodeText(line && line[`text_${lower}`]))
            .filter(Boolean)
            .join(' ');
    }

    function dailyVariantLengthTokens(text) {
        return normalizeSemanticText(text).match(/[\p{L}\p{N}]+/gu) || [];
    }

    function dailyVariantTokenContainment(longText, shortText) {
        const longCounts = new Map();
        dailyVariantLengthTokens(longText).forEach(token => longCounts.set(token, (longCounts.get(token) || 0) + 1));
        const shortTokens = dailyVariantLengthTokens(shortText);
        if (shortTokens.length < 5) return 0;
        let matched = 0;
        shortTokens.forEach(token => {
            const remaining = longCounts.get(token) || 0;
            if (!remaining) return;
            matched += 1;
            longCounts.set(token, remaining - 1);
        });
        return matched / shortTokens.length;
    }

    function dailyVariantLengthPair(first, second, baseId) {
        const firstLanguages = dailyVariantContentLanguages(first.variant, baseId);
        const secondLanguages = dailyVariantContentLanguages(second.variant, baseId);
        const sharedLanguages = firstLanguages.filter(lower => secondLanguages.includes(lower));
        let best = null;
        sharedLanguages.forEach(lower => {
            const firstText = dailyVariantBodyText(first.variant, lower);
            const secondText = dailyVariantBodyText(second.variant, lower);
            const firstLength = normalizeSemanticText(firstText).replace(/[^\p{L}\p{N}]+/gu, '').length;
            const secondLength = normalizeSemanticText(secondText).replace(/[^\p{L}\p{N}]+/gu, '').length;
            if (!firstLength || !secondLength) return;
            const longEntry = firstLength >= secondLength ? first : second;
            const shortEntry = firstLength >= secondLength ? second : first;
            const longText = firstLength >= secondLength ? firstText : secondText;
            const shortText = firstLength >= secondLength ? secondText : firstText;
            const longLength = Math.max(firstLength, secondLength);
            const shortLength = Math.min(firstLength, secondLength);
            if (longLength < shortLength * 1.18) return;
            const containment = dailyVariantTokenContainment(longText, shortText);
            if (containment < 0.86) return;
            const candidate = { longEntry, shortEntry, score: containment + (1 - shortLength / longLength) };
            if (!best || candidate.score > best.score) best = candidate;
        });
        return best;
    }

    function applyDailyLengthVariantLabels(variants, baseId) {
        if (!['reading1', 'reading2', 'gospel'].includes(baseId)) return variants;
        const entries = Object.entries(variants || {}).map(([key, variant]) => ({
            key,
            variant,
            kind: variant && variant.__dailyOptionKind || '',
            sourceLower: dailyVariantSourceLower(variant, baseId)
        }));
        const groups = new Map();
        entries.forEach(entry => {
            const groupKey = `${entry.kind || 'none'}:${entry.sourceLower || 'shared'}`;
            if (!groups.has(groupKey)) groups.set(groupKey, []);
            groups.get(groupKey).push(entry);
        });
        groups.forEach(groupEntries => {
            const candidates = [];
            groupEntries.forEach((first, firstIndex) => {
                groupEntries.slice(firstIndex + 1).forEach(second => {
                    const pair = dailyVariantLengthPair(first, second, baseId);
                    if (pair) candidates.push(pair);
                });
            });
            const assigned = new Set();
            candidates.sort((a, b) => b.score - a.score).forEach(pair => {
                if (assigned.has(pair.longEntry.key) || assigned.has(pair.shortEntry.key)) return;
                pair.longEntry.variant.__dailyLengthKind = 'long';
                pair.shortEntry.variant.__dailyLengthKind = 'short';
                const pairKey = [pair.longEntry.key, pair.shortEntry.key].sort().join(':');
                pair.longEntry.variant.__dailyLengthPairKey = pairKey;
                pair.shortEntry.variant.__dailyLengthPairKey = pairKey;
                assigned.add(pair.longEntry.key);
                assigned.add(pair.shortEntry.key);
            });
        });
        const labelGroup = baseId === 'gospel' ? dailyLengthVariantLabels.gospel : dailyLengthVariantLabels.reading;
        entries.forEach(entry => {
            const lengthKind = entry.variant && entry.variant.__dailyLengthKind;
            if (lengthKind && !entry.kind) entry.variant.label = Object.assign({}, labelGroup[lengthKind]);
        });
        return variants;
    }

    function applyGospelLengthVariantCitations(variants, newData) {
        Object.values(variants || {}).forEach(variant => {
            const isLong = variant && (variant.__dailyLengthKind === 'long'
                || (variant.label && variant.label.kr === gospelLengthVariantLabels.long.kr));
            const isShort = variant && (variant.__dailyLengthKind === 'short'
                || (variant.label && variant.label.kr === gospelLengthVariantLabels.short.kr));
            if (!isLong && !isShort) return;
            variant.cit = variant.cit || {};
            ['kr', 'vn', 'en', 'jp', 'la'].forEach(lower => {
                const mappedIndex = variant.__dailySourceIndexes && variant.__dailySourceIndexes[lower];
                const optionIndex = Number.isInteger(mappedIndex) ? mappedIndex : (isShort ? 1 : 0);
                const optionCits = newData && newData[`optionCits_${lower}`];
                const source = Array.isArray(optionCits) ? optionCits[optionIndex] : null;
                const key = `cit_${lower}`;
                if (source && source[key]) variant.cit[key] = source[key];
            });
            if (isShort) {
                const vietnameseShortIndex = Number.isInteger(variant.__dailySourceIndexes && variant.__dailySourceIndexes.vn)
                    ? variant.__dailySourceIndexes.vn
                    : 1;
                const vietnameseShort = newData && Array.isArray(newData.optionCits_vn) && newData.optionCits_vn[vietnameseShortIndex]
                    ? cleanNodeText(newData.optionCits_vn[vietnameseShortIndex].cit_vn || '')
                    : '';
                const shortRange = (vietnameseShort.match(/[,.:]\s*([\d\s;\-–—a-z]+)$/iu) || [])[1];
                if (shortRange) {
                    ['kr', 'en', 'jp', 'la'].forEach(lower => {
                        const key = `cit_${lower}`;
                        if (!variant.cit[key]) return;
                        variant.cit[key] = variant.cit[key].replace(/([,.:]\s*)[\d\s;\-–—a-z]+$/iu, `$1${shortRange}`);
                    });
                }
            }
        });
    }

    const aiAlignedVariantSectionIds = new Set(['psalm', 'gospel_accl', 'entrance', 'communion', 'collect', 'prayer_offerings', 'prayer_after']);

    function selectableOptionMapFromData(newData, baseId = '') {
        const optionMap = {};
        let maxOptions = 1;
        ['kr', 'vn', 'en', 'jp', 'la'].forEach(lower => {
            const structured = newData && newData[`${lower}_lines`];
            if (!Array.isArray(structured) || !structured.length) return;
            const options = dedupeParsedAlternatives(baseId, splitParsedAlternatives(structured))
                .filter(option => Array.isArray(option) && option.length);
            if (!options.length) return;
            optionMap[lower] = options;
            maxOptions = Math.max(maxOptions, options.length);
        });
        return { optionMap, maxOptions };
    }

    function needsCrossLanguageVariantAlignment(optionMap, maxOptions) {
        if (maxOptions >= 2) return true;
        return Object.keys(optionMap || {}).filter(lower => (
            Array.isArray(optionMap[lower]) && optionMap[lower].length
        )).length >= 2;
    }

    function isAlleluiaOnlyText(text) {
        const compact = cleanNodeText(text)
            .replace(/^(?:CĐ\.|CD\.|◎|会)\s*/i, '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .normalize('NFC')
            .replace(/[()\[\]{}\-–—,.!?:;、。，\s]/g, '')
            .toLowerCase();
        return /^(?:alleluia|aleluia|haleluia|알렐루야|アレルヤ)+$/i.test(compact);
    }

    function variantOptionMeaningText(baseId, optionLines) {
        let parts = (optionLines || [])
            .map(line => cleanNodeText([line && line.rubric, line && line.text].filter(Boolean).join(' ')))
            .filter(Boolean);
        if (baseId === 'gospel_accl') {
            parts = parts.filter(part => !isAlleluiaOnlyText(part));
        }
        if (baseId === 'psalm') {
            parts = parts.map(part => part
                .replace(/\s*-\s*(?:Đáp|Ðáp|Dap|Response|R\.|◎)\.?\s*$/iu, '')
                .replace(/\s*\(.*?참조.*?\)\s*/g, ' ')
                .trim());
        }
        return parts.join('\n').slice(0, 1400);
    }

    function dedupeParsedAlternatives(baseId, options) {
        const seen = new Set();
        return (options || []).filter(option => {
            const key = normalizeSemanticText(variantOptionMeaningText(baseId, option))
                .replace(/[^\p{L}\p{N}]+/gu, '');
            if (!key || seen.has(key)) return false;
            seen.add(key);
            return true;
        });
    }

    function normalizeSemanticText(text) {
        return String(text || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .normalize('NFC')
            .replace(/[ĐÐ]/g, 'D')
            .replace(/[đð]/g, 'd')
            .replace(/\s+/g, ' ')
            .toLowerCase();
    }

    function isPrayerAfterConclusionLine(text) {
        const cleaned = cleanNodeText(text).replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '');
        const normalized = normalizeSemanticText(cleaned);
        return /^chung con cau xin nho\b/.test(normalized)
            || /^성자께서는\s*(?:성부와\s*함께\s*)?영원히(?:\s|$)/.test(cleaned);
    }

    const sourceSeparatedPrayerVariantPartIds = new Set(['collect', 'prayer_offerings', 'prayer_after']);

    function variantSemanticKey(baseId, text) {
        const normalized = normalizeSemanticText(text);
        const raw = String(text || '');
        if (['collect', 'prayer_offerings', 'prayer_after', 'daily_line'].includes(baseId)) {
            const prayerPatterns = [
                ['sacraments_salvation_offering', /신비.*구원.*성찬례.*제사|bi tich.*ban phat.*on cuu do|cu hanh le te.*phuc vu.*duc\s*ki\s*-?\s*to|sacraments?.*salvation.*worship|mysteries.*salvation/i],
                ['saint_memorial_joyful_offering_salvation', /기리며.*기쁘게.*예물.*받으시고.*구원|cua le.*vui mung.*dang.*(?:ngay le kinh|thanh).*cuu do|joyfully.*offerings?.*(?:saint|memorial|feast).*salvation|oblata.*gaudentes.*(?:sanct|fest).*salut/iu],
                ['eucharist_memorial_passion_love_salvation', /성체.*(?:성자|그리스도).*(?:수난|고난).*사랑.*(?:구원|영원한\s*생명)|(?:성자|그리스도).*수난.*(?:선물|사랑).*구원|bi tich thanh the.*tuong nho.*(?:chiu kho|kho hinh|cuoc kho nan).*tinh yeu.*cuu do|tham du.*bi tich thanh the.*(?:chiu kho|kho hinh).*cuu do|eucharist.*memorial.*passion.*love.*salvation|eucharist.*suffering.*resurrection.*eternal salvation/i],
                ['clare_wonders_merits_offering', /클라라.*놀라우신.*공로.*제사|놀라우신.*클라라.*공로.*제사|clara.*wonders.*merits.*(?:service|offer|sacrifice)|wonders.*clare.*merits.*(?:service|offer|sacrifice)|clara.*mirabil.*merit.*(?:offici|servitut|sacrific)|clara.*ky dieu.*cong.*(?:hy le|phung vu)/i],
                ['clare_divine_gift_passion_adhere', /천상\s*선물.*클라라.*예수.*수난.*주님.*뜻|divine gift.*clare.*(?:death|passion).*jesus.*(?:hold fast|cling|adhere)|divini muneris.*clara.*mortificationem iesu.*tibi soli|hong an.*clara.*cuoc kho nan.*chi minh chua/i]
            ];
            const haystack = `${normalized}\n${raw}`;
            const prayerMatched = prayerPatterns.find(([, pattern]) => pattern.test(haystack));
            if (prayerMatched) return prayerMatched[0];
        }
        const patterns = baseId === 'psalm' ? [
            ['mercy_sinned', /죄.*불쌍|자비.*죄|xin xot thuong.*pham toi|nguyen thuong.*nhan hau|be merciful.*sinned|have mercy.*sinned|miserere.*peccavimus/i],
            ['praise_soul_lord', /영혼.*찬미|linh hon.*ngoi khen|praise.*soul.*lord|lauda.*anima/i]
        ] : [
            ['doctor_church_spirit_wisdom_teaching', /베르나르도.*(?:지식|지혜)의 영.*가르침|교회.*입.*(?:지식|지혜)의 영.*영광의 옷|(?:chua da cho nguoi )?len tieng giua cong doan.*tinh than khon ngoan.*(?:ao vinh quang|minh man)|midst of (?:the )?(?:church|assembly).*opened.*mouth.*(?:spirit of wisdom|wisdom and understanding).*(?:robe|garment) of glory|medio ecclesiae.*aperuit os.*spiritu sapientiae.*stolam gloriae/iu],
            ['god_shield_anointed_courts', /(?:하느님|주님).*(?:방패|보호자).*(?:기름부음|그리스도).*(?:뜰|궁정).*천 날|chua la khien moc.*guong mat.*xuc dau.*mot ngay.*(?:khuon vien|thanh dien).*ngan ngay|(?:turn|look).*(?:eyes|upon).*god.*shield.*face.*anointed.*(?:one day|day within).*(?:courts|house).*thousand|protector noster.*aspice.*respice.*faciem christi.*melior est dies.*atriis.*milia/iu],
            ['wise_virgin_lamp_meet_christ', /슬기(?:롭|로).*동정녀.*등불.*그리스도.*맞|trinh nu.*khon ngoan.*(?:den|ngon den).*don.*duc\s*ki\s*-?\s*to|wise virgin.*lamp.*meet.*christ|sapiens.*prudent.*obviam christ.*lampad|prudent(?:es)?.*virgin(?:es)?.*(?:oleum|lampad)|virgin(?:es)?.*prudentes.*(?:oleum|lampad)|virgin(?:es)?.*prudentes.*lampad.*christ/i],
            ['virgin_beautiful_eternal_crown', /그리스도.*동정녀.*아름.*영원한.*동정.*화관|trinh nu.*xinh dep.*(?:trieu thien|vuong mien).*dong trinh|virgin.*beautiful.*crown.*eternal virgin|beautiful.*virgin.*crown.*(?:eternal|perpetual).*virgin|pulchra.*virgo.*coron.*virginit|virgo.*pulchra.*coron.*virginit/i],
            ['lord_portion_inheritance_cup', /주님.*(?:몫|상속|기업).*잔|chua.*phan san nghiep.*chen(?: phuc)?|lord.*portion.*inheritance.*cup|dominus.*pars.*hereditat.*calic/i],
            ['covenant_defend_poor_lives', /계약.*가련한.*생명.*(?:소송|이끄|버리)|giao uoc.*ngheo.*(?:roi|bien ho|bao ve)|covenant.*poor.*(?:abandon|defend|cause)|testament.*pauper.*caus/i],
            ['bridegroom_christ_comes', /신랑.*그리스도.*맞으러|tan lang.*duc\s*ki\s*-?\s*to.*(?:nghenh don|don nguoi)|bridegroom.*christ.*meet|bridegroom.*meet.*christ|sponsus.*(?:obviam|exite).*christ|sponsus.*christ.*occurr/i],
            ['one_request_house_lord', /청하는.*(?:한|오직).*가지.*주님.*집|mot dieu.*xin.*nha chua|one thing.*ask.*house of the lord|unam.*petii.*domo domini/i],
            ['leave_all_follow_eternal_inheritance', /모든.*버리고.*따르.*영원한.*생명|bo moi su.*theo thay.*su song doi doi|leave.*all.*follow.*eternal life|reliquistis omnia.*secuti.*vitam aeternam/i],
            ['father_revealed_little_ones', /하늘과\s*땅.*(?:아버지|주님).*철부지|아버지.*하늘\s*나라.*(?:신비|비밀).*철부지|lay cha.*chua te troi dat.*(?:mac khai|to lo).*?(?:be mon|nho be)|father.*lord of heaven and earth.*reveal.*(?:little ones|children)|pater.*(?:caeli|coeli).*terrae.*revela.*parvul|天地の主.*父.*幼子|父.*幼子.*(?:示|現)/i],
            ['good_shepherd_sheep_know', /착한\s*목자|내\s*양|양들.*알|con chien.*nghe.*tieng|ta biet chung|chung biet ta|good shepherd|my sheep.*hear|know them|pastor bonus|oves.*audiunt/i],
            ['new_commandment_love', /새\s*계명|서로\s*사랑|dieu ran moi|yeu thuong nhau|thay ban|new commandment|love one another|as i have loved|mandatum novum|diligatis invicem|sicut dilexi/i],
            ['teach_paths_truth', /길.*가르|진리.*이끌|당신.*길|day bao.*loi buoc|loi buoc.*chua|huong dan.*chan ly|teach me.*paths|guide me.*truth|vias tuas|veritatem tuam|doce me/i],
            ['speak_lord_life', /말씀하소서|생명의 말씀|xin hay phan|dang lang tai nghe|su song doi doi|speak lord|servant.*listening|words.*everlasting life/i],
            ['poor_in_spirit_kingdom', /마음이\s*가난|하늘\s*나라.*그들의\s*것|phuc thay.*tam hon ngheo kho|nuoc troi.*cua ho|blessed.*poor in spirit|kingdom of heaven.*theirs/i],
            ['light_world_life', /세상의\s*빛|생명의\s*빛|su sang the gian|anh sang.*su song|light of the world|light of life|lux mundi/i],
            ['savior_destroyed_death_life', /구원자.*죽음.*복음.*생명|죽음을\s*없애.*생명|dang cuu do.*tieu diet.*than chet|tieu diet.*than chet.*tin mung|tin mung.*phuc truong sinh|savior.*destroyed.*death.*gospel.*life|abolished death.*gospel.*life/i],
            ['faithful_holy_works', /주님.*넘어지는.*붙들|주님.*일으켜|chua trung thanh.*viec chua|nang do.*nga quy|thien hao.*loai nguoi|lord.*faithful.*works|raises.*bowed down/i],
            ['kingdom_near_repent_gospel', /하느님\s*나라.*가까.*회개.*복음|trieu dai thien chua.*den gan.*sam hoi.*tin mung|nuoc thien chua.*den gan.*sam hoi.*tin mung|kingdom.*(?:near|at hand).*repent.*gospel/i],
            ['come_to_me_rest', /고생.*무거운\s*짐.*나에게\s*오너라|안식을\s*주리라|kho nhoc.*ganh nang.*den cung ta|den cung ta.*bo s[ứu]c|come to me.*burden|give you rest/i],
            ['taste_see_good_lord', /맛보고.*깨달|주님.*얼마나\s*좋|hay nem.*nhin coi|nem thu.*nhin coi|chua thien hao|taste.*see.*good|gustate.*videte/i],
            ['praise_soul_holy_name', /내\s*영혼.*찬미|거룩하신.*이름|linh hon.*chuc tung|thanh danh nguoi|bless the lord.*soul|holy name/i],
            ['lord_mercy_plentiful_redemption', /주님.*자애.*풍요로운\s*구원|자애.*풍요로운\s*구원|long chua.*(?:tu bi|thuong xot).*(?:cuu do|ơn cứu độ|on cuu do)|with the lord.*mercy.*(?:plentiful|full).*redemption|apud dominum.*misericordia.*copiosa.*redemptio/i],
            ['my_god_praise_salvation', /당신은\s*저의\s*하느님.*찬송|구원이\s*되어|chua la thien chua cua toi|tro nen phan roi|my god.*praise|become.*salvation/i],
            ['unity_sent_by_father', /하나가\s*되게|아버지.*보내셨다는|nen mot|cha da sai con|be one|sent me|sent con/i],
            ['seed_word_sower_christ', /씨앗.*하느님.*말씀.*씨.*뿌리.*그리스도|hat giong.*loi thien chua.*nguoi gieo giong.*duc\s*ki\s*-?\s*to|seed.*word of god.*sower.*christ/i],
            ['father_word_truth_sanctify', /아버지.*말씀.*진리|진리로.*거룩|loi cha.*chan ly|thanh hoa.*su that|father.*word.*truth|sanctify.*truth/i]
        ];
        const haystack = `${normalized}\n${raw}`;
        const matched = patterns.find(([, pattern]) => pattern.test(haystack));
        return matched ? matched[0] : '';
    }

    function buildFallbackVariantAlignment(baseId, optionMap, section = {}) {
        const groups = [];
        const used = new Set();
        const semanticGroups = {};
        Object.keys(optionMap || {}).forEach(lower => {
            optionMap[lower].forEach((option, index) => {
                const key = variantSemanticKey(baseId, variantOptionMeaningText(baseId, option));
                if (!key) return;
                if (!semanticGroups[key]) semanticGroups[key] = {};
                semanticGroups[key][lower] = index;
            });
        });
        Object.values(semanticGroups).forEach(group => {
            const mappedLanguages = Object.keys(group);
            if (mappedLanguages.length < 2) return;
            groups.push(group);
            mappedLanguages.forEach(lower => used.add(`${lower}:${group[lower]}`));
        });

        const citationGroups = {};
        Object.keys(optionMap || {}).forEach(lower => {
            optionMap[lower].forEach((option, index) => {
                if (used.has(`${lower}:${index}`)) return;
                const citationEntry = Array.isArray(section[`optionCits_${lower}`])
                    ? section[`optionCits_${lower}`][index]
                    : null;
                const rawCitation = cleanNodeText(
                    (citationEntry && citationEntry[`cit_${lower}`])
                    || (index === 0 ? directCitationForLower(section, lower) : '')
                );
                const citationStarts = citationStartsForCompare(rawCitation);
                const citationKeys = citationStarts.length
                    ? citationStarts
                    : [normalizedCitationForCompare(rawCitation)].filter(Boolean);
                citationKeys.forEach(citationKey => {
                    if (!citationGroups[citationKey]) citationGroups[citationKey] = {};
                    citationGroups[citationKey][lower] = index;
                });
            });
        });
        Object.values(citationGroups).forEach(group => {
            const mappedLanguages = Object.keys(group);
            if (mappedLanguages.length < 2) return;
            groups.push(group);
            mappedLanguages.forEach(lower => used.add(`${lower}:${group[lower]}`));
        });
        if (!groups.length) return [];

        return normalizeVariantAlignmentGroups(optionMap, groups);
    }

    function strictReadingOptionCitation(section, lower, index) {
        const optionCits = section && section[`optionCits_${lower}`];
        const optionCitation = Array.isArray(optionCits) && optionCits[index]
            ? optionCits[index][`cit_${lower}`]
            : '';
        return cleanNodeText(optionCitation || (index === 0 ? directCitationForLower(section, lower) : ''));
    }

    function buildStrictReadingCitationAlignment(baseId, optionMap, section = {}) {
        if (!strictReadingKeys.has(baseId)) return [];
        const lowers = Object.keys(optionMap || {}).filter(lower => Array.isArray(optionMap[lower]) && optionMap[lower].length);
        if (!lowers.length) return [];
        const groupsByCitation = {};
        let citedOptions = 0;
        let maxOptions = 0;
        lowers.forEach(lower => {
            maxOptions = Math.max(maxOptions, optionMap[lower].length);
            optionMap[lower].forEach((_, index) => {
                const citation = strictReadingOptionCitation(section, lower, index);
                if (!citation) return;
                const keys = citationStartsForCompare(citation);
                const key = keys[0] || normalizedCitationForCompare(citation);
                if (!key) return;
                citedOptions += 1;
                if (!groupsByCitation[key]) groupsByCitation[key] = {};
                if (!Number.isInteger(groupsByCitation[key][lower])) groupsByCitation[key][lower] = index;
            });
        });
        const proposed = Object.values(groupsByCitation).filter(group => Object.keys(group).length >= 2);
        const normalized = normalizeVariantAlignmentGroups(optionMap, proposed);
        const totalOptions = lowers.reduce((sum, lower) => sum + optionMap[lower].length, 0);
        if (totalOptions < 2 || normalized.length < 2) return [];
        if (!proposed.length && maxOptions < 2 && citedOptions < 2) return [];
        return normalized;
    }

    function normalizeBibleAliasForCompare(value) {
        return String(value || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[ĐÐ]/g, 'D')
            .replace(/[đð]/g, 'd')
            .replace(/\./g, '')
            .replace(/\s+/g, ' ')
            .trim()
            .toLowerCase();
    }

    function bibleAliasEntriesForCompare() {
        const entries = [];
        Object.keys(bibleMap || {}).forEach(kr => {
            [kr].concat(bibleMap[kr] || []).forEach(alias => {
                const key = normalizeBibleAliasForCompare(alias);
                if (key) entries.push({ key, kr });
            });
            const englishAlias = bibleMap[kr] && bibleMap[kr][1];
            const englishName = englishAlias && englishBookNameMap.concat(englishGospelNameMap)
                .find(item => item[0].test(englishAlias));
            if (englishName && englishName[1]) {
                const key = normalizeBibleAliasForCompare(englishName[1]);
                if (key) entries.push({ key, kr });
            }
        });
        (typeof koreanIntroBookAliases !== 'undefined' ? koreanIntroBookAliases : []).forEach(([alias, kr]) => {
            [alias, String(alias || '').replace(/서$/u, '')].forEach(value => {
                const key = normalizeBibleAliasForCompare(value);
                if (key && kr) entries.push({ key, kr });
            });
        });
        return entries
            .filter((entry, index, list) => list.findIndex(candidate => candidate.key === entry.key && candidate.kr === entry.kr) === index)
            .sort((a, b) => b.key.length - a.key.length);
    }

    function bibleAliasEntryForCompare(bookKey) {
        const aliases = bibleAliasEntriesForCompare();
        return aliases.find(item => item.key === bookKey)
            || aliases.find(item => item.key === `${bookKey}s` || `${item.key}s` === bookKey)
            || aliases.find(item => item.key.length >= 2
                && /[^\x00-\x7F]/.test(item.key)
                && bookKey.startsWith(item.key))
            || null;
    }

    function vulgatePsalmChaptersForHebrew(hebrewChapter, verse) {
        const chapter = Number(hebrewChapter);
        const firstVerse = Number(verse);
        if (!Number.isInteger(chapter)) return [];
        if (chapter <= 8 || chapter >= 148) return [chapter];
        if (chapter === 9 || chapter === 10) return [9];
        if (chapter <= 113) return [chapter - 1];
        if (chapter === 114 || chapter === 115) return [113];
        if (chapter === 116) {
            if (firstVerse >= 10) return [115];
            return firstVerse >= 1 ? [114] : [114, 115];
        }
        if (chapter <= 146) return [chapter - 1];
        if (chapter === 147) return firstVerse >= 12 ? [147] : [146];
        return [chapter];
    }

    function hebrewPsalmChaptersForVulgate(vulgateChapter) {
        const chapter = Number(vulgateChapter);
        if (!Number.isInteger(chapter)) return [];
        if (chapter <= 8 || chapter >= 148) return [chapter];
        if (chapter === 9) return [9, 10];
        if (chapter <= 112) return [chapter + 1];
        if (chapter === 113) return [114, 115];
        if (chapter === 114 || chapter === 115) return [116];
        if (chapter <= 145) return [chapter + 1];
        if (chapter === 146 || chapter === 147) return [147];
        return [chapter];
    }

    function psalmCitationStartsForCompare(bookKey, mainChapter, alternateChapter, verse) {
        const normalizedBook = normalizeBibleAliasForCompare(bookKey);
        const main = Number(mainChapter);
        const alternate = Number(alternateChapter);
        const firstVerse = Number(verse);
        const usesVulgateNumbering = normalizedBook === 'tv' || normalizedBook === 'ps';
        const pairs = [];
        if (Number.isInteger(alternate)) {
            pairs.push(usesVulgateNumbering
                ? { hebrew: alternate, vulgate: main }
                : { hebrew: main, vulgate: alternate });
        } else if (usesVulgateNumbering) {
            hebrewPsalmChaptersForVulgate(main).forEach(hebrew => pairs.push({ hebrew, vulgate: main }));
        } else {
            vulgatePsalmChaptersForHebrew(main, firstVerse).forEach(vulgate => pairs.push({ hebrew: main, vulgate }));
        }
        return Array.from(new Set(pairs.map(pair =>
            `시편:h${pair.hebrew}:v${pair.vulgate}:${firstVerse}`
        )));
    }

    function normalizedCitationForCompare(value) {
        let text = normalizeBibleAliasForCompare(String(value || '').replace(/\s*(?:참고|참조)$/u, ''))
            .replace(/^(?:x|cf|cfr|see)\s+/, '')
            .trim();
        const spacedBook = bibleAliasEntriesForCompare().find(item => text.startsWith(`${item.key} `));
        const compactBookKey = (text.match(/^([^\d]+)/u) || [])[1] || '';
        const entry = spacedBook || bibleAliasEntryForCompare(compactBookKey);
        const matchedAliasLength = spacedBook ? spacedBook.key.length : compactBookKey.length;
        if (entry) text = `${entry.kr}${text.slice(matchedAliasLength)}`;
        return text.replace(/[^\p{L}\p{N}]+/gu, '');
    }

    function citationStartsForCompare(value) {
        const source = String(value || '')
            .replace(/\s*(?:참고|참조)$/u, '')
            .replace(/^(?:x\.?|cf\.?|cfr\.?|see)\s+/i, '')
            .trim();
        const match = source.match(/^(.*?)\s*(\d+)(?:\s*\(\s*(\d+)\s*\))?\s*[,.:・]\s*(\d+)/u);
        if (!match) return [];
        const bookKey = normalizeBibleAliasForCompare(match[1]);
        const entry = bibleAliasEntryForCompare(bookKey);
        if (!entry) return [];
        if (entry.kr === '시편') {
            return psalmCitationStartsForCompare(bookKey, match[2], match[3], match[4]);
        }
        return Array.from(new Set([match[2], match[3]]
            .filter(Boolean)
            .map(chapter => `${entry.kr}:${chapter}:${match[4]}`)));
    }

    function directCitationForLower(section, lower) {
        const direct = section && section[`cit_${lower}`];
        if (direct) return direct;
        const optionCits = section && section[`optionCits_${lower}`];
        if (Array.isArray(optionCits) && optionCits[0]) return optionCits[0][`cit_${lower}`] || '';
        return '';
    }

    function citationsAreDifferent(leftCitation, rightCitation) {
        const left = normalizedCitationForCompare(leftCitation);
        const right = normalizedCitationForCompare(rightCitation);
        const leftStarts = citationStartsForCompare(leftCitation);
        const rightStarts = new Set(citationStartsForCompare(rightCitation));
        if (leftStarts.some(start => rightStarts.has(start))) return false;
        return !!(left && right && left !== right);
    }

    function currentLeftRightLowerKeys() {
        return {
            left: normalizeSelectableLang(state.currentLoc || 'KR', 'KR').toLowerCase(),
            right: normalizeSelectableLang(state.targetLang || DEFAULT_TARGET_LANG, DEFAULT_TARGET_LANG).toLowerCase()
        };
    }

    function activeOptionsHaveSemanticMatches(baseId, optionMap) {
        const { left, right } = currentLeftRightLowerKeys();
        if (!left || !right || left === right) return false;
        const leftOptions = Array.isArray(optionMap && optionMap[left]) ? optionMap[left] : [];
        const rightOptions = Array.isArray(optionMap && optionMap[right]) ? optionMap[right] : [];
        const rightKeys = new Set(rightOptions
            .map(option => variantSemanticKey(baseId, variantOptionMeaningText(baseId, option)))
            .filter(Boolean));
        return leftOptions.some(option => {
            const key = variantSemanticKey(baseId, variantOptionMeaningText(baseId, option));
            return !!(key && rightKeys.has(key));
        });
    }

    function buildLeftCitationFirstAlignment(baseId, section, optionMap) {
        if (baseId !== 'gospel_accl') return [];
        const { left, right } = currentLeftRightLowerKeys();
        if (!left || !right || left === right) return [];
        if (!Array.isArray(optionMap[left]) || !optionMap[left].length) return [];
        if (!Array.isArray(optionMap[right]) || !optionMap[right].length) return [];
        if (activeOptionsHaveSemanticMatches(baseId, optionMap)) return [];
        const fallbackAlignment = buildFallbackVariantAlignment(baseId, optionMap, section);
        if (fallbackAlignment.some(group => Number.isInteger(group[left]) && Number.isInteger(group[right]))) return [];
        const leftCitation = directCitationForLower(section, left);
        const rightCitation = directCitationForLower(section, right);
        if (!citationsAreDifferent(leftCitation, rightCitation)) return [];
        const groups = [
            { [left]: 0 },
            { [right]: 0 }
        ];
        return normalizeVariantAlignmentGroups(optionMap, groups).map(group =>
            Object.assign(group, { __leftCitationFirst: true })
        ).sort((a, b) => {
            const aIsLeft = Number.isInteger(a[left]) ? 0 : 1;
            const bIsLeft = Number.isInteger(b[left]) ? 0 : 1;
            return aIsLeft - bIsLeft;
        });
    }

    function variantAlignmentSignature(baseId, optionMap) {
        const payload = {};
        Object.keys(optionMap || {}).sort().forEach(lower => {
            payload[lower] = optionMap[lower].map(option => variantOptionMeaningText(baseId, option));
        });
        return JSON.stringify(payload);
    }

    const DAILY_VARIANT_ALIGNMENT_CACHE_VERSION = 'align4';

    function dailyVariantAlignmentStorageKey(date, baseId) {
        return `${STORAGE_PREFIX}dailyVariantAlignment:${DAILY_VARIANT_ALIGNMENT_CACHE_VERSION}:${formatDateIso(date)}:${baseId}:${strictDailySourceCacheVariant(date)}`;
    }

    function readCachedDailyVariantAlignment(date, baseId, signature) {
        const entry = readStorageJSON(dailyVariantAlignmentStorageKey(date, baseId));
        if (!entry || entry.signature !== signature || !Array.isArray(entry.alignment)) return null;
        if (!isFreshCacheEntry(entry, DAILY_SOURCE_CACHE_TTL_MS)) return null;
        return entry.alignment;
    }

    function writeCachedDailyVariantAlignment(date, baseId, signature, alignment) {
        if (!Array.isArray(alignment) || !alignment.length) return;
        writeStorageJSON(dailyVariantAlignmentStorageKey(date, baseId), {
            cachedAt: Date.now(),
            signature,
            alignment
        });
    }

    function firstMappedVariantIndex(group, lowers) {
        for (const lower of lowers) {
            if (Number.isInteger(group && group[lower])) return group[lower];
        }
        return Number.MAX_SAFE_INTEGER;
    }

    function normalizeVariantAlignmentGroups(optionMap, proposedGroups) {
        const lowers = ['kr', 'vn', 'en', 'jp', 'la'].filter(lower => Array.isArray(optionMap[lower]));
        const used = {};
        lowers.forEach(lower => { used[lower] = new Set(); });
        const groups = [];
        (Array.isArray(proposedGroups) ? proposedGroups : []).forEach(rawGroup => {
            const group = {};
            let hasOption = false;
            lowers.forEach(lower => {
                const rawValue = rawGroup && (rawGroup[lower] ?? rawGroup[lower.toUpperCase()]);
                const value = typeof rawValue === 'number' ? rawValue : Number.parseInt(rawValue, 10);
                if (Number.isInteger(value) && value >= 0 && value < optionMap[lower].length && !used[lower].has(value)) {
                    group[lower] = value;
                    used[lower].add(value);
                    hasOption = true;
                } else {
                    group[lower] = null;
                }
            });
            if (hasOption) groups.push(group);
        });
        lowers.forEach(lower => {
            optionMap[lower].forEach((_, index) => {
                if (used[lower].has(index)) return;
                const group = {};
                lowers.forEach(candidate => { group[candidate] = null; });
                group[lower] = index;
                used[lower].add(index);
                groups.push(group);
            });
        });
        const sourceLower = currentLeftRightLowerKeys().left;
        const anchorLower = optionMap[sourceLower] ? sourceLower : (optionMap.kr ? 'kr' : lowers[0]);
        groups.sort((a, b) => {
            const aAnchor = Number.isInteger(a[anchorLower]) ? a[anchorLower] : 1000 + firstMappedVariantIndex(a, lowers);
            const bAnchor = Number.isInteger(b[anchorLower]) ? b[anchorLower] : 1000 + firstMappedVariantIndex(b, lowers);
            return aAnchor - bAnchor;
        });
        return groups;
    }

    function splitKnownSemanticConflicts(baseId, optionMap, proposedGroups) {
        const lowers = ['kr', 'vn', 'en', 'jp', 'la'];
        return (Array.isArray(proposedGroups) ? proposedGroups : []).flatMap(rawGroup => {
            const mapped = lowers.map(lower => {
                const rawValue = rawGroup && (rawGroup[lower] ?? rawGroup[lower.toUpperCase()]);
                const index = typeof rawValue === 'number' ? rawValue : Number.parseInt(rawValue, 10);
                const options = optionMap && optionMap[lower];
                if (!Number.isInteger(index) || !Array.isArray(options) || !options[index]) return null;
                return {
                    lower,
                    index,
                    semanticKey: variantSemanticKey(baseId, variantOptionMeaningText(baseId, options[index]))
                };
            }).filter(Boolean);
            const distinctKeys = Array.from(new Set(mapped.map(item => item.semanticKey).filter(Boolean)));
            if (distinctKeys.length < 2) return [rawGroup];
            const groups = distinctKeys.map(key => Object.fromEntries(
                mapped.filter(item => item.semanticKey === key).map(item => [item.lower, item.index])
            ));
            mapped.filter(item => !item.semanticKey).forEach(item => {
                groups.push({ [item.lower]: item.index });
            });
            return groups;
        });
    }

    function normalizeSafeVariantAlignmentGroups(baseId, optionMap, proposedGroups) {
        return normalizeVariantAlignmentGroups(
            optionMap,
            splitKnownSemanticConflicts(baseId, optionMap, proposedGroups)
        );
    }

    function matchedVariantAlignmentGroups(alignment) {
        return (Array.isArray(alignment) ? alignment : []).filter(group =>
            ['kr', 'vn', 'en', 'jp', 'la'].filter(lower => Number.isInteger(group && group[lower])).length >= 2
        );
    }

    function variantAlignmentNeedsSemanticCompletion(alignment) {
        const singletonLanguages = new Set();
        (Array.isArray(alignment) ? alignment : []).forEach(group => {
            const mapped = ['kr', 'vn', 'en', 'jp', 'la']
                .filter(lower => Number.isInteger(group && group[lower]));
            if (mapped.length === 1) singletonLanguages.add(mapped[0]);
        });
        return singletonLanguages.size >= 2;
    }

    function combineTrustedVariantAlignments(baseId, optionMap, trustedAlignment, proposedAlignment) {
        return normalizeSafeVariantAlignmentGroups(
            baseId,
            optionMap,
            matchedVariantAlignmentGroups(trustedAlignment).concat(Array.isArray(proposedAlignment) ? proposedAlignment : [])
        );
    }

    function buildKnownConflictSourceSeparation(baseId, optionMap, section = {}) {
        const populatedLowers = ['kr', 'vn', 'en', 'jp', 'la']
            .filter(lower => Array.isArray(optionMap && optionMap[lower]) && optionMap[lower].length);
        // Full separation is only safe when every participating language has
        // one option. A third language with alternatives can bridge each
        // otherwise-conflicting source to a different translated option.
        if (populatedLowers.some(lower => optionMap[lower].length > 1)) return [];
        const lowers = populatedLowers;
        for (let i = 0; i < lowers.length; i += 1) {
            for (let j = i + 1; j < lowers.length; j += 1) {
                const left = lowers[i];
                const right = lowers[j];
                const leftKey = variantSemanticKey(baseId, variantOptionMeaningText(baseId, optionMap[left][0]));
                const rightKey = variantSemanticKey(baseId, variantOptionMeaningText(baseId, optionMap[right][0]));
                const leftCitation = strictReadingOptionCitation(section, left, 0);
                const rightCitation = strictReadingOptionCitation(section, right, 0);
                if ((leftKey && rightKey && leftKey !== rightKey)
                    || (leftCitation && rightCitation && citationsAreDifferent(leftCitation, rightCitation))) {
                    return normalizeVariantAlignmentGroups(optionMap, []);
                }
            }
        }
        return [];
    }

    function extractJsonObjectFromText(text) {
        const source = String(text || '').trim();
        const fenced = source.match(/```(?:json)?\s*([\s\S]*?)```/i);
        const candidate = fenced ? fenced[1] : source.slice(source.indexOf('{'), source.lastIndexOf('}') + 1);
        return JSON.parse(candidate);
    }

    function buildVariantAlignmentPrompt(baseId, optionMap) {
        const sourceLower = currentLeftRightLowerKeys().left;
        const sectionNames = {
            psalm: 'responsorial_psalm',
            gospel_accl: 'gospel_acclamation',
            entrance: 'entrance_antiphon',
            communion: 'communion_antiphon',
            collect: 'collect',
            prayer_offerings: 'prayer_over_the_offerings',
            prayer_after: 'prayer_after_communion'
        };
        const input = {
            section: sectionNames[baseId] || baseId,
            instructions: [
                'Align semantically equivalent Catholic liturgical options across languages.',
                'Ignore option labels and source order when they disagree.',
                'Never align options merely because they have the same position, number, or common/proper label.',
                'Even when each language has only one option, compare the complete texts; one option per language does not imply that they are translations of each other.',
                'Do not infer equivalence merely from the same calendar date, section heading, liturgical rank, or Ordinary Time label.',
                'If the biblical citation, saint, image, or liturgical meaning differs, keep the options in separate groups.',
                'When the evidence is ambiguous, keep the source texts in separate groups.',
                `Use ${sourceLower.toUpperCase()} as the local/original source ordering anchor when it is present.`,
                'For prayers after Communion, treat authorized translations as equivalent when they share the same Eucharistic memorial and salvation intention, even if one translation explicitly mentions the Resurrection or calls the gift a sacrament of love.',
                'Do not create a separate option solely because one language ends with “Chúng con cầu xin nhờ…” while Korean uses “성자께서는 성부와 함께 영원히…”. These are equivalent authorized liturgical conclusion formulas.',
                'Every option index from every language must appear exactly once.',
                'Use null when a language has no equivalent option in a group.',
                'Indexes are zero-based.'
            ],
            sourceLanguage: sourceLower.toUpperCase(),
            options: {}
        };
        Object.keys(optionMap || {}).forEach(lower => {
            input.options[lower.toUpperCase()] = optionMap[lower].map((option, index) => ({
                index,
                text: variantOptionMeaningText(baseId, option)
            }));
        });
        return [
            'Return strict JSON only. Do not add markdown or commentary.',
            'Schema: {"groups":[{"KR":0,"VN":1,"EN":null,"JP":null,"LA":null}]}',
            '',
            JSON.stringify(input, null, 2)
        ].join('\n');
    }

    async function requestVariantAlignmentWithGemini(baseId, optionMap) {
        const prompt = buildVariantAlignmentPrompt(baseId, optionMap);
        const promptConfig = {
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0 }
        };
        let lastError = null;
        for (let attempt = 0; attempt < 3; attempt += 1) {
            try {
                const payload = await fetchGeminiViaFirebase('align', promptConfig, {
                    timeoutMs: 45000,
                    label: 'AI variant alignment'
                });
                const text = geminiTextFromPayload(payload);
                const parsed = extractJsonObjectFromText(text);
                return normalizeSafeVariantAlignmentGroups(baseId, optionMap, parsed.groups || parsed.alignment || []);
            } catch (error) {
                lastError = error;
                await new Promise(resolve => setTimeout(resolve, 700 + attempt * 900));
            }
        }
        throw lastError || new Error('AI variant alignment failed');
    }

    const dailyVariantAlignmentSectionIds = new Set([...aiAlignedVariantSectionIds, ...strictReadingKeys]);

    function applyCachedVariantAlignments(fetchedData, date) {
        dailyVariantAlignmentSectionIds.forEach(baseId => {
            const section = fetchedData && fetchedData[baseId];
            if (!section) return;
            const { optionMap, maxOptions } = selectableOptionMapFromData(section, baseId);
            const signature = variantAlignmentSignature(baseId, optionMap);
            const strictReadingAlignment = buildStrictReadingCitationAlignment(baseId, optionMap, section);
            if (strictReadingKeys.has(baseId)) {
                const cached = readCachedDailyVariantAlignment(date, baseId, signature);
                if (cached) section.variantAlignment = combineTrustedVariantAlignments(baseId, optionMap, strictReadingAlignment, cached);
                else if (strictReadingAlignment.length) section.variantAlignment = strictReadingAlignment;
                return;
            }
            const localMissalTranslationAlignment = buildLocalMissalTranslationAlignment(baseId, section, optionMap);
            if (localMissalTranslationAlignment.length) {
                section.variantAlignment = localMissalTranslationAlignment;
                return;
            }
            const koreanOrdinaryTranslationAlignment = buildKoreanOrdinaryTranslationAlignment(baseId, section, optionMap);
            if (koreanOrdinaryTranslationAlignment.length) {
                section.variantAlignment = koreanOrdinaryTranslationAlignment;
                return;
            }
            const forcedAlignment = buildLeftCitationFirstAlignment(baseId, section, optionMap);
            if (forcedAlignment.length) {
                section.variantAlignment = forcedAlignment;
                return;
            }
            const knownConflictAlignment = buildKnownConflictSourceSeparation(baseId, optionMap, section);
            if (knownConflictAlignment.length) {
                section.variantAlignment = knownConflictAlignment;
                return;
            }
            const fallbackAlignment = buildFallbackVariantAlignment(baseId, optionMap, section);
            const cached = readCachedDailyVariantAlignment(date, baseId, signature);
            if (cached) {
                section.variantAlignment = combineTrustedVariantAlignments(baseId, optionMap, fallbackAlignment, cached);
                return;
            }
            if (fallbackAlignment.length) {
                section.variantAlignment = fallbackAlignment;
                return;
            }
            if (!needsCrossLanguageVariantAlignment(optionMap, maxOptions)) return;
            // Until the asynchronous semantic check finishes, keep unmatched
            // source texts separate, including one-option-per-language data.
            // Positional pairing can present two different antiphons or prayers
            // as if one were a translation.
            section.variantAlignment = normalizeVariantAlignmentGroups(optionMap, []);
        });
    }

    async function alignDailySelectableVariantsWithAI(fetchedData, date) {
        await Promise.all(Array.from(dailyVariantAlignmentSectionIds).map(async baseId => {
            const section = fetchedData && fetchedData[baseId];
            if (!section) return;
            const { optionMap, maxOptions } = selectableOptionMapFromData(section, baseId);
            const signature = variantAlignmentSignature(baseId, optionMap);
            const strictReadingAlignment = buildStrictReadingCitationAlignment(baseId, optionMap, section);
            if (strictReadingKeys.has(baseId)) {
                if (strictReadingAlignment.length && !variantAlignmentNeedsSemanticCompletion(strictReadingAlignment)) {
                    section.variantAlignment = strictReadingAlignment;
                    writeCachedDailyVariantAlignment(date, baseId, signature, strictReadingAlignment);
                    return;
                }
                const cached = readCachedDailyVariantAlignment(date, baseId, signature);
                if (cached) {
                    section.variantAlignment = combineTrustedVariantAlignments(baseId, optionMap, strictReadingAlignment, cached);
                    return;
                }
                if (maxOptions < 2 && !strictReadingAlignment.length) return;
                try {
                    const proposed = await requestVariantAlignmentWithGemini(baseId, optionMap);
                    const alignment = combineTrustedVariantAlignments(baseId, optionMap, strictReadingAlignment, proposed);
                    if (alignment.length) {
                        section.variantAlignment = alignment;
                        writeCachedDailyVariantAlignment(date, baseId, signature, alignment);
                    }
                } catch (error) {
                    console.warn(`${baseId} AI reading alignment failed, keeping citation alignment.`, error);
                }
                return;
            }
            const localMissalTranslationAlignment = buildLocalMissalTranslationAlignment(baseId, section, optionMap);
            if (localMissalTranslationAlignment.length) {
                section.variantAlignment = localMissalTranslationAlignment;
                return;
            }
            const koreanOrdinaryTranslationAlignment = buildKoreanOrdinaryTranslationAlignment(baseId, section, optionMap);
            if (koreanOrdinaryTranslationAlignment.length) {
                section.variantAlignment = koreanOrdinaryTranslationAlignment;
                return;
            }
            const forcedAlignment = buildLeftCitationFirstAlignment(baseId, section, optionMap);
            if (forcedAlignment.length) {
                section.variantAlignment = forcedAlignment;
                return;
            }
            const knownConflictAlignment = buildKnownConflictSourceSeparation(baseId, optionMap, section);
            if (knownConflictAlignment.length) {
                section.variantAlignment = knownConflictAlignment;
                return;
            }
            const fallbackAlignment = buildFallbackVariantAlignment(baseId, optionMap, section);
            if (fallbackAlignment.length && !variantAlignmentNeedsSemanticCompletion(fallbackAlignment)) {
                section.variantAlignment = fallbackAlignment;
                writeCachedDailyVariantAlignment(date, baseId, signature, fallbackAlignment);
                return;
            }
            const cached = readCachedDailyVariantAlignment(date, baseId, signature);
            if (cached) {
                section.variantAlignment = combineTrustedVariantAlignments(baseId, optionMap, fallbackAlignment, cached);
                return;
            }
            if (!needsCrossLanguageVariantAlignment(optionMap, maxOptions)) {
                if (fallbackAlignment.length) section.variantAlignment = fallbackAlignment;
                return;
            }
            try {
                const proposed = await requestVariantAlignmentWithGemini(baseId, optionMap);
                const alignment = combineTrustedVariantAlignments(baseId, optionMap, fallbackAlignment, proposed);
                if (alignment.length) {
                    section.variantAlignment = alignment;
                    writeCachedDailyVariantAlignment(date, baseId, signature, alignment);
                }
            } catch (error) {
                console.warn(`${baseId} AI variant alignment failed, keeping source order.`, error);
            }
        }));
    }

    const aiSemanticDecisionSectionIds = new Set(['entrance', 'communion', 'collect', 'prayer_offerings', 'prayer_after']);
    const pendingDailySemanticEquivalenceKeys = new Set();

    function hashSemanticText(value) {
        let hash = 2166136261;
        const text = normalizeSemanticText(value).slice(0, 1600);
        for (let i = 0; i < text.length; i += 1) {
            hash ^= text.charCodeAt(i);
            hash = Math.imul(hash, 16777619);
        }
        return (hash >>> 0).toString(36);
    }

    function dailySemanticEquivalenceStorageKey(date) {
        return `${STORAGE_PREFIX}dailySemanticEquivalence:${formatDateIso(date)}:${strictDailySourceCacheVariant(date)}`;
    }

    function semanticEquivalenceSignature(baseId, leftText, rightText) {
        const pair = [hashSemanticText(leftText), hashSemanticText(rightText)].sort();
        return `${baseId}:${pair[0]}:${pair[1]}`;
    }

    function readCachedDailySemanticEquivalence(date, baseId, leftText, rightText) {
        const entry = readStorageJSON(dailySemanticEquivalenceStorageKey(date));
        if (!entry || !entry.decisions || !isFreshCacheEntry(entry, DAILY_SOURCE_CACHE_TTL_MS)) return null;
        const value = entry.decisions[semanticEquivalenceSignature(baseId, leftText, rightText)];
        return typeof value === 'boolean' ? value : null;
    }

    function writeCachedDailySemanticEquivalence(date, baseId, leftText, rightText, equivalent) {
        const storageKey = dailySemanticEquivalenceStorageKey(date);
        const entry = readStorageJSON(storageKey);
        const next = entry && entry.decisions && isFreshCacheEntry(entry, DAILY_SOURCE_CACHE_TTL_MS)
            ? entry
            : { cachedAt: Date.now(), decisions: {} };
        next.cachedAt = Date.now();
        next.decisions[semanticEquivalenceSignature(baseId, leftText, rightText)] = !!equivalent;
        writeStorageJSON(storageKey, next);
    }

    function localSemanticEquivalent(baseId, leftText, rightText) {
        if (baseId === 'prayer_after'
            && isPrayerAfterConclusionLine(leftText)
            && isPrayerAfterConclusionLine(rightText)) {
            return true;
        }
        const leftKey = variantSemanticKey(baseId, leftText);
        const rightKey = variantSemanticKey(baseId, rightText);
        return !!(leftKey && rightKey && leftKey === rightKey);
    }

    function cachedOrLocalSemanticEquivalent(baseId, leftText, rightText) {
        if (localSemanticEquivalent(baseId, leftText, rightText)) return true;
        const cached = readCachedDailySemanticEquivalence(getActiveLiturgicalSourceDate(), baseId, leftText, rightText);
        if (cached !== null) return cached;
        return false;
    }

    function buildSemanticEquivalencePrompt(task) {
        const sectionNames = {
            entrance: 'entrance antiphon',
            communion: 'communion antiphon',
            collect: 'collect',
            prayer_offerings: 'prayer over the offerings',
            prayer_after: 'prayer after communion'
        };
        return [
            'Decide whether these two Catholic liturgical texts are the same prayer/antiphon in different languages.',
            'Be generous with normal translation differences, word order, punctuation, and citation numbering.',
            'Compare the complete source texts. Do not assume equivalence merely because both occur on the same date or under the same section heading, rank, or common/proper label.',
            'One text in each language does not imply that the texts are translations of each other.',
            'For a prayer after Communion, compare the central Eucharistic memorial and salvation intention. One authorized translation may explicitly mention the Resurrection or “sacrament of love” where another says the Son’s Passion and saving gift; that alone does not make the prayers different.',
            'For a prayer after Communion, “Chúng con cầu xin nhờ…” and “성자께서는 성부와 함께 영원히…” are equivalent authorized conclusion formulas; never return false only because those conclusions differ.',
            'Return false when the source text, saint, feast, biblical image, antiphon, or prayer intention is different. If the evidence is ambiguous, return false so the sources remain separate choices.',
            'Return strict JSON only: {"equivalent":true} or {"equivalent":false}.',
            '',
            JSON.stringify({
                section: sectionNames[task.baseId] || task.baseId,
                leftLanguage: langCodeFromLowerKey(task.leftLower),
                rightLanguage: langCodeFromLowerKey(task.rightLower),
                leftText: task.leftText,
                rightText: task.rightText
            }, null, 2)
        ].join('\n');
    }

    async function requestSemanticEquivalenceWithGemini(task) {
        const payload = await fetchGeminiViaFirebase('align', {
            contents: [{ parts: [{ text: buildSemanticEquivalencePrompt(task) }] }],
            generationConfig: { temperature: 0 }
        }, {
            timeoutMs: 30000,
            label: 'AI semantic equivalence'
        });
        const text = geminiTextFromPayload(payload);
        try {
            const parsed = extractJsonObjectFromText(text);
            if (typeof parsed.equivalent === 'boolean') return parsed.equivalent;
        } catch (error) {
            if (/true/i.test(text)) return true;
            if (/false/i.test(text)) return false;
            throw error;
        }
        throw new Error('AI semantic equivalence returned no boolean decision.');
    }

    function collectDailySemanticEquivalenceTasks(date) {
        const lowers = ['kr', 'vn', 'en', 'jp', 'la'];
        const active = currentLeftRightLowerKeys();
        const tasks = [];
        massData.forEach(item => {
            const baseId = getBaseId(item && item.id);
            if (!aiSemanticDecisionSectionIds.has(baseId)) return;
            const lineSets = [];
            if (item && Array.isArray(item.lines)) lineSets.push(item.lines);
            if (item && item.variants && typeof item.variants === 'object' && !Array.isArray(item.variants)) {
                Object.values(item.variants).forEach(variant => {
                    if (variant && Array.isArray(variant.lines)) lineSets.push(variant.lines);
                });
            }
            lineSets.forEach(lines => {
                (lines || []).forEach(line => {
                    if (!line || isPrayerFrameLine(line) || lineHasAnyRubric(line)) return;
                    for (let i = 0; i < lowers.length; i += 1) {
                        for (let j = i + 1; j < lowers.length; j += 1) {
                            const leftLower = lowers[i];
                            const rightLower = lowers[j];
                            const leftText = cleanNodeText(line[`text_${leftLower}`]);
                            const rightText = cleanNodeText(line[`text_${rightLower}`]);
                            if (!leftText || !rightText || normalizeSemanticText(leftText) === normalizeSemanticText(rightText)) continue;
                            if (readCachedDailySemanticEquivalence(date, baseId, leftText, rightText) !== null) continue;
                            if (localSemanticEquivalent(baseId, leftText, rightText)) {
                                writeCachedDailySemanticEquivalence(date, baseId, leftText, rightText, true);
                                continue;
                            }
                            const signature = `${dailySemanticEquivalenceStorageKey(date)}:${semanticEquivalenceSignature(baseId, leftText, rightText)}`;
                            if (pendingDailySemanticEquivalenceKeys.has(signature)) continue;
                            pendingDailySemanticEquivalenceKeys.add(signature);
                            const activePair = (leftLower === active.left && rightLower === active.right)
                                || (leftLower === active.right && rightLower === active.left);
                            tasks.push({ baseId, leftLower, rightLower, leftText, rightText, signature, activePair });
                        }
                    }
                });
            });
        });
        return tasks.sort((a, b) => Number(b.activePair) - Number(a.activePair));
    }

    async function alignDailyTextEquivalenceWithAI(date) {
        const tasks = collectDailySemanticEquivalenceTasks(date).slice(0, 8);
        if (!tasks.length) return false;
        let changed = false;
        for (const task of tasks) {
            try {
                const equivalent = await requestSemanticEquivalenceWithGemini(task);
                writeCachedDailySemanticEquivalence(date, task.baseId, task.leftText, task.rightText, equivalent);
                changed = true;
            } catch (error) {
                const fallback = localSemanticEquivalent(task.baseId, task.leftText, task.rightText);
                if (fallback) {
                    writeCachedDailySemanticEquivalence(date, task.baseId, task.leftText, task.rightText, true);
                    changed = true;
                }
                console.warn(`${task.baseId} AI semantic equivalence failed, used local fallback.`, error);
            } finally {
                pendingDailySemanticEquivalenceKeys.delete(task.signature);
            }
            await new Promise(resolve => setTimeout(resolve, 180));
        }
        return changed;
    }

    function dailyVariantLabel(index) {
        const number = index + 1;
        return {
            kr: index === 0 ? '기본' : `또는 ${index}`,
            vn: index === 0 ? 'Bản chính' : `Hoặc ${index}`,
            en: `Option ${number}`,
            jp: index === 0 ? '本文' : `選択肢 ${number}`,
            la: `Optio ${number}`
        };
    }

    function sharedDailyVariantLabel(index) {
        const number = index + 1;
        return {
            kr: `선택지 ${number}`,
            vn: `Lựa chọn ${number}`,
            en: `Option ${number}`,
            jp: `選択肢 ${number}`,
            la: `Optio ${number}`
        };
    }

    const dailyVariantKindSectionNames = {
        entrance: { kr: '입당송', vn: 'Ca nhập lễ', en: 'Entrance Antiphon', jp: '入祭唱', la: 'Antiphona ad introitum' },
        collect: { kr: '본기도', vn: 'Lời nguyện nhập lễ', en: 'Collect', jp: '集会祈願', la: 'Collecta' },
        reading1: { kr: '독서', vn: 'Bài đọc', en: 'Reading', jp: '朗読', la: 'Lectio' },
        psalm: { kr: '화답송', vn: 'Đáp ca', en: 'Responsorial Psalm', jp: '答唱詩編', la: 'Psalmus responsorius' },
        reading2: { kr: '독서', vn: 'Bài đọc', en: 'Reading', jp: '朗読', la: 'Lectio' },
        gospel_accl: { kr: '복음 환호송', vn: 'Tung hô Tin Mừng', en: 'Gospel Acclamation', jp: '福音朗読前の唱句', la: 'Acclamatio ante Evangelium' },
        gospel: { kr: '복음', vn: 'Tin Mừng', en: 'Gospel', jp: '福音', la: 'Evangelium' },
        prayer_offerings: { kr: '예물 기도', vn: 'Lời nguyện tiến lễ', en: 'Prayer over the Offerings', jp: '奉納祈願', la: 'Oratio super oblata' },
        communion: { kr: '영성체송', vn: 'Ca hiệp lễ', en: 'Communion Antiphon', jp: '拝領唱', la: 'Antiphona ad communionem' },
        prayer_after: { kr: '영성체 후 기도', vn: 'Lời nguyện hiệp lễ', en: 'Prayer after Communion', jp: '拝領祈願', la: 'Oratio post communionem' }
    };

    function dailyVariantKindFromSourceMetadata(newData, alignmentGroup, fallbackIndex) {
        const lowers = ['kr', 'vn', 'en', 'jp', 'la'];
        const kindCandidates = [];
        lowers.forEach(lower => {
            const kinds = newData && newData[`optionKinds_${lower}`];
            const hasAlignedIndex = alignmentGroup && Number.isInteger(alignmentGroup[lower]);
            const sourceIndex = hasAlignedIndex ? alignmentGroup[lower] : fallbackIndex;
            if (!Array.isArray(kinds) || (alignmentGroup && !hasAlignedIndex)) return;
            const kind = kinds[sourceIndex];
            if (kind === 'common' || kind === 'proper') kindCandidates.push(kind);
        });
        return kindCandidates.length ? (kindCandidates.includes('common') ? 'common' : 'proper') : '';
    }

    function dailyVariantLabelForKind(kind, baseId) {
        const unit = dailyVariantKindSectionNames[baseId] || { kr: '기도', vn: 'Lời nguyện', en: 'Prayer', jp: '祈願', la: 'Oratio' };
        return {
            kr: `${kind === 'common' ? '공통' : '고유'} ${unit.kr}`,
            vn: `${unit.vn} ${kind === 'common' ? 'chung' : 'riêng'}`,
            en: `${kind === 'common' ? 'Common' : 'Proper'} ${unit.en}`,
            jp: `${kind === 'common' ? '共通' : '固有'}${unit.jp}`,
            la: `${unit.la} ${kind === 'common' ? 'communis' : 'propria'}`
        };
    }

    function dailyVariantLabelFromSourceMetadata(newData, alignmentGroup, fallbackIndex, baseLabel, baseId = '') {
        const label = Object.assign({}, baseLabel || dailyVariantLabel(fallbackIndex));
        const lowers = ['kr', 'vn', 'en', 'jp', 'la'];
        const kind = dailyVariantKindFromSourceMetadata(newData, alignmentGroup, fallbackIndex);
        if (kind) return dailyVariantLabelForKind(kind, baseId);
        const found = {};
        lowers.forEach(lower => {
            const labels = newData && newData[`optionLabels_${lower}`];
            const hasAlignedIndex = alignmentGroup && Number.isInteger(alignmentGroup[lower]);
            const sourceIndex = hasAlignedIndex ? alignmentGroup[lower] : fallbackIndex;
            if (!Array.isArray(labels) || (alignmentGroup && !hasAlignedIndex)) return;
            const value = cleanNodeText(labels[sourceIndex]);
            if (value) found[lower] = value;
        });
        const fallback = found.kr || found[currentLeftRightLowerKeys().left] || found.vn || Object.values(found)[0] || '';
        if (!fallback) return label;
        lowers.forEach(lower => {
            label[lower] = found[lower] || fallback;
        });
        return label;
    }

    const sourceLabeledDailyVariantPartIds = new Set([
        'entrance',
        'gospel_accl',
        'communion',
        ...sourceSeparatedPrayerVariantPartIds
    ]);

    const fixedCelebrationImplicitProperPartIds = new Set([
        'entrance',
        'gospel_accl',
        'communion'
    ]);

    function dailyVariantLabelForAlignment(alignmentGroup, fallbackIndex, alignmentGroups = [], baseId = '') {
        const label = Object.assign({}, dailyVariantLabel(fallbackIndex));
        const mappedLanguages = ['kr', 'vn', 'en', 'jp', 'la']
            .filter(lower => alignmentGroup && Number.isInteger(alignmentGroup[lower]));
        const { left, right } = currentLeftRightLowerKeys();
        const sharedActiveGroups = (alignmentGroups || []).filter(group =>
            group && Number.isInteger(group[left]) && Number.isInteger(group[right])
        );
        const sharedActiveIndex = sharedActiveGroups.indexOf(alignmentGroup);
        if (sharedActiveGroups.length > 1 && sharedActiveIndex >= 0) {
            return sharedDailyVariantLabel(sharedActiveIndex);
        }
        if (sourceLabeledDailyVariantPartIds.has(baseId) && mappedLanguages.length) {
            const sourceLower = mappedLanguages.includes(left) ? left : mappedLanguages[0];
            const sourceGroupCount = (alignmentGroups || [])
                .filter(group => group && Number.isInteger(group[sourceLower])).length;
            const sourceOrdinal = sourceGroupCount > 1
                ? alignmentGroup[sourceLower] + 1
                : null;
            return sourceChoiceLabelForLower(sourceLower, sourceOrdinal);
        }
        if (alignmentGroup && alignmentGroup.__leftCitationFirst) return label;
        if (mappedLanguages.length === 1 && mappedLanguages[0] === right) return sourceChoiceLabelForLower(right);
        ['kr', 'vn', 'en', 'jp', 'la'].forEach(lower => {
            const sourceIndex = alignmentGroup && Number.isInteger(alignmentGroup[lower]) ? alignmentGroup[lower] : fallbackIndex;
            label[lower] = dailyVariantLabel(sourceIndex)[lower] || label[lower];
        });
        return label;
    }

    function dailyVariantContentLanguages(variant, baseId) {
        const lines = Array.isArray(variant && variant.lines) ? variant.lines : [];
        return ['kr', 'vn', 'en', 'jp', 'la'].filter(lower => {
            const optionLines = lines
                .filter(line => line && !lineHasAnyRubric(line))
                .map(line => ({ text: line[`text_${lower}`] || '' }));
            return !!variantOptionMeaningText(baseId, optionLines).trim();
        });
    }

    function dailyVariantSourceLower(variant, baseId) {
        const mappedLanguages = Object.keys(variant && variant.__dailySourceIndexes || {})
            .filter(lower => Number.isInteger(variant.__dailySourceIndexes[lower]));
        const languages = mappedLanguages.length ? mappedLanguages : dailyVariantContentLanguages(variant, baseId);
        const { left, right } = currentLeftRightLowerKeys();
        const activeLanguages = [left, right].filter((lower, index, all) =>
            lower && all.indexOf(lower) === index && languages.includes(lower)
        );
        if (activeLanguages.length === 1) return activeLanguages[0];
        if (activeLanguages.length > 1) return '';
        return languages.length === 1 ? languages[0] : '';
    }

    function dailyVariantLabelForKindDetails(kind, baseId, sourceLower = '', lengthKind = '', ordinal = null) {
        const unit = dailyVariantKindSectionNames[baseId] || { kr: '기도', vn: 'Lời nguyện', en: 'Prayer', jp: '祈願', la: 'Oratio' };
        const lengthGroup = baseId === 'gospel' ? dailyLengthVariantLabels.gospel : dailyLengthVariantLabels.reading;
        const lengthLabel = lengthKind && lengthGroup[lengthKind] ? lengthGroup[lengthKind] : null;
        const sourceNames = sourceLower ? {
            kr: eucharistInlineLanguageName(sourceLower, 'KR'),
            vn: eucharistInlineLanguageName(sourceLower, 'VN'),
            en: eucharistInlineLanguageName(sourceLower, 'EN'),
            jp: eucharistInlineLanguageName(sourceLower, 'JP'),
            la: eucharistInlineLanguageName(sourceLower, 'LA')
        } : null;
        const number = Number.isInteger(ordinal) && ordinal > 0 ? ` ${ordinal}` : '';
        const length = lower => lengthLabel ? ` (${lengthLabel[lower]})` : '';
        return {
            kr: `${kind === 'common' ? '공통' : '고유'}${sourceNames ? ` ${sourceNames.kr}` : ''} ${unit.kr}${length('kr')}${number}`,
            vn: `${unit.vn} ${kind === 'common' ? 'chung' : 'riêng'}${sourceNames ? ` ${sourceNames.vn}` : ''}${length('vn')}${number}`,
            en: `${kind === 'common' ? 'Common' : 'Proper'}${sourceNames ? ` ${sourceNames.en}` : ''} ${unit.en}${length('en')}${number}`,
            jp: `${kind === 'common' ? '共通' : '固有'}${sourceNames ? sourceNames.jp : ''}${unit.jp}${length('jp')}${number}`,
            la: `${unit.la} ${kind === 'common' ? 'communis' : 'propria'}${sourceNames ? ` ${sourceNames.la}` : ''}${length('la')}${number}`
        };
    }

    function applyDailySourceVariantLabels(variants, baseId, alignmentGroups = []) {
        if (!sourceLabeledDailyVariantPartIds.has(baseId) || !variants) return variants;
        const lowers = ['kr', 'vn', 'en', 'jp', 'la'];
        const { left, right } = currentLeftRightLowerKeys();
        const entries = Object.entries(variants).map(([key, variant], index) => {
            const alignmentGroup = alignmentGroups[index] || null;
            let languages = dailyVariantContentLanguages(variant, baseId);
            if (!languages.length && alignmentGroup) {
                languages = lowers.filter(lower => Number.isInteger(alignmentGroup[lower]));
            }
            return { key, variant, index, alignmentGroup, languages };
        });
        const languageCounts = Object.fromEntries(lowers.map(lower => [
            lower,
            entries.filter(entry => entry.languages.includes(lower)).length
        ]));
        const sourceOccurrences = Object.fromEntries(lowers.map(lower => [lower, 0]));
        const sharedActiveEntries = entries.filter(entry =>
            entry.languages.includes(left) && entry.languages.includes(right)
        );
        entries.forEach(entry => {
            if (!entry.languages.length) return;
            if (entry.variant.__dailyOptionKind) return;
            const sharedActiveIndex = sharedActiveEntries.indexOf(entry);
            if (sharedActiveEntries.length > 1 && sharedActiveIndex >= 0) {
                entry.variant.label = sharedDailyVariantLabel(sharedActiveIndex);
                return;
            }
            const sourceLower = entry.languages.includes(left) ? left : entry.languages[0];
            sourceOccurrences[sourceLower] += 1;
            let ordinal = null;
            if (languageCounts[sourceLower] > 1) {
                const alignedIndex = entry.alignmentGroup && entry.alignmentGroup[sourceLower];
                ordinal = Number.isInteger(alignedIndex) ? alignedIndex + 1 : sourceOccurrences[sourceLower];
            }
            entry.variant.label = sourceChoiceLabelForLower(sourceLower, ordinal);
        });
        return variants;
    }

    function applyDailyKindedVariantLabels(variants, baseId) {
        const entries = Object.values(variants || {}).map(variant => ({
            variant,
            kind: variant && variant.__dailyOptionKind || '',
            sourceLower: dailyVariantSourceLower(variant, baseId),
            lengthKind: variant && variant.__dailyLengthKind || ''
        })).filter(entry => entry.kind === 'common' || entry.kind === 'proper');
        const counts = {};
        entries.forEach(entry => {
            const signature = `${entry.kind}:${entry.sourceLower || 'shared'}:${entry.lengthKind || 'standard'}`;
            counts[signature] = (counts[signature] || 0) + 1;
            entry.signature = signature;
        });
        const occurrences = {};
        entries.forEach(entry => {
            occurrences[entry.signature] = (occurrences[entry.signature] || 0) + 1;
            const ordinal = counts[entry.signature] > 1 ? occurrences[entry.signature] : null;
            entry.variant.label = dailyVariantLabelForKindDetails(
                entry.kind,
                baseId,
                entry.sourceLower,
                entry.lengthKind,
                ordinal
            );
        });
        return variants;
    }

    function inferDailyVariantKinds(variants, baseId, date = null) {
        const entries = Object.values(variants || {});
        if (!entries.length) return variants;
        const validKinds = new Set(['common', 'proper']);
        const sourceKinds = {};
        entries.forEach(variant => {
            const kind = variant && variant.__dailyOptionKind || '';
            if (!validKinds.has(kind)) return;
            Object.keys(variant.__dailySourceIndexes || {}).forEach(lower => {
                if (!Number.isInteger(variant.__dailySourceIndexes[lower])) return;
                if (!sourceKinds[lower]) sourceKinds[lower] = new Set();
                sourceKinds[lower].add(kind);
            });
        });
        entries.forEach(variant => {
            if (!variant || validKinds.has(variant.__dailyOptionKind)) return;
            const candidates = new Set();
            Object.keys(variant.__dailySourceIndexes || {}).forEach(lower => {
                if (!Number.isInteger(variant.__dailySourceIndexes[lower])) return;
                const kinds = sourceKinds[lower];
                if (kinds && kinds.size === 1) candidates.add(Array.from(kinds)[0]);
            });
            if (candidates.size === 1) variant.__dailyOptionKind = Array.from(candidates)[0];
        });

        const knownKinds = new Set(entries
            .map(variant => variant && variant.__dailyOptionKind || '')
            .filter(kind => validKinds.has(kind)));
        if (knownKinds.size || !fixedCelebrationImplicitProperPartIds.has(baseId)) return variants;
        const sourceDate = date instanceof Date && !Number.isNaN(date.getTime())
            ? cloneDateOnly(date)
            : getActiveLiturgicalSourceDate();
        const generatedInfo = buildGeneratedLiturgyInfo(sourceDate);
        const meta = generatedInfo.meta || {};
        const isNamedFixedCelebration = hasPriorityCelebrationForLookup(sourceDate, generatedInfo)
            && !!(meta.special || generatedInfo.localCalendar);
        if (!isNamedFixedCelebration) return variants;
        entries.forEach(variant => {
            if (variant && !validKinds.has(variant.__dailyOptionKind)) variant.__dailyOptionKind = 'proper';
        });
        return variants;
    }

    function collectVariantCitation(newData, lowerLangs, optionIndex, alignmentGroup = null, optionMap = null) {
        const cit = {};
        lowerLangs.forEach(lower => {
            const hasAlignedIndex = alignmentGroup && Number.isInteger(alignmentGroup[lower]);
            const sourceIndex = hasAlignedIndex ? alignmentGroup[lower] : optionIndex;
            const languageOptions = optionMap && Array.isArray(optionMap[lower]) ? optionMap[lower] : null;
            const hasStructuredOptions = !!(languageOptions && languageOptions.length > 1);
            const optionCits = newData[`optionCits_${lower}`];
            const hasOptionCitations = Array.isArray(optionCits) && optionCits.length;
            let optionCitationMatched = false;
            if (Array.isArray(optionCits) && optionCits.length) {
                const source = optionCits[sourceIndex] || {};
                Object.keys(source).forEach(key => {
                    if (/^cit_/i.test(key) && source[key]) {
                        cit[key] = source[key];
                        optionCitationMatched = true;
                    }
                });
            }
            const directKey = `cit_${lower}`;
            const hasLanguageOptions = !!(languageOptions && languageOptions.length);
            let directCitationMatchesVariant = true;
            if (hasOptionCitations && hasStructuredOptions && !optionCitationMatched) directCitationMatchesVariant = false;
            if (alignmentGroup) {
                if (hasLanguageOptions && !hasAlignedIndex) directCitationMatchesVariant = false;
                else if (hasStructuredOptions && sourceIndex > 0) directCitationMatchesVariant = false;
                else if (!hasLanguageOptions && optionIndex > 0) directCitationMatchesVariant = false;
            }
            if (!cit[directKey] && newData[directKey] && directCitationMatchesVariant) cit[directKey] = newData[directKey];
        });
        return fillMissingCitationsFromKorean(cit, lowerLangs);
    }

    function normalizeDailySelectableTemplate(item) {
        if (!item || item.type !== 'selectable' || !item.variants || item.variants.A) return;
        if (!Array.isArray(item.variants.lines)) return;
        const headerCits = Array.isArray(item.variants.header) && item.variants.header[0] ? item.variants.header[0] : {};
        item.cit = Object.assign({}, item.cit || {}, headerCits || {});
        item.variants = {
            A: {
                label: dailyVariantLabel(0),
                header: item.header || {},
                cit: item.cit || {},
                lines: cloneMassLines(item.variants.lines)
            }
        };
        item.lines = cloneMassLines(item.variants.A.lines);
    }

    function ensureDailySelectableVariants(item, newData, baseId) {
        normalizeDailySelectableTemplate(item);
        if (item.isEucharist || baseId === 'eucharist') return false;
        if (!item.__dailyVariantBaseTemplate) {
            item.__dailyVariantBaseTemplate = {
                type: item.type,
                lines: cloneMassLines(item.lines || []),
                variants: item.variants ? JSON.parse(JSON.stringify(item.variants)) : null
            };
        }
        if (baseId === 'gospel') normalizeDailyGospelOptions(newData);
        if (isPrayerPart(baseId) && !item.__dailyPrayerBaseTemplate) {
            item.__dailyPrayerBaseTemplate = {
                type: item.type,
                lines: cloneMassLines(item.lines || [])
            };
        }
        const lowerLangs = ['kr', 'vn', 'en', 'jp', 'la'];
        const optionMap = {};
        let maxOptions = 1;
        lowerLangs.forEach(lower => {
            const structured = newData[`${lower}_lines`];
            if (!Array.isArray(structured) || !structured.length) return;
            let options = dedupeParsedAlternatives(baseId, splitParsedAlternatives(structured));
            if (baseId === 'gospel') options = options.map(option => normalizeGospelAlternativeOption(option, lower));
            optionMap[lower] = options;
            maxOptions = Math.max(maxOptions, options.length);
        });
        const alignmentGroups = Array.isArray(newData.variantAlignment) && newData.variantAlignment.length
            ? newData.variantAlignment
            : null;
        if (alignmentGroups) maxOptions = Math.max(maxOptions, alignmentGroups.length);
        if (maxOptions < 2) {
            if (item.__dailyGeneratedVariants && item.__dailyVariantBaseTemplate) {
                item.type = item.__dailyVariantBaseTemplate.type || 'part';
                item.lines = cloneMassLines(item.__dailyVariantBaseTemplate.lines || []);
                if (item.__dailyVariantBaseTemplate.variants) {
                    item.variants = JSON.parse(JSON.stringify(item.__dailyVariantBaseTemplate.variants));
                } else {
                    delete item.variants;
                }
                item.__dailyGeneratedVariants = false;
            }
            if (isPrayerPart(baseId) && item.__dailyGeneratedPrayerVariants && item.__dailyPrayerBaseTemplate) {
                item.type = item.__dailyPrayerBaseTemplate.type || 'part';
                item.lines = cloneMassLines(item.__dailyPrayerBaseTemplate.lines || []);
                delete item.variants;
                item.__dailyGeneratedPrayerVariants = false;
            }
            return false;
        }

        const template = cloneMassLines(item.lines || []);
        const variants = {};
        for (let i = 0; i < maxOptions; i++) {
            const key = dailyVariantKeys[i] || `O${i + 1}`;
            const lines = cloneMassLines(template);
            const alignmentGroup = alignmentGroups ? (alignmentGroups[i] || {}) : null;
            const sourceIndexes = {};
            if (isPrayerPart(baseId)) ensurePrayerFrameLines(lines, baseId);
            lowerLangs.forEach(lower => {
                const options = optionMap[lower];
                if (options && options.length) {
                    const hasAlignedIndex = alignmentGroup && Number.isInteger(alignmentGroup[lower]);
                    const sourceIndex = hasAlignedIndex ? alignmentGroup[lower] : i;
                    const optionLines = hasAlignedIndex
                        ? (options[sourceIndex] || [])
                        : (alignmentGroup ? [] : (options[sourceIndex] || []));
                    if (optionLines.length) applyParsedLinesForLanguage(lines, lower, optionLines, baseId);
                    else clearParsedLanguageLines(lines, lower, baseId);
                    if (optionLines.length) sourceIndexes[lower] = sourceIndex;
                    return;
                }
                if ((baseId === 'gospel_accl' || alignmentGroup) && i > 0) {
                    clearParsedLanguageLines(lines, lower, baseId);
                    return;
                }
                if (newData[lower] && String(newData[lower]).trim()) {
                    const contentLine = lines.find(line => !isProtectedParsedTargetLine(line, baseId)) || emptyMassLine();
                    if (!lines.includes(contentLine)) lines.splice(parsedInsertIndex(lines, baseId), 0, contentLine);
                    contentLine[`sp_${lower}`] = normalizeDailySpeaker(baseId, lower, contentLine[`sp_${lower}`], '', newData[lower]);
                    contentLine[`text_${lower}`] = newData[lower];
                    contentLine[`text_${lower}_ai`] = '';
                }
            });
            if (isPrayerPart(baseId)) ensureLocalizedPrayerConclusions(lines, baseId);
            if (isPrayerPart(baseId)) ensurePrayerFrameLines(lines, baseId);
            normalizeDailySectionLines(lines, baseId);
            removeDailyProclamationEndingLines(lines, baseId);
            const cit = filterCitationsByVariantText(collectVariantCitation(newData, lowerLangs, i, alignmentGroup, optionMap), lines, lowerLangs, baseId);
            const baseLabel = alignmentGroup
                ? dailyVariantLabelForAlignment(alignmentGroup, i, alignmentGroups, baseId)
                : dailyVariantLabel(i);
            const label = dailyVariantLabelFromSourceMetadata(newData, alignmentGroup, i, baseLabel, baseId);
            variants[key] = {
                label,
                header: item.header || {},
                cit,
                lines,
                __dailyOptionKind: dailyVariantKindFromSourceMetadata(newData, alignmentGroup, i),
                __dailySourceIndexes: sourceIndexes
            };
        }
        inferDailyVariantKinds(variants, baseId);
        applyDailySourceVariantLabels(variants, baseId, alignmentGroups || []);
        applyDailyLengthVariantLabels(variants, baseId);
        applyDailyKindedVariantLabels(variants, baseId);
        if (baseId === 'gospel') {
            applyGospelLengthVariantCitations(variants, newData);
        }
        preferFirstDailySourceVariant(variants, baseId);
        item.type = 'selectable';
        item.variants = variants;
        item.lines = variants.A ? variants.A.lines : Object.values(variants)[0].lines;
        item.__dailyGeneratedVariants = true;
        if (isPrayerPart(baseId)) item.__dailyGeneratedPrayerVariants = true;
        if (!state.options[baseId] || !variants[state.options[baseId]]) state.options[baseId] = variants.A ? 'A' : Object.keys(variants)[0];
        return true;
    }

    function applyDailyReadingsToMassData(fetchedData) {
        massData.forEach(item => {
            const baseId = getBaseId(item.id);
            if (!fetchedData[baseId]) return;
            const newData = fetchedData[baseId];
            normalizeDailySelectableTemplate(item);

            item.cit = item.cit || {};
            ['kr', 'vn', 'en', 'jp', 'la'].forEach(lower => {
                const citKey = `cit_${lower}`;
                if (newData[citKey]) item.cit[citKey] = newData[citKey];
            });

            if (ensureDailySelectableVariants(item, newData, baseId)) return;

            let targetLines = item.type === 'selectable' && item.variants && item.variants['A'] ? item.variants['A'].lines : item.lines;
            if (!targetLines) return;
            if (isPrayerPart(baseId)) ensurePrayerFrameLines(targetLines, baseId);

            let hasStructuredLines = false;
            ['kr', 'vn', 'en', 'jp', 'la'].forEach(lower => {
                const structuredLines = newData[`${lower}_lines`];
                if (Array.isArray(structuredLines) && structuredLines.length) {
                    hasStructuredLines = true;
                    applyParsedLinesForLanguage(targetLines, lower, structuredLines, baseId);
                } else {
                    clearParsedLanguageLines(targetLines, lower, baseId);
                }
            });

            let contentLine = targetLines.find(line => line.sp_kr === '' && !line.rubric_kr && !isProtectedParsedTargetLine(line, baseId));
            if (!contentLine) {
                if (!hasStructuredLines) targetLines.length = 0;
                contentLine = targetLines.find(line => !line.rubric_kr && !isProtectedParsedTargetLine(line, baseId)) || emptyMassLine();
                if (!targetLines.includes(contentLine)) targetLines.push(contentLine);
            }

            ['kr', 'vn', 'en', 'jp', 'la'].forEach(lower => {
                if (Array.isArray(newData[`${lower}_lines`]) && newData[`${lower}_lines`].length) return;
                if (newData[lower] && String(newData[lower]).trim()) {
                    contentLine[`text_${lower}`] = newData[lower];
                    contentLine[`text_${lower}_ai`] = '';
                    contentLine[`sp_${lower}`] = normalizeDailySpeaker(baseId, lower, contentLine[`sp_${lower}`], '', newData[lower]);
                }
            });

            if (isPrayerPart(baseId)) ensureLocalizedPrayerConclusions(targetLines, baseId);
            if (isPrayerPart(baseId)) ensurePrayerFrameLines(targetLines, baseId);
            normalizeDailySectionLines(targetLines, baseId);
            removeDailyProclamationEndingLines(targetLines, baseId);
            if (item.type === 'selectable' && item.variants && item.variants.A) item.lines = item.variants.A.lines;
            const introLine = targetLines.find(line => line.sp_kr === '○' || (line.sp_kr === '✚' && line.text_kr && line.text_kr.includes('복음')));
            if (introLine && newData.intro_vn) introLine.text_vn = newData.intro_vn;
        });
    }

    function prayerCopyrightNoticeForLang(langCode) {
        const lang = normalizeSelectableLang(langCode || 'KR', 'KR');
        if (lang === 'EN' && isIrelandJurisdiction()) return '© Irish Episcopal Commission for Liturgy, 2009';
        const notices = {
            KR: 'ⓒ 한국천주교주교회의',
            VN: 'Copyright © 2017-2026 Dicasterium pro Communicatione - Giữ bản quyền',
            EN: '©2026 United States Conference of Catholic Bishops',
            JP: '© apud Administrationem Patrimonii Sedis Apostolicae in Civitate Vaticana, 2008.',
            LA: '© Libreria Editrice Vaticana'
        };
        return notices[lang] || '';
    }

    function localizedPrayerCopyrightText(langCodes = []) {
        const langs = Array.from(new Set((Array.isArray(langCodes) ? langCodes : [langCodes])
            .map(lang => normalizeSelectableLang(lang, ''))
            .filter(Boolean)));
        return langs
            .map(prayerCopyrightNoticeForLang)
            .filter(Boolean)
            .join('<br>');
    }

    function publicAppVersionLabel(version = APP_VERSION) {
        const match = String(version || '').trim().match(/^V\d+(?:\.\d+)?/i);
        return match ? match[0].toUpperCase() : String(version || '').trim();
    }

    function appVersionFooterHtml() {
        const version = publicAppVersionLabel();
        if (!version) return '';
        document.documentElement.dataset.appVersion = version;
        return `<span class="app-version-label" data-app-version="${version}" style="display:inline-block;margin-top:2px;color:#bbb;font-weight:700;letter-spacing:.04em;">Ordo Missae ${version}</span>`;
    }

    function updateFooterCopyright() {
        const footer = document.getElementById('main-footer');
        if (!footer) return;
        let copyright = '';
        if (state.activeTab === 'prayers') {
            copyright = localizedPrayerCopyrightText([state.currentLoc, state.targetLang]);
        } else if (state.activeTab !== 'hymns' && state.activeTab !== 'churches') {
            if(state.currentLoc === 'KR' || state.targetLang === 'KR') copyright += `ⓒ 한국천주교주교회의, 2017. All Rights Reserved.<br>`;
            if(state.currentLoc === 'VN' || state.targetLang === 'VN') copyright += `2005 © - Hội đồng Giám mục Việt Nam<br>`;
            if(state.currentLoc === 'EN' || state.targetLang === 'EN') copyright += `© 2010, International Commission on English in the Liturgy Corporation.<br>`;
            if(state.currentLoc === 'EN' && isIrelandJurisdiction()) copyright += `© Irish Episcopal Commission for Liturgy, 2009.<br>`;
            if(state.currentLoc === 'LA' || state.targetLang === 'LA') copyright += `© Libreria Editrice Vaticana<br>`;
            if(state.currentLoc === 'JP' || state.targetLang === 'JP') copyright += `© apud Administrationem Patrimonii Sedis Apostolicae in Civitate Vaticana, 2008.<br>`;
            if(state.transMode === 'ai') copyright += `ⓒ Google AI Translation, 2026.`;
        }
        const versionHtml = appVersionFooterHtml();
        const separator = copyright && versionHtml && !copyright.endsWith('<br>') ? '<br>' : '';
        footer.innerHTML = `${copyright}${separator}${versionHtml}`;
        syncQuickHomeMenuWithFooter();
    }

    function syncQuickHomeMenuWithFooter() {
        const footer = document.getElementById('main-footer');
        if (!footer) return;
        const height = Math.max(0, footer.getBoundingClientRect().height);
        const quickMenu = document.getElementById('quick-home-menu');
        const quickMenuWidth = quickMenu ? Math.max(0, quickMenu.getBoundingClientRect().width) : 0;
        document.documentElement.style.setProperty('--fixed-footer-height', `${height}px`);
        document.documentElement.style.setProperty('--quick-home-reserved-width', `${quickMenuWidth}px`);
    }

    window.addEventListener('resize', syncQuickHomeMenuWithFooter, { passive: true });
    if (typeof ResizeObserver === 'function') {
        const fixedFooterResizeObserver = new ResizeObserver(syncQuickHomeMenuWithFooter);
        fixedFooterResizeObserver.observe(document.getElementById('main-footer'));
        fixedFooterResizeObserver.observe(document.getElementById('quick-home-menu'));
    }

    // AI 번역 버튼
    function finalizeDailyReadingsData(fetchedData) {
        const activeDate = getActiveLiturgicalSourceDate();
        applyKoreanMissalForeignProperOverlay(fetchedData, activeDate);
        applyKoreanMissalOrdinaryConflictOverlay(fetchedData, activeDate);
        applyLocalMissalPrayerOverlay(fetchedData, activeDate);
        // The Korean Missal overlays are added after remote sources merge, so
        // their source-pairing rule must be evaluated at this point as well.
        applyCachedVariantAlignments(fetchedData, activeDate);
        const baseLang = getLiturgicalBaseLang();
        state.liturgyInfo.color = colorFromSourceTitle(state.liturgyInfo.names[baseLang] || state.liturgyInfo.krName, state.liturgyInfo.color);
        state.liturgyInfo.color = recommendedVestmentColor(getActiveLiturgicalSourceDate(), state.liturgyInfo.color, state.liturgyInfo);
        ensureDefaultPrefaceHint(state.liturgyInfo, getActiveLiturgicalSourceDate());
        applyDailyReadingsToMassData(fetchedData);
        updateFooterCopyright();
    }

    function applyCachedDailyReadings(date, sources = getActiveDailySourceLanguages(), options = {}) {
        const fetchedData = createDailyReadingData();
        let appliedCount = 0;
        sources.forEach(lang => {
            const parsed = readCachedDailySource(lang, date);
            if (!parsed) return;
            mergeSourceData(fetchedData, parsed, lang, { suppressTitle: !!options.suppressTitles });
            state.dailyReadingLanguageStatus[lang] = 'done';
            delete (state.dailyReadingLanguageErrorAt || {})[lang];
            appliedCount += 1;
        });
        if (!appliedCount) {
            updateFooterCopyright();
            return false;
        }
        applyCachedVariantAlignments(fetchedData, date);
        finalizeDailyReadingsData(fetchedData);
        return true;
    }

    async function fetchDailyReadings(options = {}) {
        const today = cloneDateOnly(options.date || getActiveLiturgicalSourceDate());
        let fetchedData = createDailyReadingData();
        const initialLiturgyInfo = cloneData(state.liturgyInfo);
        const sources = markDailyReadingLanguagesLoading(
            options.sources || getActiveDailySourceLanguages(),
            { preserveDone: !!options.preserveLoadedStatus }
        );
        showLiturgyLoadingMessage();

        if (!sources.length) {
            if (options.shouldApply && !options.shouldApply()) return false;
            state.dailyReadingsLoading = false;
            state.dailyReadingLanguageStatus = {};
            render();
            return false;
        }

        let appliedCount = 0;
        const applyResult = result => {
            if (options.shouldApply && !options.shouldApply()) return false;
            if (result.parsed && result.lang === 'VN' && !hasCompleteVietnameseParsedMass(result.parsed)) {
                result.error = new Error('VN source is incomplete: ' + missingVietnameseDailySections(result.parsed).join(', '));
                result.parsed = null;
            }
            if (result.parsed) {
                rememberLiturgyCompletionDuringChoice(result.lang);
                state.dailyReadingLanguageStatus[result.lang] = 'done';
                delete (state.dailyReadingLanguageErrorAt || {})[result.lang];
                mergeSourceData(fetchedData, result.parsed, result.lang);
                applyCachedVariantAlignments(fetchedData, today);
                finalizeDailyReadingsData(fetchedData);
                appliedCount += 1;
                console.log(`${result.lang} 매일미사 데이터 적용 완료`, result.parsed.title || '');
                render();
                return true;
            }
            state.dailyReadingLanguageStatus[result.lang] = 'error';
            if (!state.dailyReadingLanguageErrorAt) state.dailyReadingLanguageErrorAt = {};
            state.dailyReadingLanguageErrorAt[result.lang] = Date.now();
            console.warn(`${result.lang} 매일미사 데이터 파싱 실패`, result.error);
            render();
            return false;
        };

        const results = await Promise.all(sources.map(lang => {
            const sourcePromise = fetchParsedDailyMass(lang, today, { forceRemote: !!options.forceRemote });
            return withTimeout(
                sourcePromise,
                DAILY_SOURCE_LANGUAGE_TIMEOUT_MS,
                `${lang} daily source timeout`
            )
                .then(parsed => ({ lang, parsed }))
                .catch(error => ({ lang, error }))
                .then(result => {
                    applyResult(result);
                    return result;
                });
        }));

        if (options.shouldApply && !options.shouldApply()) return false;

        const completedResults = results.filter(result => result && result.parsed);
        if (completedResults.length) {
            state.liturgyInfo = cloneData(initialLiturgyInfo);
            fetchedData = createDailyReadingData();
            sources.forEach(lang => {
                const result = completedResults.find(candidate => candidate.lang === lang);
                if (result) mergeSourceData(fetchedData, result.parsed, result.lang);
            });
            appliedCount = completedResults.length;
        }

        state.dailyReadingsLoading = false;
        if (appliedCount) {
            applyCachedVariantAlignments(fetchedData, today);
            finalizeDailyReadingsData(fetchedData);
        }
        render();

        if (appliedCount) {
            alignDailySelectableVariantsWithAI(fetchedData, today)
                .then(() => compareLocalMissalPrayersWithAI(fetchedData, today))
                .then(() => {
                    if (options.shouldApply && !options.shouldApply()) return false;
                    finalizeDailyReadingsData(fetchedData);
                    return alignDailyTextEquivalenceWithAI(today);
                })
                .then(() => {
                if (options.shouldApply && !options.shouldApply()) return;
                finalizeDailyReadingsData(fetchedData);
                render();
                }).catch(error => {
                console.warn('일일 독서 선택지 정렬 보정 실패', error);
                });
        }
        return appliedCount > 0 || results.some(result => result.parsed);
    }

    function refreshDailyReadingsForLoad(today, loadId, sources, silent = true, forceRemote = false) {
        return fetchDailyReadings({
            date: today,
            sources,
            silent,
            forceRemote,
            preserveLoadedStatus: true,
            shouldApply: () => loadId === activeMassDataLoadId
        }).then(applied => {
            if (applied && loadId === activeMassDataLoadId) render();
        }).catch(error => {
            console.warn('일일 독서 백그라운드 갱신 실패', error);
        });
    }

    function clearDailyAnalysisCachesForRefresh(date) {
        try {
            dailyVariantAlignmentSectionIds.forEach(baseId => {
                localStorage.removeItem(dailyVariantAlignmentStorageKey(date, baseId));
            });
            localStorage.removeItem(dailySemanticEquivalenceStorageKey(date));
            const localMissalPrefix = `${STORAGE_PREFIX}localMissal:${formatDateIso(date)}:`;
            for (let index = localStorage.length - 1; index >= 0; index -= 1) {
                const key = localStorage.key(index);
                if (key && key.startsWith(localMissalPrefix)) localStorage.removeItem(key);
            }
        } catch (error) {
            console.warn('전례 선택지 분석 캐시를 비우지 못했습니다.', error);
        }
    }

    async function fetchMassData(options = {}) {
        const loadId = ++activeMassDataLoadId;
        const dateContext = rememberLiturgicalDateContext(getStrictDateContext(new Date()));
        const today = cloneDateOnly(dateContext.date);
        state.liturgyInfo = applyNavigationDateLabel(buildGeneratedLiturgyInfo(today), dateContext);
        state.liturgyInfo.color = recommendedVestmentColor(today, state.liturgyInfo.color, state.liturgyInfo);
        state.isSunday = !!(state.liturgyInfo.isSunday || state.liturgyInfo.isSolemnity);
        const requestedSources = getActiveDailySourceLanguages();
        if (!options.skipStartupPrompts) {
            const consentGranted = await waitForStartupNoticeDecision();
            if (!consentGranted || loadId !== activeMassDataLoadId) return false;
            await ensureVietnameseReadingSourceChoice(requestedSources);
        } else if (startupNoticeDecision !== true || document.body.classList.contains('consent-pending')) {
            return false;
        }
        if (loadId !== activeMassDataLoadId) return;
        if (options.forceRemote) clearDailyAnalysisCachesForRefresh(today);
        state.options.eucharist_song = '';
        state.autoEucharistSongKey = '';

        resetMassDataFrom(getStartupOrdinaryMassData());
        applyCachedPopeNames();
        await loadSpecialMassFileIfNeeded(today);
        if (loadId !== activeMassDataLoadId) return;

        const sources = markDailyReadingLanguagesLoading(requestedSources);
        applyCachedDailyReadings(today, sources, { suppressTitles: true });
        render();
        refreshPopeNamesFromVatican().then(changed => {
            if (changed && loadId === activeMassDataLoadId) render();
        });

        return refreshDailyReadingsForLoad(today, loadId, sources, true, !!options.forceRemote);
    }

    function applyDetectedLocation(nextLoc, detectedTimeZone = '') {
        const previousLoc = state.currentLoc;
        const previousLocationCode = state.selectedLocationCode;
        const previousTargetLang = state.targetLang;
        const previousTimeZone = state.gpsTimeZone;
        const normalizedCode = String(nextLoc || '').trim().toUpperCase();
        const nextLocationCode = locationMeta[normalizedCode]
            ? normalizedCode
            : (Object.keys(locationMeta).find(code => locationMeta[code].lang === normalizeSelectableLang(nextLoc, 'KR')) || 'KR');
        state.selectedLocationCode = nextLocationCode;
        state.currentLoc = normalizeSelectableLang(getLangFromLocation(nextLocationCode), 'KR');
        state.gpsTimeZone = detectedTimeZone
            || (locationMeta[nextLocationCode] && locationMeta[nextLocationCode].timeZone)
            || liturgicalTimeZoneForLang(state.currentLoc);
        state.liturgicalDateContext = null;
        state.targetLang = normalizeDistinctTargetLang(state.targetLang, state.currentLoc);
        setLocationSelectByCode(nextLocationCode);
        syncTargetLanguageOptions();
        syncAuxPanelsWithSettings();
        persistAndroidAppSettings({ consentAccepted: startupNoticeDecision === true });
        return previousLoc !== state.currentLoc || previousLocationCode !== state.selectedLocationCode
            || previousTargetLang !== state.targetLang || previousTimeZone !== state.gpsTimeZone;
    }

    function gpsLanguageForTimeZone(timeZone) {
        const browserZone = String(timeZone || '').toLowerCase();
        if (browserZone.includes('dublin')) return 'IE';
        if (browserZone.includes('belfast') || browserZone.includes('london')) return 'GB-NIR';
        if (browserZone.includes('taipei')) return 'TW';
        if (browserZone.includes('shanghai') || browserZone.includes('chongqing')) return 'CN';
        if (browserZone.includes('manila')) return 'PH';
        if (browserZone.includes('jakarta') || browserZone.includes('makassar') || browserZone.includes('jayapura')) return 'ID';
        if (browserZone.includes('bangkok')) return 'TH';
        if (browserZone.includes('phnom_penh')) return 'KH';
        if (browserZone.includes('singapore')) return 'SG';
        if (browserZone.includes('kuala_lumpur') || browserZone.includes('kuching')) return 'MY';
        if (browserZone.includes('brunei')) return 'BN';
        if (browserZone.includes('hong_kong')) return 'HK';
        if (browserZone.includes('macau')) return 'MO';
        if (browserZone.includes('tokyo')) return 'JP';
        if (browserZone.includes('ho_chi_minh') || browserZone.includes('saigon')) return 'VN';
        if (browserZone.startsWith('america/')) return 'US';
        if (browserZone.includes('rome') || browserZone.includes('vatican')) return 'VA';
        return 'KR';
    }

    function gpsLocationForCoordinates(lat, lon) {
        if (lat >= 41.88 && lat <= 41.93 && lon >= 12.43 && lon <= 12.48) return 'VA';
        if (lat > 33 && lat < 39 && lon > 124 && lon < 132) return 'KR';
        if (lat > 22.05 && lat < 22.25 && lon > 113.45 && lon < 113.65) return 'MO';
        if (lat > 22.1 && lat < 22.6 && lon > 113.8 && lon < 114.5) return 'HK';
        if (lat > 21.8 && lat < 25.5 && lon > 119 && lon < 122.2) return 'TW';
        if (lat > 1.1 && lat < 1.5 && lon > 103.55 && lon < 104.1) return 'SG';
        if (lat > 4 && lat < 5.2 && lon > 114 && lon < 115.4) return 'BN';
        if (lat > 4.5 && lat < 21.5 && lon > 116 && lon < 127) return 'PH';
        if (lat > 0.5 && lat < 7.6 && lon > 99 && lon < 120) return 'MY';
        if (lat > -11.5 && lat < 6.5 && lon > 95 && lon < 141) return 'ID';
        if (lat > 10 && lat < 15 && lon > 102 && lon < 108) return 'KH';
        if (lat > 8 && lat < 24 && lon > 102 && lon < 110) return 'VN';
        if (lat > 5.5 && lat < 20.5 && lon > 97 && lon < 106) return 'TH';
        if (lat > 24 && lat < 46 && lon > 122 && lon < 146) return 'JP';
        if (lat > 18 && lat < 54 && lon > 73 && lon < 135) return 'CN';
        if (lat > 51.3 && lat < 55.6 && lon > -10.8 && lon < -5.2) {
            const zone = String(Intl.DateTimeFormat().resolvedOptions().timeZone || '').toLowerCase();
            return zone.includes('london') || zone.includes('belfast') ? 'GB-NIR' : 'IE';
        }
        if (lat > 18 && lat < 72 && lon > -172 && lon < -66) return 'US';
        return gpsLanguageForTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone || '');
    }

    function gpsTimeZoneForCoordinates(lat, lon, locationCode) {
        if (locationCode === 'US') {
            if (lat < 23 && lon < -154) return 'Pacific/Honolulu';
            if (lat > 50 && lon < -130) return 'America/Anchorage';
            if (lon <= -115) return 'America/Los_Angeles';
            if (lon <= -100) return 'America/Denver';
            if (lon <= -85) return 'America/Chicago';
            return 'America/New_York';
        }
        if (locationMeta[locationCode] && locationMeta[locationCode].timeZone) return locationMeta[locationCode].timeZone;
        return Intl.DateTimeFormat().resolvedOptions().timeZone
            || liturgicalTimeZoneForLang(getLangFromLocation(locationCode));
    }

    function simulateGPS() {
        if (!(state.useGps && navigator.geolocation)) return;
        navigator.geolocation.getCurrentPosition(pos => {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;
            state.gpsCoordinates = { lat, lon };
            const nextLoc = gpsLocationForCoordinates(lat, lon);
            const detectedTimeZone = gpsTimeZoneForCoordinates(lat, lon, nextLoc);
            if (applyDetectedLocation(nextLoc, detectedTimeZone)) fetchMassData();
            else render();
            refreshGpsBishopContext(lat, lon, nextLoc);
        }, () => {
            state.gpsCoordinates = null;
            applyGpsBishopContext(null);
            const fallbackZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Seoul';
            if (applyDetectedLocation(gpsLocationForCoordinates(Number.NaN, Number.NaN), fallbackZone)) fetchMassData();
        }, { timeout: 30000, maximumAge: 60000, enableHighAccuracy: true });
    }

    const GEMINI_PROXY_ENDPOINT = window.ORDO_GEMINI_PROXY_ENDPOINT || 'https://us-central1-ordinary-mass-app.cloudfunctions.net/geminiProxy';
    const aiLanguageNames = {
        KR: 'Korean',
        VN: 'Vietnamese',
        EN: 'English',
        JP: 'Japanese',
        LA: 'Latin'
    };

    // Korean Catholic terminology is enforced in both the model prompt and
    // the final output. The broader prompt list follows the Catholic/Protestant
    // comparison supplied for this project; only context-safe items are
    // mechanically replaced so ordinary Korean words are not damaged.
    const catholicKoreanTerminologyPromptPairs = Object.freeze([
        ['하나님', '하느님'], ['성도', '신도'], ['여호와', '주님 또는 문맥에 맞는 하느님'],
        ['갈급하다', '애타하다'], ['갈람나무/감람나무', '올리브나무'], ['열납되다', '반기시다'],
        ['강팍하다', '완고하다'], ['열방', '나라·만민·세계·세상'], ['거하다', '머물다'],
        ['영영하다', '영원하다'], ['계수하다', '헤아리다'], ['요동치 아니하다', '흔들리지 아니하다'],
        ['곤고케 하다', '힘들게 하다'], ['전', '앞(문맥상 위치를 뜻할 때만)'],
        ['그 발 등상', '그분의 발판'], ['족속', '민족'], ['기사', '기적(초자연적 사건을 뜻할 때만)'],
        ['초장', '풀밭'], ['능치 못하실 일', '하시지 못할 일'], ['평강', '평안 또는 평화'],
        ['도', '길(신앙의 길을 뜻할 때만)'], ['민망하다', '불쌍하다'], ['할렐루야', '알렐루야'],
        ['방언', '언어'], ['합력', '협력'], ['아바', '아빠'], ['희락', '기쁨'],
        ['찬송가', '성가'], ['침례', '세례'], ['주기도문', '주님의 기도'],
        ['성찬식', '성찬례'], ['목사', '사제(가톨릭 성직자를 뜻할 때)'], ['예배', '미사 또는 전례(문맥에 따라)']
    ]);

    const catholicKoreanForcedTermReplacements = Object.freeze([
        [/여호와로/gu, '주님 때문에'],
        [/여호와를/gu, '주님을'], [/여호와가/gu, '주님이'], [/여호와는/gu, '주님은'], [/여호와와/gu, '주님과'],
        [/평강을/gu, '평화를'], [/평강이/gu, '평화가'], [/평강은/gu, '평화는'], [/평강과/gu, '평화와'], [/평강으로/gu, '평화로'],
        [/방언을/gu, '언어를'], [/방언이/gu, '언어가'], [/방언은/gu, '언어는'], [/방언과/gu, '언어와'], [/방언으로/gu, '언어로'],
        [/주기도문을/gu, '주님의 기도를'], [/주기도문이/gu, '주님의 기도가'], [/주기도문은/gu, '주님의 기도는'], [/주기도문과/gu, '주님의 기도와'], [/주기도문으로/gu, '주님의 기도로'],
        [/성찬식을/gu, '성찬례를'], [/성찬식이/gu, '성찬례가'], [/성찬식은/gu, '성찬례는'], [/성찬식과/gu, '성찬례와'], [/성찬식으로/gu, '성찬례로'],
        [/하나님/gu, '하느님'],
        [/성도/gu, '신도'],
        [/여호와/gu, '주님'],
        [/(?:갈람|감람)나무/gu, '올리브나무'],
        [/강팍/gu, '완고'],
        [/열방/gu, '모든 민족'],
        [/그\s*발\s*등상/gu, '그분의 발판'],
        [/족속/gu, '민족'],
        [/초장/gu, '풀밭'],
        [/평강/gu, '평화'],
        [/할렐루야/giu, '알렐루야'],
        [/방언/gu, '언어'],
        [/합력/gu, '협력'],
        [/아바/gu, '아빠'],
        [/희락/gu, '기쁨'],
        [/찬송가/gu, '성가'],
        [/침례/gu, '세례'],
        [/주기도문/gu, '주님의 기도'],
        [/성찬식/gu, '성찬례']
    ]);

    function catholicTranslationStyleInstruction(targetLangCode) {
        if (normalizeSelectableLang(targetLangCode, '') !== 'KR') return '';
        const pairs = catholicKoreanTerminologyPromptPairs
            .map(([avoid, use]) => `“${avoid}”→“${use}”`)
            .join(', ');
        return [
            'Use the official terminology and style of the Catholic Church in Korea and the Korean Catholic Bishops’ Conference Bible and Roman Missal.',
            'Do not use Korean Protestant Bible, worship, hymn, clergy, or church vocabulary.',
            `Mandatory Catholic terminology (left side is forbidden in the Korean result): ${pairs}.`,
            'For context-sensitive pairs, choose the listed Catholic expression that preserves the source meaning; never perform a word-for-word Protestant rendering.'
        ].join(' ');
    }

    function enforceCatholicTranslationTerminology(value, targetLangCode) {
        let translated = String(value || '');
        if (normalizeSelectableLang(targetLangCode, '') !== 'KR') return translated;
        catholicKoreanForcedTermReplacements.forEach(([pattern, replacement]) => {
            translated = translated.replace(pattern, replacement);
        });
        return translated;
    }

    function plainTextFromHtml(value) {
        const doc = parseHtml(`<div>${String(value || '')}</div>`);
        return cleanNodeText(doc.body ? doc.body.textContent : String(value || ''));
    }

    function aiTranslatedHtml(value) {
        return escapeHtml(value).replace(/\r?\n/g, '<br>');
    }

    async function fetchGeminiViaFirebase(kind, promptConfig, options = {}) {
        const label = options.label || 'AI request';
        if (!GEMINI_PROXY_ENDPOINT || /YOUR_|example\.com/i.test(GEMINI_PROXY_ENDPOINT)) {
            throw new Error('Firebase AI proxy URL is not configured.');
        }
        const response = await fetchWithTimeout(GEMINI_PROXY_ENDPOINT, {
            method: 'POST',
            cache: 'no-cache',
            timeoutMs: options.timeoutMs || 30000,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ kind, promptConfig })
        });
        if (!response.ok) {
            const detail = await response.text().catch(() => '');
            throw new Error(`${label} failed: HTTP ${response.status}${detail ? ` ${detail.slice(0, 180)}` : ''}`);
        }
        return await response.json();
    }

    function geminiTextFromPayload(payload) {
        return (payload.candidates || [])
            .flatMap(candidate => candidate.content && candidate.content.parts ? candidate.content.parts : [])
            .map(part => part.text || '')
            .join('\n')
            .trim();
    }

    async function translateWithGemini(srcText, targetLangCode) {
        const targetName = aiLanguageNames[targetLangCode] || targetLangCode || 'the target language';
        const source = plainTextFromHtml(srcText);
        if (!source) throw new Error('번역할 원문이 없습니다.');
        const prompt = [
            `Translate the following Catholic liturgical text into ${targetName}.`,
            catholicTranslationStyleInstruction(targetLangCode),
            'Return only the translation.',
            'Preserve paragraph breaks. Do not add commentary, headings, or quotation marks.',
            '',
            source
        ].filter(Boolean).join('\n');
        const payload = await fetchGeminiViaFirebase('translate', {
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.2 }
        }, {
            timeoutMs: 30000,
            label: 'AI translation'
        });
        const translated = geminiTextFromPayload(payload);
        if (!translated) throw new Error('AI 번역 결과가 비어 있습니다.');
        return enforceCatholicTranslationTerminology(translated, targetLangCode);
    }

    const aiTranslationRecords = new Map();

    function stableTextHash(value) {
        const text = String(value || '');
        let hash = 2166136261;
        for (let i = 0; i < text.length; i += 1) {
            hash ^= text.charCodeAt(i);
            hash = Math.imul(hash, 16777619);
        }
        return (hash >>> 0).toString(36);
    }

    function aiTranslationKey(srcText, targetLangCode) {
        const source = plainTextFromHtml(srcText);
        return `${normalizeSelectableLang(targetLangCode, DEFAULT_TARGET_LANG)}:${source.length}:${stableTextHash(source)}`;
    }

    function applyAITranslationResultToButton(btn, resultText) {
        const parent = btn && btn.parentElement;
        if (parent) parent.innerHTML = `<span class="ai-badge">AI</span>${aiTranslatedHtml(resultText)}`;
    }

    let voiceRecognition = null;
    let voiceRestartTimer = null;
    let voiceManualStop = false;
    let voiceFatalError = false;
    let voicePaused = false;
    let isRecordingVoice = false;
    let voiceHighlightTimer = null;
    let voiceStatusHideTimer = null;
    let liturgyStatusHideTimer = null;
    let voiceRecognitionBuffer = [];
    let voiceLastMatchedElement = null;
    let voiceLastMatchedSignature = '';
    const VOICE_BUFFER_WINDOW_MS = 8000;
    const VOICE_MAX_ALTERNATIVES = 5;

    const uiLanguageNames = {
        KR: { KR: '한국어', VN: '베트남어', EN: '영어', JP: '일본어', LA: '라틴어' },
        VN: { KR: 'tiếng Hàn', VN: 'tiếng Việt', EN: 'tiếng Anh', JP: 'tiếng Nhật', LA: 'tiếng Latinh' },
        EN: { KR: 'Korean', VN: 'Vietnamese', EN: 'English', JP: 'Japanese', LA: 'Latin' },
        JP: { KR: '韓国語', VN: 'ベトナム語', EN: '英語', JP: '日本語', LA: 'ラテン語' },
        LA: { KR: 'Coreana', VN: 'Vietnamensis', EN: 'Anglica', JP: 'Iaponica', LA: 'Latina' }
    };

    const voiceUiText = {
        KR: {
            on: '켜짐', off: '꺼짐', ready: '준비됨', activeShort: '음성 인식 중', pausedShort: '음성인식 정지됨', start: '시작', stop: '끄기',
            preparing: '음성 인식 준비 중', listening: '음성 인식 중 · 위치가 맞게 표시되면 정지 버튼을 누르세요', paused: '음성 인식 정지됨 · 재생 버튼을 누르면 다시 시작합니다',
            found: text => `위치 표시 중 · 들은 말: ${text}`, searching: text => `위치를 찾는 중 · 들은 말: ${text}`,
            noSpeech: '음성이 들리지 않습니다 · 정지하거나 계속 말씀해 주세요', unsupported: '이 브라우저는 실시간 음성 인식을 지원하지 않습니다',
            permission: '마이크 권한이 필요합니다', error: '브라우저 음성 인식 오류가 발생했습니다',
            startFailed: '음성 인식을 시작할 수 없습니다', pauseTitle: '음성 인식 정지', playTitle: '음성 인식 재생'
        },
        VN: {
            on: 'Bật', off: 'Tắt', ready: 'Sẵn sàng', activeShort: 'Đang nhận giọng nói', pausedShort: 'Đã dừng nhận giọng nói', start: 'Bắt đầu', stop: 'Tắt',
            preparing: 'Đang chuẩn bị nhận giọng nói', listening: 'Đang nhận giọng nói · khi vị trí đã đúng, hãy nhấn nút dừng', paused: 'Đã dừng nhận giọng nói · nhấn nút phát để tiếp tục',
            found: text => `Đang đánh dấu vị trí · nghe: ${text}`, searching: text => `Đang tìm vị trí · nghe: ${text}`,
            noSpeech: 'Không nghe thấy tiếng nói · hãy tiếp tục nói hoặc nhấn nút dừng', unsupported: 'Trình duyệt này không hỗ trợ nhận giọng nói trực tiếp',
            permission: 'Cần quyền dùng micro', error: 'Lỗi nhận giọng nói của trình duyệt',
            startFailed: 'Không thể bắt đầu nhận giọng nói', pauseTitle: 'Dừng nhận giọng nói', playTitle: 'Nghe tiếp'
        },
        EN: {
            on: 'On', off: 'Off', ready: 'Ready', activeShort: 'Voice recognition active', pausedShort: 'Voice recognition paused', start: 'Start', stop: 'Turn off',
            preparing: 'Preparing voice recognition', listening: 'Voice recognition active · press stop once the correct position is shown', paused: 'Voice recognition paused · press play to resume',
            found: text => `Tracking position · heard: ${text}`, searching: text => `Finding position · heard: ${text}`,
            noSpeech: 'No speech heard · keep speaking or use the stop button', unsupported: 'This browser does not support live speech recognition',
            permission: 'Microphone permission is required', error: 'Browser speech recognition error',
            startFailed: 'Could not start speech recognition', pauseTitle: 'Pause speech recognition', playTitle: 'Resume speech recognition'
        },
        JP: {
            on: 'オン', off: 'オフ', ready: '準備完了', activeShort: '音声認識中', pausedShort: '音声認識停止', start: '開始', stop: 'オフ',
            preparing: '音声認識を準備中', listening: '音声認識中 · 正しい位置が表示されたら停止ボタンを押してください', paused: '音声認識を停止中 · 再生ボタンで再開できます',
            found: text => `位置を表示中 · 認識: ${text}`, searching: text => `位置を検索中 · 認識: ${text}`,
            noSpeech: '音声が聞こえません · 続けて話すか停止ボタンを押してください', unsupported: 'このブラウザはリアルタイム音声認識に対応していません',
            permission: 'マイクの許可が必要です', error: 'ブラウザの音声認識エラー',
            startFailed: '音声認識を開始できません', pauseTitle: '音声認識を停止', playTitle: '音声認識を再開'
        },
        LA: {
            on: 'Actum', off: 'Exstinctum', ready: 'Paratum', activeShort: 'Cognitio vocis agit', pausedShort: 'Cognitio vocis sistitur', start: 'Incipe', stop: 'Exstingue',
            preparing: 'Cognitio vocis paratur', listening: 'Cognitio vocis agit · ubi locus recte indicatur, globulum sistendi preme', paused: 'Cognitio vocis sistitur · globulum agendi preme ut pergas',
            found: text => `Locus indicatur · auditum: ${text}`, searching: text => `Locus quaeritur · auditum: ${text}`,
            noSpeech: 'Vox non auditur · loquere vel globulum sistendi preme', unsupported: 'Hic navigator cognitionem vocis continuam non sustinet',
            permission: 'Licentia microphoni necessaria est', error: 'Error cognitionis vocis',
            startFailed: 'Cognitionem vocis incipere non potest', pauseTitle: 'Siste cognitionem vocis', playTitle: 'Perge cognitionem vocis'
        }
    };

    function voiceText(key, value = '') {
        const dict = voiceUiText[normalizeSelectableLang(state.uiLang || 'KR', 'KR')] || voiceUiText.KR;
        const entry = dict[key] || voiceUiText.KR[key] || '';
        return typeof entry === 'function' ? entry(value) : entry;
    }

    function localizedLanguageNameForUi(langCode, uiLang = state.uiLang) {
        const ui = normalizeSelectableLang(uiLang || 'KR', 'KR');
        const lang = normalizeSelectableLang(langCode || 'KR', 'KR');
        return (uiLanguageNames[ui] && uiLanguageNames[ui][lang]) || appLanguageName(lang);
    }

    const nativeLanguageNames = Object.freeze({
        KR: '한국어',
        VN: 'Tiếng Việt',
        EN: 'English',
        JP: '日本語',
        LA: 'Latine'
    });

    const appChromeUiText = Object.freeze({
        KR: {
            nav: { mass: '미사', prayers: '기도문', hymns: '성가', churches: '성당' },
            quick: { mass: '미사', prayers: '기도문', hymns: '성가', churches: '성당' },
            navAria: '주요 메뉴', quickAria: '홈 바로가기', settingsOpen: '설정 열기', legendAria: '시편성가 안내'
        },
        VN: {
            nav: { mass: 'Thánh lễ', prayers: 'Kinh nguyện', hymns: 'Thánh ca', churches: 'Nhà thờ' },
            quick: { mass: 'Thánh lễ', prayers: 'Kinh nguyện', hymns: 'Thánh ca', churches: 'Nhà thờ' },
            navAria: 'Trình đơn chính', quickAria: 'Lối tắt trang chính', settingsOpen: 'Mở cài đặt', legendAria: 'Lưu ý về thánh vịnh hát'
        },
        EN: {
            nav: { mass: 'Mass', prayers: 'Prayers', hymns: 'Hymns', churches: 'Churches' },
            quick: { mass: 'Mass', prayers: 'Prayers', hymns: 'Hymns', churches: 'Churches' },
            navAria: 'Main menu', quickAria: 'Home shortcuts', settingsOpen: 'Open settings', legendAria: 'Sung psalm notice'
        },
        JP: {
            nav: { mass: 'ミサ', prayers: '祈り', hymns: '聖歌', churches: '教会' },
            quick: { mass: 'ミサ', prayers: '祈り', hymns: '聖歌', churches: '教会' },
            navAria: 'メインメニュー', quickAria: 'ホームショートカット', settingsOpen: '設定を開く', legendAria: '歌唱詩編について'
        },
        LA: {
            nav: { mass: 'Missa', prayers: 'Preces', hymns: 'Cantus', churches: 'Ecclesiae' },
            quick: { mass: 'Missa', prayers: 'Preces', hymns: 'Cantus', churches: 'Ecclesiae' },
            navAria: 'Menu principale', quickAria: 'Compendia domestica', settingsOpen: 'Ordinationes aperi', legendAria: 'Admonitio de psalmo cantato'
        }
    });

    const settingsUiText = Object.freeze({
        KR: {
            title: '설정', gps: '📍 GPS 자동 위치 인식', loc: '🌐 국가 / 좌측 언어', target: '🔄 번역 언어 (우측)',
            vnSource: '📖 베트남어 전례독서 번역', stacked: '📱 원문/번역문 상하 배치 (강제)',
            voice: '🎙️ 음성 진행 표시', voiceStatus: '준비됨', voiceNote: '※ 주변 환경에 따라 부정확할 수 있습니다.',
            font: '🔍 글자 크기', ui: '⚙️ 설정 언어 (UI)',
            hideStatusBar: '📱 상단 상태바 숨기기', hideNavigationBar: '📱 하단 네비게이션 숨기기', close: '닫기',
            fonts: { '14px': '작게', '18px': '보통', '20px': '크게', '22px': '더 크게' }
        },
        VN: {
            title: 'Cài đặt', gps: '📍 Tự động nhận diện vị trí GPS', loc: '🌐 Quốc gia / Ngôn ngữ bên trái', target: '🔄 Ngôn ngữ dịch (bên phải)',
            vnSource: '📖 Bản dịch bài đọc phụng vụ tiếng Việt', stacked: '📱 Bố cục nguyên bản/bản dịch trên-dưới (bắt buộc)',
            voice: '🎙️ Theo dõi tiến trình bằng giọng nói', voiceStatus: 'Sẵn sàng', voiceNote: '※ Có thể không chính xác tùy môi trường xung quanh.',
            font: '🔍 Kích thước chữ', ui: '⚙️ Ngôn ngữ cài đặt (UI)',
            hideStatusBar: '📱 Ẩn thanh trạng thái phía trên', hideNavigationBar: '📱 Ẩn thanh điều hướng phía dưới', close: 'Đóng',
            fonts: { '14px': 'Nhỏ', '18px': 'Bình thường', '20px': 'Lớn', '22px': 'Lớn hơn' }
        },
        EN: {
            title: 'Settings', gps: '📍 Automatic GPS location', loc: '🌐 Country / Left language', target: '🔄 Translation language (right)',
            vnSource: '📖 Vietnamese liturgical reading translation', stacked: '📱 Stack original/translation (forced)',
            voice: '🎙️ Voice progress tracking', voiceStatus: 'Ready', voiceNote: '※ Accuracy may vary with the surrounding environment.',
            font: '🔍 Font size', ui: '⚙️ Settings language (UI)',
            hideStatusBar: '📱 Hide top status bar', hideNavigationBar: '📱 Hide bottom navigation bar', close: 'Close',
            fonts: { '14px': 'Small', '18px': 'Normal', '20px': 'Large', '22px': 'Larger' }
        },
        JP: {
            title: '設定', gps: '📍 GPSで位置を自動認識', loc: '🌐 国 / 左側の言語', target: '🔄 翻訳言語（右側）',
            vnSource: '📖 ベトナム語典礼朗読の翻訳', stacked: '📱 原文と訳文を上下に配置（強制）',
            voice: '🎙️ 音声による進行表示', voiceStatus: '準備完了', voiceNote: '※ 周囲の環境によって正確でない場合があります。',
            font: '🔍 文字サイズ', ui: '⚙️ 設定言語（UI）',
            hideStatusBar: '📱 上部ステータスバーを隠す', hideNavigationBar: '📱 下部ナビゲーションバーを隠す', close: '閉じる',
            fonts: { '14px': '小', '18px': '標準', '20px': '大', '22px': 'より大きい' }
        },
        LA: {
            title: 'Ordinationes', gps: '📍 Locus per GPS automatice', loc: '🌐 Civitas / Lingua sinistra', target: '🔄 Lingua translationis (dextra)',
            vnSource: '📖 Versio lectionum liturgicarum Vietnamica', stacked: '📱 Textus originalis et versio supra/infra (coacte)',
            voice: '🎙️ Progressus per vocem', voiceStatus: 'Paratum', voiceNote: '※ Accuratio secundum ambitum variari potest.',
            font: '🔍 Magnitudo litterarum', ui: '⚙️ Lingua ordinationum (UI)',
            hideStatusBar: '📱 Lineam status superiorem cela', hideNavigationBar: '📱 Lineam navigationis inferiorem cela', close: 'Claude',
            fonts: { '14px': 'Parva', '18px': 'Usitata', '20px': 'Magna', '22px': 'Maior' }
        }
    });

    const localizedCountryNames = Object.freeze({
        KR: { KR: '한국', VN: '베트남', US: '미국', IE: '아일랜드', 'GB-NIR': '북아일랜드', TW: '대만', CN: '중국', PH: '필리핀', ID: '인도네시아', TH: '태국', KH: '캄보디아', SG: '싱가포르', MY: '말레이시아', BN: '브루나이', HK: '홍콩', MO: '마카오', JP: '일본', VA: '바티칸' },
        VN: { KR: 'Hàn Quốc', VN: 'Việt Nam', US: 'Hoa Kỳ', IE: 'Ireland', 'GB-NIR': 'Bắc Ireland', TW: 'Đài Loan', CN: 'Trung Quốc', PH: 'Philippines', ID: 'Indonesia', TH: 'Thái Lan', KH: 'Campuchia', SG: 'Singapore', MY: 'Malaysia', BN: 'Brunei', HK: 'Hồng Kông', MO: 'Ma Cao', JP: 'Nhật Bản', VA: 'Vatican' },
        EN: { KR: 'South Korea', VN: 'Vietnam', US: 'United States', IE: 'Ireland', 'GB-NIR': 'Northern Ireland', TW: 'Taiwan', CN: 'China', PH: 'Philippines', ID: 'Indonesia', TH: 'Thailand', KH: 'Cambodia', SG: 'Singapore', MY: 'Malaysia', BN: 'Brunei', HK: 'Hong Kong', MO: 'Macau', JP: 'Japan', VA: 'Vatican City' },
        JP: { KR: '韓国', VN: 'ベトナム', US: 'アメリカ', IE: 'アイルランド', 'GB-NIR': '北アイルランド', TW: '台湾', CN: '中国', PH: 'フィリピン', ID: 'インドネシア', TH: 'タイ', KH: 'カンボジア', SG: 'シンガポール', MY: 'マレーシア', BN: 'ブルネイ', HK: '香港', MO: 'マカオ', JP: '日本', VA: 'バチカン' },
        LA: { KR: 'Corea Meridiana', VN: 'Vietnamia', US: 'Civitates Foederatae', IE: 'Hibernia', 'GB-NIR': 'Hibernia Septentrionalis', TW: 'Taiwan', CN: 'Sina', PH: 'Philippinae', ID: 'Indonesia', TH: 'Thailandia', KH: 'Cambodia', SG: 'Singapura', MY: 'Malaysia', BN: 'Bruneium', HK: 'Hongcongum', MO: 'Macaum', JP: 'Iaponia', VA: 'Civitas Vaticana' }
    });

    function titleCaseLocalizedLanguageName(value) {
        const text = String(value || '');
        return text ? text.charAt(0).toLocaleUpperCase() + text.slice(1) : text;
    }

    function localizedLanguageOptionLabel(langCode, uiLang = state.uiLang) {
        const ui = normalizeSelectableLang(uiLang || 'KR', 'KR');
        const lang = normalizeSelectableLang(langCode || 'KR', 'KR');
        const localized = titleCaseLocalizedLanguageName(localizedLanguageNameForUi(lang, ui));
        const native = nativeLanguageNames[lang] || appLanguageName(lang);
        const beta = lang === 'JP' ? ' (Beta)' : '';
        return `${localized}${localized.toLocaleLowerCase() === native.toLocaleLowerCase() ? '' : ` / ${native}`}${beta}`;
    }

    function setElementText(id, value) {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    }

    function syncLocalizedChromeAndSettings() {
        const ui = normalizeSelectableLang(state.uiLang || 'KR', 'KR');
        const chrome = appChromeUiText[ui] || appChromeUiText.KR;
        const settings = settingsUiText[ui] || settingsUiText.KR;
        document.documentElement.lang = (langMeta[ui] && langMeta[ui].code) || 'ko';

        const nav = document.querySelector('nav');
        if (nav) nav.setAttribute('aria-label', chrome.navAria);
        document.querySelectorAll('nav .nav-item[data-tab]').forEach(button => {
            if (chrome.nav[button.dataset.tab]) button.textContent = chrome.nav[button.dataset.tab];
        });
        const quickMenu = document.getElementById('quick-home-menu');
        if (quickMenu) quickMenu.setAttribute('aria-label', chrome.quickAria);
        document.querySelectorAll('#quick-home-menu .quick-home-btn[data-home-tab]').forEach(button => {
            if (chrome.quick[button.dataset.homeTab]) button.textContent = chrome.quick[button.dataset.homeTab];
        });
        document.querySelectorAll('.settings-btn, .floating-settings-btn').forEach(button => {
            button.setAttribute('aria-label', chrome.settingsOpen);
            button.title = chrome.settingsOpen;
        });
        const legend = document.getElementById('role-legend');
        if (legend) legend.setAttribute('aria-label', chrome.legendAria);

        setElementText('lbl-settings-title', settings.title);
        setElementText('lbl-set-gps', settings.gps);
        setElementText('lbl-set-loc', settings.loc);
        setElementText('lbl-set-target', settings.target);
        setElementText('lbl-set-vn-source', settings.vnSource);
        setElementText('lbl-set-stacked', settings.stacked);
        setElementText('lbl-set-voice', `${settings.voice} (Beta)`);
        setElementText('lbl-set-voice-note', settings.voiceNote);
        setElementText('lbl-set-font', settings.font);
        setElementText('lbl-set-ui-lang', settings.ui);
        setElementText('lbl-set-hide-status-bar', settings.hideStatusBar);
        setElementText('lbl-set-hide-navigation-bar', settings.hideNavigationBar);
        setElementText('lbl-close-btn', settings.close);

        const locationSelect = document.getElementById('set-loc');
        if (locationSelect) {
            Array.from(locationSelect.options).forEach(option => {
                const location = locationMeta[option.value];
                if (!location) return;
                const country = (localizedCountryNames[ui] && localizedCountryNames[ui][option.value]) || option.value;
                const language = location.languageVariant
                    ? `${location.languageVariant} · ${localizedLanguageOptionLabel(location.lang, ui)}`
                    : localizedLanguageOptionLabel(location.lang, ui);
                option.textContent = `${country} / ${language}${location.beta ? ' (Beta)' : ''}`;
            });
        }
        const targetSelect = document.getElementById('set-target-lang');
        if (targetSelect) {
            Array.from(targetSelect.options).forEach(option => {
                option.textContent = localizedLanguageOptionLabel(option.value, ui);
            });
        }
        const sourceSelect = document.getElementById('set-vn-source');
        if (sourceSelect) {
            Array.from(sourceSelect.options).forEach(option => {
                option.textContent = vietnameseReadingSourceLabel(option.value, ui);
            });
        }
        const fontSelect = document.getElementById('set-font-size');
        if (fontSelect) {
            Array.from(fontSelect.options).forEach(option => {
                option.textContent = settings.fonts[option.value] || option.textContent;
            });
        }
        const uiSelect = document.getElementById('set-ui-lang');
        if (uiSelect) {
            Array.from(uiSelect.options).forEach(option => {
                option.textContent = localizedLanguageOptionLabel(option.value, ui);
            });
            uiSelect.value = ui;
        }
        syncVoiceControls(state.aiVoiceOn ? (voicePaused ? voiceText('paused') : settings.voiceStatus) : voiceText('off'));
    }

    function localizedLiturgyLoadingMessageForLang(langCode, uiLang = state.uiLang) {
        const ui = normalizeSelectableLang(uiLang || 'KR', 'KR');
        const lang = normalizeSelectableLang(langCode || state.currentLoc || 'KR', 'KR');
        const nameText = localizedLanguageNameForUi(lang, ui);
        return {
            KR: nameText + ' \uC804\uB840\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4',
            VN: '\u0110ang t\u1EA3i ph\u1EE5ng v\u1EE5 ' + nameText,
            EN: 'Loading ' + nameText + ' liturgy',
            JP: nameText + '\u306E\u5178\u793C\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059',
            LA: 'Liturgia ' + nameText + ' oneratur'
        }[ui] || ('Loading ' + nameText + ' liturgy');
    }

    function localizedLiturgyLoadedMessageForLang(langCode, uiLang = state.uiLang) {
        const ui = normalizeSelectableLang(uiLang || 'KR', 'KR');
        const lang = normalizeSelectableLang(langCode || state.currentLoc || 'KR', 'KR');
        const nameText = localizedLanguageNameForUi(lang, ui);
        return {
            KR: nameText + ' 전례 불러오기 완료',
            VN: 'Đã tải xong phụng vụ ' + nameText,
            EN: nameText + ' liturgy loaded',
            JP: nameText + 'の典礼を読み込みました',
            LA: 'Liturgia ' + nameText + ' onerata est'
        }[ui] || (nameText + ' liturgy loaded');
    }

    function liturgyChoiceOverlayVisible() {
        const sourceModal = document.getElementById('vn-source-modal');
        return document.body.classList.contains('consent-pending')
            || !!(sourceModal && sourceModal.classList.contains('is-visible'));
    }

    function rememberLiturgyCompletionDuringChoice(langCode) {
        const lang = normalizeSelectableLang(langCode, '');
        if (!lang || !liturgyChoiceOverlayVisible()) return false;
        if (!state.dailyReadingCompletedDuringChoice) state.dailyReadingCompletedDuringChoice = {};
        state.dailyReadingCompletedDuringChoice[lang] = true;
        return true;
    }

    function preferFirstDailySourceVariant(variants, baseId) {
        const sourceLower = currentLeftRightLowerKeys().left;
        const sourceEntries = Object.entries(variants || {})
            .filter(([, variant]) => variant && Number.isInteger(variant.__dailySourceIndexes && variant.__dailySourceIndexes[sourceLower]))
            .sort((left, right) => left[1].__dailySourceIndexes[sourceLower] - right[1].__dailySourceIndexes[sourceLower]);
        let preferredEntry = sourceEntries[0];
        if (baseId === 'gospel'
            && preferredEntry
            && preferredEntry[1].__dailyLengthKind === 'long'
            && preferredEntry[1].__dailyLengthPairKey) {
            const shortEntry = sourceEntries.find(([, variant]) => (
                variant.__dailyLengthKind === 'short'
                && variant.__dailyLengthPairKey === preferredEntry[1].__dailyLengthPairKey
            ));
            if (shortEntry) preferredEntry = shortEntry;
        }
        const fallbackEntry = Object.entries(variants || {})[0];
        const preferredKey = (preferredEntry || fallbackEntry || [])[0] || '';
        if (!preferredKey) return false;

        const signature = `${formatDateIso(getActiveLiturgicalSourceDate())}:${sourceLower}`;
        const selections = state.autoDailySourceVariantSelections
            || (state.autoDailySourceVariantSelections = {});
        const previous = selections[baseId];
        const current = state.options[baseId];
        if (!previous
            || previous.signature !== signature
            || !current
            || current === previous.key
            || !variants[current]) {
            state.options[baseId] = preferredKey;
        }
        selections[baseId] = { signature, key: preferredKey };
        return true;
    }

    function showPendingLiturgyCompletionAfterChoice() {
        if (liturgyChoiceOverlayVisible() || (state.activeTab || 'mass') !== 'mass') return false;
        const pending = state.dailyReadingCompletedDuringChoice || {};
        const langs = Object.keys(pending).filter(lang => pending[lang]);
        if (!langs.length) return false;
        state.dailyReadingCompletedDuringChoice = {};
        updateLiturgyStatusBar(langs.map(lang => localizedLiturgyLoadedMessageForLang(lang)), { autoHideMs: 1600 });
        setTimeout(() => {
            const leftLang = normalizeSelectableLang(state.currentLoc || 'KR', 'KR');
            const rightLang = normalizeSelectableLang(state.targetLang || DEFAULT_TARGET_LANG, DEFAULT_TARGET_LANG);
            syncLiturgyLoadingStatusBar(leftLang, rightLang);
        }, 1650);
        return true;
    }

    function queuePendingLiturgyCompletionAfterChoice() {
        setTimeout(showPendingLiturgyCompletionAfterChoice, 0);
    }

    function localizedLiturgyLoadFailedMessageForLang(langCode, uiLang = state.uiLang) {
        const ui = normalizeSelectableLang(uiLang || 'KR', 'KR');
        const lang = normalizeSelectableLang(langCode || state.currentLoc || 'KR', 'KR');
        const nameText = localizedLanguageNameForUi(lang, ui);
        return {
            KR: nameText + ' 전례 전체를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.',
            VN: 'Không thể tải đầy đủ phụng vụ ' + nameText + '. Vui lòng thử lại sau.',
            EN: 'The complete ' + nameText + ' liturgy could not be loaded. Please try again later.',
            JP: nameText + 'の典礼全文を読み込めませんでした。しばらくしてから再試行してください。',
            LA: 'Liturgia ' + nameText + ' integra onerari non potuit. Mox iterum tenta.'
        }[ui] || ('The complete ' + nameText + ' liturgy could not be loaded.');
    }

    function ensureRuntimeStatusStack() {
        let stack = document.getElementById('runtime-status-stack');
        if (stack) return stack;
        stack = document.createElement('div');
        stack.id = 'runtime-status-stack';
        stack.className = 'runtime-status-stack';
        document.body.appendChild(stack);
        return stack;
    }

    function ensureVoiceStatusBar() {
        const stack = ensureRuntimeStatusStack();
        let bar = document.getElementById('voice-status-bar');
        if (bar) {
            if (bar.parentElement !== stack) stack.appendChild(bar);
            return bar;
        }
        bar = document.createElement('div');
        bar.id = 'voice-status-bar';
        bar.className = 'voice-status-bar';
        bar.setAttribute('role', 'status');
        bar.setAttribute('aria-live', 'polite');
        bar.innerHTML = [
            '<span class="voice-status-dot" aria-hidden="true"></span>',
            '<span id="voice-status-message" class="voice-status-message"></span>',
            '<button type="button" id="voice-status-stop" class="voice-status-action-btn voice-status-stop-btn" onclick="pauseVoiceRecognitionFromBar()" hidden>■</button>',
            '<button type="button" id="voice-status-play" class="voice-status-action-btn voice-status-play-btn" onclick="resumeVoiceRecognitionFromBar()" hidden>▶</button>'
        ].join('');
        stack.appendChild(bar);
        return bar;
    }

    function updateVoiceStatusBar(text, options = {}) {
        const bar = ensureVoiceStatusBar();
        const message = document.getElementById('voice-status-message');
        const cleanText = cleanNodeText(text);
        if (message) message.textContent = cleanText;
        const stopButton = document.getElementById('voice-status-stop');
        const playButton = document.getElementById('voice-status-play');
        if (stopButton) {
            stopButton.hidden = !options.recording;
            stopButton.title = voiceText('pauseTitle');
            stopButton.setAttribute('aria-label', voiceText('pauseTitle'));
        }
        if (playButton) {
            playButton.hidden = !options.paused;
            playButton.title = voiceText('playTitle');
            playButton.setAttribute('aria-label', voiceText('playTitle'));
        }
        bar.classList.toggle('is-visible', !!cleanText);
        bar.classList.toggle('is-recording', !!options.recording);
        bar.classList.toggle('is-paused', !!options.paused);
        bar.classList.toggle('is-error', !!options.error);
        if (voiceStatusHideTimer) clearTimeout(voiceStatusHideTimer);
        voiceStatusHideTimer = null;
        if (cleanText && options.autoHideMs) {
            voiceStatusHideTimer = setTimeout(() => {
                bar.classList.remove('is-visible', 'is-recording', 'is-error');
                voiceStatusHideTimer = null;
            }, options.autoHideMs);
        }
    }

    function hideVoiceStatusBar(delay = 0) {
        if (voiceStatusHideTimer) clearTimeout(voiceStatusHideTimer);
        voiceStatusHideTimer = null;
        const hide = () => {
            const bar = document.getElementById('voice-status-bar');
            if (bar) bar.classList.remove('is-visible', 'is-recording', 'is-paused', 'is-error');
        };
        if (delay > 0) voiceStatusHideTimer = setTimeout(hide, delay);
        else hide();
    }

    function ensureLiturgyStatusBar() {
        const stack = ensureRuntimeStatusStack();
        let bar = document.getElementById('liturgy-status-bar');
        if (bar) {
            if (bar.parentElement !== stack) stack.appendChild(bar);
            return bar;
        }
        bar = document.createElement('div');
        bar.id = 'liturgy-status-bar';
        bar.className = 'liturgy-status-bar';
        bar.setAttribute('role', 'status');
        bar.setAttribute('aria-live', 'polite');
        stack.appendChild(bar);
        return bar;
    }

    function updateLiturgyStatusBar(messages, options = {}) {
        const bar = ensureLiturgyStatusBar();
        const lines = (Array.isArray(messages) ? messages : String(messages || '').split(/\n+/))
            .map(message => cleanNodeText(message))
            .filter(Boolean);
        bar.innerHTML = lines.map(message => [
            '<div class="liturgy-status-line">',
            '<span class="voice-status-dot" aria-hidden="true"></span>',
            '<span class="voice-status-message">' + escapeHtml(message) + '</span>',
            '</div>'
        ].join('')).join('');
        bar.classList.toggle('is-visible', lines.length > 0);
        bar.classList.toggle('is-loading', !!options.loading);
        bar.classList.toggle('is-error', !!options.error);
        if (liturgyStatusHideTimer) clearTimeout(liturgyStatusHideTimer);
        liturgyStatusHideTimer = null;
        if (lines.length && options.autoHideMs) {
            liturgyStatusHideTimer = setTimeout(() => {
                bar.classList.remove('is-visible', 'is-loading', 'is-error');
                bar.innerHTML = '';
                liturgyStatusHideTimer = null;
            }, options.autoHideMs);
        }
    }

    function hideLiturgyStatusBar(delay = 0) {
        if (liturgyStatusHideTimer) clearTimeout(liturgyStatusHideTimer);
        liturgyStatusHideTimer = null;
        const hide = () => {
            const bar = document.getElementById('liturgy-status-bar');
            if (bar) {
                bar.classList.remove('is-visible', 'is-loading', 'is-error');
                bar.innerHTML = '';
            }
        };
        if (delay > 0) liturgyStatusHideTimer = setTimeout(hide, delay);
        else hide();
    }

    function syncLiturgyLoadingStatusBar(leftLang, rightLang) {
        if ((state.activeTab || 'mass') !== 'mass') {
            hideLiturgyStatusBar();
            return;
        }
        const status = state.dailyReadingLanguageStatus || {};
        const errorStartedAt = state.dailyReadingLanguageErrorAt || (state.dailyReadingLanguageErrorAt = {});
        const visibleLangs = Array.from(new Set([leftLang, rightLang]
            .map(lang => normalizeSelectableLang(lang, ''))
            .filter(Boolean)));
        const trackedLangs = Array.from(new Set(visibleLangs.concat(Object.keys(status)
            .map(lang => normalizeSelectableLang(lang, ''))
            .filter(Boolean))));
        const loadingLangs = trackedLangs.filter(lang => status[lang] === 'loading');
        if (loadingLangs.length) {
            updateLiturgyStatusBar(loadingLangs.map(lang => localizedLiturgyLoadingMessageForLang(lang)), { loading: true });
            return;
        }
        const now = Date.now();
        const errorLangs = trackedLangs.filter(lang => {
            if (status[lang] !== 'error') return false;
            if (!errorStartedAt[lang]) errorStartedAt[lang] = now;
            if (now - errorStartedAt[lang] < 8000) return true;
            status[lang] = 'error-hidden';
            return false;
        });
        if (errorLangs.length) {
            const remainingMs = Math.max(1, Math.min(...errorLangs.map(lang => 8000 - (now - errorStartedAt[lang]))));
            updateLiturgyStatusBar(errorLangs.map(lang => localizedLiturgyLoadFailedMessageForLang(lang)), { error: true, autoHideMs: remainingMs });
            return;
        }
        hideLiturgyStatusBar();
    }

    function clearVoiceListeningAnchor() {
        document.querySelectorAll('.voice-listening-anchor').forEach(node => node.classList.remove('voice-listening-anchor'));
    }

    function markVoiceListeningAnchor() {
        clearVoiceListeningAnchor();
        if ((state.activeTab || 'mass') !== 'mass') return false;
        const candidates = Array.from(document.querySelectorAll('#missal-root .pair-block, #missal-root .pc-line-row:not(.pc-header-row)'))
            .filter(node => {
                if (!voiceSearchableTextForNode(node)) return false;
                const rect = node.getBoundingClientRect();
                return rect.height > 0 && rect.bottom > 74 && rect.top < window.innerHeight - 92;
            })
            .sort((a, b) => {
                const target = window.innerHeight * 0.42;
                const aRect = a.getBoundingClientRect();
                const bRect = b.getBoundingClientRect();
                return Math.abs((aRect.top + aRect.bottom) / 2 - target) - Math.abs((bRect.top + bRect.bottom) / 2 - target);
            });
        const anchor = candidates[0];
        if (!anchor) return false;
        anchor.classList.add('voice-listening-anchor');
        return true;
    }

    function voiceStatusIsError(text) {
        return /실패|권한|미지원|마이크|찾지 못/i.test(cleanNodeText(text));
    }

    function setVoiceStatus(text, recording = false, options = {}) {
        const status = document.getElementById('set-ai-voice-status');
        const button = document.getElementById('btn-ai-voice');
        if (status) status.textContent = recording ? voiceText('activeShort') : (options.settingsText || text);
        if (button) {
            button.textContent = state.aiVoiceOn ? voiceText('stop') : voiceText('start');
            button.classList.toggle('is-recording', recording);
            button.disabled = false;
        }
        const normalized = cleanNodeText(text);
        if (options.hideBar || !normalized) {
            hideVoiceStatusBar();
        } else {
            updateVoiceStatusBar(normalized, {
                recording,
                paused: options.paused,
                error: options.error || voiceStatusIsError(normalized),
                autoHideMs: options.autoHideMs
            });
            if (recording) markVoiceListeningAnchor();
        }
    }

    function syncVoiceControls(statusText) {
        const button = document.getElementById('btn-ai-voice');
        if (button) {
            button.disabled = false;
            button.classList.toggle('is-recording', isRecordingVoice);
            button.textContent = state.aiVoiceOn ? voiceText('stop') : voiceText('start');
        }
        const status = document.getElementById('set-ai-voice-status');
        const nextStatus = state.aiVoiceOn && voicePaused
            ? voiceText('pausedShort')
            : (statusText || (state.aiVoiceOn ? voiceText('ready') : voiceText('off')));
        if (status) status.textContent = state.aiVoiceOn && !voicePaused ? voiceText('activeShort') : nextStatus;
        if (!state.aiVoiceOn && !isRecordingVoice) {
            hideVoiceStatusBar();
            clearVoiceListeningAnchor();
        }
    }

    function browserSpeechRecognitionConstructor() {
        return window.SpeechRecognition || window.webkitSpeechRecognition || null;
    }

    function speechRecognitionLangForState() {
        const lang = normalizeSelectableLang(state.currentLoc || state.uiLang || 'KR', 'KR');
        return {
            KR: 'ko-KR',
            VN: 'vi-VN',
            EN: 'en-US',
            JP: 'ja-JP',
            LA: 'it-IT'
        }[lang] || 'ko-KR';
    }

    function stopVoiceRecognitionInternal(options = {}) {
        voiceManualStop = true;
        if (voiceRestartTimer) clearTimeout(voiceRestartTimer);
        voiceRestartTimer = null;
        if (!options.keepEnabled) {
            state.aiVoiceOn = false;
            voicePaused = false;
            voiceRecognitionBuffer = [];
            voiceLastMatchedElement = null;
        }
        isRecordingVoice = false;
        const recognition = voiceRecognition;
        voiceRecognition = null;
        if (recognition) {
            recognition.onend = null;
            recognition.onerror = null;
            recognition.onresult = null;
            recognition.onstart = null;
            try { recognition.stop(); } catch (error) {}
        }
        syncVoiceControls(options.statusText || (state.aiVoiceOn ? voiceText('ready') : voiceText('off')));
        if (!state.aiVoiceOn) clearVoiceHighlight({ resetAnchor: true });
        if (options.hideBar) hideVoiceStatusBar();
    }

    window.toggleVoiceFeature = async function(enabled) {
        if (!enabled) {
            stopVoiceRecognitionInternal({ statusText: voiceText('off'), hideBar: true });
            return;
        }
        state.aiVoiceOn = true;
        voicePaused = false;
        syncVoiceControls(voiceText('ready'));
    };

    function normalizeVoiceSearchText(value) {
        return cleanNodeText(value)
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^\p{L}\p{N}]+/gu, '')
            .toLowerCase();
    }

    function voiceSearchNeedles(text) {
        const normalized = normalizeVoiceSearchText(text);
        if (!normalized) return [];
        const words = cleanNodeText(text)
            .split(/\s+/)
            .map(normalizeVoiceSearchText)
            .filter(word => word.length >= 4);
        return [normalized].concat(words.slice(0, 8)).filter((item, index, list) => item && list.indexOf(item) === index);
    }

    function uniqueVoiceTexts(values) {
        return (values || [])
            .map(cleanNodeText)
            .filter(Boolean)
            .filter((item, index, list) => list.indexOf(item) === index);
    }

    function rememberVoiceRecognitionTexts(values) {
        const fresh = uniqueVoiceTexts(values);
        const now = Date.now();
        if (fresh[0]) voiceRecognitionBuffer.push({ text: fresh[0], time: now });
        voiceRecognitionBuffer = voiceRecognitionBuffer.filter(item => now - item.time <= VOICE_BUFFER_WINDOW_MS);
        const buffered = voiceRecognitionBuffer.map(item => item.text).filter(Boolean);
        const joined = cleanNodeText(buffered.join(' '));
        return uniqueVoiceTexts([joined].concat(buffered.slice(-4).reverse(), fresh));
    }

    function voiceDisplayText(values) {
        const text = cleanNodeText(Array.isArray(values) ? values[0] : values);
        return text.length > 34 ? `${text.slice(0, 34)}...` : text;
    }

    function voiceSearchableTextForNode(node) {
        if (!node) return '';
        const clone = node.cloneNode(true);
        clone.querySelectorAll('.rubric').forEach(rubric => {
            const inlineBodyRubric = rubric.tagName === 'SPAN' && !!rubric.closest('.pair-line');
            if (!inlineBodyRubric) rubric.remove();
        });
        return cleanNodeText(clone.textContent || '');
    }

    function voiceCandidateNodes() {
        return Array.from(document.querySelectorAll('#missal-root .pair-line, #missal-root .pair-block, #missal-root .pc-line-row:not(.pc-header-row)'))
            .filter(node => voiceSearchableTextForNode(node));
    }

    function voiceCandidateIndexForElement(nodes, element) {
        if (!element) return -1;
        return nodes.findIndex(node => node === element || node.contains(element) || element.contains(node));
    }

    function voiceTargetForNode(node) {
        return node && (node.closest('.pair-block') || node.closest('.pc-line-row') || node);
    }

    function restoreVoiceHighlightAfterRender() {
        if (!state.aiVoiceOn || !voiceLastMatchedSignature) return false;
        const target = voiceCandidateNodes()
            .map(voiceTargetForNode)
            .filter((node, index, list) => node && list.indexOf(node) === index)
            .find(node => normalizeVoiceSearchText(voiceSearchableTextForNode(node)) === voiceLastMatchedSignature);
        if (!target) return false;
        document.querySelectorAll('.voice-highlight-active').forEach(node => node.classList.remove('voice-highlight-active'));
        target.classList.add('voice-highlight-active');
        voiceLastMatchedElement = target;
        return true;
    }

    function voiceScoreForNeedles(haystack, needles, index, currentIndex) {
        let score = 0;
        if (currentIndex >= 0 && index < currentIndex && (needles[0] || '').length <= 8) return 0;
        if (haystack.includes(needles[0])) {
            score += (needles[0].length >= 4 ? 10000 : 160) + needles[0].length;
        }
        const wordHits = needles.slice(1).filter(needle => haystack.includes(needle));
        if (wordHits.length) score += wordHits.reduce((total, needle) => total + needle.length * 12, 0) + wordHits.length * 35;
        if (!score) return 0;
        if (currentIndex >= 0) {
            const distance = index - currentIndex;
            if (distance >= -2 && distance <= 28) score += Math.max(0, 420 - Math.abs(distance) * 12);
            else if (distance < -6) score -= 620;
            else if (distance > 60) score -= 240;
        }
        return score;
    }

    function clearVoiceHighlight(options = {}) {
        document.querySelectorAll('.voice-highlight-active').forEach(node => node.classList.remove('voice-highlight-active'));
        clearVoiceListeningAnchor();
        if (options.resetAnchor) {
            voiceLastMatchedElement = null;
            voiceLastMatchedSignature = '';
        }
        if (voiceHighlightTimer) clearTimeout(voiceHighlightTimer);
        voiceHighlightTimer = null;
    }

    function highlightSpokenText(spokenTexts) {
        const spokenList = uniqueVoiceTexts(Array.isArray(spokenTexts) ? spokenTexts : [spokenTexts]);
        const needleSets = spokenList
            .map(text => ({ text, needles: voiceSearchNeedles(text) }))
            .filter(item => item.needles.length);
        if (!needleSets.length) return { found: false, text: '' };
        clearVoiceHighlight();
        const candidates = voiceCandidateNodes();
        const currentIndex = voiceCandidateIndexForElement(candidates, voiceLastMatchedElement);
        let bestMatch = null;
        candidates.forEach((node, index) => {
            const haystack = normalizeVoiceSearchText(voiceSearchableTextForNode(node));
            if (!haystack) return;
            const scored = needleSets
                .map(item => ({ text: item.text, score: voiceScoreForNeedles(haystack, item.needles, index, currentIndex) }))
                .sort((a, b) => b.score - a.score)[0];
            const score = scored ? scored.score : 0;
            if (score > 0 && (!bestMatch || score > bestMatch.score || (score === bestMatch.score && index < bestMatch.index))) {
                bestMatch = { node, score, index, text: scored.text };
            }
        });
        const matched = bestMatch && bestMatch.node;
        if (!matched) return { found: false, text: spokenList[0] || '' };
        const target = voiceTargetForNode(matched);
        target.classList.add('voice-highlight-active');
        voiceLastMatchedElement = target;
        voiceLastMatchedSignature = normalizeVoiceSearchText(voiceSearchableTextForNode(target));
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        voiceHighlightTimer = setTimeout(() => target.classList.remove('voice-highlight-active'), 6500);
        return { found: true, text: bestMatch.text || spokenList[0] || '' };
    }

    function handleSpeechRecognitionText(texts, isFinal = false) {
        const spokenTexts = rememberVoiceRecognitionTexts(Array.isArray(texts) ? texts : [texts]);
        if (!spokenTexts.length) return;
        const match = highlightSpokenText(spokenTexts);
        const preview = voiceDisplayText(match && match.text ? match.text : spokenTexts);
        if (!match.found) markVoiceListeningAnchor();
        if (match.found) {
            setVoiceStatus(voiceText('found', preview), true);
        } else if (isFinal) {
            setVoiceStatus(voiceText('searching', preview), true);
        } else {
            setVoiceStatus(voiceText('listening'), true);
        }
    }

    function startBrowserVoiceRecognition() {
        const Recognition = browserSpeechRecognitionConstructor();
        if (!Recognition) {
            state.aiVoiceOn = false;
            setVoiceStatus(voiceText('unsupported'), false, { error: true, autoHideMs: 9000 });
            syncVoiceControls(voiceText('unsupported'));
            return;
        }
        stopVoiceRecognitionInternal({ keepEnabled: true, statusText: voiceText('preparing') });
        state.aiVoiceOn = true;
        voicePaused = false;
        voiceManualStop = false;
        voiceFatalError = false;
        const recognition = new Recognition();
        voiceRecognition = recognition;
        recognition.lang = speechRecognitionLangForState();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.maxAlternatives = VOICE_MAX_ALTERNATIVES;
        recognition.onstart = () => {
            isRecordingVoice = true;
            voicePaused = false;
            setVoiceStatus(voiceText('listening'), true);
        };
        recognition.onresult = event => {
            const texts = [];
            let hasFinal = false;
            for (let i = event.resultIndex; i < event.results.length; i += 1) {
                const result = event.results[i];
                if (!result) continue;
                hasFinal = hasFinal || !!result.isFinal;
                for (let j = 0; j < Math.min(result.length || 0, VOICE_MAX_ALTERNATIVES); j += 1) {
                    if (result[j] && result[j].transcript) texts.push(result[j].transcript);
                }
            }
            handleSpeechRecognitionText(texts, hasFinal);
        };
        recognition.onerror = event => {
            const code = event && event.error ? event.error : 'unknown';
            console.warn('Browser speech recognition error', code, event);
            if (code === 'no-speech') {
                setVoiceStatus(voiceText('noSpeech'), true);
                return;
            }
            voiceFatalError = ['not-allowed', 'service-not-allowed', 'audio-capture'].includes(code);
            const message = voiceFatalError
                ? voiceText('permission')
                : voiceText('error');
            setVoiceStatus(message, false, { error: true, autoHideMs: 9000 });
            if (voiceFatalError) state.aiVoiceOn = false;
        };
        recognition.onend = () => {
            isRecordingVoice = false;
            syncVoiceControls(state.aiVoiceOn ? (voicePaused ? voiceText('paused') : voiceText('preparing')) : voiceText('off'));
            if (state.aiVoiceOn && !voicePaused && !voiceManualStop && !voiceFatalError) {
                voiceRestartTimer = setTimeout(() => startBrowserVoiceRecognition(), 350);
            } else if (!state.aiVoiceOn) {
                clearVoiceListeningAnchor();
            }
        };
        try {
            recognition.start();
        } catch (error) {
            console.error('Browser speech recognition start failed', error);
            voiceFatalError = true;
            state.aiVoiceOn = false;
            isRecordingVoice = false;
            setVoiceStatus(voiceText('startFailed'), false, { error: true, autoHideMs: 9000 });
            syncVoiceControls(voiceText('error'));
        }
    }

    window.toggleVoiceRecognition = async function() {
        if (state.aiVoiceOn || isRecordingVoice || voiceRecognition) {
            stopVoiceRecognitionInternal({ statusText: voiceText('off'), hideBar: true });
            return;
        }
        state.aiVoiceOn = true;
        voicePaused = false;
        setVoiceStatus(voiceText('preparing'), false);
        startBrowserVoiceRecognition();
    };

    window.pauseVoiceRecognitionFromBar = function() {
        if (!state.aiVoiceOn) return;
        voicePaused = true;
        stopVoiceRecognitionInternal({ keepEnabled: true, statusText: voiceText('pausedShort') });
        setVoiceStatus(voiceText('paused'), false, { paused: true, settingsText: voiceText('pausedShort') });
    };

    window.resumeVoiceRecognitionFromBar = function() {
        if (!state.aiVoiceOn) state.aiVoiceOn = true;
        voicePaused = false;
        setVoiceStatus(voiceText('preparing'), false);
        startBrowserVoiceRecognition();
    };

    window.stopVoiceRecognitionFromBar = window.pauseVoiceRecognitionFromBar;

    window.simAITrans = async function(btn, srcText, predefinedAiText, targetLangCode, recordKey) {
        const key = recordKey || aiTranslationKey(srcText, targetLangCode);
        const existing = aiTranslationRecords.get(key);
        if (existing && existing.status === 'pending') return;
        const originalLabel = btn.innerHTML;
        btn.innerHTML = '번역중...';
        btn.disabled = true;
        aiTranslationRecords.set(key, { status: 'pending' });
        try {
            const resultText = await translateWithGemini(srcText, targetLangCode);
            aiTranslationRecords.set(key, { status: 'done', text: resultText });
            applyAITranslationResultToButton(btn, resultText);
            render();
        } catch (error) {
            console.warn('AI translation failed', error);
            const fallback = enforceCatholicTranslationTerminology(cleanNodeText(predefinedAiText), targetLangCode);
            if (fallback) {
                aiTranslationRecords.set(key, { status: 'done', text: fallback });
                applyAITranslationResultToButton(btn, fallback);
                render();
                return;
            }
            aiTranslationRecords.set(key, {
                status: 'error',
                message: error && error.message ? error.message : 'AI 번역 실패'
            });
            btn.innerHTML = originalLabel;
            btn.disabled = false;
            btn.title = aiTranslationRecords.get(key).message;
            render();
        }
    };

    window.optChange = (id, val) => {
        const baseId = getBaseId(id);
        state.options[baseId] = val;
        if (baseId === 'eucharist_song') state.autoEucharistSongKey = '';
        if (baseId === 'dismissal') state.autoDismissalOptionKey = '';
        if (baseId === 'creed') state.autoCreedOptionKey = '';
        render();
    };

    function ensureDefaultCreedForLocation(locationLang) {
        const normalizedLocation = normalizeSelectableLang(locationLang || 'KR', 'KR');
        if (state.autoCreedLocation === normalizedLocation) return;
        const defaultOption = normalizedLocation === 'VN' ? 'B' : 'A';
        state.options.creed = defaultOption;
        state.autoCreedOptionKey = defaultOption;
        state.autoCreedLocation = normalizedLocation;
    }

    function escapeInlineArg(value) {
        return escapeAttr(JSON.stringify(String(value || '').replace(/\r?\n/g, ' ')));
    }

    function makeAIButton(srcText, predefinedAiText, targetLang) {
        const key = aiTranslationKey(srcText, targetLang);
        const record = aiTranslationRecords.get(key);
        if (record && record.status === 'done') return `<span class="ai-badge">AI</span>${aiTranslatedHtml(record.text)}`;
        if (record && record.status === 'pending') return '<button class="btn-ai-trans" disabled>번역중...</button>';
        const title = record && record.status === 'error' ? ` title="${escapeAttr(record.message || 'AI 번역 실패')}"` : '';
        return `<button class="btn-ai-trans"${title} onclick="simAITrans(this, ${escapeInlineArg(srcText)}, ${escapeInlineArg(predefinedAiText)}, ${escapeInlineArg(targetLang)}, ${escapeInlineArg(key)})">🤖 AI 번역</button>`;
    }

    function combinedLineText(line) {
        return ['kr', 'vn', 'en', 'jp', 'la']
            .flatMap(lower => [line && line[`sp_${lower}`], line && line[`text_${lower}`]])
            .filter(Boolean)
            .map(cleanNodeText)
            .join(' ');
    }

    const aiFallbackPartIds = new Set(['entrance', 'collect', 'reading1', 'psalm', 'reading2', 'gospel_accl', 'gospel', 'prayer_offerings', 'communion', 'prayer_after', 'dismissal']);

    function allowsAIFallback(baseId) {
        return aiFallbackPartIds.has(baseId);
    }

    function isEucharistPrefaceLine(line, baseId) {
        return baseId === 'eucharist' && line && line.__eucharistSection === 'preface';
    }

    function shouldSuppressAIFallbackLine(line, baseId) {
        if (!allowsAIFallback(baseId) && !isEucharistPrefaceLine(line, baseId)) return true;
        if (baseId !== 'gloria') return false;
        const text = combinedLineText(line);
        return /Lạy Chúa là Thiên Chúa,\s*là Vua trên trời,\s*là Chúa Cha toàn năng\.?/i.test(text)
            || /하느님의\s*어린양/.test(text);
    }

    function displayLanguageWasCleared(line, lower) {
        return !!(line && lower && line.__clearedDisplayLanguages && line.__clearedDisplayLanguages[lower]);
    }

    function sourceChoiceLanguageIsEmpty(line, lower) {
        if (!line || !line.__sourceChoiceOriginal || !lower) return false;
        const content = [
            line[`sp_${lower}`],
            line[`text_${lower}`],
            line[`rubric_${lower}`]
        ].filter(Boolean).join(' ');
        return !cleanNodeText(content);
    }

    function shouldSuppressAIFallbackForLine(line, baseId, lower) {
        if (shouldSuppressAIFallbackLine(line, baseId)) return true;
        if (strictPrayerKeys.has(baseId)
            && (lineHasAnyRole(line, 'conclusion') || isPrayerConclusionText(combinedLineText(line)))) return true;
        // Korean and English daily-Mass columns must contain authorized source
        // text only. The Korea-only Lenten acclamation remains the explicit
        // exception requested for on-demand AI translation.
        if (['kr', 'en'].includes(lower) && baseId !== 'gospel_accl') return true;
        // Source-choice variants deliberately leave a language empty when no
        // authorized text exists. Do not present AI output as source text.
        return displayLanguageWasCleared(line, lower)
            || sourceChoiceLanguageIsEmpty(line, lower);
    }

    function hasAnyLineContent(line) {
        return ['kr', 'vn', 'en', 'jp', 'la'].some(lower => cleanNodeText([
            line && line[`sp_${lower}`],
            line && line[`text_${lower}`],
            line && line[`rubric_${lower}`]
        ].filter(Boolean).join(' ')));
    }

    function shouldRenderBlankParagraph(line, langKey, baseId) {
        if (allowsAIFallback(baseId)) return false;
        const hasRubric = ['kr', 'vn', 'en', 'jp', 'la'].some(lower => cleanNodeText(line && line[`rubric_${lower}`]));
        if (hasRubric) return false;
        const speaker = cleanNodeText(line && line[`sp_${langKey}`]);
        const text = cleanNodeText(line && line[`text_${langKey}`]);
        return !speaker && !text && hasAnyLineContent(line);
    }

    function isAIButton(html) {
        return String(html || '').includes('btn-ai-trans');
    }

    function isLiturgicalPlaceholderText(value) {
        const normalized = cleanNodeText(value)
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[ĐÐ]/g, 'D')
            .replace(/[đð]/g, 'd')
            .replace(/[(){}\[\]<>…._"“”'`]+/g, ' ')
            .replace(/\s+/g, ' ')
            .trim()
            .toLowerCase();
        if (!normalized) return false;
        return /^(ca nhap le hom nay|ca hiep le hom nay|bai doc(?:\s+[ivx]+|\s+\d+)? hom nay|tin mung hom nay|dap ca hom nay|tung ho tin mung hom nay|loi nguyen .+ hom nay|tom tat sach|ket thuc cau nguyen)$/i.test(normalized);
    }

    function fallbackSourceTextForLine(line, targetLower, baseId) {
        if (!allowsAIFallback(baseId) && !isEucharistPrefaceLine(line, baseId)) return '';
        const active = currentLeftRightLowerKeys();
        const preferred = [active.left, active.right, 'kr', 'vn', 'en', 'la', 'jp']
            .filter((lower, index, array) => lower && lower !== targetLower && array.indexOf(lower) === index);
        for (const lower of preferred) {
            const text = line && line[`text_${lower}`];
            if (cleanNodeText(text) && !isAIButton(text) && !isLiturgicalPlaceholderText(text)) return text;
        }
        return '';
    }

    function replacePopePlaceholder(html, langKey) {
        const popeName = (state.popeNames && state.popeNames[langKey]) || (state.popeNames && state.popeNames.en) || 'Leo';
        const popeNameHtml = `<span class="muted-name-placeholder">${escapeHtml(popeName)}</span>`;
        const popePattern = '(?:교황명|Pope name|Pope N\\.?|Tên Đức Giáo Hoàng|Tên Giáo Hoàng|Tên GH\\.?|Ten GH\\.?|T.n GH\\.?|tên Đức Giáo Hoàng|tên Giáo Hoàng|tên GH\\.?|ten GH\\.?|t.n GH\\.?|教皇名|Nomen Papae)';
        return String(html || '')
            .replace(new RegExp(`(?:\\(${popePattern}\\)|\\[${popePattern}\\])`, 'giu'), popeNameHtml)
            .replace(/(교황\s*)(?:\[[^\]]*\]|\([^)]*\)|\?{1,4})(\s*와(?:\(과\))?)/gu, `$1${popeNameHtml}$2`);
    }

    function localizedBishopName(person, langKey) {
        if (!person) return '';
        return cleanNodeText(person[langKey] || person.en || person.kr || person.vn || person.la || person.jp);
    }

    function koreanNameParticle(name) {
        const compact = cleanNodeText(name).replace(/\s+/g, '');
        const last = compact.charCodeAt(compact.length - 1);
        return last >= 0xAC00 && last <= 0xD7A3 && (last - 0xAC00) % 28 !== 0 ? '과' : '와';
    }

    function koreanBishopSequence(context = state.bishopContext, options = {}) {
        if (!context || !context.ordinary) return '';
        const html = !!options.html;
        const includeAuxiliaries = options.includeAuxiliaries !== false;
        const renderName = person => {
            const name = localizedBishopName(person, 'kr');
            return html ? `<span class="muted-name-placeholder">${escapeHtml(name)}</span>` : name;
        };
        const ordinaryName = localizedBishopName(context.ordinary, 'kr');
        const ordinary = `${renderName(context.ordinary)}${koreanNameParticle(ordinaryName)}`;
        const auxiliaries = includeAuxiliaries && Array.isArray(context.auxiliaries) ? context.auxiliaries : [];
        if (!auxiliaries.length) return ordinary;
        if (context.collaboratorSummary) return `${ordinary}, 협력주교들과`;
        return [ordinary].concat(auxiliaries.map(person => {
            const name = localizedBishopName(person, 'kr');
            return `${renderName(person)}${koreanNameParticle(name)}`;
        })).join(', ');
    }

    function joinLocalizedBishopNames(people, langKey, options = {}) {
        const html = !!options.html;
        const names = (Array.isArray(people) ? people : [])
            .map(person => {
                const name = localizedBishopName(person, langKey);
                if (!name) return '';
                return html ? `<span class="muted-name-placeholder">${escapeHtml(name)}</span>` : name;
            })
            .filter(Boolean);
        if (names.length < 2) return names[0] || '';
        if (langKey === 'jp') return names.join('、');
        const conjunction = langKey === 'vn' ? ' và ' : langKey === 'la' ? ' et ' : langKey === 'en' ? ' and ' : ', ';
        if (names.length === 2) return `${names[0]}${conjunction}${names[1]}`;
        const last = names.pop();
        const separator = langKey === 'en' ? ', and ' : conjunction;
        return `${names.join(', ')}${separator}${last}`;
    }

    function localizedBishopSequence(context, langKey, options = {}) {
        if (!context || !context.ordinary) return '';
        if (langKey === 'kr') return koreanBishopSequence(context, options);
        const html = !!options.html;
        const ordinary = joinLocalizedBishopNames([context.ordinary], langKey, { html });
        const auxiliaries = Array.isArray(context.auxiliaries) ? context.auxiliaries : [];
        if (!ordinary || !auxiliaries.length) return ordinary;
        const auxiliaryNames = joinLocalizedBishopNames(auxiliaries, langKey, { html });
        if (langKey === 'vn') {
            const title = context.collaboratorSummary
                ? 'các Đức Giám Mục phụ tá'
                : auxiliaries.length === 1 ? 'Đức Giám Mục phụ tá' : 'các Đức Giám Mục phụ tá';
            return context.collaboratorSummary ? `${ordinary} và ${title}` : `${ordinary} và ${title} ${auxiliaryNames}`;
        }
        if (langKey === 'jp') {
            return context.collaboratorSummary ? `${ordinary}、補佐司教団` : `${ordinary}、補佐司教${auxiliaryNames}`;
        }
        if (langKey === 'la') {
            if (context.collaboratorSummary) return `${ordinary} eiusque Episcopis auxiliaribus`;
            const title = auxiliaries.length === 1 ? 'eiusque Episcopo auxiliari' : 'eiusque Episcopis auxiliaribus';
            return `${ordinary} ${title} ${auxiliaryNames}`;
        }
        return joinLocalizedBishopNames([context.ordinary].concat(auxiliaries), langKey, { html });
    }

    function replaceBishopPlaceholder(html, langKey) {
        const context = state.bishopContext;
        if (!context || !context.ordinary) return String(html || '');
        const ordinaryName = localizedBishopName(context.ordinary, langKey);
        if (!ordinaryName) return String(html || '');
        const ordinaryHtml = `<span class="muted-name-placeholder">${escapeHtml(ordinaryName)}</span>`;
        let output = String(html || '');
        if (langKey === 'kr') {
            output = output.replace(/\s*\\?\(\s*(?:협력\s*주교들과?|보좌\s*주교들과?)[^)]*\\?\)/gu, '');
            const koreanPlaceholder = '(?:\\[(?:주교명|세례명)\\]|\\((?:주교명|세례명)\\)|아무|\\?{1,4})';
            output = output.replace(
                new RegExp(`(저희\\s*주교\\s*)${koreanPlaceholder}\\s*(?:와(?:\\(과\\))?|과(?:\\(와\\))?)?`, 'gu'),
                (match, prefix, offset, source) => {
                    const remaining = source.slice(offset + match.length);
                    const includeAuxiliaries = !/^\s*,?\s*세계의\s*모든\s*주교/u.test(remaining);
                    return `${prefix}${koreanBishopSequence(context, { html: true, includeAuxiliaries })}`;
                }
            );
            return output.replace(/(?:\[주교명\]|\(주교명\))/gu, ordinaryHtml);
        }
        const bishopPattern = '(?:bishop name|bishop n\\.?|tên giám mục|tên GM\\.?|ten GM\\.?|t.n GM\\.?|司教名|nomen episcopi|episcopus n\\.?)';
        const bishopPlaceholder = new RegExp(`(?:\\(${bishopPattern}\\)|\\[${bishopPattern}\\])`, 'giu');
        if (langKey === 'en') {
            const auxiliaries = Array.isArray(context.auxiliaries) ? context.auxiliaries : [];
            const auxiliaryNames = joinLocalizedBishopNames(auxiliaries, 'en', { html: true });
            output = output.replace(bishopPlaceholder, ordinaryHtml);
            output = output.replace(/,\s*\\?\(\s*and\s+Auxiliary\s+Bishops?\s*,?\s*\\?\)/giu, () => {
                if (!auxiliaries.length) return ',';
                if (context.collaboratorSummary) return ', and the Auxiliary Bishops,';
                return `, and ${auxiliaryNames}, Auxiliary Bishop${auxiliaries.length === 1 ? '' : 's'},`;
            });
            return output;
        }
        const sequenceHtml = localizedBishopSequence(context, langKey, { html: true }) || ordinaryHtml;
        output = output.replace(bishopPlaceholder, sequenceHtml);
        if (langKey === 'vn' && Array.isArray(context.auxiliaries) && context.auxiliaries.length) {
            output = output.replace(/\s*,?\s*\\?\(\s*hay\s+Giám\s+Mục\s+khác\s*\\?\)/giu, '');
        }
        if (langKey === 'vn') output = output.replace(/(Đức\s+Giám\s+Mục\s+)T…/giu, `$1${ordinaryHtml}`);
        if (langKey === 'jp') output = output.replace(/(司教\s*)○{2,}/gu, `$1${ordinaryHtml}`);
        return output;
    }

    function markMutedNamePlaceholders(html) {
        const mutedNamePattern = '(?:주교명|세례명|bishop name|bishop n\\.?|baptismal name|Christian name|person name|the other person name|person n\\.?|the other person n\\.?|tên giám mục|tên GM\\.?|ten GM\\.?|t.n GM\\.?|tên thánh|tên rửa tội|司教名|洗礼名|nomen episcopi|nomen baptismale)';
        return String(html || '')
            .replace(
                new RegExp(`(?:\\(${mutedNamePattern}\\)|\\[${mutedNamePattern}\\])`, 'giu'),
                match => `<span class="muted-name-placeholder">${match}</span>`
            )
            .replace(/(주교\s*)(\[[^\]]{1,24}\]|\([^)]{1,24}\)|\?{1,4})(\s*와(?:\(과\))?)/gu, `$1<span class="muted-name-placeholder">$2</span>$3`)
            .replace(/(종\s*)(\[[^\]]{1,24}\]|\([^)]{1,24}\)|\?{1,4})(\s*을(?:\(를\))?)/gu, `$1<span class="muted-name-placeholder">$2</span>$3`);
    }

    function formatDynamicLineText(html, langKey) {
        if (!html || isAIButton(html)) return html || '';
        return markMutedNamePlaceholders(replaceBishopPlaceholder(replacePopePlaceholder(html, langKey), langKey));
    }

    function shouldSuppressSpeaker(baseId) {
        return ['entrance', 'communion', 'announcement', 'final_song'].includes(baseId);
    }

    function roleClassForLine(line, lower) {
        const role = line && line[`role_${lower}`];
        if (role === 'summary') return 'summary';
        if (role === 'conclusion') return 'conclusion';
        return '';
    }

    function speakerHTML(sp, langKey, skipSpeaker) {
        if (skipSpeaker) return '';
        const text = sp || '&nbsp;';
        const placeholder = sp ? '' : ' speaker-placeholder';
        const hidden = sp ? '' : ' aria-hidden="true"';
        return `<div class="speaker speaker-${langKey}${placeholder}"${hidden}>${text}</div>`;
    }

    function hyphenateLongWords(html) {
        if (!html || isAIButton(html)) return html || '';
        return String(html).split(/(<[^>]+>)/g).map(part => {
            if (part.startsWith('<')) return part;
            return part.replace(/[A-Za-zÀ-ÖØ-öø-ÿĀ-žĐđ]{18,}/g, word => word.replace(/(.{10})(?=.)/g, '$1&shy;'));
        }).join('');
    }

    function linePairHTML(sp, txt, langKey, extraClass = '', forceNoSpeaker = false, forceBlank = false) {
        const aiLine = isAIButton(txt);
        const blankLine = forceBlank && !txt && !sp;
        if (!txt && !sp && !blankLine) return '';
        const displayText = blankLine ? '&nbsp;' : hyphenateLongWords(formatDynamicLineText(txt, langKey));
        const className = `pair-line line-${langKey}${extraClass ? ` ${extraClass}` : ''}${aiLine ? ' ai-pending' : ''}${blankLine ? ' blank-line' : ''}`;
        return `<div class="${className}">${speakerHTML(sp, langKey, aiLine || forceNoSpeaker)}<div class="text-content">${displayText || ''}</div></div>`;
    }

    function dottedDividerHTML(extraClass = '') {
        return `<div class="dotted-divider${extraClass ? ` ${extraClass}` : ''}"></div>`;
    }

    function appendDottedDividerRow(partContainer, isStacked) {
        if (isStacked) {
            const block = document.createElement('div');
            block.className = 'pair-block divider-block';
            block.innerHTML = `${dottedDividerHTML()}${dottedDividerHTML('translation')}`;
            partContainer.appendChild(block);
            return;
        }
        const lineRow = document.createElement('div');
        lineRow.className = 'pc-line-row pc-divider-row';
        const lCol = document.createElement('div');
        lCol.className = 'pc-col';
        lCol.innerHTML = dottedDividerHTML();
        const rCol = document.createElement('div');
        rCol.className = 'pc-col pc-col-sub';
        rCol.innerHTML = dottedDividerHTML();
        lineRow.appendChild(lCol);
        lineRow.appendChild(rCol);
        partContainer.appendChild(lineRow);
    }

    function getEucharistSongMap(item) {
        return item && item.songs && typeof item.songs === 'object' && !Array.isArray(item.songs) ? item.songs : {};
    }

    function getEucharistSongLinesFromEntry(entry) {
        if (entry && Array.isArray(entry.content)) return entry.content;
        return [];
    }

    function markEucharistLines(lines, section) {
        return (Array.isArray(lines) ? lines : []).map(line => {
            if (!line || typeof line !== 'object') return line;
            return Object.assign({}, line, { __eucharistSection: section });
        });
    }

    function eucharistInlineOptionContext(context = {}) {
        const leftKey = context.leftKey || normalizeSelectableLang(state.currentLoc || 'KR', 'KR').toLowerCase();
        const rightKey = context.rightKey || normalizeSelectableLang(state.targetLang || DEFAULT_TARGET_LANG, DEFAULT_TARGET_LANG).toLowerCase();
        return {
            isStacked: !!context.isStacked,
            activeKeys: [leftKey, rightKey].filter((lower, index, array) => lower && array.indexOf(lower) === index)
        };
    }

    function eucharistInlineLanguageName(lower, langCode) {
        const names = {
            kr: { kr: '한국어', vn: 'tiếng Hàn', en: 'Korean', jp: '韓国語', la: 'Coreana' },
            vn: { kr: '베트남어', vn: 'tiếng Việt', en: 'Vietnamese', jp: 'ベトナム語', la: 'Vietnamica' },
            en: { kr: '영어', vn: 'tiếng Anh', en: 'English', jp: '英語', la: 'Anglica' },
            jp: { kr: '일본어', vn: 'tiếng Nhật', en: 'Japanese', jp: '日本語', la: 'Iaponica' },
            la: { kr: '라틴어', vn: 'tiếng Latinh', en: 'Latin', jp: 'ラテン語', la: 'Latina' }
        };
        const lowerLang = String(langCode || 'KR').toLowerCase();
        return (names[lower] && (names[lower][lowerLang] || names[lower].en)) || lower;
    }

    function eucharistInlineSplitLabel(baseLabel, sourceLower) {
        const sourceNames = {
            kr: '한국어 원문',
            vn: 'Nguyên bản tiếng Việt',
            en: 'English source',
            jp: '日本語原文',
            la: 'Textus Latinus'
        };
        return {
            kr: `${baseLabel.kr || '죽은 이를 위한 미사'} - ${eucharistInlineLanguageName(sourceLower, 'KR')} 원문`,
            vn: `${baseLabel.vn || 'Thánh lễ cầu cho người qua đời'} - ${eucharistInlineLanguageName(sourceLower, 'VN')}`,
            en: `${baseLabel.en || 'Mass for the Dead'} - ${eucharistInlineLanguageName(sourceLower, 'EN')} source`,
            jp: `${baseLabel.jp || '死者のためのミサ'} - ${eucharistInlineLanguageName(sourceLower, 'JP')}原文`,
            la: `${baseLabel.la || 'Missa pro defunctis'} - ${sourceNames[sourceLower] || sourceLower}`
        };
    }

    function cloneEucharistInlineLinesForLanguage(lines, sourceLower) {
        return cloneMassLines(lines || []).map(line => {
            if (!line || typeof line !== 'object') return line;
            return ['kr', 'vn', 'en', 'jp', 'la']
                .filter(lower => lower !== sourceLower)
                .reduce((copy, lower) => clearDisplayLanguageFromLine(copy, lower), line);
        });
    }

    function eucharistInlineDisplayOptions(block, context = {}) {
        const baseOptions = block && block.options && typeof block.options === 'object' ? block.options : {};
        const displayContext = eucharistInlineOptionContext(context);
        if (displayContext.isStacked) return baseOptions;
        const options = {};
        Object.keys(baseOptions).forEach(optionKey => {
            const option = baseOptions[optionKey] || {};
            if (!option.splitByLanguage) {
                options[optionKey] = option;
                return;
            }
            const keys = displayContext.activeKeys.length ? displayContext.activeKeys : ['kr', 'vn'];
            keys.forEach(sourceLower => {
                const splitKey = `${optionKey}_${sourceLower}`;
                options[splitKey] = Object.assign({}, option, {
                    label: eucharistInlineSplitLabel(option.label || {}, sourceLower),
                    lines: cloneEucharistInlineLinesForLanguage(option.lines || [], sourceLower),
                    sourceOptionKey: optionKey,
                    sourceLanguage: sourceLower
                });
            });
        });
        return options;
    }

    function activeEucharistInlineOptionKey(block, context = {}) {
        const options = eucharistInlineDisplayOptions(block, context);
        const baseOptions = block && block.options && typeof block.options === 'object' ? block.options : {};
        const displayContext = eucharistInlineOptionContext(context);
        const keys = Object.keys(options);
        if (!keys.length) return '';
        let key = state.options[block.optionKey] || block.defaultOption || keys[0];
        const baseKey = String(key || '').replace(/_([a-z]{2})$/, '');
        if (!options[key] && displayContext.isStacked && baseOptions[baseKey]) key = baseKey;
        if (!options[key] && !displayContext.isStacked && baseOptions[baseKey] && baseOptions[baseKey].splitByLanguage) {
            const sourceLower = displayContext.activeKeys.find(lower => options[`${baseKey}_${lower}`]);
            if (sourceLower) key = `${baseKey}_${sourceLower}`;
        }
        if (!options[key]) key = block.defaultOption && options[block.defaultOption] ? block.defaultOption : keys[0];
        state.options[block.optionKey] = key;
        return key;
    }

    function expandEucharistInlineOptions(lines, context = {}) {
        const output = [];
        (Array.isArray(lines) ? lines : []).forEach(line => {
            if (line && line.type === 'optionBlock') {
                const key = activeEucharistInlineOptionKey(line, context);
                const options = eucharistInlineDisplayOptions(line, context);
                const option = key && options ? options[key] : null;
                output.push({ type: 'inlineOptionControl', optionKey: line.optionKey, optionBlock: line });
                output.push(...(option && Array.isArray(option.lines) ? option.lines : []));
                return;
            }
            output.push(line);
        });
        return output;
    }

    function getEucharistInlineOptionLabel(block, optionKey, langCode, context = {}) {
        const options = eucharistInlineDisplayOptions(block, context);
        const option = options ? options[optionKey] : null;
        const label = option && option.label;
        return getLocalizedObjectValue(label, langCode) || optionKey;
    }

    function genEucharistInlineOptionControl(line, langCode, context = {}) {
        const block = line && line.optionBlock && line.optionBlock.options ? line.optionBlock : null;
        const options = eucharistInlineDisplayOptions(block, context);
        const keys = options ? Object.keys(options) : [];
        if (!block || !keys.length || !block.optionKey) return '';
        const selectedKey = activeEucharistInlineOptionKey(block, context);
        const blockLabel = getLocalizedObjectValue(block.label, langCode) || 'Eucharistic Prayer III intercession';
        let html = `<div class="inline-option-control-row"><select class="select-inline" aria-label="${escapeAttr(blockLabel)}" onchange="optChange('${escapeAttr(block.optionKey)}', this.value)">`;
        keys.forEach(optionKey => {
            const selected = selectedKey === optionKey ? 'selected' : '';
            html += `<option value="${escapeAttr(optionKey)}" ${selected}>${escapeHtml(getEucharistInlineOptionLabel(block, optionKey, langCode, context))}</option>`;
        });
        html += '</select></div>';
        return html;
    }

    function getEucharistSongKeys(item) {
        const songs = getEucharistSongMap(item);
        const keys = Object.keys(songs);
        const familyFirstIndex = new Map();
        const rows = keys.map((key, index) => {
            const matched = String(key).match(/^(.*)_([1-9]\d*)$/);
            const family = matched ? matched[1] : key;
            const variation = matched ? Number.parseInt(matched[2], 10) : Number.MAX_SAFE_INTEGER;
            if (!familyFirstIndex.has(family)) familyFirstIndex.set(family, index);
            return { key, index, family, variation };
        });
        return rows.sort((left, right) => {
            const familyOrder = familyFirstIndex.get(left.family) - familyFirstIndex.get(right.family);
            if (familyOrder) return familyOrder;
            if (left.family === right.family && left.variation !== right.variation) return left.variation - right.variation;
            return left.index - right.index;
        }).map(row => row.key);
    }

    function compactEucharistSongLabel(label) {
        const text = cleanNodeText(label || '');
        if (!text) return '';
        return text.replace(/\s*(?:[:：]\s+|[-–—]\s+|「).*$/u, '').trim() || text;
    }

    function setEucharistPrefaceSelectExpanded(select, expanded) {
        if (!select || !select.options) return;
        Array.from(select.options).forEach(option => {
            const fullLabel = option.dataset.fullLabel || option.textContent || '';
            const compactLabel = option.dataset.compactLabel || compactEucharistSongLabel(fullLabel);
            option.textContent = expanded || !option.selected ? fullLabel : compactLabel;
        });
    }

    function getLocalizedObjectValue(value, langCode) {
        if (!value || typeof value !== 'object') return value || '';
        const key = String(langCode || '').toLowerCase();
        return value[key] || value.en || value.kr || Object.values(value).find(Boolean) || '';
    }

    function massLineSearchText(line) {
        return ['kr', 'vn', 'en', 'jp', 'la']
            .map(lower => cleanNodeText(line && line[`text_${lower}`]))
            .filter(Boolean)
            .join(' | ');
    }

    function isSanctusHosannaLine(line) {
        const text = massLineSearchText(line);
        return /호산나|Hosanna|Hoan hô|Hosánna|ホザンナ/i.test(text);
    }

    function isMemorialAcclamationIntroLine(line) {
        const text = massLineSearchText(line);
        return /신앙의 신비|Mystery of faith|Mầu nhiệm đức tin|Mysterium fidei|信仰の神秘/i.test(text);
    }

    function dottedDividerLine(key) {
        return { isDivider: key || 'dotted' };
    }

    function pushDottedDividerLine(out, key) {
        if (!out.length || !out[out.length - 1] || !out[out.length - 1].isDivider) {
            out.push(dottedDividerLine(key));
        }
    }

    function addEucharisticDottedDividers(lines) {
        const out = [];
        let hosannaCount = 0;
        let insertedAfterSanctus = false;
        let insertedBeforeMystery = false;
        (Array.isArray(lines) ? lines : []).forEach(line => {
            if (!insertedBeforeMystery && isMemorialAcclamationIntroLine(line)) {
                pushDottedDividerLine(out, 'before-memorial-acclamation');
                insertedBeforeMystery = true;
            }
            out.push(line);
            if (isSanctusHosannaLine(line)) {
                hosannaCount += 1;
                if (!insertedAfterSanctus && hosannaCount >= 2) {
                    pushDottedDividerLine(out, 'after-sanctus');
                    insertedAfterSanctus = true;
                }
            }
        });
        return out;
    }

    const romanCanonSeasonalMarkers = [
        { key: 'ordinary', marker: '우리 주 천주 예수 그리스도의 어머니이시며' },
        { key: 'christmas', marker: '복되신 마리아께서 동정의 순결한 몸으로' },
        { key: 'epiphany', marker: '아버지의 영광을 영원히 함께 누리시는 외아들 그리스도께서' },
        { key: 'easter', marker: '우리 주 그리스도께서 육신으로 부활하신' },
        { key: 'ascension', marker: '저희의 연약한 육신을 취하신 성자 우리 주님께서' },
        { key: 'pentecost', marker: '성령께서 사도들에게 혀 모양의 불길로 나타나신' }
    ];

    function romanCanonLineText(line) {
        return cleanNodeText([line && line.text_kr, line && line.rubric_kr].filter(Boolean).join(' '));
    }

    function isChristmasOctaveDate(date) {
        const d = toDateOnly(date);
        const month = d.getMonth();
        const day = d.getDate();
        return (month === 11 && day >= 25) || (month === 0 && day === 1);
    }

    function romanCanonSeasonalKeyForDate(date) {
        const d = toDateOnly(date || getTargetDate());
        const lang = activePrefaceLanguage();
        const names = state.liturgyInfo && state.liturgyInfo.names ? state.liturgyInfo.names : {};
        const liturgyName = cleanNodeText(names[lang] || '');
        if (/성령 강림|Pentecost|Hiện Xuống|聖霊降臨|Pentecostes/i.test(liturgyName)) return 'pentecost';
        if (/승천|Ascension|Thăng Thiên|昇天|Ascensione/i.test(liturgyName)) return 'ascension';
        if (/주님 공현|Epiphany|Hiển Linh|公現|Epiphan/i.test(liturgyName)) return 'epiphany';
        if (/주님 성탄|Nativity of the Lord|Giáng Sinh|降誕|Nativit/i.test(liturgyName)) return 'christmas';
        const easter = computeEasterSunday(d.getFullYear());
        if (d >= addDays(easter, -1) && d <= addDays(easter, 7)) return 'easter';
        if (sameDay(d, addDays(easter, 42))) return 'ascension';
        if (sameDay(d, addDays(easter, 49))) return 'pentecost';
        if (sameDay(d, getEpiphanyObserved(d.getFullYear()))) return 'epiphany';
        if (isChristmasOctaveDate(d)) return 'christmas';
        return 'ordinary';
    }

    function romanCanonSeasonalBlockRanges(lines) {
        const ranges = romanCanonSeasonalMarkers.map(marker => {
            const start = lines.findIndex((line, index) => {
                const text = romanCanonLineText(line);
                const nextText = romanCanonLineText(lines[index + 1]);
                return text === '저희는 온 교회와 일치하여' && nextText.includes(marker.marker);
            });
            return Object.assign({}, marker, { start });
        });
        if (ranges.some(range => range.start < 0)) return [];
        ranges.sort((a, b) => a.start - b.start);
        const afterLast = lines.findIndex((line, index) =>
            index > ranges[ranges.length - 1].start &&
            romanCanonLineText(line).includes('주 하느님, 이 예물을 너그러이 받아들이고 강복하시어')
        );
        ranges.forEach((range, index) => {
            range.end = index + 1 < ranges.length
                ? ranges[index + 1].start
                : (afterLast > range.start ? afterLast : lines.length);
        });
        return ranges;
    }

    function filterRomanCanonSeasonalLines(lines, date) {
        if (!Array.isArray(lines) || !lines.length) return [];
        const ranges = romanCanonSeasonalBlockRanges(lines);
        if (!ranges.length) return lines;
        const key = romanCanonSeasonalKeyForDate(date);
        const selected = ranges.find(range => range.key === key) || ranges.find(range => range.key === 'ordinary');
        if (!selected) return lines;
        const seasonalStart = Math.min(...ranges.map(range => range.start));
        const seasonalEnd = Math.max(...ranges.map(range => range.end));
        return lines.filter((line, index) =>
            index < seasonalStart ||
            index >= seasonalEnd ||
            (index >= selected.start && index < selected.end)
        );
    }

    function defaultDismissalOptionKeyForLocation() {
        const loc = normalizeSelectableLang(state.currentLoc || 'KR', 'KR');
        const map = { KR: 'A', VN: 'C', JP: 'D', LA: 'D', EN: 'D', US: 'D' };
        return map[loc] || map[getLangFromLocation(loc)] || 'A';
    }

    function ensureDismissalDefaultOption(item, baseId) {
        if (baseId !== 'dismissal' || !item || !item.variants) return;
        const preferred = defaultDismissalOptionKeyForLocation();
        const fallback = item.variants[preferred] ? preferred : Object.keys(item.variants)[0];
        if (!fallback) return;
        const current = state.options.dismissal;
        if (!current || current === state.autoDismissalOptionKey || !item.variants[current]) {
            state.options.dismissal = fallback;
            state.autoDismissalOptionKey = fallback;
        }
    }

    function normalizePrefaceMatchText(value) {
        return cleanNodeText(value).toLowerCase().normalize('NFKC').replace(/[^\p{L}\p{N}]+/gu, '');
    }

    function getEucharistSongHintKey(item) {
        const songs = getEucharistSongMap(item);
        const directKey = state.liturgyInfo && state.liturgyInfo.prefaceKey;
        if (directKey && songs[directKey]) return directKey;
        let hint = state.liturgyInfo && state.liturgyInfo.prefaceHint;
        if (!hint) return '';
        if (hint.includes('또는')) {
            hint = hint.split('또는')[0].trim();
        }
        const rawHint = hint;
        hint = normalizePrefaceMatchText(rawHint);
        if (!hint) return '';
        const matchedTitleKey = getEucharistSongKeys(item).find(key => {
            const entry = songs[key];
            const titles = entry && entry.title && typeof entry.title === 'object' ? Object.values(entry.title) : [entry && entry.title];
            return [key, ...titles].some(candidate => {
                const normalized = normalizePrefaceMatchText(candidate);
                return normalized && (hint.includes(normalized) || normalized.includes(hint));
            });
        });
        if (matchedTitleKey) return matchedTitleKey;

        const groupFallbacks = [
            [/年間主日叙唱|SUNDAYS? IN ORDINARY TIME|CHÚA NHẬT THƯỜNG NIÊN|DOMINICIS.*PER ANNUM/i, 'ordinary_1'],
            [/共通叙唱|COMMON PREFACE|KINH TIỀN TỤNG CHUNG|PRÆFATIO(?:NES)? COMMUN/i, 'common_1'],
            [/主の降誕叙唱|NATIVITY OF THE LORD|GIÁNG SINH|NATIVITATE DOMINI/i, 'nativity_1'],
            [/四旬節叙唱|PREFACES? I-IV OF LENT|MÙA CHAY I-IV|QUADRAGESIMA/i, 'lent_1'],
            [/復活叙唱|PREFACES? I-V OF EASTER|PHỤC SINH I-V|PRÆFATIONES PASCHALES/i, 'easter_1'],
            [/主の昇天叙唱|ASCENSION OF THE LORD|THĂNG THIÊN|ASCENSIONE DOMINI/i, 'ascension_1'],
            [/死者叙唱|PREFACES? I-V FOR THE DEAD|CẦU CHO NHỮNG NGƯỜI ĐÃ QUA ĐỜI|DEFUNCTIS/i, 'dead_1'],
            [/聖母マリア叙唱|BLESSED VIRGIN MARY|KINH TIỀN TỤNG ĐỨC MẸ|BEATA MARIA VIRGINE/i, 'mary_1'],
            [/使徒叙唱|PREFACES? I-II OF (?:THE )?APOSTLES|THÁNH TÔNG ĐỒ|DE APOSTOLIS/i, 'apostles_1'],
            [/殉教者叙唱|HOLY MARTYRS|THÁNH TỬ ĐẠO|SANCTIS MARTYRIBUS/i, 'martyrs'],
            [/聖体叙唱|MOST HOLY EUCHARIST|THÁNH THỂ|SS\.MA EUCHARISTIA/i, 'eucharist_1']
        ];
        const fallback = groupFallbacks.find(([pattern]) => pattern.test(rawHint));
        return fallback && songs[fallback[1]] ? fallback[1] : '';
    }

    function koreanBlessingDateSelection(date, info = state.liturgyInfo) {
        const source = globalThis.koreanBlessingData || {};
        const lentenPrayers = source.lentenPrayers || {};
        const solemnBlessings = source.solemnBlessings || {};
        const activeDate = toDateOnly(date || getActiveLiturgicalSourceDate());
        // Local/calendar overlays may mark a day as `special` (Ash Wednesday,
        // Pentecost, local solemnities, and so on).  The perpetual season,
        // week, and weekday must still come from the date itself so those
        // overlays cannot hide a date-assigned prayer over the people.
        const meta = getSeasonMeta(activeDate);
        const title = cleanNodeText([
            info && info.krName,
            info && info.names && info.names.KR,
            info && info.names && info.names.EN,
            info && info.names && info.names.LA
        ].filter(Boolean).join(' '));

        // The Missal assigns these prayers by Lenten week and weekday, so this
        // remains valid without a year-specific calendar file.
        if (meta.season === 'lent' && Number.isInteger(meta.week) && Number.isInteger(meta.day)) {
            const prayerKey = `lent_${meta.week}_${meta.day}`;
            if (lentenPrayers[prayerKey]) {
                return { type: 'prayer_over_people', key: prayerKey, entry: lentenPrayers[prayerKey] };
            }
        }

        let key = '';
        const month = activeDate.getMonth() + 1;
        const day = activeDate.getDate();
        if (month === 1 && day === 1) key = 'new_year';
        else if (/성령\s*강림|Pentecost|Pentecostes/i.test(title)) key = 'pentecost';
        else if (/주님\s*승천|Ascension|Ascensione/i.test(title)) key = 'ascension';
        else if (/주님\s*공현|Epiphany|Epiphan/i.test(title)) key = 'epiphany';
        else if (/성\s*베드로와\s*성\s*바오로|Peter\s+and\s+Paul|Petri\s+et\s+Pauli/i.test(title)) key = 'peter_and_paul';
        else if (/모든\s*성인|All\s+Saints|Omnium\s+Sanctorum/i.test(title)) key = 'all_saints';
        else if (/성당\s*봉헌|성전\s*봉헌|Dedication\s+of.*Church|Dedicatione\s+ecclesiae/i.test(title)) key = 'church_dedication';
        else if (/위령|죽은\s*이|All\s+Souls|Defunctor/i.test(title) || (month === 11 && day === 2)) key = 'for_the_dead';
        else if (/사도(?:\s|들|$)|Apostle|Apostol/i.test(title)) key = 'apostles';
        else if (/천주의\s*성모|복되신\s*동정\s*마리아|성모(?:\s|$)|Our\s+Lady|Blessed\s+Virgin\s+Mary|Beatae?\s+Mariae\s+Virginis|Sanctae\s+Dei\s+Genetricis/i.test(title)) key = 'blessed_virgin_mary';
        else if (meta.season === 'advent') key = 'advent';
        else if (meta.season === 'christmas') key = 'christmas';
        else if (meta.season === 'lent' && meta.week === 6) key = 'passion';
        else if (meta.season === 'easter') key = 'easter';
        if (!key || !solemnBlessings[key]) return null;
        return { type: 'solemn_blessing', key, entry: solemnBlessings[key] };
    }

    function koreanBlessingLine(text, response = false) {
        const line = {
            sp_kr: response ? '◎' : '✚', text_kr: text,
            sp_vn: response ? 'CĐ.' : 'LM.', text_vn: response ? 'Amen.' : '',
            sp_en: response ? 'ALL' : 'P.', text_en: response ? 'Amen.' : '',
            sp_la: response ? 'P.' : 'S.', text_la: response ? 'Amen.' : '',
            sp_jp: response ? '会衆' : '司祭', text_jp: response ? 'アーメン。' : ''
        };
        return line;
    }

    function parsedKoreanSolemnBlessingLines(lines) {
        return (Array.isArray(lines) ? lines : []).map(raw => {
            const text = cleanNodeText(raw);
            const response = /^[◎○]/.test(text);
            return koreanBlessingLine(text.replace(/^[╋＋✚◎○]\s*/, ''), response);
        }).filter(line => cleanNodeText(line.text_kr));
    }

    function prepareKoreanBlessingForActiveDate(item, baseId) {
        if (baseId !== 'blessing' || !item || !item.variants || !item.variants.C) return;
        const variant = item.variants.C;
        if (!item.__originalKoreanBlessingVariantC) {
            item.__originalKoreanBlessingVariantC = {
                label: JSON.parse(JSON.stringify(variant.label || {})),
                lines: cloneMassLines(variant.lines || [])
            };
        }
        const original = item.__originalKoreanBlessingVariantC;
        variant.label = JSON.parse(JSON.stringify(original.label));
        variant.lines = cloneMassLines(original.lines);

        const date = getActiveLiturgicalSourceDate();
        const selection = koreanBlessingDateSelection(date, state.liturgyInfo);
        if (!selection || !selection.entry) {
            const signature = `${formatDateIso(date)}|simple`;
            if (state.autoBlessingSignature !== signature) {
                state.options.blessing = item.variants.A ? 'A' : Object.keys(item.variants)[0];
                state.autoBlessingSignature = signature;
            }
            return;
        }
        const entry = selection.entry;
        const originalLines = cloneMassLines(original.lines);
        const prefix = originalLines.slice(0, 3);
        let content = [];
        if (selection.type === 'prayer_over_people') {
            content = [
                koreanBlessingLine((entry.lines || []).join('<br>')),
                koreanBlessingLine('아멘.', true),
                ...originalLines.slice(4)
            ];
            variant.label.kr = `백성을 위한 기도 - ${entry.title || selection.key}`;
        } else {
            content = parsedKoreanSolemnBlessingLines(entry.lines);
            variant.label.kr = `장엄강복 - ${entry.label || selection.key}`;
        }
        if (!content.length) return;
        variant.lines = prefix.concat(content);

        const signature = `${formatDateIso(date)}|${selection.type}|${selection.key}`;
        if (state.autoBlessingSignature !== signature) {
            state.options.blessing = 'C';
            state.autoBlessingSignature = signature;
        }
    }

    function getSelectedEucharistSongKey(item) {
        const keys = getEucharistSongKeys(item);
        if (!keys.length) return state.options.eucharist_song || '';
        const current = state.options.eucharist_song;
        const selected = getEucharistSongHintKey(item) || keys[0];
        if (current && keys.includes(current) && current !== state.autoEucharistSongKey) return current;
        state.options.eucharist_song = selected;
        state.autoEucharistSongKey = selected;
        return selected;
    }

    function getEucharistSongLines(item, key) {
        const songs = getEucharistSongMap(item);
        return getEucharistSongLinesFromEntry(songs[key]);
    }

    function getEucharistSongLabel(item, key, langCode) {
        const entry = getEucharistSongMap(item)[key];
        const title = getLocalizedObjectValue(entry && entry.title, langCode);
        if (title) return title;
        const songLabels = { 'KR': '감사송', 'VN': 'Kinh Tiền Tụng', 'EN': 'Preface', 'JP': '叙唱', 'LA': 'Præfatio' };
        return `${songLabels[langCode] || '감사송'} ${key}`;
    }

    function liturgyDateNavigationHtml(leftName, rightName) {
        const secondary = rightName ? `<br><span class="liturgy-name-secondary">${escapeHtml(rightName)}</span>` : '';
        const prevLabel = '전날 전례로 이동';
        const nextLabel = '다음날 전례로 이동';
        return [
            `<button type="button" class="liturgy-nav-btn liturgy-nav-prev" aria-label="${prevLabel}" title="${prevLabel}" onclick="changeLiturgicalDay(-1)">&lt;</button>`,
            `<div class="liturgy-name-text"><span class="liturgy-name-primary">${escapeHtml(leftName)}</span>${secondary}</div>`,
            `<button type="button" class="liturgy-nav-btn liturgy-nav-next" aria-label="${nextLabel}" title="${nextLabel}" onclick="changeLiturgicalDay(1)">&gt;</button>`
        ].join('');
    }

    function citationForDisplayData(data, lower) {
        const citObj = (data && data.cit) || {};
        return citObj[`cit_${lower}`] || (lower === 'kr' ? (citObj.cit || '') : '');
    }

    function activeDisplayCitationsAreDifferent(data, leftKey, rightKey) {
        if (!leftKey || !rightKey || leftKey === rightKey) return false;
        return citationsAreDifferent(citationForDisplayData(data, leftKey), citationForDisplayData(data, rightKey));
    }

    function activeDisplayCitationsMatch(data, leftKey, rightKey) {
        if (!leftKey || !rightKey || leftKey === rightKey) return false;
        const leftCitation = citationForDisplayData(data, leftKey);
        const rightCitation = citationForDisplayData(data, rightKey);
        return !!(leftCitation && rightCitation && !citationsAreDifferent(leftCitation, rightCitation));
    }

    function hasLocalProperNameMarker(text) {
        const normalized = normalizeSemanticText(text);
        return /bien\s*-?\s*duc|benedict|benedicto|benedictus|be\s*ne\s*dic|베네딕|ベネディクト|(?:le kinh|theo loi)\s+thanh\b/i.test(normalized);
    }

    function lineLooksLikeMismatchedLocalProper(line, leftKey, rightKey) {
        const leftText = cleanNodeText(line && line[`text_${leftKey}`]);
        const rightText = cleanNodeText(line && line[`text_${rightKey}`]);
        if (!leftText || !rightText) return false;
        return hasLocalProperNameMarker(leftText) !== hasLocalProperNameMarker(rightText);
    }

    function dailyLineSemanticKey(text) {
        const sharedKey = variantSemanticKey('daily_line', text);
        if (sharedKey) return sharedKey;
        const normalized = normalizeSemanticText(text);
        const raw = String(text || '');
        const haystack = `${normalized}\n${raw}`;
        const patterns = [
            ['taste_see_good_lord', /맛보고.*깨달|주님.*얼마나\s*좋|hay nem.*nhin coi|chua thien hao|taste.*see.*good|gustate.*videte/i],
            ['good_shepherd_sheep_know', /착한\s*목자|내\s*양|양들.*알|con chien.*nghe.*tieng|ta biet chung|good shepherd|my sheep.*hear|know them/i],
            ['temple_mercy_praise_name', /성전.*자애|당신의\s*성전|이름.*찬송|lòng\s*thương\s*xót.*đền\s*thánh|long thuong xot.*den thanh|thanh danh.*khen ngoi|tay huu.*cong minh|temple.*mercy|name.*praise.*justice/i],
            ['clap_hands_peoples', /손뼉.*쳐라|모든\s*민족|chư\s*dân.*vỗ\s*tay|chu dan.*vo tay|clap.*hands.*peoples/i]
        ];
        const matched = patterns.find(([, pattern]) => pattern.test(haystack));
        return matched ? matched[0] : '';
    }

    function activeLineTextsAreSemanticMatch(line, leftKey, rightKey, baseId = '') {
        const leftText = line && line[`text_${leftKey}`];
        const rightText = line && line[`text_${rightKey}`];
        if (baseId && cachedOrLocalSemanticEquivalent(baseId, leftText, rightText)) return true;
        const leftKeyName = dailyLineSemanticKey(leftText);
        const rightKeyName = dailyLineSemanticKey(rightText);
        return !!(leftKeyName && rightKeyName && leftKeyName === rightKeyName);
    }

    function activeLineTextsAreKnownSemanticMismatch(line, leftKey, rightKey) {
        const leftKeyName = dailyLineSemanticKey(line && line[`text_${leftKey}`]);
        const rightKeyName = dailyLineSemanticKey(line && line[`text_${rightKey}`]);
        return !!(leftKeyName && rightKeyName && leftKeyName !== rightKeyName);
    }

    function clearDisplayLanguageFromLine(line, lower) {
        const copy = Object.assign({}, line || {});
        copy[`sp_${lower}`] = '';
        copy[`text_${lower}`] = '';
        copy[`text_${lower}_ai`] = '';
        copy[`role_${lower}`] = '';
        copy[`rubric_${lower}`] = '';
        copy.__clearedDisplayLanguages = Object.assign({}, copy.__clearedDisplayLanguages || {}, { [lower]: true });
        return copy;
    }

    function shouldSplitMismatchedDailyLine(line, baseId, data, leftKey, rightKey) {
        if (!line || !leftKey || !rightKey || leftKey === rightKey) return false;
        if (isPrayerFrameLine(line) || lineHasAnyRubric(line)) return false;
        const leftText = cleanNodeText(line[`text_${leftKey}`]);
        const rightText = cleanNodeText(line[`text_${rightKey}`]);
        if (!leftText || !rightText) return false;
        if ((baseId === 'entrance' || baseId === 'communion') && activeLineTextsAreKnownSemanticMismatch(line, leftKey, rightKey)) return true;
        if ((baseId === 'entrance' || baseId === 'communion') && activeDisplayCitationsMatch(data, leftKey, rightKey)) return false;
        if (localSemanticEquivalent(baseId, leftText, rightText)) return false;
        const cachedEquivalent = readCachedDailySemanticEquivalence(getActiveLiturgicalSourceDate(), baseId, leftText, rightText);
        if (cachedEquivalent === true) return false;
        if (cachedEquivalent === false && aiSemanticDecisionSectionIds.has(baseId)) return true;
        if ((baseId === 'entrance' || baseId === 'communion') && activeDisplayCitationsAreDifferent(data, leftKey, rightKey) && !activeLineTextsAreSemanticMatch(line, leftKey, rightKey, baseId)) return true;
        if (['collect', 'prayer_offerings', 'prayer_after'].includes(baseId) && lineLooksLikeMismatchedLocalProper(line, leftKey, rightKey) && !activeLineTextsAreSemanticMatch(line, leftKey, rightKey, baseId)) return true;
        return false;
    }

    function splitMismatchedDailyLinesForActiveLanguages(lines, baseId, data, leftKey, rightKey) {
        if (!Array.isArray(lines) || leftKey === rightKey) return lines || [];
        return lines.flatMap(line => {
            if (!shouldSplitMismatchedDailyLine(line, baseId, data, leftKey, rightKey)) return [line];
            return [
                clearDisplayLanguageFromLine(line, rightKey),
                clearDisplayLanguageFromLine(line, leftKey)
            ];
        });
    }

    function psalmDisplayLineHasLanguageContent(line, lower) {
        return !!cleanNodeText([
            line && line[`sp_${lower}`],
            line && line[`text_${lower}`],
            line && line[`rubric_${lower}`]
        ].filter(Boolean).join(' '));
    }

    function isPsalmDisplayVersicle(line, lower) {
        if (!psalmDisplayLineHasLanguageContent(line, lower)) return false;
        const language = normalizeSelectableLang(lower, lower).toUpperCase();
        return strictShouldAppendPsalmResponse(language, line && line[`sp_${lower}`]);
    }

    function psalmDisplayVerseRefs(line, lower) {
        return normalizedPsalmVerseRefs(line && line[`verse_refs_${lower}`]);
    }

    // Sources do not always divide the same cited verse range into the same
    // number of paragraphs. Keep every source paragraph, but render adjacent
    // one-sided versicles in a single bilingual stanza group (for example,
    // two Korean ○ paragraphs beside one Vietnamese X. paragraph).
    function groupPsalmDisplayLinesForActiveLanguages(lines, leftKey, rightKey) {
        if (!Array.isArray(lines) || !leftKey || !rightKey || leftKey === rightKey) return lines || [];
        const grouped = [];
        for (let index = 0; index < lines.length;) {
            const first = lines[index];
            const group = [first];
            if (isPsalmDisplayVersicle(first, leftKey) && isPsalmDisplayVersicle(first, rightKey)) {
                let cursor = index + 1;
                while (cursor < lines.length) {
                    const candidate = lines[cursor];
                    const leftVersicle = isPsalmDisplayVersicle(candidate, leftKey);
                    const rightVersicle = isPsalmDisplayVersicle(candidate, rightKey);
                    if (leftVersicle === rightVersicle) break;
                    const populatedKey = leftVersicle ? leftKey : rightKey;
                    const emptyKey = leftVersicle ? rightKey : leftKey;
                    if (psalmDisplayLineHasLanguageContent(candidate, emptyKey)) break;
                    if (cleanNodeText(candidate[`sp_${populatedKey}`]) !== cleanNodeText(first[`sp_${populatedKey}`])) break;
                    const candidateRefs = psalmDisplayVerseRefs(candidate, populatedKey);
                    const pairedRefs = psalmDisplayVerseRefs(first, emptyKey);
                    if (!candidateRefs.length || !pairedRefs.length || !psalmVerseRefsOverlap(candidateRefs, pairedRefs)) break;
                    group.push(candidate);
                    cursor += 1;
                }
            }
            grouped.push(group.length > 1 ? { __psalmDisplayGroup: true, lines: group } : first);
            index += group.length;
        }
        return grouped;
    }

    function psalmDisplayGroupLanguageHTML(lines, lang, baseId, extraClass = '') {
        const lower = String(lang || '').toLowerCase();
        return (lines || [])
            .filter(line => psalmDisplayLineHasLanguageContent(line, lower))
            .map(line => {
                const rubric = line[`rubric_${lower}`] || '';
                const rubricHtml = rubric ? `<span class="rubric${extraClass.includes('translation') ? ' translation' : ''}">${rubric}</span>` : '';
                const roleClass = roleClassForLine(line, lower);
                const classes = [extraClass, roleClass].filter(Boolean).join(' ');
                return rubricHtml + linePairHTML(
                    line[`sp_${lower}`] || '',
                    line[`text_${lower}`] || '',
                    lower,
                    classes,
                    shouldSuppressSpeaker(baseId),
                    false
                );
            })
            .join('');
    }

    const gospelAcclamationAlleluiaTokens = Object.freeze({
        kr: '알렐루야',
        vn: 'Alleluia',
        en: 'Alleluia',
        jp: 'アレルヤ',
        la: 'Alleluia'
    });

    function normalizedAlleluiaResponseText(value) {
        return cleanNodeText(value)
            .replace(/^(?:CĐ\.|CD\.|◎|会|R\.|℟\.?)\s*/iu, '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[ĐÐ]/g, 'D')
            .replace(/[đð]/g, 'd');
    }

    function gospelAcclamationAlleluiaProfile(value) {
        if (!isAlleluiaOnlyText(value)) return null;
        const normalized = normalizedAlleluiaResponseText(value);
        const withoutPronunciationGuide = normalized.replace(/\([^)]*\)|\[[^\]]*\]|\{[^}]*\}/g, ' ');
        const tokenPattern = /(?:alleluia|aleluia|haleluia|ha(?:[\s-]*le[\s-]*lui[\s-]*a)|알렐루야|アレルヤ)/giu;
        const outsideMatches = withoutPronunciationGuide.match(tokenPattern) || [];
        const allMatches = normalized.match(tokenPattern) || [];
        return {
            count: Math.max(1, outsideMatches.length || allMatches.length),
            emphatic: /[!！]\s*$/u.test(normalized)
        };
    }

    function gospelAcclamationAlleluiaText(lower, profile = {}) {
        const token = gospelAcclamationAlleluiaTokens[lower] || gospelAcclamationAlleluiaTokens.en;
        const count = Math.max(1, Number(profile.count) || 1);
        const words = Array.from({ length: count }, (_, index) => {
            if (index === 0 || !/^[A-Z]/.test(token)) return token;
            return token.charAt(0).toLowerCase() + token.slice(1);
        });
        const separator = lower === 'jp' ? '、' : ', ';
        const terminal = profile.emphatic ? (lower === 'jp' ? '！' : '!') : (lower === 'jp' ? '。' : '.');
        return `${words.join(separator)}${terminal}`;
    }

    function gospelAcclamationResponseSourceOrder() {
        return [
            normalizeSelectableLang(state.currentLoc || '', ''),
            normalizeSelectableLang(getLiturgicalBaseLang() || '', ''),
            normalizeSelectableLang(state.targetLang || '', ''),
            ...SUPPORTED_LANGS
        ].map(lang => String(lang || '').toLowerCase())
            .filter((lower, index, list) => lower && list.indexOf(lower) === index);
    }

    function gospelAcclamationAlleluiaReference(line) {
        for (const lower of gospelAcclamationResponseSourceOrder()) {
            const profile = gospelAcclamationAlleluiaProfile(line && line[`text_${lower}`]);
            if (profile) return { lower, profile };
        }
        return null;
    }

    // Alleluia is a fixed congregational response, not the proper versicle.
    // Translate its exact source-language repetition locally for every missing
    // language. Other responses (including Korea-only Lenten formulas such as
    // “말씀이신 그리스도님…”) deliberately remain empty so the ordinary AI
    // translation path is still offered for them.
    function fillGospelAcclamationAlleluiaLines(lines) {
        if (!Array.isArray(lines)) return lines || [];
        const lowers = SUPPORTED_LANGS.map(lang => lang.toLowerCase());
        const responseLines = lines
            .map((line, index) => ({ line, index, reference: gospelAcclamationAlleluiaReference(line) }))
            .filter(entry => entry.reference);
        responseLines.forEach((entry, position) => {
            const { line, reference } = entry;
            lowers.forEach(lower => {
                if (!cleanNodeText(line[`text_${lower}`])) {
                    line[`text_${lower}`] = gospelAcclamationAlleluiaText(lower, reference.profile);
                    line[`text_${lower}_ai`] = '';
                }
                if (position === 0 && !cleanNodeText(line[`sp_${lower}`])) line[`sp_${lower}`] = peopleSpeakerByLang[lower] || '';
            });
        });
        return lines;
    }

    const sourceChoiceVariantPartIds = new Set(['entrance', 'communion', 'collect', 'prayer_offerings', 'prayer_after']);

    function sourceChoiceLabelForLower(sourceLower, sourceOrdinal = null) {
        const names = {
            kr: { kr: '한국어', vn: 'tiếng Hàn', en: 'Korean', jp: '韓国語', la: 'Coreana' },
            vn: { kr: '베트남어', vn: 'tiếng Việt', en: 'Vietnamese', jp: 'ベトナム語', la: 'Vietnamica' },
            en: { kr: '영어', vn: 'tiếng Anh', en: 'English', jp: '英語', la: 'Anglica' },
            jp: { kr: '일본어', vn: 'tiếng Nhật', en: 'Japanese', jp: '日本語', la: 'Iaponica' },
            la: { kr: '라틴어', vn: 'tiếng Latinh', en: 'Latin', jp: 'ラテン語', la: 'Latina' }
        };
        const name = names[sourceLower] || names.kr;
        const ordinalSuffix = Number.isInteger(sourceOrdinal) && sourceOrdinal > 0 ? ` ${sourceOrdinal}` : '';
        return {
            kr: `${name.kr} 원문${ordinalSuffix}`,
            vn: `Nguyên bản ${name.vn}${ordinalSuffix}`,
            en: `${name.en} source${ordinalSuffix}`,
            jp: `${name.jp}原文${ordinalSuffix}`,
            la: `Textus ${name.la}${ordinalSuffix}`
        };
    }

    function sourceChoiceMismatchIndexes(lines, baseId, data, leftKey, rightKey) {
        if (!sourceChoiceVariantPartIds.has(baseId) || !Array.isArray(lines) || leftKey === rightKey) return [];
        return lines.reduce((indexes, line, index) => {
            if (!line || isPrayerFrameLine(line) || lineHasAnyRubric(line)) return indexes;
            const leftText = cleanNodeText(line[`text_${leftKey}`]);
            const rightText = cleanNodeText(line[`text_${rightKey}`]);
            if (!leftText || !rightText) return indexes;
            if ((baseId === 'entrance' || baseId === 'communion') && activeLineTextsAreKnownSemanticMismatch(line, leftKey, rightKey)) {
                indexes.push(index);
                return indexes;
            }
            if ((baseId === 'entrance' || baseId === 'communion') && activeDisplayCitationsMatch(data, leftKey, rightKey)) return indexes;
            if (localSemanticEquivalent(baseId, leftText, rightText)) return indexes;
            const cachedEquivalent = readCachedDailySemanticEquivalence(getActiveLiturgicalSourceDate(), baseId, leftText, rightText);
            if (cachedEquivalent === true) return indexes;
            const antiphonMismatch = (baseId === 'entrance' || baseId === 'communion')
                && activeDisplayCitationsAreDifferent(data, leftKey, rightKey)
                && !activeLineTextsAreSemanticMatch(line, leftKey, rightKey, baseId);
            const prayerMismatch = ['collect', 'prayer_offerings', 'prayer_after'].includes(baseId)
                && lineLooksLikeMismatchedLocalProper(line, leftKey, rightKey)
                && !activeLineTextsAreSemanticMatch(line, leftKey, rightKey, baseId);
            if (cachedEquivalent === false || antiphonMismatch || prayerMismatch) indexes.push(index);
            return indexes;
        }, []);
    }

    function cloneLinesForSourceChoice(lines, keepLower, clearLower, mismatchIndexes) {
        const mismatchSet = new Set(mismatchIndexes || []);
        return cloneMassLines(lines || []).map((line, index) => {
            const displayLine = mismatchSet.has(index) ? clearDisplayLanguageFromLine(line, clearLower) : line;
            return Object.assign({}, displayLine, { __sourceChoiceOriginal: true });
        });
    }

    function sourceChoiceCitation(cit, keepLower) {
        const source = cit || {};
        const out = {};
        const directKey = `cit_${keepLower}`;
        if (source[directKey]) out[directKey] = source[directKey];
        if (keepLower === 'kr' && source.cit) out.cit = source.cit;
        return out;
    }

    function buildSourceChoiceDisplayData(data, baseId, leftKey, rightKey) {
        const indexes = sourceChoiceMismatchIndexes(data && data.lines, baseId, data, leftKey, rightKey);
        if (!indexes.length) return null;
        const optionKey = `${baseId}_source`;
        const variants = {
            A: {
                label: sourceChoiceLabelForLower(leftKey),
                header: data.header || {},
                cit: sourceChoiceCitation(data.cit, leftKey),
                lines: cloneLinesForSourceChoice(data.lines, leftKey, rightKey, indexes)
            },
            B: {
                label: sourceChoiceLabelForLower(rightKey),
                header: data.header || {},
                cit: sourceChoiceCitation(data.cit, rightKey),
                lines: cloneLinesForSourceChoice(data.lines, rightKey, leftKey, indexes)
            }
        };
        const currentKey = state.options[optionKey];
        const selectedKey = currentKey && variants[currentKey] ? currentKey : 'A';
        state.options[optionKey] = selectedKey;
        return {
            __displaySourceVariants: true,
            __displayOptionKey: optionKey,
            type: 'selectable',
            variants,
            header: data.header || {},
            cit: variants[selectedKey].cit,
            lines: cloneMassLines(variants[selectedKey].lines),
            label: variants[selectedKey].label
        };
    }

    // 화면 렌더링
    function render() {
        if (state.startupConsentDeclined) return;
        syncTargetLanguageOptions();
        const colorTheme = liturgyColorVisualTheme(state.liturgyInfo.color);
        document.documentElement.style.setProperty('--primary-color', colorTheme.accent);
        document.documentElement.style.setProperty('--liturgy-bg-color', colorTheme.bg);
        document.documentElement.style.setProperty('--liturgy-text-color', colorTheme.text);
        document.documentElement.style.setProperty('--liturgy-border-color', colorTheme.border);
        document.documentElement.style.setProperty('--liturgy-hover-bg', colorTheme.hover);
        document.documentElement.style.setProperty('--liturgy-settings-bg', colorTheme.settingsBg);
        document.documentElement.style.setProperty('--liturgy-settings-border', colorTheme.settingsBorder);
        document.documentElement.style.setProperty('--liturgy-primary-name-color', colorTheme.primaryName || colorTheme.text);
        document.documentElement.style.setProperty('--liturgy-secondary-color', colorTheme.secondary || colorTheme.text);
        document.documentElement.style.setProperty('--translation-color', colorTheme.translation || '#6c757d');
        document.documentElement.style.setProperty('--translation-heading-color', colorTheme.translationHeading || colorTheme.accent);
        document.documentElement.style.setProperty('--section-bar-bg', colorTheme.sectionBg || '#eee');
        document.getElementById('main-header').style.background = colorTheme.bg;
        document.getElementById('main-header').style.color = colorTheme.text;
        document.getElementById('header-date').textContent = state.liturgyInfo.dateStr;
        syncLocalizedChromeAndSettings();

        const leftL = normalizeSelectableLang(state.currentLoc || 'KR', 'KR');
        const rightL = normalizeDistinctTargetLang(state.targetLang, leftL);
        state.currentLoc = leftL;
        state.targetLang = rightL;
        ensureDefaultCreedForLocation(leftL);
        const uiL = normalizeSelectableLang(state.uiLang || 'KR', 'KR');
        document.getElementById('header-main-title').textContent = localizedHeaderMainTitle(uiL);
        document.getElementById('header-date').textContent = localizedHeaderDate(getActiveLiturgicalDateContext(), uiL, state.liturgyInfo.dateStr);
        updateRoleLegend(leftL, rightL);
        const appNames = { 'KR': '가톨릭 매일미사', 'VN': 'Lời Chúa Mỗi Ngày', 'EN': 'Daily Mass', 'JP': '毎日のミサ', 'LA': 'Daily Mass in Latin' };
        document.title = `${appNames[leftL] || 'Ordo Missae'} | ${appNames[rightL] || 'Ordo Missae'} - Ordo Missae`;
        const leftLitName = getLiturgyDisplayName(leftL);
        const rightLitName = getLiturgyDisplayName(rightL);
        document.getElementById('header-liturgy-name').innerHTML = liturgyDateNavigationHtml(leftLitName, leftL === rightL ? '' : rightLitName);
        updateFloatingLiturgyBanner(leftLitName, leftL === rightL ? '' : rightLitName);
        syncLiturgyLoadingStatusBar(leftL, rightL);
        updateFooterCopyright();

        const root = document.getElementById('missal-root');
        const isStacked = state.layoutStacked || window.innerWidth < 600;
        root.innerHTML = '';
        root.classList.toggle('stacked-mode', isStacked);

        massData.forEach(item => {
            const baseId = getBaseId(item.id);
            prepareKoreanBlessingForActiveDate(item, baseId);
            if (item.if === 'sunday' && !state.isSunday) return;
            if (item.if === 'easter_or_pentecost' && !isEasterOrPentecost(getTargetDate())) return;
            if (item.if === 'not_penitential_C' && state.options.penitential === 'C') return;

            if (item.type === 'section') {
                const bar = document.createElement('div');
                bar.className = 'section-bar';
                if (!root.querySelector('.section-bar')) bar.classList.add('first-section-bar');
                const titleLeft = item[leftL.toLowerCase()] || item.kr || '';
                const titleRight = item[rightL.toLowerCase()] || item.vn || '';
                bar.innerHTML = [
                    `<span class="section-bar-primary">${escapeHtml(titleLeft)}</span>`,
                    '<span class="section-bar-separator"> | </span>',
                    `<span class="section-bar-secondary">${escapeHtml(titleRight)}</span>`
                ].join('');
                root.appendChild(bar);
                return;
            }

            const data = Object.assign({}, item);
            if (item.type === 'selectable' && item.variants) {
                normalizeDailySelectableTemplate(item);
                ensureDismissalDefaultOption(item, baseId);
                const variantKeys = Object.keys(item.variants).sort();
                const currentKey = state.options[baseId];
                const selectedKey = currentKey && item.variants[currentKey] ? currentKey : variantKeys[0];
                state.options[baseId] = selectedKey;
                const sel = item.variants[selectedKey] || {};
                const variantHeader = sel.header && !Array.isArray(sel.header) ? sel.header : {};
                data.header = Object.assign({}, item.header || {}, variantHeader);
                data.cit = sel.cit && typeof sel.cit === 'object' ? Object.assign({}, sel.cit) : Object.assign({}, item.cit || {});
                data.lines = sel.lines ? JSON.parse(JSON.stringify(sel.lines)) : [];
                data.label = sel.label || item.label;
            } else {
                data.header = item.header || {};
                data.lines = item.lines ? JSON.parse(JSON.stringify(item.lines)) : [];
            }

            if (baseId === 'eucharist' || item.isEucharist) {
                const selectedForm = state.options.eucharist || '2';
                const songChoice = getSelectedEucharistSongKey(item);
                const inlineOptionContext = { isStacked, leftKey: leftL.toLowerCase(), rightKey: rightL.toLowerCase() };
                let compiledLines = markEucharistLines(item.common_dialogue, 'dialogue');
                if (selectedForm === '4') {
                    if (item.forms && Array.isArray(item.forms['4'])) compiledLines = compiledLines.concat(markEucharistLines(expandEucharistInlineOptions(item.forms['4'], inlineOptionContext), 'form'));
                } else {
                    const songLines = getEucharistSongLines(item, songChoice);
                    if (songLines.length) compiledLines = compiledLines.concat(markEucharistLines(songLines, 'preface'));
                    if (Array.isArray(item.sanctus)) compiledLines = compiledLines.concat(markEucharistLines(item.sanctus, 'sanctus'));
                    if (item.forms && Array.isArray(item.forms[selectedForm])) {
                        let formLines = selectedForm === '1'
                            ? filterRomanCanonSeasonalLines(item.forms[selectedForm], getActiveLiturgicalSourceDate())
                            : item.forms[selectedForm];
                        formLines = expandEucharistInlineOptions(formLines, inlineOptionContext);
                        compiledLines = compiledLines.concat(markEucharistLines(formLines, 'form'));
                    }
                }
                if (Array.isArray(item.amen)) {
                    compiledLines = compiledLines.concat(markEucharistLines(item.amen, 'amen'));
                } else if (item.amen) {
                    compiledLines.push(Object.assign({}, item.amen, { __eucharistSection: 'amen' }));
                }
                data.lines = addEucharisticDottedDividers(compiledLines);
            }

            const sourceChoiceData = buildSourceChoiceDisplayData(data, baseId, leftL.toLowerCase(), rightL.toLowerCase());
            if (sourceChoiceData) Object.assign(data, sourceChoiceData);
            if (baseId === 'gospel_accl') fillGospelAcclamationAlleluiaLines(data.lines);

            const partContainer = document.createElement('section');
            partContainer.className = 'part-container';
            partContainer.dataset.partId = baseId;

            const headerRow = document.createElement('div');
            headerRow.className = 'pc-line-row pc-header-row';
            const hColL = document.createElement('div');
            hColL.className = 'pc-col';
            hColL.innerHTML = isStacked ? genStackedHeader(item, data, leftL, rightL, baseId) : genHeader(item, data, leftL, baseId);
            const hColR = document.createElement('div');
            hColR.className = 'pc-col pc-col-sub';
            hColR.innerHTML = genHeader(item, data, rightL, baseId);
            headerRow.appendChild(hColL);
            if (!isStacked) headerRow.appendChild(hColR);
            partContainer.appendChild(headerRow);

            const displayLines = splitMismatchedDailyLinesForActiveLanguages(data.lines, baseId, data, leftL.toLowerCase(), rightL.toLowerCase());
            const displayRows = baseId === 'psalm'
                ? groupPsalmDisplayLinesForActiveLanguages(displayLines, leftL.toLowerCase(), rightL.toLowerCase())
                : displayLines;
            displayRows.forEach(displayRow => {
                if (displayRow && displayRow.__psalmDisplayGroup) {
                    const groupLines = displayRow.lines || [];
                    if (isStacked) {
                        const block = document.createElement('div');
                        block.className = 'pair-block psalm-stanza-group';
                        block.innerHTML = psalmDisplayGroupLanguageHTML(groupLines, leftL, baseId)
                            + psalmDisplayGroupLanguageHTML(groupLines, rightL, baseId, 'translation');
                        if (block.innerHTML.trim()) partContainer.appendChild(block);
                    } else {
                        const lineRow = document.createElement('div');
                        lineRow.className = 'pc-line-row psalm-stanza-group';
                        const lCol = document.createElement('div');
                        lCol.className = 'pc-col';
                        lCol.innerHTML = psalmDisplayGroupLanguageHTML(groupLines, leftL, baseId);
                        const rCol = document.createElement('div');
                        rCol.className = 'pc-col pc-col-sub';
                        rCol.innerHTML = psalmDisplayGroupLanguageHTML(groupLines, rightL, baseId);
                        lineRow.appendChild(lCol);
                        lineRow.appendChild(rCol);
                        partContainer.appendChild(lineRow);
                    }
                    return;
                }
                const line = displayRow;
                if (line && line.isDivider) {
                    appendDottedDividerRow(partContainer, isStacked);
                    return;
                }
                if (line && line.type === 'inlineOptionControl') {
                    const controlHtml = genEucharistInlineOptionControl(line, leftL, { isStacked, leftKey: leftL.toLowerCase(), rightKey: rightL.toLowerCase() });
                    if (controlHtml) partContainer.insertAdjacentHTML('beforeend', controlHtml);
                    return;
                }
                const leftKey = leftL.toLowerCase();
                const rightKey = rightL.toLowerCase();
                const leftSp = line['sp_' + leftKey] || '';
                const rightSp = line['sp_' + rightKey] || '';
                let leftTxt = line['text_' + leftKey] || '';
                let rightTxt = line['text_' + rightKey] || '';
                if (isLiturgicalPlaceholderText(leftTxt)) leftTxt = '';
                if (isLiturgicalPlaceholderText(rightTxt)) rightTxt = '';
                const leftAi = line['text_' + leftKey + '_ai'] || '';
                const rightAi = line['text_' + rightKey + '_ai'] || '';
                const suppressLeftAiFallback = shouldSuppressAIFallbackForLine(line, baseId, leftKey);
                const suppressRightAiFallback = shouldSuppressAIFallbackForLine(line, baseId, rightKey);

                if (!suppressLeftAiFallback && (!leftTxt || leftTxt.trim() === '') && rightTxt) leftTxt = makeAIButton(rightTxt, leftAi, leftL);
                if (!suppressLeftAiFallback && (!leftTxt || leftTxt.trim() === '')) {
                    const sourceText = fallbackSourceTextForLine(line, leftKey, baseId);
                    if (sourceText) leftTxt = makeAIButton(sourceText, leftAi, leftL);
                }
                if (!suppressRightAiFallback && (!rightTxt || rightTxt.trim() === '') && leftTxt && !isAIButton(leftTxt)) rightTxt = makeAIButton(leftTxt, rightAi, rightL);
                if (!suppressRightAiFallback && (!rightTxt || rightTxt.trim() === '')) {
                    const sourceText = fallbackSourceTextForLine(line, rightKey, baseId);
                    if (sourceText) rightTxt = makeAIButton(sourceText, rightAi, rightL);
                }

                if (isStacked) {
                    const block = document.createElement('div');
                    block.className = 'pair-block';
                    const rubricLeft = line['rubric_' + leftKey] || '';
                    const rubricRight = line['rubric_' + rightKey] || '';
                    if (rubricLeft) block.innerHTML += `<div class="rubric">${rubricLeft}</div>`;
                    const leftRoleClass = roleClassForLine(line, leftKey);
                    const rightRoleClass = roleClassForLine(line, rightKey);
                    block.innerHTML += linePairHTML(leftSp, leftTxt, leftKey, leftRoleClass, shouldSuppressSpeaker(baseId), shouldRenderBlankParagraph(line, leftKey, baseId));
                    if (rubricRight) block.innerHTML += `<div class="rubric translation">${rubricRight}</div>`;
                    block.innerHTML += linePairHTML(rightSp, rightTxt, rightKey, ['translation', rightRoleClass].filter(Boolean).join(' '), shouldSuppressSpeaker(baseId), shouldRenderBlankParagraph(line, rightKey, baseId));
                    if (block.innerHTML.trim()) partContainer.appendChild(block);
                } else {
                    const leftHtml = genLineHTML(line, leftL, baseId);
                    const rightHtml = genLineHTML(line, rightL, baseId);
                    if (!leftHtml && !rightHtml) return;
                    const lineRow = document.createElement('div');
                    lineRow.className = 'pc-line-row';
                    const lCol = document.createElement('div');
                    lCol.className = 'pc-col';
                    lCol.innerHTML = leftHtml;
                    const rCol = document.createElement('div');
                    rCol.className = 'pc-col pc-col-sub';
                    rCol.innerHTML = rightHtml;
                    lineRow.appendChild(lCol);
                    lineRow.appendChild(rCol);
                    partContainer.appendChild(lineRow);
                }
            });

            root.appendChild(partContainer);
        });
        restoreVoiceHighlightAfterRender();
        applyActiveTabState();
    }

    // 헤더 선택창은 UI 언어가 아니라 실제 칸의 언어를 따라갑니다.
    function headerTitleFor(data, langCode) {
        const key = langCode.toLowerCase();
        return (data.header && (data.header[key] || data.header.en || data.header.kr)) || '';
    }

    function headerCitationFor(orig, data, langCode) {
        const key = langCode.toLowerCase();
        const citObj = data.cit || orig.cit || {};
        const rawCit = citObj[`cit_${key}`] || (key === 'kr' ? (citObj.cit || '') : '');
        return rawCit ? formatBibleCit(rawCit, langCode) : '';
    }

    function genHeaderControls(orig, baseId, langCode) {
        const key = langCode.toLowerCase();
        const optionKey = orig.__displayOptionKey || baseId;
        let selectHtml = '';
        let secondarySelectHtml = '';

        if (orig.type === 'selectable' && orig.variants) {
            const variantKeys = Object.keys(orig.variants).sort();
            if (variantKeys.length > 1) {
                selectHtml = `<select class="select-inline" onchange="optChange('${optionKey}', this.value)">`;
                variantKeys.forEach(k => {
                    const labelObj = orig.variants[k].label;
                    const labelText = typeof labelObj === 'object' && labelObj !== null
                        ? (labelObj[key] || labelObj.en || labelObj.kr || '')
                        : (labelObj || k);
                    selectHtml += `<option value="${k}" ${state.options[optionKey]===k?'selected':''}>${labelText}</option>`;
                });
                selectHtml += `</select>`;
            }

            if (baseId === 'eucharist' && state.options.eucharist !== '4') {
                const songKeys = getEucharistSongKeys(orig);
                const selectedSongKey = getSelectedEucharistSongKey(orig);
                if (songKeys.length) {
                    secondarySelectHtml += `<div class="select-block"><select class="select-inline" aria-label="Preface" onpointerdown="setEucharistPrefaceSelectExpanded(this, true)" onblur="setEucharistPrefaceSelectExpanded(this, false)" onchange="optChange('eucharist_song', this.value)">`;
                    songKeys.forEach(songKey => {
                        const selected = selectedSongKey === songKey ? 'selected' : '';
                        const fullLabel = getEucharistSongLabel(orig, songKey, langCode);
                        const compactLabel = compactEucharistSongLabel(fullLabel);
                        const visibleLabel = selected ? compactLabel : fullLabel;
                        secondarySelectHtml += `<option value="${escapeAttr(songKey)}" data-full-label="${escapeAttr(fullLabel)}" data-compact-label="${escapeAttr(compactLabel)}" ${selected}>${escapeHtml(visibleLabel)}</option>`;
                    });
                    secondarySelectHtml += '</select></div>';
                }
            }
        }
        return { selectHtml, secondarySelectHtml };
    }

    function genHeaderSelectRow(selectHtml, secondarySelectHtml) {
        const controlsHtml = [selectHtml, secondarySelectHtml].filter(Boolean).join('');
        return controlsHtml ? `<div class="part-select-row">${controlsHtml}</div>` : '';
    }

    function genHeader(orig, data, langCode, baseId) {
        const title = headerTitleFor(data, langCode);
        const citation = headerCitationFor(orig, data, langCode);
        const citationHtml = citation ? `<span class="citation">${escapeHtml(citation)}</span>` : '';
        const controlsSource = data && data.__displaySourceVariants ? data : orig;
        const { selectHtml, secondarySelectHtml } = genHeaderControls(controlsSource, baseId, langCode);
        const hasSelect = !!(selectHtml || secondarySelectHtml);
        return `<div class="part-header${hasSelect ? ' has-select' : ''}"><div><span class="part-title">${title}</span>${citationHtml}</div></div>${genHeaderSelectRow(selectHtml, secondarySelectHtml)}`;
    }

    function combinedHeaderText(leftText, rightText) {
        const left = cleanNodeText(leftText);
        const right = cleanNodeText(rightText);
        if (!left) return escapeHtml(right);
        if (!right || normalizeCalendarNameForCompare(left) === normalizeCalendarNameForCompare(right)) return escapeHtml(left);
        return `${escapeHtml(left)} <span class="stacked-header-separator">|</span> <span class="stacked-header-translation">${escapeHtml(right)}</span>`;
    }

    function combinedCitationHeaderText(leftText, rightText) {
        const left = cleanNodeText(leftText);
        const right = cleanNodeText(rightText);
        if (!left) return `<span class="stacked-citation-translation">${escapeHtml(right)}</span>`;
        if (!right || normalizeCalendarNameForCompare(left) === normalizeCalendarNameForCompare(right)) {
            return `<span class="stacked-citation-primary">${escapeHtml(left)}</span>`;
        }
        return `<span class="stacked-citation-primary">${escapeHtml(left)}</span> <span class="stacked-header-separator">|</span> <span class="stacked-citation-translation">${escapeHtml(right)}</span>`;
    }

    function genStackedHeader(orig, data, leftLang, rightLang, baseId) {
        const titleHtml = combinedHeaderText(headerTitleFor(data, leftLang), headerTitleFor(data, rightLang));
        const leftCitation = headerCitationFor(orig, data, leftLang);
        const rightCitation = headerCitationFor(orig, data, rightLang);
        const citationHtml = leftCitation || rightCitation
            ? `<span class="citation">${combinedCitationHeaderText(leftCitation, rightCitation)}</span>`
            : '';
        const controlsSource = data && data.__displaySourceVariants ? data : orig;
        const { selectHtml, secondarySelectHtml } = genHeaderControls(controlsSource, baseId, leftLang);
        const hasSelect = !!(selectHtml || secondarySelectHtml);
        return `<div class="part-header${hasSelect ? ' has-select' : ''}"><div><span class="part-title">${titleHtml}</span>${citationHtml}</div></div>${genHeaderSelectRow(selectHtml, secondarySelectHtml)}`;
    }

    // PC 모드에서 한 언어 칸에 들어갈 한 줄 HTML을 만듭니다.
    function genLineHTML(line, lang, baseId) {
        const lowerLang = lang.toLowerCase();
        const sp = line['sp_' + lowerLang] || '';
        let txt = line['text_' + lowerLang] || '';
        if (isLiturgicalPlaceholderText(txt)) txt = '';

        const otherLang = (lang === state.currentLoc) ? state.targetLang : state.currentLoc;
        let otherTxt = line['text_' + otherLang.toLowerCase()] || '';
        if (isLiturgicalPlaceholderText(otherTxt)) otherTxt = '';

        const rubric = line['rubric_' + lowerLang] || '';
        let html = '';
        if (rubric) html += `<span class="rubric">${rubric}</span>`;

        const suppressAiFallback = shouldSuppressAIFallbackForLine(line, baseId, lowerLang);
        if ((!txt || txt.trim() === '') && otherTxt && !suppressAiFallback) {
            const aiTxt = line['text_' + lowerLang + '_ai'];
            txt = makeAIButton(otherTxt, aiTxt, lang);
        }
        if ((!txt || txt.trim() === '') && !suppressAiFallback) {
            const aiTxt = line['text_' + lowerLang + '_ai'];
            const sourceText = fallbackSourceTextForLine(line, lowerLang, baseId);
            if (sourceText) txt = makeAIButton(sourceText, aiTxt, lang);
        }

        const hasNoContent = (!txt || txt.trim() === '') && (!sp || sp.trim() === '');
        const keepBlank = hasNoContent && shouldRenderBlankParagraph(line, lowerLang, baseId);

        if (!hasNoContent || keepBlank) {
            const roleClass = roleClassForLine(line, lowerLang);
            html += linePairHTML(sp, txt, lowerLang, roleClass, shouldSuppressSpeaker(baseId), keepBlank);
        }
        return html;
    }

    function setupOrientationPersistence() {
        const storageKey = `${STORAGE_PREFIX}orientationScroll`;
        const anchorSelector = '.part-container, .section-bar, .pair-line, .part-header';
        let lastPortrait = window.matchMedia ? window.matchMedia('(orientation: portrait)').matches : window.innerHeight >= window.innerWidth;
        let pendingSnapshot = null;
        let restoreTimer = null;

        const capture = () => {
            const elements = Array.from(document.querySelectorAll(anchorSelector));
            const probeY = Math.max(40, Math.min(window.innerHeight - 40, Math.round(window.innerHeight * 0.35)));
            const node = document.elementFromPoint(Math.round(window.innerWidth / 2), probeY);
            const anchor = node && node.closest ? node.closest(anchorSelector) : null;
            const index = anchor ? elements.indexOf(anchor) : -1;
            return {
                y: window.scrollY || document.documentElement.scrollTop || 0,
                index,
                offset: anchor ? anchor.getBoundingClientRect().top : 0
            };
        };

        const restore = snapshot => {
            if (!snapshot) return;
            const elements = Array.from(document.querySelectorAll(anchorSelector));
            const anchor = snapshot.index >= 0 ? elements[snapshot.index] : null;
            if (anchor) {
                window.scrollBy({ top: anchor.getBoundingClientRect().top - snapshot.offset, left: 0, behavior: 'auto' });
            } else {
                window.scrollTo({ top: snapshot.y || 0, left: 0, behavior: 'auto' });
            }
        };

        const scheduleRestore = () => {
            if (!pendingSnapshot) pendingSnapshot = capture();
            clearTimeout(restoreTimer);
            [80, 240, 600].forEach(delay => {
                setTimeout(() => restore(pendingSnapshot), delay);
            });
            restoreTimer = setTimeout(() => { pendingSnapshot = null; }, 900);
        };

        window.addEventListener('orientationchange', () => {
            pendingSnapshot = capture();
            scheduleRestore();
        }, { passive: true });

        window.addEventListener('resize', () => {
            const portrait = window.matchMedia ? window.matchMedia('(orientation: portrait)').matches : window.innerHeight >= window.innerWidth;
            if (portrait === lastPortrait) return;
            lastPortrait = portrait;
            pendingSnapshot = pendingSnapshot || capture();
            scheduleRestore();
        }, { passive: true });

        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', () => {
                if (pendingSnapshot) scheduleRestore();
            }, { passive: true });
        }

        window.addEventListener('pagehide', () => {
            writeStorageJSON(storageKey, capture());
        });
        window.addEventListener('pageshow', () => {
            const snapshot = readStorageJSON(storageKey);
            if (snapshot) setTimeout(() => restore(snapshot), 80);
        });
        if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    }

    function setupLiturgicalDateRolloverWatch() {
        const signature = () => {
            const context = getStrictDateContext(new Date());
            return [context.timeZone, formatDateIso(context.localDate), formatDateIso(context.date), context.navOffset || 0, context.navSlot || 'day'].join('|');
        };
        let lastSignature = signature();
        const refreshIfChanged = () => {
            const nextSignature = signature();
            if (nextSignature === lastSignature) return;
            lastSignature = nextSignature;
            state.liturgicalDateContext = null;
            fetchMassData();
        };
        setInterval(refreshIfChanged, 60000);
        window.addEventListener('focus', refreshIfChanged);
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) refreshIfChanged();
        });
    }

    function applyInitialSettingsToControls() {
        const gps = document.getElementById('set-gps');
        const location = document.getElementById('set-loc');
        const target = document.getElementById('set-target-lang');
        const source = document.getElementById('set-vn-source');
        const font = document.getElementById('set-font-size');
        const ui = document.getElementById('set-ui-lang');
        const stacked = document.getElementById('set-stacked');
        const manualLocationRow = document.getElementById('manual-loc-row');
        if (gps) gps.checked = !!state.useGps;
        if (location) location.value = state.selectedLocationCode || 'KR';
        if (target) target.value = state.targetLang || DEFAULT_TARGET_LANG;
        if (source) source.value = normalizeVietnameseReadingSource(state.vnReadingSource);
        if (font) font.value = state.fontSize || '18px';
        if (ui) ui.value = state.uiLang;
        if (stacked) stacked.checked = !!state.layoutStacked;
        if (manualLocationRow) manualLocationRow.style.display = state.useGps ? 'none' : 'flex';
        document.documentElement.style.setProperty('--font-size-base', state.fontSize || '18px');
        syncTargetLanguageOptions();
        syncVietnameseReadingSourceSelect();
        syncAuxPanelsWithSettings();
    }

    function restoreAndroidSavedStartupDecision() {
        if (!isAndroidAppRuntime() || !(initialAndroidSettings && initialAndroidSettings.consentAccepted)) return false;
        const modal = document.getElementById('consent-modal');
        if (modal) modal.style.display = 'none';
        document.body.classList.remove('consent-pending');
        startupNoticeDecision = true;
        if (resolveStartupNoticeDecision) resolveStartupNoticeDecision(true);
        return true;
    }

    // 초기 실행: 로컬/캐시 데이터로 먼저 렌더하고 GPS는 백그라운드에서 보정합니다.
    applyInitialSettingsToControls();
    restoreAndroidSavedStartupDecision();
    syncLocalizedChromeAndSettings();
    setupFloatingLiturgyBanner();
    setupOrientationPersistence();
    setupLiturgicalDateRolloverWatch();
    fetchMassData();
    simulateGPS();
