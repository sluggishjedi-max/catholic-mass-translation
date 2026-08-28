// Bishops' Conference of Scotland Mass module.
(function registerScotlandMass(global) {
  'use strict';

  global.countryMassData = global.countryMassData || {};

  const SOURCE = Object.freeze({
    title: 'National Calendar of Scotland',
    authority: 'Bishops’ Conference of Scotland',
    url: 'https://www.bcos.org.uk/',
    calendarUrl: 'https://universalis.com/Europe.Scotland/calendar.htm',
    orderUrl: 'https://www.liturgyoffice.org.uk/Missal/Text/MCFL.pdf',
    ogilvieUrl: 'https://jesuitinstitute.uk/Resources/Ogilvie%20Mass%20Texts.pdf'
  });

  const clean = value => String(value || '').replace(/^\s+|\s+$/g, '').replace(/\n[ \t]+/g, '\n');
  const proper = (title, kr, rank, color = 'white', data = {}, extra = {}) => Object.assign({
    title,
    names: Object.freeze({ EN: title, KR: kr }),
    rank,
    color,
    kind: 'scotland-proper',
    data: Object.freeze(Object.fromEntries(Object.entries(data).map(([key, value]) => [key, clean(value)])))
  }, extra);

  const saintJohnOgilvie = proper(
    'Saint John Ogilvie, Priest and Martyr',
    '성 존 오길비 사제 순교자 축일',
    'feast',
    'red',
    {
      collect: `Almighty, everlasting God,
who made your martyr, Saint John Ogilvie,
an invincible defender of the Catholic faith,
grant, through his intercession, that each day
we may increase in faith, hope and charity.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you in the unity of the Holy Spirit,
God, for ever and ever.`,
      prayer_offerings: `Lord,
you fill our hearts with love
as we recall the suffering and death of Saint John, your martyr.
Grant that there may be in us the mind that was in Christ Jesus,
so that in this sacrifice we may worthily proclaim the death of your only Son,
who lives and reigns for ever and ever.`,
      preface: `Holy Father, almighty and eternal God,
it is indeed right and the way to salvation
to thank you at all times and in every place.

From the followers of Saint Ignatius
you have chosen a great company
to set the final seal on their love for you
by laying down their lives.

Their blood is the seed of the Church,
their example our encouragement
as we follow in the footsteps of Christ our Lord.

Through Christ the angels sing in praise of your glory
as they rejoice in your presence for ever.
May our voices cry out in joy:`,
      prayer_after: `Lord,
you have renewed our strength through these sacramental gifts.
May the power of the Holy Spirit be active among us,
so that there may be one flock and one Shepherd,
our Lord Jesus Christ,
who laid down his life for his sheep
and now lives and reigns for ever and ever.`
    },
    { sourceUrl: SOURCE.ogilvieUrl, page: 1 }
  );

  const saintAndrew = proper(
    'Saint Andrew, Apostle, Patron of Scotland',
    '스코틀랜드의 수호자 성 안드레아 사도 대축일',
    'solemnity',
    'red',
    {
      entrance: 'Beside the Sea of Galilee, the Lord saw two brothers, Peter and Andrew, and he said to them: Come after me and I will make you fishers of men.',
      collect: `We humbly implore your majesty, O Lord,
that, just as the blessed Apostle Andrew
was for your Church a preacher and pastor,
so he may be for us a constant intercessor before you.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you in the unity of the Holy Spirit,
God, for ever and ever.`,
      prayer_offerings: `Grant us, almighty God,
that through these offerings,
which we bring on the feast day of Saint Andrew,
we may please you by what we have brought
and be given life by what you have accepted.
Through Christ our Lord.`,
      communion: 'Andrew told his brother Simon: We have found the Messiah, the Christ, and he brought him to Jesus.',
      prayer_after: `May communion in your Sacrament strengthen us, O Lord,
so that by the example of the blessed Apostle Andrew
we, who carry in our body the Death of Christ,
may merit to live with him in glory.
Who lives and reigns for ever and ever.`
    }
  );

  const calendar = Object.freeze({
    '01-13': [proper('Saint Kentigern (Mungo), Bishop', '성 켄티게른(멍고) 주교 축일', 'feast')],
    '02-14': [proper('Saints Cyril, Monk, and Methodius, Bishop, Co-Patrons of Europe', '유럽 공동 수호자 성 치릴로 수도자와 성 메토디오 주교 축일', 'feast')],
    '03-10': [saintJohnOgilvie],
    '03-17': [proper('Saint Patrick, Bishop and Missionary', '성 파트리치오 주교 선교사 축일', 'feast', 'white', {
      collect: `O God, who chose the Bishop Saint Patrick
to preach your glory to the peoples of Ireland,
grant, through his merits and intercession,
that those who glory in the name of Christian
may never cease to proclaim your wondrous deeds to all.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you in the unity of the Holy Spirit,
God, for ever and ever.`
    })],
    '04-29': [proper('Saint Catherine of Siena, Virgin and Doctor, Co-Patron of Europe', '유럽 공동 수호자 시에나의 성녀 가타리나 동정 학자 축일', 'feast')],
    '06-09': [proper('Saint Columba (Colum Cille), Abbot', '성 콜룸바 아빠스 축일', 'feast')],
    '06-16': [proper('All Saints of Scotland', '스코틀랜드의 모든 성인 축일', 'feast')],
    '07-09': [proper('Our Lady of Aberdeen', '애버딘의 성모 축일', 'feast')],
    '07-11': [proper('Saint Benedict, Abbot, Co-Patron of Europe', '유럽 공동 수호자 성 베네딕토 아빠스 축일', 'feast')],
    '07-23': [proper('Saint Bridget of Sweden, Religious, Co-Patron of Europe', '유럽 공동 수호자 스웨덴의 성녀 비르지타 수도자 축일', 'feast')],
    '08-09': [proper('Saint Teresa Benedicta of the Cross, Virgin and Martyr, Co-Patron of Europe', '유럽 공동 수호자 십자가의 성녀 데레사 베네딕타 동정 순교자 축일', 'feast', 'red')],
    '09-16': [proper('Saint Ninian, Bishop', '성 니니안 주교 축일', 'feast')],
    '11-16': [proper('Saint Margaret of Scotland', '스코틀랜드의 성녀 마르가리타 축일', 'feast', 'white', {
      collect: `O God, who made Saint Margaret of Scotland
wonderful in her outstanding charity towards the poor,
grant that through her intercession and example
we may reflect among all humanity
the image of your divine goodness.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you in the unity of the Holy Spirit,
God, for ever and ever.`
    })]
  });

  const dateOnly = date => new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const addDays = (date, amount) => {
    const result = dateOnly(date);
    result.setDate(result.getDate() + amount);
    return result;
  };
  const sameDay = (left, right) => dateOnly(left).getTime() === dateOnly(right).getTime();

  function observedBritishHolyday(date, title, kr, monthIndex, day, color = 'white') {
    const nominal = new Date(date.getFullYear(), monthIndex, day);
    const observed = nominal.getDay() === 6 ? addDays(nominal, 1)
      : (nominal.getDay() === 1 ? addDays(nominal, -1) : nominal);
    if (sameDay(date, observed) && !sameDay(nominal, observed)) {
      return proper(title, kr, 'solemnity', color, {}, { transferredFrom: `${monthIndex + 1}-${day}` });
    }
    if (sameDay(date, nominal) && !sameDay(nominal, observed)) return { suppressUniversalFixed: true };
    return null;
  }

  function observedSaintAndrew(year) {
    const nominal = new Date(year, 10, 30);
    return nominal.getDay() === 0 ? addDays(nominal, 1) : nominal;
  }

  function dynamicCalendar(date) {
    const holyday = [
      observedBritishHolyday(date, 'Saints Peter and Paul, Apostles', '성 베드로와 성 바오로 사도 대축일', 5, 29, 'red'),
      observedBritishHolyday(date, 'The Assumption of the Blessed Virgin Mary', '복되신 동정 마리아 승천 대축일', 7, 15)
    ].filter(Boolean);
    if (holyday.length) return holyday;

    const nominalAndrew = new Date(date.getFullYear(), 10, 30);
    const observedAndrew = observedSaintAndrew(date.getFullYear());
    if (sameDay(date, observedAndrew)) return [saintAndrew];
    return sameDay(date, nominalAndrew) && !sameDay(nominalAndrew, observedAndrew)
      ? [{ suppressUniversalFixed: true }]
      : [];
  }

  const ordinary = global.countryMassData.US ? global.countryMassData.US.ordinary : Object.freeze([]);
  global.countryMassData['GB-SCT'] = Object.freeze({
    schemaVersion: 1,
    jurisdiction: 'GB-SCT',
    jurisdictionName: 'Scotland',
    conferenceCalendar: 'Bishops’ Conference of Scotland',
    countryName: 'Scotland',
    ordinaryLanguage: 'EN',
    ordinary,
    source: SOURCE,
    beta: true,
    dailyReadings: Object.freeze({
      provider: 'Universalis',
      calendar: 'Scotland',
      translation: 'English Standard Version, Catholic Edition / Abbey Psalms and Canticles',
      officialCalendarUrl: SOURCE.calendarUrl,
      url: dateKey => `https://universalis.com/L/europe.scotland/${dateKey}/mass.htm`
    }),
    calendar,
    dynamicCalendar
  });
})(globalThis);
