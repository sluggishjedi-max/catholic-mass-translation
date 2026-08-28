// Thailand beta church directory data.
(function registerThailandChurches(global) {
  'use strict';
  global.countryChurchData = global.countryChurchData || {};
  global.countryChurchData.TH = {
    jurisdiction: 'TH',
    status: 'available',
    provider: 'official cathedral directory',
    entries: [{
      country: 'TH',
      name: 'Assumption Cathedral, Bangkok',
      aliases: ['อาสนวิหารอัสสัมชัญ', 'Bangkok Assumption Cathedral'],
      diocese: 'Archdiocese of Bangkok',
      address: '23 Soi Charoen Krung 40, Bang Rak, Bangkok 10500, Thailand',
      phone: '+66 2 237 5277',
      website: 'https://www.assumption-cathedral.com/',
      officialDioceseUrl: 'https://www.assumption-cathedral.com/',
      sourceUrl: 'https://www.assumption-cathedral.com/',
      sourceName: 'Assumption Cathedral Bangkok',
      sourceAuthority: 'Archdiocese of Bangkok',
      lat: 13.7249,
      lng: 100.5141
    }]
  };
  if (typeof global.rebuildCountryChurchDirectory === 'function') global.rebuildCountryChurchDirectory();
})(globalThis);
