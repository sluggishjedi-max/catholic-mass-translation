// Mexico Mass module (CEM, Beta): complete Mexican Ordinary and official CEM daily Mass source.
(function registerMexicoMass(global) {
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
            "sp_es": "",
            "text_es": "."
          },
          {
            "rubric_es": "Reunido el pueblo, el sacerdote con los ministros va al altar mientras se entona el canto de entrada."
          },
          {
            "rubric_es": "Cuando llega al altar, el sacerdote con los ministros hace la debida reverencia, besa el altar y, si se juzga oportuno, lo inciensa."
          },
          {
            "rubric_es": "Después se dirige con los ministros a la sede."
          },
          {
            "rubric_es": "Terminado el canto de entrada, el sacerdote y los fieles, de pie, se santiguan mientras el sacerdote, de cara al pueblo, dice:"
          },
          {
            "sp_es": "Todos",
            "text_es": "En el nombre del Padre, y del Hijo, y del Espíritu Santo."
          },
          {
            "sp_es": "Todos",
            "text_es": "Amén."
          },
          {
            "rubric_es": "2."
          },
          {
            "rubric_es": "El sacerdote, extendiendo las manos, saluda al pueblo con una de las fórmulas siguientes:"
          },
          {
            "sp_es": "Todos",
            "text_es": "El Señor esté con ustedes."
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
            "text_es": "La gracia de nuestro Señor Jesucristo, el amor del Padre y la comunión del Espíritu Santo esté con todos ustedes."
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
            "text_es": "La gracia y la paz de Dios, nuestro Padre, y de Jesucristo, el Señor, esté con todos ustedes."
          },
          {
            "sp_es": "Todos",
            "text_es": "Y con tu espíritu."
          },
          {
            "sp_es": "",
            "text_es": "También pueden usarse las fórmulas de saludo propias de cada tiempo."
          },
          {
            "rubric_es": "El obispo, en vez de las anteriores fórmulas, en este primer saludo dice:"
          },
          {
            "sp_es": "C.",
            "text_es": "La paz esté con ustedes."
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
            "rubric_es": "3."
          },
          {
            "rubric_es": "El sacerdote, o el diácono, u otro ministro puede hacer una monición muy breve para introducir la Misa del día Acto Penitencial"
          },
          {
            "rubric_es": "4."
          },
          {
            "rubric_es": "A continuación se hace el acto penitencial, y el sacerdote invita a los fieles al arrepentimiento diciendo:"
          },
          {
            "sp_es": "C.",
            "text_es": "Hermanos: para celebrar dignamente estos sagrados misterios reconozcamos nuestros pecados."
          },
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "El Señor Jesús, que nos invita a la mesa de la Palabra y de la Eucaristía, nos llama ahora a la conversión. Reconozcamos, pues, que somos pecadores e invoquemos con esperanza la misericordia de Dios."
          },
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "Al comenzar esta celebración eucarística, pidamos a Dios que nos conceda la conversión de nuestros corazones; así obtendremos la reconciliación y se acrecentará nuestra comunión con Dios y con nuestros hermanos."
          },
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "Humildes y penitentes, como el publicano en el templo, acerquémonos al Dios justo, y pidámosle que tenga piedad de nosotros, que también nos reconocemos pecadores."
          },
          {
            "sp_es": "",
            "text_es": "Fórmula I Se hace una breve pausa en silencio. Después, hacen todos en común la confesión de sus pecados:"
          },
          {
            "sp_es": "",
            "text_es": "Yo confieso ante Dios todopoderoso y ante ustedes, hermanos, que he pecado mucho de pensamiento, palabra, obra y omisión: Golpeándose el pecho, dicen: por mi culpa, por mi culpa, por mi gran culpa."
          },
          {
            "rubric_es": "Luego prosiguen: Por eso ruego a santa María, siempre Virgen, a los ángeles, a los santos y a ustedes, hermanos, que intercedan por mí ante Dios, nuestro Señor."
          },
          {
            "rubric_es": "El sacerdote concluye con la siguiente plegaria:"
          },
          {
            "sp_es": "C.",
            "text_es": "Dios todopoderoso tenga misericordia de nosotros, perdone nuestros pecados y nos lleve a la vida eterna."
          },
          {
            "sp_es": "Todos",
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
            "rubric_es": "3."
          },
          {
            "rubric_es": "El sacerdote, o el diácono, u otro ministro puede hacer una monición muy breve para introducir la Misa del día Acto Penitencial"
          },
          {
            "rubric_es": "4."
          },
          {
            "rubric_es": "A continuación se hace el acto penitencial, y el sacerdote invita a los fieles al arrepentimiento diciendo:"
          },
          {
            "sp_es": "C.",
            "text_es": "Hermanos: para celebrar dignamente estos sagrados misterios reconozcamos nuestros pecados."
          },
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "El Señor Jesús, que nos invita a la mesa de la Palabra y de la Eucaristía, nos llama ahora a la conversión. Reconozcamos, pues, que somos pecadores e invoquemos con esperanza la misericordia de Dios."
          },
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "Al comenzar esta celebración eucarística, pidamos a Dios que nos conceda la conversión de nuestros corazones; así obtendremos la reconciliación y se acrecentará nuestra comunión con Dios y con nuestros hermanos."
          },
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "Humildes y penitentes, como el publicano en el templo, acerquémonos al Dios justo, y pidámosle que tenga piedad de nosotros, que también nos reconocemos pecadores."
          },
          {
            "sp_es": "",
            "text_es": "Fórmula II"
          },
          {
            "rubric_es": "5. Se hace una breve pausa en silencio. Después el sacerdote dice: Señor, ten misericordia de nosotros. El pueblo responde:"
          },
          {
            "sp_es": "Todos",
            "text_es": "Porque hemos pecado contra ti. El sacerdote prosigue: Muéstranos, Señor, tu misericordia. El pueblo responde:"
          },
          {
            "rubric_es": "Y danos tu salvación. El sacerdote concluye con la siguiente plegaria:"
          },
          {
            "sp_es": "C.",
            "text_es": "Dios todopoderoso tenga misericordia de nosotros, perdone nuestros pecados y nos lleve a la vida eterna. El pueblo responde: Amén."
          }
        ]
      },
      "C": {
        "label": {
          "es": "Tercera fórmula"
        },
        "lines": [
          {
            "rubric_es": "3."
          },
          {
            "rubric_es": "El sacerdote, o el diácono, u otro ministro puede hacer una monición muy breve para introducir la Misa del día Acto Penitencial"
          },
          {
            "rubric_es": "4."
          },
          {
            "rubric_es": "A continuación se hace el acto penitencial, y el sacerdote invita a los fieles al arrepentimiento diciendo:"
          },
          {
            "sp_es": "C.",
            "text_es": "Hermanos: para celebrar dignamente estos sagrados misterios reconozcamos nuestros pecados."
          },
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "El Señor Jesús, que nos invita a la mesa de la Palabra y de la Eucaristía, nos llama ahora a la conversión. Reconozcamos, pues, que somos pecadores e invoquemos con esperanza la misericordia de Dios."
          },
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "Al comenzar esta celebración eucarística, pidamos a Dios que nos conceda la conversión de nuestros corazones; así obtendremos la reconciliación y se acrecentará nuestra comunión con Dios y con nuestros hermanos."
          },
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "Humildes y penitentes, como el publicano en el templo, acerquémonos al Dios justo, y pidámosle que tenga piedad de nosotros, que también nos reconocemos pecadores."
          },
          {
            "sp_es": "",
            "text_es": "Fórmula III"
          },
          {
            "rubric_es": "6."
          },
          {
            "rubric_es": "Se hace una breve pausa en silencio."
          },
          {
            "rubric_es": "Después el sacerdote dice:"
          },
          {
            "sp_es": "C.",
            "text_es": "Tú que has sido enviado a sanar los corazones afligidos: Señor, ten piedad. (O bien: Kyrie, eléison)."
          },
          {
            "sp_es": "Todos",
            "text_es": "Señor, ten piedad. (O bien: Kyrie, eléison)."
          },
          {
            "rubric_es": "El sacerdote prosigue:"
          },
          {
            "sp_es": "C.",
            "text_es": "Tú que has venido a llamar a los pecadores: Cristo ten piedad. (O bien: Christe, eléison)."
          },
          {
            "sp_es": "Todos",
            "text_es": "Cristo ten piedad. (O bien: Christe, eléison)."
          },
          {
            "rubric_es": "El sacerdote prosigue:"
          },
          {
            "sp_es": "C.",
            "text_es": "Tú que estás sentado a la derecha del Padre para interceder por nosotros: Señor, ten piedad. (O bien: Kyrie, eléison)."
          },
          {
            "rubric_es": "El pueblo responde:"
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
        "rubric_es": "Y danos tu salvación. El sacerdote concluye con la siguiente plegaria:"
      },
      {
        "sp_es": "C.",
        "text_es": "Dios todopoderoso tenga misericordia de nosotros, perdone nuestros pecados y nos lleve a la vida eterna. El pueblo responde: Amén."
      },
      {
        "sp_es": "",
        "text_es": "Fórmula III"
      },
      {
        "rubric_es": "6."
      },
      {
        "rubric_es": "Se hace una breve pausa en silencio."
      },
      {
        "rubric_es": "Después el sacerdote dice:"
      },
      {
        "sp_es": "C.",
        "text_es": "Tú que has sido enviado a sanar los corazones afligidos: Señor, ten piedad. (O bien: Kyrie, eléison)."
      },
      {
        "sp_es": "Todos",
        "text_es": "Señor, ten piedad. (O bien: Kyrie, eléison)."
      },
      {
        "rubric_es": "El sacerdote prosigue:"
      },
      {
        "sp_es": "C.",
        "text_es": "Tú que has venido a llamar a los pecadores: Cristo ten piedad. (O bien: Christe, eléison)."
      },
      {
        "sp_es": "Todos",
        "text_es": "Cristo ten piedad. (O bien: Christe, eléison)."
      },
      {
        "rubric_es": "El sacerdote prosigue:"
      },
      {
        "sp_es": "C.",
        "text_es": "Tú que estás sentado a la derecha del Padre para interceder por nosotros: Señor, ten piedad. (O bien: Kyrie, eléison)."
      },
      {
        "rubric_es": "El pueblo responde:"
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
        "sp_es": "",
        "text_es": "Señor, ten piedad. (O bien: Kyrie, eléison)."
      },
      {
        "rubric_es": "El sacerdote concluye con la siguiente plegaria:"
      },
      {
        "sp_es": "C.",
        "text_es": "Dios todopoderoso tenga misericordia de nosotros, perdone nuestros pecados y nos lleve a la vida eterna."
      },
      {
        "sp_es": "Todos",
        "text_es": "Amén."
      },
      {
        "rubric_es": "7."
      },
      {
        "rubric_es": "Siguen las invocaciones Señor, ten piedad, a no ser que ya se hayan utilizado en alguna de las fórmulas del acto penitencial."
      },
      {
        "sp_es": "V/.",
        "text_es": "Señor, ten piedad."
      },
      {
        "sp_es": "R/.",
        "text_es": "Señor, ten piedad."
      },
      {
        "sp_es": "V/.",
        "text_es": "Cristo, ten piedad."
      },
      {
        "sp_es": "R/.",
        "text_es": "Cristo, ten piedad."
      },
      {
        "sp_es": "V/.",
        "text_es": "Señor, ten piedad."
      },
      {
        "sp_es": "R/.",
        "text_es": "Señor, ten piedad."
      },
      {
        "rubric_es": "7."
      },
      {
        "rubric_es": "A continuación, si está prescrito, se canta el himno: Gloria a Dios en el cielo, y en la tierra paz a los hombres que ama el Señor."
      },
      {
        "sp_es": "",
        "text_es": "Por tu inmensa gloria te alabamos, te bendecimos, te adoramos, te glorificamos, te damos gracias, Señor Dios, Rey celestial, Dios Padre todopoderoso."
      },
      {
        "sp_es": "",
        "text_es": "Señor, Hijo único, Jesucristo."
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
        "sp_es": "C.",
        "text_es": "Oremos."
      },
      {
        "sp_es": "",
        "text_es": "(Oración colecta del día)"
      },
      {
        "sp_es": "Todos",
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
        "text_es": "(Resumen)"
      },
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
        "text_es": "(Resumen)"
      },
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
        "rubric_es": "Después del Evangelio se pronuncia la homilía."
      },
      {
        "rubric_es": "Sigue la homilía."
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
            "sp_es": "C.",
            "text_es": "Creo en un solo Dios, Padre Todopoderoso, Creador del cielo y de la tierra. de todo lo visible y lo invisible."
          },
          {
            "sp_es": "",
            "text_es": "Creo en un solo Señor, Jesucristo, Hijo único de Dios, nacido del Padre antes de todos los siglos: Dios de Dios, Luz de Luz, Dios verdadero de Dios verdadero, engendrado, no creado, de la misma naturaleza del Padre, por quien todo fue hecho; que por nosotros, los hombres, y por nuestra salvación bajó del cielo,"
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
            "text_es": "se encarnó de María, la Virgen, y se hizo hombre; y por nuestra causa fue crucificado en tiempos de Poncio Pilato; padeció y fue sepultado, y resucitó al tercer día, según las Escrituras, y subió al cielo, y está sentado a la derecha del Padre; y de nuevo vendrá con gloria para juzgar a vivos y muertos, y su reino no tendrá fin."
          },
          {
            "sp_es": "",
            "text_es": "Creo en el Espíritu Santo, Señor y dador de vida, que procede del Padre y del Hijo, que con el Padre y el Hijo recibe una misma adoración y gloria, y que habló por los profetas."
          },
          {
            "sp_es": "",
            "text_es": "Creo en la Iglesia, que es una, santa, católica y apostólica."
          },
          {
            "sp_es": "",
            "text_es": "Confieso que hay un solo Bautismo para el perdón de los pecados."
          },
          {
            "sp_es": "",
            "text_es": "Espero la resurrección de los muertos y la vida del mundo futuro."
          },
          {
            "sp_es": "",
            "text_es": "Amén."
          },
          {
            "rubric_es": "19."
          }
        ]
      },
      "B": {
        "label": {
          "es": "Símbolo de los Apóstoles"
        },
        "lines": [
          {
            "rubric_es": "Para utilidad de los fieles, en lugar del símbolo niceno-constantinopolitano, la profesión de fe se puede hacer, especialmente en el tiempo de Cuaresma y en la Cincuentena pascual, con el siguiente símbolo llamado «de los apóstoles»:"
          },
          {
            "sp_es": "C.",
            "text_es": "Creo en Dios, Padre todopoderoso, Creador del cielo y de la tierra."
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
            "text_es": "que fue concebido por obra y gracia del Espíritu Santo, nació de santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado,"
          },
          {
            "sp_es": "",
            "text_es": "descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre todopoderoso."
          },
          {
            "sp_es": "",
            "text_es": "Desde allí ha de venir a juzgar a vivos y muertos."
          },
          {
            "sp_es": "",
            "text_es": "Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna."
          },
          {
            "sp_es": "",
            "text_es": "Amén."
          },
          {
            "rubric_es": "20."
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
        "rubric_es": "Sigue la oración universal u oración de los fieles."
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
        "sp_es": "",
        "text_es": "."
      },
      {
        "sp_es": "",
        "text_es": "Acabada la Liturgia de la palabra, los ministros colocan en el altar el corporal, el purificador, el cáliz y el misal; mientras tanto puede ejecutarse un canto adecuado."
      },
      {
        "rubric_es": "22."
      },
      {
        "sp_es": "",
        "text_es": "Conviene que los fieles expresan su participación en la ofrenda, bien sea llevando el pan y el vino para la celebración de la eucaristía, bien aportando otros dones para las necesidades de la Iglesia o de los pobres."
      },
      {
        "rubric_es": "23."
      },
      {
        "rubric_es": "El sacerdote se acerca al altar, toma la patena con el pan y, manteniéndola un poco elevada sobre el altar, dice en secreto:"
      },
      {
        "sp_es": "C.",
        "text_es": "Bendito seas, Señor, Dios del universo, por este pan, fruto de la tierra y del trabajo del hombre, que recibimos de tu generosidad y ahora te presentamos; él será para nosotros pan de vida."
      },
      {
        "rubric_es": "Después deja la patena con el pan sobre el corporal."
      },
      {
        "rubric_es": "Si no se canta durante la presentación de las ofrendas, el sacerdote puede decir en voz alta estas palabras; al final el pueblo aclama:"
      },
      {
        "sp_es": "Todos",
        "text_es": "Bendito seas por siempre, Señor."
      },
      {
        "rubric_es": "24."
      },
      {
        "rubric_es": "El diácono, o el sacerdote, echa vino y un poco de agua en el cáliz, diciendo en secreto:"
      },
      {
        "sp_es": "D.",
        "text_es": "El agua unido al vino sea signo de nuestra participación en la vida divina de quien ha querido compartir nuestra condición humana."
      },
      {
        "rubric_es": "25."
      },
      {
        "rubric_es": "Después el sacerdote toma el cáliz y, manteniéndolo un poco elevado sobre el altar, dice en secreto:"
      },
      {
        "sp_es": "C.",
        "text_es": "Bendito seas, Señor, Dios del universo, por este vino, fruto de la vid y del trabajo del hombre, que recibimos de tu generosidad y ahora te presentamos; él será para nosotros bebida de salvación."
      },
      {
        "rubric_es": "Después deja el cáliz sobre el corporal."
      },
      {
        "rubric_es": "Si no se canta durante la presentación de las ofrendas, el sacerdote puede decir en voz alta estas palabras; al final el pueblo puede aclamar:"
      },
      {
        "sp_es": "Todos",
        "text_es": "Bendito seas por siempre, Señor."
      },
      {
        "rubric_es": "26."
      },
      {
        "rubric_es": "A continuación, el sacerdote, inclinado, dice en secreto:"
      },
      {
        "sp_es": "C.",
        "text_es": "Acepta Señor, nuestro corazón contrito y nuestro espíritu humilde; que éste sea hoy nuestro sacrificio y que sea agradable en tu presencia, Señor, Dios nuestro."
      },
      {
        "rubric_es": "27."
      },
      {
        "sp_es": "",
        "text_es": "Y, si se juzga oportuno, inciensa las ofrendas y el altar."
      },
      {
        "rubric_es": "A continuación el diácono o un ministro inciensa al sacerdote y al pueblo."
      },
      {
        "rubric_es": "28."
      },
      {
        "rubric_es": "Luego el sacerdote, de pie a un lado del altar, se lava las manos, diciendo en secreto:"
      },
      {
        "sp_es": "C.",
        "text_es": "Lava del todo mi delito, Señor, limpia mi pecado."
      },
      {
        "rubric_es": "29."
      },
      {
        "rubric_es": "Después, de pie en el centro del altar y de cara al pueblo, extendiendo y juntando las manos, dice una de las siguientes fórmulas:"
      },
      {
        "sp_es": "Todos",
        "text_es": "Oren, hermanos, para que este sacrificio, mío y de ustedes, sea agradable a Dios, Padre todopoderoso."
      },
      {
        "rubric_es": "O bien:"
      },
      {
        "sp_es": "",
        "text_es": "En el momento de ofrecer el sacrificio de toda la Iglesia, oremos a Dios, Padre todopoderoso."
      },
      {
        "rubric_es": "O bien:"
      },
      {
        "sp_es": "",
        "text_es": "Oren, hermanos, para que, llevando al altar"
      },
      {
        "sp_es": "",
        "text_es": "los gozos y las fatigas de cada día nos dispongamos a ofrecer el sacrificio agradable a Dios, Padre todopoderoso."
      },
      {
        "sp_es": "Todos",
        "text_es": "El Señor reciba de tus manos este sacrificio, para alabanza y gloria de su nombre, para nuestro bien y el de toda su santa Iglesia."
      },
      {
        "rubric_es": "30."
      },
      {
        "rubric_es": "Luego el sacerdote, con las manos extendidas, dice la oración sobre las ofrendas."
      },
      {
        "rubric_es": "Al final el pueblo aclama:"
      },
      {
        "sp_es": "Todos",
        "text_es": "Amén."
      },
      {
        "rubric_es": "PLEGARIA EUCARÍSTICA"
      },
      {
        "rubric_es": "31."
      },
      {
        "rubric_es": "El sacerdote comienza la plegaria eucarística con el prefacio."
      },
      {
        "sp_es": "",
        "text_es": "Con las manos extendidas dice: El Señor esté con ustedes."
      },
      {
        "sp_es": "Todos",
        "text_es": "Y con tu espíritu."
      },
      {
        "rubric_es": "El sacerdote, elevando las manos, prosigue:"
      },
      {
        "sp_es": "C.",
        "text_es": "Levantemos el corazón."
      },
      {
        "sp_es": "Todos",
        "text_es": "Lo tenemos levantado hacia el Señor."
      },
      {
        "rubric_es": "El sacerdote, con las manos extendidas, añade:"
      },
      {
        "sp_es": "C.",
        "text_es": "Demos gracias al Señor, nuestro Dios."
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
        "sp_es": "Todos",
        "text_es": "Amén."
      }
    ]
  },
  {
    "id": "3.3 eucharist",
    "type": "selectable",
    "isEucharist": true,
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
    "common_dialogue": [
      {
        "sp_es": "V/.",
        "text_es": "El Señor esté con ustedes."
      },
      {
        "sp_es": "R/.",
        "text_es": "Y con tu espíritu."
      },
      {
        "sp_es": "V/.",
        "text_es": "Levantemos el corazón."
      },
      {
        "sp_es": "R/.",
        "text_es": "Lo tenemos levantado hacia el Señor."
      },
      {
        "sp_es": "V/.",
        "text_es": "Demos gracias al Señor, nuestro Dios."
      },
      {
        "sp_es": "R/.",
        "text_es": "Es justo y necesario."
      }
    ],
    "songs": {
      "cem_complete_prefaces": {
        "title": {
          "es": "Prefacios completos del Misal Romano para México"
        },
        "content": [
          {
            "sp_es": "Todos",
            "text_es": "Es justo y necesario."
          },
          {
            "rubric_es": "El sacerdote prosigue el Prefacio con las manos extendidas."
          },
          {
            "rubric_es": "Al final del Prefacio, junta las manos y en unión del pueblo, concluye el prefacio, cantando o diciendo en voz alta:"
          },
          {
            "sp_es": "Todos",
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
          },
          {
            "rubric_es": "32."
          },
          {
            "sp_es": "",
            "text_es": "En todas las Misas, el sacerdote puede cantar algunas partes de la Plegaria eucarística, especialmente las principales."
          },
          {
            "sp_es": "",
            "text_es": "En la Plegaria eucarística I, o Canon Romano, se puede omitir lo que se encuentra entre paréntesis."
          },
          {
            "rubric_es": "PREFACIO I DE ADVIENTO LAS DOS VENIDAS DE CRISTO"
          },
          {
            "rubric_es": "33."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las misas del tiempo, desde el primer domingo de Adviento hasta el 16 de diciembre, y en las restantes misas que se celebran durante este tiempo y que no tienen prefacio propio."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Quien al venir por vez primera en la humildad de nuestra carne, realizó el plan de redención trazado desde antiguo y nos abrió el camino de la salvación; para que cuando venga de nuevo en la majestad de su gloria, revelando así la plenitud de su obra, podamos recibir los bienes prometidos que ahora, en vigilante espera, confiamos alcanzar."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con los ángeles y arcángeles y con todos los coros celestiales, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo…"
          },
          {
            "rubric_es": "PREFACIO II DE ADVIENTO LA DOBLE ESPERA DE CRISTO"
          },
          {
            "rubric_es": "34."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las misas del tiempo, desde el 17 al 24 de diciembre, y en las restantes misas que se celebran durante este mismo tiempo y que no tienen prefacio propio."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo nuestro Señor."
          },
          {
            "sp_es": "",
            "text_es": "A quien todos los profetas anunciaron, la Virgen esperó con inefable amor de Madre; Juan lo proclamó ya próximo y lo señaló después entre los hombres."
          },
          {
            "sp_es": "",
            "text_es": "El mismo Señor nos concede ahora prepararnos con alegría al misterio de su nacimiento, para encontrarnos así cuando llegue, velando en oración y cantando su alabanza."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con los ángeles y los arcángeles y con todos los coros celestiales, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo…"
          },
          {
            "sp_es": "",
            "text_es": "PREFACIO III DE ADVIENTO CRISTO, SEÑOR Y JUEZ DE LA HISTORIA Este prefacio se dice en las misas del tiempo, desde el primer domingo de Adviento hasta el día 16 de diciembre, y en las restantes Misas que se celebran durante este mismo tiempo y no tienen prefacio propio."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo darte gracias, es nuestro deber cantar en tu honor himnos de bendición y de alabanza, Padre todopoderoso, principio y fin de todo lo creado."
          },
          {
            "sp_es": "",
            "text_es": "Tú nos has ocultado el día y la hora en que Cristo, tu Hijo, Señor y Juez de la historia, aparecerá revestido de poder y de gloria, sobre las nubes del cielo."
          },
          {
            "sp_es": "",
            "text_es": "En aquel día terrible y glorioso pasará la figura de este mundo y nacerán los cielos nuevos y la tierra nueva."
          },
          {
            "sp_es": "",
            "text_es": "El mismo Señor que se nos mostrará entonces lleno de gloria viene ahora a nuestro encuentro en cada hombre y en cada acontecimiento, para que lo recibamos en la fe y por el amor demos testimonio de la esperanza dichosa de su reino."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, mientras aguardamos su última venida, unidos a los ángeles y a los santos, cantamos el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "PREFACIO IV DE ADVIENTO MARÍA, NUEVA EVA Este prefacio se dice en las misas del tiempo, desde el día 17 al 24 de diciembre, y en las restantes misas que se celebran durante este mismo tiempo y no tienen prefacio propio."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo darte gracias, Señor, Padre santo, Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Te alabamos, te bendecimos y te glorificamos por el misterio de la Virgen Madre."
          },
          {
            "sp_es": "",
            "text_es": "Porque, si del antiguo adversario nos vino la ruina, en el seno virginal de la hija de Sión ha germinado aquel que nos nutre con el pan de los ángeles, y ha brotado para todo el género humano la salvación y la paz."
          },
          {
            "sp_es": "",
            "text_es": "La gracia que Eva nos arrebató nos ha sido devuelta en María."
          },
          {
            "sp_es": "",
            "text_es": "En ella, madre de todos los hombres, la maternidad, redimida del pecado y de la muerte, se abre al don de una vida nueva."
          },
          {
            "sp_es": "",
            "text_es": "Así, donde había crecido el pecado, se ha desbordado tu misericordia en Cristo, nuestro Salvador."
          },
          {
            "sp_es": "",
            "text_es": "Por eso nosotros, mientras esperamos la venida de Cristo, unido a los ángeles y a los santos, cantamos el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO I DE NAVIDAD CRISTO, LUZ DEL MUNDO"
          },
          {
            "rubric_es": "35."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las misas de Navidad y de su octava; durante la octava, se dice incluso en aquellas misas que, si se celebraran en otro tiempo tendrían prefacio propio, pero no en aquellas que tienen prefacio propio referido a las Personas divinas o sus misterios."
          },
          {
            "sp_es": "",
            "text_es": "También se dice en las ferias del tiempo de Navidad."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación, darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque gracias al misterio de la Palabra hecha carne, la luz de tu gloria brilló ante nuestros ojos con nuevo resplandor para que conociendo a Dios visiblemente, él nos lleve al amor de lo invisible."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con los ángeles y los arcángeles y con todos los coros celestiales, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "Si se usa el Canon romano, se dice Reunidos en comunión propio."
          },
          {
            "sp_es": "",
            "text_es": "En la misa que se celebra en la vigilia o en la noche de Navidad se dice: para celebrar la noche santa en que...; después se dice siempre: para celebrar el día santa en que..., hasta la octava de Navidad inclusiva."
          },
          {
            "rubric_es": "PREFACIO II DE NAVIDAD LA RESTAURACIÓN DEL UNIVERSO EN LA ENCARNACIÓN"
          },
          {
            "rubric_es": "36."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las misas de Navidad y de su octava; durante la octava, se dice incluso en aquellas misas que, si se celebraran en otro tiempo tendrían prefacio propio, pero no en aquellas que tienen prefacio propio referido a las Personas divinas o sus misterios."
          },
          {
            "sp_es": "",
            "text_es": "También se dice en las ferias del tiempo de Navidad."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo nuestro Señor."
          },
          {
            "sp_es": "",
            "text_es": "Porque en el misterio santo que hoy celebramos, Cristo, el Señor, sin dejar la gloria del Padre, se hace presente entre nosotros de un modo nuevo; el que era invisible en su naturaleza, se hice visible al adoptar la nuestra; el eterno, engendrado antes del tiempo, comparte nuestra vida temporal para asumir en sí todo lo creado, para reconstruir los que estaba caído y restaurar de esto modo el universo,"
          },
          {
            "sp_es": "",
            "text_es": "para llamar de nuevo al reino de los cielos al hombre sumergido el pecado."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, unidos a los coros angélicos, te aclamamos, llenos de alegría: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "Si se usa el Canon romano, se dice Reunidos en comunión propio."
          },
          {
            "sp_es": "",
            "text_es": "En la misa que se celebra en la vigilia o en la noche de Navidad se dice: para celebrar la noche santa en que...; después se dice siempre: para celebrar el día santa en que..., hasta la octava de Navidad inclusiva."
          },
          {
            "rubric_es": "PREFACIO III DE NAVIDAD EL INTERCAMBIO EFECTUADO EN LA ENCARNACIÓN DEL VERBO"
          },
          {
            "rubric_es": "37."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las misas de Navidad y de su octava; durante la octava, se dice incluso en aquellas misas que, si se celebraran en otro tiempo tendrían prefacio propio, pero no en aquellas que tienen prefacio propio referido a las Personas divinas o sus misterios."
          },
          {
            "sp_es": "",
            "text_es": "También se dice en las ferias del tiempo de Navidad."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación, darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo nuestro Señor."
          },
          {
            "sp_es": "",
            "text_es": "Por él, hoy resplandece ante el mundo el maravilloso intercambio que nos salva, pues al revestirse tu Hijo de nuestra frágil condición, no sólo confiere dignidad eterna a la naturaleza humana, sino que por esta unión admirable, nos hace a nosotros eternos."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, unidos a los coros angélicos, te aclamamos llenos de alegría: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "Si se usa el Canon romano, se dice Reunidos en comunión propio."
          },
          {
            "sp_es": "",
            "text_es": "En la misa que se celebra en la vigilia o en la noche de Navidad se dice: para celebrar la noche santa en que...; después se dice siempre: para celebrar el día santa en que..., hasta la octava de Navidad inclusiva."
          },
          {
            "rubric_es": "PREFACIO DE LA EPIFANÍA DEL SEÑOR CRISTO, LUZ DE LOS PUEBLOS"
          },
          {
            "rubric_es": "38."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las misas de la solemnidad de la Epifanía."
          },
          {
            "sp_es": "",
            "text_es": "También puede decirse este prefacio, o bien uno de los de Navidad, en los días que van desde la solemnidad de la Epifanía hasta el sábado antes del domingo del Bautismo del Señor."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque [hoy] has revelado en Cristo, para luz de los pueblos, el verdadero misterio de nuestra salvación; pues al manifestarse Cristo en nuestra carne mortal nos hiciste partícipes de la gloria de su inmortalidad."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con los ángeles y arcángeles y con todos los coros celestiales, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "En la solemnidad de la Epifanía, si se usa el Canon romano, se dice Reunidos en comunión propio."
          },
          {
            "rubric_es": "PREFACIO I DE CUARESMA SIGNIFICACIÓN ESPIRITUAL DE LA CUARESMA"
          },
          {
            "rubric_es": "39."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en el tiempo de Cuaresma, sobre todo en los domingos, cuando no corresponda decir un prefacio que sea más indicado."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Por él concedes a tus hijos anhelar, años tras año, con el gozo de habernos purificado, la solemnidad de la Pascua, para que, dedicados con mayor entrega a la alabanza divina y al amor fraterno, por la celebración de los misterios que nos dieron nuestra vida, lleguemos a ser con plenitud hijos de Dios."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con los ángeles y arcángeles y con todos los coro celestiales, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO II DE CUARESMA LA PENITENCIA ESPIRITUAL"
          },
          {
            "rubric_es": "40."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en el tiempo de Cuaresma, sobre todo en los domingos, cuando no corresponda decir un prefacio que sea más indicado."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque has establecido generosamente este tiempo de gracia para renovar en santidad a tus hijos, de modo que, libres de todo afecto desordenado, vivamos las realidades temporales como primicias de las realidades eternas."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con todos los ángeles y santos, te alabamos, proclamando sin cesar: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO III DE CUARESMA LOS FRUTOS DE LAS PRIVACIONES VOLUNTARIAS"
          },
          {
            "rubric_es": "41."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las Misas de los días feriales de Cuaresma y en los días penitenciales."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque con nuestras privaciones voluntarias nos enseñas a reconocer y agradecer tus dones, a dominar nuestro afán de suficiencia y a repartir nuestros bienes con los necesitados, imitando así tu generosidad."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con todos los ángeles y santos, te glorificamos y te aclamamos diciendo: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO IV DE CUARESMA LOS FRUTOS DEL AYUNO"
          },
          {
            "rubric_es": "42."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las Misas de los días feriales de Cuaresma y en los días penitenciales."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque con el ayuno corporal refrenas nuestras pasiones, elevas nuestro espíritu, nos das fuerza y recompensa, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Por él, los ángeles y los arcángeles y todos los coros celestiales celebran tu gloria, unidos en común alegría."
          },
          {
            "sp_es": "",
            "text_es": "Permítenos asociarnos a sus voces cantando humildemente tu alabanza: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "PREFACIO V DE CUARESMA EL CAMINO DEL ÉXODO EN EL DESIERTO CUARESMAL Este prefacio se dice en las misas de las ferias de Cuaresma."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo bendecir tu nombre, Padre rico en misericordia, ahora que, en nuestro itinerario hacia la luz pascual, seguimos los pasos de Cristo, maestro y modelo de la humanidad, reconciliada en el amor."
          },
          {
            "sp_es": "",
            "text_es": "Tú abres a la Iglesia el comino de un nuevo éxodo a través del desierto cuaresmal, para que, llegados a la montaña santa, con el corazón contrito y humillado, reavivemos nuestra vocación de pueblo de la alianza, convocado para bendecir tu nombre, escuchar tu Palabra y experimentar con gozo tus maravillas."
          },
          {
            "sp_es": "",
            "text_es": "Por estos signos de salvación, unidos a los ángeles, ministros de tu gloria, proclamamos el canto de tu alabanza: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO I DE LA PASIÓN DEL SEÑOR LA FUERZA DE LA CRUZ"
          },
          {
            "rubric_es": "43."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las ferias de la quinta semana de Cuaresma y en las misas de los misterios de la cruz y de la pasión del Señor."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque en la pasión salvadora de tu Hijo el universo aprende a proclamar tu grandeza y, por la fuerza de la cruz, el mundo es juzgado como reo y el Crucificado exaltado como juez poderoso."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, ahora nosotros, llenos de alegría, te aclamamos con los ángeles y los santos diciendo: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO II DE LA PASIÓN DEL SEÑOR LA VICTORIA DE LA PASIÓN"
          },
          {
            "rubric_es": "44."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice el lunes, martes y miércoles de la Semana Santa."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Porque se acercan ya los días santos de su pasión salvadora y de su resurrección gloriosa; en ellos celebramos su triunfo sobre el poder de nuestro enemigo y renovamos el misterio de nuestra redención."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, los ángeles te cantan con júbilo eterno y nosotros nos unimos a sus voces cantando humildemente tu alabanza: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO PASCUAL I EL MISTERIO PASCUAL"
          },
          {
            "rubric_es": "46."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice durante el tiempo pascual."
          },
          {
            "sp_es": "",
            "text_es": "En la misa de la Vigilia pascual se dice en esta noche; el día de Pascua y durante la octava: en este día; en las restantes misas: en este tiempo."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación glorificarte siempre, Señor; pero más que nunca en esta noche (este día) (este tiempo) en que Cristo, nuestra Pascua, ha sido inmolado."
          },
          {
            "sp_es": "",
            "text_es": "Porque él es el verdadero Cordero que quitó el pecado del mundo; muriendo destruyó nuestra muerte, y resucitando restauró la vida."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con esta efusión de gozo pascual, el mundo entero se desborda de alegría y también los coros celestiales, los ángeles y los arcángeles, cantan sin cesar el himno de tu gloria: Santo, Santo, Santo."
          },
          {
            "rubric_es": "Cuando se utiliza el Canon romano, se dice Reunidos en comunión y Acepta, Señor, en tu bondad, propios."
          },
          {
            "sp_es": "",
            "text_es": "En la misa de la Vigilia pascual se dice: para celebrar la noche santa..."
          },
          {
            "rubric_es": "PREFACIO PASCUAL II LA NUEVA VIDA EN CRISTO"
          },
          {
            "rubric_es": "46."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice durante el tiempo pascual."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación glorificarte siempre, Señor; pero más que nunca en este tiempo en que Cristo, nuestra Pascua, ha sido inmolado."
          },
          {
            "sp_es": "",
            "text_es": "Por él, los hijos de la luz amanecen a la vida eterna, los creyentes atraviesan los umbrales del reino de los cielos; porque en la muerte de Cristo nuestra muerte ha sido vencida y en su resurrección hemos resucitado todos."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con esta efusión de gozo pascual, el mundo entero se desborda de alegría, y también los coros celestiales, los ángeles y los arcángeles, cantan sin cesar el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO PASCUAL III CRISTO VIVO E INTERCESOR PERPETUO EN FAVOR NUESTRO"
          },
          {
            "rubric_es": "47."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice durante el tiempo pascual."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación glorificarte siempre, Señor; pero más que nunca en este tiempo en que Cristo, nuestra Pascua, ha sido inmolado."
          },
          {
            "sp_es": "",
            "text_es": "Porque él no cesa de ofrecerse por nosotros, de interceder por todos ante ti; inmolado, ya no vuelve a morir; sacrificado, vive para siempre."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con esta efusión de gozo pascual, el mundo entero se desborda de alegría, y también los coros celestiales, los ángeles y los arcángeles, cantan sin cesar el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO PASCUAL IV LA RESTAURACIÓN DEL UNIVERSO POR LE MISTERIO PASCUAL"
          },
          {
            "rubric_es": "48."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice durante el tiempo pascual."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación glorificarte siempre, Señor; pero más que nunca en este tiempo en que Cristo, nuestra Pascua, ha sido inmolado."
          },
          {
            "sp_es": "",
            "text_es": "Porque en él fue demolida nuestra antigua miseria, reconstruido cuanto estaba derrumbado y renovada en plenitud la salvación."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con esta efusión de gozo pascual, el mundo entero se desborda de alegría, y también los coros celestiales, los ángeles y los arcángeles, cantan sin cesar el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO PASCUAL V CRISTO, SACERDOTE Y VÍCTIMA"
          },
          {
            "rubric_es": "49."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice durante el tiempo pascual."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación glorificarte siempre, Señor; pero más que nunca en este tiempo en que Cristo, nuestra Pascua, ha sido inmolado."
          },
          {
            "sp_es": "",
            "text_es": "Porque él, con la inmolación de su cuerpo en la cruz, dio pleno cumplimiento a lo que anunciaban los sacrificios de la antigua alianza, y ofreciéndose a sí mismo por nuestra salvación, quiso ser al mismo tiempo sacerdote, víctima y altar."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con esta efusión de gozo pascual, el mundo entero se desborda de alegría, y también los coros celestiales, los ángeles y los arcángeles, cantan sin cesar el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO I DE LA ASCENSIÓN DEL SEÑOR EL MISTERIO DE LA ASCENSIÓN"
          },
          {
            "rubric_es": "50."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice el día de la Ascensión del Señor; puede decirse también en los días después de la Ascensión hasta el sábado antes de Pentecostés en aquellas misas que no tienen prefacio propio."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque Jesús, el Señor, el rey de la gloria, vencedor del pecado y de la muerte, ha ascendido [hoy] ante el asombro de los ángeles a lo más alto del cielo, como mediador entre Dios y los hombres, como juez de vivos y muertos."
          },
          {
            "sp_es": "",
            "text_es": "No se ha ido para desentenderse de este mundo, sino que ha querido precedernos como cabeza nuestra para que nosotros, miembros de su Cuerpo, vivamos con la ardiente esperanza de seguirlo en su reino."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con esta efusión de gozo pascual, el mundo entero se desborda de alegría, y también los coros celestiales, los ángeles y los arcángeles, cantan sin cesar el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "El día de la Ascensión, cuando se utiliza el Canon romano, se dice Reunidos en comunión propio."
          },
          {
            "rubric_es": "PREFACIO II DE LA ASCENSIÓN DEL SEÑOR EL MISTERIO DE LA ASCENSIÓN"
          },
          {
            "rubric_es": "51."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice el día de la Ascensión del Señor; puede decirse también en los días después de la Ascensión hasta el sábado antes de Pentecostés en aquellas misas que no tienen prefacio propio."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Que después de su resurrección se apareció visiblemente a todos sus discípulos y, ante sus ojos, fue elevado al cielo para hacernos compartir su divinidad."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con esta efusión de gozo pascual, el mundo entero se desborda de alegría, y también los coros celestiales, los ángeles y los arcángeles, cantan sin cesar el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "El día de la Ascensión, cuando se utiliza el Canon romano, se dice Reunidos en comunión propio."
          },
          {
            "sp_es": "",
            "text_es": "PREFACIO PARA DESPUÉS DE LA ASCENSIÓN EN LA ESPERA DE LA VENIDA DEL ESPÍRITU SANTO Este prefacio se dice en los días que siguen a la Ascensión hasta el sábado antes del domingo de Pentecostés."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, que todas las criaturas, en el cielo y en la tierra, se unan en tu alabanza, Dios todopoderoso y eterno, por Jesucristo, tu Hijo, Señor del Universo."
          },
          {
            "sp_es": "",
            "text_es": "El cual, habiendo entrado una vez para siempre en el santuario del cielo, ahora intercede por nosotros, como mediador que asegura la perenne efusión del Espíritu."
          },
          {
            "sp_es": "",
            "text_es": "Pastor y obispo de nuestras almas, nos invita a la plegaria unánime, a ejemplo de María y los Apóstoles, en la espera de un nuevo Pentecostés."
          },
          {
            "sp_es": "",
            "text_es": "Por este misterio de santificación y de amor, unidos a los ángeles y a los santos, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo...."
          },
          {
            "sp_es": "",
            "text_es": "PREFACIO I PARA LOS DOMINGOS DEL TIEMPO ORDINARIO EL MISTERIO PASCUAL HA HECHO DE NOSOTROS EL PUEBLO DE DIOS"
          },
          {
            "rubric_es": "52."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en los domingos del Tiempo Ordinario."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Quien, por su misterio pascual, realizó la obra maravillosa de llamarnos del pecado y de la muerte al honor de ser estirpe elegida, sacerdocio real, nación consagrada, pueblo de su propiedad, para que, trasladados de las tinieblas a tu luz admirable, proclamemos ante el mundo tus maravillas."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con los ángeles y arcángeles y con todos los coros celestiales, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "Los domingos en las plegarias eucarísticas I, II y III se puede hacer el recuerdo dominical propio."
          },
          {
            "rubric_es": "PREFACIO II PARA LOS DOMINGOS DEL TIEMPO ORDINARIO EL PLAN DIVINO DE LA SALVACIÓN"
          },
          {
            "rubric_es": "53."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en los domingos del Tiempo Ordinario."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "El cual, compadecido del extravío de los hombres, quiso nacer de la Virgen; sufriendo la cruz, nos libró de eterna muerte, y, resucitando, nos dio vida eterna."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con los ángeles y arcángeles y con todos los coros celestiales, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "Los domingos en las plegarias eucarísticas I, II y III se puede hacer el recuerdo dominical propio."
          },
          {
            "rubric_es": "PREFACIO III PARA LOS DOMINGOS DEL TIEMPO ORDINARIO EL HOMBRE SALVADO POR UN HOMBRE"
          },
          {
            "rubric_es": "54."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en los domingos del Tiempo Ordinario."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque reconocemos como obra de tu poder admirable no sólo haber socorrido nuestra débil naturaleza con la fuerza de tu divinidad, sino haber previsto el remedio en la misma debilidad humana, y de lo que era nuestra ruina haber hecho nuestra salvación, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Por él, los ángeles te cantan con júbilo eterno, y nosotros nos unimos a sus voces cantando humildemente tu alabanza: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "PREFACIO IV PARA LOS DOMINGOS DEL TIEMPO ORDINARIO LAS ETAPAS DE LA HISTORIA DE LA SALVACIÓN EN CRISTO"
          },
          {
            "rubric_es": "55."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en los domingos del Tiempo Ordinario."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Porque él, con su nacimiento, restauró nuestra naturaleza caída; con su muerte, destruyó nuestro pecado; al resucitar, nos dio nueva vida; y en su ascensión, nos abrió el camino de tu reino."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con los ángeles y los santos, te cantamos el himno de alabanza diciendo sin cesar: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "Los domingos en las plegarias eucarísticas I, II y III se puede hacer el recuerdo dominical propio."
          },
          {
            "rubric_es": "PREFACIO V PARA LOS DOMINGOS DEL TIEMPO ORDINARIO LAS MARAVILLAS DE LA CREACIÓN"
          },
          {
            "rubric_es": "56."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice los domingo del tiempo ordinario."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación, darte gracias siempre y en todo lugar, Señor, Padre Santo, Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque creaste el universo entero, estableciste el continuo retorno de las estaciones, y al hombre, formado a tu imagen y semejanza, sometiste las maravillas del mundo, para que, en nombre tuyo, dominara la creación, y, al contemplar tus grandezas, en todo momento te alabara, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "A quien cantan los ángeles y los arcángeles, proclamando sin cesar: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "Los domingos en las plegarias eucarísticas I, II y III se puede hacer el recuerdo dominical propio."
          },
          {
            "rubric_es": "PREFACIO VI PARA LOS DOMINGOS DEL TIEMPO ORDINARIO LA PRENDA DE NUESTRA PASCUA ETERNA"
          },
          {
            "rubric_es": "57."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en los domingos del tiempo ordinario."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "En ti vivimos, nos movemos y existimos; y, todavía peregrinos en este mundo, no sólo experimentamos las pruebas cotidianas de tu amor, sino que poseemos ya en prenda la vida futura, pues esperamos gozar de la Pascua eterna, porque tenemos las primicias del Espíritu por el que resucitaste a Jesús de entre los muertos."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, Señor, te damos gracias y proclamamos tu grandeza cantando con los ángeles: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "Los domingos en las plegarias eucarísticas I, II y III se puede hacer el recuerdo dominical propio."
          },
          {
            "rubric_es": "PREFACIO VII PARA LOS DOMINGOS DEL TIEMPO ORDINARIO LA SALVACIÓN, FRUTO DE LA OBEDIENCIA DE CRISTO"
          },
          {
            "rubric_es": "58."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en los domingos del Tiempo Ordinario."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación, darte gracias siempre y en todo lugar, Señor, Padre Santo, Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque tu amor al mundo fue tan misericordioso que no sólo nos enviaste como redentor a tu propio Hijo, sino que en todo lo quisiste semejante al hombre, menos en el pecado, para poder así amar en nosotros lo que amabas en él."
          },
          {
            "sp_es": "",
            "text_es": "Con su obediencia has restaurado aquellos dones que por nuestra desobediencia habíamos perdido."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, ahora nosotros, llenos de alegría, te aclamamos con los ángeles y los santos diciendo: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "Los domingos en las plegarias eucarísticas I, II y III se puede hacer el recuerdo dominical propio."
          },
          {
            "sp_es": "",
            "text_es": "PREFACIO VIII PARA LOS DOMINGOS DEL TIEMPO ORDINARIO LA IGLESIA UNIFICADA POR VIRTUD Y A IMAGEN DE LA TRINIDAD"
          },
          {
            "rubric_es": "59."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en los domingos del Tiempo Ordinario."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque has querido reunir de nuevo, por la sangre de tu Hijo y la fuerza del Espíritu, a los hijos dispersos por el pecado; de este modo tu Iglesia, unificada por virtud y a imagen de la Trinidad, aparece ante el mundo como cuerpo de Cristo y templo del Espíritu, para alabanza de tu infinita sabiduría."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, unidos a los coros angélicos, te aclamamos llenos de alegría: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "Los domingos en las plegarias eucarísticas I, II y III se puede hacer el recuerdo dominical propio."
          },
          {
            "sp_es": "",
            "text_es": "PREFACIO IX PARA LOS DOMINGOS DEL TIEMPO ORDINARIO (Prefacio II del Espíritu Santo) LA ACCIÓN DEL ESPÍRITU SANTO EN LA IGLESIA Este prefacio se dice en los domingo del tiempo ordinario."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque nos concedes en cada momento lo que más conviene y diriges sabiamente la nave de tu Iglesia, asistiéndola siempre con la fuerza del Espíritu Santo, para que, a impulso de su amor confiado, no abandone la plegaria en la tribulación, ni la acción de gracias en el gozo, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "A quien alaban los cielos y la tierra, los ángeles y los arcángeles, proclamando sin cesar: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "Los domingos en las plegarias eucarísticas I, II y III se puede hacer el recuerdo dominical propio."
          },
          {
            "sp_es": "",
            "text_es": "PREFACIO X PARA LOS DOMINGOS DEL TIEMPO ORDINARIO EL DÍA DEL SEÑOR Este prefacio se dice en los domingo del tiempo ordinario."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo bendecirte y darte gracias, Padre santo, fuente de la verdad y de la vida, porque nos has convocado en tu casa en este día de fiesta."
          },
          {
            "sp_es": "",
            "text_es": "Hoy, tu familia, reunida en la escucha de tu Palabra y en la comunión del pan único y partido, celebra el memorial del Señor resucitado, mientras espera el domingo sin ocaso en el que la humanidad entera entrará en tu descanso."
          },
          {
            "sp_es": "",
            "text_es": "Entonces contemplaremos tu rostro y alabaremos por siempre tu misericordia."
          },
          {
            "sp_es": "",
            "text_es": "Con esta gozosa esperanza, y unidos a los ángeles y a los santos, cantamos unánimes el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "Los domingos en las plegarias eucarísticas I, II y III se puede hacer el recuerdo dominical propio."
          },
          {
            "sp_es": "",
            "text_es": "PREFACIO DEL BAUTISMO EL BAUTISMO, INICIO DE LA VIDA NUEVA Este prefacio se puede decir en la misa del bautismo."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo darte gracias y exaltar tu nombre, Padre santo y misericordioso, por Jesucristo, Señor y Redentor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Te alabamos, te bendecimos y te glorificamos por el sacramento del nuevo nacimiento."
          },
          {
            "sp_es": "",
            "text_es": "Tú has querido que del corazón abierto de tu Hijo manara para nosotros el don nupcial del Bautismo, primera Pascua de los creyentes, puerta de nuestra salvación. inicio de la vida en Cristo, fuente de la humanidad nueva."
          },
          {
            "sp_es": "",
            "text_es": "Del agua y del Espíritu engendras en el seno de la Iglesia, virgen y madre, un pueblo de sacerdotes y reyes, congregado de entre todas las naciones en la unidad y santidad del amor."
          },
          {
            "sp_es": "",
            "text_es": "Por este don de tu benevolencia tu familia te adora y, unida a los ángeles y a los santos, canta el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "En las plegarias eucarísticas se hace recuerdo de los recién bautizados."
          },
          {
            "sp_es": "",
            "text_es": "PREFACIO DE LA CONFIRMACIÓN MARCADOS CON EL SELLO DEL ESPÍRITU Este prefacio se puede decir en la misa de la confirmación."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo darte gracias, es bueno cantar tu gloria, Padre santo, fuente y origen de todo bien."
          },
          {
            "sp_es": "",
            "text_es": "Tú, en el Bautismo das nueva vida a los creyentes y los haces partícipes del misterio pascual de tu Hijo."
          },
          {
            "sp_es": "",
            "text_es": "Tú los confirmas con el sello del Espíritu, mediante la imposición de manos y la unción del crisma."
          },
          {
            "sp_es": "",
            "text_es": "Así, renovados a imagen de Cristo, el ungido por el Espíritu Santo y enviado para anunciar la buena nueva de la salvación, los haces tus comensales en el banquete eucarístico y testigos de la fe en la Iglesia y en el mundo."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, nosotros, reunidos en esta asamblea festiva para celebrar los prodigios de un renovado Pentecostés, y unidos a los ángeles y a los santos, cantamos el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "En las plegarias eucarísticas se hace mención de los recién confirmados."
          },
          {
            "rubric_es": "PREFACIO I DE LA SANTÍSIMA EUCARISTÍA EL SACRIFICIO Y EL SACRAMENTO DE CRISTO"
          },
          {
            "rubric_es": "60."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en la misa de la Cena del Señor; puede decirse también en la solemnidad del Cuerpo y Sangre de Cristo y en las misas votivas de la Santísima Eucaristía."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro, verdadero y único sacerdote."
          },
          {
            "sp_es": "",
            "text_es": "El cual, al instituir el sacrificio de la eterna alianza, se ofreció a sí mismo como víctima de salvación, y nos mandó perpetuar esta ofrenda en conmemoración suya."
          },
          {
            "sp_es": "",
            "text_es": "Su carne, inmolada por nosotros, es alimento que nos fortalece; su sangre, derramada por nosotros, es bebida que nos purifica."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con los ángeles y los arcángeles y con todos los coros celestiales, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "En la misa de la Cena del Señor, cuando se utiliza el Canon romano, se dice Reunidos en comunión, Acepta, Señor, en tu bondad y Él cual, la víspera de su Pasión propios."
          },
          {
            "sp_es": "",
            "text_es": "PREFACIO II DE LA SANTÍSIMA EUCARISTÍA LOS FRUTOS DE LA SANTÍSIMA EUCARISTÍA Este prefacio se dice en la solemnidad del Cuerpo y Sangre de Cristo y en las misas votivas de la Santísima Eucaristía."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación, darte gracias siempre y en todo lugar, Señor, Padre Santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "El cual, en la última cena con los apóstoles, para perpetuar su pasión salvadora, se entregó a sí mismo como Cordero inmaculado y Eucaristía perfecta."
          },
          {
            "sp_es": "",
            "text_es": "Con este sacramento alimentas y santificas a tus fieles, para que una misma fe ilumine y un mismo amor congregue a todos los hombres que habitan un mismo mundo."
          },
          {
            "sp_es": "",
            "text_es": "Así, pues, nos reunimos en torno a la mesa de este sacramento admirable, para que la abundancia de tu gracia nos lleve a poseer la vida celestial."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, Señor, todas tus criaturas, en el cielo y en la tierra, te adoran cantando un cántico nuevo; y también nosotros, con los ángeles, te aclamamos por siempre diciendo: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "PREFACIO III DE LA SANTÍSIMA EUCARISTÍA LA EUCARISTÍA, VIÁTICO PARA LA PASCUA ETERNA Este prefacio se puede decir en la misa del viático."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario darte gracias, es bueno bendecir tu nombre, Padre santo, Dios de misericordia y de paz."
          },
          {
            "sp_es": "",
            "text_es": "Porque has querido que tu Hijo, obediente hasta la muerte de cruz, nos precediera en el camino de retorno a ti, término de toda esperanza humana."
          },
          {
            "sp_es": "",
            "text_es": "En la Eucaristía, testamento de su amor, él se hace comida y bebida espiritual, para alimentarnos en nuestro viaje hacia la Pascua eterna."
          },
          {
            "sp_es": "",
            "text_es": "Con esta prenda de la resurrección futura, en la esperanza participamos ya de la mesa gloriosa de tu reino y, unidos a los ángeles y a los santos, proclamamos el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "PREFACIO DE LA PENITENCIA EL SACRAMENTO DE LA RECONCILIACIÓN EN EL ESPÍRITU Este prefacio se puede decir en el tiempo de Cuaresma."
          },
          {
            "rubric_es": "Si dice también en las misas de reconciliación y en las otras misas de carácter penitencial."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo alabarte y darte gracias, Padre santo, Dios todopoderoso, por tus beneficios, sobre todo por la gracia del perdón."
          },
          {
            "sp_es": "",
            "text_es": "Al hombre, náufrago a causa del pecado, con el sacramento de la reconciliación le abres el puerto de la misericordia y de la paz, en Cristo muerto y resucitado."
          },
          {
            "sp_es": "",
            "text_es": "Con el poder de tu Espíritu, has dispuesto para la Iglesia, santa y al mismo tiempo necesitada de penitencia, una segunda tabla de salvación después del Bautismo, y así la renuevas incesantemente, para congregarla en el banquete festivo de tu amor."
          },
          {
            "sp_es": "",
            "text_es": "Por ese don de tu benevolencia, unidos a los ángeles y a los santos, contamos, a una voz, el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "PREFACIO DE LA UNCIÓN DE ENFERMOS EL SUFRIMIENTO, PARTICIPACIÓN EN LA PASCUA DE CRISTO Este prefacio se puede decir en las misas de unción de los enfermos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo darte gracias, Dios de misericordia, Señor todopoderoso, por Jesucristo, Señor y Redentor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Porque has querido que tu único Hijo, autor de la vida, médico de los cuerpos y de las almas, tomase sobre sí nuestras debilidades, para socorrernos en los momentos de prueba y santificarnos en la experiencia del dolor."
          },
          {
            "sp_es": "",
            "text_es": "En el signo sacramental de la Unción, por la oración de la Iglesia, nos librar del pecado, nos confortas con la gracia del Espíritu Santo y nos haces partícipes de la victoria pascual."
          },
          {
            "sp_es": "",
            "text_es": "Por este signo de tu benevolencia, unidos a los ángeles y a los santos, cantamos, a una voz, el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO I DE SANTA MARÍA VIRGEN LA MATERNIDAD DE MARÍA"
          },
          {
            "rubric_es": "62."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las misas de la Santísima Virgen, añadiendo en su lugar (***) la mención de la celebración del día, según se indica en cada misa."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Y alabar, bendecir y proclamar tu gloria en la (***) de santa María, siempre virgen."
          },
          {
            "sp_es": "",
            "text_es": "Porque ella concibió a tu único Hijo por obra del Espíritu Santo, y, sin perder la gloria de su virginidad, derramó sobre el mundo la luz eterna, Jesucristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Por él, los ángeles y los arcángeles y todos los coros celestiales celebran tu gloria, unidos en común alegría."
          },
          {
            "sp_es": "",
            "text_es": "Permítenos asociarnos a sus voces cantando humildemente tu alabanza: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO II DE SANTA MARÍA VIRGEN LA IGLESIA ALABA A DIOS INSPIRÁNDOSE EN LAS PALABRAS DE MARÍA"
          },
          {
            "rubric_es": "63."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las Misas de la Santísima Virgen."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias, Señor, y proclamar tus maravillas en la perfección de tus santos; y, al conmemorar a la bienaventurada Virgen María, exaltar especialmente tu generosidad inspirándonos en su mismo cántico de alabanza."
          },
          {
            "sp_es": "",
            "text_es": "En verdad hiciste obras grandes en favor de todos los pueblos, y has mantenido tu misericordia de generación en generación, cuando, al mirar la humillación de tu esclava, por ella nos diste al autor de la vida, Jesucristo, Hijo tuyo y Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Por él, los ángeles y los arcángeles te adoran eternamente, gozosos en tu presencia."
          },
          {
            "sp_es": "",
            "text_es": "Permítenos unirnos a sus voces cantando tu alabanza: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "PREFACIO III DE SANTA MARÍA VIRGEN MARÍA, MODELO Y MADRE DE LA IGLESIA Este prefacio se dice en las misas de la Santísima Virgen."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre Santo, Dios todopoderoso y eterno, y alabarte debidamente en esta celebración en honor de la Virgen María."
          },
          {
            "sp_es": "",
            "text_es": "Ella, al aceptar tu Palabra con limpio corazón, mereció concebirla en su seno virginal, y al dar a luz a su Hijo preparó el nacimiento de la Iglesia."
          },
          {
            "sp_es": "",
            "text_es": "Ella, al recibir junto a la cruz el testamento de tu amor divino, tomó como hijos a todos los hombres, nacidos a la vida sobrenatural por la muerte de Cristo."
          },
          {
            "sp_es": "",
            "text_es": "Ella, en la espera pentecostal del Espíritu, al unir sus oraciones a las de los discípulos, se convirtió en el modelos de la Iglesia suplicante."
          },
          {
            "sp_es": "",
            "text_es": "Desde su asunción a los cielos, acompaña con amor materno a la Iglesia peregrina, y protege sus pasos hacia la patria celeste, hasta la venida gloriosa del Señor."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con todos los ángeles y santos, te alabamos diciendo sin cesar: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "PREFACIO IV DE SANTA MARÍA VIRGEN MARÍA, SIGNO DE CONSUELO Y DE ESPERANZA Este prefacio se dice en las misas de la Santísima Virgen."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo darte gracias, es bueno cantar tu gloria, Padre Santo, Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Te alabamos y te bendecimos, por Jesucristo, tu Hijo, en esta fiesta (memoria) de la bienaventurada Virgen María."
          },
          {
            "sp_es": "",
            "text_es": "Ella, como humilde sierva, escuchó tu palabra y la conservó en su corazón; admirablemente unida al misterio de la redención, perseveró con los apóstoles en la plegaria, mientras esperaban al Espíritu Santo, y ahora brilla en nuestro camino como signo de consuelo y de firme esperanza."
          },
          {
            "sp_es": "",
            "text_es": "Por este don de tu benevolencia, unidos a los ángeles y a los santos, te entonamos nuestro canto y proclamamos tu alabanza: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "PREFACIO V DE SANTA MARÍA VIRGEN MARÍA, IMAGEN DE LA HUMANIDAD NUEVA Este prefacio se dice en las misas de la Santísima Virgen."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo darte gracias, Padre Santo, fuente de la vida y de la alegría."
          },
          {
            "sp_es": "",
            "text_es": "Porque en esta etapa final de la historia has querido revelarnos el misterio escondido desde siglos, para que así el mundo entero retorne a la vida y recobre la esperanza."
          },
          {
            "sp_es": "",
            "text_es": "En Cristo, nuevo Adán, y en María, nueva Eva, se revela el misterio de tu Iglesia, como primicia de la humanidad redimida."
          },
          {
            "sp_es": "",
            "text_es": "Por este inefable don la creación entera, con la fuerza del Espíritu Santo, emprende de nuevo su camino hacia la Pascua eterna."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, nosotros, unidos a los ángeles y a los santos, cantamos a una voz el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO I DE LOS APÓSTOLES LOS APÓSTOLES, PASTORES DEL PUEBLO DE DIOS"
          },
          {
            "rubric_es": "64."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las misas de los Apóstoles, principalmente en las de san Pedro y san Pablo."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso, Pastor eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque no abandonas nunca a tu rebaño, sino que por medio de los santos Apóstoles lo proteges y conservas, y quieres que tenga siempre por guía la palabra de aquellos mismos pastores a quienes tu Hijo dio la misión de anunciar el Evangelio."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con los ángeles y arcángeles y con todos los coros celestiales, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO II DE LOS APÓSTOLES LOS APÓSTOLES, FUNDAMENTO DE LA IGLESIA Y TESTIMONIO PARA EL MUNDO"
          },
          {
            "rubric_es": "65."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las misas de los Apóstoles y de los Evangelistas."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Porque has cimentado tu Iglesia sobre la roca de los Apóstoles, para que permanezca en el mundo como signo de santidad y señale a todos los hombres el camino que nos lleva hacia ti."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, Señor, con todos los ángeles te alabamos ahora y por siempre diciendo con humilde fe: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO I DE LOS SANTOS LA GLORIA DE LOS SANTOS"
          },
          {
            "rubric_es": "66."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las misas de «Todos los Santos», de los santos Patronos y Titulares de la iglesia, y en las solemnidades y fiestas de los Santos, a no ser que haya que decir un prefacio más propio."
          },
          {
            "rubric_es": "Se puede decir también en las memorias de los Santos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo darte gracias y deber nuestro glorificarte, Padre Santo, porque manifiestas tu gloria en la asamblea de los santos, y, al coronar sus méritos, coronas tu propia obra."
          },
          {
            "sp_es": "",
            "text_es": "Tú nos ofreces el ejemplo de su vida, la ayuda de su intercesión y la participación en su destino, para que, animados por su presencia alentadora, luchemos sin desfallecer en la carrera y alcancemos, como ellos, la corona de gloria que no se marchita, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con los ángeles y arcángeles y con la multitud de los santos, cantamos sin cesar el himno de alabanza: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO II DE LOS SANTOS EFICACIA DE LA ACCIÓN DE LOS SANTOS"
          },
          {
            "rubric_es": "67."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las misas de «Todos los Santos», de los santos Patronos y Titulares de la iglesia, y en las solemnidades y fiestas de los Santos, a no ser que haya que decir un prefacio más propio."
          },
          {
            "rubric_es": "Se puede decir también en las memorias de los Santos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Porque mediante el testimonio admirable de tus santos fecundas sin cesar a tu Iglesia con vitalidad siempre nueva, dándonos así pruebas evidentes de tu amor."
          },
          {
            "sp_es": "",
            "text_es": "Ellos nos estimulan con su ejemplo en el camino de la vida y nos ayudan con su intercesión."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, ahora, nosotros, llenos de alegría, te aclamamos con los ángeles y los santos diciendo: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO I DE LOS SANTOS MÁRTIRES SIGNIFICADO Y EJEMPLARIDAD DEL MARTIRIO"
          },
          {
            "rubric_es": "68."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las solemnidades y fiestas de los santos Mártires."
          },
          {
            "rubric_es": "Se puede decir también en las memorias de los mismos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque la sangre del glorioso mártir san (santa) N., derramada, como la de Cristo, para confesar tu nombre, manifiesta las maravillas de tu poder; pues en su martirio, Señor, has sacado fuerza de lo débil, haciendo de la fragilidad tu propio testimonio; por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, como los ángeles te cantan en el cielo, así nosotros en la tierra te aclamamos diciendo sin cesar: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO II DE LOS SANTOS MÁRTIRES SIGNIFICADO Y EJEMPLARIDAD DEL MARTIRIO"
          },
          {
            "rubric_es": "69."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las solemnidades y fiestas de los santos Mártires."
          },
          {
            "rubric_es": "Se puede decir también en las memorias de los mismos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque al alabar nosotros a los santos mártires, tu eres glorificado ya que todo lo que concierne a su pasión es obra admirable de tu poder."
          },
          {
            "sp_es": "",
            "text_es": "En efecto, tu misericordiosamente les proporcionas el ardor de la fe, tu les otorgas la firmeza de la perseverancia y les concedes la victoria en la batalla, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, tus creaturas del cielo y de la tierra te adoran cantando un cántico nuevo, y nosotros con todos los coros de los ángeles, proclamamos tu gloria diciendo: Santo, Santo, Santo…"
          },
          {
            "rubric_es": "PREFACIO DE LOS SANTOS PASTORES LA PRESENCIA DE LOS SANTOS PASTORES EN LA IGLESIA"
          },
          {
            "rubric_es": "70."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las solemnidades y fiestas de los santos Pastores."
          },
          {
            "rubric_es": "Se puede decir también en las memorias de los mismos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre Santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Porque nos concedes la alegría de celebrar hoy la fiesta de san N., fortaleciendo a tu Iglesia con el ejemplo de su vida, instruyéndola con su palabra y protegiéndola con su intercesión."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con los ángeles y los santos, te cantamos el himno de alabanza diciendo sin cesar: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO DE SANTAS VÍRGENES Y RELIGIOSOS SIGNIFICADO DE LA VIDA CONSAGRADA EXCLUSIVA A DIOS"
          },
          {
            "rubric_es": "71."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las solemnidades y fiestas de las santas Vírgenes y de los santos Religiosos."
          },
          {
            "rubric_es": "Se puede decir también en las memorias de los mismos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, que te alaben, Señor, tus criaturas del cielo y de la tierra, y, al recordar a los santos que por el reino de los cielos se consagraron a Cristo, celebremos la grandeza de tus designios."
          },
          {
            "sp_es": "",
            "text_es": "En ellos recobra el hombre la santidad primera, que de ti había recibido, y gusta ya en la tierra los dones reservados para el cielo."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con todos los ángeles y santos, te alabamos, proclamando sin cesar: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO COMÚN I EL UNIVERSO RESTAURADO EN CRISTO"
          },
          {
            "rubric_es": "72."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar un prefacio del tiempo."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "A quien hiciste fundamento de todo y de cuya plenitud quisiste que participáramos todos."
          },
          {
            "sp_es": "",
            "text_es": "Siendo él de condición divina se despojó de su rango, y por su sangre derramada en la cruz puso en paz todas las cosas; y así, constituido Señor del universo, es fuente de salvación eterna para cuantos creen en él."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con los ángeles y arcángeles y con todos los coros celestiales, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO COMÚN II LA SALVACIÓN POR CRISTO"
          },
          {
            "rubric_es": "73."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar un prefacio del tiempo."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, que por amor creaste al hombre, y, aunque condenado justamente, con tu misericordia lo redimiste, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Por él, los ángeles y los arcángeles y todos los coros celestiales celebran tu gloria, unidos en común alegría."
          },
          {
            "sp_es": "",
            "text_es": "Permítenos asociarnos a sus voces cantando humildemente tu alabanza: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO COMÚN III ALABANZA A DIOS QUE NOS CREÓ Y NOS HA REDIMIDO EN CRISTO"
          },
          {
            "rubric_es": "74."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar un prefacio del tiempo."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque has querido ser, por medio de tu amado Hijo, no sólo el creador del género humano, sino también el autor generoso de la nueva creación."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con razón te sirven todas las criaturas, con justicia te alaban todos los redimidos y unánimes te bendicen tus santos."
          },
          {
            "sp_es": "",
            "text_es": "Con ellos, unidos a los ángeles, nosotros queremos celebrarte y te alabamos diciendo: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO COMÚN IV NUESTRA MISMA ACCIÓN DE GRACIAS ES UN DON DE DIOS"
          },
          {
            "rubric_es": "75."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar un prefacio del tiempo."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Pues aunque no necesitas nuestra alabanza, ni nuestras bendiciones te enriquecen, tú inspiras y haces tuya nuestra acción de gracias, para que nos sirva de salvación, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "A quien alaban los ángeles y los arcángeles, proclamando sin cesar: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO COMÚN V PROCLAMACIÓN DEL MISTERIO DE CRISTO"
          },
          {
            "rubric_es": "76."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar un prefacio del tiempo."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación, darte gracias siempre y en todo lugar Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Porque, unidos en la caridad, celebramos la muerte de tu Hijo, con fe viva proclamamos su resurrección, y con esperanza firme anhelamos su venida gloriosa."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con todos los ángeles y santos, te alabamos, proclamando sin cesar: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO COMÚN VI EL MISTERIO DE LA SALVACIÓN EN CRISTO"
          },
          {
            "rubric_es": "77."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio, tomado de la Plegaria eucarística II, se dice en las misas que carecen de prefacio propio y no deben tomar un prefacio del tiempo."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación, darte gracias, Padre santo, siempre y en todo lugar, por Jesucristo, tu Hijo amado."
          },
          {
            "sp_es": "",
            "text_es": "Por él, que es tu palabra, hiciste todas las cosas; tú nos lo enviaste para que, hecho hombre por obra del Espíritu Santo y nacido de María la Virgen, fuera nuestro Salvador y Redentor."
          },
          {
            "sp_es": "",
            "text_es": "Él, en cumplimiento de tu voluntad, para destruir la muerte y manifestar la resurrección, extendió sus brazos en la cruz, y así adquirió para ti un pueblo santo."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con los ángeles y los santos, cantamos tu gloria diciendo: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "PREFACIO COMÚN VII CRISTO, HUÉSPED Y PEREGRINO EN MEDIO DE NOSOTROS Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar un prefacio del tiempo."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo darte gracias, Señor, Padre santo, Dios de la alianza y de la paz."
          },
          {
            "sp_es": "",
            "text_es": "Porque tú llamaste a Abrahán y le mandaste salir de su tierra, para constituirlo padre de todas las naciones."
          },
          {
            "sp_es": "",
            "text_es": "Tú suscitaste a Moisés para librar a tu pueblo y guiarlo a la tierra de promisión."
          },
          {
            "sp_es": "",
            "text_es": "Tú, en la etapa final de la historia, has enviado a tu Hijo, como huésped y peregrino en medio de nosotros, para redimirnos del pecado y de la muerte; y has derramado el Espíritu, para hacer de todas las naciones un solo pueblo nuevo, que tiene como meta, tu reino, como estado, la libertad de tus hijos, como ley, el precepto del amor."
          },
          {
            "sp_es": "",
            "text_es": "Por estos dones de tu benevolencia, unidos a los ángeles y a los santos, cantamos con gozo el himno de tu gloría: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "PREFACIO COMÚN VIII JESÚS, BUEN SAMARITANO Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar un prefacio del tiempo."
          },
          {
            "sp_es": "",
            "text_es": "Especialmente es recomendable usarlo en el domingo XV del tiempo ordinario del año C y el lunes de la semana XXVII del tiempo ordinario."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo darte gracias y deber nuestro alabarte, Padre santo, Dios todopoderoso y eterno, en todos los momentos y circunstancias de la vida, en la salud y en la enfermedad, en el sufrimiento y en el gozo, por tu siervo, Jesús, nuestro Redentor."
          },
          {
            "sp_es": "",
            "text_es": "Porque él, en su vida terrena, pasó haciendo el bien y curando a los oprimidos por el mal."
          },
          {
            "sp_es": "",
            "text_es": "También hoy, como buen samaritano, se acerca a todo hombre que sufre en su cuerpo o en su espíritu, y cura sus heridas con el aceite del consuelo y el vino de la esperanza."
          },
          {
            "sp_es": "",
            "text_es": "Por este don de tu gracia, incluso cuando nos vemos sumergidos en la noche del dolor, vislumbramos la luz pascual en tu Hijo, muerto y resucitado."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, unidos a los ángeles y santos, cantamos a una voz el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "sp_es": "",
            "text_es": "PREFACIO COMÚN IX LA GLORIA DE DIOS ES EL HOMBRE VIVIENTE Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar un prefacio del tiempo."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Tú eres el Dios vivo y verdadero; el universo está lleno de tu presencia, pero sobre todo has dejado la huella de tu gloria en el hombre creado a tu imagen."
          },
          {
            "sp_es": "",
            "text_es": "Tú lo llamas a cooperar con el trabajo cotidiano en el proyecto de la creación y le das tu Espíritu para que sea artífice de justicia y de paz, en Cristo, el hombre nuevo."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, unidos a los ángeles y a los santos, cantamos con alegría el himno de tu alabanza: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO I DE DIFUNTOS LA ESPERANZA DE LA RESURRECCIÓN EN CRISTO"
          },
          {
            "rubric_es": "78."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las misas de difuntos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "En él brilla la esperanza de nuestra feliz resurrección; y así, aunque la certeza de morir nos entristece, nos consuela la promesa de la futura inmortalidad."
          },
          {
            "sp_es": "",
            "text_es": "Porque la vida de los que en ti creemos, Señor, no termina, se transforma; y, al deshacerse nuestra morada terrenal, adquirimos una mansión eterna en el cielo."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, con los ángeles y arcángeles y con todos los coros celestiales, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO II DE DIFUNTOS CRISTO HA MUERTO PARA NUESTRA VIDA"
          },
          {
            "rubric_es": "79."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las misas de difuntos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Porque él aceptó la muerte, uno por todos, para librarnos del morir eterno; es más, quiso entregar su vida para que todos tuviéramos vida eterna."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, unidos a los coros angélicos, te aclamamos llenos de alegría: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO III DE DIFUNTOS CRISTO, SALVACIÓN Y VIDA"
          },
          {
            "rubric_es": "80."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las misas de difuntos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro."
          },
          {
            "sp_es": "",
            "text_es": "Porque él es la salvación del mundo, la vida de los hombres, la resurrección de los muertos."
          },
          {
            "sp_es": "",
            "text_es": "Por él, los ángeles te cantan con júbilo eterno y nosotros nos unimos a sus voces cantando humildemente tu alabanza: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO IV DE DIFUNTOS LA VIDA TERRENA Y LA GLORIA CELESTE"
          },
          {
            "rubric_es": "81."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las misas de difuntos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno."
          },
          {
            "sp_es": "",
            "text_es": "Porque tu voluntad nos da la vida, tus decretos la dirigen y un mandato tuyo, en castigo del pecado, nos devuelve a la tierra de la que habíamos sido sacados."
          },
          {
            "sp_es": "",
            "text_es": "Y también te damos gracias porque, al redimirnos con la muerte de tu Hijo Jesucristo, por tu voluntad salvadora nos llevas a nueva vida para que tengamos parte en su gloriosa resurrección."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, como los ángeles te cantan en el cielo, así nosotros en la tierra te aclamamos diciendo sin cesar: Santo, Santo, Santo..."
          },
          {
            "rubric_es": "PREFACIO V DE DIFUNTOS NUESTRA RESURRECCIÓN POR MEDIO DE LA VICTORIA DE CRISTO"
          },
          {
            "rubric_es": "82."
          },
          {
            "sp_es": "",
            "text_es": "Este prefacio se dice en las misas de difuntos."
          },
          {
            "sp_es": "",
            "text_es": "En verdad es justo darte gracias y deber nuestro glorificarte, Padre santo."
          },
          {
            "sp_es": "",
            "text_es": "Porque si el morir se debe al hombre, el ser llamados a la vida con Cristo es obra gratuita de tu amor, ya que, habiendo muerto por el pecado, hemos sido redimidos por la victoria de tu Hijo."
          },
          {
            "sp_es": "",
            "text_es": "Por eso, como los ángeles te cantan en el cielo, así nosotros te proclamamos en la tierra, diciendo sin cesar: Santo, Santo, Santo..."
          }
        ]
      }
    },
    "sanctus": [
      {
        "sp_es": "Todos",
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
    "forms": {
      "1": [
        {
          "sp_es": "",
          "text_es": "PLEGARIA EUCARÍSTICA I o CANON ROMANO"
        },
        {
          "rubric_es": "83."
        },
        {
          "sp_es": "V/.",
          "text_es": "El Señor esté con ustedes."
        },
        {
          "sp_es": "R/.",
          "text_es": "Y con tu espíritu."
        },
        {
          "sp_es": "V/.",
          "text_es": "Levantemos el corazón."
        },
        {
          "sp_es": "R/.",
          "text_es": "Lo tenemos levantado hacia el Señor."
        },
        {
          "sp_es": "V/.",
          "text_es": "Demos gracias al Señor, nuestro Dios."
        },
        {
          "sp_es": "R/.",
          "text_es": "Es justo y necesario."
        },
        {
          "rubric_es": "Sigue el prefacio, dicho según las rúbricas, que concluye: Santo, Santo, Santo es el Señor, Dios del universo."
        },
        {
          "sp_es": "",
          "text_es": "Llenos están el cielo y la tierra de tu gloria."
        },
        {
          "sp_es": "",
          "text_es": "Hosanna. en el cielo."
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
          "sp_es": "",
          "text_es": "En la plegaria eucarística primera, o Canon Romano, pueden omitirse aquellas partes que están incluidas dentro de corchetes."
        },
        {
          "rubric_es": "84."
        },
        {
          "rubric_es": "El sacerdote, con las manos extendidas, dice:"
        },
        {
          "sp_es": "C.",
          "text_es": "CP P adre misericordioso, te pedimos humildemente por Jesucristo, tu Hijo, nuestro Señor, Junta las manos y dice: que aceptes y bendigas Traza, una sola vez, el signo de la cruz sobre el pan y el cáliz conjuntamente, diciendo: estos ✠ dones, este sacrificio santo y puro que te ofrecemos, Con las manos extendidas, prosigue: ante todo, por tu Iglesia santa y católica,"
        },
        {
          "sp_es": "",
          "text_es": "para que le concedas la paz, la protejas, la congregues en la unidad"
        },
        {
          "rubric_es": "y la gobiernes en el mundo entero, con tu servidor el Papa N., con nuestro obispo N., Puede hacerse mención de los Obispos coadjutores o auxiliares. ________________________________ El Obispo, cuando celebra en su diócesis, dice:"
        },
        {
          "sp_es": "C.",
          "text_es": "conmigo, indigno siervo tuyo, Cuando celebra un Obispo que no es el ordinario diocesano, dice: con mi hermano N., Obispo de esta Iglesia de N., conmigo,"
        },
        {
          "sp_es": "",
          "text_es": "indigno siervo tuyo, ________________________________ y todos los demás Obispos que, fieles a la verdad, promueven la fe católica y apostólica."
        },
        {
          "rubric_es": "85."
        },
        {
          "sp_es": "",
          "text_es": "Conmemoración de los vivos C1 Acuérdate, Señor, de tus hijos N. y N."
        },
        {
          "rubric_es": "Puede decir los nombres de aquellos por quienes tiene intención de orar, o bien junta las manos y ora por ellos unos momentos."
        },
        {
          "rubric_es": "Después, con las manos extendidas, prosigue: y de todos los aquí reunidos, cuya fe y entrega bien conoces; por ellos y todos los suyos, por el perdón de sus pecados y la salvación que esperan, te ofrecemos, y ellos mismos te ofrecen, este sacrificio de alabanza, a ti, eterno Dios, vivo y verdadero."
        },
        {
          "rubric_es": "86."
        },
        {
          "sp_es": "",
          "text_es": "Conmemoración de los santos C2 Reunidos en comunión con toda la Iglesia, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor;* la de su esposo, San José; la de los santos apóstoles y mártires"
        },
        {
          "sp_es": "",
          "text_es": "Pedro y Pablo, Andrés, [Santiago y Juan, Tomás, Santiago y Felipe, Bartolomé, Mateo, Simón y Tadeo; Lino, Cleto, Clemente, Sixto, Cornelio, Cipriano, Lorenzo, Crisógono, Juan y Pablo, Cosme y Damián,] y la de todos los santos; por sus méritos y oraciones concédenos en todo tu protección. [Por Cristo nuestro Señor."
        },
        {
          "sp_es": "",
          "text_es": "Amén.] ____________________________________ REUNIDOS EN COMUNIÓN PROPIOS En los domingos, cuando no hay otro Reunidos en comunión propio: Reunidos en comunión con toda la Iglesia, para celebrar el domingo, día en que Cristo ha vencido a la muerte y nos ha hecho partícipes de su vida inmortal, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo,"
        },
        {
          "sp_es": "",
          "text_es": "nuestro Dios y Señor;* En la Natividad del Señor y durante su octava: Reunidos en comunión con toda la Iglesia para celebrar (la noche santa) el día santo en que la Virgen María, conservando intacta su virginidad, dio a luz al Salvador del mundo, veneramos la memoria, ante todo, de esta gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor;* En la Epifanía del Señor:"
        },
        {
          "rubric_es": "Reunidos en comunión con toda la Iglesia para celebrar el día santo en que tu único Hijo, eterno como tú en la gloria, se manifestó en la verdad de nuestra carne, hecho hombre como nosotros, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor;* En el Jueves Santo:"
        },
        {
          "rubric_es": "Reunidos en comunión con toda la Iglesia para celebrar el día santo en que nuestro Señor Jesucristo fue entregado por nosotros, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor;*"
        },
        {
          "sp_es": "",
          "text_es": "Desde la misa de la Vigilia Pascual hasta el Segundo Domingo de Pascua: Reunidos en comunión con toda la Iglesia para celebrar (la noche santa) el día santo de la resurrección de nuestro Señor Jesucristo según la carne, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor;* En la Ascensión del Señor:"
        },
        {
          "rubric_es": "Reunidos en comunión con toda la Iglesia para celebrar el día santo en que tu único Hijo, nuestro Señor Jesucristo, habiendo tomado nuestra débil condición humana, la exaltó a la derecha de tu gloria, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor;* En el Domingo de Pentecostés:"
        },
        {
          "rubric_es": "Reunidos en comunión con toda la Iglesia para celebrar el día de Pentecostés, en que el Espíritu Santo se manifestó a los apóstoles en lenguas de fuego, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor;* __________________________________"
        },
        {
          "rubric_es": "87."
        },
        {
          "sp_es": "",
          "text_es": "Con las manos extendidas prosigue: CP Acepta, Señor, en tu bondad, esta ofrenda de tus siervos y de toda tu familia santa; ordena en tu paz nuestros días, líbranos de la condenación eterna y cuéntanos entre tus elegidos."
        },
        {
          "sp_es": "",
          "text_es": "Junta las manos. [Por Cristo nuestro Señor."
        },
        {
          "sp_es": "",
          "text_es": "Amén.] __________________________________ En el Jueves Santo durante la Misa Vespertina de la Cena del Señor: Acepta, Señor, en tu bondad, esta ofrenda de tus siervos y de toda tu familia santa, que te presentamos en el día mismo en que nuestro Señor Jesucristo encomendó a sus discípulos la celebración del sacramento de su Cuerpo y de su Sangre; ordena en tu paz nuestros días, líbranos de la condenación eterna"
        },
        {
          "sp_es": "",
          "text_es": "y cuéntanos entre tus elegidos. [Por Cristo, nuestro Señor."
        },
        {
          "sp_es": "",
          "text_es": "Amén.] Desde la Misa de la Vigilia pascual hasta el segundo domingo de Pascua: Acepta, Señor, en tu bondad, esta ofrenda de tus siervos y de toda tu familia santa, por aquellos que has hecho renacer del agua y del Espíritu Santo perdonándoles todos sus pecados ordena en tu paz nuestros días, líbranos de la condenación eterna y cuéntanos entre tus elegidos. [Por Cristo nuestro Señor."
        },
        {
          "sp_es": "",
          "text_es": "Amén.] En la Misa del bautismo: Acepta, Señor, en tu bondad, esta ofrenda de tus siervos y de toda tu familia santa, que hoy te ofrecemos especialmente por N. y N. (aquellos) que has hecho renacer del agua y del Espíritu Santo, perdonándoles todos sus pecados, para incorporarlos a Cristo Jesús, Señor nuestro, e inscribe sus nombres en el libro de la vida. [Por Cristo, nuestro Señor."
        },
        {
          "sp_es": "",
          "text_es": "Amén.] En la Misa de confirmación: Acepta, Señor, en tu bondad, esta ofrenda de tus siervos y de toda tu familia santa, que hoy te ofrecemos especialmente por N. y N. (aquellos) que, renacidos en el bautismo, han sido confirmados hoy por el don del Espíritu Santo; recíbela en tu bondad y conserva en tus hijos el don que les has dado. [Por Cristo, nuestro Señor."
        },
        {
          "sp_es": "",
          "text_es": "Amén.] En la Misa de primera comunión: Acepta, Señor, en tu bondad, esta ofrenda de tus siervos"
        },
        {
          "sp_es": "",
          "text_es": "y de toda tu familia santa, que hoy te ofrecemos especialmente por N. y N. (aquellos) que por vez primera invitas en este día a participar del pan de vida y del cáliz de salvación, en la mesa de tu familia; concédeles crecer siempre en tu amistad y en la comunión con tu Iglesia. [Por Cristo, nuestro Señor."
        },
        {
          "sp_es": "",
          "text_es": "Amén.] En la Misa del matrimonio: Acepta, Señor, en tu bondad, esta ofrenda de tus siervos, de los nuevos esposos N. y N. y de toda tu familia santa, que hoy intercede por ellos; y ya que les has concedido llegar al día de los desposorios, otórgales también (el gozo de una ansiada descendencia y de) una larga vida. [Por Cristo, nuestro Señor."
        },
        {
          "sp_es": "",
          "text_es": "Amén.] En la Misa exequial: Acepta, Señor, en tu bondad, esta ofrenda de tus siervos, que hoy te ofrecemos especialmente por el descanso eterno de nuestro hermano N., pidiéndote que le concedas que, libre ya de las ataduras de la carne, tenga su parte entre tus santos. [Por Cristo, nuestro Señor."
        },
        {
          "sp_es": "",
          "text_es": "Amén.] ___________________________________"
        },
        {
          "rubric_es": "88."
        },
        {
          "sp_es": "",
          "text_es": "Extendiendo las manos sobre las ofrendas, dice: CC Bendice y santifica, oh Padre, esta ofrenda haciéndola perfecta, espiritual y digna de ti, de manera que sea para nosotros Cuerpo y Sangre de tu Hijo amado, Jesucristo, nuestro Señor."
        },
        {
          "sp_es": "",
          "text_es": "Junta las manos."
        },
        {
          "rubric_es": "89."
        },
        {
          "sp_es": "",
          "text_es": "En las fórmulas que siguen, las palabras del Señor han de pronunciarse con claridad, como lo requiere la naturaleza de éstas."
        },
        {
          "sp_es": "",
          "text_es": "El cual, la víspera de su Pasión, ___________________________________ En la Misa Vespertina del Jueves santo: El cual, hoy, la víspera de padecer por nuestra salvación y la de todos los hombres, ___________________________________ Toma el pan y, sosteniéndolo un poco elevado sobre el altar, prosigue: tomó pan en sus santas y venerables manos, Eleva los ojos. y elevando los ojos al cielo, hacia ti,"
        },
        {
          "sp_es": "",
          "text_es": "Dios Padre suyo todopoderoso, dando gracias te bendijo, lo partió y lo dio a sus discípulos diciendo: Se inclina un poco."
        },
        {
          "rubric_es": "TOMEN Y COMAN TODOS DE ÉL, PORQUE ÉSTO ES MI CUERPO QUE SERÁ ENTREGADO POR USTEDES."
        },
        {
          "sp_es": "",
          "text_es": "Muestra el pan consagrado al pueblo, lo deposita luego sobre la patena y lo adora haciendo genuflexión."
        },
        {
          "rubric_es": "90."
        },
        {
          "rubric_es": "Después prosigue: Del mismo modo, acabada la cena, Toma el cáliz y, sosteniéndolo un poco elevado sobre el altar, dice: tomó este cáliz glorioso en sus santas y venerables manos; dando gracias te bendijo, y lo dio a sus discípulos diciendo:"
        },
        {
          "rubric_es": "Se inclina un poco."
        },
        {
          "sp_es": "",
          "text_es": "TOMEN Y BEBAN TODOS DE ÉL, PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE, SANGRE DE LA ALIANZA NUEVA Y ETERNA, QUE SERÁ DERRAMADA POR USTEDES Y POR MUCHOS PARA EL PERDÓN DE LOS PECADOS."
        },
        {
          "rubric_es": "HAGAN ESTO EN CONMEMORACIÓN MÍA."
        },
        {
          "sp_es": "",
          "text_es": "Muestra el cáliz al pueblo, lo deposita luego sobre el corporal y lo adora haciendo genuflexión."
        },
        {
          "rubric_es": "91."
        },
        {
          "rubric_es": "Luego dice una de las siguientes fórmulas: CP Éste es el Misterio de la fe."
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
          "sp_es": "Todos",
          "text_es": "Anunciamos tu muerte, proclamamos tu resurrección. ¡Ven, Señor Jesús! ___________________________________ También puede decirse: Éste es el Misterio de la fe."
        },
        {
          "sp_es": "",
          "text_es": "Cristo nos redimió."
        },
        {
          "rubric_es": "Y el pueblo prosigue, aclamando:"
        },
        {
          "sp_es": "Todos",
          "text_es": "Cada vez que comemos de este pan y bebemos de este cáliz,"
        },
        {
          "sp_es": "",
          "text_es": "anunciamos tu muerte, Señor, hasta que vuelvas."
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
          "sp_es": "Todos",
          "text_es": "Salvador del mundo, sálvanos, tu que nos has liberado por tu cruz y resurrección. ___________________________________"
        },
        {
          "rubric_es": "92."
        },
        {
          "rubric_es": "Después el sacerdote, con las manos extendidas, dice:"
        },
        {
          "sp_es": "C.",
          "text_es": "CC Por eso, Padre, nosotros, tus siervos, y todo tu pueblo santo, al celebrar este memorial de la muerte gloriosa de Jesucristo, tu Hijo, nuestro Señor; de su santa resurrección del lugar de los muertos y de su admirable ascensión a los cielos, te ofrecemos, Dios de gloria y majestad, de los mismos bienes que nos has dado, el sacrificio puro, inmaculado y santo;"
        },
        {
          "sp_es": "",
          "text_es": "pan de vida eterna y cáliz de eterna salvación."
        },
        {
          "rubric_es": "93."
        },
        {
          "sp_es": "",
          "text_es": "Mira con ojos de bondad esta ofrenda y acéptala, como aceptaste los dones del justo Abel, el sacrificio de Abrahán, nuestro padre en la fe, y la oblación pura de tu sumo sacerdote Melquisedec."
        },
        {
          "rubric_es": "94."
        },
        {
          "sp_es": "",
          "text_es": "Inclinado, con las manos juntas prosigue: Te pedimos humildemente, Dios todopoderoso,"
        },
        {
          "sp_es": "",
          "text_es": "que esta ofrenda sea llevada a tu presencia, hasta el altar del cielo, por manos tu ángel, para que cuantos recibimos el Cuerpo y la Sangre de tu Hijo, al participar aquí de este altar, Se endereza y se signa diciendo: seamos colmados de gracia y bendición. [Por Cristo, nuestro Señor."
        },
        {
          "sp_es": "",
          "text_es": "Amén.]"
        },
        {
          "rubric_es": "95."
        },
        {
          "sp_es": "",
          "text_es": "Conmemoración de los difuntos."
        },
        {
          "sp_es": "",
          "text_es": "Con las manos expendidas dice: C3 Acuérdate también, Señor, de tus hijos N. y N., Puede decir los nombres de los difuntos por quienes se quiere orar. que nos han precedido con el signo de la fe y duermen ya el sueño de la paz."
        },
        {
          "sp_es": "",
          "text_es": "Junta las manos y ora unos momentos por los difuntos por quienes tiene intención de orar."
        },
        {
          "rubric_es": "Después, con las manos extendidas, prosigue: A ellos, Señor, y a cuantos descansan en Cristo, concédeles el lugar del consuelo, de la luz y de la paz."
        },
        {
          "sp_es": "",
          "text_es": "Junta las manos. [Por Cristo nuestro Señor."
        },
        {
          "sp_es": "",
          "text_es": "Amén.]"
        },
        {
          "rubric_es": "96."
        },
        {
          "sp_es": "",
          "text_es": "Con la mano derecha se golpea el pecho diciendo: C4 Y a nosotros, pecadores, siervos tuyos, Con las manos extendidas prosigue: que confiamos en tu infinita misericordia, admítenos en la asamblea de los santos apóstoles y mártires Juan el Bautista, Esteban, Matías y Bernabé,"
        },
        {
          "sp_es": "",
          "text_es": "[Ignacio, Alejandro, Marcelino y Pedro, Felicidad y Perpetua, Águeda, Lucía, Inés, Cecilia y Anastasia] y de todos los santos; y acéptanos en su compañía, no por nuestros méritos, sino conforme a tu bondad."
        },
        {
          "sp_es": "",
          "text_es": "Junta las manos: Por Cristo, Señor nuestro."
        },
        {
          "rubric_es": "97."
        },
        {
          "sp_es": "",
          "text_es": "Y continúa: CP Por quien sigues creando todos los bienes, los santificas, los llenas de vida, los bendices y los repartes entre nosotros."
        },
        {
          "rubric_es": "98."
        },
        {
          "sp_es": "",
          "text_es": "Toma la patena con el pan consagrado, y el cáliz y, sosteniéndolos elevados, dice: CP Por Cristo, con él y en él, o a ti, Dios Padre omnipotente, CC en la unidad del Espíritu Santo, todo honor y toda gloria por los siglos de los siglos."
        },
        {
          "sp_es": "Todos",
          "text_es": "Amén."
        },
        {
          "rubric_es": "Después sigue el rito de la Comunión."
        },
        {
          "rubric_es": "PLEGARIA EUCARÍSTICA II"
        },
        {
          "rubric_es": "99."
        },
        {
          "sp_es": "",
          "text_es": "Esta plegaria eucarística tiene un prefacio propio que forma parte de su misma estructura."
        },
        {
          "sp_es": "",
          "text_es": "Con todo, se pueden usar también con esta plegaria otros prefacios, especialmente aquellos que presentan una breve síntesis del misterio de la salvación."
        },
        {
          "sp_es": "V/.",
          "text_es": "El Señor esté con ustedes."
        },
        {
          "sp_es": "R/.",
          "text_es": "Y con tu espíritu."
        },
        {
          "sp_es": "V/.",
          "text_es": "Levantemos el corazón."
        },
        {
          "sp_es": "R/.",
          "text_es": "Lo tenemos levantado hacia el Señor."
        },
        {
          "sp_es": "V/.",
          "text_es": "Demos gracias al Señor, nuestro Dios."
        },
        {
          "sp_es": "R/.",
          "text_es": "Es justo y necesario."
        },
        {
          "sp_es": "",
          "text_es": "CP En verdad es justo y necesario, es nuestro deber y salvación darte gracias, Padre santo, siempre y en todo lugar, por Jesucristo, tu Hijo amado."
        },
        {
          "sp_es": "",
          "text_es": "Por él, que es tu Palabra, hiciste todas las cosas; tú nos lo enviaste para que, hecho hombre por obra del Espíritu Santo y nacido de María, la Virgen, fuera nuestro Salvador y Redentor."
        },
        {
          "sp_es": "",
          "text_es": "Él, en cumplimiento de tu voluntad, para destruir la muerte y manifestar la resurrección, extendió sus brazos en la cruz, y así adquirió para ti un pueblo santo."
        },
        {
          "sp_es": "",
          "text_es": "Por eso, con los ángeles y los santos, proclamamos tu gloria, diciendo:"
        }
      ],
      "2": [
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
          "text_es": "Hosanna. en el cielo."
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
          "rubric_es": "100."
        },
        {
          "rubric_es": "El sacerdote, con las manos extendidas, dice:"
        },
        {
          "sp_es": "C.",
          "text_es": "CP S anto eres en verdad, Señor, fuente de toda santidad;"
        },
        {
          "rubric_es": "101."
        },
        {
          "sp_es": "",
          "text_es": "Junta las manos y, manteniéndolas extendidas sobre las ofrendas, dice: CC por eso te pedimos que santifiques estos dones con la efusión de tu Espíritu, Junta las manos y traza el signo de la cruz sobre el pan y el cáliz conjuntamente, diciendo: de manera que sean para nosotros Cuerpo y ✠ Sangre de Jesucristo, nuestro Señor."
        },
        {
          "sp_es": "",
          "text_es": "Junta las manos."
        },
        {
          "rubric_es": "102."
        },
        {
          "sp_es": "",
          "text_es": "En las fórmulas que siguen, las palabras del Señor han de pronunciarse con claridad, como lo requiere la naturaleza de éstas."
        },
        {
          "sp_es": "",
          "text_es": "El cual, _____________________________________ En la Misa vespertina del Jueves Santo: en esta misma noche, cuando iba a ser entregado a su Pasión, voluntariamente aceptada, ___________________________________"
        },
        {
          "sp_es": "",
          "text_es": "Toma el pan y, sosteniéndolo un poco elevado sobre el altar, prosigue: tomó pan, dándote gracias, lo partió y lo dio a sus discípulos, diciendo: Se inclina un poco."
        },
        {
          "rubric_es": "TOMEN Y COMAN TODOS DE ÉL, PORQUE ÉSTO ES MI CUERPO QUE SERÁ ENTREGADO POR USTEDES."
        },
        {
          "sp_es": "",
          "text_es": "Muestra el pan consagrado al pueblo, lo deposita luego sobre la patena y lo adora haciendo genuflexión."
        },
        {
          "rubric_es": "103."
        },
        {
          "rubric_es": "Después prosigue: Del mismo modo, acabada la cena, Toma el cáliz y, sosteniéndolo un poco elevado sobre el altar, dice: tomó este cáliz glorioso en sus santas y venerables manos; dando gracias te bendijo, y lo dio a sus discípulos diciendo: Se inclina un poco."
        },
        {
          "sp_es": "",
          "text_es": "TOMEN Y BEBAN TODOS DE ÉL, PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE, SANGRE DE LA ALIANZA NUEVA Y ETERNA, QUE SERÁ DERRAMADA POR USTEDES Y POR MUCHOS PARA EL PERDÓN DE LOS PECADOS."
        },
        {
          "rubric_es": "HAGAN ESTO EN CONMEMORACIÓN MÍA."
        },
        {
          "sp_es": "",
          "text_es": "Muestra el cáliz al pueblo, lo deposita luego sobre el corporal y lo adora haciendo genuflexión."
        },
        {
          "rubric_es": "104."
        },
        {
          "rubric_es": "Luego dice una de las siguientes fórmulas:"
        },
        {
          "sp_es": "",
          "text_es": "CP Éste es el Misterio de la fe."
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
          "sp_es": "Todos",
          "text_es": "Anunciamos tu muerte, proclamamos tu resurrección. ¡Ven, Señor Jesús! ___________________________________ También puede decirse: Éste es el Misterio de la fe."
        },
        {
          "sp_es": "",
          "text_es": "Cristo nos redimió."
        },
        {
          "rubric_es": "Y el pueblo prosigue, aclamando:"
        },
        {
          "sp_es": "Todos",
          "text_es": "Cada vez que comemos de este pan y bebemos de este cáliz, anunciamos tu muerte, Señor, hasta que vuelvas."
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
          "sp_es": "Todos",
          "text_es": "Salvador del mundo, sálvanos, tu que nos has liberado por tu cruz y resurrección. ___________________________________"
        },
        {
          "rubric_es": "105."
        },
        {
          "rubric_es": "Después el sacerdote, con las manos extendidas, dice:"
        },
        {
          "sp_es": "C.",
          "text_es": "CC Así, pues, Padre, al celebrar ahora el memorial de la muerte y resurrección de tu Hijo,"
        },
        {
          "sp_es": "",
          "text_es": "te ofrecemos el pan de vida y el cáliz de salvación, y te damos gracias porque nos haces dignos de servirte en tu presencia."
        },
        {
          "sp_es": "",
          "text_es": "Te pedimos humildemente que el Espíritu Santo congregue en la unidad a cuantos participamos del Cuerpo y Sangre de Cristo."
        },
        {
          "sp_es": "",
          "text_es": "C1 Acuérdate, Señor, de tu Iglesia extendida por toda la tierra; _______________________ En los domingos, cuando no hay otro recuerdo más propio, puede decirse: Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí en el domingo, día en que Cristo ha vencido a la muerte y nos ha hecho partícipes de su vida inmortal; En la Natividad del Señor y durante su octava: Acuérdate, Señor,"
        },
        {
          "sp_es": "",
          "text_es": "de tu Iglesia extendida por toda la tierra y reunida aquí (en la noche santa) en el día santo en que la Virgen María dio a luz al Salvador del mundo; En la Epifanía del Señor: Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí en el día santo en que tu único Hijo, eterno como tú en la gloria, se manifestó en la realidad de nuestra propia carne;"
        },
        {
          "sp_es": "",
          "text_es": "Desde la Misa de la Vigilia pascual hasta el segundo domingo de Pascua: Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí (en la noche santísima) en el día santísimo de la resurrección de nuestro Señor Jesucristo;"
        },
        {
          "sp_es": "",
          "text_es": "En la Ascensión del Señor: Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí en el día glorioso en que Cristo ha sido constituido Señor del cielo y de la tierra; En el domingo de Pentecostés: Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí en el día en que la efusión de tu Espíritu ha hecho de ella sacramento de unidad para todos los pueblos;"
        },
        {
          "sp_es": "",
          "text_es": "_______________________ y con el Papa N., con nuestro Obispo N."
        },
        {
          "rubric_es": "Puede hacerse también mención de los Obispos coadjutores o auxiliares y, en las concelebraciones, del Obispo que preside la celebración. _______________________ El Obispo, cuando celebra en su diócesis, dice:"
        },
        {
          "sp_es": "C.",
          "text_es": "conmigo, indigno siervo tuyo, Cuando celebra un Obispo que no es el Ordinario diocesano, dice: con mi hermano N., Obispo de esta Iglesia de N., conmigo,"
        },
        {
          "rubric_es": "indigno siervo tuyo, _______________________________ y todos los pastores que cuidan de tu pueblo, llévala a su perfección por la caridad. ______________________________ INTERCESIONES PARTICULARES En las misas de Pascua, de su octava y en la del bautismo de adultos:"
        },
        {
          "sp_es": "Todos",
          "text_es": "Acuérdate también de nuestros hermanos N. y N. que hoy, por medio del bautismo (y de la confirmación), han entrado a formar parte de tu familia;"
        },
        {
          "sp_es": "",
          "text_es": "ayúdales a seguir a Cristo, tu Hijo, con ánimo generoso y ferviente."
        },
        {
          "sp_es": "",
          "text_es": "En la misa del bautismo de niños: Acuérdate también de nuestros hermanos N. y N. (de aquellos hermanos nuestros) que hoy has hecho renacer del agua y del Espíritu Santo, librándolos del pecado; tú que los has incorporado, como miembros vivos, al cuerpo de Cristo, inscribe también sus nombres en el libro de la vida."
        },
        {
          "sp_es": "",
          "text_es": "En la misa de confirmación: Acuérdate también de tus hijos N. y N. que, regenerados en el bautismo, hoy has confirmado, marcándolos con el sello del Espíritu Santo: custodia en ellos el don de tu amor."
        },
        {
          "sp_es": "",
          "text_es": "En la misa de primera comunión: Acuérdate de tus hijos N. y N. que por vez primera invitas en este día a participar del pan de vida y del cáliz de salvación, en la mesa de tu familia; concédeles crecer siempre en tu amistad y en la comunión con tu Iglesia."
        },
        {
          "sp_es": "",
          "text_es": "En la misa del matrimonio: Acuérdate de tus hijos N. y N. que en Cristo hoy han fundado una nueva familia, iglesia doméstica y sacramento de tu amor, y concédeles que la gracia de este día se prolongue a lo largo de toda su vida."
        },
        {
          "sp_es": "",
          "text_es": "En la misa por los difuntos: Recuerda a tu hijo (hija) N., a quien llamaste (hoy) de este mundo a tu presencia; concédele que, así como ha compartido ya la muerte de Jesucristo, comparta también con él la gloria de la resurrección. _______________________"
        },
        {
          "sp_es": "",
          "text_es": "C2 Acuérdate también de nuestros hermanos que se durmieron en la esperanza de la resurrección, y de todos los que han muerto en tu misericordia; admítelos a contemplar la luz de tu rostro."
        },
        {
          "sp_es": "",
          "text_es": "Ten misericordia de todos nosotros, y así, con María, la Virgen Madre de Dios, su esposo san José, los apóstoles y cuantos vivieron en tu amistad a través de los tiempos, merezcamos, por tu Hijo Jesucristo, compartir la vida eterna y cantar tus alabanzas."
        },
        {
          "sp_es": "",
          "text_es": "Junta las manos."
        },
        {
          "rubric_es": "106."
        },
        {
          "sp_es": "",
          "text_es": "Toma la patena con el pan consagrado, y el cáliz y, sosteniéndolos elevados, dice: CP Por Cristo, con él y en él, o a ti, Dios Padre omnipotente, CC en la unidad del Espíritu Santo, todo honor y toda gloria por los siglos de los siglos."
        },
        {
          "sp_es": "Todos",
          "text_es": "Amén."
        },
        {
          "rubric_es": "Después sigue el rito de la Comunión."
        }
      ],
      "3": [
        {
          "rubric_es": "PLEGARIA EUCARÍSTICA III"
        },
        {
          "rubric_es": "107."
        },
        {
          "sp_es": "V/.",
          "text_es": "El Señor esté con ustedes."
        },
        {
          "sp_es": "R/.",
          "text_es": "Y con tu espíritu."
        },
        {
          "sp_es": "V/.",
          "text_es": "Levantemos el corazón."
        },
        {
          "sp_es": "R/.",
          "text_es": "Lo tenemos levantado hacia el Señor."
        },
        {
          "sp_es": "V/.",
          "text_es": "Demos gracias al Señor, nuestro Dios."
        },
        {
          "sp_es": "R/.",
          "text_es": "Es justo y necesario."
        },
        {
          "rubric_es": "Sigue el prefacio, dicho según las rúbricas, que concluye: Santo, Santo, Santo es el Señor, Dios del universo."
        },
        {
          "sp_es": "",
          "text_es": "Llenos están el cielo y la tierra de tu gloria."
        },
        {
          "sp_es": "",
          "text_es": "Hosanna. en el cielo."
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
          "rubric_es": "122."
        },
        {
          "rubric_es": "El sacerdote, con las manos extendidas, dice:"
        },
        {
          "sp_es": "C.",
          "text_es": "CP S anto eres en verdad, Padre, y con razón te alaban todas tus criaturas, ya que por Jesucristo, tu Hijo, Señor nuestro, con la fuerza del Espíritu Santo, das vida y santificas todo, y congregas a tu pueblo sin cesar, para que ofrezca en tu honor un sacrificio sin mancha desde donde sale el sol hasta el ocaso."
        },
        {
          "rubric_es": "109."
        },
        {
          "sp_es": "",
          "text_es": "Junta las manos y, manteniéndolas extendidas sobre las ofrendas, dice: CC Por eso, Padre, te suplicamos que santifiques por el mismo Espíritu estos dones que hemos separado para ti,"
        },
        {
          "sp_es": "",
          "text_es": "junta las manos y traza el signo de la cruz sobre el pan y el cáliz conjuntamente, diciendo: de manera que sean Cuerpo y ✠ Sangre de Jesucristo, Hijo tuyo y Señor nuestro, junta las manos que nos mandó celebrar estos misterios."
        },
        {
          "rubric_es": "110."
        },
        {
          "sp_es": "",
          "text_es": "En las fórmulas que siguen, las palabras del Señor han de pronunciarse con claridad, como lo requiere la naturaleza de las mismas palabras."
        },
        {
          "sp_es": "",
          "text_es": "Porque él mismo, la noche en que iba a ser entregado, ____________________________ En la misa vespertina del Jueves santo: habiendo amado a los suyos que estaban en el mundo, los amó hasta el extremo y, mientras cenaba con sus discípulos, ____________________________ Toma el pan y, sosteniéndolo un poco elevado sobre el altar, prosigue: tomó pan, y dando gracias te bendijo,"
        },
        {
          "sp_es": "",
          "text_es": "lo partió y lo dio a sus discípulos diciendo: Se inclina un poco."
        },
        {
          "rubric_es": "TOMEN Y COMAN TODOS DE ÉL, PORQUE ÉSTO ES MI CUERPO QUE SERÁ ENTREGADO POR USTEDES."
        },
        {
          "sp_es": "",
          "text_es": "Muestra el pan consagrado al pueblo, lo deposita luego sobre la patena y lo adora haciendo genuflexión."
        },
        {
          "rubric_es": "111."
        },
        {
          "rubric_es": "Después prosigue: Del mismo modo, acabada la cena, Toma el cáliz y, sosteniéndolo un poco elevado sobre el altar, dice: tomó este cáliz glorioso"
        },
        {
          "sp_es": "",
          "text_es": "en sus santas y venerables manos; dando gracias te bendijo, y lo dio a sus discípulos diciendo: Se inclina un poco."
        },
        {
          "sp_es": "",
          "text_es": "TOMEN Y BEBAN TODOS DE ÉL, PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE, SANGRE DE LA ALIANZA NUEVA Y ETERNA, QUE SERÁ DERRAMADA POR USTEDES Y POR MUCHOS PARA EL PERDÓN DE LOS PECADOS."
        },
        {
          "rubric_es": "HAGAN ESTO EN CONMEMORACIÓN MÍA."
        },
        {
          "sp_es": "",
          "text_es": "Muestra el cáliz al pueblo, lo deposita luego sobre el corporal y lo adora haciendo genuflexión."
        },
        {
          "rubric_es": "112."
        },
        {
          "rubric_es": "Luego dice una de las siguientes fórmulas: CP Éste es el Misterio de la fe."
        },
        {
          "rubric_es": "O bien:"
        },
        {
          "rubric_es": "Éste es el Sacramento de nuestra fe. Y el pueblo prosigue, aclamando:"
        },
        {
          "sp_es": "Todos",
          "text_es": "Anunciamos tu muerte, proclamamos tu resurrección. ¡Ven, Señor Jesús! ___________________________________ También puede decirse: Éste es el Misterio de la fe. Cristo nos redimió."
        },
        {
          "rubric_es": "Y el pueblo prosigue, aclamando:"
        },
        {
          "sp_es": "Todos",
          "text_es": "Cada vez que comemos de este pan y bebemos de este cáliz, anunciamos tu muerte, Señor, hasta que vuelvas."
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
          "sp_es": "Todos",
          "text_es": "Salvador del mundo, sálvanos, tu que nos has liberado por tu cruz y resurrección. ___________________________________"
        },
        {
          "rubric_es": "113."
        },
        {
          "rubric_es": "Después el sacerdote, con las manos extendidas, dice:"
        },
        {
          "sp_es": "C.",
          "text_es": "CC Así, pues, Padre, al celebrar ahora el memorial de la pasión salvadora de tu Hijo, de su admirable resurrección y ascensión al cielo, mientras esperamos su venida gloriosa, te ofrecemos, en esta acción de gracias, el sacrificio vivo y santo."
        },
        {
          "sp_es": "",
          "text_es": "Dirige tu mirada sobre la ofrenda de tu Iglesia, y reconoce en ella la Víctima por cuya inmolación quisiste devolvernos tu amistad, para que, fortalecidos con el Cuerpo y Sangre de tu Hijo y llenos de su Espíritu Santo, formemos en Cristo un solo cuerpo y un solo espíritu."
        },
        {
          "sp_es": "",
          "text_es": "C1 Que él nos transforme en ofrenda permanente, para que gocemos de tu heredad junto con tus elegidos: con María, la Virgen Madre de Dios, su esposo, san José, los apóstoles y los mártires, [san N.: santo del día o patrono] y todos los santos, por cuya intercesión confiamos obtener siempre tu ayuda."
        },
        {
          "sp_es": "",
          "text_es": "C2 Te pedimos, Padre, que esta Víctima de reconciliación traiga la paz y la salvación al mundo entero."
        },
        {
          "rubric_es": "Confirma en la fe y en la caridad a tu Iglesia, peregrina en la tierra: al tu servidor, el Papa N., a nuestro obispo N., Puede hacerse también mención de los Obispos coadjutores o auxiliares. ____________________________ El Obispo, cuando celebra en su diócesis, dice:"
        },
        {
          "sp_es": "C.",
          "text_es": "conmigo, indigno siervo tuyo, Cuando celebra un Obispo que no es el Ordinario diocesano, dice: con mi hermano N., Obispo de esta Iglesia de N.,"
        },
        {
          "sp_es": "",
          "text_es": "conmigo, indigno siervo tuyo, ____________________________ al orden episcopal, a los presbíteros y diáconos, y a todo el pueblo redimido por ti. _______________________________"
        },
        {
          "sp_es": "",
          "text_es": "INTERCESIONES PARTICULARES En las misas de Pascua, de su octava y en la del bautismo de adultos: Confirma en la fidelidad cristiana a tus hijos [N. y N.] que hoy, por medio del bautismo: [y del don del Espíritu] has llamado a formar parte de tu pueblo y concédeles andar siempre en una vida nueva."
        },
        {
          "sp_es": "",
          "text_es": "En la misa del bautismo de niños: Ayuda a nuestros hermanos [N. y N.], que hoy has hecho renacer del agua y del Espíritu Santo librándolos del pecado; tú que los has incorporado, como miembros vivos, al Cuerpo de Cristo, inscribe también sus nombres en el libro de la vida."
        },
        {
          "sp_es": "",
          "text_es": "En la misa de la confirmación: Ayuda a tus hijos [N. y N.], que hoy has confirmado marcándolos con el sello del Espíritu Santo; custodia en ellos el don de tu amor."
        },
        {
          "sp_es": "",
          "text_es": "En la misa de primera comunión: Ayuda a tus hijos [N. y N.], que por vez primera invitas en este día a participar del pan de vida y del cáliz de salvación, en la mesa de tu familia; concédeles crecer siempre en tu amistad y en la comunión con tu Iglesia."
        },
        {
          "sp_es": "",
          "text_es": "En la misa del matrimonio: Ayuda a tus hijos [N. y N.], que en Cristo hoy han fundado una nueva familia, iglesia doméstica y sacramento de tu amor, y concédeles que la gracia de este día se prolongue a lo largo de toda su vida. ____________________________ Atiende los deseos y súplicas de esta familia que has congregado en tu presencia. ____________________________ En los domingos,"
        },
        {
          "sp_es": "",
          "text_es": "cuando no hay otro recuerdo más propio, puede decirse: en el domingo, día en que Cristo ha vencido a la muerte y nos ha hecho partícipes de su vida inmortal."
        },
        {
          "sp_es": "",
          "text_es": "En la Natividad del Señor y durante su octava: (en la noche santa) en el día santo en que la Virgen María dio a luz al Salvador del mundo."
        },
        {
          "sp_es": "",
          "text_es": "En la Epifanía del Señor: en el día santo, en que tu único Hijo, eterno como tú en la gloria, se manifestó en la verdad de nuestra carne hecho hombre."
        },
        {
          "sp_es": "",
          "text_es": "Desde la misa de la Vigilia pascual hasta el segundo domingo de Pascua: (en la noche gloriosa) en el día glorioso de la resurrección de nuestro Señor Jesucristo según la carne."
        },
        {
          "sp_es": "",
          "text_es": "En la Ascensión del Señor en el día glorioso de la Ascensión, en el que Cristo ha sido constituido Señor del cielo y de la tierra."
        },
        {
          "sp_es": "",
          "text_es": "En el domingo de Pentecostés: en el día en que la efusión de tu Espíritu ha hecho de ella sacramento de unidad para todos los pueblos. _____________________________ Reúne en torno a ti, Padre misericordioso, a todos tus hijos dispersos por el mundo. *A nuestros hermanos difuntos y a cuantos murieron en tu amistad recíbelos en tu reino,"
        },
        {
          "sp_es": "",
          "text_es": "donde esperamos gozar todos juntos de la plenitud eterna de tu gloria, _____________________________"
        },
        {
          "rubric_es": "115."
        },
        {
          "rubric_es": "Cuando esta plegaria eucarística se utiliza en las misas de difuntos, puede decirse: * Recuerda a tu hijo [hija] N. a quien llamaste [hoy] de este mundo a tu presencia: concédele que, así como ha compartido ya la muerte de Jesucristo comparta, también, con él la gloria de la resurrección, cuando Cristo haga surgir de la tierra a los muertos, y transforme nuestro cuerpo frágil en cuerpo glorioso como el suyo."
        },
        {
          "sp_es": "",
          "text_es": "Y a nuestros hermanos difuntos y a cuantos murieron en tu amistad recíbelos en tu reino, donde esperamos gozar todos juntos de la plenitud eterna de tu gloria; allí enjugarás las lágrimas de nuestros ojos, porque, al contemplarte como tú eres, Dios nuestro, seremos para siempre semejantes a ti y cantaremos eternamente tus alabanzas, ____________________________"
        },
        {
          "sp_es": "",
          "text_es": "Junta las manos. por Cristo, Señor nuestro, por quien concedes al mundo todos los bienes."
        },
        {
          "rubric_es": "116."
        },
        {
          "sp_es": "",
          "text_es": "Toma la patena con el pan consagrado y el cáliz y, sosteniéndolos elevados, dice: CP Por Cristo, con él y en él, o a ti, Dios Padre omnipotente, CC en la unidad del Espíritu Santo, todo honor y toda gloria por los siglos de los siglos."
        },
        {
          "sp_es": "Todos",
          "text_es": "Amén."
        },
        {
          "rubric_es": "Después sigue el rito de la Comunión."
        }
      ],
      "4": [
        {
          "rubric_es": "PLEGARIA EUCARÍSTICA IV"
        },
        {
          "rubric_es": "116."
        },
        {
          "sp_es": "",
          "text_es": "Esta plegaria eucarística forma un todo con su prefacio, el cual nunca puede cambiarse."
        },
        {
          "sp_es": "",
          "text_es": "Por consiguiente, no puede decirse cuando está prescrito un prefacio propio."
        },
        {
          "sp_es": "",
          "text_es": "En los otros casos puede decirse, incluso cuando las rúbricas prescriban un prefacio del tiempo."
        },
        {
          "sp_es": "V/.",
          "text_es": "El Señor esté con ustedes."
        },
        {
          "sp_es": "R/.",
          "text_es": "Y con tu espíritu."
        },
        {
          "sp_es": "V/.",
          "text_es": "Levantemos el corazón."
        },
        {
          "sp_es": "R/.",
          "text_es": "Lo tenemos levantado hacia el Señor."
        },
        {
          "sp_es": "V/.",
          "text_es": "Demos gracias al Señor, nuestro Dios."
        },
        {
          "sp_es": "R/.",
          "text_es": "Es justo y necesario."
        },
        {
          "sp_es": "",
          "text_es": "CP En verdad es justo darte gracias, y deber nuestro glorificarte, Padre santo, porque tú eres el único Dios vivo y verdadero que existes desde siempre y vives para siempre; luz sobre toda luz."
        },
        {
          "sp_es": "",
          "text_es": "Porque tú solo eres bueno y fuente de vida, hiciste todas las cosas para colmarlas de tus bendiciones y alegrar su multitud con la claridad de tu gloria."
        },
        {
          "sp_es": "",
          "text_es": "Por eso, innumerables ángeles en tu presencia, contemplando la gloria de tu rostro, te sirven siempre y te glorifican sin cesar."
        },
        {
          "sp_es": "",
          "text_es": "Y con ellos también nosotros, llenos de alegría, y por nuestra voz las demás criaturas, aclamamos tu nombre cantando: Santo, Santo, Santo es el Señor, Dios del Universo."
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
          "rubric_es": "117."
        },
        {
          "rubric_es": "El sacerdote, con las manos extendidas, dice:"
        },
        {
          "sp_es": "C.",
          "text_es": "CP T alabamos, Padre santo, porque eres grande, porque hiciste todas las cosas con sabiduría y amor."
        },
        {
          "sp_es": "",
          "text_es": "A imagen tuya creaste al hombre y le encomendaste el universo entero, para que, sirviéndote sólo a ti, su Creador, dominara todo lo creado."
        },
        {
          "sp_es": "",
          "text_es": "Y cuando por desobediencia perdió tu amistad, no lo abandonaste al poder de la muerte, sino que, compadecido, tendiste la mano a todos, para que te encuentre el que te busca."
        },
        {
          "sp_es": "",
          "text_es": "Reiteraste, además, tu alianza a los hombres; por los profetas los fuiste llevando con la esperanza de salvación."
        },
        {
          "sp_es": "",
          "text_es": "Y tanto amaste al mundo, Padre santo, que, al cumplirse la plenitud de los tiempos, nos enviaste como salvador a tu único Hijo."
        },
        {
          "sp_es": "",
          "text_es": "El cual se encarnó por obra del Espíritu Santo, nació de María, la Virgen, y así compartió en todo nuestra condición humana menos en el pecado; anunció la salvación a los pobres, la liberación a los oprimidos y a los afligidos el consuelo."
        },
        {
          "sp_es": "",
          "text_es": "Para cumplir tus designios, él mismo se entregó a la muerte, y, resucitando, destruyó la muerte y nos dio nueva vida."
        },
        {
          "sp_es": "",
          "text_es": "Y porque no vivamos ya para nosotros mismos, sino para él, que por nosotros murió y resucitó, envió, Padre, desde tu seno al Espíritu Santo como primicia para los creyentes, a fin de santificar todas las cosas, llevando a plenitud su obra en el mundo."
        },
        {
          "rubric_es": "118."
        },
        {
          "sp_es": "",
          "text_es": "Junta las manos y, manteniéndolas extendidas sobre las ofrendas, dice: CC Por eso, Padre, te rogamos que este mismo Espíritu santifique, Señor, estas ofrendas, Junta las manos y traza, una sola vez, el signo de la cruz sobre el pan y el cáliz conjuntamente, diciendo: para que sean Cuerpo y ✠ Sangre de Jesucristo, nuestro Señor, Junta las manos. y así celebremos el gran misterio que nos dejó como alianza eterna."
        },
        {
          "rubric_es": "119."
        },
        {
          "sp_es": "",
          "text_es": "En las fórmulas que siguen, las palabras del Señor han de pronunciarse con claridad, como lo requiere la naturaleza de éstas."
        },
        {
          "sp_es": "",
          "text_es": "Porque él mismo, llegada la hora en que había de ser glorificado por ti, Padre santo, habiendo amado a los suyos que estaban en el mundo, los amó hasta el extremo."
        },
        {
          "sp_es": "",
          "text_es": "Y, mientras cenaba con sus discípulos, Toma el pan y, sosteniéndolo un poco elevado sobre el altar, prosigue: tomó pan, te bendijo, lo partió y se lo dio diciendo: Se inclina un poco."
        },
        {
          "rubric_es": "TOMEN Y COMAN TODOS DE ÉL, PORQUE ÉSTO ES MI CUERPO QUE SERÁ ENTREGADO POR USTEDES."
        },
        {
          "sp_es": "",
          "text_es": "Muestra el pan consagrado al pueblo, lo deposita luego sobre la patena y lo adora haciendo genuflexión."
        },
        {
          "rubric_es": "120."
        },
        {
          "rubric_es": "Después prosigue: Del mismo modo, acabada la cena, Toma el cáliz y, sosteniéndolo un poco elevado sobre el altar, dice: tomó este cáliz glorioso en sus santas y venerables manos; dando gracias te bendijo, y lo dio a sus discípulos diciendo: Se inclina un poco."
        },
        {
          "sp_es": "",
          "text_es": "TOMEN Y BEBAN TODOS DE ÉL, PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE, SANGRE DE LA ALIANZA NUEVA Y ETERNA, QUE SERÁ DERRAMADA POR USTEDES Y POR MUCHOS PARA EL PERDÓN DE LOS PECADOS."
        },
        {
          "rubric_es": "HAGAN ESTO EN CONMEMORACIÓN MÍA."
        },
        {
          "sp_es": "",
          "text_es": "Muestra el cáliz al pueblo, lo deposita luego sobre el corporal y lo adora haciendo genuflexión."
        },
        {
          "rubric_es": "121. Luego dice una de las siguientes fórmulas: CP Éste es el Misterio de la fe."
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
          "sp_es": "Todos",
          "text_es": "Anunciamos tu muerte, proclamamos tu resurrección. ¡Ven, Señor Jesús! ___________________________________ También puede decirse: Éste es el Misterio de la fe."
        },
        {
          "sp_es": "",
          "text_es": "Cristo nos redimió."
        },
        {
          "rubric_es": "Y el pueblo prosigue, aclamando:"
        },
        {
          "sp_es": "Todos",
          "text_es": "Cada vez que comemos de este pan y bebemos de este cáliz, anunciamos tu muerte, Señor, hasta que vuelvas."
        },
        {
          "rubric_es": "O bien:"
        },
        {
          "rubric_es": "Éste es el Misterio de la fe. Cristo se entregó por nosotros. Y el pueblo prosigue, aclamando:"
        },
        {
          "sp_es": "Todos",
          "text_es": "Salvador del mundo, sálvanos, tu que nos has liberado por tu cruz y resurrección. ___________________________________"
        },
        {
          "rubric_es": "122. Después el sacerdote, con las manos extendidas, dice:"
        },
        {
          "sp_es": "",
          "text_es": "CC Por eso, Padre, al celebrar ahora el memorial de nuestra redención, recordamos la muerte de Cristo y su descenso al lugar de los muertos, proclamamos su resurrección y ascensión a tu derecha; y mientras esperamos su venida gloriosa, te ofrecemos su Cuerpo y su Sangre, sacrificio agradable a ti y salvación para todo el mundo."
        },
        {
          "sp_es": "",
          "text_es": "Dirige tu mirada sobre esta Víctima que tú mismo has preparado a tu Iglesia, y concede a cuantos compartimos este pan y este cáliz, que, congregados en un solo cuerpo por el Espíritu Santo, seamos en Cristo víctima viva para alabanza de tu gloria."
        },
        {
          "sp_es": "",
          "text_es": "C1 Y ahora, Señor, acuérdate de todos aquellos por quienes se ofrece este sacrificio: de tu servidor el Papa N., de nuestro obispo N., Puede hacerse también mención de los Obispos coadjutores o auxiliares. ____________________________ El Obispo, cuando celebra en su diócesis, dice: conmigo, indigno siervo tuyo, Cuando celebra un Obispo que no es el Ordinario diocesano, dice: con mi hermano N.,"
        },
        {
          "sp_es": "",
          "text_es": "Obispo de esta Iglesia de N., conmigo, indigno siervo tuyo, ______________________________"
        },
        {
          "rubric_es": "del orden episcopal y de los presbíteros y diáconos, de los oferentes y de los aquí reunidos, ________________________________ INTERCESIONES PARTICULARES En las misas de Pascua y en la del bautismos:"
        },
        {
          "sp_es": "D.",
          "text_es": "* de nuestros hermanos [N. y N.] que hoy has hecho renacer del agua del Espíritu Santo, En la misa de la confirmación: * de tus hijos [N. y N.], que hoy has confirmado marcándolos con el sello del Espíritu Santo,"
        },
        {
          "sp_es": "",
          "text_es": "En la misa de primera comunión: * de tus hijos [N. y N.], que por vez primera invitas en este día a participar del pan de vida y del cáliz de salvación, en la mesa de tu familia, En la misa del matrimonio: * de tus hijos [N. y N.], que en Cristo hoy han fundado una nueva familia, ____________________________ de todo tu pueblo santo y de aquellos que te buscan con sincero corazón."
        },
        {
          "sp_es": "",
          "text_es": "C2 Acuérdate también de los que murieron en la paz de Cristo y de todos los difuntos, cuya fe sólo tú conociste."
        },
        {
          "sp_es": "",
          "text_es": "Padre de bondad, que todos tus hijos nos reunamos en la heredad de tu reino, con María, la Virgen Madre de Dios, con su esposo san José,"
        },
        {
          "sp_es": "",
          "text_es": "con los apóstoles y los santos; y allí, junto con toda la creación libre ya de pecado y de muerte, Junta las manos. te glorifiquemos por Cristo, Señor nuestro, por quien concedes al mundo todos los bienes."
        },
        {
          "rubric_es": "123."
        },
        {
          "sp_es": "",
          "text_es": "Toma la patena con el pan consagrado y el cáliz y, sosteniéndolos elevados, dice: CP Por Cristo, con él y en él, o a ti, Dios Padre omnipotente, CC en la unidad del Espíritu Santo, todo honor y toda gloria por los siglos de los siglos."
        },
        {
          "sp_es": "Todos",
          "text_es": "Amén."
        },
        {
          "rubric_es": "Después sigue el rito de la Comunión."
        },
        {
          "rubric_es": "RITO DE COMUNIÓN"
        },
        {
          "rubric_es": "124. Una vez que ha dejado el cáliz y la patena, el sacerdote, con las manos juntas, dice:"
        },
        {
          "sp_es": "C.",
          "text_es": "Fieles a la recomendación del Salvador y siguiendo su divina enseñanza, nos atrevemos a decir: ____________________________"
        },
        {
          "rubric_es": "O bien:"
        },
        {
          "sp_es": "",
          "text_es": "Llenos de alegría por ser hijos de Dios, digamos confiadamente la oración que Cristo nos enseñó:"
        },
        {
          "rubric_es": "O bien:"
        },
        {
          "sp_es": "",
          "text_es": "El amor de Dios ha sido derramado en nuestros corazones con el Espíritu Santo que se nos ha dado; digamos con fe y esperanza:"
        },
        {
          "rubric_es": "O bien:"
        },
        {
          "sp_es": "",
          "text_es": "Antes de participar en el banquete de la Eucaristía, signo de reconciliación y vínculo de unión fraterna, oremos juntos como el Señor nos ha enseñado: ____________________________ Extiende las manos y, junto con el pueblo, continúa: Padre nuestro, que estás en el cielo, santificado sea tu nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo."
        },
        {
          "sp_es": "",
          "text_es": "Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal."
        }
      ]
    },
    "amen": [
      {
        "sp_es": "C.",
        "text_es": "Por Cristo, con él y en él, a ti, Dios Padre omnipotente, en la unidad del Espíritu Santo, todo honor y toda gloria por los siglos de los siglos."
      },
      {
        "sp_es": "Todos",
        "text_es": "Amén."
      }
    ]
  },
  {
    "id": "3.4 lords_prayer",
    "type": "part",
    "header": {
      "es": "Rito de la Comunión — Padrenuestro"
    },
    "lines": [
      {
        "rubric_es": "125."
      },
      {
        "rubric_es": "El sacerdote, con las manos extendidas, prosigue él solo:"
      },
      {
        "sp_es": "C.",
        "text_es": "Líbranos de todos los males, Señor, y concédenos la paz en nuestros días, para que, ayudados por tu misericordia, vivamos siempre libres de pecado y protegidos de toda perturbación, mientras esperamos la gloriosa venida de nuestro Salvador Jesucristo."
      },
      {
        "sp_es": "",
        "text_es": "Junta las manos."
      },
      {
        "rubric_es": "El pueblo concluye la oración aclamando:"
      },
      {
        "sp_es": "Todos",
        "text_es": "Tuyo es el reino, tuyo el poder y la gloria por siempre, Señor."
      },
      {
        "rubric_es": "126."
      },
      {
        "rubric_es": "Después el sacerdote, con las manos extendidas, dice en voz alta:"
      },
      {
        "sp_es": "C.",
        "text_es": "Señor Jesucristo, que dijiste a tus Apóstoles: «La paz les dejo, mi paz les doy», no tengas en cuenta nuestros pecados, sino la fe de tu Iglesia, y conforme a tu palabra, concédele la paz y la unidad."
      },
      {
        "sp_es": "",
        "text_es": "Junta las manos."
      },
      {
        "sp_es": "",
        "text_es": "Tú que vives y reinas por los siglos de los siglos."
      },
      {
        "sp_es": "Todos",
        "text_es": "Amén."
      },
      {
        "rubric_es": "127."
      },
      {
        "rubric_es": "El sacerdote, extendiendo y juntando las manos, añade:"
      },
      {
        "sp_es": "C.",
        "text_es": "La paz del Señor esté siempre con ustedes."
      },
      {
        "sp_es": "Todos",
        "text_es": "Y con tu espíritu."
      },
      {
        "rubric_es": "128. Luego, si se juzga oportuno, el diácono, o el sacerdote, añade:"
      },
      {
        "sp_es": "D.",
        "text_es": "Dense fraternalmente la paz. ____________________________"
      },
      {
        "rubric_es": "O bien:"
      },
      {
        "sp_es": "",
        "text_es": "Como hijos de Dios, intercambien ahora un signo de comunión fraterna."
      },
      {
        "rubric_es": "O bien:"
      },
      {
        "sp_es": "",
        "text_es": "En Cristo, que nos ha hecho hermanos con su cruz, dense la paz como signo de reconciliación."
      },
      {
        "rubric_es": "O bien:"
      },
      {
        "sp_es": "",
        "text_es": "En el Espíritu de Cristo resucitado, dense fraternalmente la paz."
      },
      {
        "sp_es": "",
        "text_es": "Y todos, según la costumbre del lugar, se dan la paz."
      },
      {
        "rubric_es": "El sacerdote da la paz al diácono o ministro."
      },
      {
        "rubric_es": "129."
      },
      {
        "rubric_es": "Después toma el pan consagrado, lo parte sobre la patena, y deja caer una parte del mismo en el cáliz, diciendo en secreto: El Cuerpo y la Sangre de nuestro Señor Jesucristo, unidos en este cáliz, sean para nosotros alimento de vida eterna."
      },
      {
        "rubric_es": "144."
      },
      {
        "rubric_es": "Mientras tanto se canta o se dice: Cordero de Dios que quitas el pecado del mundo, ten piedad de nosotros."
      },
      {
        "sp_es": "",
        "text_es": "Cordero de Dios que quitas el pecado del mundo, ten piedad de nosotros."
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
        "sp_es": "Todos",
        "text_es": "Y con tu espíritu."
      },
      {
        "rubric_es": "128. Luego, si se juzga oportuno, el diácono, o el sacerdote, añade:"
      },
      {
        "sp_es": "D.",
        "text_es": "Dense fraternalmente la paz. ____________________________"
      },
      {
        "rubric_es": "O bien:"
      },
      {
        "sp_es": "",
        "text_es": "Como hijos de Dios, intercambien ahora un signo de comunión fraterna."
      },
      {
        "rubric_es": "O bien:"
      },
      {
        "sp_es": "",
        "text_es": "En Cristo, que nos ha hecho hermanos con su cruz, dense la paz como signo de reconciliación."
      },
      {
        "rubric_es": "O bien:"
      },
      {
        "sp_es": "",
        "text_es": "En el Espíritu de Cristo resucitado, dense fraternalmente la paz."
      },
      {
        "sp_es": "",
        "text_es": "Y todos, según la costumbre del lugar, se dan la paz."
      },
      {
        "rubric_es": "El sacerdote da la paz al diácono o ministro."
      },
      {
        "rubric_es": "129."
      },
      {
        "rubric_es": "Después toma el pan consagrado, lo parte sobre la patena, y deja caer una parte del mismo en el cáliz, diciendo en secreto: El Cuerpo y la Sangre de nuestro Señor Jesucristo, unidos en este cáliz, sean para nosotros alimento de vida eterna."
      },
      {
        "rubric_es": "144."
      },
      {
        "rubric_es": "Mientras tanto se canta o se dice: Cordero de Dios que quitas el pecado del mundo, ten piedad de nosotros."
      },
      {
        "sp_es": "",
        "text_es": "Cordero de Dios que quitas el pecado del mundo, ten piedad de nosotros."
      },
      {
        "sp_es": "",
        "text_es": "Cordero de Dios que quitas el pecado del mundo, danos la paz."
      },
      {
        "rubric_es": "Si la fracción del pan se prolonga, el canto precedente puede repetirse varias veces."
      },
      {
        "sp_es": "",
        "text_es": "La última vez se dice: danos la paz."
      },
      {
        "rubric_es": "131."
      },
      {
        "rubric_es": "A continuación el sacerdote, con las manos juntas, dice en secreto una de las dos oraciones siguientes:"
      },
      {
        "sp_es": "C.",
        "text_es": "Señor Jesucristo, Hijo de Dios vivo, que por voluntad del Padre, cooperando el Espíritu Santo, diste con tu muerte la vida al mundo, líbrame, por la recepción de tu Cuerpo y de tu Sangre, de todas mis culpas y de todo mal."
      },
      {
        "sp_es": "",
        "text_es": "Concédeme cumplir siempre tus mandamientos y jamás permitas que me separe de ti."
      },
      {
        "rubric_es": "O bien:"
      },
      {
        "sp_es": "",
        "text_es": "Señor Jesucristo, la comunión de tu Cuerpo y de tu Sangre, no sea para mí un motivo de juicio y condenación, sino que, por tu piedad, me aproveche para defensa de alma y cuerpo y como remedio saludable."
      },
      {
        "rubric_es": "132."
      },
      {
        "rubric_es": "El sacerdote hace genuflexión, toma el pan consagrado y, sosteniéndolo un poco elevado sobre la patena, lo muestra al pueblo, diciendo:"
      },
      {
        "sp_es": "Todos",
        "text_es": "Éste es el Cordero de Dios, que quita el pecado del mundo."
      },
      {
        "sp_es": "",
        "text_es": "Dichosos los invitados a la cena del Señor."
      },
      {
        "rubric_es": "Y, juntamente con el pueblo, añade una vez:"
      },
      {
        "sp_es": "Todos",
        "text_es": "Señor, no soy digno de que entres en mi casa,"
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
        "sp_es": "",
        "text_es": "Cordero de Dios que quitas el pecado del mundo, danos la paz."
      },
      {
        "rubric_es": "Si la fracción del pan se prolonga, el canto precedente puede repetirse varias veces."
      },
      {
        "sp_es": "",
        "text_es": "La última vez se dice: danos la paz."
      },
      {
        "rubric_es": "131."
      },
      {
        "rubric_es": "A continuación el sacerdote, con las manos juntas, dice en secreto una de las dos oraciones siguientes:"
      },
      {
        "sp_es": "C.",
        "text_es": "Señor Jesucristo, Hijo de Dios vivo, que por voluntad del Padre, cooperando el Espíritu Santo, diste con tu muerte la vida al mundo, líbrame, por la recepción de tu Cuerpo y de tu Sangre, de todas mis culpas y de todo mal."
      },
      {
        "sp_es": "",
        "text_es": "Concédeme cumplir siempre tus mandamientos y jamás permitas que me separe de ti."
      },
      {
        "rubric_es": "O bien:"
      },
      {
        "sp_es": "",
        "text_es": "Señor Jesucristo, la comunión de tu Cuerpo y de tu Sangre, no sea para mí un motivo de juicio y condenación, sino que, por tu piedad, me aproveche para defensa de alma y cuerpo y como remedio saludable."
      },
      {
        "rubric_es": "132."
      },
      {
        "rubric_es": "El sacerdote hace genuflexión, toma el pan consagrado y, sosteniéndolo un poco elevado sobre la patena, lo muestra al pueblo, diciendo:"
      },
      {
        "sp_es": "Todos",
        "text_es": "Éste es el Cordero de Dios, que quita el pecado del mundo."
      },
      {
        "sp_es": "",
        "text_es": "Dichosos los invitados a la cena del Señor."
      },
      {
        "rubric_es": "Y, juntamente con el pueblo, añade una vez:"
      },
      {
        "sp_es": "Todos",
        "text_es": "Señor, no soy digno de que entres en mi casa,"
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
        "sp_es": "",
        "text_es": "Cordero de Dios que quitas el pecado del mundo, danos la paz."
      },
      {
        "rubric_es": "Si la fracción del pan se prolonga, el canto precedente puede repetirse varias veces."
      },
      {
        "sp_es": "",
        "text_es": "La última vez se dice: danos la paz."
      },
      {
        "rubric_es": "131."
      },
      {
        "rubric_es": "A continuación el sacerdote, con las manos juntas, dice en secreto una de las dos oraciones siguientes:"
      },
      {
        "sp_es": "C.",
        "text_es": "Señor Jesucristo, Hijo de Dios vivo, que por voluntad del Padre, cooperando el Espíritu Santo, diste con tu muerte la vida al mundo, líbrame, por la recepción de tu Cuerpo y de tu Sangre, de todas mis culpas y de todo mal."
      },
      {
        "sp_es": "",
        "text_es": "Concédeme cumplir siempre tus mandamientos y jamás permitas que me separe de ti."
      },
      {
        "rubric_es": "O bien:"
      },
      {
        "sp_es": "",
        "text_es": "Señor Jesucristo, la comunión de tu Cuerpo y de tu Sangre, no sea para mí un motivo de juicio y condenación, sino que, por tu piedad, me aproveche para defensa de alma y cuerpo y como remedio saludable."
      },
      {
        "rubric_es": "132."
      },
      {
        "rubric_es": "El sacerdote hace genuflexión, toma el pan consagrado y, sosteniéndolo un poco elevado sobre la patena, lo muestra al pueblo, diciendo:"
      },
      {
        "sp_es": "Todos",
        "text_es": "Éste es el Cordero de Dios, que quita el pecado del mundo."
      },
      {
        "sp_es": "",
        "text_es": "Dichosos los invitados a la cena del Señor."
      },
      {
        "rubric_es": "Y, juntamente con el pueblo, añade una vez:"
      },
      {
        "sp_es": "Todos",
        "text_es": "Señor, no soy digno de que entres en mi casa,"
      },
      {
        "sp_es": "",
        "text_es": "pero una palabra tuya bastará para sanarme."
      },
      {
        "rubric_es": "133."
      },
      {
        "rubric_es": "El sacerdote dice en secreto:"
      },
      {
        "sp_es": "C.",
        "text_es": "El Cuerpo de Cristo me guarde para la vida eterna."
      },
      {
        "sp_es": "",
        "text_es": "Y comulga reverentemente el Cuerpo de Cristo."
      },
      {
        "rubric_es": "Después toma el cáliz y dice en secreto: La Sangre de Cristo me guarde para la vida eterna."
      },
      {
        "sp_es": "",
        "text_es": "Y bebe reverentemente la Sangre de Cristo."
      },
      {
        "rubric_es": "134."
      },
      {
        "rubric_es": "Después toma la patena o la píxide, se acerca a los que quieren comulgar y les presenta el pan consagrado, que sostiene un poco elevado, diciendo a cada uno de ellos: El Cuerpo de Cristo."
      },
      {
        "sp_es": "",
        "text_es": "El que va a comulgar responde: Amén."
      },
      {
        "sp_es": "",
        "text_es": "Y comulga."
      },
      {
        "rubric_es": "El diácono y los ministros que distribuyen la Eucaristía observan los mismos ritos."
      },
      {
        "rubric_es": "135."
      },
      {
        "rubric_es": "Si se comulga bajo las dos especies, se observa el rito descrito en su lugar."
      },
      {
        "rubric_es": "136."
      },
      {
        "rubric_es": "Cuando el sacerdote comulga el Cuerpo de Cristo, comienza el canto de comunión."
      },
      {
        "rubric_es": "137."
      },
      {
        "sp_es": "",
        "text_es": "Acabada la comunión, el diácono, el acólito, o el mismo sacerdote, purifica la patena sobre el cáliz y también el mismo cáliz, a no ser que se prefiera purificarlo en la credencia después de la misa."
      },
      {
        "rubric_es": "Si el sacerdote hace la purificación, dice en secreto:"
      },
      {
        "sp_es": "C.",
        "text_es": "Haz, Señor, que recibamos con un corazón limpio el alimento que acabamos de tomar, y que el don que nos haces en esta vida"
      },
      {
        "sp_es": "",
        "text_es": "nos aproveche para la eterna."
      },
      {
        "rubric_es": "138."
      },
      {
        "rubric_es": "Después el sacerdote puede ir a la sede."
      },
      {
        "rubric_es": "Si se juzga oportuno, se pueden guardar unos momentos de silencio o cantar un salmo o cántico de alabanza."
      },
      {
        "rubric_es": "139."
      },
      {
        "rubric_es": "Luego, de pie en la sede o en el altar, el sacerdote dice:"
      },
      {
        "sp_es": "C.",
        "text_es": "Oremos."
      },
      {
        "sp_es": "",
        "text_es": "Y todos, junto con el sacerdote, oran en silencio durante unos momentos, a no ser que este silencio ya se haya hecho antes."
      },
      {
        "rubric_es": "153."
      },
      {
        "rubric_es": "Después el sacerdote, con las manos extendidas, dice la oración después de la comunión."
      },
      {
        "sp_es": "",
        "text_es": "La oración después de la comunión termina con la conclusión breve."
      },
      {
        "sp_es": "Todos",
        "text_es": "Amén."
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
        "sp_es": "Todos",
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
        "rubric_es": "Se hacen, si es necesario, breves avisos al pueblo."
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
            "sp_es": "",
            "text_es": "."
          },
          {
            "sp_es": "",
            "text_es": "En este momento se hacen, si es necesario y con brevedad, los oportunos anuncios o advertencias al pueblo."
          },
          {
            "rubric_es": "141."
          },
          {
            "rubric_es": "Después tiene lugar la despedida."
          },
          {
            "rubric_es": "El sacerdote extiende las manos hacia el pueblo y dice:"
          },
          {
            "sp_es": "Todos",
            "text_es": "El Señor esté con ustedes."
          },
          {
            "sp_es": "Todos",
            "text_es": "Y con tu espíritu."
          },
          {
            "rubric_es": "El sacerdote bendice al pueblo, diciendo:"
          },
          {
            "sp_es": "Todos",
            "text_es": "La bendición de Dios todopoderoso, Padre, Hijo ✠ y Espíritu Santo, descienda sobre ustedes."
          },
          {
            "sp_es": "Todos",
            "text_es": "Amén."
          },
          {
            "rubric_es": "142."
          },
          {
            "sp_es": "",
            "text_es": "En algunas ocasiones y en determinadas misas rituales puede darse una de la bendiciones solemnes o de las oraciones sobre el pueblo."
          },
          {
            "rubric_es": "143."
          }
        ]
      },
      "B": {
        "label": {
          "es": "Bendición pontifical"
        },
        "lines": [
          {
            "sp_es": "",
            "text_es": "El Obispo, para bendecir al pueblo, usa el siguiente formulario, a no ser que prefiera utilizar una de las bendiciones solemnes o una de las oraciones sobre el pueblo."
          },
          {
            "sp_es": "V/.",
            "text_es": "El Señor esté con ustedes."
          },
          {
            "sp_es": "R/.",
            "text_es": "Y con tu espíritu."
          },
          {
            "sp_es": "V/.",
            "text_es": "Bendito se al nombre del Señor."
          },
          {
            "sp_es": "R/.",
            "text_es": "Ahora y por todos los siglos."
          },
          {
            "sp_es": "V/.",
            "text_es": "Nuestro auxilio es el nombre del Señor."
          },
          {
            "sp_es": "R/.",
            "text_es": "Que hizo el cielo y la tierra."
          },
          {
            "sp_es": "V/.",
            "text_es": "La bendición de Dios todopoderoso,"
          },
          {
            "sp_es": "",
            "text_es": "Pa✠dre, Hi✠jo y Espíritu ✠ Santo, descienda sobre ustedes. R/. Amén."
          },
          {
            "rubric_es": "144. Luego el diácono, o el mismo sacerdote, con las manos juntas, despide al pueblo con una de las fórmulas siguientes:"
          },
          {
            "sp_es": "Todos",
            "text_es": "Pueden ir en paz. ____________________________"
          },
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "La alegría del Señor sea nuestra fuerza. Pueden ir en paz."
          },
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "Glorifiquen al Señor con su vida. Pueden ir en paz."
          },
          {
            "rubric_es": "O bien:"
          },
          {
            "sp_es": "",
            "text_es": "En el nombre del Señor, pueden ir en paz."
          },
          {
            "rubric_es": "O bien, especialmente en los domingos de Pascua:"
          },
          {
            "sp_es": "",
            "text_es": "Anuncien a todos la alegría del Señor resucitado."
          },
          {
            "rubric_es": "Pueden ir en paz. ____________________________ El pueblo responde:"
          },
          {
            "sp_es": "Todos",
            "text_es": "Demos gracias a Dios."
          },
          {
            "rubric_es": "145."
          },
          {
            "rubric_es": "Después el sacerdote besa con veneración el altar, como al comienzo, y, hecha la debida reverencia con los ministros, se retira a la sacristía."
          },
          {
            "rubric_es": "146."
          },
          {
            "rubric_es": "Si sigue inmediatamente otra acción litúrgica, se omite el rito de despedida."
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
            "rubric_es": "144. Luego el diácono, o el mismo sacerdote, con las manos juntas, despide al pueblo con una de las fórmulas siguientes:"
          },
          {
            "sp_es": "Todos",
            "text_es": "Pueden ir en paz. ____________________________"
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
            "text_es": "La alegría del Señor sea nuestra fuerza. Pueden ir en paz."
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
            "text_es": "Glorifiquen al Señor con su vida. Pueden ir en paz."
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
            "text_es": "En el nombre del Señor, pueden ir en paz."
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
            "text_es": "Anuncien a todos la alegría del Señor resucitado."
          },
          {
            "rubric_es": "Pueden ir en paz. ____________________________ El pueblo responde:"
          },
          {
            "sp_es": "Todos",
            "text_es": "Demos gracias a Dios."
          },
          {
            "rubric_es": "145."
          },
          {
            "rubric_es": "Después el sacerdote besa con veneración el altar, como al comienzo, y, hecha la debida reverencia con los ministros, se retira a la sacristía."
          },
          {
            "rubric_es": "146."
          },
          {
            "rubric_es": "Si sigue inmediatamente otra acción litúrgica, se omite el rito de despedida."
          }
        ]
      }
    }
  },
  {
    "id": "4.4 final_song",
    "type": "part",
    "header": {
      "es": "Canto final"
    },
    "lines": [
      {
        "rubric_es": "El sacerdote besa el altar y se retira con los ministros."
      }
    ]
  }
]);
  const ordinarySource = Object.freeze({"authority":"Conferencia del Episcopado Mexicano (texto aprobado; copia de consulta)","title":"Ordinario de la Misa — versión de México","url":"https://liturgiapapal.org/attachments/article/1030/Ordinario%20de%20la%20Misa%20Me%CC%81xico.pdf","pages":"PDF 1–127"});
  const officialOrderCorpus = Object.freeze({ source: ordinarySource, pageRange: 'PDF 1–127', text_es: "ORDINARIO DE LA MISA<br><br>. Reunido el pueblo, el sacerdote con los ministros va al altar mientras se entona el canto de entrada. Cuando llega al altar, el sacerdote con los ministros hace la debida reverencia, besa el altar y, si se juzga oportuno, lo inciensa. Después se dirige con los ministros a la sede. Terminado el canto de entrada, el sacerdote y los fieles, de pie, se santiguan mientras el sacerdote, de cara al pueblo, dice: En el nombre del Padre, y del Hijo, y del Espíritu Santo. El pueblo responde: Amén. 2. El sacerdote, extendiendo las manos, saluda al pueblo con una de las fórmulas siguientes: El Señor esté con ustedes. O bien: La gracia de nuestro Señor Jesucristo, el amor del Padre y la comunión del Espíritu Santo esté con todos ustedes. O bien: La gracia y la paz de Dios, nuestro Padre, y de Jesucristo, el Señor, esté con todos ustedes. El pueblo responde: Y con tu espíritu. También pueden usarse las fórmulas de saludo propias de cada tiempo. El obispo, en vez de las anteriores fórmulas, en este primer saludo dice: La paz esté con ustedes.<br><br>3. El sacerdote, o el diácono, u otro ministro puede hacer una monición muy breve para introducir la Misa del día Acto Penitencial 4. A continuación se hace el acto penitencial, y el sacerdote invita a los fieles al arrepentimiento diciendo: Hermanos: para celebrar dignamente estos sagrados misterios reconozcamos nuestros pecados. O bien: El Señor Jesús, que nos invita a la mesa de la Palabra y de la Eucaristía, nos llama ahora a la conversión. Reconozcamos, pues, que somos pecadores e invoquemos con esperanza la misericordia de Dios. O bien: Al comenzar esta celebración eucarística, pidamos a Dios que nos conceda la conversión de nuestros corazones; así obtendremos la reconciliación y se acrecentará nuestra comunión con Dios y con nuestros hermanos. O bien: Humildes y penitentes, como el publicano en el templo, acerquémonos al Dios justo, y pidámosle que tenga piedad de nosotros, que también nos reconocemos pecadores. Fórmula I Se hace una breve pausa en silencio. Después, hacen todos en común la confesión de sus pecados:<br><br>Yo confieso ante Dios todopoderoso y ante ustedes, hermanos, que he pecado mucho de pensamiento, palabra, obra y omisión: Golpeándose el pecho, dicen: por mi culpa, por mi culpa, por mi gran culpa. Luego prosiguen: Por eso ruego a santa María, siempre Virgen, a los ángeles, a los santos y a ustedes, hermanos, que intercedan por mí ante Dios, nuestro Señor. El sacerdote concluye con la siguiente plegaria: Dios todopoderoso tenga misericordia de nosotros, perdone nuestros pecados y nos lleve a la vida eterna. El pueblo responde: Amén. Fórmula II 5. Se hace una breve pausa en silencio. Después el sacerdote dice: Señor, ten misericordia de nosotros. El pueblo responde: Porque hemos pecado contra ti. El sacerdote prosigue: Muéstranos, Señor, tu misericordia. El pueblo responde:<br><br>Y danos tu salvación. El sacerdote concluye con la siguiente plegaria: Dios todopoderoso tenga misericordia de nosotros, perdone nuestros pecados y nos lleve a la vida eterna. El pueblo responde: Amén. Fórmula III 6. Se hace una breve pausa en silencio. Después el sacerdote dice: Tú que has sido enviado a sanar los corazones afligidos: Señor, ten piedad. (O bien: Kyrie, eléison). El pueblo responde: Señor, ten piedad. (O bien: Kyrie, eléison). El sacerdote prosigue: Tú que has venido a llamar a los pecadores: Cristo ten piedad. (O bien: Christe, eléison). El pueblo responde: Cristo ten piedad. (O bien: Christe, eléison). El sacerdote prosigue: Tú que estás sentado a la derecha del Padre para interceder por nosotros: Señor, ten piedad. (O bien: Kyrie, eléison). El pueblo responde:<br><br>Señor, ten piedad. (O bien: Kyrie, eléison). El sacerdote concluye con la siguiente plegaria: Dios todopoderoso tenga misericordia de nosotros, perdone nuestros pecados y nos lleve a la vida eterna. El pueblo responde: Amén. 7. Siguen las invocaciones Señor, ten piedad, a no ser que ya se hayan utilizado en alguna de las fórmulas del acto penitencial. V/. Señor, ten piedad. R/. Señor, ten piedad. V/. Cristo, ten piedad. R/. Cristo, ten piedad. V/. Señor, ten piedad. R/. Señor, ten piedad. 7. A continuación, si está prescrito, se canta el himno: Gloria a Dios en el cielo, y en la tierra paz a los hombres que ama el Señor. Por tu inmensa gloria te alabamos, te bendecimos, te adoramos, te glorificamos, te damos gracias, Señor Dios, Rey celestial, Dios Padre todopoderoso. Señor, Hijo único, Jesucristo.<br><br>Señor Dios, Cordero de Dios, Hijo del Padre; tú que quitas el pecado del mundo, ten piedad de nosotros; tú que quitas el pecado del mundo, atiende nuestra súplica; tú que estás sentado a la derecha del Padre, ten piedad de nosotros; porque sólo tú eres Santo, sólo tú Señor, sólo tú Altísimo, Jesucristo, con el Espíritu Santo, en la Gloria de Dios Padre. Amén. 9. Acabado el himno, el sacerdote, con las manos juntas, dice: Oremos. Y todos, junto con el sacerdote, oran en silencio durante unos momentos. Después el sacerdote, con las manos extendidas, dice la oración colecta. La colecta termina siempre con la conclusión larga. Al final de la oración el pueblo aclama: Amén.<br><br>. El lector va al ambón y lee la primera lectura, que todos escuchan sentados. Para indicar el fin de la lectura, el lector dice: Palabra de Dios. Todos aclaman: Te alabamos, Señor. 11. El salmista o el cantor proclama el salmo, y el pueblo intercala la respuesta, a no ser que el salmo se diga seguido sin estribillo del pueblo. 12. Si hay segunda lectura, se lee en el ambón, como la primera. Para indicar el fin de la lectura, el lector dice: Palabra de Dios. Todos aclaman: Te alabamos, Señor. 13. Sigue el Aleluya o, en tiempo de Cuaresma, el canto antes del Evangelio. 14. Mientras tanto, si se usa incienso, el sacerdote lo pone en el incensario. Después el diácono (o el concelebrante que ha de proclamar el Evangelio, en la misa presidida por el Obispo), inclinado ante el sacerdote, pide la bendición, diciendo en voz baja: Padre, dame tu bendición. El sacerdote en voz baja dice: El Señor esté en tu corazón y en tus labios, para que anuncies dignamente su Evangelio; en el nombre del Padre, y del Hijo X, y del Espíritu Santo. El diácono o el concelebrante responde:<br><br>Amén. Si el mismo sacerdote debe proclamar el Evangelio, inclinado ante el altar, dice en secreto: Purifica mi corazón y mis labios, Dios todopoderoso, para que anuncie dignamente tu Evangelio. 15. Después el diácono (o el sacerdote) va al ambón, acompañado eventualmente por los ministros que llevan el incienso y los cirios; ya en el ambón dice: El Señor esté con ustedes. Y el pueblo responde: Y con tu espíritu. El diácono (o el sacerdote): Lectura del santo Evangelio según san N. Y mientras tanto hace la señal de la cruz sobre el libro y sobre su frente, labios y pecho. El pueblo aclama: Gloria a ti, Señor. El diácono (o el sacerdote), si se usa incienso, inciensa el libro. Luego proclama el Evangelio. 15. Acabado el Evangelio el diácono (o el sacerdote) dice: Palabra del Señor. Todos aclaman: Gloria ti, Señor Jesús. Si la aclamación es cantada pueden usarse otras respuestas de alabanza a Jesucristo, por ejemplo:<br><br>Tu palabra, Señor, es la verdad, y tu ley nuestra libertad. O bien: Tu palabra, Señor, es lámpara que alumbra nuestros pasos. O bien: Tu palabra, Señor, permanece por los siglos. Después el diácono lleva el libro al celebrante, y éste lo besa, diciendo en secreto: Las palabras del Evangelio borren nuestros pecados. O bien el mismo diácono besa el libro, diciendo en secreto las mismas palabras. 17. Luego tiene lugar la homilía; ésta es obligatoria todos los domingos y fiestas de precepto y se recomienda en los restantes días. 18. Acabada la homilía, si la liturgia del día lo prescribe, se hace la profesión de fe: Creo en un solo Dios, Padre Todopoderoso, Creador del cielo y de la tierra. de todo lo visible y lo invisible. Creo en un solo Señor, Jesucristo, Hijo único de Dios, nacido del Padre antes de todos los siglos: Dios de Dios, Luz de Luz, Dios verdadero de Dios verdadero, engendrado, no creado, de la misma naturaleza del Padre, por quien todo fue hecho; que por nosotros, los hombres, y por nuestra salvación bajó del cielo, En las palabras que siguen, hasta se hizo hombre, todos se inclinan. y por obra del Espíritu Santo<br><br>se encarnó de María, la Virgen, y se hizo hombre; y por nuestra causa fue crucificado en tiempos de Poncio Pilato; padeció y fue sepultado, y resucitó al tercer día, según las Escrituras, y subió al cielo, y está sentado a la derecha del Padre; y de nuevo vendrá con gloria para juzgar a vivos y muertos, y su reino no tendrá fin. Creo en el Espíritu Santo, Señor y dador de vida, que procede del Padre y del Hijo, que con el Padre y el Hijo recibe una misma adoración y gloria, y que habló por los profetas. Creo en la Iglesia, que es una, santa, católica y apostólica. Confieso que hay un solo Bautismo para el perdón de los pecados. Espero la resurrección de los muertos y la vida del mundo futuro. Amén. 19. Para utilidad de los fieles, en lugar del símbolo niceno-constantinopolitano, la profesión de fe se puede hacer, especialmente en el tiempo de Cuaresma y en la Cincuentena pascual, con el siguiente símbolo llamado «de los apóstoles»: Creo en Dios, Padre todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, nuestro Señor, En las palabras que siguen, hasta María Virgen, todos se inclinan. que fue concebido por obra y gracia del Espíritu Santo, nació de santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado,<br><br>descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos. Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén. 20. Después se hace la plegaria universal u oración de los fieles.<br><br>. Acabada la Liturgia de la palabra, los ministros colocan en el altar el corporal, el purificador, el cáliz y el misal; mientras tanto puede ejecutarse un canto adecuado. 22. Conviene que los fieles expresan su participación en la ofrenda, bien sea llevando el pan y el vino para la celebración de la eucaristía, bien aportando otros dones para las necesidades de la Iglesia o de los pobres. 23. El sacerdote se acerca al altar, toma la patena con el pan y, manteniéndola un poco elevada sobre el altar, dice en secreto: Bendito seas, Señor, Dios del universo, por este pan, fruto de la tierra y del trabajo del hombre, que recibimos de tu generosidad y ahora te presentamos; él será para nosotros pan de vida. Después deja la patena con el pan sobre el corporal. Si no se canta durante la presentación de las ofrendas, el sacerdote puede decir en voz alta estas palabras; al final el pueblo aclama: Bendito seas por siempre, Señor. 24. El diácono, o el sacerdote, echa vino y un poco de agua en el cáliz, diciendo en secreto: El agua unido al vino sea signo de nuestra participación en la vida divina de quien ha querido compartir nuestra condición humana. 25. Después el sacerdote toma el cáliz y, manteniéndolo un poco elevado sobre el altar, dice en secreto: Bendito seas, Señor, Dios del universo, por este vino, fruto de la vid y del trabajo del hombre, que recibimos de tu generosidad y ahora te presentamos; él será para nosotros bebida de salvación.<br><br>Después deja el cáliz sobre el corporal. Si no se canta durante la presentación de las ofrendas, el sacerdote puede decir en voz alta estas palabras; al final el pueblo puede aclamar: Bendito seas por siempre, Señor. 26. A continuación, el sacerdote, inclinado, dice en secreto: Acepta Señor, nuestro corazón contrito y nuestro espíritu humilde; que éste sea hoy nuestro sacrificio y que sea agradable en tu presencia, Señor, Dios nuestro. 27. Y, si se juzga oportuno, inciensa las ofrendas y el altar. A continuación el diácono o un ministro inciensa al sacerdote y al pueblo. 28. Luego el sacerdote, de pie a un lado del altar, se lava las manos, diciendo en secreto: Lava del todo mi delito, Señor, limpia mi pecado. 29. Después, de pie en el centro del altar y de cara al pueblo, extendiendo y juntando las manos, dice una de las siguientes fórmulas: Oren, hermanos, para que este sacrificio, mío y de ustedes, sea agradable a Dios, Padre todopoderoso. O bien: En el momento de ofrecer el sacrificio de toda la Iglesia, oremos a Dios, Padre todopoderoso. O bien: Oren, hermanos, para que, llevando al altar<br><br>los gozos y las fatigas de cada día nos dispongamos a ofrecer el sacrificio agradable a Dios, Padre todopoderoso. El pueblo responde: El Señor reciba de tus manos este sacrificio, para alabanza y gloria de su nombre, para nuestro bien y el de toda su santa Iglesia. 30. Luego el sacerdote, con las manos extendidas, dice la oración sobre las ofrendas. Al final el pueblo aclama: Amén. PLEGARIA EUCARÍSTICA 31. El sacerdote comienza la plegaria eucarística con el prefacio. Con las manos extendidas dice: El Señor esté con ustedes. El pueblo responde: Y con tu espíritu. El sacerdote, elevando las manos, prosigue: Levantemos el corazón. El pueblo responde: Lo tenemos levantado hacia el Señor. El sacerdote, con las manos extendidas, añade: Demos gracias al Señor, nuestro Dios.<br><br>El pueblo responde: Es justo y necesario. El sacerdote prosigue el Prefacio con las manos extendidas. Al final del Prefacio, junta las manos y en unión del pueblo, concluye el prefacio, cantando o diciendo en voz alta: Santo, Santo, Santo es el Señor, Dios del universo. Llenos están el cielo y la tierra de tu gloria. Hosanna en el cielo. Bendito el que viene en nombre del Señor. Hosanna en el cielo. 32. En todas las Misas, el sacerdote puede cantar algunas partes de la Plegaria eucarística, especialmente las principales. En la Plegaria eucarística I, o Canon Romano, se puede omitir lo que se encuentra entre paréntesis.<br><br>PREFACIO I DE ADVIENTO LAS DOS VENIDAS DE CRISTO 33. Este prefacio se dice en las misas del tiempo, desde el primer domingo de Adviento hasta el 16 de diciembre, y en las restantes misas que se celebran durante este tiempo y que no tienen prefacio propio. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro. Quien al venir por vez primera en la humildad de nuestra carne, realizó el plan de redención trazado desde antiguo y nos abrió el camino de la salvación; para que cuando venga de nuevo en la majestad de su gloria, revelando así la plenitud de su obra, podamos recibir los bienes prometidos que ahora, en vigilante espera, confiamos alcanzar. Por eso, con los ángeles y arcángeles y con todos los coros celestiales, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo…<br><br>PREFACIO II DE ADVIENTO LA DOBLE ESPERA DE CRISTO 34. Este prefacio se dice en las misas del tiempo, desde el 17 al 24 de diciembre, y en las restantes misas que se celebran durante este mismo tiempo y que no tienen prefacio propio. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo nuestro Señor. A quien todos los profetas anunciaron, la Virgen esperó con inefable amor de Madre; Juan lo proclamó ya próximo y lo señaló después entre los hombres. El mismo Señor nos concede ahora prepararnos con alegría al misterio de su nacimiento, para encontrarnos así cuando llegue, velando en oración y cantando su alabanza. Por eso, con los ángeles y los arcángeles y con todos los coros celestiales, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo…<br><br>PREFACIO III DE ADVIENTO CRISTO, SEÑOR Y JUEZ DE LA HISTORIA Este prefacio se dice en las misas del tiempo, desde el primer domingo de Adviento hasta el día 16 de diciembre, y en las restantes Misas que se celebran durante este mismo tiempo y no tienen prefacio propio. En verdad es justo darte gracias, es nuestro deber cantar en tu honor himnos de bendición y de alabanza, Padre todopoderoso, principio y fin de todo lo creado. Tú nos has ocultado el día y la hora en que Cristo, tu Hijo, Señor y Juez de la historia, aparecerá revestido de poder y de gloria, sobre las nubes del cielo. En aquel día terrible y glorioso pasará la figura de este mundo y nacerán los cielos nuevos y la tierra nueva. El mismo Señor que se nos mostrará entonces lleno de gloria viene ahora a nuestro encuentro en cada hombre y en cada acontecimiento, para que lo recibamos en la fe y por el amor demos testimonio de la esperanza dichosa de su reino. Por eso, mientras aguardamos su última venida, unidos a los ángeles y a los santos, cantamos el himno de tu gloria: Santo, Santo, Santo...<br><br>PREFACIO IV DE ADVIENTO MARÍA, NUEVA EVA Este prefacio se dice en las misas del tiempo, desde el día 17 al 24 de diciembre, y en las restantes misas que se celebran durante este mismo tiempo y no tienen prefacio propio. En verdad es justo darte gracias, Señor, Padre santo, Dios todopoderoso y eterno. Te alabamos, te bendecimos y te glorificamos por el misterio de la Virgen Madre. Porque, si del antiguo adversario nos vino la ruina, en el seno virginal de la hija de Sión ha germinado aquel que nos nutre con el pan de los ángeles, y ha brotado para todo el género humano la salvación y la paz. La gracia que Eva nos arrebató nos ha sido devuelta en María. En ella, madre de todos los hombres, la maternidad, redimida del pecado y de la muerte, se abre al don de una vida nueva. Así, donde había crecido el pecado, se ha desbordado tu misericordia en Cristo, nuestro Salvador. Por eso nosotros, mientras esperamos la venida de Cristo, unido a los ángeles y a los santos, cantamos el himno de tu gloria: Santo, Santo, Santo...<br><br>PREFACIO I DE NAVIDAD CRISTO, LUZ DEL MUNDO 35. Este prefacio se dice en las misas de Navidad y de su octava; durante la octava, se dice incluso en aquellas misas que, si se celebraran en otro tiempo tendrían prefacio propio, pero no en aquellas que tienen prefacio propio referido a las Personas divinas o sus misterios. También se dice en las ferias del tiempo de Navidad. En verdad es justo y necesario, es nuestro deber y salvación, darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno. Porque gracias al misterio de la Palabra hecha carne, la luz de tu gloria brilló ante nuestros ojos con nuevo resplandor para que conociendo a Dios visiblemente, él nos lleve al amor de lo invisible. Por eso, con los ángeles y los arcángeles y con todos los coros celestiales, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo... Si se usa el Canon romano, se dice Reunidos en comunión propio. En la misa que se celebra en la vigilia o en la noche de Navidad se dice: para celebrar la noche santa en que...; después se dice siempre: para celebrar el día santa en que..., hasta la octava de Navidad inclusiva.<br><br>PREFACIO II DE NAVIDAD LA RESTAURACIÓN DEL UNIVERSO EN LA ENCARNACIÓN 36. Este prefacio se dice en las misas de Navidad y de su octava; durante la octava, se dice incluso en aquellas misas que, si se celebraran en otro tiempo tendrían prefacio propio, pero no en aquellas que tienen prefacio propio referido a las Personas divinas o sus misterios. También se dice en las ferias del tiempo de Navidad. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo nuestro Señor. Porque en el misterio santo que hoy celebramos, Cristo, el Señor, sin dejar la gloria del Padre, se hace presente entre nosotros de un modo nuevo; el que era invisible en su naturaleza, se hice visible al adoptar la nuestra; el eterno, engendrado antes del tiempo, comparte nuestra vida temporal para asumir en sí todo lo creado, para reconstruir los que estaba caído y restaurar de esto modo el universo, para llamar de nuevo al reino de los cielos al hombre sumergido el pecado. Por eso, unidos a los coros angélicos, te aclamamos, llenos de alegría: Santo, Santo, Santo... Si se usa el Canon romano, se dice Reunidos en comunión propio. En la misa que se celebra en la vigilia o en la noche de Navidad se dice: para celebrar la noche santa en que...; después se dice siempre: para celebrar el día santa en que..., hasta la octava de Navidad inclusiva.<br><br>PREFACIO III DE NAVIDAD EL INTERCAMBIO EFECTUADO EN LA ENCARNACIÓN DEL VERBO 37. Este prefacio se dice en las misas de Navidad y de su octava; durante la octava, se dice incluso en aquellas misas que, si se celebraran en otro tiempo tendrían prefacio propio, pero no en aquellas que tienen prefacio propio referido a las Personas divinas o sus misterios. También se dice en las ferias del tiempo de Navidad. En verdad es justo y necesario, es nuestro deber y salvación, darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo nuestro Señor. Por él, hoy resplandece ante el mundo el maravilloso intercambio que nos salva, pues al revestirse tu Hijo de nuestra frágil condición, no sólo confiere dignidad eterna a la naturaleza humana, sino que por esta unión admirable, nos hace a nosotros eternos. Por eso, unidos a los coros angélicos, te aclamamos llenos de alegría: Santo, Santo, Santo... Si se usa el Canon romano, se dice Reunidos en comunión propio. En la misa que se celebra en la vigilia o en la noche de Navidad se dice: para celebrar la noche santa en que...; después se dice siempre: para celebrar el día santa en que..., hasta la octava de Navidad inclusiva.<br><br>PREFACIO DE LA EPIFANÍA DEL SEÑOR CRISTO, LUZ DE LOS PUEBLOS 38. Este prefacio se dice en las misas de la solemnidad de la Epifanía. También puede decirse este prefacio, o bien uno de los de Navidad, en los días que van desde la solemnidad de la Epifanía hasta el sábado antes del domingo del Bautismo del Señor. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno. Porque [hoy] has revelado en Cristo, para luz de los pueblos, el verdadero misterio de nuestra salvación; pues al manifestarse Cristo en nuestra carne mortal nos hiciste partícipes de la gloria de su inmortalidad. Por eso, con los ángeles y arcángeles y con todos los coros celestiales, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo... En la solemnidad de la Epifanía, si se usa el Canon romano, se dice Reunidos en comunión propio.<br><br>PREFACIO I DE CUARESMA SIGNIFICACIÓN ESPIRITUAL DE LA CUARESMA 39. Este prefacio se dice en el tiempo de Cuaresma, sobre todo en los domingos, cuando no corresponda decir un prefacio que sea más indicado. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno por Cristo, Señor nuestro. Por él concedes a tus hijos anhelar, años tras año, con el gozo de habernos purificado, la solemnidad de la Pascua, para que, dedicados con mayor entrega a la alabanza divina y al amor fraterno, por la celebración de los misterios que nos dieron nuestra vida, lleguemos a ser con plenitud hijos de Dios. Por eso, con los ángeles y arcángeles y con todos los coro celestiales, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo...<br><br>PREFACIO II DE CUARESMA LA PENITENCIA ESPIRITUAL 40. Este prefacio se dice en el tiempo de Cuaresma, sobre todo en los domingos, cuando no corresponda decir un prefacio que sea más indicado. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno. Porque has establecido generosamente este tiempo de gracia para renovar en santidad a tus hijos, de modo que, libres de todo afecto desordenado, vivamos las realidades temporales como primicias de las realidades eternas. Por eso, con todos los ángeles y santos, te alabamos, proclamando sin cesar: Santo, Santo, Santo...<br><br>PREFACIO III DE CUARESMA LOS FRUTOS DE LAS PRIVACIONES VOLUNTARIAS 41. Este prefacio se dice en las Misas de los días feriales de Cuaresma y en los días penitenciales. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno. Porque con nuestras privaciones voluntarias nos enseñas a reconocer y agradecer tus dones, a dominar nuestro afán de suficiencia y a repartir nuestros bienes con los necesitados, imitando así tu generosidad. Por eso, con todos los ángeles y santos, te glorificamos y te aclamamos diciendo: Santo, Santo, Santo...<br><br>PREFACIO IV DE CUARESMA LOS FRUTOS DEL AYUNO 42. Este prefacio se dice en las Misas de los días feriales de Cuaresma y en los días penitenciales. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno. Porque con el ayuno corporal refrenas nuestras pasiones, elevas nuestro espíritu, nos das fuerza y recompensa, por Cristo, Señor nuestro. Por él, los ángeles y los arcángeles y todos los coros celestiales celebran tu gloria, unidos en común alegría. Permítenos asociarnos a sus voces cantando humildemente tu alabanza: Santo, Santo, Santo...<br><br>PREFACIO V DE CUARESMA EL CAMINO DEL ÉXODO EN EL DESIERTO CUARESMAL Este prefacio se dice en las misas de las ferias de Cuaresma. En verdad es justo bendecir tu nombre, Padre rico en misericordia, ahora que, en nuestro itinerario hacia la luz pascual, seguimos los pasos de Cristo, maestro y modelo de la humanidad, reconciliada en el amor. Tú abres a la Iglesia el comino de un nuevo éxodo a través del desierto cuaresmal, para que, llegados a la montaña santa, con el corazón contrito y humillado, reavivemos nuestra vocación de pueblo de la alianza, convocado para bendecir tu nombre, escuchar tu Palabra y experimentar con gozo tus maravillas. Por estos signos de salvación, unidos a los ángeles, ministros de tu gloria, proclamamos el canto de tu alabanza: Santo, Santo, Santo...<br><br>PREFACIO I DE LA PASIÓN DEL SEÑOR LA FUERZA DE LA CRUZ 43. Este prefacio se dice en las ferias de la quinta semana de Cuaresma y en las misas de los misterios de la cruz y de la pasión del Señor. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno. Porque en la pasión salvadora de tu Hijo el universo aprende a proclamar tu grandeza y, por la fuerza de la cruz, el mundo es juzgado como reo y el Crucificado exaltado como juez poderoso. Por eso, ahora nosotros, llenos de alegría, te aclamamos con los ángeles y los santos diciendo: Santo, Santo, Santo...<br><br>PREFACIO II DE LA PASIÓN DEL SEÑOR LA VICTORIA DE LA PASIÓN 44. Este prefacio se dice el lunes, martes y miércoles de la Semana Santa. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro. Porque se acercan ya los días santos de su pasión salvadora y de su resurrección gloriosa; en ellos celebramos su triunfo sobre el poder de nuestro enemigo y renovamos el misterio de nuestra redención. Por eso, los ángeles te cantan con júbilo eterno y nosotros nos unimos a sus voces cantando humildemente tu alabanza: Santo, Santo, Santo...<br><br>PREFACIO PASCUAL I EL MISTERIO PASCUAL 46. Este prefacio se dice durante el tiempo pascual. En la misa de la Vigilia pascual se dice en esta noche; el día de Pascua y durante la octava: en este día; en las restantes misas: en este tiempo. En verdad es justo y necesario, es nuestro deber y salvación glorificarte siempre, Señor; pero más que nunca en esta noche (este día) (este tiempo) en que Cristo, nuestra Pascua, ha sido inmolado. Porque él es el verdadero Cordero que quitó el pecado del mundo; muriendo destruyó nuestra muerte, y resucitando restauró la vida. Por eso, con esta efusión de gozo pascual, el mundo entero se desborda de alegría y también los coros celestiales, los ángeles y los arcángeles, cantan sin cesar el himno de tu gloria: Santo, Santo, Santo. Cuando se utiliza el Canon romano, se dice Reunidos en comunión y Acepta, Señor, en tu bondad, propios. En la misa de la Vigilia pascual se dice: para celebrar la noche santa...<br><br>PREFACIO PASCUAL II LA NUEVA VIDA EN CRISTO 46. Este prefacio se dice durante el tiempo pascual. En verdad es justo y necesario, es nuestro deber y salvación glorificarte siempre, Señor; pero más que nunca en este tiempo en que Cristo, nuestra Pascua, ha sido inmolado. Por él, los hijos de la luz amanecen a la vida eterna, los creyentes atraviesan los umbrales del reino de los cielos; porque en la muerte de Cristo nuestra muerte ha sido vencida y en su resurrección hemos resucitado todos. Por eso, con esta efusión de gozo pascual, el mundo entero se desborda de alegría, y también los coros celestiales, los ángeles y los arcángeles, cantan sin cesar el himno de tu gloria: Santo, Santo, Santo...<br><br>PREFACIO PASCUAL III CRISTO VIVO E INTERCESOR PERPETUO EN FAVOR NUESTRO 47. Este prefacio se dice durante el tiempo pascual. En verdad es justo y necesario, es nuestro deber y salvación glorificarte siempre, Señor; pero más que nunca en este tiempo en que Cristo, nuestra Pascua, ha sido inmolado. Porque él no cesa de ofrecerse por nosotros, de interceder por todos ante ti; inmolado, ya no vuelve a morir; sacrificado, vive para siempre. Por eso, con esta efusión de gozo pascual, el mundo entero se desborda de alegría, y también los coros celestiales, los ángeles y los arcángeles, cantan sin cesar el himno de tu gloria: Santo, Santo, Santo...<br><br>PREFACIO PASCUAL IV LA RESTAURACIÓN DEL UNIVERSO POR LE MISTERIO PASCUAL 48. Este prefacio se dice durante el tiempo pascual. En verdad es justo y necesario, es nuestro deber y salvación glorificarte siempre, Señor; pero más que nunca en este tiempo en que Cristo, nuestra Pascua, ha sido inmolado. Porque en él fue demolida nuestra antigua miseria, reconstruido cuanto estaba derrumbado y renovada en plenitud la salvación. Por eso, con esta efusión de gozo pascual, el mundo entero se desborda de alegría, y también los coros celestiales, los ángeles y los arcángeles, cantan sin cesar el himno de tu gloria: Santo, Santo, Santo...<br><br>PREFACIO PASCUAL V CRISTO, SACERDOTE Y VÍCTIMA 49. Este prefacio se dice durante el tiempo pascual. En verdad es justo y necesario, es nuestro deber y salvación glorificarte siempre, Señor; pero más que nunca en este tiempo en que Cristo, nuestra Pascua, ha sido inmolado. Porque él, con la inmolación de su cuerpo en la cruz, dio pleno cumplimiento a lo que anunciaban los sacrificios de la antigua alianza, y ofreciéndose a sí mismo por nuestra salvación, quiso ser al mismo tiempo sacerdote, víctima y altar. Por eso, con esta efusión de gozo pascual, el mundo entero se desborda de alegría, y también los coros celestiales, los ángeles y los arcángeles, cantan sin cesar el himno de tu gloria: Santo, Santo, Santo...<br><br>PREFACIO I DE LA ASCENSIÓN DEL SEÑOR EL MISTERIO DE LA ASCENSIÓN 50. Este prefacio se dice el día de la Ascensión del Señor; puede decirse también en los días después de la Ascensión hasta el sábado antes de Pentecostés en aquellas misas que no tienen prefacio propio. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno. Porque Jesús, el Señor, el rey de la gloria, vencedor del pecado y de la muerte, ha ascendido [hoy] ante el asombro de los ángeles a lo más alto del cielo, como mediador entre Dios y los hombres, como juez de vivos y muertos. No se ha ido para desentenderse de este mundo, sino que ha querido precedernos como cabeza nuestra para que nosotros, miembros de su Cuerpo, vivamos con la ardiente esperanza de seguirlo en su reino. Por eso, con esta efusión de gozo pascual, el mundo entero se desborda de alegría, y también los coros celestiales, los ángeles y los arcángeles, cantan sin cesar el himno de tu gloria: Santo, Santo, Santo... El día de la Ascensión, cuando se utiliza el Canon romano, se dice Reunidos en comunión propio.<br><br>PREFACIO II DE LA ASCENSIÓN DEL SEÑOR EL MISTERIO DE LA ASCENSIÓN 51. Este prefacio se dice el día de la Ascensión del Señor; puede decirse también en los días después de la Ascensión hasta el sábado antes de Pentecostés en aquellas misas que no tienen prefacio propio. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro. Que después de su resurrección se apareció visiblemente a todos sus discípulos y, ante sus ojos, fue elevado al cielo para hacernos compartir su divinidad. Por eso, con esta efusión de gozo pascual, el mundo entero se desborda de alegría, y también los coros celestiales, los ángeles y los arcángeles, cantan sin cesar el himno de tu gloria: Santo, Santo, Santo... El día de la Ascensión, cuando se utiliza el Canon romano, se dice Reunidos en comunión propio.<br><br>PREFACIO PARA DESPUÉS DE LA ASCENSIÓN EN LA ESPERA DE LA VENIDA DEL ESPÍRITU SANTO Este prefacio se dice en los días que siguen a la Ascensión hasta el sábado antes del domingo de Pentecostés. En verdad es justo y necesario, que todas las criaturas, en el cielo y en la tierra, se unan en tu alabanza, Dios todopoderoso y eterno, por Jesucristo, tu Hijo, Señor del Universo. El cual, habiendo entrado una vez para siempre en el santuario del cielo, ahora intercede por nosotros, como mediador que asegura la perenne efusión del Espíritu. Pastor y obispo de nuestras almas, nos invita a la plegaria unánime, a ejemplo de María y los Apóstoles, en la espera de un nuevo Pentecostés. Por este misterio de santificación y de amor, unidos a los ángeles y a los santos, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo....<br><br>PREFACIO I PARA LOS DOMINGOS DEL TIEMPO ORDINARIO EL MISTERIO PASCUAL HA HECHO DE NOSOTROS EL PUEBLO DE DIOS 52. Este prefacio se dice en los domingos del Tiempo Ordinario. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro. Quien, por su misterio pascual, realizó la obra maravillosa de llamarnos del pecado y de la muerte al honor de ser estirpe elegida, sacerdocio real, nación consagrada, pueblo de su propiedad, para que, trasladados de las tinieblas a tu luz admirable, proclamemos ante el mundo tus maravillas. Por eso, con los ángeles y arcángeles y con todos los coros celestiales, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo... Los domingos en las plegarias eucarísticas I, II y III se puede hacer el recuerdo dominical propio.<br><br>PREFACIO II PARA LOS DOMINGOS DEL TIEMPO ORDINARIO EL PLAN DIVINO DE LA SALVACIÓN 53. Este prefacio se dice en los domingos del Tiempo Ordinario. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro. El cual, compadecido del extravío de los hombres, quiso nacer de la Virgen; sufriendo la cruz, nos libró de eterna muerte, y, resucitando, nos dio vida eterna. Por eso, con los ángeles y arcángeles y con todos los coros celestiales, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo... Los domingos en las plegarias eucarísticas I, II y III se puede hacer el recuerdo dominical propio.<br><br>PREFACIO III PARA LOS DOMINGOS DEL TIEMPO ORDINARIO EL HOMBRE SALVADO POR UN HOMBRE 54. Este prefacio se dice en los domingos del Tiempo Ordinario. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno. Porque reconocemos como obra de tu poder admirable no sólo haber socorrido nuestra débil naturaleza con la fuerza de tu divinidad, sino haber previsto el remedio en la misma debilidad humana, y de lo que era nuestra ruina haber hecho nuestra salvación, por Cristo, Señor nuestro. Por él, los ángeles te cantan con júbilo eterno, y nosotros nos unimos a sus voces cantando humildemente tu alabanza: Santo, Santo, Santo...<br><br>PREFACIO IV PARA LOS DOMINGOS DEL TIEMPO ORDINARIO LAS ETAPAS DE LA HISTORIA DE LA SALVACIÓN EN CRISTO 55. Este prefacio se dice en los domingos del Tiempo Ordinario. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro. Porque él, con su nacimiento, restauró nuestra naturaleza caída; con su muerte, destruyó nuestro pecado; al resucitar, nos dio nueva vida; y en su ascensión, nos abrió el camino de tu reino. Por eso, con los ángeles y los santos, te cantamos el himno de alabanza diciendo sin cesar: Santo, Santo, Santo... Los domingos en las plegarias eucarísticas I, II y III se puede hacer el recuerdo dominical propio.<br><br>PREFACIO V PARA LOS DOMINGOS DEL TIEMPO ORDINARIO LAS MARAVILLAS DE LA CREACIÓN 56. Este prefacio se dice los domingo del tiempo ordinario. En verdad es justo y necesario, es nuestro deber y salvación, darte gracias siempre y en todo lugar, Señor, Padre Santo, Dios todopoderoso y eterno. Porque creaste el universo entero, estableciste el continuo retorno de las estaciones, y al hombre, formado a tu imagen y semejanza, sometiste las maravillas del mundo, para que, en nombre tuyo, dominara la creación, y, al contemplar tus grandezas, en todo momento te alabara, por Cristo, Señor nuestro. A quien cantan los ángeles y los arcángeles, proclamando sin cesar: Santo, Santo, Santo... Los domingos en las plegarias eucarísticas I, II y III se puede hacer el recuerdo dominical propio.<br><br>PREFACIO VI PARA LOS DOMINGOS DEL TIEMPO ORDINARIO LA PRENDA DE NUESTRA PASCUA ETERNA 57. Este prefacio se dice en los domingos del tiempo ordinario. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno. En ti vivimos, nos movemos y existimos; y, todavía peregrinos en este mundo, no sólo experimentamos las pruebas cotidianas de tu amor, sino que poseemos ya en prenda la vida futura, pues esperamos gozar de la Pascua eterna, porque tenemos las primicias del Espíritu por el que resucitaste a Jesús de entre los muertos. Por eso, Señor, te damos gracias y proclamamos tu grandeza cantando con los ángeles: Santo, Santo, Santo... Los domingos en las plegarias eucarísticas I, II y III se puede hacer el recuerdo dominical propio.<br><br>PREFACIO VII PARA LOS DOMINGOS DEL TIEMPO ORDINARIO LA SALVACIÓN, FRUTO DE LA OBEDIENCIA DE CRISTO 58. Este prefacio se dice en los domingos del Tiempo Ordinario. En verdad es justo y necesario, es nuestro deber y salvación, darte gracias siempre y en todo lugar, Señor, Padre Santo, Dios todopoderoso y eterno. Porque tu amor al mundo fue tan misericordioso que no sólo nos enviaste como redentor a tu propio Hijo, sino que en todo lo quisiste semejante al hombre, menos en el pecado, para poder así amar en nosotros lo que amabas en él. Con su obediencia has restaurado aquellos dones que por nuestra desobediencia habíamos perdido. Por eso, ahora nosotros, llenos de alegría, te aclamamos con los ángeles y los santos diciendo: Santo, Santo, Santo... Los domingos en las plegarias eucarísticas I, II y III se puede hacer el recuerdo dominical propio.<br><br>PREFACIO VIII PARA LOS DOMINGOS DEL TIEMPO ORDINARIO LA IGLESIA UNIFICADA POR VIRTUD Y A IMAGEN DE LA TRINIDAD 59. Este prefacio se dice en los domingos del Tiempo Ordinario. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno. Porque has querido reunir de nuevo, por la sangre de tu Hijo y la fuerza del Espíritu, a los hijos dispersos por el pecado; de este modo tu Iglesia, unificada por virtud y a imagen de la Trinidad, aparece ante el mundo como cuerpo de Cristo y templo del Espíritu, para alabanza de tu infinita sabiduría. Por eso, unidos a los coros angélicos, te aclamamos llenos de alegría: Santo, Santo, Santo... Los domingos en las plegarias eucarísticas I, II y III se puede hacer el recuerdo dominical propio.<br><br>PREFACIO IX PARA LOS DOMINGOS DEL TIEMPO ORDINARIO (Prefacio II del Espíritu Santo) LA ACCIÓN DEL ESPÍRITU SANTO EN LA IGLESIA Este prefacio se dice en los domingo del tiempo ordinario. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno. Porque nos concedes en cada momento lo que más conviene y diriges sabiamente la nave de tu Iglesia, asistiéndola siempre con la fuerza del Espíritu Santo, para que, a impulso de su amor confiado, no abandone la plegaria en la tribulación, ni la acción de gracias en el gozo, por Cristo, Señor nuestro. A quien alaban los cielos y la tierra, los ángeles y los arcángeles, proclamando sin cesar: Santo, Santo, Santo... Los domingos en las plegarias eucarísticas I, II y III se puede hacer el recuerdo dominical propio.<br><br>PREFACIO X PARA LOS DOMINGOS DEL TIEMPO ORDINARIO EL DÍA DEL SEÑOR Este prefacio se dice en los domingo del tiempo ordinario. En verdad es justo bendecirte y darte gracias, Padre santo, fuente de la verdad y de la vida, porque nos has convocado en tu casa en este día de fiesta. Hoy, tu familia, reunida en la escucha de tu Palabra y en la comunión del pan único y partido, celebra el memorial del Señor resucitado, mientras espera el domingo sin ocaso en el que la humanidad entera entrará en tu descanso. Entonces contemplaremos tu rostro y alabaremos por siempre tu misericordia. Con esta gozosa esperanza, y unidos a los ángeles y a los santos, cantamos unánimes el himno de tu gloria: Santo, Santo, Santo... Los domingos en las plegarias eucarísticas I, II y III se puede hacer el recuerdo dominical propio.<br><br>PREFACIO DEL BAUTISMO EL BAUTISMO, INICIO DE LA VIDA NUEVA Este prefacio se puede decir en la misa del bautismo. En verdad es justo darte gracias y exaltar tu nombre, Padre santo y misericordioso, por Jesucristo, Señor y Redentor nuestro. Te alabamos, te bendecimos y te glorificamos por el sacramento del nuevo nacimiento. Tú has querido que del corazón abierto de tu Hijo manara para nosotros el don nupcial del Bautismo, primera Pascua de los creyentes, puerta de nuestra salvación. inicio de la vida en Cristo, fuente de la humanidad nueva. Del agua y del Espíritu engendras en el seno de la Iglesia, virgen y madre, un pueblo de sacerdotes y reyes, congregado de entre todas las naciones en la unidad y santidad del amor. Por este don de tu benevolencia tu familia te adora y, unida a los ángeles y a los santos, canta el himno de tu gloria: Santo, Santo, Santo... En las plegarias eucarísticas se hace recuerdo de los recién bautizados.<br><br>PREFACIO DE LA CONFIRMACIÓN MARCADOS CON EL SELLO DEL ESPÍRITU Este prefacio se puede decir en la misa de la confirmación. En verdad es justo darte gracias, es bueno cantar tu gloria, Padre santo, fuente y origen de todo bien. Tú, en el Bautismo das nueva vida a los creyentes y los haces partícipes del misterio pascual de tu Hijo. Tú los confirmas con el sello del Espíritu, mediante la imposición de manos y la unción del crisma. Así, renovados a imagen de Cristo, el ungido por el Espíritu Santo y enviado para anunciar la buena nueva de la salvación, los haces tus comensales en el banquete eucarístico y testigos de la fe en la Iglesia y en el mundo. Por eso, nosotros, reunidos en esta asamblea festiva para celebrar los prodigios de un renovado Pentecostés, y unidos a los ángeles y a los santos, cantamos el himno de tu gloria: Santo, Santo, Santo... En las plegarias eucarísticas se hace mención de los recién confirmados.<br><br>PREFACIO I DE LA SANTÍSIMA EUCARISTÍA EL SACRIFICIO Y EL SACRAMENTO DE CRISTO 60. Este prefacio se dice en la misa de la Cena del Señor; puede decirse también en la solemnidad del Cuerpo y Sangre de Cristo y en las misas votivas de la Santísima Eucaristía. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro, verdadero y único sacerdote. El cual, al instituir el sacrificio de la eterna alianza, se ofreció a sí mismo como víctima de salvación, y nos mandó perpetuar esta ofrenda en conmemoración suya. Su carne, inmolada por nosotros, es alimento que nos fortalece; su sangre, derramada por nosotros, es bebida que nos purifica. Por eso, con los ángeles y los arcángeles y con todos los coros celestiales, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo... En la misa de la Cena del Señor, cuando se utiliza el Canon romano, se dice Reunidos en comunión, Acepta, Señor, en tu bondad y Él cual, la víspera de su Pasión propios.<br><br>PREFACIO II DE LA SANTÍSIMA EUCARISTÍA LOS FRUTOS DE LA SANTÍSIMA EUCARISTÍA Este prefacio se dice en la solemnidad del Cuerpo y Sangre de Cristo y en las misas votivas de la Santísima Eucaristía. En verdad es justo y necesario, es nuestro deber y salvación, darte gracias siempre y en todo lugar, Señor, Padre Santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro. El cual, en la última cena con los apóstoles, para perpetuar su pasión salvadora, se entregó a sí mismo como Cordero inmaculado y Eucaristía perfecta. Con este sacramento alimentas y santificas a tus fieles, para que una misma fe ilumine y un mismo amor congregue a todos los hombres que habitan un mismo mundo. Así, pues, nos reunimos en torno a la mesa de este sacramento admirable, para que la abundancia de tu gracia nos lleve a poseer la vida celestial. Por eso, Señor, todas tus criaturas, en el cielo y en la tierra, te adoran cantando un cántico nuevo; y también nosotros, con los ángeles, te aclamamos por siempre diciendo: Santo, Santo, Santo...<br><br>PREFACIO III DE LA SANTÍSIMA EUCARISTÍA LA EUCARISTÍA, VIÁTICO PARA LA PASCUA ETERNA Este prefacio se puede decir en la misa del viático. En verdad es justo y necesario darte gracias, es bueno bendecir tu nombre, Padre santo, Dios de misericordia y de paz. Porque has querido que tu Hijo, obediente hasta la muerte de cruz, nos precediera en el camino de retorno a ti, término de toda esperanza humana. En la Eucaristía, testamento de su amor, él se hace comida y bebida espiritual, para alimentarnos en nuestro viaje hacia la Pascua eterna. Con esta prenda de la resurrección futura, en la esperanza participamos ya de la mesa gloriosa de tu reino y, unidos a los ángeles y a los santos, proclamamos el himno de tu gloria: Santo, Santo, Santo...<br><br>PREFACIO DE LA PENITENCIA EL SACRAMENTO DE LA RECONCILIACIÓN EN EL ESPÍRITU Este prefacio se puede decir en el tiempo de Cuaresma. Si dice también en las misas de reconciliación y en las otras misas de carácter penitencial. En verdad es justo alabarte y darte gracias, Padre santo, Dios todopoderoso, por tus beneficios, sobre todo por la gracia del perdón. Al hombre, náufrago a causa del pecado, con el sacramento de la reconciliación le abres el puerto de la misericordia y de la paz, en Cristo muerto y resucitado. Con el poder de tu Espíritu, has dispuesto para la Iglesia, santa y al mismo tiempo necesitada de penitencia, una segunda tabla de salvación después del Bautismo, y así la renuevas incesantemente, para congregarla en el banquete festivo de tu amor. Por ese don de tu benevolencia, unidos a los ángeles y a los santos, contamos, a una voz, el himno de tu gloria: Santo, Santo, Santo...<br><br>PREFACIO DE LA UNCIÓN DE ENFERMOS EL SUFRIMIENTO, PARTICIPACIÓN EN LA PASCUA DE CRISTO Este prefacio se puede decir en las misas de unción de los enfermos. En verdad es justo darte gracias, Dios de misericordia, Señor todopoderoso, por Jesucristo, Señor y Redentor nuestro. Porque has querido que tu único Hijo, autor de la vida, médico de los cuerpos y de las almas, tomase sobre sí nuestras debilidades, para socorrernos en los momentos de prueba y santificarnos en la experiencia del dolor. En el signo sacramental de la Unción, por la oración de la Iglesia, nos librar del pecado, nos confortas con la gracia del Espíritu Santo y nos haces partícipes de la victoria pascual. Por este signo de tu benevolencia, unidos a los ángeles y a los santos, cantamos, a una voz, el himno de tu gloria: Santo, Santo, Santo...<br><br>PREFACIO I DE SANTA MARÍA VIRGEN LA MATERNIDAD DE MARÍA 62. Este prefacio se dice en las misas de la Santísima Virgen, añadiendo en su lugar (***) la mención de la celebración del día, según se indica en cada misa. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno. Y alabar, bendecir y proclamar tu gloria en la (***) de santa María, siempre virgen. Porque ella concibió a tu único Hijo por obra del Espíritu Santo, y, sin perder la gloria de su virginidad, derramó sobre el mundo la luz eterna, Jesucristo, Señor nuestro. Por él, los ángeles y los arcángeles y todos los coros celestiales celebran tu gloria, unidos en común alegría. Permítenos asociarnos a sus voces cantando humildemente tu alabanza: Santo, Santo, Santo...<br><br>PREFACIO II DE SANTA MARÍA VIRGEN LA IGLESIA ALABA A DIOS INSPIRÁNDOSE EN LAS PALABRAS DE MARÍA 63. Este prefacio se dice en las Misas de la Santísima Virgen. En verdad es justo y necesario, es nuestro deber y salvación darte gracias, Señor, y proclamar tus maravillas en la perfección de tus santos; y, al conmemorar a la bienaventurada Virgen María, exaltar especialmente tu generosidad inspirándonos en su mismo cántico de alabanza. En verdad hiciste obras grandes en favor de todos los pueblos, y has mantenido tu misericordia de generación en generación, cuando, al mirar la humillación de tu esclava, por ella nos diste al autor de la vida, Jesucristo, Hijo tuyo y Señor nuestro. Por él, los ángeles y los arcángeles te adoran eternamente, gozosos en tu presencia. Permítenos unirnos a sus voces cantando tu alabanza: Santo, Santo, Santo...<br><br>PREFACIO III DE SANTA MARÍA VIRGEN MARÍA, MODELO Y MADRE DE LA IGLESIA Este prefacio se dice en las misas de la Santísima Virgen. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre Santo, Dios todopoderoso y eterno, y alabarte debidamente en esta celebración en honor de la Virgen María. Ella, al aceptar tu Palabra con limpio corazón, mereció concebirla en su seno virginal, y al dar a luz a su Hijo preparó el nacimiento de la Iglesia. Ella, al recibir junto a la cruz el testamento de tu amor divino, tomó como hijos a todos los hombres, nacidos a la vida sobrenatural por la muerte de Cristo. Ella, en la espera pentecostal del Espíritu, al unir sus oraciones a las de los discípulos, se convirtió en el modelos de la Iglesia suplicante. Desde su asunción a los cielos, acompaña con amor materno a la Iglesia peregrina, y protege sus pasos hacia la patria celeste, hasta la venida gloriosa del Señor. Por eso, con todos los ángeles y santos, te alabamos diciendo sin cesar: Santo, Santo, Santo...<br><br>PREFACIO IV DE SANTA MARÍA VIRGEN MARÍA, SIGNO DE CONSUELO Y DE ESPERANZA Este prefacio se dice en las misas de la Santísima Virgen. En verdad es justo darte gracias, es bueno cantar tu gloria, Padre Santo, Dios todopoderoso y eterno. Te alabamos y te bendecimos, por Jesucristo, tu Hijo, en esta fiesta (memoria) de la bienaventurada Virgen María. Ella, como humilde sierva, escuchó tu palabra y la conservó en su corazón; admirablemente unida al misterio de la redención, perseveró con los apóstoles en la plegaria, mientras esperaban al Espíritu Santo, y ahora brilla en nuestro camino como signo de consuelo y de firme esperanza. Por este don de tu benevolencia, unidos a los ángeles y a los santos, te entonamos nuestro canto y proclamamos tu alabanza: Santo, Santo, Santo...<br><br>PREFACIO V DE SANTA MARÍA VIRGEN MARÍA, IMAGEN DE LA HUMANIDAD NUEVA Este prefacio se dice en las misas de la Santísima Virgen. En verdad es justo darte gracias, Padre Santo, fuente de la vida y de la alegría. Porque en esta etapa final de la historia has querido revelarnos el misterio escondido desde siglos, para que así el mundo entero retorne a la vida y recobre la esperanza. En Cristo, nuevo Adán, y en María, nueva Eva, se revela el misterio de tu Iglesia, como primicia de la humanidad redimida. Por este inefable don la creación entera, con la fuerza del Espíritu Santo, emprende de nuevo su camino hacia la Pascua eterna. Por eso, nosotros, unidos a los ángeles y a los santos, cantamos a una voz el himno de tu gloria: Santo, Santo, Santo...<br><br>PREFACIO I DE LOS APÓSTOLES LOS APÓSTOLES, PASTORES DEL PUEBLO DE DIOS 64. Este prefacio se dice en las misas de los Apóstoles, principalmente en las de san Pedro y san Pablo. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso, Pastor eterno. Porque no abandonas nunca a tu rebaño, sino que por medio de los santos Apóstoles lo proteges y conservas, y quieres que tenga siempre por guía la palabra de aquellos mismos pastores a quienes tu Hijo dio la misión de anunciar el Evangelio. Por eso, con los ángeles y arcángeles y con todos los coros celestiales, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo...<br><br>PREFACIO II DE LOS APÓSTOLES LOS APÓSTOLES, FUNDAMENTO DE LA IGLESIA Y TESTIMONIO PARA EL MUNDO 65. Este prefacio se dice en las misas de los Apóstoles y de los Evangelistas. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro. Porque has cimentado tu Iglesia sobre la roca de los Apóstoles, para que permanezca en el mundo como signo de santidad y señale a todos los hombres el camino que nos lleva hacia ti. Por eso, Señor, con todos los ángeles te alabamos ahora y por siempre diciendo con humilde fe: Santo, Santo, Santo...<br><br>PREFACIO I DE LOS SANTOS LA GLORIA DE LOS SANTOS 66. Este prefacio se dice en las misas de «Todos los Santos», de los santos Patronos y Titulares de la iglesia, y en las solemnidades y fiestas de los Santos, a no ser que haya que decir un prefacio más propio. Se puede decir también en las memorias de los Santos. En verdad es justo darte gracias y deber nuestro glorificarte, Padre Santo, porque manifiestas tu gloria en la asamblea de los santos, y, al coronar sus méritos, coronas tu propia obra. Tú nos ofreces el ejemplo de su vida, la ayuda de su intercesión y la participación en su destino, para que, animados por su presencia alentadora, luchemos sin desfallecer en la carrera y alcancemos, como ellos, la corona de gloria que no se marchita, por Cristo, Señor nuestro. Por eso, con los ángeles y arcángeles y con la multitud de los santos, cantamos sin cesar el himno de alabanza: Santo, Santo, Santo...<br><br>PREFACIO II DE LOS SANTOS EFICACIA DE LA ACCIÓN DE LOS SANTOS 67. Este prefacio se dice en las misas de «Todos los Santos», de los santos Patronos y Titulares de la iglesia, y en las solemnidades y fiestas de los Santos, a no ser que haya que decir un prefacio más propio. Se puede decir también en las memorias de los Santos. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro. Porque mediante el testimonio admirable de tus santos fecundas sin cesar a tu Iglesia con vitalidad siempre nueva, dándonos así pruebas evidentes de tu amor. Ellos nos estimulan con su ejemplo en el camino de la vida y nos ayudan con su intercesión. Por eso, ahora, nosotros, llenos de alegría, te aclamamos con los ángeles y los santos diciendo: Santo, Santo, Santo...<br><br>PREFACIO I DE LOS SANTOS MÁRTIRES SIGNIFICADO Y EJEMPLARIDAD DEL MARTIRIO 68. Este prefacio se dice en las solemnidades y fiestas de los santos Mártires. Se puede decir también en las memorias de los mismos. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno. Porque la sangre del glorioso mártir san (santa) N., derramada, como la de Cristo, para confesar tu nombre, manifiesta las maravillas de tu poder; pues en su martirio, Señor, has sacado fuerza de lo débil, haciendo de la fragilidad tu propio testimonio; por Cristo, Señor nuestro. Por eso, como los ángeles te cantan en el cielo, así nosotros en la tierra te aclamamos diciendo sin cesar: Santo, Santo, Santo...<br><br>PREFACIO II DE LOS SANTOS MÁRTIRES SIGNIFICADO Y EJEMPLARIDAD DEL MARTIRIO 69. Este prefacio se dice en las solemnidades y fiestas de los santos Mártires. Se puede decir también en las memorias de los mismos. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno. Porque al alabar nosotros a los santos mártires, tu eres glorificado ya que todo lo que concierne a su pasión es obra admirable de tu poder. En efecto, tu misericordiosamente les proporcionas el ardor de la fe, tu les otorgas la firmeza de la perseverancia y les concedes la victoria en la batalla, por Cristo, Señor nuestro. Por eso, tus creaturas del cielo y de la tierra te adoran cantando un cántico nuevo, y nosotros con todos los coros de los ángeles, proclamamos tu gloria diciendo: Santo, Santo, Santo…<br><br>PREFACIO DE LOS SANTOS PASTORES LA PRESENCIA DE LOS SANTOS PASTORES EN LA IGLESIA 70. Este prefacio se dice en las solemnidades y fiestas de los santos Pastores. Se puede decir también en las memorias de los mismos. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre Santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro. Porque nos concedes la alegría de celebrar hoy la fiesta de san N., fortaleciendo a tu Iglesia con el ejemplo de su vida, instruyéndola con su palabra y protegiéndola con su intercesión. Por eso, con los ángeles y los santos, te cantamos el himno de alabanza diciendo sin cesar: Santo, Santo, Santo...<br><br>PREFACIO DE SANTAS VÍRGENES Y RELIGIOSOS SIGNIFICADO DE LA VIDA CONSAGRADA EXCLUSIVA A DIOS 71. Este prefacio se dice en las solemnidades y fiestas de las santas Vírgenes y de los santos Religiosos. Se puede decir también en las memorias de los mismos. En verdad es justo y necesario, que te alaben, Señor, tus criaturas del cielo y de la tierra, y, al recordar a los santos que por el reino de los cielos se consagraron a Cristo, celebremos la grandeza de tus designios. En ellos recobra el hombre la santidad primera, que de ti había recibido, y gusta ya en la tierra los dones reservados para el cielo. Por eso, con todos los ángeles y santos, te alabamos, proclamando sin cesar: Santo, Santo, Santo...<br><br>PREFACIO COMÚN I EL UNIVERSO RESTAURADO EN CRISTO 72. Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar un prefacio del tiempo. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro. A quien hiciste fundamento de todo y de cuya plenitud quisiste que participáramos todos. Siendo él de condición divina se despojó de su rango, y por su sangre derramada en la cruz puso en paz todas las cosas; y así, constituido Señor del universo, es fuente de salvación eterna para cuantos creen en él. Por eso, con los ángeles y arcángeles y con todos los coros celestiales, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo...<br><br>PREFACIO COMÚN II LA SALVACIÓN POR CRISTO 73. Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar un prefacio del tiempo. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, que por amor creaste al hombre, y, aunque condenado justamente, con tu misericordia lo redimiste, por Cristo, Señor nuestro. Por él, los ángeles y los arcángeles y todos los coros celestiales celebran tu gloria, unidos en común alegría. Permítenos asociarnos a sus voces cantando humildemente tu alabanza: Santo, Santo, Santo...<br><br>PREFACIO COMÚN III ALABANZA A DIOS QUE NOS CREÓ Y NOS HA REDIMIDO EN CRISTO 74. Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar un prefacio del tiempo. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno. Porque has querido ser, por medio de tu amado Hijo, no sólo el creador del género humano, sino también el autor generoso de la nueva creación. Por eso, con razón te sirven todas las criaturas, con justicia te alaban todos los redimidos y unánimes te bendicen tus santos. Con ellos, unidos a los ángeles, nosotros queremos celebrarte y te alabamos diciendo: Santo, Santo, Santo...<br><br>PREFACIO COMÚN IV NUESTRA MISMA ACCIÓN DE GRACIAS ES UN DON DE DIOS 75. Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar un prefacio del tiempo. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno. Pues aunque no necesitas nuestra alabanza, ni nuestras bendiciones te enriquecen, tú inspiras y haces tuya nuestra acción de gracias, para que nos sirva de salvación, por Cristo, Señor nuestro. A quien alaban los ángeles y los arcángeles, proclamando sin cesar: Santo, Santo, Santo...<br><br>PREFACIO COMÚN V PROCLAMACIÓN DEL MISTERIO DE CRISTO 76. Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar un prefacio del tiempo. En verdad es justo y necesario, es nuestro deber y salvación, darte gracias siempre y en todo lugar Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro. Porque, unidos en la caridad, celebramos la muerte de tu Hijo, con fe viva proclamamos su resurrección, y con esperanza firme anhelamos su venida gloriosa. Por eso, con todos los ángeles y santos, te alabamos, proclamando sin cesar: Santo, Santo, Santo...<br><br>PREFACIO COMÚN VI EL MISTERIO DE LA SALVACIÓN EN CRISTO 77. Este prefacio, tomado de la Plegaria eucarística II, se dice en las misas que carecen de prefacio propio y no deben tomar un prefacio del tiempo. En verdad es justo y necesario, es nuestro deber y salvación, darte gracias, Padre santo, siempre y en todo lugar, por Jesucristo, tu Hijo amado. Por él, que es tu palabra, hiciste todas las cosas; tú nos lo enviaste para que, hecho hombre por obra del Espíritu Santo y nacido de María la Virgen, fuera nuestro Salvador y Redentor. Él, en cumplimiento de tu voluntad, para destruir la muerte y manifestar la resurrección, extendió sus brazos en la cruz, y así adquirió para ti un pueblo santo. Por eso, con los ángeles y los santos, cantamos tu gloria diciendo: Santo, Santo, Santo...<br><br>PREFACIO COMÚN VII CRISTO, HUÉSPED Y PEREGRINO EN MEDIO DE NOSOTROS Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar un prefacio del tiempo. En verdad es justo darte gracias, Señor, Padre santo, Dios de la alianza y de la paz. Porque tú llamaste a Abrahán y le mandaste salir de su tierra, para constituirlo padre de todas las naciones. Tú suscitaste a Moisés para librar a tu pueblo y guiarlo a la tierra de promisión. Tú, en la etapa final de la historia, has enviado a tu Hijo, como huésped y peregrino en medio de nosotros, para redimirnos del pecado y de la muerte; y has derramado el Espíritu, para hacer de todas las naciones un solo pueblo nuevo, que tiene como meta, tu reino, como estado, la libertad de tus hijos, como ley, el precepto del amor. Por estos dones de tu benevolencia, unidos a los ángeles y a los santos, cantamos con gozo el himno de tu gloría: Santo, Santo, Santo...<br><br>PREFACIO COMÚN VIII JESÚS, BUEN SAMARITANO Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar un prefacio del tiempo. Especialmente es recomendable usarlo en el domingo XV del tiempo ordinario del año C y el lunes de la semana XXVII del tiempo ordinario. En verdad es justo darte gracias y deber nuestro alabarte, Padre santo, Dios todopoderoso y eterno, en todos los momentos y circunstancias de la vida, en la salud y en la enfermedad, en el sufrimiento y en el gozo, por tu siervo, Jesús, nuestro Redentor. Porque él, en su vida terrena, pasó haciendo el bien y curando a los oprimidos por el mal. También hoy, como buen samaritano, se acerca a todo hombre que sufre en su cuerpo o en su espíritu, y cura sus heridas con el aceite del consuelo y el vino de la esperanza. Por este don de tu gracia, incluso cuando nos vemos sumergidos en la noche del dolor, vislumbramos la luz pascual en tu Hijo, muerto y resucitado. Por eso, unidos a los ángeles y santos, cantamos a una voz el himno de tu gloria: Santo, Santo, Santo...<br><br>PREFACIO COMÚN IX LA GLORIA DE DIOS ES EL HOMBRE VIVIENTE Este prefacio se dice en las misas que carecen de prefacio propio y no deben tomar un prefacio del tiempo. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno. Tú eres el Dios vivo y verdadero; el universo está lleno de tu presencia, pero sobre todo has dejado la huella de tu gloria en el hombre creado a tu imagen. Tú lo llamas a cooperar con el trabajo cotidiano en el proyecto de la creación y le das tu Espíritu para que sea artífice de justicia y de paz, en Cristo, el hombre nuevo. Por eso, unidos a los ángeles y a los santos, cantamos con alegría el himno de tu alabanza: Santo, Santo, Santo...<br><br>PREFACIO I DE DIFUNTOS LA ESPERANZA DE LA RESURRECCIÓN EN CRISTO 78. Este prefacio se dice en las misas de difuntos. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro. En él brilla la esperanza de nuestra feliz resurrección; y así, aunque la certeza de morir nos entristece, nos consuela la promesa de la futura inmortalidad. Porque la vida de los que en ti creemos, Señor, no termina, se transforma; y, al deshacerse nuestra morada terrenal, adquirimos una mansión eterna en el cielo. Por eso, con los ángeles y arcángeles y con todos los coros celestiales, cantamos sin cesar el himno de tu gloria: Santo, Santo, Santo...<br><br>PREFACIO II DE DIFUNTOS CRISTO HA MUERTO PARA NUESTRA VIDA 79. Este prefacio se dice en las misas de difuntos. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro. Porque él aceptó la muerte, uno por todos, para librarnos del morir eterno; es más, quiso entregar su vida para que todos tuviéramos vida eterna. Por eso, unidos a los coros angélicos, te aclamamos llenos de alegría: Santo, Santo, Santo...<br><br>PREFACIO III DE DIFUNTOS CRISTO, SALVACIÓN Y VIDA 80. Este prefacio se dice en las misas de difuntos. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno, por Cristo, Señor nuestro. Porque él es la salvación del mundo, la vida de los hombres, la resurrección de los muertos. Por él, los ángeles te cantan con júbilo eterno y nosotros nos unimos a sus voces cantando humildemente tu alabanza: Santo, Santo, Santo...<br><br>PREFACIO IV DE DIFUNTOS LA VIDA TERRENA Y LA GLORIA CELESTE 81. Este prefacio se dice en las misas de difuntos. En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno. Porque tu voluntad nos da la vida, tus decretos la dirigen y un mandato tuyo, en castigo del pecado, nos devuelve a la tierra de la que habíamos sido sacados. Y también te damos gracias porque, al redimirnos con la muerte de tu Hijo Jesucristo, por tu voluntad salvadora nos llevas a nueva vida para que tengamos parte en su gloriosa resurrección. Por eso, como los ángeles te cantan en el cielo, así nosotros en la tierra te aclamamos diciendo sin cesar: Santo, Santo, Santo...<br><br>PREFACIO V DE DIFUNTOS NUESTRA RESURRECCIÓN POR MEDIO DE LA VICTORIA DE CRISTO 82. Este prefacio se dice en las misas de difuntos. En verdad es justo darte gracias y deber nuestro glorificarte, Padre santo. Porque si el morir se debe al hombre, el ser llamados a la vida con Cristo es obra gratuita de tu amor, ya que, habiendo muerto por el pecado, hemos sido redimidos por la victoria de tu Hijo. Por eso, como los ángeles te cantan en el cielo, así nosotros te proclamamos en la tierra, diciendo sin cesar: Santo, Santo, Santo...<br><br>PLEGARIA EUCARÍSTICA I o CANON ROMANO 83. V/. El Señor esté con ustedes. R/. Y con tu espíritu. V/. Levantemos el corazón. R/. Lo tenemos levantado hacia el Señor. V/. Demos gracias al Señor, nuestro Dios. R/. Es justo y necesario. Sigue el prefacio, dicho según las rúbricas, que concluye: Santo, Santo, Santo es el Señor, Dios del universo. Llenos están el cielo y la tierra de tu gloria. Hosanna. en el cielo. Bendito el que viene en nombre del Señor. Hosanna en el cielo. En la plegaria eucarística primera, o Canon Romano, pueden omitirse aquellas partes que están incluidas dentro de corchetes. 84. El sacerdote, con las manos extendidas, dice: CP P adre misericordioso, te pedimos humildemente por Jesucristo, tu Hijo, nuestro Señor, Junta las manos y dice: que aceptes y bendigas Traza, una sola vez, el signo de la cruz sobre el pan y el cáliz conjuntamente, diciendo: estos ✠ dones, este sacrificio santo y puro que te ofrecemos, Con las manos extendidas, prosigue: ante todo, por tu Iglesia santa y católica, para que le concedas la paz, la protejas, la congregues en la unidad<br><br>y la gobiernes en el mundo entero, con tu servidor el Papa N., con nuestro obispo N., Puede hacerse mención de los Obispos coadjutores o auxiliares. ________________________________ El Obispo, cuando celebra en su diócesis, dice: conmigo, indigno siervo tuyo, Cuando celebra un Obispo que no es el ordinario diocesano, dice: con mi hermano N., Obispo de esta Iglesia de N., conmigo, indigno siervo tuyo, ________________________________ y todos los demás Obispos que, fieles a la verdad, promueven la fe católica y apostólica. 85. Conmemoración de los vivos C1 Acuérdate, Señor, de tus hijos N. y N. Puede decir los nombres de aquellos por quienes tiene intención de orar, o bien junta las manos y ora por ellos unos momentos. Después, con las manos extendidas, prosigue: y de todos los aquí reunidos, cuya fe y entrega bien conoces; por ellos y todos los suyos, por el perdón de sus pecados y la salvación que esperan, te ofrecemos, y ellos mismos te ofrecen, este sacrificio de alabanza, a ti, eterno Dios, vivo y verdadero. 86. Conmemoración de los santos C2 Reunidos en comunión con toda la Iglesia, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor;* la de su esposo, San José; la de los santos apóstoles y mártires<br><br>Pedro y Pablo, Andrés, [Santiago y Juan, Tomás, Santiago y Felipe, Bartolomé, Mateo, Simón y Tadeo; Lino, Cleto, Clemente, Sixto, Cornelio, Cipriano, Lorenzo, Crisógono, Juan y Pablo, Cosme y Damián,] y la de todos los santos; por sus méritos y oraciones concédenos en todo tu protección. [Por Cristo nuestro Señor. Amén.] ____________________________________ REUNIDOS EN COMUNIÓN PROPIOS En los domingos, cuando no hay otro Reunidos en comunión propio: Reunidos en comunión con toda la Iglesia, para celebrar el domingo, día en que Cristo ha vencido a la muerte y nos ha hecho partícipes de su vida inmortal, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor;* En la Natividad del Señor y durante su octava: Reunidos en comunión con toda la Iglesia para celebrar (la noche santa) el día santo en que la Virgen María, conservando intacta su virginidad, dio a luz al Salvador del mundo, veneramos la memoria, ante todo, de esta gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor;* En la Epifanía del Señor: Reunidos en comunión con toda la Iglesia para celebrar el día santo en que tu único Hijo, eterno como tú en la gloria, se manifestó en la verdad de nuestra carne, hecho hombre como nosotros, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor;* En el Jueves Santo: Reunidos en comunión con toda la Iglesia para celebrar el día santo en que nuestro Señor Jesucristo fue entregado por nosotros, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor;*<br><br>Desde la misa de la Vigilia Pascual hasta el Segundo Domingo de Pascua: Reunidos en comunión con toda la Iglesia para celebrar (la noche santa) el día santo de la resurrección de nuestro Señor Jesucristo según la carne, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor;* En la Ascensión del Señor: Reunidos en comunión con toda la Iglesia para celebrar el día santo en que tu único Hijo, nuestro Señor Jesucristo, habiendo tomado nuestra débil condición humana, la exaltó a la derecha de tu gloria, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor;* En el Domingo de Pentecostés: Reunidos en comunión con toda la Iglesia para celebrar el día de Pentecostés, en que el Espíritu Santo se manifestó a los apóstoles en lenguas de fuego, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor;* __________________________________ 87. Con las manos extendidas prosigue: CP Acepta, Señor, en tu bondad, esta ofrenda de tus siervos y de toda tu familia santa; ordena en tu paz nuestros días, líbranos de la condenación eterna y cuéntanos entre tus elegidos. Junta las manos. [Por Cristo nuestro Señor. Amén.] __________________________________ En el Jueves Santo durante la Misa Vespertina de la Cena del Señor: Acepta, Señor, en tu bondad, esta ofrenda de tus siervos y de toda tu familia santa, que te presentamos en el día mismo en que nuestro Señor Jesucristo encomendó a sus discípulos la celebración del sacramento de su Cuerpo y de su Sangre; ordena en tu paz nuestros días, líbranos de la condenación eterna<br><br>y cuéntanos entre tus elegidos. [Por Cristo, nuestro Señor. Amén.] Desde la Misa de la Vigilia pascual hasta el segundo domingo de Pascua: Acepta, Señor, en tu bondad, esta ofrenda de tus siervos y de toda tu familia santa, por aquellos que has hecho renacer del agua y del Espíritu Santo perdonándoles todos sus pecados ordena en tu paz nuestros días, líbranos de la condenación eterna y cuéntanos entre tus elegidos. [Por Cristo nuestro Señor. Amén.] En la Misa del bautismo: Acepta, Señor, en tu bondad, esta ofrenda de tus siervos y de toda tu familia santa, que hoy te ofrecemos especialmente por N. y N. (aquellos) que has hecho renacer del agua y del Espíritu Santo, perdonándoles todos sus pecados, para incorporarlos a Cristo Jesús, Señor nuestro, e inscribe sus nombres en el libro de la vida. [Por Cristo, nuestro Señor. Amén.] En la Misa de confirmación: Acepta, Señor, en tu bondad, esta ofrenda de tus siervos y de toda tu familia santa, que hoy te ofrecemos especialmente por N. y N. (aquellos) que, renacidos en el bautismo, han sido confirmados hoy por el don del Espíritu Santo; recíbela en tu bondad y conserva en tus hijos el don que les has dado. [Por Cristo, nuestro Señor. Amén.] En la Misa de primera comunión: Acepta, Señor, en tu bondad, esta ofrenda de tus siervos<br><br>y de toda tu familia santa, que hoy te ofrecemos especialmente por N. y N. (aquellos) que por vez primera invitas en este día a participar del pan de vida y del cáliz de salvación, en la mesa de tu familia; concédeles crecer siempre en tu amistad y en la comunión con tu Iglesia. [Por Cristo, nuestro Señor. Amén.] En la Misa del matrimonio: Acepta, Señor, en tu bondad, esta ofrenda de tus siervos, de los nuevos esposos N. y N. y de toda tu familia santa, que hoy intercede por ellos; y ya que les has concedido llegar al día de los desposorios, otórgales también (el gozo de una ansiada descendencia y de) una larga vida. [Por Cristo, nuestro Señor. Amén.] En la Misa exequial: Acepta, Señor, en tu bondad, esta ofrenda de tus siervos, que hoy te ofrecemos especialmente por el descanso eterno de nuestro hermano N., pidiéndote que le concedas que, libre ya de las ataduras de la carne, tenga su parte entre tus santos. [Por Cristo, nuestro Señor. Amén.] ___________________________________ 88. Extendiendo las manos sobre las ofrendas, dice: CC Bendice y santifica, oh Padre, esta ofrenda haciéndola perfecta, espiritual y digna de ti, de manera que sea para nosotros Cuerpo y Sangre de tu Hijo amado, Jesucristo, nuestro Señor. Junta las manos.<br><br>89. En las fórmulas que siguen, las palabras del Señor han de pronunciarse con claridad, como lo requiere la naturaleza de éstas. El cual, la víspera de su Pasión, ___________________________________ En la Misa Vespertina del Jueves santo: El cual, hoy, la víspera de padecer por nuestra salvación y la de todos los hombres, ___________________________________ Toma el pan y, sosteniéndolo un poco elevado sobre el altar, prosigue: tomó pan en sus santas y venerables manos, Eleva los ojos. y elevando los ojos al cielo, hacia ti, Dios Padre suyo todopoderoso, dando gracias te bendijo, lo partió y lo dio a sus discípulos diciendo: Se inclina un poco. TOMEN Y COMAN TODOS DE ÉL, PORQUE ÉSTO ES MI CUERPO QUE SERÁ ENTREGADO POR USTEDES. Muestra el pan consagrado al pueblo, lo deposita luego sobre la patena y lo adora haciendo genuflexión. 90. Después prosigue: Del mismo modo, acabada la cena, Toma el cáliz y, sosteniéndolo un poco elevado sobre el altar, dice: tomó este cáliz glorioso en sus santas y venerables manos; dando gracias te bendijo, y lo dio a sus discípulos diciendo:<br><br>Se inclina un poco. TOMEN Y BEBAN TODOS DE ÉL, PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE, SANGRE DE LA ALIANZA NUEVA Y ETERNA, QUE SERÁ DERRAMADA POR USTEDES Y POR MUCHOS PARA EL PERDÓN DE LOS PECADOS. HAGAN ESTO EN CONMEMORACIÓN MÍA. Muestra el cáliz al pueblo, lo deposita luego sobre el corporal y lo adora haciendo genuflexión. 91. Luego dice una de las siguientes fórmulas: CP Éste es el Misterio de la fe. O bien: Éste es el Sacramento de nuestra fe. Y el pueblo prosigue, aclamando: Anunciamos tu muerte, proclamamos tu resurrección. ¡Ven, Señor Jesús! ___________________________________ También puede decirse: Éste es el Misterio de la fe. Cristo nos redimió. Y el pueblo prosigue, aclamando: Cada vez que comemos de este pan y bebemos de este cáliz,<br><br>anunciamos tu muerte, Señor, hasta que vuelvas. O bien: Éste es el Misterio de la fe. Cristo se entregó por nosotros. Y el pueblo prosigue, aclamando: Salvador del mundo, sálvanos, tu que nos has liberado por tu cruz y resurrección. ___________________________________ 92. Después el sacerdote, con las manos extendidas, dice: CC Por eso, Padre, nosotros, tus siervos, y todo tu pueblo santo, al celebrar este memorial de la muerte gloriosa de Jesucristo, tu Hijo, nuestro Señor; de su santa resurrección del lugar de los muertos y de su admirable ascensión a los cielos, te ofrecemos, Dios de gloria y majestad, de los mismos bienes que nos has dado, el sacrificio puro, inmaculado y santo; pan de vida eterna y cáliz de eterna salvación. 93. Mira con ojos de bondad esta ofrenda y acéptala, como aceptaste los dones del justo Abel, el sacrificio de Abrahán, nuestro padre en la fe, y la oblación pura de tu sumo sacerdote Melquisedec. 94. Inclinado, con las manos juntas prosigue: Te pedimos humildemente, Dios todopoderoso,<br><br>que esta ofrenda sea llevada a tu presencia, hasta el altar del cielo, por manos tu ángel, para que cuantos recibimos el Cuerpo y la Sangre de tu Hijo, al participar aquí de este altar, Se endereza y se signa diciendo: seamos colmados de gracia y bendición. [Por Cristo, nuestro Señor. Amén.] 95. Conmemoración de los difuntos. Con las manos expendidas dice: C3 Acuérdate también, Señor, de tus hijos N. y N., Puede decir los nombres de los difuntos por quienes se quiere orar. que nos han precedido con el signo de la fe y duermen ya el sueño de la paz. Junta las manos y ora unos momentos por los difuntos por quienes tiene intención de orar. Después, con las manos extendidas, prosigue: A ellos, Señor, y a cuantos descansan en Cristo, concédeles el lugar del consuelo, de la luz y de la paz. Junta las manos. [Por Cristo nuestro Señor. Amén.] 96. Con la mano derecha se golpea el pecho diciendo: C4 Y a nosotros, pecadores, siervos tuyos, Con las manos extendidas prosigue: que confiamos en tu infinita misericordia, admítenos en la asamblea de los santos apóstoles y mártires Juan el Bautista, Esteban, Matías y Bernabé,<br><br>[Ignacio, Alejandro, Marcelino y Pedro, Felicidad y Perpetua, Águeda, Lucía, Inés, Cecilia y Anastasia] y de todos los santos; y acéptanos en su compañía, no por nuestros méritos, sino conforme a tu bondad. Junta las manos: Por Cristo, Señor nuestro. 97. Y continúa: CP Por quien sigues creando todos los bienes, los santificas, los llenas de vida, los bendices y los repartes entre nosotros. 98. Toma la patena con el pan consagrado, y el cáliz y, sosteniéndolos elevados, dice: CP Por Cristo, con él y en él, o a ti, Dios Padre omnipotente, CC en la unidad del Espíritu Santo, todo honor y toda gloria por los siglos de los siglos. El pueblo aclama: Amén. Después sigue el rito de la Comunión.<br><br>PLEGARIA EUCARÍSTICA II 99. Esta plegaria eucarística tiene un prefacio propio que forma parte de su misma estructura. Con todo, se pueden usar también con esta plegaria otros prefacios, especialmente aquellos que presentan una breve síntesis del misterio de la salvación. V/. El Señor esté con ustedes. R/. Y con tu espíritu. V/. Levantemos el corazón. R/. Lo tenemos levantado hacia el Señor. V/. Demos gracias al Señor, nuestro Dios. R/. Es justo y necesario. CP En verdad es justo y necesario, es nuestro deber y salvación darte gracias, Padre santo, siempre y en todo lugar, por Jesucristo, tu Hijo amado. Por él, que es tu Palabra, hiciste todas las cosas; tú nos lo enviaste para que, hecho hombre por obra del Espíritu Santo y nacido de María, la Virgen, fuera nuestro Salvador y Redentor. Él, en cumplimiento de tu voluntad, para destruir la muerte y manifestar la resurrección, extendió sus brazos en la cruz, y así adquirió para ti un pueblo santo. Por eso, con los ángeles y los santos, proclamamos tu gloria, diciendo:<br><br>Santo, Santo, Santo es el Señor, Dios del universo. Llenos están el cielo y la tierra de tu gloria. Hosanna. en el cielo. Bendito el que viene en nombre del Señor. Hosanna en el cielo. 100. El sacerdote, con las manos extendidas, dice: CP S anto eres en verdad, Señor, fuente de toda santidad; 101. Junta las manos y, manteniéndolas extendidas sobre las ofrendas, dice: CC por eso te pedimos que santifiques estos dones con la efusión de tu Espíritu, Junta las manos y traza el signo de la cruz sobre el pan y el cáliz conjuntamente, diciendo: de manera que sean para nosotros Cuerpo y ✠ Sangre de Jesucristo, nuestro Señor. Junta las manos. 102. En las fórmulas que siguen, las palabras del Señor han de pronunciarse con claridad, como lo requiere la naturaleza de éstas. El cual, _____________________________________ En la Misa vespertina del Jueves Santo: en esta misma noche, cuando iba a ser entregado a su Pasión, voluntariamente aceptada, ___________________________________<br><br>Toma el pan y, sosteniéndolo un poco elevado sobre el altar, prosigue: tomó pan, dándote gracias, lo partió y lo dio a sus discípulos, diciendo: Se inclina un poco. TOMEN Y COMAN TODOS DE ÉL, PORQUE ÉSTO ES MI CUERPO QUE SERÁ ENTREGADO POR USTEDES. Muestra el pan consagrado al pueblo, lo deposita luego sobre la patena y lo adora haciendo genuflexión. 103. Después prosigue: Del mismo modo, acabada la cena, Toma el cáliz y, sosteniéndolo un poco elevado sobre el altar, dice: tomó este cáliz glorioso en sus santas y venerables manos; dando gracias te bendijo, y lo dio a sus discípulos diciendo: Se inclina un poco. TOMEN Y BEBAN TODOS DE ÉL, PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE, SANGRE DE LA ALIANZA NUEVA Y ETERNA, QUE SERÁ DERRAMADA POR USTEDES Y POR MUCHOS PARA EL PERDÓN DE LOS PECADOS. HAGAN ESTO EN CONMEMORACIÓN MÍA. Muestra el cáliz al pueblo, lo deposita luego sobre el corporal y lo adora haciendo genuflexión. 104. Luego dice una de las siguientes fórmulas:<br><br>CP Éste es el Misterio de la fe. O bien: Éste es el Sacramento de nuestra fe. Y el pueblo prosigue, aclamando: Anunciamos tu muerte, proclamamos tu resurrección. ¡Ven, Señor Jesús! ___________________________________ También puede decirse: Éste es el Misterio de la fe. Cristo nos redimió. Y el pueblo prosigue, aclamando: Cada vez que comemos de este pan y bebemos de este cáliz, anunciamos tu muerte, Señor, hasta que vuelvas. O bien: Éste es el Misterio de la fe. Cristo se entregó por nosotros. Y el pueblo prosigue, aclamando: Salvador del mundo, sálvanos, tu que nos has liberado por tu cruz y resurrección. ___________________________________ 105. Después el sacerdote, con las manos extendidas, dice: CC Así, pues, Padre, al celebrar ahora el memorial de la muerte y resurrección de tu Hijo,<br><br>te ofrecemos el pan de vida y el cáliz de salvación, y te damos gracias porque nos haces dignos de servirte en tu presencia. Te pedimos humildemente que el Espíritu Santo congregue en la unidad a cuantos participamos del Cuerpo y Sangre de Cristo. C1 Acuérdate, Señor, de tu Iglesia extendida por toda la tierra; _______________________ En los domingos, cuando no hay otro recuerdo más propio, puede decirse: Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí en el domingo, día en que Cristo ha vencido a la muerte y nos ha hecho partícipes de su vida inmortal; En la Natividad del Señor y durante su octava: Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí (en la noche santa) en el día santo en que la Virgen María dio a luz al Salvador del mundo; En la Epifanía del Señor: Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí en el día santo en que tu único Hijo, eterno como tú en la gloria, se manifestó en la realidad de nuestra propia carne; Desde la Misa de la Vigilia pascual hasta el segundo domingo de Pascua: Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí (en la noche santísima) en el día santísimo de la resurrección de nuestro Señor Jesucristo;<br><br>En la Ascensión del Señor: Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí en el día glorioso en que Cristo ha sido constituido Señor del cielo y de la tierra; En el domingo de Pentecostés: Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí en el día en que la efusión de tu Espíritu ha hecho de ella sacramento de unidad para todos los pueblos; _______________________ y con el Papa N., con nuestro Obispo N. Puede hacerse también mención de los Obispos coadjutores o auxiliares y, en las concelebraciones, del Obispo que preside la celebración. _______________________ El Obispo, cuando celebra en su diócesis, dice: conmigo, indigno siervo tuyo, Cuando celebra un Obispo que no es el Ordinario diocesano, dice: con mi hermano N., Obispo de esta Iglesia de N., conmigo, indigno siervo tuyo, _______________________________ y todos los pastores que cuidan de tu pueblo, llévala a su perfección por la caridad. ______________________________ INTERCESIONES PARTICULARES En las misas de Pascua, de su octava y en la del bautismo de adultos: Acuérdate también de nuestros hermanos N. y N. que hoy, por medio del bautismo (y de la confirmación), han entrado a formar parte de tu familia; ayúdales a seguir a Cristo, tu Hijo, con ánimo generoso y ferviente.<br><br>En la misa del bautismo de niños: Acuérdate también de nuestros hermanos N. y N. (de aquellos hermanos nuestros) que hoy has hecho renacer del agua y del Espíritu Santo, librándolos del pecado; tú que los has incorporado, como miembros vivos, al cuerpo de Cristo, inscribe también sus nombres en el libro de la vida. En la misa de confirmación: Acuérdate también de tus hijos N. y N. que, regenerados en el bautismo, hoy has confirmado, marcándolos con el sello del Espíritu Santo: custodia en ellos el don de tu amor. En la misa de primera comunión: Acuérdate de tus hijos N. y N. que por vez primera invitas en este día a participar del pan de vida y del cáliz de salvación, en la mesa de tu familia; concédeles crecer siempre en tu amistad y en la comunión con tu Iglesia. En la misa del matrimonio: Acuérdate de tus hijos N. y N. que en Cristo hoy han fundado una nueva familia, iglesia doméstica y sacramento de tu amor, y concédeles que la gracia de este día se prolongue a lo largo de toda su vida. En la misa por los difuntos: Recuerda a tu hijo (hija) N., a quien llamaste (hoy) de este mundo a tu presencia; concédele que, así como ha compartido ya la muerte de Jesucristo, comparta también con él la gloria de la resurrección. _______________________<br><br>C2 Acuérdate también de nuestros hermanos que se durmieron en la esperanza de la resurrección, y de todos los que han muerto en tu misericordia; admítelos a contemplar la luz de tu rostro. Ten misericordia de todos nosotros, y así, con María, la Virgen Madre de Dios, su esposo san José, los apóstoles y cuantos vivieron en tu amistad a través de los tiempos, merezcamos, por tu Hijo Jesucristo, compartir la vida eterna y cantar tus alabanzas. Junta las manos. 106. Toma la patena con el pan consagrado, y el cáliz y, sosteniéndolos elevados, dice: CP Por Cristo, con él y en él, o a ti, Dios Padre omnipotente, CC en la unidad del Espíritu Santo, todo honor y toda gloria por los siglos de los siglos. El pueblo aclama: Amén. Después sigue el rito de la Comunión.<br><br>PLEGARIA EUCARÍSTICA III 107. V/. El Señor esté con ustedes. R/. Y con tu espíritu. V/. Levantemos el corazón. R/. Lo tenemos levantado hacia el Señor. V/. Demos gracias al Señor, nuestro Dios. R/. Es justo y necesario. Sigue el prefacio, dicho según las rúbricas, que concluye: Santo, Santo, Santo es el Señor, Dios del universo. Llenos están el cielo y la tierra de tu gloria. Hosanna. en el cielo. Bendito el que viene en nombre del Señor. Hosanna en el cielo. 122. El sacerdote, con las manos extendidas, dice: CP S anto eres en verdad, Padre, y con razón te alaban todas tus criaturas, ya que por Jesucristo, tu Hijo, Señor nuestro, con la fuerza del Espíritu Santo, das vida y santificas todo, y congregas a tu pueblo sin cesar, para que ofrezca en tu honor un sacrificio sin mancha desde donde sale el sol hasta el ocaso. 109. Junta las manos y, manteniéndolas extendidas sobre las ofrendas, dice: CC Por eso, Padre, te suplicamos que santifiques por el mismo Espíritu estos dones que hemos separado para ti,<br><br>junta las manos y traza el signo de la cruz sobre el pan y el cáliz conjuntamente, diciendo: de manera que sean Cuerpo y ✠ Sangre de Jesucristo, Hijo tuyo y Señor nuestro, junta las manos que nos mandó celebrar estos misterios. 110. En las fórmulas que siguen, las palabras del Señor han de pronunciarse con claridad, como lo requiere la naturaleza de las mismas palabras. Porque él mismo, la noche en que iba a ser entregado, ____________________________ En la misa vespertina del Jueves santo: habiendo amado a los suyos que estaban en el mundo, los amó hasta el extremo y, mientras cenaba con sus discípulos, ____________________________ Toma el pan y, sosteniéndolo un poco elevado sobre el altar, prosigue: tomó pan, y dando gracias te bendijo, lo partió y lo dio a sus discípulos diciendo: Se inclina un poco. TOMEN Y COMAN TODOS DE ÉL, PORQUE ÉSTO ES MI CUERPO QUE SERÁ ENTREGADO POR USTEDES. Muestra el pan consagrado al pueblo, lo deposita luego sobre la patena y lo adora haciendo genuflexión. 111. Después prosigue: Del mismo modo, acabada la cena, Toma el cáliz y, sosteniéndolo un poco elevado sobre el altar, dice: tomó este cáliz glorioso<br><br>en sus santas y venerables manos; dando gracias te bendijo, y lo dio a sus discípulos diciendo: Se inclina un poco. TOMEN Y BEBAN TODOS DE ÉL, PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE, SANGRE DE LA ALIANZA NUEVA Y ETERNA, QUE SERÁ DERRAMADA POR USTEDES Y POR MUCHOS PARA EL PERDÓN DE LOS PECADOS. HAGAN ESTO EN CONMEMORACIÓN MÍA. Muestra el cáliz al pueblo, lo deposita luego sobre el corporal y lo adora haciendo genuflexión. 112. Luego dice una de las siguientes fórmulas: CP Éste es el Misterio de la fe. O bien: Éste es el Sacramento de nuestra fe. Y el pueblo prosigue, aclamando: Anunciamos tu muerte, proclamamos tu resurrección. ¡Ven, Señor Jesús! ___________________________________ También puede decirse: Éste es el Misterio de la fe. Cristo nos redimió.<br><br>Y el pueblo prosigue, aclamando: Cada vez que comemos de este pan y bebemos de este cáliz, anunciamos tu muerte, Señor, hasta que vuelvas. O bien: Éste es el Misterio de la fe. Cristo se entregó por nosotros. Y el pueblo prosigue, aclamando: Salvador del mundo, sálvanos, tu que nos has liberado por tu cruz y resurrección. ___________________________________ 113. Después el sacerdote, con las manos extendidas, dice: CC Así, pues, Padre, al celebrar ahora el memorial de la pasión salvadora de tu Hijo, de su admirable resurrección y ascensión al cielo, mientras esperamos su venida gloriosa, te ofrecemos, en esta acción de gracias, el sacrificio vivo y santo. Dirige tu mirada sobre la ofrenda de tu Iglesia, y reconoce en ella la Víctima por cuya inmolación quisiste devolvernos tu amistad, para que, fortalecidos con el Cuerpo y Sangre de tu Hijo y llenos de su Espíritu Santo, formemos en Cristo un solo cuerpo y un solo espíritu.<br><br>C1 Que él nos transforme en ofrenda permanente, para que gocemos de tu heredad junto con tus elegidos: con María, la Virgen Madre de Dios, su esposo, san José, los apóstoles y los mártires, [san N.: santo del día o patrono] y todos los santos, por cuya intercesión confiamos obtener siempre tu ayuda. C2 Te pedimos, Padre, que esta Víctima de reconciliación traiga la paz y la salvación al mundo entero. Confirma en la fe y en la caridad a tu Iglesia, peregrina en la tierra: al tu servidor, el Papa N., a nuestro obispo N., Puede hacerse también mención de los Obispos coadjutores o auxiliares. ____________________________ El Obispo, cuando celebra en su diócesis, dice: conmigo, indigno siervo tuyo, Cuando celebra un Obispo que no es el Ordinario diocesano, dice: con mi hermano N., Obispo de esta Iglesia de N., conmigo, indigno siervo tuyo, ____________________________ al orden episcopal, a los presbíteros y diáconos, y a todo el pueblo redimido por ti. _______________________________<br><br>INTERCESIONES PARTICULARES En las misas de Pascua, de su octava y en la del bautismo de adultos: Confirma en la fidelidad cristiana a tus hijos [N. y N.] que hoy, por medio del bautismo: [y del don del Espíritu] has llamado a formar parte de tu pueblo y concédeles andar siempre en una vida nueva. En la misa del bautismo de niños: Ayuda a nuestros hermanos [N. y N.], que hoy has hecho renacer del agua y del Espíritu Santo librándolos del pecado; tú que los has incorporado, como miembros vivos, al Cuerpo de Cristo, inscribe también sus nombres en el libro de la vida. En la misa de la confirmación: Ayuda a tus hijos [N. y N.], que hoy has confirmado marcándolos con el sello del Espíritu Santo; custodia en ellos el don de tu amor. En la misa de primera comunión: Ayuda a tus hijos [N. y N.], que por vez primera invitas en este día a participar del pan de vida y del cáliz de salvación, en la mesa de tu familia; concédeles crecer siempre en tu amistad y en la comunión con tu Iglesia. En la misa del matrimonio: Ayuda a tus hijos [N. y N.], que en Cristo hoy han fundado una nueva familia, iglesia doméstica y sacramento de tu amor, y concédeles que la gracia de este día se prolongue a lo largo de toda su vida. ____________________________ Atiende los deseos y súplicas de esta familia que has congregado en tu presencia. ____________________________ En los domingos, cuando no hay otro recuerdo más propio, puede decirse: en el domingo, día en que Cristo ha vencido a la muerte y nos ha hecho partícipes de su vida inmortal. En la Natividad del Señor y durante su octava: (en la noche santa) en el día santo en que la Virgen María dio a luz al Salvador del mundo. En la Epifanía del Señor: en el día santo, en que tu único Hijo, eterno como tú en la gloria, se manifestó en la verdad de nuestra carne hecho hombre. Desde la misa de la Vigilia pascual hasta el segundo domingo de Pascua: (en la noche gloriosa) en el día glorioso de la resurrección de nuestro Señor Jesucristo según la carne.<br><br>En la Ascensión del Señor en el día glorioso de la Ascensión, en el que Cristo ha sido constituido Señor del cielo y de la tierra. En el domingo de Pentecostés: en el día en que la efusión de tu Espíritu ha hecho de ella sacramento de unidad para todos los pueblos. _____________________________ Reúne en torno a ti, Padre misericordioso, a todos tus hijos dispersos por el mundo. *A nuestros hermanos difuntos y a cuantos murieron en tu amistad recíbelos en tu reino, donde esperamos gozar todos juntos de la plenitud eterna de tu gloria, _____________________________ 115. Cuando esta plegaria eucarística se utiliza en las misas de difuntos, puede decirse: * Recuerda a tu hijo [hija] N. a quien llamaste [hoy] de este mundo a tu presencia: concédele que, así como ha compartido ya la muerte de Jesucristo comparta, también, con él la gloria de la resurrección, cuando Cristo haga surgir de la tierra a los muertos, y transforme nuestro cuerpo frágil en cuerpo glorioso como el suyo. Y a nuestros hermanos difuntos y a cuantos murieron en tu amistad recíbelos en tu reino, donde esperamos gozar todos juntos de la plenitud eterna de tu gloria; allí enjugarás las lágrimas de nuestros ojos, porque, al contemplarte como tú eres, Dios nuestro, seremos para siempre semejantes a ti y cantaremos eternamente tus alabanzas, ____________________________<br><br>Junta las manos. por Cristo, Señor nuestro, por quien concedes al mundo todos los bienes. 116. Toma la patena con el pan consagrado y el cáliz y, sosteniéndolos elevados, dice: CP Por Cristo, con él y en él, o a ti, Dios Padre omnipotente, CC en la unidad del Espíritu Santo, todo honor y toda gloria por los siglos de los siglos. El pueblo aclama: Amén. Después sigue el rito de la Comunión.<br><br>PLEGARIA EUCARÍSTICA IV 116. Esta plegaria eucarística forma un todo con su prefacio, el cual nunca puede cambiarse. Por consiguiente, no puede decirse cuando está prescrito un prefacio propio. En los otros casos puede decirse, incluso cuando las rúbricas prescriban un prefacio del tiempo. V/. El Señor esté con ustedes. R/. Y con tu espíritu. V/. Levantemos el corazón. R/. Lo tenemos levantado hacia el Señor. V/. Demos gracias al Señor, nuestro Dios. R/. Es justo y necesario. CP En verdad es justo darte gracias, y deber nuestro glorificarte, Padre santo, porque tú eres el único Dios vivo y verdadero que existes desde siempre y vives para siempre; luz sobre toda luz. Porque tú solo eres bueno y fuente de vida, hiciste todas las cosas para colmarlas de tus bendiciones y alegrar su multitud con la claridad de tu gloria. Por eso, innumerables ángeles en tu presencia, contemplando la gloria de tu rostro, te sirven siempre y te glorifican sin cesar. Y con ellos también nosotros, llenos de alegría, y por nuestra voz las demás criaturas, aclamamos tu nombre cantando: Santo, Santo, Santo es el Señor, Dios del Universo. Llenos están el cielo y la tierra de tu gloria. Hosanna en el cielo.<br><br>Bendito el que viene en nombre del Señor. Hosanna en el cielo. 117. El sacerdote, con las manos extendidas, dice: CP T alabamos, Padre santo, porque eres grande, porque hiciste todas las cosas con sabiduría y amor. A imagen tuya creaste al hombre y le encomendaste el universo entero, para que, sirviéndote sólo a ti, su Creador, dominara todo lo creado. Y cuando por desobediencia perdió tu amistad, no lo abandonaste al poder de la muerte, sino que, compadecido, tendiste la mano a todos, para que te encuentre el que te busca. Reiteraste, además, tu alianza a los hombres; por los profetas los fuiste llevando con la esperanza de salvación. Y tanto amaste al mundo, Padre santo, que, al cumplirse la plenitud de los tiempos, nos enviaste como salvador a tu único Hijo. El cual se encarnó por obra del Espíritu Santo, nació de María, la Virgen, y así compartió en todo nuestra condición humana menos en el pecado; anunció la salvación a los pobres, la liberación a los oprimidos y a los afligidos el consuelo.<br><br>Para cumplir tus designios, él mismo se entregó a la muerte, y, resucitando, destruyó la muerte y nos dio nueva vida. Y porque no vivamos ya para nosotros mismos, sino para él, que por nosotros murió y resucitó, envió, Padre, desde tu seno al Espíritu Santo como primicia para los creyentes, a fin de santificar todas las cosas, llevando a plenitud su obra en el mundo. 118. Junta las manos y, manteniéndolas extendidas sobre las ofrendas, dice: CC Por eso, Padre, te rogamos que este mismo Espíritu santifique, Señor, estas ofrendas, Junta las manos y traza, una sola vez, el signo de la cruz sobre el pan y el cáliz conjuntamente, diciendo: para que sean Cuerpo y ✠ Sangre de Jesucristo, nuestro Señor, Junta las manos. y así celebremos el gran misterio que nos dejó como alianza eterna. 119. En las fórmulas que siguen, las palabras del Señor han de pronunciarse con claridad, como lo requiere la naturaleza de éstas. Porque él mismo, llegada la hora en que había de ser glorificado por ti, Padre santo, habiendo amado a los suyos que estaban en el mundo, los amó hasta el extremo.<br><br>Y, mientras cenaba con sus discípulos, Toma el pan y, sosteniéndolo un poco elevado sobre el altar, prosigue: tomó pan, te bendijo, lo partió y se lo dio diciendo: Se inclina un poco. TOMEN Y COMAN TODOS DE ÉL, PORQUE ÉSTO ES MI CUERPO QUE SERÁ ENTREGADO POR USTEDES. Muestra el pan consagrado al pueblo, lo deposita luego sobre la patena y lo adora haciendo genuflexión. 120. Después prosigue: Del mismo modo, acabada la cena, Toma el cáliz y, sosteniéndolo un poco elevado sobre el altar, dice: tomó este cáliz glorioso en sus santas y venerables manos; dando gracias te bendijo, y lo dio a sus discípulos diciendo: Se inclina un poco. TOMEN Y BEBAN TODOS DE ÉL, PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE, SANGRE DE LA ALIANZA NUEVA Y ETERNA, QUE SERÁ DERRAMADA POR USTEDES Y POR MUCHOS PARA EL PERDÓN DE LOS PECADOS. HAGAN ESTO EN CONMEMORACIÓN MÍA.<br><br>Muestra el cáliz al pueblo, lo deposita luego sobre el corporal y lo adora haciendo genuflexión. 121. Luego dice una de las siguientes fórmulas: CP Éste es el Misterio de la fe. O bien: Éste es el Sacramento de nuestra fe. Y el pueblo prosigue, aclamando: Anunciamos tu muerte, proclamamos tu resurrección. ¡Ven, Señor Jesús! ___________________________________ También puede decirse: Éste es el Misterio de la fe. Cristo nos redimió. Y el pueblo prosigue, aclamando: Cada vez que comemos de este pan y bebemos de este cáliz, anunciamos tu muerte, Señor, hasta que vuelvas. O bien: Éste es el Misterio de la fe. Cristo se entregó por nosotros. Y el pueblo prosigue, aclamando: Salvador del mundo, sálvanos, tu que nos has liberado por tu cruz y resurrección. ___________________________________ 122. Después el sacerdote, con las manos extendidas, dice:<br><br>CC Por eso, Padre, al celebrar ahora el memorial de nuestra redención, recordamos la muerte de Cristo y su descenso al lugar de los muertos, proclamamos su resurrección y ascensión a tu derecha; y mientras esperamos su venida gloriosa, te ofrecemos su Cuerpo y su Sangre, sacrificio agradable a ti y salvación para todo el mundo. Dirige tu mirada sobre esta Víctima que tú mismo has preparado a tu Iglesia, y concede a cuantos compartimos este pan y este cáliz, que, congregados en un solo cuerpo por el Espíritu Santo, seamos en Cristo víctima viva para alabanza de tu gloria. C1 Y ahora, Señor, acuérdate de todos aquellos por quienes se ofrece este sacrificio: de tu servidor el Papa N., de nuestro obispo N., Puede hacerse también mención de los Obispos coadjutores o auxiliares. ____________________________ El Obispo, cuando celebra en su diócesis, dice: conmigo, indigno siervo tuyo, Cuando celebra un Obispo que no es el Ordinario diocesano, dice: con mi hermano N., Obispo de esta Iglesia de N., conmigo, indigno siervo tuyo, ______________________________<br><br>del orden episcopal y de los presbíteros y diáconos, de los oferentes y de los aquí reunidos, ________________________________ INTERCESIONES PARTICULARES En las misas de Pascua y en la del bautismos: * de nuestros hermanos [N. y N.] que hoy has hecho renacer del agua del Espíritu Santo, En la misa de la confirmación: * de tus hijos [N. y N.], que hoy has confirmado marcándolos con el sello del Espíritu Santo, En la misa de primera comunión: * de tus hijos [N. y N.], que por vez primera invitas en este día a participar del pan de vida y del cáliz de salvación, en la mesa de tu familia, En la misa del matrimonio: * de tus hijos [N. y N.], que en Cristo hoy han fundado una nueva familia, ____________________________ de todo tu pueblo santo y de aquellos que te buscan con sincero corazón. C2 Acuérdate también de los que murieron en la paz de Cristo y de todos los difuntos, cuya fe sólo tú conociste. Padre de bondad, que todos tus hijos nos reunamos en la heredad de tu reino, con María, la Virgen Madre de Dios, con su esposo san José,<br><br>con los apóstoles y los santos; y allí, junto con toda la creación libre ya de pecado y de muerte, Junta las manos. te glorifiquemos por Cristo, Señor nuestro, por quien concedes al mundo todos los bienes. 123. Toma la patena con el pan consagrado y el cáliz y, sosteniéndolos elevados, dice: CP Por Cristo, con él y en él, o a ti, Dios Padre omnipotente, CC en la unidad del Espíritu Santo, todo honor y toda gloria por los siglos de los siglos. El pueblo aclama: Amén. Después sigue el rito de la Comunión.<br><br>RITO DE COMUNIÓN 124. Una vez que ha dejado el cáliz y la patena, el sacerdote, con las manos juntas, dice: Fieles a la recomendación del Salvador y siguiendo su divina enseñanza, nos atrevemos a decir: ____________________________ O bien: Llenos de alegría por ser hijos de Dios, digamos confiadamente la oración que Cristo nos enseñó: O bien: El amor de Dios ha sido derramado en nuestros corazones con el Espíritu Santo que se nos ha dado; digamos con fe y esperanza: O bien: Antes de participar en el banquete de la Eucaristía, signo de reconciliación y vínculo de unión fraterna, oremos juntos como el Señor nos ha enseñado: ____________________________ Extiende las manos y, junto con el pueblo, continúa: Padre nuestro, que estás en el cielo, santificado sea tu nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal.<br><br>125. El sacerdote, con las manos extendidas, prosigue él solo: Líbranos de todos los males, Señor, y concédenos la paz en nuestros días, para que, ayudados por tu misericordia, vivamos siempre libres de pecado y protegidos de toda perturbación, mientras esperamos la gloriosa venida de nuestro Salvador Jesucristo. Junta las manos. El pueblo concluye la oración aclamando: Tuyo es el reino, tuyo el poder y la gloria por siempre, Señor. 126. Después el sacerdote, con las manos extendidas, dice en voz alta: Señor Jesucristo, que dijiste a tus Apóstoles: «La paz les dejo, mi paz les doy», no tengas en cuenta nuestros pecados, sino la fe de tu Iglesia, y conforme a tu palabra, concédele la paz y la unidad. Junta las manos. Tú que vives y reinas por los siglos de los siglos. El pueblo responde: Amén. 127. El sacerdote, extendiendo y juntando las manos, añade: La paz del Señor esté siempre con ustedes.<br><br>El pueblo responde: Y con tu espíritu. 128. Luego, si se juzga oportuno, el diácono, o el sacerdote, añade: Dense fraternalmente la paz. ____________________________ O bien: Como hijos de Dios, intercambien ahora un signo de comunión fraterna. O bien: En Cristo, que nos ha hecho hermanos con su cruz, dense la paz como signo de reconciliación. O bien: En el Espíritu de Cristo resucitado, dense fraternalmente la paz. Y todos, según la costumbre del lugar, se dan la paz. El sacerdote da la paz al diácono o ministro. 129. Después toma el pan consagrado, lo parte sobre la patena, y deja caer una parte del mismo en el cáliz, diciendo en secreto: El Cuerpo y la Sangre de nuestro Señor Jesucristo, unidos en este cáliz, sean para nosotros alimento de vida eterna. 144. Mientras tanto se canta o se dice: Cordero de Dios que quitas el pecado del mundo, ten piedad de nosotros. Cordero de Dios que quitas el pecado del mundo, ten piedad de nosotros.<br><br>Cordero de Dios que quitas el pecado del mundo, danos la paz. Si la fracción del pan se prolonga, el canto precedente puede repetirse varias veces. La última vez se dice: danos la paz. 131. A continuación el sacerdote, con las manos juntas, dice en secreto una de las dos oraciones siguientes: Señor Jesucristo, Hijo de Dios vivo, que por voluntad del Padre, cooperando el Espíritu Santo, diste con tu muerte la vida al mundo, líbrame, por la recepción de tu Cuerpo y de tu Sangre, de todas mis culpas y de todo mal. Concédeme cumplir siempre tus mandamientos y jamás permitas que me separe de ti. O bien: Señor Jesucristo, la comunión de tu Cuerpo y de tu Sangre, no sea para mí un motivo de juicio y condenación, sino que, por tu piedad, me aproveche para defensa de alma y cuerpo y como remedio saludable. 132. El sacerdote hace genuflexión, toma el pan consagrado y, sosteniéndolo un poco elevado sobre la patena, lo muestra al pueblo, diciendo: Éste es el Cordero de Dios, que quita el pecado del mundo. Dichosos los invitados a la cena del Señor. Y, juntamente con el pueblo, añade una vez: Señor, no soy digno de que entres en mi casa,<br><br>pero una palabra tuya bastará para sanarme. 133. El sacerdote dice en secreto: El Cuerpo de Cristo me guarde para la vida eterna. Y comulga reverentemente el Cuerpo de Cristo. Después toma el cáliz y dice en secreto: La Sangre de Cristo me guarde para la vida eterna. Y bebe reverentemente la Sangre de Cristo. 134. Después toma la patena o la píxide, se acerca a los que quieren comulgar y les presenta el pan consagrado, que sostiene un poco elevado, diciendo a cada uno de ellos: El Cuerpo de Cristo. El que va a comulgar responde: Amén. Y comulga. El diácono y los ministros que distribuyen la Eucaristía observan los mismos ritos. 135. Si se comulga bajo las dos especies, se observa el rito descrito en su lugar. 136. Cuando el sacerdote comulga el Cuerpo de Cristo, comienza el canto de comunión. 137. Acabada la comunión, el diácono, el acólito, o el mismo sacerdote, purifica la patena sobre el cáliz y también el mismo cáliz, a no ser que se prefiera purificarlo en la credencia después de la misa. Si el sacerdote hace la purificación, dice en secreto: Haz, Señor, que recibamos con un corazón limpio el alimento que acabamos de tomar, y que el don que nos haces en esta vida<br><br>nos aproveche para la eterna. 138. Después el sacerdote puede ir a la sede. Si se juzga oportuno, se pueden guardar unos momentos de silencio o cantar un salmo o cántico de alabanza. 139. Luego, de pie en la sede o en el altar, el sacerdote dice: Oremos. Y todos, junto con el sacerdote, oran en silencio durante unos momentos, a no ser que este silencio ya se haya hecho antes. 153. Después el sacerdote, con las manos extendidas, dice la oración después de la comunión. La oración después de la comunión termina con la conclusión breve. El pueblo aclama: Amén.<br><br>. En este momento se hacen, si es necesario y con brevedad, los oportunos anuncios o advertencias al pueblo. 141. Después tiene lugar la despedida. El sacerdote extiende las manos hacia el pueblo y dice: El Señor esté con ustedes. El pueblo responde: Y con tu espíritu. El sacerdote bendice al pueblo, diciendo: La bendición de Dios todopoderoso, Padre, Hijo ✠ y Espíritu Santo, descienda sobre ustedes. El pueblo responde: Amén. 142. En algunas ocasiones y en determinadas misas rituales puede darse una de la bendiciones solemnes o de las oraciones sobre el pueblo. 143. El Obispo, para bendecir al pueblo, usa el siguiente formulario, a no ser que prefiera utilizar una de las bendiciones solemnes o una de las oraciones sobre el pueblo. V/. El Señor esté con ustedes. R/. Y con tu espíritu. V/. Bendito se al nombre del Señor. R/. Ahora y por todos los siglos. V/. Nuestro auxilio es el nombre del Señor. R/. Que hizo el cielo y la tierra. V/. La bendición de Dios todopoderoso,<br><br>Pa✠dre, Hi✠jo y Espíritu ✠ Santo, descienda sobre ustedes. R/. Amén. 144. Luego el diácono, o el mismo sacerdote, con las manos juntas, despide al pueblo con una de las fórmulas siguientes: Pueden ir en paz. ____________________________ O bien: La alegría del Señor sea nuestra fuerza. Pueden ir en paz. O bien: Glorifiquen al Señor con su vida. Pueden ir en paz. O bien: En el nombre del Señor, pueden ir en paz. O bien, especialmente en los domingos de Pascua: Anuncien a todos la alegría del Señor resucitado. Pueden ir en paz. ____________________________ El pueblo responde: Demos gracias a Dios. 145. Después el sacerdote besa con veneración el altar, como al comienzo, y, hecha la debida reverencia con los ministros, se retira a la sacristía. 146. Si sigue inmediatamente otra acción litúrgica, se omite el rito de despedida." });
  const dailyUrl = () => 'https://sistemas.cem.org.mx/Controller/Misal/get_misal.php';

  global.countryMassData.MX = Object.freeze({
    schemaVersion: 2,
    jurisdiction: 'MX',
    jurisdictions: Object.freeze(['MX']),
    jurisdictionName: 'México',
    conferenceCalendar: 'Conferencia del Episcopado Mexicano',
    ordinaryLanguage: 'ES',
    ordinary,
    ordinaryStructure: 'paragraph-rubric-choices-v1',
    officialOrderCorpus,
    ordinaryEdition: 'Misal Romano, edición típica para México según la Editio Typica Tertia',
    ordinarySource,
    beta: true,
    dailyReadings: Object.freeze({
      provider: 'Conferencia del Episcopado Mexicano (CEM)',
      calendar: 'México',
      translation: 'Leccionario y Misal Romano para México',
      parser: 'strict-mexican-cem-daily-mass',
      url: dailyUrl
    }),
    dailyPropers: Object.freeze({
      provider: 'Conferencia del Episcopado Mexicano (CEM)',
      parser: 'strict-mexican-cem-daily-mass',
      url: dailyUrl
    }),
    properSources: Object.freeze({
      nationalMissal: ordinarySource,
      dailyMass: 'https://sistemas.cem.org.mx/misal/'
    }),
    calendar: Object.freeze({})
  });
})(globalThis);
