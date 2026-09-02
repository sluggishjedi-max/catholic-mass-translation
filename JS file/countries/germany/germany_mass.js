// Germany Mass module (DBK, Beta): verified German Ordinary and SCHOTT daily Mass source.
(function registerGermanyMass(global) {
  'use strict';
  global.countryMassData = global.countryMassData || {};
  const ordinary = Object.freeze([
  {
    "id": "1. THE INTRODUCTORY RITES",
    "type": "section",
    "de": "Eröffnung"
  },
  {
    "id": "1.1 entrance",
    "type": "part",
    "header": {
      "de": "Eröffnungsvers"
    },
    "lines": [
      {
        "sp_de": "",
        "text_de": "(Eröffnungsvers des Tages)"
      }
    ]
  },
  {
    "id": "1.2 greeting",
    "type": "selectable",
    "header": {
      "de": "Begrüßung"
    },
    "variants": {
      "A": {
        "label": {
          "de": "Formel 1"
        },
        "lines": [
          {
            "sp_de": "",
            "text_de": "Eröffnung"
          },
          {
            "rubric_de": "BEGRÜSSUNG"
          },
          {
            "sp_de": "P.",
            "text_de": "✠ Im Namen des Vaters und des Sohnes"
          },
          {
            "sp_de": "",
            "text_de": "und des Heiligen Geistes. Amen."
          },
          {
            "sp_de": "",
            "text_de": "Der Herr sei mit euch."
          }
        ]
      },
      "B": {
        "label": {
          "de": "Formel 2"
        },
        "lines": [
          {
            "rubric_de": "Oder:"
          },
          {
            "sp_de": "",
            "text_de": "Die Gnade unseres Herrn Jesus Christus,"
          },
          {
            "sp_de": "",
            "text_de": "die Liebe Gottes des Vaters"
          },
          {
            "sp_de": "",
            "text_de": "und die Gemeinschaft des Heiligen Geistes"
          },
          {
            "sp_de": "",
            "text_de": "sei mit euch."
          }
        ]
      },
      "C": {
        "label": {
          "de": "Formel 3"
        },
        "lines": [
          {
            "rubric_de": "Oder:"
          },
          {
            "sp_de": "",
            "text_de": "Gnade und Friede von Gott, unserem Vater,"
          },
          {
            "sp_de": "",
            "text_de": "und dem Herrn Jesus Christus"
          },
          {
            "sp_de": "",
            "text_de": "sei mit euch."
          }
        ]
      },
      "D": {
        "label": {
          "de": "Formel 4"
        },
        "lines": [
          {
            "rubric_de": "Oder:"
          },
          {
            "sp_de": "",
            "text_de": "Gnade und Friede"
          },
          {
            "sp_de": "",
            "text_de": "in der heiligen Versammlung der Kirche Gottes"
          },
          {
            "sp_de": "",
            "text_de": "sei mit euch."
          }
        ]
      },
      "E": {
        "label": {
          "de": "Formel 5"
        },
        "lines": [
          {
            "rubric_de": "Oder:"
          },
          {
            "sp_de": "",
            "text_de": "Der Herr der Herrlichkeit"
          },
          {
            "sp_de": "",
            "text_de": "und Spender jeder Gnade"
          },
          {
            "sp_de": "",
            "text_de": "sei mit euch."
          }
        ]
      },
      "F": {
        "label": {
          "de": "Formel 6"
        },
        "lines": [
          {
            "rubric_de": "Oder:"
          },
          {
            "sp_de": "",
            "text_de": "Die Gnade des Herrn Jesus,"
          },
          {
            "sp_de": "",
            "text_de": "der für uns Mensch geworden ist"
          },
          {
            "sp_de": "",
            "text_de": "(gelitten hat, gestorben ist …),"
          },
          {
            "sp_de": "",
            "text_de": "sei mit euch."
          }
        ]
      },
      "G": {
        "label": {
          "de": "Formel 7"
        },
        "lines": [
          {
            "rubric_de": "Oder:"
          },
          {
            "sp_de": "",
            "text_de": "Die Gnade unseres Herrn Jesus Christus"
          },
          {
            "sp_de": "",
            "text_de": "sei mit euch."
          },
          {
            "sp_de": "A.",
            "text_de": "Und mit deinem Geiste."
          }
        ]
      }
    }
  },
  {
    "id": "1.3 penitential",
    "type": "selectable",
    "header": {
      "de": "Allgemeines Schuldbekenntnis"
    },
    "variants": {
      "A": {
        "label": {
          "de": "Form A"
        },
        "lines": [
          {
            "rubric_de": "ALLGEMEINES SCHULDBEKENNTNIS"
          },
          {
            "sp_de": "",
            "text_de": "Form A"
          },
          {
            "sp_de": "",
            "text_de": "Brüder und Schwestern,"
          },
          {
            "sp_de": "",
            "text_de": "damit wir die heiligen Geheimnisse"
          },
          {
            "sp_de": "",
            "text_de": "in rechter Weise feiern können,"
          },
          {
            "sp_de": "",
            "text_de": "wollen wir bekennen, dass wir gesündigt haben."
          },
          {
            "rubric_de": "Oder:"
          },
          {
            "sp_de": "",
            "text_de": "Bevor wir das Gedächtnis des Herrn begehen,"
          },
          {
            "sp_de": "",
            "text_de": "wollen wir uns besinnen und bekennen,"
          },
          {
            "sp_de": "",
            "text_de": "dass wir sündige Menschen sind."
          },
          {
            "sp_de": "",
            "text_de": "Oder eine andere, frei formulierte Einladung."
          },
          {
            "sp_de": "P.",
            "text_de": "Wir sprechen das Schuldbekenntnis:"
          },
          {
            "sp_de": "A.",
            "text_de": "Ich bekenne Gott, dem Allmächtigen,"
          },
          {
            "sp_de": "",
            "text_de": "und allen Brüdern und Schwestern,"
          },
          {
            "sp_de": "",
            "text_de": "dass ich Gutes unterlassen und Böses getan habe"
          },
          {
            "sp_de": "",
            "text_de": "– ich habe gesündigt"
          },
          {
            "sp_de": "",
            "text_de": "in Gedanken, Worten und Werken –"
          },
          {
            "rubric_de": "Alle schlagen an die Brust."
          },
          {
            "sp_de": "",
            "text_de": "durch meine Schuld, durch meine Schuld,"
          },
          {
            "sp_de": "",
            "text_de": "durch meine große Schuld."
          },
          {
            "sp_de": "",
            "text_de": "Darum bitte ich die selige Jungfrau Maria,"
          },
          {
            "sp_de": "",
            "text_de": "alle Engel und Heiligen"
          },
          {
            "sp_de": "",
            "text_de": "und euch, Brüder und Schwestern,"
          },
          {
            "sp_de": "",
            "text_de": "für mich zu beten bei Gott unserem Herrn."
          },
          {
            "sp_de": "P.",
            "text_de": "Der allmächtige Gott erbarme sich unser,"
          },
          {
            "sp_de": "",
            "text_de": "er lasse uns die Sünden nach"
          },
          {
            "sp_de": "",
            "text_de": "und führe uns zum ewigen Leben."
          },
          {
            "sp_de": "A.",
            "text_de": "Amen."
          }
        ]
      },
      "B": {
        "label": {
          "de": "Form B"
        },
        "lines": [
          {
            "rubric_de": "ALLGEMEINES SCHULDBEKENNTNIS"
          },
          {
            "sp_de": "",
            "text_de": "Form B"
          },
          {
            "sp_de": "",
            "text_de": "Brüder und Schwestern,"
          },
          {
            "sp_de": "",
            "text_de": "bevor wir das Wort Gottes hören"
          },
          {
            "sp_de": "",
            "text_de": "und das Opfer Christi feiern,"
          },
          {
            "sp_de": "",
            "text_de": "wollen wir uns bereiten"
          },
          {
            "sp_de": "",
            "text_de": "und Gott um Vergebung unserer Sünden bitten."
          },
          {
            "rubric_de": "Oder:"
          },
          {
            "sp_de": "",
            "text_de": "Damit wir"
          },
          {
            "sp_de": "",
            "text_de": "das Gedächtnis des Herrn recht begehen,"
          },
          {
            "sp_de": "",
            "text_de": "prüfen wir uns selbst"
          },
          {
            "sp_de": "",
            "text_de": "und bekennen unsere Schuld"
          },
          {
            "sp_de": "",
            "text_de": "vor Gott und der Kirche."
          },
          {
            "sp_de": "",
            "text_de": "Oder eine andere, frei formulierte Einladung."
          },
          {
            "sp_de": "P.",
            "text_de": "Erbarme dich, Herr, unser Gott, erbarme dich."
          },
          {
            "sp_de": "A.",
            "text_de": "Denn wir haben vor dir gesündigt."
          },
          {
            "sp_de": "P.",
            "text_de": "Erweise, Herr, uns deine Huld."
          },
          {
            "sp_de": "A.",
            "text_de": "Und schenke uns dein Heil."
          },
          {
            "sp_de": "P.",
            "text_de": "Nachlass, Vergebung und Verzeihung unserer Sünden"
          },
          {
            "sp_de": "",
            "text_de": "gewähre uns der allmächtige und barmherzige Herr."
          },
          {
            "sp_de": "A.",
            "text_de": "Amen."
          },
          {
            "sp_de": "",
            "text_de": "Die Formen A und B können durch ein Bußlied ersetzt werden."
          }
        ]
      },
      "C": {
        "label": {
          "de": "Form C"
        },
        "lines": [
          {
            "rubric_de": "ALLGEMEINES SCHULDBEKENNTNIS"
          },
          {
            "sp_de": "",
            "text_de": "Form C"
          },
          {
            "sp_de": "",
            "text_de": "Bei dieser Form können den Kyrie-Rufen frei formulierte Christus-Prädikationen vorausgeschickt werden."
          },
          {
            "sp_de": "",
            "text_de": "Die nachstehenden Anrufungen sind als Beispiele zu verstehen."
          },
          {
            "sp_de": "",
            "text_de": "Zu Beginn dieser Messfeier"
          },
          {
            "sp_de": "",
            "text_de": "wollen wir uns besinnen"
          },
          {
            "sp_de": "",
            "text_de": "und das Erbarmen des Herrn auf uns herab rufen."
          },
          {
            "sp_de": "",
            "text_de": "Oder eine andere, frei formulierte Einladung."
          },
          {
            "sp_de": "V.",
            "text_de": "Herr Jesus Christus,"
          },
          {
            "sp_de": "",
            "text_de": "du bist vom Vater gesandt zu heilen,"
          },
          {
            "sp_de": "",
            "text_de": "was verwundet ist:"
          },
          {
            "sp_de": "V.",
            "text_de": "Kyrie, eleison."
          },
          {
            "sp_de": "A.",
            "text_de": "Kyrie, eleison."
          },
          {
            "rubric_de": "Oder:"
          },
          {
            "sp_de": "V.",
            "text_de": "Herr, erbarme dich (unser)."
          },
          {
            "sp_de": "A.",
            "text_de": "Herr, erbarme dich (unser)."
          },
          {
            "sp_de": "V.",
            "text_de": "Du bist gekommen, die Sünder zu berufen:"
          },
          {
            "sp_de": "V.",
            "text_de": "Christe, eleison."
          },
          {
            "sp_de": "A.",
            "text_de": "Christe, eleison."
          },
          {
            "rubric_de": "Oder:"
          },
          {
            "sp_de": "V.",
            "text_de": "Christus, erbarme dich (unser)."
          },
          {
            "sp_de": "A.",
            "text_de": "Christus, erbarme dich (unser)."
          },
          {
            "sp_de": "V.",
            "text_de": "Du bist zum Vater heimgekehrt,"
          },
          {
            "sp_de": "",
            "text_de": "um für uns einzutreten:"
          },
          {
            "sp_de": "V.",
            "text_de": "Kyrie, eleison."
          },
          {
            "sp_de": "A.",
            "text_de": "Kyrie, eleison."
          },
          {
            "rubric_de": "Oder:"
          },
          {
            "sp_de": "V.",
            "text_de": "Herr, erbarme dich (unser)."
          },
          {
            "sp_de": "A.",
            "text_de": "Herr, erbarme dich (unser)."
          },
          {
            "sp_de": "P.",
            "text_de": "Der Herr erbarme sich unser."
          },
          {
            "sp_de": "",
            "text_de": "Er nehme von uns Sünde und Schuld,"
          },
          {
            "sp_de": "",
            "text_de": "damit wir mit reinem Herzen"
          },
          {
            "sp_de": "",
            "text_de": "diese Feier begehen."
          },
          {
            "sp_de": "A.",
            "text_de": "Amen."
          },
          {
            "rubric_de": "KYRIE"
          },
          {
            "rubric_de": "Falls die Kyrierufe nicht schon vorausgegangen sind."
          },
          {
            "sp_de": "V.",
            "text_de": "Kyrie, eleison."
          },
          {
            "sp_de": "A.",
            "text_de": "Kyrie, eleison."
          },
          {
            "sp_de": "V.",
            "text_de": "Christe, eleison."
          },
          {
            "sp_de": "A.",
            "text_de": "Christe, eleison."
          },
          {
            "sp_de": "V.",
            "text_de": "Kyrie, eleison."
          },
          {
            "sp_de": "A.",
            "text_de": "Kyrie, eleison."
          }
        ]
      }
    }
  },
  {
    "id": "1.4 kyrie",
    "type": "part",
    "header": {
      "de": "Kyrie"
    },
    "lines": [
      {
        "sp_de": "V.",
        "text_de": "Kyrie, eleison."
      },
      {
        "sp_de": "A.",
        "text_de": "Kyrie, eleison."
      },
      {
        "rubric_de": "Oder:"
      },
      {
        "sp_de": "V.",
        "text_de": "Herr, erbarme dich (unser)."
      },
      {
        "sp_de": "A.",
        "text_de": "Herr, erbarme dich (unser)."
      },
      {
        "sp_de": "V.",
        "text_de": "Du bist gekommen, die Sünder zu berufen:"
      },
      {
        "sp_de": "V.",
        "text_de": "Christe, eleison."
      },
      {
        "sp_de": "A.",
        "text_de": "Christe, eleison."
      },
      {
        "rubric_de": "Oder:"
      },
      {
        "sp_de": "V.",
        "text_de": "Christus, erbarme dich (unser)."
      },
      {
        "sp_de": "A.",
        "text_de": "Christus, erbarme dich (unser)."
      },
      {
        "sp_de": "V.",
        "text_de": "Du bist zum Vater heimgekehrt,"
      },
      {
        "sp_de": "",
        "text_de": "um für uns einzutreten:"
      },
      {
        "sp_de": "V.",
        "text_de": "Kyrie, eleison."
      },
      {
        "sp_de": "A.",
        "text_de": "Kyrie, eleison."
      },
      {
        "rubric_de": "Oder:"
      },
      {
        "sp_de": "V.",
        "text_de": "Herr, erbarme dich (unser)."
      },
      {
        "sp_de": "A.",
        "text_de": "Herr, erbarme dich (unser)."
      },
      {
        "sp_de": "P.",
        "text_de": "Der Herr erbarme sich unser."
      },
      {
        "sp_de": "",
        "text_de": "Er nehme von uns Sünde und Schuld,"
      },
      {
        "sp_de": "",
        "text_de": "damit wir mit reinem Herzen"
      },
      {
        "sp_de": "",
        "text_de": "diese Feier begehen."
      },
      {
        "sp_de": "A.",
        "text_de": "Amen."
      },
      {
        "rubric_de": "KYRIE"
      },
      {
        "rubric_de": "Falls die Kyrierufe nicht schon vorausgegangen sind."
      },
      {
        "sp_de": "V.",
        "text_de": "Kyrie, eleison."
      },
      {
        "sp_de": "A.",
        "text_de": "Kyrie, eleison."
      },
      {
        "sp_de": "V.",
        "text_de": "Christe, eleison."
      },
      {
        "sp_de": "A.",
        "text_de": "Christe, eleison."
      },
      {
        "sp_de": "V.",
        "text_de": "Kyrie, eleison."
      },
      {
        "sp_de": "A.",
        "text_de": "Kyrie, eleison."
      },
      {
        "rubric_de": "Oder:"
      },
      {
        "sp_de": "V.",
        "text_de": "Herr, erbarme dich (unser)."
      },
      {
        "sp_de": "A.",
        "text_de": "Herr, erbarme dich (unser)."
      },
      {
        "sp_de": "V.",
        "text_de": "Christus, erbarme dich (unser)."
      },
      {
        "sp_de": "A.",
        "text_de": "Christus, erbarme dich (unser)."
      },
      {
        "sp_de": "V.",
        "text_de": "Herr, erbarme dich (unser)."
      },
      {
        "sp_de": "A.",
        "text_de": "Herr, erbarme dich (unser)."
      },
      {
        "rubric_de": "GLORIA"
      },
      {
        "sp_de": "",
        "text_de": "An den Hochfesten und Festen und bei anderen festlichen Gottesdiensten."
      },
      {
        "sp_de": "",
        "text_de": "Ehre sei Gott in der Höhe"
      },
      {
        "sp_de": "",
        "text_de": "und Friede auf Erden"
      },
      {
        "sp_de": "",
        "text_de": "den Menschen seiner Gnade."
      },
      {
        "sp_de": "",
        "text_de": "Wir loben dich,"
      },
      {
        "sp_de": "",
        "text_de": "wir preisen dich,"
      },
      {
        "sp_de": "",
        "text_de": "wir beten dich an,"
      },
      {
        "sp_de": "",
        "text_de": "wir rühmen dich und danken dir,"
      },
      {
        "sp_de": "",
        "text_de": "denn groß ist deine Herrlichkeit:"
      },
      {
        "sp_de": "",
        "text_de": "Herr und Gott, König des Himmels,"
      },
      {
        "sp_de": "",
        "text_de": "Gott und Vater, Herrscher über das All,"
      },
      {
        "sp_de": "",
        "text_de": "Herr, eingeborener Sohn, Jesus Christus."
      },
      {
        "sp_de": "",
        "text_de": "Herr und Gott, Lamm Gottes, Sohn des Vaters,"
      },
      {
        "sp_de": "",
        "text_de": "du nimmst hinweg die Sünde der Welt:"
      },
      {
        "sp_de": "",
        "text_de": "erbarme dich unser;"
      },
      {
        "sp_de": "",
        "text_de": "du nimmst hinweg die Sünde der Welt:"
      },
      {
        "sp_de": "",
        "text_de": "nimm an unser Gebet;"
      },
      {
        "sp_de": "",
        "text_de": "du sitzest zur Rechten des Vaters:"
      },
      {
        "sp_de": "",
        "text_de": "erbarme dich unser."
      },
      {
        "sp_de": "",
        "text_de": "Denn du allein bist der Heilige,"
      },
      {
        "sp_de": "",
        "text_de": "du allein der Herr,"
      },
      {
        "sp_de": "",
        "text_de": "du allein der Höchste:"
      },
      {
        "sp_de": "",
        "text_de": "Jesus Christus,"
      },
      {
        "sp_de": "",
        "text_de": "mit dem Heiligen Geist,"
      },
      {
        "sp_de": "",
        "text_de": "zur Ehre Gottes des Vaters. Amen."
      }
    ]
  },
  {
    "id": "1.5 gloria",
    "type": "part",
    "header": {
      "de": "Gloria"
    },
    "lines": [
      {
        "rubric_de": "Oder:"
      },
      {
        "sp_de": "V.",
        "text_de": "Herr, erbarme dich (unser)."
      },
      {
        "sp_de": "A.",
        "text_de": "Herr, erbarme dich (unser)."
      },
      {
        "sp_de": "V.",
        "text_de": "Christus, erbarme dich (unser)."
      },
      {
        "sp_de": "A.",
        "text_de": "Christus, erbarme dich (unser)."
      },
      {
        "sp_de": "V.",
        "text_de": "Herr, erbarme dich (unser)."
      },
      {
        "sp_de": "A.",
        "text_de": "Herr, erbarme dich (unser)."
      },
      {
        "rubric_de": "GLORIA"
      },
      {
        "sp_de": "",
        "text_de": "An den Hochfesten und Festen und bei anderen festlichen Gottesdiensten."
      },
      {
        "sp_de": "",
        "text_de": "Ehre sei Gott in der Höhe"
      },
      {
        "sp_de": "",
        "text_de": "und Friede auf Erden"
      },
      {
        "sp_de": "",
        "text_de": "den Menschen seiner Gnade."
      },
      {
        "sp_de": "",
        "text_de": "Wir loben dich,"
      },
      {
        "sp_de": "",
        "text_de": "wir preisen dich,"
      },
      {
        "sp_de": "",
        "text_de": "wir beten dich an,"
      },
      {
        "sp_de": "",
        "text_de": "wir rühmen dich und danken dir,"
      },
      {
        "sp_de": "",
        "text_de": "denn groß ist deine Herrlichkeit:"
      },
      {
        "sp_de": "",
        "text_de": "Herr und Gott, König des Himmels,"
      },
      {
        "sp_de": "",
        "text_de": "Gott und Vater, Herrscher über das All,"
      },
      {
        "sp_de": "",
        "text_de": "Herr, eingeborener Sohn, Jesus Christus."
      },
      {
        "sp_de": "",
        "text_de": "Herr und Gott, Lamm Gottes, Sohn des Vaters,"
      },
      {
        "sp_de": "",
        "text_de": "du nimmst hinweg die Sünde der Welt:"
      },
      {
        "sp_de": "",
        "text_de": "erbarme dich unser;"
      },
      {
        "sp_de": "",
        "text_de": "du nimmst hinweg die Sünde der Welt:"
      },
      {
        "sp_de": "",
        "text_de": "nimm an unser Gebet;"
      },
      {
        "sp_de": "",
        "text_de": "du sitzest zur Rechten des Vaters:"
      },
      {
        "sp_de": "",
        "text_de": "erbarme dich unser."
      },
      {
        "sp_de": "",
        "text_de": "Denn du allein bist der Heilige,"
      },
      {
        "sp_de": "",
        "text_de": "du allein der Herr,"
      },
      {
        "sp_de": "",
        "text_de": "du allein der Höchste:"
      },
      {
        "sp_de": "",
        "text_de": "Jesus Christus,"
      },
      {
        "sp_de": "",
        "text_de": "mit dem Heiligen Geist,"
      },
      {
        "sp_de": "",
        "text_de": "zur Ehre Gottes des Vaters. Amen."
      }
    ],
    "if": "sunday"
  },
  {
    "id": "1.6 collect",
    "type": "part",
    "header": {
      "de": "Tagesgebet"
    },
    "lines": [
      {
        "sp_de": "P.",
        "text_de": "Lasset uns beten."
      },
      {
        "sp_de": "",
        "text_de": "(Tagesgebet)"
      },
      {
        "sp_de": "A.",
        "text_de": "Amen."
      }
    ]
  },
  {
    "id": "2. THE LITURGY OF THE WORD",
    "type": "section",
    "de": "Wortgottesdienst"
  },
  {
    "id": "2.1 reading1",
    "type": "part",
    "header": {
      "de": "Erste Lesung"
    },
    "lines": [
      {
        "sp_de": "",
        "text_de": "(Kurzinhalt)"
      },
      {
        "sp_de": "",
        "text_de": "(Erste Lesung des Tages)"
      }
    ]
  },
  {
    "id": "2.2 psalm",
    "type": "part",
    "header": {
      "de": "Antwortpsalm"
    },
    "lines": [
      {
        "sp_de": "",
        "text_de": "(Antwortpsalm des Tages)"
      }
    ]
  },
  {
    "id": "2.3 reading2",
    "type": "part",
    "header": {
      "de": "Zweite Lesung"
    },
    "lines": [
      {
        "sp_de": "",
        "text_de": "(Kurzinhalt)"
      },
      {
        "sp_de": "",
        "text_de": "(Zweite Lesung des Tages)"
      }
    ],
    "if": "sunday"
  },
  {
    "id": "2.4 Sequence",
    "type": "part",
    "header": {
      "de": "Sequenz"
    },
    "lines": [
      {
        "sp_de": "",
        "text_de": "(Sequenz des Tages)"
      }
    ],
    "if": "easter_or_pentecost"
  },
  {
    "id": "2.5 gospel_accl",
    "type": "part",
    "header": {
      "de": "Ruf vor dem Evangelium"
    },
    "lines": [
      {
        "sp_de": "",
        "text_de": "(Ruf vor dem Evangelium)"
      }
    ]
  },
  {
    "id": "2.6 gospel",
    "type": "part",
    "header": {
      "de": "Evangelium"
    },
    "lines": [
      {
        "sp_de": "",
        "text_de": "(Evangelium des Tages)"
      }
    ]
  },
  {
    "id": "2.7 homily",
    "type": "part",
    "header": {
      "de": "Homilie"
    },
    "lines": [
      {
        "rubric_de": "Es folgt die Homilie."
      }
    ]
  },
  {
    "id": "2.8 creed",
    "type": "selectable",
    "header": {
      "de": "Glaubensbekenntnis"
    },
    "if": "sunday",
    "variants": {
      "A": {
        "label": {
          "de": "Großes Glaubensbekenntnis"
        },
        "lines": [
          {
            "rubric_de": "CREDO"
          },
          {
            "sp_de": "",
            "text_de": "An Hochfesten und bei anderen festlichen Gottesdiensten."
          },
          {
            "sp_de": "",
            "text_de": "(P.: Wir sprechen das Große Glaubensbekenntnis.)"
          },
          {
            "sp_de": "A.",
            "text_de": "Wir glauben an den einen Gott,"
          },
          {
            "sp_de": "",
            "text_de": "den Vater, den Allmächtigen,"
          },
          {
            "sp_de": "",
            "text_de": "der alles geschaffen hat, Himmel und Erde,"
          },
          {
            "sp_de": "",
            "text_de": "die sichtbare und die unsichtbare Welt."
          },
          {
            "sp_de": "",
            "text_de": "Und an den einen Herrn Jesus Christus,"
          },
          {
            "sp_de": "",
            "text_de": "Gottes eingeborenen Sohn,"
          },
          {
            "sp_de": "",
            "text_de": "aus dem Vater geboren vor aller Zeit:"
          },
          {
            "sp_de": "",
            "text_de": "Gott von Gott, Licht vom Licht,"
          },
          {
            "sp_de": "",
            "text_de": "wahrer Gott vom wahren Gott,"
          },
          {
            "sp_de": "",
            "text_de": "gezeugt, nicht geschaffen,"
          },
          {
            "sp_de": "",
            "text_de": "eines Wesens mit dem Vater;"
          },
          {
            "sp_de": "",
            "text_de": "durch ihn ist alles geschaffen."
          },
          {
            "sp_de": "",
            "text_de": "Für uns Menschen und zu unserem Heil"
          },
          {
            "sp_de": "",
            "text_de": "ist er vom Himmel gekommen,"
          },
          {
            "sp_de": "",
            "text_de": "Zu den folgenden Worten (bis zu „Mensch geworden“) verbeugen sich alle."
          },
          {
            "sp_de": "",
            "text_de": "hat Fleisch angenommen"
          },
          {
            "sp_de": "",
            "text_de": "durch den Heiligen Geist"
          },
          {
            "sp_de": "",
            "text_de": "von der Jungfrau Maria"
          },
          {
            "sp_de": "",
            "text_de": "und ist Mensch geworden."
          },
          {
            "sp_de": "",
            "text_de": "Er wurde für uns gekreuzigt"
          },
          {
            "sp_de": "",
            "text_de": "unter Pontius Pilatus,"
          },
          {
            "sp_de": "",
            "text_de": "hat gelitten und ist begraben worden,"
          },
          {
            "sp_de": "",
            "text_de": "ist am dritten Tage auferstanden"
          },
          {
            "sp_de": "",
            "text_de": "nach der Schrift"
          },
          {
            "sp_de": "",
            "text_de": "und aufgefahren in den Himmel."
          },
          {
            "sp_de": "",
            "text_de": "Er sitzt zur Rechten des Vaters"
          },
          {
            "sp_de": "",
            "text_de": "und wird wiederkommen in Herrlichkeit,"
          },
          {
            "sp_de": "",
            "text_de": "zu richten die Lebenden und die Toten;"
          },
          {
            "sp_de": "",
            "text_de": "seiner Herrschaft wird kein Ende sein."
          },
          {
            "sp_de": "",
            "text_de": "Wir glauben an den Heiligen Geist,"
          },
          {
            "sp_de": "",
            "text_de": "der Herr ist und lebendig macht,"
          },
          {
            "sp_de": "",
            "text_de": "der aus dem Vater und dem Sohn hervorgeht,"
          },
          {
            "sp_de": "",
            "text_de": "der mit dem Vater und dem Sohn"
          },
          {
            "sp_de": "",
            "text_de": "angebetet und verherrlicht wird,"
          },
          {
            "sp_de": "",
            "text_de": "der gesprochen hat durch die Propheten,"
          },
          {
            "sp_de": "",
            "text_de": "und die eine, heilige, katholische"
          },
          {
            "sp_de": "",
            "text_de": "und apostolische Kirche."
          },
          {
            "sp_de": "",
            "text_de": "Wir bekennen die eine Taufe"
          },
          {
            "sp_de": "",
            "text_de": "zur Vergebung der Sünden."
          },
          {
            "sp_de": "",
            "text_de": "Wir erwarten die Auferstehung der Toten"
          },
          {
            "sp_de": "",
            "text_de": "und das Leben der kommenden Welt. Amen."
          }
        ]
      },
      "B": {
        "label": {
          "de": "Apostolisches Glaubensbekenntnis"
        },
        "lines": [
          {
            "sp_de": "",
            "text_de": "An Stelle des Großen Glaubensbekenntnisses kann das"
          },
          {
            "sp_de": "",
            "text_de": "Apostolische Glaubensbekenntnis gebetet werden."
          },
          {
            "sp_de": "",
            "text_de": "(P.: Wir sprechen das Apostolische Glaubensbekenntnis.)"
          },
          {
            "sp_de": "A.",
            "text_de": "Ich glaube an Gott,"
          },
          {
            "sp_de": "",
            "text_de": "den Vater, den Allmächtigen,"
          },
          {
            "sp_de": "",
            "text_de": "den Schöpfer des Himmels und der Erde,"
          },
          {
            "sp_de": "",
            "text_de": "und an Jesus Christus,"
          },
          {
            "sp_de": "",
            "text_de": "seinen eingeborenen Sohn, unsern Herrn,"
          },
          {
            "sp_de": "",
            "text_de": "Zu den folgenden Worten (bis zu „Jungfrau Maria“) verbeugen sich alle."
          },
          {
            "sp_de": "",
            "text_de": "empfangen durch den Heiligen Geist,"
          },
          {
            "sp_de": "",
            "text_de": "geboren von der Jungfrau Maria,"
          },
          {
            "sp_de": "",
            "text_de": "gelitten unter Pontius Pilatus,"
          },
          {
            "sp_de": "",
            "text_de": "gekreuzigt, gestorben und begraben,"
          },
          {
            "sp_de": "",
            "text_de": "hinab gestiegen in das Reich des Todes,"
          },
          {
            "sp_de": "",
            "text_de": "am dritten Tage auferstanden von den Toten,"
          },
          {
            "sp_de": "",
            "text_de": "aufgefahren in den Himmel;"
          },
          {
            "sp_de": "",
            "text_de": "er sitzt zur Rechten Gottes,"
          },
          {
            "sp_de": "",
            "text_de": "des allmächtigen Vaters;"
          },
          {
            "sp_de": "",
            "text_de": "von dort wird er kommen,"
          },
          {
            "sp_de": "",
            "text_de": "zu richten die Lebenden und die Toten."
          },
          {
            "sp_de": "",
            "text_de": "Ich glaube an den Heiligen Geist,"
          },
          {
            "sp_de": "",
            "text_de": "die heilige katholische Kirche,"
          },
          {
            "sp_de": "",
            "text_de": "Gemeinschaft der Heiligen,"
          },
          {
            "sp_de": "",
            "text_de": "Vergebung der Sünden,"
          },
          {
            "sp_de": "",
            "text_de": "Auferstehung der Toten"
          },
          {
            "sp_de": "",
            "text_de": "und das ewige Leben. Amen."
          }
        ]
      }
    }
  },
  {
    "id": "2.9 universal",
    "type": "part",
    "header": {
      "de": "Fürbitten"
    },
    "lines": [
      {
        "sp_de": "",
        "text_de": "Es folgen die Fürbitten."
      }
    ],
    "if": "sunday"
  },
  {
    "id": "3. THE LITURGY OF THE EUCHARIST",
    "type": "section",
    "de": "Eucharistiefeier"
  },
  {
    "id": "3.1 offertory",
    "type": "part",
    "header": {
      "de": "Gabenbereitung"
    },
    "lines": [
      {
        "sp_de": "",
        "text_de": "Eucharistiefeier"
      },
      {
        "rubric_de": "GABENBEREITUNG"
      },
      {
        "rubric_de": "Der Priester nimmt die Schale mit dem Brot, hält sie über den Altar und spricht leise:"
      },
      {
        "sp_de": "",
        "text_de": "Gepriesen bist du, Herr, unser Gott,"
      },
      {
        "sp_de": "",
        "text_de": "Schöpfer der Welt."
      },
      {
        "sp_de": "",
        "text_de": "Du schenkst uns das Brot,"
      },
      {
        "sp_de": "",
        "text_de": "die Frucht der Erde und der menschlichen Arbeit."
      },
      {
        "sp_de": "",
        "text_de": "Wir bringen dieses Brot vor dein Angesicht,"
      },
      {
        "sp_de": "",
        "text_de": "damit es uns das Brot des Lebens werde."
      },
      {
        "sp_de": "",
        "text_de": "(Gepriesen bist du in Ewigkeit, Herr, unser Gott.)"
      },
      {
        "rubric_de": "Der Priester gießt Wein und ein wenig Wasser in den Kelch und spricht leise:"
      },
      {
        "sp_de": "",
        "text_de": "Wie das Wasser sich mit dem Wein verbindet"
      },
      {
        "sp_de": "",
        "text_de": "zum heiligen Zeichen,"
      },
      {
        "sp_de": "",
        "text_de": "so lasse uns dieser Kelch teilhaben"
      },
      {
        "sp_de": "",
        "text_de": "an der Gottheit Christi,"
      },
      {
        "sp_de": "",
        "text_de": "der unsere Menschennatur angenommen hat."
      },
      {
        "rubric_de": "Der Priester nimmt den Kelch, hält ihn über den Altar und spricht leise:"
      },
      {
        "sp_de": "",
        "text_de": "Gepriesen bist du Herr, unser Gott,"
      },
      {
        "sp_de": "",
        "text_de": "Schöpfer der Welt."
      },
      {
        "sp_de": "",
        "text_de": "Du schenkst uns den Wein,"
      },
      {
        "sp_de": "",
        "text_de": "die Frucht des Weinstocks und der menschlichen Arbeit."
      },
      {
        "sp_de": "",
        "text_de": "Wir bringen diesen Kelch vor dein Angesicht,"
      },
      {
        "sp_de": "",
        "text_de": "damit er uns der Kelch des Heiles werde."
      },
      {
        "sp_de": "",
        "text_de": "(Gepriesen bist du in Ewigkeit, Herr, unser Gott.)"
      },
      {
        "rubric_de": "Der Priester verneigt sich und spricht leise:"
      },
      {
        "sp_de": "",
        "text_de": "Herr, wir kommen zu dir mit reumütigem Herzen"
      },
      {
        "sp_de": "",
        "text_de": "und mit demütigem Sinn."
      },
      {
        "sp_de": "",
        "text_de": "Nimm uns an und gib, dass unser Opfer dir gefalle."
      },
      {
        "rubric_de": "Zur Händewaschung an der Seite des Altares spricht der Priester leise:"
      },
      {
        "sp_de": "",
        "text_de": "Herr, wasch ab meine Schuld,"
      },
      {
        "sp_de": "",
        "text_de": "von meinen Sünden mach mich rein."
      },
      {
        "rubric_de": "EINLADUNG ZUM GABENGEBET"
      },
      {
        "sp_de": "",
        "text_de": "Form A"
      },
      {
        "sp_de": "P.",
        "text_de": "Lasset uns beten"
      },
      {
        "sp_de": "",
        "text_de": "zu Gott, dem allmächtigen Vater,"
      },
      {
        "sp_de": "",
        "text_de": "dass er die Gaben der Kirche annehme"
      },
      {
        "sp_de": "",
        "text_de": "zu seinem Lob und zum Heil der ganzen Welt."
      },
      {
        "sp_de": "",
        "text_de": "Form B"
      },
      {
        "sp_de": "P.",
        "text_de": "Lasset uns beten."
      },
      {
        "sp_de": "",
        "text_de": "Oder eine andere geeignete Gebetseinladung. Alle verharren eine kurze Zeit im stillen Gebet."
      },
      {
        "sp_de": "",
        "text_de": "Form C"
      },
      {
        "sp_de": "P.",
        "text_de": "Betet, Brüder und Schwestern,"
      },
      {
        "sp_de": "",
        "text_de": "dass mein und euer Opfer"
      },
      {
        "sp_de": "",
        "text_de": "Gott, dem allmächtigen Vater, gefalle."
      },
      {
        "sp_de": "A.",
        "text_de": "Der Herr nehme das Opfer an"
      },
      {
        "sp_de": "",
        "text_de": "aus deinen Händen"
      },
      {
        "sp_de": "",
        "text_de": "zum Lob und Ruhm seines Namens,"
      },
      {
        "sp_de": "",
        "text_de": "zum Segen für uns"
      },
      {
        "sp_de": "",
        "text_de": "und seine ganze heilige Kirche."
      },
      {
        "rubric_de": "GABENGEBET"
      },
      {
        "rubric_de": "Der Priester trägt das Gabengebet vor."
      },
      {
        "sp_de": "A.",
        "text_de": "Amen."
      }
    ]
  },
  {
    "id": "3.2 prayer_offerings",
    "type": "part",
    "header": {
      "de": "Gabengebet"
    },
    "lines": [
      {
        "sp_de": "",
        "text_de": "(Gabengebet)"
      },
      {
        "sp_de": "A.",
        "text_de": "Amen."
      }
    ]
  },
  {
    "id": "3.3 eucharist",
    "type": "selectable",
    "isEucharist": true,
    "header": {
      "de": "Eucharistisches Hochgebet"
    },
    "variants": {
      "1": {
        "label": {
          "de": "Erstes Hochgebet (Römischer Messkanon)"
        }
      },
      "2": {
        "label": {
          "de": "Zweites Hochgebet"
        }
      },
      "3": {
        "label": {
          "de": "Drittes Hochgebet"
        }
      },
      "4": {
        "label": {
          "de": "Viertes Hochgebet"
        }
      }
    },
    "common_dialogue": [
      {
        "sp_de": "P.",
        "text_de": "Der Herr sei mit euch."
      },
      {
        "sp_de": "A.",
        "text_de": "Und mit deinem Geiste."
      },
      {
        "sp_de": "P.",
        "text_de": "Erhebet die Herzen."
      },
      {
        "sp_de": "A.",
        "text_de": "Wir haben sie beim Herrn."
      },
      {
        "sp_de": "P.",
        "text_de": "Lasset uns danken dem Herrn, unserm Gott."
      },
      {
        "sp_de": "A.",
        "text_de": "Das ist würdig und recht."
      }
    ],
    "songs": {
      "de_preface_dialogue": {
        "title": {
          "de": "Einladung zum Hochgebet und Präfation"
        },
        "content": [
          {
            "sp_de": "",
            "text_de": "Das Eucharistische Hochgebet"
          },
          {
            "rubric_de": "EINLADUNG ZUM HOCHGEBET"
          },
          {
            "sp_de": "P.",
            "text_de": "Der Herr sei mit euch."
          },
          {
            "sp_de": "A.",
            "text_de": "Und mit deinem Geiste."
          },
          {
            "sp_de": "P.",
            "text_de": "Erhebet die Herzen."
          },
          {
            "sp_de": "A.",
            "text_de": "Wir haben sie beim Herrn."
          },
          {
            "sp_de": "P.",
            "text_de": "Lasset uns danken dem Herrn, unserm Gott."
          },
          {
            "sp_de": "A.",
            "text_de": "Das ist würdig und recht."
          },
          {
            "rubric_de": "PRÄFATION"
          },
          {
            "rubric_de": "SANCTUS"
          },
          {
            "sp_de": "",
            "text_de": "Heilig, heilig, heilig"
          },
          {
            "sp_de": "",
            "text_de": "Gott, Herr aller Mächte und Gewalten."
          },
          {
            "sp_de": "",
            "text_de": "Erfüllt sind Himmel und Erde"
          },
          {
            "sp_de": "",
            "text_de": "von deiner Herrlichkeit."
          },
          {
            "sp_de": "",
            "text_de": "Hosanna in der Höhe."
          },
          {
            "sp_de": "",
            "text_de": "Hoch gelobt sei,"
          },
          {
            "sp_de": "",
            "text_de": "der da kommt im Namen des Herrn."
          },
          {
            "sp_de": "",
            "text_de": "Hosanna in der Höhe."
          }
        ]
      }
    },
    "sanctus": [
      {
        "sp_de": "A.",
        "text_de": "Heilig, heilig, heilig, Gott, Herr aller Mächte und Gewalten."
      },
      {
        "sp_de": "",
        "text_de": "Erfüllt sind Himmel und Erde von deiner Herrlichkeit."
      },
      {
        "sp_de": "",
        "text_de": "Hosanna in der Höhe."
      },
      {
        "sp_de": "",
        "text_de": "Hochgelobt sei, der da kommt im Namen des Herrn."
      },
      {
        "sp_de": "",
        "text_de": "Hosanna in der Höhe."
      }
    ],
    "forms": {
      "1": [
        {
          "sp_de": "",
          "text_de": "Erstes Hochgebet"
        },
        {
          "sp_de": "",
          "text_de": "Der Römische Messkanon"
        },
        {
          "sp_de": "",
          "text_de": "Dich, gütiger Vater, bitten wir"
        },
        {
          "sp_de": "",
          "text_de": "durch deinen Sohn,"
        },
        {
          "sp_de": "",
          "text_de": "unseren Herrn Jesus Christus:"
        },
        {
          "sp_de": "",
          "text_de": "Nimm diese heiligen,"
        },
        {
          "sp_de": "",
          "text_de": "makellosen Opfergaben an"
        },
        {
          "sp_de": "",
          "text_de": "und segne"
        },
        {
          "sp_de": "",
          "text_de": "✠ sie."
        },
        {
          "sp_de": "",
          "text_de": "Für die Kirche und ihre Hirten"
        },
        {
          "sp_de": "",
          "text_de": "Wir bringen sie dar"
        },
        {
          "sp_de": "",
          "text_de": "vor allem für deine heilige katholische Kirche"
        },
        {
          "sp_de": "",
          "text_de": "in Gemeinschaft mit deinem Diener,"
        },
        {
          "sp_de": "",
          "text_de": "unserem Papst"
        },
        {
          "rubric_de": "N.,"
        },
        {
          "sp_de": "",
          "text_de": "mit unserem Bischof N."
        },
        {
          "sp_de": "",
          "text_de": "und mit allen, die Sorge tragen"
        },
        {
          "sp_de": "",
          "text_de": "für den rechten,"
        },
        {
          "sp_de": "",
          "text_de": "katholischen und apostolischen Glauben."
        },
        {
          "sp_de": "",
          "text_de": "Schenke deiner Kirche Frieden und Einheit,"
        },
        {
          "sp_de": "",
          "text_de": "behüte und leite sie auf der ganz Erde."
        },
        {
          "sp_de": "",
          "text_de": "Für anwesende und abwesende Gläubige"
        },
        {
          "sp_de": "",
          "text_de": "(Konzelebrant)"
        },
        {
          "sp_de": "",
          "text_de": "Gedenke deiner Diener"
        },
        {
          "sp_de": "",
          "text_de": "und Dienerinnen N.N."
        },
        {
          "sp_de": "",
          "text_de": "(für die heute besonders beten)"
        },
        {
          "sp_de": "",
          "text_de": "und aller, die hier versammelt sind."
        },
        {
          "sp_de": "",
          "text_de": "Stilles Gedenken"
        },
        {
          "sp_de": "",
          "text_de": "Herr, du kennst ihren Glauben"
        },
        {
          "sp_de": "",
          "text_de": "und ihre Hingabe;"
        },
        {
          "sp_de": "",
          "text_de": "für sie bringen wir dieses Opfer des Lobes dar,"
        },
        {
          "sp_de": "",
          "text_de": "und sie selber weihen es dir"
        },
        {
          "sp_de": "",
          "text_de": "für sich und für alle, die ihnen verbunden sind,"
        },
        {
          "sp_de": "",
          "text_de": "für ihre Erlösung"
        },
        {
          "sp_de": "",
          "text_de": "und für ihre Hoffnung"
        },
        {
          "sp_de": "",
          "text_de": "auf das unverlierbare Heil."
        },
        {
          "rubric_de": "Vor dich, den ewigen, lebendigen und wahren Gott,"
        },
        {
          "sp_de": "",
          "text_de": "bringen sie ihre Gebete und Gaben."
        },
        {
          "sp_de": "",
          "text_de": "Gedächtnis der Heiligen"
        },
        {
          "sp_de": "",
          "text_de": "(Konzelebrant)"
        },
        {
          "sp_de": "",
          "text_de": "In Gemeinschaft mit der ganzen Kirche"
        },
        {
          "sp_de": "",
          "text_de": "gedenken wir deiner Heiligen."
        },
        {
          "sp_de": "",
          "text_de": "Wir ehren vor allem Maria,"
        },
        {
          "sp_de": "",
          "text_de": "die glorreiche, allzeit jungfräuliche Mutter"
        },
        {
          "sp_de": "",
          "text_de": "unseres Herrn und Gottes Jesus Christus."
        },
        {
          "sp_de": "",
          "text_de": "Wir ehren ihren Bräutigam, den heiligen Josef,"
        },
        {
          "sp_de": "",
          "text_de": "deine heiligen Apostel und Märtyrer:"
        },
        {
          "sp_de": "",
          "text_de": "Petrus und Paulus, Andreas"
        },
        {
          "sp_de": "",
          "text_de": "(Jakobus, Johannes, Thomas, Jakobus,"
        },
        {
          "sp_de": "",
          "text_de": "Philippus, Bartholomäus, Matthäus,"
        },
        {
          "sp_de": "",
          "text_de": "Simon und Thaddäus,"
        },
        {
          "sp_de": "",
          "text_de": "Linus, Kletus, Klemens, Xystus, Kornelius,"
        },
        {
          "sp_de": "",
          "text_de": "Cyprianus, Laurentius, Chrysogonus,"
        },
        {
          "sp_de": "",
          "text_de": "Johannes und Paulus, Kosmas und Damianus"
        },
        {
          "sp_de": "",
          "text_de": ")"
        },
        {
          "sp_de": "",
          "text_de": "und alle deine Heiligen;"
        },
        {
          "sp_de": "",
          "text_de": "blicke auf ihr heiliges Leben und Sterben"
        },
        {
          "sp_de": "",
          "text_de": "und gewähre uns auf ihre Fürsprache"
        },
        {
          "sp_de": "",
          "text_de": "in allem deine Hilfe und deinen Schutz."
        },
        {
          "sp_de": "",
          "text_de": "Für die Ortsgemeinde"
        },
        {
          "sp_de": "",
          "text_de": "(Hauptzelebrant)"
        },
        {
          "sp_de": "",
          "text_de": "Nimm gnädig an, o Gott,"
        },
        {
          "sp_de": "",
          "text_de": "diese Gaben deiner Diener"
        },
        {
          "sp_de": "",
          "text_de": "und deiner ganzen Gemeinde;"
        },
        {
          "sp_de": "",
          "text_de": "ordne unsere Tage in deinem Frieden,"
        },
        {
          "sp_de": "",
          "text_de": "rette uns vor dem ewigen Verderben"
        },
        {
          "sp_de": "",
          "text_de": "und nimm uns auf in die Schar deiner Erwählten."
        },
        {
          "sp_de": "",
          "text_de": "Bitte um Heiligung der Gaben"
        },
        {
          "sp_de": "",
          "text_de": "Schenke, o Gott, diesen Gaben Segen in Fülle"
        },
        {
          "sp_de": "",
          "text_de": "und nimm sie zu eigen an."
        },
        {
          "sp_de": "",
          "text_de": "Mache sie uns zum wahren Opfer im Geiste,"
        },
        {
          "sp_de": "",
          "text_de": "das dir wohl gefällt"
        },
        {
          "sp_de": "",
          "text_de": "zum Leib und Blut deines Sohnes,"
        },
        {
          "sp_de": "",
          "text_de": "unseres Herrn Jesus Christus."
        },
        {
          "sp_de": "",
          "text_de": "Am Abend vor seinem Leiden"
        },
        {
          "sp_de": "",
          "text_de": "nahm er das Brot"
        },
        {
          "sp_de": "",
          "text_de": "in seine heiligen und ehrwürdigen Hände,"
        },
        {
          "sp_de": "",
          "text_de": "erhob die Augen zum Himmel,"
        },
        {
          "sp_de": "",
          "text_de": "zu dir, seinem Vater, dem allmächtigen Gott,"
        },
        {
          "sp_de": "",
          "text_de": "sagte dir Lob und Dank,"
        },
        {
          "sp_de": "",
          "text_de": "brach das Brot,"
        },
        {
          "sp_de": "",
          "text_de": "reichte es seinen Jüngern und sprach:"
        },
        {
          "rubric_de": "NEHMET UND ESSET ALLE DAVON:"
        },
        {
          "rubric_de": "DAS IST MEIN LEIB,"
        },
        {
          "rubric_de": "DER FÜR EUCH HINGEGEBEN WIRD."
        },
        {
          "sp_de": "",
          "text_de": "Ebenso nahm er nach dem Mahl"
        },
        {
          "sp_de": "",
          "text_de": "diesen erhabenen Kelch"
        },
        {
          "sp_de": "",
          "text_de": "in seine heiligen und ehrwürdigen Hände,"
        },
        {
          "sp_de": "",
          "text_de": "sagte dir Lob und Dank,"
        },
        {
          "sp_de": "",
          "text_de": "reichte den Kelch seinen Jüngern und sprach:"
        },
        {
          "rubric_de": "NEHMET UND TRINKET ALLE DARAUS:"
        },
        {
          "rubric_de": "DAS IST DER KELCH"
        },
        {
          "rubric_de": "DES NEUEN UND EWIGEN BUNDES,"
        },
        {
          "rubric_de": "MEIN BLUT,"
        },
        {
          "rubric_de": "DAS FÜR EUCH"
        },
        {
          "rubric_de": "UND FÜR ALLE VERGOSSEN WIRD"
        },
        {
          "rubric_de": "ZUR VERGEBUNG DER SÜNDEN."
        },
        {
          "rubric_de": "TUT DIES ZU MEINEM GEDÄCHTNIS."
        },
        {
          "sp_de": "P. (D.)",
          "text_de": "Geheimnis des Glaubens."
        },
        {
          "sp_de": "A.",
          "text_de": "Deinen Tod, o Herr, verkünden wir,"
        },
        {
          "sp_de": "",
          "text_de": "und deine Auferstehung preisen wir,"
        },
        {
          "sp_de": "",
          "text_de": "bis du kommst in Herrlichkeit."
        },
        {
          "sp_de": "",
          "text_de": "(Hauptzelebrant)"
        },
        {
          "sp_de": "",
          "text_de": "Darum, gütiger Vater,"
        },
        {
          "sp_de": "",
          "text_de": "feiern wir, deine Diener"
        },
        {
          "sp_de": "",
          "text_de": "und dein heiliges Volk,"
        },
        {
          "sp_de": "",
          "text_de": "das Gedächtnis deines Sohnes,"
        },
        {
          "sp_de": "",
          "text_de": "unseres Herrn Jesus Christus."
        },
        {
          "sp_de": "",
          "text_de": "Wir verkünden sein heilbringendes Leiden,"
        },
        {
          "sp_de": "",
          "text_de": "seine Auferstehung von den Toten"
        },
        {
          "sp_de": "",
          "text_de": "und seine glorreiche Himmelfahrt."
        },
        {
          "sp_de": "",
          "text_de": "So bringen wir aus den Gaben,"
        },
        {
          "sp_de": "",
          "text_de": "die du uns geschenkt hast,"
        },
        {
          "sp_de": "",
          "text_de": "dir, dem erhabenen Gott,"
        },
        {
          "sp_de": "",
          "text_de": "die reine, heilige und makellose Opfergabe dar:"
        },
        {
          "sp_de": "",
          "text_de": "das Brot des Lebens"
        },
        {
          "sp_de": "",
          "text_de": "und den Kelch des ewigen Heiles."
        },
        {
          "sp_de": "",
          "text_de": "Blicke versöhnt und gütig darauf nieder"
        },
        {
          "sp_de": "",
          "text_de": "und nimm sie an"
        },
        {
          "sp_de": "",
          "text_de": "wie einst die Gaben"
        },
        {
          "sp_de": "",
          "text_de": "deines gerechten Dieners Abel,"
        },
        {
          "sp_de": "",
          "text_de": "wie das Opfer unseres Vaters Abraham,"
        },
        {
          "sp_de": "",
          "text_de": "wie die heilige Gabe, das reine Opfer"
        },
        {
          "sp_de": "",
          "text_de": "deines Hohenpriesters Melchisedek."
        },
        {
          "rubric_de": "Der Priester faltet die Hände, verneigt sich und spricht:"
        },
        {
          "sp_de": "P.",
          "text_de": "Wir bitten dich,"
        },
        {
          "sp_de": "",
          "text_de": "allmächtiger Gott:"
        },
        {
          "sp_de": "",
          "text_de": "Dein heiliger Engel trage diese Opfergabe"
        },
        {
          "sp_de": "",
          "text_de": "auf deinen himmlischen Altar"
        },
        {
          "sp_de": "",
          "text_de": "vor deine göttliche Herrlichkeit;"
        },
        {
          "sp_de": "",
          "text_de": "und wenn wir durch unsere Teilnahme am Altar"
        },
        {
          "sp_de": "",
          "text_de": "den heiligen Leib und das Blut"
        },
        {
          "sp_de": "",
          "text_de": "deines Sohnes empfangen,"
        },
        {
          "rubric_de": "Der Priester richtet sich auf, macht das Kreuzzeichen und spricht:"
        },
        {
          "sp_de": "P.",
          "text_de": "erfülle uns mit aller Gnade"
        },
        {
          "sp_de": "",
          "text_de": "und allem Segen des Himmels."
        },
        {
          "sp_de": "",
          "text_de": "Gedächtnis der Verstorbenen"
        },
        {
          "sp_de": "",
          "text_de": "(Konzelebrant)"
        },
        {
          "sp_de": "",
          "text_de": "Gedenke auch deiner Diener"
        },
        {
          "sp_de": "",
          "text_de": "und Dienerinnen (N. und N.),"
        },
        {
          "sp_de": "",
          "text_de": "die uns vorangegangen sind,"
        },
        {
          "sp_de": "",
          "text_de": "bezeichnet mit dem Siegel des Glaubens,"
        },
        {
          "sp_de": "",
          "text_de": "und die nun ruhen in Frieden."
        },
        {
          "sp_de": "",
          "text_de": "Stilles Gedenken"
        },
        {
          "sp_de": "",
          "text_de": "Wir bitten dich:"
        },
        {
          "sp_de": "",
          "text_de": "Führe sie und alle,"
        },
        {
          "sp_de": "",
          "text_de": "die in Christus entschlafen sind,"
        },
        {
          "sp_de": "",
          "text_de": "in das Land der Verheißung,"
        },
        {
          "sp_de": "",
          "text_de": "des Lichtes und des Friedens."
        },
        {
          "sp_de": "",
          "text_de": "Weitere Bitten"
        },
        {
          "sp_de": "",
          "text_de": "(Konzelebrant)"
        },
        {
          "rubric_de": "Der Priester schlagt an seine Brust und spricht:"
        },
        {
          "sp_de": "P.",
          "text_de": "Auch uns, deinen sündigen Dienern,"
        },
        {
          "sp_de": "",
          "text_de": "die auf deine reiche Barmherzigkeit hoffen,"
        },
        {
          "sp_de": "",
          "text_de": "gib Anteil und Gemeinschaft"
        },
        {
          "sp_de": "",
          "text_de": "mit deinen heiligen Aposteln und Märtyrern:"
        },
        {
          "sp_de": "",
          "text_de": "Johannes, Stephanus, Matthias, Barnabas"
        },
        {
          "sp_de": "",
          "text_de": "(Ignatius, Alexander, Marzellinus, Petrus,"
        },
        {
          "sp_de": "",
          "text_de": "Felizitas, Perpetua, Agatha, Luzia,"
        },
        {
          "sp_de": "",
          "text_de": "Agnes, Cäcilia, Anastasia"
        },
        {
          "sp_de": "",
          "text_de": ")"
        },
        {
          "sp_de": "",
          "text_de": "und mit allen deinen Heiligen;"
        },
        {
          "sp_de": "",
          "text_de": "wäge nicht unser Verdienst,"
        },
        {
          "sp_de": "",
          "text_de": "sondern schenke gnädig Verzeihung"
        },
        {
          "sp_de": "",
          "text_de": "und gib uns mit ihnen das Erbe des Himmels."
        },
        {
          "sp_de": "",
          "text_de": "(Hauptzelebrant)"
        },
        {
          "sp_de": "",
          "text_de": "Darum bitten wir dich"
        },
        {
          "sp_de": "",
          "text_de": "durch unseren Herrn Jesus Christus."
        },
        {
          "sp_de": "",
          "text_de": "Denn durch ihn erschaffst du immerfort"
        },
        {
          "sp_de": "",
          "text_de": "all diese gute Gaben,"
        },
        {
          "sp_de": "",
          "text_de": "gibst ihnen Leben und Weihe"
        },
        {
          "sp_de": "",
          "text_de": "und spendest sie uns."
        },
        {
          "sp_de": "",
          "text_de": "Abschließender Lobpreis"
        },
        {
          "sp_de": "",
          "text_de": "(Hauptzelebrant und Konzelebranten)"
        },
        {
          "sp_de": "",
          "text_de": "Durch ihn und mit ihm und in ihm ist dir,"
        },
        {
          "sp_de": "",
          "text_de": "Gott, allmächtiger Vater,"
        },
        {
          "sp_de": "",
          "text_de": "in der Einheit des Heiligen Geistes"
        },
        {
          "sp_de": "",
          "text_de": "alle Herrlichkeit und Ehre"
        },
        {
          "sp_de": "",
          "text_de": "jetzt und in Ewigkeit."
        },
        {
          "sp_de": "A.",
          "text_de": "Amen."
        }
      ],
      "2": [
        {
          "sp_de": "",
          "text_de": "Zweites Hochgebet"
        },
        {
          "rubric_de": "PRÄFATION"
        },
        {
          "sp_de": "",
          "text_de": "Bitte um Heiligung der Gaben"
        },
        {
          "sp_de": "",
          "text_de": "Ja, du bist heilig, großer Gott,"
        },
        {
          "sp_de": "",
          "text_de": "du bist der Quell aller Heiligkeit."
        },
        {
          "sp_de": "",
          "text_de": "Darum bitten wir dich:"
        },
        {
          "sp_de": "",
          "text_de": "Sende deinen Geist auf diese Gaben herab"
        },
        {
          "sp_de": "",
          "text_de": "und heilige sie,"
        },
        {
          "sp_de": "",
          "text_de": "damit sie uns werden Leib"
        },
        {
          "sp_de": "",
          "text_de": "✠ und Blut"
        },
        {
          "sp_de": "",
          "text_de": "deines Sohnes, unseres Herrn Jesus Christus."
        },
        {
          "sp_de": "",
          "text_de": "Denn am Abend,"
        },
        {
          "sp_de": "",
          "text_de": "an dem er ausgeliefert wurde"
        },
        {
          "sp_de": "",
          "text_de": "und sich aus freiem Willen"
        },
        {
          "sp_de": "",
          "text_de": "dem Leiden unterwarf,"
        },
        {
          "sp_de": "",
          "text_de": "nahm er das Brot und sagte Dank,"
        },
        {
          "sp_de": "",
          "text_de": "brach es,"
        },
        {
          "sp_de": "",
          "text_de": "reichte es seinen Jüngern und sprach:"
        },
        {
          "rubric_de": "NEHMET UND ESSET ALLE DAVON:"
        },
        {
          "rubric_de": "DAS IST MEIN LEIB,"
        },
        {
          "rubric_de": "DER FÜR EUCH HINGEGEBEN WIRD."
        },
        {
          "sp_de": "",
          "text_de": "Ebenso nahm er nach dem Mahl den Kelch,"
        },
        {
          "sp_de": "",
          "text_de": "dankte wiederum,"
        },
        {
          "sp_de": "",
          "text_de": "reichte ihn seinen Jüngern und sprach:"
        },
        {
          "rubric_de": "NEHMET UND TRINKET ALLE DARAUS:"
        },
        {
          "rubric_de": "DAS IST DER KELCH"
        },
        {
          "rubric_de": "DES NEUEN UND EWIGEN BUNDES,"
        },
        {
          "rubric_de": "MEIN BLUT,"
        },
        {
          "rubric_de": "DAS FÜR EUCH"
        },
        {
          "rubric_de": "UND FÜR ALLE VERGOSSEN WIRD"
        },
        {
          "rubric_de": "ZUR VERGEBUNG DER SÜNDEN."
        },
        {
          "rubric_de": "TUT DIES ZU MEINEM GEDÄCHTNIS."
        },
        {
          "sp_de": "P. (D.)",
          "text_de": "Geheimnis des Glaubens."
        },
        {
          "sp_de": "A.",
          "text_de": "Deinen Tod, o Herr, verkünden wir,"
        },
        {
          "sp_de": "",
          "text_de": "und deine Auferstehung preisen wir,"
        },
        {
          "sp_de": "",
          "text_de": "bis du kommst in Herrlichkeit."
        },
        {
          "sp_de": "",
          "text_de": "Gedächtnis – Darbringung – Dank und Bitte"
        },
        {
          "sp_de": "",
          "text_de": "(Hauptzelebrant)"
        },
        {
          "sp_de": "",
          "text_de": "Darum, gütiger Vater,"
        },
        {
          "sp_de": "",
          "text_de": "feiern wir das Gedächtnis"
        },
        {
          "sp_de": "",
          "text_de": "des Todes und der Auferstehung deines Sohnes"
        },
        {
          "sp_de": "",
          "text_de": "und bringen dir so das Brot des Lebens"
        },
        {
          "sp_de": "",
          "text_de": "und den Kelch des Heiles dar."
        },
        {
          "sp_de": "",
          "text_de": "Wir danken dir, dass du uns berufen hast,"
        },
        {
          "sp_de": "",
          "text_de": "vor dir zu stehen und dir zu dienen."
        },
        {
          "sp_de": "",
          "text_de": "Wir bitten dich:"
        },
        {
          "sp_de": "",
          "text_de": "Schenke uns Anteil an Christi Leib und Blut"
        },
        {
          "sp_de": "",
          "text_de": "und lass uns eins werden"
        },
        {
          "sp_de": "",
          "text_de": "durch den Heiligen Geist."
        },
        {
          "sp_de": "",
          "text_de": "Für die Kirche und ihre Hirten"
        },
        {
          "sp_de": "",
          "text_de": "(Konzelebrant)"
        },
        {
          "sp_de": "",
          "text_de": "Gedenke deiner Kirche auf der ganzen Erde"
        },
        {
          "sp_de": "",
          "text_de": "und vollende dein Volk in der Liebe,"
        },
        {
          "sp_de": "",
          "text_de": "vereint mit unserem Papst"
        },
        {
          "rubric_de": "N.,"
        },
        {
          "sp_de": "",
          "text_de": "unserem Bischof N. und allen Bischöfen,"
        },
        {
          "sp_de": "",
          "text_de": "unseren Priestern und Diakonen"
        },
        {
          "sp_de": "",
          "text_de": "und mit allen,"
        },
        {
          "sp_de": "",
          "text_de": "die zum Dienst in der Kirche bestellt sind."
        },
        {
          "sp_de": "",
          "text_de": "Für die Verstorbenen"
        },
        {
          "sp_de": "",
          "text_de": "(Konzelebrant)"
        },
        {
          "sp_de": "",
          "text_de": "Gedenke"
        },
        {
          "sp_de": "",
          "text_de": "(aller) unserer Brüder und Schwestern,"
        },
        {
          "sp_de": "",
          "text_de": "die entschlafen sind in der Hoffnung,"
        },
        {
          "sp_de": "",
          "text_de": "dass sie auferstehen."
        },
        {
          "sp_de": "",
          "text_de": "Nimm sie"
        },
        {
          "sp_de": "",
          "text_de": "und alle, die in deiner Gnade"
        },
        {
          "sp_de": "",
          "text_de": "aus dieser Welt geschieden sind,"
        },
        {
          "sp_de": "",
          "text_de": "in dein Reich auf,"
        },
        {
          "sp_de": "",
          "text_de": "wo sie dich schauen"
        },
        {
          "sp_de": "",
          "text_de": "von Angesicht zu Angesicht."
        },
        {
          "sp_de": "",
          "text_de": "Für alle"
        },
        {
          "sp_de": "",
          "text_de": "(Konzelebrant)"
        },
        {
          "sp_de": "",
          "text_de": "Vater, erbarme dich über uns alle,"
        },
        {
          "sp_de": "",
          "text_de": "damit uns das ewige Leben zuteil wird"
        },
        {
          "sp_de": "",
          "text_de": "in der Gemeinschaft mit der seligen"
        },
        {
          "sp_de": "",
          "text_de": "Jungfrau und Gottesmutter Maria,"
        },
        {
          "sp_de": "",
          "text_de": "mit deinen Aposteln"
        },
        {
          "sp_de": "",
          "text_de": "und mit allen,"
        },
        {
          "sp_de": "",
          "text_de": "die bei dir Gnade gefunden haben"
        },
        {
          "sp_de": "",
          "text_de": "von Anbeginn der Welt,"
        },
        {
          "sp_de": "",
          "text_de": "dass wir dich loben und preisen"
        },
        {
          "sp_de": "",
          "text_de": "durch deinen Sohn Jesus Christus."
        },
        {
          "sp_de": "",
          "text_de": "Abschließender Lobpreis"
        },
        {
          "sp_de": "",
          "text_de": "(Hauptzelebrant und Konzelebranten)"
        },
        {
          "sp_de": "",
          "text_de": "Durch ihn und mit ihm und in ihm ist dir,"
        },
        {
          "sp_de": "",
          "text_de": "Gott, allmächtiger Vater,"
        },
        {
          "sp_de": "",
          "text_de": "in der Einheit des Heiligen Geistes"
        },
        {
          "sp_de": "",
          "text_de": "alle Herrlichkeit und Ehre"
        },
        {
          "sp_de": "",
          "text_de": "jetzt und in Ewigkeit."
        },
        {
          "sp_de": "A.",
          "text_de": "Amen."
        }
      ],
      "3": [
        {
          "sp_de": "",
          "text_de": "Drittes Hochgebet"
        },
        {
          "sp_de": "P.",
          "text_de": "Ja, du bist heilig, großer Gott,"
        },
        {
          "sp_de": "",
          "text_de": "und alle deine Werke verkünden dein Lob."
        },
        {
          "sp_de": "",
          "text_de": "Denn durch deinen Sohn,"
        },
        {
          "sp_de": "",
          "text_de": "unseren Herrn Jesus Christus,"
        },
        {
          "sp_de": "",
          "text_de": "und in der Kraft des Heiligen Geistes"
        },
        {
          "sp_de": "",
          "text_de": "erfüllst du die ganze Schöpfung"
        },
        {
          "sp_de": "",
          "text_de": "mit Leben und Gnade."
        },
        {
          "sp_de": "",
          "text_de": "Bis ans Ende der Zeiten"
        },
        {
          "sp_de": "",
          "text_de": "versammelst du dir ein Volk,"
        },
        {
          "sp_de": "",
          "text_de": "damit deinem Namen"
        },
        {
          "sp_de": "",
          "text_de": "das reine Opfer dargebracht werde"
        },
        {
          "sp_de": "",
          "text_de": "vom Aufgang der Sonne bis zu Untergang."
        },
        {
          "sp_de": "",
          "text_de": "Bitte um Heiligung der Gaben"
        },
        {
          "sp_de": "",
          "text_de": "Darum bitten wir dich,"
        },
        {
          "sp_de": "",
          "text_de": "allmächtiger Gott:"
        },
        {
          "sp_de": "",
          "text_de": "Heilige unsere Gaben durch deinen Geist,"
        },
        {
          "sp_de": "",
          "text_de": "damit sie uns werden Leib"
        },
        {
          "sp_de": "",
          "text_de": "✠ und Blut"
        },
        {
          "sp_de": "",
          "text_de": "deines Sohnes, unseres Herrn Jesus Christus,"
        },
        {
          "sp_de": "",
          "text_de": "der uns aufgetragen hat,"
        },
        {
          "sp_de": "",
          "text_de": "dieses Geheimnis zu feiern."
        },
        {
          "sp_de": "",
          "text_de": "Denn in der Nacht, da er verraten wurde,"
        },
        {
          "sp_de": "",
          "text_de": "nahm er das Brot und sagte Dank,"
        },
        {
          "sp_de": "",
          "text_de": "brach es,"
        },
        {
          "sp_de": "",
          "text_de": "reichte es seinen Jüngern und sprach:"
        },
        {
          "rubric_de": "NEHMET UND ESSET ALLE DAVON:"
        },
        {
          "rubric_de": "DAS IST MEIN LEIB,"
        },
        {
          "rubric_de": "DER FÜR EUCH HINGEGEBEN WIRD."
        },
        {
          "sp_de": "",
          "text_de": "Ebenso nahm er nach dem Mahl den Kelch,"
        },
        {
          "sp_de": "",
          "text_de": "dankte wiederum,"
        },
        {
          "sp_de": "",
          "text_de": "reichte ihn seinen Jüngern und sprach:"
        },
        {
          "rubric_de": "NEHMET UND TRINKET ALLE DARAUS:"
        },
        {
          "rubric_de": "DAS IST DER KELCH"
        },
        {
          "rubric_de": "DES NEUEN UND EWIGEN BUNDES,"
        },
        {
          "rubric_de": "MEIN BLUT,"
        },
        {
          "rubric_de": "DAS FÜR EUCH"
        },
        {
          "rubric_de": "UND FÜR ALLE VERGOSSEN WIRD"
        },
        {
          "rubric_de": "ZUR VERGEBUNG DER SÜNDEN."
        },
        {
          "rubric_de": "TUT DIES ZU MEINEM GEDÄCHTNIS."
        },
        {
          "sp_de": "P. (D.)",
          "text_de": "Geheimnis des Glaubens."
        },
        {
          "sp_de": "A.",
          "text_de": "Deinen Tod, o Herr, verkünden wir,"
        },
        {
          "sp_de": "",
          "text_de": "und deine Auferstehung preisen wir,"
        },
        {
          "sp_de": "",
          "text_de": "bis du kommst in Herrlichkeit."
        },
        {
          "sp_de": "",
          "text_de": "Gedächtnis – Darbringung – Bitte"
        },
        {
          "sp_de": "",
          "text_de": "(Hauptzelebrant)"
        },
        {
          "sp_de": "",
          "text_de": "Darum, gütiger Vater,"
        },
        {
          "sp_de": "",
          "text_de": "feiern wir das Gedächtnis deines Sohnes."
        },
        {
          "sp_de": "",
          "text_de": "Wir verkünden sein heilbringendes Leiden,"
        },
        {
          "sp_de": "",
          "text_de": "seine glorreiche Auferstehung"
        },
        {
          "sp_de": "",
          "text_de": "und Himmelfahrt"
        },
        {
          "sp_de": "",
          "text_de": "und erwarten seine Wiederkunft."
        },
        {
          "sp_de": "",
          "text_de": "So bringen wir dir mit Lob und Dank"
        },
        {
          "sp_de": "",
          "text_de": "dieses heilige und lebendige Opfer dar."
        },
        {
          "sp_de": "",
          "text_de": "Schau gütig auf die Gabe deiner Kirche."
        },
        {
          "sp_de": "",
          "text_de": "Denn sie stellt dir"
        },
        {
          "sp_de": "",
          "text_de": "das Lamm vor Augen,"
        },
        {
          "sp_de": "",
          "text_de": "das geopfert wurde"
        },
        {
          "sp_de": "",
          "text_de": "und uns nach deinem Willen"
        },
        {
          "sp_de": "",
          "text_de": "mit dir versöhnt hat."
        },
        {
          "sp_de": "",
          "text_de": "Stärke uns durch den Leib und das Blut"
        },
        {
          "sp_de": "",
          "text_de": "deines Sohnes"
        },
        {
          "sp_de": "",
          "text_de": "und erfülle uns mit seinem Heiligen Geist,"
        },
        {
          "sp_de": "",
          "text_de": "damit wir ein Leib und ein Geist werden"
        },
        {
          "sp_de": "",
          "text_de": "in Christus."
        },
        {
          "sp_de": "",
          "text_de": "(Konzelebrant)"
        },
        {
          "sp_de": "",
          "text_de": "Er mache uns auf immer"
        },
        {
          "sp_de": "",
          "text_de": "zu einer Gabe, die dir wohl gefällt,"
        },
        {
          "sp_de": "",
          "text_de": "damit wir das verheißene Erbe erlangen"
        },
        {
          "sp_de": "",
          "text_de": "mit deinen Auserwählten,"
        },
        {
          "sp_de": "",
          "text_de": "mit der seligen Jungfrau"
        },
        {
          "sp_de": "",
          "text_de": "und Gottesmutter Maria,"
        },
        {
          "sp_de": "",
          "text_de": "mit deinen Aposteln und Märtyrern"
        },
        {
          "sp_de": "",
          "text_de": "(mit dem heiligen N.)"
        },
        {
          "sp_de": "",
          "text_de": "(mit dem – den – seligen N.)"
        },
        {
          "sp_de": "",
          "text_de": "und mit allen Heiligen (und Seligen),"
        },
        {
          "sp_de": "",
          "text_de": "auf deren Fürsprache wir vertrauen."
        },
        {
          "sp_de": "",
          "text_de": "Für die Welt, die Kirche und ihre Hirten"
        },
        {
          "sp_de": "",
          "text_de": "(Konzelebrant)"
        },
        {
          "sp_de": "",
          "text_de": "Barmherziger Gott, wir bitten dich:"
        },
        {
          "sp_de": "",
          "text_de": "Dieses Opfer unserer Versöhnung"
        },
        {
          "sp_de": "",
          "text_de": "bringe der ganzen Welt Frieden und Heil."
        },
        {
          "sp_de": "",
          "text_de": "Beschütze deine Kirche"
        },
        {
          "sp_de": "",
          "text_de": "auf ihrem Weg durch die Zeit"
        },
        {
          "sp_de": "",
          "text_de": "und stärke sie im Glauben und in der Liebe:"
        },
        {
          "sp_de": "",
          "text_de": "deinen Diener, unseren Papst"
        },
        {
          "rubric_de": "N.,"
        },
        {
          "sp_de": "",
          "text_de": "unseren Bischof N."
        },
        {
          "sp_de": "",
          "text_de": "und die Gemeinschaft der Bischöfe,"
        },
        {
          "sp_de": "",
          "text_de": "unsere Priester und Diakone,"
        },
        {
          "sp_de": "",
          "text_de": "alle, die zum Dienst in der Kirche bestellt sind,"
        },
        {
          "sp_de": "",
          "text_de": "und das ganze Volk deiner Erlösten."
        },
        {
          "sp_de": "",
          "text_de": "Für die anwesende Gemeinde und für alle"
        },
        {
          "sp_de": "",
          "text_de": "Erhöre, gütiger Vater,"
        },
        {
          "sp_de": "",
          "text_de": "die Gebete der hier versammelten Gemeinde"
        },
        {
          "sp_de": "",
          "text_de": "und führe zu dir"
        },
        {
          "sp_de": "",
          "text_de": "auch alle deine Söhne und Töchter,"
        },
        {
          "sp_de": "",
          "text_de": "die noch fern sind von dir."
        },
        {
          "sp_de": "",
          "text_de": "Für die Verstorbenen"
        },
        {
          "sp_de": "",
          "text_de": "(Konzelebrant)"
        },
        {
          "sp_de": "",
          "text_de": "Erbarme dich (aller) unserer"
        },
        {
          "sp_de": "",
          "text_de": "verstorbenen Brüder und Schwestern"
        },
        {
          "sp_de": "",
          "text_de": "und aller, die in deiner Gnade"
        },
        {
          "sp_de": "",
          "text_de": "aus dieser Welt geschieden sind."
        },
        {
          "sp_de": "",
          "text_de": "Nimm sie auf in deine Herrlichkeit."
        },
        {
          "sp_de": "",
          "text_de": "Und mit ihnen lass auch uns,"
        },
        {
          "sp_de": "",
          "text_de": "wie du verheißen hast,"
        },
        {
          "sp_de": "",
          "text_de": "zu Tische sitzen in deinem Reich."
        },
        {
          "sp_de": "",
          "text_de": "(Hauptzelebrant)"
        },
        {
          "sp_de": "",
          "text_de": "Darum bitten wir dich"
        },
        {
          "sp_de": "",
          "text_de": "durch unseren Herrn Jesus Christus."
        },
        {
          "sp_de": "",
          "text_de": "Denn durch ihn"
        },
        {
          "sp_de": "",
          "text_de": "schenkst du der Welt alle guten Gaben."
        },
        {
          "sp_de": "",
          "text_de": "Abschließender Lobpreis"
        },
        {
          "sp_de": "",
          "text_de": "(Hauptzelebrant und Konzelebranten)"
        },
        {
          "sp_de": "",
          "text_de": "Durch ihn und mit ihm und in ihm ist dir,"
        },
        {
          "sp_de": "",
          "text_de": "Gott, allmächtiger Vater,"
        },
        {
          "sp_de": "",
          "text_de": "in der Einheit des Heiligen Geistes"
        },
        {
          "sp_de": "",
          "text_de": "alle Herrlichkeit und Ehre"
        },
        {
          "sp_de": "",
          "text_de": "jetzt und in Ewigkeit."
        },
        {
          "sp_de": "A.",
          "text_de": "Amen."
        }
      ],
      "4": [
        {
          "sp_de": "",
          "text_de": "Viertes Hochgebet"
        },
        {
          "rubric_de": "PRÄFATION"
        },
        {
          "sp_de": "",
          "text_de": "Dank für das Werk der Schöpfung und der Erlösung"
        },
        {
          "sp_de": "",
          "text_de": "Wir preisen dich, heiliger Vater,"
        },
        {
          "sp_de": "",
          "text_de": "denn groß bist du,"
        },
        {
          "sp_de": "",
          "text_de": "und alle deine Werke"
        },
        {
          "sp_de": "",
          "text_de": "künden deine Weisheit und Liebe."
        },
        {
          "sp_de": "",
          "text_de": "Den Menschen hast du"
        },
        {
          "sp_de": "",
          "text_de": "nach deinem Bild geschaffen"
        },
        {
          "sp_de": "",
          "text_de": "und ihm die Sorge für die ganze Welt anvertraut."
        },
        {
          "sp_de": "",
          "text_de": "Über alle Geschöpfe sollte er herrschen"
        },
        {
          "sp_de": "",
          "text_de": "und allein dir, seinem Schöpfer, dienen."
        },
        {
          "sp_de": "",
          "text_de": "Als er im Ungehorsam deine Freundschaft verlor"
        },
        {
          "sp_de": "",
          "text_de": "und der Macht des Todes verﬁ el,"
        },
        {
          "sp_de": "",
          "text_de": "hast du ihn dennoch nicht verlassen,"
        },
        {
          "sp_de": "",
          "text_de": "sondern voll Erbarmen allen geholfen,"
        },
        {
          "sp_de": "",
          "text_de": "dich zu suchen und zu ﬁ nden."
        },
        {
          "sp_de": "",
          "text_de": "Immer wieder hast du den Menschen"
        },
        {
          "sp_de": "",
          "text_de": "deinen Bund angeboten"
        },
        {
          "sp_de": "",
          "text_de": "und sie durch die Propheten gelehrt,"
        },
        {
          "sp_de": "",
          "text_de": "das Heil zu erwarten."
        },
        {
          "sp_de": "",
          "text_de": "So sehr hast du die Welt geliebt,"
        },
        {
          "sp_de": "",
          "text_de": "heiliger Vater,"
        },
        {
          "sp_de": "",
          "text_de": "dass du deinen eingeborenen Sohn"
        },
        {
          "sp_de": "",
          "text_de": "als Retter gesandt hast,"
        },
        {
          "sp_de": "",
          "text_de": "nachdem die Fülle der Zeiten gekommen war."
        },
        {
          "sp_de": "",
          "text_de": "Er ist Mensch geworden"
        },
        {
          "sp_de": "",
          "text_de": "durch den Heiligen Geist,"
        },
        {
          "sp_de": "",
          "text_de": "geboren von der Jungfrau Maria."
        },
        {
          "sp_de": "",
          "text_de": "Er hat wie wir als Mensch gelebt,"
        },
        {
          "sp_de": "",
          "text_de": "in allem uns gleich außer der Sünde."
        },
        {
          "sp_de": "",
          "text_de": "Den Armen verkündete er"
        },
        {
          "sp_de": "",
          "text_de": "die Botschaft vom Heil,"
        },
        {
          "sp_de": "",
          "text_de": "den Gefangenen Freiheit,"
        },
        {
          "sp_de": "",
          "text_de": "den Trauernden Freude."
        },
        {
          "sp_de": "",
          "text_de": "Um deinen Ratschluss zu erfüllen,"
        },
        {
          "sp_de": "",
          "text_de": "hat er sich dem Tod überliefert,"
        },
        {
          "sp_de": "",
          "text_de": "durch seine Auferstehung"
        },
        {
          "sp_de": "",
          "text_de": "den Tod bezwungen"
        },
        {
          "sp_de": "",
          "text_de": "und das Leben neu geschaffen."
        },
        {
          "sp_de": "",
          "text_de": "Damit wir nicht mehr uns selber leben,"
        },
        {
          "sp_de": "",
          "text_de": "sondern ihm,"
        },
        {
          "sp_de": "",
          "text_de": "der für uns gestorben und auferstanden ist,"
        },
        {
          "sp_de": "",
          "text_de": "hat er von dir, Vater,"
        },
        {
          "sp_de": "",
          "text_de": "als erste Gabe für alle, die glauben,"
        },
        {
          "sp_de": "",
          "text_de": "den Heiligen Geist gesandt,"
        },
        {
          "sp_de": "",
          "text_de": "der das Werk deines Sohnes"
        },
        {
          "sp_de": "",
          "text_de": "auf Erden weiter führt"
        },
        {
          "sp_de": "",
          "text_de": "und alle Heiligung vollendet."
        },
        {
          "sp_de": "",
          "text_de": "Bitte um Heiligung der Gaben"
        },
        {
          "sp_de": "",
          "text_de": "So bitten wir dich, Vater:"
        },
        {
          "sp_de": "",
          "text_de": "Der Geist heilige diese Gaben,"
        },
        {
          "sp_de": "",
          "text_de": "damit sie uns werden Leib"
        },
        {
          "sp_de": "",
          "text_de": "✠ und Blut"
        },
        {
          "sp_de": "",
          "text_de": "unseres Herrn Jesus Christus,"
        },
        {
          "sp_de": "",
          "text_de": "der uns die Feier dieses Geheimnisses"
        },
        {
          "sp_de": "",
          "text_de": "aufgetragen hat"
        },
        {
          "sp_de": "",
          "text_de": "als Zeichen des ewigen Bundes."
        },
        {
          "sp_de": "",
          "text_de": "Da er die Seinen liebte,"
        },
        {
          "sp_de": "",
          "text_de": "die in der Welt waren,"
        },
        {
          "sp_de": "",
          "text_de": "liebte er sie bis zur Vollendung."
        },
        {
          "sp_de": "",
          "text_de": "Und als die Stunde kam,"
        },
        {
          "sp_de": "",
          "text_de": "da er von dir verherrlicht werden sollte,"
        },
        {
          "sp_de": "",
          "text_de": "nahm er beim"
        },
        {
          "sp_de": "",
          "text_de": "Mahl das Brot und sagte Dank,"
        },
        {
          "sp_de": "",
          "text_de": "brach das Brot,"
        },
        {
          "sp_de": "",
          "text_de": "reichte es seinen Jüngern und sprach:"
        },
        {
          "rubric_de": "NEHMET UND ESSET ALLE DAVON:"
        },
        {
          "rubric_de": "DAS IST MEIN LEIB,"
        },
        {
          "rubric_de": "DER FÜR EUCH HINGEGEBEN WIRD."
        },
        {
          "sp_de": "",
          "text_de": "Ebenso nahm er den Kelch mit Wein,"
        },
        {
          "sp_de": "",
          "text_de": "dankte wiederum,"
        },
        {
          "sp_de": "",
          "text_de": "reichte den Kelch seinen Jüngern und sprach:"
        },
        {
          "rubric_de": "NEHMET UND TRINKET ALLE DARAUS:"
        },
        {
          "rubric_de": "DAS IST DER KELCH"
        },
        {
          "rubric_de": "DES NEUEN UND EWIGEN BUNDES,"
        },
        {
          "rubric_de": "MEIN BLUT,"
        },
        {
          "rubric_de": "DAS FÜR EUCH"
        },
        {
          "rubric_de": "UND FÜR ALLE VERGOSSEN WIRD"
        },
        {
          "rubric_de": "ZUR VERGEBUNG DER SÜNDEN."
        },
        {
          "rubric_de": "TUT DIES ZU MEINEM GEDÄCHTNIS."
        },
        {
          "sp_de": "P. (D.)",
          "text_de": "Geheimnis des Glaubens:"
        },
        {
          "sp_de": "A.",
          "text_de": "Deinen Tod, o Herr, verkünden wir,"
        },
        {
          "sp_de": "",
          "text_de": "und deine Auferstehung preisen wir,"
        },
        {
          "sp_de": "",
          "text_de": "bis du kommst in Herrlichkeit."
        },
        {
          "sp_de": "",
          "text_de": "Gedächtnis – Darbringung – Bitte"
        },
        {
          "sp_de": "",
          "text_de": "(Hauptzelebrant)"
        },
        {
          "sp_de": "",
          "text_de": "Darum, gütiger Vater,"
        },
        {
          "sp_de": "",
          "text_de": "feiern wir das Gedächtnis unserer Erlösung."
        },
        {
          "sp_de": "",
          "text_de": "Wir verkünden den Tod deines Sohnes"
        },
        {
          "sp_de": "",
          "text_de": "und sein Herabsteigen zu den Vätern,"
        },
        {
          "sp_de": "",
          "text_de": "bekennen seine Auferstehung"
        },
        {
          "sp_de": "",
          "text_de": "und Himmelfahrt"
        },
        {
          "sp_de": "",
          "text_de": "und erwarten sein Kommen in Herrlichkeit."
        },
        {
          "sp_de": "",
          "text_de": "So bringen wir dir seinen Leib und sein Blut dar,"
        },
        {
          "sp_de": "",
          "text_de": "das Opfer, das dir wohl gefällt"
        },
        {
          "sp_de": "",
          "text_de": "und der ganzen Welt Heil bringt."
        },
        {
          "sp_de": "",
          "text_de": "Sieh her auf die Opfergabe,"
        },
        {
          "sp_de": "",
          "text_de": "die du selber deiner Kirche bereitet hast,"
        },
        {
          "sp_de": "",
          "text_de": "und gib, dass alle, die Anteil erhalten"
        },
        {
          "sp_de": "",
          "text_de": "an dem einen Brot und dem einen Kelch,"
        },
        {
          "sp_de": "",
          "text_de": "ein Leib werden im Heiligen Geist,"
        },
        {
          "sp_de": "",
          "text_de": "eine lebendige Opfergabe in Christus"
        },
        {
          "sp_de": "",
          "text_de": "zum Lob deiner Herrlichkeit."
        },
        {
          "sp_de": "",
          "text_de": "Für die Kirche und ihre Hirten, für die anwesende Gemeinde und für alle"
        },
        {
          "sp_de": "",
          "text_de": "(Konzelebrant)"
        },
        {
          "sp_de": "",
          "text_de": "Herr, gedenke aller, für deren Heil"
        },
        {
          "sp_de": "",
          "text_de": "wir das Opfer darbringen."
        },
        {
          "sp_de": "",
          "text_de": "Wir bitten dich für unseren Papst"
        },
        {
          "rubric_de": "N.,"
        },
        {
          "sp_de": "",
          "text_de": "unseren Bischof N."
        },
        {
          "sp_de": "",
          "text_de": "und die Gemeinschaft der Bischöfe,"
        },
        {
          "sp_de": "",
          "text_de": "für unsere Priester und Diakone"
        },
        {
          "sp_de": "",
          "text_de": "und für alle,"
        },
        {
          "sp_de": "",
          "text_de": "die zum Dienst in der Kirche bestellt sind,"
        },
        {
          "sp_de": "",
          "text_de": "für alle, die ihre Gaben spenden,"
        },
        {
          "sp_de": "",
          "text_de": "für die hier versammelte Gemeinde,"
        },
        {
          "sp_de": "",
          "text_de": "für dein ganzes Volk"
        },
        {
          "sp_de": "",
          "text_de": "und für alle Menschen,"
        },
        {
          "sp_de": "",
          "text_de": "die mit lauterem Herzen dich suchen."
        },
        {
          "sp_de": "",
          "text_de": "Für die Verstorbenen"
        },
        {
          "sp_de": "",
          "text_de": "(Konzelebrant)"
        },
        {
          "sp_de": "",
          "text_de": "Wir empfehlen dir auch jene,"
        },
        {
          "sp_de": "",
          "text_de": "die im Frieden Christi heimgegangen sind,"
        },
        {
          "sp_de": "",
          "text_de": "und alle Verstorbenen,"
        },
        {
          "sp_de": "",
          "text_de": "um deren Glauben niemand weiß als du."
        },
        {
          "sp_de": "",
          "text_de": "Gütiger Vater,"
        },
        {
          "sp_de": "",
          "text_de": "gedenke, dass wir deine Kinder sind,"
        },
        {
          "sp_de": "",
          "text_de": "und schenke uns allen das Erbe des Himmels"
        },
        {
          "sp_de": "",
          "text_de": "in Gemeinschaft mit der seligen Jungfrau"
        },
        {
          "sp_de": "",
          "text_de": "und Gottesmutter Maria,"
        },
        {
          "sp_de": "",
          "text_de": "mit deinen Aposteln und mit allen Heiligen."
        },
        {
          "sp_de": "",
          "text_de": "Und wenn die ganze Schöpfung"
        },
        {
          "sp_de": "",
          "text_de": "von der Verderbnis der Sünde"
        },
        {
          "sp_de": "",
          "text_de": "und des Todes befreit ist,"
        },
        {
          "sp_de": "",
          "text_de": "lass uns zusammen mit ihr dich verherrlichen"
        },
        {
          "sp_de": "",
          "text_de": "in deinem Reich"
        },
        {
          "sp_de": "",
          "text_de": "durch unseren Herrn Jesus Christus."
        },
        {
          "sp_de": "",
          "text_de": "Denn durch ihn"
        },
        {
          "sp_de": "",
          "text_de": "schenkst du der Welt alle guten Gaben."
        },
        {
          "sp_de": "",
          "text_de": "Abschließender Lobpreis"
        },
        {
          "sp_de": "",
          "text_de": "(Hauptzelebrant und Konzelebranten)"
        },
        {
          "sp_de": "",
          "text_de": "Durch ihn und mit ihm und in ihm"
        },
        {
          "sp_de": "",
          "text_de": "ist dir, Gott, allmächtiger Vater,"
        },
        {
          "sp_de": "",
          "text_de": "in der Einheit des Heiligen Geistes"
        },
        {
          "sp_de": "",
          "text_de": "alle Herrlichkeit und Ehre"
        },
        {
          "sp_de": "",
          "text_de": "jetzt und in Ewigkeit."
        },
        {
          "sp_de": "A.",
          "text_de": "Amen."
        }
      ]
    },
    "amen": [
      {
        "sp_de": "P.",
        "text_de": "Durch ihn und mit ihm und in ihm ist dir, Gott, allmächtiger Vater, in der Einheit des Heiligen Geistes alle Herrlichkeit und Ehre jetzt und in Ewigkeit."
      },
      {
        "sp_de": "A.",
        "text_de": "Amen."
      }
    ]
  },
  {
    "id": "3.4 lords_prayer",
    "type": "part",
    "header": {
      "de": "Gebet des Herrn"
    },
    "lines": [
      {
        "sp_de": "",
        "text_de": "Kommunion"
      },
      {
        "rubric_de": "GEBET DES HERRN"
      },
      {
        "sp_de": "P.",
        "text_de": "Dem Wort unseres Herrn und Erlösers gehorsam"
      },
      {
        "sp_de": "",
        "text_de": "und getreu seiner göttlichen Weisung,"
      },
      {
        "sp_de": "",
        "text_de": "wagen wir zu sprechen:"
      },
      {
        "rubric_de": "Oder:"
      },
      {
        "sp_de": "",
        "text_de": "Lasset uns beten,"
      },
      {
        "sp_de": "",
        "text_de": "wie der Herr uns zu beten gelehrt hat."
      },
      {
        "rubric_de": "Oder:"
      },
      {
        "sp_de": "",
        "text_de": "Wir heißen Kinder Gottes und sind es."
      },
      {
        "sp_de": "",
        "text_de": "Darum beten wir voll Vertrauen:"
      },
      {
        "rubric_de": "Oder:"
      },
      {
        "sp_de": "",
        "text_de": "Wir haben den Geist empfangen,"
      },
      {
        "sp_de": "",
        "text_de": "der uns zu Kindern Gottes macht."
      },
      {
        "sp_de": "",
        "text_de": "Darum wagen wir zu sprechen:"
      },
      {
        "sp_de": "",
        "text_de": "Oder eine andere geeignete Einladung."
      },
      {
        "sp_de": "",
        "text_de": "Diese kann auch der Zeit des Kirchenjahres angepasst werden."
      },
      {
        "sp_de": "A.",
        "text_de": "Vater unser im Himmel,"
      },
      {
        "sp_de": "",
        "text_de": "geheiligt werde dein Name."
      },
      {
        "sp_de": "",
        "text_de": "Dein Reich komme."
      },
      {
        "sp_de": "",
        "text_de": "Dein Wille geschehe"
      },
      {
        "sp_de": "",
        "text_de": "wie im Himmel, so auf Erden."
      },
      {
        "sp_de": "",
        "text_de": "Unser tägliches Brot gib uns heute"
      },
      {
        "sp_de": "",
        "text_de": "und vergib uns unsere Schuld,"
      },
      {
        "sp_de": "",
        "text_de": "wie auch wir vergeben unseren Schuldigern."
      },
      {
        "sp_de": "",
        "text_de": "Und führe uns nicht in Versuchung,"
      },
      {
        "sp_de": "",
        "text_de": "sondern erlöse uns von dem Bösen."
      },
      {
        "sp_de": "P.",
        "text_de": "Erlöse uns,"
      },
      {
        "sp_de": "",
        "text_de": "Herr, allmächtiger Vater,"
      },
      {
        "sp_de": "",
        "text_de": "von allem Bösen"
      },
      {
        "sp_de": "",
        "text_de": "und gib Frieden in unseren Tagen."
      },
      {
        "sp_de": "",
        "text_de": "Komm uns zu Hilfe mit deinem Erbarmen"
      },
      {
        "sp_de": "",
        "text_de": "und bewahre uns vor Verwirrung und Sünde,"
      },
      {
        "sp_de": "",
        "text_de": "damit wir voll Zuversicht"
      },
      {
        "sp_de": "",
        "text_de": "das Kommen unseres Erlösers Jesus Christus erwarten."
      },
      {
        "sp_de": "A.",
        "text_de": "Denn dein ist das Reich und die Kraft"
      },
      {
        "sp_de": "",
        "text_de": "und die Herrlichkeit in Ewigkeit. Amen."
      },
      {
        "rubric_de": "FRIEDENSGEBET"
      },
      {
        "sp_de": "P.",
        "text_de": "Der Herr hat zu seinen Aposteln gesagt:"
      },
      {
        "sp_de": "",
        "text_de": "Frieden hinterlasse ich euch,"
      },
      {
        "sp_de": "",
        "text_de": "meinen Frieden gebe ich euch."
      },
      {
        "sp_de": "",
        "text_de": "Deshalb bitten wir:"
      },
      {
        "sp_de": "",
        "text_de": "Herr Jesus Christus,"
      },
      {
        "sp_de": "",
        "text_de": "schau nicht auf unsere Sünden,"
      },
      {
        "sp_de": "",
        "text_de": "sondern auf den Glauben deiner Kirche"
      },
      {
        "sp_de": "",
        "text_de": "und schenke ihr nach deinem Willen"
      },
      {
        "sp_de": "",
        "text_de": "Einheit und Frieden."
      },
      {
        "sp_de": "",
        "text_de": "Gebetseinladung und Christusanrede können der Zeit des Kirchenjahres oder dem Anlass"
      },
      {
        "sp_de": "",
        "text_de": "angepasst werden. Etwa:"
      },
      {
        "sp_de": "",
        "text_de": "In der Weihnachtszeit"
      },
      {
        "sp_de": "",
        "text_de": "Als Christus geboren wurde,"
      },
      {
        "sp_de": "",
        "text_de": "verkündeten Engel den Frieden auf Erden."
      },
      {
        "sp_de": "",
        "text_de": "Deshalb bitten wir:"
      },
      {
        "sp_de": "",
        "text_de": "Herr Jesus Christus, starker Gott, Friedensfürst, …"
      },
      {
        "sp_de": "",
        "text_de": "In der Fastenzeit"
      },
      {
        "sp_de": "",
        "text_de": "Christus ist unser Friede und unsere Versöhnung."
      },
      {
        "sp_de": "",
        "text_de": "Deshalb bitten wir:"
      },
      {
        "sp_de": "",
        "text_de": "Herr Jesus Christus, …"
      }
    ]
  },
  {
    "id": "3.5 peace",
    "type": "part",
    "header": {
      "de": "Friedensgebet und Friedensgruß"
    },
    "lines": [
      {
        "sp_de": "",
        "text_de": "Komm uns zu Hilfe mit deinem Erbarmen"
      },
      {
        "sp_de": "",
        "text_de": "und bewahre uns vor Verwirrung und Sünde,"
      },
      {
        "sp_de": "",
        "text_de": "damit wir voll Zuversicht"
      },
      {
        "sp_de": "",
        "text_de": "das Kommen unseres Erlösers Jesus Christus erwarten."
      },
      {
        "sp_de": "A.",
        "text_de": "Denn dein ist das Reich und die Kraft"
      },
      {
        "sp_de": "",
        "text_de": "und die Herrlichkeit in Ewigkeit. Amen."
      },
      {
        "rubric_de": "FRIEDENSGEBET"
      },
      {
        "sp_de": "P.",
        "text_de": "Der Herr hat zu seinen Aposteln gesagt:"
      },
      {
        "sp_de": "",
        "text_de": "Frieden hinterlasse ich euch,"
      },
      {
        "sp_de": "",
        "text_de": "meinen Frieden gebe ich euch."
      },
      {
        "sp_de": "",
        "text_de": "Deshalb bitten wir:"
      },
      {
        "sp_de": "",
        "text_de": "Herr Jesus Christus,"
      },
      {
        "sp_de": "",
        "text_de": "schau nicht auf unsere Sünden,"
      },
      {
        "sp_de": "",
        "text_de": "sondern auf den Glauben deiner Kirche"
      },
      {
        "sp_de": "",
        "text_de": "und schenke ihr nach deinem Willen"
      },
      {
        "sp_de": "",
        "text_de": "Einheit und Frieden."
      },
      {
        "sp_de": "",
        "text_de": "Gebetseinladung und Christusanrede können der Zeit des Kirchenjahres oder dem Anlass"
      },
      {
        "sp_de": "",
        "text_de": "angepasst werden. Etwa:"
      },
      {
        "sp_de": "",
        "text_de": "In der Weihnachtszeit"
      },
      {
        "sp_de": "",
        "text_de": "Als Christus geboren wurde,"
      },
      {
        "sp_de": "",
        "text_de": "verkündeten Engel den Frieden auf Erden."
      },
      {
        "sp_de": "",
        "text_de": "Deshalb bitten wir:"
      },
      {
        "sp_de": "",
        "text_de": "Herr Jesus Christus, starker Gott, Friedensfürst, …"
      },
      {
        "sp_de": "",
        "text_de": "In der Fastenzeit"
      },
      {
        "sp_de": "",
        "text_de": "Christus ist unser Friede und unsere Versöhnung."
      },
      {
        "sp_de": "",
        "text_de": "Deshalb bitten wir:"
      },
      {
        "sp_de": "",
        "text_de": "Herr Jesus Christus, …"
      },
      {
        "sp_de": "",
        "text_de": "In der Osterzeit"
      },
      {
        "sp_de": "",
        "text_de": "Am Ostertag trat Jesus in die Mitte seiner Jünger"
      },
      {
        "sp_de": "",
        "text_de": "und sprach den Friedensgruß."
      },
      {
        "sp_de": "",
        "text_de": "Deshalb bitten wir:"
      },
      {
        "sp_de": "",
        "text_de": "Herr Jesus Christus,"
      },
      {
        "sp_de": "",
        "text_de": "du Sieger über Sünde und Tod, …"
      },
      {
        "sp_de": "P.",
        "text_de": "Der Friede des Herrn sei allezeit mit euch."
      },
      {
        "sp_de": "A.",
        "text_de": "Und mit deinem Geiste."
      },
      {
        "sp_de": "",
        "text_de": "(D. oder P.: Gebt einander ein Zeichen"
      },
      {
        "sp_de": "",
        "text_de": "des Friedens und der Versöhnung.)"
      },
      {
        "rubric_de": "BRECHUNG DES BROTES UND AGNUS DEI"
      },
      {
        "rubric_de": "Der Priester bricht die Hostie in mehrere Teile."
      },
      {
        "sp_de": "",
        "text_de": "Ein kleines Fragment der Hostie senkt er in den Kelch. Dabei spricht er leise:"
      },
      {
        "sp_de": "",
        "text_de": "Das Sakrament des Leibes und Blutes Christi"
      },
      {
        "sp_de": "",
        "text_de": "schenke uns ewiges Leben."
      },
      {
        "sp_de": "",
        "text_de": "Inzwischen wird der Gesang zur Brotbrechung gesungen:"
      },
      {
        "sp_de": "",
        "text_de": "Lamm Gottes,"
      },
      {
        "sp_de": "",
        "text_de": "du nimmst hinweg die Sünde der Welt:"
      },
      {
        "sp_de": "",
        "text_de": "erbarme dich unser."
      },
      {
        "sp_de": "",
        "text_de": "Lamm Gottes,"
      },
      {
        "sp_de": "",
        "text_de": "du nimmst hinweg die Sünde der Welt:"
      },
      {
        "sp_de": "",
        "text_de": "erbarme dich unser."
      },
      {
        "sp_de": "",
        "text_de": "Lamm Gottes,"
      },
      {
        "sp_de": "",
        "text_de": "du nimmst hinweg die Sünde der Welt:"
      },
      {
        "sp_de": "",
        "text_de": "gib uns deinen Frieden."
      }
    ]
  },
  {
    "id": "3.6 lamb",
    "type": "part",
    "header": {
      "de": "Brotbrechung und Agnus Dei"
    },
    "lines": [
      {
        "sp_de": "",
        "text_de": "In der Osterzeit"
      },
      {
        "sp_de": "",
        "text_de": "Am Ostertag trat Jesus in die Mitte seiner Jünger"
      },
      {
        "sp_de": "",
        "text_de": "und sprach den Friedensgruß."
      },
      {
        "sp_de": "",
        "text_de": "Deshalb bitten wir:"
      },
      {
        "sp_de": "",
        "text_de": "Herr Jesus Christus,"
      },
      {
        "sp_de": "",
        "text_de": "du Sieger über Sünde und Tod, …"
      },
      {
        "sp_de": "P.",
        "text_de": "Der Friede des Herrn sei allezeit mit euch."
      },
      {
        "sp_de": "A.",
        "text_de": "Und mit deinem Geiste."
      },
      {
        "sp_de": "",
        "text_de": "(D. oder P.: Gebt einander ein Zeichen"
      },
      {
        "sp_de": "",
        "text_de": "des Friedens und der Versöhnung.)"
      },
      {
        "rubric_de": "BRECHUNG DES BROTES UND AGNUS DEI"
      },
      {
        "rubric_de": "Der Priester bricht die Hostie in mehrere Teile."
      },
      {
        "sp_de": "",
        "text_de": "Ein kleines Fragment der Hostie senkt er in den Kelch. Dabei spricht er leise:"
      },
      {
        "sp_de": "",
        "text_de": "Das Sakrament des Leibes und Blutes Christi"
      },
      {
        "sp_de": "",
        "text_de": "schenke uns ewiges Leben."
      },
      {
        "sp_de": "",
        "text_de": "Inzwischen wird der Gesang zur Brotbrechung gesungen:"
      },
      {
        "sp_de": "",
        "text_de": "Lamm Gottes,"
      },
      {
        "sp_de": "",
        "text_de": "du nimmst hinweg die Sünde der Welt:"
      },
      {
        "sp_de": "",
        "text_de": "erbarme dich unser."
      },
      {
        "sp_de": "",
        "text_de": "Lamm Gottes,"
      },
      {
        "sp_de": "",
        "text_de": "du nimmst hinweg die Sünde der Welt:"
      },
      {
        "sp_de": "",
        "text_de": "erbarme dich unser."
      },
      {
        "sp_de": "",
        "text_de": "Lamm Gottes,"
      },
      {
        "sp_de": "",
        "text_de": "du nimmst hinweg die Sünde der Welt:"
      },
      {
        "sp_de": "",
        "text_de": "gib uns deinen Frieden."
      },
      {
        "rubric_de": "STILLES GEBET VOR DER KOMMUNION"
      },
      {
        "sp_de": "P.",
        "text_de": "Herr Jesus Christus, Sohn des lebendigen Gottes,"
      },
      {
        "sp_de": "",
        "text_de": "dem Willen des Vaters gehorsam,"
      },
      {
        "sp_de": "",
        "text_de": "hast du im Heiligen Geist durch deinen Tod"
      },
      {
        "sp_de": "",
        "text_de": "der Welt das Leben geschenkt."
      },
      {
        "sp_de": "",
        "text_de": "Erlöse mich durch deinen Leib und dein Blut"
      },
      {
        "sp_de": "",
        "text_de": "von allen Sünden und allem Bösen."
      },
      {
        "sp_de": "",
        "text_de": "Hilf mir, dass ich deine Gebote treu erfülle,"
      },
      {
        "sp_de": "",
        "text_de": "und lass nicht zu,"
      },
      {
        "sp_de": "",
        "text_de": "dass ich jemals von dir getrennt werde."
      },
      {
        "rubric_de": "Oder:"
      },
      {
        "sp_de": "",
        "text_de": "Herr Jesus Christus,"
      },
      {
        "sp_de": "",
        "text_de": "der Empfang deines Leibes und Blutes"
      },
      {
        "sp_de": "",
        "text_de": "bringe mir nicht Gericht und Verdammnis,"
      },
      {
        "sp_de": "",
        "text_de": "sondern Segen und Heil."
      },
      {
        "rubric_de": "EINLADUNG ZUR KOMMUNION"
      },
      {
        "sp_de": "P.",
        "text_de": "Seht das Lamm Gottes,"
      },
      {
        "sp_de": "",
        "text_de": "das hinweg nimmt die Sünde der Welt."
      },
      {
        "sp_de": "A.",
        "text_de": "Herr, ich bin nicht würdig,"
      },
      {
        "sp_de": "",
        "text_de": "dass du eingehst unter mein Dach,"
      },
      {
        "sp_de": "",
        "text_de": "aber sprich nur ein Wort,"
      },
      {
        "sp_de": "",
        "text_de": "so wird meine Seele gesund."
      },
      {
        "sp_de": "P.",
        "text_de": "Selig, die zum Hochzeitsmahl des Lammes geladen sind."
      },
      {
        "rubric_de": "Oder:"
      },
      {
        "sp_de": "",
        "text_de": "Kostet und seht, wie gut der Herr ist."
      },
      {
        "rubric_de": "Oder:"
      },
      {
        "sp_de": "",
        "text_de": "Wer von diesem Brot isst, wird in Ewigkeit leben."
      },
      {
        "sp_de": "",
        "text_de": "Oder ein Kommunionvers aus dem Messbuch, vor allem der der Tagesmesse."
      }
    ]
  },
  {
    "id": "3.7 communion_rite",
    "type": "part",
    "header": {
      "de": "Kommunion"
    },
    "lines": [
      {
        "rubric_de": "STILLES GEBET VOR DER KOMMUNION"
      },
      {
        "sp_de": "P.",
        "text_de": "Herr Jesus Christus, Sohn des lebendigen Gottes,"
      },
      {
        "sp_de": "",
        "text_de": "dem Willen des Vaters gehorsam,"
      },
      {
        "sp_de": "",
        "text_de": "hast du im Heiligen Geist durch deinen Tod"
      },
      {
        "sp_de": "",
        "text_de": "der Welt das Leben geschenkt."
      },
      {
        "sp_de": "",
        "text_de": "Erlöse mich durch deinen Leib und dein Blut"
      },
      {
        "sp_de": "",
        "text_de": "von allen Sünden und allem Bösen."
      },
      {
        "sp_de": "",
        "text_de": "Hilf mir, dass ich deine Gebote treu erfülle,"
      },
      {
        "sp_de": "",
        "text_de": "und lass nicht zu,"
      },
      {
        "sp_de": "",
        "text_de": "dass ich jemals von dir getrennt werde."
      },
      {
        "rubric_de": "Oder:"
      },
      {
        "sp_de": "",
        "text_de": "Herr Jesus Christus,"
      },
      {
        "sp_de": "",
        "text_de": "der Empfang deines Leibes und Blutes"
      },
      {
        "sp_de": "",
        "text_de": "bringe mir nicht Gericht und Verdammnis,"
      },
      {
        "sp_de": "",
        "text_de": "sondern Segen und Heil."
      },
      {
        "rubric_de": "EINLADUNG ZUR KOMMUNION"
      },
      {
        "sp_de": "P.",
        "text_de": "Seht das Lamm Gottes,"
      },
      {
        "sp_de": "",
        "text_de": "das hinweg nimmt die Sünde der Welt."
      },
      {
        "sp_de": "A.",
        "text_de": "Herr, ich bin nicht würdig,"
      },
      {
        "sp_de": "",
        "text_de": "dass du eingehst unter mein Dach,"
      },
      {
        "sp_de": "",
        "text_de": "aber sprich nur ein Wort,"
      },
      {
        "sp_de": "",
        "text_de": "so wird meine Seele gesund."
      },
      {
        "sp_de": "P.",
        "text_de": "Selig, die zum Hochzeitsmahl des Lammes geladen sind."
      },
      {
        "rubric_de": "Oder:"
      },
      {
        "sp_de": "",
        "text_de": "Kostet und seht, wie gut der Herr ist."
      },
      {
        "rubric_de": "Oder:"
      },
      {
        "sp_de": "",
        "text_de": "Wer von diesem Brot isst, wird in Ewigkeit leben."
      },
      {
        "sp_de": "",
        "text_de": "Oder ein Kommunionvers aus dem Messbuch, vor allem der der Tagesmesse."
      },
      {
        "rubric_de": "KOMMUNIONSPENDUNG"
      },
      {
        "rubric_de": "PURIFIKATION"
      },
      {
        "sp_de": "",
        "text_de": "P. (D. oder A.)"
      },
      {
        "sp_de": "",
        "text_de": "Was wir mit dem Munde empfangen haben, Herr,"
      },
      {
        "sp_de": "",
        "text_de": "dass lass uns mit reinem Herzen aufnehmen,"
      },
      {
        "sp_de": "",
        "text_de": "und diese zeitliche Speise"
      },
      {
        "sp_de": "",
        "text_de": "werde uns zur Arznei der Unsterblichkeit."
      },
      {
        "rubric_de": "SCHLUSSGEBET"
      },
      {
        "sp_de": "P.",
        "text_de": "Lasset uns beten."
      },
      {
        "rubric_de": "Der Priester singt oder spricht das Schlussgebet."
      },
      {
        "sp_de": "A.",
        "text_de": "Amen."
      }
    ]
  },
  {
    "id": "3.8 communion",
    "type": "part",
    "header": {
      "de": "Kommunionvers"
    },
    "lines": [
      {
        "sp_de": "",
        "text_de": "(Kommunionvers)"
      }
    ]
  },
  {
    "id": "3.9 prayer_after",
    "type": "part",
    "header": {
      "de": "Schlussgebet"
    },
    "lines": [
      {
        "sp_de": "P.",
        "text_de": "Lasset uns beten."
      },
      {
        "sp_de": "",
        "text_de": "(Schlussgebet)"
      },
      {
        "sp_de": "A.",
        "text_de": "Amen."
      }
    ]
  },
  {
    "id": "4. THE CONCLUDING RITES",
    "type": "section",
    "de": "Entlassung"
  },
  {
    "id": "4.1 announcement",
    "type": "part",
    "header": {
      "de": "Vermeldungen"
    },
    "lines": [
      {
        "sp_de": "",
        "text_de": "Es können kurze Vermeldungen folgen."
      }
    ]
  },
  {
    "id": "4.2 blessing",
    "type": "selectable",
    "header": {
      "de": "Segen"
    },
    "variants": {
      "A": {
        "label": {
          "de": "Segen"
        },
        "lines": [
          {
            "sp_de": "",
            "text_de": "Entlassung"
          },
          {
            "rubric_de": "SEGEN"
          },
          {
            "sp_de": "P.",
            "text_de": "Der Herr sei mit euch."
          },
          {
            "sp_de": "A.",
            "text_de": "Und mit deinem Geiste."
          },
          {
            "sp_de": "P.",
            "text_de": "Es segne euch der allmächtige Gott,"
          },
          {
            "sp_de": "",
            "text_de": "der Vater und der Sohn ✠ und der Heilige Geist."
          },
          {
            "sp_de": "A.",
            "text_de": "Amen."
          },
          {
            "rubric_de": "ENTLASSUNG"
          },
          {
            "sp_de": "D. (P.)",
            "text_de": "Gehet hin in Frieden."
          },
          {
            "sp_de": "A.",
            "text_de": "Dank sei Gott, dem Herrn."
          }
        ]
      }
    }
  },
  {
    "id": "4.3 dismissal",
    "type": "selectable",
    "header": {
      "de": "Entlassung"
    },
    "variants": {
      "A": {
        "label": {
          "de": "Formel 1"
        },
        "lines": [
          {
            "rubric_de": "ENTLASSUNG"
          },
          {
            "sp_de": "D. (P.)",
            "text_de": "Gehet hin in Frieden."
          },
          {
            "sp_de": "A.",
            "text_de": "Dank sei Gott, dem Herrn."
          }
        ]
      }
    }
  },
  {
    "id": "4.4 final_song",
    "type": "part",
    "header": {
      "de": "Schlussgesang"
    },
    "lines": [
      {
        "rubric_de": "Der Priester verehrt den Altar und zieht mit den liturgischen Diensten aus."
      }
    ]
  }
]);
  const ordinarySource = Object.freeze({"authority":"Redemptoristen / Ständige Kommission für die Herausgabe der gemeinsamen liturgischen Bücher im deutschen Sprachgebiet","title":"Allgemeine Texte für die Feier der Heiligen Messe","url":"https://www.redemptoristen.com/fileadmin/_migrated/content_uploads/Eigenfeiern_Allgemeine_Messtexte.pdf","pages":"PDF 2–41","verificationUrl":"https://staeko.net/liturgische-buecher/"});
  const officialOrderCorpus = Object.freeze({ source: ordinarySource, pageRange: 'PDF 2–41', text_de: "Eröffnung<br>BEGRÜSSUNG<br>P.: ✠ Im Namen des Vaters und des Sohnes<br>und des Heiligen Geistes. Amen.<br>Der Herr sei mit euch.<br>Oder: <br>Die Gnade unseres Herrn Jesus Christus,<br>die Liebe Gottes des Vaters<br>und die Gemeinschaft des Heiligen Geistes<br>sei mit euch.<br>Oder:<br>Gnade und Friede von Gott, unserem Vater,<br>und dem Herrn Jesus Christus<br>sei mit euch.<br>Oder:<br>Gnade und Friede<br>in der heiligen Versammlung der Kirche Gottes<br>sei mit euch.<br>Oder:<br>Der Herr der Herrlichkeit<br>und Spender jeder Gnade<br>sei mit euch.<br>Oder:<br>Die Gnade des Herrn Jesus,<br>der für uns Mensch geworden ist<br>(gelitten hat, gestorben ist …),<br>sei mit euch.<br>Oder:<br>Die Gnade unseres Herrn Jesus Christus<br>sei mit euch.<br>A.: Und mit deinem Geiste.<br><br>ALLGEMEINES SCHULDBEKENNTNIS<br>Form A<br>Brüder und Schwestern,<br>damit wir die heiligen Geheimnisse<br>in rechter Weise feiern können,<br>wollen wir bekennen, dass wir gesündigt haben.<br>Oder:<br>Bevor wir das Gedächtnis des Herrn begehen,<br>wollen wir uns besinnen und bekennen,<br>dass wir sündige Menschen sind.<br>Oder eine andere, frei formulierte Einladung.<br>P.: Wir sprechen das Schuldbekenntnis:<br>A.: Ich bekenne Gott, dem Allmächtigen,<br>und allen Brüdern und Schwestern,<br>dass ich Gutes unterlassen und Böses getan habe<br>– ich habe gesündigt<br>in Gedanken, Worten und Werken –<br>Alle schlagen an die Brust.<br>durch meine Schuld, durch meine Schuld,<br>durch meine große Schuld.<br>Darum bitte ich die selige Jungfrau Maria,<br>alle Engel und Heiligen<br>und euch, Brüder und Schwestern,<br>für mich zu beten bei Gott unserem Herrn.<br>P.: Der allmächtige Gott erbarme sich unser,<br>er lasse uns die Sünden nach<br>und führe uns zum ewigen Leben.<br>A.: Amen.<br><br>Form B<br>Brüder und Schwestern,<br>bevor wir das Wort Gottes hören<br>und das Opfer Christi feiern,<br>wollen wir uns bereiten<br>und Gott um Vergebung unserer Sünden bitten.<br>Oder:<br>Damit wir<br>das Gedächtnis des Herrn recht begehen,<br>prüfen wir uns selbst<br>und bekennen unsere Schuld<br>vor Gott und der Kirche.<br>Oder eine andere, frei formulierte Einladung.<br>P.: Erbarme dich, Herr, unser Gott, erbarme dich.<br>A.: Denn wir haben vor dir gesündigt.<br>P.: Erweise, Herr, uns deine Huld.<br>A.: Und schenke uns dein Heil.<br>P.: Nachlass, Vergebung und Verzeihung unserer Sünden<br>gewähre uns der allmächtige und barmherzige Herr.<br>A.: Amen.<br>Die Formen A und B können durch ein Bußlied ersetzt werden.<br>Form C<br>Bei dieser Form können den Kyrie-Rufen frei formulierte Christus-Prädikationen vorausgeschickt werden. <br>Die nachstehenden Anrufungen sind als Beispiele zu verstehen.<br>Zu Beginn dieser Messfeier<br>wollen wir uns besinnen<br>und das Erbarmen des Herrn auf uns herab rufen.<br>Oder eine andere, frei formulierte Einladung.<br>V.: Herr Jesus Christus,<br>du bist vom Vater gesandt zu heilen,<br>was verwundet ist:<br><br>V.: Kyrie, eleison.<br>A.: Kyrie, eleison.<br>Oder:<br>V.: Herr, erbarme dich (unser).<br>A.: Herr, erbarme dich (unser).<br>V.: Du bist gekommen, die Sünder zu berufen:<br>V.: Christe, eleison.<br>A.: Christe, eleison.<br>Oder:<br>V.: Christus, erbarme dich (unser).<br>A.: Christus, erbarme dich (unser).<br>V.: Du bist zum Vater heimgekehrt,<br>um für uns einzutreten:<br>V.: Kyrie, eleison.<br>A.: Kyrie, eleison.<br>Oder:<br>V.: Herr, erbarme dich (unser).<br>A.: Herr, erbarme dich (unser).<br>P.: Der Herr erbarme sich unser.<br>Er nehme von uns Sünde und Schuld,<br>damit wir mit reinem Herzen<br>diese Feier begehen.<br>A.: Amen.<br>KYRIE<br>Falls die Kyrierufe nicht schon vorausgegangen sind.<br>V.: Kyrie, eleison.<br>A.: Kyrie, eleison.<br>V.: Christe, eleison.<br>A.: Christe, eleison.<br>V.: Kyrie, eleison.<br>A.: Kyrie, eleison.<br><br>Oder:<br>V.: Herr, erbarme dich (unser).<br>A.: Herr, erbarme dich (unser).<br>V.: Christus, erbarme dich (unser).<br>A.: Christus, erbarme dich (unser).<br>V.: Herr, erbarme dich (unser).<br>A.: Herr, erbarme dich (unser).<br>GLORIA<br>An den Hochfesten und Festen und bei anderen festlichen Gottesdiensten.<br>Ehre sei Gott in der Höhe<br>und Friede auf Erden<br>den Menschen seiner Gnade.<br>Wir loben dich,<br>wir preisen dich,<br>wir beten dich an,<br>wir rühmen dich und danken dir,<br>denn groß ist deine Herrlichkeit:<br>Herr und Gott, König des Himmels,<br>Gott und Vater, Herrscher über das All,<br>Herr, eingeborener Sohn, Jesus Christus.<br>Herr und Gott, Lamm Gottes, Sohn des Vaters,<br>du nimmst hinweg die Sünde der Welt:<br>erbarme dich unser;<br>du nimmst hinweg die Sünde der Welt:<br>nimm an unser Gebet;<br>du sitzest zur Rechten des Vaters:<br>erbarme dich unser.<br>Denn du allein bist der Heilige,<br>du allein der Herr,<br>du allein der Höchste:<br>Jesus Christus,<br>mit dem Heiligen Geist,<br>zur Ehre Gottes des Vaters. Amen.<br><br>TAGESGEBET<br>P.: Lasset uns beten.<br>Nach einer kurzen Stille singt oder spricht der Priester das Tagesgebet.<br>A.: Amen.<br>Abschließende Formeln des Tagesgebetes<br>Wenn das Tagesgebet an den Vater gerichtet ist:<br>Darum bitten wir durch (ihn,) Jesus Christus,<br>deinen Sohn, unseren Herrn und Gott,<br>der in der Einheit des Heiligen Geistes<br>mit dir lebt und herrscht in alle Ewigkeit.<br>Wenn es an den Vater gerichtet ist, zum Schluss aber der Sohn genannt wird:<br>Der in der Einheit des Heiligen Geistes<br>mit dir lebt und herrscht in alle Ewigkeit.<br>Wenn es an den Sohn gerichtet ist:<br>Der du in der Einheit des Heiligen Geistes<br>mit Gott dem Vater<br>lebst und herrschest in alle Ewigkeit.<br><br>Wortgottesdienst<br>ERSTE UND ZWEITE LESUNG<br>Der Lektor trägt die erste Lesung vor. Wo nach der Lesung ein Ruf der Gemeinde üblich ist, fügt er an:<br>Wort des lebendigen Gottes.<br>A.: Dank sei Gott.<br>Dann trägt der Kantor den Antwortpsalm vor. Die Gemeinde übernimmt den Kehrvers. Folgt eine zweite <br>Lesung, so wird sie in der gleichen Weise abgeschlossen wie die erste Lesung. Auf die zweite Lesung folgt <br>das Halleluja bzw. der an dieser Stelle vorgesehene Ruf vor dem Evangelium.<br>EVANGELIUM<br>D. (P.): Der Herr sei mit euch.<br>A.: Und mit deinem Geiste.<br>D. (P.): ✠ Aus dem heiligen Evangelium nach N.<br>Oder: Aus dem Evangelium Jesu Christi nach N.<br>Oder: Aus dem Evangelium nach N.<br>A.: Ehre sei dir, o Herr.<br>Wo nach dem Evangelium ein Zuruf der Gemeinde üblich ist, fügt der Diakon (Priester) an:<br>Evangelium unseres Herrn Jesus Christus.<br>A.: Lob sei dir, Christus.<br>HOMILIE<br>CREDO<br>An Hochfesten und bei anderen festlichen Gottesdiensten.<br>(P.: Wir sprechen das Große Glaubensbekenntnis.)<br>A.: Wir glauben an den einen Gott,<br>den Vater, den Allmächtigen,<br><br>der alles geschaffen hat, Himmel und Erde,<br>die sichtbare und die unsichtbare Welt.<br>Und an den einen Herrn Jesus Christus,<br>Gottes eingeborenen Sohn,<br>aus dem Vater geboren vor aller Zeit:<br>Gott von Gott, Licht vom Licht,<br>wahrer Gott vom wahren Gott,<br>gezeugt, nicht geschaffen,<br>eines Wesens mit dem Vater;<br>durch ihn ist alles geschaffen.<br>Für uns Menschen und zu unserem Heil<br>ist er vom Himmel gekommen,<br>Zu den folgenden Worten (bis zu „Mensch geworden“) verbeugen sich alle.<br>hat Fleisch angenommen<br>durch den Heiligen Geist<br>von der Jungfrau Maria<br>und ist Mensch geworden.<br>Er wurde für uns gekreuzigt<br>unter Pontius Pilatus,<br>hat gelitten und ist begraben worden,<br>ist am dritten Tage auferstanden<br>nach der Schrift<br>und aufgefahren in den Himmel.<br>Er sitzt zur Rechten des Vaters<br>und wird wiederkommen in Herrlichkeit,<br>zu richten die Lebenden und die Toten;<br>seiner Herrschaft wird kein Ende sein.<br>Wir glauben an den Heiligen Geist,<br>der Herr ist und lebendig macht,<br>der aus dem Vater und dem Sohn hervorgeht,<br>der mit dem Vater und dem Sohn<br>angebetet und verherrlicht wird,<br>der gesprochen hat durch die Propheten,<br>und die eine, heilige, katholische<br>und apostolische Kirche.<br>Wir bekennen die eine Taufe<br><br>zur Vergebung der Sünden.<br>Wir erwarten die Auferstehung der Toten<br>und das Leben der kommenden Welt. Amen.<br>An Stelle des Großen Glaubensbekenntnisses kann das <br>Apostolische Glaubensbekenntnis gebetet werden.<br>(P.: Wir sprechen das Apostolische Glaubensbekenntnis.)<br>A.: Ich glaube an Gott,<br>den Vater, den Allmächtigen,<br>den Schöpfer des Himmels und der Erde,<br>und an Jesus Christus,<br>seinen eingeborenen Sohn, unsern Herrn,<br>Zu den folgenden Worten (bis zu „Jungfrau Maria“) verbeugen sich alle.<br>empfangen durch den Heiligen Geist,<br>geboren von der Jungfrau Maria,<br>gelitten unter Pontius Pilatus,<br>gekreuzigt, gestorben und begraben,<br>hinab gestiegen in das Reich des Todes,<br>am dritten Tage auferstanden von den Toten,<br>aufgefahren in den Himmel;<br>er sitzt zur Rechten Gottes,<br>des allmächtigen Vaters;<br>von dort wird er kommen,<br>zu richten die Lebenden und die Toten.<br>Ich glaube an den Heiligen Geist,<br>die heilige katholische Kirche,<br>Gemeinschaft der Heiligen,<br>Vergebung der Sünden,<br>Auferstehung der Toten<br>und das ewige Leben. Amen.<br>ALLGEMEINES GEBET<br>Es folgen die Fürbitten. Sie werden vom Priester eingeleitet und abgeschlossen. <br>Die einzelnen Anliegen können vom Diakon, Lektor, Kantor oder von anderen vorgetragen werden.<br><br>Eucharistiefeier<br>GABENBEREITUNG<br>Der Priester nimmt die Schale mit dem Brot, hält sie über den Altar und spricht leise:<br>Gepriesen bist du, Herr, unser Gott,<br>Schöpfer der Welt.<br>Du schenkst uns das Brot,<br>die Frucht der Erde und der menschlichen Arbeit.<br>Wir bringen dieses Brot vor dein Angesicht,<br>damit es uns das Brot des Lebens werde.<br>(Gepriesen bist du in Ewigkeit, Herr, unser Gott.)<br>Der Priester gießt Wein und ein wenig Wasser in den Kelch und spricht leise:<br>Wie das Wasser sich mit dem Wein verbindet<br>zum heiligen Zeichen,<br>so lasse uns dieser Kelch teilhaben<br>an der Gottheit Christi,<br>der unsere Menschennatur angenommen hat.<br>Der Priester nimmt den Kelch, hält ihn über den Altar und spricht leise:<br>Gepriesen bist du Herr, unser Gott,<br>Schöpfer der Welt.<br>Du schenkst uns den Wein,<br>die Frucht des Weinstocks und der menschlichen Arbeit.<br>Wir bringen diesen Kelch vor dein Angesicht,<br>damit er uns der Kelch des Heiles werde.<br>(Gepriesen bist du in Ewigkeit, Herr, unser Gott.)<br>Der Priester verneigt sich und spricht leise:<br>Herr, wir kommen zu dir mit reumütigem Herzen<br>und mit demütigem Sinn.<br>Nimm uns an und gib, dass unser Opfer dir gefalle.<br>Zur Händewaschung an der Seite des Altares spricht der Priester leise:<br>Herr, wasch ab meine Schuld,<br>von meinen Sünden mach mich rein.<br><br>EINLADUNG ZUM GABENGEBET<br>Form A<br>P.: Lasset uns beten<br>zu Gott, dem allmächtigen Vater,<br>dass er die Gaben der Kirche annehme<br>zu seinem Lob und zum Heil der ganzen Welt.<br>Form B<br>P.: Lasset uns beten.<br>Oder eine andere geeignete Gebetseinladung. Alle verharren eine kurze Zeit im stillen Gebet.<br>Form C<br>P.:<br> Betet, Brüder und Schwestern,<br>dass mein und euer Opfer<br>Gott, dem allmächtigen Vater, gefalle.<br>A.: Der Herr nehme das Opfer an<br>aus deinen Händen<br>zum Lob und Ruhm seines Namens,<br>zum Segen für uns<br>und seine ganze heilige Kirche.<br>GABENGEBET<br>Der Priester trägt das Gabengebet vor.<br>A.: Amen.<br><br>Das Eucharistische Hochgebet<br>EINLADUNG ZUM HOCHGEBET<br>P.: Der Herr sei mit euch.<br>A.: Und mit deinem Geiste.<br>P.: Erhebet die Herzen.<br>A.: Wir haben sie beim Herrn.<br>P.: Lasset uns danken dem Herrn, unserm Gott.<br>A.: Das ist würdig und recht.<br>PRÄFATION<br>SANCTUS<br>Heilig, heilig, heilig<br>Gott, Herr aller Mächte und Gewalten.<br>Erfüllt sind Himmel und Erde<br>von deiner Herrlichkeit.<br>Hosanna in der Höhe.<br>Hoch gelobt sei,<br>der da kommt im Namen des Herrn.<br>Hosanna in der Höhe.<br><br>Erstes Hochgebet<br>Der Römische Messkanon<br>Dich, gütiger Vater, bitten wir<br>durch deinen Sohn,<br>unseren Herrn Jesus Christus:<br>Nimm diese heiligen,<br>makellosen Opfergaben an<br>und segne<br> ✠ sie.<br>Für die Kirche und ihre Hirten<br>Wir bringen sie dar<br>vor allem für deine heilige katholische Kirche<br>in Gemeinschaft mit deinem Diener,<br>unserem Papst <br>N.,<br>mit unserem Bischof N.<br>und mit allen, die Sorge tragen<br>für den rechten,<br>katholischen und apostolischen Glauben.<br>Schenke deiner Kirche Frieden und Einheit,<br>behüte und leite sie auf der ganz Erde.<br>Für anwesende und abwesende Gläubige<br>(Konzelebrant)<br>Gedenke deiner Diener<br>und Dienerinnen N.N.<br>(für die heute besonders beten)<br>und aller, die hier versammelt sind.<br>Stilles Gedenken<br><br>Herr, du kennst ihren Glauben<br>und ihre Hingabe;<br>für sie bringen wir dieses Opfer des Lobes dar,<br>und sie selber weihen es dir<br>für sich und für alle, die ihnen verbunden sind,<br>für ihre Erlösung<br>und für ihre Hoffnung<br>auf das unverlierbare Heil.<br>Vor dich, den ewigen, lebendigen und wahren Gott,<br>bringen sie ihre Gebete und Gaben.<br>Gedächtnis der Heiligen<br>(Konzelebrant)<br>In Gemeinschaft mit der ganzen Kirche<br>gedenken wir deiner Heiligen.<br>Wir ehren vor allem Maria,<br>die glorreiche, allzeit jungfräuliche Mutter<br>unseres Herrn und Gottes Jesus Christus.<br>Wir ehren ihren Bräutigam, den heiligen Josef,<br>deine heiligen Apostel und Märtyrer:<br>Petrus und Paulus, Andreas<br>(Jakobus, Johannes, Thomas, Jakobus,<br>Philippus, Bartholomäus, Matthäus,<br>Simon und Thaddäus,<br>Linus, Kletus, Klemens, Xystus, Kornelius,<br>Cyprianus, Laurentius, Chrysogonus,<br>Johannes und Paulus, Kosmas und Damianus<br>)<br>und alle deine Heiligen;<br>blicke auf ihr heiliges Leben und Sterben<br>und gewähre uns auf ihre Fürsprache<br>in allem deine Hilfe und deinen Schutz.<br><br>Für die Ortsgemeinde<br>(Hauptzelebrant)<br>Nimm gnädig an, o Gott,<br>diese Gaben deiner Diener<br>und deiner ganzen Gemeinde;<br>ordne unsere Tage in deinem Frieden,<br>rette uns vor dem ewigen Verderben<br>und nimm uns auf in die Schar deiner Erwählten.<br>Bitte um Heiligung der Gaben<br>Schenke, o Gott, diesen Gaben Segen in Fülle<br>und nimm sie zu eigen an.<br>Mache sie uns zum wahren Opfer im Geiste,<br>das dir wohl gefällt<br>zum Leib und Blut deines Sohnes,<br>unseres Herrn Jesus Christus.<br>Am Abend vor seinem Leiden<br>nahm er das Brot<br>in seine heiligen und ehrwürdigen Hände,<br>erhob die Augen zum Himmel,<br>zu dir, seinem Vater, dem allmächtigen Gott,<br>sagte dir Lob und Dank,<br>brach das Brot,<br>reichte es seinen Jüngern und sprach:<br>NEHMET UND ESSET ALLE DAVON:<br>DAS IST MEIN LEIB,<br>DER FÜR EUCH HINGEGEBEN WIRD.<br><br>Ebenso nahm er nach dem Mahl<br>diesen erhabenen Kelch<br>in seine heiligen und ehrwürdigen Hände,<br>sagte dir Lob und Dank,<br>reichte den Kelch seinen Jüngern und sprach:<br>NEHMET UND TRINKET ALLE DARAUS:<br>DAS IST DER KELCH<br>DES NEUEN UND EWIGEN BUNDES,<br>MEIN BLUT,<br>DAS FÜR EUCH<br>UND FÜR ALLE VERGOSSEN WIRD<br>ZUR VERGEBUNG DER SÜNDEN.<br>TUT DIES ZU MEINEM GEDÄCHTNIS.<br>P. (D.): Geheimnis des Glaubens.<br>A.: Deinen Tod, o Herr, verkünden wir,<br>und deine Auferstehung preisen wir,<br>bis du kommst in Herrlichkeit.<br>(Hauptzelebrant)<br>Darum, gütiger Vater,<br>feiern wir, deine Diener<br>und dein heiliges Volk,<br>das Gedächtnis deines Sohnes,<br>unseres Herrn Jesus Christus.<br>Wir verkünden sein heilbringendes Leiden,<br>seine Auferstehung von den Toten<br>und seine glorreiche Himmelfahrt.<br>So bringen wir aus den Gaben,<br>die du uns geschenkt hast,<br>dir, dem erhabenen Gott,<br>die reine, heilige und makellose Opfergabe dar:<br>das Brot des Lebens<br>und den Kelch des ewigen Heiles.<br><br>Blicke versöhnt und gütig darauf nieder<br>und nimm sie an<br>wie einst die Gaben<br>deines gerechten Dieners Abel,<br>wie das Opfer unseres Vaters Abraham,<br>wie die heilige Gabe, das reine Opfer<br>deines Hohenpriesters Melchisedek.<br>Der Priester faltet die Hände, verneigt sich und spricht:<br>Wir bitten dich,<br>allmächtiger Gott:<br>Dein heiliger Engel trage diese Opfergabe<br>auf deinen himmlischen Altar<br>vor deine göttliche Herrlichkeit;<br>und wenn wir durch unsere Teilnahme am Altar<br>den heiligen Leib und das Blut<br>deines Sohnes empfangen,<br>Der Priester richtet sich auf, macht das Kreuzzeichen und spricht:<br>erfülle uns mit aller Gnade<br>und allem Segen des Himmels.<br>Gedächtnis der Verstorbenen<br>(Konzelebrant)<br>Gedenke auch deiner Diener<br>und Dienerinnen (N. und N.),<br>die uns vorangegangen sind,<br>bezeichnet mit dem Siegel des Glaubens,<br>und die nun ruhen in Frieden.<br>Stilles Gedenken<br>Wir bitten dich:<br>Führe sie und alle,<br>die in Christus entschlafen sind,<br>in das Land der Verheißung,<br>des Lichtes und des Friedens.<br><br>Weitere Bitten<br>(Konzelebrant)<br>Der Priester schlagt an seine Brust und spricht:<br>Auch uns, deinen sündigen Dienern,<br>die auf deine reiche Barmherzigkeit hoffen,<br>gib Anteil und Gemeinschaft<br>mit deinen heiligen Aposteln und Märtyrern:<br>Johannes, Stephanus, Matthias, Barnabas<br>(Ignatius, Alexander, Marzellinus, Petrus,<br>Felizitas, Perpetua, Agatha, Luzia,<br>Agnes, Cäcilia, Anastasia<br>)<br>und mit allen deinen Heiligen;<br>wäge nicht unser Verdienst,<br>sondern schenke gnädig Verzeihung<br>und gib uns mit ihnen das Erbe des Himmels.<br>(Hauptzelebrant)<br>Darum bitten wir dich<br>durch unseren Herrn Jesus Christus.<br>Denn durch ihn erschaffst du immerfort<br>all diese gute Gaben,<br>gibst ihnen Leben und Weihe<br>und spendest sie uns.<br>Abschließender Lobpreis<br>(Hauptzelebrant und Konzelebranten)<br>Durch ihn und mit ihm und in ihm ist dir,<br>Gott, allmächtiger Vater,<br>in der Einheit des Heiligen Geistes<br>alle Herrlichkeit und Ehre<br>jetzt und in Ewigkeit.<br>A.: Amen.<br><br>Zweites Hochgebet<br>PRÄFATION<br><br>Bitte um Heiligung der Gaben<br>Ja, du bist heilig, großer Gott,<br>du bist der Quell aller Heiligkeit.<br>Darum bitten wir dich:<br>Sende deinen Geist auf diese Gaben herab<br>und heilige sie,<br>damit sie uns werden Leib <br>✠ und Blut<br>deines Sohnes, unseres Herrn Jesus Christus.<br>Denn am Abend,<br>an dem er ausgeliefert wurde<br>und sich aus freiem Willen<br>dem Leiden unterwarf,<br>nahm er das Brot und sagte Dank,<br>brach es,<br>reichte es seinen Jüngern und sprach:<br><br>NEHMET UND ESSET ALLE DAVON:<br>DAS IST MEIN LEIB,<br>DER FÜR EUCH HINGEGEBEN WIRD.<br>Ebenso nahm er nach dem Mahl den Kelch,<br>dankte wiederum,<br>reichte ihn seinen Jüngern und sprach:<br>NEHMET UND TRINKET ALLE DARAUS:<br>DAS IST DER KELCH<br>DES NEUEN UND EWIGEN BUNDES,<br>MEIN BLUT,<br>DAS FÜR EUCH<br>UND FÜR ALLE VERGOSSEN WIRD<br>ZUR VERGEBUNG DER SÜNDEN.<br>TUT DIES ZU MEINEM GEDÄCHTNIS.<br>P. (D.): Geheimnis des Glaubens.<br>A.: Deinen Tod, o Herr, verkünden wir,<br>und deine Auferstehung preisen wir,<br>bis du kommst in Herrlichkeit.<br>Gedächtnis – Darbringung – Dank und Bitte<br>(Hauptzelebrant)<br>Darum, gütiger Vater,<br>feiern wir das Gedächtnis<br>des Todes und der Auferstehung deines Sohnes<br>und bringen dir so das Brot des Lebens<br>und den Kelch des Heiles dar.<br>Wir danken dir, dass du uns berufen hast,<br>vor dir zu stehen und dir zu dienen.<br>Wir bitten dich:<br>Schenke uns Anteil an Christi Leib und Blut<br>und lass uns eins werden<br>durch den Heiligen Geist.<br><br>Für die Kirche und ihre Hirten<br>(Konzelebrant)<br>Gedenke deiner Kirche auf der ganzen Erde<br>und vollende dein Volk in der Liebe,<br>vereint mit unserem Papst <br>N.,<br>unserem Bischof N. und allen Bischöfen,<br>unseren Priestern und Diakonen<br>und mit allen,<br>die zum Dienst in der Kirche bestellt sind.<br>Für die Verstorbenen<br>(Konzelebrant)<br>Gedenke<br>(aller) unserer Brüder und Schwestern,<br>die entschlafen sind in der Hoffnung,<br>dass sie auferstehen.<br>Nimm sie<br>und alle, die in deiner Gnade<br>aus dieser Welt geschieden sind,<br>in dein Reich auf,<br>wo sie dich schauen<br>von Angesicht zu Angesicht.<br>Für alle<br>(Konzelebrant)<br>Vater, erbarme dich über uns alle,<br>damit uns das ewige Leben zuteil wird<br>in der Gemeinschaft mit der seligen<br>Jungfrau und Gottesmutter Maria,<br>mit deinen Aposteln<br>und mit allen,<br>die bei dir Gnade gefunden haben<br>von Anbeginn der Welt,<br>dass wir dich loben und preisen<br>durch deinen Sohn Jesus Christus.<br><br>Abschließender Lobpreis<br>(Hauptzelebrant und Konzelebranten)<br>Durch ihn und mit ihm und in ihm ist dir,<br>Gott, allmächtiger Vater,<br>in der Einheit des Heiligen Geistes<br>alle Herrlichkeit und Ehre<br>jetzt und in Ewigkeit.<br>A.: Amen.<br><br>Drittes Hochgebet<br>P.: Ja, du bist heilig, großer Gott,<br>und alle deine Werke verkünden dein Lob.<br>Denn durch deinen Sohn,<br>unseren Herrn Jesus Christus,<br>und in der Kraft des Heiligen Geistes<br>erfüllst du die ganze Schöpfung<br>mit Leben und Gnade.<br>Bis ans Ende der Zeiten<br>versammelst du dir ein Volk,<br>damit deinem Namen<br>das reine Opfer dargebracht werde<br>vom Aufgang der Sonne bis zu Untergang.<br>Bitte um Heiligung der Gaben<br>Darum bitten wir dich,<br>allmächtiger Gott:<br>Heilige unsere Gaben durch deinen Geist,<br>damit sie uns werden Leib <br>✠ und Blut<br>deines Sohnes, unseres Herrn Jesus Christus,<br>der uns aufgetragen hat,<br>dieses Geheimnis zu feiern.<br>Denn in der Nacht, da er verraten wurde,<br>nahm er das Brot und sagte Dank,<br>brach es,<br>reichte es seinen Jüngern und sprach:<br>NEHMET UND ESSET ALLE DAVON:<br>DAS IST MEIN LEIB,<br>DER FÜR EUCH HINGEGEBEN WIRD.<br>Ebenso nahm er nach dem Mahl den Kelch,<br>dankte wiederum,<br>reichte ihn seinen Jüngern und sprach:<br><br>NEHMET UND TRINKET ALLE DARAUS:<br>DAS IST DER KELCH<br>DES NEUEN UND EWIGEN BUNDES,<br>MEIN BLUT,<br>DAS FÜR EUCH<br>UND FÜR ALLE VERGOSSEN WIRD<br>ZUR VERGEBUNG DER SÜNDEN.<br>TUT DIES ZU MEINEM GEDÄCHTNIS.<br>P. (D.): Geheimnis des Glaubens.<br>A.: Deinen Tod, o Herr, verkünden wir,<br>und deine Auferstehung preisen wir,<br>bis du kommst in Herrlichkeit.<br>Gedächtnis – Darbringung – Bitte<br>(Hauptzelebrant)<br>Darum, gütiger Vater,<br>feiern wir das Gedächtnis deines Sohnes.<br>Wir verkünden sein heilbringendes Leiden,<br>seine glorreiche Auferstehung<br>und Himmelfahrt<br>und erwarten seine Wiederkunft.<br>So bringen wir dir mit Lob und Dank<br>dieses heilige und lebendige Opfer dar.<br>Schau gütig auf die Gabe deiner Kirche.<br>Denn sie stellt dir<br>das Lamm vor Augen,<br>das geopfert wurde<br>und uns nach deinem Willen<br>mit dir versöhnt hat.<br>Stärke uns durch den Leib und das Blut<br>deines Sohnes<br>und erfülle uns mit seinem Heiligen Geist,<br>damit wir ein Leib und ein Geist werden<br>in Christus.<br><br>(Konzelebrant)<br>Er mache uns auf immer<br>zu einer Gabe, die dir wohl gefällt,<br>damit wir das verheißene Erbe erlangen<br>mit deinen Auserwählten,<br>mit der seligen Jungfrau<br>und Gottesmutter Maria,<br>mit deinen Aposteln und Märtyrern<br>(mit dem heiligen N.)<br>(mit dem – den – seligen N.)<br>und mit allen Heiligen (und Seligen),<br>auf deren Fürsprache wir vertrauen.<br>Für die Welt, die Kirche und ihre Hirten<br>(Konzelebrant)<br>Barmherziger Gott, wir bitten dich:<br>Dieses Opfer unserer Versöhnung<br>bringe der ganzen Welt Frieden und Heil.<br>Beschütze deine Kirche<br>auf ihrem Weg durch die Zeit <br>und stärke sie im Glauben und in der Liebe:<br>deinen Diener, unseren Papst <br>N.,<br>unseren Bischof N.<br>und die Gemeinschaft der Bischöfe,<br>unsere Priester und Diakone,<br>alle, die zum Dienst in der Kirche bestellt sind,<br>und das ganze Volk deiner Erlösten.<br>Für die anwesende Gemeinde und für alle<br>Erhöre, gütiger Vater,<br>die Gebete der hier versammelten Gemeinde<br>und führe zu dir<br>auch alle deine Söhne und Töchter,<br>die noch fern sind von dir.<br><br>Für die Verstorbenen<br>(Konzelebrant)<br>Erbarme dich (aller) unserer<br>verstorbenen Brüder und Schwestern<br>und aller, die in deiner Gnade<br>aus dieser Welt geschieden sind.<br>Nimm sie auf in deine Herrlichkeit.<br>Und mit ihnen lass auch uns,<br>wie du verheißen hast,<br>zu Tische sitzen in deinem Reich.<br>(Hauptzelebrant)<br>Darum bitten wir dich<br>durch unseren Herrn Jesus Christus.<br>Denn durch ihn<br>schenkst du der Welt alle guten Gaben.<br>Abschließender Lobpreis<br>(Hauptzelebrant und Konzelebranten)<br>Durch ihn und mit ihm und in ihm ist dir,<br>Gott, allmächtiger Vater,<br>in der Einheit des Heiligen Geistes<br>alle Herrlichkeit und Ehre<br>jetzt und in Ewigkeit.<br>A.: Amen.<br><br>Viertes Hochgebet<br>PRÄFATION<br><br>Dank für das Werk der Schöpfung und der Erlösung<br>Wir preisen dich, heiliger Vater,<br>denn groß bist du,<br>und alle deine Werke<br>künden deine Weisheit und Liebe.<br>Den Menschen hast du<br>nach deinem Bild geschaffen<br>und ihm die Sorge für die ganze Welt anvertraut.<br>Über alle Geschöpfe sollte er herrschen<br>und allein dir, seinem Schöpfer, dienen.<br>Als er im Ungehorsam deine Freundschaft verlor<br>und der Macht des Todes verﬁ el,<br>hast du ihn dennoch nicht verlassen,<br>sondern voll Erbarmen allen geholfen,<br>dich zu suchen und zu ﬁ nden.<br>Immer wieder hast du den Menschen<br>deinen Bund angeboten<br>und sie durch die Propheten gelehrt,<br>das Heil zu erwarten.<br>So sehr hast du die Welt geliebt,<br>heiliger Vater,<br>dass du deinen eingeborenen Sohn<br>als Retter gesandt hast,<br>nachdem die Fülle der Zeiten gekommen war.<br>Er ist Mensch geworden<br>durch den Heiligen Geist,<br>geboren von der Jungfrau Maria.<br>Er hat wie wir als Mensch gelebt,<br>in allem uns gleich außer der Sünde.<br>Den Armen verkündete er<br>die Botschaft vom Heil,<br>den Gefangenen Freiheit,<br>den Trauernden Freude.<br><br>Um deinen Ratschluss zu erfüllen,<br>hat er sich dem Tod überliefert,<br>durch seine Auferstehung<br>den Tod bezwungen<br>und das Leben neu geschaffen.<br>Damit wir nicht mehr uns selber leben,<br>sondern ihm,<br>der für uns gestorben und auferstanden ist,<br>hat er von dir, Vater,<br>als erste Gabe für alle, die glauben,<br>den Heiligen Geist gesandt,<br>der das Werk deines Sohnes<br>auf Erden weiter führt<br>und alle Heiligung vollendet.<br>Bitte um Heiligung der Gaben<br>So bitten wir dich, Vater:<br>Der Geist heilige diese Gaben,<br>damit sie uns werden Leib <br>✠ und Blut<br>unseres Herrn Jesus Christus,<br>der uns die Feier dieses Geheimnisses<br>aufgetragen hat<br>als Zeichen des ewigen Bundes.<br>Da er die Seinen liebte,<br>die in der Welt waren,<br>liebte er sie bis zur Vollendung.<br>Und als die Stunde kam,<br>da er von dir verherrlicht werden sollte,<br>nahm er beim<br>Mahl das Brot und sagte Dank,<br>brach das Brot,<br>reichte es seinen Jüngern und sprach:<br><br>NEHMET UND ESSET ALLE DAVON:<br>DAS IST MEIN LEIB,<br>DER FÜR EUCH HINGEGEBEN WIRD.<br>Ebenso nahm er den Kelch mit Wein,<br>dankte wiederum,<br>reichte den Kelch seinen Jüngern und sprach:<br>NEHMET UND TRINKET ALLE DARAUS:<br>DAS IST DER KELCH<br>DES NEUEN UND EWIGEN BUNDES,<br>MEIN BLUT,<br>DAS FÜR EUCH<br>UND FÜR ALLE VERGOSSEN WIRD<br>ZUR VERGEBUNG DER SÜNDEN.<br>TUT DIES ZU MEINEM GEDÄCHTNIS.<br>P. (D.): Geheimnis des Glaubens:<br>A.: Deinen Tod, o Herr, verkünden wir,<br>und deine Auferstehung preisen wir,<br>bis du kommst in Herrlichkeit.<br>Gedächtnis – Darbringung – Bitte<br>(Hauptzelebrant)<br>Darum, gütiger Vater,<br>feiern wir das Gedächtnis unserer Erlösung.<br>Wir verkünden den Tod deines Sohnes<br>und sein Herabsteigen zu den Vätern,<br>bekennen seine Auferstehung<br>und Himmelfahrt<br>und erwarten sein Kommen in Herrlichkeit.<br>So bringen wir dir seinen Leib und sein Blut dar,<br>das Opfer, das dir wohl gefällt<br>und der ganzen Welt Heil bringt.<br><br>Sieh her auf die Opfergabe,<br>die du selber deiner Kirche bereitet hast,<br>und gib, dass alle, die Anteil erhalten<br>an dem einen Brot und dem einen Kelch,<br>ein Leib werden im Heiligen Geist,<br>eine lebendige Opfergabe in Christus<br>zum Lob deiner Herrlichkeit.<br>Für die Kirche und ihre Hirten, für die anwesende Gemeinde und für alle<br>(Konzelebrant)<br>Herr, gedenke aller, für deren Heil<br>wir das Opfer darbringen.<br>Wir bitten dich für unseren Papst <br>N.,<br>unseren Bischof N.<br>und die Gemeinschaft der Bischöfe,<br>für unsere Priester und Diakone<br>und für alle,<br>die zum Dienst in der Kirche bestellt sind,<br>für alle, die ihre Gaben spenden,<br>für die hier versammelte Gemeinde,<br>für dein ganzes Volk<br>und für alle Menschen,<br>die mit lauterem Herzen dich suchen.<br>Für die Verstorbenen<br>(Konzelebrant)<br>Wir empfehlen dir auch jene,<br>die im Frieden Christi heimgegangen sind,<br>und alle Verstorbenen,<br>um deren Glauben niemand weiß als du.<br>Gütiger Vater,<br>gedenke, dass wir deine Kinder sind,<br>und schenke uns allen das Erbe des Himmels<br>in Gemeinschaft mit der seligen Jungfrau<br>und Gottesmutter Maria,<br>mit deinen Aposteln und mit allen Heiligen.<br><br>Und wenn die ganze Schöpfung<br>von der Verderbnis der Sünde<br>und des Todes befreit ist,<br>lass uns zusammen mit ihr dich verherrlichen<br>in deinem Reich<br>durch unseren Herrn Jesus Christus.<br>Denn durch ihn<br>schenkst du der Welt alle guten Gaben.<br>Abschließender Lobpreis<br>(Hauptzelebrant und Konzelebranten)<br>Durch ihn und mit ihm und in ihm<br>ist dir, Gott, allmächtiger Vater,<br>in der Einheit des Heiligen Geistes<br>alle Herrlichkeit und Ehre<br>jetzt und in Ewigkeit.<br>A.: Amen.<br><br>Kommunion<br>GEBET DES HERRN<br>P.: Dem Wort unseres Herrn und Erlösers gehorsam<br>und getreu seiner göttlichen Weisung,<br>wagen wir zu sprechen:<br>Oder:<br>Lasset uns beten,<br>wie der Herr uns zu beten gelehrt hat.<br>Oder:<br>Wir heißen Kinder Gottes und sind es.<br>Darum beten wir voll Vertrauen:<br>Oder:<br>Wir haben den Geist empfangen,<br>der uns zu Kindern Gottes macht.<br>Darum wagen wir zu sprechen:<br>Oder eine andere geeignete Einladung. <br>Diese kann auch der Zeit des Kirchenjahres angepasst werden.<br>A.: Vater unser im Himmel,<br>geheiligt werde dein Name.<br>Dein Reich komme.<br>Dein Wille geschehe<br>wie im Himmel, so auf Erden.<br>Unser tägliches Brot gib uns heute<br>und vergib uns unsere Schuld,<br>wie auch wir vergeben unseren Schuldigern.<br>Und führe uns nicht in Versuchung,<br>sondern erlöse uns von dem Bösen.<br>P.: Erlöse uns,<br>Herr, allmächtiger Vater,<br>von allem Bösen<br>und gib Frieden in unseren Tagen.<br><br>Komm uns zu Hilfe mit deinem Erbarmen<br>und bewahre uns vor Verwirrung und Sünde,<br>damit wir voll Zuversicht<br>das Kommen unseres Erlösers Jesus Christus erwarten.<br>A.: Denn dein ist das Reich und die Kraft<br>und die Herrlichkeit in Ewigkeit. Amen.<br>FRIEDENSGEBET<br>P.: Der Herr hat zu seinen Aposteln gesagt:<br>Frieden hinterlasse ich euch,<br>meinen Frieden gebe ich euch.<br>Deshalb bitten wir:<br>Herr Jesus Christus, <br>schau nicht auf unsere Sünden,<br>sondern auf den Glauben deiner Kirche<br>und schenke ihr nach deinem Willen<br>Einheit und Frieden.<br>Gebetseinladung und Christusanrede können der Zeit des Kirchenjahres oder dem Anlass <br>angepasst werden. Etwa:<br>In der Weihnachtszeit<br>Als Christus geboren wurde,<br>verkündeten Engel den Frieden auf Erden.<br>Deshalb bitten wir:<br>Herr Jesus Christus, starker Gott, Friedensfürst, …<br>In der Fastenzeit<br>Christus ist unser Friede und unsere Versöhnung.<br>Deshalb bitten wir:<br>Herr Jesus Christus, …<br><br>In der Osterzeit<br>Am Ostertag trat Jesus in die Mitte seiner Jünger<br>und sprach den Friedensgruß.<br>Deshalb bitten wir:<br>Herr Jesus Christus,<br>du Sieger über Sünde und Tod, …<br>P.: Der Friede des Herrn sei allezeit mit euch.<br>A.: Und mit deinem Geiste.<br>(D. oder P.: Gebt einander ein Zeichen<br>des Friedens und der Versöhnung.)<br>BRECHUNG DES BROTES UND AGNUS DEI<br>Der Priester bricht die Hostie in mehrere Teile. <br>Ein kleines Fragment der Hostie senkt er in den Kelch. Dabei spricht er leise:<br>Das Sakrament des Leibes und Blutes Christi<br>schenke uns ewiges Leben.<br>Inzwischen wird der Gesang zur Brotbrechung gesungen:<br>Lamm Gottes,<br>du nimmst hinweg die Sünde der Welt:<br>erbarme dich unser.<br>Lamm Gottes,<br>du nimmst hinweg die Sünde der Welt:<br>erbarme dich unser.<br>Lamm Gottes,<br>du nimmst hinweg die Sünde der Welt:<br>gib uns deinen Frieden.<br><br>STILLES GEBET VOR DER KOMMUNION<br>P.: Herr Jesus Christus, Sohn des lebendigen Gottes,<br>dem Willen des Vaters gehorsam,<br>hast du im Heiligen Geist durch deinen Tod<br>der Welt das Leben geschenkt.<br>Erlöse mich durch deinen Leib und dein Blut<br>von allen Sünden und allem Bösen.<br>Hilf mir, dass ich deine Gebote treu erfülle,<br>und lass nicht zu,<br>dass ich jemals von dir getrennt werde.<br>Oder:<br>Herr Jesus Christus,<br>der Empfang deines Leibes und Blutes<br>bringe mir nicht Gericht und Verdammnis,<br>sondern Segen und Heil.<br>EINLADUNG ZUR KOMMUNION<br>P.: Seht das Lamm Gottes,<br>das hinweg nimmt die Sünde der Welt.<br>A.: Herr, ich bin nicht würdig,<br>dass du eingehst unter mein Dach,<br>aber sprich nur ein Wort,<br>so wird meine Seele gesund.<br>P.: Selig, die zum Hochzeitsmahl des Lammes geladen sind.<br>Oder:<br>Kostet und seht, wie gut der Herr ist.<br>Oder:<br>Wer von diesem Brot isst, wird in Ewigkeit leben.<br>Oder ein Kommunionvers aus dem Messbuch, vor allem der der Tagesmesse.<br><br>KOMMUNIONSPENDUNG<br>PURIFIKATION<br>P. (D. oder A.)<br>Was wir mit dem Munde empfangen haben, Herr,<br>dass lass uns mit reinem Herzen aufnehmen,<br>und diese zeitliche Speise<br>werde uns zur Arznei der Unsterblichkeit.<br>SCHLUSSGEBET<br>P.: Lasset uns beten.<br>Der Priester singt oder spricht das Schlussgebet.<br>A.: Amen.<br><br>Entlassung<br>SEGEN<br>P.: Der Herr sei mit euch.<br>A.: Und mit deinem Geiste.<br>P.: Es segne euch der allmächtige Gott,<br>der Vater und der Sohn ✠ und der Heilige Geist.<br>A.: Amen.<br>ENTLASSUNG<br>D. (P.): Gehet hin in Frieden.<br>A.: Dank sei Gott, dem Herrn." });
  const dailyUrl = iso => `https://schott.erzabtei-beuron.de/?datum=${iso}`;
  global.countryMassData.DE = Object.freeze({
    schemaVersion: 2, jurisdiction: 'DE', jurisdictions: Object.freeze(['DE']),
    jurisdictionName: 'Deutschland', conferenceCalendar: 'Deutsche Bischofskonferenz',
    ordinaryLanguage: 'DE', ordinary, ordinaryStructure: 'paragraph-rubric-choices-v1', officialOrderCorpus,
    ordinaryEdition: 'Messbuch für die Bistümer des deutschen Sprachgebietes', ordinarySource, beta: true,
    dailyReadings: Object.freeze({ provider: 'SCHOTT / Erzabtei Beuron', calendar: 'Deutschland', translation: 'Revidierte Einheitsübersetzung', parser: 'strict-german-schott-daily-mass', url: dailyUrl }),
    dailyPropers: Object.freeze({ provider: 'SCHOTT / Erzabtei Beuron', parser: 'strict-german-schott-daily-mass', url: dailyUrl, weekdayFallback: 'previous-sunday-formulary' }),
    properSources: Object.freeze({ germanMissal: ordinarySource, dailyMass: 'https://schott.erzabtei-beuron.de/' }),
    calendar: Object.freeze({})
  });
})(globalThis);
