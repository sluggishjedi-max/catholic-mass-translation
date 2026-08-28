// Philippines beta church directory data.
(function registerPhilippinesChurches(global) {
  'use strict';
  global.countryChurchData = global.countryChurchData || {};
  global.countryChurchData.PH = {
    jurisdiction: 'PH',
    status: 'available',
    provider: 'official cathedral directory',
    entries: [{
      country: 'PH',
      name: 'Minor Basilica and Metropolitan Cathedral of the Immaculate Conception',
      aliases: ['Manila Cathedral', 'Manila Metropolitan Cathedral-Basilica'],
      diocese: 'Archdiocese of Manila',
      address: 'Cabildo corner Beaterio Streets, Intramuros, Manila, Philippines',
      phone: '+63 2 8527 3093',
      website: 'https://www.manilacathedral.com.ph/',
      officialDioceseUrl: 'https://rcam.org/',
      sourceUrl: 'https://www.manilacathedral.com.ph/',
      sourceName: 'Manila Cathedral',
      sourceAuthority: 'Archdiocese of Manila',
      lat: 14.5915,
      lng: 120.9737
    }]
  };
  if (typeof global.rebuildCountryChurchDirectory === 'function') global.rebuildCountryChurchDirectory();
})(globalThis);
