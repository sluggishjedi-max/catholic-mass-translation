// Shared England and Wales official-prayer placeholder.
(function registerEnglandWalesPrayers(global) {
  'use strict';
  global.countryPrayerData = global.countryPrayerData || {};
  const moduleData = Object.freeze({
    schemaVersion: 1,
    jurisdiction: 'GB-EW',
    jurisdictions: Object.freeze(['GB-ENG', 'GB-WLS']),
    status: 'under-development',
    statusLabels: Object.freeze({ KR: '(제작중)', EN: '(Under development)' }),
    entries: Object.freeze([])
  });
  global.countryPrayerData['GB-ENG'] = moduleData;
  global.countryPrayerData['GB-WLS'] = moduleData;
})(globalThis);
