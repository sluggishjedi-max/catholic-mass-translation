# Edit this country's special Masses here, then run tools/build-special-liturgies.py.
from common import country_profile

SPECIAL_LITURGIES = country_profile('INTL')
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

LATIN_MISSAL_SPECIAL_TEXTS = {'palm_sunday': {'rites': {'palm_form': '<Processio; introitus sollemnis; introitus simplex.>',
                           'palm_antiphon': '◎ Hosánna fílio David: benedíctus qui venit in nómine '
                                            'Dómini. Rex Israël: Hosánna in excélsis.',
                           'palm_intro': 'Tunc sacerdos et fideles signant se, dum sacerdos dicit: '
                                         'In nómine\n'
                                         'Patris, et Fílii, et Spíritus Sancti. Postea populum de '
                                         'more salutat;\n'
                                         'ac fit brevis monitio, qua fideles ad celebrationem '
                                         'huius diei actuose\n'
                                         'et conscie participandam invitantur, his vel similibus '
                                         'verbis:\n'
                                         'Fratres caríssimi,\n'
                                         'postquam iam ab inítio Quadragésimæ corda nostra\n'
                                         'pæniténtia et opéribus caritátis præparávimus,\n'
                                         'hodiérna die congregámur,\n'
                                         'ut cum tota Ecclésia præludámus\n'
                                         'paschále Dómini nostri mystérium,\n'
                                         'eius nempe passiónem atque resurrectiónem,\n'
                                         'ad quod impléndum\n'
                                         'ipse ingréssus est civitátem suam Ierúsalem.\n'
                                         'Quare cum omni fide et devotióne memóriam agéntes\n'
                                         'huius salutíferi ingréssus, sequámur Dóminum,\n'
                                         'ut, per grátiam consórtes effécti crucis,\n'
                                         'partem habeámus resurrectiónis et vitæ.',
                           'palm_blessing': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'},
                                                         'B': {'KR': '제2양식', 'EN': 'Form 2'}},
                                             'variants': {'A': {'lines': [{'sp': '',
                                                                           'text': 'Post '
                                                                                   'monitionem, '
                                                                                   'sacerdos dicit '
                                                                                   'unam ex '
                                                                                   'sequentibus '
                                                                                   'orationibus,'},
                                                                          {'sp': '',
                                                                           'text': 'manibus '
                                                                                   'extensis.'},
                                                                          {'sp': '',
                                                                           'text': 'Orémus.'},
                                                                          {'sp': '',
                                                                           'text': 'Omnípotens '
                                                                                   'sempitérne '
                                                                                   'Deus,'},
                                                                          {'sp': '',
                                                                           'text': 'hos pálmites '
                                                                                   'tua '
                                                                                   'benedictióne c '
                                                                                   'sanctífica,'},
                                                                          {'sp': '',
                                                                           'text': 'ut nos, qui '
                                                                                   'Christum Regem '
                                                                                   'exsultándo '
                                                                                   'proséquimur,'},
                                                                          {'sp': '',
                                                                           'text': 'per ipsum '
                                                                                   'valeámus ad '
                                                                                   'ætérnam '
                                                                                   'Ierúsalem '
                                                                                   'perveníre.'},
                                                                          {'sp': '',
                                                                           'text': 'Qui vivit et '
                                                                                   'regnat in sǽ '
                                                                                   'cula '
                                                                                   'sæculórum.'},
                                                                          {'sp': '◎',
                                                                           'text': 'Amen.'}]},
                                                          'B': {'lines': [{'sp': '',
                                                                           'text': 'Auge fidem in '
                                                                                   'te sperántium, '
                                                                                   'Deus,'},
                                                                          {'sp': '',
                                                                           'text': 'et súpplicum '
                                                                                   'preces '
                                                                                   'cleménter '
                                                                                   'exáudi,'},
                                                                          {'sp': '',
                                                                           'text': 'ut, qui hódie '
                                                                                   'Christo '
                                                                                   'triumphánti '
                                                                                   'pálmites '
                                                                                   'exhibémus,'},
                                                                          {'sp': '',
                                                                           'text': 'in ipso '
                                                                                   'fructus tibi '
                                                                                   'bonórum óperum '
                                                                                   'afferámus.'},
                                                                          {'sp': '',
                                                                           'text': 'Qui vivit et '
                                                                                   'regnat in sǽ '
                                                                                   'cula '
                                                                                   'sæculórum.'},
                                                                          {'sp': '◎',
                                                                           'text': 'Amen.'},
                                                                          {'sp': '',
                                                                           'text': 'Et aspergit '
                                                                                   'ramos aqua '
                                                                                   'benedicta, '
                                                                                   'nihil '
                                                                                   'dicens.'}]}}},
                           'palm_procession': 'Post Evangelium, haberi potest brevis homilia. Ad '
                                              'inchoandam\n'
                                              'autem processionem, fieri potest a sacerdote vel a '
                                              'diacono vel a\n'
                                              'ministro laico monitio, his vel similibus verbis '
                                              'expressa:\n'
                                              'Imitémur, fratres caríssimi, turbas acclamántes '
                                              'Iesum,\n'
                                              'et procedámus in pace.\n'
                                              'Vel:\n'
                                              '9. Et incipit, more solito, processio ad ecclesiam, '
                                              'ubi celebrabitur\n'
                                              'Missa. Præcedit, si thus adhibetur, thuriferarius '
                                              'cum thuribulo\n'
                                              'fumigante, deinde acolythus vel alius minister '
                                              'deferens crucem, ramis\n'
                                              'palmarum ornatam iuxta locorum consuetudines, '
                                              'medius inter\n'
                                              'duos ministros cum candelis accensis. Sequuntur '
                                              'diaconus, librum\n'
                                              'Evangeliorum deferens, sacerdos cum ministris, et, '
                                              'post eos, fideles\n'
                                              'omnes, ramos gestantes.\n'
                                              'Progrediente processione, cantantur a schola et '
                                              'populo cantus\n'
                                              'sequentes, vel alii cantus apti in honorem Christi '
                                              'Regis.\n'
                                              'Antiphona 1\n'
                                              'Púeri Hebræórum, portántes ramos olivárum,\n'
                                              'obviavérunt Dómino, clamántes et dicéntes:\n'
                                              'Hosánna in excélsis.\n'
                                              'Quæ pro opportunitate repetitur inter strophas '
                                              'huius psalmi.\n'
                                              'Psalmus 23\n'
                                              'Dómini est terra et plenitúdo eius, *\n'
                                              'orbis terrárum et qui hábitant in eo.\n'
                                              'Quia ipse super mária fundávit eum *\n'
                                              'et super flúmina firmávit eum.\n'
                                              '(Repetitur antiphona)\n'
                                              'Quis ascéndet in montem Dómini, *\n'
                                              'aut quis stabit in loco sancto eius?\n'
                                              'Innocens mánibus et mundo corde, ,\n'
                                              'qui non levávit ad vana ánimam suam, *\n'
                                              'nec iurávit in dolum.\n'
                                              '(Repetitur antiphona)\n'
                                              'Hic accípiet benedictiónem a Dómino *\n'
                                              'et iustificatiónem a Deo salutári suo.\n'
                                              'Hæc est generátio quæréntium eum, *\n'
                                              'quæréntium fáciem Dei Iacob.\n'
                                              '(Repetitur antiphona)\n'
                                              'Attóllite, portæ, cápita vestra, ,\n'
                                              'et elevámini, portæ æternáles, *\n'
                                              'et introíbit rex glóriæ.\n'
                                              'Quis est iste rex glóriæ? *\n'
                                              'Dóminus fortis et potens,\n'
                                              'Dóminus potens in prœ´ lio.\n'
                                              '(Repetitur antiphona)\n'
                                              'Attóllite, portæ, cápita vestra, ,\n'
                                              'et elevámini, portæ æternáles, *\n'
                                              'et introíbit rex glóriæ.\n'
                                              'Quis est iste rex glóriæ? *\n'
                                              'Dóminus virtútum ipse est rex glóriæ.\n'
                                              '(Repetitur antiphona)\n'
                                              'Antiphona 2\n'
                                              'Púeri Hebræórum vestiménta prosternébant in via,\n'
                                              'et clamábant dicéntes: Hosánna fílio David;\n'
                                              'benedíctus, qui venit in nómine Dómini.\n'
                                              'Quæ pro opportunitate repetitur inter strophas '
                                              'huius psalmi.\n'
                                              'Psalmus 46\n'
                                              'Omnes gentes, pláudite mánibus, *\n'
                                              'iubiláte Deo in voce exsultatiónis,\n'
                                              'quóniam Dóminus Altíssimus, terríbilis, *\n'
                                              'rex magnus super omnem terram.\n'
                                              '(Repetitur antiphona)\n'
                                              'Subiécit pópulos nobis, *\n'
                                              'et gentes sub pédibus nostris.\n'
                                              'Elégit nobis hereditátem nostram, *\n'
                                              'glóriam Iacob, quem diléxit.\n'
                                              'Ascéndit Deus in iúbilo, *\n'
                                              'et Dóminus in voce tubæ.\n'
                                              '(Repetitur antiphona)\n'
                                              'Psállite Deo, psállite; *\n'
                                              'psállite regi nostro, psállite.\n'
                                              'Quóniam rex omnis terræ Deus, *\n'
                                              'psállite sapiénter.\n'
                                              '(Repetitur antiphona)\n'
                                              'Regnávit Deus super gentes, *\n'
                                              'Deus sedet super sedem sanctam suam.\n'
                                              'Príncipes populórum congregáti sunt\n'
                                              'cum pópulo Dei Abraham, ,\n'
                                              'quóniam Dei sunt scuta terræ: *\n'
                                              'veheménter elevátus est.\n'
                                              '(Repetitur antiphona)\n'
                                              'Hymnus ad Christum Regem\n'
                                              'Chorus:\n'
                                              'Glória, laus et honor tibi sit, rex Christe '
                                              'redémptor,\n'
                                              'cui pueríle decus prompsit Hosánna pium.\n'
                                              'Omnes repetunt: Glória, laus...\n'
                                              'Chorus:\n'
                                              'Israel es tu rex, Dávidis et ínclita proles,\n'
                                              'nómine qui in Dómini, rex benedícte, venis.\n'
                                              'Omnes repetunt: Glória, laus...\n'
                                              'Chorus:\n'
                                              'Cœtus in excélsis te laudat cǽ licus omnis,\n'
                                              'et mortális homo, et cuncta creáta simul.\n'
                                              'Omnes repetunt: Glória, laus...\n'
                                              'Chorus:\n'
                                              'Plebs Hebrǽ a tibi cum palmis óbvia venit;\n'
                                              'cum prece, voto, hymnis, ádsumus ecce tibi.\n'
                                              'Omnes repetunt: Glória, laus...\n'
                                              'Chorus:\n'
                                              'Hi tibi passúro solvébant múnia laudis;\n'
                                              'nos tibi regnánti pángimus ecce melos.\n'
                                              'Omnes repetunt: Glória, laus...\n'
                                              'Chorus:\n'
                                              'Hi placuére tibi, pláceat devótio nostra:\n'
                                              'rex bone, rex clemens, cui bona cuncta placent.\n'
                                              'Omnes repetunt: Glória, laus...\n'
                                              '10. Intrante processione in ecclesiam, cantatur '
                                              'sequens responsorium,\n'
                                              'vel alius cantus, qui loquatur de ingressu Domini.\n'
                                              'R. Ingrediénte Dómino in sanctam civitátem, '
                                              'Hebræórum\n'
                                              'púeri, resurrectiónem vitæ pronuntiántes, * Cum '
                                              'ramis palmárum:\n'
                                              'Hosánna, clamábant, in excélsis.\n'
                                              'V. Cum audísset pópulus, quod Iesus veníret '
                                              'Hierosólymam,\n'
                                              'exiérunt óbviam ei. * Cum ramis.',
                           'palm_gospel': {'byCycle': {'A': {'lines': [{'sp': '',
                                                                        'text': '+ Léctio sancti '
                                                                                'Evangélii '
                                                                                'secúndum Matthǽ '
                                                                                'um 21, 1-11'},
                                                                       {'sp': '',
                                                                        'text': '1 Cum '
                                                                                'appropinquássent '
                                                                                'Hierosólymis'},
                                                                       {'sp': '',
                                                                        'text': 'et veníssent '
                                                                                'Béthphage, ad '
                                                                                'montem Olivéti,'},
                                                                       {'sp': '',
                                                                        'text': 'tunc Iesus misit '
                                                                                'duos discípulos 2 '
                                                                                'dicens eis:'},
                                                                       {'sp': '',
                                                                        'text': '“ Ite in '
                                                                                'castéllum, quod '
                                                                                'contra vos est,'},
                                                                       {'sp': '',
                                                                        'text': 'et statim '
                                                                                'inveniétis ásinam '
                                                                                'alligátam'},
                                                                       {'sp': '',
                                                                        'text': 'et pullum cum '
                                                                                'ea;'},
                                                                       {'sp': '',
                                                                        'text': 'sólvite et '
                                                                                'addúcite mihi.'},
                                                                       {'sp': '',
                                                                        'text': '3 Et si quis '
                                                                                'vobis áliquid '
                                                                                'díxerit,'},
                                                                       {'sp': '',
                                                                        'text': 'dícite: “Dóminus '
                                                                                'eos necessários '
                                                                                'habet”,'},
                                                                       {'sp': '',
                                                                        'text': 'et conféstim '
                                                                                'dimíttet eos ”.'},
                                                                       {'sp': '',
                                                                        'text': '4 Hoc autem '
                                                                                'factum est,'},
                                                                       {'sp': '',
                                                                        'text': 'ut implerétur, '
                                                                                'quod dictum est '
                                                                                'per prophétam '
                                                                                'dicéntem:'},
                                                                       {'sp': '',
                                                                        'text': '5 “ Dícite fíliæ '
                                                                                'Sion:'},
                                                                       {'sp': '',
                                                                        'text': 'Ecce Rex tuus '
                                                                                'venit tibi,'},
                                                                       {'sp': '',
                                                                        'text': 'mansuétus et '
                                                                                'sedens super '
                                                                                'ásinam'},
                                                                       {'sp': '',
                                                                        'text': 'et super pullum '
                                                                                'fílium subiugális '
                                                                                '”.'},
                                                                       {'sp': '',
                                                                        'text': '6 Eúntes autem '
                                                                                'discípuli '
                                                                                'fecérunt, sicut '
                                                                                'præcépit illis '
                                                                                'Iesus,'},
                                                                       {'sp': '',
                                                                        'text': '7 et adduxérunt '
                                                                                'ásinam et '
                                                                                'pullum,'},
                                                                       {'sp': '',
                                                                        'text': 'et imposuérunt '
                                                                                'super eis '
                                                                                'vestiménta sua,'},
                                                                       {'sp': '',
                                                                        'text': 'et sedit super '
                                                                                'ea.'},
                                                                       {'sp': '',
                                                                        'text': '8 Plúrima autem '
                                                                                'turba stravérunt '
                                                                                'vestiménta sua in '
                                                                                'via;'},
                                                                       {'sp': '',
                                                                        'text': 'álii autem '
                                                                                'cædébant ramos de '
                                                                                'arbóribus'},
                                                                       {'sp': '',
                                                                        'text': 'et sternébant in '
                                                                                'via.'},
                                                                       {'sp': '',
                                                                        'text': '9 Turbæ autem, '
                                                                                'quæ præcedébant '
                                                                                'eum et quæ '
                                                                                'sequebántur,'},
                                                                       {'sp': '',
                                                                        'text': 'clamábant '
                                                                                'dicéntes:'},
                                                                       {'sp': '',
                                                                        'text': '“ Hosánna fílio '
                                                                                'David!'},
                                                                       {'sp': '',
                                                                        'text': 'Benedíctus, qui '
                                                                                'venit in nómine '
                                                                                'Dómini!'},
                                                                       {'sp': '',
                                                                        'text': 'Hosánna in '
                                                                                'altíssimis! ”.'},
                                                                       {'sp': '',
                                                                        'text': '10 Et cum '
                                                                                'intrásset '
                                                                                'Hierosólymam,'},
                                                                       {'sp': '',
                                                                        'text': 'commóta est '
                                                                                'univérsa cívitas '
                                                                                'dicens:'},
                                                                       {'sp': '',
                                                                        'text': '“ Quis est hic? '
                                                                                '”.'},
                                                                       {'sp': '',
                                                                        'text': '11 Turbæ autem '
                                                                                'dicébant:'},
                                                                       {'sp': '',
                                                                        'text': '“ Hic est Iesus '
                                                                                'prophéta a '
                                                                                'Názareth Galilǽ æ '
                                                                                '”.'},
                                                                       {'sp': '',
                                                                        'text': 'Verbum Dómini.'}]},
                                                       'B': {'lines': [{'sp': '',
                                                                        'text': '+ Léctio sancti '
                                                                                'Evangélii '
                                                                                'secúndum Marcum '
                                                                                '11, 1-10'},
                                                                       {'sp': '',
                                                                        'text': '1 Cum '
                                                                                'appropinquárent '
                                                                                'Hierosólymæ,'},
                                                                       {'sp': '',
                                                                        'text': 'Béthphage et '
                                                                                'Bethániæ ad '
                                                                                'montem Olivárum,'},
                                                                       {'sp': '',
                                                                        'text': 'mittit Iesus duos '
                                                                                'ex discípulis '
                                                                                'suis 2 et ait '
                                                                                'illis:'},
                                                                       {'sp': '',
                                                                        'text': '“ Ite in '
                                                                                'castéllum, quod '
                                                                                'est contra vos,'},
                                                                       {'sp': '',
                                                                        'text': 'et statim '
                                                                                'introeúntes illud '
                                                                                'inveniétis pullum '
                                                                                'ligátum,'},
                                                                       {'sp': '',
                                                                        'text': 'super quem nemo '
                                                                                'adhuc hóminum '
                                                                                'sedit;'},
                                                                       {'sp': '',
                                                                        'text': 'sólvite illum et '
                                                                                'addúcite.'},
                                                                       {'sp': '',
                                                                        'text': '3 Et si quis '
                                                                                'vobis díxerit: '
                                                                                '“Quid fácitis '
                                                                                'hoc?”,'},
                                                                       {'sp': '',
                                                                        'text': 'dícite: “Dómino '
                                                                                'necessárius est,'},
                                                                       {'sp': '',
                                                                        'text': 'et contínuo illum '
                                                                                'remíttet íterum '
                                                                                'huc” ”.'},
                                                                       {'sp': '',
                                                                        'text': '4 Et abeúntes'},
                                                                       {'sp': '',
                                                                        'text': 'invenérunt pullum '
                                                                                'ligátum ante '
                                                                                'iánuam foris in '
                                                                                'bívio'},
                                                                       {'sp': '',
                                                                        'text': 'et solvunt eum.'},
                                                                       {'sp': '',
                                                                        'text': '5 Et quidam de '
                                                                                'illic stántibus '
                                                                                'dicébant illis:'},
                                                                       {'sp': '',
                                                                        'text': '“ Quid fácitis '
                                                                                'solvéntes pullum? '
                                                                                '”.'},
                                                                       {'sp': '',
                                                                        'text': '6 Qui dixérunt '
                                                                                'eis, sicut '
                                                                                'díxerat Iesus;'},
                                                                       {'sp': '',
                                                                        'text': 'et dimisérunt '
                                                                                'eis.'},
                                                                       {'sp': '',
                                                                        'text': '7 Et ducunt '
                                                                                'pullum ad Iesum'},
                                                                       {'sp': '',
                                                                        'text': 'et impónunt illi '
                                                                                'vestiménta sua;'},
                                                                       {'sp': '',
                                                                        'text': 'et sedit super '
                                                                                'eum.'},
                                                                       {'sp': '',
                                                                        'text': '8 Et multi '
                                                                                'vestiménta sua '
                                                                                'stravérunt in '
                                                                                'via,'},
                                                                       {'sp': '',
                                                                        'text': 'álii autem '
                                                                                'frondes, quas '
                                                                                'excíderant in '
                                                                                'agris.'},
                                                                       {'sp': '',
                                                                        'text': '9 Et qui præíbant '
                                                                                'et qui '
                                                                                'sequebántur, '
                                                                                'clamábant:'},
                                                                       {'sp': '',
                                                                        'text': '“ Hosánna! '
                                                                                'Benedíctus, qui '
                                                                                'venit in nómine '
                                                                                'Dómini!'},
                                                                       {'sp': '',
                                                                        'text': '10 Benedíctum, '
                                                                                'quod venit regnum '
                                                                                'patris nostri '
                                                                                'David!'},
                                                                       {'sp': '',
                                                                        'text': 'Hosánna in '
                                                                                'excélsis! ”.'},
                                                                       {'sp': '',
                                                                        'text': 'Verbum Dómini.'},
                                                                       {'sp': '', 'text': 'Vel:'},
                                                                       {'sp': '',
                                                                        'text': 'c Léctio sancti '
                                                                                'Evangélii '
                                                                                'secúndum Ioánnem '
                                                                                '12, 12-16'},
                                                                       {'sp': '',
                                                                        'text': 'In illo témpore:'},
                                                                       {'sp': '',
                                                                        'text': '12 Turba multa, '
                                                                                'quæ vénerat ad '
                                                                                'diem festum,'},
                                                                       {'sp': '',
                                                                        'text': 'cum audíssent '
                                                                                'quia venit Iesus '
                                                                                'Hierosólymam,'},
                                                                       {'sp': '',
                                                                        'text': '13 accepérunt '
                                                                                'ramos palmárum'},
                                                                       {'sp': '',
                                                                        'text': 'et processérunt '
                                                                                'óbviam ei et '
                                                                                'clamábant:'},
                                                                       {'sp': '',
                                                                        'text': '“ Hosánna!'},
                                                                       {'sp': '',
                                                                        'text': 'Benedíctus, qui '
                                                                                'venit in nómine '
                                                                                'Dómini,'},
                                                                       {'sp': '',
                                                                        'text': 'et rex Israel! '
                                                                                '”.'},
                                                                       {'sp': '',
                                                                        'text': '14 Invénit autem '
                                                                                'Iesus aséllum'},
                                                                       {'sp': '',
                                                                        'text': 'et sedit super '
                                                                                'eum, sicut '
                                                                                'scriptum est:'},
                                                                       {'sp': '',
                                                                        'text': '15 “ Noli timére, '
                                                                                'fília Sion.'},
                                                                       {'sp': '',
                                                                        'text': 'Ecce rex tuus '
                                                                                'venit sedens '
                                                                                'super pullum '
                                                                                'ásinæ ”.'},
                                                                       {'sp': '',
                                                                        'text': '16 Hæc non '
                                                                                'cognovérunt '
                                                                                'discípuli eius '
                                                                                'primum,'},
                                                                       {'sp': '',
                                                                        'text': 'sed quando '
                                                                                'glorificátus est '
                                                                                'Iesus,'},
                                                                       {'sp': '',
                                                                        'text': 'tunc recordáti '
                                                                                'sunt quia hæc '
                                                                                'erant scripta de '
                                                                                'eo,'},
                                                                       {'sp': '',
                                                                        'text': 'et hæc fecérunt '
                                                                                'ei.'},
                                                                       {'sp': '',
                                                                        'text': 'Verbum Dómini.'}]},
                                                       'C': {'lines': [{'sp': '',
                                                                        'text': '+ Léctio sancti '
                                                                                'Evangélii '
                                                                                'secúndum Lucam '
                                                                                '19, 28-40'},
                                                                       {'sp': '',
                                                                        'text': 'In illo témpore:'},
                                                                       {'sp': '',
                                                                        'text': '28 Præcedébat '
                                                                                'Iesus ascéndens '
                                                                                'Hierosólymam.'},
                                                                       {'sp': '',
                                                                        'text': '29 Et factum est '
                                                                                'cum '
                                                                                'appropinquásset'},
                                                                       {'sp': '',
                                                                        'text': 'ad Béthphage et '
                                                                                'Bethániam,'},
                                                                       {'sp': '',
                                                                        'text': 'ad montem, qui '
                                                                                'vocátur Olivéti,'},
                                                                       {'sp': '',
                                                                        'text': 'misit duos '
                                                                                'discípulos suos '
                                                                                '30 dicens:'},
                                                                       {'sp': '',
                                                                        'text': '“ Ite in '
                                                                                'castéllum, quod '
                                                                                'contra est,'},
                                                                       {'sp': '',
                                                                        'text': 'in quod '
                                                                                'introeúntes '
                                                                                'inveniétis pullum '
                                                                                'ásinæ alligátum,'},
                                                                       {'sp': '',
                                                                        'text': 'cui nemo umquam '
                                                                                'hóminum sedit;'},
                                                                       {'sp': '',
                                                                        'text': 'sólvite illum, et '
                                                                                'addúcite.'},
                                                                       {'sp': '',
                                                                        'text': '31 Et si quis vos '
                                                                                'interrogáverit: '
                                                                                '“Quare '
                                                                                'sólvitis?”,'},
                                                                       {'sp': '',
                                                                        'text': 'sic dicétis: '
                                                                                '“Dóminus eum '
                                                                                'necessárium '
                                                                                'habet” ”.'},
                                                                       {'sp': '',
                                                                        'text': '32 Abiérunt '
                                                                                'autem, qui missi '
                                                                                'erant,'},
                                                                       {'sp': '',
                                                                        'text': 'et invenérunt, '
                                                                                'sicut dixit '
                                                                                'illis.'},
                                                                       {'sp': '',
                                                                        'text': '33 Solvéntibus '
                                                                                'autem illis '
                                                                                'pullum,'},
                                                                       {'sp': '',
                                                                        'text': 'dixérunt dómini '
                                                                                'eius ad illos: “ '
                                                                                'Quid sólvitis '
                                                                                'pullum? ”.'},
                                                                       {'sp': '',
                                                                        'text': '34 At illi '
                                                                                'dixérunt: “ '
                                                                                'Dóminus eum '
                                                                                'necessárium habet '
                                                                                '”.'},
                                                                       {'sp': '',
                                                                        'text': '35 Et duxérunt '
                                                                                'illum ad Iesum;'},
                                                                       {'sp': '',
                                                                        'text': 'et iactántes '
                                                                                'vestiménta sua '
                                                                                'supra pullum'},
                                                                       {'sp': '',
                                                                        'text': 'imposuérunt '
                                                                                'Iesum.'},
                                                                       {'sp': '',
                                                                        'text': '36 Eúnte autem '
                                                                                'illo,'},
                                                                       {'sp': '',
                                                                        'text': 'substernébant '
                                                                                'vestiménta sua in '
                                                                                'via.'},
                                                                       {'sp': '',
                                                                        'text': '37 Et cum '
                                                                                'appropinquáret '
                                                                                'iam ad descénsum '
                                                                                'montis Olivéti,'},
                                                                       {'sp': '',
                                                                        'text': 'cœpérunt omnis '
                                                                                'multitúdo '
                                                                                'discipulórum'},
                                                                       {'sp': '',
                                                                        'text': 'gaudéntes laudáre '
                                                                                'Deum voce magna'},
                                                                       {'sp': '',
                                                                        'text': 'super ómnibus, '
                                                                                'quas víderant, '
                                                                                'virtútibus,'},
                                                                       {'sp': '',
                                                                        'text': '38 dicéntes:'},
                                                                       {'sp': '',
                                                                        'text': '“ Benedíctus, qui '
                                                                                'venit rex in '
                                                                                'nómine Dómini!'},
                                                                       {'sp': '',
                                                                        'text': 'Pax in cælo et '
                                                                                'glória in '
                                                                                'excélsis! ”.'},
                                                                       {'sp': '',
                                                                        'text': '39 Et quidam '
                                                                                'pharisæórum de '
                                                                                'turbis dixérunt '
                                                                                'ad illum:'},
                                                                       {'sp': '',
                                                                        'text': '“ Magíster, '
                                                                                'íncrepa '
                                                                                'discípulos tuos! '
                                                                                '”.'},
                                                                       {'sp': '',
                                                                        'text': '40 Et respóndens '
                                                                                'dixit:'},
                                                                       {'sp': '',
                                                                        'text': '“ Dico vobis:'},
                                                                       {'sp': '',
                                                                        'text': 'Si hi tacúerint,'},
                                                                       {'sp': '',
                                                                        'text': 'lápides '
                                                                                'clamábunt! ”.'},
                                                                       {'sp': '',
                                                                        'text': 'Verbum '
                                                                                'Dómini.'}]}}}},
                 'prayers': {'entrance': 'Ante sex dies sollémnis Paschæ,\n'
                                         'quando venit Dóminus in civitátem Ierúsalem,\n'
                                         'occurrérunt ei púeri:\n'
                                         'et in mánibus portábant ramos palmárum\n'
                                         'et clamábant voce magna, dicéntes:\n'
                                         '* Hosánna in excélsis:\n'
                                         'Benedíctus, qui venísti in multitúdine misericórdiæ '
                                         'tuæ.\n'
                                         'Attóllite, portæ, cápita vestra,\n'
                                         'et elevámini, portæ æternáles,\n'
                                         'et introíbit rex glóriæ.\n'
                                         'Quis est iste rex glóriæ?\n'
                                         'Dóminus virtútum ipse est rex glóriæ.\n'
                                         '* Hosánna in excélsis:\n'
                                         'Benedíctus, qui venísti in multitúdine misericórdiæ tuæ.',
                             'collect': 'Omnípotens sempitérne Deus,\n'
                                        'qui humáno géneri, ad imitándum humilitátis exémplum,\n'
                                        'Salvatórem nostrum carnem súmere,\n'
                                        'et crucem subíre fecísti,\n'
                                        'concéde propítius,\n'
                                        'ut et patiéntiæ ipsíus habére documénta\n'
                                        'et resurrectiónis consórtia mereámur.\n'
                                        'Qui tecum.',
                             'prayer_offerings': 'Per Unigéniti tui passiónem\n'
                                                 'placátio tua nobis, Dómine, sit propínqua,\n'
                                                 'quam, etsi nostris opéribus non merémur,\n'
                                                 'interveniénte sacrifício singulári,\n'
                                                 'tua percipiámus miseratióne prævénti.\n'
                                                 'Per Christum.',
                             'communion': 'Pater, si non potest hic calix transíre,\n'
                                          'nisi bibam illum, fiat volúntas tua.',
                             'prayer_after': 'Sacro múnere satiáti,\n'
                                             'súpplices te, Dómine, deprecámur,\n'
                                             'ut, qui fecísti nos\n'
                                             'morte Fílii tui speráre quod crédimus,\n'
                                             'fácias nos, eódem resurgénte,\n'
                                             'perveníre quo téndimus.\n'
                                             'Per Christum.'}},
 'holy_thursday': {'rites': {'thursday_intro': '<Missa in Cena Domini celebratur horis '
                                               'vespertinis, tempore\n'
                                               'm a g i s o p p o r t u n o c u m p l e n a p a r '
                                               't i c i p a t i o n e t o t i u s c o m m u n i t '
                                               'a t i s\n'
                                               'l o c a l i s , o m n i b u s s a c e r d o t i b '
                                               'u s e t m i n i s t r i s o f f i c i u m s u u m '
                                               'i m p l e n -\n'
                                               't i b u s .\n'
                                               '2. Concelebrare valent omnes sacerdotes etsi hac '
                                               'die Missam\n'
                                               'chrismatis iam concelebraverint, vel si, pro '
                                               'christifidelium bono,\n'
                                               'alteram Missam celebrare debent.\n'
                                               '3. Ubi vero ratio pastoralis id postulet, loci '
                                               'Ordinarius alteram\n'
                                               'Missam in ecclesiis et oratoriis permittere '
                                               'poterit, horis vespertinis\n'
                                               'celebrandam, et, in casu veræ necessitatis, etiam '
                                               'horis matutinis,\n'
                                               'sed tantummodo pro fidelibus qui nullo modo Missam '
                                               'vespertinam\n'
                                               'participare valent. Caveatur tamen ne huiusmodi '
                                               'celebrationes in\n'
                                               'bonum privatarum personarum vel parvorum cœtuum '
                                               'peculiarium\n'
                                               'fiant et ne præiudicio sint Missæ vespertinæ.\n'
                                               '4. Sacra Communio fidelibus distribui potest '
                                               'tantummodo infra\n'
                                               'Missam; infirmis vero deferri valet quacumque diei '
                                               'hora.\n'
                                               '5. Altare floribus ornetur ea moderatione, quæ '
                                               'indoli huius diei\n'
                                               'conveniat. Tabernaculum omnino vacuum sit; pro '
                                               'Communione\n'
                                               'vero cleri et populi hodie et crastina die '
                                               'sufficiens copia panis consecretur\n'
                                               'in eadem Missa.>',
                             'washing_feet': 'Completa homilia proceditur, ubi ratio pastoralis id '
                                             'suadeat,\n'
                                             'ad lotionem pedum.\n'
                                             '11. Personæ selectæ ex populo Dei deducuntur a '
                                             'ministris ad sedilia loco apto parata.\n'
                                             'Tunc sacerdos (deposita, si necesse sit, casula) '
                                             'accedit ad singulos,\n'
                                             'eisque fundit aquam super pedes et abstergit, '
                                             'adiuvantibus ministris.\n'
                                             '12. Interim cantantur aliquæ e sequentibus '
                                             'antiphonis, vel alii\n'
                                             'cantus apti.\n'
                                             'Antiphona 1 Cf. Io 13, 4.5.15\n'
                                             'Postquam surréxit Dóminus a cena,\n'
                                             'misit aquam in pelvim,\n'
                                             'et cœpit laváre pedes discipulórum:\n'
                                             'hoc exémplum relíquit eis.\n'
                                             'Antiphona 2 Cf. Io 13, 12.13.15\n'
                                             'Dóminus Iesus, postquam cenávit cum discípulis '
                                             'suis,\n'
                                             'lavit pedes eórum, et ait illis:\n'
                                             '“ Scitis quid fécerim vobis ego, Dóminus et '
                                             'Magíster?\n'
                                             'Exémplum dedi vobis, ut et vos ita faciátis ”.\n'
                                             'Antiphona 3 Io 13, 6.7.8\n'
                                             'Dómine, tu mihi lavas pedes? Respóndit Iesus et '
                                             'dixit ei:\n'
                                             'Si non lávero tibi pedes, non habébis partem mecum.\n'
                                             'V. Venit ergo ad Simónem Petrum, et dixit ei '
                                             'Petrus:\n'
                                             '— Dómine.\n'
                                             'V. Quod ego fácio, tu nescis modo: scies autem '
                                             'póstea.\n'
                                             '— Dómine.\n'
                                             'Antiphona 4 Cf. Io 13, 14\n'
                                             'Si ego, Dóminus et Magíster vester, lavi vobis '
                                             'pedes:\n'
                                             'quanto magis debétis alter alteríus laváre pedes?\n'
                                             'Antiphona 5 Io 13, 35\n'
                                             'In hoc cognóscent omnes, quia discípuli mei estis,\n'
                                             'si dilectiónem habuéritis ad ínvicem.\n'
                                             'V. Dixit Iesus discípulis suis.\n'
                                             '— In hoc.\n'
                                             'Antiphona 6 Io 13, 34\n'
                                             'Mandátum novum do vobis, ut diligátis ínvicem,\n'
                                             'sicut diléxi vos, dicit Dóminus.\n'
                                             'Antiphona 7 1 Cor 13, 13\n'
                                             'Máneant in vobis fides, spes, cáritas, tria hæc:\n'
                                             'maior autem horum est cáritas.\n'
                                             'V. Nunc autem manent fides, spes, cáritas, tria '
                                             'hæc:\n'
                                             'maior horum est cáritas.\n'
                                             '— Máneant.',
                             'thursday_offertory': 'Incipiente liturgia eucharistica, instrui '
                                                   'potest processio fidelium,\n'
                                                   'in qua cum pane et vino præsentari possunt '
                                                   'dona pro pauperibus.\n'
                                                   'Interim cantatur sequens, vel alius cantus '
                                                   'aptus.\n'
                                                   'Ant. Ubi cáritas est vera, Deus ibi est.\n'
                                                   'V. Congregávit nos in unum Christi amor.\n'
                                                   'V. Exsultémus et in ipso iucundémur.\n'
                                                   'V. Timeámus et amémus Deum vivum.\n'
                                                   'V. Et ex corde diligámus nos sincéro.\n'
                                                   'Ant. Ubi cáritas est vera, Deus ibi est.\n'
                                                   'V. Simul ergo cum in unum congregámur:\n'
                                                   'V. Ne nos mente dividámur, caveámus.\n'
                                                   'V. Cessent iúrgia malígna, cessent lites.\n'
                                                   'V. Et in médio nostri sit Christus Deus.\n'
                                                   'Ant. Ubi cáritas est vera, Deus ibi est.\n'
                                                   'V. Simul quoque cum beátis videámus\n'
                                                   'V. Gloriánter vultum tuum, Christe Deus:\n'
                                                   'V. Gáudium, quod est imménsum atque probum,\n'
                                                   'V. Sǽcula per infiníta sæculórum. Amen.',
                             'reposition': 'Oratione post Communionem dicta, sacerdos stans '
                                           'imponit et\n'
                                           'benedicit incensum in thuribulo et genuflexus ter '
                                           'incensat Ss.mum\n'
                                           'Sacramentum. Deinde, assumpto velo umerali albi '
                                           'coloris, surgit\n'
                                           'et accipit pyxidem et eam extremitatibus veli '
                                           'cooperit.\n'
                                           '38. Instruitur processio, qua defertur Ss.mum '
                                           'Sacramentum cum\n'
                                           'intorticiis et incenso per ecclesiam ad locum '
                                           'repositionis, paratum\n'
                                           'in aliqua ecclesiæ parte vel in aliquo sacello '
                                           'convenienter ornato.\n'
                                           'Præcedit minister laicus cum cruce medius inter alios '
                                           'duos cum\n'
                                           'cereis accensis. Sequuntur alii candelas accensas '
                                           'gestantes. Ante\n'
                                           'sacerdotem deferentem Ss.mum Sacramentum, procedit '
                                           'thuriferarius\n'
                                           'cum thuribulo fumigante. Interim cantatur hymnus '
                                           'Pange, lingua\n'
                                           '(exclusis duabus ultimis strophis), vel alius cantus '
                                           'eucharisticus.\n'
                                           '39. Cum processio pervenerit ad locum repositionis, '
                                           'sacerdos,\n'
                                           'adiuvante, si opus sit, diacono, deponit pyxidem in '
                                           'tabernaculo,\n'
                                           'cuius porta aperta manet. Deinde, thure imposito, '
                                           'genuflexus\n'
                                           'Ss.mum Sacramentum incensat, dum cantatur Tantum ergo '
                                           'sacraméntum\n'
                                           'vel alius cantus eucharisticus. Deinde diaconus vel '
                                           'ipse\n'
                                           'sacerdos Sacramentum in tabernaculo reponit et portam '
                                           'claudit.\n'
                                           '40. Post aliquod tempus adorationis in silentio, '
                                           'sacerdos et ministri,\n'
                                           'facta genuflexione, revertuntur in sacristiam.\n'
                                           '41. Tempore opportuno denudatur altare et auferuntur, '
                                           'si fieri\n'
                                           'potest, cruces ab ecclesia. Expedit ut cruces, quæ '
                                           'forte in ecclesia\n'
                                           'remanent, velentur.\n'
                                           '42. Hora vesperarum ab iis, qui Missæ in Cena Domini '
                                           'interfuerunt,\n'
                                           'non celebratur.\n'
                                           '43. Invitentur fideles, ut per congruum noctis tempus, '
                                           'secundum\n'
                                           'locorum et rerum adiuncta, adorationem peragant coram '
                                           'Ss.mo\n'
                                           'Sacramento asservato, ita tamen ut post mediam noctem '
                                           'hæc adoratio\n'
                                           'absque sollemnitate fiat.',
                             'thursday_end_form': '<Si in eadem ecclesia celebratio Passionis '
                                                  'Domini feria VI sequenti non fit, Missa '
                                                  'concluditur more solito.>'},
                   'prayers': {'entrance': 'Nos autem gloriári opórtet\n'
                                           'in cruce Dómini nostri Iesu Christi,\n'
                                           'in quo est salus, vita et resurréctio nostra,\n'
                                           'per quem salváti et liberáti sumus.',
                               'collect': 'Sacratíssimam, Deus, frequentántibus Cenam,\n'
                                          'in qua Unigénitus tuus, morti se traditúrus,\n'
                                          'novum in sǽcula sacrifícium\n'
                                          'dilectionísque suæ convívium Ecclésiæ commendávit,\n'
                                          'da nobis, quǽsumus, ut ex tanto mystério\n'
                                          'plenitúdinem caritátis hauriámus et vitæ.\n'
                                          'Per Dóminum.',
                               'prayer_offerings': 'Concéde nobis, quǽsumus, Dómine,\n'
                                                   'hæc digne frequentáre mystéria,\n'
                                                   'quia, quóties huius hóstiæ commemorátio '
                                                   'celebrátur,\n'
                                                   'opus nostræ redemptiónis exercétur.\n'
                                                   'Per Christum.',
                               'communion': 'Hoc Corpus, quod pro vobis tradétur:\n'
                                            'hic calix novi testaménti est in meo Sánguine,\n'
                                            'dicit Dóminus;\n'
                                            'hoc fácite, quotiescúmque súmitis,\n'
                                            'in meam commemoratiónem.',
                               'prayer_after': 'Concéde nobis, omnípotens Deus,\n'
                                               'ut, sicut Cena Fílii tui refícimur temporáli,\n'
                                               'ita satiári mereámur ætérna.\n'
                                               'Per Christum.'},
                   'eucharistEdits': {'LA': [{'form': '1',
                                              'section': 'form',
                                              'from': 'Communicántes, et memóriam venerántes,',
                                              'to': 'Communicántes, et diem sacratíssimum '
                                                    'celebrántes,\n'
                                                    'quo Dóminus noster Iesus Christus pro nobis '
                                                    'est tráditus,\n'
                                                    'sed et memóriam venerántes,'},
                                             {'form': '1',
                                              'section': 'form',
                                              'from': 'Qui, prídie quam paterétur,',
                                              'to': 'Qui, prídie quam pro nostra omniúmque salúte '
                                                    'paterétur,\n'
                                                    'hoc est hódie,'}]}},
 'good_friday': {'rites': {'friday_intro': '<Hac et sequenti die, Ecclesia, ex antiquissima '
                                           'traditione, sacramenta,\n'
                                           'præter Pænitentiæ et Infirmorum Unctionis, penitus '
                                           'non\n'
                                           'celebrat.\n'
                                           '2. Hac die sacra Communio fidelibus distribuitur unice '
                                           'inter celebrationem\n'
                                           'Passionis Domini; infirmis autem, qui hanc '
                                           'celebrationem\n'
                                           'participare nequeunt, quacumque diei hora deferri '
                                           'potest.\n'
                                           '3. Altare omnino nudum sit: sine cruce, sine '
                                           'candelabris, sine\n'
                                           't o b a l e i s .\n'
                                           'Celebratio Passionis Domini\n'
                                           '4. Horis postmeridianis huius feriæ, et quidem circa '
                                           'horam tertiam,\n'
                                           'nisi ex ratione pastorali tardior hora seligatur, fit '
                                           'celebratio\n'
                                           'Passionis Domini, constans ex tribus partibus, nempe '
                                           'ex liturgia\n'
                                           'verbi, adoratione Crucis et sacra Communione.\n'
                                           '5. Sacerdos et diaconus, si adest, vestibus coloris '
                                           'rubri sicut ad\n'
                                           'Missam induti, sub silentio ad altare accedunt et, '
                                           'facta reverentia\n'
                                           'altari, in faciem procumbunt, vel, pro opportunitate, '
                                           'in genua se\n'
                                           'prosternunt, et in silentio aliquamdiu orant. Omnes '
                                           'alii in genua\n'
                                           'se prosternunt.>',
                           'friday_opening': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'},
                                                          'B': {'KR': '제2양식', 'EN': 'Form 2'}},
                                              'variants': {'A': {'lines': [{'sp': '',
                                                                            'text': 'Deinde '
                                                                                    'sacerdos cum '
                                                                                    'ministris '
                                                                                    'vadit ad '
                                                                                    'sedem, ubi, '
                                                                                    'versus ad'},
                                                                           {'sp': '',
                                                                            'text': 'populum '
                                                                                    'stantem, '
                                                                                    'dicit, '
                                                                                    'extensis '
                                                                                    'manibus, unam '
                                                                                    'e '
                                                                                    'sequentibus'},
                                                                           {'sp': '',
                                                                            'text': 'orationibus, '
                                                                                    'omissa '
                                                                                    'invitatione '
                                                                                    'Orémus.'},
                                                                           {'sp': '',
                                                                            'text': 'Oratio'},
                                                                           {'sp': '',
                                                                            'text': 'Reminíscere '
                                                                                    'miseratiónum '
                                                                                    'tuárum, '
                                                                                    'Dómine,'},
                                                                           {'sp': '',
                                                                            'text': 'et fámulos '
                                                                                    'tuos ætérna '
                                                                                    'protectióne '
                                                                                    'sanctífica,'},
                                                                           {'sp': '',
                                                                            'text': 'pro quibus '
                                                                                    'Christus, '
                                                                                    'Fílius tuus,'},
                                                                           {'sp': '',
                                                                            'text': 'per suum '
                                                                                    'cruórem '
                                                                                    'instítuit '
                                                                                    'paschále '
                                                                                    'mystérium.'},
                                                                           {'sp': '',
                                                                            'text': 'Qui vivit et '
                                                                                    'regnat in '
                                                                                    'sǽcula '
                                                                                    'sæculórum.'},
                                                                           {'sp': '◎',
                                                                            'text': 'Amen.'}]},
                                                           'B': {'lines': [{'sp': '',
                                                                            'text': 'Deus, qui '
                                                                                    'peccáti '
                                                                                    'véteris '
                                                                                    'hereditáriam '
                                                                                    'mortem,'},
                                                                           {'sp': '',
                                                                            'text': 'in qua '
                                                                                    'posteritátis '
                                                                                    'genus omne '
                                                                                    'succésserat,'},
                                                                           {'sp': '',
                                                                            'text': 'Christi Fílii '
                                                                                    'tui, Dómini '
                                                                                    'nostri, '
                                                                                    'passióne '
                                                                                    'solvísti,'},
                                                                           {'sp': '',
                                                                            'text': 'da, ut '
                                                                                    'confórmes '
                                                                                    'eídem facti,'},
                                                                           {'sp': '',
                                                                            'text': 'sicut '
                                                                                    'imáginem '
                                                                                    'terréni '
                                                                                    'hóminis'},
                                                                           {'sp': '',
                                                                            'text': 'natúræ '
                                                                                    'necessitáte '
                                                                                    'portávimus,'},
                                                                           {'sp': '',
                                                                            'text': 'ita imáginem '
                                                                                    'cæléstis'},
                                                                           {'sp': '',
                                                                            'text': 'grátiæ '
                                                                                    'sanctificatióne '
                                                                                    'portémus.'},
                                                                           {'sp': '',
                                                                            'text': 'Per Christum '
                                                                                    'Dóminum '
                                                                                    'nostrum.'},
                                                                           {'sp': '◎',
                                                                            'text': 'Amen.'},
                                                                           {'sp': '',
                                                                            'text': 'Pars prima:'},
                                                                           {'sp': '',
                                                                            'text': 'Liturgia '
                                                                                    'verbi'}]}}},
                           'cross_showing': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'}},
                                             'variants': {'A': {'lines': [{'sp': '',
                                                                           'text': 'Diaconus cum '
                                                                                   'ministris vel '
                                                                                   'alius minister '
                                                                                   'idoneus adit '
                                                                                   'sacristiam,'},
                                                                          {'sp': '',
                                                                           'text': 'ex qua '
                                                                                   'processionaliter '
                                                                                   'affert Crucem, '
                                                                                   'velo violaceo '
                                                                                   'obtectam,'},
                                                                          {'sp': '',
                                                                           'text': 'per ecclesiam '
                                                                                   'ad medium '
                                                                                   'presbyterii, '
                                                                                   'comitantibus '
                                                                                   'duobus'},
                                                                          {'sp': '',
                                                                           'text': 'ministris cum '
                                                                                   'candelis '
                                                                                   'accensis.'},
                                                                          {'sp': '',
                                                                           'text': 'Sacerdos, '
                                                                                   'stans ante '
                                                                                   'altare versus '
                                                                                   'ad populum, '
                                                                                   'Crucem '
                                                                                   'accipit,'},
                                                                          {'sp': '',
                                                                           'text': 'in summitate '
                                                                                   'parum detegit '
                                                                                   'et elevat, '
                                                                                   'incipiens Ecce '
                                                                                   'lignum '
                                                                                   'Crucis,'},
                                                                          {'sp': '',
                                                                           'text': 'eum adiuvante '
                                                                                   'in cantu '
                                                                                   'diacono vel, '
                                                                                   'si casus fert, '
                                                                                   'schola. Omnes'},
                                                                          {'sp': '',
                                                                           'text': 'respondent: '
                                                                                   'Veníte, '
                                                                                   'adorémus. '
                                                                                   'Cantu expleto, '
                                                                                   'omnes in '
                                                                                   'genua'},
                                                                          {'sp': '',
                                                                           'text': 'se prosternunt '
                                                                                   'et parvo '
                                                                                   'momento in '
                                                                                   'silentio '
                                                                                   'adorant, '
                                                                                   'sacerdote'},
                                                                          {'sp': '',
                                                                           'text': 'stante et '
                                                                                   'Crucem '
                                                                                   'elevatam '
                                                                                   'tenente.'},
                                                                          {'sp': '',
                                                                           'text': 'Ecce lignum '
                                                                                   'Crucis,'},
                                                                          {'sp': '',
                                                                           'text': 'in quo salus '
                                                                                   'mundi '
                                                                                   'pepéndit.'},
                                                                          {'sp': '◎',
                                                                           'text': 'Vénite, '
                                                                                   'adorémus.'},
                                                                          {'sp': '',
                                                                           'text': 'Deinde '
                                                                                   'sacerdos '
                                                                                   'detegit '
                                                                                   'dextrum '
                                                                                   'brachium '
                                                                                   'Crucis et '
                                                                                   'iterum'},
                                                                          {'sp': '',
                                                                           'text': 'elevans Crucem '
                                                                                   'incipit Ecce '
                                                                                   'lignum, et fit '
                                                                                   'ut supra.'},
                                                                          {'sp': '',
                                                                           'text': 'Denique '
                                                                                   'detegit Crucem '
                                                                                   'totaliter et '
                                                                                   'elevans '
                                                                                   'incipit tertio '
                                                                                   'invitationem'},
                                                                          {'sp': '',
                                                                           'text': 'Ecce lignum, '
                                                                                   'et fit sicut '
                                                                                   'prima vice.'},
                                                                          {'sp': '',
                                                                           'text': 'Forma altera'},
                                                                          {'sp': '',
                                                                           'text': '16. Sacerdos, '
                                                                                   'vel diaconus, '
                                                                                   'cum ministris, '
                                                                                   'vel alius '
                                                                                   'minister '
                                                                                   'idoneus'},
                                                                          {'sp': '',
                                                                           'text': 'vadit ad '
                                                                                   'portam '
                                                                                   'ecclesiæ, ubi '
                                                                                   'accipit Crucem '
                                                                                   'non velatam,'},
                                                                          {'sp': '',
                                                                           'text': 'ministri vero '
                                                                                   'candelas '
                                                                                   'accensas, et '
                                                                                   'fit processio '
                                                                                   'per ecclesiam '
                                                                                   'ad'},
                                                                          {'sp': '',
                                                                           'text': 'presbyterium. '
                                                                                   'Prope ianuam, '
                                                                                   'in medio '
                                                                                   'ecclesiæ et '
                                                                                   'ante '
                                                                                   'ingressum'},
                                                                          {'sp': '',
                                                                           'text': 'presbyterii '
                                                                                   'qui portat '
                                                                                   'Crucem eam '
                                                                                   'elevat, '
                                                                                   'cantans Ecce '
                                                                                   'lignum,'},
                                                                          {'sp': '',
                                                                           'text': 'cui omnes '
                                                                                   'respondent: '
                                                                                   'Veníte, '
                                                                                   'adorémus, et '
                                                                                   'post '
                                                                                   'unamquamque'},
                                                                          {'sp': '',
                                                                           'text': 'responsionem '
                                                                                   'in genua se '
                                                                                   'prosternunt et '
                                                                                   'parvo momento '
                                                                                   'in silentio'},
                                                                          {'sp': '',
                                                                           'text': 'adorant, ut '
                                                                                   'supra.'},
                                                                          {'sp': '',
                                                                           'text': 'Adoratio '
                                                                                   'sanctæ Crucis'},
                                                                          {'sp': '',
                                                                           'text': '17. Deinde, '
                                                                                   'comitantibus '
                                                                                   'duobus '
                                                                                   'ministris cum '
                                                                                   'candelis '
                                                                                   'accensis,'},
                                                                          {'sp': '',
                                                                           'text': 'sacerdos, vel '
                                                                                   'diaconus '
                                                                                   'portat Crucem '
                                                                                   'ad ingressum '
                                                                                   'presbyterii '
                                                                                   'vel'},
                                                                          {'sp': '',
                                                                           'text': 'ad alium locum '
                                                                                   'aptum et ibi '
                                                                                   'deponit vel '
                                                                                   'ministris '
                                                                                   'sustentandam'},
                                                                          {'sp': '',
                                                                           'text': 'tradit, '
                                                                                   'candelis a '
                                                                                   'dextris et '
                                                                                   'sinistris '
                                                                                   'Crucis '
                                                                                   'depositis.'}]}}},
                           'cross_adoration': 'Ad adorationem Crucis, primus accedit solus '
                                              'sacerdos celebrans,\n'
                                              'casula et calceamentis, pro opportunitate, '
                                              'depositis. Deinde\n'
                                              'procedunt clerus, ministri laici et fideles, quasi '
                                              'processionaliter\n'
                                              'transeuntes, et reverentiam Cruci exhibentes per '
                                              'simplicem genuflexionem\n'
                                              'vel aliud signum aptum secundum usum regionis, v. '
                                              'gr.\n'
                                              'Crucem osculando.\n'
                                              '19. Unica tantum Crux adorationi præbeatur. Si '
                                              'propter populi\n'
                                              'concursum non omnes singulatim accedere possunt, '
                                              'sacerdos,\n'
                                              'postquam pars cleri et fidelium adorationem '
                                              'peregerit, Crucem sumit,\n'
                                              'et in medio ante altare consistens, paucis verbis '
                                              'populum ad\n'
                                              'sanctæ Crucis adorationem invitat et postea per '
                                              'breve tempus Crucem\n'
                                              'altius elevatam tenet, a fidelibus in silentio '
                                              'adorandam.\n'
                                              '20. Dum autem sanctæ Crucis adoratio peragitur '
                                              'cantantur antiphona\n'
                                              'Crucem tuam, Improperia, hymnus Crux fidélis, vel '
                                              'alii\n'
                                              'cantus congrui, sedentibus omnibus, qui adorationem '
                                              'peregerunt.\n'
                                              'Cantus in adoratione sanctæ Crucis peragendi\n'
                                              'Ant. Crucem tuam adorámus, Dómine,\n'
                                              'et sanctam resurrectiónem tuam laudámus et '
                                              'glorificámus:\n'
                                              'ecce enim propter lignum\n'
                                              'venit gáudium in univérso mundo.\n'
                                              'Cf. Ps 66, 2\n'
                                              'Deus misereátur nostri, et benedícat nobis:\n'
                                              'illúminet vultum suum super nos,\n'
                                              'et misereátur nostri.\n'
                                              'Et repetitur antiphona: Crucem tuam...\n'
                                              'Improperia\n'
                                              'Partes quæ ad singulos choros spectant, indicantur '
                                              'numeris 1\n'
                                              '(chorus primus), et 2 (chorus secundus); quæ autem '
                                              'ab utroque\n'
                                              'choro simul cantanda sunt, indicantur hoc modo: 1 '
                                              'et 2. Quidam\n'
                                              'versus etiam a duobus cantoribus cantari possunt.\n'
                                              'I\n'
                                              '1 et 2 Pópule meus, quid feci tibi?\n'
                                              'Aut in quo contristávi te? Respónde mihi!\n'
                                              '1 Quia edúxi te de terra Ægýpti:\n'
                                              'parásti Crucem Salvatóri tuo.\n'
                                              '1 Hágios o Theós.\n'
                                              '2 Sanctus Deus.\n'
                                              '1 Hágios Ischyrós.\n'
                                              '2 Sanctus Fortis.\n'
                                              '1 Hágios Athánatos, eléison himás.\n'
                                              '2 Sanctus Immortális, miserére nobis.\n'
                                              '1 et 2 Quia edúxi te per desértum quadragínta '
                                              'annis,\n'
                                              'et manna cibávi te,\n'
                                              'et introdúxi te in terram satis bonam:\n'
                                              'parásti Crucem Salvatóri tuo.\n'
                                              '1 Hágios o Theós.\n'
                                              '2 Sanctus Deus.\n'
                                              '1 Hágios Ischyrós.\n'
                                              '2 Sanctus Fortis.\n'
                                              '1 Hágios Athánatos, eléison himás.\n'
                                              '2 Sanctus Immortális, miserére nobis.\n'
                                              '1 et 2 Quid ultra débui fácere tibi, et non feci?\n'
                                              'Ego quidem plantávi te\n'
                                              'víneam eléctam meam speciosíssimam:\n'
                                              'et tu facta es mihi nimis amára:\n'
                                              'acéto namque sitim meam potásti,\n'
                                              'et láncea perforásti latus Salvatóri tuo.\n'
                                              '1 Hágios o Theós.\n'
                                              '2 Sanctus Deus.\n'
                                              '1 Hágios Ischyrós.\n'
                                              '2 Sanctus Fortis.\n'
                                              '1 Hágios Athánatos, eléison himás.\n'
                                              '2 Sanctus Immortális, miserére nobis.\n'
                                              'II\n'
                                              'Cantores:\n'
                                              'Ego propter te flagellávi Ægýptum\n'
                                              'cum primogénitis suis:\n'
                                              'et tu me flagellátum tradidísti.\n'
                                              '1 et 2 repetunt:\n'
                                              'Pópule meus, quid feci tibi?\n'
                                              'Aut in quo contristávi te? Respónde mihi!\n'
                                              'Cantores:\n'
                                              'Ego edúxi te de Ægýpto,\n'
                                              'demérso Pharaóne in Mare Rubrum:\n'
                                              'et tu me tradidísti princípibus sacerdótum.\n'
                                              '1 et 2 repetunt:\n'
                                              'Pópule meus...\n'
                                              'Cantores:\n'
                                              'Ego ante te apérui mare:\n'
                                              'et tu aperuísti láncea latus meum.\n'
                                              '1 et 2 repetunt:\n'
                                              'Pópule meus...\n'
                                              'Cantores:\n'
                                              'Ego ante te præívi in colúmna nubis:\n'
                                              'et tu me duxísti ad prætórium Piláti.\n'
                                              '1 et 2 repetunt:\n'
                                              'Pópule meus...\n'
                                              'Cantores:\n'
                                              'Ego te pavi manna per desértum:\n'
                                              'et tu me cecidísti álapis et flagéllis.\n'
                                              '1 et 2 repetunt:\n'
                                              'Pópule meus...\n'
                                              'Cantores:\n'
                                              'Ego te potávi aqua salútis de petra:\n'
                                              'et tu me potásti felle et acéto.\n'
                                              '1 et 2 repetunt:\n'
                                              'Pópule meus...\n'
                                              'Cantores:\n'
                                              'Ego propter te Chananæórum reges percússi:\n'
                                              'et tu percussísti arúndine caput meum.\n'
                                              '1 et 2 repetunt:\n'
                                              'Pópule meus...\n'
                                              'Cantores:\n'
                                              'Ego dedi tibi sceptrum regále:\n'
                                              'et tu dedísti cápiti meo spíneam corónam.\n'
                                              '1 et 2 repetunt:\n'
                                              'Pópule meus...\n'
                                              'Cantores:\n'
                                              'Ego te exaltávi magna virtúte:\n'
                                              'et tu me suspendísti in patíbulo Crucis.\n'
                                              '1 et 2 repetunt:\n'
                                              'Pópule meus...\n'
                                              'Hymnus\n'
                                              'Omnes:\n'
                                              'Crux fidélis, inter omnes arbor una nóbilis,\n'
                                              'Nulla talem silva profert, flore, fronde, gérmine!\n'
                                              'Dulce lignum dulci clavo dulce pondus sústinens!\n'
                                              'Cantores:\n'
                                              'Pange, lingua, gloriósi prœ´ lium certáminis,\n'
                                              'Et super crucis tropǽo dic triúmphum nóbilem,\n'
                                              'Quáliter Redémptor orbis immolátus vícerit.\n'
                                              'Omnes:\n'
                                              'Crux fidélis, inter omnes arbor una nóbilis,\n'
                                              'Nulla talem silva profert, flore, fronde, gérmine!\n'
                                              'Cantores:\n'
                                              'De paréntis protoplásti fraude factor cóndolens,\n'
                                              'Quando pomi noxiális morte morsu córruit,\n'
                                              'Ipse lignum tunc notávit, damna ligni ut sólveret.\n'
                                              'Omnes:\n'
                                              'Dulce lignum dulci clavo dulce pondus sústinens!\n'
                                              'Cantores:\n'
                                              'Hoc opus nostræ salútis ordo depopóscerat,\n'
                                              'Multifórmis perditóris arte ut artem fálleret,\n'
                                              'Et medélam ferret inde, hostis unde lǽserat.\n'
                                              'Omnes:\n'
                                              'Crux fidélis, inter omnes arbor una nóbilis,\n'
                                              'Nulla talem silva profert, flore, fronde, gérmine!\n'
                                              'Cantores:\n'
                                              'Quando venit ergo sacri plenitúdo témporis,\n'
                                              'Missus est ab arce Patris Natus, orbis cónditor,\n'
                                              'Atque ventre virgináli carne factus pródiit.\n'
                                              'Omnes:\n'
                                              'Dulce lignum dulci clavo dulce pondus sústinens!\n'
                                              'Cantores:\n'
                                              'Vagit infans inter arta cónditus præse´ pia,\n'
                                              'Membra pannis involúta Virgo Mater álligat,\n'
                                              'Et manus pedésque et crura stricta cingit fáscia.\n'
                                              'Omnes:\n'
                                              'Crux fidélis, inter omnes arbor una nóbilis,\n'
                                              'Nulla talem silva profert, flore, fronde, gérmine!\n'
                                              'Cantores:\n'
                                              'Lustra sex qui iam perácta tempus implens '
                                              'córporis,\n'
                                              'se volénte, natus ad hoc, passióni déditus,\n'
                                              'agnus in crucis levátur immolándus stípite.\n'
                                              'Omnes:\n'
                                              'Dulce lignum dulci clavo dulce pondus sústinens!\n'
                                              'Cantores:\n'
                                              'En acétum, fel, arúndo, sputa, clavi, láncea;\n'
                                              'Mite corpus perforátur, sanguis, unda prófluit;\n'
                                              'Terra, pontus, astra, mundus quo lavántur flúmine!\n'
                                              'Omnes:\n'
                                              'Crux fidélis, inter omnes arbor una nóbilis,\n'
                                              'Nulla talem silva profert, flore, fronde, gérmine!\n'
                                              'Cantores:\n'
                                              'Flecte ramos, arbor alta, tensa laxa víscera,\n'
                                              'Et rigor lentéscat ille, quem dedit natívitas,\n'
                                              'Ut supérni membra Regis miti tendas stípite.\n'
                                              'Omnes:\n'
                                              'Dulce lignum dulci clavo dulce pondus sústinens!\n'
                                              'Cantores:\n'
                                              'Sola digna tu fuísti ferre sæcli prétium\n'
                                              'Atque portum præparáre nauta mundo náufrago,\n'
                                              'Quem sacer cruor perúnxit fusus Agni córpore.\n'
                                              'Omnes:\n'
                                              'Crux fidélis, inter omnes arbor una nóbilis,\n'
                                              'Nulla talem silva profert, flore, fronde, gérmine!\n'
                                              'Conclusio numquam omittenda:\n'
                                              'Omnes:\n'
                                              'Æqua Patri Filióque, ínclito Paráclito,\n'
                                              'Sempitérna sit beátæ Trinitáti glória;\n'
                                              'cuius alma nos redémit atque servat grátia. Amen.\n'
                                              'Iuxta locorum condiciones aut populi traditiones et '
                                              'pro opportunitate\n'
                                              'pastorali, cantari potest Stabat Mater, secundum '
                                              'Graduale Romanum,\n'
                                              'vel alius cantus aptus in memoriam compassionis '
                                              'beatae\n'
                                              'Mariae Virginis.\n'
                                              '21. Adoratione expleta, Crux portatur a diacono vel '
                                              'ministro ad\n'
                                              'locum suum ad altare. Candelæ vero accensæ '
                                              'deponuntur circa vel\n'
                                              'supra altare vel prope Crucem.\n'
                                              'Pars tertia:\n'
                                              'Sacra Communio',
                           'friday_communion_intro': '<Super altare extenditur tobalea et ponitur '
                                                     'corporale et missale.\n'
                                                     'Interim diaconus vel, eo deficiente, ipse '
                                                     'sacerdos, velo umerali\n'
                                                     'assumpto, reportat Ss.mum Sacramentum e loco '
                                                     'repositionis, breviore\n'
                                                     'via, ad altare, dum omnes in silentio stant. '
                                                     'Duo ministri cum\n'
                                                     'candelis accensis comitantur Ss.mum '
                                                     'Sacramentum et deponunt\n'
                                                     'candelabra circa vel supra altare.\n'
                                                     'Cum diaconus, si adest, Ss.mum Sacramentum '
                                                     'super altare posuerit\n'
                                                     'et discooperuerit pyxidem, sacerdos accedit '
                                                     'ad altare et genuflectit.>',
                           'friday_people_prayer': 'Ad dimissionem diaconus vel, eo deficiente, '
                                                   'ipse sacerdos dicere\n'
                                                   'potest invitationem: Inclináte vos ad '
                                                   'benedictiónem.\n'
                                                   'Deinde sacerdos, stans versus ad populum, et '
                                                   'super illum manus\n'
                                                   'extendens, dicit hanc orationem super '
                                                   'populum:\n'
                                                   'Super pópulum tuum, quǽsumus, Dómine,\n'
                                                   'qui mortem Fílii tui in spe suæ resurrectiónis '
                                                   'recóluit,\n'
                                                   'benedíctio copiósa descéndat,\n'
                                                   'indulgéntia véniat, consolátio tribuátur,\n'
                                                   'fides sancta succréscat, redémptio sempitérna '
                                                   'firmétur.\n'
                                                   'Per Christum Dóminum nostrum.\n'
                                                   'R. Amen.',
                           'friday_departure': '<Et omnes, facta Cruci genuflexione, discedunt sub '
                                               'silentio.>',
                           'friday_intercession_1': 'Oratio dicitur in tono simplici vel, si '
                                                    'adhibentur invitationes\n'
                                                    'Flectámus génua — Leváte, in tono sollemni.\n'
                                                    'Orémus, dilectíssimi nobis, pro Ecclésia '
                                                    'sancta Dei,\n'
                                                    'ut eam Deus et Dóminus noster\n'
                                                    'pacificáre, adunáre et custodíre dignétur\n'
                                                    'toto orbe terrárum,\n'
                                                    'detque nobis, quiétam et tranquíllam vitam '
                                                    'degéntibus,\n'
                                                    'glorificáre Deum Patrem omnipoténtem.\n'
                                                    'Oratio in silentio. Deinde sacerdos:\n'
                                                    'Omnípotens sempitérne Deus,\n'
                                                    'qui glóriam tuam ómnibus in Christo géntibus '
                                                    'revelásti:\n'
                                                    'custódi ópera misericórdiæ tuæ,\n'
                                                    'ut Ecclésia tua, toto orbe diffúsa,\n'
                                                    'stábili fide in confessióne tui nóminis '
                                                    'persevéret.\n'
                                                    'Per Christum Dóminum nostrum.\n'
                                                    'R. Amen.',
                           'friday_intercession_2': 'Orémus et pro beatíssimo Papa nostro N.,\n'
                                                    'ut Deus et Dóminus noster,\n'
                                                    'qui elégit eum in órdine episcopátus,\n'
                                                    'salvum atque incólumem custódiat Ecclésiæ suæ '
                                                    'sanctæ,\n'
                                                    'ad regéndum pópulum sanctum Dei.\n'
                                                    'Oratio in silentio. Deinde sacerdos:\n'
                                                    'Omnípotens sempitérne Deus,\n'
                                                    'cuius iudício univérsa fundántur,\n'
                                                    'réspice propítius ad preces nostras,\n'
                                                    'et eléctum nobis Antístitem tua pietáte '
                                                    'consérva,\n'
                                                    'ut christiána plebs, quæ te gubernátur '
                                                    'auctóre,\n'
                                                    'sub ipso Pontífice, fídei suæ méritis '
                                                    'augeátur.\n'
                                                    'Per Christum Dóminum nostrum.\n'
                                                    'R. Amen.',
                           'friday_intercession_3': 'Orémus et pro Epíscopo nostro N., *\n'
                                                    'pro ómnibus Epíscopis, presbýteris, diáconis '
                                                    'Ecclésiæ,\n'
                                                    'et univérsa plebe fidélium.\n'
                                                    'Oratio in silentio. Deinde sacerdos:\n'
                                                    'Omnípotens sempitérne Deus,\n'
                                                    'cuius Spíritu totum corpus Ecclésiæ\n'
                                                    'sanctificátur et régitur,\n'
                                                    'exáudi nos pro minístris tuis supplicántes,\n'
                                                    'ut, grátiæ tuæ múnere, ab ómnibus tibi '
                                                    'fidéliter serviátur.\n'
                                                    'Per Christum Dóminum nostrum.\n'
                                                    'R. Amen.',
                           'friday_intercession_4': 'Orémus et pro catechúmenis (nostris),\n'
                                                    'ut Deus et Dóminus noster\n'
                                                    'adapériat aures præcordiórum ipsórum\n'
                                                    'ianuámque misericórdiæ,\n'
                                                    'ut, per lavácrum regeneratiónis\n'
                                                    'accépta remissióne ómnium peccatórum,\n'
                                                    'et ipsi inveniántur in Christo Iesu Dómino '
                                                    'nostro.\n'
                                                    'Oratio in silentio. Deinde sacerdos:\n'
                                                    'Omnípotens sempitérne Deus,\n'
                                                    'qui Ecclésiam tuam nova semper prole '
                                                    'fecúndas,\n'
                                                    'auge fidem et intelléctum catechúmenis '
                                                    '(nostris),\n'
                                                    'ut, renáti fonte baptísmatis,\n'
                                                    'adoptiónis tuæ fíliis aggregéntur.\n'
                                                    'Per Christum Dóminum nostrum.\n'
                                                    'R. Amen.',
                           'friday_intercession_5': 'Orémus et pro univérsis frátribus in Christum '
                                                    'credéntibus,\n'
                                                    'ut Deus et Dóminus noster eos, veritátem '
                                                    'faciéntes,\n'
                                                    'in una Ecclésia sua congregáre et custodíre '
                                                    'dignétur.\n'
                                                    'Oratio in silentio. Deinde sacerdos:\n'
                                                    'Omnípotens sempitérne Deus,\n'
                                                    'qui dispérsa cóngregas et congregáta '
                                                    'consérvas,\n'
                                                    'ad gregem Fílii tui placátus inténde,\n'
                                                    'ut, quos unum baptísma sacrávit,\n'
                                                    'eos et fídei iungat intégritas\n'
                                                    'et vínculum sóciet caritátis.\n'
                                                    'Per Christum Dóminum nostrum.\n'
                                                    'R. Amen.',
                           'friday_intercession_6': 'Orémus et pro Iudǽis,\n'
                                                    'ut, ad quos prius locútus est Dóminus Deus '
                                                    'noster,\n'
                                                    'eis tríbuat in sui nóminis amóre\n'
                                                    'et in sui fœ´ deris fidelitáte profícere.\n'
                                                    'Oratio in silentio. Deinde sacerdos:\n'
                                                    'Omnípotens sempitérne Deus,\n'
                                                    'qui promissiónes tuas Abrahæ eiúsque sémini '
                                                    'contulísti,\n'
                                                    'Ecclésiæ tuæ preces cleménter exáudi,\n'
                                                    'ut pópulus acquisitiónis prióris\n'
                                                    'ad redemptiónis mereátur plenitúdinem '
                                                    'perveníre.\n'
                                                    'Per Christum Dóminum nostrum.\n'
                                                    'R. Amen.',
                           'friday_intercession_7': 'Orémus et pro iis qui in Christum non '
                                                    'credunt,\n'
                                                    'ut, luce Sancti Spíritus illustráti,\n'
                                                    'viam salútis et ipsi váleant introíre.\n'
                                                    'Oratio in silentio. Deinde sacerdos:\n'
                                                    'Omnípotens sempitérne Deus,\n'
                                                    'fac ut qui Christum non confiténtur,\n'
                                                    'coram te sincéro corde ambulántes, invéniant '
                                                    'veritátem,\n'
                                                    'nosque, mútuo proficiéntes semper amóre\n'
                                                    'et ad tuæ vitæ mystérium plénius percipiéndum '
                                                    'sollícitos,\n'
                                                    'perfectióres éffice tuæ testes caritátis in '
                                                    'mundo.\n'
                                                    'Per Christum Dóminum nostrum.\n'
                                                    'R. Amen.',
                           'friday_intercession_8': 'Orémus et pro iis qui Deum non agnóscunt,\n'
                                                    'ut, quæ recta sunt sincéro corde sectántes,\n'
                                                    'ad ipsum Deum perveníre mereántur.\n'
                                                    'Oratio in silentio. Deinde sacerdos:\n'
                                                    'Omnípotens sempitérne Deus,\n'
                                                    'qui cunctos hómines condidísti,\n'
                                                    'ut te semper desiderándo quǽrerent\n'
                                                    'et inveniéndo quiéscerent,\n'
                                                    'præsta, quǽsumus,\n'
                                                    'ut inter nóxia quæque obstácula\n'
                                                    'omnes, tuæ signa pietátis\n'
                                                    'et in te credéntium testimónium\n'
                                                    'bonórum óperum percipiéntes,\n'
                                                    'te solum verum Deum nostríque géneris Patrem\n'
                                                    'gáudeant confitéri.\n'
                                                    'Per Christum Dóminum nostrum.\n'
                                                    'R. Amen.',
                           'friday_intercession_9': 'Orémus et pro ómnibus rempúblicam '
                                                    'moderántibus,\n'
                                                    'ut Deus et Dóminus noster\n'
                                                    'mentes et corda eórum secúndum voluntátem '
                                                    'suam dírigat\n'
                                                    'ad veram ómnium pacem et libertátem.\n'
                                                    'Oratio in silentio. Deinde sacerdos:\n'
                                                    'Omnípotens sempitérne Deus,\n'
                                                    'in cuius manu sunt hóminum corda et iura '
                                                    'populórum,\n'
                                                    'réspice benígnus ad eos, qui nos in potestáte '
                                                    'moderántur,\n'
                                                    'ut ubíque terrárum populórum prospéritas,\n'
                                                    'pacis secúritas et religiónis libértas,\n'
                                                    'te largiénte, consístant.\n'
                                                    'Per Christum Dóminum nostrum.\n'
                                                    'R. Amen.',
                           'friday_intercession_10': 'Orémus, dilectíssimi nobis, Deum Patrem '
                                                     'omnipoténtem,\n'
                                                     'ut cunctis mundo purget erróribus,\n'
                                                     'morbos áuferat, famem depéllat,\n'
                                                     'apériat cárceres, víncula solvat,\n'
                                                     'viatóribus securitátem, peregrinántibus '
                                                     'réditum,\n'
                                                     'infirmántibus sanitátem\n'
                                                     'atque moriéntibus salútem indúlgeat.\n'
                                                     'Oratio in silentio. Deinde sacerdos:\n'
                                                     'Omnípotens sempitérne Deus,\n'
                                                     'mæstórum consolátio, laborántium fortitúdo,\n'
                                                     'pervéniant ad te preces\n'
                                                     'de quacúmque tribulatióne clamántium,\n'
                                                     'ut omnes sibi in necessitátibus suis\n'
                                                     'misericórdiam tuam gáudeant affuísse.\n'
                                                     'Per Christum Dóminum nostrum.\n'
                                                     'R. Amen.\n'
                                                     'Pars secunda:\n'
                                                     'Adoratio sanctæ Crucis'},
                 'prayers': {'prayer_after': 'Omnípotenssempitérne Deus,\n'
                                             'qui nos Christi tui beáta morte et resurrectióne '
                                             'reparásti,\n'
                                             'consérva in nobis opus misericórdiæ tuæ,\n'
                                             'ut huius mystérii participatióne\n'
                                             'perpétua devotióne vivámus.\n'
                                             'Per Christum Dóminum nostrum.\n'
                                             'R. Amen.'}},
 'holy_saturday': {'rites': {'holy_saturday_rest': '<1. Sabbato sancto Ecclesia ad sepulcrum '
                                                   'Domini immoratur, passionem\n'
                                                   'eius et mortem, necnon ad inferos descensum '
                                                   'meditans et\n'
                                                   'eius resurrectionem exspectans, in oratione et '
                                                   'ieiunio.\n'
                                                   '2. A sacrificio Missæ, sacra mensa denudata, '
                                                   'Ecclesia abstinet,\n'
                                                   'usque dum, post sollemnem Vigiliam seu '
                                                   'nocturnam resurrectionis\n'
                                                   'exspectationem, locus detur gaudiis '
                                                   'paschalibus, quorum abundantia\n'
                                                   'in quinquaginta dies exundat.\n'
                                                   '3. Sacra Communio hac die dari potest '
                                                   'solummodo ad modum\n'
                                                   'viatici.>'}},
 'easter_vigil': {'rites': {'vigil_intro': '<Ex antiquissima traditione ista nox est observabilis '
                                           'Domini\n'
                                           '(Ex 12, 42), ita ut fideles iuxta monitum Evangelii '
                                           '(Lc 12, 35-37)\n'
                                           'lucernas ardentes in manibus gestantes, similes sint '
                                           'hominibus\n'
                                           'exspectantibus Dominum, quando revertatur, ut, cum '
                                           'venerit, vigilantes\n'
                                           'eos inveniat et discumbere faciat ad mensam suam.\n'
                                           '2. Vigilia huius noctis, quæ est summa ac nobilissima '
                                           'omnium\n'
                                           'sollemnitatum, unica sit pro unaquaque ecclesia. Ita '
                                           'autem ordinatur,\n'
                                           'ut post lucernarium et præconium paschale (quod est '
                                           'pars\n'
                                           'prima huius Vigiliæ), sancta Ecclesia meditetur '
                                           'mirabilia, quæ fecit\n'
                                           'Dominus Deus populo suo ab initio, confidens verbo '
                                           'eius et\n'
                                           'promisso (pars secunda seu liturgia verbi), usque dum, '
                                           'appropinquante\n'
                                           'die, cum novis membris in Baptismate renatis (pars '
                                           'tertia),\n'
                                           'vocatur ad mensam, quam Dominus populo suo præparavit, '
                                           'memoriale\n'
                                           'mortis et resurrectionis suæ, donec veniat (pars '
                                           'quarta).\n'
                                           '3. Tota celebratio Vigiliæ paschalis peragi debet '
                                           'noctu, ita ut vel\n'
                                           'non incipiatur ante initium noctis, vel finiatur ante '
                                           'diluculum diei\n'
                                           'dominicæ.\n'
                                           '4. Missa Vigiliæ, etsi ante mediam noctem celebratur, '
                                           'est Missa\n'
                                           'paschalis dominicæ Resurrectionis.\n'
                                           '5. Qui participat Missam noctis, iterum communicare '
                                           'potest in\n'
                                           'Missa in die. Qui celebrat vel concelebrat Missam '
                                           'noctis, potest\n'
                                           'iterum Missam in die celebrare aut concelebrare.\n'
                                           'Vigilia paschalis locum tenet Officii lectionis.\n'
                                           '6. Sacerdoti assistat de more diaconus. Eo vero '
                                           'absente, munera\n'
                                           'sui ordinis a sacerdote celebrante vel concelebrante '
                                           'assumuntur,\n'
                                           'exceptis iis quæ infra indicantur.\n'
                                           'Sacerdos et diaconus induuntur, sicut ad Missam, '
                                           'paramentis\n'
                                           'albi coloris.\n'
                                           '7. Parentur candelæ pro omnibus participantibus '
                                           'Vigiliam. Luminaria\n'
                                           'vero ecclesiæ exstinguuntur.\n'
                                           'Pars prima:\n'
                                           'Sollemne initium Vigiliæ seu Lucernarium\n'
                                           'Benedictio ignis et præparatio cerei>',
                            'fire_blessing': 'Sacerdos et fideles signant se dum ipse dicit: In '
                                             'nómine Patris,\n'
                                             'et Fílii, et Spíritus Sancti, ac dein populum '
                                             'congregatum de more\n'
                                             'salutat eumque breviter admonet de vigilia nocturna, '
                                             'his vel similibus\n'
                                             'verbis:\n'
                                             'Fratres caríssimi, hac sacratíssima nocte,\n'
                                             'in qua Dóminus noster Iesus Christus\n'
                                             'de morte transívit ad vitam,\n'
                                             'Ecclésia invítat fílios dispérsos per orbem '
                                             'terrárum,\n'
                                             'ut ad vigilándum et orándum convéniant.\n'
                                             'Si ita memóriam egérimus Páschatis Dómini,\n'
                                             'audiéntes verbum et celebrántes mystéria eius,\n'
                                             'spem habébimus participándi triúmphum eius de morte\n'
                                             'et vivéndi cum ipso in Deo.\n'
                                             '10. Deinde sacerdos benedicit ignem, dicens, manibus '
                                             'extensis:\n'
                                             'Orémus.\n'
                                             'Deus, qui per Fílium tuum\n'
                                             'claritátis tuæ ignem fidélibus contulísti,\n'
                                             'novum hunc ignem + sanctífica,\n'
                                             'et concéde nobis,\n'
                                             'ita per hæc festa paschália\n'
                                             'cæléstibus desidériis inflammári,\n'
                                             'ut ad perpétuæ claritátis\n'
                                             'puris méntibus valeámus festa pertíngere.\n'
                                             'Per Christum Dóminum nostrum.\n'
                                             'R. Amen.',
                            'paschal_candle': 'Novo igne benedicto, unus ministrorum portat cereum '
                                              'paschalem\n'
                                              'ante sacerdotem, qui cum stilo incidit crucem in '
                                              'ipsum\n'
                                              'cereum. Deinde facit super eam litteram græcam '
                                              'Alpha, subtus vero\n'
                                              'litteram Omega, et inter brachia crucis quattuor '
                                              'numeros exprimentes\n'
                                              'annum currentem, interim dicens:\n'
                                              '1. Christus heri et hódie (incidit hastam '
                                              'erectam);\n'
                                              '2. Princípium et Finis (incidit hastam '
                                              'transversam);\n'
                                              '3. Alpha (incidit supra hastam erectam litteram '
                                              'Alpha);\n'
                                              '4. et Omega (incidit subtus hastam erectam litteram '
                                              'Omega).\n'
                                              '5. Ipsíus sunt témpora (incidit primum numerum anni '
                                              'currentis\n'
                                              'in angulo superiore sinistro crucis);\n'
                                              '6. et sǽcula (incidit secundum numerum anni '
                                              'currentis in angulo\n'
                                              'superiore dextro crucis).\n'
                                              '7. Ipsi glória et impérium (incidit tertium numerum '
                                              'anni currentis\n'
                                              'in angulo inferiore sinistro crucis);\n'
                                              '8. per univérsa æternitátis sǽcula. Amen (incidit '
                                              'quartum numerum\n'
                                              'anni currentis in angulo inferiore dextro crucis).\n'
                                              'A\n'
                                              'W\n'
                                              '12. Incisione crucis et aliorum signorum peracta, '
                                              'sacerdos infigere\n'
                                              'potest in cereum quinque grana incensi, in modum '
                                              'crucis, interim\n'
                                              'dicens:\n'
                                              '1. Per sua sancta vúlnera\n'
                                              '2. gloriósa\n'
                                              '3. custódiat\n'
                                              '4. et consérvet nos\n'
                                              '5. Christus Dóminus. Amen.',
                            'light_procession': 'De novo igne sacerdos accendit cereum paschalem, '
                                                'dicens:\n'
                                                'Lumen Christi glorióse resurgéntis\n'
                                                'díssipet ténebras cordis et mentis.\n'
                                                'Quoad elementa quæ præcedunt, Conferentiæ '
                                                'Episcoporum\n'
                                                'possunt etiam alias formas statuere, populorum '
                                                'ingenio magis accommodatas.\n'
                                                'Processio\n'
                                                '15. Cereo accenso, unus ex ministris assumit '
                                                'carbones ardentes de\n'
                                                'igne ac ponit eos in thuribulum et sacerdos, moro '
                                                'solito, incensum\n'
                                                'imponit. Diaconus vel, eo absente, alius minister '
                                                'idoneus, accipit a\n'
                                                'ministro cereum paschalem et ordinatur processio. '
                                                'Thuriferarius cum\n'
                                                'thuribulo fumiganti incedit ante diaconum vel '
                                                'alium ministrum, qui\n'
                                                'cereum paschalem defert. Sequuntur sacerdos cum '
                                                'ministris et populus,\n'
                                                'qui omnes candelas extinctas manu gestant.\n'
                                                'Ad portam ecclesiæ, diaconus, stans et elevans '
                                                'cereum cantat:\n'
                                                'Lumen Christi.\n'
                                                'Et omnes respondent:\n'
                                                'Deo grátias.\n'
                                                'Sacerdos accendit candelam suam de igne cerei '
                                                'paschalis.\n'
                                                '16. Deinde diaconus procedit ad medium ecclesiæ '
                                                'et, stans et\n'
                                                'elevans cereum, iterum cantat:\n'
                                                'Lumen Christi.\n'
                                                'Et omnes respondent:\n'
                                                'Deo grátias.\n'
                                                'Omnes candelam accendunt de igne cerei paschalis '
                                                'et procedunt.\n'
                                                '17. Diaconus, cum venerit ante altare, stans '
                                                'versus populum, elevat\n'
                                                'cereum et tertio cantat:\n'
                                                'Lumen Christi.\n'
                                                'Et omnes respondent:\n'
                                                'Deo grátias.\n'
                                                'Deinde diaconus cereum paschalem deponit super '
                                                'candelabrum\n'
                                                'magnum iuxta ambonem paratum, vel in medio '
                                                'presbyterii.\n'
                                                'Et accenduntur lampades per ecclesiam, exceptis '
                                                'cereis altaris.\n'
                                                'Præconium paschale',
                            'vigil_word_intro': 'In hac Vigilia, matre omnium Vigiliarum, '
                                                'proponuntur novem\n'
                                                'lectiones, scilicet septem e Vetere Testamento et '
                                                'duæ e Novo\n'
                                                '(Epistola et Evangelium), quae omnes legendæ sunt '
                                                'ubicumque fieri\n'
                                                'potest, ut indoles Vigiliæ, quæ diuturnitatem '
                                                'exigit, servetur.\n'
                                                '21. Attamen ubi graviores circumstantiæ '
                                                'pastorales id postulent, minui\n'
                                                'potest numerus lectionum e Vetere Testamento; '
                                                'semper tamen\n'
                                                'attendatur lectionem verbi Dei esse partem '
                                                'fundamentalem huius\n'
                                                'Vigiliæ paschalis. Legantur saltem tres lectiones '
                                                'e Vetere Testamento\n'
                                                'desumptæ, et quidem ex Lege et Prophetis, et '
                                                'canantur respectivi\n'
                                                'Psalmi responsorii. Numquam autem omittatur '
                                                'lectio cap.\n'
                                                '14 Exodi cum suo cantico.\n'
                                                '22. Depositis candelis, omnes sedent. Antequam '
                                                'incipiantur lectiones,\n'
                                                'sacerdos populum admonet, his vel similibus '
                                                'verbis:\n'
                                                'Vigíliam sollémniter ingréssi, fratres '
                                                'caríssimi,\n'
                                                'quiéto corde nunc verbum Dei audiámus.\n'
                                                'Meditémur, quómodo Deus pópulum suum\n'
                                                'elápsis tempóribus salvum fécerit,\n'
                                                'et novíssime nobis Fílium suum míserit '
                                                'Redemptórem.\n'
                                                'Orémus, ut Deus noster hoc paschále salvatiónis '
                                                'opus\n'
                                                'ad plenam redemptiónem perfíciat.\n'
                                                '23. Deinde sequuntur lectiones. Lector ad ambonem '
                                                'pergit et\n'
                                                'lectionem profert. Postea psalmista seu cantor '
                                                'psalmum dicit, populo\n'
                                                'responsum proferente. Omnibus deinde surgentibus, '
                                                'sacerdos\n'
                                                'dicit Orémus, et, postquam omnes per aliquod '
                                                'tempus in silentio\n'
                                                'oraverint, dicit orationem lectioni respondentem. '
                                                'Loco psalmi responsorii\n'
                                                'servari potest spatium sacri silentii, omissa hoc '
                                                'in casu\n'
                                                'pausa post Orémus.\n'
                                                'Orationes post lectiones',
                            'baptism_intro': 'Post homiliam proceditur ad liturgiam baptismalem. '
                                             'Sacerdos\n'
                                             'cum ministris vadit ad fontem baptismalem, si hic '
                                             'est in conspectu\n'
                                             'fidelium. Secus ponitur vas cum aqua in '
                                             'presbyterio.\n'
                                             '38. Vocantur, si adsunt, catechumeni, qui '
                                             'præsentantur a patrinis,\n'
                                             'vel, si sunt parvuli, portantur a parentibus et '
                                             'patrinis, in faciem\n'
                                             'ecclesiæ congregatæ.\n'
                                             '39. Tunc, si processio ad baptisterium vel ad fontem '
                                             'habenda sit,\n'
                                             'ea statim ordinatur. Præcedit minister cum cereo '
                                             'paschali, eumque\n'
                                             'sequuntur baptizandi cum patrinis, deinde ministri, '
                                             'diaconus\n'
                                             'et sacerdos. Durante processione, canuntur litaniæ '
                                             '(n. 43). Expletis\n'
                                             'litaniis, sacerdos facit monitionem (n. 40).\n'
                                             '40. Si autem liturgia baptismalis in presbyterio '
                                             'peragitur, sacerdos\n'
                                             'statim monitionem introductoriam facit, his vel '
                                             'similibus verbis:\n'
                                             'Si adsunt baptizandi:\n'
                                             'Précibus nostris, caríssimi,\n'
                                             'fratrum nostrórum beátam spem unánimes adiuvémus,\n'
                                             'ut Pater omnípotens ad fontem regeneratiónis eúntes\n'
                                             'omni misericórdiæ suæ auxílio prosequátur.\n'
                                             'Si benedicendus est fons, sed non adsunt '
                                             'baptizandi:\n'
                                             'Dei Patris omnipoténtis grátiam, caríssimi,\n'
                                             'super hunc fontem súpplices invocémus,\n'
                                             'ut qui ex eo renascéntur\n'
                                             'adoptiónis fíliis in Christo aggregéntur.',
                            'litany': 'Et canuntur litaniæ a duobus cantoribus, omnibus stantibus\n'
                                      '(propter tempus paschale) et respondentibus.\n'
                                      'Si autem habenda sit longior processio ad baptisterium, '
                                      'litaniæ\n'
                                      'cantantur durante processione; quo in casu baptizandi '
                                      'vocantur\n'
                                      'ante processionem, et fit processio præcedente cereo '
                                      'paschali,\n'
                                      'quem sequuntur catechumeni cum patrinis, deinde ministri, '
                                      'diaconus\n'
                                      'et sacerdos. Monitio autem fiat ante benedictionem aquæ.\n'
                                      '42. Si non adsunt baptizandi, neque benedicendus est fons, '
                                      'omissis\n'
                                      'litaniis, statim proceditur ad benedictionem aquæ (n. 54).\n'
                                      '43. In litaniis addi possunt aliqua nomina Sanctorum, '
                                      'præsertim vero\n'
                                      'Titularis ecclesiæ vel Patronorum loci et eorum qui sunt '
                                      'baptizandi.\n'
                                      'Kýrie, eléison. Kýrie, eléison.\n'
                                      'Christe, eléison. Christe, eléison.\n'
                                      'Kýrie, eléison. Kýrie, eléison.\n'
                                      'Sancta María, Mater Dei, ora pro nobis.\n'
                                      'Sancte Míchael, ora pro nobis.\n'
                                      'Sancti Angeli Dei, oráte pro nobis.\n'
                                      'Sancte Ioánnes Baptísta, ora pro nobis.\n'
                                      'Sancte Ioseph, ora pro nobis.\n'
                                      'Sancti Petre et Paule, oráte pro nobis.\n'
                                      'Sancte Andréa, ora pro nobis.\n'
                                      'Sancte Ioánnes, ora pro nobis.\n'
                                      'Sancta María Magdaléna, ora pro nobis.\n'
                                      'Sancte Stéphane, ora pro nobis.\n'
                                      'Sancte Ignáti Antiochéne, ora pro nobis.\n'
                                      'Sancte Laurénti, ora pro nobis.\n'
                                      'Sanctæ Perpétua et Felícitas, oráte pro nobis.\n'
                                      'Sancta Agnes, ora pro nobis.\n'
                                      'Sancte Gregóri, ora pro nobis.\n'
                                      'Sancte Augustíne, ora pro nobis.\n'
                                      'Sancte Athanási, ora pro nobis.\n'
                                      'Sancte Basíli, ora pro nobis.\n'
                                      'Sancte Martíne, ora pro nobis.\n'
                                      'Sancte Benedícte, ora pro nobis.\n'
                                      'Sancti Francísce et Domínice, oráte pro nobis.\n'
                                      'Sancte Francísce (Xavier), ora pro nobis.\n'
                                      'Sancte Ioánnes María (Vianney), ora pro nobis.\n'
                                      'Sancta Catharína (Senénsis), ora pro nobis.\n'
                                      'Sancta Terésia a Iesu, ora pro nobis.\n'
                                      'Omnes Sancti et Sanctæ Dei, oráte pro nobis.\n'
                                      'Propítius esto, líbera nos, Dómine.\n'
                                      'Ab omni malo, líbera nos, Dómine.\n'
                                      'Ab omni peccáto, líbera nos, Dómine.\n'
                                      'A morte perpétua, líbera nos, Dómine.\n'
                                      'Per incarnatiónem tuam, líbera nos, Dómine.\n'
                                      'Per mortem et resurrectiónem tuam, líbera nos, Dómine.\n'
                                      'Per effusiónem Spíritus Sancti, líbera nos, Dómine.\n'
                                      'Peccatóres, te rogámus, audi nos.\n'
                                      'Si adsunt baptizandi\n'
                                      'Ut hos eléctos per grátiam\n'
                                      'Baptísmi regeneráre dignéris, te rogámus, audi nos.\n'
                                      'Si non adsunt baptizandi\n'
                                      'Ut hunc fontem,\n'
                                      'regenerándis tibi fíliis,\n'
                                      'grátia tua sanctificáre dignéris, te rogámus, audi nos.\n'
                                      'Iesu, Fili Dei vivi, te rogámus, audi nos.\n'
                                      'Christe, audi nos. Christe, audi nos.\n'
                                      'Christe, exáudi nos. Christe, exáudi nos.\n'
                                      'Si adsunt baptizandi, sacerdos, extensis manibus, dicit '
                                      'hanc orationem:\n'
                                      'Omnípotens sempitérne Deus,\n'
                                      'adésto magnæ pietátis tuæ sacraméntis,\n'
                                      'et ad recreándos novos pópulos,\n'
                                      'quos tibi fons baptísmatis párturit,\n'
                                      'spíritum adoptiónis emítte,\n'
                                      'ut, quod nostræ humilitátis gérendum est mystério,\n'
                                      'virtútis tuæ impleátur efféctu.\n'
                                      'Per Christum Dóminum nostrum.\n'
                                      'R. Amen.\n'
                                      'Benedictio aquæ baptismalis',
                            'baptism_water': 'Deinde sacerdos benedicit aquam baptismalem, dicens, '
                                             'extensis\n'
                                             'manibus, hanc orationem:\n'
                                             'Deus, qui invisíbili poténtia\n'
                                             'per sacramentórum signa mirábilem operáris '
                                             'efféctum,\n'
                                             'et creatúram aquæ multis modis præparásti,\n'
                                             'ut baptísmi grátiam demonstráret;\n'
                                             'Deus, cuius Spíritus\n'
                                             'super aquas inter ipsa mundi primórdia ferebátur,\n'
                                             'ut iam tunc virtútem sanctificándi\n'
                                             'aquárum natúra concíperet;\n'
                                             'Deus, qui regeneratiónis spéciem\n'
                                             'in ipsa dilúvii effusióne signásti,\n'
                                             'ut uníus eiusdémque eleménti mystério\n'
                                             'et finis esset vítiis et orígo virtútum;\n'
                                             'Deus, qui Abrahæ fílios\n'
                                             'per Mare Rubrum sicco vestígio transíre fecísti,\n'
                                             'ut plebs, a Pharaónis servitúte liberáta,\n'
                                             'pópulum baptizatórum præfiguráret;\n'
                                             'Deus, cuius Fílius, in aqua Iordánis a Ioánne '
                                             'baptizátus,\n'
                                             'Sancto Spíritu est inúnctus,\n'
                                             'et, in cruce pendens,\n'
                                             'una cum sánguine aquam de látere suo prodúxit,\n'
                                             'ac, post resurrectiónem suam, discípulis iussit:\n'
                                             '“ Ite, docéte omnes gentes, baptizántes eos\n'
                                             'in nómine Patris, et Fílii, et Spíritus Sancti ”:\n'
                                             'réspice in fáciem Ecclésiæ tuæ,\n'
                                             'eíque dignáre fontem baptísmatis aperíre.\n'
                                             'Sumat hæc acqua Unigéniti tui grátiam de Spíritu '
                                             'Sancto,\n'
                                             'ut homo, ad imáginem tuam cónditus,\n'
                                             'sacraménto baptísmatis\n'
                                             'a cunctis squalóribus vetustátis ablútus,\n'
                                             'in novam infántiam\n'
                                             'ex aqua et Spíritu Sancto resúrgere meréatur.\n'
                                             'Et immittens, pro opportunitate, cereum paschalem in '
                                             'aquam semel\n'
                                             'vel ter, prosequitur:\n'
                                             'Descéndat, quǽsumus, Dómine,\n'
                                             'in hanc plenitúdinem fontis\n'
                                             'per Fílium tuum virtus Spíritus Sancti,\n'
                                             'et tenens cereum in aqua prosequitur:\n'
                                             'ut omnes, cum Christo consepúlti\n'
                                             'per baptísmum in mortem,\n'
                                             'ad vitam cum ipso resúrgant.\n'
                                             'Qui tecum vivit et regnat in unitáte Spíritus '
                                             'Sancti, Deus,\n'
                                             'per ómnia sǽcula sæculórum.\n'
                                             'R. Amen.\n'
                                             '47. Deinde tollitur cereus de aqua, populo '
                                             'acclamante:\n'
                                             'Benedícite, fontes, Dómino,\n'
                                             'laudáte et superexaltáte eum in sǽcula.',
                            'baptism': '<Aquæ baptismalis benedictione expleta et acclamatione '
                                       'populi\n'
                                       'prolata, sacerdos, stans, interrogat ad abrenuntiationem '
                                       'faciendam\n'
                                       'adultos atque parentes vel patrinos parvulorum, ut in '
                                       'respectivis\n'
                                       'Ordinibus Ritualis Romani determinatur.\n'
                                       'Si unctio cum oleo catechumenorum adultorum facta non sit\n'
                                       'antea, inter ritus immediate præparatorios, fit hoc '
                                       'momento.\n'
                                       '49. Deinde sacerdos singulos adultos de fide interrogat, '
                                       'atque, si\n'
                                       'de parvulis agitur, triplicem professionem fidei ab '
                                       'omnibus parentibus\n'
                                       'et patrinis simul requirit, ut in respectivis Ordinibus '
                                       'indicatur.\n'
                                       'Ubi hac nocte multi sunt baptizandi, ritum ordinari potest '
                                       'ita\n'
                                       'ut, statim post responsionem baptizandorum, patrinorum '
                                       'atque parentum,\n'
                                       'celebrans postulet ac recipiat renovationem promissionum\n'
                                       'baptismalium omnium adstantium.\n'
                                       '50. Peractis interrogationibus, sacerdos baptizat electos '
                                       'adultos et\n'
                                       'parvulos.\n'
                                       '51. Post baptismum sacerdos infantes ungit chrismate. '
                                       'Omnibus\n'
                                       'vero, sive adultis sive parvulis, vestis candida traditur. '
                                       'Deinde sacerdos\n'
                                       'vel diaconus accipit cereum paschalem de manu ministri\n'
                                       'atque cerei neophytorum accenduntur. Pro infantibus ritus '
                                       'Effetha\n'
                                       'omittitur.\n'
                                       '52. Postea, nisi ablutio baptismalis aliique ritus '
                                       'explanativi, in\n'
                                       'presbyterio locum habuerint, fit reditus in presbyterium, '
                                       'processione\n'
                                       'ordinata uti antea, neophytis vel patrinis seu parentibus '
                                       'cereum\n'
                                       'accensum gestantibus. Durante processione canitur canticum '
                                       'baptismale\n'
                                       'Vidi aquam vel alius cantus aptus (n. 56).\n'
                                       '53. Si adulti sunt baptizati, Episcopus vel, eo absente, '
                                       'presbyter\n'
                                       'qui baptismum contulit statim sacramentum Confirmationis '
                                       'eis ministret\n'
                                       'in presbyterio, ut in Pontificali aut Rituali Romano '
                                       'indicatur.\n'
                                       'Benedictio aquæ>',
                            'water_blessing': 'Si vero non adsunt baptizandi, neque fons '
                                              'baptismalis benedicendus\n'
                                              'est, sacerdos ad aquam benedicendam fideles '
                                              'introducit,\n'
                                              'dicens:\n'
                                              'Et post brevem pausam in silentio hanc orationem '
                                              'profert, extensis\n'
                                              'manibus:\n'
                                              'Textus sine cantu:\n'
                                              'Dóminum Deum nostrum, fratres caríssimi,\n'
                                              'supplíciter exorémus,\n'
                                              'ut hanc creatúram aquæ benedícere dignétur,\n'
                                              'super nos aspergéndam in nostri memóriam baptísmi.\n'
                                              'Ipse autem nos renováre dignétur,\n'
                                              'ut Spirítui, quem accépimus, fidéles maneámus.\n'
                                              'Et post brevem pausam in silentio hanc orationem '
                                              'profert, extensis\n'
                                              'manibus:\n'
                                              'Dómine Deus noster,\n'
                                              'pópulo tuo hac nocte sacratíssima vigilánti\n'
                                              'adésto propítius:\n'
                                              'et nobis, mirábile nostræ creatiónis opus,\n'
                                              'sed et redemptiónis nostræ mirabílius, '
                                              'memorántibus,\n'
                                              'hanc aquam benedícere tu dignáre.\n'
                                              'Ipsam enim tu fecísti,\n'
                                              'ut et arva fecunditáte donáret,\n'
                                              'et levámen corpóribus nostris munditiámque '
                                              'præbéret.\n'
                                              'Aquam étiam tuæ minístram misericórdiæ condidísti:\n'
                                              'nam per ipsam solvísti tui pópuli servitútem\n'
                                              'illiúsque sitim in desérto sedásti;\n'
                                              'per ipsam novum fœdus nuntiavérunt prophétæ,\n'
                                              'quod eras cum homínibus initúrus;\n'
                                              'per ipsam dénique, quam Christus in Iordáne '
                                              'sacrávit,\n'
                                              'corrúptam natúræ nostræ substántiam\n'
                                              'in regeneratiónis lavácro renovásti.\n'
                                              'Sit ígitur hæc aqua nobis suscépti baptísmatis '
                                              'memória,\n'
                                              'et cum frátribus nostris, qui sunt in Páschate '
                                              'baptizáti,\n'
                                              'gáudia nos tríbuas sociáre.\n'
                                              'Per Christum Dóminum nostrum.\n'
                                              'R. Amen.\n'
                                              'Renovatio promissionum baptismalium',
                            'baptism_renewal': 'Ritu baptismi (et confirmationis) expleto, vel si '
                                               'hic non habuit\n'
                                               'locum, post benedictionem aquæ, omnes, stantes et '
                                               'candelas accensas\n'
                                               'in manibus gestantes, promissionem fidei '
                                               'baptismalis, una cum\n'
                                               'baptizandis, renovant, nisi iam locum habuerit, '
                                               '(cf. n. 48).\n'
                                               'Sacerdos fideles alloquitur, his vel similibus '
                                               'verbis:\n'
                                               'Per paschále mystérium, fratres caríssimi,\n'
                                               'in baptísmo consepúlti sumus cum Christo,\n'
                                               'ut cum eo in novitáte vitæ ambulémus.\n'
                                               'Quaprópter, quadragesimáli observatióne absolúta,\n'
                                               'sancti baptísmatis promissiónes renovémus,\n'
                                               'quibus olim Sátanæ et opéribus eius '
                                               'abrenuntiávimus,\n'
                                               'et Deo in sancta Ecclésia cathólica servíre '
                                               'promísimus.\n'
                                               'Quaprópter:\n'
                                               'Sacerdos: Abrenuntiátis Sátanæ?\n'
                                               'Omnes: Abrenúntio.\n'
                                               'Sacerdos: Et ómnibus opéribus eius?\n'
                                               'Omnes: Abrenúntio.\n'
                                               'Sacerdos: Et ómnibus pompis eius?\n'
                                               'Omnes: Abrenúntio.\n'
                                               'Vel:\n'
                                               'Sacerdos: Abrenuntiátis peccáto, ut in libertáte '
                                               'filiórum Dei\n'
                                               'vivátis?\n'
                                               'Omnes: Abrenúntio.\n'
                                               'Sacerdos: Abrenuntiátis seductiónibus iniquitátis, '
                                               'ne peccátum\n'
                                               'vobis dominétur?\n'
                                               'Omnes: Abrenúntio.\n'
                                               'Sacerdos: Abrenuntiátis Sátanæ, qui est auctor et '
                                               'princeps\n'
                                               'peccáti?\n'
                                               'Omnes: Abrenúntio.\n'
                                               'Si casus fert, hæc altera formula aptari potest a '
                                               'Conferentiis Episcoporum,\n'
                                               'iuxta locorum necessitates.\n'
                                               'Deinde sacerdos prosequitur:\n'
                                               'Sacerdos: Créditis in Deum Patrem omnipoténtem, '
                                               'creatórem\n'
                                               'cæli et terræ?\n'
                                               'Omnes: Credo.\n'
                                               'Sacerdos: Créditis in Iesum Christum, Fílium eius '
                                               'únicum,\n'
                                               'Dóminum nostrum, natum ex María Vírgine, passum et '
                                               'sepúltum,\n'
                                               'qui a mórtuis resurréxit et sedet ad déxteram '
                                               'Patris?\n'
                                               'Omnes: Credo.\n'
                                               'Sacerdos: Créditis in Spíritum Sanctum, sanctam '
                                               'Ecclésiam\n'
                                               'cathólicam, sanctórum communiónem, remissiónem\n'
                                               'peccatórum, carnis resurrectiónem et vitam '
                                               'ætérnam?\n'
                                               'Omnes: Credo.\n'
                                               'Et sacerdos concludit:\n'
                                               'Et Deus omnípotens, Pater Dómini nostri Iesu '
                                               'Christi,\n'
                                               'qui nos regenerávit ex aqua et Spíritu Sancto,\n'
                                               'quique nobis dedit remissiónem peccatórum,\n'
                                               'ipse nos custódiat grátia sua,\n'
                                               'in Christo Iesu Dómino nostro,\n'
                                               'in vitam ætérnam.\n'
                                               'Omnes: Amen.',
                            'sprinkling': 'Sacerdos aspergit populum aqua benedicta, omnibus '
                                          'cantantibus:\n'
                                          'Antiphona\n'
                                          'Ant. Vidi aquam egrediéntem de templo,\n'
                                          'a látere dextro, allelúia;\n'
                                          'et omnes, ad quos pervénit aqua ista, salvi facti sunt\n'
                                          'et dicent: Allelúia, allelúia.\n'
                                          'Cantari potest etiam alius cantus indolem baptismalem '
                                          'præ se ferens.\n'
                                          '57. Interim neophyti deducuntur ad locum suum inter '
                                          'fideles.\n'
                                          'Si benedictio aquæ baptismalis facta non est in '
                                          'baptisterio, diaconus\n'
                                          'et ministri reverenter portant vas aquæ ad fontem.\n'
                                          'Si benedictio fontis locum non habuit, aqua benedicta '
                                          'reponitur\n'
                                          'loco convenienti.\n'
                                          '58. Aspersione facta, sacerdos redit ad sedem, ubi, '
                                          'omisso symbolo,\n'
                                          'moderatur orationem universalem, quam neophyti primum\n'
                                          'participant.\n'
                                          'Pars quarta:\n'
                                          'Liturgia eucharistica',
                            'vigil_eucharist_intro': '<Sacerdos accedit ad altare et more solito '
                                                     'incipit liturgiam eucharisticam.\n'
                                                     '60. Præstat, ut panis et vinum afferantur a '
                                                     'neophytis vel, si sint\n'
                                                     'parvuli, ab eorum parentibus vel patrinis.>',
                            'vigil_blessing': 'Benedictio sollemnis\n'
                                              'Benedícat vos omnípotens Deus,\n'
                                              'hodiérna interveniénte sollemnitáte pascháli,\n'
                                              'et ab omni miserátus deféndat incursióne peccáti.\n'
                                              'R. Amen.\n'
                                              'Et qui ad ætérnam vitam\n'
                                              'in Unigéniti sui resurrectióne vos réparat,\n'
                                              'vos prǽmiis immortalitátis adímpleat.\n'
                                              'R. Amen.\n'
                                              'Et qui, explétis passiónis domínicæ diébus,\n'
                                              'paschális festi gáudia celebrátis,\n'
                                              'ad ea festa, quæ lætítiis peragúntur ætérnis,\n'
                                              'ipso opitulánte, exsultántibus ánimis veniátis.\n'
                                              'R. Amen.\n'
                                              'Benedícat vos omnípotens Deus,\n'
                                              'Pater, et Fílius, + et Spíritus Sanctus.\n'
                                              'R. Amen.\n'
                                              'Adhiberi potest etiam formula benedictionis finalis '
                                              'Ordinis Baptismi\n'
                                              'adultorum vel parvulorum, iuxta rerum adiuncta.',
                            'vigil_dismissal': '╋ Ite, missa est, allelúia, allelúia.\n'
                                               '◎ Deo grátias, allelúia, allelúia.',
                            'exsultet': {'choices': {'A': {'LA': 'Forma longior', 'KR': '긴 양식'},
                                                     'B': {'LA': 'Forma brevior', 'KR': '짧은 양식'}},
                                         'variants': {'A': {'lines': [{'sp': '',
                                                                       'text': 'Exsúltet iam '
                                                                               'angélica turba '
                                                                               'cælórum:'},
                                                                      {'sp': '',
                                                                       'text': 'exsúltent divína '
                                                                               'mystéria:'},
                                                                      {'sp': '',
                                                                       'text': 'et pro tanti Regis '
                                                                               'victória tuba '
                                                                               'ínsonet '
                                                                               'salutáris.'},
                                                                      {'sp': '',
                                                                       'text': 'Gáudeat et tellus '
                                                                               'tantis irradiáta '
                                                                               'fulgóribus:'},
                                                                      {'sp': '',
                                                                       'text': 'et, ætérni Regis '
                                                                               'splendóre '
                                                                               'illustráta,'},
                                                                      {'sp': '',
                                                                       'text': 'totíus orbis se '
                                                                               'séntiat amisísse '
                                                                               'calíginem.'},
                                                                      {'sp': '',
                                                                       'text': 'Lætétur et mater '
                                                                               'Ecclésia,'},
                                                                      {'sp': '',
                                                                       'text': 'tanti lúminis '
                                                                               'adornáta '
                                                                               'fulgóribus:'},
                                                                      {'sp': '',
                                                                       'text': 'et magnis '
                                                                               'populórum vócibus '
                                                                               'hæc aula '
                                                                               'resúltet.'},
                                                                      {'sp': '',
                                                                       'text': '(Quaprópter '
                                                                               'astántes vos, '
                                                                               'fratres '
                                                                               'caríssimi,'},
                                                                      {'sp': '',
                                                                       'text': 'ad tam miram huius '
                                                                               'sancti lúminis '
                                                                               'claritátem,'},
                                                                      {'sp': '',
                                                                       'text': 'una mecum, quæso,'},
                                                                      {'sp': '',
                                                                       'text': 'Dei omnipoténtis '
                                                                               'misericórdiam '
                                                                               'invocáte.'},
                                                                      {'sp': '',
                                                                       'text': 'Ut, qui me non '
                                                                               'meis méritis'},
                                                                      {'sp': '',
                                                                       'text': 'intra Levitárum '
                                                                               'númerum dignátus '
                                                                               'est aggregáre,'},
                                                                      {'sp': '',
                                                                       'text': 'lúminis sui '
                                                                               'claritátem '
                                                                               'infúndens,'},
                                                                      {'sp': '',
                                                                       'text': 'cérei huius laudem '
                                                                               'implére '
                                                                               'perfíciat).'},
                                                                      {'sp': '',
                                                                       'text': '(V. Dóminus '
                                                                               'vobíscum.'},
                                                                      {'sp': '◎',
                                                                       'text': 'Et cum spíritu '
                                                                               'tuo.)'},
                                                                      {'sp': '',
                                                                       'text': 'V. Sursum corda.'},
                                                                      {'sp': '◎',
                                                                       'text': 'Habémus ad '
                                                                               'Dóminum.'},
                                                                      {'sp': '',
                                                                       'text': 'V. Grátias agámus '
                                                                               'Dómino Deo '
                                                                               'nostro.'},
                                                                      {'sp': '◎',
                                                                       'text': 'Dignum et iustum '
                                                                               'est.'},
                                                                      {'sp': '',
                                                                       'text': 'Vere dignum et '
                                                                               'iustum est,'},
                                                                      {'sp': '',
                                                                       'text': 'invisíbilem Deum '
                                                                               'Patrem '
                                                                               'omnipoténtem'},
                                                                      {'sp': '',
                                                                       'text': 'Filiúmque eius '
                                                                               'Unigénitum,'},
                                                                      {'sp': '',
                                                                       'text': 'Dóminum nostrum '
                                                                               'Iesum Christum,'},
                                                                      {'sp': '',
                                                                       'text': 'toto cordis ac '
                                                                               'mentis afféctu et '
                                                                               'vocis ministério '
                                                                               'personáre.'},
                                                                      {'sp': '',
                                                                       'text': 'Qui pro nobis '
                                                                               'ætérno Patri Adæ '
                                                                               'débitum solvit,'},
                                                                      {'sp': '',
                                                                       'text': 'et véteris piáculi '
                                                                               'cautiónem pio '
                                                                               'cruóre detérsit.'},
                                                                      {'sp': '',
                                                                       'text': 'Hæc sunt enim '
                                                                               'festa paschália,'},
                                                                      {'sp': '',
                                                                       'text': 'in quibus verus '
                                                                               'ille Agnus '
                                                                               'occíditur,'},
                                                                      {'sp': '',
                                                                       'text': 'cuius sánguine '
                                                                               'postes fidélium '
                                                                               'consecrántur.'},
                                                                      {'sp': '',
                                                                       'text': 'Hæc nox est,'},
                                                                      {'sp': '',
                                                                       'text': 'in qua primum '
                                                                               'patres nostros,'},
                                                                      {'sp': '',
                                                                       'text': 'fílios Israel '
                                                                               'edúctos de '
                                                                               'Ægýpto,'},
                                                                      {'sp': '',
                                                                       'text': 'Mare Rubrum sicco '
                                                                               'vestígio transíre '
                                                                               'fecísti.'},
                                                                      {'sp': '',
                                                                       'text': 'Hæc ígitur nox '
                                                                               'est,'},
                                                                      {'sp': '',
                                                                       'text': 'quæ peccatórum '
                                                                               'ténebras colúmnæ '
                                                                               'illuminatióne '
                                                                               'purgávit.'},
                                                                      {'sp': '',
                                                                       'text': 'Hæc nox est,'},
                                                                      {'sp': '',
                                                                       'text': 'quæ hódie per '
                                                                               'univérsum mundum '
                                                                               'in Christo '
                                                                               'credéntes,'},
                                                                      {'sp': '',
                                                                       'text': 'a vítiis sǽculi et '
                                                                               'calígine '
                                                                               'peccatórum '
                                                                               'segregátos,'},
                                                                      {'sp': '',
                                                                       'text': 'reddit grátiæ, '
                                                                               'sóciat '
                                                                               'sanctitáti.'},
                                                                      {'sp': '',
                                                                       'text': 'Hæc nox est,'},
                                                                      {'sp': '',
                                                                       'text': 'in qua, destrúctis '
                                                                               'vínculis mortis,'},
                                                                      {'sp': '',
                                                                       'text': 'Christus ab '
                                                                               'ínferis victor '
                                                                               'ascéndit.'},
                                                                      {'sp': '',
                                                                       'text': 'Nihil enim nobis '
                                                                               'nasci prófuit, '
                                                                               'nisi rédimi '
                                                                               'profuísset.'},
                                                                      {'sp': '',
                                                                       'text': 'O mira circa nos '
                                                                               'tuæ pietátis '
                                                                               'dignátio!'},
                                                                      {'sp': '',
                                                                       'text': 'O inæstimábilis '
                                                                               'diléctio '
                                                                               'caritátis:'},
                                                                      {'sp': '',
                                                                       'text': 'ut servum '
                                                                               'redímeres, Fílium '
                                                                               'tradidísti!'},
                                                                      {'sp': '',
                                                                       'text': 'O certe '
                                                                               'necessárium Adæ '
                                                                               'peccátum,'},
                                                                      {'sp': '',
                                                                       'text': 'quod Christi morte '
                                                                               'delétum est!'},
                                                                      {'sp': '',
                                                                       'text': 'O felix culpa,'},
                                                                      {'sp': '',
                                                                       'text': 'quæ talem ac '
                                                                               'tantum méruit '
                                                                               'habére '
                                                                               'Redemptórem!'},
                                                                      {'sp': '',
                                                                       'text': 'O vere beáta nox,'},
                                                                      {'sp': '',
                                                                       'text': 'quæ sola méruit '
                                                                               'scire tempus et '
                                                                               'horam,'},
                                                                      {'sp': '',
                                                                       'text': 'in qua Christus ab '
                                                                               'ínferis '
                                                                               'resurréxit!'},
                                                                      {'sp': '',
                                                                       'text': 'Hæc nox est, de '
                                                                               'qua scriptum est:'},
                                                                      {'sp': '',
                                                                       'text': 'Et nox sicut dies '
                                                                               'illuminábitur:'},
                                                                      {'sp': '',
                                                                       'text': 'et nox illuminátio '
                                                                               'mea in delíciis '
                                                                               'meis.'},
                                                                      {'sp': '',
                                                                       'text': 'Huius ígitur '
                                                                               'sanctificátio '
                                                                               'noctis fugat '
                                                                               'scélera, culpas '
                                                                               'lavat:'},
                                                                      {'sp': '',
                                                                       'text': 'et reddit '
                                                                               'innocéntiam lapsis '
                                                                               'et mæstis '
                                                                               'lætítiam.'},
                                                                      {'sp': '',
                                                                       'text': 'Fugat ódia, '
                                                                               'concórdiam parat '
                                                                               'et curvat '
                                                                               'impéria.'},
                                                                      {'sp': '',
                                                                       'text': 'In huius ígitur '
                                                                               'noctis grátia,'},
                                                                      {'sp': '',
                                                                       'text': 'súscipe, sancte '
                                                                               'Pater, laudis '
                                                                               'huius sacrifícium '
                                                                               'vespertínum,'},
                                                                      {'sp': '',
                                                                       'text': 'quod tibi in hac '
                                                                               'cérei oblatióne '
                                                                               'sollémni,'},
                                                                      {'sp': '',
                                                                       'text': 'per ministrórum '
                                                                               'manus'},
                                                                      {'sp': '',
                                                                       'text': 'de opéribus apum, '
                                                                               'sacrosáncta reddit '
                                                                               'Ecclésia.'},
                                                                      {'sp': '',
                                                                       'text': 'Sed iam colúmnæ '
                                                                               'huius præcónia '
                                                                               'nóvimus,'},
                                                                      {'sp': '',
                                                                       'text': 'quam in honórem '
                                                                               'Dei rútilans ignis '
                                                                               'accéndit.'},
                                                                      {'sp': '',
                                                                       'text': 'Qui, licet sit '
                                                                               'divísus in '
                                                                               'partes,'},
                                                                      {'sp': '',
                                                                       'text': 'mutuáti tamen '
                                                                               'lúminis detriménta '
                                                                               'non novit.'},
                                                                      {'sp': '',
                                                                       'text': 'Alitur enim '
                                                                               'liquántibus '
                                                                               'ceris,'},
                                                                      {'sp': '',
                                                                       'text': 'quas in '
                                                                               'substántiam '
                                                                               'pretiósæ huius '
                                                                               'lámpadis'},
                                                                      {'sp': '',
                                                                       'text': 'apis mater '
                                                                               'edúxit.'},
                                                                      {'sp': '',
                                                                       'text': 'O vere beáta nox,'},
                                                                      {'sp': '',
                                                                       'text': 'in qua terrénis '
                                                                               'cæléstia, humánis '
                                                                               'divína iungúntur!'},
                                                                      {'sp': '',
                                                                       'text': 'Orámus ergo te, '
                                                                               'Dómine,'},
                                                                      {'sp': '',
                                                                       'text': 'ut céreus iste in '
                                                                               'honórem tui '
                                                                               'nóminis '
                                                                               'consecrátus,'},
                                                                      {'sp': '',
                                                                       'text': 'ad noctis huius '
                                                                               'calíginem '
                                                                               'destruéndam,'},
                                                                      {'sp': '',
                                                                       'text': 'indefíciens '
                                                                               'persevéret.'},
                                                                      {'sp': '',
                                                                       'text': 'Et in odórem '
                                                                               'suavitátis '
                                                                               'accéptus,'},
                                                                      {'sp': '',
                                                                       'text': 'supérnis '
                                                                               'lumináribus '
                                                                               'misceátur.'},
                                                                      {'sp': '',
                                                                       'text': 'Flammas eius '
                                                                               'lúcifer matutínus '
                                                                               'invéniat:'},
                                                                      {'sp': '',
                                                                       'text': 'Ille, inquam, '
                                                                               'lúcifer, qui '
                                                                               'nescit occásum:'},
                                                                      {'sp': '',
                                                                       'text': 'Christus Fílius '
                                                                               'tuus,'},
                                                                      {'sp': '',
                                                                       'text': 'qui, regréssus ab '
                                                                               'ínferis, humáno '
                                                                               'géneri serénus '
                                                                               'illúxit,'},
                                                                      {'sp': '',
                                                                       'text': 'et vivit et regnat '
                                                                               'in sǽcula '
                                                                               'sæculórum.'},
                                                                      {'sp': '◎',
                                                                       'text': 'Amen.'}]},
                                                      'B': {'lines': [{'sp': '',
                                                                       'text': 'Exsúltet iam '
                                                                               'angélica turba '
                                                                               'cælórum:'},
                                                                      {'sp': '',
                                                                       'text': 'exsúltent divína '
                                                                               'mystéria:'},
                                                                      {'sp': '',
                                                                       'text': 'et pro tanti Regis '
                                                                               'victória tuba '
                                                                               'ínsonet '
                                                                               'salutáris.'},
                                                                      {'sp': '',
                                                                       'text': 'Gáudeat et tellus '
                                                                               'tantis irradiáta '
                                                                               'fulgóribus:'},
                                                                      {'sp': '',
                                                                       'text': 'et, ætérni Regis '
                                                                               'splendóre '
                                                                               'illustráta,'},
                                                                      {'sp': '',
                                                                       'text': 'totíus orbis se '
                                                                               'séntiat amisísse '
                                                                               'calíginem.'},
                                                                      {'sp': '',
                                                                       'text': 'Lætétur et mater '
                                                                               'Ecclésia,'},
                                                                      {'sp': '',
                                                                       'text': 'tanti lúminis '
                                                                               'adornáta '
                                                                               'fulgóribus:'},
                                                                      {'sp': '',
                                                                       'text': 'et magnis '
                                                                               'populórum vócibus '
                                                                               'hæc aula '
                                                                               'resúltet.'},
                                                                      {'sp': '',
                                                                       'text': '(V. Dóminus '
                                                                               'vobíscum.'},
                                                                      {'sp': '◎',
                                                                       'text': 'Et cum spíritu tuo '
                                                                               ') .'},
                                                                      {'sp': '',
                                                                       'text': 'V. Sursum corda.'},
                                                                      {'sp': '◎',
                                                                       'text': 'Habémus ad '
                                                                               'Dóminum.'},
                                                                      {'sp': '',
                                                                       'text': 'V. Grátias agámus '
                                                                               'Dómino Deo '
                                                                               'nostro.'},
                                                                      {'sp': '◎',
                                                                       'text': 'Dignum et iustum '
                                                                               'est.'},
                                                                      {'sp': '',
                                                                       'text': 'Vere dignum et '
                                                                               'iustum est,'},
                                                                      {'sp': '',
                                                                       'text': 'invisíbilem Deum '
                                                                               'Patrem '
                                                                               'omnipoténtem'},
                                                                      {'sp': '',
                                                                       'text': 'Filiúmque eius '
                                                                               'Unigénitum,'},
                                                                      {'sp': '',
                                                                       'text': 'Dóminum nostrum '
                                                                               'Iesum Christum,'},
                                                                      {'sp': '',
                                                                       'text': 'toto cordis ac '
                                                                               'mentis afféctu et '
                                                                               'vocis ministério '
                                                                               'personáre.'},
                                                                      {'sp': '',
                                                                       'text': 'Qui pro nobis '
                                                                               'ætérno Patri Adæ '
                                                                               'débitum solvit,'},
                                                                      {'sp': '',
                                                                       'text': 'et véteris piáculi '
                                                                               'cautiónem pio '
                                                                               'cruóre detérsit.'},
                                                                      {'sp': '',
                                                                       'text': 'Hæc sunt enim '
                                                                               'festa paschália,'},
                                                                      {'sp': '',
                                                                       'text': 'in quibus verus '
                                                                               'ille Agnus '
                                                                               'occíditur,'},
                                                                      {'sp': '',
                                                                       'text': 'cuius sánguine '
                                                                               'postes fidélium '
                                                                               'consecrántur.'},
                                                                      {'sp': '',
                                                                       'text': 'Hæc nox est,'},
                                                                      {'sp': '',
                                                                       'text': 'in qua primum '
                                                                               'patres nostros, '
                                                                               'fílios Israel'},
                                                                      {'sp': '',
                                                                       'text': 'edúctos de '
                                                                               'Ægýpto,'},
                                                                      {'sp': '',
                                                                       'text': 'Mare Rubrum sicco '
                                                                               'vestígio transíre '
                                                                               'fecísti.'},
                                                                      {'sp': '',
                                                                       'text': 'Hæc ígitur nox '
                                                                               'est,'},
                                                                      {'sp': '',
                                                                       'text': 'quæ peccatórum '
                                                                               'ténebras colúmnæ '
                                                                               'illuminatióne '
                                                                               'purgávit.'},
                                                                      {'sp': '',
                                                                       'text': 'Hæc nox est,'},
                                                                      {'sp': '',
                                                                       'text': 'quæ hódie per '
                                                                               'univérsum mundum '
                                                                               'in Christo '
                                                                               'credéntes,'},
                                                                      {'sp': '',
                                                                       'text': 'a vítiis sǽculi et '
                                                                               'calígine '
                                                                               'peccatórum '
                                                                               'segregátos,'},
                                                                      {'sp': '',
                                                                       'text': 'reddit grátiæ, '
                                                                               'sóciat '
                                                                               'sanctitáti.'},
                                                                      {'sp': '',
                                                                       'text': 'Hæc nox est,'},
                                                                      {'sp': '',
                                                                       'text': 'in qua, destrúctis '
                                                                               'vínculis mortis,'},
                                                                      {'sp': '',
                                                                       'text': 'Christus ab '
                                                                               'ínferis victor '
                                                                               'ascéndit.'},
                                                                      {'sp': '',
                                                                       'text': 'O mira circa nos '
                                                                               'tuæ pietátis '
                                                                               'dignátio!'},
                                                                      {'sp': '',
                                                                       'text': 'O inæstimábilis '
                                                                               'diléctio '
                                                                               'caritátis:'},
                                                                      {'sp': '',
                                                                       'text': 'ut servum '
                                                                               'redímeres, Fílium '
                                                                               'tradidísti!'},
                                                                      {'sp': '',
                                                                       'text': 'O certe '
                                                                               'necessárium Adae '
                                                                               'peccátum,'},
                                                                      {'sp': '',
                                                                       'text': 'quod Christi morte '
                                                                               'delétum est!'},
                                                                      {'sp': '',
                                                                       'text': 'O felix culpa,'},
                                                                      {'sp': '',
                                                                       'text': 'quæ talem ac '
                                                                               'tantum méruit '
                                                                               'habére '
                                                                               'Redemptórem!'},
                                                                      {'sp': '',
                                                                       'text': 'Huius igitur '
                                                                               'sanctificátio '
                                                                               'noctis fugat '
                                                                               'scélera, culpas '
                                                                               'lavat:'},
                                                                      {'sp': '',
                                                                       'text': 'et reddit '
                                                                               'innocéntiam lapsis '
                                                                               'et mæstis '
                                                                               'lætítiam.'},
                                                                      {'sp': '',
                                                                       'text': 'O vere beáta nox,'},
                                                                      {'sp': '',
                                                                       'text': 'in qua terrénis '
                                                                               'cæléstia, humánis '
                                                                               'divína iungúntur!'},
                                                                      {'sp': '',
                                                                       'text': 'In huius ígitur '
                                                                               'noctis grátia,'},
                                                                      {'sp': '',
                                                                       'text': 'súscipe, sancte '
                                                                               'Pater, laudis '
                                                                               'huius sacrifícium '
                                                                               'vespertínum,'},
                                                                      {'sp': '',
                                                                       'text': 'quod tibi in hac '
                                                                               'cérei oblatióne '
                                                                               'sollémni,'},
                                                                      {'sp': '',
                                                                       'text': 'per ministrórum '
                                                                               'manus'},
                                                                      {'sp': '',
                                                                       'text': 'de opéribus apum, '
                                                                               'sacrosáncta reddit '
                                                                               'Ecclésia.'},
                                                                      {'sp': '',
                                                                       'text': 'Orámus ergo te, '
                                                                               'Dómine,'},
                                                                      {'sp': '',
                                                                       'text': 'ut céreus iste in '
                                                                               'honórem tui '
                                                                               'nóminis '
                                                                               'consecrátus,'},
                                                                      {'sp': '',
                                                                       'text': 'ad noctis huius '
                                                                               'calíginem '
                                                                               'destruéndam,'},
                                                                      {'sp': '',
                                                                       'text': 'indefíciens '
                                                                               'persevéret.'},
                                                                      {'sp': '',
                                                                       'text': 'Et in odórem '
                                                                               'suavitátis '
                                                                               'accéptus,'},
                                                                      {'sp': '',
                                                                       'text': 'supérnis '
                                                                               'lumináribus '
                                                                               'misceátur.'},
                                                                      {'sp': '',
                                                                       'text': 'Flammas eius '
                                                                               'lúcifer matutínus '
                                                                               'invéniat:'},
                                                                      {'sp': '',
                                                                       'text': 'Ille, inquam, '
                                                                               'lúcifer, qui '
                                                                               'nescit occásum:'},
                                                                      {'sp': '',
                                                                       'text': 'Christus Fílius '
                                                                               'tuus,'},
                                                                      {'sp': '',
                                                                       'text': 'qui, regréssus ab '
                                                                               'ínferis, humáno '
                                                                               'géneri serénus '
                                                                               'illúxit,'},
                                                                      {'sp': '',
                                                                       'text': 'et vivit et regnat '
                                                                               'in sǽcula '
                                                                               'sæculórum.'},
                                                                      {'sp': '◎', 'text': 'Amen.'},
                                                                      {'sp': '',
                                                                       'text': 'Pars secunda:'},
                                                                      {'sp': '',
                                                                       'text': 'Liturgia '
                                                                               'verbi'}]}}},
                            'vigil_prayer_1': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'}},
                                               'variants': {'A': {'lines': [{'sp': '',
                                                                             'text': 'Post primam '
                                                                                     'lectionem '
                                                                                     '(De '
                                                                                     'creatione: '
                                                                                     'Gen 1, 1 – '
                                                                                     '2, 2 vel 1,'},
                                                                            {'sp': '',
                                                                             'text': '1.26-31a) et '
                                                                                     'psalmum (103 '
                                                                                     'vel 32).'},
                                                                            {'sp': '',
                                                                             'text': 'Orémus.'},
                                                                            {'sp': '',
                                                                             'text': 'Omnípotens '
                                                                                     'sempitérne '
                                                                                     'Deus,'},
                                                                            {'sp': '',
                                                                             'text': 'qui es in '
                                                                                     'ómnium '
                                                                                     'óperum '
                                                                                     'tuórum '
                                                                                     'dispensatióne '
                                                                                     'mirábilis,'},
                                                                            {'sp': '',
                                                                             'text': 'intéllegant '
                                                                                     'redémpti '
                                                                                     'tui, non '
                                                                                     'fuísse '
                                                                                     'excelléntius,'},
                                                                            {'sp': '',
                                                                             'text': 'quod inítio '
                                                                                     'factus est '
                                                                                     'mundus,'},
                                                                            {'sp': '',
                                                                             'text': 'quam quod in '
                                                                                     'fine '
                                                                                     'sæculórum'},
                                                                            {'sp': '',
                                                                             'text': 'Pascha '
                                                                                     'nostrum '
                                                                                     'immolátus '
                                                                                     'est '
                                                                                     'Christus.'},
                                                                            {'sp': '',
                                                                             'text': 'Qui vivit et '
                                                                                     'regnat in '
                                                                                     'sǽcula '
                                                                                     'sæculórum.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'},
                                                                            {'sp': '',
                                                                             'text': 'Vel, De '
                                                                                     'creatione '
                                                                                     'hominis:'},
                                                                            {'sp': '',
                                                                             'text': 'Deus, qui '
                                                                                     'mirabíliter '
                                                                                     'creásti '
                                                                                     'hóminem'},
                                                                            {'sp': '',
                                                                             'text': 'et '
                                                                                     'mirabílius '
                                                                                     'redemísti,'},
                                                                            {'sp': '',
                                                                             'text': 'da nobis, '
                                                                                     'quǽsumus,'},
                                                                            {'sp': '',
                                                                             'text': 'contra '
                                                                                     'oblectaménta '
                                                                                     'peccáti '
                                                                                     'mentis '
                                                                                     'ratióne '
                                                                                     'persístere,'},
                                                                            {'sp': '',
                                                                             'text': 'ut mereámur '
                                                                                     'ad ætérna '
                                                                                     'gáudia '
                                                                                     'perveníre.'},
                                                                            {'sp': '',
                                                                             'text': 'Per Christum '
                                                                                     'Dóminum '
                                                                                     'nostrum.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]}}},
                            'vigil_prayer_2': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'}},
                                               'variants': {'A': {'lines': [{'sp': '',
                                                                             'text': 'Post '
                                                                                     'secundam '
                                                                                     'lectionem '
                                                                                     '(De '
                                                                                     'sacrificio '
                                                                                     'Abrahæ: Gen '
                                                                                     '22,'},
                                                                            {'sp': '',
                                                                             'text': '1-18; vel '
                                                                                     '1-2.9a.10-13.15-18) '
                                                                                     'et psalmum '
                                                                                     '(15).'},
                                                                            {'sp': '',
                                                                             'text': 'Orémus.'},
                                                                            {'sp': '',
                                                                             'text': 'Deus, Pater '
                                                                                     'summe '
                                                                                     'fidélium,'},
                                                                            {'sp': '',
                                                                             'text': 'qui '
                                                                                     'promissiónis '
                                                                                     'tuæ fílios '
                                                                                     'diffúsa '
                                                                                     'adoptiónis '
                                                                                     'grátia'},
                                                                            {'sp': '',
                                                                             'text': 'in toto '
                                                                                     'terrárum '
                                                                                     'orbe '
                                                                                     'multíplicas,'},
                                                                            {'sp': '',
                                                                             'text': 'et per '
                                                                                     'paschále '
                                                                                     'sacraméntum'},
                                                                            {'sp': '',
                                                                             'text': 'Abraham '
                                                                                     'púerum tuum'},
                                                                            {'sp': '',
                                                                             'text': 'universárum, '
                                                                                     'sicut '
                                                                                     'iurásti, '
                                                                                     'géntium '
                                                                                     'éfficis '
                                                                                     'patrem,'},
                                                                            {'sp': '',
                                                                             'text': 'da pópulis '
                                                                                     'tuis digne '
                                                                                     'ad grátiam '
                                                                                     'tuæ '
                                                                                     'vocatiónis '
                                                                                     'intráre.'},
                                                                            {'sp': '',
                                                                             'text': 'Per Christum '
                                                                                     'Dóminum '
                                                                                     'nostrum.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]}}},
                            'vigil_prayer_3': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'},
                                                           'B': {'KR': '제2양식', 'EN': 'Form 2'}},
                                               'variants': {'A': {'lines': [{'sp': '',
                                                                             'text': 'Post tertiam '
                                                                                     'lectionem '
                                                                                     '(De transitu '
                                                                                     'Maris Rubri: '
                                                                                     'Ex 14, 15 –'},
                                                                            {'sp': '',
                                                                             'text': '15, 1) et '
                                                                                     'eius '
                                                                                     'canticum (Ex '
                                                                                     '15).'},
                                                                            {'sp': '',
                                                                             'text': 'Orémus.'},
                                                                            {'sp': '',
                                                                             'text': 'Deus, cuius '
                                                                                     'antíqua '
                                                                                     'mirácula'},
                                                                            {'sp': '',
                                                                             'text': 'étiam '
                                                                                     'nostris '
                                                                                     'tempóribus '
                                                                                     'coruscáre '
                                                                                     'sentímus,'},
                                                                            {'sp': '',
                                                                             'text': 'dum, quod '
                                                                                     'uni pópulo'},
                                                                            {'sp': '',
                                                                             'text': 'a '
                                                                                     'persecutióne '
                                                                                     'Pharaónis '
                                                                                     'liberándo'},
                                                                            {'sp': '',
                                                                             'text': 'déxteræ tuæ '
                                                                                     'poténtia '
                                                                                     'contulísti,'},
                                                                            {'sp': '',
                                                                             'text': 'id in '
                                                                                     'salútem '
                                                                                     'géntium'},
                                                                            {'sp': '',
                                                                             'text': 'per aquam '
                                                                                     'regeneratiónis '
                                                                                     'operáris,'},
                                                                            {'sp': '',
                                                                             'text': 'præsta, ut '
                                                                                     'in Abrahæ '
                                                                                     'fílios'},
                                                                            {'sp': '',
                                                                             'text': 'et in '
                                                                                     'Israelíticam '
                                                                                     'dignitátem'},
                                                                            {'sp': '',
                                                                             'text': 'totíus mundi '
                                                                                     'tránseat '
                                                                                     'plenitúdo.'},
                                                                            {'sp': '',
                                                                             'text': 'Per Christum '
                                                                                     'Dóminum '
                                                                                     'nostrum.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]},
                                                            'B': {'lines': [{'sp': '',
                                                                             'text': 'Deus, qui '
                                                                                     'primis '
                                                                                     'tempóribus'},
                                                                            {'sp': '',
                                                                             'text': 'impléta '
                                                                                     'mirácula '
                                                                                     'novi '
                                                                                     'testaménti '
                                                                                     'luce '
                                                                                     'reserásti,'},
                                                                            {'sp': '',
                                                                             'text': 'ut et Mare '
                                                                                     'Rubrum forma '
                                                                                     'sacri fontis '
                                                                                     'exsísteret,'},
                                                                            {'sp': '',
                                                                             'text': 'et plebs a '
                                                                                     'servitúte '
                                                                                     'liberáta'},
                                                                            {'sp': '',
                                                                             'text': 'christiáni '
                                                                                     'pópuli '
                                                                                     'sacraménta '
                                                                                     'præférret,'},
                                                                            {'sp': '',
                                                                             'text': 'da, ut omnes '
                                                                                     'gentes,'},
                                                                            {'sp': '',
                                                                             'text': 'Israélis '
                                                                                     'privilégium '
                                                                                     'mérito fídei '
                                                                                     'consecútæ,'},
                                                                            {'sp': '',
                                                                             'text': 'Spíritus tui '
                                                                                     'participatióne '
                                                                                     'regeneréntur.'},
                                                                            {'sp': '',
                                                                             'text': 'Per Christum '
                                                                                     'Dóminum '
                                                                                     'nostrum.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]}}},
                            'vigil_prayer_4': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'}},
                                               'variants': {'A': {'lines': [{'sp': '',
                                                                             'text': 'Post quartam '
                                                                                     'lectionem '
                                                                                     '(De nova '
                                                                                     'Ierusalem: '
                                                                                     'Is 54, 5-14) '
                                                                                     'et'},
                                                                            {'sp': '',
                                                                             'text': 'psalmum '
                                                                                     '(29).'},
                                                                            {'sp': '',
                                                                             'text': 'Orémus.'},
                                                                            {'sp': '',
                                                                             'text': 'Omnípotens '
                                                                                     'sempitérne '
                                                                                     'Deus,'},
                                                                            {'sp': '',
                                                                             'text': 'multíplica '
                                                                                     'in honórem '
                                                                                     'nóminis tui'},
                                                                            {'sp': '',
                                                                             'text': 'quod patrum '
                                                                                     'fídei '
                                                                                     'spopondísti,'},
                                                                            {'sp': '',
                                                                             'text': 'et '
                                                                                     'promissiónis '
                                                                                     'fílios sacra '
                                                                                     'adoptióne '
                                                                                     'diláta,'},
                                                                            {'sp': '',
                                                                             'text': 'ut, quod '
                                                                                     'prióres '
                                                                                     'sancti non '
                                                                                     'dubitavérunt '
                                                                                     'futúrum,'},
                                                                            {'sp': '',
                                                                             'text': 'Ecclésia tam '
                                                                                     'magna ex '
                                                                                     'parte iam '
                                                                                     'cognóscat '
                                                                                     'implétum.'},
                                                                            {'sp': '',
                                                                             'text': 'Per Christum '
                                                                                     'Dóminum '
                                                                                     'nostrum.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'},
                                                                            {'sp': '',
                                                                             'text': 'Vel alia ex '
                                                                                     'orationibus, '
                                                                                     'quæ '
                                                                                     'sequuntur '
                                                                                     'lectiones '
                                                                                     'forte '
                                                                                     'omissas.'}]}}},
                            'vigil_prayer_5': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'}},
                                               'variants': {'A': {'lines': [{'sp': '',
                                                                             'text': 'Post quintam '
                                                                                     'lectionem '
                                                                                     '(De salute '
                                                                                     'omnibus '
                                                                                     'gratuito '
                                                                                     'oblata:'},
                                                                            {'sp': '',
                                                                             'text': 'Is 55, 1-11) '
                                                                                     'et canticum '
                                                                                     '(Is 12).'},
                                                                            {'sp': '',
                                                                             'text': 'Orémus.'},
                                                                            {'sp': '',
                                                                             'text': 'Omnípotens '
                                                                                     'sempitérne '
                                                                                     'Deus,'},
                                                                            {'sp': '',
                                                                             'text': 'spes única '
                                                                                     'mundi,'},
                                                                            {'sp': '',
                                                                             'text': 'qui '
                                                                                     'prophetárum '
                                                                                     'tuórum '
                                                                                     'præcónio'},
                                                                            {'sp': '',
                                                                             'text': 'præséntium '
                                                                                     'témporum '
                                                                                     'declarásti '
                                                                                     'mystéria,'},
                                                                            {'sp': '',
                                                                             'text': 'auge pópuli '
                                                                                     'tui vota '
                                                                                     'placátus,'},
                                                                            {'sp': '',
                                                                             'text': 'quia in '
                                                                                     'nullo '
                                                                                     'fidélium '
                                                                                     'nisi ex tua '
                                                                                     'inspiratióne '
                                                                                     'provéniunt'},
                                                                            {'sp': '',
                                                                             'text': 'quarúmlibet '
                                                                                     'increménta '
                                                                                     'virtútum.'},
                                                                            {'sp': '',
                                                                             'text': 'Per Christum '
                                                                                     'Dóminum '
                                                                                     'nostrum.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]}}},
                            'vigil_prayer_6': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'}},
                                               'variants': {'A': {'lines': [{'sp': '',
                                                                             'text': 'Post sextam '
                                                                                     'lectionem '
                                                                                     '(De fonte '
                                                                                     'sapientiæ: '
                                                                                     'Bar 3, '
                                                                                     '9-15.31 –'},
                                                                            {'sp': '',
                                                                             'text': '4, 4) et '
                                                                                     'psalmum '
                                                                                     '(18).'},
                                                                            {'sp': '',
                                                                             'text': 'Orémus.'},
                                                                            {'sp': '',
                                                                             'text': 'Deus, qui '
                                                                                     'Ecclésiam '
                                                                                     'tuam'},
                                                                            {'sp': '',
                                                                             'text': 'semper '
                                                                                     'géntium '
                                                                                     'vocatióne '
                                                                                     'multíplicas,'},
                                                                            {'sp': '',
                                                                             'text': 'concéde '
                                                                                     'propítius,'},
                                                                            {'sp': '',
                                                                             'text': 'ut, quos '
                                                                                     'aqua '
                                                                                     'baptísmatis '
                                                                                     'ábluis,'},
                                                                            {'sp': '',
                                                                             'text': 'contínua '
                                                                                     'protectióne '
                                                                                     'tueáris.'},
                                                                            {'sp': '',
                                                                             'text': 'Per Christum '
                                                                                     'Dóminum '
                                                                                     'nostrum.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]}}},
                            'vigil_prayer_7': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'},
                                                           'B': {'KR': '제2양식', 'EN': 'Form 2'}},
                                               'variants': {'A': {'lines': [{'sp': '',
                                                                             'text': 'Post '
                                                                                     'septimam '
                                                                                     'lectionem '
                                                                                     '(De corde '
                                                                                     'novo et '
                                                                                     'spiritu '
                                                                                     'novo:'},
                                                                            {'sp': '',
                                                                             'text': 'Ez 36, '
                                                                                     '16-28) et '
                                                                                     'psalmum '
                                                                                     '(41-42).'},
                                                                            {'sp': '',
                                                                             'text': 'Orémus.'},
                                                                            {'sp': '',
                                                                             'text': 'Deus, '
                                                                                     'incommutábilis '
                                                                                     'virtus et '
                                                                                     'lumen '
                                                                                     'ætérnum,'},
                                                                            {'sp': '',
                                                                             'text': 'réspice '
                                                                                     'propítius ad '
                                                                                     'totíus '
                                                                                     'Ecclésiæ '
                                                                                     'sacraméntum,'},
                                                                            {'sp': '',
                                                                             'text': 'et opus '
                                                                                     'salútis '
                                                                                     'humánæ'},
                                                                            {'sp': '',
                                                                             'text': 'perpétuæ '
                                                                                     'dispositiónis '
                                                                                     'efféctu'},
                                                                            {'sp': '',
                                                                             'text': 'tranquíllius '
                                                                                     'operáre;'},
                                                                            {'sp': '',
                                                                             'text': 'totúsque '
                                                                                     'mundus '
                                                                                     'experiátur '
                                                                                     'et vídeat'},
                                                                            {'sp': '',
                                                                             'text': 'deiécta '
                                                                                     'érigi, '
                                                                                     'inveteráta '
                                                                                     'renovári'},
                                                                            {'sp': '',
                                                                             'text': 'et per ipsum '
                                                                                     'Christum '
                                                                                     'redíre ómnia '
                                                                                     'in '
                                                                                     'íntegrum,'},
                                                                            {'sp': '',
                                                                             'text': 'a quo '
                                                                                     'sumpsére '
                                                                                     'princípium.'},
                                                                            {'sp': '',
                                                                             'text': 'Qui vivit et '
                                                                                     'regnat in '
                                                                                     'sǽcula '
                                                                                     'sæculórum.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]},
                                                            'B': {'lines': [{'sp': '',
                                                                             'text': 'Deus, qui '
                                                                                     'nos ad '
                                                                                     'celebrándum '
                                                                                     'paschále '
                                                                                     'sacraméntum'},
                                                                            {'sp': '',
                                                                             'text': 'utriúsque '
                                                                                     'Testaménti '
                                                                                     'páginis '
                                                                                     'ínstruis,'},
                                                                            {'sp': '',
                                                                             'text': 'da nobis '
                                                                                     'intellégere '
                                                                                     'misericórdiam '
                                                                                     'tuam,'},
                                                                            {'sp': '',
                                                                             'text': 'ut ex '
                                                                                     'perceptióne '
                                                                                     'præséntium '
                                                                                     'múnerum'},
                                                                            {'sp': '',
                                                                             'text': 'firma sit '
                                                                                     'exspectátio '
                                                                                     'futurórum.'},
                                                                            {'sp': '',
                                                                             'text': 'Per Christum '
                                                                                     'Dóminum '
                                                                                     'nostrum.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]}}}},
                  'prayers': {'prayer_offerings': 'Súscipe, quǽsumus, Dómine, preces pópuli tui\n'
                                                  'cum oblatiónibus hostiárum,\n'
                                                  'ut, paschálibus initiáta mystériis,\n'
                                                  'ad æternitátis nobis medélam, te operánte, '
                                                  'profíciant.\n'
                                                  'Per Christum.',
                              'communion': 'Pascha nostrum immolátus est Christus;\n'
                                           'ítaque epulémur in ázymis sinceritátis et veritátis, '
                                           'allelúia.',
                              'prayer_after': 'Spíritum nobis, Dómine, tuæ caritátis infúnde,\n'
                                              'ut, quos sacraméntis paschálibus satiásti,\n'
                                              'tua fácias pietáte concórdes.\n'
                                              'Per Christum.',
                              'collect': 'Deus,qui hanc sacratíssimam noctem\n'
                                         'glória domínicæ resurrectiónis illústras,\n'
                                         'éxcita in Ecclésia tua adoptiónis spíritum,\n'
                                         'ut, córpore et mente renováti,\n'
                                         'puram tibi exhibeámus servitútem.\n'
                                         'Per Dóminum.'}},
 'john_baptist_vigil': {'prayers': {'entrance': 'Hic erit magnus coram Dómino, et Spíritu Sancto '
                                                'replébitur adhuc ex útero matris suæ, et multi in '
                                                'nativitáte eius gaudébunt.',
                                    'collect': 'Præsta, quǽsumus, omnípotens Deus, ut família tua '
                                               'per viam salútis incédat, et, beáti Ioánnis '
                                               'Præcursóris hortaménta sectándo, ad eum quem '
                                               'prædíxit, secúra pervéniat, Dóminum nostrum Iesum '
                                               'Christum. Qui tecum.',
                                    'prayer_offerings': 'Múnera pópuli tui, Dómine, propítius '
                                                        'inténde, in beáti Ioánnis Baptístæ '
                                                        'sollemnitáte deláta, et præsta, ut, quæ '
                                                        'mystério gérimus, débitæ servitútis '
                                                        'actióne sectémur. Per Christum.',
                                    'communion': 'Benedíctus Dóminus Deus Israel, quia visitávit '
                                                 'et fecit redemptiónem plebis suæ.',
                                    'prayer_after': 'Sacris dápibus satiátos, beáti Ioánnis '
                                                    'Baptístæ nos, Dómine, præclára comitétur '
                                                    'orátio, et, quem Agnum nostra ablatúrum '
                                                    'crímina nuntiávit, ipsum Fílium tuum poscat '
                                                    'nobis fore placátum. Qui vivit et regnat in '
                                                    'sǽcula sæculórum.'}},
 'peter_paul_vigil': {'prayers': {'entrance': 'Petrus apóstolus et Paulus doctor géntium, ipsi nos '
                                              'docuérunt legem tuam, Dómine.',
                                  'collect': 'Da nobis, quǽsumus, Dómine Deus noster, beatórum '
                                             'apostolórum Petri et Pauli intercessiónibus '
                                             'sublevári, ut, per quos Ecclésiæ tuæ supérni múneris '
                                             'rudiménta donásti, per eos subsídia perpétuæ salútis '
                                             'impéndas. Per Dóminum.',
                                  'prayer_offerings': 'Múnera, Dómine, tuis altáribus adhibémus, '
                                                      'de beatórum apostolórum Petri et Pauli '
                                                      'sollemnitátibus gloriántes, ut quantum '
                                                      'sumus de nostro mérito formidántes, tantum '
                                                      'de tua benignitáte gloriémur salvándi. Per '
                                                      'Christum.',
                                  'communion': 'Simon Ioánnis, díligis me plus his? Dómine, tu '
                                               'ómnia nosti; tu scis, Dómine, quia amo te.',
                                  'prayer_after': 'Cæléstibus sacraméntis, quǽsumus, Dómine, '
                                                  'fidéles tuos corróbora, quos Apostolórum '
                                                  'doctrína illuminásti. Per Christum.'}},
 'assumption_vigil': {'prayers': {'entrance': 'Gloriósa dicta sunt de te, María, quæ hódie '
                                              'exaltáta es super choros Angelórum, et in ætérnum '
                                              'cum Christo triúmphas.',
                                  'collect': 'Deus, qui beátam Vírginem Maríam, eius humilitátem '
                                             'respíciens, ad hanc grátiam evexísti, ut Unigénitus '
                                             'tuus ex ipsa secúndum carnem nascerétur, et hodiérna '
                                             'die superexcellénti glória coronásti, eius nobis '
                                             'précibus concéde, ut, redemptiónis tuæ mystério '
                                             'salváti, a te exaltári mereámur. Per Dóminum.',
                                  'prayer_offerings': 'Súscipe, quǽsumus, Dómine, sacrifícium '
                                                      'placatiónis et laudis, quod in sanctæ Dei '
                                                      'Genetrícis Assumptióne celebrámus, ut ad '
                                                      'véniam nos obtinéndam perdúcat, et in '
                                                      'perpétua gratiárum constítuat actióne. Per '
                                                      'Christum.',
                                  'communion': 'Beáta víscera Maríæ Vírginis, quæ portavérunt '
                                               'ætérni Patris Fílium.',
                                  'prayer_after': 'Mensæ cæléstis partícipes effécti, implorámus '
                                                  'cleméntiam tuam, Dómine Deus noster, ut, qui '
                                                  'Assumptiónem Dei Genetrícis cólimus, a cunctis '
                                                  'malis imminéntibus liberémur. Per Christum.'}},
 'ascension_vigil': {'prayers': {'entrance': 'Regna terræ cantáte Deo, psállite Dómino, qui '
                                             'ascéndit super cælum cæli; magnificéntia et virtus '
                                             'eius in núbibus, allelúia.',
                                 'collect': 'Deus, cuius Fílius hódie in cælos, Apóstolis '
                                            'astántibus, ascéndit, concéde nobis, quǽsumus, ut '
                                            'secúndum eius promíssionem et ille nobíscum semper in '
                                            'terris et nos cum eo in cælo vívere mereámur. Qui '
                                            'tecum.',
                                 'prayer_offerings': 'Deus, cuius Unigénitus, Póntifex noster, '
                                                     'semper vivens sedet ad déxteram tuam ad '
                                                     'interpellándum pro nobis, concéde nos adíre '
                                                     'cum fidúcia ad thronum grátiæ, ut '
                                                     'misericórdiam tuam consequámur. Per '
                                                     'Christum.',
                                 'communion': 'Christus, unam pro peccátis ófferens hóstiam, in '
                                              'sempitérnum sedet in déxtera Dei, allelúia.',
                                 'prayer_after': 'Quæ ex altári tuo, Domine, dona percépimus, '
                                                 'accéndant in córdibus nostris cæléstis pátriæ '
                                                 'desidérium, et quo præcúrsor pro nobis introívit '
                                                 'Salvátor, fáciant nos, eius vestígia sectántes, '
                                                 'conténdere. Qui vivit et regnat in sǽcula '
                                                 'sæculórum.'}},
 'pentecost_vigil': {'prayers': {'entrance': 'Cáritas Dei diffúsa est in córdibus nostris\n'
                                             'per inhabitántem Spíritum eius in nobis, allelúia.',
                                 'collect': 'Omnípotens sempitérne Deus,\n'
                                            'qui paschále sacraméntum\n'
                                            'quinquagínta diérum voluísti mystério continéri,\n'
                                            'præsta, ut, géntium facta dispersióne,\n'
                                            'divisiónes linguárum ad unam confessiónem tui '
                                            'nóminis\n'
                                            'cælésti múnere congregéntur.\n'
                                            'Per Dóminum.\n'
                                            'Vel:\n'
                                            'Præsta, quǽsumus, omnípotens Deus,\n'
                                            'ut claritátis tuæ super nos splendor effúlgeat,\n'
                                            'et lux tuæ lucis corda eórum,\n'
                                            'qui per tuam grátiam sunt renáti,\n'
                                            'Sancti Spíritus illustratióne confírmet.\n'
                                            'Per Dóminum.',
                                 'prayer_offerings': 'Præséntia múnera, quǽsumus, Dómine,\n'
                                                     'Spíritus tui benedictióne perfúnde,\n'
                                                     'ut per ipsa Ecclésiæ tuæ ea diléctio '
                                                     'tribuátur,\n'
                                                     'per quam salutáris mystérii toto mundo '
                                                     'véritas enitéscat.\n'
                                                     'Per Christum.',
                                 'communion': 'Ultimo festivitátis die, stabat Iesus et clamábat '
                                              'dicens:\n'
                                              'Si quis sitit, véniat ad me et bibat, allelúia.',
                                 'prayer_after': 'Hæc nobis, Dómine, múnera sumpta profíciant,\n'
                                                 'ut illo iúgiter Spíritu ferveámus,\n'
                                                 'quem Apóstolis tuis ineffabíliter infudísti.\n'
                                                 'Per Christum.'}}}
apply_missal_parts(SPECIAL_LITURGIES, 'LA', LATIN_MISSAL_SPECIAL_TEXTS)
