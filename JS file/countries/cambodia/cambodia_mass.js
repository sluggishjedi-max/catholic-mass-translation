// Cambodia beta Mass module (Cambodian episcopal jurisdictions).
(function registerCambodiaMass(global) {
  'use strict';
  global.countryMassData = global.countryMassData || {};
  global.countryMassData.KH = Object.freeze({
    schemaVersion: 1, jurisdiction: 'KH', jurisdictions: Object.freeze(['KH']),
    jurisdictionName: 'Cambodia', conferenceCalendar: 'Catholic Church in Cambodia',
    ordinaryLanguage: 'EN', ordinary: global.countryMassData.US ? global.countryMassData.US.ordinary : Object.freeze([]), beta: true,
    source: Object.freeze({ title: 'Catholic Church in Cambodia liturgical calendar', url: 'https://catholicfaithcambodia.org/liturgical-calendar/', orderUrl: 'https://catholicfaithcambodia.org/liturgy/the-order-of-mass/' }),
    dailyReadings: Object.freeze({ provider: 'Universalis (readings) + Cambodia calendar profile', officialUrl: 'https://catholicfaithcambodia.org/liturgical-calendar/', url: dateKey => `https://universalis.com/L/${dateKey}/mass.htm` }),
    calendar: {}
  });
})(globalThis);
