# Edit this country's special Masses here, then run tools/build-special-liturgies.py.
from common import country_profile

SPECIAL_LITURGIES = country_profile('VA')
from _vigils import country_vigils
SPECIAL_LITURGIES['vigils'].extend(country_vigils(['epiphany', 'ascension', 'pentecost', 'assumption', 'peter_paul', 'john_baptist']))

from _missal_parts import apply_missal_parts
MISSAL_SPECIAL_TEXTS = {'palm_sunday': {'rites': {'palm_form': '<Processio; introitus sollemnis; introitus simplex.>',
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
apply_missal_parts(SPECIAL_LITURGIES, 'LA', MISSAL_SPECIAL_TEXTS)
