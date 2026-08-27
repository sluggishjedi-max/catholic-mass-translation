// All-island Irish Mass module: shared by the Republic of Ireland and Northern Ireland.
(function () {
    'use strict';

    const source = Object.freeze({
        title: 'National Proper for Ireland',
        approval: 'Congregation for Divine Worship and the Discipline of the Sacraments, Prot. N. 816/07/L, 10 July 2007',
        publication: 'Irish Episcopal Commission for Liturgy, 2009',
        url: 'https://www.catholicbishops.ie/wp-content/uploads/2024/09/National-Proper-for-Ireland-web.pdf'
    });

    const clean = value => String(value || '').replace(/^\s+|\s+$/g, '').replace(/\n[ \t]+/g, '\n');
    const proper = (title, kr, rank, page, data = {}, extra = {}) => Object.assign({
        title,
        names: { EN: title, KR: kr },
        rank,
        color: extra.color || (extra.martyr ? 'red' : 'white'),
        page,
        kind: 'ireland-proper',
        data: Object.fromEntries(Object.entries(data).map(([key, value]) => [key, clean(value)]))
    }, extra);

    const calendar = {
        '01-03': [proper('Saint Munchin, Bishop', '성 문친 주교', 'optional', 9, {
            collect: `Lord God, may the light which brightened the world
at the birth of Christ your Son
continue, we beseech you, to overcome all darkness,
and, by the prayers of Saint Munchin,
may it guide our steps into the way of peace.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '01-15': [proper('Saint Ita, Virgin', '성녀 이타 동정', 'memorial', 9, {
            entrance: `On this day Saint Ita received the reward for her labours;
on this day she entered the eternal city, the heavenly Jerusalem.`,
            collect: `Lord God, it was through the power of your Spirit,
that Saint Ita was tireless in caring for the afflicted
and in guiding the young towards holiness,
and so we pray:
prepare in our hearts, as you prepared in hers,
a home where you will dwell.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`,
            prayer_offerings: `Accept, Lord, King of Creation, the gifts we offer
as we celebrate the memory of Saint Ita
and give us, we pray, purity of heart
that we may be pleasing to you.
Through Christ our Lord.`,
            communion: `John 14:23
Those who love me will keep my word, and my Father will love them,
and we will come to them and make our home with them, says the Lord.`,
            prayer_after: `By our reception of the body and blood of your Son, O Lord,
nurture us in holiness,
that we may grow to our full stature in Christ.
Who lives and reigns for ever and ever.`
        })],
        '01-16': [proper('Saint Fursa, Abbot and Missionary', '성 푸르사 아빠스와 선교사', 'optional', 10, {
            collect: `Draw our hearts, we pray, O God most high,
to the things that are above,
so that by the intercession of the Saints,
we may imitate Saint Fursa,
whose earthly pilgrimage was a constant search
for the vision of your glory.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '01-30': [proper('Saint Aidan, Bishop', '성 아이단 주교', 'optional', 10, {
            collect: `Almighty God, who called Saint Aidan to count all as loss
for the sake of gaining Christ,
fix, we pray, in the hearts
of all who celebrate his memory
the desire to show forth the Gospel
that they may share in its blessings.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '02-01': [proper('Saint Brigid, Abbess, Secondary Patron of Ireland', '성녀 브리짓 아빠스, 아일랜드 제2수호자 축일', 'feast', 11, {
            entrance: `Cf. Job 30:25
Did I not feel for those whose day was hard?
Was not my soul grieved for the poor?`,
            collect: `Merciful God,
origin and reward of all charity,
you called Saint Brigid to teach the new commandment of love
through her life of hospitality and her care of the needy;
give to your people, by her intercession,
a generous spirit,
so that, with hearts made pure,
we may show your love to all.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`,
            prayer_offerings: `As we present these gifts, O Lord,
on the feast of Saint Brigid,
may we come to know you as the source of all true love.
Through Christ our Lord.`,
            preface: `It is truly right and just, our duty and our salvation,
always and everywhere to give you thanks,
holy Father, almighty and eternal God,
through Jesus Christ our Lord.
For your wonderful love is seen in Saint Brigid:
you taught her to open her heart and hands to the poor
and to seek the image of your Son in every welcomed guest.
Through her you showed a people
the way of Mary, the Mother of your Son,
in dedicated service and holiness of life.
On this feast you fill our hearts with joy
for you continue to bless the Church
that you planted by her labours.
And so, with Archangels and Angels
and the whole company of Saints,
we sing the unending hymn of your praise.`,
            communion: `Cf. Matthew 25:34, 36, 40
Come, you whom my Father has blessed, says the Lord.
I was sick and you visited me.
In truth I tell you,
in so far as you did this to one of the least of these,
you did it to me.`,
            prayer_after: `You give us food from heaven, Lord,
to strengthen us in love;
grant, we pray, through the intercession of Saint Brigid,
that works of charity continue to flourish
and the light of true faith not fail.
Through Christ our Lord.`
        })],
        '02-07': [proper('Saint Mel, Bishop', '성 멜 주교', 'optional', 14, {
            collect: `God our Father,
who in the springtime of the faith in Ireland
raised up your servant the bishop Saint Mel,
to foster the growth of the Church;
grant, we pray,
that we who venerate his memory
may never fail to imitate his tireless labour.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '02-11': [proper('Saint Gobnait, Virgin', '성녀 고브네이트 동정', 'optional', 14, {
            collect: `God of mercy,
who fashioned Saint Gobnait
as a pure vessel of grace
and a trusted intercessor for her people,
shield us kindly from harm and disease by her prayers
and give abundant success
to the work of our hands.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '02-17': [proper('Saint Fintan, Abbot', '성 핀탄 아빠스', 'optional', 14, {
            collect: `Lord of heaven and earth,
whose Spirit worked so strongly
in the life of Saint Fintan
that through him many were drawn
to leave all things for the sake of the Gospel;
strengthen your Church, we pray, by his intercession,
and give us lasting peace.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '03-01': [proper('Saint David, Bishop', '성 다윗 주교', 'optional', 15, {
            collect: `O God, you gave your servant Saint David
the virtue of wisdom and the gift of eloquence
and made him an example of prayer and pastoral zeal;
grant that, through his intercession,
your Church may ever prosper and render you joyful praise.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '03-05': [proper('Saint Kieran, Bishop', '성 키어런 주교', 'optional', 15, {
            collect: `God of heaven and earth,
graciously hear our prayer
as we recall the memory of Saint Kieran,
who rejoiced in your gift of life to all creation:
and give us the fullness of life in the new creation.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '03-08': [proper('Saint Senan, Bishop', '성 세난 주교', 'optional', 16, {
            collect: `Almighty God,
by whose grace the bishop Saint Senan
put his trust in the cross of your Son, our Lord Jesus Christ
and so conquered the powers of evil,
lead us safely, we pray, at his intercession
through the storms of life to the eternal shore.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '03-11': [proper('Saint Aengus, Bishop and Abbot', '성 앵거스 주교와 아빠스', 'optional', 16, {
            collect: `God of heaven and earth,
you led your bishop Saint Aengus
by his study of the Saints in Ireland
to live a life of penitence and prayer,
grant that we, who through his works
have come to know this great host of witnesses,
may be brought by your mercy to repent of our sins.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '03-17': [proper('Saint Patrick, Bishop and Missionary, Principal Patron of Ireland', '성 파트리치오 주교와 선교사, 아일랜드 주수호자 대축일', 'solemnity', 17, {
            entrance: `Genesis 12:1-2
Go from your country and your kindred and your father’s house to the land that I will show you.
I will make of you a great nation, and I will bless you, and make your name great, so that you will be a blessing.`,
            collect: `Lord, through the work of Saint Patrick in Ireland
we have come to acknowledge the mystery of the one true God
and give thanks for our salvation in Christ;
grant by his prayers
that we who celebrate this festival
may keep alive the fire of faith he kindled.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`,
            prayer_offerings: `Lord, accept this pure sacrifice
which, through the labours of Saint Patrick,
your grateful people make
to the glory of your name.
Through Christ our Lord.`,
            preface: `It is truly right and just, our duty and our salvation,
always and everywhere to give you thanks,
Lord, holy Father, almighty and eternal God,
and to offer you fitting praise
as we honour Saint Patrick.
For you drew him through daily prayer
in captivity and hardship
to know you as a loving Father.
You chose him out of all the world
to return to the land of his captors,
that they might acknowledge Jesus Christ, their Redeemer.
In the power of your Spirit you directed his paths
to win the sons and daughters of the Irish
to the service of the Triune God.
With joyful hearts we echo on earth
the song of the Angels in heaven
as they praise your glory without end.`,
            communion: `Cf. Matthew 8:11
Many will come from east and west
and sit down with Abraham, Isaac and Jacob
at the feast in the kingdom of heaven, says the Lord.`,
            prayer_after: `Strengthen us, O Lord, by this Sacrament
so that we may profess the faith taught by Saint Patrick
and proclaim it in our way of living.
Through Christ our Lord.`
        })],
        '03-21': [proper('Saint Enda, Abbot', '성 엔다 아빠스', 'optional', 22, {
            collect: `Almighty God,
whose Spirit prepared Saint Enda
to guide many to holiness in the monastic life,
grant, through his example and intercession,
that our lives be directed by the Gospel
and our hearts fixed on the joys of heaven.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '03-24': [proper('Saint Macartan, Bishop', '성 마카르탄 주교', 'optional', 22, {
            collect: `Lord God, hear the prayers of your Church
and give us the strength of Saint Macartan,
faithful disciple of Saint Patrick,
that we, like him, may triumph over all evil
and worship you in spirit and in truth.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '04-01': [proper('Saint Ceallach (Celsus), Bishop', '성 첼라크(켈수스) 주교', 'optional', 22, {
            collect: `God ever faithful,
who restored the vigour of the Church in Ireland
through the generosity and courage of Saint Ceallach,
look with mercy on us today, and by his prayers,
renew our life, revive our strength,
and build us up on the one foundation stone,
our Saviour Jesus Christ.
Who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '04-18': [proper('Saint Laserian, Bishop', '성 라세리안 주교', 'optional', 23, {
            collect: `God of glory,
who reveal to those who search for you with all their hearts
the mysteries of the heavenly kingdom;
grant, at the intercession of Saint Laserian,
that we who seek wisdom in the cross of Christ
may find the fullness of life in his resurrection.
Who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '04-27': [proper('Saint Asicus, Bishop', '성 아시쿠스 주교', 'optional', 23, {
            collect: `O God of heaven,
by whose grace Saint Asicus became a disciple of Patrick
and worked for the beauty of your worship,
be pleased, by his prayers,
to make of our lives a work of art
fashioned for the glory of your name.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '05-04': [proper('Saint Conleth, Bishop', '성 콘레스 주교', 'optional', 23, {
            collect: `Father in heaven,
from whom all good gifts come,
pour forth upon your Church today
the same grace which enabled Saint Conleth
to nurture for you a holy people
eager in the works of justice and of love.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '05-05': [proper('Blessed Edmund Rice, Religious', '복자 에드먼드 라이스 수도자', 'optional', 24, {
            collect: `Heavenly Father,
you inspired Edmund Rice to open his heart to Christ
present in those oppressed by poverty and injustice;
in the power of your Holy Spirit
grant that we may follow his example of faith and generosity
as we seek to live lives of love and service.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '05-10': [proper('Saint Comgall, Abbot', '성 콤갈 아빠스', 'optional', 24, {
            collect: `Receive, O Lord, the praise of your people
on the feast of the abbot Saint Comgall;
and as by your grace he formed a family to give you fitting worship
and to spread the Gospel in many lands,
give, at his intercession,
the joy of weaving for your glory
a canticle of homage from the nations.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '05-15': [proper('Saint Carthage, Bishop', '성 카르타고 주교', 'optional', 24, {
            collect: `Lord God, you drew Saint Carthage to monastic life
through the beauty of your Church’s worship,
and made him content to be a stranger
and a pilgrim for the sake of Christ;
give us, we pray, by his prayers,
a share in his gentleness and forbearance.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '05-16': [proper('Saint Brendan, Abbot', '성 브렌던 아빠스', 'optional', 25, {
            collect: `O God, who helped Saint Brendan navigate the seas
in his eagerness to spread the Gospel;
grant us, at his intercession,
on our journey through life
to set our course according to your peace
and bring us to the harbour we desire in heaven.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '06-03': [proper('Saint Kevin, Abbot', '성 케빈 아빠스 기념일', 'memorial', 25, {
            entrance: `Cf. Psalm 61:1-2
For God alone my soul waits in silence;
he alone is my rock and my salvation.`,
            collect: `In the solitude of Glendalough, O Lord,
you spoke to the heart of Saint Kevin
and taught him to find through prayer
the life that he desired;
by his intercession,
turn our hearts from all that would betray us,
for you alone are our goal and our reward.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`,
            prayer_offerings: `On your altar, Lord, we lay these gifts,
signs of life and fruitfulness;
grant, we pray, that, like Saint Kevin,
we may dedicate the whole of our lives to your service.
Through Christ our Lord.`,
            communion: `Psalm 42:8
By day the Lord commands his steadfast love
and at night his song is with me,
a prayer to the God of my life.`,
            prayer_after: `Our delight, Lord God of hosts,
is to sing your praise in this Eucharist;
give us, we pray, your strength on our earthly journey
that we may find a home at your altar in heaven.
Through Christ our Lord.`
        })],
        '06-04': [proper('Saints Charles Lwanga and Companions, Martyrs', '성 가롤로 르왕가와 동료 순교자들 기념일', 'memorial', 26, {}, { martyr: true, romanMissal: true })],
        '06-06': [proper('Saint Jarlath, Bishop', '성 야를라스 주교', 'optional', 26, {
            collect: `Lord God, in commemorating your bishop Saint Jarlath
we acclaim the victory of Jesus Christ,
the radiant sun that knows no setting;
guide our steps, we pray, by your providence,
so that walking as children of the light
we may reach the end of all our ways,
Jesus Christ our Lord, risen and glorious.
Who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '06-07': [proper('Saint Colman of Dromore, Bishop', '드로모어의 성 콜만 주교', 'optional', 26, {
            collect: `As we commemorate Saint Colman of Dromore, Lord our God,
we celebrate the riches of your blessing;
grant to your Church, we pray, this threefold gift:
to love learning, to live simply,
and to seek your kingdom above all things.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '06-09': [proper('Saint Columba (Colum Cille), Abbot and Missionary, Secondary Patron of Ireland', '성 콜룸바(콜룸 킬레) 아빠스와 선교사, 아일랜드 제2수호자 축일', 'feast', 27, {
            entrance: `Cf. Psalm 138:9-10
If I take the wings of the morning
and dwell in the uttermost parts of the sea,
even there your hand shall lead me,
your right hand hold me fast.`,
            collect: `Almighty God,
who filled the heart of Saint Columba
with the joy of the Holy Spirit
and with deep love for those in his care;
grant, by his intercession,
that your pilgrim people may follow him,
strong in faith, sustained by hope,
and one in the love that binds us to you.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`,
            prayer_offerings: `Lord, in your goodness receive these gifts
and through the prayers of Saint Columba
make us ever worthy to serve you.
Through Christ our Lord.`,
            preface: `It is truly right and just, our duty and our salvation,
always and everywhere to give you thanks,
Lord, holy Father, almighty and eternal God,
and to offer you fitting praise
as we honour Saint Columba.
For you gave him joy in all the works of your hands
and from his youth he delighted in your praise,
making songs to the glory of your name.
With your gift of wisdom he guided many
in holiness, charity and fidelity
along the pathways to heaven.
And answered your call to become for Christ
a pilgrim from his native land,
so that those who dwelt across the seas
might hear the Gospel of peace.
And so, with Archangels and Angels,
with all the heavenly host,
we proclaim your glory
and join in their unending chorus of praise.`,
            communion: `Cf. Colossians 3:14-15
Clothe yourselves with love and let the peace of Christ rule in your hearts.`,
            prayer_after: `As we have received from you, Lord,
the blessing of your holy gifts,
we pray that, at the intercession of Saint Columba,
their healing power
may work within us in body, mind and spirit.
Through Christ our Lord.`
        })],
        '06-14': [proper('Saint Davnet, Virgin', '성녀 다브넷 동정', 'optional', 30, {
            collect: `In the life and work of Saint Davnet, Lord,
you revealed both the power of your grace
and your loving care for the Church;
at the intercession of this holy virgin,
grant your Church pastors, we pray,
who may follow the truth in a spirit of love
and guide others by the authority of their witness.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '06-20': [proper('The Irish Martyrs', '아일랜드의 복자 순교자들 기념일', 'memorial', 30, {
            collect: `In troubled times, O Lord,
you gave us as a pattern of constancy
the Blessed Martyrs of Ireland,
who for the joy that was set before them
endured the cross, rejecting its shame;
grant, by their prayers,
that faithfully following your commandments
we may bring forth fruits of unity and peace.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        }, { martyr: true })],
        '07-01': [proper('Saint Oliver Plunkett, Bishop and Martyr', '성 올리버 플렁켓 주교 순교자 기념일', 'memorial', 31, {
            entrance: `Ezekiel 34:11, 23-24
I will seek out my sheep, says the Lord, and I, the Lord, will be their God.`,
            collect: `God our Father,
you filled Saint Oliver with your spirit of fortitude,
enabling him to feed your people with his word
and to lay down his life for the faith;
at his intercession
keep us strong in the same true faith
and help us to proclaim it everywhere.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`,
            prayer_offerings: `All-powerful God,
look upon the gifts we bring
as we commemorate Saint Oliver,
and grant that we who rejoice to celebrate
the mystery of the death of the Lord
may imitate the love we celebrate.
Through Christ our Lord.`,
            communion: `John 12:24-25
Unless a grain of wheat falls into the earth and dies, it remains alone;
but if it dies, it bears much fruit, says the Lord.`,
            prayer_after: `May the Sacrament of unity we have shared, Lord,
renew in us the power of your Spirit
so that, after the example of Saint Oliver,
we may work for reconciliation and peace.
Through Christ our Lord.`
        }, { martyr: true })],
        '07-06': [proper('Saint Moninne, Virgin', '성녀 모닌 동정', 'optional', 31, {
            collect: `Lord God,
in the quiet of the mountain side
you led Saint Moninne along the paths of perfection
in a community of loving service;
grant, we pray, that as she was generous to all in need
so may we give ourselves willingly to the service of others.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '07-07': [proper('Saint Maelruain, Bishop and Abbot', '성 마엘루아인 주교와 아빠스', 'optional', 32, {
            collect: `Lord God, through your grace
Saint Maelruain established at Tallaght
a devoted community of prayer, poverty and obedience
that formed many in wisdom and holiness;
grant, by his prayers, that we who inherit his teachings
may ourselves grow daily in true devotion.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '07-08': [proper('Saint Kilian, Bishop and Martyr', '성 킬리안 주교 순교자', 'optional', 32, {
            collect: `Lord God, who called Saint Kilian from his native land
to preach the Gospel in Europe
and crowned his work with martyrdom;
make us, we pray, strong in the faith he preached
and eager to witness to its power.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        }, { martyr: true })],
        '07-24': [proper('Saint Declan, Bishop', '성 데클란 주교', 'optional', 32, {
            collect: `Lord God, who through Saint Declan
sowed the seeds of faith in Ireland,
grant that your people,
by following his example of prayer
and continuing his love for the poor,
may come to maturity in Christ.
Who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '08-09': [
            proper('Saint Nathy, Bishop', '성 네이시 주교', 'optional', 33, {
                collect: `God, faithful and true,
by the life, death and resurrection of your Son
you have redeemed the entire creation
and made known to us the mystery of your divine love;
grant that, after the example of your bishop Saint Nathy,
we may become Christ’s faithful disciples
and grow in the knowledge of your truth.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
            }, { alternativeTitles: ['Saint Felim, Bishop'] }),
            proper('Saint Felim, Bishop', '성 펠림 주교', 'optional', 33, {
                collect: `Lord of glory,
in the self-abasement of your Son
you gave us an example that we are to follow;
through the intercession of your bishop Saint Felim,
take from your Church all that encumbers it
and make us ready to serve you
in freedom and in love.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
            })
        ],
        '08-12': [
            proper('Saint Muredach, Bishop', '성 무레다크 주교', 'optional', 33, {
                collect: `Lord God, each year on the feast of Saint Muredach, your bishop,
you recall to our minds
the love with which you care for us,
the providence that sustains our lives;
build up, we pray, your Church
by the working of your Spirit among us
and make us instruments of your Gospel in the world.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
            }, { alternativeTitles: ['Saint Attracta, Virgin', 'Saint Lelia, Virgin'] }),
            proper('Saint Attracta, Virgin', '성녀 아트락타 동정', 'optional', 34, {
                collect: `Lord, you are present and live among us
in the sick and in all who suffer;
as once you called Saint Attracta
to care for the weak and the homeless,
so open now our eyes to know you
and our hearts to give you welcome.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
            }),
            proper('Saint Lelia, Virgin', '성녀 렐리아 동정', 'optional', 34, {
                collect: `Lord God, you have promised to come to those who love you
and to make your home with them;
through the prayers of Saint Lelia, your virgin,
make our hearts ready to receive you,
and fill our lives with your divine love.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
            })
        ],
        '08-13': [proper('Saint Fachtna, Bishop', '성 파흐트나 주교', 'optional', 34, {
            collect: `Lord, who never cease to feed your people
by your word of life;
grant that, as once, through the labours of Saint Fachtna,
you gathered disciples who would devote themselves
to the study of the Scriptures,
so today make us eager to know you
and to find you in the Gospel we proclaim.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '08-17': [proper('Our Lady of Knock', '노크의 성모 마리아 기념일', 'memorial', 0, {}, {
            sourceNote: 'Current Ireland calendar; added after the 2009 National Proper publication'
        })],
        '08-23': [proper('Saint Eugene, Bishop', '성 유진 주교', 'optional', 35, {
            collect: `Lord, you tended the beginnings of the Church in our country
and nurtured its growth to yield a rich harvest;
grant that at the prayers of Saint Eugene,
the seed of faith may spring up strong among your people
to produce a hundredfold now in our day.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '08-30': [proper('Saint Fiacre, Monk', '성 피아크르 수도승', 'optional', 35, {
            collect: `Lord, our creator and loving God,
in the lifework of Saint Fiacre
you have shown your power
to heal the ravages of disease
and in the wilderness to bring forth life;
give us, we pray, the vision of faith,
to see your hand in the beauty of creation
and to recognise your face in all who suffer.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '08-31': [proper('Saint Aidan of Lindisfarne, Bishop and Missionary', '린디스판의 성 아이단 주교와 선교사', 'optional', 35, {
            collect: `Lord God,
you sent the gentle bishop Saint Aidan
to proclaim the Gospel of Jesus Christ;
grant us, by his prayers, to live as he taught
in simplicity, humility and love for the poor.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '09-04': [proper('Saint Mac Nissi, Bishop', '성 맥 니시 주교 기념일', 'memorial', 36, {
            collect: `Send labourers, O Lord, we pray,
to reap where your bishop Saint Mac Nissi sowed your word,
and grant that at the final harvest sower and reaper
may rejoice together in your kingdom.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '09-09': [proper('Saint Ciaran, Abbot', '성 키어런 아빠스 기념일', 'memorial', 36, {
            entrance: `Cf. Jeremiah 17:7-8
Blessed is the man who trusts in the Lord,
he is like a tree planted by water,
that sends out its roots by the stream.`,
            collect: `Lord and shepherd of your people,
who led Saint Ciaran to green pastures
beside peaceful waters,
and prepared the place of his resurrection
at Clonmacnois;
grant, by his prayers, that we may know the shortness of life
so that we may gain wisdom of heart.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`,
            prayer_offerings: `Lord, may the gifts we place before you
as we commemorate Saint Ciaran,
bring us nourishment on earth
and a foretaste of eternal joys.
Through Christ our Lord.`,
            communion: `Psalm 41:2
Like the deer that yearns for running streams,
so my soul is yearning for you, my God.`,
            prayer_after: `Strengthen us, Lord, we pray
by the Sacrament we have received,
so that through our life and in our death
Christ may be glorified.
Who lives and reigns for ever and ever.`
        })],
        '09-12': [proper('Saint Ailbe, Bishop', '성 알베 주교', 'optional', 37, {
            collect: `Lord, you nourished the household of the Church
through the merits and labours of Saint Ailbe;
watch over the flock, we pray,
and endow it with your choicest gifts.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '09-23': [proper('Saint Eunan (Adomnan), Abbot', '성 에우난(아돔난) 아빠스', 'optional', 37, {
            collect: `Lord God, in the life of Saint Eunan
you revealed the Gospel to the poor
and restored freedom to captives;
grant us a share, we pray,
in his eagerness to imitate the Saints
and in his compassion for sinners.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '09-25': [proper('Saint Finbarr, Bishop', '성 핀바르 주교', 'optional', 37, {
            collect: `O Lord, who has promised
through your Only Begotten Son that the poor in spirit
will inherit the kingdom of heaven;
fix our wayward hearts, we pray,
on the treasure of the Gospel
that, with the example of Saint Finbarr for guide,
our delight may be in serving you.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '10-03': [proper('Blessed Columba Marmion, Abbot', '복자 콜룸바 마르미옹 아빠스', 'optional', 0, {}, {
            sourceNote: 'Current Ireland calendar; added after the 2009 National Proper publication'
        })],
        '10-11': [proper('Saint Canice, Abbot', '성 카니체 아빠스', 'optional', 38, {
            collect: `O God of mercy,
in joy and in sorrow,
turn our minds and hearts to you,
and with the abbot Saint Canice to plead for us
grant that nothing, in life or in death,
may sever us from your love.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '10-16': [proper('Saint Gall, Abbot and Missionary', '성 갈 아빠스와 선교사', 'optional', 38, {
            collect: `Lord, our God,
who drew Saint Gall to seek you in solitude,
and in the lofty splendour of the mountain
revealed yourself to him;
grant us by his intercession
to follow the pattern
of his meekness and unyielding faith
and so enter with him
into the joy of Christ our Lord.
Who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '10-27': [proper('Saint Otteran, Monk', '성 오테란 수도승', 'optional', 38, {
            collect: `God of faithfulness,
you have given us the joy of commemorating Saint Otteran,
who left family and country for love of the Gospel;
through his intercession
grant us a strong faith to recognise your voice
and to respond readily to your call.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '10-29': [proper('Saint Colman, Bishop', '성 콜만 주교', 'optional', 39, {
            collect: `Father of our Saviour Jesus Christ,
who established your dwelling
in the heart of your bishop Saint Colman,
and through solitude and contemplation
made him strong in your love;
form us, we pray, in the spirit of penance and prayer
so that we, too, may live by your divine life.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '11-03': [proper('Saint Malachy, Bishop', '성 말라키 주교 기념일', 'memorial', 39, {
            entrance: `1 Samuel 2:35
I will raise up for myself a faithful priest;
he will do what is in my heart and in my mind, says the Lord.`,
            collect: `Almighty God,
who called your bishop Saint Malachy to work for the unity and growth
of the Church throughout Ireland;
grant that we may follow his example
in striving for reconciliation and peace
and become Christian both in name and in deed.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`,
            prayer_offerings: `Look with favour, Lord, upon your people,
who celebrate the memory of Saint Malachy,
for by the offering we make to your glory
you build up the life of the Church.
Through Christ our Lord.`,
            communion: `Cf. John 15:16
You did not choose me, says the Lord, I have chosen you,
to go and bear fruit that will last.`,
            prayer_after: `By the power of this Sacrament, Lord,
purify, we pray, your Church:
restore your spirit within us,
and renew our vigour in your service.
Through Christ our Lord.`
        })],
        '11-06': [proper('All the Saints of Ireland', '아일랜드의 모든 성인 축일', 'feast', 40, {
            entrance: `Cf. Sirach 44:1-2
Let us sing the praises of our ancestors in their successive generations,
for the Lord has created an abundance of glory,
and displayed his greatness from earliest times.`,
            collect: `Lord God,
as we celebrate the power of the Gospel
that you displayed in the Saints of our land,
work for us, we pray, new wonders of your grace:
that the faith may grow stronger among us,
and true charity bind us in peace.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`,
            prayer_offerings: `Accept at our hands, O Lord, we pray,
these gifts of the fruits of the earth
that we bring before you
on the feast of all the Saints of Ireland;
and by this holy sacrifice make of us a pure offering
to the glory of your name.
Through Christ our Lord.`,
            preface: `It is truly right and just, our duty and our salvation,
always and everywhere to give you thanks,
Lord, holy Father, almighty and eternal God,
through Jesus Christ, our Lord.
For you are glorified in the Saints of this land
and in them you manifest the rich diversity of your gifts,
which come to us through the Death and Resurrection of Christ your Son.
In these faithful servants he has come close to us;
in the familiar pattern of their lives
he shows us the ways of holiness;
in their intercession for us
he offers to you the pleading of our own.
And so in company with them and with all the Angels
we cry out with a single voice
in praise of your glory.`,
            communion: `Matthew 5:8-10
Blessed are the pure in heart, for they will see God;
blessed are the peacemakers,
for they will be called children of God;
blessed are those who are persecuted for righteousness’ sake,
for theirs is the kingdom of heaven, says the Lord.`,
            prayer_after: `By your never-failing gift, O Lord,
these Sacraments have sustained your people
on their pilgrim way;
grant that in the strength of this same food
we too may walk to the holy mountain
where you dwell with all the Saints.
Through Christ our Lord.`
        })],
        '11-07': [proper('Saint Willibrord, Bishop and Missionary', '성 윌리브로드 주교와 선교사', 'optional', 44, {
            collect: `God, the Saviour of all nations,
you sent your bishop Saint Willibrord
to proclaim the Gospel to many peoples
and to confirm them in the faith;
grant us, at his intercession,
to witness to your steadfast love by word and deed,
so that your Church may increase
and grow strong in holiness.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '11-14': [proper('Saint Laurence O’Toole, Bishop', '성 로렌스 오툴 주교', 'optional', 44, {
            collect: `God of all holiness,
who called Saint Laurence O’Toole from a life of quiet and solitude
to be a shepherd of your people, a teacher of the clergy,
and friend of the poor;
grant, we pray, that we may follow his example of perseverance
and through his intercession
arrive at the peace of your kingdom.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '11-23': [proper('Saint Columban, Abbot and Missionary', '성 콜룸바노 아빠스와 선교사 기념일', 'memorial', 45, {
            entrance: `Psalm 26:1
The Lord is my light and my salvation; whom shall I fear?
The Lord is the stronghold of my life; of whom shall I be afraid?`,
            collect: `O God, in Saint Columban you have given us
a wonderful model of missionary zeal
joined with love of the monastic life;
grant by his intercession and example
that we may seek you above all things,
and work to enlarge the company
of those who believe in you.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`,
            prayer_offerings: `Accept our gifts, O Lord,
as you accepted the dedicated life of Saint Columban,
and by this sacrifice
consecrate us to your service.
Through Christ our Lord.`,
            communion: `Cf. Psalm 41:1
Like the deer that yearns for flowing streams,
so my soul is yearning for you, my God.`,
            prayer_after: `May the grace of this Sacrament, Lord God,
which accompanied Saint Columban on his pilgrimage for Christ,
strengthen us in time of trial,
that we may stand with confidence
before the judgement seat of your Son.
Who lives and reigns for ever and ever.`
        })],
        '11-25': [proper('Saint Colman of Cloyne, Bishop', '클로인의 성 콜만 주교', 'optional', 46, {
            collect: `Almighty God,
you gave your bishop Saint Colman the gift of gracious speech
and called him to build up the Church;
grant us, by his intercession,
so to sing your praise in the midst of our toil here on earth,
that we may delight in the enjoyment of heavenly rest.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '11-27': [proper('Saint Fergal, Bishop and Missionary', '성 페르갈 주교와 선교사', 'optional', 46, {
            collect: `Almighty God,
you sent Saint Fergal from his homeland
to lead a distant people
in the ways of holiness and learning;
grant that by our love for the truth of the Gospel
we too may grow in the knowledge of your Son.
Who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '12-12': [proper('Saint Finnian, Bishop', '성 피니안 주교', 'optional', 46, {
            collect: `By the work of your bishop Saint Finnian, Lord,
you formed a multitude of Saints
in the knowledge of the Gospel
and in the monastic life;
in our own day raise up, we pray, at his intercession,
Saints to edify your people
by the vitality of their Christian lives.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '12-18': [proper('Saint Flannan, Bishop', '성 플래넌 주교', 'optional', 47, {
            collect: `As we prepare to celebrate, O God,
the mystery of your Word made flesh,
grant us the grace, we pray,
through the intercession of Saint Flannan,
to hear the Gospel your Son proclaims to us
and to nurture the seed he sows in our hearts.
Who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })],
        '12-20': [proper('Saint Fachanan, Bishop', '성 파하난 주교', 'optional', 47, {
            collect: `Lord God,
as we eagerly await the dawning of the Sun of Justice,
who will scatter the darkness of ignorance and sin
to shed the light of your glory on the world,
we commemorate your bishop Saint Fachanan,
praying that, through his intercession,
you bring us to the joy of that day which has no end.
Through our Lord Jesus Christ, your Son,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever.`
        })]
    };

    const moduleData = Object.freeze({
        schemaVersion: 1,
        jurisdiction: 'IE',
        jurisdictions: Object.freeze(['IE', 'GB-NIR']),
        jurisdictionName: 'Ireland',
        conferenceCalendar: 'Ireland',
        ordinaryLanguage: 'EN',
        ordinary: globalThis.countryMassData && globalThis.countryMassData.US
            ? globalThis.countryMassData.US.ordinary
            : Object.freeze([]),
        source,
        dailyReadings: Object.freeze({
            provider: 'Universalis',
            calendar: 'Ireland',
            translation: 'Jerusalem Bible',
            url: dateKey => `https://universalis.com/L/europe.ireland/${dateKey}/mass.htm`
        }),
        calendar
    });
    if (!globalThis.countryMassData || typeof globalThis.countryMassData !== 'object') globalThis.countryMassData = {};
    globalThis.countryMassData.IE = moduleData;
})();
