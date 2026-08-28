// Hong Kong beta church directory data.
(function registerHongKongChurches(global) {
  'use strict';
  global.countryChurchData = global.countryChurchData || {};
  global.countryChurchData.HK = {
    jurisdiction: 'HK',
    status: 'available',
    provider: 'official diocesan directory',
    entries: [{
      country: 'HK',
      name: 'Cathedral of the Immaculate Conception, Hong Kong',
      aliases: ['聖母無原罪主教座堂', '香港天主教主教座堂'],
      diocese: 'Catholic Diocese of Hong Kong',
      address: '16 Caine Road, Mid-Levels, Hong Kong',
      phone: '+852 2522 8212',
      website: 'https://cathedral.catholic.org.hk/',
      officialDioceseUrl: 'https://jubilee2025.catholic.org.hk/en/%E8%81%96%E6%AF%8D%E7%84%A1%E5%8E%9F%E7%BD%AA%E4%B8%BB%E6%95%99%E5%BA%A7%E5%A0%82/',
      sourceUrl: 'https://jubilee2025.catholic.org.hk/en/%E8%81%96%E6%AF%8D%E7%84%A1%E5%8E%9F%E7%BD%AA%E4%B8%BB%E6%95%99%E5%BA%A7%E5%A0%82/',
      sourceName: 'Catholic Diocese of Hong Kong Jubilee church directory',
      sourceAuthority: 'Catholic Diocese of Hong Kong',
      lat: 22.2802,
      lng: 114.1545
    }]
  };
  if (typeof global.rebuildCountryChurchDirectory === 'function') global.rebuildCountryChurchDirectory();
})(globalThis);
