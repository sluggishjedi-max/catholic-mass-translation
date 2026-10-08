# Edit this country's special Masses here, then run tools/build-special-liturgies.py.
from common import country_profile

SPECIAL_LITURGIES = country_profile('US')
SPECIAL_LITURGIES['feastTransfers'] = {'ascension': {'thursdayDioceses': [
    'Boston', 'Burlington', 'Fall River', 'Manchester', 'Portland', 'Springfield in Massachusetts', 'Worcester',
    'Hartford', 'Bridgeport', 'Norwich', 'Providence',
    'New York', 'Albany', 'Brooklyn', 'Buffalo', 'Ogdensburg', 'Rochester', 'Rockville Centre', 'Syracuse',
    'Omaha', 'Grand Island', 'Lincoln',
    'Philadelphia', 'Allentown', 'Altoona-Johnstown', 'Erie', 'Greensburg', 'Harrisburg', 'Pittsburgh', 'Scranton',
]}}
from _vigils import country_vigils
SPECIAL_LITURGIES['vigils'].extend(country_vigils(['epiphany', 'ascension', 'pentecost', 'assumption', 'peter_paul', 'john_baptist']))

from _missal_parts import apply_missal_parts
MISSAL_SPECIAL_TEXTS = {'palm_sunday': {'rites': {'palm_form': '<On this day the Church recalls the entrance of Christ '
                                        'the Lord into Jerusalem to accomplish\n'
                                        'his Paschal Mystery. Accordingly, the memorial of this '
                                        'entrance of the Lord takes place at all\n'
                                        'Masses, by means of the Procession or the Solemn Entrance '
                                        'before the principal Mass or the\n'
                                        'Simple Entrance before other Masses. The Solemn Entrance, '
                                        'but not the Procession, may be\n'
                                        'repeated before other Masses that are usually celebrated '
                                        'with a large gathering of people.\n'
                                        'It is desirable that, where neither the Procession nor '
                                        'the Solemn Entrance can take place,\n'
                                        'there be a sacred celebration of the Word of God on the '
                                        'messianic entrance and on the\n'
                                        'Passion of the Lord, either on Saturday evening or on '
                                        'Sunday at a convenient time.>',
                           'palm_antiphon': '◎ Hosanna to the Son of David; blessed is he who '
                                            'comes in the name of the Lord, the King of Israel. '
                                            'Hosanna in the highest.',
                           'palm_intro': 'Dear brethren(brothers and sisters),\n'
                                         'since the beginning of Lent until now\n'
                                         'we have prepared our hearts by penance and charitable '
                                         'works.\n'
                                         'Today we gather together to herald with the whole '
                                         'Church\n'
                                         'the beginning of the celebration\n'
                                         'of our Lord’s Paschal Mystery,\n'
                                         'that is to say, of his Passion and Resurrection.\n'
                                         'For it was to accomplish this mystery\n'
                                         'that he entered his own city of Jerusalem.\n'
                                         'Therefore, with all faith and devotion,\n'
                                         'let us commemorate\n'
                                         'the Lord’s entry into the city for our salvation,\n'
                                         'following in his footsteps,\n'
                                         'so that, being made by his grace partakers of the '
                                         'Cross,\n'
                                         'we may have a share also in his Resurrection and in his '
                                         'life.',
                           'palm_blessing': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'},
                                                         'B': {'KR': '제2양식', 'EN': 'Form 2'}},
                                             'variants': {'A': {'lines': [{'sp': '',
                                                                           'text': 'Almighty '
                                                                                   'ever-living '
                                                                                   'God,'},
                                                                          {'sp': '',
                                                                           'text': 'sanctify X '
                                                                                   'these branches '
                                                                                   'with your '
                                                                                   'blessing,'},
                                                                          {'sp': '',
                                                                           'text': 'that we, who '
                                                                                   'follow Christ '
                                                                                   'the King in '
                                                                                   'exultation,'},
                                                                          {'sp': '',
                                                                           'text': 'may reach the '
                                                                                   'eternal '
                                                                                   'Jerusalem '
                                                                                   'through him.'},
                                                                          {'sp': '',
                                                                           'text': 'Who lives and '
                                                                                   'reigns for '
                                                                                   'ever and '
                                                                                   'ever.'},
                                                                          {'sp': '◎',
                                                                           'text': 'Amen.'}]},
                                                          'B': {'lines': [{'sp': '',
                                                                           'text': 'Increase the '
                                                                                   'faith of those '
                                                                                   'who place '
                                                                                   'their hope in '
                                                                                   'you, O God,'},
                                                                          {'sp': '',
                                                                           'text': 'and graciously '
                                                                                   'hear the '
                                                                                   'prayers of '
                                                                                   'those who call '
                                                                                   'on you,'},
                                                                          {'sp': '',
                                                                           'text': 'that we, who '
                                                                                   'today hold '
                                                                                   'high these '
                                                                                   'branches'},
                                                                          {'sp': '',
                                                                           'text': 'to hail Christ '
                                                                                   'in his '
                                                                                   'triumph,'},
                                                                          {'sp': '',
                                                                           'text': 'may bear fruit '
                                                                                   'for you by '
                                                                                   'good works '
                                                                                   'accomplished '
                                                                                   'in him.'},
                                                                          {'sp': '',
                                                                           'text': 'Who lives and '
                                                                                   'reigns for '
                                                                                   'ever and '
                                                                                   'ever.'},
                                                                          {'sp': '◎',
                                                                           'text': 'Amen.'}]}}},
                           'palm_procession': 'After the Gospel, a brief homily may be given. '
                                              'Then, to begin the Procession, an invitation\n'
                                              'may be given by a Priest or a Deacon or a lay '
                                              'minister, in these or similar words:\n'
                                              'Dear brethren (brothers and sisters),\n'
                                              'like the crowds who acclaimed Jesus in Jerusalem,\n'
                                              'let us go forth in peace.\n'
                                              'Or:\n'
                                              'Let us go forth in peace.\n'
                                              'In this latter case, all respond:',
                           'palm_gospel': {'byCycle': {'A': {'lines': [{'sp': '',
                                                                        'text': 'X A reading from '
                                                                                'the holy Gospel '
                                                                                'according to '
                                                                                'Matthew. 21: '
                                                                                '1-11'},
                                                                       {'sp': '',
                                                                        'text': '1 When Jesus and '
                                                                                'the disciples '
                                                                                'drew near '
                                                                                'Jerusalem and'},
                                                                       {'sp': '',
                                                                        'text': 'came to Bethphage '
                                                                                'on the Mount of '
                                                                                'Olives, Jesus '
                                                                                'sent'},
                                                                       {'sp': '',
                                                                        'text': 'two disciples, 2'},
                                                                       {'sp': '',
                                                                        'text': 'saying to them,'},
                                                                       {'sp': '',
                                                                        'text': '“Go into the '
                                                                                'village opposite '
                                                                                'you,'},
                                                                       {'sp': '',
                                                                        'text': 'and immediately '
                                                                                'you will find an '
                                                                                'ass tethered,'},
                                                                       {'sp': '',
                                                                        'text': 'and a colt with '
                                                                                'her.'},
                                                                       {'sp': '',
                                                                        'text': 'Untie them and '
                                                                                'bring them here '
                                                                                'to me.'},
                                                                       {'sp': '',
                                                                        'text': '3 And if anyone '
                                                                                'should say '
                                                                                'anything to you, '
                                                                                'reply,'},
                                                                       {'sp': '',
                                                                        'text': '‘The master has '
                                                                                'need of them.’ '
                                                                                'Then he will send '
                                                                                'them'},
                                                                       {'sp': '',
                                                                        'text': 'at once.”'},
                                                                       {'sp': '',
                                                                        'text': '4 This happened '
                                                                                'so that what had '
                                                                                'been spoken '
                                                                                'through the'},
                                                                       {'sp': '',
                                                                        'text': 'prophet'},
                                                                       {'sp': '',
                                                                        'text': 'might be '
                                                                                'fulfilled:'},
                                                                       {'sp': '',
                                                                        'text': '5 Say to daughter '
                                                                                'Zion,'},
                                                                       {'sp': '',
                                                                        'text': '“Behold, your '
                                                                                'king comes to '
                                                                                'you, meek and '
                                                                                'riding'},
                                                                       {'sp': '',
                                                                        'text': 'on an ass,'},
                                                                       {'sp': '',
                                                                        'text': 'and on a colt, '
                                                                                'the foal of a '
                                                                                'beast of '
                                                                                'burden.”'},
                                                                       {'sp': '',
                                                                        'text': '6 The disciples '
                                                                                'went and did as '
                                                                                'Jesus had ordered '
                                                                                'them.'},
                                                                       {'sp': '',
                                                                        'text': '7 They brought '
                                                                                'the ass and the '
                                                                                'colt and laid '
                                                                                'their cloaks'},
                                                                       {'sp': '',
                                                                        'text': 'over them, and he '
                                                                                'sat upon them.'},
                                                                       {'sp': '',
                                                                        'text': '8 The very large '
                                                                                'crowd spread '
                                                                                'their cloaks on '
                                                                                'the road,'},
                                                                       {'sp': '',
                                                                        'text': 'while others cut '
                                                                                'branches from the '
                                                                                'trees and '
                                                                                'strewed'},
                                                                       {'sp': '',
                                                                        'text': 'them on the '
                                                                                'road.'},
                                                                       {'sp': '',
                                                                        'text': '9 The crowds '
                                                                                'preceding him and '
                                                                                'those following'},
                                                                       {'sp': '',
                                                                        'text': 'kept crying out '
                                                                                'and saying:'},
                                                                       {'sp': '',
                                                                        'text': '“Hosanna to the '
                                                                                'Son of David;'},
                                                                       {'sp': '',
                                                                        'text': 'blessed is he who '
                                                                                'comes in the name '
                                                                                'of the Lord;'},
                                                                       {'sp': '',
                                                                        'text': 'hosanna in the '
                                                                                'highest.”'},
                                                                       {'sp': '',
                                                                        'text': '10 And when he '
                                                                                'entered '
                                                                                'Jerusalem'},
                                                                       {'sp': '',
                                                                        'text': 'the whole city '
                                                                                'was shaken and '
                                                                                'asked, “Who is '
                                                                                'this?”'},
                                                                       {'sp': '',
                                                                        'text': '11 And the crowds '
                                                                                'replied,'},
                                                                       {'sp': '',
                                                                        'text': '“This is Jesus '
                                                                                'the prophet, from '
                                                                                'Nazareth in '
                                                                                'Galilee.”'},
                                                                       {'sp': '',
                                                                        'text': 'The Gospel of the '
                                                                                'Lord.'}]},
                                                       'B': {'lines': [{'sp': '',
                                                                        'text': 'X A reading from '
                                                                                'the holy Gospel '
                                                                                'according to '
                                                                                'Mark. 11: 1-10'},
                                                                       {'sp': '',
                                                                        'text': '1 When Jesus and '
                                                                                'his disciples '
                                                                                'drew near to '
                                                                                'Jerusalem, to'},
                                                                       {'sp': '',
                                                                        'text': 'Bethphage and '
                                                                                'Bethany at the '
                                                                                'Mount of Olives,'},
                                                                       {'sp': '',
                                                                        'text': 'he sent two of '
                                                                                'his disciples 2'},
                                                                       {'sp': '',
                                                                        'text': 'and said to '
                                                                                'them,'},
                                                                       {'sp': '',
                                                                        'text': '“Go into the '
                                                                                'village opposite '
                                                                                'you, and '
                                                                                'immediately on'},
                                                                       {'sp': '',
                                                                        'text': 'entering it,'},
                                                                       {'sp': '',
                                                                        'text': 'you will find a '
                                                                                'colt tethered on '
                                                                                'which no one has '
                                                                                'ever sat.'},
                                                                       {'sp': '',
                                                                        'text': 'Untie it and '
                                                                                'bring it here.'},
                                                                       {'sp': '',
                                                                        'text': '3 If anyone '
                                                                                'should say to '
                                                                                'you,'},
                                                                       {'sp': '',
                                                                        'text': '‘Why are you '
                                                                                'doing this?’ '
                                                                                'reply,'},
                                                                       {'sp': '',
                                                                        'text': '‘The Master has '
                                                                                'need of it'},
                                                                       {'sp': '',
                                                                        'text': 'and will send it '
                                                                                'back here at '
                                                                                'once.’ “'},
                                                                       {'sp': '',
                                                                        'text': '4 So they went '
                                                                                'off'},
                                                                       {'sp': '',
                                                                        'text': 'and found a colt '
                                                                                'tethered at a '
                                                                                'gate outside on '
                                                                                'the street,'},
                                                                       {'sp': '',
                                                                        'text': 'and they untied '
                                                                                'it.'},
                                                                       {'sp': '',
                                                                        'text': '5 Some of the '
                                                                                'bystanders said '
                                                                                'to them,'},
                                                                       {'sp': '',
                                                                        'text': '“What are you '
                                                                                'doing, untying '
                                                                                'the colt?”'},
                                                                       {'sp': '',
                                                                        'text': '6 They answered '
                                                                                'them just as '
                                                                                'Jesus had told '
                                                                                'them to, and'},
                                                                       {'sp': '',
                                                                        'text': 'they permitted '
                                                                                'them to do it.'},
                                                                       {'sp': '',
                                                                        'text': '7 So they brought '
                                                                                'the colt to Jesus '
                                                                                'and put their '
                                                                                'cloaks over it.'},
                                                                       {'sp': '',
                                                                        'text': 'And he sat on '
                                                                                'it.'},
                                                                       {'sp': '',
                                                                        'text': '8 Many people '
                                                                                'spread their '
                                                                                'cloaks on the '
                                                                                'road, and others'},
                                                                       {'sp': '',
                                                                        'text': 'spread leafy '
                                                                                'branches'},
                                                                       {'sp': '',
                                                                        'text': 'that they had cut '
                                                                                'from the fields.'},
                                                                       {'sp': '',
                                                                        'text': '9 Those preceding '
                                                                                'him as well as '
                                                                                'those following '
                                                                                'kept'},
                                                                       {'sp': '',
                                                                        'text': 'crying out: '
                                                                                '“Hosanna!'},
                                                                       {'sp': '',
                                                                        'text': 'Blessed is he who '
                                                                                'comes in the name '
                                                                                'of the Lord!'},
                                                                       {'sp': '',
                                                                        'text': '10 Blessed is the '
                                                                                'kingdom of our '
                                                                                'father David that '
                                                                                'is'},
                                                                       {'sp': '',
                                                                        'text': 'to come!'},
                                                                       {'sp': '',
                                                                        'text': 'Hosanna in the '
                                                                                'highest!”'},
                                                                       {'sp': '',
                                                                        'text': 'The Gospel of the '
                                                                                'Lord.'},
                                                                       {'sp': '', 'text': 'Or:'},
                                                                       {'sp': '',
                                                                        'text': 'X A reading from '
                                                                                'the holy Gospel '
                                                                                'according to '
                                                                                'John. 12: 12-16'},
                                                                       {'sp': '',
                                                                        'text': '12 When the great '
                                                                                'crowd that had '
                                                                                'come to the feast '
                                                                                'heard'},
                                                                       {'sp': '',
                                                                        'text': 'that Jesus was '
                                                                                'coming to '
                                                                                'Jerusalem,'},
                                                                       {'sp': '',
                                                                        'text': '13 they took palm '
                                                                                'branches and went '
                                                                                'out to meet him, '
                                                                                'and'},
                                                                       {'sp': '',
                                                                        'text': 'cried out:'},
                                                                       {'sp': '',
                                                                        'text': '“Hosanna!'},
                                                                       {'sp': '',
                                                                        'text': 'Blessed is he who '
                                                                                'comes in the name '
                                                                                'of the Lord, the '
                                                                                'king'},
                                                                       {'sp': '',
                                                                        'text': 'of Israel.”'},
                                                                       {'sp': '',
                                                                        'text': '14 Jesus found an '
                                                                                'ass and sat upon '
                                                                                'it, as is '
                                                                                'written:'},
                                                                       {'sp': '',
                                                                        'text': '15 Fear no more, '
                                                                                'O daughter Zion;'},
                                                                       {'sp': '',
                                                                        'text': 'see, your king '
                                                                                'comes, seated '
                                                                                'upon an ass’s '
                                                                                'colt.'},
                                                                       {'sp': '',
                                                                        'text': '16 His disciples '
                                                                                'did not '
                                                                                'understand this '
                                                                                'at first, but '
                                                                                'when'},
                                                                       {'sp': '',
                                                                        'text': 'Jesus had been '
                                                                                'glorified'},
                                                                       {'sp': '',
                                                                        'text': 'they remembered '
                                                                                'that these things '
                                                                                'were written '
                                                                                'about'},
                                                                       {'sp': '',
                                                                        'text': 'him and that they '
                                                                                'had done this for '
                                                                                'him.'},
                                                                       {'sp': '',
                                                                        'text': 'The Gospel of the '
                                                                                'Lord.'}]},
                                                       'C': {'lines': [{'sp': '',
                                                                        'text': 'X A reading from '
                                                                                'the holy Gospel '
                                                                                'according to '
                                                                                'Luke. 19: 28-40'},
                                                                       {'sp': '',
                                                                        'text': '28 Jesus '
                                                                                'proceeded on his '
                                                                                'journey up to '
                                                                                'Jerusalem.'},
                                                                       {'sp': '',
                                                                        'text': '29 As he drew '
                                                                                'near to Bethphage '
                                                                                'and Bethany at '
                                                                                'the place'},
                                                                       {'sp': '',
                                                                        'text': 'called the Mount '
                                                                                'of Olives,'},
                                                                       {'sp': '',
                                                                        'text': 'he sent two of '
                                                                                'his disciples.'},
                                                                       {'sp': '',
                                                                        'text': '30 He said, “Go '
                                                                                'into the village '
                                                                                'opposite you,'},
                                                                       {'sp': '',
                                                                        'text': 'and as you enter '
                                                                                'it you will find '
                                                                                'a colt tethered '
                                                                                'on which'},
                                                                       {'sp': '',
                                                                        'text': 'no one has ever '
                                                                                'sat.'},
                                                                       {'sp': '',
                                                                        'text': 'Untie it and '
                                                                                'bring it here.'},
                                                                       {'sp': '',
                                                                        'text': '31 And if anyone '
                                                                                'should ask you,'},
                                                                       {'sp': '',
                                                                        'text': '‘Why are you '
                                                                                'untying it?’ you '
                                                                                'will answer,'},
                                                                       {'sp': '',
                                                                        'text': '‘The Master has '
                                                                                'need of it.’ “'},
                                                                       {'sp': '',
                                                                        'text': '32 So those who '
                                                                                'had been sent '
                                                                                'went off'},
                                                                       {'sp': '',
                                                                        'text': 'and found '
                                                                                'everything just '
                                                                                'as he had told '
                                                                                'them.'},
                                                                       {'sp': '',
                                                                        'text': '33 And as they '
                                                                                'were untying the '
                                                                                'colt, its owners '
                                                                                'said to'},
                                                                       {'sp': '',
                                                                        'text': 'them, “Why are '
                                                                                'you untying this '
                                                                                'colt?”'},
                                                                       {'sp': '',
                                                                        'text': '34 They '
                                                                                'answered,'},
                                                                       {'sp': '',
                                                                        'text': '“The Master has '
                                                                                'need of it.”35 So '
                                                                                'they brought it '
                                                                                'to Jesus,'},
                                                                       {'sp': '',
                                                                        'text': 'threw their '
                                                                                'cloaks over the '
                                                                                'colt,'},
                                                                       {'sp': '',
                                                                        'text': 'and helped Jesus '
                                                                                'to mount.'},
                                                                       {'sp': '',
                                                                        'text': '36 As he rode '
                                                                                'along,'},
                                                                       {'sp': '',
                                                                        'text': 'the people were '
                                                                                'spreading their '
                                                                                'cloaks on the '
                                                                                'road;'},
                                                                       {'sp': '',
                                                                        'text': '37 and now as he '
                                                                                'was approaching '
                                                                                'the slope of the '
                                                                                'Mount of'},
                                                                       {'sp': '',
                                                                        'text': 'Olives, the whole '
                                                                                'multitude of his '
                                                                                'disciples'},
                                                                       {'sp': '',
                                                                        'text': 'began to praise '
                                                                                'God aloud with '
                                                                                'joy'},
                                                                       {'sp': '',
                                                                        'text': 'for all the '
                                                                                'mighty deeds they '
                                                                                'had seen.'},
                                                                       {'sp': '',
                                                                        'text': '38 They '
                                                                                'proclaimed:'},
                                                                       {'sp': '',
                                                                        'text': '“Blessed is the '
                                                                                'king who comes in '
                                                                                'the name of the '
                                                                                'Lord.'},
                                                                       {'sp': '',
                                                                        'text': '39 Peace in '
                                                                                'heaven and glory '
                                                                                'in the highest.”'},
                                                                       {'sp': '',
                                                                        'text': 'Some of the '
                                                                                'Pharisees in the '
                                                                                'crowd said to '
                                                                                'him, “Teacher,'},
                                                                       {'sp': '',
                                                                        'text': 'rebuke your '
                                                                                'disciples.”'},
                                                                       {'sp': '',
                                                                        'text': '40 He said in '
                                                                                'reply,'},
                                                                       {'sp': '',
                                                                        'text': '“I tell you, if '
                                                                                'they keep silent, '
                                                                                'the stones will '
                                                                                'cry out!”'},
                                                                       {'sp': '',
                                                                        'text': 'The Gospel of the '
                                                                                'Lord.'}]}}}},
                 'prayers': {'entrance': 'Six days before the Passover,\n'
                                         'when the Lord came into the city of Jerusalem,\n'
                                         'the children ran to meet him;\n'
                                         'in their hands they carried palm branches\n'
                                         'and with a loud voice cried out:\n'
                                         '*Hosanna in the highest!\n'
                                         'Blessed are you, who have come in your abundant mercy!\n'
                                         'O gates, lift high your heads;\n'
                                         'grow higher, ancient doors.\n'
                                         'Let him enter, the king of glory!\n'
                                         'Who is this king of glory?\n'
                                         'He, the Lord of hosts, he is the king of glory.\n'
                                         '*Hosanna in the highest!\n'
                                         'Blessed are you, who have come in your abundant mercy!',
                             'collect': 'Almighty ever-living God,\n'
                                        'who as an example of humility for the human race to '
                                        'follow\n'
                                        'caused our Savior to take flesh and submit to the Cross,\n'
                                        'graciously grant that we may heed his lesson of patient '
                                        'suffering\n'
                                        'and so merit a share in his Resurrection.\n'
                                        'Who lives and reigns with you in the unity of the Holy '
                                        'Spirit,\n'
                                        'one God, for ever and ever.',
                             'prayer_offerings': 'Through the Passion of your Only Begotten Son, O '
                                                 'Lord,\n'
                                                 'may our reconciliation with you be near at '
                                                 'hand,\n'
                                                 'so that, though we do not merit it by our own '
                                                 'deeds,\n'
                                                 'yet by this sacrifice made once for all,\n'
                                                 'we may feel already the effects of your mercy.\n'
                                                 'Through Christ our Lord.',
                             'communion': 'Father, if this chalice cannot pass without my drinking '
                                          'it,\n'
                                          'your will be done.',
                             'prayer_after': 'Nourished with these sacred gifts,\n'
                                             'we humbly beseech you, O Lord,\n'
                                             'that, just as through the death of your Son\n'
                                             'you have brought us to hope for what we believe,\n'
                                             'so by his Resurrection\n'
                                             'you may lead us to where you call.\n'
                                             'Through Christ our Lord.'}},
 'holy_thursday': {'rites': {'thursday_intro': '<The Mass of the Lord’s Supper is celebrated in '
                                               'the evening, at a convenient time, with the full\n'
                                               'participation of the whole local community and '
                                               'with all the Priests and ministers exercising\n'
                                               'their office.\n'
                                               '2. All Priests may concelebrate even if they have '
                                               'already concelebrated the Chrism Mass on\n'
                                               'this day, or if they have to celebrate another '
                                               'Mass for the good of the Christian faithful.\n'
                                               '3. Where a pastoral reason requires it, the local '
                                               'Ordinary may permit another Mass to be celebrated\n'
                                               'in churches and oratories in the evening and, in '
                                               'case of genuine necessity, even in the morning,\n'
                                               'but only for the faithful who are in no way able '
                                               'to participate in the evening Mass. Care should,\n'
                                               'nevertheless, be taken that celebrations of this '
                                               'sort do not take place for the advantage of '
                                               'private\n'
                                               'persons or special small groups, and do not '
                                               'prejudice the evening Mass.\n'
                                               '4. Holy Communion may only be distributed to the '
                                               'faithful during Mass; but it may be brought\n'
                                               'to the sick at any hour of the day.\n'
                                               '5. The altar may be decorated with flowers with a '
                                               'moderation that accords with the character\n'
                                               'of this day. The tabernacle should be entirely '
                                               'empty; but a sufficient amount of bread should\n'
                                               'be consecrated in this Mass for the Communion of '
                                               'the clergy and the people on this and the\n'
                                               'following day.>',
                             'washing_feet': '10. After the Homily, where a pastoral reason '
                                             'suggests it, the Washing of Feet follows.\n'
                                             '11. Those who are chosen from amongst the people of '
                                             'God are led by the ministers to seats prepared in a '
                                             'suitable place.\n'
                                             'Then the Priest (removing his chasuble if necessary) '
                                             'goes to each one, and, with the help of\n'
                                             'the ministers, pours water over each one’s feet and '
                                             'then dries them.\n'
                                             '12. Meanwhile some of the following antiphons or '
                                             'other appropriate chants are sung.\n'
                                             'Antiphon 1 Cf. Jn 13: 4, 5, 15\n'
                                             'After the Lord had risen from supper,\n'
                                             'he poured water into a basin\n'
                                             'and began to wash the feet of his disciples:\n'
                                             'he left them this example.\n'
                                             'Antiphon 2 Cf. Jn 13: 12, 13, 15\n'
                                             'The Lord Jesus, after eating supper with his '
                                             'disciples,\n'
                                             'washed their feet and said to them:\n'
                                             'Do you know what I, your Lord and Master, have done '
                                             'for you?\n'
                                             'I have given you an example, that you should do '
                                             'likewise.\n'
                                             'Antiphon 3 Jn 13: 6, 7, 8\n'
                                             'Lord, are you to wash my feet? Jesus said to him in '
                                             'answer:\n'
                                             'If I do not wash your feet, you will have no share '
                                             'with me.\n'
                                             'V. So he came to Simon Peter and Peter said to him:\n'
                                             '—Lord.\n'
                                             'V. What I am doing, you do not know for now,\n'
                                             'but later you will come to know.\n'
                                             '—Lord.\n'
                                             'Antiphon 4 Cf. Jn 13: 14\n'
                                             'If I, your Lord and Master, have washed your feet,\n'
                                             'how much more should you wash each other’s feet?\n'
                                             'Antiphon 5 Jn 13: 35\n'
                                             'This is how all will know that you are my '
                                             'disciples:\n'
                                             'if you have love for one another.\n'
                                             'V. Jesus said to his disciples:\n'
                                             '—This is how.\n'
                                             'Antiphon 6 Jn 13: 34\n'
                                             'I give you a new commandment,\n'
                                             'that you love one another\n'
                                             'as I have loved you, says the Lord.\n'
                                             'Antiphon 7 1 Cor 13:13\n'
                                             'Let faith, hope and charity, these three, remain '
                                             'among you,\n'
                                             'but the greatest of these is charity.\n'
                                             'V. Now faith, hope and charity, these three, '
                                             'remain;\n'
                                             'but the greatest of these is charity.\n'
                                             '—Let.',
                             'thursday_offertory': 'At the beginning of the Liturgy of the '
                                                   'Eucharist, there may be a procession of the '
                                                   'faithful in\n'
                                                   'which gifts for the poor may be presented with '
                                                   'the bread and wine.\n'
                                                   'Meanwhile the following, or another '
                                                   'appropriate chant, is sung.\n'
                                                   'Ant. Where true charity is dwelling, God is '
                                                   'present there.\n'
                                                   'V. By the love of Christ we have been brought '
                                                   'together:\n'
                                                   'V. let us find in him our gladness and our '
                                                   'pleasure;\n'
                                                   'V. may we love him and revere him, God the '
                                                   'living,\n'
                                                   'V. and in love respect each other with sincere '
                                                   'hearts.\n'
                                                   'Ant. Where true charity is dwelling, God is '
                                                   'present there.\n'
                                                   'V. So when we as one are gathered all '
                                                   'together,\n'
                                                   'V. let us strive to keep our minds free of '
                                                   'division;\n'
                                                   'V. may there be an end to malice, strife and '
                                                   'quarrels,\n'
                                                   'V. and let Christ our God be dwelling here '
                                                   'among us.\n'
                                                   'Ant. Where true charity is dwelling, God is '
                                                   'present there.\n'
                                                   'V. May your face thus be our vision, bright in '
                                                   'glory,\n'
                                                   'V. Christ our God, with all the blessed Saints '
                                                   'in heaven:\n'
                                                   'V. such delight is pure and faultless, joy '
                                                   'unbounded,\n'
                                                   'V. which endures through countless ages world '
                                                   'without end. Amen.',
                             'reposition': 'After the Prayer after Communion, the Priest puts '
                                           'incense in the thurible while standing,\n'
                                           'blesses it and then, kneeling, incenses the Blessed '
                                           'Sacrament three times. Then, having put\n'
                                           'on a white humeral veil, he rises, takes the ciborium, '
                                           'and covers it with the ends of the veil.\n'
                                           '38. A procession is formed in which the Blessed '
                                           'Sacrament, accompanied by torches and incense,\n'
                                           'is carried through the church to a place of repose '
                                           'prepared in a part of the church or in a chapel\n'
                                           'suitably decorated. A lay minister with a cross, '
                                           'standing between two other ministers with\n'
                                           'lighted candles leads off. Others carrying lighted '
                                           'candles follow. Before the Priest carrying\n'
                                           'the Blessed Sacrament comes the thurifer with a '
                                           'smoking thurible. Meanwhile, the hymn\n'
                                           'Pange, lingua (exclusive of the last two stanzas) or '
                                           'another eucharistic chant is sung.\n'
                                           '39. When the procession reaches the place of repose, '
                                           'the Priest, with the help of the Deacon if\n'
                                           'necessary, places the ciborium in the tabernacle, the '
                                           'door of which remains open. Then he\n'
                                           'puts incense in the thurible and, kneeling, incenses '
                                           'the Blessed Sacrament, while Tantum\n'
                                           'ergo Sacramentum or another eucharistic chant is sung. '
                                           'Then the Deacon or the Priest\n'
                                           'himself places the Sacrament in the tabernacle and '
                                           'closes the door.\n'
                                           '40. After a period of adoration in silence, the Priest '
                                           'and ministers genuflect and return to the\n'
                                           'sacristy.\n'
                                           '41. At an appropriate time, the altar is stripped and, '
                                           'if possible, the crosses are removed from the\n'
                                           'church. It is expedient that any crosses which remain '
                                           'in the church be veiled.\n'
                                           '42. Vespers (Evening Prayer) is not celebrated by '
                                           'those who have attended the Mass of the Lord’s\n'
                                           'Supper.\n'
                                           '43. The faithful are invited to continue adoration '
                                           'before the Blessed Sacrament for a suitable\n'
                                           'length of time during the night, according to local '
                                           'circumstances, but after midnight the\n'
                                           'adoration should take place without solemnity.\n'
                                           '44. If the celebration of the Passion of the Lord on '
                                           'the following Friday does not take place in the\n'
                                           'same church, the Mass is concluded in the usual way '
                                           'and the Blessed Sacrament is placed in\n'
                                           'the tabernacle.',
                             'thursday_end_form': '<If the celebration of the Passion of the Lord '
                                                  'on the following Friday does not take place in '
                                                  'the same church, the Mass is concluded in the '
                                                  'usual way.>'},
                   'prayers': {'entrance': 'We should glory in the Cross of our Lord Jesus '
                                           'Christ,\n'
                                           'in whom is our salvation, life and resurrection,\n'
                                           'through whom we are saved and delivered.',
                               'collect': 'O God, who have called us to participate\n'
                                          'in this most sacred Supper,\n'
                                          'in which your Only Begotten Son,\n'
                                          'when about to hand himself over to death,\n'
                                          'entrusted to the Church a sacrifice new for all '
                                          'eternity,\n'
                                          'the banquet of his love,\n'
                                          'grant, we pray,\n'
                                          'that we may draw from so great a mystery,\n'
                                          'the fullness of charity and of life.\n'
                                          'Through our Lord Jesus Christ, your Son,\n'
                                          'who lives and reigns with you in the unity of the Holy '
                                          'Spirit,\n'
                                          'one God, for ever and ever.',
                               'prayer_offerings': 'Grant us, O Lord, we pray,\n'
                                                   'that we may participate worthily in these '
                                                   'mysteries,\n'
                                                   'for whenever the memorial of this sacrifice is '
                                                   'celebrated\n'
                                                   'the work of our redemption is accomplished.\n'
                                                   'Through Christ our Lord.',
                               'communion': 'This is the Body that will be given up for you;\n'
                                            'this is the Chalice of the new covenant in my Blood, '
                                            'says the Lord;\n'
                                            'do this, whenever you receive it, in memory of me.',
                               'prayer_after': 'Grant, almighty God,\n'
                                               'that, just as we are renewed\n'
                                               'by the Supper of your Son in this present age,\n'
                                               'so we may enjoy his banquet for all eternity.\n'
                                               'Who lives and reigns for ever and ever.'},
                   'eucharistEdits': {'EN': [{'form': '1',
                                              'section': 'form',
                                              'from': 'In communion with those whose memory we '
                                                      'venerate,',
                                              'to': 'Celebrating the most sacred day\n'
                                                    'on which our Lord Jesus Christ\n'
                                                    'was handed over for our sake,\n'
                                                    'and in communion with those whose memory we '
                                                    'venerate,'},
                                             {'form': '1',
                                              'section': 'form',
                                              'from': 'graciously accept this oblation of our '
                                                      'service,<br>that of your whole family;',
                                              'to': 'graciously accept this oblation of our '
                                                    'service,\n'
                                                    'that of your whole family,\n'
                                                    'which we make to you\n'
                                                    'as we observe the day\n'
                                                    'on which our Lord Jesus Christ\n'
                                                    'handed on the mysteries of his Body and '
                                                    'Blood\n'
                                                    'for his disciples to celebrate;'},
                                             {'form': '1',
                                              'section': 'form',
                                              'from': 'On the day before he was to suffer,',
                                              'to': 'On the day before he was to suffer\n'
                                                    'for our salvation and the salvation of all,\n'
                                                    'that is today,'}]}},
 'good_friday': {'rites': {'friday_intro': '<On this and the following day, by a most ancient '
                                           'tradition, the Church does not celebrate the\n'
                                           'Sacraments at all, except for Penance and the '
                                           'Anointing of the Sick.\n'
                                           '2. On this day, Holy Communion is distributed to the '
                                           'faithful only within the celebration of\n'
                                           'the Lord’s Passion; but it may be brought at any hour '
                                           'of the day to the sick who cannot\n'
                                           'participate in this celebration.\n'
                                           '3. The altar should be completely bare: without a '
                                           'cross, without candles and without cloths.\n'
                                           'The Celebration of the Passion of the Lord\n'
                                           '4. On the afternoon of this day, about three o’clock '
                                           '(unless a later hour is chosen for a pastoral\n'
                                           'reason), there takes place the celebration of the '
                                           'Lord’s Passion consisting of three parts,\n'
                                           'namely, the Liturgy of the Word, the Adoration of the '
                                           'Cross, and Holy Communion.\n'
                                           'In the United States, if the size or nature of a '
                                           'parish or other community indicates the\n'
                                           'pastoral need for an additional liturgical service, '
                                           'the Diocesan Bishop may permit the\n'
                                           'service to be repeated later. This liturgy by its very '
                                           'nature may not, however, be celebrated\n'
                                           'in the absence of a Priest.\n'
                                           '5. The Priest and the Deacon, if a Deacon is present, '
                                           'wearing red vestments as for Mass, go\n'
                                           'to the altar in silence and, after making a reverence '
                                           'to the altar, prostrate themselves or, if\n'
                                           'appropriate, kneel and pray in silence for a while. '
                                           'All others kneel.> ',
                           'friday_opening': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'},
                                                          'B': {'KR': '제2양식', 'EN': 'Form 2'}},
                                              'variants': {'A': {'lines': [{'sp': '',
                                                                            'text': 'Remember your '
                                                                                    'mercies, O '
                                                                                    'Lord,'},
                                                                           {'sp': '',
                                                                            'text': 'and with your '
                                                                                    'eternal '
                                                                                    'protection '
                                                                                    'sanctify your '
                                                                                    'servants,'},
                                                                           {'sp': '',
                                                                            'text': 'for whom '
                                                                                    'Christ your '
                                                                                    'Son,'},
                                                                           {'sp': '',
                                                                            'text': 'by the '
                                                                                    'shedding of '
                                                                                    'his Blood,'},
                                                                           {'sp': '',
                                                                            'text': 'established '
                                                                                    'the Paschal '
                                                                                    'Mystery.'},
                                                                           {'sp': '',
                                                                            'text': 'Who lives and '
                                                                                    'reigns for '
                                                                                    'ever and '
                                                                                    'ever.'},
                                                                           {'sp': '◎',
                                                                            'text': 'Amen.'}]},
                                                           'B': {'lines': [{'sp': '',
                                                                            'text': 'O God, who by '
                                                                                    'the Passion '
                                                                                    'of Christ '
                                                                                    'your Son, our '
                                                                                    'Lord,'},
                                                                           {'sp': '',
                                                                            'text': 'abolished the '
                                                                                    'death '
                                                                                    'inherited '
                                                                                    'from ancient '
                                                                                    'sin'},
                                                                           {'sp': '',
                                                                            'text': 'by every '
                                                                                    'succeeding '
                                                                                    'generation,'},
                                                                           {'sp': '',
                                                                            'text': 'grant that '
                                                                                    'just as, '
                                                                                    'being '
                                                                                    'conformed to '
                                                                                    'him,'},
                                                                           {'sp': '',
                                                                            'text': 'we have borne '
                                                                                    'by the law of '
                                                                                    'nature'},
                                                                           {'sp': '',
                                                                            'text': 'the image of '
                                                                                    'the man of '
                                                                                    'earth,'},
                                                                           {'sp': '',
                                                                            'text': 'so by the '
                                                                                    'sanctification '
                                                                                    'of grace'},
                                                                           {'sp': '',
                                                                            'text': 'we may bear '
                                                                                    'the image of '
                                                                                    'the Man of '
                                                                                    'heaven.'},
                                                                           {'sp': '',
                                                                            'text': 'Through '
                                                                                    'Christ our '
                                                                                    'Lord.'},
                                                                           {'sp': '◎',
                                                                            'text': 'Amen.'}]}}},
                           'friday_intercession_1': 'The prayer is sung in the simple tone or, if '
                                                    'the invitations Let us kneel — Let us stand '
                                                    'are\n'
                                                    'used, in the solemn tone.\n'
                                                    'Let us pray, dearly beloved, for the holy '
                                                    'Church of God,\n'
                                                    'that our God and Lord be pleased to give her '
                                                    'peace,\n'
                                                    'to guard her and to unite her throughout the '
                                                    'whole world\n'
                                                    'and grant that, leading our life in '
                                                    'tranquility and quiet,\n'
                                                    'we may glorify God the Father almighty.\n'
                                                    'Prayer in silence. Then the Priest says:\n'
                                                    'Almighty ever-living God,\n'
                                                    'who in Christ revealed your glory to all the '
                                                    'nations,\n'
                                                    'watch over the works of your mercy,\n'
                                                    'that your Church, spread throughout all the '
                                                    'world,\n'
                                                    'may persevere with steadfast faith in '
                                                    'confessing your name.\n'
                                                    'Through Christ our Lord.\n'
                                                    'R. Amen.',
                           'friday_intercession_2': 'Let us pray also for our most Holy Father '
                                                    'Pope N.,\n'
                                                    'that our God and Lord,\n'
                                                    'who chose him for the Order of Bishops,\n'
                                                    'may keep him safe and unharmed for the Lord’s '
                                                    'holy Church,\n'
                                                    'to govern the holy People of God.\n'
                                                    'Prayer in silence. Then the Priest says:\n'
                                                    'Almighty ever-living God,\n'
                                                    'by whose decree all things are founded,\n'
                                                    'look with favor on our prayers\n'
                                                    'and in your kindness protect the Pope chosen '
                                                    'for us,\n'
                                                    'that, under him, the Christian people,\n'
                                                    'governed by you their maker,\n'
                                                    'may grow in merit by reason of their faith.\n'
                                                    'Through Christ our Lord.\n'
                                                    'R. Amen.',
                           'friday_intercession_3': 'Let us pray also for our Bishop N.,\n'
                                                    'for all Bishops, Priests, and Deacons of the '
                                                    'Church\n'
                                                    'and for the whole of the faithful people.\n'
                                                    '* Mention may be made here of the Coadjutor '
                                                    'Bishop, or Auxiliary Bishops, as noted in the '
                                                    'General Instruction of the\n'
                                                    'Roman Missal, no. 149.\n'
                                                    'Prayer in silence. Then the Priest says:\n'
                                                    'Almighty ever-living God,\n'
                                                    'by whose Spirit the whole body of the Church\n'
                                                    'is sanctified and governed,\n'
                                                    'hear our humble prayer for your ministers,\n'
                                                    'that, by the gift of your grace,\n'
                                                    'all may serve you faithfully.\n'
                                                    'Through Christ our Lord.\n'
                                                    'R. Amen.',
                           'friday_intercession_4': 'Let us pray also for (our) catechumens,\n'
                                                    'that our God and Lord\n'
                                                    'may open wide the ears of their inmost '
                                                    'hearts\n'
                                                    'and unlock the gates of his mercy,\n'
                                                    'that, having received forgiveness of all '
                                                    'their sins\n'
                                                    'through the waters of rebirth,\n'
                                                    'they, too, may be one with Christ Jesus our '
                                                    'Lord.\n'
                                                    'Prayer in silence. Then the Priest says:\n'
                                                    'Almighty ever-living God,\n'
                                                    'who make your Church ever fruitful with new '
                                                    'offspring,\n'
                                                    'increase the faith and understanding of (our) '
                                                    'catechumens,\n'
                                                    'that, reborn in the font of Baptism,\n'
                                                    'they may be added to the number of your '
                                                    'adopted children.\n'
                                                    'Through Christ our Lord.\n'
                                                    'R. Amen.',
                           'friday_intercession_5': 'Let us pray also for all our brothers and '
                                                    'sisters who believe in Christ,\n'
                                                    'that our God and Lord may be pleased,\n'
                                                    'as they live the truth,\n'
                                                    'to gather them together and keep them in his '
                                                    'one Church.\n'
                                                    'Prayer in silence. Then the Priest says:\n'
                                                    'Almighty ever-living God,\n'
                                                    'who gather what is scattered\n'
                                                    'and keep together what you have gathered,\n'
                                                    'look kindly on the flock of your Son,\n'
                                                    'that those whom one Baptism has consecrated\n'
                                                    'may be joined together by integrity of faith\n'
                                                    'and united in the bond of charity.\n'
                                                    'Through Christ our Lord.\n'
                                                    'R. Amen.',
                           'friday_intercession_6': 'Let us pray also for the Jewish people,\n'
                                                    'to whom the Lord our God spoke first,\n'
                                                    'that he may grant them to advance in love of '
                                                    'his name\n'
                                                    'and in faithfulness to his covenant.\n'
                                                    'Prayer in silence. Then the Priest says:\n'
                                                    'Almighty ever-living God,\n'
                                                    'who bestowed your promises on Abraham and his '
                                                    'descendants,\n'
                                                    'graciously hear the prayers of your Church,\n'
                                                    'that the people you first made your own\n'
                                                    'may attain the fullness of redemption.\n'
                                                    'Through Christ our Lord.\n'
                                                    'R. Amen.',
                           'friday_intercession_7': 'Let us pray also for those who do not believe '
                                                    'in Christ,\n'
                                                    'that, enlightened by the Holy Spirit,\n'
                                                    'they, too, may enter on the way of '
                                                    'salvation.\n'
                                                    'Prayer in silence. Then the Priest says:\n'
                                                    'Almighty ever-living God,\n'
                                                    'grant to those who do not confess Christ\n'
                                                    'that, by walking before you with a sincere '
                                                    'heart,\n'
                                                    'they may find the truth\n'
                                                    'and that we ourselves, being constant in '
                                                    'mutual love\n'
                                                    'and striving to understand more fully the '
                                                    'mystery of your life,\n'
                                                    'may be made more perfect witnesses to your '
                                                    'love in the world.\n'
                                                    'Through Christ our Lord.\n'
                                                    'R. Amen.',
                           'friday_intercession_8': 'Let us pray also for those who do not '
                                                    'acknowledge God,\n'
                                                    'that, following what is right in sincerity of '
                                                    'heart,\n'
                                                    'they may find the way to God himself.\n'
                                                    'Prayer in silence. Then the Priest says:\n'
                                                    'Almighty ever-living God,\n'
                                                    'who created all people\n'
                                                    'to seek you always by desiring you\n'
                                                    'and, by finding you, come to rest,\n'
                                                    'grant, we pray,\n'
                                                    'that, despite every harmful obstacle,\n'
                                                    'all may recognize the signs of your fatherly '
                                                    'love\n'
                                                    'and the witness of the good works\n'
                                                    'done by those who believe in you,\n'
                                                    'and so in gladness confess you,\n'
                                                    'the one true God and Father of our human '
                                                    'race.\n'
                                                    'Through Christ our Lord.\n'
                                                    'R. Amen.',
                           'friday_intercession_9': 'Let us pray also for those in public office,\n'
                                                    'that our God and Lord\n'
                                                    'may direct their minds and hearts according '
                                                    'to his will\n'
                                                    'for the true peace and freedom of all.\n'
                                                    'Prayer in silence. Then the Priest says:\n'
                                                    'Almighty ever-living God,\n'
                                                    'in whose hand lies every human heart\n'
                                                    'and the rights of peoples,\n'
                                                    'look with favor, we pray,\n'
                                                    'on those who govern with authority over us,\n'
                                                    'that throughout the whole world,\n'
                                                    'the prosperity of peoples,\n'
                                                    'the assurance of peace,\n'
                                                    'and freedom of religion\n'
                                                    'may through your gift be made secure.\n'
                                                    'Through Christ our Lord.\n'
                                                    'R. Amen.',
                           'friday_intercession_10': 'Let us pray, dearly beloved,\n'
                                                     'to God the Father almighty,\n'
                                                     'that he may cleanse the world of all '
                                                     'errors,\n'
                                                     'banish disease, drive out hunger,\n'
                                                     'unlock prisons, loosen fetters,\n'
                                                     'granting to travelers safety, to pilgrims '
                                                     'return,\n'
                                                     'health to the sick, and salvation to the '
                                                     'dying.\n'
                                                     'Prayer in silence. Then the Priest says:\n'
                                                     'Almighty ever-living God,\n'
                                                     'comfort of mourners, strength of all who '
                                                     'toil,\n'
                                                     'may the prayers of those who cry out in any '
                                                     'tribulation\n'
                                                     'come before you,\n'
                                                     'that all may rejoice,\n'
                                                     'because in their hour of need\n'
                                                     'your mercy was at hand.\n'
                                                     'Through Christ our Lord.\n'
                                                     'R. Amen.',
                           'cross_showing': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'},
                                                         'B': {'KR': '제2양식', 'EN': 'Form 2'}},
                                             'variants': {'A': {'lines': [{'sp': '',
                                                                           'text': '15. The Deacon '
                                                                                   'accompanied by '
                                                                                   'ministers, or '
                                                                                   'another '
                                                                                   'suitable '
                                                                                   'minister, goes '
                                                                                   'to the '
                                                                                   'sacristy,'},
                                                                          {'sp': '',
                                                                           'text': 'from which, in '
                                                                                   'procession, '
                                                                                   'accompanied by '
                                                                                   'two ministers '
                                                                                   'with lighted '
                                                                                   'candles, he '
                                                                                   'carries'},
                                                                          {'sp': '',
                                                                           'text': 'the Cross, '
                                                                                   'covered with a '
                                                                                   'violet veil, '
                                                                                   'through the '
                                                                                   'church to the '
                                                                                   'middle of the '
                                                                                   'sanctuary.'},
                                                                          {'sp': '',
                                                                           'text': 'The Priest, '
                                                                                   'standing '
                                                                                   'before the '
                                                                                   'altar and '
                                                                                   'facing the '
                                                                                   'people, '
                                                                                   'receives the '
                                                                                   'Cross, '
                                                                                   'uncovers a'},
                                                                          {'sp': '',
                                                                           'text': 'little of its '
                                                                                   'upper part and '
                                                                                   'elevates it '
                                                                                   'while '
                                                                                   'beginning the '
                                                                                   'Ecce lignum '
                                                                                   'Crucis (Behold '
                                                                                   'the'},
                                                                          {'sp': '',
                                                                           'text': 'wood of the '
                                                                                   'Cross). He is '
                                                                                   'assisted in '
                                                                                   'singing by the '
                                                                                   'Deacon or, if '
                                                                                   'need be, by '
                                                                                   'the choir. '
                                                                                   'All'},
                                                                          {'sp': '',
                                                                           'text': 'respond, Come, '
                                                                                   'let us adore. '
                                                                                   'At the end of '
                                                                                   'the singing, '
                                                                                   'all kneel and '
                                                                                   'for a brief '
                                                                                   'moment'},
                                                                          {'sp': '',
                                                                           'text': 'adore in '
                                                                                   'silence, while '
                                                                                   'the Priest '
                                                                                   'stands and '
                                                                                   'holds the '
                                                                                   'Cross raised.'},
                                                                          {'sp': '', 'text': 'Or:'},
                                                                          {'sp': '',
                                                                           'text': 'œ œ œ œ œ œ œ¿ '
                                                                                   'b œ'},
                                                                          {'sp': '', 'text': 'Or:'},
                                                                          {'sp': '',
                                                                           'text': 'œ œ œ¿ b œ œœ '
                                                                                   'œœ œœœ œ'},
                                                                          {'sp': '',
                                                                           'text': '& œ œ œ œ œ œœ '
                                                                                   'œ¿ b'},
                                                                          {'sp': '',
                                                                           'text': '& œ œ œœ œ œ '
                                                                                   'œœ œœ œ œ œ œœ '
                                                                                   'b œœ œœœ œ œ '
                                                                                   'œœœœ œœ œœœ œ '
                                                                                   'œ œœ œœ œ'},
                                                                          {'sp': '',
                                                                           'text': 'Behold the '
                                                                                   'wood of the '
                                                                                   'Cross,'},
                                                                          {'sp': '',
                                                                           'text': 'on which hung '
                                                                                   'the salvation '
                                                                                   'of the world.'},
                                                                          {'sp': '◎',
                                                                           'text': 'Come, let us '
                                                                                   'adore.'},
                                                                          {'sp': '',
                                                                           'text': 'Then the '
                                                                                   'Priest '
                                                                                   'uncovers the '
                                                                                   'right arm of '
                                                                                   'the Cross and '
                                                                                   'again, raising '
                                                                                   'up the Cross, '
                                                                                   'begins,'},
                                                                          {'sp': '',
                                                                           'text': 'Behold the '
                                                                                   'wood of the '
                                                                                   'Cross and '
                                                                                   'everything '
                                                                                   'takes place as '
                                                                                   'above.'},
                                                                          {'sp': '',
                                                                           'text': 'Finally, he '
                                                                                   'uncovers the '
                                                                                   'Cross entirely '
                                                                                   'and, raising '
                                                                                   'it up, he '
                                                                                   'begins the '
                                                                                   'invitation '
                                                                                   'Behold the'},
                                                                          {'sp': '',
                                                                           'text': 'wood of the '
                                                                                   'Cross a third '
                                                                                   'time and '
                                                                                   'everything '
                                                                                   'takes place '
                                                                                   'like the first '
                                                                                   'time.'}]},
                                                          'B': {'lines': [{'sp': '',
                                                                           'text': '16. The Priest '
                                                                                   'or the Deacon '
                                                                                   'accompanied by '
                                                                                   'ministers, or '
                                                                                   'another '
                                                                                   'suitable '
                                                                                   'minister, goes '
                                                                                   'to'},
                                                                          {'sp': '',
                                                                           'text': 'the door of '
                                                                                   'the church, '
                                                                                   'where he '
                                                                                   'receives the '
                                                                                   'unveiled '
                                                                                   'Cross, and the '
                                                                                   'ministers take '
                                                                                   'lighted'},
                                                                          {'sp': '',
                                                                           'text': 'candles; then '
                                                                                   'the procession '
                                                                                   'sets off '
                                                                                   'through the '
                                                                                   'church to the '
                                                                                   'sanctuary. '
                                                                                   'Near the door, '
                                                                                   'in the'},
                                                                          {'sp': '',
                                                                           'text': 'middle of the '
                                                                                   'church and '
                                                                                   'before the '
                                                                                   'entrance of '
                                                                                   'the sanctuary, '
                                                                                   'the one who '
                                                                                   'carries the '
                                                                                   'Cross'},
                                                                          {'sp': '',
                                                                           'text': 'elevates it, '
                                                                                   'singing, '
                                                                                   'Behold the '
                                                                                   'wood of the '
                                                                                   'Cross, to '
                                                                                   'which all '
                                                                                   'respond, Come, '
                                                                                   'let us adore.'},
                                                                          {'sp': '',
                                                                           'text': 'After each '
                                                                                   'response all '
                                                                                   'kneel and for '
                                                                                   'a brief moment '
                                                                                   'adore in '
                                                                                   'silence, as '
                                                                                   'above.'}]}}},
                           'cross_adoration': '14. After the Solemn Intercessions, the solemn '
                                              'Adoration of the Holy Cross takes place. Of the\n'
                                              'two forms of the showing of the Cross presented '
                                              'here, the more appropriate one, according\n'
                                              'to pastoral needs, should be chosen.\n'
                                              'The Showing of the Holy Cross\n'
                                              'First Form\n'
                                              '15. The Deacon accompanied by ministers, or another '
                                              'suitable minister, goes to the sacristy,\n'
                                              'from which, in procession, accompanied by two '
                                              'ministers with lighted candles, he carries\n'
                                              'the Cross, covered with a violet veil, through the '
                                              'church to the middle of the sanctuary.\n'
                                              'The Priest, standing before the altar and facing '
                                              'the people, receives the Cross, uncovers a\n'
                                              'little of its upper part and elevates it while '
                                              'beginning the Ecce lignum Crucis (Behold the\n'
                                              'wood of the Cross). He is assisted in singing by '
                                              'the Deacon or, if need be, by the choir. All\n'
                                              'respond, Come, let us adore. At the end of the '
                                              'singing, all kneel and for a brief moment\n'
                                              'adore in silence, while the Priest stands and holds '
                                              'the Cross raised.\n'
                                              'Or:\n'
                                              'œ œ œ œ œ œ œ¿ b œ\n'
                                              'Or:\n'
                                              'œ œ œ¿ b œ œœ œœ œœœ œ\n'
                                              '& œ œ œ œ œ œœ œ¿ b\n'
                                              '& œ œ œœ œ œ œœ œœ œ œ œ œœ b œœ œœœ œ œ œœœœ œœ '
                                              'œœœ œ œ œœ œœ œ\n'
                                              'Behold the wood of the Cross,\n'
                                              'on which hung the salvation of the world.\n'
                                              'R. Come, let us adore.\n'
                                              'Then the Priest uncovers the right arm of the Cross '
                                              'and again, raising up the Cross, begins,\n'
                                              'Behold the wood of the Cross and everything takes '
                                              'place as above.\n'
                                              'Finally, he uncovers the Cross entirely and, '
                                              'raising it up, he begins the invitation Behold the\n'
                                              'wood of the Cross a third time and everything takes '
                                              'place like the first time.\n'
                                              'Second Form\n'
                                              '16. The Priest or the Deacon accompanied by '
                                              'ministers, or another suitable minister, goes to\n'
                                              'the door of the church, where he receives the '
                                              'unveiled Cross, and the ministers take lighted\n'
                                              'candles; then the procession sets off through the '
                                              'church to the sanctuary. Near the door, in the\n'
                                              'middle of the church and before the entrance of the '
                                              'sanctuary, the one who carries the Cross\n'
                                              'elevates it, singing, Behold the wood of the Cross, '
                                              'to which all respond, Come, let us adore.\n'
                                              'After each response all kneel and for a brief '
                                              'moment adore in silence, as above.\n'
                                              'The Adoration of the Holy Cross\n'
                                              '17. Then, accompanied by two ministers with lighted '
                                              'candles, the Priest or the Deacon carries\n'
                                              'the Cross to the entrance of the sanctuary or to '
                                              'another suitable place and there puts it\n'
                                              'down or hands it over to the ministers to hold. '
                                              'Candles are placed on the right and left\n'
                                              'sides of the Cross.\n'
                                              '18. For the Adoration of the Cross, first the '
                                              'Priest Celebrant alone approaches, with the '
                                              'chasuble\n'
                                              'and his shoes removed, if appropriate. Then the '
                                              'clergy, the lay ministers, and the faithful\n'
                                              'approach, moving as if in procession, and showing '
                                              'reverence to the Cross by a simple\n'
                                              'genuflection or by some other sign appropriate to '
                                              'the usage of the region, for example, by\n'
                                              'kissing the Cross.\n'
                                              '19. Only one Cross should be offered for adoration. '
                                              'If, because of the large number of people, it\n'
                                              'is not possible for all to approach individually, '
                                              'the Priest, after some of the clergy and faithful\n'
                                              'have adored, takes the Cross and, standing in the '
                                              'middle before the altar, invites the people\n'
                                              'in a few words to adore the Holy Cross and '
                                              'afterwards holds the Cross elevated higher for a\n'
                                              'brief time, for the faithful to adore it in '
                                              'silence.\n'
                                              '20. While the adoration of the Holy Cross is taking '
                                              'place, the antiphon Crucem tuam adoramus\n'
                                              '(We adore your Cross, O Lord), the Reproaches, the '
                                              'hymn Crux fidelis (Faithful Cross) or other\n'
                                              'suitable chants are sung, during which all who have '
                                              'already adored the Cross remain seated.\n'
                                              'Chants to Be Sung during the Adoration of the Holy '
                                              'Cross\n'
                                              'Ant. We adore your Cross, O Lord,\n'
                                              'we praise and glorify your holy Resurrection,\n'
                                              'for behold, because of the wood of a tree\n'
                                              'joy has come to the whole world.\n'
                                              'May God have mercy on us and bless us; Cf. Ps 67 '
                                              '(66): 2\n'
                                              'may he let his face shed its light upon us\n'
                                              'and have mercy on us.\n'
                                              'And the antiphon is repeated: We adore . . .\n'
                                              'The Reproaches\n'
                                              'Parts assigned to one of the two choirs separately '
                                              'are indicated by the numbers 1 (first\n'
                                              'choir) and 2 (second choir); parts sung by both '
                                              'choirs together are marked: 1 and 2. Some of\n'
                                              'the verses may also be sung by two cantors.\n'
                                              'I\n'
                                              '1 and 2 My people, what have I done to you?\n'
                                              'Or how have I grieved you? Answer me!\n'
                                              '1 Because I led you out of the land of Egypt,\n'
                                              'you have prepared a Cross for your Savior.\n'
                                              '1 Hagios o Theos,\n'
                                              '2 Holy is God,\n'
                                              '1 Hagios Ischyros,\n'
                                              '2 Holy and Mighty,\n'
                                              '1 Hagios Athanatos, eleison himas.\n'
                                              '2 Holy and Immortal One, have mercy on us.\n'
                                              '1 and 2 Because I led you out through the desert '
                                              'forty years\n'
                                              'and fed you with manna and brought you into a land '
                                              'of plenty,\n'
                                              'you have prepared a Cross for your Savior.\n'
                                              '1 Hagios o Theos,\n'
                                              '2 Holy is God,\n'
                                              '1 Hagios Ischyros,\n'
                                              '2 Holy and Mighty,\n'
                                              '1 Hagios Athanatos, eleison himas.\n'
                                              '2 Holy and Immortal One, have mercy on us.\n'
                                              '1 and 2 What more should I have done for you and '
                                              'have not done?\n'
                                              'Indeed, I planted you as my most beautiful chosen '
                                              'vine\n'
                                              'and you have turned very bitter for me,\n'
                                              'for in my thirst you gave me vinegar to drink\n'
                                              'and with a lance you pierced your Savior’s side.\n'
                                              '1 Hagios o Theos,\n'
                                              '2 Holy is God,\n'
                                              '1 Hagios Ischyros,\n'
                                              '2 Holy and Mighty,\n'
                                              '1 Hagios Athanatos, eleison himas.\n'
                                              '2 Holy and Immortal One, have mercy on us.\n'
                                              'II\n'
                                              'Cantors:\n'
                                              'I scourged Egypt for your sake with its firstborn '
                                              'sons,\n'
                                              'and you scourged me and handed me over.\n'
                                              '1 and 2 repeat:\n'
                                              'My people, what have I done to you?\n'
                                              'Or how have I grieved you? Answer me!\n'
                                              'Cantors:\n'
                                              'I led you out from Egypt as Pharoah lay sunk in the '
                                              'Red Sea,\n'
                                              'and you handed me over to the chief priests.\n'
                                              '1 and 2 repeat:\n'
                                              'My people . . .\n'
                                              'Cantors:\n'
                                              'I opened up the sea before you,\n'
                                              'and you opened my side with a lance.\n'
                                              '1 and 2 repeat:\n'
                                              'My people . . .\n'
                                              'Cantors:\n'
                                              'I went before you in a pillar of cloud,\n'
                                              'and you led me into Pilate’s palace.\n'
                                              '1 and 2 repeat:\n'
                                              'My people . . .\n'
                                              'Cantors:\n'
                                              'I fed you with manna in the desert,\n'
                                              'and on me you rained blows and lashes.\n'
                                              '1 and 2 repeat:\n'
                                              'My people . . .\n'
                                              'Cantors:\n'
                                              'I gave you saving water from the rock to drink,\n'
                                              'and for drink you gave me gall and vinegar.\n'
                                              '1 and 2 repeat:\n'
                                              'My people . . .\n'
                                              'Cantors:\n'
                                              'I struck down for you the kings of the Canaanites,\n'
                                              'and you struck my head with a reed.\n'
                                              '1 and 2 repeat:\n'
                                              'My people . . .\n'
                                              'Cantors:\n'
                                              'I put in your hand a royal scepter,\n'
                                              'and you put on my head a crown of thorns.\n'
                                              '1 and 2 repeat:\n'
                                              'My people . . .\n'
                                              'Cantors:\n'
                                              'I exalted you with great power,\n'
                                              'and you hung me on the scaffold of the Cross.\n'
                                              '1 and 2 repeat:\n'
                                              'My people . . .\n'
                                              'Hymn\n'
                                              'All:\n'
                                              'Faithful Cross the Saints rely on,\n'
                                              'Noble tree beyond compare!\n'
                                              'Never was there such a scion,\n'
                                              'Never leaf or flower so rare.\n'
                                              'Sweet the timber, sweet the iron,\n'
                                              'Sweet the burden that they bear!\n'
                                              'Cantors:\n'
                                              'Sing, my tongue, in exultation\n'
                                              'Of our banner and device!\n'
                                              'Make a solemn proclamation\n'
                                              'Of a triumph and its price:\n'
                                              'How the Savior of creation\n'
                                              'Conquered by his sacrifice!\n'
                                              'All:\n'
                                              'Faithful Cross the Saints rely on,\n'
                                              'Noble tree beyond compare!\n'
                                              'Never was there such a scion,\n'
                                              'Never leaf or flower so rare.\n'
                                              'Cantors:\n'
                                              'For, when Adam first offended,\n'
                                              'Eating that forbidden fruit,\n'
                                              'Not all hopes of glory ended\n'
                                              'With the serpent at the root:\n'
                                              'Broken nature would be mended\n'
                                              'By a second tree and shoot.\n'
                                              'All:\n'
                                              'Sweet the timber, sweet the iron,\n'
                                              'Sweet the burden that they bear!\n'
                                              'Cantors:\n'
                                              'Thus the tempter was outwitted\n'
                                              'By a wisdom deeper still:\n'
                                              'Remedy and ailment fitted,\n'
                                              'Means to cure and means to kill;\n'
                                              'That the world might be acquitted,\n'
                                              'Christ would do his Father’s will.\n'
                                              'All:\n'
                                              'Faithful Cross the Saints rely on,\n'
                                              'Noble tree beyond compare!\n'
                                              'Never was there such a scion,\n'
                                              'Never leaf or flower so rare.\n'
                                              'Cantors:\n'
                                              'So the Father, out of pity\n'
                                              'For our self-inflicted doom,\n'
                                              'Sent him from the heavenly city\n'
                                              'When the holy time had come:\n'
                                              'He, the Son and the Almighty,\n'
                                              'Took our flesh in Mary’s womb.\n'
                                              'All:\n'
                                              'Sweet the timber, sweet the iron,\n'
                                              'Sweet the burden that they bear!\n'
                                              'Cantors:\n'
                                              'Hear a tiny baby crying,\n'
                                              'Founder of the seas and strands;\n'
                                              'See his virgin Mother tying\n'
                                              'Cloth around his feet and hands;\n'
                                              'Find him in a manger lying\n'
                                              'Tightly wrapped in swaddling-bands!\n'
                                              'All:\n'
                                              'Faithful Cross the Saints rely on,\n'
                                              'Noble tree beyond compare!\n'
                                              'Never was there such a scion,\n'
                                              'Never leaf or flower so rare.\n'
                                              'Cantors:\n'
                                              'So he came, the long-expected,\n'
                                              'Not in glory, not to reign;\n'
                                              'Only born to be rejected,\n'
                                              'Choosing hunger, toil and pain,\n'
                                              'Sweet the timber, sweet the iron,\n'
                                              'Sweet the burden that they bear!\n'
                                              'Cantors:\n'
                                              'No disgrace was too abhorrent:\n'
                                              'Nailed and mocked and parched he died; Blood and '
                                              'water, double warrant, Issue from his wounded '
                                              'side,\n'
                                              'Washing in a mighty torrent Earth and stars and '
                                              'oceantide.\n'
                                              'All:\n'
                                              'Faithful\n'
                                              'Cross the Saints rely on,\n'
                                              'Noble tree beyond compare!\n'
                                              'Never was there such a scion,\n'
                                              'Never leaf or flower so rare.\n'
                                              'Cantors:\n'
                                              'Lofty timber, smooth your roughness, Flex your '
                                              'boughs for blossoming;\n'
                                              'Let your fibers lose their toughness, Gently let '
                                              'your tendrils cling;\n'
                                              'Lay aside your native gruffness, Clasp the body of '
                                              'your King!\n'
                                              'All:\n'
                                              'Sweet the timber, sweet the iron,\n'
                                              'Sweet the burden that they bear!\n'
                                              'Cantors:\n'
                                              'Noblest tree of all created, Richly jeweled and '
                                              'embossed: Post by Lamb’s blood consecrated;\n'
                                              'Spar that saves the tempest-tossed;\n'
                                              'Scaffold-beam which, elevated, Carries what the '
                                              'world has cost!\n'
                                              'All:\n'
                                              'Faithful\n'
                                              'Cross the Saints rely on,\n'
                                              'Noble tree beyond compare!\n'
                                              'Never was there such a scion,\n'
                                              'Never leaf or flower so rare.\n'
                                              'The following conclusion is never to be omitted:\n'
                                              'All:\n'
                                              'Wisdom, power, and adoration\n'
                                              'To the blessed Trinity\n'
                                              'For redemption and salvation\n'
                                              'Through the Paschal Mystery,\n'
                                              'Now, in every generation,\n'
                                              'And for all eternity. Amen.\n'
                                              'In accordance with local circumstances or popular '
                                              'traditions and if it is pastorally appropriate,\n'
                                              'the Stabat Mater may be sung, as found in the '
                                              'Graduale Romanum, or another suitable chant\n'
                                              'in memory of the compassion of the Blessed Virgin '
                                              'Mary.\n'
                                              '21. When the adoration has been concluded, the '
                                              'Cross is carried by the Deacon or a minister to\n'
                                              'its place at the altar. Lighted candles are placed '
                                              'around or on the altar or near the Cross.',
                           'friday_communion_intro': '<A cloth is spread on the altar, and a '
                                                     'corporal and the Missal put in place. '
                                                     'Meanwhile the\n'
                                                     'Deacon or, if there is no Deacon, the Priest '
                                                     'himself, putting on a humeral veil, brings '
                                                     'the\n'
                                                     'Blessed Sacrament back from the place of '
                                                     'repose to the altar by a shorter route, '
                                                     'while all\n'
                                                     'stand in silence. Two ministers with lighted '
                                                     'candles accompany the Blessed Sacrament and\n'
                                                     'place their candlesticks around or upon the '
                                                     'altar.\n'
                                                     'When the Deacon, if a Deacon is present, has '
                                                     'placed the Blessed Sacrament upon the\n'
                                                     'altar and uncovered the ciborium, the Priest '
                                                     'goes to the altar and genuflects.>',
                           'friday_people_prayer': 'May abundant blessing, O Lord, we pray,\n'
                                                   'descend upon your people,\n'
                                                   'who have honored the Death of your Son\n'
                                                   'in the hope of their resurrection:\n'
                                                   'may pardon come,\n'
                                                   'comfort be given,\n'
                                                   'holy faith increase,\n'
                                                   'and everlasting redemption be made secure.\n'
                                                   'Through Christ our Lord.\n'
                                                   'R. Amen.',
                           'friday_departure': '<And all, after genuflecting to the Cross, depart '
                                               'in silence.>'},
                 'prayers': {'prayer_after': 'Almighty ever-living God,\n'
                                             'who have restored us to life\n'
                                             'by the blessed Death and Resurrection of your '
                                             'Christ,\n'
                                             'preserve in us the work of your mercy,\n'
                                             'that, by partaking of this mystery,\n'
                                             'we may have a life unceasingly devoted to you.\n'
                                             'Through Christ our Lord.\n'
                                             'R. Amen.'}},
 'holy_saturday': {'rites': {'holy_saturday_rest': '<HOLY SATURDAY\n'
                                                   '1. On Holy Saturday the Church waits at the '
                                                   'Lord’s tomb in prayer and fasting, meditating '
                                                   'on\n'
                                                   'his Passion and Death and on his Descent into '
                                                   'Hell, and awaiting his Resurrection.\n'
                                                   '2. The Church abstains from the Sacrifice of '
                                                   'the Mass, with the sacred table left bare, '
                                                   'until after\n'
                                                   'the solemn Vigil, that is, the anticipation by '
                                                   'night of the Resurrection, when the time '
                                                   'comes\n'
                                                   'for paschal joys, the abundance of which '
                                                   'overflows to occupy fifty days.\n'
                                                   '3. Holy Communion may only be given on this '
                                                   'day as Viaticum.>'}},
 'easter_vigil': {'rites': {'vigil_intro': '<By most ancient tradition, this is the night of '
                                           'keeping vigil for the Lord (Ex 12: 42), in which,\n'
                                           'following the Gospel admonition (Lk 12: 35-37), the '
                                           'faithful, carrying lighted lamps in their\n'
                                           'hands, should be like those looking for the Lord when '
                                           'he returns, so that at his coming he\n'
                                           'may find them awake and have them sit at his table.\n'
                                           '2. Of this night’s Vigil, which is the greatest and '
                                           'most noble of all solemnities, there is to be\n'
                                           'only one celebration in each church. It is arranged, '
                                           'moreover, in such a way that after the\n'
                                           'Lucernarium and Easter Proclamation (which constitutes '
                                           'the first part of this Vigil), Holy\n'
                                           'Church meditates on the wonders the Lord God has done '
                                           'for his people from the beginning,\n'
                                           'trusting in his word and promise (the second part, '
                                           'that is, the Liturgy of the Word) until, as\n'
                                           'day approaches, with new members reborn in Baptism '
                                           '(the third part), the Church is called\n'
                                           'to the table the Lord has prepared for his people, the '
                                           'memorial of his Death and Resurrection\n'
                                           'until he comes again (the fourth part).\n'
                                           '3. The entire celebration of the Easter Vigil must '
                                           'take place during the night, so that it begins\n'
                                           'after nightfall and ends before daybreak on the '
                                           'Sunday.\n'
                                           '4. The Mass of the Vigil, even if it is celebrated '
                                           'before midnight, is a paschal Mass of the Sunday\n'
                                           'of the Resurrection.\n'
                                           '5. Anyone who participates in the Mass of the night '
                                           'may receive Communion again at Mass\n'
                                           'during the day. A Priest who celebrates or '
                                           'concelebrates the Mass of the night may again\n'
                                           'celebrate or concelebrate Mass during the day.\n'
                                           'The Easter Vigil takes the place of the Office of '
                                           'Readings.\n'
                                           '6. The Priest is usually assisted by a Deacon. If, '
                                           'however, there is no Deacon, the duties of his\n'
                                           'Order, except those indicated below, are assumed by '
                                           'the Priest Celebrant or by a concelebrant.\n'
                                           'The Priest and Deacon vest as at Mass, in white '
                                           'vestments.\n'
                                           '7. Candles should be prepared for all who participate '
                                           'in the Vigil. The lights of the church are\n'
                                           'extinguished.\n'
                                           'First Part:\n'
                                           'The Solemn Beginning of the Vigil or Lucernarium\n'
                                           'The Blessing of the Fire and Preparation of the '
                                           'Candle>',
                            'fire_blessing': '(brothers and sisters),\n'
                                             'on this most sacred night,\n'
                                             'in which our Lord Jesus Christ\n'
                                             'passed over from death to life,\n'
                                             'the Church calls upon her sons and daughters,\n'
                                             'scattered throughout the world,\n'
                                             'to come together to watch and pray.\n'
                                             'If we keep the memorial\n'
                                             'of the Lord’s paschal solemnity in this way,\n'
                                             'listening to his word and celebrating his '
                                             'mysteries,\n'
                                             'then we shall have the sure hope\n'
                                             'of sharing his triumph over death\n'
                                             'and living with him in God.\n'
                                             '10. Then the Priest blesses the fire, saying with '
                                             'hands extended:\n'
                                             'Let us pray.\n'
                                             'O God, who through your Son\n'
                                             'bestowed upon the faithful the fire of your glory,\n'
                                             'sanctify X this new fire, we pray,\n'
                                             'and grant that,\n'
                                             'by these paschal celebrations,\n'
                                             'we may be so inflamed with heavenly desires,\n'
                                             'that with minds made pure\n'
                                             'we may attain festivities of unending splendor.\n'
                                             'Through Christ our Lord.\n'
                                             'R. Amen.',
                            'paschal_candle': 'After the blessing of the new fire, one of the '
                                              'ministers brings the paschal candle to the Priest,\n'
                                              'who cuts a cross into the candle with a stylus. '
                                              'Then he makes the Greek letter Alpha above\n'
                                              'the cross, the letter Omega below, and the four '
                                              'numerals of the current year between the\n'
                                              'arms of the cross, saying meanwhile:\n'
                                              '1. Christ yesterday and today\n'
                                              '(he cuts a vertical line);\n'
                                              '2. the Beginning and the End\n'
                                              '(he cuts a horizontal line);\n'
                                              '3. the Alpha\n'
                                              '(he cuts the letter Alpha above the vertical '
                                              'line);\n'
                                              '4. and the Omega\n'
                                              '(he cuts the letter Omega below the vertical '
                                              'line).\n'
                                              '5. All time belongs to him\n'
                                              '(he cuts the first numeral of the current year in\n'
                                              'the upper left corner of the cross);\n'
                                              '6. and all the ages\n'
                                              '(he cuts the second numeral of the current year in\n'
                                              'the upper right corner of the cross).\n'
                                              '7. To him be glory and power\n'
                                              '(he cuts the third numeral of the current year in\n'
                                              'the lower left corner of the cross);\n'
                                              '8. through every age and for ever. Amen.\n'
                                              '(he cuts the fourth numeral of the current year in\n'
                                              'the lower right corner of the cross).\n'
                                              '12. When the cutting of the cross and of the other '
                                              'signs has been completed, the Priest may insert\n'
                                              'five grains of incense into the candle in the form '
                                              'of a cross, meanwhile saying:\n'
                                              '1. By his holy\n'
                                              '2. and glorious wounds,\n'
                                              '3. may Christ the Lord\n'
                                              '4. guard us\n'
                                              '5. and protect us. Amen.',
                            'light_procession': 'The Priest lights the paschal candle from the new '
                                                'fire, saying:\n'
                                                'May the light of Christ rising in glory\n'
                                                'dispel the darkness of our hearts and minds.\n'
                                                'As regards the preceding elements, Conferences of '
                                                'Bishops may also establish other forms\n'
                                                'more adapted to the culture of the different '
                                                'peoples.\n'
                                                'Procession\n'
                                                '15. When the candle has been lit, one of the '
                                                'ministers takes burning coals from the fire and\n'
                                                'places them in the thurible, and the Priest puts '
                                                'incense into it in the usual way. The Deacon\n'
                                                'or, if there is no Deacon, another suitable '
                                                'minister, takes the paschal candle and a '
                                                'procession\n'
                                                'forms. The thurifer with the smoking thurible '
                                                'precedes the Deacon or other minister who\n'
                                                'carries the paschal candle. After them follows '
                                                'the Priest with the ministers and the people,\n'
                                                'all holding in their hands unlit candles.\n'
                                                'At the door of the church the Deacon, standing '
                                                'and raising up the candle, sings:\n'
                                                'Or:\n'
                                                'The Light of Christ.\n'
                                                'And all reply:\n'
                                                'Or:\n'
                                                'Thanks be to God.\n'
                                                'The Priest lights his candle from the flame of '
                                                'the paschal candle.\n'
                                                '16. Then the Deacon moves forward to the middle '
                                                'of the church and, standing and raising up the\n'
                                                'candle, sings a second time:\n'
                                                'The Light of Christ.\n'
                                                'And all reply:\n'
                                                'Thanks be to God.\n'
                                                'All light their candles from the flame of the '
                                                'paschal candle and continue in procession.',
                            'vigil_word_intro': 'In this Vigil, the mother of all Vigils, nine '
                                                'readings are provided, namely seven from the\n'
                                                'Old Testament and two from the New (the Epistle '
                                                'and Gospel), all of which should be read\n'
                                                'whenever this can be done, so that the character '
                                                'of the Vigil, which demands an extended\n'
                                                'period of time, may be preserved.\n'
                                                '21. Nevertheless, where more serious pastoral '
                                                'circumstances demand it, the number of readings\n'
                                                'from the Old Testament may be reduced, always '
                                                'bearing in mind that the reading of the\n'
                                                'Word of God is a fundamental part of this Easter '
                                                'Vigil. At least three readings should be\n'
                                                'read from the Old Testament, both from the Law '
                                                'and from the Prophets, and their respective\n'
                                                'Responsorial Psalms should be sung. Never, '
                                                'moreover, should the reading of chapter 14 of\n'
                                                'Exodus with its canticle be omitted.\n'
                                                '22. After setting aside their candles, all sit. '
                                                'Before the readings begin, the Priest instructs '
                                                'the\n'
                                                'people in these or similar words:\n'
                                                'Dear brethren (brothers and sisters),\n'
                                                'now that we have begun our solemn Vigil,\n'
                                                'let us listen with quiet hearts to the Word of '
                                                'God.\n'
                                                'Let us meditate on how God in times past saved '
                                                'his people\n'
                                                'and in these, the last days, has sent us his Son '
                                                'as our Redeemer.\n'
                                                'Let us pray that our God may complete this '
                                                'paschal work\n'
                                                'of salvation\n'
                                                'by the fullness of redemption.\n'
                                                '23. Then the readings follow. A reader goes to '
                                                'the ambo and proclaims the reading. Afterwards\n'
                                                'a psalmist or a cantor sings or says the Psalm '
                                                'with the people making the response. Then all\n'
                                                'rise, the Priest says, Let us pray and, after all '
                                                'have prayed for a while in silence, he says the\n'
                                                'prayer corresponding to the reading. In place of '
                                                'the Responsorial Psalm a period of sacred\n'
                                                'silence may be observed, in which case the pause '
                                                'after Let us pray is omitted.\n'
                                                'Prayers after the Readings',
                            'baptism_intro': 'After the Homily the Baptismal Liturgy begins. The '
                                             'Priest goes with the ministers to the\n'
                                             'baptismal font, if this can be seen by the faithful. '
                                             'Otherwise a vessel with water is placed in\n'
                                             'the sanctuary.\n'
                                             '38. Catechumens, if there are any, are called '
                                             'forward and presented by their godparents in\n'
                                             'front of the assembled Church or, if they are small '
                                             'children, are carried by their parents and\n'
                                             'godparents.\n'
                                             '39. Then, if there is to be a procession to the '
                                             'baptistery or to the font, it forms immediately. A\n'
                                             'minister with the paschal candle leads off, and '
                                             'those to be baptized follow him with their\n'
                                             'godparents, then the ministers, the Deacon, and the '
                                             'Priest. During the procession, the Litany\n'
                                             '(no. 43) is sung. When the Litany is completed, the '
                                             'Priest gives the address (no. 40).\n'
                                             '40. If, however, the Baptismal Liturgy takes place '
                                             'in the sanctuary, the Priest immediately makes\n'
                                             'an introductory statement in these or similar '
                                             'words.\n'
                                             'If there are candidates to be baptized:\n'
                                             'Dearly beloved,\n'
                                             'with one heart and one soul, let us by our prayers\n'
                                             'come to the aid of these our brothers and sisters in '
                                             'their\n'
                                             'blessed hope,\n'
                                             'so that, as they approach the font of rebirth,\n'
                                             'the almighty Father may bestow on them\n'
                                             'all his merciful help.\n'
                                             'If the font is to be blessed, but no one is to be '
                                             'baptized:\n'
                                             'Dearly beloved,\n'
                                             'let us humbly invoke upon this font\n'
                                             'the grace of God the almighty Father,\n'
                                             'that those who from it are born anew\n'
                                             'may be numbered among the children of adoption in '
                                             'Christ.',
                            'litany': 'The Litany is sung by two cantors, with all standing '
                                      '(because it is Easter Time) and responding.\n'
                                      'If, however, there is to be a procession of some length to '
                                      'the baptistery, the Litany is\n'
                                      'sung during the procession; in this case, those to be '
                                      'baptized are called forward before the\n'
                                      'procession begins, and the procession takes place led by '
                                      'the paschal candle, followed by\n'
                                      'the catechumens with their godparents, then the ministers, '
                                      'the Deacon, and the Priest. The\n'
                                      'address should occur before the Blessing of Water.\n'
                                      '42. If no one is to be baptized and the font is not to be '
                                      'blessed, the Litany is omitted, and the\n'
                                      'Blessing of Water (no. 54) takes place at once.\n'
                                      '43. In the Litany the names of some Saints may be added, '
                                      'especially the Titular Saint of the\n'
                                      'church and the Patron Saints of the place and of those to '
                                      'be baptized.\n'
                                      '\n'
                                      '\n'
                                      'If there are candidates to be baptized, the Priest, with '
                                      'hands extended, says the following\n'
                                      'prayer:\n'
                                      'Almighty ever-living God,\n'
                                      'be present by the mysteries of your great love\n'
                                      'and send forth the spirit of adoption\n'
                                      'to create the new peoples\n'
                                      'brought to birth for you in the font of Baptism,\n'
                                      'so that what is to be carried out by our humble service\n'
                                      'may be brought to fulfillment by your mighty power.\n'
                                      'Through Christ our Lord.\n'
                                      'R. Amen.\n'
                                      'Blessing of Baptismal Water',
                            'baptism_water': 'The Priest then blesses the baptismal water, saying '
                                             'the following prayer with hands extended:\n'
                                             '\n'
                                             'And, if appropriate, lowering the paschal candle '
                                             'into the water either once or three times,\n'
                                             'he continues:\n'
                                             'and, holding the candle in the water, he continues:\n'
                                             '45. Then the candle is lifted out of the water, as '
                                             'the people acclaim:\n'
                                             'Text without music:\n'
                                             '46. The Priest then blesses the baptismal water, '
                                             'saying the following prayer with hands extended:\n'
                                             'O God, who by invisible power\n'
                                             'accomplish a wondrous effect\n'
                                             'through sacramental signs\n'
                                             'and who in many ways have prepared water, your '
                                             'creation,\n'
                                             'to show forth the grace of Baptism;\n'
                                             'O God, whose Spirit\n'
                                             'in the first moments of the world’s creation\n'
                                             'hovered over the waters,\n'
                                             'so that the very substance of water\n'
                                             'would even then take to itself the power to '
                                             'sanctify;\n'
                                             'O God, who by the outpouring of the flood\n'
                                             'foreshadowed regeneration,\n'
                                             'so that from the mystery of one and the same element '
                                             'of water\n'
                                             'would come an end to vice and a beginning of '
                                             'virtue;\n'
                                             'O God, who caused the children of Abraham\n'
                                             'to pass dry-shod through the Red Sea,\n'
                                             'so that the chosen people,\n'
                                             'set free from slavery to Pharaoh,\n'
                                             'would prefigure the people of the baptized;\n'
                                             'O God, whose Son,\n'
                                             'baptized by John in the waters of the Jordan,\n'
                                             'was anointed with the Holy Spirit,\n'
                                             'and, as he hung upon the Cross,\n'
                                             'gave forth water from his side along with blood,\n'
                                             'and after his Resurrection, commanded his '
                                             'disciples:\n'
                                             '“Go forth, teach all nations, baptizing them\n'
                                             'in the name of the Father and of the Son and of the '
                                             'Holy Spirit,”\n'
                                             'look now, we pray, upon the face of your Church\n'
                                             'and graciously unseal for her the fountain of '
                                             'Baptism.\n'
                                             'May this water receive by the Holy Spirit\n'
                                             'the grace of your Only Begotten Son,\n'
                                             'so that human nature, created in your image\n'
                                             'and washed clean through the Sacrament of Baptism\n'
                                             'from all the squalor of the life of old,\n'
                                             'may be found worthy to rise to the life of newborn '
                                             'children\n'
                                             'through water and the Holy Spirit.\n'
                                             'And, if appropriate, lowering the paschal candle '
                                             'into the water either once or three times,\n'
                                             'he continues:\n'
                                             'May the power of the Holy Spirit,\n'
                                             'O Lord, we pray,\n'
                                             'come down through your Son\n'
                                             'into the fullness of this font,\n'
                                             'and, holding the candle in the water, he continues:\n'
                                             'so that all who have been buried with Christ\n'
                                             'by Baptism into death\n'
                                             'may rise again to life with him.\n'
                                             'Who lives and reigns with you in the unity of the '
                                             'Holy Spirit,\n'
                                             'one God, for ever and ever.\n'
                                             'R. Amen.\n'
                                             '47. Then the candle is lifted out of the water, as '
                                             'the people acclaim:\n'
                                             'Springs of water, bless the Lord;\n'
                                             'praise and exalt him above all for ever.',
                            'baptism': '<After the blessing of baptismal water and the acclamation '
                                       'of the people, the Priest, standing,\n'
                                       'puts the prescribed questions to the adults and the '
                                       'parents or godparents of the children, as\n'
                                       'is set out in the respective Rites of the Roman Ritual, in '
                                       'order for them to make the required\n'
                                       'renunciation.\n'
                                       'If the anointing of the adults with the Oil of Catechumens '
                                       'has not taken place beforehand,\n'
                                       'as part of the immediately preparatory rites, it occurs at '
                                       'this moment.\n'
                                       '49. Then the Priest questions the adults individually '
                                       'about the faith and, if there are children\n'
                                       'to be baptized, he requests the triple profession of faith '
                                       'from all the parents and godparents\n'
                                       'together, as is indicated in the respective Rites.\n'
                                       'Where many are to be baptized on this night, it is '
                                       'possible to arrange the rite so that,\n'
                                       'immediately after the response of those to be baptized and '
                                       'of the godparents and the parents,\n'
                                       'the Celebrant asks for and receives the renewal of '
                                       'baptismal promises of all present.\n'
                                       '50. When the interrogation is concluded, the Priest '
                                       'baptizes the adult elect and the children.\n'
                                       '51. After the Baptism, the Priest anoints the infants with '
                                       'chrism. A white garment is given to\n'
                                       'each, whether adults or children. Then the Priest or '
                                       'Deacon receives the paschal candle from\n'
                                       'the hand of the minister, and the candles of the newly '
                                       'baptized are lighted. For infants the\n'
                                       'rite of Ephphetha is omitted.\n'
                                       '52. Afterwards, unless the baptismal washing and the other '
                                       'explanatory rites have occurred\n'
                                       'in the sanctuary, a procession returns to the sanctuary, '
                                       'formed as before, with the newly\n'
                                       'baptized or the godparents or parents carrying lighted '
                                       'candles. During this procession, the\n'
                                       'baptismal canticle Vidi aquam (I saw water) or another '
                                       'appropriate chant is sung (no. 56).\n'
                                       '53. If adults have been baptized, the Bishop or, in his '
                                       'absence, the Priest who has conferred\n'
                                       'Baptism, should at once administer the Sacrament of '
                                       'Confirmation to them in the sanctuary,\n'
                                       'as is indicated in the Roman Pontifical or Roman Ritual.\n'
                                       'The Blessing of Water>',
                            'water_blessing': 'If no one present is to be baptized and the font is '
                                              'not to be blessed, the Priest introduces the\n'
                                              'faithful to the blessing of water, saying:\n'
                                              'And after a brief pause in silence, he proclaims '
                                              'the following prayer with hands extended:\n'
                                              '\n'
                                              'Text without music:\n'
                                              'Dear brothers and sisters,\n'
                                              'let us humbly beseech the Lord our God\n'
                                              'to bless this water he has created,\n'
                                              'which will be sprinkled upon us\n'
                                              'as a memorial of our Baptism.\n'
                                              'May he graciously renew us,\n'
                                              'that we may remain faithful to the Spirit\n'
                                              'whom we have received.\n'
                                              'And after a brief pause in silence, he proclaims '
                                              'the following prayer, with hands extended:\n'
                                              'Lord our God,\n'
                                              'in your mercy be present to your people\n'
                                              'who keep vigil on this most sacred night,\n'
                                              'and, for us who recall the wondrous work of our '
                                              'creation\n'
                                              'and the still greater work of our redemption,\n'
                                              'graciously bless this water.\n'
                                              'For you created water to make the fields fruitful\n'
                                              'and to refresh and cleanse our bodies.\n'
                                              'You also made water the instrument of your mercy:\n'
                                              'for through water you freed your people from '
                                              'slavery\n'
                                              'and quenched their thirst in the desert;\n'
                                              'through water the Prophets proclaimed the new '
                                              'covenant\n'
                                              'you were to enter upon with the human race;\n'
                                              'and last of all,\n'
                                              'through water, which Christ made holy in the '
                                              'Jordan,\n'
                                              'you have renewed our corrupted nature\n'
                                              'in the bath of regeneration.\n'
                                              'Therefore, may this water be for us\n'
                                              'a memorial of the Baptism we have received,\n'
                                              'and grant that we may share\n'
                                              'in the gladness of our brothers and sisters,\n'
                                              'who at Easter have received their Baptism.\n'
                                              'Through Christ our Lord.\n'
                                              'R. Amen.\n'
                                              'The Renewal of Baptismal Promises',
                            'baptism_renewal': 'When the Rite of Baptism (and Confirmation) has '
                                               'been completed or, if this has not taken\n'
                                               'place, after the blessing of water, all stand, '
                                               'holding lighted candles in their hands, and renew\n'
                                               'the promise of baptismal faith, unless this has '
                                               'already been done together with those to be\n'
                                               'baptized (cf. no. 49).\n'
                                               'The Priest addresses the faithful in these or '
                                               'similar words:\n'
                                               'Dear brethren (brothers and sisters), through the '
                                               'Paschal Mystery\n'
                                               'we have been buried with Christ in Baptism,\n'
                                               'so that we may walk with him in newness of life.\n'
                                               'And so, now that our Lenten observance is '
                                               'concluded,\n'
                                               'let us renew the promises of Holy Baptism,\n'
                                               'by which we once renounced Satan and his works\n'
                                               'and promised to serve God in the holy Catholic '
                                               'Church.\n'
                                               'And so I ask you:\n'
                                               'Priest: Do you renounce Satan?\n'
                                               'All: I do.\n'
                                               'Priest: And all his works?\n'
                                               'All: I do.\n'
                                               'Priest: And all his empty show?\n'
                                               'All: I do.\n'
                                               'Or:\n'
                                               'Priest: Do you renounce sin,\n'
                                               'so as to live in the freedom of the children of '
                                               'God?\n'
                                               'All: I do.\n'
                                               'Priest: Do you renounce the lure of evil,\n'
                                               'so that sin may have no mastery over you?\n'
                                               'All: I do.\n'
                                               'Priest: Do you renounce Satan,\n'
                                               'the author and prince of sin?\n'
                                               'All: I do.\n'
                                               'If the situation warrants, this second formula may '
                                               'be adapted by Conferences of Bishops\n'
                                               'according to local needs.\n'
                                               'Then the Priest continues:\n'
                                               'Priest: Do you believe in God,\n'
                                               'the Father almighty,\n'
                                               'Creator of heaven and earth?\n'
                                               'All: I do.\n'
                                               'Priest: Do you believe in Jesus Christ, his only '
                                               'Son, our Lord,\n'
                                               'who was born of the Virgin Mary,\n'
                                               'suffered death and was buried,\n'
                                               'rose again from the dead\n'
                                               'and is seated at the right hand of the Father?\n'
                                               'All: I do.\n'
                                               'Priest: Do you believe in the Holy Spirit,\n'
                                               'the holy Catholic Church,\n'
                                               'the communion of saints,\n'
                                               'the forgiveness of sins,\n'
                                               'the resurrection of the body,\n'
                                               'and life everlasting?\n'
                                               'All: I do.\n'
                                               'And the Priest concludes:\n'
                                               'And may almighty God, the Father of our Lord Jesus '
                                               'Christ,\n'
                                               'who has given us new birth by water and the Holy '
                                               'Spirit\n'
                                               'and bestowed on us forgiveness of our sins,\n'
                                               'keep us by his grace,\n'
                                               'in Christ Jesus our Lord,\n'
                                               'for eternal life.\n'
                                               'All: Amen.',
                            'sprinkling': 'The Priest sprinkles the people with the blessed water, '
                                          'while all sing:\n'
                                          'Antiphon\n'
                                          'Or:\n'
                                          'Ant. I saw water flowing from the Temple,\n'
                                          'from its right-hand side, alleluia;\n'
                                          'and all to whom this water came were saved\n'
                                          'and shall say: Alleluia, alleluia.\n'
                                          'Another chant that is baptismal in character may also '
                                          'be sung.\n'
                                          '57. Meanwhile the newly baptized are led to their place '
                                          'among the faithful.\n'
                                          'If the blessing of baptismal water has not taken place '
                                          'in the baptistery, the Deacon and\n'
                                          'the ministers reverently carry the vessel of water to '
                                          'the font.\n'
                                          'If the blessing of the font has not occurred, the '
                                          'blessed water is put aside in an appropriate\n'
                                          'place.\n'
                                          '58. After the sprinkling, the Priest returns to the '
                                          'chair where, omitting the Creed, he directs the\n'
                                          'Universal Prayer, in which the newly baptized '
                                          'participate for the first time.\n'
                                          'Fourth Part:\n'
                                          'The Liturgy of the Eucharist',
                            'vigil_eucharist_intro': '<The Priest goes to the altar and begins the '
                                                     'Liturgy of the Eucharist in the usual way.\n'
                                                     '60. It is desirable that the bread and wine '
                                                     'be brought forward by the newly baptized or, '
                                                     'if they\n'
                                                     'are children, by their parents or '
                                                     'godparents.>',
                            'vigil_blessing': 'Solemn Blessing\n'
                                              'May almighty God bless you\n'
                                              'through today’s Easter Solemnity\n'
                                              'and, in his compassion,\n'
                                              'defend you from every assault of sin.\n'
                                              'R. Amen.\n'
                                              'And may he, who restores you to eternal life\n'
                                              'in the Resurrection of his Only Begotten,\n'
                                              'endow you with the prize of immortality.\n'
                                              'R. Amen.\n'
                                              'Now that the days of the Lord’s Passion have drawn '
                                              'to a close,\n'
                                              'may you who celebrate the gladness of the Paschal '
                                              'Feast\n'
                                              'come with Christ’s help, and exulting in spirit,\n'
                                              'to those feasts that are celebrated in eternal '
                                              'joy.\n'
                                              'R. Amen.\n'
                                              'And may the blessing of almighty God,\n'
                                              'the Father, and the Son, X and the Holy Spirit,\n'
                                              'come down on you and remain with you for ever.\n'
                                              'R. Amen.\n'
                                              'The final blessing formula from the Rite of Baptism '
                                              'of Adults or of Children may also be\n'
                                              'used, according to circumstances.',
                            'vigil_dismissal': '╋ Go forth, the Mass is ended, alleluia, '
                                               'alleluia.\n'
                                               '◎ Thanks be to God, alleluia, alleluia.',
                            'exsultet': {'choices': {'A': {'KR': '긴 양식', 'EN': 'Longer Form'},
                                                     'B': {'KR': '짧은 양식', 'EN': 'Shorter Form'}},
                                         'variants': {'A': {'lines': [{'sp': '',
                                                                       'text': 'Exult, let them '
                                                                               'exult, the hosts '
                                                                               'of heaven,'},
                                                                      {'sp': '',
                                                                       'text': 'exult, let Angel '
                                                                               'ministers of God '
                                                                               'exult,'},
                                                                      {'sp': '',
                                                                       'text': 'let the trumpet of '
                                                                               'salvation'},
                                                                      {'sp': '',
                                                                       'text': 'sound aloud our '
                                                                               'mighty King’s '
                                                                               'triumph!'},
                                                                      {'sp': '',
                                                                       'text': 'Be glad, let earth '
                                                                               'be glad, as glory '
                                                                               'floods her,'},
                                                                      {'sp': '',
                                                                       'text': 'ablaze with light '
                                                                               'from her eternal '
                                                                               'King,'},
                                                                      {'sp': '',
                                                                       'text': 'let all corners of '
                                                                               'the earth be '
                                                                               'glad,'},
                                                                      {'sp': '',
                                                                       'text': 'knowing an end to '
                                                                               'gloom and '
                                                                               'darkness.'},
                                                                      {'sp': '',
                                                                       'text': 'Rejoice, let '
                                                                               'Mother Church also '
                                                                               'rejoice,'},
                                                                      {'sp': '',
                                                                       'text': 'arrayed with the '
                                                                               'lightning of his '
                                                                               'glory,'},
                                                                      {'sp': '',
                                                                       'text': 'let this holy '
                                                                               'building shake '
                                                                               'with joy,'},
                                                                      {'sp': '',
                                                                       'text': 'filled with the '
                                                                               'mighty voices of '
                                                                               'the peoples.'},
                                                                      {'sp': '',
                                                                       'text': '(Therefore, '
                                                                               'dearest friends,'},
                                                                      {'sp': '',
                                                                       'text': 'standing in the '
                                                                               'awesome glory of '
                                                                               'this holy light,'},
                                                                      {'sp': '',
                                                                       'text': 'invoke with me, I '
                                                                               'ask you,'},
                                                                      {'sp': '',
                                                                       'text': 'the mercy of God '
                                                                               'almighty,'},
                                                                      {'sp': '',
                                                                       'text': 'that he, who has '
                                                                               'been pleased to '
                                                                               'number me,'},
                                                                      {'sp': '',
                                                                       'text': 'though unworthy, '
                                                                               'among the '
                                                                               'Levites,'},
                                                                      {'sp': '',
                                                                       'text': 'may pour into me '
                                                                               'his light '
                                                                               'unshadowed,'},
                                                                      {'sp': '',
                                                                       'text': 'that I may sing '
                                                                               'this candle’s '
                                                                               'perfect praises).'},
                                                                      {'sp': '',
                                                                       'text': '(V. The Lord be '
                                                                               'with you.'},
                                                                      {'sp': '◎',
                                                                       'text': 'And with your '
                                                                               'spirit.)'},
                                                                      {'sp': '',
                                                                       'text': 'V. Lift up your '
                                                                               'hearts.'},
                                                                      {'sp': '◎',
                                                                       'text': 'We lift them up to '
                                                                               'the Lord.'},
                                                                      {'sp': '',
                                                                       'text': 'V. Let us give '
                                                                               'thanks to the Lord '
                                                                               'our God.'},
                                                                      {'sp': '◎',
                                                                       'text': 'It is right and '
                                                                               'just.'},
                                                                      {'sp': '',
                                                                       'text': 'It is truly right '
                                                                               'and just,'},
                                                                      {'sp': '',
                                                                       'text': 'with ardent love '
                                                                               'of mind and heart'},
                                                                      {'sp': '',
                                                                       'text': 'and with devoted '
                                                                               'service of our '
                                                                               'voice,'},
                                                                      {'sp': '',
                                                                       'text': 'to acclaim our God '
                                                                               'invisible, the '
                                                                               'almighty Father,'},
                                                                      {'sp': '',
                                                                       'text': 'and Jesus Christ, '
                                                                               'our Lord, his Son, '
                                                                               'his Only '
                                                                               'Begotten.'},
                                                                      {'sp': '',
                                                                       'text': 'Who for our sake '
                                                                               'paid Adam’s debt '
                                                                               'to the eternal '
                                                                               'Father,'},
                                                                      {'sp': '',
                                                                       'text': 'and, pouring out '
                                                                               'his own dear '
                                                                               'Blood,'},
                                                                      {'sp': '',
                                                                       'text': 'wiped clean the '
                                                                               'record of our '
                                                                               'ancient '
                                                                               'sinfulness.'},
                                                                      {'sp': '',
                                                                       'text': 'These, then, are '
                                                                               'the feasts of '
                                                                               'Passover,'},
                                                                      {'sp': '',
                                                                       'text': 'in which is slain '
                                                                               'the Lamb, the one '
                                                                               'true Lamb,'},
                                                                      {'sp': '',
                                                                       'text': 'whose Blood '
                                                                               'anoints the '
                                                                               'doorposts of '
                                                                               'believers.'},
                                                                      {'sp': '',
                                                                       'text': 'This is the '
                                                                               'night,'},
                                                                      {'sp': '',
                                                                       'text': 'when once you led '
                                                                               'our forebears, '
                                                                               'Israel’s '
                                                                               'children,'},
                                                                      {'sp': '',
                                                                       'text': 'from slavery in '
                                                                               'Egypt'},
                                                                      {'sp': '',
                                                                       'text': 'and made them pass '
                                                                               'dry-shod through '
                                                                               'the Red Sea.'},
                                                                      {'sp': '',
                                                                       'text': 'This is the night'},
                                                                      {'sp': '',
                                                                       'text': 'that with a pillar '
                                                                               'of fire'},
                                                                      {'sp': '',
                                                                       'text': 'banished the '
                                                                               'darkness of sin.'},
                                                                      {'sp': '',
                                                                       'text': 'This is the night'},
                                                                      {'sp': '',
                                                                       'text': 'that even now, '
                                                                               'throughout the '
                                                                               'world,'},
                                                                      {'sp': '',
                                                                       'text': 'sets Christian '
                                                                               'believers apart '
                                                                               'from worldly '
                                                                               'vices'},
                                                                      {'sp': '',
                                                                       'text': 'and from the gloom '
                                                                               'of sin,'},
                                                                      {'sp': '',
                                                                       'text': 'leading them to '
                                                                               'grace'},
                                                                      {'sp': '',
                                                                       'text': 'and joining them '
                                                                               'to his holy ones.'},
                                                                      {'sp': '',
                                                                       'text': 'This is the '
                                                                               'night,'},
                                                                      {'sp': '',
                                                                       'text': 'when Christ broke '
                                                                               'the prison-bars of '
                                                                               'death'},
                                                                      {'sp': '',
                                                                       'text': 'and rose '
                                                                               'victorious from '
                                                                               'the underworld.'},
                                                                      {'sp': '',
                                                                       'text': 'Our birth would '
                                                                               'have been no '
                                                                               'gain,'},
                                                                      {'sp': '',
                                                                       'text': 'had we not been '
                                                                               'redeemed.'},
                                                                      {'sp': '',
                                                                       'text': 'O wonder of your '
                                                                               'humble care for '
                                                                               'us!'},
                                                                      {'sp': '',
                                                                       'text': 'O love, O charity '
                                                                               'beyond all '
                                                                               'telling,'},
                                                                      {'sp': '',
                                                                       'text': 'to ransom a slave '
                                                                               'you gave away your '
                                                                               'Son!'},
                                                                      {'sp': '',
                                                                       'text': 'O truly necessary '
                                                                               'sin of Adam,'},
                                                                      {'sp': '',
                                                                       'text': 'destroyed '
                                                                               'completely by the '
                                                                               'Death of Christ!'},
                                                                      {'sp': '',
                                                                       'text': 'O happy fault'},
                                                                      {'sp': '',
                                                                       'text': 'that earned so '
                                                                               'great, so glorious '
                                                                               'a Redeemer!'},
                                                                      {'sp': '',
                                                                       'text': 'O truly blessed '
                                                                               'night,'},
                                                                      {'sp': '',
                                                                       'text': 'worthy alone to '
                                                                               'know the time and '
                                                                               'hour'},
                                                                      {'sp': '',
                                                                       'text': 'when Christ rose '
                                                                               'from the '
                                                                               'underworld!'},
                                                                      {'sp': '',
                                                                       'text': 'This is the night'},
                                                                      {'sp': '',
                                                                       'text': 'of which it is '
                                                                               'written:'},
                                                                      {'sp': '',
                                                                       'text': 'The night shall be '
                                                                               'as bright as day,'},
                                                                      {'sp': '',
                                                                       'text': 'dazzling is the '
                                                                               'night for me,'},
                                                                      {'sp': '',
                                                                       'text': 'and full of '
                                                                               'gladness.'},
                                                                      {'sp': '',
                                                                       'text': 'The sanctifying '
                                                                               'power of this '
                                                                               'night'},
                                                                      {'sp': '',
                                                                       'text': 'dispels '
                                                                               'wickedness, washes '
                                                                               'faults away,'},
                                                                      {'sp': '',
                                                                       'text': 'restores innocence '
                                                                               'to the fallen, and '
                                                                               'joy to mourners,'},
                                                                      {'sp': '',
                                                                       'text': 'drives out hatred, '
                                                                               'fosters concord, '
                                                                               'and brings down '
                                                                               'the mighty.'},
                                                                      {'sp': '',
                                                                       'text': 'On this, your '
                                                                               'night of grace, O '
                                                                               'holy Father,'},
                                                                      {'sp': '',
                                                                       'text': 'accept this '
                                                                               'candle, a solemn '
                                                                               'offering,'},
                                                                      {'sp': '',
                                                                       'text': 'the work of bees '
                                                                               'and of your '
                                                                               'servants’ hands,'},
                                                                      {'sp': '',
                                                                       'text': 'an evening '
                                                                               'sacrifice of '
                                                                               'praise,'},
                                                                      {'sp': '',
                                                                       'text': 'this gift from '
                                                                               'your most holy '
                                                                               'Church.'},
                                                                      {'sp': '',
                                                                       'text': 'But now we know '
                                                                               'the praises of '
                                                                               'this pillar,'},
                                                                      {'sp': '',
                                                                       'text': 'which glowing fire '
                                                                               'ignites for God’s '
                                                                               'honor,'},
                                                                      {'sp': '',
                                                                       'text': 'a fire into many '
                                                                               'flames divided,'},
                                                                      {'sp': '',
                                                                       'text': 'yet never dimmed '
                                                                               'by sharing of its '
                                                                               'light,'},
                                                                      {'sp': '',
                                                                       'text': 'for it is fed by '
                                                                               'melting wax,'},
                                                                      {'sp': '',
                                                                       'text': 'drawn out by '
                                                                               'mother bees'},
                                                                      {'sp': '',
                                                                       'text': 'to build a torch '
                                                                               'so precious.'},
                                                                      {'sp': '',
                                                                       'text': 'O truly blessed '
                                                                               'night,'},
                                                                      {'sp': '',
                                                                       'text': 'when things of '
                                                                               'heaven are wed to '
                                                                               'those of earth,'},
                                                                      {'sp': '',
                                                                       'text': 'and divine to the '
                                                                               'human.'},
                                                                      {'sp': '',
                                                                       'text': 'Therefore, O '
                                                                               'Lord,'},
                                                                      {'sp': '',
                                                                       'text': 'we pray you that '
                                                                               'this candle,'},
                                                                      {'sp': '',
                                                                       'text': 'hallowed to the '
                                                                               'honor of your '
                                                                               'name,'},
                                                                      {'sp': '',
                                                                       'text': 'may persevere '
                                                                               'undimmed,'},
                                                                      {'sp': '',
                                                                       'text': 'to overcome the '
                                                                               'darkness of this '
                                                                               'night.'},
                                                                      {'sp': '',
                                                                       'text': 'Receive it as a '
                                                                               'pleasing '
                                                                               'fragrance,'},
                                                                      {'sp': '',
                                                                       'text': 'and let it mingle '
                                                                               'with the lights of '
                                                                               'heaven.'},
                                                                      {'sp': '',
                                                                       'text': 'May this flame be '
                                                                               'found still '
                                                                               'burning'},
                                                                      {'sp': '',
                                                                       'text': 'by the Morning '
                                                                               'Star:'},
                                                                      {'sp': '',
                                                                       'text': 'the one Morning '
                                                                               'Star who never '
                                                                               'sets,'},
                                                                      {'sp': '',
                                                                       'text': 'Christ your Son,'},
                                                                      {'sp': '',
                                                                       'text': 'who, coming back '
                                                                               'from death’s '
                                                                               'domain,'},
                                                                      {'sp': '',
                                                                       'text': 'has shed his '
                                                                               'peaceful light on '
                                                                               'humanity,'},
                                                                      {'sp': '',
                                                                       'text': 'and lives and '
                                                                               'reigns for ever '
                                                                               'and ever.'},
                                                                      {'sp': '◎',
                                                                       'text': 'Amen.'}]},
                                                      'B': {'lines': [{'sp': '',
                                                                       'text': 'Exult, let them '
                                                                               'exult, the hosts '
                                                                               'of heaven,'},
                                                                      {'sp': '',
                                                                       'text': 'exult, let Angel '
                                                                               'ministers of God '
                                                                               'exult,'},
                                                                      {'sp': '',
                                                                       'text': 'let the trumpet of '
                                                                               'salvation'},
                                                                      {'sp': '',
                                                                       'text': 'sound aloud our '
                                                                               'mighty King’s '
                                                                               'triumph!'},
                                                                      {'sp': '',
                                                                       'text': 'Be glad, let earth '
                                                                               'be glad, as glory '
                                                                               'floods her,'},
                                                                      {'sp': '',
                                                                       'text': 'ablaze with light '
                                                                               'from her eternal '
                                                                               'King,'},
                                                                      {'sp': '',
                                                                       'text': 'let all corners of '
                                                                               'the earth be '
                                                                               'glad,'},
                                                                      {'sp': '',
                                                                       'text': 'knowing an end to '
                                                                               'gloom and '
                                                                               'darkness.'},
                                                                      {'sp': '',
                                                                       'text': 'Rejoice, let '
                                                                               'Mother Church also '
                                                                               'rejoice,'},
                                                                      {'sp': '',
                                                                       'text': 'arrayed with the '
                                                                               'lightning of his '
                                                                               'glory,'},
                                                                      {'sp': '',
                                                                       'text': 'let this holy '
                                                                               'building shake '
                                                                               'with joy,'},
                                                                      {'sp': '',
                                                                       'text': 'filled with the '
                                                                               'mighty voices of '
                                                                               'the peoples.'},
                                                                      {'sp': '',
                                                                       'text': '(V. The Lord be '
                                                                               'with you.'},
                                                                      {'sp': '◎',
                                                                       'text': 'And with your '
                                                                               'spirit.)'},
                                                                      {'sp': '',
                                                                       'text': 'V. Lift up your '
                                                                               'hearts.'},
                                                                      {'sp': '◎',
                                                                       'text': 'We lift them up to '
                                                                               'the Lord.'},
                                                                      {'sp': '',
                                                                       'text': 'V. Let us give '
                                                                               'thanks to the Lord '
                                                                               'our God.'},
                                                                      {'sp': '◎',
                                                                       'text': 'It is right and '
                                                                               'just.'},
                                                                      {'sp': '',
                                                                       'text': 'It is truly right '
                                                                               'and just,'},
                                                                      {'sp': '',
                                                                       'text': 'with ardent love '
                                                                               'of mind and heart'},
                                                                      {'sp': '',
                                                                       'text': 'and with devoted '
                                                                               'service of our '
                                                                               'voice,'},
                                                                      {'sp': '',
                                                                       'text': 'to acclaim our God '
                                                                               'invisible, the '
                                                                               'almighty Father,'},
                                                                      {'sp': '',
                                                                       'text': 'and Jesus Christ, '
                                                                               'our Lord, his Son, '
                                                                               'his Only '
                                                                               'Begotten.'},
                                                                      {'sp': '',
                                                                       'text': 'Who for our sake '
                                                                               'paid Adam’s debt '
                                                                               'to the eternal '
                                                                               'Father,'},
                                                                      {'sp': '',
                                                                       'text': 'and, pouring out '
                                                                               'his own dear '
                                                                               'Blood,'},
                                                                      {'sp': '',
                                                                       'text': 'wiped clean the '
                                                                               'record of our '
                                                                               'ancient '
                                                                               'sinfulness.'},
                                                                      {'sp': '',
                                                                       'text': 'These then are the '
                                                                               'feasts of '
                                                                               'Passover,'},
                                                                      {'sp': '',
                                                                       'text': 'in which is slain '
                                                                               'the Lamb, the one '
                                                                               'true Lamb,'},
                                                                      {'sp': '',
                                                                       'text': 'whose Blood '
                                                                               'anoints the '
                                                                               'doorposts of '
                                                                               'believers.'},
                                                                      {'sp': '',
                                                                       'text': 'This is the '
                                                                               'night,'},
                                                                      {'sp': '',
                                                                       'text': 'when once you led '
                                                                               'our forebears, '
                                                                               'Israel’s '
                                                                               'children,'},
                                                                      {'sp': '',
                                                                       'text': 'from slavery in '
                                                                               'Egypt'},
                                                                      {'sp': '',
                                                                       'text': 'and made them pass '
                                                                               'dry-shod through '
                                                                               'the Red Sea.'},
                                                                      {'sp': '',
                                                                       'text': 'This is the night'},
                                                                      {'sp': '',
                                                                       'text': 'that with a pillar '
                                                                               'of fire'},
                                                                      {'sp': '',
                                                                       'text': 'banished the '
                                                                               'darkness of sin.'},
                                                                      {'sp': '',
                                                                       'text': 'This is the night'},
                                                                      {'sp': '',
                                                                       'text': 'that which even '
                                                                               'now, throughout '
                                                                               'the world,'},
                                                                      {'sp': '',
                                                                       'text': 'sets Christian '
                                                                               'believers apart '
                                                                               'from worldly '
                                                                               'vices'},
                                                                      {'sp': '',
                                                                       'text': 'and from the gloom '
                                                                               'of sin,'},
                                                                      {'sp': '',
                                                                       'text': 'leading them to '
                                                                               'grace'},
                                                                      {'sp': '',
                                                                       'text': 'and joining them '
                                                                               'to his holy ones.'},
                                                                      {'sp': '',
                                                                       'text': 'This is the '
                                                                               'night,'},
                                                                      {'sp': '',
                                                                       'text': 'when Christ broke '
                                                                               'the prison-bars of '
                                                                               'death'},
                                                                      {'sp': '',
                                                                       'text': 'and rose '
                                                                               'victorious from '
                                                                               'the underworld.'},
                                                                      {'sp': '',
                                                                       'text': 'O wonder of your '
                                                                               'humble care for '
                                                                               'us!'},
                                                                      {'sp': '',
                                                                       'text': 'O love, O charity '
                                                                               'beyond all '
                                                                               'telling,'},
                                                                      {'sp': '',
                                                                       'text': 'to ransom a slave '
                                                                               'you gave away your '
                                                                               'Son!'},
                                                                      {'sp': '',
                                                                       'text': 'O truly necessary '
                                                                               'sin of Adam,'},
                                                                      {'sp': '',
                                                                       'text': 'destroyed '
                                                                               'completely by the '
                                                                               'Death of Christ!'},
                                                                      {'sp': '',
                                                                       'text': 'O happy fault'},
                                                                      {'sp': '',
                                                                       'text': 'that earned so '
                                                                               'great, so glorious '
                                                                               'a Redeemer!'},
                                                                      {'sp': '',
                                                                       'text': 'The sanctifying '
                                                                               'power of this '
                                                                               'night'},
                                                                      {'sp': '',
                                                                       'text': 'dispels '
                                                                               'wickedness, washes '
                                                                               'faults away,'},
                                                                      {'sp': '',
                                                                       'text': 'restores innocence '
                                                                               'to the fallen, and '
                                                                               'joy to mourners.'},
                                                                      {'sp': '',
                                                                       'text': 'O truly blessed '
                                                                               'night,'},
                                                                      {'sp': '',
                                                                       'text': 'when things of '
                                                                               'heaven are wed to '
                                                                               'those of earth'},
                                                                      {'sp': '',
                                                                       'text': 'and divine to the '
                                                                               'human.'},
                                                                      {'sp': '',
                                                                       'text': 'On this, your '
                                                                               'night of grace, O '
                                                                               'holy Father,'},
                                                                      {'sp': '',
                                                                       'text': 'accept this '
                                                                               'candle, a solemn '
                                                                               'offering,'},
                                                                      {'sp': '',
                                                                       'text': 'the work of bees '
                                                                               'and of your '
                                                                               'servants’ hands,'},
                                                                      {'sp': '',
                                                                       'text': 'an evening '
                                                                               'sacrifice of '
                                                                               'praise,'},
                                                                      {'sp': '',
                                                                       'text': 'this gift from '
                                                                               'your most holy '
                                                                               'Church'},
                                                                      {'sp': '',
                                                                       'text': 'Therefore, O '
                                                                               'Lord,'},
                                                                      {'sp': '',
                                                                       'text': 'we pray you that '
                                                                               'this candle,'},
                                                                      {'sp': '',
                                                                       'text': 'hallowed to the '
                                                                               'honor of your '
                                                                               'name,'},
                                                                      {'sp': '',
                                                                       'text': 'may persevere '
                                                                               'undimmed,'},
                                                                      {'sp': '',
                                                                       'text': 'to overcome the '
                                                                               'darkness of this '
                                                                               'night.'},
                                                                      {'sp': '',
                                                                       'text': 'Receive it as a '
                                                                               'pleasing '
                                                                               'fragrance,'},
                                                                      {'sp': '',
                                                                       'text': 'and let it mingle '
                                                                               'with the lights of '
                                                                               'heaven.'},
                                                                      {'sp': '',
                                                                       'text': 'May this flame be '
                                                                               'found still '
                                                                               'burning'},
                                                                      {'sp': '',
                                                                       'text': 'by the Morning '
                                                                               'Star:'},
                                                                      {'sp': '',
                                                                       'text': 'the one Morning '
                                                                               'Star who never '
                                                                               'sets,'},
                                                                      {'sp': '',
                                                                       'text': 'Christ your Son,'},
                                                                      {'sp': '',
                                                                       'text': 'who, coming back '
                                                                               'from death’s '
                                                                               'domain,'},
                                                                      {'sp': '',
                                                                       'text': 'has shed his '
                                                                               'peaceful light on '
                                                                               'humanity,'},
                                                                      {'sp': '',
                                                                       'text': 'and lives and '
                                                                               'reigns for ever '
                                                                               'and ever.'},
                                                                      {'sp': '◎',
                                                                       'text': 'Amen.'}]}}},
                            'vigil_prayer_1': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'}},
                                               'variants': {'A': {'lines': [{'sp': '',
                                                                             'text': 'After the '
                                                                                     'first '
                                                                                     'reading (On '
                                                                                     'creation: Gn '
                                                                                     '1: 1–2: 2 or '
                                                                                     '1: 1, '
                                                                                     '26-31a) and '
                                                                                     'the Psalm '
                                                                                     '(104 [103] '
                                                                                     'or 33 '
                                                                                     '[32]).'},
                                                                            {'sp': '',
                                                                             'text': 'Let us '
                                                                                     'pray.'},
                                                                            {'sp': '',
                                                                             'text': 'Almighty '
                                                                                     'ever-living '
                                                                                     'God,'},
                                                                            {'sp': '',
                                                                             'text': 'who are '
                                                                                     'wonderful in '
                                                                                     'the ordering '
                                                                                     'of all your '
                                                                                     'works,'},
                                                                            {'sp': '',
                                                                             'text': 'may those '
                                                                                     'you have '
                                                                                     'redeemed '
                                                                                     'understand'},
                                                                            {'sp': '',
                                                                             'text': 'that there '
                                                                                     'exists '
                                                                                     'nothing more '
                                                                                     'marvelous'},
                                                                            {'sp': '',
                                                                             'text': 'than the '
                                                                                     'world’s '
                                                                                     'creation in '
                                                                                     'the '
                                                                                     'beginning'},
                                                                            {'sp': '',
                                                                             'text': 'except that, '
                                                                                     'at the end '
                                                                                     'of the '
                                                                                     'ages,'},
                                                                            {'sp': '',
                                                                             'text': 'Christ our '
                                                                                     'Passover has '
                                                                                     'been '
                                                                                     'sacrificed.'},
                                                                            {'sp': '',
                                                                             'text': 'Who lives '
                                                                                     'and reigns '
                                                                                     'for ever and '
                                                                                     'ever.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'},
                                                                            {'sp': '',
                                                                             'text': 'Or, On the '
                                                                                     'creation of '
                                                                                     'man:'},
                                                                            {'sp': '',
                                                                             'text': 'O God, who '
                                                                                     'wonderfully '
                                                                                     'created '
                                                                                     'human '
                                                                                     'nature'},
                                                                            {'sp': '',
                                                                             'text': 'and still '
                                                                                     'more '
                                                                                     'wonderfully '
                                                                                     'redeemed '
                                                                                     'it,'},
                                                                            {'sp': '',
                                                                             'text': 'grant us, we '
                                                                                     'pray,'},
                                                                            {'sp': '',
                                                                             'text': 'to set our '
                                                                                     'minds '
                                                                                     'against the '
                                                                                     'enticements '
                                                                                     'of sin,'},
                                                                            {'sp': '',
                                                                             'text': 'that we may '
                                                                                     'merit to '
                                                                                     'attain '
                                                                                     'eternal '
                                                                                     'joys.'},
                                                                            {'sp': '',
                                                                             'text': 'Through '
                                                                                     'Christ our '
                                                                                     'Lord.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]}}},
                            'vigil_prayer_2': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'}},
                                               'variants': {'A': {'lines': [{'sp': '',
                                                                             'text': 'After the '
                                                                                     'second '
                                                                                     'reading (On '
                                                                                     'Abraham’s '
                                                                                     'sacrifice: '
                                                                                     'Gn 22: 1-18 '
                                                                                     'or 1-2, 9a, '
                                                                                     '10-13, '
                                                                                     '15-18) and '
                                                                                     'the'},
                                                                            {'sp': '',
                                                                             'text': 'Psalm (16 '
                                                                                     '[15]).'},
                                                                            {'sp': '',
                                                                             'text': 'Let us '
                                                                                     'pray.'},
                                                                            {'sp': '',
                                                                             'text': 'O God, '
                                                                                     'supreme '
                                                                                     'Father of '
                                                                                     'the '
                                                                                     'faithful,'},
                                                                            {'sp': '',
                                                                             'text': 'who increase '
                                                                                     'the children '
                                                                                     'of your '
                                                                                     'promise'},
                                                                            {'sp': '',
                                                                             'text': 'by pouring '
                                                                                     'out the '
                                                                                     'grace of '
                                                                                     'adoption'},
                                                                            {'sp': '',
                                                                             'text': 'throughout '
                                                                                     'the whole '
                                                                                     'world'},
                                                                            {'sp': '',
                                                                             'text': 'and who '
                                                                                     'through the '
                                                                                     'Paschal '
                                                                                     'Mystery'},
                                                                            {'sp': '',
                                                                             'text': 'make your '
                                                                                     'servant '
                                                                                     'Abraham '
                                                                                     'father of '
                                                                                     'nations,'},
                                                                            {'sp': '',
                                                                             'text': 'as once you '
                                                                                     'swore,'},
                                                                            {'sp': '',
                                                                             'text': 'grant, we '
                                                                                     'pray,'},
                                                                            {'sp': '',
                                                                             'text': 'that your '
                                                                                     'peoples may '
                                                                                     'enter '
                                                                                     'worthily'},
                                                                            {'sp': '',
                                                                             'text': 'into the '
                                                                                     'grace to '
                                                                                     'which you '
                                                                                     'call them.'},
                                                                            {'sp': '',
                                                                             'text': 'Through '
                                                                                     'Christ our '
                                                                                     'Lord.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]}}},
                            'vigil_prayer_3': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'},
                                                           'B': {'KR': '제2양식', 'EN': 'Form 2'}},
                                               'variants': {'A': {'lines': [{'sp': '',
                                                                             'text': 'After the '
                                                                                     'third '
                                                                                     'reading (On '
                                                                                     'the passage '
                                                                                     'through the '
                                                                                     'Red Sea: Ex '
                                                                                     '14: 15-15: '
                                                                                     '1) and its '
                                                                                     'canticle'},
                                                                            {'sp': '',
                                                                             'text': '(Ex 15).'},
                                                                            {'sp': '',
                                                                             'text': 'Let us '
                                                                                     'pray.'},
                                                                            {'sp': '',
                                                                             'text': 'O God, whose '
                                                                                     'ancient '
                                                                                     'wonders'},
                                                                            {'sp': '',
                                                                             'text': 'remain '
                                                                                     'undimmed in '
                                                                                     'splendor '
                                                                                     'even in our '
                                                                                     'day,'},
                                                                            {'sp': '',
                                                                             'text': 'for what you '
                                                                                     'once '
                                                                                     'bestowed on '
                                                                                     'a single '
                                                                                     'people,'},
                                                                            {'sp': '',
                                                                             'text': 'freeing them '
                                                                                     'from '
                                                                                     'Pharaoh’s '
                                                                                     'persecution'},
                                                                            {'sp': '',
                                                                             'text': 'by the power '
                                                                                     'of your '
                                                                                     'right hand'},
                                                                            {'sp': '',
                                                                             'text': 'now you '
                                                                                     'bring about '
                                                                                     'as the '
                                                                                     'salvation of '
                                                                                     'the nations'},
                                                                            {'sp': '',
                                                                             'text': 'through the '
                                                                                     'waters of '
                                                                                     'rebirth,'},
                                                                            {'sp': '',
                                                                             'text': 'grant, we '
                                                                                     'pray, that '
                                                                                     'the whole '
                                                                                     'world'},
                                                                            {'sp': '',
                                                                             'text': 'may become '
                                                                                     'children of '
                                                                                     'Abraham'},
                                                                            {'sp': '',
                                                                             'text': 'and inherit '
                                                                                     'the dignity '
                                                                                     'of Israel’s '
                                                                                     'birthright.'},
                                                                            {'sp': '',
                                                                             'text': 'Through '
                                                                                     'Christ our '
                                                                                     'Lord.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]},
                                                            'B': {'lines': [{'sp': '',
                                                                             'text': 'O God, who '
                                                                                     'by the light '
                                                                                     'of the New '
                                                                                     'Testament'},
                                                                            {'sp': '',
                                                                             'text': 'have '
                                                                                     'unlocked the '
                                                                                     'meaning'},
                                                                            {'sp': '',
                                                                             'text': 'of wonders '
                                                                                     'worked in '
                                                                                     'former '
                                                                                     'times,'},
                                                                            {'sp': '',
                                                                             'text': 'so that the '
                                                                                     'Red Sea '
                                                                                     'prefigures '
                                                                                     'the sacred '
                                                                                     'font'},
                                                                            {'sp': '',
                                                                             'text': 'and the '
                                                                                     'nation '
                                                                                     'delivered '
                                                                                     'from '
                                                                                     'slavery'},
                                                                            {'sp': '',
                                                                             'text': 'foreshadows '
                                                                                     'the '
                                                                                     'Christian '
                                                                                     'people,'},
                                                                            {'sp': '',
                                                                             'text': 'grant, we '
                                                                                     'pray, that '
                                                                                     'all '
                                                                                     'nations,'},
                                                                            {'sp': '',
                                                                             'text': 'obtaining '
                                                                                     'the '
                                                                                     'privilege of '
                                                                                     'Israel by '
                                                                                     'merit of '
                                                                                     'faith,'},
                                                                            {'sp': '',
                                                                             'text': 'may be '
                                                                                     'reborn by '
                                                                                     'partaking of '
                                                                                     'your '
                                                                                     'Spirit.'},
                                                                            {'sp': '',
                                                                             'text': 'Through '
                                                                                     'Christ our '
                                                                                     'Lord.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]}}},
                            'vigil_prayer_4': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'}},
                                               'variants': {'A': {'lines': [{'sp': '',
                                                                             'text': 'After the '
                                                                                     'fourth '
                                                                                     'reading (On '
                                                                                     'the new '
                                                                                     'Jerusalem: '
                                                                                     'Is 54: 5-14) '
                                                                                     'and the '
                                                                                     'Psalm (30 '
                                                                                     '[29]).'},
                                                                            {'sp': '',
                                                                             'text': 'Let us '
                                                                                     'pray.'},
                                                                            {'sp': '',
                                                                             'text': 'Almighty '
                                                                                     'ever-living '
                                                                                     'God,'},
                                                                            {'sp': '',
                                                                             'text': 'surpass, for '
                                                                                     'the honor of '
                                                                                     'your name,'},
                                                                            {'sp': '',
                                                                             'text': 'what you '
                                                                                     'pledged to '
                                                                                     'the '
                                                                                     'Patriarchs '
                                                                                     'by reason of '
                                                                                     'their '
                                                                                     'faith,'},
                                                                            {'sp': '',
                                                                             'text': 'and through '
                                                                                     'sacred '
                                                                                     'adoption '
                                                                                     'increase the '
                                                                                     'children of'},
                                                                            {'sp': '',
                                                                             'text': 'your '
                                                                                     'promise,'},
                                                                            {'sp': '',
                                                                             'text': 'so that what '
                                                                                     'the Saints '
                                                                                     'of old never '
                                                                                     'doubted '
                                                                                     'would come '
                                                                                     'to pass'},
                                                                            {'sp': '',
                                                                             'text': 'your Church '
                                                                                     'may now see '
                                                                                     'in great '
                                                                                     'part '
                                                                                     'fulfilled.'},
                                                                            {'sp': '',
                                                                             'text': 'Through '
                                                                                     'Christ our '
                                                                                     'Lord.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'},
                                                                            {'sp': '',
                                                                             'text': 'Alternatively, '
                                                                                     'other '
                                                                                     'prayers may '
                                                                                     'be used from '
                                                                                     'among those '
                                                                                     'which follow '
                                                                                     'the readings '
                                                                                     'that'},
                                                                            {'sp': '',
                                                                             'text': 'have been '
                                                                                     'omitted.'}]}}},
                            'vigil_prayer_5': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'}},
                                               'variants': {'A': {'lines': [{'sp': '',
                                                                             'text': 'After the '
                                                                                     'fifth '
                                                                                     'reading (On '
                                                                                     'salvation '
                                                                                     'freely '
                                                                                     'offered to '
                                                                                     'all: Is 55: '
                                                                                     '1-11) and '
                                                                                     'the canticle '
                                                                                     '(Is 12).'},
                                                                            {'sp': '',
                                                                             'text': 'Let us '
                                                                                     'pray.'},
                                                                            {'sp': '',
                                                                             'text': 'Almighty '
                                                                                     'ever-living '
                                                                                     'God,'},
                                                                            {'sp': '',
                                                                             'text': 'sole hope of '
                                                                                     'the world,'},
                                                                            {'sp': '',
                                                                             'text': 'who by the '
                                                                                     'preaching of '
                                                                                     'your '
                                                                                     'Prophets'},
                                                                            {'sp': '',
                                                                             'text': 'unveiled the '
                                                                                     'mysteries of '
                                                                                     'this present '
                                                                                     'age,'},
                                                                            {'sp': '',
                                                                             'text': 'graciously '
                                                                                     'increase the '
                                                                                     'longing of '
                                                                                     'your '
                                                                                     'people,'},
                                                                            {'sp': '',
                                                                             'text': 'for only at '
                                                                                     'the '
                                                                                     'prompting of '
                                                                                     'your grace'},
                                                                            {'sp': '',
                                                                             'text': 'do the '
                                                                                     'faithful '
                                                                                     'progress in '
                                                                                     'any kind of '
                                                                                     'virtue.'},
                                                                            {'sp': '',
                                                                             'text': 'Through '
                                                                                     'Christ our '
                                                                                     'Lord.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]}}},
                            'vigil_prayer_6': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'}},
                                               'variants': {'A': {'lines': [{'sp': '',
                                                                             'text': 'After the '
                                                                                     'sixth '
                                                                                     'reading (On '
                                                                                     'the fountain '
                                                                                     'of wisdom: '
                                                                                     'Bar 3: 9-15, '
                                                                                     '31–4: 4) and '
                                                                                     'the Psalm '
                                                                                     '(19 [18]).'},
                                                                            {'sp': '',
                                                                             'text': 'Let us '
                                                                                     'pray.'},
                                                                            {'sp': '',
                                                                             'text': 'O God, who '
                                                                                     'constantly '
                                                                                     'increase '
                                                                                     'your Church'},
                                                                            {'sp': '',
                                                                             'text': 'by your call '
                                                                                     'to the '
                                                                                     'nations,'},
                                                                            {'sp': '',
                                                                             'text': 'graciously '
                                                                                     'grant'},
                                                                            {'sp': '',
                                                                             'text': 'to those you '
                                                                                     'wash clean '
                                                                                     'in the '
                                                                                     'waters of '
                                                                                     'Baptism'},
                                                                            {'sp': '',
                                                                             'text': 'the '
                                                                                     'assurance of '
                                                                                     'your '
                                                                                     'unfailing '
                                                                                     'protection.'},
                                                                            {'sp': '',
                                                                             'text': 'Through '
                                                                                     'Christ our '
                                                                                     'Lord.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]}}},
                            'vigil_prayer_7': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'},
                                                           'B': {'KR': '제2양식', 'EN': 'Form 2'}},
                                               'variants': {'A': {'lines': [{'sp': '',
                                                                             'text': 'After the '
                                                                                     'seventh '
                                                                                     'reading (On '
                                                                                     'a new heart '
                                                                                     'and new '
                                                                                     'spirit: Ez '
                                                                                     '36: 16-28) '
                                                                                     'and the '
                                                                                     'Psalm '
                                                                                     '(42-43'},
                                                                            {'sp': '',
                                                                             'text': 'Let us '
                                                                                     'pray.'},
                                                                            {'sp': '',
                                                                             'text': 'O God of '
                                                                                     'unchanging '
                                                                                     'power and '
                                                                                     'eternal '
                                                                                     'light,'},
                                                                            {'sp': '',
                                                                             'text': 'look with '
                                                                                     'favor on the '
                                                                                     'wondrous '
                                                                                     'mystery of '
                                                                                     'the whole '
                                                                                     'Church'},
                                                                            {'sp': '',
                                                                             'text': 'and serenely '
                                                                                     'accomplish '
                                                                                     'the work of '
                                                                                     'human '
                                                                                     'salvation,'},
                                                                            {'sp': '',
                                                                             'text': 'which you '
                                                                                     'planned from '
                                                                                     'all '
                                                                                     'eternity;'},
                                                                            {'sp': '',
                                                                             'text': 'may the '
                                                                                     'whole world '
                                                                                     'know and '
                                                                                     'see'},
                                                                            {'sp': '',
                                                                             'text': 'that what '
                                                                                     'was cast '
                                                                                     'down is '
                                                                                     'raised up,'},
                                                                            {'sp': '',
                                                                             'text': 'what had '
                                                                                     'become old '
                                                                                     'is made '
                                                                                     'new,'},
                                                                            {'sp': '',
                                                                             'text': 'and all '
                                                                                     'things are '
                                                                                     'restored to '
                                                                                     'integrity '
                                                                                     'through '
                                                                                     'Christ,'},
                                                                            {'sp': '',
                                                                             'text': 'just as by '
                                                                                     'him they '
                                                                                     'came into '
                                                                                     'being.'},
                                                                            {'sp': '',
                                                                             'text': 'Who lives '
                                                                                     'and reigns '
                                                                                     'for ever and '
                                                                                     'ever.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]},
                                                            'B': {'lines': [{'sp': '',
                                                                             'text': 'O God, who '
                                                                                     'by the pages '
                                                                                     'of both '
                                                                                     'Testaments'},
                                                                            {'sp': '',
                                                                             'text': 'instruct and '
                                                                                     'prepare us '
                                                                                     'to celebrate '
                                                                                     'the Paschal '
                                                                                     'Mystery,'},
                                                                            {'sp': '',
                                                                             'text': 'grant that '
                                                                                     'we may '
                                                                                     'comprehend '
                                                                                     'your mercy,'},
                                                                            {'sp': '',
                                                                             'text': 'so that the '
                                                                                     'gifts we '
                                                                                     'receive from '
                                                                                     'you this '
                                                                                     'night'},
                                                                            {'sp': '',
                                                                             'text': 'may confirm '
                                                                                     'our hope of '
                                                                                     'the gifts to '
                                                                                     'come.'},
                                                                            {'sp': '',
                                                                             'text': 'Through '
                                                                                     'Christ our '
                                                                                     'Lord.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]}}}},
                  'prayers': {'prayer_offerings': 'Accept, we ask, O Lord,\n'
                                                  'the prayers of your people\n'
                                                  'with the sacrificial offerings,\n'
                                                  'that what has begun in the paschal mysteries\n'
                                                  'may, by the working of your power,\n'
                                                  'bring us to the healing of eternity.\n'
                                                  'Through Christ our Lord.',
                              'communion': 'Christ our Passover has been sacrificed;\n'
                                           'therefore let us keep the feast\n'
                                           'with the unleavened bread of purity and truth, '
                                           'alleluia.',
                              'prayer_after': 'Pour out on us, O Lord, the Spirit of your love,\n'
                                              'and in your kindness make those you have nourished\n'
                                              'by this paschal Sacrament\n'
                                              'one in mind and heart.\n'
                                              'Through Christ our Lord.',
                              'collect': 'O God, who make this most sacred night radiant\n'
                                         'with the glory of the Lord’s Resurrection,\n'
                                         'stir up in your Church a spirit of adoption,\n'
                                         'so that, renewed in body and mind,\n'
                                         'we may render you undivided service.\n'
                                         'Through our Lord Jesus Christ, your Son,\n'
                                         'who lives and reigns with you in the unity of the Holy '
                                         'Spirit,\n'
                                         'one God, for ever and ever.'},
                  'requiredSourceSections': {'EN': ['vigil_reading_1',
                                                    'vigil_reading_2',
                                                    'vigil_reading_3',
                                                    'vigil_reading_4',
                                                    'vigil_reading_5',
                                                    'vigil_reading_6',
                                                    'vigil_reading_7',
                                                    'vigil_epistle',
                                                    'gospel']},
                  'sourceParts': {'EN': {'vigil_reading_1': {'start': '^Reading\\s*1\\b',
                                                             'stop': '^(?:Responsorial '
                                                                     'Psalm|Reading\\s*\\d|Epistle|Alleluia)',
                                                             'kind': 'reading'},
                                         'vigil_reading_2': {'start': '^Reading\\s*2\\b',
                                                             'stop': '^(?:Responsorial '
                                                                     'Psalm|Reading\\s*\\d|Epistle|Alleluia)',
                                                             'kind': 'reading'},
                                         'vigil_reading_3': {'start': '^Reading\\s*3\\b',
                                                             'stop': '^(?:Responsorial '
                                                                     'Psalm|Reading\\s*\\d|Epistle|Alleluia)',
                                                             'kind': 'reading'},
                                         'vigil_reading_4': {'start': '^Reading\\s*4\\b',
                                                             'stop': '^(?:Responsorial '
                                                                     'Psalm|Reading\\s*\\d|Epistle|Alleluia)',
                                                             'kind': 'reading'},
                                         'vigil_reading_5': {'start': '^Reading\\s*5\\b',
                                                             'stop': '^(?:Responsorial '
                                                                     'Psalm|Reading\\s*\\d|Epistle|Alleluia)',
                                                             'kind': 'reading'},
                                         'vigil_reading_6': {'start': '^Reading\\s*6\\b',
                                                             'stop': '^(?:Responsorial '
                                                                     'Psalm|Reading\\s*\\d|Epistle|Alleluia)',
                                                             'kind': 'reading'},
                                         'vigil_reading_7': {'start': '^Reading\\s*7\\b',
                                                             'stop': '^(?:Responsorial '
                                                                     'Psalm|Reading\\s*\\d|Epistle|Alleluia)',
                                                             'kind': 'reading'},
                                         'vigil_psalm_1': {'after': '^Reading\\s*1\\b',
                                                           'start': '^Responsorial Psalm',
                                                           'stop': '^(?:Reading\\s*\\d|Epistle|Alleluia)',
                                                           'kind': 'psalm'},
                                         'vigil_psalm_2': {'after': '^Reading\\s*2\\b',
                                                           'start': '^Responsorial Psalm',
                                                           'stop': '^(?:Reading\\s*\\d|Epistle|Alleluia)',
                                                           'kind': 'psalm'},
                                         'vigil_psalm_3': {'after': '^Reading\\s*3\\b',
                                                           'start': '^Responsorial Psalm',
                                                           'stop': '^(?:Reading\\s*\\d|Epistle|Alleluia)',
                                                           'kind': 'psalm'},
                                         'vigil_psalm_4': {'after': '^Reading\\s*4\\b',
                                                           'start': '^Responsorial Psalm',
                                                           'stop': '^(?:Reading\\s*\\d|Epistle|Alleluia)',
                                                           'kind': 'psalm'},
                                         'vigil_psalm_5': {'after': '^Reading\\s*5\\b',
                                                           'start': '^Responsorial Psalm',
                                                           'stop': '^(?:Reading\\s*\\d|Epistle|Alleluia)',
                                                           'kind': 'psalm'},
                                         'vigil_psalm_6': {'after': '^Reading\\s*6\\b',
                                                           'start': '^Responsorial Psalm',
                                                           'stop': '^(?:Reading\\s*\\d|Epistle|Alleluia)',
                                                           'kind': 'psalm'},
                                         'vigil_psalm_7': {'after': '^Reading\\s*7\\b',
                                                           'start': '^Responsorial Psalm',
                                                           'stop': '^(?:Reading\\s*\\d|Epistle|Alleluia)',
                                                           'kind': 'psalm'},
                                         'vigil_epistle': {'start': '^Epistle',
                                                           'stop': '^(?:Responsorial '
                                                                   'Psalm|Alleluia)',
                                                           'kind': 'reading'},
                                         'vigil_alleluia': {'after': '^Epistle',
                                                            'start': '^(?:Responsorial '
                                                                     'Psalm|Alleluia)',
                                                            'stop': '^Gospel',
                                                            'kind': 'psalm'}}}},
 'john_baptist_vigil': {'prayers': {'entrance': 'He will be great in the sight of the Lord and '
                                                'will be filled with the Holy Spirit, even from '
                                                'his mother’s womb; and many will rejoice at his '
                                                'birth.',
                                    'collect': 'Grant, we pray, almighty God, that your family may '
                                               'walk in the way of salvation and, attentive to '
                                               'what Saint John the Precursor urged, may come '
                                               'safely to the One he foretold, our Lord Jesus '
                                               'Christ. Who lives and reigns with you in the unity '
                                               'of the Holy Spirit, one God, for ever and ever.',
                                    'prayer_offerings': 'Look with favor, O Lord, upon the '
                                                        'offerings made by your people on the '
                                                        'Solemnity of Saint John the Baptist, and '
                                                        'grant that what we celebrate in mystery '
                                                        'we may follow with deeds of devoted '
                                                        'service. Through Christ our Lord.',
                                    'communion': 'Blessed be the Lord, the God of Israel! He has '
                                                 'visited his people and redeemed them.',
                                    'prayer_after': 'May the marvelous prayer of Saint John the '
                                                    'Baptist accompany us who have eaten our fill '
                                                    'at this sacrificial feast, O Lord, and, since '
                                                    'Saint John proclaimed your Son to be the Lamb '
                                                    'who would take away our sins, may he implore '
                                                    'now for us your favor. Through Christ our '
                                                    'Lord.'}},
 'peter_paul_vigil': {'prayers': {'entrance': 'Peter the Apostle, and Paul the teacher of the '
                                              'Gentiles, these have taught us your law, O Lord.',
                                  'collect': 'Grant, we pray, O Lord our God, that we may be '
                                             'sustained by the intercession of the blessed '
                                             'Apostles Peter and Paul, that, as through them you '
                                             'gave your Church the foundations of her heavenly '
                                             'office, so through them you may help her to eternal '
                                             'salvation. Through our Lord Jesus Christ, your Son, '
                                             'who lives and reigns with you in the unity of the '
                                             'Holy Spirit, one God, for ever and ever.',
                                  'prayer_offerings': 'We bring offerings to your altar, O Lord, '
                                                      'as we glory in the solemn feast of the '
                                                      'blessed Apostles Peter and Paul, so that '
                                                      'the more we doubt our own merits, the more '
                                                      'we may rejoice that we are to be saved by '
                                                      'your loving kindness. Through Christ our '
                                                      'Lord.',
                                  'communion': 'Simon, Son of John, do you love me more than '
                                               'these? Lord, you know everything; you know that I '
                                               'love you.',
                                  'prayer_after': 'By this heavenly Sacrament, O Lord, we pray, '
                                                  'strengthen your faithful, whom you have '
                                                  'enlightened with the teaching of the Apostles. '
                                                  'Through Christ our Lord.'}},
 'assumption_vigil': {'prayers': {'entrance': 'Glorious things are spoken of you, O Mary, who '
                                              'today were exalted above the choirs of Angels into '
                                              'eternal triumph with Christ.',
                                  'collect': 'O God, who, looking on the lowliness of the Blessed '
                                             'Virgin Mary, raised her to this grace, that your '
                                             'Only Begotten Son was born of her according to the '
                                             'flesh and that she was crowned this day with '
                                             'surpassing glory, grant through her prayers, that, '
                                             'saved by the mystery of your redemption, we may '
                                             'merit to be exalted by you on high. Through our Lord '
                                             'Jesus Christ, your Son, who lives and reigns with '
                                             'you in the unity of the Holy Spirit, one God, for '
                                             'ever and ever.',
                                  'prayer_offerings': 'Receive, we pray, O Lord, the sacrifice of '
                                                      'conciliation and praise, which we celebrate '
                                                      'on the Assumption of the holy Mother of '
                                                      'God, that it may lead us to your pardon and '
                                                      'confirm us in perpetual thanksgiving. '
                                                      'Through Christ our Lord.',
                                  'communion': 'Blessed is the womb of the Virgin Mary, which bore '
                                               'the Son of the eternal Father.',
                                  'prayer_after': 'Having partaken of this heavenly table, we '
                                                  'beseech your mercy, Lord our God, that we, who '
                                                  'honor the Assumption of the Mother of God, may '
                                                  'be freed from every threat of harm. Through '
                                                  'Christ our Lord.'}},
 'christmas_vigil': {'prayers': {'entrance': 'Today you will know that the Lord will come, and he '
                                             'will save us, and in the morning you will see his '
                                             'glory.',
                                 'collect': 'O God, who gladden us year by year as we wait in hope '
                                            'for our redemption, grant that, just as we joyfully '
                                            'welcome your Only Begotten Son as our Redeemer, we '
                                            'may also merit to face him confidently when he comes '
                                            'again as our Judge. Who lives and reigns with you in '
                                            'the unity of the Holy Spirit, one God, for ever and '
                                            'ever.',
                                 'prayer_offerings': 'As we look forward, O Lord, to the coming '
                                                     'festivities, may we serve you all the more '
                                                     'eagerly for knowing that in them you make '
                                                     'manifest the beginnings of our redemption. '
                                                     'Through Christ our Lord.',
                                 'communion': 'The glory of the Lord will be revealed, and all '
                                              'flesh will see the salvation of our God.',
                                 'prayer_after': 'Grant, O Lord, we pray, that we may draw new '
                                                 'vigor from celebrating the Nativity of your Only '
                                                 'Begotten Son, by whose heavenly mystery we '
                                                 'receive both food and drink. Who lives and '
                                                 'reigns for ever and ever.'}},
 'epiphany_vigil': {'prayers': {'entrance': 'Arise, Jerusalem, and look to the East and see your '
                                            'children gathered from the rising to the setting of '
                                            'the sun.',
                                'collect': 'May the splendor of your majesty, O Lord, we pray, '
                                           'shed its light upon our hearts, that we may pass '
                                           'through the shadows of this world and reach the '
                                           'brightness of our eternal home. Through our Lord Jesus '
                                           'Christ, your Son, who lives and reigns with you in the '
                                           'unity of the Holy Spirit, one God, for ever and ever.',
                                'prayer_offerings': 'Accept we pray, O Lord, our offerings, in '
                                                    'honor of the appearing of your Only Begotten '
                                                    'Son and the first fruits of the nations, that '
                                                    'to you praise may be rendered and eternal '
                                                    'salvation be ours. Through Christ our Lord.',
                                'communion': 'The brightness of God illumined the holy city '
                                             'Jerusalem, and the nations will walk by its light.',
                                'prayer_after': 'Renewed by sacred nourishment, we implore your '
                                                'mercy, O Lord, that the star of your justice may '
                                                'shine always bright in our minds and that our '
                                                'true treasure may ever consist in our confession '
                                                'of you. Through Christ our Lord.'}},
 'ascension_vigil': {'prayers': {'entrance': 'You kingdoms of the earth, sing to God; praise the '
                                             'Lord, who ascends above the highest heavens; his '
                                             'majesty and might are in the skies, alleluia.',
                                 'collect': 'O God, whose Son today ascended to the heavens as the '
                                            'Apostles looked on, grant, we pray, that, in '
                                            'accordance with his promise, we may be worthy for him '
                                            'to live with us always on earth, and we with him in '
                                            'heaven. Who lives and reigns with you in the unity of '
                                            'the Holy Spirit, one God, for ever and ever.',
                                 'prayer_offerings': 'O God, whose Only Begotten Son, our High '
                                                     'Priest, is seated ever-living at your right '
                                                     'hand to intercede for us, grant that we may '
                                                     'approach with confidence the throne of grace '
                                                     'and there obtain your mercy. Through Christ '
                                                     'our Lord.',
                                 'communion': 'Christ, offering a single sacrifice for sins, is '
                                              'seated for ever at God’s right hand, alleluia.',
                                 'prayer_after': 'May the gifts we have received from your altar, '
                                                 'Lord, kindle in our hearts a longing for the '
                                                 'heavenly homeland and cause us to press forward, '
                                                 'following in the Savior’s footsteps, to the '
                                                 'place where for our sake he entered before us. '
                                                 'Who lives and reigns for ever and ever.'}},
 'pentecost_vigil': {'prayers': {'entrance': 'The love of God has been poured into our hearts '
                                             'through the Spirit of God dwelling within us, '
                                             'alleluia.',
                                 'collect': 'Almighty ever-living God, who willed the Paschal '
                                            'Mystery to be encompassed as a sign in fifty days, '
                                            'grant that from out of the scattered nations the '
                                            'confusion of many tongues may be gathered by heavenly '
                                            'grace into one great confession of your name. Through '
                                            'our Lord Jesus Christ, your Son, who lives and reigns '
                                            'with you in the unity of the Holy Spirit, one God, '
                                            'for ever and ever.',
                                 'prayer_offerings': 'Pour out upon these gifts the blessing of '
                                                     'your Spirit, we pray, O Lord, so that '
                                                     'through them your Church may be imbued with '
                                                     'such love that the truth of your saving '
                                                     'mystery may shine forth for the whole world. '
                                                     'Through Christ our Lord.',
                                 'communion': 'On the last day of the festival, Jesus stood and '
                                              'cried out: If anyone is thirsty, let him come to me '
                                              'and drink, alleluia.',
                                 'prayer_after': 'May these gifts we have consumed benefit us, O '
                                                 'Lord, that we may always be aflame with the same '
                                                 'Spirit, whom you wondrously poured out on your '
                                                 'Apostles. Through Christ our Lord.'}}}
apply_missal_parts(SPECIAL_LITURGIES, 'EN', MISSAL_SPECIAL_TEXTS)
