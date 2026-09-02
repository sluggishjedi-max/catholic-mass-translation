// Brazil prayer-book module placeholder (Beta).
(function registerBrazilPrayers(global) {
  'use strict';
  global.countryPrayerData = global.countryPrayerData || {};
  global.countryPrayerData.BR = Object.freeze({
    schemaVersion: 1,
    jurisdiction: 'BR',
    jurisdictions: Object.freeze(['BR']),
    conference: 'Conferência Nacional dos Bispos do Brasil (CNBB)',
    language: 'PT',
    beta: true,
    status: 'under-development',
    entries: Object.freeze([])
  });
})(globalThis);
