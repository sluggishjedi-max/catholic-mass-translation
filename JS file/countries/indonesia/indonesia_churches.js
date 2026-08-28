// Indonesia beta church directory data.
(function registerIndonesiaChurches(global) {
  'use strict';
  global.countryChurchData = global.countryChurchData || {};
  global.countryChurchData.ID = {
    jurisdiction: 'ID',
    status: 'available',
    provider: 'official archdiocesan directory',
    entries: [{
      country: 'ID',
      name: 'Gereja Katedral Santa Maria Diangkat ke Surga',
      aliases: ['Jakarta Cathedral', 'Katedral Jakarta', 'Cathedral of Our Lady of the Assumption'],
      diocese: 'Archdiocese of Jakarta',
      address: 'Jl. Katedral No. 7B, Pasar Baru, Sawah Besar, Jakarta Pusat, Indonesia',
      phone: '+62 21 3519186',
      website: 'https://katedraljakarta.or.id/',
      officialDioceseUrl: 'https://www.kaj.or.id/paroki/dekenat-jakarta-pusat/paroki-katedral-st-maria-diangkat-ke-surga',
      sourceUrl: 'https://www.kaj.or.id/paroki/dekenat-jakarta-pusat/paroki-katedral-st-maria-diangkat-ke-surga',
      sourceName: 'Archdiocese of Jakarta parish directory',
      sourceAuthority: 'Archdiocese of Jakarta',
      lat: -6.1692,
      lng: 106.8336
    }]
  };
  if (typeof global.rebuildCountryChurchDirectory === 'function') global.rebuildCountryChurchDirectory();
})(globalThis);
