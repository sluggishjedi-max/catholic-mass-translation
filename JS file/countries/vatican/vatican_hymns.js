// Country-owned hymn data. Generated from the former multilingual bundle.
(function registerCountryHymns(global) {
  'use strict';
  global.countryHymnData = global.countryHymnData || {};
  global.countryHymnData["VA"] = {
    jurisdiction: "VA",
    language: "LA",
    status: "under-development",
    entries: []
  };

  const order = ['KR', 'VN', 'US', 'JP', 'VA', 'IE'];
  const allEntries = order.flatMap(key => {
    const module = global.countryHymnData[key];
    return module && Array.isArray(module.entries) ? module.entries : [];
  });
  global.hymnData = allEntries;
  global.ordoHymnData = allEntries;
})(globalThis);
