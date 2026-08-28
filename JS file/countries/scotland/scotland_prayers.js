// Scotland official-prayer placeholder.
(function registerScotlandPrayers(global) {
  'use strict';
  global.countryPrayerData = global.countryPrayerData || {};
  global.countryPrayerData['GB-SCT'] = Object.freeze({
    schemaVersion: 1,
    jurisdiction: 'GB-SCT',
    status: 'under-development',
    statusLabels: Object.freeze({ KR: '(제작중)', EN: '(Under development)' }),
    entries: Object.freeze([])
  });
})(globalThis);
