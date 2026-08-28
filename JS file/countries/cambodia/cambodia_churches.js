// Cambodia beta church directory data.
(function registerCambodiaChurches(global) {
  'use strict';
  global.countryChurchData = global.countryChurchData || {};
  global.countryChurchData.KH = {
    jurisdiction: 'KH',
    status: 'available',
    provider: 'official parish directory',
    entries: [{
      country: 'KH',
      name: 'Saint Joseph Catholic Church, Phnom Penh',
      aliases: ['St Joseph Church Phnom Penh', 'ព្រះវិហារសន្តយ៉ូសែប'],
      diocese: 'Apostolic Vicariate of Phnom Penh',
      address: 'National Road 5, Phnom Penh, Cambodia',
      website: 'https://stjosephcatholicchurchppn.org/',
      officialDioceseUrl: 'https://catholiccambodia.org/?lang=en&page_id=11710',
      sourceUrl: 'https://stjosephcatholicchurchppn.org/mass.html',
      sourceName: 'Saint Joseph Catholic Church Phnom Penh',
      sourceAuthority: 'Apostolic Vicariate of Phnom Penh',
      lat: 11.5941,
      lng: 104.9150
    }]
  };
  if (typeof global.rebuildCountryChurchDirectory === 'function') global.rebuildCountryChurchDirectory();
})(globalThis);
