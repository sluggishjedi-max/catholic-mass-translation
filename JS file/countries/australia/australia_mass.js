// Australian Catholic Bishops Conference beta Mass data.
(function registerAustraliaMass(global) {
  'use strict';

  global.countryMassData = global.countryMassData || {};
  const englishMissal = global.countryMassData['GB-ENG'] || global.countryMassData.IE || global.countryMassData.US;
  if (!englishMissal || !englishMissal.ordinary || !englishMissal.romanMissalProperData) {
    throw new Error('Australia Mass data requires a complete English Roman Missal module to be loaded first.');
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

  function splitEnglishText(value) {
    const phrases = String(value || '').split(/<br\s*\/?\s*>/i).flatMap(part => part.split(/(?<=[.;!?])\s+(?=[A-Z])/));
    const output = [];
    phrases.map(part => part.trim()).filter(Boolean).forEach(phraseValue => {
      let phrase = phraseValue;
      while (phrase.length > 520) {
        let cut = phrase.lastIndexOf(' ', 420);
        if (cut < 120) cut = 420;
        output.push(phrase.slice(0, cut).trim());
        phrase = phrase.slice(cut).trim();
      }
      if (phrase) output.push(phrase);
    });
    return output;
  }

  function splitEnglishRows(rows) {
    return (Array.isArray(rows) ? rows : []).flatMap(row => {
      const text = typeof row.text_en === 'string' ? splitEnglishText(row.text_en) : null;
      const rubric = typeof row.rubric_en === 'string' ? row.rubric_en.split(/<br\s*\/?\s*>/i) : null;
      if ((!text || text.length === 1) && (!rubric || rubric.length === 1)) return [Object.assign({}, row)];
      const base = Object.assign({}, row);
      delete base.text_en;
      delete base.rubric_en;
      const output = [];
      (rubric || []).map(value => value.trim()).filter(Boolean).forEach(value => output.push(Object.assign({}, base, { rubric_en: value })));
      (text || []).map(value => value.trim()).filter(Boolean).forEach((value, index) => output.push(Object.assign({}, base, { sp_en: index ? '' : (row.sp_en || ''), text_en: value })));
      return output;
    });
  }

  function structureEnglishOrdinary(source) {
    return source.map(entry => {
      const item = Object.assign({}, entry);
      ['lines', 'common_dialogue', 'sanctus', 'amen'].forEach(key => {
        if (Array.isArray(item[key])) item[key] = splitEnglishRows(item[key]);
      });
      if (item.variants) item.variants = Object.fromEntries(Object.entries(item.variants).map(([key, variant]) => [key,
        variant && Array.isArray(variant.lines) ? Object.assign({}, variant, { lines: splitEnglishRows(variant.lines) }) : variant
      ]));
      if (item.forms) item.forms = Object.fromEntries(Object.entries(item.forms).map(([key, rows]) => [key, splitEnglishRows(rows)]));
      if (item.songs) item.songs = Object.fromEntries(Object.entries(item.songs).map(([key, song]) => [key,
        song && Array.isArray(song.content) ? Object.assign({}, song, { content: splitEnglishRows(song.content) }) : song
      ]));
      return item;
    });
  }

  const ordinary = cloneFrozen(structureEnglishOrdinary(englishMissal.ordinary));
  const romanMissalProperData = cloneFrozen(englishMissal.romanMissalProperData);

  const SOURCE = Object.freeze({
    ordinary: 'https://www.icelweb.org/RomanMissal.htm',
    calendar: 'https://universalis.com/australia/-700/calendar.htm',
    readings: 'https://universalis.com/australia/calendar.htm',
    liturgyBrisbane: 'https://www.liturgia.com.au/for-parishes',
    australiaDay: 'https://www.liturgybrisbane.net.au/resources/liturgy-lines/new-mass-prayers-for-australia-day/',
    anzacDay: 'https://litedliturgybrisbane.weebly.com/anzac-day-and-easter.html',
    maryMacKillop: 'https://www.liturgybrisbane.net.au/media/1174/mary-of-the-cross-texts-for-mass-and-liturgy-of-hours.pdf',
    ourLadyHelp: 'https://responsorialpsalmcatholic.wordpress.com/2022/01/01/24th-of-may-solemnity-of-our-lady-help-of-christians-australia-gospel-reading-john-1925-27-or-alternative-gospel-reading-luke-139-56/',
    ourLadyHelpCollect: 'https://stmaryscathedral.org.au/wp-content/uploads/2020/05/Our-Lady-Help-of-Christians-2020.pdf'
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

  const ourLadyHelpOfChristians = proper(
    'Our Lady, Help of Christians, Patroness of Australia',
    '오스트레일리아의 수호자, 도움이신 마리아',
    'solemnity',
    'white',
    {
      entrance: `Hail, holy Mother, who gave birth to the King,
who rules heaven and earth for ever.`,
      collect: `Almighty ever-living God,
who placed the love of Our Lady, Help of Christians
in the hearts of those who brought the Catholic faith to these shores,
grant, through her intercession,
wisdom to our leaders and integrity to our citizens,
so that, under her protection,
Australia may know harmony, justice and peace.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you in the unity of the Holy Spirit,
one God, for ever and ever.`,
      prayer_offerings: `Look, O Lord, upon the prayers and offerings of your faithful,
presented in commemoration of Blessed Mary, the Mother of God,
that they may be pleasing to you
and may confer on us your help and forgiveness.
Through Christ our Lord.`,
      preface: `It is truly right and just, our duty and our salvation,
always and everywhere to give you thanks,
Lord, holy Father, almighty and eternal God,
and to praise, bless, and glorify your name
on the feast day of the Blessed ever-Virgin Mary.
For by the overshadowing of the Holy Spirit
she conceived your Only Begotten Son,
and without losing the glory of virginity,
brought forth into the world the eternal Light,
Jesus Christ our Lord.
Through him the Angels praise your majesty,
Dominions adore and Powers tremble before you.
Heaven and the Virtues of heaven
and the blessed Seraphim worship together with exultation.
May our voices, we pray, join with theirs in humble praise,
as we acclaim:`,
      communion: `Blessed are you, O Virgin Mary,
by the Lord God Most High,
above all women on the earth;
for he has so exalted your name,
that your praise shall be undying on our lips.`,
      prayer_after: `Refreshed by this heavenly sacrament,
Lord God, we pray for Australia, our earthly home,
that, with the help of the Virgin Mary,
we may become a new creation in Jesus Christ,
who lives and reigns for ever and ever.`
    },
    { sourceUrl: SOURCE.ourLadyHelp, collectSourceUrl: SOURCE.ourLadyHelpCollect }
  );

  const australiaDay = proper(
    'Australia Day',
    '오스트레일리아의 날',
    'optional',
    'white',
    {
      collect: `Grant, we pray, O Lord our God,
that as the Cross shines in our southern skies,
so may Christ bring light to our nation, to its peoples old and new,
and by saving grace, transform our lives.`,
      prayer_offerings: `As we come before you with the fruits of the earth,
tended by our hands, O Lord,
we pray that these offerings may bring a blessing on our land
and peace to all who dwell here.`,
      preface: `For from ancient times you made this land a home for many peoples,
and became their rock of strength;
when they were hungry, you gave them food,
and when thirsty, water even in the desert.
To all, your providence has proclaimed the Good News
of Jesus Christ, your Son,
sent by you to be the Saviour of all the world,
who has brought peace by his sacrifice on the Cross.`,
      prayer_after: `May our partaking of this sacrificial meal, O Lord,
grant us strength to walk together in the ways of justice,
and behold one day the new heavens and new earth
you prepare for us in Christ your Son.`
    },
    { sourceUrl: SOURCE.australiaDay }
  );

  const anzacDay = proper(
    'ANZAC Day',
    '앤잭 데이',
    'optional',
    'white',
    {
      collect: `Almighty everlasting God,
who sent your Son to die that we might live,
grant, we pray, eternal rest
to those who gave themselves
in service and sacrifice for their country.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you in the unity of the Holy Spirit,
one God, for ever and ever.`,
      prayer_offerings: `Grant, O heavenly Father,
that the sacrifice of Christ,
who laid down his life for his friends,
may raise all those who have died in war
to the victory of eternal life.
Through Christ our Lord.`,
      communion: `Greater love has no one
than to lay down his life for his friends, says the Lord.`,
      prayer_after: `By our communion with this Sacrament, O Lord,
grant us, we pray, fortitude in the cause of right,
and may our remembrance of those who have died in war
make us ardent defenders of your peace.
Through Christ our Lord.`
    },
    { sourceUrl: SOURCE.anzacDay }
  );

  const maryMacKillop = proper(
    'Saint Mary of the Cross (MacKillop), Virgin',
    '십자가의 성녀 마리아 매킬롭 동정',
    'solemnity',
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

  const calendar = Object.freeze({
    '01-26': Object.freeze([australiaDay]),
    '03-17': Object.freeze([proper('Saint Patrick, Bishop and Missionary', '성 파트리치오 주교 선교사', 'solemnity', 'white', {}, { sourceUrl: SOURCE.calendar })]),
    '04-25': Object.freeze([anzacDay]),
    '04-28': Object.freeze([proper('Saint Peter Chanel, Priest and Martyr', '성 베드로 샤넬 사제 순교자', 'memorial', 'red', {}, { sourceUrl: SOURCE.calendar })]),
    '07-07': Object.freeze([proper('Saint Peter To Rot, Martyr', '성 베드로 토 로트 순교자', 'optional', 'red', {}, { sourceUrl: SOURCE.calendar })]),
    '08-08': Object.freeze([maryMacKillop])
  });

  function sameDay(left, right) {
    return left && right
      && left.getFullYear() === right.getFullYear()
      && left.getMonth() === right.getMonth()
      && left.getDate() === right.getDate();
  }

  function dynamicCalendar(date, context = {}) {
    const nominal = new Date(date.getFullYear(), 4, 24, 12);
    const pentecost = context.easter
      ? new Date(context.easter.getFullYear(), context.easter.getMonth(), context.easter.getDate() + 49, 12)
      : null;
    const observed = nominal.getDay() === 0 || sameDay(nominal, pentecost)
      ? new Date(date.getFullYear(), 4, 25, 12)
      : nominal;
    if (sameDay(date, observed)) return [ourLadyHelpOfChristians];
    if (!sameDay(observed, nominal) && sameDay(date, nominal)) return [{ suppressUniversalFixed: true }];
    return [];
  }

  global.countryMassData.AU = Object.freeze({
    schemaVersion: 2,
    jurisdiction: 'AU',
    jurisdictions: Object.freeze(['AU']),
    jurisdictionName: 'Australia',
    conferenceCalendar: 'Australian Catholic Bishops Conference',
    ordinaryLanguage: 'EN',
    ordinary,
    ordinaryStructure: 'paragraph-rubric-choices-v1',
    romanMissalProperData,
    ordinaryEdition: 'Roman Missal, Third Edition — approved English text for Australia',
    ordinarySource: Object.freeze({ authority: 'ICEL / Australian Catholic Bishops Conference', url: SOURCE.ordinary }),
    beta: true,
    source: SOURCE,
    dailyReadings: Object.freeze({
      provider: 'Universalis',
      calendar: 'Australia',
      translation: 'Jerusalem Bible / Grail Psalms',
      parser: 'strict-english-daily-mass',
      officialCalendarUrl: SOURCE.calendar,
      url: dateKey => `https://universalis.com/australia/${dateKey}/mass.htm`
    }),
    properSources: Object.freeze({
      generalRomanMissal: englishMissal.romanMissalProperData.source,
      nationalCalendar: SOURCE.calendar,
      completeDailyMissalReference: SOURCE.liturgyBrisbane,
      australiaDay: SOURCE.australiaDay,
      anzacDay: SOURCE.anzacDay,
      maryMacKillop: SOURCE.maryMacKillop,
      ourLadyHelpOfChristians: SOURCE.ourLadyHelp
    }),
    calendar,
    dynamicCalendar
  });
})(globalThis);
