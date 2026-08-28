// Shared beta Mass module for the CBCMSB jurisdictions.
(function registerCbcmsbMass(global) {
  'use strict';
  global.countryMassData = global.countryMassData || {};
  const ordinary = global.countryMassData.US ? global.countryMassData.US.ordinary : Object.freeze([]);
  const proper = (title, kr, rank = 'memorial', color = 'red') => ({ title, names: { EN: title, KR: kr }, rank, color, kind: 'conference-proper', data: {} });
  const shared = { '06-19': [proper('Saint Philip Minh, Priest, and Companions, Martyrs', '성 필립 민 사제와 동료 순교자들')] };
  const profiles = {
    SG: {
      jurisdictionName: 'Singapore', calendarName: 'Asia - Singapore', calendarPath: 'asia.singapore',
      calendar: Object.assign({}, shared, {
        '02-14': [proper('Dedication of the Cathedral of the Good Shepherd', '착한 목자 주교좌성당 봉헌 축일', 'feast', 'white')],
        '10-01': [proper('Saint Thérèse of the Child Jesus, Patroness of the Missions', '선교의 수호자 아기 예수의 성녀 데레사 축일', 'feast', 'white')]
      })
    },
    MY: { jurisdictionName: 'Malaysia', calendarName: 'Asia - Malaysia', calendarPath: 'asia.malaysia', calendar: shared },
    BN: {
      jurisdictionName: 'Brunei', calendarName: 'Asia - Malaysia / Brunei proper', calendarPath: 'asia.malaysia',
      calendar: Object.assign({}, shared, { '08-15': [proper('The Assumption of the Blessed Virgin Mary, Titular Feast of the Mother Church', '브루나이 모교회의 주보 성모 승천 대축일', 'solemnity', 'white')] })
    }
  };
  Object.entries(profiles).forEach(([jurisdiction, profile]) => {
    global.countryMassData[jurisdiction] = Object.freeze({
      schemaVersion: 1, jurisdiction, jurisdictions: Object.freeze([jurisdiction]),
      jurisdictionName: profile.jurisdictionName, conferenceCalendar: 'Catholic Bishops’ Conference of Malaysia, Singapore and Brunei',
      ordinaryLanguage: 'EN', ordinary, beta: true,
      source: Object.freeze({ title: 'CBCMSB liturgical calendar', url: jurisdiction === 'BN' ? 'https://rcvbd.com/holy-days-of-obligation/' : 'https://cbcmsb.org/', calendarUrl: `https://universalis.com/${profile.calendarPath}/0/calendar.htm` }),
      dailyReadings: Object.freeze({ provider: 'Universalis', calendar: profile.calendarName, translation: 'Jerusalem Bible', url: dateKey => `https://universalis.com/L/${profile.calendarPath}/${dateKey}/mass.htm` }),
      calendar: profile.calendar
    });
  });
})(globalThis);
