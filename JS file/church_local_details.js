// Compatibility loader for pages created before country-owned data modules.
(function loadCountryChurchModules(global) {
  'use strict';
  if (global.countryChurchData && Array.isArray(global.churchLocalDetailRecords)) return;
  if (typeof document === 'undefined' || !document.currentScript) {
    throw new Error('Load the country-specific *_churches.js modules before the application runtime.');
  }
  const base = new URL('countries/', document.currentScript.src);
  const modules = [
    'korea/korea_churches.js',
    'vietnam/vietnam_churches.js',
    'united_states/united_states_churches.js',
    'japan/japan_churches.js',
    'vatican/vatican_churches.js'
  ];
  document.write(modules.map(file => `<script src="${new URL(file, base).href}"><\/script>`).join(''));
})(globalThis);
