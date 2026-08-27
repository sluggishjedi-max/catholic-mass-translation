// Compatibility loader for pages created before country-owned data modules.
(function loadCountryPrayerModules(global) {
  'use strict';
  if (global.countryPrayerData && global.ordoPrayerDataApi) return;
  if (typeof document === 'undefined' || !document.currentScript) {
    throw new Error('Load the country-specific *_prayers.js modules before the application runtime.');
  }
  const base = new URL('countries/', document.currentScript.src);
  const modules = [
    'korea/korea_prayers.js',
    'vietnam/vietnam_prayers.js',
    'united_states/united_states_prayers.js',
    'japan/japan_prayers.js',
    'vatican/vatican_prayers.js'
  ];
  document.write(modules.map(file => `<script src="${new URL(file, base).href}"><\/script>`).join(''));
})(globalThis);
