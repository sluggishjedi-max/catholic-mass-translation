// Portugal Mass module (CEP, Beta): official Portuguese Ordinary and daily Mass source.
(function registerPortugalMass(global) {
  'use strict';
  global.countryMassData = global.countryMassData || {};
  const ordinary = Object.freeze([
  {
    "id": "1. THE INTRODUCTORY RITES",
    "type": "section",
    "pt": "Ritos iniciais"
  },
  {
    "id": "1.1 entrance",
    "type": "part",
    "header": {
      "pt": "Antífona de entrada"
    },
    "lines": [
      {
        "sp_pt": "",
        "text_pt": "(Antífona de entrada do dia)"
      }
    ]
  },
  {
    "id": "1.2 greeting",
    "type": "selectable",
    "header": {
      "pt": "Saudação"
    },
    "variants": {
      "A": {
        "label": {
          "pt": "Fórmula 1"
        },
        "lines": [
          {
            "sp_pt": "",
            "text_pt": "Ritos iniciais"
          },
          {
            "sp_pt": "",
            "text_pt": "1. Reunido o povo, o sacerdote e os ministros encaminham-se para o altar enquanto se executa o cântico de entrada."
          },
          {
            "rubric_pt": "Ao chegar ao altar, o sacerdote, feita uma inclinação profunda juntamente"
          },
          {
            "sp_pt": "",
            "text_pt": "com os ministros, beija o altar e, conforme as circunstâncias, incensa a cruz e o"
          },
          {
            "sp_pt": "",
            "text_pt": "altar. Depois, dirige-se para a sua cadeira, juntamente com os ministros."
          },
          {
            "rubric_pt": "Terminado o cântico de entrada, sacerdote e fiéis, todos de pé, fazem o sinal"
          },
          {
            "sp_pt": "",
            "text_pt": "da cruz, enquanto o sacerdote, voltado para o povo, diz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Em nome do Pai e do Filho e do Espírito Santo."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Amen."
          },
          {
            "sp_pt": "",
            "text_pt": "2. Depois, o sacerdote, abrindo os braços, saúda o povo, dizendo:"
          },
          {
            "sp_pt": "",
            "text_pt": "A graça de nosso Senhor Jesus Cristo,"
          },
          {
            "sp_pt": "",
            "text_pt": "o amor do Pai e a comunhão do Espírito Santo"
          },
          {
            "sp_pt": "",
            "text_pt": "estejam convosco."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Bendito seja Deus, que nos reuniu no amor de Cristo."
          }
        ]
      },
      "B": {
        "label": {
          "pt": "Fórmula 2"
        },
        "lines": [
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "A graça e a paz de Deus, nosso Pai,"
          },
          {
            "sp_pt": "",
            "text_pt": "e de Jesus Cristo, nosso Senhor, estejam convosco."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Bendito seja Deus, que nos reuniu no amor de Cristo."
          }
        ]
      },
      "C": {
        "label": {
          "pt": "Fórmula 3"
        },
        "lines": [
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "A graça de nosso Senhor Jesus Cristo esteja convosco."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Bendito seja Deus, que nos reuniu no amor de Cristo."
          }
        ]
      },
      "D": {
        "label": {
          "pt": "Fórmula 4"
        },
        "lines": [
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "A graça de nosso Senhor Jesus Cristo"
          },
          {
            "sp_pt": "",
            "text_pt": "que por nós Se fez homem"
          },
          {
            "sp_pt": "",
            "text_pt": "(ou: que por nós morreu e ressuscitou"
          }
        ]
      },
      "E": {
        "label": {
          "pt": "Fórmula 5"
        },
        "lines": [
          {
            "rubric_pt": "ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "que por nós intercede junto do Pai) esteja convosco."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Bendito seja Deus, que nos reuniu no amor de Cristo."
          }
        ]
      },
      "F": {
        "label": {
          "pt": "Fórmula 6"
        },
        "lines": [
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "O Senhor esteja convosco."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Ele está no meio de nós."
          },
          {
            "rubric_pt": "O bispo, em vez de O Senhor esteja convosco, nesta primeira saudação diz:"
          },
          {
            "sp_pt": "Bispo",
            "text_pt": "A paz esteja convosco."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Bendito seja Deus, que nos reuniu no amor de Cristo."
          },
          {
            "rubric_pt": "RITOS INICIAIS"
          }
        ]
      },
      "G": {
        "label": {
          "pt": "Fórmula 7"
        },
        "lines": [
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "A paz, a caridade e a fé,"
          },
          {
            "sp_pt": "",
            "text_pt": "da parte de Deus Pai e de Jesus Cristo, nosso Senhor,"
          },
          {
            "sp_pt": "",
            "text_pt": "estejam convosco."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Bendito seja Deus, que nos reuniu no amor de Cristo."
          }
        ]
      },
      "H": {
        "label": {
          "pt": "Fórmula 8"
        },
        "lines": [
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "A graça e a paz do Senhor que é, que era e que vem,"
          },
          {
            "sp_pt": "",
            "text_pt": "estejam convosco."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Bendito seja Deus, que nos reuniu no amor de Cristo."
          }
        ]
      },
      "I": {
        "label": {
          "pt": "Fórmula 9"
        },
        "lines": [
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "O Deus da esperança,"
          },
          {
            "sp_pt": "",
            "text_pt": "que, pela ação do Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "nos alegra com a sua paz,"
          },
          {
            "sp_pt": "",
            "text_pt": "esteja convosco."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Bendito seja Deus, que nos reuniu no amor de Cristo."
          }
        ]
      },
      "J": {
        "label": {
          "pt": "Fórmula 10"
        },
        "lines": [
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "Tempo do Advento:"
          },
          {
            "sp_pt": "",
            "text_pt": "O Senhor, que vem salvar-nos, esteja convosco."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Bendito seja Deus, que nos reuniu no amor de Cristo."
          }
        ]
      },
      "K": {
        "label": {
          "pt": "Fórmula 11"
        },
        "lines": [
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "Tempo do Natal:"
          },
          {
            "sp_pt": "",
            "text_pt": "A paz e o amor de Deus Pai,"
          },
          {
            "sp_pt": "",
            "text_pt": "que se manifestaram em Cristo, nascido para nossa salvação,"
          },
          {
            "sp_pt": "",
            "text_pt": "estejam convosco."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Bendito seja Deus, que nos reuniu no amor de Cristo."
          }
        ]
      },
      "L": {
        "label": {
          "pt": "Fórmula 12"
        },
        "lines": [
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "Tempo da Quaresma:"
          },
          {
            "sp_pt": "",
            "text_pt": "A graça e o amor de Jesus Cristo, que nos chama à conversão,"
          },
          {
            "sp_pt": "",
            "text_pt": "estejam convosco."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Bendito seja Deus, que nos reuniu no amor de Cristo."
          }
        ]
      },
      "M": {
        "label": {
          "pt": "Fórmula 13"
        },
        "lines": [
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "Tempo da Páscoa:"
          },
          {
            "sp_pt": "",
            "text_pt": "O Deus da vida, que ressuscitou Jesus Cristo,"
          },
          {
            "sp_pt": "",
            "text_pt": "destruindo as cadeias da morte, esteja convosco."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Bendito seja Deus, que nos reuniu no amor de Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "3. O sacerdote, ou o diácono, ou um ministro idóneo, pode fazer aos fiéis uma"
          },
          {
            "sp_pt": "",
            "text_pt": "brevíssima introdução à Missa do dia."
          }
        ]
      }
    }
  },
  {
    "id": "1.3 penitential",
    "type": "selectable",
    "header": {
      "pt": "Ato penitencial"
    },
    "variants": {
      "A": {
        "label": {
          "pt": "Primeira fórmula"
        },
        "lines": [
          {
            "sp_pt": "",
            "text_pt": "Ato penitencial – A"
          },
          {
            "sp_pt": "",
            "text_pt": "4. Em seguida, o sacerdote convida os fiéis ao ato penitencial, dizendo:"
          },
          {
            "sp_pt": "",
            "text_pt": "Irmãos:"
          },
          {
            "sp_pt": "",
            "text_pt": "Para celebrarmos dignamente os santos mistérios,"
          },
          {
            "sp_pt": "",
            "text_pt": "reconheçamos que somos pecadores."
          },
          {
            "sp_pt": "",
            "text_pt": "Ou, nos domingos:"
          },
          {
            "sp_pt": "",
            "text_pt": "Na celebração da vitória de Cristo sobre o pecado e a morte,"
          },
          {
            "sp_pt": "",
            "text_pt": "em que somos convidados a morrer para o pecado"
          },
          {
            "sp_pt": "",
            "text_pt": "e a ressurgir para uma vida nova,"
          },
          {
            "sp_pt": "",
            "text_pt": "invoquemos a misericórdia do Pai,"
          },
          {
            "sp_pt": "",
            "text_pt": "porque somos pecadores."
          },
          {
            "sp_pt": "",
            "text_pt": "Guardam-se alguns momentos de silêncio."
          },
          {
            "sp_pt": "",
            "text_pt": "Seguidamente, o sacerdote introduz a confissão com estas palavras ou outras"
          },
          {
            "sp_pt": "",
            "text_pt": "semelhantes:"
          },
          {
            "sp_pt": "",
            "text_pt": "Confessemos os nossos pecados."
          },
          {
            "sp_pt": "",
            "text_pt": "Dizem todos juntos a fórmula de confissão geral:"
          },
          {
            "sp_pt": "",
            "text_pt": "Confesso a Deus todo-poderoso"
          },
          {
            "sp_pt": "",
            "text_pt": "e a vós, irmãos,"
          },
          {
            "sp_pt": "",
            "text_pt": "que pequei muitas vezes,"
          },
          {
            "sp_pt": "",
            "text_pt": "por pensamentos e palavras,"
          },
          {
            "sp_pt": "",
            "text_pt": "atos e omissões,"
          },
          {
            "sp_pt": "",
            "text_pt": "e, batendo no peito, dizem:"
          },
          {
            "sp_pt": "",
            "text_pt": "por minha culpa, minha culpa, minha tão grande culpa."
          },
          {
            "sp_pt": "",
            "text_pt": "e continuam:"
          },
          {
            "sp_pt": "",
            "text_pt": "E peço à Virgem Maria,"
          },
          {
            "sp_pt": "",
            "text_pt": "aos anjos e santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "e a vós, irmãos,"
          },
          {
            "sp_pt": "",
            "text_pt": "que rogueis por mim a Deus, nosso Senhor."
          },
          {
            "rubric_pt": "Segue-se a absolvição do sacerdote:"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus todo-poderoso tenha compaixão de nós,"
          },
          {
            "sp_pt": "",
            "text_pt": "perdoe os nossos pecados e nos conduza à vida eterna."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Amen."
          },
          {
            "rubric_pt": "Em seguida, diz-se o Senhor, tende piedade (Kýrie eléison)."
          }
        ]
      },
      "B": {
        "label": {
          "pt": "Segunda fórmula"
        },
        "lines": [
          {
            "sp_pt": "",
            "text_pt": "Ato penitencial – B"
          },
          {
            "sp_pt": "",
            "text_pt": "5. O sacerdote convida os fiéis ao ato penitencial, dizendo:"
          },
          {
            "sp_pt": "",
            "text_pt": "Irmãos, para celebrarmos dignamente os santos mistérios,"
          },
          {
            "sp_pt": "",
            "text_pt": "reconheçamos que somos pecadores."
          },
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "De coração humilde e contrito"
          },
          {
            "sp_pt": "",
            "text_pt": "pela consciência dos nossos pecados,"
          },
          {
            "sp_pt": "",
            "text_pt": "voltemo-nos para Deus, que é santo."
          },
          {
            "sp_pt": "",
            "text_pt": "Guardam-se alguns momentos de silêncio."
          },
          {
            "sp_pt": "",
            "text_pt": "Seguidamente, o sacerdote diz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Tende compaixão de nós, Senhor."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Porque somos pecadores."
          },
          {
            "rubric_pt": "O sacerdote continua:"
          },
          {
            "sp_pt": "",
            "text_pt": "Manifestai, Senhor, a vossa misericórdia."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "E dai-nos a vossa salvação."
          },
          {
            "rubric_pt": "Segue-se a absolvição do sacerdote:"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus todo-poderoso tenha compaixão de nós,"
          },
          {
            "sp_pt": "",
            "text_pt": "perdoe os nossos pecados e nos conduza à vida eterna."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Amen."
          },
          {
            "rubric_pt": "Em seguida, diz-se o Senhor, tende piedade (Kýrie eléison)."
          }
        ]
      },
      "C": {
        "label": {
          "pt": "Terceira fórmula"
        },
        "lines": [
          {
            "sp_pt": "",
            "text_pt": "Ato penitencial – C"
          },
          {
            "sp_pt": "",
            "text_pt": "6. O sacerdote convida os fiéis ao ato penitencial, dizendo:"
          },
          {
            "sp_pt": "",
            "text_pt": "Irmãos:"
          },
          {
            "sp_pt": "",
            "text_pt": "Para celebrarmos dignamente os santos mistérios,"
          },
          {
            "sp_pt": "",
            "text_pt": "reconheçamos que somos pecadores."
          },
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "Jesus Cristo, o justo, intercede por nós"
          },
          {
            "sp_pt": "",
            "text_pt": "e reconcilia-nos com o Pai."
          },
          {
            "sp_pt": "",
            "text_pt": "Abramos o nosso espírito ao arrependimento"
          },
          {
            "sp_pt": "",
            "text_pt": "para celebrarmos dignamente os santos mistérios."
          },
          {
            "sp_pt": "",
            "text_pt": "Guardam-se alguns momentos de silêncio."
          },
          {
            "rubric_pt": "RITOS INICIAIS"
          },
          {
            "sp_pt": "",
            "text_pt": "Seguidamente, o sacerdote, ou um ministro idóneo, diz ou canta as seguintes"
          },
          {
            "sp_pt": "",
            "text_pt": "invocações ou outras semelhantes:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que fostes enviado pelo Pai a salvar os corações atribulados:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison."
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Senhor, misericórdia ou Senhor, tende piedade de nós ou Kýrie, eléison."
          },
          {
            "rubric_pt": "O sacerdote continua:"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que viestes chamar os pecadores:"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison."
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Cristo, misericórdia ou Cristo, tende piedade de nós ou Christe, eléison."
          },
          {
            "sp_pt": "",
            "text_pt": "De novo, o sacerdote diz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que estais à direita do Pai a interceder por nós:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison."
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Senhor, misericórdia ou Senhor, tende piedade de nós ou Kýrie, eléison."
          },
          {
            "rubric_pt": "Segue-se a absolvição do sacerdote:"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus todo-poderoso tenha compaixão de nós,"
          },
          {
            "sp_pt": "",
            "text_pt": "perdoe os nossos pecados e nos conduza à vida eterna."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Amen."
          },
          {
            "rubric_pt": "Em seguida, omitido o Senhor, tende piedade (Kýrie), diz-se o hino Glória, quando"
          },
          {
            "sp_pt": "",
            "text_pt": "está prescrito para a Missa."
          },
          {
            "sp_pt": "",
            "text_pt": "Invocações alternativas"
          },
          {
            "rubric_pt": "1."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que sois o caminho que nos conduz ao Pai:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que sois a verdade que ilumina os povos:"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que sois a vida que renova o mundo:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "rubric_pt": "2."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que viestes procurar quem estava perdido:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que viestes dar a vida em resgate de todos:"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que congregais na unidade os filhos de Deus:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "rubric_pt": "3."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que sois o defensor dos pobres:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que sois a fortaleza dos fracos:"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que sois a esperança dos pecadores:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "rubric_pt": "RITOS INICIAIS"
          },
          {
            "sp_pt": "",
            "text_pt": "Tempo do Advento"
          },
          {
            "rubric_pt": "1."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que viestes ao mundo para nos salvar:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que nos visitais continuamente com a graça do vosso Espírito:"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que vireis um dia para julgar as nossas obras:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "rubric_pt": "2."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que vindes visitar vosso povo na paz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que vindes salvar o que estava perdido:"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que vindes criar um mundo novo:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Tempo do Natal"
          },
          {
            "rubric_pt": "1."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Filho de Deus, que, nascendo da Virgem Maria,"
          },
          {
            "sp_pt": "",
            "text_pt": "vos fizestes nosso irmão,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, Filho do homem, que conheceis e compreendeis a nossa fraqueza,"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Filho primogénito do Pai, que fazeis de nós uma família,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "rubric_pt": "2."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, rei da paz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, luz nas trevas:"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, imagem do homem novo:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Tempo da Quaresma"
          },
          {
            "rubric_pt": "1."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que, na cruz, perdoastes ao ladrão arrependido:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que nos mandastes perdoar"
          },
          {
            "sp_pt": "",
            "text_pt": "antes de nos aproximarmos do vosso altar:"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que confiastes à vossa Igreja o ministério da reconciliação:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "rubric_pt": "2."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que, na água e no Espírito, nos regenerastes à vossa imagem:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que enviais o vosso Espírito para criar em nós um coração novo:"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que nos fazeis participantes do vosso Corpo e do vosso Sangue:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "rubric_pt": "RITOS INICIAIS"
          },
          {
            "rubric_pt": "3."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que fazeis passar da morte para a vida"
          },
          {
            "sp_pt": "",
            "text_pt": "os que ouvem a vossa palavra:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que quisestes ser levantado da terra para nos atrair a V ós:"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que subistes à cruz por nós,"
          },
          {
            "sp_pt": "",
            "text_pt": "para sermos elevados à glória da ressurreição:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Tempo da Páscoa"
          },
          {
            "rubric_pt": "1."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, nossa paz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, nossa Páscoa:"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, nossa vida:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "rubric_pt": "2."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que sois o eterno sacerdote da nova Aliança:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que nos edificais como pedras vivas no templo santo de Deus:"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que nos tornais concidadãos dos santos no reino dos céus:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Ascensão"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que subistes ao céu como Rei do universo e Senhor dos séculos:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que, na vossa Ascensão, levastes cativo o cativeiro:"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que, voltando à casa do Pai, nos abristes o céu:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Pentecostes"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que, pelo Espírito Santo, estais sempre presente no mundo:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que dais o Espírito Santo para o perdão dos pecados:"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que enviais o Espírito Santo para criar um mundo novo:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
          },
          {
            "rubric_pt": "Em seguida, omitido o Senhor, tende piedade (Kýrie eléison), diz-se o hino Glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "quando está prescrito para a Missa."
          },
          {
            "sp_pt": "",
            "text_pt": "Aspersão dominical da água benta"
          },
          {
            "sp_pt": "",
            "text_pt": "6.1. Ao domingo, especialmente no Tempo Pascal, pode celebrar-se a bênção e"
          },
          {
            "sp_pt": "",
            "text_pt": "a aspersão da água benta em memória do Batismo, em todas as Missas, inclusive"
          },
          {
            "sp_pt": "",
            "text_pt": "naquelas que se antecipam para o sábado de tarde, em todas as igrejas."
          },
          {
            "sp_pt": "",
            "text_pt": "Este rito substitui o habitual ato penitencial."
          },
          {
            "rubric_pt": "RITOS INICIAIS"
          },
          {
            "rubric_pt": "A"
          },
          {
            "sp_pt": "",
            "text_pt": "6.2. Depois da saudação inicial, o sacerdote, de pé, junto à sua sede, voltado para"
          },
          {
            "sp_pt": "",
            "text_pt": "o povo, tendo diante de si um recipiente com água para benzer, exorta o povo à"
          },
          {
            "sp_pt": "",
            "text_pt": "oração com estas ou outras palavras semelhantes:"
          },
          {
            "sp_pt": "",
            "text_pt": "Oremos, irmãos caríssimos, a Deus nosso Senhor,"
          },
          {
            "sp_pt": "",
            "text_pt": "suplicando-Lhe que Se digne abençoar esta água,"
          },
          {
            "sp_pt": "",
            "text_pt": "que vai ser aspergida sobre nós para memória do nosso"
          },
          {
            "sp_pt": "",
            "text_pt": "Batismo,"
          },
          {
            "sp_pt": "",
            "text_pt": "e nos renove interiormente,"
          },
          {
            "sp_pt": "",
            "text_pt": "a fim de permanecermos fiéis ao Espírito que recebemos."
          },
          {
            "rubric_pt": "Depois de breve oração em silêncio, o sacerdote diz, de mãos juntas:"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus todo-poderoso e eterno,"
          },
          {
            "sp_pt": "",
            "text_pt": "que, por meio da água, fonte de vida e elemento de purificação,"
          },
          {
            "sp_pt": "",
            "text_pt": "quisestes também que fossem lavadas as nossas almas"
          },
          {
            "sp_pt": "",
            "text_pt": "e recebessem o dom da vida eterna,"
          },
          {
            "sp_pt": "",
            "text_pt": "dignai-Vos abençoar + esta água,"
          },
          {
            "sp_pt": "",
            "text_pt": "para que seja sinal da vossa proteção, neste dia a Vós consagrado."
          },
          {
            "sp_pt": "",
            "text_pt": "Por meio desta água, Senhor, renovai em nós a fonte da graça"
          },
          {
            "sp_pt": "",
            "text_pt": "e livrai-nos de todo o mal da alma e do corpo,"
          },
          {
            "sp_pt": "",
            "text_pt": "para estarmos na vossa presença de coração puro"
          },
          {
            "sp_pt": "",
            "text_pt": "e recebermos dignamente os frutos da redenção."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Cristo nosso Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "R. Amen."
          },
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus todo-poderoso e eterno,"
          },
          {
            "sp_pt": "",
            "text_pt": "fonte e origem de toda a vida do corpo e da alma,"
          },
          {
            "sp_pt": "",
            "text_pt": "abençoai + esta água, que vamos aspergir sobre nós,"
          },
          {
            "sp_pt": "",
            "text_pt": "para implorar o perdão dos nossos pecados"
          },
          {
            "sp_pt": "",
            "text_pt": "e obter a graça da vossa proteção"
          },
          {
            "sp_pt": "",
            "text_pt": "contra todos os males e insídias do inimigo."
          },
          {
            "sp_pt": "",
            "text_pt": "Concedei-nos, Senhor, pela vossa misericórdia,"
          },
          {
            "sp_pt": "",
            "text_pt": "que brotem sempre, para nós, as fontes vivas da salvação,"
          },
          {
            "sp_pt": "",
            "text_pt": "para que, livres de todos os perigos do corpo e da alma,"
          },
          {
            "sp_pt": "",
            "text_pt": "cheguemos à vossa presença de coração puro."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Cristo nosso Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "R. Amen."
          },
          {
            "sp_pt": "",
            "text_pt": "Ou, no Tempo Pascal:"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus todo-poderoso e eterno,"
          },
          {
            "sp_pt": "",
            "text_pt": "escutai benignamente as orações do vosso povo."
          },
          {
            "sp_pt": "",
            "text_pt": "Ao celebrarmos a obra admirável da nossa criação"
          },
          {
            "sp_pt": "",
            "text_pt": "e a maravilha ainda maior da nossa redenção,"
          },
          {
            "sp_pt": "",
            "text_pt": "dignai-Vos abençoar + esta água."
          },
          {
            "sp_pt": "",
            "text_pt": "Vós a criastes para dar fecundidade à terra"
          },
          {
            "sp_pt": "",
            "text_pt": "e frescura e pureza aos nossos corpos."
          },
          {
            "sp_pt": "",
            "text_pt": "Vós a fizestes instrumento de misericórdia,"
          },
          {
            "sp_pt": "",
            "text_pt": "libertando da escravidão o vosso povo"
          },
          {
            "sp_pt": "",
            "text_pt": "e matando a sua sede no deserto."
          },
          {
            "sp_pt": "",
            "text_pt": "Por meio dos Profetas,"
          },
          {
            "sp_pt": "",
            "text_pt": "Vós a proclamastes sinal da nova aliança,"
          },
          {
            "sp_pt": "",
            "text_pt": "que quisestes estabelecer com os homens."
          },
          {
            "sp_pt": "",
            "text_pt": "Finalmente, nas águas do Jordão, santificadas por Cristo,"
          },
          {
            "sp_pt": "",
            "text_pt": "inaugurastes o sacramento da regeneração espiritual,"
          },
          {
            "sp_pt": "",
            "text_pt": "que renova a nossa natureza humana,"
          },
          {
            "sp_pt": "",
            "text_pt": "libertando-a da corrupção do pecado."
          },
          {
            "sp_pt": "",
            "text_pt": "Esta água, Senhor, nos faça reviver o Batismo que recebemos"
          },
          {
            "sp_pt": "",
            "text_pt": "e nos leve a participar na alegria dos nossos irmãos,"
          },
          {
            "sp_pt": "",
            "text_pt": "batizados na Páscoa de nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Ele que vive e reina pelos séculos dos séculos."
          },
          {
            "sp_pt": "",
            "text_pt": "R. Amen."
          },
          {
            "sp_pt": "",
            "text_pt": "6.3. Quando as circunstâncias locais ou os costumes populares aconselham que se"
          },
          {
            "sp_pt": "",
            "text_pt": "conserve o rito de misturar sal na água benta, o sacerdote abençoa o sal, dizendo:"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus todo-poderoso e eterno, abençoai + este sal,"
          },
          {
            "sp_pt": "",
            "text_pt": "Vós que ordenastes ao profeta Eliseu que o misturasse na água"
          },
          {
            "sp_pt": "",
            "text_pt": "para remediar a sua esterilidade."
          },
          {
            "sp_pt": "",
            "text_pt": "Fazei que, mediante a aspersão purificadora do sal e da água,"
          },
          {
            "sp_pt": "",
            "text_pt": "sejamos livres do poder do inimigo"
          },
          {
            "sp_pt": "",
            "text_pt": "e sempre protegidos pela presença do Espírito Santo."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Cristo nosso Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "R. Amen."
          },
          {
            "rubric_pt": "Então, o sacerdote mistura o sal na água."
          },
          {
            "rubric_pt": "RITOS INICIAIS"
          },
          {
            "sp_pt": "",
            "text_pt": "6.4. O sacerdote toma o hissope, asperge-se a si mesmo e, depois, os ministros,"
          },
          {
            "sp_pt": "",
            "text_pt": "o clero e os fiéis. Se parecer conveniente, pode passar através da igreja para a"
          },
          {
            "sp_pt": "",
            "text_pt": "aspersão dos fiéis."
          },
          {
            "sp_pt": "",
            "text_pt": "Entretanto, canta-se um dos seguintes cânticos ou outro apropriado."
          },
          {
            "sp_pt": "",
            "text_pt": "Fora do Tempo Pascal"
          },
          {
            "sp_pt": "",
            "text_pt": "ANTÍFONA 1 Sl 50, 9"
          },
          {
            "sp_pt": "",
            "text_pt": "Aspergi-me, Senhor, com o hissope e ficarei puro,"
          },
          {
            "sp_pt": "",
            "text_pt": "lavai-me e ficarei mais branco do que a neve."
          },
          {
            "sp_pt": "",
            "text_pt": "ANTÍFONA 2 Ez 36, 25-26"
          },
          {
            "sp_pt": "",
            "text_pt": "Derramarei sobre vós água pura e ficareis limpos de toda a iniquidade;"
          },
          {
            "sp_pt": "",
            "text_pt": "Eu vos darei um coração novo, diz o Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "HINO Cf. 1Pd 1, 3-5"
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito seja Deus, Pai de nosso Senhor Jesus Cristo,"
          },
          {
            "sp_pt": "",
            "text_pt": "que, na sua grande misericórdia,"
          },
          {
            "sp_pt": "",
            "text_pt": "pela ressurreição de Jesus Cristo de entre os mortos,"
          },
          {
            "sp_pt": "",
            "text_pt": "nos fez renascer para uma esperança viva,"
          },
          {
            "sp_pt": "",
            "text_pt": "para uma herança incorruptível,"
          },
          {
            "sp_pt": "",
            "text_pt": "que nos está reservada no céu,"
          },
          {
            "sp_pt": "",
            "text_pt": "para a salvação que se vai revelar na plenitude dos tempos."
          },
          {
            "sp_pt": "",
            "text_pt": "No Tempo Pascal"
          },
          {
            "sp_pt": "",
            "text_pt": "ANTÍFONA 1 Cf. Ez 47, 1-2.9"
          },
          {
            "sp_pt": "",
            "text_pt": "Vi a água sair do lado direito do templo. Aleluia."
          },
          {
            "sp_pt": "",
            "text_pt": "E todos aqueles a quem chegou esta água foram salvos. Aleluia. Aleluia."
          },
          {
            "sp_pt": "",
            "text_pt": "ANTÍFONA 2 Cf. Sf 3, 8; Ez 36, 25"
          },
          {
            "sp_pt": "",
            "text_pt": "No dia da minha ressurreição, diz o Senhor, Aleluia,"
          },
          {
            "sp_pt": "",
            "text_pt": "reunirei os povos e os reinos e derramarei sobre vós água pura. Aleluia."
          },
          {
            "sp_pt": "",
            "text_pt": "ANTÍFONA 3 Cf. Dn 3, 77.79"
          },
          {
            "sp_pt": "",
            "text_pt": "Fontes e tudo o que se move nas águas, bendizei o Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Aleluia."
          },
          {
            "sp_pt": "",
            "text_pt": "ANTÍFONA 4 1Pd 2, 9"
          },
          {
            "sp_pt": "",
            "text_pt": "Vós sois povo eleito, sacerdócio real, nação santa,"
          },
          {
            "sp_pt": "",
            "text_pt": "para anunciar os louvores de Deus,"
          },
          {
            "sp_pt": "",
            "text_pt": "que vos chamou das trevas para a sua luz admirável. Aleluia."
          },
          {
            "rubric_pt": "ANTÍFONA 5"
          },
          {
            "sp_pt": "",
            "text_pt": "Do vosso coração, Senhor Jesus Cristo, brotou uma fonte de água viva,"
          },
          {
            "sp_pt": "",
            "text_pt": "onde o mundo se lava dos seus pecados e a vida se renova. Aleluia."
          },
          {
            "sp_pt": "",
            "text_pt": "6.5. Então, o sacerdote volta para a sua sede. Terminado o cântico, volta-se para"
          },
          {
            "rubric_pt": "o povo e, de pé, com as mãos juntas, diz:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Deus todo-poderoso nos purifique do pecado"
          },
          {
            "sp_pt": "",
            "text_pt": "e, pela celebração da Eucaristia,"
          },
          {
            "sp_pt": "",
            "text_pt": "nos torne dignos de participar na mesa do seu reino,"
          },
          {
            "sp_pt": "",
            "text_pt": "pelos séculos dos séculos."
          },
          {
            "sp_pt": "",
            "text_pt": "R. Amen."
          },
          {
            "rubric_pt": "Em seguida, omitido o Senhor, tende piedade (Kýrie eléison), diz-se o hino Glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "quando está prescrito para a Missa."
          },
          {
            "rubric_pt": "B"
          },
          {
            "rubric_pt": "O sacerdote exorta o povo à oração, dizendo estas palavras ou outras semelhantes:"
          },
          {
            "sp_pt": "",
            "text_pt": "Invoquemos, irmãos caríssimos, a Deus Pai,"
          },
          {
            "sp_pt": "",
            "text_pt": "para que este rito de aspersão reavive em nós a graça do Batismo,"
          },
          {
            "sp_pt": "",
            "text_pt": "por meio do qual participamos na morte redentora de Cristo,"
          },
          {
            "sp_pt": "",
            "text_pt": "a fim de ressuscitar com Ele para a vida nova."
          },
          {
            "rubric_pt": "Depois de breve oração em silêncio, diz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus criador, que, na água e no Espírito,"
          },
          {
            "sp_pt": "",
            "text_pt": "destes forma e imagem ao homem e ao universo:"
          },
          {
            "sp_pt": "",
            "text_pt": "R. Purificai e abençoai a vossa Igreja."
          },
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "Glória a V ós, Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que, do vosso lado aberto na cruz,"
          },
          {
            "sp_pt": "",
            "text_pt": "fizestes brotar os sacramentos da salvação:"
          },
          {
            "sp_pt": "",
            "text_pt": "R. Purificai e abençoai a vossa Igreja."
          },
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "Glória a V ós, Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Espírito Santo, que, da fonte batismal da Igreja,"
          },
          {
            "sp_pt": "",
            "text_pt": "nos fizestes renascer como novas criaturas:"
          },
          {
            "sp_pt": "",
            "text_pt": "R. Purificai e abençoai a vossa Igreja."
          },
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "Glória a V ós, Senhor."
          },
          {
            "rubric_pt": "RITOS INICIAIS"
          },
          {
            "rubric_pt": "Depois, de mãos juntas, o sacerdote diz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus de infinita santidade,"
          },
          {
            "sp_pt": "",
            "text_pt": "que reunis a vossa Igreja, esposa e corpo do Senhor,"
          },
          {
            "sp_pt": "",
            "text_pt": "no dia memorial da ressurreição,"
          },
          {
            "sp_pt": "",
            "text_pt": "abençoai o vosso povo e reavivai em nós, por meio desta água,"
          },
          {
            "sp_pt": "",
            "text_pt": "a memória da Páscoa e a graça do Batismo."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Cristo nosso Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "R. Amen."
          },
          {
            "sp_pt": "",
            "text_pt": "Ou, especialmente, no Tempo Pascal:"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus, Pai santo, que, do Cordeiro imolado na cruz,"
          },
          {
            "sp_pt": "",
            "text_pt": "fizestes brotar as fontes da água viva:"
          },
          {
            "sp_pt": "",
            "text_pt": "R. Purificai e abençoai o vosso povo. Ou Glória a V ós, Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que renovais a juventude da Igreja"
          },
          {
            "sp_pt": "",
            "text_pt": "no Batismo da água e na palavra da vida:"
          },
          {
            "sp_pt": "",
            "text_pt": "R. Purificai e abençoai o vosso povo. Ou Glória a V ós, Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Espírito Santo, que, das águas do Batismo,"
          },
          {
            "sp_pt": "",
            "text_pt": "nos fazeis surgir como primícias da nova humanidade:"
          },
          {
            "sp_pt": "",
            "text_pt": "R. Purificai e abençoai o vosso povo. Ou Glória a V ós, Senhor."
          },
          {
            "rubric_pt": "Depois, de mãos juntas, o sacerdote diz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "que, nos sinais sagrados da nossa fé,"
          },
          {
            "sp_pt": "",
            "text_pt": "renovais os prodígios da criação e da redenção,"
          },
          {
            "sp_pt": "",
            "text_pt": "abençoai + esta água"
          },
          {
            "sp_pt": "",
            "text_pt": "e dai a todos os que renasceram no Batismo"
          },
          {
            "sp_pt": "",
            "text_pt": "a graça de serem anunciadores e testemunhas da Páscoa,"
          },
          {
            "sp_pt": "",
            "text_pt": "que se renova na vossa Igreja."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Cristo nosso Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "R. Amen."
          },
          {
            "rubric_pt": "O sacerdote toma o hissope, asperge-se a si mesmo e, depois, os ministros, o clero"
          },
          {
            "sp_pt": "",
            "text_pt": "e os fiéis. Se parecer conveniente, pode passar através da igreja para a aspersão"
          },
          {
            "sp_pt": "",
            "text_pt": "dos fiéis."
          },
          {
            "sp_pt": "",
            "text_pt": "Entretanto, canta-se um cântico apropriado, como acima se indica no n. 6.4."
          },
          {
            "rubric_pt": "Então, o sacerdote volta para a sua sede. Terminado o cântico, volta-se para o"
          },
          {
            "rubric_pt": "povo e, de pé, com as mãos juntas, diz:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Deus todo-poderoso nos purifique do pecado"
          },
          {
            "sp_pt": "",
            "text_pt": "e, pela celebração da Eucaristia,"
          },
          {
            "sp_pt": "",
            "text_pt": "nos torne dignos de participar na mesa do seu reino,"
          },
          {
            "sp_pt": "",
            "text_pt": "pelos séculos dos séculos."
          },
          {
            "sp_pt": "",
            "text_pt": "R. Amen."
          },
          {
            "rubric_pt": "Em seguida, omitido o Senhor, tende piedade (Kýrie eléison), diz-se o hino Glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "quando está prescrito para a Missa."
          },
          {
            "sp_pt": "",
            "text_pt": "7. Seguem-se as invocações Senhor, tende piedade de nós (Kýrie, eléison), a"
          },
          {
            "sp_pt": "",
            "text_pt": "não ser que tenha sido usado o rito do"
          },
          {
            "sp_pt": "",
            "text_pt": "Ato Penitencial – C ou o rito da Aspersão"
          },
          {
            "sp_pt": "",
            "text_pt": "Dominical da Água Benta."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Senhor, tende piedade de nós. R. Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Cristo, tende piedade de nós. R. Cristo, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Senhor, tende piedade de nós. R. Senhor, tende piedade de nós."
          },
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "V. Senhor, misericórdia. R. Senhor, misericórdia."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Cristo, misericórdia. R. Cristo, misericórdia."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Senhor, misericórdia. R. Senhor, misericórdia."
          },
          {
            "sp_pt": "",
            "text_pt": "Ou, com canto em latim:"
          },
          {
            "sp_pt": "",
            "text_pt": "V. Kýrie, eléison. R. Kýrie, eléison."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Christe, eléison. R. Christe, eléison."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Kýrie, eléison. R. Kýrie, eléison."
          },
          {
            "rubric_pt": "RITOS INICIAIS"
          }
        ]
      }
    }
  },
  {
    "id": "1.4 kyrie",
    "type": "part",
    "header": {
      "pt": "Senhor, tende piedade"
    },
    "lines": [
      {
        "sp_pt": "",
        "text_pt": "Seguidamente, o sacerdote, ou um ministro idóneo, diz ou canta as seguintes"
      },
      {
        "sp_pt": "",
        "text_pt": "invocações ou outras semelhantes:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que fostes enviado pelo Pai a salvar os corações atribulados:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison."
      },
      {
        "rubric_pt": "O povo responde:"
      },
      {
        "sp_pt": "Todos",
        "text_pt": "Senhor, misericórdia ou Senhor, tende piedade de nós ou Kýrie, eléison."
      },
      {
        "rubric_pt": "O sacerdote continua:"
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, que viestes chamar os pecadores:"
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison."
      },
      {
        "rubric_pt": "O povo responde:"
      },
      {
        "sp_pt": "Todos",
        "text_pt": "Cristo, misericórdia ou Cristo, tende piedade de nós ou Christe, eléison."
      },
      {
        "sp_pt": "",
        "text_pt": "De novo, o sacerdote diz:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que estais à direita do Pai a interceder por nós:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison."
      },
      {
        "rubric_pt": "O povo responde:"
      },
      {
        "sp_pt": "Todos",
        "text_pt": "Senhor, misericórdia ou Senhor, tende piedade de nós ou Kýrie, eléison."
      },
      {
        "rubric_pt": "Segue-se a absolvição do sacerdote:"
      },
      {
        "sp_pt": "",
        "text_pt": "Deus todo-poderoso tenha compaixão de nós,"
      },
      {
        "sp_pt": "",
        "text_pt": "perdoe os nossos pecados e nos conduza à vida eterna."
      },
      {
        "sp_pt": "Todos",
        "text_pt": "Amen."
      },
      {
        "rubric_pt": "Em seguida, omitido o Senhor, tende piedade (Kýrie), diz-se o hino Glória, quando"
      },
      {
        "sp_pt": "",
        "text_pt": "está prescrito para a Missa."
      },
      {
        "sp_pt": "",
        "text_pt": "Invocações alternativas"
      },
      {
        "rubric_pt": "1."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que sois o caminho que nos conduz ao Pai:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, que sois a verdade que ilumina os povos:"
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que sois a vida que renova o mundo:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "rubric_pt": "2."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que viestes procurar quem estava perdido:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, que viestes dar a vida em resgate de todos:"
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que congregais na unidade os filhos de Deus:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "rubric_pt": "3."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que sois o defensor dos pobres:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, que sois a fortaleza dos fracos:"
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que sois a esperança dos pecadores:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "rubric_pt": "RITOS INICIAIS"
      },
      {
        "sp_pt": "",
        "text_pt": "Tempo do Advento"
      },
      {
        "rubric_pt": "1."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que viestes ao mundo para nos salvar:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, que nos visitais continuamente com a graça do vosso Espírito:"
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que vireis um dia para julgar as nossas obras:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "rubric_pt": "2."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que vindes visitar vosso povo na paz:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, que vindes salvar o que estava perdido:"
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que vindes criar um mundo novo:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Tempo do Natal"
      },
      {
        "rubric_pt": "1."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, Filho de Deus, que, nascendo da Virgem Maria,"
      },
      {
        "sp_pt": "",
        "text_pt": "vos fizestes nosso irmão,"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, Filho do homem, que conheceis e compreendeis a nossa fraqueza,"
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, Filho primogénito do Pai, que fazeis de nós uma família,"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "rubric_pt": "2."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, rei da paz:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, luz nas trevas:"
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, imagem do homem novo:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Tempo da Quaresma"
      },
      {
        "rubric_pt": "1."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que, na cruz, perdoastes ao ladrão arrependido:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, que nos mandastes perdoar"
      },
      {
        "sp_pt": "",
        "text_pt": "antes de nos aproximarmos do vosso altar:"
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que confiastes à vossa Igreja o ministério da reconciliação:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "rubric_pt": "2."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que, na água e no Espírito, nos regenerastes à vossa imagem:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, que enviais o vosso Espírito para criar em nós um coração novo:"
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que nos fazeis participantes do vosso Corpo e do vosso Sangue:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "rubric_pt": "RITOS INICIAIS"
      },
      {
        "rubric_pt": "3."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que fazeis passar da morte para a vida"
      },
      {
        "sp_pt": "",
        "text_pt": "os que ouvem a vossa palavra:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, que quisestes ser levantado da terra para nos atrair a V ós:"
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que subistes à cruz por nós,"
      },
      {
        "sp_pt": "",
        "text_pt": "para sermos elevados à glória da ressurreição:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Tempo da Páscoa"
      },
      {
        "rubric_pt": "1."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, nossa paz:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, nossa Páscoa:"
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, nossa vida:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "rubric_pt": "2."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que sois o eterno sacerdote da nova Aliança:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, que nos edificais como pedras vivas no templo santo de Deus:"
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que nos tornais concidadãos dos santos no reino dos céus:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Ascensão"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que subistes ao céu como Rei do universo e Senhor dos séculos:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, que, na vossa Ascensão, levastes cativo o cativeiro:"
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que, voltando à casa do Pai, nos abristes o céu:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Pentecostes"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que, pelo Espírito Santo, estais sempre presente no mundo:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, que dais o Espírito Santo para o perdão dos pecados:"
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Cristo, tende piedade de nós ou Christe, eléison. R."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, que enviais o Espírito Santo para criar um mundo novo:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, misericórdia"
      },
      {
        "sp_pt": "",
        "text_pt": "ou Senhor, tende piedade de nós ou Kýrie, eléison. R."
      },
      {
        "rubric_pt": "Em seguida, omitido o Senhor, tende piedade (Kýrie eléison), diz-se o hino Glória,"
      },
      {
        "sp_pt": "",
        "text_pt": "quando está prescrito para a Missa."
      },
      {
        "sp_pt": "",
        "text_pt": "Aspersão dominical da água benta"
      },
      {
        "sp_pt": "",
        "text_pt": "6.1. Ao domingo, especialmente no Tempo Pascal, pode celebrar-se a bênção e"
      },
      {
        "sp_pt": "",
        "text_pt": "a aspersão da água benta em memória do Batismo, em todas as Missas, inclusive"
      },
      {
        "sp_pt": "",
        "text_pt": "naquelas que se antecipam para o sábado de tarde, em todas as igrejas."
      },
      {
        "sp_pt": "",
        "text_pt": "Este rito substitui o habitual ato penitencial."
      },
      {
        "rubric_pt": "RITOS INICIAIS"
      }
    ]
  },
  {
    "id": "1.5 gloria",
    "type": "part",
    "header": {
      "pt": "Glória"
    },
    "lines": [
      {
        "sp_pt": "",
        "text_pt": "8. Em seguida, segundo as rubricas, canta-se ou recita-se o hino:"
      },
      {
        "sp_pt": "",
        "text_pt": "Glória a Deus nas alturas"
      },
      {
        "sp_pt": "",
        "text_pt": "e paz na terra aos homens por Ele amados."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor Deus, Rei dos céus, Deus Pai todo-poderoso:"
      },
      {
        "sp_pt": "",
        "text_pt": "nós Vos louvamos,"
      },
      {
        "sp_pt": "",
        "text_pt": "nós Vos bendizemos,"
      },
      {
        "sp_pt": "",
        "text_pt": "nós Vos adoramos,"
      },
      {
        "sp_pt": "",
        "text_pt": "nós Vos glorificamos,"
      },
      {
        "sp_pt": "",
        "text_pt": "nós Vos damos graças, por vossa imensa glória."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor Jesus Cristo, Filho unigénito,"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor Deus, Cordeiro de Deus, Filho de Deus Pai:"
      },
      {
        "sp_pt": "",
        "text_pt": "Vós que tirais o pecado do mundo, tende piedade de nós;"
      },
      {
        "sp_pt": "",
        "text_pt": "Vós que tirais o pecado do mundo, acolhei a nossa súplica;"
      },
      {
        "sp_pt": "",
        "text_pt": "Vós que estais à direita do Pai, tende piedade de nós."
      },
      {
        "sp_pt": "",
        "text_pt": "Só Vós sois o Santo; só Vós, o Senhor;"
      },
      {
        "sp_pt": "",
        "text_pt": "só Vós, o Altíssimo, Jesus Cristo,"
      },
      {
        "sp_pt": "",
        "text_pt": "com o Espírito Santo, na glória de Deus Pai. Amen."
      },
      {
        "sp_pt": "",
        "text_pt": "Ou, com canto em latim:"
      },
      {
        "sp_pt": "",
        "text_pt": "Glória in excélsis Deo"
      },
      {
        "sp_pt": "",
        "text_pt": "et in terra pax homínibus bonae voluntátis."
      },
      {
        "sp_pt": "",
        "text_pt": "Laudámus te, benedícimus te, adorámus te, glorificámus te,"
      },
      {
        "sp_pt": "",
        "text_pt": "grátias ágimus tibi propter magnam glóriam tuam,"
      },
      {
        "sp_pt": "",
        "text_pt": "Dómine Deus, Rex cæléstis, Deus Pater omnípotens."
      },
      {
        "sp_pt": "",
        "text_pt": "Dómine Fili unigénite, Iesu Christe,"
      },
      {
        "sp_pt": "",
        "text_pt": "Dómine Deus, Agnus Dei, Fílius Patris,"
      },
      {
        "sp_pt": "",
        "text_pt": "qui tollis peccáta mundi, miserére nobis;"
      },
      {
        "sp_pt": "",
        "text_pt": "qui tollis peccáta mundi, súscipe deprecatiónem nostram."
      },
      {
        "sp_pt": "",
        "text_pt": "Qui sedes ad déxteram Patris, miserére nobis."
      },
      {
        "sp_pt": "",
        "text_pt": "Quóniam tu solus Sanctus, tu solus Dóminus, tu solus Altíssimus,"
      },
      {
        "sp_pt": "",
        "text_pt": "Iesu Christe, cum Sancto Spíritu: in glória Dei Patris. Amen."
      },
      {
        "sp_pt": "",
        "text_pt": "9. Terminado o hino, o sacerdote, de mãos juntas, diz:"
      }
    ],
    "if": "sunday"
  },
  {
    "id": "1.6 collect",
    "type": "part",
    "header": {
      "pt": "Oração coleta"
    },
    "lines": [
      {
        "sp_pt": "C.",
        "text_pt": "Oremos."
      },
      {
        "sp_pt": "",
        "text_pt": "(Oração coleta do dia)"
      },
      {
        "sp_pt": "Todos",
        "text_pt": "Amen."
      }
    ]
  },
  {
    "id": "2. THE LITURGY OF THE WORD",
    "type": "section",
    "pt": "Liturgia da palavra"
  },
  {
    "id": "2.1 reading1",
    "type": "part",
    "header": {
      "pt": "Primeira leitura"
    },
    "lines": [
      {
        "sp_pt": "",
        "text_pt": "(Resumo)"
      },
      {
        "sp_pt": "",
        "text_pt": "(Primeira leitura do dia)"
      }
    ]
  },
  {
    "id": "2.2 psalm",
    "type": "part",
    "header": {
      "pt": "Salmo responsorial"
    },
    "lines": [
      {
        "sp_pt": "",
        "text_pt": "(Salmo responsorial do dia)"
      }
    ]
  },
  {
    "id": "2.3 reading2",
    "type": "part",
    "header": {
      "pt": "Segunda leitura"
    },
    "lines": [
      {
        "sp_pt": "",
        "text_pt": "(Resumo)"
      },
      {
        "sp_pt": "",
        "text_pt": "(Segunda leitura do dia)"
      }
    ],
    "if": "sunday"
  },
  {
    "id": "2.4 Sequence",
    "type": "part",
    "header": {
      "pt": "Sequência"
    },
    "lines": [
      {
        "sp_pt": "",
        "text_pt": "(Sequência do dia)"
      }
    ],
    "if": "easter_or_pentecost"
  },
  {
    "id": "2.5 gospel_accl",
    "type": "part",
    "header": {
      "pt": "Aclamação do Evangelho"
    },
    "lines": [
      {
        "sp_pt": "",
        "text_pt": "(Aclamação do Evangelho do dia)"
      }
    ]
  },
  {
    "id": "2.6 gospel",
    "type": "part",
    "header": {
      "pt": "Evangelho"
    },
    "lines": [
      {
        "sp_pt": "",
        "text_pt": "(Evangelho do dia)"
      }
    ]
  },
  {
    "id": "2.7 homily",
    "type": "part",
    "header": {
      "pt": "Homilia"
    },
    "lines": [
      {
        "rubric_pt": "Segue-se a homilia."
      }
    ]
  },
  {
    "id": "2.8 creed",
    "type": "selectable",
    "header": {
      "pt": "Profissão de fé"
    },
    "if": "sunday",
    "variants": {
      "A": {
        "label": {
          "pt": "Símbolo niceno-constantinopolitano"
        },
        "lines": [
          {
            "sp_pt": "",
            "text_pt": "Creio em um só Deus,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai todo-poderoso, Criador do céu e da terra,"
          },
          {
            "sp_pt": "",
            "text_pt": "de todas as coisas visíveis e invisíveis."
          },
          {
            "sp_pt": "",
            "text_pt": "Creio em um só Senhor, Jesus Cristo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Filho unigénito de Deus,"
          },
          {
            "sp_pt": "",
            "text_pt": "nascido do Pai antes de todos os séculos:"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus de Deus, luz da luz,"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus verdadeiro de Deus verdadeiro;"
          },
          {
            "sp_pt": "",
            "text_pt": "gerado, não criado, consubstancial ao Pai."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Ele todas as coisas foram feitas."
          },
          {
            "sp_pt": "",
            "text_pt": "E por nós, homens, e para nossa salvação desceu dos céus."
          },
          {
            "rubric_pt": "Todos se inclinam às palavras: E encarnou ... e Se fez homem."
          },
          {
            "sp_pt": "",
            "text_pt": "E encarnou pelo Espírito Santo, no seio da Virgem Maria,"
          },
          {
            "sp_pt": "",
            "text_pt": "e Se fez homem."
          },
          {
            "sp_pt": "",
            "text_pt": "Também por nós foi crucificado sob Pôncio Pilatos;"
          },
          {
            "sp_pt": "",
            "text_pt": "padeceu e foi sepultado."
          },
          {
            "sp_pt": "",
            "text_pt": "Ressuscitou ao terceiro dia, conforme as Escrituras;"
          },
          {
            "sp_pt": "",
            "text_pt": "e subiu aos céus, onde está sentado à direita do Pai."
          },
          {
            "sp_pt": "",
            "text_pt": "De novo há de vir em sua glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "para julgar os vivos e os mortos;"
          },
          {
            "sp_pt": "",
            "text_pt": "e o seu reino não terá fim."
          },
          {
            "sp_pt": "",
            "text_pt": "Creio no Espírito Santo, Senhor que dá a vida,"
          },
          {
            "sp_pt": "",
            "text_pt": "e procede do Pai e do Filho;"
          },
          {
            "sp_pt": "",
            "text_pt": "e com o Pai e o Filho é adorado e glorificado:"
          },
          {
            "sp_pt": "",
            "text_pt": "Ele que falou pelos profetas."
          },
          {
            "sp_pt": "",
            "text_pt": "Creio na Igreja una, santa, católica e apostólica."
          },
          {
            "sp_pt": "",
            "text_pt": "Professo um só batismo para remissão dos pecados."
          },
          {
            "sp_pt": "",
            "text_pt": "E espero a ressurreição dos mortos,"
          },
          {
            "sp_pt": "",
            "text_pt": "e a vida do mundo que há de vir. Amen."
          },
          {
            "sp_pt": "",
            "text_pt": "Ou, com canto em latim:"
          },
          {
            "sp_pt": "",
            "text_pt": "Credo in unum Deum,"
          },
          {
            "sp_pt": "",
            "text_pt": "Patrem omnipoténtem, factórem cæli et terræ,"
          },
          {
            "rubric_pt": "LITURGIA DA PALAVRA"
          },
          {
            "sp_pt": "",
            "text_pt": "visibílium ómnium et invisibílium."
          },
          {
            "sp_pt": "",
            "text_pt": "Et in unum Dóminum Iesum Christum,"
          },
          {
            "sp_pt": "",
            "text_pt": "Fílium Dei unigénitum,"
          },
          {
            "sp_pt": "",
            "text_pt": "et ex Patre natum ante ómnia saécula."
          },
          {
            "sp_pt": "",
            "text_pt": "Deum de Deo, lumen de lúmine,"
          },
          {
            "sp_pt": "",
            "text_pt": "Deum verum de Deo vero,"
          },
          {
            "sp_pt": "",
            "text_pt": "génitum, non factum, consubstantiálem Patri:"
          },
          {
            "sp_pt": "",
            "text_pt": "per quem ómnia facta sunt."
          },
          {
            "sp_pt": "",
            "text_pt": "Qui propter nos hómines et propter nostram salútem"
          },
          {
            "sp_pt": "",
            "text_pt": "descéndit de cælis."
          },
          {
            "sp_pt": "",
            "text_pt": "Ad verba quæ sequuntur, usque ad factus est, omnes se inclinant:"
          },
          {
            "sp_pt": "",
            "text_pt": "Et incarnátus est de Spíritu Sancto"
          },
          {
            "sp_pt": "",
            "text_pt": "ex María Vírgine, et homo factus est."
          },
          {
            "sp_pt": "",
            "text_pt": "Crucifíxus étiam pro nobis sub Póntio Piláto;"
          },
          {
            "sp_pt": "",
            "text_pt": "passus et sepúltus est,"
          },
          {
            "sp_pt": "",
            "text_pt": "et resurréxit tértia die, secúndum Scriptúras,"
          },
          {
            "sp_pt": "",
            "text_pt": "et ascendit in caelum, sedet ad déxteram Patris."
          },
          {
            "sp_pt": "",
            "text_pt": "Et íterum ventúrus est cum glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "iudicáre vivos et mórtuos, cuius regni non erit finis."
          },
          {
            "sp_pt": "",
            "text_pt": "Et in Spíritum Sanctum, Dóminum et vivificántem:"
          },
          {
            "sp_pt": "",
            "text_pt": "qui ex Patre Filióque procédit."
          },
          {
            "sp_pt": "",
            "text_pt": "Qui cum Patre et Fílio simul adorátur et conglorificátur:"
          },
          {
            "sp_pt": "",
            "text_pt": "qui locútus est per prophétas."
          },
          {
            "sp_pt": "",
            "text_pt": "Et unam, sanctam, cathólicam et apostólicam Ecclésiam."
          },
          {
            "sp_pt": "",
            "text_pt": "Confíteor unum baptísma in remissiónem peccatórum."
          },
          {
            "sp_pt": "",
            "text_pt": "Et exspécto resurrectiónem mortuórum,"
          },
          {
            "sp_pt": "",
            "text_pt": "et vitam ventúri sæculi. Amen."
          },
          {
            "rubric_pt": "Ou:"
          }
        ]
      },
      "B": {
        "label": {
          "pt": "Símbolo dos Apóstolos"
        },
        "lines": [
          {
            "sp_pt": "",
            "text_pt": "19. Em vez do símbolo niceno-constantinopolitano, sobretudo no Tempo da"
          },
          {
            "sp_pt": "",
            "text_pt": "Quaresma e no Tempo Pascal, pode dizer-se o símbolo batismal da Igreja Romana,"
          },
          {
            "sp_pt": "",
            "text_pt": "chamado «Símbolo dos Apóstolos»."
          },
          {
            "sp_pt": "",
            "text_pt": "Creio em Deus,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai todo-poderoso, Criador do céu e da terra;"
          },
          {
            "sp_pt": "",
            "text_pt": "e em Jesus Cristo, seu único Filho, nosso Senhor,"
          },
          {
            "rubric_pt": "Todos se inclinam às palavras: que foi concebido ... nasceu da Virgem Maria."
          },
          {
            "sp_pt": "",
            "text_pt": "que foi concebido pelo poder do Espírito Santo;"
          },
          {
            "sp_pt": "",
            "text_pt": "nasceu da Virgem Maria;"
          },
          {
            "sp_pt": "",
            "text_pt": "padeceu sob Pôncio Pilatos,"
          },
          {
            "sp_pt": "",
            "text_pt": "foi crucificado, morto e sepultado;"
          },
          {
            "sp_pt": "",
            "text_pt": "desceu à mansão dos mortos;"
          },
          {
            "sp_pt": "",
            "text_pt": "ressuscitou ao terceiro dia;"
          },
          {
            "sp_pt": "",
            "text_pt": "subiu aos céus;"
          },
          {
            "sp_pt": "",
            "text_pt": "está sentado à direita de Deus Pai todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "de onde há de vir a julgar os vivos e os mortos."
          },
          {
            "sp_pt": "",
            "text_pt": "Creio no Espírito Santo;"
          },
          {
            "sp_pt": "",
            "text_pt": "na santa Igreja católica;"
          },
          {
            "sp_pt": "",
            "text_pt": "na comunhão dos santos;"
          },
          {
            "sp_pt": "",
            "text_pt": "na remissão dos pecados;"
          },
          {
            "sp_pt": "",
            "text_pt": "na ressurreição da carne;"
          },
          {
            "sp_pt": "",
            "text_pt": "na vida eterna. Amen."
          }
        ]
      }
    }
  },
  {
    "id": "2.9 universal",
    "type": "part",
    "header": {
      "pt": "Oração universal"
    },
    "lines": [
      {
        "rubric_pt": "Segue-se a oração universal ou oração dos fiéis."
      }
    ],
    "if": "sunday"
  },
  {
    "id": "3. THE LITURGY OF THE EUCHARIST",
    "type": "section",
    "pt": "Liturgia eucarística"
  },
  {
    "id": "3.1 offertory",
    "type": "part",
    "header": {
      "pt": "Preparação dos dons"
    },
    "lines": [
      {
        "sp_pt": "",
        "text_pt": "Liturgia eucarística"
      },
      {
        "sp_pt": "",
        "text_pt": "21. Terminada a oração universal, inicia-se o cântico do ofertório. Entretanto, os"
      },
      {
        "sp_pt": "",
        "text_pt": "ministros colocam no altar o corporal, o sanguinho, o cálice, a pala e o missal."
      },
      {
        "sp_pt": "",
        "text_pt": "22. Convém que os fiéis manifestem a sua participação, apresentando o pão e o"
      },
      {
        "sp_pt": "",
        "text_pt": "vinho para a celebração da Eucaristia, e mesmo outros dons para as necessidades"
      },
      {
        "sp_pt": "",
        "text_pt": "da Igreja e dos pobres, conforme os costumes locais."
      },
      {
        "sp_pt": "",
        "text_pt": "23. O sacerdote, junto do altar, toma a patena com o pão e, elevando-a com ambas"
      },
      {
        "sp_pt": "",
        "text_pt": "as mãos um pouco acima do altar, diz em voz baixa:"
      },
      {
        "sp_pt": "",
        "text_pt": "Bendito sejais, Senhor, Deus do universo,"
      },
      {
        "sp_pt": "",
        "text_pt": "pelo pão que recebemos da vossa bondade,"
      },
      {
        "sp_pt": "",
        "text_pt": "fruto da terra e do trabalho do homem,"
      },
      {
        "sp_pt": "",
        "text_pt": "que hoje Vos apresentamos"
      },
      {
        "sp_pt": "",
        "text_pt": "e que para nós se vai tornar pão da vida."
      },
      {
        "rubric_pt": "Em seguida, depõe a patena com o pão sobre o corporal."
      },
      {
        "rubric_pt": "Se não houver cântico do ofertório, o sacerdote pode proferir estas palavras em"
      },
      {
        "sp_pt": "",
        "text_pt": "voz alta."
      },
      {
        "sp_pt": "",
        "text_pt": "No fim, o povo pode aclamar: Bendito seja Deus para sempre."
      },
      {
        "sp_pt": "",
        "text_pt": "24. O diácono ou o sacerdote deita vinho e um pouco de água no cálice, dizendo"
      },
      {
        "sp_pt": "",
        "text_pt": "em silêncio:"
      },
      {
        "sp_pt": "",
        "text_pt": "Pelo mistério desta água e deste vinho,"
      },
      {
        "sp_pt": "",
        "text_pt": "sejamos participantes da divindade"
      },
      {
        "sp_pt": "",
        "text_pt": "d’Aquele que assumiu a nossa humanidade."
      },
      {
        "sp_pt": "",
        "text_pt": "25. Em seguida, o sacerdote toma o cálice e, elevando-o com ambas as mãos um"
      },
      {
        "sp_pt": "",
        "text_pt": "pouco acima do altar, diz em voz baixa:"
      },
      {
        "sp_pt": "",
        "text_pt": "Bendito sejais, Senhor, Deus do universo,"
      },
      {
        "sp_pt": "",
        "text_pt": "pelo vinho que recebemos da vossa bondade,"
      },
      {
        "sp_pt": "",
        "text_pt": "fruto da videira e do trabalho do homem,"
      },
      {
        "sp_pt": "",
        "text_pt": "que hoje Vos apresentamos"
      },
      {
        "sp_pt": "",
        "text_pt": "e que para nós se vai tornar vinho da salvação."
      },
      {
        "rubric_pt": "Em seguida, depõe o cálice sobre o corporal."
      },
      {
        "rubric_pt": "Se não houver cântico do ofertório, o sacerdote pode proferir estas palavras em"
      },
      {
        "sp_pt": "",
        "text_pt": "voz alta."
      },
      {
        "sp_pt": "",
        "text_pt": "No fim, o povo pode aclamar: Bendito seja Deus para sempre."
      },
      {
        "sp_pt": "",
        "text_pt": "26. A seguir, o sacerdote inclina-se e diz em silêncio:"
      },
      {
        "sp_pt": "",
        "text_pt": "De coração humilhado e contrito sejamos recebidos por V ós, Senhor."
      },
      {
        "sp_pt": "",
        "text_pt": "Assim o nosso sacrifício seja agradável a vossos olhos, Senhor nosso Deus."
      },
      {
        "sp_pt": "",
        "text_pt": "27. Depois, usando-se o incenso, incensa as oblatas, a cruz e o altar. A seguir, o"
      },
      {
        "sp_pt": "",
        "text_pt": "diácono ou outro ministro incensa o sacerdote e o povo."
      },
      {
        "sp_pt": "",
        "text_pt": "28. Em seguida, o sacerdote, estando ao lado do altar, lava as mãos, dizendo em"
      },
      {
        "sp_pt": "",
        "text_pt": "silêncio:"
      },
      {
        "sp_pt": "",
        "text_pt": "Lavai-me, Senhor, da minha iniquidade e purificai-me do meu pecado."
      },
      {
        "sp_pt": "",
        "text_pt": "29. Depois, estando ao meio do altar e, voltado para o povo, abrindo e juntando"
      },
      {
        "sp_pt": "",
        "text_pt": "as mãos, diz:"
      },
      {
        "sp_pt": "",
        "text_pt": "Orai, irmãos, para que o meu e vosso sacrifício"
      },
      {
        "sp_pt": "",
        "text_pt": "seja aceite por Deus Pai todo-poderoso."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Irmãos, ao oferecermos o sacrifício de toda a Igreja,"
      },
      {
        "sp_pt": "",
        "text_pt": "oremos a Deus Pai todo-poderoso."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Orai, irmãos,"
      },
      {
        "sp_pt": "",
        "text_pt": "para que as nossas alegrias e tristezas de cada dia,"
      },
      {
        "sp_pt": "",
        "text_pt": "unidas ao sacrifício de Cristo,"
      },
      {
        "sp_pt": "",
        "text_pt": "sejam aceites por Deus Pai todo-poderoso."
      },
      {
        "rubric_pt": "O povo levanta-se e responde:"
      },
      {
        "sp_pt": "Todos",
        "text_pt": "Receba o Senhor por tuas mãos este sacrifício,"
      },
      {
        "sp_pt": "",
        "text_pt": "para glória do seu nome,"
      },
      {
        "sp_pt": "",
        "text_pt": "para nosso bem e de toda a santa Igreja."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Oremos."
      },
      {
        "sp_pt": "",
        "text_pt": "Todos, juntamente com o sacerdote, oram em silêncio durante alguns momentos."
      },
      {
        "rubric_pt": "LITURGIA EUCARÍSTICA"
      },
      {
        "sp_pt": "",
        "text_pt": "30. Em seguida, de braços abertos, o sacerdote diz a oração sobre as oblatas."
      },
      {
        "rubric_pt": "Se a oração se dirige ao Pai, a conclusão é da seguinte forma:"
      },
      {
        "sp_pt": "",
        "text_pt": "Por Cristo nosso Senhor."
      },
      {
        "rubric_pt": "Se a oração se dirige ao Pai, com menção do Filho na parte final:"
      },
      {
        "sp_pt": "",
        "text_pt": "Ele que vive e reina pelos séculos dos séculos."
      },
      {
        "rubric_pt": "Se a oração se dirige ao Filho:"
      },
      {
        "sp_pt": "",
        "text_pt": "Vós que viveis e reinais pelos séculos dos séculos."
      },
      {
        "sp_pt": "",
        "text_pt": "No fim o povo aclama: Amen."
      }
    ]
  },
  {
    "id": "3.2 prayer_offerings",
    "type": "part",
    "header": {
      "pt": "Oração sobre as oblatas"
    },
    "lines": [
      {
        "sp_pt": "",
        "text_pt": "(Oração sobre as oblatas do dia)"
      },
      {
        "sp_pt": "Todos",
        "text_pt": "Amen."
      }
    ]
  },
  {
    "id": "3.3 eucharist",
    "type": "selectable",
    "isEucharist": true,
    "header": {
      "pt": "Oração eucarística"
    },
    "variants": {
      "1": {
        "label": {
          "pt": "Oração eucarística I (Cânone Romano)"
        }
      },
      "2": {
        "label": {
          "pt": "Oração eucarística II"
        }
      },
      "3": {
        "label": {
          "pt": "Oração eucarística III"
        }
      },
      "4": {
        "label": {
          "pt": "Oração eucarística IV"
        }
      }
    },
    "common_dialogue": [
      {
        "sp_pt": "V.",
        "text_pt": "O Senhor esteja convosco."
      },
      {
        "sp_pt": "R.",
        "text_pt": "Ele está no meio de nós."
      },
      {
        "sp_pt": "V.",
        "text_pt": "Corações ao alto."
      },
      {
        "sp_pt": "R.",
        "text_pt": "O nosso coração está em Deus."
      },
      {
        "sp_pt": "V.",
        "text_pt": "Dêmos graças ao Senhor nosso Deus."
      },
      {
        "sp_pt": "R.",
        "text_pt": "É nosso dever, é nossa salvação."
      }
    ],
    "songs": {
      "cep_complete_prefaces": {
        "title": {
          "pt": "Prefácios completos do Missal Romano de Portugal"
        },
        "content": [
          {
            "rubric_pt": "PREFÁCIO I DO ADVENTO"
          },
          {
            "sp_pt": "",
            "text_pt": "As duas vindas de Cristo"
          },
          {
            "sp_pt": "",
            "text_pt": "33. Este prefácio diz-se desde o Domingo I do Advento até ao dia 16 de dezembro,"
          },
          {
            "sp_pt": "",
            "text_pt": "nas Missas do Tempo e também nas outras Missas que não têm prefácio próprio."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Ele veio a primeira vez,"
          },
          {
            "sp_pt": "",
            "text_pt": "na humildade da natureza humana,"
          },
          {
            "sp_pt": "",
            "text_pt": "realizar o eterno desígnio do vosso amor"
          },
          {
            "sp_pt": "",
            "text_pt": "e abrir-nos o caminho da salvação;"
          },
          {
            "sp_pt": "",
            "text_pt": "de novo há de vir, no esplendor da sua glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "para nos dar em plenitude os bens prometidos,"
          },
          {
            "sp_pt": "",
            "text_pt": "que, entretanto, vigilantes na fé, ousamos esperar."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e os arcanjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "os tronos e as dominações"
          },
          {
            "sp_pt": "",
            "text_pt": "e todos os coros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO I-A DO ADVENTO"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, Senhor e juiz da história"
          },
          {
            "sp_pt": "",
            "text_pt": "33 a. Este prefácio diz-se desde o Domingo I do Advento até ao dia 16 de dezembro, nas Missas do Tempo e também nas outras Missas que não têm prefácio"
          },
          {
            "sp_pt": "",
            "text_pt": "próprio."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "princípio e fim de todas as coisas,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever dar-Vos graças"
          },
          {
            "sp_pt": "",
            "text_pt": "e cantar-Vos um hino de bênção e de louvor."
          },
          {
            "sp_pt": "",
            "text_pt": "Vós nos escondestes o dia e a hora"
          },
          {
            "sp_pt": "",
            "text_pt": "em que Jesus Cristo, vosso Filho, Senhor e juiz da história,"
          },
          {
            "sp_pt": "",
            "text_pt": "aparecerá sobre as nuvens do céu,"
          },
          {
            "sp_pt": "",
            "text_pt": "revestido de poder e majestade."
          },
          {
            "sp_pt": "",
            "text_pt": "Nesse dia tremendo e glorioso,"
          },
          {
            "sp_pt": "",
            "text_pt": "passará o mundo presente"
          },
          {
            "sp_pt": "",
            "text_pt": "e aparecerão os novos céus e a nova terra."
          },
          {
            "sp_pt": "",
            "text_pt": "Agora Ele vem ao nosso encontro,"
          },
          {
            "sp_pt": "",
            "text_pt": "em cada homem e em cada tempo,"
          },
          {
            "sp_pt": "",
            "text_pt": "para que O recebamos na fé e na caridade"
          },
          {
            "sp_pt": "",
            "text_pt": "e dêmos testemunho da gloriosa esperança do seu reino."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, na esperança da sua vinda,"
          },
          {
            "sp_pt": "",
            "text_pt": "com os anjos e os santos e todos os coros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo."
          },
          {
            "rubric_pt": "PREFÁCIO II DO ADVENTO"
          },
          {
            "sp_pt": "",
            "text_pt": "A dupla expetativa de Cristo"
          },
          {
            "sp_pt": "",
            "text_pt": "34. Este prefácio diz-se desde 17 a 24 de dezembro nas Missas do Tempo e"
          },
          {
            "sp_pt": "",
            "text_pt": "também nas outras Missas que não têm prefácio próprio."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Foi Ele que os Profetas anunciaram,"
          },
          {
            "sp_pt": "",
            "text_pt": "a Virgem Mãe esperou com inefável amor,"
          },
          {
            "sp_pt": "",
            "text_pt": "João Batista proclamou estar para vir"
          },
          {
            "sp_pt": "",
            "text_pt": "e mostrou já presente no meio dos homens."
          },
          {
            "sp_pt": "",
            "text_pt": "É Ele que nos dá a graça de nos prepararmos com alegria"
          },
          {
            "sp_pt": "",
            "text_pt": "para o mistério do seu nascimento,"
          },
          {
            "sp_pt": "",
            "text_pt": "a fim de nos encontrar vigilantes na oração"
          },
          {
            "sp_pt": "",
            "text_pt": "e celebrando os seus louvores."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e os arcanjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "os tronos e as dominações"
          },
          {
            "sp_pt": "",
            "text_pt": "e todos os coros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO II-A DO ADVENTO"
          },
          {
            "sp_pt": "",
            "text_pt": "Maria, nova Eva"
          },
          {
            "sp_pt": "",
            "text_pt": "34 a. Este prefácio diz-se desde 17 a 24 de dezembro, nas Missas do Tempo e"
          },
          {
            "sp_pt": "",
            "text_pt": "também nas outras Missas que não têm prefácio próprio."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação.."
          },
          {
            "sp_pt": "",
            "text_pt": "Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever dar-Vos graças,"
          },
          {
            "sp_pt": "",
            "text_pt": "sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Nós Vos louvamos, nós Vos bendizemos,"
          },
          {
            "sp_pt": "",
            "text_pt": "nós Vos glorificamos pelo admirável mistério da Virgem Mãe:"
          },
          {
            "sp_pt": "",
            "text_pt": "Do antigo adversário veio a ruína,"
          },
          {
            "sp_pt": "",
            "text_pt": "do seio virginal da Filha de Sião"
          },
          {
            "sp_pt": "",
            "text_pt": "germinou Aquele que nos alimenta com o pão dos anjos"
          },
          {
            "sp_pt": "",
            "text_pt": "e, para todo o género humano, brotou a salvação e a paz."
          },
          {
            "sp_pt": "",
            "text_pt": "A graça, que em Eva nos foi tirada,"
          },
          {
            "sp_pt": "",
            "text_pt": "foi-nos restituída em Maria."
          },
          {
            "sp_pt": "",
            "text_pt": "Nela, Mãe de todos os homens,"
          },
          {
            "sp_pt": "",
            "text_pt": "a maternidade, resgatada do pecado e da morte,"
          },
          {
            "sp_pt": "",
            "text_pt": "recebe o dom da vida nova:"
          },
          {
            "sp_pt": "",
            "text_pt": "onde abundou a culpa, superabundou a misericórdia"
          },
          {
            "sp_pt": "",
            "text_pt": "por Cristo, nosso Salvador."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, na esperança da sua vinda,"
          },
          {
            "sp_pt": "",
            "text_pt": "com os anjos e os santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo."
          },
          {
            "rubric_pt": "PREFÁCIO I DO NATAL DO SENHOR"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo luz"
          },
          {
            "sp_pt": "",
            "text_pt": "35. Este prefácio diz-se nas Missas do Natal e sua oitava, nas Missas durante a"
          },
          {
            "sp_pt": "",
            "text_pt": "oitava, ainda que tenham prefácio próprio, exceto nas Missas com prefácio próprio dos divinos mistérios ou das Pessoas divinas, e nos dias feriais do Tempo do"
          },
          {
            "sp_pt": "",
            "text_pt": "Natal."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Pelo mistério do Verbo Encarnado,"
          },
          {
            "sp_pt": "",
            "text_pt": "nova luz da vossa glória brilhou sobre nós,"
          },
          {
            "sp_pt": "",
            "text_pt": "para que, contemplando a Deus visível aos nossos olhos,"
          },
          {
            "sp_pt": "",
            "text_pt": "sejamos arrebatados no amor do que é invisível."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e os arcanjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "os tronos e as dominações"
          },
          {
            "sp_pt": "",
            "text_pt": "e todos os coros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "No Cânone romano diz-se o Em comunhão com toda a Igreja próprio, p. 643."
          },
          {
            "sp_pt": "",
            "text_pt": "Nas Orações eucarísticas II e III faz-se também a comemoração própria do Natal."
          },
          {
            "sp_pt": "",
            "text_pt": "Nas Missas da vigília e da Noite do Natal do Senhor, diz-se: ao celebrarmos a"
          },
          {
            "sp_pt": "",
            "text_pt": "noite santíssima; nas outras Missas, até à oitava do Natal, inclusive, diz-se: ao"
          },
          {
            "sp_pt": "",
            "text_pt": "celebrarmos o dia santíssimo."
          },
          {
            "rubric_pt": "PREFÁCIO II DO NATAL DO SENHOR"
          },
          {
            "sp_pt": "",
            "text_pt": "A restauração do universo na Encarnação"
          },
          {
            "sp_pt": "",
            "text_pt": "36. Este prefácio diz-se nas Missas do Natal e sua oitava, nas Missas durante a"
          },
          {
            "sp_pt": "",
            "text_pt": "oitava, ainda que tenham prefácio próprio, exceto nas Missas com prefácio próprio dos divinos mistérios ou das Pessoas divinas, e nos dias feriais do Tempo do"
          },
          {
            "sp_pt": "",
            "text_pt": "Natal."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "No mistério do seu nascimento,"
          },
          {
            "sp_pt": "",
            "text_pt": "Aquele que, por sua natureza, era invisível,"
          },
          {
            "sp_pt": "",
            "text_pt": "tornou-Se visível aos nossos olhos."
          },
          {
            "sp_pt": "",
            "text_pt": "Gerado desde toda a eternidade,"
          },
          {
            "sp_pt": "",
            "text_pt": "começou a existir no tempo"
          },
          {
            "sp_pt": "",
            "text_pt": "para renovar em Si a natureza decaída,"
          },
          {
            "sp_pt": "",
            "text_pt": "restaurar o universo e reconduzir ao reino dos céus"
          },
          {
            "sp_pt": "",
            "text_pt": "o homem perdido pelo pecado."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com todos os anjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) com alegria:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo."
          },
          {
            "sp_pt": "",
            "text_pt": "No Cânone romano diz-se o Em comunhão com toda a Igreja próprio. Nas Orações"
          },
          {
            "sp_pt": "",
            "text_pt": "eucarísticas II e III faz-se também a comemoração própria do Natal. Nas Missas"
          },
          {
            "sp_pt": "",
            "text_pt": "da vigília e da noite do Natal do Senhor, diz-se: ao celebrarmos a noite santíssima; nas outras Missas, até à oitava do Natal, inclusive, diz-se: ao celebrarmos o"
          },
          {
            "sp_pt": "",
            "text_pt": "dia santíssimo."
          },
          {
            "rubric_pt": "PREFÁCIO III DO NATAL DO SENHOR"
          },
          {
            "sp_pt": "",
            "text_pt": "A admirável permuta realizada na Encarnação do V erbo"
          },
          {
            "sp_pt": "",
            "text_pt": "37. Este prefácio diz-se nas Missas do Natal e sua oitava, nas Missas durante a"
          },
          {
            "sp_pt": "",
            "text_pt": "oitava, ainda que tenham prefácio próprio, exceto nas Missas com prefácio próprio dos divinos mistérios ou das Pessoas divinas, e nos dias feriais do Tempo do"
          },
          {
            "sp_pt": "",
            "text_pt": "Natal."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Ele resplandece hoje, para os homens,"
          },
          {
            "sp_pt": "",
            "text_pt": "a admirável permuta da encarnação redentora:"
          },
          {
            "sp_pt": "",
            "text_pt": "a nossa fragilidade humana é assumida pelo Verbo,"
          },
          {
            "sp_pt": "",
            "text_pt": "o homem mortal é elevado à dignidade imortal"
          },
          {
            "sp_pt": "",
            "text_pt": "e, unido a Vós em comunhão admirável,"
          },
          {
            "sp_pt": "",
            "text_pt": "torna-se participante da vida eterna."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com todos os coros dos anjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) com alegria:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "No Cânone romano diz-se o Em comunhão com toda a Igreja próprio. Nas Orações"
          },
          {
            "sp_pt": "",
            "text_pt": "eucarísticas II e III faz-se também a comemoração própria do Natal. Nas Missas"
          },
          {
            "sp_pt": "",
            "text_pt": "da vigília e da noite do Natal do Senhor, diz-se: ao celebrarmos a noite santíssima; nas outras Missas, até à oitava do Natal, inclusive, diz-se: ao celebrarmos o"
          },
          {
            "sp_pt": "",
            "text_pt": "dia santíssimo."
          },
          {
            "rubric_pt": "PREFÁCIO DA EPIFANIA DO SENHOR"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, luz de todos os povos"
          },
          {
            "sp_pt": "",
            "text_pt": "38. Este prefácio diz-se nas Missas da solenidade da Epifania. Nos dias que decorrem desde a Epifania até ao sábado que precede a festa do Batismo do Senhor"
          },
          {
            "sp_pt": "",
            "text_pt": "pode dizer-se este prefácio ou um dos prefácios do Natal."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Hoje, em Cristo, luz do mundo,"
          },
          {
            "sp_pt": "",
            "text_pt": "revelastes a todos os povos o mistério da nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "e, manifestando-O na nossa natureza mortal,"
          },
          {
            "sp_pt": "",
            "text_pt": "nos renovastes com o esplendor da sua imortalidade."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e os arcanjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "os tronos e as dominações"
          },
          {
            "sp_pt": "",
            "text_pt": "e todos os coros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "No Cânone romano diz-se o Em comunhão com toda a Igreja próprio. Nas Orações"
          },
          {
            "sp_pt": "",
            "text_pt": "eucarísticas II e III faz-se também a comemoração própria."
          },
          {
            "rubric_pt": "PREFÁCIO I DA QUARESMA"
          },
          {
            "sp_pt": "",
            "text_pt": "Significado espiritual da Quaresma"
          },
          {
            "sp_pt": "",
            "text_pt": "39. Este prefácio diz-se no Tempo da Quaresma, especialmente nos domingos"
          },
          {
            "sp_pt": "",
            "text_pt": "que não têm outro prefácio mais próprio."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Todos os anos concedeis aos vossos fiéis"
          },
          {
            "sp_pt": "",
            "text_pt": "a graça de se prepararem,"
          },
          {
            "sp_pt": "",
            "text_pt": "na alegria do coração purificado,"
          },
          {
            "sp_pt": "",
            "text_pt": "para celebrar as festas pascais,"
          },
          {
            "sp_pt": "",
            "text_pt": "a fim de que, pela oração mais intensa,"
          },
          {
            "sp_pt": "",
            "text_pt": "pela caridade mais diligente,"
          },
          {
            "sp_pt": "",
            "text_pt": "participando nos mistérios da renovação cristã,"
          },
          {
            "sp_pt": "",
            "text_pt": "alcancem a plenitude da filiação divina."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e os arcanjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "os tronos e as dominações"
          },
          {
            "sp_pt": "",
            "text_pt": "e todos os coros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO II DA QUARESMA"
          },
          {
            "sp_pt": "",
            "text_pt": "A penitência espiritual"
          },
          {
            "sp_pt": "",
            "text_pt": "40. Este prefácio diz-se no Tempo da Quaresma, especialmente nos domingos"
          },
          {
            "sp_pt": "",
            "text_pt": "que não têm prefácio mais próprio."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Para renovar, na santidade, os vossos filhos,"
          },
          {
            "sp_pt": "",
            "text_pt": "concedeis este tempo de salvação,"
          },
          {
            "sp_pt": "",
            "text_pt": "a fim de que, libertando-se do fermento do pecado,"
          },
          {
            "sp_pt": "",
            "text_pt": "se convertam a Vós de todo o coração"
          },
          {
            "sp_pt": "",
            "text_pt": "e vivam de tal modo as realidades temporais"
          },
          {
            "sp_pt": "",
            "text_pt": "que procurem sempre os bens eternos."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e os santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO III DA QUARESMA"
          },
          {
            "sp_pt": "",
            "text_pt": "Os frutos da abstinência"
          },
          {
            "sp_pt": "",
            "text_pt": "41. Este prefácio diz-se nas Missas dos dias feriais da Quaresma e nos dias de"
          },
          {
            "sp_pt": "",
            "text_pt": "jejum."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Vós nos ensinais, pela abstinência quaresmal,"
          },
          {
            "sp_pt": "",
            "text_pt": "a manifestar-Vos a nossa gratidão,"
          },
          {
            "sp_pt": "",
            "text_pt": "a dominar os excessos da nossa inclinação para o mal"
          },
          {
            "sp_pt": "",
            "text_pt": "e a dar alimento aos que têm fome,"
          },
          {
            "sp_pt": "",
            "text_pt": "imitando a vossa divina bondade."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com todos os coros dos anjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO IV DA QUARESMA"
          },
          {
            "sp_pt": "",
            "text_pt": "Os frutos do jejum"
          },
          {
            "sp_pt": "",
            "text_pt": "42. Este prefácio diz-se nas Missas dos dias feriais da Quaresma e nos dias de"
          },
          {
            "sp_pt": "",
            "text_pt": "jejum."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Pelo jejum corporal"
          },
          {
            "sp_pt": "",
            "text_pt": "reprimis os vícios e elevais o espírito,"
          },
          {
            "sp_pt": "",
            "text_pt": "infundis a fortaleza e dais a recompensa,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Ele, os anjos louvam a vossa majestade,"
          },
          {
            "sp_pt": "",
            "text_pt": "as dominações Vos adoram,"
          },
          {
            "sp_pt": "",
            "text_pt": "as potestades Vos reverenciam;"
          },
          {
            "sp_pt": "",
            "text_pt": "os céus, os espíritos celestes"
          },
          {
            "sp_pt": "",
            "text_pt": "e os serafins Vos aclamam,"
          },
          {
            "sp_pt": "",
            "text_pt": "unidos em eterna exultação."
          },
          {
            "sp_pt": "",
            "text_pt": "Permiti que nos associemos às suas vozes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamando (cantando) humildemente o vosso louvor:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO V DA QUARESMA"
          },
          {
            "sp_pt": "",
            "text_pt": "O caminho do êxodo no deserto quaresmal"
          },
          {
            "sp_pt": "",
            "text_pt": "42 a. Este prefácio diz-se no Tempo da Quaresma, especialmente nos domingos"
          },
          {
            "sp_pt": "",
            "text_pt": "que não têm prefácio mais próprio."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, rico de misericórdia,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nossa salvação bendizer o vosso nome,"
          },
          {
            "sp_pt": "",
            "text_pt": "no nosso itinerário para a luz pascal,"
          },
          {
            "sp_pt": "",
            "text_pt": "seguindo os passos de Cristo,"
          },
          {
            "sp_pt": "",
            "text_pt": "mestre e exemplo da humanidade,"
          },
          {
            "sp_pt": "",
            "text_pt": "reconciliada no vosso amor."
          },
          {
            "sp_pt": "",
            "text_pt": "Vós abris à Igreja o caminho de um novo êxodo,"
          },
          {
            "sp_pt": "",
            "text_pt": "através do deserto quaresmal,"
          },
          {
            "sp_pt": "",
            "text_pt": "para que, aos pés da montanha santa,"
          },
          {
            "sp_pt": "",
            "text_pt": "de coração contrito e humilhado,"
          },
          {
            "sp_pt": "",
            "text_pt": "tome consciência da sua vocação como povo da aliança,"
          },
          {
            "sp_pt": "",
            "text_pt": "reunido para cantar o vosso louvor,"
          },
          {
            "sp_pt": "",
            "text_pt": "escutar a vossa palavra"
          },
          {
            "sp_pt": "",
            "text_pt": "e viver a experiência admirável dos vossos prodígios."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e os arcanjos"
          },
          {
            "sp_pt": "",
            "text_pt": "e todos os coros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo."
          },
          {
            "rubric_pt": "PREFÁCIO VI DA QUARESMA"
          },
          {
            "sp_pt": "",
            "text_pt": "O sacramento da reconciliação no Espírito"
          },
          {
            "sp_pt": "",
            "text_pt": "42 b. Este prefácio pode dizer-se na Missa da reconciliação e na Missa de caráter"
          },
          {
            "sp_pt": "",
            "text_pt": "penitencial. Diz-se também no Tempo da Quaresma."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus omnipotente e misericordioso,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "louvar-Vos e dar-Vos graças por todos os benefícios"
          },
          {
            "sp_pt": "",
            "text_pt": "e, especialmente, pela graça do perdão."
          },
          {
            "sp_pt": "",
            "text_pt": "Ao homem, náufrago do pecado e da morte,"
          },
          {
            "sp_pt": "",
            "text_pt": "pelo sacramento da reconciliação,"
          },
          {
            "sp_pt": "",
            "text_pt": "abristes em Cristo, morto e ressuscitado,"
          },
          {
            "sp_pt": "",
            "text_pt": "o porto da misericórdia e da paz."
          },
          {
            "sp_pt": "",
            "text_pt": "Pelo poder do vosso Espírito,"
          },
          {
            "sp_pt": "",
            "text_pt": "estabelecestes para a Igreja,"
          },
          {
            "sp_pt": "",
            "text_pt": "santa e também pecadora,"
          },
          {
            "sp_pt": "",
            "text_pt": "uma segunda tábua de salvação depois do Batismo"
          },
          {
            "sp_pt": "",
            "text_pt": "e continuamente a renovais"
          },
          {
            "sp_pt": "",
            "text_pt": "para a reunir no banquete do vosso amor."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e os santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo."
          },
          {
            "rubric_pt": "PREFÁCIO I DA PAIXÃO DO SENHOR"
          },
          {
            "sp_pt": "",
            "text_pt": "O poder da Cruz"
          },
          {
            "sp_pt": "",
            "text_pt": "43. Este prefácio diz-se durante a Semana V da Quaresma e nas Missas da Santa"
          },
          {
            "sp_pt": "",
            "text_pt": "Cruz e da Paixão do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Pela paixão redentora do vosso Filho,"
          },
          {
            "sp_pt": "",
            "text_pt": "abristes aos homens o caminho da fé,"
          },
          {
            "sp_pt": "",
            "text_pt": "para proclamarem a glória do vosso nome."
          },
          {
            "sp_pt": "",
            "text_pt": "No admirável poder da cruz"
          },
          {
            "sp_pt": "",
            "text_pt": "resplandece o julgamento do mundo"
          },
          {
            "sp_pt": "",
            "text_pt": "e a vitória do Crucificado."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e todos os santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) com alegria:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO II DA PAIXÃO DO SENHOR"
          },
          {
            "sp_pt": "",
            "text_pt": "A vitória da Paixão"
          },
          {
            "sp_pt": "",
            "text_pt": "44. Este prefácio diz-se na segunda, terça e quarta-feira da Semana Santa."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Aproximam-se os dias solenes"
          },
          {
            "sp_pt": "",
            "text_pt": "da paixão salvadora e da ressurreição gloriosa,"
          },
          {
            "sp_pt": "",
            "text_pt": "em que é vencida a iniquidade da antiga serpente"
          },
          {
            "sp_pt": "",
            "text_pt": "e se renova o mistério da nossa redenção."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, a multidão dos anjos"
          },
          {
            "sp_pt": "",
            "text_pt": "adora a vossa majestade"
          },
          {
            "sp_pt": "",
            "text_pt": "e exulta eternamente na vossa presença."
          },
          {
            "sp_pt": "",
            "text_pt": "Permiti que nos associemos às suas vozes,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) com alegria:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO PASCAL I"
          },
          {
            "sp_pt": "",
            "text_pt": "O mistério pascal"
          },
          {
            "sp_pt": "",
            "text_pt": "45. Este prefácio diz-se no Tempo Pascal."
          },
          {
            "sp_pt": "",
            "text_pt": "Na Missa da Vigília Pascal diz-se: nesta noite;"
          },
          {
            "sp_pt": "",
            "text_pt": "no dia da Páscoa e sua oitava diz-se: neste dia;"
          },
          {
            "sp_pt": "",
            "text_pt": "depois da oitava diz-se: neste tempo."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "que sempre Vos louvemos,"
          },
          {
            "sp_pt": "",
            "text_pt": "mas com maior solenidade (nesta noite – neste dia – neste tempo),"
          },
          {
            "sp_pt": "",
            "text_pt": "em que Cristo, nossa Páscoa, foi imolado."
          },
          {
            "sp_pt": "",
            "text_pt": "Ele é o Cordeiro de Deus que tirou o pecado do mundo:"
          },
          {
            "sp_pt": "",
            "text_pt": "morrendo destruiu a morte"
          },
          {
            "sp_pt": "",
            "text_pt": "e ressuscitando restaurou a vida."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, na plenitude da alegria pascal,"
          },
          {
            "sp_pt": "",
            "text_pt": "exultam os homens por toda a terra"
          },
          {
            "sp_pt": "",
            "text_pt": "e, com os anjos e todos os coros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamam a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "No Cânone romano diz-se o Em comunhão com toda a Igreja e Aceitai benignamente próprios. Nas Orações eucarísticas II e III faz-se também a comemoração"
          },
          {
            "sp_pt": "",
            "text_pt": "própria. Na Vigília Pascal diz-se: ao celebrarmos a noite santíssima."
          },
          {
            "rubric_pt": "PREFÁCIO PASCAL II"
          },
          {
            "sp_pt": "",
            "text_pt": "A vida nova em Cristo"
          },
          {
            "sp_pt": "",
            "text_pt": "46. Este prefácio diz-se no Tempo Pascal."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "que sempre Vos louvemos,"
          },
          {
            "sp_pt": "",
            "text_pt": "mas com maior solenidade neste tempo,"
          },
          {
            "sp_pt": "",
            "text_pt": "em que Cristo, nossa Páscoa, foi imolado."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Ele nascem os filhos da luz para a vida eterna"
          },
          {
            "sp_pt": "",
            "text_pt": "e abrem-se para os fiéis as portas do reino dos céus,"
          },
          {
            "sp_pt": "",
            "text_pt": "porque a nossa morte foi redimida pela sua morte"
          },
          {
            "sp_pt": "",
            "text_pt": "e na sua ressurreição ressurgiu a vida do género humano."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, na plenitude da alegria pascal,"
          },
          {
            "sp_pt": "",
            "text_pt": "exultam os homens por toda a terra"
          },
          {
            "sp_pt": "",
            "text_pt": "e, com os anjos e todos os coros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamam a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO PASCAL III"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo vivo e intercessor perpétuo em nosso favor"
          },
          {
            "sp_pt": "",
            "text_pt": "47. Este prefácio diz-se no Tempo Pascal."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "que sempre Vos louvemos,"
          },
          {
            "sp_pt": "",
            "text_pt": "mas com maior solenidade neste tempo,"
          },
          {
            "sp_pt": "",
            "text_pt": "em que Cristo, nossa Páscoa, foi imolado."
          },
          {
            "sp_pt": "",
            "text_pt": "Ele Se oferece continuamente por nós"
          },
          {
            "sp_pt": "",
            "text_pt": "e nos defende com a sua intercessão."
          },
          {
            "sp_pt": "",
            "text_pt": "Foi imolado sobre a cruz,"
          },
          {
            "sp_pt": "",
            "text_pt": "mas não morrerá jamais;"
          },
          {
            "sp_pt": "",
            "text_pt": "foi morto, mas agora vive para sempre."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, na plenitude da alegria pascal,"
          },
          {
            "sp_pt": "",
            "text_pt": "exultam os homens por toda a terra"
          },
          {
            "sp_pt": "",
            "text_pt": "e, com os anjos e todos os coros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamam a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO PASCAL IV"
          },
          {
            "sp_pt": "",
            "text_pt": "A renovação do universo pelo mistério pascal"
          },
          {
            "sp_pt": "",
            "text_pt": "48. Este prefácio diz-se no Tempo Pascal."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "que sempre Vos louvemos,"
          },
          {
            "sp_pt": "",
            "text_pt": "mas com maior solenidade neste tempo,"
          },
          {
            "sp_pt": "",
            "text_pt": "em que Cristo, nossa Páscoa, foi imolado."
          },
          {
            "sp_pt": "",
            "text_pt": "Porque, vencendo a antiga corrupção do pecado,"
          },
          {
            "sp_pt": "",
            "text_pt": "renovou o universo decaído"
          },
          {
            "sp_pt": "",
            "text_pt": "e restaurou o género humano na sua integridade original."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, na plenitude da alegria pascal,"
          },
          {
            "sp_pt": "",
            "text_pt": "exultam os homens por toda a terra"
          },
          {
            "sp_pt": "",
            "text_pt": "e, com os anjos e todos os coros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamam a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO PASCAL V"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, sacerdote e vítima"
          },
          {
            "sp_pt": "",
            "text_pt": "49. Este prefácio diz-se no Tempo Pascal."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "que sempre Vos louvemos,"
          },
          {
            "sp_pt": "",
            "text_pt": "mas com maior solenidade neste tempo,"
          },
          {
            "sp_pt": "",
            "text_pt": "em que Cristo, nossa Páscoa, foi imolado."
          },
          {
            "sp_pt": "",
            "text_pt": "Pela oblação do seu Corpo na cruz,"
          },
          {
            "sp_pt": "",
            "text_pt": "levou à plenitude os sacrifícios antigos"
          },
          {
            "sp_pt": "",
            "text_pt": "e, entregando-Se a Vós pela nossa salvação,"
          },
          {
            "sp_pt": "",
            "text_pt": "tornou-Se Ele mesmo o sacerdote, o altar e o cordeiro."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, na plenitude da alegria pascal,"
          },
          {
            "sp_pt": "",
            "text_pt": "exultam os homens por toda a terra"
          },
          {
            "sp_pt": "",
            "text_pt": "e, com os anjos e todos os coros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamam a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO I DA ASCENSÃO DO SENHOR"
          },
          {
            "sp_pt": "",
            "text_pt": "O mistério da Ascensão"
          },
          {
            "sp_pt": "",
            "text_pt": "50. Este prefácio diz-se no dia de Ascensão do Senhor. Pode dizer-se também"
          },
          {
            "sp_pt": "",
            "text_pt": "nos dias a seguir à Ascensão, até ao sábado antes de Pentecostes, nas Missas que"
          },
          {
            "sp_pt": "",
            "text_pt": "não têm prefácio próprio."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Porque o Senhor Jesus Cristo, Rei da glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "vencedor da morte e do pecado,"
          },
          {
            "sp_pt": "",
            "text_pt": "subiu (hoje) ao mais alto dos céus, ante a admiração dos anjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "e foi constituído Mediador entre Deus e os homens,"
          },
          {
            "sp_pt": "",
            "text_pt": "Juiz do mundo e Senhor dos senhores."
          },
          {
            "sp_pt": "",
            "text_pt": "Ele não abandonou a nossa condição humana,"
          },
          {
            "sp_pt": "",
            "text_pt": "mas, subindo aos céus, como nossa cabeça e primogénito,"
          },
          {
            "sp_pt": "",
            "text_pt": "deu-nos a esperança de irmos um dia ao seu encontro,"
          },
          {
            "sp_pt": "",
            "text_pt": "como membros do seu Corpo,"
          },
          {
            "sp_pt": "",
            "text_pt": "para nos unir à sua glória imortal."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, na plenitude da alegria pascal,"
          },
          {
            "sp_pt": "",
            "text_pt": "exultam os homens por toda a terra"
          },
          {
            "sp_pt": "",
            "text_pt": "e, com os anjos e todos os coros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamam a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo."
          },
          {
            "rubric_pt": "PREFÁCIO II DA ASCENSÃO DO SENHOR"
          },
          {
            "sp_pt": "",
            "text_pt": "O mistério da Ascensão"
          },
          {
            "sp_pt": "",
            "text_pt": "51. Este prefácio diz-se no dia de Ascensão. Pode dizer-se também nos dias a"
          },
          {
            "sp_pt": "",
            "text_pt": "seguir à Ascensão, até ao sábado antes de Pentecostes, nas Missas que não têm"
          },
          {
            "sp_pt": "",
            "text_pt": "prefácio próprio."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "rubric_pt": "Depois da sua ressurreição,"
          },
          {
            "sp_pt": "",
            "text_pt": "apareceu a todos os discípulos"
          },
          {
            "sp_pt": "",
            "text_pt": "e, à vista deles, subiu aos céus,"
          },
          {
            "sp_pt": "",
            "text_pt": "para nos tornar participantes da sua divindade."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, na plenitude da alegria pascal,"
          },
          {
            "sp_pt": "",
            "text_pt": "exultam os homens por toda a terra"
          },
          {
            "sp_pt": "",
            "text_pt": "e, com os anjos e todos os coros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamam a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "No dia da Ascensão, no Cânone romano diz-se o Em comunhão com toda a Igreja"
          },
          {
            "sp_pt": "",
            "text_pt": "próprio. Nas Orações eucarísticas II e III faz-se também a comemoração própria."
          },
          {
            "rubric_pt": "PREFÁCIO I DOMINICAL DO TEMPO COMUM"
          },
          {
            "sp_pt": "",
            "text_pt": "O mistério pascal e o povo de Deus"
          },
          {
            "sp_pt": "",
            "text_pt": "52. Este prefácio diz-se nos domingos do Tempo Comum."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Pelo seu mistério pascal,"
          },
          {
            "sp_pt": "",
            "text_pt": "Ele realizou a obra admirável"
          },
          {
            "sp_pt": "",
            "text_pt": "de nos chamar do pecado e da morte"
          },
          {
            "sp_pt": "",
            "text_pt": "à glória de geração escolhida, sacerdócio real,"
          },
          {
            "sp_pt": "",
            "text_pt": "nação santa, povo resgatado,"
          },
          {
            "sp_pt": "",
            "text_pt": "a fim de que, libertos do poder das trevas"
          },
          {
            "sp_pt": "",
            "text_pt": "para a claridade da vossa luz,"
          },
          {
            "sp_pt": "",
            "text_pt": "anunciemos por toda a parte as vossas maravilhas."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e os arcanjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "os tronos e as dominações"
          },
          {
            "sp_pt": "",
            "text_pt": "e todos os coros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO II DOMINICAL DO TEMPO COMUM"
          },
          {
            "sp_pt": "",
            "text_pt": "O mistério da salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "53. Este prefácio diz-se nos domingos do Tempo Comum."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Compadecido dos errados caminhos dos homens,"
          },
          {
            "sp_pt": "",
            "text_pt": "dignou-Se nascer da Virgem Maria;"
          },
          {
            "sp_pt": "",
            "text_pt": "com a sua morte na cruz,"
          },
          {
            "sp_pt": "",
            "text_pt": "livrou-nos da morte eterna;"
          },
          {
            "sp_pt": "",
            "text_pt": "com a sua ressurreição,"
          },
          {
            "sp_pt": "",
            "text_pt": "deu-nos a vida imortal."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e os arcanjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "os tronos e as dominações"
          },
          {
            "sp_pt": "",
            "text_pt": "e todos os coros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO III DOMINICAL DO TEMPO COMUM"
          },
          {
            "sp_pt": "",
            "text_pt": "A salvação do homem por um homem"
          },
          {
            "sp_pt": "",
            "text_pt": "54. Este prefácio diz-se nos domingos do Tempo Comum."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Para manifestar o esplendor da vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "viestes em auxílio da fragilidade humana,"
          },
          {
            "sp_pt": "",
            "text_pt": "com o poder da vossa divindade;"
          },
          {
            "sp_pt": "",
            "text_pt": "da nossa condição mortal"
          },
          {
            "sp_pt": "",
            "text_pt": "tirastes o remédio para vencer a morte"
          },
          {
            "sp_pt": "",
            "text_pt": "e, da nossa ruína,"
          },
          {
            "sp_pt": "",
            "text_pt": "abristes o caminho da salvação,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Ele, a multidão dos anjos"
          },
          {
            "sp_pt": "",
            "text_pt": "adora a vossa majestade"
          },
          {
            "sp_pt": "",
            "text_pt": "e exulta eternamente na vossa presença."
          },
          {
            "sp_pt": "",
            "text_pt": "Permiti que nos associemos às suas vozes,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) com alegria:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO IV DOMINICAL DO TEMPO COMUM"
          },
          {
            "sp_pt": "",
            "text_pt": "A história da salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "55. Este prefácio diz-se nos domingos do Tempo Comum."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Com o seu nascimento, Ele renovou a antiga condição humana;"
          },
          {
            "sp_pt": "",
            "text_pt": "com a sua morte destruiu os nossos pecados;"
          },
          {
            "sp_pt": "",
            "text_pt": "com a sua ressurreição conduziu-nos à vida eterna"
          },
          {
            "sp_pt": "",
            "text_pt": "e, na sua ascensão, abriu-nos as portas do céu."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e os santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO V DOMINICAL DO TEMPO COMUM"
          },
          {
            "sp_pt": "",
            "text_pt": "A criação"
          },
          {
            "sp_pt": "",
            "text_pt": "56. Este prefácio diz-se nos domingos do Tempo Comum."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Vós criastes os elementos do mundo,"
          },
          {
            "sp_pt": "",
            "text_pt": "estabelecendo o curso dos tempos e as estações do ano;"
          },
          {
            "sp_pt": "",
            "text_pt": "formastes o homem à vossa imagem e semelhança"
          },
          {
            "sp_pt": "",
            "text_pt": "e lhe confiastes as maravilhas do universo,"
          },
          {
            "sp_pt": "",
            "text_pt": "para que, em vosso nome, domine sobre todas as criaturas"
          },
          {
            "sp_pt": "",
            "text_pt": "e Vos glorifique sem cessar, pela grandeza das vossas obras,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Ele, com todos os anjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) com alegria:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO VI DOMINICAL DO TEMPO COMUM"
          },
          {
            "sp_pt": "",
            "text_pt": "O penhor da Páscoa eterna"
          },
          {
            "sp_pt": "",
            "text_pt": "57. Este prefácio diz-se nos domingos do Tempo Comum."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Em Vós vivemos, nos movemos e existimos."
          },
          {
            "sp_pt": "",
            "text_pt": "Durante a nossa vida terrena,"
          },
          {
            "sp_pt": "",
            "text_pt": "sentimos cada dia os efeitos da vossa bondade"
          },
          {
            "sp_pt": "",
            "text_pt": "e possuímos desde já o penhor da vida futura;"
          },
          {
            "sp_pt": "",
            "text_pt": "tendo recebido as primícias do Espírito,"
          },
          {
            "sp_pt": "",
            "text_pt": "pelo qual ressuscitastes Jesus Cristo de entre os mortos,"
          },
          {
            "sp_pt": "",
            "text_pt": "vivemos na esperança da Páscoa eterna."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com todos os anjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) com alegria:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO VII DOMINICAL DO TEMPO COMUM"
          },
          {
            "sp_pt": "",
            "text_pt": "A salvação pela obediência de Cristo"
          },
          {
            "sp_pt": "",
            "text_pt": "58. Este prefácio diz-se nos domingos do Tempo Comum."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Na vossa infinita misericórdia,"
          },
          {
            "sp_pt": "",
            "text_pt": "de tal modo amastes o mundo"
          },
          {
            "sp_pt": "",
            "text_pt": "que nos enviastes o Redentor,"
          },
          {
            "sp_pt": "",
            "text_pt": "em tudo semelhante a nós, menos no pecado,"
          },
          {
            "sp_pt": "",
            "text_pt": "para poderdes amar em nós"
          },
          {
            "sp_pt": "",
            "text_pt": "o que amáveis em vosso Filho:"
          },
          {
            "sp_pt": "",
            "text_pt": "pela sua obediência, Ele restaurou os vossos dons,"
          },
          {
            "sp_pt": "",
            "text_pt": "que por desobediência tínhamos perdido."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e todos os santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) com alegria:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO VIII DOMINICAL DO TEMPO COMUM"
          },
          {
            "sp_pt": "",
            "text_pt": "A Igreja reunida na comunhão da Trindade"
          },
          {
            "sp_pt": "",
            "text_pt": "59. Este prefácio diz-se nos domingos do Tempo Comum."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Pelo sangue do vosso Filho e pela força do Espírito,"
          },
          {
            "sp_pt": "",
            "text_pt": "quisestes reconduzir à unidade do vosso povo"
          },
          {
            "sp_pt": "",
            "text_pt": "os filhos dispersos pelo pecado,"
          },
          {
            "sp_pt": "",
            "text_pt": "para que a Igreja,"
          },
          {
            "sp_pt": "",
            "text_pt": "reunida na comunhão da Trindade,"
          },
          {
            "sp_pt": "",
            "text_pt": "apareça no mundo"
          },
          {
            "sp_pt": "",
            "text_pt": "como corpo de Cristo"
          },
          {
            "sp_pt": "",
            "text_pt": "e templo do Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "para louvor da vossa infinita sabedoria."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com todos os coros dos anjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) com alegria:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO IX DOMINICAL DO TEMPO COMUM"
          },
          {
            "sp_pt": "",
            "text_pt": "A ação do Espírito na Igreja"
          },
          {
            "sp_pt": "",
            "text_pt": "59 a. Este prefácio diz-se nos domingos do Tempo Comum."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Com admirável providência"
          },
          {
            "sp_pt": "",
            "text_pt": "ordenais a evolução dos tempos"
          },
          {
            "sp_pt": "",
            "text_pt": "e, com o poder do Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "conduzis a vossa Igreja,"
          },
          {
            "sp_pt": "",
            "text_pt": "para que, sempre fiel ao vosso amor,"
          },
          {
            "sp_pt": "",
            "text_pt": "nunca deixe de invocar-Vos nas suas tribulações,"
          },
          {
            "sp_pt": "",
            "text_pt": "nem de Vos dar graças nas suas alegrias,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Ele, com todos os coros dos anjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) com alegria:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO X DOMINICAL DO TEMPO COMUM"
          },
          {
            "sp_pt": "",
            "text_pt": "O dia do Senhor"
          },
          {
            "sp_pt": "",
            "text_pt": "59 b. Este prefácio diz-se nos domingos do Tempo Comum."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, fonte da verdade e da vida,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "bendizer-Vos e dar-Vos graças,"
          },
          {
            "sp_pt": "",
            "text_pt": "porque, neste dia de festa,"
          },
          {
            "sp_pt": "",
            "text_pt": "nos congregastes na vossa casa."
          },
          {
            "sp_pt": "",
            "text_pt": "Hoje, a vossa família,"
          },
          {
            "sp_pt": "",
            "text_pt": "reunida para escutar a palavra da salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "e participar no pão da vida,"
          },
          {
            "sp_pt": "",
            "text_pt": "celebra o memorial do Senhor ressuscitado,"
          },
          {
            "sp_pt": "",
            "text_pt": "na esperança do domingo que não tem ocaso,"
          },
          {
            "sp_pt": "",
            "text_pt": "quando toda a humanidade entrar no vosso descanso."
          },
          {
            "rubric_pt": "Então veremos o vosso rosto"
          },
          {
            "sp_pt": "",
            "text_pt": "e louvaremos sem fim a vossa misericórdia."
          },
          {
            "sp_pt": "",
            "text_pt": "Nesta feliz esperança,"
          },
          {
            "sp_pt": "",
            "text_pt": "com os anjos e os santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO I DA SANTÍSSIMA EUCARISTIA"
          },
          {
            "sp_pt": "",
            "text_pt": "O sacrifício e o sacramento de Cristo"
          },
          {
            "sp_pt": "",
            "text_pt": "60. Este prefácio diz-se na Missa da Ceia do Senhor; pode dizer-se também"
          },
          {
            "sp_pt": "",
            "text_pt": "na solenidade do Santíssimo Corpo e Sangue de Cristo e nas Missas votivas da"
          },
          {
            "sp_pt": "",
            "text_pt": "Santíssima Eucaristia."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Verdadeiro e eterno sacerdote,"
          },
          {
            "sp_pt": "",
            "text_pt": "oferecendo-Se como vítima de salvação,"
          },
          {
            "sp_pt": "",
            "text_pt": "instituiu o sacrifício da nova e eterna aliança"
          },
          {
            "sp_pt": "",
            "text_pt": "e mandou que o celebrássemos em sua memória."
          },
          {
            "sp_pt": "",
            "text_pt": "O seu Corpo, por nós imolado,"
          },
          {
            "sp_pt": "",
            "text_pt": "é alimento que nos fortalece"
          },
          {
            "sp_pt": "",
            "text_pt": "e o seu Sangue, por nós derramado,"
          },
          {
            "sp_pt": "",
            "text_pt": "é bebida que nos purifica."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e os arcanjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "os tronos e as dominações"
          },
          {
            "sp_pt": "",
            "text_pt": "e todos os coros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO II DA SANTÍSSIMA EUCARISTIA"
          },
          {
            "sp_pt": "",
            "text_pt": "Os frutos da Santíssima Eucaristia"
          },
          {
            "sp_pt": "",
            "text_pt": "61. Este prefácio diz-se na solenidade do Santíssimo Corpo e Sangue de Cristo"
          },
          {
            "sp_pt": "",
            "text_pt": "e nas Missas votivas da Santíssima Eucaristia."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "rubric_pt": "Reunido com os apóstolos na Última Ceia,"
          },
          {
            "sp_pt": "",
            "text_pt": "para perpetuar a sua paixão salvadora,"
          },
          {
            "sp_pt": "",
            "text_pt": "entregou-Se a Si mesmo"
          },
          {
            "sp_pt": "",
            "text_pt": "como cordeiro imaculado e sacrifício perfeito."
          },
          {
            "sp_pt": "",
            "text_pt": "Neste sagrado mistério, alimentais e santificais os fiéis,"
          },
          {
            "sp_pt": "",
            "text_pt": "para que os homens do mundo inteiro"
          },
          {
            "sp_pt": "",
            "text_pt": "sejam iluminados pela mesma fé"
          },
          {
            "sp_pt": "",
            "text_pt": "e unidos pela mesma caridade."
          },
          {
            "sp_pt": "",
            "text_pt": "Assim nos reunimos à mesa deste admirável sacramento,"
          },
          {
            "sp_pt": "",
            "text_pt": "para que a abundância da vossa graça"
          },
          {
            "sp_pt": "",
            "text_pt": "nos faça participantes da vida celeste."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, todas as criaturas, no céu e na terra,"
          },
          {
            "sp_pt": "",
            "text_pt": "Vos adoram, cantando um cântico novo."
          },
          {
            "sp_pt": "",
            "text_pt": "E também nós, com todos os coros dos anjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo."
          },
          {
            "rubric_pt": "PREFÁCIO III DA SANTÍSSIMA EUCARISTIA"
          },
          {
            "sp_pt": "",
            "text_pt": "A Eucaristia, viático para a Páscoa eterna"
          },
          {
            "sp_pt": "",
            "text_pt": "61 a. Este prefácio diz-se nas Missas rituais para o viático e pode dizer-se nas"
          },
          {
            "sp_pt": "",
            "text_pt": "Missas votivas da Santíssima Eucaristia."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus de misericórdia e de paz."
          },
          {
            "sp_pt": "",
            "text_pt": "É verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças e bendizer o vosso nome."
          },
          {
            "sp_pt": "",
            "text_pt": "Vós quisestes que o vosso Filho, Jesus Cristo,"
          },
          {
            "sp_pt": "",
            "text_pt": "obediente até à morte na cruz,"
          },
          {
            "sp_pt": "",
            "text_pt": "nos abrisse o caminho para Vós,"
          },
          {
            "sp_pt": "",
            "text_pt": "plenitude de toda a esperança humana."
          },
          {
            "sp_pt": "",
            "text_pt": "Na Eucaristia, testamento do seu amor,"
          },
          {
            "sp_pt": "",
            "text_pt": "Ele faz-Se comida e bebida espiritual"
          },
          {
            "sp_pt": "",
            "text_pt": "para a nossa viagem a caminho da Páscoa eterna."
          },
          {
            "sp_pt": "",
            "text_pt": "Com este penhor da ressurreição final,"
          },
          {
            "sp_pt": "",
            "text_pt": "esperamos participar na mesa gloriosa do vosso reino"
          },
          {
            "sp_pt": "",
            "text_pt": "e, com os anjos e os santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) com alegria:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO I DA VIRGEM SANTA MARIA"
          },
          {
            "sp_pt": "",
            "text_pt": "A Maternidade da Virgem santa Maria"
          },
          {
            "sp_pt": "",
            "text_pt": "62. Este prefácio diz-se nas Missas da Virgem santa Maria, especificando no"
          },
          {
            "sp_pt": "",
            "text_pt": "lugar próprio o nome da celebração do dia, como se indica nas respetivas Missas."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte,"
          },
          {
            "sp_pt": "",
            "text_pt": "e louvar-Vos, bendizer-Vos e glorificar-Vos"
          },
          {
            "sp_pt": "",
            "text_pt": "na memória (festa – solenidade) da Virgem santa Maria."
          },
          {
            "sp_pt": "",
            "text_pt": "Pelo poder do Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Ela concebeu o vosso Filho unigénito"
          },
          {
            "sp_pt": "",
            "text_pt": "e, sem perder a glória da sua virgindade,"
          },
          {
            "sp_pt": "",
            "text_pt": "deu ao mundo a luz eterna, nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Ele, os anjos louvam a vossa majestade,"
          },
          {
            "sp_pt": "",
            "text_pt": "as dominações Vos adoram,"
          },
          {
            "sp_pt": "",
            "text_pt": "as potestades Vos reverenciam;"
          },
          {
            "sp_pt": "",
            "text_pt": "os céus, os espíritos celestes e os serafins Vos aclamam,"
          },
          {
            "sp_pt": "",
            "text_pt": "unidos em eterna exultação."
          },
          {
            "sp_pt": "",
            "text_pt": "Permiti que nos associemos às suas vozes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamando (cantando) humildemente o vosso louvor:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo."
          },
          {
            "rubric_pt": "PREFÁCIO II DA VIRGEM SANTA MARIA"
          },
          {
            "sp_pt": "",
            "text_pt": "A Igreja louva a Deus com as palavras de Maria"
          },
          {
            "sp_pt": "",
            "text_pt": "63. Este prefácio diz-se nas Missas da Virgem santa Maria, especificando no"
          },
          {
            "sp_pt": "",
            "text_pt": "lugar próprio o nome da celebração do dia, como se indica nas respetivas Missas."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "celebrar o vosso poder admirável na perfeição dos santos"
          },
          {
            "sp_pt": "",
            "text_pt": "e exaltar a vossa bondade"
          },
          {
            "sp_pt": "",
            "text_pt": "na memória (festa – solenidade) da Virgem santa Maria,"
          },
          {
            "sp_pt": "",
            "text_pt": "inspirando-nos no seu cântico de louvor."
          },
          {
            "sp_pt": "",
            "text_pt": "Vós fizestes maravilhas a favor de todos os povos"
          },
          {
            "sp_pt": "",
            "text_pt": "e manifestastes, de geração em geração, a vossa misericórdia,"
          },
          {
            "sp_pt": "",
            "text_pt": "quando olhastes para a humildade da vossa serva"
          },
          {
            "sp_pt": "",
            "text_pt": "e, por Ela, nos destes o Salvador do mundo,"
          },
          {
            "sp_pt": "",
            "text_pt": "vosso Filho, nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Ele, a multidão dos anjos adora a vossa majestade"
          },
          {
            "sp_pt": "",
            "text_pt": "e exulta eternamente na vossa presença."
          },
          {
            "sp_pt": "",
            "text_pt": "Permiti que nos associemos às suas vozes,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) com alegria:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO III DA VIRGEM SANTA MARIA"
          },
          {
            "sp_pt": "",
            "text_pt": "Maria, sinal de consolação e de esperança"
          },
          {
            "sp_pt": "",
            "text_pt": "63 a. Este prefácio diz-se nas Missas da Virgem santa Maria."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever dar-Vos graças,"
          },
          {
            "sp_pt": "",
            "text_pt": "é nossa salvação glorificar-Vos."
          },
          {
            "sp_pt": "",
            "text_pt": "Nós Vos louvamos e bendizemos,"
          },
          {
            "sp_pt": "",
            "text_pt": "por Jesus Cristo, vosso Filho,"
          },
          {
            "sp_pt": "",
            "text_pt": "na memória (festa) da Virgem santa Maria."
          },
          {
            "sp_pt": "",
            "text_pt": "Humilde serva, acolheu a vossa palavra"
          },
          {
            "sp_pt": "",
            "text_pt": "e guardou-a no seu coração;"
          },
          {
            "sp_pt": "",
            "text_pt": "admiravelmente unida ao mistério da redenção,"
          },
          {
            "sp_pt": "",
            "text_pt": "perseverou com os apóstolos em oração,"
          },
          {
            "sp_pt": "",
            "text_pt": "esperando a vinda do Espírito Santo;"
          },
          {
            "sp_pt": "",
            "text_pt": "agora, resplandece no caminho da nossa vida,"
          },
          {
            "sp_pt": "",
            "text_pt": "como sinal de consolação e de firme esperança."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e os santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO IV DA VIRGEM SANTA MARIA"
          },
          {
            "sp_pt": "",
            "text_pt": "Maria, imagem da nova humanidade"
          },
          {
            "sp_pt": "",
            "text_pt": "63 b. Este prefácio diz-se nas Missas da Virgem santa Maria."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, fonte de vida e de alegria,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever dar-Vos graças"
          },
          {
            "sp_pt": "",
            "text_pt": "na memória (festa – solenidade) da Virgem santa Maria."
          },
          {
            "sp_pt": "",
            "text_pt": "Vós revelastes, na plenitude dos tempos,"
          },
          {
            "sp_pt": "",
            "text_pt": "o mistério escondido desde os tempos antigos,"
          },
          {
            "sp_pt": "",
            "text_pt": "para que se renove, no mundo inteiro, a vida e a esperança."
          },
          {
            "sp_pt": "",
            "text_pt": "Em Cristo, novo Adão,"
          },
          {
            "sp_pt": "",
            "text_pt": "e, em Maria, nova Eva,"
          },
          {
            "sp_pt": "",
            "text_pt": "manifestastes finalmente a vossa Igreja,"
          },
          {
            "sp_pt": "",
            "text_pt": "primícias da humanidade redimida."
          },
          {
            "sp_pt": "",
            "text_pt": "Por este dom admirável,"
          },
          {
            "sp_pt": "",
            "text_pt": "toda a criação, pelo poder do Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "volta de novo ao caminho original para a Páscoa eterna."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e os santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo."
          },
          {
            "rubric_pt": "OUTROS PREFÁCIOS DA VIRGEM SANTA MARIA"
          },
          {
            "sp_pt": "",
            "text_pt": "V. Maria, imagem e mãe da Igreja: Santa Maria. Mãe da Igreja,"
          },
          {
            "sp_pt": "",
            "text_pt": "p. 677."
          },
          {
            "sp_pt": "",
            "text_pt": "VI. A glória da Assunção de Maria: 15 de agosto, p. 746."
          },
          {
            "sp_pt": "",
            "text_pt": "VII. O mistério de Maria e da Igreja: 8 de dezembro, p. 836."
          },
          {
            "rubric_pt": "PREFÁCIO DOS ANJOS"
          },
          {
            "sp_pt": "",
            "text_pt": "A glória de Deus resplandece nos anjos"
          },
          {
            "sp_pt": "",
            "text_pt": "63 c. Este prefácio diz-se nas Missas dos Anjos."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Proclamamos a vossa imensa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "que resplandece nos anjos e nos arcanjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "e, honrando estes mensageiros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "exaltamos a vossa infinita bondade,"
          },
          {
            "sp_pt": "",
            "text_pt": "porque a veneração que eles merecem"
          },
          {
            "sp_pt": "",
            "text_pt": "é sinal da vossa incomparável grandeza"
          },
          {
            "sp_pt": "",
            "text_pt": "sobre todas as criaturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com a multidão dos anjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "que celebram a vossa divina majestade,"
          },
          {
            "sp_pt": "",
            "text_pt": "nós Vos adoramos e bendizemos com alegria,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO DE SÃO JOSÉ"
          },
          {
            "rubric_pt": "ESPOSO DA VIRGEM SANTA MARIA"
          },
          {
            "sp_pt": "",
            "text_pt": "A missão de são José"
          },
          {
            "sp_pt": "",
            "text_pt": "63 c. Este prefácio diz-se nas Missas de são José."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte,"
          },
          {
            "sp_pt": "",
            "text_pt": "e exaltar, bendizer e proclamar a vossa bondade,"
          },
          {
            "sp_pt": "",
            "text_pt": "na solenidade (festa – memória) do bem-aventurado são José."
          },
          {
            "sp_pt": "",
            "text_pt": "Homem justo,"
          },
          {
            "sp_pt": "",
            "text_pt": "foi por Vós escolhido para Esposo da Virgem Mãe de Deus;"
          },
          {
            "sp_pt": "",
            "text_pt": "servo fiel e prudente, foi constituído chefe da vossa família,"
          },
          {
            "sp_pt": "",
            "text_pt": "para guardar com paterna solicitude o vosso Filho unigénito,"
          },
          {
            "sp_pt": "",
            "text_pt": "concebido pelo poder do Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Ele, os anjos louvam a vossa majestade,"
          },
          {
            "sp_pt": "",
            "text_pt": "as dominações Vos adoram, as potestades Vos reverenciam;"
          },
          {
            "sp_pt": "",
            "text_pt": "os céus, os espíritos celestes e os serafins Vos aclamam,"
          },
          {
            "sp_pt": "",
            "text_pt": "unidos em eterna exultação."
          },
          {
            "sp_pt": "",
            "text_pt": "Permiti que nos associemos às suas vozes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamando (cantando) humildemente o vosso louvor:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO I DOS APÓSTOLOS"
          },
          {
            "sp_pt": "",
            "text_pt": "Os apóstolos, pastores do povo de Deus"
          },
          {
            "sp_pt": "",
            "text_pt": "64. Este prefácio diz-se nas Missas dos Apóstolos, especialmente de são Pedro"
          },
          {
            "sp_pt": "",
            "text_pt": "e são Paulo."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Porque Vós, Pastor eterno,"
          },
          {
            "sp_pt": "",
            "text_pt": "não abandonais o vosso rebanho,"
          },
          {
            "sp_pt": "",
            "text_pt": "mas sempre o guardais e protegeis,"
          },
          {
            "sp_pt": "",
            "text_pt": "por meio dos santos apóstolos,"
          },
          {
            "sp_pt": "",
            "text_pt": "para que seja conduzido, através dos tempos,"
          },
          {
            "sp_pt": "",
            "text_pt": "pelos mesmos chefes que pusestes à sua frente,"
          },
          {
            "sp_pt": "",
            "text_pt": "como representantes do vosso Filho, Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Ele, com os anjos e os arcanjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "os tronos e as dominações"
          },
          {
            "sp_pt": "",
            "text_pt": "e todos os coros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO II DOS APÓSTOLOS"
          },
          {
            "sp_pt": "",
            "text_pt": "O fundamento apostólico e o testemunho"
          },
          {
            "sp_pt": "",
            "text_pt": "65. Este prefácio diz-se nas Missas dos Apóstolos e dos Evangelistas."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Vós fundastes a Igreja"
          },
          {
            "sp_pt": "",
            "text_pt": "sobre o alicerce dos apóstolos,"
          },
          {
            "sp_pt": "",
            "text_pt": "para que seja, na terra, através dos tempos,"
          },
          {
            "sp_pt": "",
            "text_pt": "o sinal vivo da vossa santidade"
          },
          {
            "sp_pt": "",
            "text_pt": "e anuncie a todos os povos"
          },
          {
            "sp_pt": "",
            "text_pt": "o Evangelho do reino dos céus."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, agora e para sempre,"
          },
          {
            "sp_pt": "",
            "text_pt": "com todos os coros dos anjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO I DOS SANTOS"
          },
          {
            "sp_pt": "",
            "text_pt": "A glória dos santos"
          },
          {
            "sp_pt": "",
            "text_pt": "66. Este prefácio diz-se nas Missas de Todos os Santos, dos santos padroeiros"
          },
          {
            "sp_pt": "",
            "text_pt": "e titulares das igrejas e nas solenidades e festas dos santos que não têm prefácio"
          },
          {
            "sp_pt": "",
            "text_pt": "próprio. Pode dizer-se também nas memórias dos santos."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Vós sois glorificado na assembleia dos santos"
          },
          {
            "sp_pt": "",
            "text_pt": "e, ao coroar os seus méritos,"
          },
          {
            "sp_pt": "",
            "text_pt": "coroais os vossos próprios dons."
          },
          {
            "sp_pt": "",
            "text_pt": "Na sua vida, dais-nos um exemplo;"
          },
          {
            "sp_pt": "",
            "text_pt": "na comunhão com eles uma família"
          },
          {
            "sp_pt": "",
            "text_pt": "e, na sua intercessão um auxílio,"
          },
          {
            "sp_pt": "",
            "text_pt": "para que, confirmados por tão grandes testemunhas,"
          },
          {
            "sp_pt": "",
            "text_pt": "possamos vencer o bom combate da fé"
          },
          {
            "sp_pt": "",
            "text_pt": "e receber, com eles, a eterna coroa de glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Ele, com os anjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "os arcanjos e todos os santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO II DOS SANTOS"
          },
          {
            "sp_pt": "",
            "text_pt": "A ação dos santos"
          },
          {
            "sp_pt": "",
            "text_pt": "67. Este prefácio diz-se nas Missas de Todos os Santos, dos santos padroeiros e"
          },
          {
            "sp_pt": "",
            "text_pt": "titulares das igrejas, bem como nas solenidades e festas dos santos que não têm"
          },
          {
            "sp_pt": "",
            "text_pt": "prefácio próprio. Pode dizer-se também nas memórias dos santos."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Pelo testemunho admirável dos santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "aumentais e fortaleceis sempre a vossa Igreja"
          },
          {
            "sp_pt": "",
            "text_pt": "e nos dais provas evidentes do vosso amor."
          },
          {
            "sp_pt": "",
            "text_pt": "O exemplo dos santos nos estimula"
          },
          {
            "sp_pt": "",
            "text_pt": "e a sua intercessão nos ajuda"
          },
          {
            "sp_pt": "",
            "text_pt": "a celebrar os mistérios da salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e todos os santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) com alegria:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO I DOS SANTOS MÁRTIRES"
          },
          {
            "sp_pt": "",
            "text_pt": "O sinal e o exemplo do martírio"
          },
          {
            "sp_pt": "",
            "text_pt": "68. Este prefácio diz-se nas solenidades e festas dos santos mártires. Pode dizer-se"
          },
          {
            "sp_pt": "",
            "text_pt": "também nas suas memórias."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "À imitação de Cristo, vosso Filho,"
          },
          {
            "sp_pt": "",
            "text_pt": "o sangue do(a) glorioso(a) mártir são (santo/a) N.,"
          },
          {
            "sp_pt": "",
            "text_pt": "derramado pela confissão do vosso nome,"
          },
          {
            "sp_pt": "",
            "text_pt": "manifesta as maravilhas do vosso poder."
          },
          {
            "sp_pt": "",
            "text_pt": "No seu martírio, Senhor,"
          },
          {
            "sp_pt": "",
            "text_pt": "tirais força da fraqueza"
          },
          {
            "sp_pt": "",
            "text_pt": "e fazeis da fragilidade humana"
          },
          {
            "sp_pt": "",
            "text_pt": "o testemunho da vossa grandeza,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Ele, com os coros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos, na terra, a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz."
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO II DOS SANTOS MÁRTIRES"
          },
          {
            "sp_pt": "",
            "text_pt": "As maravilhas de Deus na vitória dos mártires"
          },
          {
            "sp_pt": "",
            "text_pt": "69. Este prefácio diz-se nas solenidades e festas dos santos mártires. Pode dizer-se"
          },
          {
            "sp_pt": "",
            "text_pt": "também nas suas memórias."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Vós sois glorificado no louvor dos vossos santos"
          },
          {
            "sp_pt": "",
            "text_pt": "e tudo o que veneramos no seu glorioso martírio"
          },
          {
            "sp_pt": "",
            "text_pt": "é obra do vosso poder admirável:"
          },
          {
            "sp_pt": "",
            "text_pt": "de Vós procede o ardor da sua fé,"
          },
          {
            "sp_pt": "",
            "text_pt": "a firmeza da sua perseverança"
          },
          {
            "sp_pt": "",
            "text_pt": "e o triunfo no seu combate,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Ele, todas as criaturas, no céu e na terra,"
          },
          {
            "sp_pt": "",
            "text_pt": "Vos adoram, cantando um cântico novo."
          },
          {
            "sp_pt": "",
            "text_pt": "E também nós, com todos os coros dos anjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO DOS SANTOS PASTORES DA IGREJA"
          },
          {
            "sp_pt": "",
            "text_pt": "A presença dos santos pastores na Igreja"
          },
          {
            "sp_pt": "",
            "text_pt": "70. Este prefácio diz-se nas solenidades e festas dos santos pastores da Igreja."
          },
          {
            "sp_pt": "",
            "text_pt": "Pode dizer-se também nas suas memórias."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Ao celebrar hoje a memória ( festa) de são N.,"
          },
          {
            "sp_pt": "",
            "text_pt": "a vossa Igreja exulta de alegria,"
          },
          {
            "sp_pt": "",
            "text_pt": "porque a fortaleceis com o exemplo da sua vida,"
          },
          {
            "sp_pt": "",
            "text_pt": "a instruís com a sua palavra"
          },
          {
            "sp_pt": "",
            "text_pt": "e a protegeis com a sua intercessão."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e os santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO DAS SANTAS VIRGENS"
          },
          {
            "rubric_pt": "E DOS SANTOS RELIGIOSOS"
          },
          {
            "sp_pt": "",
            "text_pt": "O sinal da vida consagrada a Deus"
          },
          {
            "sp_pt": "",
            "text_pt": "71. Este prefácio diz-se nas solenidades e festas das santas virgens e dos santos"
          },
          {
            "sp_pt": "",
            "text_pt": "religiosos. Pode dizer-se também nas suas memórias."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Ao recordar os santos"
          },
          {
            "sp_pt": "",
            "text_pt": "que, por amor do reino dos céus,"
          },
          {
            "sp_pt": "",
            "text_pt": "se consagraram a Cristo, vosso Filho,"
          },
          {
            "sp_pt": "",
            "text_pt": "celebramos a vossa admirável providência."
          },
          {
            "sp_pt": "",
            "text_pt": "Neles restituís ao homem a santidade original"
          },
          {
            "sp_pt": "",
            "text_pt": "e nos fazeis saborear, na terra,"
          },
          {
            "sp_pt": "",
            "text_pt": "os dons que reservastes para a vida futura."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e os santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO COMUM I"
          },
          {
            "sp_pt": "",
            "text_pt": "A instauração do universo em Cristo"
          },
          {
            "sp_pt": "",
            "text_pt": "72. Este prefácio diz-se nas Missas que não têm prefácio próprio, nem exigem"
          },
          {
            "sp_pt": "",
            "text_pt": "o prefácio do Tempo."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "N’Ele quisestes instaurar todas as coisas"
          },
          {
            "sp_pt": "",
            "text_pt": "e a todos destes a graça de participar da sua plenitude."
          },
          {
            "sp_pt": "",
            "text_pt": "Sendo Ele de condição divina,"
          },
          {
            "sp_pt": "",
            "text_pt": "aniquilou-Se a Si próprio"
          },
          {
            "sp_pt": "",
            "text_pt": "e, pelo sangue derramado na cruz,"
          },
          {
            "sp_pt": "",
            "text_pt": "deu a paz a todo o universo."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso foi exaltado sobre todas as criaturas"
          },
          {
            "sp_pt": "",
            "text_pt": "e tornou-Se, para todos os que Lhe obedecem,"
          },
          {
            "sp_pt": "",
            "text_pt": "fonte de salvação eterna."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Ele, com os anjos e os arcanjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "os tronos e as dominações"
          },
          {
            "sp_pt": "",
            "text_pt": "e todos os coros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO COMUM II"
          },
          {
            "sp_pt": "",
            "text_pt": "A salvação por Cristo"
          },
          {
            "sp_pt": "",
            "text_pt": "73. Este prefácio diz-se nas Missas que não têm prefácio próprio, nem exigem"
          },
          {
            "sp_pt": "",
            "text_pt": "o prefácio do Tempo."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Por amor criastes o homem"
          },
          {
            "sp_pt": "",
            "text_pt": "e, embora justamente condenado,"
          },
          {
            "sp_pt": "",
            "text_pt": "em vossa misericórdia, o salvastes,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Ele, os anjos louvam a vossa majestade,"
          },
          {
            "sp_pt": "",
            "text_pt": "as dominações Vos adoram,"
          },
          {
            "sp_pt": "",
            "text_pt": "as potestades Vos reverenciam;"
          },
          {
            "sp_pt": "",
            "text_pt": "os céus, os espíritos celestes"
          },
          {
            "sp_pt": "",
            "text_pt": "e os serafins Vos aclamam,"
          },
          {
            "sp_pt": "",
            "text_pt": "unidos em eterna exultação."
          },
          {
            "sp_pt": "",
            "text_pt": "Permiti que nos associemos às suas vozes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamando (cantando) humildemente o vosso louvor:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO COMUM III"
          },
          {
            "sp_pt": "",
            "text_pt": "Louvor a Deus pela criação e renovação do homem"
          },
          {
            "sp_pt": "",
            "text_pt": "74. Este prefácio diz-se nas Missas que não têm prefácio próprio, nem exigem"
          },
          {
            "sp_pt": "",
            "text_pt": "o prefácio do Tempo."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Pelo vosso Filho muito amado,"
          },
          {
            "sp_pt": "",
            "text_pt": "criastes o género humano"
          },
          {
            "sp_pt": "",
            "text_pt": "e por vossa bondade o renovastes."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, Vos servem todas as criaturas,"
          },
          {
            "sp_pt": "",
            "text_pt": "Vos louvam todos os redimidos"
          },
          {
            "sp_pt": "",
            "text_pt": "e Vos aclamam os anjos e todos os santos."
          },
          {
            "sp_pt": "",
            "text_pt": "Com eles, também nós proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) com alegria:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO COMUM IV"
          },
          {
            "sp_pt": "",
            "text_pt": "O louvor é um dom de Deus"
          },
          {
            "sp_pt": "",
            "text_pt": "75. Este prefácio diz-se nas Missas que não têm prefácio próprio, nem exigem"
          },
          {
            "sp_pt": "",
            "text_pt": "o prefácio do Tempo."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Vós não precisais dos nossos louvores"
          },
          {
            "sp_pt": "",
            "text_pt": "e poder glorificar-Vos é dom da vossa bondade;"
          },
          {
            "sp_pt": "",
            "text_pt": "porque os nossos hinos de bênção,"
          },
          {
            "sp_pt": "",
            "text_pt": "nada aumentando à vossa infinita grandeza,"
          },
          {
            "sp_pt": "",
            "text_pt": "alcançam-nos a graça da salvação,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Ele, com todos os coros dos anjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) com alegria:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO COMUM V"
          },
          {
            "sp_pt": "",
            "text_pt": "Proclamação do mistério de Cristo"
          },
          {
            "sp_pt": "",
            "text_pt": "76. Este prefácio diz-se nas Missas que não têm prefácio próprio, nem exigem"
          },
          {
            "sp_pt": "",
            "text_pt": "o prefácio do Tempo."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Unidos na caridade,"
          },
          {
            "sp_pt": "",
            "text_pt": "celebramos a sua morte;"
          },
          {
            "sp_pt": "",
            "text_pt": "com fé viva,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a sua ressurreição;"
          },
          {
            "sp_pt": "",
            "text_pt": "com ardente esperança,"
          },
          {
            "sp_pt": "",
            "text_pt": "aguardamos a sua vinda gloriosa."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e os santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO COMUM VI"
          },
          {
            "sp_pt": "",
            "text_pt": "O mistério da salvação em Cristo"
          },
          {
            "sp_pt": "",
            "text_pt": "77. Este prefácio diz-se nas Missas que não têm prefácio próprio, nem exigem"
          },
          {
            "sp_pt": "",
            "text_pt": "o prefácio do Tempo."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte"
          },
          {
            "sp_pt": "",
            "text_pt": "por Jesus Cristo, vosso amado Filho."
          },
          {
            "sp_pt": "",
            "text_pt": "Ele é a vossa palavra, por quem tudo criastes."
          },
          {
            "sp_pt": "",
            "text_pt": "Enviado por Vós, como Salvador e Redentor,"
          },
          {
            "sp_pt": "",
            "text_pt": "fez-Se homem pelo poder do Espírito Santo"
          },
          {
            "sp_pt": "",
            "text_pt": "e nasceu da Virgem Maria."
          },
          {
            "sp_pt": "",
            "text_pt": "Para cumprir a vossa vontade"
          },
          {
            "sp_pt": "",
            "text_pt": "e adquirir para Vós um povo santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "estendeu os braços e morreu na cruz;"
          },
          {
            "sp_pt": "",
            "text_pt": "e, destruindo assim a morte,"
          },
          {
            "sp_pt": "",
            "text_pt": "manifestou a vitória da ressurreição."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e todos os santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO COMUM VII"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, hóspede e peregrino no meio de nós"
          },
          {
            "sp_pt": "",
            "text_pt": "77 a. Este prefácio diz-se nas Missas que não têm prefácio próprio, nem exigem"
          },
          {
            "sp_pt": "",
            "text_pt": "o prefácio do Tempo."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus da aliança e da paz,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Vós chamastes e fizestes sair Abraão da sua terra"
          },
          {
            "sp_pt": "",
            "text_pt": "para o constituir pai de todas as nações."
          },
          {
            "sp_pt": "",
            "text_pt": "Suscitastes Moisés para libertar o vosso povo"
          },
          {
            "sp_pt": "",
            "text_pt": "e conduzi-lo à terra prometida."
          },
          {
            "sp_pt": "",
            "text_pt": "Na plenitude dos tempos, enviastes o vosso Filho,"
          },
          {
            "sp_pt": "",
            "text_pt": "hóspede e peregrino no meio de nós,"
          },
          {
            "sp_pt": "",
            "text_pt": "para nos redimir do pecado e da morte,"
          },
          {
            "sp_pt": "",
            "text_pt": "e destes ao mundo o vosso Espírito,"
          },
          {
            "sp_pt": "",
            "text_pt": "para fazer de todas as nações um só povo,"
          },
          {
            "sp_pt": "",
            "text_pt": "que caminha para o vosso reino"
          },
          {
            "sp_pt": "",
            "text_pt": "na liberdade dos filhos de Deus,"
          },
          {
            "sp_pt": "",
            "text_pt": "segundo o mandamento novo do amor."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e os santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO COMUM VIII"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, o bom samaritano"
          },
          {
            "sp_pt": "",
            "text_pt": "77 b. Este prefácio diz-se nas Missas que não têm prefácio próprio, nem exigem"
          },
          {
            "sp_pt": "",
            "text_pt": "o prefácio do Tempo."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "louvar-Vos e dar-Vos graças,"
          },
          {
            "sp_pt": "",
            "text_pt": "em todos os momentos da nossa vida,"
          },
          {
            "sp_pt": "",
            "text_pt": "na saúde e na doença, no sofrimento e na alegria,"
          },
          {
            "sp_pt": "",
            "text_pt": "por Cristo, vosso servo e nosso Redentor."
          },
          {
            "sp_pt": "",
            "text_pt": "Na sua vida mortal, Ele passou fazendo o bem"
          },
          {
            "sp_pt": "",
            "text_pt": "e socorrendo todos os que eram prisioneiros do mal."
          },
          {
            "sp_pt": "",
            "text_pt": "Ainda hoje, como bom samaritano,"
          },
          {
            "sp_pt": "",
            "text_pt": "vem ao encontro de todos os homens,"
          },
          {
            "sp_pt": "",
            "text_pt": "atribulados no corpo ou no espírito,"
          },
          {
            "sp_pt": "",
            "text_pt": "e derrama sobre as suas feridas"
          },
          {
            "sp_pt": "",
            "text_pt": "o óleo da consolação e o vinho da esperança."
          },
          {
            "sp_pt": "",
            "text_pt": "Por este dom da vossa graça,"
          },
          {
            "sp_pt": "",
            "text_pt": "também a noite da dor se abre à luz pascal"
          },
          {
            "sp_pt": "",
            "text_pt": "do vosso Filho crucificado e ressuscitado."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e os santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO COMUM IX"
          },
          {
            "sp_pt": "",
            "text_pt": "A glória de Deus é o homem vivo"
          },
          {
            "sp_pt": "",
            "text_pt": "77 c. Este prefácio diz-se nas Missas que não têm prefácio próprio, nem exigem"
          },
          {
            "sp_pt": "",
            "text_pt": "o prefácio do Tempo."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "louvar-Vos e dar-Vos graças,"
          },
          {
            "sp_pt": "",
            "text_pt": "sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "Vós sois o único Deus vivo e verdadeiro"
          },
          {
            "sp_pt": "",
            "text_pt": "e estais presente em todo o universo;"
          },
          {
            "sp_pt": "",
            "text_pt": "mas foi sobretudo no homem,"
          },
          {
            "sp_pt": "",
            "text_pt": "criado à vossa imagem,"
          },
          {
            "sp_pt": "",
            "text_pt": "que imprimistes o sinal da vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Vós o chamais a colaborar,"
          },
          {
            "sp_pt": "",
            "text_pt": "com o trabalho de cada dia,"
          },
          {
            "sp_pt": "",
            "text_pt": "no projeto da criação,"
          },
          {
            "sp_pt": "",
            "text_pt": "e lhe dais o vosso Espírito,"
          },
          {
            "sp_pt": "",
            "text_pt": "para que, em Cristo, homem novo,"
          },
          {
            "sp_pt": "",
            "text_pt": "se torne construtor da justiça e da paz."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e os santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) com alegria:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO I DOS DEFUNTOS"
          },
          {
            "sp_pt": "",
            "text_pt": "A esperança da ressurreição em Cristo"
          },
          {
            "sp_pt": "",
            "text_pt": "78. Este prefácio diz-se nas Missas de defuntos."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "N’Ele brilhou para nós a esperança da feliz ressurreição"
          },
          {
            "sp_pt": "",
            "text_pt": "e, se a certeza da morte nos entristece,"
          },
          {
            "sp_pt": "",
            "text_pt": "conforta-nos a promessa da imortalidade."
          },
          {
            "sp_pt": "",
            "text_pt": "Para os que creem em Vós, Senhor,"
          },
          {
            "sp_pt": "",
            "text_pt": "a vida não acaba, apenas se transforma"
          },
          {
            "sp_pt": "",
            "text_pt": "e, desfeita a morada deste exílio terrestre,"
          },
          {
            "sp_pt": "",
            "text_pt": "adquirimos no céu uma habitação eterna."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e os arcanjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "os tronos e as dominações"
          },
          {
            "sp_pt": "",
            "text_pt": "e todos os coros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO II DOS DEFUNTOS"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo morreu pela nossa vida"
          },
          {
            "sp_pt": "",
            "text_pt": "79. Este prefácio diz-se nas Missas de defuntos."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Tomando sobre Si a nossa morte,"
          },
          {
            "sp_pt": "",
            "text_pt": "Ele livrou-nos da morte eterna;"
          },
          {
            "sp_pt": "",
            "text_pt": "oferecendo por nós a sua vida,"
          },
          {
            "sp_pt": "",
            "text_pt": "abriu-nos as portas da vida imortal."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com todos os coros dos anjos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) com alegria:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO III DOS DEFUNTOS"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, salvação e vida"
          },
          {
            "sp_pt": "",
            "text_pt": "80. Este prefácio diz-se nas Missas de defuntos."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte,"
          },
          {
            "sp_pt": "",
            "text_pt": "por nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "Ele é a salvação do mundo,"
          },
          {
            "sp_pt": "",
            "text_pt": "a vida dos homens"
          },
          {
            "sp_pt": "",
            "text_pt": "e a ressurreição dos mortos."
          },
          {
            "sp_pt": "",
            "text_pt": "Por Ele, a multidão dos anjos"
          },
          {
            "sp_pt": "",
            "text_pt": "adora a vossa majestade"
          },
          {
            "sp_pt": "",
            "text_pt": "e exulta eternamente na vossa presença."
          },
          {
            "sp_pt": "",
            "text_pt": "Permiti que nos associemos às suas vozes,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) com alegria:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO IV DOS DEFUNTOS"
          },
          {
            "sp_pt": "",
            "text_pt": "Da vida terrena à glória celeste"
          },
          {
            "sp_pt": "",
            "text_pt": "81. Este prefácio diz-se nas Missas de defuntos."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "A vossa vontade nos chama à vida"
          },
          {
            "sp_pt": "",
            "text_pt": "e a vossa providência nos governa."
          },
          {
            "sp_pt": "",
            "text_pt": "Se, por vossa ordem, devido ao pecado,"
          },
          {
            "sp_pt": "",
            "text_pt": "voltamos à terra de onde fomos tirados,"
          },
          {
            "sp_pt": "",
            "text_pt": "pela morte redentora do vosso Filho,"
          },
          {
            "sp_pt": "",
            "text_pt": "o vosso poder nos desperta,"
          },
          {
            "sp_pt": "",
            "text_pt": "para tomar parte na ressurreição gloriosa."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os anjos e os santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "rubric_pt": "PREFÁCIO V DOS DEFUNTOS"
          },
          {
            "sp_pt": "",
            "text_pt": "A nossa ressurreição pela vitória de Cristo"
          },
          {
            "sp_pt": "",
            "text_pt": "82. Este prefácio diz-se nas Missas de defuntos."
          },
          {
            "sp_pt": "",
            "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
          },
          {
            "sp_pt": "",
            "text_pt": "R. É nosso dever, é nossa salvação."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
          },
          {
            "sp_pt": "",
            "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "dar-Vos graças, sempre e em toda a parte."
          },
          {
            "sp_pt": "",
            "text_pt": "A morte é a nossa herança comum,"
          },
          {
            "sp_pt": "",
            "text_pt": "mas, pelo dom maravilhoso da vossa bondade,"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, com a sua vitória, nos redime da morte"
          },
          {
            "sp_pt": "",
            "text_pt": "e nos chama a tomar parte na sua vida gloriosa."
          },
          {
            "sp_pt": "",
            "text_pt": "Por isso, com os coros celestes,"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamamos, na terra, a vossa glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "dizendo (cantando) numa só voz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo, Santo, Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor Deus do universo."
          },
          {
            "sp_pt": "",
            "text_pt": "O céu e a terra proclamam a vossa glória."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          },
          {
            "sp_pt": "",
            "text_pt": "Bendito O que vem em nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Hossana nas alturas."
          }
        ]
      }
    },
    "sanctus": [
      {
        "sp_pt": "Todos",
        "text_pt": "Santo, Santo, Santo,"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor Deus do universo."
      },
      {
        "sp_pt": "",
        "text_pt": "O céu e a terra proclamam a vossa glória."
      },
      {
        "sp_pt": "",
        "text_pt": "Hossana nas alturas."
      },
      {
        "sp_pt": "",
        "text_pt": "Bendito O que vem em nome do Senhor."
      },
      {
        "sp_pt": "",
        "text_pt": "Hossana nas alturas."
      }
    ],
    "forms": {
      "1": [
        {
          "rubric_pt": "OU CÂNONE ROMANO"
        },
        {
          "sp_pt": "",
          "text_pt": "83. Na Oração eucarística I, ou Cânone romano, podem omitir-se as partes que"
        },
        {
          "sp_pt": "",
          "text_pt": "aparecem entre parêntesis."
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal:"
        },
        {
          "sp_pt": "",
          "text_pt": "84. O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Pai de infinita misericórdia,"
        },
        {
          "sp_pt": "",
          "text_pt": "humildemente Vos suplicamos,"
        },
        {
          "sp_pt": "",
          "text_pt": "por Jesus Cristo, vosso Filho, nosso Senhor."
        },
        {
          "sp_pt": "",
          "text_pt": "Junta as mãos e diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "que Vos digneis aceitar"
        },
        {
          "sp_pt": "",
          "text_pt": "Traça o sinal da cruz, uma só vez, simultaneamente sobre o pão e o cálice, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "e abençoar + estes dons,"
        },
        {
          "sp_pt": "",
          "text_pt": "esta oblação pura e santa."
        },
        {
          "sp_pt": "",
          "text_pt": "De braços abertos continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "Nós Vo-la oferecemos pela vossa Igreja santa e católica:"
        },
        {
          "sp_pt": "",
          "text_pt": "dai-lhe a paz e congregai-a na unidade,"
        },
        {
          "sp_pt": "",
          "text_pt": "defendei-a e governai-a em toda a terra,"
        },
        {
          "sp_pt": "",
          "text_pt": "em comunhão com o vosso servo, o nosso papa N.,"
        },
        {
          "sp_pt": "",
          "text_pt": "o nosso bispo N."
        },
        {
          "rubric_pt": "O bispo, quando celebra na sua diocese, diz:"
        },
        {
          "sp_pt": "Bispo",
          "text_pt": "e comigo, vosso indigno servo,"
        },
        {
          "rubric_pt": "O bispo, quando celebra fora da sua diocese, diz:"
        },
        {
          "sp_pt": "Bispo",
          "text_pt": "e com o meu irmão N. (os meus irmãos), bispo(s) desta Igreja,"
        },
        {
          "sp_pt": "",
          "text_pt": "e comigo, vosso indigno servo,"
        },
        {
          "sp_pt": "",
          "text_pt": "Pode fazer-se menção do bispo coadjutor ou dos bispos auxiliares:"
        },
        {
          "sp_pt": "",
          "text_pt": "o nosso bispo coadjutor (ou auxiliar) N."
        },
        {
          "rubric_pt": "Ou:"
        },
        {
          "sp_pt": "",
          "text_pt": "os nossos bispos auxiliares,"
        },
        {
          "sp_pt": "",
          "text_pt": "e todos os bispos que são fiéis à verdade"
        },
        {
          "sp_pt": "",
          "text_pt": "e professam a fé católica e apostólica."
        },
        {
          "rubric_pt": "85. COMEMORAÇÃO DOS VIVOS"
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal ou concelebrante [1]:"
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-Vos, Senhor,"
        },
        {
          "sp_pt": "",
          "text_pt": "dos vossos servos e servas N. e N."
        },
        {
          "sp_pt": "",
          "text_pt": "Junta as mãos e ora alguns momentos por aqueles que quer recordar."
        },
        {
          "rubric_pt": "Depois, de braços abertos, continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "e de todos os que estão aqui presentes,"
        },
        {
          "sp_pt": "",
          "text_pt": "cuja fé e dedicação ao vosso serviço bem conheceis."
        },
        {
          "sp_pt": "",
          "text_pt": "Por eles nós Vos oferecemos"
        },
        {
          "sp_pt": "",
          "text_pt": "e também eles Vos oferecem este sacrifício de louvor,"
        },
        {
          "sp_pt": "",
          "text_pt": "por si e por todos os seus,"
        },
        {
          "sp_pt": "",
          "text_pt": "pela redenção das suas almas,"
        },
        {
          "sp_pt": "",
          "text_pt": "para a salvação e segurança que esperam,"
        },
        {
          "sp_pt": "",
          "text_pt": "ó Deus eterno, vivo e verdadeiro."
        },
        {
          "rubric_pt": "86. COMEMORAÇÃO DOS SANTOS"
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal ou concelebrante [2]:"
        },
        {
          "sp_pt": "",
          "text_pt": "Em comunhão com toda a Igreja,"
        },
        {
          "sp_pt": "",
          "text_pt": "Domingos:"
        },
        {
          "sp_pt": "",
          "text_pt": "ao celebrarmos o primeiro dia da semana, em que nosso Senhor"
        },
        {
          "sp_pt": "",
          "text_pt": "Jesus Cristo ressuscitou dos mortos,"
        },
        {
          "sp_pt": "",
          "text_pt": "Natal do Senhor e sua oitava:"
        },
        {
          "sp_pt": "",
          "text_pt": "ao celebrarmos o dia santíssimo (a noite santíssima), em que a"
        },
        {
          "sp_pt": "",
          "text_pt": "Imaculada Virgem Maria deu à luz o Salvador do mundo,"
        },
        {
          "sp_pt": "",
          "text_pt": "Epifania do Senhor:"
        },
        {
          "sp_pt": "",
          "text_pt": "ao celebrarmos o dia santíssimo em que o vosso Filho unigénito,"
        },
        {
          "sp_pt": "",
          "text_pt": "eterno convosco na glória, Se manifestou visivelmente na realidade da nossa carne,"
        },
        {
          "sp_pt": "",
          "text_pt": "Quinta-Feira Santa:"
        },
        {
          "sp_pt": "",
          "text_pt": "ao celebrarmos o dia santíssimo em que nosso Senhor Jesus Cristo"
        },
        {
          "rubric_pt": "Se entregou por nós,"
        },
        {
          "sp_pt": "",
          "text_pt": "Vigília Pascal até ao Domingo II da Páscoa:"
        },
        {
          "sp_pt": "",
          "text_pt": "ao celebrarmos o dia santíssimo (a noite santíssima) da ressur -"
        },
        {
          "sp_pt": "",
          "text_pt": "reição de nosso Senhor Jesus Cristo segundo a carne,"
        },
        {
          "sp_pt": "",
          "text_pt": "Ascensão do Senhor:"
        },
        {
          "sp_pt": "",
          "text_pt": "ao celebrarmos o dia santíssimo em que nosso Senhor Jesus"
        },
        {
          "sp_pt": "",
          "text_pt": "Cristo, vosso Filho unigénito, colocou à direita da vossa glória a"
        },
        {
          "sp_pt": "",
          "text_pt": "nossa frágil natureza humana unida à sua divindade,"
        },
        {
          "sp_pt": "",
          "text_pt": "Pentecostes:"
        },
        {
          "sp_pt": "",
          "text_pt": "ao celebrarmos o dia santíssimo de Pentecostes, em que o Espírito"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo Se manifestou aos Apóstolos em numerosas línguas de fogo,"
        },
        {
          "sp_pt": "",
          "text_pt": "veneramos a memória da gloriosa sempre Virgem Maria,"
        },
        {
          "sp_pt": "",
          "text_pt": "Mãe do nosso Deus e Senhor, Jesus Cristo,"
        },
        {
          "sp_pt": "",
          "text_pt": "e também a de são José, seu esposo,"
        },
        {
          "sp_pt": "",
          "text_pt": "e a dos bem-aventurados apóstolos e mártires:"
        },
        {
          "sp_pt": "",
          "text_pt": "Pedro e Paulo, André,"
        },
        {
          "sp_pt": "",
          "text_pt": "(Tiago, João,"
        },
        {
          "sp_pt": "",
          "text_pt": "Tomé, Tiago, Filipe,"
        },
        {
          "sp_pt": "",
          "text_pt": "Bartolomeu, Mateus,"
        },
        {
          "sp_pt": "",
          "text_pt": "Simão e Tadeu;"
        },
        {
          "sp_pt": "",
          "text_pt": "Lino, Cleto, Clemente, Sixto,"
        },
        {
          "sp_pt": "",
          "text_pt": "Cornélio, Cipriano,"
        },
        {
          "sp_pt": "",
          "text_pt": "Lourenço, Crisógono,"
        },
        {
          "sp_pt": "",
          "text_pt": "João e Paulo,"
        },
        {
          "sp_pt": "",
          "text_pt": "Cosme e Damião)"
        },
        {
          "sp_pt": "",
          "text_pt": "e de todos os santos."
        },
        {
          "sp_pt": "",
          "text_pt": "Por seus méritos e orações,"
        },
        {
          "sp_pt": "",
          "text_pt": "concedei-nos, em tudo e sempre,"
        },
        {
          "sp_pt": "",
          "text_pt": "auxílio e proteção."
        },
        {
          "sp_pt": "",
          "text_pt": "(Por Cristo nosso Senhor. Amen.)"
        },
        {
          "sp_pt": "",
          "text_pt": "87. De braços abertos, continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal:"
        },
        {
          "sp_pt": "",
          "text_pt": "Aceitai benignamente, Senhor,"
        },
        {
          "sp_pt": "",
          "text_pt": "a oblação que nós, vossos servos,"
        },
        {
          "sp_pt": "",
          "text_pt": "com toda a vossa família, Vos apresentamos."
        },
        {
          "sp_pt": "",
          "text_pt": "Dai a paz aos nossos dias,"
        },
        {
          "sp_pt": "",
          "text_pt": "livrai-nos da condenação eterna"
        },
        {
          "sp_pt": "",
          "text_pt": "e contai-nos entre os vossos eleitos."
        },
        {
          "sp_pt": "",
          "text_pt": "Junta as mãos."
        },
        {
          "sp_pt": "",
          "text_pt": "(Por Cristo nosso Senhor. Amen.)"
        },
        {
          "sp_pt": "",
          "text_pt": "Vigília Pascal até ao Domingo II da Páscoa:"
        },
        {
          "sp_pt": "",
          "text_pt": "Aceitai benignamente, Senhor, a oblação que nós, vossos servos,"
        },
        {
          "sp_pt": "",
          "text_pt": "com toda a vossa família, V os apresentamos. Nós V o-la oferecemos"
        },
        {
          "sp_pt": "",
          "text_pt": "também por aqueles que fizestes renascer da água e do Espírito"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo, concedendo-lhes o perdão de todos os pecados. Dai a paz"
        },
        {
          "sp_pt": "",
          "text_pt": "aos nossos dias, livrai-nos da condenação eterna e contai-nos"
        },
        {
          "sp_pt": "",
          "text_pt": "entre os vossos eleitos. (Por Cristo nosso Senhor. Amen.)"
        },
        {
          "sp_pt": "",
          "text_pt": "88. Estendendo as mãos sobre as oblatas, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal e concelebrantes:"
        },
        {
          "sp_pt": "",
          "text_pt": "Santificai, Senhor, esta oblação"
        },
        {
          "sp_pt": "",
          "text_pt": "com o poder da vossa bênção"
        },
        {
          "sp_pt": "",
          "text_pt": "e recebei-a como sacrifício espiritual perfeito,"
        },
        {
          "sp_pt": "",
          "text_pt": "de modo que se converta para nós"
        },
        {
          "sp_pt": "",
          "text_pt": "no Corpo e Sangue de vosso amado Filho,"
        },
        {
          "sp_pt": "",
          "text_pt": "nosso Senhor Jesus Cristo."
        },
        {
          "sp_pt": "",
          "text_pt": "Junta as mãos."
        },
        {
          "sp_pt": "",
          "text_pt": "89. Nas fórmulas que se seguem, as palavras do Senhor devem pronunciar-se"
        },
        {
          "sp_pt": "",
          "text_pt": "clara e distintamente, como o requer a natureza das mesmas palavras."
        },
        {
          "sp_pt": "",
          "text_pt": "Na véspera da sua paixão,"
        },
        {
          "rubric_pt": "Toma o pão e, sustentando-o um pouco elevado sobre o altar, continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "Ele tomou o pão em suas santas e adoráveis mãos"
        },
        {
          "sp_pt": "",
          "text_pt": "Eleva os olhos."
        },
        {
          "sp_pt": "",
          "text_pt": "e, levantando os olhos ao céu"
        },
        {
          "sp_pt": "",
          "text_pt": "para Vós, Deus, seu Pai todo-poderoso,"
        },
        {
          "sp_pt": "",
          "text_pt": "dando graças Vos bendisse,"
        },
        {
          "sp_pt": "",
          "text_pt": "partiu-o e deu-o aos seus discípulos, dizendo:"
        },
        {
          "rubric_pt": "Inclina-se um pouco."
        },
        {
          "sp_pt": "",
          "text_pt": "Tomai, todos, e comei:"
        },
        {
          "sp_pt": "",
          "text_pt": "isto é o meu corpo,"
        },
        {
          "sp_pt": "",
          "text_pt": "que será entregue por vós."
        },
        {
          "rubric_pt": "Mostra ao povo a hóstia consagrada, coloca-a sobre a patena e genuflete em"
        },
        {
          "sp_pt": "",
          "text_pt": "adoração."
        },
        {
          "sp_pt": "",
          "text_pt": "90. Depois, continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "De igual modo, no fim da Ceia,"
        },
        {
          "rubric_pt": "Toma o cálice e, sustentando-o um pouco elevado sobre o altar, continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "tomou este sagrado cálice"
        },
        {
          "sp_pt": "",
          "text_pt": "em suas santas e adoráveis mãos,"
        },
        {
          "sp_pt": "",
          "text_pt": "dando graças Vos bendisse,"
        },
        {
          "sp_pt": "",
          "text_pt": "e deu-o aos seus discípulos, dizendo:"
        },
        {
          "rubric_pt": "Inclina-se um pouco."
        },
        {
          "sp_pt": "",
          "text_pt": "Tomai, todos, e bebei:"
        },
        {
          "sp_pt": "",
          "text_pt": "este é o cálice do meu sangue,"
        },
        {
          "sp_pt": "",
          "text_pt": "o sangue da nova e eterna aliança,"
        },
        {
          "sp_pt": "",
          "text_pt": "que será derramado por vós e por todos"
        },
        {
          "sp_pt": "",
          "text_pt": "para remissão dos pecados."
        },
        {
          "sp_pt": "",
          "text_pt": "Fazei isto em memória de mim."
        },
        {
          "rubric_pt": "Mostra ao povo o cálice, coloca-o sobre o corporal e genuflete em adoração."
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal:"
        },
        {
          "sp_pt": "",
          "text_pt": "91. Em seguida, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé!"
        },
        {
          "rubric_pt": "O povo aclama, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "Anunciamos, Senhor, a vossa morte,"
        },
        {
          "sp_pt": "",
          "text_pt": "proclamamos a vossa ressurreição."
        },
        {
          "sp_pt": "",
          "text_pt": "Vinde, Senhor Jesus!"
        },
        {
          "rubric_pt": "Ou:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério admirável da nossa fé!"
        },
        {
          "rubric_pt": "O povo aclama, dizendo:"
        },
        {
          "rubric_pt": "Quando comemos deste pão"
        },
        {
          "sp_pt": "",
          "text_pt": "e bebemos deste cálice,"
        },
        {
          "sp_pt": "",
          "text_pt": "anunciamos, Senhor, a vossa morte,"
        },
        {
          "sp_pt": "",
          "text_pt": "esperando a vossa vinda gloriosa."
        },
        {
          "rubric_pt": "Ou:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé para a salvação do mundo!"
        },
        {
          "rubric_pt": "O povo aclama, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "Glória a V ós, que morrestes na cruz"
        },
        {
          "sp_pt": "",
          "text_pt": "e agora viveis para sempre."
        },
        {
          "sp_pt": "",
          "text_pt": "Salvador do mundo, salvai-nos."
        },
        {
          "sp_pt": "",
          "text_pt": "Vinde, Senhor Jesus!"
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal e concelebrantes:"
        },
        {
          "sp_pt": "",
          "text_pt": "92. Em seguida, o sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrando agora, Senhor, o memorial"
        },
        {
          "sp_pt": "",
          "text_pt": "da bem-aventurada paixão de Jesus Cristo,"
        },
        {
          "sp_pt": "",
          "text_pt": "vosso Filho, nosso Senhor,"
        },
        {
          "sp_pt": "",
          "text_pt": "da sua ressurreição de entre os mortos"
        },
        {
          "sp_pt": "",
          "text_pt": "e da sua gloriosa ascensão aos céus,"
        },
        {
          "sp_pt": "",
          "text_pt": "nós, vossos servos, com o vosso povo santo,"
        },
        {
          "sp_pt": "",
          "text_pt": "dos próprios bens que nos destes"
        },
        {
          "sp_pt": "",
          "text_pt": "oferecemos à vossa divina majestade"
        },
        {
          "sp_pt": "",
          "text_pt": "o sacrifício perfeito, santo e imaculado,"
        },
        {
          "sp_pt": "",
          "text_pt": "o pão santo da vida eterna"
        },
        {
          "sp_pt": "",
          "text_pt": "e o cálice da eterna salvação."
        },
        {
          "sp_pt": "",
          "text_pt": "93. De braços abertos, continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "Olhai com benevolência e agrado para esta oferenda"
        },
        {
          "sp_pt": "",
          "text_pt": "e dignai-Vos aceitá-la,"
        },
        {
          "sp_pt": "",
          "text_pt": "como aceitastes os dons do justo Abel, vosso servo,"
        },
        {
          "sp_pt": "",
          "text_pt": "o sacrifício de Abraão, nosso pai na fé,"
        },
        {
          "sp_pt": "",
          "text_pt": "e a oblação pura e santa do sumo sacerdote Melquisedec."
        },
        {
          "sp_pt": "",
          "text_pt": "94. Inclinado e de mãos juntas, continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "Humildemente Vos suplicamos, Deus todo-poderoso,"
        },
        {
          "sp_pt": "",
          "text_pt": "que esta nossa oferenda"
        },
        {
          "sp_pt": "",
          "text_pt": "seja apresentada pelo vosso santo anjo no altar celeste,"
        },
        {
          "sp_pt": "",
          "text_pt": "diante da vossa divina majestade,"
        },
        {
          "sp_pt": "",
          "text_pt": "para que todos nós, participando deste altar,"
        },
        {
          "sp_pt": "",
          "text_pt": "pela comunhão do santíssimo Corpo e Sangue do vosso Filho,"
        },
        {
          "rubric_pt": "Ergue-se e, benzendo-se, continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "alcancemos a plenitude das bênçãos e graças do céu."
        },
        {
          "sp_pt": "",
          "text_pt": "Junta as mãos."
        },
        {
          "sp_pt": "",
          "text_pt": "(Por Cristo nosso Senhor. Amen.)"
        },
        {
          "rubric_pt": "95. COMEMORAÇÃO DOS DEFUNTOS"
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal ou concelebrante [3]:"
        },
        {
          "sp_pt": "",
          "text_pt": "De braços abertos diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-vos, Senhor, dos vossos servos e servas N. e N.,"
        },
        {
          "sp_pt": "",
          "text_pt": "que partiram antes de nós, marcados com o sinal da fé,"
        },
        {
          "sp_pt": "",
          "text_pt": "e agora dormem o sono da paz."
        },
        {
          "sp_pt": "",
          "text_pt": "Junta as mãos e ora uns momentos pelos defuntos que quer recordar."
        },
        {
          "rubric_pt": "Depois, de braços abertos, continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "Concedei-lhes, Senhor,"
        },
        {
          "sp_pt": "",
          "text_pt": "a eles e a todos os que descansam em Cristo,"
        },
        {
          "sp_pt": "",
          "text_pt": "o lugar da consolação, da luz e da paz."
        },
        {
          "sp_pt": "",
          "text_pt": "Junta as mãos."
        },
        {
          "sp_pt": "",
          "text_pt": "(Por Cristo nosso Senhor. Amen.)"
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal ou concelebrante [4]:"
        },
        {
          "sp_pt": "",
          "text_pt": "96. Bate com a mão direita no peito, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "E a nós, pecadores, vossos servos,"
        },
        {
          "sp_pt": "",
          "text_pt": "que esperamos na vossa infinita misericórdia,"
        },
        {
          "sp_pt": "",
          "text_pt": "De braços abertos continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "admiti-nos também na assembleia"
        },
        {
          "sp_pt": "",
          "text_pt": "dos bem-aventurados apóstolos e mártires:"
        },
        {
          "sp_pt": "",
          "text_pt": "João Batista, Estêvão,"
        },
        {
          "sp_pt": "",
          "text_pt": "Matias, Barnabé"
        },
        {
          "sp_pt": "",
          "text_pt": "(Inácio, Alexandre, Marcelino, Pedro,"
        },
        {
          "sp_pt": "",
          "text_pt": "Felicidade, Perpétua, Águeda, Luzia,"
        },
        {
          "sp_pt": "",
          "text_pt": "Inês, Cecília, Anastácia)"
        },
        {
          "sp_pt": "",
          "text_pt": "e de todos os santos."
        },
        {
          "sp_pt": "",
          "text_pt": "Recebei-nos em sua companhia,"
        },
        {
          "sp_pt": "",
          "text_pt": "não pelo valor dos nossos méritos,"
        },
        {
          "sp_pt": "",
          "text_pt": "mas segundo a grandeza do vosso perdão."
        },
        {
          "sp_pt": "",
          "text_pt": "Junta as mãos."
        },
        {
          "sp_pt": "",
          "text_pt": "(Por Cristo nosso Senhor. Amen.)"
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal:"
        },
        {
          "sp_pt": "",
          "text_pt": "97. E continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "Por nosso Senhor Jesus Cristo,"
        },
        {
          "sp_pt": "",
          "text_pt": "criais todos os bens e lhes dais vida,"
        },
        {
          "sp_pt": "",
          "text_pt": "os santificais, abençoais e distribuís por nós."
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal ou concelebrantes:"
        },
        {
          "sp_pt": "",
          "text_pt": "98. Toma o cálice e a patena com a hóstia e, elevando-os, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Por Cristo, com Cristo, em Cristo,"
        },
        {
          "sp_pt": "",
          "text_pt": "a Vós, Deus Pai todo-poderoso,"
        },
        {
          "sp_pt": "",
          "text_pt": "na unidade do Espírito Santo,"
        },
        {
          "sp_pt": "",
          "text_pt": "toda a honra e toda a glória,"
        },
        {
          "sp_pt": "",
          "text_pt": "por todos os séculos dos séculos."
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Amen."
        },
        {
          "rubric_pt": "Seguem-se os ritos da comunhão, p. 526."
        }
      ],
      "2": [
        {
          "sp_pt": "",
          "text_pt": "99. Esta Oração eucarística tem um prefácio próprio, que faz parte da sua estrutura."
        },
        {
          "sp_pt": "",
          "text_pt": "Podem usar-se também outros prefácios, especialmente aqueles que apresentam"
        },
        {
          "sp_pt": "",
          "text_pt": "em breve síntese o mistério da salvação."
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal:"
        },
        {
          "sp_pt": "",
          "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
        },
        {
          "sp_pt": "",
          "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
        },
        {
          "sp_pt": "",
          "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
        },
        {
          "sp_pt": "",
          "text_pt": "R. É nosso dever, é nossa salvação."
        },
        {
          "sp_pt": "",
          "text_pt": "Senhor, Pai santo, Deus eterno e omnipotente,"
        },
        {
          "sp_pt": "",
          "text_pt": "é verdadeiramente nosso dever, é nossa salvação"
        },
        {
          "sp_pt": "",
          "text_pt": "dar-Vos graças, sempre e em toda a parte,"
        },
        {
          "sp_pt": "",
          "text_pt": "por Jesus Cristo, vosso amado Filho."
        },
        {
          "sp_pt": "",
          "text_pt": "Ele é a vossa palavra, por quem tudo criastes."
        },
        {
          "sp_pt": "",
          "text_pt": "Enviado por Vós, como Salvador e Redentor,"
        },
        {
          "sp_pt": "",
          "text_pt": "fez-Se homem pelo poder do Espírito Santo"
        },
        {
          "sp_pt": "",
          "text_pt": "e nasceu da Virgem Maria."
        },
        {
          "sp_pt": "",
          "text_pt": "Para cumprir a vossa vontade"
        },
        {
          "sp_pt": "",
          "text_pt": "e adquirir para Vós um povo santo,"
        },
        {
          "sp_pt": "",
          "text_pt": "estendeu os braços e morreu na cruz;"
        },
        {
          "sp_pt": "",
          "text_pt": "e, destruindo assim a morte,"
        },
        {
          "sp_pt": "",
          "text_pt": "manifestou a vitória da ressurreição."
        },
        {
          "sp_pt": "",
          "text_pt": "Por isso, com os anjos e todos os santos,"
        },
        {
          "sp_pt": "",
          "text_pt": "proclamamos a vossa glória,"
        },
        {
          "sp_pt": "",
          "text_pt": "dizendo (cantando) numa só voz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo, Santo, Santo,"
        },
        {
          "sp_pt": "",
          "text_pt": "Senhor Deus do Universo."
        },
        {
          "sp_pt": "",
          "text_pt": "O céu e a terra proclamam a vossa glória."
        },
        {
          "sp_pt": "",
          "text_pt": "Hossana nas alturas."
        },
        {
          "sp_pt": "",
          "text_pt": "Bendito O que vem em nome do Senhor."
        },
        {
          "sp_pt": "",
          "text_pt": "Hossana nas alturas."
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal:"
        },
        {
          "sp_pt": "",
          "text_pt": "100. O sacerdote, de braços abertos, continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "Vós, Senhor, sois verdadeiramente santo,"
        },
        {
          "sp_pt": "",
          "text_pt": "sois a fonte de toda a santidade."
        },
        {
          "sp_pt": "",
          "text_pt": "Nos domingos e em outros dias solenes pode fazer-se a comemoração própria."
        },
        {
          "sp_pt": "",
          "text_pt": "Domingos:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o primeiro dia da semana, em que nosso Senhor Jesus Cristo ressuscitou"
        },
        {
          "sp_pt": "",
          "text_pt": "dos mortos, humildemente V os suplicamos:"
        },
        {
          "sp_pt": "",
          "text_pt": "Natal do Senhor e sua oitava:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos"
        },
        {
          "sp_pt": "",
          "text_pt": "o dia santíssimo (a noite santíssima) em que a Imaculada Virgem Maria deu"
        },
        {
          "sp_pt": "",
          "text_pt": "à luz o Salvador do mundo, humildemente V os suplicamos:"
        },
        {
          "sp_pt": "",
          "text_pt": "Epifania do Senhor:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos"
        },
        {
          "sp_pt": "",
          "text_pt": "o dia santíssimo em que o vosso Filho unigénito, eterno convosco na glória,"
        },
        {
          "rubric_pt": "Se manifestou visivelmente na realidade da nossa carne, humildemente V os"
        },
        {
          "sp_pt": "",
          "text_pt": "suplicamos:"
        },
        {
          "sp_pt": "",
          "text_pt": "Quinta-Feira Santa:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos"
        },
        {
          "sp_pt": "",
          "text_pt": "o dia santíssimo em que nosso Senhor Jesus Cristo Se entregou por nós,"
        },
        {
          "sp_pt": "",
          "text_pt": "humildemente V os suplicamos: Santificai estes dons, derramando sobre eles"
        },
        {
          "sp_pt": "",
          "text_pt": "o vosso Espírito, de modo que se convertam, para nós, no Corpo e + Sangue"
        },
        {
          "sp_pt": "",
          "text_pt": "de nosso Senhor Jesus Cristo. Hoje, na hora em que Ele Se entregava ..."
        },
        {
          "sp_pt": "",
          "text_pt": "Vigília Pascal até ao Domingo II da Páscoa:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia santíssimo (a noite santíssima) da ressurreição de nosso Senhor"
        },
        {
          "sp_pt": "",
          "text_pt": "Jesus Cristo segundo a carne, humildemente V os suplicamos:"
        },
        {
          "sp_pt": "",
          "text_pt": "Ascensão do Senhor:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos"
        },
        {
          "sp_pt": "",
          "text_pt": "o dia santíssimo em que nosso Senhor Jesus Cristo, vosso Filho unigénito,"
        },
        {
          "sp_pt": "",
          "text_pt": "colocou à direita da vossa glória a nossa frágil natureza humana unida à"
        },
        {
          "sp_pt": "",
          "text_pt": "sua divindade, humildemente V os suplicamos:"
        },
        {
          "sp_pt": "",
          "text_pt": "Pentecostes:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos"
        },
        {
          "sp_pt": "",
          "text_pt": "o dia santíssimo de Pentecostes, em que o Espírito Santo Se manifestou aos"
        },
        {
          "sp_pt": "",
          "text_pt": "Apóstolos em numerosas línguas de fogo, humildemente V os suplicamos:"
        },
        {
          "sp_pt": "",
          "text_pt": "Apresentação do Senhor:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia em que o vosso Filho unigénito foi apresentado no Templo,"
        },
        {
          "sp_pt": "",
          "text_pt": "humildemente V os suplicamos:"
        },
        {
          "sp_pt": "",
          "text_pt": "Anunciação do Senhor:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia em que a Virgem santa Maria concebeu o vosso Filho unigénito"
        },
        {
          "sp_pt": "",
          "text_pt": "pelo poder do Espírito Santo, humildemente V os suplicamos:"
        },
        {
          "sp_pt": "",
          "text_pt": "Nascimento de são João Batista:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia do nascimento de são João Batista, que preparou o caminho do"
        },
        {
          "sp_pt": "",
          "text_pt": "Salvador do mundo, humildemente V os suplicamos:"
        },
        {
          "sp_pt": "",
          "text_pt": "Assunção da Virgem santa Maria:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia em que santa Maria Mãe de Deus foi elevada à glória do céu,"
        },
        {
          "sp_pt": "",
          "text_pt": "humildemente V os suplicamos:"
        },
        {
          "sp_pt": "",
          "text_pt": "Natividade da Virgem santa Maria:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia do nascimento da Virgem santa Maria, escolhida desde toda a"
        },
        {
          "sp_pt": "",
          "text_pt": "eternidade para ser a Mãe do Redentor, humildemente V os suplicamos:"
        },
        {
          "sp_pt": "",
          "text_pt": "Dia de Todos os Santos:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos"
        },
        {
          "sp_pt": "",
          "text_pt": "o dia consagrado à memória de todos os santos, que durante a vida imitaram"
        },
        {
          "sp_pt": "",
          "text_pt": "a Cristo e na morte receberam d’Ele a coroa da glória, humildemente V os"
        },
        {
          "sp_pt": "",
          "text_pt": "suplicamos:"
        },
        {
          "sp_pt": "",
          "text_pt": "Imaculada Conceição da Virgem santa Maria:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos"
        },
        {
          "sp_pt": "",
          "text_pt": "o dia em que a Virgem Maria, escolhida para ser a Mãe do Redentor, foi"
        },
        {
          "sp_pt": "",
          "text_pt": "concebida sem mancha do pecado original, humildemente V os suplicamos:"
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal e concelebrantes:"
        },
        {
          "sp_pt": "",
          "text_pt": "101. Junta as mãos e, estendendo-as sobre as oblatas, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Santificai estes dons,"
        },
        {
          "sp_pt": "",
          "text_pt": "derramando sobre eles o vosso Espírito,"
        },
        {
          "sp_pt": "",
          "text_pt": "Junta as mãos e traça um único sinal da cruz sobre o pão e sobre o cálice, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "de modo que se convertam, para nós,"
        },
        {
          "sp_pt": "",
          "text_pt": "no Corpo e + Sangue de nosso Senhor Jesus Cristo."
        },
        {
          "sp_pt": "",
          "text_pt": "Junta as mãos."
        },
        {
          "sp_pt": "",
          "text_pt": "102. Nas fórmulas que se seguem, as palavras do Senhor devem pronunciar-se"
        },
        {
          "sp_pt": "",
          "text_pt": "distintamente, como o requer a natureza das mesmas palavras."
        },
        {
          "sp_pt": "",
          "text_pt": "Na hora em que Ele Se entregava,"
        },
        {
          "sp_pt": "",
          "text_pt": "para voluntariamente sofrer a morte,"
        },
        {
          "rubric_pt": "Toma o pão e, sustentando-o um pouco elevado sobre o altar, continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "tomou o pão e, dando graças, partiu-o"
        },
        {
          "sp_pt": "",
          "text_pt": "e deu-o aos seus discípulos, dizendo:"
        },
        {
          "rubric_pt": "Inclina-se um pouco."
        },
        {
          "sp_pt": "",
          "text_pt": "Tomai , todos , e comei :"
        },
        {
          "sp_pt": "",
          "text_pt": "isto é o meu corpo ,"
        },
        {
          "sp_pt": "",
          "text_pt": "que será entregue por vós."
        },
        {
          "rubric_pt": "Mostra ao povo a hóstia consagrada, coloca-a sobre a patena e genuflete em"
        },
        {
          "sp_pt": "",
          "text_pt": "adoração."
        },
        {
          "sp_pt": "",
          "text_pt": "103. Depois, continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "De igual modo, no fim da Ceia,"
        },
        {
          "rubric_pt": "Toma o cálice e, sustentando-o um pouco elevado sobre o altar, continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "tomou o cálice, de novo Vos deu graças"
        },
        {
          "sp_pt": "",
          "text_pt": "e deu-o aos seus discípulos, dizendo:"
        },
        {
          "rubric_pt": "Inclina-se um pouco."
        },
        {
          "sp_pt": "",
          "text_pt": "Tomai , todos , e bebei :"
        },
        {
          "sp_pt": "",
          "text_pt": "este é o cálice do meu sangue ,"
        },
        {
          "sp_pt": "",
          "text_pt": "o sangue da nova e eterna aliança ,"
        },
        {
          "sp_pt": "",
          "text_pt": "que será derramado por vós e por todos"
        },
        {
          "sp_pt": "",
          "text_pt": "para remissão dos pecados ."
        },
        {
          "sp_pt": "",
          "text_pt": "Fazei isto em memória de mim."
        },
        {
          "rubric_pt": "Mostra ao povo o cálice, coloca-o sobre o corporal e genuflete em adoração."
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal:"
        },
        {
          "sp_pt": "",
          "text_pt": "104. Em seguida, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé!"
        },
        {
          "rubric_pt": "O povo aclama, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "Anunciamos, Senhor, a vossa morte,"
        },
        {
          "sp_pt": "",
          "text_pt": "proclamamos a vossa ressurreição."
        },
        {
          "sp_pt": "",
          "text_pt": "Vinde, Senhor Jesus!"
        },
        {
          "rubric_pt": "Ou:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério admirável da nossa fé!"
        },
        {
          "rubric_pt": "O povo aclama, dizendo:"
        },
        {
          "rubric_pt": "Quando comemos deste pão"
        },
        {
          "sp_pt": "",
          "text_pt": "e bebemos deste cálice,"
        },
        {
          "sp_pt": "",
          "text_pt": "anunciamos, Senhor, a vossa morte,"
        },
        {
          "sp_pt": "",
          "text_pt": "esperando a vossa vinda gloriosa."
        },
        {
          "rubric_pt": "Ou:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé para a salvação do mundo!"
        },
        {
          "rubric_pt": "O povo aclama, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "Glória a V ós, que morrestes na cruz"
        },
        {
          "sp_pt": "",
          "text_pt": "e agora viveis para sempre."
        },
        {
          "sp_pt": "",
          "text_pt": "Salvador do mundo, salvai-nos."
        },
        {
          "sp_pt": "",
          "text_pt": "Vinde, Senhor Jesus!"
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal e concelebrantes:"
        },
        {
          "sp_pt": "",
          "text_pt": "105. Em seguida, o sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrando agora, Senhor,"
        },
        {
          "sp_pt": "",
          "text_pt": "o memorial da morte e ressurreição de vosso Filho,"
        },
        {
          "sp_pt": "",
          "text_pt": "nós Vos oferecemos o pão da vida e o cálice da salvação"
        },
        {
          "sp_pt": "",
          "text_pt": "e Vos damos graças, porque nos admitistes à vossa presença,"
        },
        {
          "sp_pt": "",
          "text_pt": "para Vos servir nestes santos mistérios."
        },
        {
          "sp_pt": "",
          "text_pt": "Humildemente Vos suplicamos"
        },
        {
          "sp_pt": "",
          "text_pt": "que, participando no Corpo e Sangue de Cristo,"
        },
        {
          "sp_pt": "",
          "text_pt": "sejamos reunidos, pelo Espírito Santo, num só corpo."
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal ou concelebrante [1]:"
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-Vos, Senhor, da vossa Igreja,"
        },
        {
          "sp_pt": "",
          "text_pt": "dispersa por toda a terra,"
        },
        {
          "sp_pt": "",
          "text_pt": "e tornai-a perfeita na caridade,"
        },
        {
          "sp_pt": "",
          "text_pt": "em comunhão com o nosso papa N.,"
        },
        {
          "sp_pt": "",
          "text_pt": "o nosso bispo N."
        },
        {
          "rubric_pt": "O bispo, quando celebra na sua diocese, diz:"
        },
        {
          "sp_pt": "Bispo",
          "text_pt": "e comigo, vosso indigno servo,"
        },
        {
          "rubric_pt": "O bispo, quando celebra fora da sua diocese, diz:"
        },
        {
          "sp_pt": "Bispo",
          "text_pt": "e com o meu irmão N. (os meus irmãos), bispo(s) desta Igreja,"
        },
        {
          "sp_pt": "",
          "text_pt": "e comigo, vosso indigno servo,"
        },
        {
          "sp_pt": "",
          "text_pt": "Pode fazer-se menção do bispo coadjutor ou dos bispos auxiliares:"
        },
        {
          "sp_pt": "",
          "text_pt": "o nosso bispo coadjutor (ou auxiliar) N."
        },
        {
          "rubric_pt": "Ou:"
        },
        {
          "sp_pt": "",
          "text_pt": "os nossos bispos auxiliares,"
        },
        {
          "sp_pt": "",
          "text_pt": "e todos os ministros sagrados."
        },
        {
          "sp_pt": "",
          "text_pt": "Podem acrescentar-se algumas intercessões próprias das Missas rituais."
        },
        {
          "sp_pt": "",
          "text_pt": "Nas Missas pelos defuntos pode acrescentar-se:"
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-V os do vosso servo N. (da vossa serva N.),"
        },
        {
          "sp_pt": "",
          "text_pt": "a quem (hoje) chamastes para V ós:"
        },
        {
          "sp_pt": "",
          "text_pt": "configurado (a) com Cristo na morte,"
        },
        {
          "sp_pt": "",
          "text_pt": "com Cristo tome parte na ressurreição."
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal ou concelebrante [2]:"
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-Vos também dos (outros) nossos irmãos,"
        },
        {
          "sp_pt": "",
          "text_pt": "que adormeceram na esperança da ressurreição,"
        },
        {
          "sp_pt": "",
          "text_pt": "e de todos aqueles que na vossa misericórdia"
        },
        {
          "sp_pt": "",
          "text_pt": "partiram deste mundo:"
        },
        {
          "sp_pt": "",
          "text_pt": "admiti-os na luz da vossa presença."
        },
        {
          "sp_pt": "",
          "text_pt": "Tende misericórdia de nós, Senhor,"
        },
        {
          "sp_pt": "",
          "text_pt": "e dai-nos a graça de participar na vida eterna,"
        },
        {
          "sp_pt": "",
          "text_pt": "com a Virgem santa Maria, Mãe de Deus, são José, seu esposo,"
        },
        {
          "sp_pt": "",
          "text_pt": "os bem-aventurados apóstolos,"
        },
        {
          "sp_pt": "",
          "text_pt": "(são / santo N. santo do dia ou santo padroeiro)"
        },
        {
          "sp_pt": "",
          "text_pt": "e todos os santos,"
        },
        {
          "sp_pt": "",
          "text_pt": "que, desde o princípio do mundo, viveram na vossa amizade,"
        },
        {
          "sp_pt": "",
          "text_pt": "para cantarmos os vossos louvores,"
        },
        {
          "sp_pt": "",
          "text_pt": "Junta as mãos."
        },
        {
          "sp_pt": "",
          "text_pt": "por Jesus Cristo, vosso Filho."
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal ou concelebrantes:"
        },
        {
          "sp_pt": "",
          "text_pt": "106. Toma o cálice e a patena com a hóstia e, elevando-os, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Por Cristo, com Cristo, em Cristo,"
        },
        {
          "sp_pt": "",
          "text_pt": "a Vós, Deus Pai todo-poderoso,"
        },
        {
          "sp_pt": "",
          "text_pt": "na unidade do Espírito Santo,"
        },
        {
          "sp_pt": "",
          "text_pt": "toda a honra e toda a glória,"
        },
        {
          "sp_pt": "",
          "text_pt": "por todos os séculos dos séculos."
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Amen."
        },
        {
          "rubric_pt": "Seguem-se os ritos da comunhão, p. 526."
        }
      ],
      "3": [
        {
          "sp_pt": "",
          "text_pt": "107. O Prefácio é escolhido conforme as rubricas."
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal:"
        },
        {
          "sp_pt": "",
          "text_pt": "108. O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Vós, Senhor, sois verdadeiramente santo"
        },
        {
          "sp_pt": "",
          "text_pt": "e todas as criaturas cantam os vossos louvores,"
        },
        {
          "sp_pt": "",
          "text_pt": "porque dais a vida e santificais todas as coisas,"
        },
        {
          "sp_pt": "",
          "text_pt": "por nosso Senhor Jesus Cristo, vosso Filho,"
        },
        {
          "sp_pt": "",
          "text_pt": "com o poder do Espírito Santo,"
        },
        {
          "sp_pt": "",
          "text_pt": "e não cessais de reunir para Vós um povo,"
        },
        {
          "sp_pt": "",
          "text_pt": "que, de um extremo ao outro da terra,"
        },
        {
          "sp_pt": "",
          "text_pt": "Vos ofereça uma oblação pura."
        },
        {
          "sp_pt": "",
          "text_pt": "Nos domingos e em outros dias solenes pode fazer-se a comemoração própria."
        },
        {
          "sp_pt": "",
          "text_pt": "Domingos:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos"
        },
        {
          "sp_pt": "",
          "text_pt": "o primeiro dia da semana, em que nosso Senhor Jesus Cristo ressuscitou"
        },
        {
          "sp_pt": "",
          "text_pt": "dos mortos, humildemente ..."
        },
        {
          "sp_pt": "",
          "text_pt": "Natal do Senhor e sua oitava:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos"
        },
        {
          "sp_pt": "",
          "text_pt": "o dia santíssimo (a noite santíssima) em que a Imaculada Virgem Maria deu"
        },
        {
          "sp_pt": "",
          "text_pt": "à luz o Salvador do mundo, humildemente ..."
        },
        {
          "sp_pt": "",
          "text_pt": "Epifania do Senhor:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos"
        },
        {
          "sp_pt": "",
          "text_pt": "o dia santíssimo em que o vosso Filho unigénito, eterno convosco na glória,"
        },
        {
          "rubric_pt": "Se manifestou visivelmente na realidade da nossa carne, humildemente ..."
        },
        {
          "sp_pt": "",
          "text_pt": "Quinta-Feira Santa:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos"
        },
        {
          "sp_pt": "",
          "text_pt": "o dia santíssimo em que nosso Senhor Jesus Cristo Se entregou por nós,"
        },
        {
          "sp_pt": "",
          "text_pt": "humildemente, V os suplicamos, Senhor: santificai, pelo Espírito Santo, estes"
        },
        {
          "sp_pt": "",
          "text_pt": "dons que V os apresentamos, para que se convertam no Corpo e + Sangue"
        },
        {
          "sp_pt": "",
          "text_pt": "de nosso Senhor Jesus Cristo, vosso Filho, que nos mandou celebrar estes"
        },
        {
          "sp_pt": "",
          "text_pt": "mistérios. Hoje, na noite em que Ele ia ser entregue, tomou o pão ..."
        },
        {
          "sp_pt": "",
          "text_pt": "Vigília Pascal até ao Domingo II da Páscoa:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia santíssimo (a noite santíssima) da ressurreição de nosso Senhor"
        },
        {
          "sp_pt": "",
          "text_pt": "Jesus Cristo segundo a carne, humildemente ..."
        },
        {
          "sp_pt": "",
          "text_pt": "Ascensão do Senhor:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos"
        },
        {
          "sp_pt": "",
          "text_pt": "o dia santíssimo em que nosso Senhor Jesus Cristo, vosso Filho unigénito,"
        },
        {
          "sp_pt": "",
          "text_pt": "colocou à direita da vossa glória a nossa frágil natureza humana unida à"
        },
        {
          "sp_pt": "",
          "text_pt": "sua divindade, humildemente ..."
        },
        {
          "sp_pt": "",
          "text_pt": "Pentecostes:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos"
        },
        {
          "sp_pt": "",
          "text_pt": "o dia santíssimo de Pentecostes, em que o Espírito Santo Se manifestou aos"
        },
        {
          "sp_pt": "",
          "text_pt": "Apóstolos em numerosas línguas de fogo, humildemente ..."
        },
        {
          "sp_pt": "",
          "text_pt": "Dedicação de uma igreja:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos"
        },
        {
          "sp_pt": "",
          "text_pt": "a dedicação deste templo, no dia em que o consagrastes e enchestes com a"
        },
        {
          "sp_pt": "",
          "text_pt": "vossa presença, humildemente ..."
        },
        {
          "sp_pt": "",
          "text_pt": "Apresentação do Senhor:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia em que o vosso Filho unigénito foi apresentado no Templo, ..."
        },
        {
          "sp_pt": "",
          "text_pt": "Anunciação do Senhor:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia em que a Virgem santa Maria concebeu o vosso Filho unigénito"
        },
        {
          "sp_pt": "",
          "text_pt": "pelo poder do Espírito Santo, humildemente ..."
        },
        {
          "sp_pt": "",
          "text_pt": "Nascimento de são João Batista:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia do nascimento de são João Batista, que preparou o caminho do"
        },
        {
          "sp_pt": "",
          "text_pt": "Salvador do mundo, humildemente ..."
        },
        {
          "sp_pt": "",
          "text_pt": "Assunção da Virgem santa Maria:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia em que santa Maria Mãe de Deus foi elevada à glória do céu, ..."
        },
        {
          "sp_pt": "",
          "text_pt": "Natividade da Virgem santa Maria:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia do nascimento da Virgem santa Maria, escolhida desde toda a"
        },
        {
          "sp_pt": "",
          "text_pt": "eternidade para ser a Mãe do Redentor, humildemente ..."
        },
        {
          "sp_pt": "",
          "text_pt": "Dia de Todos os Santos:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos"
        },
        {
          "sp_pt": "",
          "text_pt": "o dia consagrado à memória de todos os santos, que durante a vida imitaram"
        },
        {
          "sp_pt": "",
          "text_pt": "a Cristo e na morte receberam d’Ele a coroa da glória, humildemente ..."
        },
        {
          "sp_pt": "",
          "text_pt": "Imaculada Conceição da Virgem santa Maria:"
        },
        {
          "rubric_pt": "Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia em que a Virgem Maria, escolhida para ser a Mãe do Redentor,"
        },
        {
          "sp_pt": "",
          "text_pt": "foi concebida sem mancha do pecado original, humildemente ..."
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal e concelebrantes:"
        },
        {
          "sp_pt": "",
          "text_pt": "109. Junta as mãos e, estendendo-as sobre as oblatas, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Humildemente Vos suplicamos, Senhor:"
        },
        {
          "sp_pt": "",
          "text_pt": "santificai, pelo Espírito Santo,"
        },
        {
          "sp_pt": "",
          "text_pt": "estes dons que Vos apresentamos,"
        },
        {
          "sp_pt": "",
          "text_pt": "Junta as mãos e traça o sinal da cruz sobre o pão e sobre o cálice, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "para que se convertam no Corpo e + Sangue"
        },
        {
          "sp_pt": "",
          "text_pt": "de nosso Senhor Jesus Cristo, vosso Filho,"
        },
        {
          "sp_pt": "",
          "text_pt": "Junta as mãos."
        },
        {
          "sp_pt": "",
          "text_pt": "que nos mandou celebrar estes mistérios."
        },
        {
          "sp_pt": "",
          "text_pt": "110. Nas fórmulas que se seguem, as palavras do Senhor devem pronunciar-se"
        },
        {
          "sp_pt": "",
          "text_pt": "clara e distintamente, como o requer a natureza das mesmas palavras."
        },
        {
          "sp_pt": "",
          "text_pt": "Na noite em que Ele ia ser entregue,"
        },
        {
          "rubric_pt": "Toma o pão e, sustentando-o um pouco elevado sobre o altar, continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "tomou o pão,"
        },
        {
          "sp_pt": "",
          "text_pt": "dando graças Vos bendisse,"
        },
        {
          "sp_pt": "",
          "text_pt": "partiu-o e deu-o aos seus discípulos, dizendo:"
        },
        {
          "rubric_pt": "Inclina-se um pouco."
        },
        {
          "sp_pt": "",
          "text_pt": "Tomai, todos, e comei:"
        },
        {
          "sp_pt": "",
          "text_pt": "isto é o meu Corpo,"
        },
        {
          "sp_pt": "",
          "text_pt": "que será entregue por vós."
        },
        {
          "rubric_pt": "Mostra ao povo a hóstia consagrada, coloca-a sobre a patena e genuflete em"
        },
        {
          "sp_pt": "",
          "text_pt": "adoração."
        },
        {
          "sp_pt": "",
          "text_pt": "111. Depois, continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "De igual modo, no fim da Ceia,"
        },
        {
          "rubric_pt": "Toma o cálice e, sustentando-o um pouco elevado sobre o altar, continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "tomou o cálice,"
        },
        {
          "sp_pt": "",
          "text_pt": "dando graças Vos bendisse"
        },
        {
          "sp_pt": "",
          "text_pt": "e deu-o aos seus discípulos, dizendo:"
        },
        {
          "rubric_pt": "Inclina-se um pouco."
        },
        {
          "sp_pt": "",
          "text_pt": "Tomai, todos, e bebei:"
        },
        {
          "sp_pt": "",
          "text_pt": "este é o cálice do meu sangue,"
        },
        {
          "sp_pt": "",
          "text_pt": "o sangue da nova e eterna aliança,"
        },
        {
          "sp_pt": "",
          "text_pt": "que será derramado por vós e por todos"
        },
        {
          "sp_pt": "",
          "text_pt": "para remissão dos pecados."
        },
        {
          "sp_pt": "",
          "text_pt": "Fazei isto em memória de mim."
        },
        {
          "rubric_pt": "Mostra ao povo o cálice, coloca-o sobre o corporal e genuflete em adoração."
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal:"
        },
        {
          "sp_pt": "",
          "text_pt": "112. Em seguida, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé!"
        },
        {
          "rubric_pt": "O povo aclama, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "Anunciamos, Senhor, a vossa morte,"
        },
        {
          "sp_pt": "",
          "text_pt": "proclamamos a vossa ressurreição."
        },
        {
          "sp_pt": "",
          "text_pt": "Vinde, Senhor Jesus!"
        },
        {
          "rubric_pt": "Ou:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério admirável da nossa fé!"
        },
        {
          "rubric_pt": "O povo aclama, dizendo:"
        },
        {
          "rubric_pt": "Quando comemos deste pão"
        },
        {
          "sp_pt": "",
          "text_pt": "e bebemos deste cálice,"
        },
        {
          "sp_pt": "",
          "text_pt": "anunciamos, Senhor, a vossa morte,"
        },
        {
          "sp_pt": "",
          "text_pt": "esperando a vossa vinda gloriosa."
        },
        {
          "rubric_pt": "Ou:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé para a salvação do mundo!"
        },
        {
          "rubric_pt": "O povo aclama, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "Glória a V ós, que morrestes na cruz"
        },
        {
          "sp_pt": "",
          "text_pt": "e agora viveis para sempre."
        },
        {
          "sp_pt": "",
          "text_pt": "Salvador do mundo, salvai-nos."
        },
        {
          "sp_pt": "",
          "text_pt": "Vinde, Senhor Jesus!"
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal e concelebrantes:"
        },
        {
          "sp_pt": "",
          "text_pt": "113. Em seguida, o sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrando agora, Senhor, o memorial"
        },
        {
          "sp_pt": "",
          "text_pt": "da paixão redentora do vosso Filho,"
        },
        {
          "sp_pt": "",
          "text_pt": "da sua admirável ressurreição e ascensão aos céus,"
        },
        {
          "sp_pt": "",
          "text_pt": "e esperando a sua vinda gloriosa,"
        },
        {
          "sp_pt": "",
          "text_pt": "nós Vos oferecemos, em ação de graças,"
        },
        {
          "sp_pt": "",
          "text_pt": "este sacrifício vivo e santo."
        },
        {
          "sp_pt": "",
          "text_pt": "Olhai benignamente para a oblação da vossa Igreja:"
        },
        {
          "sp_pt": "",
          "text_pt": "vede nela a vítima que nos reconciliou convosco"
        },
        {
          "sp_pt": "",
          "text_pt": "e fazei que, alimentando-nos do Corpo e Sangue do vosso Filho,"
        },
        {
          "sp_pt": "",
          "text_pt": "cheios do seu Espírito Santo,"
        },
        {
          "sp_pt": "",
          "text_pt": "sejamos em Cristo um só corpo e um só espírito."
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal ou concelebrante [1]:"
        },
        {
          "sp_pt": "",
          "text_pt": "O Espírito Santo faça de nós uma oferenda permanente,"
        },
        {
          "sp_pt": "",
          "text_pt": "a fim de alcançarmos a herança eterna,"
        },
        {
          "sp_pt": "",
          "text_pt": "em companhia dos vossos eleitos,"
        },
        {
          "sp_pt": "",
          "text_pt": "com a Virgem santa Maria, Mãe de Deus, são José, seu esposo,"
        },
        {
          "sp_pt": "",
          "text_pt": "os bem-aventurados apóstolos e gloriosos mártires,"
        },
        {
          "sp_pt": "",
          "text_pt": "(santo N. santo do dia ou santo padroeiro)"
        },
        {
          "sp_pt": "",
          "text_pt": "e todos os santos,"
        },
        {
          "sp_pt": "",
          "text_pt": "por cuja intercessão esperamos sempre o vosso auxílio."
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal ou concelebrante [2]:"
        },
        {
          "sp_pt": "",
          "text_pt": "Por este sacrifício de reconciliação,"
        },
        {
          "sp_pt": "",
          "text_pt": "dai, Senhor, a salvação e a paz ao mundo inteiro;"
        },
        {
          "sp_pt": "",
          "text_pt": "confirmai a vossa Igreja na fé e na caridade,"
        },
        {
          "sp_pt": "",
          "text_pt": "ao longo da sua peregrinação na terra,"
        },
        {
          "sp_pt": "",
          "text_pt": "com o vosso servo, o nosso papa N.,"
        },
        {
          "sp_pt": "",
          "text_pt": "o nosso bispo N."
        },
        {
          "rubric_pt": "O bispo, quando celebra na sua diocese, diz:"
        },
        {
          "sp_pt": "Bispo",
          "text_pt": "e comigo, vosso indigno servo,"
        },
        {
          "rubric_pt": "O bispo, quando celebra fora da sua diocese, diz:"
        },
        {
          "sp_pt": "Bispo",
          "text_pt": "e com o meu irmão N. (os meus irmãos), bispo(s) desta Igreja,"
        },
        {
          "sp_pt": "",
          "text_pt": "e comigo, vosso indigno servo,"
        },
        {
          "sp_pt": "",
          "text_pt": "Pode fazer-se menção do bispo coadjutor ou dos bispos auxiliares:"
        },
        {
          "sp_pt": "",
          "text_pt": "o nosso bispo coadjutor (ou auxiliar) N."
        },
        {
          "rubric_pt": "Ou:"
        },
        {
          "sp_pt": "",
          "text_pt": "os nossos bispos auxiliares,"
        },
        {
          "sp_pt": "",
          "text_pt": "e todos os bispos e ministros sagrados,"
        },
        {
          "sp_pt": "",
          "text_pt": "e todo o povo por Vós redimido."
        },
        {
          "sp_pt": "",
          "text_pt": "Atendei benignamente às preces desta família,"
        },
        {
          "sp_pt": "",
          "text_pt": "que Vos dignastes reunir na vossa presença."
        },
        {
          "sp_pt": "",
          "text_pt": "Em algumas celebrações podem fazer-se intercessões especiais."
        },
        {
          "sp_pt": "",
          "text_pt": "Reconduzi a Vós, Pai de misericórdia,"
        },
        {
          "sp_pt": "",
          "text_pt": "todos os vossos filhos dispersos."
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-Vos dos nossos irmãos defuntos"
        },
        {
          "sp_pt": "",
          "text_pt": "e de todos os que morreram na vossa amizade."
        },
        {
          "sp_pt": "",
          "text_pt": "Acolhei-os com bondade no vosso reino,"
        },
        {
          "sp_pt": "",
          "text_pt": "onde também nós esperamos ser recebidos,"
        },
        {
          "sp_pt": "",
          "text_pt": "para vivermos com eles eternamente na vossa glória,"
        },
        {
          "sp_pt": "",
          "text_pt": "por nosso Senhor Jesus Cristo."
        },
        {
          "sp_pt": "",
          "text_pt": "Junta as mãos:"
        },
        {
          "sp_pt": "",
          "text_pt": "Por Ele concedeis ao mundo todos os bens."
        },
        {
          "sp_pt": "",
          "text_pt": "114. Nas Missas pelos defuntos pode dizer-se:"
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-V os do vosso servo N. (da vossa serva N.),"
        },
        {
          "sp_pt": "",
          "text_pt": "que (hoje) chamastes para V ós:"
        },
        {
          "sp_pt": "",
          "text_pt": "configurado(a) com Cristo na morte,"
        },
        {
          "sp_pt": "",
          "text_pt": "com Cristo tome parte na ressurreição,"
        },
        {
          "sp_pt": "",
          "text_pt": "quando Ele vier ressuscitar os mortos"
        },
        {
          "sp_pt": "",
          "text_pt": "e transformar o nosso corpo mortal à imagem do seu Corpo glorioso."
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-V os também dos outros nossos irmãos defuntos"
        },
        {
          "sp_pt": "",
          "text_pt": "e de todos os que morreram na vossa amizade."
        },
        {
          "sp_pt": "",
          "text_pt": "Acolhei-os com bondade no vosso reino,"
        },
        {
          "sp_pt": "",
          "text_pt": "onde também nós esperamos ser recebidos,"
        },
        {
          "sp_pt": "",
          "text_pt": "para vivermos com eles eternamente na vossa glória,"
        },
        {
          "sp_pt": "",
          "text_pt": "quando enxugardes todas as lágrimas dos nossos olhos;"
        },
        {
          "sp_pt": "",
          "text_pt": "e, vendo-V os tal como sois, Senhor nosso Deus,"
        },
        {
          "sp_pt": "",
          "text_pt": "seremos para sempre semelhantes a V ós"
        },
        {
          "sp_pt": "",
          "text_pt": "e cantaremos sem fim os vossos louvores, por nosso Senhor Jesus Cristo."
        },
        {
          "sp_pt": "",
          "text_pt": "Junta as mãos."
        },
        {
          "sp_pt": "",
          "text_pt": "Por Ele concedeis ao mundo todos os bens."
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal ou concelebrantes:"
        },
        {
          "sp_pt": "",
          "text_pt": "115. Toma o cálice e a patena com a hóstia e, elevando-os, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Por Cristo, com Cristo, em Cristo,"
        },
        {
          "sp_pt": "",
          "text_pt": "a Vós, Deus Pai todo-poderoso,"
        },
        {
          "sp_pt": "",
          "text_pt": "na unidade do Espírito Santo,"
        },
        {
          "sp_pt": "",
          "text_pt": "toda a honra e toda a glória,"
        },
        {
          "sp_pt": "",
          "text_pt": "por todos os séculos dos séculos."
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Amen."
        },
        {
          "rubric_pt": "Seguem-se os ritos da comunhão, p. 526."
        }
      ],
      "4": [
        {
          "sp_pt": "",
          "text_pt": "116. O prefácio desta Oração eucarística não pode ser substituído por outro, em"
        },
        {
          "sp_pt": "",
          "text_pt": "virtude da natureza desta Oração, que apresenta o sumário da história da salvação."
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal:"
        },
        {
          "sp_pt": "",
          "text_pt": "V. O Senhor esteja convosco. R. Ele está no meio de nós."
        },
        {
          "sp_pt": "",
          "text_pt": "V. Corações ao alto. R. O nosso coração está em Deus."
        },
        {
          "sp_pt": "",
          "text_pt": "V. Dêmos graças ao Senhor nosso Deus."
        },
        {
          "sp_pt": "",
          "text_pt": "R. É nosso dever, é nossa salvação."
        },
        {
          "sp_pt": "",
          "text_pt": "Pai santo,"
        },
        {
          "sp_pt": "",
          "text_pt": "é verdadeiramente nosso dever dar-Vos graças,"
        },
        {
          "sp_pt": "",
          "text_pt": "é nossa salvação glorificar-Vos,"
        },
        {
          "sp_pt": "",
          "text_pt": "porque sois o único Deus vivo e verdadeiro."
        },
        {
          "sp_pt": "",
          "text_pt": "Vós existis desde sempre"
        },
        {
          "sp_pt": "",
          "text_pt": "e permaneceis eternamente na luz inacessível."
        },
        {
          "sp_pt": "",
          "text_pt": "Deus de bondade e fonte da vida,"
        },
        {
          "sp_pt": "",
          "text_pt": "criastes o universo"
        },
        {
          "sp_pt": "",
          "text_pt": "para encher de bênçãos todas as criaturas"
        },
        {
          "sp_pt": "",
          "text_pt": "e a muitas alegrar na claridade da vossa luz."
        },
        {
          "sp_pt": "",
          "text_pt": "Inumeráveis coros de anjos"
        },
        {
          "sp_pt": "",
          "text_pt": "estão na vossa presença para Vos servir"
        },
        {
          "sp_pt": "",
          "text_pt": "e, contemplando a glória do vosso rosto,"
        },
        {
          "sp_pt": "",
          "text_pt": "dia e noite cantam os vossos louvores."
        },
        {
          "sp_pt": "",
          "text_pt": "Com eles, também nós"
        },
        {
          "sp_pt": "",
          "text_pt": "e, pela nossa voz, a criação inteira,"
        },
        {
          "sp_pt": "",
          "text_pt": "aclamamos o vosso nome,"
        },
        {
          "sp_pt": "",
          "text_pt": "cantando com alegria:"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo, Santo, Santo,"
        },
        {
          "sp_pt": "",
          "text_pt": "Senhor Deus do universo."
        },
        {
          "sp_pt": "",
          "text_pt": "O céu e a terra proclamam a vossa glória."
        },
        {
          "sp_pt": "",
          "text_pt": "Hossana nas alturas."
        },
        {
          "sp_pt": "",
          "text_pt": "Bendito O que vem em nome do Senhor."
        },
        {
          "sp_pt": "",
          "text_pt": "Hossana nas alturas."
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal:"
        },
        {
          "sp_pt": "",
          "text_pt": "117. O sacerdote, de braços abertos, continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "Pai santo, nós Vos glorificamos,"
        },
        {
          "sp_pt": "",
          "text_pt": "porque sois grande"
        },
        {
          "sp_pt": "",
          "text_pt": "e tudo criastes com sabedoria e amor."
        },
        {
          "sp_pt": "",
          "text_pt": "Formastes o homem à vossa imagem"
        },
        {
          "sp_pt": "",
          "text_pt": "e lhe confiastes o universo,"
        },
        {
          "sp_pt": "",
          "text_pt": "para que, servindo-Vos unicamente a Vós, seu Criador,"
        },
        {
          "sp_pt": "",
          "text_pt": "exercesse domínio sobre todas as criaturas."
        },
        {
          "sp_pt": "",
          "text_pt": "E quando, por desobediência, perdeu a vossa amizade,"
        },
        {
          "sp_pt": "",
          "text_pt": "não o abandonastes ao poder da morte,"
        },
        {
          "sp_pt": "",
          "text_pt": "mas, na vossa misericórdia, a todos socorrestes,"
        },
        {
          "sp_pt": "",
          "text_pt": "para que todos aqueles que Vos procuram Vos encontrem."
        },
        {
          "sp_pt": "",
          "text_pt": "Repetidas vezes fizestes aliança com os homens"
        },
        {
          "sp_pt": "",
          "text_pt": "e, pelos profetas, os formastes na esperança da salvação."
        },
        {
          "sp_pt": "",
          "text_pt": "Pai santo, de tal modo amastes o mundo,"
        },
        {
          "sp_pt": "",
          "text_pt": "que, chegada a plenitude dos tempos,"
        },
        {
          "sp_pt": "",
          "text_pt": "nos enviastes, como Salvador, o vosso Filho unigénito:"
        },
        {
          "sp_pt": "",
          "text_pt": "feito homem pelo poder do Espírito Santo"
        },
        {
          "sp_pt": "",
          "text_pt": "e nascido da Virgem Maria,"
        },
        {
          "sp_pt": "",
          "text_pt": "viveu a nossa condição humana,"
        },
        {
          "sp_pt": "",
          "text_pt": "em tudo igual a nós, exceto no pecado;"
        },
        {
          "sp_pt": "",
          "text_pt": "anunciou a salvação aos pobres,"
        },
        {
          "sp_pt": "",
          "text_pt": "a libertação aos oprimidos,"
        },
        {
          "sp_pt": "",
          "text_pt": "a alegria aos que sofrem."
        },
        {
          "sp_pt": "",
          "text_pt": "Para cumprir o vosso plano salvador,"
        },
        {
          "sp_pt": "",
          "text_pt": "voluntariamente Se entregou à morte"
        },
        {
          "sp_pt": "",
          "text_pt": "e, com a sua ressurreição,"
        },
        {
          "sp_pt": "",
          "text_pt": "destruiu a morte e restaurou a vida."
        },
        {
          "sp_pt": "",
          "text_pt": "E a fim de vivermos, não já para nós próprios,"
        },
        {
          "sp_pt": "",
          "text_pt": "mas para Ele, que por nós morreu e ressuscitou,"
        },
        {
          "sp_pt": "",
          "text_pt": "de Vós, Pai misericordioso,"
        },
        {
          "sp_pt": "",
          "text_pt": "enviou aos que n’Ele creem o Espírito Santo,"
        },
        {
          "sp_pt": "",
          "text_pt": "como primícias dos seus dons,"
        },
        {
          "sp_pt": "",
          "text_pt": "para continuar a sua obra no mundo"
        },
        {
          "sp_pt": "",
          "text_pt": "e consumar toda a santificação."
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal e concelebrantes:"
        },
        {
          "sp_pt": "",
          "text_pt": "118. Junta as mãos e, estendendo-as sobre as oblatas, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Nós Vos pedimos, Senhor,"
        },
        {
          "sp_pt": "",
          "text_pt": "que o Espírito Santo santifique estes dons,"
        },
        {
          "sp_pt": "",
          "text_pt": "Junta as mãos e traça o sinal da cruz sobre o pão e sobre o cálice, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "para que se convertam"
        },
        {
          "sp_pt": "",
          "text_pt": "no Corpo e + Sangue de nosso Senhor Jesus Cristo,"
        },
        {
          "sp_pt": "",
          "text_pt": "Junta as mãos."
        },
        {
          "sp_pt": "",
          "text_pt": "ao celebrarmos este grande mistério,"
        },
        {
          "sp_pt": "",
          "text_pt": "que Ele nos deixou como sinal de aliança eterna."
        },
        {
          "sp_pt": "",
          "text_pt": "119. Nas fórmulas que se seguem, as palavras do Senhor devem pronunciar-se"
        },
        {
          "sp_pt": "",
          "text_pt": "clara e distintamente, como o requer a natureza das mesmas palavras."
        },
        {
          "sp_pt": "",
          "text_pt": "Pai santo, quando chegou a hora"
        },
        {
          "sp_pt": "",
          "text_pt": "em que Ele ia ser glorificado por Vós,"
        },
        {
          "sp_pt": "",
          "text_pt": "tendo amado os seus que estavam no mundo,"
        },
        {
          "sp_pt": "",
          "text_pt": "amou-os até ao fim."
        },
        {
          "sp_pt": "",
          "text_pt": "E, durante a Ceia,"
        },
        {
          "rubric_pt": "Toma o pão e, sustentando-o um pouco elevado sobre o altar, continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "tomou o pão, bendisse-Vos,"
        },
        {
          "sp_pt": "",
          "text_pt": "partiu-o e deu-o aos seus discípulos, dizendo:"
        },
        {
          "rubric_pt": "Inclina-se um pouco."
        },
        {
          "sp_pt": "",
          "text_pt": "Tomai, todos, e comei:"
        },
        {
          "sp_pt": "",
          "text_pt": "isto é o meu corpo,"
        },
        {
          "sp_pt": "",
          "text_pt": "que será entregue por vós."
        },
        {
          "rubric_pt": "Mostra ao povo a hóstia consagrada, coloca-a sobre a patena e genuflete em"
        },
        {
          "sp_pt": "",
          "text_pt": "adoração."
        },
        {
          "sp_pt": "",
          "text_pt": "120. Depois, continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "De igual modo,"
        },
        {
          "rubric_pt": "Toma o cálice e, sustentando-o um pouco elevado sobre o altar, continua:"
        },
        {
          "sp_pt": "",
          "text_pt": "tomou o cálice com vinho, deu-Vos graças"
        },
        {
          "sp_pt": "",
          "text_pt": "e deu-o aos seus discípulos, dizendo:"
        },
        {
          "rubric_pt": "Inclina-se um pouco."
        },
        {
          "sp_pt": "",
          "text_pt": "Tomai, todos, e bebei:"
        },
        {
          "sp_pt": "",
          "text_pt": "este é o cálice do meu sangue,"
        },
        {
          "sp_pt": "",
          "text_pt": "o sangue da nova e eterna aliança,"
        },
        {
          "sp_pt": "",
          "text_pt": "que será derramado por vós e por todos"
        },
        {
          "sp_pt": "",
          "text_pt": "para remissão dos pecados."
        },
        {
          "sp_pt": "",
          "text_pt": "Fazei isto em memória de mim."
        },
        {
          "rubric_pt": "Mostra ao povo o cálice, coloca-o sobre o corporal e genuflete em adoração."
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal:"
        },
        {
          "sp_pt": "",
          "text_pt": "121. Em seguida, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé!"
        },
        {
          "rubric_pt": "O povo aclama, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "Anunciamos, Senhor, a vossa morte,"
        },
        {
          "sp_pt": "",
          "text_pt": "proclamamos a vossa ressurreição."
        },
        {
          "sp_pt": "",
          "text_pt": "Vinde, Senhor Jesus!"
        },
        {
          "rubric_pt": "Ou:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério admirável da nossa fé!"
        },
        {
          "rubric_pt": "O povo aclama, dizendo:"
        },
        {
          "rubric_pt": "Quando comemos deste pão"
        },
        {
          "sp_pt": "",
          "text_pt": "e bebemos deste cálice,"
        },
        {
          "sp_pt": "",
          "text_pt": "anunciamos, Senhor, a vossa morte,"
        },
        {
          "sp_pt": "",
          "text_pt": "esperando a vossa vinda gloriosa."
        },
        {
          "rubric_pt": "Ou:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé para a salvação do mundo!"
        },
        {
          "rubric_pt": "O povo aclama, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "Glória a V ós, que morrestes na cruz"
        },
        {
          "sp_pt": "",
          "text_pt": "e agora viveis para sempre."
        },
        {
          "sp_pt": "",
          "text_pt": "Salvador do mundo, salvai-nos."
        },
        {
          "sp_pt": "",
          "text_pt": "Vinde, Senhor Jesus!"
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal e concelebrantes:"
        },
        {
          "sp_pt": "",
          "text_pt": "122. Em seguida, o sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrando agora, Senhor, o memorial da nossa redenção,"
        },
        {
          "sp_pt": "",
          "text_pt": "recordamos a morte de Cristo"
        },
        {
          "sp_pt": "",
          "text_pt": "e a sua descida à mansão dos mortos;"
        },
        {
          "sp_pt": "",
          "text_pt": "proclamamos a sua ressurreição e ascensão aos céus;"
        },
        {
          "sp_pt": "",
          "text_pt": "e, esperando a sua vinda gloriosa,"
        },
        {
          "sp_pt": "",
          "text_pt": "nós Vos oferecemos o seu Corpo e Sangue,"
        },
        {
          "sp_pt": "",
          "text_pt": "o sacrifício do vosso agrado"
        },
        {
          "sp_pt": "",
          "text_pt": "e de salvação para todo o mundo."
        },
        {
          "sp_pt": "",
          "text_pt": "Olhai, Senhor, para esta oblação,"
        },
        {
          "sp_pt": "",
          "text_pt": "que preparastes para a vossa Igreja,"
        },
        {
          "sp_pt": "",
          "text_pt": "e concedei, por vossa bondade,"
        },
        {
          "sp_pt": "",
          "text_pt": "a quantos vamos participar do mesmo pão e do mesmo cálice,"
        },
        {
          "sp_pt": "",
          "text_pt": "que, reunidos pelo Espírito Santo num só corpo,"
        },
        {
          "sp_pt": "",
          "text_pt": "sejamos em Cristo uma oferenda viva,"
        },
        {
          "sp_pt": "",
          "text_pt": "para louvor da vossa glória."
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal ou concelebrante [1]:"
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-Vos agora, Senhor,"
        },
        {
          "sp_pt": "",
          "text_pt": "de todos aqueles por quem oferecemos este sacrifício:"
        },
        {
          "sp_pt": "",
          "text_pt": "o vosso servo, o nosso papa N.,"
        },
        {
          "sp_pt": "",
          "text_pt": "o nosso bispo N."
        },
        {
          "rubric_pt": "O bispo, quando celebra na sua diocese, diz:"
        },
        {
          "sp_pt": "Bispo",
          "text_pt": "e eu, vosso indigno servo,"
        },
        {
          "rubric_pt": "O bispo, quando celebra fora da sua diocese, diz:"
        },
        {
          "sp_pt": "Bispo",
          "text_pt": "o meu irmão N. (os meus irmãos), bispo(s) desta Igreja,"
        },
        {
          "sp_pt": "",
          "text_pt": "e eu, vosso indigno servo,"
        },
        {
          "sp_pt": "",
          "text_pt": "Pode fazer-se menção do bispo coadjutor ou dos bispos auxiliares:"
        },
        {
          "sp_pt": "",
          "text_pt": "o nosso bispo coadjutor (ou auxiliar) N."
        },
        {
          "rubric_pt": "Ou:"
        },
        {
          "sp_pt": "",
          "text_pt": "os nossos bispos auxiliares,"
        },
        {
          "sp_pt": "",
          "text_pt": "e todos os bispos,"
        },
        {
          "sp_pt": "",
          "text_pt": "os ministros sagrados e os que Vos apresentam as suas ofertas,"
        },
        {
          "sp_pt": "",
          "text_pt": "os membros desta assembleia, todo o vosso povo santo"
        },
        {
          "sp_pt": "",
          "text_pt": "e todos aqueles que Vos procuram de coração sincero."
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal ou concelebrante [2]:"
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-Vos também"
        },
        {
          "sp_pt": "",
          "text_pt": "dos nossos irmãos que adormeceram na paz de Cristo"
        },
        {
          "sp_pt": "",
          "text_pt": "e de todos os defuntos cuja fé só Vós conhecestes."
        },
        {
          "sp_pt": "",
          "text_pt": "E a todos nós, vossos filhos,"
        },
        {
          "sp_pt": "",
          "text_pt": "concedei, Pai de misericórdia,"
        },
        {
          "sp_pt": "",
          "text_pt": "a graça de alcançarmos a herança do céu,"
        },
        {
          "sp_pt": "",
          "text_pt": "com a Virgem santa Maria, Mãe de Deus, são José, seu esposo,"
        },
        {
          "sp_pt": "",
          "text_pt": "os apóstolos e todos os santos,"
        },
        {
          "sp_pt": "",
          "text_pt": "para que, no vosso reino,"
        },
        {
          "sp_pt": "",
          "text_pt": "com a criação inteira liberta do pecado e da morte,"
        },
        {
          "sp_pt": "",
          "text_pt": "cantemos eternamente a vossa glória,"
        },
        {
          "sp_pt": "",
          "text_pt": "por nosso Senhor Jesus Cristo."
        },
        {
          "sp_pt": "",
          "text_pt": "Junta as mãos."
        },
        {
          "sp_pt": "",
          "text_pt": "Por Ele concedeis ao mundo todos os bens."
        },
        {
          "sp_pt": "",
          "text_pt": "Celebrante principal ou concelebrantes:"
        },
        {
          "sp_pt": "",
          "text_pt": "123. Toma o cálice e a patena com a hóstia e, elevando-os, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Por Cristo, com Cristo, em Cristo,"
        },
        {
          "sp_pt": "",
          "text_pt": "a Vós, Deus Pai todo-poderoso,"
        },
        {
          "sp_pt": "",
          "text_pt": "na unidade do Espírito Santo,"
        },
        {
          "sp_pt": "",
          "text_pt": "toda a honra e toda a glória,"
        },
        {
          "sp_pt": "",
          "text_pt": "por todos os séculos dos séculos."
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Amen."
        },
        {
          "rubric_pt": "Seguem-se os ritos da comunhão."
        }
      ]
    },
    "amen": [
      {
        "sp_pt": "C.",
        "text_pt": "Por Cristo, com Cristo, em Cristo, a Vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda a honra e toda a glória agora e para sempre."
      },
      {
        "sp_pt": "Todos",
        "text_pt": "Amen."
      }
    ]
  },
  {
    "id": "3.4 lords_prayer",
    "type": "part",
    "header": {
      "pt": "Ritos da comunhão — Pai-nosso"
    },
    "lines": [
      {
        "sp_pt": "",
        "text_pt": "Ritos da comunhão"
      },
      {
        "sp_pt": "",
        "text_pt": "124. Tendo colocado o cálice e a patena sobre o altar, o sacerdote, de mãos"
      },
      {
        "sp_pt": "",
        "text_pt": "juntas, diz:"
      },
      {
        "sp_pt": "",
        "text_pt": "Fiéis aos ensinamentos do Salvador, ousamos dizer:"
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Num só coração e numa só alma,"
      },
      {
        "sp_pt": "",
        "text_pt": "ousamos dizer como o Senhor nos ensinou:"
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Porque nos chamamos e somos filhos de Deus,"
      },
      {
        "sp_pt": "",
        "text_pt": "ousamos dizer com toda a confiança:"
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Unidos a Cristo, pelo Espírito Santo, ousamos dizer:"
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Em comunhão com toda a Igreja, ousamos dizer:"
      },
      {
        "rubric_pt": "Abre os braços e, juntamente com o povo, continua:"
      },
      {
        "sp_pt": "",
        "text_pt": "Pai nosso, que estais nos céus,"
      },
      {
        "sp_pt": "",
        "text_pt": "santificado seja o vosso nome;"
      },
      {
        "sp_pt": "",
        "text_pt": "venha a nós o vosso reino;"
      },
      {
        "sp_pt": "",
        "text_pt": "seja feita a vossa vontade,"
      },
      {
        "sp_pt": "",
        "text_pt": "assim na terra como no céu."
      },
      {
        "sp_pt": "",
        "text_pt": "O pão nosso de cada dia nos dai hoje;"
      },
      {
        "sp_pt": "",
        "text_pt": "perdoai-nos as nossas ofensas,"
      },
      {
        "sp_pt": "",
        "text_pt": "assim como nós perdoamos"
      },
      {
        "sp_pt": "",
        "text_pt": "a quem nos tem ofendido;"
      },
      {
        "sp_pt": "",
        "text_pt": "e não nos deixeis cair em tentação,"
      },
      {
        "sp_pt": "",
        "text_pt": "mas livrai-nos do mal."
      },
      {
        "sp_pt": "",
        "text_pt": "Ou em latim:"
      },
      {
        "sp_pt": "",
        "text_pt": "Pater noster, qui es in caelis:"
      },
      {
        "sp_pt": "",
        "text_pt": "sanctificétur nomen tuum;"
      },
      {
        "sp_pt": "",
        "text_pt": "advéniat regnum tuum;"
      },
      {
        "sp_pt": "",
        "text_pt": "fiat volúntas tua, sicut in caelo, et in terra."
      },
      {
        "sp_pt": "",
        "text_pt": "Panem nostrum cotidiánum da nobis hódie;"
      },
      {
        "sp_pt": "",
        "text_pt": "et dimítte nobis débita nostra,"
      },
      {
        "sp_pt": "",
        "text_pt": "sicut et nos dimíttimus debitóribus nostris;"
      },
      {
        "sp_pt": "",
        "text_pt": "et ne nos indúcas in tentatiónem;"
      },
      {
        "sp_pt": "",
        "text_pt": "sed líbera nos a malo."
      },
      {
        "sp_pt": "",
        "text_pt": "125. De braços abertos, o sacerdote diz sozinho:"
      },
      {
        "sp_pt": "",
        "text_pt": "Livrai-nos de todo o mal, Senhor,"
      },
      {
        "sp_pt": "",
        "text_pt": "e dai ao mundo a paz em nossos dias,"
      },
      {
        "sp_pt": "",
        "text_pt": "para que, ajudados pela vossa misericórdia,"
      },
      {
        "sp_pt": "",
        "text_pt": "sejamos sempre livres do pecado e de toda a perturbação,"
      },
      {
        "sp_pt": "",
        "text_pt": "enquanto esperamos a vinda gloriosa"
      },
      {
        "sp_pt": "",
        "text_pt": "de Jesus Cristo nosso Salvador."
      },
      {
        "sp_pt": "",
        "text_pt": "Junta as mãos."
      },
      {
        "rubric_pt": "O povo conclui a oração, aclamando:"
      },
      {
        "sp_pt": "",
        "text_pt": "V osso é o reino e o poder"
      },
      {
        "sp_pt": "",
        "text_pt": "e a glória para sempre."
      },
      {
        "sp_pt": "",
        "text_pt": "126. Em seguida, o sacerdote, de braços abertos, diz em voz alta:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor Jesus Cristo, que dissestes aos vossos apóstolos:"
      },
      {
        "sp_pt": "",
        "text_pt": "Deixo-vos a paz, dou-vos a minha paz:"
      },
      {
        "sp_pt": "",
        "text_pt": "não olheis aos nossos pecados, mas à fé da vossa Igreja,"
      },
      {
        "sp_pt": "",
        "text_pt": "e dai-lhe a união e a paz, segundo a vossa vontade,"
      },
      {
        "sp_pt": "",
        "text_pt": "Junta as mãos."
      },
      {
        "sp_pt": "",
        "text_pt": "Vós que viveis e reinais pelos séculos dos séculos."
      },
      {
        "sp_pt": "Todos",
        "text_pt": "Amen."
      },
      {
        "sp_pt": "",
        "text_pt": "127. O sacerdote, voltado para o povo, estendendo e juntando as mãos, diz:"
      },
      {
        "sp_pt": "",
        "text_pt": "A paz do Senhor esteja sempre convosco."
      },
      {
        "sp_pt": "Todos",
        "text_pt": "O amor de Cristo nos uniu."
      }
    ]
  },
  {
    "id": "3.5 peace",
    "type": "part",
    "header": {
      "pt": "Rito da paz"
    },
    "lines": [
      {
        "sp_pt": "",
        "text_pt": "128. Em seguida, conforme as circunstâncias, o diácono ou o sacerdote acrescenta:"
      },
      {
        "sp_pt": "",
        "text_pt": "Saudai-vos na paz de Cristo."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Como filhos do Deus da paz,"
      },
      {
        "sp_pt": "",
        "text_pt": "saudai-vos com um gesto de comunhão fraterna."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Em Jesus, que fez de todos nós seus irmãos,"
      },
      {
        "sp_pt": "",
        "text_pt": "saudai-vos com um gesto de reconciliação e de paz."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "No Espírito de Cristo ressuscitado,"
      },
      {
        "sp_pt": "",
        "text_pt": "saudai-vos com um gesto de paz."
      },
      {
        "rubric_pt": "Todos se saúdam, segundo os costumes locais, em sinal de mútua paz, comunhão"
      },
      {
        "sp_pt": "",
        "text_pt": "e caridade. O sacerdote saúda o diácono ou o ministro."
      },
      {
        "sp_pt": "",
        "text_pt": "129. Em seguida, toma a hóstia, parte-a sobre a patena e deita um fragmento"
      },
      {
        "sp_pt": "",
        "text_pt": "no cálice, dizendo em silêncio:"
      },
      {
        "sp_pt": "",
        "text_pt": "Esta união do Corpo e Sangue de nosso Senhor Jesus Cristo,"
      },
      {
        "sp_pt": "",
        "text_pt": "que vamos receber, nos sirva para a vida eterna."
      },
      {
        "sp_pt": "",
        "text_pt": "130. Entretanto, canta-se ou recita-se:"
      },
      {
        "sp_pt": "",
        "text_pt": "Cordeiro de Deus, que tirais o pecado do mundo,"
      },
      {
        "sp_pt": "",
        "text_pt": "tende piedade de nós."
      },
      {
        "sp_pt": "",
        "text_pt": "Cordeiro de Deus, que tirais o pecado do mundo,"
      },
      {
        "sp_pt": "",
        "text_pt": "tende piedade de nós."
      },
      {
        "sp_pt": "",
        "text_pt": "Cordeiro de Deus, que tirais o pecado do mundo,"
      },
      {
        "sp_pt": "",
        "text_pt": "dai-nos a paz."
      },
      {
        "sp_pt": "",
        "text_pt": "Ou, com canto em latim:"
      },
      {
        "sp_pt": "",
        "text_pt": "Agnus Dei, qui tollis peccáta mundi: miserére nobis."
      },
      {
        "sp_pt": "",
        "text_pt": "Agnus Dei, qui tollis peccáta mundi: miserére nobis."
      },
      {
        "sp_pt": "",
        "text_pt": "Agnus Dei, qui tollis peccáta mundi: dona nobis pacem."
      },
      {
        "sp_pt": "",
        "text_pt": "Estas invocações podem repetir-se várias vezes, se a fração do pão se prolongar."
      },
      {
        "sp_pt": "",
        "text_pt": "Contudo, na última vez, diz-se: dai-nos a paz."
      }
    ]
  },
  {
    "id": "3.6 lamb",
    "type": "part",
    "header": {
      "pt": "Fração do pão — Cordeiro de Deus"
    },
    "lines": [
      {
        "sp_pt": "",
        "text_pt": "131. Em seguida, o sacerdote, de mãos juntas, diz em silêncio:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor Jesus Cristo, Filho de Deus vivo,"
      },
      {
        "sp_pt": "",
        "text_pt": "que, por vontade do Pai e com o poder do Espírito Santo,"
      },
      {
        "sp_pt": "",
        "text_pt": "destes a vida ao mundo pela vossa morte,"
      },
      {
        "sp_pt": "",
        "text_pt": "livrai-me de todos os meus pecados e de todo o mal,"
      },
      {
        "sp_pt": "",
        "text_pt": "por este vosso santíssimo Corpo e Sangue;"
      },
      {
        "sp_pt": "",
        "text_pt": "conservai-me sempre fiel aos vossos mandamentos"
      },
      {
        "sp_pt": "",
        "text_pt": "e não permitais que eu me separe de V ós."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "A comunhão do vosso Corpo e Sangue, Senhor Jesus Cristo,"
      },
      {
        "sp_pt": "",
        "text_pt": "não seja para meu julgamento e condenação,"
      },
      {
        "sp_pt": "",
        "text_pt": "mas, pela vossa misericórdia,"
      },
      {
        "sp_pt": "",
        "text_pt": "me sirva de proteção e remédio para a alma e para o corpo."
      },
      {
        "sp_pt": "",
        "text_pt": "132. O sacerdote genuflete, toma a hóstia, levanta-a um pouco sobre a patena"
      },
      {
        "sp_pt": "",
        "text_pt": "ou sobre o cálice e, voltado para o povo, diz em voz alta:"
      },
      {
        "sp_pt": "",
        "text_pt": "Felizes os convidados para a Ceia do Senhor."
      },
      {
        "sp_pt": "",
        "text_pt": "Eis o Cordeiro de Deus, que tira o pecado do mundo."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Felizes os convidados para o banquete do Reino dos céus."
      },
      {
        "sp_pt": "",
        "text_pt": "Eis o Cordeiro de Deus, que tira o pecado do mundo."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Felizes os convidados para o banquete nupcial do Cordeiro."
      },
      {
        "sp_pt": "",
        "text_pt": "Eis o Cordeiro de Deus, que tira o pecado do mundo."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Provai e vede como o Senhor é bom."
      },
      {
        "sp_pt": "",
        "text_pt": "Eis o Cordeiro de Deus, que tira o pecado do mundo."
      },
      {
        "sp_pt": "",
        "text_pt": "E, juntamente com o povo, acrescenta uma só vez:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, eu não sou digno de que entreis em minha morada,"
      },
      {
        "sp_pt": "",
        "text_pt": "mas dizei uma palavra e serei salvo."
      }
    ]
  },
  {
    "id": "3.7 communion_rite",
    "type": "part",
    "header": {
      "pt": "Comunhão"
    },
    "lines": [
      {
        "sp_pt": "",
        "text_pt": "131. Em seguida, o sacerdote, de mãos juntas, diz em silêncio:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor Jesus Cristo, Filho de Deus vivo,"
      },
      {
        "sp_pt": "",
        "text_pt": "que, por vontade do Pai e com o poder do Espírito Santo,"
      },
      {
        "sp_pt": "",
        "text_pt": "destes a vida ao mundo pela vossa morte,"
      },
      {
        "sp_pt": "",
        "text_pt": "livrai-me de todos os meus pecados e de todo o mal,"
      },
      {
        "sp_pt": "",
        "text_pt": "por este vosso santíssimo Corpo e Sangue;"
      },
      {
        "sp_pt": "",
        "text_pt": "conservai-me sempre fiel aos vossos mandamentos"
      },
      {
        "sp_pt": "",
        "text_pt": "e não permitais que eu me separe de V ós."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "A comunhão do vosso Corpo e Sangue, Senhor Jesus Cristo,"
      },
      {
        "sp_pt": "",
        "text_pt": "não seja para meu julgamento e condenação,"
      },
      {
        "sp_pt": "",
        "text_pt": "mas, pela vossa misericórdia,"
      },
      {
        "sp_pt": "",
        "text_pt": "me sirva de proteção e remédio para a alma e para o corpo."
      },
      {
        "sp_pt": "",
        "text_pt": "132. O sacerdote genuflete, toma a hóstia, levanta-a um pouco sobre a patena"
      },
      {
        "sp_pt": "",
        "text_pt": "ou sobre o cálice e, voltado para o povo, diz em voz alta:"
      },
      {
        "sp_pt": "",
        "text_pt": "Felizes os convidados para a Ceia do Senhor."
      },
      {
        "sp_pt": "",
        "text_pt": "Eis o Cordeiro de Deus, que tira o pecado do mundo."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Felizes os convidados para o banquete do Reino dos céus."
      },
      {
        "sp_pt": "",
        "text_pt": "Eis o Cordeiro de Deus, que tira o pecado do mundo."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Felizes os convidados para o banquete nupcial do Cordeiro."
      },
      {
        "sp_pt": "",
        "text_pt": "Eis o Cordeiro de Deus, que tira o pecado do mundo."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Provai e vede como o Senhor é bom."
      },
      {
        "sp_pt": "",
        "text_pt": "Eis o Cordeiro de Deus, que tira o pecado do mundo."
      },
      {
        "sp_pt": "",
        "text_pt": "E, juntamente com o povo, acrescenta uma só vez:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, eu não sou digno de que entreis em minha morada,"
      },
      {
        "sp_pt": "",
        "text_pt": "mas dizei uma palavra e serei salvo."
      },
      {
        "sp_pt": "",
        "text_pt": "133. V oltado para o altar, o sacerdote diz em silêncio:"
      },
      {
        "sp_pt": "",
        "text_pt": "O Corpo de Cristo me guarde para a vida eterna."
      },
      {
        "sp_pt": "",
        "text_pt": "Comunga com reverência o Corpo de Cristo."
      },
      {
        "rubric_pt": "Em seguida, toma o cálice e diz em silêncio:"
      },
      {
        "sp_pt": "",
        "text_pt": "O Sangue de Cristo me guarde para a vida eterna."
      },
      {
        "sp_pt": "",
        "text_pt": "Comunga com reverência o Sangue de Cristo."
      },
      {
        "sp_pt": "",
        "text_pt": "134. Depois, toma a patena ou a píxide, aproxima-se dos comungantes e, elevando um pouco a hóstia, mostra-a a cada um deles, dizendo:"
      },
      {
        "sp_pt": "",
        "text_pt": "O Corpo de Cristo"
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Corpus Christi."
      },
      {
        "sp_pt": "",
        "text_pt": "O comungante responde Amen e comunga."
      },
      {
        "rubric_pt": "O diácono procede do mesmo modo, se tiver de distribuir a Comunhão."
      },
      {
        "sp_pt": "",
        "text_pt": "135. Para a comunhão sob as duas espécies, segue-se o rito descrito em seu"
      },
      {
        "sp_pt": "",
        "text_pt": "lugar próprio."
      },
      {
        "sp_pt": "",
        "text_pt": "136. Enquanto o sacerdote comunga o Corpo de Cristo, começa-se o cântico"
      },
      {
        "sp_pt": "",
        "text_pt": "da comunhão."
      },
      {
        "sp_pt": "",
        "text_pt": "137. Terminada a distribuição da Comunhão, o sacerdote ou o diácono, ou o"
      },
      {
        "sp_pt": "",
        "text_pt": "acólito instituído, purifica a patena sobre o cálice e o próprio cálice."
      },
      {
        "sp_pt": "",
        "text_pt": "Durante a purificação, o sacerdote diz em silêncio:"
      },
      {
        "sp_pt": "",
        "text_pt": "O que em nossa boca recebemos, Senhor,"
      },
      {
        "sp_pt": "",
        "text_pt": "seja por nós acolhido em coração puro,"
      },
      {
        "sp_pt": "",
        "text_pt": "e estes dons da vida temporal"
      },
      {
        "sp_pt": "",
        "text_pt": "se tornem remédio de vida eterna."
      },
      {
        "sp_pt": "",
        "text_pt": "138. Então, o sacerdote pode voltar para a sua cadeira. Se convier, podem guardar-se uns momentos de silêncio sagrado, ou recitar um salmo ou um cântico de"
      },
      {
        "sp_pt": "",
        "text_pt": "louvor."
      },
      {
        "sp_pt": "",
        "text_pt": "139. Em seguida, de pé, junto da sua cadeira ou do altar, o sacerdote, voltado"
      },
      {
        "sp_pt": "",
        "text_pt": "para o povo, diz, de mãos juntas:"
      },
      {
        "sp_pt": "",
        "text_pt": "Oremos."
      },
      {
        "sp_pt": "",
        "text_pt": "Todos, juntamente com o sacerdote, oram em silêncio durante alguns momentos,"
      },
      {
        "sp_pt": "",
        "text_pt": "a não ser que já antes tenha havido silêncio."
      },
      {
        "rubric_pt": "Em seguida, o sacerdote diz, de braços abertos, a oração depois da comunhão."
      },
      {
        "rubric_pt": "Se a oração se dirige ao Pai, a conclusão é da seguinte forma:"
      },
      {
        "sp_pt": "",
        "text_pt": "Por Cristo nosso Senhor."
      },
      {
        "rubric_pt": "Se a oração se dirige ao Pai, com menção do Filho na parte final:"
      },
      {
        "sp_pt": "",
        "text_pt": "Ele que vive e reina pelos séculos dos séculos."
      },
      {
        "rubric_pt": "Se a oração se dirige ao Filho:"
      },
      {
        "sp_pt": "",
        "text_pt": "Vós que viveis e reinais pelos séculos dos séculos."
      },
      {
        "sp_pt": "",
        "text_pt": "No fim, o povo aclama: Amen."
      }
    ]
  },
  {
    "id": "3.8 communion",
    "type": "part",
    "header": {
      "pt": "Antífona da comunhão"
    },
    "lines": [
      {
        "sp_pt": "",
        "text_pt": "(Antífona da comunhão do dia)"
      }
    ]
  },
  {
    "id": "3.9 prayer_after",
    "type": "part",
    "header": {
      "pt": "Oração depois da comunhão"
    },
    "lines": [
      {
        "sp_pt": "C.",
        "text_pt": "Oremos."
      },
      {
        "sp_pt": "",
        "text_pt": "(Oração depois da comunhão do dia)"
      },
      {
        "sp_pt": "Todos",
        "text_pt": "Amen."
      }
    ]
  },
  {
    "id": "4. THE CONCLUDING RITES",
    "type": "section",
    "pt": "Ritos de conclusão"
  },
  {
    "id": "4.1 announcement",
    "type": "part",
    "header": {
      "pt": "Avisos"
    },
    "lines": [
      {
        "rubric_pt": "Seguem-se, se os houver, breves avisos ao povo."
      }
    ]
  },
  {
    "id": "4.2 blessing",
    "type": "selectable",
    "header": {
      "pt": "Bênção"
    },
    "variants": {
      "A": {
        "label": {
          "pt": "Bênção"
        },
        "lines": [
          {
            "sp_pt": "",
            "text_pt": "Ritos de conclusão"
          },
          {
            "sp_pt": "",
            "text_pt": "140. Seguem-se, se os houver, breves avisos ao povo."
          },
          {
            "sp_pt": "",
            "text_pt": "141. Em seguida, faz-se a despedida."
          },
          {
            "rubric_pt": "O sacerdote, voltado para o povo, abrindo os braços, diz:"
          },
          {
            "sp_pt": "C.",
            "text_pt": "O Senhor esteja convosco."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Ele está no meio de nós."
          },
          {
            "rubric_pt": "O sacerdote abençoa o povo, dizendo:"
          },
          {
            "sp_pt": "",
            "text_pt": "Abençoe-vos Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai, Filho e + Espírito Santo."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Amen."
          },
          {
            "sp_pt": "",
            "text_pt": "142. Em certos dias e em ocasiões especiais, a fórmula de bênção tem textos"
          },
          {
            "sp_pt": "",
            "text_pt": "próprios: bênção solene ou oração sobre o povo (cf. pp. 703-720)."
          }
        ]
      },
      "B": {
        "label": {
          "pt": "Bênção pontifical"
        },
        "lines": [
          {
            "sp_pt": "",
            "text_pt": "143. Na Missa pontifical, o celebrante toma a mitra e, abrindo os braços, diz:"
          },
          {
            "sp_pt": "",
            "text_pt": "O Senhor esteja convosco."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Ele está no meio de nós."
          },
          {
            "rubric_pt": "O celebrante diz:"
          },
          {
            "sp_pt": "C.",
            "text_pt": "Bendito seja o nome do Senhor."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Agora e para sempre."
          },
          {
            "rubric_pt": "O celebrante diz:"
          },
          {
            "sp_pt": "C.",
            "text_pt": "O nosso auxílio vem do Senhor."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Que fez o céu e a terra."
          },
          {
            "rubric_pt": "Então, o celebrante toma o báculo, se o usa, e diz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Abençoe-vos Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "e, fazendo por três vezes o sinal da cruz sobre o povo, continua:"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai, + Filho + e Espírito + Santo."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Amen."
          },
          {
            "sp_pt": "",
            "text_pt": "144. Em seguida, o diácono ou o próprio sacerdote, de mãos juntas e voltado"
          },
          {
            "sp_pt": "",
            "text_pt": "para o povo, diz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Ide em paz e o Senhor vos acompanhe."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Graças a Deus."
          },
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "Anunciai o Evangelho do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Ide em paz e o Senhor vos acompanhe."
          },
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "Glorificai a Deus com a vossa vida."
          },
          {
            "sp_pt": "",
            "text_pt": "Ide em paz e o Senhor vos acompanhe."
          },
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "A alegria do Senhor seja a vossa força."
          },
          {
            "sp_pt": "",
            "text_pt": "Ide em paz e o Senhor vos acompanhe."
          },
          {
            "sp_pt": "",
            "text_pt": "Ou, no Tempo Pascal:"
          },
          {
            "sp_pt": "",
            "text_pt": "Levai a todos a alegria do Senhor ressuscitado. Aleluia."
          },
          {
            "sp_pt": "",
            "text_pt": "Ide em paz e o Senhor vos acompanhe."
          },
          {
            "sp_pt": "",
            "text_pt": "145. Em seguida, o sacerdote beija o altar em sinal de veneração, como no"
          },
          {
            "sp_pt": "",
            "text_pt": "início. Feita a inclinação profunda com os ministros, retira-se."
          },
          {
            "sp_pt": "",
            "text_pt": "146. Se a Missa é seguida de outra ação litúrgica, omitem-se os ritos de despedida."
          }
        ]
      }
    }
  },
  {
    "id": "4.3 dismissal",
    "type": "selectable",
    "header": {
      "pt": "Despedida"
    },
    "variants": {
      "A": {
        "label": {
          "pt": "Fórmula 1"
        },
        "lines": [
          {
            "sp_pt": "",
            "text_pt": "144. Em seguida, o diácono ou o próprio sacerdote, de mãos juntas e voltado"
          },
          {
            "sp_pt": "",
            "text_pt": "para o povo, diz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Ide em paz e o Senhor vos acompanhe."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Graças a Deus."
          }
        ]
      },
      "B": {
        "label": {
          "pt": "Fórmula 2"
        },
        "lines": [
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "Anunciai o Evangelho do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Ide em paz e o Senhor vos acompanhe."
          }
        ]
      },
      "C": {
        "label": {
          "pt": "Fórmula 3"
        },
        "lines": [
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "Glorificai a Deus com a vossa vida."
          },
          {
            "sp_pt": "",
            "text_pt": "Ide em paz e o Senhor vos acompanhe."
          }
        ]
      },
      "D": {
        "label": {
          "pt": "Fórmula 4"
        },
        "lines": [
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "A alegria do Senhor seja a vossa força."
          },
          {
            "sp_pt": "",
            "text_pt": "Ide em paz e o Senhor vos acompanhe."
          },
          {
            "sp_pt": "",
            "text_pt": "Ou, no Tempo Pascal:"
          },
          {
            "sp_pt": "",
            "text_pt": "Levai a todos a alegria do Senhor ressuscitado. Aleluia."
          },
          {
            "sp_pt": "",
            "text_pt": "Ide em paz e o Senhor vos acompanhe."
          },
          {
            "sp_pt": "",
            "text_pt": "145. Em seguida, o sacerdote beija o altar em sinal de veneração, como no"
          },
          {
            "sp_pt": "",
            "text_pt": "início. Feita a inclinação profunda com os ministros, retira-se."
          },
          {
            "sp_pt": "",
            "text_pt": "146. Se a Missa é seguida de outra ação litúrgica, omitem-se os ritos de despedida."
          }
        ]
      }
    }
  },
  {
    "id": "4.4 final_song",
    "type": "part",
    "header": {
      "pt": "Cântico final"
    },
    "lines": [
      {
        "rubric_pt": "O sacerdote beija o altar e retira-se com os ministros."
      }
    ]
  }
]);
  const ordinarySource = Object.freeze({"authority":"Secretariado Nacional de Liturgia de Portugal","title":"Ordinário da Missa — terceira edição do Missal Romano","url":"https://liturgia.pt/ordinario/ordinario.pdf","pages":"PDF 2–127"});
  const officialOrderCorpus = Object.freeze({ source: ordinarySource, pageRange: 'PDF 2–127', text_pt: "Ritos iniciais<br>1. Reunido o povo, o sacerdote e os ministros encaminham-se para o altar enquanto se executa o cântico de entrada.<br> Ao chegar ao altar, o sacerdote, feita uma inclinação profunda juntamente <br>com os ministros, beija o altar e, conforme as circunstâncias, incensa a cruz e o <br>altar. Depois, dirige-se para a sua cadeira, juntamente com os ministros.<br> Terminado o cântico de entrada, sacerdote e fiéis, todos de pé, fazem o sinal <br>da cruz, enquanto o sacerdote, voltado para o povo, diz:<br>Em nome do Pai e do Filho e do Espírito Santo.<br>O povo responde: Amen.<br>2. Depois, o sacerdote, abrindo os braços, saúda o povo, dizendo:<br>A graça de nosso Senhor Jesus Cristo,<br>o amor do Pai e a comunhão do Espírito Santo<br>estejam convosco.<br> O povo responde: Bendito seja Deus, que nos reuniu no amor de Cristo. <br>Ou: A graça e a paz de Deus, nosso Pai, <br> e de Jesus Cristo, nosso Senhor, estejam convosco.<br>O povo responde: Bendito seja Deus, que nos reuniu no amor de Cristo. <br>Ou: A graça de nosso Senhor Jesus Cristo esteja convosco.<br>O povo responde: Bendito seja Deus, que nos reuniu no amor de Cristo. <br>Ou: A graça de nosso Senhor Jesus Cristo<br> que por nós Se fez homem<br>(ou: que por nós morreu e ressuscitou<br>ou: que por nós intercede junto do Pai) esteja convosco.<br>O povo responde: Bendito seja Deus, que nos reuniu no amor de Cristo.<br>Ou: O Senhor esteja convosco.<br>O povo responde: Ele está no meio de nós. <br>O bispo, em vez de O Senhor esteja convosco, nesta primeira saudação diz:<br>A paz esteja convosco.<br>O povo responde: Bendito seja Deus, que nos reuniu no amor de Cristo.<br><br>RITOS INICIAIS<br>Ou: A paz, a caridade e a fé, <br>da parte de Deus Pai e de Jesus Cristo, nosso Senhor,<br>estejam convosco. <br> O povo responde: Bendito seja Deus, que nos reuniu no amor de Cristo.<br>Ou: A graça e a paz do Senhor que é, que era e que vem,<br> estejam convosco. <br> O povo responde: Bendito seja Deus, que nos reuniu no amor de Cristo.<br>Ou: O Deus da esperança,<br> que, pela ação do Espírito Santo,<br> nos alegra com a sua paz,<br> esteja convosco. <br> O povo responde: Bendito seja Deus, que nos reuniu no amor de Cristo.<br>Ou: Tempo do Advento:<br> O Senhor, que vem salvar-nos, esteja convosco. <br> O povo responde: Bendito seja Deus, que nos reuniu no amor de Cristo.<br>Ou: Tempo do Natal:<br> A paz e o amor de Deus Pai, <br> que se manifestaram em Cristo, nascido para nossa salvação, <br> estejam convosco. <br> O povo responde: Bendito seja Deus, que nos reuniu no amor de Cristo.<br>Ou: Tempo da Quaresma:<br> A graça e o amor de Jesus Cristo, que nos chama à conversão,<br> estejam convosco. <br> O povo responde: Bendito seja Deus, que nos reuniu no amor de Cristo. <br>Ou: Tempo da Páscoa:<br> O Deus da vida, que ressuscitou Jesus Cristo,<br> destruindo as cadeias da morte, esteja convosco.<br> O povo responde: Bendito seja Deus, que nos reuniu no amor de Cristo.<br>3. O sacerdote, ou o diácono, ou um ministro idóneo, pode fazer aos fiéis uma <br>brevíssima introdução à Missa do dia.<br><br>Ato penitencial – A<br>4. Em seguida, o sacerdote convida os fiéis ao ato penitencial, dizendo:<br>Irmãos:<br>Para celebrarmos dignamente os santos mistérios,<br>reconheçamos que somos pecadores.<br>Ou, nos domingos:<br>Na celebração da vitória de Cristo sobre o pecado e a morte,<br>em que somos convidados a morrer para o pecado <br>e a ressurgir para uma vida nova,<br>invoquemos a misericórdia do Pai,<br>porque somos pecadores.<br>Guardam-se alguns momentos de silêncio.<br>Seguidamente, o sacerdote introduz a confissão com estas palavras ou outras <br>semelhantes:<br>Confessemos os nossos pecados.<br>Dizem todos juntos a fórmula de confissão geral:<br>Confesso a Deus todo-poderoso <br>e a vós, irmãos,<br>que pequei muitas vezes,<br>por pensamentos e palavras, <br>atos e omissões,<br>e, batendo no peito, dizem:<br>por minha culpa, minha culpa, minha tão grande culpa.<br>e continuam:<br>E peço à Virgem Maria,<br>aos anjos e santos,<br>e a vós, irmãos, <br>que rogueis por mim a Deus, nosso Senhor.<br>Segue-se a absolvição do sacerdote:<br>Deus todo-poderoso tenha compaixão de nós,<br>perdoe os nossos pecados e nos conduza à vida eterna.<br>O povo responde: Amen.<br>Em seguida, diz-se o Senhor, tende piedade (Kýrie eléison).<br><br>Ato penitencial – B<br>5. O sacerdote convida os fiéis ao ato penitencial, dizendo:<br>Irmãos, para celebrarmos dignamente os santos mistérios, <br>reconheçamos que somos pecadores.<br>Ou: De coração humilde e contrito<br> pela consciência dos nossos pecados,<br> voltemo-nos para Deus, que é santo.<br>Guardam-se alguns momentos de silêncio. <br>Seguidamente, o sacerdote diz:<br>Tende compaixão de nós, Senhor. <br>O povo responde: Porque somos pecadores.<br>O sacerdote continua:<br>Manifestai, Senhor, a vossa misericórdia.<br>O povo responde: E dai-nos a vossa salvação.<br>Segue-se a absolvição do sacerdote:<br>Deus todo-poderoso tenha compaixão de nós, <br>perdoe os nossos pecados e nos conduza à vida eterna.<br>O povo responde: Amen.<br>Em seguida, diz-se o Senhor, tende piedade (Kýrie eléison).<br>Ato penitencial – C<br>6. O sacerdote convida os fiéis ao ato penitencial, dizendo:<br>Irmãos:<br>Para celebrarmos dignamente os santos mistérios, <br>reconheçamos que somos pecadores.<br>Ou: Jesus Cristo, o justo, intercede por nós <br> e reconcilia-nos com o Pai.<br> Abramos o nosso espírito ao arrependimento<br> para celebrarmos dignamente os santos mistérios. <br>Guardam-se alguns momentos de silêncio. <br>RITOS INICIAIS<br><br>Seguidamente, o sacerdote, ou um ministro idóneo, diz ou canta as seguintes <br>invocações ou outras semelhantes:<br>Senhor, que fostes enviado pelo Pai a salvar os corações atribulados:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison.<br>O povo responde:<br>Senhor, misericórdia ou Senhor, tende piedade de nós ou Kýrie, eléison.<br>O sacerdote continua:<br>Cristo, que viestes chamar os pecadores:<br>Cristo, misericórdia <br>ou Cristo, tende piedade de nós ou Christe, eléison.<br>O povo responde:<br>Cristo, misericórdia ou Cristo, tende piedade de nós ou Christe, eléison.<br>De novo, o sacerdote diz:<br>Senhor, que estais à direita do Pai a interceder por nós:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison.<br>O povo responde:<br>Senhor, misericórdia ou Senhor, tende piedade de nós ou Kýrie, eléison. <br>Segue-se a absolvição do sacerdote:<br>Deus todo-poderoso tenha compaixão de nós,<br>perdoe os nossos pecados e nos conduza à vida eterna. <br>O povo responde: Amen. <br>Em seguida, omitido o Senhor, tende piedade (Kýrie), diz-se o hino Glória, quando <br>está prescrito para a Missa.<br><br>Invocações alternativas<br>1.<br>Senhor, que sois o caminho que nos conduz ao Pai:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>Cristo, que sois a verdade que ilumina os povos:<br>Cristo, misericórdia <br>ou Cristo, tende piedade de nós ou Christe, eléison. R.<br>Senhor, que sois a vida que renova o mundo: <br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>2.<br>Senhor, que viestes procurar quem estava perdido:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>Cristo, que viestes dar a vida em resgate de todos:<br>Cristo, misericórdia <br>ou Cristo, tende piedade de nós ou Christe, eléison. R.<br>Senhor, que congregais na unidade os filhos de Deus:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>3.<br>Senhor, que sois o defensor dos pobres:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>Cristo, que sois a fortaleza dos fracos:<br>Cristo, misericórdia <br>ou Cristo, tende piedade de nós ou Christe, eléison. R.<br>Senhor, que sois a esperança dos pecadores:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>RITOS INICIAIS<br><br>Tempo do Advento<br>1.<br>Senhor, que viestes ao mundo para nos salvar:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>Cristo, que nos visitais continuamente com a graça do vosso Espírito:<br>Cristo, misericórdia <br>ou Cristo, tende piedade de nós ou Christe, eléison. R.<br>Senhor, que vireis um dia para julgar as nossas obras:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>2.<br>Senhor, que vindes visitar vosso povo na paz:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>Cristo, que vindes salvar o que estava perdido:<br>Cristo, misericórdia <br>ou Cristo, tende piedade de nós ou Christe, eléison. R.<br>Senhor, que vindes criar um mundo novo:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>Tempo do Natal<br>1.<br>Senhor, Filho de Deus, que, nascendo da Virgem Maria, <br> vos fizestes nosso irmão,<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>Cristo, Filho do homem, que conheceis e compreendeis a nossa fraqueza,<br>Cristo, misericórdia <br>ou Cristo, tende piedade de nós ou Christe, eléison. R.<br>Senhor, Filho primogénito do Pai, que fazeis de nós uma família,<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br><br>2.<br>Senhor, rei da paz:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>Cristo, luz nas trevas:<br>Cristo, misericórdia <br>ou Cristo, tende piedade de nós ou Christe, eléison. R.<br>Senhor, imagem do homem novo:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>Tempo da Quaresma<br>1.<br>Senhor, que, na cruz, perdoastes ao ladrão arrependido:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>Cristo, que nos mandastes perdoar <br> antes de nos aproximarmos do vosso altar: <br>Cristo, misericórdia <br>ou Cristo, tende piedade de nós ou Christe, eléison. R.<br>Senhor, que confiastes à vossa Igreja o ministério da reconciliação:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>2.<br>Senhor, que, na água e no Espírito, nos regenerastes à vossa imagem: <br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>Cristo, que enviais o vosso Espírito para criar em nós um coração novo:<br>Cristo, misericórdia <br>ou Cristo, tende piedade de nós ou Christe, eléison. R.<br>Senhor, que nos fazeis participantes do vosso Corpo e do vosso Sangue:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>RITOS INICIAIS<br><br>3.<br>Senhor, que fazeis passar da morte para a vida<br> os que ouvem a vossa palavra:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>Cristo, que quisestes ser levantado da terra para nos atrair a V ós:<br>Cristo, misericórdia <br>ou Cristo, tende piedade de nós ou Christe, eléison. R.<br>Senhor, que subistes à cruz por nós, <br> para sermos elevados à glória da ressurreição:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>Tempo da Páscoa<br>1.<br>Senhor, nossa paz:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>Cristo, nossa Páscoa:<br>Cristo, misericórdia <br>ou Cristo, tende piedade de nós ou Christe, eléison. R.<br>Senhor, nossa vida:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>2.<br>Senhor, que sois o eterno sacerdote da nova Aliança:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>Cristo, que nos edificais como pedras vivas no templo santo de Deus:<br>Cristo, misericórdia <br>ou Cristo, tende piedade de nós ou Christe, eléison. R.<br>Senhor, que nos tornais concidadãos dos santos no reino dos céus:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br><br>Ascensão<br>Senhor, que subistes ao céu como Rei do universo e Senhor dos séculos:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>Cristo, que, na vossa Ascensão, levastes cativo o cativeiro:<br>Cristo, misericórdia <br>ou Cristo, tende piedade de nós ou Christe, eléison. R.<br>Senhor, que, voltando à casa do Pai, nos abristes o céu: <br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>Pentecostes<br>Senhor, que, pelo Espírito Santo, estais sempre presente no mundo:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>Cristo, que dais o Espírito Santo para o perdão dos pecados: <br>Cristo, misericórdia <br>ou Cristo, tende piedade de nós ou Christe, eléison. R.<br>Senhor, que enviais o Espírito Santo para criar um mundo novo:<br>Senhor, misericórdia <br>ou Senhor, tende piedade de nós ou Kýrie, eléison. R.<br>Em seguida, omitido o Senhor, tende piedade (Kýrie eléison), diz-se o hino Glória, <br>quando está prescrito para a Missa.<br>Aspersão dominical da água benta<br>6.1. Ao domingo, especialmente no Tempo Pascal, pode celebrar-se a bênção e <br>a aspersão da água benta em memória do Batismo, em todas as Missas, inclusive <br>naquelas que se antecipam para o sábado de tarde, em todas as igrejas.<br> Este rito substitui o habitual ato penitencial.<br>RITOS INICIAIS<br><br>A<br>6.2. Depois da saudação inicial, o sacerdote, de pé, junto à sua sede, voltado para <br>o povo, tendo diante de si um recipiente com água para benzer, exorta o povo à <br>oração com estas ou outras palavras semelhantes:<br>Oremos, irmãos caríssimos, a Deus nosso Senhor, <br>suplicando-Lhe que Se digne abençoar esta água, <br>que vai ser aspergida sobre nós para memória do nosso <br>Batismo, <br>e nos renove interiormente, <br>a fim de permanecermos fiéis ao Espírito que recebemos.<br>Depois de breve oração em silêncio, o sacerdote diz, de mãos juntas:<br>Deus todo-poderoso e eterno, <br>que, por meio da água, fonte de vida e elemento de purificação,<br>quisestes também que fossem lavadas as nossas almas <br>e recebessem o dom da vida eterna, <br>dignai-Vos abençoar + esta água, <br>para que seja sinal da vossa proteção, neste dia a Vós consagrado. <br>Por meio desta água, Senhor, renovai em nós a fonte da graça <br>e livrai-nos de todo o mal da alma e do corpo, <br>para estarmos na vossa presença de coração puro<br>e recebermos dignamente os frutos da redenção. <br>Por Cristo nosso Senhor.<br>R. Amen.<br>Ou:<br>Deus todo-poderoso e eterno,<br>fonte e origem de toda a vida do corpo e da alma, <br>abençoai + esta água, que vamos aspergir sobre nós,<br>para implorar o perdão dos nossos pecados <br>e obter a graça da vossa proteção <br>contra todos os males e insídias do inimigo. <br>Concedei-nos, Senhor, pela vossa misericórdia, <br>que brotem sempre, para nós, as fontes vivas da salvação, <br>para que, livres de todos os perigos do corpo e da alma, <br>cheguemos à vossa presença de coração puro. <br>Por Cristo nosso Senhor.<br>R. Amen.<br><br>Ou, no Tempo Pascal:<br>Deus todo-poderoso e eterno, <br>escutai benignamente as orações do vosso povo. <br>Ao celebrarmos a obra admirável da nossa criação <br>e a maravilha ainda maior da nossa redenção, <br>dignai-Vos abençoar + esta água.<br>Vós a criastes para dar fecundidade à terra <br>e frescura e pureza aos nossos corpos. <br>Vós a fizestes instrumento de misericórdia, <br>libertando da escravidão o vosso povo <br>e matando a sua sede no deserto. <br>Por meio dos Profetas, <br>Vós a proclamastes sinal da nova aliança,<br>que quisestes estabelecer com os homens.<br>Finalmente, nas águas do Jordão, santificadas por Cristo, <br>inaugurastes o sacramento da regeneração espiritual, <br>que renova a nossa natureza humana, <br>libertando-a da corrupção do pecado.<br>Esta água, Senhor, nos faça reviver o Batismo que recebemos <br>e nos leve a participar na alegria dos nossos irmãos,<br>batizados na Páscoa de nosso Senhor Jesus Cristo. <br>Ele que vive e reina pelos séculos dos séculos.<br>R. Amen.<br>6.3. Quando as circunstâncias locais ou os costumes populares aconselham que se <br>conserve o rito de misturar sal na água benta, o sacerdote abençoa o sal, dizendo:<br>Deus todo-poderoso e eterno, abençoai + este sal, <br>Vós que ordenastes ao profeta Eliseu que o misturasse na água<br>para remediar a sua esterilidade.<br>Fazei que, mediante a aspersão purificadora do sal e da água, <br>sejamos livres do poder do inimigo <br>e sempre protegidos pela presença do Espírito Santo. <br>Por Cristo nosso Senhor.<br>R. Amen.<br>Então, o sacerdote mistura o sal na água.<br>RITOS INICIAIS<br><br>6.4. O sacerdote toma o hissope, asperge-se a si mesmo e, depois, os ministros, <br>o clero e os fiéis. Se parecer conveniente, pode passar através da igreja para a <br>aspersão dos fiéis.<br> Entretanto, canta-se um dos seguintes cânticos ou outro apropriado.<br>Fora do Tempo Pascal<br>ANTÍFONA 1 Sl 50, 9<br>Aspergi-me, Senhor, com o hissope e ficarei puro, <br>lavai-me e ficarei mais branco do que a neve.<br>ANTÍFONA 2 Ez 36, 25-26<br>Derramarei sobre vós água pura e ficareis limpos de toda a iniquidade; <br>Eu vos darei um coração novo, diz o Senhor.<br>HINO Cf. 1Pd 1, 3-5<br>Bendito seja Deus, Pai de nosso Senhor Jesus Cristo, <br>que, na sua grande misericórdia, <br>pela ressurreição de Jesus Cristo de entre os mortos, <br>nos fez renascer para uma esperança viva, <br>para uma herança incorruptível, <br>que nos está reservada no céu, <br>para a salvação que se vai revelar na plenitude dos tempos.<br>No Tempo Pascal<br>ANTÍFONA 1 Cf. Ez 47, 1-2.9<br>Vi a água sair do lado direito do templo. Aleluia. <br>E todos aqueles a quem chegou esta água foram salvos. Aleluia. Aleluia.<br>ANTÍFONA 2 Cf. Sf 3, 8; Ez 36, 25<br>No dia da minha ressurreição, diz o Senhor, Aleluia, <br>reunirei os povos e os reinos e derramarei sobre vós água pura. Aleluia.<br>ANTÍFONA 3 Cf. Dn 3, 77.79<br>Fontes e tudo o que se move nas águas, bendizei o Senhor. <br>Aleluia. <br>ANTÍFONA 4 1Pd 2, 9<br>Vós sois povo eleito, sacerdócio real, nação santa, <br>para anunciar os louvores de Deus, <br>que vos chamou das trevas para a sua luz admirável. Aleluia.<br><br>ANTÍFONA 5<br>Do vosso coração, Senhor Jesus Cristo, brotou uma fonte de água viva, <br>onde o mundo se lava dos seus pecados e a vida se renova. Aleluia.<br>6.5. Então, o sacerdote volta para a sua sede. Terminado o cântico, volta-se para <br>o povo e, de pé, com as mãos juntas, diz:<br>Deus todo-poderoso nos purifique do pecado <br>e, pela celebração da Eucaristia, <br>nos torne dignos de participar na mesa do seu reino,<br>pelos séculos dos séculos.<br>R. Amen.<br>Em seguida, omitido o Senhor, tende piedade (Kýrie eléison), diz-se o hino Glória, <br>quando está prescrito para a Missa.<br>B<br>O sacerdote exorta o povo à oração, dizendo estas palavras ou outras semelhantes:<br>Invoquemos, irmãos caríssimos, a Deus Pai, <br>para que este rito de aspersão reavive em nós a graça do Batismo,<br>por meio do qual participamos na morte redentora de Cristo,<br>a fim de ressuscitar com Ele para a vida nova.<br>Depois de breve oração em silêncio, diz:<br>Deus criador, que, na água e no Espírito,<br>destes forma e imagem ao homem e ao universo:<br> R. Purificai e abençoai a vossa Igreja.<br> Ou: Glória a V ós, Senhor.<br>Cristo, que, do vosso lado aberto na cruz,<br>fizestes brotar os sacramentos da salvação:<br> R. Purificai e abençoai a vossa Igreja.<br> Ou: Glória a V ós, Senhor.<br>Espírito Santo, que, da fonte batismal da Igreja, <br>nos fizestes renascer como novas criaturas:<br> R. Purificai e abençoai a vossa Igreja.<br> Ou: Glória a V ós, Senhor.<br>RITOS INICIAIS<br><br>Depois, de mãos juntas, o sacerdote diz:<br>Deus de infinita santidade,<br>que reunis a vossa Igreja, esposa e corpo do Senhor, <br>no dia memorial da ressurreição,<br>abençoai o vosso povo e reavivai em nós, por meio desta água,<br>a memória da Páscoa e a graça do Batismo. <br>Por Cristo nosso Senhor.<br>R. Amen.<br>Ou, especialmente, no Tempo Pascal:<br>Deus, Pai santo, que, do Cordeiro imolado na cruz, <br>fizestes brotar as fontes da água viva:<br>R. Purificai e abençoai o vosso povo. Ou Glória a V ós, Senhor.<br>Cristo, que renovais a juventude da Igreja <br>no Batismo da água e na palavra da vida:<br>R. Purificai e abençoai o vosso povo. Ou Glória a V ós, Senhor.<br>Espírito Santo, que, das águas do Batismo,<br>nos fazeis surgir como primícias da nova humanidade:<br>R. Purificai e abençoai o vosso povo. Ou Glória a V ós, Senhor.<br>Depois, de mãos juntas, o sacerdote diz:<br>Deus todo-poderoso,<br>que, nos sinais sagrados da nossa fé,<br>renovais os prodígios da criação e da redenção, <br>abençoai + esta água<br>e dai a todos os que renasceram no Batismo<br>a graça de serem anunciadores e testemunhas da Páscoa, <br>que se renova na vossa Igreja.<br>Por Cristo nosso Senhor.<br>R. Amen.<br>O sacerdote toma o hissope, asperge-se a si mesmo e, depois, os ministros, o clero <br>e os fiéis. Se parecer conveniente, pode passar através da igreja para a aspersão <br>dos fiéis.<br>Entretanto, canta-se um cântico apropriado, como acima se indica no n. 6.4.<br><br>Então, o sacerdote volta para a sua sede. Terminado o cântico, volta-se para o <br>povo e, de pé, com as mãos juntas, diz:<br>Deus todo-poderoso nos purifique do pecado <br>e, pela celebração da Eucaristia, <br>nos torne dignos de participar na mesa do seu reino,<br>pelos séculos dos séculos.<br>R. Amen.<br>Em seguida, omitido o Senhor, tende piedade (Kýrie eléison), diz-se o hino Glória, <br>quando está prescrito para a Missa.<br>7. Seguem-se as invocações Senhor, tende piedade de nós (Kýrie, eléison), a <br>não ser que tenha sido usado o rito do Ato Penitencial – C ou o rito da Aspersão <br>Dominical da Água Benta.<br>V. Senhor, tende piedade de nós. R. Senhor, tende piedade de nós.<br>V. Cristo, tende piedade de nós. R. Cristo, tende piedade de nós.<br>V. Senhor, tende piedade de nós. R. Senhor, tende piedade de nós.<br>Ou:<br>V. Senhor, misericórdia. R. Senhor, misericórdia. <br>V. Cristo, misericórdia. R. Cristo, misericórdia. <br>V. Senhor, misericórdia. R. Senhor, misericórdia. <br>Ou, com canto em latim:<br>V. Kýrie, eléison. R. Kýrie, eléison.<br>V. Christe, eléison. R. Christe, eléison.<br>V. Kýrie, eléison. R. Kýrie, eléison.<br>RITOS INICIAIS<br><br>8. Em seguida, segundo as rubricas, canta-se ou recita-se o hino:<br>Glória a Deus nas alturas<br>e paz na terra aos homens por Ele amados.<br>Senhor Deus, Rei dos céus, Deus Pai todo-poderoso: <br>nós Vos louvamos, <br>nós Vos bendizemos, <br>nós Vos adoramos,<br>nós Vos glorificamos, <br>nós Vos damos graças, por vossa imensa glória. <br>Senhor Jesus Cristo, Filho unigénito, <br>Senhor Deus, Cordeiro de Deus, Filho de Deus Pai: <br>Vós que tirais o pecado do mundo, tende piedade de nós; <br>Vós que tirais o pecado do mundo, acolhei a nossa súplica; <br>Vós que estais à direita do Pai, tende piedade de nós. <br>Só Vós sois o Santo; só Vós, o Senhor; <br>só Vós, o Altíssimo, Jesus Cristo, <br>com o Espírito Santo, na glória de Deus Pai. Amen.<br>Ou, com canto em latim:<br>Glória in excélsis Deo<br>et in terra pax homínibus bonae voluntátis. <br>Laudámus te, benedícimus te, adorámus te, glorificámus te, <br>grátias ágimus tibi propter magnam glóriam tuam, <br>Dómine Deus, Rex cæléstis, Deus Pater omnípotens. <br>Dómine Fili unigénite, Iesu Christe, <br>Dómine Deus, Agnus Dei, Fílius Patris, <br>qui tollis peccáta mundi, miserére nobis; <br>qui tollis peccáta mundi, súscipe deprecatiónem nostram. <br>Qui sedes ad déxteram Patris, miserére nobis. <br>Quóniam tu solus Sanctus, tu solus Dóminus, tu solus Altíssimus, <br>Iesu Christe, cum Sancto Spíritu: in glória Dei Patris. Amen.<br>9. Terminado o hino, o sacerdote, de mãos juntas, diz:<br><br>Oremos.<br>E todos, juntamente com o sacerdote, oram em silêncio durante alguns momentos.<br>Depois, o sacerdote, de braços abertos, diz a oração coleta.<br>Se a oração se dirige ao Pai, a conclusão é da seguinte forma:<br>Por nosso Senhor Jesus Cristo, vosso Filho, que é Deus <br>e convosco vive e reina, na unidade do Espírito Santo,<br>por todos os séculos dos séculos.<br>Se a oração se dirige ao Pai, com menção do Filho na parte final:<br>Ele que é Deus e convosco vive e reina, na unidade do Espírito <br>Santo,<br>por todos os séculos dos séculos.<br>Se a oração se dirige ao Filho:<br>Vós que sois Deus e viveis e reinais com o Pai,<br>na unidade do Espírito Santo, por todos os séculos dos séculos.<br>No fim, o povo aclama: Amen.<br>Liturgia da palavra<br>10. Conforme os costumes locais, no início da liturgia da palavra, antes da primeira leitura, pode entronizar-se solenemente a palavra de Deus. Em seguida, o <br>leitor vai ao ambão e lê a primeira leitura, que todos escutam sentados.<br>No fim da leitura, o leitor aclama:<br>Palavra do Senhor.<br>Todos respondem: Graças a Deus.<br>11. O salmista ou cantor canta ou recita o salmo, ao qual o povo responde com <br>o refrão.<br>12. A seguir, se há uma segunda leitura antes do Evangelho, o leitor lê-a no <br>ambão, como se disse acima.<br>No fim da leitura, o leitor aclama:<br>Palavra do Senhor.<br>Todos respondem: Graças a Deus.<br>LITURGIA DA PALAVRA<br><br>13. Segue-se o Aleluia ou outro cântico, requerido pelas rubricas, conforme o <br>tempo litúrgico.<br>14. Entretanto, o sacerdote impõe incenso, sendo usado, no turíbulo.<br> Em seguida, o diácono que tiver de proclamar o Evangelho, profundamente <br>inclinado diante do sacerdote, pede a bênção em voz baixa, dizendo:<br>A vossa bênção. <br>O sacerdote, em voz baixa, diz:<br>O Senhor esteja no teu coração e nos teus lábios,<br>para anunciares dignamente o seu Evangelho:<br>Em nome do Pai e do Filho + e do Espírito Santo.<br>O diácono benze-se e responde: Amen.<br>Se não houver diácono, o sacerdote, inclinado diante do altar, diz em silêncio:<br>Deus todo-poderoso, purificai o meu coração e os meus lábios, <br>para que eu anuncie dignamente o vosso santo Evangelho.<br>15. A seguir, o diácono ou o sacerdote, dirige-se para o ambão, acompanhado <br>dos acólitos que podem levar o incenso e os círios, e diz:<br>O Senhor esteja convosco.<br>O povo responde: Ele está no meio de nós.<br>O diácono ou o sacerdote diz:<br>Evangelho de nosso Senhor Jesus Cristo, segundo são N. <br>Ao mesmo tempo faz o sinal da cruz sobre o livro e, depois, sobre si mesmo na <br>fronte, na boca e no peito, e o mesmo fazem todos os demais.<br>O povo aclama: Glória a V ós, Senhor.<br>A seguir, quando se usar o incenso, o diácono ou o sacerdote incensa o livro e <br>proclama o Evangelho.<br>16. Terminado o Evangelho, o diácono ou o sacerdote aclama:<br>Palavra da salvação. <br>O povo responde: Glória a V ós, Senhor.<br>Em seguida, beija o livro, dizendo em silêncio:<br>Por este santo Evangelho, perdoai-nos, Senhor.<br>17. Depois, segue-se a homilia, que deve ser feita pelo sacerdote ou pelo diácono, <br>todos os domingos e festas de preceito e recomendada nos outros dias.<br><br>18. Terminada a homilia, canta-se ou recita-se, quando é prescrito, o símbolo ou <br>profissão de fé.<br>Creio em um só Deus, <br>Pai todo-poderoso, Criador do céu e da terra, <br>de todas as coisas visíveis e invisíveis.<br>Creio em um só Senhor, Jesus Cristo, <br>Filho unigénito de Deus, <br>nascido do Pai antes de todos os séculos: <br>Deus de Deus, luz da luz, <br>Deus verdadeiro de Deus verdadeiro; <br>gerado, não criado, consubstancial ao Pai. <br>Por Ele todas as coisas foram feitas. <br>E por nós, homens, e para nossa salvação desceu dos céus.<br>Todos se inclinam às palavras: E encarnou ... e Se fez homem.<br>E encarnou pelo Espírito Santo, no seio da Virgem Maria, <br>e Se fez homem. <br>Também por nós foi crucificado sob Pôncio Pilatos; <br>padeceu e foi sepultado. <br>Ressuscitou ao terceiro dia, conforme as Escrituras; <br>e subiu aos céus, onde está sentado à direita do Pai. <br>De novo há de vir em sua glória,<br>para julgar os vivos e os mortos; <br>e o seu reino não terá fim. <br>Creio no Espírito Santo, Senhor que dá a vida, <br>e procede do Pai e do Filho; <br>e com o Pai e o Filho é adorado e glorificado: <br>Ele que falou pelos profetas. <br>Creio na Igreja una, santa, católica e apostólica. <br>Professo um só batismo para remissão dos pecados. <br>E espero a ressurreição dos mortos, <br>e a vida do mundo que há de vir. Amen.<br>Ou, com canto em latim:<br>Credo in unum Deum, <br>Patrem omnipoténtem, factórem cæli et terræ,<br>LITURGIA DA PALAVRA<br><br>visibílium ómnium et invisibílium. <br>Et in unum Dóminum Iesum Christum, <br>Fílium Dei unigénitum, <br>et ex Patre natum ante ómnia saécula. <br>Deum de Deo, lumen de lúmine, <br>Deum verum de Deo vero, <br>génitum, non factum, consubstantiálem Patri: <br>per quem ómnia facta sunt. <br>Qui propter nos hómines et propter nostram salútem <br>descéndit de cælis.<br>Ad verba quæ sequuntur, usque ad factus est, omnes se inclinant:<br>Et incarnátus est de Spíritu Sancto <br>ex María Vírgine, et homo factus est. <br>Crucifíxus étiam pro nobis sub Póntio Piláto; <br>passus et sepúltus est, <br>et resurréxit tértia die, secúndum Scriptúras, <br>et ascendit in caelum, sedet ad déxteram Patris. <br>Et íterum ventúrus est cum glória, <br>iudicáre vivos et mórtuos, cuius regni non erit finis. <br>Et in Spíritum Sanctum, Dóminum et vivificántem: <br>qui ex Patre Filióque procédit. <br>Qui cum Patre et Fílio simul adorátur et conglorificátur: <br>qui locútus est per prophétas. <br>Et unam, sanctam, cathólicam et apostólicam Ecclésiam. <br>Confíteor unum baptísma in remissiónem peccatórum. <br>Et exspécto resurrectiónem mortuórum, <br>et vitam ventúri sæculi. Amen.<br>Ou:<br>19. Em vez do símbolo niceno-constantinopolitano, sobretudo no Tempo da <br>Quaresma e no Tempo Pascal, pode dizer-se o símbolo batismal da Igreja Romana, <br>chamado «Símbolo dos Apóstolos».<br>Creio em Deus, <br>Pai todo-poderoso, Criador do céu e da terra; <br>e em Jesus Cristo, seu único Filho, nosso Senhor,<br>Todos se inclinam às palavras: que foi concebido ... nasceu da Virgem Maria. <br>que foi concebido pelo poder do Espírito Santo; <br>nasceu da Virgem Maria;<br><br>padeceu sob Pôncio Pilatos, <br>foi crucificado, morto e sepultado; <br>desceu à mansão dos mortos; <br>ressuscitou ao terceiro dia; <br>subiu aos céus; <br>está sentado à direita de Deus Pai todo-poderoso, <br>de onde há de vir a julgar os vivos e os mortos. <br>Creio no Espírito Santo; <br>na santa Igreja católica; <br>na comunhão dos santos; <br>na remissão dos pecados; <br>na ressurreição da carne; <br>na vida eterna. Amen.<br>Oração universal<br>20. Segue-se a oração universal ou oração dos fiéis.<br>Para alguns exemplos de formulários, veja-se o Apêndice, p. 1406-1420.<br>Início<br>O sacerdote convida os fiéis à oração com uma breve admonição inicial.<br>Intenções<br>As intenções são propostas por um diácono ou um leitor ou outra pessoa idónea.<br>O povo exprime a sua participação ou com uma invocação ou rezando em silêncio.<br>Normalmente, a ordem das intenções é a seguinte:<br>a) pelas necessidades da Igreja;<br>b) pelas autoridades civis e pela salvação do mundo;<br>c) por aqueles que sofrem dificuldades;<br>d) pela comunidade local.<br>Conclusão<br>O sacerdote termina com uma oração conclusiva.<br>No fim, o povo aclama: Amen.<br>LITURGIA DA PALAVRA<br><br>Liturgia eucarística<br>21. Terminada a oração universal, inicia-se o cântico do ofertório. Entretanto, os <br>ministros colocam no altar o corporal, o sanguinho, o cálice, a pala e o missal.<br>22. Convém que os fiéis manifestem a sua participação, apresentando o pão e o <br>vinho para a celebração da Eucaristia, e mesmo outros dons para as necessidades <br>da Igreja e dos pobres, conforme os costumes locais.<br>23. O sacerdote, junto do altar, toma a patena com o pão e, elevando-a com ambas <br>as mãos um pouco acima do altar, diz em voz baixa:<br>Bendito sejais, Senhor, Deus do universo,<br>pelo pão que recebemos da vossa bondade,<br>fruto da terra e do trabalho do homem, <br>que hoje Vos apresentamos <br>e que para nós se vai tornar pão da vida. <br>Em seguida, depõe a patena com o pão sobre o corporal.<br>Se não houver cântico do ofertório, o sacerdote pode proferir estas palavras em <br>voz alta. <br>No fim, o povo pode aclamar: Bendito seja Deus para sempre.<br>24. O diácono ou o sacerdote deita vinho e um pouco de água no cálice, dizendo <br>em silêncio:<br>Pelo mistério desta água e deste vinho,<br>sejamos participantes da divindade<br>d’Aquele que assumiu a nossa humanidade.<br>25. Em seguida, o sacerdote toma o cálice e, elevando-o com ambas as mãos um <br>pouco acima do altar, diz em voz baixa:<br>Bendito sejais, Senhor, Deus do universo, <br>pelo vinho que recebemos da vossa bondade, <br>fruto da videira e do trabalho do homem, <br>que hoje Vos apresentamos <br>e que para nós se vai tornar vinho da salvação.<br>Em seguida, depõe o cálice sobre o corporal.<br><br>Se não houver cântico do ofertório, o sacerdote pode proferir estas palavras em <br>voz alta. <br>No fim, o povo pode aclamar: Bendito seja Deus para sempre.<br>26. A seguir, o sacerdote inclina-se e diz em silêncio:<br>De coração humilhado e contrito sejamos recebidos por V ós, Senhor. <br>Assim o nosso sacrifício seja agradável a vossos olhos, Senhor nosso Deus.<br>27. Depois, usando-se o incenso, incensa as oblatas, a cruz e o altar. A seguir, o <br>diácono ou outro ministro incensa o sacerdote e o povo.<br>28. Em seguida, o sacerdote, estando ao lado do altar, lava as mãos, dizendo em <br>silêncio:<br>Lavai-me, Senhor, da minha iniquidade e purificai-me do meu pecado.<br>29. Depois, estando ao meio do altar e, voltado para o povo, abrindo e juntando <br>as mãos, diz:<br>Orai, irmãos, para que o meu e vosso sacrifício <br>seja aceite por Deus Pai todo-poderoso.<br> Ou: Irmãos, ao oferecermos o sacrifício de toda a Igreja,<br> oremos a Deus Pai todo-poderoso.<br> Ou: Orai, irmãos,<br> para que as nossas alegrias e tristezas de cada dia, <br> unidas ao sacrifício de Cristo, <br> sejam aceites por Deus Pai todo-poderoso.<br>O povo levanta-se e responde:<br>Receba o Senhor por tuas mãos este sacrifício, <br>para glória do seu nome, <br>para nosso bem e de toda a santa Igreja.<br>Ou: <br>Oremos.<br>Todos, juntamente com o sacerdote, oram em silêncio durante alguns momentos.<br>LITURGIA EUCARÍSTICA<br><br>30. Em seguida, de braços abertos, o sacerdote diz a oração sobre as oblatas.<br>Se a oração se dirige ao Pai, a conclusão é da seguinte forma:<br>Por Cristo nosso Senhor.<br>Se a oração se dirige ao Pai, com menção do Filho na parte final:<br>Ele que vive e reina pelos séculos dos séculos.<br>Se a oração se dirige ao Filho:<br>Vós que viveis e reinais pelos séculos dos séculos.<br>No fim o povo aclama: Amen.<br><br>31. Depois, o sacerdote começa a Oração eucarística.<br>Abrindo os braços diz: <br>O Senhor esteja convosco. <br>O povo responde: Ele está no meio de nós.<br>Elevando as mãos, o sacerdote continua:<br>Corações ao alto. <br>O povo responde: O nosso coração está em Deus.<br>De braços abertos, o sacerdote acrescenta:<br>Dêmos graças ao Senhor nosso Deus.<br>O povo responde: É nosso dever, é nossa salvação.<br>O sacerdote continua o prefácio de braços abertos.<br>No fim junta as mãos e conclui o prefácio, cantando ou recitando em voz alta <br>com o povo:<br>Santo, Santo, Santo, <br>Senhor Deus do Universo.<br>O céu e a terra proclamam a vossa glória. <br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br>Ou, com canto em latim:<br>Sanctus, Sanctus, Sanctus Dóminus Deus Sábaoth. <br>Pleni sunt cæli et terra glória tua. <br>Hosánna in excélsis. <br>Benedíctus qui venit in nómine Dómini. <br>Hosánna in excélsis.<br>32. Em todas as Missas, o sacerdote celebrante pode cantar, sobretudo as partes <br>principais da Oração eucarística.<br> Na Oração eucarística I, ou Cânone romano, podem omitir-se as partes que <br>aparecem entre parêntesis.<br><br>PREFÁCIO I DO ADVENTO<br>As duas vindas de Cristo<br>33. Este prefácio diz-se desde o Domingo I do Advento até ao dia 16 de dezembro, <br>nas Missas do Tempo e também nas outras Missas que não têm prefácio próprio.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte <br>por nosso Senhor Jesus Cristo.<br>Ele veio a primeira vez, <br>na humildade da natureza humana, <br>realizar o eterno desígnio do vosso amor <br>e abrir-nos o caminho da salvação; <br>de novo há de vir, no esplendor da sua glória, <br>para nos dar em plenitude os bens prometidos,<br>que, entretanto, vigilantes na fé, ousamos esperar.<br>Por isso, com os anjos e os arcanjos,<br>os tronos e as dominações <br>e todos os coros celestes,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO I-A DO ADVENTO<br>Cristo, Senhor e juiz da história<br>33 a. Este prefácio diz-se desde o Domingo I do Advento até ao dia 16 de dezembro, nas Missas do Tempo e também nas outras Missas que não têm prefácio <br>próprio.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Pai santo, Deus eterno e omnipotente, <br>princípio e fim de todas as coisas, <br>é verdadeiramente nosso dever dar-Vos graças <br>e cantar-Vos um hino de bênção e de louvor.<br>Vós nos escondestes o dia e a hora <br>em que Jesus Cristo, vosso Filho, Senhor e juiz da história, <br>aparecerá sobre as nuvens do céu, <br>revestido de poder e majestade.<br>Nesse dia tremendo e glorioso, <br>passará o mundo presente <br>e aparecerão os novos céus e a nova terra.<br>Agora Ele vem ao nosso encontro, <br>em cada homem e em cada tempo, <br>para que O recebamos na fé e na caridade <br>e dêmos testemunho da gloriosa esperança do seu reino.<br>Por isso, na esperança da sua vinda,<br>com os anjos e os santos e todos os coros celestes, <br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo.<br><br>PREFÁCIO II DO ADVENTO<br>A dupla expetativa de Cristo<br>34. Este prefácio diz-se desde 17 a 24 de dezembro nas Missas do Tempo e <br>também nas outras Missas que não têm prefácio próprio.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte, <br>por nosso Senhor Jesus Cristo.<br>Foi Ele que os Profetas anunciaram, <br>a Virgem Mãe esperou com inefável amor, <br>João Batista proclamou estar para vir <br>e mostrou já presente no meio dos homens. <br>É Ele que nos dá a graça de nos prepararmos com alegria <br>para o mistério do seu nascimento, <br>a fim de nos encontrar vigilantes na oração <br>e celebrando os seus louvores.<br>Por isso, com os anjos e os arcanjos,<br>os tronos e as dominações<br>e todos os coros celestes,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO II-A DO ADVENTO<br>Maria, nova Eva<br>34 a. Este prefácio diz-se desde 17 a 24 de dezembro, nas Missas do Tempo e <br>também nas outras Missas que não têm prefácio próprio.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação..<br>Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever dar-Vos graças, <br>sempre e em toda a parte.<br>Nós Vos louvamos, nós Vos bendizemos, <br>nós Vos glorificamos pelo admirável mistério da Virgem Mãe: <br>Do antigo adversário veio a ruína, <br>do seio virginal da Filha de Sião <br>germinou Aquele que nos alimenta com o pão dos anjos <br>e, para todo o género humano, brotou a salvação e a paz. <br>A graça, que em Eva nos foi tirada, <br>foi-nos restituída em Maria. <br>Nela, Mãe de todos os homens, <br>a maternidade, resgatada do pecado e da morte, <br>recebe o dom da vida nova: <br>onde abundou a culpa, superabundou a misericórdia <br>por Cristo, nosso Salvador.<br>Por isso, na esperança da sua vinda,<br>com os anjos e os santos, <br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo.<br><br>PREFÁCIO I DO NATAL DO SENHOR<br>Cristo luz<br>35. Este prefácio diz-se nas Missas do Natal e sua oitava, nas Missas durante a <br>oitava, ainda que tenham prefácio próprio, exceto nas Missas com prefácio próprio dos divinos mistérios ou das Pessoas divinas, e nos dias feriais do Tempo do <br>Natal.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte.<br>Pelo mistério do Verbo Encarnado, <br>nova luz da vossa glória brilhou sobre nós, <br>para que, contemplando a Deus visível aos nossos olhos, <br>sejamos arrebatados no amor do que é invisível.<br>Por isso, com os anjos e os arcanjos,<br>os tronos e as dominações <br>e todos os coros celestes,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br>No Cânone romano diz-se o Em comunhão com toda a Igreja próprio, p. 643. <br>Nas Orações eucarísticas II e III faz-se também a comemoração própria do Natal. <br>Nas Missas da vigília e da Noite do Natal do Senhor, diz-se: ao celebrarmos a <br>noite santíssima; nas outras Missas, até à oitava do Natal, inclusive, diz-se: ao <br>celebrarmos o dia santíssimo.<br><br>PREFÁCIO II DO NATAL DO SENHOR<br>A restauração do universo na Encarnação<br>36. Este prefácio diz-se nas Missas do Natal e sua oitava, nas Missas durante a <br>oitava, ainda que tenham prefácio próprio, exceto nas Missas com prefácio próprio dos divinos mistérios ou das Pessoas divinas, e nos dias feriais do Tempo do <br>Natal.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte, <br>por nosso Senhor Jesus Cristo.<br>No mistério do seu nascimento, <br>Aquele que, por sua natureza, era invisível,<br>tornou-Se visível aos nossos olhos. <br>Gerado desde toda a eternidade, <br>começou a existir no tempo<br>para renovar em Si a natureza decaída, <br>restaurar o universo e reconduzir ao reino dos céus<br>o homem perdido pelo pecado.<br>Por isso, com todos os anjos,<br>proclamamos a vossa glória, <br>dizendo (cantando) com alegria:<br>Santo, Santo, Santo.<br>No Cânone romano diz-se o Em comunhão com toda a Igreja próprio. Nas Orações <br>eucarísticas II e III faz-se também a comemoração própria do Natal. Nas Missas <br>da vigília e da noite do Natal do Senhor, diz-se: ao celebrarmos a noite santíssima; nas outras Missas, até à oitava do Natal, inclusive, diz-se: ao celebrarmos o <br>dia santíssimo.<br><br>PREFÁCIO III DO NATAL DO SENHOR<br>A admirável permuta realizada na Encarnação do V erbo<br>37. Este prefácio diz-se nas Missas do Natal e sua oitava, nas Missas durante a <br>oitava, ainda que tenham prefácio próprio, exceto nas Missas com prefácio próprio dos divinos mistérios ou das Pessoas divinas, e nos dias feriais do Tempo do <br>Natal.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte, <br>por nosso Senhor Jesus Cristo.<br>Por Ele resplandece hoje, para os homens,<br>a admirável permuta da encarnação redentora: <br>a nossa fragilidade humana é assumida pelo Verbo, <br>o homem mortal é elevado à dignidade imortal <br>e, unido a Vós em comunhão admirável, <br>torna-se participante da vida eterna.<br>Por isso, com todos os coros dos anjos,<br>proclamamos a vossa glória, <br>dizendo (cantando) com alegria:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br>No Cânone romano diz-se o Em comunhão com toda a Igreja próprio. Nas Orações <br>eucarísticas II e III faz-se também a comemoração própria do Natal. Nas Missas <br>da vigília e da noite do Natal do Senhor, diz-se: ao celebrarmos a noite santíssima; nas outras Missas, até à oitava do Natal, inclusive, diz-se: ao celebrarmos o <br>dia santíssimo.<br><br>PREFÁCIO DA EPIFANIA DO SENHOR<br>Cristo, luz de todos os povos<br>38. Este prefácio diz-se nas Missas da solenidade da Epifania. Nos dias que decorrem desde a Epifania até ao sábado que precede a festa do Batismo do Senhor <br>pode dizer-se este prefácio ou um dos prefácios do Natal.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte.<br>Hoje, em Cristo, luz do mundo, <br>revelastes a todos os povos o mistério da nossa salvação <br>e, manifestando-O na nossa natureza mortal, <br>nos renovastes com o esplendor da sua imortalidade.<br>Por isso, com os anjos e os arcanjos,<br>os tronos e as dominações <br>e todos os coros celestes,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br>No Cânone romano diz-se o Em comunhão com toda a Igreja próprio. Nas Orações <br>eucarísticas II e III faz-se também a comemoração própria.<br><br>PREFÁCIO I DA QUARESMA<br>Significado espiritual da Quaresma<br>39. Este prefácio diz-se no Tempo da Quaresma, especialmente nos domingos <br>que não têm outro prefácio mais próprio.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte, <br>por nosso Senhor Jesus Cristo.<br>Todos os anos concedeis aos vossos fiéis <br>a graça de se prepararem, <br>na alegria do coração purificado, <br>para celebrar as festas pascais, <br>a fim de que, pela oração mais intensa, <br>pela caridade mais diligente, <br>participando nos mistérios da renovação cristã, <br>alcancem a plenitude da filiação divina.<br>Por isso, com os anjos e os arcanjos, <br>os tronos e as dominações<br>e todos os coros celestes,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO II DA QUARESMA<br>A penitência espiritual<br>40. Este prefácio diz-se no Tempo da Quaresma, especialmente nos domingos <br>que não têm prefácio mais próprio.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte.<br>Para renovar, na santidade, os vossos filhos, <br>concedeis este tempo de salvação, <br>a fim de que, libertando-se do fermento do pecado, <br>se convertam a Vós de todo o coração <br>e vivam de tal modo as realidades temporais <br>que procurem sempre os bens eternos.<br>Por isso, com os anjos e os santos,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO III DA QUARESMA<br>Os frutos da abstinência<br>41. Este prefácio diz-se nas Missas dos dias feriais da Quaresma e nos dias de <br>jejum.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte.<br>Vós nos ensinais, pela abstinência quaresmal, <br>a manifestar-Vos a nossa gratidão, <br>a dominar os excessos da nossa inclinação para o mal <br>e a dar alimento aos que têm fome, <br>imitando a vossa divina bondade.<br>Por isso, com todos os coros dos anjos,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO IV DA QUARESMA<br>Os frutos do jejum<br>42. Este prefácio diz-se nas Missas dos dias feriais da Quaresma e nos dias de <br>jejum.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte.<br>Pelo jejum corporal<br>reprimis os vícios e elevais o espírito, <br>infundis a fortaleza e dais a recompensa, <br>por nosso Senhor Jesus Cristo.<br>Por Ele, os anjos louvam a vossa majestade, <br>as dominações Vos adoram, <br>as potestades Vos reverenciam; <br>os céus, os espíritos celestes <br>e os serafins Vos aclamam, <br>unidos em eterna exultação.<br>Permiti que nos associemos às suas vozes,<br>proclamando (cantando) humildemente o vosso louvor:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO V DA QUARESMA<br>O caminho do êxodo no deserto quaresmal<br>42 a. Este prefácio diz-se no Tempo da Quaresma, especialmente nos domingos <br>que não têm prefácio mais próprio.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, rico de misericórdia, <br>é verdadeiramente nossa salvação bendizer o vosso nome, <br>no nosso itinerário para a luz pascal, <br>seguindo os passos de Cristo, <br>mestre e exemplo da humanidade, <br>reconciliada no vosso amor.<br>Vós abris à Igreja o caminho de um novo êxodo, <br>através do deserto quaresmal, <br>para que, aos pés da montanha santa, <br>de coração contrito e humilhado, <br>tome consciência da sua vocação como povo da aliança, <br>reunido para cantar o vosso louvor,<br>escutar a vossa palavra <br>e viver a experiência admirável dos vossos prodígios.<br>Por isso, com os anjos e os arcanjos <br>e todos os coros celestes, <br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo.<br><br>PREFÁCIO VI DA QUARESMA<br>O sacramento da reconciliação no Espírito<br>42 b. Este prefácio pode dizer-se na Missa da reconciliação e na Missa de caráter <br>penitencial. Diz-se também no Tempo da Quaresma.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus omnipotente e misericordioso, <br>é verdadeiramente nosso dever, é nossa salvação <br>louvar-Vos e dar-Vos graças por todos os benefícios<br>e, especialmente, pela graça do perdão.<br>Ao homem, náufrago do pecado e da morte, <br>pelo sacramento da reconciliação, <br>abristes em Cristo, morto e ressuscitado,<br>o porto da misericórdia e da paz. <br>Pelo poder do vosso Espírito, <br>estabelecestes para a Igreja, <br>santa e também pecadora, <br>uma segunda tábua de salvação depois do Batismo <br>e continuamente a renovais <br>para a reunir no banquete do vosso amor.<br>Por isso, com os anjos e os santos,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo.<br><br>PREFÁCIO I DA PAIXÃO DO SENHOR<br>O poder da Cruz<br>43. Este prefácio diz-se durante a Semana V da Quaresma e nas Missas da Santa <br>Cruz e da Paixão do Senhor.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente,<br>é verdadeiramente nosso dever, é nossa salvação<br>dar-Vos graças, sempre e em toda a parte.<br>Pela paixão redentora do vosso Filho,<br>abristes aos homens o caminho da fé,<br>para proclamarem a glória do vosso nome.<br>No admirável poder da cruz<br>resplandece o julgamento do mundo<br>e a vitória do Crucificado.<br>Por isso, com os anjos e todos os santos,<br>proclamamos a vossa glória, <br>dizendo (cantando) com alegria:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO II DA PAIXÃO DO SENHOR<br>A vitória da Paixão<br>44. Este prefácio diz-se na segunda, terça e quarta-feira da Semana Santa.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte, <br>por nosso Senhor Jesus Cristo.<br>Aproximam-se os dias solenes <br>da paixão salvadora e da ressurreição gloriosa, <br>em que é vencida a iniquidade da antiga serpente <br>e se renova o mistério da nossa redenção.<br>Por isso, a multidão dos anjos<br>adora a vossa majestade<br>e exulta eternamente na vossa presença.<br>Permiti que nos associemos às suas vozes,<br>dizendo (cantando) com alegria:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO PASCAL I<br>O mistério pascal<br>45. Este prefácio diz-se no Tempo Pascal. <br>Na Missa da Vigília Pascal diz-se: nesta noite; <br>no dia da Páscoa e sua oitava diz-se: neste dia; <br>depois da oitava diz-se: neste tempo.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>que sempre Vos louvemos, <br>mas com maior solenidade (nesta noite – neste dia – neste tempo), <br>em que Cristo, nossa Páscoa, foi imolado.<br>Ele é o Cordeiro de Deus que tirou o pecado do mundo: <br>morrendo destruiu a morte <br>e ressuscitando restaurou a vida.<br>Por isso, na plenitude da alegria pascal,<br>exultam os homens por toda a terra<br>e, com os anjos e todos os coros celestes,<br>proclamam a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas. <br>No Cânone romano diz-se o Em comunhão com toda a Igreja e Aceitai benignamente próprios. Nas Orações eucarísticas II e III faz-se também a comemoração <br>própria. Na Vigília Pascal diz-se: ao celebrarmos a noite santíssima.<br><br>PREFÁCIO PASCAL II<br>A vida nova em Cristo<br>46. Este prefácio diz-se no Tempo Pascal.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>que sempre Vos louvemos, <br>mas com maior solenidade neste tempo, <br>em que Cristo, nossa Páscoa, foi imolado.<br>Por Ele nascem os filhos da luz para a vida eterna <br>e abrem-se para os fiéis as portas do reino dos céus,<br>porque a nossa morte foi redimida pela sua morte <br>e na sua ressurreição ressurgiu a vida do género humano.<br>Por isso, na plenitude da alegria pascal,<br>exultam os homens por toda a terra<br>e, com os anjos e todos os coros celestes,<br>proclamam a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO PASCAL III<br>Cristo vivo e intercessor perpétuo em nosso favor<br>47. Este prefácio diz-se no Tempo Pascal.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>que sempre Vos louvemos, <br>mas com maior solenidade neste tempo, <br>em que Cristo, nossa Páscoa, foi imolado.<br>Ele Se oferece continuamente por nós <br>e nos defende com a sua intercessão. <br>Foi imolado sobre a cruz, <br>mas não morrerá jamais; <br>foi morto, mas agora vive para sempre.<br>Por isso, na plenitude da alegria pascal,<br>exultam os homens por toda a terra<br>e, com os anjos e todos os coros celestes,<br>proclamam a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO PASCAL IV<br>A renovação do universo pelo mistério pascal<br>48. Este prefácio diz-se no Tempo Pascal.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>que sempre Vos louvemos, <br>mas com maior solenidade neste tempo, <br>em que Cristo, nossa Páscoa, foi imolado.<br>Porque, vencendo a antiga corrupção do pecado, <br>renovou o universo decaído <br>e restaurou o género humano na sua integridade original.<br>Por isso, na plenitude da alegria pascal,<br>exultam os homens por toda a terra<br>e, com os anjos e todos os coros celestes,<br>proclamam a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO PASCAL V<br>Cristo, sacerdote e vítima<br>49. Este prefácio diz-se no Tempo Pascal.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>que sempre Vos louvemos, <br>mas com maior solenidade neste tempo, <br>em que Cristo, nossa Páscoa, foi imolado.<br>Pela oblação do seu Corpo na cruz,<br>levou à plenitude os sacrifícios antigos <br>e, entregando-Se a Vós pela nossa salvação, <br>tornou-Se Ele mesmo o sacerdote, o altar e o cordeiro.<br>Por isso, na plenitude da alegria pascal,<br>exultam os homens por toda a terra<br>e, com os anjos e todos os coros celestes,<br>proclamam a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO I DA ASCENSÃO DO SENHOR<br>O mistério da Ascensão<br>50. Este prefácio diz-se no dia de Ascensão do Senhor. Pode dizer-se também <br>nos dias a seguir à Ascensão, até ao sábado antes de Pentecostes, nas Missas que <br>não têm prefácio próprio.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte.<br>Porque o Senhor Jesus Cristo, Rei da glória, <br>vencedor da morte e do pecado, <br>subiu (hoje) ao mais alto dos céus, ante a admiração dos anjos, <br>e foi constituído Mediador entre Deus e os homens, <br>Juiz do mundo e Senhor dos senhores. <br>Ele não abandonou a nossa condição humana, <br>mas, subindo aos céus, como nossa cabeça e primogénito, <br>deu-nos a esperança de irmos um dia ao seu encontro, <br>como membros do seu Corpo, <br>para nos unir à sua glória imortal.<br>Por isso, na plenitude da alegria pascal,<br>exultam os homens por toda a terra<br>e, com os anjos e todos os coros celestes,<br>proclamam a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo.<br><br>PREFÁCIO II DA ASCENSÃO DO SENHOR<br>O mistério da Ascensão<br>51. Este prefácio diz-se no dia de Ascensão. Pode dizer-se também nos dias a <br>seguir à Ascensão, até ao sábado antes de Pentecostes, nas Missas que não têm <br>prefácio próprio.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte, <br>por nosso Senhor Jesus Cristo.<br>Depois da sua ressurreição, <br>apareceu a todos os discípulos<br>e, à vista deles, subiu aos céus, <br>para nos tornar participantes da sua divindade.<br>Por isso, na plenitude da alegria pascal,<br>exultam os homens por toda a terra<br>e, com os anjos e todos os coros celestes,<br>proclamam a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas. <br>No dia da Ascensão, no Cânone romano diz-se o Em comunhão com toda a Igreja <br>próprio. Nas Orações eucarísticas II e III faz-se também a comemoração própria.<br><br>PREFÁCIO I DOMINICAL DO TEMPO COMUM<br>O mistério pascal e o povo de Deus<br>52. Este prefácio diz-se nos domingos do Tempo Comum.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte, <br>por nosso Senhor Jesus Cristo.<br>Pelo seu mistério pascal, <br>Ele realizou a obra admirável <br>de nos chamar do pecado e da morte <br>à glória de geração escolhida, sacerdócio real, <br>nação santa, povo resgatado, <br>a fim de que, libertos do poder das trevas <br>para a claridade da vossa luz, <br>anunciemos por toda a parte as vossas maravilhas.<br>Por isso, com os anjos e os arcanjos, <br>os tronos e as dominações <br>e todos os coros celestes,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO II DOMINICAL DO TEMPO COMUM<br>O mistério da salvação<br>53. Este prefácio diz-se nos domingos do Tempo Comum.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte, <br>por nosso Senhor Jesus Cristo.<br>Compadecido dos errados caminhos dos homens, <br>dignou-Se nascer da Virgem Maria; <br>com a sua morte na cruz, <br>livrou-nos da morte eterna; <br>com a sua ressurreição, <br>deu-nos a vida imortal.<br>Por isso, com os anjos e os arcanjos, <br>os tronos e as dominações <br>e todos os coros celestes,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO III DOMINICAL DO TEMPO COMUM<br>A salvação do homem por um homem<br>54. Este prefácio diz-se nos domingos do Tempo Comum.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte.<br>Para manifestar o esplendor da vossa glória, <br>viestes em auxílio da fragilidade humana,<br>com o poder da vossa divindade; <br>da nossa condição mortal <br>tirastes o remédio para vencer a morte <br>e, da nossa ruína,<br>abristes o caminho da salvação, <br>por nosso Senhor Jesus Cristo.<br>Por Ele, a multidão dos anjos<br>adora a vossa majestade<br>e exulta eternamente na vossa presença.<br>Permiti que nos associemos às suas vozes,<br>dizendo (cantando) com alegria:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO IV DOMINICAL DO TEMPO COMUM<br>A história da salvação<br>55. Este prefácio diz-se nos domingos do Tempo Comum.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte, <br>por nosso Senhor Jesus Cristo.<br>Com o seu nascimento, Ele renovou a antiga condição humana;<br>com a sua morte destruiu os nossos pecados; <br>com a sua ressurreição conduziu-nos à vida eterna<br>e, na sua ascensão, abriu-nos as portas do céu.<br>Por isso, com os anjos e os santos,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO V DOMINICAL DO TEMPO COMUM<br>A criação<br>56. Este prefácio diz-se nos domingos do Tempo Comum.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte.<br>Vós criastes os elementos do mundo, <br>estabelecendo o curso dos tempos e as estações do ano; <br>formastes o homem à vossa imagem e semelhança <br>e lhe confiastes as maravilhas do universo, <br>para que, em vosso nome, domine sobre todas as criaturas <br>e Vos glorifique sem cessar, pela grandeza das vossas obras,<br>por nosso Senhor Jesus Cristo.<br>Por Ele, com todos os anjos,<br>proclamamos a vossa glória, <br>dizendo (cantando) com alegria:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO VI DOMINICAL DO TEMPO COMUM<br>O penhor da Páscoa eterna<br>57. Este prefácio diz-se nos domingos do Tempo Comum. <br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte. <br>Em Vós vivemos, nos movemos e existimos. <br>Durante a nossa vida terrena, <br>sentimos cada dia os efeitos da vossa bondade <br>e possuímos desde já o penhor da vida futura; <br>tendo recebido as primícias do Espírito, <br>pelo qual ressuscitastes Jesus Cristo de entre os mortos, <br>vivemos na esperança da Páscoa eterna. <br>Por isso, com todos os anjos,<br>proclamamos a vossa glória, <br>dizendo (cantando) com alegria: <br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO VII DOMINICAL DO TEMPO COMUM<br>A salvação pela obediência de Cristo<br>58. Este prefácio diz-se nos domingos do Tempo Comum.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte.<br>Na vossa infinita misericórdia, <br>de tal modo amastes o mundo <br>que nos enviastes o Redentor,<br>em tudo semelhante a nós, menos no pecado, <br>para poderdes amar em nós <br>o que amáveis em vosso Filho: <br>pela sua obediência, Ele restaurou os vossos dons,<br>que por desobediência tínhamos perdido.<br>Por isso, com os anjos e todos os santos,<br>proclamamos a vossa glória, <br>dizendo (cantando) com alegria:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO VIII DOMINICAL DO TEMPO COMUM<br>A Igreja reunida na comunhão da Trindade<br>59. Este prefácio diz-se nos domingos do Tempo Comum.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte.<br>Pelo sangue do vosso Filho e pela força do Espírito, <br>quisestes reconduzir à unidade do vosso povo <br>os filhos dispersos pelo pecado, <br>para que a Igreja, <br>reunida na comunhão da Trindade, <br>apareça no mundo <br>como corpo de Cristo <br>e templo do Espírito Santo, <br>para louvor da vossa infinita sabedoria.<br>Por isso, com todos os coros dos anjos,<br>proclamamos a vossa glória, <br>dizendo (cantando) com alegria:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO IX DOMINICAL DO TEMPO COMUM<br>A ação do Espírito na Igreja<br>59 a. Este prefácio diz-se nos domingos do Tempo Comum.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte.<br>Com admirável providência <br>ordenais a evolução dos tempos <br>e, com o poder do Espírito Santo, <br>conduzis a vossa Igreja, <br>para que, sempre fiel ao vosso amor, <br>nunca deixe de invocar-Vos nas suas tribulações,<br>nem de Vos dar graças nas suas alegrias,<br>por nosso Senhor Jesus Cristo.<br>Por Ele, com todos os coros dos anjos, <br>proclamamos a vossa glória, <br>dizendo (cantando) com alegria:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO X DOMINICAL DO TEMPO COMUM<br>O dia do Senhor<br>59 b. Este prefácio diz-se nos domingos do Tempo Comum.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, fonte da verdade e da vida, <br>é verdadeiramente nosso dever, é nossa salvação <br>bendizer-Vos e dar-Vos graças, <br>porque, neste dia de festa, <br>nos congregastes na vossa casa.<br>Hoje, a vossa família, <br>reunida para escutar a palavra da salvação <br>e participar no pão da vida, <br>celebra o memorial do Senhor ressuscitado, <br>na esperança do domingo que não tem ocaso, <br>quando toda a humanidade entrar no vosso descanso. <br>Então veremos o vosso rosto <br>e louvaremos sem fim a vossa misericórdia.<br>Nesta feliz esperança, <br>com os anjos e os santos, <br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO I DA SANTÍSSIMA EUCARISTIA<br>O sacrifício e o sacramento de Cristo<br>60. Este prefácio diz-se na Missa da Ceia do Senhor; pode dizer-se também <br>na solenidade do Santíssimo Corpo e Sangue de Cristo e nas Missas votivas da <br>Santíssima Eucaristia.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente,<br>é verdadeiramente nosso dever, é nossa salvação<br>dar-Vos graças, sempre e em toda a parte,<br>por nosso Senhor Jesus Cristo.<br>Verdadeiro e eterno sacerdote,<br>oferecendo-Se como vítima de salvação,<br>instituiu o sacrifício da nova e eterna aliança<br>e mandou que o celebrássemos em sua memória.<br>O seu Corpo, por nós imolado,<br>é alimento que nos fortalece<br>e o seu Sangue, por nós derramado,<br>é bebida que nos purifica.<br>Por isso, com os anjos e os arcanjos, <br>os tronos e as dominações <br>e todos os coros celestes,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO II DA SANTÍSSIMA EUCARISTIA<br>Os frutos da Santíssima Eucaristia<br>61. Este prefácio diz-se na solenidade do Santíssimo Corpo e Sangue de Cristo <br>e nas Missas votivas da Santíssima Eucaristia.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte, <br>por nosso Senhor Jesus Cristo.<br>Reunido com os apóstolos na Última Ceia,<br>para perpetuar a sua paixão salvadora, <br>entregou-Se a Si mesmo <br>como cordeiro imaculado e sacrifício perfeito. <br>Neste sagrado mistério, alimentais e santificais os fiéis, <br>para que os homens do mundo inteiro <br>sejam iluminados pela mesma fé <br>e unidos pela mesma caridade. <br>Assim nos reunimos à mesa deste admirável sacramento, <br>para que a abundância da vossa graça <br>nos faça participantes da vida celeste.<br>Por isso, todas as criaturas, no céu e na terra,<br>Vos adoram, cantando um cântico novo.<br>E também nós, com todos os coros dos anjos,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo.<br><br>PREFÁCIO III DA SANTÍSSIMA EUCARISTIA<br>A Eucaristia, viático para a Páscoa eterna<br>61 a. Este prefácio diz-se nas Missas rituais para o viático e pode dizer-se nas <br>Missas votivas da Santíssima Eucaristia.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus de misericórdia e de paz. <br>É verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças e bendizer o vosso nome.<br>Vós quisestes que o vosso Filho, Jesus Cristo, <br>obediente até à morte na cruz,<br>nos abrisse o caminho para Vós, <br>plenitude de toda a esperança humana. <br>Na Eucaristia, testamento do seu amor, <br>Ele faz-Se comida e bebida espiritual<br>para a nossa viagem a caminho da Páscoa eterna.<br>Com este penhor da ressurreição final,<br>esperamos participar na mesa gloriosa do vosso reino <br>e, com os anjos e os santos,<br>proclamamos a vossa glória, <br>dizendo (cantando) com alegria: <br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO I DA VIRGEM SANTA MARIA<br>A Maternidade da Virgem santa Maria<br>62. Este prefácio diz-se nas Missas da Virgem santa Maria, especificando no <br>lugar próprio o nome da celebração do dia, como se indica nas respetivas Missas.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte, <br>e louvar-Vos, bendizer-Vos e glorificar-Vos <br>na memória (festa – solenidade) da Virgem santa Maria.<br>Pelo poder do Espírito Santo,<br>Ela concebeu o vosso Filho unigénito <br>e, sem perder a glória da sua virgindade, <br>deu ao mundo a luz eterna, nosso Senhor Jesus Cristo.<br>Por Ele, os anjos louvam a vossa majestade, <br>as dominações Vos adoram, <br>as potestades Vos reverenciam; <br>os céus, os espíritos celestes e os serafins Vos aclamam, <br>unidos em eterna exultação.<br>Permiti que nos associemos às suas vozes,<br>proclamando (cantando) humildemente o vosso louvor:<br>Santo, Santo, Santo.<br><br>PREFÁCIO II DA VIRGEM SANTA MARIA<br>A Igreja louva a Deus com as palavras de Maria<br>63. Este prefácio diz-se nas Missas da Virgem santa Maria, especificando no <br>lugar próprio o nome da celebração do dia, como se indica nas respetivas Missas.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>celebrar o vosso poder admirável na perfeição dos santos<br>e exaltar a vossa bondade <br>na memória (festa – solenidade) da Virgem santa Maria, <br>inspirando-nos no seu cântico de louvor.<br>Vós fizestes maravilhas a favor de todos os povos <br>e manifestastes, de geração em geração, a vossa misericórdia,<br>quando olhastes para a humildade da vossa serva <br>e, por Ela, nos destes o Salvador do mundo, <br>vosso Filho, nosso Senhor Jesus Cristo.<br>Por Ele, a multidão dos anjos adora a vossa majestade<br>e exulta eternamente na vossa presença.<br>Permiti que nos associemos às suas vozes,<br>dizendo (cantando) com alegria:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas. <br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO III DA VIRGEM SANTA MARIA<br>Maria, sinal de consolação e de esperança<br>63 a. Este prefácio diz-se nas Missas da Virgem santa Maria.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever dar-Vos graças, <br>é nossa salvação glorificar-Vos. <br>Nós Vos louvamos e bendizemos, <br>por Jesus Cristo, vosso Filho, <br>na memória (festa) da Virgem santa Maria.<br>Humilde serva, acolheu a vossa palavra <br>e guardou-a no seu coração; <br>admiravelmente unida ao mistério da redenção, <br>perseverou com os apóstolos em oração, <br>esperando a vinda do Espírito Santo; <br>agora, resplandece no caminho da nossa vida,<br>como sinal de consolação e de firme esperança.<br>Por isso, com os anjos e os santos, <br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO IV DA VIRGEM SANTA MARIA<br>Maria, imagem da nova humanidade<br>63 b. Este prefácio diz-se nas Missas da Virgem santa Maria.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, fonte de vida e de alegria, <br>é verdadeiramente nosso dever dar-Vos graças <br>na memória (festa – solenidade) da Virgem santa Maria.<br>Vós revelastes, na plenitude dos tempos,<br>o mistério escondido desde os tempos antigos, <br>para que se renove, no mundo inteiro, a vida e a esperança. <br>Em Cristo, novo Adão, <br>e, em Maria, nova Eva,<br>manifestastes finalmente a vossa Igreja, <br>primícias da humanidade redimida. <br>Por este dom admirável, <br>toda a criação, pelo poder do Espírito Santo, <br>volta de novo ao caminho original para a Páscoa eterna.<br>Por isso, com os anjos e os santos,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo.<br>OUTROS PREFÁCIOS DA VIRGEM SANTA MARIA<br>V. Maria, imagem e mãe da Igreja: Santa Maria. Mãe da Igreja, <br>p. 677.<br>VI. A glória da Assunção de Maria: 15 de agosto, p. 746.<br>VII. O mistério de Maria e da Igreja: 8 de dezembro, p. 836.<br><br>PREFÁCIO DOS ANJOS<br>A glória de Deus resplandece nos anjos<br>63 c. Este prefácio diz-se nas Missas dos Anjos.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte, <br>por nosso Senhor Jesus Cristo. <br>Proclamamos a vossa imensa glória, <br>que resplandece nos anjos e nos arcanjos, <br>e, honrando estes mensageiros celestes, <br>exaltamos a vossa infinita bondade, <br>porque a veneração que eles merecem<br>é sinal da vossa incomparável grandeza <br>sobre todas as criaturas. <br>Por isso, com a multidão dos anjos,<br>que celebram a vossa divina majestade,<br>nós Vos adoramos e bendizemos com alegria, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO DE SÃO JOSÉ<br>ESPOSO DA VIRGEM SANTA MARIA<br>A missão de são José<br>63 c. Este prefácio diz-se nas Missas de são José.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte, <br>e exaltar, bendizer e proclamar a vossa bondade, <br>na solenidade (festa – memória) do bem-aventurado são José.<br>Homem justo, <br>foi por Vós escolhido para Esposo da Virgem Mãe de Deus; <br>servo fiel e prudente, foi constituído chefe da vossa família, <br>para guardar com paterna solicitude o vosso Filho unigénito, <br>concebido pelo poder do Espírito Santo, <br>nosso Senhor Jesus Cristo.<br>Por Ele, os anjos louvam a vossa majestade, <br>as dominações Vos adoram, as potestades Vos reverenciam; <br>os céus, os espíritos celestes e os serafins Vos aclamam, <br>unidos em eterna exultação.<br>Permiti que nos associemos às suas vozes,<br>proclamando (cantando) humildemente o vosso louvor:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO I DOS APÓSTOLOS<br>Os apóstolos, pastores do povo de Deus<br>64. Este prefácio diz-se nas Missas dos Apóstolos, especialmente de são Pedro <br>e são Paulo.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte.<br>Porque Vós, Pastor eterno, <br>não abandonais o vosso rebanho, <br>mas sempre o guardais e protegeis, <br>por meio dos santos apóstolos, <br>para que seja conduzido, através dos tempos, <br>pelos mesmos chefes que pusestes à sua frente, <br>como representantes do vosso Filho, Jesus Cristo.<br>Por Ele, com os anjos e os arcanjos, <br>os tronos e as dominações <br>e todos os coros celestes,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO II DOS APÓSTOLOS<br>O fundamento apostólico e o testemunho<br>65. Este prefácio diz-se nas Missas dos Apóstolos e dos Evangelistas.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente,<br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte, <br>por nosso Senhor Jesus Cristo.<br>Vós fundastes a Igreja <br>sobre o alicerce dos apóstolos, <br>para que seja, na terra, através dos tempos, <br>o sinal vivo da vossa santidade <br>e anuncie a todos os povos <br>o Evangelho do reino dos céus.<br>Por isso, agora e para sempre, <br>com todos os coros dos anjos,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO I DOS SANTOS<br>A glória dos santos<br>66. Este prefácio diz-se nas Missas de Todos os Santos, dos santos padroeiros <br>e titulares das igrejas e nas solenidades e festas dos santos que não têm prefácio <br>próprio. Pode dizer-se também nas memórias dos santos.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte.<br>Vós sois glorificado na assembleia dos santos <br>e, ao coroar os seus méritos, <br>coroais os vossos próprios dons. <br>Na sua vida, dais-nos um exemplo; <br>na comunhão com eles uma família <br>e, na sua intercessão um auxílio, <br>para que, confirmados por tão grandes testemunhas, <br>possamos vencer o bom combate da fé <br>e receber, com eles, a eterna coroa de glória, <br>por nosso Senhor Jesus Cristo.<br>Por Ele, com os anjos, <br>os arcanjos e todos os santos,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO II DOS SANTOS<br>A ação dos santos<br>67. Este prefácio diz-se nas Missas de Todos os Santos, dos santos padroeiros e <br>titulares das igrejas, bem como nas solenidades e festas dos santos que não têm <br>prefácio próprio. Pode dizer-se também nas memórias dos santos.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte, <br>por nosso Senhor Jesus Cristo.<br>Pelo testemunho admirável dos santos, <br>aumentais e fortaleceis sempre a vossa Igreja <br>e nos dais provas evidentes do vosso amor. <br>O exemplo dos santos nos estimula <br>e a sua intercessão nos ajuda <br>a celebrar os mistérios da salvação.<br>Por isso, com os anjos e todos os santos,<br>proclamamos a vossa glória, <br>dizendo (cantando) com alegria:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO I DOS SANTOS MÁRTIRES<br>O sinal e o exemplo do martírio<br>68. Este prefácio diz-se nas solenidades e festas dos santos mártires. Pode dizer-se <br>também nas suas memórias.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte.<br>À imitação de Cristo, vosso Filho, <br>o sangue do(a) glorioso(a) mártir são (santo/a) N., <br>derramado pela confissão do vosso nome, <br>manifesta as maravilhas do vosso poder. <br>No seu martírio, Senhor, <br>tirais força da fraqueza <br>e fazeis da fragilidade humana<br>o testemunho da vossa grandeza, <br>por nosso Senhor Jesus Cristo.<br>Por Ele, com os coros celestes,<br>proclamamos, na terra, a vossa glória, <br>dizendo (cantando) numa só voz.<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO II DOS SANTOS MÁRTIRES<br>As maravilhas de Deus na vitória dos mártires<br>69. Este prefácio diz-se nas solenidades e festas dos santos mártires. Pode dizer-se <br>também nas suas memórias.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte. <br>Vós sois glorificado no louvor dos vossos santos<br>e tudo o que veneramos no seu glorioso martírio <br>é obra do vosso poder admirável:<br>de Vós procede o ardor da sua fé,<br>a firmeza da sua perseverança<br>e o triunfo no seu combate,<br>por nosso Senhor Jesus Cristo. <br>Por Ele, todas as criaturas, no céu e na terra,<br>Vos adoram, cantando um cântico novo.<br>E também nós, com todos os coros dos anjos,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO DOS SANTOS PASTORES DA IGREJA<br>A presença dos santos pastores na Igreja<br>70. Este prefácio diz-se nas solenidades e festas dos santos pastores da Igreja. <br>Pode dizer-se também nas suas memórias.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte, <br>por nosso Senhor Jesus Cristo.<br>Ao celebrar hoje a memória ( festa) de são N., <br>a vossa Igreja exulta de alegria, <br>porque a fortaleceis com o exemplo da sua vida,<br>a instruís com a sua palavra<br>e a protegeis com a sua intercessão.<br>Por isso, com os anjos e os santos,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO DAS SANTAS VIRGENS<br>E DOS SANTOS RELIGIOSOS<br>O sinal da vida consagrada a Deus<br>71. Este prefácio diz-se nas solenidades e festas das santas virgens e dos santos <br>religiosos. Pode dizer-se também nas suas memórias.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte.<br>Ao recordar os santos <br>que, por amor do reino dos céus, <br>se consagraram a Cristo, vosso Filho, <br>celebramos a vossa admirável providência. <br>Neles restituís ao homem a santidade original <br>e nos fazeis saborear, na terra, <br>os dons que reservastes para a vida futura.<br>Por isso, com os anjos e os santos,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO COMUM I<br>A instauração do universo em Cristo<br>72. Este prefácio diz-se nas Missas que não têm prefácio próprio, nem exigem <br>o prefácio do Tempo.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente,<br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte, <br>por nosso Senhor Jesus Cristo.<br>N’Ele quisestes instaurar todas as coisas <br>e a todos destes a graça de participar da sua plenitude. <br>Sendo Ele de condição divina, <br>aniquilou-Se a Si próprio <br>e, pelo sangue derramado na cruz, <br>deu a paz a todo o universo. <br>Por isso foi exaltado sobre todas as criaturas <br>e tornou-Se, para todos os que Lhe obedecem, <br>fonte de salvação eterna.<br>Por Ele, com os anjos e os arcanjos, <br>os tronos e as dominações <br>e todos os coros celestes,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO COMUM II<br>A salvação por Cristo<br>73. Este prefácio diz-se nas Missas que não têm prefácio próprio, nem exigem <br>o prefácio do Tempo.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte.<br>Por amor criastes o homem<br>e, embora justamente condenado, <br>em vossa misericórdia, o salvastes, <br>por nosso Senhor Jesus Cristo.<br>Por Ele, os anjos louvam a vossa majestade, <br>as dominações Vos adoram, <br>as potestades Vos reverenciam; <br>os céus, os espíritos celestes <br>e os serafins Vos aclamam, <br>unidos em eterna exultação.<br>Permiti que nos associemos às suas vozes,<br>proclamando (cantando) humildemente o vosso louvor:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO COMUM III<br>Louvor a Deus pela criação e renovação do homem<br>74. Este prefácio diz-se nas Missas que não têm prefácio próprio, nem exigem <br>o prefácio do Tempo.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte.<br>Pelo vosso Filho muito amado, <br>criastes o género humano<br>e por vossa bondade o renovastes.<br>Por isso, Vos servem todas as criaturas,<br>Vos louvam todos os redimidos<br>e Vos aclamam os anjos e todos os santos.<br>Com eles, também nós proclamamos a vossa glória,<br>dizendo (cantando) com alegria:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO COMUM IV<br>O louvor é um dom de Deus<br>75. Este prefácio diz-se nas Missas que não têm prefácio próprio, nem exigem <br>o prefácio do Tempo.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte.<br>Vós não precisais dos nossos louvores <br>e poder glorificar-Vos é dom da vossa bondade; <br>porque os nossos hinos de bênção, <br>nada aumentando à vossa infinita grandeza, <br>alcançam-nos a graça da salvação,<br>por nosso Senhor Jesus Cristo.<br>Por Ele, com todos os coros dos anjos,<br>proclamamos a vossa glória, <br>dizendo (cantando) com alegria:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO COMUM V<br>Proclamação do mistério de Cristo<br>76. Este prefácio diz-se nas Missas que não têm prefácio próprio, nem exigem <br>o prefácio do Tempo.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente,<br>é verdadeiramente nosso dever, é nossa salvação<br>dar-Vos graças, sempre e em toda a parte,<br>por nosso Senhor Jesus Cristo.<br>Unidos na caridade, <br>celebramos a sua morte;<br>com fé viva,<br>proclamamos a sua ressurreição;<br>com ardente esperança,<br>aguardamos a sua vinda gloriosa.<br>Por isso, com os anjos e os santos,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO COMUM VI<br>O mistério da salvação em Cristo<br>77. Este prefácio diz-se nas Missas que não têm prefácio próprio, nem exigem <br>o prefácio do Tempo.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte<br>por Jesus Cristo, vosso amado Filho. <br>Ele é a vossa palavra, por quem tudo criastes.<br>Enviado por Vós, como Salvador e Redentor,<br>fez-Se homem pelo poder do Espírito Santo <br>e nasceu da Virgem Maria.<br>Para cumprir a vossa vontade <br>e adquirir para Vós um povo santo,<br>estendeu os braços e morreu na cruz;<br>e, destruindo assim a morte,<br>manifestou a vitória da ressurreição.<br>Por isso, com os anjos e todos os santos,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO COMUM VII<br>Cristo, hóspede e peregrino no meio de nós<br>77 a. Este prefácio diz-se nas Missas que não têm prefácio próprio, nem exigem <br>o prefácio do Tempo.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus da aliança e da paz, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte.<br>Vós chamastes e fizestes sair Abraão da sua terra <br>para o constituir pai de todas as nações. <br>Suscitastes Moisés para libertar o vosso povo <br>e conduzi-lo à terra prometida. <br>Na plenitude dos tempos, enviastes o vosso Filho, <br>hóspede e peregrino no meio de nós, <br>para nos redimir do pecado e da morte, <br>e destes ao mundo o vosso Espírito, <br>para fazer de todas as nações um só povo,<br>que caminha para o vosso reino <br>na liberdade dos filhos de Deus, <br>segundo o mandamento novo do amor.<br>Por isso, com os anjos e os santos, <br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO COMUM VIII<br>Cristo, o bom samaritano<br>77 b. Este prefácio diz-se nas Missas que não têm prefácio próprio, nem exigem <br>o prefácio do Tempo.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente,<br>é verdadeiramente nosso dever, é nossa salvação <br>louvar-Vos e dar-Vos graças, <br>em todos os momentos da nossa vida, <br>na saúde e na doença, no sofrimento e na alegria, <br>por Cristo, vosso servo e nosso Redentor.<br>Na sua vida mortal, Ele passou fazendo o bem <br>e socorrendo todos os que eram prisioneiros do mal.<br>Ainda hoje, como bom samaritano, <br>vem ao encontro de todos os homens, <br>atribulados no corpo ou no espírito, <br>e derrama sobre as suas feridas <br>o óleo da consolação e o vinho da esperança. <br>Por este dom da vossa graça, <br>também a noite da dor se abre à luz pascal<br>do vosso Filho crucificado e ressuscitado.<br>Por isso, com os anjos e os santos, <br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO COMUM IX<br>A glória de Deus é o homem vivo<br>77 c. Este prefácio diz-se nas Missas que não têm prefácio próprio, nem exigem <br>o prefácio do Tempo.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>louvar-Vos e dar-Vos graças, <br>sempre e em toda a parte.<br>Vós sois o único Deus vivo e verdadeiro <br>e estais presente em todo o universo;<br>mas foi sobretudo no homem, <br>criado à vossa imagem, <br>que imprimistes o sinal da vossa glória. <br>Vós o chamais a colaborar, <br>com o trabalho de cada dia, <br>no projeto da criação,<br>e lhe dais o vosso Espírito, <br>para que, em Cristo, homem novo, <br>se torne construtor da justiça e da paz.<br>Por isso, com os anjos e os santos, <br>proclamamos a vossa glória, <br>dizendo (cantando) com alegria:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO I DOS DEFUNTOS<br>A esperança da ressurreição em Cristo<br>78. Este prefácio diz-se nas Missas de defuntos.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente,<br>é verdadeiramente nosso dever, é nossa salvação<br>dar-Vos graças, sempre e em toda a parte, <br>por nosso Senhor Jesus Cristo.<br>N’Ele brilhou para nós a esperança da feliz ressurreição<br>e, se a certeza da morte nos entristece,<br>conforta-nos a promessa da imortalidade.<br>Para os que creem em Vós, Senhor,<br>a vida não acaba, apenas se transforma<br>e, desfeita a morada deste exílio terrestre, <br>adquirimos no céu uma habitação eterna.<br>Por isso, com os anjos e os arcanjos, <br>os tronos e as dominações <br>e todos os coros celestes,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO II DOS DEFUNTOS<br>Cristo morreu pela nossa vida<br>79. Este prefácio diz-se nas Missas de defuntos.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte, <br>por nosso Senhor Jesus Cristo.<br>Tomando sobre Si a nossa morte, <br>Ele livrou-nos da morte eterna; <br>oferecendo por nós a sua vida, <br>abriu-nos as portas da vida imortal.<br>Por isso, com todos os coros dos anjos,<br>proclamamos a vossa glória, <br>dizendo (cantando) com alegria:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO III DOS DEFUNTOS<br>Cristo, salvação e vida<br>80. Este prefácio diz-se nas Missas de defuntos.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte, <br>por nosso Senhor Jesus Cristo.<br>Ele é a salvação do mundo, <br>a vida dos homens <br>e a ressurreição dos mortos.<br>Por Ele, a multidão dos anjos<br>adora a vossa majestade<br>e exulta eternamente na vossa presença.<br>Permiti que nos associemos às suas vozes,<br>dizendo (cantando) com alegria:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO IV DOS DEFUNTOS<br>Da vida terrena à glória celeste<br>81. Este prefácio diz-se nas Missas de defuntos.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte.<br>A vossa vontade nos chama à vida<br>e a vossa providência nos governa.<br>Se, por vossa ordem, devido ao pecado, <br>voltamos à terra de onde fomos tirados, <br>pela morte redentora do vosso Filho,<br>o vosso poder nos desperta,<br>para tomar parte na ressurreição gloriosa.<br>Por isso, com os anjos e os santos,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>PREFÁCIO V DOS DEFUNTOS<br>A nossa ressurreição pela vitória de Cristo<br>82. Este prefácio diz-se nas Missas de defuntos.<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente, <br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte.<br>A morte é a nossa herança comum,<br>mas, pelo dom maravilhoso da vossa bondade, <br>Cristo, com a sua vitória, nos redime da morte <br>e nos chama a tomar parte na sua vida gloriosa.<br>Por isso, com os coros celestes,<br>proclamamos, na terra, a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>OU CÂNONE ROMANO<br>83. Na Oração eucarística I, ou Cânone romano, podem omitir-se as partes que <br>aparecem entre parêntesis.<br>Celebrante principal:<br>84. O sacerdote, de braços abertos, diz:<br>Pai de infinita misericórdia,<br>humildemente Vos suplicamos, <br>por Jesus Cristo, vosso Filho, nosso Senhor.<br>Junta as mãos e diz:<br>que Vos digneis aceitar<br>Traça o sinal da cruz, uma só vez, simultaneamente sobre o pão e o cálice, dizendo:<br>e abençoar + estes dons, <br>esta oblação pura e santa.<br>De braços abertos continua:<br>Nós Vo-la oferecemos pela vossa Igreja santa e católica: <br>dai-lhe a paz e congregai-a na unidade, <br>defendei-a e governai-a em toda a terra,<br>em comunhão com o vosso servo, o nosso papa N., <br>o nosso bispo N.<br>O bispo, quando celebra na sua diocese, diz:<br>e comigo, vosso indigno servo,<br>O bispo, quando celebra fora da sua diocese, diz:<br>e com o meu irmão N. (os meus irmãos), bispo(s) desta Igreja,<br>e comigo, vosso indigno servo,<br>Pode fazer-se menção do bispo coadjutor ou dos bispos auxiliares:<br>o nosso bispo coadjutor (ou auxiliar) N. <br>Ou: os nossos bispos auxiliares,<br>e todos os bispos que são fiéis à verdade <br>e professam a fé católica e apostólica.<br><br>85. COMEMORAÇÃO DOS VIVOS<br>Celebrante principal ou concelebrante [1]:<br>Lembrai-Vos, Senhor,<br>dos vossos servos e servas N. e N.<br>Junta as mãos e ora alguns momentos por aqueles que quer recordar.<br>Depois, de braços abertos, continua:<br>e de todos os que estão aqui presentes, <br>cuja fé e dedicação ao vosso serviço bem conheceis.<br>Por eles nós Vos oferecemos<br>e também eles Vos oferecem este sacrifício de louvor,<br>por si e por todos os seus,<br>pela redenção das suas almas,<br>para a salvação e segurança que esperam,<br>ó Deus eterno, vivo e verdadeiro.<br>86. COMEMORAÇÃO DOS SANTOS<br>Celebrante principal ou concelebrante [2]:<br>Em comunhão com toda a Igreja,<br>Domingos:<br>ao celebrarmos o primeiro dia da semana, em que nosso Senhor <br>Jesus Cristo ressuscitou dos mortos, <br>Natal do Senhor e sua oitava:<br>ao celebrarmos o dia santíssimo (a noite santíssima), em que a <br>Imaculada Virgem Maria deu à luz o Salvador do mundo, <br>Epifania do Senhor:<br>ao celebrarmos o dia santíssimo em que o vosso Filho unigénito, <br>eterno convosco na glória, Se manifestou visivelmente na realidade da nossa carne,<br><br>Quinta-Feira Santa:<br>ao celebrarmos o dia santíssimo em que nosso Senhor Jesus Cristo <br>Se entregou por nós, <br>Vigília Pascal até ao Domingo II da Páscoa:<br>ao celebrarmos o dia santíssimo (a noite santíssima) da ressur -<br>reição de nosso Senhor Jesus Cristo segundo a carne, <br>Ascensão do Senhor:<br>ao celebrarmos o dia santíssimo em que nosso Senhor Jesus <br>Cristo, vosso Filho unigénito, colocou à direita da vossa glória a <br>nossa frágil natureza humana unida à sua divindade, <br>Pentecostes:<br>ao celebrarmos o dia santíssimo de Pentecostes, em que o Espírito <br>Santo Se manifestou aos Apóstolos em numerosas línguas de fogo, <br>veneramos a memória da gloriosa sempre Virgem Maria,<br>Mãe do nosso Deus e Senhor, Jesus Cristo, <br>e também a de são José, seu esposo,<br>e a dos bem-aventurados apóstolos e mártires:<br>Pedro e Paulo, André, <br> (Tiago, João, <br> Tomé, Tiago, Filipe,<br> Bartolomeu, Mateus, <br> Simão e Tadeu;<br> Lino, Cleto, Clemente, Sixto, <br> Cornélio, Cipriano, <br> Lourenço, Crisógono, <br> João e Paulo, <br> Cosme e Damião)<br>e de todos os santos.<br>Por seus méritos e orações, <br>concedei-nos, em tudo e sempre, <br>auxílio e proteção. <br>(Por Cristo nosso Senhor. Amen.)<br><br>87. De braços abertos, continua:<br>Celebrante principal:<br>Aceitai benignamente, Senhor,<br>a oblação que nós, vossos servos, <br>com toda a vossa família, Vos apresentamos. <br>Dai a paz aos nossos dias, <br>livrai-nos da condenação eterna <br>e contai-nos entre os vossos eleitos. <br>Junta as mãos.<br>(Por Cristo nosso Senhor. Amen.)<br>Vigília Pascal até ao Domingo II da Páscoa:<br>Aceitai benignamente, Senhor, a oblação que nós, vossos servos, <br>com toda a vossa família, V os apresentamos. Nós V o-la oferecemos <br>também por aqueles que fizestes renascer da água e do Espírito <br>Santo, concedendo-lhes o perdão de todos os pecados. Dai a paz <br>aos nossos dias, livrai-nos da condenação eterna e contai-nos <br>entre os vossos eleitos. (Por Cristo nosso Senhor. Amen.)<br>88. Estendendo as mãos sobre as oblatas, diz:<br>Celebrante principal e concelebrantes:<br>Santificai, Senhor, esta oblação<br>com o poder da vossa bênção <br>e recebei-a como sacrifício espiritual perfeito,<br>de modo que se converta para nós<br>no Corpo e Sangue de vosso amado Filho,<br>nosso Senhor Jesus Cristo.<br>Junta as mãos.<br>89. Nas fórmulas que se seguem, as palavras do Senhor devem pronunciar-se <br>clara e distintamente, como o requer a natureza das mesmas palavras.<br><br>Na véspera da sua paixão,<br>Toma o pão e, sustentando-o um pouco elevado sobre o altar, continua:<br>Ele tomou o pão em suas santas e adoráveis mãos <br>Eleva os olhos.<br>e, levantando os olhos ao céu <br>para Vós, Deus, seu Pai todo-poderoso, <br>dando graças Vos bendisse, <br>partiu-o e deu-o aos seus discípulos, dizendo: <br>Inclina-se um pouco.<br>Tomai, todos, e comei:<br>isto é o meu corpo,<br>que será entregue por vós.<br>Mostra ao povo a hóstia consagrada, coloca-a sobre a patena e genuflete em <br>adoração.<br>90. Depois, continua:<br>De igual modo, no fim da Ceia, <br>Toma o cálice e, sustentando-o um pouco elevado sobre o altar, continua:<br>tomou este sagrado cálice<br>em suas santas e adoráveis mãos,<br>dando graças Vos bendisse,<br>e deu-o aos seus discípulos, dizendo:<br>Inclina-se um pouco.<br>Tomai, todos, e bebei:<br>este é o cálice do meu sangue,<br>o sangue da nova e eterna aliança,<br>que será derramado por vós e por todos<br>para remissão dos pecados.<br>Fazei isto em memória de mim.<br>Mostra ao povo o cálice, coloca-o sobre o corporal e genuflete em adoração.<br><br>Celebrante principal:<br>91. Em seguida, diz:<br>Mistério da fé!<br>O povo aclama, dizendo:<br>Anunciamos, Senhor, a vossa morte, <br>proclamamos a vossa ressurreição. <br>Vinde, Senhor Jesus!<br>Ou: Mistério admirável da nossa fé! <br>O povo aclama, dizendo:<br>Quando comemos deste pão <br>e bebemos deste cálice, <br>anunciamos, Senhor, a vossa morte, <br>esperando a vossa vinda gloriosa.<br>Ou: Mistério da fé para a salvação do mundo! <br>O povo aclama, dizendo:<br>Glória a V ós, que morrestes na cruz <br>e agora viveis para sempre.<br>Salvador do mundo, salvai-nos. <br>Vinde, Senhor Jesus!<br>Celebrante principal e concelebrantes:<br>92. Em seguida, o sacerdote, de braços abertos, diz:<br>Celebrando agora, Senhor, o memorial<br>da bem-aventurada paixão de Jesus Cristo, <br>vosso Filho, nosso Senhor, <br>da sua ressurreição de entre os mortos <br>e da sua gloriosa ascensão aos céus, <br>nós, vossos servos, com o vosso povo santo, <br>dos próprios bens que nos destes<br>oferecemos à vossa divina majestade <br>o sacrifício perfeito, santo e imaculado,<br>o pão santo da vida eterna <br>e o cálice da eterna salvação.<br><br>93. De braços abertos, continua: <br>Olhai com benevolência e agrado para esta oferenda<br>e dignai-Vos aceitá-la, <br>como aceitastes os dons do justo Abel, vosso servo, <br>o sacrifício de Abraão, nosso pai na fé, <br>e a oblação pura e santa do sumo sacerdote Melquisedec.<br>94. Inclinado e de mãos juntas, continua:<br>Humildemente Vos suplicamos, Deus todo-poderoso, <br>que esta nossa oferenda <br>seja apresentada pelo vosso santo anjo no altar celeste, <br>diante da vossa divina majestade, <br>para que todos nós, participando deste altar,<br>pela comunhão do santíssimo Corpo e Sangue do vosso Filho, <br>Ergue-se e, benzendo-se, continua:<br>alcancemos a plenitude das bênçãos e graças do céu. <br>Junta as mãos.<br>(Por Cristo nosso Senhor. Amen.)<br>95. COMEMORAÇÃO DOS DEFUNTOS<br>Celebrante principal ou concelebrante [3]:<br>De braços abertos diz:<br>Lembrai-vos, Senhor, dos vossos servos e servas N. e N.,<br>que partiram antes de nós, marcados com o sinal da fé,<br>e agora dormem o sono da paz. <br>Junta as mãos e ora uns momentos pelos defuntos que quer recordar.<br>Depois, de braços abertos, continua:<br>Concedei-lhes, Senhor,<br>a eles e a todos os que descansam em Cristo,<br>o lugar da consolação, da luz e da paz.<br>Junta as mãos.<br>(Por Cristo nosso Senhor. Amen.)<br><br>Celebrante principal ou concelebrante [4]:<br>96. Bate com a mão direita no peito, dizendo:<br>E a nós, pecadores, vossos servos,<br>que esperamos na vossa infinita misericórdia, <br>De braços abertos continua:<br>admiti-nos também na assembleia <br>dos bem-aventurados apóstolos e mártires: <br>João Batista, Estêvão, <br>Matias, Barnabé <br> (Inácio, Alexandre, Marcelino, Pedro, <br> Felicidade, Perpétua, Águeda, Luzia, <br> Inês, Cecília, Anastácia)<br>e de todos os santos. <br>Recebei-nos em sua companhia, <br>não pelo valor dos nossos méritos,<br>mas segundo a grandeza do vosso perdão.<br>Junta as mãos.<br>(Por Cristo nosso Senhor. Amen.)<br>Celebrante principal:<br>97. E continua: <br>Por nosso Senhor Jesus Cristo,<br>criais todos os bens e lhes dais vida,<br>os santificais, abençoais e distribuís por nós.<br>Celebrante principal ou concelebrantes:<br>98. Toma o cálice e a patena com a hóstia e, elevando-os, diz: <br>Por Cristo, com Cristo, em Cristo,<br>a Vós, Deus Pai todo-poderoso,<br>na unidade do Espírito Santo,<br>toda a honra e toda a glória,<br>por todos os séculos dos séculos.<br>O povo aclama: Amen.<br>Seguem-se os ritos da comunhão, p. 526.<br><br>99. Esta Oração eucarística tem um prefácio próprio, que faz parte da sua estrutura. <br>Podem usar-se também outros prefácios, especialmente aqueles que apresentam <br>em breve síntese o mistério da salvação.<br>Celebrante principal:<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Senhor, Pai santo, Deus eterno e omnipotente,<br>é verdadeiramente nosso dever, é nossa salvação <br>dar-Vos graças, sempre e em toda a parte,<br>por Jesus Cristo, vosso amado Filho. <br>Ele é a vossa palavra, por quem tudo criastes.<br>Enviado por Vós, como Salvador e Redentor,<br>fez-Se homem pelo poder do Espírito Santo <br>e nasceu da Virgem Maria.<br>Para cumprir a vossa vontade <br>e adquirir para Vós um povo santo,<br>estendeu os braços e morreu na cruz;<br>e, destruindo assim a morte,<br>manifestou a vitória da ressurreição.<br>Por isso, com os anjos e todos os santos,<br>proclamamos a vossa glória, <br>dizendo (cantando) numa só voz:<br>Santo, Santo, Santo, <br>Senhor Deus do Universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>Celebrante principal:<br>100. O sacerdote, de braços abertos, continua:<br>Vós, Senhor, sois verdadeiramente santo,<br>sois a fonte de toda a santidade.<br>Nos domingos e em outros dias solenes pode fazer-se a comemoração própria.<br>Domingos:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o primeiro dia da semana, em que nosso Senhor Jesus Cristo ressuscitou <br>dos mortos, humildemente V os suplicamos: <br>Natal do Senhor e sua oitava:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos <br>o dia santíssimo (a noite santíssima) em que a Imaculada Virgem Maria deu <br>à luz o Salvador do mundo, humildemente V os suplicamos: <br>Epifania do Senhor:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos <br>o dia santíssimo em que o vosso Filho unigénito, eterno convosco na glória, <br>Se manifestou visivelmente na realidade da nossa carne, humildemente V os <br>suplicamos:<br>Quinta-Feira Santa:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos <br>o dia santíssimo em que nosso Senhor Jesus Cristo Se entregou por nós, <br>humildemente V os suplicamos: Santificai estes dons, derramando sobre eles <br>o vosso Espírito, de modo que se convertam, para nós, no Corpo e + Sangue <br>de nosso Senhor Jesus Cristo. Hoje, na hora em que Ele Se entregava ...<br>Vigília Pascal até ao Domingo II da Páscoa:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia santíssimo (a noite santíssima) da ressurreição de nosso Senhor <br>Jesus Cristo segundo a carne, humildemente V os suplicamos: <br>Ascensão do Senhor:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos <br>o dia santíssimo em que nosso Senhor Jesus Cristo, vosso Filho unigénito, <br>colocou à direita da vossa glória a nossa frágil natureza humana unida à <br>sua divindade, humildemente V os suplicamos:<br><br>Pentecostes:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos <br>o dia santíssimo de Pentecostes, em que o Espírito Santo Se manifestou aos <br>Apóstolos em numerosas línguas de fogo, humildemente V os suplicamos: <br>Apresentação do Senhor:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia em que o vosso Filho unigénito foi apresentado no Templo, <br>humildemente V os suplicamos: <br>Anunciação do Senhor:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia em que a Virgem santa Maria concebeu o vosso Filho unigénito <br>pelo poder do Espírito Santo, humildemente V os suplicamos: <br>Nascimento de são João Batista:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia do nascimento de são João Batista, que preparou o caminho do <br>Salvador do mundo, humildemente V os suplicamos: <br>Assunção da Virgem santa Maria:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia em que santa Maria Mãe de Deus foi elevada à glória do céu, <br>humildemente V os suplicamos: <br>Natividade da Virgem santa Maria:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia do nascimento da Virgem santa Maria, escolhida desde toda a <br>eternidade para ser a Mãe do Redentor, humildemente V os suplicamos:<br>Dia de Todos os Santos:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos <br>o dia consagrado à memória de todos os santos, que durante a vida imitaram <br>a Cristo e na morte receberam d’Ele a coroa da glória, humildemente V os <br>suplicamos: <br>Imaculada Conceição da Virgem santa Maria:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos <br>o dia em que a Virgem Maria, escolhida para ser a Mãe do Redentor, foi <br>concebida sem mancha do pecado original, humildemente V os suplicamos:<br><br>Celebrante principal e concelebrantes:<br>101. Junta as mãos e, estendendo-as sobre as oblatas, diz: <br>Santificai estes dons,<br>derramando sobre eles o vosso Espírito,<br>Junta as mãos e traça um único sinal da cruz sobre o pão e sobre o cálice, dizendo:<br>de modo que se convertam, para nós,<br>no Corpo e + Sangue de nosso Senhor Jesus Cristo.<br>Junta as mãos.<br>102. Nas fórmulas que se seguem, as palavras do Senhor devem pronunciar-se <br>distintamente, como o requer a natureza das mesmas palavras.<br>Na hora em que Ele Se entregava, <br>para voluntariamente sofrer a morte,<br>Toma o pão e, sustentando-o um pouco elevado sobre o altar, continua:<br>tomou o pão e, dando graças, partiu-o<br>e deu-o aos seus discípulos, dizendo:<br>Inclina-se um pouco.<br>Tomai , todos , e comei :<br>isto é o meu corpo ,<br>que será entregue por vós.<br>Mostra ao povo a hóstia consagrada, coloca-a sobre a patena e genuflete em <br>adoração.<br>103. Depois, continua:<br>De igual modo, no fim da Ceia,<br>Toma o cálice e, sustentando-o um pouco elevado sobre o altar, continua:<br>tomou o cálice, de novo Vos deu graças<br>e deu-o aos seus discípulos, dizendo: <br>Inclina-se um pouco.<br>Tomai , todos , e bebei :<br>este é o cálice do meu sangue ,<br>o sangue da nova e eterna aliança ,<br>que será derramado por vós e por todos<br>para remissão dos pecados .<br>Fazei isto em memória de mim.<br>Mostra ao povo o cálice, coloca-o sobre o corporal e genuflete em adoração.<br><br>Celebrante principal:<br>104. Em seguida, diz:<br>Mistério da fé! <br>O povo aclama, dizendo:<br>Anunciamos, Senhor, a vossa morte, <br>proclamamos a vossa ressurreição. <br>Vinde, Senhor Jesus!<br>Ou: Mistério admirável da nossa fé! <br>O povo aclama, dizendo:<br>Quando comemos deste pão <br>e bebemos deste cálice, <br>anunciamos, Senhor, a vossa morte, <br>esperando a vossa vinda gloriosa.<br>Ou: Mistério da fé para a salvação do mundo! <br>O povo aclama, dizendo:<br>Glória a V ós, que morrestes na cruz <br>e agora viveis para sempre.<br>Salvador do mundo, salvai-nos. <br>Vinde, Senhor Jesus!<br><br>Celebrante principal e concelebrantes:<br>105. Em seguida, o sacerdote, de braços abertos, diz:<br>Celebrando agora, Senhor,<br>o memorial da morte e ressurreição de vosso Filho,<br>nós Vos oferecemos o pão da vida e o cálice da salvação <br>e Vos damos graças, porque nos admitistes à vossa presença,<br>para Vos servir nestes santos mistérios.<br>Humildemente Vos suplicamos <br>que, participando no Corpo e Sangue de Cristo, <br>sejamos reunidos, pelo Espírito Santo, num só corpo.<br>Celebrante principal ou concelebrante [1]:<br>Lembrai-Vos, Senhor, da vossa Igreja,<br>dispersa por toda a terra, <br>e tornai-a perfeita na caridade,<br>em comunhão com o nosso papa N.,<br>o nosso bispo N. <br>O bispo, quando celebra na sua diocese, diz:<br>e comigo, vosso indigno servo,<br>O bispo, quando celebra fora da sua diocese, diz:<br>e com o meu irmão N. (os meus irmãos), bispo(s) desta Igreja,<br>e comigo, vosso indigno servo,<br>Pode fazer-se menção do bispo coadjutor ou dos bispos auxiliares:<br>o nosso bispo coadjutor (ou auxiliar) N. <br>Ou: os nossos bispos auxiliares,<br>e todos os ministros sagrados.<br>Podem acrescentar-se algumas intercessões próprias das Missas rituais.<br>Nas Missas pelos defuntos pode acrescentar-se:<br>Lembrai-V os do vosso servo N. (da vossa serva N.), <br>a quem (hoje) chamastes para V ós:<br>configurado (a) com Cristo na morte, <br>com Cristo tome parte na ressurreição.<br><br>Celebrante principal ou concelebrante [2]:<br>Lembrai-Vos também dos (outros) nossos irmãos,<br>que adormeceram na esperança da ressurreição, <br>e de todos aqueles que na vossa misericórdia <br>partiram deste mundo: <br>admiti-os na luz da vossa presença.<br>Tende misericórdia de nós, Senhor, <br>e dai-nos a graça de participar na vida eterna, <br>com a Virgem santa Maria, Mãe de Deus, são José, seu esposo,<br>os bem-aventurados apóstolos,<br>(são / santo N. santo do dia ou santo padroeiro) <br>e todos os santos,<br>que, desde o princípio do mundo, viveram na vossa amizade,<br>para cantarmos os vossos louvores,<br>Junta as mãos.<br>por Jesus Cristo, vosso Filho.<br>Celebrante principal ou concelebrantes:<br>106. Toma o cálice e a patena com a hóstia e, elevando-os, diz:<br>Por Cristo, com Cristo, em Cristo,<br>a Vós, Deus Pai todo-poderoso,<br>na unidade do Espírito Santo,<br>toda a honra e toda a glória,<br>por todos os séculos dos séculos.<br>O povo aclama: Amen.<br>Seguem-se os ritos da comunhão, p. 526.<br><br>107. O Prefácio é escolhido conforme as rubricas.<br>Celebrante principal:<br>108. O sacerdote, de braços abertos, diz:<br>Vós, Senhor, sois verdadeiramente santo<br>e todas as criaturas cantam os vossos louvores,<br>porque dais a vida e santificais todas as coisas, <br>por nosso Senhor Jesus Cristo, vosso Filho, <br>com o poder do Espírito Santo, <br>e não cessais de reunir para Vós um povo, <br>que, de um extremo ao outro da terra, <br>Vos ofereça uma oblação pura.<br>Nos domingos e em outros dias solenes pode fazer-se a comemoração própria.<br>Domingos:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos <br>o primeiro dia da semana, em que nosso Senhor Jesus Cristo ressuscitou <br>dos mortos, humildemente ...<br>Natal do Senhor e sua oitava:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos <br>o dia santíssimo (a noite santíssima) em que a Imaculada Virgem Maria deu <br>à luz o Salvador do mundo, humildemente ...<br>Epifania do Senhor:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos <br>o dia santíssimo em que o vosso Filho unigénito, eterno convosco na glória, <br>Se manifestou visivelmente na realidade da nossa carne, humildemente ...<br>Quinta-Feira Santa:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos <br>o dia santíssimo em que nosso Senhor Jesus Cristo Se entregou por nós, <br>humildemente, V os suplicamos, Senhor: santificai, pelo Espírito Santo, estes <br>dons que V os apresentamos, para que se convertam no Corpo e + Sangue <br>de nosso Senhor Jesus Cristo, vosso Filho, que nos mandou celebrar estes <br>mistérios. Hoje, na noite em que Ele ia ser entregue, tomou o pão ...<br><br>Vigília Pascal até ao Domingo II da Páscoa:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia santíssimo (a noite santíssima) da ressurreição de nosso Senhor <br>Jesus Cristo segundo a carne, humildemente ...<br>Ascensão do Senhor:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos <br>o dia santíssimo em que nosso Senhor Jesus Cristo, vosso Filho unigénito, <br>colocou à direita da vossa glória a nossa frágil natureza humana unida à <br>sua divindade, humildemente ...<br>Pentecostes:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos <br>o dia santíssimo de Pentecostes, em que o Espírito Santo Se manifestou aos <br>Apóstolos em numerosas línguas de fogo, humildemente ...<br>Dedicação de uma igreja:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos <br>a dedicação deste templo, no dia em que o consagrastes e enchestes com a <br>vossa presença, humildemente ...<br>Apresentação do Senhor:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia em que o vosso Filho unigénito foi apresentado no Templo, ...<br>Anunciação do Senhor:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia em que a Virgem santa Maria concebeu o vosso Filho unigénito <br>pelo poder do Espírito Santo, humildemente ...<br>Nascimento de são João Batista:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia do nascimento de são João Batista, que preparou o caminho do <br>Salvador do mundo, humildemente ...<br>Assunção da Virgem santa Maria:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia em que santa Maria Mãe de Deus foi elevada à glória do céu, ...<br>Natividade da Virgem santa Maria:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia do nascimento da Virgem santa Maria, escolhida desde toda a <br>eternidade para ser a Mãe do Redentor, humildemente ...<br><br>Dia de Todos os Santos:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos <br>o dia consagrado à memória de todos os santos, que durante a vida imitaram <br>a Cristo e na morte receberam d’Ele a coroa da glória, humildemente ...<br>Imaculada Conceição da Virgem santa Maria:<br>Reunidos na vossa presença, em comunhão com toda a Igreja, ao celebrarmos o dia em que a Virgem Maria, escolhida para ser a Mãe do Redentor, <br>foi concebida sem mancha do pecado original, humildemente ...<br>Celebrante principal e concelebrantes:<br>109. Junta as mãos e, estendendo-as sobre as oblatas, diz:<br>Humildemente Vos suplicamos, Senhor:<br>santificai, pelo Espírito Santo, <br>estes dons que Vos apresentamos, <br>Junta as mãos e traça o sinal da cruz sobre o pão e sobre o cálice, dizendo:<br>para que se convertam no Corpo e + Sangue <br>de nosso Senhor Jesus Cristo, vosso Filho, <br>Junta as mãos.<br>que nos mandou celebrar estes mistérios.<br><br>110. Nas fórmulas que se seguem, as palavras do Senhor devem pronunciar-se <br>clara e distintamente, como o requer a natureza das mesmas palavras.<br>Na noite em que Ele ia ser entregue,<br>Toma o pão e, sustentando-o um pouco elevado sobre o altar, continua:<br>tomou o pão, <br>dando graças Vos bendisse, <br>partiu-o e deu-o aos seus discípulos, dizendo: <br>Inclina-se um pouco.<br>Tomai, todos, e comei:<br>isto é o meu Corpo,<br>que será entregue por vós.<br>Mostra ao povo a hóstia consagrada, coloca-a sobre a patena e genuflete em <br>adoração. <br>111. Depois, continua: <br>De igual modo, no fim da Ceia,<br>Toma o cálice e, sustentando-o um pouco elevado sobre o altar, continua:<br>tomou o cálice, <br>dando graças Vos bendisse <br>e deu-o aos seus discípulos, dizendo:<br>Inclina-se um pouco.<br>Tomai, todos, e bebei:<br>este é o cálice do meu sangue,<br>o sangue da nova e eterna aliança,<br>que será derramado por vós e por todos<br>para remissão dos pecados.<br>Fazei isto em memória de mim.<br>Mostra ao povo o cálice, coloca-o sobre o corporal e genuflete em adoração.<br><br>Celebrante principal:<br>112. Em seguida, diz:<br>Mistério da fé! <br>O povo aclama, dizendo:<br>Anunciamos, Senhor, a vossa morte, <br>proclamamos a vossa ressurreição. <br>Vinde, Senhor Jesus!<br>Ou: Mistério admirável da nossa fé! <br>O povo aclama, dizendo:<br>Quando comemos deste pão <br>e bebemos deste cálice, <br>anunciamos, Senhor, a vossa morte, <br>esperando a vossa vinda gloriosa.<br>Ou: Mistério da fé para a salvação do mundo! <br>O povo aclama, dizendo:<br>Glória a V ós, que morrestes na cruz <br>e agora viveis para sempre.<br>Salvador do mundo, salvai-nos. <br>Vinde, Senhor Jesus!<br>Celebrante principal e concelebrantes:<br>113. Em seguida, o sacerdote, de braços abertos, diz:<br>Celebrando agora, Senhor, o memorial <br>da paixão redentora do vosso Filho,<br>da sua admirável ressurreição e ascensão aos céus, <br>e esperando a sua vinda gloriosa, <br>nós Vos oferecemos, em ação de graças,<br>este sacrifício vivo e santo.<br>Olhai benignamente para a oblação da vossa Igreja: <br>vede nela a vítima que nos reconciliou convosco<br>e fazei que, alimentando-nos do Corpo e Sangue do vosso Filho, <br>cheios do seu Espírito Santo, <br>sejamos em Cristo um só corpo e um só espírito.<br><br>Celebrante principal ou concelebrante [1]:<br>O Espírito Santo faça de nós uma oferenda permanente,<br>a fim de alcançarmos a herança eterna, <br>em companhia dos vossos eleitos, <br>com a Virgem santa Maria, Mãe de Deus, são José, seu esposo,<br>os bem-aventurados apóstolos e gloriosos mártires, <br>(santo N. santo do dia ou santo padroeiro) <br>e todos os santos, <br>por cuja intercessão esperamos sempre o vosso auxílio.<br>Celebrante principal ou concelebrante [2]:<br>Por este sacrifício de reconciliação,<br>dai, Senhor, a salvação e a paz ao mundo inteiro; <br>confirmai a vossa Igreja na fé e na caridade, <br>ao longo da sua peregrinação na terra, <br>com o vosso servo, o nosso papa N., <br>o nosso bispo N.<br>O bispo, quando celebra na sua diocese, diz:<br>e comigo, vosso indigno servo,<br>O bispo, quando celebra fora da sua diocese, diz:<br>e com o meu irmão N. (os meus irmãos), bispo(s) desta Igreja,<br>e comigo, vosso indigno servo,<br>Pode fazer-se menção do bispo coadjutor ou dos bispos auxiliares:<br>o nosso bispo coadjutor (ou auxiliar) N. <br>Ou: os nossos bispos auxiliares,<br>e todos os bispos e ministros sagrados, <br>e todo o povo por Vós redimido.<br>Atendei benignamente às preces desta família, <br>que Vos dignastes reunir na vossa presença.<br>Em algumas celebrações podem fazer-se intercessões especiais.<br>Reconduzi a Vós, Pai de misericórdia, <br>todos os vossos filhos dispersos.<br><br>Lembrai-Vos dos nossos irmãos defuntos<br>e de todos os que morreram na vossa amizade. <br>Acolhei-os com bondade no vosso reino, <br>onde também nós esperamos ser recebidos, <br>para vivermos com eles eternamente na vossa glória,<br>por nosso Senhor Jesus Cristo. <br>Junta as mãos:<br>Por Ele concedeis ao mundo todos os bens.<br>114. Nas Missas pelos defuntos pode dizer-se:<br>Lembrai-V os do vosso servo N. (da vossa serva N.),<br>que (hoje) chamastes para V ós: <br>configurado(a) com Cristo na morte, <br>com Cristo tome parte na ressurreição, <br>quando Ele vier ressuscitar os mortos<br>e transformar o nosso corpo mortal à imagem do seu Corpo glorioso.<br>Lembrai-V os também dos outros nossos irmãos defuntos<br>e de todos os que morreram na vossa amizade.<br>Acolhei-os com bondade no vosso reino, <br>onde também nós esperamos ser recebidos,<br>para vivermos com eles eternamente na vossa glória,<br>quando enxugardes todas as lágrimas dos nossos olhos;<br>e, vendo-V os tal como sois, Senhor nosso Deus,<br>seremos para sempre semelhantes a V ós<br>e cantaremos sem fim os vossos louvores, por nosso Senhor Jesus Cristo.<br>Junta as mãos.<br>Por Ele concedeis ao mundo todos os bens. <br>Celebrante principal ou concelebrantes:<br>115. Toma o cálice e a patena com a hóstia e, elevando-os, diz:<br>Por Cristo, com Cristo, em Cristo,<br>a Vós, Deus Pai todo-poderoso,<br>na unidade do Espírito Santo,<br>toda a honra e toda a glória,<br>por todos os séculos dos séculos.<br>O povo aclama: Amen.<br>Seguem-se os ritos da comunhão, p. 526.<br><br>116. O prefácio desta Oração eucarística não pode ser substituído por outro, em <br>virtude da natureza desta Oração, que apresenta o sumário da história da salvação.<br>Celebrante principal:<br>V. O Senhor esteja convosco. R. Ele está no meio de nós.<br>V. Corações ao alto. R. O nosso coração está em Deus.<br>V. Dêmos graças ao Senhor nosso Deus.<br>R. É nosso dever, é nossa salvação.<br>Pai santo, <br>é verdadeiramente nosso dever dar-Vos graças,<br>é nossa salvação glorificar-Vos,<br>porque sois o único Deus vivo e verdadeiro.<br>Vós existis desde sempre<br>e permaneceis eternamente na luz inacessível.<br>Deus de bondade e fonte da vida,<br>criastes o universo <br>para encher de bênçãos todas as criaturas<br>e a muitas alegrar na claridade da vossa luz.<br>Inumeráveis coros de anjos<br>estão na vossa presença para Vos servir<br>e, contemplando a glória do vosso rosto,<br>dia e noite cantam os vossos louvores.<br>Com eles, também nós<br>e, pela nossa voz, a criação inteira,<br>aclamamos o vosso nome,<br>cantando com alegria:<br>Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.<br><br>Celebrante principal:<br>117. O sacerdote, de braços abertos, continua:<br>Pai santo, nós Vos glorificamos,<br>porque sois grande<br>e tudo criastes com sabedoria e amor.<br>Formastes o homem à vossa imagem<br>e lhe confiastes o universo,<br>para que, servindo-Vos unicamente a Vós, seu Criador,<br>exercesse domínio sobre todas as criaturas.<br>E quando, por desobediência, perdeu a vossa amizade,<br>não o abandonastes ao poder da morte,<br>mas, na vossa misericórdia, a todos socorrestes, <br>para que todos aqueles que Vos procuram Vos encontrem. <br>Repetidas vezes fizestes aliança com os homens <br>e, pelos profetas, os formastes na esperança da salvação. <br>Pai santo, de tal modo amastes o mundo, <br>que, chegada a plenitude dos tempos, <br>nos enviastes, como Salvador, o vosso Filho unigénito: <br>feito homem pelo poder do Espírito Santo <br>e nascido da Virgem Maria, <br>viveu a nossa condição humana, <br>em tudo igual a nós, exceto no pecado; <br>anunciou a salvação aos pobres, <br>a libertação aos oprimidos, <br>a alegria aos que sofrem. <br>Para cumprir o vosso plano salvador, <br>voluntariamente Se entregou à morte<br>e, com a sua ressurreição, <br>destruiu a morte e restaurou a vida. <br>E a fim de vivermos, não já para nós próprios,<br>mas para Ele, que por nós morreu e ressuscitou,<br>de Vós, Pai misericordioso, <br>enviou aos que n’Ele creem o Espírito Santo, <br>como primícias dos seus dons, <br>para continuar a sua obra no mundo <br>e consumar toda a santificação.<br><br>Celebrante principal e concelebrantes:<br>118. Junta as mãos e, estendendo-as sobre as oblatas, diz:<br>Nós Vos pedimos, Senhor, <br>que o Espírito Santo santifique estes dons, <br>Junta as mãos e traça o sinal da cruz sobre o pão e sobre o cálice, dizendo:<br>para que se convertam <br>no Corpo e + Sangue de nosso Senhor Jesus Cristo, <br>Junta as mãos.<br>ao celebrarmos este grande mistério, <br>que Ele nos deixou como sinal de aliança eterna.<br>119. Nas fórmulas que se seguem, as palavras do Senhor devem pronunciar-se <br>clara e distintamente, como o requer a natureza das mesmas palavras.<br>Pai santo, quando chegou a hora <br>em que Ele ia ser glorificado por Vós,<br>tendo amado os seus que estavam no mundo, <br>amou-os até ao fim. <br>E, durante a Ceia,<br>Toma o pão e, sustentando-o um pouco elevado sobre o altar, continua:<br>tomou o pão, bendisse-Vos, <br>partiu-o e deu-o aos seus discípulos, dizendo:<br>Inclina-se um pouco.<br>Tomai, todos, e comei:<br>isto é o meu corpo,<br>que será entregue por vós.<br>Mostra ao povo a hóstia consagrada, coloca-a sobre a patena e genuflete em <br>adoração.<br><br>120. Depois, continua:<br>De igual modo, <br>Toma o cálice e, sustentando-o um pouco elevado sobre o altar, continua:<br>tomou o cálice com vinho, deu-Vos graças<br>e deu-o aos seus discípulos, dizendo:<br>Inclina-se um pouco.<br>Tomai, todos, e bebei:<br>este é o cálice do meu sangue,<br>o sangue da nova e eterna aliança,<br>que será derramado por vós e por todos<br>para remissão dos pecados.<br>Fazei isto em memória de mim.<br>Mostra ao povo o cálice, coloca-o sobre o corporal e genuflete em adoração.<br>Celebrante principal:<br>121. Em seguida, diz:<br>Mistério da fé! <br>O povo aclama, dizendo:<br>Anunciamos, Senhor, a vossa morte, <br>proclamamos a vossa ressurreição. <br>Vinde, Senhor Jesus!<br>Ou: Mistério admirável da nossa fé! <br>O povo aclama, dizendo:<br>Quando comemos deste pão <br>e bebemos deste cálice, <br>anunciamos, Senhor, a vossa morte, <br>esperando a vossa vinda gloriosa.<br>Ou: Mistério da fé para a salvação do mundo! <br>O povo aclama, dizendo:<br>Glória a V ós, que morrestes na cruz <br>e agora viveis para sempre.<br>Salvador do mundo, salvai-nos. <br>Vinde, Senhor Jesus!<br><br>Celebrante principal e concelebrantes:<br>122. Em seguida, o sacerdote, de braços abertos, diz:<br>Celebrando agora, Senhor, o memorial da nossa redenção,<br>recordamos a morte de Cristo <br>e a sua descida à mansão dos mortos;<br>proclamamos a sua ressurreição e ascensão aos céus; <br>e, esperando a sua vinda gloriosa, <br>nós Vos oferecemos o seu Corpo e Sangue, <br>o sacrifício do vosso agrado<br>e de salvação para todo o mundo.<br>Olhai, Senhor, para esta oblação, <br>que preparastes para a vossa Igreja, <br>e concedei, por vossa bondade, <br>a quantos vamos participar do mesmo pão e do mesmo cálice, <br>que, reunidos pelo Espírito Santo num só corpo, <br>sejamos em Cristo uma oferenda viva,<br>para louvor da vossa glória.<br>Celebrante principal ou concelebrante [1]:<br>Lembrai-Vos agora, Senhor,<br>de todos aqueles por quem oferecemos este sacrifício:<br>o vosso servo, o nosso papa N., <br>o nosso bispo N. <br>O bispo, quando celebra na sua diocese, diz:<br>e eu, vosso indigno servo,<br>O bispo, quando celebra fora da sua diocese, diz:<br>o meu irmão N. (os meus irmãos), bispo(s) desta Igreja,<br>e eu, vosso indigno servo,<br>Pode fazer-se menção do bispo coadjutor ou dos bispos auxiliares:<br>o nosso bispo coadjutor (ou auxiliar) N. <br>Ou: os nossos bispos auxiliares,<br>e todos os bispos, <br>os ministros sagrados e os que Vos apresentam as suas ofertas, <br>os membros desta assembleia, todo o vosso povo santo<br>e todos aqueles que Vos procuram de coração sincero.<br><br>Celebrante principal ou concelebrante [2]:<br>Lembrai-Vos também<br>dos nossos irmãos que adormeceram na paz de Cristo<br>e de todos os defuntos cuja fé só Vós conhecestes.<br>E a todos nós, vossos filhos, <br>concedei, Pai de misericórdia, <br>a graça de alcançarmos a herança do céu, <br>com a Virgem santa Maria, Mãe de Deus, são José, seu esposo,<br>os apóstolos e todos os santos, <br>para que, no vosso reino,<br>com a criação inteira liberta do pecado e da morte, <br>cantemos eternamente a vossa glória, <br>por nosso Senhor Jesus Cristo. <br>Junta as mãos.<br>Por Ele concedeis ao mundo todos os bens.<br>Celebrante principal ou concelebrantes:<br>123. Toma o cálice e a patena com a hóstia e, elevando-os, diz:<br>Por Cristo, com Cristo, em Cristo, <br>a Vós, Deus Pai todo-poderoso,<br>na unidade do Espírito Santo, <br>toda a honra e toda a glória,<br>por todos os séculos dos séculos.<br>O povo aclama: Amen.<br>Seguem-se os ritos da comunhão.<br><br>Ritos da comunhão<br>124. Tendo colocado o cálice e a patena sobre o altar, o sacerdote, de mãos <br>juntas, diz:<br>Fiéis aos ensinamentos do Salvador, ousamos dizer: <br>Ou: Num só coração e numa só alma, <br> ousamos dizer como o Senhor nos ensinou:<br>Ou: Porque nos chamamos e somos filhos de Deus,<br> ousamos dizer com toda a confiança:<br>Ou: Unidos a Cristo, pelo Espírito Santo, ousamos dizer:<br>Ou: Em comunhão com toda a Igreja, ousamos dizer:<br>Abre os braços e, juntamente com o povo, continua:<br>Pai nosso, que estais nos céus,<br>santificado seja o vosso nome;<br>venha a nós o vosso reino; <br>seja feita a vossa vontade,<br>assim na terra como no céu. <br>O pão nosso de cada dia nos dai hoje;<br>perdoai-nos as nossas ofensas, <br>assim como nós perdoamos <br>a quem nos tem ofendido; <br>e não nos deixeis cair em tentação,<br>mas livrai-nos do mal.<br>Ou em latim:<br>Pater noster, qui es in caelis: <br>sanctificétur nomen tuum; <br>advéniat regnum tuum;<br>fiat volúntas tua, sicut in caelo, et in terra. <br>Panem nostrum cotidiánum da nobis hódie;<br><br>et dimítte nobis débita nostra, <br>sicut et nos dimíttimus debitóribus nostris; <br>et ne nos indúcas in tentatiónem; <br>sed líbera nos a malo.<br>125. De braços abertos, o sacerdote diz sozinho: <br>Livrai-nos de todo o mal, Senhor, <br>e dai ao mundo a paz em nossos dias,<br>para que, ajudados pela vossa misericórdia, <br>sejamos sempre livres do pecado e de toda a perturbação, <br>enquanto esperamos a vinda gloriosa <br>de Jesus Cristo nosso Salvador.<br>Junta as mãos.<br>O povo conclui a oração, aclamando:<br>V osso é o reino e o poder <br>e a glória para sempre.<br>126. Em seguida, o sacerdote, de braços abertos, diz em voz alta:<br>Senhor Jesus Cristo, que dissestes aos vossos apóstolos: <br>Deixo-vos a paz, dou-vos a minha paz:<br>não olheis aos nossos pecados, mas à fé da vossa Igreja,<br>e dai-lhe a união e a paz, segundo a vossa vontade, <br>Junta as mãos.<br>Vós que viveis e reinais pelos séculos dos séculos.<br>O povo responde: Amen.<br>127. O sacerdote, voltado para o povo, estendendo e juntando as mãos, diz:<br>A paz do Senhor esteja sempre convosco. <br>O povo responde: O amor de Cristo nos uniu.<br><br>128. Em seguida, conforme as circunstâncias, o diácono ou o sacerdote acrescenta:<br>Saudai-vos na paz de Cristo.<br>Ou: Como filhos do Deus da paz, <br> saudai-vos com um gesto de comunhão fraterna.<br>Ou: Em Jesus, que fez de todos nós seus irmãos, <br> saudai-vos com um gesto de reconciliação e de paz.<br>Ou: No Espírito de Cristo ressuscitado, <br> saudai-vos com um gesto de paz.<br>Todos se saúdam, segundo os costumes locais, em sinal de mútua paz, comunhão <br>e caridade. O sacerdote saúda o diácono ou o ministro.<br>129. Em seguida, toma a hóstia, parte-a sobre a patena e deita um fragmento <br>no cálice, dizendo em silêncio: <br>Esta união do Corpo e Sangue de nosso Senhor Jesus Cristo, <br>que vamos receber, nos sirva para a vida eterna.<br>130. Entretanto, canta-se ou recita-se:<br>Cordeiro de Deus, que tirais o pecado do mundo, <br> tende piedade de nós.<br>Cordeiro de Deus, que tirais o pecado do mundo, <br> tende piedade de nós.<br>Cordeiro de Deus, que tirais o pecado do mundo, <br> dai-nos a paz.<br>Ou, com canto em latim:<br>Agnus Dei, qui tollis peccáta mundi: miserére nobis. <br>Agnus Dei, qui tollis peccáta mundi: miserére nobis. <br>Agnus Dei, qui tollis peccáta mundi: dona nobis pacem.<br>Estas invocações podem repetir-se várias vezes, se a fração do pão se prolongar. <br>Contudo, na última vez, diz-se: dai-nos a paz.<br><br>131. Em seguida, o sacerdote, de mãos juntas, diz em silêncio: <br>Senhor Jesus Cristo, Filho de Deus vivo, <br>que, por vontade do Pai e com o poder do Espírito Santo, <br>destes a vida ao mundo pela vossa morte, <br>livrai-me de todos os meus pecados e de todo o mal, <br>por este vosso santíssimo Corpo e Sangue; <br>conservai-me sempre fiel aos vossos mandamentos <br>e não permitais que eu me separe de V ós.<br>Ou:<br>A comunhão do vosso Corpo e Sangue, Senhor Jesus Cristo,<br>não seja para meu julgamento e condenação, <br>mas, pela vossa misericórdia, <br>me sirva de proteção e remédio para a alma e para o corpo.<br>132. O sacerdote genuflete, toma a hóstia, levanta-a um pouco sobre a patena <br>ou sobre o cálice e, voltado para o povo, diz em voz alta:<br>Felizes os convidados para a Ceia do Senhor.<br>Eis o Cordeiro de Deus, que tira o pecado do mundo.<br>Ou: Felizes os convidados para o banquete do Reino dos céus. <br> Eis o Cordeiro de Deus, que tira o pecado do mundo.<br>Ou: Felizes os convidados para o banquete nupcial do Cordeiro.<br> Eis o Cordeiro de Deus, que tira o pecado do mundo.<br>Ou: Provai e vede como o Senhor é bom.<br> Eis o Cordeiro de Deus, que tira o pecado do mundo.<br>E, juntamente com o povo, acrescenta uma só vez:<br>Senhor, eu não sou digno de que entreis em minha morada, <br>mas dizei uma palavra e serei salvo.<br><br>133. V oltado para o altar, o sacerdote diz em silêncio:<br>O Corpo de Cristo me guarde para a vida eterna.<br>Comunga com reverência o Corpo de Cristo.<br>Em seguida, toma o cálice e diz em silêncio:<br>O Sangue de Cristo me guarde para a vida eterna.<br>Comunga com reverência o Sangue de Cristo.<br>134. Depois, toma a patena ou a píxide, aproxima-se dos comungantes e, elevando um pouco a hóstia, mostra-a a cada um deles, dizendo:<br>O Corpo de Cristo Ou: Corpus Christi. <br>O comungante responde Amen e comunga.<br>O diácono procede do mesmo modo, se tiver de distribuir a Comunhão.<br>135. Para a comunhão sob as duas espécies, segue-se o rito descrito em seu <br>lugar próprio.<br>136. Enquanto o sacerdote comunga o Corpo de Cristo, começa-se o cântico <br>da comunhão.<br>137. Terminada a distribuição da Comunhão, o sacerdote ou o diácono, ou o <br>acólito instituído, purifica a patena sobre o cálice e o próprio cálice. <br>Durante a purificação, o sacerdote diz em silêncio: <br>O que em nossa boca recebemos, Senhor, <br>seja por nós acolhido em coração puro, <br>e estes dons da vida temporal <br>se tornem remédio de vida eterna.<br>138. Então, o sacerdote pode voltar para a sua cadeira. Se convier, podem guardar-se uns momentos de silêncio sagrado, ou recitar um salmo ou um cântico de <br>louvor.<br>139. Em seguida, de pé, junto da sua cadeira ou do altar, o sacerdote, voltado <br>para o povo, diz, de mãos juntas: <br>Oremos.<br>Todos, juntamente com o sacerdote, oram em silêncio durante alguns momentos, <br>a não ser que já antes tenha havido silêncio.<br><br>Em seguida, o sacerdote diz, de braços abertos, a oração depois da comunhão.<br>Se a oração se dirige ao Pai, a conclusão é da seguinte forma:<br>Por Cristo nosso Senhor.<br>Se a oração se dirige ao Pai, com menção do Filho na parte final:<br>Ele que vive e reina pelos séculos dos séculos.<br>Se a oração se dirige ao Filho:<br>Vós que viveis e reinais pelos séculos dos séculos.<br>No fim, o povo aclama: Amen.<br><br>Ritos de conclusão<br>140. Seguem-se, se os houver, breves avisos ao povo.<br>141. Em seguida, faz-se a despedida.<br>O sacerdote, voltado para o povo, abrindo os braços, diz:<br>O Senhor esteja convosco.<br>O povo responde: Ele está no meio de nós.<br>O sacerdote abençoa o povo, dizendo:<br>Abençoe-vos Deus todo-poderoso, <br>Pai, Filho e + Espírito Santo.<br>O povo responde: Amen.<br>142. Em certos dias e em ocasiões especiais, a fórmula de bênção tem textos <br>próprios: bênção solene ou oração sobre o povo (cf. pp. 703-720).<br>143. Na Missa pontifical, o celebrante toma a mitra e, abrindo os braços, diz:<br>O Senhor esteja convosco.<br>Todos respondem: Ele está no meio de nós.<br>O celebrante diz:<br>Bendito seja o nome do Senhor.<br>Todos respondem: Agora e para sempre.<br>O celebrante diz:<br>O nosso auxílio vem do Senhor.<br>Todos respondem: Que fez o céu e a terra.<br><br>Então, o celebrante toma o báculo, se o usa, e diz:<br>Abençoe-vos Deus todo-poderoso,<br>e, fazendo por três vezes o sinal da cruz sobre o povo, continua:<br>Pai, + Filho + e Espírito + Santo.<br>Todos: Amen.<br>144. Em seguida, o diácono ou o próprio sacerdote, de mãos juntas e voltado <br>para o povo, diz:<br>Ide em paz e o Senhor vos acompanhe.<br>O povo responde: Graças a Deus.<br>Ou: Anunciai o Evangelho do Senhor. <br> Ide em paz e o Senhor vos acompanhe.<br>Ou: Glorificai a Deus com a vossa vida. <br> Ide em paz e o Senhor vos acompanhe.<br>Ou: A alegria do Senhor seja a vossa força. <br> Ide em paz e o Senhor vos acompanhe.<br>Ou, no Tempo Pascal: <br>Levai a todos a alegria do Senhor ressuscitado. Aleluia.<br>Ide em paz e o Senhor vos acompanhe.<br>145. Em seguida, o sacerdote beija o altar em sinal de veneração, como no <br>início. Feita a inclinação profunda com os ministros, retira-se.<br>146. Se a Missa é seguida de outra ação litúrgica, omitem-se os ritos de despedida." });
  const dailyUrl = () => 'https://www.liturgia.pt/liturgiadiaria/';
  global.countryMassData.PT = Object.freeze({
    schemaVersion: 2, jurisdiction: 'PT', jurisdictions: Object.freeze(['PT']),
    jurisdictionName: 'Portugal', conferenceCalendar: 'Conferência Episcopal Portuguesa',
    ordinaryLanguage: 'PT', ordinary, ordinaryStructure: 'paragraph-rubric-choices-v1', officialOrderCorpus,
    ordinaryEdition: 'Missal Romano, terceira edição para Portugal', ordinarySource, beta: true,
    dailyReadings: Object.freeze({ provider: 'Secretariado Nacional de Liturgia de Portugal', calendar: 'Portugal', translation: 'Leccionário e Missal Romano para Portugal', parser: 'strict-portuguese-daily-mass', url: dailyUrl }),
    dailyPropers: Object.freeze({ provider: 'Secretariado Nacional de Liturgia de Portugal', parser: 'strict-portuguese-daily-mass', url: dailyUrl }),
    properSources: Object.freeze({ nationalMissal: ordinarySource, dailyMass: 'https://www.liturgia.pt/liturgiadiaria/' }),
    calendar: Object.freeze({})
  });
})(globalThis);
