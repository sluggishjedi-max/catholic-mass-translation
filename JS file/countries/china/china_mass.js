// Mainland China beta Mass module (Chinese Catholic Bishops' Conference jurisdiction).
(function registerChinaMass(global) {
  'use strict';
  global.countryMassData = global.countryMassData || {};
  const taiwanProper = global.countryMassData.TW && global.countryMassData.TW.calendar['07-09'][0];
  const chineseMartyrs = Object.assign({}, taiwanProper || {}, {
    title: 'The Holy Martyrs and Blessed of China',
    names: { EN: 'The Holy Martyrs and Blessed of China', KR: '중화의 거룩한 순교자들과 복자들 축일' },
    rank: 'feast', color: 'red', kind: 'national-proper'
  });
  global.countryMassData.CN = Object.freeze({
    schemaVersion: 1, jurisdiction: 'CN', jurisdictions: Object.freeze(['CN']),
    jurisdictionName: 'Mainland China', conferenceCalendar: 'Chinese Catholic Bishops’ Conference',
    languageVariant: 'ZH-CN', ordinaryLanguage: 'EN',
    ordinary: global.countryMassData.US ? global.countryMassData.US.ordinary : Object.freeze([]), beta: true,
    source: Object.freeze({ title: 'Chinese Roman Missal and national liturgical calendar', url: 'https://wanyouzhenyuan.cn/index.php?a=content&id=48304&m=news' }),
    dailyReadings: Object.freeze({ provider: 'Universalis (readings) + Mainland China calendar profile', officialUrl: 'https://wanyouzhenyuan.cn/', url: dateKey => `https://universalis.com/L/${dateKey}/mass.htm` }),
    calendar: { '07-09': [chineseMartyrs] }
  });
})(globalThis);
