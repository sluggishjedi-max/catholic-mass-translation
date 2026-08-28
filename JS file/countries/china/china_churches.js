// Mainland China beta church directory data.
(function registerChinaChurches(global) {
  'use strict';
  global.countryChurchData = global.countryChurchData || {};
  global.countryChurchData.CN = {
    jurisdiction: 'CN',
    status: 'available',
    provider: 'official public directory',
    entries: [{
      country: 'CN',
      name: 'Cathedral of the Immaculate Conception, Beijing',
      aliases: ['北京宣武门天主堂', '南堂', 'Beijing South Cathedral', 'Xuanwumen Catholic Church'],
      diocese: 'Diocese of Beijing',
      address: 'No. 141 Qianmen West Street, Xicheng District, Beijing, China',
      sourceUrl: 'https://english.visitbeijing.com.cn/article/47ONLP1aQJ9',
      sourceName: 'Beijing Municipal Culture and Tourism Bureau',
      sourceAuthority: 'Beijing Municipal Culture and Tourism Bureau',
      lat: 39.8992,
      lng: 116.3742
    }]
  };
  if (typeof global.rebuildCountryChurchDirectory === 'function') global.rebuildCountryChurchDirectory();
})(globalThis);
