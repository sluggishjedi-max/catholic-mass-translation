// All-island Irish official-prayer module (Republic of Ireland and Northern Ireland).
(function () {
    'use strict';
    if (!globalThis.countryPrayerData || typeof globalThis.countryPrayerData !== 'object') globalThis.countryPrayerData = {};
    globalThis.countryPrayerData.IE = Object.freeze({
        schemaVersion: 1,
        jurisdiction: 'IE',
        jurisdictions: Object.freeze(['IE', 'GB-NIR']),
        status: 'under-development',
        statusLabels: Object.freeze({ KR: '(제작중)', EN: '(Under development)' }),
        entries: Object.freeze([])
    });
})();
