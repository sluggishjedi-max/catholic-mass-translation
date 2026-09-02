(function registerItalyPrayers(global) {
  'use strict';
  global.countryPrayerData = global.countryPrayerData || {};
  global.countryPrayerData.IT = Object.freeze({
    schemaVersion: 1,
    jurisdiction: 'IT',
    jurisdictions: Object.freeze(['IT']),
    status: 'under-development',
    statusLabels: Object.freeze({ KR: '(제작중)', EN: '(Under development)', ZH: '(製作中)', IT: '(In preparazione)' }),
    entries: Object.freeze([])
  });
})(globalThis);
