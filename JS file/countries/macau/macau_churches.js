// Macau beta church directory data.
(function registerMacauChurches(global) {
  'use strict';
  global.countryChurchData = global.countryChurchData || {};
  global.countryChurchData.MO = {
    jurisdiction: 'MO',
    status: 'available',
    provider: 'official diocesan directory',
    entries: [{
      country: 'MO',
      name: 'Cathedral of the Nativity of Our Lady, Macau',
      aliases: ['主教座堂', '澳門主教座堂', 'Sé Catedral de Macau'],
      diocese: 'Diocese of Macau',
      address: 'No. 1 Cathedral Square, Macau',
      phone: '+853 2837 3643',
      website: 'https://www.semacau.org/',
      officialDioceseUrl: 'https://www.catholic.org.mo/',
      sourceUrl: 'https://www.catholic.org.mo/pt/page-16',
      sourceName: 'Diocese of Macau church and Mass directory',
      sourceAuthority: 'Diocese of Macau',
      lat: 22.1934,
      lng: 113.5414
    }]
  };
  if (typeof global.rebuildCountryChurchDirectory === 'function') global.rebuildCountryChurchDirectory();
})(globalThis);
