// Compatibility loader for pages created before country-owned data modules.
(function loadCountryMassModules(global) {
  'use strict';
  if (global.ordoMissaDataApi && Array.isArray(global.missaData)) return;
  if (typeof document === 'undefined' || !document.currentScript) {
    throw new Error('Load the country-specific *_mass.js modules before the application runtime.');
  }
  const base = new URL('countries/', document.currentScript.src);
  const modules = [
    'korea/korea_mass.js',
    'vietnam/vietnam_mass.js',
    'united_states/united_states_mass.js',
    'japan/japan_mass.js',
    'vatican/vatican_mass.js'
  ];
  document.write(modules.map(file => `<script src="${new URL(file, base).href}"><\/script>`).join(''));
})(globalThis);
