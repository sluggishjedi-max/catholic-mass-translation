// Scotland cathedral seed data for the nearby-church tab.
(function registerScotlandChurches(global) {
  'use strict';
  global.countryChurchData = global.countryChurchData || {};
  global.countryChurchData['GB-SCT'] = {
    jurisdiction: 'GB-SCT',
    status: 'available',
    provider: 'official cathedral and diocesan directories / Google Places',
    entries: [
      {
        country: 'GB-SCT', name: 'St Mary’s Metropolitan Cathedral, Edinburgh', aliases: ['St Mary’s Cathedral Edinburgh', 'Edinburgh Catholic Cathedral'],
        diocese: 'Archdiocese of St Andrews and Edinburgh', address: '61 York Place, Edinburgh, EH1 3JD, Scotland', phone: '+44 131 556 1798',
        website: 'https://www.stmaryscathedral.co.uk/', officialDioceseUrl: 'https://archedinburgh.org/parish/city-centre-st-marys-metropolitan-cathedral/',
        sourceUrl: 'https://www.scotscollege.org/scottish-dioceses', sourceName: 'Scottish dioceses directory', sourceAuthority: 'Pontifical Scots College',
        lat: 55.9573, lng: -3.1877, showOnMap: true
      },
      {
        country: 'GB-SCT', name: 'St Andrew’s Metropolitan Cathedral, Glasgow', aliases: ['Glasgow Metropolitan Cathedral', 'St Andrew’s Cathedral Glasgow'],
        diocese: 'Archdiocese of Glasgow', address: '196 Clyde Street, Glasgow, G1 4JY, Scotland', phone: '+44 141 204 2409',
        website: 'https://www.cathedralg1.org/', officialDioceseUrl: 'https://www.rcag.org.uk/',
        sourceUrl: 'https://www.scotscollege.org/scottish-dioceses', sourceName: 'Scottish dioceses directory', sourceAuthority: 'Pontifical Scots College',
        lat: 55.8554, lng: -4.2466, showOnMap: true
      },
      {
        country: 'GB-SCT', name: 'St Mary of the Assumption Cathedral, Aberdeen', aliases: ['St Mary’s Cathedral Aberdeen', 'Aberdeen Catholic Cathedral'],
        diocese: 'Diocese of Aberdeen', address: '20 Huntly Street, Aberdeen, AB10 1SH, Scotland', phone: '+44 1224 640160',
        website: 'https://www.stmaryscathedralaberdeen.org/', officialDioceseUrl: 'https://www.rcda.scot/aberdeen-city/',
        sourceUrl: 'https://www.scotscollege.org/scottish-dioceses', sourceName: 'Scottish dioceses directory', sourceAuthority: 'Pontifical Scots College',
        lat: 57.1465, lng: -2.1032, showOnMap: true
      },
      {
        country: 'GB-SCT', name: 'St Andrew’s Cathedral, Dundee', aliases: ['Dundee Catholic Cathedral', 'Cathedral Church of St Andrew Dundee'],
        diocese: 'Diocese of Dunkeld', address: '150 Nethergate, Dundee, DD1 4EA, Scotland', phone: '+44 1382 225228',
        website: 'https://www.standrewscathedraldundee.com/', officialDioceseUrl: 'https://www.dunkelddiocese.co.uk/',
        sourceUrl: 'https://www.scotscollege.org/scottish-dioceses', sourceName: 'Scottish dioceses directory', sourceAuthority: 'Pontifical Scots College',
        lat: 56.4599, lng: -2.9751, showOnMap: true
      },
      {
        country: 'GB-SCT', name: 'St Mirin’s Cathedral, Paisley', aliases: ['Paisley Cathedral', 'St Mirin Cathedral'],
        diocese: 'Diocese of Paisley', address: 'Incle Street, Paisley, PA1 1HR, Scotland', phone: '+44 141 889 2404',
        website: 'https://www.stmirinscathedral.co.uk/', officialDioceseUrl: 'https://rcdop.org.uk/',
        sourceUrl: 'https://www.scotscollege.org/scottish-dioceses', sourceName: 'Scottish dioceses directory', sourceAuthority: 'Pontifical Scots College',
        lat: 55.8466, lng: -4.4183, showOnMap: true
      },
      {
        country: 'GB-SCT', name: 'Our Lady of Good Aid Cathedral, Motherwell', aliases: ['Motherwell Cathedral', 'Cathedral of Our Lady of Good Aid'],
        diocese: 'Diocese of Motherwell', address: '31 Coursington Road, Motherwell, ML1 1PP, Scotland', phone: '+44 1698 263045',
        website: 'https://www.motherwell-cathedral.co.uk/', officialDioceseUrl: 'https://www.rcdom.org.uk/',
        sourceUrl: 'https://www.scotscollege.org/scottish-dioceses', sourceName: 'Scottish dioceses directory', sourceAuthority: 'Pontifical Scots College',
        lat: 55.7892, lng: -3.9917, showOnMap: true
      }
    ]
  };
  if (typeof global.rebuildCountryChurchDirectory === 'function') global.rebuildCountryChurchDirectory();
})(globalThis);
