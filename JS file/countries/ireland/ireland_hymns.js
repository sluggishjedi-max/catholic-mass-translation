// All-island Irish hymn module (Republic of Ireland and Northern Ireland).
(function () {
    'use strict';
    if (!globalThis.countryHymnData || typeof globalThis.countryHymnData !== 'object') globalThis.countryHymnData = {};
    globalThis.countryHymnData.IE = Object.freeze({
        schemaVersion: 1,
        jurisdiction: 'IE',
        jurisdictions: Object.freeze(['IE', 'GB-NIR']),
        status: 'under-development',
        statusLabels: Object.freeze({ KR: '(제작중)', EN: '(Under development)' }),
        entries: Object.freeze([])
    });
})();
