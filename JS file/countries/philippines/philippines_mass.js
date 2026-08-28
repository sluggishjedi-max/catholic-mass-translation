// Philippines beta Mass module (CBCP jurisdiction).
(function registerPhilippinesMass(global) {
  'use strict';
  global.countryMassData = global.countryMassData || {};
  const proper = (title, kr, rank, color = 'white') => ({ title, names: { EN: title, KR: kr }, rank, color, kind: 'national-proper', data: {} });
  global.countryMassData.PH = Object.freeze({
    schemaVersion: 1, jurisdiction: 'PH', jurisdictions: Object.freeze(['PH']),
    jurisdictionName: 'Philippines', conferenceCalendar: 'Catholic Bishops’ Conference of the Philippines',
    ordinaryLanguage: 'EN', ordinary: global.countryMassData.US ? global.countryMassData.US.ordinary : Object.freeze([]), beta: true,
    source: Object.freeze({ title: 'CBCP proper calendar', url: 'https://cbcp.ph/', calendarUrl: 'https://universalis.com/Philippines/0/calendar.htm' }),
    dailyReadings: Object.freeze({ provider: 'Universalis', calendar: 'Philippines', translation: 'Jerusalem Bible', url: dateKey => `https://universalis.com/L/Philippines/${dateKey}/mass.htm` }),
    calendar: {
      '01-09': [proper('The Translation of the Black Nazarene', '검은 나자렛 예수상 이전 축일', 'feast')],
      '04-02': [proper('Saint Pedro Calungsod, Martyr', '성 베드로 칼룽소드 순교자 축일', 'feast', 'red')],
      '08-23': [proper('Saint Rose of Lima, Secondary Patroness of the Philippines', '필리핀 제2수호자 리마의 성녀 로사 기념일', 'memorial')],
      '09-28': [proper('Saint Lorenzo Ruiz and Companions, Martyrs', '성 라우렌시오 루이스와 동료 순교자들 축일', 'feast', 'red')],
      '12-08': [proper('The Immaculate Conception, Principal Patroness of the Philippines', '필리핀 주수호자 원죄 없이 잉태되신 복되신 동정 마리아 대축일', 'solemnity')]
    },
    dynamicCalendar(date) {
      return date.getMonth() === 0 && date.getDay() === 0 && date.getDate() >= 15 && date.getDate() <= 21
        ? [proper('Santo Niño (The Holy Child)', '아기 예수 축일', 'feast')]
        : [];
    }
  });
})(globalThis);
