// Spain · Conferencia Episcopal Española. Ordinary and temporal Mass formularies.
(function registerSpainMass(global) {
  'use strict';
  global.countryMassData = global.countryMassData || {};
  const ordinary = Object.freeze([
  {
    "id": "1. THE INTRODUCTORY RITES",
    "type": "section",
    "es": "Ritos iniciales"
  },
  {
    "id": "1.1 entrance",
    "type": "part",
    "header": {
      "es": "Antífona de entrada"
    },
    "lines": [
      {
        "sp_es": "",
        "text_es": "(Antífona de entrada del día)"
      }
    ]
  },
  {
    "id": "1.2 greeting",
    "type": "selectable",
    "header": {
      "es": "Saludo"
    },
    "variants": {
      "A": {
        "label": {
          "es": "Fórmula 1"
        },
        "lines": [
          {
            "rubric_es": "1. Reunido el pueblo, el sacerdote con los ministros va al altar mientras se entona el canto"
          },
          {
            "rubric_es": "de entrada."
          },
          {
            "rubric_es": "Cuando llega al altar, el sacerdote con los ministros hace la debida reverencia, besa el"
          },
          {
            "rubric_es": "altar y, si se juzga oportuno, lo inciensa. Después se dirige con los ministros a la sede."
          },
          {
            "rubric_es": "Terminado el canto de entrada, el sacerdote y los fieles, de pie, se santiguan mientras"
          },
          {
            "rubric_es": "el sacerdote, de cara al pueblo, dice:"
          },
          {
            "sp_es": "",
            "text_es": "En el nombre del Padre, y del Hijo, y del Espíritu Santo."
          },
          {
            "rubric_es": "El pueblo responde:"
          },
          {
            "sp_es": "",
            "text_es": "Amén."
          },
          {
            "rubric_es": "2. El sacerdote, extendiendo las manos, saluda al pueblo con una de las fórmulas"
          },
          {
            "rubric_es": "siguientes:"
          },
          {
            "sp_es": "",
            "text_es": "El Señor esté con vosotros."
          }
        ]
      },
      "B": {
        "label": {
          "es": "Fórmula 2"
        },
        "lines": [
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "La gracia de nuestro Señor Jesucristo, el amor del Padre y la"
          },
          {
            "sp_es": "",
            "text_es": "comunión del Espíritu Santo esté con todos vosotros."
          }
        ]
      },
      "C": {
        "label": {
          "es": "Fórmula 3"
        },
        "lines": [
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "La gracia y la paz de Dios, nuestro Padre, y de Jesucristo, el Señor,"
          },
          {
            "sp_es": "",
            "text_es": "esté con todos vosotros."
          },
          {
            "rubric_es": "El pueblo responde:"
          },
          {
            "sp_es": "",
            "text_es": "Y con tu espíritu."
          },
          {
            "rubric_es": "También pueden usarse las fórmulas de saludo propias de cada tiempo."
          },
          {
            "rubric_es": "El obispo, en vez de las anteriores fórmulas, en este primer saludo dice:"
          },
          {
            "sp_es": "",
            "text_es": "La paz esté con vosotros."
          },
          {
            "rubric_es": "3. El sacerdote, o el diácono, u otro ministro puede hacer una monición muy breve para"
          },
          {
            "rubric_es": "introducir la Misa del día"
          }
        ]
      }
    }
  },
  {
    "id": "1.3 penitential",
    "type": "selectable",
    "header": {
      "es": "Acto penitencial"
    },
    "variants": {
      "A": {
        "label": {
          "es": "Primera fórmula"
        },
        "lines": [
          {
            "rubric_es": "4. A continuación se hace el acto penitencial, y el sacerdote invita a los fieles al"
          },
          {
            "rubric_es": "arrepentimiento diciendo:"
          },
          {
            "sp_es": "",
            "text_es": "Hermanos: para celebrar dignamente estos sagrados misterios"
          },
          {
            "sp_es": "",
            "text_es": "reconozcamos nuestros pecados."
          },
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "El Señor Jesús,"
          },
          {
            "sp_es": "",
            "text_es": "que nos invita a la mesa de la Palabra y de la Eucaristía,"
          },
          {
            "sp_es": "",
            "text_es": "nos llama ahora a la conversión."
          },
          {
            "sp_es": "",
            "text_es": "Reconozcamos, pues, que somos pecadores"
          },
          {
            "sp_es": "",
            "text_es": "e invoquemos con esperanza la misericordia de Dios."
          },
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "Al comenzar esta celebración eucarística,"
          },
          {
            "sp_es": "",
            "text_es": "pidamos a Dios que nos conceda"
          },
          {
            "sp_es": "",
            "text_es": "la conversión de nuestros corazones;"
          },
          {
            "sp_es": "",
            "text_es": "así obtendremos la reconciliación"
          },
          {
            "sp_es": "",
            "text_es": "y se acrecentará nuestra comunión"
          },
          {
            "sp_es": "",
            "text_es": "con Dios y con nuestros hermanos."
          },
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "Humildes y penitentes, como el publicano en el templo,"
          },
          {
            "sp_es": "",
            "text_es": "acerquémonos al Dios justo,"
          },
          {
            "sp_es": "",
            "text_es": "y pidámosle que tenga piedad de nosotros,"
          },
          {
            "sp_es": "",
            "text_es": "que también nos reconocemos pecadores."
          },
          {
            "rubric_es": "Fórmula I"
          },
          {
            "rubric_es": "Se hace una breve pausa en silencio. Después, hacen todos en común la confesión de"
          },
          {
            "rubric_es": "sus pecados:"
          },
          {
            "sp_es": "",
            "text_es": "Yo confieso ante Dios todopoderoso"
          },
          {
            "sp_es": "",
            "text_es": "y ante vosotros, hermanos,"
          },
          {
            "sp_es": "",
            "text_es": "que he pecado mucho"
          },
          {
            "sp_es": "",
            "text_es": "de pensamiento, palabra, obra y omisión:"
          },
          {
            "rubric_es": "Golpeándose el pecho, dicen:"
          },
          {
            "sp_es": "",
            "text_es": "por mi culpa, por mi culpa, por mi gran culpa."
          },
          {
            "rubric_es": "Luego prosiguen:"
          },
          {
            "sp_es": "",
            "text_es": "Por eso ruego a santa María, siempre Virgen,"
          },
          {
            "sp_es": "",
            "text_es": "a los ángeles, a los santos"
          },
          {
            "sp_es": "",
            "text_es": "y a vosotros, hermanos,"
          },
          {
            "sp_es": "",
            "text_es": "que intercedan por mí ante Dios, nuestro Señor."
          },
          {
            "rubric_es": "El sacerdote concluye con la siguiente plegaria:"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso tenga misericordia de nosotros, perdone"
          },
          {
            "sp_es": "",
            "text_es": "nuestros pecados y nos lleve a la vida eterna."
          },
          {
            "rubric_es": "El pueblo responde:"
          },
          {
            "sp_es": "",
            "text_es": "Amén."
          }
        ]
      },
      "B": {
        "label": {
          "es": "Segunda fórmula"
        },
        "lines": [
          {
            "rubric_es": "4. A continuación se hace el acto penitencial, y el sacerdote invita a los fieles al"
          },
          {
            "rubric_es": "arrepentimiento diciendo:"
          },
          {
            "sp_es": "",
            "text_es": "Hermanos: para celebrar dignamente estos sagrados misterios"
          },
          {
            "sp_es": "",
            "text_es": "reconozcamos nuestros pecados."
          },
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "El Señor Jesús,"
          },
          {
            "sp_es": "",
            "text_es": "que nos invita a la mesa de la Palabra y de la Eucaristía,"
          },
          {
            "sp_es": "",
            "text_es": "nos llama ahora a la conversión."
          },
          {
            "sp_es": "",
            "text_es": "Reconozcamos, pues, que somos pecadores"
          },
          {
            "sp_es": "",
            "text_es": "e invoquemos con esperanza la misericordia de Dios."
          },
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "Al comenzar esta celebración eucarística,"
          },
          {
            "sp_es": "",
            "text_es": "pidamos a Dios que nos conceda"
          },
          {
            "sp_es": "",
            "text_es": "la conversión de nuestros corazones;"
          },
          {
            "sp_es": "",
            "text_es": "así obtendremos la reconciliación"
          },
          {
            "sp_es": "",
            "text_es": "y se acrecentará nuestra comunión"
          },
          {
            "sp_es": "",
            "text_es": "con Dios y con nuestros hermanos."
          },
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "Humildes y penitentes, como el publicano en el templo,"
          },
          {
            "sp_es": "",
            "text_es": "acerquémonos al Dios justo,"
          },
          {
            "sp_es": "",
            "text_es": "y pidámosle que tenga piedad de nosotros,"
          },
          {
            "sp_es": "",
            "text_es": "que también nos reconocemos pecadores."
          },
          {
            "rubric_es": "Fórmula II"
          },
          {
            "rubric_es": "5. Se hace una breve pausa en silencio."
          },
          {
            "rubric_es": "Después el sacerdote dice:"
          },
          {
            "sp_es": "",
            "text_es": "Señor, ten misericordia de nosotros."
          },
          {
            "rubric_es": "El pueblo responde:"
          },
          {
            "sp_es": "",
            "text_es": "Porque hemos pecado contra ti."
          },
          {
            "rubric_es": "El sacerdote prosigue:"
          },
          {
            "sp_es": "",
            "text_es": "Muéstranos, Señor, tu misericordia."
          },
          {
            "rubric_es": "El pueblo responde:"
          },
          {
            "sp_es": "",
            "text_es": "Y danos tu salvación."
          },
          {
            "rubric_es": "El sacerdote concluye con la siguiente plegaria:"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso tenga misericordia de nosotros, perdone"
          },
          {
            "sp_es": "",
            "text_es": "nuestros pecados y nos lleve a la vida eterna."
          },
          {
            "rubric_es": "El pueblo responde:"
          },
          {
            "sp_es": "",
            "text_es": "Amén."
          }
        ]
      },
      "C": {
        "label": {
          "es": "Tercera fórmula"
        },
        "lines": [
          {
            "rubric_es": "4. A continuación se hace el acto penitencial, y el sacerdote invita a los fieles al"
          },
          {
            "rubric_es": "arrepentimiento diciendo:"
          },
          {
            "sp_es": "",
            "text_es": "Hermanos: para celebrar dignamente estos sagrados misterios"
          },
          {
            "sp_es": "",
            "text_es": "reconozcamos nuestros pecados."
          },
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "El Señor Jesús,"
          },
          {
            "sp_es": "",
            "text_es": "que nos invita a la mesa de la Palabra y de la Eucaristía,"
          },
          {
            "sp_es": "",
            "text_es": "nos llama ahora a la conversión."
          },
          {
            "sp_es": "",
            "text_es": "Reconozcamos, pues, que somos pecadores"
          },
          {
            "sp_es": "",
            "text_es": "e invoquemos con esperanza la misericordia de Dios."
          },
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "Al comenzar esta celebración eucarística,"
          },
          {
            "sp_es": "",
            "text_es": "pidamos a Dios que nos conceda"
          },
          {
            "sp_es": "",
            "text_es": "la conversión de nuestros corazones;"
          },
          {
            "sp_es": "",
            "text_es": "así obtendremos la reconciliación"
          },
          {
            "sp_es": "",
            "text_es": "y se acrecentará nuestra comunión"
          },
          {
            "sp_es": "",
            "text_es": "con Dios y con nuestros hermanos."
          },
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "Humildes y penitentes, como el publicano en el templo,"
          },
          {
            "sp_es": "",
            "text_es": "acerquémonos al Dios justo,"
          },
          {
            "sp_es": "",
            "text_es": "y pidámosle que tenga piedad de nosotros,"
          },
          {
            "sp_es": "",
            "text_es": "que también nos reconocemos pecadores."
          },
          {
            "rubric_es": "Fórmula III"
          },
          {
            "rubric_es": "6. Se hace una breve pausa en silencio."
          },
          {
            "rubric_es": "Después el sacerdote dice:"
          },
          {
            "sp_es": "",
            "text_es": "Tú que has sido enviado a sanar los corazones afligidos: Señor, ten"
          },
          {
            "sp_es": "",
            "text_es": "piedad. Kyrie, eléison"
          },
          {
            "rubric_es": "(O bien: )."
          },
          {
            "rubric_es": "El pueblo responde:"
          },
          {
            "sp_es": "",
            "text_es": "Señor, ten piedad. Kyrie, eléison"
          },
          {
            "rubric_es": "(O bien: )."
          },
          {
            "rubric_es": "El sacerdote prosigue:"
          },
          {
            "sp_es": "",
            "text_es": "Tú que has venido a llamar a los pecadores: Cristo ten piedad."
          },
          {
            "rubric_es": "(O"
          },
          {
            "sp_es": "",
            "text_es": "Christe, eléison"
          },
          {
            "rubric_es": "bien: )."
          },
          {
            "rubric_es": "El pueblo responde:"
          },
          {
            "sp_es": "",
            "text_es": "Cristo ten piedad. Christe, eléison"
          },
          {
            "rubric_es": "(O bien: )."
          },
          {
            "rubric_es": "El sacerdote prosigue:"
          },
          {
            "sp_es": "",
            "text_es": "Tú que estás sentado a la derecha del Padre para interceder por"
          },
          {
            "sp_es": "",
            "text_es": "nosotros: Señor, ten piedad. Kyrie, eléison"
          },
          {
            "rubric_es": "(O bien: )."
          },
          {
            "rubric_es": "El pueblo responde:"
          },
          {
            "sp_es": "",
            "text_es": "Señor, ten piedad. Kyrie, eléison"
          },
          {
            "rubric_es": "(O bien: )."
          },
          {
            "rubric_es": "El sacerdote concluye con la siguiente plegaria:"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso tenga misericordia de nosotros, perdone"
          },
          {
            "sp_es": "",
            "text_es": "nuestros pecados y nos lleve a la vida eterna."
          },
          {
            "rubric_es": "El pueblo responde:"
          },
          {
            "sp_es": "",
            "text_es": "Amén."
          }
        ]
      }
    }
  },
  {
    "id": "1.4 kyrie",
    "type": "part",
    "header": {
      "es": "Señor, ten piedad"
    },
    "lines": [
      {
        "rubric_es": "7. Siguen las invocaciones Señor, ten piedad, a no ser que ya se hayan utilizado en alguna"
      },
      {
        "rubric_es": "de las fórmulas del acto penitencial."
      },
      {
        "sp_es": "",
        "text_es": "Señor, ten piedad."
      },
      {
        "sp_es": "V/.",
        "text_es": "Señor, ten piedad."
      },
      {
        "sp_es": "R/.",
        "text_es": "Cristo, ten piedad."
      },
      {
        "sp_es": "V/.",
        "text_es": "Cristo, ten piedad."
      },
      {
        "sp_es": "R/.",
        "text_es": "Señor, ten piedad."
      },
      {
        "sp_es": "V/.",
        "text_es": "Señor, ten piedad."
      }
    ]
  },
  {
    "id": "1.5 gloria",
    "type": "part",
    "header": {
      "es": "Gloria"
    },
    "lines": [
      {
        "rubric_es": "7. A continuación, si está prescrito, se canta el himno:"
      },
      {
        "sp_es": "R/.",
        "text_es": "Gloria a Dios en el cielo,"
      },
      {
        "sp_es": "",
        "text_es": "y en la tierra paz a los hombres"
      },
      {
        "sp_es": "",
        "text_es": "que ama el Señor."
      },
      {
        "sp_es": "",
        "text_es": "Por tu inmensa gloria"
      },
      {
        "sp_es": "",
        "text_es": "te alabamos,"
      },
      {
        "sp_es": "",
        "text_es": "te bendecimos,"
      },
      {
        "sp_es": "",
        "text_es": "te adoramos,"
      },
      {
        "sp_es": "",
        "text_es": "te glorificamos,"
      },
      {
        "sp_es": "",
        "text_es": "te damos gracias,"
      },
      {
        "sp_es": "",
        "text_es": "Señor Dios, Rey celestial,"
      },
      {
        "sp_es": "",
        "text_es": "Dios Padre todopoderoso."
      },
      {
        "sp_es": "",
        "text_es": "Señor, Hijo único, Jesucristo."
      },
      {
        "sp_es": "",
        "text_es": "Señor Dios, Cordero de Dios, Hijo del Padre;"
      },
      {
        "sp_es": "",
        "text_es": "tú que quitas el pecado del mundo, ten piedad de nosotros;"
      },
      {
        "sp_es": "",
        "text_es": "tú que quitas el pecado del mundo, atiende nuestra súplica;"
      },
      {
        "sp_es": "",
        "text_es": "tú que estás sentado a la derecha del Padre, ten piedad de"
      },
      {
        "sp_es": "",
        "text_es": "nosotros;"
      },
      {
        "sp_es": "",
        "text_es": "porque sólo tú eres Santo,"
      },
      {
        "sp_es": "",
        "text_es": "sólo tú Señor,"
      },
      {
        "sp_es": "",
        "text_es": "sólo tú Altísimo, Jesucristo,"
      },
      {
        "sp_es": "",
        "text_es": "con el Espíritu Santo, en la Gloria de Dios Padre."
      },
      {
        "sp_es": "",
        "text_es": "Amén."
      }
    ],
    "if": "sunday"
  },
  {
    "id": "1.6 collect",
    "type": "part",
    "header": {
      "es": "Oración colecta"
    },
    "lines": [
      {
        "rubric_es": "9. Acabado el himno, el sacerdote, con las manos juntas, dice:"
      },
      {
        "sp_es": "",
        "text_es": "Oremos."
      },
      {
        "sp_es": "",
        "text_es": "(Oración colecta del día)"
      },
      {
        "sp_es": "R/.",
        "text_es": "Amén."
      }
    ]
  },
  {
    "id": "2. THE LITURGY OF THE WORD",
    "type": "section",
    "es": "Liturgia de la Palabra"
  },
  {
    "id": "2.1 reading1",
    "type": "part",
    "header": {
      "es": "Primera lectura"
    },
    "lines": [
      {
        "sp_es": "",
        "text_es": "(Primera lectura del día)"
      }
    ]
  },
  {
    "id": "2.2 psalm",
    "type": "part",
    "header": {
      "es": "Salmo responsorial"
    },
    "lines": [
      {
        "sp_es": "",
        "text_es": "(Salmo responsorial del día)"
      }
    ]
  },
  {
    "id": "2.3 reading2",
    "type": "part",
    "header": {
      "es": "Segunda lectura"
    },
    "lines": [
      {
        "sp_es": "",
        "text_es": "(Segunda lectura del día)"
      }
    ],
    "if": "sunday"
  },
  {
    "id": "2.4 Sequence",
    "type": "part",
    "header": {
      "es": "Secuencia"
    },
    "lines": [
      {
        "sp_es": "",
        "text_es": "(Secuencia del día)"
      }
    ],
    "if": "easter_or_pentecost"
  },
  {
    "id": "2.5 gospel_accl",
    "type": "part",
    "header": {
      "es": "Aclamación antes del Evangelio"
    },
    "lines": [
      {
        "sp_es": "",
        "text_es": "(Aclamación antes del Evangelio del día)"
      }
    ]
  },
  {
    "id": "2.6 gospel",
    "type": "part",
    "header": {
      "es": "Evangelio"
    },
    "lines": [
      {
        "sp_es": "",
        "text_es": "(Evangelio del día)"
      }
    ]
  },
  {
    "id": "2.7 homily",
    "type": "part",
    "header": {
      "es": "Homilía"
    },
    "lines": [
      {
        "rubric_es": "17. Luego tiene lugar la homilía; ésta es obligatoria todos los domingos y fiestas de"
      },
      {
        "rubric_es": "precepto y se recomienda en los restantes días."
      }
    ]
  },
  {
    "id": "2.8 creed",
    "type": "selectable",
    "header": {
      "es": "Profesión de fe"
    },
    "if": "sunday",
    "variants": {
      "A": {
        "label": {
          "es": "Símbolo niceno-constantinopolitano"
        },
        "lines": [
          {
            "sp_es": "",
            "text_es": "Creo en un solo Dios,"
          },
          {
            "sp_es": "",
            "text_es": "Padre Todopoderoso, Creador del cielo y de la tierra."
          },
          {
            "sp_es": "",
            "text_es": "de todo lo visible y lo invisible."
          },
          {
            "sp_es": "",
            "text_es": "Creo en un solo Señor, Jesucristo, Hijo único de Dios,"
          },
          {
            "sp_es": "",
            "text_es": "nacido del Padre antes de todos los siglos:"
          },
          {
            "sp_es": "",
            "text_es": "Dios de Dios, Luz de Luz,"
          },
          {
            "sp_es": "",
            "text_es": "Dios verdadero de Dios verdadero,"
          },
          {
            "sp_es": "",
            "text_es": "engendrado, no creado,"
          },
          {
            "sp_es": "",
            "text_es": "de la misma naturaleza del Padre,"
          },
          {
            "sp_es": "",
            "text_es": "por quien todo fue hecho;"
          },
          {
            "sp_es": "",
            "text_es": "que por nosotros, los hombres,"
          },
          {
            "sp_es": "",
            "text_es": "y por nuestra salvación bajó del cielo,"
          },
          {
            "rubric_es": "En las palabras que siguen, hasta se hizo hombre, todos se inclinan."
          },
          {
            "sp_es": "",
            "text_es": "y por obra del Espíritu Santo"
          },
          {
            "sp_es": "",
            "text_es": "se encarnó de María, la Virgen,"
          },
          {
            "sp_es": "",
            "text_es": "y se hizo hombre;"
          },
          {
            "sp_es": "",
            "text_es": "y por nuestra causa fue crucificado"
          },
          {
            "sp_es": "",
            "text_es": "en tiempos de Poncio Pilato;"
          },
          {
            "sp_es": "",
            "text_es": "padeció y fue sepultado,"
          },
          {
            "sp_es": "",
            "text_es": "y resucitó al tercer día, según las Escrituras,"
          },
          {
            "sp_es": "",
            "text_es": "y subió al cielo, y está sentado a la derecha del Padre;"
          },
          {
            "sp_es": "",
            "text_es": "y de nuevo vendrá con gloria"
          },
          {
            "sp_es": "",
            "text_es": "para juzgar a vivos y muertos,"
          },
          {
            "sp_es": "",
            "text_es": "y su reino no tendrá fin."
          },
          {
            "sp_es": "",
            "text_es": "Creo en el Espíritu Santo, Señor y dador de vida,"
          },
          {
            "sp_es": "",
            "text_es": "que procede del Padre y del Hijo,"
          },
          {
            "sp_es": "",
            "text_es": "que con el Padre y el Hijo"
          },
          {
            "sp_es": "",
            "text_es": "recibe una misma adoración y gloria,"
          },
          {
            "sp_es": "",
            "text_es": "y que habló por los profetas."
          },
          {
            "sp_es": "",
            "text_es": "Creo en la Iglesia,"
          },
          {
            "sp_es": "",
            "text_es": "que es una, santa, católica y apostólica."
          },
          {
            "sp_es": "",
            "text_es": "Confieso que hay un solo Bautismo"
          },
          {
            "sp_es": "",
            "text_es": "para el perdón de los pecados."
          },
          {
            "sp_es": "",
            "text_es": "Espero la resurrección de los muertos"
          },
          {
            "sp_es": "",
            "text_es": "y la vida del mundo futuro."
          },
          {
            "sp_es": "",
            "text_es": "Amén."
          }
        ]
      },
      "B": {
        "label": {
          "es": "Símbolo de los Apóstoles"
        },
        "lines": [
          {
            "rubric_es": "19. Para utilidad de los fieles, en lugar del símbolo niceno-constantinopolitano, la"
          },
          {
            "rubric_es": "profesión de fe se puede hacer, especialmente en el tiempo de Cuaresma y en la"
          },
          {
            "rubric_es": "Cincuentena pascual, con el siguiente símbolo llamado «de los apóstoles»:"
          },
          {
            "sp_es": "",
            "text_es": "Creo en Dios, Padre todopoderoso,"
          },
          {
            "sp_es": "",
            "text_es": "Creador del cielo y de la tierra."
          },
          {
            "sp_es": "",
            "text_es": "Creo en Jesucristo, su único Hijo, nuestro Señor,"
          },
          {
            "rubric_es": "En las palabras que siguen, hasta María Virgen, todos se inclinan."
          },
          {
            "sp_es": "",
            "text_es": "que fue concebido por obra y gracia del Espíritu Santo,"
          },
          {
            "sp_es": "",
            "text_es": "nació de santa María Virgen,"
          },
          {
            "sp_es": "",
            "text_es": "padeció bajo el poder de Poncio Pilato,"
          },
          {
            "sp_es": "",
            "text_es": "fue crucificado, muerto y sepultado,"
          },
          {
            "sp_es": "",
            "text_es": "descendió a los infiernos,"
          },
          {
            "sp_es": "",
            "text_es": "al tercer día resucitó de entre los muertos,"
          },
          {
            "sp_es": "",
            "text_es": "subió a los cielos y está sentado a la derecha de Dios,"
          },
          {
            "sp_es": "",
            "text_es": "Padre todopoderoso."
          },
          {
            "sp_es": "",
            "text_es": "Desde allí ha de venir a juzgar a vivos y muertos."
          },
          {
            "sp_es": "",
            "text_es": "Creo en el Espíritu Santo,"
          },
          {
            "sp_es": "",
            "text_es": "la santa Iglesia católica,"
          },
          {
            "sp_es": "",
            "text_es": "la comunión de los santos,"
          },
          {
            "sp_es": "",
            "text_es": "el perdón de los pecados,"
          },
          {
            "sp_es": "",
            "text_es": "la resurrección de la carne"
          },
          {
            "sp_es": "",
            "text_es": "y la vida eterna."
          },
          {
            "sp_es": "",
            "text_es": "Amén."
          }
        ]
      }
    }
  },
  {
    "id": "2.9 universal",
    "type": "part",
    "header": {
      "es": "Oración universal"
    },
    "lines": [
      {
        "rubric_es": "20. Después se hace la plegaria universal u oración de los fieles."
      }
    ],
    "if": "sunday"
  },
  {
    "id": "3. THE LITURGY OF THE EUCHARIST",
    "type": "section",
    "es": "Liturgia eucarística"
  },
  {
    "id": "3.1 offertory",
    "type": "part",
    "header": {
      "es": "Preparación de los dones"
    },
    "lines": [
      {
        "rubric_es": "21. Acabada la Liturgia de la palabra, los ministros colocan en el altar el corporal, el"
      },
      {
        "rubric_es": "purificador, el cáliz y el misal; mientras tanto puede ejecutarse un canto adecuado."
      },
      {
        "rubric_es": "22. Conviene que los fieles expresan su participación en la ofrenda, bien sea llevando el"
      },
      {
        "rubric_es": "pan y el vino para la celebración de la eucaristía, bien aportando otros dones para las"
      },
      {
        "rubric_es": "necesidades de la Iglesia o de los pobres."
      },
      {
        "rubric_es": "23. El sacerdote se acerca al altar, toma la patena con el pan y, manteniéndola un poco"
      },
      {
        "rubric_es": "elevada sobre el altar, dice en secreto:"
      },
      {
        "sp_es": "",
        "text_es": "Bendito seas, Señor, Dios del universo,"
      },
      {
        "sp_es": "",
        "text_es": "por este pan,"
      },
      {
        "sp_es": "",
        "text_es": "fruto de la tierra y del trabajo del hombre,"
      },
      {
        "sp_es": "",
        "text_es": "que recibimos de tu generosidad y ahora te presentamos;"
      },
      {
        "sp_es": "",
        "text_es": "él será para nosotros pan de vida."
      },
      {
        "rubric_es": "Después deja la patena con el pan sobre el corporal."
      },
      {
        "rubric_es": "Si no se canta durante la presentación de las ofrendas, el sacerdote puede decir en"
      },
      {
        "rubric_es": "voz alta estas palabras; al final el pueblo aclama:"
      },
      {
        "sp_es": "",
        "text_es": "Bendito seas por siempre, Señor."
      },
      {
        "rubric_es": "24. El diácono, o el sacerdote, echa vino y un poco de agua en el cáliz, diciendo en"
      },
      {
        "rubric_es": "secreto:"
      },
      {
        "sp_es": "",
        "text_es": "El agua unido al vino"
      },
      {
        "sp_es": "",
        "text_es": "sea signo de nuestra participación en la vida divina"
      },
      {
        "sp_es": "",
        "text_es": "de quien ha querido compartir nuestra condición humana."
      },
      {
        "rubric_es": "25. Después el sacerdote toma el cáliz y, manteniéndolo un poco elevado sobre el altar,"
      },
      {
        "rubric_es": "dice en secreto:"
      },
      {
        "sp_es": "",
        "text_es": "Bendito seas, Señor, Dios del universo,"
      },
      {
        "sp_es": "",
        "text_es": "por este vino,"
      },
      {
        "sp_es": "",
        "text_es": "fruto de la vid y del trabajo del hombre,"
      },
      {
        "sp_es": "",
        "text_es": "que recibimos de tu generosidad y ahora te presentamos;"
      },
      {
        "sp_es": "",
        "text_es": "él será para nosotros bebida de salvación."
      },
      {
        "rubric_es": "Después deja el cáliz sobre el corporal."
      },
      {
        "rubric_es": "Si no se canta durante la presentación de las ofrendas, el sacerdote puede decir en"
      },
      {
        "rubric_es": "voz alta estas palabras; al final el pueblo puede aclamar:"
      },
      {
        "sp_es": "",
        "text_es": "Bendito seas por siempre, Señor."
      },
      {
        "rubric_es": "26. A continuación, el sacerdote, inclinado, dice en secreto:"
      },
      {
        "sp_es": "",
        "text_es": "Acepta Señor, nuestro corazón contrito"
      },
      {
        "sp_es": "",
        "text_es": "y nuestro espíritu humilde;"
      },
      {
        "sp_es": "",
        "text_es": "que éste sea hoy nuestro sacrificio"
      },
      {
        "sp_es": "",
        "text_es": "y que sea agradable en tu presencia,"
      },
      {
        "sp_es": "",
        "text_es": "Señor, Dios nuestro."
      },
      {
        "rubric_es": "27. Y, si se juzga oportuno, inciensa las ofrendas y el altar. A continuación el diácono o un"
      },
      {
        "rubric_es": "ministro inciensa al sacerdote y al pueblo."
      },
      {
        "rubric_es": "28. Luego el sacerdote, de pie a un lado del altar, se lava las manos, diciendo en secreto:"
      },
      {
        "sp_es": "",
        "text_es": "Lava del todo mi delito, Señor, limpia mi pecado."
      },
      {
        "rubric_es": "29. Después, de pie en el centro del altar y de cara al pueblo, extendiendo y juntando las"
      },
      {
        "rubric_es": "manos, dice una de las siguientes fórmulas:"
      },
      {
        "sp_es": "",
        "text_es": "Orad, hermanos,"
      },
      {
        "sp_es": "",
        "text_es": "para que este sacrificio, mío y de y vuestro,"
      },
      {
        "sp_es": "",
        "text_es": "sea agradable a Dios, Padre todopoderoso."
      },
      {
        "rubric_es": "O bien:"
      },
      {
        "sp_es": "",
        "text_es": "En el momento de ofrecer"
      },
      {
        "sp_es": "",
        "text_es": "el sacrificio de toda la Iglesia,"
      },
      {
        "sp_es": "",
        "text_es": "oremos a Dios, Padre todopoderoso."
      },
      {
        "rubric_es": "O bien:"
      },
      {
        "sp_es": "",
        "text_es": "Orad, hermanos,"
      },
      {
        "sp_es": "",
        "text_es": "para que, llevando al altar"
      },
      {
        "sp_es": "",
        "text_es": "los gozos y las fatigas de cada día"
      },
      {
        "sp_es": "",
        "text_es": "nos dispongamos a ofrecer el sacrificio"
      },
      {
        "sp_es": "",
        "text_es": "agradable a Dios, Padre todopoderoso."
      },
      {
        "rubric_es": "El pueblo responde:"
      },
      {
        "sp_es": "",
        "text_es": "El Señor reciba de tus manos este sacrificio,"
      },
      {
        "sp_es": "",
        "text_es": "para alabanza y gloria de su nombre,"
      },
      {
        "sp_es": "",
        "text_es": "para nuestro bien"
      },
      {
        "sp_es": "",
        "text_es": "y el de toda su santa Iglesia."
      }
    ]
  },
  {
    "id": "3.2 prayer_offerings",
    "type": "part",
    "header": {
      "es": "Oración sobre las ofrendas"
    },
    "lines": [
      {
        "sp_es": "",
        "text_es": "(Oración sobre las ofrendas del día)"
      },
      {
        "sp_es": "R/.",
        "text_es": "Amén."
      }
    ]
  },
  {
    "id": "3.3 eucharist",
    "type": "selectable",
    "isEucharist": true,
    "ordinarySourceLayoutVersion": 1,
    "header": {
      "es": "Plegaria eucarística"
    },
    "variants": {
      "1": {
        "label": {
          "es": "Plegaria eucarística I (Canon romano)"
        }
      },
      "2": {
        "label": {
          "es": "Plegaria eucarística II"
        }
      },
      "3": {
        "label": {
          "es": "Plegaria eucarística III"
        }
      },
      "4": {
        "label": {
          "es": "Plegaria eucarística IV"
        }
      }
    },
    "songs": {
      "advent_1": {
        "title": {
          "es": "PREFACIO I DE ADVIENTO — LAS DOS VENIDAS DE CRISTO"
        },
        "content": [
          {
            "rubric_es": "33. Este prefacio se dice en las misas del tiempo, desde el primer domingo de Adviento"
          },
          {
            "rubric_es": "hasta el 16 de diciembre, y en las restantes misas que se celebran durante este tiempo y"
          },
          {
            "rubric_es": "que no tienen prefacio propio."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Quien al venir por vez primera"
          },
          {
            "sp_es": "",
            "text_es": "en la humildad de nuestra carne,"
          },
          {
            "sp_es": "",
            "text_es": "realizó el plan de redención trazado desde antiguo"
          },
          {
            "sp_es": "",
            "text_es": "y nos abrió el camino de la salvación;"
          },
          {
            "sp_es": "",
            "text_es": "para que cuando venga de nuevo"
          },
          {
            "sp_es": "",
            "text_es": "en la majestad de su gloria,"
          },
          {
            "sp_es": "",
            "text_es": "revelando así la plenitud de su obra,"
          },
          {
            "sp_es": "",
            "text_es": "podamos recibir los bienes prometidos"
          },
          {
            "sp_es": "",
            "text_es": "que ahora, en vigilante espera,"
          },
          {
            "sp_es": "",
            "text_es": "confiamos alcanzar."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con los ángeles y arcángeles"
          },
          {
            "sp_es": "",
            "text_es": "y con todos los coros celestiales,"
          },
          {
            "sp_es": "",
            "text_es": "cantamos sin cesar"
          },
          {
            "sp_es": "",
            "text_es": "el himno de tu gloria:"
          }
        ]
      },
      "advent_2": {
        "title": {
          "es": "PREFACIO II DE ADVIENTO — LA DOBLE ESPERA DE CRISTO"
        },
        "content": [
          {
            "rubric_es": "34. Este prefacio se dice en las misas del tiempo, desde el 17 al 24 de diciembre, y en las"
          },
          {
            "rubric_es": "restantes misas que se celebran durante este mismo tiempo y que no tienen prefacio"
          },
          {
            "rubric_es": "propio."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo nuestro Señor."
          },
          {
            "sp_es": "",
            "text_es": "A quien todos los profetas anunciaron,"
          },
          {
            "sp_es": "",
            "text_es": "la Virgen esperó con inefable amor de Madre;"
          },
          {
            "sp_es": "",
            "text_es": "Juan lo proclamó ya próximo"
          },
          {
            "sp_es": "",
            "text_es": "y lo señaló después entre los hombres."
          },
          {
            "sp_es": "",
            "text_es": "El mismo Señor nos concede ahora prepararnos con alegría"
          },
          {
            "sp_es": "",
            "text_es": "al misterio de su nacimiento,"
          },
          {
            "sp_es": "",
            "text_es": "para encontrarnos así cuando llegue,"
          },
          {
            "sp_es": "",
            "text_es": "velando en oración y cantando su alabanza."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con los ángeles y los arcángeles"
          },
          {
            "sp_es": "",
            "text_es": "y con todos los coros celestiales,"
          },
          {
            "sp_es": "",
            "text_es": "cantamos sin cesar"
          },
          {
            "sp_es": "",
            "text_es": "el himno de tu gloria:"
          }
        ]
      },
      "advent_1a": {
        "title": {
          "es": "PREFACIO III DE ADVIENTO — CRISTO, SEÑOR Y JUEZ DE LA HISTORIA"
        },
        "content": [
          {
            "rubric_es": "Este prefacio se dice en las misas del tiempo, desde el primer domingo de Adviento hasta"
          },
          {
            "rubric_es": "el día 16 de diciembre, y en las restantes Misas que se celebran durante este mismo"
          },
          {
            "rubric_es": "tiempo y no tienen prefacio propio."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo darte gracias,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber cantar en tu honor"
          },
          {
            "sp_es": "",
            "text_es": "himnos de bendición y de alabanza,"
          },
          {
            "sp_es": "",
            "text_es": "Padre todopoderoso,"
          },
          {
            "sp_es": "",
            "text_es": "principio y fin de todo lo creado."
          },
          {
            "sp_es": "",
            "text_es": "Tú nos has ocultado el día y la hora"
          },
          {
            "sp_es": "",
            "text_es": "en que Cristo, tu Hijo,"
          },
          {
            "sp_es": "",
            "text_es": "Señor y Juez de la historia,"
          },
          {
            "sp_es": "",
            "text_es": "aparecerá revestido de poder y de gloria,"
          },
          {
            "sp_es": "",
            "text_es": "sobre las nubes del cielo."
          },
          {
            "sp_es": "",
            "text_es": "En aquel día terrible y glorioso"
          },
          {
            "sp_es": "",
            "text_es": "pasará la figura de este mundo"
          },
          {
            "sp_es": "",
            "text_es": "y nacerán los cielos nuevos y la tierra nueva."
          },
          {
            "sp_es": "",
            "text_es": "El mismo Señor que se nos mostrará entonces lleno de gloria"
          },
          {
            "sp_es": "",
            "text_es": "viene ahora a nuestro encuentro"
          },
          {
            "sp_es": "",
            "text_es": "en cada hombre y en cada acontecimiento,"
          },
          {
            "sp_es": "",
            "text_es": "para que lo recibamos en la fe"
          },
          {
            "sp_es": "",
            "text_es": "y por el amor demos testimonio"
          },
          {
            "sp_es": "",
            "text_es": "de la esperanza dichosa de su reino."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, mientras aguardamos su última venida,"
          },
          {
            "sp_es": "",
            "text_es": "unidos a los ángeles y a los santos,"
          },
          {
            "sp_es": "",
            "text_es": "cantamos el himno de tu gloria:"
          }
        ]
      },
      "advent_2a": {
        "title": {
          "es": "PREFACIO IV DE ADVIENTO — MARÍA, NUEVA EVA"
        },
        "content": [
          {
            "rubric_es": "Este prefacio se dice en las misas del tiempo, desde el día 17 al 24 de diciembre, y en las"
          },
          {
            "rubric_es": "restantes misas que se celebran durante este mismo tiempo y no tienen prefacio propio."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo darte gracias,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Te alabamos, te bendecimos y te glorificamos"
          },
          {
            "sp_es": "",
            "text_es": "por el misterio de la Virgen Madre."
          },
          {
            "sp_es": "",
            "text_es": "Porque, si del antiguo adversario nos vino la ruina,"
          },
          {
            "sp_es": "",
            "text_es": "en el seno virginal de la hija de Sión ha germinado"
          },
          {
            "sp_es": "",
            "text_es": "aquel que nos nutre con el pan de los ángeles,"
          },
          {
            "sp_es": "",
            "text_es": "y ha brotado para todo el género humano"
          },
          {
            "sp_es": "",
            "text_es": "la salvación y la paz."
          },
          {
            "sp_es": "",
            "text_es": "La gracia que Eva nos arrebató"
          },
          {
            "sp_es": "",
            "text_es": "nos ha sido devuelta en María."
          },
          {
            "sp_es": "",
            "text_es": "En ella, madre de todos los hombres,"
          },
          {
            "sp_es": "",
            "text_es": "la maternidad, redimida del pecado y de la muerte,"
          },
          {
            "sp_es": "",
            "text_es": "se abre al don de una vida nueva."
          },
          {
            "sp_es": "",
            "text_es": "Así, donde había crecido el pecado,"
          },
          {
            "sp_es": "",
            "text_es": "se ha desbordado tu misericordia"
          },
          {
            "sp_es": "",
            "text_es": "en Cristo, nuestro Salvador."
          },
          {
            "sp_es": "",
            "text_es": "Por eso nosotros,"
          },
          {
            "sp_es": "",
            "text_es": "mientras esperamos la venida de Cristo,"
          },
          {
            "sp_es": "",
            "text_es": "unido a los ángeles y a los santos,"
          },
          {
            "sp_es": "",
            "text_es": "cantamos el himno de tu gloria:"
          }
        ]
      },
      "nativity_1": {
        "title": {
          "es": "PREFACIO I DE NAVIDAD — CRISTO, LUZ DEL MUNDO"
        },
        "content": [
          {
            "rubric_es": "35. Este prefacio se dice en las misas de Navidad y de su octava; durante la octava, se"
          },
          {
            "rubric_es": "dice incluso en aquellas misas que, si se celebraran en otro tiempo tendrían prefacio"
          },
          {
            "rubric_es": "propio, pero no en aquellas que tienen prefacio propio referido a las Personas divinas o"
          },
          {
            "rubric_es": "sus misterios. También se dice en las ferias del tiempo de Navidad."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación,"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque gracias al misterio de la Palabra hecha carne,"
          },
          {
            "sp_es": "",
            "text_es": "la luz de tu gloria brilló ante nuestros ojos"
          },
          {
            "sp_es": "",
            "text_es": "con nuevo resplandor"
          },
          {
            "sp_es": "",
            "text_es": "para que conociendo a Dios visiblemente,"
          },
          {
            "sp_es": "",
            "text_es": "él nos lleve al amor de lo invisible."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con los ángeles y los arcángeles"
          },
          {
            "sp_es": "",
            "text_es": "y con todos los coros celestiales,"
          },
          {
            "sp_es": "",
            "text_es": "cantamos sin cesar"
          },
          {
            "sp_es": "",
            "text_es": "el himno de tu gloria:"
          }
        ]
      },
      "nativity_2": {
        "title": {
          "es": "PREFACIO II DE NAVIDAD — LA RESTAURACIÓN DEL UNIVERSO EN LA ENCARNACIÓN"
        },
        "content": [
          {
            "rubric_es": "36. Este prefacio se dice en las misas de Navidad y de su octava; durante la octava, se"
          },
          {
            "rubric_es": "dice incluso en aquellas misas que, si se celebraran en otro tiempo tendrían prefacio"
          },
          {
            "rubric_es": "propio, pero no en aquellas que tienen prefacio propio referido a las Personas divinas o"
          },
          {
            "rubric_es": "sus misterios. También se dice en las ferias del tiempo de Navidad."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo nuestro Señor."
          },
          {
            "sp_es": "",
            "text_es": "Porque en el misterio santo que hoy celebramos,"
          },
          {
            "sp_es": "",
            "text_es": "Cristo, el Señor, sin dejar la gloria del Padre,"
          },
          {
            "sp_es": "",
            "text_es": "se hace presente entre nosotros de un modo nuevo;"
          },
          {
            "sp_es": "",
            "text_es": "el que era invisible en su naturaleza,"
          },
          {
            "sp_es": "",
            "text_es": "se hice visible al adoptar la nuestra;"
          },
          {
            "sp_es": "",
            "text_es": "el eterno, engendrado antes del tiempo,"
          },
          {
            "sp_es": "",
            "text_es": "comparte nuestra vida temporal"
          },
          {
            "sp_es": "",
            "text_es": "para asumir en sí todo lo creado,"
          },
          {
            "sp_es": "",
            "text_es": "para reconstruir los que estaba caído"
          },
          {
            "sp_es": "",
            "text_es": "y restaurar de esto modo el universo,"
          },
          {
            "sp_es": "",
            "text_es": "para llamar de nuevo al reino de los cielos"
          },
          {
            "sp_es": "",
            "text_es": "al hombre sumergido el pecado."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, unidos a los coros angélicos,"
          },
          {
            "sp_es": "",
            "text_es": "te aclamamos, llenos de alegría:"
          }
        ]
      },
      "nativity_3": {
        "title": {
          "es": "PREFACIO III DE NAVIDAD — EL INTERCAMBIO EFECTUADO EN LA ENCARNACIÓN DEL VERBO"
        },
        "content": [
          {
            "rubric_es": "37. Este prefacio se dice en las misas de Navidad y de su octava; durante la octava, se"
          },
          {
            "rubric_es": "dice incluso en aquellas misas que, si se celebraran en otro tiempo tendrían prefacio"
          },
          {
            "rubric_es": "propio, pero no en aquellas que tienen prefacio propio referido a las Personas divinas o"
          },
          {
            "rubric_es": "sus misterios. También se dice en las ferias del tiempo de Navidad."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación,"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo nuestro Señor."
          },
          {
            "sp_es": "",
            "text_es": "Por él,"
          },
          {
            "sp_es": "",
            "text_es": "hoy resplandece ante el mundo"
          },
          {
            "sp_es": "",
            "text_es": "el maravilloso intercambio que nos salva,"
          },
          {
            "sp_es": "",
            "text_es": "pues al revestirse tu Hijo de nuestra frágil condición,"
          },
          {
            "sp_es": "",
            "text_es": "no sólo confiere dignidad eterna"
          },
          {
            "sp_es": "",
            "text_es": "a la naturaleza humana,"
          },
          {
            "sp_es": "",
            "text_es": "sino que por esta unión admirable,"
          },
          {
            "sp_es": "",
            "text_es": "nos hace a nosotros eternos."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "unidos a los coros angélicos,"
          },
          {
            "sp_es": "",
            "text_es": "te aclamamos llenos de alegría:"
          }
        ]
      },
      "epiphany": {
        "title": {
          "es": "PREFACIO DE LA EPIFANÍA DEL SEÑOR — CRISTO, LUZ DE LOS PUEBLOS"
        },
        "content": [
          {
            "rubric_es": "38. Este prefacio se dice en las misas de la solemnidad de la Epifanía. También puede"
          },
          {
            "rubric_es": "decirse este prefacio, o bien uno de los de Navidad, en los días que van desde la"
          },
          {
            "rubric_es": "solemnidad de la Epifanía hasta el sábado antes del domingo del Bautismo del Señor."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque [hoy] has revelado en Cristo,"
          },
          {
            "sp_es": "",
            "text_es": "para luz de los pueblos,"
          },
          {
            "sp_es": "",
            "text_es": "el verdadero misterio de nuestra salvación;"
          },
          {
            "sp_es": "",
            "text_es": "pues al manifestarse Cristo en nuestra carne mortal"
          },
          {
            "sp_es": "",
            "text_es": "nos hiciste partícipes de la gloria"
          },
          {
            "sp_es": "",
            "text_es": "de su inmortalidad."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con los ángeles y arcángeles"
          },
          {
            "sp_es": "",
            "text_es": "y con todos los coros celestiales,"
          },
          {
            "sp_es": "",
            "text_es": "cantamos sin cesar el himno de tu gloria:"
          }
        ]
      },
      "lent_1": {
        "title": {
          "es": "PREFACIO I DE CUARESMA — SIGNIFICACIÓN ESPIRITUAL DE LA CUARESMA"
        },
        "content": [
          {
            "rubric_es": "39. Este prefacio se dice en el tiempo de Cuaresma, sobre todo en los domingos, cuando"
          },
          {
            "rubric_es": "no corresponda decir un prefacio que sea más indicado."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Por él concedes a tus hijos"
          },
          {
            "sp_es": "",
            "text_es": "anhelar, años tras año,"
          },
          {
            "sp_es": "",
            "text_es": "con el gozo de habernos purificado,"
          },
          {
            "sp_es": "",
            "text_es": "la solemnidad de la Pascua,"
          },
          {
            "sp_es": "",
            "text_es": "para que, dedicados con mayor entrega"
          },
          {
            "sp_es": "",
            "text_es": "a la alabanza divina y al amor fraterno,"
          },
          {
            "sp_es": "",
            "text_es": "por la celebración de los misterios que nos dieron nuestra vida,"
          },
          {
            "sp_es": "",
            "text_es": "lleguemos a ser con plenitud hijos de Dios."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con los ángeles y arcángeles"
          },
          {
            "sp_es": "",
            "text_es": "y con todos los coro celestiales,"
          },
          {
            "sp_es": "",
            "text_es": "cantamos sin cesar"
          },
          {
            "sp_es": "",
            "text_es": "el himno de tu gloria:"
          }
        ]
      },
      "lent_2": {
        "title": {
          "es": "PREFACIO II DE CUARESMA — LA PENITENCIA ESPIRITUAL"
        },
        "content": [
          {
            "rubric_es": "40. Este prefacio se dice en el tiempo de Cuaresma, sobre todo en los domingos, cuando"
          },
          {
            "rubric_es": "no corresponda decir un prefacio que sea más indicado."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque has establecido generosamente"
          },
          {
            "sp_es": "",
            "text_es": "este tiempo de gracia"
          },
          {
            "sp_es": "",
            "text_es": "para renovar en santidad a tus hijos,"
          },
          {
            "sp_es": "",
            "text_es": "de modo que, libres de todo afecto desordenado,"
          },
          {
            "sp_es": "",
            "text_es": "vivamos las realidades temporales"
          },
          {
            "sp_es": "",
            "text_es": "como primicias de las realidades eternas."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con todos los ángeles y santos,"
          },
          {
            "sp_es": "",
            "text_es": "te alabamos, proclamando sin cesar:"
          }
        ]
      },
      "lent_3": {
        "title": {
          "es": "PREFACIO III DE CUARESMA — LOS FRUTOS DE LAS PRIVACIONES VOLUNTARIAS"
        },
        "content": [
          {
            "rubric_es": "41. Este prefacio se dice en las Misas de los días feriales de Cuaresma y en los días"
          },
          {
            "rubric_es": "penitenciales."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque con nuestras privaciones voluntarias"
          },
          {
            "sp_es": "",
            "text_es": "nos enseñas a reconocer y agradecer tus dones,"
          },
          {
            "sp_es": "",
            "text_es": "a dominar nuestro afán de suficiencia"
          },
          {
            "sp_es": "",
            "text_es": "y a repartir nuestros bienes con los necesitados,"
          },
          {
            "sp_es": "",
            "text_es": "imitando así tu generosidad."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con todos los ángeles y santos,"
          },
          {
            "sp_es": "",
            "text_es": "te glorificamos y te aclamamos diciendo:"
          }
        ]
      },
      "lent_4": {
        "title": {
          "es": "PREFACIO IV DE CUARESMA — LOS FRUTOS DEL AYUNO"
        },
        "content": [
          {
            "rubric_es": "42. Este prefacio se dice en las Misas de los días feriales de Cuaresma y en los días"
          },
          {
            "rubric_es": "penitenciales."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque con el ayuno corporal"
          },
          {
            "sp_es": "",
            "text_es": "refrenas nuestras pasiones,"
          },
          {
            "sp_es": "",
            "text_es": "elevas nuestro espíritu,"
          },
          {
            "sp_es": "",
            "text_es": "nos das fuerza y recompensa,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Por él,"
          },
          {
            "sp_es": "",
            "text_es": "los ángeles y los arcángeles"
          },
          {
            "sp_es": "",
            "text_es": "y todos los coros celestiales"
          },
          {
            "sp_es": "",
            "text_es": "celebran tu gloria,"
          },
          {
            "sp_es": "",
            "text_es": "unidos en común alegría."
          },
          {
            "sp_es": "",
            "text_es": "Permítenos asociarnos a sus voces"
          },
          {
            "sp_es": "",
            "text_es": "cantando humildemente tu alabanza:"
          }
        ]
      },
      "lent_5": {
        "title": {
          "es": "PREFACIO V DE CUARESMA — EL CAMINO DEL ÉXODO EN EL DESIERTO CUARESMAL"
        },
        "content": [
          {
            "rubric_es": "Este prefacio se dice en las misas de las ferias de Cuaresma."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo bendecir tu nombre,"
          },
          {
            "sp_es": "",
            "text_es": "Padre rico en misericordia,"
          },
          {
            "sp_es": "",
            "text_es": "ahora que, en nuestro itinerario hacia la luz pascual,"
          },
          {
            "sp_es": "",
            "text_es": "seguimos los pasos de Cristo,"
          },
          {
            "sp_es": "",
            "text_es": "maestro y modelo de la humanidad,"
          },
          {
            "sp_es": "",
            "text_es": "reconciliada en el amor."
          },
          {
            "sp_es": "",
            "text_es": "Tú abres a la Iglesia"
          },
          {
            "sp_es": "",
            "text_es": "el comino de un nuevo éxodo"
          },
          {
            "sp_es": "",
            "text_es": "a través del desierto cuaresmal,"
          },
          {
            "sp_es": "",
            "text_es": "para que, llegados a la montaña santa,"
          },
          {
            "sp_es": "",
            "text_es": "con el corazón contrito y humillado,"
          },
          {
            "sp_es": "",
            "text_es": "reavivemos nuestra vocación de pueblo de la alianza,"
          },
          {
            "sp_es": "",
            "text_es": "convocado para bendecir tu nombre,"
          },
          {
            "sp_es": "",
            "text_es": "escuchar tu Palabra"
          },
          {
            "sp_es": "",
            "text_es": "y experimentar con gozo tus maravillas."
          },
          {
            "sp_es": "",
            "text_es": "Por estos signos de salvación,"
          },
          {
            "sp_es": "",
            "text_es": "unidos a los ángeles, ministros de tu gloria,"
          },
          {
            "sp_es": "",
            "text_es": "proclamamos el canto de tu alabanza:"
          }
        ]
      },
      "passion_1": {
        "title": {
          "es": "PREFACIO I DE LA PASIÓN DEL SEÑOR — LA FUERZA DE LA CRUZ"
        },
        "content": [
          {
            "rubric_es": "43. Este prefacio se dice en las ferias de la quinta semana de Cuaresma y en las misas de"
          },
          {
            "rubric_es": "los misterios de la cruz y de la pasión del Señor."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque en la pasión salvadora de tu Hijo"
          },
          {
            "sp_es": "",
            "text_es": "el universo aprende a proclamar tu grandeza"
          },
          {
            "sp_es": "",
            "text_es": "y, por la fuerza de la cruz,"
          },
          {
            "sp_es": "",
            "text_es": "el mundo es juzgado como reo"
          },
          {
            "sp_es": "",
            "text_es": "y el Crucificado exaltado como juez poderoso."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "ahora nosotros, llenos de alegría,"
          },
          {
            "sp_es": "",
            "text_es": "te aclamamos con los ángeles y los santos"
          },
          {
            "sp_es": "",
            "text_es": "diciendo:"
          }
        ]
      },
      "passion_2": {
        "title": {
          "es": "PREFACIO II DE LA PASIÓN DEL SEÑOR — LA VICTORIA DE LA PASIÓN"
        },
        "content": [
          {
            "rubric_es": "44. Este prefacio se dice el lunes, martes y miércoles de la Semana Santa."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Porque se acercan ya los días santos"
          },
          {
            "sp_es": "",
            "text_es": "de su pasión salvadora"
          },
          {
            "sp_es": "",
            "text_es": "y de su resurrección gloriosa;"
          },
          {
            "sp_es": "",
            "text_es": "en ellos celebramos su triunfo"
          },
          {
            "sp_es": "",
            "text_es": "sobre el poder de nuestro enemigo"
          },
          {
            "sp_es": "",
            "text_es": "y renovamos el misterio de nuestra redención."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "los ángeles te cantan con júbilo eterno"
          },
          {
            "sp_es": "",
            "text_es": "y nosotros nos unimos a sus voces"
          },
          {
            "sp_es": "",
            "text_es": "cantando humildemente tu alabanza:"
          }
        ]
      },
      "easter_1": {
        "title": {
          "es": "PREFACIO PASCUAL I — EL MISTERIO PASCUAL"
        },
        "content": [
          {
            "rubric_es": "46. Este prefacio se dice durante el tiempo pascual."
          },
          {
            "rubric_es": "En la misa de la Vigilia pascual se dice en esta noche; el día de Pascua y durante la"
          },
          {
            "rubric_es": "octava: en este día; en las restantes misas: en este tiempo."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "glorificarte siempre, Señor;"
          },
          {
            "sp_es": "",
            "text_es": "pero más que nunca en esta noche (este día) (este tiempo)"
          },
          {
            "sp_es": "",
            "text_es": "en que Cristo, nuestra Pascua, ha sido inmolado."
          },
          {
            "sp_es": "",
            "text_es": "Porque él es el verdadero Cordero"
          },
          {
            "sp_es": "",
            "text_es": "que quitó el pecado del mundo;"
          },
          {
            "sp_es": "",
            "text_es": "muriendo destruyó nuestra muerte,"
          },
          {
            "sp_es": "",
            "text_es": "y resucitando restauró la vida."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con esta efusión de gozo pascual,"
          },
          {
            "sp_es": "",
            "text_es": "el mundo entero se desborda de alegría"
          },
          {
            "sp_es": "",
            "text_es": "y también los coros celestiales,"
          },
          {
            "sp_es": "",
            "text_es": "los ángeles y los arcángeles,"
          },
          {
            "sp_es": "",
            "text_es": "cantan sin cesar el himno de tu gloria:"
          }
        ]
      },
      "easter_2": {
        "title": {
          "es": "PREFACIO PASCUAL II — LA NUEVA VIDA EN CRISTO"
        },
        "content": [
          {
            "rubric_es": "46. Este prefacio se dice durante el tiempo pascual."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "glorificarte siempre, Señor;"
          },
          {
            "sp_es": "",
            "text_es": "pero más que nunca en este tiempo"
          },
          {
            "sp_es": "",
            "text_es": "en que Cristo, nuestra Pascua, ha sido inmolado."
          },
          {
            "sp_es": "",
            "text_es": "Por él, los hijos de la luz"
          },
          {
            "sp_es": "",
            "text_es": "amanecen a la vida eterna,"
          },
          {
            "sp_es": "",
            "text_es": "los creyentes atraviesan los umbrales"
          },
          {
            "sp_es": "",
            "text_es": "del reino de los cielos;"
          },
          {
            "sp_es": "",
            "text_es": "porque en la muerte de Cristo"
          },
          {
            "sp_es": "",
            "text_es": "nuestra muerte ha sido vencida"
          },
          {
            "sp_es": "",
            "text_es": "y en su resurrección"
          },
          {
            "sp_es": "",
            "text_es": "hemos resucitado todos."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con esta efusión de gozo pascual,"
          },
          {
            "sp_es": "",
            "text_es": "el mundo entero se desborda de alegría,"
          },
          {
            "sp_es": "",
            "text_es": "y también los coros celestiales,"
          },
          {
            "sp_es": "",
            "text_es": "los ángeles y los arcángeles,"
          },
          {
            "sp_es": "",
            "text_es": "cantan sin cesar el himno de tu gloria:"
          }
        ]
      },
      "easter_3": {
        "title": {
          "es": "PREFACIO PASCUAL III — CRISTO VIVO E INTERCESOR PERPETUO EN FAVOR NUESTRO"
        },
        "content": [
          {
            "rubric_es": "47. Este prefacio se dice durante el tiempo pascual."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "glorificarte siempre, Señor;"
          },
          {
            "sp_es": "",
            "text_es": "pero más que nunca en este tiempo"
          },
          {
            "sp_es": "",
            "text_es": "en que Cristo, nuestra Pascua, ha sido inmolado."
          },
          {
            "sp_es": "",
            "text_es": "Porque él no cesa de ofrecerse por nosotros,"
          },
          {
            "sp_es": "",
            "text_es": "de interceder por todos ante ti;"
          },
          {
            "sp_es": "",
            "text_es": "inmolado, ya no vuelve a morir;"
          },
          {
            "sp_es": "",
            "text_es": "sacrificado, vive para siempre."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con esta efusión de gozo pascual,"
          },
          {
            "sp_es": "",
            "text_es": "el mundo entero se desborda de alegría,"
          },
          {
            "sp_es": "",
            "text_es": "y también los coros celestiales,"
          },
          {
            "sp_es": "",
            "text_es": "los ángeles y los arcángeles,"
          },
          {
            "sp_es": "",
            "text_es": "cantan sin cesar el himno de tu gloria:"
          }
        ]
      },
      "easter_4": {
        "title": {
          "es": "PREFACIO PASCUAL IV — LA RESTAURACIÓN DEL UNIVERSO POR LE MISTERIO PASCUAL"
        },
        "content": [
          {
            "rubric_es": "48. Este prefacio se dice durante el tiempo pascual."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "glorificarte siempre, Señor;"
          },
          {
            "sp_es": "",
            "text_es": "pero más que nunca en este tiempo"
          },
          {
            "sp_es": "",
            "text_es": "en que Cristo, nuestra Pascua, ha sido inmolado."
          },
          {
            "sp_es": "",
            "text_es": "Porque en él"
          },
          {
            "sp_es": "",
            "text_es": "fue demolida nuestra antigua miseria,"
          },
          {
            "sp_es": "",
            "text_es": "reconstruido cuanto estaba derrumbado"
          },
          {
            "sp_es": "",
            "text_es": "y renovada en plenitud la salvación."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con esta efusión de gozo pascual,"
          },
          {
            "sp_es": "",
            "text_es": "el mundo entero se desborda de alegría,"
          },
          {
            "sp_es": "",
            "text_es": "y también los coros celestiales,"
          },
          {
            "sp_es": "",
            "text_es": "los ángeles y los arcángeles,"
          },
          {
            "sp_es": "",
            "text_es": "cantan sin cesar el himno de tu gloria:"
          }
        ]
      },
      "easter_5": {
        "title": {
          "es": "PREFACIO PASCUAL V — CRISTO, SACERDOTE Y VÍCTIMA"
        },
        "content": [
          {
            "rubric_es": "49. Este prefacio se dice durante el tiempo pascual."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "glorificarte siempre, Señor;"
          },
          {
            "sp_es": "",
            "text_es": "pero más que nunca en este tiempo"
          },
          {
            "sp_es": "",
            "text_es": "en que Cristo, nuestra Pascua, ha sido inmolado."
          },
          {
            "sp_es": "",
            "text_es": "Porque él,"
          },
          {
            "sp_es": "",
            "text_es": "con la inmolación de su cuerpo en la cruz,"
          },
          {
            "sp_es": "",
            "text_es": "dio pleno cumplimiento a lo que anunciaban"
          },
          {
            "sp_es": "",
            "text_es": "los sacrificios de la antigua alianza,"
          },
          {
            "sp_es": "",
            "text_es": "y ofreciéndose a sí mismo"
          },
          {
            "sp_es": "",
            "text_es": "por nuestra salvación,"
          },
          {
            "sp_es": "",
            "text_es": "quiso ser al mismo tiempo"
          },
          {
            "sp_es": "",
            "text_es": "sacerdote, víctima y altar."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con esta efusión de gozo pascual,"
          },
          {
            "sp_es": "",
            "text_es": "el mundo entero se desborda de alegría,"
          },
          {
            "sp_es": "",
            "text_es": "y también los coros celestiales,"
          },
          {
            "sp_es": "",
            "text_es": "los ángeles y los arcángeles,"
          },
          {
            "sp_es": "",
            "text_es": "cantan sin cesar el himno de tu gloria:"
          }
        ]
      },
      "ascension_1": {
        "title": {
          "es": "PREFACIO I DE LA ASCENSIÓN DEL SEÑOR — EL MISTERIO DE LA ASCENSIÓN"
        },
        "content": [
          {
            "rubric_es": "50. Este prefacio se dice el día de la Ascensión del Señor; puede decirse también en los"
          },
          {
            "rubric_es": "días después de la Ascensión hasta el sábado antes de Pentecostés en aquellas misas que"
          },
          {
            "rubric_es": "no tienen prefacio propio."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque Jesús, el Señor,"
          },
          {
            "sp_es": "",
            "text_es": "el rey de la gloria, vencedor del pecado y de la muerte,"
          },
          {
            "sp_es": "",
            "text_es": "ha ascendido [hoy] ante el asombro de los ángeles"
          },
          {
            "sp_es": "",
            "text_es": "a lo más alto del cielo,"
          },
          {
            "sp_es": "",
            "text_es": "como mediador entre Dios y los hombres,"
          },
          {
            "sp_es": "",
            "text_es": "como juez de vivos y muertos."
          },
          {
            "sp_es": "",
            "text_es": "No se ha ido para desentenderse de este mundo,"
          },
          {
            "sp_es": "",
            "text_es": "sino que ha querido precedernos como cabeza nuestra"
          },
          {
            "sp_es": "",
            "text_es": "para que nosotros, miembros de su Cuerpo,"
          },
          {
            "sp_es": "",
            "text_es": "vivamos con la ardiente esperanza"
          },
          {
            "sp_es": "",
            "text_es": "de seguirlo en su reino."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con esta efusión de gozo pascual,"
          },
          {
            "sp_es": "",
            "text_es": "el mundo entero se desborda de alegría,"
          },
          {
            "sp_es": "",
            "text_es": "y también los coros celestiales,"
          },
          {
            "sp_es": "",
            "text_es": "los ángeles y los arcángeles,"
          },
          {
            "sp_es": "",
            "text_es": "cantan sin cesar el himno de tu gloria:"
          }
        ]
      },
      "ascension_2": {
        "title": {
          "es": "PREFACIO II DE LA ASCENSIÓN DEL SEÑOR — EL MISTERIO DE LA ASCENSIÓN"
        },
        "content": [
          {
            "rubric_es": "51. Este prefacio se dice el día de la Ascensión del Señor; puede decirse también en los"
          },
          {
            "rubric_es": "días después de la Ascensión hasta el sábado antes de Pentecostés en aquellas misas"
          },
          {
            "rubric_es": "que no tienen prefacio propio."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Que después de su resurrección"
          },
          {
            "sp_es": "",
            "text_es": "se apareció visiblemente a todos sus discípulos"
          },
          {
            "sp_es": "",
            "text_es": "y, ante sus ojos, fue elevado al cielo"
          },
          {
            "sp_es": "",
            "text_es": "para hacernos compartir su divinidad."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con esta efusión de gozo pascual,"
          },
          {
            "sp_es": "",
            "text_es": "el mundo entero se desborda de alegría,"
          },
          {
            "sp_es": "",
            "text_es": "y también los coros celestiales,"
          },
          {
            "sp_es": "",
            "text_es": "los ángeles y los arcángeles,"
          },
          {
            "sp_es": "",
            "text_es": "cantan sin cesar el himno de tu gloria:"
          }
        ]
      },
      "after_ascension": {
        "title": {
          "es": "PREFACIO PARA DESPUÉS DE LA ASCENSIÓN — EN LA ESPERA DE LA VENIDA DEL ESPÍRITU SANTO"
        },
        "content": [
          {
            "rubric_es": "Este prefacio se dice en los días que siguen a la Ascensión hasta el sábado antes del"
          },
          {
            "rubric_es": "domingo de Pentecostés."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "que todas las criaturas, en el cielo y en la tierra,"
          },
          {
            "sp_es": "",
            "text_es": "se unan en tu alabanza,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "por Jesucristo, tu Hijo,"
          },
          {
            "sp_es": "",
            "text_es": "Señor del Universo."
          },
          {
            "sp_es": "",
            "text_es": "El cual,"
          },
          {
            "sp_es": "",
            "text_es": "habiendo entrado una vez para siempre"
          },
          {
            "sp_es": "",
            "text_es": "en el santuario del cielo,"
          },
          {
            "sp_es": "",
            "text_es": "ahora intercede por nosotros,"
          },
          {
            "sp_es": "",
            "text_es": "como mediador que asegura"
          },
          {
            "sp_es": "",
            "text_es": "la perenne efusión del Espíritu."
          },
          {
            "sp_es": "",
            "text_es": "Pastor y obispo de nuestras almas,"
          },
          {
            "sp_es": "",
            "text_es": "nos invita a la plegaria unánime,"
          },
          {
            "sp_es": "",
            "text_es": "a ejemplo de María y los Apóstoles,"
          },
          {
            "sp_es": "",
            "text_es": "en la espera de un nuevo Pentecostés."
          },
          {
            "sp_es": "",
            "text_es": "Por este misterio de santificación y de amor,"
          },
          {
            "sp_es": "",
            "text_es": "unidos a los ángeles y a los santos,"
          },
          {
            "sp_es": "",
            "text_es": "cantamos sin cesar el himno de tu gloria:"
          }
        ]
      },
      "ordinary_1": {
        "title": {
          "es": "PREFACIO I PARA LOS DOMINGOS DEL TIEMPO ORDINARIO — EL MISTERIO PASCUAL HA HECHO DE NOSOTROS EL PUEBLO DE DIOS"
        },
        "content": [
          {
            "rubric_es": "52. Este prefacio se dice en los domingos del Tiempo Ordinario."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Quien, por su misterio pascual,"
          },
          {
            "sp_es": "",
            "text_es": "realizó la obra maravillosa"
          },
          {
            "sp_es": "",
            "text_es": "de llamarnos del pecado y de la muerte"
          },
          {
            "sp_es": "",
            "text_es": "al honor de ser estirpe elegida,"
          },
          {
            "sp_es": "",
            "text_es": "sacerdocio real,"
          },
          {
            "sp_es": "",
            "text_es": "nación consagrada,"
          },
          {
            "sp_es": "",
            "text_es": "pueblo de su propiedad,"
          },
          {
            "sp_es": "",
            "text_es": "para que, trasladados de las tinieblas a tu luz admirable,"
          },
          {
            "sp_es": "",
            "text_es": "proclamemos ante el mundo tus maravillas."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con los ángeles y arcángeles"
          },
          {
            "sp_es": "",
            "text_es": "y con todos los coros celestiales,"
          },
          {
            "sp_es": "",
            "text_es": "cantamos sin cesar"
          },
          {
            "sp_es": "",
            "text_es": "el himno de tu gloria:"
          }
        ]
      },
      "ordinary_2": {
        "title": {
          "es": "PREFACIO II PARA LOS DOMINGOS DEL TIEMPO ORDINARIO — EL PLAN DIVINO DE LA SALVACIÓN"
        },
        "content": [
          {
            "rubric_es": "53. Este prefacio se dice en los domingos del Tiempo Ordinario."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "El cual,"
          },
          {
            "sp_es": "",
            "text_es": "compadecido del extravío de los hombres,"
          },
          {
            "sp_es": "",
            "text_es": "quiso nacer de la Virgen;"
          },
          {
            "sp_es": "",
            "text_es": "sufriendo la cruz, nos libró de eterna muerte,"
          },
          {
            "sp_es": "",
            "text_es": "y, resucitando, nos dio vida eterna."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con los ángeles y arcángeles"
          },
          {
            "sp_es": "",
            "text_es": "y con todos los coros celestiales,"
          },
          {
            "sp_es": "",
            "text_es": "cantamos sin cesar"
          },
          {
            "sp_es": "",
            "text_es": "el himno de tu gloria:"
          }
        ]
      },
      "ordinary_3": {
        "title": {
          "es": "PREFACIO III PARA LOS DOMINGOS DEL TIEMPO ORDINARIO — EL HOMBRE SALVADO POR UN HOMBRE"
        },
        "content": [
          {
            "rubric_es": "54. Este prefacio se dice en los domingos del Tiempo Ordinario."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque reconocemos como obra de tu poder admirable"
          },
          {
            "sp_es": "",
            "text_es": "no sólo haber socorrido nuestra débil naturaleza"
          },
          {
            "sp_es": "",
            "text_es": "con la fuerza de tu divinidad,"
          },
          {
            "sp_es": "",
            "text_es": "sino haber previsto el remedio"
          },
          {
            "sp_es": "",
            "text_es": "en la misma debilidad humana,"
          },
          {
            "sp_es": "",
            "text_es": "y de lo que era nuestra ruina"
          },
          {
            "sp_es": "",
            "text_es": "haber hecho nuestra salvación,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Por él,"
          },
          {
            "sp_es": "",
            "text_es": "los ángeles te cantan con júbilo eterno,"
          },
          {
            "sp_es": "",
            "text_es": "y nosotros nos unimos a sus voces"
          },
          {
            "sp_es": "",
            "text_es": "cantando humildemente tu alabanza:"
          }
        ]
      },
      "ordinary_4": {
        "title": {
          "es": "PREFACIO IV PARA LOS DOMINGOS DEL TIEMPO ORDINARIO — LAS ETAPAS DE LA HISTORIA DE LA SALVACIÓN EN CRISTO"
        },
        "content": [
          {
            "rubric_es": "55. Este prefacio se dice en los domingos del Tiempo Ordinario."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Porque él,"
          },
          {
            "sp_es": "",
            "text_es": "con su nacimiento,"
          },
          {
            "sp_es": "",
            "text_es": "restauró nuestra naturaleza caída;"
          },
          {
            "sp_es": "",
            "text_es": "con su muerte,"
          },
          {
            "sp_es": "",
            "text_es": "destruyó nuestro pecado;"
          },
          {
            "sp_es": "",
            "text_es": "al resucitar, nos dio nueva vida;"
          },
          {
            "sp_es": "",
            "text_es": "y en su ascensión,"
          },
          {
            "sp_es": "",
            "text_es": "nos abrió el camino de tu reino."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con los ángeles y los santos,"
          },
          {
            "sp_es": "",
            "text_es": "te cantamos el himno de alabanza"
          },
          {
            "sp_es": "",
            "text_es": "diciendo sin cesar:"
          }
        ]
      },
      "ordinary_5": {
        "title": {
          "es": "PREFACIO V PARA LOS DOMINGOS DEL TIEMPO ORDINARIO — LAS MARAVILLAS DE LA CREACIÓN"
        },
        "content": [
          {
            "rubric_es": "56. Este prefacio se dice los domingo del tiempo ordinario."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación,"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre Santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque creaste el universo entero,"
          },
          {
            "sp_es": "",
            "text_es": "estableciste el continuo retorno de las estaciones,"
          },
          {
            "sp_es": "",
            "text_es": "y al hombre, formado a tu imagen y semejanza,"
          },
          {
            "sp_es": "",
            "text_es": "sometiste las maravillas del mundo,"
          },
          {
            "sp_es": "",
            "text_es": "para que, en nombre tuyo,"
          },
          {
            "sp_es": "",
            "text_es": "dominara la creación,"
          },
          {
            "sp_es": "",
            "text_es": "y, al contemplar tus grandezas,"
          },
          {
            "sp_es": "",
            "text_es": "en todo momento te alabara,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "A quien cantan los ángeles y los arcángeles,"
          },
          {
            "sp_es": "",
            "text_es": "proclamando sin cesar:"
          }
        ]
      },
      "ordinary_6": {
        "title": {
          "es": "PREFACIO VI PARA LOS DOMINGOS DEL TIEMPO ORDINARIO — LA PRENDA DE NUESTRA PASCUA ETERNA"
        },
        "content": [
          {
            "rubric_es": "57. Este prefacio se dice en los domingos del tiempo ordinario."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "En ti vivimos, nos movemos y existimos;"
          },
          {
            "sp_es": "",
            "text_es": "y, todavía peregrinos en este mundo,"
          },
          {
            "sp_es": "",
            "text_es": "no sólo experimentamos"
          },
          {
            "sp_es": "",
            "text_es": "las pruebas cotidianas de tu amor,"
          },
          {
            "sp_es": "",
            "text_es": "sino que poseemos ya en prenda la vida futura,"
          },
          {
            "sp_es": "",
            "text_es": "pues esperamos gozar de la Pascua eterna,"
          },
          {
            "sp_es": "",
            "text_es": "porque tenemos las primicias del Espíritu"
          },
          {
            "sp_es": "",
            "text_es": "por el que resucitaste a Jesús de entre los muertos."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, Señor, te damos gracias"
          },
          {
            "sp_es": "",
            "text_es": "y proclamamos tu grandeza"
          },
          {
            "sp_es": "",
            "text_es": "cantando con los ángeles:"
          }
        ]
      },
      "ordinary_7": {
        "title": {
          "es": "PREFACIO VII PARA LOS DOMINGOS DEL TIEMPO ORDINARIO — LA SALVACIÓN, FRUTO DE LA OBEDIENCIA DE CRISTO"
        },
        "content": [
          {
            "rubric_es": "58. Este prefacio se dice en los domingos del Tiempo Ordinario."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación,"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre Santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque tu amor al mundo"
          },
          {
            "sp_es": "",
            "text_es": "fue tan misericordioso"
          },
          {
            "sp_es": "",
            "text_es": "que no sólo nos enviaste como redentor"
          },
          {
            "sp_es": "",
            "text_es": "a tu propio Hijo,"
          },
          {
            "sp_es": "",
            "text_es": "sino que en todo lo quisiste semejante al hombre,"
          },
          {
            "sp_es": "",
            "text_es": "menos en el pecado,"
          },
          {
            "sp_es": "",
            "text_es": "para poder así amar en nosotros"
          },
          {
            "sp_es": "",
            "text_es": "lo que amabas en él."
          },
          {
            "sp_es": "",
            "text_es": "Con su obediencia has restaurado aquellos dones"
          },
          {
            "sp_es": "",
            "text_es": "que por nuestra desobediencia habíamos perdido."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "ahora nosotros, llenos de alegría,"
          },
          {
            "sp_es": "",
            "text_es": "te aclamamos con los ángeles y los santos"
          },
          {
            "sp_es": "",
            "text_es": "diciendo:"
          }
        ]
      },
      "ordinary_8": {
        "title": {
          "es": "PREFACIO VIII PARA LOS DOMINGOS DEL TIEMPO ORDINARIO — LA IGLESIA UNIFICADA POR VIRTUD Y A IMAGEN DE LA TRINIDAD"
        },
        "content": [
          {
            "rubric_es": "59. Este prefacio se dice en los domingos del Tiempo Ordinario."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque has querido reunir de nuevo,"
          },
          {
            "sp_es": "",
            "text_es": "por la sangre de tu Hijo"
          },
          {
            "sp_es": "",
            "text_es": "y la fuerza del Espíritu,"
          },
          {
            "sp_es": "",
            "text_es": "a los hijos dispersos por el pecado;"
          },
          {
            "sp_es": "",
            "text_es": "de este modo tu Iglesia,"
          },
          {
            "sp_es": "",
            "text_es": "unificada por virtud y a imagen de la Trinidad,"
          },
          {
            "sp_es": "",
            "text_es": "aparece ante el mundo"
          },
          {
            "sp_es": "",
            "text_es": "como cuerpo de Cristo y templo del Espíritu,"
          },
          {
            "sp_es": "",
            "text_es": "para alabanza de tu infinita sabiduría."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "unidos a los coros angélicos,"
          },
          {
            "sp_es": "",
            "text_es": "te aclamamos llenos de alegría:"
          }
        ]
      },
      "ordinary_9": {
        "title": {
          "es": "PREFACIO IX PARA LOS DOMINGOS DEL TIEMPO ORDINARIO (Prefacio II del Espíritu Santo) — LA ACCIÓN DEL ESPÍRITU SANTO EN LA IGLESIA"
        },
        "content": [
          {
            "rubric_es": "Este prefacio se dice en los domingo del tiempo ordinario."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque nos concedes en cada momento lo que más conviene"
          },
          {
            "sp_es": "",
            "text_es": "y diriges sabiamente la nave de tu Iglesia,"
          },
          {
            "sp_es": "",
            "text_es": "asistiéndola siempre con la fuerza del Espíritu Santo,"
          },
          {
            "sp_es": "",
            "text_es": "para que, a impulso de su amor confiado,"
          },
          {
            "sp_es": "",
            "text_es": "no abandone la plegaria en la tribulación,"
          },
          {
            "sp_es": "",
            "text_es": "ni la acción de gracias en el gozo,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "A quien alaban los cielos y la tierra,"
          },
          {
            "sp_es": "",
            "text_es": "los ángeles y los arcángeles,"
          },
          {
            "sp_es": "",
            "text_es": "proclamando sin cesar:"
          }
        ]
      },
      "baptism": {
        "title": {
          "es": "PREFACIO DEL BAUTISMO — EL BAUTISMO, INICIO DE LA VIDA NUEVA"
        },
        "content": [
          {
            "rubric_es": "Este prefacio se puede decir en la misa del bautismo."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "y exaltar tu nombre,"
          },
          {
            "sp_es": "",
            "text_es": "Padre santo y misericordioso,"
          },
          {
            "sp_es": "",
            "text_es": "por Jesucristo, Señor y Redentor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Te alabamos,"
          },
          {
            "sp_es": "",
            "text_es": "te bendecimos y te glorificamos"
          },
          {
            "sp_es": "",
            "text_es": "por el sacramento del nuevo nacimiento."
          },
          {
            "sp_es": "",
            "text_es": "Tú has querido que del corazón abierto de tu Hijo"
          },
          {
            "sp_es": "",
            "text_es": "manara para nosotros el don nupcial del Bautismo,"
          },
          {
            "sp_es": "",
            "text_es": "primera Pascua de los creyentes,"
          },
          {
            "sp_es": "",
            "text_es": "puerta de nuestra salvación."
          },
          {
            "sp_es": "",
            "text_es": "inicio de la vida en Cristo,"
          },
          {
            "sp_es": "",
            "text_es": "fuente de la humanidad nueva."
          },
          {
            "sp_es": "",
            "text_es": "Del agua y del Espíritu"
          },
          {
            "sp_es": "",
            "text_es": "engendras en el seno de la Iglesia, virgen y madre,"
          },
          {
            "sp_es": "",
            "text_es": "un pueblo de sacerdotes y reyes,"
          },
          {
            "sp_es": "",
            "text_es": "congregado de entre todas las naciones"
          },
          {
            "sp_es": "",
            "text_es": "en la unidad y santidad del amor."
          },
          {
            "sp_es": "",
            "text_es": "Por este don de tu benevolencia"
          },
          {
            "sp_es": "",
            "text_es": "tu familia te adora"
          },
          {
            "sp_es": "",
            "text_es": "y, unida a los ángeles y a los santos,"
          },
          {
            "sp_es": "",
            "text_es": "canta el himno de tu gloria:"
          }
        ]
      },
      "confirmation": {
        "title": {
          "es": "PREFACIO DE LA CONFIRMACIÓN — MARCADOS CON EL SELLO DEL ESPÍRITU"
        },
        "content": [
          {
            "rubric_es": "Este prefacio se puede decir en la misa de la confirmación."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo darte gracias,"
          },
          {
            "sp_es": "",
            "text_es": "es bueno cantar tu gloria,"
          },
          {
            "sp_es": "",
            "text_es": "Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "fuente y origen de todo bien."
          },
          {
            "sp_es": "",
            "text_es": "Tú, en el Bautismo das nueva vida a los creyentes"
          },
          {
            "sp_es": "",
            "text_es": "y los haces partícipes"
          },
          {
            "sp_es": "",
            "text_es": "del misterio pascual de tu Hijo."
          },
          {
            "sp_es": "",
            "text_es": "Tú los confirmas con el sello del Espíritu,"
          },
          {
            "sp_es": "",
            "text_es": "mediante la imposición de manos"
          },
          {
            "sp_es": "",
            "text_es": "y la unción del crisma."
          },
          {
            "sp_es": "",
            "text_es": "Así, renovados a imagen de Cristo,"
          },
          {
            "sp_es": "",
            "text_es": "el ungido por el Espíritu Santo"
          },
          {
            "sp_es": "",
            "text_es": "y enviado para anunciar la buena nueva de la salvación,"
          },
          {
            "sp_es": "",
            "text_es": "los haces tus comensales en el banquete eucarístico"
          },
          {
            "sp_es": "",
            "text_es": "y testigos de la fe"
          },
          {
            "sp_es": "",
            "text_es": "en la Iglesia y en el mundo."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, nosotros,"
          },
          {
            "sp_es": "",
            "text_es": "reunidos en esta asamblea festiva"
          },
          {
            "sp_es": "",
            "text_es": "para celebrar los prodigios de un renovado Pentecostés,"
          },
          {
            "sp_es": "",
            "text_es": "y unidos a los ángeles y a los santos,"
          },
          {
            "sp_es": "",
            "text_es": "cantamos el himno de tu gloria:"
          }
        ]
      },
      "eucharist_1": {
        "title": {
          "es": "PREFACIO I DE LA SANTÍSIMA EUCARISTÍA — EL SACRIFICIO Y EL SACRAMENTO DE CRISTO"
        },
        "content": [
          {
            "rubric_es": "60. Este prefacio se dice en la misa de la Cena del Señor; puede decirse también en"
          },
          {
            "rubric_es": "la solemnidad del Cuerpo y Sangre de Cristo y en las misas votivas de la Santísima"
          },
          {
            "rubric_es": "Eucaristía."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro,"
          },
          {
            "sp_es": "",
            "text_es": "verdadero y único sacerdote."
          },
          {
            "sp_es": "",
            "text_es": "El cual,"
          },
          {
            "sp_es": "",
            "text_es": "al instituir el sacrificio de la eterna alianza,"
          },
          {
            "sp_es": "",
            "text_es": "se ofreció a sí mismo como víctima de salvación,"
          },
          {
            "sp_es": "",
            "text_es": "y nos mandó perpetuar esta ofrenda"
          },
          {
            "sp_es": "",
            "text_es": "en conmemoración suya."
          },
          {
            "sp_es": "",
            "text_es": "Su carne, inmolada por nosotros,"
          },
          {
            "sp_es": "",
            "text_es": "es alimento que nos fortalece;"
          },
          {
            "sp_es": "",
            "text_es": "su sangre, derramada por nosotros,"
          },
          {
            "sp_es": "",
            "text_es": "es bebida que nos purifica."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con los ángeles y los arcángeles"
          },
          {
            "sp_es": "",
            "text_es": "y con todos los coros celestiales,"
          },
          {
            "sp_es": "",
            "text_es": "cantamos sin cesar el himno de tu gloria:"
          }
        ]
      },
      "eucharist_2": {
        "title": {
          "es": "PREFACIO II DE LA SANTÍSIMA EUCARISTÍA — LOS FRUTOS DE LA SANTÍSIMA EUCARISTÍA"
        },
        "content": [
          {
            "rubric_es": "Este prefacio se dice en la solemnidad del Cuerpo y Sangre de Cristo y en las misas"
          },
          {
            "rubric_es": "votivas de la Santísima Eucaristía."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación,"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre Santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "El cual, en la última cena con los apóstoles,"
          },
          {
            "sp_es": "",
            "text_es": "para perpetuar su pasión salvadora,"
          },
          {
            "sp_es": "",
            "text_es": "se entregó a sí mismo"
          },
          {
            "sp_es": "",
            "text_es": "como Cordero inmaculado y Eucaristía perfecta."
          },
          {
            "sp_es": "",
            "text_es": "Con este sacramento alimentas"
          },
          {
            "sp_es": "",
            "text_es": "y santificas a tus fieles,"
          },
          {
            "sp_es": "",
            "text_es": "para que una misma fe ilumine"
          },
          {
            "sp_es": "",
            "text_es": "y un mismo amor congregue"
          },
          {
            "sp_es": "",
            "text_es": "a todos los hombres que habitan un mismo mundo."
          },
          {
            "sp_es": "",
            "text_es": "Así, pues, nos reunimos"
          },
          {
            "sp_es": "",
            "text_es": "en torno a la mesa de este sacramento admirable,"
          },
          {
            "sp_es": "",
            "text_es": "para que la abundancia de tu gracia"
          },
          {
            "sp_es": "",
            "text_es": "nos lleve a poseer la vida celestial."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, todas tus criaturas,"
          },
          {
            "sp_es": "",
            "text_es": "en el cielo y en la tierra,"
          },
          {
            "sp_es": "",
            "text_es": "te adoran cantando un cántico nuevo;"
          },
          {
            "sp_es": "",
            "text_es": "y también nosotros, con los ángeles,"
          },
          {
            "sp_es": "",
            "text_es": "te aclamamos por siempre diciendo:"
          }
        ]
      },
      "eucharist_3": {
        "title": {
          "es": "PREFACIO III DE LA SANTÍSIMA EUCARISTÍA — LA EUCARISTÍA, VIÁTICO PARA LA PASCUA ETERNA"
        },
        "content": [
          {
            "rubric_es": "Este prefacio se puede decir en la misa del viático."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario darte gracias,"
          },
          {
            "sp_es": "",
            "text_es": "es bueno bendecir tu nombre,"
          },
          {
            "sp_es": "",
            "text_es": "Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios de misericordia y de paz."
          },
          {
            "sp_es": "",
            "text_es": "Porque has querido que tu Hijo,"
          },
          {
            "sp_es": "",
            "text_es": "obediente hasta la muerte de cruz,"
          },
          {
            "sp_es": "",
            "text_es": "nos precediera en el camino de retorno a ti,"
          },
          {
            "sp_es": "",
            "text_es": "término de toda esperanza humana."
          },
          {
            "sp_es": "",
            "text_es": "En la Eucaristía, testamento de su amor,"
          },
          {
            "sp_es": "",
            "text_es": "él se hace comida y bebida espiritual,"
          },
          {
            "sp_es": "",
            "text_es": "para alimentarnos en nuestro viaje"
          },
          {
            "sp_es": "",
            "text_es": "hacia la Pascua eterna."
          },
          {
            "sp_es": "",
            "text_es": "Con esta prenda de la resurrección futura,"
          },
          {
            "sp_es": "",
            "text_es": "en la esperanza participamos ya"
          },
          {
            "sp_es": "",
            "text_es": "de la mesa gloriosa de tu reino"
          },
          {
            "sp_es": "",
            "text_es": "y, unidos a los ángeles y a los santos,"
          },
          {
            "sp_es": "",
            "text_es": "proclamamos el himno de tu gloria:"
          }
        ]
      },
      "penance": {
        "title": {
          "es": "PREFACIO DE LA PENITENCIA — EL SACRAMENTO DE LA RECONCILIACIÓN EN EL ESPÍRITU"
        },
        "content": [
          {
            "rubric_es": "Este prefacio se puede decir en el tiempo de Cuaresma. Si dice también en las misas de"
          },
          {
            "rubric_es": "reconciliación y en las otras misas de carácter penitencial."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo alabarte y darte gracias,"
          },
          {
            "sp_es": "",
            "text_es": "Padre santo, Dios todopoderoso,"
          },
          {
            "sp_es": "",
            "text_es": "por tus beneficios,"
          },
          {
            "sp_es": "",
            "text_es": "sobre todo por la gracia del perdón."
          },
          {
            "sp_es": "",
            "text_es": "Al hombre, náufrago a causa del pecado,"
          },
          {
            "sp_es": "",
            "text_es": "con el sacramento de la reconciliación"
          },
          {
            "sp_es": "",
            "text_es": "le abres el puerto de la misericordia y de la paz,"
          },
          {
            "sp_es": "",
            "text_es": "en Cristo muerto y resucitado."
          },
          {
            "sp_es": "",
            "text_es": "Con el poder de tu Espíritu,"
          },
          {
            "sp_es": "",
            "text_es": "has dispuesto para la Iglesia,"
          },
          {
            "sp_es": "",
            "text_es": "santa y al mismo tiempo necesitada de penitencia,"
          },
          {
            "sp_es": "",
            "text_es": "una segunda tabla de salvación después del Bautismo,"
          },
          {
            "sp_es": "",
            "text_es": "y así la renuevas incesantemente,"
          },
          {
            "sp_es": "",
            "text_es": "para congregarla en el banquete festivo de tu amor."
          },
          {
            "sp_es": "",
            "text_es": "Por ese don de tu benevolencia,"
          },
          {
            "sp_es": "",
            "text_es": "unidos a los ángeles y a los santos,"
          },
          {
            "sp_es": "",
            "text_es": "contamos, a una voz, el himno de tu gloria:"
          }
        ]
      },
      "sick_paschal": {
        "title": {
          "es": "PREFACIO DE LA UNCIÓN DE ENFERMOS — EL SUFRIMIENTO, PARTICIPACIÓN EN LA PASCUA DE CRISTO"
        },
        "content": [
          {
            "rubric_es": "Este prefacio se puede decir en las misas de unción de los enfermos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo darte gracias,"
          },
          {
            "sp_es": "",
            "text_es": "Dios de misericordia,"
          },
          {
            "sp_es": "",
            "text_es": "Señor todopoderoso,"
          },
          {
            "sp_es": "",
            "text_es": "por Jesucristo, Señor y Redentor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Porque has querido que tu único Hijo,"
          },
          {
            "sp_es": "",
            "text_es": "autor de la vida,"
          },
          {
            "sp_es": "",
            "text_es": "médico de los cuerpos y de las almas,"
          },
          {
            "sp_es": "",
            "text_es": "tomase sobre sí nuestras debilidades,"
          },
          {
            "sp_es": "",
            "text_es": "para socorrernos en los momentos de prueba"
          },
          {
            "sp_es": "",
            "text_es": "y santificarnos en la experiencia del dolor."
          },
          {
            "sp_es": "",
            "text_es": "En el signo sacramental de la Unción,"
          },
          {
            "sp_es": "",
            "text_es": "por la oración de la Iglesia,"
          },
          {
            "sp_es": "",
            "text_es": "nos librar del pecado,"
          },
          {
            "sp_es": "",
            "text_es": "nos confortas con la gracia del Espíritu Santo"
          },
          {
            "sp_es": "",
            "text_es": "y nos haces partícipes de la victoria pascual."
          },
          {
            "sp_es": "",
            "text_es": "Por este signo de tu benevolencia,"
          },
          {
            "sp_es": "",
            "text_es": "unidos a los ángeles y a los santos,"
          },
          {
            "sp_es": "",
            "text_es": "cantamos, a una voz, el himno de tu gloria:"
          }
        ]
      },
      "mary_1": {
        "title": {
          "es": "PREFACIO I DE SANTA MARÍA VIRGEN — LA MATERNIDAD DE MARÍA"
        },
        "content": [
          {
            "rubric_es": "62. Este prefacio se dice en las misas de la Santísima Virgen, añadiendo en su lugar (***)"
          },
          {
            "rubric_es": "la mención de la celebración del día, según se indica en cada misa."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Y alabar, bendecir y proclamar tu gloria"
          },
          {
            "sp_es": "",
            "text_es": "en la (***) de santa María, siempre virgen."
          },
          {
            "sp_es": "",
            "text_es": "Porque ella concibió a tu único Hijo"
          },
          {
            "sp_es": "",
            "text_es": "por obra del Espíritu Santo,"
          },
          {
            "sp_es": "",
            "text_es": "y, sin perder la gloria de su virginidad,"
          },
          {
            "sp_es": "",
            "text_es": "derramó sobre el mundo la luz eterna,"
          },
          {
            "sp_es": "",
            "text_es": "Jesucristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Por él,"
          },
          {
            "sp_es": "",
            "text_es": "los ángeles y los arcángeles"
          },
          {
            "sp_es": "",
            "text_es": "y todos los coros celestiales"
          },
          {
            "sp_es": "",
            "text_es": "celebran tu gloria, unidos en común alegría."
          },
          {
            "sp_es": "",
            "text_es": "Permítenos asociarnos a sus voces"
          },
          {
            "sp_es": "",
            "text_es": "cantando humildemente tu alabanza:"
          }
        ]
      },
      "mary_2": {
        "title": {
          "es": "PREFACIO II DE SANTA MARÍA VIRGEN — LA IGLESIA ALABA A DIOS INSPIRÁNDOSE EN LAS PALABRAS DE MARÍA"
        },
        "content": [
          {
            "rubric_es": "63. Este prefacio se dice en las Misas de la Santísima Virgen."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias, Señor,"
          },
          {
            "sp_es": "",
            "text_es": "y proclamar tus maravillas"
          },
          {
            "sp_es": "",
            "text_es": "en la perfección de tus santos;"
          },
          {
            "sp_es": "",
            "text_es": "y, al conmemorar a la bienaventurada Virgen María,"
          },
          {
            "sp_es": "",
            "text_es": "exaltar especialmente tu generosidad"
          },
          {
            "sp_es": "",
            "text_es": "inspirándonos en su mismo cántico de alabanza."
          },
          {
            "sp_es": "",
            "text_es": "En verdad hiciste obras grandes"
          },
          {
            "sp_es": "",
            "text_es": "en favor de todos los pueblos,"
          },
          {
            "sp_es": "",
            "text_es": "y has mantenido tu misericordia"
          },
          {
            "sp_es": "",
            "text_es": "de generación en generación,"
          },
          {
            "sp_es": "",
            "text_es": "cuando, al mirar la humillación de tu esclava,"
          },
          {
            "sp_es": "",
            "text_es": "por ella nos diste al autor de la vida,"
          },
          {
            "sp_es": "",
            "text_es": "Jesucristo, Hijo tuyo y Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Por él, los ángeles y los arcángeles"
          },
          {
            "sp_es": "",
            "text_es": "te adoran eternamente, gozosos en tu presencia."
          },
          {
            "sp_es": "",
            "text_es": "Permítenos unirnos a sus voces cantando tu alabanza:"
          }
        ]
      },
      "mary_3": {
        "title": {
          "es": "PREFACIO III DE SANTA MARÍA VIRGEN — MARÍA, MODELO Y MADRE DE LA IGLESIA"
        },
        "content": [
          {
            "rubric_es": "Este prefacio se dice en las misas de la Santísima Virgen."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre Santo, Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "y alabarte debidamente"
          },
          {
            "sp_es": "",
            "text_es": "en esta celebración en honor de la Virgen María."
          },
          {
            "sp_es": "",
            "text_es": "Ella, al aceptar tu Palabra con limpio corazón,"
          },
          {
            "sp_es": "",
            "text_es": "mereció concebirla en su seno virginal,"
          },
          {
            "sp_es": "",
            "text_es": "y al dar a luz a su Hijo preparó el nacimiento de la Iglesia."
          },
          {
            "sp_es": "",
            "text_es": "Ella, al recibir junto a la cruz"
          },
          {
            "sp_es": "",
            "text_es": "el testamento de tu amor divino,"
          },
          {
            "sp_es": "",
            "text_es": "tomó como hijos a todos los hombres,"
          },
          {
            "sp_es": "",
            "text_es": "nacidos a la vida sobrenatural"
          },
          {
            "sp_es": "",
            "text_es": "por la muerte de Cristo."
          },
          {
            "sp_es": "",
            "text_es": "Ella, en la espera pentecostal del Espíritu,"
          },
          {
            "sp_es": "",
            "text_es": "al unir sus oraciones a las de los discípulos,"
          },
          {
            "sp_es": "",
            "text_es": "se convirtió en el modelos de la Iglesia suplicante."
          },
          {
            "sp_es": "",
            "text_es": "Desde su asunción a los cielos,"
          },
          {
            "sp_es": "",
            "text_es": "acompaña con amor materno a la Iglesia peregrina,"
          },
          {
            "sp_es": "",
            "text_es": "y protege sus pasos hacia la patria celeste,"
          },
          {
            "sp_es": "",
            "text_es": "hasta la venida gloriosa del Señor."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con todos los ángeles y santos,"
          },
          {
            "sp_es": "",
            "text_es": "te alabamos diciendo sin cesar:"
          }
        ]
      },
      "mary_4": {
        "title": {
          "es": "PREFACIO IV DE SANTA MARÍA VIRGEN — MARÍA, SIGNO DE CONSUELO Y DE ESPERANZA"
        },
        "content": [
          {
            "rubric_es": "Este prefacio se dice en las misas de la Santísima Virgen."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo darte gracias,"
          },
          {
            "sp_es": "",
            "text_es": "es bueno cantar tu gloria,"
          },
          {
            "sp_es": "",
            "text_es": "Padre Santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Te alabamos y te bendecimos,"
          },
          {
            "sp_es": "",
            "text_es": "por Jesucristo, tu Hijo,"
          },
          {
            "sp_es": "",
            "text_es": "en esta fiesta (memoria) de la bienaventurada Virgen María."
          },
          {
            "sp_es": "",
            "text_es": "Ella, como humilde sierva, escuchó tu palabra"
          },
          {
            "sp_es": "",
            "text_es": "y la conservó en su corazón;"
          },
          {
            "sp_es": "",
            "text_es": "admirablemente unida al misterio de la redención,"
          },
          {
            "sp_es": "",
            "text_es": "perseveró con los apóstoles en la plegaria,"
          },
          {
            "sp_es": "",
            "text_es": "mientras esperaban al Espíritu Santo,"
          },
          {
            "sp_es": "",
            "text_es": "y ahora brilla en nuestro camino"
          },
          {
            "sp_es": "",
            "text_es": "como signo de consuelo y de firme esperanza."
          },
          {
            "sp_es": "",
            "text_es": "Por este don de tu benevolencia,"
          },
          {
            "sp_es": "",
            "text_es": "unidos a los ángeles y a los santos,"
          },
          {
            "sp_es": "",
            "text_es": "te entonamos nuestro canto"
          },
          {
            "sp_es": "",
            "text_es": "y proclamamos tu alabanza:"
          }
        ]
      },
      "mary_5": {
        "title": {
          "es": "PREFACIO V DE SANTA MARÍA VIRGEN — MARÍA, IMAGEN DE LA HUMANIDAD NUEVA"
        },
        "content": [
          {
            "rubric_es": "Este prefacio se dice en las misas de la Santísima Virgen."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo darte gracias,"
          },
          {
            "sp_es": "",
            "text_es": "Padre Santo,"
          },
          {
            "sp_es": "",
            "text_es": "fuente de la vida y de la alegría."
          },
          {
            "sp_es": "",
            "text_es": "Porque en esta etapa final de la historia"
          },
          {
            "sp_es": "",
            "text_es": "has querido revelarnos"
          },
          {
            "sp_es": "",
            "text_es": "el misterio escondido desde siglos,"
          },
          {
            "sp_es": "",
            "text_es": "para que así el mundo entero"
          },
          {
            "sp_es": "",
            "text_es": "retorne a la vida y recobre la esperanza."
          },
          {
            "sp_es": "",
            "text_es": "En Cristo, nuevo Adán,"
          },
          {
            "sp_es": "",
            "text_es": "y en María, nueva Eva,"
          },
          {
            "sp_es": "",
            "text_es": "se revela el misterio de tu Iglesia,"
          },
          {
            "sp_es": "",
            "text_es": "como primicia de la humanidad redimida."
          },
          {
            "sp_es": "",
            "text_es": "Por este inefable don"
          },
          {
            "sp_es": "",
            "text_es": "la creación entera,"
          },
          {
            "sp_es": "",
            "text_es": "con la fuerza del Espíritu Santo,"
          },
          {
            "sp_es": "",
            "text_es": "emprende de nuevo"
          },
          {
            "sp_es": "",
            "text_es": "su camino hacia la Pascua eterna."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, nosotros,"
          },
          {
            "sp_es": "",
            "text_es": "unidos a los ángeles y a los santos,"
          },
          {
            "sp_es": "",
            "text_es": "cantamos a una voz"
          },
          {
            "sp_es": "",
            "text_es": "el himno de tu gloria:"
          }
        ]
      },
      "apostles_1": {
        "title": {
          "es": "PREFACIO I DE LOS APÓSTOLES — LOS APÓSTOLES, PASTORES DEL PUEBLO DE DIOS"
        },
        "content": [
          {
            "rubric_es": "64. Este prefacio se dice en las misas de los Apóstoles, principalmente en las de san"
          },
          {
            "rubric_es": "Pedro y san Pablo."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso,"
          },
          {
            "sp_es": "",
            "text_es": "Pastor eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque no abandonas nunca a tu rebaño,"
          },
          {
            "sp_es": "",
            "text_es": "sino que por medio de los santos Apóstoles"
          },
          {
            "sp_es": "",
            "text_es": "lo proteges y conservas,"
          },
          {
            "sp_es": "",
            "text_es": "y quieres que tenga siempre por guía"
          },
          {
            "sp_es": "",
            "text_es": "la palabra de aquellos mismos pastores"
          },
          {
            "sp_es": "",
            "text_es": "a quienes tu Hijo dio la misión"
          },
          {
            "sp_es": "",
            "text_es": "de anunciar el Evangelio."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con los ángeles y arcángeles"
          },
          {
            "sp_es": "",
            "text_es": "y con todos los coros celestiales,"
          },
          {
            "sp_es": "",
            "text_es": "cantamos sin cesar el himno de tu gloria:"
          }
        ]
      },
      "apostles_2": {
        "title": {
          "es": "PREFACIO II DE LOS APÓSTOLES — LOS APÓSTOLES, FUNDAMENTO DE LA IGLESIA Y TESTIMONIO PARA EL MUNDO"
        },
        "content": [
          {
            "rubric_es": "65. Este prefacio se dice en las misas de los Apóstoles y de los Evangelistas."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Porque has cimentado tu Iglesia"
          },
          {
            "sp_es": "",
            "text_es": "sobre la roca de los Apóstoles,"
          },
          {
            "sp_es": "",
            "text_es": "para que permanezca en el mundo"
          },
          {
            "sp_es": "",
            "text_es": "como signo de santidad"
          },
          {
            "sp_es": "",
            "text_es": "y señale a todos los hombres"
          },
          {
            "sp_es": "",
            "text_es": "el camino que nos lleva hacia ti."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, con todos los ángeles"
          },
          {
            "sp_es": "",
            "text_es": "te alabamos ahora y por siempre"
          },
          {
            "sp_es": "",
            "text_es": "diciendo con humilde fe:"
          }
        ]
      },
      "saints_1": {
        "title": {
          "es": "PREFACIO I DE LOS SANTOS — LA GLORIA DE LOS SANTOS"
        },
        "content": [
          {
            "rubric_es": "66. Este prefacio se dice en las misas de «Todos los Santos», de los santos Patronos y"
          },
          {
            "rubric_es": "Titulares de la iglesia, y en las solemnidades y fiestas de los Santos, a no ser que haya que"
          },
          {
            "rubric_es": "decir un prefacio más propio. Se puede decir también en las memorias de los Santos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "y deber nuestro glorificarte,"
          },
          {
            "sp_es": "",
            "text_es": "Padre Santo,"
          },
          {
            "sp_es": "",
            "text_es": "porque manifiestas tu gloria"
          },
          {
            "sp_es": "",
            "text_es": "en la asamblea de los santos,"
          },
          {
            "sp_es": "",
            "text_es": "y, al coronar sus méritos,"
          },
          {
            "sp_es": "",
            "text_es": "coronas tu propia obra."
          },
          {
            "sp_es": "",
            "text_es": "Tú nos ofreces el ejemplo de su vida,"
          },
          {
            "sp_es": "",
            "text_es": "la ayuda de su intercesión"
          },
          {
            "sp_es": "",
            "text_es": "y la participación en su destino,"
          },
          {
            "sp_es": "",
            "text_es": "para que, animados por su presencia alentadora,"
          },
          {
            "sp_es": "",
            "text_es": "luchemos sin desfallecer en la carrera"
          },
          {
            "sp_es": "",
            "text_es": "y alcancemos, como ellos,"
          },
          {
            "sp_es": "",
            "text_es": "la corona de gloria que no se marchita,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con los ángeles y arcángeles"
          },
          {
            "sp_es": "",
            "text_es": "y con la multitud de los santos,"
          },
          {
            "sp_es": "",
            "text_es": "cantamos sin cesar"
          },
          {
            "sp_es": "",
            "text_es": "el himno de alabanza:"
          }
        ]
      },
      "saints_2": {
        "title": {
          "es": "PREFACIO II DE LOS SANTOS — EFICACIA DE LA ACCIÓN DE LOS SANTOS"
        },
        "content": [
          {
            "rubric_es": "67. Este prefacio se dice en las misas de «Todos los Santos», de los santos Patronos y"
          },
          {
            "rubric_es": "Titulares de la iglesia, y en las solemnidades y fiestas de los Santos, a no ser que haya que"
          },
          {
            "rubric_es": "decir un prefacio más propio. Se puede decir también en las memorias de los Santos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Porque mediante el testimonio admirable de tus santos"
          },
          {
            "sp_es": "",
            "text_es": "fecundas sin cesar a tu Iglesia"
          },
          {
            "sp_es": "",
            "text_es": "con vitalidad siempre nueva,"
          },
          {
            "sp_es": "",
            "text_es": "dándonos así pruebas evidentes de tu amor."
          },
          {
            "sp_es": "",
            "text_es": "Ellos nos estimulan con su ejemplo"
          },
          {
            "sp_es": "",
            "text_es": "en el camino de la vida"
          },
          {
            "sp_es": "",
            "text_es": "y nos ayudan con su intercesión."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "ahora, nosotros, llenos de alegría,"
          },
          {
            "sp_es": "",
            "text_es": "te aclamamos con los ángeles y los santos"
          },
          {
            "sp_es": "",
            "text_es": "diciendo:"
          }
        ]
      },
      "martyrs": {
        "title": {
          "es": "PREFACIO I DE LOS SANTOS MÁRTIRES — SIGNIFICADO Y EJEMPLARIDAD DEL MARTIRIO"
        },
        "content": [
          {
            "rubric_es": "68. Este prefacio se dice en las solemnidades y fiestas de los santos Mártires. Se puede"
          },
          {
            "rubric_es": "decir también en las memorias de los mismos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque la sangre del glorioso mártir san (santa) N.,"
          },
          {
            "sp_es": "",
            "text_es": "derramada, como la de Cristo,"
          },
          {
            "sp_es": "",
            "text_es": "para confesar tu nombre,"
          },
          {
            "sp_es": "",
            "text_es": "manifiesta las maravillas de tu poder;"
          },
          {
            "sp_es": "",
            "text_es": "pues en su martirio, Señor,"
          },
          {
            "sp_es": "",
            "text_es": "has sacado fuerza de lo débil,"
          },
          {
            "sp_es": "",
            "text_es": "haciendo de la fragilidad"
          },
          {
            "sp_es": "",
            "text_es": "tu propio testimonio;"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "como los ángeles te cantan en el cielo,"
          },
          {
            "sp_es": "",
            "text_es": "así nosotros en la tierra te aclamamos"
          },
          {
            "sp_es": "",
            "text_es": "diciendo sin cesar:"
          }
        ]
      },
      "martyrs_2": {
        "title": {
          "es": "PREFACIO II DE LOS SANTOS MÁRTIRES — SIGNIFICADO Y EJEMPLARIDAD DEL MARTIRIO"
        },
        "content": [
          {
            "rubric_es": "69. Este prefacio se dice en las solemnidades y fiestas de los santos Mártires. Se puede"
          },
          {
            "rubric_es": "decir también en las memorias de los mismos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque al alabar nosotros a los santos mártires,"
          },
          {
            "sp_es": "",
            "text_es": "tu eres glorificado"
          },
          {
            "sp_es": "",
            "text_es": "ya que todo lo que concierne a su pasión"
          },
          {
            "sp_es": "",
            "text_es": "es obra admirable de tu poder."
          },
          {
            "sp_es": "",
            "text_es": "En efecto, tu misericordiosamente"
          },
          {
            "sp_es": "",
            "text_es": "les proporcionas el ardor de la fe,"
          },
          {
            "sp_es": "",
            "text_es": "tu les otorgas la firmeza de la perseverancia"
          },
          {
            "sp_es": "",
            "text_es": "y les concedes la victoria en la batalla,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, tus creaturas del cielo y de la tierra"
          },
          {
            "sp_es": "",
            "text_es": "te adoran cantando un cántico nuevo,"
          },
          {
            "sp_es": "",
            "text_es": "y nosotros con todos los coros de los ángeles,"
          },
          {
            "sp_es": "",
            "text_es": "proclamamos tu gloria diciendo:"
          }
        ]
      },
      "pastors": {
        "title": {
          "es": "PREFACIO DE LOS SANTOS PASTORES — LA PRESENCIA DE LOS SANTOS PASTORES EN LA IGLESIA"
        },
        "content": [
          {
            "rubric_es": "70. Este prefacio se dice en las solemnidades y fiestas de los santos Pastores. Se puede"
          },
          {
            "rubric_es": "decir también en las memorias de los mismos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre Santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Porque nos concedes la alegría"
          },
          {
            "sp_es": "",
            "text_es": "de celebrar hoy la fiesta de san N.,"
          },
          {
            "sp_es": "",
            "text_es": "fortaleciendo a tu Iglesia"
          },
          {
            "sp_es": "",
            "text_es": "con el ejemplo de su vida,"
          },
          {
            "sp_es": "",
            "text_es": "instruyéndola con su palabra"
          },
          {
            "sp_es": "",
            "text_es": "y protegiéndola con su intercesión."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con los ángeles y los santos,"
          },
          {
            "sp_es": "",
            "text_es": "te cantamos el himno de alabanza"
          },
          {
            "sp_es": "",
            "text_es": "diciendo sin cesar:"
          }
        ]
      },
      "virgins_and_religious": {
        "title": {
          "es": "PREFACIO DE SANTAS VÍRGENES Y RELIGIOSOS — SIGNIFICADO DE LA VIDA CONSAGRADA EXCLUSIVA A DIOS"
        },
        "content": [
          {
            "rubric_es": "71. Este prefacio se dice en las solemnidades y fiestas de las santas Vírgenes y de los"
          },
          {
            "rubric_es": "santos Religiosos. Se puede decir también en las memorias de los mismos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "que te alaben, Señor,"
          },
          {
            "sp_es": "",
            "text_es": "tus criaturas del cielo y de la tierra,"
          },
          {
            "sp_es": "",
            "text_es": "y, al recordar a los santos"
          },
          {
            "sp_es": "",
            "text_es": "que por el reino de los cielos se consagraron a Cristo,"
          },
          {
            "sp_es": "",
            "text_es": "celebremos la grandeza de tus designios."
          },
          {
            "sp_es": "",
            "text_es": "En ellos recobra el hombre"
          },
          {
            "sp_es": "",
            "text_es": "la santidad primera, que de ti había recibido,"
          },
          {
            "sp_es": "",
            "text_es": "y gusta ya en la tierra"
          },
          {
            "sp_es": "",
            "text_es": "los dones reservados para el cielo."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con todos los ángeles y santos,"
          },
          {
            "sp_es": "",
            "text_es": "te alabamos, proclamando sin cesar:"
          }
        ]
      },
      "common_1": {
        "title": {
          "es": "PREFACIO COMÚN I — EL UNIVERSO RESTAURADO EN CRISTO"
        },
        "content": [
          {
            "rubric_es": "72. Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar"
          },
          {
            "rubric_es": "un prefacio del tiempo."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "A quien hiciste fundamento de todo"
          },
          {
            "sp_es": "",
            "text_es": "y de cuya plenitud quisiste que participáramos todos."
          },
          {
            "sp_es": "",
            "text_es": "Siendo él de condición divina"
          },
          {
            "sp_es": "",
            "text_es": "se despojó de su rango,"
          },
          {
            "sp_es": "",
            "text_es": "y por su sangre derramada en la cruz"
          },
          {
            "sp_es": "",
            "text_es": "puso en paz todas las cosas;"
          },
          {
            "sp_es": "",
            "text_es": "y así, constituido Señor del universo,"
          },
          {
            "sp_es": "",
            "text_es": "es fuente de salvación eterna"
          },
          {
            "sp_es": "",
            "text_es": "para cuantos creen en él."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con los ángeles y arcángeles"
          },
          {
            "sp_es": "",
            "text_es": "y con todos los coros celestiales,"
          },
          {
            "sp_es": "",
            "text_es": "cantamos sin cesar"
          },
          {
            "sp_es": "",
            "text_es": "el himno de tu gloria:"
          }
        ]
      },
      "common_2": {
        "title": {
          "es": "PREFACIO COMÚN II — LA SALVACIÓN POR CRISTO"
        },
        "content": [
          {
            "rubric_es": "73. Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar"
          },
          {
            "rubric_es": "un prefacio del tiempo."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "que por amor creaste al hombre,"
          },
          {
            "sp_es": "",
            "text_es": "y, aunque condenado justamente,"
          },
          {
            "sp_es": "",
            "text_es": "con tu misericordia lo redimiste,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Por él,"
          },
          {
            "sp_es": "",
            "text_es": "los ángeles y los arcángeles"
          },
          {
            "sp_es": "",
            "text_es": "y todos los coros celestiales"
          },
          {
            "sp_es": "",
            "text_es": "celebran tu gloria,"
          },
          {
            "sp_es": "",
            "text_es": "unidos en común alegría."
          },
          {
            "sp_es": "",
            "text_es": "Permítenos asociarnos a sus voces"
          },
          {
            "sp_es": "",
            "text_es": "cantando humildemente tu alabanza:"
          }
        ]
      },
      "common_3": {
        "title": {
          "es": "PREFACIO COMÚN III — ALABANZA A DIOS QUE NOS CREÓ Y NOS HA REDIMIDO EN CRISTO"
        },
        "content": [
          {
            "rubric_es": "74. Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar"
          },
          {
            "rubric_es": "un prefacio del tiempo."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque has querido ser,"
          },
          {
            "sp_es": "",
            "text_es": "por medio de tu amado Hijo,"
          },
          {
            "sp_es": "",
            "text_es": "no sólo el creador del género humano,"
          },
          {
            "sp_es": "",
            "text_es": "sino también el autor generoso"
          },
          {
            "sp_es": "",
            "text_es": "de la nueva creación."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con razón te sirven todas las criaturas,"
          },
          {
            "sp_es": "",
            "text_es": "con justicia te alaban todos los redimidos"
          },
          {
            "sp_es": "",
            "text_es": "y unánimes te bendicen tus santos."
          },
          {
            "sp_es": "",
            "text_es": "Con ellos, unidos a los ángeles,"
          },
          {
            "sp_es": "",
            "text_es": "nosotros queremos celebrarte"
          },
          {
            "sp_es": "",
            "text_es": "y te alabamos diciendo:"
          }
        ]
      },
      "common_4": {
        "title": {
          "es": "PREFACIO COMÚN IV — NUESTRA MISMA ACCIÓN DE GRACIAS ES UN DON DE DIOS"
        },
        "content": [
          {
            "rubric_es": "75. Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar"
          },
          {
            "rubric_es": "un prefacio del tiempo."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Pues aunque no necesitas nuestra alabanza,"
          },
          {
            "sp_es": "",
            "text_es": "ni nuestras bendiciones te enriquecen,"
          },
          {
            "sp_es": "",
            "text_es": "tú inspiras y haces tuya nuestra acción de gracias,"
          },
          {
            "sp_es": "",
            "text_es": "para que nos sirva de salvación,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "A quien alaban los ángeles y los arcángeles,"
          },
          {
            "sp_es": "",
            "text_es": "proclamando sin cesar:"
          }
        ]
      },
      "common_5": {
        "title": {
          "es": "PREFACIO COMÚN V — PROCLAMACIÓN DEL MISTERIO DE CRISTO"
        },
        "content": [
          {
            "rubric_es": "76. Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar"
          },
          {
            "rubric_es": "un prefacio del tiempo."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación,"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Porque, unidos en la caridad,"
          },
          {
            "sp_es": "",
            "text_es": "celebramos la muerte de tu Hijo,"
          },
          {
            "sp_es": "",
            "text_es": "con fe viva proclamamos su resurrección,"
          },
          {
            "sp_es": "",
            "text_es": "y con esperanza firme anhelamos su venida gloriosa."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con todos los ángeles y santos,"
          },
          {
            "sp_es": "",
            "text_es": "te alabamos, proclamando sin cesar:"
          }
        ]
      },
      "common_6": {
        "title": {
          "es": "PREFACIO COMÚN VI — EL MISTERIO DE LA SALVACIÓN EN CRISTO"
        },
        "content": [
          {
            "rubric_es": "77. Este prefacio, tomado de la Plegaria eucarística II, se dice en las misas que carecen de"
          },
          {
            "rubric_es": "prefacio propio y no deben tomar un prefacio del tiempo."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación,"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "por Jesucristo, tu Hijo amado."
          },
          {
            "sp_es": "",
            "text_es": "Por él, que es tu palabra, hiciste todas las cosas;"
          },
          {
            "sp_es": "",
            "text_es": "tú nos lo enviaste"
          },
          {
            "sp_es": "",
            "text_es": "para que, hecho hombre por obra del Espíritu Santo"
          },
          {
            "sp_es": "",
            "text_es": "y nacido de María la Virgen,"
          },
          {
            "sp_es": "",
            "text_es": "fuera nuestro Salvador y Redentor."
          },
          {
            "sp_es": "",
            "text_es": "Él, en cumplimiento de tu voluntad,"
          },
          {
            "sp_es": "",
            "text_es": "para destruir la muerte"
          },
          {
            "sp_es": "",
            "text_es": "y manifestar la resurrección,"
          },
          {
            "sp_es": "",
            "text_es": "extendió sus brazos en la cruz,"
          },
          {
            "sp_es": "",
            "text_es": "y así adquirió para ti un pueblo santo."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con los ángeles y los santos,"
          },
          {
            "sp_es": "",
            "text_es": "cantamos tu gloria diciendo:"
          }
        ]
      },
      "common_7": {
        "title": {
          "es": "PREFACIO COMÚN VII — CRISTO, HUÉSPED Y PEREGRINO EN MEDIO DE NOSOTROS"
        },
        "content": [
          {
            "rubric_es": "Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar un"
          },
          {
            "rubric_es": "prefacio del tiempo."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo darte gracias,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios de la alianza y de la paz."
          },
          {
            "sp_es": "",
            "text_es": "Porque tú llamaste a Abrahán"
          },
          {
            "sp_es": "",
            "text_es": "y le mandaste salir de su tierra,"
          },
          {
            "sp_es": "",
            "text_es": "para constituirlo padre de todas las naciones."
          },
          {
            "sp_es": "",
            "text_es": "Tú suscitaste a Moisés para librar a tu pueblo"
          },
          {
            "sp_es": "",
            "text_es": "y guiarlo a la tierra de promisión."
          },
          {
            "sp_es": "",
            "text_es": "Tú, en la etapa final de la historia,"
          },
          {
            "sp_es": "",
            "text_es": "has enviado a tu Hijo,"
          },
          {
            "sp_es": "",
            "text_es": "como huésped y peregrino en medio de nosotros,"
          },
          {
            "sp_es": "",
            "text_es": "para redimirnos del pecado y de la muerte;"
          },
          {
            "sp_es": "",
            "text_es": "y has derramado el Espíritu,"
          },
          {
            "sp_es": "",
            "text_es": "para hacer de todas las naciones un solo pueblo nuevo,"
          },
          {
            "sp_es": "",
            "text_es": "que tiene como meta, tu reino,"
          },
          {
            "sp_es": "",
            "text_es": "como estado, la libertad de tus hijos,"
          },
          {
            "sp_es": "",
            "text_es": "como ley, el precepto del amor."
          },
          {
            "sp_es": "",
            "text_es": "Por estos dones de tu benevolencia,"
          },
          {
            "sp_es": "",
            "text_es": "unidos a los ángeles y a los santos,"
          },
          {
            "sp_es": "",
            "text_es": "cantamos con gozo el himno de tu gloría:"
          }
        ]
      },
      "common_8": {
        "title": {
          "es": "PREFACIO COMÚN VIII — JESÚS, BUEN SAMARITANO"
        },
        "content": [
          {
            "rubric_es": "Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar un"
          },
          {
            "rubric_es": "prefacio del tiempo. Especialmente es recomendable usarlo en el domingo✠V del"
          },
          {
            "rubric_es": "tiempo ordinario del año C y el lunes de la semana✠XVII del tiempo ordinario."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "y deber nuestro alabarte,"
          },
          {
            "sp_es": "",
            "text_es": "Padre santo, Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "en todos los momentos y circunstancias de la vida,"
          },
          {
            "sp_es": "",
            "text_es": "en la salud y en la enfermedad,"
          },
          {
            "sp_es": "",
            "text_es": "en el sufrimiento y en el gozo,"
          },
          {
            "sp_es": "",
            "text_es": "por tu siervo, Jesús, nuestro Redentor."
          },
          {
            "sp_es": "",
            "text_es": "Porque él, en su vida terrena, pasó haciendo el bien"
          },
          {
            "sp_es": "",
            "text_es": "y curando a los oprimidos por el mal."
          },
          {
            "sp_es": "",
            "text_es": "También hoy, como buen samaritano,"
          },
          {
            "sp_es": "",
            "text_es": "se acerca a todo hombre"
          },
          {
            "sp_es": "",
            "text_es": "que sufre en su cuerpo o en su espíritu,"
          },
          {
            "sp_es": "",
            "text_es": "y cura sus heridas con el aceite del consuelo"
          },
          {
            "sp_es": "",
            "text_es": "y el vino de la esperanza."
          },
          {
            "sp_es": "",
            "text_es": "Por este don de tu gracia,"
          },
          {
            "sp_es": "",
            "text_es": "incluso cuando nos vemos sumergidos en la noche del dolor,"
          },
          {
            "sp_es": "",
            "text_es": "vislumbramos la luz pascual"
          },
          {
            "sp_es": "",
            "text_es": "en tu Hijo, muerto y resucitado."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "unidos a los ángeles y santos,"
          },
          {
            "sp_es": "",
            "text_es": "cantamos a una voz"
          },
          {
            "sp_es": "",
            "text_es": "el himno de tu gloria:"
          }
        ]
      },
      "common_9": {
        "title": {
          "es": "PREFACIO COMÚN IX — LA GLORIA DE DIOS ES EL HOMBRE VIVIENTE"
        },
        "content": [
          {
            "rubric_es": "Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar un"
          },
          {
            "rubric_es": "prefacio del tiempo."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Tú eres el Dios vivo y verdadero;"
          },
          {
            "sp_es": "",
            "text_es": "el universo está lleno de tu presencia,"
          },
          {
            "sp_es": "",
            "text_es": "pero sobre todo"
          },
          {
            "sp_es": "",
            "text_es": "has dejado la huella de tu gloria"
          },
          {
            "sp_es": "",
            "text_es": "en el hombre creado a tu imagen."
          },
          {
            "sp_es": "",
            "text_es": "Tú lo llamas a cooperar con el trabajo cotidiano"
          },
          {
            "sp_es": "",
            "text_es": "en el proyecto de la creación"
          },
          {
            "sp_es": "",
            "text_es": "y le das tu Espíritu"
          },
          {
            "sp_es": "",
            "text_es": "para que sea artífice de justicia y de paz,"
          },
          {
            "sp_es": "",
            "text_es": "en Cristo, el hombre nuevo."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "unidos a los ángeles y a los santos,"
          },
          {
            "sp_es": "",
            "text_es": "cantamos con alegría"
          },
          {
            "sp_es": "",
            "text_es": "el himno de tu alabanza:"
          }
        ]
      },
      "dead_1": {
        "title": {
          "es": "PREFACIO I DE DIFUNTOS — LA ESPERANZA DE LA RESURRECCIÓN EN CRISTO"
        },
        "content": [
          {
            "rubric_es": "78. Este prefacio se dice en las misas de difuntos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "En él brilla la esperanza"
          },
          {
            "sp_es": "",
            "text_es": "de nuestra feliz resurrección;"
          },
          {
            "sp_es": "",
            "text_es": "y así,"
          },
          {
            "sp_es": "",
            "text_es": "aunque la certeza de morir nos entristece,"
          },
          {
            "sp_es": "",
            "text_es": "nos consuela la promesa"
          },
          {
            "sp_es": "",
            "text_es": "de la futura inmortalidad."
          },
          {
            "sp_es": "",
            "text_es": "Porque la vida de los que en ti creemos, Señor,"
          },
          {
            "sp_es": "",
            "text_es": "no termina, se transforma;"
          },
          {
            "sp_es": "",
            "text_es": "y, al deshacerse nuestra morada terrenal,"
          },
          {
            "sp_es": "",
            "text_es": "adquirimos una mansión eterna en el cielo."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "con los ángeles y arcángeles"
          },
          {
            "sp_es": "",
            "text_es": "y con todos los coros celestiales,"
          },
          {
            "sp_es": "",
            "text_es": "cantamos sin cesar el himno de tu gloria:"
          }
        ]
      },
      "dead_2": {
        "title": {
          "es": "PREFACIO II DE DIFUNTOS — CRISTO HA MUERTO PARA NUESTRA VIDA"
        },
        "content": [
          {
            "rubric_es": "79. Este prefacio se dice en las misas de difuntos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Porque él aceptó la muerte, uno por todos,"
          },
          {
            "sp_es": "",
            "text_es": "para librarnos del morir eterno;"
          },
          {
            "sp_es": "",
            "text_es": "es más, quiso entregar su vida"
          },
          {
            "sp_es": "",
            "text_es": "para que todos tuviéramos vida eterna."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "unidos a los coros angélicos,"
          },
          {
            "sp_es": "",
            "text_es": "te aclamamos llenos de alegría:"
          }
        ]
      },
      "dead_3": {
        "title": {
          "es": "PREFACIO III DE DIFUNTOS — CRISTO, SALVACIÓN Y VIDA"
        },
        "content": [
          {
            "rubric_es": "80. Este prefacio se dice en las misas de difuntos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno,"
          },
          {
            "sp_es": "",
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Porque él es la salvación del mundo,"
          },
          {
            "sp_es": "",
            "text_es": "la vida de los hombres,"
          },
          {
            "sp_es": "",
            "text_es": "la resurrección de los muertos."
          },
          {
            "sp_es": "",
            "text_es": "Por él,"
          },
          {
            "sp_es": "",
            "text_es": "los ángeles te cantan con júbilo eterno"
          },
          {
            "sp_es": "",
            "text_es": "y nosotros nos unimos a sus voces"
          },
          {
            "sp_es": "",
            "text_es": "cantando humildemente tu alabanza:"
          }
        ]
      },
      "dead_4": {
        "title": {
          "es": "PREFACIO IV DE DIFUNTOS — LA VIDA TERRENA Y LA GLORIA CELESTE"
        },
        "content": [
          {
            "rubric_es": "81. Este prefacio se dice en las misas de difuntos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "sp_es": "",
            "text_es": "es nuestro deber y salvación"
          },
          {
            "sp_es": "",
            "text_es": "darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "siempre y en todo lugar,"
          },
          {
            "sp_es": "",
            "text_es": "Señor, Padre santo,"
          },
          {
            "sp_es": "",
            "text_es": "Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque tu voluntad nos da la vida,"
          },
          {
            "sp_es": "",
            "text_es": "tus decretos la dirigen"
          },
          {
            "sp_es": "",
            "text_es": "y un mandato tuyo,"
          },
          {
            "sp_es": "",
            "text_es": "en castigo del pecado,"
          },
          {
            "sp_es": "",
            "text_es": "nos devuelve a la tierra"
          },
          {
            "sp_es": "",
            "text_es": "de la que habíamos sido sacados."
          },
          {
            "sp_es": "",
            "text_es": "Y también te damos gracias"
          },
          {
            "sp_es": "",
            "text_es": "porque, al redimirnos con la muerte de tu Hijo Jesucristo,"
          },
          {
            "sp_es": "",
            "text_es": "por tu voluntad salvadora"
          },
          {
            "sp_es": "",
            "text_es": "nos llevas a nueva vida"
          },
          {
            "sp_es": "",
            "text_es": "para que tengamos parte en su gloriosa resurrección."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "como los ángeles te cantan en el cielo,"
          },
          {
            "sp_es": "",
            "text_es": "así nosotros en la tierra"
          },
          {
            "sp_es": "",
            "text_es": "te aclamamos diciendo sin cesar:"
          }
        ]
      },
      "dead_5": {
        "title": {
          "es": "PREFACIO V DE DIFUNTOS — NUESTRA RESURRECCIÓN POR MEDIO DE LA VICTORIA DE CRISTO"
        },
        "content": [
          {
            "rubric_es": "82. Este prefacio se dice en las misas de difuntos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo darte gracias"
          },
          {
            "sp_es": "",
            "text_es": "y deber nuestro glorificarte,"
          },
          {
            "sp_es": "",
            "text_es": "Padre santo."
          },
          {
            "sp_es": "",
            "text_es": "Porque si el morir se debe al hombre,"
          },
          {
            "sp_es": "",
            "text_es": "el ser llamados a la vida con Cristo"
          },
          {
            "sp_es": "",
            "text_es": "es obra gratuita de tu amor,"
          },
          {
            "sp_es": "",
            "text_es": "ya que, habiendo muerto por el pecado,"
          },
          {
            "sp_es": "",
            "text_es": "hemos sido redimidos por la victoria de tu Hijo."
          },
          {
            "sp_es": "",
            "text_es": "Por eso,"
          },
          {
            "sp_es": "",
            "text_es": "como los ángeles te cantan en el cielo,"
          },
          {
            "sp_es": "",
            "text_es": "así nosotros te proclamamos en la tierra,"
          },
          {
            "sp_es": "",
            "text_es": "diciendo sin cesar:"
          }
        ]
      },
      "spain_saint_james": {
        "title": {
          "es": "Prefacio de Santiago, apóstol"
        },
        "subtitle": {
          "es": "El patronazgo del Apóstol"
        },
        "source": {
          "url": "https://parroquiasdoloresyelcarmen.blogspot.com/2026/07/25-de-julio-sabado-de-la-xvi-semana-del.html"
        },
        "content": [
          {
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "text_es": "es nuestro deber y salvación"
          },
          {
            "text_es": "darte gracias siempre y en todo lugar, Señor,"
          },
          {
            "text_es": "Padre santo, Dios todopoderoso, Pastor eterno."
          },
          {
            "text_es": "Porque Santiago, testigo predilecto,"
          },
          {
            "text_es": "anunció el reino que viene por la muerte y resurrección de tu Hijo,"
          },
          {
            "text_es": "y, el primero entre los apóstoles, bebió el cáliz del Señor:"
          },
          {
            "text_es": "con su guía y patrocinio se conserva la fe en España y en los pueblos hermanos"
          },
          {
            "text_es": "y se dilata por toda la tierra,"
          },
          {
            "text_es": "mientras tu apóstol alienta a los que peregrinan para que lleguen finalmente a ti,"
          },
          {
            "text_es": "por Cristo, Señor nuestro."
          },
          {
            "text_es": "Por eso, Señor, con todos los ángeles"
          },
          {
            "text_es": "te alabamos ahora y por siempre,"
          },
          {
            "text_es": "diciendo con humilde fe:"
          }
        ]
      },
      "immaculate_conception": {
        "title": {
          "es": "Prefacio de la Inmaculada Concepción"
        },
        "subtitle": {
          "es": "El misterio de María y de la Iglesia"
        },
        "source": {
          "url": "https://parroquiasdoloresyelcarmen.blogspot.com/2025/12/08-de-diciembre-lunes-de-la-ii-semana.html?m=0"
        },
        "content": [
          {
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "text_es": "es nuestro deber y salvación"
          },
          {
            "text_es": "darte gracias siempre y en todo lugar,"
          },
          {
            "text_es": "Señor, Padre santo, Dios todopoderoso y eterno."
          },
          {
            "text_es": "Porque preservaste a la santísima Virgen María"
          },
          {
            "text_es": "de toda mancha de pecado original,"
          },
          {
            "text_es": "para preparar en ella, enriquecida con la plenitud de tu gracia,"
          },
          {
            "text_es": "la digna madre de tu Hijo,"
          },
          {
            "text_es": "y mostrar el comienzo de la Iglesia, su bella esposa, sin mancha ni arruga."
          },
          {
            "text_es": "Purísima había de ser la Virgen que nos diera al Cordero inocente"
          },
          {
            "text_es": "que quita el pecado del mundo."
          },
          {
            "text_es": "Purísima la que destinabas entre todos, para tu pueblo,"
          },
          {
            "text_es": "como abogada de gracia, y ejemplo de santidad."
          },
          {
            "text_es": "Por eso, unidos a los coros de los ángeles,"
          },
          {
            "text_es": "te alabamos proclamando llenos de alegría:"
          }
        ]
      },
      "all_saints": {
        "title": {
          "es": "Prefacio de Todos los Santos"
        },
        "subtitle": {
          "es": "La gloria de nuestra madre Jerusalén"
        },
        "source": {
          "url": "https://parroquiasdoloresyelcarmen.blogspot.com/2025/10/01-de-noviembre-sabado-de-la-xxx-semana.html?m=0"
        },
        "content": [
          {
            "text_es": "En verdad es justo y necesario,"
          },
          {
            "text_es": "es nuestro deber y salvación"
          },
          {
            "text_es": "darte gracias siempre y en todo lugar,"
          },
          {
            "text_es": "Señor, Padre santo, Dios todopoderoso y eterno."
          },
          {
            "text_es": "Porque hoy nos concedes celebrar a la ciudad santa,"
          },
          {
            "text_es": "la Jerusalén celeste, que es nuestra madre,"
          },
          {
            "text_es": "donde eternamente ya te alaba"
          },
          {
            "text_es": "la corona de nuestros hermanos."
          },
          {
            "text_es": "Hacia ella,"
          },
          {
            "text_es": "como peregrinos guiados por la fe,"
          },
          {
            "text_es": "nos apresuramos jubilosos,"
          },
          {
            "text_es": "compartiendo la alegría"
          },
          {
            "text_es": "por la glorificación de los mejores miembros de la Iglesia,"
          },
          {
            "text_es": "en la que nos concedes también ayuda y ejemplo"
          },
          {
            "text_es": "para nuestra debilidad."
          },
          {
            "text_es": "Por eso,"
          },
          {
            "text_es": "con la muchedumbre de los santos y de los ángeles"
          },
          {
            "text_es": "proclamamos tu grandeza y te alabamos"
          },
          {
            "text_es": "clamando a una sola voz:"
          }
        ]
      }
    },
    "forms": {
      "1": [
        {
          "rubric_es": "84. El sacerdote, con las manos extendidas, dice:"
        },
        {
          "sp_es": "CP",
          "text_es": "P adre misericordioso,"
        },
        {
          "sp_es": "",
          "text_es": "te pedimos humildemente"
        },
        {
          "sp_es": "",
          "text_es": "por Jesucristo, tu Hijo, nuestro Señor,"
        },
        {
          "rubric_es": "Junta las manos y dice:"
        },
        {
          "sp_es": "",
          "text_es": "que aceptes y bendigas"
        },
        {
          "rubric_es": "Traza, una sola vez, el signo de la cruz sobre el pan y el cáliz conjuntamente,"
        },
        {
          "rubric_es": "diciendo:"
        },
        {
          "sp_es": "",
          "text_es": "estos ✠ dones,"
        },
        {
          "sp_es": "",
          "text_es": "este sacrificio santo y puro que te ofrecemos,"
        },
        {
          "rubric_es": "Con las manos extendidas, prosigue:"
        },
        {
          "sp_es": "",
          "text_es": "ante todo, por tu Iglesia santa y católica,"
        },
        {
          "sp_es": "",
          "text_es": "para que le concedas la paz, la protejas,"
        },
        {
          "sp_es": "",
          "text_es": "la congregues en la unidad"
        },
        {
          "sp_es": "",
          "text_es": "y la gobiernes en el mundo entero,"
        },
        {
          "sp_es": "",
          "text_es": "con tu servidor el Papa N.,"
        },
        {
          "sp_es": "",
          "text_es": "con nuestro obispo N.,"
        },
        {
          "rubric_es": "Puede hacerse mención de los Obispos coadjutores o auxiliares."
        },
        {
          "rubric_es": "El Obispo, cuando celebra en su diócesis, dice:"
        },
        {
          "sp_es": "",
          "text_es": "conmigo, indigno siervo tuyo,"
        },
        {
          "rubric_es": "Cuando celebra un Obispo que no es el ordinario diocesano, dice:"
        },
        {
          "sp_es": "",
          "text_es": "con mi hermano N., Obispo de esta Iglesia de N.,"
        },
        {
          "sp_es": "",
          "text_es": "conmigo, indigno siervo tuyo,"
        },
        {
          "sp_es": "",
          "text_es": "y todos los demás Obispos que, fieles a la verdad,"
        },
        {
          "sp_es": "",
          "text_es": "promueven la fe católica y apostólica."
        },
        {
          "rubric_es": "85. Conmemoración de los vivos"
        },
        {
          "rubric_es": "A"
        },
        {
          "sp_es": "",
          "text_es": "cuérdate, Señor, de tus hijos N. y N."
        },
        {
          "rubric_es": "Puede decir los nombres de aquellos por quienes tiene intención de orar, o bien"
        },
        {
          "rubric_es": "junta las manos y ora por ellos unos momentos. Después, con las manos"
        },
        {
          "rubric_es": "extendidas, prosigue:"
        },
        {
          "sp_es": "C1",
          "text_es": "y de todos los aquí reunidos,"
        },
        {
          "sp_es": "",
          "text_es": "cuya fe y entrega bien conoces;"
        },
        {
          "sp_es": "",
          "text_es": "por ellos y todos los suyos,"
        },
        {
          "sp_es": "",
          "text_es": "por el perdón de sus pecados"
        },
        {
          "sp_es": "",
          "text_es": "y la salvación que esperan,"
        },
        {
          "sp_es": "",
          "text_es": "te ofrecemos, y ellos mismos te ofrecen,"
        },
        {
          "sp_es": "",
          "text_es": "este sacrificio de alabanza, a ti,"
        },
        {
          "sp_es": "",
          "text_es": "eterno Dios, vivo y verdadero."
        },
        {
          "rubric_es": "86. Conmemoración de los santos"
        },
        {
          "rubric_es": "R"
        },
        {
          "sp_es": "",
          "text_es": "eunidos en comunión con toda la Iglesia,"
        },
        {
          "sp_es": "C2",
          "text_es": "veneramos la memoria,"
        },
        {
          "sp_es": "",
          "text_es": "ante todo, de la gloriosa siempre Virgen María,"
        },
        {
          "sp_es": "",
          "text_es": "Madre de Jesucristo, nuestro Dios y Señor;*"
        },
        {
          "sp_es": "",
          "text_es": "la de su esposo, San José; la de los santos apóstoles y"
        },
        {
          "sp_es": "",
          "text_es": "mártires"
        },
        {
          "sp_es": "",
          "text_es": "Pedro y Pablo, Andrés,"
        },
        {
          "sp_es": "",
          "text_es": "[Santiago y Juan,"
        },
        {
          "sp_es": "",
          "text_es": "Tomás, Santiago y Felipe,"
        },
        {
          "sp_es": "",
          "text_es": "Bartolomé, Mateo, Simón y Tadeo;"
        },
        {
          "sp_es": "",
          "text_es": "Lino, Cleto, Clemente,"
        },
        {
          "sp_es": "",
          "text_es": "Sixto, Cornelio, Cipriano,"
        },
        {
          "sp_es": "",
          "text_es": "Lorenzo, Crisógono,"
        },
        {
          "sp_es": "",
          "text_es": "Juan y Pablo,"
        },
        {
          "sp_es": "",
          "text_es": "Cosme y Damián,]"
        },
        {
          "sp_es": "",
          "text_es": "y la de todos los santos;"
        },
        {
          "sp_es": "",
          "text_es": "por sus méritos y oraciones"
        },
        {
          "sp_es": "",
          "text_es": "concédenos en todo tu protección."
        },
        {
          "sp_es": "",
          "text_es": "[Por Cristo nuestro Señor. Amén.]"
        },
        {
          "rubric_es": "REUNIDOS EN COMUNIÓN PROPIOS"
        },
        {
          "rubric_es": "En los domingos, cuando no hay otro Reunidos en comunión propio:"
        },
        {
          "rubric_es": "Reunidos en comunión con toda la Iglesia, para celebrar el domingo, día en que"
        },
        {
          "sp_es": "",
          "text_es": "Cristo ha vencido a la muerte y nos ha hecho partícipes de su vida inmortal,"
        },
        {
          "sp_es": "",
          "text_es": "veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de"
        },
        {
          "sp_es": "",
          "text_es": "Jesucristo, nuestro Dios y Señor;*"
        },
        {
          "rubric_es": "En la Natividad del Señor y durante su octava:"
        },
        {
          "rubric_es": "Reunidos en comunión con toda la Iglesia para celebrar (la noche santa) el día"
        },
        {
          "sp_es": "",
          "text_es": "santo en que la Virgen María, conservando intacta su virginidad, dio a luz al"
        },
        {
          "sp_es": "",
          "text_es": "Salvador del mundo, veneramos la memoria, ante todo, de esta gloriosa siempre"
        },
        {
          "sp_es": "",
          "text_es": "Virgen María, Madre de Jesucristo, nuestro Dios y Señor;*"
        },
        {
          "rubric_es": "En la Epifanía del Señor:"
        },
        {
          "rubric_es": "Reunidos en comunión con toda la Iglesia para celebrar el día santo en que tu único"
        },
        {
          "sp_es": "",
          "text_es": "Hijo, eterno como tú en la gloria, se manifestó en la verdad de nuestra carne, hecho"
        },
        {
          "sp_es": "",
          "text_es": "hombre como nosotros, veneramos la memoria, ante todo, de la gloriosa siempre"
        },
        {
          "sp_es": "",
          "text_es": "Virgen María, Madre de Jesucristo, nuestro Dios y Señor;*"
        },
        {
          "rubric_es": "En el Jueves Santo:"
        },
        {
          "rubric_es": "Reunidos en comunión con toda la Iglesia para celebrar el día santo en que nuestro"
        },
        {
          "sp_es": "",
          "text_es": "Señor Jesucristo fue entregado por nosotros, veneramos la memoria, ante todo,"
        },
        {
          "sp_es": "",
          "text_es": "de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor;*"
        },
        {
          "rubric_es": "Desde la misa de la Vigilia Pascual hasta el Segundo Domingo de Pascua:"
        },
        {
          "rubric_es": "Reunidos en comunión con toda la Iglesia para celebrar (la noche santa) el día"
        },
        {
          "sp_es": "",
          "text_es": "santo de la resurrección de nuestro Señor Jesucristo según la carne, veneramos la"
        },
        {
          "sp_es": "",
          "text_es": "memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo,"
        },
        {
          "sp_es": "",
          "text_es": "nuestro Dios y Señor;*"
        },
        {
          "rubric_es": "En la Ascensión del Señor:"
        },
        {
          "rubric_es": "Reunidos en comunión con toda la Iglesia para celebrar el día santo en que tu único"
        },
        {
          "sp_es": "",
          "text_es": "Hijo, nuestro Señor Jesucristo, habiendo tomado nuestra débil condición humana,"
        },
        {
          "sp_es": "",
          "text_es": "la exaltó a la derecha de tu gloria, veneramos la memoria, ante todo, de la gloriosa"
        },
        {
          "sp_es": "",
          "text_es": "siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor;*"
        },
        {
          "rubric_es": "En el Domingo de Pentecostés:"
        },
        {
          "rubric_es": "Reunidos en comunión con toda la Iglesia para celebrar el día de Pentecostés, en"
        },
        {
          "sp_es": "",
          "text_es": "que el Espíritu Santo se manifestó a los apóstoles en lenguas de fuego, veneramos"
        },
        {
          "sp_es": "",
          "text_es": "la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo,"
        },
        {
          "sp_es": "",
          "text_es": "nuestro Dios y Señor;*"
        },
        {
          "rubric_es": "87. Con las manos extendidas prosigue:"
        },
        {
          "rubric_es": "A"
        },
        {
          "sp_es": "",
          "text_es": "cepta, Señor, en tu bondad,"
        },
        {
          "sp_es": "CP",
          "text_es": "esta ofrenda de tus siervos"
        },
        {
          "sp_es": "",
          "text_es": "y de toda tu familia santa;"
        },
        {
          "sp_es": "",
          "text_es": "ordena en tu paz nuestros días,"
        },
        {
          "sp_es": "",
          "text_es": "líbranos de la condenación eterna"
        },
        {
          "sp_es": "",
          "text_es": "y cuéntanos entre tus elegidos."
        },
        {
          "rubric_es": "Junta las manos."
        },
        {
          "sp_es": "",
          "text_es": "[Por Cristo nuestro Señor. Amén.]"
        },
        {
          "rubric_es": "En el Jueves Santo durante la Misa Vespertina de la Cena del Señor:"
        },
        {
          "sp_es": "",
          "text_es": "Acepta, Señor, en tu bondad,"
        },
        {
          "sp_es": "",
          "text_es": "esta ofrenda de tus siervos"
        },
        {
          "sp_es": "",
          "text_es": "y de toda tu familia santa,"
        },
        {
          "sp_es": "",
          "text_es": "que te presentamos en el día mismo"
        },
        {
          "sp_es": "",
          "text_es": "en que nuestro Señor Jesucristo"
        },
        {
          "sp_es": "",
          "text_es": "encomendó a sus discípulos"
        },
        {
          "sp_es": "",
          "text_es": "la celebración del sacramento"
        },
        {
          "sp_es": "",
          "text_es": "de su Cuerpo y de su Sangre;"
        },
        {
          "sp_es": "",
          "text_es": "ordena en tu paz nuestros días,"
        },
        {
          "sp_es": "",
          "text_es": "líbranos de la condenación eterna"
        },
        {
          "sp_es": "",
          "text_es": "y cuéntanos entre tus elegidos."
        },
        {
          "sp_es": "",
          "text_es": "[Por Cristo, nuestro Señor. Amén.]"
        },
        {
          "rubric_es": "Desde la Misa de la Vigilia pascual hasta el segundo domingo de Pascua:"
        },
        {
          "sp_es": "",
          "text_es": "Acepta, Señor, en tu bondad,"
        },
        {
          "sp_es": "",
          "text_es": "esta ofrenda de tus siervos"
        },
        {
          "sp_es": "",
          "text_es": "y de toda tu familia santa,"
        },
        {
          "sp_es": "",
          "text_es": "por aquellos que has hecho"
        },
        {
          "sp_es": "",
          "text_es": "renacer del agua y del Espíritu Santo"
        },
        {
          "sp_es": "",
          "text_es": "perdonándoles todos sus pecados"
        },
        {
          "sp_es": "",
          "text_es": "ordena en tu paz nuestros días,"
        },
        {
          "sp_es": "",
          "text_es": "líbranos de la condenación eterna"
        },
        {
          "sp_es": "",
          "text_es": "y cuéntanos entre tus elegidos."
        },
        {
          "sp_es": "",
          "text_es": "[Por Cristo nuestro Señor. Amén.]"
        },
        {
          "rubric_es": "En la Misa del bautismo:"
        },
        {
          "sp_es": "",
          "text_es": "Acepta, Señor, en tu bondad,"
        },
        {
          "sp_es": "",
          "text_es": "esta ofrenda de tus siervos"
        },
        {
          "sp_es": "",
          "text_es": "y de toda tu familia santa,"
        },
        {
          "sp_es": "",
          "text_es": "que hoy te ofrecemos"
        },
        {
          "sp_es": "",
          "text_es": "especialmente por N. y N. (aquellos)"
        },
        {
          "sp_es": "",
          "text_es": "que has hecho renacer del agua y del Espíritu Santo,"
        },
        {
          "sp_es": "",
          "text_es": "perdonándoles todos sus pecados,"
        },
        {
          "sp_es": "",
          "text_es": "para incorporarlos a Cristo Jesús, Señor nuestro,"
        },
        {
          "sp_es": "",
          "text_es": "e inscribe sus nombres en el libro de la vida."
        },
        {
          "sp_es": "",
          "text_es": "[Por Cristo, nuestro Señor. Amén.]"
        },
        {
          "rubric_es": "En la Misa de confirmación:"
        },
        {
          "sp_es": "",
          "text_es": "Acepta, Señor, en tu bondad,"
        },
        {
          "sp_es": "",
          "text_es": "esta ofrenda de tus siervos"
        },
        {
          "sp_es": "",
          "text_es": "y de toda tu familia santa,"
        },
        {
          "sp_es": "",
          "text_es": "que hoy te ofrecemos"
        },
        {
          "sp_es": "",
          "text_es": "especialmente por N. y N. (aquellos)"
        },
        {
          "sp_es": "",
          "text_es": "que, renacidos en el bautismo,"
        },
        {
          "sp_es": "",
          "text_es": "han sido confirmados hoy"
        },
        {
          "sp_es": "",
          "text_es": "por el don del Espíritu Santo;"
        },
        {
          "sp_es": "",
          "text_es": "recíbela en tu bondad"
        },
        {
          "sp_es": "",
          "text_es": "y conserva en tus hijos"
        },
        {
          "sp_es": "",
          "text_es": "el don que les has dado."
        },
        {
          "sp_es": "",
          "text_es": "[Por Cristo, nuestro Señor. Amén.]"
        },
        {
          "rubric_es": "En la Misa de primera comunión:"
        },
        {
          "sp_es": "",
          "text_es": "Acepta, Señor, en tu bondad,"
        },
        {
          "sp_es": "",
          "text_es": "esta ofrenda de tus siervos"
        },
        {
          "sp_es": "",
          "text_es": "y de toda tu familia santa,"
        },
        {
          "sp_es": "",
          "text_es": "que hoy te ofrecemos"
        },
        {
          "sp_es": "",
          "text_es": "especialmente por N. y N. (aquellos)"
        },
        {
          "sp_es": "",
          "text_es": "que por vez primera invitas en este día"
        },
        {
          "sp_es": "",
          "text_es": "a participar del pan de vida y del cáliz de salvación,"
        },
        {
          "sp_es": "",
          "text_es": "en la mesa de tu familia;"
        },
        {
          "sp_es": "",
          "text_es": "concédeles crecer siempre en tu amistad"
        },
        {
          "sp_es": "",
          "text_es": "y en la comunión con tu Iglesia."
        },
        {
          "sp_es": "",
          "text_es": "[Por Cristo, nuestro Señor. Amén.]"
        },
        {
          "rubric_es": "En la Misa del matrimonio:"
        },
        {
          "sp_es": "",
          "text_es": "Acepta, Señor, en tu bondad,"
        },
        {
          "sp_es": "",
          "text_es": "esta ofrenda de tus siervos,"
        },
        {
          "sp_es": "",
          "text_es": "de los nuevos esposos N. y N."
        },
        {
          "sp_es": "",
          "text_es": "y de toda tu familia santa,"
        },
        {
          "sp_es": "",
          "text_es": "que hoy intercede por ellos;"
        },
        {
          "sp_es": "",
          "text_es": "y ya que les has concedido llegar"
        },
        {
          "sp_es": "",
          "text_es": "al día de los desposorios,"
        },
        {
          "sp_es": "",
          "text_es": "otórgales también (el gozo"
        },
        {
          "sp_es": "",
          "text_es": "de una ansiada descendencia"
        },
        {
          "sp_es": "",
          "text_es": "y de) una larga vida."
        },
        {
          "sp_es": "",
          "text_es": "[Por Cristo, nuestro Señor. Amén.]"
        },
        {
          "rubric_es": "En la Misa exequial:"
        },
        {
          "sp_es": "",
          "text_es": "Acepta, Señor, en tu bondad,"
        },
        {
          "sp_es": "",
          "text_es": "esta ofrenda de tus siervos,"
        },
        {
          "sp_es": "",
          "text_es": "que hoy te ofrecemos especialmente"
        },
        {
          "sp_es": "",
          "text_es": "por el descanso eterno de nuestro hermano N.,"
        },
        {
          "sp_es": "",
          "text_es": "pidiéndote que le concedas que,"
        },
        {
          "sp_es": "",
          "text_es": "libre ya de las ataduras de la carne,"
        },
        {
          "sp_es": "",
          "text_es": "tenga su parte entre tus santos."
        },
        {
          "sp_es": "",
          "text_es": "[Por Cristo, nuestro Señor. Amén.]"
        },
        {
          "rubric_es": "88. Extendiendo las manos sobre las ofrendas, dice:"
        },
        {
          "rubric_es": "B"
        },
        {
          "sp_es": "",
          "text_es": "endice y santifica, oh Padre, esta ofrenda"
        },
        {
          "sp_es": "CC",
          "text_es": "haciéndola perfecta, espiritual y digna de ti,"
        },
        {
          "sp_es": "",
          "text_es": "de manera que sea para nosotros"
        },
        {
          "sp_es": "",
          "text_es": "Cuerpo y Sangre de tu Hijo amado,"
        },
        {
          "sp_es": "",
          "text_es": "Jesucristo, nuestro Señor."
        },
        {
          "rubric_es": "Junta las manos."
        },
        {
          "rubric_es": "89. En las fórmulas que siguen, las palabras del Señor han de pronunciarse con"
        },
        {
          "rubric_es": "claridad, como lo requiere la naturaleza de éstas."
        },
        {
          "rubric_es": "E"
        },
        {
          "sp_es": "",
          "text_es": "l cual, la víspera de su Pasión,"
        },
        {
          "rubric_es": "En la Misa Vespertina del Jueves Santo:"
        },
        {
          "sp_es": "",
          "text_es": "El cual, hoy,"
        },
        {
          "sp_es": "",
          "text_es": "la víspera de padecer por nuestra salvación"
        },
        {
          "sp_es": "",
          "text_es": "y la de todos los hombres,"
        },
        {
          "rubric_es": "Toma el pan y, sosteniéndolo un poco elevado sobre el altar, prosigue:"
        },
        {
          "sp_es": "",
          "text_es": "tomó pan en sus santas y venerables manos,"
        },
        {
          "rubric_es": "Eleva los ojos."
        },
        {
          "sp_es": "",
          "text_es": "y elevando los ojos al cielo,"
        },
        {
          "sp_es": "",
          "text_es": "hacia ti, Dios Padre suyo todopoderoso,"
        },
        {
          "sp_es": "",
          "text_es": "dando gracias te bendijo,"
        },
        {
          "sp_es": "",
          "text_es": "lo partió"
        },
        {
          "sp_es": "",
          "text_es": "y lo dio a sus discípulos diciendo:"
        },
        {
          "rubric_es": "Se inclina un poco."
        },
        {
          "rubric_es": "TOMAD Y COMED TODOS DE ÉL,"
        },
        {
          "rubric_es": "PORQUE ÉSTO ES MI CUERPO"
        },
        {
          "rubric_es": "QUE SERÁ ENTREGADO POR VOSOTROS."
        },
        {
          "rubric_es": "Muestra el pan consagrado al pueblo, lo deposita luego sobre la patena y lo"
        },
        {
          "rubric_es": "adora haciendo genuflexión."
        },
        {
          "rubric_es": "90. Después prosigue:"
        },
        {
          "sp_es": "",
          "text_es": "Del mismo modo, acabada la cena,"
        },
        {
          "rubric_es": "Toma el cáliz y, sosteniéndolo un poco elevado sobre el altar, dice:"
        },
        {
          "sp_es": "",
          "text_es": "tomó este cáliz glorioso"
        },
        {
          "sp_es": "",
          "text_es": "en sus santas y venerables manos;"
        },
        {
          "sp_es": "",
          "text_es": "dando gracias te bendijo,"
        },
        {
          "sp_es": "",
          "text_es": "y lo dio a sus discípulos diciendo:"
        },
        {
          "rubric_es": "Se inclina un poco."
        },
        {
          "rubric_es": "TOMAD Y BEBED TODOS DE ÉL,"
        },
        {
          "rubric_es": "PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE,"
        },
        {
          "rubric_es": "SANGRE DE LA ALIANZA NUEVA Y ETERNA,"
        },
        {
          "rubric_es": "QUE SERÁ DERRAMADA POR VOSOTROS"
        },
        {
          "rubric_es": "Y POR MUCHOS"
        },
        {
          "rubric_es": "PARA EL PERDÓN DE LOS PECADOS."
        },
        {
          "rubric_es": "HACED ESTO EN CONMEMORACIÓN MÍA."
        },
        {
          "rubric_es": "Muestra el cáliz al pueblo, lo deposita luego sobre el corporal y lo adora"
        },
        {
          "rubric_es": "haciendo genuflexión."
        },
        {
          "rubric_es": "91. Luego dice una de las siguientes fórmulas:"
        },
        {
          "sp_es": "",
          "text_es": "Éste es el Misterio de la fe."
        },
        {
          "rubric_es": "O bien:"
        },
        {
          "sp_es": "CP",
          "text_es": "Éste es el Sacramento de nuestra fe."
        },
        {
          "rubric_es": "Y el pueblo prosigue, aclamando:"
        },
        {
          "sp_es": "",
          "text_es": "Anunciamos tu muerte,"
        },
        {
          "sp_es": "",
          "text_es": "proclamamos tu resurrección."
        },
        {
          "sp_es": "",
          "text_es": "¡Ven, Señor Jesús!"
        },
        {
          "rubric_es": "También puede decirse:"
        },
        {
          "sp_es": "",
          "text_es": "Éste es el Misterio de la fe."
        },
        {
          "sp_es": "",
          "text_es": "Cristo nos redimió."
        },
        {
          "rubric_es": "Y el pueblo prosigue, aclamando:"
        },
        {
          "sp_es": "",
          "text_es": "Cada vez que comemos de este pan"
        },
        {
          "sp_es": "",
          "text_es": "y bebemos de este cáliz,"
        },
        {
          "sp_es": "",
          "text_es": "anunciamos tu muerte,"
        },
        {
          "sp_es": "",
          "text_es": "Señor, hasta que vuelvas."
        },
        {
          "rubric_es": "O bien:"
        },
        {
          "sp_es": "",
          "text_es": "Éste es el Misterio de la fe."
        },
        {
          "sp_es": "",
          "text_es": "Cristo se entregó por nosotros."
        },
        {
          "rubric_es": "Y el pueblo prosigue, aclamando:"
        },
        {
          "sp_es": "",
          "text_es": "Salvador del mundo, sálvanos,"
        },
        {
          "sp_es": "",
          "text_es": "tu que nos has liberado por tu cruz y resurrección."
        },
        {
          "rubric_es": "92. Después el sacerdote, con las manos extendidas, dice:"
        },
        {
          "rubric_es": "P"
        },
        {
          "sp_es": "",
          "text_es": "or eso, Padre,"
        },
        {
          "sp_es": "CC",
          "text_es": "nosotros, tus siervos, y todo tu pueblo santo,"
        },
        {
          "sp_es": "",
          "text_es": "al celebrar este memorial de la muerte gloriosa"
        },
        {
          "sp_es": "",
          "text_es": "de Jesucristo, tu Hijo, nuestro Señor;"
        },
        {
          "sp_es": "",
          "text_es": "de su santa resurrección del lugar de los muertos"
        },
        {
          "sp_es": "",
          "text_es": "y de su admirable ascensión a los cielos,"
        },
        {
          "sp_es": "",
          "text_es": "te ofrecemos, Dios de gloria y majestad,"
        },
        {
          "sp_es": "",
          "text_es": "de los mismos bienes que nos has dado,"
        },
        {
          "sp_es": "",
          "text_es": "el sacrificio puro, inmaculado y santo;"
        },
        {
          "sp_es": "",
          "text_es": "pan de vida eterna y cáliz de eterna salvación."
        },
        {
          "rubric_es": "M"
        },
        {
          "sp_es": "",
          "text_es": "ira con ojos de bondad esta ofrenda"
        },
        {
          "rubric_es": "93."
        },
        {
          "sp_es": "",
          "text_es": "y acéptala,"
        },
        {
          "sp_es": "",
          "text_es": "como aceptaste los dones del justo Abel,"
        },
        {
          "sp_es": "",
          "text_es": "el sacrificio de Abrahán, nuestro padre en la fe,"
        },
        {
          "sp_es": "",
          "text_es": "y la oblación pura"
        },
        {
          "sp_es": "",
          "text_es": "de tu sumo sacerdote Melquisedec."
        },
        {
          "rubric_es": "94. Inclinado, con las manos juntas prosigue:"
        },
        {
          "sp_es": "",
          "text_es": "Te pedimos humildemente,"
        },
        {
          "sp_es": "",
          "text_es": "Dios todopoderoso,"
        },
        {
          "sp_es": "",
          "text_es": "que esta ofrenda sea llevada a tu presencia,"
        },
        {
          "sp_es": "",
          "text_es": "hasta el altar del cielo,"
        },
        {
          "sp_es": "",
          "text_es": "por manos tu ángel,"
        },
        {
          "sp_es": "",
          "text_es": "para que cuantos recibimos"
        },
        {
          "sp_es": "",
          "text_es": "el Cuerpo y la Sangre de tu Hijo,"
        },
        {
          "sp_es": "",
          "text_es": "al participar aquí de este altar,"
        },
        {
          "rubric_es": "Se endereza y se signa diciendo:"
        },
        {
          "sp_es": "",
          "text_es": "seamos colmados de gracia y bendición."
        },
        {
          "sp_es": "",
          "text_es": "[Por Cristo, nuestro Señor. Amén.]"
        },
        {
          "rubric_es": "95. Conmemoración de los difuntos."
        },
        {
          "rubric_es": "Con las manos expendidas dice:"
        },
        {
          "rubric_es": "A"
        },
        {
          "sp_es": "",
          "text_es": "cuérdate también, Señor,"
        },
        {
          "sp_es": "C3",
          "text_es": "de tus hijos N. y N.,"
        },
        {
          "rubric_es": "Puede decir los nombres de los difuntos por quienes se quiere orar."
        },
        {
          "sp_es": "",
          "text_es": "que nos han precedido con el signo de la fe"
        },
        {
          "sp_es": "",
          "text_es": "y duermen ya el sueño de la paz."
        },
        {
          "rubric_es": "Junta las manos y ora unos momentos por los difuntos por quienes tiene"
        },
        {
          "rubric_es": "intención de orar. Después, con las manos extendidas, prosigue:"
        },
        {
          "sp_es": "",
          "text_es": "A ellos, Señor, y a cuantos descansan en Cristo,"
        },
        {
          "sp_es": "",
          "text_es": "concédeles el lugar del consuelo"
        },
        {
          "sp_es": "",
          "text_es": ","
        },
        {
          "sp_es": "",
          "text_es": "de la luz y de la paz."
        },
        {
          "rubric_es": "Junta las manos."
        },
        {
          "sp_es": "",
          "text_es": "[Por Cristo nuestro Señor. Amén.]"
        },
        {
          "rubric_es": "96. Con la mano derecha se golpea el pecho diciendo:"
        },
        {
          "rubric_es": "Y"
        },
        {
          "sp_es": "",
          "text_es": "a nosotros, pecadores, siervos tuyos,"
        },
        {
          "rubric_es": "Con las manos extendidas prosigue:"
        },
        {
          "sp_es": "",
          "text_es": "que confiamos en tu infinita misericordia,"
        },
        {
          "sp_es": "",
          "text_es": "admítenos en la asamblea de los santos apóstoles y mártires"
        },
        {
          "sp_es": "",
          "text_es": "Juan el Bautista, Esteban,"
        },
        {
          "sp_es": "",
          "text_es": "Matías y Bernabé,"
        },
        {
          "sp_es": "",
          "text_es": "[Ignacio, Alejandro,"
        },
        {
          "sp_es": "",
          "text_es": "Marcelino y Pedro,"
        },
        {
          "sp_es": "",
          "text_es": "Felicidad y Perpetua,"
        },
        {
          "sp_es": "",
          "text_es": "Águeda, Lucía,"
        },
        {
          "sp_es": "",
          "text_es": "Inés, Cecilia y Anastasia]"
        },
        {
          "sp_es": "",
          "text_es": "y de todos los santos;"
        },
        {
          "sp_es": "",
          "text_es": "y acéptanos en su compañía,"
        },
        {
          "sp_es": "",
          "text_es": "no por nuestros méritos,"
        },
        {
          "sp_es": "",
          "text_es": "sino conforme a tu bondad."
        },
        {
          "rubric_es": "Junta las manos:"
        },
        {
          "sp_es": "",
          "text_es": "Por Cristo, Señor nuestro."
        },
        {
          "rubric_es": "97. Y continúa:"
        },
        {
          "sp_es": "",
          "text_es": "Por quien sigues creando todos los bienes,"
        },
        {
          "sp_es": "CP",
          "text_es": "los santificas, los llenas de vida,"
        },
        {
          "sp_es": "",
          "text_es": "los bendices y los repartes entre nosotros."
        }
      ],
      "2": [
        {
          "rubric_es": "100. El sacerdote, con las manos extendidas, dice:"
        },
        {
          "sp_es": "",
          "text_es": "anto eres en verdad, Señor,"
        },
        {
          "rubric_es": "S"
        },
        {
          "sp_es": "CP",
          "text_es": "fuente de toda santidad;"
        },
        {
          "rubric_es": "101. Junta las manos y, manteniéndolas extendidas sobre las ofrendas, dice:"
        },
        {
          "sp_es": "",
          "text_es": "por eso te pedimos que santifiques estos dones"
        },
        {
          "sp_es": "CC",
          "text_es": "con la efusión de tu Espíritu,"
        },
        {
          "rubric_es": "Junta las manos y traza el signo de la cruz sobre el pan y el cáliz conjuntamente,"
        },
        {
          "rubric_es": "diciendo:"
        },
        {
          "sp_es": "",
          "text_es": "de manera que sean para nosotros"
        },
        {
          "sp_es": "",
          "text_es": "Cuerpo y ✠ Sangre"
        },
        {
          "sp_es": "",
          "text_es": "de Jesucristo, nuestro Señor."
        },
        {
          "rubric_es": "Junta las manos."
        },
        {
          "rubric_es": "102. En las fórmulas que siguen, las palabras del Señor han de pronunciarse con"
        },
        {
          "rubric_es": "claridad, como lo requiere la naturaleza de éstas."
        },
        {
          "sp_es": "",
          "text_es": "El cual,"
        },
        {
          "rubric_es": "En la Misa vespertina del Jueves Santo:"
        },
        {
          "sp_es": "",
          "text_es": "en esta misma noche,"
        },
        {
          "sp_es": "",
          "text_es": "cuando iba a ser entregado a su Pasión,"
        },
        {
          "sp_es": "",
          "text_es": "voluntariamente aceptada,"
        },
        {
          "rubric_es": "Toma el pan y, sosteniéndolo un poco elevado sobre el altar, prosigue:"
        },
        {
          "sp_es": "",
          "text_es": "tomó pan, dándote gracias, lo partió"
        },
        {
          "sp_es": "",
          "text_es": "y lo dio a sus discípulos, diciendo:"
        },
        {
          "rubric_es": "Se inclina un poco."
        },
        {
          "rubric_es": "TOMAD Y COMED TODOS DE ÉL,"
        },
        {
          "rubric_es": "PORQUE ÉSTO ES MI CUERPO"
        },
        {
          "rubric_es": "QUE SERÁ ENTREGADO POR VOSOTROS."
        },
        {
          "rubric_es": "Muestra el pan consagrado al pueblo, lo deposita luego sobre la patena y lo"
        },
        {
          "rubric_es": "adora haciendo genuflexión."
        },
        {
          "rubric_es": "103. Después prosigue:"
        },
        {
          "sp_es": "",
          "text_es": "Del mismo modo, acabada la cena,"
        },
        {
          "rubric_es": "Toma el cáliz y, sosteniéndolo un poco elevado sobre el altar, dice:"
        },
        {
          "sp_es": "",
          "text_es": "tomó este cáliz glorioso"
        },
        {
          "sp_es": "",
          "text_es": "en sus santas y venerables manos;"
        },
        {
          "sp_es": "",
          "text_es": "dando gracias te bendijo,"
        },
        {
          "sp_es": "",
          "text_es": "y lo dio a sus discípulos diciendo:"
        },
        {
          "rubric_es": "Se inclina un poco."
        },
        {
          "rubric_es": "TOMAD Y BEBED TODOS DE ÉL,"
        },
        {
          "rubric_es": "PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE,"
        },
        {
          "rubric_es": "SANGRE DE LA ALIANZA NUEVA Y ETERNA,"
        },
        {
          "rubric_es": "QUE SERÁ DERRAMADA POR VOSOTROS"
        },
        {
          "rubric_es": "Y POR MUCHOS"
        },
        {
          "rubric_es": "PARA EL PERDÓN DE LOS PECADOS."
        },
        {
          "rubric_es": "HACED ESTO EN CONMEMORACIÓN MÍA."
        },
        {
          "rubric_es": "Muestra el cáliz al pueblo, lo deposita luego sobre el corporal y lo adora"
        },
        {
          "rubric_es": "haciendo genuflexión."
        },
        {
          "rubric_es": "104. Luego dice una de las siguientes fórmulas:"
        },
        {
          "sp_es": "",
          "text_es": "Éste es el Misterio de la fe."
        },
        {
          "rubric_es": "O bien:"
        },
        {
          "sp_es": "CP",
          "text_es": "Éste es el Sacramento de nuestra fe."
        },
        {
          "rubric_es": "Y el pueblo prosigue, aclamando:"
        },
        {
          "sp_es": "",
          "text_es": "Anunciamos tu muerte,"
        },
        {
          "sp_es": "",
          "text_es": "proclamamos tu resurrección."
        },
        {
          "sp_es": "",
          "text_es": "¡Ven, Señor Jesús!"
        },
        {
          "rubric_es": "También puede decirse:"
        },
        {
          "sp_es": "",
          "text_es": "Éste es el Misterio de la fe."
        },
        {
          "sp_es": "",
          "text_es": "Cristo nos redimió."
        },
        {
          "rubric_es": "Y el pueblo prosigue, aclamando:"
        },
        {
          "sp_es": "",
          "text_es": "Cada vez que comemos de este pan"
        },
        {
          "sp_es": "",
          "text_es": "y bebemos de este cáliz,"
        },
        {
          "sp_es": "",
          "text_es": "anunciamos tu muerte,"
        },
        {
          "sp_es": "",
          "text_es": "Señor, hasta que vuelvas."
        },
        {
          "rubric_es": "O bien:"
        },
        {
          "sp_es": "",
          "text_es": "Éste es el Misterio de la fe."
        },
        {
          "sp_es": "",
          "text_es": "Cristo se entregó por nosotros."
        },
        {
          "rubric_es": "Y el pueblo prosigue, aclamando:"
        },
        {
          "sp_es": "",
          "text_es": "Salvador del mundo, sálvanos,"
        },
        {
          "sp_es": "",
          "text_es": "tu que nos has liberado por tu cruz y resurrección."
        },
        {
          "rubric_es": "105. Después el sacerdote, con las manos extendidas, dice:"
        },
        {
          "rubric_es": "A"
        },
        {
          "sp_es": "",
          "text_es": "sí, pues, Padre,"
        },
        {
          "sp_es": "CC",
          "text_es": "al celebrar ahora el memorial"
        },
        {
          "sp_es": "",
          "text_es": "de la muerte y resurrección de tu Hijo,"
        },
        {
          "sp_es": "",
          "text_es": "te ofrecemos el pan de vida y el cáliz de salvación,"
        },
        {
          "sp_es": "",
          "text_es": "y te damos gracias"
        },
        {
          "sp_es": "",
          "text_es": "porque nos haces dignos de servirte en tu presencia."
        },
        {
          "rubric_es": "T"
        },
        {
          "sp_es": "",
          "text_es": "e pedimos humildemente"
        },
        {
          "sp_es": "",
          "text_es": "que el Espíritu Santo congregue en la unidad"
        },
        {
          "sp_es": "",
          "text_es": "a cuantos participamos"
        },
        {
          "sp_es": "",
          "text_es": "del Cuerpo y Sangre de Cristo."
        },
        {
          "rubric_es": "A"
        },
        {
          "sp_es": "",
          "text_es": "cuérdate, Señor,"
        },
        {
          "sp_es": "C1",
          "text_es": "de tu Iglesia extendida por toda la tierra;"
        },
        {
          "rubric_es": "En los domingos, cuando no hay otro recuerdo más propio, puede decirse:"
        },
        {
          "sp_es": "",
          "text_es": "Acuérdate, Señor, de tu Iglesia"
        },
        {
          "sp_es": "",
          "text_es": "extendida por toda la tierra"
        },
        {
          "sp_es": "",
          "text_es": "y reunida aquí en el domingo,"
        },
        {
          "sp_es": "",
          "text_es": "día en que Cristo ha vencido a la muerte"
        },
        {
          "sp_es": "",
          "text_es": "y nos ha hecho partícipes de su vida inmortal;"
        },
        {
          "rubric_es": "En la Natividad del Señor y durante su octava:"
        },
        {
          "sp_es": "",
          "text_es": "Acuérdate, Señor, de tu Iglesia"
        },
        {
          "sp_es": "",
          "text_es": "extendida por toda la tierra"
        },
        {
          "sp_es": "",
          "text_es": "y reunida aquí (en la noche santa) en el día santo"
        },
        {
          "sp_es": "",
          "text_es": "en que la Virgen María"
        },
        {
          "sp_es": "",
          "text_es": "dio a luz al Salvador del mundo;"
        },
        {
          "rubric_es": "En la Epifanía del Señor:"
        },
        {
          "sp_es": "",
          "text_es": "Acuérdate, Señor, de tu Iglesia"
        },
        {
          "sp_es": "",
          "text_es": "extendida por toda la tierra"
        },
        {
          "sp_es": "",
          "text_es": "y reunida aquí en el día santo"
        },
        {
          "sp_es": "",
          "text_es": "en que tu único Hijo,"
        },
        {
          "sp_es": "",
          "text_es": "eterno como tú en la gloria,"
        },
        {
          "sp_es": "",
          "text_es": "se manifestó en la realidad"
        },
        {
          "sp_es": "",
          "text_es": "de nuestra propia carne;"
        },
        {
          "rubric_es": "Desde la Misa de la Vigilia pascual hasta el segundo domingo de Pascua:"
        },
        {
          "sp_es": "",
          "text_es": "Acuérdate, Señor, de tu Iglesia"
        },
        {
          "sp_es": "",
          "text_es": "extendida por toda la tierra"
        },
        {
          "sp_es": "",
          "text_es": "y reunida aquí (en la noche santísima) en el día santísimo"
        },
        {
          "sp_es": "",
          "text_es": "de la resurrección de nuestro Señor Jesucristo;"
        },
        {
          "rubric_es": "En la Ascensión del Señor:"
        },
        {
          "sp_es": "",
          "text_es": "Acuérdate, Señor, de tu Iglesia"
        },
        {
          "sp_es": "",
          "text_es": "extendida por toda la tierra"
        },
        {
          "sp_es": "",
          "text_es": "y reunida aquí en el día glorioso"
        },
        {
          "sp_es": "",
          "text_es": "en que Cristo ha sido constituido"
        },
        {
          "sp_es": "",
          "text_es": "Señor del cielo y de la tierra;"
        },
        {
          "rubric_es": "En el domingo de Pentecostés:"
        },
        {
          "sp_es": "",
          "text_es": "Acuérdate, Señor, de tu Iglesia"
        },
        {
          "sp_es": "",
          "text_es": "extendida por toda la tierra"
        },
        {
          "sp_es": "",
          "text_es": "y reunida aquí en el día"
        },
        {
          "sp_es": "",
          "text_es": "en que la efusión de tu Espíritu"
        },
        {
          "sp_es": "",
          "text_es": "ha hecho de ella sacramento"
        },
        {
          "sp_es": "",
          "text_es": "de unidad para todos los pueblos;"
        },
        {
          "sp_es": "",
          "text_es": "y con el Papa N.,"
        },
        {
          "sp_es": "",
          "text_es": "con nuestro Obispo N."
        },
        {
          "rubric_es": "Puede hacerse también mención de los Obispos coadjutores o auxiliares y, en las"
        },
        {
          "rubric_es": "concelebraciones, del Obispo que preside la celebración."
        },
        {
          "rubric_es": "El Obispo, cuando celebra en su diócesis, dice:"
        },
        {
          "sp_es": "",
          "text_es": "conmigo, indigno siervo tuyo,"
        },
        {
          "rubric_es": "Cuando celebra un Obispo que no es el Ordinario diocesano, dice:"
        },
        {
          "sp_es": "",
          "text_es": "con mi hermano N., Obispo de esta Iglesia de N.,"
        },
        {
          "sp_es": "",
          "text_es": "conmigo, indigno siervo tuyo,"
        },
        {
          "sp_es": "",
          "text_es": "y todos los pastores que cuidan de tu pueblo,"
        },
        {
          "sp_es": "",
          "text_es": "llévala a su perfección por la caridad."
        },
        {
          "rubric_es": "INTERCESIONES PARTICULARES"
        },
        {
          "rubric_es": "En las misas de Pascua, de su octava y en la del bautismo de adultos:"
        },
        {
          "sp_es": "",
          "text_es": "Acuérdate también de nuestros hermanos N. y N."
        },
        {
          "sp_es": "",
          "text_es": "que hoy, por medio del bautismo (y de la confirmación),"
        },
        {
          "sp_es": "",
          "text_es": "han entrado a formar parte de tu familia;"
        },
        {
          "sp_es": "",
          "text_es": "ayúdales a seguir a Cristo, tu Hijo,"
        },
        {
          "sp_es": "",
          "text_es": "con ánimo generoso y ferviente."
        },
        {
          "rubric_es": "En la misa del bautismo de niños:"
        },
        {
          "sp_es": "",
          "text_es": "Acuérdate también de nuestros hermanos N. y N."
        },
        {
          "sp_es": "",
          "text_es": "(de aquellos hermanos nuestros)"
        },
        {
          "sp_es": "",
          "text_es": "que hoy has hecho renacer"
        },
        {
          "sp_es": "",
          "text_es": "del agua y del Espíritu Santo,"
        },
        {
          "sp_es": "",
          "text_es": "librándolos del pecado;"
        },
        {
          "sp_es": "",
          "text_es": "tú que los has incorporado,"
        },
        {
          "sp_es": "",
          "text_es": "como miembros vivos, al cuerpo de Cristo,"
        },
        {
          "sp_es": "",
          "text_es": "inscribe también sus nombres en el libro de la vida."
        },
        {
          "rubric_es": "En la misa de confirmación:"
        },
        {
          "sp_es": "",
          "text_es": "Acuérdate también de tus hijos N. y N."
        },
        {
          "sp_es": "",
          "text_es": "que, regenerados en el bautismo, hoy has confirmado,"
        },
        {
          "sp_es": "",
          "text_es": "marcándolos con el sello del Espíritu Santo:"
        },
        {
          "sp_es": "",
          "text_es": "custodia en ellos el don de tu amor."
        },
        {
          "rubric_es": "En la misa de primera comunión:"
        },
        {
          "sp_es": "",
          "text_es": "Acuérdate de tus hijos N. y N."
        },
        {
          "sp_es": "",
          "text_es": "que por vez primera invitas en este día"
        },
        {
          "sp_es": "",
          "text_es": "a participar del pan de vida"
        },
        {
          "sp_es": "",
          "text_es": "y del cáliz de salvación,"
        },
        {
          "sp_es": "",
          "text_es": "en la mesa de tu familia;"
        },
        {
          "sp_es": "",
          "text_es": "concédeles crecer siempre en tu amistad"
        },
        {
          "sp_es": "",
          "text_es": "y en la comunión con tu Iglesia."
        },
        {
          "rubric_es": "En la misa del matrimonio:"
        },
        {
          "sp_es": "",
          "text_es": "Acuérdate de tus hijos N. y N."
        },
        {
          "sp_es": "",
          "text_es": "que en Cristo hoy han fundado una nueva familia,"
        },
        {
          "sp_es": "",
          "text_es": "iglesia doméstica y sacramento de tu amor,"
        },
        {
          "sp_es": "",
          "text_es": "y concédeles que la gracia de este día"
        },
        {
          "sp_es": "",
          "text_es": "se prolongue a lo largo de toda su vida."
        },
        {
          "rubric_es": "En la misa por los difuntos:"
        },
        {
          "sp_es": "",
          "text_es": "Recuerda a tu hijo (hija) N.,"
        },
        {
          "sp_es": "",
          "text_es": "a quien llamaste (hoy)"
        },
        {
          "sp_es": "",
          "text_es": "de este mundo a tu presencia;"
        },
        {
          "sp_es": "",
          "text_es": "concédele que,"
        },
        {
          "sp_es": "",
          "text_es": "así como ha compartido ya"
        },
        {
          "sp_es": "",
          "text_es": "la muerte de Jesucristo,"
        },
        {
          "sp_es": "",
          "text_es": "comparta también con él"
        },
        {
          "sp_es": "",
          "text_es": "la gloria de la resurrección."
        },
        {
          "rubric_es": "A"
        },
        {
          "sp_es": "",
          "text_es": "cuérdate también de nuestros hermanos"
        },
        {
          "sp_es": "C2",
          "text_es": "que se durmieron en la esperanza"
        },
        {
          "sp_es": "",
          "text_es": "de la resurrección,"
        },
        {
          "sp_es": "",
          "text_es": "y de todos los que han muerto en tu misericordia;"
        },
        {
          "sp_es": "",
          "text_es": "admítelos a contemplar la luz de tu rostro."
        },
        {
          "sp_es": "",
          "text_es": "Ten misericordia de todos nosotros,"
        },
        {
          "sp_es": "",
          "text_es": "y así, con María, la Virgen Madre de Dios,"
        },
        {
          "sp_es": "",
          "text_es": "su esposo san José,"
        },
        {
          "sp_es": "",
          "text_es": "los apóstoles"
        },
        {
          "sp_es": "",
          "text_es": "y cuantos vivieron en tu amistad"
        },
        {
          "sp_es": "",
          "text_es": "a través de los tiempos,"
        },
        {
          "sp_es": "",
          "text_es": "merezcamos, por tu Hijo Jesucristo,"
        },
        {
          "sp_es": "",
          "text_es": "compartir la vida eterna"
        },
        {
          "sp_es": "",
          "text_es": "y cantar tus alabanzas."
        },
        {
          "rubric_es": "Junta las manos."
        }
      ],
      "3": [
        {
          "rubric_es": "122. El sacerdote, con las manos extendidas, dice:"
        },
        {
          "sp_es": "CP",
          "text_es": "S anto eres en verdad, Padre,"
        },
        {
          "sp_es": "",
          "text_es": "y con razón te alaban todas tus criaturas,"
        },
        {
          "sp_es": "",
          "text_es": "ya que por Jesucristo, tu Hijo, Señor nuestro,"
        },
        {
          "sp_es": "",
          "text_es": "con la fuerza del Espíritu Santo,"
        },
        {
          "sp_es": "",
          "text_es": "das vida y santificas todo,"
        },
        {
          "sp_es": "",
          "text_es": "y congregas a tu pueblo sin cesar,"
        },
        {
          "sp_es": "",
          "text_es": "para que ofrezca en tu honor"
        },
        {
          "sp_es": "",
          "text_es": "un sacrificio sin mancha"
        },
        {
          "sp_es": "",
          "text_es": "desde donde sale el sol hasta el ocaso."
        },
        {
          "rubric_es": "109. Junta las manos y, manteniéndolas extendidas sobre las ofrendas, dice:"
        },
        {
          "rubric_es": "P"
        },
        {
          "sp_es": "",
          "text_es": "or eso, Padre, te suplicamos"
        },
        {
          "sp_es": "CC",
          "text_es": "que santifiques por el mismo Espíritu"
        },
        {
          "sp_es": "",
          "text_es": "estos dones que hemos separado para ti,"
        },
        {
          "rubric_es": "junta las manos y traza el signo de la cruz sobre el pan y el cáliz conjuntamente,"
        },
        {
          "rubric_es": "diciendo:"
        },
        {
          "sp_es": "",
          "text_es": "de manera que sean"
        },
        {
          "sp_es": "",
          "text_es": "Cuerpo y ✠ Sangre de Jesucristo,"
        },
        {
          "sp_es": "",
          "text_es": "Hijo tuyo y Señor nuestro,"
        },
        {
          "rubric_es": "junta las manos"
        },
        {
          "sp_es": "",
          "text_es": "que nos mandó celebrar estos misterios."
        },
        {
          "rubric_es": "110. En las fórmulas que siguen, las palabras del Señor han de pronunciarse con"
        },
        {
          "rubric_es": "claridad, como lo requiere la naturaleza de las mismas palabras."
        },
        {
          "sp_es": "",
          "text_es": "Porque él mismo,"
        },
        {
          "sp_es": "",
          "text_es": "la noche en que iba a ser entregado,"
        },
        {
          "rubric_es": "En la misa vespertina del Jueves santo:"
        },
        {
          "sp_es": "",
          "text_es": "habiendo amado a los suyos que estaban en el mundo,"
        },
        {
          "sp_es": "",
          "text_es": "los amó hasta el extremo"
        },
        {
          "sp_es": "",
          "text_es": "y, mientras cenaba con sus discípulos,"
        },
        {
          "rubric_es": "Toma el pan y, sosteniéndolo un poco elevado sobre el altar, prosigue:"
        },
        {
          "sp_es": "",
          "text_es": "tomó pan, y dando gracias te bendijo,"
        },
        {
          "sp_es": "",
          "text_es": "lo partió y lo dio a sus discípulos diciendo:"
        },
        {
          "rubric_es": "Se inclina un poco."
        },
        {
          "rubric_es": "TOMAD Y COMED TODOS DE ÉL,"
        },
        {
          "rubric_es": "PORQUE ÉSTO ES MI CUERPO"
        },
        {
          "rubric_es": "QUE SERÁ ENTREGADO POR VOSOTROS."
        },
        {
          "rubric_es": "Muestra el pan consagrado al pueblo, lo deposita luego sobre la patena y lo"
        },
        {
          "rubric_es": "adora haciendo genuflexión."
        },
        {
          "rubric_es": "111. Después prosigue:"
        },
        {
          "sp_es": "",
          "text_es": "Del mismo modo, acabada la cena,"
        },
        {
          "rubric_es": "Toma el cáliz y, sosteniéndolo un poco elevado sobre el altar, dice:"
        },
        {
          "sp_es": "",
          "text_es": "tomó este cáliz glorioso"
        },
        {
          "sp_es": "",
          "text_es": "en sus santas y venerables manos;"
        },
        {
          "sp_es": "",
          "text_es": "dando gracias te bendijo,"
        },
        {
          "sp_es": "",
          "text_es": "y lo dio a sus discípulos diciendo:"
        },
        {
          "rubric_es": "Se inclina un poco."
        },
        {
          "rubric_es": "TOMAD Y BEBED TODOS DE ÉL,"
        },
        {
          "rubric_es": "PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE,"
        },
        {
          "rubric_es": "SANGRE DE LA ALIANZA NUEVA Y ETERNA,"
        },
        {
          "rubric_es": "QUE SERÁ DERRAMADA POR VOSOTROS"
        },
        {
          "rubric_es": "Y POR MUCHOS"
        },
        {
          "rubric_es": "PARA EL PERDÓN DE LOS PECADOS."
        },
        {
          "rubric_es": "HACED ESTO EN CONMEMORACIÓN MÍA."
        },
        {
          "rubric_es": "Muestra el cáliz al pueblo, lo deposita luego sobre el corporal y lo adora"
        },
        {
          "rubric_es": "haciendo genuflexión."
        },
        {
          "rubric_es": "112. Luego dice una de las siguientes fórmulas:"
        },
        {
          "sp_es": "",
          "text_es": "Éste es el Misterio de la fe."
        },
        {
          "rubric_es": "O bien:"
        },
        {
          "sp_es": "CP",
          "text_es": "Éste es el Sacramento de nuestra fe."
        },
        {
          "rubric_es": "Y el pueblo prosigue, aclamando:"
        },
        {
          "sp_es": "",
          "text_es": "Anunciamos tu muerte,"
        },
        {
          "sp_es": "",
          "text_es": "proclamamos tu resurrección."
        },
        {
          "sp_es": "",
          "text_es": "¡Ven, Señor Jesús!"
        },
        {
          "rubric_es": "También puede decirse:"
        },
        {
          "sp_es": "",
          "text_es": "Éste es el Misterio de la fe."
        },
        {
          "sp_es": "",
          "text_es": "Cristo nos redimió."
        },
        {
          "rubric_es": "Y el pueblo prosigue, aclamando:"
        },
        {
          "sp_es": "",
          "text_es": "Cada vez que comemos de este pan"
        },
        {
          "sp_es": "",
          "text_es": "y bebemos de este cáliz,"
        },
        {
          "sp_es": "",
          "text_es": "anunciamos tu muerte,"
        },
        {
          "sp_es": "",
          "text_es": "Señor, hasta que vuelvas."
        },
        {
          "rubric_es": "O bien:"
        },
        {
          "sp_es": "",
          "text_es": "Éste es el Misterio de la fe."
        },
        {
          "sp_es": "",
          "text_es": "Cristo se entregó por nosotros."
        },
        {
          "rubric_es": "Y el pueblo prosigue, aclamando:"
        },
        {
          "sp_es": "",
          "text_es": "Salvador del mundo, sálvanos,"
        },
        {
          "sp_es": "",
          "text_es": "tu que nos has liberado por tu cruz y resurrección."
        },
        {
          "rubric_es": "113. Después el sacerdote, con las manos extendidas, dice:"
        },
        {
          "rubric_es": "A"
        },
        {
          "sp_es": "",
          "text_es": "sí, pues, Padre,"
        },
        {
          "sp_es": "CC",
          "text_es": "al celebrar ahora el memorial"
        },
        {
          "sp_es": "",
          "text_es": "de la pasión salvadora de tu Hijo,"
        },
        {
          "sp_es": "",
          "text_es": "de su admirable resurrección y ascensión al cielo,"
        },
        {
          "sp_es": "",
          "text_es": "mientras esperamos su venida gloriosa,"
        },
        {
          "sp_es": "",
          "text_es": "te ofrecemos, en esta acción de gracias,"
        },
        {
          "sp_es": "",
          "text_es": "el sacrificio vivo y santo."
        },
        {
          "rubric_es": "D"
        },
        {
          "sp_es": "",
          "text_es": "irige tu mirada sobre la ofrenda de tu Iglesia,"
        },
        {
          "sp_es": "",
          "text_es": "y reconoce en ella la Víctima"
        },
        {
          "sp_es": "",
          "text_es": "por cuya inmolación"
        },
        {
          "sp_es": "",
          "text_es": "quisiste devolvernos tu amistad,"
        },
        {
          "sp_es": "",
          "text_es": "para que, fortalecidos"
        },
        {
          "sp_es": "",
          "text_es": "con el Cuerpo y Sangre de tu Hijo"
        },
        {
          "sp_es": "",
          "text_es": "y llenos de su Espíritu Santo,"
        },
        {
          "sp_es": "",
          "text_es": "formemos en Cristo un solo cuerpo y un solo espíritu."
        },
        {
          "rubric_es": "Q"
        },
        {
          "sp_es": "",
          "text_es": "ue él nos transforme en ofrenda permanente,"
        },
        {
          "sp_es": "C1",
          "text_es": "para que gocemos de tu heredad"
        },
        {
          "sp_es": "",
          "text_es": "junto con tus elegidos:"
        },
        {
          "sp_es": "",
          "text_es": "con María, la Virgen Madre de Dios,"
        },
        {
          "sp_es": "",
          "text_es": "su esposo, san José,"
        },
        {
          "sp_es": "",
          "text_es": "los apóstoles y los mártires,"
        },
        {
          "sp_es": "",
          "text_es": "[san N.: santo del día o patrono]"
        },
        {
          "sp_es": "",
          "text_es": "y todos los santos,"
        },
        {
          "sp_es": "",
          "text_es": "por cuya intercesión"
        },
        {
          "sp_es": "",
          "text_es": "confiamos obtener siempre tu ayuda."
        },
        {
          "rubric_es": "T"
        },
        {
          "sp_es": "",
          "text_es": "epedimos, Padre,"
        },
        {
          "sp_es": "C2",
          "text_es": "que esta Víctima de reconciliación"
        },
        {
          "sp_es": "",
          "text_es": "traiga la paz y la salvación al mundo entero."
        },
        {
          "sp_es": "",
          "text_es": "Confirma en la fe y en la caridad"
        },
        {
          "sp_es": "",
          "text_es": "a tu Iglesia, peregrina en la tierra:"
        },
        {
          "sp_es": "",
          "text_es": "al tu servidor, el Papa N.,"
        },
        {
          "sp_es": "",
          "text_es": "a nuestro obispo N.,"
        },
        {
          "rubric_es": "Puede hacerse también mención de los Obispos coadjutores o auxiliares."
        },
        {
          "rubric_es": "El Obispo, cuando celebra en su diócesis, dice:"
        },
        {
          "sp_es": "",
          "text_es": "conmigo, indigno siervo tuyo,"
        },
        {
          "rubric_es": "Cuando celebra un Obispo que no es el Ordinario diocesano, dice:"
        },
        {
          "rubric_es": "N. N."
        },
        {
          "sp_es": "",
          "text_es": "con mi hermano , Obispo de esta Iglesia de ,"
        },
        {
          "sp_es": "",
          "text_es": "conmigo, indigno siervo tuyo,"
        },
        {
          "sp_es": "",
          "text_es": "al orden episcopal,"
        },
        {
          "sp_es": "",
          "text_es": "a los presbíteros y diáconos,"
        },
        {
          "sp_es": "",
          "text_es": "y a todo el pueblo redimido por ti."
        },
        {
          "rubric_es": "INTERCESIONES PARTICULARES"
        },
        {
          "rubric_es": "En las misas de Pascua, de su octava y en la del bautismo de adultos:"
        },
        {
          "rubric_es": "N. N."
        },
        {
          "sp_es": "",
          "text_es": "Confirma en la fidelidad cristiana a tus hijos [ y ] que hoy, por medio del"
        },
        {
          "sp_es": "",
          "text_es": "bautismo: [y del don del Espíritu] has llamado a formar parte de tu pueblo y"
        },
        {
          "sp_es": "",
          "text_es": "concédeles andar siempre en una vida nueva."
        },
        {
          "rubric_es": "En la misa del bautismo de niños:"
        },
        {
          "rubric_es": "N. N."
        },
        {
          "sp_es": "",
          "text_es": "Ayuda a nuestros hermanos [ y ], que hoy has hecho renacer del agua y del"
        },
        {
          "sp_es": "",
          "text_es": "Espíritu Santo librándolos del pecado; tú que los has incorporado, como miembros"
        },
        {
          "sp_es": "",
          "text_es": "vivos, al Cuerpo de Cristo, inscribe también sus nombres en el libro de la vida."
        },
        {
          "rubric_es": "En la misa de la confirmación:"
        },
        {
          "rubric_es": "N. N."
        },
        {
          "sp_es": "",
          "text_es": "Ayuda a tus hijos [ y ], que hoy has confirmado marcándolos con el sello del"
        },
        {
          "sp_es": "",
          "text_es": "Espíritu Santo; custodia en ellos el don de tu amor."
        },
        {
          "rubric_es": "En la misa de primera comunión:"
        },
        {
          "rubric_es": "N. N."
        },
        {
          "sp_es": "",
          "text_es": "Ayuda a tus hijos [ y ], que por vez primera invitas en este día a participar del"
        },
        {
          "sp_es": "",
          "text_es": "pan de vida y del cáliz de salvación, en la mesa de tu familia; concédeles crecer"
        },
        {
          "sp_es": "",
          "text_es": "siempre en tu amistad y en la comunión con tu Iglesia."
        },
        {
          "rubric_es": "En la misa del matrimonio:"
        },
        {
          "rubric_es": "N. N."
        },
        {
          "sp_es": "",
          "text_es": "Ayuda a tus hijos [ y ], que en Cristo hoy han fundado una nueva familia,"
        },
        {
          "sp_es": "",
          "text_es": "iglesia doméstica y sacramento de tu amor, y concédeles que la gracia de este día"
        },
        {
          "sp_es": "",
          "text_es": "se prolongue a lo largo de toda su vida."
        },
        {
          "rubric_es": "A"
        },
        {
          "sp_es": "",
          "text_es": "tiende los deseos y súplicas de esta familia"
        },
        {
          "sp_es": "",
          "text_es": "que has congregado en tu presencia."
        },
        {
          "rubric_es": "En los domingos, cuando no hay otro recuerdo más propio, puede decirse:"
        },
        {
          "sp_es": "",
          "text_es": "en el domingo, día en que Cristo ha vencido a la muerte y nos ha hecho partícipes"
        },
        {
          "sp_es": "",
          "text_es": "de su vida inmortal."
        },
        {
          "rubric_es": "En la Natividad del Señor y durante su octava:"
        },
        {
          "sp_es": "",
          "text_es": "(en la noche santa) en el día santo en que la Virgen María dio a luz al Salvador del"
        },
        {
          "sp_es": "",
          "text_es": "mundo."
        },
        {
          "rubric_es": "En la Epifanía del Señor:"
        },
        {
          "sp_es": "",
          "text_es": "en el día santo, en que tu único Hijo, eterno como tú en la gloria, se manifestó en"
        },
        {
          "sp_es": "",
          "text_es": "la verdad de nuestra carne hecho hombre."
        },
        {
          "rubric_es": "Desde la misa de la Vigilia pascual hasta el segundo domingo de Pascua:"
        },
        {
          "sp_es": "",
          "text_es": "(en la noche gloriosa) en el día glorioso de la resurrección de nuestro Señor"
        },
        {
          "sp_es": "",
          "text_es": "Jesucristo según la carne."
        },
        {
          "rubric_es": "En la Ascensión del Señor"
        },
        {
          "sp_es": "",
          "text_es": "en el día glorioso de la Ascensión, en el que Cristo ha sido constituido Señor del"
        },
        {
          "sp_es": "",
          "text_es": "cielo y de la tierra."
        },
        {
          "rubric_es": "En el domingo de Pentecostés:"
        },
        {
          "sp_es": "",
          "text_es": "en el día en que la efusión de tu Espíritu ha hecho de ella sacramento de unidad"
        },
        {
          "sp_es": "",
          "text_es": "para todos los pueblos."
        },
        {
          "sp_es": "",
          "text_es": "Reúne en torno a ti, Padre misericordioso,"
        },
        {
          "sp_es": "",
          "text_es": "a todos tus hijos dispersos por el mundo."
        },
        {
          "rubric_es": "*A nuestros hermanos difuntos"
        },
        {
          "sp_es": "",
          "text_es": "y a cuantos murieron en tu amistad"
        },
        {
          "sp_es": "",
          "text_es": "recíbelos en tu reino,"
        },
        {
          "sp_es": "",
          "text_es": "donde esperamos gozar todos juntos"
        },
        {
          "sp_es": "",
          "text_es": "de la plenitud eterna de tu gloria,"
        },
        {
          "rubric_es": "115. Cuando esta plegaria eucarística se utiliza en las misas de difuntos, puede"
        },
        {
          "rubric_es": "decirse:"
        },
        {
          "rubric_es": "* Recuerda a tu hijo [hija] N."
        },
        {
          "sp_es": "",
          "text_es": "a quien llamaste [hoy]"
        },
        {
          "sp_es": "",
          "text_es": "de este mundo a tu presencia:"
        },
        {
          "sp_es": "",
          "text_es": "concédele que, así como ha compartido ya"
        },
        {
          "sp_es": "",
          "text_es": "la muerte de Jesucristo"
        },
        {
          "sp_es": "",
          "text_es": "comparta, también, con él"
        },
        {
          "sp_es": "",
          "text_es": "la gloria de la resurrección,"
        },
        {
          "sp_es": "",
          "text_es": "cuando Cristo haga surgir de la tierra a los muertos,"
        },
        {
          "sp_es": "",
          "text_es": "y transforme nuestro cuerpo frágil"
        },
        {
          "sp_es": "",
          "text_es": "en cuerpo glorioso como el suyo."
        },
        {
          "sp_es": "",
          "text_es": "Y a nuestros hermanos difuntos"
        },
        {
          "sp_es": "",
          "text_es": "y a cuantos murieron en tu amistad"
        },
        {
          "sp_es": "",
          "text_es": "recíbelos en tu reino,"
        },
        {
          "sp_es": "",
          "text_es": "donde esperamos gozar todos juntos"
        },
        {
          "sp_es": "",
          "text_es": "de la plenitud eterna de tu gloria;"
        },
        {
          "sp_es": "",
          "text_es": "allí enjugarás las lágrimas de nuestros ojos,"
        },
        {
          "sp_es": "",
          "text_es": "porque, al contemplarte como tú eres, Dios nuestro,"
        },
        {
          "sp_es": "",
          "text_es": "seremos para siempre semejantes a ti"
        },
        {
          "sp_es": "",
          "text_es": "y cantaremos eternamente tus alabanzas,"
        },
        {
          "rubric_es": "Junta las manos."
        },
        {
          "sp_es": "",
          "text_es": "por Cristo, Señor nuestro,"
        },
        {
          "sp_es": "",
          "text_es": "por quien concedes al mundo todos los bienes."
        }
      ],
      "4": [
        {
          "rubric_es": "116. Esta plegaria eucarística forma un todo con su prefacio, el cual nunca puede"
        },
        {
          "rubric_es": "cambiarse. Por consiguiente, no puede decirse cuando está prescrito un prefacio propio."
        },
        {
          "rubric_es": "En los otros casos puede decirse, incluso cuando las rúbricas prescriban un prefacio del"
        },
        {
          "rubric_es": "tiempo."
        },
        {
          "sp_es": "R/.",
          "text_es": "En verdad es justo darte gracias,"
        },
        {
          "sp_es": "CP",
          "text_es": "y deber nuestro glorificarte, Padre santo,"
        },
        {
          "sp_es": "",
          "text_es": "porque tú eres el único Dios vivo y verdadero"
        },
        {
          "sp_es": "",
          "text_es": "que existes desde siempre y vives para siempre;"
        },
        {
          "sp_es": "",
          "text_es": "luz sobre toda luz."
        },
        {
          "sp_es": "",
          "text_es": "Porque tú solo eres bueno y fuente de vida,"
        },
        {
          "sp_es": "",
          "text_es": "hiciste todas las cosas"
        },
        {
          "sp_es": "",
          "text_es": "para colmarlas de tus bendiciones"
        },
        {
          "sp_es": "",
          "text_es": "y alegrar su multitud con la claridad de tu gloria."
        },
        {
          "sp_es": "",
          "text_es": "Por eso,"
        },
        {
          "sp_es": "",
          "text_es": "innumerables ángeles en tu presencia,"
        },
        {
          "sp_es": "",
          "text_es": "contemplando la gloria de tu rostro,"
        },
        {
          "sp_es": "",
          "text_es": "te sirven siempre y te glorifican sin cesar."
        },
        {
          "sp_es": "",
          "text_es": "Y con ellos también nosotros, llenos de alegría,"
        },
        {
          "sp_es": "",
          "text_es": "y por nuestra voz las demás criaturas,"
        },
        {
          "sp_es": "",
          "text_es": "aclamamos tu nombre cantando:"
        },
        {
          "sp_es": "",
          "text_es": "Santo, Santo, Santo es el Señor, Dios del Universo."
        },
        {
          "sp_es": "",
          "text_es": "Llenos están el cielo y la tierra de tu gloria."
        },
        {
          "sp_es": "",
          "text_es": "Hosanna en el cielo."
        },
        {
          "sp_es": "",
          "text_es": "Bendito el que viene en nombre del Señor."
        },
        {
          "sp_es": "",
          "text_es": "Hosanna en el cielo."
        },
        {
          "rubric_es": "117. El sacerdote, con las manos extendidas, dice:"
        },
        {
          "sp_es": "CP",
          "text_es": "T alabamos, Padre santo,"
        },
        {
          "sp_es": "",
          "text_es": "porque eres grande,"
        },
        {
          "sp_es": "",
          "text_es": "porque hiciste todas las cosas con sabiduría y"
        },
        {
          "sp_es": "",
          "text_es": "amor."
        },
        {
          "sp_es": "",
          "text_es": "A imagen tuya creaste al hombre"
        },
        {
          "sp_es": "",
          "text_es": "y le encomendaste el universo entero,"
        },
        {
          "sp_es": "",
          "text_es": "para que, sirviéndote sólo a ti, su Creador,"
        },
        {
          "sp_es": "",
          "text_es": "dominara todo lo creado."
        },
        {
          "sp_es": "",
          "text_es": "Y cuando por desobediencia perdió tu amistad,"
        },
        {
          "sp_es": "",
          "text_es": "no lo abandonaste al poder de la muerte,"
        },
        {
          "sp_es": "",
          "text_es": "sino que, compadecido, tendiste la mano a todos,"
        },
        {
          "sp_es": "",
          "text_es": "para que te encuentre el que te busca."
        },
        {
          "sp_es": "",
          "text_es": "Reiteraste, además, tu alianza a los hombres;"
        },
        {
          "sp_es": "",
          "text_es": "por los profetas"
        },
        {
          "sp_es": "",
          "text_es": "los fuiste llevando con la esperanza de salvación."
        },
        {
          "sp_es": "",
          "text_es": "Y tanto amaste al mundo, Padre santo,"
        },
        {
          "sp_es": "",
          "text_es": "que, al cumplirse la plenitud de los tiempos,"
        },
        {
          "sp_es": "",
          "text_es": "nos enviaste como salvador a tu único Hijo."
        },
        {
          "sp_es": "",
          "text_es": "El cual se encarnó por obra del Espíritu Santo,"
        },
        {
          "sp_es": "",
          "text_es": "nació de María, la Virgen,"
        },
        {
          "sp_es": "",
          "text_es": "y así compartió en todo nuestra condición humana"
        },
        {
          "sp_es": "",
          "text_es": "menos en el pecado;"
        },
        {
          "sp_es": "",
          "text_es": "anunció la salvación a los pobres,"
        },
        {
          "sp_es": "",
          "text_es": "la liberación a los oprimidos"
        },
        {
          "sp_es": "",
          "text_es": "y a los afligidos el consuelo."
        },
        {
          "sp_es": "",
          "text_es": "Para cumplir tus designios,"
        },
        {
          "sp_es": "",
          "text_es": "él mismo se entregó a la muerte,"
        },
        {
          "sp_es": "",
          "text_es": "y, resucitando, destruyó la muerte"
        },
        {
          "sp_es": "",
          "text_es": "y nos dio nueva vida."
        },
        {
          "sp_es": "",
          "text_es": "Y porque no vivamos ya para nosotros mismos,"
        },
        {
          "sp_es": "",
          "text_es": "sino para él, que por nosotros murió y resucitó,"
        },
        {
          "sp_es": "",
          "text_es": "envió, Padre, desde tu seno al Espíritu Santo"
        },
        {
          "sp_es": "",
          "text_es": "como primicia para los creyentes,"
        },
        {
          "sp_es": "",
          "text_es": "a fin de santificar todas las cosas,"
        },
        {
          "sp_es": "",
          "text_es": "llevando a plenitud su obra en el mundo."
        },
        {
          "rubric_es": "118. Junta las manos y, manteniéndolas extendidas sobre las ofrendas, dice:"
        },
        {
          "rubric_es": "P"
        },
        {
          "sp_es": "",
          "text_es": "or eso, Padre, te rogamos"
        },
        {
          "sp_es": "CC",
          "text_es": "que este mismo Espíritu"
        },
        {
          "sp_es": "",
          "text_es": "santifique, Señor, estas ofrendas,"
        },
        {
          "rubric_es": "Junta las manos y traza, una sola vez, el signo de la cruz sobre el pan y el cáliz"
        },
        {
          "rubric_es": "conjuntamente, diciendo:"
        },
        {
          "sp_es": "",
          "text_es": "para que sean"
        },
        {
          "sp_es": "",
          "text_es": "Cuerpo y ✠ Sangre"
        },
        {
          "sp_es": "",
          "text_es": "de Jesucristo, nuestro Señor,"
        },
        {
          "rubric_es": "Junta las manos."
        },
        {
          "sp_es": "",
          "text_es": "y así celebremos el gran misterio"
        },
        {
          "sp_es": "",
          "text_es": "que nos dejó como alianza eterna."
        },
        {
          "rubric_es": "119. En las fórmulas que siguen, las palabras del Señor han de pronunciarse con"
        },
        {
          "rubric_es": "claridad, como lo requiere la naturaleza de éstas."
        },
        {
          "sp_es": "",
          "text_es": "Porque él mismo,"
        },
        {
          "sp_es": "",
          "text_es": "llegada la hora en que había de ser glorificado"
        },
        {
          "sp_es": "",
          "text_es": "por ti, Padre santo,"
        },
        {
          "sp_es": "",
          "text_es": "habiendo amado a los suyos"
        },
        {
          "sp_es": "",
          "text_es": "que estaban en el mundo,"
        },
        {
          "sp_es": "",
          "text_es": "los amó hasta el extremo."
        },
        {
          "sp_es": "",
          "text_es": "Y, mientras cenaba con sus discípulos,"
        },
        {
          "rubric_es": "Toma el pan y, sosteniéndolo un poco elevado sobre el altar, prosigue:"
        },
        {
          "sp_es": "",
          "text_es": "tomó pan,"
        },
        {
          "sp_es": "",
          "text_es": "te bendijo,"
        },
        {
          "sp_es": "",
          "text_es": "lo partió"
        },
        {
          "sp_es": "",
          "text_es": "y se lo dio diciendo:"
        },
        {
          "rubric_es": "Se inclina un poco."
        },
        {
          "rubric_es": "TOMAD Y COMED TODOS DE ÉL,"
        },
        {
          "rubric_es": "PORQUE ÉSTO ES MI CUERPO"
        },
        {
          "rubric_es": "QUE SERÁ ENTREGADO POR VOSOTROS."
        },
        {
          "rubric_es": "Muestra el pan consagrado al pueblo, lo deposita luego sobre la patena y lo adora"
        },
        {
          "rubric_es": "haciendo genuflexión."
        },
        {
          "rubric_es": "120. Después prosigue:"
        },
        {
          "sp_es": "",
          "text_es": "Del mismo modo, acabada la cena,"
        },
        {
          "rubric_es": "Toma el cáliz y, sosteniéndolo un poco elevado sobre el altar, dice:"
        },
        {
          "sp_es": "",
          "text_es": "tomó este cáliz glorioso"
        },
        {
          "sp_es": "",
          "text_es": "en sus santas y venerables manos;"
        },
        {
          "sp_es": "",
          "text_es": "dando gracias te bendijo,"
        },
        {
          "sp_es": "",
          "text_es": "y lo dio a sus discípulos diciendo:"
        },
        {
          "rubric_es": "Se inclina un poco."
        },
        {
          "rubric_es": "TOMAD Y BEBED TODOS DE ÉL,"
        },
        {
          "rubric_es": "PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE,"
        },
        {
          "rubric_es": "SANGRE DE LA ALIANZA NUEVA Y ETERNA,"
        },
        {
          "rubric_es": "QUE SERÁ DERRAMADA POR VOSOTROS"
        },
        {
          "rubric_es": "Y POR MUCHOS"
        },
        {
          "rubric_es": "PARA EL PERDÓN DE LOS PECADOS."
        },
        {
          "rubric_es": "HACED ESTO EN CONMEMORACIÓN MÍA."
        },
        {
          "rubric_es": "Muestra el cáliz al pueblo, lo deposita luego sobre el corporal y lo adora haciendo"
        },
        {
          "rubric_es": "genuflexión."
        },
        {
          "rubric_es": "121. Luego dice una de las siguientes fórmulas:"
        },
        {
          "sp_es": "",
          "text_es": "Éste es el Misterio de la fe."
        },
        {
          "rubric_es": "O bien:"
        },
        {
          "sp_es": "",
          "text_es": "Éste es el Sacramento de nuestra fe."
        },
        {
          "rubric_es": "Y el pueblo prosigue, aclamando:"
        },
        {
          "sp_es": "",
          "text_es": "Anunciamos tu muerte,"
        },
        {
          "sp_es": "",
          "text_es": "proclamamos tu resurrección."
        },
        {
          "sp_es": "",
          "text_es": "¡Ven, Señor Jesús!"
        },
        {
          "rubric_es": "También puede decirse:"
        },
        {
          "sp_es": "",
          "text_es": "Éste es el Misterio de la fe."
        },
        {
          "sp_es": "",
          "text_es": "Cristo nos redimió."
        },
        {
          "rubric_es": "Y el pueblo prosigue, aclamando:"
        },
        {
          "sp_es": "",
          "text_es": "Cada vez que comemos de este pan"
        },
        {
          "sp_es": "",
          "text_es": "y bebemos de este cáliz,"
        },
        {
          "sp_es": "",
          "text_es": "anunciamos tu muerte,"
        },
        {
          "sp_es": "",
          "text_es": "Señor, hasta que vuelvas."
        },
        {
          "rubric_es": "O bien:"
        },
        {
          "sp_es": "",
          "text_es": "Éste es el Misterio de la fe."
        },
        {
          "sp_es": "",
          "text_es": "Cristo se entregó por nosotros."
        },
        {
          "rubric_es": "Y el pueblo prosigue, aclamando:"
        },
        {
          "sp_es": "",
          "text_es": "Salvador del mundo, sálvanos,"
        },
        {
          "sp_es": "",
          "text_es": "tu que nos has liberado por tu cruz y resurrección."
        },
        {
          "rubric_es": "122. Después el sacerdote, con las manos extendidas, dice:"
        },
        {
          "rubric_es": "P"
        },
        {
          "sp_es": "",
          "text_es": "or eso, Padre,"
        },
        {
          "sp_es": "CC",
          "text_es": "al celebrar ahora el memorial de nuestra redención,"
        },
        {
          "sp_es": "",
          "text_es": "recordamos la muerte de Cristo"
        },
        {
          "sp_es": "",
          "text_es": "y su descenso al lugar de los muertos,"
        },
        {
          "sp_es": "",
          "text_es": "proclamamos su resurrección y ascensión a tu derecha;"
        },
        {
          "sp_es": "",
          "text_es": "y mientras esperamos su venida gloriosa,"
        },
        {
          "sp_es": "",
          "text_es": "te ofrecemos su Cuerpo y su Sangre,"
        },
        {
          "sp_es": "",
          "text_es": "sacrificio agradable a ti"
        },
        {
          "sp_es": "",
          "text_es": "y salvación para todo el mundo."
        },
        {
          "sp_es": "",
          "text_es": "Dirige tu mirada sobre esta Víctima"
        },
        {
          "sp_es": "",
          "text_es": "que tú mismo has preparado a tu Iglesia,"
        },
        {
          "sp_es": "",
          "text_es": "y concede a cuantos compartimos"
        },
        {
          "sp_es": "",
          "text_es": "este pan y este cáliz,"
        },
        {
          "sp_es": "",
          "text_es": "que, congregados en un solo cuerpo"
        },
        {
          "sp_es": "",
          "text_es": "por el Espíritu Santo,"
        },
        {
          "sp_es": "",
          "text_es": "seamos en Cristo"
        },
        {
          "sp_es": "",
          "text_es": "víctima viva para alabanza de tu gloria."
        },
        {
          "rubric_es": "Y"
        },
        {
          "sp_es": "",
          "text_es": "ahora, Señor, acuérdate"
        },
        {
          "sp_es": "C1",
          "text_es": "de todos aquellos por quienes se ofrece"
        },
        {
          "sp_es": "",
          "text_es": "este sacrificio:"
        },
        {
          "sp_es": "",
          "text_es": "de tu servidor el Papa N.,"
        },
        {
          "sp_es": "",
          "text_es": "de nuestro obispo N.,"
        },
        {
          "rubric_es": "Puede hacerse también mención de los Obispos coadjutores o auxiliares."
        },
        {
          "rubric_es": "El Obispo, cuando celebra en su diócesis, dice:"
        },
        {
          "sp_es": "",
          "text_es": "conmigo, indigno siervo tuyo,"
        },
        {
          "rubric_es": "Cuando celebra un Obispo que no es el Ordinario diocesano, dice:"
        },
        {
          "rubric_es": "N. N."
        },
        {
          "sp_es": "",
          "text_es": "con mi hermano , Obispo de esta Iglesia de ,"
        },
        {
          "sp_es": "",
          "text_es": "conmigo, indigno siervo tuyo,"
        },
        {
          "sp_es": "",
          "text_es": "del orden episcopal y de los presbíteros y diáconos,"
        },
        {
          "sp_es": "",
          "text_es": "de los oferentes y de los aquí reunidos,"
        },
        {
          "rubric_es": "INTERCESIONES PARTICULARES"
        },
        {
          "rubric_es": "En las misas de Pascua y en la del bautismos:"
        },
        {
          "rubric_es": "* de nuestros hermanos [N. y N.]"
        },
        {
          "sp_es": "",
          "text_es": "que hoy has hecho renacer del agua del Espíritu Santo,"
        },
        {
          "rubric_es": "En la misa de la confirmación:"
        },
        {
          "rubric_es": "* de tus hijos [N. y N.],"
        },
        {
          "sp_es": "",
          "text_es": "que hoy has confirmado marcándolos"
        },
        {
          "sp_es": "",
          "text_es": "con el sello del Espíritu Santo,"
        },
        {
          "rubric_es": "En la misa de primera comunión:"
        },
        {
          "rubric_es": "* de tus hijos [N. y N.],"
        },
        {
          "sp_es": "",
          "text_es": "que por vez primera invitas en este día"
        },
        {
          "sp_es": "",
          "text_es": "a participar del pan de vida y del cáliz de salvación,"
        },
        {
          "sp_es": "",
          "text_es": "en la mesa de tu familia,"
        },
        {
          "rubric_es": "En la misa del matrimonio:"
        },
        {
          "rubric_es": "* de tus hijos [N. y N.], que en Cristo hoy"
        },
        {
          "sp_es": "",
          "text_es": "han fundado una nueva familia,"
        },
        {
          "sp_es": "",
          "text_es": "de todo tu pueblo santo"
        },
        {
          "sp_es": "",
          "text_es": "y de aquellos que te buscan con sincero corazón."
        },
        {
          "rubric_es": "A"
        },
        {
          "sp_es": "",
          "text_es": "cuérdate también"
        },
        {
          "sp_es": "C2",
          "text_es": "de los que murieron en la paz de Cristo"
        },
        {
          "sp_es": "",
          "text_es": "y de todos los difuntos,"
        },
        {
          "sp_es": "",
          "text_es": "cuya fe sólo tú conociste."
        },
        {
          "sp_es": "",
          "text_es": "Padre de bondad,"
        },
        {
          "sp_es": "",
          "text_es": "que todos tus hijos nos reunamos"
        },
        {
          "sp_es": "",
          "text_es": "en la heredad de tu reino,"
        },
        {
          "sp_es": "",
          "text_es": "con María, la Virgen Madre de Dios,"
        },
        {
          "sp_es": "",
          "text_es": "con su esposo san José,"
        },
        {
          "sp_es": "",
          "text_es": "con los apóstoles y los santos;"
        },
        {
          "sp_es": "",
          "text_es": "y allí, junto con toda la creación"
        },
        {
          "sp_es": "",
          "text_es": "libre ya de pecado y de muerte,"
        },
        {
          "rubric_es": "Junta las manos."
        },
        {
          "sp_es": "",
          "text_es": "te glorifiquemos por Cristo, Señor nuestro,"
        },
        {
          "sp_es": "",
          "text_es": "por quien concedes al mundo todos los bienes."
        }
      ]
    },
    "common_dialogue": [
      {
        "rubric_es": "31. El sacerdote comienza la plegaria eucarística con el prefacio."
      },
      {
        "rubric_es": "Con las manos extendidas dice:"
      },
      {
        "sp_es": "",
        "text_es": "El Señor esté con vosotros."
      },
      {
        "rubric_es": "El pueblo responde:"
      },
      {
        "sp_es": "",
        "text_es": "Y con tu espíritu."
      },
      {
        "rubric_es": "El sacerdote, elevando las manos, prosigue:"
      },
      {
        "sp_es": "",
        "text_es": "Levantemos el corazón."
      },
      {
        "rubric_es": "El pueblo responde:"
      },
      {
        "sp_es": "",
        "text_es": "Lo tenemos levantado hacia el Señor."
      },
      {
        "rubric_es": "El sacerdote, con las manos extendidas, añade:"
      },
      {
        "sp_es": "",
        "text_es": "Demos gracias al Señor, nuestro Dios."
      },
      {
        "rubric_es": "El pueblo responde:"
      },
      {
        "sp_es": "",
        "text_es": "Es justo y necesario."
      },
      {
        "rubric_es": "El sacerdote prosigue el Prefacio con las manos extendidas."
      },
      {
        "rubric_es": "Al final del Prefacio, junta las manos y en unión del pueblo, concluye el prefacio,"
      },
      {
        "rubric_es": "cantando o diciendo en voz alta:"
      }
    ],
    "sanctus": [
      {
        "sp_es": "",
        "text_es": "Santo, Santo, Santo es el Señor, Dios del universo."
      },
      {
        "sp_es": "",
        "text_es": "Llenos están el cielo y la tierra de tu gloria."
      },
      {
        "sp_es": "",
        "text_es": "Hosanna en el cielo."
      },
      {
        "sp_es": "",
        "text_es": "Bendito el que viene en nombre del Señor."
      },
      {
        "sp_es": "",
        "text_es": "Hosanna en el cielo."
      }
    ],
    "formEndings": {
      "1": [
        {
          "rubric_es": "98. Toma la patena con el pan consagrado, y el cáliz y, sosteniéndolos elevados,"
        },
        {
          "rubric_es": "dice:"
        },
        {
          "rubric_es": "P"
        },
        {
          "text_es": "or Cristo, con él y en él,"
        },
        {
          "text_es": "a ti, Dios Padre omnipotente,",
          "sp_es": "CP"
        },
        {
          "rubric_es": "o"
        },
        {
          "text_es": "en la unidad del Espíritu Santo,"
        },
        {
          "text_es": "todo honor y toda gloria",
          "sp_es": "CC"
        },
        {
          "text_es": "por los siglos de los siglos."
        },
        {
          "rubric_es": "El pueblo aclama:"
        },
        {
          "text_es": "Amén."
        },
        {
          "rubric_es": "Después sigue el rito de la Comunión."
        }
      ],
      "2": [
        {
          "rubric_es": "106. Toma la patena con el pan consagrado, y el cáliz y, sosteniéndolos elevados,"
        },
        {
          "rubric_es": "dice:"
        },
        {
          "rubric_es": "P"
        },
        {
          "text_es": "or Cristo, con él y en él,"
        },
        {
          "text_es": "a ti, Dios Padre omnipotente,",
          "sp_es": "CP"
        },
        {
          "rubric_es": "o"
        },
        {
          "text_es": "en la unidad del Espíritu Santo,"
        },
        {
          "text_es": "todo honor y toda gloria",
          "sp_es": "CC"
        },
        {
          "text_es": "por los siglos de los siglos."
        },
        {
          "rubric_es": "El pueblo aclama:"
        },
        {
          "text_es": "Amén."
        },
        {
          "rubric_es": "Después sigue el rito de la Comunión."
        }
      ],
      "3": [
        {
          "rubric_es": "116. Toma la patena con el pan consagrado y el cáliz y, sosteniéndolos elevados,"
        },
        {
          "rubric_es": "dice:"
        },
        {
          "rubric_es": "P"
        },
        {
          "text_es": "or Cristo, con él y en él,"
        },
        {
          "text_es": "a ti, Dios Padre omnipotente,",
          "sp_es": "CP"
        },
        {
          "rubric_es": "o"
        },
        {
          "text_es": "en la unidad del Espíritu Santo,"
        },
        {
          "text_es": "todo honor y toda gloria",
          "sp_es": "CC"
        },
        {
          "text_es": "por los siglos de los siglos."
        },
        {
          "rubric_es": "El pueblo aclama:"
        },
        {
          "text_es": "Amén."
        },
        {
          "rubric_es": "Después sigue el rito de la Comunión."
        }
      ],
      "4": [
        {
          "rubric_es": "123. Toma la patena con el pan consagrado y el cáliz y, sosteniéndolos elevados, dice:"
        },
        {
          "rubric_es": "P"
        },
        {
          "text_es": "or Cristo, con él y en él,"
        },
        {
          "text_es": "a ti, Dios Padre omnipotente,",
          "sp_es": "CP"
        },
        {
          "rubric_es": "o"
        },
        {
          "text_es": "en la unidad del Espíritu Santo,"
        },
        {
          "text_es": "todo honor y toda gloria",
          "sp_es": "CC"
        },
        {
          "text_es": "por los siglos de los siglos."
        },
        {
          "rubric_es": "El pueblo aclama:"
        },
        {
          "text_es": "Amén."
        },
        {
          "rubric_es": "Después sigue el rito de la Comunión."
        }
      ]
    },
    "amen": [],
    "formFrames": {
      "1": {
        "sections": [
          "dialogue",
          "preface",
          "sanctus",
          "form",
          "ending"
        ]
      },
      "2": {
        "sections": [
          "dialogue",
          "preface",
          "sanctus",
          "form",
          "ending"
        ]
      },
      "3": {
        "sections": [
          "dialogue",
          "preface",
          "sanctus",
          "form",
          "ending"
        ]
      },
      "4": {
        "sections": [
          "dialogue",
          "form",
          "ending"
        ]
      }
    }
  },
  {
    "id": "3.4 lords_prayer",
    "type": "part",
    "header": {
      "es": "Rito de la comunión — Padrenuestro"
    },
    "lines": [
      {
        "rubric_es": "124. Una vez que ha dejado el cáliz y la patena, el sacerdote, con las manos juntas, dice:"
      },
      {
        "sp_es": "",
        "text_es": "Fieles a la recomendación del Salvador"
      },
      {
        "sp_es": "",
        "text_es": "y siguiendo su divina enseñanza,"
      },
      {
        "sp_es": "",
        "text_es": "nos atrevemos a decir:"
      },
      {
        "rubric_es": "O bien:"
      },
      {
        "sp_es": "",
        "text_es": "Llenos de alegría por ser hijos de Dios,"
      },
      {
        "sp_es": "",
        "text_es": "digamos confiadamente"
      },
      {
        "sp_es": "",
        "text_es": "la oración que Cristo nos enseñó:"
      },
      {
        "rubric_es": "O bien:"
      },
      {
        "sp_es": "",
        "text_es": "El amor de Dios ha sido derramado"
      },
      {
        "sp_es": "",
        "text_es": "en nuestros corazones"
      },
      {
        "sp_es": "",
        "text_es": "con el Espíritu Santo que se nos ha dado;"
      },
      {
        "sp_es": "",
        "text_es": "digamos con fe y esperanza:"
      },
      {
        "rubric_es": "O bien:"
      },
      {
        "sp_es": "",
        "text_es": "Antes de participar en el banquete de la Eucaristía,"
      },
      {
        "sp_es": "",
        "text_es": "signo de reconciliación"
      },
      {
        "sp_es": "",
        "text_es": "y vínculo de unión fraterna,"
      },
      {
        "sp_es": "",
        "text_es": "oremos juntos como el Señor nos ha enseñado:"
      },
      {
        "rubric_es": "Extiende las manos y, junto con el pueblo, continúa:"
      },
      {
        "sp_es": "",
        "text_es": "Padre nuestro, que estás en el cielo,"
      },
      {
        "sp_es": "",
        "text_es": "santificado sea tu nombre;"
      },
      {
        "sp_es": "",
        "text_es": "venga a nosotros tu reino;"
      },
      {
        "sp_es": "",
        "text_es": "hágase tu voluntad en la tierra como en el cielo."
      },
      {
        "sp_es": "",
        "text_es": "Danos hoy nuestro pan de cada día;"
      },
      {
        "sp_es": "",
        "text_es": "perdona nuestras ofensas,"
      },
      {
        "sp_es": "",
        "text_es": "como nosotros perdonamos"
      },
      {
        "sp_es": "",
        "text_es": "a los que nos ofenden;"
      },
      {
        "sp_es": "",
        "text_es": "no nos dejes caer en la tentación,"
      },
      {
        "sp_es": "",
        "text_es": "y líbranos del mal."
      },
      {
        "rubric_es": "125. El sacerdote, con las manos extendidas, prosigue él solo:"
      },
      {
        "sp_es": "",
        "text_es": "Líbranos de todos los males, Señor,"
      },
      {
        "sp_es": "",
        "text_es": "y concédenos la paz en nuestros días,"
      },
      {
        "sp_es": "",
        "text_es": "para que, ayudados por tu misericordia,"
      },
      {
        "sp_es": "",
        "text_es": "vivamos siempre libres de pecado"
      },
      {
        "sp_es": "",
        "text_es": "y protegidos de toda perturbación,"
      },
      {
        "sp_es": "",
        "text_es": "mientras esperamos la gloriosa venida"
      },
      {
        "sp_es": "",
        "text_es": "de nuestro Salvador Jesucristo."
      },
      {
        "rubric_es": "Junta las manos."
      },
      {
        "rubric_es": "El pueblo concluye la oración aclamando:"
      },
      {
        "sp_es": "",
        "text_es": "Tuyo es el reino,"
      },
      {
        "sp_es": "",
        "text_es": "tuyo el poder y la gloria por siempre, Señor."
      }
    ]
  },
  {
    "id": "3.5 peace",
    "type": "part",
    "header": {
      "es": "Rito de la paz"
    },
    "lines": [
      {
        "rubric_es": "126. Después el sacerdote, con las manos extendidas, dice en voz alta:"
      },
      {
        "sp_es": "",
        "text_es": "Señor Jesucristo,"
      },
      {
        "sp_es": "",
        "text_es": "que dijiste a tus Apóstoles:"
      },
      {
        "sp_es": "",
        "text_es": "«La paz os dejo, mi paz os doy»,"
      },
      {
        "sp_es": "",
        "text_es": "no tengas en cuenta nuestros pecados,"
      },
      {
        "sp_es": "",
        "text_es": "sino la fe de tu Iglesia,"
      },
      {
        "sp_es": "",
        "text_es": "y conforme a tu palabra,"
      },
      {
        "sp_es": "",
        "text_es": "concédele la paz y la unidad."
      },
      {
        "rubric_es": "Junta las manos."
      },
      {
        "sp_es": "",
        "text_es": "Tú que vives y reinas"
      },
      {
        "sp_es": "",
        "text_es": "por los siglos de los siglos."
      },
      {
        "rubric_es": "El pueblo responde:"
      },
      {
        "sp_es": "",
        "text_es": "Amén."
      },
      {
        "rubric_es": "127. El sacerdote, extendiendo y juntando las manos, añade:"
      },
      {
        "sp_es": "",
        "text_es": "La paz del Señor esté siempre con vosotros."
      },
      {
        "rubric_es": "El pueblo responde:"
      },
      {
        "sp_es": "",
        "text_es": "Y con tu espíritu."
      },
      {
        "rubric_es": "128. Luego, si se juzga oportuno, el diácono, o el sacerdote, añade:"
      },
      {
        "sp_es": "",
        "text_es": "Daos fraternalmente la paz."
      },
      {
        "rubric_es": "O bien:"
      },
      {
        "sp_es": "",
        "text_es": "Como hijos de Dios, intercambiad ahora"
      },
      {
        "sp_es": "",
        "text_es": "un signo de comunión fraterna."
      },
      {
        "rubric_es": "O bien:"
      },
      {
        "sp_es": "",
        "text_es": "En Cristo, que nos ha hecho hermanos con su cruz,"
      },
      {
        "sp_es": "",
        "text_es": "daos la paz como signo de reconciliación."
      },
      {
        "rubric_es": "O bien:"
      },
      {
        "sp_es": "",
        "text_es": "En el Espíritu de Cristo resucitado,"
      },
      {
        "sp_es": "",
        "text_es": "daos fraternalmente la paz."
      },
      {
        "rubric_es": "Y todos, según la costumbre del lugar, se dan la paz. El sacerdote da la paz al diácono"
      },
      {
        "rubric_es": "o ministro."
      }
    ]
  },
  {
    "id": "3.6 lamb",
    "type": "part",
    "header": {
      "es": "Fracción del pan — Cordero de Dios"
    },
    "lines": [
      {
        "rubric_es": "129. Después toma el pan consagrado, lo parte sobre la patena, y deja caer una parte del"
      },
      {
        "rubric_es": "mismo en el cáliz, diciendo en secreto:"
      },
      {
        "sp_es": "",
        "text_es": "El Cuerpo y la Sangre de nuestro Señor Jesucristo,"
      },
      {
        "sp_es": "",
        "text_es": "unidos en este cáliz,"
      },
      {
        "sp_es": "",
        "text_es": "sean para nosotros"
      },
      {
        "sp_es": "",
        "text_es": "alimento de vida eterna."
      },
      {
        "rubric_es": "144. Mientras tanto se canta o se dice:"
      },
      {
        "sp_es": "",
        "text_es": "Cordero de Dios que quitas el pecado del mundo,"
      },
      {
        "sp_es": "",
        "text_es": "ten piedad de nosotros."
      },
      {
        "sp_es": "",
        "text_es": "Cordero de Dios que quitas el pecado del mundo,"
      },
      {
        "sp_es": "",
        "text_es": "ten piedad de nosotros."
      },
      {
        "sp_es": "",
        "text_es": "Cordero de Dios que quitas el pecado del mundo,"
      },
      {
        "sp_es": "",
        "text_es": "danos la paz."
      },
      {
        "rubric_es": "Si la fracción del pan se prolonga, el canto precedente puede repetirse varias veces."
      },
      {
        "rubric_es": "La última vez se dice: danos la paz."
      }
    ]
  },
  {
    "id": "3.7 communion_rite",
    "type": "part",
    "header": {
      "es": "Comunión"
    },
    "lines": [
      {
        "rubric_es": "131. A continuación el sacerdote, con las manos juntas, dice en secreto una de las dos"
      },
      {
        "rubric_es": "oraciones siguientes:"
      },
      {
        "sp_es": "",
        "text_es": "Señor Jesucristo, Hijo de Dios vivo,"
      },
      {
        "sp_es": "",
        "text_es": "que por voluntad del Padre,"
      },
      {
        "sp_es": "",
        "text_es": "cooperando el Espíritu Santo,"
      },
      {
        "sp_es": "",
        "text_es": "diste con tu muerte la vida al mundo,"
      },
      {
        "sp_es": "",
        "text_es": "líbrame, por la recepción de tu Cuerpo y de tu Sangre,"
      },
      {
        "sp_es": "",
        "text_es": "de todas mis culpas y de todo mal."
      },
      {
        "sp_es": "",
        "text_es": "Concédeme cumplir siempre tus mandamientos"
      },
      {
        "sp_es": "",
        "text_es": "y jamás permitas que me separe de ti."
      },
      {
        "rubric_es": "O bien:"
      },
      {
        "sp_es": "",
        "text_es": "Señor Jesucristo,"
      },
      {
        "sp_es": "",
        "text_es": "la comunión de tu Cuerpo y de tu Sangre,"
      },
      {
        "sp_es": "",
        "text_es": "no sea para mí un motivo de juicio y condenación,"
      },
      {
        "sp_es": "",
        "text_es": "sino que, por tu piedad,"
      },
      {
        "sp_es": "",
        "text_es": "me aproveche para defensa de alma y cuerpo"
      },
      {
        "sp_es": "",
        "text_es": "y como remedio saludable."
      },
      {
        "rubric_es": "132. El sacerdote hace genuflexión, toma el pan consagrado y, sosteniéndolo un poco"
      },
      {
        "rubric_es": "elevado sobre la patena, lo muestra al pueblo, diciendo:"
      },
      {
        "sp_es": "",
        "text_es": "Éste es el Cordero de Dios,"
      },
      {
        "sp_es": "",
        "text_es": "que quita el pecado del mundo."
      },
      {
        "sp_es": "",
        "text_es": "Dichosos los invitados a la cena del Señor."
      },
      {
        "rubric_es": "Y, juntamente con el pueblo, añade una vez:"
      },
      {
        "sp_es": "",
        "text_es": "Señor, no soy digno"
      },
      {
        "sp_es": "",
        "text_es": "de que entres en mi casa,"
      },
      {
        "sp_es": "",
        "text_es": "pero una palabra tuya"
      },
      {
        "sp_es": "",
        "text_es": "bastará para sanarme."
      },
      {
        "rubric_es": "133. El sacerdote dice en secreto:"
      },
      {
        "sp_es": "",
        "text_es": "El Cuerpo de Cristo me guarde para la vida eterna."
      },
      {
        "rubric_es": "Y comulga reverentemente el Cuerpo de Cristo."
      },
      {
        "rubric_es": "Después toma el cáliz y dice en secreto:"
      },
      {
        "sp_es": "",
        "text_es": "La Sangre de Cristo me guarde para la vida eterna."
      },
      {
        "rubric_es": "Y bebe reverentemente la Sangre de Cristo."
      },
      {
        "rubric_es": "134. Después toma la patena o la píxide, se acerca a los que quieren comulgar y les"
      },
      {
        "rubric_es": "presenta el pan consagrado, que sostiene un poco elevado, diciendo a cada uno de ellos:"
      },
      {
        "sp_es": "",
        "text_es": "El Cuerpo de Cristo."
      },
      {
        "rubric_es": "El que va a comulgar responde:"
      },
      {
        "sp_es": "",
        "text_es": "Amén."
      },
      {
        "rubric_es": "Y comulga."
      },
      {
        "rubric_es": "El diácono y los ministros que distribuyen la Eucaristía observan los mismos ritos."
      },
      {
        "rubric_es": "135. Si se comulga bajo las dos especies, se observa el rito descrito en su lugar."
      },
      {
        "rubric_es": "136. Cuando el sacerdote comulga el Cuerpo de Cristo, comienza el canto de comunión."
      },
      {
        "rubric_es": "137. Acabada la comunión, el diácono, el acólito, o el mismo sacerdote, purifica la patena"
      },
      {
        "rubric_es": "sobre el cáliz y también el mismo cáliz, a no ser que se prefiera purificarlo en la credencia"
      },
      {
        "rubric_es": "después de la misa."
      },
      {
        "rubric_es": "Si el sacerdote hace la purificación, dice en secreto:"
      },
      {
        "sp_es": "",
        "text_es": "Haz, Señor, que recibamos con un corazón limpio"
      },
      {
        "sp_es": "",
        "text_es": "el alimento que acabamos de tomar,"
      },
      {
        "sp_es": "",
        "text_es": "y que el don que nos haces en esta vida"
      },
      {
        "sp_es": "",
        "text_es": "nos aproveche para la eterna."
      },
      {
        "rubric_es": "138. Después el sacerdote puede ir a la sede. Si se juzga oportuno, se pueden guardar"
      },
      {
        "rubric_es": "unos momentos de silencio o cantar un salmo o cántico de alabanza."
      }
    ]
  },
  {
    "id": "3.8 communion",
    "type": "part",
    "header": {
      "es": "Antífona de la comunión"
    },
    "lines": [
      {
        "sp_es": "",
        "text_es": "(Antífona de la comunión del día)"
      }
    ]
  },
  {
    "id": "3.9 prayer_after",
    "type": "part",
    "header": {
      "es": "Oración después de la comunión"
    },
    "lines": [
      {
        "sp_es": "C.",
        "text_es": "Oremos."
      },
      {
        "sp_es": "",
        "text_es": "(Oración después de la comunión del día)"
      },
      {
        "sp_es": "R/.",
        "text_es": "Amén."
      }
    ]
  },
  {
    "id": "4. THE CONCLUDING RITES",
    "type": "section",
    "es": "Rito de conclusión"
  },
  {
    "id": "4.1 announcement",
    "type": "part",
    "header": {
      "es": "Avisos"
    },
    "lines": [
      {
        "rubric_es": "140. En este momento se hacen, si es necesario y con brevedad, los oportunos anuncios"
      },
      {
        "rubric_es": "o advertencias al pueblo."
      }
    ]
  },
  {
    "id": "4.2 blessing",
    "type": "selectable",
    "header": {
      "es": "Bendición"
    },
    "variants": {
      "A": {
        "label": {
          "es": "Bendición"
        },
        "lines": [
          {
            "rubric_es": "141. Después tiene lugar la despedida. El sacerdote extiende las manos hacia el pueblo y"
          },
          {
            "rubric_es": "dice:"
          },
          {
            "sp_es": "",
            "text_es": "El Señor esté con vosotros."
          },
          {
            "rubric_es": "El pueblo responde:"
          },
          {
            "sp_es": "",
            "text_es": "Y con tu espíritu."
          },
          {
            "rubric_es": "El sacerdote bendice al pueblo, diciendo:"
          },
          {
            "sp_es": "",
            "text_es": "La bendición de Dios todopoderoso,"
          },
          {
            "sp_es": "",
            "text_es": "Padre, Hijo ✠ y Espíritu Santo,"
          },
          {
            "sp_es": "",
            "text_es": "descienda sobre vosotros."
          },
          {
            "rubric_es": "El pueblo responde:"
          },
          {
            "sp_es": "",
            "text_es": "Amén."
          },
          {
            "rubric_es": "142. En algunas ocasiones y en determinadas misas rituales puede darse una de"
          },
          {
            "rubric_es": "la bendiciones solemnes o de las oraciones sobre el pueblo."
          }
        ]
      },
      "B": {
        "label": {
          "es": "Bendición pontifical"
        },
        "lines": [
          {
            "rubric_es": "143. El Obispo, para bendecir al pueblo, usa el siguiente formulario, a no ser que prefiera"
          },
          {
            "rubric_es": "utilizar una de las bendiciones solemnes o una de las oraciones sobre el pueblo."
          },
          {
            "sp_es": "",
            "text_es": "El Señor esté con vosotros."
          },
          {
            "sp_es": "V/.",
            "text_es": "Y con tu espíritu."
          },
          {
            "sp_es": "R/.",
            "text_es": "Bendito se al nombre del Señor."
          },
          {
            "sp_es": "V/.",
            "text_es": "Ahora y por todos los siglos."
          },
          {
            "sp_es": "R/.",
            "text_es": "Nuestro auxilio es el nombre del Señor."
          },
          {
            "sp_es": "V/.",
            "text_es": "Que hizo el cielo y la tierra."
          },
          {
            "sp_es": "R/.",
            "text_es": "La bendición de Dios todopoderoso,"
          },
          {
            "sp_es": "",
            "text_es": "Pa✠dre, Hi✠jo y Espíritu ✠ Santo,"
          },
          {
            "sp_es": "",
            "text_es": "descienda sobre vosotros."
          },
          {
            "sp_es": "",
            "text_es": "Amén."
          }
        ]
      }
    }
  },
  {
    "id": "4.3 dismissal",
    "type": "selectable",
    "header": {
      "es": "Despedida"
    },
    "variants": {
      "A": {
        "label": {
          "es": "Fórmula 1"
        },
        "lines": [
          {
            "rubric_es": "144. Luego el diácono, o el mismo sacerdote, con las manos juntas, despide al pueblo con"
          },
          {
            "rubric_es": "una de las fórmulas siguientes:"
          },
          {
            "sp_es": "R/.",
            "text_es": "Podéis ir en paz."
          }
        ]
      },
      "B": {
        "label": {
          "es": "Fórmula 2"
        },
        "lines": [
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "La alegría del Señor sea nuestra fuerza."
          },
          {
            "sp_es": "",
            "text_es": "Podéis ir en paz."
          }
        ]
      },
      "C": {
        "label": {
          "es": "Fórmula 3"
        },
        "lines": [
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "Glorificad al Señor con vuestra vida."
          },
          {
            "sp_es": "",
            "text_es": "Podéis ir en paz."
          }
        ]
      },
      "D": {
        "label": {
          "es": "Fórmula 4"
        },
        "lines": [
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "En el nombre del Señor,"
          },
          {
            "sp_es": "",
            "text_es": "podéis ir en paz."
          }
        ]
      },
      "E": {
        "label": {
          "es": "Fórmula 5"
        },
        "lines": [
          {
            "rubric_es": "O bien, especialmente en los domingos de Pascua:"
          },
          {
            "sp_es": "",
            "text_es": "Anunciad a todos la alegría del Señor resucitado."
          },
          {
            "sp_es": "",
            "text_es": "Podéis ir en paz."
          },
          {
            "rubric_es": "El pueblo responde:"
          },
          {
            "sp_es": "",
            "text_es": "Demos gracias a Dios."
          }
        ]
      }
    }
  },
  {
    "id": "4.4 final_song",
    "type": "part",
    "header": {
      "es": "Conclusión"
    },
    "lines": [
      {
        "rubric_es": "145. Después el sacerdote besa con veneración el altar, como al comienzo, y, hecha la"
      },
      {
        "rubric_es": "debida reverencia con los ministros, se retira a la sacristía."
      },
      {
        "rubric_es": "146. Si sigue inmediatamente otra acción litúrgica, se omite el rito de despedida."
      }
    ]
  }
]);
  global.countryMassData.ES = Object.freeze({ordinary,
  "schemaVersion": 2,
  jurisdiction: 'ES',
  "jurisdictions": [
    "ES"
  ],
  "jurisdictionName": "España",
  "ordinaryLanguage": "ES",
  "ordinaryEdition": "Misal Romano, tercera edición típica para España",
  "ordinarySource": {
    "authority": "Conferencia Episcopal Española",
    "title": "Ordinario de la Misa — España",
    "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario%20de%20la%20Misa%20Espan%CC%83a.pdf"
  },
  "ordinaryStructure": "paragraph-rubric-choices-v1",
  "beta": true,
  "dailyReadings": {
    "provider": "Lecturas del Día · Leccionario CEE",
    "translation": "Leccionario de la Conferencia Episcopal Española",
    "calendar": "España",
    "parser": "cee-spain",
    "urlStrategy": "cee-spain"
  },
  "missalPrayerData": {
    "temporal": {
      "ordinary-1-0": {
        "key": "ordinary-1-0",
        "kind": "temporal",
        "title": "I SEMANA DEL TIEMPO ORDINARIO",
        "page": 2,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "En un trono excelso vi sentado a un hombre, a quien adora muchedumbre de ángeles, que cantan a una sola voz: «Su imperio es eterno».",
          "collect": "TE pedimos, Señor, que atiendas con tu bondad los deseos del pueblo que te suplica, para que vea lo que tiene que hacer y reciba la fuerza necesaria para cumplirlo. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SEÑ OR, que la ofrenda de tu pueblo te agrade, nos santifique y alcance para nosotros lo que imploramos piadosamente. Por Jesucristo, nuestro Señor.",
          "communion": "Señor, en ti está la fuente viva y tu luz nos hace ver la luz. O bien: Jn 10, Yo he venido para que tengan vida y la tengan abundante, dice el Señor.",
          "prayer_after": "TE suplicamos, Dios todopoderoso, que concedas, a quienes alimentas con tus sacramentos, la gracia de poder servirte llevando una vida según tu voluntad. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "I SEMANA DEL TIEMPO ORDINARIO",
            "page": 2
          },
          "collect": {
            "title": "I SEMANA DEL TIEMPO ORDINARIO",
            "page": 2
          },
          "prayer_offerings": {
            "title": "I SEMANA DEL TIEMPO ORDINARIO",
            "page": 2
          },
          "communion": {
            "title": "I SEMANA DEL TIEMPO ORDINARIO",
            "page": 2,
            "citation": "Sal 35, 10"
          },
          "prayer_after": {
            "title": "I SEMANA DEL TIEMPO ORDINARIO",
            "page": 2
          }
        }
      },
      "ordinary-2-0": {
        "key": "ordinary-2-0",
        "kind": "temporal",
        "title": "II DOMINGO DEL TIEMPO ORDINARIO",
        "page": 3,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Que se postre ante ti, oh, Dios, la tierra entera; que toquen en tu honor; que toquen para tu nombre, oh Altísimo.",
          "collect": "DIOS todopoderoso y eterno, que gobiernas a un tiempo cielo y tierra, escucha compasivo la oración de tu pueblo, y concede tu paz a nuestros días. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "CONCÉDENOS, Señor, participar dignamente en estos sacramentos, pues cada vez que se celebra el memorial del sacrificio de Cristo, se realiza la obra de nuestra redención. Por Jesucristo, nuestro Señor.",
          "communion": "Preparas una mesa ante mí y mi cáliz glorioso rebosa. O bien: Cf. 1 Jn 4, 16 Nosotros hemos conocido y hemos creído en el amor que Dios nos tiene.",
          "prayer_after": "DERRAMA, Señor, en nosotros tu Espíritu de caridad, para que hagas vivir concordes en el amor a quienes has saciado con el mismo pan del cielo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "II DOMINGO DEL TIEMPO ORDINARIO",
            "page": 3,
            "citation": "Cf. Sal 65, 4"
          },
          "collect": {
            "title": "II DOMINGO DEL TIEMPO ORDINARIO",
            "page": 3
          },
          "prayer_offerings": {
            "title": "II DOMINGO DEL TIEMPO ORDINARIO",
            "page": 3
          },
          "communion": {
            "title": "II DOMINGO DEL TIEMPO ORDINARIO",
            "page": 3,
            "citation": "Cf. Sal 22, 5"
          },
          "prayer_after": {
            "title": "II DOMINGO DEL TIEMPO ORDINARIO",
            "page": 3
          }
        }
      },
      "ordinary-3-0": {
        "key": "ordinary-3-0",
        "kind": "temporal",
        "title": "III DOMINGO DEL TIEMPO ORDINARIO",
        "page": 4,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Cantad al Señor un cántico nuevo, cantad al Señor toda la tierra. Honor y majestad le preceden, fuerza y esplendor están en su templo.",
          "collect": "DIOS todopoderoso y eterno, orienta nuestros actos según tu voluntad, para que merezcamos abundar en buenas obras en nombre de tu Hijo predilecto. El, que vive y reina contigo.",
          "prayer_offerings": "SEÑOR, recibe con bondad nuestros dones y, al santificarlos, haz que sean para nosotros dones de salvación. Por Jesucristo, nuestro Señor.",
          "communion": "Contemplad al Señor y quedaréis radiantes, vuestro rostro no se avergonzará. O bien: Cf. Jn 8, 12 Yo soy la luz del mundo, dice el Señor. El que me sigue no camina en las tinieblas, sino que tendrá la luz de la vida.",
          "prayer_after": "CONCÉDENOS, Dios todopoderoso, que cuantos hemos recibido tu gracia vivificadora nos gloriemos siempre del don que nos haces. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "III DOMINGO DEL TIEMPO ORDINARIO",
            "page": 4,
            "citation": "Sal 95, 1. 6"
          },
          "collect": {
            "title": "III DOMINGO DEL TIEMPO ORDINARIO",
            "page": 4
          },
          "prayer_offerings": {
            "title": "III DOMINGO DEL TIEMPO ORDINARIO",
            "page": 4
          },
          "communion": {
            "title": "III DOMINGO DEL TIEMPO ORDINARIO",
            "page": 4,
            "citation": "Cf. Sal 33, 6"
          },
          "prayer_after": {
            "title": "III DOMINGO DEL TIEMPO ORDINARIO",
            "page": 4
          }
        }
      },
      "ordinary-4-0": {
        "key": "ordinary-4-0",
        "kind": "temporal",
        "title": "IV DOMINGO DEL TIEMPO ORDINARIO",
        "page": 5,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Sálvanos, Señor. Dios nuestro, reúnenos de entre los gentiles: daremos gracias a tu santo nombre, y alabarte será nuestra gloria.",
          "collect": "SEÑOR, Dios nuestro, concédenos adorarte con toda el alma y amar a todos los hombres con afecto espiritual. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "PRESENTAMOS, Señor, estas ofrendas en tu altar como signo de nuestro reconocimiento; concédenos, al aceptarlas con bondad, transformarlas en sacramento de nuestra redención. Por Jesucristo, nuestro Señor.",
          "communion": "Haz brillar tu rostro sobre tu siervo, sálvame por tu misericordia, Señor, no quede yo defraudado tras haber acudido a ti. O bien: Mt 5, 3-4 Bienaventurados los pobres en el espíritu, porque de ellos es el reino de los cielos. Bienaventurados los mansos, porque ellos heredarán la tierra.",
          "prayer_after": "ALIMENTADOS por estos dones de nuestra redención, te suplicamos, Señor, que, con este auxilio de salvación eterna, crezca continuamente la fe verdadera. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "IV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 5,
            "citation": "Sal 105, 17"
          },
          "collect": {
            "title": "IV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 5
          },
          "prayer_offerings": {
            "title": "IV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 5
          },
          "communion": {
            "title": "IV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 5,
            "citation": "Sal 30, 17-18"
          },
          "prayer_after": {
            "title": "IV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 5
          }
        }
      },
      "ordinary-5-0": {
        "key": "ordinary-5-0",
        "kind": "temporal",
        "title": "V DOMINGO DEL TIEMPO ORDINARIO",
        "page": 6,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Entrad, postrémonos por tierra, bendiciendo al Señor, creador nuestro. Porque él es nuestro Dios.",
          "collect": "PROTEGE, Señor, con amor continuo a tu familia, para que, al apoyarse en la sola esperanza de tu gracia del cielo, se sienta siempre fortalecida con tu protección. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SEÑOR y Dios nuestro, que has creado estos dones como remedio eficaz de nuestra debilidad, concédenos que sean también p ara nosotros sacramento de vida eterna. Por Jesucristo, nuestro Señor.",
          "communion": "Den gracias al Señor por su misericordia, por las maravillas que hace con los hombres. Calmó el ansia de los sedientos y a los hambrientos los colmó de bienes. O bien: Mt 5, 5-6 Bienaventurados los que lloran, porque ellos serán consolados. Bienaventurados los que tienen hambre y sed de la justicia, porque ellos quedarán saciados.",
          "prayer_after": "OH, Dios, que has querido hacernos partícipes de un mismo pan y de un mismo cáliz, concédenos vivir de tal modo que, unidos en Cristo, fructifiquemos con gozo para la salvación del mundo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "V DOMINGO DEL TIEMPO ORDINARIO",
            "page": 6,
            "citation": "Sal 94, 6-7"
          },
          "collect": {
            "title": "V DOMINGO DEL TIEMPO ORDINARIO",
            "page": 6
          },
          "prayer_offerings": {
            "title": "V DOMINGO DEL TIEMPO ORDINARIO",
            "page": 6
          },
          "communion": {
            "title": "V DOMINGO DEL TIEMPO ORDINARIO",
            "page": 6,
            "citation": "Sal 106, 8-9"
          },
          "prayer_after": {
            "title": "V DOMINGO DEL TIEMPO ORDINARIO",
            "page": 6
          }
        }
      },
      "ordinary-6-0": {
        "key": "ordinary-6-0",
        "kind": "temporal",
        "title": "VI DOMINGO DEL TIEMPO ORDINARIO",
        "page": 7,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Sé la roca de mi refugio, oh, Dios, un baluarte donde me salve, tú que eres mi roca y mi baluarte; por tu nombre dirígeme y aliméntame.",
          "collect": "OH, Dios, que prometiste permanecer en los rectos y sencillos de corazón, concédenos, por tu gracia, vivir de tal manera que te dignes habitar en nosotros. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SEÑOR, que esta oblación nos purifique y nos renueve, y sea causa de eterna recompensa para los que cumplen tu voluntad. Por Jesucristo, nuestro Señor.",
          "communion": "Comieron y se hartaron, así el Señor satisfizo su avidez; no los defraudó según su deseo. O bien: Jn 3,16 Tanto amó Dios al mundo, que entregó a su Unigénito, para que todo el que cree en él no perezca, sino que tenga vida eterna.",
          "prayer_after": "ALIMENTADOS con las delicias del cielo, te pedimos, Señor, que procuremos siempre aquello que nos asegura la vida verdadera. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "VI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 7,
            "citation": "Cf. Sal 30, 3-4"
          },
          "collect": {
            "title": "VI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 7
          },
          "prayer_offerings": {
            "title": "VI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 7
          },
          "communion": {
            "title": "VI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 7,
            "citation": "Cf. Sal 77, 29-30"
          },
          "prayer_after": {
            "title": "VI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 7
          }
        }
      },
      "ordinary-7-0": {
        "key": "ordinary-7-0",
        "kind": "temporal",
        "title": "VII DOMINGO DEL TIEMPO ORDINARIO",
        "page": 8,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Señor, yo confío en tu misericordia: mi alma gozará con tu salvación, y cantaré al Señor por el bien que me ha hecho.",
          "collect": "CONCÉDENOS, Dios todopoderoso, que, meditando siempre las realidades espirituales, cumplamos, de palabra y de obra, lo que a ti te complace. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "AL celebrar tus misterios con la debida reverencia, te rogamos, Señor, que los dones ofrecidos en reconocimiento de tu gloria nos aprovechen para la salvación Por Jesucristo, nuestro Señor.",
          "communion": "Proclamo todas tus maravillas, me alegro y exulto contigo, y toco en honor de tu nombre, oh Altísimo. O bien: Jn 11, 27 Señor, yo creo que tú eres el Cristo, el Hijo de Dios, el que tenía que venir al mundo.",
          "prayer_after": "CONCÉDENOS, Dios todopoderoso, alcanzar el fruto de la salvación, cuyo anticipo hemos recibido por estos sacramentos. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "VII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 8,
            "citation": "Cf. Sal 12, 6"
          },
          "collect": {
            "title": "VII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 8
          },
          "prayer_offerings": {
            "title": "VII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 8
          },
          "communion": {
            "title": "VII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 8,
            "citation": "Cf. Sal 9, 2-3"
          },
          "prayer_after": {
            "title": "VII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 8
          }
        }
      },
      "ordinary-8-0": {
        "key": "ordinary-8-0",
        "kind": "temporal",
        "title": "VIII DOMINGO DEL TIEMPO ORDINARIO",
        "page": 9,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "El Señor fue mi apoyo: me sacó a un lugar espacioso, me libró porque me amaba.",
          "collect": "CONCÉDENOS, Señor, que el mundo progrese según tu designio de paz para nosotros, y que tu Iglesia se alegre en su confiada entrega. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "OH, Dios, que nos das lo que hemos de ofrecerte y vinculas esta ofrenda a nuestro devoto servicio, Imploramos tu misericordia, para que cuanto nos concedes redunde en mérito nuestro y nos alcance los premios eternos. Por Jesucristo, nuestro Señor.",
          "communion": "Cantaré al Señor por el bien que me ha hecho, cantaré al nombre del Dios Altísi mo. O bien: Mt 28, 20 Sabed que yo estoy con vosotros todos los días, hasta el final de los tiempos, dice el Señor.",
          "prayer_after": "SACIADOS con los dones de la salvación, invocamos, Señor, tu misericordia, para que, mediante este sacramento que nos alimenta en nuestra vida temporal, nos hagas participar, en tu bondad, de la vida eterna. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "VIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 9,
            "citation": "Sal 17, 19-20"
          },
          "collect": {
            "title": "VIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 9
          },
          "prayer_offerings": {
            "title": "VIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 9
          },
          "communion": {
            "title": "VIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 9,
            "citation": "Cf. Sal 12, 6"
          },
          "prayer_after": {
            "title": "VIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 9
          }
        }
      },
      "ordinary-9-0": {
        "key": "ordinary-9-0",
        "kind": "temporal",
        "title": "IX DOMINGO DEL TIEMPO ORDINARIO",
        "page": 10,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Mírame, oh, Dios, y ten piedad de mi, que estoy solo y afligido. Mira mis trabajos y mis penas, y perdona todos mis pecados, Dios mío.",
          "collect": "OH, Dios, tu providencia nunca se equivoca en sus designios; te suplicamos con insistencia que apartes de nosotros todo mal y nos concedas todo lo que nos sea conveniente. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SEÑOR, confiando en tu bondad, nos presentamos con ofrendas ante tu santo altar, para que, purificados por tu gracia, quedemos limpios en virtud de estos misterios que ahora celebramos. Por Jesucristo, nuestro Señor.",
          "communion": "Yo te invoco porque tú me respondes, Dios mío; inclina el oído y escucha mis palabras. O bien: Cf. Mc 11, 23. 24 En verdad os digo: todo cuanto pidáis en la oración, creed que os lo han concedido y lo obtendréis, dice el Señor.",
          "prayer_after": "GUÍANOS, Señor, con tu Espíritu, a los que alimentas con el Cuerpo y la Sangre de tu Hijo, para que, alabándote no solo de palabra y con los labios, sino con las obras y el corazón, merezcamos entrar en el reino de los cielos. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "IX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 10,
            "citation": "Cf. Sal 24, 16. 18"
          },
          "collect": {
            "title": "IX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 10
          },
          "prayer_offerings": {
            "title": "IX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 10
          },
          "communion": {
            "title": "IX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 10,
            "citation": "Sal 16, 6"
          },
          "prayer_after": {
            "title": "IX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 10
          }
        }
      },
      "ordinary-10-0": {
        "key": "ordinary-10-0",
        "kind": "temporal",
        "title": "X DOMINGO DEL TIEMPO ORDINARIO",
        "page": 11,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "El Señor es mi luz y mi salvación, ¿a quién temeré? El Señor es la defensa de mi vida, ¿quién me hará temblar? Ellos, mis enemigos y adversarios, tropiezan y caen.",
          "collect": "OH, Dios, fuente de todo bien, escucha a los que te invocamos, para que, inspirados por ti, consideremos lo que es justo y lo cumplamos según tu voluntad. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "MIRA complacido, Señor, nuestro humilde servicio, para que esta ofrenda sea grata a tus ojos y nos haga crecer en el amor. Por Jesucristo, nuestro Señor.",
          "communion": "Yo te invoco porque tú me respondes, Dios mío; inclina el oído y escucha mis palabras. O bien: 1 Jn 4, 16 Dios es amor, y quien permanece en el amor permanece en Dios y Dios en él.",
          "prayer_after": "QUE tu acción medicinal, Señor, nos libere, misericordiosamente, de nuestra maldad y nos conduzca hacia lo que es justo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "X DOMINGO DEL TIEMPO ORDINARIO",
            "page": 11,
            "citation": "Sal 26, 1-2"
          },
          "collect": {
            "title": "X DOMINGO DEL TIEMPO ORDINARIO",
            "page": 11
          },
          "prayer_offerings": {
            "title": "X DOMINGO DEL TIEMPO ORDINARIO",
            "page": 11
          },
          "communion": {
            "title": "X DOMINGO DEL TIEMPO ORDINARIO",
            "page": 11,
            "citation": "Sal 17, 3"
          },
          "prayer_after": {
            "title": "X DOMINGO DEL TIEMPO ORDINARIO",
            "page": 11
          }
        }
      },
      "ordinary-11-0": {
        "key": "ordinary-11-0",
        "kind": "temporal",
        "title": "XI DOMINGO DEL TIEMPO ORDINARIO",
        "page": 12,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Escúchame, Señor, que te llamo. Tú eres mi auxilio; no me deseches, no me abandones, Dios de mi salvación.",
          "collect": "OH, Dios, fuerza de los que en ti esperan, escucha con bondad nuestras súplicas y, pues sin ti nada puede la fragilidad de nuestra naturaleza, concédenos siempre la ayuda de tu gracia, para que, al poner en práctica tus mandamientos te agrademos con nuestros deseos y acciones. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "OH, Dios que, según la doble condición de los dones que presentamos, alimentas a los hombres y los renuevas sacramentalmente, concédenos, por tu bondad, que no nos falte su ayuda para el cuerpo y el espíritu. Por Jesucristo, nuestro Señor.",
          "communion": "Una cosa pido al Señor, eso buscaré: habitar en la casa del Seño r por los días de mi vida. O bien: Jn 17, 11 Padre santo: guarda en tu nombre a los que me has dado, para que sean uno como nosotros, dice el Señor.",
          "prayer_after": "SEÑOR, esta santa comunión contigo que hemos recibido, anticipo de la unión de los fieles en ti, realice también la unidad en tu Iglesia. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "XI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 12,
            "citation": "Sal 26, 7. 9"
          },
          "collect": {
            "title": "XI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 12
          },
          "prayer_offerings": {
            "title": "XI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 12
          },
          "communion": {
            "title": "XI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 12,
            "citation": "Sal 26, 4"
          },
          "prayer_after": {
            "title": "XI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 12
          }
        }
      },
      "ordinary-12-0": {
        "key": "ordinary-12-0",
        "kind": "temporal",
        "title": "XII DOMINGO DEL TIEMPO ORDINARIO",
        "page": 13,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "El Señor es fuerza para su pueblo, apoyo y salvación para su Ungid o. Salva a tu pueblo, Señor, y bendice tu heredad, sé su pastor por siempre.",
          "collect": "CONCÉDENOS tener siempre, Señor, respeto y amor a tu santo nombre, porque jamás dejas de dirigir a quienes estableces en el sólido fundamento de tu amor. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACEPTA, Señor, este sacrificio de reconciliación y alabanza y concédenos que, purificados por su eficacia, te ofrezcamos el obsequio agradable de nuestro corazón. Por Jesucristo, nuestro Señor.",
          "communion": "Los ojos de todos te están aguardando, Señor; tú les das la comida a su tiempo. O bien: Cf. Jn 10, 11. 15 Yo soy el Buen Pastor, yo doy mi vida por las ovejas, dice el Señor.",
          "prayer_after": "RENOVADOS por la recepción del Cuerpo santo y de la Sangre preciosa, imploramos tu bondad, Señor, para obtener con segura clemencia lo que celebramos con fidelidad constante. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "XII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 13,
            "citation": "Cf. Sal 27, 8-9"
          },
          "collect": {
            "title": "XII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 13
          },
          "prayer_offerings": {
            "title": "XII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 13
          },
          "communion": {
            "title": "XII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 13,
            "citation": "Cf. Sal 144, 15"
          },
          "prayer_after": {
            "title": "XII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 13
          }
        }
      },
      "ordinary-13-0": {
        "key": "ordinary-13-0",
        "kind": "temporal",
        "title": "XIII DOMINGO DEL TIEMPO ORDINARIO",
        "page": 14,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Pueblos todos, batid palmas, aclamad a Dios con gritos de júbilo.",
          "collect": "OH, Dios, que por la gracia de la adopción has querido hacernos hijos de la luz, concédenos que no nos veamos envueltos por las tinieblas del error, sino que nos mantengamos siempre en el esplendor de la verdad. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "OH, Dios, que actúas con la eficacia de tus sacramentos, concédenos que nuestro ministerio sea digno de estos dones sagrados. Por Jesucristo, nuestro Señor.",
          "communion": "Bendice, alma mía, al Señor y todo mi ser a su santo nombre. O bien: Cf. Jn 17, 20-21 Padre, por ellos ruego; para que todos sean uno en nosotros, para que el mundo crea que tú me has enviado, dice el Señor.",
          "prayer_after": "LA ofrenda divina que hemos presentado y recibido nos vivifique, Señor, para que, unidos a ti en amor continuo, demos frutos que siempre permanezcan. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "XIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 14,
            "citation": "Sal 46, 2"
          },
          "collect": {
            "title": "XIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 14
          },
          "prayer_offerings": {
            "title": "XIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 14
          },
          "communion": {
            "title": "XIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 14,
            "citation": "Sal 102, 1"
          },
          "prayer_after": {
            "title": "XIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 14
          }
        }
      },
      "ordinary-14-0": {
        "key": "ordinary-14-0",
        "kind": "temporal",
        "title": "XIV DOMINGO DEL TIEMPO ORDINARIO",
        "page": 15,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Oh, Dios, meditamos tu misericordia en medio de tu templo; como tu nombre, oh, Dios, tu alabanza llega al confín de la tierra. Tu diestra está llena de justicia.",
          "collect": "OH, Dios, que en la humillación de tu Hijo levantaste a la humanidad caída, concede a tus fieles una santa alegría, para que disfruten del gozo eterno los que liberaste de la esclavitud del pecado. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "QUE la oblación consagrada a tu nombre nos purifique, Señor, y nos lleve, de día en día, a participar en la vida del cielo. Por Jesucristo, nuestro Señor.",
          "communion": "Gustad y ved qué bueno es el Señor, dichoso el que se acoge a él. O bien: Cf. Mt 11, 28 Venid a mí todos los que estáis cansados y agobiados, y yo os aliviaré, dice el Señor.",
          "prayer_after": "COLMADOS de tan grandes bienes, concédenos, Señor, alcanzar los dones de la salvación y no cesar nunca en tu alabanza. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "XIV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 15,
            "citation": "Sal 47, 10-11"
          },
          "collect": {
            "title": "XIV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 15
          },
          "prayer_offerings": {
            "title": "XIV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 15
          },
          "communion": {
            "title": "XIV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 15,
            "citation": "Sal 33, 9"
          },
          "prayer_after": {
            "title": "XIV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 15
          }
        }
      },
      "ordinary-15-0": {
        "key": "ordinary-15-0",
        "kind": "temporal",
        "title": "XV DOMINGO DEL TIEMPO ORDINARIO",
        "page": 16,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Yo aparezco ante ti con la justicia, y me saciaré mientras se manifestará tu gloria.",
          "collect": "OH, Dios, que muestras la luz de tu verdad a los que andan extraviados para que puedan volver al camino, concede a todos los que se profesan cristianos rechazar lo que es contrario a este nombre y cumplir cuanto en él se significa. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "MIRA Señor, los dones de tu Iglesia suplicante y concede que sean recibidos para crecimiento en santidad de los creyentes. Por Jesucristo, nuestro Señor.",
          "communion": "Hasta el gorrión ha encontrado una casa; la golondrina, un nido donde colocar sus polluelos: tus altares, Señor del universo, Rey y Dios mío. Dichosos los que viven en tu casa, alabándote siempre. O bien: Cf. Jn 6, 56 El que come mi carne y bebe mi sangre habita en mí y yo en él, dice el Señor.",
          "prayer_after": "DESPUÉS de recibir estos dones, te pedimos, Señor, que aumente el fruto de nuestra salvación con la participación frecuente en este sacramento. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "XV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 16,
            "citation": "Cf. Sal 16, 15"
          },
          "collect": {
            "title": "XV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 16
          },
          "prayer_offerings": {
            "title": "XV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 16
          },
          "communion": {
            "title": "XV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 16,
            "citation": "Cf. Sal 83, 4-5"
          },
          "prayer_after": {
            "title": "XV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 16
          }
        }
      },
      "ordinary-16-0": {
        "key": "ordinary-16-0",
        "kind": "temporal",
        "title": "XVI DOMINGO DEL TIEMPO ORDINARIO",
        "page": 17,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Dios es mi auxilio, el Señor sostiene mi vida. Te ofreceré un sacrificio voluntario dando gracias a tu nombre, que es bueno.",
          "collect": "MUÉSTRATE propicio con tus siervos, Señor, y multiplica compasivo los dones de tu gracia sobre ellos, para que, encendidos de fe, esperanza y caridad, perseveren siempre, con observancia atenta, en tus mandatos. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "OH, Dios, que has llevado a la perfección del sacrificio único los diferentes sacrificios de la ley antigua, recibe la ofrenda de tus fieles siervos y santifica estos dones como bendijiste los de Abel, para que la oblación que ofrece cada uno de nosotros en alabanza de tu gloria, beneficie a la salvación de todos. Por Jesucristo, nuestro Señor.",
          "communion": "Ha hecho maravillas memorables, el Señor es piadoso y clemente. Él da alimento a los que lo temen. O bien: Ap 3, 20 Mira, estoy a la puerta y llamo, dice el Señor. Si alguien escucha mi voz y abre la puerta, entraré en su casa y cenaré con él y él conmigo.",
          "prayer_after": "ASISTE, Señor, a tu pueblo y haz que pasemos del antiguo pecado a la vida nueva los que hemos sido alimentados con los sacramentos del cielo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "XVI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 17,
            "citation": "Sal 53, 6. 8"
          },
          "collect": {
            "title": "XVI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 17
          },
          "prayer_offerings": {
            "title": "XVI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 17
          },
          "communion": {
            "title": "XVI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 17,
            "citation": "Sal 110, 4-5"
          },
          "prayer_after": {
            "title": "XVI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 17
          }
        }
      },
      "ordinary-17-0": {
        "key": "ordinary-17-0",
        "kind": "temporal",
        "title": "XVII DOMINGO DEL TIEMPO ORDINARIO",
        "page": 18,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Dios vive en su santa morada. Dios, el que hace habitar juntos en su casa, él mismo dará fuerza y poder a su pueblo.",
          "collect": "OH, Dios, protector de los que en ti esperan y sin el que nada es fuerte ni santo; multiplica sobre nosotros tu misericordia, para que, instruidos y guiados por ti, de tal modo nos sirvamos de los bienes pasajeros que podamos adherirnos ya a los eternos. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "RECIBE, Señor, las ofrendas que te presentamos gracias a tu generosidad, para que estos santos misterios, donde tu poder actúa eficazmente, santifiquen los días de nuestra vida y nos conduzcan a las alegrías eternas. Por Jesucristo, nuestro Señor.",
          "communion": "Bendice, alma mía, al Señor y no olvides sus beneficios. O bien: Mt 5, 7-8 Dichosos los misericordiosos, porque ellos alcanzarán misericordia. Dichosos los limpios de corazón, porque ellos verán a Dios.",
          "prayer_after": "HEMOS recibido, Señor, el santo sacramento, memorial perpetuo de la pasión de tu Hijo; concédenos que este don, que él mismo nos entregó con amor inefable, sea provechoso para nuestra salvación. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "XVII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 18,
            "citation": "Cf. Sal 67, 6-7. 36"
          },
          "collect": {
            "title": "XVII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 18
          },
          "prayer_offerings": {
            "title": "XVII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 18
          },
          "communion": {
            "title": "XVII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 18,
            "citation": "Sal 102, 2"
          },
          "prayer_after": {
            "title": "XVII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 18
          }
        }
      },
      "ordinary-18-0": {
        "key": "ordinary-18-0",
        "kind": "temporal",
        "title": "XVIII DOMINGO DEL TIEMPO ORDINARIO",
        "page": 19,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Dios mío, ven en mi auxilio; Señor, date prisa en socorrerme. Que tú eres mi auxilio y mi liberación. Señor, no tardes.",
          "collect": "ATIENDE, Señor, a tus siervos y derrama tu bondad imperecedera sobre los que te suplican, para que renueves lo que creaste y conserves lo renovado en estos que te alaban como autor y como guía. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "TE pedimos, Señor, que, en tu bondad, santifiques estos dones, aceptes la ofrenda de este sacrificio espiritual y nos transformes en oblación perenne. Por Jesucristo, nuestro Señor.",
          "communion": "Señor, nos diste el pan del cielo, lleno de toda delicia y grato a cualquier gusto. O bien: Cf. Jn 6, 35 Yo soy el pan de vida. El que viene a mí no tendrá hambre y el que cree en mí no tendrá sed jamás, dice el Señor.",
          "prayer_after": "A quienes has renovado con el don del cielo, acompáñalos siempre con tu auxilio, Señor, y, ya que no cesas de reconfortarlos, haz que sean dignos de la redención eterna. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "XVIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 19,
            "citation": "Sal 69, 2. 6"
          },
          "collect": {
            "title": "XVIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 19
          },
          "prayer_offerings": {
            "title": "XVIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 19
          },
          "communion": {
            "title": "XVIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 19,
            "citation": "Cf. Sab 17, 20"
          },
          "prayer_after": {
            "title": "XVIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 19
          }
        }
      },
      "ordinary-19-0": {
        "key": "ordinary-19-0",
        "kind": "temporal",
        "title": "XIX DOMINGO DEL TIEMPO ORDINARIO",
        "page": 20,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Piensa, Señor, en tu alianza, no olvides sin remedio la vida de tus pobres. Levántate, oh, Dios, defiende tu causa, no olvides las voces de los que acuden a ti.",
          "collect": "DIOS todopoderoso y eterno, a quien, instruidos por el Espíritu Santo, nos atrevemos a llamar Padre, renueva en nuestros corazones el espíritu de la adopción filial, para que merezcamos acceder a la herencia prometida. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACEPTA complacido, Señor, los dones que en tu misericordia has dado a tu Iglesia para que pueda ofrecértelos, y que ahora transformas con tu poder en sacramento de nuestra salvación. Por Jesucristo, nuestro Señor.",
          "communion": "Glorifica al Señor, Jerusalén, que te sacia con flor de harina. O bien: Cf. Jn 6, 51 El pan que yo daré es mi carne para vida del mundo, dice el Señor.",
          "prayer_after": "LA comunión en tus sacramentos nos salve, Señor, y nos afiance en la luz de tu verdad. Por Jesucristo nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "XIX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 20,
            "citation": "Cf. Sal 73, 20. 19. 22. 23"
          },
          "collect": {
            "title": "XIX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 20
          },
          "prayer_offerings": {
            "title": "XIX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 20
          },
          "communion": {
            "title": "XIX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 20,
            "citation": "Cf. Sal 147, 12. 14"
          },
          "prayer_after": {
            "title": "XIX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 20
          }
        }
      },
      "ordinary-20-0": {
        "key": "ordinary-20-0",
        "kind": "temporal",
        "title": "XX DOMINGO DEL TIEMPO ORDINARIO",
        "page": 21,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Fíjate, oh, Dios, escudo nuestro; mira el rostro de tu Ungido, porque vale más un día en tus atrios que mil en mi casa.",
          "collect": "OH, Dios, que has preparado bienes invisibles para los que te aman, infunde la ternura de tu amor en nuestros corazones, para que, amándote en todo y sobre todas las cosas, consigamos alcanzar tus promesas, que superan todo deseo. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACEPTA Señor, nuestras ofrendas en las que vas a realizar un admirable intercambio, para que, al ofrecerte lo que tú nos diste, merezcamos recibirte a ti mismo. Por Jesucristo, nuestro Señor.",
          "communion": "Del Señor viene la misericordia, la redención copiosa. O bien: Cf. Jn 6, 51 Yo soy el pan vivo que ha bajado del cielo, dice el Señor; el que coma de este pan vivirá para siempre.",
          "prayer_after": "DESPUÉS de haber participado de Cristo por estos sacramentos, imploramos humildemente tu misericordia, Señor, para que, configurados en la tierra a su imagen, merezcamos participar de su gloria en el cielo. Él, que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "XX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 21,
            "citation": "Sal 83, 10-11"
          },
          "collect": {
            "title": "XX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 21
          },
          "prayer_offerings": {
            "title": "XX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 21
          },
          "communion": {
            "title": "XX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 21,
            "citation": "Sal 129, 7"
          },
          "prayer_after": {
            "title": "XX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 21
          }
        }
      },
      "ordinary-21-0": {
        "key": "ordinary-21-0",
        "kind": "temporal",
        "title": "XXI DOMINGO DEL TIEMPO ORDINARIO",
        "page": 22,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Inclina tu oído, Señor, escúchame. Salva a tu siervo que confía en ti. Piedad de mí, Señor, que a ti te estoy llamando todo el día.",
          "collect": "OH, Dios, que unes los corazones de tus fieles en un mismo deseo, concede a tu pueblo amar lo que prescribes y esperar lo que prometes, para que, en medio de las vicisitudes del mundo, nuestros ánimos se afirmen allí donde están los gozos verdaderos. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SEÑOR, que adquiriste para ti un pueblo de adopción con el sacrificio de una vez para siempre, concédenos propicio los dones de la unidad y de la paz en tu Iglesia. Por Jesucristo, nuestro Señor.",
          "communion": "La tierra se sacia de tu acción fecunda, Señor, para sacar pan de los campos y vino que alegre el corazón del hombre. O bien: Cf. Jn 6, 54 El que come mi carne y bebe mi sangre tiene vida eterna, y yo lo resucitaré en el último día, dice el Señor.",
          "prayer_after": "TE pedimos, Señor, que realices plenamente en nosotros el auxilio de tu misericordia, y haz que seamos tales y actuemos de tal modo que en todo podamos agradarte. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "XXI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 22,
            "citation": "Sal 85, 1-3"
          },
          "collect": {
            "title": "XXI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 22
          },
          "prayer_offerings": {
            "title": "XXI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 22
          },
          "communion": {
            "title": "XXI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 22,
            "citation": "Cf. Sal 103, 13. 14-15"
          },
          "prayer_after": {
            "title": "XXI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 22
          }
        }
      },
      "ordinary-22-0": {
        "key": "ordinary-22-0",
        "kind": "temporal",
        "title": "XXII DOMINGO DEL TIEMPO ORDINARIO",
        "page": 23,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Piedad de mí, Señor; que a ti te estoy llamando todo el día, porque tú, Señor, eres bueno y clemente, rico en misericordia con los que te invocan.",
          "collect": "DIOS todopoderoso, que posees toda perfección, infunde en nuestros corazones el amor de tu nombre y concédenos que, al crecer nuestra piedad, alimentes todo bien en nosotros y con solicitud amorosa lo conserves. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SEÑOR, que esta ofrenda santa nos alcance siempre tu bendición salvadora, para que perfeccione con tu poder lo que realiza en el sacramento Por Jesucristo, nuestro Señor.",
          "communion": "Qué bondad tan grande, Señor, reservas para los que te temen. O bien: Mt 5, 9-10 Bienaventurados los que trabajan por la paz, porque ellos serán llamados hijos de Dios. Bienaventurados los perseguidos por causa de la justicia, porque de ellos es el reino de los cielos.",
          "prayer_after": "SACIADOS con el pan de la mesa del cielo, te pedimos, Señor, que este alimento de la caridad fortalezca nuestros corazones y nos mueva a servirte en nuestros hermanos. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "XXII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 23,
            "citation": "Sal 85, 3. 5"
          },
          "collect": {
            "title": "XXII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 23
          },
          "prayer_offerings": {
            "title": "XXII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 23
          },
          "communion": {
            "title": "XXII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 23,
            "citation": "Sal 30, 20"
          },
          "prayer_after": {
            "title": "XXII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 23
          }
        }
      },
      "ordinary-23-0": {
        "key": "ordinary-23-0",
        "kind": "temporal",
        "title": "XXIII DOMINGO DEL TIEMPO ORDINARIO",
        "page": 24,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Señor, tú eres justo, tus mandamientos son rectos. Trata con misericordia a tu siervo.",
          "collect": "OH, Dios, por ti nos ha venido la redención y se nos ofrece la adopción filial; mira con bondad a los hijos de tu amor, para que cuantos creemos en Cristo alcancemos la libertad verdadera y la herencia eterna. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "OH, Dios, autor de la piedad sincera y de la paz, te pedimos que con esta ofrenda veneremos dignamente tu grandeza y nuestra unión se haga más fuerte por la participación en este sagrado misterio. Por Jesucristo, nuestro Señor.",
          "communion": "Como busca la cierva corrientes de agua, así mi alma te busca a ti, Dios mío; mi alma tiene sed de Dios, del Dios vivo. O bien: Cf. Jn 8, 12 Yo soy la luz del mundo; el que me sigue no camina en tinieblas, sino que tendrá la luz de la vida, dice el Señor.",
          "prayer_after": "CONCEDE, Señor, a tus fieles, alimentados con tu palabra y vivificados con el sacramento del cielo, beneficiarse de los dones de tu Hijo amado, de tal manera que merezcamos participar siempre de su vida. Él, que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "XXIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 24,
            "citation": "Sal 118, 137. 124"
          },
          "collect": {
            "title": "XXIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 24
          },
          "prayer_offerings": {
            "title": "XXIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 24
          },
          "communion": {
            "title": "XXIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 24,
            "citation": "Sal 41, 2-3"
          },
          "prayer_after": {
            "title": "XXIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 24
          }
        }
      },
      "ordinary-24-0": {
        "key": "ordinary-24-0",
        "kind": "temporal",
        "title": "XXIV DOMINGO DEL TIEMPO ORDINARIO",
        "page": 25,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Señor, da la paz a los que esperan en ti, y saca veraces a tus profetas, escucha la súplica de tus siervos y de tu pueblo Israel.",
          "collect": "MÍRANOS, oh, Dios, creador y guía de todas las cosas, y concédenos servirte de todo corazón, para que percibamos el fruto de tu misericordia. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SÉ propicio a nuestras súplicas, Señor, y recibe complacido estas ofrendas de tus siervos, para que la oblación que ofrece cada u no en honor de tu nombre sirva para la salvación de todos. Por Jesucristo, nuestro Señor.",
          "communion": "Qué inapreciable es tu misericordia, oh, Dios. Los humanos se acogen a la sombra de tus alas. O bien: Cf. 1 Cor 10, 16 El cáliz de la bendición que bendecimos es comunión de la Sangre de Cristo; el pan que partimos es participación en el Cuerpo del Señor.",
          "prayer_after": "TE pedimos, Señor, que el fruto del don del cielo penetre nuestros cuerpos y almas, para que sea su efecto, y no nuestro sentimiento, el que prevalezca siempre en nosotros. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "XXIV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 25,
            "citation": "Cf. Eclo 36, 15"
          },
          "collect": {
            "title": "XXIV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 25
          },
          "prayer_offerings": {
            "title": "XXIV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 25
          },
          "communion": {
            "title": "XXIV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 25,
            "citation": "Sal 35, 8"
          },
          "prayer_after": {
            "title": "XXIV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 25
          }
        }
      },
      "ordinary-25-0": {
        "key": "ordinary-25-0",
        "kind": "temporal",
        "title": "XXV DOMINGO DEL TIEMPO ORDINARIO",
        "page": 26,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Yo soy la salvación del pueblo, dice el Señor. Cuando me invoquen en la tribulación, los escucharé y seré para siempre su Señor.",
          "collect": "OH, Dios, que has puesto la plenitud de la ley divina en el amor a ti y al prójimo, concédenos cumplir tus mandamientos, para que merezcamos llegar a la vida eterna. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "RECIBE, Señor, en tu bondad las ofrendas de tu pueblo, para que cuanto creemos por la fe lo alcancemos por el sacramento celestial. Por Jesucristo, nuestro Señor.",
          "communion": "Tú, Señor, promulgas tus decretos para que se observen exactamente; ojalá esté firme mi camino para cumplir tus consignas. O bien: Jn 10, 14 Yo soy el Buen Pastor, dice el Señor, que conozco a mis ovejas, y las mías me conocen.",
          "prayer_after": "SEÑOR, apoya bondadoso con tu ayuda continua a los que alimentas con tus sacramentos, para que consigamos el fruto de la salvación en los sacramentos y en la vida diaria. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "XXV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 26
          },
          "collect": {
            "title": "XXV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 26
          },
          "prayer_offerings": {
            "title": "XXV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 26
          },
          "communion": {
            "title": "XXV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 26,
            "citation": "Sal 118, 4-5"
          },
          "prayer_after": {
            "title": "XXV DOMINGO DEL TIEMPO ORDINARIO",
            "page": 26
          }
        }
      },
      "ordinary-26-0": {
        "key": "ordinary-26-0",
        "kind": "temporal",
        "title": "XXVI DOMINGO DEL TIEMPO ORDINARIO",
        "page": 27,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Cuanto has hecho con nosotros, Señor, es un castigo merecido, porque hemos pecado contra ti y no hemos obedecido tus mandamientos; pero da gloria a tu nombre y trátanos según tu gran misericordia.",
          "collect": "OH, que manifiestas tu poder sobre todo con el perdón y la misericordia, aumenta en nosotros tu gracia, para que, aspirando a tus promesas, nos hagas participar de los bienes del cielo. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "CONCÉDENOS, Dios de misericordia, aceptar esta ofrenda nuestra y que, por ella, se abra para nosotros la fuente de toda bendición. Por Jesucristo, nuestro Señor.",
          "communion": "Recuerda la palabra que diste a tu siervo, Señor, de la que hiciste mi esperanza; este es mi consuelo en la aflicción. O bien: Cf. 1 Jn 3, 16 En esto hemos conocido el amor de Dios: en que él dio su vida por nosotros. También nosotros debemos dar nuestra vida por los hermanos.",
          "prayer_after": "SEÑOR, que el sacramento del cielo renueve nuestro cuerpo y espíritu, para que seamos coherederos en la gloria de aquel cuya muerte hemos anunciado y compartido. Él, que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "XXVI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 27,
            "citation": "Cf. Dan 3, 31. 29. 30. 43. 42"
          },
          "collect": {
            "title": "XXVI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 27
          },
          "prayer_offerings": {
            "title": "XXVI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 27
          },
          "communion": {
            "title": "XXVI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 27,
            "citation": "Sal 118, 49-50"
          },
          "prayer_after": {
            "title": "XXVI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 27
          }
        }
      },
      "ordinary-27-0": {
        "key": "ordinary-27-0",
        "kind": "temporal",
        "title": "XXVII DOMINGO DEL TIEMPO ORDINARIO",
        "page": 28,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "A tu poder, Señor, está sometido el mundo entero; nadie puede oponerse a ti. Tú creaste el cielo y la tierra y las maravillas todas que existen bajo el cielo. Tú eres Señor del universo.",
          "collect": "DIOS todopoderoso y eterno, que desbordas con la abundancia de tu amor los méritos y los deseos de los que te suplican, derrama sobre nosotros tu misericordia, para que perdones lo que pesa en la conciencia y nos concedas aun aquello que la oración no menciona. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACEPTA, Señor, el sacrificio establecido por ti y, por estos santos misterios que celebramos en razón de nuestro ministerio, perfecciona en nosotros como conviene la obra santificadora de tu redención. Por Jesucristo, nuestro Señor.",
          "communion": "El Señor es bueno para quienes esperan en él, para quien lo busca. O bien: Cf. 1 Cor 10, 17 Porque el pan es uno, nosotros, siendo muchos, formamos un solo cuerpo, pues todos comemos del mismo pan y participamos del mismo cáliz.",
          "prayer_after": "CONCÉDENOS, Dios todopoderoso, que nos alimentemos y saciemos en los sacramentos recibidos, hasta que nos transformemos en lo que hemos tomado. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "XXVII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 28,
            "citation": "Cf. Est 4, 17"
          },
          "collect": {
            "title": "XXVII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 28
          },
          "prayer_offerings": {
            "title": "XXVII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 28
          },
          "communion": {
            "title": "XXVII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 28,
            "citation": "Cf. Lam 3, 25"
          },
          "prayer_after": {
            "title": "XXVII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 28
          }
        }
      },
      "ordinary-28-0": {
        "key": "ordinary-28-0",
        "kind": "temporal",
        "title": "XXVIII DOMINGO DEL TIEMPO ORDINARIO",
        "page": 29,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Si llevas cuenta de los delitos, Señor, ¿quién podrá resistir? Pero de ti procede el perdón, Dios de Israel.",
          "collect": "TE pedimos, Señor, que tu gracia nos preceda y acompañe, y nos sostenga continuamente en las buenas obras. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACEPTA las súplicas de tus fieles, Señor, juntamente con estas ofrendas, para que lleguemos a la gloria del cielo mediante esta piadosa celebración. Por Jesucristo, nuestro Señor.",
          "communion": "Los ricos empobrecen y pasan hambre, los que buscan al Señor no carecen de nada. O bien: Cf. 1 Jn 3, 2 Cuando se manifieste el Señor, seremos semejantes a él, porque lo veremos tal cual es.",
          "prayer_after": "SEÑOR, pedimos humildemente a tu majestad que, así como nos fortaleces con el alimento del santísimo Cuerpo y Sangre de tu Hijo, nos hagas participar de su naturaleza divina. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "XXVIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 29,
            "citation": "Cf. Sal 129, 3-4"
          },
          "collect": {
            "title": "XXVIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 29
          },
          "prayer_offerings": {
            "title": "XXVIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 29
          },
          "communion": {
            "title": "XXVIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 29,
            "citation": "Sal 33, 11"
          },
          "prayer_after": {
            "title": "XXVIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 29
          }
        }
      },
      "ordinary-29-0": {
        "key": "ordinary-29-0",
        "kind": "temporal",
        "title": "XXIX DOMINGO DEL TIEMPO ORDINARIO",
        "page": 30,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Yo te invoco porque tú me respondes, Dios mío; inclina el oído y escucha mis palabras. Guárdame como a las niñas de tus ojos, a la sombra de tus alas escóndeme.",
          "collect": "DIOS todopoderoso y eterno, haz que te presentemos una voluntad solícita y estable, y sirvamos a tu grandeza con sincero corazón. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "CONCÉDENOS, Señor, estar al servicio de tus dones con un corazón libre, para que, con la purificación de tu gracia, nos sintamos limpios por los mismos misterios que celebramos. Por Jesucristo, nuestro Señor.",
          "communion": "Los ojos del Señor están puestos en quien lo teme, en los que esperan su misericordia, para librar sus vidas de la muerte y reanimarlos en tiempo de hambre. O bien: Mc 10, 45 El Hijo del hombre ha venido para dar su vida en rescate por muchos.",
          "prayer_after": "SEÑOR, haz que nos sea provechosa la celebración de las realidades del cielo, para que nos auxilien los bienes temporales y seamos instruidos por los eternos. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "XXIX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 30,
            "citation": "Sal 16, 6. 8"
          },
          "collect": {
            "title": "XXIX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 30
          },
          "prayer_offerings": {
            "title": "XXIX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 30
          },
          "communion": {
            "title": "XXIX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 30,
            "citation": "Sal 32, 18-19"
          },
          "prayer_after": {
            "title": "XXIX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 30
          }
        }
      },
      "ordinary-30-0": {
        "key": "ordinary-30-0",
        "kind": "temporal",
        "title": "XXX DOMINGO DEL TIEMPO ORDINARIO",
        "page": 31,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Que se alegren los que buscan al Señor. Recurrid al Señor y a su poder, buscad continuamente su rostro.",
          "collect": "DIOS todopoderoso y eterno, aumenta nuestra fe, esperanza y caridad, y, para que merezcamos conseguir lo que prometes, concédenos amar tus preceptos. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "MIRA, Señor, los dones que ofrecemos a tu majestad, para que redunde en tu mayor gloria cuanto se cumple con nuestro ministerio. Por Jesucristo, nuestro Señor.",
          "communion": "Que nos alegremos en tu salvación y glorifiquemos el nombre de nuestro Dios. O bien: Cf. Ef 5, 2 Cristo nos amó y se entregó por nosotros como oblación de suave olor.",
          "prayer_after": "QUE tus sacramentos, Señor, efectúen en nosotros lo que expresan, para que obtengamos en la realidad lo que celebramos ahora sacramentalmente. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "XXX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 31,
            "citation": "Sal 104, 3-4"
          },
          "collect": {
            "title": "XXX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 31
          },
          "prayer_offerings": {
            "title": "XXX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 31
          },
          "communion": {
            "title": "XXX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 31,
            "citation": "Cf. Sal 19, 6"
          },
          "prayer_after": {
            "title": "XXX DOMINGO DEL TIEMPO ORDINARIO",
            "page": 31
          }
        }
      },
      "ordinary-31-0": {
        "key": "ordinary-31-0",
        "kind": "temporal",
        "title": "XXXI DOMINGO DEL TIEMPO ORDINARIO",
        "page": 32,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "No me abandones, Señor, Dios mío, no te quedes lejos; ven a prisa a socorrerme, Señor mío, mi salvación.",
          "collect": "DIOS de poder y misericordia, de quien procede el que tus fieles te sirvan digna y meritoriamente, concédenos avanzar sin obstáculos hacia los bienes que nos prometes. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "QUE este sacrificio, Señor, sea para ti una ofrenda pura y, para nosotros, una efusión santa de tu misericordia. Por Jesucristo, nuestro Señor.",
          "communion": "Me enseñarás el sendero de la vida, me saciarás de gozo en tu presencia, Señor. O bien: Jn 6, 58 El Padre que vive me ha enviado, y yo vivo por el Padre; del mismo modo, el que me come vivirá por mí, dice el Señor.",
          "prayer_after": "TE pedimos, Señor, que aumente en nosotros la acción de tu poder, para que, alimentados con estos sacramentos del cielo, nos preparemos, por tu gracia, a recibir tus promesas. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "XXXI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 32,
            "citation": "Sal 37, 22-23"
          },
          "collect": {
            "title": "XXXI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 32
          },
          "prayer_offerings": {
            "title": "XXXI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 32
          },
          "communion": {
            "title": "XXXI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 32,
            "citation": "Cf. Sal 15, 11"
          },
          "prayer_after": {
            "title": "XXXI DOMINGO DEL TIEMPO ORDINARIO",
            "page": 32
          }
        }
      },
      "ordinary-32-0": {
        "key": "ordinary-32-0",
        "kind": "temporal",
        "title": "XXXII DOMINGO DEL TIEMPO ORDINARIO",
        "page": 33,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Llegue hasta ti mi súplica, inclina tu oído a mi clamor, Señor.",
          "collect": "DIOS de poder y misericordia, aparta, propicio, de nosotros toda adversidad, para que, bien dispuestos cuerpo y espíritu, podamos aspirar libremente a lo que te pertenece. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "MIRA con bondad, Señor, los sacrificios que te presentamos, para que alcancemos con piadoso afecto lo que actualizamos sacramentalmente de la pasión de tu Hijo. Él, que vive y reina por los siglos de los siglos.",
          "communion": "El Señor es mi pastor, nada me falta: en verdes praderas me hace recostar; me conduce hacia fuentes tranquilas. O bien: Cf. Lc 24, 35 Los discípulos reconocieron al Señor Jesús al partir el pan.",
          "prayer_after": "ALIMENTADOS con este don sagrado, te damos gracias, Señor, invocando tu misericordia, para que, mediante la acción de tu Espíritu, permanezca la gracia de la verdad en quienes penetró la fuerza del cielo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "XXXII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 33,
            "citation": "Sal 87, 3"
          },
          "collect": {
            "title": "XXXII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 33
          },
          "prayer_offerings": {
            "title": "XXXII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 33
          },
          "communion": {
            "title": "XXXII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 33,
            "citation": "Sal 22, 1-2"
          },
          "prayer_after": {
            "title": "XXXII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 33
          }
        }
      },
      "ordinary-33-0": {
        "key": "ordinary-33-0",
        "kind": "temporal",
        "title": "XXXIII DOMINGO DEL TIEMPO ORDINARIO",
        "page": 34,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Dice el Señor: «Tengo designios de paz y no de aflicción, me invocaréis y yo os escucharé; os congregaré sacándoos de los países y comarcas por donde os dispersé».",
          "collect": "CONCÉDENOS, Señor, Dios nuestro, alegrarnos siempre en tu servicio, porque en dedicarnos a ti, autor de todos los bienes, consiste la felicidad completa y verdadera. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "CONCÉDENOS, Señor, que estos dones, ofrecidos ante la mirada de tu majestad, nos consigan la gracia de servirte y nos obtengan el fruto de una eternidad dichosa. Por Jesucristo, nuestro Señor.",
          "communion": "Para mí lo bueno es estar junto a Dios, hacer del Señor Dios mi refugio. O bien: Cf. Mc 11, 23. 24 En verdad os digo: todo cuanto pidáis en la oración, creed que os lo han concedido y lo obtendréis, dice el Señor.",
          "prayer_after": "SEÑOR, después de recibir el don sagrado del sacramento, te pedimos humildemente que nos haga crecer en el amor lo que tu Hijo nos mandó realizar en memoria suya. Él, que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "XXXIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 34,
            "citation": "Cf. Jer 29, 11-12.14"
          },
          "collect": {
            "title": "XXXIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 34
          },
          "prayer_offerings": {
            "title": "XXXIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 34
          },
          "communion": {
            "title": "XXXIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 34,
            "citation": "Sal 72, 28"
          },
          "prayer_after": {
            "title": "XXXIII DOMINGO DEL TIEMPO ORDINARIO",
            "page": 34
          }
        }
      },
      "ordinary-34-0": {
        "key": "ordinary-34-0",
        "kind": "temporal",
        "title": "XXXIV SEMANA DEL TIEMPO ORDINARIO",
        "page": 35,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Los proyectos de su Corazón subsisten de edad en edad, para librar sus vidas de la muerte y reanimarlos en tiempo de hambre.",
          "collect": "DIOS todopoderoso, concede a quienes, alegrándonos en el Corazón de tu Hijo amado, recordamos los inmensos beneficios de su amor hacia nosotros, merecer recibir una inagotable abundancia de gracia de aquella fuente celestial de los dones. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "MIRA, Señor, el inefable amor del Corazón de tu Hijo predilecto para que los dones que te presentamos sean ofrenda aceptable a ti y expiación de nuestras culpas. Por Jesucristo, nuestro Señor.",
          "communion": "Dice el Señor: «El que tenga sed que venga a mí, y que beba el que cree en mí: de sus entrañas manarán ríos de agua viva». O bien: Jn 19, 34 Uno de los soldados, con la lanza, le traspasó el costado, y al punto salió sangre y agua.",
          "prayer_after": "SEÑOR, que el sacramento de la caridad encienda en nosotros el fuego del amor santo por el que, cautivados siempre por tu Hijo, aprendamos a reconocerle en los hermanos. Él, que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "XXXIV SEMANA DEL TIEMPO ORDINARIO",
            "page": 42,
            "citation": "Sal 32, 11. 19"
          },
          "collect": {
            "title": "XXXIV SEMANA DEL TIEMPO ORDINARIO",
            "page": 42
          },
          "prayer_offerings": {
            "title": "XXXIV SEMANA DEL TIEMPO ORDINARIO",
            "page": 42
          },
          "communion": {
            "title": "XXXIV SEMANA DEL TIEMPO ORDINARIO",
            "page": 43,
            "citation": "Cf. Jn 7, 37-38"
          },
          "prayer_after": {
            "title": "XXXIV SEMANA DEL TIEMPO ORDINARIO",
            "page": 44
          }
        }
      },
      "christ_king": {
        "key": "christ_king",
        "kind": "temporal",
        "title": "NUESTRO SEÑOR JESUCRISTO, REY DEL UNIVERSO",
        "page": 45,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Ordinario.pdf"
        },
        "data": {
          "entrance": "Digno es el Cordero degollado de recibir el poder, la riqueza, la sabiduría, la fuerza y el honor. A él la gloria y el poder, por los siglos de los siglos.",
          "collect": "DIOS todopoderoso y eterno, que quisiste recapitular todas las cosas en tu Hijo muy amado, Rey del Universo, haz que la creación entera, liberada de la esclavitud, sirva a tu majestad y te glorifique sin fin. Él, que vive y reina contigo.",
          "prayer_offerings": "AL ofrecerte, Señor, el sacrificio de la reconciliación humana, pedimos humildemente que tu Hijo conceda a todos los pueblos los dones de la paz y de la unidad. Por Jesucristo, nuestro Señor.",
          "communion": "El Señor se sienta como Rey eterno, el Señor bendice a su pueblo con la paz.",
          "prayer_after": "DESPUÉS de recibir el alimento de la inmor talidad, te pedimos, Señor, que, quienes nos gloriamos de obedecer los mandatos de Cristo, Rey del Universo, podamos vivir eternamente con él en el reino del cielo. Él, que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "NUESTRO SEÑOR JESUCRISTO, REY DEL UNIVERSO",
            "page": 45,
            "citation": "Ap 5, 12; 1, 6"
          },
          "collect": {
            "title": "NUESTRO SEÑOR JESUCRISTO, REY DEL UNIVERSO",
            "page": 45
          },
          "prayer_offerings": {
            "title": "NUESTRO SEÑOR JESUCRISTO, REY DEL UNIVERSO",
            "page": 45
          },
          "communion": {
            "title": "NUESTRO SEÑOR JESUCRISTO, REY DEL UNIVERSO",
            "page": 46,
            "citation": "Sal 28, 10-11"
          },
          "prayer_after": {
            "title": "NUESTRO SEÑOR JESUCRISTO, REY DEL UNIVERSO",
            "page": 46
          }
        }
      },
      "advent-1-0": {
        "key": "advent-1-0",
        "kind": "temporal",
        "title": "I DOMINGO DE ADVIENTO",
        "page": 2,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "A ti levanto mi alma, Dios mío, en ti confío; no quede yo defraudado, que no triunfen de mí mis enemigos, pues los que esperan en ti no quedan defraudados.",
          "collect": "CONCEDE a tus fieles, Dios todopoderoso, el deseo de salir acompañados de buenas obras al encuentro de Cristo que viene, para que, colocados a su derecha, merezcan poseer el reino de los cielos. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACEPTA, Señor, los dones que te ofrecemos, escogidos de los bienes que hemos recibido de ti, y lo que nos concedes celebrar con devoción durante nuestra vida mortal sea para nosotros premio de tu redención eterna. Por Jesucristo, nuestro Seño r.",
          "communion": "El Señor nos dará la lluvia, y nuestra tierra dará su fruto.",
          "prayer_after": "FRUCTIFIQUE en nosotros, Señor, la celebración de estos sacramentos, con los que tú nos enseñas, ya en este mundo que pasa, a descubrir el valor de los bienes del cielo y a poner en ellos nuestro corazón. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "I DOMINGO DE ADVIENTO",
            "page": 2,
            "citation": "Sal 24, 1-3"
          },
          "collect": {
            "title": "I DOMINGO DE ADVIENTO",
            "page": 2
          },
          "prayer_offerings": {
            "title": "I DOMINGO DE ADVIENTO",
            "page": 2
          },
          "communion": {
            "title": "I DOMINGO DE ADVIENTO",
            "page": 2,
            "citation": "Sal 84, 13"
          },
          "prayer_after": {
            "title": "I DOMINGO DE ADVIENTO",
            "page": 2
          }
        }
      },
      "advent-1-1": {
        "key": "advent-1-1",
        "kind": "temporal",
        "title": "Lunes de la I semana de Adviento",
        "page": 3,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "Escuchad, pueblos, la palabra del Señor; anunciadla en los confines de la tierra: he aquí nuestro Salvador que viene, no temáis.",
          "collect": "CONCÉDENOS, Señor Dios nuestro, esperar vigilantes la venida de Cristo, tu Hijo, para que, cuando llegue y llame a la puerta, nos encuentre velando en oración y cantando con alegría sus alabanzas. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACEPTA, Señor, los dones que te ofrecemos, escogidos de los bienes que hemos recibido de ti, y lo que nos concedes celebrar con devoción durante nuestra vida mortal sea para nosotros premio de tu redención eterna. Por Jesucristo, nuestro Señor.",
          "communion": "Ven, Señor, a visitarnos con tu paz para que nos alegremos delante de ti con un corazón íntegro.",
          "prayer_after": "FRUCTIFIQUE en nosotros, Señor, la celebración de estos sacramentos, con los que tú nos enseñas, ya en este mundo que pasa, a descubrir el valor de los bienes del cielo y a poner en ellos nuestro corazón. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Lunes de la I semana de Adviento",
            "page": 3,
            "citation": "Cf. Jr 31, 10; Is 35, 4"
          },
          "collect": {
            "title": "Lunes de la I semana de Adviento",
            "page": 3
          },
          "prayer_offerings": {
            "title": "Lunes de la I semana de Adviento",
            "page": 3
          },
          "communion": {
            "title": "Lunes de la I semana de Adviento",
            "page": 3,
            "citation": "Cf. Sal 106, 4-5; Is 38, 3"
          },
          "prayer_after": {
            "title": "Lunes de la I semana de Adviento",
            "page": 3
          }
        }
      },
      "advent-1-2": {
        "key": "advent-1-2",
        "kind": "temporal",
        "title": "Martes de la I semana de Adviento",
        "page": 4,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "Vendrá el Señor y con él todos sus santos; y aquel día habrá una luz espléndida.",
          "collect": "SEÑOR Dios, acoge favorablemente nuestras súplicas y ayúdanos con tu amor en nuestras tribulaciones, para que, consolados por la presencia de tu Hijo que viene, no caigamos en la antigua servidumbre del pecado. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "QUE los ruegos y ofrendas de nuestra pobreza te conmuevan, Señor, y al vernos desvalidos y sin méritos propios acude, compasivo, en nuestra ayuda. Por Jesucristo nuestro Señor.",
          "communion": "El juez justo dará la corona de la justicia a los que aguarden con amor su venida.",
          "prayer_after": "SACIADOS con el alimento espiritual te pedimos, Señor, que, por la participación en este sacr amento, nos enseñes a sopesar con sabiduría los bienes de la tierra y amar intensamente los del cielo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Martes de la I semana de Adviento",
            "page": 4,
            "citation": "Cf. Zac 14, 5. 7"
          },
          "collect": {
            "title": "Martes de la I semana de Adviento",
            "page": 4
          },
          "prayer_offerings": {
            "title": "Martes de la I semana de Adviento",
            "page": 4
          },
          "communion": {
            "title": "Martes de la I semana de Adviento",
            "page": 4,
            "citation": "Cf. 2 Tim 4, 8"
          },
          "prayer_after": {
            "title": "Martes de la I semana de Adviento",
            "page": 4
          }
        }
      },
      "advent-1-3": {
        "key": "advent-1-3",
        "kind": "temporal",
        "title": "Miércoles de la I semana de Adviento",
        "page": 5,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "El Señor llegará y no tardará, él iluminará lo que esconden las tinieblas y se manifestará a todos los pueblos.",
          "collect": "SEÑOR y Dios nuestro, prepara nuestros corazones con tu poder divino, para que cuando llegue Cristo, tu Hijo, nos encuentre dignos del banquete de la vida eterna y merezcamos recibir de su mano el alimento celestial. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "HAZ, Señor, que te ofrezcamos siempre este sacrificio como expresión de nuestra propia entrega, para que se realice el santo sacramento que tú instituiste y se lleve a cabo en nosotros eficazmente la obra de tu salvación. Por Jesucristo, nuestro Señor.",
          "communion": "Nuestro Señor llega con poder para iluminar los ojos de sus siervos.",
          "prayer_after": "IMPLORAMOS tu misericordia, Señor, para que este divino alimento que hemos recibido, nos purifique del pecado y nos prepare a las fiestas que se acercan. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Miércoles de la I semana de Adviento",
            "page": 5,
            "citation": "Cf. Hab 2, 3; 1 Cor 4, 5"
          },
          "collect": {
            "title": "Miércoles de la I semana de Adviento",
            "page": 5
          },
          "prayer_offerings": {
            "title": "Miércoles de la I semana de Adviento",
            "page": 5
          },
          "communion": {
            "title": "Miércoles de la I semana de Adviento",
            "page": 5,
            "citation": "Is 40, 10; 35, 5"
          },
          "prayer_after": {
            "title": "Miércoles de la I semana de Adviento",
            "page": 5
          }
        }
      },
      "advent-1-4": {
        "key": "advent-1-4",
        "kind": "temporal",
        "title": "Jueves de la I semana de Adviento",
        "page": 6,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "Tú, Señor, estás cerca y todos tus caminos son verdaderos; hace tiempo comprendí tus preceptos, porque tú eres eterno.",
          "collect": "DESPIERTA tu poder, Señor, y ven a socorrernos con tu fuerza, para que la gracia de tu bondad apresure la salvación que retrasan nuestros pecados. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACEPTA, Señor, los dones que te ofrecemos, escogidos de los bienes que hemos recibido de ti, y lo que nos concedes celebrar con devoción durante nuestra vida mortal sea para nosotros premio de tu redención eterna. Por Jesucristo, nuestro Señor.",
          "communion": "Llevemos ya desde ahora una vida sobria, justa y piadosa, aguardando la dicha que esperamos y la manifestación de la gloria del gran Dios.",
          "prayer_after": "FRUCTIFIQUE en nosotros, Señor, la celebración de estos sacramentos, con los que tú nos enseñas, ya en este mundo que pasa, a descubrir el valor de los bienes del cielo y a poner en ellos nuestro corazón. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Jueves de la I semana de Adviento",
            "page": 6,
            "citation": "Cf. Sal 118, 151-152"
          },
          "collect": {
            "title": "Jueves de la I semana de Adviento",
            "page": 6
          },
          "prayer_offerings": {
            "title": "Jueves de la I semana de Adviento",
            "page": 6
          },
          "communion": {
            "title": "Jueves de la I semana de Adviento",
            "page": 6,
            "citation": "Tit 2, 12-13"
          },
          "prayer_after": {
            "title": "Jueves de la I semana de Adviento",
            "page": 6
          }
        }
      },
      "advent-1-5": {
        "key": "advent-1-5",
        "kind": "temporal",
        "title": "Viernes de la I semana de Adviento",
        "page": 7,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "El Señor vendrá con esplendor a visitar a su pueblo con la paz y comunicarle la vida eterna.",
          "collect": "DESPIERTA tu poder y ven, Señor, para que merezcamos ser protegidos por ti y nos veamos libres de los peligros que nos acechan a causa de nuestros pecados. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "QUE los ruegos y ofrendas de nuestra pobreza te conmuevan, Señor, y al vernos desvalidos y sin méritos propios acude, compasivo, en nuestra ayuda. Por Jesucristo nuestro Señor.",
          "communion": "Aguardamos un Salvador: el Señor Jesucristo. Él transformará nuestro cuerpo humilde, según su modelo de cuerpo glorioso.",
          "prayer_after": "SACIADOS con el alimento espiritual te pedimos, Señor, que, por la participación en este sacramento, nos enseñes a sopesar con sabiduría los bienes de la tierra y amar intensamente los del cielo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Viernes de la I semana de Adviento",
            "page": 7
          },
          "collect": {
            "title": "Viernes de la I semana de Adviento",
            "page": 7
          },
          "prayer_offerings": {
            "title": "Viernes de la I semana de Adviento",
            "page": 7
          },
          "communion": {
            "title": "Viernes de la I semana de Adviento",
            "page": 7,
            "citation": "Flp 3, 20-21"
          },
          "prayer_after": {
            "title": "Viernes de la I semana de Adviento",
            "page": 7
          }
        }
      },
      "advent-1-6": {
        "key": "advent-1-6",
        "kind": "temporal",
        "title": "Sábado de la I semana de Adviento",
        "page": 8,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "Ven, Señor, tú que te sientas sobre querubines, muéstranos tu rostro sálvanos.",
          "collect": "OH, Dios, que para librar a la humanidad de la antigua esclavitud del pecado enviaste a tu Unigénito a este mundo, concede a los que esperamos con fe el don de tu amor, alcanzar la recompensa de la libertad verdadera. Por nuestro Señor Jesucris to.",
          "prayer_offerings": "HAZ, Señor, que te ofrezcamos siempre este sacrificio como expresión de nuestra propia entrega, para que se realice el santo sacramento que tú instituiste y se lleve a cabo en nosotros eficazmente la obra de tu salvación. Por Jesucristo, nuestro Señor.",
          "communion": "Mira, yo vengo pronto y traeré mi recompensa conmigo, dice el Señor, para dar a cada uno según sus obras.",
          "prayer_after": "IMPLORAMOS tu misericordia, Señor, para que este divino alimento que hemos recibido, nos purifique del pecado y nos prepare a las fiestas que se acercan. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Sábado de la I semana de Adviento",
            "page": 8,
            "citation": "Cf. Sal 79, 2. 4"
          },
          "collect": {
            "title": "Sábado de la I semana de Adviento",
            "page": 8
          },
          "prayer_offerings": {
            "title": "Sábado de la I semana de Adviento",
            "page": 8
          },
          "communion": {
            "title": "Sábado de la I semana de Adviento",
            "page": 8,
            "citation": "Cf. Ap 22, 12"
          },
          "prayer_after": {
            "title": "Sábado de la I semana de Adviento",
            "page": 8
          }
        }
      },
      "advent-2-0": {
        "key": "advent-2-0",
        "kind": "temporal",
        "title": "II DOMINGO DE ADVIENTO",
        "page": 9,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "Pueblo de Sion: el Señor vendrá a salvar a los pueblos y hará resonar la majestad de su voz con alegría en vuestro corazón",
          "collect": "DIOS todopoderoso, rico en misericordia, no permitas que, cuando salimos animosos al encuentro de tu Hijo, lo impidan los afanes terrenales, para que, aprendiendo la sabiduría celestial, podamos participar plenamente de su vida. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "QUE los ruegos y ofrendas de nuestra pobreza te conmuevan, Señor, y al vernos desvalidos y sin méritos propios acude, compasivo, en nuestra vida. Por Jesucristo, nuestro Señor.",
          "communion": "En pie, Jerusalén, sube a la altura, contempla la alegría que Dios te envía.",
          "prayer_after": "SACIADOS con el alimento espiritual, te pedimos, Señor, que, por la participación en este sacramento, nos enseñes a sopesar con sabiduría los bienes de la tierra y amar intensamente los del cielo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "II DOMINGO DE ADVIENTO",
            "page": 9,
            "citation": "Cf. Is 30, 19. 30"
          },
          "collect": {
            "title": "II DOMINGO DE ADVIENTO",
            "page": 9
          },
          "prayer_offerings": {
            "title": "II DOMINGO DE ADVIENTO",
            "page": 9
          },
          "communion": {
            "title": "II DOMINGO DE ADVIENTO",
            "page": 9,
            "citation": "Bar 5, 5; 4, 36"
          },
          "prayer_after": {
            "title": "II DOMINGO DE ADVIENTO",
            "page": 9
          }
        }
      },
      "advent-2-1": {
        "key": "advent-2-1",
        "kind": "temporal",
        "title": "Lunes de la II semana de Adviento",
        "page": 10,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "Escuchad, pueblos, la palabra del Señor; anunciadla en los confines de la tierra: he aquí nuestro Salvador que viene, no temáis.",
          "collect": "DIRIGE hacia ti nuestras súplicas, Señor, para que los deseos de servirte con total pureza nos conduzcan hasta el gran misterio de la encarnación de tu Unigénito. Él, que vive y reina contigo.",
          "prayer_offerings": "ACEPTA, Señor, los dones que te ofrecemos, escogidos de los bienes que hemos recibido de ti, y lo que nos concedes celebrar con devoción durante nuestra vida mortal sea para nosotros premio de tu redención eterna. Por Jesucristo, nuestro Señor.",
          "communion": "Ven, Señor, a visitarnos con tu paz para que nos alegremos delante de ti con un corazón íntegro.",
          "prayer_after": "FRUCTIFIQUE en nosotros, Señor, la celebración de estos sacramentos, con los que tú nos enseñas, ya en este mundo que pasa, a descubrir el valor de los bienes del cielo y a poner en ellos nuestro corazón. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Lunes de la II semana de Adviento",
            "page": 10,
            "citation": "Cf. Jr 31, 10; Is 35, 4"
          },
          "collect": {
            "title": "Lunes de la II semana de Adviento",
            "page": 10
          },
          "prayer_offerings": {
            "title": "Lunes de la II semana de Adviento",
            "page": 10
          },
          "communion": {
            "title": "Lunes de la II semana de Adviento",
            "page": 10,
            "citation": "Cf. Sal 105, 4-5; Is 38, 3"
          },
          "prayer_after": {
            "title": "Lunes de la II semana de Adviento",
            "page": 10
          }
        }
      },
      "advent-2-2": {
        "key": "advent-2-2",
        "kind": "temporal",
        "title": "Martes de la II semana de Adviento",
        "page": 11,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "Vendrá el Señor y con él todos sus santos; y aquel día habrá una luz espléndida.",
          "collect": "OH, Dios, que has manifestado tu salvación hasta los confines de la tierra, concédenos esperar con alegría la gloria del nacimiento de tu Hijo. El, que vive y reina contigo.",
          "prayer_offerings": "QUE los ruegos y ofrendas de nuestra pobreza te conmuevan, Señor, y al vernos desvalidos y sin méritos propios acude, compasivo, en nuestra ayuda. Por Jesucristo nuestro Señor.",
          "communion": "El juez justo dará la corona de la justicia a los que aguarden con amor su venida.",
          "prayer_after": "SACIADOS con el alimento espiritual te pedimos, Señor, que, por la participación en este sacramento, nos enseñes a sopesar con sabiduría los bienes de la tierra y amar intensamente los del cielo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Martes de la II semana de Adviento",
            "page": 11,
            "citation": "Cf. Zac 14, 5. 7"
          },
          "collect": {
            "title": "Martes de la II semana de Adviento",
            "page": 11
          },
          "prayer_offerings": {
            "title": "Martes de la II semana de Adviento",
            "page": 11
          },
          "communion": {
            "title": "Martes de la II semana de Adviento",
            "page": 11,
            "citation": "Cf. 2 Tim 4, 8"
          },
          "prayer_after": {
            "title": "Martes de la II semana de Adviento",
            "page": 11
          }
        }
      },
      "advent-2-3": {
        "key": "advent-2-3",
        "kind": "temporal",
        "title": "Miércoles de la II semana de Adviento",
        "page": 12,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "El Señor llegará y no tardará, él iluminará lo que esconden las tinieblas y se manifestará a todos los pueblos.",
          "collect": "DIOS todopoderoso, que nos mandas preparar el camino a Cristo, el Señor, concédenos, con bondad, no desfallecer por nuestra debilidad a los que esperamos la consoladora presencia del médico celestial. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "HAZ, Señor, que te ofrezcamos siempre este sacrificio como expresión de nuestra propia entrega, para que se realice el santo sacramento que tú instituiste y se lleve a cabo en nosotros eficazmente la obra de tu salvación. Por Jesucristo, nuestro Señor.",
          "communion": "Nuestro Señor llega con poder para iluminar los ojos de sus siervos.",
          "prayer_after": "IMPLORAMOS tu misericordia, Señor, para que este divino alimento que hemos recibido, nos purifique del pecado y nos prepare a las fiestas que se acercan. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Miércoles de la II semana de Adviento",
            "page": 12,
            "citation": "Cf. Hab 2, 3; 1 Cor 4, 5"
          },
          "collect": {
            "title": "Miércoles de la II semana de Adviento",
            "page": 12
          },
          "prayer_offerings": {
            "title": "Miércoles de la II semana de Adviento",
            "page": 12
          },
          "communion": {
            "title": "Miércoles de la II semana de Adviento",
            "page": 12,
            "citation": "Is 40, 10; 35, 5"
          },
          "prayer_after": {
            "title": "Miércoles de la II semana de Adviento",
            "page": 12
          }
        }
      },
      "advent-2-4": {
        "key": "advent-2-4",
        "kind": "temporal",
        "title": "Jueves de la II semana de Adviento",
        "page": 13,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "Tú, Señor, estás cerca y todos tus caminos son verdaderos; hace tiempo comprendí tus preceptos, porque tú eres eterno.",
          "collect": "SEÑOR, aviva nuestros corazones para que preparemos los caminos a tu Unigénito, y, por su venida, merezcamos servirte con un corazón puro. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACEPTA, Señor, los dones que te ofrecemos, escogidos de los bienes que hemos recibido de ti, y lo que nos concedes celebrar con devoción durante nuestra vida mortal sea para nosotros premio de tu redención eterna. Por Jesucristo, nuestro Señor.",
          "communion": "Llevemos ya desde ahora una vida sobria, justa y piadosa, aguardando la dicha que esperamos y la manifestación de la gloria del gran Dios.",
          "prayer_after": "FRUCTIFIQUE en nosotros, Señor, la celebración de estos sacramentos, con los que tú nos enseñas, ya en este mundo que pasa, a descubrir el valor de los bienes del cielo y a poner en ellos nuestro corazón. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Jueves de la II semana de Adviento",
            "page": 13,
            "citation": "Cf. Sal 118, 151-152"
          },
          "collect": {
            "title": "Jueves de la II semana de Adviento",
            "page": 13
          },
          "prayer_offerings": {
            "title": "Jueves de la II semana de Adviento",
            "page": 13
          },
          "communion": {
            "title": "Jueves de la II semana de Adviento",
            "page": 13,
            "citation": "Tit 2, 12-13"
          },
          "prayer_after": {
            "title": "Jueves de la II semana de Adviento",
            "page": 13
          }
        }
      },
      "advent-2-5": {
        "key": "advent-2-5",
        "kind": "temporal",
        "title": "Viernes de la II semana de Adviento",
        "page": 14,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "El Señor vendrá con esplendor a visitar a su pueblo con la paz y comunicarle la vida eterna.",
          "collect": "DIOS todopoderoso, concede a tu pueblo esperar vigilante la venida de tu Unigénito, para que nos apresuremos a salir a su encuentro con las lámparas encendidas, como nos enseñó nuestro Salvador. Él, que vive y reina contigo.",
          "prayer_offerings": "QUE los ruegos y ofrendas de nuestra pobreza te conmuevan, Señor, y al vernos desvalidos y sin méritos propios acude, compasivo, en nuestra ayuda. Por Jesucristo nuestro Señor.",
          "communion": "Aguardamos un Salvador: el Señor Jesucristo. Él transformará nuestro cuerpo humilde, según su modelo de cuerpo glorioso.",
          "prayer_after": "SACIADOS con el alimento espiritual te pedimos, Señor, que, por la participación en este sacramento, nos enseñes a sopesar con sabiduría los bienes de la tierra y amar intensamente los del cielo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Viernes de la II semana de Adviento",
            "page": 14
          },
          "collect": {
            "title": "Viernes de la II semana de Adviento",
            "page": 14
          },
          "prayer_offerings": {
            "title": "Viernes de la II semana de Adviento",
            "page": 14
          },
          "communion": {
            "title": "Viernes de la II semana de Adviento",
            "page": 14,
            "citation": "Flp 3, 20-21"
          },
          "prayer_after": {
            "title": "Viernes de la II semana de Adviento",
            "page": 14
          }
        }
      },
      "advent-2-6": {
        "key": "advent-2-6",
        "kind": "temporal",
        "title": "Sábado de la II semana de Adviento",
        "page": 15,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "Ven, Señor, tú que te sientas sobre querubines, muéstranos tu rostro sálvanos.",
          "collect": "AMANEZCA en nuestros corazones, Dios todopoderoso, el resplandor de tu gloria, para que, disipadas las tinieblas de la noche, la llegada de tu Unigénito manifieste que somos hijos de la luz. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "HAZ, Señor, que te ofrezcamos siempre este sacrificio como expresión de nuestra propia entrega, para que se realice el santo sacramento que tú instituiste y se lleve a cabo en nosotros eficazmente la obra de tu salvación. Por Jesucristo, nuestro Señor.",
          "communion": "Mira, yo vengo pronto y traeré mi recompensa conmigo, dice el Señor, para dar a cada uno según sus obras.",
          "prayer_after": "IMPLORAMOS tu misericordia, Señor, para que este divino alimento que hemos recibido, nos purifique del pecado y nos prepare a las fiestas que se acercan. Por Jesucristo, nuestro Señor"
        },
        "sectionSources": {
          "entrance": {
            "title": "Sábado de la II semana de Adviento",
            "page": 15,
            "citation": "Cf. Sal 79, 2. 4"
          },
          "collect": {
            "title": "Sábado de la II semana de Adviento",
            "page": 15
          },
          "prayer_offerings": {
            "title": "Sábado de la II semana de Adviento",
            "page": 15
          },
          "communion": {
            "title": "Sábado de la II semana de Adviento",
            "page": 15,
            "citation": "Cf. Ap 22, 12"
          },
          "prayer_after": {
            "title": "Sábado de la II semana de Adviento",
            "page": 15
          }
        }
      },
      "advent-3-0": {
        "key": "advent-3-0",
        "kind": "temporal",
        "title": "III DOMINGO DE ADVIENTO",
        "page": 16,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "Alegraos siempre en el Señor; os lo repito, alegraos. El Señor está cerca.",
          "collect": "OH, Dios, que contemplas cómo tu pueblo espera con fidelidad la fiesta del nacimiento del Señor, concédenos llegar a la alegría de tan gran acontecimiento de salvación y celebrarlo siempre con solemnidad y júbilo desbordante. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "HAZ, Señor, que te ofrezcamos siempre este sacrificio como expresión de nuestra propia entrega, para que se realice el santo sacramento que tú instituiste y se lleve a cabo en nosotros eficazmente la obra de tu salvación. Por Jesucristo, nuestro Señor.",
          "communion": "Decid a los cobardes de corazón: sed fuertes, no temáis. He aquí nuestro Dios que viene y nos salvará.",
          "prayer_after": "IMPLORAMOS tu misericordia, Señor, para que este divino alimento que hemos recibido nos purifique del pecado y nos prepare a las fiestas que se acercan. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "III DOMINGO DE ADVIENTO",
            "page": 16,
            "citation": "Flp 4, 4-5"
          },
          "collect": {
            "title": "III DOMINGO DE ADVIENTO",
            "page": 16
          },
          "prayer_offerings": {
            "title": "III DOMINGO DE ADVIENTO",
            "page": 16
          },
          "communion": {
            "title": "III DOMINGO DE ADVIENTO",
            "page": 16,
            "citation": "Cf. Is 35, 4"
          },
          "prayer_after": {
            "title": "III DOMINGO DE ADVIENTO",
            "page": 16
          }
        }
      },
      "advent-3-1": {
        "key": "advent-3-1",
        "kind": "temporal",
        "title": "Lunes de la III semana de Adviento",
        "page": 17,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "Escuchad, pueblos, la palabra del Señor; anunciadla en los confines de la tierra: he aquí nuestro Salvador que viene, no temáis.",
          "collect": "ESCUCHA con piedad nuestras súplicas, Señor, e ilumina las tinieblas de nuestro corazón con la gracia de tu Hijo, que viene a visitarnos. Él, que vive y reina contigo.",
          "prayer_offerings": "ACEPTA, Señor, los dones que te ofrecemos, escogidos de los bienes que hemos recibido de ti, y lo que nos concedes celebrar con devoción durante nuestra vida mortal sea para nosotros premio de tu redención eterna. Por Jesucristo, nuestro Señor.",
          "communion": "Ven, Señor, a visitarnos con tu paz para que nos alegremos delante de ti con un corazón íntegro.",
          "prayer_after": "FRUCTIFIQUE en nosotros, Señor, la celebración de estos sacramentos, con los que tú nos enseñas, ya en este mundo que pasa, a descubrir el valor de los bienes del cielo y a poner en ellos nuestro corazón. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Lunes de la III semana de Adviento",
            "page": 17,
            "citation": "Cf. Jr 31, 10; Is 35, 4"
          },
          "collect": {
            "title": "Lunes de la III semana de Adviento",
            "page": 17
          },
          "prayer_offerings": {
            "title": "Lunes de la III semana de Adviento",
            "page": 17
          },
          "communion": {
            "title": "Lunes de la III semana de Adviento",
            "page": 17,
            "citation": "Cf. Sal 105, 4-5; Is 38, 3"
          },
          "prayer_after": {
            "title": "Lunes de la III semana de Adviento",
            "page": 17
          }
        }
      },
      "advent-3-2": {
        "key": "advent-3-2",
        "kind": "temporal",
        "title": "Martes de la III semana de Adviento",
        "page": 18,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "Vendrá el Señor y con él todos sus santos; y aquel día habrá una luz espléndida.",
          "collect": "OH, Dios, que por medio de tu Unigénito has hecho de nosotros criaturas nuevas, mira con amor esta obra de tu misericordia y, por la venida de tu Hijo, límpianos de todas las manchas de nuestra antigua vida de pecado. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "QUE los ruegos y ofrendas de nuestra pobreza te conmuevan, Señor, y al vernos desvalidos y sin méritos propios acude, compasivo, en nuestra ayuda. Por Jesucristo nuestro Señor.",
          "communion": "El juez justo dará la corona de la justicia a los que aguarden con amor su venida.",
          "prayer_after": "SACIADOS con el alimento espiritual te pedimos, Señor, que, por la participación en este sacramento, nos enseñes a sopesar con sabiduría los bienes de la tierra y amar intensamente los del cielo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Martes de la III semana de Adviento",
            "page": 18,
            "citation": "Cf. Zac 14, 5. 7"
          },
          "collect": {
            "title": "Martes de la III semana de Adviento",
            "page": 18
          },
          "prayer_offerings": {
            "title": "Martes de la III semana de Adviento",
            "page": 18
          },
          "communion": {
            "title": "Martes de la III semana de Adviento",
            "page": 18,
            "citation": "Cf. 2 Tim 4, 8"
          },
          "prayer_after": {
            "title": "Martes de la III semana de Adviento",
            "page": 18
          }
        }
      },
      "advent-3-3": {
        "key": "advent-3-3",
        "kind": "temporal",
        "title": "Miércoles de la III semana de Adviento",
        "page": 19,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "El Señor llegará y no tardará, él iluminará lo que esconden las tinieblas y se manifestará a todos los pueblos.",
          "collect": "CONCÉDENOS, Dios todopoderoso, que la fiesta, ya cercana, de la venida de tu Hijo, nos reconforte en esta vida y nos conceda los premios eternos. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "HAZ, Señor, que te ofrezcamos siempre este sacrificio como expresión de nuestra propia entrega, para que se realice el santo sacramento que tú instituiste y se lleve a cabo en nosotros eficazmente la obra de tu salvación. Por Jesucristo, nuestro Señor.",
          "communion": "Nuestro Señor llega con poder para iluminar los ojos de sus siervos.",
          "prayer_after": "IMPLORAMOS tu misericordia, Señor, para que este divino alimento que hemos recibido, nos purifique del pecado y nos prepare a las fiestas que se acercan. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Miércoles de la III semana de Adviento",
            "page": 19,
            "citation": "Cf. Hab 2, 3; 1 Cor 4, 5"
          },
          "collect": {
            "title": "Miércoles de la III semana de Adviento",
            "page": 19
          },
          "prayer_offerings": {
            "title": "Miércoles de la III semana de Adviento",
            "page": 19
          },
          "communion": {
            "title": "Miércoles de la III semana de Adviento",
            "page": 19,
            "citation": "Is 40, 10; 35, 5"
          },
          "prayer_after": {
            "title": "Miércoles de la III semana de Adviento",
            "page": 19
          }
        }
      },
      "advent-3-4": {
        "key": "advent-3-4",
        "kind": "temporal",
        "title": "Jueves de la III semana de Adviento",
        "page": 20,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "Tú, Señor, estás cerca y todos tus caminos son verdaderos; hace tiempo comprendí tus preceptos, porque tú eres eterno.",
          "collect": "TE pedimos, Señor, que nosotros, indignos siervos tuyos, afligidos por las propias culpas, nos alegremos en la venida salvadora de tu Unigénito. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACEPTA, Señor, los dones que te ofrecemos, escogidos de los bienes que hemos recibido de ti, y lo que nos concedes celebrar con devoción durante nuestra vida mortal sea para nosotros premio de tu redención eterna. Por Jesucristo, nuestro Señor.",
          "communion": "Llevemos ya desde ahora una vida sobria, justa y piadosa, aguardando la dicha que esperamos y la manifestación de la gloria del gran Dios.",
          "prayer_after": "FRUCTIFIQUE en nosotros, Señor, la celebración de estos sacramentos, con los que tú nos enseñas, ya en este mundo que pasa, a descubrir el valor de los bienes del cielo y a poner en ellos nuestro corazón. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Jueves de la III semana de Adviento",
            "page": 20,
            "citation": "Cf. Sal 118, 151-152"
          },
          "collect": {
            "title": "Jueves de la III semana de Adviento",
            "page": 20
          },
          "prayer_offerings": {
            "title": "Jueves de la III semana de Adviento",
            "page": 20
          },
          "communion": {
            "title": "Jueves de la III semana de Adviento",
            "page": 20,
            "citation": "Tit 2, 12-13"
          },
          "prayer_after": {
            "title": "Jueves de la III semana de Adviento",
            "page": 20
          }
        }
      },
      "advent-3-5": {
        "key": "advent-3-5",
        "kind": "temporal",
        "title": "Viernes de la III semana de Adviento",
        "page": 21,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "El Señor vendrá con esplendor a visitar a su pueblo con la paz y comunicarle la vida eterna.",
          "collect": "DIOS todopoderoso, que tu gracia nos preceda y acompañe siempre, para que quienes anhelamos de todo corazón la venida de tu Unigénito encontremos auxilio para la vida presente y futura. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "QUE los ruegos y ofrendas de nuestra pobreza te conmuevan, Señor, y al vernos desvalidos y sin méritos propios acude, compasivo, en nuestra ayuda. Por Jesucristo nuestro Señor.",
          "communion": "Aguardamos un Salvador: el Señor Jesucristo. Él transformará nuestro cuerpo humilde, según su modelo de cuerpo glorioso.",
          "prayer_after": "SACIADOS con el alimento espiritual te pedimos, Señor, que, por la participación en este sacramento, nos enseñes a sopesar con sabiduría los bienes de la tierra y amar intensamente los del cielo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Viernes de la III semana de Adviento",
            "page": 21
          },
          "collect": {
            "title": "Viernes de la III semana de Adviento",
            "page": 21
          },
          "prayer_offerings": {
            "title": "Viernes de la III semana de Adviento",
            "page": 21
          },
          "communion": {
            "title": "Viernes de la III semana de Adviento",
            "page": 21,
            "citation": "Flp 3, 20-21"
          },
          "prayer_after": {
            "title": "Viernes de la III semana de Adviento",
            "page": 21
          }
        }
      },
      "advent-4-0": {
        "key": "advent-4-0",
        "kind": "temporal",
        "title": "IV DOMINGO DE ADVIENTO",
        "page": 22,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "Cielos, destilad desde lo alto; nubes derramad al Justo; ábrase la tierra y brote al Salvador.",
          "collect": "DERRAMA, Señor, tu gracia en nuestros corazones, para que, quienes hemos conocido, por el anuncia del ángel, la encarnación de Cristo, tu Hijo, lleguemos, por su pasión y su cruz, a la gloria de la resurrección. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "EL mismo Espíritu, que colmó con su poder las entrañas de santa María, santifique, Señor, estos dones que hemos colocado sobre tu altar. Por Jesucristo, nuestro Señor.",
          "communion": "Mirad: la Virgen está encinta y da a luz un hijo, y le pondrá por nombre Enmanuel.",
          "prayer_after": "DIOS todopoderoso, después de recibir la prenda de la redención eterna, te pedimos que crezca en nosotros tanto fervor para celebrar dignamente el misterio del nacimiento de tu Hijo, cuanto más se acerca la gran fiesta de la salvación. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "IV DOMINGO DE ADVIENTO",
            "page": 22,
            "citation": "Cf. Is 45, 8"
          },
          "collect": {
            "title": "IV DOMINGO DE ADVIENTO",
            "page": 22
          },
          "prayer_offerings": {
            "title": "IV DOMINGO DE ADVIENTO",
            "page": 22
          },
          "communion": {
            "title": "IV DOMINGO DE ADVIENTO",
            "page": 22,
            "citation": "Is 7, 14"
          },
          "prayer_after": {
            "title": "IV DOMINGO DE ADVIENTO",
            "page": 22
          }
        }
      },
      "date-12-17": {
        "key": "date-12-17",
        "kind": "temporal",
        "title": "17 de diciembre",
        "page": 23,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "Exulta, cielo; alégrate, tierra, porque viene nuestro Señor y tendrá misericordia de sus pobres.",
          "collect": "OH, Dios, creador y redentor de la naturaleza humana, que has querido que tu Verbo se encarnase en el seno de María, siempre virgen, escucha complacido nuestras súplicas, para que tu Unigénito, hecho hombre, nos haga partícipes de su divinidad. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SANTIFICA, Señor, las ofrendas de tu Iglesia y haz que, por estos sagrados misterios, merezcamos recibir el pan del cielo. Por Jesucristo nuestro Señor.",
          "communion": "Vendrá el deseado de todos los pueblos y se llenará de gloria la casa del Señor.",
          "prayer_after": "DIOS todopoderoso, que nos has alimentado con el don divino, te pedimos que, inflamados por el fuego de tu Espíritu, resplandezcamos delante de Cristo que se acerca, como luminarias de su gloria. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "17 de diciembre",
            "page": 23,
            "citation": "Cf. Is 49, 13"
          },
          "collect": {
            "title": "17 de diciembre",
            "page": 23
          },
          "prayer_offerings": {
            "title": "17 de diciembre",
            "page": 23
          },
          "communion": {
            "title": "17 de diciembre",
            "page": 23,
            "citation": "Cf. Ag 2, 7"
          },
          "prayer_after": {
            "title": "17 de diciembre",
            "page": 23
          }
        }
      },
      "date-12-18": {
        "key": "date-12-18",
        "kind": "temporal",
        "title": "18 de diciembre",
        "page": 24,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "Vendrá Cristo, nuestro Rey, a quien Juan anunció como el Cordero que había de venir.",
          "collect": "DIOS todopoderoso, concede a los que vivimos oprimidos por la antigua esclavitud del pecado ser liberados por el nuevo y esperado nacimiento de tu Unigénito. Él, que vive y reina contigo.",
          "prayer_offerings": "SEÑOR, el sacrificio que celebramos en honor de tu nombre nos haga agradables a ti, para que merezcamos participar de la eternidad de aquel que, con su muerte, remedió nuestra condición mortal. Por Jesucristo nuestro Señor.",
          "communion": "Le pondrán por nombre Enmanuel, que significa «Dios-con-nosotros».",
          "prayer_after": "SEÑOR, que recibamos tu misericordia en medio de tu templo y preparemos dignamente las fiestas cercanas de nuestra redención. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "18 de diciembre",
            "page": 24,
            "citation": "Cf. Is 49, 13"
          },
          "collect": {
            "title": "18 de diciembre",
            "page": 24
          },
          "prayer_offerings": {
            "title": "18 de diciembre",
            "page": 24
          },
          "communion": {
            "title": "18 de diciembre",
            "page": 24,
            "citation": "Mt 1, 23"
          },
          "prayer_after": {
            "title": "18 de diciembre",
            "page": 24
          }
        }
      },
      "date-12-19": {
        "key": "date-12-19",
        "kind": "temporal",
        "title": "19 de diciembre",
        "page": 25,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "El que viene llegará sin retraso y ya no habrá temor en nuestra tierra, porque él es nuestro Salvador.",
          "collect": "OH, Dios, que has querido revelar al mundo el resplandor de tu gloria por el parto de la Virgen santa, concédenos proclamar con fe íntegra y celebrar con piedad sincera el gran misterio de la Encarnación. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SEÑOR, mira con bondad las ofrendas que presentamos sobre tu altar y consagra con tu poder lo que nuestra debilidad te presenta. Por Jesucristo, nuestro Señor.",
          "communion": "Nos visitará el Sol que nace de lo alto, para guiar nuestros pasos por el camino de la paz.",
          "prayer_after": "DIOS todopoderoso, sé propicio con nosotros y, al darte gracias por los dones recibidos, haz que de tal modo deseemos los que están por llegar, que recibamos con el corazón purificado el nacimiento admirable de nuestro Salvador. El, que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "19 de diciembre",
            "page": 25,
            "citation": "Cf. Heb 10, 37"
          },
          "collect": {
            "title": "19 de diciembre",
            "page": 25
          },
          "prayer_offerings": {
            "title": "19 de diciembre",
            "page": 25
          },
          "communion": {
            "title": "19 de diciembre",
            "page": 25,
            "citation": "Lc 1, 78-79"
          },
          "prayer_after": {
            "title": "19 de diciembre",
            "page": 25
          }
        }
      },
      "date-12-20": {
        "key": "date-12-20",
        "kind": "temporal",
        "title": "20 de diciembre",
        "page": 26,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "Brotará un renuevo del tronco de Jesé y la gloria del Señor llenará tod a la tierra. Toda carne verá la salvación de Dios.",
          "collect": "OH, Dios de eterna grandeza, ya que la Virgen Inmaculada, por el anuncio del ángel, acogió tu Verbo inefable y, transformada en templo de tu divinidad, se llenó con la luz del Espíritu San to, concédenos que, a ejemplo suyo, aceptemos humildemente tu voluntad. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACEPTA, Señor, este sacrificio único, para que, al participar en este misterio, recibamos los dones que la fe nos hace esperar. Por Jesucristo, nuestro Señor.",
          "communion": "El ángel dijo a María: «Concebirás y darás a luz un hijo, y le pondrás por nombre Jesús».",
          "prayer_after": "PROTEGE, Señor, con tu poder divino a los que alimentas con los dones del cielo, para que, al participar en tus misterios, les concedas gozar de la paz verdadera. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "20 de diciembre",
            "page": 26,
            "citation": "Cf. Is 11, 1; 40, 5; Lc 3, 6"
          },
          "collect": {
            "title": "20 de diciembre",
            "page": 26
          },
          "prayer_offerings": {
            "title": "20 de diciembre",
            "page": 26
          },
          "communion": {
            "title": "20 de diciembre",
            "page": 26,
            "citation": "Cf. Lc 1, 31"
          },
          "prayer_after": {
            "title": "20 de diciembre",
            "page": 26
          }
        }
      },
      "date-12-21": {
        "key": "date-12-21",
        "kind": "temporal",
        "title": "21 de diciembre",
        "page": 27,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "Muy pronto vendrá el Señor que domina los pueblos y se llamará Enmanuel, porque Dios está con nosotros.",
          "collect": "ESCUCHA con bondad, Señor, las oraciones de tu pueblo, para que, alegres por la venida de tu Unigénito en nuestra carne, consigamos la recompensa de la vida eterna cuando vuelva en la majestad de su gloria. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACEPTA complacido, Señor, los dones que en tu misericordia has dado a tu Iglesia para que pueda ofrecértelos y que ahora transformas con tu poder en sacramento de nuestra salvación. Por Jesucristo, nuestro Señor.",
          "communion": "Bienaventurada tú, que has creído, porque lo que te ha dicho el Señor se cumplirá.",
          "prayer_after": "SEÑOR, , que la participación en los divinos misterios sirva de continua protección a tu pueblo, para que, con plena entrega a tu servicio, obtenga con abundancia la salvación de alma y cuerpo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "21 de diciembre",
            "page": 27,
            "citation": "Cf. Is 7, 14; 8, 10"
          },
          "collect": {
            "title": "21 de diciembre",
            "page": 27
          },
          "prayer_offerings": {
            "title": "21 de diciembre",
            "page": 27
          },
          "communion": {
            "title": "21 de diciembre",
            "page": 27,
            "citation": "Cf. Lc 1, 45"
          },
          "prayer_after": {
            "title": "21 de diciembre",
            "page": 27
          }
        }
      },
      "date-12-22": {
        "key": "date-12-22",
        "kind": "temporal",
        "title": "22 de diciembre",
        "page": 28,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "Portones, alzad los dinteles, que se alcen las puertas eternales: va a entrar el Rey de la gloria.",
          "collect": "OH, Dios, que, al ver al hombre caído en la muerte, quisiste redimirlo con la venida de tu Unigénito, concede a quienes profesan humildemente la fe en su encarnación participar también en los bienes del Redentor. Él, que vive y reina contigo.",
          "prayer_offerings": "SEÑOR, confiando en tu bondad, nos presentamos con ofrendas ante tu santo altar, para que, purificados por tu gracia, quedemos limpios en virtud de estos misterios que ahora celebramos. Por Jesucristo, nuestro Señor.",
          "communion": "Proclama mi alma la grandeza del Señor, porque el Poderoso ha hecho obras grandes en mí.",
          "prayer_after": "NOS fortalezca, Señor, la participación en tu sacramento, para que, acompañados por las buenas obras, merezcamos salir al encuentro del Salvador que viene y recibir el premio de la bienaventuranza. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "22 de diciembre",
            "page": 28,
            "citation": "Sal 23, 7"
          },
          "collect": {
            "title": "22 de diciembre",
            "page": 28
          },
          "prayer_offerings": {
            "title": "22 de diciembre",
            "page": 28
          },
          "communion": {
            "title": "22 de diciembre",
            "page": 28,
            "citation": "Lc 1, 46. 49"
          },
          "prayer_after": {
            "title": "22 de diciembre",
            "page": 28
          }
        }
      },
      "date-12-23": {
        "key": "date-12-23",
        "kind": "temporal",
        "title": "23 de diciembre",
        "page": 29,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "Un niño nos va a nacer y su nombre es: Dios fuerte; él sea la bendición de todos los pueblos.",
          "collect": "DIOS todopoderoso y eterno, al ver que se acerca el nacimiento de tu Hijo según la carne, te pedimos que nosotros, indignos siervos tuyos, recibamos la misericordia del Verbo, Jesucristo, Señor nuestro, que se ha dignado encarnarse en la Virgen María y habitar entre nosotros. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SEÑOR, que esta oblación, en la que alcanza su plenitud el culto que el hombre puede tributarte, restablezca nuestra amistad contigo; así celebraremos, con el alma purificada, el nacimiento de nuestro Redentor. Él, que vive y reina por los siglos de los siglos.",
          "communion": "Mira, estoy de pie a la puerta y llamo. Si alguien escucha mi voz y abre la puerta, entraré en su casa y cenaré con él y él conmigo.",
          "prayer_after": "ALIMENTADOS con el don del cielo danos benigno tu paz, Señor, para que merezcamos salir, con las lámparas encendidas, al encuentro de tu Hijo muy amado que llega. Él, que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "23 de diciembre",
            "page": 29,
            "citation": "Cf. Is 9, 5; Sal 71, 17"
          },
          "collect": {
            "title": "23 de diciembre",
            "page": 29
          },
          "prayer_offerings": {
            "title": "23 de diciembre",
            "page": 29
          },
          "communion": {
            "title": "23 de diciembre",
            "page": 29,
            "citation": "Ap 3, 20"
          },
          "prayer_after": {
            "title": "23 de diciembre",
            "page": 29
          }
        }
      },
      "date-12-24": {
        "key": "date-12-24",
        "kind": "temporal",
        "title": "24 de diciembre",
        "page": 30,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Adviento.pdf"
        },
        "data": {
          "entrance": "Ya llega la plenitud del tiempo, en la que Dios envía a su Hijo a la tierra.",
          "collect": "APRESÚRATE, Señor Jesús, y no tardes, para que tu venida consuele y fortalezca a los que lo esperan todo de tu amor. Tú, que vives y reinas con el Padre.",
          "prayer_offerings": "ACEPTA, Señor, con bondad los dones de esta ofrenda y haz que, al recibirlos, nos purifiquen de nuestros pecados y podamos esperar con el corazón limpio la gloriosa venida de tu Hijo. Él, que vive y reina por los siglos de los siglos.",
          "communion": "Bendito sea el Señor, Dios de Israel, porque ha visitado y redimido a su pueblo.",
          "prayer_after": "RECREADOS por tu admirable don, Señor, concédenos prepararnos para adorar a tu Hijo en su nacimiento, de manera que recibamos con gozo sus bienes eternos. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "24 de diciembre",
            "page": 30,
            "citation": "Cf. Gál 4, 4"
          },
          "collect": {
            "title": "24 de diciembre",
            "page": 30
          },
          "prayer_offerings": {
            "title": "24 de diciembre",
            "page": 30
          },
          "communion": {
            "title": "24 de diciembre",
            "page": 30,
            "citation": "Lc 1, 68"
          },
          "prayer_after": {
            "title": "24 de diciembre",
            "page": 30
          }
        }
      },
      "date-12-25": {
        "key": "date-12-25",
        "kind": "temporal",
        "title": "25 de diciembre",
        "page": 2,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Navidad.pdf"
        },
        "data": {
          "entrance": "Los p astores fueron corriendo y encontraron a María y a José, y al niño acostado en el pesebre.",
          "collect": "OH, Dios, que nos has propuesto a la Sagrada Familia como maravilloso ejemplo, concédenos, con bondad, que, imitando sus virtudes domésticas y su unión en el amor, lleguemos a gozar de los premios eterno en el hogar del cielo. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "AL ofrecerte, Señor, este sacrificio de expiación, te suplicamos, por intercesión de la Virgen Madre de Dios y de San José, que guardes a nuestras familias en tu gracia y en tu paz. Por Jesucristo, nuestro Señor.",
          "communion": "Nuestro Dios apareció en el mundo y vivió en medio de los hombres.",
          "prayer_after": "PADRE misericordioso, concede a cuantos has renovado con estos divinos sacramentos imitar fielmente los ejemplos de las Sagrada Familia para que, después de las tristezas de esta vida, podamos gozar de su eterna compañía en el cielo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "25 de diciembre",
            "page": 7,
            "citation": "Cf. Lc 2, 16"
          },
          "collect": {
            "title": "25 de diciembre",
            "page": 7
          },
          "prayer_offerings": {
            "title": "25 de diciembre",
            "page": 7
          },
          "communion": {
            "title": "25 de diciembre",
            "page": 7,
            "citation": "Cf. Bar 3, 38"
          },
          "prayer_after": {
            "title": "25 de diciembre",
            "page": 7
          }
        }
      },
      "date-12-29": {
        "key": "date-12-29",
        "kind": "temporal",
        "title": "29 de diciembre",
        "page": 8,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Navidad.pdf"
        },
        "data": {
          "entrance": "Tanto amó Dios al mundo, que entregó a su Unigénito para que todo el que cree en él no perezca, sino que tanga vida eterna.",
          "collect": "DIOS invisible y todopoderoso, que has disipado las tinieblas del mundo con la llegada de tu luz, míranos complacido, para que podamos cantar dignamente la gloria del nacimiento de tu Unigénito. Él, que vive y reina contigo.",
          "prayer_offerings": "ACEPTA, Señor, nuestras ofrendas en las que vas a realizar un admirable intercambio, para que, al ofrecerte lo que tú nos diste, merezcamos recibirte a ti mismo. Por Jesucristo, nuestro Señor.",
          "communion": "Por la entrañable misericordia de nuestro Dios nos ha visitado el Sol que nace de lo alto.",
          "prayer_after": "CONCÉDENOS, Dios todopoderoso, que, por la eficacia de estos santos misterios, se fortalezca constantemente nuestra vida. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "29 de diciembre",
            "page": 8,
            "citation": "Jn 3, 16"
          },
          "collect": {
            "title": "29 de diciembre",
            "page": 8
          },
          "prayer_offerings": {
            "title": "29 de diciembre",
            "page": 8
          },
          "communion": {
            "title": "29 de diciembre",
            "page": 8,
            "citation": "Cf. Lc 1, 78"
          },
          "prayer_after": {
            "title": "29 de diciembre",
            "page": 8
          }
        }
      },
      "date-12-30": {
        "key": "date-12-30",
        "kind": "temporal",
        "title": "30 de diciembre",
        "page": 9,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Navidad.pdf"
        },
        "data": {
          "entrance": "Cuando un silencio apacible envolvía todo y la noche llegaba a la mitad de su carrera, tu Palabra omnipotente, Señor, se lanzó desde el cielo, desde el trono real.",
          "collect": "CONCÉDENOS, Dios todopoderoso, que el renovado nacimiento de tu Unigénito encarnado libere a quienes nos domina la antigua servidumbre del pecado. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "RECIBE, Señor, con bondad las ofrendas de tu pueblo, para que cuanto creemos por la fe lo alcancemos por el sacramento celestial. Por Jesucristo, nuestro Señor.",
          "communion": "De su plenitud todos hemos recibido gracia tras gracias.",
          "prayer_after": "OH, Dios, que llegas hasta nosotros al participar en tu sacramento, realiza en nuestros corazones el efecto de su poder, para que, al recibirlo, nos haga dignos del don que nos haces. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "30 de diciembre",
            "page": 9,
            "citation": "Cf. Sab 18, 14-15"
          },
          "collect": {
            "title": "30 de diciembre",
            "page": 9
          },
          "prayer_offerings": {
            "title": "30 de diciembre",
            "page": 9
          },
          "communion": {
            "title": "30 de diciembre",
            "page": 9,
            "citation": "Jn 1, 16"
          },
          "prayer_after": {
            "title": "30 de diciembre",
            "page": 9
          }
        }
      },
      "date-12-31": {
        "key": "date-12-31",
        "kind": "temporal",
        "title": "31 de diciembre",
        "page": 10,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Navidad.pdf"
        },
        "data": {
          "entrance": "Un niño nos ha nacido, un hijo se nos ha dado; lleva a hombros el principado, y es su nombre: Ángel del gran consejo",
          "collect": "DIOS todopoderoso y eterno, que has establecido el principio y la perfección de toda religión en el nacimiento de tu Hijo, te suplicamos nos concedas estar unidos a aquel en quien se sustenta la plenitud de la salvación humana. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "OH, Dios, autor de la piedad sincera y de la paz, te pedimos que con esta ofrenda veneremos dignamente tu grandeza y nuestra unión se haga más fuerte por la participación en este sagrado misterio. Por Jesucristo, nuestro Señor.",
          "communion": "Dios envió al mundo a su Unigénito, para que vivamos por medio de él.",
          "prayer_after": "QUE tu pueblo, Señor, dirigido por tu abundante ayuda, reciba los auxilios presentes y futuros de tu amor, para que, sostenido por el consuelo necesario de las cosas temporales, aspire con más confianza a los bienes eternos. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "31 de diciembre",
            "page": 10,
            "citation": "Cf. Is 9, 5"
          },
          "collect": {
            "title": "31 de diciembre",
            "page": 10
          },
          "prayer_offerings": {
            "title": "31 de diciembre",
            "page": 10
          },
          "communion": {
            "title": "31 de diciembre",
            "page": 10,
            "citation": "1 Jn 4, 9"
          },
          "prayer_after": {
            "title": "31 de diciembre",
            "page": 10
          }
        }
      },
      "date-01-01": {
        "key": "date-01-01",
        "kind": "temporal",
        "title": "1 de enero",
        "page": 11,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Navidad.pdf"
        },
        "data": {
          "entrance": "¡Salve, Madre santa!, Virgen, Madre del Rey que gobierna cielo y tierra por los siglos. O bien: Cf. Is 9, 1. 5; Lc 1, 33 Hoy brillará una luz sobre nosotros, porque nos ha nacido el Señor; y es admirable su nombre: Dios, Príncipe de la paz, Padre perpetuo; y su reino no tendrá fin.",
          "collect": "OH, Dios, que por la maternidad virginal de santa María entregaste a los hombres los bienes de la salvación eterna, concédenos experimentar la intercesión de aquella por quien hemos merecido recibir al autor de la vida, tu Hijo, nuestro Señor Jesucristo. Él, que vive y reina contigo.",
          "prayer_offerings": "OH, Dios, que generosamente das principio y cumplimiento a todo bien, concede, a cuantos nos alegramos en la solemnidad de la santa Madre de Dios, que, así como nos gloriamos del comienzo de la salvación, nos alegremos de su plenitud. Por Jesucristo, nuestro Señor.",
          "communion": "Jesucristo es el mismo ayer y hoy y siempre.",
          "prayer_after": "HEMOS recibido con alegría los sacramentos del cielo; concédenos, Señor, que nos ayuden para la vida eterna a cuantos proclamamos a la bienaventurada siempre Virgen María Madre de tu Hijo y Madre de la Iglesia. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "1 de enero",
            "page": 11
          },
          "collect": {
            "title": "1 de enero",
            "page": 11
          },
          "prayer_offerings": {
            "title": "1 de enero",
            "page": 11
          },
          "communion": {
            "title": "1 de enero",
            "page": 12,
            "citation": "Heb 13, 8"
          },
          "prayer_after": {
            "title": "1 de enero",
            "page": 12
          }
        }
      },
      "christmas-2-0": {
        "key": "christmas-2-0",
        "kind": "temporal",
        "title": "DOMINGO SEGUNDO DESPUÉS DE NAVIDAD",
        "page": 13,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Navidad.pdf"
        },
        "data": {
          "entrance": "Cuando un silencio apacible lo envolvía todo y la noche llegaba a la mitad de su carrera, tu Palabra omnipotente, Señor, se lanzó desde el cielo, desde el trono real.",
          "collect": "DIOS todopoderoso y eterno, esplendor de los que en ti creen, dígnate, propicio, llenar de gloria el mundo y que el resplandor de tu luz se manifiesta a todos los pueblos. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SANTIFICA, Señor, estas ofrendas por el nacimiento de tu Unigénito, en el que se nos muestra el camino de la verdad y se nos promete la vida del reino celestial. Por Jesucristo, nuestro Señor.",
          "communion": "A cuantos lo recibieron, les dio poder de ser hijos de Dios.",
          "prayer_after": "HUMILDEMENTE te pedimos, Señor y Dios nuestro, que la eficacia de este sacramento nos purifique de nuestros pecados y dé cumplimiento a nuestros buenos deseos. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "DOMINGO SEGUNDO DESPUÉS DE NAVIDAD",
            "page": 13,
            "citation": "Cf. Sab 18, 14-15"
          },
          "collect": {
            "title": "DOMINGO SEGUNDO DESPUÉS DE NAVIDAD",
            "page": 13
          },
          "prayer_offerings": {
            "title": "DOMINGO SEGUNDO DESPUÉS DE NAVIDAD",
            "page": 13
          },
          "communion": {
            "title": "DOMINGO SEGUNDO DESPUÉS DE NAVIDAD",
            "page": 13,
            "citation": "Jn 1, 12"
          },
          "prayer_after": {
            "title": "DOMINGO SEGUNDO DESPUÉS DE NAVIDAD",
            "page": 13
          }
        }
      },
      "date-01-06": {
        "key": "date-01-06",
        "kind": "temporal",
        "title": "6 de enero",
        "page": 14,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Navidad.pdf"
        },
        "data": {
          "entrance": "Álzate, Jerusalén, mira hacia oriente y contempla a tus hijos: reunidos desde donde sale el sol hasta el ocaso.",
          "collect": "TE rogamos, Señor, que el esplendor de tu majestad ilumine nuestros corazones, para que podamos atravesar las tinieblas de este mundo y lleguemos a la patria de la claridad eterna. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SEÑOR, recibe nuestros dones ofrecidos en la Epifanía de tu Unigénito y en los comienzos de la salvación de los pueblos gentiles, para que celebremos tu alabanza y se realice en nosotros la salvación eterna. Por Jesucristo, nuestro Señor.",
          "communion": "La gloria del Señor ilumina la ciudad santa de Jerusalén y las nacionescaminarán a su luz.",
          "prayer_after": "RENOVADOS por estos santos alimentos, suplicamos, Señor, tu misericordia, para que la estrella de tu salvación brille siempre en nuestro espíritu y nuestro tesoro sea poder reconocerte. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "6 de enero",
            "page": 14,
            "citation": "Cf. Bar 5, 5"
          },
          "collect": {
            "title": "6 de enero",
            "page": 14
          },
          "prayer_offerings": {
            "title": "6 de enero",
            "page": 14
          },
          "communion": {
            "title": "6 de enero",
            "page": 14,
            "citation": "Cf. Ap 21, 23-24"
          },
          "prayer_after": {
            "title": "6 de enero",
            "page": 14
          }
        }
      },
      "epiphany": {
        "key": "epiphany",
        "kind": "temporal",
        "title": "Misa del día",
        "page": 15,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Navidad.pdf"
        },
        "data": {
          "entrance": "Mirad que llega el Señor que domina; en su mano está el reino y el poder y la fuerza.",
          "collect": "OH, Dios, que revelaste en este día tu Unigénito a los pueblos gentiles por medio de una estrella, concédenos con bondad, a los que ya te conocemos por la fe, poder contemplar la hermosura infinita de tu gloria. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "MIRA propicio, Señor, los dones de tu Iglesia que no son oro, incienso y mirra, sino Jesucristo que, en estas ofrendas, se manifiesta, se inmola y se da en alimento. Él, que vive y reina por los siglos de los siglos.",
          "communion": "Hemos visto salir su estrella en Oriente y venimos con regalos a adorar al Señor.",
          "prayer_after": "QUE tu luz, Señor, nos prepare siempre y en todo lugar, para que contemplemos con mirada limpia y recibamos con amor sincero el misterio del que has querido hacernos partícipes. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Misa del día",
            "page": 15,
            "citation": "Cf. Mal 3, 1; 1 Cro 19, 12"
          },
          "collect": {
            "title": "Misa del día",
            "page": 15
          },
          "prayer_offerings": {
            "title": "Misa del día",
            "page": 15
          },
          "communion": {
            "title": "Misa del día",
            "page": 16,
            "citation": "Cf. Mt 2, 2"
          },
          "prayer_after": {
            "title": "Misa del día",
            "page": 16
          }
        }
      },
      "after-epiphany-1": {
        "key": "after-epiphany-1",
        "kind": "temporal",
        "title": "Lunes",
        "page": 17,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Navidad.pdf"
        },
        "data": {
          "entrance": "Nos ha amanecido un día sagrado: venid, naciones, adorad al Señor, porque una gran luz ha bajado a la tierra.",
          "collect": "Antes de la solemnidad de Epifanía: CONCEDE, Señor, a tu pueblo perseverancia y firmeza en la fe, y a cuantos confiesan que tu Unigénito, eterno contigo en tu gloria, nació de Madre Virgen en la realidad de nuestros cuerpo, líbralos de los males de esta vida y hazles alcanzar las alegrías eternas. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACEPTA, Señor, nuestras ofrendas en las que vas a realizar un admirable intercambio, para que, al ofrecerte lo que tú nos diste, merezcamos recibirte a ti mismo. Por Jesucristo, nuestro Señor.",
          "communion": "Hemos contemplado su gloria: gloria como del Unigénito del Padre, lleno de gracia y de verdad.",
          "prayer_after": "CONCÉDENOS, Dios todop oderoso, que, por la eficacia de estos santos misterios, se fortalezca constantemente nuestra vida. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Lunes",
            "page": 17
          },
          "collect": {
            "title": "Lunes",
            "page": 17
          },
          "prayer_offerings": {
            "title": "Lunes",
            "page": 17
          },
          "communion": {
            "title": "Lunes",
            "page": 18,
            "citation": "Jn 1, 14"
          },
          "prayer_after": {
            "title": "Lunes",
            "page": 18
          }
        }
      },
      "after-epiphany-2": {
        "key": "after-epiphany-2",
        "kind": "temporal",
        "title": "Martes",
        "page": 19,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Navidad.pdf"
        },
        "data": {
          "entrance": "Bendito el que viene en nombre del Señor: el Señor es Dios, él nos ilum ina.",
          "collect": "Antes de la solemnidad de Epifanía: OH, Dios, que, por el feliz alumbramiento de la santa Virgen, has hecho que, en tu Hijo, la humanidad no quedara sometida a la condena, concede a quienes hemos recibido el ser criaturas nuevas, vernos libres del influjo del antiguo pecado. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "RECIBE, Señor, con bondad las ofrendas de tu pueblo, para que cuanto creemos por la fe lo alcancemos por el sacramento celestial. Por Jesucristo, nuestro Señor.",
          "communion": "Dios, por el gran amor con que nos amó, envió a su Hijo en semejanza de carne de pecado.",
          "prayer_after": "OH, Dios, que llegas hasta nosotros al participar en tu sacramento, realiza en nuestros corazones el efecto de su poder, para que, al recibirlo, nos haga dignos del don que nos haces. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Martes",
            "page": 19,
            "citation": "Sal 117, 26-27"
          },
          "collect": {
            "title": "Martes",
            "page": 19
          },
          "prayer_offerings": {
            "title": "Martes",
            "page": 19
          },
          "communion": {
            "title": "Martes",
            "page": 19,
            "citation": "Cf. Ef 2, 4; Rom 8, 3"
          },
          "prayer_after": {
            "title": "Martes",
            "page": 20
          }
        }
      },
      "after-epiphany-3": {
        "key": "after-epiphany-3",
        "kind": "temporal",
        "title": "Miércoles",
        "page": 21,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Navidad.pdf"
        },
        "data": {
          "entrance": "El pueblo que caminaba en tinieblas vio una luz grande; habitaba en tierra y sombras de muerte, y una luz les brilló.",
          "collect": "Antes de la solemnidad de Epifanía: DIOS todopoderoso, concédenos que tu salvación, que llegó con una luz nueva del cielo para la redención del mundo, amanezca en nuestros corazones y los renueve siempre. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "OH, Dios, autor de la piedad sincera y de la paz, te pedimos que con esta ofrenda veneremos dignamente tu grandeza y nuestra unión se haga más fuerte or la participación en este sagrado misterio. Por Jesucristo, nuestro Señor.",
          "communion": "La vida, que estaba junto al Padre, se hizo visible y se nos manifestó.",
          "prayer_after": "QUE tu pueblo, Señor, dirigido por tu abundante ayuda, reciba los auxilios presentes y futuros de tu amor, para que, sostenido por el consuelo necesario de las cosas temporales, aspire con más confianza a los bienes eternos. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Miércoles",
            "page": 21,
            "citation": "Is 9, 2"
          },
          "collect": {
            "title": "Miércoles",
            "page": 21
          },
          "prayer_offerings": {
            "title": "Miércoles",
            "page": 21
          },
          "communion": {
            "title": "Miércoles",
            "page": 21,
            "citation": "1 Jn 1, 2"
          },
          "prayer_after": {
            "title": "Miércoles",
            "page": 21
          }
        }
      },
      "after-epiphany-4": {
        "key": "after-epiphany-4",
        "kind": "temporal",
        "title": "Jueves",
        "page": 23,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Navidad.pdf"
        },
        "data": {
          "entrance": "En el principio y antes de los siglos, el Verbo era Dios, y se ha dignado nacer como Salvador del mundo.",
          "collect": "Antes de la solemnidad de Epifanía: OH, Dios, que con el nacimiento de tu Unigénito has comenzado de modo admirable la redención de tu pueblo, te pedimos que concedas a tus fieles una fe tan sólida que, guiados por él, alcancemos el premio prometido de la gloria. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACEPTA, Señor, nuestras ofrendas en las que vas a realizar un admirable intercambio, para que, al ofrecerte lo que tú nos diste, merezcamos recibirte a ti mismo. Por Jesucristo, nuestro Señor.",
          "communion": "Tanto amó Dios al mundo, que entregó a su Unigénito, para que todo el que cree en él no perezca, sino que tenga vida eterna.",
          "prayer_after": "CONCÉDENOS, Dios tod opoderoso, que, por la eficacia de estos santos misterios, se fortalezca constantemente nuestra vida. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Jueves",
            "page": 23,
            "citation": "Cf. Jn 1, 1"
          },
          "collect": {
            "title": "Jueves",
            "page": 23
          },
          "prayer_offerings": {
            "title": "Jueves",
            "page": 23
          },
          "communion": {
            "title": "Jueves",
            "page": 23,
            "citation": "Jn 3, 16"
          },
          "prayer_after": {
            "title": "Jueves",
            "page": 24
          }
        }
      },
      "after-epiphany-5": {
        "key": "after-epiphany-5",
        "kind": "temporal",
        "title": "Viernes",
        "page": 25,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Navidad.pdf"
        },
        "data": {
          "entrance": "En las tinieblas brilla como una luz: el Señor que es justo, clemente y compasivo.",
          "collect": "Antes de la solemnidad de Epifanía: ILUMINA con bondad a tus fieles, Señor, y enciende siempre sus corazones con la luz de tu gloria, para que en todo momento reconozcan a su Salvador y se adhieran sinceramente a él. Que vive y reina contigo. Después de la solemnidad de Epifanía: DIOS todopoderoso, concédenos que el nacimiento del Salvador del mundo, anunciado por una estrella, se manifieste y crezca siempre en nuestros corazones. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "RECIBE, Señor, con bondad las ofrendas de tu pueblo, para que cuanta creemos por la fe lo alcancemos por el sacramento celestial. Por Jesucristo, nuestro Señor.",
          "communion": "En esto se manifestó el amor que Dios nos tiene: en que Dios envió al mundo a su Unigénito para que vivamos por medio de él.",
          "prayer_after": "OH, Dios, que llegas hasta nosotros al participar en tu sacramento, realiza en nuestros corazones el efecto de su poder, para que, al recibirlo, nos haga dignos del don que nos haces. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Viernes",
            "page": 25,
            "citation": "Cf. Sal 111, 4"
          },
          "collect": {
            "title": "Viernes",
            "page": 25
          },
          "prayer_offerings": {
            "title": "Viernes",
            "page": 25
          },
          "communion": {
            "title": "Viernes",
            "page": 25,
            "citation": "1 Jn 4, 9"
          },
          "prayer_after": {
            "title": "Viernes",
            "page": 25
          }
        }
      },
      "after-epiphany-6": {
        "key": "after-epiphany-6",
        "kind": "temporal",
        "title": "Sábado",
        "page": 27,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Navidad.pdf"
        },
        "data": {
          "entrance": "Apenas se bautizó el Señor, se abrieron los cielos, y el Espíritu se posó sobre él como una paloma, y se oyó la voz del Padre que decía: «Este es mi Hijo amado, en quien me complazco».",
          "collect": "DIOS todopoderoso y eterno, que en el bautismo de Cristo, en el Jordán, al enviar sobre él tu Espíritu Santo, quisiste revelar solemnemente a tu Hijo amado, concede a tus hijos de adopción, renacidos del agua y del Espíritu Santo, perseverar siempre en tu benevolencia. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "RECIBE, Señor, los dones en este día en que manifestaste a tu Hijo predilecto, y haz que esta ofrenda de tu pueblo se convierta en el sacrificio de aquel que quiso borrar los pecados del mundo. Por Jesucristo, nuestro Señor.",
          "communion": "Este es de quien decía Juan: «Yo lo he visto y he dado testimonio de que este es el Hijo de Dios».",
          "prayer_after": "SEÑOR, alimentados con estos dones sagrados, imploramos de tu bondad, que, escuchando fielmente a tu Unigénito, de verdad nos llamemos y seamos hijos tuyos. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Sábado",
            "page": 29,
            "citation": "Cf. Mt 3, 16-17"
          },
          "collect": {
            "title": "Sábado",
            "page": 29
          },
          "prayer_offerings": {
            "title": "Sábado",
            "page": 29
          },
          "communion": {
            "title": "Sábado",
            "page": 30,
            "citation": "Cf. Jn 1, 32. 34"
          },
          "prayer_after": {
            "title": "Sábado",
            "page": 30
          }
        }
      },
      "lent-0-3": {
        "key": "lent-0-3",
        "kind": "temporal",
        "title": "Miércoles de Ceniza",
        "page": 3,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Te compadeces de todos, Señor, y no aborreces nada de lo que hiciste; pasas por alto los pecados de los hombres para que se arrepientan, y los perdonas, porque tú eres nuestro Dios y Señor. Se omite el acto penitencial, ya que en esta celebración es sustituido por la imposición de la ceniza.",
          "collect": "CONCÉDENOS, Señor, comenzar el combate cristiano con el ayuno santo, para que, al luchar contra los enemigos espirituales, seamos fortalecidos con la ayuda de la austeridad. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "AL ofrecer el sacrificio que inaugura solemnemente la Cuaresma, te pedimos, Señor, que, mediante las obras de caridad y de penitencia, dominemos las malas inclinaciones y, limpios de pecado, merezcamos celebrar piadosamente la pasión de tu Hijo. Él, que vive y reina por los siglos de los siglos.",
          "communion": "El que medita la ley del Señor día y noche da fruto en su sazón.",
          "prayer_after": "LOS sacramentos que hemos recibido nos sean de ayuda, Señor, para que nuestros ayunos sean gratos a tus ojos y nos sirvan de medicina. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Miércoles de Ceniza",
            "page": 3,
            "citation": "Cf. Sab 11, 23-24"
          },
          "collect": {
            "title": "Miércoles de Ceniza",
            "page": 3
          },
          "prayer_offerings": {
            "title": "Miércoles de Ceniza",
            "page": 5
          },
          "communion": {
            "title": "Miércoles de Ceniza",
            "page": 5,
            "citation": "Cf. Sal 1, 2-3"
          },
          "prayer_after": {
            "title": "Miércoles de Ceniza",
            "page": 6
          }
        }
      },
      "lent-0-4": {
        "key": "lent-0-4",
        "kind": "temporal",
        "title": "Jueves después de Ceniza",
        "page": 7,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Cuando invoqué al Señor, él escuchó mi voz y me salvó de los enemigos. Encomienda al Señor tus afanes, que él te sustentará.",
          "collect": "TE pedimos, Señor, que inspires, sostengas y acompañes nuestras obras, para que nuestro trabajo comience en ti, como en su fuente, y tienda siempre a ti, como a su fin. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "MIRA, Señor, propicio las ofrendas que presentamos en tu altar, para que nos obtengan el perdón y proclamen la gloria de tu nombre. Por Jesucristo, nuestro Señor.",
          "communion": "Oh, Dios, crea en mí un corazón puro, renuévame por dentro con espíritu firme.",
          "prayer_after": "TE pedimos, Dios todopoderoso, después de recibir la gracia del don celestial, que este sea siempre para nosotros causa de perdón y salvación. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Jueves después de Ceniza",
            "page": 7,
            "citation": "Cf. Sal 54, 17-20. 23"
          },
          "collect": {
            "title": "Jueves después de Ceniza",
            "page": 7
          },
          "prayer_offerings": {
            "title": "Jueves después de Ceniza",
            "page": 7
          },
          "communion": {
            "title": "Jueves después de Ceniza",
            "page": 7,
            "citation": "Sal 50, 12"
          },
          "prayer_after": {
            "title": "Jueves después de Ceniza",
            "page": 7
          }
        }
      },
      "lent-0-5": {
        "key": "lent-0-5",
        "kind": "temporal",
        "title": "Viernes después de Ceniza",
        "page": 8,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Escucha, Señor, y ten piedad de mí; Señor, socórreme.",
          "collect": "TE pedimos, Señor, continuar las obras de penitencia que hemos comenzado con tu benevolencia, para que la práctica que observamos externamente, vaya acompañada de la sinceridad de corazón. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "TE ofrecemos, Señor, el sacrificio de nuestra observancia cuaresmal, que vuelva más aceptables a ti nuestros corazones y nos haga más diligentes en la penitencia. Por Jesucristo, nuestro Señor.",
          "communion": "Señor, enséñanos tus caminos, instrúyenos en tus sendas.",
          "prayer_after": "TE pedimos, Dios todopoderoso, que la participación en este sacramento nos purifique de todo pecado y nos disponga a recibir los auxilios de tu bondad. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Viernes después de Ceniza",
            "page": 8,
            "citation": "Sal 29, 11"
          },
          "collect": {
            "title": "Viernes después de Ceniza",
            "page": 8
          },
          "prayer_offerings": {
            "title": "Viernes después de Ceniza",
            "page": 8
          },
          "communion": {
            "title": "Viernes después de Ceniza",
            "page": 8,
            "citation": "Cf. Sal 24, 4"
          },
          "prayer_after": {
            "title": "Viernes después de Ceniza",
            "page": 8
          }
        }
      },
      "lent-0-6": {
        "key": "lent-0-6",
        "kind": "temporal",
        "title": "Sábado después de Ceniza",
        "page": 9,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Respóndenos, Señor, con la bondad de tu gracia; por tu gran compasión vuélvete hacia nosotros.",
          "collect": "DIOS todopoderoso y eterno, mira compasivo nuestra debilidad y, para protegernos, extiende sobre nosotros tu mano poderosa. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "RECIBE, Señor, este sacrificio de reconciliación y de alabanza; y haz que, purificados por su eficacia, podamos ofrecerte el afecto de nuestro corazón como ofrenda agradable a tus ojos. Por Jesucristo, nuestro Señor.",
          "communion": "Misericordia quiero y no sacrificios, dice el Señor; que no he venido a llamar a justos, sino a pecadores.",
          "prayer_after": "TE pedimos, Señor, que, alimentados con el don de la vida celestial, lo que para nosotros es un sacramento en la vida presente se convierta en auxilio de eternidad. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Sábado después de Ceniza",
            "page": 9,
            "citation": "Cf. Sal 68, 17"
          },
          "collect": {
            "title": "Sábado después de Ceniza",
            "page": 9
          },
          "prayer_offerings": {
            "title": "Sábado después de Ceniza",
            "page": 9
          },
          "communion": {
            "title": "Sábado después de Ceniza",
            "page": 9,
            "citation": "Cf. Mt 9, 13"
          },
          "prayer_after": {
            "title": "Sábado después de Ceniza",
            "page": 9
          }
        }
      },
      "lent-1-0": {
        "key": "lent-1-0",
        "kind": "temporal",
        "title": "I DOMINGO DE CUARESMA",
        "page": 10,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Me invocará y lo escucharé; lo defenderé, lo glorificaré; lo saciaré de largos días.",
          "collect": "DIOS todopoderoso, por medio de las prácticas anuales del sacramento cuaresmal concédenos progresar en el conocimiento del misterio de Cristo, y conseguir sus frutos con una conducta digna. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "HAZ Señor, que nuestra vida responda a estos dones que van a ser ofrecidos y en los que celebramos el comienzo de un mismo sacramento admirable. Por Jesucristo, nuestro Señor.",
          "communion": "No solo de pan vive el hombre, sino de toda palabra que sale de la boca de Dios. O bien: Cf. Sal 90, 4 El Señor te cubrirá con sus plumas, bajo sus alas te refugiarás.",
          "prayer_after": "DESPUÉS de recibir el pan del cielo que alimenta la fe, consolida la esperanza y fortalece el amor, te rogamos, Señor, que nos hagas sentir hambre de Cristo, pan vivo y verdadero, y nos enseñes a vivir constantemente de toda palabra que sale de tu boca. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "I DOMINGO DE CUARESMA",
            "page": 10,
            "citation": "Sal 90, 15-16"
          },
          "collect": {
            "title": "I DOMINGO DE CUARESMA",
            "page": 10
          },
          "prayer_offerings": {
            "title": "I DOMINGO DE CUARESMA",
            "page": 10
          },
          "communion": {
            "title": "I DOMINGO DE CUARESMA",
            "page": 11,
            "citation": "Mt 4, 4"
          },
          "prayer_after": {
            "title": "I DOMINGO DE CUARESMA",
            "page": 11
          }
        }
      },
      "lent-1-1": {
        "key": "lent-1-1",
        "kind": "temporal",
        "title": "Lunes de la I semana de Cuaresma",
        "page": 12,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Como están los ojos de los esclavos fijos en las manos de sus señores, así están nuestros ojos en el Señor, Dios nuestro, esperando su misericordia. Misericordia, Señor, misericordia.",
          "collect": "CONVIÉRT ENOS a ti, Dios Salvador nuestro, e instruye nuestras mentes con la sabiduría del cielo, para que la celebración de esta Cuaresma dé fruto en nosotros. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACEPTA, Señor, la ofrenda de nuestra fidelidad, que, por tu acción, santifique nuestra vida y nos obtenga el perdón de nuestras culpas. Por Jesucristo, nuestro Señor.",
          "communion": "En verdad os digo, cada vez que lo hicisteis con uno de estos mis hermanos más pequeños, conmigo lo hicisteis, dice el Señor. Venid vosotros, benditos de mi Padre, heredad el reino preparado para vosotros desde la creación del mundo.",
          "prayer_after": "AL recibir tu sacramento, Señor, concédenos experimen tar alivio para el alma y para el cuerpo, para que, salvados ambos, nos gloriemos en la plenitud de los auxilios del cielo. Por Jesucristo nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Lunes de la I semana de Cuaresma",
            "page": 12,
            "citation": "Sal 122, 2-3"
          },
          "collect": {
            "title": "Lunes de la I semana de Cuaresma",
            "page": 12
          },
          "prayer_offerings": {
            "title": "Lunes de la I semana de Cuaresma",
            "page": 12
          },
          "communion": {
            "title": "Lunes de la I semana de Cuaresma",
            "page": 12,
            "citation": "Cf. Mt 25, 40. 34"
          },
          "prayer_after": {
            "title": "Lunes de la I semana de Cuaresma",
            "page": 12
          }
        }
      },
      "lent-1-2": {
        "key": "lent-1-2",
        "kind": "temporal",
        "title": "Martes de la I semana de Cuaresma",
        "page": 13,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Señor, tú has sido nuestro refugio de generación en generación. Desde siempre y por siempre tú eres Dios.",
          "collect": "SEÑ OR, mira a tu familia y haz que nuestro espíritu brille junto a ti con el deseo de poseerte, al mortificarnos mediante la penitencia corporal. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "DIOS, creador todopoderoso, acepta los dones que recibimos de tu abundante generosidad y convierte en auxilio para la vida eterna los bienes temporales que nos has dado. Por Jesucristo, nuestro Señor.",
          "communion": "Escúchame cuando te invoco, Dios de mi justicia; tú que en el aprieto me diste anchura ten piedad de mí y escucha mi oración.",
          "prayer_after": "SEÑOR, que este sacramento nos ayude a estimar los bienes del cielo a la vez que calmamos la tendencia a los de la tierra. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Martes de la I semana de Cuaresma",
            "page": 13,
            "citation": "Sal 89, 1-2"
          },
          "collect": {
            "title": "Martes de la I semana de Cuaresma",
            "page": 13
          },
          "prayer_offerings": {
            "title": "Martes de la I semana de Cuaresma",
            "page": 13
          },
          "communion": {
            "title": "Martes de la I semana de Cuaresma",
            "page": 13,
            "citation": "Sal 4, 2"
          },
          "prayer_after": {
            "title": "Martes de la I semana de Cuaresma",
            "page": 13
          }
        }
      },
      "lent-1-3": {
        "key": "lent-1-3",
        "kind": "temporal",
        "title": "Miércoles de la I semana de Cuaresma",
        "page": 14,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Recuerda, Señor, que tu ternura y tu misericordia son eternas. Que no triunfen de nosotros nuestros enemigos. Sálvanos, Dios de Israel, de todos nuestros peligros.",
          "collect": "MIRA complacido, Señor, el fervor de tu pueblo que desea entregarse a ti con una vida santa; y, a los que dominan su cuerpo con la penitencia, transfórmalos interiormente mediante el fruto de las buenas obras. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "TE presentamos, Señor, estos dones que nos diste para consagrarlos a tu nombre y, ya que los has hecho sacramento para nosotros, transfórmalos en remedio para la vida eterna. Por Jesucristo, nuestro Señor.",
          "communion": "Que se alegren todos los que esperan en ti, Señor: gozarán eternamente y habitarás en ellos.",
          "prayer_after": "OH, Dios, que no cesas de alimentarnos con tus sacramentos, concédenos que este banquete al que nos has admitido nos alcance la vida eterna. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Miércoles de la I semana de Cuaresma",
            "page": 14,
            "citation": "Cf. Sal 24, 6. 2. 22"
          },
          "collect": {
            "title": "Miércoles de la I semana de Cuaresma",
            "page": 14
          },
          "prayer_offerings": {
            "title": "Miércoles de la I semana de Cuaresma",
            "page": 14
          },
          "communion": {
            "title": "Miércoles de la I semana de Cuaresma",
            "page": 14,
            "citation": "Cf. Sal 5, 12"
          },
          "prayer_after": {
            "title": "Miércoles de la I semana de Cuaresma",
            "page": 14
          }
        }
      },
      "lent-1-4": {
        "key": "lent-1-4",
        "kind": "temporal",
        "title": "Jueves de la I semana de Cuaresma",
        "page": 15,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Señor, escucha mis palabras, atiende a mis gemidos, haz caso mis gritos de auxilio, Rey mío y Dios mío.",
          "collect": "CONCÉDENOS, Señor, la gracia de conocer siempre lo que es recto y practicarlo con diligencia, para que vivamos siempre según tu voluntad los que sin ti no podemos ni siquiera existir. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ATIENDE, Señor, los deseos de los que te suplican, y, al aceptar nuestras ofrendas y plegarias, convierte hacia ti los corazones de todos nosotros. Por Jesucristo, nuestro Señor.",
          "communion": "Todo el que pide recibe, quien busca encuentra y al que llama se le abre.",
          "prayer_after": "SEÑOR, Dios nuestro, haz de estos santos misterios que nos entregaste como prenda de nuestra salvación, auxilio en el presente y para el futuro. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Jueves de la I semana de Cuaresma",
            "page": 15,
            "citation": "Sal 5, 2-3"
          },
          "collect": {
            "title": "Jueves de la I semana de Cuaresma",
            "page": 15
          },
          "prayer_offerings": {
            "title": "Jueves de la I semana de Cuaresma",
            "page": 15
          },
          "communion": {
            "title": "Jueves de la I semana de Cuaresma",
            "page": 15,
            "citation": "Mt 7, 8"
          },
          "prayer_after": {
            "title": "Jueves de la I semana de Cuaresma",
            "page": 15
          }
        }
      },
      "lent-1-5": {
        "key": "lent-1-5",
        "kind": "temporal",
        "title": "Viernes de la I semana de Cuaresma",
        "page": 16,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Señor, sácame de mis tribulaciones. Mira mis trabajos y mis penas y perdona todos mis pecados.",
          "collect": "SEÑOR, concede a tus fieles, prepararse de modo conveniente a las fiestas de Pascua, para que, aceptada la penitencia corporal según la costumbre, sea útil a todos para el bien de las almas. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACEPTA, Señor, estas ofrendas con las que has querido satisfacerte y por las que nos devuelves con amor eficaz la salvación eterna. Por Jesucristo, nuestro Señor.",
          "communion": "Por mi vida, oráculo del Señor, que yo no me complazco en la muerte del malvado, sino en que el malvado se convierta y viva.",
          "prayer_after": "LA comunión de tu sacramento, Señor, nos restaure y, purificados del antiguo pecado, nos conduzca a la unidad del misterio que nos salva. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Viernes de la I semana de Cuaresma",
            "page": 16,
            "citation": "Cf. Sal 24, 17-18"
          },
          "collect": {
            "title": "Viernes de la I semana de Cuaresma",
            "page": 16
          },
          "prayer_offerings": {
            "title": "Viernes de la I semana de Cuaresma",
            "page": 16
          },
          "communion": {
            "title": "Viernes de la I semana de Cuaresma",
            "page": 16,
            "citation": "Ez 33, 11"
          },
          "prayer_after": {
            "title": "Viernes de la I semana de Cuaresma",
            "page": 16
          }
        }
      },
      "lent-1-6": {
        "key": "lent-1-6",
        "kind": "temporal",
        "title": "Sábado de la I semana de Cuaresma",
        "page": 17,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "La ley del Señor es perfecta y es descanso del alma; el precepto del Señor es fiel e instruye a los ignorantes.",
          "collect": "PADRE eterno, vuelve hacia ti nuestros corazones, para que, buscando siempre lo único necesario y realizando obras de caridad, nos dediquemos a tu servicio. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SEÑ OR, que estos santos misterios nos renueven y nos hagan dignos de su fruto. Por Jesucristo, nuestro Señor.",
          "communion": "Sed perfectos, como vuestro Padre celestial es perfecto, dice el Señor.",
          "prayer_after": "ASISTE, Señor, con tu ayuda continua a los que alimentas con este divino sacramento, y, a cuantos has iluminado con la sabiduría del cielo, acompáñalos con el consuelo de la salvación. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Sábado de la I semana de Cuaresma",
            "page": 17,
            "citation": "Sal 18, 8"
          },
          "collect": {
            "title": "Sábado de la I semana de Cuaresma",
            "page": 17
          },
          "prayer_offerings": {
            "title": "Sábado de la I semana de Cuaresma",
            "page": 17
          },
          "communion": {
            "title": "Sábado de la I semana de Cuaresma",
            "page": 17,
            "citation": "Cf. Mt 5, 48"
          },
          "prayer_after": {
            "title": "Sábado de la I semana de Cuaresma",
            "page": 17
          }
        }
      },
      "lent-2-0": {
        "key": "lent-2-0",
        "kind": "temporal",
        "title": "II DOMINGO DE CUARESMA",
        "page": 18,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Oigo en mi corazón: «Buscad mi rostro». Tu rostro buscaré, Señor. No me escondas tu rostro. O bien: Sal 24, 6. 2. 22 Recuerda, Señor, que tu ternura y tu misericordia son eternas. Que no triunfen de nosotros nuestros enemigos; sálvanos, Dios de Israel, de todos nuestros peligros.",
          "collect": "OH, Dios, que nos has mandado escuchar a tu Hijo amado, alimenta nuestro espíritu con tu palabra; para que, con mirada limpia, contemplemos gozosos la gloria de tu rostro. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "TE pedimos, Señor, que esta oblación borre nuestros pecados y santifique los cuerpos y las almas de tus fieles, para que celebren dignamente las fiestas pascuales. Por Jesucristo, nuestro Seño r.",
          "communion": "Este es mi Hijo, el amado, en quien me complazco. Escuchadlo.",
          "prayer_after": "TE damos gracias, Señor, porque, al participar en estos gloriosos misterios, nos haces recibir, ya en este mundo, los bienes eternos del cielo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "II DOMINGO DE CUARESMA",
            "page": 18,
            "citation": "Sal 26, 8-9"
          },
          "collect": {
            "title": "II DOMINGO DE CUARESMA",
            "page": 18
          },
          "prayer_offerings": {
            "title": "II DOMINGO DE CUARESMA",
            "page": 18
          },
          "communion": {
            "title": "II DOMINGO DE CUARESMA",
            "page": 19,
            "citation": "Mt 17, 5"
          },
          "prayer_after": {
            "title": "II DOMINGO DE CUARESMA",
            "page": 19
          }
        }
      },
      "lent-2-1": {
        "key": "lent-2-1",
        "kind": "temporal",
        "title": "Lunes de la II semana de Cuaresma",
        "page": 20,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Sálvame, Señor, ten misericordia de mí. Mi pie se mantiene en el camino llano; en la asamblea bendeciré al Señor.",
          "collect": "OH, Dios, que nos mandaste mortificar nuestro cuerpo como remedio espiritual, concédenos abstenemos de todo pecado y que nuestros corazones sean capaces de cumplir los mandamientos de tu amor. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACOGE, Señor, nuestra oración y libra de las seducciones del mundo a los que concedes servirte con los santos misterios del cielo. Por Jesucristo, nuestro Señor.",
          "communion": "Sed misericordiosos como vuestro Padre es misericordioso, dice el Señor.",
          "prayer_after": "SEÑOR, que esta comunión nos limpie de pecado y nos haga partícipes de las alegrías del cielo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Lunes de la II semana de Cuaresma",
            "page": 20,
            "citation": "Cf. Sal 25, 11-12"
          },
          "collect": {
            "title": "Lunes de la II semana de Cuaresma",
            "page": 20
          },
          "prayer_offerings": {
            "title": "Lunes de la II semana de Cuaresma",
            "page": 20
          },
          "communion": {
            "title": "Lunes de la II semana de Cuaresma",
            "page": 20,
            "citation": "Cf. Lc 6, 36"
          },
          "prayer_after": {
            "title": "Lunes de la II semana de Cuaresma",
            "page": 20
          }
        }
      },
      "lent-2-2": {
        "key": "lent-2-2",
        "kind": "temporal",
        "title": "Martes de la II semana de Cuaresma",
        "page": 21,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Da luz a mis ojos para que no duerma en la muerte, para que no diga mi enemigo: «Le he podido».",
          "collect": "SEÑOR, vela con amor continuo sobre tu Iglesia, y, pues sin tu ayuda no puede sostenerse lo que se cimienta en la debilidad humana, protégela siempre con tus auxilios en el peligro y dirígela hacia la salvación. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SANTIFÍCANOS, Señor, complacido por estos sacramentos; purifícanos de nuestros vicios terrenos y condúcenos hacia los bienes del cielo. Por Jesucristo, nuestro Señor.",
          "communion": "Proclamando todas tus maravillas, me alegro y exulto contigo, y toco en honor de tu nombre, oh, Altísimo.",
          "prayer_after": "TE rogamos, Señor, que la participación en tu mesa santa nos haga crecer en la piedad y nos obtenga tu ayuda constante. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Martes de la II semana de Cuaresma",
            "page": 21,
            "citation": "Sal 12, 4-5"
          },
          "collect": {
            "title": "Martes de la II semana de Cuaresma",
            "page": 21
          },
          "prayer_offerings": {
            "title": "Martes de la II semana de Cuaresma",
            "page": 21
          },
          "communion": {
            "title": "Martes de la II semana de Cuaresma",
            "page": 21,
            "citation": "Cf. Sal 9, 2-3"
          },
          "prayer_after": {
            "title": "Martes de la II semana de Cuaresma",
            "page": 21
          }
        }
      },
      "lent-2-3": {
        "key": "lent-2-3",
        "kind": "temporal",
        "title": "Miércoles de la II semana de Cuaresma",
        "page": 22,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "No me abandones, Señor, Dios mío, no te quedes lejos; ven a socorrerme, Señor mío, mi fuerza y salvación.",
          "collect": "SEÑOR, guarda a tu familia instruida en las buenas obras y, confortada en sus necesidades temporales, condúcela propicio hacia los bienes eternos. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "MIRA con bondad, Señor, la ofrenda que te presentamos, y por este santo intercambio líbranos de las ataduras de nuestros pecados. Por Jesucristo, nuestro Señor.",
          "communion": "El Hijo del hombre no ha venido a ser servido sino a servir y dar su vida en rescate por muchos.",
          "prayer_after": "SEÑOR, Dios nuestro, te pedimos que se convierta en causa de salvación eterna lo que quisiste fuera para nosotros prenda de inmortalidad. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Miércoles de la II semana de Cuaresma",
            "page": 22,
            "citation": "Cf. Sal 37, 22-23"
          },
          "collect": {
            "title": "Miércoles de la II semana de Cuaresma",
            "page": 22
          },
          "prayer_offerings": {
            "title": "Miércoles de la II semana de Cuaresma",
            "page": 22
          },
          "communion": {
            "title": "Miércoles de la II semana de Cuaresma",
            "page": 22,
            "citation": "Mt 20, 28"
          },
          "prayer_after": {
            "title": "Miércoles de la II semana de Cuaresma",
            "page": 22
          }
        }
      },
      "lent-2-4": {
        "key": "lent-2-4",
        "kind": "temporal",
        "title": "Jueves de la II semana de Cuaresma",
        "page": 23,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Oh, Dios, ponme a prueba y conoce mis sentimientos; mira si mi camino se desvía y guíame por el camino eterno.",
          "collect": "OH, Dios, que amas y devuelves la inocencia, atrae hacia ti los corazones de tus siervos para que, llenos del fervor de tu Espíritu, permanezcamos firmes en la fe y eficaces en las obras. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SANTIFICA, Señor, por este sacrificio, nuestra observancia cuaresmal, para que las prácticas externas transformen nuestro espíritu. Por Jesucristo, nuestro Señor.",
          "communion": "Dichoso el que, con vida intachable, camina en la ley del Señor.",
          "prayer_after": "TE pedimos, Señor, que el fruto de este sacrificio permanezca en nosotros y se manifieste siempre en nuestras obras. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Jueves de la II semana de Cuaresma",
            "page": 23,
            "citation": "Sal 138, 23-24"
          },
          "collect": {
            "title": "Jueves de la II semana de Cuaresma",
            "page": 23
          },
          "prayer_offerings": {
            "title": "Jueves de la II semana de Cuaresma",
            "page": 23
          },
          "communion": {
            "title": "Jueves de la II semana de Cuaresma",
            "page": 23,
            "citation": "Sal 118, 1"
          },
          "prayer_after": {
            "title": "Jueves de la II semana de Cuaresma",
            "page": 23
          }
        }
      },
      "lent-2-5": {
        "key": "lent-2-5",
        "kind": "temporal",
        "title": "Viernes de la II semana de Cuaresma",
        "page": 24,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "A ti, Señor, me acojo, no quede yo nunca defraudado; sácame de la red que me han tendido, porque tú eres mi protector.",
          "collect": "CONCÉDENOS, Dios todopoderoso, llegar a lo que está por venir con los corazones limpios, por el santo esfuerzo purificador de la penitencia. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "TE pedimos, oh Dios, que tu misericordia prepare debidamente a tus siervos y los conduzca a celebrar estos misterios con una conducta piadosa. Por Jesucristo, nuestro Señor.",
          "communion": "Dios nos amó y nos envió a su Hijo como víctima de propiciación por nuestros pecados.",
          "prayer_after": "SEÑOR, después de recibir la prenda de la eterna salvación, haz que la procuremos de tal modo que podamos llegar a ella. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Viernes de la II semana de Cuaresma",
            "page": 24,
            "citation": "Cf. Sal 30, 2. 5"
          },
          "collect": {
            "title": "Viernes de la II semana de Cuaresma",
            "page": 24
          },
          "prayer_offerings": {
            "title": "Viernes de la II semana de Cuaresma",
            "page": 24
          },
          "communion": {
            "title": "Viernes de la II semana de Cuaresma",
            "page": 24,
            "citation": "1 Jn 4, 10"
          },
          "prayer_after": {
            "title": "Viernes de la II semana de Cuaresma",
            "page": 24
          }
        }
      },
      "lent-2-6": {
        "key": "lent-2-6",
        "kind": "temporal",
        "title": "Sábado de la II semana de Cuaresma",
        "page": 25,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "El Señor es clemente y misericordioso, lento a la cólera y rico en piedad; el Señor es bueno con todos, es cariñoso con todas sus criaturas.",
          "collect": "SEÑOR, Dios nuestro, que, por medio de los sacramentos, nos permites, ya en la tierra, participar de los bienes del cielo, dirígenos tú mismo en esta la vida, para que nos lleves hacia esa luz en la que habitas. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "LLEGUEN hasta nosotros, Señor, por medio de este sacramento, los frutos de la redención, para que nos aparten de los excesos humanos y nos conduzcan hacia los bienes del cielo. Por Jesucristo, nuestro Señor.",
          "communion": "Deberías alegrarte, hijo, porque este hermano tuyo estaba muerto y ha revivido; estab a perdido y lo hemos encontrado.",
          "prayer_after": "SEÑOR, que la gracia recibida de tu sacramento llegue a lo más hondo de nuestro corazón y nos comunique su fuerza divina. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Sábado de la II semana de Cuaresma",
            "page": 25,
            "citation": "Sal 144, 8-9"
          },
          "collect": {
            "title": "Sábado de la II semana de Cuaresma",
            "page": 25
          },
          "prayer_offerings": {
            "title": "Sábado de la II semana de Cuaresma",
            "page": 25
          },
          "communion": {
            "title": "Sábado de la II semana de Cuaresma",
            "page": 25,
            "citation": "Cf. Lc 15, 32"
          },
          "prayer_after": {
            "title": "Sábado de la II semana de Cuaresma",
            "page": 25
          }
        }
      },
      "lent-3-0": {
        "key": "lent-3-0",
        "kind": "temporal",
        "title": "III DOMINGO DE CUARESMA",
        "page": 26,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Tengo los ojos puestos en el Señor, porque él saca mis pies de la red. Mírame, oh Dios, y ten piedad de mí, que estoy solo y afligido. O bien: Cf. Ez 36, 23-26 Cuando, por medio de vosotros, haga ver mi santidad, os reuniré de todos los países; derramaré sobre vosotros un agua pura que os purificará de todas vuestras inmundicias, y os daré un espíritu nuevo, dice el Señor.",
          "collect": "OH, Dios, autor de toda misericordia y bondad, que aceptas el ayuno, la oración y la limosna como remedio de nuestros pecados, mira con amor el reconocimiento de nuestra pequeñez y levanta con tu misericordia a los que nos sentimos abatidos por nuestra conciencia. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SEÑOR, por la celebración de este sacrificio concédenos, en tu bondad, que, al pedirte el perdón nuestras ofensas, nos esforcemos en perdonar las de nuestros hermanos. Por Jesucristo, nuestro Señor.",
          "communion": "Cuando se lee el Evangelio de la Samaritana: Cf. Jn 4, 13-14 El que beba del agua que yo le daré, dice el Señor, se convertirá dentro de él en un surtidor de agua que salta hasta la vida eterna. Cuando se lee otro Evangelio: Sal 85, 4-5 Hasta el gorrión ha encontrado una casa; la golondrina, un nido donde colocar sus polluelos: tus altares, Señor del universo, Rey mío y Dios mío. Dichosos los que viven en tu casa, alabándote siempre.",
          "prayer_after": "ALIMENTADOS ya en la tierra con el pan del cielo, prenda de eterna salvación, te suplicamos, Señor, que se haga realidad en nuestra vida lo que hemos recibido en este sacramento. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "III DOMINGO DE CUARESMA",
            "page": 26,
            "citation": "Sal 24, 15-16"
          },
          "collect": {
            "title": "III DOMINGO DE CUARESMA",
            "page": 26
          },
          "prayer_offerings": {
            "title": "III DOMINGO DE CUARESMA",
            "page": 26
          },
          "communion": {
            "title": "III DOMINGO DE CUARESMA",
            "page": 27
          },
          "prayer_after": {
            "title": "III DOMINGO DE CUARESMA",
            "page": 27
          }
        }
      },
      "lent-3-1": {
        "key": "lent-3-1",
        "kind": "temporal",
        "title": "Lunes de la III semana de Cuaresma",
        "page": 29,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Mi alma se consume y anhela los atrios del Señor, mi corazón y mi carne retozan por el Dios vivo.",
          "collect": "SEÑOR, purifica y protege a tu Iglesia con misericordia continua y, pues sin tu ayuda no puede mantenerse incólume, que tu protección la dirija y la sostenga siempre. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "LLEVA a plenitud, Señor, las ofrendas de tus siervos, haciéndolas para nosotros sacramento de salvación. Por Jesucristo, nuestro Señor.",
          "communion": "Alabad al Señor todas las naciones, firme es su misericordia con nosotros.",
          "prayer_after": "QUE la comunión en tu sacramento, Señor, nos purifique de nuestras culpas y nos conceda la unidad. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Lunes de la III semana de Cuaresma",
            "page": 29,
            "citation": "Sal 83, 3"
          },
          "collect": {
            "title": "Lunes de la III semana de Cuaresma",
            "page": 29
          },
          "prayer_offerings": {
            "title": "Lunes de la III semana de Cuaresma",
            "page": 29
          },
          "communion": {
            "title": "Lunes de la III semana de Cuaresma",
            "page": 29,
            "citation": "Sal 116, 1-2"
          },
          "prayer_after": {
            "title": "Lunes de la III semana de Cuaresma",
            "page": 29
          }
        }
      },
      "lent-3-2": {
        "key": "lent-3-2",
        "kind": "temporal",
        "title": "Martes de la III semana de Cuaresma",
        "page": 30,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Asegura mis pasos con tu promesa, Señor, que ninguna maldad me domine.",
          "collect": "SEÑOR, instruidos por las prácticas cuaresmales y alimentados con tu palabra, concédenos que te sirvamos fielmente con una santa austeridad de vida y perseveremos unidos en la plegaria. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "CON la ofrenda de estos dones, Señor, recibe las súplicas de tu pueblo y defiende de todo peligro a los que ahora celebramos tus misterios. Por Jesucristo, nuestro Señor.",
          "communion": "Me enseñarás el sendero de la vida, me saciarás de gozo en tu presencia, Señor.",
          "prayer_after": "SEÑOR, que nos santifique la comida celestial que hemos recibido, para que, libres de nuestros errores, podamos alcanzar las promesas eternas. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Martes de la III semana de Cuaresma",
            "page": 31,
            "citation": "Sal 118, 133"
          },
          "collect": {
            "title": "Martes de la III semana de Cuaresma",
            "page": 31
          },
          "prayer_offerings": {
            "title": "Martes de la III semana de Cuaresma",
            "page": 31
          },
          "communion": {
            "title": "Martes de la III semana de Cuaresma",
            "page": 31,
            "citation": "Cf. Sal 15, 11"
          },
          "prayer_after": {
            "title": "Martes de la III semana de Cuaresma",
            "page": 31
          }
        }
      },
      "lent-3-4": {
        "key": "lent-3-4",
        "kind": "temporal",
        "title": "Jueves de la III semana de Cuaresma",
        "page": 32,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Yo soy la salvación del pueblo, dice el Señor. Cuando me llamen desde el peligro, yo les escucharé y seré para siempre su Señor.",
          "collect": "INVOCAMOS humildemente, Señor, tu grandeza para que, a medida que se acerca la fiesta de nuestra salvación, vaya creciendo en intensidad nuestra entrega para celebrar dignamente el Misterio pascual. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SEÑOR preserva de toda maldad a tu pueblo, para que sus ofrendas sean gratas a tus ojos, y no permitas entregarse a los falsos placeres a quien prometes alcanzar los premios de tu verdad. Por Jesucristo, nuestro Señor.",
          "communion": "Tú promulgas tus mandatos para que se observen exactamente. Ojalá esté firme mi camino para cumplir tus decretos.",
          "prayer_after": "PRESTA benigno tu ayuda, Señor, a quienes alimentas con tus sacramentos, para que consigamos tu salvación en la celebración de estos misterios y en la vida cotidiana. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Jueves de la III semana de Cuaresma",
            "page": 32
          },
          "collect": {
            "title": "Jueves de la III semana de Cuaresma",
            "page": 32
          },
          "prayer_offerings": {
            "title": "Jueves de la III semana de Cuaresma",
            "page": 32
          },
          "communion": {
            "title": "Jueves de la III semana de Cuaresma",
            "page": 32,
            "citation": "Sal 118, 4-5"
          },
          "prayer_after": {
            "title": "Jueves de la III semana de Cuaresma",
            "page": 32
          }
        }
      },
      "lent-3-5": {
        "key": "lent-3-5",
        "kind": "temporal",
        "title": "Viernes de la III semana de Cuaresma",
        "page": 33,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "No tienes igual entre los dioses, Señor: grande eres tú y haces maravillas, tú eres el único Dios.",
          "collect": "INFUNDE bondadosamente, Señor, tu gracia en nuestros corazones, para que sepamos apartarnos de los errores humanos y secundar las inspiraciones que, por tu generosidad, nos vienen del cielo. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "MIRA Señor, con bondad los dones que te dedicamos, para que sean gratos a tus ojos y nos alcancen siempre la salvación. Por Jesucristo, nuestro Señor.",
          "communion": "Amar a Dios con todo el corazón, y al prójimo como a uno mismo, vale más que todos los sacrificios.",
          "prayer_after": "LA acción de tu poder, Señor, penetre nuestros cuerpos y almas, para que poseamos en la plenitud de la salvación lo que en esta participación hemos recibido. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Viernes de la III semana de Cuaresma",
            "page": 33,
            "citation": "Sal 86, 8.10"
          },
          "collect": {
            "title": "Viernes de la III semana de Cuaresma",
            "page": 33
          },
          "prayer_offerings": {
            "title": "Viernes de la III semana de Cuaresma",
            "page": 33
          },
          "communion": {
            "title": "Viernes de la III semana de Cuaresma",
            "page": 33,
            "citation": "Cfr. Mc 12, 33"
          },
          "prayer_after": {
            "title": "Viernes de la III semana de Cuaresma",
            "page": 33
          }
        }
      },
      "lent-3-6": {
        "key": "lent-3-6",
        "kind": "temporal",
        "title": "Sábado de la III semana de Cuaresma",
        "page": 34,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Bendice, alma mía, al Señor, y no olvides sus beneficios. Él perdona todas tus culpas.",
          "collect": "LLENOS de alegría, al celebrar un año más la Cuaresma, te pedimos, Señor, al unirnos a los sacramentos pascuales, que gocemos plenamente de su eficacia. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "OH, Dios, cuya gracia nos permite, purificados nuestros sentidos, acercarnos a tus santos misterios, concédenos rendirte una alabanza adecuada, al celebrar solemnemente lo que nos has entregado en ellos. Por Jesucristo, nuestro Señor.",
          "communion": "El publicano, quedándose atrás, se golpeaba el pecho diciendo: «Oh, Dios, ten compasión de este pecador».",
          "prayer_after": "CONCÉDENOS, Dios misericordioso, celebrar con sincera entrega las realidades santas que nos alimentan continuamente, y recibirlas siempre con espíritu de fe. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Sábado de la III semana de Cuaresma",
            "page": 34,
            "citation": "Sal 102, 2-3"
          },
          "collect": {
            "title": "Sábado de la III semana de Cuaresma",
            "page": 34
          },
          "prayer_offerings": {
            "title": "Sábado de la III semana de Cuaresma",
            "page": 34
          },
          "communion": {
            "title": "Sábado de la III semana de Cuaresma",
            "page": 34,
            "citation": "Lc 18, 13"
          },
          "prayer_after": {
            "title": "Sábado de la III semana de Cuaresma",
            "page": 34
          }
        }
      },
      "lent-4-0": {
        "key": "lent-4-0",
        "kind": "temporal",
        "title": "IV DOMINGO DE CUARESMA",
        "page": 35,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Alégrate, Jerusalén, reuníos todos los que la amáis, regocijaos los que estuvisteis tristes para que exultéis; mamaréis a sus pechos y os saciaréis de sus consuelos.",
          "collect": "OH, Dios, que, por tu Verbo, realizas de modo admirable la reconciliación del género humano, haz que el pueblo cristiano se apresure, con fe gozosa y entrega diligente, a celebrar las próximas fiestas pascuales. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SEÑOR, al ofrecerte alegres los dones de la eterna salvación, te rogamos nos ayudes a celebrarlos con fe verdadera y a saber ofrecértelos de modo adecuado por la salvación del mundo. Por Jesucristo, nuestro Señor.",
          "communion": "Cuando se lee el Evangelio del ciego de nacimiento: Cf. Jn 9, 11. 38 El Señor untó mis ojos: fui, me lavé, vi y creí en Dios. Cuando se lee el Evangelio del hijo pródigo: Cf. Lc 15, 32 Deberías alegrarse, hijo, porque este hermano tuyo estaba muerto y ha revivido; estaba perdido y lo hemos encontrado. Cuando se lee otro Evangelio: Cf. Sal 121, 3-4 Jerusalén está fundada como ciudad bien compacta. Allá suben las tribus, las tribus del Señor, a celebrar tu nombre, Señor.",
          "prayer_after": "OH, Dios, luz que alumbras a todo hombre que viene a este mundo, ilumina nuestros corazones con la claridad de tu gracia, para que seamos capaces de pensar siempre, y de amar con sinceridad, lo que es digno y grato a tu grandeza. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "IV DOMINGO DE CUARESMA",
            "page": 35,
            "citation": "Cf. Is 66, 10-11"
          },
          "collect": {
            "title": "IV DOMINGO DE CUARESMA",
            "page": 35
          },
          "prayer_offerings": {
            "title": "IV DOMINGO DE CUARESMA",
            "page": 35
          },
          "communion": {
            "title": "IV DOMINGO DE CUARESMA",
            "page": 36
          },
          "prayer_after": {
            "title": "IV DOMINGO DE CUARESMA",
            "page": 37
          }
        }
      },
      "lent-4-1": {
        "key": "lent-4-1",
        "kind": "temporal",
        "title": "Lunes de la IV semana de Cuaresma",
        "page": 38,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Yo confío en el Señor. Que tu misericordia sea mi gozo y mi alegría porque te has fijado en mi aflicción.",
          "collect": "OH, Dios, que renuevas el mundo por medio de sacramentos divinos, concede a tu Iglesia la ayuda de estos auxilios del cielo sin que le falten los necesarios de la tierra. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SEÑOR, concédenos recibir el fruto de estas ofrendas dedicadas a ti, para que, limpios de la vieja conducta de pecado, nos renovemos con el anticipo de la vida celestial. Por Jesucristo, nuestro Señor.",
          "communion": "Os infundiré mi espíritu y haré que caminéis según mis preceptos, y que guardéis y cumpláis mis mandatos, dice el Señor.",
          "prayer_after": "TE pedimos, Señor, que tus sacramentos, renovándonos, nos llenen de vida y, santificándonos, nos conduzcan a los premios eternos. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Lunes de la IV semana de Cuaresma",
            "page": 38,
            "citation": "Cf. Sal 30, 7-8"
          },
          "collect": {
            "title": "Lunes de la IV semana de Cuaresma",
            "page": 38
          },
          "prayer_offerings": {
            "title": "Lunes de la IV semana de Cuaresma",
            "page": 38
          },
          "communion": {
            "title": "Lunes de la IV semana de Cuaresma",
            "page": 38,
            "citation": "Cf. Ez 36, 27"
          },
          "prayer_after": {
            "title": "Lunes de la IV semana de Cuaresma",
            "page": 38
          }
        }
      },
      "lent-4-2": {
        "key": "lent-4-2",
        "kind": "temporal",
        "title": "Martes de la IV semana de Cuaresma",
        "page": 39,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Sedientos, acudid por agua, dice el Señor; venid los que no tenéis dinero y bebed con alegría.",
          "collect": "SEÑOR, que el ejercicio respetable de este tiempo santo prepare el corazón de tus fieles para acoger adecuadamente el Misterio pascual y anunciar a todos los hombres el mensaje de tu salvación. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "TE ofrecemos, Señor, estos dones que tu mismo nos diste; haz que manifiesten la ayuda de tu providencia sobre nuestra vida mortal y actúen en nosotros como remedio de inmortalidad. Por Jesucristo, nuestro Señor.",
          "communion": "El Señor me guía, nada me falta: en verdes praderas me hace recostar, me conduce hacia fuentes tranquilas.",
          "prayer_after": "PURIFICA con bondad, Señor, nuestro espíritu y renuévanos con los sacramentos del cielo, para que alcancemos también en nuestro cuerpo los auxilios presentes y futuros. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Martes de la IV semana de Cuaresma",
            "page": 39,
            "citation": "Cf. Is 55, 1"
          },
          "collect": {
            "title": "Martes de la IV semana de Cuaresma",
            "page": 39
          },
          "prayer_offerings": {
            "title": "Martes de la IV semana de Cuaresma",
            "page": 39
          },
          "communion": {
            "title": "Martes de la IV semana de Cuaresma",
            "page": 39,
            "citation": "Cf. Sal 22, 1-2"
          },
          "prayer_after": {
            "title": "Martes de la IV semana de Cuaresma",
            "page": 39
          }
        }
      },
      "lent-4-3": {
        "key": "lent-4-3",
        "kind": "temporal",
        "title": "Miércoles de la IV semana de Cuaresma",
        "page": 40,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Mi oración se dirige a ti, Señor, el día de tu favor; que me escuche tu gran bondad, que tu fidelidad me ayude.",
          "collect": "OH, Dios, que concedes a los justos el premio de sus méritos, y a los pecadores, por la penitencia, les perdonas sus pecados, ten piedad de nosotros, para que la humilde confesión de nuestras culpas nos obtenga tu perdón. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "TE pedimos, Señor, que la eficacia de este sacrificio borre nuestra condición antigua con la misericordia y nos haga crecer en la novedad de la salvación. Por Jesucristo, nuestro Señor.",
          "communion": "Dios no envió a su Hijo al mundo para juzgar al mundo, sino para que el mundo se salve por él.",
          "prayer_after": "DESPUÉS de recibir los dones del cielo, te pedimos, Señor, que no sean motivo de juicio para nosotros, pues los instituiste como medicina para tus fieles. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Miércoles de la IV semana de Cuaresma",
            "page": 40,
            "citation": "Sal 68, 14"
          },
          "collect": {
            "title": "Miércoles de la IV semana de Cuaresma",
            "page": 40
          },
          "prayer_offerings": {
            "title": "Miércoles de la IV semana de Cuaresma",
            "page": 40
          },
          "communion": {
            "title": "Miércoles de la IV semana de Cuaresma",
            "page": 40,
            "citation": "Jn 3, 17"
          },
          "prayer_after": {
            "title": "Miércoles de la IV semana de Cuaresma",
            "page": 40
          }
        }
      },
      "lent-4-4": {
        "key": "lent-4-4",
        "kind": "temporal",
        "title": "Jueves de la IV semana de Cuaresma",
        "page": 41,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Que se alegren los que buscan al Señor. Recurrid al Señor y a su poder, buscad continuamente su rostro.",
          "collect": "IMPLORAMOS deseosos, Señor, tu perdón, para que tus siervos, corregidos por la penitencia y educados por las buenas obras, nos mantengamos fieles a tus mandamientos, para llegar, bien dispuestos, a las fiestas de Pascua. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "CONCÉDENOS, Dios todopoderoso, que la ofrenda de este sacrificio libre siempre de todo mal nuestra debilidad y nos llene de fortaleza. Por Jesucristo, nuestro Señor.",
          "communion": "Pondré mi ley en su interior y la escribiré en sus corazones; yo seré su Dios y ellos serán mi pueblo, dice el Señor.",
          "prayer_after": "TE pedimos, Señor, que nos purifiquen los sacramentos que hemos recibido y que concedas a tus siervos liberarse de todas sus culpas, para que se gloríen en la plenitud de la ayuda del cielo los que se ven agobiados por el peso de su conciencia. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Jueves de la IV semana de Cuaresma",
            "page": 41,
            "citation": "Sal 104, 3-4"
          },
          "collect": {
            "title": "Jueves de la IV semana de Cuaresma",
            "page": 41
          },
          "prayer_offerings": {
            "title": "Jueves de la IV semana de Cuaresma",
            "page": 41
          },
          "communion": {
            "title": "Jueves de la IV semana de Cuaresma",
            "page": 41,
            "citation": "Cf. Jer 31, 33"
          },
          "prayer_after": {
            "title": "Jueves de la IV semana de Cuaresma",
            "page": 41
          }
        }
      },
      "lent-4-5": {
        "key": "lent-4-5",
        "kind": "temporal",
        "title": "Viernes de la IV semana de Cuaresma",
        "page": 42,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Oh, Dios, sálvame por tu nombre, líbrame con tu poder. Oh, Dios, escucha mi súplica, atiende mis palabras.",
          "collect": "OH, Dios que has preparado el remedio adecuado para nuestra fragilidad, concédenos recibir con alegría la salvación que nos otorgas y manifestarla en nuestra propia conducta. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "DIOS Todopoderoso, que este sacrificio nos purifique con su eficacia, para que lleguemos más limpios a ti. Por Jesucristo, nuestro Señor.",
          "communion": "En Cristo, por su sangre, tenemos la redención, el perdón de los pecados, conforme a la riqueza de su gracia.",
          "prayer_after": "SEÑOR, así como pasamos de lo antiguo a lo nuevo, haz que, abandonada la vieja condición de pecado, nos renovemos con un espíritu santificado. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Viernes de la IV semana de Cuaresma",
            "page": 42,
            "citation": "Sal 53, 3-4"
          },
          "collect": {
            "title": "Viernes de la IV semana de Cuaresma",
            "page": 42
          },
          "prayer_offerings": {
            "title": "Viernes de la IV semana de Cuaresma",
            "page": 42
          },
          "communion": {
            "title": "Viernes de la IV semana de Cuaresma",
            "page": 42,
            "citation": "Cf. Ef 1, 7"
          },
          "prayer_after": {
            "title": "Viernes de la IV semana de Cuaresma",
            "page": 42
          }
        }
      },
      "lent-4-6": {
        "key": "lent-4-6",
        "kind": "temporal",
        "title": "Sábado de la IV semana de Cuaresma",
        "page": 43,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Me cercaban olas mortales, me envolvían las redes del abismo; en el peligro invoqué al Señor, desde su templo él escuchó mi voz.",
          "collect": "TE pedimos, Señor, que tu acción misericordiosa mueva nuestros corazones, ya que sin tu ayuda no podemos complacerte. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "TE pedimos, Señor, que seas propicio al recibir nuestras ofrendas y, compasivo, atraigas hacia ti nuestras voluntades rebeldes. Por Jesucristo, nuestro Señor.",
          "communion": "Hemos sido liberados con una sangre preciosa, como la de un Cordero sin defecto y sin mancha, Cristo.",
          "prayer_after": "QUE tus santos misterios nos purifiquen, Señor, y, por su acción eficaz, nos vuelvan agradables a tus ojos. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Sábado de la IV semana de Cuaresma",
            "page": 43,
            "citation": "Sal 17, 5. 6. 7"
          },
          "collect": {
            "title": "Sábado de la IV semana de Cuaresma",
            "page": 43
          },
          "prayer_offerings": {
            "title": "Sábado de la IV semana de Cuaresma",
            "page": 43
          },
          "communion": {
            "title": "Sábado de la IV semana de Cuaresma",
            "page": 43,
            "citation": "Cf. 1 Pe 1, 18-19"
          },
          "prayer_after": {
            "title": "Sábado de la IV semana de Cuaresma",
            "page": 43
          }
        }
      },
      "lent-5-0": {
        "key": "lent-5-0",
        "kind": "temporal",
        "title": "V DOMINGO DE CUARESMA",
        "page": 44,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Hazme justicia, oh Dios, defiende mi causa, contra gente sin piedad; sálvame del hombre traidor y malvado, porque tú eres mi Dios y mi fortaleza.",
          "collect": "TE pedimos, Señor Dios nuestro, que, con tu ayuda, avancemos animosamente hacia aquel mismo amor que movió a tu Hijo a entregarse a la muerte por la salvación del mundo. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ESCÚCHANOS, Dios todopoderoso, y, por la acción de este sacrificio, purifica a tus siervos, a quienes has iluminado con las enseñanzas de la fe cristiana. Por Jesucristo, nuestro Señor.",
          "communion": "Cuando se lee el Evangelio de la resurrección de Lázaro: Cf. Jn 11, 26 El que está vivo y cree en mí no morirá para siempre, dice el Señor. Cuando se lee el Evangelio de la mujer adúltera: Jn 8, 10-11 Mujer, ¿ninguno te ha condenado? Ninguno, Señor. Tampoco yo te condeno. En adelante no peques más. Cuando se lee otro Evangelio: Jn 12, 24-25 En verdad, en verdad os digo: si el grano de trigo no cae en tierra y muere, queda infecundo; pero si muere, da mucho fruto.",
          "prayer_after": "TE pedimos, Dios todopoderoso, que nos cuentes siempre entre los miembros de Cristo, cuyo Cuerpo y Sangre hemos recibido. Él, que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "V DOMINGO DE CUARESMA",
            "page": 44,
            "citation": "Cf. Sal 42, 1-2"
          },
          "collect": {
            "title": "V DOMINGO DE CUARESMA",
            "page": 44
          },
          "prayer_offerings": {
            "title": "V DOMINGO DE CUARESMA",
            "page": 44
          },
          "communion": {
            "title": "V DOMINGO DE CUARESMA",
            "page": 45
          },
          "prayer_after": {
            "title": "V DOMINGO DE CUARESMA",
            "page": 46
          }
        }
      },
      "lent-5-1": {
        "key": "lent-5-1",
        "kind": "temporal",
        "title": "Lunes de la V semana de Cuaresma",
        "page": 47,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Misericordia, Dios mío, que me hostigan, me atacan y me acosan todo el día.",
          "collect": "OH, Dios, por tu gracia inefable nos sentimos enriquecidos con toda bendición; haz que pasemos de la corrupción del hombre viejo a la novedad de vida, de modo que nos preparemos para la gloria del reino celestial. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "TE pedimos, Señor, que, al disponemos a celebrar los santos misterios, te presentemos, como fruto de la penitencia corporal, una gozosa pureza de corazón. Por Jesucristo, nuestro Señor.",
          "communion": "Cuando se lee el Evangelio de la mujer adúltera: Jn 8, 10-11 Mujer, ¿ninguno te ha condenado? Ninguno, Señor. Tampoco yo te condeno. En adelante no peques más. Cuando se lee otro Evangelio: Jn 8, 12 Yo soy l a luz del mundo, dice el Señor; el que me sigue no camina en tinieblas, sino que tendrá la luz de la vida.",
          "prayer_after": "FORTALECIDOS con la gracia de tus sacramentos, te pedimos, Señor, ser purificados siempre por ellos de nuestros pecados, y avanzar presurosos hacia ti en el seguimiento de Cristo. Él, que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "Lunes de la V semana de Cuaresma",
            "page": 47,
            "citation": "Sal 55, 2"
          },
          "collect": {
            "title": "Lunes de la V semana de Cuaresma",
            "page": 47
          },
          "prayer_offerings": {
            "title": "Lunes de la V semana de Cuaresma",
            "page": 47
          },
          "communion": {
            "title": "Lunes de la V semana de Cuaresma",
            "page": 47
          },
          "prayer_after": {
            "title": "Lunes de la V semana de Cuaresma",
            "page": 47
          }
        }
      },
      "lent-5-2": {
        "key": "lent-5-2",
        "kind": "temporal",
        "title": "Martes de la V semana de Cuaresma",
        "page": 49,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Espera en el Señor, sé valiente, ten ánimo, espera en el Señor.",
          "collect": "CONCÉDENOS, Señor, perseverar en el fiel cumplimiento de tu voluntad, para que, en nuestros días, crezca en santidad y en número el pueblo dedicado a tu servicio. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "TE ofrecemos, Señor, el sacrificio de reconciliación, para que, compasivo, perdones nuestros delitos y guíes tú mismo nuestros corazones vacilantes. Por Jesucristo, nuestro Señor.",
          "communion": "Cuando yo sea elevado sobre la tierra, atraeré a todos hacia mí, dice el Señor.",
          "prayer_after": "CONCÉDENOS, Dios todopoderoso, que, participando asiduamente en tus sacramentos, merezcamos alcanzar los dones del cielo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Martes de la V semana de Cuaresma",
            "page": 49,
            "citation": "Sal 26, 14"
          },
          "collect": {
            "title": "Martes de la V semana de Cuaresma",
            "page": 49
          },
          "prayer_offerings": {
            "title": "Martes de la V semana de Cuaresma",
            "page": 49
          },
          "communion": {
            "title": "Martes de la V semana de Cuaresma",
            "page": 49,
            "citation": "Cf. Jn 12, 32"
          },
          "prayer_after": {
            "title": "Martes de la V semana de Cuaresma",
            "page": 49
          }
        }
      },
      "lent-5-3": {
        "key": "lent-5-3",
        "kind": "temporal",
        "title": "Miércoles de la V semana de Cuaresma",
        "page": 50,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Señor, me librarás de mis enemigos, me levantarás sobre los que resisten y me salvarás del hombre cruel.",
          "collect": "ILUMINA, Dios misericordioso, el corazón de tus hijos, santificado por la penitencia, y, al infundirles el piadoso deseo de servirte, escucha compasivo a los que te suplican. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SEÑOR, te consagramos las ofrendas que nos has concedido presentar en honor de tu nombre, para que se conviertan en remedio de nuestra debilidad. Por Jesucristo, nuestro Señor.",
          "communion": "Dios nos ha trasladado al reino del Hijo de su amor, por cuya sangre hemos recibido la redención, el perdón de los pecados.",
          "prayer_after": "SEÑOR, el sacramento que acabamos de recibir sea medicina del cielo, para que elimine las culpas de nuestros corazones y nos asegure tu constante protección. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Miércoles de la V semana de Cuaresma",
            "page": 50,
            "citation": "Cf. Sal 17, 49"
          },
          "collect": {
            "title": "Miércoles de la V semana de Cuaresma",
            "page": 50
          },
          "prayer_offerings": {
            "title": "Miércoles de la V semana de Cuaresma",
            "page": 50
          },
          "communion": {
            "title": "Miércoles de la V semana de Cuaresma",
            "page": 50,
            "citation": "Cf. Col 1, 13-14"
          },
          "prayer_after": {
            "title": "Miércoles de la V semana de Cuaresma",
            "page": 50
          }
        }
      },
      "lent-5-4": {
        "key": "lent-5-4",
        "kind": "temporal",
        "title": "Jueves de la V semana de Cuaresma",
        "page": 51,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Cristo es mediador de una alianza nueva; en ella ha habido una muerte, y así los llamados pueden recibir la promesa de la herencia eterna.",
          "collect": "ESCUCHA nuestras súplicas, Señor, y protege con amor a los que han puesto su esperanza en tu misericordia, para que, limpios de la mancha de los pecados, perseveren en una vida santa y lleguen de este modo a heredar tus promesas. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "COMPLACIDO, Señor, con las ofrendas presentes, haz que favorezcan nuestra conversión y la salvación de todo el mundo. Por Jesucristo, nuestro Señor.",
          "communion": "Dios no se reservó a su propio Hijo, sino que lo entregó por todos nosotros: con él nos lo ha dado todo.",
          "prayer_after": "SACIADOS con los dones de la salvación, invocamos, Señor, tu misericordia, para que este sacramento, con el que nos alimentas en nuestra vida temporal, nos haga partícipes de la vida eterna. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Jueves de la V semana de Cuaresma",
            "page": 51,
            "citation": "Cf. Heb 9, 15"
          },
          "collect": {
            "title": "Jueves de la V semana de Cuaresma",
            "page": 51
          },
          "prayer_offerings": {
            "title": "Jueves de la V semana de Cuaresma",
            "page": 51
          },
          "communion": {
            "title": "Jueves de la V semana de Cuaresma",
            "page": 51,
            "citation": "Cf. Rom 8, 32"
          },
          "prayer_after": {
            "title": "Jueves de la V semana de Cuaresma",
            "page": 51
          }
        }
      },
      "lent-5-5": {
        "key": "lent-5-5",
        "kind": "temporal",
        "title": "Viernes de la V semana de Cuaresma",
        "page": 52,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Piedad, Señor, que estoy en peligro, líbrame de mis enemigos que me persiguen; Señor, no quede yo defraudado tras haber acudido a ti.",
          "collect": "PERDONA las culpas de tu pueblo, Señor, y que tu bondad nos libre de las ataduras del pecado, que hemos cometido a causa de nuestra debilidad. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "CONCÉDENOS, Dios misericordioso, servir siempre a tu altar con dignidad y alcanzar la salvación por la participación constante en él. Por Jesucristo, nuestro Señor.",
          "communion": "Jesús llevó nuestros pecados en su cuerpo hasta el leño, para que, muertos a los pecados, vivamos para la justicia; con sus heridas somos curados.",
          "prayer_after": "QUE nos acompañe, Señor, la continua protección del sacramento recibido y aleje siempre de nosotros todo mal. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Viernes de la V semana de Cuaresma",
            "page": 52,
            "citation": "Sal 30, 10. 16. 18"
          },
          "collect": {
            "title": "Viernes de la V semana de Cuaresma",
            "page": 52
          },
          "prayer_offerings": {
            "title": "Viernes de la V semana de Cuaresma",
            "page": 52
          },
          "communion": {
            "title": "Viernes de la V semana de Cuaresma",
            "page": 52,
            "citation": "Cf. 1 Pe 2, 24"
          },
          "prayer_after": {
            "title": "Viernes de la V semana de Cuaresma",
            "page": 52
          }
        }
      },
      "lent-5-6": {
        "key": "lent-5-6",
        "kind": "temporal",
        "title": "Sábado de la V semana de Cuaresma",
        "page": 54,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Señor, no te quedes lejos, defiéndeme; porque soy un gusano, no un hombre, vergüenza de la gente, desprecio del pueblo.",
          "collect": "OH, Dios, que has hecho a todos los renacidos en Cristo pueblo escogido y sacerdocio real, concédenos querer y realizar cuanto nos mandas, para que el pueblo, llamado a la vida eterna, tenga una misma fe en el corazón y una misma santidad en los actos. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACEPTA, Señor, las ofrendas de nuestro ayuno para que nos purifiquen, nos hagan dignos de tu gracia y nos conduzcan a los bienes eternos prometidos. Por Jesucristo, nuestro Señor.",
          "communion": "Cristo fue entregado para reunir a los hijos de Dios dispersos.",
          "prayer_after": "SEÑOR, pedimos humildemente a tu majestad que, así como nos fortaleces con el alimento del santísimo Cuerpo y Sangre de tu Hijo, nos hagas participar de su naturaleza divina. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Sábado de la V semana de Cuaresma",
            "page": 54,
            "citation": "Cf. Sal 21, 20. 7"
          },
          "collect": {
            "title": "Sábado de la V semana de Cuaresma",
            "page": 54
          },
          "prayer_offerings": {
            "title": "Sábado de la V semana de Cuaresma",
            "page": 54
          },
          "communion": {
            "title": "Sábado de la V semana de Cuaresma",
            "page": 54,
            "citation": "Cf. Jn 11, 52"
          },
          "prayer_after": {
            "title": "Sábado de la V semana de Cuaresma",
            "page": 54
          }
        }
      },
      "lent-6-1": {
        "key": "lent-6-1",
        "kind": "temporal",
        "title": "LUNES SANTO",
        "page": 66,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Pelea, Señor, contra los que me atacan, guerrea contra los que me hacen guerra; empuña el escudo y la adarga, levántate y ven en mi auxilio, Señor Dios, mi fuerte salvador.",
          "collect": "CONCÉDENOS, Dios todopoderoso, que, quienes desfallecemos a causa de nuestra debilidad, encontremos aliento en la pasión de tu Hijo unigénito. Él, que vive y reina contigo.",
          "prayer_offerings": "MIRA, Señor, con bondad los santos misterios que estamos celebrando y, ya que tu amor providente los instituyó para librarnos de nuestra condena, haz que fructifiquen para la vida eterna. Por Jesucristo, nuestro Señor.",
          "communion": "No me escondas tu rostro el día de la desgracia. Inclina tu oído hacia mí; cuando te invoco, escúchame en seguida.",
          "prayer_after": "VISITA , Señor, a tu pueblo, y guarda los corazones de quienes se consagran a tus misterios con amor solícito, para que conserven, bajo tu protección, los medios de la salvación eterna que han recibido de tu miserico rdia. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "LUNES SANTO",
            "page": 66,
            "citation": "Sal 34, 1-2; 139, 8"
          },
          "collect": {
            "title": "LUNES SANTO",
            "page": 66
          },
          "prayer_offerings": {
            "title": "LUNES SANTO",
            "page": 66
          },
          "communion": {
            "title": "LUNES SANTO",
            "page": 66,
            "citation": "Sal 101, 3"
          },
          "prayer_after": {
            "title": "LUNES SANTO",
            "page": 66
          }
        }
      },
      "lent-6-2": {
        "key": "lent-6-2",
        "kind": "temporal",
        "title": "MARTES SANTO",
        "page": 67,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "No me entregues, Señor, a la saña de mis adversarios, porque se levantan contra mí testigos falsos, que respiran violencia.",
          "collect": "DIOS todopoderoso y eterno, concédenos participar de tal modo en las celebraciones de la pasión del Señor, que merezcamos tu perdón. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "MIRA, Señor, con bondad las ofrendas de esta familia tuya a la que haces partícipe de tus dones santos, y concédele llegar a poseerlos plenamente. Por Jesucristo, nuestro Señor.",
          "communion": "Dios no se reservó a su propio Hijo, sino que lo entregó por todos nosotros.",
          "prayer_after": "SACIADOS con el don de la salvación, invocamos, Señor, tu misericordia, para que este sacramento, con el que quisiste que fuésemos alimentados en nuestra vida temporal, nos haga participar de la vida eterna. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "MARTES SANTO",
            "page": 67,
            "citation": "Cf. Sal 26, 12"
          },
          "collect": {
            "title": "MARTES SANTO",
            "page": 67
          },
          "prayer_offerings": {
            "title": "MARTES SANTO",
            "page": 67
          },
          "communion": {
            "title": "MARTES SANTO",
            "page": 67,
            "citation": "Cf. Rom 8, 32"
          },
          "prayer_after": {
            "title": "MARTES SANTO",
            "page": 67
          }
        }
      },
      "lent-6-3": {
        "key": "lent-6-3",
        "kind": "temporal",
        "title": "MIÉRCOLES SANTO",
        "page": 68,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Cuaresma.pdf"
        },
        "data": {
          "entrance": "Al nombre de Jesús toda rodilla se doble en el cielo, en la tierra, en el abismo: porque él se ha hecho obediente hasta la muerte y una muerte de cruz; por eso es Señor, para gloria de Dios Padre.",
          "collect": "OH , Dios que, para libramos del poder del enemigo, quisiste que tu Hijo soportase por nosotros el suplicio de la cruz, concédenos a tus siervos alcanzar la gracia de la resurrección. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "RECIBE, Señor, las ofrendas que te presentamos, y muestra la eficacia de tu poder, para que, al celebrar sacramentalmente la pasión de tu Hijo, consigamos sus frutos saludables. Por Jesucristo, nuestro Señor.",
          "communion": "El Hijo del hombre no ha venido a ser servido, sino a servir y dar su vida en rescate por muchos.",
          "prayer_after": "DIOS todopoderoso, concédenos sentir vivamente que, por la muerte de tu Hijo en el tiempo manifestada en estos santos misterios, confiemos en que tú nos has dado la vida eterna. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "MIÉRCOLES SANTO",
            "page": 68,
            "citation": "Cf. Flp 2, 10. 8. 11"
          },
          "collect": {
            "title": "MIÉRCOLES SANTO",
            "page": 68
          },
          "prayer_offerings": {
            "title": "MIÉRCOLES SANTO",
            "page": 68
          },
          "communion": {
            "title": "MIÉRCOLES SANTO",
            "page": 68,
            "citation": "Mt 20, 28"
          },
          "prayer_after": {
            "title": "MIÉRCOLES SANTO",
            "page": 68
          }
        }
      },
      "easter-1-1": {
        "key": "easter-1-1",
        "kind": "temporal",
        "title": "LUNES DE LA OCTAVA DE PASCUA",
        "page": 32,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "El Señor os ha introducido en una tierra que mana leche y miel, para que tengáis en los labios la instrucción del Señor. Aleluya. O bien: El Señor ha resucitado de entre los muertos, como lo había dicho; alegrémonos y regocijémonos todos, porque reina para siempre. Aleluya.",
          "collect": "SEÑOR Dios, que haces crecer a tu Iglesia, dándole siempre nuevos hijos, concede a tus siervos vivir el sacramento que recibieron con fe. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "RECIBE propicio, Señor, las ofrendas de tu pueblo, para que, renovado por la confesión de tu nombre y por el bautismo, alcance la eterna bienaventuranza. Por Jesucristo, nuestro Señor.",
          "communion": "Cristo, una vez resucitado de entre los muertos, ya no muere más; la muerte ya no tiene dominio sobre él. Aleluya.",
          "prayer_after": "TE pedimos, Señor, que la gracia del Misterio pascual colme totalmente nuestro espíritu, para que hagas dignos de tus dones a quienes concediste entrar en el camino de la salvación eterna. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "LUNES DE LA OCTAVA DE PASCUA",
            "page": 32,
            "citation": "Cf. Éx 13, 5. 9"
          },
          "collect": {
            "title": "LUNES DE LA OCTAVA DE PASCUA",
            "page": 32
          },
          "prayer_offerings": {
            "title": "LUNES DE LA OCTAVA DE PASCUA",
            "page": 32
          },
          "communion": {
            "title": "LUNES DE LA OCTAVA DE PASCUA",
            "page": 32,
            "citation": "Rom 6, 9"
          },
          "prayer_after": {
            "title": "LUNES DE LA OCTAVA DE PASCUA",
            "page": 32
          }
        }
      },
      "easter-1-2": {
        "key": "easter-1-2",
        "kind": "temporal",
        "title": "MARTES DE LA OCTAVA DE PASCUA",
        "page": 33,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Les dio a beber agua de sabiduría; si se apoyan en ella, no vacilarán; los ensalzará para siempre. Aleluya.",
          "collect": "OH, Dios, que nos entregaste los auxilios pascuales, continúa favoreciendo a tu pueblo con estos dones celestes, para que, habiendo alcanzado la libertad verdadera, pueda gozar en el cielo de la alegría que ya ha empezado a gustar en la tierra. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACOGE, Señor, con bondad las ofrendas de tu familia, para que, bajo tu protección, no pierda los dones ya recibidos y alcance los eternos. Por Jesucristo, nuestro Señor.",
          "communion": "Si habéis resucitado con Cristo, buscad los bienes de allá arriba, donde Cristo está sentado a la derecha de Dios; aspirad a los bienes de arriba. Aleluya.",
          "prayer_after": "ESCUCHANOS, Dios todopoderoso, y, para merecer la felicidad eterna, prepara los corazones de tu familia a la que otorgaste la gracia incomparable del bautismo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "MARTES DE LA OCTAVA DE PASCUA",
            "page": 33,
            "citation": "Cf. Eclo 15, 3-4"
          },
          "collect": {
            "title": "MARTES DE LA OCTAVA DE PASCUA",
            "page": 33
          },
          "prayer_offerings": {
            "title": "MARTES DE LA OCTAVA DE PASCUA",
            "page": 33
          },
          "communion": {
            "title": "MARTES DE LA OCTAVA DE PASCUA",
            "page": 33,
            "citation": "Col 3, 1-2"
          },
          "prayer_after": {
            "title": "MARTES DE LA OCTAVA DE PASCUA",
            "page": 33
          }
        }
      },
      "easter-1-3": {
        "key": "easter-1-3",
        "kind": "temporal",
        "title": "MIÉRCOLES DE LA OCTAVA DE PASCUA",
        "page": 34,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Venid vosotros, benditos de mi Padre; heredad el reino preparado para vosotros desde la creación del mundo. Aleluya.",
          "collect": "OH, Dios, que todos los años nos alegras con la solemnidad de la resurrección del Señor, concédenos propicio llegar a la alegría eterna mediante las fiestas que celebramos en el tiempo. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACEPTA, Señor, las ofrendas de la redención humana y concédenos, complacido, la salud del alma y del cuerpo. Por Jesucristo, nuestro Señor.",
          "communion": "Los discípulos reconocieron al Señor Jesús al partir el pan. Aleluya.",
          "prayer_after": "LIBRADOS de la vieja condición de pecado, te pedimos, Señor, que la devota participación en el sacramento de tu Hijo nos transforme en nuevas criaturas. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "MIÉRCOLES DE LA OCTAVA DE PASCUA",
            "page": 34,
            "citation": "Mt 25, 34"
          },
          "collect": {
            "title": "MIÉRCOLES DE LA OCTAVA DE PASCUA",
            "page": 34
          },
          "prayer_offerings": {
            "title": "MIÉRCOLES DE LA OCTAVA DE PASCUA",
            "page": 34
          },
          "communion": {
            "title": "MIÉRCOLES DE LA OCTAVA DE PASCUA",
            "page": 34,
            "citation": "Lc 24, 35"
          },
          "prayer_after": {
            "title": "MIÉRCOLES DE LA OCTAVA DE PASCUA",
            "page": 34
          }
        }
      },
      "easter-1-4": {
        "key": "easter-1-4",
        "kind": "temporal",
        "title": "JUEVES DE LA OCTAVA DE PASCUA",
        "page": 35,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Celebraron a coro tu mano vencedora, Señor, porque la sabiduría abrió la boca de los mudos y soltó la lengua de los niños. Aleluya.",
          "collect": "OH, Dios, que has reunido pueblos diversos en la confesión de tu nombre, concede a los que han renacido en la fuente bautismal una misma fe en su espíritu y un mismo amor en sus obras. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "RECIBE Señor, en tu bondad las ofrendas que te presentamos con gratitud por los nuevos bautizados, y para apresurar la ayuda del cielo. Por Jesucristo, nuestro Señor.",
          "communion": "Pueblo adquirido por Dios, anunciad las proezas del que os llamó de las tinieblas a su luz maravillosa. Aleluya.",
          "prayer_after": "ESCUCHA, Señor, nuestras oraciones para que el santo intercambio de nuestra redención nos sostenga durante la vida presente y nos dé las alegrías eternas. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "JUEVES DE LA OCTAVA DE PASCUA",
            "page": 35,
            "citation": "Sab 10, 20-21"
          },
          "collect": {
            "title": "JUEVES DE LA OCTAVA DE PASCUA",
            "page": 35
          },
          "prayer_offerings": {
            "title": "JUEVES DE LA OCTAVA DE PASCUA",
            "page": 35
          },
          "communion": {
            "title": "JUEVES DE LA OCTAVA DE PASCUA",
            "page": 35,
            "citation": "Cf. 1 Pe 2, 9"
          },
          "prayer_after": {
            "title": "JUEVES DE LA OCTAVA DE PASCUA",
            "page": 35
          }
        }
      },
      "easter-1-5": {
        "key": "easter-1-5",
        "kind": "temporal",
        "title": "VIERNES DE LA OCTAVA DE PASCUA",
        "page": 36,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "El Señor condujo a su pueblo seguro, mientras el mar cubría a sus enemigos. Aleluya.",
          "collect": "DIOS todopoderoso y eterno, que por el Misterio pascual has restablecido tu alianza con los hombres, concédenos imitar en la vida lo que celebramos en la fe. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "REALIZA, Señor, en nosotros lo que significa el intercambio de esta ofrenda pascual, para que pasemos del apego a las cosas de la tierra, al deseo de los bienes del cielo. Por Jesucristo, nuestro Señor.",
          "communion": "Jesús dijo a sus discípulos: «Vamos, almorzad». Y tomó el pan y se lo dio. Aleluya.",
          "prayer_after": "GUARDA, Señor, con tu amor constante a los que has salvado, para que los redimidos por la pasión de tu Hijo se alegren con su resurrección. Él, que vive y reina por los siglos de los siglos"
        },
        "sectionSources": {
          "entrance": {
            "title": "VIERNES DE LA OCTAVA DE PASCUA",
            "page": 36,
            "citation": "Cf. Sal 77, 53"
          },
          "collect": {
            "title": "VIERNES DE LA OCTAVA DE PASCUA",
            "page": 36
          },
          "prayer_offerings": {
            "title": "VIERNES DE LA OCTAVA DE PASCUA",
            "page": 36
          },
          "communion": {
            "title": "VIERNES DE LA OCTAVA DE PASCUA",
            "page": 36,
            "citation": "Cf. Jn 21, 12-13"
          },
          "prayer_after": {
            "title": "VIERNES DE LA OCTAVA DE PASCUA",
            "page": 36
          }
        }
      },
      "easter-1-6": {
        "key": "easter-1-6",
        "kind": "temporal",
        "title": "SÁBADO DE LA OCTAVA DE PASCUA",
        "page": 37,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "El Señor sacó a su pueblo con alegría, a sus escogidos con gritos de triunfo. Aleluya.",
          "collect": "OH, Dios, que no cesas de aumentar con la abundancia de tu gracia el número de los pueblos que creen en ti, mira con amor a tus elegidos, para que los renacidos en el bautismo se revistan de la inmortalidad dichosa. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "CONCÉDENOS, Señor, alegrarnos siempre por estos misterios pascuales, y que la actualización continua de tu obra redentora sea para nosotros fuente de gozo incesante. Por Jesucristo, nuestro Señor.",
          "communion": "Cuantos habéis sido bautizados en Cristo os habéis revestido de Cristo. Aleluya.",
          "prayer_after": "MIRA, Señor, con bondad, a tu pueblo y, ya has querido renovarlo con estos sacramentos de vida eterna, concédele llegar a la incorruptible resurrección de la carne que habrá de ser glorificada. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "SÁBADO DE LA OCTAVA DE PASCUA",
            "page": 37,
            "citation": "Cf. Sal 104, 43"
          },
          "collect": {
            "title": "SÁBADO DE LA OCTAVA DE PASCUA",
            "page": 37
          },
          "prayer_offerings": {
            "title": "SÁBADO DE LA OCTAVA DE PASCUA",
            "page": 37
          },
          "communion": {
            "title": "SÁBADO DE LA OCTAVA DE PASCUA",
            "page": 37,
            "citation": "Gál 3, 27"
          },
          "prayer_after": {
            "title": "SÁBADO DE LA OCTAVA DE PASCUA",
            "page": 37
          }
        }
      },
      "easter-2-0": {
        "key": "easter-2-0",
        "kind": "temporal",
        "title": "II DOMINGO DE PASCUA",
        "page": 38,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Como niños recién nacidos, ansiad la leche espiritual, no adulterada, para que con ella vayáis progresando en la salvación. Aleluya. O bien: 4 Esd 2, 36-37 Alegraos en vuestra gloria, dando gracias a Dios, que os ha llamado al reino celestial. Aleluya.",
          "collect": "DIOS de misericordia infinita, que reanimas, con el retorno anual de las fiestas de Pascua, la fe del pueblo a ti consagrado, acrecienta en nosotros los dones de tu gracia, para que todos comprendan mejor qué bautismo nos ha purificado, qué Espíritu nos ha hecho renacer y qué sangre nos ha redimido. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "RECIBE, Señor, las ofrendas de tu pueblo [y de los recién bautizados], para que, renovados por la confesión de tu nombre y por el bautismo, consigamos la eterna bienaventuranza. Por Jesucristo, nuestro Señor.",
          "communion": "Trae tu mano y métela en el agujero de los clavos: y no seas incrédulo, sino creyente. Aleluya.",
          "prayer_after": "CONCÉDENOS, Dios todopoderoso, que el sacramento pascual recibido permanezca siempre en nuestros corazones. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "II DOMINGO DE PASCUA",
            "page": 38,
            "citation": "1 Pe 2, 2"
          },
          "collect": {
            "title": "II DOMINGO DE PASCUA",
            "page": 38
          },
          "prayer_offerings": {
            "title": "II DOMINGO DE PASCUA",
            "page": 38
          },
          "communion": {
            "title": "II DOMINGO DE PASCUA",
            "page": 38,
            "citation": "Cf. Jn 20, 27"
          },
          "prayer_after": {
            "title": "II DOMINGO DE PASCUA",
            "page": 39
          }
        }
      },
      "easter-2-1": {
        "key": "easter-2-1",
        "kind": "temporal",
        "title": "Lunes de la II semana de Pascua",
        "page": 40,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Cristo, una vez resucitado de entre los muertos, ya no muere más; la muerte ya no tiene dominio sobre él. Aleluya.",
          "collect": "DIOS todopoderoso, haz que seamos transformados a imagen del Creador del cielo los que, renovados por los sacramentos pascuales, nos hemos librado de la huella del padre terreno. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "RECIBE, Señor, las ofrendas de tu Iglesia exultante, y a quien diste motivo de tanto gozo concédele disfrutar de la alegría eterna. Por Jesucristo, nuestro Señor.",
          "communion": "Jesús se puso en medio de sus discípulos y les dijo: «Paz a vosotros». Aleluya.",
          "prayer_after": "MIRA, Señor, con bondad a tu pueblo, y, ya que has querido renovarlo con estos sacramentos de vida eterna, concédele llegar a la incorruptible resurrección de la carne que habrá de ser glorificada. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Lunes de la II semana de Pascua",
            "page": 40,
            "citation": "Rom 6, 9"
          },
          "collect": {
            "title": "Lunes de la II semana de Pascua",
            "page": 40
          },
          "prayer_offerings": {
            "title": "Lunes de la II semana de Pascua",
            "page": 40
          },
          "communion": {
            "title": "Lunes de la II semana de Pascua",
            "page": 40,
            "citation": "Cf. Jn 20, 19"
          },
          "prayer_after": {
            "title": "Lunes de la II semana de Pascua",
            "page": 40
          }
        }
      },
      "easter-2-2": {
        "key": "easter-2-2",
        "kind": "temporal",
        "title": "Martes de la II semana de Pascua",
        "page": 41,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Alegrémonos y gocemos y démosle gracias, porque reina el Señor, nuestro Dios, dueño de todo. Aleluya.",
          "collect": "HAZNOS capaces, Dios todopoderoso, de anunciar el poder de Cristo resucitado para que poseamos en plenitud los dones visibles que hemos recibido como prenda de los futuros. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "CONCÉDENOS, Señor, alegrarnos siempre por estos misterios pascuales y que la actualización continua de tu obra redentora sea para nosotros fuente de gozo incesante. Por Jesucristo, nuestro Señor.",
          "communion": "Era necesario que el Mesías padeciera y resucitara de entre los muertos, para así entrar en su gloria. Aleluya.",
          "prayer_after": "ESCUCHA, Señor, nuestras oraciones para que el santo intercambio de nuestra redención nos sostenga durante la vida presente y nos dé las alegrías eternas. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Martes de la II semana de Pascua",
            "page": 41,
            "citation": "Ap 19, 7. 6"
          },
          "collect": {
            "title": "Martes de la II semana de Pascua",
            "page": 41
          },
          "prayer_offerings": {
            "title": "Martes de la II semana de Pascua",
            "page": 41
          },
          "communion": {
            "title": "Martes de la II semana de Pascua",
            "page": 41,
            "citation": "Cf. Lc 24, 46. 26"
          },
          "prayer_after": {
            "title": "Martes de la II semana de Pascua",
            "page": 41
          }
        }
      },
      "easter-2-3": {
        "key": "easter-2-3",
        "kind": "temporal",
        "title": "Miércoles de la II semana de Pascua",
        "page": 42,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Te daré gracias entre las naciones, Señor; contaré tu fama a mis hermanos. Aleluya.",
          "collect": "AL celebrar un año más los misterios en los que la humanidad recibió la esperanza de la resurrección recuperando la dignidad original, invocamos, Señor, tu compasión, para que percibamos siempre en el amor lo que hemos celebrado con fe. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "OH, Dios, que nos haces partícipes de tu única y suprema divinidad por el admirable intercambio de este sacrificio, concédenos alcanzar en una vida santa la realidad que hemos conocido en ti. Por Jesucristo, nuestro Señor.",
          "communion": "Dice el Señor: «Yo os he escogido sacándoos del mundo y os he destinado para que vayáis y deis fruto y vuestro fruto permanezca». Aleluya.",
          "prayer_after": "ASISTE, Señor, a tu pueblo y haz que pasemos del antiguo pecado a la vida nueva los que hemos sido alimentados con los sacramentos del cielo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Miércoles de la II semana de Pascua",
            "page": 42,
            "citation": "Cf. Sal 17, 50; 21, 23"
          },
          "collect": {
            "title": "Miércoles de la II semana de Pascua",
            "page": 42
          },
          "prayer_offerings": {
            "title": "Miércoles de la II semana de Pascua",
            "page": 42
          },
          "communion": {
            "title": "Miércoles de la II semana de Pascua",
            "page": 42,
            "citation": "Cf. Jn 15, 16. 19"
          },
          "prayer_after": {
            "title": "Miércoles de la II semana de Pascua",
            "page": 42
          }
        }
      },
      "easter-2-4": {
        "key": "easter-2-4",
        "kind": "temporal",
        "title": "Jueves de la II semana de Pascua",
        "page": 43,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Oh, Dios, cuando salías al frente de tu pueblo, guiándolos y acampando con ellos, la tierra tembló, el cielo destiló. Aleluya.",
          "collect": "OH, Dios, que estableciste el sacrificio pascual para la salvación del mundo, sé propicio a las súplicas de tu pueblo, para que Jesucristo, nuestro Sumo Sacerdote que intercede en favor nuestro, nos reconcilie por aquello que le asemeja a nosotros y nos absuelva en virtud de su igualdad contigo. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SUBA hasta ti, Señor, nuestras súplicas con la ofrenda del sacrificio, para que, purificados por tu bondad, nos preparemos para el sacramento de tu inmenso amor. Por Jesucristo, nuestro Señor.",
          "communion": "Sabed que yo estoy con vosotros todos los días, hasta el final de los tiempos. Aleluya.",
          "prayer_after": "DIOS todopoderoso y eterno, que en la resurrección de Jesucristo nos has renovado para la vida eterna, multiplica en nosotros los frutos del Misterio pascual e infunde en nuestros corazones la fortaleza del alimento de salvación. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Jueves de la II semana de Pascua",
            "page": 43,
            "citation": "Cf. Sal 67, 8-9"
          },
          "collect": {
            "title": "Jueves de la II semana de Pascua",
            "page": 43
          },
          "prayer_offerings": {
            "title": "Jueves de la II semana de Pascua",
            "page": 43
          },
          "communion": {
            "title": "Jueves de la II semana de Pascua",
            "page": 43,
            "citation": "Mt 28, 20"
          },
          "prayer_after": {
            "title": "Jueves de la II semana de Pascua",
            "page": 43
          }
        }
      },
      "easter-2-5": {
        "key": "easter-2-5",
        "kind": "temporal",
        "title": "Viernes de la II semana de Pascua",
        "page": 44,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Señor, con tu sangre has adquirido para Dios hombres de toda tribu, lengua, pueblo y nación; y has hecho de ellos para nuestro Dios un reino de sacerdotes. Aleluya.",
          "collect": "OH, Dios, esperanza y luz de las almas sinceras, te pedimos humildemente que concedas a nuestros corazones realizar una plegaria digna de ti y que siempre te glorifiquemos con la ofrenda de nuestras alabanzas. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACOGE, Señor, con bondad las ofrendas de tu familia, para que, bajo tu protección, no pierda los dones ya recibidos y alcance los eternos. Por Jesucristo, nuestro Señor.",
          "communion": "Cristo nuestro Señor fue entregado por nuestros pecados y resucitó para nuestra justificación. Aleluya.",
          "prayer_after": "GUARDA, Señor, con tu amor constante a los que has salvado, para que los redimidos por la pasión de tu Hijo se alegren con su resurrección. Él, que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "Viernes de la II semana de Pascua",
            "page": 44,
            "citation": "Ap 5, 9-10"
          },
          "collect": {
            "title": "Viernes de la II semana de Pascua",
            "page": 44
          },
          "prayer_offerings": {
            "title": "Viernes de la II semana de Pascua",
            "page": 44
          },
          "communion": {
            "title": "Viernes de la II semana de Pascua",
            "page": 44,
            "citation": "Cf. Rom 4, 25"
          },
          "prayer_after": {
            "title": "Viernes de la II semana de Pascua",
            "page": 44
          }
        }
      },
      "easter-2-6": {
        "key": "easter-2-6",
        "kind": "temporal",
        "title": "Sábado de la II semana de Pascua",
        "page": 45,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Pueblo adquirido por Dios, anunciad las proezas del que os llamó de las tinieblas a su luz maravillosa. Aleluya.",
          "collect": "DESTRUYE, Señor, el documento escrito por la ley del pecado, que anulaste para nosotros en el Misterio pascual por la resurrección de Jesucristo, tu Hijo. Él, que vive y reina contigo.",
          "prayer_offerings": "TE pedimos, Señor, que, en tu bondad, santifiques estos dones, aceptes la la ofrenda de este sacrificio espiritual y nos transformes en oblación perenne. Por Jesucristo, nuestro Señor.",
          "communion": "Padre, este es mi deseo: que los que me has dado estén conmigo donde yo estoy y contemplen mi gloria, la que me diste. Aleluya.",
          "prayer_after": "SEÑOR, después de recibir el don sagrado del sacramento, te pedimos humildemente que nos haga crecer en el amor lo que tu Hijo nos mandó realizar en memoria suya. Él, que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "Sábado de la II semana de Pascua",
            "page": 45,
            "citation": "Cf. 1 Pe 2, 9"
          },
          "collect": {
            "title": "Sábado de la II semana de Pascua",
            "page": 45
          },
          "prayer_offerings": {
            "title": "Sábado de la II semana de Pascua",
            "page": 45
          },
          "communion": {
            "title": "Sábado de la II semana de Pascua",
            "page": 45,
            "citation": "Jn 17, 24"
          },
          "prayer_after": {
            "title": "Sábado de la II semana de Pascua",
            "page": 45
          }
        }
      },
      "easter-3-0": {
        "key": "easter-3-0",
        "kind": "temporal",
        "title": "III DOMINGO DE PASCUA",
        "page": 46,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Aclamad al Señor, tierra entera; tocad en honor de su nombre, cantad himnos a su gloria. Aleluya.",
          "collect": "QUE tu pueblo, Señor, exulte siempre al verse renovado y rejuvenecido en el espíritu, para que todo el que se alegra ahora de haber recobrado la gloria de la adopción filial, ansíe el día de la resurrección con la esperanza cierta de la felicidad eterna. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "RECIBE, Señor, las ofrendas de tu Iglesia exultante, y a quien diste motivo de tanto gozo concédele disfrutar de la alegría eterna. Por Jesucristo, nuestro Señor.",
          "communion": "Año A: Cf. Lc 24, 35 Los discípulos reconocieron al Señor Jesús al partir el pan. Aleluya. Año B: Cf. Lc 24, 46-47 Convenía que el Mesías padeciera, resucitara de entre los muertos al tercer día y, en su nombre, se proclamara la conversión para el perdón de los pecados a todos los pueblos. Aleluya. Año C: Cf. Jn 21, 12-13 Jesús dijo a sus discípulos: «Vamos, almorzad». Y tomó el pan y se lo dio. Aleluya.",
          "prayer_after": "MIRA, Señor, con bondad a tu pueblo y, ya que has querido renovarlo con estos sacramentos de vida eterna, concédele llegar a la incorruptible resurrección de la carne que habrá de ser glorifica da. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "III DOMINGO DE PASCUA",
            "page": 46,
            "citation": "Sal 65, 1-2"
          },
          "collect": {
            "title": "III DOMINGO DE PASCUA",
            "page": 46
          },
          "prayer_offerings": {
            "title": "III DOMINGO DE PASCUA",
            "page": 46
          },
          "communion": {
            "title": "III DOMINGO DE PASCUA",
            "page": 46
          },
          "prayer_after": {
            "title": "III DOMINGO DE PASCUA",
            "page": 47
          }
        }
      },
      "easter-3-1": {
        "key": "easter-3-1",
        "kind": "temporal",
        "title": "Lunes de la III semana de Pascua",
        "page": 48,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Ha resucitado el Buen Pastor, que dio la vida por sus ovejas y se dignó morir por su rebaño. Aleluya.",
          "collect": "TE pedimos, Dios todopoderoso, que, despojándonos del hombre viejo con sus inclinaciones, vivamos en la obediencia de aquel a quien nos has incorporado por los sacramentos pascuales. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SUBEN hasta ti, Señor, nuestras súplicas con la ofrenda del sacrificio, para que, purificados por tu bondad, nos preparemos para el sacramento de tu inmenso amor. Por Jesucristo, nuestro Señor.",
          "communion": "La paz os dejo, mi paz os doy; no os la doy yo como la da el mundo, dice el Señor. Aleluya.",
          "prayer_after": "DIOS todopoderoso y eterno, que en la resurrección de Jesucristo nos has renovado para la vida eterna, multiplica en nosotros los frutos del Misterio pascual e infunde en nuestros corazones la fortaleza del alimento de salvación. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Lunes de la III semana de Pascua",
            "page": 48
          },
          "collect": {
            "title": "Lunes de la III semana de Pascua",
            "page": 48
          },
          "prayer_offerings": {
            "title": "Lunes de la III semana de Pascua",
            "page": 48
          },
          "communion": {
            "title": "Lunes de la III semana de Pascua",
            "page": 48,
            "citation": "Cf. Jn 14, 27"
          },
          "prayer_after": {
            "title": "Lunes de la III semana de Pascua",
            "page": 48
          }
        }
      },
      "easter-3-2": {
        "key": "easter-3-2",
        "kind": "temporal",
        "title": "Martes de la III semana de Pascua",
        "page": 49,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Alabad a nuestro Dios todos los que lo teméis, pequeños y grandes, porque ha establecido la salvación y el poder y la potestad de su Cristo. Aleluya.",
          "collect": "OH, Dios, que abres la puerta de tu reino a los que han renacido del agua y del Espíritu, acrecienta en tus siervos la gracia que les has dado, para que, limpios de sus pecados, no se vean, por tu bondad, privados de tus promesas. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "RECIBE, Señor, las ofrendas de tu Iglesia exultante, y a quien diste motivo de tanto gozo concédele disfrutar de la alegría eterna. Por Jesucristo, nuestro Señor.",
          "communion": "Si hemos muerto con Cristo, creemos que también viviremos con él. Aleluya.",
          "prayer_after": "MIRA, Señor, con bondad a tu pueblo, y, ya que has querido renovarlo con estos sacramentos de vida eterna, concédele llegar a la incorruptible resurrección de la carne que habrá de ser glorificada. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Martes de la III semana de Pascua",
            "page": 49,
            "citation": "Cf. Ap 19, 5; 12, 10"
          },
          "collect": {
            "title": "Martes de la III semana de Pascua",
            "page": 49
          },
          "prayer_offerings": {
            "title": "Martes de la III semana de Pascua",
            "page": 49
          },
          "communion": {
            "title": "Martes de la III semana de Pascua",
            "page": 49,
            "citation": "Rom 6, 8"
          },
          "prayer_after": {
            "title": "Martes de la III semana de Pascua",
            "page": 49
          }
        }
      },
      "easter-3-3": {
        "key": "easter-3-3",
        "kind": "temporal",
        "title": "Miércoles de la III semana de Pascua",
        "page": 50,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Llena estaba mi boca de tu alabanza para poder cantar. Te aclamarán mis labios, Señor. Aleluya.",
          "collect": "ATIENDE, Señor, a tu familia y ayúdala como conviene, y concede participar en la resurrección de tu Unigéni to a quienes has dado la gracia de la fe. Él, que vive y reina contigo.",
          "prayer_offerings": "CONCÉDENOS, Señor, alegrarnos siempre por estos misterios pascuales, y que la actualización continua de tu obra redentora sea para nosotros fuente de gozo incesante. Por Jesucristo, nuestro Señor.",
          "communion": "Ha resucitado el Señor e ilumina a los que hemos sido redimidos con su sangre. Aleluya.",
          "prayer_after": "ESCUCHA, Señor, nuestras oraciones para que el santo intercambio de nuestra redención nos sostenga durante la vida presente y nos dé las alegrías eternas. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Miércoles de la III semana de Pascua",
            "page": 50,
            "citation": "Cf. Sal 70, 8. 23"
          },
          "collect": {
            "title": "Miércoles de la III semana de Pascua",
            "page": 50
          },
          "prayer_offerings": {
            "title": "Miércoles de la III semana de Pascua",
            "page": 50
          },
          "communion": {
            "title": "Miércoles de la III semana de Pascua",
            "page": 50
          },
          "prayer_after": {
            "title": "Miércoles de la III semana de Pascua",
            "page": 50
          }
        }
      },
      "easter-3-4": {
        "key": "easter-3-4",
        "kind": "temporal",
        "title": "Jueves de la III semana de Pascua",
        "page": 51,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Cantemos al Señor; gloriosa es su victoria. Mi fuerza y mi alabanza es el Señor, él fue mi salvación. Aleluya.",
          "collect": "DIOS todopoderoso y eterno, concédenos experimentar más de cerca tu amor, que, por tu bondad, hemos conocido con mayor profundidad en estos días de Pascua, y afianza en el testimonio de la verdad a quienes has librado de las tinieblas del error. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "OH, Dios, que nos haces partícipes de tu única y suprema divinidad por el admirable intercambio de este sacrificio, concédenos alcanzar en una vida santa la realidad que hemos conocido en ti. Por Jesucristo, nuestro Señor.",
          "communion": "Cristo murió por todos, para que los que viven ya no vivan para sí, sino para el que murió y resucitó por ellos. Aleluya.",
          "prayer_after": "ASISTE, Señor, a tu pueblo y haz que pasemos del antiguo pecado a la vida nueva los que hemos sido alimentados con los sacramentos del cielo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Jueves de la III semana de Pascua",
            "page": 51,
            "citation": "Cf. Ex 15, 1-2"
          },
          "collect": {
            "title": "Jueves de la III semana de Pascua",
            "page": 51
          },
          "prayer_offerings": {
            "title": "Jueves de la III semana de Pascua",
            "page": 51
          },
          "communion": {
            "title": "Jueves de la III semana de Pascua",
            "page": 51,
            "citation": "2 Cor 5, 15"
          },
          "prayer_after": {
            "title": "Jueves de la III semana de Pascua",
            "page": 51
          }
        }
      },
      "easter-3-5": {
        "key": "easter-3-5",
        "kind": "temporal",
        "title": "Viernes de la III semana de Pascua",
        "page": 52,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Digno es el Cordero degollado de recibir el poder, la riqueza, la sabiduría, la fuerza y el honor. Aleluya.",
          "collect": "DIOS todopoderoso, concédenos, a los que hemos conocido ya la gracia de la resurrección del Señor, resucitar a la vida nueva por el amor del Espíritu. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "TE pedimos, Señor, que, en tu bondad, santifiques estos dones, aceptes la ofrenda de este sacrificio espiritual y nos transformes en oblación perenne. Por Jesucristo, nuestro Señor.",
          "communion": "El Crucificado resucitó de entre los muertos y nos redimió. Aleluya.",
          "prayer_after": "SEÑOR, después de recibir el don sagrado del sacramento, te pedimos humildemente que nos haga crecer en el amor lo que tu Hijo nos mandó realizar en memoria suya. Él, que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "Viernes de la III semana de Pascua",
            "page": 52,
            "citation": "Ap 5, 12"
          },
          "collect": {
            "title": "Viernes de la III semana de Pascua",
            "page": 52
          },
          "prayer_offerings": {
            "title": "Viernes de la III semana de Pascua",
            "page": 52
          },
          "communion": {
            "title": "Viernes de la III semana de Pascua",
            "page": 52
          },
          "prayer_after": {
            "title": "Viernes de la III semana de Pascua",
            "page": 52
          }
        }
      },
      "easter-3-6": {
        "key": "easter-3-6",
        "kind": "temporal",
        "title": "Sábado de la III semana de Pascua",
        "page": 53,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Por el bautismo, fuisteis sepultados con Cristo, y habéis resucitados con él por la fe en la fuerza de Dios, que lo resucitó de entre los muertos. Aleluya.",
          "collect": "OH, Dios, que has renovado en la fuente bautismal a los que creen en ti, guarda a los renacidos en Cristo, para que, vencida toda clase de engaños, conserven fielmente tu gracia santificadora. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACOGE, Señor, en tu bondad las ofrendas de tu familia, para que, bajo tu protección, no pierda los dones ya recibidos y alcance los eternos. Por Jesucristo, nuestro Señor.",
          "communion": "Padre, por ellos ruego, para que todos sean uno en nosotros, para que el mundo crea que tú me has enviado, dice el Señor. Aleluy a.",
          "prayer_after": "GUARDA, Señor, con tu amor constante a los que has salvado, para que los redimidos por la pasión de tu Hijo se alegren con su resurrección. Él, que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "Sábado de la III semana de Pascua",
            "page": 53,
            "citation": "Col 2, 12"
          },
          "collect": {
            "title": "Sábado de la III semana de Pascua",
            "page": 53
          },
          "prayer_offerings": {
            "title": "Sábado de la III semana de Pascua",
            "page": 53
          },
          "communion": {
            "title": "Sábado de la III semana de Pascua",
            "page": 53,
            "citation": "Cf. Jn 17, 20-21"
          },
          "prayer_after": {
            "title": "Sábado de la III semana de Pascua",
            "page": 53
          }
        }
      },
      "easter-4-0": {
        "key": "easter-4-0",
        "kind": "temporal",
        "title": "IV DOMINGO DE PASCUA",
        "page": 54,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "La misericordia del Señor llena la tierra, la palabra del Señor hizo el cielo. Aleluya.",
          "collect": "DIOS todopoderoso y eterno, condúcenos a la asamblea gozosa del cielo, para que la debilidad del rebaño llegue hasta donde le ha precedido la fortaleza del Pastor. Él, que vive y reina contigo.",
          "prayer_offerings": "CONCÉDENOS, Señor, alegrarnos siempre por estos misterios pascuales y que la actualización continua de tu obra redentora sea para nosotros fuente de gozo incesante. Por Jesucristo, nuestro Señor.",
          "communion": "Ha resucitado el Buen Pastor, que dio la vida por sus ovejas y se dignó morir por su rebaño. Aleluya.",
          "prayer_after": "PASTOR bueno, vela compasivo sobre tu rebaño y conduce a los pastos eternos a las ovejas que has redimido con la sangre preciosa de tu Hijo. Él, que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "IV DOMINGO DE PASCUA",
            "page": 54,
            "citation": "Cf. Sal 32, 5-6"
          },
          "collect": {
            "title": "IV DOMINGO DE PASCUA",
            "page": 54
          },
          "prayer_offerings": {
            "title": "IV DOMINGO DE PASCUA",
            "page": 54
          },
          "communion": {
            "title": "IV DOMINGO DE PASCUA",
            "page": 54
          },
          "prayer_after": {
            "title": "IV DOMINGO DE PASCUA",
            "page": 54
          }
        }
      },
      "easter-4-1": {
        "key": "easter-4-1",
        "kind": "temporal",
        "title": "Lunes de la IV semana de Pascua",
        "page": 55,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Cristo una vez resucitado de entre los muertos, ya no muere más; la muerte ya no tiene dominio sobre él. Aleluya.",
          "collect": "OH, Dios, luz perfecta de los santos, que nos has concedido celebrar en la tierra los sacramentos pascuales, haznos gozar eternamente de la plenitud de tu gracia. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "RECIBE, Señor, las ofrendas de tu Iglesia exultante, y a quien diste motivo de tanto gozo concédele disfrutar de la alegría eterna. Por Jesucristo, nuestro Señor.",
          "communion": "Jesús se puso en medio de sus discípulos y les dijo: «Paz a vosotros». Aleluya.",
          "prayer_after": "MIRA, Señor, con bondad a tu pueblo y, ya que has querido renovarlo con estos sacramentos de vida eterna, concédele llegar a la incorruptible resurrección de la carne que habrá de ser glorificada. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Lunes de la IV semana de Pascua",
            "page": 55,
            "citation": "Rom 6, 9"
          },
          "collect": {
            "title": "Lunes de la IV semana de Pascua",
            "page": 55
          },
          "prayer_offerings": {
            "title": "Lunes de la IV semana de Pascua",
            "page": 55
          },
          "communion": {
            "title": "Lunes de la IV semana de Pascua",
            "page": 55,
            "citation": "Cf. Jn 20, 19"
          },
          "prayer_after": {
            "title": "Lunes de la IV semana de Pascua",
            "page": 55
          }
        }
      },
      "easter-4-2": {
        "key": "easter-4-2",
        "kind": "temporal",
        "title": "Martes de la IV semana de Pascua",
        "page": 56,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Alegrémonos y gocemos y démosle gracias, porque reina el Señor, nuestro Dios, dueño de todo. Aleluya.",
          "collect": "AL celebrar el misterio de la resurrección del Señor, te pedimos, Dios todopoderoso, que merezcamos recibir la alegría de nuestra redención. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "CONCÉDENOS, Señor, alegrarnos siempre por estos misterios pascuales, y que la actualización continua de tu obra redentora sea para nosotros fuente de gozo incesante. Por Jesucristo, nuestro Señor.",
          "communion": "Era necesario que el Mesías padeciera y resucitara de entre los muertos, para así entrar en su gloria. Aleluya.",
          "prayer_after": "ESCUCHA, Señor, nuestras oraciones para que el santo intercambio de nuestra redención nos sostenga durante la vida presente y nos dé las alegrías eternas. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Martes de la IV semana de Pascua",
            "page": 56,
            "citation": "Ap 19, 7. 6"
          },
          "collect": {
            "title": "Martes de la IV semana de Pascua",
            "page": 56
          },
          "prayer_offerings": {
            "title": "Martes de la IV semana de Pascua",
            "page": 56
          },
          "communion": {
            "title": "Martes de la IV semana de Pascua",
            "page": 56,
            "citation": "Cf. Lc 24, 46. 26"
          },
          "prayer_after": {
            "title": "Martes de la IV semana de Pascua",
            "page": 56
          }
        }
      },
      "easter-4-3": {
        "key": "easter-4-3",
        "kind": "temporal",
        "title": "Miércoles de la IV semana de Pascua",
        "page": 57,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Te daré gracias entre las naciones, Señor; contaré tu fama a mis hermanos. Aleluya.",
          "collect": "OH, Dios, vida de los fieles, gloria de los humildes y felicidad de los justos, escucha con bondad nuestras súplicas, para que se vean siempre colmados de tus dones los que tienen sed de las promesas de tu generosidad. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "OH, Dios, que nos haces partícipes de tu única y suprema divinidad por el admirable intercambio de este sacrificio, concédenos alcanzar en una vida santa la realidad que hemos conocido en ti. Por Jesucristo, nuestro Señor.",
          "communion": "Dice el Señor: «Yo os he escogido sacándoos del mundo y os he destinado para que vayáis y deis fruto y vuestro fruto permanezca». Aleluya.",
          "prayer_after": "ASISTE, Señor, a tu pueblo y haz que pasemos del antiguo pecado a la vida nueva los que hemos sido alimentados con los sacramentos del cielo Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Miércoles de la IV semana de Pascua",
            "page": 57,
            "citation": "Cf. Sal 17, 50; 21, 23"
          },
          "collect": {
            "title": "Miércoles de la IV semana de Pascua",
            "page": 57
          },
          "prayer_offerings": {
            "title": "Miércoles de la IV semana de Pascua",
            "page": 57
          },
          "communion": {
            "title": "Miércoles de la IV semana de Pascua",
            "page": 57,
            "citation": "Cf. Jn 15, 16. 19"
          },
          "prayer_after": {
            "title": "Miércoles de la IV semana de Pascua",
            "page": 57
          }
        }
      },
      "easter-4-4": {
        "key": "easter-4-4",
        "kind": "temporal",
        "title": "Jueves de la IV semana de Pascua",
        "page": 58,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Oh, Dios, cuando salías al frente de tu pueblo, guiándolos y acampando con ellos, la tierra tembló, el cielo destiló. Aleluya.",
          "collect": "OH, Dios, que has restaurado la naturaleza humana por encima de su dignidad original, dirige tu mirada hacia el sacramento de tu amor inefable y conserva los dones de tu continua gracia y protección en aquellos que te has dignado renovar por el sacramento de la regeneración. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SUBAN hasta ti, Señor, nuestras súplicas con la ofrenda del sacrificio, para que, purificados por tu bondad, nos preparemos para el sacramento de tu inmenso amor. Por Jesucristo, nuestro Señor.",
          "communion": "Sabed que yo estoy con vosotros todos los días, hasta el fin de los tiempos. Aleluya.",
          "prayer_after": "DIOS todopoderoso y eterno, que en la resurrección de Jesucristo nos has renovado para la vida eterna, multiplica en nosotros los frutos del Misterio pascual e infunde en nuestros corazones la fortaleza del alimento de salvación. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Jueves de la IV semana de Pascua",
            "page": 58,
            "citation": "Cf. Sal 67, 8-9"
          },
          "collect": {
            "title": "Jueves de la IV semana de Pascua",
            "page": 58
          },
          "prayer_offerings": {
            "title": "Jueves de la IV semana de Pascua",
            "page": 58
          },
          "communion": {
            "title": "Jueves de la IV semana de Pascua",
            "page": 58,
            "citation": "Mt 28, 20"
          },
          "prayer_after": {
            "title": "Jueves de la IV semana de Pascua",
            "page": 58
          }
        }
      },
      "easter-4-5": {
        "key": "easter-4-5",
        "kind": "temporal",
        "title": "Viernes de la IV semana de Pascua",
        "page": 59,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Señor, con tu sangre has adquirido para Dios hombres de toda tribu, lengua, pueblo y nación; y has hecho de ellos para nuestro Dios un reino de sacerdotes. Aleluya.",
          "collect": "OH, Dios, autor de nuestra libertad y salvación, escucha las súplicas de quienes te invocamos y, pues nos has salvado con la Sangre derramada de tu Hijo, haz que vivamos siempre por ti y en ti gocemos al encontrar la felicidad eterna. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACOGE, Señor, con bondad las ofrendas de tu familia, para que, bajo tu protección, no pierda los dones ya recibidos y alcance los eternos. Por Jesucristo, nuestro Señor.",
          "communion": "Cristo nuestro Señor fue entregado por nuestros pecados, y resucitó para nuestra justificación. Aleluya.",
          "prayer_after": "GUARDA, Señor, con tu amor constante a los que has salvado, para que los redimidos por la pasión de tu Hijo se alegren con su resurrección. Él, que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "Viernes de la IV semana de Pascua",
            "page": 59,
            "citation": "Ap 5, 9-10"
          },
          "collect": {
            "title": "Viernes de la IV semana de Pascua",
            "page": 59
          },
          "prayer_offerings": {
            "title": "Viernes de la IV semana de Pascua",
            "page": 59
          },
          "communion": {
            "title": "Viernes de la IV semana de Pascua",
            "page": 59,
            "citation": "Rom 4, 2"
          },
          "prayer_after": {
            "title": "Viernes de la IV semana de Pascua",
            "page": 59
          }
        }
      },
      "easter-4-6": {
        "key": "easter-4-6",
        "kind": "temporal",
        "title": "Sábado de la IV semana de Pascua",
        "page": 60,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Pueblo adquirido por Dios, anunciad las proezas del que os llamó de las tinieblas a su luz maravillosa. Aleluya.",
          "collect": "OH, Dios, que en la solemnidad de la Pascua has dado al mundo los auxilios del cielo, continúa dispensando el perdón a tu Iglesia, para que lo realizado en el tiempo nos sirva para la vida eterna. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "TE pedimos, Señor, que, en tu bondad, santifiques estos dones, aceptes la ofrenda de este sacrificio espiritual y nos transformes en oblación perenne. Por Jesucristo, nuestro Señor.",
          "communion": "Padre, este es mi deseo: que los que me has dado estén conmigo donde yo estoy y contemplen mi gloria, la que me diste. Aleluya.",
          "prayer_after": "SEÑOR, después de recibir el don sagrado del sacramento, te pedimos humildemente que nos haga crecer en el amor lo que tu Hijo nos mandó realizar en memoria suya. Él , que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "Sábado de la IV semana de Pascua",
            "page": 60,
            "citation": "Cf. 1 Pe 2, 9"
          },
          "collect": {
            "title": "Sábado de la IV semana de Pascua",
            "page": 60
          },
          "prayer_offerings": {
            "title": "Sábado de la IV semana de Pascua",
            "page": 60
          },
          "communion": {
            "title": "Sábado de la IV semana de Pascua",
            "page": 60,
            "citation": "Jn 17, 24"
          },
          "prayer_after": {
            "title": "Sábado de la IV semana de Pascua",
            "page": 60
          }
        }
      },
      "easter-5-0": {
        "key": "easter-5-0",
        "kind": "temporal",
        "title": "V DOMINGO DE PASCUA",
        "page": 61,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Cantad al Señor un cántico nuevo porque ha hecho maravillas; reveló a las naciones su salvación. Aleluya.",
          "collect": "DIOS todopoderoso y eterno, lleva a su pleno cumplimiento en nosotros el Misterio pascual, para que, quienes, por tu bondad, han sido renovados en el santo bautismo, den frutos abundantes con tu ayuda y protección y lleguen a los gozos de la vida eterna. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "OH, Dios, que nos haces partícipes de tu única y suprema divinidad por el admirable intercambio de este sacrificio, concédenos alcanzar en una vida santa la realidad que hemos conocido en ti. Por Jesucristo, nuestro Señor.",
          "communion": "Yo soy la verdadera vid, y vosotros los sarmientos, dice el Señor; el que permanece en mí y yo en él, ese da fruto abundante. Aleluya.",
          "prayer_after": "ASISTE, Señor, a tu pueblo y haz que pasemos del antiguo pecado a la vida nueva los que hemos sido alimentados con los sacramentos del cielo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "V DOMINGO DE PASCUA",
            "page": 61,
            "citation": "Cf. Sal 97, 1-2"
          },
          "collect": {
            "title": "V DOMINGO DE PASCUA",
            "page": 61
          },
          "prayer_offerings": {
            "title": "V DOMINGO DE PASCUA",
            "page": 61
          },
          "communion": {
            "title": "V DOMINGO DE PASCUA",
            "page": 61,
            "citation": "Cf. Jn 15, 1. 5"
          },
          "prayer_after": {
            "title": "V DOMINGO DE PASCUA",
            "page": 61
          }
        }
      },
      "easter-5-1": {
        "key": "easter-5-1",
        "kind": "temporal",
        "title": "Lunes de la V semana de Pascua",
        "page": 62,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Ha resucitado el Buen Pastor, que dio la vida por sus ovejas y se dignó morir por su rebaño. Aleluya.",
          "collect": "TE pedimos, Señor, que protejas siempre a tu familia con tu mano poderosa, para que, libre de toda maldad, en virtud de la resurrección de tu Hijo unigénito, consiga los dones del cielo. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SUBAN hasta ti, Señor, nuestras súplicas con la ofrenda del sacrificio, para que, purificados por tu bondad, nos preparemos para el sacramento de tu inmenso amor. Por Jesucristo, nuestro Señor.",
          "communion": "La paz os dejo, mi paz os doy; no os la doy como la da el mundo, dice el Señor. Aleluya.",
          "prayer_after": "DIOS todopoderoso y eterno, que en la resurrección de Jesucristo nos has renovado para la vida eterna, multiplica en nosotros los frutos del Misterio pascual e infunde en nuestros corazones la fortaleza del alimento de salvación. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Lunes de la V semana de Pascua",
            "page": 62
          },
          "collect": {
            "title": "Lunes de la V semana de Pascua",
            "page": 62
          },
          "prayer_offerings": {
            "title": "Lunes de la V semana de Pascua",
            "page": 62
          },
          "communion": {
            "title": "Lunes de la V semana de Pascua",
            "page": 62,
            "citation": "Cf. Jn 14, 27"
          },
          "prayer_after": {
            "title": "Lunes de la V semana de Pascua",
            "page": 62
          }
        }
      },
      "easter-5-2": {
        "key": "easter-5-2",
        "kind": "temporal",
        "title": "Martes de la V semana de Pascua",
        "page": 63,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Alabad a nuestro Dios todos los que lo teméis, pequeños y grandes, porque ha establecido la salvación y el poder y la potestad de su Cristo. Aleluya.",
          "collect": "OH, Dios, que en la resurrección de Cristo nos has renovado para la vida eterna, concede a tu pueblo la firmeza de la fe y de la esperanza, para que nunca dudemos del cumplimiento de las promesas que hemos conocido siendo tú el autor. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "RECIBE, Señor, las ofrendas de tu Iglesia exultante, y a quien diste motivo de tanto gozo concédele disfrutar de la alegría eterna. Por Jesucristo, nuestro Señor.",
          "communion": "Si hemos muerto con Cristo, creemos que también viviremos con él. Aleluya.",
          "prayer_after": "MIRA, Señor, con bondad a tu pueblo y, ya que has querido renovarlo con estos sacramentos de vida eterna, concédele llegar a la incorruptible resurrección de la carne que habrá de ser glorificada. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Martes de la V semana de Pascua",
            "page": 63,
            "citation": "Cf. Ap 19, 5; 12, 10"
          },
          "collect": {
            "title": "Martes de la V semana de Pascua",
            "page": 63
          },
          "prayer_offerings": {
            "title": "Martes de la V semana de Pascua",
            "page": 63
          },
          "communion": {
            "title": "Martes de la V semana de Pascua",
            "page": 63,
            "citation": "Rom 6, 8"
          },
          "prayer_after": {
            "title": "Martes de la V semana de Pascua",
            "page": 63
          }
        }
      },
      "easter-5-3": {
        "key": "easter-5-3",
        "kind": "temporal",
        "title": "Miércoles de la V semana de Pascua",
        "page": 64,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Llena estaba mi boca de tu alabanza para poder cantar. Te aclamarán mis labios, Señor. Aleluya.",
          "collect": "OH, Dios, que amas la inocencia y la devuelves a quien la ha perdido, atrae hacia ti los corazones de tus siervos, para que nunca se aparten de la luz de tu verdad los que han sido liberados de las tinieblas del error. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "CONCÉDENOS, Señor, alegrarnos siempre por estos misterios pascuales, y que la actualización continua de tu obra redentora sea para nosotros fuente de gozo incesante. Por Jesucristo, nuestro Señor.",
          "communion": "Ha resucitado el Señor e ilumina a los que hemos sido redimidos con su sangre. Aleluya.",
          "prayer_after": "ESCUCHA, Señor, nuestras oraciones para que el santo intercambio de nuestra redención nos sostenga durante la vida presente y nos dé las alegrías eternas. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Miércoles de la V semana de Pascua",
            "page": 64,
            "citation": "Cf. Sal 70, 8. 23"
          },
          "collect": {
            "title": "Miércoles de la V semana de Pascua",
            "page": 64
          },
          "prayer_offerings": {
            "title": "Miércoles de la V semana de Pascua",
            "page": 64
          },
          "communion": {
            "title": "Miércoles de la V semana de Pascua",
            "page": 64
          },
          "prayer_after": {
            "title": "Miércoles de la V semana de Pascua",
            "page": 64
          }
        }
      },
      "easter-5-4": {
        "key": "easter-5-4",
        "kind": "temporal",
        "title": "Jueves de la V semana de Pascua",
        "page": 65,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Cantemos al Señor; gloriosa es su victoria. Mi fuerza y mi alabanza es el Señor, él fue mi salvación. Aleluya.",
          "collect": "OH, Dios, que, por tu gracia, nos has hecho pasar de pecadores a justos y de infelices a dichosos, hazte presente con tus obras y dones, para que no nos falte la fuerza de la perseverancia a quienes hemos sido justificados por la fe. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "OH, Dios, que nos haces partícipes de tu única y suprema divinidad por el admirable intercambio de este sacrificio, concédenos alcanzar en una vida santa la realidad que hemos conocido en ti. Por Jesucristo, nuestro Señor.",
          "communion": "Cristo murió por todos, para que los que viven ya no vivan para sí, sino para el que murió y resucitó por ellos. Aleluya.",
          "prayer_after": "ASISTE, Señor, a tu pueblo y haz que pasemos del antiguo pecado a la vida nueva los que hemos sido alimentados con los sacramentos del cielo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Jueves de la V semana de Pascua",
            "page": 65,
            "citation": "Cf. Ex 15, 1-2"
          },
          "collect": {
            "title": "Jueves de la V semana de Pascua",
            "page": 65
          },
          "prayer_offerings": {
            "title": "Jueves de la V semana de Pascua",
            "page": 65
          },
          "communion": {
            "title": "Jueves de la V semana de Pascua",
            "page": 65,
            "citation": "2 Cor 5, 15"
          },
          "prayer_after": {
            "title": "Jueves de la V semana de Pascua",
            "page": 65
          }
        }
      },
      "easter-5-5": {
        "key": "easter-5-5",
        "kind": "temporal",
        "title": "Viernes de la V semana de Pascua",
        "page": 66,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Digno es el Cordero degollado de recibir el poder, la riqueza, la sabiduría, la fuerza y el honor. Aleluya.",
          "collect": "DANOS, Señor, una plena vivencia de los misterios pascuales, para que, celebrándolos con alegría, nos protejan continuamente y nos salven. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "TE pedimos, Señor, que, en tu bondad, santifiques estos dones, aceptes la ofrenda de este sacrificio espiritual y nos transformes en oblación perenne. Por Jesucristo, nuestro Señor.",
          "communion": "El Crucificado resucitó de entre los muertos y nos redimió. Aleluya.",
          "prayer_after": "SEÑOR, después de recibir el don sagrado del sacramento, te pedimos humildemente que nos haga crecer en el amor lo que tu Hijo nos mandó realizar en memoria suya. Él, que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "Viernes de la V semana de Pascua",
            "page": 66,
            "citation": "Ap 5, 12"
          },
          "collect": {
            "title": "Viernes de la V semana de Pascua",
            "page": 66
          },
          "prayer_offerings": {
            "title": "Viernes de la V semana de Pascua",
            "page": 66
          },
          "communion": {
            "title": "Viernes de la V semana de Pascua",
            "page": 66
          },
          "prayer_after": {
            "title": "Viernes de la V semana de Pascua",
            "page": 66
          }
        }
      },
      "easter-5-6": {
        "key": "easter-5-6",
        "kind": "temporal",
        "title": "Sábado de la V semana de Pascua",
        "page": 67,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Por el bautismo, fuisteis sepultados con Cristo, y habéis resucitados con él por la fe en la fuerza de Dios, que lo resucitó de entre los muertos. Aleluya.",
          "collect": "DIOS todopoderoso y eterno, que, por la regeneración bautismal, te has dignado comunicarnos la vida del cielo, ayuda a llegar, conducidos por ti, a la plenitud de la gloria a quienes has santificado y hecho capaces de la inmortalidad. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACOGE, Señor, en tu bondad las ofrendas de tu familia, para que, bajo tu protección, no pierda los dones ya recibidos y alcance los eternos. Por Jesucristo, nuestro Señor.",
          "communion": "Padre, por ellos ruego, para que todos sean uno en nosotros, para que el mundo crea que tú me has enviado, dice el Señor. Aleluya.",
          "prayer_after": "GUARDA, Señor, con tu amor constante a los que has salvado, para que los redimidos por la pasión de tu Hijo se alegren con su resurrección. Él, que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "Sábado de la V semana de Pascua",
            "page": 67,
            "citation": "Col 2, 12"
          },
          "collect": {
            "title": "Sábado de la V semana de Pascua",
            "page": 67
          },
          "prayer_offerings": {
            "title": "Sábado de la V semana de Pascua",
            "page": 67
          },
          "communion": {
            "title": "Sábado de la V semana de Pascua",
            "page": 67,
            "citation": "Cf. Jn 17, 20-21"
          },
          "prayer_after": {
            "title": "Sábado de la V semana de Pascua",
            "page": 67
          }
        }
      },
      "easter-6-0": {
        "key": "easter-6-0",
        "kind": "temporal",
        "title": "VI DOMINGO DE PASCUA",
        "page": 68,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Anunciadio con gritos de júbilo, publicadlo y proclamadlo hasta el confín de la tierra. Decid: «El Señor ha rescatado a su pueblo». Aleluya.",
          "collect": "DIOS todopoderoso, concédenos continuar celebrando con fervor sincero estos días de alegría en honor del Señor resucitado, para que manifestemos siempre en las obras lo que repasamos en el recuerdo. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SUBAN hasta ti, Señor, nuestras súplicas con la ofrenda del sacrificio, para que, purificados por tu bondad, nos preparemos para el sacramento de tu inmenso amor. Por Jesucristo, nuestro Señor.",
          "communion": "Si me amáis, guardaréis mis mandamientos, dice el Señor. Y yo le pediré al Padre que os dé otro Paráclito, que esté siempre con vosotros. Aleluya.",
          "prayer_after": "DIOS todopoderoso y eterno, que en la resurrección de Jesucristo nos has renovado para la vida eterna, multiplica en nosotros los frutos del Misterio pascual e infunde en nuestros corazones la fortaleza del alimento de salvación. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "VI DOMINGO DE PASCUA",
            "page": 68,
            "citation": "Cf. Is 48, 20"
          },
          "collect": {
            "title": "VI DOMINGO DE PASCUA",
            "page": 68
          },
          "prayer_offerings": {
            "title": "VI DOMINGO DE PASCUA",
            "page": 68
          },
          "communion": {
            "title": "VI DOMINGO DE PASCUA",
            "page": 68,
            "citation": "Cf. Jn 14, 15-16"
          },
          "prayer_after": {
            "title": "VI DOMINGO DE PASCUA",
            "page": 68
          }
        }
      },
      "easter-6-1": {
        "key": "easter-6-1",
        "kind": "temporal",
        "title": "Lunes de la VI semana de Pascua",
        "page": 69,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Cristo una vez resucitado de entre los muertos, ya no muere más; la muerte ya no tiene dominio sobre él. Aleluya.",
          "collect": "DIOS misericordioso, concédenos recibir como fruto abundante en toda nuestra vida lo que realizamos en las celebraciones pascuales. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "RECIBE, Señor, las ofrendas de tu Iglesia exultante, y a quien diste motivo de tanto gozo concédele disfrutar de la alegría eterna. Por Jesucristo, nuestro Señor.",
          "communion": "Jesús se puso en medio de sus discípulos y les dijo: «Paz a vosotros». Aleluya.",
          "prayer_after": "MIRA, Señor, con bondad a tu pueblo y, ya que has querido renovarlo con estos sacramentos de vida eterna, concédele llegar a la incorruptible resurrección de la carne que habrá de ser glorificada. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Lunes de la VI semana de Pascua",
            "page": 69,
            "citation": "Rom 6, 9"
          },
          "collect": {
            "title": "Lunes de la VI semana de Pascua",
            "page": 69
          },
          "prayer_offerings": {
            "title": "Lunes de la VI semana de Pascua",
            "page": 69
          },
          "communion": {
            "title": "Lunes de la VI semana de Pascua",
            "page": 69,
            "citation": "Cf. Jn 20, 19"
          },
          "prayer_after": {
            "title": "Lunes de la VI semana de Pascua",
            "page": 69
          }
        }
      },
      "easter-6-2": {
        "key": "easter-6-2",
        "kind": "temporal",
        "title": "Martes de la VI semana de Pascua",
        "page": 70,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Alegrémonos y gocemos y démosle gracias, porque reina el Señor, nuestro Dios, dueño de todo. Aleluya.",
          "collect": "DIOS todopoderoso y lleno de misericordia, concédenos lograr verdaderamente nuestra participación en la resurrección de Cristo, tu Hijo. Él, que vive y reina contigo.",
          "prayer_offerings": "CONCÉDENOS, Señor, alegrarnos siempre por estos misterios pascuales, y que la actualización continua de tu obra redentora sea para nosotros fuente de gozo incesante. Por Jesucristo, nuestro Señor.",
          "communion": "Era necesario que el Mesías padeciera y resucitara de entre los muertos, para así entrar en su gloria. Aleluya.",
          "prayer_after": "ESCUCHA, Señor, nuestras oraciones para que el santo intercambio de nuestra redención nos sostenga durante la vida presente y nos dé las alegrías eternas. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Martes de la VI semana de Pascua",
            "page": 70,
            "citation": "Ap 19, 7. 6"
          },
          "collect": {
            "title": "Martes de la VI semana de Pascua",
            "page": 70
          },
          "prayer_offerings": {
            "title": "Martes de la VI semana de Pascua",
            "page": 70
          },
          "communion": {
            "title": "Martes de la VI semana de Pascua",
            "page": 70,
            "citation": "Cf. Lc 24, 46. 26"
          },
          "prayer_after": {
            "title": "Martes de la VI semana de Pascua",
            "page": 70
          }
        }
      },
      "easter-6-3": {
        "key": "easter-6-3",
        "kind": "temporal",
        "title": "Miércoles de la VI semana de Pascua",
        "page": 71,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Te daré gracias entre las naciones, Señor; contaré tu fama a mis hermanos. Aleluya.",
          "collect": "ESCUCHA, Señor, nuestra oración y concédenos que, así como celebramos las fiestas de la resurrección de tu Hijo, merezcamos también, cuando vuelva, alegrarnos con todos sus santos. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "OH, Dios, que nos haces partícipes de tu única y suprema divinidad por el admirable intercambio de este sacrificio, concédenos alcanzar en una vida santa la realidad que hemos conocido en ti. Por Jesucristo, nuestro Señor.",
          "communion": "Dice el Señor: «Yo os he escogido sacándoos del mundo y os he destinado para que vayáis y deis fruto y vuestro fruto permanezca». Aleluya.",
          "prayer_after": "ASISTE, Señor, a tu pueblo y haz que pasemos del antiguo pecado a la vida nueva los que hemos sido alimentados con los sacramentos del cielo Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Miércoles de la VI semana de Pascua",
            "page": 71,
            "citation": "Cf. Sal 17, 50; 21, 23"
          },
          "collect": {
            "title": "Miércoles de la VI semana de Pascua",
            "page": 71
          },
          "prayer_offerings": {
            "title": "Miércoles de la VI semana de Pascua",
            "page": 71
          },
          "communion": {
            "title": "Miércoles de la VI semana de Pascua",
            "page": 71,
            "citation": "Cf. Jn 15, 16. 19"
          },
          "prayer_after": {
            "title": "Miércoles de la VI semana de Pascua",
            "page": 71
          }
        }
      },
      "easter-6-4": {
        "key": "easter-6-4",
        "kind": "temporal",
        "title": "Jueves de la VI semana de Pascua",
        "page": 72,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Oh, Dios, cuando salías al frente de tu pueblo, guiándolos y acampando con ellos, la tierra tembló, el cielo destiló. Aleluya.",
          "collect": "OH, Dios, que das parte a tu pueblo en tu obra redentora, concédenos vivir siempre la alegría de la resurrección del Señor. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "SUBAN hasta ti, Señor, nuestras súplicas con la ofrenda del sacrificio, para que, purificados por tu bondad, nos preparemos para el sacramento de tu inmenso amor. Por Jesucristo, nuestro Señor.",
          "communion": "Sabed que yo estoy con vosotros todos los días, hasta el fin de los tiempos. Aleluya.",
          "prayer_after": "DIOS todopoderoso y eterno, que en la resurrección de Jesucristo nos has renovado para la vida eterna, multiplica en nosotros los frutos del Misterio pascual e infunde en nuestros corazones la fortaleza del alimento de salvación. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Jueves de la VI semana de Pascua",
            "page": 72,
            "citation": "Cf. Sal 67, 8-9"
          },
          "collect": {
            "title": "Jueves de la VI semana de Pascua",
            "page": 72
          },
          "prayer_offerings": {
            "title": "Jueves de la VI semana de Pascua",
            "page": 72
          },
          "communion": {
            "title": "Jueves de la VI semana de Pascua",
            "page": 72,
            "citation": "Mt 28, 20"
          },
          "prayer_after": {
            "title": "Jueves de la VI semana de Pascua",
            "page": 72
          }
        }
      },
      "easter-6-5": {
        "key": "easter-6-5",
        "kind": "temporal",
        "title": "Viernes de la VI semana de Pascua",
        "page": 73,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Señor, con tu sangre has adquirido para Dios hombres de toda tribu, lengua, pueblo y nación; y has hecho de ellos para nuestro Dios un reino de sacerdotes. Aleluya.",
          "collect": "ESCUCHA, Señor, nuestras oraciones, para que se complete en todo lugar, por la fuerza del Evangelio, lo que fue prometido como fruto de la acción santificadora de tu Verbo, y lo anunciado por la predicación de la verdad nos obtenga la plenitud de la adopción filial. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACOGE, Señor, con bondad las ofrendas de tu familia, para que, bajo tu protección, no pierda los dones ya recibidos y alcance los eternos. Por Jesucristo, nuestro Señor.",
          "communion": "Cristo nuestro Señor fue entregado por nuestros pecados, y resucitó para nuestra justificación. Aleluya.",
          "prayer_after": "GUARDA, Señor, con tu amor constante a los que has salvado, para que los redimidos por la pasión de tu Hijo se alegren con su resurrección. Él, que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "Viernes de la VI semana de Pascua",
            "page": 73,
            "citation": "Ap 5, 9-10"
          },
          "collect": {
            "title": "Viernes de la VI semana de Pascua",
            "page": 73
          },
          "prayer_offerings": {
            "title": "Viernes de la VI semana de Pascua",
            "page": 73
          },
          "communion": {
            "title": "Viernes de la VI semana de Pascua",
            "page": 73,
            "citation": "Rom 4, 2"
          },
          "prayer_after": {
            "title": "Viernes de la VI semana de Pascua",
            "page": 74
          }
        }
      },
      "easter-6-6": {
        "key": "easter-6-6",
        "kind": "temporal",
        "title": "Sábado de la VI semana de Pascua",
        "page": 75,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Pueblo adquirido por Dios, anunciad las proezas del que os llamó de las tinieblas a su luz maravillosa. Aleluya.",
          "collect": "INSTRUYE siempre, Señor, nuestros corazones con las buenas obras, para que, orientándonos hacia lo mejor, aspiremos a disfrutar plenamente el Misterio pascual. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "TE pedimos, Señor, que, en tu bondad, santifiques estos dones, aceptes la ofrenda de este sacrificio espiritual y nos transformes en oblación perenne. Por Jesucristo, nuestro Señor.",
          "communion": "Padre, este es mi deseo: que los que me has dado estén conmigo donde yo estoy y contemplen mi gloria, la que me diste. Aleluya.",
          "prayer_after": "SEÑOR, después de recibir el don sagrado del sacramento, te pedimos humildemente que nos haga crecer en el amor lo que tu Hijo nos mandó realizar en memoria suya. Él, que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "Sábado de la VI semana de Pascua",
            "page": 75,
            "citation": "Cf. 1 Pe 2, 9"
          },
          "collect": {
            "title": "Sábado de la VI semana de Pascua",
            "page": 75
          },
          "prayer_offerings": {
            "title": "Sábado de la VI semana de Pascua",
            "page": 75
          },
          "communion": {
            "title": "Sábado de la VI semana de Pascua",
            "page": 75,
            "citation": "Jn 17, 24"
          },
          "prayer_after": {
            "title": "Sábado de la VI semana de Pascua",
            "page": 76
          }
        }
      },
      "ascension": {
        "key": "ascension",
        "kind": "temporal",
        "title": "LA ASCENSIÓN DEL SEÑOR",
        "page": 77,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Reyes de la tierra, cantad a Dios, tocad al Señor que asciende a lo más alto de los cielos; su majestad y su poder sobre las nubes. Aleluya.",
          "collect": "OH, Dios, cuyo Hijo asciende hoy a los cielos en presencia de los apóstoles, concédenos, según su promesa, que permanezca siempre con nosotros en la tierra y que nosotros merezcamos vivir con él en el cielo. Él, que vive y reina contigo.",
          "prayer_offerings": "OH, Dios, cuyo Unigénito, nuestro Sumo Sacerdote, vive para siempre sentado a tu derecha intercediendo por nosotros, concédenos acceder confiadamente al trono de la gracia para alcanzar tu misericordia. Por Jesucristo, nuestro Señor.",
          "communion": "Cristo, ofreciendo un único sacrificio por los pecados, está sentado para siempre jamás a la derecha de Dios. Aleluya.",
          "prayer_after": "SEÑOR, los dones que hemos recibido de tu altar, enciendan en nuestros corazones el deseo de la patria del cielo y nos hagan llegar, siguiendo los pasos de nuestro Salvador, allí donde él nos ha precedido. Él, que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "LA ASCENSIÓN DEL SEÑOR",
            "page": 77,
            "citation": "Cf. Sal 67, 33. 35"
          },
          "collect": {
            "title": "LA ASCENSIÓN DEL SEÑOR",
            "page": 77
          },
          "prayer_offerings": {
            "title": "LA ASCENSIÓN DEL SEÑOR",
            "page": 77
          },
          "communion": {
            "title": "LA ASCENSIÓN DEL SEÑOR",
            "page": 77,
            "citation": "Cf. Heb 10, 12"
          },
          "prayer_after": {
            "title": "LA ASCENSIÓN DEL SEÑOR",
            "page": 78
          }
        }
      },
      "easter-1-0": {
        "key": "easter-1-0",
        "kind": "temporal",
        "title": "Misa del día",
        "page": 78,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Galileos, ¿qué hacéis ahí mirando al cielo? Volverá como lo habéis visto marcharse al cielo. Aleluya.",
          "collect": "DIOS todopoderoso, concédenos exultar santamente de gozo y alegrarnos con religiosa acción de gracias, porque la ascensión de Jesucristo, tu Hijo, es ya nuestra victoria, y adonde ya se ha adelantado gloriosamente nuestra Cabeza, esperamos llegar también los miembros de su cuerpo. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "TE, presentamos ahora, Señor, el sacrificio para celebrar la admirable ascensión de tu Hijo; concédenos, por este sagrado intercambio, elevamos hasta las realidades del cielo. Por Jesucristo, nuestro Señor.",
          "communion": "Sabed que yo estoy con vosotros todos los días, hasta el final de los tiempos. Aleluya.",
          "prayer_after": "DIOS todopoderoso y eterno, que, mientras vivimos aún en la tierra, nos concedes gustar los divinos misterios, te rogamos que el afecto de nuestra piedad cristiana se dirija allí donde nuestra condición humana está contigo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Misa del día",
            "page": 78,
            "citation": "Hch 1, 11"
          },
          "collect": {
            "title": "Misa del día",
            "page": 78
          },
          "prayer_offerings": {
            "title": "Misa del día",
            "page": 78
          },
          "communion": {
            "title": "Misa del día",
            "page": 79,
            "citation": "Mt 28, 20"
          },
          "prayer_after": {
            "title": "Misa del día",
            "page": 79
          }
        }
      },
      "easter-7-0": {
        "key": "easter-7-0",
        "kind": "temporal",
        "title": "VII DOMINGO DE PASCUA",
        "page": 80,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Escúchame, Señor, que te llamo. Oigo en mi corazón: Buscad mi rost ro. Tu rostro buscaré, Señor; no me escondas tu rostro. Aleluya.",
          "collect": "ATIENDE, Señor, a nuestras plegarias y, ya que confesamos que Cristo, Salvador de los hombres, vive junto a ti en la majestad de tu gloria, haz que le sintamos presente también entre nosotros hasta el fin de los tiempos, como él mismo prometió. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACEPTA las súplicas de tu fieles, Señor, juntamente con estas ofrendas, para que lleguemos a la gloria del cielo mediante esta piadosa celebración. Por Jesucristo, nuestro Señor.",
          "communion": "Padre, ruego que sean uno, como nosotros somos uno. Aleluya.",
          "prayer_after": "ESCÚCHANOS, Di os, salvador nuestro, para que confiemos en que, por este sacramento, se realizará, en todo el cuerpo de la Iglesia, lo anticipado ya en su Cabeza. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "VII DOMINGO DE PASCUA",
            "page": 80,
            "citation": "Sal 26, 7-9"
          },
          "collect": {
            "title": "VII DOMINGO DE PASCUA",
            "page": 80
          },
          "prayer_offerings": {
            "title": "VII DOMINGO DE PASCUA",
            "page": 80
          },
          "communion": {
            "title": "VII DOMINGO DE PASCUA",
            "page": 80,
            "citation": "Cf. Jn 17, 22"
          },
          "prayer_after": {
            "title": "VII DOMINGO DE PASCUA",
            "page": 80
          }
        }
      },
      "easter-7-1": {
        "key": "easter-7-1",
        "kind": "temporal",
        "title": "Lunes de la VII semana de Pascua",
        "page": 81,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Recibiréis la fuerza del Espíritu Santo que va a venir sobre vosotros, y seréis mis testigos hasta el confín de la tierra. Aleluya.",
          "collect": "LLEGUE a nosotros, Señor, la fuerza del Espíritu Santo, para que podamos cumplir fielmente tu voluntad y demos testimonio con una conducta santa. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ESTE sacrificio santo nos purifique, Señor, y derrame en nuestras almas la fuerza divina de tu gracia. Por Jesucristo, nuestro Señor.",
          "communion": "No os dejaré huérfanos, dice el Señor; volveré a vosotros y se alegrará vuestro corazón. Aleluya.",
          "prayer_after": "ASISTE, Señor, a tu pueblo y haz que pasemos del antiguo pecado a la vida nueva los que hemos sido alimentados con los sacramentos del cielo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Lunes de la VII semana de Pascua",
            "page": 81,
            "citation": "Hch 1, 8"
          },
          "collect": {
            "title": "Lunes de la VII semana de Pascua",
            "page": 81
          },
          "prayer_offerings": {
            "title": "Lunes de la VII semana de Pascua",
            "page": 81
          },
          "communion": {
            "title": "Lunes de la VII semana de Pascua",
            "page": 81,
            "citation": "Cf. Jn 14, 18; 16, 22"
          },
          "prayer_after": {
            "title": "Lunes de la VII semana de Pascua",
            "page": 81
          }
        }
      },
      "easter-7-2": {
        "key": "easter-7-2",
        "kind": "temporal",
        "title": "Martes de la VII semana de Pascua",
        "page": 82,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Yo soy el primero y el último, el viviente; estuve muerto pero, ya ves, estoy vivo por los siglos de los siglos. Aleluya.",
          "collect": "DIOS todopoderoso y rico en misericordia, te pedimos que el Espíritu Santo, con su venida, se digne habitar en nosotros y nos convierta en templos de su gloria. Por nuestro Señor Jesucrist o.",
          "prayer_offerings": "ACEPTA las súplicas de tus fieles, Señor, juntamente con estas ofrendas, para que lleguemos a la gloria del cielo mediante esta piadosa celebración. Por Jesucristo, nuestro Señor.",
          "communion": "El Espíritu Santo, que enviará el Padre en mi nombre, será quien os lo enseñe todo y os vaya recordando todo lo que os he dicho, dice el Señor. Aleluya.",
          "prayer_after": "SEÑOR, después de recibir el don sagrado del sacramento, te pedimos humildemente que nos haga crecer en el amor lo que tu Hijo nos mandó realizar en memoria suya. Él, que vive y reina por los siglos de los siglos."
        },
        "sectionSources": {
          "entrance": {
            "title": "Martes de la VII semana de Pascua",
            "page": 82,
            "citation": "Ap 1, 17-18"
          },
          "collect": {
            "title": "Martes de la VII semana de Pascua",
            "page": 82
          },
          "prayer_offerings": {
            "title": "Martes de la VII semana de Pascua",
            "page": 82
          },
          "communion": {
            "title": "Martes de la VII semana de Pascua",
            "page": 82,
            "citation": "Cf. Jn 14, 26"
          },
          "prayer_after": {
            "title": "Martes de la VII semana de Pascua",
            "page": 82
          }
        }
      },
      "easter-7-3": {
        "key": "easter-7-3",
        "kind": "temporal",
        "title": "Miércoles de la VII semana de Pascua",
        "page": 83,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Pueblos todos, batid palmas, aclamad a Dios con gritos de júbilo. Aleluya.",
          "collect": "DIOS misericordioso, concede a tu Iglesia, congregada por el Espíritu Santo, entregarse a ti de todo corazón y mantenerse unida con voluntad sincera. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "ACEPTA, Señor, el sacrificio establecido por ti y, por estos santos misterios que celebramos en razón de nuestro ministerio, perfecciona en nosotros como conviene la obra santificadora de tu redención. Por Jesucristo, nuestro Señor.",
          "communion": "Cuando venga el Paráclito, que os enviaré, el Espíritu de la verdad, que procede del Padre, él dará testimonio de mí, y vosotros daréis testimonio, dice el Señor. Aleluya.",
          "prayer_after": "LA participación en este divino sacramento nos colme siempre de tu gracia, Señor, y, al purificarnos con su fuerza, nos haga cada vez más dignos de este gran regalo. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Miércoles de la VII semana de Pascua",
            "page": 83,
            "citation": "Sal 46, 2"
          },
          "collect": {
            "title": "Miércoles de la VII semana de Pascua",
            "page": 83
          },
          "prayer_offerings": {
            "title": "Miércoles de la VII semana de Pascua",
            "page": 83
          },
          "communion": {
            "title": "Miércoles de la VII semana de Pascua",
            "page": 83,
            "citation": "Jn 15, 26-27"
          },
          "prayer_after": {
            "title": "Miércoles de la VII semana de Pascua",
            "page": 83
          }
        }
      },
      "easter-7-4": {
        "key": "easter-7-4",
        "kind": "temporal",
        "title": "Jueves de la VII semana de Pascua",
        "page": 84,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Comparezcamos confiados ante el trono de la gracia, para alcanzar misericordia y encontrar gracia para un auxilio oportuno. Aleluya.",
          "collect": "TE suplicamos, Señor, que tu Espíritu infunda con tal fuerza sus dones en nosotros, que nos conceda un corazón que te agrade y, propicio, nos haga conformes a tu voluntad. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "TE pedimos, Señor, que, en tu bondad, santifiques estos dones, aceptes la ofrenda de este sacrificio espiritual y nos transformes en oblación perenne. Por Jesucristo, nuestro Señor.",
          "communion": "Os digo la verdad: os conviene que yo me vaya; porque si no me voy, no vendrá a vosotros el Paráclito, dice el Señor. Aleluya.",
          "prayer_after": "TE pedimos, Señor, que el sacramento recibido nos ilumine con su luz y nos transforme con su participación, para que merezcamos alcanzar los dones espirituales. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Jueves de la VII semana de Pascua",
            "page": 84,
            "citation": "Hch 4, 16"
          },
          "collect": {
            "title": "Jueves de la VII semana de Pascua",
            "page": 84
          },
          "prayer_offerings": {
            "title": "Jueves de la VII semana de Pascua",
            "page": 84
          },
          "communion": {
            "title": "Jueves de la VII semana de Pascua",
            "page": 84,
            "citation": "Cf. Jn 16, 7"
          },
          "prayer_after": {
            "title": "Jueves de la VII semana de Pascua",
            "page": 84
          }
        }
      },
      "easter-7-5": {
        "key": "easter-7-5",
        "kind": "temporal",
        "title": "Viernes de la VII semana de Pascua",
        "page": 85,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Cristo nos amó y nos ha lavado nuestros pecados con su sangre, y nos ha hecho reino y sacerdotes para Dios, su Padre. Aleluya.",
          "collect": "OH, Dios, que, por la glorificación de Cristo y la luz del Espíritu Santo, nos has abierto el acceso a la vida eterna, haz que la participación en tanta gracia nos mueva a dedicamos con mayor empeño a tu servicio y a vivir con mayor plenitud las riquezas de la fe. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "MIRA, Señor, con misericordia, las ofrendas de tu pueblo y, para que sean aceptables a ti, haz que la venida del Espíritu Santo purifique nuestras almas. Por Jesucristo, nuestro Señor.",
          "communion": "Cuando venga el Espíritu de la verdad os guiará hasta la verdad plena, dice el Señor. Aleluya.",
          "prayer_after": "OH, Dios, tus sacramentos nos purifican y alimentan; concédenos que la participación inmerecida en ellos nos obtenga la vida eterna. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Viernes de la VII semana de Pascua",
            "page": 85,
            "citation": "Cf. Ap 1, 5-6"
          },
          "collect": {
            "title": "Viernes de la VII semana de Pascua",
            "page": 85
          },
          "prayer_offerings": {
            "title": "Viernes de la VII semana de Pascua",
            "page": 85
          },
          "communion": {
            "title": "Viernes de la VII semana de Pascua",
            "page": 85,
            "citation": "Cf. Jn 16, 13"
          },
          "prayer_after": {
            "title": "Viernes de la VII semana de Pascua",
            "page": 85
          }
        }
      },
      "easter-7-6": {
        "key": "easter-7-6",
        "kind": "temporal",
        "title": "Sábado de la VII semana de Pascua",
        "page": 86,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "Los discípulos perseveraban unánimes en la oración, junto con algunas mujeres y María, la madre de Jesús, y con sus hermanos. Aleluya.",
          "collect": "CONCÉDENOS, Dios todopoderoso, a los que hemos celebrado las fiestas de Pascua, conservarlas por tu gracia, en las costumbres y en la vida. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "TE pedimos, Señor, que la venida del Espíritu Santo prepare nuestras almas con los sacramentos divinos, porque él mismo es el perdón de todos los pecados. Por Jesucristo, nuestro Señor.",
          "communion": "El Espíritu Santo me glorificará, porque recibirá de lo mío y os lo anunciará, dice el Señor. Aleluya.",
          "prayer_after": "ASISTE compasivo, Señor, a nuestras súplicas, para que, abandonada la vieja condición, nos renovemos con el alma santificada, como nos has hecho pasar de los antiguos sacramentos a los nuevos. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "Sábado de la VII semana de Pascua",
            "page": 86,
            "citation": "Cf. Hch 1, 14"
          },
          "collect": {
            "title": "Sábado de la VII semana de Pascua",
            "page": 86
          },
          "prayer_offerings": {
            "title": "Sábado de la VII semana de Pascua",
            "page": 86
          },
          "communion": {
            "title": "Sábado de la VII semana de Pascua",
            "page": 86,
            "citation": "Cf. Jn 16, 14"
          },
          "prayer_after": {
            "title": "Sábado de la VII semana de Pascua",
            "page": 86
          }
        }
      },
      "pentecost": {
        "key": "pentecost",
        "kind": "temporal",
        "title": "DOMINGO DE PENTECOSTÉS",
        "page": 87,
        "source": {
          "authority": "Conferencia Episcopal Española",
          "url": "https://liturgiapapal.org/attachments/article/1029/Pascua.pdf"
        },
        "data": {
          "entrance": "El amor de Dios ha sido derramado en nuestros corazones por el Espíritu Santo que habita en nosotros. Aleluya.",
          "collect": "DIOS todopoderoso y eterno, que has querido que el Misterio pascual se actualizase bajo el signo sagrado de los cincuenta días, haz que los pueblos dispersos en la diversidad de lenguas se congreguen, por los dones del cielo, en la única confesión de tu nombre. Por nuestro Señor Jesucristo.",
          "prayer_offerings": "COLMA, Señor, estos dones con la acción santificadora de tu Espíritu, para que se manifiesta, por medio de ellos, aquel amor de tu Iglesia que hace brillar en todo el mundo la verdad del misterio de la salvación Por Jesucristo, nuestro Señor.",
          "communion": "El último día de la fiesta, Jesús en pie gritó: «El que tenga sed, que venga a mí y beba». Aleluya.",
          "prayer_after": "ESTOS dones que acabamos de recibir, Señor, nos sirvan de provecho, para que nos inflame el mismo Espíritu que infundiste de modo inefable en tus apóstoles. Por Jesucristo, nuestro Señor."
        },
        "sectionSources": {
          "entrance": {
            "title": "DOMINGO DE PENTECOSTÉS",
            "page": 87,
            "citation": "Cf. Rom 5, 5; 8, 11"
          },
          "collect": {
            "title": "DOMINGO DE PENTECOSTÉS",
            "page": 87
          },
          "prayer_offerings": {
            "title": "DOMINGO DE PENTECOSTÉS",
            "page": 87
          },
          "communion": {
            "title": "DOMINGO DE PENTECOSTÉS",
            "page": 88,
            "citation": "Jn 7, 37"
          },
          "prayer_after": {
            "title": "DOMINGO DE PENTECOSTÉS",
            "page": 88
          }
        }
      }
    },
    "calendar": {
      "07-25": [
        {
          "title": "Santiago, apóstol, patrono de España",
          "kind": "proper",
          "source": {
            "url": "https://parroquiasdoloresyelcarmen.blogspot.com/2026/07/25-de-julio-sabado-de-la-xvi-semana-del.html"
          },
          "data": {
            "entrance": "Jesús paseando junto al mar de Galilea, vio a Santiago, hijo de Zebedeo, y a Juan, su hermano, que estaban repasando las redes, y los llamó, y les puso el nombre de Boanerges, es decir, los hijos del trueno.",
            "collect": "Dios todopoderoso y eterno, que consagraste los primeros trabajos de tus apóstoles con la sangre de Santiago, haz que tu Iglesia, reconfortada constantemente por su patrocinio, sea fortalecida por su testimonio, y que los pueblos de España se mantengan fieles a Cristo hasta el final de los tiempos. Por nuestro Señor Jesucristo.",
            "prayer_offerings": "Purifícanos, Señor, con el bautismo salvador de la muerte de tu Hijo, para que, en la solemnidad de Santiago, el primer apóstol que participó en el cáliz redentor de Cristo, podamos ofrecerte un sacrificio agradable. Por Jesucristo, nuestro Señor.",
            "communion": "Bebieron el cáliz del Señor y se hicieron amigos de Dios.",
            "prayer_after": "Al darte gracias, Señor, por los dones santos que hemos recibido en esta solemnidad de Santiago, apóstol, patrono de España, te pedimos que sigas protegiéndonos siempre con su poderosa intercesión. Por Jesucristo, nuestro Señor."
          },
          "sectionSources": {
            "entrance": {
              "citation": "Cf. Mt 4, 18. 21; Mc 3, 17"
            },
            "communion": {
              "citation": "Cf. Mt 20, 22-23"
            }
          }
        }
      ],
      "12-08": [
        {
          "title": "La Inmaculada Concepción",
          "kind": "proper",
          "source": {
            "url": "https://parroquiasdoloresyelcarmen.blogspot.com/2025/12/08-de-diciembre-lunes-de-la-ii-semana.html?m=0"
          },
          "data": {
            "entrance": "Desbordo de alegría en el Señor, mi alma se regocija en mi Dios. Porque él me vistió con las vestiduras de la salvación y me envolvió con el manto de la justicia, como una esposa que se adorna con sus joyas.",
            "collect": "Dios nuestro, por la Concepción Inmaculada de la Virgen María preservada de todo pecado, preparaste a tu Hijo una digna morada en atención a los méritos de la muerte redentora de Cristo; concédenos, por su intercesión, que también nosotros lleguemos a ti purificados de todas nuestras culpas. Por nuestro Señor Jesucristo.",
            "prayer_offerings": "Señor, recibe complacido el sacrificio salvador que te ofrecemos en la solemnidad de la Inmaculada Concepción de santa María Virgen y, así como reconocemos que la preservaste, por tu gracia, limpia de toda mancha, guárdanos también a nosotros, por su intercesión, libres de todo pecado. Por Jesucristo, nuestro Señor.",
            "communion": "Qué pregón tan glorioso para ti, Virgen María, porque de ti ha nacido el sol de justicia, Cristo, nuestro Dios.",
            "prayer_after": "Señor Dios nuestro, el sacramento que hemos recibido repare en nosotros las heridas de aquel primer pecado del que preservaste de modo singular la Concepción inmaculada de la santísima Virgen María. Por Jesucristo, nuestro Señor."
          },
          "sectionSources": {
            "entrance": {
              "citation": "Cf. Is 61, 10"
            }
          }
        }
      ],
      "11-24": [
        {
          "title": "Santos Andrés Dung-Lac y compañeros, mártires",
          "kind": "proper",
          "source": {
            "authority": "Conferencia Episcopal Española",
            "url": "https://www.conferenciaepiscopal.es/wp-content/uploads/boletin/BOCEE027.pdf"
          },
          "page": 69,
          "sectionSources": {
            "prayer_offerings": {
              "page": 70
            },
            "communion": {
              "page": 70
            },
            "prayer_after": {
              "page": 70
            },
            "entrance": {
              "citation": "Cf. Gál 6, 14a; 1 Cor 1, 18"
            }
          },
          "data": {
            "entrance": "Dios nos libre de gloriarnos si no es en la cruz de nuestro Señor Jesucristo, porque el mensaje de la Cruz, para nosotros, que estamos en vías de salvación, es fuerza de Dios.",
            "collect": "Oh Dios, fuente y origen de toda paternidad, tú hiciste que san Andrés y sus compañeros mártires fueran fieles a la cruz de Cristo, hasta llegar a derramar su sangre; concédenos, por su intercesión, que difundamos tu amor entre nuestros hermanos y que nos llamemos y seamos verdaderamente hijos tuyos. Por nuestro Señor Jesucristo.",
            "prayer_offerings": "Recibe, Padre santo, los dones que te ofrecemos en la veneración del martirio de los santos vietnamitas, para que, en medio de las dificultades de nuestra vida, permanezcamos siempre fieles a ti y hagamos de nosotros mismos un sacrificio agradable a tus ojos. Por Jesucristo, nuestro Señor.",
            "communion": "Dichosos los perseguidos por causa de la justicia, porque de ellos es el reino de los cielos.",
            "prayer_after": "Después de haber sido alimentados con un mismo y único pan, en la conmemoración de los santos mártires, te pedimos humildemente, Señor, que nos mantengamos unidos en tu amor y que, por nuestra constancia en las pruebas, alcancemos finalmente la recompensa eterna. Por Jesucristo nuestro Señor."
          }
        }
      ],
      "10-28": [
        {
          "title": "Santos Simón y Judas, Apóstoles",
          "kind": "proper",
          "source": {
            "url": "https://parroquiasdoloresyelcarmen.blogspot.com/2025/10/martes-de-la-xxx-semana-del-tiempo.html?m=0"
          },
          "data": {
            "entrance": "Estos son los varones santos a quienes eligió el Señor amorosamente y les dio la gloria eterna.",
            "collect": "Oh, Dios, que nos concediste llegar al conocimiento de tu nombre por medio de los santos apóstoles, te rogamos que, por intercesión de san Simón y san Judas, la Iglesia siga creciendo siempre por el incremento de los pueblos que crean en ti. Por nuestro Señor Jesucristo.",
            "prayer_offerings": "Te pedimos, Señor, que recibas nuestras súplicas al venerar la gloria eterna de tus apóstoles Simón y Judas, y nos dispongas para celebrar dignamente estos santos misterios. Por Jesucristo, nuestro Señor.",
            "communion": "Dice el Señor: el que me ama será fiel a mi palabra; mi Padre lo amará, iremos a él y habitaremos en él.",
            "prayer_after": "Dios nuestro, después de recibir estos sacramentos, e impulsados por el Espíritu Santo, te rogamos humildemente que el misterio celebrado en el martirio de los apóstoles Simón y Judas nos haga perseverar siempre en tu amor. Por Jesucristo, nuestro Señor."
          },
          "sectionSources": {
            "communion": {
              "citation": "Jn 14, 23"
            }
          }
        }
      ],
      "11-01": [
        {
          "title": "Todos los Santos",
          "kind": "proper",
          "source": {
            "url": "https://parroquiasdoloresyelcarmen.blogspot.com/2025/10/01-de-noviembre-sabado-de-la-xxx-semana.html?m=0"
          },
          "data": {
            "entrance": "Alegrémonos todos en el Señor al celebrar este día de fiesta en honor de todos los santos. Los ángeles se alegran de esta solemnidad y alaban a una al Hijo de Dios.",
            "collect": "Dios todopoderoso y eterno, que nos has otorgado venerar en una misma celebración los méritos de todos los santos, concédenos, por esta multitud de intercesores, la deseada abundancia de tu misericordia. Por nuestro Señor Jesucristo.",
            "prayer_offerings": "Sean agradables a tus ojos, Señor, los dones que te ofrecemos en honor de todos los santos, y haz que sintamos interceder por nuestra salvación a los que creemos ya seguros en la vida eterna. Por Jesucristo, nuestro Señor.",
            "communion": "Bienaventurados los limpios de corazón, porque ellos verán a Dios. Bienaventurados los que trabajan por la paz, porque ellos serán llamados hijos de Dios. Bienaventurados los perseguidos por causa de la justicia, porque de ellos es el reino de los cielos.",
            "prayer_after": "Te adoramos y admiramos, oh, Dios, el solo Santo entre todos los santos, e imploramos tu gracia para que, realizando nuestra santidad en la plenitud de tu amor, pasemos de esta mesa de los que peregrinamos, al banquete de la patria celestial. Por Jesucristo, nuestro Señor."
          },
          "sectionSources": {
            "communion": {
              "citation": "Mt 5, 8-10"
            }
          }
        }
      ],
      "11-09": [
        {
          "title": "Dedicación de la Basílica de Letrán",
          "kind": "proper",
          "source": {
            "url": "https://parroquiasdoloresyelcarmen.blogspot.com/2026/11/09-de-noviembre-lunes-de-la-xxxii.html"
          },
          "data": {
            "entrance": "Vi la ciudad santa, la nueva Jerusalén que descendía del cielo, de parte de Dios, preparada como una esposa que se ha adornado para su esposo.",
            "collect": "Oh, Dios, que preparas una morada eterna a tu majestad con piedras vivas y elegidas, multiplica en tu Iglesia el espíritu de gracia que le has dado, de modo que tu pueblo fiel crezca siempre para la edificación de la Jerusalén del cielo. Por nuestro Señor Jesucristo.",
            "prayer_offerings": "Recibe, Señor, la ofrenda que te presentamos; concédenos el fruto de tus sacramentos y el cumplimiento de nuestros deseos. Por Jesucristo, nuestro Señor.",
            "prayer_after": "Dios nuestro, que manifiestas en tu Iglesia un signo visible de la Jerusalén celestial; te pedimos que, por la participación de este sacramento, seamos transformados en templos de tu gracia y lleguemos a la morada de tu gloria. Por Jesucristo, nuestro Señor."
          },
          "sectionSources": {
            "entrance": {
              "citation": "Cf Ap 21, 2"
            }
          }
        }
      ],
      "11-30": [
        {
          "title": "San Andrés, Apóstol",
          "kind": "proper",
          "source": {
            "url": "https://parroquiasdoloresyelcarmen.blogspot.com/2023/11/?m=0"
          },
          "data": {
            "entrance": "El Señor, paseando junto al lago de Galilea, vio a dos hermanos, Pedro y Andrés, y los llamó: «Venid en pos de mí y os haré pescadores de hombres».",
            "collect": "Señor, humildemente pedimos a tu majestad que, así como san Andrés, apóstol de tu Iglesia, brilló como predicador y pastor, sea también nuestro perpetuo intercesor delante de ti. Por nuestro Señor Jesucristo.",
            "prayer_offerings": "Dios todopoderoso, concédenos agradarte con estos dones que hemos traído en la fiesta de san Andrés, y, al aceptarlos, haz que renueven nuestra vida. Por Jesucristo, nuestro Señor.",
            "communion": "Dijo Andrés a su hermano Simón: «Hemos encontrado al Mesías, que significa Cristo». Y lo llevó a Jesús.",
            "prayer_after": "SEÑOR, la comunión de tu sacramento nos dé fortaleza para que, a ejemplo del apóstol san Andrés, compartiendo la muerte de Cristo, merezcamos vivir con él en la gloria. Por Jesucristo, nuestro Señor."
          },
          "sectionSources": {
            "entrance": {
              "citation": "Cf. Mt 4, 18-19"
            },
            "communion": {
              "citation": "Cf. Jn 1, 41-42"
            }
          }
        }
      ],
      "11-02": [
        {
          "title": "Conmemoración de los Fieles Difuntos",
          "kind": "proper",
          "source": {
            "url": "https://parroquiasdoloresyelcarmen.blogspot.com/2023/11/02-de-noviembre-jueves-de-la-xxx-semana.html?m=1"
          },
          "data": {
            "entrance": "Señor, dales el descanso eterno y brille sobre ellos la luz eterna.",
            "collect": "Oh, Dios, gloria de los fieles y vida de los justos, los redimidos por la muerte y resurrección de tu Hijo, te pedimos que acojas con bondad a tus siervos difuntos, para que quienes profesaron el misterio de nuestra resurrección merezcan alcanzar los gozos de la eterna bienaventuranza. Por nuestro Señor Jesucristo.",
            "prayer_offerings": "Acepta en tu bondad nuestras ofrendas, Señor, para que tus siervos difuntos sean recibidos en la gloria con tu Hijo, a quien nos unimos por este gran sacramento de piedad. Por Jesucristo, nuestro Señor.",
            "communion": "Yo soy la resurrección y la vida: el que cree en mí, aunque haya muerto, vivirá, y el que está vivo y cree en mí no morirá para siempre, dice el Señor.",
            "prayer_after": "Te pedimos, Señor, que tus siervos difuntos, por quienes hemos celebrado el Misterio pascual, lleguen a la mansión de la luz y de la paz. Por Jesucristo, nuestro Señor."
          },
          "sectionSources": {
            "entrance": {
              "citation": "Cf. 4 Esd 2, 34-35"
            },
            "communion": {
              "citation": "Cf. Jn 11, 25-26"
            }
          }
        }
      ]
    },
    "catalog": []
  }
});
})(globalThis);
