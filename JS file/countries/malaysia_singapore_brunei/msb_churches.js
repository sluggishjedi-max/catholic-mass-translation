// CBCMSB beta church directory data for Singapore, Malaysia, and Brunei.
(function registerCbcmsbChurches(global) {
  'use strict';
  global.countryChurchData = global.countryChurchData || {};
  global.countryChurchData.SG = {
    jurisdiction: 'SG',
    conference: 'CBCMSB',
    status: 'available',
    provider: 'official cathedral directory',
    entries: [{
      country: 'SG',
      name: 'Cathedral of the Good Shepherd',
      aliases: ['Good Shepherd Cathedral Singapore'],
      diocese: 'Archdiocese of Singapore',
      address: 'A Queen Street, Singapore 188533',
      phone: '+65 6337 2036',
      website: 'https://cathedral.catholic.sg/',
      officialDioceseUrl: 'https://www.catholic.sg/',
      sourceUrl: 'https://cathedral.catholic.sg/',
      sourceName: 'Cathedral of the Good Shepherd',
      sourceAuthority: 'Archdiocese of Singapore',
      lat: 1.2963,
      lng: 103.8515
    }]
  };
  global.countryChurchData.MY = {
    jurisdiction: 'MY',
    conference: 'CBCMSB',
    status: 'available',
    provider: 'official cathedral directory',
    entries: [{
      country: 'MY',
      name: 'Cathedral of Saint John the Evangelist, Kuala Lumpur',
      aliases: ['St John Cathedral Kuala Lumpur', 'Katedral St. John Kuala Lumpur'],
      diocese: 'Archdiocese of Kuala Lumpur',
      address: '5 Jalan Bukit Nanas, 50250 Kuala Lumpur, Malaysia',
      phone: '+60 3 2078 1876',
      website: 'https://www.stjohnkl.com.my/',
      officialDioceseUrl: 'https://www.archkl.org/',
      sourceUrl: 'https://www.stjohnkl.com.my/first-time-here',
      sourceName: 'Cathedral of Saint John Kuala Lumpur',
      sourceAuthority: 'Archdiocese of Kuala Lumpur',
      lat: 3.1550,
      lng: 101.6992
    }]
  };
  global.countryChurchData.BN = {
    jurisdiction: 'BN',
    conference: 'CBCMSB',
    status: 'available',
    provider: 'official vicariate directory',
    entries: [{
      country: 'BN',
      name: 'Church of Our Lady of the Assumption',
      aliases: ['Our Lady of the Assumption Bandar Seri Begawan', 'Church of OLA Brunei'],
      diocese: 'Apostolic Vicariate of Brunei Darussalam',
      address: 'No. 11, Jalan Kumbang Pasang, Bandar Seri Begawan BA1512, Brunei',
      phone: '+673 222 2261',
      website: 'https://rcvbd.com/',
      officialDioceseUrl: 'https://rcvbd.com/home/',
      sourceUrl: 'https://rcvbd.com/home/',
      sourceName: 'Roman Catholic Vicariate of Brunei Darussalam',
      sourceAuthority: 'Apostolic Vicariate of Brunei Darussalam',
      lat: 4.8959,
      lng: 114.9423
    }]
  };
  if (typeof global.rebuildCountryChurchDirectory === 'function') global.rebuildCountryChurchDirectory();
})(globalThis);
