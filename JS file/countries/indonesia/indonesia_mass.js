// Indonesia beta Mass module (KWI jurisdiction).
(function registerIndonesiaMass(global) {
  'use strict';
  global.countryMassData = global.countryMassData || {};
  const title = 'Independence Day of the Republic of Indonesia';
  global.countryMassData.ID = Object.freeze({
    schemaVersion: 1, jurisdiction: 'ID', jurisdictions: Object.freeze(['ID']),
    jurisdictionName: 'Indonesia', conferenceCalendar: 'Konferensi Waligereja Indonesia',
    ordinaryLanguage: 'EN', ordinary: global.countryMassData.US ? global.countryMassData.US.ordinary : Object.freeze([]), beta: true,
    source: Object.freeze({ title: 'Kalender Liturgi Indonesia', url: 'https://imankatolik.or.id/kalenderliturgi.html', dailyUrl: 'https://mobile.imankatolik.or.id/' }),
    dailyReadings: Object.freeze({ provider: 'Universalis', calendar: 'Asia - Indonesia', translation: 'Jerusalem Bible', url: dateKey => `https://universalis.com/L/asia.indonesia/${dateKey}/mass.htm` }),
    calendar: { '08-17': [{ title, names: { EN: title, KR: '인도네시아 독립 기념일 대축일' }, rank: 'solemnity', color: 'white', kind: 'national-proper', data: {} }] }
  });
})(globalThis);
