// Taiwan beta Mass module (Chinese Regional Bishops' Conference jurisdiction).
(function registerTaiwanMass(global) {
  'use strict';
  global.countryMassData = global.countryMassData || {};
  const proper = (title, kr, rank, color, data = {}, extra = {}) => Object.assign({
    title, names: { EN: title, KR: kr }, rank, color, kind: 'national-proper', data
  }, extra);
  const chineseMartyrs = proper('The Holy Martyrs and Blessed of China', '중화의 거룩한 순교자들과 복자들 축일', 'feast', 'red', {
    entrance: `Hebrews 12:1-2
Since we are surrounded by so great a cloud of witnesses,
let us rid ourselves of every burden and sin that clings to us
and persevere in running the race that lies before us
while keeping our eyes fixed on Jesus,
the leader and perfecter of faith.`,
    collect: `Almighty and eternal Father,
creator and savior of all nations,
you called people in China into the Catholic faith
and adopted them as your sons and daughters.
Through the merits and prayers of the holy martyrs of China,
grant us the strength to bear witness to you,
especially in times of adversity.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you in the unity of the Holy Spirit,
one God, for ever and ever.`,
    prayer_offerings: `Lord God, accept the gifts we bring before you
on this feast of the holy martyrs.
May the Eucharist which gave them courage in persecution
make us steadfast in adversity.
Through Christ our Lord.`,
    preface: `It is truly right and just, our duty and our salvation,
always and everywhere to give you thanks,
Lord, holy Father, almighty and eternal God.
Your holy martyrs followed the example of Christ,
and shed their blood for the glory of your name.
Their death reveals your power shining through our human frailty.
You choose the weak and make them strong in bearing witness to you
through Jesus Christ our Lord.
With joyful hearts we echo on earth the song of the angels in heaven
as they praise your glory without end.`,
    communion: `Wisdom 3:6
As gold in the furnace, he proved them,
and as sacrificial offerings he took them to himself.`,
    prayer_after: `O God, in your holy martyrs the mystery of the cross shines forth;
grant that by the power of this sacrifice we too may hold fast to Christ, your Son,
and labor in his Church for the salvation of all.
Through Christ our Lord.`
  }, { sourceUrl: 'https://smc.catholic.org.hk/en/holy_martyrs_and_blesseds_of_china/' });
  global.countryMassData.TW = Object.freeze({
    schemaVersion: 1,
    jurisdiction: 'TW',
    jurisdictions: Object.freeze(['TW']),
    jurisdictionName: 'Taiwan',
    conferenceCalendar: 'Chinese Regional Bishops’ Conference',
    languageVariant: 'ZH-TW',
    ordinaryLanguage: 'EN',
    ordinary: global.countryMassData.US ? global.countryMassData.US.ordinary : Object.freeze([]),
    beta: true,
    source: Object.freeze({ title: 'Taiwan Chinese liturgical texts and calendar', url: 'https://sliturgy.catholic.org.tw/', calendarUrl: 'https://theology.catholic.org.tw/public/liyi/utility.html' }),
    dailyReadings: Object.freeze({ provider: 'Universalis (readings) + Taiwan calendar profile', officialUrl: 'https://sliturgy.catholic.org.tw/', url: dateKey => `https://universalis.com/L/${dateKey}/mass.htm` }),
    calendar: { '07-09': [chineseMartyrs] },
    dynamicCalendar(date) {
      return date.getMonth() === 4 && date.getDay() === 6 && date.getDate() >= 8 && date.getDate() <= 14
        ? [proper('Our Lady of China', '중국의 성모 마리아 기념일', 'memorial', 'white')]
        : [];
    }
  });
})(globalThis);
