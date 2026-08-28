// Hong Kong beta Mass module (Catholic Diocese of Hong Kong jurisdiction).
(function registerHongKongMass(global) {
  'use strict';
  global.countryMassData = global.countryMassData || {};
  const sourceProper = global.countryMassData.TW && global.countryMassData.TW.calendar['07-09'][0];
  const chineseMartyrs = Object.assign({}, sourceProper || {}, { title: 'The Holy Martyrs and Blessed of China', names: { EN: 'The Holy Martyrs and Blessed of China', KR: '중화의 거룩한 순교자들과 복자들 축일' }, rank: 'feast', color: 'red', kind: 'diocesan-proper' });
  global.countryMassData.HK = Object.freeze({
    schemaVersion: 1, jurisdiction: 'HK', jurisdictions: Object.freeze(['HK']),
    jurisdictionName: 'Hong Kong', conferenceCalendar: 'Catholic Diocese of Hong Kong', languageVariant: 'ZH-HK',
    ordinaryLanguage: 'EN', ordinary: global.countryMassData.US ? global.countryMassData.US.ordinary : Object.freeze([]), beta: true,
    source: Object.freeze({ title: 'Catholic Diocese of Hong Kong liturgical calendar and Missal', url: 'https://slmedia.org/ch/blog/connect', properUrl: 'https://smc.catholic.org.hk/holy_martyrs_and_blesseds_of_china/' }),
    dailyReadings: Object.freeze({ provider: 'Universalis (readings) + Hong Kong diocesan calendar profile', officialUrl: 'https://slmedia.org/ch/blog/connect', url: dateKey => `https://universalis.com/L/${dateKey}/mass.htm` }),
    calendar: { '07-09': [chineseMartyrs] }
  });
})(globalThis);
