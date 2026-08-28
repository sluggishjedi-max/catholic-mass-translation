// Shared Bishops' Conference of England and Wales Mass module.
(function registerEnglandWalesMass(global) {
  'use strict';

  global.countryMassData = global.countryMassData || {};

  const SOURCE = Object.freeze({
    title: 'National Calendar for England and Wales',
    authority: 'Liturgy Office of the Catholic Bishops’ Conference of England and Wales',
    url: 'https://www.liturgyoffice.org.uk/Calendar/',
    calendarUrl: 'https://www.liturgyoffice.org.uk/Calendar/2026/Calendar-2026.pdf',
    orderUrl: 'https://www.liturgyoffice.org.uk/Missal/Text/MCFL.pdf',
    walsinghamUrl: 'https://www.liturgyoffice.org.uk/Calendar/National/Our-Lady-of-Walsingham.pdf'
  });

  const clean = value => String(value || '').replace(/^\s+|\s+$/g, '').replace(/\n[ \t]+/g, '\n');
  const proper = (title, kr, rank, color = 'white', data = {}, extra = {}) => Object.assign({
    title,
    names: Object.freeze({ EN: title, KR: kr }),
    rank,
    color,
    kind: 'england-wales-proper',
    data: Object.freeze(Object.fromEntries(Object.entries(data).map(([key, value]) => [key, clean(value)])))
  }, extra);

  const eternalHighPriest = proper(
    'Our Lord Jesus Christ, the Eternal High Priest',
    '영원한 대사제이신 우리 주 예수 그리스도 축일',
    'feast'
  );

  const sharedCalendar = Object.freeze({
    '02-14': [proper('Saints Cyril, Monk, and Methodius, Bishop, Co-Patrons of Europe', '유럽 공동 수호자 성 치릴로 수도자와 성 메토디오 주교 축일', 'feast')],
    '04-29': [proper('Saint Catherine of Siena, Virgin and Doctor, Co-Patron of Europe', '유럽 공동 수호자 시에나의 성녀 가타리나 동정 학자 축일', 'feast')],
    '07-11': [proper('Saint Benedict, Abbot, Co-Patron of Europe', '유럽 공동 수호자 성 베네딕토 아빠스 축일', 'feast')],
    '07-23': [proper('Saint Bridget of Sweden, Religious, Co-Patron of Europe', '유럽 공동 수호자 스웨덴의 성녀 비르지타 수도자 축일', 'feast')],
    '08-09': [proper('Saint Teresa Benedicta of the Cross, Virgin and Martyr, Co-Patron of Europe', '유럽 공동 수호자 십자가의 성녀 데레사 베네딕타 동정 순교자 축일', 'feast', 'red')],
    '10-09': [proper('Saint John Henry Newman, Priest and Doctor of the Church', '성 존 헨리 뉴먼 사제 학자 축일', 'feast')],
    '11-03': [proper('Saint Winefride, Virgin', '성녀 와인프리드 동정', 'optional')]
  });

  const englandCalendar = Object.freeze(Object.assign({}, sharedCalendar, {
    '01-12': [proper('Saint Aelred of Rievaulx, Abbot', '리보의 성 앨레드 아빠스', 'optional')],
    '01-19': [proper('Saint Wulstan, Bishop', '성 울스탄 주교', 'optional')],
    '03-01': [proper('Saint David, Bishop, Patron of Wales', '웨일즈의 수호자 성 다윗 주교 축일', 'feast', 'white', {
      entrance: `Luke 4:18
The Spirit of God is upon me; he has anointed me.
He sent me to bring the good news to the poor
and to heal the broken-hearted.`,
      collect: `O God, who by the virtue of wisdom, the gift of eloquence,
and the example of prayer and pastoral zeal,
raised the blessed David to be patron of Wales,
grant that, by his intercession,
your Church may ever prosper and render you joyful praise.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you in the unity of the Holy Spirit,
God, for ever and ever.`,
      prayer_after: `May the communion we have received, O Lord,
unite us in brotherly love
and in zeal to proclaim your saving truth.
Through Christ our Lord.`
    }, { sourceUrl: 'https://www.liturgyoffice.org.uk/Calendar/National/Wales2.shtml' })],
    '03-17': [proper('Saint Patrick, Bishop', '성 파트리치오 주교 축일', 'feast', 'white', {
      collect: `O God, who chose the Bishop Saint Patrick
to preach your glory to the peoples of Ireland,
grant, through his merits and intercession,
that those who glory in the name of Christian
may never cease to proclaim your wondrous deeds to all.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you in the unity of the Holy Spirit,
God, for ever and ever.`
    })],
    '05-04': [proper('The English Martyrs', '잉글랜드의 순교자들 축일', 'feast', 'red')],
    '05-19': [proper('Saint Dunstan, Bishop', '성 던스턴 주교', 'optional')],
    '05-27': [proper('Saint Augustine of Canterbury, Bishop', '캔터베리의 성 아우구스티노 주교 축일', 'feast', 'white', {
      collect: `O God, who by the preaching of the Bishop Saint Augustine of Canterbury
led the English peoples to the Gospel,
grant, we pray, that the fruits of his labors
may remain ever abundant in your Church.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you in the unity of the Holy Spirit,
God, for ever and ever.`
    })],
    '06-09': [proper('Saint Columba, Abbot', '성 콜룸바 아빠스', 'optional')],
    '06-16': [proper('Saint Richard of Chichester, Bishop', '치체스터의 성 리처드 주교', 'optional')],
    '06-20': [proper('Saint Alban, Martyr', '성 알반 순교자', 'optional', 'red')],
    '06-22': [proper('Saints John Fisher, Bishop, and Thomas More, Martyrs', '성 요한 피셔 주교와 성 토마스 모어 순교자 축일', 'feast', 'red')],
    '06-23': [proper('Saint Etheldreda, Abbess', '성녀 에델드레다 아빠스', 'optional')],
    '07-01': [proper('Saint Oliver Plunkett, Bishop and Martyr', '성 올리버 플렁킷 주교 순교자', 'optional', 'red')],
    '08-26': [proper('Blessed Dominic of the Mother of God Barberi, Priest', '천주의 성모 도미니코 바르베리 복자 사제', 'optional')],
    '08-31': [proper('Saint Aidan, Bishop, and the Saints of Lindisfarne', '성 아이단 주교와 린디스판의 성인들', 'optional')],
    '09-03': [proper('Saint Gregory the Great, Pope and Doctor of the Church', '성 대 그레고리오 교황 학자 축일', 'feast', 'white', {
      entrance: 'Blessed Gregory, raised upon the throne of Peter, sought always the beauty of the Lord and lived in celebration of that love.',
      collect: `O God, who care for your people with gentleness and rule them in love,
through the intercession of Pope Saint Gregory,
endow, we pray, with a spirit of wisdom
those to whom you have given authority to govern,
that the flourishing of a holy flock
may become the eternal joy of the shepherds.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you in the unity of the Holy Spirit,
God, for ever and ever.`,
      prayer_offerings: `Grant our supplication, we pray, O Lord,
that this sacrifice we present in celebration of Saint Gregory
may be for our good,
since through its offering you have loosed the offenses of all the world.
Through Christ our Lord.`,
      communion: 'This is the steward, faithful and prudent, whom the Lord set over his household to give them their allowance of food at the proper time.',
      prayer_after: `Through Christ the teacher, O Lord,
instruct those you feed with Christ, the living Bread,
that on the feast day of Saint Gregory
they may learn your truth and express it in works of charity.
Through Christ our Lord.`
    })],
    '09-04': [proper('Saint Cuthbert, Bishop', '성 커스버트 주교', 'optional')],
    '09-19': [proper('Saint Theodore of Canterbury, Bishop', '캔터베리의 성 테오도로 주교', 'optional')],
    '09-24': [proper('Our Lady of Walsingham', '월싱엄의 성모 축일', 'feast', 'white', {
      entrance: `Proverbs 23:24a, 25
The father of the righteous will greatly rejoice.
Let your father and mother be glad;
let her who bore you rejoice.`,
      collect: `Grant, we pray, almighty God,
that as in the mystery of the Incarnation
the blessed and ever Virgin Mary
conceived your Son in her heart
before she conceived him in the womb,
so we, your pilgrim people,
rejoicing in her motherly care,
may welcome him into our hearts
and become a holy house fit for his eternal dwelling.
Who lives and reigns with you in the unity of the Holy Spirit,
God, for ever and ever.`,
      prayer_offerings: `We offer you, O Lord,
these offerings of conciliation and praise,
humbly asking that,
following the example of Our Lady of Walsingham,
we may present our very selves
as a holy sacrifice pleasing to you.
Through Christ our Lord.`,
      preface: `It is truly right to give you thanks,
truly just to give you glory, Father most holy,
on this celebration of the glorious Virgin Mary.

For at Nazareth she receives with faith the message of Gabriel
and becomes the Mother of your Son,
begotten by you before the ages,
now born into this world of time
as our saviour and our brother.

At Nazareth too, in loving communion with her Son,
she watches over the growing Church,
in the person of her Child
and hands on to us the shining example of her life.

In the holy house of Nazareth,
as the first disciple of her Son,
she receives the message of the Gospel,
treasures it in her heart,
and reflects on it in her mind.

At Nazareth also this purest of virgins,
united with Joseph, the just man,
in an unbreakable bond of chaste love,
praises you in song,
worships you in silence,
honours you by her daily life,
and gives you glory as she cares for her family.

And so, with all the Saints and Angels,
we praise you, as without end we acclaim:`,
      communion: `Luke 2:51
Jesus went down with them
and came to Nazareth
and was submissive to them.`,
      prayer_after: `All-holy Father,
look with kindness on those you have strengthened
with the Sacrament from heaven,
so that, through the example of the Blessed Virgin Mary,
we may work silently
at building up your kingdom on earth
and so enjoy its fulfilment in heaven,
in the company of your Son.
Who lives and reigns for ever and ever.`
    }, { sourceUrl: SOURCE.walsinghamUrl, page: 1 })],
    '10-10': [proper('Saint Paulinus of York, Bishop and Missionary', '요크의 성 바울리노 주교 선교사', 'optional')],
    '10-12': [proper('Saint Wilfrid, Bishop and Missionary', '성 윌프리드 주교 선교사', 'optional')],
    '10-13': [proper('Saint Edward the Confessor', '증거자 성 에드워드', 'optional')],
    '10-26': [proper('Saints Chad and Cedd, Bishops', '성 차드와 성 체드 주교', 'optional')],
    '11-16': [proper('Saint Edmund of Abingdon, Bishop', '애빙던의 성 에드먼드 주교', 'optional')],
    '11-17': [proper('Saint Hilda, Abbess', '성녀 힐다 아빠스', 'optional'), proper('Saint Hugh of Lincoln, Bishop', '링컨의 성 휴 주교', 'optional')],
    '12-29': [proper('Saint Thomas Becket, Bishop and Martyr', '성 토마스 베켓 주교 순교자 축일', 'feast', 'red')]
  }));

  const saintDavid = proper('Saint David, Bishop, Patron of Wales', '웨일즈의 수호자 성 다윗 주교 대축일', 'solemnity', 'white', {
    entrance: `Luke 4:18
The Spirit of God is upon me; he has anointed me.
He sent me to bring the good news to the poor
and to heal the broken-hearted.`,
    collect: `O God, who by the virtue of wisdom, the gift of eloquence,
and the example of prayer and pastoral zeal,
raised the blessed David to be patron of Wales,
grant that, by his intercession,
your Church may ever prosper and render you joyful praise.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you in the unity of the Holy Spirit,
God, for ever and ever.`,
    prayer_after: `May the communion we have received, O Lord,
unite us in brotherly love
and in zeal to proclaim your saving truth.
Through Christ our Lord.`
  }, { sourceUrl: 'https://rcadc.org/wp-content/uploads/2018/10/St-David-Mass.pdf', page: 2 });

  const walesCalendar = Object.freeze(Object.assign({}, sharedCalendar, {
    '02-09': [proper('Saint Teilo, Bishop', '성 텔리오 주교', 'optional')],
    '05-05': [proper('Saint Asaph, Bishop', '성 아삽 주교', 'optional')],
    '06-20': [proper('Saints Alban, Julius and Aaron, Protomartyrs of Britain', '영국의 첫 순교자 성 알반, 율리오와 아론', 'optional', 'red')],
    '08-03': [proper('Saint Germanus of Auxerre, Bishop', '오세르의 성 제르마노 주교', 'optional')],
    '08-26': [proper('Saint David Lewis, Priest and Martyr', '성 데이비드 루이스 사제 순교자', 'optional', 'red')],
    '09-11': [proper('Saint Deiniol, Bishop', '성 데이니올 주교', 'optional')],
    '10-16': [proper('Saint Richard Gwyn, Martyr', '성 리처드 귄 순교자', 'optional', 'red')],
    '11-06': [proper('Saint Illtud, Abbot', '성 일투드 아빠스', 'optional')],
    '11-14': [proper('Saint Dyfrig, Bishop', '성 더브릭 주교', 'optional')],
    '11-17': [proper('Saint Elizabeth of Hungary, Religious', '헝가리의 성녀 엘리사벳 수도자 기념일', 'memorial')],
    '12-10': [proper('Saint John Roberts, Priest and Martyr', '성 존 로버츠 사제 순교자', 'optional', 'red')]
  }));

  function easterSunday(year) {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(year, month - 1, day);
  }

  const dateOnly = date => new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const addDays = (date, amount) => {
    const result = dateOnly(date);
    result.setDate(result.getDate() + amount);
    return result;
  };
  const sameDay = (left, right) => dateOnly(left).getTime() === dateOnly(right).getTime();

  function observedLocalSolemnity(year, monthIndex, day) {
    const nominal = new Date(year, monthIndex, day);
    const easter = easterSunday(year);
    const palmSunday = addDays(easter, -7);
    const octaveEnd = addDays(easter, 7);
    if (nominal >= palmSunday && nominal <= octaveEnd) return addDays(easter, 8);
    return nominal.getDay() === 0 ? addDays(nominal, 1) : nominal;
  }

  function britishHolydayTransfer(date, title, kr, monthIndex, day, color = 'white') {
    const nominal = new Date(date.getFullYear(), monthIndex, day);
    const transferred = nominal.getDay() === 6 ? addDays(nominal, 1)
      : (nominal.getDay() === 1 ? addDays(nominal, -1) : nominal);
    if (sameDay(date, transferred) && !sameDay(nominal, transferred)) return proper(title, kr, 'solemnity', color, {}, { transferredFrom: `${monthIndex + 1}-${day}` });
    if (sameDay(date, nominal) && !sameDay(nominal, transferred)) return { suppressUniversalFixed: true };
    return null;
  }

  function sharedDynamicCalendar(date) {
    const transfers = [
      britishHolydayTransfer(date, 'The Epiphany of the Lord', '주님 공현 대축일', 0, 6),
      britishHolydayTransfer(date, 'Saints Peter and Paul, Apostles', '성 베드로와 성 바오로 사도 대축일', 5, 29, 'red'),
      britishHolydayTransfer(date, 'The Assumption of the Blessed Virgin Mary', '복되신 동정 마리아 승천 대축일', 7, 15),
      britishHolydayTransfer(date, 'All Saints', '모든 성인 대축일', 10, 1)
    ].filter(Boolean);
    if (transfers.length) return transfers;
    const highPriest = addDays(easterSunday(date.getFullYear()), 53);
    return sameDay(date, highPriest) ? [eternalHighPriest] : [];
  }

  function englandDynamicCalendar(date) {
    const shared = sharedDynamicCalendar(date);
    if (shared.length) return shared;
    const nominal = new Date(date.getFullYear(), 3, 23);
    const observed = observedLocalSolemnity(date.getFullYear(), 3, 23);
    if (sameDay(date, observed)) return [proper('Saint George, Martyr, Patron of England', '잉글랜드의 수호자 성 제오르지오 순교자 대축일', 'solemnity', 'red', {
      collect: `Extolling your might, O Lord, we humbly implore you,
that, as Saint George imitated the Passion of the Lord,
so he may lend us ready help in our weakness.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you in the unity of the Holy Spirit,
God, for ever and ever.`
    })];
    return sameDay(date, nominal) && !sameDay(nominal, observed) ? [{ suppressUniversalFixed: true }] : [];
  }

  function walesDynamicCalendar(date) {
    const shared = sharedDynamicCalendar(date);
    if (shared.length) return shared;
    const nominal = new Date(date.getFullYear(), 2, 1);
    const observed = observedLocalSolemnity(date.getFullYear(), 2, 1);
    if (sameDay(date, observed)) return [saintDavid];
    return sameDay(date, nominal) && !sameDay(nominal, observed) ? [{ suppressUniversalFixed: true }] : [];
  }

  const ordinary = global.countryMassData.US ? global.countryMassData.US.ordinary : Object.freeze([]);
  const common = {
    schemaVersion: 1,
    jurisdictions: Object.freeze(['GB-ENG', 'GB-WLS']),
    jurisdictionName: 'England and Wales',
    conferenceCalendar: 'Catholic Bishops’ Conference of England and Wales',
    ordinaryLanguage: 'EN',
    ordinary,
    source: SOURCE,
    beta: true
  };

  global.countryMassData['GB-ENG'] = Object.freeze(Object.assign({}, common, {
    jurisdiction: 'GB-ENG',
    countryName: 'England',
    dailyReadings: Object.freeze({
      provider: 'Universalis',
      calendar: 'England',
      translation: 'English Standard Version, Catholic Edition / Abbey Psalms and Canticles',
      officialCalendarUrl: SOURCE.calendarUrl,
      url: dateKey => `https://universalis.com/L/europe.england/${dateKey}/mass.htm`
    }),
    calendar: englandCalendar,
    dynamicCalendar: englandDynamicCalendar
  }));

  global.countryMassData['GB-WLS'] = Object.freeze(Object.assign({}, common, {
    jurisdiction: 'GB-WLS',
    countryName: 'Wales',
    dailyReadings: Object.freeze({
      provider: 'Universalis',
      calendar: 'Wales',
      translation: 'English Standard Version, Catholic Edition / Abbey Psalms and Canticles',
      officialCalendarUrl: SOURCE.calendarUrl,
      url: dateKey => `https://universalis.com/L/europe.wales/${dateKey}/mass.htm`
    }),
    calendar: walesCalendar,
    dynamicCalendar: walesDynamicCalendar
  }));
})(globalThis);
