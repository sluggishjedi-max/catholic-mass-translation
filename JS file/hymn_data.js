// Compatibility loader for pages created before country-owned data modules.
(function loadCountryHymnModules(global) {
  'use strict';
  if (global.countryHymnData && Array.isArray(global.ordoHymnData)) return;
  if (typeof document === 'undefined' || !document.currentScript) {
    throw new Error('Load the country-specific *_hymns.js modules before the application runtime.');
  }
  const base = new URL('countries/', document.currentScript.src);
  const modules = [
    'korea/korea_hymns.js',
    'vietnam/vietnam_hymns.js',
    'united_states/united_states_hymns.js',
    'japan/japan_hymns.js',
    'vatican/vatican_hymns.js'
  ];
  document.write(modules.map(file => `<script src="${new URL(file, base).href}"><\/script>`).join(''));
})(globalThis);
