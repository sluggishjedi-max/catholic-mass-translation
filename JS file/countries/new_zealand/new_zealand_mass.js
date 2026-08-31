// New Zealand Catholic Bishops Conference beta Mass data.
(function registerNewZealandMass(global) {
  'use strict';

  global.countryMassData = global.countryMassData || {};
  const englishMissal = global.countryMassData['GB-ENG'] || global.countryMassData.IE || global.countryMassData.US;
  if (!englishMissal || !englishMissal.ordinary || !englishMissal.romanMissalProperData) {
    throw new Error('New Zealand Mass data requires a complete English Roman Missal module to be loaded first.');
  }

  function cloneFrozen(value) {
    if (Array.isArray(value)) return Object.freeze(value.map(cloneFrozen));
    if (value && typeof value === 'object') {
      return Object.freeze(Object.fromEntries(
        Object.entries(value).map(([key, entry]) => [key, cloneFrozen(entry)])
      ));
    }
    return value;
  }

  const ordinary = cloneFrozen(englishMissal.ordinary);
  const romanMissalProperData = cloneFrozen(englishMissal.romanMissalProperData);

  const SOURCE = Object.freeze({
    ordinary: 'https://www.icelweb.org/RomanMissal.htm',
    nzcbcMissal: 'https://catholic.org.nz/news/media-releases/new-missal-to-be-implemented-by-25-march',
    nationalCalendar: 'https://www.catholic.org.nz/resources/national-calendar-2026',
    properCalendar: 'https://www.nlo.org.nz/about/nlo-publications-policies-and-guidelines',
    calendar: 'https://universalis.com/nz/calendar.htm',
    waitangi: 'https://www.aucklandcatholic.org.nz/wp-content/uploads/2024/02/Waitangi-Day-Readings.pdf',
    maryMacKillop: 'https://www.liturgybrisbane.net.au/media/1174/mary-of-the-cross-texts-for-mass-and-liturgy-of-hours.pdf'
  });

  function proper(title, kr, rank, color = 'white', texts = {}, extra = {}) {
    return Object.freeze(Object.assign({
      title,
      names: Object.freeze({ EN: title, KR: kr }),
      rank,
      color,
      data: Object.freeze(texts)
    }, extra));
  }

  const maryMacKillop = proper(
    'Saint Mary of the Cross (MacKillop), Virgin',
    '십자가의 성녀 마리아 매킬롭 동정',
    'feast',
    'white',
    {
      entrance: `Come, you blessed of my Father, says the Lord:
I was sick, and you visited me.
Amen, I say to you: whatever you did
for one of the least of my brethren,
you did it for me.`,
      collect: `O God, source of all goodness,
who have shown us in Saint Mary
a woman of faith living by the power of the Cross,
teach us, we pray, by her example
to live the gospel in changing times
and to respect and defend
the human dignity of all in our land.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you in the unity of the Holy Spirit,
one God, for ever and ever.`,
      prayer_offerings: `As you gather us, O God, at your holy altar
on this feast of Saint Mary of the Cross,
grant, we pray, through her intercession,
that what we offer with praise and petition
may strengthen us all in charity and faith.
Through Christ our Lord.`,
      communion: `This is how all will know that you are my disciples,
if you have love for one another, says the Lord.`,
      prayer_after: `May the Sacrament we receive, Lord God,
on this feast of Saint Mary
strengthen us to walk the way of the Cross
and bring us to the glory of the Resurrection.
Through Christ our Lord.`
    },
    { sourceUrl: SOURCE.maryMacKillop, prefaceKey: 'holy_men_women_1' }
  );

  const waitangiDay = proper(
    'Waitangi Day — Day of Prayer',
    '와이탕이 데이 기도의 날',
    'optional',
    'white',
    {
      collect: `Almighty and ever-living God,
to whom every human power is subject,
and under whose governance the design for all the ages unfolds,
as you once led Māori and many other peoples
to find their home in this land,
so grant now that divisions be removed,
that equity and justice be established,
and that we may all become one day citizens of heaven.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you in the unity of the Holy Spirit,
God, for ever and ever.`,
      prayer_offerings: `Receive, O Lord, these gifts of bread and wine
which we bring from this bounteous land;
grant, we pray, through the power of your grace
and the celebration of these sacred mysteries,
unity and peace to your Church and to our people.
Through Christ our Lord.`,
      preface: `It is truly right and just, our duty and our salvation,
always and everywhere to give you thanks,
Lord, holy Father, almighty and eternal God,
through Christ our Lord.
For you sent him to be the light of all nations
to bring us to the knowledge of your truth,
so that our lives might be made holy
and we might be reconciled in him to one another and to you.
Through him you poured out your Holy Spirit among all nations,
so that in a wondrous manner love and justice
might fill and rule the whole world.
And so, with the company of Angels and Saints,
we sing the hymn of your praise, as without end we acclaim:`,
      prayer_after: `May the Eucharist which we have received
strengthen and renew us, we pray, O Lord,
that through this mystery of unity
we may possess the peace we hand on
and preserve the peace we have received.
Through Christ our Lord.`
    },
    {
      sourceUrl: SOURCE.waitangi,
      alternativeReadings: Object.freeze({
        reading1: 'Isaiah 32:15-18',
        psalm: 'Psalm 85:1-2, 8-12',
        reading2: '2 Corinthians 3:1-6',
        gospel: 'John 14:23-27'
      })
    }
  );

  const calendar = Object.freeze({
    '02-06': Object.freeze([waitangiDay]),
    '03-17': Object.freeze([proper('Saint Patrick, Bishop and Missionary', '성 파트리치오 주교 선교사', 'feast', 'white', {}, { sourceUrl: SOURCE.properCalendar })]),
    '04-25': Object.freeze([proper('ANZAC Day — National Day of Remembrance', '앤잭 데이 국가 추모일', 'optional', 'white', {}, { sourceUrl: SOURCE.nationalCalendar })]),
    '04-28': Object.freeze([proper('Saint Peter Chanel, Priest and Martyr, Patron of Oceania', '오세아니아의 수호자 성 베드로 샤넬 사제 순교자', 'feast', 'red', {}, { sourceUrl: SOURCE.nationalCalendar })]),
    '08-08': Object.freeze([maryMacKillop])
  });

  function sameDay(left, right) {
    return left && right
      && left.getFullYear() === right.getFullYear()
      && left.getMonth() === right.getMonth()
      && left.getDate() === right.getDate();
  }

  function dynamicCalendar(date) {
    if (date.getFullYear() !== 2026) return [];
    const nominal = new Date(2026, 7, 15, 12);
    const transferred = new Date(2026, 7, 16, 12);
    if (sameDay(date, transferred)) {
      return [proper('The Assumption of the Blessed Virgin Mary', '복되신 동정 마리아 승천 대축일', 'solemnity', 'white', {}, { sourceUrl: SOURCE.nationalCalendar, transferredFrom: '08-15' })];
    }
    return sameDay(date, nominal) ? [{ suppressUniversalFixed: true }] : [];
  }

  global.countryMassData.NZ = Object.freeze({
    schemaVersion: 2,
    jurisdiction: 'NZ',
    jurisdictions: Object.freeze(['NZ']),
    jurisdictionName: 'New Zealand',
    conferenceCalendar: 'New Zealand Catholic Bishops Conference',
    ordinaryLanguage: 'EN',
    ordinary,
    romanMissalProperData,
    ordinaryEdition: 'Roman Missal, Third Edition — bilingual English/Māori New Zealand edition',
    ordinarySource: Object.freeze({ authority: 'ICEL / New Zealand Catholic Bishops Conference', url: SOURCE.nzcbcMissal }),
    beta: true,
    source: SOURCE,
    dailyReadings: Object.freeze({
      provider: 'Universalis',
      calendar: 'New Zealand',
      translation: 'Jerusalem Bible / Grail Psalms',
      parser: 'strict-english-daily-mass',
      officialCalendarUrl: SOURCE.nationalCalendar,
      url: dateKey => `https://universalis.com/nz/${dateKey}/mass.htm`
    }),
    properSources: Object.freeze({
      generalRomanMissal: englishMissal.romanMissalProperData.source,
      nationalCalendar: SOURCE.nationalCalendar,
      properCalendarPublication: SOURCE.properCalendar,
      externalDailyCalendar: SOURCE.calendar,
      waitangiDay: SOURCE.waitangi,
      maryMacKillop: SOURCE.maryMacKillop
    }),
    calendar,
    dynamicCalendar
  });
})(globalThis);
