// Shared England and Wales Catholic cathedral directory seed data.
(function registerEnglandWalesChurches(global) {
  'use strict';
  global.countryChurchData = global.countryChurchData || {};
  const moduleData = {
    jurisdiction: 'GB-EW',
    jurisdictions: ['GB-ENG', 'GB-WLS'],
    status: 'available',
    provider: 'CBCEW and official diocesan directories / Google Places',
    entries: [
      {
        country: 'GB-ENG', name: 'Westminster Cathedral', aliases: ['Metropolitan Cathedral of the Most Precious Blood', 'Westminster Catholic Cathedral'],
        diocese: 'Archdiocese of Westminster', address: 'Victoria Street, London, SW1P 1LT, England', phone: '+44 20 7798 9055',
        website: 'https://westminstercathedral.org.uk/', officialDioceseUrl: 'https://rcdow.org.uk/venue/westminster-cathedral/',
        sourceUrl: 'https://www.cbcew.org.uk/diocese', sourceName: 'CBCEW diocesan directory', sourceAuthority: 'Catholic Bishops’ Conference of England and Wales',
        lat: 51.4961, lng: -0.1397, showOnMap: true
      },
      {
        country: 'GB-ENG', name: 'Metropolitan Cathedral of Christ the King', aliases: ['Liverpool Metropolitan Cathedral', 'Liverpool Catholic Cathedral'],
        diocese: 'Archdiocese of Liverpool', address: 'Mount Pleasant, Liverpool, L3 5TQ, England', phone: '+44 151 709 9222',
        website: 'https://liverpoolmetrocathedral.org.uk/', officialDioceseUrl: 'https://www.liverpoolcatholic.org.uk/',
        sourceUrl: 'https://www.cbcew.org.uk/diocese', sourceName: 'CBCEW diocesan directory', sourceAuthority: 'Catholic Bishops’ Conference of England and Wales',
        lat: 53.4048, lng: -2.9680, showOnMap: true
      },
      {
        country: 'GB-ENG', name: 'St Chad’s Cathedral', aliases: ['Cathedral Church of St Chad Birmingham', 'Birmingham Catholic Cathedral'],
        diocese: 'Archdiocese of Birmingham', address: 'St Chad’s Queensway, Birmingham, B4 6EU, England', phone: '+44 121 236 2251',
        website: 'https://www.stchadscathedral.org.uk/', officialDioceseUrl: 'https://www.birminghamdiocese.org.uk/',
        sourceUrl: 'https://www.cbcew.org.uk/diocese', sourceName: 'CBCEW diocesan directory', sourceAuthority: 'Catholic Bishops’ Conference of England and Wales',
        lat: 52.4853, lng: -1.8987, showOnMap: true
      },
      {
        country: 'GB-ENG', name: 'St George’s Cathedral, Southwark', aliases: ['Metropolitan Cathedral Church of St George Southwark'],
        diocese: 'Archdiocese of Southwark', address: 'Lambeth Road, London, SE1 6HR, England', phone: '+44 20 7928 5256',
        website: 'https://www.stgeorgescathedral.org.uk/', officialDioceseUrl: 'https://www.rcaos.org.uk/',
        sourceUrl: 'https://www.cbcew.org.uk/diocese', sourceName: 'CBCEW diocesan directory', sourceAuthority: 'Catholic Bishops’ Conference of England and Wales',
        lat: 51.4982, lng: -0.1076, showOnMap: true
      },
      {
        country: 'GB-WLS', name: 'St David’s Metropolitan Cathedral, Cardiff', aliases: ['Cardiff Metropolitan Cathedral', 'St David’s Cathedral Cardiff'],
        diocese: 'Archdiocese of Cardiff-Menevia', address: 'Charles Street, Cardiff, CF10 2SF, Wales', phone: '+44 29 2023 1407',
        website: 'https://cardiffcathedral.org.uk/', officialDioceseUrl: 'https://rcadc.org/',
        sourceUrl: 'https://www.cbcew.org.uk/diocese', sourceName: 'CBCEW diocesan directory', sourceAuthority: 'Catholic Bishops’ Conference of England and Wales',
        lat: 51.4815, lng: -3.1740, showOnMap: true
      },
      {
        country: 'GB-WLS', name: 'St Joseph’s Cathedral, Swansea', aliases: ['Swansea Cathedral', 'Cathedral Church of St Joseph Swansea'],
        diocese: 'Archdiocese of Cardiff-Menevia', address: 'Convent Street, Swansea, SA1 2BX, Wales', phone: '+44 1792 652683',
        website: 'https://www.meneviacathedral.org/', officialDioceseUrl: 'https://rcadc.org/',
        sourceUrl: 'https://www.cbcew.org.uk/diocese', sourceName: 'CBCEW diocesan directory', sourceAuthority: 'Catholic Bishops’ Conference of England and Wales',
        lat: 51.6298, lng: -3.9432, showOnMap: true
      },
      {
        country: 'GB-WLS', name: 'St Mary’s Cathedral, Wrexham', aliases: ['Wrexham Cathedral', 'Cathedral Church of Our Lady of Sorrows'],
        diocese: 'Diocese of Wrexham', address: 'Regent Street, Wrexham, LL11 1RB, Wales', phone: '+44 1978 263943',
        website: 'https://www.wrexhamcathedral.org.uk/', officialDioceseUrl: 'https://www.rcdwxm.org.uk/',
        sourceUrl: 'https://www.cbcew.org.uk/diocese', sourceName: 'CBCEW diocesan directory', sourceAuthority: 'Catholic Bishops’ Conference of England and Wales',
        lat: 53.0466, lng: -2.9985, showOnMap: true
      }
    ]
  };
  global.countryChurchData['GB-EW'] = moduleData;
  global.countryChurchData['GB-ENG'] = moduleData;
  global.countryChurchData['GB-WLS'] = moduleData;
  if (typeof global.rebuildCountryChurchDirectory === 'function') global.rebuildCountryChurchDirectory();
})(globalThis);
