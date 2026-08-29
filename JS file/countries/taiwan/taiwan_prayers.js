// Taiwan prayer module placeholder.
(function registerTaiwanPrayers(global) {
  'use strict';
  global.countryPrayerData = global.countryPrayerData || {};
  global.countryPrayerData.TW = Object.freeze({
    schemaVersion: 1,
    jurisdiction: 'TW',
    jurisdictions: Object.freeze(['TW']),
    status: 'under-development',
    statusLabels: Object.freeze({ KR: '(제작중)', ZH: '(製作中)', EN: '(Under development)' }),
    entries: Object.freeze([])
  });
})(globalThis);
