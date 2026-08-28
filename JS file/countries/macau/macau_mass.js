// Macau beta Mass module (Diocese of Macau jurisdiction).
(function registerMacauMass(global) {
  'use strict';
  global.countryMassData = global.countryMassData || {};
  const proper = (title, kr, rank = 'feast', color = 'white', data = {}) => ({ title, names: { EN: title, KR: kr }, rank, color, kind: 'diocesan-proper', data });
  const sourceProper = global.countryMassData.TW && global.countryMassData.TW.calendar['07-09'][0];
  const chineseMartyrs = Object.assign({}, sourceProper || {}, { title: 'The Holy Martyrs and Blessed of China', names: { EN: 'The Holy Martyrs and Blessed of China', KR: '중화의 거룩한 순교자들과 복자들 축일' }, rank: 'feast', color: 'red', kind: 'diocesan-proper' });
  global.countryMassData.MO = Object.freeze({
    schemaVersion: 1, jurisdiction: 'MO', jurisdictions: Object.freeze(['MO']),
    jurisdictionName: 'Macau', conferenceCalendar: 'Catholic Diocese of Macau', languageVariant: 'ZH-MO',
    ordinaryLanguage: 'EN', ordinary: global.countryMassData.US ? global.countryMassData.US.ordinary : Object.freeze([]), beta: true,
    source: Object.freeze({ title: 'Catholic Diocese of Macau liturgical calendar', url: 'https://www.catholic.org.mo/', calendarUrl: 'https://www.cdlmo.org/?page_id=939' }),
    dailyReadings: Object.freeze({ provider: 'Universalis (readings) + Macau diocesan calendar profile', officialUrl: 'https://www.catholic.org.mo/', url: dateKey => `https://universalis.com/L/${dateKey}/mass.htm` }),
    calendar: {
      '07-09': [chineseMartyrs],
      '09-08': [proper('The Nativity of the Blessed Virgin Mary, Titular Feast of the Cathedral', '복되신 동정 마리아 탄생 주교좌성당 주보 축일')],
      '12-03': [proper('Saint Francis Xavier, Patron of the Diocese of Macau', '마카오 교구 수호자 성 프란치스코 하비에르 축일')]
    }
  });
})(globalThis);
