// Thailand beta Mass module (CBCT jurisdiction).
(function registerThailandMass(global) {
  'use strict';
  global.countryMassData = global.countryMassData || {};
  const proper = (title, kr) => ({ title, names: { EN: title, KR: kr }, rank: 'optional', color: 'red', kind: 'national-proper', data: {} });
  global.countryMassData.TH = Object.freeze({
    schemaVersion: 1, jurisdiction: 'TH', jurisdictions: Object.freeze(['TH']),
    jurisdictionName: 'Thailand', conferenceCalendar: 'Catholic Bishops’ Conference of Thailand',
    ordinaryLanguage: 'EN', ordinary: global.countryMassData.US ? global.countryMassData.US.ordinary : Object.freeze([]), beta: true,
    source: Object.freeze({ title: 'CBCT liturgical calendar', url: 'https://www.cbct.or.th/', calendarUrl: 'https://gcatholic.org/calendar/2026/TH-en' }),
    dailyReadings: Object.freeze({ provider: 'Universalis (readings) + Thailand calendar profile', officialUrl: 'https://www.cbct.or.th/', url: dateKey => `https://universalis.com/L/${dateKey}/mass.htm` }),
    calendar: {
      '01-12': [proper('Blessed Nicholas Bunkerd Kitbamrung, Priest and Martyr', '복자 니콜라오 분껏 끄릿밤룽 사제 순교자')],
      '12-16': [proper('Blessed Martyrs of Songkhon', '송콘의 복자 순교자들')]
    }
  });
})(globalThis);
