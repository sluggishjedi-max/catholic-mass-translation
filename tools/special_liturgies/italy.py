# Edit this country's special Masses here, then run tools/build-special-liturgies.py.
from common import country_profile

SPECIAL_LITURGIES = country_profile('IT')
from _vigils import country_vigils
SPECIAL_LITURGIES['vigils'].extend(country_vigils(['epiphany', 'ascension', 'pentecost', 'assumption', 'peter_paul', 'john_baptist']))

from _missal_parts import apply_missal_parts
MISSAL_SPECIAL_TEXTS = {'palm_sunday': {'rites': {'palm_form': '<Prima forma: processione; seconda forma: ingresso '
                                        'solenne; terza forma: ingresso semplice.>',
                           'palm_antiphon': '◎ Osannanell’alto dei cieli!',
                           'palm_intro': 'Quindi il sacerdote dice: Nel nome del Padre e del '
                                         'Figlio e dello Spirito Santo, mentre\n'
                                         'tutti si fanno il segno della croce. Dopo il saluto '
                                         'liturgico, il sacerdote rivolge al popolo\n'
                                         'una breve monizione per invitarlo a una celebrazione '
                                         'attiva e consapevole. Lo può fare\n'
                                         'con queste o con altre simili parole:\n'
                                         'Fratelli e sorelle,\n'
                                         'fin dall’inizio della Quaresima\n'
                                         'abbiamo cominciato a preparare i nostri cuori\n'
                                         'attraverso la penitenza e le opere di carità.\n'
                                         'Oggi siamo qui radunati affinché con tutta la Chiesa\n'
                                         'possiamo essere introdotti al mistero pasquale\n'
                                         'del nostro Signore Gesù Cristo, il quale,\n'
                                         'per dare reale compimento alla propria passione e '
                                         'risurrezione,\n'
                                         'entrò nella sua città, Gerusalemme.\n'
                                         'Domenica delle Palme:\n'
                                         'Passione del Signore\n'
                                         'Seguiamo perciò il Signore,\n'
                                         'facendo memoria del suo ingresso salvifico con fede e '
                                         'devozione,\n'
                                         'affinché, resi partecipi per grazia del mistero della '
                                         'croce,\n'
                                         'possiamo aver parte alla risurrezione e alla vita '
                                         'eterna.',
                           'palm_blessing': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'},
                                                         'B': {'KR': '제2양식', 'EN': 'Form 2'}},
                                             'variants': {'A': {'lines': [{'sp': '',
                                                                           'text': 'Dopo la '
                                                                                   'monizione, il '
                                                                                   'sacerdote dice '
                                                                                   'una delle '
                                                                                   'seguenti '
                                                                                   'orazioni con '
                                                                                   'le braccia '
                                                                                   'allargate:'},
                                                                          {'sp': '',
                                                                           'text': 'Preghiamo.'},
                                                                          {'sp': '',
                                                                           'text': 'Dio '
                                                                                   'onnipotente ed '
                                                                                   'eterno,'},
                                                                          {'sp': '',
                                                                           'text': 'benedici ^ '
                                                                                   'questi rami '
                                                                                   '[di ulivo],'},
                                                                          {'sp': '',
                                                                           'text': 'e concedi a '
                                                                                   'noi tuoi '
                                                                                   'fedeli,'},
                                                                          {'sp': '',
                                                                           'text': 'che seguiamo '
                                                                                   'esultanti '
                                                                                   'Cristo, nostro '
                                                                                   'Re e Signore,'},
                                                                          {'sp': '',
                                                                           'text': 'di giungere '
                                                                                   'con lui alla '
                                                                                   'Gerusalemme '
                                                                                   'del cielo.'},
                                                                          {'sp': '',
                                                                           'text': 'Egli vive e '
                                                                                   'regna nei '
                                                                                   'secoli dei '
                                                                                   'secoli.'},
                                                                          {'sp': '◎',
                                                                           'text': 'Amen.'}]},
                                                          'B': {'lines': [{'sp': '',
                                                                           'text': 'Accresci, o '
                                                                                   'Dio, la fede '
                                                                                   'di chi spera '
                                                                                   'in te'},
                                                                          {'sp': '',
                                                                           'text': 'e concedi a '
                                                                                   'noi tuoi '
                                                                                   'fedeli,'},
                                                                          {'sp': '',
                                                                           'text': 'che oggi '
                                                                                   'innalziamo '
                                                                                   'questi rami in '
                                                                                   'onore di '
                                                                                   'Cristo '
                                                                                   'trionfante,'},
                                                                          {'sp': '',
                                                                           'text': 'di rimanere '
                                                                                   'uniti a lui, '
                                                                                   'per portare '
                                                                                   'frutti di '
                                                                                   'opere buone.'},
                                                                          {'sp': '',
                                                                           'text': 'Per Cristo '
                                                                                   'nostro '
                                                                                   'Signore.'},
                                                                          {'sp': '◎',
                                                                           'text': 'Amen.'},
                                                                          {'sp': '',
                                                                           'text': 'E senza dire '
                                                                                   'nulla, asperge '
                                                                                   'i rami con '
                                                                                   'l’acqua '
                                                                                   'benedetta.'}]}}},
                           'palm_procession': 'Dopo il Vangelo, si può tenere una breve omelia. '
                                              'Per dare inizio alla processione, il\n'
                                              'sacerdote o il diacono o un ministro laico può fare '
                                              'una monizione con queste o con altre\n'
                                              'simili parole:\n'
                                              'Imitiamo, fratelli e sorelle, le folle che '
                                              'acclamavano Gesù,\n'
                                              'e procediamo in pace.\n'
                                              'Oppure:\n'
                                              'Procediamo in pace.\n'
                                              'E in questo caso tutti rispondono:\n'
                                              'Nel nome di Cristo. Amen.\n'
                                              '9. Quindi ha inizio, nel modo consueto, la '
                                              'processione verso la chiesa dove si celebrerà\n'
                                              'la Messa. Se si usa l’incenso, precede il '
                                              'turiferario con il turibolo fumigante, quindi '
                                              'l’accolito o un altro ministro con la croce, ornata '
                                              'con rami di palma o di ulivo secondo le\n'
                                              'consuetudini locali, in mezzo a due ministri con le '
                                              'candele accese.\n'
                                              'Segue il diacono con l’Evangeliario, il sacerdote '
                                              'con i ministri e infine tutti i fedeli con i\n'
                                              'rami in mano.\n'
                                              'Mentre si svolge la processione, possono essere '
                                              'cantati dalla schola e dal popolo i seguenti\n'
                                              'canti, o altri adatti, in onore di Cristo Re.\n'
                                              'Antifona 1 Le folle degli Ebrei, portando rami '
                                              'd’ulivo,\n'
                                              'andavano incontro al Signore e acclamavano a gran '
                                              'voce:\n'
                                              'Osanna nell’alto dei cieli.\n'
                                              'L’antifona si può opportunamente ripetere dopo ogni '
                                              'strofa del seguente salmo:\n'
                                              'Salmo 23 Del Signore è la terra e quanto contiene:\n'
                                              'il mondo, con i suoi abitanti.\n'
                                              'È lui che l’ha fondato sui mari\n'
                                              'e sui fiumi l’ha stabilito.\n'
                                              '(Si ripete l’antifona)\n'
                                              'Chi potrà salire il monte del Signore?\n'
                                              'Chi potrà stare nel suo luogo santo?\n'
                                              'Chi ha mani innocenti e cuore puro,\n'
                                              'chi non si rivolge agli idoli,\n'
                                              'chi non giura con inganno.\n'
                                              '(Si ripete l’antifona)\n'
                                              'Egli otterrà benedizione dal Signore,\n'
                                              'giustizia da Dio sua salvezza.\n'
                                              'Ecco la generazione che lo cerca,\n'
                                              'che cerca il tuo volto, Dio di Giacobbe.\n'
                                              '(Si ripete l’antifona)\n'
                                              'Alzate, o porte, i vostri frontali,\n'
                                              'alzatevi, soglie antiche,\n'
                                              'ed entri il re della gloria.\n'
                                              'Chi è questo re della gloria?\n'
                                              'Il Signore forte e valoroso,\n'
                                              'il Signore valoroso in battaglia.\n'
                                              '(Si ripete l’antifona)\n'
                                              'Alzate, o porte, i vostri frontali,\n'
                                              'alzatevi, soglie antiche,\n'
                                              'ed entri il re della gloria.\n'
                                              'Chi è mai questo re della gloria?\n'
                                              'Il Signore degli eserciti è il re della gloria.\n'
                                              '(Si ripete l’antifona)\n'
                                              'Antifona 2 Le folle degli Ebrei stendevano mantelli '
                                              'sulla strada,\n'
                                              'e a gran voce acclamavano: Osanna al Figlio di '
                                              'Davide.\n'
                                              'Benedetto colui che viene nel nome del Signore.\n'
                                              'L’antifona si può opportunamente ripetere dopo ogni '
                                              'strofa del seguente salmo:\n'
                                              'Salmo 46 Popoli tutti, battete le mani!\n'
                                              'Acclamate Dio con grida di gioia,\n'
                                              'perché terribile è il Signore, l’Altissimo,\n'
                                              'grande re su tutta la terra.\n'
                                              '(Si ripete l’antifona)\n'
                                              'Egli ci ha sottomesso i popoli,\n'
                                              'sotto i nostri piedi ha posto le nazioni.\n'
                                              'Ha scelto per noi la nostra eredità,\n'
                                              'orgoglio di Giacobbe che egli ama.\n'
                                              'Ascende Dio tra le acclamazioni,\n'
                                              'il Signore al suono di tromba.\n'
                                              '(Si ripete l’antifona)\n'
                                              'Cantate inni a Dio, cantate inni,\n'
                                              'cantate inni al nostro re, cantate inni;\n'
                                              'perché Dio è re di tutta la terra,\n'
                                              'cantate inni con arte.\n'
                                              '(Si ripete l’antifona)\n'
                                              'Dio regna sulle genti,\n'
                                              'Dio siede sul suo trono santo.\n'
                                              'I capi dei popoli si sono raccolti\n'
                                              'come popolo del Dio di Abramo.\n'
                                              'Sì, a Dio appartengono i poteri della terra:\n'
                                              'egli è eccelso.\n'
                                              '(Si ripete l’antifona)\n'
                                              'Hymnus ad Christum Regem\n'
                                              'Coro: Glória, laus et honor tibi sit, rex Christe '
                                              'redémptor,\n'
                                              'cui pueríle decus prompsit Hosánna pium.\n'
                                              'Tutti ripetono: Glória, laus...\n'
                                              'Coro: Israel es tu rex, Dávidis et ínclita proles,\n'
                                              'nómine qui in Dómini, rex benedícte, venis.\n'
                                              'Tutti ripetono: Glória, laus...\n'
                                              'Coro: Coetus in excélsis te laudat caélicus omnis,\n'
                                              'et mortális homo, et cuncta creáta simul.\n'
                                              'Tutti ripetono: Glória, laus...\n'
                                              'Coro: Plebs Hebraéa tibi cum palmis óbvia venit;\n'
                                              'cum prece, voto, hymnis, ádsumus ecce tibi.\n'
                                              'Tutti ripetono: Glória, laus...\n'
                                              'Coro: Hi tibi passúro solvébant múnia laudis;\n'
                                              'nos tibi regnánti pángimus ecce melos.\n'
                                              'Tutti ripetono: Glória, laus...\n'
                                              'Coro: Hi placuére tibi, pláceat devótio nostra:\n'
                                              'rex bone, rex clemens, cui bona cuncta placent.\n'
                                              'Tutti ripetono: Glória, laus...\n'
                                              'Inno a Cristo Re\n'
                                              'Coro: A te la gloria e il canto, o Cristo, '
                                              'redentore:\n'
                                              'l’osanna dei fanciulli ti onora, re di Sion.\n'
                                              'Tutti ripetono: A te la gloria...\n'
                                              'Coro: Tu sei il grande re d’Israele,\n'
                                              'il Figlio e la stirpe di David,\n'
                                              'il re benedetto che viene\n'
                                              'nel nome del Signore.\n'
                                              'Tutti ripetono: A te la gloria...\n'
                                              'Coro: Il coro degli angeli in cielo\n'
                                              'ti loda e ti canta in eterno:\n'
                                              'gli uomini e tutto il creato\n'
                                              'inneggiano al tuo nome.\n'
                                              'Tutti ripetono: A te la gloria...\n'
                                              'Coro: Il popolo santo di Dio\n'
                                              'stendeva al tuo passo le palme:\n'
                                              'noi oggi veniamo a te incontro\n'
                                              'con cantici e preghiere.\n'
                                              'Tutti ripetono: A te la gloria...\n'
                                              'Coro: A te che salivi alla morte\n'
                                              'levavano un canto di lode;\n'
                                              'a te, nostro re vittorioso,\n'
                                              's’innalza il canto nuovo.\n'
                                              'Tutti ripetono: A te la gloria...\n'
                                              'Coro: Quei canti ti furono accetti:\n'
                                              'le nostre preghiere ora accogli,\n'
                                              're buono e clemente che ami\n'
                                              'qualsiasi cosa buona.\n'
                                              'Tutti ripetono: A te la gloria...',
                           'palm_gospel': {'byCycle': {'A': {'citation': 'Mt 21, 1-11',
                                                             'lines': [{'rubric': 'Si proclama il '
                                                                                  'Vangelo '
                                                                                  'dell’ingresso '
                                                                                  'del Signore a '
                                                                                  'Gerusalemme: Mt '
                                                                                  '21, 1-11'}]},
                                                       'B': {'citation': 'Mc 11, 1-10 oppure Gv '
                                                                         '12, 12-16',
                                                             'lines': [{'rubric': 'Si proclama il '
                                                                                  'Vangelo '
                                                                                  'dell’ingresso '
                                                                                  'del Signore a '
                                                                                  'Gerusalemme: Mc '
                                                                                  '11, 1-10 oppure '
                                                                                  'Gv 12, 12-16'}]},
                                                       'C': {'citation': 'Lc 19, 28-40',
                                                             'lines': [{'rubric': 'Si proclama il '
                                                                                  'Vangelo '
                                                                                  'dell’ingresso '
                                                                                  'del Signore a '
                                                                                  'Gerusalemme: Lc '
                                                                                  '19, 28-40'}]}}}},
                 'prayers': {'entrance': 'Sei giorni prima della festa solenne di Pasqua,\n'
                                         'Sal 23, 9-10 il Signore entrò in Gerusalemme.\n'
                                         'I fanciulli gli andarono incontro\n'
                                         'con i rami di palma nelle mani.\n'
                                         'A gran voce acclamavano:\n'
                                         '* Osanna nell’alto dei cieli.\n'
                                         'Benedetto tu che vieni con l’immensa tua misericordia.\n'
                                         'Alzate, o porte i vostri archi,\n'
                                         'alzatevi soglie antiche,\n'
                                         'ed entri il re della gloria.\n'
                                         'Chi è questo re della gloria?\n'
                                         'Il Signore degli eserciti è il re della gloria.\n'
                                         '* Osanna nell’alto dei cieli.\n'
                                         'Benedetto tu che vieni con l’immensa tua misericordia.',
                             'collect': 'Dio onnipotente ed eterno,\n'
                                        'che hai dato come modello agli uomini\n'
                                        'il Cristo tuo Figlio, nostro Salvatore,\n'
                                        'fatto uomo e umiliato fino alla morte di croce,\n'
                                        'fa’ che abbiamo sempre presente\n'
                                        'il grande insegnamento della sua passione,\n'
                                        'per partecipare alla gloria della risurrezione.\n'
                                        'Egli è Dio, e vive e regna con te,\n'
                                        'nell’unità dello Spirito Santo,\n'
                                        'per tutti i secoli dei secoli.',
                             'prayer_offerings': 'Dio onnipotente,\n'
                                                 'la passione del tuo unico Figlio\n'
                                                 'affretti il giorno del tuo perdono;\n'
                                                 'non lo meritiamo per le nostre opere,\n'
                                                 'ma l’ottenga dalla tua misericordia\n'
                                                 'questo unico mirabile sacrificio.\n'
                                                 'Per Cristo nostro Signore.',
                             'communion': 'Padre mio, se questo calice non può passare via\n'
                                          'senza che io lo beva,\n'
                                          'si compia la tua volontà.',
                             'prayer_after': 'O Padre, che ci hai nutriti con i tuoi santi doni,\n'
                                             'e con la morte del tuo Figlio\n'
                                             'ci fai sperare nei beni in cui crediamo,\n'
                                             'fa’ che per la sua risurrezione\n'
                                             'possiamo giungere alla meta della nostra speranza.\n'
                                             'Per Cristo nostro Signore.'},
                 'sourceParts': {'IT': {'palm_gospel': {'start': '^Vangelo(?:[ (]|$)',
                                                        'stop': '^(?:Prima lettura|I '
                                                                'lettura|Lettura prima)',
                                                        'kind': 'gospel'}}}},
 'holy_thursday': {'rites': {'thursday_intro': '<La Messa vespertina «Cena del Signore» si celebra '
                                               'nelle ore serali, valutando il momento più '
                                               'opportuno, con la piena partecipazione dell’intera '
                                               'comunità locale; i sacerdoti e\n'
                                               'i ministri vi svolgono ciascuno il proprio '
                                               'ufficio.\n'
                                               '2. Tutti i sacerdoti possono concelebrare anche se '
                                               'in questo giorno hanno già concelebrato la Messa '
                                               'crismale o se, per il bene dei fedeli, devono '
                                               'celebrare una seconda Messa.\n'
                                               '3. L’Ordinario del luogo potrà permettere che si '
                                               'celebri, nelle chiese e negli oratori in cui\n'
                                               'sia richiesto da una effettiva ragione pastorale, '
                                               'una seconda Messa nelle ore vespertine e,\n'
                                               'in caso di vera necessità, anche nelle ore '
                                               'mattutine, ma soltanto per quei fedeli che non\n'
                                               'possono partecipare in alcun modo alla Messa '
                                               'vespertina. Tuttavia si presti attenzione a\n'
                                               'che tali celebrazioni non siano compiute a favore '
                                               'di singole persone o gruppi particolari e\n'
                                               'di piccole dimensioni e che non sminuiscano '
                                               'l’importanza della Messa vespertina.\n'
                                               '4. La santa comunione ai fedeli può essere '
                                               'distribuita soltanto durante la Messa; ai malati\n'
                                               'invece si potrà portare in qualunque ora del '
                                               'giorno.\n'
                                               '5. L’altare sia ornato di fiori con quella '
                                               'moderazione che conviene all’indole di questo\n'
                                               'giorno. Il tabernacolo deve assolutamente essere '
                                               'vuoto; per la comunione del clero e\n'
                                               'del popolo si consacri in questa Messa pane in '
                                               'quantità sufficiente per oggi e per il\n'
                                               'giorno seguente.>',
                             'washing_feet': 'Una volta terminata l’omelia, dove lo consigliano '
                                             'motivi pastorali, si procede alla\n'
                                             'lavanda dei piedi.\n'
                                             '11. Coloro che tra il popolo di Dio sono stati '
                                             'scelti per questo rito vengono accompagnati\n'
                                             'dai ministri alle sedie preparate in un luogo '
                                             'adatto. Il sacerdote (deposta, se necessario, la\n'
                                             'casula) si porta davanti a ciascuno di essi e, '
                                             'aiutato dai ministri, versa dell’acqua sui loro\n'
                                             'piedi e li asciuga.\n'
                                             '12. Nel frattempo si cantano alcune delle seguenti '
                                             'antifone o altri canti adatti.\n'
                                             'Antifona 1 Il Signore si alzò da tavola,\n'
                                             'Cf. Gv 13, 4.5.15 versò dell’acqua nel catino\n'
                                             'e cominciò a lavare i piedi dei discepoli:\n'
                                             'a loro volle lasciare questo esempio.\n'
                                             'Antifona 2 Il Signore Gesù, durante la cena con i '
                                             'suoi discepoli,\n'
                                             'Cf. Gv 13, 12.13.15 lavò loro i piedi e disse:\n'
                                             '«Capite quello che ho fatto per voi io, il Signore e '
                                             'il Maestro?\n'
                                             'Vi ho dato un esempio perché anche voi facciate\n'
                                             'come io ho fatto a voi».\n'
                                             'Antifona 3 «Signore, tu lavi i piedi a me?».\n'
                                             'Cf. Gv 13, 6.7.8 Rispose Gesù: «Se non ti laverò, '
                                             'non avrai parte con me».\n'
                                             'Venne dunque da Simon Pietro, e questi gli disse:\n'
                                             '– «Signore, tu lavi i piedi a me?».\n'
                                             '«Quello che io faccio, tu ora non lo capisci,\n'
                                             'lo comprenderai dopo».\n'
                                             '– «Signore, tu lavi i piedi a me?».\n'
                                             'Antifona 4 Se io, il Signore e il Maestro, ho lavato '
                                             'i piedi a voi,\n'
                                             'Gv 13, 14 anche voi dovete lavare i piedi gli uni '
                                             'agli altri.\n'
                                             'Antifona 5 «Da questo tutti sapranno che siete miei '
                                             'discepoli:\n'
                                             'Gv 13, 35 se avete amore gli uni per gli altri».\n'
                                             'Gesù disse ai suoi discepoli:\n'
                                             '– «Da questo tutti sapranno che siete miei '
                                             'discepoli:\n'
                                             'se avete amore gli uni per gli altri».\n'
                                             'Antifona 6 «Vi do un comandamento nuovo: che vi '
                                             'amiate gli uni gli altri,\n'
                                             'Gv 13, 34 come io ho amato voi», dice il Signore.\n'
                                             'Antifona 7 Rimangano in voi la fede, la speranza e '
                                             'la carità.\n'
                                             'Cf. 1 Cor 13, 13 Ma più grande di tutte è la '
                                             'carità!\n'
                                             'Ora rimangono queste tre cose: la fede, la speranza '
                                             'e la carità.\n'
                                             'Ma più grande di tutte è la carità!\n'
                                             '– Rimangano in voi la fede, la speranza e la carità.',
                             'thursday_offertory': 'All’inizio della Liturgia Eucaristica, si può '
                                                   'disporre la processione dei fedeli, durante la '
                                                   'quale possono essere presentati, con il pane e '
                                                   'il vino, doni per i poveri. Nel\n'
                                                   'frattempo si esegue il canto seguente o un '
                                                   'altro canto adatto.\n'
                                                   'Ant. Ubi cáritas est vera, Deus ibi est.\n'
                                                   'Congregávit nos in unum Christi amor.\n'
                                                   'Exsultémus et in ipso iucundémur.\n'
                                                   'Timeámus et amémus Deum vivum.\n'
                                                   'Et ex corde diligámus nos sincéro.\n'
                                                   'Ant. Ubi cáritas est vera, Deus ibi est.\n'
                                                   'Simul ergo cum in unum congregámur:\n'
                                                   'Ne nos mente dividámur, caveámus.\n'
                                                   'Cessent iúrgia malígna, cessent lites.\n'
                                                   'Et in médio nostri sit Christus Deus.\n'
                                                   'Ant. Ubi cáritas est vera, Deus ibi est.\n'
                                                   'Simul quoque cum beátis videámus,\n'
                                                   'Gloriánter vultum tuum, Christe Deus:\n'
                                                   'Gáudium, quod est imménsum atque probum,\n'
                                                   'Saécula per infínita saeculórum. Amen.\n'
                                                   'Oppure:\n'
                                                   'Ant. Dov’è carità e amore, lì c’è Dio.\n'
                                                   'Ci ha riuniti tutti insieme Cristo, amore.\n'
                                                   'Rallegriamoci, esultiamo nel Signore!\n'
                                                   'Temiamo e amiamo il Dio vivente,\n'
                                                   'e amiamoci tra noi con cuore sincero.\n'
                                                   'Ant. Dov’è carità e amore, lì c’è Dio.\n'
                                                   'Noi formiamo qui riuniti un solo corpo:\n'
                                                   'evitiamo di dividerci tra noi;\n'
                                                   'via le lotte maligne, via le liti,\n'
                                                   'e regni in mezzo a noi Cristo Dio.\n'
                                                   'Ant. Dov’è carità e amore, lì c’è Dio.\n'
                                                   'Fa’ che un giorno contempliamo il tuo volto\n'
                                                   'nella gloria dei beati, Cristo Dio.\n'
                                                   'E sarà gioia immensa, gioia vera:\n'
                                                   'durerà per tutti i secoli, senza fine.',
                             'reposition': 'Detta l’orazione dopo la comunione, il sacerdote, '
                                           'stando in piedi, infonde e benedice\n'
                                           'l’incenso nel turibolo e, genuflesso, per tre volte '
                                           'incensa il Santissimo Sacramento. Quindi, indossato il '
                                           'velo omerale di colore bianco, si alza, prende la '
                                           'pisside e la ricopre con le\n'
                                           'estremità del velo.\n'
                                           '37. Si ordina la processione con la quale il '
                                           'Santissimo Sacramento è portato attraverso la\n'
                                           'chiesa con torce e incenso al luogo della reposizione, '
                                           'preparato in una cappella della chiesa o in un’altra '
                                           'sua parte convenientemente ornata. Apre la processione '
                                           'un ministro laico\n'
                                           'con la croce tra due ceri accesi. Seguono poi altri '
                                           'ministri con delle candele accese. Davanti al '
                                           'sacerdote che porta il Santissimo Sacramento procede '
                                           'il turiferario con il turibolo fumigante. Intanto si '
                                           'canta l’inno Pange, lingua (eccetto le due ultime '
                                           'strofe) o un altro canto eucaristico.\n'
                                           '38. Quando la processione è giunta al luogo della '
                                           'reposizione, il sacerdote, con l’aiuto del\n'
                                           'diacono se è necessario, depone la pisside nel '
                                           'tabernacolo, la cui porta rimane aperta.\n'
                                           'Quindi, infuso l’incenso, in ginocchio incensa il '
                                           'Santissimo Sacramento, mentre si canta\n'
                                           'il Tantum ergo sacramentum o un altro canto '
                                           'eucaristico. Quindi il diacono o lo stesso\n'
                                           'sacerdote chiude la porta del tabernacolo.\n'
                                           '39. Dopo alcuni istanti di adorazione silenziosa, il '
                                           'sacerdote e i ministri, fatta la genuflessione, '
                                           'ritornano in sacrestia.\n'
                                           '40. Al momento opportuno si spoglia l’altare e, se è '
                                           'possibile, si rimuovono le croci dalla\n'
                                           'chiesa. È bene che si velino le croci che rimangono in '
                                           'chiesa.\n'
                                           '41. Coloro che hanno partecipato alla Messa vespertina '
                                           '«Cena del Signore» non sono\n'
                                           'tenuti alla celebrazione dei Vespri.\n'
                                           '42. Tenendo conto dei luoghi e delle circostanze, si '
                                           'esortino i fedeli a rimanere in adorazione per un '
                                           'congruo tempo della notte davanti al Santissimo '
                                           'Sacramento riposto\n'
                                           'nel tabernacolo, a condizione che, dopo la mezzanotte, '
                                           'questa adorazione avvenga senza alcuna solennità.',
                             'thursday_end_form': '<Nelle chiese in cui il Venerdì Santo non si '
                                                  'celebra la Passione del Signore, si conclude la '
                                                  'Messa nel modo consueto.>'},
                   'prayers': {'entrance': 'Non ci sia per noi altro vanto\n'
                                           'che nella croce del Signore nostro Gesù Cristo.\n'
                                           'Egli è nostra salvezza, vita e risurrezione;\n'
                                           'per mezzo di lui siamo stati salvati e liberati.',
                               'collect': 'O Dio, che ci hai riuniti per celebrare la santa Cena\n'
                                          'nella quale il tuo unico Figlio,\n'
                                          'prima di consegnarsi alla morte,\n'
                                          'affidò alla Chiesa il nuovo ed eterno sacrificio,\n'
                                          'convito nuziale del suo amore,\n'
                                          'fa’ che dalla partecipazione a così grande mistero\n'
                                          'attingiamo pienezza di carità e di vita.\n'
                                          'Per il nostro Signore Gesù Cristo, tuo Figlio, che è '
                                          'Dio,\n'
                                          'e vive e regna con te, nell’unità dello Spirito Santo,\n'
                                          'per tutti i secoli dei secoli.',
                               'prayer_offerings': 'Concedi a noi tuoi fedeli, o Padre,\n'
                                                   'di partecipare con viva fede ai santi '
                                                   'misteri,\n'
                                                   'poiché, ogni volta che celebriamo questo '
                                                   'memoriale\n'
                                                   'del sacrificio del tuo Figlio,\n'
                                                   'si compie l’opera della nostra redenzione.\n'
                                                   'Per Cristo nostro Signore.',
                               'communion': '«Questo è il mio Corpo, che è per voi;\n'
                                            'questo calice è la nuova alleanza nel mio Sangue»,\n'
                                            'dice il Signore.\n'
                                            '«Ogni volta che ne mangiate e ne bevete,\n'
                                            'fate questo in memoria di me».',
                               'prayer_after': 'Padre onnipotente,\n'
                                               'che nella vita terrena\n'
                                               'ci nutri alla Cena del tuo Figlio,\n'
                                               'accoglici come tuoi commensali\n'
                                               'al banchetto glorioso del cielo.\n'
                                               'Per Cristo nostro Signore.\n'
                                               'Reposizione del Santissimo Sacramento'},
                   'eucharistEdits': {'IT': [{'form': '1',
                                              'section': 'form',
                                              'from': 'In comunione con tutta la Chiesa,',
                                              'to': 'In comunione con tutta la Chiesa,\n'
                                                    'mentre celebriamo il giorno santissimo\n'
                                                    'nel quale il Signore nostro Gesù Cristo\n'
                                                    'fu consegnato alla morte per noi,'},
                                             {'form': '1',
                                              'section': 'form',
                                              'from': 'noi tuoi ministri e tutta la tua famiglia:',
                                              'to': 'noi tuoi ministri e tutta la tua famiglia\n'
                                                    'nel giorno in cui il Signore nostro Gesù '
                                                    'Cristo\n'
                                                    'consegnò ai suoi discepoli\n'
                                                    'il mistero del suo Corpo e del suo Sangue,\n'
                                                    'perché lo celebrassero in sua memoria:'}]}},
 'good_friday': {'rites': {'friday_intro': '<In questo giorno e nel seguente, la Chiesa, per '
                                           'antichissima tradizione, non celebra\n'
                                           'nessun sacramento, a eccezione della Penitenza e '
                                           'dell’Unzione degli infermi.\n'
                                           '2. Oggi la santa comunione si distribuisce ai fedeli '
                                           'solo durante la celebrazione della\n'
                                           'Passione del Signore; ai malati, che non possono '
                                           'partecipare a questa celebrazione, si può\n'
                                           'portare a qualunque ora del giorno.\n'
                                           '3. L’altare sia interamente spoglio: senza croce, '
                                           'senza candelieri e senza tovaglie.\n'
                                           'Celebrazione della Passione del Signore\n'
                                           '4. Nelle ore pomeridiane di questo giorno, e '
                                           'precisamente verso le quindici, a meno che\n'
                                           'non si scelga, per ragioni pastorali, un’ora più '
                                           'tarda, ha luogo la celebrazione della Passione\n'
                                           'del Signore. Essa è costituita da tre parti: Liturgia '
                                           'della Parola, Adorazione della Santa\n'
                                           'Croce e Santa Comunione.\n'
                                           '5. Il sacerdote e, se è presente, il diacono, '
                                           'indossate le vesti di colore rosso come per la\n'
                                           'Messa, si recano in silenzio all’altare e, fatta la '
                                           'riverenza, si prostrano a terra o, secondo\n'
                                           'l’opportunità, si inginocchiano e, ancora in silenzio, '
                                           'pregano per alcuni istanti. Tutti gli\n'
                                           'altri si mettono in ginocchio.>',
                           'friday_opening': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'},
                                                          'B': {'KR': '제2양식', 'EN': 'Form 2'}},
                                              'variants': {'A': {'lines': [{'sp': '',
                                                                            'text': 'Quindi, il '
                                                                                    'sacerdote con '
                                                                                    'i ministri va '
                                                                                    'alla sede da '
                                                                                    'dove, rivolto '
                                                                                    'al popolo, '
                                                                                    'omettendo'},
                                                                           {'sp': '',
                                                                            'text': 'l’invito '
                                                                                    'Preghiamo, '
                                                                                    'dice, con le '
                                                                                    'braccia '
                                                                                    'allargate, '
                                                                                    'una delle '
                                                                                    'seguenti '
                                                                                    'orazioni.'},
                                                                           {'sp': '',
                                                                            'text': 'Orazione'},
                                                                           {'sp': '',
                                                                            'text': 'Ricordati, o '
                                                                                    'Padre, della '
                                                                                    'tua '
                                                                                    'misericordia'},
                                                                           {'sp': '',
                                                                            'text': 'e santifica '
                                                                                    'con eterna '
                                                                                    'protezione i '
                                                                                    'tuoi fedeli,'},
                                                                           {'sp': '',
                                                                            'text': 'per i quali '
                                                                                    'Cristo, tuo '
                                                                                    'Figlio,'},
                                                                           {'sp': '',
                                                                            'text': 'ha istituito '
                                                                                    'nel suo '
                                                                                    'sangue il '
                                                                                    'mistero '
                                                                                    'pasquale.'},
                                                                           {'sp': '',
                                                                            'text': 'Egli vive e '
                                                                                    'regna nei '
                                                                                    'secoli dei '
                                                                                    'secoli.'},
                                                                           {'sp': '◎',
                                                                            'text': 'Amen.'}]},
                                                           'B': {'lines': [{'sp': '',
                                                                            'text': 'O Dio, che '
                                                                                    'nella '
                                                                                    'passione di '
                                                                                    'Cristo nostro '
                                                                                    'Signore'},
                                                                           {'sp': '',
                                                                            'text': 'ci hai '
                                                                                    'liberati '
                                                                                    'dalla morte,'},
                                                                           {'sp': '',
                                                                            'text': 'eredità '
                                                                                    'dell’antico '
                                                                                    'peccato'},
                                                                           {'sp': '',
                                                                            'text': 'trasmessa a '
                                                                                    'tutto il '
                                                                                    'genere '
                                                                                    'umano,'},
                                                                           {'sp': '',
                                                                            'text': 'rinnovaci a '
                                                                                    'somiglianza '
                                                                                    'del tuo '
                                                                                    'Figlio;'},
                                                                           {'sp': '',
                                                                            'text': 'e come '
                                                                                    'abbiamo '
                                                                                    'portato in '
                                                                                    'noi,'},
                                                                           {'sp': '',
                                                                            'text': 'per la nostra '
                                                                                    'nascita,'},
                                                                           {'sp': '',
                                                                            'text': 'l’immagine '
                                                                                    'dell’uomo '
                                                                                    'terreno,'},
                                                                           {'sp': '',
                                                                            'text': 'così per '
                                                                                    'l’azione del '
                                                                                    'tuo Spirito'},
                                                                           {'sp': '',
                                                                            'text': 'fa’ che '
                                                                                    'portiamo '
                                                                                    'l’immagine '
                                                                                    'dell’uomo '
                                                                                    'celeste.'},
                                                                           {'sp': '',
                                                                            'text': 'Per Cristo '
                                                                                    'nostro '
                                                                                    'Signore.'},
                                                                           {'sp': '◎',
                                                                            'text': 'Amen.'},
                                                                           {'sp': '',
                                                                            'text': 'Prima '
                                                                                    'parte:Liturgia '
                                                                                    'della '
                                                                                    'Parola'}]}}},
                           'cross_showing': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'},
                                                         'B': {'KR': '제2양식', 'EN': 'Form 2'}},
                                             'variants': {'A': {'lines': [{'sp': '',
                                                                           'text': 'Il diacono con '
                                                                                   'i ministri, o '
                                                                                   'un altro '
                                                                                   'ministro '
                                                                                   'idoneo, si '
                                                                                   'reca nella '
                                                                                   'sacrestia, '
                                                                                   'dalla quale,'},
                                                                          {'sp': '',
                                                                           'text': 'attraverso la '
                                                                                   'chiesa, '
                                                                                   'accompagnato '
                                                                                   'da due '
                                                                                   'ministri con '
                                                                                   'le candele '
                                                                                   'accese, porta '
                                                                                   'processionalmente '
                                                                                   'la Croce, '
                                                                                   'coperta da un '
                                                                                   'velo violaceo, '
                                                                                   'fino al centro '
                                                                                   'del '
                                                                                   'presbiterio. '
                                                                                   'Il sacerdote,'},
                                                                          {'sp': '',
                                                                           'text': 'davanti '
                                                                                   'all’altare, '
                                                                                   'rivolto verso '
                                                                                   'il popolo, '
                                                                                   'riceve la '
                                                                                   'Croce, la '
                                                                                   'scopre '
                                                                                   'alquanto nella '
                                                                                   'parte '
                                                                                   'superiore e la '
                                                                                   'eleva, '
                                                                                   'intonando Ecco '
                                                                                   'il legno della '
                                                                                   'Croce, aiutato '
                                                                                   'nel canto dal '
                                                                                   'diacono o, se '
                                                                                   'è'},
                                                                          {'sp': '',
                                                                           'text': 'il caso, dalla '
                                                                                   'schola. Tutti '
                                                                                   'rispondono: '
                                                                                   'Venite, '
                                                                                   'adoriamo. '
                                                                                   'Finito il '
                                                                                   'canto, tutti '
                                                                                   'si '
                                                                                   'inginocchiano '
                                                                                   'e in silenzio '
                                                                                   'si fermano in '
                                                                                   'adorazione per '
                                                                                   'alcuni '
                                                                                   'istanti, '
                                                                                   'mentre il '
                                                                                   'sacerdote, in '
                                                                                   'piedi,'},
                                                                          {'sp': '',
                                                                           'text': 'tiene elevata '
                                                                                   'la Croce.'},
                                                                          {'sp': '',
                                                                           'text': 'Ecco il legno '
                                                                                   'della Croce,'},
                                                                          {'sp': '',
                                                                           'text': 'al quale fu '
                                                                                   'appeso il '
                                                                                   'Cristo,'},
                                                                          {'sp': '',
                                                                           'text': 'Salvatore del '
                                                                                   'mondo.'},
                                                                          {'sp': '◎',
                                                                           'text': 'Venite, '
                                                                                   'adoriamo.'},
                                                                          {'sp': '',
                                                                           'text': 'Quindi il '
                                                                                   'sacerdote '
                                                                                   'scopre il '
                                                                                   'braccio destro '
                                                                                   'della Croce ed '
                                                                                   'elevandola '
                                                                                   'intona per la '
                                                                                   'seconda volta '
                                                                                   'Ecco il legno '
                                                                                   'della Croce. '
                                                                                   'Tutto si '
                                                                                   'svolge nel '
                                                                                   'modo indicato '
                                                                                   'sopra.'},
                                                                          {'sp': '',
                                                                           'text': 'Infine, scopre '
                                                                                   'totalmente la '
                                                                                   'Croce ed '
                                                                                   'elevandola '
                                                                                   'introduce per '
                                                                                   'la terza volta '
                                                                                   'l’invito Ecco'},
                                                                          {'sp': '',
                                                                           'text': 'il legno della '
                                                                                   'Croce. Tutto '
                                                                                   'si svolge come '
                                                                                   'la prima '
                                                                                   'volta.'}]},
                                                          'B': {'lines': [{'sp': '',
                                                                           'text': '16. Il '
                                                                                   'sacerdote o il '
                                                                                   'diacono con i '
                                                                                   'ministri, o un '
                                                                                   'altro ministro '
                                                                                   'idoneo, si '
                                                                                   'reca '
                                                                                   'all’ingresso'},
                                                                          {'sp': '',
                                                                           'text': 'della chiesa, '
                                                                                   'dove prende la '
                                                                                   'Croce non '
                                                                                   'velata. I '
                                                                                   'ministri '
                                                                                   'portano le '
                                                                                   'candele '
                                                                                   'accese. Si '
                                                                                   'ordina quindi '
                                                                                   'la processione '
                                                                                   'attraverso la '
                                                                                   'chiesa fino al '
                                                                                   'presbiterio. '
                                                                                   'Vicino '
                                                                                   'all’ingresso, '
                                                                                   'in'},
                                                                          {'sp': '',
                                                                           'text': 'mezzo alla '
                                                                                   'chiesa e prima '
                                                                                   'di accedere al '
                                                                                   'presbiterio, '
                                                                                   'chi porta la '
                                                                                   'Croce la '
                                                                                   'eleva, '
                                                                                   'cantando'},
                                                                          {'sp': '',
                                                                           'text': 'Ecco il legno '
                                                                                   'della Croce, e '
                                                                                   'tutti '
                                                                                   'rispondono: '
                                                                                   'Venite, '
                                                                                   'adoriamo, e '
                                                                                   'dopo ogni '
                                                                                   'risposta si'},
                                                                          {'sp': '',
                                                                           'text': 'inginocchiano '
                                                                                   'e adorano in '
                                                                                   'silenzio per '
                                                                                   'alcuni '
                                                                                   'istanti, come '
                                                                                   'descritto '
                                                                                   'precedentemente.'},
                                                                          {'sp': '',
                                                                           'text': 'Adorazione '
                                                                                   'della Santa '
                                                                                   'Croce'},
                                                                          {'sp': '',
                                                                           'text': '17. Quindi, '
                                                                                   'insieme a due '
                                                                                   'ministri con '
                                                                                   'le candele '
                                                                                   'accese, il '
                                                                                   'sacerdote o il '
                                                                                   'diacono porta '
                                                                                   'la'},
                                                                          {'sp': '',
                                                                           'text': 'Croce '
                                                                                   'all’ingresso '
                                                                                   'del '
                                                                                   'presbiterio o '
                                                                                   'in un altro '
                                                                                   'luogo adatto e '
                                                                                   'qui la depone, '
                                                                                   'oppure la'},
                                                                          {'sp': '',
                                                                           'text': 'consegna ai '
                                                                                   'ministri '
                                                                                   'perché, '
                                                                                   'collocate le '
                                                                                   'candele alla '
                                                                                   'destra e alla '
                                                                                   'sinistra della '
                                                                                   'Croce, la'},
                                                                          {'sp': '',
                                                                           'text': 'sostengano.'}]}}},
                           'cross_adoration': 'Per l’adorazione della Croce, tolte la casula e le '
                                              'scarpe secondo l’opportunità, si avvicina per primo '
                                              'il solo sacerdote celebrante. Quindi avanzano '
                                              'processionalmente il clero,\n'
                                              'i ministri laici e i fedeli, facendo riverenza alla '
                                              'Croce con una semplice genuflessione o\n'
                                              'un altro segno adatto, secondo l’uso della regione, '
                                              'come per esempio baciando la Croce.\n'
                                              '19. Per l’adorazione si presenta un’unica Croce. Se '
                                              'a causa della partecipazione del popolo\n'
                                              'non tutti potessero accostarsi personalmente, il '
                                              'sacerdote, dopo che una parte del clero e\n'
                                              'dei fedeli ha compiuto l’adorazione, prende la '
                                              'Croce e, stando in mezzo, davanti all’altare, con '
                                              'brevi parole invita l’assemblea all’adorazione '
                                              'della Santa Croce e poi, per qualche\n'
                                              'istante, tiene elevata la Croce, perché possa '
                                              'essere adorata in silenzio dai fedeli.\n'
                                              'Passione del Signore\n'
                                              '20. Mentre si fa l’adorazione della Santa Croce, si '
                                              'cantano l’antifona Adoriamo la tua\n'
                                              'Croce, i Lamenti del Signore, l’inno Crux fidelis, '
                                              'o altri canti adatti. Tutti coloro che hanno '
                                              'compiuto l’adorazione si siedono.\n'
                                              'Canti per l’adorazione della Santa Croce\n'
                                              'Ant. Adoriamo la tua Croce, o Signore,\n'
                                              'lodiamo e glorifichiamo la tua santa risurrezione.\n'
                                              'Dal legno della Croce\n'
                                              'è venuta la gioia in tutto il mondo.\n'
                                              'Cf. Sal 66, 2 Dio abbia pietà di noi e ci '
                                              'benedica:\n'
                                              'su di noi faccia splendere il suo volto\n'
                                              'e abbia misericordia di noi.\n'
                                              'E si ripete l’antifona: Adoriamo...\n'
                                              'Lamenti del Signore I\n'
                                              'Le parti che spettano ai singoli cori sono indicate '
                                              'con il numero 1 (primo coro) e 2 (secondo coro); '
                                              'quelle che devono essere cantate, invece, da '
                                              'entrambi, sono indicate con 1 e\n'
                                              '2. Alcuni versetti possono essere cantati anche da '
                                              'due cantori.\n'
                                              '1 e 2 Popolo mio che male ti ho fatto?\n'
                                              'In che ti ho provocato? Dammi risposta.\n'
                                              '1 Io ti ho guidato fuori dall’Egitto,\n'
                                              'e tu hai preparato la Croce al tuo Salvatore.\n'
                                              '1 Hágios o Theós.\n'
                                              '2 Sanctus Deus.\n'
                                              '1 Hágios Ischyrós.\n'
                                              '2 Sanctus Fortis.\n'
                                              '1 Hágios Athánatos, eléison himás.\n'
                                              '2 Sanctus Immortális, miserére nobis.\n'
                                              '1 e 2 Io ti ho guidato quarant’anni nel deserto,\n'
                                              'ti ho sfamato con manna,\n'
                                              'ti ho introdotto in un paese fecondo,\n'
                                              'e tu hai preparato la Croce al tuo Salvatore.\n'
                                              '1 Hágios o Theós.\n'
                                              '2 Sanctus Deus.\n'
                                              '1 Hágios Ischyrós.\n'
                                              '2 Sanctus Fortis.\n'
                                              '1 Hágios Athánatos, eléison himás.\n'
                                              '2 Sanctus Immortális, miserére nobis.\n'
                                              '1 e 2 Che altro avrei dovuto fare e non ti ho '
                                              'fatto?\n'
                                              'Io ti ho piantato, mia scelta e florida vigna,\n'
                                              'ma tu mi sei divenuta aspra e amara:\n'
                                              'poiché mi hai spento la sete con aceto\n'
                                              'e hai piantato una lancia nel petto del tuo '
                                              'Salvatore.\n'
                                              '1 Hágios o Theós.\n'
                                              '2 Sanctus Deus.\n'
                                              '1 Hágios Ischyrós.\n'
                                              '2 Sanctus Fortis.\n'
                                              '1 Hágios Athánatos, eléison himás.\n'
                                              '2 Sanctus Immortális, miserére nobis.\n'
                                              'Lamenti del Signore II\n'
                                              'Cantori: Io per te ho flagellato l’Egitto e i suoi '
                                              'primogeniti,\n'
                                              'e tu mi hai consegnato per esser flagellato.\n'
                                              '1 e 2 ripetono: Popolo mio, che male ti ho fatto?\n'
                                              'In che ti ho provocato? Dammi risposta.\n'
                                              'Cantori: Io ti ho guidato fuori dall’Egitto\n'
                                              'e ho sommerso il faraone nel Mar Rosso,\n'
                                              'e tu mi hai consegnato ai capi dei sacerdoti.\n'
                                              '1 e 2 ripetono: Popolo mio...\n'
                                              'Cantori: Io ho aperto davanti a te il mare,\n'
                                              'e tu mi hai aperto con la lancia il costato.\n'
                                              '1 e 2 ripetono: Popolo mio...\n'
                                              'Cantori: Io ti ho fatto strada con la nube '
                                              'luminosa,\n'
                                              'e tu mi hai condotto al pretorio di Pilato.\n'
                                              '1 e 2 ripetono: Popolo mio...\n'
                                              'Cantori: Io ti ho nutrito con manna nel deserto,\n'
                                              'e tu mi hai colpito con schiaffi e flagelli.\n'
                                              '1 e 2 ripetono: Popolo mio...\n'
                                              'Cantori: Io ti ho dissetato dalla rupe con acqua di '
                                              'salvezza,\n'
                                              'e tu mi hai dissetato con fiele e aceto.\n'
                                              '1 e 2 ripetono: Popolo mio...\n'
                                              'Cantori: Io per te ho colpito i re dei Cananei,\n'
                                              'e tu con la canna hai colpito il mio capo.\n'
                                              '1 e 2 ripetono: Popolo mio...\n'
                                              'Cantori: Io ti ho posto in mano uno scettro '
                                              'regale,\n'
                                              'e tu hai posto sul mio capo una corona di spine.\n'
                                              '1 e 2 ripetono: Popolo mio...\n'
                                              'Cantori: Io ti ho esaltato con grande potenza,\n'
                                              'e tu mi hai sospeso al patibolo della croce.\n'
                                              '1 e 2 ripetono: Popolo mio...\n'
                                              'Passione del Signore\n'
                                              'Hymnus\n'
                                              'Tutti: Crux fidélis, inter omnes arbor una '
                                              'nóbilis,\n'
                                              'nulla talem silva profert, flore, fronde, gérmine!\n'
                                              'Dulce lignum dulci clavo dulce pondus sústinens!\n'
                                              'Cantori: Pange, língua, gloriósi proélium '
                                              'certáminis,\n'
                                              'et super crucis tropaéo dic triúmphum nóbilem,\n'
                                              'quáliter Redémptor orbis immolátus vícerit.\n'
                                              'Tutti: Crux fidélis, inter omnes arbor una '
                                              'nóbilis,\n'
                                              'nulla talem silva profert, flore, fronde, gérmine!\n'
                                              'Cantori: De paréntis protoplásti fráude factor '
                                              'cóndolens,\n'
                                              'quando pomi noxiális morte morsu córruit,\n'
                                              'ipse lignum tunc notávit, damna ligni ut sólveret.\n'
                                              'Tutti: Dulce lignum dulci clavo dulce pondus '
                                              'sústinens!\n'
                                              'Cantori: Hoc opus nostrae salútis ordo '
                                              'depopóscerat,\n'
                                              'multifórmis perditóris arte ut artem fálleret,\n'
                                              'et medélam ferret inde, hostis unde laéserat.\n'
                                              'Tutti: Crux fidélis, inter omnes arbor una '
                                              'nóbilis,\n'
                                              'nulla talem silva profert, flore, fronde, gérmine!\n'
                                              'Cantori: Quando venit ergo sacri plenitúdo '
                                              'témporis,\n'
                                              'missus est ab arce Patris Natus, orbis cónditor,\n'
                                              'atque ventre virgináli carne factus pródiit.\n'
                                              'Tutti: Dulce lignum dulci clavo dulce pondus '
                                              'sústinens!\n'
                                              'Cantori: Vagit infans inter arta cónditus '
                                              'praesépia,\n'
                                              'membra pannis involúta Virgo Mater álligat,\n'
                                              'et manus pedésque et crura stricta cingit fáscia.\n'
                                              'Tutti: Crux fidélis, inter omnes arbor una '
                                              'nóbilis,\n'
                                              'nulla talem silva profert, flore, fronde, gérmine!\n'
                                              'Cantori: Lustra sex qui iam perácta tempus implens '
                                              'córporis,\n'
                                              'se volénte, natus ad hoc, passióni déditus,\n'
                                              'agnus in crucis levátur immolándus stípite.\n'
                                              'Tutti: Dulce lignum dulci clavo dulce pondus '
                                              'sústinens!\n'
                                              'Cantori: En acétum, fel, arúndo, sputa, clavi, '
                                              'láncea;\n'
                                              'mite corpus perforátur, sánguis, unda prófluit;\n'
                                              'terra, pontus, astra, mundus quo lavántur flúmine!\n'
                                              'Tutti: Crux fidélis, inter omnes arbor una '
                                              'nóbilis,\n'
                                              'nulla talem silva profert, flore, fronde, gérmine!\n'
                                              'Cantori: Flecte ramos, arbor alta, tensa laxa '
                                              'víscera,\n'
                                              'et rigor lentéscat ille, quem dedit natívitas,\n'
                                              'ut supérni membra Regis miti tendas stípite.\n'
                                              'Tutti: Dulce lignum dulci clavo dulce pondus '
                                              'sústinens!\n'
                                              'Cantori: Sola digna tu fuísti ferre saecli prétium\n'
                                              'atque portum praeparáre náuta mundo náufrago,\n'
                                              'quem sacer cruor perúnxit fusus Agni córpore.\n'
                                              'Tutti: Crux fidélis, inter omnes arbor una '
                                              'nóbilis,\n'
                                              'nulla talem silva profert, flore, fronde, gérmine!\n'
                                              'La seguente conclusione non si deve mai omettere.\n'
                                              'Tutti: Aequa Patri Filióque, ínclito Paráclito,\n'
                                              'sempitérna sit beátae Trinitáti glória;\n'
                                              'cuius alma nos redémit atque servat grátia. Amen.\n'
                                              'Inno\n'
                                              'Tutti: O Croce fedele e gloriosa\n'
                                              'o albero nobile e santo,\n'
                                              'un altro non v’è nella selva,\n'
                                              'di rami e di fronde a te uguale:\n'
                                              'tu sei il dolce legno che porta\n'
                                              'appeso il Signore del mondo.\n'
                                              'Cantori: Esalti ogni lingua nel canto\n'
                                              'lo scontro e la grande vittoria,\n'
                                              'e sopra il trofeo della Croce\n'
                                              'proclami quel grande trionfo,\n'
                                              'poiché il redentore del mondo\n'
                                              'fu ucciso e ha vinto la morte.\n'
                                              'Tutti: O Croce fedele e gloriosa,\n'
                                              'o albero nobile e santo,\n'
                                              'un altro non v’è nella selva,\n'
                                              'di rami e di fronde a te uguale.\n'
                                              'Cantori: Pietoso il Signore rivolse lo sguardo al '
                                              'peccato di Adamo:\n'
                                              'quando egli del frutto proibito gustò e la morte lo '
                                              'colse,\n'
                                              'un albero scelse a rimedio\n'
                                              'del male dell’albero antico.\n'
                                              'Tutti: Tu sei il dolce legno che porta\n'
                                              'appeso il Signore del mondo.\n'
                                              'Cantori: La nostra salvezza doveva\n'
                                              'venire nel corso dei tempi,\n'
                                              'doveva divina sapienza\n'
                                              'domare l’antico nemico,\n'
                                              'e trarci a salvezza là dove\n'
                                              'a noi era giunto l’inganno.\n'
                                              'Tutti: O Croce fedele e gloriosa,\n'
                                              'o albero nobile e santo,\n'
                                              'un altro non v’è nella selva,\n'
                                              'di rami e di fronde a te uguale.\n'
                                              'Cantori: E quando il momento fu giunto\n'
                                              'del tempo fissato da Dio,\n'
                                              'ci venne mandato dal Padre\n'
                                              'il Figlio, creatore del mondo;\n'
                                              'tra gli uomini venne, incarnato\n'
                                              'nel grembo di Vergine Madre.\n'
                                              'Tutti: Tu sei il dolce legno che porta\n'
                                              'appeso il Signore del mondo.\n'
                                              'Cantori: Vagisce il Bambino, adagiato\n'
                                              'in umile, misera stalla;\n'
                                              'la Vergine Madre ravvolge\n'
                                              'e copre le piccole membra,\n'
                                              'ne cinge le mani e i piedi,\n'
                                              'legati con candida fascia.\n'
                                              'Tutti: O Croce fedele e gloriosa,\n'
                                              'o albero nobile e santo,\n'
                                              'un altro non v’è nella selva,\n'
                                              'di rami e di fronde a te uguale.\n'
                                              'Passione del Signore\n'
                                              'Cantori: Compiuti trent’anni e conclusa\n'
                                              'la vita terrena, il Signore\n'
                                              'offriva se stesso alla morte\n'
                                              'per noi, redentore del mondo;\n'
                                              'in croce l’Agnello è innalzato,\n'
                                              'e viene immolato per tutti.\n'
                                              'Tutti: Tu sei il dolce legno che porta\n'
                                              'appeso il Signore del mondo.\n'
                                              'Cantori: Ed ecco l’aceto e il fiele,\n'
                                              'gli sputi, la lancia e i chiodi;\n'
                                              'il corpo del Giusto è trafitto\n'
                                              'e l’acqua fluisce col sangue,\n'
                                              'torrente che lava la terra,\n'
                                              'il mare e il cielo e il mondo.\n'
                                              'Tutti: O Croce fedele e gloriosa,\n'
                                              'o albero nobile e santo,\n'
                                              'un altro non v’è nella selva,\n'
                                              'di rami e di fronde a te uguale.\n'
                                              'Cantori: O albero, piega i tuoi rami,\n'
                                              'distendi le rigide fibre,\n'
                                              's’allenti quel legno che duro\n'
                                              'in te la natura ha creato;\n'
                                              'accogli su un morbido tronco\n'
                                              'le membra del Cristo Signore.\n'
                                              'Tutti: Tu sei il dolce legno che porta\n'
                                              'appeso il Signore del mondo.\n'
                                              'Cantori: Tu solo sei l’albero degno\n'
                                              'di reggere il nostro riscatto;\n'
                                              'per te è preparato un rifugio,\n'
                                              'un’arca che porta salvezza\n'
                                              'al mondo, nel sangue che sgorga\n'
                                              'dal Corpo del Cristo immolato.\n'
                                              'Tutti: O Croce fedele e gloriosa,\n'
                                              'o albero nobile e santo,\n'
                                              'un altro non v’è nella selva,\n'
                                              'di rami e di fronde a te uguale.\n'
                                              'La seguente conclusione non si deve mai omettere.\n'
                                              'Tutti: Al Padre e al Figlio sia gloria,\n'
                                              'e gloria allo Spirito Santo:\n'
                                              'eterna la lode s’innalzi\n'
                                              'all’Unico e Trino Signore\n'
                                              'che il mondo ha creato e redento\n'
                                              'e tutti noi salva per grazia. Amen.\n'
                                              'Con riferimento al contesto locale o alle '
                                              'tradizioni popolari e secondo l’opportunità '
                                              'pastorale, si può cantare lo Stabat Mater, secondo '
                                              'il Graduale Romano, o un altro canto\n'
                                              'adatto alla contemplazione del dolore della beata '
                                              'Vergine Maria.\n'
                                              '21. Finita l’adorazione, un diacono o un ministro '
                                              'porta la Croce al suo posto, presso l’altare. Le '
                                              'candele accese vengono collocate vicino all’altare '
                                              'o sopra di esso o presso la Croce.\n'
                                              'Terza parte: Santa Comunione',
                           'friday_communion_intro': '<Sopra l’altare si stende una tovaglia e vi '
                                                     'si pongono il corporale e il Messale. Nel '
                                                     'frattempo il diacono o, in sua assenza, lo '
                                                     'stesso sacerdote, indossato il velo omerale, '
                                                     'riporta il\n'
                                                     'Santissimo Sacramento dal luogo della '
                                                     'reposizione all’altare per la via più breve. '
                                                     'Tutti rimangono in silenzio. Due ministri '
                                                     'accompagnano il Santissimo Sacramento con le '
                                                     'candele accese, che depongono vicino '
                                                     'all’altare o sopra di esso. Quando il '
                                                     'diacono, se presente,\n'
                                                     'ha deposto sopra l’altare il Santissimo '
                                                     'Sacramento e ha scoperto la pisside, il '
                                                     'sacerdote si\n'
                                                     'avvicina all’altare e genuflette.>',
                           'friday_people_prayer': 'Scenda, o Padre, la tua benedizione\n'
                                                   'su questo popolo\n'
                                                   'che ha celebrato la morte del tuo Figlio\n'
                                                   'nella speranza di risorgere con lui;\n'
                                                   'venga il perdono e la consolazione,\n'
                                                   'si accresca la fede,\n'
                                                   'si rafforzi la certezza nella redenzione '
                                                   'eterna.\n'
                                                   'Per Cristo nostro Signore.\n'
                                                   'R/. Amen.',
                           'friday_departure': '<E tutti, fatta la genuflessione alla Croce, se ne '
                                               'vanno in silenzio.>',
                           'friday_intercession_1': 'Preghiamo, fratelli e sorelle, per la santa '
                                                    'Chiesa di Dio. *\n'
                                                    'Il Signore le conceda unità e pace,\n'
                                                    'la protegga su tutta la terra, *\n'
                                                    'e doni a noi, in una vita serena e sicura, +\n'
                                                    'di rendere gloria a Dio Padre onnipotente. '
                                                    '**\n'
                                                    'Preghiera in silenzio; poi il sacerdote '
                                                    'dice:\n'
                                                    'Dio onnipotente ed eterno,\n'
                                                    'che hai rivelato in Cristo\n'
                                                    'la tua gloria a tutte le genti,\n'
                                                    'custodisci l’opera della tua misericordia,\n'
                                                    'perché la tua Chiesa,\n'
                                                    'diffusa su tutta la terra,\n'
                                                    'perseveri con fede salda\n'
                                                    'nella confessione del tuo nome.\n'
                                                    'Per Cristo nostro Signore.\n'
                                                    'R/. Amen.\n'
                                                    'Passione del Signore 153',
                           'friday_intercession_2': 'Preghiamo per il nostro santo padre il papa '
                                                    'N. *\n'
                                                    'Il Signore Dio nostro,\n'
                                                    'che lo ha scelto nell’ordine episcopale, *\n'
                                                    'gli conceda vita e salute e lo conservi alla '
                                                    'sua santa Chiesa +\n'
                                                    'come guida e pastore del popolo santo di Dio. '
                                                    '**\n'
                                                    'Preghiera in silenzio; poi il sacerdote '
                                                    'dice:\n'
                                                    'Dio onnipotente ed eterno,\n'
                                                    'sapienza che regge l’universo,\n'
                                                    'ascolta la tua famiglia in preghiera,\n'
                                                    'e custodisci con la tua bontà\n'
                                                    'il papa che tu hai scelto per noi,\n'
                                                    'perché il popolo cristiano,\n'
                                                    'da te affidato alla sua guida pastorale,\n'
                                                    'progredisca sempre nella fede.\n'
                                                    'Per Cristo nostro Signore.\n'
                                                    'R/. Amen.',
                           'friday_intercession_3': 'Preghiamo per il nostro vescovo N.*, *\n'
                                                    'per tutti i vescovi, i presbiteri e i '
                                                    'diaconi, *\n'
                                                    'e per tutto il popolo dei fedeli. **\n'
                                                    'Preghiera in silenzio; poi il sacerdote '
                                                    'dice:\n'
                                                    'Dio onnipotente ed eterno,\n'
                                                    'che con il tuo Spirito guidi e santifichi\n'
                                                    'tutto il corpo della Chiesa,\n'
                                                    'accogli le preghiere che ti rivolgiamo,\n'
                                                    'perché secondo il dono della tua grazia\n'
                                                    'tutti i membri della comunità\n'
                                                    'nel loro ordine e grado\n'
                                                    'ti possano fedelmente servire.\n'
                                                    'Per Cristo nostro Signore.\n'
                                                    'R/. Amen.\n'
                                                    '* Qui è permesso nominare anche il vescovo '
                                                    'coadiutore o gli ausiliari,\n'
                                                    'come indicato al n. 149 dell’Ordinamento '
                                                    'Generale del Messale Romano.',
                           'friday_intercession_4': 'Preghiamo per i [nostri] catecumeni. *\n'
                                                    'Il Signore Dio nostro apra i loro cuori '
                                                    'all’ascolto\n'
                                                    'e dischiuda la porta della misericordia, *\n'
                                                    'perché mediante il lavacro di rigenerazione\n'
                                                    'ricevano il perdono di tutti i peccati *\n'
                                                    'e siano incorporati\n'
                                                    'in Cristo Gesù, Signore nostro. **\n'
                                                    'Preghiera in silenzio; poi il sacerdote '
                                                    'dice:\n'
                                                    'Dio onnipotente ed eterno,\n'
                                                    'che rendi la tua Chiesa sempre feconda di '
                                                    'nuovi figli,\n'
                                                    'aumenta nei [nostri] catecumeni\n'
                                                    'l’intelligenza della fede,\n'
                                                    'perché, nati a vita nuova nel fonte '
                                                    'battesimale,\n'
                                                    'siano accolti tra i tuoi figli di adozione.\n'
                                                    'Per Cristo nostro Signore.\n'
                                                    'R/. Amen.',
                           'friday_intercession_5': 'Preghiamo per tutti i fratelli e le sorelle '
                                                    'che credono in Cristo. *\n'
                                                    'Il Signore Dio nostro raduni e custodisca '
                                                    'nell’unica sua Chiesa *\n'
                                                    'quanti testimoniano la verità con le loro '
                                                    'opere. **\n'
                                                    'Preghiera in silenzio; poi il sacerdote '
                                                    'dice:\n'
                                                    'Dio onnipotente ed eterno,\n'
                                                    'che raduni i tuoi figli ovunque dispersi e li '
                                                    'custodisci nell’unità,\n'
                                                    'volgi lo sguardo al gregge del tuo Figlio,\n'
                                                    'perché coloro che sono stati consacrati da un '
                                                    'solo Battesimo\n'
                                                    'siano una cosa sola nell’integrità della '
                                                    'fede\n'
                                                    'e nel vincolo dell’amore.\n'
                                                    'Per Cristo nostro Signore.\n'
                                                    'R/. Amen.',
                           'friday_intercession_6': 'Preghiamo per gli Ebrei. *\n'
                                                    'Il Signore Dio nostro, che a loro per primi '
                                                    'ha rivolto la sua parola, *\n'
                                                    'li aiuti a progredire sempre nell’amore del '
                                                    'suo nome +\n'
                                                    'e nella fedeltà alla sua alleanza. **\n'
                                                    'Preghiera in silenzio; poi il sacerdote '
                                                    'dice:\n'
                                                    'Dio onnipotente ed eterno,\n'
                                                    'che hai affidato le tue promesse\n'
                                                    'ad Abramo e alla sua discendenza,\n'
                                                    'esaudisci con bontà le preghiere della tua '
                                                    'Chiesa,\n'
                                                    'perché il popolo primogenito della tua '
                                                    'alleanza\n'
                                                    'possa giungere alla pienezza della '
                                                    'redenzione.\n'
                                                    'Per Cristo nostro Signore.\n'
                                                    'R/. Amen.',
                           'friday_intercession_7': 'Preghiamo per coloro che non credono in '
                                                    'Cristo. *\n'
                                                    'Illuminati dallo Spirito Santo, *\n'
                                                    'possano anch’essi entrare\n'
                                                    'nella via della salvezza. **\n'
                                                    'Preghiera in silenzio; poi il sacerdote '
                                                    'dice:\n'
                                                    'Dio onnipotente ed eterno,\n'
                                                    'dona a coloro che non credono in Cristo\n'
                                                    'di trovare la verità camminando alla tua '
                                                    'presenza con cuore sincero,\n'
                                                    'e concedi a noi di essere nel mondo testimoni '
                                                    'più autentici\n'
                                                    'della tua carità, progredendo nell’amore '
                                                    'vicendevole\n'
                                                    'e nella piena conoscenza del mistero della '
                                                    'tua vita.\n'
                                                    'Per Cristo nostro Signore.\n'
                                                    'R/. Amen.',
                           'friday_intercession_8': 'Preghiamo per coloro che non credono in Dio. '
                                                    '*\n'
                                                    'Praticando la giustizia con cuore sincero, *\n'
                                                    'giungano alla conoscenza del Dio vero. **\n'
                                                    'Preghiera in silenzio; poi il sacerdote '
                                                    'dice:\n'
                                                    'Dio onnipotente ed eterno,\n'
                                                    'tu hai messo nel cuore degli uomini\n'
                                                    'una così profonda nostalgia di te\n'
                                                    'che solo quando ti trovano hanno pace:\n'
                                                    'fa’ che, tra le difficoltà della vita,\n'
                                                    'tutti riconoscano i segni della tua bontà\n'
                                                    'e, stimolati dalla nostra testimonianza,\n'
                                                    'abbiano la gioia di credere in te,\n'
                                                    'unico vero Dio e Padre di tutti gli uomini.\n'
                                                    'Per Cristo nostro Signore.\n'
                                                    'R/. Amen.\n'
                                                    'Passione del Signore',
                           'friday_intercession_9': 'Preghiamo per coloro\n'
                                                    'che sono chiamati a governare la comunità '
                                                    'civile. *\n'
                                                    'Il Signore Dio nostro illumini la loro mente '
                                                    'e il loro cuore *\n'
                                                    'a cercare il bene comune +\n'
                                                    'nella vera libertà e nella vera pace. **\n'
                                                    'Preghiera in silenzio; poi il sacerdote '
                                                    'dice:\n'
                                                    'Dio onnipotente ed eterno,\n'
                                                    'nelle tue mani sono le speranze degli uomini\n'
                                                    'e i diritti di ogni popolo:\n'
                                                    'assisti con la tua sapienza coloro che ci '
                                                    'governano,\n'
                                                    'perché, con il tuo aiuto,\n'
                                                    'promuovano su tutta la terra\n'
                                                    'una pace duratura,\n'
                                                    'la prosperità dei popoli\n'
                                                    'e la libertà religiosa.\n'
                                                    'Per Cristo nostro Signore.\n'
                                                    'R/. Amen.',
                           'friday_intercession_10': 'Preghiamo, fratelli e sorelle, Dio Padre '
                                                     'onnipotente, *\n'
                                                     'perché purifichi il mondo dagli errori,\n'
                                                     'allontani le malattie, vinca la fame, *\n'
                                                     'renda la libertà ai prigionieri, spezzi le '
                                                     'catene,\n'
                                                     'conceda sicurezza a chi viaggia,\n'
                                                     'il ritorno ai lontani da casa, *\n'
                                                     'la salute agli ammalati +\n'
                                                     'e ai morenti la salvezza eterna. **\n'
                                                     'Preghiera in silenzio; poi il sacerdote '
                                                     'dice:\n'
                                                     'Dio onnipotente ed eterno,\n'
                                                     'consolazione degli afflitti,\n'
                                                     'sostegno dei sofferenti,\n'
                                                     'ascolta il grido di coloro che sono nella '
                                                     'prova,\n'
                                                     'perché tutti nelle loro necessità\n'
                                                     'sperimentino la gioia di aver trovato\n'
                                                     'il soccorso della tua misericordia.\n'
                                                     'Per Cristo nostro Signore.\n'
                                                     'R/. Amen.\n'
                                                     'Seconda parte: Adorazione della Santa Croce'},
                 'prayers': {'prayer_after': 'Dio onnipotente ed eterno,\n'
                                             'che ci hai rinnovati con la gloriosa morte\n'
                                             'e risurrezione del tuo Cristo,\n'
                                             'custodisci in noi l’opera della tua misericordia,\n'
                                             'perché la partecipazione a questo grande mistero\n'
                                             'ci consacri sempre al tuo servizio.\n'
                                             'Per Cristo nostro Signore.\n'
                                             'R/. Amen.'}},
 'holy_saturday': {'rites': {'holy_saturday_rest': '<Sabato Santo 167\n'
                                                   'Sabato Santo\n'
                                                   '1. Il Sabato Santo la Chiesa sosta presso il '
                                                   'sepolcro del Signore, meditando la sua '
                                                   'passione e la sua morte, nonché la discesa '
                                                   'agli inferi, e aspettando la sua risurrezione, '
                                                   'nella\n'
                                                   'preghiera e nel digiuno.\n'
                                                   '2. Spogliata la sacra mensa, la Chiesa si '
                                                   'astiene dal sacrificio della Messa fino alla '
                                                   'solenne\n'
                                                   'Veglia o attesa notturna della risurrezione. '
                                                   'L’attesa allora lascia il posto alla gioia '
                                                   'pasquale,\n'
                                                   'che nella sua pienezza si protrae per '
                                                   'cinquanta giorni.\n'
                                                   '3. In questo giorno la santa comunione si può '
                                                   'dare solo sotto forma di Viatico.>'}},
 'easter_vigil': {'rites': {'vigil_intro': '<Per antichissima tradizione questa è la notte di '
                                           'veglia in onore del Signore (Es 12, 42),\n'
                                           'cosicché i fedeli, secondo l’ammonizione del Vangelo '
                                           '(Lc 12, 35-37), portando in mano le\n'
                                           'lampade accese, sono simili a coloro che attendono il '
                                           'ritorno del Signore, in modo che,\n'
                                           'quando verrà, li trovi ancora vigilanti e li faccia '
                                           'sedere alla sua mensa.\n'
                                           '2. La Veglia di questa notte, che è la più importante '
                                           'e la più nobile tra tutte le solennità,\n'
                                           'è unica in ogni chiesa. Così, dunque, viene ordinata: '
                                           'dopo il lucernario e il preconio pasquale (che '
                                           'costituiscono la prima parte di questa Veglia), la '
                                           'santa Chiesa medita le meraviglie che il Signore Dio '
                                           'fece fin dall’inizio per il suo popolo, confidando '
                                           'nella sua parola e nella sua promessa (seconda parte o '
                                           'Liturgia della Parola), fino al momento in cui,\n'
                                           'avvicinandosi il giorno della risurrezione, con i '
                                           'nuovi membri rigenerati nel Battesimo\n'
                                           '(terza parte), viene invitata alla mensa che il '
                                           'Signore ha preparato per il suo popolo, memoriale '
                                           'della sua morte e risurrezione, finché egli venga '
                                           '(quarta parte).\n'
                                           '3. L’intera celebrazione della Veglia Pasquale deve '
                                           'svolgersi durante la notte, così che\n'
                                           'non inizi prima che scenda la notte e si concluda '
                                           'prima dell’alba della domenica.\n'
                                           '4. La Messa della Veglia, anche se si celebra prima '
                                           'della mezzanotte, è la Messa pasquale\n'
                                           'della domenica di Risurrezione.\n'
                                           '5. Chi partecipa alla Messa della notte, può '
                                           'comunicarsi una seconda volta nella Messa\n'
                                           'del giorno. Chi celebra o concelebra la Messa della '
                                           'notte, può celebrare o concelebrare\n'
                                           'alla Messa del giorno.\n'
                                           'La Veglia Pasquale prende il posto dell’Ufficio delle '
                                           'letture.\n'
                                           '6. Di norma il sacerdote sia assistito dal diacono. In '
                                           'sua assenza, i compiti del suo ordine siano svolti dal '
                                           'sacerdote celebrante o da un concelebrante, ad '
                                           'eccezione di quanto\n'
                                           'stabilito di volta in volta. Il sacerdote e il diacono '
                                           'indossano le vesti di colore bianco,\n'
                                           'come per la Messa.\n'
                                           '7. Siano preparate le candele per tutti coloro che '
                                           'partecipano alla Veglia. Le luci della\n'
                                           'chiesa vengono spente.\n'
                                           'Prima parte:\n'
                                           'Solenne inizio della Veglia o lucernario\n'
                                           'Benedizione del fuoco e preparazione del cero>',
                            'fire_blessing': 'Il sacerdote introduce brevemente la veglia notturna '
                                             'con queste o con altre simili parole:\n'
                                             'Fratelli e sorelle, in questa santissima notte,\n'
                                             'nella quale il Signore nostro Gesù Cristo\n'
                                             'è passato dalla morte alla vita,\n'
                                             'la Chiesa invita i suoi figli sparsi nel mondo a '
                                             'raccogliersi\n'
                                             'per vegliare e pregare.\n'
                                             'Rivivremo la Pasqua del Signore\n'
                                             'nell’ascolto della Parola e nella partecipazione ai '
                                             'Sacramenti:\n'
                                             'Cristo risorto confermerà in noi la speranza di '
                                             'partecipare\n'
                                             'alla sua vittoria sulla morte e di vivere con lui in '
                                             'Dio Padre.\n'
                                             '10. Quindi il sacerdote, con le braccia allargate, '
                                             'benedice il fuoco, dicendo:\n'
                                             'Preghiamo.\n'
                                             'O Padre, che per mezzo del tuo Figlio\n'
                                             'ci hai comunicato la fiamma viva del tuo fulgore,\n'
                                             'benedici ^ questo fuoco nuovo\n'
                                             'e, mediante le feste pasquali,\n'
                                             'accendi in noi il desiderio del cielo,\n'
                                             'perché, rinnovati nello spirito,\n'
                                             'possiamo giungere alla festa dello splendore '
                                             'eterno.\n'
                                             'Per Cristo nostro Signore.\n'
                                             'R/. Amen.',
                            'paschal_candle': 'Benedetto il nuovo fuoco, uno dei ministri porta il '
                                              'cero pasquale davanti al sacerdote\n'
                                              'che, con uno stilo, vi incide una croce. Quindi '
                                              'traccia al di sopra di essa in alto la lettera\n'
                                              'greca A (alfa), sotto in basso la lettera Ω (omega) '
                                              'e tra i bracci della croce le quattro cifre\n'
                                              'per indicare l’anno corrente, dicendo nel '
                                              'frattempo:\n'
                                              '1. Cristo ieri e oggi\n'
                                              '(incide l’asta verticale);\n'
                                              '2. Principio e Fine\n'
                                              '(incide l’asta orizzontale);\n'
                                              '3. Alfa\n'
                                              '(incide sopra l’asta verticale la lettera A);\n'
                                              '4. e Omega.\n'
                                              '(incide sotto l’asta verticale la lettera Ω).\n'
                                              '5. A lui appartengono il tempo\n'
                                              '(incide la prima cifra dell’anno corrente '
                                              'nell’angolo superiore sinistro della croce);\n'
                                              '6. e i secoli.\n'
                                              '(incide la seconda cifra dell’anno corrente '
                                              'nell’angolo superiore destro della croce);\n'
                                              '7. A lui la gloria e il potere\n'
                                              '(incide la terza cifra dell’anno corrente '
                                              'nell’angolo inferiore sinistro della croce);\n'
                                              '8. per tutti i secoli dei secoli. Amen.\n'
                                              '(incide la quarta cifra dell’anno corrente '
                                              'nell’angolo inferiore destro della croce).\n'
                                              '12. Completata l’incisione della croce e gli altri '
                                              'segni, il sacerdote può infiggere i cinque\n'
                                              'grani d’incenso nel cero, in forma di croce, '
                                              'dicendo nel frattempo:\n'
                                              '1. Per mezzo delle sue sante piaghe\n'
                                              '2. gloriose\n'
                                              '3. ci protegga\n'
                                              '4. e ci custodisca\n'
                                              '5. Cristo Signore. Amen.\n'
                                              'A',
                            'light_procession': 'Dal nuovo fuoco il sacerdote accende il cero '
                                                'pasquale, dicendo:\n'
                                                'La luce di Cristo che risorge glorioso\n'
                                                'disperda le tenebre del cuore e dello spirito.\n'
                                                'Processione\n'
                                                'Acceso il cero, uno dei ministri prende dei '
                                                'carboni ardenti dal fuoco e li pone nel turibolo; '
                                                'il sacerdote, dunque, infonde l’incenso. Il '
                                                'diacono o, in sua assenza, un altro ministro\n'
                                                'idoneo, prende il cero pasquale e si ordina la '
                                                'processione. Il turiferario con il turibolo\n'
                                                'fumigante procede davanti al diacono o al '
                                                'ministro che porta il cero pasquale. Seguono il\n'
                                                'sacerdote con i ministri e i fedeli, i quali '
                                                'tengono in mano delle candele spente.\n'
                                                'All’ingresso della chiesa, il diacono, fermandosi '
                                                'e alzando il cero, canta:\n'
                                                'La luce di Cristo. Oppure: Cristo luce del '
                                                'mondo.\n'
                                                'Tutti rispondono:\n'
                                                'Rendiamo grazie a Dio.\n'
                                                'Il sacerdote accende la sua candela dal cero '
                                                'pasquale.\n'
                                                '15. Quindi il diacono avanza fino alla metà della '
                                                'chiesa e qui, stando fermo, alza il cero e\n'
                                                'canta di nuovo:\n'
                                                'La luce di Cristo. Oppure: Cristo luce del '
                                                'mondo.\n'
                                                'Tutti rispondono:\n'
                                                'Rendiamo grazie a Dio.\n'
                                                'Tutti accendono la loro candela dal cero pasquale '
                                                'e avanzano.\n'
                                                '16. Quando arriva davanti all’altare, il diacono, '
                                                'stando fermo verso il popolo, alza il cero\n'
                                                'e per la terza volta canta:\n'
                                                'La luce di Cristo. Oppure: Cristo luce del '
                                                'mondo.\n'
                                                'Tutti rispondono:\n'
                                                'Rendiamo grazie a Dio.\n'
                                                'Poi il diacono depone il cero pasquale sopra un '
                                                'grande candeliere preparato vicino\n'
                                                'all’ambone o in mezzo al presbiterio mentre si '
                                                'accendono le luci della chiesa, ad eccezione '
                                                'delle candele dell’altare.\n'
                                                'Preconio pasquale',
                            'vigil_word_intro': 'In questa Veglia, madre di tutte le veglie '
                                                '(Agostino, Sermo 219), vengono proposte\n'
                                                'nove letture: sette dall’Antico Testamento e due '
                                                'dal Nuovo (Epistola e Vangelo). Quando\n'
                                                'è possibile, si leggono tutte, secondo l’indole '
                                                'della Veglia che esige una certa durata.\n'
                                                '20. Se gravi circostanze pastorali lo richiedono, '
                                                'si può diminuire il numero delle letture\n'
                                                'dall’Antico Testamento; tuttavia si tenga sempre '
                                                'presente che la lettura della parola di\n'
                                                'Dio è parte fondamentale della Veglia Pasquale. '
                                                'Si leggano almeno tre letture tratte\n'
                                                'dall’Antico Testamento, sia dalla Legge che dai '
                                                'Profeti, e si cantino i rispettivi Salmi '
                                                'responsoriali. Non si ometta mai la lettura del '
                                                'cap. 14 dell’Esodo con il suo cantico.\n'
                                                '21. Deposte le candele, tutti si siedono. Prima '
                                                'di iniziare le letture, il sacerdote esorta il\n'
                                                'popolo con queste o con altre simili parole:\n'
                                                'Fratelli e sorelle, dopo il solenne inizio della '
                                                'Veglia,\n'
                                                'ascoltiamo con cuore sereno la parola di Dio.\n'
                                                'Meditiamo come nell’antica alleanza Dio ha '
                                                'salvato il suo popolo\n'
                                                'e nella pienezza dei tempi ha mandato a noi\n'
                                                'il suo Figlio come redentore.\n'
                                                'Preghiamo perché Dio, nostro Padre, porti a '
                                                'compimento\n'
                                                'quest’opera di salvezza realizzata nella Pasqua.\n'
                                                '22. Seguono le letture. Il lettore si reca '
                                                'all’ambone e proclama la lettura. Quindi il '
                                                'salmista o il cantore esegue il salmo, mentre il '
                                                'popolo risponde con il ritornello. Poi tutti si '
                                                'alzano, il sacerdote dice: Preghiamo e, dopo che '
                                                'tutti hanno pregato per qualche momento\n'
                                                'in silenzio, dice l’orazione corrispondente alla '
                                                'lettura.\n'
                                                'Al posto del salmo responsoriale si può osservare '
                                                'un momento di sacro silenzio, tralasciando, in '
                                                'questo caso, la pausa dopo Preghiamo.\n'
                                                'Orazioni dopo le letture',
                            'baptism_intro': 'Dopo l’omelia si procede alla Liturgia battesimale. '
                                             'Il sacerdote con i ministri va al fonte battesimale. '
                                             'Se non è possibile, si pone un decoroso bacile con '
                                             'l’acqua nel presbiterio.\n'
                                             '37. Se vi sono dei catecumeni, vengono chiamati per '
                                             'nome e presentati dai loro padrini; i\n'
                                             'bambini vengono portati dai genitori e dai padrini '
                                             'alla presenza della comunità riunita.\n'
                                             '38. Quindi, se si fa la processione al battistero o '
                                             'al fonte, si ordina in questo modo: precede il '
                                             'ministro con il cero pasquale, lo seguono i '
                                             'battezzandi con i padrini, quindi i ministri, il '
                                             'diacono e il sacerdote. Durante la processione si '
                                             'cantano le litanie (n. 42).\n'
                                             'Terminate le litanie, il sacerdote pronuncia la '
                                             'monizione (n. 39).\n'
                                             '39. Se la Liturgia battesimale ha luogo nel '
                                             'presbiterio, il sacerdote pronuncia subito la\n'
                                             'monizione introduttiva, con queste o con altre '
                                             'simili parole.\n'
                                             'Se ci sono battezzandi:\n'
                                             'Fratelli e sorelle,\n'
                                             'accompagniamo con preghiera unanime\n'
                                             'la gioiosa speranza dei nostri catecumeni,\n'
                                             'perché Dio Padre onnipotente nella sua grande '
                                             'misericordia\n'
                                             'li guidi al fonte della rigenerazione.\n'
                                             'Se si benedice il fonte, ma non ci sono '
                                             'battezzandi:\n'
                                             'Fratelli e sorelle,\n'
                                             'invochiamo la benedizione di Dio Padre onnipotente\n'
                                             'su questo fonte battesimale,\n'
                                             'perché coloro che da esso rinasceranno\n'
                                             'siano resi in Cristo figli adottivi.',
                            'litany': 'Le litanie sono cantate da due cantori, mentre tutti stanno '
                                      'in piedi (come è tradizione per il Tempo Pasquale) e '
                                      'rispondono.\n'
                                      'Se invece si svolge la processione al battistero, le '
                                      'litanie si cantano durante il percorso; in\n'
                                      'questo caso i battezzandi sono chiamati prima della '
                                      'processione, durante la quale dopo il\n'
                                      'cero pasquale seguono i catecumeni con i padrini, quindi i '
                                      'ministri, il diacono e il sacerdote. La monizione si farà '
                                      'prima della benedizione dell’acqua.\n'
                                      '★ Per il canto della benedizione dell’acqua battesimale si '
                                      'può utilizzare la melodia del\n'
                                      'prefazio (vedi Appendice, p. 1128).\n'
                                      '41. Se non ci sono battezzandi e non si benedice il fonte, '
                                      'omesse le litanie, subito si procede alla benedizione '
                                      'dell’acqua (n. 51).\n'
                                      '42. Nelle litanie si possono aggiungere alcuni nomi di '
                                      'santi, in particolare il titolare della\n'
                                      'chiesa o il patrono del luogo e di coloro che devono essere '
                                      'battezzati.\n'
                                      'Kýrie, eléison. Kýrie, eléison.\n'
                                      'oppure:\n'
                                      'Signore, pietà. Signore, pietà.\n'
                                      'Christe, eléison. Christe, eléison.\n'
                                      'oppure:\n'
                                      'Cristo, pietà. Cristo, pietà.\n'
                                      'Kýrie, eléison. Kýrie, eléison.\n'
                                      'oppure:\n'
                                      'Signore, pietà. Signore, pietà.\n'
                                      'Santa Maria, Madre di Dio, prega per noi.\n'
                                      'San Michele, prega per noi.\n'
                                      'Santi angeli di Dio, pregate per noi.\n'
                                      'San Giovanni Battista, prega per noi.\n'
                                      'San Giuseppe, prega per noi.\n'
                                      'Santi Pietro e Paolo, pregate per noi.\n'
                                      'Sant’Andrea, prega per noi.\n'
                                      'San Giovanni, prega per noi.\n'
                                      'Santi apostoli ed evangelisti, pregate per noi.\n'
                                      'Santa Maria Maddalena, prega per noi.\n'
                                      'Santi discepoli del Signore, pregate per noi.\n'
                                      'Santo Stefano, prega per noi.\n'
                                      'Sant’Ignazio di Antiochia, prega per noi.\n'
                                      'San Lorenzo, prega per noi.\n'
                                      'Sante Perpetua e Felicita, pregate per noi.\n'
                                      'Sant’Agnese, prega per noi.\n'
                                      'Santi martiri di Cristo, pregate per noi.\n'
                                      'San Gregorio, prega per noi.\n'
                                      'Sant’Agostino, prega per noi.\n'
                                      'Sant’Atanasio, prega per noi.\n'
                                      'San Basilio, prega per noi.\n'
                                      'San Martino, prega per noi.\n'
                                      'Santi Cirillo e Metodio, pregate per noi.\n'
                                      'San Benedetto, prega per noi.\n'
                                      'San Francesco, prega per noi.\n'
                                      'San Domenico, prega per noi.\n'
                                      'San Francesco [Saverio], prega per noi.\n'
                                      'San Giovanni Maria [Vianney], prega per noi.\n'
                                      'Santa Caterina [da Siena], prega per noi.\n'
                                      'Santa Teresa di Gesù, prega per noi.\n'
                                      'Santi e sante di Dio, pregate per noi.\n'
                                      'Nella tua misericordia, salvaci, Signore.\n'
                                      'Da ogni male, salvaci, Signore.\n'
                                      'Da ogni peccato, salvaci, Signore.\n'
                                      'Dalla morte eterna, salvaci, Signore.\n'
                                      'Per la tua incarnazione, salvaci, Signore.\n'
                                      'Per la tua morte e risurrezione, salvaci, Signore.\n'
                                      'Per il dono dello Spirito Santo, salvaci, Signore.\n'
                                      'Noi peccatori ti preghiamo, ascoltaci, Signore.\n'
                                      'Se ci sono dei battezzandi:\n'
                                      'Dona la grazia\n'
                                      'della vita nuova nel Battesimo\n'
                                      'a questi tuoi eletti, ascoltaci, Signore.\n'
                                      'Se non ci sono dei battezzandi:\n'
                                      'Benedici e santifica\n'
                                      'con la grazia del tuo Spirito\n'
                                      'questo fonte battesimale\n'
                                      'da cui nascono i tuoi figli, ascoltaci, Signore.\n'
                                      'Gesù, Figlio del Dio vivente, Gesù, Figlio del Dio '
                                      'vivente,\n'
                                      'ascolta la nostra supplica. ascolta la nostra supplica.\n'
                                      'Se ci sono dei battezzandi, il sacerdote, con le braccia '
                                      'allargate, dice la seguente orazione:\n'
                                      'Dio onnipotente ed eterno,\n'
                                      'manifesta la tua presenza nei sacramenti del tuo grande '
                                      'amore\n'
                                      'e manda lo Spirito di adozione\n'
                                      'a ricreare nuovi figli dal fonte battesimale,\n'
                                      'perché l’azione del nostro umile ministero\n'
                                      'sia resa efficace dalla tua potenza.\n'
                                      'Per Cristo nostro Signore.\n'
                                      'R/. Amen.\n'
                                      'Benedizione dell’acqua battesimale',
                            'baptism_water': 'Quindi il sacerdote, con le braccia allargate, '
                                             'benedice l’acqua battesimale dicendo la\n'
                                             'seguente orazione:\n'
                                             'O Dio,\n'
                                             'per mezzo dei segni sacramentali\n'
                                             'tu operi con invisibile potenza\n'
                                             'le meraviglie della salvezza, *\n'
                                             'e in molti modi, attraverso i tempi,\n'
                                             'hai preparato l’acqua, tua creatura, *\n'
                                             'a essere segno del Battesimo. **\n'
                                             'Fin dalle origini il tuo Spirito si librava sulle '
                                             'acque\n'
                                             'perché contenessero in germe la forza di '
                                             'santificare; *\n'
                                             'e anche nel diluvio hai prefigurato il Battesimo, *\n'
                                             'perché, oggi come allora,\n'
                                             'l’acqua segnasse la fine del peccato +\n'
                                             'e l’inizio della vita nuova. **\n'
                                             'Tu hai liberato dalla schiavitù i figli di Abramo, '
                                             '*\n'
                                             'facendoli passare illesi attraverso il Mar Rosso, *\n'
                                             'perché fossero immagine +\n'
                                             'del futuro popolo dei battezzati. **\n'
                                             'Infine, nella pienezza dei tempi, *\n'
                                             'il tuo Figlio, battezzato da Giovanni\n'
                                             'nell’acqua del Giordano, *\n'
                                             'fu consacrato dallo Spirito Santo; **\n'
                                             'innalzato sulla croce,\n'
                                             'egli versò dal suo fianco sangue e acqua, *\n'
                                             'e, dopo la sua risurrezione, comandò ai discepoli: '
                                             '*\n'
                                             '«Andate, annunciate il Vangelo a tutti i popoli, +\n'
                                             'e battezzateli nel nome del Padre e del Figlio e '
                                             'dello Spirito Santo». **\n'
                                             'Ora, Padre,\n'
                                             'guarda con amore la tua Chiesa *\n'
                                             'e fa’ scaturire per lei +\n'
                                             'la sorgente del Battesimo. **\n'
                                             'Infondi in quest’acqua, per opera dello Spirito '
                                             'Santo,\n'
                                             'la grazia del tuo unico Figlio, *\n'
                                             'perché con il sacramento del Battesimo\n'
                                             'l’uomo, fatto a tua immagine,\n'
                                             'sia lavato dalla macchia del peccato, *\n'
                                             'e dall’acqua e dallo Spirito Santo + rinasca come '
                                             'nuova creatura. **\n'
                                             'Immergendo, secondo l’opportunità, il cero pasquale '
                                             'nell’acqua una o tre volte, continua:\n'
                                             'Discenda, Padre, in quest’acqua, *\n'
                                             'per opera del tuo Figlio, +\n'
                                             'la potenza dello Spirito Santo.**\n'
                                             'Tenendo il cero nell’acqua, prosegue:\n'
                                             'Tutti coloro che in essa riceveranno il Battesimo, '
                                             '*\n'
                                             'sepolti insieme con Cristo nella morte, +\n'
                                             'con lui risorgano alla vita immortale. **\n'
                                             'Egli è Dio, e vive e regna con te,\n'
                                             'nell’unità dello Spirito Santo, *\n'
                                             'per tutti i secoli dei secoli.**\n'
                                             'R/. Amen.\n'
                                             '44. Mentre si toglie il cero dall’acqua, il popolo '
                                             'acclama:\n'
                                             'Sorgenti delle acque, benedite il Signore:\n'
                                             'lodatelo ed esaltatelo nei secoli.',
                            'baptism': '<Conclusa la benedizione dell’acqua battesimale, dopo '
                                       'l’acclamazione del popolo, il\n'
                                       'sacerdote, stando in piedi, interroga gli adulti o i '
                                       'genitori e i padrini dei bambini, perché\n'
                                       'esprimano la rinuncia a satana, come è prescritto a suo '
                                       'luogo nel Rituale Romano.\n'
                                       'Se l’unzione con l’olio dei catecumeni non è avvenuta in '
                                       'precedenza tra i riti immediatamente preparatori, si fa in '
                                       'questo momento.\n'
                                       '46. Il sacerdote interroga individualmente gli adulti e, '
                                       'se si tratta di bambini, richiede la\n'
                                       'triplice professione di fede da parte di tutti i genitori '
                                       'e padrini insieme, come è indicato\n'
                                       'nei rispettivi Rituali.\n'
                                       '★ Ai battezzandi e ai genitori e padrini, tutti i '
                                       'presenti, con in mano le candele accese,\n'
                                       'si uniscono nella rinuncia a satana e nella professione di '
                                       'fede (cf. n. 52).\n'
                                       '47. Concluse le interrogazioni, il sacerdote battezza gli '
                                       'eletti, adulti e bambini.\n'
                                       '48. Dopo il Battesimo il sacerdote unge i bambini con il '
                                       'crisma. A tutti, sia adulti che\n'
                                       'bambini, è consegnata la veste bianca. Poi il sacerdote o '
                                       'il diacono presenta il cero pasquale per l’accensione '
                                       'delle candele dei neofiti. Per i bambini si omette il rito '
                                       'dell’Effatà.\n'
                                       '49. Se il Battesimo e gli altri riti esplicativi sono '
                                       'avvenuti al fonte, si fa ritorno in presbiterio, ordinando '
                                       'la processione come in precedenza. I neofiti adulti, i '
                                       'padrini o i genitori\n'
                                       'dei bambini portano le candele accese. Durante la '
                                       'processione si esegue il cantico battesimale Ecco l’acqua '
                                       'o un altro canto adatto, mentre il sacerdote asperge il '
                                       'popolo con l’acqua\n'
                                       'benedetta (n. 53).\n'
                                       '50. Se sono stati battezzati degli adulti, il vescovo o, '
                                       'in sua assenza, il presbitero che ha\n'
                                       'conferito il Battesimo, amministra loro il sacramento '
                                       'della Confermazione nel presbiterio, come è indicato nel '
                                       'Pontificale e nel Rituale Romano.\n'
                                       'Benedizione dell’acqua lustrale>',
                            'water_blessing': 'Se non si deve amministrare il Battesimo, né '
                                              'benedire il fonte battesimale, il sacerdote '
                                              'introduce i fedeli al rito di benedizione '
                                              'dell’acqua, dicendo:\n'
                                              'Fratelli e sorelle,\n'
                                              'supplichiamo il Signore Dio nostro\n'
                                              'perché benedica quest’acqua da lui creata,\n'
                                              'con la quale saremo aspersi in memoria del nostro '
                                              'Battesimo.\n'
                                              'Il Signore ci rinnovi interiormente,\n'
                                              'per essere sempre fedeli allo Spirito Santo\n'
                                              'che ci è stato dato in dono.\n'
                                              'E dopo una breve pausa di silenzio, con le braccia '
                                              'allargate, dice la seguente orazione:\n'
                                              'Signore Dio nostro,\n'
                                              'sii presente in mezzo al tuo popolo\n'
                                              'che veglia in preghiera in questa santissima '
                                              'notte:\n'
                                              'memori dell’opera mirabile della nostra creazione\n'
                                              'e dell’opera ancor più mirabile della nostra '
                                              'salvezza,\n'
                                              'ti preghiamo di benedire ^ quest’acqua.\n'
                                              'Tu l’hai creata perché donasse fecondità alla '
                                              'terra\n'
                                              'e offrisse sollievo e freschezza ai nostri corpi.\n'
                                              'Di questo dono della creazione\n'
                                              'hai fatto un segno della tua misericordia:\n'
                                              'attraverso l’acqua del Mar Rosso\n'
                                              'hai liberato il tuo popolo dalla schiavitù\n'
                                              'e nel deserto hai placato la sua sete con acqua '
                                              'dalla roccia.\n'
                                              'Con l’immagine dell’acqua viva\n'
                                              'i profeti hanno preannunciato la nuova alleanza\n'
                                              'che tu intendevi offrire agli uomini.\n'
                                              'Infine con l’acqua, santificata da Cristo nel '
                                              'Giordano,\n'
                                              'hai rinnovato la nostra umanità peccatrice nel '
                                              'lavacro battesimale.\n'
                                              'Ravviva in noi, o Signore,\n'
                                              'nel segno di quest’acqua benedetta,\n'
                                              'il ricordo del nostro Battesimo\n'
                                              'e donaci di essere uniti nella gioia ai nostri '
                                              'fratelli\n'
                                              'che sono stati battezzati nella Pasqua di Cristo '
                                              'Signore.\n'
                                              'Egli vive e regna nei secoli dei secoli.\n'
                                              'R/. Amen.\n'
                                              'Rinnovo delle promesse battesimali',
                            'baptism_renewal': 'Se non è stato celebrato il rito del Battesimo (e '
                                               'della Confermazione), dopo la benedizione '
                                               'dell’acqua, tutti, in piedi e con in mano le '
                                               'candele accese, rinnovano le promesse\n'
                                               'della fede battesimale.\n'
                                               'Il sacerdote si rivolge ai fedeli con queste o con '
                                               'altre simili parole:\n'
                                               'Fratelli e sorelle, per la grazia del mistero '
                                               'pasquale\n'
                                               'siamo stati sepolti insieme con Cristo nel '
                                               'Battesimo,\n'
                                               'per camminare con lui in una vita nuova.\n'
                                               'Ora, portato a termine il cammino quaresimale,\n'
                                               'rinnoviamo le promesse del santo Battesimo,\n'
                                               'con le quali un giorno abbiamo rinunciato a satana '
                                               'e alle sue opere,\n'
                                               'e ci siamo impegnati a servire Dio nella santa '
                                               'Chiesa cattolica.\n'
                                               'Sacerdote: Rinunciate a satana?\n'
                                               'Tutti: Rinuncio.\n'
                                               'Sacerdote: E a tutte le sue opere?\n'
                                               'Tutti: Rinuncio.\n'
                                               'Sacerdote: E a tutte le sue seduzioni?\n'
                                               'Tutti: Rinuncio.\n'
                                               'Oppure:\n'
                                               'Sacerdote: Rinunciate al peccato,\n'
                                               'per vivere nella libertà dei figli di Dio?\n'
                                               'Tutti: Rinuncio.\n'
                                               'Sacerdote: Rinunciate alle seduzioni del male,\n'
                                               'per non lasciarvi dominare dal peccato?\n'
                                               'Tutti: Rinuncio.\n'
                                               'Sacerdote: Rinunciate a satana, origine e causa di '
                                               'ogni peccato?\n'
                                               'Tutti: Rinuncio.\n'
                                               'Quindi prosegue:\n'
                                               'Sacerdote: Credete in Dio Padre onnipotente,\n'
                                               'creatore del cielo e della terra?\n'
                                               'Tutti: Credo.\n'
                                               'Sacerdote: Credete in Gesù Cristo,\n'
                                               'suo unico Figlio, nostro Signore,\n'
                                               'che nacque da Maria Vergine,\n'
                                               'morì e fu sepolto,\n'
                                               'è risuscitato dai morti\n'
                                               'e siede alla destra del Padre?\n'
                                               'Tutti: Credo.\n'
                                               'Sacerdote: Credete nello Spirito Santo,\n'
                                               'la santa Chiesa cattolica,\n'
                                               'la comunione dei santi,\n'
                                               'la remissione dei peccati,\n'
                                               'la risurrezione della carne e la vita eterna?\n'
                                               'Tutti: Credo.\n'
                                               'Il sacerdote conclude:\n'
                                               'Dio onnipotente,\n'
                                               'Padre del nostro Signore Gesù Cristo,\n'
                                               'che ci ha liberati dal peccato\n'
                                               'e ci ha fatti rinascere dall’acqua e dallo Spirito '
                                               'Santo,\n'
                                               'ci custodisca con la sua grazia\n'
                                               'per la vita eterna,\n'
                                               'in Cristo Gesù, nostro Signore.\n'
                                               'Tutti: Amen.',
                            'sprinkling': 'Il sacerdote asperge il popolo con l’acqua benedetta, '
                                          'mentre tutti cantano:\n'
                                          'Antifona Ecco l’acqua che sgorga dal tempio santo di '
                                          'Dio, alleluia;\n'
                                          'e a quanti giungerà quest’acqua, porterà salvezza\n'
                                          'ed essi canteranno: alleluia, alleluia.\n'
                                          'Si possono cantare anche altri canti di carattere '
                                          'battesimale.\n'
                                          '54. Nel frattempo i neofiti vengono accompagnati al '
                                          'loro posto tra i fedeli.\n'
                                          'Se la benedizione dell’acqua battesimale è stata '
                                          'compiuta nel presbiterio, i ministri portano al '
                                          'battistero il bacile con l’acqua.\n'
                                          'Se non si è fatta la benedizione dell’acqua '
                                          'battesimale, l’acqua lustrale si ripone in un luogo\n'
                                          'adatto.\n'
                                          '55. Fatta l’aspersione, il sacerdote ritorna alla sede '
                                          'e guida la Preghiera universale, alla\n'
                                          'quale per la prima volta prendono parte i neofiti.\n'
                                          'Non si dice il Credo.\n'
                                          'Quarta parte:\n'
                                          'Liturgia Eucaristica',
                            'vigil_eucharist_intro': '<Il sacedote si reca all’altare e dà inizio '
                                                     'alla Liturgia Eucaristica nel modo '
                                                     'consueto.\n'
                                                     '57. Conviene che il pane e il vino vengano '
                                                     'portati dai neofiti; se sono bambini, dai '
                                                     'loro\n'
                                                     'genitori o padrini.>',
                            'vigil_blessing': 'Benedizione solenne\n'
                                              'In questa santa notte di Pasqua,\n'
                                              'Dio onnipotente vi benedica\n'
                                              'e, nella sua misericordia,\n'
                                              'vi difenda da ogni insidia del peccato.\n'
                                              'R/. Amen.\n'
                                              'Dio che vi rinnova per la vita eterna,\n'
                                              'nella risurrezione del suo Figlio unigenito,\n'
                                              'vi conceda il premio dell’immortalità futura.\n'
                                              'R/. Amen.\n'
                                              'Voi, che dopo i giorni della passione del Signore\n'
                                              'celebrate nella gioia la festa di Pasqua,\n'
                                              'possiate giungere con animo esultante\n'
                                              'alla festa senza fine.\n'
                                              'R/. Amen.\n'
                                              'E la benedizione di Dio onnipotente,\n'
                                              'Padre e Figlio ^ e Spirito Santo,\n'
                                              'discenda su di voi\n'
                                              'e con voi rimanga sempre.\n'
                                              'R/. Amen.\n'
                                              'Nel caso in cui i nuovi battezzati fossero bambini, '
                                              'si può utilizzare la formula della benedizione '
                                              'solenne prevista dal Rito del Battesimo dei bambini '
                                              '(nn. 78-79 o 125-126).',
                            'vigil_dismissal': 'Nel congedare l’assemblea, il diacono o, in sua '
                                               'assenza, lo stesso sacerdote canta o dice:\n'
                                               'Andate in pace. Alleluia, alleluia.\n'
                                               'Oppure:\n'
                                               'La Messa è finita: andate in pace. Alleluia, '
                                               'alleluia.\n'
                                               'Oppure:\n'
                                               '★ Portate a tutti la gioia del Signore risorto. '
                                               'Andate in pace.\n'
                                               'Alleluia, alleluia.\n'
                                               'Tutti rispondono:\n'
                                               'Rendiamo grazie a Dio. Alleluia, alleluia.\n'
                                               'Questa forma di congedo si utilizza per tutta '
                                               'l’Ottava di Pasqua.',
                            'exsultet': {'choices': {'A': {'IT': 'Forma lunga', 'KR': '긴 양식'},
                                                     'B': {'IT': 'Forma breve', 'KR': '짧은 양식'}},
                                         'variants': {'A': {'lines': [{'sp': '',
                                                                       'text': 'V/. Il Signore sia '
                                                                               'con voi.'},
                                                                      {'sp': '◎',
                                                                       'text': 'E con il tuo '
                                                                               'spirito.]'},
                                                                      {'sp': '',
                                                                       'text': 'V/. In alto i '
                                                                               'nostri cuori.'},
                                                                      {'sp': '◎',
                                                                       'text': 'Sono rivolti al '
                                                                               'Signore.'},
                                                                      {'sp': '',
                                                                       'text': 'V/. Rendiamo '
                                                                               'grazie al Signore '
                                                                               'nostro Dio.'},
                                                                      {'sp': '◎',
                                                                       'text': 'È cosa buona e '
                                                                               'giusta.'},
                                                                      {'sp': '',
                                                                       'text': 'È veramente cosa '
                                                                               'buona e giusta'},
                                                                      {'sp': '',
                                                                       'text': 'esprimere con il '
                                                                               'canto l’esultanza '
                                                                               'dello spirito,'},
                                                                      {'sp': '',
                                                                       'text': 'e inneggiare al '
                                                                               'Dio invisibile, '
                                                                               'Padre '
                                                                               'onnipotente,'},
                                                                      {'sp': '',
                                                                       'text': 'e al suo unico '
                                                                               'Figlio, Gesù '
                                                                               'Cristo nostro '
                                                                               'Signore.'},
                                                                      {'sp': '',
                                                                       'text': 'Egli ha pagato per '
                                                                               'noi all’eterno '
                                                                               'Padre il debito di '
                                                                               'Adamo,'},
                                                                      {'sp': '',
                                                                       'text': 'e con il sangue '
                                                                               'sparso per la '
                                                                               'nostra salvezza'},
                                                                      {'sp': '',
                                                                       'text': 'ha cancellato la '
                                                                               'condanna della '
                                                                               'colpa antica.'},
                                                                      {'sp': '',
                                                                       'text': 'Questa è la vera '
                                                                               'Pasqua, in cui è '
                                                                               'ucciso il vero '
                                                                               'Agnello,'},
                                                                      {'sp': '',
                                                                       'text': 'che con il suo '
                                                                               'sangue consacra le '
                                                                               'case dei fedeli.'},
                                                                      {'sp': '',
                                                                       'text': 'Questa è la notte '
                                                                               'in cui hai '
                                                                               'liberato i figli '
                                                                               'd’Israele, nostri '
                                                                               'padri,'},
                                                                      {'sp': '',
                                                                       'text': 'dalla schiavitù '
                                                                               'dell’Egitto,'},
                                                                      {'sp': '',
                                                                       'text': 'e li hai fatti '
                                                                               'passare illesi '
                                                                               'attraverso il Mar '
                                                                               'Rosso.'},
                                                                      {'sp': '',
                                                                       'text': 'Questa è la notte '
                                                                               'in cui hai vinto '
                                                                               'le tenebre del '
                                                                               'peccato'},
                                                                      {'sp': '',
                                                                       'text': 'con lo splendore '
                                                                               'della colonna di '
                                                                               'fuoco.'},
                                                                      {'sp': '',
                                                                       'text': 'Questa è la notte '
                                                                               'che salva su tutta '
                                                                               'la terra i '
                                                                               'credenti nel '
                                                                               'Cristo'},
                                                                      {'sp': '',
                                                                       'text': 'dall’oscurità del '
                                                                               'peccato e dalla '
                                                                               'corruzione del '
                                                                               'mondo,'},
                                                                      {'sp': '',
                                                                       'text': 'li consacra '
                                                                               'all’amore del '
                                                                               'Padre'},
                                                                      {'sp': '',
                                                                       'text': 'e li unisce nella '
                                                                               'comunione dei '
                                                                               'santi.'},
                                                                      {'sp': '',
                                                                       'text': 'Questa è la notte '
                                                                               'in cui Cristo, '
                                                                               'spezzando i '
                                                                               'vincoli della '
                                                                               'morte,'},
                                                                      {'sp': '',
                                                                       'text': 'risorge vincitore '
                                                                               'dal sepolcro.'},
                                                                      {'sp': '',
                                                                       'text': 'Nessun vantaggio '
                                                                               'per noi essere '
                                                                               'nati, se lui non '
                                                                               'ci avesse '
                                                                               'redenti.'},
                                                                      {'sp': '',
                                                                       'text': 'O immensità del '
                                                                               'tuo amore per '
                                                                               'noi!'},
                                                                      {'sp': '',
                                                                       'text': 'O inestimabile '
                                                                               'segno di bontà:'},
                                                                      {'sp': '',
                                                                       'text': 'per riscattare lo '
                                                                               'schiavo, hai '
                                                                               'sacrificato il tuo '
                                                                               'Figlio!'},
                                                                      {'sp': '',
                                                                       'text': 'Davvero era '
                                                                               'necessario il '
                                                                               'peccato di Adamo,'},
                                                                      {'sp': '',
                                                                       'text': 'che è stato '
                                                                               'distrutto con la '
                                                                               'morte del Cristo.'},
                                                                      {'sp': '',
                                                                       'text': 'Felice colpa, che '
                                                                               'meritò di avere un '
                                                                               'così grande '
                                                                               'redentore!'},
                                                                      {'sp': '',
                                                                       'text': 'O notte beata, tu '
                                                                               'sola hai meritato '
                                                                               'di conoscere'},
                                                                      {'sp': '',
                                                                       'text': 'il tempo e l’ora '
                                                                               'in cui Cristo è '
                                                                               'risorto dagli '
                                                                               'inferi.'},
                                                                      {'sp': '',
                                                                       'text': 'Di questa notte è '
                                                                               'stato scritto:'},
                                                                      {'sp': '',
                                                                       'text': 'la notte splenderà '
                                                                               'come il giorno,'},
                                                                      {'sp': '',
                                                                       'text': 'e sarà fonte di '
                                                                               'luce per la mia '
                                                                               'delizia.'},
                                                                      {'sp': '',
                                                                       'text': 'Il santo mistero '
                                                                               'di questa notte '
                                                                               'sconfigge il '
                                                                               'male,'},
                                                                      {'sp': '',
                                                                       'text': 'lava le colpe, '
                                                                               'restituisce '
                                                                               'l’innocenza ai '
                                                                               'peccatori,'},
                                                                      {'sp': '',
                                                                       'text': 'la gioia agli '
                                                                               'afflitti.'},
                                                                      {'sp': '',
                                                                       'text': 'Dissipa l’odio, '
                                                                               'piega la durezza '
                                                                               'dei potenti,'},
                                                                      {'sp': '',
                                                                       'text': 'promuove la '
                                                                               'concordia e la '
                                                                               'pace.'},
                                                                      {'sp': '',
                                                                       'text': 'O notte veramente '
                                                                               'gloriosa,'},
                                                                      {'sp': '',
                                                                       'text': 'che ricongiunge la '
                                                                               'terra al cielo e '
                                                                               'l’uomo al suo '
                                                                               'creatore!'},
                                                                      {'sp': '',
                                                                       'text': 'In questa notte di '
                                                                               'grazia accogli, '
                                                                               'Padre santo, il '
                                                                               'sacrificio di '
                                                                               'lode,'},
                                                                      {'sp': '',
                                                                       'text': 'che la Chiesa ti '
                                                                               'offre per mano dei '
                                                                               'suoi ministri'},
                                                                      {'sp': '',
                                                                       'text': 'nella solenne '
                                                                               'liturgia del '
                                                                               'cero,'},
                                                                      {'sp': '',
                                                                       'text': 'frutto del lavoro '
                                                                               'delle api, simbolo '
                                                                               'della nuova luce.'},
                                                                      {'sp': '',
                                                                       'text': 'Riconosciamo nella '
                                                                               'colonna '
                                                                               'dell’Esodo'},
                                                                      {'sp': '',
                                                                       'text': 'gli antichi '
                                                                               'presagi di questo '
                                                                               'lume pasquale,'},
                                                                      {'sp': '',
                                                                       'text': 'che un fuoco '
                                                                               'ardente ha acceso '
                                                                               'in onore di Dio.'},
                                                                      {'sp': '',
                                                                       'text': 'Pur diviso in '
                                                                               'tante fiammelle '
                                                                               'non estingue il '
                                                                               'suo vivo '
                                                                               'splendore,'},
                                                                      {'sp': '',
                                                                       'text': 'ma si accresce nel '
                                                                               'consumarsi della '
                                                                               'cera'},
                                                                      {'sp': '',
                                                                       'text': 'che l’ape madre ha '
                                                                               'prodotto'},
                                                                      {'sp': '',
                                                                       'text': 'per alimentare '
                                                                               'questa preziosa '
                                                                               'lampada.'},
                                                                      {'sp': '',
                                                                       'text': 'Ti preghiamo, '
                                                                               'dunque, o Signore, '
                                                                               'che questo cero,'},
                                                                      {'sp': '',
                                                                       'text': 'offerto in onore '
                                                                               'del tuo nome'},
                                                                      {'sp': '',
                                                                       'text': 'per illuminare '
                                                                               'l’oscurità di '
                                                                               'questa notte,'},
                                                                      {'sp': '',
                                                                       'text': 'risplenda di luce '
                                                                               'che mai si '
                                                                               'spegne.'},
                                                                      {'sp': '',
                                                                       'text': 'Salga a te come '
                                                                               'profumo soave,'},
                                                                      {'sp': '',
                                                                       'text': 'si confonda con le '
                                                                               'stelle del cielo.'},
                                                                      {'sp': '',
                                                                       'text': 'Lo trovi acceso la '
                                                                               'stella del '
                                                                               'mattino,'},
                                                                      {'sp': '',
                                                                       'text': 'quella stella che '
                                                                               'non conosce '
                                                                               'tramonto:'},
                                                                      {'sp': '',
                                                                       'text': 'Cristo, tuo '
                                                                               'Figlio, che '
                                                                               'risuscitato dai '
                                                                               'morti'},
                                                                      {'sp': '',
                                                                       'text': 'fa risplendere '
                                                                               'sugli uomini la '
                                                                               'sua luce serena'},
                                                                      {'sp': '',
                                                                       'text': 'e vive e regna nei '
                                                                               'secoli dei '
                                                                               'secoli.'},
                                                                      {'sp': '◎',
                                                                       'text': 'Amen.'}]},
                                                      'B': {'lines': [{'sp': '',
                                                                       'text': 'Preconio pasquale '
                                                                               'in forma breve'},
                                                                      {'sp': '',
                                                                       'text': 'Esulti il coro '
                                                                               'degli angeli,'},
                                                                      {'sp': '',
                                                                       'text': 'esulti l’assemblea '
                                                                               'celeste:'},
                                                                      {'sp': '',
                                                                       'text': 'un inno di gloria '
                                                                               'saluti il trionfo '
                                                                               'del Signore '
                                                                               'risorto.'},
                                                                      {'sp': '',
                                                                       'text': 'Gioisca la terra '
                                                                               'inondata da così '
                                                                               'grande splendore:'},
                                                                      {'sp': '',
                                                                       'text': 'la luce del Re '
                                                                               'eterno'},
                                                                      {'sp': '',
                                                                       'text': 'ha vinto le '
                                                                               'tenebre del '
                                                                               'mondo.'},
                                                                      {'sp': '',
                                                                       'text': 'Gioisca la madre '
                                                                               'Chiesa,'},
                                                                      {'sp': '',
                                                                       'text': 'splendente della '
                                                                               'gloria del suo '
                                                                               'Signore,'},
                                                                      {'sp': '',
                                                                       'text': 'e questo tempio '
                                                                               'tutto risuoni'},
                                                                      {'sp': '',
                                                                       'text': 'per le '
                                                                               'acclamazioni del '
                                                                               'popolo in festa.'},
                                                                      {'sp': '',
                                                                       'text': '[V/. Il Signore '
                                                                               'sia con voi.'},
                                                                      {'sp': '◎',
                                                                       'text': 'E con il tuo '
                                                                               'spirito.]'},
                                                                      {'sp': '',
                                                                       'text': 'V/. In alto i '
                                                                               'nostri cuori.'},
                                                                      {'sp': '◎',
                                                                       'text': 'Sono rivolti al '
                                                                               'Signore.'},
                                                                      {'sp': '',
                                                                       'text': 'V/. Rendiamo '
                                                                               'grazie al Signore '
                                                                               'nostro Dio.'},
                                                                      {'sp': '◎',
                                                                       'text': 'È cosa buona e '
                                                                               'giusta.'},
                                                                      {'sp': '',
                                                                       'text': 'È veramente cosa '
                                                                               'buona e giusta'},
                                                                      {'sp': '',
                                                                       'text': 'esprimere con il '
                                                                               'canto l’esultanza '
                                                                               'dello spirito,'},
                                                                      {'sp': '',
                                                                       'text': 'e inneggiare al '
                                                                               'Dio invisibile, '
                                                                               'Padre '
                                                                               'onnipotente,'},
                                                                      {'sp': '',
                                                                       'text': 'e al suo unico '
                                                                               'Figlio, Gesù '
                                                                               'Cristo nostro '
                                                                               'Signore.'},
                                                                      {'sp': '',
                                                                       'text': 'Egli ha pagato per '
                                                                               'noi all’eterno '
                                                                               'Padre il debito di '
                                                                               'Adamo,'},
                                                                      {'sp': '',
                                                                       'text': 'e con il sangue '
                                                                               'sparso per la '
                                                                               'nostra salvezza'},
                                                                      {'sp': '',
                                                                       'text': 'ha cancellato la '
                                                                               'condanna della '
                                                                               'colpa antica.'},
                                                                      {'sp': '',
                                                                       'text': 'Questa è la vera '
                                                                               'Pasqua, in cui è '
                                                                               'ucciso il vero '
                                                                               'Agnello,'},
                                                                      {'sp': '',
                                                                       'text': 'che con il suo '
                                                                               'sangue consacra le '
                                                                               'case dei fedeli.'},
                                                                      {'sp': '',
                                                                       'text': 'Questa è la notte '
                                                                               'in cui hai '
                                                                               'liberato i figli '
                                                                               'd’Israele, nostri '
                                                                               'padri,'},
                                                                      {'sp': '',
                                                                       'text': 'dalla schiavitù '
                                                                               'dell’Egitto,'},
                                                                      {'sp': '',
                                                                       'text': 'e li hai fatti '
                                                                               'passare illesi '
                                                                               'attraverso il Mar '
                                                                               'Rosso.'},
                                                                      {'sp': '',
                                                                       'text': 'Questa è la notte '
                                                                               'in cui hai vinto '
                                                                               'le tenebre del '
                                                                               'peccato'},
                                                                      {'sp': '',
                                                                       'text': 'con lo splendore '
                                                                               'della colonna di '
                                                                               'fuoco.'},
                                                                      {'sp': '',
                                                                       'text': 'Questa è la notte '
                                                                               'che salva su tutta '
                                                                               'la terra i '
                                                                               'credenti nel '
                                                                               'Cristo'},
                                                                      {'sp': '',
                                                                       'text': 'dall’oscurità del '
                                                                               'peccato e dalla '
                                                                               'corruzione del '
                                                                               'mondo,'},
                                                                      {'sp': '',
                                                                       'text': 'li consacra '
                                                                               'all’amore del '
                                                                               'Padre'},
                                                                      {'sp': '',
                                                                       'text': 'e li unisce nella '
                                                                               'comunione dei '
                                                                               'santi.'},
                                                                      {'sp': '',
                                                                       'text': 'Questa è la notte '
                                                                               'in cui Cristo, '
                                                                               'spezzando i '
                                                                               'vincoli della '
                                                                               'morte,'},
                                                                      {'sp': '',
                                                                       'text': 'risorge vincitore '
                                                                               'dal sepolcro.'},
                                                                      {'sp': '',
                                                                       'text': 'O immensità del '
                                                                               'tuo amore per '
                                                                               'noi!'},
                                                                      {'sp': '',
                                                                       'text': 'O inestimabile '
                                                                               'segno di bontà:'},
                                                                      {'sp': '',
                                                                       'text': 'per riscattare lo '
                                                                               'schiavo, hai '
                                                                               'sacrificato il tuo '
                                                                               'Figlio!'},
                                                                      {'sp': '',
                                                                       'text': 'Davvero era '
                                                                               'necessario il '
                                                                               'peccato di Adamo,'},
                                                                      {'sp': '',
                                                                       'text': 'che è stato '
                                                                               'distrutto con la '
                                                                               'morte del Cristo.'},
                                                                      {'sp': '',
                                                                       'text': 'Felice colpa, che '
                                                                               'meritò di avere un '
                                                                               'così grande '
                                                                               'redentore!'},
                                                                      {'sp': '',
                                                                       'text': 'Il santo mistero '
                                                                               'di questa notte '
                                                                               'sconfigge il '
                                                                               'male,'},
                                                                      {'sp': '',
                                                                       'text': 'lava le colpe, '
                                                                               'restituisce '
                                                                               'l’innocenza ai '
                                                                               'peccatori,'},
                                                                      {'sp': '',
                                                                       'text': 'la gioia agli '
                                                                               'afflitti.'},
                                                                      {'sp': '',
                                                                       'text': 'O notte veramente '
                                                                               'gloriosa,'},
                                                                      {'sp': '',
                                                                       'text': 'che ricongiunge la '
                                                                               'terra al cielo e '
                                                                               'l’uomo al suo '
                                                                               'creatore!'},
                                                                      {'sp': '',
                                                                       'text': 'In questa notte di '
                                                                               'grazia accogli, '
                                                                               'Padre santo, il '
                                                                               'sacrificio di '
                                                                               'lode,'},
                                                                      {'sp': '',
                                                                       'text': 'che la Chiesa ti '
                                                                               'offre per mano dei '
                                                                               'suoi ministri'},
                                                                      {'sp': '',
                                                                       'text': 'nella solenne '
                                                                               'liturgia del '
                                                                               'cero,'},
                                                                      {'sp': '',
                                                                       'text': 'frutto del lavoro '
                                                                               'delle api, simbolo '
                                                                               'della nuova luce.'},
                                                                      {'sp': '',
                                                                       'text': 'Ti preghiamo, '
                                                                               'dunque, o Signore, '
                                                                               'che questo cero,'},
                                                                      {'sp': '',
                                                                       'text': 'offerto in onore '
                                                                               'del tuo nome'},
                                                                      {'sp': '',
                                                                       'text': 'per illuminare '
                                                                               'l’oscurità di '
                                                                               'questa notte,'},
                                                                      {'sp': '',
                                                                       'text': 'risplenda di luce '
                                                                               'che mai si '
                                                                               'spegne.'},
                                                                      {'sp': '',
                                                                       'text': 'Salga a te come '
                                                                               'profumo soave,'},
                                                                      {'sp': '',
                                                                       'text': 'si confonda con le '
                                                                               'stelle del cielo.'},
                                                                      {'sp': '',
                                                                       'text': 'Lo trovi acceso la '
                                                                               'stella del '
                                                                               'mattino,'},
                                                                      {'sp': '',
                                                                       'text': 'quella stella che '
                                                                               'non conosce '
                                                                               'tramonto:'},
                                                                      {'sp': '',
                                                                       'text': 'Cristo, tuo '
                                                                               'Figlio, che '
                                                                               'risuscitato dai '
                                                                               'morti'},
                                                                      {'sp': '',
                                                                       'text': 'fa risplendere '
                                                                               'sugli uomini la '
                                                                               'sua luce serena'},
                                                                      {'sp': '',
                                                                       'text': 'e vive e regna nei '
                                                                               'secoli dei '
                                                                               'secoli.'},
                                                                      {'sp': '◎',
                                                                       'text': 'Amen.'}]}}},
                            'vigil_prayer_1': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'}},
                                               'variants': {'A': {'lines': [{'sp': '',
                                                                             'text': 'Dopo la '
                                                                                     'prima '
                                                                                     'lettura (La '
                                                                                     'creazione: '
                                                                                     'Gen 1, 1-2, '
                                                                                     '2; oppure 1, '
                                                                                     '1.26-31) e '
                                                                                     'il salmo '
                                                                                     '(Sal'},
                                                                            {'sp': '',
                                                                             'text': '103 o Sal '
                                                                                     '32).'},
                                                                            {'sp': '',
                                                                             'text': 'Preghiamo.'},
                                                                            {'sp': '',
                                                                             'text': 'Dio '
                                                                                     'onnipotente '
                                                                                     'ed eterno,'},
                                                                            {'sp': '',
                                                                             'text': 'ammirabile '
                                                                                     'in tutte le '
                                                                                     'opere del '
                                                                                     'tuo amore,'},
                                                                            {'sp': '',
                                                                             'text': 'illumina i '
                                                                                     'figli da te '
                                                                                     'redenti'},
                                                                            {'sp': '',
                                                                             'text': 'perché '
                                                                                     'comprendano '
                                                                                     'che,'},
                                                                            {'sp': '',
                                                                             'text': 'se fu grande '
                                                                                     'all’inizio '
                                                                                     'la creazione '
                                                                                     'del mondo,'},
                                                                            {'sp': '',
                                                                             'text': 'ben più '
                                                                                     'grande, '
                                                                                     'nella '
                                                                                     'pienezza dei '
                                                                                     'tempi,'},
                                                                            {'sp': '',
                                                                             'text': 'fu l’opera '
                                                                                     'della nostra '
                                                                                     'redenzione,'},
                                                                            {'sp': '',
                                                                             'text': 'nel '
                                                                                     'sacrificio '
                                                                                     'pasquale di '
                                                                                     'Cristo '
                                                                                     'Signore.'},
                                                                            {'sp': '',
                                                                             'text': 'Egli vive e '
                                                                                     'regna nei '
                                                                                     'secoli dei '
                                                                                     'secoli.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'},
                                                                            {'sp': '',
                                                                             'text': 'Oppure (La '
                                                                                     'creazione '
                                                                                     'dell’uomo):'},
                                                                            {'sp': '',
                                                                             'text': 'Preghiamo.'},
                                                                            {'sp': '',
                                                                             'text': 'O Dio, che '
                                                                                     'in modo '
                                                                                     'mirabile'},
                                                                            {'sp': '',
                                                                             'text': 'ci hai '
                                                                                     'creati a tua '
                                                                                     'immagine'},
                                                                            {'sp': '',
                                                                             'text': 'e in modo '
                                                                                     'più mirabile '
                                                                                     'ci hai '
                                                                                     'rinnovati e '
                                                                                     'redenti,'},
                                                                            {'sp': '',
                                                                             'text': 'fa’ che '
                                                                                     'resistiamo '
                                                                                     'con la forza '
                                                                                     'dello '
                                                                                     'Spirito'},
                                                                            {'sp': '',
                                                                             'text': 'alle '
                                                                                     'seduzioni '
                                                                                     'del '
                                                                                     'peccato,'},
                                                                            {'sp': '',
                                                                             'text': 'per giungere '
                                                                                     'alla gioia '
                                                                                     'eterna.'},
                                                                            {'sp': '',
                                                                             'text': 'Per Cristo '
                                                                                     'nostro '
                                                                                     'Signore.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]}}},
                            'vigil_prayer_2': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'}},
                                               'variants': {'A': {'lines': [{'sp': '',
                                                                             'text': 'Dopo la '
                                                                                     'seconda '
                                                                                     'lettura (Il '
                                                                                     'sacrificio '
                                                                                     'di Abramo: '
                                                                                     'Gen 22, '
                                                                                     '1-18; oppure '
                                                                                     '22, '
                                                                                     '1-2.9a.10-13.'},
                                                                            {'sp': '',
                                                                             'text': '15-18) e il '
                                                                                     'salmo (Sal '
                                                                                     '15).'},
                                                                            {'sp': '',
                                                                             'text': 'Preghiamo.'},
                                                                            {'sp': '',
                                                                             'text': 'O Dio, Padre '
                                                                                     'dei '
                                                                                     'credenti,'},
                                                                            {'sp': '',
                                                                             'text': 'che '
                                                                                     'estendendo a '
                                                                                     'tutti gli '
                                                                                     'uomini il '
                                                                                     'dono '
                                                                                     'dell’adozione '
                                                                                     'filiale'},
                                                                            {'sp': '',
                                                                             'text': 'moltiplichi '
                                                                                     'in tutta la '
                                                                                     'terra i tuoi '
                                                                                     'figli,'},
                                                                            {'sp': '',
                                                                             'text': 'e nel '
                                                                                     'sacramento '
                                                                                     'pasquale del '
                                                                                     'Battesimo'},
                                                                            {'sp': '',
                                                                             'text': 'adempi la '
                                                                                     'promessa '
                                                                                     'fatta ad '
                                                                                     'Abramo'},
                                                                            {'sp': '',
                                                                             'text': 'di renderlo '
                                                                                     'padre di '
                                                                                     'tutte le '
                                                                                     'nazioni,'},
                                                                            {'sp': '',
                                                                             'text': 'concedi al '
                                                                                     'tuo popolo '
                                                                                     'di '
                                                                                     'rispondere '
                                                                                     'degnamente'},
                                                                            {'sp': '',
                                                                             'text': 'alla grazia '
                                                                                     'della tua '
                                                                                     'chiamata.'},
                                                                            {'sp': '',
                                                                             'text': 'Per Cristo '
                                                                                     'nostro '
                                                                                     'Signore.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]}}},
                            'vigil_prayer_3': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'},
                                                           'B': {'KR': '제2양식', 'EN': 'Form 2'}},
                                               'variants': {'A': {'lines': [{'sp': '',
                                                                             'text': 'Dopo la '
                                                                                     'terza '
                                                                                     'lettura (Il '
                                                                                     'passaggio '
                                                                                     'del Mar '
                                                                                     'Rosso: Es '
                                                                                     '14, 15-15, '
                                                                                     '1) e il suo '
                                                                                     'cantico (Es '
                                                                                     '15).'},
                                                                            {'sp': '',
                                                                             'text': 'Preghiamo.'},
                                                                            {'sp': '',
                                                                             'text': 'O Dio, anche '
                                                                                     'ai nostri '
                                                                                     'giorni'},
                                                                            {'sp': '',
                                                                             'text': 'vediamo '
                                                                                     'risplendere '
                                                                                     'i tuoi '
                                                                                     'antichi '
                                                                                     'prodigi:'},
                                                                            {'sp': '',
                                                                             'text': 'ciò che hai '
                                                                                     'fatto con la '
                                                                                     'tua mano '
                                                                                     'potente'},
                                                                            {'sp': '',
                                                                             'text': 'per liberare '
                                                                                     'un solo '
                                                                                     'popolo '
                                                                                     'dall’oppressione '
                                                                                     'del '
                                                                                     'faraone,'},
                                                                            {'sp': '',
                                                                             'text': 'ora lo compi '
                                                                                     'attraverso '
                                                                                     'l’acqua del '
                                                                                     'Battesimo'},
                                                                            {'sp': '',
                                                                             'text': 'per la '
                                                                                     'salvezza di '
                                                                                     'tutti i '
                                                                                     'popoli;'},
                                                                            {'sp': '',
                                                                             'text': 'concedi che '
                                                                                     'l’umanità '
                                                                                     'intera sia '
                                                                                     'accolta tra '
                                                                                     'i figli di '
                                                                                     'Abramo'},
                                                                            {'sp': '',
                                                                             'text': 'e partecipi '
                                                                                     'alla dignità '
                                                                                     'del popolo '
                                                                                     'eletto.'},
                                                                            {'sp': '',
                                                                             'text': 'Per Cristo '
                                                                                     'nostro '
                                                                                     'Signore.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]},
                                                            'B': {'lines': [{'sp': '',
                                                                             'text': 'Preghiamo.'},
                                                                            {'sp': '',
                                                                             'text': 'O Dio, che '
                                                                                     'hai rivelato '
                                                                                     'nella luce '
                                                                                     'della nuova '
                                                                                     'alleanza'},
                                                                            {'sp': '',
                                                                             'text': 'il '
                                                                                     'significato '
                                                                                     'degli '
                                                                                     'antichi '
                                                                                     'prodigi'},
                                                                            {'sp': '',
                                                                             'text': 'così che il '
                                                                                     'Mar Rosso '
                                                                                     'fosse '
                                                                                     'l’immagine '
                                                                                     'del fonte '
                                                                                     'battesimale'},
                                                                            {'sp': '',
                                                                             'text': 'e il popolo '
                                                                                     'liberato '
                                                                                     'dalla '
                                                                                     'schiavitù'},
                                                                            {'sp': '',
                                                                             'text': 'prefigurasse '
                                                                                     'il popolo '
                                                                                     'cristiano,'},
                                                                            {'sp': '',
                                                                             'text': 'concedi che '
                                                                                     'tutti gli '
                                                                                     'uomini,'},
                                                                            {'sp': '',
                                                                             'text': 'mediante la '
                                                                                     'fede, siano '
                                                                                     'resi '
                                                                                     'partecipi '
                                                                                     'del '
                                                                                     'privilegio '
                                                                                     'dei figli '
                                                                                     'd’Israele'},
                                                                            {'sp': '',
                                                                             'text': 'e siano '
                                                                                     'rigenerati '
                                                                                     'dal dono del '
                                                                                     'tuo '
                                                                                     'Spirito.'},
                                                                            {'sp': '',
                                                                             'text': 'Per Cristo '
                                                                                     'nostro '
                                                                                     'Signore.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]}}},
                            'vigil_prayer_4': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'}},
                                               'variants': {'A': {'lines': [{'sp': '',
                                                                             'text': 'Dopo la '
                                                                                     'quarta '
                                                                                     'lettura (La '
                                                                                     'nuova '
                                                                                     'Gerusalemme: '
                                                                                     'Is 54, 5-14) '
                                                                                     'e il salmo '
                                                                                     '(Sal 29).'},
                                                                            {'sp': '',
                                                                             'text': 'Preghiamo.'},
                                                                            {'sp': '',
                                                                             'text': 'Dio '
                                                                                     'onnipotente '
                                                                                     'ed eterno, '
                                                                                     'moltiplica a '
                                                                                     'gloria del '
                                                                                     'tuo nome'},
                                                                            {'sp': '',
                                                                             'text': 'la '
                                                                                     'discendenza '
                                                                                     'promessa '
                                                                                     'alla fede '
                                                                                     'dei '
                                                                                     'patriarchi'},
                                                                            {'sp': '',
                                                                             'text': 'e aumenta il '
                                                                                     'numero dei '
                                                                                     'tuoi figli,'},
                                                                            {'sp': '',
                                                                             'text': 'perché la '
                                                                                     'Chiesa veda '
                                                                                     'realizzato '
                                                                                     'il disegno '
                                                                                     'universale '
                                                                                     'di '
                                                                                     'salvezza,'},
                                                                            {'sp': '',
                                                                             'text': 'nel quale i '
                                                                                     'nostri padri '
                                                                                     'avevano '
                                                                                     'fermamente '
                                                                                     'sperato.'},
                                                                            {'sp': '',
                                                                             'text': 'Per Cristo '
                                                                                     'nostro '
                                                                                     'Signore.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'},
                                                                            {'sp': '',
                                                                             'text': 'Oppure '
                                                                                     'un’altra '
                                                                                     'orazione '
                                                                                     'scelta tra '
                                                                                     'quelle che '
                                                                                     'seguono le '
                                                                                     'letture '
                                                                                     'omesse.'}]}}},
                            'vigil_prayer_5': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'}},
                                               'variants': {'A': {'lines': [{'sp': '',
                                                                             'text': 'Dopo la '
                                                                                     'quinta '
                                                                                     'lettura (La '
                                                                                     'salvezza '
                                                                                     'offerta '
                                                                                     'gratuitamente '
                                                                                     'a tutti gli '
                                                                                     'uomini: Is '
                                                                                     '55, 1-11)'},
                                                                            {'sp': '',
                                                                             'text': 'e il cantico '
                                                                                     '(Is 12, '
                                                                                     '2-6).'},
                                                                            {'sp': '',
                                                                             'text': 'Preghiamo.'},
                                                                            {'sp': '',
                                                                             'text': 'Dio '
                                                                                     'onnipotente '
                                                                                     'ed eterno, '
                                                                                     'unica '
                                                                                     'speranza del '
                                                                                     'mondo,'},
                                                                            {'sp': '',
                                                                             'text': 'che mediante '
                                                                                     'l’annuncio '
                                                                                     'dei profeti'},
                                                                            {'sp': '',
                                                                             'text': 'hai rivelato '
                                                                                     'i misteri '
                                                                                     'che oggi '
                                                                                     'celebriamo,'},
                                                                            {'sp': '',
                                                                             'text': 'ravviva la '
                                                                                     'nostra sete '
                                                                                     'di te,'},
                                                                            {'sp': '',
                                                                             'text': 'perché '
                                                                                     'soltanto con '
                                                                                     'l’azione del '
                                                                                     'tuo Spirito'},
                                                                            {'sp': '',
                                                                             'text': 'possiamo '
                                                                                     'progredire '
                                                                                     'nelle vie '
                                                                                     'del bene.'},
                                                                            {'sp': '',
                                                                             'text': 'Per Cristo '
                                                                                     'nostro '
                                                                                     'Signore.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]}}},
                            'vigil_prayer_6': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'}},
                                               'variants': {'A': {'lines': [{'sp': '',
                                                                             'text': 'Dopo la '
                                                                                     'sesta '
                                                                                     'lettura (La '
                                                                                     'fonte della '
                                                                                     'sapienza: '
                                                                                     'Bar 3, '
                                                                                     '9-15.32-4, '
                                                                                     '4) e il '
                                                                                     'salmo (Sal '
                                                                                     '18).'},
                                                                            {'sp': '',
                                                                             'text': 'Preghiamo.'},
                                                                            {'sp': '',
                                                                             'text': 'O Dio, che '
                                                                                     'accresci '
                                                                                     'sempre la '
                                                                                     'tua Chiesa'},
                                                                            {'sp': '',
                                                                             'text': 'chiamando '
                                                                                     'nuovi figli '
                                                                                     'da tutte le '
                                                                                     'genti,'},
                                                                            {'sp': '',
                                                                             'text': 'custodisci '
                                                                                     'nella tua '
                                                                                     'protezione'},
                                                                            {'sp': '',
                                                                             'text': 'coloro che '
                                                                                     'fai '
                                                                                     'rinascere '
                                                                                     'dall’acqua '
                                                                                     'del '
                                                                                     'Battesimo.'},
                                                                            {'sp': '',
                                                                             'text': 'Per Cristo '
                                                                                     'nostro '
                                                                                     'Signore.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]}}},
                            'vigil_prayer_7': {'choices': {'A': {'KR': '제1양식', 'EN': 'Form 1'},
                                                           'B': {'KR': '제2양식', 'EN': 'Form 2'}},
                                               'variants': {'A': {'lines': [{'sp': '',
                                                                             'text': 'Dopo la '
                                                                                     'settima '
                                                                                     'lettura (Il '
                                                                                     'cuore nuovo '
                                                                                     'e lo spirito '
                                                                                     'nuovo: Ez '
                                                                                     '36, '
                                                                                     '16.17a.18-28) '
                                                                                     'e il'},
                                                                            {'sp': '',
                                                                             'text': 'salmo (Sal '
                                                                                     '41-42 o Is '
                                                                                     '12, 2-6 o '
                                                                                     'Sal 50).'},
                                                                            {'sp': '',
                                                                             'text': 'Preghiamo.'},
                                                                            {'sp': '',
                                                                             'text': 'O Dio, '
                                                                                     'potenza '
                                                                                     'immutabile e '
                                                                                     'luce che non '
                                                                                     'tramonta,'},
                                                                            {'sp': '',
                                                                             'text': 'guarda con '
                                                                                     'amore al '
                                                                                     'mirabile '
                                                                                     'sacramento '
                                                                                     'di tutta la '
                                                                                     'Chiesa'},
                                                                            {'sp': '',
                                                                             'text': 'e compi '
                                                                                     'nella pace '
                                                                                     'l’opera '
                                                                                     'dell’umana '
                                                                                     'salvezza'},
                                                                            {'sp': '',
                                                                             'text': 'secondo il '
                                                                                     'tuo disegno '
                                                                                     'eterno;'},
                                                                            {'sp': '',
                                                                             'text': 'tutto il '
                                                                                     'mondo '
                                                                                     'riconosca e '
                                                                                     'veda'},
                                                                            {'sp': '',
                                                                             'text': 'che quanto è '
                                                                                     'distrutto si '
                                                                                     'ricostruisce,'},
                                                                            {'sp': '',
                                                                             'text': 'quanto è '
                                                                                     'invecchiato '
                                                                                     'si rinnova,'},
                                                                            {'sp': '',
                                                                             'text': 'e tutto '
                                                                                     'ritorna alla '
                                                                                     'sua '
                                                                                     'integrità,'},
                                                                            {'sp': '',
                                                                             'text': 'per mezzo di '
                                                                                     'Cristo, che '
                                                                                     'è principio '
                                                                                     'di ogni '
                                                                                     'cosa.'},
                                                                            {'sp': '',
                                                                             'text': 'Egli vive e '
                                                                                     'regna nei '
                                                                                     'secoli dei '
                                                                                     'secoli.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]},
                                                            'B': {'lines': [{'sp': '',
                                                                             'text': 'Preghiamo.'},
                                                                            {'sp': '',
                                                                             'text': 'O Dio, che '
                                                                                     'nelle pagine '
                                                                                     'dell’Antico '
                                                                                     'e Nuovo '
                                                                                     'Testamento'},
                                                                            {'sp': '',
                                                                             'text': 'ci insegni a '
                                                                                     'celebrare il '
                                                                                     'mistero '
                                                                                     'pasquale,'},
                                                                            {'sp': '',
                                                                             'text': 'fa’ che '
                                                                                     'comprendiamo '
                                                                                     'l’opera '
                                                                                     'della tua '
                                                                                     'misericordia,'},
                                                                            {'sp': '',
                                                                             'text': 'perché i '
                                                                                     'doni che '
                                                                                     'oggi '
                                                                                     'riceviamo'},
                                                                            {'sp': '',
                                                                             'text': 'confermino '
                                                                                     'in noi la '
                                                                                     'speranza dei '
                                                                                     'beni '
                                                                                     'futuri.'},
                                                                            {'sp': '',
                                                                             'text': 'Per Cristo '
                                                                                     'nostro '
                                                                                     'Signore.'},
                                                                            {'sp': '◎',
                                                                             'text': 'Amen.'}]}}}},
                  'prayers': {'prayer_offerings': 'Con queste offerte\n'
                                                  'accogli, o Signore, le preghiere del tuo '
                                                  'popolo,\n'
                                                  'perché i sacramenti, scaturiti dal mistero '
                                                  'pasquale,\n'
                                                  'per tua grazia ci ottengano la salvezza '
                                                  'eterna.\n'
                                                  'Per Cristo nostro Signore.',
                              'communion': 'Cristo, nostra Pasqua, è stato immolato! Alleluia.\n'
                                           'Celebriamo dunque la festa\n'
                                           'con azzimi di sincerità e di verità.\n'
                                           'Alleluia, alleluia.',
                              'prayer_after': 'Infondi in noi, o Signore,\n'
                                              'lo Spirito della tua carità,\n'
                                              'perché saziati dai sacramenti pasquali\n'
                                              'viviamo concordi nel tuo amore.\n'
                                              'Per Cristo nostro Signore.',
                              'collect': 'O Dio,che illumini questa santissima notte\n'
                                         'con la gloria della risurrezione del Signore,\n'
                                         'ravviva nella tua Chiesa lo spirito di adozione '
                                         'filiale,\n'
                                         'perché, rinnovati nel corpo e nell’anima,\n'
                                         'siamo sempre fedeli al tuo servizio.\n'
                                         'Per il nostro Signore Gesù Cristo, tuo Figlio, che è '
                                         'Dio,\n'
                                         'e vive e regna con te, nell’unità dello Spirito Santo,\n'
                                         'per tutti i secoli dei secoli.'}},
 'epiphany_vigil': {'prayers': {'entrance': 'Sorgi, Gerusalemme, e guarda verso oriente:\n'
                                            'vedi i tuoi figli riuniti,\n'
                                            'dal tramonto del sole al suo sorgere.',
                                'collect': 'Lo splendore della tua gloria illumini, o Signore,\n'
                                           'i nostri cuori, perché possiamo attraversare\n'
                                           'le tenebre di questo mondo\n'
                                           'e giungere alla patria della luce senza fine.\n'
                                           'Per il nostro Signore Gesù Cristo, tuo Figlio, che è '
                                           'Dio,\n'
                                           'e vive e regna con te, nell’unità dello Spirito '
                                           'Santo,\n'
                                           'per tutti i secoli dei secoli.',
                                'prayer_offerings': 'Accogli, o Padre, i doni offerti\n'
                                                    'per celebrare l’epifania del tuo Figlio '
                                                    'unigenito\n'
                                                    'e le primizie della fede dei popoli:\n'
                                                    'per te siano lode perfetta, per noi eterna '
                                                    'salvezza.\n'
                                                    'Per Cristo nostro Signore.',
                                'communion': 'La gloria di Dio illumina la città santa, '
                                             'Gerusalemme,\n'
                                             'e le nazioni camminano alla sua luce.',
                                'prayer_after': 'Rinnovati dal cibo della vita eterna,\n'
                                                'invochiamo, o Signore, la tua misericordia,\n'
                                                'perché rifulga sempre nei nostri cuori la stella '
                                                'della tua giustizia\n'
                                                'e, nella professione della vera fede, sia il '
                                                'nostro tesoro.\n'
                                                'Per Cristo nostro Signore.'}},
 'ascension_vigil': {'prayers': {'entrance': 'Regni della terra, cantate a Dio, cantate inni al '
                                             'Signore,\n'
                                             'che ascende nei cieli eterni.\n'
                                             'Sopra le nubi splende la sua bellezza e la sua '
                                             'potenza. Alleluia.',
                                 'collect': 'O Padre, il tuo Figlio oggi è asceso alla tua destra\n'
                                            'sotto gli occhi degli apostoli:\n'
                                            'donaci, secondo la sua promessa,\n'
                                            'di godere sempre della sua presenza accanto a noi '
                                            'sulla terra\n'
                                            'e di vivere con lui in cielo.\n'
                                            'Egli è Dio, e vive e regna con te,\n'
                                            'nell’unità dello Spirito Santo,\n'
                                            'per tutti i secoli dei secoli.',
                                 'prayer_offerings': 'O Padre, il tuo Figlio unigenito, nostro '
                                                     'Sommo Sacerdote,\n'
                                                     'sempre vivo, siede alla tua destra\n'
                                                     'per intercedere a nostro favore:\n'
                                                     'concedi a noi di accostarci con piena '
                                                     'fiducia al trono della grazia\n'
                                                     'per ricevere la tua misericordia.\n'
                                                     'Per Cristo nostro Signore.',
                                 'communion': 'Cristo, avendo offerto un solo sacrificio per i '
                                              'peccati,\n'
                                              'siede per sempre alla destra di Dio. Alleluia.',
                                 'prayer_after': 'I doni che abbiamo ricevuto dal tuo altare, o '
                                                 'Padre,\n'
                                                 'accendano nei nostri cuori il desiderio della '
                                                 'patria del cielo\n'
                                                 'e ci conducano, seguendo le sue orme,\n'
                                                 'là dove ci ha preceduto il nostro Salvatore.\n'
                                                 'Egli vive e regna nei secoli dei secoli.'}},
 'pentecost_vigil': {'prayers': {'entrance': 'L’amore di Dio è stato riversato nei nostri cuori\n'
                                             'per mezzo dello Spirito Santo che abita in noi. '
                                             'Alleluia.',
                                 'collect': 'Dio onnipotente ed eterno,\n'
                                            'che hai racchiuso la celebrazione della Pasqua\n'
                                            'nel tempo sacro dei cinquanta giorni,\n'
                                            'rinnova il prodigio della Pentecoste:\n'
                                            'fa’ che i popoli dispersi si raccolgano insieme\n'
                                            'e le diverse lingue si uniscano\n'
                                            'a proclamare la gloria del tuo nome.\n'
                                            'Per il nostro Signore Gesù Cristo, tuo Figlio, che è '
                                            'Dio,\n'
                                            'e vive e regna con te, nell’unità dello Spirito '
                                            'Santo,\n'
                                            'per tutti i secoli dei secoli.\n'
                                            'Oppure:\n'
                                            'Rifulga su di noi, Dio onnipotente,\n'
                                            'lo splendore della tua gloria, Gesù Cristo, luce '
                                            'della tua luce,\n'
                                            'e confermi con il dono dello Spirito Santo\n'
                                            'i cuori di coloro che per tua grazia sono rinati a '
                                            'vita nuova.\n'
                                            'Per il nostro Signore Gesù Cristo, tuo Figlio, che è '
                                            'Dio,\n'
                                            'e vive e regna con te, nell’unità dello Spirito '
                                            'Santo,\n'
                                            'per tutti i secoli dei secoli.',
                                 'prayer_offerings': 'Effondi, o Padre,\n'
                                                     'la benedizione del tuo Spirito sui doni che '
                                                     'presentiamo,\n'
                                                     'perché la loro forza susciti nella Chiesa\n'
                                                     'quell’amore che rivela a tutti gli uomini\n'
                                                     'la verità del tuo mistero di salvezza.\n'
                                                     'Per Cristo nostro Signore.',
                                 'communion': 'Nell’ultimo giorno, il grande giorno della festa,\n'
                                              'Gesù, ritto in piedi, gridò:\n'
                                              '«Se qualcuno ha sete, venga a me, e beva». '
                                              'Alleluia.',
                                 'prayer_after': 'I doni che abbiamo ricevuto, o Padre,\n'
                                                 'accendano in noi il fuoco dello Spirito\n'
                                                 'che hai effuso in modo mirabile sugli apostoli\n'
                                                 'nel giorno della Pentecoste.\n'
                                                 'Per Cristo nostro Signore.'}},
 'john_baptist_vigil': {'prayers': {'entrance': 'Sarà grande davanti al Signore,\n'
                                                'sarà colmato di Spirito Santo fin dal seno di sua '
                                                'madre:\n'
                                                'molti si rallegreranno della sua nascita.',
                                    'collect': 'Dio onnipotente,\n'
                                               'concedi alla tua famiglia di camminare sulla via '
                                               'della salvezza\n'
                                               'e di andare con serena fiducia,\n'
                                               'sotto la guida di san Giovanni il Precursore,\n'
                                               'incontro al Messia da lui predetto,\n'
                                               'Gesù Cristo Signore nostro.\n'
                                               'Egli è Dio, e vive e regna con te,\n'
                                               'nell’unità dello Spirito Santo,\n'
                                               'per tutti i secoli dei secoli.',
                                    'prayer_offerings': 'Accogli, Signore misericordioso,\n'
                                                        'i doni che ti offriamo nella solennità di '
                                                        'san Giovanni Battista,\n'
                                                        'e fa’ che testimoniamo nella coerenza '
                                                        'della vita\n'
                                                        'il mistero che celebriamo nella fede.\n'
                                                        'Per Cristo nostro Signore.',
                                    'communion': 'Benedetto il Signore, Dio d’Israele,\n'
                                                 'perché ha visitato e redento il suo popolo.',
                                    'prayer_after': 'La gloriosa preghiera di san Giovanni '
                                                    'Battista\n'
                                                    'accompagni, o Padre, il tuo popolo\n'
                                                    'nutrito al banchetto eucaristico,\n'
                                                    'e gli ottenga la misericordia del tuo '
                                                    'Figlio,\n'
                                                    'da lui indicato come l’Agnello\n'
                                                    'venuto a togliere i peccati del mondo.\n'
                                                    'Egli vive e regna nei secoli dei secoli.'}},
 'peter_paul_vigil': {'prayers': {'entrance': 'Pietro, apostolo, e Paolo, dottore delle genti,\n'
                                              'hanno insegnato a noi la tua legge, Signore.',
                                  'collect': 'Signore Dio nostro,\n'
                                             'che nella predicazione dei santi apostoli Pietro e '
                                             'Paolo\n'
                                             'hai dato alla Chiesa le primizie della fede '
                                             'cristiana,\n'
                                             'per loro intercessione vieni in nostro aiuto\n'
                                             'e guidaci nel cammino della salvezza eterna.\n'
                                             'Per il nostro Signore Gesù Cristo, tuo Figlio, che è '
                                             'Dio,\n'
                                             'e vive e regna con te, nell’unità dello Spirito '
                                             'Santo,\n'
                                             'per tutti i secoli dei secoli.',
                                  'prayer_offerings': 'Deponiamo i nostri doni sul tuo altare, o '
                                                      'Signore,\n'
                                                      'celebrando con gioia la solennità\n'
                                                      'dei santi apostoli Pietro e Paolo\n'
                                                      'e, se temiamo per la povertà dei nostri '
                                                      'meriti,\n'
                                                      'fa’ che ci rallegriamo per la grandezza '
                                                      'della tua misericordia.\n'
                                                      'Per Cristo nostro Signore.',
                                  'communion': '«Simone, figlio di Giovanni, mi ami più di '
                                               'costoro?».\n'
                                               '«Signore, tu conosci tutto; tu sai che ti voglio '
                                               'bene».',
                                  'prayer_after': 'Con la forza di questi divini sacramenti\n'
                                                  'sostieni, o Signore, i tuoi fedeli,\n'
                                                  'che hai illuminato con la dottrina degli '
                                                  'apostoli.\n'
                                                  'Per Cristo nostro Signore.'}},
 'assumption_vigil': {'prayers': {'entrance': 'Grandi cose di te si cantano, o Maria:\n'
                                              'oggi sei stata assunta sopra i cori degli angeli\n'
                                              'e trionfi con Cristo in eterno.',
                                  'collect': 'O Dio, che volgendo lo sguardo\n'
                                             'all’umiltà della beata Vergine Maria\n'
                                             'l’hai innalzata alla sublime dignità di Madre\n'
                                             'del tuo Figlio unigenito fatto uomo\n'
                                             'e oggi l’hai coronata di gloria incomparabile,\n'
                                             'per sua intercessione fa’ che,\n'
                                             'salvati per il mistero della tua redenzione,\n'
                                             'possiamo essere da te innalzati alla gloria del '
                                             'cielo.\n'
                                             'Per il nostro Signore Gesù Cristo, tuo Figlio, che è '
                                             'Dio,\n'
                                             'e vive e regna con te, nell’unità dello Spirito '
                                             'Santo,\n'
                                             'per tutti i secoli dei secoli.',
                                  'prayer_offerings': 'O Signore, il sacrificio di riconciliazione '
                                                      'e di lode\n'
                                                      'che celebriamo nell’Assunzione della santa '
                                                      'Madre di Dio\n'
                                                      'ci ottenga il perdono dei peccati\n'
                                                      'e trasformi la nostra vita in perenne '
                                                      'rendimento di grazie.\n'
                                                      'Per Cristo nostro Signore.',
                                  'communion': 'Beato il grembo della Vergine Maria,\n'
                                               'che ha portato il Figlio dell’eterno Padre.',
                                  'prayer_after': 'Signore Dio nostro,\n'
                                                  'che ci hai resi partecipi del banchetto del '
                                                  'cielo,\n'
                                                  'invochiamo la tua clemenza\n'
                                                  'perché, celebrando l’Assunzione della Madre di '
                                                  'Dio,\n'
                                                  'siamo liberati dai mali che ci sovrastano.\n'
                                                  'Per Cristo nostro Signore.'}}}
apply_missal_parts(SPECIAL_LITURGIES, 'IT', MISSAL_SPECIAL_TEXTS)
