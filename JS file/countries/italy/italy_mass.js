// Italy Mass module (CEI, Beta): official Italian Roman Missal ordinary and CEI daily Mass source.
(function registerItalyMass(global) {
  'use strict';
  global.countryMassData = global.countryMassData || {};

  const ordinary = Object.freeze([
  {
    "id": "1. THE INTRODUCTORY RITES",
    "type": "section",
    "it": "Riti di Introduzione"
  },
  {
    "id": "1.1 entrance",
    "type": "part",
    "header": {
      "it": "Antifona d'ingresso"
    },
    "lines": [
      {
        "sp_it": "",
        "text_it": "(Antifona d'ingresso del giorno)"
      }
    ]
  },
  {
    "id": "1.2 greeting",
    "type": "selectable",
    "header": {
      "it": "Saluto"
    },
    "variants": {
      "A": {
        "label": {
          "it": "Formula 1"
        },
        "lines": [
          {
            "rubric_it": "Quando il popolo è radunato, il sacerdote con i ministri si reca all’altare, mentre si ese -"
          },
          {
            "sp_it": "",
            "text_it": "gue il Canto d’ingresso. Se non si esegue il canto si proclama l’antifona."
          },
          {
            "rubric_it": "Giunto all’altare, il sacerdote fa con i ministri un profondo inchino, bacia l’altare in segno"
          },
          {
            "sp_it": "",
            "text_it": "di venerazione e, secondo l’opportunità, incensa la croce e l’altare. Poi, con i ministri, si"
          },
          {
            "sp_it": "",
            "text_it": "reca alla sede."
          },
          {
            "rubric_it": "Terminato il canto d’ingresso, il sacerdote e i fedeli, in piedi, si fanno il Segno della"
          },
          {
            "sp_it": "",
            "text_it": "Croce."
          },
          {
            "rubric_it": "Il sacerdote, rivolto al popolo, dice:"
          },
          {
            "rubric_it": "Nel nome del Padre e del Figlio e dello Spirito Santo."
          },
          {
            "sp_it": "Tutti",
            "text_it": "Amen."
          },
          {
            "rubric_it": "Quindi il sacerdote rivolge il Saluto al popolo, allargando le braccia e dicendo:"
          },
          {
            "sp_it": "",
            "text_it": "La grazia del Signore nostro Gesù Cristo,"
          },
          {
            "sp_it": "",
            "text_it": "l’amore di Dio Padre"
          },
          {
            "sp_it": "",
            "text_it": "e la comunione dello Spirito Santo"
          },
          {
            "sp_it": "",
            "text_it": "siano con tutti voi. Cf. 2 Cor 13, 13"
          },
          {
            "sp_it": "Tutti",
            "text_it": "E con il tuo spirito."
          }
        ]
      },
      "B": {
        "label": {
          "it": "Formula 2"
        },
        "lines": [
          {
            "rubric_it": "Oppure:"
          },
          {
            "sp_it": "",
            "text_it": "La grazia e la pace"
          },
          {
            "sp_it": "",
            "text_it": "di Dio nostro Padre"
          },
          {
            "sp_it": "",
            "text_it": "e del Signore nostro Gesù Cristo"
          },
          {
            "sp_it": "",
            "text_it": "siano con tutti voi. Cf. 1 Cor 1, 3"
          },
          {
            "sp_it": "Tutti",
            "text_it": "E con il tuo spirito."
          }
        ]
      },
      "C": {
        "label": {
          "it": "Formula 3"
        },
        "lines": [
          {
            "rubric_it": "Oppure:"
          },
          {
            "sp_it": "",
            "text_it": "Il Signore sia con voi."
          },
          {
            "rubric_it": "Il vescovo, al posto di Il Signore sia con voi, in questo primo saluto dice:"
          },
          {
            "sp_it": "Vescovo",
            "text_it": "La pace sia con voi."
          },
          {
            "sp_it": "Tutti",
            "text_it": "E con il tuo spirito."
          },
          {
            "rubric_it": "★"
          }
        ]
      },
      "D": {
        "label": {
          "it": "Formula 4"
        },
        "lines": [
          {
            "rubric_it": "Oppure:"
          },
          {
            "sp_it": "",
            "text_it": "Il Signore, che guida i nostri cuori all’amore"
          },
          {
            "sp_it": "",
            "text_it": "e alla pazienza di Cristo,"
          },
          {
            "sp_it": "",
            "text_it": "sia con tutti voi. Cf. 2 Ts 3, 5"
          },
          {
            "sp_it": "Tutti",
            "text_it": "E con il tuo spirito."
          },
          {
            "rubric_it": "★"
          }
        ]
      },
      "E": {
        "label": {
          "it": "Formula 5"
        },
        "lines": [
          {
            "rubric_it": "Oppure:"
          },
          {
            "sp_it": "",
            "text_it": "Il Dio della speranza,"
          },
          {
            "sp_it": "",
            "text_it": "che ci riempie di ogni gioia"
          },
          {
            "sp_it": "",
            "text_it": "e pace nella fede"
          },
          {
            "sp_it": "",
            "text_it": "per la potenza dello Spirito Santo,"
          },
          {
            "sp_it": "",
            "text_it": "sia con tutti voi. Cf. Rm 1 5, 13"
          },
          {
            "sp_it": "Tutti",
            "text_it": "E con il tuo spirito."
          },
          {
            "rubric_it": "★"
          }
        ]
      },
      "F": {
        "label": {
          "it": "Formula 6"
        },
        "lines": [
          {
            "rubric_it": "Oppure:"
          },
          {
            "sp_it": "",
            "text_it": "La pace, la carità e la fede"
          },
          {
            "sp_it": "",
            "text_it": "da parte di Dio Padre"
          },
          {
            "sp_it": "",
            "text_it": "e del Signore Gesù Cristo"
          },
          {
            "sp_it": "",
            "text_it": "siano con tutti voi. Cf. Ef 6, 23"
          },
          {
            "sp_it": "Tutti",
            "text_it": "E con il tuo spirito."
          },
          {
            "rubric_it": "Il sacerdote, o il diacono o un altro ministro, può introdurre brevemente i fedeli alla"
          },
          {
            "sp_it": "",
            "text_it": "Messa del giorno."
          },
          {
            "sp_it": "",
            "text_it": "Rito per la benedizione e l’ aspersione dell’ acqua benedetta"
          },
          {
            "rubric_it": "La domenica, specialmente nel Tempo Pasquale, si può sostituire il consueto atto penitenziale con la benedizione e l’aspersione dell’acqua in memoria del Battesimo (cf. pp."
          },
          {
            "sp_it": "",
            "text_it": "989-994)."
          }
        ]
      }
    }
  },
  {
    "id": "1.3 penitential",
    "type": "selectable",
    "header": {
      "it": "Atto penitenziale"
    },
    "variants": {
      "A": {
        "label": {
          "it": "Prima formula"
        },
        "lines": [
          {
            "rubric_it": "Segue l’Atto penitenziale, introdotto dal sacerdote con queste parole."
          },
          {
            "sp_it": "",
            "text_it": "I formulario:"
          },
          {
            "sp_it": "",
            "text_it": "Fratelli e sorelle,"
          },
          {
            "sp_it": "",
            "text_it": "per celebrare degnamente i santi misteri,"
          },
          {
            "sp_it": "",
            "text_it": "riconosciamo i nostri peccati."
          },
          {
            "rubric_it": "★"
          },
          {
            "rubric_it": "Oppure:"
          },
          {
            "sp_it": "",
            "text_it": "Il Signore Gesù,"
          },
          {
            "sp_it": "",
            "text_it": "che ci invita alla mensa della P arola e dell’Eucaristia,"
          },
          {
            "sp_it": "",
            "text_it": "ci chiama alla conversione."
          },
          {
            "sp_it": "",
            "text_it": "Riconosciamo di essere peccatori"
          },
          {
            "sp_it": "",
            "text_it": "e invochiamo con fiducia la misericordia di Dio."
          },
          {
            "rubric_it": "★"
          },
          {
            "rubric_it": "Oppure, specialmente nelle domeniche e nel Tempo Pasquale:"
          },
          {
            "sp_it": "",
            "text_it": "Oggi, celebrando la vittoria di Cristo"
          },
          {
            "sp_it": "",
            "text_it": "sul peccato e sulla morte,"
          },
          {
            "sp_it": "",
            "text_it": "siamo chiamati a morire al peccato"
          },
          {
            "sp_it": "",
            "text_it": "per risorgere alla vita nuova."
          },
          {
            "sp_it": "",
            "text_it": "Riconosciamoci bisognosi della misericordia del Padre."
          },
          {
            "rubric_it": "Segue una breve pausa di silenzio."
          },
          {
            "rubric_it": "Poi tutti insieme pronunciano la formula della confessione generale:"
          },
          {
            "sp_it": "",
            "text_it": "Confesso a Dio onnipotente e a voi, fratelli e sorelle,"
          },
          {
            "sp_it": "",
            "text_it": "che ho molto peccato"
          },
          {
            "sp_it": "",
            "text_it": "in pensieri, parole, opere e omissioni,"
          },
          {
            "sp_it": "",
            "text_it": "e, battendosi il petto, dicono:"
          },
          {
            "sp_it": "",
            "text_it": "per mia colpa, mia colpa, mia grandissima colpa."
          },
          {
            "sp_it": "",
            "text_it": "E proseguono:"
          },
          {
            "sp_it": "",
            "text_it": "E supplico la beata sempre Vergine Maria,"
          },
          {
            "sp_it": "",
            "text_it": "gli angeli, i santi e voi, fratelli e sorelle,"
          },
          {
            "sp_it": "",
            "text_it": "di pregare per me il Signore Dio nostro."
          },
          {
            "rubric_it": "Segue l’assoluzione del sacerdote:"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente abbia misericordia di noi,"
          },
          {
            "sp_it": "",
            "text_it": "perdoni i nostri peccati"
          },
          {
            "sp_it": "",
            "text_it": "e ci conduca alla vita eterna."
          },
          {
            "sp_it": "Tutti",
            "text_it": "Amen."
          }
        ]
      },
      "B": {
        "label": {
          "it": "Seconda formula"
        },
        "lines": [
          {
            "rubric_it": "Segue l’Atto penitenziale, introdotto dal sacerdote con queste parole."
          },
          {
            "sp_it": "",
            "text_it": "II formulario:"
          },
          {
            "rubric_it": "★ Fratelli e sorelle,"
          },
          {
            "sp_it": "",
            "text_it": "all’inizio di questa celebrazione eucaristica,"
          },
          {
            "sp_it": "",
            "text_it": "invochiamo la misericordia di Dio,"
          },
          {
            "sp_it": "",
            "text_it": "fonte di riconciliazione e di comunione."
          },
          {
            "rubric_it": "★"
          },
          {
            "rubric_it": "Oppure:"
          },
          {
            "sp_it": "",
            "text_it": "Umili e pentiti come il pubblicano al tempio,"
          },
          {
            "sp_it": "",
            "text_it": "accostiamoci al Dio giusto e santo,"
          },
          {
            "sp_it": "",
            "text_it": "perché abbia misericordia di noi peccatori."
          },
          {
            "rubric_it": "Segue una breve pausa di silenzio."
          },
          {
            "rubric_it": "Poi il sacerdote dice:"
          },
          {
            "sp_it": "",
            "text_it": "Pietà di noi, Signore."
          },
          {
            "sp_it": "Tutti",
            "text_it": "Contro di te abbiamo peccato."
          },
          {
            "rubric_it": "Il sacerdote prosegue:"
          },
          {
            "sp_it": "",
            "text_it": "Mostraci, Signore, la tua misericordia."
          },
          {
            "sp_it": "Tutti",
            "text_it": "E donaci la tua salvezza."
          },
          {
            "rubric_it": "Segue l’assoluzione del sacerdote:"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente abbia misericordia di noi,"
          },
          {
            "sp_it": "",
            "text_it": "perdoni i nostri peccati"
          },
          {
            "sp_it": "",
            "text_it": "e ci conduca alla vita eterna."
          },
          {
            "sp_it": "Tutti",
            "text_it": "Amen."
          }
        ]
      },
      "C": {
        "label": {
          "it": "Terza formula"
        },
        "lines": [
          {
            "rubric_it": "Segue l’Atto penitenziale, introdotto dal sacerdote con queste parole."
          },
          {
            "sp_it": "",
            "text_it": "III formulario:"
          },
          {
            "rubric_it": "★ Gesù Cristo, il giusto, intercede per noi"
          },
          {
            "sp_it": "",
            "text_it": "e ci riconcilia con il Padre:"
          },
          {
            "sp_it": "",
            "text_it": "per accostarci degnamente"
          },
          {
            "sp_it": "",
            "text_it": "alla mensa del Signore,"
          },
          {
            "sp_it": "",
            "text_it": "invochiamolo con cuore pentito."
          },
          {
            "rubric_it": "★"
          },
          {
            "rubric_it": "Oppure:"
          },
          {
            "sp_it": "",
            "text_it": "Riconosciamoci tutti peccatori,"
          },
          {
            "sp_it": "",
            "text_it": "invochiamo la misericordia del Signore"
          },
          {
            "sp_it": "",
            "text_it": "e perdoniamoci a vicenda dal profondo del cuore."
          },
          {
            "rubric_it": "Segue una breve pausa di silenzio."
          },
          {
            "rubric_it": "Poi il sacerdote, o il diacono o un altro ministro, dice o canta le seguenti invocazioni"
          },
          {
            "sp_it": "",
            "text_it": "o altre con il Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Signore, mandato dal Padre a salvare i contriti di cuore,"
          },
          {
            "sp_it": "",
            "text_it": "Kýrie, eléison."
          },
          {
            "sp_it": "Tutti",
            "text_it": "Kýrie, eléison."
          },
          {
            "rubric_it": "Il sacerdote:"
          },
          {
            "sp_it": "",
            "text_it": "Cristo, che sei venuto a chiamare i peccatori,"
          },
          {
            "sp_it": "",
            "text_it": "Christe, eléison."
          },
          {
            "sp_it": "Tutti",
            "text_it": "Christe, eléison."
          },
          {
            "rubric_it": "Il sacerdote:"
          },
          {
            "sp_it": "",
            "text_it": "Signore, che siedi alla destra del Padre e intercedi per noi,"
          },
          {
            "sp_it": "",
            "text_it": "Kýrie, eléison."
          },
          {
            "sp_it": "Tutti",
            "text_it": "Kýrie, eléison."
          },
          {
            "rubric_it": "Segue l’assoluzione del sacerdote:"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente abbia misericordia di noi,"
          },
          {
            "sp_it": "",
            "text_it": "perdoni i nostri peccati"
          },
          {
            "sp_it": "",
            "text_it": "e ci conduca alla vita eterna."
          },
          {
            "sp_it": "Tutti",
            "text_it": "Amen."
          },
          {
            "rubric_it": "★ Si possono utilizzare anche le altre invocazioni, pp. 313-317."
          },
          {
            "rubric_it": "1."
          },
          {
            "sp_it": "",
            "text_it": "Signore, via che riconduce al Padre, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Cristo, verità che illumina i popoli, Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Signore, vita che rinnova il mondo, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "rubric_it": "2."
          },
          {
            "sp_it": "",
            "text_it": "Signore, che alla donna peccatrice hai donato la tua misericordia,"
          },
          {
            "sp_it": "",
            "text_it": "Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Cristo, che al ladrone pentito hai promesso il paradiso,"
          },
          {
            "sp_it": "",
            "text_it": "Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Signore, che a Pietro hai offerto il tuo perdono, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "rubric_it": "3."
          },
          {
            "sp_it": "",
            "text_it": "Signore, che non sei venuto a condannare ma a perdonare,"
          },
          {
            "sp_it": "",
            "text_it": "Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Cristo, che fai festa per ogni peccatore pentito, Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Signore, che perdoni molto a chi molto ama, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "rubric_it": "4."
          },
          {
            "sp_it": "",
            "text_it": "Signore, che sei venuto a cercare chi era perduto, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Cristo, che hai dato la tua vita in riscatto per tutti,"
          },
          {
            "sp_it": "",
            "text_it": "Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Signore, che raccogli nell’unità i figli di Dio dispersi, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "rubric_it": "5."
          },
          {
            "sp_it": "",
            "text_it": "Signore, pienezza di verità e di grazia, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Cristo, fatto povero per arricchirci, Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Signore, venuto per radunare il tuo popolo santo, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Tempo di Avvento"
          },
          {
            "rubric_it": "1."
          },
          {
            "sp_it": "",
            "text_it": "Signore, che sei venuto nel mondo per salvarci, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Cristo, che vieni a visitarci con la grazia del tuo Spirito,"
          },
          {
            "sp_it": "",
            "text_it": "Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Signore, che verrai un giorno a giudicare le nostre opere,"
          },
          {
            "sp_it": "",
            "text_it": "Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "rubric_it": "2."
          },
          {
            "sp_it": "",
            "text_it": "Signore, difensore dei poveri, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Cristo, rifugio dei deboli, Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Signore, speranza dei peccatori, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "rubric_it": "3."
          },
          {
            "sp_it": "",
            "text_it": "Signore, che vieni a visitare il tuo popolo nella pace, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Cristo, che vieni a salvare chi è perduto, Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Signore, che vieni a creare un mondo nuovo, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Tempo di Natale"
          },
          {
            "rubric_it": "1."
          },
          {
            "sp_it": "",
            "text_it": "Signore, Figlio di Dio, che nascendo da Maria Vergine"
          },
          {
            "sp_it": "",
            "text_it": "ti sei fatto nostro fratello, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Cristo, Figlio dell’uomo, che conosci e comprendi"
          },
          {
            "sp_it": "",
            "text_it": "la nostra debolezza, Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Signore, Figlio primogenito del Padre,"
          },
          {
            "sp_it": "",
            "text_it": "che fai di noi una sola famiglia, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "rubric_it": "2."
          },
          {
            "sp_it": "",
            "text_it": "Signore, re della pace, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Cristo, luce nelle tenebre, Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Signore, immagine dell’uomo nuovo, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Tempo di Quaresima"
          },
          {
            "rubric_it": "1."
          },
          {
            "sp_it": "",
            "text_it": "Signore, che ci inviti al perdono fraterno"
          },
          {
            "sp_it": "",
            "text_it": "prima di presentarci al tuo altare, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Cristo, che sulla croce hai invocato il perdono per i peccatori,"
          },
          {
            "sp_it": "",
            "text_it": "Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Signore, che hai effuso lo Spirito per la remissione dei peccati,"
          },
          {
            "sp_it": "",
            "text_it": "Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "rubric_it": "2."
          },
          {
            "sp_it": "",
            "text_it": "Signore, che nell’acqua e nello Spirito"
          },
          {
            "sp_it": "",
            "text_it": "ci hai rigenerato a tua immagine, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Cristo, che nel tuo Spirito crei in noi un cuore nuovo,"
          },
          {
            "sp_it": "",
            "text_it": "Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Signore, che nello Spirito Santo ci raduni in un solo corpo,"
          },
          {
            "sp_it": "",
            "text_it": "Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "rubric_it": "3."
          },
          {
            "sp_it": "",
            "text_it": "Signore, che fai passare dalla morte alla vita"
          },
          {
            "sp_it": "",
            "text_it": "chi ascolta la tua parola, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Cristo, che hai voluto essere innalzato da terra per attirarci a te,"
          },
          {
            "sp_it": "",
            "text_it": "Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Signore, che ci sottoponi al giudizio della tua croce,"
          },
          {
            "sp_it": "",
            "text_it": "Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Tempo di Pasqua"
          },
          {
            "rubric_it": "1."
          },
          {
            "sp_it": "",
            "text_it": "Signore, nostra pace, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Cristo, nostra Pasqua, Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Signore, nostra vita, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "rubric_it": "2."
          },
          {
            "sp_it": "",
            "text_it": "Signore, che sei l’eterno sacerdote della nuova alleanza,"
          },
          {
            "sp_it": "",
            "text_it": "Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Cristo, che ci edifichi come pietre vive in tempio santo di Dio,"
          },
          {
            "sp_it": "",
            "text_it": "Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Signore, che ci fai concittadini dei santi nel regno dei cieli,"
          },
          {
            "sp_it": "",
            "text_it": "Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "rubric_it": "3."
          },
          {
            "sp_it": "",
            "text_it": "Signore, che asceso alla destra del Padre ci fai dono del tuo Spirito,"
          },
          {
            "sp_it": "",
            "text_it": "Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Cristo, che sostieni ogni cosa con la potenza della tua parola,"
          },
          {
            "sp_it": "",
            "text_it": "Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Christe, eléison."
          },
          {
            "sp_it": "",
            "text_it": "Signore, che hai vinto la morte e regni nei secoli, Kýrie, eléison."
          },
          {
            "sp_it": "",
            "text_it": "R/ . Kýrie, eléison."
          }
        ]
      }
    }
  },
  {
    "id": "1.4 kyrie",
    "type": "part",
    "header": {
      "it": "Kýrie, eléison"
    },
    "lines": [
      {
        "sp_it": "",
        "text_it": "Seguono le Invocazioni Kýrie, eléison, se non sono state già proclamate o cantate con"
      },
      {
        "sp_it": "",
        "text_it": "l’atto penitenziale:"
      },
      {
        "sp_it": "",
        "text_it": "V/ . Kýrie, eléison."
      },
      {
        "sp_it": "",
        "text_it": "R/ . Kýrie, eléison."
      },
      {
        "sp_it": "",
        "text_it": "V/ . Christe, eléison."
      },
      {
        "sp_it": "",
        "text_it": "R/ . Christe, eléison."
      },
      {
        "sp_it": "",
        "text_it": "V/ . Kýrie, eléison."
      },
      {
        "sp_it": "",
        "text_it": "R/ . Kýrie, eléison."
      },
      {
        "rubric_it": "Oppure:"
      },
      {
        "sp_it": "",
        "text_it": "V/ . Signore, pietà"
      },
      {
        "sp_it": "",
        "text_it": "R/ . Signore, pietà."
      },
      {
        "sp_it": "",
        "text_it": "V/ . Cristo, pietà."
      },
      {
        "sp_it": "",
        "text_it": "R/ . Cristo, pietà."
      },
      {
        "sp_it": "",
        "text_it": "V/ . Signore, pietà."
      },
      {
        "sp_it": "",
        "text_it": "R/ . Signore, pietà."
      },
      {
        "rubric_it": "Poi, quando è prescritto, si canta o si proclama l’Inno:"
      },
      {
        "sp_it": "",
        "text_it": "Gloria a Dio nell’alto dei cieli"
      },
      {
        "sp_it": "",
        "text_it": "e pace in terra agli uomini, amati dal Signore."
      },
      {
        "sp_it": "",
        "text_it": "Noi ti lodiamo, ti benediciamo,"
      },
      {
        "sp_it": "",
        "text_it": "ti adoriamo, ti glorifichiamo,"
      },
      {
        "sp_it": "",
        "text_it": "ti rendiamo grazie per la tua gloria immensa,"
      },
      {
        "sp_it": "",
        "text_it": "Signore Dio, Re del cielo,"
      },
      {
        "sp_it": "",
        "text_it": "Dio Padre onnipotente."
      },
      {
        "sp_it": "",
        "text_it": "Signore, Figlio unigenito, Gesù Cristo,"
      },
      {
        "sp_it": "",
        "text_it": "Signore Dio, Agnello di Dio, Figlio del Padre,"
      },
      {
        "sp_it": "",
        "text_it": "tu che togli i peccati del mondo, abbi pietà di noi;"
      },
      {
        "sp_it": "",
        "text_it": "tu che togli i peccati del mondo, accogli la nostra supplica;"
      },
      {
        "sp_it": "",
        "text_it": "tu che siedi alla destra del Padre, abbi pietà di noi."
      },
      {
        "sp_it": "",
        "text_it": "Perché tu solo il Santo,"
      },
      {
        "sp_it": "",
        "text_it": "tu solo il Signore, tu solo l’Altissimo, Gesù Cristo,"
      },
      {
        "sp_it": "",
        "text_it": "con lo Spirito Santo:"
      },
      {
        "sp_it": "",
        "text_it": "nella gloria di Dio Padre."
      },
      {
        "sp_it": "",
        "text_it": "Amen."
      }
    ]
  },
  {
    "id": "1.5 gloria",
    "type": "part",
    "header": {
      "it": "Gloria"
    },
    "lines": [
      {
        "sp_it": "",
        "text_it": "Oppure in canto:"
      },
      {
        "sp_it": "",
        "text_it": "Glória in excélsis Deo"
      },
      {
        "sp_it": "",
        "text_it": "et in terra pax homínibus bonae voluntátis."
      },
      {
        "sp_it": "",
        "text_it": "Laudámus te, benedícimus te,"
      },
      {
        "sp_it": "",
        "text_it": "adorámus te, glorificámus te,"
      },
      {
        "sp_it": "",
        "text_it": "grátias ágimus tibi propter magnam glóriam tuam,"
      },
      {
        "sp_it": "",
        "text_it": "Dómine Deus, Rex caeléstis,"
      },
      {
        "sp_it": "",
        "text_it": "Deus Pater omnípotens."
      },
      {
        "sp_it": "",
        "text_it": "Dómine Fili Unigénite, Iesu Christe,"
      },
      {
        "sp_it": "",
        "text_it": "Dómine Deus, Agnus Dei, Fílius Patris,"
      },
      {
        "sp_it": "",
        "text_it": "qui tollis peccáta mundi, miserére nobis;"
      },
      {
        "sp_it": "",
        "text_it": "qui tollis peccáta mundi, súscipe deprecatiónem nostram."
      },
      {
        "sp_it": "",
        "text_it": "Qui sedes ad déxteram Patris, miserére nobis."
      },
      {
        "sp_it": "",
        "text_it": "Quóniam tu solus Sanctus, tu solus Dóminus, tu solus Altíssimus,"
      },
      {
        "sp_it": "",
        "text_it": "Iesu Christe, cum Sancto Spíritu: in glória Dei Patris."
      },
      {
        "sp_it": "",
        "text_it": "Amen."
      },
      {
        "rubric_it": "Terminato l’inno, il sacerdote, a mani giunte, dice:"
      },
      {
        "sp_it": "",
        "text_it": "Preghiamo."
      },
      {
        "sp_it": "",
        "text_it": "E tutti, insieme con il sacerdote, pregano in silenzio per qualche momento. Quindi il"
      },
      {
        "sp_it": "",
        "text_it": "sacerdote, con le braccia allargate, dice o canta la Colletta. La colletta termina con la"
      },
      {
        "sp_it": "",
        "text_it": "conclusione lunga:"
      },
      {
        "sp_it": "",
        "text_it": "– se è rivolta al Padre:"
      },
      {
        "sp_it": "",
        "text_it": "Per il nostro Signore Gesù Cristo,"
      },
      {
        "sp_it": "",
        "text_it": "tuo Figlio, che è Dio, e vive e regna con te,"
      },
      {
        "sp_it": "",
        "text_it": "nell’unità dello Spirito Santo,"
      },
      {
        "sp_it": "",
        "text_it": "per tutti i secoli dei secoli."
      },
      {
        "sp_it": "",
        "text_it": "– se è rivolta al Padre, ma verso la fine dell’orazione si fa menzione del Figlio:"
      },
      {
        "sp_it": "",
        "text_it": "Egli è Dio, e vive e regna con te,"
      },
      {
        "sp_it": "",
        "text_it": "nell’unità dello Spirito Santo,"
      },
      {
        "sp_it": "",
        "text_it": "per tutti i secoli dei secoli."
      },
      {
        "sp_it": "",
        "text_it": "– se è rivolta al Figlio:"
      },
      {
        "sp_it": "",
        "text_it": "Tu sei Dio, e vivi e regni con Dio Padre,"
      },
      {
        "sp_it": "",
        "text_it": "nell’unità dello Spirito Santo,"
      },
      {
        "sp_it": "",
        "text_it": "per tutti i secoli dei secoli."
      },
      {
        "sp_it": "Tutti",
        "text_it": "Amen."
      }
    ],
    "if": "sunday"
  },
  {
    "id": "1.6 collect",
    "type": "part",
    "header": {
      "it": "Colletta"
    },
    "lines": [
      {
        "sp_it": "C",
        "text_it": "Preghiamo."
      },
      {
        "sp_it": "",
        "text_it": "(Colletta del giorno)"
      },
      {
        "sp_it": "Tutti",
        "text_it": "Amen."
      }
    ]
  },
  {
    "id": "2. THE LITURGY OF THE WORD",
    "type": "section",
    "it": "Liturgia della Parola"
  },
  {
    "id": "2.1 reading1",
    "type": "part",
    "header": {
      "it": "Prima Lettura"
    },
    "lines": [
      {
        "sp_it": "",
        "text_it": "(Sommario)"
      },
      {
        "sp_it": "",
        "text_it": "(Prima lettura del giorno)"
      }
    ]
  },
  {
    "id": "2.2 psalm",
    "type": "part",
    "header": {
      "it": "Salmo Responsoriale"
    },
    "lines": [
      {
        "sp_it": "",
        "text_it": "(Salmo responsoriale del giorno)"
      }
    ]
  },
  {
    "id": "2.3 reading2",
    "type": "part",
    "header": {
      "it": "Seconda Lettura"
    },
    "lines": [
      {
        "sp_it": "",
        "text_it": "(Sommario)"
      },
      {
        "sp_it": "",
        "text_it": "(Seconda lettura del giorno)"
      }
    ],
    "if": "sunday"
  },
  {
    "id": "2.4 Sequence",
    "type": "part",
    "header": {
      "it": "Sequenza"
    },
    "lines": [
      {
        "sp_it": "",
        "text_it": "(Sequenza del giorno)"
      }
    ],
    "if": "easter_or_pentecost"
  },
  {
    "id": "2.5 gospel_accl",
    "type": "part",
    "header": {
      "it": "Acclamazione al Vangelo"
    },
    "lines": [
      {
        "sp_it": "",
        "text_it": "(Acclamazione al Vangelo del giorno)"
      }
    ]
  },
  {
    "id": "2.6 gospel",
    "type": "part",
    "header": {
      "it": "Vangelo"
    },
    "lines": [
      {
        "sp_it": "",
        "text_it": "(Vangelo del giorno)"
      }
    ]
  },
  {
    "id": "2.7 homily",
    "type": "part",
    "header": {
      "it": "Omelia"
    },
    "lines": [
      {
        "rubric_it": "Dopo il Vangelo il sacerdote o il diacono pronuncia l'omelia."
      },
      {
        "rubric_it": "Segue l'omelia."
      }
    ]
  },
  {
    "id": "2.8 creed",
    "type": "selectable",
    "header": {
      "it": "Professione di fede"
    },
    "if": "sunday",
    "variants": {
      "A": {
        "label": {
          "it": "Simbolo niceno-costantinopolitano"
        },
        "lines": [
          {
            "rubric_it": "Quando è prescritto, si proclama o si canta il Simbolo o Professione di Fede:"
          },
          {
            "sp_it": "",
            "text_it": "Credo in un solo Dio Padre onnipotente,"
          },
          {
            "sp_it": "",
            "text_it": "creatore del cielo e della terra,"
          },
          {
            "sp_it": "",
            "text_it": "di tutte le cose visibili e invisibili."
          },
          {
            "sp_it": "",
            "text_it": "Credo in un solo Signore, Gesù Cristo,"
          },
          {
            "sp_it": "",
            "text_it": "unigenito Figlio di Dio,"
          },
          {
            "sp_it": "",
            "text_it": "nato dal Padre prima di tutti i secoli:"
          },
          {
            "sp_it": "",
            "text_it": "Dio da Dio, Luce da Luce, Dio vero da Dio vero;"
          },
          {
            "sp_it": "",
            "text_it": "generato, non creato, della stessa sostanza del Padre;"
          },
          {
            "sp_it": "",
            "text_it": "per mezzo di lui tutte le cose sono state create."
          },
          {
            "sp_it": "",
            "text_it": "Per noi uomini e per la nostra salvezza"
          },
          {
            "sp_it": "",
            "text_it": "discese dal cielo,"
          },
          {
            "sp_it": "",
            "text_it": "Alle parole: e per opera dello Spirito Santo... fino a si è fatto uomo, tutti si inchinano."
          },
          {
            "sp_it": "",
            "text_it": "e per opera dello Spirito Santo"
          },
          {
            "sp_it": "",
            "text_it": "si è incarnato nel seno della Vergine Maria"
          },
          {
            "sp_it": "",
            "text_it": "e si è fatto uomo."
          },
          {
            "sp_it": "",
            "text_it": "Fu crocifisso per noi sotto Ponzio Pilato,"
          },
          {
            "sp_it": "",
            "text_it": "morì e fu sepolto."
          },
          {
            "sp_it": "",
            "text_it": "Il terzo giorno è risuscitato, secondo le Scritture,"
          },
          {
            "sp_it": "",
            "text_it": "è salito al cielo, siede alla destra del Padre."
          },
          {
            "sp_it": "",
            "text_it": "E di nuovo verrà, nella gloria,"
          },
          {
            "sp_it": "",
            "text_it": "per giudicare i vivi e i morti,"
          },
          {
            "sp_it": "",
            "text_it": "e il suo regno non avrà fine."
          },
          {
            "sp_it": "",
            "text_it": "Credo nello Spirito Santo, che è Signore e dà la vita,"
          },
          {
            "sp_it": "",
            "text_it": "e procede dal Padre e dal Figlio."
          },
          {
            "sp_it": "",
            "text_it": "Con il Padre e il Figlio è adorato e glorificato,"
          },
          {
            "sp_it": "",
            "text_it": "e ha parlato per mezzo dei profeti."
          },
          {
            "sp_it": "",
            "text_it": "Credo la Chiesa, una, santa, cattolica e apostolica."
          },
          {
            "sp_it": "",
            "text_it": "Professo un solo Battesimo per il perdono dei peccati."
          },
          {
            "sp_it": "",
            "text_it": "Aspetto la risurrezione dei morti"
          },
          {
            "sp_it": "",
            "text_it": "e la vita del mondo che verrà."
          },
          {
            "sp_it": "",
            "text_it": "Amen."
          },
          {
            "sp_it": "",
            "text_it": "323Liturgia della Parola"
          }
        ]
      },
      "B": {
        "label": {
          "it": "Simbolo degli Apostoli"
        },
        "lines": [
          {
            "sp_it": "",
            "text_it": "In luogo del Simbolo niceno-costantinopolitano, si può utilizzare, specialmente nel"
          },
          {
            "sp_it": "",
            "text_it": "Tempo di Quaresima e nel Tempo Pasquale, il Simbolo battesimale della Chiesa romana,"
          },
          {
            "sp_it": "",
            "text_it": "detto «degli apostoli»."
          },
          {
            "sp_it": "",
            "text_it": "Io credo in Dio Padre onnipotente,"
          },
          {
            "sp_it": "",
            "text_it": "creatore del cielo e della terra;"
          },
          {
            "sp_it": "",
            "text_it": "e in Gesù Cristo, suo unico Figlio, nostro Signore,"
          },
          {
            "sp_it": "",
            "text_it": "Alle parole il quale fu concepito... fino a Maria Vergine, tutti si inchinano."
          },
          {
            "sp_it": "",
            "text_it": "il quale fu concepito di Spirito Santo,"
          },
          {
            "sp_it": "",
            "text_it": "nacque da Maria Vergine,"
          },
          {
            "sp_it": "",
            "text_it": "patì sotto Ponzio Pilato,"
          },
          {
            "sp_it": "",
            "text_it": "fu crocifisso, morì e fu sepolto;"
          },
          {
            "sp_it": "",
            "text_it": "discese agli inferi;"
          },
          {
            "sp_it": "",
            "text_it": "il terzo giorno risuscitò da morte;"
          },
          {
            "sp_it": "",
            "text_it": "salì al cielo,"
          },
          {
            "sp_it": "",
            "text_it": "siede alla destra di Dio Padre onnipotente;"
          },
          {
            "sp_it": "",
            "text_it": "di là verrà a giudicare i vivi e i morti."
          },
          {
            "sp_it": "",
            "text_it": "Credo nello Spirito Santo,"
          },
          {
            "sp_it": "",
            "text_it": "la santa Chiesa cattolica,"
          },
          {
            "sp_it": "",
            "text_it": "la comunione dei santi,"
          },
          {
            "sp_it": "",
            "text_it": "la remissione dei peccati,"
          },
          {
            "sp_it": "",
            "text_it": "la risurrezione della carne,"
          },
          {
            "sp_it": "",
            "text_it": "la vita eterna."
          },
          {
            "sp_it": "",
            "text_it": "Amen."
          },
          {
            "sp_it": "",
            "text_it": "Oppure in canto:"
          },
          {
            "sp_it": "",
            "text_it": "Credo in unum Deum"
          },
          {
            "sp_it": "",
            "text_it": "Patrem omnipoténtem, factórem caeli et terrae,"
          },
          {
            "sp_it": "",
            "text_it": "visibílium ómnium et invisibílium."
          },
          {
            "sp_it": "",
            "text_it": "Et in unum Dóminum Iesum Christum,"
          },
          {
            "sp_it": "",
            "text_it": "Fílium Dei Unigénitum,"
          },
          {
            "sp_it": "",
            "text_it": "et ex Patre natum ante ómnia saécula."
          },
          {
            "sp_it": "",
            "text_it": "Deum de Deo, lumen de lúmine,"
          },
          {
            "sp_it": "",
            "text_it": "Deum verum de Deo vero,"
          },
          {
            "sp_it": "",
            "text_it": "génitum, non factum, consubstantiálem Patri:"
          },
          {
            "sp_it": "",
            "text_it": "per quem ómnia facta sunt."
          },
          {
            "sp_it": "",
            "text_it": "Qui propter nos hómines et propter nostram salútem"
          },
          {
            "sp_it": "",
            "text_it": "descéndit de caelis."
          },
          {
            "sp_it": "",
            "text_it": "324 Rito della Messa con il popolo"
          },
          {
            "sp_it": "",
            "text_it": "Alle parole: Et incarnátus... fino a factus est , tutti si inchinano."
          },
          {
            "sp_it": "",
            "text_it": "Et incarnátus est de Spíritu Sancto"
          },
          {
            "sp_it": "",
            "text_it": "ex María Vírgine, et homo factus est."
          },
          {
            "sp_it": "",
            "text_it": "Crucifíxus étiam pro nobis sub Póntio Piláto;"
          },
          {
            "sp_it": "",
            "text_it": "passus et sepúltus est,"
          },
          {
            "sp_it": "",
            "text_it": "et resurréxit tértia die, secúndum Scriptúras,"
          },
          {
            "sp_it": "",
            "text_it": "et ascéndit in caelum, sedet ad déxteram Patris."
          },
          {
            "sp_it": "",
            "text_it": "Et íterum ventúrus est cum glória, iudicáre vivos et mórtuos,"
          },
          {
            "sp_it": "",
            "text_it": "cuius regni non erit finis."
          },
          {
            "sp_it": "",
            "text_it": "Et in Spíritum Sanctum, Dóminum et vivificántem:"
          },
          {
            "sp_it": "",
            "text_it": "qui ex Patre Filióque procédit."
          },
          {
            "sp_it": "",
            "text_it": "Qui cum Patre et Fílio simul adorátur et conglorificátur:"
          },
          {
            "sp_it": "",
            "text_it": "qui locútus est per prophétas."
          },
          {
            "sp_it": "",
            "text_it": "Et unam, sanctam, cathólicam et apostólicam Ecclésiam."
          },
          {
            "sp_it": "",
            "text_it": "Confíteor unum baptísma in remissiónem peccatórum."
          },
          {
            "sp_it": "",
            "text_it": "Et exspécto resurrectiónem mortuórum,"
          },
          {
            "sp_it": "",
            "text_it": "et vitam ventúri saéculi. Amen."
          }
        ]
      }
    }
  },
  {
    "id": "2.9 universal",
    "type": "part",
    "header": {
      "it": "Preghiera universale"
    },
    "lines": [
      {
        "rubric_it": "Le intenzioni sono preparate per la celebrazione."
      },
      {
        "rubric_it": "Segue la preghiera universale o dei fedeli."
      }
    ],
    "if": "sunday"
  },
  {
    "id": "3. THE LITURGY OF THE EUCHARIST",
    "type": "section",
    "it": "Liturgia Eucaristica"
  },
  {
    "id": "3.1 offertory",
    "type": "part",
    "header": {
      "it": "Preparazione dei doni"
    },
    "lines": [
      {
        "sp_it": "",
        "text_it": "Terminata la Liturgia della Parola, i ministri preparano sull’altare il corporale, il purifi -"
      },
      {
        "sp_it": "",
        "text_it": "catoio, il calice, la palla e il Messale, mentre si può eseguire il Canto di offertorio."
      },
      {
        "sp_it": "",
        "text_it": "È bene che i fedeli esprimano la loro partecipazione all’offerta, portando sia il pane e il"
      },
      {
        "sp_it": "",
        "text_it": "vino per la celebrazione dell’Eucaristia, sia altri doni per le necessità della Chiesa e dei"
      },
      {
        "sp_it": "",
        "text_it": "poveri."
      },
      {
        "rubric_it": "Il sacerdote, stando all’altare, prende la patena con il pane e, tenendola con entrambe le"
      },
      {
        "sp_it": "",
        "text_it": "mani un po’ sollevata sull’altare, dice sottovoce:"
      },
      {
        "sp_it": "",
        "text_it": "Benedetto sei tu, Signore, Dio dell’universo:"
      },
      {
        "sp_it": "",
        "text_it": "dalla tua bontà abbiamo ricevuto questo pane,"
      },
      {
        "sp_it": "",
        "text_it": "frutto della terra e del lavoro dell’uomo;"
      },
      {
        "sp_it": "",
        "text_it": "lo presentiamo a te,"
      },
      {
        "sp_it": "",
        "text_it": "perché diventi per noi cibo di vita eterna."
      },
      {
        "rubric_it": "Quindi depone sul corporale la patena con il pane."
      },
      {
        "rubric_it": "Se non si esegue il canto di offertorio, il sacerdote può dire questa formula ad alta voce;"
      },
      {
        "sp_it": "",
        "text_it": "al termine il popolo può acclamare:"
      },
      {
        "sp_it": "",
        "text_it": "Benedetto nei secoli il Signore."
      },
      {
        "rubric_it": "Il diacono, o il sacerdote, versa nel calice il vino, con un po’ d’acqua, dicendo sottovoce:"
      },
      {
        "sp_it": "",
        "text_it": "L’acqua unita al vino"
      },
      {
        "sp_it": "",
        "text_it": "sia segno della nostra unione"
      },
      {
        "sp_it": "",
        "text_it": "con la vita divina di colui che ha voluto assumere"
      },
      {
        "sp_it": "",
        "text_it": "la nostra natura umana."
      },
      {
        "rubric_it": "Il sacerdote prende il calice e, tenendolo con entrambe le mani un po’ sollevato sull’al -"
      },
      {
        "sp_it": "",
        "text_it": "tare, dice sottovoce:"
      },
      {
        "sp_it": "",
        "text_it": "Benedetto sei tu, Signore, Dio dell’universo:"
      },
      {
        "sp_it": "",
        "text_it": "dalla tua bontà abbiamo ricevuto questo vino,"
      },
      {
        "sp_it": "",
        "text_it": "frutto della vite e del lavoro dell’uomo;"
      },
      {
        "sp_it": "",
        "text_it": "lo presentiamo a te,"
      },
      {
        "sp_it": "",
        "text_it": "perché diventi per noi bevanda di salvezza."
      },
      {
        "rubric_it": "Quindi depone il calice sul corporale."
      },
      {
        "rubric_it": "Se non si esegue il canto di offertorio, il sacerdote può dire questa formula ad alta voce;"
      },
      {
        "sp_it": "",
        "text_it": "al termine il popolo può acclamare:"
      },
      {
        "sp_it": "",
        "text_it": "Benedetto nei secoli il Signore."
      },
      {
        "rubric_it": "Il sacerdote, inchinandosi profondamente, dice sottovoce:"
      },
      {
        "sp_it": "",
        "text_it": "Umili e pentiti accoglici, o Signore:"
      },
      {
        "sp_it": "",
        "text_it": "ti sia gradito il nostro sacrificio"
      },
      {
        "sp_it": "",
        "text_it": "che oggi si compie dinanzi a te."
      },
      {
        "rubric_it": "Si possono incensare le offerte, la croce e l’altare. Poi il diacono, o un ministro, incensa il"
      },
      {
        "sp_it": "",
        "text_it": "sacerdote e il popolo."
      },
      {
        "rubric_it": "Il sacerdote, stando a lato dell’altare, si lava le mani dicendo sottovoce:"
      },
      {
        "sp_it": "",
        "text_it": "Lavami, o Signore, dalla mia colpa,"
      },
      {
        "sp_it": "",
        "text_it": "dal mio peccato rendimi puro."
      },
      {
        "rubric_it": "Il sacerdote, ritornato al centro dell’altare, allargando e ricongiungendo le mani, rivolto"
      },
      {
        "sp_it": "",
        "text_it": "al popolo dice:"
      },
      {
        "sp_it": "",
        "text_it": "Pregate, fratelli e sorelle,"
      },
      {
        "sp_it": "",
        "text_it": "perché il mio e vostro sacrificio"
      },
      {
        "sp_it": "",
        "text_it": "sia gradito a Dio Padre onnipotente."
      },
      {
        "rubric_it": "★"
      },
      {
        "rubric_it": "Oppure:"
      },
      {
        "sp_it": "",
        "text_it": "Pregate, fratelli e sorelle,"
      },
      {
        "sp_it": "",
        "text_it": "perché questa nostra famiglia,"
      },
      {
        "sp_it": "",
        "text_it": "radunata dallo Spirito Santo nel nome di Cristo,"
      },
      {
        "sp_it": "",
        "text_it": "possa offrire il sacrificio gradito"
      },
      {
        "sp_it": "",
        "text_it": "a Dio Padre onnipotente."
      },
      {
        "rubric_it": "★"
      },
      {
        "rubric_it": "Oppure:"
      },
      {
        "sp_it": "",
        "text_it": "Pregate, fratelli e sorelle,"
      },
      {
        "sp_it": "",
        "text_it": "perché, portando all’altare"
      },
      {
        "sp_it": "",
        "text_it": "la gioia e la fatica di ogni giorno,"
      },
      {
        "sp_it": "",
        "text_it": "ci disponiamo a offrire il sacrificio"
      },
      {
        "sp_it": "",
        "text_it": "gradito a Dio Padre onnipotente."
      },
      {
        "rubric_it": "★"
      },
      {
        "rubric_it": "Oppure:"
      },
      {
        "sp_it": "",
        "text_it": "Pregate, fratelli e sorelle,"
      },
      {
        "sp_it": "",
        "text_it": "perché il sacrificio della Chiesa,"
      },
      {
        "sp_it": "",
        "text_it": "in questa sosta che la rinfranca"
      },
      {
        "sp_it": "",
        "text_it": "nel suo cammino verso la patria del cielo,"
      },
      {
        "sp_it": "",
        "text_it": "sia gradito a Dio Padre onnipotente."
      },
      {
        "rubric_it": "Il popolo risponde:"
      },
      {
        "sp_it": "Tutti",
        "text_it": "Il Signore riceva dalle tue mani questo sacrificio"
      },
      {
        "sp_it": "",
        "text_it": "a lode e gloria del suo nome,"
      },
      {
        "sp_it": "",
        "text_it": "per il bene nostro e di tutta la sua santa Chiesa."
      },
      {
        "rubric_it": "Il popolo si alza e il sacerdote, con le braccia allargate, dice l ’Orazione sulle offerte."
      },
      {
        "sp_it": "",
        "text_it": "L’orazione sulle offerte termina con la conclusione breve:"
      },
      {
        "sp_it": "",
        "text_it": "Per Cristo nostro Signore."
      },
      {
        "sp_it": "",
        "text_it": "– se alla fine di essa si fa menzione del Figlio:"
      },
      {
        "sp_it": "",
        "text_it": "Egli vive e regna nei secoli dei secoli."
      }
    ]
  },
  {
    "id": "3.2 prayer_offerings",
    "type": "part",
    "header": {
      "it": "Orazione sulle offerte"
    },
    "lines": [
      {
        "sp_it": "",
        "text_it": "(Orazione sulle offerte del giorno)"
      },
      {
        "sp_it": "Tutti",
        "text_it": "Amen."
      }
    ]
  },
  {
    "id": "3.3 eucharist",
    "type": "selectable",
    "isEucharist": true,
    "header": {
      "it": "Preghiera Eucaristica"
    },
    "variants": {
      "1": {
        "label": {
          "it": "Preghiera Eucaristica I (Canone Romano)"
        }
      },
      "2": {
        "label": {
          "it": "Preghiera Eucaristica II"
        }
      },
      "3": {
        "label": {
          "it": "Preghiera Eucaristica III"
        }
      },
      "4": {
        "label": {
          "it": "Preghiera Eucaristica IV"
        }
      }
    },
    "common_dialogue": [
      {
        "sp_it": "V/",
        "text_it": "Il Signore sia con voi."
      },
      {
        "sp_it": "R/",
        "text_it": "E con il tuo spirito."
      },
      {
        "sp_it": "V/",
        "text_it": "In alto i nostri cuori."
      },
      {
        "sp_it": "R/",
        "text_it": "Sono rivolti al Signore."
      },
      {
        "sp_it": "V/",
        "text_it": "Rendiamo grazie al Signore nostro Dio."
      },
      {
        "sp_it": "R/",
        "text_it": "È cosa buona e giusta."
      }
    ],
    "songs": {
      "cei_complete_prefaces": {
        "title": {
          "it": "Prefazi completi del Messale Romano CEI"
        },
        "content": [
          {
            "sp_it": "",
            "text_it": "327Preghiera Eucaristica"
          },
          {
            "rubric_it": "Il sacerdote può cantare tutta, o in parte, la Preghiera Eucaristica."
          },
          {
            "rubric_it": "Il sacerdote inizia la Preghiera Eucaristica con il Prefazio. Allargando le braccia, dice:"
          },
          {
            "sp_it": "C",
            "text_it": "Il Signore sia con voi."
          },
          {
            "sp_it": "Tutti",
            "text_it": "E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "Alzando le mani, il sacerdote prosegue:"
          },
          {
            "sp_it": "",
            "text_it": "In alto i nostri cuori."
          },
          {
            "sp_it": "Tutti",
            "text_it": "Sono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "Con le braccia allargate, il sacerdote soggiunge:"
          },
          {
            "sp_it": "",
            "text_it": "Rendiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "Tutti",
            "text_it": "È cosa buona e giusta."
          },
          {
            "rubric_it": "Il sacerdote continua il prefazio con le braccia allargate."
          },
          {
            "sp_it": "",
            "text_it": "Alla fine congiunge le mani e conclude il prefazio cantando o proclamando ad alta voce"
          },
          {
            "sp_it": "",
            "text_it": "insieme con il popolo:"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Oppure in canto:"
          },
          {
            "sp_it": "",
            "text_it": "Sanctus, Sanctus, Sanctus Dóminus Deus Sábaoth."
          },
          {
            "sp_it": "",
            "text_it": "Pleni sunt caeli et terra glória tua."
          },
          {
            "sp_it": "",
            "text_it": "Hosánna in excélsis."
          },
          {
            "sp_it": "",
            "text_it": "Benedíctus qui venit in nómine Dómini."
          },
          {
            "sp_it": "",
            "text_it": "Hosánna in excélsis."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio dell’Avvento I"
          },
          {
            "sp_it": "",
            "text_it": "La duplice venuta di Cristo"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe del Tempo di Avvento, dalla prima domenica al"
          },
          {
            "sp_it": "",
            "text_it": "16 dicembre, e nelle Messe che non hanno un prefazio proprio."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo,"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Al suo primo avvento"
          },
          {
            "sp_it": "",
            "text_it": "nell’umiltà della condizione umana *"
          },
          {
            "sp_it": "",
            "text_it": "egli portò a compimento la promessa antica *"
          },
          {
            "sp_it": "",
            "text_it": "e ci aprì la via + dell’eterna salvezza. **"
          },
          {
            "rubric_it": "Quando verrà di nuovo nello splendore della gloria, *"
          },
          {
            "sp_it": "",
            "text_it": "ci chiamerà a possedere il regno promesso *"
          },
          {
            "sp_it": "",
            "text_it": "che ora osiamo sperare + vigilanti nell’attesa. **"
          },
          {
            "sp_it": "",
            "text_it": "E noi,"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli Angeli e agli Arcangeli, *"
          },
          {
            "sp_it": "",
            "text_it": "ai Troni e alle Dominazioni"
          },
          {
            "sp_it": "",
            "text_it": "e alla moltitudine dei cori celesti, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo con voce incessante +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "329Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "rubric_it": "★ Prefazio dell’Avvento I/A"
          },
          {
            "sp_it": "",
            "text_it": "Cristo, Signore e giudice della storia"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe del Tempo di Avvento, dalla prima domenica al"
          },
          {
            "sp_it": "",
            "text_it": "16 dicembre, e nelle Messe che non hanno un prefazio proprio."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente giusto renderti grazie *"
          },
          {
            "sp_it": "",
            "text_it": "e innalzare a te l’inno di benedizione e di lode, *"
          },
          {
            "sp_it": "",
            "text_it": "Padre onnipotente, +"
          },
          {
            "sp_it": "",
            "text_it": "principio e fine di tutte le cose. **"
          },
          {
            "sp_it": "",
            "text_it": "Tu ci hai nascosto il giorno e l’ora"
          },
          {
            "sp_it": "",
            "text_it": "in cui il Cristo tuo Figlio,"
          },
          {
            "sp_it": "",
            "text_it": "Signore e giudice della storia, *"
          },
          {
            "sp_it": "",
            "text_it": "apparirà sulle nubi del cielo +"
          },
          {
            "sp_it": "",
            "text_it": "rivestito di potenza e splendore. **"
          },
          {
            "sp_it": "",
            "text_it": "In quel giorno tremendo e glorioso"
          },
          {
            "sp_it": "",
            "text_it": "passerà il mondo presente"
          },
          {
            "rubric_it": "*"
          },
          {
            "sp_it": "",
            "text_it": "e sorgeranno cieli nuovi + e terra nuova. **"
          },
          {
            "sp_it": "",
            "text_it": "Ora egli viene incontro a noi"
          },
          {
            "sp_it": "",
            "text_it": "in ogni uomo e in ogni tempo,"
          },
          {
            "rubric_it": "*"
          },
          {
            "sp_it": "",
            "text_it": "perché lo accogliamo nella fede *"
          },
          {
            "sp_it": "",
            "text_it": "e testimoniamo nell’amore +"
          },
          {
            "sp_it": "",
            "text_it": "la beata speranza del suo regno. **"
          },
          {
            "sp_it": "",
            "text_it": "Nell’attesa del suo ultimo avvento, *"
          },
          {
            "sp_it": "",
            "text_it": "insieme agli angeli e ai santi, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo unanimi +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "331Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio dell’Avvento II"
          },
          {
            "sp_it": "",
            "text_it": "Le due attese di Cristo"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe del Tempo di Avvento, dal 17 al 24 dicembre, e"
          },
          {
            "sp_it": "",
            "text_it": "nelle Messe che non hanno un prefazio proprio."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo,"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Egli fu annunciato da tutti i profeti, *"
          },
          {
            "sp_it": "",
            "text_it": "la Vergine Madre l’attese e lo portò in grembo"
          },
          {
            "sp_it": "",
            "text_it": "con ineffabile amore, *"
          },
          {
            "sp_it": "",
            "text_it": "Giovanni proclamò la sua venuta +"
          },
          {
            "sp_it": "",
            "text_it": "e lo indicò presente nel mondo. **"
          },
          {
            "sp_it": "",
            "text_it": "Lo stesso Signore,"
          },
          {
            "sp_it": "",
            "text_it": "che ci invita a preparare con gioia il suo Natale, *"
          },
          {
            "sp_it": "",
            "text_it": "ci trovi vigilanti nella preghiera, +"
          },
          {
            "sp_it": "",
            "text_it": "esultanti nella lode. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo dono della tua benevolenza, *"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli Angeli e agli Arcangeli,"
          },
          {
            "sp_it": "",
            "text_it": "ai Troni e alle Dominazioni"
          },
          {
            "sp_it": "",
            "text_it": "e alla moltitudine dei cori celesti, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo con voce incessante +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "rubric_it": "★ Prefazio dell’Avvento II/A"
          },
          {
            "sp_it": "",
            "text_it": "Maria nuova Eva"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe del Tempo di Avvento, dal 17 al 24 dicembre, e nelle"
          },
          {
            "sp_it": "",
            "text_it": "Messe che non hanno un prefazio proprio."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente giusto"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, *"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Noi ti lodiamo, ti benediciamo,"
          },
          {
            "sp_it": "",
            "text_it": "ti glorifichiamo *"
          },
          {
            "sp_it": "",
            "text_it": "per il mistero della Vergine Madre. **"
          },
          {
            "sp_it": "",
            "text_it": "Dall’antico avversario venne la rovina, *"
          },
          {
            "sp_it": "",
            "text_it": "dal grembo verginale della figlia di Sion"
          },
          {
            "sp_it": "",
            "text_it": "è germinato colui che ci nutre con il pane degli angeli *"
          },
          {
            "sp_it": "",
            "text_it": "e sono scaturite per tutto il genere umano +"
          },
          {
            "sp_it": "",
            "text_it": "la salvezza e la pace. **"
          },
          {
            "sp_it": "",
            "text_it": "La grazia che Eva ci tolse"
          },
          {
            "sp_it": "",
            "text_it": "ci è ridonata in Maria."
          },
          {
            "rubric_it": "*"
          },
          {
            "sp_it": "",
            "text_it": "In lei, Madre di tutti gli uomini, *"
          },
          {
            "sp_it": "",
            "text_it": "la maternità, redenta dal peccato e dalla morte, +"
          },
          {
            "sp_it": "",
            "text_it": "si apre al dono della vita nuova. **"
          },
          {
            "sp_it": "",
            "text_it": "Dove abbondò la colpa, *"
          },
          {
            "sp_it": "",
            "text_it": "sovrabbonda la tua misericordia +"
          },
          {
            "sp_it": "",
            "text_it": "in Cristo nostro salvatore. **"
          },
          {
            "sp_it": "",
            "text_it": "333Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "E noi,"
          },
          {
            "sp_it": "",
            "text_it": "nell’attesa della sua venuta, *"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli angeli e ai santi, +"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo l’inno della tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "334 Rito della Messa con il popolo"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio di Natale I"
          },
          {
            "sp_it": "",
            "text_it": "Cristo luce"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe di Natale e della sua Ottava, anche in quelle che"
          },
          {
            "sp_it": "",
            "text_it": "hanno un prefazio proprio, fatta eccezione per le Messe che hanno un prefazio proprio dei"
          },
          {
            "sp_it": "",
            "text_it": "divini misteri o delle Persone divine; si dice inoltre nei giorni feriali del Tempo di Natale."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "rubric_it": "Nel mistero del Verbo incarnato *"
          },
          {
            "sp_it": "",
            "text_it": "è apparsa agli occhi della nostra mente"
          },
          {
            "sp_it": "",
            "text_it": "la luce nuova del tuo fulgore, *"
          },
          {
            "sp_it": "",
            "text_it": "perché conoscendo Dio visibilmente, +"
          },
          {
            "sp_it": "",
            "text_it": "per mezzo di lui siamo conquistati"
          },
          {
            "sp_it": "",
            "text_it": "all’amore delle realtà invisibili. **"
          },
          {
            "sp_it": "",
            "text_it": "E noi,"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli Angeli e agli Arcangeli, *"
          },
          {
            "sp_it": "",
            "text_it": "ai Troni e alle Dominazioni"
          },
          {
            "sp_it": "",
            "text_it": "e alla moltitudine dei cori celesti, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo con voce incessante +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "335Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "rubric_it": "Nel Canone Romano si dice il Communicántes proprio."
          },
          {
            "sp_it": "",
            "text_it": "Nella Messa vespertina della vigilia e in quella della notte si dice: mentre celebriamo la"
          },
          {
            "sp_it": "",
            "text_it": "notte santissima ; poi, fino al termine dell’Ottava, si dice sempre: mentre celebriamo il"
          },
          {
            "sp_it": "",
            "text_it": "giorno santissimo."
          },
          {
            "rubric_it": "★ Nelle Preghiere Eucaristiche II e III si fa il ricordo proprio del Natale."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio di Natale II"
          },
          {
            "sp_it": "",
            "text_it": "Nell’incarnazione Cristo reintegra l’universo"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe di Natale e della sua Ottava, anche in quelle che"
          },
          {
            "sp_it": "",
            "text_it": "hanno un prefazio proprio, fatta eccezione per le Messe che hanno un prefazio proprio dei"
          },
          {
            "sp_it": "",
            "text_it": "divini misteri o delle Persone divine; si dice inoltre nei giorni feriali del Tempo di Natale."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "rubric_it": "Nel mistero adorabile del Natale *"
          },
          {
            "sp_it": "",
            "text_it": "egli, Verbo invisibile,"
          },
          {
            "sp_it": "",
            "text_it": "apparve visibilmente nella nostra carne, *"
          },
          {
            "sp_it": "",
            "text_it": "per assumere in sé tutto il creato +"
          },
          {
            "sp_it": "",
            "text_it": "e sollevarlo dalla sua caduta. **"
          },
          {
            "sp_it": "",
            "text_it": "Generato prima dei secoli,"
          },
          {
            "sp_it": "",
            "text_it": "cominciò a esistere nel tempo, *"
          },
          {
            "sp_it": "",
            "text_it": "per reintegrare l’universo nel tuo disegno, o Padre, +"
          },
          {
            "sp_it": "",
            "text_it": "e ricondurre a te l’umanità dispersa. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo dono della tua benevolenza, *"
          },
          {
            "sp_it": "",
            "text_it": "uniti a tutti gli angeli, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo esultanti +"
          },
          {
            "sp_it": "",
            "text_it": "la tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "rubric_it": "Nel Canone Romano si dice il Communicántes proprio."
          },
          {
            "sp_it": "",
            "text_it": "Nella Messa vespertina della vigilia e in quella della notte si dice: mentre celebriamo la"
          },
          {
            "sp_it": "",
            "text_it": "notte santissima ; p o i, fin o al t e rmin e d e ll’ O tta v a, s i di c e se m p r e: mentre celebriamo il"
          },
          {
            "sp_it": "",
            "text_it": "giorno santissimo."
          },
          {
            "rubric_it": "★ Nelle Preghiere Eucaristiche II e III si fa il ricordo proprio del Natale."
          },
          {
            "sp_it": "",
            "text_it": "337Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio di Natale III"
          },
          {
            "sp_it": "",
            "text_it": "Il sublime scambio nell’incarnazione del Verbo"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe di Natale e della sua Ottava, anche in quelle che"
          },
          {
            "sp_it": "",
            "text_it": "hanno un prefazio proprio, fatta eccezione per le Messe che hanno un prefazio proprio dei"
          },
          {
            "sp_it": "",
            "text_it": "divini misteri o delle Persone divine; si dice inoltre nei giorni feriali del Tempo di Natale."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "In lui [oggi] risplende in piena luce"
          },
          {
            "sp_it": "",
            "text_it": "il sublime scambio che ci ha redenti: *"
          },
          {
            "sp_it": "",
            "text_it": "la nostra debolezza è assunta dal Verbo,"
          },
          {
            "sp_it": "",
            "text_it": "la natura mortale è innalzata a dignità perenne, *"
          },
          {
            "sp_it": "",
            "text_it": "e noi, uniti a te in comunione mirabile, +"
          },
          {
            "sp_it": "",
            "text_it": "condividiamo la tua vita immortale. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo mistero di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "uniti ai cori degli angeli, *"
          },
          {
            "sp_it": "",
            "text_it": "proclamiamo esultanti +"
          },
          {
            "sp_it": "",
            "text_it": "la tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "rubric_it": "Nel Canone Romano si dice il Communicántes proprio."
          },
          {
            "sp_it": "",
            "text_it": "Nella Messa vespertina della vigilia e in quella della notte si dice: mentre celebriamo la"
          },
          {
            "sp_it": "",
            "text_it": "notte santissima ; poi, fino al termine dell’Ottava, si dice sempre: mentre celebriamo il"
          },
          {
            "sp_it": "",
            "text_it": "giorno santissimo."
          },
          {
            "rubric_it": "★ Nelle Preghiere Eucaristiche II e III si fa il ricordo proprio del Natale."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio dell’Epifania"
          },
          {
            "sp_it": "",
            "text_it": "Cristo luce delle genti"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe della solennità dell’Epifania. Si può dire nei giorni dopo l’Epifania, insieme con i prefazi del Natale, fino al sabato che precede la festa del"
          },
          {
            "sp_it": "",
            "text_it": "Battesimo del Signore."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "[Oggi] in Cristo, luce del mondo, *"
          },
          {
            "sp_it": "",
            "text_it": "tu hai rivelato alle genti il mistero della salvezza *"
          },
          {
            "sp_it": "",
            "text_it": "e in lui, apparso nella nostra carne mortale, +"
          },
          {
            "sp_it": "",
            "text_it": "ci hai rinnovati con la gloria dell’immortalità divina. **"
          },
          {
            "sp_it": "",
            "text_it": "E noi,"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli Angeli e agli Arcangeli, *"
          },
          {
            "sp_it": "",
            "text_it": "ai Troni e alle Dominazioni"
          },
          {
            "sp_it": "",
            "text_it": "e alla moltitudine dei cori celesti, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo con voce incessante +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "339Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "rubric_it": "Nel Canone Romano si dice il Communicántes proprio."
          },
          {
            "rubric_it": "★ Nelle Preghiere Eucaristiche II e III si fa il ricordo proprio dell’Epifania."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio di Quaresima I"
          },
          {
            "sp_it": "",
            "text_it": "Il significato spirituale della Quaresima"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nel Tempo di Quaresima, specialmente nelle domeniche,"
          },
          {
            "sp_it": "",
            "text_it": "quando non è indicato un prefazio proprio."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Ogni anno tu doni ai tuoi fedeli"
          },
          {
            "sp_it": "",
            "text_it": "di prepararsi con gioia, purificati nello spirito,"
          },
          {
            "sp_it": "",
            "text_it": "alla celebrazione della Pasqua, *"
          },
          {
            "sp_it": "",
            "text_it": "perché, assidui nella preghiera e nella carità operosa, *"
          },
          {
            "sp_it": "",
            "text_it": "attingano ai misteri della redenzione"
          },
          {
            "sp_it": "",
            "text_it": "la pienezza della vita nuova +"
          },
          {
            "sp_it": "",
            "text_it": "in Cristo tuo Figlio, nostro salvatore. **"
          },
          {
            "sp_it": "",
            "text_it": "E noi, uniti agli Angeli e agli Arcangeli, *"
          },
          {
            "sp_it": "",
            "text_it": "ai Troni e alle Dominazioni"
          },
          {
            "sp_it": "",
            "text_it": "e alla moltitudine dei cori celesti, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo con voce incessante +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "341Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio di Quaresima II"
          },
          {
            "sp_it": "",
            "text_it": "La penitenza dello spirito"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nel Tempo di Quaresima, specialmente nelle domeniche,"
          },
          {
            "sp_it": "",
            "text_it": "quando non è indicato un prefazio proprio."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Tu hai stabilito per i tuoi figli"
          },
          {
            "sp_it": "",
            "text_it": "un tempo di rinnovamento spirituale *"
          },
          {
            "sp_it": "",
            "text_it": "perché si convertano a te con tutto il cuore *"
          },
          {
            "sp_it": "",
            "text_it": "e, liberi dai fermenti del peccato, +"
          },
          {
            "sp_it": "",
            "text_it": "vivano le vicende di questo mondo"
          },
          {
            "sp_it": "",
            "text_it": "sempre rivolti ai beni eterni. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo dono della tua benevolenza, *"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli angeli e ai santi, *"
          },
          {
            "sp_it": "",
            "text_it": "con voce unanime +"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo l’inno della tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "343Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio di Quaresima III"
          },
          {
            "sp_it": "",
            "text_it": "I frutti dell’astinenza"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe delle ferie di Quaresima e nei giorni di digiuno."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Tu vuoi che ti glorifichiamo"
          },
          {
            "sp_it": "",
            "text_it": "con la penitenza quaresimale, *"
          },
          {
            "sp_it": "",
            "text_it": "perché la vittoria sul nostro peccato"
          },
          {
            "sp_it": "",
            "text_it": "ci renda disponibili alle necessità dei poveri *"
          },
          {
            "sp_it": "",
            "text_it": "a imitazione della tua bontà infinita. **"
          },
          {
            "sp_it": "",
            "text_it": "E noi,"
          },
          {
            "sp_it": "",
            "text_it": "uniti a tutti gli angeli, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo a una sola voce +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio di Quaresima IV"
          },
          {
            "sp_it": "",
            "text_it": "I frutti del digiuno"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe delle ferie di Quaresima e nei giorni di digiuno."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Con il digiuno quaresimale"
          },
          {
            "sp_it": "",
            "text_it": "tu vinci le nostre passioni, elevi lo spirito, *"
          },
          {
            "sp_it": "",
            "text_it": "infondi la forza e doni il premio, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Per mezzo di lui gli Angeli lodano la tua gloria, *"
          },
          {
            "sp_it": "",
            "text_it": "le Dominazioni ti adorano,"
          },
          {
            "sp_it": "",
            "text_it": "le Potenze ti venerano con tremore; *"
          },
          {
            "sp_it": "",
            "text_it": "a te inneggiano i cieli dei cieli e i Serafini, +"
          },
          {
            "sp_it": "",
            "text_it": "uniti in eterna esultanza. **"
          },
          {
            "sp_it": "",
            "text_it": "Al loro canto concedi, o Signore, *"
          },
          {
            "sp_it": "",
            "text_it": "che si uniscano le nostre umili voci +"
          },
          {
            "sp_it": "",
            "text_it": "nell’inno di lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "345Preghiera Eucaristica"
          },
          {
            "rubric_it": "★ Prefazio di Quaresima V"
          },
          {
            "sp_it": "",
            "text_it": "La via dell’esodo nel deserto quaresimale"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe delle ferie di Quaresima."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente giusto benedire il tuo nome,"
          },
          {
            "sp_it": "",
            "text_it": "Padre santo, ricco di misericordia, *"
          },
          {
            "sp_it": "",
            "text_it": "nel nostro itinerario verso la luce pasquale"
          },
          {
            "sp_it": "",
            "text_it": "sulle orme di Cristo, *"
          },
          {
            "sp_it": "",
            "text_it": "maestro e modello +"
          },
          {
            "sp_it": "",
            "text_it": "dell’umanità riconciliata nell’amore. **"
          },
          {
            "sp_it": "",
            "text_it": "Tu riapri alla Chiesa la strada dell’esodo"
          },
          {
            "sp_it": "",
            "text_it": "attraverso il deserto quaresimale, *"
          },
          {
            "sp_it": "",
            "text_it": "perché ai piedi della santa montagna,"
          },
          {
            "sp_it": "",
            "text_it": "con il cuore contrito e umiliato,"
          },
          {
            "sp_it": "",
            "text_it": "prenda coscienza della sua vocazione"
          },
          {
            "sp_it": "",
            "text_it": "di popolo dell’alleanza, *"
          },
          {
            "sp_it": "",
            "text_it": "convocato per la tua lode"
          },
          {
            "sp_it": "",
            "text_it": "nell’ascolto della tua parola +"
          },
          {
            "sp_it": "",
            "text_it": "e nell’esperienza gioiosa dei tuoi prodigi. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questi segni di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "insieme agli angeli, ministri della tua gloria, *"
          },
          {
            "sp_it": "",
            "text_it": "proclamiamo nel canto +"
          },
          {
            "sp_it": "",
            "text_it": "la tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio della Passione del Signore I"
          },
          {
            "sp_it": "",
            "text_it": "La potenza della Croce"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle ferie della quinta settimana di Quaresima e nelle Messe"
          },
          {
            "sp_it": "",
            "text_it": "che celebrano i misteri della Croce e della Passione del Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Per la passione salvifica del tuo Figlio *"
          },
          {
            "sp_it": "",
            "text_it": "l’intero universo"
          },
          {
            "sp_it": "",
            "text_it": "ha riconosciuto il senso della tua gloria; *"
          },
          {
            "sp_it": "",
            "text_it": "nella potenza ineffabile della croce +"
          },
          {
            "sp_it": "",
            "text_it": "splende il giudizio sul mondo"
          },
          {
            "sp_it": "",
            "text_it": "e il potere regale di Cristo crocifisso. **"
          },
          {
            "sp_it": "",
            "text_it": "E noi, o Signore,"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli angeli e a tutti i santi, *"
          },
          {
            "sp_it": "",
            "text_it": "eleviamo a te un inno di lode +"
          },
          {
            "sp_it": "",
            "text_it": "ed esultanti cantiamo: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "347Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio della Passione del Signore II"
          },
          {
            "sp_it": "",
            "text_it": "La vittoria della Passione"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice il lunedì, il martedì e il mercoledì della Settimana Santa."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo,"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Contempliamo ormai vicini i giorni"
          },
          {
            "sp_it": "",
            "text_it": "della sua Pasqua di morte e risurrezione *"
          },
          {
            "sp_it": "",
            "text_it": "nei quali è sconfitta la superbia dell’antico avversario *"
          },
          {
            "sp_it": "",
            "text_it": "e celebrato il mistero + della nostra redenzione. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo grande mistero,"
          },
          {
            "sp_it": "",
            "text_it": "le schiere degli angeli adorano la tua gloria *"
          },
          {
            "sp_it": "",
            "text_it": "e per l’eternità si allietano al tuo cospetto. *"
          },
          {
            "sp_it": "",
            "text_it": "Al loro canto concedi, o Signore, +"
          },
          {
            "sp_it": "",
            "text_it": "che si uniscano le nostre voci nell’inno di lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio Pasquale I"
          },
          {
            "sp_it": "",
            "text_it": "Il mistero pasquale"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nel Tempo Pasquale. Nella Veglia Pasquale si dice: in questa"
          },
          {
            "sp_it": "",
            "text_it": "notte, nel giorno di Pasqua e per tutta l’Ottava si dice: in questo giorno , le altre volte:"
          },
          {
            "sp_it": "",
            "text_it": "in questo tempo."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "proclamare sempre la tua gloria, o Signore, *"
          },
          {
            "sp_it": "",
            "text_it": "e soprattutto esaltarti"
          },
          {
            "sp_it": "",
            "text_it": "[in questa notte] in questo giorno [in questo tempo] +"
          },
          {
            "sp_it": "",
            "text_it": "nel quale Cristo, nostra Pasqua, si è immolato. **"
          },
          {
            "sp_it": "",
            "text_it": "È lui il vero Agnello"
          },
          {
            "sp_it": "",
            "text_it": "che ha tolto i peccati del mondo, *"
          },
          {
            "sp_it": "",
            "text_it": "è lui che morendo ha distrutto la morte *"
          },
          {
            "sp_it": "",
            "text_it": "e risorgendo +"
          },
          {
            "sp_it": "",
            "text_it": "ha ridato a noi la vita. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo mistero,"
          },
          {
            "sp_it": "",
            "text_it": "nella pienezza della gioia pasquale, *"
          },
          {
            "sp_it": "",
            "text_it": "l’umanità esulta su tutta la terra *"
          },
          {
            "sp_it": "",
            "text_it": "e le schiere degli angeli e dei santi +"
          },
          {
            "sp_it": "",
            "text_it": "cantano senza fine l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "349Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Nella Veglia Pasquale, nel giorno di Pasqua e per tutta l’Ottava, nel Canone Romano si"
          },
          {
            "sp_it": "",
            "text_it": "dicono il Communicántese l’Hanc ígitur propri."
          },
          {
            "rubric_it": "★ Nelle Preghiere Eucaristiche II e III si fa il ricordo proprio della Pasqua e dei neobattezzati. Nella Veglia Pasquale si dice: notte."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio Pasquale II"
          },
          {
            "sp_it": "",
            "text_it": "La vita nuova in Cristo"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nel Tempo Pasquale."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "proclamare sempre la tua gloria, o Signore, *"
          },
          {
            "sp_it": "",
            "text_it": "e soprattutto esaltarti in questo tempo +"
          },
          {
            "sp_it": "",
            "text_it": "nel quale Cristo, nostra Pasqua, si è immolato. **"
          },
          {
            "sp_it": "",
            "text_it": "Per mezzo di lui rinascono a vita nuova"
          },
          {
            "sp_it": "",
            "text_it": "i figli della luce, *"
          },
          {
            "sp_it": "",
            "text_it": "e si aprono ai credenti le porte del regno dei cieli. *"
          },
          {
            "sp_it": "",
            "text_it": "In lui morto è redenta la nostra morte, +"
          },
          {
            "sp_it": "",
            "text_it": "in lui risorto tutta la vita risorge. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo mistero,"
          },
          {
            "sp_it": "",
            "text_it": "nella pienezza della gioia pasquale, *"
          },
          {
            "sp_it": "",
            "text_it": "l’umanità esulta su tutta la terra *"
          },
          {
            "sp_it": "",
            "text_it": "e le schiere degli angeli e dei santi +"
          },
          {
            "sp_it": "",
            "text_it": "cantano senza fine l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "351Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio Pasquale III"
          },
          {
            "sp_it": "",
            "text_it": "Cristo vive per sempre e intercede per noi"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nel Tempo Pasquale."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "proclamare sempre la tua gloria, o Signore, *"
          },
          {
            "sp_it": "",
            "text_it": "e soprattutto esaltarti in questo tempo +"
          },
          {
            "sp_it": "",
            "text_it": "nel quale Cristo, nostra Pasqua, si è immolato. **"
          },
          {
            "sp_it": "",
            "text_it": "Egli continua a offrirsi per noi *"
          },
          {
            "sp_it": "",
            "text_it": "e intercede come nostro avvocato; *"
          },
          {
            "sp_it": "",
            "text_it": "immolato sulla croce, più non muore, +"
          },
          {
            "sp_it": "",
            "text_it": "e con i segni della passione vive immortale. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo mistero,"
          },
          {
            "sp_it": "",
            "text_it": "nella pienezza della gioia pasquale, *"
          },
          {
            "sp_it": "",
            "text_it": "l’umanità esulta su tutta la terra *"
          },
          {
            "sp_it": "",
            "text_it": "e le schiere degli angeli e dei santi +"
          },
          {
            "sp_it": "",
            "text_it": "cantano senza fine l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio Pasquale IV"
          },
          {
            "sp_it": "",
            "text_it": "La restaurazione dell’universo per mezzo del mistero pasquale"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nel Tempo Pasquale."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "proclamare sempre la tua gloria, o Signore, *"
          },
          {
            "sp_it": "",
            "text_it": "e soprattutto esaltarti in questo tempo +"
          },
          {
            "sp_it": "",
            "text_it": "nel quale Cristo, nostra Pasqua, si è immolato. **"
          },
          {
            "sp_it": "",
            "text_it": "In lui, vincitore del peccato e della morte, *"
          },
          {
            "sp_it": "",
            "text_it": "l’universo risorge e si rinnova, *"
          },
          {
            "sp_it": "",
            "text_it": "e l’uomo ritorna alle sorgenti della vita. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo mistero,"
          },
          {
            "sp_it": "",
            "text_it": "nella pienezza della gioia pasquale, *"
          },
          {
            "sp_it": "",
            "text_it": "l’umanità esulta su tutta la terra *"
          },
          {
            "sp_it": "",
            "text_it": "e le schiere degli angeli e dei santi +"
          },
          {
            "sp_it": "",
            "text_it": "cantano senza fine l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "353Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio Pasquale V"
          },
          {
            "sp_it": "",
            "text_it": "Cristo Agnello e sacerdote"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nel Tempo Pasquale."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "proclamare sempre la tua gloria, o Signore, *"
          },
          {
            "sp_it": "",
            "text_it": "e soprattutto esaltarti in questo tempo +"
          },
          {
            "sp_it": "",
            "text_it": "nel quale Cristo, nostra Pasqua, si è immolato. **"
          },
          {
            "sp_it": "",
            "text_it": "Offrendo il suo corpo sulla croce, *"
          },
          {
            "sp_it": "",
            "text_it": "diede compimento ai sacrifici antichi *"
          },
          {
            "sp_it": "",
            "text_it": "e, donandosi per la nostra redenzione, +"
          },
          {
            "sp_it": "",
            "text_it": "divenne altare, Agnello e sacerdote. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo mistero,"
          },
          {
            "sp_it": "",
            "text_it": "nella pienezza della gioia pasquale, *"
          },
          {
            "sp_it": "",
            "text_it": "l’umanità esulta su tutta la terra *"
          },
          {
            "sp_it": "",
            "text_it": "e le schiere degli angeli e dei santi +"
          },
          {
            "sp_it": "",
            "text_it": "cantano senza fine l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio dell’Ascensione del Signore I"
          },
          {
            "sp_it": "",
            "text_it": "Il mistero dell’Ascensione"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nel giorno dell’Ascensione del Signore. Si può dire nei giorni"
          },
          {
            "sp_it": "",
            "text_it": "dopo l’Ascensione fino al sabato che precede la Pentecoste, nelle Messe che non hanno"
          },
          {
            "sp_it": "",
            "text_it": "un prefazio proprio."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Il Signore Gesù, re della gloria, *"
          },
          {
            "sp_it": "",
            "text_it": "vincitore del peccato e della morte, *"
          },
          {
            "sp_it": "",
            "text_it": "[oggi] è salito al cielo +"
          },
          {
            "sp_it": "",
            "text_it": "contemplato dagli angeli. **"
          },
          {
            "sp_it": "",
            "text_it": "Mediatore tra Dio e gli uomini,"
          },
          {
            "sp_it": "",
            "text_it": "giudice del mondo e Signore dell’universo, *"
          },
          {
            "sp_it": "",
            "text_it": "ci ha preceduti nella dimora eterna"
          },
          {
            "sp_it": "",
            "text_it": "non per separarsi dalla nostra condizione umana, *"
          },
          {
            "sp_it": "",
            "text_it": "ma per darci la serena fiducia che dove è lui,"
          },
          {
            "sp_it": "",
            "text_it": "capo e primogenito, +"
          },
          {
            "sp_it": "",
            "text_it": "saremo anche noi, sue membra,"
          },
          {
            "sp_it": "",
            "text_it": "uniti nella stessa gloria. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo mistero,"
          },
          {
            "sp_it": "",
            "text_it": "nella pienezza della gioia pasquale, *"
          },
          {
            "sp_it": "",
            "text_it": "l’umanità esulta su tutta la terra *"
          },
          {
            "sp_it": "",
            "text_it": "e le schiere degli angeli e dei santi +"
          },
          {
            "sp_it": "",
            "text_it": "cantano senza fine l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "355Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "rubric_it": "Nel giorno dell’Ascensione, nel Canone Romano si dice il Communicántes proprio."
          },
          {
            "rubric_it": "★ Nelle Preghiere Eucaristiche II e III si fa il ricordo proprio dell’Ascensione."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio dell’Ascensione del Signore II"
          },
          {
            "sp_it": "",
            "text_it": "Il mistero dell’Ascensione"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nel giorno dell’Ascensione del Signore. Si può dire nei giorni"
          },
          {
            "sp_it": "",
            "text_it": "dopo l’Ascensione fino al sabato che precede la Pentecoste, nelle Messe che non hanno"
          },
          {
            "sp_it": "",
            "text_it": "un prefazio proprio."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo,"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "rubric_it": "Dopo la risurrezione"
          },
          {
            "sp_it": "",
            "text_it": "egli si mostrò visibilmente a tutti i discepoli, *"
          },
          {
            "sp_it": "",
            "text_it": "e sotto il loro sguardo salì al cielo, *"
          },
          {
            "sp_it": "",
            "text_it": "perché noi fossimo partecipi +"
          },
          {
            "sp_it": "",
            "text_it": "della sua vita divina. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo mistero,"
          },
          {
            "sp_it": "",
            "text_it": "nella pienezza della gioia pasquale, *"
          },
          {
            "sp_it": "",
            "text_it": "l’umanità esulta su tutta la terra *"
          },
          {
            "sp_it": "",
            "text_it": "e le schiere degli angeli e dei santi +"
          },
          {
            "sp_it": "",
            "text_it": "cantano senza fine l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "rubric_it": "Nel giorno dell’Ascensione, nel Canone Romano si dice il Communicántes proprio."
          },
          {
            "rubric_it": "★ Nelle Preghiere Eucaristiche II e III si fa il ricordo proprio dell’Ascensione."
          },
          {
            "sp_it": "",
            "text_it": "357Preghiera Eucaristica"
          },
          {
            "rubric_it": "★ Prefazio dopo l’Ascensione"
          },
          {
            "sp_it": "",
            "text_it": "Nell’attesa della venuta dello Spirito"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si può dire nei giorni dopo l’Ascensione fino al sabato che precede la"
          },
          {
            "sp_it": "",
            "text_it": "Pentecoste, nelle Messe che non hanno un prefazio proprio."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta, *"
          },
          {
            "sp_it": "",
            "text_it": "che tutte le creature in cielo e sulla terra"
          },
          {
            "sp_it": "",
            "text_it": "si uniscano nella tua lode, *"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo tuo Figlio, Signore dell’universo. **"
          },
          {
            "sp_it": "",
            "text_it": "Entrato una volta per sempre"
          },
          {
            "sp_it": "",
            "text_it": "nel santuario dei cieli, *"
          },
          {
            "sp_it": "",
            "text_it": "egli intercede per noi, *"
          },
          {
            "sp_it": "",
            "text_it": "mediatore e garante +"
          },
          {
            "sp_it": "",
            "text_it": "della perenne effusione dello Spirito. **"
          },
          {
            "sp_it": "",
            "text_it": "Pastore e custode delle nostre anime, *"
          },
          {
            "sp_it": "",
            "text_it": "ci chiama all’unanime preghiera, *"
          },
          {
            "sp_it": "",
            "text_it": "sull’esempio di Maria e degli apostoli, +"
          },
          {
            "sp_it": "",
            "text_it": "nell’attesa di una rinnovata Pentecoste. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo mistero di santificazione e d’amore, *"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli angeli e ai santi, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo senza fine +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio delle domeniche"
          },
          {
            "sp_it": "",
            "text_it": "del Tempo Ordinario I"
          },
          {
            "sp_it": "",
            "text_it": "Il mistero pasquale e il popolo di Dio"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle domeniche del Tempo Ordinario."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Padre santo, Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Mirabile è l’opera da lui compiuta nel mistero pasquale: *"
          },
          {
            "sp_it": "",
            "text_it": "egli ci ha fatti passare"
          },
          {
            "sp_it": "",
            "text_it": "dalla schiavitù del peccato e della morte"
          },
          {
            "sp_it": "",
            "text_it": "alla gloria di proclamarci stirpe eletta,"
          },
          {
            "sp_it": "",
            "text_it": "regale sacerdozio, gente santa,"
          },
          {
            "sp_it": "",
            "text_it": "popolo che egli si è acquistato, *"
          },
          {
            "sp_it": "",
            "text_it": "per annunciare in ogni luogo i tuoi prodigi, o Padre, +"
          },
          {
            "sp_it": "",
            "text_it": "che dalle tenebre ci hai chiamati"
          },
          {
            "sp_it": "",
            "text_it": "allo splendore della tua luce. **"
          },
          {
            "sp_it": "",
            "text_it": "E noi, uniti agli Angeli e agli Arcangeli, *"
          },
          {
            "sp_it": "",
            "text_it": "ai Troni e alle Dominazioni"
          },
          {
            "sp_it": "",
            "text_it": "e alla moltitudine dei cori celesti, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo con voce incessante +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "359Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio delle domeniche"
          },
          {
            "sp_it": "",
            "text_it": "del Tempo Ordinario II"
          },
          {
            "sp_it": "",
            "text_it": "Il mistero della redenzione"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle domeniche del Tempo Ordinario."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Nella sua misericordia per noi peccatori"
          },
          {
            "sp_it": "",
            "text_it": "egli si è degnato di nascere dalla Vergine; *"
          },
          {
            "sp_it": "",
            "text_it": "morendo sulla croce,"
          },
          {
            "sp_it": "",
            "text_it": "ci ha liberati dalla morte eterna *"
          },
          {
            "sp_it": "",
            "text_it": "e con la sua risurrezione +"
          },
          {
            "sp_it": "",
            "text_it": "ci ha donato la vita immortale. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo mistero di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "con gli Angeli e gli Arcangeli,"
          },
          {
            "sp_it": "",
            "text_it": "i Troni, le Dominazioni,"
          },
          {
            "sp_it": "",
            "text_it": "e con tutte le schiere celesti, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo senza fine +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "361Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio delle domeniche"
          },
          {
            "sp_it": "",
            "text_it": "del Tempo Ordinario III"
          },
          {
            "sp_it": "",
            "text_it": "La salvezza dell’uomo nel Figlio fatto uomo"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle domeniche del Tempo Ordinario."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Abbiamo riconosciuto il segno della tua immensa gloria *"
          },
          {
            "sp_it": "",
            "text_it": "quando hai mandato il tuo Figlio +"
          },
          {
            "sp_it": "",
            "text_it": "a prendere su di sé la nostra debolezza; **"
          },
          {
            "sp_it": "",
            "text_it": "in lui, nuovo Adamo, hai redento l’umanità decaduta, *"
          },
          {
            "sp_it": "",
            "text_it": "e con la sua morte +"
          },
          {
            "sp_it": "",
            "text_it": "ci hai resi partecipi della vita immortale. **"
          },
          {
            "sp_it": "",
            "text_it": "Per mezzo di lui le schiere degli angeli"
          },
          {
            "sp_it": "",
            "text_it": "adorano la tua maestà divina *"
          },
          {
            "sp_it": "",
            "text_it": "e nell’eternità si allietano davanti al tuo volto. *"
          },
          {
            "sp_it": "",
            "text_it": "Al loro canto concedi, o Signore, +"
          },
          {
            "sp_it": "",
            "text_it": "che si uniscano le nostre voci nell’inno di lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio delle domeniche"
          },
          {
            "sp_it": "",
            "text_it": "del Tempo Ordinario IV"
          },
          {
            "sp_it": "",
            "text_it": "La storia della salvezza"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle domeniche del Tempo Ordinario."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo,"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Egli, nascendo da Maria Vergine,"
          },
          {
            "sp_it": "",
            "text_it": "ha rinnovato l’umanità decaduta; *"
          },
          {
            "sp_it": "",
            "text_it": "soffrendo la passione,"
          },
          {
            "sp_it": "",
            "text_it": "ha distrutto i nostri peccati; *"
          },
          {
            "sp_it": "",
            "text_it": "risorgendo dai morti,"
          },
          {
            "sp_it": "",
            "text_it": "ci ha aperto il passaggio alla vita eterna; *"
          },
          {
            "sp_it": "",
            "text_it": "salendo a te, o Padre, +"
          },
          {
            "sp_it": "",
            "text_it": "ci ha dischiuso le porte del regno dei cieli. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo mistero di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli angeli e ai santi, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo senza fine +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "363Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio delle domeniche"
          },
          {
            "sp_it": "",
            "text_it": "del Tempo Ordinario V"
          },
          {
            "sp_it": "",
            "text_it": "La creazione"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle domeniche del Tempo Ordinario."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Tu hai creato il mondo nella varietà dei suoi elementi *"
          },
          {
            "sp_it": "",
            "text_it": "e hai disposto l’avvicendarsi dei tempi e delle stagioni. **"
          },
          {
            "sp_it": "",
            "text_it": "All’uomo, fatto a tua immagine,"
          },
          {
            "sp_it": "",
            "text_it": "hai affdato le meraviglie dell’universo, *"
          },
          {
            "sp_it": "",
            "text_it": "perché, fedele interprete dei tuoi disegni,"
          },
          {
            "sp_it": "",
            "text_it": "si prenda cura di tutto il creato, *"
          },
          {
            "sp_it": "",
            "text_it": "e nelle tue opere glorifichi te,"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro."
          },
          {
            "rubric_it": "**"
          },
          {
            "sp_it": "",
            "text_it": "E noi,"
          },
          {
            "sp_it": "",
            "text_it": "con tutti gli angeli del cielo, *"
          },
          {
            "sp_it": "",
            "text_it": "innalziamo a te la nostra lode, +"
          },
          {
            "sp_it": "",
            "text_it": "acclamando con festosa esultanza: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio delle domeniche"
          },
          {
            "sp_it": "",
            "text_it": "del Tempo Ordinario VI"
          },
          {
            "sp_it": "",
            "text_it": "Il pegno della Pasqua eterna"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle domeniche del Tempo Ordinario."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Da te riceviamo esistenza, energia e vita: *"
          },
          {
            "sp_it": "",
            "text_it": "ogni giorno del nostro pellegrinaggio sulla terra"
          },
          {
            "sp_it": "",
            "text_it": "è un dono sempre nuovo del tuo amore per noi"
          },
          {
            "sp_it": "",
            "text_it": "e un pegno de lla vita immortale, *"
          },
          {
            "sp_it": "",
            "text_it": "poiché possediamo fin da ora le primizie dello Spirito,"
          },
          {
            "sp_it": "",
            "text_it": "nel quale hai risuscitato Gesù Cristo dai morti, *"
          },
          {
            "sp_it": "",
            "text_it": "e viviamo nell’attesa che si compia la beata speranza +"
          },
          {
            "sp_it": "",
            "text_it": "nella Pasqua eterna del tuo regno. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo mistero di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "con tutti gli angeli del cielo, *"
          },
          {
            "sp_it": "",
            "text_it": "innalziamo a te la nostra lode, +"
          },
          {
            "sp_it": "",
            "text_it": "acclamando con festosa esultanza: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "365Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio delle domeniche"
          },
          {
            "sp_it": "",
            "text_it": "del Tempo Ordinario VII"
          },
          {
            "sp_it": "",
            "text_it": "La salvezza mediante l’obbedienza di Cristo"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle domeniche del Tempo Ordinario."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Nella tua misericordia hai tanto amato il mondo *"
          },
          {
            "sp_it": "",
            "text_it": "da mandare il tuo Unigenito come redentore *"
          },
          {
            "sp_it": "",
            "text_it": "a condividere in tutto, eccetto il peccato, +"
          },
          {
            "sp_it": "",
            "text_it": "la nostra condizione umana. **"
          },
          {
            "sp_it": "",
            "text_it": "Così hai amato in noi"
          },
          {
            "sp_it": "",
            "text_it": "ciò che tu amavi nel Figlio *"
          },
          {
            "sp_it": "",
            "text_it": "e in lui, servo obbediente, +"
          },
          {
            "sp_it": "",
            "text_it": "hai ricostruito l’alleanza"
          },
          {
            "sp_it": "",
            "text_it": "distrutta dalla disobbedienza del peccato. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo mistero di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli angeli e ai santi, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo esultanti + la tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio delle domeniche"
          },
          {
            "sp_it": "",
            "text_it": "del Tempo Ordinario VIII"
          },
          {
            "sp_it": "",
            "text_it": "La Chiesa radunata nella comunione della T rinità"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle domeniche del Tempo Ordinario."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Con il Sangue del tuo Figlio"
          },
          {
            "sp_it": "",
            "text_it": "e la potenza dello Spirito"
          },
          {
            "sp_it": "",
            "text_it": "hai raccolto intorno a te"
          },
          {
            "sp_it": "",
            "text_it": "i figli dispersi a causa del peccato, *"
          },
          {
            "sp_it": "",
            "text_it": "perché il tuo popolo,"
          },
          {
            "sp_it": "",
            "text_it": "radunato nella comunione della Trinità,"
          },
          {
            "sp_it": "",
            "text_it": "a lode della tua multiforme sapienza, *"
          },
          {
            "sp_it": "",
            "text_it": "sia riconosciuto corpo di Cristo, tempio dello Spirito, +"
          },
          {
            "sp_it": "",
            "text_it": "Chiesa del Dio vivente. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo mistero di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "uniti ai cori degli angeli, *"
          },
          {
            "sp_it": "",
            "text_it": "proclamiamo esultanti +"
          },
          {
            "sp_it": "",
            "text_it": "la tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "367Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio delle domeniche"
          },
          {
            "sp_it": "",
            "text_it": "del Tempo Ordinario IX *"
          },
          {
            "sp_it": "",
            "text_it": "La missione dello Spirito nella Chiesa"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle domeniche del Tempo Ordinario."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "In ogni tempo tu doni energie nuove alla tua Chiesa *"
          },
          {
            "sp_it": "",
            "text_it": "e lungo il suo cammino +"
          },
          {
            "sp_it": "",
            "text_it": "mirabilmente la guidi e la proteggi. **"
          },
          {
            "sp_it": "",
            "text_it": "Con la potenza del tuo santo Spirito"
          },
          {
            "sp_it": "",
            "text_it": "le assicuri il tuo sostegno, *"
          },
          {
            "sp_it": "",
            "text_it": "ed essa, nel suo amore fiducioso,"
          },
          {
            "sp_it": "",
            "text_it": "non si stanca mai d’invocarti nella prova, *"
          },
          {
            "sp_it": "",
            "text_it": "e nella gioia sempre ti rende grazie, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Per mezzo di lui"
          },
          {
            "sp_it": "",
            "text_it": "cieli e terra inneggiano al tuo amore;"
          },
          {
            "rubric_it": "*"
          },
          {
            "sp_it": "",
            "text_it": "e noi, uniti agli angeli e ai santi, +"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo senza fine la tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "rubric_it": "* Q uesto prefazio ricorre anche nella Messa votiva dello Spirito Santo B."
          },
          {
            "rubric_it": "★ Prefazio delle domeniche"
          },
          {
            "sp_it": "",
            "text_it": "del Tempo Ordinario X"
          },
          {
            "sp_it": "",
            "text_it": "Il giorno del Signore"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle domeniche del Tempo Ordinario."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente giusto benedirti e renderti grazie, *"
          },
          {
            "sp_it": "",
            "text_it": "Padre santo, sorgente della verità e della vita, *"
          },
          {
            "sp_it": "",
            "text_it": "perché in questo giorno di festa +"
          },
          {
            "sp_it": "",
            "text_it": "ci hai convocato nella tua casa. **"
          },
          {
            "sp_it": "",
            "text_it": "Oggi la tua famiglia,"
          },
          {
            "sp_it": "",
            "text_it": "riunita nell’ascolto della P arola"
          },
          {
            "sp_it": "",
            "text_it": "e nella comunione dell’unico pane spezzato, *"
          },
          {
            "sp_it": "",
            "text_it": "fa memoria del Signore risorto *"
          },
          {
            "sp_it": "",
            "text_it": "nell’attesa della domenica senza tramonto, +"
          },
          {
            "sp_it": "",
            "text_it": "quando l’umanità intera entrerà nel tuo riposo. **"
          },
          {
            "sp_it": "",
            "text_it": "Allora noi vedremo il tuo volto *"
          },
          {
            "sp_it": "",
            "text_it": "e loderemo senza fine +"
          },
          {
            "sp_it": "",
            "text_it": "la tua misericordia. **"
          },
          {
            "sp_it": "",
            "text_it": "Con questa gioiosa speranza,"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli angeli e ai santi, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo a una sola voce +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "369Preghiera Eucaristica"
          },
          {
            "rubric_it": "★ Prefazio del Battesimo"
          },
          {
            "sp_it": "",
            "text_it": "Il Battesimo inizio della vita nuova"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si può dire nella Messa rituale del Battesimo."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È giusto renderti grazie"
          },
          {
            "sp_it": "",
            "text_it": "ed esaltare il tuo nome, *"
          },
          {
            "sp_it": "",
            "text_it": "Padre santo e misericordioso, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo nostro Signore e redentore. **"
          },
          {
            "sp_it": "",
            "text_it": "Noi ti lodiamo, ti benediciamo,"
          },
          {
            "sp_it": "",
            "text_it": "ti glorifichiamo *"
          },
          {
            "sp_it": "",
            "text_it": "per il sacramento della nostra rinascita. **"
          },
          {
            "sp_it": "",
            "text_it": "Dal cuore squarciato del tuo Figlio"
          },
          {
            "sp_it": "",
            "text_it": "hai fatto scaturire per noi il dono nuziale del Battesimo, *"
          },
          {
            "sp_it": "",
            "text_it": "prima Pasqua dei credenti,"
          },
          {
            "sp_it": "",
            "text_it": "porta della nostra salvezza,"
          },
          {
            "rubric_it": "*"
          },
          {
            "sp_it": "",
            "text_it": "inizio della vita in Cristo, +"
          },
          {
            "sp_it": "",
            "text_it": "fonte dell’umanità nuova. **"
          },
          {
            "sp_it": "",
            "text_it": "Dall’acqua e dallo Spirito,"
          },
          {
            "sp_it": "",
            "text_it": "nel grembo della Chiesa, vergine e madre, *"
          },
          {
            "sp_it": "",
            "text_it": "tu generi il popolo sacerdotale e regale, *"
          },
          {
            "sp_it": "",
            "text_it": "radunato da tutte le genti +"
          },
          {
            "sp_it": "",
            "text_it": "nell’unità e nella santità del tuo amore. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo dono della tua benevolenza"
          },
          {
            "sp_it": "",
            "text_it": "la tua famiglia ti adora"
          },
          {
            "rubric_it": "*"
          },
          {
            "sp_it": "",
            "text_it": "e, unita agli angeli e ai santi, +"
          },
          {
            "sp_it": "",
            "text_it": "canta l’inno della tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "rubric_it": "Nelle Preghiere Eucaristiche si fa il ricordo dei neo-battezzati."
          },
          {
            "rubric_it": "★ Prefazio della Confermazione"
          },
          {
            "sp_it": "",
            "text_it": "Confermati con il sigillo dello Spirito"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si può dire nella Messa rituale della Confermazione."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente giusto renderti grazie, *"
          },
          {
            "sp_it": "",
            "text_it": "è bello cantare la tua gloria,"
          },
          {
            "sp_it": "",
            "text_it": "Padre santo,"
          },
          {
            "sp_it": "",
            "text_it": "sorgente di ogni bene, *"
          },
          {
            "sp_it": "",
            "text_it": "che nel Battesimo rigeneri i credenti +"
          },
          {
            "sp_it": "",
            "text_it": "e li rendi partecipi"
          },
          {
            "sp_it": "",
            "text_it": "del mistero pasquale del tuo Figlio. **"
          },
          {
            "sp_it": "",
            "text_it": "Tu li confermi con il sigillo dello Spirito *"
          },
          {
            "sp_it": "",
            "text_it": "mediante l’imposizione delle mani +"
          },
          {
            "sp_it": "",
            "text_it": "e l’unzione regale del crisma. **"
          },
          {
            "sp_it": "",
            "text_it": "Così rinnovati a immagine di Cristo, *"
          },
          {
            "sp_it": "",
            "text_it": "unto di Spirito Santo"
          },
          {
            "sp_it": "",
            "text_it": "e inviato per il lieto annuncio della salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "li fai tuoi commensali al banchetto eucaristico +"
          },
          {
            "sp_it": "",
            "text_it": "e testimoni della fede nella Chiesa e nel mondo. **"
          },
          {
            "sp_it": "",
            "text_it": "E noi,"
          },
          {
            "sp_it": "",
            "text_it": "riuniti in festosa assemblea"
          },
          {
            "sp_it": "",
            "text_it": "per celebrare i prodigi di una rinnovata Pentecoste,"
          },
          {
            "rubric_it": "*"
          },
          {
            "sp_it": "",
            "text_it": "insieme agli angeli e ai santi, +"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo l’inno della tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "rubric_it": "Nelle Preghiere Eucaristiche si fa il ricordo dei neo-confermati."
          },
          {
            "sp_it": "",
            "text_it": "371Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio della Santissima Eucaristia I"
          },
          {
            "sp_it": "",
            "text_it": "L’Eucaristia memoriale del sacrificio di Cristo"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nella Messa «Cena del Signore». Si può dire anche nella so -"
          },
          {
            "sp_it": "",
            "text_it": "lennità del Santissimo Corpo e Sangue di Cristo e nelle Messe votive della Santissima"
          },
          {
            "sp_it": "",
            "text_it": "Eucaristia."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Sacerdote vero ed eterno,"
          },
          {
            "sp_it": "",
            "text_it": "egli istituì il rito del sacrificio perenne; *"
          },
          {
            "sp_it": "",
            "text_it": "a te per primo si offrì vittima di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "e comandò a noi di compiere l’offerta +"
          },
          {
            "sp_it": "",
            "text_it": "in sua memoria. **"
          },
          {
            "sp_it": "",
            "text_it": "Il suo Corpo per noi immolato"
          },
          {
            "sp_it": "",
            "text_it": "è nostro cibo e ci dà forza, *"
          },
          {
            "sp_it": "",
            "text_it": "il suo Sangue per noi versato +"
          },
          {
            "sp_it": "",
            "text_it": "è la bevanda che ci redime da ogni colpa. **"
          },
          {
            "sp_it": "",
            "text_it": "P er questo mistero di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "il cielo e la terra si uniscono in un cantico nuovo"
          },
          {
            "sp_it": "",
            "text_it": "di adorazione e di lode,"
          },
          {
            "rubric_it": "*"
          },
          {
            "sp_it": "",
            "text_it": "e noi, con tutti gli angeli del cielo, +"
          },
          {
            "sp_it": "",
            "text_it": "proclamiamo senza fine la tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "rubric_it": "Nel Canone Romano, nella Messa «Cena del Signore» si dicono il Communicántes,"
          },
          {
            "sp_it": "",
            "text_it": "l’Hanc ígitur e il Qui pridie propri (cf. pp. 143-144 )."
          },
          {
            "rubric_it": "★ Nelle Preghiere Eucaristiche II e III si fa il ricordo proprio."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio della Santissima Eucaristia II"
          },
          {
            "sp_it": "",
            "text_it": "I frutti della Santissima Eucaristia"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nella solennità del Santissimo Corpo e Sangue di Cristo e nelle"
          },
          {
            "sp_it": "",
            "text_it": "Messe votive della Santissima Eucaristia."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Nell’ultima Cena con i suoi apostoli, *"
          },
          {
            "sp_it": "",
            "text_it": "egli volle perpetuare nei secoli"
          },
          {
            "sp_it": "",
            "text_it": "il memoriale di salvezza della sua croce, *"
          },
          {
            "sp_it": "",
            "text_it": "e si offrì a te, Agnello senza macchia, +"
          },
          {
            "sp_it": "",
            "text_it": "lode perfetta e sacrificio a te gradito. **"
          },
          {
            "sp_it": "",
            "text_it": "In questo grande mistero"
          },
          {
            "sp_it": "",
            "text_it": "tu nutri e santifichi i tuoi fedeli, *"
          },
          {
            "sp_it": "",
            "text_it": "perché l’umanità, diffusa su tutta la terra, *"
          },
          {
            "sp_it": "",
            "text_it": "sia illuminata dall’unica fede +"
          },
          {
            "sp_it": "",
            "text_it": "e riunita dall’unico amore. **"
          },
          {
            "sp_it": "",
            "text_it": "E noi ci accostiamo a questo santo convito, *"
          },
          {
            "sp_it": "",
            "text_it": "perché l’effusione del tuo Spirito +"
          },
          {
            "sp_it": "",
            "text_it": "ci trasformi a immagine della tua gloria. **"
          },
          {
            "sp_it": "",
            "text_it": "P er questo mistero di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "il cielo e la terra si uniscono in un cantico nuovo"
          },
          {
            "sp_it": "",
            "text_it": "di adorazione e di lode; *"
          },
          {
            "sp_it": "",
            "text_it": "e noi, con tutte le schiere degli angeli, +"
          },
          {
            "sp_it": "",
            "text_it": "proclamiamo senza fine la tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "373Preghiera Eucaristica"
          },
          {
            "rubric_it": "★ Prefazio della Santissima Eucaristia III"
          },
          {
            "sp_it": "",
            "text_it": "L’Eucaristia viatico verso la Pasqua eterna"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si può dire nella Messa rituale per il Viatico."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente giusto renderti grazie *"
          },
          {
            "sp_it": "",
            "text_it": "e benedire il tuo nome, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio di misericordia e di pace. **"
          },
          {
            "sp_it": "",
            "text_it": "Tu hai voluto che il tuo Figlio,"
          },
          {
            "sp_it": "",
            "text_it": "obbediente fino alla morte di croce, *"
          },
          {
            "sp_it": "",
            "text_it": "ci precedesse sulla via del ritorno a te, *"
          },
          {
            "sp_it": "",
            "text_it": "termine ultimo + di ogni umana attesa. **"
          },
          {
            "sp_it": "",
            "text_it": "Nell’Eucaristia, testamento del suo amore, *"
          },
          {
            "sp_it": "",
            "text_it": "egli si fa cibo e bevanda spirituale +"
          },
          {
            "sp_it": "",
            "text_it": "per il nostro viaggio verso la Pasqua eterna. **"
          },
          {
            "sp_it": "",
            "text_it": "Con questo pegno della risurrezione finale *"
          },
          {
            "sp_it": "",
            "text_it": "partecipiamo nella speranza alla mensa gloriosa del tuo regno *"
          },
          {
            "sp_it": "",
            "text_it": "e, uniti agli angeli e ai santi, +"
          },
          {
            "sp_it": "",
            "text_it": "proclamiamo l’inno della tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "rubric_it": "★ Nelle Preghiere Eucaristiche si fa il ricordo di colui che riceve il Viatico."
          },
          {
            "rubric_it": "★ Prefazio dell’Ordine"
          },
          {
            "sp_it": "",
            "text_it": "Cristo sorgente di ogni ministero nella Chiesa"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si può dire nella Messa rituale dell’ordinazione."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta"
          },
          {
            "sp_it": "",
            "text_it": "lodarti e renderti grazie, *"
          },
          {
            "sp_it": "",
            "text_it": "Padre santo, Dio onnipotente e misericordioso, +"
          },
          {
            "sp_it": "",
            "text_it": "da cui proviene ogni paternità,"
          },
          {
            "sp_it": "",
            "text_it": "nella comunione di un solo Spirito. **"
          },
          {
            "sp_it": "",
            "text_it": "In Cristo tuo Figlio, eterno sacerdote,"
          },
          {
            "sp_it": "",
            "text_it": "servo obbediente,"
          },
          {
            "sp_it": "",
            "text_it": "pastore dei pastori, *"
          },
          {
            "sp_it": "",
            "text_it": "hai posto la sorgente di ogni ministero *"
          },
          {
            "sp_it": "",
            "text_it": "nella vivente tradizione apostolica +"
          },
          {
            "sp_it": "",
            "text_it": "del tuo popolo pellegrinante nel tempo. **"
          },
          {
            "sp_it": "",
            "text_it": "Con la varietà dei doni e dei carismi"
          },
          {
            "sp_it": "",
            "text_it": "tu scegli e costituisci i dispensatori dei santi misteri,"
          },
          {
            "rubric_it": "*"
          },
          {
            "sp_it": "",
            "text_it": "perché in ogni parte della terra"
          },
          {
            "sp_it": "",
            "text_it": "sia offerto il sacrificio perfetto *"
          },
          {
            "sp_it": "",
            "text_it": "e con la P arola e i Sacramenti"
          },
          {
            "sp_it": "",
            "text_it": "si edifichi la Chiesa, +"
          },
          {
            "sp_it": "",
            "text_it": "comunità della nuova alleanza,"
          },
          {
            "sp_it": "",
            "text_it": "tempio della tua lode. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo mistero di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli angeli e ai santi, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo con gioia +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "rubric_it": "Nelle Preghiere Eucaristiche si fa il ricordo dei neo-ordinati."
          },
          {
            "sp_it": "",
            "text_it": "375Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio del Matrimonio"
          },
          {
            "sp_it": "",
            "text_it": "La dignità dell’alleanza nuziale"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nella Messa rituale del Matrimonio. Per gli altri prefazi del"
          },
          {
            "sp_it": "",
            "text_it": "Matrimonio vedi pp. 815 e 818."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Tu hai dato alla comunità coniugale la dolce legge dell’amore"
          },
          {
            "sp_it": "",
            "text_it": "e il vincolo indissolubile della pace, *"
          },
          {
            "sp_it": "",
            "text_it": "perché l’unione casta e feconda degli sposi +"
          },
          {
            "sp_it": "",
            "text_it": "accresca il numero dei tuoi figli. **"
          },
          {
            "sp_it": "",
            "text_it": "Con disegno mirabile hai disposto"
          },
          {
            "sp_it": "",
            "text_it": "che la nascita di nuove creature allieti l’umana famiglia, *"
          },
          {
            "sp_it": "",
            "text_it": "e la loro rinascita edifichi la tua Chiesa, +"
          },
          {
            "sp_it": "",
            "text_it": "in Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Per mezzo di lui,"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli angeli e a tutti i santi, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo senza fine +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "rubric_it": "★ Nelle Preghiere Eucaristiche si fa il ricordo dei nuovi sposi."
          },
          {
            "rubric_it": "★ Prefazio della Penitenza"
          },
          {
            "sp_it": "",
            "text_it": "Il sacramento della Riconciliazione nello Spirito"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si può dire nel Tempo di Quaresima. Si dice nella Messa della"
          },
          {
            "sp_it": "",
            "text_it": "Riconciliazione e nelle Messe di carattere penitenziale."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente giusto lodarti e renderti grazie,"
          },
          {
            "sp_it": "",
            "text_it": "Padre santo, Dio onnipotente, *"
          },
          {
            "sp_it": "",
            "text_it": "per i tuoi benefici +"
          },
          {
            "sp_it": "",
            "text_it": "e soprattutto per la grazia del perdono. **"
          },
          {
            "sp_it": "",
            "text_it": "All’uomo, naufrago a causa del peccato, *"
          },
          {
            "sp_it": "",
            "text_it": "con il sacramento della Riconciliazione *"
          },
          {
            "sp_it": "",
            "text_it": "hai aperto in Cristo crocifisso e risorto +"
          },
          {
            "sp_it": "",
            "text_it": "il porto della misericordia e della pace. **"
          },
          {
            "sp_it": "",
            "text_it": "Nella potenza del tuo Spirito *"
          },
          {
            "sp_it": "",
            "text_it": "hai stabilito per la Chiesa,"
          },
          {
            "sp_it": "",
            "text_it": "santa e insieme bisognosa di penitenza,"
          },
          {
            "sp_it": "",
            "text_it": "una seconda tavola di salvezza dopo il Battesimo, *"
          },
          {
            "sp_it": "",
            "text_it": "e incessantemente la rinnovi +"
          },
          {
            "sp_it": "",
            "text_it": "per radunarla al banchetto gioioso del tuo amore. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo dono della tua benevolenza, *"
          },
          {
            "sp_it": "",
            "text_it": "insieme agli angeli e ai santi, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo unanimi +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "377Preghiera Eucaristica"
          },
          {
            "rubric_it": "★ Prefazio dell’Unzione degli infermi"
          },
          {
            "sp_it": "",
            "text_it": "La sofferenza, partecipazione alla Pasqua di Cristo"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si può dire nella Messa rituale dell’Unzione degli infermi."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente giusto renderti grazie, *"
          },
          {
            "sp_it": "",
            "text_it": "Padre santo, Dio onnipotente e misericordioso, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo, nostro redentore e Signore. **"
          },
          {
            "sp_it": "",
            "text_it": "Tu hai voluto che il tuo unico Figlio,"
          },
          {
            "sp_it": "",
            "text_it": "autore della vita,"
          },
          {
            "sp_it": "",
            "text_it": "medico dei corpi e delle anime, *"
          },
          {
            "sp_it": "",
            "text_it": "prendesse su di sé le nostre infermità *"
          },
          {
            "sp_it": "",
            "text_it": "per soccorrerci nell’ora della prova +"
          },
          {
            "sp_it": "",
            "text_it": "e santificarci nell’esperienza del dolore. **"
          },
          {
            "rubric_it": "Nel segno sacramentale dell’Unzione,"
          },
          {
            "sp_it": "",
            "text_it": "mediante la preghiera della Chiesa, *"
          },
          {
            "sp_it": "",
            "text_it": "ci purifichi e ci sollevi"
          },
          {
            "sp_it": "",
            "text_it": "con la grazia dello Spirito *"
          },
          {
            "sp_it": "",
            "text_it": "e ci rendi intimamente partecipi +"
          },
          {
            "sp_it": "",
            "text_it": "della vittoria pasquale. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo segno della tua benevolenza, *"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli angeli e ai santi, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo a una sola voce +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "rubric_it": "Nelle Preghiere Eucaristiche si fa il ricordo di coloro che hanno ricevuto l’Unzione degli"
          },
          {
            "sp_it": "",
            "text_it": "infermi."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio della beata Vergine Maria I"
          },
          {
            "sp_it": "",
            "text_it": "La maternità della beata Vergine Maria"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe della beata Vergine Maria, menzionando la celebrazione del giorno, secondo quanto è indicato nelle singole Messe."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Noi ti lodiamo, ti benediciamo,"
          },
          {
            "sp_it": "",
            "text_it": "ti glorifichiamo *"
          },
          {
            "sp_it": "",
            "text_it": "nella … della beata sempre V ergine Maria. **"
          },
          {
            "sp_it": "",
            "text_it": "Per opera dello Spirito Santo"
          },
          {
            "sp_it": "",
            "text_it": "ha concepito il tuo unico Figlio, *"
          },
          {
            "sp_it": "",
            "text_it": "e sempre intatta nella sua gloria verginale,"
          },
          {
            "sp_it": "",
            "text_it": "ha irradiato sul mondo la luce eterna, *"
          },
          {
            "sp_it": "",
            "text_it": "Gesù Cristo, Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Per mezzo di lui gli Angeli lodano la tua grandezza, *"
          },
          {
            "sp_it": "",
            "text_it": "le Dominazioni ti adorano,"
          },
          {
            "sp_it": "",
            "text_it": "le Potenze ti venerano con tremore; *"
          },
          {
            "sp_it": "",
            "text_it": "a te inneggiano i cieli dei cieli e i Serafini, +"
          },
          {
            "sp_it": "",
            "text_it": "uniti in eterna esultanza. **"
          },
          {
            "sp_it": "",
            "text_it": "Al loro canto concedi, o Signore, *"
          },
          {
            "sp_it": "",
            "text_it": "che si uniscano le nostre umili voci +"
          },
          {
            "sp_it": "",
            "text_it": "nell’inno di lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "379Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio della beata Vergine Maria II"
          },
          {
            "sp_it": "",
            "text_it": "La Chiesa con Maria magnifica il Signore"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe della beata Vergine Maria."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "renderti grazie, o Padre,"
          },
          {
            "sp_it": "",
            "text_it": "per le meraviglie che hai operato nei tuoi santi; *"
          },
          {
            "sp_it": "",
            "text_it": "ma è ancor più dolce e doveroso,"
          },
          {
            "sp_it": "",
            "text_it": "in questa memoria della beata V ergine Maria, +"
          },
          {
            "sp_it": "",
            "text_it": "magnificare il tuo amore per noi"
          },
          {
            "sp_it": "",
            "text_it": "con il suo stesso cantico di lode."
          },
          {
            "rubric_it": "**"
          },
          {
            "sp_it": "",
            "text_it": "Grandi cose hai fatto, o Signore,"
          },
          {
            "sp_it": "",
            "text_it": "per tutti i popoli della terra *"
          },
          {
            "sp_it": "",
            "text_it": "e hai prolungato nei secoli"
          },
          {
            "sp_it": "",
            "text_it": "l’opera della tua misericordia *"
          },
          {
            "sp_it": "",
            "text_it": "quando hai guardato l’umiltà della tua serva +"
          },
          {
            "sp_it": "",
            "text_it": "e per mezzo di lei ci hai donato il Salvatore del mondo,"
          },
          {
            "sp_it": "",
            "text_it": "il tuo Figlio Gesù Cristo, Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "In lui le schiere degli angeli,"
          },
          {
            "sp_it": "",
            "text_it": "unite in eterna esultanza, *"
          },
          {
            "sp_it": "",
            "text_it": "adorano la tua immensa grandezza. *"
          },
          {
            "sp_it": "",
            "text_it": "Al loro canto concedi, o Signore, +"
          },
          {
            "sp_it": "",
            "text_it": "che si uniscano le nostre voci nell’inno di lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio della beata Vergine Maria III"
          },
          {
            "sp_it": "",
            "text_it": "Maria modello e Madre della Chiesa"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe della beata Vergine Maria."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, Dio onnipotente ed eterno, *"
          },
          {
            "sp_it": "",
            "text_it": "e magnificare te, degno di ogni lode, +"
          },
          {
            "sp_it": "",
            "text_it": "nella festa [memoria] della beata V ergine Maria. **"
          },
          {
            "sp_it": "",
            "text_it": "A ll ’annuncio dell ’angelo"
          },
          {
            "sp_it": "",
            "text_it": "accolse nel cuore immacolato il tuo Verbo *"
          },
          {
            "sp_it": "",
            "text_it": "e lo concepì nel grembo verginale. *"
          },
          {
            "sp_it": "",
            "text_it": "Divenendo Madre del suo Creatore, +"
          },
          {
            "sp_it": "",
            "text_it": "segnò gli inizi della Chiesa. **"
          },
          {
            "sp_it": "",
            "text_it": "Ai piedi della croce, per il testamento d’amore del tuo Figlio, *"
          },
          {
            "sp_it": "",
            "text_it": "accolse come figli tutti gli uomini, *"
          },
          {
            "sp_it": "",
            "text_it": "generati dalla morte di Cristo +"
          },
          {
            "sp_it": "",
            "text_it": "per una vita che non avrà mai fine. **"
          },
          {
            "sp_it": "",
            "text_it": "Immagine e modello della Chiesa orante,"
          },
          {
            "sp_it": "",
            "text_it": "si unì alla preghiera degli apostoli"
          },
          {
            "sp_it": "",
            "text_it": "nell’attesa dello Spirito Santo. *"
          },
          {
            "sp_it": "",
            "text_it": "Assunta alla gloria del cielo,"
          },
          {
            "sp_it": "",
            "text_it": "accompagna con materno amore la Chiesa *"
          },
          {
            "sp_it": "",
            "text_it": "e la protegge nel cammino verso la patria, +"
          },
          {
            "sp_it": "",
            "text_it": "fino al giorno glorioso del Signore. **"
          },
          {
            "sp_it": "",
            "text_it": "E noi, uniti agli angeli e ai santi, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo con gioia + l’inno della tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "381Preghiera Eucaristica"
          },
          {
            "rubric_it": "★ Prefazio della beata Vergine Maria IV"
          },
          {
            "sp_it": "",
            "text_it": "Maria segno di consolazione e di speranza"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe della beata Vergine Maria."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente giusto renderti grazie, *"
          },
          {
            "sp_it": "",
            "text_it": "è bello cantare la tua gloria, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Noi ti lodiamo e ti benediciamo,"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo tuo Figlio *"
          },
          {
            "sp_it": "",
            "text_it": "nella festa [memoria] della beata V ergine Maria. **"
          },
          {
            "sp_it": "",
            "text_it": "Umile ancella, accolse la tua parola"
          },
          {
            "sp_it": "",
            "text_it": "e la custodì nel suo cuore; *"
          },
          {
            "sp_it": "",
            "text_it": "mirabilmente unita al mistero della redenzione,"
          },
          {
            "sp_it": "",
            "text_it": "perseverò con gli apostoli in preghiera"
          },
          {
            "sp_it": "",
            "text_it": "nell’attesa dello Spirito Santo;"
          },
          {
            "rubric_it": "*"
          },
          {
            "sp_it": "",
            "text_it": "ora risplende sul nostro cammino +"
          },
          {
            "sp_it": "",
            "text_it": "segno di consolazione e di sicura speranza. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo dono della tua benevolenza, *"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli angeli e ai santi, *"
          },
          {
            "sp_it": "",
            "text_it": "innalziamo a te il nostro canto +"
          },
          {
            "sp_it": "",
            "text_it": "e proclamiamo la tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "rubric_it": "★ Prefazio della beata Vergine Maria V"
          },
          {
            "sp_it": "",
            "text_it": "Maria immagine dell’umanità nuova"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe della beata Vergine Maria."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente giusto rendere grazie"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, *"
          },
          {
            "sp_it": "",
            "text_it": "fonte della vita e della gioia. **"
          },
          {
            "sp_it": "",
            "text_it": "Tu hai rivelato nella pienezza dei tempi"
          },
          {
            "sp_it": "",
            "text_it": "il mistero nascosto nei secoli, *"
          },
          {
            "sp_it": "",
            "text_it": "perché il mondo intero +"
          },
          {
            "sp_it": "",
            "text_it": "tornasse a vivere e a sperare. **"
          },
          {
            "rubric_it": "Nel Cristo, nuovo Adamo,"
          },
          {
            "sp_it": "",
            "text_it": "e in Maria, nuova Eva, *"
          },
          {
            "sp_it": "",
            "text_it": "è apparsa finalmente la tua Chiesa, +"
          },
          {
            "sp_it": "",
            "text_it": "primizia dell’umanità redenta. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo dono,"
          },
          {
            "sp_it": "",
            "text_it": "tutta la creazione,"
          },
          {
            "sp_it": "",
            "text_it": "con la potenza dello Spirito Santo,"
          },
          {
            "rubric_it": "*"
          },
          {
            "sp_it": "",
            "text_it": "riprende dal principio +"
          },
          {
            "sp_it": "",
            "text_it": "il suo cammino verso la Pasqua eterna. **"
          },
          {
            "sp_it": "",
            "text_it": "E noi,"
          },
          {
            "sp_it": "",
            "text_it": "insieme agli angeli e ai santi, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo con voce unanime +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "383Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio degli angeli"
          },
          {
            "sp_it": "",
            "text_it": "La gloria di Dio risplende negli angeli"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe dei santi angeli."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Noi proclamiamo la tua gloria"
          },
          {
            "sp_it": "",
            "text_it": "che risplende negli angeli e negli arcangeli; *"
          },
          {
            "sp_it": "",
            "text_it": "onorando questi tuoi messaggeri,"
          },
          {
            "sp_it": "",
            "text_it": "esaltiamo la tua bontà infinita: *"
          },
          {
            "sp_it": "",
            "text_it": "negli spiriti beati"
          },
          {
            "sp_it": "",
            "text_it": "tu ci riveli quanto sei grande e amabile"
          },
          {
            "sp_it": "",
            "text_it": "al di sopra di ogni creatura, *"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Per mezzo di lui"
          },
          {
            "sp_it": "",
            "text_it": "le moltitudini degli angeli celebrano la tua grandezza *"
          },
          {
            "sp_it": "",
            "text_it": "e le nostre voci si uniscono in adorazione +"
          },
          {
            "sp_it": "",
            "text_it": "al loro inno di lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio di san Giuseppe"
          },
          {
            "sp_it": "",
            "text_it": "sposo della beata Vergine Maria"
          },
          {
            "sp_it": "",
            "text_it": "La missione di san Giuseppe"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe di san Giuseppe."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Noi ti lodiamo, ti benediciamo, ti glorifichiamo *"
          },
          {
            "sp_it": "",
            "text_it": "nella solennità [memoria] di san Giuseppe. **"
          },
          {
            "sp_it": "",
            "text_it": "Egli, uomo giusto, da te fu prescelto"
          },
          {
            "sp_it": "",
            "text_it": "come sposo di Maria, Vergine e Madre di Dio; *"
          },
          {
            "sp_it": "",
            "text_it": "servo saggio e fedele,"
          },
          {
            "sp_it": "",
            "text_it": "fu posto a capo della santa Famiglia"
          },
          {
            "sp_it": "",
            "text_it": "per custodire, come padre, il tuo unico Figlio, *"
          },
          {
            "sp_it": "",
            "text_it": "concepito per opera dello Spirito Santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Gesù Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Per mezzo di lui gli Angeli lodano la tua gloria, *"
          },
          {
            "sp_it": "",
            "text_it": "le Dominazioni ti adorano,"
          },
          {
            "sp_it": "",
            "text_it": "le Potenze ti venerano con tremore; *"
          },
          {
            "sp_it": "",
            "text_it": "a te inneggiano i cieli dei cieli e i Serafini, +"
          },
          {
            "sp_it": "",
            "text_it": "uniti in eterna esultanza. **"
          },
          {
            "sp_it": "",
            "text_it": "Al loro canto concedi, o Signore, *"
          },
          {
            "sp_it": "",
            "text_it": "che si uniscano le nostre umili voci +"
          },
          {
            "sp_it": "",
            "text_it": "nell’inno di lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "385Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio degli apostoli I"
          },
          {
            "sp_it": "",
            "text_it": "Gli apostoli, pastori del popolo di Dio"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe degli apostoli, specialmente nelle Messe votive"
          },
          {
            "sp_it": "",
            "text_it": "dei santi Pietro e Paolo."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo,"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Pastore eterno,"
          },
          {
            "sp_it": "",
            "text_it": "tu non abbandoni il tuo gregge, *"
          },
          {
            "sp_it": "",
            "text_it": "ma lo custodisci e proteggi sempre"
          },
          {
            "sp_it": "",
            "text_it": "per mezzo dei santi apostoli, *"
          },
          {
            "sp_it": "",
            "text_it": "e lo conduci attraverso i tempi"
          },
          {
            "sp_it": "",
            "text_it": "sotto la guida di coloro"
          },
          {
            "sp_it": "",
            "text_it": "che tu stesso hai eletto vicari del tuo Figlio *"
          },
          {
            "sp_it": "",
            "text_it": "e hai costituito pastori. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo dono della tua benevolenza, *"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli Angeli e agli Arcangeli,"
          },
          {
            "sp_it": "",
            "text_it": "ai Troni e alle Dominazioni"
          },
          {
            "sp_it": "",
            "text_it": "e alla moltitudine delle schiere celesti, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo con voce incessante +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio degli apostoli II"
          },
          {
            "sp_it": "",
            "text_it": "La Chiesa fondata sugli apostoli e sulla loro testimonianza"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe degli apostoli e degli evangelisti."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo,"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Tu hai stabilito la tua Chiesa sul fondamento degli apostoli, *"
          },
          {
            "sp_it": "",
            "text_it": "perché sulla terra sia segno visibile"
          },
          {
            "sp_it": "",
            "text_it": "della tua santità nei secoli *"
          },
          {
            "sp_it": "",
            "text_it": "e trasmetta a tutti gli uomini +"
          },
          {
            "sp_it": "",
            "text_it": "gli insegnamenti che sono via al cielo. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo mistero di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "uniti a tutte le schiere degli angeli, *"
          },
          {
            "sp_it": "",
            "text_it": "ora e sempre, con cuore riconoscente, +"
          },
          {
            "sp_it": "",
            "text_it": "proclamiamo nel canto la tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "387Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio dei santi I"
          },
          {
            "sp_it": "",
            "text_it": "La gloria dei santi"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe dei santi, dei santi patroni e dei titolari della"
          },
          {
            "sp_it": "",
            "text_it": "chiesa, nelle solennità e nelle feste dei santi, se non è indicato un prefazio proprio. Si può"
          },
          {
            "sp_it": "",
            "text_it": "dire anche nelle memorie dei santi."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Nella festosa assemblea dei santi"
          },
          {
            "sp_it": "",
            "text_it": "risplende la tua gloria, *"
          },
          {
            "sp_it": "",
            "text_it": "e il loro trionfo + celebra i doni della tua misericordia. **"
          },
          {
            "sp_it": "",
            "text_it": "Nella vita di san N. [dei santi N. e N.]"
          },
          {
            "sp_it": "",
            "text_it": "ci offri un esempio, *"
          },
          {
            "sp_it": "",
            "text_it": "nella comunione con lui [con loro]"
          },
          {
            "sp_it": "",
            "text_it": "un vincolo di amore fraterno, *"
          },
          {
            "sp_it": "",
            "text_it": "nella sua [loro] intercessione + aiuto e sostegno. **"
          },
          {
            "sp_it": "",
            "text_it": "Confortati da così grande testimonianza, *"
          },
          {
            "sp_it": "",
            "text_it": "affrontiamo il buon combattimento della fede, *"
          },
          {
            "sp_it": "",
            "text_it": "per condividere al di là della morte"
          },
          {
            "sp_it": "",
            "text_it": "la stessa corona di gloria, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "E noi, uniti agli angeli e agli arcangeli"
          },
          {
            "sp_it": "",
            "text_it": "e a tutti i santi del cielo, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo senza fine +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio dei santi II"
          },
          {
            "sp_it": "",
            "text_it": "L’esempio e l’intercessione dei santi"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe dei santi, dei santi patroni e dei titolari della"
          },
          {
            "sp_it": "",
            "text_it": "chiesa, nelle solennità e nelle feste dei santi, se non è indicato un prefazio proprio. Si può"
          },
          {
            "sp_it": "",
            "text_it": "dire anche nelle memorie dei santi."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo,"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Nella mirabile testimonianza dei tuoi santi *"
          },
          {
            "sp_it": "",
            "text_it": "tu rendi sempre feconda la tua Chiesa *"
          },
          {
            "sp_it": "",
            "text_it": "e doni a noi"
          },
          {
            "sp_it": "",
            "text_it": "un segno sicuro del tuo amore. **"
          },
          {
            "sp_it": "",
            "text_it": "Il loro grande esempio"
          },
          {
            "sp_it": "",
            "text_it": "e la loro fraterna intercessione *"
          },
          {
            "sp_it": "",
            "text_it": "ci sostengono nel cammino della vita, *"
          },
          {
            "sp_it": "",
            "text_it": "perché si compia in noi il tuo mistero di salvezza. **"
          },
          {
            "sp_it": "",
            "text_it": "E noi,"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli angeli e a tutti i santi, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo con gioia +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "389Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio dei santi martiri I"
          },
          {
            "sp_it": "",
            "text_it": "Il segno e l’esempio del martirio"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle solennità e nelle feste dei santi martiri. Si può dire anche"
          },
          {
            "sp_it": "",
            "text_it": "nelle loro memorie."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Il sangue versato dal santo martire N.,"
          },
          {
            "sp_it": "",
            "text_it": "a imitazione di Cristo e per la gloria del tuo nome, *"
          },
          {
            "sp_it": "",
            "text_it": "manifesta i tuoi prodigi, o Padre,"
          },
          {
            "sp_it": "",
            "text_it": "che riveli nei deboli la tua potenza"
          },
          {
            "sp_it": "",
            "text_it": "e doni agli inermi la forza del martirio, *"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "E noi,"
          },
          {
            "sp_it": "",
            "text_it": "con tutti gli angeli del cielo, *"
          },
          {
            "sp_it": "",
            "text_it": "a te innalziamo sulla terra il nostro canto *"
          },
          {
            "sp_it": "",
            "text_it": "e proclamiamo senza fine +"
          },
          {
            "sp_it": "",
            "text_it": "la tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio dei santi martiri II"
          },
          {
            "sp_it": "",
            "text_it": "Le meraviglie di Dio nella vittoria dei martiri"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle solennità e nelle feste dei santi martiri. Si può dire anche"
          },
          {
            "sp_it": "",
            "text_it": "nelle loro memorie."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo,"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "e magnificarti nella lode dei tuoi santi. **"
          },
          {
            "sp_it": "",
            "text_it": "La loro passione fa risplendere"
          },
          {
            "sp_it": "",
            "text_it": "le opere mirabili della tua potenza: *"
          },
          {
            "sp_it": "",
            "text_it": "sei tu che infondi l’ardore della fede,"
          },
          {
            "sp_it": "",
            "text_it": "concedi la fermezza della perseveranza"
          },
          {
            "rubric_it": "*"
          },
          {
            "sp_it": "",
            "text_it": "e doni nel combattimento la vittoria, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo dono della tua benevolenza *"
          },
          {
            "sp_it": "",
            "text_it": "i cieli e la terra innalzano a te"
          },
          {
            "sp_it": "",
            "text_it": "un cantico nuovo di adorazione."
          },
          {
            "rubric_it": "*"
          },
          {
            "sp_it": "",
            "text_it": "E noi, con tutti gli angeli del cielo, +"
          },
          {
            "sp_it": "",
            "text_it": "proclamiamo senza fine la tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "391Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio dei santi pastori I"
          },
          {
            "sp_it": "",
            "text_it": "La presenza dei santi pastori nella Chiesa"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle solennità e nelle feste dei santi pastori. Si può dire anche"
          },
          {
            "sp_it": "",
            "text_it": "nelle loro memorie."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo,"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Tu doni alla tua Chiesa"
          },
          {
            "sp_it": "",
            "text_it": "la gioia di celebrare la festa [memoria] di san N.: *"
          },
          {
            "sp_it": "",
            "text_it": "con i suoi esempi la rafforzi, *"
          },
          {
            "sp_it": "",
            "text_it": "con i suoi insegnamenti l’ammaestri, +"
          },
          {
            "sp_it": "",
            "text_it": "con la sua intercessione la proteggi. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo dono della tua benevolenza, *"
          },
          {
            "sp_it": "",
            "text_it": "con la moltitudine degli angeli e dei santi, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo senza fine +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "rubric_it": "★ Prefazio dei santi pastori II"
          },
          {
            "sp_it": "",
            "text_it": "I pastori della Chiesa, immagine di Cristo, buon pastore"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle solennità e nelle feste dei santi pastori. Si può dire anche"
          },
          {
            "sp_it": "",
            "text_it": "nelle loro memorie."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "lodarti e ringraziarti sempre, *"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "È lui il pastore buono"
          },
          {
            "sp_it": "",
            "text_it": "che ha dato la vita per le sue pecore *"
          },
          {
            "sp_it": "",
            "text_it": "e continua a pascere il suo gregge +"
          },
          {
            "sp_it": "",
            "text_it": "donando alla Chiesa pastori secondo il suo cuore. **"
          },
          {
            "sp_it": "",
            "text_it": "Nella vita di san N."
          },
          {
            "sp_it": "",
            "text_it": "riconosciamo i segni del tuo amore per noi: *"
          },
          {
            "sp_it": "",
            "text_it": "nella sua voce, la tua parola, +"
          },
          {
            "sp_it": "",
            "text_it": "nei suoi gesti, la tua potenza. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo dono del tuo amore, *"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli angeli e ai santi, *"
          },
          {
            "sp_it": "",
            "text_it": "con voce unanime +"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo l’inno della tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "393Preghiera Eucaristica"
          },
          {
            "rubric_it": "★ Prefazio dei santi pastori III"
          },
          {
            "sp_it": "",
            "text_it": "L’annuncio del Vangelo alle genti"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle solennità e nelle feste dei santi pastori, in particolare dei"
          },
          {
            "sp_it": "",
            "text_it": "vescovi o dei presbiteri missionari. Si può dire anche nelle loro memorie."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta"
          },
          {
            "sp_it": "",
            "text_it": "renderti grazie *"
          },
          {
            "sp_it": "",
            "text_it": "e innalzare a te l’inno di benedizione e di lode, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Sospinto dal soffo dello Spirito, *"
          },
          {
            "sp_it": "",
            "text_it": "il santo pastore N."
          },
          {
            "sp_it": "",
            "text_it": "ha portato alle genti l’annuncio del Vangelo *"
          },
          {
            "sp_it": "",
            "text_it": "e i Sacramenti della salvezza. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo segno della tua bontà,"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli angeli e ai santi, *"
          },
          {
            "sp_it": "",
            "text_it": "con voce unanime +"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "rubric_it": "★ Prefazio dei santi dottori della Chiesa I"
          },
          {
            "sp_it": "",
            "text_it": "I dottori della Chiesa riflesso della Sapienza"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle solennità e nelle feste dei santi dottori della Chiesa."
          },
          {
            "rubric_it": "Si può dire anche nelle loro memorie."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Cristo Signore nostro volle la sua Chiesa"
          },
          {
            "sp_it": "",
            "text_it": "sale della terra, luce del mondo, città posta sul monte, *"
          },
          {
            "sp_it": "",
            "text_it": "perché tutti possano arrivare alla conoscenza della verità *"
          },
          {
            "sp_it": "",
            "text_it": "ed essere salvati. **"
          },
          {
            "sp_it": "",
            "text_it": "Per realizzare questa missione tra le genti *"
          },
          {
            "sp_it": "",
            "text_it": "hai suscitato nel tuo popolo san N. [santa N.]"
          },
          {
            "sp_it": "",
            "text_it": "e gli [le] hai donato una profonda conoscenza dei divini misteri, *"
          },
          {
            "sp_it": "",
            "text_it": "perché con la sapienza, da te ispirata, +"
          },
          {
            "sp_it": "",
            "text_it": "fosse lampada di vivo fulgore"
          },
          {
            "sp_it": "",
            "text_it": "a gloria del tuo nome. **"
          },
          {
            "sp_it": "",
            "text_it": "Illuminati dalla sua dottrina e dalla sua testimonianza, *"
          },
          {
            "sp_it": "",
            "text_it": "con animo grato e gioioso"
          },
          {
            "sp_it": "",
            "text_it": "ci uniamo ai cori celesti, *"
          },
          {
            "sp_it": "",
            "text_it": "per cantare senza fine +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "395Preghiera Eucaristica"
          },
          {
            "rubric_it": "★ Prefazio dei santi dottori della Chiesa II"
          },
          {
            "sp_it": "",
            "text_it": "I dottori della Chiesa profeti della sublime bellezza di Dio"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle solennità e nelle feste dei santi dottori della Chiesa."
          },
          {
            "rubric_it": "Si può dire anche nelle loro memorie."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "lodarti e ringraziarti sempre, *"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Il tuo Figlio è l’unico maestro: *"
          },
          {
            "sp_it": "",
            "text_it": "la sua parola, lampada ai nostri passi, *"
          },
          {
            "sp_it": "",
            "text_it": "la sua croce, + la sola nostra sapienza. **"
          },
          {
            "rubric_it": "Nel tuo disegno di amore"
          },
          {
            "sp_it": "",
            "text_it": "hai illuminato san N. [santa N.] *"
          },
          {
            "sp_it": "",
            "text_it": "e con i suoi insegnamenti"
          },
          {
            "sp_it": "",
            "text_it": "allieti la Chiesa +"
          },
          {
            "sp_it": "",
            "text_it": "nella sublime bellezza della tua conoscenza. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo segno della tua bontà,"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli angeli e ai santi, *"
          },
          {
            "sp_it": "",
            "text_it": "con voce unanime +"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio delle sante vergini"
          },
          {
            "sp_it": "",
            "text_it": "e dei santi religiosi"
          },
          {
            "sp_it": "",
            "text_it": "Il segno della vita consacrata a Dio"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle solennità e nelle feste delle sante vergini e dei santi"
          },
          {
            "sp_it": "",
            "text_it": "religiosi. Si può dire anche nelle loro memorie."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Nei tuoi santi, che per il regno dei cieli"
          },
          {
            "sp_it": "",
            "text_it": "hanno consacrato la vita a Cristo, *"
          },
          {
            "sp_it": "",
            "text_it": "noi celebriamo"
          },
          {
            "sp_it": "",
            "text_it": "la mirabile opera della tua provvidenza, *"
          },
          {
            "sp_it": "",
            "text_it": "che richiama l’uomo"
          },
          {
            "sp_it": "",
            "text_it": "alla santità dell’origine +"
          },
          {
            "sp_it": "",
            "text_it": "e gli fa pregustare i doni"
          },
          {
            "sp_it": "",
            "text_it": "per lui preparati nel mondo nuovo. **"
          },
          {
            "sp_it": "",
            "text_it": "E noi,"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli angeli e ai santi, *"
          },
          {
            "sp_it": "",
            "text_it": "con voce unanime +"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo senza fine l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "397Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio comune I"
          },
          {
            "sp_it": "",
            "text_it": "Il rinnovamento universale in Cristo"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe che non hanno un prefazio proprio e quando"
          },
          {
            "sp_it": "",
            "text_it": "non è richiesto il prefazio del Tempo."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo,"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "In lui hai voluto rinnovare l’universo,"
          },
          {
            "sp_it": "",
            "text_it": "perché noi tutti fossimo partecipi della sua pienezza. *"
          },
          {
            "sp_it": "",
            "text_it": "Pur essendo nella condizione di Dio,"
          },
          {
            "sp_it": "",
            "text_it": "egli svuotò se stesso, *"
          },
          {
            "sp_it": "",
            "text_it": "e con il sangue versato sulla croce +"
          },
          {
            "sp_it": "",
            "text_it": "pacificò il cielo e la terra. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo fu esaltato sopra ogni creatura *"
          },
          {
            "sp_it": "",
            "text_it": "e divenne causa di salvezza eterna +"
          },
          {
            "sp_it": "",
            "text_it": "per tutti coloro che gli obbediscono. **"
          },
          {
            "sp_it": "",
            "text_it": "E noi,"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli Angeli e agli Arcangeli, *"
          },
          {
            "sp_it": "",
            "text_it": "ai Troni e alle Dominazioni"
          },
          {
            "sp_it": "",
            "text_it": "e alla moltitudine delle schiere celesti, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo con voce incessante +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio comune II"
          },
          {
            "sp_it": "",
            "text_it": "La salvezza per mezzo di Cristo"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe che non hanno un prefazio proprio e quando"
          },
          {
            "sp_it": "",
            "text_it": "non è richiesto il prefazio del Tempo."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Nella tua bontà hai creato l’uomo *"
          },
          {
            "sp_it": "",
            "text_it": "e, quando meritò la giusta condanna, *"
          },
          {
            "sp_it": "",
            "text_it": "lo hai redento nella tua misericordia, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Per mezzo di lui gli Angeli lodano la tua gloria, *"
          },
          {
            "sp_it": "",
            "text_it": "le Dominazioni ti adorano,"
          },
          {
            "sp_it": "",
            "text_it": "le Potenze ti venerano con tremore; *"
          },
          {
            "sp_it": "",
            "text_it": "a te inneggiano i cieli dei cieli e i Serafini, +"
          },
          {
            "sp_it": "",
            "text_it": "uniti in eterna esultanza. **"
          },
          {
            "sp_it": "",
            "text_it": "Al loro canto concedi, o Signore, *"
          },
          {
            "sp_it": "",
            "text_it": "che si uniscano le nostre umili voci +"
          },
          {
            "sp_it": "",
            "text_it": "nell’inno di lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "399Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio comune III"
          },
          {
            "sp_it": "",
            "text_it": "Lode a Dio per la creazione e la redenzione dell’uomo"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe che non hanno un prefazio proprio e quando"
          },
          {
            "sp_it": "",
            "text_it": "non è richiesto il prefazio del Tempo."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Per mezzo di Cristo, tuo amatissimo Figlio, *"
          },
          {
            "sp_it": "",
            "text_it": "hai creato l’uomo a tua immagine *"
          },
          {
            "sp_it": "",
            "text_it": "e lo hai rigenerato a vita nuova. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo mistero di salvezza"
          },
          {
            "sp_it": "",
            "text_it": "ti servono tutte le creature, *"
          },
          {
            "sp_it": "",
            "text_it": "ti lodano tutti i redenti"
          },
          {
            "sp_it": "",
            "text_it": "e ti benedicono unanimi gli angeli e i santi. *"
          },
          {
            "sp_it": "",
            "text_it": "E noi, uniti con gioia a questo immenso coro, +"
          },
          {
            "sp_it": "",
            "text_it": "ti celebriamo, cantando senza fine la tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio comune IV"
          },
          {
            "sp_it": "",
            "text_it": "La lode, dono di Dio"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe che non hanno un prefazio proprio e quando"
          },
          {
            "sp_it": "",
            "text_it": "non è richiesto il prefazio del Tempo."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Tu non hai bisogno della nostra lode,"
          },
          {
            "sp_it": "",
            "text_it": "ma per un dono del tuo amore"
          },
          {
            "sp_it": "",
            "text_it": "ci chiami a renderti grazie; *"
          },
          {
            "sp_it": "",
            "text_it": "i nostri inni di benedizione"
          },
          {
            "sp_it": "",
            "text_it": "non accrescono la tua grandezza, *"
          },
          {
            "sp_it": "",
            "text_it": "ma ci ottengono la grazia che ci salva, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "E noi,"
          },
          {
            "sp_it": "",
            "text_it": "con tutti gli angeli del cielo, *"
          },
          {
            "sp_it": "",
            "text_it": "innalziamo a te il nostro canto *"
          },
          {
            "sp_it": "",
            "text_it": "e proclamiamo con gioia +"
          },
          {
            "sp_it": "",
            "text_it": "la tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "401Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio comune V"
          },
          {
            "sp_it": "",
            "text_it": "Proclamazione del mistero di Cristo"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe che non hanno un prefazio proprio e quando"
          },
          {
            "sp_it": "",
            "text_it": "non è richiesto il prefazio del Tempo."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo,"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Uniti nell’amore, celebriamo la morte del tuo Figlio, *"
          },
          {
            "sp_it": "",
            "text_it": "con fede viva proclamiamo la sua risurrezione, *"
          },
          {
            "sp_it": "",
            "text_it": "attendiamo con ferma speranza +"
          },
          {
            "sp_it": "",
            "text_it": "la sua venuta nella gloria. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo mistero di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "insieme agli angeli e ai santi, *"
          },
          {
            "sp_it": "",
            "text_it": "con voce unanime +"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo l’inno della tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio comune VI"
          },
          {
            "sp_it": "",
            "text_it": "Cristo salvatore e redentore"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe che non hanno un prefazio proprio e quando"
          },
          {
            "sp_it": "",
            "text_it": "non è richiesto il prefazio del Tempo."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "per Gesù Cristo, tuo amatissimo Figlio. **"
          },
          {
            "sp_it": "",
            "text_it": "Egli è la tua parola vivente: *"
          },
          {
            "sp_it": "",
            "text_it": "per mezzo di lui hai creato tutte le cose,"
          },
          {
            "sp_it": "",
            "text_it": "lo hai mandato a noi salvatore e redentore, *"
          },
          {
            "sp_it": "",
            "text_it": "fatto uomo per opera dello Spirito Santo +"
          },
          {
            "sp_it": "",
            "text_it": "e nato dalla V ergine Maria. **"
          },
          {
            "sp_it": "",
            "text_it": "Per compiere la tua volontà"
          },
          {
            "sp_it": "",
            "text_it": "e acquistarti un popolo santo, *"
          },
          {
            "sp_it": "",
            "text_it": "egli, nell’ora della passione,"
          },
          {
            "sp_it": "",
            "text_it": "stese le braccia sulla croce, *"
          },
          {
            "sp_it": "",
            "text_it": "morendo distrusse la morte +"
          },
          {
            "sp_it": "",
            "text_it": "e proclamò la risurrezione. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo mistero di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli angeli e ai santi, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo a una sola voce +"
          },
          {
            "sp_it": "",
            "text_it": "la tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "403Preghiera Eucaristica"
          },
          {
            "rubric_it": "★ Prefazio comune VII"
          },
          {
            "sp_it": "",
            "text_it": "Cristo ospite e pellegrino in mezzo a noi"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe che non hanno un prefazio proprio e quando"
          },
          {
            "sp_it": "",
            "text_it": "non è richiesto il prefazio del Tempo."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente giusto renderti grazie, *"
          },
          {
            "sp_it": "",
            "text_it": "Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio dell’alleanza e della pace. **"
          },
          {
            "sp_it": "",
            "text_it": "Tu hai chiamato e fatto uscire Abramo dalla sua terra"
          },
          {
            "sp_it": "",
            "text_it": "per costituirlo padre di tutte le genti. *"
          },
          {
            "sp_it": "",
            "text_it": "Hai suscitato Mosè per liberare il tuo popolo +"
          },
          {
            "sp_it": "",
            "text_it": "e guidarlo alla terra promessa. **"
          },
          {
            "sp_it": "",
            "text_it": "Nella pienezza dei tempi"
          },
          {
            "sp_it": "",
            "text_it": "hai mandato il tuo Figlio,"
          },
          {
            "sp_it": "",
            "text_it": "ospite e pellegrino in mezzo a noi,"
          },
          {
            "sp_it": "",
            "text_it": "per redimerci dal peccato e dalla morte *"
          },
          {
            "sp_it": "",
            "text_it": "e hai donato il tuo Spirito"
          },
          {
            "sp_it": "",
            "text_it": "per fare di tutte le nazioni un solo popolo nuovo, *"
          },
          {
            "sp_it": "",
            "text_it": "che ha come fine il tuo regno,"
          },
          {
            "sp_it": "",
            "text_it": "come condizione la libertà dei tuoi figli, +"
          },
          {
            "sp_it": "",
            "text_it": "come statuto il precetto dell’amore. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questi doni della tua benevolenza, *"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli angeli e ai santi, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo con gioia +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "rubric_it": "★ Prefazio comune VIII"
          },
          {
            "sp_it": "",
            "text_it": "Gesù buon samaritano"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe che non hanno un prefazio proprio e quando"
          },
          {
            "sp_it": "",
            "text_it": "non è richiesto il prefazio del Tempo."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente giusto lodarti e ringraziarti,"
          },
          {
            "sp_it": "",
            "text_it": "Padre santo, Dio onnipotente ed eterno, *"
          },
          {
            "sp_it": "",
            "text_it": "in ogni momento della nostra vita,"
          },
          {
            "sp_it": "",
            "text_it": "nella salute e nella malattia,"
          },
          {
            "sp_it": "",
            "text_it": "nella sofferenza e nella gioia, *"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo tuo servo e nostro redentore. **"
          },
          {
            "sp_it": "",
            "text_it": "Nella sua vita mortale *"
          },
          {
            "sp_it": "",
            "text_it": "egli passò beneficando e sanando +"
          },
          {
            "sp_it": "",
            "text_it": "tutti coloro che erano prigionieri del male. **"
          },
          {
            "sp_it": "",
            "text_it": "Ancora oggi, come buon samaritano, *"
          },
          {
            "sp_it": "",
            "text_it": "si fa prossimo a ogni uomo,"
          },
          {
            "sp_it": "",
            "text_it": "piagato nel corpo e nello spirito, *"
          },
          {
            "sp_it": "",
            "text_it": "e versa sulle sue ferite +"
          },
          {
            "sp_it": "",
            "text_it": "l’olio della consolazione"
          },
          {
            "sp_it": "",
            "text_it": "e il vino della speranza. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo dono della tua grazia, *"
          },
          {
            "sp_it": "",
            "text_it": "anche la notte del dolore"
          },
          {
            "sp_it": "",
            "text_it": "si apre alla luce pasquale"
          },
          {
            "rubric_it": "*"
          },
          {
            "sp_it": "",
            "text_it": "del tuo Figlio crocifisso e risorto. **"
          },
          {
            "sp_it": "",
            "text_it": "E noi, insieme agli angeli e ai santi, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo con voce unanime +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "405Preghiera Eucaristica"
          },
          {
            "rubric_it": "★ Prefazio comune IX"
          },
          {
            "sp_it": "",
            "text_it": "La gloria di Dio è l’uomo vivente"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe che non hanno un prefazio proprio e quando"
          },
          {
            "sp_it": "",
            "text_it": "non è richiesto il prefazio del Tempo."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "lodarti e renderti grazie sempre e in ogni luogo, *"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Tu sei l’unico Dio vivo e vero: *"
          },
          {
            "sp_it": "",
            "text_it": "l’universo è pieno della tua presenza, *"
          },
          {
            "sp_it": "",
            "text_it": "ma soprattutto nell’uomo, creato a tua immagine, +"
          },
          {
            "sp_it": "",
            "text_it": "hai impresso il sigillo della tua gloria. **"
          },
          {
            "sp_it": "",
            "text_it": "Tu lo chiami a cooperare con il lavoro quotidiano"
          },
          {
            "sp_it": "",
            "text_it": "al progetto della creazione *"
          },
          {
            "sp_it": "",
            "text_it": "e gli doni il tuo Spirito, *"
          },
          {
            "sp_it": "",
            "text_it": "perché in Cristo, uomo nuovo, +"
          },
          {
            "sp_it": "",
            "text_it": "diventi artefice di giustizia e di pace. **"
          },
          {
            "sp_it": "",
            "text_it": "E noi,"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli angeli e ai santi, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo con gioia +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio dei defunti I"
          },
          {
            "sp_it": "",
            "text_it": "La speranza della risurrezione in Cristo"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe dei defunti."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo,"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "In lui rifulge a noi"
          },
          {
            "sp_it": "",
            "text_it": "la speranza della beata risurrezione *"
          },
          {
            "sp_it": "",
            "text_it": "e, se ci rattrista la certezza di dover morire, +"
          },
          {
            "sp_it": "",
            "text_it": "ci consola la promessa dell’immortalità futura. **"
          },
          {
            "sp_it": "",
            "text_it": "Ai tuoi fedeli, o Signore,"
          },
          {
            "sp_it": "",
            "text_it": "la vita non è tolta, ma trasformata;"
          },
          {
            "rubric_it": "*"
          },
          {
            "sp_it": "",
            "text_it": "e mentre si distrugge la dimora"
          },
          {
            "sp_it": "",
            "text_it": "di questo esilio terreno, +"
          },
          {
            "sp_it": "",
            "text_it": "viene preparata un’abitazione eterna nel cielo. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo mistero di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "uniti agli Angeli e agli Arcangeli,"
          },
          {
            "sp_it": "",
            "text_it": "ai Troni e alle Dominazioni"
          },
          {
            "sp_it": "",
            "text_it": "e alla moltitudine delle schiere celesti, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo con voce incessante +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "407Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio dei defunti II"
          },
          {
            "sp_it": "",
            "text_it": "Cristo è morto per la nostra vita"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe dei defunti."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo,"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Egli, prendendo su di sé la nostra morte,"
          },
          {
            "sp_it": "",
            "text_it": "ci ha liberati dalla morte *"
          },
          {
            "sp_it": "",
            "text_it": "e, sacrificando la sua vita, +"
          },
          {
            "sp_it": "",
            "text_it": "ci ha aperto il passaggio alla vita immortale. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo mistero di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "uniti ai cori degli angeli, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo senza fine +"
          },
          {
            "sp_it": "",
            "text_it": "la tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio dei defunti III"
          },
          {
            "sp_it": "",
            "text_it": "Cristo, salvezza e vita"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe dei defunti."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo,"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno, +"
          },
          {
            "sp_it": "",
            "text_it": "per Cristo Signore nostro. **"
          },
          {
            "sp_it": "",
            "text_it": "Egli è la salvezza del mondo, *"
          },
          {
            "sp_it": "",
            "text_it": "la vita degli uomini, +"
          },
          {
            "sp_it": "",
            "text_it": "la risurrezione dei morti. **"
          },
          {
            "sp_it": "",
            "text_it": "Per mezzo di lui si allietano gli angeli, *"
          },
          {
            "sp_it": "",
            "text_it": "e nell’eternità adorano la gloria del tuo volto. *"
          },
          {
            "sp_it": "",
            "text_it": "Al loro canto concedi, o Signore, +"
          },
          {
            "sp_it": "",
            "text_it": "che si uniscano le nostre umili voci"
          },
          {
            "sp_it": "",
            "text_it": "nell’inno di lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "409Preghiera Eucaristica"
          },
          {
            "sp_it": "",
            "text_it": "Prefazio dei defunti IV"
          },
          {
            "sp_it": "",
            "text_it": "Dalla vita terrena alla gloria eterna"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe dei defunti."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "Sei tu, Signore, che ci dai la vita"
          },
          {
            "sp_it": "",
            "text_it": "e ci sostieni con la tua provvidenza; *"
          },
          {
            "sp_it": "",
            "text_it": "e se a causa del peccato"
          },
          {
            "sp_it": "",
            "text_it": "il nostro corpo ritorna alla terra,"
          },
          {
            "sp_it": "",
            "text_it": "dalla quale lo hai formato, *"
          },
          {
            "sp_it": "",
            "text_it": "per la morte redentrice del tuo Figlio +"
          },
          {
            "sp_it": "",
            "text_it": "la tua potenza ci risveglia alla gloria della risurrezione. **"
          },
          {
            "sp_it": "",
            "text_it": "Per questo mistero di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "con la moltitudine degli angeli e dei santi, *"
          },
          {
            "sp_it": "",
            "text_it": "cantiamo senza fine +"
          },
          {
            "sp_it": "",
            "text_it": "l’inno della tua lode: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Prefazio dei defunti V"
          },
          {
            "sp_it": "",
            "text_it": "La nostra risurrezione grazie alla vittoria di Cristo"
          },
          {
            "sp_it": "",
            "text_it": "Il seguente prefazio si dice nelle Messe dei defunti."
          },
          {
            "sp_it": "",
            "text_it": "V/ . Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "R/ . E con il tuo spirito."
          },
          {
            "sp_it": "",
            "text_it": "V/ . I n alto i nostri cuori."
          },
          {
            "sp_it": "",
            "text_it": "R/ . S ono rivolti al Signore."
          },
          {
            "sp_it": "",
            "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
          },
          {
            "sp_it": "",
            "text_it": "R/ . È c osa buona e giusta."
          },
          {
            "sp_it": "",
            "text_it": "È veramente cosa buona e giusta,"
          },
          {
            "sp_it": "",
            "text_it": "nostro dovere e fonte di salvezza, *"
          },
          {
            "sp_it": "",
            "text_it": "rendere grazie sempre e in ogni luogo *"
          },
          {
            "sp_it": "",
            "text_it": "a te, Signore, Padre santo, +"
          },
          {
            "sp_it": "",
            "text_it": "Dio onnipotente ed eterno. **"
          },
          {
            "sp_it": "",
            "text_it": "La morte è comune eredità di tutti gli uomini, *"
          },
          {
            "sp_it": "",
            "text_it": "ma, per un dono misterioso del tuo amore, *"
          },
          {
            "sp_it": "",
            "text_it": "Cristo con la sua vittoria ci redime dalla morte +"
          },
          {
            "sp_it": "",
            "text_it": "e ci richiama con sé a vita nuova. **"
          },
          {
            "sp_it": "",
            "text_it": "E noi,"
          },
          {
            "sp_it": "",
            "text_it": "con tutti gli angeli del cielo, *"
          },
          {
            "sp_it": "",
            "text_it": "a te innalziamo sulla terra il nostro canto *"
          },
          {
            "sp_it": "",
            "text_it": "e proclamiamo senza fine +"
          },
          {
            "sp_it": "",
            "text_it": "la tua gloria: **"
          },
          {
            "sp_it": "",
            "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
          },
          {
            "sp_it": "",
            "text_it": "I cieli e la terra sono pieni della tua gloria."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          },
          {
            "sp_it": "",
            "text_it": "Benedetto colui che viene nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Osanna nell’alto dei cieli."
          }
        ]
      }
    },
    "sanctus": [
      {
        "sp_it": "Tutti",
        "text_it": "Santo, Santo, Santo il Signore Dio dell'universo."
      },
      {
        "sp_it": "",
        "text_it": "I cieli e la terra sono pieni della tua gloria."
      },
      {
        "sp_it": "",
        "text_it": "Osanna nell'alto dei cieli."
      },
      {
        "sp_it": "",
        "text_it": "Benedetto colui che viene nel nome del Signore."
      },
      {
        "sp_it": "",
        "text_it": "Osanna nell'alto dei cieli."
      }
    ],
    "forms": {
      "1": [
        {
          "sp_it": "",
          "text_it": "V/ . Il Signore sia con voi."
        },
        {
          "sp_it": "",
          "text_it": "R/ . E con il tuo spirito."
        },
        {
          "sp_it": "",
          "text_it": "V/ . I n alto i nostri cuori."
        },
        {
          "sp_it": "",
          "text_it": "R/ . S ono rivolti al Signore."
        },
        {
          "sp_it": "",
          "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
        },
        {
          "sp_it": "",
          "text_it": "R/ . È c osa buona e giusta."
        },
        {
          "rubric_it": "Segue il prefazio, scelto secondo le rubriche, che si conclude con l’acclamazione:"
        },
        {
          "sp_it": "",
          "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
        },
        {
          "sp_it": "",
          "text_it": "I cieli e la terra sono pieni della tua gloria."
        },
        {
          "sp_it": "",
          "text_it": "Osanna nell’alto dei cieli."
        },
        {
          "sp_it": "",
          "text_it": "Benedetto colui che viene nel nome del Signore."
        },
        {
          "sp_it": "",
          "text_it": "Osanna nell’alto dei cieli."
        },
        {
          "rubric_it": "Il sacerdote, con le braccia allargate, dice:"
        },
        {
          "sp_it": "C",
          "text_it": "Padre clementissimo,"
        },
        {
          "sp_it": "",
          "text_it": "noi ti supplichiamo e ti chiediamo"
        },
        {
          "sp_it": "",
          "text_it": "per Gesù Cristo, tuo Figlio e nostro Signore,"
        },
        {
          "sp_it": "",
          "text_it": "congiunge le mani e dice:"
        },
        {
          "sp_it": "",
          "text_it": "di accettare"
        },
        {
          "sp_it": "",
          "text_it": "traccia un unico segno di croce sul pane e sul calice, dicendo:"
        },
        {
          "sp_it": "",
          "text_it": "e benedire ^ questi doni,"
        },
        {
          "sp_it": "",
          "text_it": "queste offerte, questo sacrificio puro e santo."
        },
        {
          "sp_it": "",
          "text_it": "Allargando le braccia, continua:"
        },
        {
          "sp_it": "",
          "text_it": "Noi te l’offriamo anzitutto"
        },
        {
          "sp_it": "",
          "text_it": "per la tua Chiesa santa e cattolica,"
        },
        {
          "sp_it": "",
          "text_it": "perché tu le dia pace,"
        },
        {
          "sp_it": "",
          "text_it": "la protegga, la raduni"
        },
        {
          "sp_it": "",
          "text_it": "e la governi su tutta la terra"
        },
        {
          "sp_it": "",
          "text_it": "in unione con il tuo servo il nostro papa N.,"
        },
        {
          "sp_it": "",
          "text_it": "il nostro vescovo N.* [con me indegno tuo servo]"
        },
        {
          "sp_it": "",
          "text_it": "e con tutti quelli che custodiscono"
        },
        {
          "sp_it": "",
          "text_it": "la fede cattolica,"
        },
        {
          "sp_it": "",
          "text_it": "trasmessa dagli apostoli."
        },
        {
          "sp_it": "",
          "text_it": "o Canone Romano"
        },
        {
          "rubric_it": "* Qui è permesso nominare anche il vescovo coadiutore o gli ausiliari,"
        },
        {
          "sp_it": "",
          "text_it": "come indicato al n. 149 dell’Ordinamento Generale del Messale Romano ."
        },
        {
          "sp_it": "CP",
          "text_it": "413Preghiera Eucaristica I"
        },
        {
          "sp_it": "",
          "text_it": "Intercessione per i vivi"
        },
        {
          "sp_it": "",
          "text_it": "Ricordati, Signore, dei tuoi fedeli [ N. e N.]."
        },
        {
          "sp_it": "",
          "text_it": "Congiunge le mani e prega brevemente per quelli che vuole ricordare."
        },
        {
          "rubric_it": "Poi, con le braccia allargate, continua:"
        },
        {
          "sp_it": "",
          "text_it": "Ricordati di tutti coloro che sono qui riuniti,"
        },
        {
          "sp_it": "",
          "text_it": "dei quali conosci la fede e la devozione:"
        },
        {
          "sp_it": "",
          "text_it": "per loro ti offriamo"
        },
        {
          "sp_it": "",
          "text_it": "e anch’essi ti offrono questo sacrificio di lode,"
        },
        {
          "sp_it": "",
          "text_it": "e innalzano la preghiera a te, Dio eterno, vivo e vero,"
        },
        {
          "sp_it": "",
          "text_it": "per ottenere a sé e ai loro cari"
        },
        {
          "sp_it": "",
          "text_it": "redenzione, sicurezza di vita e salute."
        },
        {
          "sp_it": "",
          "text_it": "Memoria dei santi"
        },
        {
          "sp_it": "",
          "text_it": "In comunione con tutta la Chiesa,"
        },
        {
          "sp_it": "",
          "text_it": "ricordiamo e veneriamo anzitutto"
        },
        {
          "sp_it": "",
          "text_it": "la gloriosa e sempre Vergine Maria,"
        },
        {
          "sp_it": "",
          "text_it": "Madre del nostro Dio e Signore Gesù Cristo,"
        },
        {
          "sp_it": "",
          "text_it": "san Giuseppe, suo sposo,"
        },
        {
          "sp_it": "",
          "text_it": "i tuoi santi apostoli e martiri:"
        },
        {
          "sp_it": "",
          "text_it": "Pietro e Paolo, Andrea,"
        },
        {
          "sp_it": "",
          "text_it": "[Giacomo, Giovanni,"
        },
        {
          "sp_it": "",
          "text_it": "T ommaso, Giacomo, Filippo, Bartolomeo,"
        },
        {
          "sp_it": "",
          "text_it": "Matteo, Simone e Taddeo;"
        },
        {
          "sp_it": "",
          "text_it": "Lino, Cleto, Clemente, Sisto,"
        },
        {
          "sp_it": "",
          "text_it": "Cornelio e Cipriano, Lorenzo, Crisogono,"
        },
        {
          "sp_it": "",
          "text_it": "Giovanni e Paolo, Cosma e Damiano]"
        },
        {
          "sp_it": "",
          "text_it": "e tutti i tuoi santi:"
        },
        {
          "sp_it": "",
          "text_it": "per i loro meriti e le loro preghiere"
        },
        {
          "sp_it": "",
          "text_it": "donaci sempre aiuto e protezione."
        },
        {
          "sp_it": "",
          "text_it": "Communicántes propri pp. 414-415."
        },
        {
          "sp_it": "2C",
          "text_it": "414 Preghiera Eucaristica I"
        },
        {
          "rubric_it": "★ D omenica"
        },
        {
          "rubric_it": "Si può dire in tutte le domeniche tranne quando c’è un altro Communicántes proprio,"
        },
        {
          "sp_it": "",
          "text_it": "come indicato sotto."
        },
        {
          "sp_it": "",
          "text_it": "In comunione con tutta la Chiesa,"
        },
        {
          "sp_it": "",
          "text_it": "mentre celebriamo il giorno nel quale Cristo ha vinto la morte"
        },
        {
          "sp_it": "",
          "text_it": "e ci ha resi partecipi della sua vita immortale,"
        },
        {
          "sp_it": "",
          "text_it": "ricordiamo e veneriamo anzitutto"
        },
        {
          "sp_it": "",
          "text_it": "la gloriosa e sempre V ergine Maria,"
        },
        {
          "sp_it": "",
          "text_it": "Madre del nostro Dio e Signore Gesù Cristo,"
        },
        {
          "sp_it": "",
          "text_it": "†"
        },
        {
          "sp_it": "",
          "text_it": "Natale del Signore e Ottava"
        },
        {
          "sp_it": "",
          "text_it": "In comunione con tutta la Chiesa,"
        },
        {
          "sp_it": "",
          "text_it": "mentre celebriamo il giorno santissimo nel quale"
        },
        {
          "sp_it": "",
          "text_it": "[la notte santissima nella quale]"
        },
        {
          "sp_it": "",
          "text_it": "Maria, vergine illibata, diede al mondo il Salvatore,"
        },
        {
          "sp_it": "",
          "text_it": "ricordiamo e veneriamo anzitutto lei,"
        },
        {
          "sp_it": "",
          "text_it": "la gloriosa e sempre V ergine Maria,"
        },
        {
          "sp_it": "",
          "text_it": "Madre del nostro Dio e Signore Gesù Cristo,"
        },
        {
          "sp_it": "",
          "text_it": "†"
        },
        {
          "sp_it": "",
          "text_it": "Epifania del Signore"
        },
        {
          "sp_it": "",
          "text_it": "In comunione con tutta la Chiesa,"
        },
        {
          "sp_it": "",
          "text_it": "mentre celebriamo il giorno santissimo"
        },
        {
          "sp_it": "",
          "text_it": "nel quale il tuo unigenito Figlio, eterno con te nella gloria,"
        },
        {
          "sp_it": "",
          "text_it": "si è manifestato nella verità della nostra carne"
        },
        {
          "sp_it": "",
          "text_it": "in un corpo visibile, ricordiamo e veneriamo"
        },
        {
          "sp_it": "",
          "text_it": "anzitutto la gloriosa e sempre V ergine Maria,"
        },
        {
          "sp_it": "",
          "text_it": "Madre del nostro Dio e Signore Gesù Cristo,"
        },
        {
          "sp_it": "",
          "text_it": "†"
        },
        {
          "sp_it": "",
          "text_it": "Dalla Veglia Pasquale alla II domenica di Pasqua"
        },
        {
          "sp_it": "",
          "text_it": "In comunione con tutta la Chiesa,"
        },
        {
          "sp_it": "",
          "text_it": "mentre celebriamo il giorno santissimo"
        },
        {
          "sp_it": "",
          "text_it": "[la notte santissima]"
        },
        {
          "sp_it": "",
          "text_it": "della risurrezione di nostro Signore Gesù Cristo"
        },
        {
          "sp_it": "",
          "text_it": "nel suo vero corpo, ricordiamo e veneriamo"
        },
        {
          "sp_it": "",
          "text_it": "anzitutto la gloriosa e sempre V ergine Maria,"
        },
        {
          "sp_it": "",
          "text_it": "Madre del nostro Dio e Signore Gesù Cristo,"
        },
        {
          "sp_it": "",
          "text_it": "†"
        },
        {
          "sp_it": "",
          "text_it": "415Preghiera Eucaristica I"
        },
        {
          "sp_it": "",
          "text_it": "Ascensione del Signore"
        },
        {
          "sp_it": "",
          "text_it": "In comunione con tutta la Chiesa,"
        },
        {
          "sp_it": "",
          "text_it": "mentre celebriamo il giorno santissimo"
        },
        {
          "sp_it": "",
          "text_it": "nel quale il tuo unigenito Figlio, nostro Signore,"
        },
        {
          "sp_it": "",
          "text_it": "ha portato alla tua destra nella gloria la fragile nostra natura,"
        },
        {
          "sp_it": "",
          "text_it": "che egli aveva unito a sé,"
        },
        {
          "sp_it": "",
          "text_it": "ricordiamo e veneriamo"
        },
        {
          "sp_it": "",
          "text_it": "anzitutto la gloriosa e sempre V ergine Maria,"
        },
        {
          "sp_it": "",
          "text_it": "Madre del nostro Dio e Signore Gesù Cristo,"
        },
        {
          "sp_it": "",
          "text_it": "†"
        },
        {
          "sp_it": "",
          "text_it": "Domenica di Pentecoste"
        },
        {
          "sp_it": "",
          "text_it": "In comunione con tutta la Chiesa,"
        },
        {
          "sp_it": "",
          "text_it": "mentre celebriamo il giorno santissimo della Pentecoste,"
        },
        {
          "sp_it": "",
          "text_it": "nel quale lo Spirito Santo si manifestò agli apostoli"
        },
        {
          "sp_it": "",
          "text_it": "in molteplici lingue di fuoco,"
        },
        {
          "sp_it": "",
          "text_it": "ricordiamo e veneriamo"
        },
        {
          "sp_it": "",
          "text_it": "anzitutto la gloriosa e sempre V ergine Maria,"
        },
        {
          "sp_it": "",
          "text_it": "Madre del nostro Dio e Signore Gesù Cristo,"
        },
        {
          "sp_it": "",
          "text_it": "†"
        },
        {
          "sp_it": "",
          "text_it": "† san Giuseppe, suo sposo,"
        },
        {
          "sp_it": "",
          "text_it": "i tuoi santi apostoli e martiri:"
        },
        {
          "sp_it": "",
          "text_it": "Pietro e Paolo, Andrea,"
        },
        {
          "sp_it": "",
          "text_it": "[Giacomo, Giovanni,"
        },
        {
          "sp_it": "",
          "text_it": "T ommaso, Giacomo, Filippo, Bartolomeo,"
        },
        {
          "sp_it": "",
          "text_it": "Matteo, Simone e Taddeo;"
        },
        {
          "sp_it": "",
          "text_it": "Lino, Cleto, Clemente, Sisto,"
        },
        {
          "sp_it": "",
          "text_it": "Cornelio e Cipriano, Lorenzo, Crisogono,"
        },
        {
          "sp_it": "",
          "text_it": "Giovanni e Paolo, Cosma e Damiano]"
        },
        {
          "sp_it": "",
          "text_it": "e tutti i tuoi santi:"
        },
        {
          "sp_it": "",
          "text_it": "per i loro meriti e le loro preghiere"
        },
        {
          "sp_it": "",
          "text_it": "donaci sempre aiuto e protezione."
        },
        {
          "sp_it": "",
          "text_it": "Con le braccia allargate, prosegue:"
        },
        {
          "sp_it": "",
          "text_it": "Accetta con benevolenza, o Signore,"
        },
        {
          "sp_it": "",
          "text_it": "questa offerta che ti presentiamo"
        },
        {
          "sp_it": "",
          "text_it": "noi tuoi ministri e tutta la tua famiglia:"
        },
        {
          "sp_it": "",
          "text_it": "disponi nella tua pace i nostri giorni,"
        },
        {
          "sp_it": "",
          "text_it": "salvaci dalla dannazione eterna,"
        },
        {
          "sp_it": "",
          "text_it": "e accoglici nel gregge dei tuoi eletti."
        },
        {
          "sp_it": "",
          "text_it": "Congiunge le mani."
        },
        {
          "sp_it": "",
          "text_it": "dalla Veglia Pasquale alla II domenica di Pasqua"
        },
        {
          "sp_it": "",
          "text_it": "Accetta con benevolenza, o Signore,"
        },
        {
          "sp_it": "",
          "text_it": "questa offerta che noi tuoi ministri e tutta la tua famiglia"
        },
        {
          "sp_it": "",
          "text_it": "ti presentiamo"
        },
        {
          "sp_it": "",
          "text_it": "anche per i nostri fratelli [N. e N.],"
        },
        {
          "sp_it": "",
          "text_it": "che ti sei degnato di far rinascere"
        },
        {
          "sp_it": "",
          "text_it": "dall’acqua e dallo Spirito Santo,"
        },
        {
          "sp_it": "",
          "text_it": "accordando loro il perdono di tutti i peccati."
        },
        {
          "sp_it": "",
          "text_it": "Disponi nella tua pace i nostri giorni,"
        },
        {
          "sp_it": "",
          "text_it": "salvaci dalla dannazione eterna,"
        },
        {
          "sp_it": "",
          "text_it": "e accoglici nel gregge dei tuoi eletti."
        },
        {
          "sp_it": "",
          "text_it": "Per il Battesimo"
        },
        {
          "sp_it": "",
          "text_it": "Accetta con benevolenza, o Signore,"
        },
        {
          "sp_it": "",
          "text_it": "questa offerta che noi tuoi ministri e tutta la tua famiglia"
        },
        {
          "sp_it": "",
          "text_it": "ti presentiamo"
        },
        {
          "sp_it": "",
          "text_it": "anche per i nostri fratelli [N. e N.],"
        },
        {
          "sp_it": "",
          "text_it": "che ti sei degnato di far rinascere dall’acqua e dallo Spirito Santo,"
        },
        {
          "sp_it": "",
          "text_it": "accordando loro il perdono di tutti i peccati:"
        },
        {
          "sp_it": "",
          "text_it": "tu, che li hai inseriti come membra vive in Cristo,"
        },
        {
          "sp_it": "",
          "text_it": "scrivi i loro nomi nel libro della vita."
        },
        {
          "sp_it": "CP",
          "text_it": "417Preghiera Eucaristica I"
        },
        {
          "sp_it": "CC",
          "text_it": "T enendo le mani stese sulle offerte, dice:"
        },
        {
          "sp_it": "",
          "text_it": "Santifica, o Dio, questa offerta"
        },
        {
          "sp_it": "",
          "text_it": "con la potenza della tua benedizione,"
        },
        {
          "sp_it": "",
          "text_it": "e degnati di accettarla a nostro favore,"
        },
        {
          "sp_it": "",
          "text_it": "in sacrificio spirituale e perfetto,"
        },
        {
          "sp_it": "",
          "text_it": "perché diventi per noi il Corpo e il Sangue"
        },
        {
          "sp_it": "",
          "text_it": "del tuo amatissimo Figlio,"
        },
        {
          "sp_it": "",
          "text_it": "il Signore nostro Gesù Cristo."
        },
        {
          "sp_it": "",
          "text_it": "Congiunge le mani."
        },
        {
          "sp_it": "",
          "text_it": "Per la Confermazione"
        },
        {
          "sp_it": "",
          "text_it": "Accetta con benevolenza, o Signore,"
        },
        {
          "sp_it": "",
          "text_it": "questa offerta che noi tuoi ministri e tutta la tua famiglia"
        },
        {
          "sp_it": "",
          "text_it": "ti presentiamo"
        },
        {
          "sp_it": "",
          "text_it": "anche per i tuoi figli [N. e N.],"
        },
        {
          "sp_it": "",
          "text_it": "che hai rigenerato nel Battesimo"
        },
        {
          "sp_it": "",
          "text_it": "e confermato con il sigillo dello Spirito Santo:"
        },
        {
          "sp_it": "",
          "text_it": "custodisci in loro il dono del tuo amore."
        },
        {
          "rubric_it": "★ P er la Messa di prima comunione"
        },
        {
          "sp_it": "",
          "text_it": "Accetta con benevolenza, o Signore,"
        },
        {
          "sp_it": "",
          "text_it": "questa offerta che noi tuoi ministri e tutta la tua famiglia"
        },
        {
          "sp_it": "",
          "text_it": "ti presentiamo"
        },
        {
          "sp_it": "",
          "text_it": "anche per i tuoi figli [N. e N.],"
        },
        {
          "sp_it": "",
          "text_it": "che oggi per la prima volta raduni alla mensa"
        },
        {
          "sp_it": "",
          "text_it": "nella partecipazione al pane della vita e al calice della salvezza:"
        },
        {
          "sp_it": "",
          "text_it": "concedi loro di crescere sempre nella tua amicizia"
        },
        {
          "sp_it": "",
          "text_it": "e nella comunione con la tua Chiesa."
        },
        {
          "sp_it": "",
          "text_it": "Per il Matrimonio"
        },
        {
          "sp_it": "",
          "text_it": "Accetta con benevolenza, o Signore,"
        },
        {
          "sp_it": "",
          "text_it": "questa offerta che ti presentiamo"
        },
        {
          "sp_it": "",
          "text_it": "noi tuoi ministri, questi tuoi figli N. e N."
        },
        {
          "sp_it": "",
          "text_it": "e tutta la tua famiglia che per loro ti invoca:"
        },
        {
          "sp_it": "",
          "text_it": "tu che li hai condotti al giorno delle nozze,"
        },
        {
          "sp_it": "",
          "text_it": "allietali con il dono [dei figli e] di una vita lunga e serena."
        },
        {
          "sp_it": "",
          "text_it": "L’Hanc ígitur di altre Messe rituali si trova nei rispettivi formulari."
        },
        {
          "rubric_it": "Nelle formule seguenti, le parole del Signore si pronuncino con voce chiara e distinta,"
        },
        {
          "sp_it": "",
          "text_it": "come è richiesto dalla loro natura."
        },
        {
          "sp_it": "",
          "text_it": "La vigilia della sua passione,"
        },
        {
          "sp_it": "",
          "text_it": "prende il pane e, tenendolo leggermente sollevato sull’altare, prosegue:"
        },
        {
          "sp_it": "",
          "text_it": "egli prese il pane nelle sue mani sante e venerabili,"
        },
        {
          "sp_it": "",
          "text_it": "alza gli occhi,"
        },
        {
          "sp_it": "",
          "text_it": "e alzando gli occhi al cielo"
        },
        {
          "sp_it": "",
          "text_it": "a te, Dio Padre suo onnipotente,"
        },
        {
          "sp_it": "",
          "text_it": "rese grazie con la preghiera di benedizione,"
        },
        {
          "sp_it": "",
          "text_it": "spezzò il pane,"
        },
        {
          "sp_it": "",
          "text_it": "lo diede ai suoi discepoli e disse:"
        },
        {
          "sp_it": "",
          "text_it": "si inchina leggermente,"
        },
        {
          "sp_it": "",
          "text_it": "Prendete, e mangiatene tutti:"
        },
        {
          "sp_it": "",
          "text_it": "questo è il mio Corpo"
        },
        {
          "sp_it": "",
          "text_it": "offerto in sacrificio per voi."
        },
        {
          "sp_it": "",
          "text_it": "Presenta al popolo l’ostia consacrata, la depone sulla patena e genuflette in adorazione."
        },
        {
          "rubric_it": "Poi prosegue:"
        },
        {
          "sp_it": "",
          "text_it": "Allo stesso modo, dopo aver cenato,"
        },
        {
          "sp_it": "",
          "text_it": "prende il calice e, tenendolo leggermente sollevato sull’altare, prosegue:"
        },
        {
          "sp_it": "",
          "text_it": "prese nelle sue mani sante e venerabili"
        },
        {
          "sp_it": "",
          "text_it": "questo glorioso calice,"
        },
        {
          "sp_it": "",
          "text_it": "ti rese grazie con la preghiera di benedizione,"
        },
        {
          "sp_it": "",
          "text_it": "lo diede ai suoi discepoli e disse:"
        },
        {
          "sp_it": "",
          "text_it": "419Preghiera Eucaristica I"
        },
        {
          "sp_it": "CP",
          "text_it": "si inchina leggermente,"
        },
        {
          "sp_it": "",
          "text_it": "Prendete, e bevetene tutti:"
        },
        {
          "sp_it": "",
          "text_it": "questo è il calice del mio Sangue,"
        },
        {
          "sp_it": "",
          "text_it": "per la nuova ed eterna alleanza,"
        },
        {
          "sp_it": "",
          "text_it": "versato per voi e per tutti"
        },
        {
          "sp_it": "",
          "text_it": "in remissione dei peccati."
        },
        {
          "sp_it": "",
          "text_it": "Fate questo in memoria di me."
        },
        {
          "sp_it": "",
          "text_it": "Presenta al popolo il calice, lo depone sul corporale e genuflette in adorazione."
        },
        {
          "rubric_it": "Quindi, il sacerdote canta o dice:"
        },
        {
          "sp_it": "",
          "text_it": "Mistero della fede."
        },
        {
          "rubric_it": "Il popolo prosegue acclamando:"
        },
        {
          "sp_it": "",
          "text_it": "Annunciamo la tua morte, Signore,"
        },
        {
          "sp_it": "",
          "text_it": "proclamiamo la tua risurrezione,"
        },
        {
          "sp_it": "",
          "text_it": "nell’attesa della tua venuta."
        },
        {
          "rubric_it": "Oppure:"
        },
        {
          "sp_it": "",
          "text_it": "Ogni volta che mangiamo di questo pane"
        },
        {
          "sp_it": "",
          "text_it": "e beviamo a questo calice,"
        },
        {
          "sp_it": "",
          "text_it": "annunciamo la tua morte, Signore,"
        },
        {
          "sp_it": "",
          "text_it": "nell’attesa della tua venuta."
        },
        {
          "rubric_it": "Oppure:"
        },
        {
          "sp_it": "",
          "text_it": "Tu ci hai redenti con la tua croce"
        },
        {
          "sp_it": "",
          "text_it": "e la tua risurrezione:"
        },
        {
          "sp_it": "",
          "text_it": "salvaci, o Salvatore del mondo."
        },
        {
          "rubric_it": "Quindi, con le braccia allargate, il sacerdote dice:"
        },
        {
          "sp_it": "",
          "text_it": "In questo sacrificio, o Padre,"
        },
        {
          "sp_it": "",
          "text_it": "noi tuoi ministri e il tuo popolo santo"
        },
        {
          "sp_it": "",
          "text_it": "celebriamo il memoriale"
        },
        {
          "sp_it": "",
          "text_it": "della beata passione,"
        },
        {
          "sp_it": "",
          "text_it": "della risurrezione dai morti"
        },
        {
          "sp_it": "",
          "text_it": "e della gloriosa ascensione al cielo"
        },
        {
          "sp_it": "",
          "text_it": "del Cristo tuo Figlio e nostro Signore;"
        },
        {
          "sp_it": "",
          "text_it": "e offriamo alla tua maestà divina,"
        },
        {
          "sp_it": "",
          "text_it": "tra i doni che ci hai dato,"
        },
        {
          "sp_it": "",
          "text_it": "la vittima pura, santa e immacolata,"
        },
        {
          "sp_it": "",
          "text_it": "pane santo della vita eterna,"
        },
        {
          "sp_it": "",
          "text_it": "calice dell’eterna salvezza."
        },
        {
          "sp_it": "",
          "text_it": "Volgi sulla nostra offerta"
        },
        {
          "sp_it": "",
          "text_it": "il tuo sguardo sereno e benigno,"
        },
        {
          "sp_it": "",
          "text_it": "come hai voluto accettare"
        },
        {
          "sp_it": "",
          "text_it": "i doni di Abele, il giusto,"
        },
        {
          "sp_it": "",
          "text_it": "il sacrificio di Abramo, nostro padre nella fede,"
        },
        {
          "sp_it": "",
          "text_it": "e l’oblazione pura e santa"
        },
        {
          "sp_it": "",
          "text_it": "di Melchisedek, tuo sommo sacerdote."
        },
        {
          "rubric_it": "Si inchina e, a mani giunte, prosegue:"
        },
        {
          "sp_it": "",
          "text_it": "Ti supplichiamo, Dio onnipotente:"
        },
        {
          "sp_it": "",
          "text_it": "fa’ che questa offerta,"
        },
        {
          "sp_it": "",
          "text_it": "per le mani del tuo angelo santo,"
        },
        {
          "sp_it": "",
          "text_it": "sia portata sull’altare del cielo"
        },
        {
          "sp_it": "",
          "text_it": "davanti alla tua maestà divina,"
        },
        {
          "sp_it": "",
          "text_it": "perché su tutti noi che partecipiamo di questo altare,"
        },
        {
          "sp_it": "",
          "text_it": "comunicando al santo mistero"
        },
        {
          "sp_it": "",
          "text_it": "del Corpo e Sangue del tuo Figlio,"
        },
        {
          "sp_it": "",
          "text_it": "in posizione eretta, facendosi il segno della croce, dice:"
        },
        {
          "sp_it": "",
          "text_it": "scenda la pienezza di ogni grazia"
        },
        {
          "sp_it": "",
          "text_it": "e benedizione del cielo."
        },
        {
          "sp_it": "",
          "text_it": "Congiunge le mani."
        },
        {
          "rubric_it": "4C"
        },
        {
          "sp_it": "CP",
          "text_it": "Intercessione per i defunti"
        },
        {
          "sp_it": "",
          "text_it": "Con le braccia allargate, dice:"
        },
        {
          "sp_it": "",
          "text_it": "Ricordati, o Signore, dei tuoi fedeli [ N. e N.],"
        },
        {
          "sp_it": "",
          "text_it": "che ci hanno preceduto con il segno della fede"
        },
        {
          "sp_it": "",
          "text_it": "e dormono il sonno della pace."
        },
        {
          "sp_it": "",
          "text_it": "Congiunge le mani e prega brevemente per quelli che vuole ricordare."
        },
        {
          "rubric_it": "Poi, con le braccia allargate, continua:"
        },
        {
          "sp_it": "",
          "text_it": "Dona loro, o Signore,"
        },
        {
          "sp_it": "",
          "text_it": "e a tutti quelli che riposano in Cristo,"
        },
        {
          "sp_it": "",
          "text_it": "la beatitudine, la luce e la pace."
        },
        {
          "sp_it": "",
          "text_it": "Congiunge le mani."
        },
        {
          "sp_it": "",
          "text_it": "Con la destra si batte il petto, mentre dice:"
        },
        {
          "sp_it": "",
          "text_it": "Anche a noi, tuoi ministri, peccatori,"
        },
        {
          "sp_it": "",
          "text_it": "e con le braccia allargate, prosegue:"
        },
        {
          "sp_it": "",
          "text_it": "ma fiduciosi nella tua infinita misericordia,"
        },
        {
          "sp_it": "",
          "text_it": "concedi, o Signore,"
        },
        {
          "sp_it": "",
          "text_it": "di aver parte alla comunità"
        },
        {
          "sp_it": "",
          "text_it": "dei tuoi santi apostoli e martiri:"
        },
        {
          "sp_it": "",
          "text_it": "Giovanni, Stefano, Mattia, Barnaba,"
        },
        {
          "sp_it": "",
          "text_it": "[Ignazio, Alessandro, Marcellino, Pietro,"
        },
        {
          "sp_it": "",
          "text_it": "Felicita, Perpetua, Agata, Lucia,"
        },
        {
          "sp_it": "",
          "text_it": "Agnese, Cecilia, Anastasia]"
        },
        {
          "sp_it": "",
          "text_it": "e tutti i tuoi santi;"
        },
        {
          "sp_it": "",
          "text_it": "ammettici a godere della loro sorte beata"
        },
        {
          "sp_it": "",
          "text_it": "non per i nostri meriti,"
        },
        {
          "sp_it": "",
          "text_it": "ma per la ricchezza del tuo perdono."
        },
        {
          "sp_it": "",
          "text_it": "Congiunge le mani e prosegue:"
        },
        {
          "sp_it": "",
          "text_it": "Per Cristo Signore nostro,"
        },
        {
          "sp_it": "",
          "text_it": "tu, o Dio, crei e santifichi sempre,"
        },
        {
          "sp_it": "",
          "text_it": "fai vivere, benedici"
        },
        {
          "sp_it": "",
          "text_it": "e doni al mondo ogni bene."
        },
        {
          "sp_it": "3C",
          "text_it": "422 Preghiera Eucaristica I"
        },
        {
          "sp_it": "",
          "text_it": "Prende sia la patena con l’ostia sia il calice ed elevandoli insieme canta o dice:"
        },
        {
          "sp_it": "",
          "text_it": "Per Cristo, con Cristo e in Cristo,"
        },
        {
          "sp_it": "",
          "text_it": "a te, Dio Padre onnipotente,"
        },
        {
          "sp_it": "",
          "text_it": "nell’unità dello Spirito Santo,"
        },
        {
          "sp_it": "",
          "text_it": "ogni onore e gloria"
        },
        {
          "sp_it": "",
          "text_it": "per tutti i secoli dei secoli."
        },
        {
          "sp_it": "Tutti",
          "text_it": "Amen."
        },
        {
          "sp_it": "CP",
          "text_it": "o"
        }
      ],
      "2": [
        {
          "sp_it": "",
          "text_it": "Questa Preghiera Eucaristica ha un prefazio proprio, che fa parte della sua struttura."
        },
        {
          "rubric_it": "Si possono però usare anche altri prefazi, specialmente quelli che presentano in breve"
        },
        {
          "sp_it": "",
          "text_it": "sintesi il mistero della salvezza, per esempio i prefazi comuni."
        },
        {
          "sp_it": "",
          "text_it": "V/ . Il Signore sia con voi."
        },
        {
          "sp_it": "",
          "text_it": "R/ . E con il tuo spirito."
        },
        {
          "sp_it": "",
          "text_it": "V/ . In alto i nostri cuori."
        },
        {
          "sp_it": "",
          "text_it": "R/ . S ono rivolti al Signore."
        },
        {
          "sp_it": "",
          "text_it": "V/ . Rendiamo grazie al Signore nostro Dio."
        },
        {
          "sp_it": "",
          "text_it": "R/ . È c osa buona e giusta."
        },
        {
          "sp_it": "",
          "text_it": "È veramente cosa buona e giusta,"
        },
        {
          "sp_it": "",
          "text_it": "nostro dovere e fonte di salvezza, *"
        },
        {
          "sp_it": "",
          "text_it": "rendere grazie sempre e in ogni luogo *"
        },
        {
          "sp_it": "",
          "text_it": "a te, Padre santo, +"
        },
        {
          "sp_it": "",
          "text_it": "per Gesù Cristo, tuo amatissimo Figlio. **"
        },
        {
          "sp_it": "",
          "text_it": "Egli è la tua parola vivente: *"
        },
        {
          "sp_it": "",
          "text_it": "per mezzo di lui hai creato tutte le cose,"
        },
        {
          "sp_it": "",
          "text_it": "lo hai mandato a noi salvatore e redentore, *"
        },
        {
          "sp_it": "",
          "text_it": "fatto uomo per opera dello Spirito Santo +"
        },
        {
          "sp_it": "",
          "text_it": "e nato dalla Vergine Maria. **"
        },
        {
          "sp_it": "",
          "text_it": "Per compiere la tua volontà"
        },
        {
          "sp_it": "",
          "text_it": "e acquistarti un popolo santo *"
        },
        {
          "sp_it": "",
          "text_it": "egli, nell’ ora della passione,"
        },
        {
          "sp_it": "",
          "text_it": "stese le braccia sulla croce, *"
        },
        {
          "sp_it": "",
          "text_it": "morendo distrusse la morte +"
        },
        {
          "sp_it": "",
          "text_it": "e proclamò la risurrezione. **"
        },
        {
          "sp_it": "",
          "text_it": "Per questo mistero di salvezza, *"
        },
        {
          "sp_it": "",
          "text_it": "uniti agli angeli e ai santi, *"
        },
        {
          "sp_it": "",
          "text_it": "cantiamo a una sola voce +"
        },
        {
          "sp_it": "",
          "text_it": "la tua gloria: **"
        },
        {
          "sp_it": "",
          "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
        },
        {
          "sp_it": "",
          "text_it": "I cieli e la terra sono pieni della tua gloria."
        },
        {
          "sp_it": "",
          "text_it": "Osanna nell’alto dei cieli."
        },
        {
          "sp_it": "",
          "text_it": "Benedetto colui che viene nel nome del Signore."
        },
        {
          "sp_it": "",
          "text_it": "Osanna nell’alto dei cieli."
        },
        {
          "sp_it": "CP",
          "text_it": "424 Preghiera Eucaristica II"
        },
        {
          "rubric_it": "Il sacerdote, con le braccia allargate, dice:"
        },
        {
          "sp_it": "C",
          "text_it": "Veramente santo sei tu, o Padre, fonte di ogni santità."
        },
        {
          "sp_it": "",
          "text_it": "Congiunge le mani e, tenendole stese sulle offerte, dice:"
        },
        {
          "sp_it": "",
          "text_it": "Ti preghiamo:"
        },
        {
          "sp_it": "",
          "text_it": "santifica questi doni con la rugiada del tuo Spirito"
        },
        {
          "sp_it": "",
          "text_it": "congiunge le mani e traccia un unico segno di croce sul pane e sul calice, dicendo:"
        },
        {
          "sp_it": "",
          "text_it": "perché diventino per noi"
        },
        {
          "sp_it": "",
          "text_it": "il Corpo e ^ il Sangue del Signore nostro Gesù Cristo."
        },
        {
          "sp_it": "",
          "text_it": "Congiunge le mani."
        },
        {
          "rubric_it": "Nelle formule seguenti, le parole del Signore si pronuncino con voce chiara e distinta,"
        },
        {
          "sp_it": "",
          "text_it": "come è richiesto dalla loro natura."
        },
        {
          "sp_it": "",
          "text_it": "Egli (*), consegnandosi volontariamente alla passione,"
        },
        {
          "sp_it": "",
          "text_it": "prende il pane e, tenendolo leggermente sollevato sull’altare, prosegue:"
        },
        {
          "sp_it": "",
          "text_it": "prese il pane, rese grazie,"
        },
        {
          "sp_it": "",
          "text_it": "lo spezzò, lo diede ai suoi discepoli e disse:"
        },
        {
          "sp_it": "",
          "text_it": "si inchina leggermente,"
        },
        {
          "sp_it": "",
          "text_it": "Prendete, e mangiatene tutti:"
        },
        {
          "sp_it": "",
          "text_it": "questo è il mio Corpo"
        },
        {
          "sp_it": "",
          "text_it": "offerto in sacrificio per voi."
        },
        {
          "sp_it": "",
          "text_it": "Presenta al popolo l’ostia consacrata, la depone sulla patena e genuflette in adorazione."
        },
        {
          "rubric_it": "Poi prosegue:"
        },
        {
          "sp_it": "",
          "text_it": "Allo stesso modo, dopo aver cenato,"
        },
        {
          "sp_it": "",
          "text_it": "prende il calice e, tenendolo leggermente sollevato sull’altare, prosegue:"
        },
        {
          "sp_it": "",
          "text_it": "prese il calice,"
        },
        {
          "sp_it": "",
          "text_it": "di nuovo ti rese grazie, lo diede ai suoi discepoli e disse:"
        },
        {
          "rubric_it": "★ Giovedì Santo alla Messa vespertina «Cena del Signore»:"
        },
        {
          "sp_it": "",
          "text_it": "(*) Egli, in questa notte,"
        },
        {
          "sp_it": "CC",
          "text_it": "425Preghiera Eucaristica II"
        },
        {
          "sp_it": "",
          "text_it": "si inchina leggermente,"
        },
        {
          "sp_it": "",
          "text_it": "Prendete, e bevetene tutti:"
        },
        {
          "sp_it": "",
          "text_it": "questo è il calice del mio Sangue,"
        },
        {
          "sp_it": "",
          "text_it": "per la nuova ed eterna alleanza,"
        },
        {
          "sp_it": "",
          "text_it": "versato per voi e per tutti"
        },
        {
          "sp_it": "",
          "text_it": "in remissione dei peccati."
        },
        {
          "sp_it": "",
          "text_it": "Fate questo in memoria di me."
        },
        {
          "sp_it": "",
          "text_it": "Presenta al popolo il calice, lo depone sul corporale e genuflette in adorazione."
        },
        {
          "rubric_it": "Quindi, il sacerdote canta o dice:"
        },
        {
          "sp_it": "",
          "text_it": "Mistero della fede."
        },
        {
          "rubric_it": "Il popolo prosegue acclamando:"
        },
        {
          "sp_it": "",
          "text_it": "Annunciamo la tua morte, Signore,"
        },
        {
          "sp_it": "",
          "text_it": "proclamiamo la tua risurrezione,"
        },
        {
          "sp_it": "",
          "text_it": "nell’attesa della tua venuta."
        },
        {
          "rubric_it": "Oppure:"
        },
        {
          "sp_it": "",
          "text_it": "Ogni volta che mangiamo di questo pane"
        },
        {
          "sp_it": "",
          "text_it": "e beviamo a questo calice,"
        },
        {
          "sp_it": "",
          "text_it": "annunciamo la tua morte, Signore,"
        },
        {
          "sp_it": "",
          "text_it": "nell’attesa della tua venuta."
        },
        {
          "rubric_it": "Oppure:"
        },
        {
          "sp_it": "",
          "text_it": "Tu ci hai redenti con la tua croce"
        },
        {
          "sp_it": "",
          "text_it": "e la tua risurrezione:"
        },
        {
          "sp_it": "",
          "text_it": "salvaci, o Salvatore del mondo."
        },
        {
          "sp_it": "CP",
          "text_it": "426 Preghiera Eucaristica II"
        },
        {
          "rubric_it": "Quindi, con le braccia allargate, il sacerdote dice:"
        },
        {
          "sp_it": "",
          "text_it": "Celebrando il memoriale"
        },
        {
          "sp_it": "",
          "text_it": "della morte e risurrezione del tuo Figlio,"
        },
        {
          "sp_it": "",
          "text_it": "ti offriamo, Padre,"
        },
        {
          "sp_it": "",
          "text_it": "il pane della vita e il calice della salvezza,"
        },
        {
          "sp_it": "",
          "text_it": "e ti rendiamo grazie"
        },
        {
          "sp_it": "",
          "text_it": "perché ci hai resi degni di stare alla tua presenza"
        },
        {
          "sp_it": "",
          "text_it": "a compiere il servizio sacerdotale."
        },
        {
          "sp_it": "",
          "text_it": "Ti preghiamo umilmente:"
        },
        {
          "sp_it": "",
          "text_it": "per la comunione"
        },
        {
          "sp_it": "",
          "text_it": "al Corpo e al Sangue di Cristo,"
        },
        {
          "sp_it": "",
          "text_it": "lo Spirito Santo ci riunisca in un solo corpo."
        },
        {
          "sp_it": "",
          "text_it": "Ricordati, Padre, della tua Chiesa"
        },
        {
          "sp_it": "",
          "text_it": "diffusa su tutta la terra:"
        },
        {
          "sp_it": "",
          "text_it": "†"
        },
        {
          "rubric_it": "★ D omenica"
        },
        {
          "rubric_it": "Si può dire in tutte le domeniche, a esclusione di quando c’è un altro ricordo proprio."
        },
        {
          "sp_it": "1C",
          "text_it": "† e qui convocata"
        },
        {
          "sp_it": "",
          "text_it": "nel giorno in cui Cristo ha vinto la morte"
        },
        {
          "sp_it": "",
          "text_it": "e ci ha resi partecipi della sua vita immortale:"
        },
        {
          "rubric_it": "★ Natale del Signore e Ottava"
        },
        {
          "sp_it": "",
          "text_it": "† e qui convocata"
        },
        {
          "sp_it": "",
          "text_it": "nel giorno santissimo [nella notte santissima]"
        },
        {
          "sp_it": "",
          "text_it": "in cui la V ergine Maria"
        },
        {
          "sp_it": "",
          "text_it": "diede al mondo il Salvatore:"
        },
        {
          "rubric_it": "★ Epifania del Signore"
        },
        {
          "sp_it": "",
          "text_it": "† e qui convocata"
        },
        {
          "sp_it": "",
          "text_it": "nel giorno santissimo in cui il tuo unico Figlio,"
        },
        {
          "sp_it": "",
          "text_it": "eterno con te nella gloria,"
        },
        {
          "sp_it": "",
          "text_it": "si è manifestato nella nostra natura umana:"
        },
        {
          "rubric_it": "★ Giovedì Santo alla Messa vespertina"
        },
        {
          "sp_it": "",
          "text_it": "« Cena del Signore»"
        },
        {
          "sp_it": "",
          "text_it": "† e qui convocata"
        },
        {
          "sp_it": "",
          "text_it": "nel giorno santissimo"
        },
        {
          "sp_it": "",
          "text_it": "nel quale Gesù Cristo nostro Signore"
        },
        {
          "sp_it": "",
          "text_it": "fu consegnato alla morte per noi:"
        },
        {
          "sp_it": "",
          "text_it": "427Preghiera Eucaristica II"
        },
        {
          "rubric_it": "★ Dalla Veglia Pasquale alla II domenica di Pasqua"
        },
        {
          "sp_it": "",
          "text_it": "† e qui convocata"
        },
        {
          "sp_it": "",
          "text_it": "nel giorno glorioso [nella notte gloriosa]"
        },
        {
          "sp_it": "",
          "text_it": "della risurrezione di Cristo Signore"
        },
        {
          "sp_it": "",
          "text_it": "nel suo vero corpo:"
        },
        {
          "rubric_it": "★ Ascensione del Signore"
        },
        {
          "sp_it": "",
          "text_it": "† e qui convocata"
        },
        {
          "sp_it": "",
          "text_it": "nel giorno glorioso dell’Ascensione"
        },
        {
          "sp_it": "",
          "text_it": "in cui Cristo è stato costituito Signore"
        },
        {
          "sp_it": "",
          "text_it": "del cielo e della terra:"
        },
        {
          "rubric_it": "★ Domenica di Pentecoste"
        },
        {
          "sp_it": "",
          "text_it": "† e qui convocata"
        },
        {
          "sp_it": "",
          "text_it": "nel giorno santissimo in cui l’effusione del tuo Spirito"
        },
        {
          "sp_it": "",
          "text_it": "l’ha costituita sacramento di unità per tutti i popoli:"
        },
        {
          "rubric_it": "* Qui è permesso nominare anche il vescovo coadiutore o gli ausiliari,"
        },
        {
          "sp_it": "",
          "text_it": "come indicato al n. 149 dell’Ordinamento Generale del Messale Romano ."
        },
        {
          "sp_it": "",
          "text_it": "rendila perfetta nell’amore"
        },
        {
          "sp_it": "",
          "text_it": "in unione con il nostro papa N.,"
        },
        {
          "sp_it": "",
          "text_it": "il nostro vescovo N.*,"
        },
        {
          "sp_it": "",
          "text_it": "i presbiteri e i diaconi. †"
        },
        {
          "sp_it": "",
          "text_it": "Intercessioni particolari, p. 428."
        },
        {
          "sp_it": "",
          "text_it": "428 Preghiera Eucaristica II"
        },
        {
          "sp_it": "",
          "text_it": "Intercessioni particolari"
        },
        {
          "sp_it": "",
          "text_it": "Dalla Veglia Pasquale alla II domenica di Pasqua"
        },
        {
          "sp_it": "",
          "text_it": "Per il Battesimo degli adulti"
        },
        {
          "sp_it": "",
          "text_it": "† Ricordati anche dei nostri fratelli [N. e N.],"
        },
        {
          "sp_it": "",
          "text_it": "che oggi mediante il Battesimo [e la Confermazione]"
        },
        {
          "sp_it": "",
          "text_it": "sono entrati a far parte della tua famiglia:"
        },
        {
          "sp_it": "",
          "text_it": "fa’ che seguano Cristo tuo Figlio"
        },
        {
          "sp_it": "",
          "text_it": "con animo generoso e ardente."
        },
        {
          "rubric_it": "★ Per il Battesimo dei bambini"
        },
        {
          "sp_it": "",
          "text_it": "† Ricordati anche dei nostri fratelli [N. e N.],"
        },
        {
          "sp_it": "",
          "text_it": "che oggi hai liberato dal peccato"
        },
        {
          "sp_it": "",
          "text_it": "e rigenerato dall’acqua e dallo Spirito Santo:"
        },
        {
          "sp_it": "",
          "text_it": "tu, che li hai inseriti come membra vive nel corpo di Cristo,"
        },
        {
          "sp_it": "",
          "text_it": "scrivi i loro nomi nel libro della vita."
        },
        {
          "rubric_it": "★ Per la Confermazione"
        },
        {
          "sp_it": "",
          "text_it": "† Ricordati anche dei tuoi figli [N. e N.],"
        },
        {
          "sp_it": "",
          "text_it": "che, rigenerati nel Battesimo,"
        },
        {
          "sp_it": "",
          "text_it": "oggi hai confermato con il sigillo dello Spirito Santo:"
        },
        {
          "sp_it": "",
          "text_it": "custodisci in loro il dono del tuo amore."
        },
        {
          "rubric_it": "★ Per la Messa di prima comunione"
        },
        {
          "sp_it": "",
          "text_it": "† Ricordati anche dei tuoi figli [N. e N.],"
        },
        {
          "sp_it": "",
          "text_it": "che oggi per la prima volta"
        },
        {
          "sp_it": "",
          "text_it": "raduni a lla mensa della tua famiglia"
        },
        {
          "sp_it": "",
          "text_it": "nella partecipazione al pane della vita"
        },
        {
          "sp_it": "",
          "text_it": "e al calice della salvezza:"
        },
        {
          "sp_it": "",
          "text_it": "concedi loro di crescere sempre nella tua amicizia"
        },
        {
          "sp_it": "",
          "text_it": "e nella comunione con la tua Chiesa."
        },
        {
          "rubric_it": "★ Per il Matrimonio"
        },
        {
          "sp_it": "",
          "text_it": "† Ricordati anche di N. e N.,"
        },
        {
          "sp_it": "",
          "text_it": "che hai voluto condurre al giorno delle nozze:"
        },
        {
          "sp_it": "",
          "text_it": "per tua grazia vivano nell’amore vicendevole e nella pace."
        },
        {
          "sp_it": "",
          "text_it": "Le intercessioni delle altre Messe rituali si trovano nei rispettivi formulari."
        },
        {
          "sp_it": "",
          "text_it": "429Preghiera Eucaristica II"
        },
        {
          "rubric_it": "Nelle Messe per i defunti si può aggiungere:"
        },
        {
          "sp_it": "",
          "text_it": "Ricordati del nostro fratello"
        },
        {
          "sp_it": "",
          "text_it": "[della nostra sorella] N.,"
        },
        {
          "sp_it": "",
          "text_it": "che [oggi] hai chiamato a te da questa vita;"
        },
        {
          "sp_it": "",
          "text_it": "e come per il Battesimo l’hai unito[a]"
        },
        {
          "sp_it": "",
          "text_it": "alla morte di Cristo, tuo Figlio,"
        },
        {
          "sp_it": "",
          "text_it": "così rendilo[a] partecipe della sua risurrezione."
        },
        {
          "sp_it": "",
          "text_it": "Ricordati anche dei nostri fratelli e sorelle"
        },
        {
          "sp_it": "",
          "text_it": "che si sono addormentati"
        },
        {
          "sp_it": "",
          "text_it": "nella speranza della risurrezione"
        },
        {
          "sp_it": "",
          "text_it": "e, nella tua misericordia, di tutti i defunti:"
        },
        {
          "sp_it": "",
          "text_it": "ammettili alla luce del tuo volto."
        },
        {
          "sp_it": "",
          "text_it": "Di noi tutti abbi misericordia,"
        },
        {
          "sp_it": "",
          "text_it": "donaci di aver parte alla vita eterna,"
        },
        {
          "sp_it": "",
          "text_it": "insieme con la beata Maria, Vergine e Madre di Dio,"
        },
        {
          "sp_it": "",
          "text_it": "san Giuseppe, suo sposo,"
        },
        {
          "sp_it": "",
          "text_it": "gli apostoli,"
        },
        {
          "sp_it": "",
          "text_it": "[san N.: santo del giorno o patrono]"
        },
        {
          "sp_it": "",
          "text_it": "e tutti i santi"
        },
        {
          "sp_it": "",
          "text_it": "che in ogni tempo ti furono graditi,"
        },
        {
          "sp_it": "",
          "text_it": "congiunge le mani,"
        },
        {
          "sp_it": "",
          "text_it": "e in Gesù Cristo tuo Figlio"
        },
        {
          "sp_it": "",
          "text_it": "canteremo la tua lode e la tua gloria."
        },
        {
          "sp_it": "",
          "text_it": "Prende sia la patena con l’ostia sia il calice ed elevandoli insieme canta o dice:"
        },
        {
          "sp_it": "2C",
          "text_it": "430 Preghiera Eucaristica II"
        },
        {
          "sp_it": "CP",
          "text_it": "o"
        },
        {
          "sp_it": "CC",
          "text_it": "Per Cristo, con Cristo e in Cristo,"
        },
        {
          "sp_it": "",
          "text_it": "a te, Dio Padre onnipotente,"
        },
        {
          "sp_it": "",
          "text_it": "nell’unità dello Spirito Santo,"
        },
        {
          "sp_it": "",
          "text_it": "ogni onore e gloria"
        },
        {
          "sp_it": "",
          "text_it": "per tutti i secoli dei secoli."
        },
        {
          "sp_it": "Tutti",
          "text_it": "Amen."
        }
      ],
      "3": [
        {
          "sp_it": "",
          "text_it": "V/ . Il Signore sia con voi."
        },
        {
          "sp_it": "",
          "text_it": "R/ . E con il tuo spirito."
        },
        {
          "sp_it": "",
          "text_it": "V/ . I n alto i nostri cuori."
        },
        {
          "sp_it": "",
          "text_it": "R/ . S ono rivolti al Signore."
        },
        {
          "sp_it": "",
          "text_it": "V/ . R endiamo grazie al Signore nostro Dio."
        },
        {
          "sp_it": "",
          "text_it": "R/ . È c osa buona e giusta."
        },
        {
          "rubric_it": "Segue il prefazio, scelto secondo le rubriche, che si conclude con l’acclamazione:"
        },
        {
          "sp_it": "",
          "text_it": "Santo, Santo, Santo il Signore Dio dell’universo."
        },
        {
          "sp_it": "",
          "text_it": "I cieli e la terra sono pieni della tua gloria."
        },
        {
          "sp_it": "",
          "text_it": "Osanna nell’alto dei cieli."
        },
        {
          "sp_it": "",
          "text_it": "Benedetto colui che viene nel nome del Signore."
        },
        {
          "sp_it": "",
          "text_it": "Osanna nell’alto dei cieli."
        },
        {
          "rubric_it": "Il sacerdote, con le braccia allargate, dice:"
        },
        {
          "sp_it": "C",
          "text_it": "Veramente santo sei tu, o Padre,"
        },
        {
          "sp_it": "",
          "text_it": "ed è giusto che ogni creatura ti lodi."
        },
        {
          "sp_it": "",
          "text_it": "Per mezzo del tuo Figlio,"
        },
        {
          "sp_it": "",
          "text_it": "il Signore nostro Gesù Cristo,"
        },
        {
          "sp_it": "",
          "text_it": "nella potenza dello Spirito Santo"
        },
        {
          "sp_it": "",
          "text_it": "fai vivere e santifichi l’universo,"
        },
        {
          "sp_it": "",
          "text_it": "e continui a radunare intorno a te un popolo"
        },
        {
          "sp_it": "",
          "text_it": "che, dall’oriente all’occidente,"
        },
        {
          "sp_it": "",
          "text_it": "offra al tuo nome il sacrificio perfetto."
        },
        {
          "sp_it": "",
          "text_it": "Congiunge le mani e, tenendole stese sulle offerte, dice:"
        },
        {
          "sp_it": "",
          "text_it": "Ti preghiamo umilmente:"
        },
        {
          "sp_it": "",
          "text_it": "santifica e consacra con il tuo Spirito"
        },
        {
          "sp_it": "",
          "text_it": "i doni che ti abbiamo presentato"
        },
        {
          "sp_it": "",
          "text_it": "congiunge le mani e traccia un unico segno di croce sul pane e sul calice, dicendo:"
        },
        {
          "sp_it": "",
          "text_it": "perché diventino il Corpo e ^ il Sangue"
        },
        {
          "sp_it": "",
          "text_it": "del tuo Figlio, il Signore nostro Gesù Cristo,"
        },
        {
          "sp_it": "",
          "text_it": "congiunge le mani,"
        },
        {
          "sp_it": "",
          "text_it": "che ci ha comandato"
        },
        {
          "sp_it": "",
          "text_it": "di celebrare questi misteri."
        },
        {
          "sp_it": "CC",
          "text_it": "432 Preghiera Eucaristica III"
        },
        {
          "rubric_it": "Nelle formule seguenti, le parole del Signore si pronuncino con voce chiara e distinta,"
        },
        {
          "sp_it": "",
          "text_it": "come è richiesto dalla loro natura."
        },
        {
          "sp_it": "",
          "text_it": "Egli, nella notte in cui veniva tradito (*),"
        },
        {
          "sp_it": "",
          "text_it": "prende il pane e, tenendolo leggermente sollevato sull’altare, prosegue:"
        },
        {
          "sp_it": "",
          "text_it": "prese il pane,"
        },
        {
          "sp_it": "",
          "text_it": "ti rese grazie con la preghiera di benedizione,"
        },
        {
          "sp_it": "",
          "text_it": "lo spezzò, lo diede ai suoi discepoli e disse:"
        },
        {
          "sp_it": "",
          "text_it": "si inchina leggermente,"
        },
        {
          "sp_it": "",
          "text_it": "Prendete, e mangiatene tutti:"
        },
        {
          "sp_it": "",
          "text_it": "questo è il mio Corpo"
        },
        {
          "sp_it": "",
          "text_it": "offerto in sacrificio per voi."
        },
        {
          "sp_it": "",
          "text_it": "Presenta al popolo l’ostia consacrata, la depone sulla patena e genuflette in adorazione."
        },
        {
          "rubric_it": "Poi prosegue:"
        },
        {
          "sp_it": "",
          "text_it": "Allo stesso modo, dopo aver cenato,"
        },
        {
          "sp_it": "",
          "text_it": "prende il calice e, tenendolo leggermente sollevato sull’altare, prosegue:"
        },
        {
          "sp_it": "",
          "text_it": "prese il calice,"
        },
        {
          "sp_it": "",
          "text_it": "ti rese grazie con la preghiera di benedizione,"
        },
        {
          "sp_it": "",
          "text_it": "lo diede ai suoi discepoli e disse:"
        },
        {
          "sp_it": "",
          "text_it": "si inchina leggermente,"
        },
        {
          "sp_it": "",
          "text_it": "Prendete, e bevetene tutti:"
        },
        {
          "sp_it": "",
          "text_it": "questo è il calice del mio Sangue,"
        },
        {
          "sp_it": "",
          "text_it": "per la nuova ed eterna alleanza,"
        },
        {
          "sp_it": "",
          "text_it": "versato per voi e per tutti"
        },
        {
          "sp_it": "",
          "text_it": "in remissione dei peccati."
        },
        {
          "sp_it": "",
          "text_it": "Fate questo in memoria di me."
        },
        {
          "sp_it": "",
          "text_it": "Presenta al popolo il calice, lo depone sul corporale e genuflette in adorazione."
        },
        {
          "rubric_it": "★ Giovedì Santo alla Messa vespertina «Cena del Signore»:"
        },
        {
          "sp_it": "",
          "text_it": "(*) Egli, infatti, in questa notte in cui veniva tradito,"
        },
        {
          "sp_it": "",
          "text_it": "avendo amato i suoi che erano nel mondo,"
        },
        {
          "sp_it": "",
          "text_it": "li amò sino alla fine, e mentre cenava con loro"
        },
        {
          "sp_it": "",
          "text_it": "433Preghiera Eucaristica III"
        },
        {
          "rubric_it": "Quindi, il sacerdote canta o dice:"
        },
        {
          "sp_it": "",
          "text_it": "Mistero della fede."
        },
        {
          "rubric_it": "Il popolo prosegue acclamando:"
        },
        {
          "sp_it": "",
          "text_it": "Annunciamo la tua morte, Signore,"
        },
        {
          "sp_it": "",
          "text_it": "proclamiamo la tua risurrezione,"
        },
        {
          "sp_it": "",
          "text_it": "nell’attesa della tua venuta."
        },
        {
          "rubric_it": "Oppure:"
        },
        {
          "sp_it": "",
          "text_it": "Ogni volta che mangiamo di questo pane"
        },
        {
          "sp_it": "",
          "text_it": "e beviamo a questo calice,"
        },
        {
          "sp_it": "",
          "text_it": "annunciamo la tua morte, Signore,"
        },
        {
          "sp_it": "",
          "text_it": "nell’attesa della tua venuta."
        },
        {
          "rubric_it": "Oppure:"
        },
        {
          "sp_it": "",
          "text_it": "Tu ci hai redenti con la tua croce"
        },
        {
          "sp_it": "",
          "text_it": "e la tua risurrezione:"
        },
        {
          "sp_it": "",
          "text_it": "salvaci, o Salvatore del mondo."
        },
        {
          "rubric_it": "Quindi, con le braccia allargate, il sacerdote dice:"
        },
        {
          "sp_it": "",
          "text_it": "Celebrando il memoriale"
        },
        {
          "sp_it": "",
          "text_it": "della passione redentrice del tuo Figlio,"
        },
        {
          "sp_it": "",
          "text_it": "della sua mirabile risurrezione"
        },
        {
          "sp_it": "",
          "text_it": "e ascensione al cielo,"
        },
        {
          "sp_it": "",
          "text_it": "nell’attesa della sua venuta nella gloria,"
        },
        {
          "sp_it": "",
          "text_it": "ti offriamo, o Padre, in rendimento di grazie,"
        },
        {
          "sp_it": "",
          "text_it": "questo sacrificio vivo e santo."
        },
        {
          "sp_it": "",
          "text_it": "Guarda con amore"
        },
        {
          "sp_it": "",
          "text_it": "e riconosci nell’offerta della tua Chiesa"
        },
        {
          "sp_it": "",
          "text_it": "la vittima immolata per la nostra redenzione,"
        },
        {
          "sp_it": "",
          "text_it": "e a noi, che ci nutriamo"
        },
        {
          "sp_it": "",
          "text_it": "del Corpo e del Sangue del tuo Figlio,"
        },
        {
          "sp_it": "",
          "text_it": "dona la pienezza dello Spirito Santo,"
        },
        {
          "sp_it": "",
          "text_it": "perché diventiamo in Cristo"
        },
        {
          "sp_it": "",
          "text_it": "un solo corpo e un solo spirito."
        },
        {
          "sp_it": "CC",
          "text_it": "Lo Spirito Santo faccia di noi"
        },
        {
          "sp_it": "",
          "text_it": "un’offerta perenne a te gradita,"
        },
        {
          "sp_it": "",
          "text_it": "perché possiamo ottenere il regno promesso con i tuoi eletti:"
        },
        {
          "sp_it": "",
          "text_it": "con la beata Maria, Vergine e Madre di Dio,"
        },
        {
          "sp_it": "",
          "text_it": "san Giuseppe, suo sposo,"
        },
        {
          "sp_it": "",
          "text_it": "i tuoi santi apostoli,"
        },
        {
          "sp_it": "",
          "text_it": "i gloriosi martiri,"
        },
        {
          "sp_it": "",
          "text_it": "[san N.: santo del giorno o patrono]"
        },
        {
          "sp_it": "",
          "text_it": "e tutti i santi, nostri intercessori presso di te."
        },
        {
          "sp_it": "",
          "text_it": "Ti preghiamo, o Padre:"
        },
        {
          "sp_it": "",
          "text_it": "questo sacrificio della nostra riconciliazione"
        },
        {
          "sp_it": "",
          "text_it": "doni pace e salvezza al mondo intero."
        },
        {
          "sp_it": "",
          "text_it": "Conferma nella fede e nell’amore"
        },
        {
          "sp_it": "",
          "text_it": "la tua Chiesa pellegrina sulla terra:"
        },
        {
          "sp_it": "",
          "text_it": "il tuo servo e nostro papa N.,"
        },
        {
          "sp_it": "",
          "text_it": "il nostro vescovo N.*, l’ordine episcopale,"
        },
        {
          "sp_it": "",
          "text_it": "i presbiteri, i diaconi"
        },
        {
          "sp_it": "",
          "text_it": "e il popolo che tu hai redento."
        },
        {
          "sp_it": "",
          "text_it": "†"
        },
        {
          "sp_it": "",
          "text_it": "Intercessioni particolari"
        },
        {
          "sp_it": "",
          "text_it": "Dalla Veglia Pasquale alla II domenica di Pasqua"
        },
        {
          "sp_it": "",
          "text_it": "Per il Battesimo degli adulti"
        },
        {
          "sp_it": "",
          "text_it": "† Sostieni nell’impegno cristiano i tuoi figli [N. e N.],"
        },
        {
          "sp_it": "",
          "text_it": "che oggi mediante il lavacro della rigenerazione"
        },
        {
          "sp_it": "",
          "text_it": "[e il dono dello Spirito Santo]"
        },
        {
          "sp_it": "",
          "text_it": "hai chiamato a far parte del tuo popolo:"
        },
        {
          "sp_it": "",
          "text_it": "con il tuo aiuto possano camminare sempre in novità di vita."
        },
        {
          "rubric_it": "★ Per il Battesimo dei bambini"
        },
        {
          "sp_it": "",
          "text_it": "† Assisti i nostri fratelli [N. e N.],"
        },
        {
          "sp_it": "",
          "text_it": "che oggi hai liberato dal peccato"
        },
        {
          "sp_it": "",
          "text_it": "e rigenerato dall’acqua e dallo Spirito Santo:"
        },
        {
          "sp_it": "",
          "text_it": "tu che li hai inseriti come membra vive nel corpo di Cristo"
        },
        {
          "sp_it": "",
          "text_it": "scrivi i loro nomi nel libro della vita."
        },
        {
          "rubric_it": "* Qui è permesso nominare anche il vescovo coadiutore o gli ausiliari,"
        },
        {
          "sp_it": "2C",
          "text_it": "come indicato al n. 149 dell’Ordinamento Generale del Messale Romano ."
        },
        {
          "sp_it": "",
          "text_it": "Ascolta la preghiera di questa famiglia"
        },
        {
          "sp_it": "",
          "text_it": "che hai convocato alla tua presenza † [.]"
        },
        {
          "rubric_it": "★ D omenica"
        },
        {
          "rubric_it": "Si può dire in tutte le domeniche, a esclusione di quando c’è un altro ricordo proprio."
        },
        {
          "sp_it": "",
          "text_it": "† nel giorno in cui Cristo ha vinto la morte"
        },
        {
          "sp_it": "",
          "text_it": "e ci ha resi partecipi della sua vita immortale."
        },
        {
          "rubric_it": "★ Natale del Signore e Ottava"
        },
        {
          "sp_it": "",
          "text_it": "† nel giorno santissimo [nella notte santissima]"
        },
        {
          "sp_it": "",
          "text_it": "in cui la V ergine Maria diede al mondo il Salvatore."
        },
        {
          "rubric_it": "★ Epifania del Signore"
        },
        {
          "sp_it": "",
          "text_it": "† nel giorno santissimo in cui il tuo unico Figlio,"
        },
        {
          "sp_it": "",
          "text_it": "eterno con te nella gloria,"
        },
        {
          "sp_it": "",
          "text_it": "si è manifestato nella nostra natura umana."
        },
        {
          "sp_it": "",
          "text_it": "Per il ricordo proprio delle altre solennità cf. p. 436."
        },
        {
          "sp_it": "",
          "text_it": "Per la Confermazione"
        },
        {
          "sp_it": "",
          "text_it": "† Ricordati anche dei tuoi figli [N. e N.],"
        },
        {
          "sp_it": "",
          "text_it": "che, rigenerati nel Battesimo,"
        },
        {
          "sp_it": "",
          "text_it": "oggi hai confermato con il sigillo dello Spirito Santo:"
        },
        {
          "sp_it": "",
          "text_it": "custodisci in loro il dono del tuo amore."
        },
        {
          "rubric_it": "★ Per la Messa di prima Comunione"
        },
        {
          "sp_it": "",
          "text_it": "† Assisti i tuoi figli [N. e N.],"
        },
        {
          "sp_it": "",
          "text_it": "che oggi per la prima volta raduni alla mensa della tua famiglia"
        },
        {
          "sp_it": "",
          "text_it": "nella partecipazione al pane della vita e al calice della salvezza:"
        },
        {
          "sp_it": "",
          "text_it": "concedi loro di crescere sempre nella tua amicizia"
        },
        {
          "sp_it": "",
          "text_it": "e nella comunione con la tua Chiesa."
        },
        {
          "sp_it": "",
          "text_it": "Per il Matrimonio"
        },
        {
          "sp_it": "",
          "text_it": "† Sostieni nella grazia del Matrimonio N. e N.,"
        },
        {
          "sp_it": "",
          "text_it": "che hai condotto felicemente al giorno delle nozze:"
        },
        {
          "sp_it": "",
          "text_it": "con il tuo aiuto custodiscano per tutta la vita"
        },
        {
          "sp_it": "",
          "text_it": "l’alleanza sponsale che hanno stretto davanti a te."
        },
        {
          "rubric_it": "★ Giovedì Santo alla Messa vespertina"
        },
        {
          "sp_it": "",
          "text_it": "« Cena del Signore»"
        },
        {
          "sp_it": "",
          "text_it": "† nel giorno santissimo nel quale Gesù Cristo nostro Signore"
        },
        {
          "sp_it": "",
          "text_it": "fu consegnato alla morte per noi."
        },
        {
          "rubric_it": "★ Dalla Veglia Pasquale alla II domenica di Pasqua"
        },
        {
          "sp_it": "",
          "text_it": "† nel giorno glorioso [nella notte gloriosa]"
        },
        {
          "sp_it": "",
          "text_it": "della risurrezione di Cristo Signore"
        },
        {
          "sp_it": "",
          "text_it": "nel suo vero corpo."
        },
        {
          "rubric_it": "★ Ascensione del Signore"
        },
        {
          "sp_it": "",
          "text_it": "† nel giorno glorioso dell’Ascensione"
        },
        {
          "sp_it": "",
          "text_it": "in cui Cristo è stato costituito"
        },
        {
          "sp_it": "",
          "text_it": "Signore del cielo e della terra."
        },
        {
          "rubric_it": "★ Domenica di Pentecoste"
        },
        {
          "sp_it": "",
          "text_it": "† nel giorno santissimo in cui l’effusione del tuo Spirito"
        },
        {
          "sp_it": "",
          "text_it": "l’ha costituita sacramento di unità per tutti i popoli."
        },
        {
          "sp_it": "",
          "text_it": "Ricongiungi a te, Padre misericordioso,"
        },
        {
          "sp_it": "",
          "text_it": "tutti i tuoi figli ovunque dispersi."
        },
        {
          "sp_it": "",
          "text_it": "† Accogli nel tuo regno"
        },
        {
          "sp_it": "",
          "text_it": "i nostri fratelli e sorelle defunti,"
        },
        {
          "sp_it": "",
          "text_it": "e tutti coloro che, in pace con te,"
        },
        {
          "sp_it": "",
          "text_it": "hanno lasciato questo mondo;"
        },
        {
          "sp_it": "",
          "text_it": "concedi anche a noi di ritrovarci insieme"
        },
        {
          "sp_it": "",
          "text_it": "a godere per sempre della tua gloria,"
        },
        {
          "sp_it": "",
          "text_it": "congiunge le mani,"
        },
        {
          "sp_it": "",
          "text_it": "in Cristo, nostro Signore,"
        },
        {
          "sp_it": "",
          "text_it": "per mezzo del quale tu, o Dio,"
        },
        {
          "sp_it": "",
          "text_it": "doni al mondo ogni bene."
        },
        {
          "rubric_it": "Quando questa Preghiera Eucaristica viene usata nelle Messe per i defunti, si può dire:"
        },
        {
          "sp_it": "",
          "text_it": "† Ricordati del nostro fratello N."
        },
        {
          "sp_it": "",
          "text_it": "[della nostra sorella N.]"
        },
        {
          "sp_it": "",
          "text_it": "che [oggi] hai chiamato a te da questa vita,"
        },
        {
          "sp_it": "",
          "text_it": "e come per il Battesimo"
        },
        {
          "sp_it": "",
          "text_it": "l’hai unito[a] alla morte di Cristo, tuo Figlio,"
        },
        {
          "sp_it": "",
          "text_it": "così rendilo[a] partecipe della sua risurrezione,"
        },
        {
          "sp_it": "",
          "text_it": "quando egli farà sorgere i morti dalla terra"
        },
        {
          "sp_it": "",
          "text_it": "e trasfigurerà il nostro corpo mortale"
        },
        {
          "sp_it": "",
          "text_it": "per conformarlo al suo corpo glorioso."
        },
        {
          "sp_it": "",
          "text_it": "Accogli nel tuo regno"
        },
        {
          "sp_it": "",
          "text_it": "i nostri fratelli e sorelle defunti,"
        },
        {
          "sp_it": "",
          "text_it": "e tutti coloro che, in pace con te,"
        },
        {
          "sp_it": "",
          "text_it": "hanno lasciato questo mondo;"
        },
        {
          "sp_it": "",
          "text_it": "concedi anche a noi di ritrovarci insieme"
        },
        {
          "sp_it": "",
          "text_it": "a godere della tua gloria"
        },
        {
          "sp_it": "",
          "text_it": "quando, asciugata ogni lacrima,"
        },
        {
          "sp_it": "",
          "text_it": "i nostri occhi vedranno il tuo volto"
        },
        {
          "sp_it": "",
          "text_it": "e noi saremo simili a te,"
        },
        {
          "sp_it": "",
          "text_it": "e canteremo per sempre la tua lode,"
        },
        {
          "sp_it": "",
          "text_it": "congiunge le mani,"
        },
        {
          "sp_it": "",
          "text_it": "in Cristo, nostro Signore,"
        },
        {
          "sp_it": "",
          "text_it": "per mezzo del quale tu, o Dio,"
        },
        {
          "sp_it": "",
          "text_it": "doni al mondo ogni bene."
        },
        {
          "sp_it": "",
          "text_it": "Prende sia la patena con l’ostia sia il calice ed elevandoli insieme canta o dice:"
        },
        {
          "sp_it": "",
          "text_it": "P er Cristo, con Cristo e in Cristo,"
        },
        {
          "sp_it": "",
          "text_it": "a te, Dio Padre onnipotente,"
        },
        {
          "sp_it": "",
          "text_it": "nell’unità dello Spirito Santo,"
        },
        {
          "sp_it": "",
          "text_it": "ogni onore e gloria"
        },
        {
          "sp_it": "",
          "text_it": "per tutti i secoli dei secoli."
        },
        {
          "sp_it": "Tutti",
          "text_it": "Amen."
        },
        {
          "sp_it": "CP",
          "text_it": "o"
        }
      ],
      "4": [
        {
          "sp_it": "",
          "text_it": "Il prefazio di questa Preghiera Eucaristica non può essere sostituito con altri, in ragione"
        },
        {
          "sp_it": "",
          "text_it": "della struttura della stessa Preghiera Eucaristica, che offre un compendio della storia"
        },
        {
          "sp_it": "",
          "text_it": "della salvezza."
        },
        {
          "sp_it": "",
          "text_it": "V/ . Il Signore sia con voi."
        },
        {
          "sp_it": "",
          "text_it": "R/ . E con il tuo spirito."
        },
        {
          "sp_it": "",
          "text_it": "V/ . In alto i nostri cuori."
        },
        {
          "sp_it": "",
          "text_it": "R/ . S ono rivolti al Signore."
        },
        {
          "sp_it": "",
          "text_it": "V/ . Rendiamo grazie al Signore nostro Dio."
        },
        {
          "sp_it": "",
          "text_it": "R/ . È c osa buona e giusta."
        },
        {
          "sp_it": "",
          "text_it": "È veramente giusto renderti grazie,"
        },
        {
          "sp_it": "",
          "text_it": "è bello cantare la tua gloria, *"
        },
        {
          "sp_it": "",
          "text_it": "Padre santo, unico Dio vivo e vero: *"
        },
        {
          "sp_it": "",
          "text_it": "prima del tempo e in eterno tu sei, +"
        },
        {
          "sp_it": "",
          "text_it": "nel tuo regno di luce inaccessibile. **"
        },
        {
          "sp_it": "",
          "text_it": "Tu solo sei buono e fonte della vita, *"
        },
        {
          "sp_it": "",
          "text_it": "e hai dato origine all’universo *"
        },
        {
          "sp_it": "",
          "text_it": "per effondere le tue benedizioni su tutte le creature +"
        },
        {
          "sp_it": "",
          "text_it": "e allietarle con gli splendori della tua luce. **"
        },
        {
          "sp_it": "",
          "text_it": "Schiere innumerevoli di angeli"
        },
        {
          "sp_it": "",
          "text_it": "stanno davanti a te per servirti, *"
        },
        {
          "sp_it": "",
          "text_it": "contemplano la gloria del tuo volto, *"
        },
        {
          "sp_it": "",
          "text_it": "e giorno e notte + cantano la tua lode. **"
        },
        {
          "sp_it": "",
          "text_it": "Insieme con loro anche noi,"
        },
        {
          "sp_it": "",
          "text_it": "fatti voce di ogni creatura che è sotto il cielo, *"
        },
        {
          "sp_it": "",
          "text_it": "confessiamo il tuo nome +"
        },
        {
          "sp_it": "",
          "text_it": "ed esultanti cantiamo: **"
        },
        {
          "sp_it": "",
          "text_it": "Santo, Santo, Santo"
        },
        {
          "sp_it": "",
          "text_it": "il Signore Dio dell’universo."
        },
        {
          "sp_it": "",
          "text_it": "I cieli e la terra sono pieni della tua gloria."
        },
        {
          "sp_it": "",
          "text_it": "Osanna nell’alto dei cieli."
        },
        {
          "sp_it": "",
          "text_it": "Benedetto colui che viene nel nome del Signore."
        },
        {
          "sp_it": "",
          "text_it": "Osanna nell’alto dei cieli."
        },
        {
          "sp_it": "CP",
          "text_it": "439Preghiera Eucaristica IV"
        },
        {
          "rubric_it": "Il sacerdote, con le braccia allargate, dice:"
        },
        {
          "sp_it": "C",
          "text_it": "Noi ti lodiamo, Padre santo,"
        },
        {
          "sp_it": "",
          "text_it": "per la tua grandezza:"
        },
        {
          "sp_it": "",
          "text_it": "tu hai fatto ogni cosa"
        },
        {
          "sp_it": "",
          "text_it": "con sapienza e amore."
        },
        {
          "sp_it": "",
          "text_it": "Hai creato l’uomo a tua immagine,"
        },
        {
          "sp_it": "",
          "text_it": "alle sue mani hai affdato la cura del mondo intero"
        },
        {
          "sp_it": "",
          "text_it": "perché nell’obbedienza a te, unico creatore,"
        },
        {
          "sp_it": "",
          "text_it": "esercitasse la signoria su tutte le creature."
        },
        {
          "sp_it": "",
          "text_it": "E quando, per la sua disobbedienza,"
        },
        {
          "sp_it": "",
          "text_it": "l’uomo perse la tua amicizia,"
        },
        {
          "sp_it": "",
          "text_it": "tu non l’hai abbandonato in potere della morte,"
        },
        {
          "sp_it": "",
          "text_it": "ma, nella tua misericordia, a tutti sei venuto incontro,"
        },
        {
          "sp_it": "",
          "text_it": "perché coloro che ti cercano ti possano trovare."
        },
        {
          "sp_it": "",
          "text_it": "Molte volte hai offerto agli uomini la tua alleanza"
        },
        {
          "sp_it": "",
          "text_it": "e per mezzo dei profeti"
        },
        {
          "sp_it": "",
          "text_it": "hai insegnato a sperare nella salvezza."
        },
        {
          "sp_it": "",
          "text_it": "Padre santo, hai tanto amato il mondo"
        },
        {
          "sp_it": "",
          "text_it": "da mandare a noi, nella pienezza dei tempi,"
        },
        {
          "sp_it": "",
          "text_it": "il tuo unigenito Figlio come salvatore."
        },
        {
          "sp_it": "",
          "text_it": "Egli si è fatto uomo per opera dello Spirito Santo"
        },
        {
          "sp_it": "",
          "text_it": "ed è nato dalla Vergine Maria;"
        },
        {
          "sp_it": "",
          "text_it": "ha condiviso in tutto, eccetto il peccato,"
        },
        {
          "sp_it": "",
          "text_it": "la nostra condizione umana."
        },
        {
          "sp_it": "",
          "text_it": "Ai poveri annunciò il Vangelo di salvezza,"
        },
        {
          "sp_it": "",
          "text_it": "la libertà ai prigionieri,"
        },
        {
          "sp_it": "",
          "text_it": "agli affitti la gioia."
        },
        {
          "sp_it": "",
          "text_it": "Per attuare il tuo disegno di redenzione"
        },
        {
          "sp_it": "",
          "text_it": "consegnò se stesso alla morte"
        },
        {
          "sp_it": "",
          "text_it": "e risorgendo distrusse la morte e rinnovò la vita."
        },
        {
          "sp_it": "",
          "text_it": "E perché non vivessimo più per noi stessi"
        },
        {
          "sp_it": "",
          "text_it": "ma per lui che è morto e risorto per noi,"
        },
        {
          "sp_it": "",
          "text_it": "ha mandato, o Padre, lo Spirito Santo,"
        },
        {
          "sp_it": "",
          "text_it": "primo dono ai credenti,"
        },
        {
          "sp_it": "",
          "text_it": "a perfezionare la sua opera nel mondo"
        },
        {
          "sp_it": "",
          "text_it": "e compiere ogni santificazione."
        },
        {
          "sp_it": "CP",
          "text_it": "Congiunge le mani e, tenendole stese sulle offerte, dice:"
        },
        {
          "sp_it": "",
          "text_it": "Ora ti preghiamo, o Padre:"
        },
        {
          "sp_it": "",
          "text_it": "venga il tuo santo Spirito"
        },
        {
          "sp_it": "",
          "text_it": "a santificare questi doni"
        },
        {
          "sp_it": "",
          "text_it": "congiunge le mani e traccia un unico segno di croce sul pane e sul calice, dicendo:"
        },
        {
          "sp_it": "",
          "text_it": "perché diventino il Corpo e ^ il Sangue"
        },
        {
          "sp_it": "",
          "text_it": "del Signore nostro, Gesù Cristo,"
        },
        {
          "sp_it": "",
          "text_it": "congiunge le mani,"
        },
        {
          "sp_it": "",
          "text_it": "nella celebrazione di questo grande mistero,"
        },
        {
          "sp_it": "",
          "text_it": "che ci ha lasciato come alleanza eterna."
        },
        {
          "rubric_it": "Nelle formule seguenti, le parole del Signore si pronuncino con voce chiara e distinta,"
        },
        {
          "sp_it": "",
          "text_it": "come è richiesto dalla loro natura."
        },
        {
          "sp_it": "",
          "text_it": "Egli, venuta l’ora di essere glorificato da te,"
        },
        {
          "sp_it": "",
          "text_it": "Padre santo,"
        },
        {
          "sp_it": "",
          "text_it": "avendo amato i suoi che erano nel mondo,"
        },
        {
          "sp_it": "",
          "text_it": "li amò sino alla fine;"
        },
        {
          "sp_it": "",
          "text_it": "e mentre cenava con loro,"
        },
        {
          "sp_it": "",
          "text_it": "prende il pane e, tenendolo leggermente sollevato sull’altare, prosegue:"
        },
        {
          "sp_it": "",
          "text_it": "prese il pane, pronunciò la benedizione,"
        },
        {
          "sp_it": "",
          "text_it": "lo spezzò, lo diede ai suoi discepoli e disse:"
        },
        {
          "sp_it": "",
          "text_it": "si inchina leggermente,"
        },
        {
          "sp_it": "",
          "text_it": "Prendete, e mangiatene tutti:"
        },
        {
          "sp_it": "",
          "text_it": "questo è il mio Corpo"
        },
        {
          "sp_it": "",
          "text_it": "offerto in sacrificio per voi."
        },
        {
          "sp_it": "",
          "text_it": "Presenta al popolo l’ostia consacrata, la depone sulla patena e genuflette in adorazione."
        },
        {
          "rubric_it": "Poi prosegue:"
        },
        {
          "sp_it": "",
          "text_it": "Allo stesso modo, dopo aver cenato,"
        },
        {
          "sp_it": "",
          "text_it": "prende il calice e, tenendolo leggermente sollevato sull’altare, prosegue:"
        },
        {
          "sp_it": "",
          "text_it": "prese il calice,"
        },
        {
          "sp_it": "",
          "text_it": "ti rese grazie con la preghiera di benedizione,"
        },
        {
          "sp_it": "",
          "text_it": "lo diede ai suoi discepoli e disse:"
        },
        {
          "sp_it": "",
          "text_it": "si inchina leggermente,"
        },
        {
          "sp_it": "CC",
          "text_it": "441Preghiera Eucaristica IV"
        },
        {
          "sp_it": "",
          "text_it": "Prendete, e bevetene tutti:"
        },
        {
          "sp_it": "",
          "text_it": "questo è il calice del mio Sangue,"
        },
        {
          "sp_it": "",
          "text_it": "per la nuova ed eterna alleanza,"
        },
        {
          "sp_it": "",
          "text_it": "versato per voi e per tutti"
        },
        {
          "sp_it": "",
          "text_it": "in remissione dei peccati."
        },
        {
          "sp_it": "",
          "text_it": "Fate questo in memoria di me."
        },
        {
          "sp_it": "",
          "text_it": "Presenta al popolo il calice, lo depone sul corporale e genuflette in adorazione."
        },
        {
          "rubric_it": "Quindi, il sacerdote canta o dice:"
        },
        {
          "sp_it": "",
          "text_it": "Mistero della fede."
        },
        {
          "rubric_it": "Il popolo prosegue acclamando:"
        },
        {
          "sp_it": "",
          "text_it": "Annunciamo la tua morte, Signore,"
        },
        {
          "sp_it": "",
          "text_it": "proclamiamo la tua risurrezione,"
        },
        {
          "sp_it": "",
          "text_it": "nell’attesa della tua venuta."
        },
        {
          "rubric_it": "Oppure:"
        },
        {
          "sp_it": "",
          "text_it": "Ogni volta che mangiamo di questo pane"
        },
        {
          "sp_it": "",
          "text_it": "e beviamo a questo calice,"
        },
        {
          "sp_it": "",
          "text_it": "annunciamo la tua morte, Signore,"
        },
        {
          "sp_it": "",
          "text_it": "nell’attesa della tua venuta."
        },
        {
          "rubric_it": "Oppure:"
        },
        {
          "sp_it": "",
          "text_it": "Tu ci hai redenti con la tua croce"
        },
        {
          "sp_it": "",
          "text_it": "e la tua risurrezione:"
        },
        {
          "sp_it": "",
          "text_it": "salvaci, o Salvatore del mondo."
        },
        {
          "rubric_it": "Quindi, con le braccia allargate, il sacerdote dice:"
        },
        {
          "sp_it": "",
          "text_it": "In questo memoriale della nostra redenzione"
        },
        {
          "sp_it": "",
          "text_it": "celebriamo, o Padre, la morte di Cristo,"
        },
        {
          "sp_it": "",
          "text_it": "la sua discesa agli inferi,"
        },
        {
          "sp_it": "",
          "text_it": "proclamiamo la sua risurrezione"
        },
        {
          "sp_it": "",
          "text_it": "e ascensione al cielo, dove siede alla tua destra;"
        },
        {
          "sp_it": "CC",
          "text_it": "e, in attesa della sua venuta nella gloria,"
        },
        {
          "sp_it": "",
          "text_it": "ti offriamo il suo Corpo e il suo Sangue,"
        },
        {
          "sp_it": "",
          "text_it": "sacrificio a te gradito e fonte di salvezza per il mondo intero."
        },
        {
          "sp_it": "",
          "text_it": "Guarda con amore, o Dio,"
        },
        {
          "sp_it": "",
          "text_it": "il sacrificio che tu stesso hai preparato per la tua Chiesa,"
        },
        {
          "sp_it": "",
          "text_it": "e a tutti coloro che parteciperanno"
        },
        {
          "sp_it": "",
          "text_it": "a quest’unico pane e a quest’unico calice"
        },
        {
          "sp_it": "",
          "text_it": "concedi che, riuniti in un solo corpo dallo Spirito Santo,"
        },
        {
          "sp_it": "",
          "text_it": "diventino offerta viva in Cristo,"
        },
        {
          "sp_it": "",
          "text_it": "a lode della tua gloria."
        },
        {
          "sp_it": "",
          "text_it": "Ora, Padre, ricordati di tutti quelli"
        },
        {
          "sp_it": "",
          "text_it": "per i quali noi ti offriamo questo sacrificio:"
        },
        {
          "sp_it": "",
          "text_it": "del tuo servo e nostro papa N.,"
        },
        {
          "sp_it": "",
          "text_it": "del nostro vescovo N.*, dell’ordine episcopale,"
        },
        {
          "sp_it": "",
          "text_it": "dei presbiteri, dei diaconi,"
        },
        {
          "sp_it": "",
          "text_it": "di coloro che si uniscono alla nostra offerta,"
        },
        {
          "sp_it": "",
          "text_it": "di quanti sono qui riuniti, †"
        },
        {
          "sp_it": "",
          "text_it": "Intercessioni particolari"
        },
        {
          "sp_it": "",
          "text_it": "Per il Battesimo"
        },
        {
          "sp_it": "",
          "text_it": "† dei nostri fratelli [N. e N.],"
        },
        {
          "sp_it": "",
          "text_it": "che oggi hai rigenerato dall’acqua e dallo Spirito Santo,"
        },
        {
          "rubric_it": "★ Per la Confermazione"
        },
        {
          "sp_it": "",
          "text_it": "† dei tuoi figli [N. e N.],"
        },
        {
          "sp_it": "",
          "text_it": "che oggi hai confermato con il sigillo dello Spirito Santo,"
        },
        {
          "rubric_it": "★ Per la Messa di prima comunione"
        },
        {
          "sp_it": "",
          "text_it": "† dei tuoi figli [N. e N.],"
        },
        {
          "sp_it": "",
          "text_it": "che oggi per la prima volta raduni alla mensa della tua famiglia"
        },
        {
          "sp_it": "",
          "text_it": "nella partecipazione al pane della vita e al calice della salvezza,"
        },
        {
          "rubric_it": "★ Per il Matrimonio"
        },
        {
          "sp_it": "",
          "text_it": "† dei tuoi figli N. e N.,"
        },
        {
          "sp_it": "",
          "text_it": "che in Cristo hanno costituito una nuova famiglia,"
        },
        {
          "rubric_it": "* Qui è permesso nominare anche il vescovo coadiutore o gli ausiliari,"
        },
        {
          "sp_it": "1C",
          "text_it": "come indicato al n. 149 dell’Ordinamento Generale del Messale Romano ."
        },
        {
          "sp_it": "",
          "text_it": "443Preghiera Eucaristica IV"
        },
        {
          "sp_it": "",
          "text_it": "dell’intero tuo popolo,"
        },
        {
          "sp_it": "",
          "text_it": "e di tutti quelli che ti cercano con cuore sincero."
        },
        {
          "sp_it": "",
          "text_it": "Ricordati anche di coloro"
        },
        {
          "sp_it": "",
          "text_it": "che sono morti nella pace del tuo Cristo,"
        },
        {
          "sp_it": "",
          "text_it": "e di tutti i defunti,"
        },
        {
          "sp_it": "",
          "text_it": "dei quali tu solo hai conosciuto la fede."
        },
        {
          "sp_it": "",
          "text_it": "Padre misericordioso,"
        },
        {
          "sp_it": "",
          "text_it": "concedi a tutti noi, tuoi figli, di ottenere"
        },
        {
          "sp_it": "",
          "text_it": "con la beata Maria, Vergine e Madre di Dio,"
        },
        {
          "sp_it": "",
          "text_it": "con san Giuseppe, suo sposo,"
        },
        {
          "sp_it": "",
          "text_it": "gli apostoli e i santi,"
        },
        {
          "sp_it": "",
          "text_it": "l’eredità eterna nel tuo regno,"
        },
        {
          "sp_it": "",
          "text_it": "dove con tutte le creature,"
        },
        {
          "sp_it": "",
          "text_it": "liberate dalla corruzione del peccato e della morte,"
        },
        {
          "sp_it": "",
          "text_it": "canteremo la tua gloria,"
        },
        {
          "sp_it": "",
          "text_it": "in Cristo nostro Signore,"
        },
        {
          "sp_it": "",
          "text_it": "congiunge le mani,"
        },
        {
          "sp_it": "",
          "text_it": "per mezzo del quale tu, o Dio,"
        },
        {
          "sp_it": "",
          "text_it": "doni al mondo ogni bene."
        },
        {
          "sp_it": "",
          "text_it": "Prende sia la patena con l’ostia sia il calice ed elevandoli insieme canta o dice:"
        },
        {
          "sp_it": "",
          "text_it": "Per Cristo, con Cristo e in Cristo,"
        },
        {
          "sp_it": "",
          "text_it": "a te, Dio Padre onnipotente,"
        },
        {
          "sp_it": "",
          "text_it": "nell’unità dello Spirito Santo,"
        },
        {
          "sp_it": "",
          "text_it": "ogni onore e gloria"
        },
        {
          "sp_it": "",
          "text_it": "per tutti i secoli dei secoli."
        },
        {
          "sp_it": "Tutti",
          "text_it": "Amen."
        },
        {
          "sp_it": "CP",
          "text_it": "o"
        }
      ]
    },
    "amen": [
      {
        "sp_it": "C",
        "text_it": "Per Cristo, con Cristo e in Cristo, a te, Dio Padre onnipotente, nell'unità dello Spirito Santo, ogni onore e gloria per tutti i secoli dei secoli."
      },
      {
        "sp_it": "Tutti",
        "text_it": "Amen."
      }
    ]
  },
  {
    "id": "3.4 lords_prayer",
    "type": "part",
    "header": {
      "it": "Riti di Comunione — Padre nostro"
    },
    "lines": [
      {
        "rubric_it": "Il sacerdote, deposti il calice e la patena, a mani giunte, canta o dice:"
      },
      {
        "sp_it": "C",
        "text_it": "Obbedienti alla parola del Salvatore"
      },
      {
        "sp_it": "",
        "text_it": "e formati al suo divino insegnamento,"
      },
      {
        "sp_it": "",
        "text_it": "osiamo dire:"
      },
      {
        "rubric_it": "★"
      },
      {
        "rubric_it": "Oppure:"
      },
      {
        "sp_it": "",
        "text_it": "Il Signore ci ha donato il suo Spirito."
      },
      {
        "sp_it": "",
        "text_it": "Con la fiducia e la libertà dei figli"
      },
      {
        "sp_it": "",
        "text_it": "preghiamo insieme:"
      },
      {
        "rubric_it": "★"
      },
      {
        "rubric_it": "Oppure:"
      },
      {
        "rubric_it": "Prima di partecipare al banchetto dell’Eucaristia,"
      },
      {
        "sp_it": "",
        "text_it": "segno di riconciliazione"
      },
      {
        "sp_it": "",
        "text_it": "e vincolo di comunione fraterna,"
      },
      {
        "sp_it": "",
        "text_it": "preghiamo insieme come il Signore"
      },
      {
        "sp_it": "",
        "text_it": "ci ha insegnato:"
      },
      {
        "rubric_it": "★"
      },
      {
        "rubric_it": "Oppure:"
      },
      {
        "sp_it": "",
        "text_it": "Guidati dallo Spirito di Gesù"
      },
      {
        "sp_it": "",
        "text_it": "e illuminati dalla sapienza del Vangelo,"
      },
      {
        "sp_it": "",
        "text_it": "osiamo dire:"
      },
      {
        "sp_it": "",
        "text_it": "Allarga le braccia e canta o dice insieme al popolo:"
      },
      {
        "sp_it": "",
        "text_it": "445Riti di Comunione"
      },
      {
        "sp_it": "",
        "text_it": "Padre nostro che sei nei cieli,"
      },
      {
        "sp_it": "",
        "text_it": "sia santificato il tuo nome,"
      },
      {
        "sp_it": "",
        "text_it": "venga il tuo regno,"
      },
      {
        "sp_it": "",
        "text_it": "sia fatta la tua volontà,"
      },
      {
        "sp_it": "",
        "text_it": "come in cielo così in terra."
      },
      {
        "sp_it": "",
        "text_it": "Dacci oggi il nostro pane quotidiano,"
      },
      {
        "sp_it": "",
        "text_it": "e rimetti a noi i nostri debiti"
      },
      {
        "sp_it": "",
        "text_it": "come anche noi li rimettiamo ai nostri debitori,"
      },
      {
        "sp_it": "",
        "text_it": "e non abbandonarci alla tentazione,"
      },
      {
        "sp_it": "",
        "text_it": "ma liberaci dal male."
      },
      {
        "sp_it": "",
        "text_it": "Oppure in canto:"
      },
      {
        "sp_it": "",
        "text_it": "Pater noster, qui es in caelis:"
      },
      {
        "sp_it": "",
        "text_it": "sanctificétur nomen tuum;"
      },
      {
        "sp_it": "",
        "text_it": "advéniat regnum tuum;"
      },
      {
        "sp_it": "",
        "text_it": "fiat volúntas tua, sicut in caelo, et in terra."
      },
      {
        "sp_it": "",
        "text_it": "Panem nostrum cotidiánum da nobis hódie;"
      },
      {
        "sp_it": "",
        "text_it": "et dimítte nobis débita nostra,"
      },
      {
        "sp_it": "",
        "text_it": "sicut et nos dimíttimus debitóribus nostris;"
      },
      {
        "sp_it": "",
        "text_it": "et ne nos indúcas in tentatiónem;"
      },
      {
        "sp_it": "",
        "text_it": "sed líbera nos a malo."
      },
      {
        "sp_it": "",
        "text_it": "Solo il sacerdote, con le braccia allargate, continua:"
      },
      {
        "sp_it": "",
        "text_it": "Liberaci, o Signore, da tutti i mali,"
      },
      {
        "sp_it": "",
        "text_it": "concedi la pace ai nostri giorni,"
      },
      {
        "sp_it": "",
        "text_it": "e con l’aiuto della tua misericordia"
      },
      {
        "sp_it": "",
        "text_it": "vivremo sempre liberi dal peccato"
      },
      {
        "sp_it": "",
        "text_it": "e sicuri da ogni turbamento,"
      },
      {
        "sp_it": "",
        "text_it": "nell’attesa che si compia la beata speranza"
      },
      {
        "sp_it": "",
        "text_it": "e venga il nostro salvatore Gesù Cristo."
      },
      {
        "sp_it": "",
        "text_it": "Congiunge le mani."
      },
      {
        "rubric_it": "Il popolo conclude la preghiera con l’acclamazione:"
      },
      {
        "sp_it": "",
        "text_it": "T uo è il regno,"
      },
      {
        "sp_it": "",
        "text_it": "tua la potenza e la gloria nei secoli."
      },
      {
        "rubric_it": "Il sacerdote, con le braccia allargate, dice ad alta voce:"
      }
    ]
  },
  {
    "id": "3.5 peace",
    "type": "part",
    "header": {
      "it": "Rito della pace"
    },
    "lines": [
      {
        "sp_it": "",
        "text_it": "447Riti di Comunione"
      },
      {
        "sp_it": "",
        "text_it": "Signore Gesù Cristo,"
      },
      {
        "sp_it": "",
        "text_it": "che hai detto ai tuoi apostoli:"
      },
      {
        "sp_it": "",
        "text_it": "«Vi lascio la pace, vi do la mia pace»,"
      },
      {
        "sp_it": "",
        "text_it": "non guardare ai nostri peccati,"
      },
      {
        "sp_it": "",
        "text_it": "ma alla fede della tua Chiesa,"
      },
      {
        "sp_it": "",
        "text_it": "e donale unità e pace"
      },
      {
        "sp_it": "",
        "text_it": "secondo la tua volontà."
      },
      {
        "sp_it": "",
        "text_it": "Congiunge le mani."
      },
      {
        "sp_it": "",
        "text_it": "Tu che vivi e regni nei secoli dei secoli."
      },
      {
        "sp_it": "Tutti",
        "text_it": "Amen."
      },
      {
        "rubric_it": "Il sacerdote, rivolto al popolo, allargando e ricongiungendo le mani, dice:"
      },
      {
        "sp_it": "C",
        "text_it": "La pace del Signore sia sempre con voi."
      },
      {
        "rubric_it": "Il popolo risponde:"
      },
      {
        "sp_it": "Tutti",
        "text_it": "E con il tuo spirito."
      },
      {
        "rubric_it": "Poi, secondo l’opportunità, il diacono, o il sacerdote, aggiunge:"
      },
      {
        "sp_it": "",
        "text_it": "Scambiatevi il dono della pace."
      },
      {
        "rubric_it": "★"
      },
      {
        "rubric_it": "Oppure:"
      },
      {
        "sp_it": "",
        "text_it": "Come figli del Dio della pace,"
      },
      {
        "sp_it": "",
        "text_it": "scambiatevi un gesto di comunione fraterna."
      },
      {
        "rubric_it": "★"
      },
      {
        "rubric_it": "Oppure:"
      },
      {
        "sp_it": "",
        "text_it": "In Cristo, che ci ha resi tutti fratelli con la sua croce,"
      },
      {
        "sp_it": "",
        "text_it": "scambiatevi il dono della pace."
      },
      {
        "rubric_it": "★"
      },
      {
        "rubric_it": "Oppure:"
      },
      {
        "sp_it": "",
        "text_it": "Nello Spirito del Cristo risorto,"
      },
      {
        "sp_it": "",
        "text_it": "scambiatevi il dono della pace."
      },
      {
        "sp_it": "",
        "text_it": "E tutti si scambiano vicendevolmente un gesto di pace, di comunione e di carità secondo"
      },
      {
        "sp_it": "",
        "text_it": "gli usi locali. Il sacerdote dà la pace al diacono o al ministro."
      }
    ]
  },
  {
    "id": "3.6 lamb",
    "type": "part",
    "header": {
      "it": "Frazione del pane — Agnello di Dio"
    },
    "lines": [
      {
        "rubric_it": "Il sacerdote quindi prende l’ostia, la spezza sopra la patena e ne mette un frammento"
      },
      {
        "sp_it": "",
        "text_it": "nel calice, dicendo sottovoce:"
      },
      {
        "sp_it": "",
        "text_it": "Il Corpo e il Sangue del Signore nostro Gesù Cristo,"
      },
      {
        "sp_it": "",
        "text_it": "uniti in questo calice,"
      },
      {
        "sp_it": "",
        "text_it": "siano per noi cibo di vita eterna."
      },
      {
        "sp_it": "",
        "text_it": "Intanto si canta o si dice:"
      },
      {
        "sp_it": "",
        "text_it": "Agnello di Dio, che togli i peccati del mondo,"
      },
      {
        "sp_it": "",
        "text_it": "abbi pietà di noi."
      },
      {
        "sp_it": "",
        "text_it": "Agnello di Dio, che togli i peccati del mondo,"
      },
      {
        "sp_it": "",
        "text_it": "abbi pietà di noi."
      },
      {
        "sp_it": "",
        "text_it": "Agnello di Dio, che togli i peccati del mondo,"
      },
      {
        "sp_it": "",
        "text_it": "dona a noi la pace."
      },
      {
        "sp_it": "",
        "text_it": "Oppure in canto:"
      },
      {
        "sp_it": "",
        "text_it": "Agnus Dei, qui tollis peccáta mundi: miserére nobis."
      },
      {
        "sp_it": "",
        "text_it": "Agnus Dei, qui tollis peccáta mundi: miserére nobis."
      },
      {
        "sp_it": "",
        "text_it": "Agnus Dei, qui tollis peccáta mundi: dona nobis pacem."
      },
      {
        "rubric_it": "Se la frazione del pane si prolunga, l’invocazione si può ripetere più volte; l’ultima invocazione si conclude con le parole: dona a noi la pace [dona nobis pacem]."
      },
      {
        "rubric_it": "Il sacerdote, con le mani giunte, dice sottovoce:"
      },
      {
        "sp_it": "",
        "text_it": "Signore Gesù Cristo, Figlio del Dio vivo,"
      },
      {
        "sp_it": "",
        "text_it": "che per volontà del Padre"
      },
      {
        "sp_it": "",
        "text_it": "e con l’opera dello Spirito Santo"
      },
      {
        "sp_it": "",
        "text_it": "morendo hai dato la vita al mondo,"
      },
      {
        "sp_it": "",
        "text_it": "per il santo mistero del tuo Corpo e del tuo Sangue"
      },
      {
        "sp_it": "",
        "text_it": "liberami da ogni colpa e da ogni male,"
      },
      {
        "sp_it": "",
        "text_it": "fa’ che sia sempre fedele alla tua legge"
      },
      {
        "sp_it": "",
        "text_it": "e non sia mai separato da te."
      },
      {
        "rubric_it": "Oppure:"
      },
      {
        "sp_it": "",
        "text_it": "La comunione al tuo Corpo e al tuo Sangue,"
      },
      {
        "sp_it": "",
        "text_it": "Signore Gesù Cristo,"
      },
      {
        "sp_it": "",
        "text_it": "non diventi per me giudizio di condanna,"
      },
      {
        "sp_it": "",
        "text_it": "ma per tua misericordia"
      },
      {
        "sp_it": "",
        "text_it": "sia rimedio e difesa dell’anima e del corpo."
      }
    ]
  },
  {
    "id": "3.7 communion_rite",
    "type": "part",
    "header": {
      "it": "Comunione"
    },
    "lines": [
      {
        "sp_it": "",
        "text_it": "449Riti di Comunione"
      },
      {
        "rubric_it": "Il sacerdote genuflette, prende l’ostia e tenendola un po’ sollevata sulla patena o sul calice,"
      },
      {
        "sp_it": "",
        "text_it": "rivolto al popolo, dice ad alta voce:"
      },
      {
        "sp_it": "",
        "text_it": "Ecco l’Agnello di Dio,"
      },
      {
        "sp_it": "",
        "text_it": "ecco colui che toglie i peccati del mondo."
      },
      {
        "sp_it": "",
        "text_it": "Beati gli invitati alla cena dell’Agnello."
      },
      {
        "sp_it": "",
        "text_it": "E continua, dicendo insieme con il popolo:"
      },
      {
        "sp_it": "",
        "text_it": "O Signore, non sono degno"
      },
      {
        "sp_it": "",
        "text_it": "di partecipare alla tua mensa,"
      },
      {
        "sp_it": "",
        "text_it": "ma di’ soltanto una parola"
      },
      {
        "sp_it": "",
        "text_it": "e io sarò salvato."
      },
      {
        "rubric_it": "Il sacerdote, rivolto all’altare, dice sottovoce:"
      },
      {
        "sp_it": "",
        "text_it": "Il Corpo di Cristo"
      },
      {
        "sp_it": "",
        "text_it": "mi custodisca per la vita eterna."
      },
      {
        "sp_it": "",
        "text_it": "E con riverenza si comunica al Corpo di Cristo. Poi prende il calice e dice sottovoce:"
      },
      {
        "sp_it": "",
        "text_it": "Il Sangue di Cristo"
      },
      {
        "sp_it": "",
        "text_it": "mi custodisca per la vita eterna."
      },
      {
        "sp_it": "",
        "text_it": "E con riverenza si comunica al Sangue di Cristo."
      },
      {
        "rubric_it": "Mentre il sacerdote si comunica al Corpo di Cristo, si inizia il Canto di comunione"
      },
      {
        "sp_it": "",
        "text_it": "o si proclama l’antifona."
      },
      {
        "rubric_it": "Il sacerdote prende poi la patena o la pisside e si reca verso i comunicandi. Nel presentare"
      },
      {
        "sp_it": "",
        "text_it": "a ognuno l’ostia, la tiene alquanto sollevata e dice:"
      },
      {
        "sp_it": "",
        "text_it": "Il Corpo di Cristo."
      },
      {
        "sp_it": "",
        "text_it": "Il comunicando risponde: Amen."
      },
      {
        "sp_it": "",
        "text_it": "E riceve la comunione."
      },
      {
        "sp_it": "",
        "text_it": "Nello stesso modo si comporta il diacono quando distribuisce la comunione."
      },
      {
        "rubric_it": "Quando si distribuisce la comunione sotto le due specie, si osservi il rito indicato nell’Ordinamento Generale del Messale Romano , nn. 281-2 87."
      },
      {
        "sp_it": "",
        "text_it": "Terminata la distribuzione della comunione, il sacerdote, o il diacono, o l’accolito, alla"
      },
      {
        "sp_it": "",
        "text_it": "credenza o a lato dell’altare, purifica la patena sul calice e quindi il calice."
      },
      {
        "rubric_it": "Mentre purifica la patena e il calice, il sacerdote dice sottovoce:"
      },
      {
        "sp_it": "",
        "text_it": "Il sacramento ricevuto con la bocca"
      },
      {
        "sp_it": "",
        "text_it": "sia accolto con purezza nel nostro spirito, o Signore,"
      },
      {
        "sp_it": "",
        "text_it": "e il dono a noi fatto nel tempo"
      },
      {
        "sp_it": "",
        "text_it": "ci sia rimedio per la vita eterna."
      }
    ]
  },
  {
    "id": "3.8 communion",
    "type": "part",
    "header": {
      "it": "Antifona alla comunione"
    },
    "lines": [
      {
        "sp_it": "",
        "text_it": "(Antifona alla comunione del giorno)"
      }
    ]
  },
  {
    "id": "3.9 prayer_after",
    "type": "part",
    "header": {
      "it": "Dopo la comunione"
    },
    "lines": [
      {
        "sp_it": "C",
        "text_it": "Preghiamo."
      },
      {
        "sp_it": "",
        "text_it": "(Orazione dopo la comunione del giorno)"
      },
      {
        "sp_it": "Tutti",
        "text_it": "Amen."
      }
    ]
  },
  {
    "id": "4. THE CONCLUDING RITES",
    "type": "section",
    "it": "Riti di Conclusione"
  },
  {
    "id": "4.1 announcement",
    "type": "part",
    "header": {
      "it": "Avvisi"
    },
    "lines": [
      {
        "rubric_it": "Dopo l'orazione e prima della benedizione."
      },
      {
        "rubric_it": "Si possono dare brevi comunicazioni al popolo."
      }
    ]
  },
  {
    "id": "4.2 blessing",
    "type": "selectable",
    "header": {
      "it": "Benedizione"
    },
    "variants": {
      "A": {
        "label": {
          "it": "Benedizione"
        },
        "lines": [
          {
            "rubric_it": "Dopo l’orazione e prima della Benedizione si possono dare, quando occorre, brevi"
          },
          {
            "sp_it": "",
            "text_it": "comunicazioni al popolo."
          },
          {
            "rubric_it": "Segue il congedo. Il sacerdote, allargando le braccia, rivolto verso il popolo, dice:"
          },
          {
            "sp_it": "",
            "text_it": "Il Signore sia con voi."
          },
          {
            "rubric_it": "Il popolo risponde:"
          },
          {
            "sp_it": "Tutti",
            "text_it": "E con il tuo spirito."
          },
          {
            "rubric_it": "Il sacerdote benedice il popolo:"
          },
          {
            "sp_it": "",
            "text_it": "Vi benedica Dio onnipotente,"
          },
          {
            "sp_it": "",
            "text_it": "Padre e Figlio ^ e Spirito Santo."
          },
          {
            "sp_it": "Tutti",
            "text_it": "Amen."
          },
          {
            "sp_it": "",
            "text_it": "In certi giorni e in circostanze particolari si usa una forma più solenne di Benedizione"
          },
          {
            "sp_it": "",
            "text_it": "o l’Orazione sul popolo."
          }
        ]
      },
      "B": {
        "label": {
          "it": "Benedizione pontificale"
        },
        "lines": [
          {
            "rubric_it": "Nel benedire il popolo, il vescovo, ricevuta la mitra, allargando le braccia, dice:"
          },
          {
            "rubric_it": "Il vescovo dice:"
          },
          {
            "sp_it": "Vescovo",
            "text_it": "Il Signore sia con voi."
          },
          {
            "sp_it": "",
            "text_it": "Tutti rispondono:"
          },
          {
            "sp_it": "",
            "text_it": "E con il tuo spirito."
          },
          {
            "rubric_it": "Il vescovo dice:"
          },
          {
            "sp_it": "Vescovo",
            "text_it": "Sia benedetto il nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Tutti rispondono:"
          },
          {
            "sp_it": "",
            "text_it": "Ora e sempre."
          },
          {
            "rubric_it": "Il vescovo prosegue:"
          },
          {
            "sp_it": "",
            "text_it": "Il nostro aiuto è nel nome del Signore."
          },
          {
            "sp_it": "",
            "text_it": "Tutti rispondono:"
          },
          {
            "sp_it": "",
            "text_it": "Egli ha fatto cielo e terra."
          },
          {
            "rubric_it": "Quindi, il vescovo, ricevuto il pastorale, dice:"
          },
          {
            "sp_it": "",
            "text_it": "Vi benedica Dio onnipotente,"
          },
          {
            "sp_it": "",
            "text_it": "e tracciando un triplice segno di croce sul popolo, continua:"
          },
          {
            "sp_it": "",
            "text_it": "Padre ^ e Figlio ^ e Spirito ^ Santo."
          },
          {
            "sp_it": "",
            "text_it": "Tutti rispondono:"
          },
          {
            "sp_it": "",
            "text_it": "Amen."
          }
        ]
      }
    }
  },
  {
    "id": "4.3 dismissal",
    "type": "selectable",
    "header": {
      "it": "Congedo"
    },
    "variants": {
      "A": {
        "label": {
          "it": "Formula 1"
        },
        "lines": [
          {
            "sp_it": "",
            "text_it": "Infine il diacono o il sacerdote stesso, rivolto al popolo, a mani giunte, dice:"
          },
          {
            "sp_it": "",
            "text_it": "Andate in pace."
          }
        ]
      },
      "B": {
        "label": {
          "it": "Formula 2"
        },
        "lines": [
          {
            "rubric_it": "Oppure:"
          },
          {
            "sp_it": "",
            "text_it": "La Messa è finita: andate in pace."
          }
        ]
      },
      "C": {
        "label": {
          "it": "Formula 3"
        },
        "lines": [
          {
            "rubric_it": "Oppure:"
          },
          {
            "sp_it": "",
            "text_it": "Andate e annunciate il Vangelo del Signore."
          }
        ]
      },
      "D": {
        "label": {
          "it": "Formula 4"
        },
        "lines": [
          {
            "rubric_it": "Oppure:"
          },
          {
            "sp_it": "",
            "text_it": "Glorificate il Signore con la vostra vita. Andate in pace."
          },
          {
            "rubric_it": "★"
          }
        ]
      },
      "E": {
        "label": {
          "it": "Formula 5"
        },
        "lines": [
          {
            "rubric_it": "Oppure:"
          },
          {
            "sp_it": "",
            "text_it": "La gioia del Signore sia la vostra forza. Andate in pace."
          },
          {
            "rubric_it": "★"
          }
        ]
      },
      "F": {
        "label": {
          "it": "Formula 6"
        },
        "lines": [
          {
            "rubric_it": "Oppure:"
          },
          {
            "rubric_it": "Nel nome del Signore, andate in pace."
          },
          {
            "rubric_it": "★"
          }
        ]
      },
      "G": {
        "label": {
          "it": "Formula 7"
        },
        "lines": [
          {
            "rubric_it": "Oppure, specialmente nelle domeniche di Pasqua:"
          },
          {
            "sp_it": "",
            "text_it": "Portate a tutti la gioia del Signore risorto. Andate in pace."
          },
          {
            "rubric_it": "Il popolo risponde:"
          },
          {
            "sp_it": "Tutti",
            "text_it": "Rendiamo grazie a Dio."
          },
          {
            "rubric_it": "★ Oppure in canto:"
          },
          {
            "sp_it": "",
            "text_it": "Ite, missa est. R /. Deo grátias."
          },
          {
            "rubric_it": "Il sacerdote bacia l’altare in segno di venerazione come all’inizio; fa quindi con i ministri"
          },
          {
            "sp_it": "",
            "text_it": "un profondo inchino e torna in sacrestia."
          },
          {
            "rubric_it": "Quando segue immediatamente un’altra azione liturgica, si tralasciano i riti di conclusione."
          }
        ]
      }
    }
  },
  {
    "id": "4.4 final_song",
    "type": "part",
    "header": {
      "it": "Canto finale"
    },
    "lines": [
      {
        "rubric_it": "Segue il canto finale, secondo l'opportunità."
      },
      {
        "rubric_it": "Il sacerdote venera l'altare e si ritira con i ministri."
      }
    ]
  }
]);
  const ordinarySource = Object.freeze({"authority":"Conferenza Episcopale Italiana — Ufficio Liturgico Nazionale","title":"Messale Romano, terza edizione italiana","url":"https://liturgico.chiesacattolica.it/wp-content/uploads/sites/8/2020/12/07/Messale-Romano-COMPLETO-senza-musica.pdf","pages":"PDF 392–536 (printed pages 309–453)"});
  const officialOrderCorpus = Object.freeze({
    source: ordinarySource,
    pageRange: 'PDF 392–536',
    text_it: "Quando il popolo è radunato, il sacerdote con i ministri si reca all’altare, mentre si ese -<br>gue il Canto d’ingresso. Se non si esegue il canto si proclama l’antifona.<br>Giunto all’altare, il sacerdote fa con i ministri un profondo inchino, bacia l’altare in segno <br>di venerazione e, secondo l’opportunità, incensa la croce e l’altare. Poi, con i ministri, si <br>reca alla sede.<br>Terminato il canto d’ingresso, il sacerdote e i fedeli, in piedi, si fanno il Segno della <br>Croce.<br>Il sacerdote, rivolto al popolo, dice:<br>Nel nome del Padre e del Figlio e dello Spirito Santo. <br>Il popolo risponde: Amen.<br>Quindi il sacerdote rivolge il Saluto al popolo, allargando le braccia e dicendo: <br>La grazia del Signore nostro Gesù Cristo, <br>l’amore di Dio Padre <br>e la comunione dello Spirito Santo <br>siano con tutti voi. Cf. 2 Cor 13, 13 <br>Il popolo risponde: E con il tuo spirito.<br>Oppure:<br>La grazia e la pace <br>di Dio nostro Padre <br>e del Signore nostro Gesù Cristo <br>siano con tutti voi. Cf. 1 Cor 1, 3 <br>Il popolo risponde: E con il tuo spirito.<br><br>Oppure:<br>Il Signore sia con voi.<br> <br> <br>Il vescovo, al posto di Il Signore sia con voi, in questo primo saluto dice: <br>La pace sia con voi.<br> <br> <br>Il popolo risponde: E con il tuo spirito.<br> <br>★ Oppure:<br>Il Signore, che guida i nostri cuori all’amore <br>e alla pazienza di Cristo, <br>sia con tutti voi. Cf. 2 Ts 3, 5<br>Il popolo risponde: E con il tuo spirito.<br> <br>★ Oppure:<br>Il Dio della speranza, <br>che ci riempie di ogni gioia <br>e pace nella fede <br>per la potenza dello Spirito Santo, <br>sia con tutti voi. Cf. Rm 1 5, 13 <br>Il popolo risponde: E con il tuo spirito.<br> <br>★ Oppure:<br>La pace, la carità e la fede <br>da parte di Dio Padre <br>e del Signore Gesù Cristo <br>siano con tutti voi. Cf. Ef 6, 23 <br>Il popolo risponde: E con il tuo spirito.<br> <br>Il sacerdote, o il diacono o un altro ministro, può introdurre brevemente i fedeli alla <br>Messa del giorno.<br> <br>Rito per la benedizione e l’ aspersione dell’ acqua benedetta<br>La domenica, specialmente nel Tempo Pasquale, si può sostituire il consueto atto penitenziale con la benedizione e l’aspersione dell’acqua in memoria del Battesimo (cf. pp. <br>989-994).<br><br>Segue l’Atto penitenziale, introdotto dal sacerdote con queste parole.<br> <br>I formulario:<br>Fratelli e sorelle, <br>per celebrare degnamente i santi misteri, <br>riconosciamo i nostri peccati.<br> <br>★ Oppure:<br>Il Signore Gesù, <br>che ci invita alla mensa della P arola e dell’Eucaristia, <br>ci chiama alla conversione. <br>Riconosciamo di essere peccatori <br>e invochiamo con fiducia la misericordia di Dio.<br> <br>★ Oppure, specialmente nelle domeniche e nel Tempo Pasquale:<br>Oggi, celebrando la vittoria di Cristo <br>sul peccato e sulla morte, <br>siamo chiamati a morire al peccato <br>per risorgere alla vita nuova. <br>Riconosciamoci bisognosi della misericordia del Padre.<br> <br>Segue una breve pausa di silenzio. <br> <br> <br>Poi tutti insieme pronunciano la formula della confessione generale:<br>Confesso a Dio onnipotente e a voi, fratelli e sorelle, <br>che ho molto peccato <br>in pensieri, parole, opere e omissioni,<br>e, battendosi il petto, dicono:<br>per mia colpa, mia colpa, mia grandissima colpa.<br>E proseguono:<br>E supplico la beata sempre Vergine Maria, <br>gli angeli, i santi e voi, fratelli e sorelle, <br>di pregare per me il Signore Dio nostro.<br>Segue l’assoluzione del sacerdote:<br>Dio onnipotente abbia misericordia di noi, <br>perdoni i nostri peccati <br>e ci conduca alla vita eterna. <br>Il popolo risponde: Amen.<br><br>II formulario:<br>★ Fratelli e sorelle, <br>all’inizio di questa celebrazione eucaristica, <br>invochiamo la misericordia di Dio, <br>fonte di riconciliazione e di comunione.<br> <br>★ Oppure:<br>Umili e pentiti come il pubblicano al tempio, <br>accostiamoci al Dio giusto e santo, <br>perché abbia misericordia di noi peccatori.<br>Segue una breve pausa di silenzio. <br> <br> <br>Poi il sacerdote dice:<br>Pietà di noi, Signore.<br>Il popolo risponde: Contro di te abbiamo peccato.<br> <br>Il sacerdote prosegue:<br>Mostraci, Signore, la tua misericordia.<br>Il popolo risponde: E donaci la tua salvezza.<br> <br> <br>Segue l’assoluzione del sacerdote:<br>Dio onnipotente abbia misericordia di noi, <br>perdoni i nostri peccati <br>e ci conduca alla vita eterna. <br>Il popolo risponde: Amen.<br>III formulario:<br>★ Gesù Cristo, il giusto, intercede per noi <br>e ci riconcilia con il Padre: <br>per accostarci degnamente <br>alla mensa del Signore, <br>invochiamolo con cuore pentito.<br> <br>★ Oppure:<br>Riconosciamoci tutti peccatori, <br>invochiamo la misericordia del Signore <br>e perdoniamoci a vicenda dal profondo del cuore. <br> <br>Segue una breve pausa di silenzio.<br><br>Poi il sacerdote, o il diacono o un altro ministro, dice o canta le seguenti invocazioni <br>o altre con il Kýrie, eléison.<br>Signore, mandato dal Padre a salvare i contriti di cuore, <br>Kýrie, eléison. <br>Il popolo risponde: Kýrie, eléison.<br> <br>Il sacerdote:<br>Cristo, che sei venuto a chiamare i peccatori, <br>Christe, eléison.<br>Il popolo: Christe, eléison.<br> <br>Il sacerdote: <br>Signore, che siedi alla destra del Padre e intercedi per noi, <br>Kýrie, eléison.<br>Il popolo: Kýrie, eléison.<br> <br>Segue l’assoluzione del sacerdote:<br>Dio onnipotente abbia misericordia di noi, <br>perdoni i nostri peccati <br>e ci conduca alla vita eterna. <br>Il popolo risponde: Amen.<br> <br>★ Si possono utilizzare anche le altre invocazioni, pp. 313-317. <br> <br>1.<br>Signore, via che riconduce al Padre, Kýrie, eléison.<br>R/ . Kýrie, eléison.<br>Cristo, verità che illumina i popoli, Christe, eléison.<br>R/ . Christe, eléison.<br>Signore, vita che rinnova il mondo, Kýrie, eléison.<br>R/ . Kýrie, eléison. <br> <br>2.<br>Signore, che alla donna peccatrice hai donato la tua misericordia, <br>Kýrie, eléison.<br>R/ . Kýrie, eléison.<br>Cristo, che al ladrone pentito hai promesso il paradiso, <br>Christe, eléison.<br>R/ . Christe, eléison.<br>Signore, che a Pietro hai offerto il tuo perdono, Kýrie, eléison.<br>R/ . Kýrie, eléison.<br><br>3.<br>Signore, che non sei venuto a condannare ma a perdonare, <br>Kýrie, eléison.<br>R/ . Kýrie, eléison.<br>Cristo, che fai festa per ogni peccatore pentito, Christe, eléison.<br>R/ . Christe, eléison.<br>Signore, che perdoni molto a chi molto ama, Kýrie, eléison.<br>R/ . Kýrie, eléison. <br> <br>4.<br>Signore, che sei venuto a cercare chi era perduto, Kýrie, eléison.<br>R/ . Kýrie, eléison.<br>Cristo, che hai dato la tua vita in riscatto per tutti, <br>Christe, eléison.<br>R/ . Christe, eléison.<br>Signore, che raccogli nell’unità i figli di Dio dispersi, Kýrie, eléison.<br>R/ . Kýrie, eléison. <br> <br>5.<br>Signore, pienezza di verità e di grazia, Kýrie, eléison.<br>R/ . Kýrie, eléison.<br>Cristo, fatto povero per arricchirci, Christe, eléison.<br>R/ . Christe, eléison.<br>Signore, venuto per radunare il tuo popolo santo, Kýrie, eléison.<br>R/ . Kýrie, eléison.<br>Tempo di Avvento <br>1.<br>Signore, che sei venuto nel mondo per salvarci, Kýrie, eléison.<br>R/ . Kýrie, eléison.<br>Cristo, che vieni a visitarci con la grazia del tuo Spirito, <br>Christe, eléison.<br>R/ . Christe, eléison.<br>Signore, che verrai un giorno a giudicare le nostre opere, <br>Kýrie, eléison.<br>R/ . Kýrie, eléison.<br><br>2.<br>Signore, difensore dei poveri, Kýrie, eléison.<br>R/ . Kýrie, eléison.<br>Cristo, rifugio dei deboli, Christe, eléison.<br>R/ . Christe, eléison.<br>Signore, speranza dei peccatori, Kýrie, eléison.<br>R/ . Kýrie, eléison. <br> <br>3.<br>Signore, che vieni a visitare il tuo popolo nella pace, Kýrie, eléison.<br>R/ . Kýrie, eléison.<br>Cristo, che vieni a salvare chi è perduto, Christe, eléison.<br>R/ . Christe, eléison.<br>Signore, che vieni a creare un mondo nuovo, Kýrie, eléison.<br>R/ . Kýrie, eléison.<br>Tempo di Natale <br>1.<br>Signore, Figlio di Dio, che nascendo da Maria Vergine <br>ti sei fatto nostro fratello, Kýrie, eléison.<br>R/ . Kýrie, eléison.<br>Cristo, Figlio dell’uomo, che conosci e comprendi <br>la nostra debolezza, Christe, eléison.<br>R/ . Christe, eléison.<br>Signore, Figlio primogenito del Padre, <br>che fai di noi una sola famiglia, Kýrie, eléison.<br>R/ . Kýrie, eléison. <br> <br>2.<br>Signore, re della pace, Kýrie, eléison.<br>R/ . Kýrie, eléison.<br>Cristo, luce nelle tenebre, Christe, eléison.<br>R/ . Christe, eléison.<br>Signore, immagine dell’uomo nuovo, Kýrie, eléison.<br>R/ . Kýrie, eléison.<br><br>Tempo di Quaresima <br>1.<br>Signore, che ci inviti al perdono fraterno <br>prima di presentarci al tuo altare, Kýrie, eléison.<br>R/ . Kýrie, eléison.<br>Cristo, che sulla croce hai invocato il perdono per i peccatori, <br>Christe, eléison.<br>R/ . Christe, eléison.<br>Signore, che hai effuso lo Spirito per la remissione dei peccati, <br>Kýrie, eléison.<br>R/ . Kýrie, eléison. <br> <br>2.<br>Signore, che nell’acqua e nello Spirito <br>ci hai rigenerato a tua immagine, Kýrie, eléison.<br>R/ . Kýrie, eléison.<br>Cristo, che nel tuo Spirito crei in noi un cuore nuovo, <br>Christe, eléison.<br>R/ . Christe, eléison.<br>Signore, che nello Spirito Santo ci raduni in un solo corpo, <br>Kýrie, eléison.<br>R/ . Kýrie, eléison. <br> <br>3.<br>Signore, che fai passare dalla morte alla vita <br>chi ascolta la tua parola, Kýrie, eléison.<br>R/ . Kýrie, eléison.<br>Cristo, che hai voluto essere innalzato da terra per attirarci a te, <br>Christe, eléison.<br>R/ . Christe, eléison.<br>Signore, che ci sottoponi al giudizio della tua croce, <br>Kýrie, eléison.<br>R/ . Kýrie, eléison.<br><br>Tempo di Pasqua <br>1.<br>Signore, nostra pace, Kýrie, eléison.<br>R/ . Kýrie, eléison.<br>Cristo, nostra Pasqua, Christe, eléison.<br>R/ . Christe, eléison.<br>Signore, nostra vita, Kýrie, eléison.<br>R/ . Kýrie, eléison. <br> <br>2.<br>Signore, che sei l’eterno sacerdote della nuova alleanza, <br>Kýrie, eléison.<br>R/ . Kýrie, eléison.<br>Cristo, che ci edifichi come pietre vive in tempio santo di Dio, <br>Christe, eléison.<br>R/ . Christe, eléison.<br>Signore, che ci fai concittadini dei santi nel regno dei cieli, <br>Kýrie, eléison.<br>R/ . Kýrie, eléison. <br> <br>3.<br>Signore, che asceso alla destra del Padre ci fai dono del tuo Spirito, <br>Kýrie, eléison.<br>R/ . Kýrie, eléison.<br>Cristo, che sostieni ogni cosa con la potenza della tua parola, <br>Christe, eléison.<br>R/ . Christe, eléison.<br>Signore, che hai vinto la morte e regni nei secoli, Kýrie, eléison.<br>R/ . Kýrie, eléison.<br><br>Seguono le Invocazioni Kýrie, eléison, se non sono state già proclamate o cantate con <br>l’atto penitenziale:<br>V/ . Kýrie, eléison.<br>R/ . Kýrie, eléison. <br> <br>V/ . Christe, eléison.<br>R/ . Christe, eléison. <br> <br>V/ . Kýrie, eléison.<br>R/ . Kýrie, eléison.<br>Oppure:<br>V/ . Signore, pietà<br>R/ . Signore, pietà. <br>V/ . Cristo, pietà.<br>R/ . Cristo, pietà. <br>V/ . Signore, pietà. <br>R/ . Signore, pietà. <br> <br>Poi, quando è prescritto, si canta o si proclama l’Inno:<br>Gloria a Dio nell’alto dei cieli <br>e pace in terra agli uomini, amati dal Signore. <br> <br>Noi ti lodiamo, ti benediciamo, <br>ti adoriamo, ti glorifichiamo, <br>ti rendiamo grazie per la tua gloria immensa, <br>Signore Dio, Re del cielo, <br>Dio Padre onnipotente. <br> <br>Signore, Figlio unigenito, Gesù Cristo, <br>Signore Dio, Agnello di Dio, Figlio del Padre, <br>tu che togli i peccati del mondo, abbi pietà di noi; <br>tu che togli i peccati del mondo, accogli la nostra supplica; <br>tu che siedi alla destra del Padre, abbi pietà di noi. <br> <br>Perché tu solo il Santo, <br>tu solo il Signore, tu solo l’Altissimo, Gesù Cristo, <br>con lo Spirito Santo: <br>nella gloria di Dio Padre. <br>Amen.<br><br>Oppure in canto:<br>Glória in excélsis Deo <br>et in terra pax homínibus bonae voluntátis. <br>Laudámus te, benedícimus te, <br>adorámus te, glorificámus te, <br>grátias ágimus tibi propter magnam glóriam tuam, <br>Dómine Deus, Rex caeléstis, <br>Deus Pater omnípotens. <br>Dómine Fili Unigénite, Iesu Christe, <br>Dómine Deus, Agnus Dei, Fílius Patris, <br>qui tollis peccáta mundi, miserére nobis; <br>qui tollis peccáta mundi, súscipe deprecatiónem nostram. <br>Qui sedes ad déxteram Patris, miserére nobis. <br>Quóniam tu solus Sanctus, tu solus Dóminus, tu solus Altíssimus, <br>Iesu Christe, cum Sancto Spíritu: in glória Dei Patris. <br>Amen. <br> <br>Terminato l’inno, il sacerdote, a mani giunte, dice: <br>Preghiamo.<br>E tutti, insieme con il sacerdote, pregano in silenzio per qualche momento. Quindi il <br>sacerdote, con le braccia allargate, dice o canta la Colletta. La colletta termina con la <br>conclusione lunga:<br> <br>– se è rivolta al Padre:<br>Per il nostro Signore Gesù Cristo, <br>tuo Figlio, che è Dio, e vive e regna con te, <br>nell’unità dello Spirito Santo, <br>per tutti i secoli dei secoli. <br> <br>– se è rivolta al Padre, ma verso la fine dell’orazione si fa menzione del Figlio: <br>Egli è Dio, e vive e regna con te, <br>nell’unità dello Spirito Santo, <br>per tutti i secoli dei secoli. <br> <br>– se è rivolta al Figlio:<br>Tu sei Dio, e vivi e regni con Dio Padre, <br>nell’unità dello Spirito Santo, <br>per tutti i secoli dei secoli. <br> <br>Il popolo acclama: Amen.<br><br>Il lettore si reca all’ambone e proclama la Prima Lettura . T utti ascoltano seduti. Al <br>termine della lettura, il lettore acclama:<br>Parola di Dio.<br>Tutti rispondono: Rendiamo grazie a Dio. <br>Il salmista, o il cantore, canta o proclama il Salmo; il popolo risponde con il ritornello. <br>Quando è prevista, il lettore proclama dall’ambone la Seconda Lettura . Al termine <br>della lettura, il lettore acclama:<br>Parola di Dio.<br>Tutti rispondono: Rendiamo grazie a Dio.<br> <br>Segue l’Alleluia o altro canto stabilito dalle rubriche, secondo il Tempo liturgico.<br> <br>Intanto, se si usa l’incenso, il sacerdote lo pone nel turibolo.<br>Poi il diacono che deve proclamare il Vangelo, inchinato profondamente davanti al <br>sacerdote, chiede la benedizione, dicendo sottovoce:<br>Benedicimi, o padre. <br>Il sacerdote dice sottovoce:<br>Il Signore sia nel tuo cuore e sulle tue labbra, <br>perché tu possa annunciare degnamente il suo Vangelo: <br>nel nome del Padre <br>e del Figlio ^ e dello Spirito Santo.<br>Il diacono si fa il segno della croce e risponde: <br>Amen.<br> <br>Se non c’è il diacono, il sacerdote, inchinandosi davanti all’altare, dice sottovoce: <br>Purifica il mio cuore e le mie labbra, <br>Dio onnipotente, <br>perché possa annunciare degnamente <br>il tuo santo Vangelo.<br><br>321Liturgia della Parola<br>Poi il diacono, o il sacerdote, si reca all’ambone, accompagnato, secondo l’opportunità, <br>dai ministri con l’incenso e i candelieri. Giunto all’ambone, canta o dice, a mani giunte:<br>Il Signore sia con voi. <br>Il popolo risponde: E con il tuo spirito.<br>Il diacono o il sacerdote: <br>Dal Vangelo secondo N.<br>e intanto segna il libro e se stesso sulla fronte, sulla bocca e sul petto.<br>Il popolo acclama: Gloria a te, o Signore.<br>Il diacono o il sacerdote, se si usa l’incenso, incensa il libro e proclama o canta il Vangelo.<br> <br> <br>Terminata la proclamazione del Vangelo, il diacono o il sacerdote acclama: <br>Parola del Signore.<br>Tutti rispondono: Lode a te, o Cristo.<br> <br>★ S e l’acclamazione e la risposta del popolo sono in canto, si può far seguire, secondo <br>l’opportunità, una delle seguenti acclamazioni o un’altra simile:<br>Gloria e lode a te, o Cristo. <br>Gloria a te, o Cristo, sapienza del Padre. <br>Gloria a te, o Cristo, Verbo di Dio. <br>Gloria a te, o Signore, Figlio del Dio vivente. <br>Lode e onore a te, Signore Gesù. <br>Lode a te, o Cristo, re di eterna gloria. <br>A te la gloria, la potenza e l’onore, Signore Gesù.<br>Fuori del Tempo di Quaresima anche:<br>Alleluia.<br> <br> <br>Poi il diacono o il sacerdote bacia il libro dicendo sottovoce: <br>La parola del Vangelo cancelli i nostri peccati. <br>Segue l’ Omelia del sacerdote o del diacono; essa è prescritta in tutte le domeniche e <br>feste di precetto, ed è raccomandata negli altri giorni.<br> <br>★ Dopo la proclamazione del Vangelo o dopo l’omelia, è opportuno fare un momento <br>di silenzio.<br><br>Quando è prescritto, si proclama o si canta il Simbolo o Professione di Fede:<br>Credo in un solo Dio Padre onnipotente, <br>creatore del cielo e della terra, <br>di tutte le cose visibili e invisibili. <br>Credo in un solo Signore, Gesù Cristo, <br>unigenito Figlio di Dio, <br>nato dal Padre prima di tutti i secoli: <br>Dio da Dio, Luce da Luce, Dio vero da Dio vero; <br>generato, non creato, della stessa sostanza del Padre; <br>per mezzo di lui tutte le cose sono state create. <br>Per noi uomini e per la nostra salvezza <br>discese dal cielo,<br>Alle parole: e per opera dello Spirito Santo... fino a si è fatto uomo, tutti si inchinano.<br>e per opera dello Spirito Santo <br>si è incarnato nel seno della Vergine Maria <br>e si è fatto uomo. <br>Fu crocifisso per noi sotto Ponzio Pilato, <br>morì e fu sepolto. <br>Il terzo giorno è risuscitato, secondo le Scritture, <br>è salito al cielo, siede alla destra del Padre. <br>E di nuovo verrà, nella gloria, <br>per giudicare i vivi e i morti, <br>e il suo regno non avrà fine. <br>Credo nello Spirito Santo, che è Signore e dà la vita, <br>e procede dal Padre e dal Figlio. <br>Con il Padre e il Figlio è adorato e glorificato, <br>e ha parlato per mezzo dei profeti. <br>Credo la Chiesa, una, santa, cattolica e apostolica. <br>Professo un solo Battesimo per il perdono dei peccati. <br>Aspetto la risurrezione dei morti <br>e la vita del mondo che verrà. <br>Amen.<br><br>323Liturgia della Parola<br>In luogo del Simbolo niceno-costantinopolitano, si può utilizzare, specialmente nel <br>Tempo di Quaresima e nel Tempo Pasquale, il Simbolo battesimale della Chiesa romana, <br>detto «degli apostoli».<br>Io credo in Dio Padre onnipotente, <br>creatore del cielo e della terra; <br>e in Gesù Cristo, suo unico Figlio, nostro Signore,<br>Alle parole il quale fu concepito... fino a Maria Vergine, tutti si inchinano.<br>il quale fu concepito di Spirito Santo, <br>nacque da Maria Vergine, <br>patì sotto Ponzio Pilato, <br>fu crocifisso, morì e fu sepolto; <br>discese agli inferi; <br>il terzo giorno risuscitò da morte; <br>salì al cielo, <br>siede alla destra di Dio Padre onnipotente; <br>di là verrà a giudicare i vivi e i morti. <br>Credo nello Spirito Santo, <br>la santa Chiesa cattolica, <br>la comunione dei santi, <br>la remissione dei peccati, <br>la risurrezione della carne, <br>la vita eterna. <br>Amen.<br>Oppure in canto:<br>Credo in unum Deum <br>Patrem omnipoténtem, factórem caeli et terrae, <br>visibílium ómnium et invisibílium. <br>Et in unum Dóminum Iesum Christum, <br>Fílium Dei Unigénitum, <br>et ex Patre natum ante ómnia saécula. <br>Deum de Deo, lumen de lúmine, <br>Deum verum de Deo vero, <br>génitum, non factum, consubstantiálem Patri: <br>per quem ómnia facta sunt. <br>Qui propter nos hómines et propter nostram salútem <br>descéndit de caelis.<br><br>324 Rito della Messa con il popolo<br>Alle parole: Et incarnátus... fino a factus est , tutti si inchinano.<br>Et incarnátus est de Spíritu Sancto <br>ex María Vírgine, et homo factus est. <br>Crucifíxus étiam pro nobis sub Póntio Piláto; <br>passus et sepúltus est, <br>et resurréxit tértia die, secúndum Scriptúras, <br>et ascéndit in caelum, sedet ad déxteram Patris. <br>Et íterum ventúrus est cum glória, iudicáre vivos et mórtuos, <br>cuius regni non erit finis. <br>Et in Spíritum Sanctum, Dóminum et vivificántem: <br>qui ex Patre Filióque procédit. <br>Qui cum Patre et Fílio simul adorátur et conglorificátur: <br>qui locútus est per prophétas. <br>Et unam, sanctam, cathólicam et apostólicam Ecclésiam. <br>Confíteor unum baptísma in remissiónem peccatórum. <br>Et exspécto resurrectiónem mortuórum, <br>et vitam ventúri saéculi. Amen.<br> <br>Segue la Preghiera universale o Preghiera dei fedeli. <br>★ E ssa si svolge nel modo seguente:<br>Inizio<br>Il sacerdote, con una breve monizione, invita i fedeli a pregare.<br>Preghiera<br>Le intenzioni sono proposte da un diacono o da un lettore o da altra persona idonea. <br>Il popolo partecipa con una invocazione, o pregando in silenzio.<br>La successione delle intenzioni è ordinariamente questa:<br>a<br>) per le necessità della Chiesa;<br>b) per i governanti e per la salvezza di tutto il mondo;<br>c ) per tutti quelli che si trovano in diffcoltà;<br>d) per la comunità locale.<br>Ciascuno quindi prega brevemente in silenzio.<br>Conclusione<br>Il sacerdote conclude la preghiera con un’orazione. <br>Per alcuni esempi di formulari si vedano le pp. 997-1002 e l’Orazionale.<br><br>Terminata la Liturgia della Parola, i ministri preparano sull’altare il corporale, il purifi -<br>catoio, il calice, la palla e il Messale, mentre si può eseguire il Canto di offertorio.<br>È bene che i fedeli esprimano la loro partecipazione all’offerta, portando sia il pane e il <br>vino per la celebrazione dell’Eucaristia, sia altri doni per le necessità della Chiesa e dei <br>poveri.<br>Il sacerdote, stando all’altare, prende la patena con il pane e, tenendola con entrambe le <br>mani un po’ sollevata sull’altare, dice sottovoce:<br>Benedetto sei tu, Signore, Dio dell’universo: <br>dalla tua bontà abbiamo ricevuto questo pane, <br>frutto della terra e del lavoro dell’uomo; <br>lo presentiamo a te, <br>perché diventi per noi cibo di vita eterna.<br> <br>Quindi depone sul corporale la patena con il pane.<br>Se non si esegue il canto di offertorio, il sacerdote può dire questa formula ad alta voce; <br>al termine il popolo può acclamare:<br>Benedetto nei secoli il Signore.<br> <br>Il diacono, o il sacerdote, versa nel calice il vino, con un po’ d’acqua, dicendo sottovoce:<br>L’acqua unita al vino <br>sia segno della nostra unione <br>con la vita divina di colui che ha voluto assumere <br>la nostra natura umana.<br> <br>Il sacerdote prende il calice e, tenendolo con entrambe le mani un po’ sollevato sull’al -<br>tare, dice sottovoce:<br>Benedetto sei tu, Signore, Dio dell’universo: <br>dalla tua bontà abbiamo ricevuto questo vino, <br>frutto della vite e del lavoro dell’uomo; <br>lo presentiamo a te, <br>perché diventi per noi bevanda di salvezza. <br> <br>Quindi depone il calice sul corporale.<br>Se non si esegue il canto di offertorio, il sacerdote può dire questa formula ad alta voce; <br>al termine il popolo può acclamare:<br>Benedetto nei secoli il Signore.<br> <br>Il sacerdote, inchinandosi profondamente, dice sottovoce:<br>Umili e pentiti accoglici, o Signore: <br>ti sia gradito il nostro sacrificio <br>che oggi si compie dinanzi a te.<br><br>Si possono incensare le offerte, la croce e l’altare. Poi il diacono, o un ministro, incensa il <br>sacerdote e il popolo.<br>Il sacerdote, stando a lato dell’altare, si lava le mani dicendo sottovoce: <br>Lavami, o Signore, dalla mia colpa, <br>dal mio peccato rendimi puro.<br> <br>Il sacerdote, ritornato al centro dell’altare, allargando e ricongiungendo le mani, rivolto <br>al popolo dice:<br>Pregate, fratelli e sorelle, <br>perché il mio e vostro sacrificio <br>sia gradito a Dio Padre onnipotente.<br> <br>★ Oppure:<br>Pregate, fratelli e sorelle, <br>perché questa nostra famiglia, <br>radunata dallo Spirito Santo nel nome di Cristo, <br>possa offrire il sacrificio gradito <br>a Dio Padre onnipotente.<br>★ Oppure:<br>Pregate, fratelli e sorelle, <br>perché, portando all’altare <br>la gioia e la fatica di ogni giorno, <br>ci disponiamo a offrire il sacrificio <br>gradito a Dio Padre onnipotente.<br>★ Oppure:<br>Pregate, fratelli e sorelle, <br>perché il sacrificio della Chiesa, <br>in questa sosta che la rinfranca <br>nel suo cammino verso la patria del cielo, <br>sia gradito a Dio Padre onnipotente.<br> <br>Il popolo risponde:<br>Il Signore riceva dalle tue mani questo sacrificio <br>a lode e gloria del suo nome, <br>per il bene nostro e di tutta la sua santa Chiesa.<br> <br>Il popolo si alza e il sacerdote, con le braccia allargate, dice l ’Orazione sulle offerte.<br>L’orazione sulle offerte termina con la conclusione breve:<br>Per Cristo nostro Signore.<br> <br>– se alla fine di essa si fa menzione del Figlio: <br>Egli vive e regna nei secoli dei secoli.<br><br>327Preghiera Eucaristica<br><br>Il sacerdote può cantare tutta, o in parte, la Preghiera Eucaristica.<br> <br>Il sacerdote inizia la Preghiera Eucaristica con il Prefazio. Allargando le braccia, dice:<br>Il Signore sia con voi.<br>Il popolo risponde: E con il tuo spirito.<br> <br>Alzando le mani, il sacerdote prosegue: <br>In alto i nostri cuori.<br>Il popolo: Sono rivolti al Signore.<br> <br>Con le braccia allargate, il sacerdote soggiunge: <br>Rendiamo grazie al Signore nostro Dio.<br>Il popolo: È cosa buona e giusta.<br> <br>Il sacerdote continua il prefazio con le braccia allargate.<br> <br>Alla fine congiunge le mani e conclude il prefazio cantando o proclamando ad alta voce <br>insieme con il popolo:<br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br> <br>Oppure in canto:<br>Sanctus, Sanctus, Sanctus Dóminus Deus Sábaoth. <br>Pleni sunt caeli et terra glória tua. <br>Hosánna in excélsis. <br>Benedíctus qui venit in nómine Dómini. <br>Hosánna in excélsis.<br><br>Prefazio dell’Avvento I <br>La duplice venuta di Cristo<br>Il seguente prefazio si dice nelle Messe del Tempo di Avvento, dalla prima domenica al <br>16 dicembre, e nelle Messe che non hanno un prefazio proprio.<br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, <br>Dio onnipotente ed eterno, + <br>per Cristo Signore nostro. ** <br> <br>Al suo primo avvento <br>nell’umiltà della condizione umana * <br>egli portò a compimento la promessa antica * <br>e ci aprì la via + dell’eterna salvezza. ** <br>Quando verrà di nuovo nello splendore della gloria, * <br>ci chiamerà a possedere il regno promesso * <br>che ora osiamo sperare + vigilanti nell’attesa. ** <br> <br>E noi, <br>uniti agli Angeli e agli Arcangeli, * <br>ai Troni e alle Dominazioni <br>e alla moltitudine dei cori celesti, * <br>cantiamo con voce incessante + <br>l’inno della tua gloria: **<br><br>329Preghiera Eucaristica<br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>★ Prefazio dell’Avvento I/A <br>Cristo, Signore e giudice della storia<br>Il seguente prefazio si dice nelle Messe del Tempo di Avvento, dalla prima domenica al <br>16 dicembre, e nelle Messe che non hanno un prefazio proprio.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente giusto renderti grazie * <br>e innalzare a te l’inno di benedizione e di lode, * <br>Padre onnipotente, + <br>principio e fine di tutte le cose. ** <br> <br>Tu ci hai nascosto il giorno e l’ora <br>in cui il Cristo tuo Figlio, <br>Signore e giudice della storia, * <br>apparirà sulle nubi del cielo + <br>rivestito di potenza e splendore. ** <br>In quel giorno tremendo e glorioso <br>passerà il mondo presente <br>* <br>e sorgeranno cieli nuovi + e terra nuova. ** <br> <br>Ora egli viene incontro a noi <br>in ogni uomo e in ogni tempo, <br>* <br>perché lo accogliamo nella fede * <br>e testimoniamo nell’amore + <br>la beata speranza del suo regno. ** <br> <br>Nell’attesa del suo ultimo avvento, * <br>insieme agli angeli e ai santi, * <br>cantiamo unanimi + <br>l’inno della tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>331Preghiera Eucaristica<br>Prefazio dell’Avvento II <br>Le due attese di Cristo<br>Il seguente prefazio si dice nelle Messe del Tempo di Avvento, dal 17 al 24 dicembre, e <br>nelle Messe che non hanno un prefazio proprio.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, <br>Dio onnipotente ed eterno, + <br>per Cristo Signore nostro. ** <br> <br>Egli fu annunciato da tutti i profeti, * <br>la Vergine Madre l’attese e lo portò in grembo <br>con ineffabile amore, * <br>Giovanni proclamò la sua venuta + <br>e lo indicò presente nel mondo. ** <br>Lo stesso Signore, <br>che ci invita a preparare con gioia il suo Natale, * <br>ci trovi vigilanti nella preghiera, + <br>esultanti nella lode. ** <br> <br>Per questo dono della tua benevolenza, * <br>uniti agli Angeli e agli Arcangeli, <br>ai Troni e alle Dominazioni <br>e alla moltitudine dei cori celesti, * <br>cantiamo con voce incessante + <br>l’inno della tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>★ Prefazio dell’Avvento II/A <br>Maria nuova Eva<br>Il seguente prefazio si dice nelle Messe del Tempo di Avvento, dal 17 al 24 dicembre, e nelle <br>Messe che non hanno un prefazio proprio.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente giusto <br>rendere grazie <br>a te, Signore, Padre santo, * <br>Dio onnipotente ed eterno. ** <br> <br>Noi ti lodiamo, ti benediciamo, <br>ti glorifichiamo * <br>per il mistero della Vergine Madre. ** <br>Dall’antico avversario venne la rovina, * <br>dal grembo verginale della figlia di Sion <br>è germinato colui che ci nutre con il pane degli angeli * <br>e sono scaturite per tutto il genere umano + <br>la salvezza e la pace. ** <br> <br>La grazia che Eva ci tolse <br>ci è ridonata in Maria. <br>* <br>In lei, Madre di tutti gli uomini, * <br>la maternità, redenta dal peccato e dalla morte, + <br>si apre al dono della vita nuova. ** <br>Dove abbondò la colpa, * <br>sovrabbonda la tua misericordia + <br>in Cristo nostro salvatore. **<br><br>333Preghiera Eucaristica<br>E noi, <br>nell’attesa della sua venuta, * <br>uniti agli angeli e ai santi, + <br>cantiamo l’inno della tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>334 Rito della Messa con il popolo<br>Prefazio di Natale I <br>Cristo luce<br>Il seguente prefazio si dice nelle Messe di Natale e della sua Ottava, anche in quelle che <br>hanno un prefazio proprio, fatta eccezione per le Messe che hanno un prefazio proprio dei <br>divini misteri o delle Persone divine; si dice inoltre nei giorni feriali del Tempo di Natale.<br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Nel mistero del Verbo incarnato * <br>è apparsa agli occhi della nostra mente <br>la luce nuova del tuo fulgore, * <br>perché conoscendo Dio visibilmente, + <br>per mezzo di lui siamo conquistati <br>all’amore delle realtà invisibili. ** <br> <br>E noi, <br>uniti agli Angeli e agli Arcangeli, * <br>ai Troni e alle Dominazioni <br>e alla moltitudine dei cori celesti, * <br>cantiamo con voce incessante + <br>l’inno della tua gloria: **<br><br>335Preghiera Eucaristica<br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br> <br>Nel Canone Romano si dice il Communicántes proprio.<br>Nella Messa vespertina della vigilia e in quella della notte si dice: mentre celebriamo la <br>notte santissima ; poi, fino al termine dell’Ottava, si dice sempre: mentre celebriamo il <br>giorno santissimo.<br>★ Nelle Preghiere Eucaristiche II e III si fa il ricordo proprio del Natale.<br><br>Prefazio di Natale II <br>Nell’incarnazione Cristo reintegra l’universo<br>Il seguente prefazio si dice nelle Messe di Natale e della sua Ottava, anche in quelle che <br>hanno un prefazio proprio, fatta eccezione per le Messe che hanno un prefazio proprio dei <br>divini misteri o delle Persone divine; si dice inoltre nei giorni feriali del Tempo di Natale.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, Dio onnipotente ed eterno, + <br>per Cristo Signore nostro. ** <br> <br>Nel mistero adorabile del Natale * <br>egli, Verbo invisibile, <br>apparve visibilmente nella nostra carne, * <br>per assumere in sé tutto il creato + <br>e sollevarlo dalla sua caduta. ** <br>Generato prima dei secoli, <br>cominciò a esistere nel tempo, * <br>per reintegrare l’universo nel tuo disegno, o Padre, + <br>e ricondurre a te l’umanità dispersa. ** <br> <br>Per questo dono della tua benevolenza, * <br>uniti a tutti gli angeli, * <br>cantiamo esultanti + <br>la tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br> <br>Nel Canone Romano si dice il Communicántes proprio.<br>Nella Messa vespertina della vigilia e in quella della notte si dice: mentre celebriamo la <br>notte santissima ; p o i, fin o al t e rmin e d e ll’ O tta v a, s i di c e se m p r e: mentre celebriamo il <br>giorno santissimo.<br>★ Nelle Preghiere Eucaristiche II e III si fa il ricordo proprio del Natale.<br><br>337Preghiera Eucaristica<br>Prefazio di Natale III <br>Il sublime scambio nell’incarnazione del Verbo<br>Il seguente prefazio si dice nelle Messe di Natale e della sua Ottava, anche in quelle che <br>hanno un prefazio proprio, fatta eccezione per le Messe che hanno un prefazio proprio dei <br>divini misteri o delle Persone divine; si dice inoltre nei giorni feriali del Tempo di Natale.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, Dio onnipotente ed eterno, + <br>per Cristo Signore nostro. ** <br> <br>In lui [oggi] risplende in piena luce <br>il sublime scambio che ci ha redenti: * <br>la nostra debolezza è assunta dal Verbo, <br>la natura mortale è innalzata a dignità perenne, * <br>e noi, uniti a te in comunione mirabile, + <br>condividiamo la tua vita immortale. ** <br> <br>Per questo mistero di salvezza, * <br>uniti ai cori degli angeli, * <br>proclamiamo esultanti + <br>la tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br> <br>Nel Canone Romano si dice il Communicántes proprio.<br>Nella Messa vespertina della vigilia e in quella della notte si dice: mentre celebriamo la <br>notte santissima ; poi, fino al termine dell’Ottava, si dice sempre: mentre celebriamo il <br>giorno santissimo.<br>★ Nelle Preghiere Eucaristiche II e III si fa il ricordo proprio del Natale.<br><br>Prefazio dell’Epifania <br>Cristo luce delle genti<br>Il seguente prefazio si dice nelle Messe della solennità dell’Epifania. Si può dire nei giorni dopo l’Epifania, insieme con i prefazi del Natale, fino al sabato che precede la festa del <br>Battesimo del Signore.<br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>[Oggi] in Cristo, luce del mondo, * <br>tu hai rivelato alle genti il mistero della salvezza * <br>e in lui, apparso nella nostra carne mortale, + <br>ci hai rinnovati con la gloria dell’immortalità divina. ** <br> <br>E noi, <br>uniti agli Angeli e agli Arcangeli, * <br>ai Troni e alle Dominazioni <br>e alla moltitudine dei cori celesti, * <br>cantiamo con voce incessante + <br>l’inno della tua gloria: **<br><br>339Preghiera Eucaristica<br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br> <br>Nel Canone Romano si dice il Communicántes proprio.<br>★ Nelle Preghiere Eucaristiche II e III si fa il ricordo proprio dell’Epifania.<br><br>Prefazio di Quaresima I <br>Il significato spirituale della Quaresima<br>Il seguente prefazio si dice nel Tempo di Quaresima, specialmente nelle domeniche, <br>quando non è indicato un prefazio proprio.<br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Ogni anno tu doni ai tuoi fedeli <br>di prepararsi con gioia, purificati nello spirito, <br>alla celebrazione della Pasqua, * <br>perché, assidui nella preghiera e nella carità operosa, * <br>attingano ai misteri della redenzione <br>la pienezza della vita nuova + <br>in Cristo tuo Figlio, nostro salvatore. ** <br> <br>E noi, uniti agli Angeli e agli Arcangeli, * <br>ai Troni e alle Dominazioni <br>e alla moltitudine dei cori celesti, * <br>cantiamo con voce incessante + <br>l’inno della tua gloria: **<br><br>341Preghiera Eucaristica<br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio di Quaresima II <br>La penitenza dello spirito<br>Il seguente prefazio si dice nel Tempo di Quaresima, specialmente nelle domeniche, <br>quando non è indicato un prefazio proprio. <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Tu hai stabilito per i tuoi figli <br>un tempo di rinnovamento spirituale * <br>perché si convertano a te con tutto il cuore * <br>e, liberi dai fermenti del peccato, + <br>vivano le vicende di questo mondo <br>sempre rivolti ai beni eterni. ** <br> <br>Per questo dono della tua benevolenza, * <br>uniti agli angeli e ai santi, * <br>con voce unanime + <br>cantiamo l’inno della tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>343Preghiera Eucaristica<br>Prefazio di Quaresima III <br>I frutti dell’astinenza<br>Il seguente prefazio si dice nelle Messe delle ferie di Quaresima e nei giorni di digiuno. <br> <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Tu vuoi che ti glorifichiamo <br>con la penitenza quaresimale, * <br>perché la vittoria sul nostro peccato <br>ci renda disponibili alle necessità dei poveri * <br>a imitazione della tua bontà infinita. ** <br> <br>E noi, <br>uniti a tutti gli angeli, * <br>cantiamo a una sola voce + <br>l’inno della tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio di Quaresima IV <br>I frutti del digiuno<br>Il seguente prefazio si dice nelle Messe delle ferie di Quaresima e nei giorni di digiuno. <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Con il digiuno quaresimale <br>tu vinci le nostre passioni, elevi lo spirito, * <br>infondi la forza e doni il premio, + <br>per Cristo Signore nostro. ** <br> <br>Per mezzo di lui gli Angeli lodano la tua gloria, * <br>le Dominazioni ti adorano, <br>le Potenze ti venerano con tremore; * <br>a te inneggiano i cieli dei cieli e i Serafini, + <br>uniti in eterna esultanza. ** <br> <br>Al loro canto concedi, o Signore, * <br>che si uniscano le nostre umili voci + <br>nell’inno di lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>345Preghiera Eucaristica<br>★ Prefazio di Quaresima V <br>La via dell’esodo nel deserto quaresimale <br>Il seguente prefazio si dice nelle Messe delle ferie di Quaresima. <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente giusto benedire il tuo nome, <br>Padre santo, ricco di misericordia, * <br>nel nostro itinerario verso la luce pasquale <br>sulle orme di Cristo, * <br>maestro e modello + <br>dell’umanità riconciliata nell’amore. ** <br> <br>Tu riapri alla Chiesa la strada dell’esodo <br>attraverso il deserto quaresimale, * <br>perché ai piedi della santa montagna, <br>con il cuore contrito e umiliato, <br>prenda coscienza della sua vocazione <br>di popolo dell’alleanza, * <br>convocato per la tua lode <br>nell’ascolto della tua parola + <br>e nell’esperienza gioiosa dei tuoi prodigi. ** <br> <br>Per questi segni di salvezza, * <br>insieme agli angeli, ministri della tua gloria, * <br>proclamiamo nel canto + <br>la tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio della Passione del Signore I <br>La potenza della Croce<br>Il seguente prefazio si dice nelle ferie della quinta settimana di Quaresima e nelle Messe <br>che celebrano i misteri della Croce e della Passione del Signore.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Per la passione salvifica del tuo Figlio * <br>l’intero universo <br>ha riconosciuto il senso della tua gloria; * <br>nella potenza ineffabile della croce + <br>splende il giudizio sul mondo <br>e il potere regale di Cristo crocifisso. ** <br> <br>E noi, o Signore, <br>uniti agli angeli e a tutti i santi, * <br>eleviamo a te un inno di lode + <br>ed esultanti cantiamo: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>347Preghiera Eucaristica<br>Prefazio della Passione del Signore II <br>La vittoria della Passione<br>Il seguente prefazio si dice il lunedì, il martedì e il mercoledì della Settimana Santa. <br> <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, <br>Dio onnipotente ed eterno, + <br>per Cristo Signore nostro. ** <br> <br>Contempliamo ormai vicini i giorni <br>della sua Pasqua di morte e risurrezione * <br>nei quali è sconfitta la superbia dell’antico avversario * <br>e celebrato il mistero + della nostra redenzione. ** <br> <br>Per questo grande mistero, <br>le schiere degli angeli adorano la tua gloria * <br>e per l’eternità si allietano al tuo cospetto. * <br>Al loro canto concedi, o Signore, + <br>che si uniscano le nostre voci nell’inno di lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio Pasquale I <br>Il mistero pasquale<br>Il seguente prefazio si dice nel Tempo Pasquale. Nella Veglia Pasquale si dice: in questa <br>notte, nel giorno di Pasqua e per tutta l’Ottava si dice: in questo giorno , le altre volte: <br>in questo tempo.<br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>proclamare sempre la tua gloria, o Signore, * <br>e soprattutto esaltarti <br>[in questa notte] in questo giorno [in questo tempo] + <br>nel quale Cristo, nostra Pasqua, si è immolato. ** <br> <br>È lui il vero Agnello <br>che ha tolto i peccati del mondo, * <br>è lui che morendo ha distrutto la morte * <br>e risorgendo + <br>ha ridato a noi la vita. ** <br> <br>Per questo mistero, <br>nella pienezza della gioia pasquale, * <br>l’umanità esulta su tutta la terra * <br>e le schiere degli angeli e dei santi + <br>cantano senza fine l’inno della tua gloria: **<br><br>349Preghiera Eucaristica<br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br> <br>Nella Veglia Pasquale, nel giorno di Pasqua e per tutta l’Ottava, nel Canone Romano si <br>dicono il Communicántese l’Hanc ígitur propri.<br>★ Nelle Preghiere Eucaristiche II e III si fa il ricordo proprio della Pasqua e dei neobattezzati. Nella Veglia Pasquale si dice: notte.<br><br>Prefazio Pasquale II <br>La vita nuova in Cristo <br>Il seguente prefazio si dice nel Tempo Pasquale.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>proclamare sempre la tua gloria, o Signore, * <br>e soprattutto esaltarti in questo tempo + <br>nel quale Cristo, nostra Pasqua, si è immolato. ** <br> <br>Per mezzo di lui rinascono a vita nuova <br>i figli della luce, * <br>e si aprono ai credenti le porte del regno dei cieli. * <br>In lui morto è redenta la nostra morte, + <br>in lui risorto tutta la vita risorge. ** <br> <br>Per questo mistero, <br>nella pienezza della gioia pasquale, * <br>l’umanità esulta su tutta la terra * <br>e le schiere degli angeli e dei santi + <br>cantano senza fine l’inno della tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>351Preghiera Eucaristica<br>Prefazio Pasquale III <br>Cristo vive per sempre e intercede per noi<br>Il seguente prefazio si dice nel Tempo Pasquale.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>proclamare sempre la tua gloria, o Signore, * <br>e soprattutto esaltarti in questo tempo + <br>nel quale Cristo, nostra Pasqua, si è immolato. ** <br> <br>Egli continua a offrirsi per noi * <br>e intercede come nostro avvocato; * <br>immolato sulla croce, più non muore, + <br>e con i segni della passione vive immortale. ** <br> <br>Per questo mistero, <br>nella pienezza della gioia pasquale, * <br>l’umanità esulta su tutta la terra * <br>e le schiere degli angeli e dei santi + <br>cantano senza fine l’inno della tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio Pasquale IV <br>La restaurazione dell’universo per mezzo del mistero pasquale <br>Il seguente prefazio si dice nel Tempo Pasquale.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>proclamare sempre la tua gloria, o Signore, * <br>e soprattutto esaltarti in questo tempo + <br>nel quale Cristo, nostra Pasqua, si è immolato. ** <br> <br>In lui, vincitore del peccato e della morte, * <br>l’universo risorge e si rinnova, * <br>e l’uomo ritorna alle sorgenti della vita. ** <br> <br>Per questo mistero, <br>nella pienezza della gioia pasquale, * <br>l’umanità esulta su tutta la terra * <br>e le schiere degli angeli e dei santi + <br>cantano senza fine l’inno della tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>353Preghiera Eucaristica<br>Prefazio Pasquale V <br>Cristo Agnello e sacerdote<br>Il seguente prefazio si dice nel Tempo Pasquale.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>proclamare sempre la tua gloria, o Signore, * <br>e soprattutto esaltarti in questo tempo + <br>nel quale Cristo, nostra Pasqua, si è immolato. ** <br> <br>Offrendo il suo corpo sulla croce, * <br>diede compimento ai sacrifici antichi * <br>e, donandosi per la nostra redenzione, + <br>divenne altare, Agnello e sacerdote. ** <br> <br>Per questo mistero, <br>nella pienezza della gioia pasquale, * <br>l’umanità esulta su tutta la terra * <br>e le schiere degli angeli e dei santi + <br>cantano senza fine l’inno della tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio dell’Ascensione del Signore I <br>Il mistero dell’Ascensione<br>Il seguente prefazio si dice nel giorno dell’Ascensione del Signore. Si può dire nei giorni <br>dopo l’Ascensione fino al sabato che precede la Pentecoste, nelle Messe che non hanno <br>un prefazio proprio.<br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Il Signore Gesù, re della gloria, * <br>vincitore del peccato e della morte, * <br>[oggi] è salito al cielo + <br>contemplato dagli angeli. ** <br> <br>Mediatore tra Dio e gli uomini, <br>giudice del mondo e Signore dell’universo, * <br>ci ha preceduti nella dimora eterna <br>non per separarsi dalla nostra condizione umana, * <br>ma per darci la serena fiducia che dove è lui, <br>capo e primogenito, + <br>saremo anche noi, sue membra, <br>uniti nella stessa gloria. ** <br> <br>Per questo mistero, <br>nella pienezza della gioia pasquale, * <br>l’umanità esulta su tutta la terra * <br>e le schiere degli angeli e dei santi + <br>cantano senza fine l’inno della tua gloria: **<br><br>355Preghiera Eucaristica<br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br> <br>Nel giorno dell’Ascensione, nel Canone Romano si dice il Communicántes proprio.<br>★ Nelle Preghiere Eucaristiche II e III si fa il ricordo proprio dell’Ascensione.<br><br>Prefazio dell’Ascensione del Signore II <br>Il mistero dell’Ascensione<br>Il seguente prefazio si dice nel giorno dell’Ascensione del Signore. Si può dire nei giorni <br>dopo l’Ascensione fino al sabato che precede la Pentecoste, nelle Messe che non hanno <br>un prefazio proprio.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, <br>Dio onnipotente ed eterno, + <br>per Cristo Signore nostro. ** <br> <br>Dopo la risurrezione <br>egli si mostrò visibilmente a tutti i discepoli, * <br>e sotto il loro sguardo salì al cielo, * <br>perché noi fossimo partecipi + <br>della sua vita divina. ** <br> <br>Per questo mistero, <br>nella pienezza della gioia pasquale, * <br>l’umanità esulta su tutta la terra * <br>e le schiere degli angeli e dei santi + <br>cantano senza fine l’inno della tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br> <br>Nel giorno dell’Ascensione, nel Canone Romano si dice il Communicántes proprio.<br>★ Nelle Preghiere Eucaristiche II e III si fa il ricordo proprio dell’Ascensione.<br><br>357Preghiera Eucaristica<br>★ Prefazio dopo l’Ascensione <br>Nell’attesa della venuta dello Spirito<br>Il seguente prefazio si può dire nei giorni dopo l’Ascensione fino al sabato che precede la <br>Pentecoste, nelle Messe che non hanno un prefazio proprio.<br> <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, * <br>che tutte le creature in cielo e sulla terra <br>si uniscano nella tua lode, * <br>Dio onnipotente ed eterno, + <br>per Cristo tuo Figlio, Signore dell’universo. ** <br> <br>Entrato una volta per sempre <br>nel santuario dei cieli, * <br>egli intercede per noi, * <br>mediatore e garante + <br>della perenne effusione dello Spirito. ** <br> <br>Pastore e custode delle nostre anime, * <br>ci chiama all’unanime preghiera, * <br>sull’esempio di Maria e degli apostoli, + <br>nell’attesa di una rinnovata Pentecoste. ** <br> <br>Per questo mistero di santificazione e d’amore, * <br>uniti agli angeli e ai santi, * <br>cantiamo senza fine + <br>l’inno della tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio delle domeniche <br>del Tempo Ordinario I <br>Il mistero pasquale e il popolo di Dio<br>Il seguente prefazio si dice nelle domeniche del Tempo Ordinario. <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Padre santo, Dio onnipotente ed eterno, + <br>per Cristo Signore nostro. ** <br> <br>Mirabile è l’opera da lui compiuta nel mistero pasquale: * <br>egli ci ha fatti passare <br>dalla schiavitù del peccato e della morte <br>alla gloria di proclamarci stirpe eletta, <br>regale sacerdozio, gente santa, <br>popolo che egli si è acquistato, * <br>per annunciare in ogni luogo i tuoi prodigi, o Padre, + <br>che dalle tenebre ci hai chiamati <br>allo splendore della tua luce. ** <br> <br>E noi, uniti agli Angeli e agli Arcangeli, * <br>ai Troni e alle Dominazioni <br>e alla moltitudine dei cori celesti, * <br>cantiamo con voce incessante + <br>l’inno della tua gloria: **<br><br>359Preghiera Eucaristica<br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio delle domeniche <br>del Tempo Ordinario II <br>Il mistero della redenzione <br>Il seguente prefazio si dice nelle domeniche del Tempo Ordinario. <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, Dio onnipotente ed eterno, + <br>per Cristo Signore nostro. ** <br> <br>Nella sua misericordia per noi peccatori <br>egli si è degnato di nascere dalla Vergine; * <br>morendo sulla croce, <br>ci ha liberati dalla morte eterna * <br>e con la sua risurrezione + <br>ci ha donato la vita immortale. ** <br> <br>Per questo mistero di salvezza, * <br>con gli Angeli e gli Arcangeli, <br>i Troni, le Dominazioni, <br>e con tutte le schiere celesti, * <br>cantiamo senza fine + <br>l’inno della tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>361Preghiera Eucaristica<br>Prefazio delle domeniche <br>del Tempo Ordinario III <br>La salvezza dell’uomo nel Figlio fatto uomo<br>Il seguente prefazio si dice nelle domeniche del Tempo Ordinario. <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Abbiamo riconosciuto il segno della tua immensa gloria * <br>quando hai mandato il tuo Figlio + <br>a prendere su di sé la nostra debolezza; ** <br>in lui, nuovo Adamo, hai redento l’umanità decaduta, * <br>e con la sua morte + <br>ci hai resi partecipi della vita immortale. ** <br> <br>Per mezzo di lui le schiere degli angeli <br>adorano la tua maestà divina * <br>e nell’eternità si allietano davanti al tuo volto. * <br>Al loro canto concedi, o Signore, + <br>che si uniscano le nostre voci nell’inno di lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio delle domeniche <br>del Tempo Ordinario IV <br>La storia della salvezza<br>Il seguente prefazio si dice nelle domeniche del Tempo Ordinario. <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, <br>Dio onnipotente ed eterno + <br>per Cristo Signore nostro. ** <br> <br>Egli, nascendo da Maria Vergine, <br>ha rinnovato l’umanità decaduta; * <br>soffrendo la passione, <br>ha distrutto i nostri peccati; * <br>risorgendo dai morti, <br>ci ha aperto il passaggio alla vita eterna; * <br>salendo a te, o Padre, + <br>ci ha dischiuso le porte del regno dei cieli. ** <br> <br>Per questo mistero di salvezza, * <br>uniti agli angeli e ai santi, * <br>cantiamo senza fine + <br>l’inno della tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>363Preghiera Eucaristica<br>Prefazio delle domeniche <br>del Tempo Ordinario V <br>La creazione<br>Il seguente prefazio si dice nelle domeniche del Tempo Ordinario. <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Tu hai creato il mondo nella varietà dei suoi elementi * <br>e hai disposto l’avvicendarsi dei tempi e delle stagioni. ** <br>All’uomo, fatto a tua immagine, <br>hai affdato le meraviglie dell’universo, * <br>perché, fedele interprete dei tuoi disegni, <br>si prenda cura di tutto il creato, * <br>e nelle tue opere glorifichi te, <br>per Cristo Signore nostro. <br>** <br> <br>E noi, <br>con tutti gli angeli del cielo, * <br>innalziamo a te la nostra lode, + <br>acclamando con festosa esultanza: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio delle domeniche <br>del Tempo Ordinario VI <br>Il pegno della Pasqua eterna<br>Il seguente prefazio si dice nelle domeniche del Tempo Ordinario. <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Da te riceviamo esistenza, energia e vita: * <br>ogni giorno del nostro pellegrinaggio sulla terra <br>è un dono sempre nuovo del tuo amore per noi <br>e un pegno de lla vita immortale, * <br>poiché possediamo fin da ora le primizie dello Spirito, <br>nel quale hai risuscitato Gesù Cristo dai morti, * <br>e viviamo nell’attesa che si compia la beata speranza + <br>nella Pasqua eterna del tuo regno. ** <br> <br>Per questo mistero di salvezza, * <br>con tutti gli angeli del cielo, * <br>innalziamo a te la nostra lode, + <br>acclamando con festosa esultanza: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>365Preghiera Eucaristica<br>Prefazio delle domeniche <br>del Tempo Ordinario VII <br>La salvezza mediante l’obbedienza di Cristo <br>Il seguente prefazio si dice nelle domeniche del Tempo Ordinario. <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Nella tua misericordia hai tanto amato il mondo * <br>da mandare il tuo Unigenito come redentore * <br>a condividere in tutto, eccetto il peccato, + <br>la nostra condizione umana. ** <br> <br>Così hai amato in noi <br>ciò che tu amavi nel Figlio * <br>e in lui, servo obbediente, + <br>hai ricostruito l’alleanza <br>distrutta dalla disobbedienza del peccato. ** <br> <br>Per questo mistero di salvezza, * <br>uniti agli angeli e ai santi, * <br>cantiamo esultanti + la tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio delle domeniche <br>del Tempo Ordinario VIII <br>La Chiesa radunata nella comunione della T rinità <br>Il seguente prefazio si dice nelle domeniche del Tempo Ordinario. <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Con il Sangue del tuo Figlio <br>e la potenza dello Spirito <br>hai raccolto intorno a te <br>i figli dispersi a causa del peccato, * <br>perché il tuo popolo, <br>radunato nella comunione della Trinità, <br>a lode della tua multiforme sapienza, * <br>sia riconosciuto corpo di Cristo, tempio dello Spirito, + <br>Chiesa del Dio vivente. ** <br> <br>Per questo mistero di salvezza, * <br>uniti ai cori degli angeli, * <br>proclamiamo esultanti + <br>la tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>367Preghiera Eucaristica<br>Prefazio delle domeniche <br>del Tempo Ordinario IX * <br>La missione dello Spirito nella Chiesa <br>Il seguente prefazio si dice nelle domeniche del Tempo Ordinario. <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>In ogni tempo tu doni energie nuove alla tua Chiesa * <br>e lungo il suo cammino + <br>mirabilmente la guidi e la proteggi. ** <br>Con la potenza del tuo santo Spirito <br>le assicuri il tuo sostegno, * <br>ed essa, nel suo amore fiducioso, <br>non si stanca mai d’invocarti nella prova, * <br>e nella gioia sempre ti rende grazie, + <br>per Cristo Signore nostro. ** <br> <br>Per mezzo di lui <br>cieli e terra inneggiano al tuo amore; <br>* <br>e noi, uniti agli angeli e ai santi, + <br>cantiamo senza fine la tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br>* Q uesto prefazio ricorre anche nella Messa votiva dello Spirito Santo B.<br><br>★ Prefazio delle domeniche <br>del Tempo Ordinario X <br>Il giorno del Signore<br>Il seguente prefazio si dice nelle domeniche del Tempo Ordinario. <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente giusto benedirti e renderti grazie, * <br>Padre santo, sorgente della verità e della vita, * <br>perché in questo giorno di festa + <br>ci hai convocato nella tua casa. ** <br> <br>Oggi la tua famiglia, <br>riunita nell’ascolto della P arola <br>e nella comunione dell’unico pane spezzato, * <br>fa memoria del Signore risorto * <br>nell’attesa della domenica senza tramonto, + <br>quando l’umanità intera entrerà nel tuo riposo. ** <br> <br>Allora noi vedremo il tuo volto * <br>e loderemo senza fine + <br>la tua misericordia. ** <br> <br>Con questa gioiosa speranza, <br>uniti agli angeli e ai santi, * <br>cantiamo a una sola voce + <br>l’inno della tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>369Preghiera Eucaristica<br>★ Prefazio del Battesimo <br>Il Battesimo inizio della vita nuova<br> <br>Il seguente prefazio si può dire nella Messa rituale del Battesimo. <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È giusto renderti grazie <br>ed esaltare il tuo nome, * <br>Padre santo e misericordioso, + <br>per Cristo nostro Signore e redentore. ** <br> <br>Noi ti lodiamo, ti benediciamo, <br>ti glorifichiamo * <br>per il sacramento della nostra rinascita. ** <br> <br>Dal cuore squarciato del tuo Figlio <br>hai fatto scaturire per noi il dono nuziale del Battesimo, * <br>prima Pasqua dei credenti, <br>porta della nostra salvezza, <br>* <br>inizio della vita in Cristo, + <br>fonte dell’umanità nuova. ** <br> <br>Dall’acqua e dallo Spirito, <br>nel grembo della Chiesa, vergine e madre, * <br>tu generi il popolo sacerdotale e regale, * <br>radunato da tutte le genti + <br>nell’unità e nella santità del tuo amore. ** <br> <br>Per questo dono della tua benevolenza <br>la tua famiglia ti adora <br>* <br>e, unita agli angeli e ai santi, + <br>canta l’inno della tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br> <br>Nelle Preghiere Eucaristiche si fa il ricordo dei neo-battezzati.<br><br>★ Prefazio della Confermazione <br>Confermati con il sigillo dello Spirito<br>Il seguente prefazio si può dire nella Messa rituale della Confermazione. <br> <br> <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente giusto renderti grazie, * <br>è bello cantare la tua gloria, <br>Padre santo, <br>sorgente di ogni bene, * <br>che nel Battesimo rigeneri i credenti + <br>e li rendi partecipi <br>del mistero pasquale del tuo Figlio. ** <br> <br>Tu li confermi con il sigillo dello Spirito * <br>mediante l’imposizione delle mani + <br>e l’unzione regale del crisma. ** <br>Così rinnovati a immagine di Cristo, * <br>unto di Spirito Santo <br>e inviato per il lieto annuncio della salvezza, * <br>li fai tuoi commensali al banchetto eucaristico + <br>e testimoni della fede nella Chiesa e nel mondo. ** <br> <br>E noi, <br>riuniti in festosa assemblea <br>per celebrare i prodigi di una rinnovata Pentecoste, <br>* <br>insieme agli angeli e ai santi, + <br>cantiamo l’inno della tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br> <br>Nelle Preghiere Eucaristiche si fa il ricordo dei neo-confermati.<br><br>371Preghiera Eucaristica<br>Prefazio della Santissima Eucaristia I <br>L’Eucaristia memoriale del sacrificio di Cristo<br>Il seguente prefazio si dice nella Messa «Cena del Signore». Si può dire anche nella so -<br>lennità del Santissimo Corpo e Sangue di Cristo e nelle Messe votive della Santissima <br>Eucaristia.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, Dio onnipotente ed eterno, + <br>per Cristo Signore nostro. ** <br> <br>Sacerdote vero ed eterno, <br>egli istituì il rito del sacrificio perenne; * <br>a te per primo si offrì vittima di salvezza, * <br>e comandò a noi di compiere l’offerta + <br>in sua memoria. ** <br> <br>Il suo Corpo per noi immolato <br>è nostro cibo e ci dà forza, * <br>il suo Sangue per noi versato + <br>è la bevanda che ci redime da ogni colpa. ** <br> <br>P er questo mistero di salvezza, * <br>il cielo e la terra si uniscono in un cantico nuovo <br>di adorazione e di lode, <br>* <br>e noi, con tutti gli angeli del cielo, + <br>proclamiamo senza fine la tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br> <br>Nel Canone Romano, nella Messa «Cena del Signore» si dicono il Communicántes, <br>l’Hanc ígitur e il Qui pridie propri (cf. pp. 143-144 ).<br>★ Nelle Preghiere Eucaristiche II e III si fa il ricordo proprio.<br><br>Prefazio della Santissima Eucaristia II <br>I frutti della Santissima Eucaristia<br>Il seguente prefazio si dice nella solennità del Santissimo Corpo e Sangue di Cristo e nelle <br>Messe votive della Santissima Eucaristia.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, Dio onnipotente ed eterno, + <br>per Cristo Signore nostro. ** <br> <br>Nell’ultima Cena con i suoi apostoli, * <br>egli volle perpetuare nei secoli <br>il memoriale di salvezza della sua croce, * <br>e si offrì a te, Agnello senza macchia, + <br>lode perfetta e sacrificio a te gradito. ** <br> <br>In questo grande mistero <br>tu nutri e santifichi i tuoi fedeli, * <br>perché l’umanità, diffusa su tutta la terra, * <br>sia illuminata dall’unica fede + <br>e riunita dall’unico amore. ** <br> <br>E noi ci accostiamo a questo santo convito, * <br>perché l’effusione del tuo Spirito + <br>ci trasformi a immagine della tua gloria. ** <br> <br>P er questo mistero di salvezza, * <br>il cielo e la terra si uniscono in un cantico nuovo <br>di adorazione e di lode; * <br>e noi, con tutte le schiere degli angeli, + <br>proclamiamo senza fine la tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>373Preghiera Eucaristica<br>★ Prefazio della Santissima Eucaristia III <br>L’Eucaristia viatico verso la Pasqua eterna <br>Il seguente prefazio si può dire nella Messa rituale per il Viatico.<br> <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente giusto renderti grazie * <br>e benedire il tuo nome, Padre santo, + <br>Dio di misericordia e di pace. ** <br> <br>Tu hai voluto che il tuo Figlio, <br>obbediente fino alla morte di croce, * <br>ci precedesse sulla via del ritorno a te, * <br>termine ultimo + di ogni umana attesa. ** <br> <br>Nell’Eucaristia, testamento del suo amore, * <br>egli si fa cibo e bevanda spirituale + <br>per il nostro viaggio verso la Pasqua eterna. ** <br> <br>Con questo pegno della risurrezione finale * <br>partecipiamo nella speranza alla mensa gloriosa del tuo regno * <br>e, uniti agli angeli e ai santi, + <br>proclamiamo l’inno della tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br> <br>★ Nelle Preghiere Eucaristiche si fa il ricordo di colui che riceve il Viatico.<br><br>★ Prefazio dell’Ordine <br>Cristo sorgente di ogni ministero nella Chiesa <br>Il seguente prefazio si può dire nella Messa rituale dell’ordinazione.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta <br>lodarti e renderti grazie, * <br>Padre santo, Dio onnipotente e misericordioso, + <br>da cui proviene ogni paternità, <br>nella comunione di un solo Spirito. ** <br> <br>In Cristo tuo Figlio, eterno sacerdote, <br>servo obbediente, <br>pastore dei pastori, * <br>hai posto la sorgente di ogni ministero * <br>nella vivente tradizione apostolica + <br>del tuo popolo pellegrinante nel tempo. ** <br> <br>Con la varietà dei doni e dei carismi <br>tu scegli e costituisci i dispensatori dei santi misteri, <br>* <br>perché in ogni parte della terra <br>sia offerto il sacrificio perfetto * <br>e con la P arola e i Sacramenti <br>si edifichi la Chiesa, + <br>comunità della nuova alleanza, <br>tempio della tua lode. ** <br> <br>Per questo mistero di salvezza, * <br>uniti agli angeli e ai santi, * <br>cantiamo con gioia + <br>l’inno della tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br> <br>Nelle Preghiere Eucaristiche si fa il ricordo dei neo-ordinati.<br><br>375Preghiera Eucaristica<br>Prefazio del Matrimonio <br>La dignità dell’alleanza nuziale<br>Il seguente prefazio si dice nella Messa rituale del Matrimonio. Per gli altri prefazi del <br>Matrimonio vedi pp. 815 e 818.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Tu hai dato alla comunità coniugale la dolce legge dell’amore <br>e il vincolo indissolubile della pace, * <br>perché l’unione casta e feconda degli sposi + <br>accresca il numero dei tuoi figli. ** <br> <br>Con disegno mirabile hai disposto <br>che la nascita di nuove creature allieti l’umana famiglia, * <br>e la loro rinascita edifichi la tua Chiesa, + <br>in Cristo Signore nostro. ** <br> <br>Per mezzo di lui, <br>uniti agli angeli e a tutti i santi, * <br>cantiamo senza fine + <br>l’inno della tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br> <br>★ Nelle Preghiere Eucaristiche si fa il ricordo dei nuovi sposi.<br><br>★ Prefazio della Penitenza <br>Il sacramento della Riconciliazione nello Spirito<br>Il seguente prefazio si può dire nel Tempo di Quaresima. Si dice nella Messa della <br>Riconciliazione e nelle Messe di carattere penitenziale.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente giusto lodarti e renderti grazie, <br>Padre santo, Dio onnipotente, * <br>per i tuoi benefici + <br>e soprattutto per la grazia del perdono. ** <br> <br>All’uomo, naufrago a causa del peccato, * <br>con il sacramento della Riconciliazione * <br>hai aperto in Cristo crocifisso e risorto + <br>il porto della misericordia e della pace. ** <br> <br>Nella potenza del tuo Spirito * <br>hai stabilito per la Chiesa, <br>santa e insieme bisognosa di penitenza, <br>una seconda tavola di salvezza dopo il Battesimo, * <br>e incessantemente la rinnovi + <br>per radunarla al banchetto gioioso del tuo amore. ** <br> <br>Per questo dono della tua benevolenza, * <br>insieme agli angeli e ai santi, * <br>cantiamo unanimi + <br>l’inno della tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>377Preghiera Eucaristica<br>★ Prefazio dell’Unzione degli infermi <br>La sofferenza, partecipazione alla Pasqua di Cristo<br>Il seguente prefazio si può dire nella Messa rituale dell’Unzione degli infermi. <br> <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente giusto renderti grazie, * <br>Padre santo, Dio onnipotente e misericordioso, + <br>per Cristo, nostro redentore e Signore. ** <br> <br>Tu hai voluto che il tuo unico Figlio, <br>autore della vita, <br>medico dei corpi e delle anime, * <br>prendesse su di sé le nostre infermità * <br>per soccorrerci nell’ora della prova + <br>e santificarci nell’esperienza del dolore. ** <br> <br>Nel segno sacramentale dell’Unzione, <br>mediante la preghiera della Chiesa, * <br>ci purifichi e ci sollevi <br>con la grazia dello Spirito * <br>e ci rendi intimamente partecipi + <br>della vittoria pasquale. ** <br> <br>Per questo segno della tua benevolenza, * <br>uniti agli angeli e ai santi, * <br>cantiamo a una sola voce + <br>l’inno della tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br> <br>Nelle Preghiere Eucaristiche si fa il ricordo di coloro che hanno ricevuto l’Unzione degli <br>infermi.<br><br>Prefazio della beata Vergine Maria I <br>La maternità della beata Vergine Maria<br>Il seguente prefazio si dice nelle Messe della beata Vergine Maria, menzionando la celebrazione del giorno, secondo quanto è indicato nelle singole Messe.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Noi ti lodiamo, ti benediciamo, <br>ti glorifichiamo * <br>nella … della beata sempre V ergine Maria. ** <br> <br>Per opera dello Spirito Santo <br>ha concepito il tuo unico Figlio, * <br>e sempre intatta nella sua gloria verginale, <br>ha irradiato sul mondo la luce eterna, * <br>Gesù Cristo, Signore nostro. ** <br> <br>Per mezzo di lui gli Angeli lodano la tua grandezza, * <br>le Dominazioni ti adorano, <br>le Potenze ti venerano con tremore; * <br>a te inneggiano i cieli dei cieli e i Serafini, + <br>uniti in eterna esultanza. ** <br>Al loro canto concedi, o Signore, * <br>che si uniscano le nostre umili voci + <br>nell’inno di lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>379Preghiera Eucaristica<br>Prefazio della beata Vergine Maria II <br>La Chiesa con Maria magnifica il Signore <br>Il seguente prefazio si dice nelle Messe della beata Vergine Maria.<br> <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>renderti grazie, o Padre, <br>per le meraviglie che hai operato nei tuoi santi; * <br>ma è ancor più dolce e doveroso, <br>in questa memoria della beata V ergine Maria, + <br>magnificare il tuo amore per noi <br>con il suo stesso cantico di lode. <br>** <br> <br>Grandi cose hai fatto, o Signore, <br>per tutti i popoli della terra * <br>e hai prolungato nei secoli <br>l’opera della tua misericordia * <br>quando hai guardato l’umiltà della tua serva + <br>e per mezzo di lei ci hai donato il Salvatore del mondo, <br>il tuo Figlio Gesù Cristo, Signore nostro. ** <br> <br>In lui le schiere degli angeli, <br>unite in eterna esultanza, * <br>adorano la tua immensa grandezza. * <br>Al loro canto concedi, o Signore, + <br>che si uniscano le nostre voci nell’inno di lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio della beata Vergine Maria III <br>Maria modello e Madre della Chiesa<br>Il seguente prefazio si dice nelle Messe della beata Vergine Maria.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo <br>a te, Signore, Padre santo, Dio onnipotente ed eterno, * <br>e magnificare te, degno di ogni lode, + <br>nella festa [memoria] della beata V ergine Maria. ** <br> <br>A ll ’annuncio dell ’angelo <br>accolse nel cuore immacolato il tuo Verbo * <br>e lo concepì nel grembo verginale. * <br>Divenendo Madre del suo Creatore, + <br>segnò gli inizi della Chiesa. ** <br> <br>Ai piedi della croce, per il testamento d’amore del tuo Figlio, * <br>accolse come figli tutti gli uomini, * <br>generati dalla morte di Cristo + <br>per una vita che non avrà mai fine. ** <br> <br>Immagine e modello della Chiesa orante, <br>si unì alla preghiera degli apostoli <br>nell’attesa dello Spirito Santo. * <br>Assunta alla gloria del cielo, <br>accompagna con materno amore la Chiesa * <br>e la protegge nel cammino verso la patria, + <br>fino al giorno glorioso del Signore. ** <br> <br>E noi, uniti agli angeli e ai santi, * <br>cantiamo con gioia + l’inno della tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>381Preghiera Eucaristica<br>★ Prefazio della beata Vergine Maria IV <br>Maria segno di consolazione e di speranza <br>Il seguente prefazio si dice nelle Messe della beata Vergine Maria.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente giusto renderti grazie, * <br>è bello cantare la tua gloria, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Noi ti lodiamo e ti benediciamo, <br>per Cristo tuo Figlio * <br>nella festa [memoria] della beata V ergine Maria. ** <br> <br>Umile ancella, accolse la tua parola <br>e la custodì nel suo cuore; * <br>mirabilmente unita al mistero della redenzione, <br>perseverò con gli apostoli in preghiera <br>nell’attesa dello Spirito Santo; <br>* <br>ora risplende sul nostro cammino + <br>segno di consolazione e di sicura speranza. ** <br> <br>Per questo dono della tua benevolenza, * <br>uniti agli angeli e ai santi, * <br>innalziamo a te il nostro canto + <br>e proclamiamo la tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>★ Prefazio della beata Vergine Maria V <br>Maria immagine dell’umanità nuova<br>Il seguente prefazio si dice nelle Messe della beata Vergine Maria.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente giusto rendere grazie <br>a te, Signore, Padre santo, * <br>fonte della vita e della gioia. ** <br> <br>Tu hai rivelato nella pienezza dei tempi <br>il mistero nascosto nei secoli, * <br>perché il mondo intero + <br>tornasse a vivere e a sperare. ** <br> <br>Nel Cristo, nuovo Adamo, <br>e in Maria, nuova Eva, * <br>è apparsa finalmente la tua Chiesa, + <br>primizia dell’umanità redenta. ** <br> <br>Per questo dono, <br>tutta la creazione, <br>con la potenza dello Spirito Santo, <br>* <br>riprende dal principio + <br>il suo cammino verso la Pasqua eterna. ** <br> <br>E noi, <br>insieme agli angeli e ai santi, * <br>cantiamo con voce unanime + <br>l’inno della tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>383Preghiera Eucaristica<br>Prefazio degli angeli <br>La gloria di Dio risplende negli angeli <br>Il seguente prefazio si dice nelle Messe dei santi angeli.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Noi proclamiamo la tua gloria <br>che risplende negli angeli e negli arcangeli; * <br>onorando questi tuoi messaggeri, <br>esaltiamo la tua bontà infinita: * <br>negli spiriti beati <br>tu ci riveli quanto sei grande e amabile <br>al di sopra di ogni creatura, * <br>per Cristo Signore nostro. ** <br> <br>Per mezzo di lui <br>le moltitudini degli angeli celebrano la tua grandezza * <br>e le nostre voci si uniscono in adorazione + <br>al loro inno di lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio di san Giuseppe <br>sposo della beata Vergine Maria <br>La missione di san Giuseppe <br>Il seguente prefazio si dice nelle Messe di san Giuseppe.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Noi ti lodiamo, ti benediciamo, ti glorifichiamo * <br>nella solennità [memoria] di san Giuseppe. ** <br> <br>Egli, uomo giusto, da te fu prescelto <br>come sposo di Maria, Vergine e Madre di Dio; * <br>servo saggio e fedele, <br>fu posto a capo della santa Famiglia <br>per custodire, come padre, il tuo unico Figlio, * <br>concepito per opera dello Spirito Santo, + <br>Gesù Cristo Signore nostro. ** <br> <br>Per mezzo di lui gli Angeli lodano la tua gloria, * <br>le Dominazioni ti adorano, <br>le Potenze ti venerano con tremore; * <br>a te inneggiano i cieli dei cieli e i Serafini, + <br>uniti in eterna esultanza. ** <br>Al loro canto concedi, o Signore, * <br>che si uniscano le nostre umili voci + <br>nell’inno di lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>385Preghiera Eucaristica<br>Prefazio degli apostoli I <br>Gli apostoli, pastori del popolo di Dio<br>Il seguente prefazio si dice nelle Messe degli apostoli, specialmente nelle Messe votive <br>dei santi Pietro e Paolo.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, <br>Dio onnipotente ed eterno, + <br>per Cristo Signore nostro. ** <br> <br>Pastore eterno, <br>tu non abbandoni il tuo gregge, * <br>ma lo custodisci e proteggi sempre <br>per mezzo dei santi apostoli, * <br>e lo conduci attraverso i tempi <br>sotto la guida di coloro <br>che tu stesso hai eletto vicari del tuo Figlio * <br>e hai costituito pastori. ** <br> <br>Per questo dono della tua benevolenza, * <br>uniti agli Angeli e agli Arcangeli, <br>ai Troni e alle Dominazioni <br>e alla moltitudine delle schiere celesti, * <br>cantiamo con voce incessante + <br>l’inno della tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio degli apostoli II <br>La Chiesa fondata sugli apostoli e sulla loro testimonianza <br>Il seguente prefazio si dice nelle Messe degli apostoli e degli evangelisti.<br> <br> <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, <br>Dio onnipotente ed eterno, + <br>per Cristo Signore nostro. ** <br> <br>Tu hai stabilito la tua Chiesa sul fondamento degli apostoli, * <br>perché sulla terra sia segno visibile <br>della tua santità nei secoli * <br>e trasmetta a tutti gli uomini + <br>gli insegnamenti che sono via al cielo. ** <br> <br>Per questo mistero di salvezza, * <br>uniti a tutte le schiere degli angeli, * <br>ora e sempre, con cuore riconoscente, + <br>proclamiamo nel canto la tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>387Preghiera Eucaristica<br>Prefazio dei santi I <br>La gloria dei santi<br>Il seguente prefazio si dice nelle Messe dei santi, dei santi patroni e dei titolari della <br>chiesa, nelle solennità e nelle feste dei santi, se non è indicato un prefazio proprio. Si può <br>dire anche nelle memorie dei santi.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Nella festosa assemblea dei santi <br>risplende la tua gloria, * <br>e il loro trionfo + celebra i doni della tua misericordia. ** <br> <br>Nella vita di san N. [dei santi N. e N.] <br>ci offri un esempio, * <br>nella comunione con lui [con loro] <br>un vincolo di amore fraterno, * <br>nella sua [loro] intercessione + aiuto e sostegno. ** <br> <br>Confortati da così grande testimonianza, * <br>affrontiamo il buon combattimento della fede, * <br>per condividere al di là della morte <br>la stessa corona di gloria, + <br>per Cristo Signore nostro. ** <br> <br>E noi, uniti agli angeli e agli arcangeli <br>e a tutti i santi del cielo, * <br>cantiamo senza fine + <br>l’inno della tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio dei santi II <br>L’esempio e l’intercessione dei santi<br>Il seguente prefazio si dice nelle Messe dei santi, dei santi patroni e dei titolari della <br>chiesa, nelle solennità e nelle feste dei santi, se non è indicato un prefazio proprio. Si può <br>dire anche nelle memorie dei santi.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, <br>Dio onnipotente ed eterno, + <br>per Cristo Signore nostro. ** <br> <br>Nella mirabile testimonianza dei tuoi santi * <br>tu rendi sempre feconda la tua Chiesa * <br>e doni a noi <br>un segno sicuro del tuo amore. ** <br> <br>Il loro grande esempio <br>e la loro fraterna intercessione * <br>ci sostengono nel cammino della vita, * <br>perché si compia in noi il tuo mistero di salvezza. ** <br> <br>E noi, <br>uniti agli angeli e a tutti i santi, * <br>cantiamo con gioia + <br>l’inno della tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>389Preghiera Eucaristica<br>Prefazio dei santi martiri I <br>Il segno e l’esempio del martirio<br>Il seguente prefazio si dice nelle solennità e nelle feste dei santi martiri. Si può dire anche <br>nelle loro memorie.<br> <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Il sangue versato dal santo martire N., <br>a imitazione di Cristo e per la gloria del tuo nome, * <br>manifesta i tuoi prodigi, o Padre, <br>che riveli nei deboli la tua potenza <br>e doni agli inermi la forza del martirio, * <br>per Cristo Signore nostro. ** <br> <br>E noi, <br>con tutti gli angeli del cielo, * <br>a te innalziamo sulla terra il nostro canto * <br>e proclamiamo senza fine + <br>la tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio dei santi martiri II <br>Le meraviglie di Dio nella vittoria dei martiri<br>Il seguente prefazio si dice nelle solennità e nelle feste dei santi martiri. Si può dire anche <br>nelle loro memorie.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, <br>Dio onnipotente ed eterno, + <br>e magnificarti nella lode dei tuoi santi. ** <br> <br>La loro passione fa risplendere <br>le opere mirabili della tua potenza: * <br>sei tu che infondi l’ardore della fede, <br>concedi la fermezza della perseveranza <br>* <br>e doni nel combattimento la vittoria, + <br>per Cristo Signore nostro. ** <br> <br>Per questo dono della tua benevolenza * <br>i cieli e la terra innalzano a te <br>un cantico nuovo di adorazione. <br>* <br>E noi, con tutti gli angeli del cielo, + <br>proclamiamo senza fine la tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>391Preghiera Eucaristica<br>Prefazio dei santi pastori I <br>La presenza dei santi pastori nella Chiesa<br>Il seguente prefazio si dice nelle solennità e nelle feste dei santi pastori. Si può dire anche <br>nelle loro memorie.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, <br>Dio onnipotente ed eterno, + <br>per Cristo Signore nostro. ** <br> <br>Tu doni alla tua Chiesa <br>la gioia di celebrare la festa [memoria] di san N.: * <br>con i suoi esempi la rafforzi, * <br>con i suoi insegnamenti l’ammaestri, + <br>con la sua intercessione la proteggi. ** <br> <br>Per questo dono della tua benevolenza, * <br>con la moltitudine degli angeli e dei santi, * <br>cantiamo senza fine + <br>l’inno della tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>★ Prefazio dei santi pastori II <br>I pastori della Chiesa, immagine di Cristo, buon pastore<br>Il seguente prefazio si dice nelle solennità e nelle feste dei santi pastori. Si può dire anche <br>nelle loro memorie.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>lodarti e ringraziarti sempre, * <br>Dio onnipotente ed eterno, + <br>per Cristo Signore nostro. ** <br> <br>È lui il pastore buono <br>che ha dato la vita per le sue pecore * <br>e continua a pascere il suo gregge + <br>donando alla Chiesa pastori secondo il suo cuore. ** <br> <br>Nella vita di san N. <br>riconosciamo i segni del tuo amore per noi: * <br>nella sua voce, la tua parola, + <br>nei suoi gesti, la tua potenza. ** <br> <br>Per questo dono del tuo amore, * <br>uniti agli angeli e ai santi, * <br>con voce unanime + <br>cantiamo l’inno della tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>393Preghiera Eucaristica<br>★ Prefazio dei santi pastori III <br>L’annuncio del Vangelo alle genti<br>Il seguente prefazio si dice nelle solennità e nelle feste dei santi pastori, in particolare dei <br>vescovi o dei presbiteri missionari. Si può dire anche nelle loro memorie.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta <br>renderti grazie * <br>e innalzare a te l’inno di benedizione e di lode, + <br>Dio onnipotente ed eterno. ** <br> <br>Sospinto dal soffo dello Spirito, * <br>il santo pastore N. <br>ha portato alle genti l’annuncio del Vangelo * <br>e i Sacramenti della salvezza. ** <br> <br>Per questo segno della tua bontà, <br>uniti agli angeli e ai santi, * <br>con voce unanime + <br>cantiamo l’inno della tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>★ Prefazio dei santi dottori della Chiesa I <br>I dottori della Chiesa riflesso della Sapienza<br>Il seguente prefazio si dice nelle solennità e nelle feste dei santi dottori della Chiesa. <br>Si può dire anche nelle loro memorie.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Cristo Signore nostro volle la sua Chiesa <br>sale della terra, luce del mondo, città posta sul monte, * <br>perché tutti possano arrivare alla conoscenza della verità * <br>ed essere salvati. ** <br> <br>Per realizzare questa missione tra le genti * <br>hai suscitato nel tuo popolo san N. [santa N.] <br>e gli [le] hai donato una profonda conoscenza dei divini misteri, * <br>perché con la sapienza, da te ispirata, + <br>fosse lampada di vivo fulgore <br>a gloria del tuo nome. ** <br> <br>Illuminati dalla sua dottrina e dalla sua testimonianza, * <br>con animo grato e gioioso <br>ci uniamo ai cori celesti, * <br>per cantare senza fine + <br>l’inno della tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>395Preghiera Eucaristica<br>★ Prefazio dei santi dottori della Chiesa II <br>I dottori della Chiesa profeti della sublime bellezza di Dio<br>Il seguente prefazio si dice nelle solennità e nelle feste dei santi dottori della Chiesa. <br>Si può dire anche nelle loro memorie.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>lodarti e ringraziarti sempre, * <br>Dio onnipotente ed eterno, + <br>per Cristo Signore nostro. ** <br> <br>Il tuo Figlio è l’unico maestro: * <br>la sua parola, lampada ai nostri passi, * <br>la sua croce, + la sola nostra sapienza. ** <br> <br>Nel tuo disegno di amore <br>hai illuminato san N. [santa N.] * <br>e con i suoi insegnamenti <br>allieti la Chiesa + <br>nella sublime bellezza della tua conoscenza. ** <br> <br>Per questo segno della tua bontà, <br>uniti agli angeli e ai santi, * <br>con voce unanime + <br>cantiamo l’inno della tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio delle sante vergini <br>e dei santi religiosi <br>Il segno della vita consacrata a Dio<br>Il seguente prefazio si dice nelle solennità e nelle feste delle sante vergini e dei santi <br>religiosi. Si può dire anche nelle loro memorie.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Nei tuoi santi, che per il regno dei cieli <br>hanno consacrato la vita a Cristo, * <br>noi celebriamo <br>la mirabile opera della tua provvidenza, * <br>che richiama l’uomo <br>alla santità dell’origine + <br>e gli fa pregustare i doni <br>per lui preparati nel mondo nuovo. ** <br> <br>E noi, <br>uniti agli angeli e ai santi, * <br>con voce unanime + <br>cantiamo senza fine l’inno della tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>397Preghiera Eucaristica<br>Prefazio comune I <br>Il rinnovamento universale in Cristo<br> <br>Il seguente prefazio si dice nelle Messe che non hanno un prefazio proprio e quando <br>non è richiesto il prefazio del Tempo.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, <br>Dio onnipotente ed eterno, + <br>per Cristo Signore nostro. ** <br> <br>In lui hai voluto rinnovare l’universo, <br>perché noi tutti fossimo partecipi della sua pienezza. * <br>Pur essendo nella condizione di Dio, <br>egli svuotò se stesso, * <br>e con il sangue versato sulla croce + <br>pacificò il cielo e la terra. ** <br>Per questo fu esaltato sopra ogni creatura * <br>e divenne causa di salvezza eterna + <br>per tutti coloro che gli obbediscono. ** <br> <br>E noi, <br>uniti agli Angeli e agli Arcangeli, * <br>ai Troni e alle Dominazioni <br>e alla moltitudine delle schiere celesti, * <br>cantiamo con voce incessante + <br>l’inno della tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio comune II <br>La salvezza per mezzo di Cristo<br>Il seguente prefazio si dice nelle Messe che non hanno un prefazio proprio e quando <br>non è richiesto il prefazio del Tempo.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Nella tua bontà hai creato l’uomo * <br>e, quando meritò la giusta condanna, * <br>lo hai redento nella tua misericordia, + <br>per Cristo Signore nostro. ** <br> <br>Per mezzo di lui gli Angeli lodano la tua gloria, * <br>le Dominazioni ti adorano, <br>le Potenze ti venerano con tremore; * <br>a te inneggiano i cieli dei cieli e i Serafini, + <br>uniti in eterna esultanza. ** <br>Al loro canto concedi, o Signore, * <br>che si uniscano le nostre umili voci + <br>nell’inno di lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>399Preghiera Eucaristica<br>Prefazio comune III <br>Lode a Dio per la creazione e la redenzione dell’uomo<br>Il seguente prefazio si dice nelle Messe che non hanno un prefazio proprio e quando <br>non è richiesto il prefazio del Tempo.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Per mezzo di Cristo, tuo amatissimo Figlio, * <br>hai creato l’uomo a tua immagine * <br>e lo hai rigenerato a vita nuova. ** <br> <br>Per questo mistero di salvezza <br>ti servono tutte le creature, * <br>ti lodano tutti i redenti <br>e ti benedicono unanimi gli angeli e i santi. * <br>E noi, uniti con gioia a questo immenso coro, + <br>ti celebriamo, cantando senza fine la tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio comune IV <br>La lode, dono di Dio<br>Il seguente prefazio si dice nelle Messe che non hanno un prefazio proprio e quando <br>non è richiesto il prefazio del Tempo.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Tu non hai bisogno della nostra lode, <br>ma per un dono del tuo amore <br>ci chiami a renderti grazie; * <br>i nostri inni di benedizione <br>non accrescono la tua grandezza, * <br>ma ci ottengono la grazia che ci salva, + <br>per Cristo Signore nostro. ** <br> <br>E noi, <br>con tutti gli angeli del cielo, * <br>innalziamo a te il nostro canto * <br>e proclamiamo con gioia + <br>la tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>401Preghiera Eucaristica<br>Prefazio comune V <br>Proclamazione del mistero di Cristo<br>Il seguente prefazio si dice nelle Messe che non hanno un prefazio proprio e quando <br>non è richiesto il prefazio del Tempo.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, <br>Dio onnipotente ed eterno, + <br>per Cristo Signore nostro. ** <br> <br>Uniti nell’amore, celebriamo la morte del tuo Figlio, * <br>con fede viva proclamiamo la sua risurrezione, * <br>attendiamo con ferma speranza + <br>la sua venuta nella gloria. ** <br> <br>Per questo mistero di salvezza, * <br>insieme agli angeli e ai santi, * <br>con voce unanime + <br>cantiamo l’inno della tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio comune VI <br>Cristo salvatore e redentore<br>Il seguente prefazio si dice nelle Messe che non hanno un prefazio proprio e quando <br>non è richiesto il prefazio del Tempo.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Padre santo, + <br>per Gesù Cristo, tuo amatissimo Figlio. ** <br> <br>Egli è la tua parola vivente: * <br>per mezzo di lui hai creato tutte le cose, <br>lo hai mandato a noi salvatore e redentore, * <br>fatto uomo per opera dello Spirito Santo + <br>e nato dalla V ergine Maria. ** <br> <br>Per compiere la tua volontà <br>e acquistarti un popolo santo, * <br>egli, nell’ora della passione, <br>stese le braccia sulla croce, * <br>morendo distrusse la morte + <br>e proclamò la risurrezione. ** <br> <br>Per questo mistero di salvezza, * <br>uniti agli angeli e ai santi, * <br>cantiamo a una sola voce + <br>la tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>403Preghiera Eucaristica<br>★ Prefazio comune VII <br>Cristo ospite e pellegrino in mezzo a noi<br>Il seguente prefazio si dice nelle Messe che non hanno un prefazio proprio e quando <br>non è richiesto il prefazio del Tempo.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente giusto renderti grazie, * <br>Signore, Padre santo, + <br>Dio dell’alleanza e della pace. ** <br> <br>Tu hai chiamato e fatto uscire Abramo dalla sua terra <br>per costituirlo padre di tutte le genti. * <br>Hai suscitato Mosè per liberare il tuo popolo + <br>e guidarlo alla terra promessa. ** <br> <br>Nella pienezza dei tempi <br>hai mandato il tuo Figlio, <br>ospite e pellegrino in mezzo a noi, <br>per redimerci dal peccato e dalla morte * <br>e hai donato il tuo Spirito <br>per fare di tutte le nazioni un solo popolo nuovo, * <br>che ha come fine il tuo regno, <br>come condizione la libertà dei tuoi figli, + <br>come statuto il precetto dell’amore. ** <br> <br>Per questi doni della tua benevolenza, * <br>uniti agli angeli e ai santi, * <br>cantiamo con gioia + <br>l’inno della tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>★ Prefazio comune VIII <br>Gesù buon samaritano<br>Il seguente prefazio si dice nelle Messe che non hanno un prefazio proprio e quando <br>non è richiesto il prefazio del Tempo.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente giusto lodarti e ringraziarti, <br>Padre santo, Dio onnipotente ed eterno, * <br>in ogni momento della nostra vita, <br>nella salute e nella malattia, <br>nella sofferenza e nella gioia, * <br>per Cristo tuo servo e nostro redentore. ** <br> <br>Nella sua vita mortale * <br>egli passò beneficando e sanando + <br>tutti coloro che erano prigionieri del male. ** <br> <br>Ancora oggi, come buon samaritano, * <br>si fa prossimo a ogni uomo, <br>piagato nel corpo e nello spirito, * <br>e versa sulle sue ferite + <br>l’olio della consolazione <br>e il vino della speranza. ** <br> <br>Per questo dono della tua grazia, * <br>anche la notte del dolore <br>si apre alla luce pasquale <br>* <br>del tuo Figlio crocifisso e risorto. ** <br> <br>E noi, insieme agli angeli e ai santi, * <br>cantiamo con voce unanime + <br>l’inno della tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>405Preghiera Eucaristica<br>★ Prefazio comune IX <br>La gloria di Dio è l’uomo vivente<br>Il seguente prefazio si dice nelle Messe che non hanno un prefazio proprio e quando <br>non è richiesto il prefazio del Tempo.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>lodarti e renderti grazie sempre e in ogni luogo, * <br>Dio onnipotente ed eterno. ** <br> <br>Tu sei l’unico Dio vivo e vero: * <br>l’universo è pieno della tua presenza, * <br>ma soprattutto nell’uomo, creato a tua immagine, + <br>hai impresso il sigillo della tua gloria. ** <br> <br>Tu lo chiami a cooperare con il lavoro quotidiano <br>al progetto della creazione * <br>e gli doni il tuo Spirito, * <br>perché in Cristo, uomo nuovo, + <br>diventi artefice di giustizia e di pace. ** <br> <br>E noi, <br>uniti agli angeli e ai santi, * <br>cantiamo con gioia + <br>l’inno della tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio dei defunti I <br>La speranza della risurrezione in Cristo <br>Il seguente prefazio si dice nelle Messe dei defunti.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, <br>Dio onnipotente ed eterno, + <br>per Cristo Signore nostro. ** <br> <br>In lui rifulge a noi <br>la speranza della beata risurrezione * <br>e, se ci rattrista la certezza di dover morire, + <br>ci consola la promessa dell’immortalità futura. ** <br> <br>Ai tuoi fedeli, o Signore, <br>la vita non è tolta, ma trasformata; <br>* <br>e mentre si distrugge la dimora <br>di questo esilio terreno, + <br>viene preparata un’abitazione eterna nel cielo. ** <br> <br>Per questo mistero di salvezza, * <br>uniti agli Angeli e agli Arcangeli, <br>ai Troni e alle Dominazioni <br>e alla moltitudine delle schiere celesti, * <br>cantiamo con voce incessante + <br>l’inno della tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>407Preghiera Eucaristica<br>Prefazio dei defunti II <br>Cristo è morto per la nostra vita<br>Il seguente prefazio si dice nelle Messe dei defunti.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, <br>Dio onnipotente ed eterno, + <br>per Cristo Signore nostro. ** <br> <br>Egli, prendendo su di sé la nostra morte, <br>ci ha liberati dalla morte * <br>e, sacrificando la sua vita, + <br>ci ha aperto il passaggio alla vita immortale. ** <br> <br>Per questo mistero di salvezza, * <br>uniti ai cori degli angeli, * <br>cantiamo senza fine + <br>la tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio dei defunti III <br>Cristo, salvezza e vita <br>Il seguente prefazio si dice nelle Messe dei defunti.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, <br>Dio onnipotente ed eterno, + <br>per Cristo Signore nostro. ** <br> <br>Egli è la salvezza del mondo, * <br>la vita degli uomini, + <br>la risurrezione dei morti. ** <br> <br>Per mezzo di lui si allietano gli angeli, * <br>e nell’eternità adorano la gloria del tuo volto. * <br>Al loro canto concedi, o Signore, + <br>che si uniscano le nostre umili voci <br>nell’inno di lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>409Preghiera Eucaristica<br>Prefazio dei defunti IV <br>Dalla vita terrena alla gloria eterna <br>Il seguente prefazio si dice nelle Messe dei defunti.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>Sei tu, Signore, che ci dai la vita <br>e ci sostieni con la tua provvidenza; * <br>e se a causa del peccato <br>il nostro corpo ritorna alla terra, <br>dalla quale lo hai formato, * <br>per la morte redentrice del tuo Figlio + <br>la tua potenza ci risveglia alla gloria della risurrezione. ** <br> <br>Per questo mistero di salvezza, * <br>con la moltitudine degli angeli e dei santi, * <br>cantiamo senza fine + <br>l’inno della tua lode: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>Prefazio dei defunti V <br>La nostra risurrezione grazie alla vittoria di Cristo<br>Il seguente prefazio si dice nelle Messe dei defunti.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Signore, Padre santo, + <br>Dio onnipotente ed eterno. ** <br> <br>La morte è comune eredità di tutti gli uomini, * <br>ma, per un dono misterioso del tuo amore, * <br>Cristo con la sua vittoria ci redime dalla morte + <br>e ci richiama con sé a vita nuova. ** <br> <br>E noi, <br>con tutti gli angeli del cielo, * <br>a te innalziamo sulla terra il nostro canto * <br>e proclamiamo senza fine + <br>la tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br>Segue il prefazio, scelto secondo le rubriche, che si conclude con l’acclamazione: <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br>Il sacerdote, con le braccia allargate, dice: <br>Padre clementissimo, <br>noi ti supplichiamo e ti chiediamo <br>per Gesù Cristo, tuo Figlio e nostro Signore, <br>congiunge le mani e dice:<br>di accettare<br>traccia un unico segno di croce sul pane e sul calice, dicendo: <br>e benedire ^ questi doni, <br>queste offerte, questo sacrificio puro e santo.<br>Allargando le braccia, continua:<br>Noi te l’offriamo anzitutto <br>per la tua Chiesa santa e cattolica, <br>perché tu le dia pace, <br>la protegga, la raduni <br>e la governi su tutta la terra <br>in unione con il tuo servo il nostro papa N., <br>il nostro vescovo N.* [con me indegno tuo servo] <br>e con tutti quelli che custodiscono <br>la fede cattolica, <br>trasmessa dagli apostoli.<br><br>o Canone Romano<br>* Qui è permesso nominare anche il vescovo coadiutore o gli ausiliari, <br>come indicato al n. 149 dell’Ordinamento Generale del Messale Romano .<br>CP<br>CP<br><br>413Preghiera Eucaristica I<br>Intercessione per i vivi<br>Ricordati, Signore, dei tuoi fedeli [ N. e N.].<br>Congiunge le mani e prega brevemente per quelli che vuole ricordare. <br>Poi, con le braccia allargate, continua:<br>Ricordati di tutti coloro che sono qui riuniti, <br>dei quali conosci la fede e la devozione: <br>per loro ti offriamo <br>e anch’essi ti offrono questo sacrificio di lode, <br>e innalzano la preghiera a te, Dio eterno, vivo e vero, <br>per ottenere a sé e ai loro cari <br>redenzione, sicurezza di vita e salute.<br>Memoria dei santi<br>In comunione con tutta la Chiesa, <br>ricordiamo e veneriamo anzitutto <br>la gloriosa e sempre Vergine Maria, <br>Madre del nostro Dio e Signore Gesù Cristo, <br>san Giuseppe, suo sposo, <br>i tuoi santi apostoli e martiri: <br>Pietro e Paolo, Andrea, <br>[Giacomo, Giovanni, <br>T ommaso, Giacomo, Filippo, Bartolomeo, <br>Matteo, Simone e Taddeo; <br>Lino, Cleto, Clemente, Sisto, <br>Cornelio e Cipriano, Lorenzo, Crisogono, <br>Giovanni e Paolo, Cosma e Damiano] <br>e tutti i tuoi santi: <br>per i loro meriti e le loro preghiere <br>donaci sempre aiuto e protezione.<br>Communicántes propri pp. 414-415.<br> <br>1C<br>2C<br><br>414 Preghiera Eucaristica I<br>★ D omenica<br>Si può dire in tutte le domeniche tranne quando c’è un altro Communicántes proprio, <br>come indicato sotto.<br>In comunione con tutta la Chiesa, <br>mentre celebriamo il giorno nel quale Cristo ha vinto la morte <br>e ci ha resi partecipi della sua vita immortale, <br>ricordiamo e veneriamo anzitutto <br>la gloriosa e sempre V ergine Maria, <br>Madre del nostro Dio e Signore Gesù Cristo, <br>†<br>Natale del Signore e Ottava<br>In comunione con tutta la Chiesa, <br>mentre celebriamo il giorno santissimo nel quale <br>[la notte santissima nella quale] <br>Maria, vergine illibata, diede al mondo il Salvatore, <br>ricordiamo e veneriamo anzitutto lei, <br>la gloriosa e sempre V ergine Maria, <br>Madre del nostro Dio e Signore Gesù Cristo, <br>† <br>Epifania del Signore<br>In comunione con tutta la Chiesa, <br>mentre celebriamo il giorno santissimo <br>nel quale il tuo unigenito Figlio, eterno con te nella gloria, <br>si è manifestato nella verità della nostra carne <br>in un corpo visibile, ricordiamo e veneriamo <br>anzitutto la gloriosa e sempre V ergine Maria, <br>Madre del nostro Dio e Signore Gesù Cristo, <br>† <br>Dalla Veglia Pasquale alla II domenica di Pasqua<br>In comunione con tutta la Chiesa, <br>mentre celebriamo il giorno santissimo <br>[la notte santissima] <br>della risurrezione di nostro Signore Gesù Cristo <br>nel suo vero corpo, ricordiamo e veneriamo <br>anzitutto la gloriosa e sempre V ergine Maria, <br>Madre del nostro Dio e Signore Gesù Cristo, <br>†<br><br>415Preghiera Eucaristica I<br>Ascensione del Signore<br>In comunione con tutta la Chiesa, <br>mentre celebriamo il giorno santissimo <br>nel quale il tuo unigenito Figlio, nostro Signore, <br>ha portato alla tua destra nella gloria la fragile nostra natura, <br>che egli aveva unito a sé, <br>ricordiamo e veneriamo <br>anzitutto la gloriosa e sempre V ergine Maria, <br>Madre del nostro Dio e Signore Gesù Cristo, <br>† <br>Domenica di Pentecoste<br>In comunione con tutta la Chiesa, <br>mentre celebriamo il giorno santissimo della Pentecoste, <br>nel quale lo Spirito Santo si manifestò agli apostoli <br>in molteplici lingue di fuoco, <br>ricordiamo e veneriamo <br>anzitutto la gloriosa e sempre V ergine Maria, <br>Madre del nostro Dio e Signore Gesù Cristo, <br>†<br>† san Giuseppe, suo sposo, <br>i tuoi santi apostoli e martiri: <br>Pietro e Paolo, Andrea, <br>[Giacomo, Giovanni, <br>T ommaso, Giacomo, Filippo, Bartolomeo, <br>Matteo, Simone e Taddeo; <br>Lino, Cleto, Clemente, Sisto, <br>Cornelio e Cipriano, Lorenzo, Crisogono, <br>Giovanni e Paolo, Cosma e Damiano] <br>e tutti i tuoi santi: <br>per i loro meriti e le loro preghiere <br>donaci sempre aiuto e protezione.<br><br>Con le braccia allargate, prosegue:<br>Accetta con benevolenza, o Signore, <br>questa offerta che ti presentiamo <br>noi tuoi ministri e tutta la tua famiglia: <br>disponi nella tua pace i nostri giorni, <br>salvaci dalla dannazione eterna, <br>e accoglici nel gregge dei tuoi eletti.<br>Congiunge le mani.<br><br>dalla Veglia Pasquale alla II domenica di Pasqua<br>Accetta con benevolenza, o Signore, <br>questa offerta che noi tuoi ministri e tutta la tua famiglia <br>ti presentiamo <br>anche per i nostri fratelli [N. e N.], <br>che ti sei degnato di far rinascere <br>dall’acqua e dallo Spirito Santo, <br>accordando loro il perdono di tutti i peccati. <br>Disponi nella tua pace i nostri giorni, <br>salvaci dalla dannazione eterna, <br>e accoglici nel gregge dei tuoi eletti. <br>Per il Battesimo<br>Accetta con benevolenza, o Signore, <br>questa offerta che noi tuoi ministri e tutta la tua famiglia <br>ti presentiamo <br>anche per i nostri fratelli [N. e N.], <br>che ti sei degnato di far rinascere dall’acqua e dallo Spirito Santo, <br>accordando loro il perdono di tutti i peccati: <br>tu, che li hai inseriti come membra vive in Cristo, <br>scrivi i loro nomi nel libro della vita.<br> <br>CP<br><br>417Preghiera Eucaristica I<br>CC<br>T enendo le mani stese sulle offerte, dice:<br>Santifica, o Dio, questa offerta <br>con la potenza della tua benedizione, <br>e degnati di accettarla a nostro favore, <br>in sacrificio spirituale e perfetto, <br>perché diventi per noi il Corpo e il Sangue <br>del tuo amatissimo Figlio, <br>il Signore nostro Gesù Cristo.<br>Congiunge le mani. <br>Per la Confermazione<br>Accetta con benevolenza, o Signore, <br>questa offerta che noi tuoi ministri e tutta la tua famiglia <br>ti presentiamo <br>anche per i tuoi figli [N. e N.], <br>che hai rigenerato nel Battesimo <br>e confermato con il sigillo dello Spirito Santo: <br>custodisci in loro il dono del tuo amore. <br>★ P er la Messa di prima comunione<br>Accetta con benevolenza, o Signore, <br>questa offerta che noi tuoi ministri e tutta la tua famiglia <br>ti presentiamo <br>anche per i tuoi figli [N. e N.], <br>che oggi per la prima volta raduni alla mensa <br>nella partecipazione al pane della vita e al calice della salvezza: <br>concedi loro di crescere sempre nella tua amicizia <br>e nella comunione con la tua Chiesa. <br>Per il Matrimonio<br>Accetta con benevolenza, o Signore, <br>questa offerta che ti presentiamo <br>noi tuoi ministri, questi tuoi figli N. e N. <br>e tutta la tua famiglia che per loro ti invoca: <br>tu che li hai condotti al giorno delle nozze, <br>allietali con il dono [dei figli e] di una vita lunga e serena.<br> <br>L’Hanc ígitur di altre Messe rituali si trova nei rispettivi formulari.<br><br>Nelle formule seguenti, le parole del Signore si pronuncino con voce chiara e distinta, <br>come è richiesto dalla loro natura.<br>La vigilia della sua passione,<br>prende il pane e, tenendolo leggermente sollevato sull’altare, prosegue: <br>egli prese il pane nelle sue mani sante e venerabili,<br>alza gli occhi,<br>e alzando gli occhi al cielo <br>a te, Dio Padre suo onnipotente, <br>rese grazie con la preghiera di benedizione, <br>spezzò il pane, <br>lo diede ai suoi discepoli e disse: <br>si inchina leggermente,<br> <br>Prendete, e mangiatene tutti: <br>questo è il mio Corpo <br>offerto in sacrificio per voi.<br> <br>Presenta al popolo l’ostia consacrata, la depone sulla patena e genuflette in adorazione.<br>Poi prosegue:<br>Allo stesso modo, dopo aver cenato,<br>prende il calice e, tenendolo leggermente sollevato sull’altare, prosegue: <br>prese nelle sue mani sante e venerabili <br>questo glorioso calice, <br>ti rese grazie con la preghiera di benedizione, <br>lo diede ai suoi discepoli e disse:<br><br>419Preghiera Eucaristica I<br>CP<br>si inchina leggermente, <br> <br>Prendete, e bevetene tutti: <br>questo è il calice del mio Sangue, <br>per la nuova ed eterna alleanza, <br>versato per voi e per tutti <br>in remissione dei peccati. <br>Fate questo in memoria di me.<br> <br>Presenta al popolo il calice, lo depone sul corporale e genuflette in adorazione.<br> <br>Quindi, il sacerdote canta o dice: <br>Mistero della fede.<br>Il popolo prosegue acclamando:<br>Annunciamo la tua morte, Signore, <br>proclamiamo la tua risurrezione, <br>nell’attesa della tua venuta.<br>Oppure:<br>Ogni volta che mangiamo di questo pane <br>e beviamo a questo calice, <br>annunciamo la tua morte, Signore, <br>nell’attesa della tua venuta.<br>Oppure:<br>Tu ci hai redenti con la tua croce <br>e la tua risurrezione: <br>salvaci, o Salvatore del mondo.<br><br>Quindi, con le braccia allargate, il sacerdote dice: <br>In questo sacrificio, o Padre, <br>noi tuoi ministri e il tuo popolo santo <br>celebriamo il memoriale <br>della beata passione, <br>della risurrezione dai morti <br>e della gloriosa ascensione al cielo <br>del Cristo tuo Figlio e nostro Signore; <br>e offriamo alla tua maestà divina, <br>tra i doni che ci hai dato, <br>la vittima pura, santa e immacolata, <br>pane santo della vita eterna, <br>calice dell’eterna salvezza.<br> <br>Volgi sulla nostra offerta <br>il tuo sguardo sereno e benigno, <br>come hai voluto accettare <br>i doni di Abele, il giusto, <br>il sacrificio di Abramo, nostro padre nella fede, <br>e l’oblazione pura e santa <br>di Melchisedek, tuo sommo sacerdote.<br> <br>Si inchina e, a mani giunte, prosegue: <br>Ti supplichiamo, Dio onnipotente: <br>fa’ che questa offerta, <br>per le mani del tuo angelo santo, <br>sia portata sull’altare del cielo <br>davanti alla tua maestà divina, <br>perché su tutti noi che partecipiamo di questo altare, <br>comunicando al santo mistero <br>del Corpo e Sangue del tuo Figlio,<br>in posizione eretta, facendosi il segno della croce, dice: <br>scenda la pienezza di ogni grazia <br>e benedizione del cielo.<br>Congiunge le mani.<br><br>CC<br><br>4C<br>CP<br><br>Intercessione per i defunti<br>Con le braccia allargate, dice:<br>Ricordati, o Signore, dei tuoi fedeli [ N. e N.], <br>che ci hanno preceduto con il segno della fede <br>e dormono il sonno della pace.<br> <br>Congiunge le mani e prega brevemente per quelli che vuole ricordare. <br>Poi, con le braccia allargate, continua:<br>Dona loro, o Signore, <br>e a tutti quelli che riposano in Cristo, <br>la beatitudine, la luce e la pace.<br>Congiunge le mani.<br> <br>Con la destra si batte il petto, mentre dice: <br>Anche a noi, tuoi ministri, peccatori,<br>e con le braccia allargate, prosegue:<br>ma fiduciosi nella tua infinita misericordia, <br>concedi, o Signore, <br>di aver parte alla comunità <br>dei tuoi santi apostoli e martiri: <br>Giovanni, Stefano, Mattia, Barnaba, <br>[Ignazio, Alessandro, Marcellino, Pietro, <br>Felicita, Perpetua, Agata, Lucia, <br>Agnese, Cecilia, Anastasia] <br>e tutti i tuoi santi; <br>ammettici a godere della loro sorte beata <br>non per i nostri meriti, <br>ma per la ricchezza del tuo perdono.<br> <br>Congiunge le mani e prosegue:<br>Per Cristo Signore nostro, <br>tu, o Dio, crei e santifichi sempre, <br>fai vivere, benedici <br>e doni al mondo ogni bene.<br> <br>3C<br><br>422 Preghiera Eucaristica I<br>Prende sia la patena con l’ostia sia il calice ed elevandoli insieme canta o dice:<br>Per Cristo, con Cristo e in Cristo, <br>a te, Dio Padre onnipotente, <br>nell’unità dello Spirito Santo, <br>ogni onore e gloria <br>per tutti i secoli dei secoli.<br>Il popolo acclama: Amen.<br> <br>CP <br>o <br>CC<br><br>Questa Preghiera Eucaristica ha un prefazio proprio, che fa parte della sua struttura. <br>Si possono però usare anche altri prefazi, specialmente quelli che presentano in breve <br>sintesi il mistero della salvezza, per esempio i prefazi comuni. <br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . In alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . Rendiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente cosa buona e giusta, <br>nostro dovere e fonte di salvezza, * <br>rendere grazie sempre e in ogni luogo * <br>a te, Padre santo, + <br>per Gesù Cristo, tuo amatissimo Figlio. ** <br> <br>Egli è la tua parola vivente: * <br>per mezzo di lui hai creato tutte le cose, <br>lo hai mandato a noi salvatore e redentore, * <br>fatto uomo per opera dello Spirito Santo + <br>e nato dalla Vergine Maria. ** <br> <br>Per compiere la tua volontà <br>e acquistarti un popolo santo * <br>egli, nell’ ora della passione, <br>stese le braccia sulla croce, * <br>morendo distrusse la morte + <br>e proclamò la risurrezione. ** <br> <br>Per questo mistero di salvezza, * <br>uniti agli angeli e ai santi, * <br>cantiamo a una sola voce + <br>la tua gloria: ** <br> <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>CP<br><br>424 Preghiera Eucaristica II<br>Il sacerdote, con le braccia allargate, dice: <br>Veramente santo sei tu, o Padre, fonte di ogni santità.<br>Congiunge le mani e, tenendole stese sulle offerte, dice: <br>Ti preghiamo: <br>santifica questi doni con la rugiada del tuo Spirito<br>congiunge le mani e traccia un unico segno di croce sul pane e sul calice, dicendo: <br>perché diventino per noi <br>il Corpo e ^ il Sangue del Signore nostro Gesù Cristo.<br>Congiunge le mani.<br>Nelle formule seguenti, le parole del Signore si pronuncino con voce chiara e distinta, <br>come è richiesto dalla loro natura.<br>Egli (*), consegnandosi volontariamente alla passione,<br>prende il pane e, tenendolo leggermente sollevato sull’altare, prosegue: <br>prese il pane, rese grazie, <br>lo spezzò, lo diede ai suoi discepoli e disse: <br>si inchina leggermente,<br> <br>Prendete, e mangiatene tutti: <br>questo è il mio Corpo <br>offerto in sacrificio per voi.<br> <br>Presenta al popolo l’ostia consacrata, la depone sulla patena e genuflette in adorazione.<br>Poi prosegue:<br>Allo stesso modo, dopo aver cenato,<br>prende il calice e, tenendolo leggermente sollevato sull’altare, prosegue: <br>prese il calice, <br>di nuovo ti rese grazie, lo diede ai suoi discepoli e disse:<br>★ Giovedì Santo alla Messa vespertina «Cena del Signore»: <br>(*) Egli, in questa notte,<br>CP<br>CC<br><br>425Preghiera Eucaristica II<br>si inchina leggermente, <br> <br>Prendete, e bevetene tutti: <br>questo è il calice del mio Sangue, <br>per la nuova ed eterna alleanza, <br>versato per voi e per tutti <br>in remissione dei peccati. <br>Fate questo in memoria di me.<br> <br>Presenta al popolo il calice, lo depone sul corporale e genuflette in adorazione.<br>Quindi, il sacerdote canta o dice: <br>Mistero della fede.<br>Il popolo prosegue acclamando:<br>Annunciamo la tua morte, Signore, <br>proclamiamo la tua risurrezione, <br>nell’attesa della tua venuta.<br>Oppure:<br>Ogni volta che mangiamo di questo pane <br>e beviamo a questo calice, <br>annunciamo la tua morte, Signore, <br>nell’attesa della tua venuta.<br>Oppure:<br>Tu ci hai redenti con la tua croce <br>e la tua risurrezione: <br>salvaci, o Salvatore del mondo.<br>CP<br><br>426 Preghiera Eucaristica II<br>Quindi, con le braccia allargate, il sacerdote dice: <br>Celebrando il memoriale <br>della morte e risurrezione del tuo Figlio, <br>ti offriamo, Padre, <br>il pane della vita e il calice della salvezza, <br>e ti rendiamo grazie <br>perché ci hai resi degni di stare alla tua presenza <br>a compiere il servizio sacerdotale. <br> <br>Ti preghiamo umilmente: <br>per la comunione <br>al Corpo e al Sangue di Cristo, <br>lo Spirito Santo ci riunisca in un solo corpo. <br>Ricordati, Padre, della tua Chiesa <br>diffusa su tutta la terra: <br>†<br>CC<br>1C<br>★ D omenica<br>Si può dire in tutte le domeniche, a esclusione di quando c’è un altro ricordo proprio.<br>† e qui convocata <br>nel giorno in cui Cristo ha vinto la morte <br>e ci ha resi partecipi della sua vita immortale:<br> <br>★ Natale del Signore e Ottava<br>† e qui convocata <br>nel giorno santissimo [nella notte santissima] <br>in cui la V ergine Maria <br>diede al mondo il Salvatore:<br> <br>★ Epifania del Signore<br>† e qui convocata <br>nel giorno santissimo in cui il tuo unico Figlio, <br>eterno con te nella gloria, <br>si è manifestato nella nostra natura umana:<br> <br>★ Giovedì Santo alla Messa vespertina <br> « Cena del Signore»<br>† e qui convocata <br>nel giorno santissimo <br>nel quale Gesù Cristo nostro Signore <br>fu consegnato alla morte per noi:<br><br>427Preghiera Eucaristica II<br>★ Dalla Veglia Pasquale alla II domenica di Pasqua<br>† e qui convocata <br>nel giorno glorioso [nella notte gloriosa] <br>della risurrezione di Cristo Signore <br>nel suo vero corpo:<br> <br>★ Ascensione del Signore<br>† e qui convocata <br>nel giorno glorioso dell’Ascensione <br>in cui Cristo è stato costituito Signore <br>del cielo e della terra:<br> <br>★ Domenica di Pentecoste<br>† e qui convocata <br>nel giorno santissimo in cui l’effusione del tuo Spirito <br>l’ha costituita sacramento di unità per tutti i popoli:<br>* Qui è permesso nominare anche il vescovo coadiutore o gli ausiliari, <br>come indicato al n. 149 dell’Ordinamento Generale del Messale Romano .<br>rendila perfetta nell’amore <br>in unione con il nostro papa N., <br>il nostro vescovo N.*, <br>i presbiteri e i diaconi. † <br> <br>Intercessioni particolari, p. 428.<br><br>428 Preghiera Eucaristica II<br>Intercessioni particolari <br> <br>Dalla Veglia Pasquale alla II domenica di Pasqua <br>Per il Battesimo degli adulti<br>† Ricordati anche dei nostri fratelli [N. e N.], <br>che oggi mediante il Battesimo [e la Confermazione] <br>sono entrati a far parte della tua famiglia: <br>fa’ che seguano Cristo tuo Figlio <br>con animo generoso e ardente.<br> <br>★ Per il Battesimo dei bambini<br>† Ricordati anche dei nostri fratelli [N. e N.], <br>che oggi hai liberato dal peccato <br>e rigenerato dall’acqua e dallo Spirito Santo: <br>tu, che li hai inseriti come membra vive nel corpo di Cristo, <br>scrivi i loro nomi nel libro della vita.<br> <br>★ Per la Confermazione<br>† Ricordati anche dei tuoi figli [N. e N.], <br>che, rigenerati nel Battesimo, <br>oggi hai confermato con il sigillo dello Spirito Santo: <br>custodisci in loro il dono del tuo amore.<br> <br>★ Per la Messa di prima comunione<br>† Ricordati anche dei tuoi figli [N. e N.], <br>che oggi per la prima volta <br>raduni a lla mensa della tua famiglia <br>nella partecipazione al pane della vita <br>e al calice della salvezza: <br>concedi loro di crescere sempre nella tua amicizia <br>e nella comunione con la tua Chiesa.<br> <br>★ Per il Matrimonio<br>† Ricordati anche di N. e N., <br>che hai voluto condurre al giorno delle nozze: <br>per tua grazia vivano nell’amore vicendevole e nella pace. <br> <br>Le intercessioni delle altre Messe rituali si trovano nei rispettivi formulari.<br><br>429Preghiera Eucaristica II<br>Nelle Messe per i defunti si può aggiungere:<br>Ricordati del nostro fratello <br>[della nostra sorella] N., <br>che [oggi] hai chiamato a te da questa vita; <br>e come per il Battesimo l’hai unito[a] <br>alla morte di Cristo, tuo Figlio, <br>così rendilo[a] partecipe della sua risurrezione.<br>Ricordati anche dei nostri fratelli e sorelle <br>che si sono addormentati <br>nella speranza della risurrezione <br>e, nella tua misericordia, di tutti i defunti: <br>ammettili alla luce del tuo volto. <br> <br>Di noi tutti abbi misericordia, <br>donaci di aver parte alla vita eterna, <br>insieme con la beata Maria, Vergine e Madre di Dio, <br>san Giuseppe, suo sposo, <br>gli apostoli, <br>[san N.: santo del giorno o patrono] <br>e tutti i santi <br>che in ogni tempo ti furono graditi, <br>congiunge le mani,<br>e in Gesù Cristo tuo Figlio <br>canteremo la tua lode e la tua gloria.<br> <br>Prende sia la patena con l’ostia sia il calice ed elevandoli insieme canta o dice:<br>2C<br><br>430 Preghiera Eucaristica II<br>CP <br>o <br>CC<br>Per Cristo, con Cristo e in Cristo, <br>a te, Dio Padre onnipotente, <br>nell’unità dello Spirito Santo, <br>ogni onore e gloria <br>per tutti i secoli dei secoli.<br>Il popolo acclama: Amen.<br><br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . I n alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . R endiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br>Segue il prefazio, scelto secondo le rubriche, che si conclude con l’acclamazione: <br>Santo, Santo, Santo il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br>Il sacerdote, con le braccia allargate, dice: <br>Veramente santo sei tu, o Padre, <br>ed è giusto che ogni creatura ti lodi. <br>Per mezzo del tuo Figlio, <br>il Signore nostro Gesù Cristo, <br>nella potenza dello Spirito Santo <br>fai vivere e santifichi l’universo, <br>e continui a radunare intorno a te un popolo <br>che, dall’oriente all’occidente, <br>offra al tuo nome il sacrificio perfetto.<br>Congiunge le mani e, tenendole stese sulle offerte, dice: <br>Ti preghiamo umilmente: <br>santifica e consacra con il tuo Spirito <br>i doni che ti abbiamo presentato<br>congiunge le mani e traccia un unico segno di croce sul pane e sul calice, dicendo: <br>perché diventino il Corpo e ^ il Sangue <br>del tuo Figlio, il Signore nostro Gesù Cristo,<br>congiunge le mani,<br>che ci ha comandato <br>di celebrare questi misteri. <br><br>CP<br>CP<br>CC<br><br>432 Preghiera Eucaristica III<br>Nelle formule seguenti, le parole del Signore si pronuncino con voce chiara e distinta, <br>come è richiesto dalla loro natura.<br>Egli, nella notte in cui veniva tradito (*),<br>prende il pane e, tenendolo leggermente sollevato sull’altare, prosegue: <br>prese il pane, <br>ti rese grazie con la preghiera di benedizione, <br>lo spezzò, lo diede ai suoi discepoli e disse: <br>si inchina leggermente,<br> <br>Prendete, e mangiatene tutti: <br>questo è il mio Corpo <br>offerto in sacrificio per voi.<br> <br>Presenta al popolo l’ostia consacrata, la depone sulla patena e genuflette in adorazione.<br> <br>Poi prosegue:<br>Allo stesso modo, dopo aver cenato,<br>prende il calice e, tenendolo leggermente sollevato sull’altare, prosegue: <br>prese il calice, <br>ti rese grazie con la preghiera di benedizione, <br>lo diede ai suoi discepoli e disse:<br>si inchina leggermente, <br> <br>Prendete, e bevetene tutti: <br>questo è il calice del mio Sangue, <br>per la nuova ed eterna alleanza, <br>versato per voi e per tutti <br>in remissione dei peccati. <br>Fate questo in memoria di me.<br> <br>Presenta al popolo il calice, lo depone sul corporale e genuflette in adorazione.<br> <br>★ Giovedì Santo alla Messa vespertina «Cena del Signore»: <br>(*) Egli, infatti, in questa notte in cui veniva tradito, <br>avendo amato i suoi che erano nel mondo, <br>li amò sino alla fine, e mentre cenava con loro<br><br>433Preghiera Eucaristica III<br>Quindi, il sacerdote canta o dice: <br>Mistero della fede.<br>Il popolo prosegue acclamando:<br>Annunciamo la tua morte, Signore, <br>proclamiamo la tua risurrezione, <br>nell’attesa della tua venuta.<br>Oppure:<br>Ogni volta che mangiamo di questo pane <br>e beviamo a questo calice, <br>annunciamo la tua morte, Signore, <br>nell’attesa della tua venuta.<br>Oppure:<br>Tu ci hai redenti con la tua croce <br>e la tua risurrezione: <br>salvaci, o Salvatore del mondo.<br>Quindi, con le braccia allargate, il sacerdote dice: <br>Celebrando il memoriale <br>della passione redentrice del tuo Figlio, <br>della sua mirabile risurrezione <br>e ascensione al cielo, <br>nell’attesa della sua venuta nella gloria, <br>ti offriamo, o Padre, in rendimento di grazie, <br>questo sacrificio vivo e santo.<br> <br>Guarda con amore <br>e riconosci nell’offerta della tua Chiesa <br>la vittima immolata per la nostra redenzione, <br>e a noi, che ci nutriamo <br>del Corpo e del Sangue del tuo Figlio, <br>dona la pienezza dello Spirito Santo, <br>perché diventiamo in Cristo <br>un solo corpo e un solo spirito.<br> <br>CP<br>CC<br><br>Lo Spirito Santo faccia di noi <br>un’offerta perenne a te gradita, <br>perché possiamo ottenere il regno promesso con i tuoi eletti: <br>con la beata Maria, Vergine e Madre di Dio, <br>san Giuseppe, suo sposo, <br>i tuoi santi apostoli, <br>i gloriosi martiri, <br>[san N.: santo del giorno o patrono] <br>e tutti i santi, nostri intercessori presso di te.<br> <br>Ti preghiamo, o Padre: <br>questo sacrificio della nostra riconciliazione <br>doni pace e salvezza al mondo intero. <br>Conferma nella fede e nell’amore <br>la tua Chiesa pellegrina sulla terra: <br>il tuo servo e nostro papa N., <br>il nostro vescovo N.*, l’ordine episcopale, <br>i presbiteri, i diaconi <br>e il popolo che tu hai redento. <br>†<br>Intercessioni particolari <br> <br>Dalla Veglia Pasquale alla II domenica di Pasqua <br>Per il Battesimo degli adulti<br>† Sostieni nell’impegno cristiano i tuoi figli [N. e N.], <br>che oggi mediante il lavacro della rigenerazione <br>[e il dono dello Spirito Santo] <br>hai chiamato a far parte del tuo popolo: <br>con il tuo aiuto possano camminare sempre in novità di vita.<br>★ Per il Battesimo dei bambini<br>† Assisti i nostri fratelli [N. e N.], <br>che oggi hai liberato dal peccato <br>e rigenerato dall’acqua e dallo Spirito Santo: <br>tu che li hai inseriti come membra vive nel corpo di Cristo <br>scrivi i loro nomi nel libro della vita.<br><br>1C<br>2C<br>* Qui è permesso nominare anche il vescovo coadiutore o gli ausiliari, <br>come indicato al n. 149 dell’Ordinamento Generale del Messale Romano .<br><br>Ascolta la preghiera di questa famiglia <br>che hai convocato alla tua presenza † [.]<br>★ D omenica<br>Si può dire in tutte le domeniche, a esclusione di quando c’è un altro ricordo proprio.<br>† nel giorno in cui Cristo ha vinto la morte <br>e ci ha resi partecipi della sua vita immortale.<br>★ Natale del Signore e Ottava<br>† nel giorno santissimo [nella notte santissima] <br>in cui la V ergine Maria diede al mondo il Salvatore.<br>★ Epifania del Signore<br>† nel giorno santissimo in cui il tuo unico Figlio, <br>eterno con te nella gloria, <br>si è manifestato nella nostra natura umana.<br> <br>Per il ricordo proprio delle altre solennità cf. p. 436.<br><br>Per la Confermazione<br>† Ricordati anche dei tuoi figli [N. e N.], <br>che, rigenerati nel Battesimo, <br>oggi hai confermato con il sigillo dello Spirito Santo: <br>custodisci in loro il dono del tuo amore.<br>★ Per la Messa di prima Comunione<br>† Assisti i tuoi figli [N. e N.], <br>che oggi per la prima volta raduni alla mensa della tua famiglia <br>nella partecipazione al pane della vita e al calice della salvezza: <br>concedi loro di crescere sempre nella tua amicizia <br>e nella comunione con la tua Chiesa.<br>Per il Matrimonio<br>† Sostieni nella grazia del Matrimonio N. e N., <br>che hai condotto felicemente al giorno delle nozze: <br>con il tuo aiuto custodiscano per tutta la vita <br>l’alleanza sponsale che hanno stretto davanti a te.<br><br>★ Giovedì Santo alla Messa vespertina <br> « Cena del Signore»<br>† nel giorno santissimo nel quale Gesù Cristo nostro Signore <br>fu consegnato alla morte per noi.<br>★ Dalla Veglia Pasquale alla II domenica di Pasqua<br>† nel giorno glorioso [nella notte gloriosa] <br>della risurrezione di Cristo Signore <br>nel suo vero corpo.<br>★ Ascensione del Signore<br>† nel giorno glorioso dell’Ascensione <br>in cui Cristo è stato costituito <br>Signore del cielo e della terra.<br>★ Domenica di Pentecoste<br>† nel giorno santissimo in cui l’effusione del tuo Spirito <br>l’ha costituita sacramento di unità per tutti i popoli.<br>Ricongiungi a te, Padre misericordioso, <br>tutti i tuoi figli ovunque dispersi. <br> <br>† Accogli nel tuo regno <br>i nostri fratelli e sorelle defunti, <br>e tutti coloro che, in pace con te, <br>hanno lasciato questo mondo; <br>concedi anche a noi di ritrovarci insieme <br>a godere per sempre della tua gloria,<br>congiunge le mani,<br>in Cristo, nostro Signore, <br>per mezzo del quale tu, o Dio, <br>doni al mondo ogni bene.<br><br>Quando questa Preghiera Eucaristica viene usata nelle Messe per i defunti, si può dire:<br>† Ricordati del nostro fratello N. <br>[della nostra sorella N.] <br>che [oggi] hai chiamato a te da questa vita, <br>e come per il Battesimo <br>l’hai unito[a] alla morte di Cristo, tuo Figlio, <br>così rendilo[a] partecipe della sua risurrezione, <br>quando egli farà sorgere i morti dalla terra <br>e trasfigurerà il nostro corpo mortale <br>per conformarlo al suo corpo glorioso. <br>Accogli nel tuo regno <br>i nostri fratelli e sorelle defunti, <br>e tutti coloro che, in pace con te, <br>hanno lasciato questo mondo; <br>concedi anche a noi di ritrovarci insieme <br>a godere della tua gloria <br>quando, asciugata ogni lacrima, <br>i nostri occhi vedranno il tuo volto <br>e noi saremo simili a te, <br>e canteremo per sempre la tua lode, <br>congiunge le mani,<br>in Cristo, nostro Signore, <br>per mezzo del quale tu, o Dio, <br>doni al mondo ogni bene.<br>Prende sia la patena con l’ostia sia il calice ed elevandoli insieme canta o dice:<br>P er Cristo, con Cristo e in Cristo, <br>a te, Dio Padre onnipotente, <br>nell’unità dello Spirito Santo, <br>ogni onore e gloria <br>per tutti i secoli dei secoli.<br>Il popolo acclama: Amen.<br><br>CP <br>o <br>CC<br><br>Il prefazio di questa Preghiera Eucaristica non può essere sostituito con altri, in ragione <br>della struttura della stessa Preghiera Eucaristica, che offre un compendio della storia <br>della salvezza.<br> <br>V/ . Il Signore sia con voi. <br>R/ . E con il tuo spirito.<br>V/ . In alto i nostri cuori. <br>R/ . S ono rivolti al Signore.<br>V/ . Rendiamo grazie al Signore nostro Dio. <br>R/ . È c osa buona e giusta. <br> <br>È veramente giusto renderti grazie, <br>è bello cantare la tua gloria, * <br>Padre santo, unico Dio vivo e vero: * <br>prima del tempo e in eterno tu sei, + <br>nel tuo regno di luce inaccessibile. ** <br> <br>Tu solo sei buono e fonte della vita, * <br>e hai dato origine all’universo * <br>per effondere le tue benedizioni su tutte le creature + <br>e allietarle con gli splendori della tua luce. ** <br> <br>Schiere innumerevoli di angeli <br>stanno davanti a te per servirti, * <br>contemplano la gloria del tuo volto, * <br>e giorno e notte + cantano la tua lode. ** <br>Insieme con loro anche noi, <br>fatti voce di ogni creatura che è sotto il cielo, * <br>confessiamo il tuo nome + <br>ed esultanti cantiamo: ** <br> <br>Santo, Santo, Santo <br>il Signore Dio dell’universo. <br>I cieli e la terra sono pieni della tua gloria. <br>Osanna nell’alto dei cieli. <br>Benedetto colui che viene nel nome del Signore. <br>Osanna nell’alto dei cieli.<br><br>CP<br><br>439Preghiera Eucaristica IV<br>Il sacerdote, con le braccia allargate, dice: <br>Noi ti lodiamo, Padre santo, <br>per la tua grandezza: <br>tu hai fatto ogni cosa <br>con sapienza e amore. <br> <br>Hai creato l’uomo a tua immagine, <br>alle sue mani hai affdato la cura del mondo intero <br>perché nell’obbedienza a te, unico creatore, <br>esercitasse la signoria su tutte le creature. <br>E quando, per la sua disobbedienza, <br>l’uomo perse la tua amicizia, <br>tu non l’hai abbandonato in potere della morte, <br>ma, nella tua misericordia, a tutti sei venuto incontro, <br>perché coloro che ti cercano ti possano trovare. <br> <br>Molte volte hai offerto agli uomini la tua alleanza <br>e per mezzo dei profeti <br>hai insegnato a sperare nella salvezza. <br> <br>Padre santo, hai tanto amato il mondo <br>da mandare a noi, nella pienezza dei tempi, <br>il tuo unigenito Figlio come salvatore. <br>Egli si è fatto uomo per opera dello Spirito Santo <br>ed è nato dalla Vergine Maria; <br>ha condiviso in tutto, eccetto il peccato, <br>la nostra condizione umana. <br>Ai poveri annunciò il Vangelo di salvezza, <br>la libertà ai prigionieri, <br>agli affitti la gioia. <br> <br>Per attuare il tuo disegno di redenzione <br>consegnò se stesso alla morte <br>e risorgendo distrusse la morte e rinnovò la vita. <br> <br>E perché non vivessimo più per noi stessi <br>ma per lui che è morto e risorto per noi, <br>ha mandato, o Padre, lo Spirito Santo, <br>primo dono ai credenti, <br>a perfezionare la sua opera nel mondo <br>e compiere ogni santificazione.<br>CP<br><br>Congiunge le mani e, tenendole stese sulle offerte, dice: <br>Ora ti preghiamo, o Padre: <br>venga il tuo santo Spirito <br>a santificare questi doni <br>congiunge le mani e traccia un unico segno di croce sul pane e sul calice, dicendo: <br>perché diventino il Corpo e ^ il Sangue <br>del Signore nostro, Gesù Cristo,<br>congiunge le mani,<br>nella celebrazione di questo grande mistero, <br>che ci ha lasciato come alleanza eterna. <br>Nelle formule seguenti, le parole del Signore si pronuncino con voce chiara e distinta, <br>come è richiesto dalla loro natura.<br>Egli, venuta l’ora di essere glorificato da te, <br>Padre santo, <br>avendo amato i suoi che erano nel mondo, <br>li amò sino alla fine; <br>e mentre cenava con loro,<br>prende il pane e, tenendolo leggermente sollevato sull’altare, prosegue: <br>prese il pane, pronunciò la benedizione, <br>lo spezzò, lo diede ai suoi discepoli e disse: <br>si inchina leggermente,<br> <br>Prendete, e mangiatene tutti: <br>questo è il mio Corpo <br>offerto in sacrificio per voi.<br> <br>Presenta al popolo l’ostia consacrata, la depone sulla patena e genuflette in adorazione.<br> <br>Poi prosegue:<br>Allo stesso modo, dopo aver cenato,<br>prende il calice e, tenendolo leggermente sollevato sull’altare, prosegue: <br>prese il calice, <br>ti rese grazie con la preghiera di benedizione, <br>lo diede ai suoi discepoli e disse:<br>si inchina leggermente, <br><br>CC<br><br>441Preghiera Eucaristica IV<br>Prendete, e bevetene tutti: <br>questo è il calice del mio Sangue, <br>per la nuova ed eterna alleanza, <br>versato per voi e per tutti <br>in remissione dei peccati. <br>Fate questo in memoria di me.<br> <br>Presenta al popolo il calice, lo depone sul corporale e genuflette in adorazione.<br>Quindi, il sacerdote canta o dice: <br>Mistero della fede.<br>Il popolo prosegue acclamando:<br>Annunciamo la tua morte, Signore, <br>proclamiamo la tua risurrezione, <br>nell’attesa della tua venuta.<br>Oppure:<br>Ogni volta che mangiamo di questo pane <br>e beviamo a questo calice, <br>annunciamo la tua morte, Signore, <br>nell’attesa della tua venuta.<br>Oppure:<br>Tu ci hai redenti con la tua croce <br>e la tua risurrezione: <br>salvaci, o Salvatore del mondo.<br>Quindi, con le braccia allargate, il sacerdote dice: <br>In questo memoriale della nostra redenzione <br>celebriamo, o Padre, la morte di Cristo, <br>la sua discesa agli inferi, <br>proclamiamo la sua risurrezione <br>e ascensione al cielo, dove siede alla tua destra; <br>CP<br>CC<br><br>e, in attesa della sua venuta nella gloria, <br>ti offriamo il suo Corpo e il suo Sangue, <br>sacrificio a te gradito e fonte di salvezza per il mondo intero. <br> <br>Guarda con amore, o Dio, <br>il sacrificio che tu stesso hai preparato per la tua Chiesa, <br>e a tutti coloro che parteciperanno <br>a quest’unico pane e a quest’unico calice <br>concedi che, riuniti in un solo corpo dallo Spirito Santo, <br>diventino offerta viva in Cristo, <br>a lode della tua gloria. <br>Ora, Padre, ricordati di tutti quelli <br>per i quali noi ti offriamo questo sacrificio: <br>del tuo servo e nostro papa N., <br>del nostro vescovo N.*, dell’ordine episcopale, <br>dei presbiteri, dei diaconi, <br>di coloro che si uniscono alla nostra offerta, <br>di quanti sono qui riuniti, †<br>Intercessioni particolari <br> <br>Per il Battesimo<br>† dei nostri fratelli [N. e N.], <br>che oggi hai rigenerato dall’acqua e dallo Spirito Santo,<br> <br>★ Per la Confermazione<br>† dei tuoi figli [N. e N.], <br>che oggi hai confermato con il sigillo dello Spirito Santo,<br> <br>★ Per la Messa di prima comunione<br>† dei tuoi figli [N. e N.], <br>che oggi per la prima volta raduni alla mensa della tua famiglia <br>nella partecipazione al pane della vita e al calice della salvezza,<br> <br>★ Per il Matrimonio<br>† dei tuoi figli N. e N., <br>che in Cristo hanno costituito una nuova famiglia,<br><br>1C<br>* Qui è permesso nominare anche il vescovo coadiutore o gli ausiliari, <br>come indicato al n. 149 dell’Ordinamento Generale del Messale Romano .<br><br>443Preghiera Eucaristica IV<br>dell’intero tuo popolo, <br>e di tutti quelli che ti cercano con cuore sincero. <br> <br>Ricordati anche di coloro <br>che sono morti nella pace del tuo Cristo, <br>e di tutti i defunti, <br>dei quali tu solo hai conosciuto la fede. <br> <br>Padre misericordioso, <br>concedi a tutti noi, tuoi figli, di ottenere <br>con la beata Maria, Vergine e Madre di Dio, <br>con san Giuseppe, suo sposo, <br>gli apostoli e i santi, <br>l’eredità eterna nel tuo regno, <br>dove con tutte le creature, <br>liberate dalla corruzione del peccato e della morte, <br>canteremo la tua gloria, <br>in Cristo nostro Signore, <br>congiunge le mani,<br>per mezzo del quale tu, o Dio, <br>doni al mondo ogni bene.<br>Prende sia la patena con l’ostia sia il calice ed elevandoli insieme canta o dice:<br>Per Cristo, con Cristo e in Cristo, <br>a te, Dio Padre onnipotente, <br>nell’unità dello Spirito Santo, <br>ogni onore e gloria <br>per tutti i secoli dei secoli.<br>Il popolo acclama: Amen.<br>2C<br>CP <br>o <br>CC<br><br>Il sacerdote, deposti il calice e la patena, a mani giunte, canta o dice:<br>Obbedienti alla parola del Salvatore <br>e formati al suo divino insegnamento, <br>osiamo dire:<br> <br>★ Oppure:<br>Il Signore ci ha donato il suo Spirito. <br>Con la fiducia e la libertà dei figli <br>preghiamo insieme:<br> <br>★ Oppure:<br>Prima di partecipare al banchetto dell’Eucaristia, <br>segno di riconciliazione <br>e vincolo di comunione fraterna, <br>preghiamo insieme come il Signore <br>ci ha insegnato:<br> <br>★ Oppure:<br>Guidati dallo Spirito di Gesù <br>e illuminati dalla sapienza del Vangelo, <br>osiamo dire:<br>Allarga le braccia e canta o dice insieme al popolo:<br><br>445Riti di Comunione<br>Padre nostro che sei nei cieli, <br>sia santificato il tuo nome, <br>venga il tuo regno, <br>sia fatta la tua volontà, <br>come in cielo così in terra.<br>Dacci oggi il nostro pane quotidiano, <br>e rimetti a noi i nostri debiti <br>come anche noi li rimettiamo ai nostri debitori, <br>e non abbandonarci alla tentazione, <br>ma liberaci dal male.<br> <br>Oppure in canto:<br>Pater noster, qui es in caelis: <br>sanctificétur nomen tuum; <br>advéniat regnum tuum; <br>fiat volúntas tua, sicut in caelo, et in terra. <br>Panem nostrum cotidiánum da nobis hódie; <br>et dimítte nobis débita nostra, <br>sicut et nos dimíttimus debitóribus nostris; <br>et ne nos indúcas in tentatiónem; <br>sed líbera nos a malo.<br><br>Solo il sacerdote, con le braccia allargate, continua: <br>Liberaci, o Signore, da tutti i mali, <br>concedi la pace ai nostri giorni, <br>e con l’aiuto della tua misericordia <br>vivremo sempre liberi dal peccato <br>e sicuri da ogni turbamento, <br>nell’attesa che si compia la beata speranza <br>e venga il nostro salvatore Gesù Cristo.<br>Congiunge le mani.<br>Il popolo conclude la preghiera con l’acclamazione:<br>T uo è il regno, <br>tua la potenza e la gloria nei secoli.<br> <br>Il sacerdote, con le braccia allargate, dice ad alta voce:<br><br>447Riti di Comunione<br>Signore Gesù Cristo, <br>che hai detto ai tuoi apostoli: <br>«Vi lascio la pace, vi do la mia pace», <br>non guardare ai nostri peccati, <br>ma alla fede della tua Chiesa, <br>e donale unità e pace <br>secondo la tua volontà.<br>Congiunge le mani.<br>Tu che vivi e regni nei secoli dei secoli. <br>Il popolo risponde: Amen.<br> <br>Il sacerdote, rivolto al popolo, allargando e ricongiungendo le mani, dice: <br>La pace del Signore sia sempre con voi.<br>Il popolo risponde:<br>E con il tuo spirito.<br> <br>Poi, secondo l’opportunità, il diacono, o il sacerdote, aggiunge: <br>Scambiatevi il dono della pace.<br>★ Oppure:<br>Come figli del Dio della pace, <br>scambiatevi un gesto di comunione fraterna.<br>★ Oppure:<br>In Cristo, che ci ha resi tutti fratelli con la sua croce, <br>scambiatevi il dono della pace.<br>★ Oppure:<br>Nello Spirito del Cristo risorto, <br>scambiatevi il dono della pace.<br> <br>E tutti si scambiano vicendevolmente un gesto di pace, di comunione e di carità secondo <br>gli usi locali. Il sacerdote dà la pace al diacono o al ministro.<br><br>Il sacerdote quindi prende l’ostia, la spezza sopra la patena e ne mette un frammento <br>nel calice, dicendo sottovoce:<br>Il Corpo e il Sangue del Signore nostro Gesù Cristo, <br>uniti in questo calice, <br>siano per noi cibo di vita eterna.<br>Intanto si canta o si dice:<br>Agnello di Dio, che togli i peccati del mondo, <br>abbi pietà di noi.<br>Agnello di Dio, che togli i peccati del mondo, <br>abbi pietà di noi.<br>Agnello di Dio, che togli i peccati del mondo, <br>dona a noi la pace.<br>Oppure in canto:<br>Agnus Dei, qui tollis peccáta mundi: miserére nobis. <br>Agnus Dei, qui tollis peccáta mundi: miserére nobis. <br>Agnus Dei, qui tollis peccáta mundi: dona nobis pacem.<br> <br>Se la frazione del pane si prolunga, l’invocazione si può ripetere più volte; l’ultima invocazione si conclude con le parole: dona a noi la pace [dona nobis pacem].<br>Il sacerdote, con le mani giunte, dice sottovoce: <br>Signore Gesù Cristo, Figlio del Dio vivo, <br>che per volontà del Padre <br>e con l’opera dello Spirito Santo <br>morendo hai dato la vita al mondo, <br>per il santo mistero del tuo Corpo e del tuo Sangue <br>liberami da ogni colpa e da ogni male, <br>fa’ che sia sempre fedele alla tua legge <br>e non sia mai separato da te.<br>Oppure:<br>La comunione al tuo Corpo e al tuo Sangue, <br>Signore Gesù Cristo, <br>non diventi per me giudizio di condanna, <br>ma per tua misericordia <br>sia rimedio e difesa dell’anima e del corpo.<br><br>449Riti di Comunione<br>Il sacerdote genuflette, prende l’ostia e tenendola un po’ sollevata sulla patena o sul calice, <br>rivolto al popolo, dice ad alta voce:<br>Ecco l’Agnello di Dio, <br>ecco colui che toglie i peccati del mondo. <br>Beati gli invitati alla cena dell’Agnello.<br>E continua, dicendo insieme con il popolo:<br>O Signore, non sono degno <br>di partecipare alla tua mensa, <br>ma di’ soltanto una parola <br>e io sarò salvato.<br>Il sacerdote, rivolto all’altare, dice sottovoce:<br>Il Corpo di Cristo <br>mi custodisca per la vita eterna.<br>E con riverenza si comunica al Corpo di Cristo. Poi prende il calice e dice sottovoce:<br>Il Sangue di Cristo <br>mi custodisca per la vita eterna.<br>E con riverenza si comunica al Sangue di Cristo.<br>Mentre il sacerdote si comunica al Corpo di Cristo, si inizia il Canto di comunione <br>o si proclama l’antifona.<br>Il sacerdote prende poi la patena o la pisside e si reca verso i comunicandi. Nel presentare <br>a ognuno l’ostia, la tiene alquanto sollevata e dice:<br>Il Corpo di Cristo.<br>Il comunicando risponde: Amen.<br>E riceve la comunione.<br>Nello stesso modo si comporta il diacono quando distribuisce la comunione.<br>Quando si distribuisce la comunione sotto le due specie, si osservi il rito indicato nell’Ordinamento Generale del Messale Romano , nn. 281-2 87.<br>Terminata la distribuzione della comunione, il sacerdote, o il diacono, o l’accolito, alla <br>credenza o a lato dell’altare, purifica la patena sul calice e quindi il calice.<br>Mentre purifica la patena e il calice, il sacerdote dice sottovoce:<br>Il sacramento ricevuto con la bocca <br>sia accolto con purezza nel nostro spirito, o Signore, <br>e il dono a noi fatto nel tempo <br>ci sia rimedio per la vita eterna.<br><br>Poi il sacerdote può tornare alla sede. Secondo l’opportunità, si può osservare il sacro <br>silenzio per un tempo conveniente, oppure cantare un salmo o un altro canto di lode o <br>un inno.<br>Poi, stando alla sede o all’altare, il sacerdote, rivolto al popolo, dice a mani giunte: <br>Preghiamo.<br>E tutti, insieme con il sacerdote, pregano per qualche momento in silenzio, a meno che <br>sia già stato osservato subito dopo la comunione. Poi il sacerdote, con le braccia allargate, <br>dice l’Orazione dopo la comunione.<br>L’Orazione dopo la comunione termina con la conclusione breve:<br>– se è rivolta al Padre: <br>Per Cristo nostro Signore.<br>– se è rivolta al Padre, ma alla fine di essa si fa menzione del Figlio: <br>Egli vive e regna nei secoli dei secoli.<br>– se è rivolta al Figlio: <br>Tu che vivi e regni nei secoli dei secoli. <br>Il popolo acclama: Amen.<br><br>Dopo l’orazione e prima della Benedizione si possono dare, quando occorre, brevi <br>comunicazioni al popolo.<br>Segue il congedo. Il sacerdote, allargando le braccia, rivolto verso il popolo, dice: <br>Il Signore sia con voi.<br>Il popolo risponde:<br>E con il tuo spirito.<br>Il sacerdote benedice il popolo:<br>Vi benedica Dio onnipotente, <br>Padre e Figlio ^ e Spirito Santo.<br>Il popolo risponde: Amen.<br> <br> <br>In certi giorni e in circostanze particolari si usa una forma più solenne di Benedizione <br>o l’Orazione sul popolo.<br> <br> <br>Nel benedire il popolo, il vescovo, ricevuta la mitra, allargando le braccia, dice:<br><br>Il vescovo dice: <br>Il Signore sia con voi.<br>Tutti rispondono:<br>E con il tuo spirito.<br>Il vescovo dice:<br>Sia benedetto il nome del Signore.<br>Tutti rispondono:<br>Ora e sempre.<br>Il vescovo prosegue:<br>Il nostro aiuto è nel nome del Signore.<br>Tutti rispondono:<br>Egli ha fatto cielo e terra.<br>Quindi, il vescovo, ricevuto il pastorale, dice: <br>Vi benedica Dio onnipotente,<br>e tracciando un triplice segno di croce sul popolo, continua: <br>Padre ^ e Figlio ^ e Spirito ^ Santo.<br>Tutti rispondono:<br>Amen.<br><br>453Riti di Conclusione<br>Infine il diacono o il sacerdote stesso, rivolto al popolo, a mani giunte, dice: <br>Andate in pace.<br>Oppure:<br>La Messa è finita: andate in pace. <br>Oppure:<br>Andate e annunciate il Vangelo del Signore. <br>Oppure:<br>Glorificate il Signore con la vostra vita. Andate in pace.<br>★ Oppure:<br>La gioia del Signore sia la vostra forza. Andate in pace.<br>★ Oppure:<br>Nel nome del Signore, andate in pace.<br>★ Oppure, specialmente nelle domeniche di Pasqua: <br>Portate a tutti la gioia del Signore risorto. Andate in pace.<br>Il popolo risponde:<br>Rendiamo grazie a Dio. <br>★ Oppure in canto:<br>Ite, missa est. R /. Deo grátias. <br>Il sacerdote bacia l’altare in segno di venerazione come all’inizio; fa quindi con i ministri <br>un profondo inchino e torna in sacrestia.<br>Quando segue immediatamente un’altra azione liturgica, si tralasciano i riti di conclusione."
  });
  const dailyUrl = dateKey => `https://www.chiesacattolica.it/liturgia-del-giorno/?data-liturgia=${dateKey}`;

  global.countryMassData.IT = Object.freeze({
    schemaVersion: 2,
    jurisdiction: 'IT',
    jurisdictions: Object.freeze(['IT']),
    jurisdictionName: 'Italia',
    conferenceCalendar: 'Conferenza Episcopale Italiana',
    ordinaryLanguage: 'IT',
    ordinary,
    ordinaryStructure: 'paragraph-rubric-choices-v1',
    officialOrderCorpus,
    ordinaryEdition: 'Messale Romano, terza edizione italiana (CEI, 2020)',
    ordinarySource,
    beta: true,
    dailyReadings: Object.freeze({
      provider: 'Conferenza Episcopale Italiana',
      calendar: 'Italia',
      translation: 'Lezionario CEI 2008 / Messale Romano CEI III',
      parser: 'strict-italian-daily-mass',
      url: dailyUrl
    }),
    dailyPropers: Object.freeze({
      provider: 'Conferenza Episcopale Italiana',
      parser: 'strict-italian-daily-mass',
      url: dailyUrl
    }),
    properSources: Object.freeze({
      nationalMissal: ordinarySource,
      dailyMass: 'https://www.chiesacattolica.it/liturgia-del-giorno/'
    }),
    calendar: Object.freeze({})
  });
})(globalThis);
