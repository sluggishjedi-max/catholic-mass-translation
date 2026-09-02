// Brazil Mass module (CNBB, Beta): complete Brazilian ordinary and Pocket Terço daily Mass source.
(function registerBrazilMass(global) {
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
          "pt": "Fórmula a"
        },
        "lines": [
          {
            "rubric_pt": "Reunido o povo, o sacerdote dirige-se com os ministros ao altar, enquanto se executa o canto de entrada."
          },
          {
            "rubric_pt": "Chegando ao altar, faz com os ministros uma profunda inclinação, beija o altar em sinal de veneração e, se for oportuno, incensa a cruz e o altar."
          },
          {
            "rubric_pt": "Depois se dirige com os ministros à cadeira."
          },
          {
            "rubric_pt": "Terminado o canto de entrada, o sacerdote e os fiéis, todos de pé, fazem o sinal da cruz, enquanto o sacerdote, voltado para o povo, diz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Em nome do Pai e do Filho e do Espírito Santo."
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "2."
          },
          {
            "rubric_pt": "Em seguida, o sacerdote, abrindo os braços, saúda o povo com uma das seguintes fórmulas:"
          },
          {
            "rubric_pt": "a)"
          },
          {
            "sp_pt": "",
            "text_pt": "A graça de nosso Senhor Jesus Cristo,"
          },
          {
            "sp_pt": "",
            "text_pt": "o amor do Pai"
          },
          {
            "sp_pt": "",
            "text_pt": "e a comunhão do Espírito Santo"
          },
          {
            "sp_pt": "",
            "text_pt": "estejam convosco."
          },
          {
            "sp_pt": "",
            "text_pt": "(Cf. 2Cor 13, 13)"
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Bendito seja Deus, que nos reuniu no amor de Cristo."
          }
        ]
      },
      "B": {
        "label": {
          "pt": "Fórmula b"
        },
        "lines": [
          {
            "rubric_pt": "Reunido o povo, o sacerdote dirige-se com os ministros ao altar, enquanto se executa o canto de entrada."
          },
          {
            "rubric_pt": "Chegando ao altar, faz com os ministros uma profunda inclinação, beija o altar em sinal de veneração e, se for oportuno, incensa a cruz e o altar."
          },
          {
            "rubric_pt": "Depois se dirige com os ministros à cadeira."
          },
          {
            "rubric_pt": "Terminado o canto de entrada, o sacerdote e os fiéis, todos de pé, fazem o sinal da cruz, enquanto o sacerdote, voltado para o povo, diz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Em nome do Pai e do Filho e do Espírito Santo."
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "2."
          },
          {
            "rubric_pt": "Em seguida, o sacerdote, abrindo os braços, saúda o povo com uma das seguintes fórmulas:"
          },
          {
            "rubric_pt": "b)"
          },
          {
            "sp_pt": "",
            "text_pt": "A graça e a paz de Deus, nosso Pai,"
          },
          {
            "sp_pt": "",
            "text_pt": "e de Jesus Cristo, nosso Senhor,"
          },
          {
            "sp_pt": "",
            "text_pt": "estejam convosco."
          },
          {
            "sp_pt": "",
            "text_pt": "(Cf. 1Cor 1, 3)"
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Bendito seja Deus, que nos reuniu no amor de Cristo."
          }
        ]
      },
      "C": {
        "label": {
          "pt": "Fórmula c"
        },
        "lines": [
          {
            "rubric_pt": "Reunido o povo, o sacerdote dirige-se com os ministros ao altar, enquanto se executa o canto de entrada."
          },
          {
            "rubric_pt": "Chegando ao altar, faz com os ministros uma profunda inclinação, beija o altar em sinal de veneração e, se for oportuno, incensa a cruz e o altar."
          },
          {
            "rubric_pt": "Depois se dirige com os ministros à cadeira."
          },
          {
            "rubric_pt": "Terminado o canto de entrada, o sacerdote e os fiéis, todos de pé, fazem o sinal da cruz, enquanto o sacerdote, voltado para o povo, diz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Em nome do Pai e do Filho e do Espírito Santo."
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "2."
          },
          {
            "rubric_pt": "Em seguida, o sacerdote, abrindo os braços, saúda o povo com uma das seguintes fórmulas:"
          },
          {
            "rubric_pt": "c)"
          },
          {
            "rubric_pt": "Ⓑ"
          },
          {
            "sp_pt": "",
            "text_pt": "O Senhor, que encaminha os nossos corações"
          },
          {
            "sp_pt": "",
            "text_pt": "para o amor de Deus e a constância de Cristo,"
          },
          {
            "sp_pt": "",
            "text_pt": "esteja convosco."
          },
          {
            "sp_pt": "",
            "text_pt": "(2Ts 3, 5)"
          },
          {
            "rubric_pt": "d)"
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Bendito seja Deus, que nos reuniu no amor de Cristo."
          }
        ]
      },
      "D": {
        "label": {
          "pt": "Fórmula d"
        },
        "lines": [
          {
            "rubric_pt": "Reunido o povo, o sacerdote dirige-se com os ministros ao altar, enquanto se executa o canto de entrada."
          },
          {
            "rubric_pt": "Chegando ao altar, faz com os ministros uma profunda inclinação, beija o altar em sinal de veneração e, se for oportuno, incensa a cruz e o altar."
          },
          {
            "rubric_pt": "Depois se dirige com os ministros à cadeira."
          },
          {
            "rubric_pt": "Terminado o canto de entrada, o sacerdote e os fiéis, todos de pé, fazem o sinal da cruz, enquanto o sacerdote, voltado para o povo, diz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Em nome do Pai e do Filho e do Espírito Santo."
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "2."
          },
          {
            "rubric_pt": "Em seguida, o sacerdote, abrindo os braços, saúda o povo com uma das seguintes fórmulas:"
          },
          {
            "rubric_pt": "Ⓑ"
          },
          {
            "sp_pt": "",
            "text_pt": "O Deus da esperança,"
          },
          {
            "sp_pt": "",
            "text_pt": "que nos cumula de toda alegria e paz em nossa fé,"
          },
          {
            "sp_pt": "",
            "text_pt": "pela ação do Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "esteja convosco."
          },
          {
            "sp_pt": "",
            "text_pt": "(Rm 15, 13)"
          },
          {
            "rubric_pt": "e)"
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Bendito seja Deus, que nos reuniu no amor de Cristo."
          }
        ]
      },
      "E": {
        "label": {
          "pt": "Fórmula e"
        },
        "lines": [
          {
            "rubric_pt": "Reunido o povo, o sacerdote dirige-se com os ministros ao altar, enquanto se executa o canto de entrada."
          },
          {
            "rubric_pt": "Chegando ao altar, faz com os ministros uma profunda inclinação, beija o altar em sinal de veneração e, se for oportuno, incensa a cruz e o altar."
          },
          {
            "rubric_pt": "Depois se dirige com os ministros à cadeira."
          },
          {
            "rubric_pt": "Terminado o canto de entrada, o sacerdote e os fiéis, todos de pé, fazem o sinal da cruz, enquanto o sacerdote, voltado para o povo, diz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Em nome do Pai e do Filho e do Espírito Santo."
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "2."
          },
          {
            "rubric_pt": "Em seguida, o sacerdote, abrindo os braços, saúda o povo com uma das seguintes fórmulas:"
          },
          {
            "rubric_pt": "Ⓑ"
          },
          {
            "sp_pt": "",
            "text_pt": "A vós, irmãos, paz e fé"
          },
          {
            "sp_pt": "",
            "text_pt": "da parte de Deus, o Pai,"
          },
          {
            "sp_pt": "",
            "text_pt": "e do Senhor Jesus Cristo."
          },
          {
            "sp_pt": "",
            "text_pt": "(Ef 6, 23)"
          },
          {
            "rubric_pt": "f)"
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Bendito seja Deus, que nos reuniu no amor de Cristo."
          }
        ]
      },
      "F": {
        "label": {
          "pt": "Fórmula f"
        },
        "lines": [
          {
            "rubric_pt": "Reunido o povo, o sacerdote dirige-se com os ministros ao altar, enquanto se executa o canto de entrada."
          },
          {
            "rubric_pt": "Chegando ao altar, faz com os ministros uma profunda inclinação, beija o altar em sinal de veneração e, se for oportuno, incensa a cruz e o altar."
          },
          {
            "rubric_pt": "Depois se dirige com os ministros à cadeira."
          },
          {
            "rubric_pt": "Terminado o canto de entrada, o sacerdote e os fiéis, todos de pé, fazem o sinal da cruz, enquanto o sacerdote, voltado para o povo, diz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Em nome do Pai e do Filho e do Espírito Santo."
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "2."
          },
          {
            "rubric_pt": "Em seguida, o sacerdote, abrindo os braços, saúda o povo com uma das seguintes fórmulas:"
          },
          {
            "rubric_pt": "Ⓑ"
          },
          {
            "sp_pt": "",
            "text_pt": "Irmãos eleitos segundo a presciência de Deus Pai,"
          },
          {
            "sp_pt": "",
            "text_pt": "pela santificação do Espírito"
          },
          {
            "sp_pt": "",
            "text_pt": "para obedecer a Jesus Cristo"
          },
          {
            "sp_pt": "",
            "text_pt": "e participar da bênção da aspersão do seu sangue,"
          },
          {
            "sp_pt": "",
            "text_pt": "graça e paz vos sejam concedidas abundantemente."
          },
          {
            "sp_pt": "",
            "text_pt": "(1Pd 1, 1-2)"
          },
          {
            "rubric_pt": "g)"
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Bendito seja Deus, que nos reuniu no amor de Cristo."
          }
        ]
      },
      "G": {
        "label": {
          "pt": "Fórmula g"
        },
        "lines": [
          {
            "rubric_pt": "Reunido o povo, o sacerdote dirige-se com os ministros ao altar, enquanto se executa o canto de entrada."
          },
          {
            "rubric_pt": "Chegando ao altar, faz com os ministros uma profunda inclinação, beija o altar em sinal de veneração e, se for oportuno, incensa a cruz e o altar."
          },
          {
            "rubric_pt": "Depois se dirige com os ministros à cadeira."
          },
          {
            "rubric_pt": "Terminado o canto de entrada, o sacerdote e os fiéis, todos de pé, fazem o sinal da cruz, enquanto o sacerdote, voltado para o povo, diz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Em nome do Pai e do Filho e do Espírito Santo."
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "2."
          },
          {
            "rubric_pt": "Em seguida, o sacerdote, abrindo os braços, saúda o povo com uma das seguintes fórmulas:"
          },
          {
            "rubric_pt": "Ⓑ"
          },
          {
            "sp_pt": "",
            "text_pt": "A graça e a paz"
          },
          {
            "sp_pt": "",
            "text_pt": "daquele que é, que era e que vem,"
          },
          {
            "sp_pt": "",
            "text_pt": "estejam convosco."
          },
          {
            "sp_pt": "",
            "text_pt": "(Ap 1, 8)"
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Bendito seja Deus, que nos reuniu no amor de Cristo."
          }
        ]
      },
      "H": {
        "label": {
          "pt": "Fórmula h"
        },
        "lines": [
          {
            "rubric_pt": "Reunido o povo, o sacerdote dirige-se com os ministros ao altar, enquanto se executa o canto de entrada."
          },
          {
            "rubric_pt": "Chegando ao altar, faz com os ministros uma profunda inclinação, beija o altar em sinal de veneração e, se for oportuno, incensa a cruz e o altar."
          },
          {
            "rubric_pt": "Depois se dirige com os ministros à cadeira."
          },
          {
            "rubric_pt": "Terminado o canto de entrada, o sacerdote e os fiéis, todos de pé, fazem o sinal da cruz, enquanto o sacerdote, voltado para o povo, diz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Em nome do Pai e do Filho e do Espírito Santo."
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "2."
          },
          {
            "rubric_pt": "Em seguida, o sacerdote, abrindo os braços, saúda o povo com uma das seguintes fórmulas:"
          },
          {
            "rubric_pt": "Ou, o sacerdote, abrindo os braços, diz:"
          },
          {
            "rubric_pt": "h)"
          },
          {
            "sp_pt": "",
            "text_pt": "O Senhor esteja convosco."
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Ele está no meio de nós."
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
            "text_pt": "Ato Penitencial*"
          },
          {
            "rubric_pt": "*Aos domingos, especialmente no tempo pascal, no lugar do Ato Penitencial habitual pode-se fazer a bênção de a aspersão da água em memória do Batismo como no Apêndice II do Missal Romano (p."
          },
          {
            "sp_pt": "",
            "text_pt": "1224-1227"
          },
          {
            "sp_pt": "",
            "text_pt": "). Ⓑ Neste caso, após a conclusão, seguem-se as invocações"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, tende piedade de nós"
          },
          {
            "sp_pt": "",
            "text_pt": "("
          },
          {
            "sp_pt": "",
            "text_pt": "Kýrie, eléison"
          },
          {
            "sp_pt": "",
            "text_pt": ")"
          },
          {
            "sp_pt": "",
            "text_pt": "Primeira fórmula"
          },
          {
            "rubric_pt": "4."
          },
          {
            "rubric_pt": "O sacerdote convida os fiéis ao ato penitencial:"
          },
          {
            "sp_pt": "",
            "text_pt": "Irmãos e irmãs,"
          },
          {
            "sp_pt": "",
            "text_pt": "reconheçamos"
          },
          {
            "sp_pt": "",
            "text_pt": "os nossos pecados,"
          },
          {
            "sp_pt": "",
            "text_pt": "para celebrarmos dignamente os santos mistérios."
          },
          {
            "rubric_pt": "Ou:"
          },
          {
            "rubric_pt": "Ⓑ"
          },
          {
            "sp_pt": "",
            "text_pt": "O Senhor Jesus, que nos convida"
          },
          {
            "sp_pt": "",
            "text_pt": "à mesa da Palavra e da Eucaristia,"
          },
          {
            "sp_pt": "",
            "text_pt": "nos chama a segui-lo fielmente."
          },
          {
            "sp_pt": "",
            "text_pt": "Reconheçamos ser pecadores"
          },
          {
            "sp_pt": "",
            "text_pt": "e invoquemos com confiança"
          },
          {
            "sp_pt": "",
            "text_pt": "a misericórdia do Pai."
          },
          {
            "rubric_pt": "Ou, especialmente aos domingos e durante a oitava de Páscoa:"
          },
          {
            "rubric_pt": "Ⓑ"
          },
          {
            "sp_pt": "",
            "text_pt": "No dia em que celebramos a vitória de Cristo"
          },
          {
            "sp_pt": "",
            "text_pt": "sobre o pecado e a morte,"
          },
          {
            "sp_pt": "",
            "text_pt": "também nós somos convidados a morrer para o pecado"
          },
          {
            "sp_pt": "",
            "text_pt": "e ressurgir para uma vida nova."
          },
          {
            "sp_pt": "",
            "text_pt": "Reconheçamo-nos necessitados da misericórdia do Pai."
          },
          {
            "sp_pt": "",
            "text_pt": "Após um momento de silêncio, usa-se a seguinte fórmula:"
          },
          {
            "rubric_pt": "O sacerdote diz:"
          },
          {
            "sp_pt": "C.",
            "text_pt": "Confessemos os nossos pecados:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Confesso a Deus todo-poderoso"
          },
          {
            "sp_pt": "",
            "text_pt": "e a vós, irmãos e irmãs,"
          },
          {
            "sp_pt": "",
            "text_pt": "que pequei muitas vezes"
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
            "text_pt": "por minha culpa,"
          },
          {
            "sp_pt": "",
            "text_pt": "minha culpa,"
          },
          {
            "sp_pt": "",
            "text_pt": "minha tão grande culpa,"
          },
          {
            "rubric_pt": "Em seguida, continuam:"
          },
          {
            "sp_pt": "",
            "text_pt": "E peço à Virgem Maria,"
          },
          {
            "sp_pt": "",
            "text_pt": "aos Anjos e Santos"
          },
          {
            "sp_pt": "",
            "text_pt": "e a vós, irmãos e irmãs,"
          },
          {
            "sp_pt": "",
            "text_pt": "que rogueis por mim a Deus, nosso Senhor."
          },
          {
            "rubric_pt": "Segue-se a absolvição sacerdotal:"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus todo-poderoso tenha compaixão de nós,"
          },
          {
            "sp_pt": "",
            "text_pt": "perdoe os nossos pecados"
          },
          {
            "sp_pt": "",
            "text_pt": "e nos conduza à vida eterna."
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Amém."
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
            "text_pt": "Ato Penitencial*"
          },
          {
            "rubric_pt": "*Aos domingos, especialmente no tempo pascal, no lugar do Ato Penitencial habitual pode-se fazer a bênção de a aspersão da água em memória do Batismo como no Apêndice II do Missal Romano (p."
          },
          {
            "sp_pt": "",
            "text_pt": "1224-1227"
          },
          {
            "sp_pt": "",
            "text_pt": "). Ⓑ Neste caso, após a conclusão, seguem-se as invocações"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, tende piedade de nós"
          },
          {
            "sp_pt": "",
            "text_pt": "("
          },
          {
            "sp_pt": "",
            "text_pt": "Kýrie, eléison"
          },
          {
            "sp_pt": "",
            "text_pt": ")"
          },
          {
            "sp_pt": "",
            "text_pt": "Segunda fórmula"
          },
          {
            "rubric_pt": "5."
          },
          {
            "rubric_pt": "O sacerdote convida os fiéis ao ato penitencial:"
          },
          {
            "sp_pt": "",
            "text_pt": "Irmãos e irmãs,"
          },
          {
            "sp_pt": "",
            "text_pt": "reconheçamos os nossos pecados,"
          },
          {
            "sp_pt": "",
            "text_pt": "para celebrarmos dignamente os santos mistérios."
          },
          {
            "rubric_pt": "Ou:"
          },
          {
            "rubric_pt": "Ⓑ"
          },
          {
            "sp_pt": "",
            "text_pt": "No início desta celebração eucarística,"
          },
          {
            "sp_pt": "",
            "text_pt": "peçamos a conversão do coração,"
          },
          {
            "sp_pt": "",
            "text_pt": "fonte de reconciliação e comunhão"
          },
          {
            "sp_pt": "",
            "text_pt": "com Deus e com os irmãos e irmãs."
          },
          {
            "rubric_pt": "Ou:"
          },
          {
            "rubric_pt": "Ⓑ"
          },
          {
            "sp_pt": "",
            "text_pt": "De coração contrito e humilde,"
          },
          {
            "sp_pt": "",
            "text_pt": "aproximemo-nos do Deus justo e santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "para que tenha piedade de nós, pecadores."
          },
          {
            "sp_pt": "",
            "text_pt": "Após um momento de silêncio, o sacerdote diz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Tende compaixão de nós, Senhor."
          },
          {
            "rubric_pt": "O povo:"
          },
          {
            "sp_pt": "",
            "text_pt": "Porque somos pecadores."
          },
          {
            "rubric_pt": "O sacerdote:"
          },
          {
            "sp_pt": "",
            "text_pt": "Manifestai, Senhor, a vossa misericórdia."
          },
          {
            "rubric_pt": "O povo:"
          },
          {
            "sp_pt": "",
            "text_pt": "E dai-nos a vossa salvação."
          },
          {
            "rubric_pt": "Segue-se a absolvição sacerdotal:"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus todo-poderoso tenha compaixão de nós,"
          },
          {
            "sp_pt": "",
            "text_pt": "perdoe os nossos pecados"
          },
          {
            "sp_pt": "",
            "text_pt": "e nos conduza à vida eterna."
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Amém."
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
            "text_pt": "Ato Penitencial*"
          },
          {
            "rubric_pt": "*Aos domingos, especialmente no tempo pascal, no lugar do Ato Penitencial habitual pode-se fazer a bênção de a aspersão da água em memória do Batismo como no Apêndice II do Missal Romano (p."
          },
          {
            "sp_pt": "",
            "text_pt": "1224-1227"
          },
          {
            "sp_pt": "",
            "text_pt": "). Ⓑ Neste caso, após a conclusão, seguem-se as invocações"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, tende piedade de nós"
          },
          {
            "sp_pt": "",
            "text_pt": "("
          },
          {
            "sp_pt": "",
            "text_pt": "Kýrie, eléison"
          },
          {
            "sp_pt": "",
            "text_pt": ")"
          },
          {
            "sp_pt": "",
            "text_pt": "Terceira fórmula"
          },
          {
            "rubric_pt": "6."
          },
          {
            "rubric_pt": "O sacerdote convida os fiéis ao ato penitencial:"
          },
          {
            "sp_pt": "",
            "text_pt": "Irmãos e irmãs,"
          },
          {
            "sp_pt": "",
            "text_pt": "reconheçamos os nossos pecados,"
          },
          {
            "sp_pt": "",
            "text_pt": "para celebrarmos dignamente os santos mistérios."
          },
          {
            "rubric_pt": "Ou:"
          },
          {
            "rubric_pt": "Ⓑ"
          },
          {
            "sp_pt": "",
            "text_pt": "Em Jesus Cristo, o Justo,"
          },
          {
            "sp_pt": "",
            "text_pt": "que intercede por nós e nos reconcilia com o Pai,"
          },
          {
            "sp_pt": "",
            "text_pt": "abramos o nosso espírito ao arrependimento"
          },
          {
            "sp_pt": "",
            "text_pt": "para sermos"
          },
          {
            "sp_pt": "",
            "text_pt": "dignos de nos aproximar"
          },
          {
            "sp_pt": "",
            "text_pt": "da mesa do Senhor."
          },
          {
            "rubric_pt": "Ou:"
          },
          {
            "rubric_pt": "Ⓑ"
          },
          {
            "sp_pt": "",
            "text_pt": "O Senhor disse:"
          },
          {
            "sp_pt": "",
            "text_pt": "\"Quem dentre vós estiver sem pecado,"
          },
          {
            "sp_pt": "",
            "text_pt": "atire a primeira pedra\"."
          },
          {
            "sp_pt": "",
            "text_pt": "Reconheçamo-nos todos pecadores"
          },
          {
            "sp_pt": "",
            "text_pt": "e perdoemo-nos mutuamente do fundo do coração."
          },
          {
            "sp_pt": "",
            "text_pt": "Após um momento de silêncio, o sacerdote, o diácono ou outro ministro propõe as seguintes invocações ou outras semelhantes com"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, tende piedade de nós"
          },
          {
            "sp_pt": "",
            "text_pt": "."
          },
          {
            "rubric_pt": "Ⓑ Para o canto se pode usar a aclamação grega:"
          },
          {
            "sp_pt": "",
            "text_pt": "Kýrie, eléison"
          },
          {
            "sp_pt": "",
            "text_pt": "."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que viestes salvar os corações arrependidos,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "rubric_pt": "O sacerdote:"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que viestes chamar os pecadores,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "rubric_pt": "O povo:"
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, tende piedade de nós."
          },
          {
            "rubric_pt": "O sacerdote:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que intercedeis por nós junto do Pai,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "rubric_pt": "O povo:"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "rubric_pt": "Segue-se a absolvição sacerdotal:"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus todo-poderoso tenha compaixão de nós,"
          },
          {
            "sp_pt": "",
            "text_pt": "perdoe os nossos pecados"
          },
          {
            "sp_pt": "",
            "text_pt": "e nos conduza à vida eterna."
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "Ⓑ Invocações alternativas para os diversos tempos"
          },
          {
            "sp_pt": "",
            "text_pt": "Tempo Comum:"
          },
          {
            "rubric_pt": "1."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que sois o caminho que leva ao Pai,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que sois a verdade que ilumina os povos,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Cristo, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que sois a vida que renova o mundo,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "rubric_pt": "2."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que oferecestes o vosso perdão a Pedro arrependido,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que prometestes o paraíso ao bom ladrão,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Cristo, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que acolheis toda pessoa que confia na vossa misericórdia,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "rubric_pt": "3."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que viestes, não para condenar, mas para perdoar,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que vos alegrais pelo pecador arrependido,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Cristo, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que muito perdoais a quem muito ama,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "rubric_pt": "4."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que viestes procurar quem estava perdido,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que viestes dar a vida em resgate de muitos,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Cristo, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que congregais na unidade os"
          },
          {
            "sp_pt": "",
            "text_pt": "filhos de Deus"
          },
          {
            "sp_pt": "",
            "text_pt": "dispersos,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "rubric_pt": "5."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que sois a plenitude da verdade e da graça,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que vos tornastes pobre para nos enriquecer,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Cristo, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que viestes para fazer de nós o vosso povo santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Tempo do Advento:"
          },
          {
            "rubric_pt": "1."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que viestes ao mundo para nos salvar,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que continuamente nos visitais com a graça do vosso Espírito,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Cristo, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que vireis um dia para julgar as nossas obras,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "rubric_pt": "2."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que sois o defensor dos pobres,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que sois o refúgio dos fracos,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Cristo, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que sois a esperança dos pecadores,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "rubric_pt": "3."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que vindes visitar vosso povo na paz,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que vindes salvar o que estava perdido,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Cristo, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que vindes criar um mundo novo,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Tempo do Natal:"
          },
          {
            "rubric_pt": "1."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Filho de Deus, que, nascendo da Virgem Maria, vos fizestes nosso irmão,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, Filho do homem, que conheceis e compreendeis nossa fraqueza,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Cristo, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Filho primogênito do Pai, que fazeis de nós uma só família,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "rubric_pt": "2."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, rei da paz,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, luz nas trevas,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Cristo, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, imagem do homem novo,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Tempo da Quaresma:"
          },
          {
            "rubric_pt": "1."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor que na cruz perdoastes o ladrão arrependido,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que nos mandastes perdoar-nos mutuamente antes de nos aproximar do vosso altar,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Cristo, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que confiastes à vossa Igreja o ministério da reconciliação,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "rubric_pt": "2."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que na água e no Espírito nos regenerastes à vossa imagem,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que enviais o vosso Espírito para criar em nós um coração novo,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Cristo, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que nos tornastes participantes do vosso Corpo e do vosso Sangue,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "rubric_pt": "3."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que fazeis passar da morte para a vida quem ouve a vossa palavra,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que quisestes ser levantado da terra para que tenha a vida eterna todo aquele que crê em vós,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Cristo, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que nos submeteis ao julgamento da vossa cruz, para levar-nos à glória da ressurreição,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Tempo da Páscoa:"
          },
          {
            "rubric_pt": "1."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, nossa paz,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, nossa Páscoa,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Cristo, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, nossa vida,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "rubric_pt": "2."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que sois o eterno sacerdote da nova Aliança,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que nos edificais como pedras vivas no templo santo de Deus,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Cristo, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que nos tornais concidadãos dos santos no reino dos céus,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "rubric_pt": "3."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que, subindo ao céu, nos presenteastes com o dom do Espírito,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que dais vida a todas as coisas com o poder da vossa palavra,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Cristo, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, Rei do universo e Senhor dos séculos,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "rubric_pt": "4."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que, subindo ao céu, vos tornastes Rei do universo, e Senhor dos séculos,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que na vossa ascensão levastes cativo o cativeiro,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Cristo, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que voltando à casa do Pai abristes o céu para nós,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "rubric_pt": "5."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que pelo Espírito Santo estais presente no mundo,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que dais o Espírito Santo para o perdão dos pecados,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Cristo, tende piedade de nós."
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor, que enviais o Espírito Santo para criar um mundo novo,"
          },
          {
            "sp_pt": "",
            "text_pt": "tende piedade de nós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Senhor, tende piedade de nós."
          },
          {
            "rubric_pt": "7."
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
        "rubric_pt": "Seguem-se as invocações"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, tende piedade de nós"
      },
      {
        "sp_pt": "",
        "text_pt": "("
      },
      {
        "sp_pt": "",
        "text_pt": "Kýrie, eléison"
      },
      {
        "sp_pt": "",
        "text_pt": "), caso já não tenham ocorrido no ato penitencial:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, tende piedade de nós."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Kýrie, eléison"
      },
      {
        "sp_pt": "R.",
        "text_pt": "Senhor, tende piedade de nós."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Kýrie, eléison"
      },
      {
        "sp_pt": "",
        "text_pt": "Cristo, tende piedade de nós."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Christe, eléison"
      },
      {
        "sp_pt": "R.",
        "text_pt": "Cristo, tende piedade de nós."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Christe, eléison"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, tende piedade de nós."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Kýrie, eléison"
      },
      {
        "sp_pt": "R.",
        "text_pt": "Senhor, tende piedade de nós."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Kýrie, eléison"
      },
      {
        "rubric_pt": "8."
      }
    ],
    "if": "not_penitential_C"
  },
  {
    "id": "1.5 gloria",
    "type": "part",
    "header": {
      "pt": "Glória"
    },
    "lines": [
      {
        "rubric_pt": "Quando for prescrito, canta-se ou recita-se em seguida o hino:"
      },
      {
        "sp_pt": "",
        "text_pt": "Glória a Deus nas alturas,"
      },
      {
        "sp_pt": "",
        "text_pt": "e paz na terra aos homens por Ele amados."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor Deus, rei dos céus,"
      },
      {
        "sp_pt": "",
        "text_pt": "Deus Pai todo-poderoso."
      },
      {
        "sp_pt": "",
        "text_pt": "Nós vos louvamos,"
      },
      {
        "sp_pt": "",
        "text_pt": "nós vos bendizemos,"
      },
      {
        "sp_pt": "",
        "text_pt": "nós vos adoramos,"
      },
      {
        "sp_pt": "",
        "text_pt": "nós vos glorificamos,"
      },
      {
        "sp_pt": "",
        "text_pt": "nós vos damos graças"
      },
      {
        "sp_pt": "",
        "text_pt": "por vossa imensa glória."
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor Jesus Cristo, Filho Unigênito,"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor Deus, Cordeiro de Deus,"
      },
      {
        "sp_pt": "",
        "text_pt": "Filho de Deus Pai."
      },
      {
        "sp_pt": "",
        "text_pt": "Vós que tirais o pecado do mundo,"
      },
      {
        "sp_pt": "",
        "text_pt": "tende piedade de nós."
      },
      {
        "sp_pt": "",
        "text_pt": "Vós que tirais o pecado do mundo,"
      },
      {
        "sp_pt": "",
        "text_pt": "acolhei a nossa súplica."
      },
      {
        "sp_pt": "",
        "text_pt": "Vós que estais à direita do Pai,"
      },
      {
        "sp_pt": "",
        "text_pt": "tende piedade de nós."
      },
      {
        "sp_pt": "",
        "text_pt": "Só Vós sois o Santo,"
      },
      {
        "sp_pt": "",
        "text_pt": "só vós, o Senhor,"
      },
      {
        "sp_pt": "",
        "text_pt": "só vós, o Altíssimo,"
      },
      {
        "sp_pt": "",
        "text_pt": "Jesus Cristo,"
      },
      {
        "sp_pt": "",
        "text_pt": "com o Espírito Santo,"
      },
      {
        "sp_pt": "",
        "text_pt": "na glória de Deus Pai."
      },
      {
        "sp_pt": "",
        "text_pt": "Amém."
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
        "text_pt": "Amém."
      }
    ]
  },
  {
    "id": "2. THE LITURGY OF THE WORD",
    "type": "section",
    "pt": "Liturgia da Palavra"
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
      "pt": "Aclamação ao Evangelho"
    },
    "lines": [
      {
        "sp_pt": "",
        "text_pt": "(Aclamação ao Evangelho do dia)"
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
        "rubric_pt": "Enquanto isso, o sacerdote, quando se usa incenso, coloca-o no turíbulo. O diácono, que vai proclamar o Evangelho, inclinando-se profundamente diante do sacerdote, pede a bênção em voz baixa:"
      },
      {
        "sp_pt": "",
        "text_pt": "Dá-me a tua bênção."
      },
      {
        "rubric_pt": "O sacerdote diz em voz baixa:"
      },
      {
        "sp_pt": "",
        "text_pt": "O Senhor esteja em teu coração e em teus lábios para que possas anunciar dignamente o seu Evangelho: em nome do Pai e do Filho"
      },
      {
        "rubric_pt": "✠"
      },
      {
        "sp_pt": "",
        "text_pt": "e do Espírito Santo."
      },
      {
        "rubric_pt": "O diácono faz o sinal da cruz e responde:"
      },
      {
        "sp_pt": "D.",
        "text_pt": "Amém."
      },
      {
        "rubric_pt": "Se não houver diácono, o sacerdote, inclinado diante do altar, reza em silêncio:"
      },
      {
        "sp_pt": "",
        "text_pt": "Ó Deus todo-poderoso, purificai-me o coração e os lábios, para que eu possa anunciar dignamente o vosso santo Evangelho."
      },
      {
        "rubric_pt": "15."
      },
      {
        "rubric_pt": "O diácono ou o sacerdote dirige-se ao ambão, acompanhado, se for oportuno, pelos ministros com o incenso e velas, e diz:"
      },
      {
        "sp_pt": "",
        "text_pt": "(Evangelho do dia)"
      },
      {
        "rubric_pt": "16."
      },
      {
        "rubric_pt": "Terminado o Evangelho, o diácono ou o sacerdote aclama:"
      },
      {
        "sp_pt": "",
        "text_pt": "Palavra da Salvação."
      },
      {
        "sp_pt": "",
        "text_pt": "Todos respondem:"
      },
      {
        "sp_pt": "",
        "text_pt": "Glória a vós, Senhor."
      },
      {
        "rubric_pt": "Depois beija o livro, dizendo em silêncio:"
      },
      {
        "sp_pt": "",
        "text_pt": "Pelas palavras do santo Evangelho sejam perdoados os nossos pecados."
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
        "rubric_pt": "Em seguida, faz-se a homilia, que compete ao sacerdote ou diácono; ela é obrigatória em todos domingos e festas de preceito e recomendada também nos outros dias."
      },
      {
        "rubric_pt": "18."
      }
    ]
  },
  {
    "id": "2.8 creed",
    "type": "selectable",
    "header": {
      "pt": "Profissão de fé"
    },
    "variants": {
      "A": {
        "label": {
          "pt": "Símbolo niceno-constantinopolitano"
        },
        "lines": [
          {
            "sp_pt": "",
            "text_pt": "Terminada a homilia, quando prescrito, canta-se ou recíta-se o símbolo ou profissão de fé:"
          },
          {
            "sp_pt": "",
            "text_pt": "Símbolo Niceno-constantinopolitano:"
          },
          {
            "sp_pt": "",
            "text_pt": "Creio em um só Deus, Pai todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Criador do céu e da terra,"
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
            "text_pt": "Filho Unigênito de Deus,"
          },
          {
            "sp_pt": "",
            "text_pt": "nascido do Pai antes de todos os séculos:"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus de Deus,"
          },
          {
            "sp_pt": "",
            "text_pt": "luz da luz,"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus verdadeiro de Deus verdadeiro,"
          },
          {
            "sp_pt": "",
            "text_pt": "gerado, não criado,"
          },
          {
            "sp_pt": "",
            "text_pt": "consubstancial ao Pai."
          },
          {
            "sp_pt": "",
            "text_pt": "Por ele todas as coisas foram feitas."
          },
          {
            "sp_pt": "",
            "text_pt": "E por nós, homens, e para nossa salvação,"
          },
          {
            "sp_pt": "",
            "text_pt": "desceu dos céus"
          },
          {
            "sp_pt": "",
            "text_pt": "Às palavras seguintes, até"
          },
          {
            "sp_pt": "",
            "text_pt": "e se fez homem"
          },
          {
            "sp_pt": "",
            "text_pt": ", todos se inclinam."
          },
          {
            "sp_pt": "",
            "text_pt": "e se encarnou pelo Espírito Santo, no seio da Virgem Maria,"
          },
          {
            "sp_pt": "",
            "text_pt": "e se fez homem."
          },
          {
            "sp_pt": "",
            "text_pt": "Também por nós foi crucificado"
          },
          {
            "sp_pt": "",
            "text_pt": "sob Pôncio Pilatos;"
          },
          {
            "sp_pt": "",
            "text_pt": "padeceu e foi sepultado."
          },
          {
            "sp_pt": "",
            "text_pt": "Ressuscitou ao terceiro dia,"
          },
          {
            "sp_pt": "",
            "text_pt": "conforme as Escrituras,"
          },
          {
            "sp_pt": "",
            "text_pt": "e subiu aos céus,"
          },
          {
            "sp_pt": "",
            "text_pt": "onde está sentado à direita do Pai."
          },
          {
            "sp_pt": "",
            "text_pt": "E de novo há de vir, em sua glória,"
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
            "text_pt": "Creio no Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "Senhor que dá a vida,"
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
            "text_pt": "ele que falou pelos profetas."
          },
          {
            "sp_pt": "",
            "text_pt": "Creio na Igreja,"
          },
          {
            "sp_pt": "",
            "text_pt": "una, santa, católica e apostólica."
          },
          {
            "sp_pt": "",
            "text_pt": "Professo um só batismo"
          },
          {
            "sp_pt": "",
            "text_pt": "para remissão dos pecados."
          },
          {
            "sp_pt": "",
            "text_pt": "E espero a ressurreição dos mortos"
          },
          {
            "sp_pt": "",
            "text_pt": "e a vida do mundo que há de vir."
          },
          {
            "sp_pt": "",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "19."
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
            "text_pt": "Terminada a homilia, quando prescrito, canta-se ou recíta-se o símbolo ou profissão de fé:"
          },
          {
            "sp_pt": "",
            "text_pt": "No lugar do símbolo niceno-constantinopolitano, pode-se usar, sobretudo nos tempos da Quaresma e da Páscoa, a profissão de fé batismal da Igreja Romana, o assim chamado símbolo dos Apóstolos:"
          },
          {
            "sp_pt": "",
            "text_pt": "Creio em Deus Pai todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Criador do céu e da terra."
          },
          {
            "sp_pt": "",
            "text_pt": "E em Jesus Cristo, seu único Filho, nosso Senhor,"
          },
          {
            "sp_pt": "",
            "text_pt": "Às palavras seguintes, até"
          },
          {
            "sp_pt": "",
            "text_pt": "Virgem Maria"
          },
          {
            "sp_pt": "",
            "text_pt": ", todos se inclinam."
          },
          {
            "sp_pt": "",
            "text_pt": "que foi concebido pelo poder do Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "nasceu da Virgem Maria,"
          },
          {
            "sp_pt": "",
            "text_pt": "padeceu sob Pôncio Pilatos,"
          },
          {
            "sp_pt": "",
            "text_pt": "foi crucificado, morto e sepultado,"
          },
          {
            "sp_pt": "",
            "text_pt": "desceu à mansão dos mortos,"
          },
          {
            "sp_pt": "",
            "text_pt": "ressuscitou ao terceiro dia,"
          },
          {
            "sp_pt": "",
            "text_pt": "subiu aos céus,"
          },
          {
            "sp_pt": "",
            "text_pt": "está sentado à direita de Deus Pai todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "donde há de vir a julgar os vivos e os mortos."
          },
          {
            "sp_pt": "",
            "text_pt": "Creio no Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "na Santa Igreja católica,"
          },
          {
            "sp_pt": "",
            "text_pt": "na comunhão dos santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "na remissão dos pecados,"
          },
          {
            "sp_pt": "",
            "text_pt": "na ressurreição da carne"
          },
          {
            "sp_pt": "",
            "text_pt": "e"
          },
          {
            "sp_pt": "",
            "text_pt": "na vida eterna. Amém."
          }
        ]
      }
    },
    "if": "sunday"
  },
  {
    "id": "2.9 universal",
    "type": "part",
    "header": {
      "pt": "Oração universal"
    },
    "lines": [
      {
        "rubric_pt": "Em seguida, faz-se a oração universal ou dos fiéis."
      }
    ],
    "if": "sunday"
  },
  {
    "id": "3. THE LITURGY OF THE EUCHARIST",
    "type": "section",
    "pt": "Liturgia Eucarística"
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
        "text_pt": "Inicia-se o canto da preparação das oferendas, enquanto os ministros colocam no altar o corporal, o sanguinho, o cálice, a pala e o Missal."
      },
      {
        "rubric_pt": "22."
      },
      {
        "sp_pt": "",
        "text_pt": "Convém que os fiéis expressem sua participação trazendo uma oferenda, seja pão e vinho para a celebração da Eucaristia, seja outro donativo para auxílio da comunidade e dos pobres."
      },
      {
        "rubric_pt": "23."
      },
      {
        "rubric_pt": "O sacerdote, de pé junto ao altar, recebe a patena com o pão em suas mãos e, levantando-a um pouco sobre o altar, diz em silêncio:"
      },
      {
        "sp_pt": "",
        "text_pt": "Bendito sejais, Senhor, Deus do universo,"
      },
      {
        "sp_pt": "",
        "text_pt": "pelo pão que recebemos de vossa bondade,"
      },
      {
        "sp_pt": "",
        "text_pt": "fruto da terra e do trabalho humano,"
      },
      {
        "sp_pt": "",
        "text_pt": "que agora vos apresentamos,"
      },
      {
        "sp_pt": "",
        "text_pt": "e para nós se vai tornar pão da vida."
      },
      {
        "rubric_pt": "Em seguida, coloca a patena com o pão sobre o corporal."
      },
      {
        "rubric_pt": "Se o canto da preparação das oferendas não continuar, o sacerdote poderá recitar em voz alta as palavras acima, e o povo acrescentar a aclamação:"
      },
      {
        "sp_pt": "",
        "text_pt": "Bendito seja Deus para sempre!"
      },
      {
        "rubric_pt": "24."
      },
      {
        "rubric_pt": "O diácono ou o sacerdote coloca o vinho e um pouco d água no cálice, rezando em silêncio:"
      },
      {
        "sp_pt": "",
        "text_pt": "Pelo mistério desta água e deste vinho"
      },
      {
        "sp_pt": "",
        "text_pt": "possamos participar da divindade do vosso Filho,"
      },
      {
        "sp_pt": "",
        "text_pt": "que se dignou assumir a nossa humanidade."
      },
      {
        "rubric_pt": "25."
      },
      {
        "rubric_pt": "Em seguida, o sacerdote recebe o cálice em suas mãos e, elevando-o um pouco sobre o altar, diz em silêncio:"
      },
      {
        "sp_pt": "",
        "text_pt": "Bendito sejais, Senhor, Deus do universo,"
      },
      {
        "sp_pt": "",
        "text_pt": "pelo vinho que recebemos de vossa bondade,"
      },
      {
        "sp_pt": "",
        "text_pt": "fruto da videira e do trabalho humano,"
      },
      {
        "sp_pt": "",
        "text_pt": "que agora vos apresentamos,"
      },
      {
        "sp_pt": "",
        "text_pt": "e que para nós se vai tornar vinho da salvação."
      },
      {
        "rubric_pt": "Coloca o cálice sobre o corporal."
      },
      {
        "rubric_pt": "Se o canto da preparação das oferendas não continuar, o sacerdote poderá recitar em voz alta as palavras acima, e o povo acrescentar a aclamação:"
      },
      {
        "sp_pt": "",
        "text_pt": "Bendito seja Deus para sempre!"
      },
      {
        "rubric_pt": "26."
      },
      {
        "rubric_pt": "Em seguida o sacerdote, profundamente inclinado, reza em silêncio:"
      },
      {
        "sp_pt": "",
        "text_pt": "De coração contrito e humilde,"
      },
      {
        "sp_pt": "",
        "text_pt": "sejamos, Senhor, acolhidos por vós;"
      },
      {
        "sp_pt": "",
        "text_pt": "e seja o nosso sacrifício de tal modo oferecido"
      },
      {
        "sp_pt": "",
        "text_pt": "que vos agrade, Senhor, nosso Deus."
      },
      {
        "rubric_pt": "27."
      },
      {
        "sp_pt": "",
        "text_pt": "E, se for oportuno, incensa as oferendas, a cruz e o altar. Depois, o diácono ou outro ministro incensa o sacerdote e o povo."
      },
      {
        "rubric_pt": "28."
      },
      {
        "rubric_pt": "Em seguida, o sacerdote, de pé ao lado do altar, lava as mãos, dizendo em silêncio:"
      },
      {
        "sp_pt": "",
        "text_pt": "Lavai-me, Senhor, de minhas faltas"
      },
      {
        "sp_pt": "",
        "text_pt": "e purificai-me do meu pecado."
      },
      {
        "rubric_pt": "29."
      },
      {
        "sp_pt": "",
        "text_pt": "Estando, depois, no meio do altar e voltado para o povo, o sacerdote estende e une as mãos e diz:"
      },
      {
        "sp_pt": "",
        "text_pt": "Orai, irmãos e irmãs,"
      },
      {
        "sp_pt": "",
        "text_pt": "para que o"
      },
      {
        "sp_pt": "",
        "text_pt": "meu e o vosso"
      },
      {
        "sp_pt": "",
        "text_pt": "sacrifício seja aceito por Deus Pai todo-poderoso."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "rubric_pt": "Ⓑ"
      },
      {
        "sp_pt": "",
        "text_pt": "Orai, irmãos e irmãs,"
      },
      {
        "sp_pt": "",
        "text_pt": "para que esta nossa família,"
      },
      {
        "sp_pt": "",
        "text_pt": "reunida em nome de Cristo,"
      },
      {
        "sp_pt": "",
        "text_pt": "possa oferecer um sacrifício"
      },
      {
        "sp_pt": "",
        "text_pt": "que seja aceito por Deus Pai todo-poderoso."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "rubric_pt": "Ⓑ"
      },
      {
        "sp_pt": "",
        "text_pt": "Orai, irmãos e irmãs,"
      },
      {
        "sp_pt": "",
        "text_pt": "para que, trazendo ao altar"
      },
      {
        "sp_pt": "",
        "text_pt": "as alegrias e fadigas de cada dia,"
      },
      {
        "sp_pt": "",
        "text_pt": "nos disponhamos a oferecer um sacrifício"
      },
      {
        "sp_pt": "",
        "text_pt": "aceito por Deus Pai todo-poderoso."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "rubric_pt": "Ⓑ"
      },
      {
        "sp_pt": "",
        "text_pt": "Orai, irmãos e irmãs,"
      },
      {
        "sp_pt": "",
        "text_pt": "para que o sacrifício da Igreja,"
      },
      {
        "sp_pt": "",
        "text_pt": "nesta pausa restauradora na caminhada rumo ao céu,"
      },
      {
        "sp_pt": "",
        "text_pt": "seja aceito por Deus Pai todo-poderoso."
      },
      {
        "rubric_pt": "O povo se levanta e responde:"
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
        "text_pt": "para nosso bem e de toda a"
      },
      {
        "sp_pt": "",
        "text_pt": "sua"
      },
      {
        "sp_pt": "",
        "text_pt": "santa Igreja."
      }
    ]
  },
  {
    "id": "3.2 prayer_offerings",
    "type": "part",
    "header": {
      "pt": "Oração sobre as oferendas"
    },
    "lines": [
      {
        "rubric_pt": "Em seguida, abrindo os braços, o sacerdote profere a oração sobre as oferendas; ao terminar, o povo aclama:"
      },
      {
        "sp_pt": "",
        "text_pt": "(Oração sobre as oferendas do dia)"
      },
      {
        "sp_pt": "Todos",
        "text_pt": "Amém."
      }
    ]
  },
  {
    "id": "3.3 eucharist",
    "type": "selectable",
    "isEucharist": true,
    "header": {
      "pt": "Oração Eucarística"
    },
    "variants": {
      "1": {
        "label": {
          "pt": "Oração Eucarística I"
        }
      },
      "2": {
        "label": {
          "pt": "Oração Eucarística II"
        }
      },
      "3": {
        "label": {
          "pt": "Oração Eucarística III"
        }
      },
      "4": {
        "label": {
          "pt": "Oração Eucarística IV"
        }
      },
      "5": {
        "label": {
          "pt": "Oração Eucarística V"
        }
      },
      "D1": {
        "label": {
          "pt": "Para diversas circunstâncias I"
        }
      },
      "D2": {
        "label": {
          "pt": "Para diversas circunstâncias II"
        }
      },
      "D3": {
        "label": {
          "pt": "Para diversas circunstâncias III"
        }
      },
      "D4": {
        "label": {
          "pt": "Para diversas circunstâncias IV"
        }
      },
      "R1": {
        "label": {
          "pt": "Sobre a reconciliação I"
        }
      },
      "R2": {
        "label": {
          "pt": "Sobre a reconciliação II"
        }
      },
      "C1": {
        "label": {
          "pt": "Para Missas com crianças I"
        }
      },
      "C2": {
        "label": {
          "pt": "Para Missas com crianças II"
        }
      },
      "C3": {
        "label": {
          "pt": "Para Missas com crianças III"
        }
      }
    },
    "common_dialogue": [],
    "songs": {},
    "sanctus": [],
    "forms": {
      "1": [
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
          "text_pt": "Demos graças ao Senhor, nosso Deus."
        },
        {
          "sp_pt": "R.",
          "text_pt": "É nosso dever e nossa salvação."
        },
        {
          "rubric_pt": "Segue-se, conforme as rubricas, o prefácio, com a conclusão:"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!"
        },
        {
          "rubric_pt": "ou"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CP",
          "text_pt": "Pai de misericórdia, a quem sobem nossos louvores, suplicantes, vos rogamos e pedimos por Jesus Cristo, vosso Filho e Senhor nosso,"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos e traça o sinal da cruz, ao mesmo tempo que sobre o pão e o cálice, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "que aceiteis e abençoeis"
        },
        {
          "rubric_pt": "✠"
        },
        {
          "sp_pt": "",
          "text_pt": "estes dons, estas oferendas, este sacrifício puro e santo,"
        },
        {
          "sp_pt": "",
          "text_pt": "de braços abertos, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "que oferecemos, antes de tudo, pela vossa Igreja santa e católica: concedei-lhe paz e proteção, unindo-a num só corpo e governando-a por toda a terra, em comunhão com vosso servo o Papa"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", o nosso Bispo"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", e todos os que guardam a fé católica que receberam dos Apóstolos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Abençoai nossa oferenda, ó Senhor!"
        },
        {
          "sp_pt": "",
          "text_pt": "Memento dos vivos"
        },
        {
          "sp_pt": "1C",
          "text_pt": "Lembrai-vos, ó Pai, dos vossos filhos e filhas"
        },
        {
          "rubric_pt": "N. N."
        },
        {
          "rubric_pt": "Une as mãos e reza por alguns momentos em silêncio por aqueles que quer recordar. De braços abertos, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "e de todos os que circundam este altar, dos quais conheceis a fé e a dedicação ao vosso serviço."
        },
        {
          "rubric_pt": "★"
        },
        {
          "sp_pt": "",
          "text_pt": "Na Missa com Batismo"
        },
        {
          "sp_pt": "1C",
          "text_pt": "Lembrai-vos, ó Pai, dos vossos filhos e filhas"
        },
        {
          "rubric_pt": "N. N."
        },
        {
          "sp_pt": "",
          "text_pt": "aqui se menciona os nomes dos padrinhos e das madrinhas"
        },
        {
          "sp_pt": "",
          "text_pt": "que conduziram os vossos eleitos à santa graça do Batismo, e de todos que circundam este altar, dos quais conheceis a fé e a dedicação ao vosso serviço."
        },
        {
          "rubric_pt": "★"
        },
        {
          "sp_pt": "",
          "text_pt": "Por eles nós vos oferecemos e também eles vos oferecem este sacrifício de louvor por si e por todos os seus, e elevam a vós as suas preces, Deus eterno, vivo e verdadeiro, para alcançar o perdão de suas faltas, a segurança em suas vidas e a salvação que esperam."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Lembrai-vos, ó Pai, dos vossos filhos!"
        },
        {
          "sp_pt": "",
          "text_pt": "\"Infra actionem\""
        },
        {
          "sp_pt": "2C",
          "text_pt": "Em comunhão com toda a Igreja, celebramos em primeiro lugar a memória da Mãe de nosso Deus e Senhor Jesus Cristo, a gloriosa sempre Virgem Maria,"
        },
        {
          "rubric_pt": "★"
        },
        {
          "rubric_pt": "COMUNICANTES PRÓPRIOS"
        },
        {
          "rubric_pt": "Ⓑ Para os Domingos"
        },
        {
          "sp_pt": "",
          "text_pt": "Em comunhão com toda a Igreja, celebramos o glorioso dia em que o Senhor Jesus venceu a morte e nos tornou participantes de sua vida imortal. Veneramos em primeiro lugar a memória da Mãe de nosso Deus e Senhor Jesus Cristo, a gloriosa sempre Virgem Maria,"
        },
        {
          "rubric_pt": "★"
        },
        {
          "sp_pt": "",
          "text_pt": "No Natal do Senhor e durante a Oitava"
        },
        {
          "sp_pt": "",
          "text_pt": "Em comunhão com toda a Igreja, celebramos"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "a noite santíssima"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "o dia santíssimo em que Maria, intacta em sua virgindade, deu à luz o Salvador do mundo. Veneramos em primeiro lugar a memória da mesma Mãe de nosso Deus e Senhor Jesus Cristo, a gloriosa sempre Virgem Maria,"
        },
        {
          "rubric_pt": "★"
        },
        {
          "sp_pt": "",
          "text_pt": "Na Epifania do Senhor"
        },
        {
          "sp_pt": "",
          "text_pt": "Em comunhão com toda a Igreja, celebramos o dia santíssimo em que vosso Filho unigênito, eterno convosco na glória, se manifestou visivelmente em nossa carne. Veneramos em primeiro lugar a memória da Mãe de nosso Deus e Senhor Jesus Cristo, a gloriosa sempre Virgem Maria,"
        },
        {
          "rubric_pt": "★"
        },
        {
          "sp_pt": "",
          "text_pt": "Da Vigília Pascal até o 2° Domingo da Páscoa"
        },
        {
          "sp_pt": "",
          "text_pt": "Em comunhão com toda a Igreja, celebramos"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "a noite santíssima"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "o dia santíssimo da Ressurreição de nosso Senhor Jesus Cristo segunda a carne. Veneramos em primeiro lugar a memória da Mãe de nosso Deus e Senhor Jesus Cristo, a gloriosa sempre Virgem Maria,"
        },
        {
          "rubric_pt": "★"
        },
        {
          "sp_pt": "",
          "text_pt": "Na Ascensão do Senhor"
        },
        {
          "sp_pt": "",
          "text_pt": "Em comunhão com toda a Igreja, celebramos o dia santíssimo em que nosso Senhor, vosso Filho unigênito, elevou à vossa direita na glória a nossa frágil natureza humana."
        },
        {
          "sp_pt": "",
          "text_pt": "Veneramos em primeiro lugar a memória da Mãe de nosso Deus e Senhor Jesus Cristo, a gloriosa sempre Virgem Maria,"
        },
        {
          "rubric_pt": "★"
        },
        {
          "sp_pt": "",
          "text_pt": "Em Pentecostes"
        },
        {
          "sp_pt": "",
          "text_pt": "Em comunhão com toda a Igreja, celebramos o dia santíssimo de Pentecostes em que o Espírito Santo, em línguas de fogo, se manifestou aos Apóstolos. Veneramos em primeiro lugar a memória da Mãe de nosso Deus e Senhor Jesus Cristo, a gloriosa sempre Virgem Maria,"
        },
        {
          "rubric_pt": "★"
        },
        {
          "sp_pt": "",
          "text_pt": "a de seu esposo São José, e também a dos Santos Apóstolos e Mártires: Pedro e Paulo, André,"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "Tiago e João, Tomé, Tiago e Filipe, Bartolomeu e Mateus, Simão e Tadeu, Lino, Cleto, Clemente, Sisto, Cornélio e Cipriano, Lourenço e Crisógono, João e Paulo, Cosme e Damião"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "e a de todos os vossos Santos. Por seus méritos e preces concedei-nos sem cessar a vossa proteção."
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "Por Cristo, nosso Senhor. Amém."
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Em comunhão com vossos Santos vos louvamos!"
        },
        {
          "rubric_pt": "O sacerdote, com os braços abertos, continua:"
        },
        {
          "sp_pt": "CP",
          "text_pt": "Aceitai, ó Pai, com bondade, a oblação dos vossos servos e de toda a vossa família; dai-nos sempre a vossa paz, livrai-nos da condenação eterna e acolhei-nos entre os vossos eleitos."
        },
        {
          "rubric_pt": "Une as mãos."
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "Por Cristo, nosso Senhor. Amém."
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "Da Vigília Pascal até o 2° Domingo da Páscoa"
        },
        {
          "sp_pt": "",
          "text_pt": "Aceitai, ó Pai, com bondade, a oblação dos vossos servos e de toda a vossa família; nós a oferecemos também por aqueles que vos dignastes regenerar pela água e pelo Espírito Santo, concedendo-lhes a remissão de todos os pecados."
        },
        {
          "sp_pt": "",
          "text_pt": "Dai aos nossos dias a vossa paz, livrai-nos da condenação eterna e acolhei-nos entre os vossos eleitos."
        },
        {
          "rubric_pt": "Une as mãos."
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "Por Cristo, nosso Senhor. Amém."
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "Na Missa com Batismo"
        },
        {
          "sp_pt": "",
          "text_pt": "Aceitai, ó Pai, com bondade, a oblação dos vossos servos e de toda a vossa família; nós a oferecemos também por aqueles que vos dignastes regenerar pela água e pelo Espírito Santo, concedendo-lhes a remissão de todos os pecados, para que vivam em nosso Senhor Jesus Cristo e tenham seus nomes inscritos no livro da vida."
        },
        {
          "rubric_pt": "Une as mãos."
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "Por Cristo, nosso Senhor. Amém."
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "Na Missa com Crisma"
        },
        {
          "sp_pt": "",
          "text_pt": "Aceitai, ó Pai, com bondade, a oblação dos vossos servos e de toda a vossa família; nós a oferecemos também por aqueles que, regenerados pelo Batismo, confirmastes com o dom do Espírito Santo."
        },
        {
          "sp_pt": "",
          "text_pt": "Nós vos pedimos, Senhor, acolhei benigno a nossa oferta e dignai-vos guardar neles a vossa graça."
        },
        {
          "rubric_pt": "Une as mãos."
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "Por Cristo, nosso Senhor. Amém."
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "rubric_pt": "Ⓑ Na Missa com Primeira Comunhão Eucarística"
        },
        {
          "sp_pt": "",
          "text_pt": "Aceitai, ó Pai, com bondade, a oblação dos vossos servos e de toda a vossa família; nós a oferecemos por vossos filhos e filhas que hoje reunis pela primeira vez à vossa mesa, na participação do Pão da vida e do Cálice da salvação; concedei-lhes crescer sempre em vossa amizade e na comunhão com vossa Igreja."
        },
        {
          "rubric_pt": "Une as mãos."
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "Por Cristo, nosso Senhor. Amém."
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "rubric_pt": "Ⓑ Na Missa com Unção dos Enfermos"
        },
        {
          "sp_pt": "",
          "text_pt": "Aceitai, ó Pai, com bondade, a oblação dos vossos servos e de toda a vossa família; nós a oferecemos também pelos nossos irmãos enfermos que, mediante a santa unção, unem os seus sofrimentos à Páscoa de Cristo; dai-lhes consolação, saúde e paz."
        },
        {
          "rubric_pt": "Une as mãos."
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "Por Cristo, nosso Senhor. Amém."
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "Na Missa com Matrimônio"
        },
        {
          "sp_pt": "",
          "text_pt": "Aceitai, ó Pai, com bondade, a oblação de vossos servos, como também dos novos esposos"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": "e"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", e de toda a vossa família que por eles intercede. E, como lhes destes chegar ao dia do casamento, concedei-lhes também vida longa e feliz"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "e a alegria dos filhos que desejam"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "."
        },
        {
          "rubric_pt": "Une as mãos."
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "Por Cristo, nosso Senhor. Amém."
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "Estendendo as mãos sobre as oferendas, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Dignai-vos, ó Pai, aceitar, abençoar e santificar estas oferendas; recebei-as como sacrifício espiritual perfeito, a fim de que se tornem para nós o Corpo e o Sangue de vosso amado Filho, nosso Senhor Jesus Cristo."
        },
        {
          "rubric_pt": "Une as mãos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Enviai o vosso Espírito Santo!"
        },
        {
          "sp_pt": "",
          "text_pt": "O relato da instituição da Eucaristia seja proferido de modo claro e audível, como requer a sua natureza."
        },
        {
          "sp_pt": "",
          "text_pt": "Na véspera de sua paixão,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "ele tomou o pão em suas santas e veneráveis mãos,"
        },
        {
          "sp_pt": "",
          "text_pt": "eleva os olhos,"
        },
        {
          "sp_pt": "",
          "text_pt": "elevou os olhos ao céu, a vós, ó Pai todo-poderoso, pronunciou a bênção de ação de graças, partiu o pão e o deu a seus discípulos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "rubric_pt": "TOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS."
        },
        {
          "rubric_pt": "Mostra ao povo a hóstia consagrada, coloca na patena e genuflete em adoração."
        },
        {
          "rubric_pt": "Então prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Do mesmo modo, no fim da Ceia,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "ele tomou este precioso cálice em suas santas e veneráveis mãos, pronunciou novamente a bênção de ação de graças e o deu a seus discípulos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "sp_pt": "",
          "text_pt": "TOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM."
        },
        {
          "rubric_pt": "Mostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração."
        },
        {
          "rubric_pt": "Em seguida, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Anunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!"
        },
        {
          "rubric_pt": "Ou"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé e do amor!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Todas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!"
        },
        {
          "rubric_pt": "Ou"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé para a salvação do mundo!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Salvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição."
        },
        {
          "rubric_pt": "ou"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Celebrando, pois, a memória da bem-aventurada paixão do vosso Filho, da sua ressurreição dentre os mortos e gloriosa ascensão aos céus, nós, vossos servos, e também vosso povo santo, vos oferecemos, ó Pai, dentre os bens que nos destes, o sacrifício puro, santo e imaculado, Pão santo da vida eterna e Cálice da perpétua salvação."
        },
        {
          "sp_pt": "",
          "text_pt": "Recebei, ó Pai, com olhar benigno, esta oferta, como recebestes os dons do justo Abel, o sacrifício de nosso patriarca Abraão e a oblação pura e santa do sumo sacerdote Melquisedeque."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Aceitai, ó Senhor, a nossa oferta!"
        },
        {
          "rubric_pt": "Une as mãos e, inclinando-se, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Suplicantes, vos pedimos, ó Deus onipotente, que esta nossa oferenda seja levada à vossa presença, no altar do céu, pelas mãos do vosso santo Anjo, para que todos nós, participando deste altar pela comunhão do santíssimo Corpo e Sangue do vosso Filho,"
        },
        {
          "sp_pt": "",
          "text_pt": "ergue-se e faz sobre si o sinal da cruz, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "sejamos repletos de todas as graças e bênçãos do céu."
        },
        {
          "rubric_pt": "Une as mãos."
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "Por Cristo, nosso Senhor. Amém."
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "O Espírito nos una num só corpo!"
        },
        {
          "sp_pt": "",
          "text_pt": "Memento dos mortos."
        },
        {
          "sp_pt": "",
          "text_pt": "De braços abertos, diz:"
        },
        {
          "sp_pt": "3C",
          "text_pt": "Lembrai-vos, ó Pai, dos vossos filhos e filhas"
        },
        {
          "rubric_pt": "N. N."
        },
        {
          "sp_pt": "",
          "text_pt": "que nos precederam com o sinal da fé e dormem o sono da paz."
        },
        {
          "rubric_pt": "Une as mãos e, em silêncio, reza brevemente pelos defuntos que deseja recordar. De braços abertos, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "A eles, e a todos os que descansam no Cristo, concedei o repouso, a luz e a paz."
        },
        {
          "rubric_pt": "Une as mãos."
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "Por Cristo, nosso Senhor. Amém."
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Concedei-lhes, ó Senhor, a luz eterna!"
        },
        {
          "sp_pt": "",
          "text_pt": "Bate no peito, dizendo:"
        },
        {
          "rubric_pt": "4C"
        },
        {
          "sp_pt": "",
          "text_pt": "E a todos nós pecadores,"
        },
        {
          "sp_pt": "",
          "text_pt": "e, de braços abertos, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "que esperamos na vossa infinita misericórdia, concedei, não por nossos méritos, mas por vossa bondade, o convívio dos Apóstolos e Mártires: João Batista e Estêvão, Matias e Barnabé,"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "Inácio, Alexandre, Marcelino e Pedro, Felicidade e Perpétua, Águeda e Luzia, Inês, Cecília, Anastácia"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "e de todos os vossos Santos."
        },
        {
          "rubric_pt": "Une as mãos:"
        },
        {
          "sp_pt": "",
          "text_pt": "Por Cristo, nosso Senhor."
        },
        {
          "sp_pt": "",
          "text_pt": "E prossegue:"
        },
        {
          "sp_pt": "CP",
          "text_pt": "Por ele não cessais de criar, santificar, vivificar, abençoar estes bens e distribuí-los entre nós."
        },
        {
          "rubric_pt": "Ergue a patena com a hóstia e o cálice, dizendo:"
        },
        {
          "sp_pt": "CP ou CC",
          "text_pt": "Por Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Amém."
        },
        {
          "rubric_pt": "Segue-se o Rito da Comunhão."
        }
      ],
      "2": [
        {
          "sp_pt": "",
          "text_pt": "Embora tenha prefácio próprio, esta Oração Eucarística pode ser usada também com outros prefácios, sobretudo aqueles que de maneira sucinta apresentem o mistério da salvação, por exemplo, os prefácios comuns."
        },
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
          "text_pt": "Demos graças ao Senhor, nosso Deus."
        },
        {
          "sp_pt": "R.",
          "text_pt": "É nosso dever e nossa salvação."
        },
        {
          "sp_pt": "",
          "text_pt": "Na verdade, é digno e justo, é nosso dever e salvação dar-vos graças sempre e em todo lugar, Senhor, Pai santo, por vosso amado Filho, Jesus Cristo."
        },
        {
          "sp_pt": "",
          "text_pt": "Ele é a vossa Palavra, pela qual tudo criastes."
        },
        {
          "sp_pt": "",
          "text_pt": "Ele é o nosso Salvador e Redentor, que se encarnou pelo Espírito Santo e nasceu da Virgem Maria."
        },
        {
          "sp_pt": "",
          "text_pt": "Ele, para cumprir a vossa vontade e adquirir para vós um povo santo, estendeu os braços na hora da sua paixão, a fim de vencer a morte e manifestar a ressurreição."
        },
        {
          "sp_pt": "",
          "text_pt": "Por isso, com os Anjos e todos os Santos, proclamamos vossa glória, cantando"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "dizendo"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "a uma só voz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CP",
          "text_pt": "Na verdade, ó Pai, vós sois Santo, fonte de toda santidade."
        },
        {
          "rubric_pt": "Une as mãos e, estendendo-as sobre as oferendas, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Santificai, pois, estes dons, derramando sobre eles o vosso Espírito,"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos e traça o sinal da cruz, ao mesmo tempo sobre o pão e o cálice, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "a fim de que se tornem para nós o Corpo e"
        },
        {
          "rubric_pt": "✠"
        },
        {
          "sp_pt": "",
          "text_pt": "o Sangue de nosso Senhor Jesus Cristo."
        },
        {
          "rubric_pt": "Une as mãos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Enviai o vosso Espírito Santo!"
        },
        {
          "sp_pt": "",
          "text_pt": "O relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza."
        },
        {
          "sp_pt": "",
          "text_pt": "Estando para ser entregue e abraçando livremente a paixão,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Jesus tomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "rubric_pt": "TOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS."
        },
        {
          "rubric_pt": "Mostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração."
        },
        {
          "rubric_pt": "Então prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Do mesmo modo, no fim da Ceia,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "ele tomou o cálice em suas mãos e, dando graças novamente, o entregou a seus discípulos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "sp_pt": "",
          "text_pt": "TOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM."
        },
        {
          "rubric_pt": "Mostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração."
        },
        {
          "rubric_pt": "Em seguida, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Anunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!"
        },
        {
          "rubric_pt": "Ou"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé e do amor!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Todas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!"
        },
        {
          "rubric_pt": "Ou"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé para a salvação do mundo!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Salvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição."
        },
        {
          "rubric_pt": "ou"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Celebrando, pois, o memorial da morte e ressurreição do vosso Filho, nós vos oferecemos, ó Pai, o Pão da vida e o Cálice da salvação; e vos agradecemos porque nos tornastes dignos de estar aqui na vossa presença e vos servir."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Aceitai, ó Senhor, a nossa oferta!"
        },
        {
          "sp_pt": "",
          "text_pt": "Suplicantes, vos pedimos que, participando do Corpo e Sangue de Cristo, sejamos reunidos pelo Espírito Santo num só corpo."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "O Espírito nos una num só corpo!"
        },
        {
          "sp_pt": "1C",
          "text_pt": "Lembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro;"
        },
        {
          "rubric_pt": "★"
        },
        {
          "sp_pt": "",
          "text_pt": "que ela cresça na caridade, em comunhão com o Papa"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", com o nosso Bispo"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", os bispos do mundo inteiro, os presbíteros, os diáconos e todos os ministros do vosso povo."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Lembrai-vos, ó Pai, da vossa Igreja!"
        },
        {
          "rubric_pt": "Ⓑ Domingos (exceto quando houver outro texto próprio, como nos casos abaixo):"
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro; e aqui convocada no dia em que Cristo venceu a morte e nos fez participantes de sua vida imortal;"
        },
        {
          "rubric_pt": "★"
        },
        {
          "rubric_pt": "Ⓑ Natal do Senhor e Oitava:"
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro; e aqui convocada na noite santíssima"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "no dia santíssimo"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "em que a Virgem Maria deu ao mundo o Salvador;"
        },
        {
          "rubric_pt": "★"
        },
        {
          "rubric_pt": "Ⓑ Epifania do Senhor:"
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro; e aqui convocada no dia santíssimo no qual o vosso Filho Unigênito, eterno convosco na glória, se manifestou na nossa natureza humana;"
        },
        {
          "rubric_pt": "★"
        },
        {
          "rubric_pt": "Ⓑ Quinta-feira Santa, na Missa Vespertina da Ceia do Senhor:"
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro; e aqui convocada no dia santíssimo no qual Jesus Cristo, nosso Senhor, foi entregue à morte por nós;"
        },
        {
          "rubric_pt": "★"
        },
        {
          "rubric_pt": "Ⓑ Da Vigília Pascal até o Segundo Domingo da Páscoa:"
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro; e aqui convocada na noite santíssima"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "no dia santíssimo"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "da ressurreição de Cristo Senhor dentre os mortos;"
        },
        {
          "rubric_pt": "★"
        },
        {
          "rubric_pt": "Ⓑ Ascensão do Senhor:"
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro; e aqui convocada no dia glorioso da Ascensão no qual Cristo colocou à direita da vossa glória a nossa frágil natureza humana;"
        },
        {
          "rubric_pt": "★"
        },
        {
          "rubric_pt": "Ⓑ Pentecostes:"
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro; e aqui convocada no dia santíssimo no qual, pela efusão do vosso Espírito, foi manifestada ao mundo como sacramento de unidade para todos os povos;"
        },
        {
          "rubric_pt": "★"
        },
        {
          "sp_pt": "",
          "text_pt": "Na Missa com Batismo (e Crisma)"
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-vos também, ó Pai, dos que hoje pelo Batismo"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "e pela Crisma"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "fizestes membros da vossa família, para que sigam o Cristo, vosso Filho, com todo o coração e grande entusiasmo."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Lembrai-vos, ó Pai, dos vossos filhos!"
        },
        {
          "sp_pt": "",
          "text_pt": "Na Missa com Crisma"
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-vos também, ó Pai, dos vossos filhos e filhas que hoje vos dignastes confirmar com o dom do Espírito Santo, e conservai-os sempre em vossa graça."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Lembrai-vos, ó Pai, dos vossos filhos!"
        },
        {
          "rubric_pt": "Ⓑ Na Missa com Primeira Comunhão Eucarística"
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-vos também, ó Pai, dos vossos filhos e filhas convidados pela primeira vez à vossa mesa, para participar do Pão da vida e do Cálice da salvação; concedei-lhes crescer sempre em vossa amizade e na comunhão com vossa Igreja."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Lembrai-vos, ó Pai, dos vossos filhos!"
        },
        {
          "rubric_pt": "Ⓑ Na Missa com Unção dos Enfermos"
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-vos também, ó Pai, destes vossos filhos e filhas que mediante a santa unção, unem os seus sofrimentos à Páscoa de Cristo; dai-lhes consolação, saúde e paz."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Lembrai-vos, ó Pai, dos vossos filhos!"
        },
        {
          "sp_pt": "",
          "text_pt": "Na Missa com Matrimônio"
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-vos também, ó Pai, destes vossos filhos"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": "e"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ". Como lhes concedestes a alegria do sacramento do Matrimônio, possam, por vossa graça, viver no amor recíproco e na paz."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Lembrai-vos, ó Pai, dos vossos filhos!"
        },
        {
          "sp_pt": "",
          "text_pt": "Nas Missas pelos fiéis defuntos"
        },
        {
          "sp_pt": "2C",
          "text_pt": "Lembrai-vos do vosso filho"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "da vossa filha"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", que"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "hoje"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "chamastes deste mundo à vossa presença. Tendo sido sepultado"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "a"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "com Cristo em sua morte, no Batismo, participe igualmente da sua ressurreição."
        },
        {
          "sp_pt": "2C",
          "text_pt": "Lembrai-vos também, na vossa misericórdia, dos"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "outros"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "nossos irmãos e irmãs que adormeceram na esperança da ressurreição e de todos os que partiram desta vida; acolhei-os junto a vós na luz da vossa face."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Concedei-lhes, ó Senhor, a luz eterna!"
        },
        {
          "sp_pt": "3C",
          "text_pt": "Enfim, nós vos pedimos, tende piedade de todos nós e dai-nos participar da vida eterna, com a Virgem Maria, Mãe de Deus, São José, seu esposo, os Apóstolos,"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "São"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ":"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo do dia ou padroeiro)"
        },
        {
          "sp_pt": "",
          "text_pt": "e todos os Santos que neste mundo viveram na vossa amizade, a fim de vos louvarmos e glorificarmos"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos"
        },
        {
          "sp_pt": "",
          "text_pt": "por Jesus Cristo, vosso Filho."
        },
        {
          "rubric_pt": "Ergue a patena com a hóstia e o cálice, dizendo:"
        },
        {
          "sp_pt": "CP ou CC",
          "text_pt": "Por Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Amém."
        },
        {
          "rubric_pt": "Segue-se o Rito da Comunhão."
        }
      ],
      "3": [
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
          "text_pt": "Demos graças ao Senhor, nosso Deus."
        },
        {
          "sp_pt": "R.",
          "text_pt": "É nosso dever e nossa salvação."
        },
        {
          "rubric_pt": "Segue-se conforme as rubricas, o prefácio, com a conclusão:"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CP",
          "text_pt": "Na verdade, vós sois Santo, ó Deus do universo, e tudo o que criastes proclama o vosso louvor, porque, por Jesus Cristo, vosso Filho e Senhor nosso, e pela força do Espírito Santo, dais vida e santidade a todas as coisas e não cessais de reunir para vós um povo que vos ofereça em toda parte, do nascer ao pôr do sol, um sacrifício perfeito."
        },
        {
          "rubric_pt": "Une as mãos e, estendendo-as sobre as oferendas, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Por isso, ó Pai, nós vos suplicamos: santificai pelo Espírito Santo as oferendas que vos apresentamos para serem consagradas"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos e traça o sinal da cruz, ao mesmo tempo sobre o pão e o cálice, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "a fim de que se tornem o Corpo e"
        },
        {
          "rubric_pt": "✠"
        },
        {
          "sp_pt": "",
          "text_pt": "o Sangue de vosso Filho, nosso Senhor Jesus Cristo,"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos"
        },
        {
          "sp_pt": "",
          "text_pt": "que nos mandou celebrar estes mistérios."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Enviai o vosso Espírito Santo!"
        },
        {
          "sp_pt": "",
          "text_pt": "O relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza."
        },
        {
          "sp_pt": "",
          "text_pt": "Na noite em que ia ser entregue,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Jesus tomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo: TOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS."
        },
        {
          "rubric_pt": "Mostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração."
        },
        {
          "rubric_pt": "Então prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Do mesmo modo, no fim da Ceia,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "ele tomou o cálice em suas mãos, pronunciou a bênção de ação de graças, e o deu a seus discípulos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "sp_pt": "",
          "text_pt": "TOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM."
        },
        {
          "rubric_pt": "Mostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração."
        },
        {
          "rubric_pt": "Em seguida, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Anunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!"
        },
        {
          "rubric_pt": "Ou"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé e do amor!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Todas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!"
        },
        {
          "rubric_pt": "Ou"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé para a salvação do mundo!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Salvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição."
        },
        {
          "rubric_pt": "ou"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Celebrando agora, ó Pai, o memorial da paixão redentora do vosso Filho, da sua gloriosa ressurreição e ascensão ao céu, e enquanto esperamos sua nova vinda, nós vos oferecemos em ação de graças este sacrifício vivo e santo."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Aceitai, ó Senhor, a nossa oferta!"
        },
        {
          "sp_pt": "",
          "text_pt": "Olhai com bondade a oblação da vossa Igreja e reconhecei nela o sacrifício que nos reconciliou convosco; concedei que, alimentando-nos com o Corpo e o Sangue do vosso Filho, repletos do Espírito Santo, nos tornemos em Cristo um só corpo e um só espírito."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "O Espírito nos una num só corpo!"
        },
        {
          "sp_pt": "1C",
          "text_pt": "Que o mesmo Espírito faça de nós uma eterna oferenda para alcançarmos a herança com os vossos eleitos: a santíssima Virgem Maria, Mãe de Deus, São José, seu esposo, os vossos santos Apóstolos e gloriosos Mártires,"
        },
        {
          "sp_pt": "",
          "text_pt": "(Santo do dia ou padroeiro)"
        },
        {
          "sp_pt": "",
          "text_pt": "e todos os Santos, que não cessam de interceder por nós na vossa presença."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Fazei de nós uma perfeita oferenda!"
        },
        {
          "sp_pt": "2C",
          "text_pt": "Nós vos suplicamos, Senhor, que este sacrifício da nossa reconciliação estenda a paz e a salvação ao mundo inteiro. Confirmai na fé e na caridade a vossa Igreja que caminha neste mundo com o vosso servo o Papa"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": "e o nosso Bispo"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", com os bispos do mundo inteiro, os presbíteros e diáconos, os outros ministros e o povo por vós redimido."
        },
        {
          "rubric_pt": "★"
        },
        {
          "sp_pt": "",
          "text_pt": "Atendei propício às preces desta família, que reunistes em vossa presença. Reconduzi a vós, Pai de misericórdia, todos os vossos filhos e filhas dispersos pelo mundo inteiro."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Lembrai-vos, ó Pai, da vossa Igreja!"
        },
        {
          "sp_pt": "",
          "text_pt": "Na Missa com Batismo (e Crisma)"
        },
        {
          "rubric_pt": "★"
        },
        {
          "sp_pt": "",
          "text_pt": "Atendei propício às preces desta família, que reunistes em vossa presença. Confirmai em seu santo propósito os vossos filhos e filhas, que hoje fizestes membros do vosso povo pela água do Batismo"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "e pelo dom do Espírito Santo"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "; concedei-lhes progredir sempre na vida nova. Reconduzi a vós, Pai de misericórdia, todos os vossos filhos e filhas dispersos pelo mundo inteiro."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Lembrai-vos, ó Pai, da vossa Igreja!"
        },
        {
          "sp_pt": "",
          "text_pt": "Na Missa com Crisma"
        },
        {
          "rubric_pt": "★"
        },
        {
          "sp_pt": "",
          "text_pt": "Atendei propício às preces desta família, que reunistes em vossa presença."
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-vos também dos vossos filhos e filhas que, renascidos pelo Batismo, vos dignastes confirmar com o Espírito Santo, vosso grande dom; guardai-os sempre em vossa graça."
        },
        {
          "sp_pt": "",
          "text_pt": "Reconduzi a vós, Pai de misericórdia, todos os vossos filhos e filhas dispersos pelo mundo inteiro."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Lembrai-vos, ó Pai, da vossa Igreja!"
        },
        {
          "rubric_pt": "Ⓑ Na Missa com Primeira Comunhão Eucarística"
        },
        {
          "rubric_pt": "★"
        },
        {
          "sp_pt": "",
          "text_pt": "Atendei propício às preces desta família, que reunistes em vossa presença."
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-vos também dos vossos filhos e filhas que hoje reunis pela primeira vez à vossa mesa, na participação do Pão da vida e do Cálice da salvação; concedei-lhes crescer sempre em vossa amizade e na comunhão da vossa Igreja."
        },
        {
          "sp_pt": "",
          "text_pt": "Reconduzi a vós, Pai de misericórdia, todos os vossos filhos e filhas dispersos pelo mundo inteiro."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Lembrai-vos, ó Pai, da vossa Igreja!"
        },
        {
          "sp_pt": "",
          "text_pt": "Na Missa com Matrimônio"
        },
        {
          "rubric_pt": "★"
        },
        {
          "sp_pt": "",
          "text_pt": "Atendei propício às preces desta família, que reunistes em vossa presença. Fortalecei na graça do Matrimônio estes vossos filhos"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": "e"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", que fizestes chegar com alegria ao dia das núpcias; firmes no vosso amor, conservem por toda a vida tão santa aliança. Reconduzi a vós, Pai de misericórdia, todos os vossos filhos e filhas dispersos pelo mundo inteiro."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Lembrai-vos, ó Pai, da vossa Igreja!"
        },
        {
          "sp_pt": "3C",
          "text_pt": "Acolhei com bondade no vosso reino os nossos irmãos e irmãs que partiram desta vida e todos os que morreram na vossa amizade. Unidos a eles, esperamos também nós saciar-nos eternamente da vossa glória,"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos"
        },
        {
          "sp_pt": "",
          "text_pt": "por Cristo, Senhor nosso. Por ele dais ao mundo todo bem e toda graça."
        },
        {
          "rubric_pt": "Ergue a patena com a hóstia e o cálice, dizendo:"
        },
        {
          "sp_pt": "CP ou CC",
          "text_pt": "Por Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Amém."
        },
        {
          "sp_pt": "",
          "text_pt": "Nas Missas pelos fiéis defuntos, pode-se dizer:"
        },
        {
          "sp_pt": "3C",
          "text_pt": "Lembrai-vos, ó Pai, do"
        },
        {
          "sp_pt": "",
          "text_pt": "(s)"
        },
        {
          "sp_pt": "",
          "text_pt": "vosso"
        },
        {
          "sp_pt": "",
          "text_pt": "(s)"
        },
        {
          "sp_pt": "",
          "text_pt": "filho"
        },
        {
          "sp_pt": "",
          "text_pt": "(s)"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "da"
        },
        {
          "sp_pt": "",
          "text_pt": "(s)"
        },
        {
          "sp_pt": "",
          "text_pt": "vossa"
        },
        {
          "sp_pt": "",
          "text_pt": "(s)"
        },
        {
          "sp_pt": "",
          "text_pt": "filha"
        },
        {
          "sp_pt": "",
          "text_pt": "(s)) N."
        },
        {
          "sp_pt": "",
          "text_pt": ", que"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "hoje"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "chamastes deste mundo à vossa presença."
        },
        {
          "sp_pt": "",
          "text_pt": "Concedei-lhe que, tendo participado da morte de Cristo pelo Batismo, participe igualmente da sua ressurreição, no dia em que ele ressuscitar os mortos, tornando o nosso pobre corpo semelhante ao seu corpo glorioso."
        },
        {
          "sp_pt": "",
          "text_pt": "Acolhei com bondade no vosso reino os outros irmãos e irmãs que partiram desta vida e todos os que morreram na vossa amizade."
        },
        {
          "sp_pt": "",
          "text_pt": "Unidos a eles, esperamos também nós saciar-nos eternamente da vossa glória, quando enxugardes toda lágrima dos nossos olhos. Então, contemplando-vos como sois, seremos para sempre semelhantes a vós e cantaremos sem cessar os vossos louvores"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos"
        },
        {
          "sp_pt": "",
          "text_pt": "por Cristo, Senhor nosso. Por ele dais ao mundo todo bem e toda graça."
        },
        {
          "rubric_pt": "Ergue a patena com a hóstia e o cálice, dizendo:"
        },
        {
          "sp_pt": "CP ou CC",
          "text_pt": "Por Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Amém."
        },
        {
          "rubric_pt": "Segue-se o Rito da Comunhão."
        }
      ],
      "4": [
        {
          "sp_pt": "",
          "text_pt": "Este prefácio não pode ser substituído por outro, porque introduz a Oração Eucarística cuja estrutura apresenta um resumo da História da Salvação."
        },
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
          "text_pt": "Demos graças ao Senhor, nosso Deus."
        },
        {
          "sp_pt": "R.",
          "text_pt": "É nosso dever e nossa salvação."
        },
        {
          "sp_pt": "",
          "text_pt": "Na verdade, ó Pai, é nosso dever dar-vos graças, é nossa salvação dar-vos glória. Só vós sois o Deus vivo e verdadeiro que existis antes de todo o tempo e permaneceis para sempre, habitando em luz inacessível."
        },
        {
          "sp_pt": "",
          "text_pt": "Mas, porque sois o Deus de bondade e a fonte da vida, fizestes todas as coisas para cobrir de bênçãos as vossas criaturas e a muitos alegrar com o esplendor da vossa luz."
        },
        {
          "sp_pt": "",
          "text_pt": "Eis, pois, diante de vós os inumeráveis coros dos Anjos que dia e noite vos servem e, contemplando a glória da vossa face, vos louvam sem cessar. Com eles também nós e, por nossa voz, tudo o que criastes celebramos vosso Nome e, exultantes de alegria, cantamos"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "dizemos"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "a uma só voz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!"
        },
        {
          "rubric_pt": "ou"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CP",
          "text_pt": "Nós proclamamos vossa grandeza, Pai santo, a sabedoria e o amor com que fizestes todas as coisas."
        },
        {
          "sp_pt": "",
          "text_pt": "Criastes o ser humano à vossa imagem e lhe confiastes todo o universo, para que, servindo somente a vós, seu Criador, cuidasse de toda criatura."
        },
        {
          "sp_pt": "",
          "text_pt": "E quando pela desobediência perdeu a vossa amizade, não o abandonastes ao poder da morte."
        },
        {
          "sp_pt": "",
          "text_pt": "A todos, porém, socorrestes com misericórdia, para que, ao procurar-vos, vos encontrassem."
        },
        {
          "sp_pt": "",
          "text_pt": "Muitas vezes oferecestes aliança à família humana e a instruístes pelos profetas na esperança da salvação."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "A todos socorrestes com bondade!"
        },
        {
          "sp_pt": "",
          "text_pt": "E de tal modo, Pai santo, amastes o mundo que, chegada a plenitude dos tempos, nos enviastes vosso próprio Filho para ser o nosso Salvador."
        },
        {
          "sp_pt": "",
          "text_pt": "Encarnado pelo poder do Espírito Santo e nascido da Virgem Maria, Jesus viveu em tudo a condição humana, menos o pecado; anunciou aos pobres a salvação, aos oprimidos, a liberdade, aos tristes, a alegria."
        },
        {
          "sp_pt": "",
          "text_pt": "Para cumprir o vosso plano de amor, entregou-se à morte e, ressuscitando, destruiu a morte e renovou a vida."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Por amor nos enviastes vosso Filho!"
        },
        {
          "sp_pt": "",
          "text_pt": "E, a fim de não mais vivermos para nós, mas para ele, que por nós morreu e ressuscitou, enviou de vós, ó Pai, como primeiro dom aos vossos fiéis, o Espírito Santo, que continua sua obra no mundo para levar à plenitude toda a santificação."
        },
        {
          "rubric_pt": "Une as mãos e, estendendo-as sobre as oferendas, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Por isso, nós vos pedimos, ó Pai, que o mesmo Espírito Santo santifique estas oferendas,"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos e traça o sinal da cruz, ao mesmo tempo sobre o pão e o cálice, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "a fim de que se tornem o Corpo e"
        },
        {
          "rubric_pt": "✠"
        },
        {
          "sp_pt": "",
          "text_pt": "o Sangue de Jesus Cristo, vosso Filho e Senhor nosso,"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos"
        },
        {
          "sp_pt": "",
          "text_pt": "para celebrarmos este grande mistério que ele nos deixou em sinal da eterna aliança."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Enviai o vosso Espírito Santo!"
        },
        {
          "sp_pt": "",
          "text_pt": "O relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza."
        },
        {
          "rubric_pt": "Quando, pois, chegou a hora em que por vós, ó Pai, ia ser glorificado, tendo amado os seus que estavam no mundo, amou-os até o fim. Enquanto ceavam,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Jesus tomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "rubric_pt": "TOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS."
        },
        {
          "rubric_pt": "Mostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração."
        },
        {
          "rubric_pt": "Então prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Do mesmo modo,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "ele tomou em suas mãos o cálice com vinho, deu-vos graças novamente, e o deu a seus discípulos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "sp_pt": "",
          "text_pt": "TOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM."
        },
        {
          "rubric_pt": "Mostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração."
        },
        {
          "rubric_pt": "Em seguida, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Anunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!"
        },
        {
          "rubric_pt": "Ou"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé e do amor!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Todas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!"
        },
        {
          "rubric_pt": "Ou"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé para a salvação do mundo!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Salvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição."
        },
        {
          "rubric_pt": "ou"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Celebrando, agora, ó Pai, o memorial da nossa redenção, anunciamos a morte de Cristo e sua descida entre os mortos, proclamamos a sua ressurreição e ascensão à vossa direita e, esperando a sua vinda gloriosa, nós vos oferecemos o seu Corpo e Sangue, sacrifício do vosso agrado e salvação para o mundo inteiro."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Aceitai, ó Senhor, a nossa oferta!"
        },
        {
          "sp_pt": "",
          "text_pt": "Olhai, com bondade, a oblação que destes à vossa Igreja e concedei aos que vamos participar do mesmo pão e do mesmo cálice que, reunidos pelo Espírito Santo num só corpo, nos tornemos em Cristo uma oferenda viva para o louvor da vossa glória."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "O Espírito nos una num só corpo!"
        },
        {
          "rubric_pt": "★"
        },
        {
          "sp_pt": "1C",
          "text_pt": "E agora, ó Pai, lembrai-vos de todos pelos quais vos oferecemos este sacrifício: o vosso servo o Papa"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", o nosso Bispo"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", os bispos do mundo inteiro, os presbíteros, os diáconos, e todos os ministros da vossa Igreja, os fiéis que, ao redor deste altar, se unem à nossa oferta, o povo que vos pertence e aqueles que vos procuram de coração sincero."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Lembrai-vos, ó Pai, da vossa Igreja!"
        },
        {
          "sp_pt": "",
          "text_pt": "Na Missa com Batismo"
        },
        {
          "rubric_pt": "★"
        },
        {
          "sp_pt": "",
          "text_pt": "E agora, ó Pai, lembrai-vos de todos pelos quais vos oferecemos este sacrifício: o vosso servo o Papa"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", o nosso Bispo"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", os bispos do mundo inteiro, os presbíteros, os diáconos e todos os ministros da vossa Igreja, os que hoje fizestes renascer da água e do Espírito Santo, os fiéis que, ao redor deste altar, se unem à nossa oferta, o povo que vos pertence e aqueles que vos procuram de coração sincero."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Lembrai-vos, ó Pai, da vossa Igreja!"
        },
        {
          "sp_pt": "",
          "text_pt": "Na Missa com Crisma"
        },
        {
          "rubric_pt": "★"
        },
        {
          "sp_pt": "",
          "text_pt": "E agora, ó Pai, lembrai-vos de todos pelos quais vos oferecemos este sacrifício: o vosso servo o Papa"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", o nosso Bispo"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", os bispos do mundo inteiro, os presbíteros, os diáconos e todos os ministros da vossa Igreja, os que hoje foram ungidos pelo Espírito Santo, dom de Deus, os fiéis que, ao redor deste altar, se unem à nossa oferta, o povo que vos pertence e aqueles que vos procuram de coração sincero."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Lembrai-vos, ó Pai, da vossa Igreja!"
        },
        {
          "rubric_pt": "Ⓑ Na Missa com Primeira Comunhão Eucarística"
        },
        {
          "rubric_pt": "★"
        },
        {
          "sp_pt": "",
          "text_pt": "E agora, ó Pai, lembrai-vos de todos pelos quais vos oferecemos este sacrifício: o vosso servo o Papa"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", o nosso Bispo"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", os bispos do mundo inteiro, os presbíteros, os diáconos e todos os ministros da vossa Igreja, os que hoje reunis pela primeira vez à vossa mesa na participação do Pão da vida e do Cálice da salvação, os fiéis que, ao redor deste altar, se unem à nossa oferta, o povo que vos pertence e aqueles que vos procuram de coração sincero."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Lembrai-vos, ó Pai, da vossa Igreja!"
        },
        {
          "sp_pt": "2C",
          "text_pt": "Lembrai-vos também dos que morreram na paz do vosso Cristo e de todos os defuntos dos quais só vós conhecestes a fé."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Concedei-lhes, ó Senhor, a luz eterna!"
        },
        {
          "sp_pt": "3C",
          "text_pt": "E a todos nós, vossos filhos e filhas, concedei, ó Pai de bondade, alcançar a herança eterna, com a Virgem Maria, Mãe de Deus, São José, seu esposo, os Apóstolos e todos os Santos, no vosso reino, onde, com todas as criaturas, libertas da corrupção do pecado e da morte, vos glorificaremos,"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos"
        },
        {
          "sp_pt": "",
          "text_pt": "por Cristo, Senhor nosso, por quem dais ao mundo todo bem e toda graça."
        },
        {
          "rubric_pt": "Ergue a patena com a hóstia e o cálice, dizendo:"
        },
        {
          "sp_pt": "CP ou CC",
          "text_pt": "Por Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Amém."
        },
        {
          "rubric_pt": "Segue-se o Rito da Comunhão."
        }
      ],
      "5": [
        {
          "sp_pt": "",
          "text_pt": "O prefácio não pode ser substituído por outro."
        },
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
          "text_pt": "Demos graças ao Senhor, nosso Deus."
        },
        {
          "sp_pt": "R.",
          "text_pt": "É nosso dever e nossa salvação."
        },
        {
          "sp_pt": "",
          "text_pt": "É justo e nos faz todos ser mais santos, louvar a vós, ó Pai, no mundo inteiro, de dia e de noite, agradecendo com Cristo, vosso Filho, nosso irmão."
        },
        {
          "sp_pt": "",
          "text_pt": "É ele o sacerdote verdadeiro que sempre se oferece por nós todos, mandando que se faça a mesma coisa que fez naquela Ceia derradeira."
        },
        {
          "sp_pt": "",
          "text_pt": "Por isso, aqui estamos reunidos, louvando e agradecendo com alegria, juntando nossa voz à voz dos Anjos e dos Santos todos, para cantar"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "dizer"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": ":"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CP",
          "text_pt": "Ó Pai, vós que sempre quisestes ficar muito perto de nós, vivendo conosco no Cristo, falando conosco por ele,"
        },
        {
          "rubric_pt": "Une as mãos e, estendendo-as sobre as oferendas, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "mandai o vosso Espírito Santo,"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos e traça o sinal da cruz, ao mesmo tempo sobre o pão e o cálice, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "a fim de que as nossas ofertas se mudem no Corpo"
        },
        {
          "rubric_pt": "✠"
        },
        {
          "sp_pt": "",
          "text_pt": "e no Sangue de nosso Senhor Jesus Cristo."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Mandai vosso Espírito Santo!"
        },
        {
          "sp_pt": "",
          "text_pt": "O relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza."
        },
        {
          "sp_pt": "",
          "text_pt": "Na noite em que ia ser entregue, ceando com seus Apóstolos,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Jesus tomou o pão em suas mãos,"
        },
        {
          "sp_pt": "",
          "text_pt": "eleva os olhos"
        },
        {
          "sp_pt": "",
          "text_pt": "olhou para o céu e vos deu graças, partiu o pão e o entregou a seus discípulos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "rubric_pt": "TOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS."
        },
        {
          "rubric_pt": "Mostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração."
        },
        {
          "rubric_pt": "Então prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Do mesmo modo, no fim da Ceia,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "tomou o cálice em suas mãos, deu-vos graças novamente e o entregou a seus discípulos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "sp_pt": "",
          "text_pt": "TOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM."
        },
        {
          "rubric_pt": "Mostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração."
        },
        {
          "rubric_pt": "Em seguida, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Tudo isto é mistério da fé!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Toda vez que"
        },
        {
          "sp_pt": "",
          "text_pt": "comemos"
        },
        {
          "sp_pt": "",
          "text_pt": "deste Pão, toda vez que"
        },
        {
          "sp_pt": "",
          "text_pt": "bebemos"
        },
        {
          "sp_pt": "",
          "text_pt": "deste Vinho,"
        },
        {
          "sp_pt": "",
          "text_pt": "recordamos"
        },
        {
          "sp_pt": "",
          "text_pt": "a paixão de Jesus Cristo e"
        },
        {
          "sp_pt": "",
          "text_pt": "ficamos"
        },
        {
          "sp_pt": "",
          "text_pt": "esperando sua"
        },
        {
          "sp_pt": "",
          "text_pt": "vinda"
        },
        {
          "sp_pt": "",
          "text_pt": "."
        },
        {
          "rubric_pt": "ou"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "C.",
          "text_pt": "Recordando, ó Pai, neste momento, a paixão de Jesus, nosso Senhor, sua ressurreição e ascensão, nós queremos a vós oferecer este Pão que alimenta e que dá vida, este Vinho que nos salva e dá coragem."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Recebei, ó Senhor, a nossa oferta!"
        },
        {
          "sp_pt": "",
          "text_pt": "E quando recebermos Pão e Vinho, o Corpo e Sangue dele oferecidos, o Espírito nos una num só corpo, para sermos um só povo em seu amor."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "O Espírito nos una num só corpo!"
        },
        {
          "sp_pt": "1C",
          "text_pt": "Protegei vossa Igreja que caminha nas estradas do mundo rumo ao céu, cada dia renovando a"
        },
        {
          "sp_pt": "",
          "text_pt": "esperança de chegar junto a vós, na vossa paz."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Caminhamos na estrada de Jesus!"
        },
        {
          "sp_pt": "2C",
          "text_pt": "Dai ao vosso servo, o Papa N., ser bem firme na fé, na caridade, e a N., que é Bispo desta"
        },
        {
          "sp_pt": "",
          "text_pt": "Igreja, muita luz para guiar o vosso Povo."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Lembrai-vos, ó Pai, da vossa Igreja!"
        },
        {
          "sp_pt": "3C",
          "text_pt": "Esperamos entrar na vida eterna com Maria, Mãe de Deus e da Igreja, os Apóstolos, e todos"
        },
        {
          "sp_pt": "",
          "text_pt": "os que na vida souberam amar Cristo e seus irmãos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Esperamos entrar na vida eterna!"
        },
        {
          "rubric_pt": "4C"
        },
        {
          "sp_pt": "",
          "text_pt": "Abri as portas da misericórdia aos que chamastes para a outra vida; acolhei-os junto a vós,"
        },
        {
          "sp_pt": "",
          "text_pt": "bem felizes, no reino que para todos preparastes."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "A todos dai a luz que não se apaga!"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, continua:"
        },
        {
          "sp_pt": "CP",
          "text_pt": "E a todos nós, aqui reunidos, que somos povo santo e pecador, dai-nos a graça de participar"
        },
        {
          "sp_pt": "",
          "text_pt": "do vosso reino que também é nosso."
        },
        {
          "rubric_pt": "Ergue a patena com a hóstia e o cálice, dizendo:"
        },
        {
          "sp_pt": "CP ou CC",
          "text_pt": "Por Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Amém."
        },
        {
          "rubric_pt": "Segue-se o Rito da Comunhão."
        }
      ],
      "D1": [
        {
          "rubric_pt": "A IGREJA A CAMINHO DA UNIDADE"
        },
        {
          "sp_pt": "",
          "text_pt": "Convém usar Oração Eucarística com os formulários de Missa, pela Igreja, pelo Papa, pelo Bispo, para a eleição do Papa ou Bispo, por um Concílio ou Sínodo, pelos sacerdotes, pelo próprio sacerdote, pelos ministros da Igreja, para uma reunião espiritual ou pastoralⒷ e quando houver sintonia com a Liturgia da Palavra."
        },
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
          "text_pt": "Demos graças ao Senhor, nosso Deus."
        },
        {
          "sp_pt": "R.",
          "text_pt": "É nosso dever e nossa salvação."
        },
        {
          "sp_pt": "",
          "text_pt": "Na verdade, é digno e justo, é nosso dever e salvação dar-vos graças e cantar-vos um hino de glória e louvor, Senhor, Pai de infinita bondade."
        },
        {
          "sp_pt": "",
          "text_pt": "Pela palavra do Evangelho do vosso Filho reunistes uma só Igreja de todos os povos, línguas e nações. Por ela, vivificada pela força do vosso Espírito, não deixais de congregar na unidade todo o gênero humano."
        },
        {
          "sp_pt": "",
          "text_pt": "Manifestando a aliança do vosso amor, a Igreja irradia sem cessar a alegre esperança do vosso reino e brilha como sinal da vossa fidelidade que prometestes para sempre em Cristo Jesus, Senhor nosso."
        },
        {
          "sp_pt": "",
          "text_pt": "Por isso, unidos a todos os Anjos dos céus, nós vos celebramos na terra, cantando"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "dizendo"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "com a Igreja inteira a uma só voz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CP",
          "text_pt": "Na verdade, vós sois Santo e digno de louvor, ó Deus, que amais os seres humanos e sempre os acompanhais no caminho da vida."
        },
        {
          "sp_pt": "",
          "text_pt": "Na verdade, é bendito o vosso Filho, presente no meio de nós, quando nos reunimos por seu amor."
        },
        {
          "sp_pt": "",
          "text_pt": "Como outrora aos discípulos de Emaús, ele nos revela as Escrituras e parte o Pão para nós."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Bendito o vosso Filho, presente entre nós!"
        },
        {
          "rubric_pt": "Une as mãos e, estendendo-as sobre as oferendas, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Por isso, nós vos suplicamos, Pai de bondade: enviai e o vosso Espírito Santo para que santifique estes dons do pão e do vinho,"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos e traça o sinal da cruz, ao mesmo tempo que sobre o pão e o cálice, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "e se tornem para nós o Corpo e"
        },
        {
          "rubric_pt": "✠"
        },
        {
          "sp_pt": "",
          "text_pt": "o Sangue"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos"
        },
        {
          "sp_pt": "",
          "text_pt": "de nosso Senhor Jesus Cristo."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Enviai o vosso Espírito Santo!"
        },
        {
          "sp_pt": "",
          "text_pt": "O relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza."
        },
        {
          "sp_pt": "",
          "text_pt": "Na véspera de sua paixão, na noite da última Ceia,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Jesus tomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "rubric_pt": "TOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS."
        },
        {
          "rubric_pt": "Mostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração."
        },
        {
          "rubric_pt": "Então prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Do mesmo modo, no fim da Ceia,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "ele tomou o cálice em suas mãos, deu-vos graças novamente e o entregou a seus discípulos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "sp_pt": "",
          "text_pt": "TOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM."
        },
        {
          "rubric_pt": "Mostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração."
        },
        {
          "rubric_pt": "Em seguida, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Anunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!"
        },
        {
          "rubric_pt": "Ou"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé e do amor!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Todas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!"
        },
        {
          "rubric_pt": "Ou"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé para a salvação do mundo!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Salvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição."
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Celebrando, pois, ó Pai santo, o memorial da Páscoa de Cristo, vosso Filho, nosso Salvador, anunciamos a obra do vosso amor; pela paixão e morte de cruz, vós o fizestes entrar na glória da ressurreição e o colocastes à vossa direita."
        },
        {
          "rubric_pt": "Enquanto esperamos sua vinda gloriosa, nós vos oferecemos o Pão da vida e o Cálice da bênção."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Aceitai, ó Senhor, a nossa oferta!"
        },
        {
          "sp_pt": "",
          "text_pt": "Olhai com bondade a oferta da vossa Igreja; nela vos apresentamos o sacrifício pascal de Cristo, que nos foi entregue."
        },
        {
          "sp_pt": "",
          "text_pt": "E concedei que, pela força do Espírito do vosso amor, sejamos contados, agora e por toda a eternidade, entre os membros do vosso Filho, cujo Corpo e Sangue comungamos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "O Espírito nos una num só corpo!"
        },
        {
          "sp_pt": "1C",
          "text_pt": "Renovai, ó Pai, com a luz do Evangelho, a vossa Igreja"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "que está em"
        },
        {
          "rubric_pt": "N.)"
        },
        {
          "sp_pt": "",
          "text_pt": ". Fortalecei o vínculo da unidade entre os fiéis e os pastores do vosso povo, em comunhão com o nosso Papa"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", o nosso Bispo"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": "e toda a ordem episcopal. Assim, neste mundo dilacerado por discórdias, o vosso povo brilhe como sinal profético de unidade e concórdia."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Confirmai na unidade a vossa Igreja!"
        },
        {
          "sp_pt": "2C",
          "text_pt": "Lembrai-vos dos nossos irmãos e irmãs"
        },
        {
          "rubric_pt": "(N."
        },
        {
          "sp_pt": "",
          "text_pt": "e"
        },
        {
          "rubric_pt": "N.)"
        },
        {
          "sp_pt": "",
          "text_pt": ", que adormeceram na paz do vosso Cristo, e de todos os falecidos, cuja fé só vós conhecestes: acolhei-os na luz da vossa face e, na ressurreição, concedei-lhes a plenitude da vida."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Concedei-lhes, ó Senhor, a luz eterna!"
        },
        {
          "sp_pt": "3C",
          "text_pt": "Concedei também a nós, no fim da nossa peregrinação terrestre, chegarmos todos à morada eterna, onde viveremos para sempre convosco e, com a Bem-aventurada Virgem Maria, Mãe de Deus, os Apóstolos e Mártires,"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "São"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ":"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo do dia ou padroeiro)"
        },
        {
          "sp_pt": "",
          "text_pt": "e todos os Santos, vos louvaremos e glorificaremos,"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos"
        },
        {
          "sp_pt": "",
          "text_pt": "por Jesus Cristo, vosso Filho."
        },
        {
          "rubric_pt": "Ergue a patena com a hóstia e o cálice, dizendo:"
        },
        {
          "sp_pt": "CP ou CC",
          "text_pt": "Por Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Amém."
        },
        {
          "rubric_pt": "Segue-se o Rito da Comunhão."
        }
      ],
      "D2": [
        {
          "rubric_pt": "DEUS CONDUZ SUA IGREJA NO CAMINHO DA SALVAÇÃO"
        },
        {
          "sp_pt": "",
          "text_pt": "Convém usar esta Oração Eucarística com os formulários de Missa, pela Igreja, pelas vocações às ordens sagradas, pelos leigos, pela família, pelos religiosos, pelas vocações à vida religiosa, para pedir caridade, pelos parentes e amigos, em ação de graças Ⓑ e quando houver sintonia com a Liturgia da Palavra."
        },
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
          "text_pt": "Demos graças ao Senhor, nosso Deus."
        },
        {
          "sp_pt": "R.",
          "text_pt": "É nosso dever e nossa salvação."
        },
        {
          "sp_pt": "",
          "text_pt": "Na verdade, é digno e justo, é nosso dever e salvação dar-vos graças, sempre e em todo lugar, Senhor, Pai santo, criador do mundo e fonte de toda vida."
        },
        {
          "sp_pt": "",
          "text_pt": "Nunca abandonais a obra da vossa sabedoria, mas, em vossa providência, continuais agindo no meio de nós. Com braço estendido e mão forte, guiastes o vosso povo de Israel pelo deserto."
        },
        {
          "sp_pt": "",
          "text_pt": "Agora, com a força do Espírito Santo, acompanhais sempre a vossa Igreja, peregrina neste mundo, e a conduzis pelos caminhos da história até à felicidade perfeita em vosso reino por Jesus Cristo, Senhor nosso."
        },
        {
          "sp_pt": "",
          "text_pt": "Por isso, também nós, com os Anjos e Santos, proclamamos o hino de vossa glória, cantando"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "dizendo"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "sem cessar:"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CP",
          "text_pt": "Na verdade, vós sois Santo e digno de louvor, ó Deus, que amais os seres humanos e sempre os acompanhais no caminho da vida."
        },
        {
          "sp_pt": "",
          "text_pt": "Na verdade, é bendito o vosso Filho, presente no meio de nós, quando nos reunimos por seu amor."
        },
        {
          "sp_pt": "",
          "text_pt": "Como outrora aos discípulos de Emaús, ele nos revela as Escrituras e parte o Pão para nós."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Bendito o vosso Filho, presente entre nós!"
        },
        {
          "rubric_pt": "Une as mãos e, estendendo-as sobre as oferendas, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Por isso, nós vos suplicamos, Pai de bondade: enviai e o vosso Espírito Santo para que santifique estes dons do pão e do vinho,"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos e traça o sinal da cruz, ao mesmo tempo que sobre o pão e o cálice, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "e se tornem para nós o Corpo e"
        },
        {
          "rubric_pt": "✠"
        },
        {
          "sp_pt": "",
          "text_pt": "o Sangue"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos"
        },
        {
          "sp_pt": "",
          "text_pt": "de nosso Senhor Jesus Cristo."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Enviai o vosso Espírito Santo!"
        },
        {
          "sp_pt": "",
          "text_pt": "O relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza."
        },
        {
          "sp_pt": "",
          "text_pt": "Na véspera de sua paixão, na noite da última Ceia,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Jesus tomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "rubric_pt": "TOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS."
        },
        {
          "rubric_pt": "Mostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração."
        },
        {
          "rubric_pt": "Então prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Do mesmo modo, no fim da Ceia,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "ele tomou o cálice em suas mãos, deu-vos graças novamente e o entregou a seus discípulos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "sp_pt": "",
          "text_pt": "TOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM."
        },
        {
          "rubric_pt": "Mostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração."
        },
        {
          "rubric_pt": "Em seguida, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Anunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!"
        },
        {
          "rubric_pt": "Ou"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé e do amor!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Todas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!"
        },
        {
          "rubric_pt": "Ou"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé para a salvação do mundo!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Salvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição."
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Celebrando, pois, ó Pai santo, o memorial da Páscoa de Cristo, vosso Filho, nosso Salvador, anunciamos a obra do vosso amor; pela paixão e morte de cruz, vós o fizestes entrar na glória da ressurreição e o colocastes à vossa direita."
        },
        {
          "rubric_pt": "Enquanto esperamos sua vinda gloriosa, nós vos oferecemos o Pão da vida e o Cálice da bênção."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Aceitai, ó Senhor, a nossa oferta!"
        },
        {
          "sp_pt": "",
          "text_pt": "Olhai com bondade a oferta da vossa Igreja; nela vos apresentamos o sacrifício pascal de Cristo, que nos foi entregue."
        },
        {
          "sp_pt": "",
          "text_pt": "E concedei que, pela força do Espírito do vosso amor, sejamos contados, agora e por toda a eternidade, entre os membros do vosso Filho, cujo Corpo e Sangue comungamos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "O Espírito nos una num só corpo!"
        },
        {
          "sp_pt": "1C",
          "text_pt": "Ó Pai, confirmai na unidade os convidados a participar da vossa mesa, para que, seguindo na fé e na esperança pelos vossos caminhos, possamos irradiar no mundo alegria e confiança em comunhão com o nosso Papa"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", o nosso Bispo"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", todos os bispos, presbíteros, diáconos e todo o vosso povo."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Confirmai na unidade a vossa Igreja!"
        },
        {
          "sp_pt": "2C",
          "text_pt": "Lembrai-vos dos nossos irmãos e irmãs"
        },
        {
          "rubric_pt": "(N."
        },
        {
          "sp_pt": "",
          "text_pt": "e"
        },
        {
          "rubric_pt": "N.)"
        },
        {
          "sp_pt": "",
          "text_pt": ", que adormeceram na paz do vosso Cristo, e de todos os falecidos, cuja fé só vós conhecestes: acolhei-os na luz da vossa face e, na ressurreição, concedei-lhes a plenitude da vida."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Concedei-lhes, ó Senhor, a luz eterna!"
        },
        {
          "sp_pt": "3C",
          "text_pt": "Concedei também a nós, no fim da nossa peregrinação terrestre, chegarmos todos à morada eterna, onde viveremos para sempre convosco e, com a Bem-aventurada Virgem Maria, Mãe de Deus, os Apóstolos e Mártires,"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "São"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ":"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo do dia ou padroeiro)"
        },
        {
          "sp_pt": "",
          "text_pt": "e todos os Santos, vos louvaremos e glorificaremos,"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos"
        },
        {
          "sp_pt": "",
          "text_pt": "por Jesus Cristo, vosso Filho."
        },
        {
          "rubric_pt": "Ergue a patena com a hóstia e o cálice, dizendo:"
        },
        {
          "sp_pt": "CP ou CC",
          "text_pt": "Por Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Amém."
        },
        {
          "rubric_pt": "Segue-se o Rito da Comunhão."
        }
      ],
      "D3": [
        {
          "rubric_pt": "JESUS, CAMINHO PARA O PAI"
        },
        {
          "sp_pt": "",
          "text_pt": "Convém usar esta Oração Eucarística com os formulários de Missa, pela evangelização dos povos, pelos cristãos perseguidos, pela pátria ou pela cidade, pelos governantes, pelo encontro de chefes das nações, no início do ano civil, pelo progresso dos povos Ⓑ e quando houver sintonia com a Liturgia da Palavra."
        },
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
          "text_pt": "Demos graças ao Senhor, nosso Deus."
        },
        {
          "sp_pt": "R.",
          "text_pt": "É nosso dever e nossa salvação."
        },
        {
          "sp_pt": "",
          "text_pt": "Na verdade, é digno e justo, é nosso dever e salvação dar-vos graças, sempre e em todo lugar, Pai santo, Senhor do céu e da terra, por Cristo, Senhor nosso."
        },
        {
          "sp_pt": "",
          "text_pt": "De fato, pelo vosso Verbo criastes o universo e tudo governais com equidade. Vós nos destes vosso Filho, feito carne, como mediador; ele nos dirigiu a vossa palavra e nos chamou a seguir os seus passos."
        },
        {
          "sp_pt": "",
          "text_pt": "Ele é o caminho que nos conduz até vós, a verdade que nos liberta, a vida que nos enche de alegria."
        },
        {
          "sp_pt": "",
          "text_pt": "Por vosso Filho, reunis em uma só família os homens e as mulheres, criados para a glória do vosso nome, redimidos pelo sangue de sua cruz e marcados com o selo do vosso Espírito."
        },
        {
          "sp_pt": "",
          "text_pt": "Por isso, agora e para sempre, unidos a todos os Anjos, proclamamos a vossa glória, cantando"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "dizendo"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "com alegria:"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CP",
          "text_pt": "Na verdade, vós sois Santo e digno de louvor, ó Deus, que amais os seres humanos e sempre os acompanhais no caminho da vida."
        },
        {
          "sp_pt": "",
          "text_pt": "Na verdade, é bendito o vosso Filho, presente no meio de nós, quando nos reunimos por seu amor."
        },
        {
          "sp_pt": "",
          "text_pt": "Como outrora aos discípulos de Emaús, ele nos revela as Escrituras e parte o Pão para nós."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Bendito o vosso Filho, presente entre nós!"
        },
        {
          "rubric_pt": "Une as mãos e, estendendo-as sobre as oferendas, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Por isso, nós vos suplicamos, Pai de bondade: enviai e o vosso Espírito Santo para que santifique estes dons do pão e do vinho,"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos e traça o sinal da cruz, ao mesmo tempo que sobre o pão e o cálice, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "e se tornem para nós o Corpo e"
        },
        {
          "rubric_pt": "✠"
        },
        {
          "sp_pt": "",
          "text_pt": "o Sangue"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos"
        },
        {
          "sp_pt": "",
          "text_pt": "de nosso Senhor Jesus Cristo."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Enviai o vosso Espírito Santo!"
        },
        {
          "sp_pt": "",
          "text_pt": "O relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza."
        },
        {
          "sp_pt": "",
          "text_pt": "Na véspera de sua paixão, na noite da última Ceia,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Jesus tomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "rubric_pt": "TOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS."
        },
        {
          "rubric_pt": "Mostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração."
        },
        {
          "rubric_pt": "Então prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Do mesmo modo, no fim da Ceia,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "ele tomou o cálice em suas mãos, deu-vos graças novamente e o entregou a seus discípulos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "sp_pt": "",
          "text_pt": "TOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM."
        },
        {
          "rubric_pt": "Mostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração."
        },
        {
          "rubric_pt": "Em seguida, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Anunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!"
        },
        {
          "rubric_pt": "Ou"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé e do amor!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Todas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!"
        },
        {
          "rubric_pt": "Ou"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé para a salvação do mundo!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Salvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição."
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Celebrando, pois, ó Pai santo, o memorial da Páscoa de Cristo, vosso Filho, nosso Salvador, anunciamos a obra do vosso amor; pela paixão e morte de cruz, vós o fizestes entrar na glória da ressurreição e o colocastes à vossa direita."
        },
        {
          "rubric_pt": "Enquanto esperamos sua vinda gloriosa, nós vos oferecemos o Pão da vida e o Cálice da bênção."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Aceitai, ó Senhor, a nossa oferta!"
        },
        {
          "sp_pt": "",
          "text_pt": "Olhai com bondade a oferta da vossa Igreja; nela vos apresentamos o sacrifício pascal de Cristo, que nos foi entregue."
        },
        {
          "sp_pt": "",
          "text_pt": "E concedei que, pela força do Espírito do vosso amor, sejamos contados, agora e por toda a eternidade, entre os membros do vosso Filho, cujo Corpo e Sangue comungamos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "O Espírito nos una num só corpo!"
        },
        {
          "sp_pt": "1C",
          "text_pt": "Pela participação neste mistério, ó Pai todo-poderoso, vivificai-nos no Espírito, tornai-nos semelhantes à imagem do vosso Filho e confirmai-nos no vínculo da comunhão com o nosso Papa"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", o nosso Bispo"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", os outros bispos, os presbíteros e diáconos e todo o vosso povo."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Confirmai na unidade a vossa Igreja!"
        },
        {
          "sp_pt": "2C",
          "text_pt": "Fazei que todos os fiéis da Igreja, discernindo os sinais dos tempos à luz da fé, empenhem-se coerentemente no serviço do Evangelho."
        },
        {
          "sp_pt": "",
          "text_pt": "Tornai-nos atentos às necessidades de todas as pessoas para que, participando de suas dores e angústias, de suas alegrias e esperanças, fielmente lhes anunciemos a salvação e, com eles, sigamos no caminho do vosso reino."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Ajudai-nos a criar um mundo novo!"
        },
        {
          "sp_pt": "3C",
          "text_pt": "Lembrai-vos dos nossos irmãos e irmãs"
        },
        {
          "rubric_pt": "(N."
        },
        {
          "sp_pt": "",
          "text_pt": "e"
        },
        {
          "rubric_pt": "N.)"
        },
        {
          "sp_pt": "",
          "text_pt": ", que adormeceram na paz do vosso Cristo, e de todos os falecidos, cuja fé só vós conhecestes: acolhei-os na luz da vossa face e, na ressurreição, concedei-lhes a plenitude da vida."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Concedei-lhes, ó Senhor, a luz eterna!"
        },
        {
          "rubric_pt": "4C"
        },
        {
          "sp_pt": "",
          "text_pt": "Concedei também a nós, no fim da nossa peregrinação terrestre, chegarmos todos à morada eterna, onde viveremos para sempre convosco e, com a Bem-aventurada Virgem Maria, Mãe de Deus, os Apóstolos e Mártires,"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "São"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ":"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo do dia ou padroeiro)"
        },
        {
          "sp_pt": "",
          "text_pt": "e todos os Santos, vos louvaremos e glorificaremos, por Jesus Cristo, vosso Filho."
        },
        {
          "rubric_pt": "Ergue a patena com a hóstia e o cálice, dizendo:"
        },
        {
          "sp_pt": "CP ou CC",
          "text_pt": "Por Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Amém."
        },
        {
          "rubric_pt": "Segue-se o Rito da Comunhão."
        }
      ],
      "D4": [
        {
          "rubric_pt": "JESUS QUE PASSA FAZENDO O BEM"
        },
        {
          "sp_pt": "",
          "text_pt": "Convém usar esta Oração Eucarística com os formulários de Missa, pelos refugiados e exilados, em tempo de fome ou pelos que passam fome, pelos que nos afligem, pelos mantidos em cativeiro, pelos prisioneiros, pelos enfermos, pelos agonizantes, para pedir a graça de uma boa morte, em qualquer necessidade Ⓑ e quando houver sintonia com a Liturgia da Palavra."
        },
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
          "text_pt": "Demos graças ao Senhor, nosso Deus."
        },
        {
          "sp_pt": "R.",
          "text_pt": "É nosso dever e nossa salvação."
        },
        {
          "sp_pt": "",
          "text_pt": "Na verdade, é digno e justo, é nosso dever e salvação dar-vos graças, sempre e em todo lugar, Pai das misericórdias e Deus fiel, pois nos destes vosso Filho Jesus Cristo, como Senhor e Redentor."
        },
        {
          "sp_pt": "",
          "text_pt": "Ele sempre se mostrou cheio de misericórdia para com os pequenos e os pobres, os doentes e os pecadores, e se fez próximo dos aflitos e oprimidos. Por sua palavra e ação anunciou ao mundo que sois Pai e cuidais de todos os vossos filhos e filhas."
        },
        {
          "sp_pt": "",
          "text_pt": "Por isso, com todos os Anjos e Santos, nós vos louvamos e bendizemos, e proclamamos o hino de vossa glória, cantando"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "dizendo"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "sem cessar:"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CP",
          "text_pt": "Na verdade, vós sois Santo e digno de louvor, ó Deus, que amais os seres humanos e sempre os acompanhais no caminho da vida."
        },
        {
          "sp_pt": "",
          "text_pt": "Na verdade, é bendito o vosso Filho, presente no meio de nós, quando nos reunimos por seu amor."
        },
        {
          "sp_pt": "",
          "text_pt": "Como outrora aos discípulos de Emaús, ele nos revela as Escrituras e parte o Pão para nós."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Bendito o vosso Filho, presente entre nós!"
        },
        {
          "rubric_pt": "Une as mãos e, estendendo-as sobre as oferendas, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Por isso, nós vos suplicamos, Pai de bondade: enviai e o vosso Espírito Santo para que santifique estes dons do pão e do vinho,"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos e traça o sinal da cruz, ao mesmo tempo que sobre o pão e o cálice, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "e se tornem para nós o Corpo e"
        },
        {
          "rubric_pt": "✠"
        },
        {
          "sp_pt": "",
          "text_pt": "o Sangue"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos"
        },
        {
          "sp_pt": "",
          "text_pt": "de nosso Senhor Jesus Cristo."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Enviai o vosso Espírito Santo!"
        },
        {
          "sp_pt": "",
          "text_pt": "O relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza."
        },
        {
          "sp_pt": "",
          "text_pt": "Na véspera de sua paixão, na noite da última Ceia,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Jesus tomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "rubric_pt": "TOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS."
        },
        {
          "rubric_pt": "Mostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração."
        },
        {
          "rubric_pt": "Então prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Do mesmo modo, no fim da Ceia,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "ele tomou o cálice em suas mãos, deu-vos graças novamente e o entregou a seus discípulos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "sp_pt": "",
          "text_pt": "TOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM."
        },
        {
          "rubric_pt": "Mostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração."
        },
        {
          "rubric_pt": "Em seguida, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Anunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!"
        },
        {
          "rubric_pt": "Ou"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé e do amor!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Todas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!"
        },
        {
          "rubric_pt": "Ou"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé para a salvação do mundo!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Salvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição."
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Celebrando, pois, ó Pai santo, o memorial da Páscoa de Cristo, vosso Filho, nosso Salvador, anunciamos a obra do vosso amor; pela paixão e morte de cruz, vós o fizestes entrar na glória da ressurreição e o colocastes à vossa direita."
        },
        {
          "rubric_pt": "Enquanto esperamos sua vinda gloriosa, nós vos oferecemos o Pão da vida e o Cálice da bênção."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Aceitai, ó Senhor, a nossa oferta!"
        },
        {
          "sp_pt": "",
          "text_pt": "Olhai com bondade a oferta da vossa Igreja; nela vos apresentamos o sacrifício pascal de Cristo, que nos foi entregue."
        },
        {
          "sp_pt": "",
          "text_pt": "E concedei que, pela força do Espírito do vosso amor, sejamos contados, agora e por toda a eternidade, entre os membros do vosso Filho, cujo Corpo e Sangue comungamos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "O Espírito nos una num só corpo!"
        },
        {
          "sp_pt": "1C",
          "text_pt": "Dignai-vos, Senhor, conduzir a vossa Igreja à perfeição na fé e no amor, em comunhão com o nosso Papa"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": "e o nosso Bispo"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", com todos os bispos, presbíteros, diáconos e todo o povo que adquiristes para vós."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Confirmai na unidade a vossa Igreja!"
        },
        {
          "sp_pt": "2C",
          "text_pt": "Abri os nossos olhos para perceber as necessidades dos irmãos e irmãs; inspirai-nos palavras e ações para confortar os cansados e oprimidos; fazei que os sirvamos de coração sincero, seguindo o exemplo e o mandamento de Cristo."
        },
        {
          "sp_pt": "",
          "text_pt": "Vossa Igreja seja testemunha viva da verdade e da liberdade, da justiça e da paz, para que toda a humanidade se reanime com uma nova esperança."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Ajudai-nos a criar um mundo novo!"
        },
        {
          "sp_pt": "3C",
          "text_pt": "Lembrai-vos dos nossos irmãos e irmãs"
        },
        {
          "rubric_pt": "(N."
        },
        {
          "sp_pt": "",
          "text_pt": "e"
        },
        {
          "rubric_pt": "N.)"
        },
        {
          "sp_pt": "",
          "text_pt": ", que adormeceram na paz do vosso Cristo, e de todos os falecidos, cuja fé só vós conhecestes: acolhei-os na luz da vossa face e, na ressurreição, concedei-lhes a plenitude da vida."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Concedei-lhes, ó Senhor, a luz eterna!"
        },
        {
          "rubric_pt": "4C"
        },
        {
          "sp_pt": "",
          "text_pt": "Concedei também a nós, no fim da nossa peregrinação terrestre, chegarmos todos à morada eterna, onde viveremos para sempre convosco e, com a Bem-aventurada Virgem Maria, Mãe de Deus, os Apóstolos e Mártires,"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "São"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ":"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo do dia ou padroeiro)"
        },
        {
          "sp_pt": "",
          "text_pt": "e todos os Santos, vos louvaremos e glorificaremos, por Jesus Cristo, vosso Filho."
        },
        {
          "rubric_pt": "Ergue a patena com a hóstia e o cálice, dizendo:"
        },
        {
          "sp_pt": "CP ou CC",
          "text_pt": "Por Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Amém."
        },
        {
          "rubric_pt": "Segue-se o Rito da Comunhão."
        }
      ],
      "R1": [
        {
          "rubric_pt": "SOBRE A RECONCILIAÇÃO I"
        },
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
          "text_pt": "Demos graças ao Senhor, nosso Deus."
        },
        {
          "sp_pt": "R.",
          "text_pt": "É nosso dever e nossa salvação."
        },
        {
          "sp_pt": "",
          "text_pt": "Na verdade, é digno e justo dar-vos graças sempre, Senhor, Pai santo, Deus eterno e todo- poderoso. Constantemente nos chamais a uma vida mais plena e, porque sois rico em misericórdia, sempre ofereceis o perdão e convidais os pecadores a confiar somente na vossa bondade."
        },
        {
          "sp_pt": "",
          "text_pt": "E a nós, que tantas vezes quebramos a vossa aliança, nunca nos rejeitastes, mas, por Jesus, vosso Filho, nosso Redentor, unistes convosco a família humana com um vínculo novo de caridade, tão estreito e forte, que nada poderá romper."
        },
        {
          "sp_pt": "",
          "text_pt": "Também hoje, ofereceis tempo de graça e reconciliação ao vosso povo e um novo alento para que, em Cristo, se converta a vós, enquanto, sempre mais dócil ao Espírito Santo, se coloca ao serviço de todos."
        },
        {
          "sp_pt": "",
          "text_pt": "Por isso, cheios de admiração, exaltamos a força do vosso amor e, proclamando nossa alegria pela salvação, nos unimos às multidões dos céus, cantando"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "dizendo"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "sem cessar:"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CP",
          "text_pt": "Na verdade, ó Pai, vós sois Santo e, desde a origem do mundo, tudo fazeis para sermos santos como vós sois Santo."
        },
        {
          "rubric_pt": "Une as mãos e, estendendo-as sobre as oferendas, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Olhai as oferendas do vosso povo e derramai sobre elas a força do vosso Espírito, para que se tornem"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos e traça o sinal da cruz, ao mesmo tempo que sobre o pão e o cálice, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "o Corpo"
        },
        {
          "rubric_pt": "✠"
        },
        {
          "sp_pt": "",
          "text_pt": "e o Sangue do vosso amado Filho, Jesus Cristo, no qual também nós somos vossos filhos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Enviai o vosso Espírito Santo!"
        },
        {
          "rubric_pt": "Quando outrora estávamos perdidos e incapazes de vos encontrar, vós nos amastes com imenso amor, pois vosso Filho, o único Justo, entregou-se à morte, não rejeitando ser pregado no lenho da cruz."
        },
        {
          "sp_pt": "",
          "text_pt": "Antes, porém, de seus braços abertos traçarem entre o céu e a terra o sinal permanente da vossa aliança, Jesus quis celebrar a Páscoa com seus discípulos."
        },
        {
          "sp_pt": "",
          "text_pt": "O relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza."
        },
        {
          "sp_pt": "",
          "text_pt": "Ceando com eles,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "tomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "rubric_pt": "TOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS."
        },
        {
          "rubric_pt": "Mostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração."
        },
        {
          "rubric_pt": "Em seguida diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Do mesmo modo, no fim da Ceia, Jesus, sabendo que ia reconciliar em si todas as coisas pelo sangue a ser derramado na cruz,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "tomou o cálice repleto do fruto da videira, deu-vos graças novamente e o entregou a seus discípulos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "sp_pt": "",
          "text_pt": "TOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM."
        },
        {
          "rubric_pt": "Mostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração."
        },
        {
          "rubric_pt": "Em seguida, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Anunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!"
        },
        {
          "rubric_pt": "Ou"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé e do amor!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Todas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!"
        },
        {
          "rubric_pt": "Ou"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé para a salvação do mundo!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Salvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição."
        },
        {
          "sp_pt": "",
          "text_pt": "A seguir o sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Fazendo, pois, memória de vosso Filho, Jesus Cristo, nossa Páscoa e certeza da paz definitiva, celebramos sua morte e ressurreição e, aguardando o dia feliz de sua vinda gloriosa, nós vos oferecemos, Deus fiel e misericordioso, a vítima que nos reconcilia convosco."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Aceitai, ó Senhor, a nossa oferta!"
        },
        {
          "sp_pt": "",
          "text_pt": "Olhai, com amor, Pai misericordioso, aqueles que unis a vós pelo sacrifício do vosso Filho, e concedei que, pela força do Espírito Santo, os que participam do único pão e do mesmo cálice sejam congregados em Cristo num só corpo, no qual todas as divisões sejam superadas."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "O Espírito nos una num só corpo!"
        },
        {
          "sp_pt": "1C",
          "text_pt": "Conservai-nos sempre em comunhão de fé e amor unidos ao Papa"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": "e ao Bispo"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": "."
        },
        {
          "sp_pt": "",
          "text_pt": "Ajudai-nos a esperar juntos a vinda do vosso reino, até o dia em que, diante de vós, formos santos entre os Santos na morada celeste, ao lado da Virgem Maria, Mãe de Deus, dos Apóstolos e todos os Santos e com nossos irmãos e irmãs já falecidos que confiamos à vossa misericórdia."
        },
        {
          "sp_pt": "",
          "text_pt": "Enfim, libertos das feridas do pecado e plenamente transformados em novas criaturas, felizes cantaremos a ação de graças"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos"
        },
        {
          "sp_pt": "",
          "text_pt": "do vosso Cristo que vive para sempre."
        },
        {
          "rubric_pt": "Ergue a patena com a hóstia e o cálice, dizendo:"
        },
        {
          "sp_pt": "CP ou CC",
          "text_pt": "Por Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Amém."
        },
        {
          "rubric_pt": "Segue-se o Rito da Comunhão."
        }
      ],
      "R2": [
        {
          "rubric_pt": "SOBRE A RECONCILIAÇÃO II"
        },
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
          "text_pt": "Demos graças ao Senhor, nosso Deus."
        },
        {
          "sp_pt": "R.",
          "text_pt": "É nosso dever e nossa salvação."
        },
        {
          "sp_pt": "",
          "text_pt": "Na verdade, é digno e justo dar-vos graças e cantar vossos louvores, Deus Pai todo-poderoso, por tudo que operais neste mundo, por Cristo, nosso Senhor."
        },
        {
          "sp_pt": "",
          "text_pt": "No meio da humanidade dividida por inimizades e discórdias, sabemos por experiência que vós levais as pessoas a se converter e buscar a reconciliação."
        },
        {
          "sp_pt": "",
          "text_pt": "Pelo vosso Espírito Santo moveis os corações, de modo que os inimigos voltem à amizade, os adversários se deem as mãos e os povos procurem reencontrar a paz."
        },
        {
          "sp_pt": "",
          "text_pt": "É também obra do vosso poder, ó Pai, quando o ódio é vencido pelo amor, a vingança dá lugar ao perdão e a discórdia se converte em mútua afeição."
        },
        {
          "sp_pt": "",
          "text_pt": "Por isso, com os coros celestes, nós vos damos graças sem cessar e proclamamos aqui na terra a vossa glória, cantando"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "dizendo"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "a uma só voz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CP",
          "text_pt": "Pai onipotente, louvado sois por vosso Filho Jesus Cristo, que veio em vosso nome."
        },
        {
          "sp_pt": "",
          "text_pt": "Ele é a Palavra de salvação para a humanidade, a mão que estendeis aos pecadores e o caminho pelo qual nos é concedida a vossa paz."
        },
        {
          "rubric_pt": "Quando vos abandonamos por nossos pecados, vós nos reconduzistes à reconciliação por vosso Filho, que por nós entregastes à morte, para que voltássemos a vós e nos amássemos uns aos outros."
        },
        {
          "rubric_pt": "Une as mãos e, estendendo-as sobre as oferendas, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "E agora, celebrando a reconciliação que Cristo nos trouxe, vos pedimos: santificai estas oferendas pela efusão do vosso Espírito,"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos e traça o sinal da cruz, ao mesmo tempo que sobre o pão e o cálice, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "a fim de que se tornem o Corpo e"
        },
        {
          "rubric_pt": "✠"
        },
        {
          "sp_pt": "",
          "text_pt": "o Sangue do vosso Filho que nos mandou celebrar estes mistérios."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Enviai o vosso Espírito Santo!"
        },
        {
          "sp_pt": "",
          "text_pt": "O relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza."
        },
        {
          "sp_pt": "",
          "text_pt": "Antes de dar a vida para nos libertar, estando à mesa,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Jesus tomou o pão em suas mãos, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "rubric_pt": "TOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS."
        },
        {
          "rubric_pt": "Mostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração."
        },
        {
          "rubric_pt": "Depois prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Do mesmo modo, naquela noite,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "ele tomou o cálice da bênção em suas mãos e, proclamando a vossa misericórdia, o deu a seus discípulos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "sp_pt": "",
          "text_pt": "TOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM."
        },
        {
          "rubric_pt": "Mostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração."
        },
        {
          "rubric_pt": "Em seguida, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Anunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!"
        },
        {
          "rubric_pt": "Ou"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé e do amor!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Todas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!"
        },
        {
          "rubric_pt": "Ou"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé para a salvação do mundo!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Salvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição."
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Fazendo, pois, memória da morte e ressurreição do vosso Filho que nos deixou esta prova de amor, nós vos oferecemos aquilo que nos destes: o sacrifício da perfeita reconciliação."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Aceitai, ó Senhor, a nossa oferta!"
        },
        {
          "sp_pt": "",
          "text_pt": "Pai santo, neste banquete salvífico, suplicantes, vos pedimos: aceitai-nos também com vosso Filho e dai-nos o seu Espírito para que nos liberte de tudo que nos separa uns dos outros."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "O Espírito nos una num só corpo!"
        },
        {
          "sp_pt": "1C",
          "text_pt": "Ele faça da vossa Igreja sinal de unidade do gênero humano e instrumento da vossa paz, e nos conserve em comunhão com o Papa"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", o nosso Bispo"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", os Bispos do mundo inteiro e todo o vosso povo."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Lembrai-vos, ó Pai, da vossa Igreja!"
        },
        {
          "sp_pt": "2C",
          "text_pt": "Ó Pai, que agora nos reunistes, à mesa do vosso Filho, congregai-nos também na Ceia da comunhão eterna nos novos céus e nova terra, onde brilha a plenitude da vossa paz, junto com a gloriosa Virgem Maria, Mãe de Deus, os Apóstolos e todos os Santos, os nossos irmãos e as pessoas de todos os povos e línguas que morreram na vossa amizade,"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos"
        },
        {
          "sp_pt": "",
          "text_pt": "em Cristo Jesus, Senhor nosso."
        },
        {
          "rubric_pt": "Ergue a patena com a hóstia e o cálice, dizendo:"
        },
        {
          "sp_pt": "CP ou CC",
          "text_pt": "Por Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Amém."
        },
        {
          "rubric_pt": "Segue-se o Rito da Comunhão."
        }
      ],
      "C1": [
        {
          "sp_pt": "",
          "text_pt": "O uso desta Oração Eucarística é restrito às Missas que se celebram só com crianças, isto é, as que ainda não entraram na adolescência, ou àquelas Missas nas quais a maior parte dos participantes é criança."
        },
        {
          "sp_pt": "",
          "text_pt": "O prefácio dessa Oração Eucarística, por sua estrutura e índole peculiar, não pode ser substituído por outros prefácios."
        },
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
          "text_pt": "Demos graças ao Senhor, nosso Deus."
        },
        {
          "sp_pt": "R.",
          "text_pt": "É nosso dever e nossa salvação."
        },
        {
          "sp_pt": "",
          "text_pt": "Senhor, Pai de bondade, nos reunistes diante de vós para vos celebrar e proclamar vossos louvores com o coração em festa."
        },
        {
          "sp_pt": "",
          "text_pt": "Nós vos louvamos por todas as coisas bonitas que existem no mundo e pela alegria que dais a todos nós. Nós vos louvamos pela luz do dia e por vossa Palavra que nos ilumina. Nós vos louvamos também pela terra, pelas pessoas que nela habitam e pela vida que de vós recebemos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Glória a vós, Senhor, que tanto nos amais!"
        },
        {
          "sp_pt": "",
          "text_pt": "Sim, ó Pai, sois muito bom: vós nos amais e fazeis por nós coisas maravilhosas, sempre pensais em todas as pessoas e nunca desistis de estar perto delas."
        },
        {
          "sp_pt": "",
          "text_pt": "Enviastes vosso Filho querido para nos salvar."
        },
        {
          "sp_pt": "",
          "text_pt": "Ele curou os doentes, perdoou os pecadores, mostrou a todos o vosso amor, acolheu e abençoou as crianças."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Glória a vós, Senhor, que tanto nos amais!"
        },
        {
          "sp_pt": "",
          "text_pt": "Pai de bondade, nós não estamos sozinhos para celebrar vossos louvores, pois em toda a terra o vosso povo vos glorifica. Por isso, rezamos com a Igreja inteira, com o Papa"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": "e o nosso Bispo"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ". No céu também vos louvam sem cessar Maria, a Mãe de Jesus, os Apóstolos e todos os Santos. Unidos a eles e aos Anjos nós vos adoramos, cantando"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "dizendo"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "a uma só voz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CP",
          "text_pt": "Pai santo, para vos agradecer, trouxemos este pão e este vinho;"
        },
        {
          "rubric_pt": "Une as mãos e, estendendo-as sobre as oferendas, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "pela ação do Espírito Santo fazei que eles se tornem"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos e traça o sinal da cruz, ao mesmo tempo, sobre o pão e cálice, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "o Corpo"
        },
        {
          "rubric_pt": "✠"
        },
        {
          "sp_pt": "",
          "text_pt": "e o Sangue de Jesus Cristo, vosso Filho muito amado."
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos"
        },
        {
          "sp_pt": "",
          "text_pt": "Assim, ó Pai, possamos oferecer o mesmo dom que vós nos dais."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Enviai o vosso Espírito Santo!"
        },
        {
          "sp_pt": "",
          "text_pt": "O relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza."
        },
        {
          "sp_pt": "",
          "text_pt": "Jesus, na noite antes de sua morte na cruz, pôs-se à mesa com seus apóstolos,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "tomou o pão em suas mãos, e, rezando, deu graças; partiu o pão e o deu a seus amigos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "rubric_pt": "TOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS."
        },
        {
          "rubric_pt": "Mostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração."
        },
        {
          "rubric_pt": "Depois prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Do mesmo modo, no fim da Ceia,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Jesus tomou em suas mãos o cálice com vinho, rezou, de novo, em ação de graças e o deu a seus amigos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "sp_pt": "",
          "text_pt": "TOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM."
        },
        {
          "rubric_pt": "Mostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração."
        },
        {
          "rubric_pt": "Em seguida, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Anunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!"
        },
        {
          "rubric_pt": "ou"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Nesta Eucaristia, nós fazemos com amor o que Jesus mandou e, anunciando a sua morte e ressurreição, vos oferecemos o Pão da vida e o Cálice da salvação. Pai querido, é Jesus que nos conduz a vós; por isso, vos pedimos, recebei-nos com Ele."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Com Jesus, recebei a nossa vida!"
        },
        {
          "sp_pt": "",
          "text_pt": "Pai, que tanto nos amais, deixai-nos aproximar desta mesa e enviai sobre nós o Espírito Santo para que, alimentando-nos com o Corpo e Sangue do vosso Filho, sejamos um só coração e uma só alma."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Fazei de nós um só corpo e um só espírito!"
        },
        {
          "sp_pt": "1C",
          "text_pt": "Senhor, que sempre vos lembrais de todos, nós vos pedimos por aqueles que amamos: o Papa"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": "e o nosso Bispo"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", nossos pais, irmãos, amigos e os que cuidam de nós."
        },
        {
          "sp_pt": "",
          "text_pt": "Lembrai-vos também dos que sofrem em suas dores e andam tristes, e dos que morreram na vossa paz."
        },
        {
          "sp_pt": "",
          "text_pt": "Ó Pai, olhai com carinho o povo cristão e as pessoas do mundo inteiro."
        },
        {
          "sp_pt": "",
          "text_pt": "Diante de tudo o que fazeis em nosso favor por meio de Jesus Cristo, vosso Filho, nós vos bendizemos e louvamos."
        },
        {
          "rubric_pt": "Ergue a patena com a hóstia e o cálice, dizendo:"
        },
        {
          "sp_pt": "CP ou CC",
          "text_pt": "Por Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Amém."
        },
        {
          "rubric_pt": "Segue-se o Rito da Comunhão."
        }
      ],
      "C2": [
        {
          "sp_pt": "",
          "text_pt": "O uso desta Oração Eucarística é restrito às Missas que se celebram só com crianças, isto é, as que ainda não entraram na adolescência, ou àquelas Missas nas quais a maior parte dos participantes é criança."
        },
        {
          "sp_pt": "",
          "text_pt": "O prefácio dessa Oração Eucarística, por sua estrutura e índole peculiar, não pode ser substituído por outros prefácios."
        },
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
          "text_pt": "Demos graças ao Senhor, nosso Deus."
        },
        {
          "sp_pt": "R.",
          "text_pt": "É nosso dever e nossa salvação."
        },
        {
          "sp_pt": "",
          "text_pt": "Ó Pai querido, que tanto nos amais, como é grande a nossa alegria em vos agradecer e com Jesus, na vossa Igreja, cantar vosso louvor."
        },
        {
          "sp_pt": "",
          "text_pt": "Vós nos amastes tanto que criastes para nós este mundo imenso e maravilhoso. Vós nos amais tanto que nos dais vosso Filho Jesus para nos guiar até vós. Vós nos amais tanto que nos reunis em vosso Filho Jesus e, pelo Espírito Santo, nos tornais filhos e filhas da mesma família."
        },
        {
          "sp_pt": "",
          "text_pt": "Por este amor tão grande nós vos agradecemos e com os Anjos e os Santos, que vos adoram, cantamos"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "dizemos"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "a uma só voz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!"
        },
        {
          "rubric_pt": "ou"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CP",
          "text_pt": "Sim, bendito seja Jesus que vós nos enviastes, amigo das crianças e dos pobres. Ele nos ensina a vos amar, ó Pai querido, e amar-nos uns aos outros."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Glória a vós, Senhor, que tanto nos amais!"
        },
        {
          "sp_pt": "",
          "text_pt": "Jesus veio tirar do coração o pecado, a maldade e o ódio que impedem a amizade e não nos deixam ser felizes. Ele prometeu que o Espírito Santo ficaria sempre conosco para vivermos bem unidos a vós como filhos e filhas."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Glória a vós, Senhor, que tanto nos amais!"
        },
        {
          "rubric_pt": "Une as mãos e, estendendo-as sobre as oferendas, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Ó Deus, nosso Pai, enviai vosso Espírito Santo para que estes dons do pão e do vinho"
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos e traça o sinal da cruz, ao mesmo tempo sobre o pão e o cálice, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "se tornem o Corpo"
        },
        {
          "rubric_pt": "✠"
        },
        {
          "sp_pt": "",
          "text_pt": "e o Sangue de nosso Senhor Jesus Cristo."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Enviai o vosso Espírito Santo!"
        },
        {
          "sp_pt": "",
          "text_pt": "O relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza."
        },
        {
          "sp_pt": "",
          "text_pt": "Jesus, na noite antes de sua morte na cruz, nos mostrou como é grande vosso amor. Quando ele estava à mesa com os apóstolos,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "tomou o pão em suas mãos e rezou, louvando e agradecendo. Depois partiu o pão e o deu a seus amigos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "rubric_pt": "TOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS."
        },
        {
          "rubric_pt": "Mostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração."
        },
        {
          "rubric_pt": "Depois prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Do mesmo modo, no fim da Ceia,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Jesus tomou em suas mãos o cálice com vinho, rezou, de novo, em ação de graças e o deu a seus amigos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "sp_pt": "",
          "text_pt": "TOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM."
        },
        {
          "rubric_pt": "Mostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração."
        },
        {
          "rubric_pt": "Em seguida, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Anunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!"
        },
        {
          "rubric_pt": "ou"
        },
        {
          "sp_pt": "",
          "text_pt": "A seguir, o sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Por isso, Pai querido, celebramos a memória da morte e ressurreição de Jesus, Salvador do mundo. Ele mesmo se colocou em nossas mãos para ser este dom de reconciliação e de paz, nosso sacrifício que agora vos oferecemos e pelo qual somos atraídos para vós."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Com Jesus, recebei a nossa vida!"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "1C",
          "text_pt": "Escutai-nos, Senhor nosso Deus, e dai o Espírito do vosso amor aos que participam desta Ceia, para que fiquem sempre mais unidos na vossa Igreja, com o nosso Papa"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", o nosso Bispo"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", os outros bispos e todos aqueles que servem o vosso povo."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Fazei de nós um só corpo e um só espírito!"
        },
        {
          "sp_pt": "2C",
          "text_pt": "Não vos esqueçais daqueles que amamos: nossos pais, parentes, amigos e os que cuidam de nós; e também daqueles que ainda não amamos bastante. Lembrai-vos dos que em paz partiram desta vida"
        },
        {
          "rubric_pt": "(N. N.)"
        },
        {
          "sp_pt": "",
          "text_pt": "; acolhei-os com amor na alegria da vossa casa."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Fazei de nós um só corpo e um só espírito!"
        },
        {
          "sp_pt": "3C",
          "text_pt": "Um dia, enfim, ó Pai, reuni a todos nós em vosso reino, com a Virgem Maria, Mãe de Deus e nossa Mãe, para celebrar a festa que no céu nunca se acaba, onde todos os amigos de Jesus cantam sem cessar o vosso louvor."
        },
        {
          "rubric_pt": "Ergue a patena com a hóstia e o cálice, dizendo:"
        },
        {
          "sp_pt": "CP ou CC",
          "text_pt": "Por Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Amém."
        },
        {
          "rubric_pt": "Segue-se o Rito da Comunhão."
        },
        {
          "sp_pt": "",
          "text_pt": "14x"
        }
      ],
      "C3": [
        {
          "sp_pt": "",
          "text_pt": "O uso desta Oração Eucarística é restrito às Missas que se celebram só com crianças, isto é, as que ainda não entraram na adolescência, ou àquelas Missas nas quais a maior parte dos participantes é criança."
        },
        {
          "sp_pt": "",
          "text_pt": "O prefácio dessa Oração Eucarística, por sua estrutura e índole peculiar, não pode ser substituído por outros prefácios."
        },
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
          "text_pt": "Demos graças ao Senhor, nosso Deus."
        },
        {
          "sp_pt": "R.",
          "text_pt": "É nosso dever e nossa salvação."
        },
        {
          "sp_pt": "",
          "text_pt": "Deus, nosso Pai, nós vos agradecemos, porque nos criastes, a fim de vivermos para vós, amando-nos como irmãos."
        },
        {
          "sp_pt": "",
          "text_pt": "Por vosso dom, podemos viver como amigos e repartir uns com os outros as coisas bonitas que temos e as dificuldades que passamos."
        },
        {
          "sp_pt": "",
          "text_pt": "Porque sois o Deus dos vivos, nos chamastes à vida e quereis que sejamos felizes para sempre. Jesus é o primeiro que vós ressuscitastes dentre os mortos e lhe destes a vida nova. Também a nós prometestes vida sem fim, sem miséria e sem dor."
        },
        {
          "sp_pt": "",
          "text_pt": "Por isso, ó Pai, felizes e agradecidos, em comunhão com todos os que acreditam em vós, com os Santos e os Anjos, exultantes, cantamos"
        },
        {
          "sp_pt": "",
          "text_pt": "("
        },
        {
          "sp_pt": "",
          "text_pt": "dizemos"
        },
        {
          "sp_pt": "",
          "text_pt": ")"
        },
        {
          "sp_pt": "",
          "text_pt": "a uma só voz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Santo, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!"
        },
        {
          "rubric_pt": "ou"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, prossegue:"
        },
        {
          "sp_pt": "CP",
          "text_pt": "Na verdade, ó Pai, vós sois santo, sois muito bom para nós e amais todas as pessoas do mundo."
        },
        {
          "sp_pt": "",
          "text_pt": "Agradecemos, em primeiro lugar, pelo vosso Filho, Jesus Cristo."
        },
        {
          "sp_pt": "",
          "text_pt": "Ele veio ao mundo porque as pessoas se afastaram de vós pelo pecado e não conseguiam mais se entender."
        },
        {
          "sp_pt": "",
          "text_pt": "Ele abriu nossos olhos e ouvidos para vos conhecer como Pai e nos amarmos como irmãos e irmãs."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Glória a vós, ó Pai, que em Cristo nos salvais!"
        },
        {
          "sp_pt": "",
          "text_pt": "Ele nos anunciou a vida plena da ressurreição que viveremos para sempre junto de vós. Ele percorreu, antes de nós, o caminho do amor para que seguíssemos seus passos. Jesus agora nos reúne ao redor deste altar para fazermos o que na última Ceia ele mesmo fez com seus discípulos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Glória a vós, ó Pai, que em Cristo nos salvais!"
        },
        {
          "rubric_pt": "Une as mãos e, estendendo-as sobre as oferendas, diz:"
        },
        {
          "sp_pt": "CC",
          "text_pt": "Ó Pai, vós que sois tão bom, mandai vosso Espírito Santo para santificar estes dons do pão e do vinho."
        },
        {
          "sp_pt": "",
          "text_pt": "une as mãos e traça o sinal da cruz, ao mesmo tempo sobre o pão e o cálice, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "Eles serão para nós o Corpo"
        },
        {
          "rubric_pt": "✠"
        },
        {
          "sp_pt": "",
          "text_pt": "e o Sangue de Jesus Cristo, vosso Filho."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Enviai o vosso Espírito Santo!"
        },
        {
          "sp_pt": "",
          "text_pt": "O relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza."
        },
        {
          "sp_pt": "",
          "text_pt": "Na noite antes de morrer por nós, Jesus pôs-se à mesa com seus apóstolos,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "tomou o pão em suas mãos, e, rezando, deu graças; partiu o pão e o deu a seus amigos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "rubric_pt": "TOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS."
        },
        {
          "rubric_pt": "Mostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração."
        },
        {
          "rubric_pt": "Depois prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Do mesmo modo, no fim da Ceia,"
        },
        {
          "sp_pt": "",
          "text_pt": "toma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Jesus tomou em suas mãos o cálice com vinho, rezou em ação de graças e o deu a seus amigos, dizendo:"
        },
        {
          "sp_pt": "",
          "text_pt": "inclina-se levemente"
        },
        {
          "sp_pt": "",
          "text_pt": "TOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM."
        },
        {
          "rubric_pt": "Mostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração."
        },
        {
          "rubric_pt": "Em seguida, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Mistério da fé!"
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Anunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!"
        },
        {
          "rubric_pt": "ou"
        },
        {
          "sp_pt": "",
          "text_pt": "A seguir, o sacerdote, de braços abertos, diz:"
        },
        {
          "sp_pt": "",
          "text_pt": "Por isso, Pai santo, aqui estamos diante de vós, e, com alegria, celebramos a memória do que Jesus Cristo fez para nossa salvação."
        },
        {
          "sp_pt": "",
          "text_pt": "Neste santo sacrifício, que ele confiou à sua Igreja, celebramos sua morte e ressurreição."
        },
        {
          "sp_pt": "",
          "text_pt": "Pai santo, que estais nos céus, aceitai-nos com vosso Filho amado."
        },
        {
          "sp_pt": "",
          "text_pt": "Ele sofreu livremente a morte por nós; vós, porém, o ressuscitastes."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Com Jesus, recebei a nossa vida!"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Ó Pai, Jesus agora vive sempre junto de vós, mas ao mesmo tempo está aqui conosco. Um dia, ele virá em sua glória e o seu reino não terá fim. Então, ninguém mais vai sofrer, ninguém mais vai chorar, ninguém mais vai ficar triste: o pecado e a morte não mais dominarão."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Glória a vós, ó Pai, que em Cristo nos salvais!"
        },
        {
          "rubric_pt": "O sacerdote, de braços abertos, prossegue:"
        },
        {
          "sp_pt": "",
          "text_pt": "Pai santo, vós nos chamastes para recebermos nesta mesa, com alegria, o Corpo de Cristo. Fortificados por este alimento, possamos agradar-vos sempre mais e pela comunhão do Espírito Santo nos tornemos um só corpo no amor."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Fazei de nós um só corpo e um só espírito!"
        },
        {
          "sp_pt": "1C",
          "text_pt": "Lembrai-vos, ó Pai, do nosso Papa"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": ", do nosso Bispo"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": "e dos outros bispos."
        },
        {
          "rubric_pt": "★"
        },
        {
          "sp_pt": "",
          "text_pt": "No Tempo Pascal o sacerdote diz:"
        },
        {
          "rubric_pt": "★"
        },
        {
          "sp_pt": "",
          "text_pt": "Fazei que os corações dos vossos fiéis sejam repletos com as alegrias da Páscoa e levem estas mesmas alegrias aos que vivem na tristeza."
        },
        {
          "rubric_pt": "★"
        },
        {
          "sp_pt": "",
          "text_pt": "Ajudai os discípulos de Cristo, para que vivam em paz e repartam com todos o dom da alegria."
        },
        {
          "sp_pt": "",
          "text_pt": "Concedei que, um dia, estejamos junto a vós, morando para sempre em vossa casa com Jesus e Maria, sua Mãe, São"
        },
        {
          "rubric_pt": "N."
        },
        {
          "sp_pt": "",
          "text_pt": "e todos os Santos, e com nossos irmãos falecidos."
        },
        {
          "rubric_pt": "Ergue a patena com a hóstia e o cálice, dizendo:"
        },
        {
          "sp_pt": "CP ou CC",
          "text_pt": "Por Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos."
        },
        {
          "rubric_pt": "A assembleia aclama:"
        },
        {
          "sp_pt": "Todos",
          "text_pt": "Amém."
        },
        {
          "rubric_pt": "Segue-se o Rito da Comunhão."
        }
      ]
    },
    "amen": []
  },
  {
    "id": "3.4 lords_prayer",
    "type": "part",
    "header": {
      "pt": "Pai-nosso"
    },
    "lines": [
      {
        "sp_pt": "",
        "text_pt": "Tendo colocado o cálice e a patena sobre o altar, o sacerdote diz, de mãos unidas:"
      },
      {
        "sp_pt": "",
        "text_pt": "Obedientes à palavra do Salvador"
      },
      {
        "sp_pt": "",
        "text_pt": "e formados por seu divino ensinamento,"
      },
      {
        "sp_pt": "",
        "text_pt": "ousamos dizer:"
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "rubric_pt": "Ⓑ"
      },
      {
        "sp_pt": "",
        "text_pt": "Rezemos, com amor e confiança,"
      },
      {
        "sp_pt": "",
        "text_pt": "a oração que o Senhor Jesus nos ensinou:"
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "rubric_pt": "Ⓑ"
      },
      {
        "sp_pt": "",
        "text_pt": "Somos chamados filhos de Deus"
      },
      {
        "sp_pt": "",
        "text_pt": "e realmente o somos,"
      },
      {
        "sp_pt": "",
        "text_pt": "por isso, podemos rezar confiantes:"
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "rubric_pt": "Ⓑ"
      },
      {
        "sp_pt": "",
        "text_pt": "O Senhor nos comunicou o seu Espírito."
      },
      {
        "sp_pt": "",
        "text_pt": "Com a confiança e a liberdade de filhos e filhas, digamos juntos:"
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "rubric_pt": "Ⓑ"
      },
      {
        "sp_pt": "",
        "text_pt": "O banquete da Eucaristia é sinal de reconciliação"
      },
      {
        "sp_pt": "",
        "text_pt": "e vínculo de união fraterna. Unidos como irmãos e irmãs,"
      },
      {
        "sp_pt": "",
        "text_pt": "rezemos, juntos, como o Senhor nos ensinou:"
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "rubric_pt": "Ⓑ"
      },
      {
        "sp_pt": "",
        "text_pt": "Guiados pelo Espírito de Jesus e iluminados pela sabedoria"
      },
      {
        "sp_pt": "",
        "text_pt": "do Evangelho, ousamos dizer:"
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "rubric_pt": "Ⓑ"
      },
      {
        "sp_pt": "",
        "text_pt": "Guiados pelo Espírito Santo, que ora em nós e por nós,"
      },
      {
        "sp_pt": "",
        "text_pt": "elevemos as mãos ao Pai e rezemos juntos a oração"
      },
      {
        "sp_pt": "",
        "text_pt": "que o próprio Jesus nos ensinou:"
      },
      {
        "rubric_pt": "O sacerdote abre os braços e prossegue com o povo:"
      },
      {
        "sp_pt": "",
        "text_pt": "Pai nosso que estais nos céus,"
      },
      {
        "sp_pt": "",
        "text_pt": "santificado seja o vosso nome;"
      },
      {
        "sp_pt": "",
        "text_pt": "venha a nós o vosso reino,"
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
        "rubric_pt": "125."
      },
      {
        "rubric_pt": "O sacerdote prossegue sozinho, de braços abertos:"
      },
      {
        "sp_pt": "",
        "text_pt": "Livrai-nos de todos os males, ó Pai,"
      },
      {
        "sp_pt": "",
        "text_pt": "e dai-nos hoje a vossa paz."
      },
      {
        "sp_pt": "",
        "text_pt": "Ajudados pela vossa misericórdia,"
      },
      {
        "sp_pt": "",
        "text_pt": "sejamos sempre livres do pecado"
      },
      {
        "sp_pt": "",
        "text_pt": "e protegidos de todos os perigos,"
      },
      {
        "sp_pt": "",
        "text_pt": "enquanto"
      },
      {
        "sp_pt": "",
        "text_pt": "aguardamos a feliz esperança"
      },
      {
        "sp_pt": "",
        "text_pt": "e a vinda do Nosso Salvador, Jesus Cristo"
      },
      {
        "sp_pt": "",
        "text_pt": "."
      },
      {
        "rubric_pt": "O sacerdote une as mãos."
      },
      {
        "rubric_pt": "O povo conclui a oração, aclamando:"
      },
      {
        "sp_pt": "",
        "text_pt": "Vosso é o reino,"
      },
      {
        "sp_pt": "",
        "text_pt": "o poder e a glória para sempre."
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
        "rubric_pt": "O sacerdote, de braços abertos, diz em voz alta:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor Jesus Cristo,"
      },
      {
        "sp_pt": "",
        "text_pt": "dissestes aos vossos Apóstolos:"
      },
      {
        "sp_pt": "",
        "text_pt": "eu vos deixo a paz, eu vos dou a minha paz."
      },
      {
        "sp_pt": "",
        "text_pt": "Não olheis os nossos pecados,"
      },
      {
        "sp_pt": "",
        "text_pt": "mas a fé que anima vossa Igreja;"
      },
      {
        "sp_pt": "",
        "text_pt": "dai-lhe, segundo o vosso desejo,"
      },
      {
        "sp_pt": "",
        "text_pt": "a paz e a unidade."
      },
      {
        "rubric_pt": "O sacerdote une as mãos e conclui:"
      },
      {
        "sp_pt": "",
        "text_pt": "Vós, que sois Deus, com o Pai e o Espírito Santo."
      },
      {
        "rubric_pt": "O povo responde:"
      },
      {
        "sp_pt": "Todos",
        "text_pt": "Amém."
      },
      {
        "rubric_pt": "127."
      },
      {
        "rubric_pt": "O sacerdote, voltado para o povo, estendendo e unindo as mãos, acrescenta:"
      },
      {
        "sp_pt": "",
        "text_pt": "A paz do Senhor esteja sempre convosco."
      },
      {
        "rubric_pt": "O povo responde:"
      },
      {
        "sp_pt": "Todos",
        "text_pt": "O amor de Cristo nos uniu."
      },
      {
        "rubric_pt": "128."
      },
      {
        "rubric_pt": "Em seguida, se for oportuno, o diácono ou o sacerdote diz:"
      },
      {
        "sp_pt": "",
        "text_pt": "Irmãos e irmãs,"
      },
      {
        "sp_pt": "",
        "text_pt": "saudai-vos em Cristo Jesus."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "rubric_pt": "Ⓑ"
      },
      {
        "sp_pt": "",
        "text_pt": "Como filhos e filhas do Deus da paz,"
      },
      {
        "sp_pt": "",
        "text_pt": "saudai-vos com um gesto de comunhão fraterna."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "rubric_pt": "Ⓑ"
      },
      {
        "sp_pt": "",
        "text_pt": "Em Jesus, que nos tornou todos irmãos e irmãs,"
      },
      {
        "sp_pt": "",
        "text_pt": "saudai-vos com um sinal de reconciliação e de paz."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "rubric_pt": "Ⓑ"
      },
      {
        "sp_pt": "",
        "text_pt": "No Espírito de Cristo ressuscitado,"
      },
      {
        "sp_pt": "",
        "text_pt": "saudai-vos com um sinal de paz."
      },
      {
        "sp_pt": "",
        "text_pt": "E, todos segundo o costume do lugar, manifestam uns aos outros a paz, a comunhão e a caridade; o sacerdote dá a paz ao diácono e a outros ministros."
      }
    ]
  },
  {
    "id": "3.6 lamb",
    "type": "part",
    "header": {
      "pt": "Cordeiro de Deus"
    },
    "lines": [
      {
        "rubric_pt": "Em seguida, o sacerdote parte o pão consagrado sobre a patena e coloca um pedaço no cálice, rezando em silêncio:"
      },
      {
        "sp_pt": "",
        "text_pt": "Esta união do Corpo e do Sangue de Jesus,"
      },
      {
        "sp_pt": "",
        "text_pt": "o Cristo e Senhor nosso, que vamos receber,"
      },
      {
        "sp_pt": "",
        "text_pt": "nos faça participar da vida eterna."
      },
      {
        "rubric_pt": "130."
      },
      {
        "rubric_pt": "Enquanto isso, canta-se ou recita-se:"
      },
      {
        "sp_pt": "",
        "text_pt": "Cordeiro de Deus,"
      },
      {
        "sp_pt": "",
        "text_pt": "que tirais o pecado do mundo,"
      },
      {
        "sp_pt": "",
        "text_pt": "tende piedade de nós."
      },
      {
        "sp_pt": "",
        "text_pt": "Cordeiro de Deus,"
      },
      {
        "sp_pt": "",
        "text_pt": "que tirais o pecado do mundo,"
      },
      {
        "sp_pt": "",
        "text_pt": "tende piedade de nós."
      },
      {
        "sp_pt": "",
        "text_pt": "Cordeiro de Deus,"
      },
      {
        "sp_pt": "",
        "text_pt": "que tirais o pecado do mundo,"
      },
      {
        "sp_pt": "",
        "text_pt": "dai-nos a paz."
      },
      {
        "sp_pt": "",
        "text_pt": "Essas palavras podem ser repetidas ainda mais vezes, se a fração do pão se prolongar. Contudo, na última vez se diz:"
      },
      {
        "sp_pt": "",
        "text_pt": "dai-nos a paz"
      },
      {
        "sp_pt": "",
        "text_pt": "."
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
        "rubric_pt": "O sacerdote, de mãos unidas, reza em silêncio:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor Jesus Cristo, Filho do Deus vivo,"
      },
      {
        "sp_pt": "",
        "text_pt": "que, cumprindo a vontade do Pai"
      },
      {
        "sp_pt": "",
        "text_pt": "e agindo com o Espírito Santo,"
      },
      {
        "sp_pt": "",
        "text_pt": "pela vossa morte destes vida ao mundo,"
      },
      {
        "sp_pt": "",
        "text_pt": "livrai-me por este vosso santíssimo Corpo e Sangue"
      },
      {
        "sp_pt": "",
        "text_pt": "dos meus pecados e de todo mal;"
      },
      {
        "sp_pt": "",
        "text_pt": "dai-me cumprir sempre a vossa vontade e jamais separar-me de vós."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor Jesus Cristo,"
      },
      {
        "sp_pt": "",
        "text_pt": "o vosso Corpo e o vosso Sangue,"
      },
      {
        "sp_pt": "",
        "text_pt": "que vou receber,"
      },
      {
        "sp_pt": "",
        "text_pt": "não se tornem causa de juízo e condenação;"
      },
      {
        "sp_pt": "",
        "text_pt": "mas, por vossa bondade, sejam proteção e remédio para minha vida."
      },
      {
        "rubric_pt": "132."
      },
      {
        "rubric_pt": "O sacerdote faz genuflexão, toma a hóstia na mão e, elevando-a um pouco sobre a patena ou sobre o cálice, diz em voz alta, voltado para o povo:"
      },
      {
        "sp_pt": "",
        "text_pt": "Felizes os convidados para a Ceia do Senhor."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "rubric_pt": "Ⓑ"
      },
      {
        "sp_pt": "",
        "text_pt": "Quem come minha carne e bebe meu sangue"
      },
      {
        "sp_pt": "",
        "text_pt": "permanece em mim e eu nele."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "rubric_pt": "Ⓑ"
      },
      {
        "sp_pt": "",
        "text_pt": "Provai e vede como o Senhor é bom;"
      },
      {
        "sp_pt": "",
        "text_pt": "feliz de quem nele encontra seu refúgio."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "rubric_pt": "Ⓑ"
      },
      {
        "sp_pt": "",
        "text_pt": "Eu sou o Pão vivo, que desceu do céu;"
      },
      {
        "sp_pt": "",
        "text_pt": "se alguém come deste Pão,"
      },
      {
        "sp_pt": "",
        "text_pt": "viverá eternamente."
      },
      {
        "rubric_pt": "Ou:"
      },
      {
        "rubric_pt": "Ⓑ"
      },
      {
        "sp_pt": "",
        "text_pt": "Felizes os convidados para o banquete nupcial do Cordeiro."
      },
      {
        "rubric_pt": "ou"
      },
      {
        "sp_pt": "",
        "text_pt": "Eis o Cordeiro de Deus,"
      },
      {
        "sp_pt": "",
        "text_pt": "que tira o pecado do mundo."
      },
      {
        "sp_pt": "",
        "text_pt": "E acrescenta, com o povo, uma só vez:"
      },
      {
        "sp_pt": "",
        "text_pt": "Senhor, eu não sou digno"
      },
      {
        "sp_pt": "",
        "text_pt": "("
      },
      {
        "sp_pt": "",
        "text_pt": "a"
      },
      {
        "sp_pt": "",
        "text_pt": ")"
      },
      {
        "sp_pt": "",
        "text_pt": "de que entreis em minha morada,"
      },
      {
        "sp_pt": "",
        "text_pt": "mas dizei uma palavra e serei salvo"
      },
      {
        "sp_pt": "",
        "text_pt": "("
      },
      {
        "sp_pt": "",
        "text_pt": "a"
      },
      {
        "sp_pt": "",
        "text_pt": ")"
      },
      {
        "sp_pt": "",
        "text_pt": "."
      },
      {
        "rubric_pt": "133."
      },
      {
        "rubric_pt": "O sacerdote, voltado para o altar, reza em silêncio:"
      },
      {
        "sp_pt": "",
        "text_pt": "O Corpo de Cristo"
      },
      {
        "sp_pt": "",
        "text_pt": "me guarde para a vida eterna."
      },
      {
        "sp_pt": "",
        "text_pt": "E reverentemente comunga o Corpo de Cristo."
      },
      {
        "rubric_pt": "Depois, segura o cálice e reza em silêncio:"
      },
      {
        "sp_pt": "",
        "text_pt": "O Sangue de Cristo"
      },
      {
        "sp_pt": "",
        "text_pt": "me guarde para a vida eterna."
      },
      {
        "sp_pt": "",
        "text_pt": "E reverentemente comunga o Sangue de Cristo."
      },
      {
        "rubric_pt": "134."
      },
      {
        "rubric_pt": "Em seguida, toma a patena ou o cibório, aproxima-se dos que vão comungar e mostra a hóstia um pouco elevada a cada um deles, dizendo:"
      },
      {
        "sp_pt": "",
        "text_pt": "O Corpo de Cristo."
      },
      {
        "rubric_pt": "O que vai comungar responde:"
      },
      {
        "sp_pt": "",
        "text_pt": "Amém."
      },
      {
        "sp_pt": "",
        "text_pt": "E comunga."
      },
      {
        "rubric_pt": "O diácono ou o ministro extraordinário da distribuição da sagrada Comunhão, ao distribuir a sagrada Comunhão, procede do mesmo modo."
      },
      {
        "rubric_pt": "135."
      },
      {
        "rubric_pt": "Se houver Comunhão sob as duas espécies, observe-se o rito prescrito na Instrução Geral sobre o Missal Romano, em n."
      },
      {
        "sp_pt": "",
        "text_pt": "281-287"
      },
      {
        "sp_pt": "",
        "text_pt": "."
      },
      {
        "rubric_pt": "136."
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
        "rubric_pt": "Enquanto o sacerdote comunga o Corpo de Cristo, inicia-se o canto da comunhão."
      },
      {
        "rubric_pt": "137."
      },
      {
        "sp_pt": "",
        "text_pt": "Terminada a Comunhão, o sacerdote, o diácono ou acólito purifica a patena e o cálice."
      },
      {
        "rubric_pt": "Enquanto se faz a purificação, o sacerdote reza em silêncio:"
      },
      {
        "sp_pt": "",
        "text_pt": "Fazei, Senhor,"
      },
      {
        "sp_pt": "",
        "text_pt": "que conservemos num coração puro"
      },
      {
        "sp_pt": "",
        "text_pt": "o que a nossa boca recebeu."
      },
      {
        "sp_pt": "",
        "text_pt": "E que esta dádiva temporal"
      },
      {
        "sp_pt": "",
        "text_pt": "se transforme para nós em remédio eterno."
      },
      {
        "rubric_pt": "138."
      },
      {
        "rubric_pt": "Então o sacerdote pode voltar à cadeira. É aconselhável guardar algum tempo de silêncio sagrado ou proferir um salmo ou cântico de louvor."
      },
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
      "pt": "Depois da comunhão"
    },
    "lines": [
      {
        "rubric_pt": "139."
      },
      {
        "rubric_pt": "Em seguida, junto ao altar ou à cadeira, o sacerdote, de pé, voltado para o povo, diz de mãos unidas:"
      },
      {
        "sp_pt": "",
        "text_pt": "Oremos."
      },
      {
        "sp_pt": "",
        "text_pt": "E todos, com o sacerdote, rezam algum tempo em silêncio, se ainda não o fizeram. Em seguida, o sacerdote, de braços abertos, profere a oração Depois da comunhão."
      },
      {
        "sp_pt": "",
        "text_pt": "(Oração depois da comunhão do dia)"
      },
      {
        "sp_pt": "Todos",
        "text_pt": "Amém."
      }
    ]
  },
  {
    "id": "4. THE CONCLUDING RITES",
    "type": "section",
    "pt": "Ritos finais"
  },
  {
    "id": "4.1 announcement",
    "type": "part",
    "header": {
      "pt": "Avisos"
    },
    "lines": [
      {
        "rubric_pt": "Se necessário, fazem-se breves comunicações ao povo."
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
          "pt": "Bênção simples"
        },
        "lines": [
          {
            "rubric_pt": "Em seguida, faz-se a despedida. O sacerdote, voltado para o povo, abre os braços e diz:"
          },
          {
            "sp_pt": "",
            "text_pt": "O Senhor esteja convosco."
          },
          {
            "rubric_pt": "O povo responde:"
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
            "text_pt": "Pai e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito Santo."
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Amém."
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
            "text_pt": "Na Missa pontifical, o celebrante recebe a mitra e, estendendo as mãos, diz:"
          },
          {
            "sp_pt": "",
            "text_pt": "O Senhor esteja convosco."
          },
          {
            "sp_pt": "",
            "text_pt": "Todos respondem:"
          },
          {
            "sp_pt": "",
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
            "sp_pt": "",
            "text_pt": "Todos respondem:"
          },
          {
            "sp_pt": "",
            "text_pt": "Agora e para sempre."
          },
          {
            "rubric_pt": "O celebrante diz:"
          },
          {
            "sp_pt": "C.",
            "text_pt": "Nossa proteção está no nome do Senhor."
          },
          {
            "sp_pt": "",
            "text_pt": "Todos respondem:"
          },
          {
            "sp_pt": "",
            "text_pt": "Que fez o céu e a terra."
          },
          {
            "rubric_pt": "Então o celebrante recebe o báculo, se o utilizar, e diz:"
          },
          {
            "sp_pt": "",
            "text_pt": "Abençoe-vos Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "e fazendo três vezes o sinal da cruz sobre o povo, acrescenta:"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "Santo."
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Amém."
          }
        ]
      },
      "C": {
        "label": {
          "pt": "Bênçãos solenes"
        },
        "lines": [
          {
            "rubric_pt": "BÊNÇÃOS SOLENES"
          },
          {
            "sp_pt": "",
            "text_pt": "As seguintes bênçãos podem ser usadas, à vontade do sacerdote, no fim da celebração da Missa, de uma celebração da Palavra, da Liturgia das Horas ou dos Sacramentos."
          },
          {
            "rubric_pt": "O sacerdote, voltado para o povo, abrindo os braços, diz:"
          },
          {
            "sp_pt": "C.",
            "text_pt": "O Senhor esteja convosco"
          },
          {
            "sp_pt": "",
            "text_pt": "."
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Ele está no meio de nós"
          },
          {
            "sp_pt": "",
            "text_pt": "."
          },
          {
            "rubric_pt": "O diácono"
          },
          {
            "rubric_pt": "ou, na falta dele, o próprio sacerdote pode fazer o convite com estas ou outras palavras:"
          },
          {
            "sp_pt": "",
            "text_pt": "lnclinai-vos para receber a bênção"
          },
          {
            "sp_pt": "",
            "text_pt": ". Em seguida, o sacerdote, estendendo as mãos sobre o povo, profere a bênção e todos respondem:"
          },
          {
            "sp_pt": "",
            "text_pt": "Amém"
          },
          {
            "sp_pt": "",
            "text_pt": "."
          },
          {
            "sp_pt": "",
            "text_pt": "I. Nas celebrações de cada tempo do Ano Litúrgico"
          },
          {
            "rubric_pt": "1."
          },
          {
            "sp_pt": "",
            "text_pt": "Advento"
          },
          {
            "sp_pt": "",
            "text_pt": "O Deus onipotente e misericordioso"
          },
          {
            "sp_pt": "",
            "text_pt": "vos santifique com o esplendor do advento do seu Filho,"
          },
          {
            "sp_pt": "",
            "text_pt": "em cuja vinda credes e cuja volta esperais,"
          },
          {
            "sp_pt": "",
            "text_pt": "e derrame sobre vós as suas bênçãos."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Durante esta vida, Deus vos torne"
          },
          {
            "sp_pt": "",
            "text_pt": "firmes na fé,"
          },
          {
            "sp_pt": "",
            "text_pt": "alegres na esperança"
          },
          {
            "sp_pt": "",
            "text_pt": "e solícitos na caridade."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E vós, que vos alegrais com fé e devoção"
          },
          {
            "sp_pt": "",
            "text_pt": "pela vinda, segundo a carne, do nosso Redentor,"
          },
          {
            "sp_pt": "",
            "text_pt": "sejais recompensados com o prêmio da vida eterna,"
          },
          {
            "sp_pt": "",
            "text_pt": "quando ele vier de novo na majestado da sua glória."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E a bênção de Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "desça sobre vós e permaneça para sempre."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "2."
          },
          {
            "sp_pt": "",
            "text_pt": "Natal do Senhor"
          },
          {
            "sp_pt": "",
            "text_pt": "O Deus de infinita bondade,"
          },
          {
            "sp_pt": "",
            "text_pt": "que, pela encarnação do seu Filho,"
          },
          {
            "sp_pt": "",
            "text_pt": "dissipou as trevas do mundo"
          },
          {
            "sp_pt": "",
            "text_pt": "e, com seu glorioso nascimento,"
          },
          {
            "sp_pt": "",
            "text_pt": "inundou de luz esta noite santíssima"
          },
          {
            "sp_pt": "",
            "text_pt": "("
          },
          {
            "sp_pt": "",
            "text_pt": "este dia santíssimo"
          },
          {
            "sp_pt": "",
            "text_pt": ")"
          },
          {
            "sp_pt": "",
            "text_pt": ","
          },
          {
            "sp_pt": "",
            "text_pt": "expulse dos vossos corações as trevas dos vícios"
          },
          {
            "sp_pt": "",
            "text_pt": "e vos ilumine com a luz das virtudes."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Aquele que anunciou aos pastores pelo anjo"
          },
          {
            "sp_pt": "",
            "text_pt": "a grande alegria do nascimento do Salvador,"
          },
          {
            "sp_pt": "",
            "text_pt": "faça transbordar de alegria vossos corações"
          },
          {
            "sp_pt": "",
            "text_pt": "e vos torne mensageiros do seu Evangelho."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Aquele que, pela encarnação de seu Filho, uniu a terra ao céu,"
          },
          {
            "sp_pt": "",
            "text_pt": "vos cumule com os dons da sua paz e da sua benevolência"
          },
          {
            "sp_pt": "",
            "text_pt": "e vos torne participantes da Igreja celeste."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E a bênção de Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "desça sobre vós e permaneça para sempre."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "3."
          },
          {
            "sp_pt": "",
            "text_pt": "Início do ano"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus, fonte e origem de toda bênção,"
          },
          {
            "sp_pt": "",
            "text_pt": "vos conceda a sua graça,"
          },
          {
            "sp_pt": "",
            "text_pt": "vos abençoe abundantemente"
          },
          {
            "sp_pt": "",
            "text_pt": "e vos guarde sãos e salvos"
          },
          {
            "sp_pt": "",
            "text_pt": "todos os dias deste ano."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Ele vos conserve íntegros na fé,"
          },
          {
            "sp_pt": "",
            "text_pt": "inabaláveis na esperança"
          },
          {
            "sp_pt": "",
            "text_pt": "e perseverantes até o fim na caridade."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Ele disponha em sua paz vossos dias e vossas ações,"
          },
          {
            "sp_pt": "",
            "text_pt": "atenda sempre as vossas preces"
          },
          {
            "sp_pt": "",
            "text_pt": "e vos conduza felizes à vida eterna."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E a bênção de Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "desça sobre vós e permaneça para sempre."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "4."
          },
          {
            "sp_pt": "",
            "text_pt": "Epifania do Senhor"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus, que vos chamou das trevas à sua luz admirável,"
          },
          {
            "sp_pt": "",
            "text_pt": "derrame benigno sobre vós as suas bênçãos"
          },
          {
            "sp_pt": "",
            "text_pt": "e confirme os vossos corações na fé, na esperança e na caridade."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Porque seguis confiantes o Cristo,"
          },
          {
            "sp_pt": "",
            "text_pt": "que hoje se manifestou ao mundo"
          },
          {
            "sp_pt": "",
            "text_pt": "como luz que ilumina as trevas,"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus vos torne também uma luz"
          },
          {
            "sp_pt": "",
            "text_pt": "para os vossos irmãos e irmãs."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Terminada a vossa peregrinação,"
          },
          {
            "sp_pt": "",
            "text_pt": "possais chegar ao Cristo Senhor, luz da luz,"
          },
          {
            "sp_pt": "",
            "text_pt": "que os magos procuravam guiados pela estrela"
          },
          {
            "sp_pt": "",
            "text_pt": "e com grande alegria encontraram."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E a bênção de Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "desça sobre vós e permaneça para sempre."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "5."
          },
          {
            "sp_pt": "",
            "text_pt": "Paixão do Senhor"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus, o Pai de misericórdia,"
          },
          {
            "sp_pt": "",
            "text_pt": "que vos deu um exemplo de amor na paixão do seu Filho,"
          },
          {
            "sp_pt": "",
            "text_pt": "vos conceda, pelo vosso serviço a Deus e ao próximo,"
          },
          {
            "sp_pt": "",
            "text_pt": "o dom inefável da sua bênção."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Deus que, pela morte do Filho na cruz"
          },
          {
            "sp_pt": "",
            "text_pt": "nos livrou da morte eterna,"
          },
          {
            "sp_pt": "",
            "text_pt": "vos conduza à vida que não tem fim."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Deus torne participantes da ressurreição de Cristo"
          },
          {
            "sp_pt": "",
            "text_pt": "a vós que seguistes o seu testemunho de humildade."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E a bênção de Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "desça sobre vós e permaneça para sempre."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "6."
          },
          {
            "sp_pt": "",
            "text_pt": "Tempo Pascal"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus que, pela ressurreição do seu Filho único,"
          },
          {
            "sp_pt": "",
            "text_pt": "vos deu a graça da redenção e vos tornou seus filhos,"
          },
          {
            "sp_pt": "",
            "text_pt": "vos conceda a alegria de sua bênção."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Deus que, pela redenção de Cristo,"
          },
          {
            "sp_pt": "",
            "text_pt": "vos concedeu o dom da verdadeira liberdade,"
          },
          {
            "sp_pt": "",
            "text_pt": "por sua misericórdia vos torne participantes da herança eterna."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E, vivendo agora retamente,"
          },
          {
            "sp_pt": "",
            "text_pt": "possais no céu unir-vos a Deus,"
          },
          {
            "sp_pt": "",
            "text_pt": "para o qual, pela fé, já ressuscitastes no Batismo."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E a bênção de Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "desça sobre vós e permaneça para sempre."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "7."
          },
          {
            "sp_pt": "",
            "text_pt": "Ascensão do Senhor"
          },
          {
            "sp_pt": "",
            "text_pt": "Abençoe-vos o Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "cujo Filho Unigênito hoje subiu ao mais alto dos céus,"
          },
          {
            "sp_pt": "",
            "text_pt": "e vos abriu o caminho para onde ele mesmo está."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Deus vos conceda que o Cristo,"
          },
          {
            "sp_pt": "",
            "text_pt": "assim como se manifestou aos discípulos após a ressurreição,"
          },
          {
            "sp_pt": "",
            "text_pt": "vos apareça em sua eterna benevolência,"
          },
          {
            "sp_pt": "",
            "text_pt": "quando vier para o julgamento."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E vós, crendo que o Cristo"
          },
          {
            "sp_pt": "",
            "text_pt": "está sentado com o Pai em sua glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "possais experimentar, conforme sua promessa,"
          },
          {
            "sp_pt": "",
            "text_pt": "a alegria de permanecer com ele até o fim dos tempos."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E a bênção de Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "desça sobre vós e permaneça para sempre."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "8."
          },
          {
            "sp_pt": "",
            "text_pt": "Espírito Santo"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus, o Pai das luzes,"
          },
          {
            "sp_pt": "",
            "text_pt": "que iluminou os corações dos discípulos,"
          },
          {
            "sp_pt": "",
            "text_pt": "derramando sobre eles o Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "vos conceda a alegria de sua bênção"
          },
          {
            "sp_pt": "",
            "text_pt": "e a plenitude dos dons do mesmo Espírito."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Aquele fogo, descido de modo admirável sobre os discípulos,"
          },
          {
            "sp_pt": "",
            "text_pt": "por seu poder purifique os vossos corações de todo mal"
          },
          {
            "sp_pt": "",
            "text_pt": "e vos ilumine com o explendor da sua luz."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Aquele que na proclamação de uma só fé"
          },
          {
            "sp_pt": "",
            "text_pt": "reuniu a diversidade das línguas"
          },
          {
            "sp_pt": "",
            "text_pt": "vos faça perseverar na mesma fé"
          },
          {
            "sp_pt": "",
            "text_pt": "e por ela passar da esperança à plena visão."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E a bênção de Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "desça sobre vós e permaneça para sempre."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "9."
          },
          {
            "sp_pt": "",
            "text_pt": "Tempo Comum, I (Bênção de Aarão: Nm 6, 24-26)"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus vos abençoe e vos guarde."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Ele vos mostre a sua face e se compadeça de vós."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Volva para vós o seu olhar e vos dê a sua paz."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E a bênção de Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "desça sobre vós e permaneça para sempre."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "10."
          },
          {
            "sp_pt": "",
            "text_pt": "Tempo comum, II (Fl 4, 7)"
          },
          {
            "sp_pt": "",
            "text_pt": "A paz de Deus, que supera todo entendimento,"
          },
          {
            "sp_pt": "",
            "text_pt": "guarde vossos corações e vossas mentes"
          },
          {
            "sp_pt": "",
            "text_pt": "no conhecimento e no amor de Deus"
          },
          {
            "sp_pt": "",
            "text_pt": "e de seu Filho, nosso Senhor Jesus Cristo."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E a bênção de Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "desça sobre vós e permaneça para sempre."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "11."
          },
          {
            "sp_pt": "",
            "text_pt": "Tempo comum, III"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus todo-poderoso vos abençoe na sua bondade"
          },
          {
            "sp_pt": "",
            "text_pt": "e infunda em vós a sabedoria da salvação."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Sempre vos alimente com os ensinamentos da fé"
          },
          {
            "sp_pt": "",
            "text_pt": "e vos faça perseverar nas boas obras."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Oriente para ele os vossos passos"
          },
          {
            "sp_pt": "",
            "text_pt": "e vos mostre o caminho da caridade e da paz."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E a bênção de Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "desça sobre vós e permaneça para sempre."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "12."
          },
          {
            "sp_pt": "",
            "text_pt": "Tempo comum, IV"
          },
          {
            "sp_pt": "",
            "text_pt": "O Deus de toda consolação"
          },
          {
            "sp_pt": "",
            "text_pt": "disponha na sua paz os vossos dias"
          },
          {
            "sp_pt": "",
            "text_pt": "e vos conceda os dons da sua bênção."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Sempre vos liberte de toda aflição"
          },
          {
            "sp_pt": "",
            "text_pt": "e confirme os vossos corações em seu amor."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E assim, ricos em esperança, fé e caridade,"
          },
          {
            "sp_pt": "",
            "text_pt": "possais viver praticando o bem"
          },
          {
            "sp_pt": "",
            "text_pt": "e chegar felizes à vida eterna."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E a bênção de Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "desça sobre vós e permaneça para sempre."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "13."
          },
          {
            "sp_pt": "",
            "text_pt": "Tempo comum, V"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus todo-poderoso"
          },
          {
            "sp_pt": "",
            "text_pt": "vos livre sempre de toda adversidade"
          },
          {
            "sp_pt": "",
            "text_pt": "e derrame benigno sobre vós os dons da sua bênção."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Torne os vossos corações atentos à sua palavra,"
          },
          {
            "sp_pt": "",
            "text_pt": "a fim de que transbordeis de alegria divina."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Assim, abraçando o bem e a justiça,"
          },
          {
            "sp_pt": "",
            "text_pt": "possais correr sempre"
          },
          {
            "sp_pt": "",
            "text_pt": "pelo caminho dos mandamentos divinos"
          },
          {
            "sp_pt": "",
            "text_pt": "e tornar-vos coerdeiros dos santos."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E a bênção de Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "desça sobre vós e permaneça para sempre."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "14."
          },
          {
            "sp_pt": "",
            "text_pt": "Tempo comum, VI (2Ts 2, 16-17)"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus vos abençoe com toda bênção celeste,"
          },
          {
            "sp_pt": "",
            "text_pt": "para serdes sempre santos e irrepreensíveis em sua presença;"
          },
          {
            "sp_pt": "",
            "text_pt": "derrame sobre vós abundantemente as riquezas da sua glória,"
          },
          {
            "sp_pt": "",
            "text_pt": "vos instrua com a palavra da verdade,"
          },
          {
            "sp_pt": "",
            "text_pt": "vos eduque pelo Evangelho da salvação"
          },
          {
            "sp_pt": "",
            "text_pt": "e vos enriqueça com o amor fraterno, por Cristo nosso Senhor."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E a bênção de Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "desça sobre vós e permaneça para sempre."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "II. Nas celebrações dos Santos"
          },
          {
            "rubric_pt": "15."
          },
          {
            "sp_pt": "",
            "text_pt": "Bem-aventurada Virgem Maria"
          },
          {
            "sp_pt": "",
            "text_pt": "O Deus de bondade que,"
          },
          {
            "sp_pt": "",
            "text_pt": "pelo Filho da Virgem Maria, quis salvar o gênero humano"
          },
          {
            "sp_pt": "",
            "text_pt": "vos enriqueça com sua bênção."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Seja-vos dado sentir sempre e por toda parte"
          },
          {
            "sp_pt": "",
            "text_pt": "a proteção da Virgem,"
          },
          {
            "sp_pt": "",
            "text_pt": "por quem recebestes o autor da vida."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E vós, reunidos hoje para celebrar com fervor sua solenidade,"
          },
          {
            "sp_pt": "",
            "text_pt": "possais colher a alegria espiritual e o prêmio eterno."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E a bênção de Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "desça sobre vós e permaneça para sempre."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "16."
          },
          {
            "sp_pt": "",
            "text_pt": "Santos Pedro e Paulo"
          },
          {
            "sp_pt": "",
            "text_pt": "Abençoe-vos o Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "que vos deu por fundamento aquela fé"
          },
          {
            "sp_pt": "",
            "text_pt": "proclamada com vigor pelo Apóstolo Pedro"
          },
          {
            "sp_pt": "",
            "text_pt": "e sobre a qual se edificou a Igreja."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Ele, que vos instruiu pela incansável pregação do apóstolo Paulo,"
          },
          {
            "sp_pt": "",
            "text_pt": "vos ensine por seu exemplo"
          },
          {
            "sp_pt": "",
            "text_pt": "a sempre atrair para Cristo novos irmãos."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Pedro, pelo poder das chaves, Paulo, pela força da palavra,"
          },
          {
            "sp_pt": "",
            "text_pt": "e ambos, por sua intercessão,"
          },
          {
            "sp_pt": "",
            "text_pt": "nos conduzam àquela pátria, onde chegaram merecidamente"
          },
          {
            "sp_pt": "",
            "text_pt": "um pela cruz e outro pela espada."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E a bênção de Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "desça sobre vós e permaneça para sempre."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "17."
          },
          {
            "sp_pt": "",
            "text_pt": "Santos Apóstolos"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus, que vos firmou na fé apostólica,"
          },
          {
            "sp_pt": "",
            "text_pt": "vos abençoe pelos gloriosos méritos e a intercessão"
          },
          {
            "sp_pt": "",
            "text_pt": "dos santos Apóstolos"
          },
          {
            "rubric_pt": "N."
          },
          {
            "sp_pt": "",
            "text_pt": "e"
          },
          {
            "rubric_pt": "N. ("
          },
          {
            "sp_pt": "",
            "text_pt": "do Santo Apóstolo"
          },
          {
            "rubric_pt": "N.)"
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Aquele que vos quis instruir"
          },
          {
            "sp_pt": "",
            "text_pt": "pela doutrina e o exemplo dos Apóstolos"
          },
          {
            "sp_pt": "",
            "text_pt": "vos torne, por sua proteção,"
          },
          {
            "sp_pt": "",
            "text_pt": "testemunhas da verdade para todos."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Pela intercessão dos Apóstolos,"
          },
          {
            "sp_pt": "",
            "text_pt": "que vos deram por sua pregação a firmeza da fé,"
          },
          {
            "sp_pt": "",
            "text_pt": "possais alcançar a herança eterna."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E a bênção de Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "desça sobre vós e permaneça para sempre."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "Ⓑ Na festa de um Santo"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus, nosso Pai, que hoje nos reuniu para celebrar"
          },
          {
            "sp_pt": "",
            "text_pt": "a festa de São"
          },
          {
            "rubric_pt": "N."
          },
          {
            "sp_pt": "",
            "text_pt": ","
          },
          {
            "sp_pt": "",
            "text_pt": "("
          },
          {
            "sp_pt": "",
            "text_pt": "padroeiro de nossa Comunidade,"
          },
          {
            "rubric_pt": "ou"
          },
          {
            "sp_pt": "",
            "text_pt": "Paróquia,"
          },
          {
            "rubric_pt": "ou"
          },
          {
            "sp_pt": "",
            "text_pt": "Diocese,"
          },
          {
            "sp_pt": "",
            "text_pt": ")"
          },
          {
            "sp_pt": "",
            "text_pt": "vos abençoe, vos proteja de todo o mal"
          },
          {
            "sp_pt": "",
            "text_pt": "e vos confirme na sua paz."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "O Cristo Senhor,"
          },
          {
            "sp_pt": "",
            "text_pt": "que manifestou em São"
          },
          {
            "rubric_pt": "N."
          },
          {
            "sp_pt": "",
            "text_pt": "a força renovadora da Páscoa,"
          },
          {
            "sp_pt": "",
            "text_pt": "vos torne testemunhas do seu Evangelho."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "O Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "que em São"
          },
          {
            "rubric_pt": "N."
          },
          {
            "sp_pt": "",
            "text_pt": "nos ofereceu um sinal de caridade divina,"
          },
          {
            "sp_pt": "",
            "text_pt": "vos torne capazes de criar na Igreja"
          },
          {
            "sp_pt": "",
            "text_pt": "uma verdadeira comunhão de fé e amor."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E a bênção de Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "desça sobre vós e permaneça para sempre."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "18."
          },
          {
            "sp_pt": "",
            "text_pt": "Todos os Santos"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus, glória e exultação dos Santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "que vos deu a graça de tão exímios intercessores,"
          },
          {
            "sp_pt": "",
            "text_pt": "vos abençoe e para sempre."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Libertos por sua intercessão dos males presentes,"
          },
          {
            "sp_pt": "",
            "text_pt": "e estimulados pelo exemplo de suas vidas santas,"
          },
          {
            "sp_pt": "",
            "text_pt": "estejais constantemente a serviço"
          },
          {
            "sp_pt": "",
            "text_pt": "de Deus e dos irmãos."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E assim, com todos eles,"
          },
          {
            "sp_pt": "",
            "text_pt": "vos seja dado gozar a felicidade daquela pátria,"
          },
          {
            "sp_pt": "",
            "text_pt": "na qual a Igreja exulta eternamente"
          },
          {
            "sp_pt": "",
            "text_pt": "pela comunhão gloriosa de seu filhos com os cidadãos do céu."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E a bênção de Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "desça sobre vós e permaneça para sempre."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "III. Outras bênçãos"
          },
          {
            "rubric_pt": "19."
          },
          {
            "sp_pt": "",
            "text_pt": "Dedicação de Igreja"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus, o Senhor do céu e da terra,"
          },
          {
            "sp_pt": "",
            "text_pt": "que hoje vos reuniu para a dedicação desta igreja,"
          },
          {
            "sp_pt": "",
            "text_pt": "("
          },
          {
            "sp_pt": "",
            "text_pt": "para aniversário da dedicação de sua casa"
          },
          {
            "sp_pt": "",
            "text_pt": ")"
          },
          {
            "sp_pt": "",
            "text_pt": "vos conceda copiosas bênçãos do céu."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Deus que, em seu Filho, quis congregar todos os filhos dispersos,"
          },
          {
            "sp_pt": "",
            "text_pt": "faça de vós seu templo e morada do Espírito Santo."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E, assim, na felicidade de serdes purificados,"
          },
          {
            "sp_pt": "",
            "text_pt": "possais ser o templo em que Deus habita,"
          },
          {
            "sp_pt": "",
            "text_pt": "e possuir, com todos os santos,"
          },
          {
            "sp_pt": "",
            "text_pt": "a herança da felicidade eterna."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E a bênção de Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "desça sobre vós e permaneça para sempre."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "rubric_pt": "20."
          },
          {
            "sp_pt": "",
            "text_pt": "Celebração pelo Fiéis Defuntos"
          },
          {
            "sp_pt": "",
            "text_pt": "Deus, criador e Pai,"
          },
          {
            "sp_pt": "",
            "text_pt": "que na ressurreição do seu Filho"
          },
          {
            "sp_pt": "",
            "text_pt": "deu aos que creem a esperança na ressurreição,"
          },
          {
            "sp_pt": "",
            "text_pt": "derrame sobre vós a sua bênçao."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "Cristo, que nos redimiu por sua cruz,"
          },
          {
            "sp_pt": "",
            "text_pt": "vos renove em seu amor"
          },
          {
            "sp_pt": "",
            "text_pt": "e conceda aos que morreram a luz e a paz."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "O Espírito Consolador"
          },
          {
            "sp_pt": "",
            "text_pt": "conceda gozar a felicidade prometida"
          },
          {
            "sp_pt": "",
            "text_pt": "a vós que esperais a vinda gloriosa do Senhor."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
          },
          {
            "sp_pt": "",
            "text_pt": "E a bênção de Deus todo-poderoso,"
          },
          {
            "sp_pt": "",
            "text_pt": "Pai e Filho"
          },
          {
            "rubric_pt": "✠"
          },
          {
            "sp_pt": "",
            "text_pt": "e Espírito Santo,"
          },
          {
            "sp_pt": "",
            "text_pt": "desça sobre vós e permaneça para sempre."
          },
          {
            "sp_pt": "R.",
            "text_pt": "Amém."
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
            "rubric_pt": "Depois, o diácono ou o próprio sacerdote diz ao povo, de mãos unidas:"
          },
          {
            "sp_pt": "",
            "text_pt": "Ide em paz, e o Senhor vos acompanhe."
          },
          {
            "rubric_pt": "O povo responde:"
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
            "text_pt": "Ide em paz, e anunciai o Evangelho do Senhor."
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Graças a Deus."
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
            "text_pt": "Ide em paz, e glorificai o Senhor com vossa vida."
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Graças a Deus."
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
            "text_pt": "Em nome do Senhor, ide em paz e o Senhor vos acompanhe."
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Graças a Deus."
          }
        ]
      },
      "E": {
        "label": {
          "pt": "Fórmula 5"
        },
        "lines": [
          {
            "rubric_pt": "Ou:"
          },
          {
            "sp_pt": "",
            "text_pt": "A alegria do Senhor seja a vossa força;"
          },
          {
            "sp_pt": "",
            "text_pt": "ide em paz e o Senhor vos acompanhe."
          },
          {
            "rubric_pt": "O povo responde:"
          },
          {
            "sp_pt": "Todos",
            "text_pt": "Graças a Deus."
          }
        ]
      }
    }
  },
  {
    "id": "4.4 final_song",
    "type": "part",
    "header": {
      "pt": "Canto final"
    },
    "lines": [
      {
        "rubric_pt": "Então o sacerdote beija o altar em sinal de veneração, como no início. Feita com os ministros a devida reverência, retira-se."
      },
      {
        "rubric_pt": "146."
      },
      {
        "sp_pt": "",
        "text_pt": "Caso ocorra ainda alguma ação litúrgica, omite-se o rito de despedida."
      }
    ]
  }
]);
  const ordinarySource = Object.freeze({"title":"Pocket Terço — Ordinário e Orações Eucarísticas conforme a 3ª edição do Missal Romano","authority":"Textos litúrgicos da Conferência Nacional dos Bispos do Brasil (CNBB)","url":"https://pocketterco.com.br/oracao/ordinario-1-ritos-iniciais","indexUrl":"https://pocketterco.com.br/oracoes/missal-romano","eucharisticPrayersUrl":"https://pocketterco.com.br/terco/oracoes-eucaristicas-conforme-3a-edicao-do-missal","edition":"Missal Romano, 3ª edição para o Brasil","access":"Complete public transcription matching the current CNBB text"});
  const officialOrderCorpus = Object.freeze({"language":"PT","edition":"Missal Romano, 3ª edição para o Brasil","text_pt":"Ordinário (1) Ritos Iniciais\nMissal Romano\n1.\nReunido o povo, o sacerdote dirige-se com os ministros ao altar, enquanto se executa o canto de entrada.\nChegando ao altar, faz com os ministros uma profunda inclinação, beija o altar em sinal de veneração e, se for oportuno, incensa a cruz e o altar. Depois se dirige com os ministros à cadeira. Terminado o canto de entrada, o sacerdote e os fiéis, todos de pé, fazem o sinal da cruz, enquanto o sacerdote, voltado para o povo, diz:\nEm nome do Pai e do Filho e do Espírito Santo.\nO povo responde:\nAmém.\n2.\nEm seguida, o sacerdote, abrindo os braços, saúda o povo com uma das seguintes fórmulas:\na)\nA graça de nosso Senhor Jesus Cristo,\no amor do Pai\ne a comunhão do Espírito Santo\nestejam convosco.\n(Cf. 2Cor 13, 13)\nAbrir outras saudações\nb)\nA graça e a paz de Deus, nosso Pai,\ne de Jesus Cristo, nosso Senhor,\nestejam convosco.\n(Cf. 1Cor 1, 3)\nc)\nⒷ\nO Senhor, que encaminha os nossos corações\npara o amor de Deus e a constância de Cristo,\nesteja convosco.\n(2Ts 3, 5)\nd)\nⒷ\nO Deus da esperança,\nque nos cumula de toda alegria e paz em nossa fé,\npela ação do Espírito Santo,\nesteja convosco.\n(Rm 15, 13)\ne)\nⒷ\nA vós, irmãos, paz e fé\nda parte de Deus, o Pai,\ne do Senhor Jesus Cristo.\n(Ef 6, 23)\nf)\nⒷ\nIrmãos eleitos segundo a presciência de Deus Pai,\npela santificação do Espírito\npara obedecer a Jesus Cristo\ne participar da bênção da aspersão do seu sangue,\ngraça e paz vos sejam concedidas abundantemente.\n(1Pd 1, 1-2)\ng)\nⒷ\nA graça e a paz\ndaquele que é, que era e que vem,\nestejam convosco.\n(Ap 1, 8)\nO povo responde:\nBendito seja Deus, que nos reuniu no amor de Cristo.\nOu, o sacerdote, abrindo os braços, diz:\nh)\nO Senhor esteja convosco.\nO povo responde:\nEle está no meio de nós.\nAbrir opção para missa com Bispo\nO Bispo, nesta primeira saudação, em vez de\nO Senhor esteja convosco\n, diz:\nA paz esteja convosco.\nE o povo responde:\nBendito seja Deus,\nQue nos reuniu no amor de Cristo.\n3.\nO sacerdote, diácono ou outro ministro poderá, com brevíssimas palavras, introduzir os fiéis na Missa do dia.\nAto Penitencial*\n*Aos domingos, especialmente no tempo pascal, no lugar do Ato Penitencial habitual pode-se fazer a bênção de a aspersão da água em memória do Batismo como no Apêndice II do Missal Romano (p.\n1224-1227\n). Ⓑ Neste caso, após a conclusão, seguem-se as invocações\nSenhor, tende piedade de nós\n(\nKýrie, eléison\n)\nAbrir primeira fórmula\nPrimeira fórmula\n4.\nO sacerdote convida os fiéis ao ato penitencial:\nIrmãos e irmãs,\nreconheçamos\nos nossos pecados,\npara celebrarmos dignamente os santos mistérios.\nAbrir outras opções\nOu:\nⒷ\nO Senhor Jesus, que nos convida\nà mesa da Palavra e da Eucaristia,\nnos chama a segui-lo fielmente.\nReconheçamos ser pecadores\ne invoquemos com confiança\na misericórdia do Pai.\nOu, especialmente aos domingos e durante a oitava de Páscoa:\nⒷ\nNo dia em que celebramos a vitória de Cristo\nsobre o pecado e a morte,\ntambém nós somos convidados a morrer para o pecado\ne ressurgir para uma vida nova.\nReconheçamo-nos necessitados da misericórdia do Pai.\nApós um momento de silêncio, usa-se a seguinte fórmula:\nO sacerdote diz:\nConfessemos os nossos pecados:\nTodos:\nConfesso a Deus todo-poderoso\ne a vós, irmãos e irmãs,\nque pequei muitas vezes\npor pensamentos e palavras,\natos e omissões,\ne, batendo no peito, dizem:\npor minha culpa,\nminha culpa,\nminha tão grande culpa,\nEm seguida, continuam:\nE peço à Virgem Maria,\naos Anjos e Santos\ne a vós, irmãos e irmãs,\nque rogueis por mim a Deus, nosso Senhor.\nSegue-se a absolvição sacerdotal:\nDeus todo-poderoso tenha compaixão de nós,\nperdoe os nossos pecados\ne nos conduza à vida eterna.\nO povo responde:\nAmém.\nAbrir segunda fórmula\nSegunda fórmula\n5.\nO sacerdote convida os fiéis ao ato penitencial:\nIrmãos e irmãs,\nreconheçamos os nossos pecados,\npara celebrarmos dignamente os santos mistérios.\nAbrir outras opções\nOu:\nⒷ\nNo início desta celebração eucarística,\npeçamos a conversão do coração,\nfonte de reconciliação e comunhão\ncom Deus e com os irmãos e irmãs.\nOu:\nⒷ\nDe coração contrito e humilde,\naproximemo-nos do Deus justo e santo,\npara que tenha piedade de nós, pecadores.\nApós um momento de silêncio, o sacerdote diz:\nTende compaixão de nós, Senhor.\nO povo:\nPorque somos pecadores.\nO sacerdote:\nManifestai, Senhor, a vossa misericórdia.\nO povo:\nE dai-nos a vossa salvação.\nSegue-se a absolvição sacerdotal:\nDeus todo-poderoso tenha compaixão de nós,\nperdoe os nossos pecados\ne nos conduza à vida eterna.\nO povo responde:\nAmém.\nAbrir terceira fórmula\nTerceira fórmula\n6.\nO sacerdote convida os fiéis ao ato penitencial:\nIrmãos e irmãs,\nreconheçamos os nossos pecados,\npara celebrarmos dignamente os santos mistérios.\nAbrir outras opções\nOu:\nⒷ\nEm Jesus Cristo, o Justo,\nque intercede por nós e nos reconcilia com o Pai,\nabramos o nosso espírito ao arrependimento\npara sermos\ndignos de nos aproximar\nda mesa do Senhor.\nOu:\nⒷ\nO Senhor disse:\n\"Quem dentre vós estiver sem pecado,\natire a primeira pedra\".\nReconheçamo-nos todos pecadores\ne perdoemo-nos mutuamente do fundo do coração.\nApós um momento de silêncio, o sacerdote, o diácono ou outro ministro propõe as seguintes invocações ou outras semelhantes com\nSenhor, tende piedade de nós\n.\nⒷ Para o canto se pode usar a aclamação grega:\nKýrie, eléison\n.\nSenhor, que viestes salvar os corações arrependidos,\ntende piedade de nós.\nO povo responde:\nSenhor, tende piedade de nós.\nO sacerdote:\nCristo, que viestes chamar os pecadores,\ntende piedade de nós.\nO povo:\nCristo, tende piedade de nós.\nO sacerdote:\nSenhor, que intercedeis por nós junto do Pai,\ntende piedade de nós.\nO povo:\nSenhor, tende piedade de nós.\nSegue-se a absolvição sacerdotal:\nDeus todo-poderoso tenha compaixão de nós,\nperdoe os nossos pecados\ne nos conduza à vida eterna.\nO povo responde:\nAmém.\nAbrir Ⓑ Invocações alternativas para os diversos tempos\nⒷ Invocações alternativas para os diversos tempos\nTempo Comum:\n1.\nSenhor, que sois o caminho que leva ao Pai,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que sois a verdade que ilumina os povos,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que sois a vida que renova o mundo,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n2.\nSenhor, que oferecestes o vosso perdão a Pedro arrependido,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que prometestes o paraíso ao bom ladrão,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que acolheis toda pessoa que confia na vossa misericórdia,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n3.\nSenhor, que viestes, não para condenar, mas para perdoar,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que vos alegrais pelo pecador arrependido,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que muito perdoais a quem muito ama,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n4.\nSenhor, que viestes procurar quem estava perdido,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que viestes dar a vida em resgate de muitos,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que congregais na unidade os\nfilhos de Deus\ndispersos,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n5.\nSenhor, que sois a plenitude da verdade e da graça,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que vos tornastes pobre para nos enriquecer,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que viestes para fazer de nós o vosso povo santo,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nTempo do Advento:\n1.\nSenhor, que viestes ao mundo para nos salvar,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que continuamente nos visitais com a graça do vosso Espírito,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que vireis um dia para julgar as nossas obras,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n2.\nSenhor, que sois o defensor dos pobres,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que sois o refúgio dos fracos,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que sois a esperança dos pecadores,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n3.\nSenhor, que vindes visitar vosso povo na paz,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que vindes salvar o que estava perdido,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que vindes criar um mundo novo,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nTempo do Natal:\n1.\nSenhor, Filho de Deus, que, nascendo da Virgem Maria, vos fizestes nosso irmão,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, Filho do homem, que conheceis e compreendeis nossa fraqueza,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, Filho primogênito do Pai, que fazeis de nós uma só família,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n2.\nSenhor, rei da paz,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, luz nas trevas,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, imagem do homem novo,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nTempo da Quaresma:\n1.\nSenhor que na cruz perdoastes o ladrão arrependido,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que nos mandastes perdoar-nos mutuamente antes de nos aproximar do vosso altar,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que confiastes à vossa Igreja o ministério da reconciliação,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n2.\nSenhor, que na água e no Espírito nos regenerastes à vossa imagem,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que enviais o vosso Espírito para criar em nós um coração novo,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que nos tornastes participantes do vosso Corpo e do vosso Sangue,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n3.\nSenhor, que fazeis passar da morte para a vida quem ouve a vossa palavra,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que quisestes ser levantado da terra para que tenha a vida eterna todo aquele que crê em vós,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que nos submeteis ao julgamento da vossa cruz, para levar-nos à glória da ressurreição,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nTempo da Páscoa:\n1.\nSenhor, nossa paz,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, nossa Páscoa,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, nossa vida,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n2.\nSenhor, que sois o eterno sacerdote da nova Aliança,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que nos edificais como pedras vivas no templo santo de Deus,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que nos tornais concidadãos dos santos no reino dos céus,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n3.\nSenhor, que, subindo ao céu, nos presenteastes com o dom do Espírito,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que dais vida a todas as coisas com o poder da vossa palavra,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, Rei do universo e Senhor dos séculos,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n4.\nSenhor, que, subindo ao céu, vos tornastes Rei do universo, e Senhor dos séculos,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que na vossa ascensão levastes cativo o cativeiro,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que voltando à casa do Pai abristes o céu para nós,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n5.\nSenhor, que pelo Espírito Santo estais presente no mundo,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que dais o Espírito Santo para o perdão dos pecados,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que enviais o Espírito Santo para criar um mundo novo,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n7.\nSeguem-se as invocações\nSenhor, tende piedade de nós\n(\nKýrie, eléison\n), caso já não tenham ocorrido no ato penitencial:\nSenhor, tende piedade de nós.\nOu:\nKýrie, eléison\n℟.\nSenhor, tende piedade de nós.\nOu:\nKýrie, eléison\nCristo, tende piedade de nós.\nOu:\nChriste, eléison\n℟.\nCristo, tende piedade de nós.\nOu:\nChriste, eléison\nSenhor, tende piedade de nós.\nOu:\nKýrie, eléison\n℟.\nSenhor, tende piedade de nós.\nOu:\nKýrie, eléison\n8.\nQuando for prescrito, canta-se ou recita-se em seguida o hino:\nGlória a Deus nas alturas,\ne paz na terra aos homens por Ele amados.\nSenhor Deus, rei dos céus,\nDeus Pai todo-poderoso.\nNós vos louvamos,\nnós vos bendizemos,\nnós vos adoramos,\nnós vos glorificamos,\nnós vos damos graças\npor vossa imensa glória.\nSenhor Jesus Cristo, Filho Unigênito,\nSenhor Deus, Cordeiro de Deus,\nFilho de Deus Pai.\nVós que tirais o pecado do mundo,\ntende piedade de nós.\nVós que tirais o pecado do mundo,\nacolhei a nossa súplica.\nVós que estais à direita do Pai,\ntende piedade de nós.\nSó Vós sois o Santo,\nsó vós, o Senhor,\nsó vós, o Altíssimo,\nJesus Cristo,\ncom o Espírito Santo,\nna glória de Deus Pai.\nAmém.\n9.\nTerminado o hino, de mãos unidas, o sacerdote diz:\nOremos.\nE todos oram com o sacerdote, por algum tempo, em silêncio.\nEntão o sacerdote, de braços abertos, profere a oração Coleta;\nao terminar, o povo aclama:\nAmém.\n\nOrdinário (2) Liturgia da Palavra\nMissal Romano\n10.\nO leitor dirige-se ao ambão e proclama a primeira leitura, que todos ouvem sentados. Para indicar o fim da leitura, o leitor aclama:\nPalavra do Senhor.\nTodos respondem:\nGraças a Deus.\nApós as leituras, é aconselhável um momento de silêncio para meditação.\n11.\nO salmista ou o cantor canta ou recita o salmo, e o povo, o refrão.\n12.\nSe houver uma segunda leitura, o leitor a proclama do ambão, como descrito acima. Para indicar o fim da leitura, o leitor aclama:\nPalavra do Senhor.\nTodos respondem:\nGraças a Deus.\n13.\nSegue-se o\nAleluia\nou outro canto estabelecido pelas rubricas, conforme o tempo litúrgico exige.\n14.\nEnquanto isso, o sacerdote, quando se usa incenso, coloca-o no turíbulo. O diácono, que vai proclamar o Evangelho, inclinando-se profundamente diante do sacerdote, pede a bênção em voz baixa:\nDá-me a tua bênção.\nO sacerdote diz em voz baixa:\nO Senhor esteja em teu coração e em teus lábios para que possas anunciar dignamente o seu Evangelho: em nome do Pai e do Filho\n✠\ne do Espírito Santo.\nO diácono faz o sinal da cruz e responde:\nAmém.\nSe não houver diácono, o sacerdote, inclinado diante do altar, reza em silêncio:\nÓ Deus todo-poderoso, purificai-me o coração e os lábios, para que eu possa anunciar dignamente o vosso santo Evangelho.\n15.\nO diácono ou o sacerdote dirige-se ao ambão, acompanhado, se for oportuno, pelos ministros com o incenso e velas, e diz:\nO Senhor esteja convosco.\nO povo responde:\nEle está no meio de nós.\nO diácono ou o sacerdote diz:\nProclamação do Evangelho de Jesus Cristo, segundo\nN.\n,\nE, enquanto isso, faz o sinal da cruz sobre o livro e, depois, sobre si mesmo, na fronte, na boca e no peito.\nO povo aclama:\nGlória a vós, Senhor.\nEntão o diácono ou o sacerdote, se for o caso, incensa o livro, e proclama o Evangelho.\n16.\nTerminado o Evangelho, o diácono ou o sacerdote aclama:\nPalavra da Salvação.\nTodos respondem:\nGlória a vós, Senhor.\nDepois beija o livro, dizendo em silêncio:\nPelas palavras do santo Evangelho sejam perdoados os nossos pecados.\n17.\nEm seguida, faz-se a homilia, que compete ao sacerdote ou diácono; ela é obrigatória em todos domingos e festas de preceito e recomendada também nos outros dias.\n18.\nTerminada a homilia, quando prescrito, canta-se ou recíta-se o símbolo ou profissão de fé:\nSímbolo Niceno-constantinopolitano:\nCreio em um só Deus, Pai todo-poderoso,\nCriador do céu e da terra,\nde todas as coisas visíveis e invisíveis.\nCreio em um só Senhor, Jesus Cristo,\nFilho Unigênito de Deus,\nnascido do Pai antes de todos os séculos:\nDeus de Deus,\nluz da luz,\nDeus verdadeiro de Deus verdadeiro,\ngerado, não criado,\nconsubstancial ao Pai.\nPor ele todas as coisas foram feitas.\nE por nós, homens, e para nossa salvação,\ndesceu dos céus\nÀs palavras seguintes, até\ne se fez homem\n, todos se inclinam.\ne se encarnou pelo Espírito Santo, no seio da Virgem Maria,\ne se fez homem.\nTambém por nós foi crucificado\nsob Pôncio Pilatos;\npadeceu e foi sepultado.\nRessuscitou ao terceiro dia,\nconforme as Escrituras,\ne subiu aos céus,\nonde está sentado à direita do Pai.\nE de novo há de vir, em sua glória,\npara julgar os vivos e os mortos;\ne o seu reino não terá fim.\nCreio no Espírito Santo,\nSenhor que dá a vida,\ne procede do Pai e do Filho;\ne com o Pai e o Filho é adorado e glorificado:\nele que falou pelos profetas.\nCreio na Igreja,\nuna, santa, católica e apostólica.\nProfesso um só batismo\npara remissão dos pecados.\nE espero a ressurreição dos mortos\ne a vida do mundo que há de vir.\nAmém.\n19.\nNo lugar do símbolo niceno-constantinopolitano, pode-se usar, sobretudo nos tempos da Quaresma e da Páscoa, a profissão de fé batismal da Igreja Romana, o assim chamado símbolo dos Apóstolos:\nCreio em Deus Pai todo-poderoso,\nCriador do céu e da terra.\nE em Jesus Cristo, seu único Filho, nosso Senhor,\nÀs palavras seguintes, até\nVirgem Maria\n, todos se inclinam.\nque foi concebido pelo poder do Espírito Santo,\nnasceu da Virgem Maria,\npadeceu sob Pôncio Pilatos,\nfoi crucificado, morto e sepultado,\ndesceu à mansão dos mortos,\nressuscitou ao terceiro dia,\nsubiu aos céus,\nestá sentado à direita de Deus Pai todo-poderoso,\ndonde há de vir a julgar os vivos e os mortos.\nCreio no Espírito Santo,\nna Santa Igreja católica,\nna comunhão dos santos,\nna remissão dos pecados,\nna ressurreição da carne\ne\nna vida eterna. Amém.\n20.\nEm seguida, faz-se a oração universal ou dos fiéis.\n\nOrdinário (4) Liturgia Eucarística\nMissal Romano\n21.\nInicia-se o canto da preparação das oferendas, enquanto os ministros colocam no altar o corporal, o sanguinho, o cálice, a pala e o Missal.\n22.\nConvém que os fiéis expressem sua participação trazendo uma oferenda, seja pão e vinho para a celebração da Eucaristia, seja outro donativo para auxílio da comunidade e dos pobres.\n23.\nO sacerdote, de pé junto ao altar, recebe a patena com o pão em suas mãos e, levantando-a um pouco sobre o altar, diz em silêncio:\nBendito sejais, Senhor, Deus do universo,\npelo pão que recebemos de vossa bondade,\nfruto da terra e do trabalho humano,\nque agora vos apresentamos,\ne para nós se vai tornar pão da vida.\nEm seguida, coloca a patena com o pão sobre o corporal.\nSe o canto da preparação das oferendas não continuar, o sacerdote poderá recitar em voz alta as palavras acima, e o povo acrescentar a aclamação:\nBendito seja Deus para sempre!\n24.\nO diácono ou o sacerdote coloca o vinho e um pouco d água no cálice, rezando em silêncio:\nPelo mistério desta água e deste vinho\npossamos participar da divindade do vosso Filho,\nque se dignou assumir a nossa humanidade.\n25.\nEm seguida, o sacerdote recebe o cálice em suas mãos e, elevando-o um pouco sobre o altar, diz em silêncio:\nBendito sejais, Senhor, Deus do universo,\npelo vinho que recebemos de vossa bondade,\nfruto da videira e do trabalho humano,\nque agora vos apresentamos,\ne que para nós se vai tornar vinho da salvação.\nColoca o cálice sobre o corporal.\nSe o canto da preparação das oferendas não continuar, o sacerdote poderá recitar em voz alta as palavras acima, e o povo acrescentar a aclamação:\nBendito seja Deus para sempre!\n26.\nEm seguida o sacerdote, profundamente inclinado, reza em silêncio:\nDe coração contrito e humilde,\nsejamos, Senhor, acolhidos por vós;\ne seja o nosso sacrifício de tal modo oferecido\nque vos agrade, Senhor, nosso Deus.\n27.\nE, se for oportuno, incensa as oferendas, a cruz e o altar. Depois, o diácono ou outro ministro incensa o sacerdote e o povo.\n28.\nEm seguida, o sacerdote, de pé ao lado do altar, lava as mãos, dizendo em silêncio:\nLavai-me, Senhor, de minhas faltas\ne purificai-me do meu pecado.\n29.\nEstando, depois, no meio do altar e voltado para o povo, o sacerdote estende e une as mãos e diz:\nOrai, irmãos e irmãs,\npara que o\nmeu e o vosso\nsacrifício seja aceito por Deus Pai todo-poderoso.\nAbrir outras opções\nOu:\nⒷ\nOrai, irmãos e irmãs,\npara que esta nossa família,\nreunida em nome de Cristo,\npossa oferecer um sacrifício\nque seja aceito por Deus Pai todo-poderoso.\nOu:\nⒷ\nOrai, irmãos e irmãs,\npara que, trazendo ao altar\nas alegrias e fadigas de cada dia,\nnos disponhamos a oferecer um sacrifício\naceito por Deus Pai todo-poderoso.\nOu:\nⒷ\nOrai, irmãos e irmãs,\npara que o sacrifício da Igreja,\nnesta pausa restauradora na caminhada rumo ao céu,\nseja aceito por Deus Pai todo-poderoso.\nO povo se levanta e responde:\nReceba o Senhor por tuas mãos este sacrifício,\npara glória do seu nome,\npara nosso bem e de toda a\nsua\nsanta Igreja.\n30.\nEm seguida, abrindo os braços, o sacerdote profere a oração sobre as oferendas; ao terminar, o povo aclama:\nAmém.\nOração Eucarística\n31.\nComeçando a Oração Eucarística, o sacerdote abre os braços e diz ou canta:\nO Senhor esteja convosco.\nO povo responde:\nEle está no meio de nós.\nErguendo as mãos, o sacerdote prossegue:\nCorações ao alto.\nO povo:\nO nosso coração está em Deus.\nO sacerdote, com os braços abertos, acrescenta:\nDemos graças ao Senhor, nosso Deus.\nO povo:\nÉ nosso dever e nossa salvação.\nO sacerdote, de braços abertos, reza ou canta o Prefácio.\nAo seu final, une as mãos e, com o povo, conclui o Prefácio, cantando ou em voz alta dizendo:\nSanto, Santo, Santo,\nSenhor, Deus do universo.\nO céu e a terra proclamam a vossa glória.\nHosana nas alturas!\nBendito o que vem em nome do Senhor!\nHosana nas alturas!\n32.\nEm todas as Missas, o sacerdote pode cantar as partes mais importantes da Oração Eucarística.\nNa primeira Oração Eucarística ou Cânon Romano, pode-se omitir o que está entre parênteses.\n\nOrdinário (5) Rito da Comunhão\nMissal Romano\n124.\nTendo colocado o cálice e a patena sobre o altar, o sacerdote diz, de mãos unidas:\nObedientes à palavra do Salvador\ne formados por seu divino ensinamento,\nousamos dizer:\nAbrir outras monições\nOu:\nⒷ\nRezemos, com amor e confiança,\na oração que o Senhor Jesus nos ensinou:\nOu:\nⒷ\nSomos chamados filhos de Deus\ne realmente o somos,\npor isso, podemos rezar confiantes:\nOu:\nⒷ\nO Senhor nos comunicou o seu Espírito.\nCom a confiança e a liberdade de filhos e filhas, digamos juntos:\nOu:\nⒷ\nO banquete da Eucaristia é sinal de reconciliação\ne vínculo de união fraterna. Unidos como irmãos e irmãs,\nrezemos, juntos, como o Senhor nos ensinou:\nOu:\nⒷ\nGuiados pelo Espírito de Jesus e iluminados pela sabedoria\ndo Evangelho, ousamos dizer:\nOu:\nⒷ\nGuiados pelo Espírito Santo, que ora em nós e por nós,\nelevemos as mãos ao Pai e rezemos juntos a oração\nque o próprio Jesus nos ensinou:\nO sacerdote abre os braços e prossegue com o povo:\nPai nosso que estais nos céus,\nsantificado seja o vosso nome;\nvenha a nós o vosso reino,\nseja feita a vossa vontade,\nassim na terra como no céu.\nO pão nosso de cada dia nos dai hoje;\nperdoai-nos as nossas ofensas,\nassim como nós perdoamos\na quem nos tem ofendido;\ne não nos deixeis cair em tentação,\nmas livrai-nos do mal.\n125.\nO sacerdote prossegue sozinho, de braços abertos:\nLivrai-nos de todos os males, ó Pai,\ne dai-nos hoje a vossa paz.\nAjudados pela vossa misericórdia,\nsejamos sempre livres do pecado\ne protegidos de todos os perigos,\nenquanto\naguardamos a feliz esperança\ne a vinda do Nosso Salvador, Jesus Cristo\n.\nO sacerdote une as mãos.\nO povo conclui a oração, aclamando:\nVosso é o reino,\no poder e a glória para sempre.\n126.\nO sacerdote, de braços abertos, diz em voz alta:\nSenhor Jesus Cristo,\ndissestes aos vossos Apóstolos:\neu vos deixo a paz, eu vos dou a minha paz.\nNão olheis os nossos pecados,\nmas a fé que anima vossa Igreja;\ndai-lhe, segundo o vosso desejo,\na paz e a unidade.\nO sacerdote une as mãos e conclui:\nVós, que sois Deus, com o Pai e o Espírito Santo.\nO povo responde:\nAmém.\n127.\nO sacerdote, voltado para o povo, estendendo e unindo as mãos, acrescenta:\nA paz do Senhor esteja sempre convosco.\nO povo responde:\nO amor de Cristo nos uniu.\n128.\nEm seguida, se for oportuno, o diácono ou o sacerdote diz:\nIrmãos e irmãs,\nsaudai-vos em Cristo Jesus.\nAbrir outras opções\nOu:\nⒷ\nComo filhos e filhas do Deus da paz,\nsaudai-vos com um gesto de comunhão fraterna.\nOu:\nⒷ\nEm Jesus, que nos tornou todos irmãos e irmãs,\nsaudai-vos com um sinal de reconciliação e de paz.\nOu:\nⒷ\nNo Espírito de Cristo ressuscitado,\nsaudai-vos com um sinal de paz.\nE, todos segundo o costume do lugar, manifestam uns aos outros a paz, a comunhão e a caridade; o sacerdote dá a paz ao diácono e a outros ministros.\n129.\nEm seguida, o sacerdote parte o pão consagrado sobre a patena e coloca um pedaço no cálice, rezando em silêncio:\nEsta união do Corpo e do Sangue de Jesus,\no Cristo e Senhor nosso, que vamos receber,\nnos faça participar da vida eterna.\n130.\nEnquanto isso, canta-se ou recita-se:\nCordeiro de Deus,\nque tirais o pecado do mundo,\ntende piedade de nós.\nCordeiro de Deus,\nque tirais o pecado do mundo,\ntende piedade de nós.\nCordeiro de Deus,\nque tirais o pecado do mundo,\ndai-nos a paz.\nEssas palavras podem ser repetidas ainda mais vezes, se a fração do pão se prolongar. Contudo, na última vez se diz:\ndai-nos a paz\n.\n131.\nO sacerdote, de mãos unidas, reza em silêncio:\nSenhor Jesus Cristo, Filho do Deus vivo,\nque, cumprindo a vontade do Pai\ne agindo com o Espírito Santo,\npela vossa morte destes vida ao mundo,\nlivrai-me por este vosso santíssimo Corpo e Sangue\ndos meus pecados e de todo mal;\ndai-me cumprir sempre a vossa vontade e jamais separar-me de vós.\nOu:\nSenhor Jesus Cristo,\no vosso Corpo e o vosso Sangue,\nque vou receber,\nnão se tornem causa de juízo e condenação;\nmas, por vossa bondade, sejam proteção e remédio para minha vida.\n132.\nO sacerdote faz genuflexão, toma a hóstia na mão e, elevando-a um pouco sobre a patena ou sobre o cálice, diz em voz alta, voltado para o povo:\nFelizes os convidados para a Ceia do Senhor.\nAbrir outras opções\nOu:\nⒷ\nQuem come minha carne e bebe meu sangue\npermanece em mim e eu nele.\nOu:\nⒷ\nProvai e vede como o Senhor é bom;\nfeliz de quem nele encontra seu refúgio.\nOu:\nⒷ\nEu sou o Pão vivo, que desceu do céu;\nse alguém come deste Pão,\nviverá eternamente.\nOu:\nⒷ\nFelizes os convidados para o banquete nupcial do Cordeiro.\nou\nEis o Cordeiro de Deus,\nque tira o pecado do mundo.\nE acrescenta, com o povo, uma só vez:\nSenhor, eu não sou digno\n(\na\n)\nde que entreis em minha morada,\nmas dizei uma palavra e serei salvo\n(\na\n)\n.\n133.\nO sacerdote, voltado para o altar, reza em silêncio:\nO Corpo de Cristo\nme guarde para a vida eterna.\nE reverentemente comunga o Corpo de Cristo.\nDepois, segura o cálice e reza em silêncio:\nO Sangue de Cristo\nme guarde para a vida eterna.\nE reverentemente comunga o Sangue de Cristo.\n134.\nEm seguida, toma a patena ou o cibório, aproxima-se dos que vão comungar e mostra a hóstia um pouco elevada a cada um deles, dizendo:\nO Corpo de Cristo.\nO que vai comungar responde:\nAmém.\nE comunga.\nO diácono ou o ministro extraordinário da distribuição da sagrada Comunhão, ao distribuir a sagrada Comunhão, procede do mesmo modo.\n135.\nSe houver Comunhão sob as duas espécies, observe-se o rito prescrito na Instrução Geral sobre o Missal Romano, em n.\n281-287\n.\n136.\nEnquanto o sacerdote comunga o Corpo de Cristo, inicia-se o canto da comunhão.\n137.\nTerminada a Comunhão, o sacerdote, o diácono ou acólito purifica a patena e o cálice.\nEnquanto se faz a purificação, o sacerdote reza em silêncio:\nFazei, Senhor,\nque conservemos num coração puro\no que a nossa boca recebeu.\nE que esta dádiva temporal\nse transforme para nós em remédio eterno.\n138.\nEntão o sacerdote pode voltar à cadeira. É aconselhável guardar algum tempo de silêncio sagrado ou proferir um salmo ou cântico de louvor.\n139.\nEm seguida, junto ao altar ou à cadeira, o sacerdote, de pé, voltado para o povo, diz de mãos unidas:\nOremos.\nE todos, com o sacerdote, rezam algum tempo em silêncio, se ainda não o fizeram. Em seguida, o sacerdote, de braços abertos, profere a oração Depois da comunhão.\nAo terminar, o povo aclama:\nAmém.\n\nOrdinário (6) Ritos Finais\nMissal Romano\n140.\nSe necessário, fazem-se breves comunicações ao povo.\nou\n141.\nEm seguida, faz-se a despedida. O sacerdote, voltado para o povo, abre os braços e diz:\nO Senhor esteja convosco.\nO povo responde:\nEle está no meio de nós.\nO sacerdote abençoa o povo, dizendo:\nAbençoe-vos Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo.\nO povo responde:\nAmém.\n142.\nEm alguns dias ou ocasiões, esta fórmula de bênção poderá ser precedida, de acordo com as rubricas, por outra fórmula mais solene ou pela oração sobre o povo. (cf. p.\n578ss\n).\nAbrir opção na Missa pontifical\n143.\nNa Missa pontifical, o celebrante recebe a mitra e, estendendo as mãos, diz:\nO Senhor esteja convosco.\nTodos respondem:\nEle está no meio de nós.\nO celebrante diz:\nBendito seja o nome do Senhor.\nTodos respondem:\nAgora e para sempre.\nO celebrante diz:\nNossa proteção está no nome do Senhor.\nTodos respondem:\nQue fez o céu e a terra.\nEntão o celebrante recebe o báculo, se o utilizar, e diz:\nAbençoe-vos Deus todo-poderoso,\ne fazendo três vezes o sinal da cruz sobre o povo, acrescenta:\nPai\n✠\ne Filho\n✠\ne Espírito\n✠\nSanto.\nTodos:\nAmém.\n144.\nDepois, o diácono ou o próprio sacerdote diz ao povo, de mãos unidas:\nIde em paz, e o Senhor vos acompanhe.\nAbrir outras despedidas\nOu:\nIde em paz, e anunciai o Evangelho do Senhor.\nOu:\nIde em paz, e glorificai o Senhor com vossa vida.\nOu:\nEm nome do Senhor, ide em paz e o Senhor vos acompanhe.\nOu:\nA alegria do Senhor seja a vossa força;\nide em paz e o Senhor vos acompanhe.\nO povo responde:\nGraças a Deus.\n145.\nEntão o sacerdote beija o altar em sinal de veneração, como no início. Feita com os ministros a devida reverência, retira-se.\n146.\nCaso ocorra ainda alguma ação litúrgica, omite-se o rito de despedida.\nAbrir Bênçãos Solenes\nBÊNÇÃOS SOLENES\nAs seguintes bênçãos podem ser usadas, à vontade do sacerdote, no fim da celebração da Missa, de uma celebração da Palavra, da Liturgia das Horas ou dos Sacramentos.\nO sacerdote, voltado para o povo, abrindo os braços, diz:\nO Senhor esteja convosco\n.\nO povo responde:\nEle está no meio de nós\n.\nO diácono ou, na falta dele, o próprio sacerdote pode fazer o convite com estas ou outras palavras:\nlnclinai-vos para receber a bênção\n. Em seguida, o sacerdote, estendendo as mãos sobre o povo, profere a bênção e todos respondem:\nAmém\n.\nAbrir I. Nas celebrações de cada tempo do Ano Litúrgico\nI. Nas celebrações de cada tempo do Ano Litúrgico\n1.\nAdvento\nO Deus onipotente e misericordioso\nvos santifique com o esplendor do advento do seu Filho,\nem cuja vinda credes e cuja volta esperais,\ne derrame sobre vós as suas bênçãos.\n℟.\nAmém.\nDurante esta vida, Deus vos torne\nfirmes na fé,\nalegres na esperança\ne solícitos na caridade.\n℟.\nAmém.\nE vós, que vos alegrais com fé e devoção\npela vinda, segundo a carne, do nosso Redentor,\nsejais recompensados com o prêmio da vida eterna,\nquando ele vier de novo na majestado da sua glória.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n2.\nNatal do Senhor\nO Deus de infinita bondade,\nque, pela encarnação do seu Filho,\ndissipou as trevas do mundo\ne, com seu glorioso nascimento,\ninundou de luz esta noite santíssima\n(\neste dia santíssimo\n)\n,\nexpulse dos vossos corações as trevas dos vícios\ne vos ilumine com a luz das virtudes.\n℟.\nAmém.\nAquele que anunciou aos pastores pelo anjo\na grande alegria do nascimento do Salvador,\nfaça transbordar de alegria vossos corações\ne vos torne mensageiros do seu Evangelho.\n℟.\nAmém.\nAquele que, pela encarnação de seu Filho, uniu a terra ao céu,\nvos cumule com os dons da sua paz e da sua benevolência\ne vos torne participantes da Igreja celeste.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n3.\nInício do ano\nDeus, fonte e origem de toda bênção,\nvos conceda a sua graça,\nvos abençoe abundantemente\ne vos guarde sãos e salvos\ntodos os dias deste ano.\n℟.\nAmém.\nEle vos conserve íntegros na fé,\ninabaláveis na esperança\ne perseverantes até o fim na caridade.\n℟.\nAmém.\nEle disponha em sua paz vossos dias e vossas ações,\natenda sempre as vossas preces\ne vos conduza felizes à vida eterna.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n4.\nEpifania do Senhor\nDeus, que vos chamou das trevas à sua luz admirável,\nderrame benigno sobre vós as suas bênçãos\ne confirme os vossos corações na fé, na esperança e na caridade.\n℟.\nAmém.\nPorque seguis confiantes o Cristo,\nque hoje se manifestou ao mundo\ncomo luz que ilumina as trevas,\nDeus vos torne também uma luz\npara os vossos irmãos e irmãs.\n℟.\nAmém.\nTerminada a vossa peregrinação,\npossais chegar ao Cristo Senhor, luz da luz,\nque os magos procuravam guiados pela estrela\ne com grande alegria encontraram.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n5.\nPaixão do Senhor\nDeus, o Pai de misericórdia,\nque vos deu um exemplo de amor na paixão do seu Filho,\nvos conceda, pelo vosso serviço a Deus e ao próximo,\no dom inefável da sua bênção.\n℟.\nAmém.\nDeus que, pela morte do Filho na cruz\nnos livrou da morte eterna,\nvos conduza à vida que não tem fim.\n℟.\nAmém.\nDeus torne participantes da ressurreição de Cristo\na vós que seguistes o seu testemunho de humildade.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n6.\nTempo Pascal\nDeus que, pela ressurreição do seu Filho único,\nvos deu a graça da redenção e vos tornou seus filhos,\nvos conceda a alegria de sua bênção.\n℟.\nAmém.\nDeus que, pela redenção de Cristo,\nvos concedeu o dom da verdadeira liberdade,\npor sua misericórdia vos torne participantes da herança eterna.\n℟.\nAmém.\nE, vivendo agora retamente,\npossais no céu unir-vos a Deus,\npara o qual, pela fé, já ressuscitastes no Batismo.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n7.\nAscensão do Senhor\nAbençoe-vos o Deus todo-poderoso,\ncujo Filho Unigênito hoje subiu ao mais alto dos céus,\ne vos abriu o caminho para onde ele mesmo está.\n℟.\nAmém.\nDeus vos conceda que o Cristo,\nassim como se manifestou aos discípulos após a ressurreição,\nvos apareça em sua eterna benevolência,\nquando vier para o julgamento.\n℟.\nAmém.\nE vós, crendo que o Cristo\nestá sentado com o Pai em sua glória,\npossais experimentar, conforme sua promessa,\na alegria de permanecer com ele até o fim dos tempos.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n8.\nEspírito Santo\nDeus, o Pai das luzes,\nque iluminou os corações dos discípulos,\nderramando sobre eles o Espírito Santo,\nvos conceda a alegria de sua bênção\ne a plenitude dos dons do mesmo Espírito.\n℟.\nAmém.\nAquele fogo, descido de modo admirável sobre os discípulos,\npor seu poder purifique os vossos corações de todo mal\ne vos ilumine com o explendor da sua luz.\n℟.\nAmém.\nAquele que na proclamação de uma só fé\nreuniu a diversidade das línguas\nvos faça perseverar na mesma fé\ne por ela passar da esperança à plena visão.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n9.\nTempo Comum, I (Bênção de Aarão: Nm 6, 24-26)\nDeus vos abençoe e vos guarde.\n℟.\nAmém.\nEle vos mostre a sua face e se compadeça de vós.\n℟.\nAmém.\nVolva para vós o seu olhar e vos dê a sua paz.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n10.\nTempo comum, II (Fl 4, 7)\nA paz de Deus, que supera todo entendimento,\nguarde vossos corações e vossas mentes\nno conhecimento e no amor de Deus\ne de seu Filho, nosso Senhor Jesus Cristo.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n11.\nTempo comum, III\nDeus todo-poderoso vos abençoe na sua bondade\ne infunda em vós a sabedoria da salvação.\n℟.\nAmém.\nSempre vos alimente com os ensinamentos da fé\ne vos faça perseverar nas boas obras.\n℟.\nAmém.\nOriente para ele os vossos passos\ne vos mostre o caminho da caridade e da paz.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n12.\nTempo comum, IV\nO Deus de toda consolação\ndisponha na sua paz os vossos dias\ne vos conceda os dons da sua bênção.\n℟.\nAmém.\nSempre vos liberte de toda aflição\ne confirme os vossos corações em seu amor.\n℟.\nAmém.\nE assim, ricos em esperança, fé e caridade,\npossais viver praticando o bem\ne chegar felizes à vida eterna.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n13.\nTempo comum, V\nDeus todo-poderoso\nvos livre sempre de toda adversidade\ne derrame benigno sobre vós os dons da sua bênção.\n℟.\nAmém.\nTorne os vossos corações atentos à sua palavra,\na fim de que transbordeis de alegria divina.\n℟.\nAmém.\nAssim, abraçando o bem e a justiça,\npossais correr sempre\npelo caminho dos mandamentos divinos\ne tornar-vos coerdeiros dos santos.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n14.\nTempo comum, VI (2Ts 2, 16-17)\nDeus vos abençoe com toda bênção celeste,\npara serdes sempre santos e irrepreensíveis em sua presença;\nderrame sobre vós abundantemente as riquezas da sua glória,\nvos instrua com a palavra da verdade,\nvos eduque pelo Evangelho da salvação\ne vos enriqueça com o amor fraterno, por Cristo nosso Senhor.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\nAbrir II. Nas celebrações dos Santos\nII. Nas celebrações dos Santos\n15.\nBem-aventurada Virgem Maria\nO Deus de bondade que,\npelo Filho da Virgem Maria, quis salvar o gênero humano\nvos enriqueça com sua bênção.\n℟.\nAmém.\nSeja-vos dado sentir sempre e por toda parte\na proteção da Virgem,\npor quem recebestes o autor da vida.\n℟.\nAmém.\nE vós, reunidos hoje para celebrar com fervor sua solenidade,\npossais colher a alegria espiritual e o prêmio eterno.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n16.\nSantos Pedro e Paulo\nAbençoe-vos o Deus todo-poderoso,\nque vos deu por fundamento aquela fé\nproclamada com vigor pelo Apóstolo Pedro\ne sobre a qual se edificou a Igreja.\n℟.\nAmém.\nEle, que vos instruiu pela incansável pregação do apóstolo Paulo,\nvos ensine por seu exemplo\na sempre atrair para Cristo novos irmãos.\n℟.\nAmém.\nPedro, pelo poder das chaves, Paulo, pela força da palavra,\ne ambos, por sua intercessão,\nnos conduzam àquela pátria, onde chegaram merecidamente\num pela cruz e outro pela espada.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n17.\nSantos Apóstolos\nDeus, que vos firmou na fé apostólica,\nvos abençoe pelos gloriosos méritos e a intercessão\ndos santos Apóstolos\nN.\ne\nN. (\ndo Santo Apóstolo\nN.)\n℟.\nAmém.\nAquele que vos quis instruir\npela doutrina e o exemplo dos Apóstolos\nvos torne, por sua proteção,\ntestemunhas da verdade para todos.\n℟.\nAmém.\nPela intercessão dos Apóstolos,\nque vos deram por sua pregação a firmeza da fé,\npossais alcançar a herança eterna.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\nⒷ Na festa de um Santo\nDeus, nosso Pai, que hoje nos reuniu para celebrar\na festa de São\nN.\n,\n(\npadroeiro de nossa Comunidade,\nou\nParóquia,\nou\nDiocese,\n)\nvos abençoe, vos proteja de todo o mal\ne vos confirme na sua paz.\n℟.\nAmém.\nO Cristo Senhor,\nque manifestou em São\nN.\na força renovadora da Páscoa,\nvos torne testemunhas do seu Evangelho.\n℟.\nAmém.\nO Espírito Santo,\nque em São\nN.\nnos ofereceu um sinal de caridade divina,\nvos torne capazes de criar na Igreja\numa verdadeira comunhão de fé e amor.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n18.\nTodos os Santos\nDeus, glória e exultação dos Santos,\nque vos deu a graça de tão exímios intercessores,\nvos abençoe e para sempre.\n℟.\nAmém.\nLibertos por sua intercessão dos males presentes,\ne estimulados pelo exemplo de suas vidas santas,\nestejais constantemente a serviço\nde Deus e dos irmãos.\n℟.\nAmém.\nE assim, com todos eles,\nvos seja dado gozar a felicidade daquela pátria,\nna qual a Igreja exulta eternamente\npela comunhão gloriosa de seu filhos com os cidadãos do céu.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\nAbrir III. Outras bênçãos\nIII. Outras bênçãos\n19.\nDedicação de Igreja\nDeus, o Senhor do céu e da terra,\nque hoje vos reuniu para a dedicação desta igreja,\n(\npara aniversário da dedicação de sua casa\n)\nvos conceda copiosas bênçãos do céu.\n℟.\nAmém.\nDeus que, em seu Filho, quis congregar todos os filhos dispersos,\nfaça de vós seu templo e morada do Espírito Santo.\n℟.\nAmém.\nE, assim, na felicidade de serdes purificados,\npossais ser o templo em que Deus habita,\ne possuir, com todos os santos,\na herança da felicidade eterna.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n20.\nCelebração pelo Fiéis Defuntos\nDeus, criador e Pai,\nque na ressurreição do seu Filho\ndeu aos que creem a esperança na ressurreição,\nderrame sobre vós a sua bênçao.\n℟.\nAmém.\nCristo, que nos redimiu por sua cruz,\nvos renove em seu amor\ne conceda aos que morreram a luz e a paz.\n℟.\nAmém.\nO Espírito Consolador\nconceda gozar a felicidade prometida\na vós que esperais a vinda gloriosa do Senhor.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n\nOrações Eucarísticas\nMissa\nOração Eucarística I ou Cânon Romano\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nSegue-se, conforme as rubricas, o prefácio, com a conclusão:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nou\nO sacerdote, de braços abertos, diz:\nCP\nPai de misericórdia, a quem sobem nossos louvores, suplicantes, vos rogamos e pedimos por Jesus Cristo, vosso Filho e Senhor nosso,\nune as mãos e traça o sinal da cruz, ao mesmo tempo que sobre o pão e o cálice, dizendo:\nque aceiteis e abençoeis\n✠\nestes dons, estas oferendas, este sacrifício puro e santo,\nde braços abertos, prossegue:\nque oferecemos, antes de tudo, pela vossa Igreja santa e católica: concedei-lhe paz e proteção, unindo-a num só corpo e governando-a por toda a terra, em comunhão com vosso servo o Papa\nN.\n, o nosso Bispo\nN.\n, e todos os que guardam a fé católica que receberam dos Apóstolos.\nA assembleia aclama:\nAbençoai nossa oferenda, ó Senhor!\nMemento dos vivos\n1C\nLembrai-vos, ó Pai, dos vossos filhos e filhas\nN. N.\nUne as mãos e reza por alguns momentos em silêncio por aqueles que quer recordar. De braços abertos, prossegue:\ne de todos os que circundam este altar, dos quais conheceis a fé e a dedicação ao vosso serviço.\n★\nAbrir opção \"Na Missa com Batismo\"\nNa Missa com Batismo\n1C\nLembrai-vos, ó Pai, dos vossos filhos e filhas\nN. N.\naqui se menciona os nomes dos padrinhos e das madrinhas\nque conduziram os vossos eleitos à santa graça do Batismo, e de todos que circundam este altar, dos quais conheceis a fé e a dedicação ao vosso serviço.\n★\nPor eles nós vos oferecemos e também eles vos oferecem este sacrifício de louvor por si e por todos os seus, e elevam a vós as suas preces, Deus eterno, vivo e verdadeiro, para alcançar o perdão de suas faltas, a segurança em suas vidas e a salvação que esperam.\nA assembleia aclama:\nLembrai-vos, ó Pai, dos vossos filhos!\n\"Infra actionem\"\n2C\nEm comunhão com toda a Igreja, celebramos em primeiro lugar a memória da Mãe de nosso Deus e Senhor Jesus Cristo, a gloriosa sempre Virgem Maria,\n★\nAbrir opção \"Comunicantes próprios\": Ⓑ Para os Domingos, No Natal do Senhor e durante a Oitava, Na Epifania do Senhor, Da Vigília Pascal até o 2° Domingo da Páscoa, Na Ascensão do Senhor e Em Pentecostes\nCOMUNICANTES PRÓPRIOS\nⒷ Para os Domingos\nEm comunhão com toda a Igreja, celebramos o glorioso dia em que o Senhor Jesus venceu a morte e nos tornou participantes de sua vida imortal. Veneramos em primeiro lugar a memória da Mãe de nosso Deus e Senhor Jesus Cristo, a gloriosa sempre Virgem Maria,\n★\nNo Natal do Senhor e durante a Oitava\nEm comunhão com toda a Igreja, celebramos\n(\na noite santíssima\n)\no dia santíssimo em que Maria, intacta em sua virgindade, deu à luz o Salvador do mundo. Veneramos em primeiro lugar a memória da mesma Mãe de nosso Deus e Senhor Jesus Cristo, a gloriosa sempre Virgem Maria,\n★\nNa Epifania do Senhor\nEm comunhão com toda a Igreja, celebramos o dia santíssimo em que vosso Filho unigênito, eterno convosco na glória, se manifestou visivelmente em nossa carne. Veneramos em primeiro lugar a memória da Mãe de nosso Deus e Senhor Jesus Cristo, a gloriosa sempre Virgem Maria,\n★\nDa Vigília Pascal até o 2° Domingo da Páscoa\nEm comunhão com toda a Igreja, celebramos\n(\na noite santíssima\n)\no dia santíssimo da Ressurreição de nosso Senhor Jesus Cristo segunda a carne. Veneramos em primeiro lugar a memória da Mãe de nosso Deus e Senhor Jesus Cristo, a gloriosa sempre Virgem Maria,\n★\nNa Ascensão do Senhor\nEm comunhão com toda a Igreja, celebramos o dia santíssimo em que nosso Senhor, vosso Filho unigênito, elevou à vossa direita na glória a nossa frágil natureza humana. Veneramos em primeiro lugar a memória da Mãe de nosso Deus e Senhor Jesus Cristo, a gloriosa sempre Virgem Maria,\n★\nEm Pentecostes\nEm comunhão com toda a Igreja, celebramos o dia santíssimo de Pentecostes em que o Espírito Santo, em línguas de fogo, se manifestou aos Apóstolos. Veneramos em primeiro lugar a memória da Mãe de nosso Deus e Senhor Jesus Cristo, a gloriosa sempre Virgem Maria,\n★\na de seu esposo São José, e também a dos Santos Apóstolos e Mártires: Pedro e Paulo, André,\n(\nTiago e João, Tomé, Tiago e Filipe, Bartolomeu e Mateus, Simão e Tadeu, Lino, Cleto, Clemente, Sisto, Cornélio e Cipriano, Lourenço e Crisógono, João e Paulo, Cosme e Damião\n)\ne a de todos os vossos Santos. Por seus méritos e preces concedei-nos sem cessar a vossa proteção.\n(\nPor Cristo, nosso Senhor. Amém.\n)\nA assembleia aclama:\nEm comunhão com vossos Santos vos louvamos!\nO sacerdote, com os braços abertos, continua:\nCP\nAceitai, ó Pai, com bondade, a oblação dos vossos servos e de toda a vossa família; dai-nos sempre a vossa paz, livrai-nos da condenação eterna e acolhei-nos entre os vossos eleitos.\nUne as mãos.\n(\nPor Cristo, nosso Senhor. Amém.\n)\nAbrir oblações: Da Vigília Pascal até o 2° Domingo da Páscoa, Na Missa com Batismo, Na Missa com Crisma, Ⓑ Na Missa com Primeira Comunhão Eucarística, Ⓑ Na Missa com Unção dos Enfermos e Na Missa com Matrimônio\nDa Vigília Pascal até o 2° Domingo da Páscoa\nAceitai, ó Pai, com bondade, a oblação dos vossos servos e de toda a vossa família; nós a oferecemos também por aqueles que vos dignastes regenerar pela água e pelo Espírito Santo, concedendo-lhes a remissão de todos os pecados. Dai aos nossos dias a vossa paz, livrai-nos da condenação eterna e acolhei-nos entre os vossos eleitos.\nUne as mãos.\n(\nPor Cristo, nosso Senhor. Amém.\n)\nNa Missa com Batismo\nAceitai, ó Pai, com bondade, a oblação dos vossos servos e de toda a vossa família; nós a oferecemos também por aqueles que vos dignastes regenerar pela água e pelo Espírito Santo, concedendo-lhes a remissão de todos os pecados, para que vivam em nosso Senhor Jesus Cristo e tenham seus nomes inscritos no livro da vida.\nUne as mãos.\n(\nPor Cristo, nosso Senhor. Amém.\n)\nNa Missa com Crisma\nAceitai, ó Pai, com bondade, a oblação dos vossos servos e de toda a vossa família; nós a oferecemos também por aqueles que, regenerados pelo Batismo, confirmastes com o dom do Espírito Santo. Nós vos pedimos, Senhor, acolhei benigno a nossa oferta e dignai-vos guardar neles a vossa graça.\nUne as mãos.\n(\nPor Cristo, nosso Senhor. Amém.\n)\nⒷ Na Missa com Primeira Comunhão Eucarística\nAceitai, ó Pai, com bondade, a oblação dos vossos servos e de toda a vossa família; nós a oferecemos por vossos filhos e filhas que hoje reunis pela primeira vez à vossa mesa, na participação do Pão da vida e do Cálice da salvação; concedei-lhes crescer sempre em vossa amizade e na comunhão com vossa Igreja.\nUne as mãos.\n(\nPor Cristo, nosso Senhor. Amém.\n)\nⒷ Na Missa com Unção dos Enfermos\nAceitai, ó Pai, com bondade, a oblação dos vossos servos e de toda a vossa família; nós a oferecemos também pelos nossos irmãos enfermos que, mediante a santa unção, unem os seus sofrimentos à Páscoa de Cristo; dai-lhes consolação, saúde e paz.\nUne as mãos.\n(\nPor Cristo, nosso Senhor. Amém.\n)\nNa Missa com Matrimônio\nAceitai, ó Pai, com bondade, a oblação de vossos servos, como também dos novos esposos\nN.\ne\nN.\n, e de toda a vossa família que por eles intercede. E, como lhes destes chegar ao dia do casamento, concedei-lhes também vida longa e feliz\n(\ne a alegria dos filhos que desejam\n)\n.\nUne as mãos.\n(\nPor Cristo, nosso Senhor. Amém.\n)\nEstendendo as mãos sobre as oferendas, diz:\nCC\nDignai-vos, ó Pai, aceitar, abençoar e santificar estas oferendas; recebei-as como sacrifício espiritual perfeito, a fim de que se tornem para nós o Corpo e o Sangue de vosso amado Filho, nosso Senhor Jesus Cristo.\nUne as mãos.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível, como requer a sua natureza.\nNa véspera de sua paixão,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\nele tomou o pão em suas santas e veneráveis mãos,\neleva os olhos,\nelevou os olhos ao céu, a vós, ó Pai todo-poderoso, pronunciou a bênção de ação de graças, partiu o pão e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca na patena e genuflete em adoração.\nEntão prossegue:\nDo mesmo modo, no fim da Ceia,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nele tomou este precioso cálice em suas santas e veneráveis mãos, pronunciou novamente a bênção de ação de graças e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nOu\nMistério da fé e do amor!\nA assembleia aclama:\nTodas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!\nOu\nMistério da fé para a salvação do mundo!\nA assembleia aclama:\nSalvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição.\nou\nO sacerdote, de braços abertos, diz:\nCC\nCelebrando, pois, a memória da bem-aventurada paixão do vosso Filho, da sua ressurreição dentre os mortos e gloriosa ascensão aos céus, nós, vossos servos, e também vosso povo santo, vos oferecemos, ó Pai, dentre os bens que nos destes, o sacrifício puro, santo e imaculado, Pão santo da vida eterna e Cálice da perpétua salvação.\nRecebei, ó Pai, com olhar benigno, esta oferta, como recebestes os dons do justo Abel, o sacrifício de nosso patriarca Abraão e a oblação pura e santa do sumo sacerdote Melquisedeque.\nA assembleia aclama:\nAceitai, ó Senhor, a nossa oferta!\nUne as mãos e, inclinando-se, diz:\nSuplicantes, vos pedimos, ó Deus onipotente, que esta nossa oferenda seja levada à vossa presença, no altar do céu, pelas mãos do vosso santo Anjo, para que todos nós, participando deste altar pela comunhão do santíssimo Corpo e Sangue do vosso Filho,\nergue-se e faz sobre si o sinal da cruz, dizendo:\nsejamos repletos de todas as graças e bênçãos do céu.\nUne as mãos.\n(\nPor Cristo, nosso Senhor. Amém.\n)\nA assembleia aclama:\nO Espírito nos una num só corpo!\nMemento dos mortos.\nDe braços abertos, diz:\n3C\nLembrai-vos, ó Pai, dos vossos filhos e filhas\nN. N.\nque nos precederam com o sinal da fé e dormem o sono da paz.\nUne as mãos e, em silêncio, reza brevemente pelos defuntos que deseja recordar. De braços abertos, prossegue:\nA eles, e a todos os que descansam no Cristo, concedei o repouso, a luz e a paz.\nUne as mãos.\n(\nPor Cristo, nosso Senhor. Amém.\n)\nA assembleia aclama:\nConcedei-lhes, ó Senhor, a luz eterna!\nBate no peito, dizendo:\n4C\nE a todos nós pecadores,\ne, de braços abertos, prossegue:\nque esperamos na vossa infinita misericórdia, concedei, não por nossos méritos, mas por vossa bondade, o convívio dos Apóstolos e Mártires: João Batista e Estêvão, Matias e Barnabé,\n(\nInácio, Alexandre, Marcelino e Pedro, Felicidade e Perpétua, Águeda e Luzia, Inês, Cecília, Anastácia\n)\ne de todos os vossos Santos.\nUne as mãos:\nPor Cristo, nosso Senhor.\nE prossegue:\nCP\nPor ele não cessais de criar, santificar, vivificar, abençoar estes bens e distribuí-los entre nós.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística II\nEmbora tenha prefácio próprio, esta Oração Eucarística pode ser usada também com outros prefácios, sobretudo aqueles que de maneira sucinta apresentem o mistério da salvação, por exemplo, os prefácios comuns.\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nNa verdade, é digno e justo, é nosso dever e salvação dar-vos graças sempre e em todo lugar, Senhor, Pai santo, por vosso amado Filho, Jesus Cristo.\nEle é a vossa Palavra, pela qual tudo criastes. Ele é o nosso Salvador e Redentor, que se encarnou pelo Espírito Santo e nasceu da Virgem Maria. Ele, para cumprir a vossa vontade e adquirir para vós um povo santo, estendeu os braços na hora da sua paixão, a fim de vencer a morte e manifestar a ressurreição.\nPor isso, com os Anjos e todos os Santos, proclamamos vossa glória, cantando\n(\ndizendo\n)\na uma só voz:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nO sacerdote, de braços abertos, diz:\nCP\nNa verdade, ó Pai, vós sois Santo, fonte de toda santidade.\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nSantificai, pois, estes dons, derramando sobre eles o vosso Espírito,\nune as mãos e traça o sinal da cruz, ao mesmo tempo sobre o pão e o cálice, dizendo:\na fim de que se tornem para nós o Corpo e\n✠\no Sangue de nosso Senhor Jesus Cristo.\nUne as mãos.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nEstando para ser entregue e abraçando livremente a paixão,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nEntão prossegue:\nDo mesmo modo, no fim da Ceia,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nele tomou o cálice em suas mãos e, dando graças novamente, o entregou a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nOu\nMistério da fé e do amor!\nA assembleia aclama:\nTodas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!\nOu\nMistério da fé para a salvação do mundo!\nA assembleia aclama:\nSalvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição.\nou\nO sacerdote, de braços abertos, diz:\nCC\nCelebrando, pois, o memorial da morte e ressurreição do vosso Filho, nós vos oferecemos, ó Pai, o Pão da vida e o Cálice da salvação; e vos agradecemos porque nos tornastes dignos de estar aqui na vossa presença e vos servir.\nA assembleia aclama:\nAceitai, ó Senhor, a nossa oferta!\nSuplicantes, vos pedimos que, participando do Corpo e Sangue de Cristo, sejamos reunidos pelo Espírito Santo num só corpo.\nA assembleia aclama:\nO Espírito nos una num só corpo!\n1C\nLembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro;\n★\nque ela cresça na caridade, em comunhão com o Papa\nN.\n, com o nosso Bispo\nN.\n, os bispos do mundo inteiro, os presbíteros, os diáconos e todos os ministros do vosso povo.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\nAbrir oração pela Igreja: Ⓑ Domingos, Ⓑ Natal do Senhor e Oitava, Ⓑ Epifania do Senhor, Ⓑ Quinta-feira Santa, na Missa Vespertina da Ceia do Senhor, Ⓑ Da Vigília Pascal até o Segundo Domingo da Páscoa, Ⓑ Ascensão do Senhor e Ⓑ Pentecostes\nⒷ Domingos (exceto quando houver outro texto próprio, como nos casos abaixo):\nLembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro; e aqui convocada no dia em que Cristo venceu a morte e nos fez participantes de sua vida imortal;\n★\nⒷ Natal do Senhor e Oitava:\nLembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro; e aqui convocada na noite santíssima\n(\nno dia santíssimo\n)\nem que a Virgem Maria deu ao mundo o Salvador;\n★\nⒷ Epifania do Senhor:\nLembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro; e aqui convocada no dia santíssimo no qual o vosso Filho Unigênito, eterno convosco na glória, se manifestou na nossa natureza humana;\n★\nⒷ Quinta-feira Santa, na Missa Vespertina da Ceia do Senhor:\nLembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro; e aqui convocada no dia santíssimo no qual Jesus Cristo, nosso Senhor, foi entregue à morte por nós;\n★\nⒷ Da Vigília Pascal até o Segundo Domingo da Páscoa:\nLembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro; e aqui convocada na noite santíssima\n(\nno dia santíssimo\n)\nda ressurreição de Cristo Senhor dentre os mortos;\n★\nⒷ Ascensão do Senhor:\nLembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro; e aqui convocada no dia glorioso da Ascensão no qual Cristo colocou à direita da vossa glória a nossa frágil natureza humana;\n★\nⒷ Pentecostes:\nLembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro; e aqui convocada no dia santíssimo no qual, pela efusão do vosso Espírito, foi manifestada ao mundo como sacramento de unidade para todos os povos;\n★\nAbrir oração pelos fiéis: Na Missa com Batismo (e Crisma), Na Missa com Crisma, Ⓑ Na Missa com Primeira Comunhão Eucarística, Ⓑ Na Missa com Unção dos Enfermos e Na Missa com Matrimônio\nNa Missa com Batismo (e Crisma)\nLembrai-vos também, ó Pai, dos que hoje pelo Batismo\n(\ne pela Crisma\n)\nfizestes membros da vossa família, para que sigam o Cristo, vosso Filho, com todo o coração e grande entusiasmo.\nA assembleia aclama:\nLembrai-vos, ó Pai, dos vossos filhos!\nNa Missa com Crisma\nLembrai-vos também, ó Pai, dos vossos filhos e filhas que hoje vos dignastes confirmar com o dom do Espírito Santo, e conservai-os sempre em vossa graça.\nA assembleia aclama:\nLembrai-vos, ó Pai, dos vossos filhos!\nⒷ Na Missa com Primeira Comunhão Eucarística\nLembrai-vos também, ó Pai, dos vossos filhos e filhas convidados pela primeira vez à vossa mesa, para participar do Pão da vida e do Cálice da salvação; concedei-lhes crescer sempre em vossa amizade e na comunhão com vossa Igreja.\nA assembleia aclama:\nLembrai-vos, ó Pai, dos vossos filhos!\nⒷ Na Missa com Unção dos Enfermos\nLembrai-vos também, ó Pai, destes vossos filhos e filhas que mediante a santa unção, unem os seus sofrimentos à Páscoa de Cristo; dai-lhes consolação, saúde e paz.\nA assembleia aclama:\nLembrai-vos, ó Pai, dos vossos filhos!\nNa Missa com Matrimônio\nLembrai-vos também, ó Pai, destes vossos filhos\nN.\ne\nN.\n. Como lhes concedestes a alegria do sacramento do Matrimônio, possam, por vossa graça, viver no amor recíproco e na paz.\nA assembleia aclama:\nLembrai-vos, ó Pai, dos vossos filhos!\nAbrir oração pelos fiéis defuntos\nNas Missas pelos fiéis defuntos\n2C\nLembrai-vos do vosso filho\n(\nda vossa filha\n)\nN.\n, que\n(\nhoje\n)\nchamastes deste mundo à vossa presença. Tendo sido sepultado\n(\na\n)\ncom Cristo em sua morte, no Batismo, participe igualmente da sua ressurreição.\n2C\nLembrai-vos também, na vossa misericórdia, dos\n(\noutros\n)\nnossos irmãos e irmãs que adormeceram na esperança da ressurreição e de todos os que partiram desta vida; acolhei-os junto a vós na luz da vossa face.\nA assembleia aclama:\nConcedei-lhes, ó Senhor, a luz eterna!\n3C\nEnfim, nós vos pedimos, tende piedade de todos nós e dai-nos participar da vida eterna, com a Virgem Maria, Mãe de Deus, São José, seu esposo, os Apóstolos,\n(\nSão\nN.\n:\nSanto do dia ou padroeiro)\ne todos os Santos que neste mundo viveram na vossa amizade, a fim de vos louvarmos e glorificarmos\nune as mãos\npor Jesus Cristo, vosso Filho.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística III\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nSegue-se conforme as rubricas, o prefácio, com a conclusão:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nO sacerdote, de braços abertos, diz:\nCP\nNa verdade, vós sois Santo, ó Deus do universo, e tudo o que criastes proclama o vosso louvor, porque, por Jesus Cristo, vosso Filho e Senhor nosso, e pela força do Espírito Santo, dais vida e santidade a todas as coisas e não cessais de reunir para vós um povo que vos ofereça em toda parte, do nascer ao pôr do sol, um sacrifício perfeito.\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nPor isso, ó Pai, nós vos suplicamos: santificai pelo Espírito Santo as oferendas que vos apresentamos para serem consagradas\nune as mãos e traça o sinal da cruz, ao mesmo tempo sobre o pão e o cálice, dizendo:\na fim de que se tornem o Corpo e\n✠\no Sangue de vosso Filho, nosso Senhor Jesus Cristo,\nune as mãos\nque nos mandou celebrar estes mistérios.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nNa noite em que ia ser entregue,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo: TOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nEntão prossegue:\nDo mesmo modo, no fim da Ceia,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nele tomou o cálice em suas mãos, pronunciou a bênção de ação de graças, e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nOu\nMistério da fé e do amor!\nA assembleia aclama:\nTodas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!\nOu\nMistério da fé para a salvação do mundo!\nA assembleia aclama:\nSalvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição.\nou\nO sacerdote, de braços abertos, diz:\nCC\nCelebrando agora, ó Pai, o memorial da paixão redentora do vosso Filho, da sua gloriosa ressurreição e ascensão ao céu, e enquanto esperamos sua nova vinda, nós vos oferecemos em ação de graças este sacrifício vivo e santo.\nA assembleia aclama:\nAceitai, ó Senhor, a nossa oferta!\nOlhai com bondade a oblação da vossa Igreja e reconhecei nela o sacrifício que nos reconciliou convosco; concedei que, alimentando-nos com o Corpo e o Sangue do vosso Filho, repletos do Espírito Santo, nos tornemos em Cristo um só corpo e um só espírito.\nA assembleia aclama:\nO Espírito nos una num só corpo!\n1C\nQue o mesmo Espírito faça de nós uma eterna oferenda para alcançarmos a herança com os vossos eleitos: a santíssima Virgem Maria, Mãe de Deus, São José, seu esposo, os vossos santos Apóstolos e gloriosos Mártires,\n(Santo do dia ou padroeiro)\ne todos os Santos, que não cessam de interceder por nós na vossa presença.\nA assembleia aclama:\nFazei de nós uma perfeita oferenda!\n2C\nNós vos suplicamos, Senhor, que este sacrifício da nossa reconciliação estenda a paz e a salvação ao mundo inteiro. Confirmai na fé e na caridade a vossa Igreja que caminha neste mundo com o vosso servo o Papa\nN.\ne o nosso Bispo\nN.\n, com os bispos do mundo inteiro, os presbíteros e diáconos, os outros ministros e o povo por vós redimido.\n★\nAtendei propício às preces desta família, que reunistes em vossa presença. Reconduzi a vós, Pai de misericórdia, todos os vossos filhos e filhas dispersos pelo mundo inteiro.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\nAbrir oração pelos fiéis: Na Missa com Batismo (e Crisma), Na Missa com Crisma, Ⓑ Na Missa com Primeira Comunhão Eucarística e Na Missa com Matrimônio\nNa Missa com Batismo (e Crisma)\n★\nAtendei propício às preces desta família, que reunistes em vossa presença. Confirmai em seu santo propósito os vossos filhos e filhas, que hoje fizestes membros do vosso povo pela água do Batismo\n(\ne pelo dom do Espírito Santo\n)\n; concedei-lhes progredir sempre na vida nova. Reconduzi a vós, Pai de misericórdia, todos os vossos filhos e filhas dispersos pelo mundo inteiro.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\nNa Missa com Crisma\n★\nAtendei propício às preces desta família, que reunistes em vossa presença. Lembrai-vos também dos vossos filhos e filhas que, renascidos pelo Batismo, vos dignastes confirmar com o Espírito Santo, vosso grande dom; guardai-os sempre em vossa graça. Reconduzi a vós, Pai de misericórdia, todos os vossos filhos e filhas dispersos pelo mundo inteiro.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\nⒷ Na Missa com Primeira Comunhão Eucarística\n★\nAtendei propício às preces desta família, que reunistes em vossa presença. Lembrai-vos também dos vossos filhos e filhas que hoje reunis pela primeira vez à vossa mesa, na participação do Pão da vida e do Cálice da salvação; concedei-lhes crescer sempre em vossa amizade e na comunhão da vossa Igreja. Reconduzi a vós, Pai de misericórdia, todos os vossos filhos e filhas dispersos pelo mundo inteiro.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\nNa Missa com Matrimônio\n★\nAtendei propício às preces desta família, que reunistes em vossa presença. Fortalecei na graça do Matrimônio estes vossos filhos\nN.\ne\nN.\n, que fizestes chegar com alegria ao dia das núpcias; firmes no vosso amor, conservem por toda a vida tão santa aliança. Reconduzi a vós, Pai de misericórdia, todos os vossos filhos e filhas dispersos pelo mundo inteiro.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\n3C\nAcolhei com bondade no vosso reino os nossos irmãos e irmãs que partiram desta vida e todos os que morreram na vossa amizade. Unidos a eles, esperamos também nós saciar-nos eternamente da vossa glória,\nune as mãos\npor Cristo, Senhor nosso. Por ele dais ao mundo todo bem e toda graça.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nAbrir opção pelos fiéis defuntos\nNas Missas pelos fiéis defuntos, pode-se dizer:\n3C\nLembrai-vos, ó Pai, do\n(s)\nvosso\n(s)\nfilho\n(s)\n(\nda\n(s)\nvossa\n(s)\nfilha\n(s)) N.\n, que\n(\nhoje\n)\nchamastes deste mundo à vossa presença. Concedei-lhe que, tendo participado da morte de Cristo pelo Batismo, participe igualmente da sua ressurreição, no dia em que ele ressuscitar os mortos, tornando o nosso pobre corpo semelhante ao seu corpo glorioso. Acolhei com bondade no vosso reino os outros irmãos e irmãs que partiram desta vida e todos os que morreram na vossa amizade.\nUnidos a eles, esperamos também nós saciar-nos eternamente da vossa glória, quando enxugardes toda lágrima dos nossos olhos. Então, contemplando-vos como sois, seremos para sempre semelhantes a vós e cantaremos sem cessar os vossos louvores\nune as mãos\npor Cristo, Senhor nosso. Por ele dais ao mundo todo bem e toda graça.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística IV\nEste prefácio não pode ser substituído por outro, porque introduz a Oração Eucarística cuja estrutura apresenta um resumo da História da Salvação.\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nNa verdade, ó Pai, é nosso dever dar-vos graças, é nossa salvação dar-vos glória. Só vós sois o Deus vivo e verdadeiro que existis antes de todo o tempo e permaneceis para sempre, habitando em luz inacessível.\nMas, porque sois o Deus de bondade e a fonte da vida, fizestes todas as coisas para cobrir de bênçãos as vossas criaturas e a muitos alegrar com o esplendor da vossa luz.\nEis, pois, diante de vós os inumeráveis coros dos Anjos que dia e noite vos servem e, contemplando a glória da vossa face, vos louvam sem cessar. Com eles também nós e, por nossa voz, tudo o que criastes celebramos vosso Nome e, exultantes de alegria, cantamos\n(\ndizemos\n)\na uma só voz:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nou\nO sacerdote, de braços abertos, diz:\nCP\nNós proclamamos vossa grandeza, Pai santo, a sabedoria e o amor com que fizestes todas as coisas. Criastes o ser humano à vossa imagem e lhe confiastes todo o universo, para que, servindo somente a vós, seu Criador, cuidasse de toda criatura. E quando pela desobediência perdeu a vossa amizade, não o abandonastes ao poder da morte. A todos, porém, socorrestes com misericórdia, para que, ao procurar-vos, vos encontrassem. Muitas vezes oferecestes aliança à família humana e a instruístes pelos profetas na esperança da salvação.\nA assembleia aclama:\nA todos socorrestes com bondade!\nE de tal modo, Pai santo, amastes o mundo que, chegada a plenitude dos tempos, nos enviastes vosso próprio Filho para ser o nosso Salvador. Encarnado pelo poder do Espírito Santo e nascido da Virgem Maria, Jesus viveu em tudo a condição humana, menos o pecado; anunciou aos pobres a salvação, aos oprimidos, a liberdade, aos tristes, a alegria. Para cumprir o vosso plano de amor, entregou-se à morte e, ressuscitando, destruiu a morte e renovou a vida.\nA assembleia aclama:\nPor amor nos enviastes vosso Filho!\nE, a fim de não mais vivermos para nós, mas para ele, que por nós morreu e ressuscitou, enviou de vós, ó Pai, como primeiro dom aos vossos fiéis, o Espírito Santo, que continua sua obra no mundo para levar à plenitude toda a santificação.\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nPor isso, nós vos pedimos, ó Pai, que o mesmo Espírito Santo santifique estas oferendas,\nune as mãos e traça o sinal da cruz, ao mesmo tempo sobre o pão e o cálice, dizendo:\na fim de que se tornem o Corpo e\n✠\no Sangue de Jesus Cristo, vosso Filho e Senhor nosso,\nune as mãos\npara celebrarmos este grande mistério que ele nos deixou em sinal da eterna aliança.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nQuando, pois, chegou a hora em que por vós, ó Pai, ia ser glorificado, tendo amado os seus que estavam no mundo, amou-os até o fim. Enquanto ceavam,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nEntão prossegue:\nDo mesmo modo,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nele tomou em suas mãos o cálice com vinho, deu-vos graças novamente, e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nOu\nMistério da fé e do amor!\nA assembleia aclama:\nTodas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!\nOu\nMistério da fé para a salvação do mundo!\nA assembleia aclama:\nSalvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição.\nou\nO sacerdote, de braços abertos, diz:\nCC\nCelebrando, agora, ó Pai, o memorial da nossa redenção, anunciamos a morte de Cristo e sua descida entre os mortos, proclamamos a sua ressurreição e ascensão à vossa direita e, esperando a sua vinda gloriosa, nós vos oferecemos o seu Corpo e Sangue, sacrifício do vosso agrado e salvação para o mundo inteiro.\nA assembleia aclama:\nAceitai, ó Senhor, a nossa oferta!\nOlhai, com bondade, a oblação que destes à vossa Igreja e concedei aos que vamos participar do mesmo pão e do mesmo cálice que, reunidos pelo Espírito Santo num só corpo, nos tornemos em Cristo uma oferenda viva para o louvor da vossa glória.\nA assembleia aclama:\nO Espírito nos una num só corpo!\n1C\n★\nE agora, ó Pai, lembrai-vos de todos pelos quais vos oferecemos este sacrifício: o vosso servo o Papa\nN.\n, o nosso Bispo\nN.\n, os bispos do mundo inteiro, os presbíteros, os diáconos, e todos os ministros da vossa Igreja, os fiéis que, ao redor deste altar, se unem à nossa oferta, o povo que vos pertence e aqueles que vos procuram de coração sincero.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\nAbrir oração pelos fiéis: Na Missa com Batismo, Na Missa com Crisma e Ⓑ Na Missa com Primeira Comunhão Eucarística\nNa Missa com Batismo\n★\nE agora, ó Pai, lembrai-vos de todos pelos quais vos oferecemos este sacrifício: o vosso servo o Papa\nN.\n, o nosso Bispo\nN.\n, os bispos do mundo inteiro, os presbíteros, os diáconos e todos os ministros da vossa Igreja, os que hoje fizestes renascer da água e do Espírito Santo, os fiéis que, ao redor deste altar, se unem à nossa oferta, o povo que vos pertence e aqueles que vos procuram de coração sincero.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\nNa Missa com Crisma\n★\nE agora, ó Pai, lembrai-vos de todos pelos quais vos oferecemos este sacrifício: o vosso servo o Papa\nN.\n, o nosso Bispo\nN.\n, os bispos do mundo inteiro, os presbíteros, os diáconos e todos os ministros da vossa Igreja, os que hoje foram ungidos pelo Espírito Santo, dom de Deus, os fiéis que, ao redor deste altar, se unem à nossa oferta, o povo que vos pertence e aqueles que vos procuram de coração sincero.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\nⒷ Na Missa com Primeira Comunhão Eucarística\n★\nE agora, ó Pai, lembrai-vos de todos pelos quais vos oferecemos este sacrifício: o vosso servo o Papa\nN.\n, o nosso Bispo\nN.\n, os bispos do mundo inteiro, os presbíteros, os diáconos e todos os ministros da vossa Igreja, os que hoje reunis pela primeira vez à vossa mesa na participação do Pão da vida e do Cálice da salvação, os fiéis que, ao redor deste altar, se unem à nossa oferta, o povo que vos pertence e aqueles que vos procuram de coração sincero.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\n2C\nLembrai-vos também dos que morreram na paz do vosso Cristo e de todos os defuntos dos quais só vós conhecestes a fé.\nA assembleia aclama:\nConcedei-lhes, ó Senhor, a luz eterna!\n3C\nE a todos nós, vossos filhos e filhas, concedei, ó Pai de bondade, alcançar a herança eterna, com a Virgem Maria, Mãe de Deus, São José, seu esposo, os Apóstolos e todos os Santos, no vosso reino, onde, com todas as criaturas, libertas da corrupção do pecado e da morte, vos glorificaremos,\nune as mãos\npor Cristo, Senhor nosso, por quem dais ao mundo todo bem e toda graça.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística V Ⓑ\nO prefácio não pode ser substituído por outro.\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nÉ justo e nos faz todos ser mais santos, louvar a vós, ó Pai, no mundo inteiro, de dia e de noite, agradecendo com Cristo, vosso Filho, nosso irmão.\nÉ ele o sacerdote verdadeiro que sempre se oferece por nós todos, mandando que se faça a mesma coisa que fez naquela Ceia derradeira.\nPor isso, aqui estamos reunidos, louvando e agradecendo com alegria, juntando nossa voz à voz dos Anjos e dos Santos todos, para cantar\n(\ndizer\n)\n:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nO sacerdote, de braços abertos, diz:\nCP\nÓ Pai, vós que sempre quisestes ficar muito perto de nós, vivendo conosco no Cristo, falando conosco por ele,\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nmandai o vosso Espírito Santo,\nune as mãos e traça o sinal da cruz, ao mesmo tempo sobre o pão e o cálice, dizendo:\na fim de que as nossas ofertas se mudem no Corpo\n✠\ne no Sangue de nosso Senhor Jesus Cristo.\nA assembleia aclama:\nMandai vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nNa noite em que ia ser entregue, ceando com seus Apóstolos,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou o pão em suas mãos,\neleva os olhos\nolhou para o céu e vos deu graças, partiu o pão e o entregou a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nEntão prossegue:\nDo mesmo modo, no fim da Ceia,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\ntomou o cálice em suas mãos, deu-vos graças novamente e o entregou a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nTudo isto é mistério da fé!\nA assembleia aclama:\nToda vez que\ncomemos\ndeste Pão, toda vez que\nbebemos\ndeste Vinho,\nrecordamos\na paixão de Jesus Cristo e\nficamos\nesperando sua\nvinda\n.\nou\nO sacerdote, de braços abertos, diz:\nRecordando, ó Pai, neste momento, a paixão de Jesus, nosso Senhor, sua ressurreição e ascensão, nós queremos a vós oferecer este Pão que alimenta e que dá vida, este Vinho que nos salva e dá coragem.\nA assembleia aclama:\nRecebei, ó Senhor, a nossa oferta!\nE quando recebermos Pão e Vinho, o Corpo e Sangue dele oferecidos, o Espírito nos una num só corpo, para sermos um só povo em seu amor.\nA assembleia aclama:\nO Espírito nos una num só corpo!\n1C\nProtegei vossa Igreja que caminha nas estradas do mundo rumo ao céu, cada dia renovando a\nesperança de chegar junto a vós, na vossa paz.\nA assembleia aclama:\nCaminhamos na estrada de Jesus!\n2C\nDai ao vosso servo, o Papa N., ser bem firme na fé, na caridade, e a N., que é Bispo desta\nIgreja, muita luz para guiar o vosso Povo.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\n3C\nEsperamos entrar na vida eterna com Maria, Mãe de Deus e da Igreja, os Apóstolos, e todos\nos que na vida souberam amar Cristo e seus irmãos.\nA assembleia aclama:\nEsperamos entrar na vida eterna!\n4C\nAbri as portas da misericórdia aos que chamastes para a outra vida; acolhei-os junto a vós,\nbem felizes, no reino que para todos preparastes.\nA assembleia aclama:\nA todos dai a luz que não se apaga!\nO sacerdote, de braços abertos, continua:\nCP\nE a todos nós, aqui reunidos, que somos povo santo e pecador, dai-nos a graça de participar\ndo vosso reino que também é nosso.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística (D1) para diversas circunstâncias 1\nA IGREJA A CAMINHO DA UNIDADE\nConvém usar Oração Eucarística com os formulários de Missa, pela Igreja, pelo Papa, pelo Bispo, para a eleição do Papa ou Bispo, por um Concílio ou Sínodo, pelos sacerdotes, pelo próprio sacerdote, pelos ministros da Igreja, para uma reunião espiritual ou pastoralⒷ e quando houver sintonia com a Liturgia da Palavra.\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nNa verdade, é digno e justo, é nosso dever e salvação dar-vos graças e cantar-vos um hino de glória e louvor, Senhor, Pai de infinita bondade.\nPela palavra do Evangelho do vosso Filho reunistes uma só Igreja de todos os povos, línguas e nações. Por ela, vivificada pela força do vosso Espírito, não deixais de congregar na unidade todo o gênero humano.\nManifestando a aliança do vosso amor, a Igreja irradia sem cessar a alegre esperança do vosso reino e brilha como sinal da vossa fidelidade que prometestes para sempre em Cristo Jesus, Senhor nosso.\nPor isso, unidos a todos os Anjos dos céus, nós vos celebramos na terra, cantando\n(\ndizendo\n)\ncom a Igreja inteira a uma só voz:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nO sacerdote, de braços abertos, diz:\nCP\nNa verdade, vós sois Santo e digno de louvor, ó Deus, que amais os seres humanos e sempre os acompanhais no caminho da vida. Na verdade, é bendito o vosso Filho, presente no meio de nós, quando nos reunimos por seu amor. Como outrora aos discípulos de Emaús, ele nos revela as Escrituras e parte o Pão para nós.\nA assembleia aclama:\nBendito o vosso Filho, presente entre nós!\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nPor isso, nós vos suplicamos, Pai de bondade: enviai e o vosso Espírito Santo para que santifique estes dons do pão e do vinho,\nune as mãos e traça o sinal da cruz, ao mesmo tempo que sobre o pão e o cálice, dizendo:\ne se tornem para nós o Corpo e\n✠\no Sangue\nune as mãos\nde nosso Senhor Jesus Cristo.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nNa véspera de sua paixão, na noite da última Ceia,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nEntão prossegue:\nDo mesmo modo, no fim da Ceia,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nele tomou o cálice em suas mãos, deu-vos graças novamente e o entregou a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nOu\nMistério da fé e do amor!\nA assembleia aclama:\nTodas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!\nOu\nMistério da fé para a salvação do mundo!\nA assembleia aclama:\nSalvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição.\nO sacerdote, de braços abertos, diz:\nCC\nCelebrando, pois, ó Pai santo, o memorial da Páscoa de Cristo, vosso Filho, nosso Salvador, anunciamos a obra do vosso amor; pela paixão e morte de cruz, vós o fizestes entrar na glória da ressurreição e o colocastes à vossa direita. Enquanto esperamos sua vinda gloriosa, nós vos oferecemos o Pão da vida e o Cálice da bênção.\nA assembleia aclama:\nAceitai, ó Senhor, a nossa oferta!\nOlhai com bondade a oferta da vossa Igreja; nela vos apresentamos o sacrifício pascal de Cristo, que nos foi entregue. E concedei que, pela força do Espírito do vosso amor, sejamos contados, agora e por toda a eternidade, entre os membros do vosso Filho, cujo Corpo e Sangue comungamos.\nA assembleia aclama:\nO Espírito nos una num só corpo!\n1C\nRenovai, ó Pai, com a luz do Evangelho, a vossa Igreja\n(\nque está em\nN.)\n. Fortalecei o vínculo da unidade entre os fiéis e os pastores do vosso povo, em comunhão com o nosso Papa\nN.\n, o nosso Bispo\nN.\ne toda a ordem episcopal. Assim, neste mundo dilacerado por discórdias, o vosso povo brilhe como sinal profético de unidade e concórdia.\nA assembleia aclama:\nConfirmai na unidade a vossa Igreja!\n2C\nLembrai-vos dos nossos irmãos e irmãs\n(N.\ne\nN.)\n, que adormeceram na paz do vosso Cristo, e de todos os falecidos, cuja fé só vós conhecestes: acolhei-os na luz da vossa face e, na ressurreição, concedei-lhes a plenitude da vida.\nA assembleia aclama:\nConcedei-lhes, ó Senhor, a luz eterna!\n3C\nConcedei também a nós, no fim da nossa peregrinação terrestre, chegarmos todos à morada eterna, onde viveremos para sempre convosco e, com a Bem-aventurada Virgem Maria, Mãe de Deus, os Apóstolos e Mártires,\n(\nSão\nN.\n:\nSanto do dia ou padroeiro)\ne todos os Santos, vos louvaremos e glorificaremos,\nune as mãos\npor Jesus Cristo, vosso Filho.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística (D2) para diversas circunstâncias 2\nDEUS CONDUZ SUA IGREJA NO CAMINHO DA SALVAÇÃO\nConvém usar esta Oração Eucarística com os formulários de Missa, pela Igreja, pelas vocações às ordens sagradas, pelos leigos, pela família, pelos religiosos, pelas vocações à vida religiosa, para pedir caridade, pelos parentes e amigos, em ação de graças Ⓑ e quando houver sintonia com a Liturgia da Palavra.\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nNa verdade, é digno e justo, é nosso dever e salvação dar-vos graças, sempre e em todo lugar, Senhor, Pai santo, criador do mundo e fonte de toda vida.\nNunca abandonais a obra da vossa sabedoria, mas, em vossa providência, continuais agindo no meio de nós. Com braço estendido e mão forte, guiastes o vosso povo de Israel pelo deserto.\nAgora, com a força do Espírito Santo, acompanhais sempre a vossa Igreja, peregrina neste mundo, e a conduzis pelos caminhos da história até à felicidade perfeita em vosso reino por Jesus Cristo, Senhor nosso.\nPor isso, também nós, com os Anjos e Santos, proclamamos o hino de vossa glória, cantando\n(\ndizendo\n)\nsem cessar:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nO sacerdote, de braços abertos, diz:\nCP\nNa verdade, vós sois Santo e digno de louvor, ó Deus, que amais os seres humanos e sempre os acompanhais no caminho da vida. Na verdade, é bendito o vosso Filho, presente no meio de nós, quando nos reunimos por seu amor. Como outrora aos discípulos de Emaús, ele nos revela as Escrituras e parte o Pão para nós.\nA assembleia aclama:\nBendito o vosso Filho, presente entre nós!\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nPor isso, nós vos suplicamos, Pai de bondade: enviai e o vosso Espírito Santo para que santifique estes dons do pão e do vinho,\nune as mãos e traça o sinal da cruz, ao mesmo tempo que sobre o pão e o cálice, dizendo:\ne se tornem para nós o Corpo e\n✠\no Sangue\nune as mãos\nde nosso Senhor Jesus Cristo.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nNa véspera de sua paixão, na noite da última Ceia,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nEntão prossegue:\nDo mesmo modo, no fim da Ceia,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nele tomou o cálice em suas mãos, deu-vos graças novamente e o entregou a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nOu\nMistério da fé e do amor!\nA assembleia aclama:\nTodas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!\nOu\nMistério da fé para a salvação do mundo!\nA assembleia aclama:\nSalvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição.\nO sacerdote, de braços abertos, diz:\nCC\nCelebrando, pois, ó Pai santo, o memorial da Páscoa de Cristo, vosso Filho, nosso Salvador, anunciamos a obra do vosso amor; pela paixão e morte de cruz, vós o fizestes entrar na glória da ressurreição e o colocastes à vossa direita. Enquanto esperamos sua vinda gloriosa, nós vos oferecemos o Pão da vida e o Cálice da bênção.\nA assembleia aclama:\nAceitai, ó Senhor, a nossa oferta!\nOlhai com bondade a oferta da vossa Igreja; nela vos apresentamos o sacrifício pascal de Cristo, que nos foi entregue. E concedei que, pela força do Espírito do vosso amor, sejamos contados, agora e por toda a eternidade, entre os membros do vosso Filho, cujo Corpo e Sangue comungamos.\nA assembleia aclama:\nO Espírito nos una num só corpo!\n1C\nÓ Pai, confirmai na unidade os convidados a participar da vossa mesa, para que, seguindo na fé e na esperança pelos vossos caminhos, possamos irradiar no mundo alegria e confiança em comunhão com o nosso Papa\nN.\n, o nosso Bispo\nN.\n, todos os bispos, presbíteros, diáconos e todo o vosso povo.\nA assembleia aclama:\nConfirmai na unidade a vossa Igreja!\n2C\nLembrai-vos dos nossos irmãos e irmãs\n(N.\ne\nN.)\n, que adormeceram na paz do vosso Cristo, e de todos os falecidos, cuja fé só vós conhecestes: acolhei-os na luz da vossa face e, na ressurreição, concedei-lhes a plenitude da vida.\nA assembleia aclama:\nConcedei-lhes, ó Senhor, a luz eterna!\n3C\nConcedei também a nós, no fim da nossa peregrinação terrestre, chegarmos todos à morada eterna, onde viveremos para sempre convosco e, com a Bem-aventurada Virgem Maria, Mãe de Deus, os Apóstolos e Mártires,\n(\nSão\nN.\n:\nSanto do dia ou padroeiro)\ne todos os Santos, vos louvaremos e glorificaremos,\nune as mãos\npor Jesus Cristo, vosso Filho.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística (D3) para diversas circunstâncias 3\nJESUS, CAMINHO PARA O PAI\nConvém usar esta Oração Eucarística com os formulários de Missa, pela evangelização dos povos, pelos cristãos perseguidos, pela pátria ou pela cidade, pelos governantes, pelo encontro de chefes das nações, no início do ano civil, pelo progresso dos povos Ⓑ e quando houver sintonia com a Liturgia da Palavra.\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nNa verdade, é digno e justo, é nosso dever e salvação dar-vos graças, sempre e em todo lugar, Pai santo, Senhor do céu e da terra, por Cristo, Senhor nosso.\nDe fato, pelo vosso Verbo criastes o universo e tudo governais com equidade. Vós nos destes vosso Filho, feito carne, como mediador; ele nos dirigiu a vossa palavra e nos chamou a seguir os seus passos.\nEle é o caminho que nos conduz até vós, a verdade que nos liberta, a vida que nos enche de alegria.\nPor vosso Filho, reunis em uma só família os homens e as mulheres, criados para a glória do vosso nome, redimidos pelo sangue de sua cruz e marcados com o selo do vosso Espírito.\nPor isso, agora e para sempre, unidos a todos os Anjos, proclamamos a vossa glória, cantando\n(\ndizendo\n)\ncom alegria:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nO sacerdote, de braços abertos, diz:\nCP\nNa verdade, vós sois Santo e digno de louvor, ó Deus, que amais os seres humanos e sempre os acompanhais no caminho da vida. Na verdade, é bendito o vosso Filho, presente no meio de nós, quando nos reunimos por seu amor. Como outrora aos discípulos de Emaús, ele nos revela as Escrituras e parte o Pão para nós.\nA assembleia aclama:\nBendito o vosso Filho, presente entre nós!\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nPor isso, nós vos suplicamos, Pai de bondade: enviai e o vosso Espírito Santo para que santifique estes dons do pão e do vinho,\nune as mãos e traça o sinal da cruz, ao mesmo tempo que sobre o pão e o cálice, dizendo:\ne se tornem para nós o Corpo e\n✠\no Sangue\nune as mãos\nde nosso Senhor Jesus Cristo.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nNa véspera de sua paixão, na noite da última Ceia,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nEntão prossegue:\nDo mesmo modo, no fim da Ceia,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nele tomou o cálice em suas mãos, deu-vos graças novamente e o entregou a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nOu\nMistério da fé e do amor!\nA assembleia aclama:\nTodas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!\nOu\nMistério da fé para a salvação do mundo!\nA assembleia aclama:\nSalvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição.\nO sacerdote, de braços abertos, diz:\nCC\nCelebrando, pois, ó Pai santo, o memorial da Páscoa de Cristo, vosso Filho, nosso Salvador, anunciamos a obra do vosso amor; pela paixão e morte de cruz, vós o fizestes entrar na glória da ressurreição e o colocastes à vossa direita. Enquanto esperamos sua vinda gloriosa, nós vos oferecemos o Pão da vida e o Cálice da bênção.\nA assembleia aclama:\nAceitai, ó Senhor, a nossa oferta!\nOlhai com bondade a oferta da vossa Igreja; nela vos apresentamos o sacrifício pascal de Cristo, que nos foi entregue. E concedei que, pela força do Espírito do vosso amor, sejamos contados, agora e por toda a eternidade, entre os membros do vosso Filho, cujo Corpo e Sangue comungamos.\nA assembleia aclama:\nO Espírito nos una num só corpo!\n1C\nPela participação neste mistério, ó Pai todo-poderoso, vivificai-nos no Espírito, tornai-nos semelhantes à imagem do vosso Filho e confirmai-nos no vínculo da comunhão com o nosso Papa\nN.\n, o nosso Bispo\nN.\n, os outros bispos, os presbíteros e diáconos e todo o vosso povo.\nA assembleia aclama:\nConfirmai na unidade a vossa Igreja!\n2C\nFazei que todos os fiéis da Igreja, discernindo os sinais dos tempos à luz da fé, empenhem-se coerentemente no serviço do Evangelho. Tornai-nos atentos às necessidades de todas as pessoas para que, participando de suas dores e angústias, de suas alegrias e esperanças, fielmente lhes anunciemos a salvação e, com eles, sigamos no caminho do vosso reino.\nA assembleia aclama:\nAjudai-nos a criar um mundo novo!\n3C\nLembrai-vos dos nossos irmãos e irmãs\n(N.\ne\nN.)\n, que adormeceram na paz do vosso Cristo, e de todos os falecidos, cuja fé só vós conhecestes: acolhei-os na luz da vossa face e, na ressurreição, concedei-lhes a plenitude da vida.\nA assembleia aclama:\nConcedei-lhes, ó Senhor, a luz eterna!\n4C\nConcedei também a nós, no fim da nossa peregrinação terrestre, chegarmos todos à morada eterna, onde viveremos para sempre convosco e, com a Bem-aventurada Virgem Maria, Mãe de Deus, os Apóstolos e Mártires,\n(\nSão\nN.\n:\nSanto do dia ou padroeiro)\ne todos os Santos, vos louvaremos e glorificaremos, por Jesus Cristo, vosso Filho.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística (D4) para diversas circunstâncias 4\nJESUS QUE PASSA FAZENDO O BEM\nConvém usar esta Oração Eucarística com os formulários de Missa, pelos refugiados e exilados, em tempo de fome ou pelos que passam fome, pelos que nos afligem, pelos mantidos em cativeiro, pelos prisioneiros, pelos enfermos, pelos agonizantes, para pedir a graça de uma boa morte, em qualquer necessidade Ⓑ e quando houver sintonia com a Liturgia da Palavra.\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nNa verdade, é digno e justo, é nosso dever e salvação dar-vos graças, sempre e em todo lugar, Pai das misericórdias e Deus fiel, pois nos destes vosso Filho Jesus Cristo, como Senhor e Redentor.\nEle sempre se mostrou cheio de misericórdia para com os pequenos e os pobres, os doentes e os pecadores, e se fez próximo dos aflitos e oprimidos. Por sua palavra e ação anunciou ao mundo que sois Pai e cuidais de todos os vossos filhos e filhas.\nPor isso, com todos os Anjos e Santos, nós vos louvamos e bendizemos, e proclamamos o hino de vossa glória, cantando\n(\ndizendo\n)\nsem cessar:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nO sacerdote, de braços abertos, diz:\nCP\nNa verdade, vós sois Santo e digno de louvor, ó Deus, que amais os seres humanos e sempre os acompanhais no caminho da vida. Na verdade, é bendito o vosso Filho, presente no meio de nós, quando nos reunimos por seu amor. Como outrora aos discípulos de Emaús, ele nos revela as Escrituras e parte o Pão para nós.\nA assembleia aclama:\nBendito o vosso Filho, presente entre nós!\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nPor isso, nós vos suplicamos, Pai de bondade: enviai e o vosso Espírito Santo para que santifique estes dons do pão e do vinho,\nune as mãos e traça o sinal da cruz, ao mesmo tempo que sobre o pão e o cálice, dizendo:\ne se tornem para nós o Corpo e\n✠\no Sangue\nune as mãos\nde nosso Senhor Jesus Cristo.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nNa véspera de sua paixão, na noite da última Ceia,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nEntão prossegue:\nDo mesmo modo, no fim da Ceia,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nele tomou o cálice em suas mãos, deu-vos graças novamente e o entregou a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nOu\nMistério da fé e do amor!\nA assembleia aclama:\nTodas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!\nOu\nMistério da fé para a salvação do mundo!\nA assembleia aclama:\nSalvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição.\nO sacerdote, de braços abertos, diz:\nCC\nCelebrando, pois, ó Pai santo, o memorial da Páscoa de Cristo, vosso Filho, nosso Salvador, anunciamos a obra do vosso amor; pela paixão e morte de cruz, vós o fizestes entrar na glória da ressurreição e o colocastes à vossa direita. Enquanto esperamos sua vinda gloriosa, nós vos oferecemos o Pão da vida e o Cálice da bênção.\nA assembleia aclama:\nAceitai, ó Senhor, a nossa oferta!\nOlhai com bondade a oferta da vossa Igreja; nela vos apresentamos o sacrifício pascal de Cristo, que nos foi entregue. E concedei que, pela força do Espírito do vosso amor, sejamos contados, agora e por toda a eternidade, entre os membros do vosso Filho, cujo Corpo e Sangue comungamos.\nA assembleia aclama:\nO Espírito nos una num só corpo!\n1C\nDignai-vos, Senhor, conduzir a vossa Igreja à perfeição na fé e no amor, em comunhão com o nosso Papa\nN.\ne o nosso Bispo\nN.\n, com todos os bispos, presbíteros, diáconos e todo o povo que adquiristes para vós.\nA assembleia aclama:\nConfirmai na unidade a vossa Igreja!\n2C\nAbri os nossos olhos para perceber as necessidades dos irmãos e irmãs; inspirai-nos palavras e ações para confortar os cansados e oprimidos; fazei que os sirvamos de coração sincero, seguindo o exemplo e o mandamento de Cristo. Vossa Igreja seja testemunha viva da verdade e da liberdade, da justiça e da paz, para que toda a humanidade se reanime com uma nova esperança.\nA assembleia aclama:\nAjudai-nos a criar um mundo novo!\n3C\nLembrai-vos dos nossos irmãos e irmãs\n(N.\ne\nN.)\n, que adormeceram na paz do vosso Cristo, e de todos os falecidos, cuja fé só vós conhecestes: acolhei-os na luz da vossa face e, na ressurreição, concedei-lhes a plenitude da vida.\nA assembleia aclama:\nConcedei-lhes, ó Senhor, a luz eterna!\n4C\nConcedei também a nós, no fim da nossa peregrinação terrestre, chegarmos todos à morada eterna, onde viveremos para sempre convosco e, com a Bem-aventurada Virgem Maria, Mãe de Deus, os Apóstolos e Mártires,\n(\nSão\nN.\n:\nSanto do dia ou padroeiro)\ne todos os Santos, vos louvaremos e glorificaremos, por Jesus Cristo, vosso Filho.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística (R1) sobre a reconciliação 1\nSOBRE A RECONCILIAÇÃO I\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nNa verdade, é digno e justo dar-vos graças sempre, Senhor, Pai santo, Deus eterno e todo- poderoso. Constantemente nos chamais a uma vida mais plena e, porque sois rico em misericórdia, sempre ofereceis o perdão e convidais os pecadores a confiar somente na vossa bondade.\nE a nós, que tantas vezes quebramos a vossa aliança, nunca nos rejeitastes, mas, por Jesus, vosso Filho, nosso Redentor, unistes convosco a família humana com um vínculo novo de caridade, tão estreito e forte, que nada poderá romper.\nTambém hoje, ofereceis tempo de graça e reconciliação ao vosso povo e um novo alento para que, em Cristo, se converta a vós, enquanto, sempre mais dócil ao Espírito Santo, se coloca ao serviço de todos.\nPor isso, cheios de admiração, exaltamos a força do vosso amor e, proclamando nossa alegria pela salvação, nos unimos às multidões dos céus, cantando\n(\ndizendo\n)\nsem cessar:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nO sacerdote, de braços abertos, diz:\nCP\nNa verdade, ó Pai, vós sois Santo e, desde a origem do mundo, tudo fazeis para sermos santos como vós sois Santo.\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nOlhai as oferendas do vosso povo e derramai sobre elas a força do vosso Espírito, para que se tornem\nune as mãos e traça o sinal da cruz, ao mesmo tempo que sobre o pão e o cálice, dizendo:\no Corpo\n✠\ne o Sangue do vosso amado Filho, Jesus Cristo, no qual também nós somos vossos filhos.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nQuando outrora estávamos perdidos e incapazes de vos encontrar, vós nos amastes com imenso amor, pois vosso Filho, o único Justo, entregou-se à morte, não rejeitando ser pregado no lenho da cruz. Antes, porém, de seus braços abertos traçarem entre o céu e a terra o sinal permanente da vossa aliança, Jesus quis celebrar a Páscoa com seus discípulos.\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nCeando com eles,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\ntomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nEm seguida diz:\nDo mesmo modo, no fim da Ceia, Jesus, sabendo que ia reconciliar em si todas as coisas pelo sangue a ser derramado na cruz,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\ntomou o cálice repleto do fruto da videira, deu-vos graças novamente e o entregou a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nOu\nMistério da fé e do amor!\nA assembleia aclama:\nTodas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!\nOu\nMistério da fé para a salvação do mundo!\nA assembleia aclama:\nSalvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição.\nA seguir o sacerdote, de braços abertos, diz:\nCC\nFazendo, pois, memória de vosso Filho, Jesus Cristo, nossa Páscoa e certeza da paz definitiva, celebramos sua morte e ressurreição e, aguardando o dia feliz de sua vinda gloriosa, nós vos oferecemos, Deus fiel e misericordioso, a vítima que nos reconcilia convosco.\nA assembleia aclama:\nAceitai, ó Senhor, a nossa oferta!\nOlhai, com amor, Pai misericordioso, aqueles que unis a vós pelo sacrifício do vosso Filho, e concedei que, pela força do Espírito Santo, os que participam do único pão e do mesmo cálice sejam congregados em Cristo num só corpo, no qual todas as divisões sejam superadas.\nA assembleia aclama:\nO Espírito nos una num só corpo!\n1C\nConservai-nos sempre em comunhão de fé e amor unidos ao Papa\nN.\ne ao Bispo\nN.\n. Ajudai-nos a esperar juntos a vinda do vosso reino, até o dia em que, diante de vós, formos santos entre os Santos na morada celeste, ao lado da Virgem Maria, Mãe de Deus, dos Apóstolos e todos os Santos e com nossos irmãos e irmãs já falecidos que confiamos à vossa misericórdia. Enfim, libertos das feridas do pecado e plenamente transformados em novas criaturas, felizes cantaremos a ação de graças\nune as mãos\ndo vosso Cristo que vive para sempre.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística (R2) sobre a reconciliação 2\nSOBRE A RECONCILIAÇÃO II\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nNa verdade, é digno e justo dar-vos graças e cantar vossos louvores, Deus Pai todo-poderoso, por tudo que operais neste mundo, por Cristo, nosso Senhor.\nNo meio da humanidade dividida por inimizades e discórdias, sabemos por experiência que vós levais as pessoas a se converter e buscar a reconciliação.\nPelo vosso Espírito Santo moveis os corações, de modo que os inimigos voltem à amizade, os adversários se deem as mãos e os povos procurem reencontrar a paz.\nÉ também obra do vosso poder, ó Pai, quando o ódio é vencido pelo amor, a vingança dá lugar ao perdão e a discórdia se converte em mútua afeição.\nPor isso, com os coros celestes, nós vos damos graças sem cessar e proclamamos aqui na terra a vossa glória, cantando\n(\ndizendo\n)\na uma só voz:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nO sacerdote, de braços abertos, diz:\nCP\nPai onipotente, louvado sois por vosso Filho Jesus Cristo, que veio em vosso nome. Ele é a Palavra de salvação para a humanidade, a mão que estendeis aos pecadores e o caminho pelo qual nos é concedida a vossa paz. Quando vos abandonamos por nossos pecados, vós nos reconduzistes à reconciliação por vosso Filho, que por nós entregastes à morte, para que voltássemos a vós e nos amássemos uns aos outros.\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nE agora, celebrando a reconciliação que Cristo nos trouxe, vos pedimos: santificai estas oferendas pela efusão do vosso Espírito,\nune as mãos e traça o sinal da cruz, ao mesmo tempo que sobre o pão e o cálice, dizendo:\na fim de que se tornem o Corpo e\n✠\no Sangue do vosso Filho que nos mandou celebrar estes mistérios.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nAntes de dar a vida para nos libertar, estando à mesa,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou o pão em suas mãos, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nDepois prossegue:\nDo mesmo modo, naquela noite,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nele tomou o cálice da bênção em suas mãos e, proclamando a vossa misericórdia, o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nOu\nMistério da fé e do amor!\nA assembleia aclama:\nTodas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!\nOu\nMistério da fé para a salvação do mundo!\nA assembleia aclama:\nSalvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição.\nO sacerdote, de braços abertos, diz:\nCC\nFazendo, pois, memória da morte e ressurreição do vosso Filho que nos deixou esta prova de amor, nós vos oferecemos aquilo que nos destes: o sacrifício da perfeita reconciliação.\nA assembleia aclama:\nAceitai, ó Senhor, a nossa oferta!\nPai santo, neste banquete salvífico, suplicantes, vos pedimos: aceitai-nos também com vosso Filho e dai-nos o seu Espírito para que nos liberte de tudo que nos separa uns dos outros.\nA assembleia aclama:\nO Espírito nos una num só corpo!\n1C\nEle faça da vossa Igreja sinal de unidade do gênero humano e instrumento da vossa paz, e nos conserve em comunhão com o Papa\nN.\n, o nosso Bispo\nN.\n, os Bispos do mundo inteiro e todo o vosso povo.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\n2C\nÓ Pai, que agora nos reunistes, à mesa do vosso Filho, congregai-nos também na Ceia da comunhão eterna nos novos céus e nova terra, onde brilha a plenitude da vossa paz, junto com a gloriosa Virgem Maria, Mãe de Deus, os Apóstolos e todos os Santos, os nossos irmãos e as pessoas de todos os povos e línguas que morreram na vossa amizade,\nune as mãos\nem Cristo Jesus, Senhor nosso.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística (C1) para Missas com crianças I\nO uso desta Oração Eucarística é restrito às Missas que se celebram só com crianças, isto é, as que ainda não entraram na adolescência, ou àquelas Missas nas quais a maior parte dos participantes é criança.\nO prefácio dessa Oração Eucarística, por sua estrutura e índole peculiar, não pode ser substituído por outros prefácios.\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nSenhor, Pai de bondade, nos reunistes diante de vós para vos celebrar e proclamar vossos louvores com o coração em festa.\nNós vos louvamos por todas as coisas bonitas que existem no mundo e pela alegria que dais a todos nós. Nós vos louvamos pela luz do dia e por vossa Palavra que nos ilumina. Nós vos louvamos também pela terra, pelas pessoas que nela habitam e pela vida que de vós recebemos.\nA assembleia aclama:\nGlória a vós, Senhor, que tanto nos amais!\nSim, ó Pai, sois muito bom: vós nos amais e fazeis por nós coisas maravilhosas, sempre pensais em todas as pessoas e nunca desistis de estar perto delas. Enviastes vosso Filho querido para nos salvar. Ele curou os doentes, perdoou os pecadores, mostrou a todos o vosso amor, acolheu e abençoou as crianças.\nA assembleia aclama:\nGlória a vós, Senhor, que tanto nos amais!\nPai de bondade, nós não estamos sozinhos para celebrar vossos louvores, pois em toda a terra o vosso povo vos glorifica. Por isso, rezamos com a Igreja inteira, com o Papa\nN.\ne o nosso Bispo\nN.\n. No céu também vos louvam sem cessar Maria, a Mãe de Jesus, os Apóstolos e todos os Santos. Unidos a eles e aos Anjos nós vos adoramos, cantando\n(\ndizendo\n)\na uma só voz:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nO sacerdote, de braços abertos, diz:\nCP\nPai santo, para vos agradecer, trouxemos este pão e este vinho;\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\npela ação do Espírito Santo fazei que eles se tornem\nune as mãos e traça o sinal da cruz, ao mesmo tempo, sobre o pão e cálice, dizendo:\no Corpo\n✠\ne o Sangue de Jesus Cristo, vosso Filho muito amado.\nune as mãos\nAssim, ó Pai, possamos oferecer o mesmo dom que vós nos dais.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nJesus, na noite antes de sua morte na cruz, pôs-se à mesa com seus apóstolos,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\ntomou o pão em suas mãos, e, rezando, deu graças; partiu o pão e o deu a seus amigos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nDepois prossegue:\nDo mesmo modo, no fim da Ceia,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou em suas mãos o cálice com vinho, rezou, de novo, em ação de graças e o deu a seus amigos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nou\nO sacerdote, de braços abertos, diz:\nCC\nNesta Eucaristia, nós fazemos com amor o que Jesus mandou e, anunciando a sua morte e ressurreição, vos oferecemos o Pão da vida e o Cálice da salvação. Pai querido, é Jesus que nos conduz a vós; por isso, vos pedimos, recebei-nos com Ele.\nA assembleia aclama:\nCom Jesus, recebei a nossa vida!\nPai, que tanto nos amais, deixai-nos aproximar desta mesa e enviai sobre nós o Espírito Santo para que, alimentando-nos com o Corpo e Sangue do vosso Filho, sejamos um só coração e uma só alma.\nA assembleia aclama:\nFazei de nós um só corpo e um só espírito!\n1C\nSenhor, que sempre vos lembrais de todos, nós vos pedimos por aqueles que amamos: o Papa\nN.\ne o nosso Bispo\nN.\n, nossos pais, irmãos, amigos e os que cuidam de nós. Lembrai-vos também dos que sofrem em suas dores e andam tristes, e dos que morreram na vossa paz. Ó Pai, olhai com carinho o povo cristão e as pessoas do mundo inteiro. Diante de tudo o que fazeis em nosso favor por meio de Jesus Cristo, vosso Filho, nós vos bendizemos e louvamos.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística (C2) para Missas com crianças II\nO uso desta Oração Eucarística é restrito às Missas que se celebram só com crianças, isto é, as que ainda não entraram na adolescência, ou àquelas Missas nas quais a maior parte dos participantes é criança.\nO prefácio dessa Oração Eucarística, por sua estrutura e índole peculiar, não pode ser substituído por outros prefácios.\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nÓ Pai querido, que tanto nos amais, como é grande a nossa alegria em vos agradecer e com Jesus, na vossa Igreja, cantar vosso louvor.\nVós nos amastes tanto que criastes para nós este mundo imenso e maravilhoso. Vós nos amais tanto que nos dais vosso Filho Jesus para nos guiar até vós. Vós nos amais tanto que nos reunis em vosso Filho Jesus e, pelo Espírito Santo, nos tornais filhos e filhas da mesma família.\nPor este amor tão grande nós vos agradecemos e com os Anjos e os Santos, que vos adoram, cantamos\n(\ndizemos\n)\na uma só voz:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nou\nO sacerdote, de braços abertos, diz:\nCP\nSim, bendito seja Jesus que vós nos enviastes, amigo das crianças e dos pobres. Ele nos ensina a vos amar, ó Pai querido, e amar-nos uns aos outros.\nA assembleia aclama:\nGlória a vós, Senhor, que tanto nos amais!\nJesus veio tirar do coração o pecado, a maldade e o ódio que impedem a amizade e não nos deixam ser felizes. Ele prometeu que o Espírito Santo ficaria sempre conosco para vivermos bem unidos a vós como filhos e filhas.\nA assembleia aclama:\nGlória a vós, Senhor, que tanto nos amais!\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nÓ Deus, nosso Pai, enviai vosso Espírito Santo para que estes dons do pão e do vinho\nune as mãos e traça o sinal da cruz, ao mesmo tempo sobre o pão e o cálice, dizendo:\nse tornem o Corpo\n✠\ne o Sangue de nosso Senhor Jesus Cristo.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nJesus, na noite antes de sua morte na cruz, nos mostrou como é grande vosso amor. Quando ele estava à mesa com os apóstolos,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\ntomou o pão em suas mãos e rezou, louvando e agradecendo. Depois partiu o pão e o deu a seus amigos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nDepois prossegue:\nDo mesmo modo, no fim da Ceia,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou em suas mãos o cálice com vinho, rezou, de novo, em ação de graças e o deu a seus amigos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nou\nA seguir, o sacerdote, de braços abertos, diz:\nCC\nPor isso, Pai querido, celebramos a memória da morte e ressurreição de Jesus, Salvador do mundo. Ele mesmo se colocou em nossas mãos para ser este dom de reconciliação e de paz, nosso sacrifício que agora vos oferecemos e pelo qual somos atraídos para vós.\nA assembleia aclama:\nCom Jesus, recebei a nossa vida!\nO sacerdote, de braços abertos, diz:\n1C\nEscutai-nos, Senhor nosso Deus, e dai o Espírito do vosso amor aos que participam desta Ceia, para que fiquem sempre mais unidos na vossa Igreja, com o nosso Papa\nN.\n, o nosso Bispo\nN.\n, os outros bispos e todos aqueles que servem o vosso povo.\nA assembleia aclama:\nFazei de nós um só corpo e um só espírito!\n2C\nNão vos esqueçais daqueles que amamos: nossos pais, parentes, amigos e os que cuidam de nós; e também daqueles que ainda não amamos bastante. Lembrai-vos dos que em paz partiram desta vida\n(N. N.)\n; acolhei-os com amor na alegria da vossa casa.\nA assembleia aclama:\nFazei de nós um só corpo e um só espírito!\n3C\nUm dia, enfim, ó Pai, reuni a todos nós em vosso reino, com a Virgem Maria, Mãe de Deus e nossa Mãe, para celebrar a festa que no céu nunca se acaba, onde todos os amigos de Jesus cantam sem cessar o vosso louvor.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\n14x\nOração Eucarística (C3) para Missas com crianças III\nO uso desta Oração Eucarística é restrito às Missas que se celebram só com crianças, isto é, as que ainda não entraram na adolescência, ou àquelas Missas nas quais a maior parte dos participantes é criança.\nO prefácio dessa Oração Eucarística, por sua estrutura e índole peculiar, não pode ser substituído por outros prefácios.\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nDeus, nosso Pai, nós vos agradecemos, porque nos criastes, a fim de vivermos para vós, amando-nos como irmãos.\nPor vosso dom, podemos viver como amigos e repartir uns com os outros as coisas bonitas que temos e as dificuldades que passamos.\nPorque sois o Deus dos vivos, nos chamastes à vida e quereis que sejamos felizes para sempre. Jesus é o primeiro que vós ressuscitastes dentre os mortos e lhe destes a vida nova. Também a nós prometestes vida sem fim, sem miséria e sem dor.\nPor isso, ó Pai, felizes e agradecidos, em comunhão com todos os que acreditam em vós, com os Santos e os Anjos, exultantes, cantamos\n(\ndizemos\n)\na uma só voz:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nou\nO sacerdote, de braços abertos, prossegue:\nCP\nNa verdade, ó Pai, vós sois santo, sois muito bom para nós e amais todas as pessoas do mundo. Agradecemos, em primeiro lugar, pelo vosso Filho, Jesus Cristo. Ele veio ao mundo porque as pessoas se afastaram de vós pelo pecado e não conseguiam mais se entender. Ele abriu nossos olhos e ouvidos para vos conhecer como Pai e nos amarmos como irmãos e irmãs.\nA assembleia aclama:\nGlória a vós, ó Pai, que em Cristo nos salvais!\nEle nos anunciou a vida plena da ressurreição que viveremos para sempre junto de vós. Ele percorreu, antes de nós, o caminho do amor para que seguíssemos seus passos. Jesus agora nos reúne ao redor deste altar para fazermos o que na última Ceia ele mesmo fez com seus discípulos.\nA assembleia aclama:\nGlória a vós, ó Pai, que em Cristo nos salvais!\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nÓ Pai, vós que sois tão bom, mandai vosso Espírito Santo para santificar estes dons do pão e do vinho.\nune as mãos e traça o sinal da cruz, ao mesmo tempo sobre o pão e o cálice, dizendo:\nEles serão para nós o Corpo\n✠\ne o Sangue de Jesus Cristo, vosso Filho.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nNa noite antes de morrer por nós, Jesus pôs-se à mesa com seus apóstolos,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\ntomou o pão em suas mãos, e, rezando, deu graças; partiu o pão e o deu a seus amigos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nDepois prossegue:\nDo mesmo modo, no fim da Ceia,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou em suas mãos o cálice com vinho, rezou em ação de graças e o deu a seus amigos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nou\nA seguir, o sacerdote, de braços abertos, diz:\nPor isso, Pai santo, aqui estamos diante de vós, e, com alegria, celebramos a memória do que Jesus Cristo fez para nossa salvação. Neste santo sacrifício, que ele confiou à sua Igreja, celebramos sua morte e ressurreição. Pai santo, que estais nos céus, aceitai-nos com vosso Filho amado. Ele sofreu livremente a morte por nós; vós, porém, o ressuscitastes.\nA assembleia aclama:\nCom Jesus, recebei a nossa vida!\nO sacerdote, de braços abertos, prossegue:\nÓ Pai, Jesus agora vive sempre junto de vós, mas ao mesmo tempo está aqui conosco. Um dia, ele virá em sua glória e o seu reino não terá fim. Então, ninguém mais vai sofrer, ninguém mais vai chorar, ninguém mais vai ficar triste: o pecado e a morte não mais dominarão.\nA assembleia aclama:\nGlória a vós, ó Pai, que em Cristo nos salvais!\nO sacerdote, de braços abertos, prossegue:\nPai santo, vós nos chamastes para recebermos nesta mesa, com alegria, o Corpo de Cristo. Fortificados por este alimento, possamos agradar-vos sempre mais e pela comunhão do Espírito Santo nos tornemos um só corpo no amor.\nA assembleia aclama:\nFazei de nós um só corpo e um só espírito!\n1C\nLembrai-vos, ó Pai, do nosso Papa\nN.\n, do nosso Bispo\nN.\ne dos outros bispos.\n★\nAbrir opção \"No Tempo Pascal\"\nNo Tempo Pascal o sacerdote diz:\n★\nFazei que os corações dos vossos fiéis sejam repletos com as alegrias da Páscoa e levem estas mesmas alegrias aos que vivem na tristeza.\n★\nAjudai os discípulos de Cristo, para que vivam em paz e repartam com todos o dom da alegria.\nConcedei que, um dia, estejamos junto a vós, morando para sempre em vossa casa com Jesus e Maria, sua Mãe, São\nN.\ne todos os Santos, e com nossos irmãos falecidos.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.","segments":[{"title":"Ordinário (1) Ritos Iniciais","url":"https://pocketterco.com.br/oracao/ordinario-1-ritos-iniciais","text_pt":"Ordinário (1) Ritos Iniciais\nMissal Romano\n1.\nReunido o povo, o sacerdote dirige-se com os ministros ao altar, enquanto se executa o canto de entrada.\nChegando ao altar, faz com os ministros uma profunda inclinação, beija o altar em sinal de veneração e, se for oportuno, incensa a cruz e o altar. Depois se dirige com os ministros à cadeira. Terminado o canto de entrada, o sacerdote e os fiéis, todos de pé, fazem o sinal da cruz, enquanto o sacerdote, voltado para o povo, diz:\nEm nome do Pai e do Filho e do Espírito Santo.\nO povo responde:\nAmém.\n2.\nEm seguida, o sacerdote, abrindo os braços, saúda o povo com uma das seguintes fórmulas:\na)\nA graça de nosso Senhor Jesus Cristo,\no amor do Pai\ne a comunhão do Espírito Santo\nestejam convosco.\n(Cf. 2Cor 13, 13)\nAbrir outras saudações\nb)\nA graça e a paz de Deus, nosso Pai,\ne de Jesus Cristo, nosso Senhor,\nestejam convosco.\n(Cf. 1Cor 1, 3)\nc)\nⒷ\nO Senhor, que encaminha os nossos corações\npara o amor de Deus e a constância de Cristo,\nesteja convosco.\n(2Ts 3, 5)\nd)\nⒷ\nO Deus da esperança,\nque nos cumula de toda alegria e paz em nossa fé,\npela ação do Espírito Santo,\nesteja convosco.\n(Rm 15, 13)\ne)\nⒷ\nA vós, irmãos, paz e fé\nda parte de Deus, o Pai,\ne do Senhor Jesus Cristo.\n(Ef 6, 23)\nf)\nⒷ\nIrmãos eleitos segundo a presciência de Deus Pai,\npela santificação do Espírito\npara obedecer a Jesus Cristo\ne participar da bênção da aspersão do seu sangue,\ngraça e paz vos sejam concedidas abundantemente.\n(1Pd 1, 1-2)\ng)\nⒷ\nA graça e a paz\ndaquele que é, que era e que vem,\nestejam convosco.\n(Ap 1, 8)\nO povo responde:\nBendito seja Deus, que nos reuniu no amor de Cristo.\nOu, o sacerdote, abrindo os braços, diz:\nh)\nO Senhor esteja convosco.\nO povo responde:\nEle está no meio de nós.\nAbrir opção para missa com Bispo\nO Bispo, nesta primeira saudação, em vez de\nO Senhor esteja convosco\n, diz:\nA paz esteja convosco.\nE o povo responde:\nBendito seja Deus,\nQue nos reuniu no amor de Cristo.\n3.\nO sacerdote, diácono ou outro ministro poderá, com brevíssimas palavras, introduzir os fiéis na Missa do dia.\nAto Penitencial*\n*Aos domingos, especialmente no tempo pascal, no lugar do Ato Penitencial habitual pode-se fazer a bênção de a aspersão da água em memória do Batismo como no Apêndice II do Missal Romano (p.\n1224-1227\n). Ⓑ Neste caso, após a conclusão, seguem-se as invocações\nSenhor, tende piedade de nós\n(\nKýrie, eléison\n)\nAbrir primeira fórmula\nPrimeira fórmula\n4.\nO sacerdote convida os fiéis ao ato penitencial:\nIrmãos e irmãs,\nreconheçamos\nos nossos pecados,\npara celebrarmos dignamente os santos mistérios.\nAbrir outras opções\nOu:\nⒷ\nO Senhor Jesus, que nos convida\nà mesa da Palavra e da Eucaristia,\nnos chama a segui-lo fielmente.\nReconheçamos ser pecadores\ne invoquemos com confiança\na misericórdia do Pai.\nOu, especialmente aos domingos e durante a oitava de Páscoa:\nⒷ\nNo dia em que celebramos a vitória de Cristo\nsobre o pecado e a morte,\ntambém nós somos convidados a morrer para o pecado\ne ressurgir para uma vida nova.\nReconheçamo-nos necessitados da misericórdia do Pai.\nApós um momento de silêncio, usa-se a seguinte fórmula:\nO sacerdote diz:\nConfessemos os nossos pecados:\nTodos:\nConfesso a Deus todo-poderoso\ne a vós, irmãos e irmãs,\nque pequei muitas vezes\npor pensamentos e palavras,\natos e omissões,\ne, batendo no peito, dizem:\npor minha culpa,\nminha culpa,\nminha tão grande culpa,\nEm seguida, continuam:\nE peço à Virgem Maria,\naos Anjos e Santos\ne a vós, irmãos e irmãs,\nque rogueis por mim a Deus, nosso Senhor.\nSegue-se a absolvição sacerdotal:\nDeus todo-poderoso tenha compaixão de nós,\nperdoe os nossos pecados\ne nos conduza à vida eterna.\nO povo responde:\nAmém.\nAbrir segunda fórmula\nSegunda fórmula\n5.\nO sacerdote convida os fiéis ao ato penitencial:\nIrmãos e irmãs,\nreconheçamos os nossos pecados,\npara celebrarmos dignamente os santos mistérios.\nAbrir outras opções\nOu:\nⒷ\nNo início desta celebração eucarística,\npeçamos a conversão do coração,\nfonte de reconciliação e comunhão\ncom Deus e com os irmãos e irmãs.\nOu:\nⒷ\nDe coração contrito e humilde,\naproximemo-nos do Deus justo e santo,\npara que tenha piedade de nós, pecadores.\nApós um momento de silêncio, o sacerdote diz:\nTende compaixão de nós, Senhor.\nO povo:\nPorque somos pecadores.\nO sacerdote:\nManifestai, Senhor, a vossa misericórdia.\nO povo:\nE dai-nos a vossa salvação.\nSegue-se a absolvição sacerdotal:\nDeus todo-poderoso tenha compaixão de nós,\nperdoe os nossos pecados\ne nos conduza à vida eterna.\nO povo responde:\nAmém.\nAbrir terceira fórmula\nTerceira fórmula\n6.\nO sacerdote convida os fiéis ao ato penitencial:\nIrmãos e irmãs,\nreconheçamos os nossos pecados,\npara celebrarmos dignamente os santos mistérios.\nAbrir outras opções\nOu:\nⒷ\nEm Jesus Cristo, o Justo,\nque intercede por nós e nos reconcilia com o Pai,\nabramos o nosso espírito ao arrependimento\npara sermos\ndignos de nos aproximar\nda mesa do Senhor.\nOu:\nⒷ\nO Senhor disse:\n\"Quem dentre vós estiver sem pecado,\natire a primeira pedra\".\nReconheçamo-nos todos pecadores\ne perdoemo-nos mutuamente do fundo do coração.\nApós um momento de silêncio, o sacerdote, o diácono ou outro ministro propõe as seguintes invocações ou outras semelhantes com\nSenhor, tende piedade de nós\n.\nⒷ Para o canto se pode usar a aclamação grega:\nKýrie, eléison\n.\nSenhor, que viestes salvar os corações arrependidos,\ntende piedade de nós.\nO povo responde:\nSenhor, tende piedade de nós.\nO sacerdote:\nCristo, que viestes chamar os pecadores,\ntende piedade de nós.\nO povo:\nCristo, tende piedade de nós.\nO sacerdote:\nSenhor, que intercedeis por nós junto do Pai,\ntende piedade de nós.\nO povo:\nSenhor, tende piedade de nós.\nSegue-se a absolvição sacerdotal:\nDeus todo-poderoso tenha compaixão de nós,\nperdoe os nossos pecados\ne nos conduza à vida eterna.\nO povo responde:\nAmém.\nAbrir Ⓑ Invocações alternativas para os diversos tempos\nⒷ Invocações alternativas para os diversos tempos\nTempo Comum:\n1.\nSenhor, que sois o caminho que leva ao Pai,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que sois a verdade que ilumina os povos,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que sois a vida que renova o mundo,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n2.\nSenhor, que oferecestes o vosso perdão a Pedro arrependido,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que prometestes o paraíso ao bom ladrão,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que acolheis toda pessoa que confia na vossa misericórdia,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n3.\nSenhor, que viestes, não para condenar, mas para perdoar,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que vos alegrais pelo pecador arrependido,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que muito perdoais a quem muito ama,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n4.\nSenhor, que viestes procurar quem estava perdido,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que viestes dar a vida em resgate de muitos,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que congregais na unidade os\nfilhos de Deus\ndispersos,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n5.\nSenhor, que sois a plenitude da verdade e da graça,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que vos tornastes pobre para nos enriquecer,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que viestes para fazer de nós o vosso povo santo,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nTempo do Advento:\n1.\nSenhor, que viestes ao mundo para nos salvar,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que continuamente nos visitais com a graça do vosso Espírito,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que vireis um dia para julgar as nossas obras,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n2.\nSenhor, que sois o defensor dos pobres,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que sois o refúgio dos fracos,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que sois a esperança dos pecadores,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n3.\nSenhor, que vindes visitar vosso povo na paz,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que vindes salvar o que estava perdido,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que vindes criar um mundo novo,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nTempo do Natal:\n1.\nSenhor, Filho de Deus, que, nascendo da Virgem Maria, vos fizestes nosso irmão,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, Filho do homem, que conheceis e compreendeis nossa fraqueza,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, Filho primogênito do Pai, que fazeis de nós uma só família,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n2.\nSenhor, rei da paz,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, luz nas trevas,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, imagem do homem novo,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nTempo da Quaresma:\n1.\nSenhor que na cruz perdoastes o ladrão arrependido,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que nos mandastes perdoar-nos mutuamente antes de nos aproximar do vosso altar,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que confiastes à vossa Igreja o ministério da reconciliação,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n2.\nSenhor, que na água e no Espírito nos regenerastes à vossa imagem,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que enviais o vosso Espírito para criar em nós um coração novo,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que nos tornastes participantes do vosso Corpo e do vosso Sangue,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n3.\nSenhor, que fazeis passar da morte para a vida quem ouve a vossa palavra,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que quisestes ser levantado da terra para que tenha a vida eterna todo aquele que crê em vós,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que nos submeteis ao julgamento da vossa cruz, para levar-nos à glória da ressurreição,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nTempo da Páscoa:\n1.\nSenhor, nossa paz,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, nossa Páscoa,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, nossa vida,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n2.\nSenhor, que sois o eterno sacerdote da nova Aliança,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que nos edificais como pedras vivas no templo santo de Deus,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que nos tornais concidadãos dos santos no reino dos céus,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n3.\nSenhor, que, subindo ao céu, nos presenteastes com o dom do Espírito,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que dais vida a todas as coisas com o poder da vossa palavra,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, Rei do universo e Senhor dos séculos,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n4.\nSenhor, que, subindo ao céu, vos tornastes Rei do universo, e Senhor dos séculos,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que na vossa ascensão levastes cativo o cativeiro,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que voltando à casa do Pai abristes o céu para nós,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n5.\nSenhor, que pelo Espírito Santo estais presente no mundo,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\nCristo, que dais o Espírito Santo para o perdão dos pecados,\ntende piedade de nós.\n℟.\nCristo, tende piedade de nós.\nSenhor, que enviais o Espírito Santo para criar um mundo novo,\ntende piedade de nós.\n℟.\nSenhor, tende piedade de nós.\n7.\nSeguem-se as invocações\nSenhor, tende piedade de nós\n(\nKýrie, eléison\n), caso já não tenham ocorrido no ato penitencial:\nSenhor, tende piedade de nós.\nOu:\nKýrie, eléison\n℟.\nSenhor, tende piedade de nós.\nOu:\nKýrie, eléison\nCristo, tende piedade de nós.\nOu:\nChriste, eléison\n℟.\nCristo, tende piedade de nós.\nOu:\nChriste, eléison\nSenhor, tende piedade de nós.\nOu:\nKýrie, eléison\n℟.\nSenhor, tende piedade de nós.\nOu:\nKýrie, eléison\n8.\nQuando for prescrito, canta-se ou recita-se em seguida o hino:\nGlória a Deus nas alturas,\ne paz na terra aos homens por Ele amados.\nSenhor Deus, rei dos céus,\nDeus Pai todo-poderoso.\nNós vos louvamos,\nnós vos bendizemos,\nnós vos adoramos,\nnós vos glorificamos,\nnós vos damos graças\npor vossa imensa glória.\nSenhor Jesus Cristo, Filho Unigênito,\nSenhor Deus, Cordeiro de Deus,\nFilho de Deus Pai.\nVós que tirais o pecado do mundo,\ntende piedade de nós.\nVós que tirais o pecado do mundo,\nacolhei a nossa súplica.\nVós que estais à direita do Pai,\ntende piedade de nós.\nSó Vós sois o Santo,\nsó vós, o Senhor,\nsó vós, o Altíssimo,\nJesus Cristo,\ncom o Espírito Santo,\nna glória de Deus Pai.\nAmém.\n9.\nTerminado o hino, de mãos unidas, o sacerdote diz:\nOremos.\nE todos oram com o sacerdote, por algum tempo, em silêncio.\nEntão o sacerdote, de braços abertos, profere a oração Coleta;\nao terminar, o povo aclama:\nAmém."},{"title":"Ordinário (2) Liturgia da Palavra","url":"https://pocketterco.com.br/oracao/ordinario-2-liturgia-da-palavra","text_pt":"Ordinário (2) Liturgia da Palavra\nMissal Romano\n10.\nO leitor dirige-se ao ambão e proclama a primeira leitura, que todos ouvem sentados. Para indicar o fim da leitura, o leitor aclama:\nPalavra do Senhor.\nTodos respondem:\nGraças a Deus.\nApós as leituras, é aconselhável um momento de silêncio para meditação.\n11.\nO salmista ou o cantor canta ou recita o salmo, e o povo, o refrão.\n12.\nSe houver uma segunda leitura, o leitor a proclama do ambão, como descrito acima. Para indicar o fim da leitura, o leitor aclama:\nPalavra do Senhor.\nTodos respondem:\nGraças a Deus.\n13.\nSegue-se o\nAleluia\nou outro canto estabelecido pelas rubricas, conforme o tempo litúrgico exige.\n14.\nEnquanto isso, o sacerdote, quando se usa incenso, coloca-o no turíbulo. O diácono, que vai proclamar o Evangelho, inclinando-se profundamente diante do sacerdote, pede a bênção em voz baixa:\nDá-me a tua bênção.\nO sacerdote diz em voz baixa:\nO Senhor esteja em teu coração e em teus lábios para que possas anunciar dignamente o seu Evangelho: em nome do Pai e do Filho\n✠\ne do Espírito Santo.\nO diácono faz o sinal da cruz e responde:\nAmém.\nSe não houver diácono, o sacerdote, inclinado diante do altar, reza em silêncio:\nÓ Deus todo-poderoso, purificai-me o coração e os lábios, para que eu possa anunciar dignamente o vosso santo Evangelho.\n15.\nO diácono ou o sacerdote dirige-se ao ambão, acompanhado, se for oportuno, pelos ministros com o incenso e velas, e diz:\nO Senhor esteja convosco.\nO povo responde:\nEle está no meio de nós.\nO diácono ou o sacerdote diz:\nProclamação do Evangelho de Jesus Cristo, segundo\nN.\n,\nE, enquanto isso, faz o sinal da cruz sobre o livro e, depois, sobre si mesmo, na fronte, na boca e no peito.\nO povo aclama:\nGlória a vós, Senhor.\nEntão o diácono ou o sacerdote, se for o caso, incensa o livro, e proclama o Evangelho.\n16.\nTerminado o Evangelho, o diácono ou o sacerdote aclama:\nPalavra da Salvação.\nTodos respondem:\nGlória a vós, Senhor.\nDepois beija o livro, dizendo em silêncio:\nPelas palavras do santo Evangelho sejam perdoados os nossos pecados.\n17.\nEm seguida, faz-se a homilia, que compete ao sacerdote ou diácono; ela é obrigatória em todos domingos e festas de preceito e recomendada também nos outros dias.\n18.\nTerminada a homilia, quando prescrito, canta-se ou recíta-se o símbolo ou profissão de fé:\nSímbolo Niceno-constantinopolitano:\nCreio em um só Deus, Pai todo-poderoso,\nCriador do céu e da terra,\nde todas as coisas visíveis e invisíveis.\nCreio em um só Senhor, Jesus Cristo,\nFilho Unigênito de Deus,\nnascido do Pai antes de todos os séculos:\nDeus de Deus,\nluz da luz,\nDeus verdadeiro de Deus verdadeiro,\ngerado, não criado,\nconsubstancial ao Pai.\nPor ele todas as coisas foram feitas.\nE por nós, homens, e para nossa salvação,\ndesceu dos céus\nÀs palavras seguintes, até\ne se fez homem\n, todos se inclinam.\ne se encarnou pelo Espírito Santo, no seio da Virgem Maria,\ne se fez homem.\nTambém por nós foi crucificado\nsob Pôncio Pilatos;\npadeceu e foi sepultado.\nRessuscitou ao terceiro dia,\nconforme as Escrituras,\ne subiu aos céus,\nonde está sentado à direita do Pai.\nE de novo há de vir, em sua glória,\npara julgar os vivos e os mortos;\ne o seu reino não terá fim.\nCreio no Espírito Santo,\nSenhor que dá a vida,\ne procede do Pai e do Filho;\ne com o Pai e o Filho é adorado e glorificado:\nele que falou pelos profetas.\nCreio na Igreja,\nuna, santa, católica e apostólica.\nProfesso um só batismo\npara remissão dos pecados.\nE espero a ressurreição dos mortos\ne a vida do mundo que há de vir.\nAmém.\n19.\nNo lugar do símbolo niceno-constantinopolitano, pode-se usar, sobretudo nos tempos da Quaresma e da Páscoa, a profissão de fé batismal da Igreja Romana, o assim chamado símbolo dos Apóstolos:\nCreio em Deus Pai todo-poderoso,\nCriador do céu e da terra.\nE em Jesus Cristo, seu único Filho, nosso Senhor,\nÀs palavras seguintes, até\nVirgem Maria\n, todos se inclinam.\nque foi concebido pelo poder do Espírito Santo,\nnasceu da Virgem Maria,\npadeceu sob Pôncio Pilatos,\nfoi crucificado, morto e sepultado,\ndesceu à mansão dos mortos,\nressuscitou ao terceiro dia,\nsubiu aos céus,\nestá sentado à direita de Deus Pai todo-poderoso,\ndonde há de vir a julgar os vivos e os mortos.\nCreio no Espírito Santo,\nna Santa Igreja católica,\nna comunhão dos santos,\nna remissão dos pecados,\nna ressurreição da carne\ne\nna vida eterna. Amém.\n20.\nEm seguida, faz-se a oração universal ou dos fiéis."},{"title":"Ordinário (4) Liturgia Eucarística","url":"https://pocketterco.com.br/oracao/ordinario-4-liturgia-eucaristica","text_pt":"Ordinário (4) Liturgia Eucarística\nMissal Romano\n21.\nInicia-se o canto da preparação das oferendas, enquanto os ministros colocam no altar o corporal, o sanguinho, o cálice, a pala e o Missal.\n22.\nConvém que os fiéis expressem sua participação trazendo uma oferenda, seja pão e vinho para a celebração da Eucaristia, seja outro donativo para auxílio da comunidade e dos pobres.\n23.\nO sacerdote, de pé junto ao altar, recebe a patena com o pão em suas mãos e, levantando-a um pouco sobre o altar, diz em silêncio:\nBendito sejais, Senhor, Deus do universo,\npelo pão que recebemos de vossa bondade,\nfruto da terra e do trabalho humano,\nque agora vos apresentamos,\ne para nós se vai tornar pão da vida.\nEm seguida, coloca a patena com o pão sobre o corporal.\nSe o canto da preparação das oferendas não continuar, o sacerdote poderá recitar em voz alta as palavras acima, e o povo acrescentar a aclamação:\nBendito seja Deus para sempre!\n24.\nO diácono ou o sacerdote coloca o vinho e um pouco d água no cálice, rezando em silêncio:\nPelo mistério desta água e deste vinho\npossamos participar da divindade do vosso Filho,\nque se dignou assumir a nossa humanidade.\n25.\nEm seguida, o sacerdote recebe o cálice em suas mãos e, elevando-o um pouco sobre o altar, diz em silêncio:\nBendito sejais, Senhor, Deus do universo,\npelo vinho que recebemos de vossa bondade,\nfruto da videira e do trabalho humano,\nque agora vos apresentamos,\ne que para nós se vai tornar vinho da salvação.\nColoca o cálice sobre o corporal.\nSe o canto da preparação das oferendas não continuar, o sacerdote poderá recitar em voz alta as palavras acima, e o povo acrescentar a aclamação:\nBendito seja Deus para sempre!\n26.\nEm seguida o sacerdote, profundamente inclinado, reza em silêncio:\nDe coração contrito e humilde,\nsejamos, Senhor, acolhidos por vós;\ne seja o nosso sacrifício de tal modo oferecido\nque vos agrade, Senhor, nosso Deus.\n27.\nE, se for oportuno, incensa as oferendas, a cruz e o altar. Depois, o diácono ou outro ministro incensa o sacerdote e o povo.\n28.\nEm seguida, o sacerdote, de pé ao lado do altar, lava as mãos, dizendo em silêncio:\nLavai-me, Senhor, de minhas faltas\ne purificai-me do meu pecado.\n29.\nEstando, depois, no meio do altar e voltado para o povo, o sacerdote estende e une as mãos e diz:\nOrai, irmãos e irmãs,\npara que o\nmeu e o vosso\nsacrifício seja aceito por Deus Pai todo-poderoso.\nAbrir outras opções\nOu:\nⒷ\nOrai, irmãos e irmãs,\npara que esta nossa família,\nreunida em nome de Cristo,\npossa oferecer um sacrifício\nque seja aceito por Deus Pai todo-poderoso.\nOu:\nⒷ\nOrai, irmãos e irmãs,\npara que, trazendo ao altar\nas alegrias e fadigas de cada dia,\nnos disponhamos a oferecer um sacrifício\naceito por Deus Pai todo-poderoso.\nOu:\nⒷ\nOrai, irmãos e irmãs,\npara que o sacrifício da Igreja,\nnesta pausa restauradora na caminhada rumo ao céu,\nseja aceito por Deus Pai todo-poderoso.\nO povo se levanta e responde:\nReceba o Senhor por tuas mãos este sacrifício,\npara glória do seu nome,\npara nosso bem e de toda a\nsua\nsanta Igreja.\n30.\nEm seguida, abrindo os braços, o sacerdote profere a oração sobre as oferendas; ao terminar, o povo aclama:\nAmém.\nOração Eucarística\n31.\nComeçando a Oração Eucarística, o sacerdote abre os braços e diz ou canta:\nO Senhor esteja convosco.\nO povo responde:\nEle está no meio de nós.\nErguendo as mãos, o sacerdote prossegue:\nCorações ao alto.\nO povo:\nO nosso coração está em Deus.\nO sacerdote, com os braços abertos, acrescenta:\nDemos graças ao Senhor, nosso Deus.\nO povo:\nÉ nosso dever e nossa salvação.\nO sacerdote, de braços abertos, reza ou canta o Prefácio.\nAo seu final, une as mãos e, com o povo, conclui o Prefácio, cantando ou em voz alta dizendo:\nSanto, Santo, Santo,\nSenhor, Deus do universo.\nO céu e a terra proclamam a vossa glória.\nHosana nas alturas!\nBendito o que vem em nome do Senhor!\nHosana nas alturas!\n32.\nEm todas as Missas, o sacerdote pode cantar as partes mais importantes da Oração Eucarística.\nNa primeira Oração Eucarística ou Cânon Romano, pode-se omitir o que está entre parênteses."},{"title":"Ordinário (5) Rito da Comunhão","url":"https://pocketterco.com.br/oracao/ordinario-5-rito-da-comunhao","text_pt":"Ordinário (5) Rito da Comunhão\nMissal Romano\n124.\nTendo colocado o cálice e a patena sobre o altar, o sacerdote diz, de mãos unidas:\nObedientes à palavra do Salvador\ne formados por seu divino ensinamento,\nousamos dizer:\nAbrir outras monições\nOu:\nⒷ\nRezemos, com amor e confiança,\na oração que o Senhor Jesus nos ensinou:\nOu:\nⒷ\nSomos chamados filhos de Deus\ne realmente o somos,\npor isso, podemos rezar confiantes:\nOu:\nⒷ\nO Senhor nos comunicou o seu Espírito.\nCom a confiança e a liberdade de filhos e filhas, digamos juntos:\nOu:\nⒷ\nO banquete da Eucaristia é sinal de reconciliação\ne vínculo de união fraterna. Unidos como irmãos e irmãs,\nrezemos, juntos, como o Senhor nos ensinou:\nOu:\nⒷ\nGuiados pelo Espírito de Jesus e iluminados pela sabedoria\ndo Evangelho, ousamos dizer:\nOu:\nⒷ\nGuiados pelo Espírito Santo, que ora em nós e por nós,\nelevemos as mãos ao Pai e rezemos juntos a oração\nque o próprio Jesus nos ensinou:\nO sacerdote abre os braços e prossegue com o povo:\nPai nosso que estais nos céus,\nsantificado seja o vosso nome;\nvenha a nós o vosso reino,\nseja feita a vossa vontade,\nassim na terra como no céu.\nO pão nosso de cada dia nos dai hoje;\nperdoai-nos as nossas ofensas,\nassim como nós perdoamos\na quem nos tem ofendido;\ne não nos deixeis cair em tentação,\nmas livrai-nos do mal.\n125.\nO sacerdote prossegue sozinho, de braços abertos:\nLivrai-nos de todos os males, ó Pai,\ne dai-nos hoje a vossa paz.\nAjudados pela vossa misericórdia,\nsejamos sempre livres do pecado\ne protegidos de todos os perigos,\nenquanto\naguardamos a feliz esperança\ne a vinda do Nosso Salvador, Jesus Cristo\n.\nO sacerdote une as mãos.\nO povo conclui a oração, aclamando:\nVosso é o reino,\no poder e a glória para sempre.\n126.\nO sacerdote, de braços abertos, diz em voz alta:\nSenhor Jesus Cristo,\ndissestes aos vossos Apóstolos:\neu vos deixo a paz, eu vos dou a minha paz.\nNão olheis os nossos pecados,\nmas a fé que anima vossa Igreja;\ndai-lhe, segundo o vosso desejo,\na paz e a unidade.\nO sacerdote une as mãos e conclui:\nVós, que sois Deus, com o Pai e o Espírito Santo.\nO povo responde:\nAmém.\n127.\nO sacerdote, voltado para o povo, estendendo e unindo as mãos, acrescenta:\nA paz do Senhor esteja sempre convosco.\nO povo responde:\nO amor de Cristo nos uniu.\n128.\nEm seguida, se for oportuno, o diácono ou o sacerdote diz:\nIrmãos e irmãs,\nsaudai-vos em Cristo Jesus.\nAbrir outras opções\nOu:\nⒷ\nComo filhos e filhas do Deus da paz,\nsaudai-vos com um gesto de comunhão fraterna.\nOu:\nⒷ\nEm Jesus, que nos tornou todos irmãos e irmãs,\nsaudai-vos com um sinal de reconciliação e de paz.\nOu:\nⒷ\nNo Espírito de Cristo ressuscitado,\nsaudai-vos com um sinal de paz.\nE, todos segundo o costume do lugar, manifestam uns aos outros a paz, a comunhão e a caridade; o sacerdote dá a paz ao diácono e a outros ministros.\n129.\nEm seguida, o sacerdote parte o pão consagrado sobre a patena e coloca um pedaço no cálice, rezando em silêncio:\nEsta união do Corpo e do Sangue de Jesus,\no Cristo e Senhor nosso, que vamos receber,\nnos faça participar da vida eterna.\n130.\nEnquanto isso, canta-se ou recita-se:\nCordeiro de Deus,\nque tirais o pecado do mundo,\ntende piedade de nós.\nCordeiro de Deus,\nque tirais o pecado do mundo,\ntende piedade de nós.\nCordeiro de Deus,\nque tirais o pecado do mundo,\ndai-nos a paz.\nEssas palavras podem ser repetidas ainda mais vezes, se a fração do pão se prolongar. Contudo, na última vez se diz:\ndai-nos a paz\n.\n131.\nO sacerdote, de mãos unidas, reza em silêncio:\nSenhor Jesus Cristo, Filho do Deus vivo,\nque, cumprindo a vontade do Pai\ne agindo com o Espírito Santo,\npela vossa morte destes vida ao mundo,\nlivrai-me por este vosso santíssimo Corpo e Sangue\ndos meus pecados e de todo mal;\ndai-me cumprir sempre a vossa vontade e jamais separar-me de vós.\nOu:\nSenhor Jesus Cristo,\no vosso Corpo e o vosso Sangue,\nque vou receber,\nnão se tornem causa de juízo e condenação;\nmas, por vossa bondade, sejam proteção e remédio para minha vida.\n132.\nO sacerdote faz genuflexão, toma a hóstia na mão e, elevando-a um pouco sobre a patena ou sobre o cálice, diz em voz alta, voltado para o povo:\nFelizes os convidados para a Ceia do Senhor.\nAbrir outras opções\nOu:\nⒷ\nQuem come minha carne e bebe meu sangue\npermanece em mim e eu nele.\nOu:\nⒷ\nProvai e vede como o Senhor é bom;\nfeliz de quem nele encontra seu refúgio.\nOu:\nⒷ\nEu sou o Pão vivo, que desceu do céu;\nse alguém come deste Pão,\nviverá eternamente.\nOu:\nⒷ\nFelizes os convidados para o banquete nupcial do Cordeiro.\nou\nEis o Cordeiro de Deus,\nque tira o pecado do mundo.\nE acrescenta, com o povo, uma só vez:\nSenhor, eu não sou digno\n(\na\n)\nde que entreis em minha morada,\nmas dizei uma palavra e serei salvo\n(\na\n)\n.\n133.\nO sacerdote, voltado para o altar, reza em silêncio:\nO Corpo de Cristo\nme guarde para a vida eterna.\nE reverentemente comunga o Corpo de Cristo.\nDepois, segura o cálice e reza em silêncio:\nO Sangue de Cristo\nme guarde para a vida eterna.\nE reverentemente comunga o Sangue de Cristo.\n134.\nEm seguida, toma a patena ou o cibório, aproxima-se dos que vão comungar e mostra a hóstia um pouco elevada a cada um deles, dizendo:\nO Corpo de Cristo.\nO que vai comungar responde:\nAmém.\nE comunga.\nO diácono ou o ministro extraordinário da distribuição da sagrada Comunhão, ao distribuir a sagrada Comunhão, procede do mesmo modo.\n135.\nSe houver Comunhão sob as duas espécies, observe-se o rito prescrito na Instrução Geral sobre o Missal Romano, em n.\n281-287\n.\n136.\nEnquanto o sacerdote comunga o Corpo de Cristo, inicia-se o canto da comunhão.\n137.\nTerminada a Comunhão, o sacerdote, o diácono ou acólito purifica a patena e o cálice.\nEnquanto se faz a purificação, o sacerdote reza em silêncio:\nFazei, Senhor,\nque conservemos num coração puro\no que a nossa boca recebeu.\nE que esta dádiva temporal\nse transforme para nós em remédio eterno.\n138.\nEntão o sacerdote pode voltar à cadeira. É aconselhável guardar algum tempo de silêncio sagrado ou proferir um salmo ou cântico de louvor.\n139.\nEm seguida, junto ao altar ou à cadeira, o sacerdote, de pé, voltado para o povo, diz de mãos unidas:\nOremos.\nE todos, com o sacerdote, rezam algum tempo em silêncio, se ainda não o fizeram. Em seguida, o sacerdote, de braços abertos, profere a oração Depois da comunhão.\nAo terminar, o povo aclama:\nAmém."},{"title":"Ordinário (6) Ritos Finais","url":"https://pocketterco.com.br/oracao/ordinario-6-ritos-finais","text_pt":"Ordinário (6) Ritos Finais\nMissal Romano\n140.\nSe necessário, fazem-se breves comunicações ao povo.\nou\n141.\nEm seguida, faz-se a despedida. O sacerdote, voltado para o povo, abre os braços e diz:\nO Senhor esteja convosco.\nO povo responde:\nEle está no meio de nós.\nO sacerdote abençoa o povo, dizendo:\nAbençoe-vos Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo.\nO povo responde:\nAmém.\n142.\nEm alguns dias ou ocasiões, esta fórmula de bênção poderá ser precedida, de acordo com as rubricas, por outra fórmula mais solene ou pela oração sobre o povo. (cf. p.\n578ss\n).\nAbrir opção na Missa pontifical\n143.\nNa Missa pontifical, o celebrante recebe a mitra e, estendendo as mãos, diz:\nO Senhor esteja convosco.\nTodos respondem:\nEle está no meio de nós.\nO celebrante diz:\nBendito seja o nome do Senhor.\nTodos respondem:\nAgora e para sempre.\nO celebrante diz:\nNossa proteção está no nome do Senhor.\nTodos respondem:\nQue fez o céu e a terra.\nEntão o celebrante recebe o báculo, se o utilizar, e diz:\nAbençoe-vos Deus todo-poderoso,\ne fazendo três vezes o sinal da cruz sobre o povo, acrescenta:\nPai\n✠\ne Filho\n✠\ne Espírito\n✠\nSanto.\nTodos:\nAmém.\n144.\nDepois, o diácono ou o próprio sacerdote diz ao povo, de mãos unidas:\nIde em paz, e o Senhor vos acompanhe.\nAbrir outras despedidas\nOu:\nIde em paz, e anunciai o Evangelho do Senhor.\nOu:\nIde em paz, e glorificai o Senhor com vossa vida.\nOu:\nEm nome do Senhor, ide em paz e o Senhor vos acompanhe.\nOu:\nA alegria do Senhor seja a vossa força;\nide em paz e o Senhor vos acompanhe.\nO povo responde:\nGraças a Deus.\n145.\nEntão o sacerdote beija o altar em sinal de veneração, como no início. Feita com os ministros a devida reverência, retira-se.\n146.\nCaso ocorra ainda alguma ação litúrgica, omite-se o rito de despedida.\nAbrir Bênçãos Solenes\nBÊNÇÃOS SOLENES\nAs seguintes bênçãos podem ser usadas, à vontade do sacerdote, no fim da celebração da Missa, de uma celebração da Palavra, da Liturgia das Horas ou dos Sacramentos.\nO sacerdote, voltado para o povo, abrindo os braços, diz:\nO Senhor esteja convosco\n.\nO povo responde:\nEle está no meio de nós\n.\nO diácono ou, na falta dele, o próprio sacerdote pode fazer o convite com estas ou outras palavras:\nlnclinai-vos para receber a bênção\n. Em seguida, o sacerdote, estendendo as mãos sobre o povo, profere a bênção e todos respondem:\nAmém\n.\nAbrir I. Nas celebrações de cada tempo do Ano Litúrgico\nI. Nas celebrações de cada tempo do Ano Litúrgico\n1.\nAdvento\nO Deus onipotente e misericordioso\nvos santifique com o esplendor do advento do seu Filho,\nem cuja vinda credes e cuja volta esperais,\ne derrame sobre vós as suas bênçãos.\n℟.\nAmém.\nDurante esta vida, Deus vos torne\nfirmes na fé,\nalegres na esperança\ne solícitos na caridade.\n℟.\nAmém.\nE vós, que vos alegrais com fé e devoção\npela vinda, segundo a carne, do nosso Redentor,\nsejais recompensados com o prêmio da vida eterna,\nquando ele vier de novo na majestado da sua glória.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n2.\nNatal do Senhor\nO Deus de infinita bondade,\nque, pela encarnação do seu Filho,\ndissipou as trevas do mundo\ne, com seu glorioso nascimento,\ninundou de luz esta noite santíssima\n(\neste dia santíssimo\n)\n,\nexpulse dos vossos corações as trevas dos vícios\ne vos ilumine com a luz das virtudes.\n℟.\nAmém.\nAquele que anunciou aos pastores pelo anjo\na grande alegria do nascimento do Salvador,\nfaça transbordar de alegria vossos corações\ne vos torne mensageiros do seu Evangelho.\n℟.\nAmém.\nAquele que, pela encarnação de seu Filho, uniu a terra ao céu,\nvos cumule com os dons da sua paz e da sua benevolência\ne vos torne participantes da Igreja celeste.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n3.\nInício do ano\nDeus, fonte e origem de toda bênção,\nvos conceda a sua graça,\nvos abençoe abundantemente\ne vos guarde sãos e salvos\ntodos os dias deste ano.\n℟.\nAmém.\nEle vos conserve íntegros na fé,\ninabaláveis na esperança\ne perseverantes até o fim na caridade.\n℟.\nAmém.\nEle disponha em sua paz vossos dias e vossas ações,\natenda sempre as vossas preces\ne vos conduza felizes à vida eterna.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n4.\nEpifania do Senhor\nDeus, que vos chamou das trevas à sua luz admirável,\nderrame benigno sobre vós as suas bênçãos\ne confirme os vossos corações na fé, na esperança e na caridade.\n℟.\nAmém.\nPorque seguis confiantes o Cristo,\nque hoje se manifestou ao mundo\ncomo luz que ilumina as trevas,\nDeus vos torne também uma luz\npara os vossos irmãos e irmãs.\n℟.\nAmém.\nTerminada a vossa peregrinação,\npossais chegar ao Cristo Senhor, luz da luz,\nque os magos procuravam guiados pela estrela\ne com grande alegria encontraram.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n5.\nPaixão do Senhor\nDeus, o Pai de misericórdia,\nque vos deu um exemplo de amor na paixão do seu Filho,\nvos conceda, pelo vosso serviço a Deus e ao próximo,\no dom inefável da sua bênção.\n℟.\nAmém.\nDeus que, pela morte do Filho na cruz\nnos livrou da morte eterna,\nvos conduza à vida que não tem fim.\n℟.\nAmém.\nDeus torne participantes da ressurreição de Cristo\na vós que seguistes o seu testemunho de humildade.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n6.\nTempo Pascal\nDeus que, pela ressurreição do seu Filho único,\nvos deu a graça da redenção e vos tornou seus filhos,\nvos conceda a alegria de sua bênção.\n℟.\nAmém.\nDeus que, pela redenção de Cristo,\nvos concedeu o dom da verdadeira liberdade,\npor sua misericórdia vos torne participantes da herança eterna.\n℟.\nAmém.\nE, vivendo agora retamente,\npossais no céu unir-vos a Deus,\npara o qual, pela fé, já ressuscitastes no Batismo.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n7.\nAscensão do Senhor\nAbençoe-vos o Deus todo-poderoso,\ncujo Filho Unigênito hoje subiu ao mais alto dos céus,\ne vos abriu o caminho para onde ele mesmo está.\n℟.\nAmém.\nDeus vos conceda que o Cristo,\nassim como se manifestou aos discípulos após a ressurreição,\nvos apareça em sua eterna benevolência,\nquando vier para o julgamento.\n℟.\nAmém.\nE vós, crendo que o Cristo\nestá sentado com o Pai em sua glória,\npossais experimentar, conforme sua promessa,\na alegria de permanecer com ele até o fim dos tempos.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n8.\nEspírito Santo\nDeus, o Pai das luzes,\nque iluminou os corações dos discípulos,\nderramando sobre eles o Espírito Santo,\nvos conceda a alegria de sua bênção\ne a plenitude dos dons do mesmo Espírito.\n℟.\nAmém.\nAquele fogo, descido de modo admirável sobre os discípulos,\npor seu poder purifique os vossos corações de todo mal\ne vos ilumine com o explendor da sua luz.\n℟.\nAmém.\nAquele que na proclamação de uma só fé\nreuniu a diversidade das línguas\nvos faça perseverar na mesma fé\ne por ela passar da esperança à plena visão.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n9.\nTempo Comum, I (Bênção de Aarão: Nm 6, 24-26)\nDeus vos abençoe e vos guarde.\n℟.\nAmém.\nEle vos mostre a sua face e se compadeça de vós.\n℟.\nAmém.\nVolva para vós o seu olhar e vos dê a sua paz.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n10.\nTempo comum, II (Fl 4, 7)\nA paz de Deus, que supera todo entendimento,\nguarde vossos corações e vossas mentes\nno conhecimento e no amor de Deus\ne de seu Filho, nosso Senhor Jesus Cristo.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n11.\nTempo comum, III\nDeus todo-poderoso vos abençoe na sua bondade\ne infunda em vós a sabedoria da salvação.\n℟.\nAmém.\nSempre vos alimente com os ensinamentos da fé\ne vos faça perseverar nas boas obras.\n℟.\nAmém.\nOriente para ele os vossos passos\ne vos mostre o caminho da caridade e da paz.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n12.\nTempo comum, IV\nO Deus de toda consolação\ndisponha na sua paz os vossos dias\ne vos conceda os dons da sua bênção.\n℟.\nAmém.\nSempre vos liberte de toda aflição\ne confirme os vossos corações em seu amor.\n℟.\nAmém.\nE assim, ricos em esperança, fé e caridade,\npossais viver praticando o bem\ne chegar felizes à vida eterna.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n13.\nTempo comum, V\nDeus todo-poderoso\nvos livre sempre de toda adversidade\ne derrame benigno sobre vós os dons da sua bênção.\n℟.\nAmém.\nTorne os vossos corações atentos à sua palavra,\na fim de que transbordeis de alegria divina.\n℟.\nAmém.\nAssim, abraçando o bem e a justiça,\npossais correr sempre\npelo caminho dos mandamentos divinos\ne tornar-vos coerdeiros dos santos.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n14.\nTempo comum, VI (2Ts 2, 16-17)\nDeus vos abençoe com toda bênção celeste,\npara serdes sempre santos e irrepreensíveis em sua presença;\nderrame sobre vós abundantemente as riquezas da sua glória,\nvos instrua com a palavra da verdade,\nvos eduque pelo Evangelho da salvação\ne vos enriqueça com o amor fraterno, por Cristo nosso Senhor.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\nAbrir II. Nas celebrações dos Santos\nII. Nas celebrações dos Santos\n15.\nBem-aventurada Virgem Maria\nO Deus de bondade que,\npelo Filho da Virgem Maria, quis salvar o gênero humano\nvos enriqueça com sua bênção.\n℟.\nAmém.\nSeja-vos dado sentir sempre e por toda parte\na proteção da Virgem,\npor quem recebestes o autor da vida.\n℟.\nAmém.\nE vós, reunidos hoje para celebrar com fervor sua solenidade,\npossais colher a alegria espiritual e o prêmio eterno.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n16.\nSantos Pedro e Paulo\nAbençoe-vos o Deus todo-poderoso,\nque vos deu por fundamento aquela fé\nproclamada com vigor pelo Apóstolo Pedro\ne sobre a qual se edificou a Igreja.\n℟.\nAmém.\nEle, que vos instruiu pela incansável pregação do apóstolo Paulo,\nvos ensine por seu exemplo\na sempre atrair para Cristo novos irmãos.\n℟.\nAmém.\nPedro, pelo poder das chaves, Paulo, pela força da palavra,\ne ambos, por sua intercessão,\nnos conduzam àquela pátria, onde chegaram merecidamente\num pela cruz e outro pela espada.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n17.\nSantos Apóstolos\nDeus, que vos firmou na fé apostólica,\nvos abençoe pelos gloriosos méritos e a intercessão\ndos santos Apóstolos\nN.\ne\nN. (\ndo Santo Apóstolo\nN.)\n℟.\nAmém.\nAquele que vos quis instruir\npela doutrina e o exemplo dos Apóstolos\nvos torne, por sua proteção,\ntestemunhas da verdade para todos.\n℟.\nAmém.\nPela intercessão dos Apóstolos,\nque vos deram por sua pregação a firmeza da fé,\npossais alcançar a herança eterna.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\nⒷ Na festa de um Santo\nDeus, nosso Pai, que hoje nos reuniu para celebrar\na festa de São\nN.\n,\n(\npadroeiro de nossa Comunidade,\nou\nParóquia,\nou\nDiocese,\n)\nvos abençoe, vos proteja de todo o mal\ne vos confirme na sua paz.\n℟.\nAmém.\nO Cristo Senhor,\nque manifestou em São\nN.\na força renovadora da Páscoa,\nvos torne testemunhas do seu Evangelho.\n℟.\nAmém.\nO Espírito Santo,\nque em São\nN.\nnos ofereceu um sinal de caridade divina,\nvos torne capazes de criar na Igreja\numa verdadeira comunhão de fé e amor.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n18.\nTodos os Santos\nDeus, glória e exultação dos Santos,\nque vos deu a graça de tão exímios intercessores,\nvos abençoe e para sempre.\n℟.\nAmém.\nLibertos por sua intercessão dos males presentes,\ne estimulados pelo exemplo de suas vidas santas,\nestejais constantemente a serviço\nde Deus e dos irmãos.\n℟.\nAmém.\nE assim, com todos eles,\nvos seja dado gozar a felicidade daquela pátria,\nna qual a Igreja exulta eternamente\npela comunhão gloriosa de seu filhos com os cidadãos do céu.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\nAbrir III. Outras bênçãos\nIII. Outras bênçãos\n19.\nDedicação de Igreja\nDeus, o Senhor do céu e da terra,\nque hoje vos reuniu para a dedicação desta igreja,\n(\npara aniversário da dedicação de sua casa\n)\nvos conceda copiosas bênçãos do céu.\n℟.\nAmém.\nDeus que, em seu Filho, quis congregar todos os filhos dispersos,\nfaça de vós seu templo e morada do Espírito Santo.\n℟.\nAmém.\nE, assim, na felicidade de serdes purificados,\npossais ser o templo em que Deus habita,\ne possuir, com todos os santos,\na herança da felicidade eterna.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém.\n20.\nCelebração pelo Fiéis Defuntos\nDeus, criador e Pai,\nque na ressurreição do seu Filho\ndeu aos que creem a esperança na ressurreição,\nderrame sobre vós a sua bênçao.\n℟.\nAmém.\nCristo, que nos redimiu por sua cruz,\nvos renove em seu amor\ne conceda aos que morreram a luz e a paz.\n℟.\nAmém.\nO Espírito Consolador\nconceda gozar a felicidade prometida\na vós que esperais a vinda gloriosa do Senhor.\n℟.\nAmém.\nE a bênção de Deus todo-poderoso,\nPai e Filho\n✠\ne Espírito Santo,\ndesça sobre vós e permaneça para sempre.\n℟.\nAmém."},{"title":"Orações Eucarísticas","url":"https://pocketterco.com.br/terco/oracoes-eucaristicas-conforme-3a-edicao-do-missal","text_pt":"Orações Eucarísticas\nMissa\nOração Eucarística I ou Cânon Romano\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nSegue-se, conforme as rubricas, o prefácio, com a conclusão:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nou\nO sacerdote, de braços abertos, diz:\nCP\nPai de misericórdia, a quem sobem nossos louvores, suplicantes, vos rogamos e pedimos por Jesus Cristo, vosso Filho e Senhor nosso,\nune as mãos e traça o sinal da cruz, ao mesmo tempo que sobre o pão e o cálice, dizendo:\nque aceiteis e abençoeis\n✠\nestes dons, estas oferendas, este sacrifício puro e santo,\nde braços abertos, prossegue:\nque oferecemos, antes de tudo, pela vossa Igreja santa e católica: concedei-lhe paz e proteção, unindo-a num só corpo e governando-a por toda a terra, em comunhão com vosso servo o Papa\nN.\n, o nosso Bispo\nN.\n, e todos os que guardam a fé católica que receberam dos Apóstolos.\nA assembleia aclama:\nAbençoai nossa oferenda, ó Senhor!\nMemento dos vivos\n1C\nLembrai-vos, ó Pai, dos vossos filhos e filhas\nN. N.\nUne as mãos e reza por alguns momentos em silêncio por aqueles que quer recordar. De braços abertos, prossegue:\ne de todos os que circundam este altar, dos quais conheceis a fé e a dedicação ao vosso serviço.\n★\nAbrir opção \"Na Missa com Batismo\"\nNa Missa com Batismo\n1C\nLembrai-vos, ó Pai, dos vossos filhos e filhas\nN. N.\naqui se menciona os nomes dos padrinhos e das madrinhas\nque conduziram os vossos eleitos à santa graça do Batismo, e de todos que circundam este altar, dos quais conheceis a fé e a dedicação ao vosso serviço.\n★\nPor eles nós vos oferecemos e também eles vos oferecem este sacrifício de louvor por si e por todos os seus, e elevam a vós as suas preces, Deus eterno, vivo e verdadeiro, para alcançar o perdão de suas faltas, a segurança em suas vidas e a salvação que esperam.\nA assembleia aclama:\nLembrai-vos, ó Pai, dos vossos filhos!\n\"Infra actionem\"\n2C\nEm comunhão com toda a Igreja, celebramos em primeiro lugar a memória da Mãe de nosso Deus e Senhor Jesus Cristo, a gloriosa sempre Virgem Maria,\n★\nAbrir opção \"Comunicantes próprios\": Ⓑ Para os Domingos, No Natal do Senhor e durante a Oitava, Na Epifania do Senhor, Da Vigília Pascal até o 2° Domingo da Páscoa, Na Ascensão do Senhor e Em Pentecostes\nCOMUNICANTES PRÓPRIOS\nⒷ Para os Domingos\nEm comunhão com toda a Igreja, celebramos o glorioso dia em que o Senhor Jesus venceu a morte e nos tornou participantes de sua vida imortal. Veneramos em primeiro lugar a memória da Mãe de nosso Deus e Senhor Jesus Cristo, a gloriosa sempre Virgem Maria,\n★\nNo Natal do Senhor e durante a Oitava\nEm comunhão com toda a Igreja, celebramos\n(\na noite santíssima\n)\no dia santíssimo em que Maria, intacta em sua virgindade, deu à luz o Salvador do mundo. Veneramos em primeiro lugar a memória da mesma Mãe de nosso Deus e Senhor Jesus Cristo, a gloriosa sempre Virgem Maria,\n★\nNa Epifania do Senhor\nEm comunhão com toda a Igreja, celebramos o dia santíssimo em que vosso Filho unigênito, eterno convosco na glória, se manifestou visivelmente em nossa carne. Veneramos em primeiro lugar a memória da Mãe de nosso Deus e Senhor Jesus Cristo, a gloriosa sempre Virgem Maria,\n★\nDa Vigília Pascal até o 2° Domingo da Páscoa\nEm comunhão com toda a Igreja, celebramos\n(\na noite santíssima\n)\no dia santíssimo da Ressurreição de nosso Senhor Jesus Cristo segunda a carne. Veneramos em primeiro lugar a memória da Mãe de nosso Deus e Senhor Jesus Cristo, a gloriosa sempre Virgem Maria,\n★\nNa Ascensão do Senhor\nEm comunhão com toda a Igreja, celebramos o dia santíssimo em que nosso Senhor, vosso Filho unigênito, elevou à vossa direita na glória a nossa frágil natureza humana. Veneramos em primeiro lugar a memória da Mãe de nosso Deus e Senhor Jesus Cristo, a gloriosa sempre Virgem Maria,\n★\nEm Pentecostes\nEm comunhão com toda a Igreja, celebramos o dia santíssimo de Pentecostes em que o Espírito Santo, em línguas de fogo, se manifestou aos Apóstolos. Veneramos em primeiro lugar a memória da Mãe de nosso Deus e Senhor Jesus Cristo, a gloriosa sempre Virgem Maria,\n★\na de seu esposo São José, e também a dos Santos Apóstolos e Mártires: Pedro e Paulo, André,\n(\nTiago e João, Tomé, Tiago e Filipe, Bartolomeu e Mateus, Simão e Tadeu, Lino, Cleto, Clemente, Sisto, Cornélio e Cipriano, Lourenço e Crisógono, João e Paulo, Cosme e Damião\n)\ne a de todos os vossos Santos. Por seus méritos e preces concedei-nos sem cessar a vossa proteção.\n(\nPor Cristo, nosso Senhor. Amém.\n)\nA assembleia aclama:\nEm comunhão com vossos Santos vos louvamos!\nO sacerdote, com os braços abertos, continua:\nCP\nAceitai, ó Pai, com bondade, a oblação dos vossos servos e de toda a vossa família; dai-nos sempre a vossa paz, livrai-nos da condenação eterna e acolhei-nos entre os vossos eleitos.\nUne as mãos.\n(\nPor Cristo, nosso Senhor. Amém.\n)\nAbrir oblações: Da Vigília Pascal até o 2° Domingo da Páscoa, Na Missa com Batismo, Na Missa com Crisma, Ⓑ Na Missa com Primeira Comunhão Eucarística, Ⓑ Na Missa com Unção dos Enfermos e Na Missa com Matrimônio\nDa Vigília Pascal até o 2° Domingo da Páscoa\nAceitai, ó Pai, com bondade, a oblação dos vossos servos e de toda a vossa família; nós a oferecemos também por aqueles que vos dignastes regenerar pela água e pelo Espírito Santo, concedendo-lhes a remissão de todos os pecados. Dai aos nossos dias a vossa paz, livrai-nos da condenação eterna e acolhei-nos entre os vossos eleitos.\nUne as mãos.\n(\nPor Cristo, nosso Senhor. Amém.\n)\nNa Missa com Batismo\nAceitai, ó Pai, com bondade, a oblação dos vossos servos e de toda a vossa família; nós a oferecemos também por aqueles que vos dignastes regenerar pela água e pelo Espírito Santo, concedendo-lhes a remissão de todos os pecados, para que vivam em nosso Senhor Jesus Cristo e tenham seus nomes inscritos no livro da vida.\nUne as mãos.\n(\nPor Cristo, nosso Senhor. Amém.\n)\nNa Missa com Crisma\nAceitai, ó Pai, com bondade, a oblação dos vossos servos e de toda a vossa família; nós a oferecemos também por aqueles que, regenerados pelo Batismo, confirmastes com o dom do Espírito Santo. Nós vos pedimos, Senhor, acolhei benigno a nossa oferta e dignai-vos guardar neles a vossa graça.\nUne as mãos.\n(\nPor Cristo, nosso Senhor. Amém.\n)\nⒷ Na Missa com Primeira Comunhão Eucarística\nAceitai, ó Pai, com bondade, a oblação dos vossos servos e de toda a vossa família; nós a oferecemos por vossos filhos e filhas que hoje reunis pela primeira vez à vossa mesa, na participação do Pão da vida e do Cálice da salvação; concedei-lhes crescer sempre em vossa amizade e na comunhão com vossa Igreja.\nUne as mãos.\n(\nPor Cristo, nosso Senhor. Amém.\n)\nⒷ Na Missa com Unção dos Enfermos\nAceitai, ó Pai, com bondade, a oblação dos vossos servos e de toda a vossa família; nós a oferecemos também pelos nossos irmãos enfermos que, mediante a santa unção, unem os seus sofrimentos à Páscoa de Cristo; dai-lhes consolação, saúde e paz.\nUne as mãos.\n(\nPor Cristo, nosso Senhor. Amém.\n)\nNa Missa com Matrimônio\nAceitai, ó Pai, com bondade, a oblação de vossos servos, como também dos novos esposos\nN.\ne\nN.\n, e de toda a vossa família que por eles intercede. E, como lhes destes chegar ao dia do casamento, concedei-lhes também vida longa e feliz\n(\ne a alegria dos filhos que desejam\n)\n.\nUne as mãos.\n(\nPor Cristo, nosso Senhor. Amém.\n)\nEstendendo as mãos sobre as oferendas, diz:\nCC\nDignai-vos, ó Pai, aceitar, abençoar e santificar estas oferendas; recebei-as como sacrifício espiritual perfeito, a fim de que se tornem para nós o Corpo e o Sangue de vosso amado Filho, nosso Senhor Jesus Cristo.\nUne as mãos.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível, como requer a sua natureza.\nNa véspera de sua paixão,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\nele tomou o pão em suas santas e veneráveis mãos,\neleva os olhos,\nelevou os olhos ao céu, a vós, ó Pai todo-poderoso, pronunciou a bênção de ação de graças, partiu o pão e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca na patena e genuflete em adoração.\nEntão prossegue:\nDo mesmo modo, no fim da Ceia,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nele tomou este precioso cálice em suas santas e veneráveis mãos, pronunciou novamente a bênção de ação de graças e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nOu\nMistério da fé e do amor!\nA assembleia aclama:\nTodas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!\nOu\nMistério da fé para a salvação do mundo!\nA assembleia aclama:\nSalvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição.\nou\nO sacerdote, de braços abertos, diz:\nCC\nCelebrando, pois, a memória da bem-aventurada paixão do vosso Filho, da sua ressurreição dentre os mortos e gloriosa ascensão aos céus, nós, vossos servos, e também vosso povo santo, vos oferecemos, ó Pai, dentre os bens que nos destes, o sacrifício puro, santo e imaculado, Pão santo da vida eterna e Cálice da perpétua salvação.\nRecebei, ó Pai, com olhar benigno, esta oferta, como recebestes os dons do justo Abel, o sacrifício de nosso patriarca Abraão e a oblação pura e santa do sumo sacerdote Melquisedeque.\nA assembleia aclama:\nAceitai, ó Senhor, a nossa oferta!\nUne as mãos e, inclinando-se, diz:\nSuplicantes, vos pedimos, ó Deus onipotente, que esta nossa oferenda seja levada à vossa presença, no altar do céu, pelas mãos do vosso santo Anjo, para que todos nós, participando deste altar pela comunhão do santíssimo Corpo e Sangue do vosso Filho,\nergue-se e faz sobre si o sinal da cruz, dizendo:\nsejamos repletos de todas as graças e bênçãos do céu.\nUne as mãos.\n(\nPor Cristo, nosso Senhor. Amém.\n)\nA assembleia aclama:\nO Espírito nos una num só corpo!\nMemento dos mortos.\nDe braços abertos, diz:\n3C\nLembrai-vos, ó Pai, dos vossos filhos e filhas\nN. N.\nque nos precederam com o sinal da fé e dormem o sono da paz.\nUne as mãos e, em silêncio, reza brevemente pelos defuntos que deseja recordar. De braços abertos, prossegue:\nA eles, e a todos os que descansam no Cristo, concedei o repouso, a luz e a paz.\nUne as mãos.\n(\nPor Cristo, nosso Senhor. Amém.\n)\nA assembleia aclama:\nConcedei-lhes, ó Senhor, a luz eterna!\nBate no peito, dizendo:\n4C\nE a todos nós pecadores,\ne, de braços abertos, prossegue:\nque esperamos na vossa infinita misericórdia, concedei, não por nossos méritos, mas por vossa bondade, o convívio dos Apóstolos e Mártires: João Batista e Estêvão, Matias e Barnabé,\n(\nInácio, Alexandre, Marcelino e Pedro, Felicidade e Perpétua, Águeda e Luzia, Inês, Cecília, Anastácia\n)\ne de todos os vossos Santos.\nUne as mãos:\nPor Cristo, nosso Senhor.\nE prossegue:\nCP\nPor ele não cessais de criar, santificar, vivificar, abençoar estes bens e distribuí-los entre nós.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística II\nEmbora tenha prefácio próprio, esta Oração Eucarística pode ser usada também com outros prefácios, sobretudo aqueles que de maneira sucinta apresentem o mistério da salvação, por exemplo, os prefácios comuns.\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nNa verdade, é digno e justo, é nosso dever e salvação dar-vos graças sempre e em todo lugar, Senhor, Pai santo, por vosso amado Filho, Jesus Cristo.\nEle é a vossa Palavra, pela qual tudo criastes. Ele é o nosso Salvador e Redentor, que se encarnou pelo Espírito Santo e nasceu da Virgem Maria. Ele, para cumprir a vossa vontade e adquirir para vós um povo santo, estendeu os braços na hora da sua paixão, a fim de vencer a morte e manifestar a ressurreição.\nPor isso, com os Anjos e todos os Santos, proclamamos vossa glória, cantando\n(\ndizendo\n)\na uma só voz:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nO sacerdote, de braços abertos, diz:\nCP\nNa verdade, ó Pai, vós sois Santo, fonte de toda santidade.\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nSantificai, pois, estes dons, derramando sobre eles o vosso Espírito,\nune as mãos e traça o sinal da cruz, ao mesmo tempo sobre o pão e o cálice, dizendo:\na fim de que se tornem para nós o Corpo e\n✠\no Sangue de nosso Senhor Jesus Cristo.\nUne as mãos.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nEstando para ser entregue e abraçando livremente a paixão,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nEntão prossegue:\nDo mesmo modo, no fim da Ceia,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nele tomou o cálice em suas mãos e, dando graças novamente, o entregou a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nOu\nMistério da fé e do amor!\nA assembleia aclama:\nTodas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!\nOu\nMistério da fé para a salvação do mundo!\nA assembleia aclama:\nSalvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição.\nou\nO sacerdote, de braços abertos, diz:\nCC\nCelebrando, pois, o memorial da morte e ressurreição do vosso Filho, nós vos oferecemos, ó Pai, o Pão da vida e o Cálice da salvação; e vos agradecemos porque nos tornastes dignos de estar aqui na vossa presença e vos servir.\nA assembleia aclama:\nAceitai, ó Senhor, a nossa oferta!\nSuplicantes, vos pedimos que, participando do Corpo e Sangue de Cristo, sejamos reunidos pelo Espírito Santo num só corpo.\nA assembleia aclama:\nO Espírito nos una num só corpo!\n1C\nLembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro;\n★\nque ela cresça na caridade, em comunhão com o Papa\nN.\n, com o nosso Bispo\nN.\n, os bispos do mundo inteiro, os presbíteros, os diáconos e todos os ministros do vosso povo.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\nAbrir oração pela Igreja: Ⓑ Domingos, Ⓑ Natal do Senhor e Oitava, Ⓑ Epifania do Senhor, Ⓑ Quinta-feira Santa, na Missa Vespertina da Ceia do Senhor, Ⓑ Da Vigília Pascal até o Segundo Domingo da Páscoa, Ⓑ Ascensão do Senhor e Ⓑ Pentecostes\nⒷ Domingos (exceto quando houver outro texto próprio, como nos casos abaixo):\nLembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro; e aqui convocada no dia em que Cristo venceu a morte e nos fez participantes de sua vida imortal;\n★\nⒷ Natal do Senhor e Oitava:\nLembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro; e aqui convocada na noite santíssima\n(\nno dia santíssimo\n)\nem que a Virgem Maria deu ao mundo o Salvador;\n★\nⒷ Epifania do Senhor:\nLembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro; e aqui convocada no dia santíssimo no qual o vosso Filho Unigênito, eterno convosco na glória, se manifestou na nossa natureza humana;\n★\nⒷ Quinta-feira Santa, na Missa Vespertina da Ceia do Senhor:\nLembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro; e aqui convocada no dia santíssimo no qual Jesus Cristo, nosso Senhor, foi entregue à morte por nós;\n★\nⒷ Da Vigília Pascal até o Segundo Domingo da Páscoa:\nLembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro; e aqui convocada na noite santíssima\n(\nno dia santíssimo\n)\nda ressurreição de Cristo Senhor dentre os mortos;\n★\nⒷ Ascensão do Senhor:\nLembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro; e aqui convocada no dia glorioso da Ascensão no qual Cristo colocou à direita da vossa glória a nossa frágil natureza humana;\n★\nⒷ Pentecostes:\nLembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro; e aqui convocada no dia santíssimo no qual, pela efusão do vosso Espírito, foi manifestada ao mundo como sacramento de unidade para todos os povos;\n★\nAbrir oração pelos fiéis: Na Missa com Batismo (e Crisma), Na Missa com Crisma, Ⓑ Na Missa com Primeira Comunhão Eucarística, Ⓑ Na Missa com Unção dos Enfermos e Na Missa com Matrimônio\nNa Missa com Batismo (e Crisma)\nLembrai-vos também, ó Pai, dos que hoje pelo Batismo\n(\ne pela Crisma\n)\nfizestes membros da vossa família, para que sigam o Cristo, vosso Filho, com todo o coração e grande entusiasmo.\nA assembleia aclama:\nLembrai-vos, ó Pai, dos vossos filhos!\nNa Missa com Crisma\nLembrai-vos também, ó Pai, dos vossos filhos e filhas que hoje vos dignastes confirmar com o dom do Espírito Santo, e conservai-os sempre em vossa graça.\nA assembleia aclama:\nLembrai-vos, ó Pai, dos vossos filhos!\nⒷ Na Missa com Primeira Comunhão Eucarística\nLembrai-vos também, ó Pai, dos vossos filhos e filhas convidados pela primeira vez à vossa mesa, para participar do Pão da vida e do Cálice da salvação; concedei-lhes crescer sempre em vossa amizade e na comunhão com vossa Igreja.\nA assembleia aclama:\nLembrai-vos, ó Pai, dos vossos filhos!\nⒷ Na Missa com Unção dos Enfermos\nLembrai-vos também, ó Pai, destes vossos filhos e filhas que mediante a santa unção, unem os seus sofrimentos à Páscoa de Cristo; dai-lhes consolação, saúde e paz.\nA assembleia aclama:\nLembrai-vos, ó Pai, dos vossos filhos!\nNa Missa com Matrimônio\nLembrai-vos também, ó Pai, destes vossos filhos\nN.\ne\nN.\n. Como lhes concedestes a alegria do sacramento do Matrimônio, possam, por vossa graça, viver no amor recíproco e na paz.\nA assembleia aclama:\nLembrai-vos, ó Pai, dos vossos filhos!\nAbrir oração pelos fiéis defuntos\nNas Missas pelos fiéis defuntos\n2C\nLembrai-vos do vosso filho\n(\nda vossa filha\n)\nN.\n, que\n(\nhoje\n)\nchamastes deste mundo à vossa presença. Tendo sido sepultado\n(\na\n)\ncom Cristo em sua morte, no Batismo, participe igualmente da sua ressurreição.\n2C\nLembrai-vos também, na vossa misericórdia, dos\n(\noutros\n)\nnossos irmãos e irmãs que adormeceram na esperança da ressurreição e de todos os que partiram desta vida; acolhei-os junto a vós na luz da vossa face.\nA assembleia aclama:\nConcedei-lhes, ó Senhor, a luz eterna!\n3C\nEnfim, nós vos pedimos, tende piedade de todos nós e dai-nos participar da vida eterna, com a Virgem Maria, Mãe de Deus, São José, seu esposo, os Apóstolos,\n(\nSão\nN.\n:\nSanto do dia ou padroeiro)\ne todos os Santos que neste mundo viveram na vossa amizade, a fim de vos louvarmos e glorificarmos\nune as mãos\npor Jesus Cristo, vosso Filho.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística III\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nSegue-se conforme as rubricas, o prefácio, com a conclusão:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nO sacerdote, de braços abertos, diz:\nCP\nNa verdade, vós sois Santo, ó Deus do universo, e tudo o que criastes proclama o vosso louvor, porque, por Jesus Cristo, vosso Filho e Senhor nosso, e pela força do Espírito Santo, dais vida e santidade a todas as coisas e não cessais de reunir para vós um povo que vos ofereça em toda parte, do nascer ao pôr do sol, um sacrifício perfeito.\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nPor isso, ó Pai, nós vos suplicamos: santificai pelo Espírito Santo as oferendas que vos apresentamos para serem consagradas\nune as mãos e traça o sinal da cruz, ao mesmo tempo sobre o pão e o cálice, dizendo:\na fim de que se tornem o Corpo e\n✠\no Sangue de vosso Filho, nosso Senhor Jesus Cristo,\nune as mãos\nque nos mandou celebrar estes mistérios.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nNa noite em que ia ser entregue,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo: TOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nEntão prossegue:\nDo mesmo modo, no fim da Ceia,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nele tomou o cálice em suas mãos, pronunciou a bênção de ação de graças, e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nOu\nMistério da fé e do amor!\nA assembleia aclama:\nTodas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!\nOu\nMistério da fé para a salvação do mundo!\nA assembleia aclama:\nSalvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição.\nou\nO sacerdote, de braços abertos, diz:\nCC\nCelebrando agora, ó Pai, o memorial da paixão redentora do vosso Filho, da sua gloriosa ressurreição e ascensão ao céu, e enquanto esperamos sua nova vinda, nós vos oferecemos em ação de graças este sacrifício vivo e santo.\nA assembleia aclama:\nAceitai, ó Senhor, a nossa oferta!\nOlhai com bondade a oblação da vossa Igreja e reconhecei nela o sacrifício que nos reconciliou convosco; concedei que, alimentando-nos com o Corpo e o Sangue do vosso Filho, repletos do Espírito Santo, nos tornemos em Cristo um só corpo e um só espírito.\nA assembleia aclama:\nO Espírito nos una num só corpo!\n1C\nQue o mesmo Espírito faça de nós uma eterna oferenda para alcançarmos a herança com os vossos eleitos: a santíssima Virgem Maria, Mãe de Deus, São José, seu esposo, os vossos santos Apóstolos e gloriosos Mártires,\n(Santo do dia ou padroeiro)\ne todos os Santos, que não cessam de interceder por nós na vossa presença.\nA assembleia aclama:\nFazei de nós uma perfeita oferenda!\n2C\nNós vos suplicamos, Senhor, que este sacrifício da nossa reconciliação estenda a paz e a salvação ao mundo inteiro. Confirmai na fé e na caridade a vossa Igreja que caminha neste mundo com o vosso servo o Papa\nN.\ne o nosso Bispo\nN.\n, com os bispos do mundo inteiro, os presbíteros e diáconos, os outros ministros e o povo por vós redimido.\n★\nAtendei propício às preces desta família, que reunistes em vossa presença. Reconduzi a vós, Pai de misericórdia, todos os vossos filhos e filhas dispersos pelo mundo inteiro.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\nAbrir oração pelos fiéis: Na Missa com Batismo (e Crisma), Na Missa com Crisma, Ⓑ Na Missa com Primeira Comunhão Eucarística e Na Missa com Matrimônio\nNa Missa com Batismo (e Crisma)\n★\nAtendei propício às preces desta família, que reunistes em vossa presença. Confirmai em seu santo propósito os vossos filhos e filhas, que hoje fizestes membros do vosso povo pela água do Batismo\n(\ne pelo dom do Espírito Santo\n)\n; concedei-lhes progredir sempre na vida nova. Reconduzi a vós, Pai de misericórdia, todos os vossos filhos e filhas dispersos pelo mundo inteiro.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\nNa Missa com Crisma\n★\nAtendei propício às preces desta família, que reunistes em vossa presença. Lembrai-vos também dos vossos filhos e filhas que, renascidos pelo Batismo, vos dignastes confirmar com o Espírito Santo, vosso grande dom; guardai-os sempre em vossa graça. Reconduzi a vós, Pai de misericórdia, todos os vossos filhos e filhas dispersos pelo mundo inteiro.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\nⒷ Na Missa com Primeira Comunhão Eucarística\n★\nAtendei propício às preces desta família, que reunistes em vossa presença. Lembrai-vos também dos vossos filhos e filhas que hoje reunis pela primeira vez à vossa mesa, na participação do Pão da vida e do Cálice da salvação; concedei-lhes crescer sempre em vossa amizade e na comunhão da vossa Igreja. Reconduzi a vós, Pai de misericórdia, todos os vossos filhos e filhas dispersos pelo mundo inteiro.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\nNa Missa com Matrimônio\n★\nAtendei propício às preces desta família, que reunistes em vossa presença. Fortalecei na graça do Matrimônio estes vossos filhos\nN.\ne\nN.\n, que fizestes chegar com alegria ao dia das núpcias; firmes no vosso amor, conservem por toda a vida tão santa aliança. Reconduzi a vós, Pai de misericórdia, todos os vossos filhos e filhas dispersos pelo mundo inteiro.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\n3C\nAcolhei com bondade no vosso reino os nossos irmãos e irmãs que partiram desta vida e todos os que morreram na vossa amizade. Unidos a eles, esperamos também nós saciar-nos eternamente da vossa glória,\nune as mãos\npor Cristo, Senhor nosso. Por ele dais ao mundo todo bem e toda graça.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nAbrir opção pelos fiéis defuntos\nNas Missas pelos fiéis defuntos, pode-se dizer:\n3C\nLembrai-vos, ó Pai, do\n(s)\nvosso\n(s)\nfilho\n(s)\n(\nda\n(s)\nvossa\n(s)\nfilha\n(s)) N.\n, que\n(\nhoje\n)\nchamastes deste mundo à vossa presença. Concedei-lhe que, tendo participado da morte de Cristo pelo Batismo, participe igualmente da sua ressurreição, no dia em que ele ressuscitar os mortos, tornando o nosso pobre corpo semelhante ao seu corpo glorioso. Acolhei com bondade no vosso reino os outros irmãos e irmãs que partiram desta vida e todos os que morreram na vossa amizade.\nUnidos a eles, esperamos também nós saciar-nos eternamente da vossa glória, quando enxugardes toda lágrima dos nossos olhos. Então, contemplando-vos como sois, seremos para sempre semelhantes a vós e cantaremos sem cessar os vossos louvores\nune as mãos\npor Cristo, Senhor nosso. Por ele dais ao mundo todo bem e toda graça.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística IV\nEste prefácio não pode ser substituído por outro, porque introduz a Oração Eucarística cuja estrutura apresenta um resumo da História da Salvação.\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nNa verdade, ó Pai, é nosso dever dar-vos graças, é nossa salvação dar-vos glória. Só vós sois o Deus vivo e verdadeiro que existis antes de todo o tempo e permaneceis para sempre, habitando em luz inacessível.\nMas, porque sois o Deus de bondade e a fonte da vida, fizestes todas as coisas para cobrir de bênçãos as vossas criaturas e a muitos alegrar com o esplendor da vossa luz.\nEis, pois, diante de vós os inumeráveis coros dos Anjos que dia e noite vos servem e, contemplando a glória da vossa face, vos louvam sem cessar. Com eles também nós e, por nossa voz, tudo o que criastes celebramos vosso Nome e, exultantes de alegria, cantamos\n(\ndizemos\n)\na uma só voz:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nou\nO sacerdote, de braços abertos, diz:\nCP\nNós proclamamos vossa grandeza, Pai santo, a sabedoria e o amor com que fizestes todas as coisas. Criastes o ser humano à vossa imagem e lhe confiastes todo o universo, para que, servindo somente a vós, seu Criador, cuidasse de toda criatura. E quando pela desobediência perdeu a vossa amizade, não o abandonastes ao poder da morte. A todos, porém, socorrestes com misericórdia, para que, ao procurar-vos, vos encontrassem. Muitas vezes oferecestes aliança à família humana e a instruístes pelos profetas na esperança da salvação.\nA assembleia aclama:\nA todos socorrestes com bondade!\nE de tal modo, Pai santo, amastes o mundo que, chegada a plenitude dos tempos, nos enviastes vosso próprio Filho para ser o nosso Salvador. Encarnado pelo poder do Espírito Santo e nascido da Virgem Maria, Jesus viveu em tudo a condição humana, menos o pecado; anunciou aos pobres a salvação, aos oprimidos, a liberdade, aos tristes, a alegria. Para cumprir o vosso plano de amor, entregou-se à morte e, ressuscitando, destruiu a morte e renovou a vida.\nA assembleia aclama:\nPor amor nos enviastes vosso Filho!\nE, a fim de não mais vivermos para nós, mas para ele, que por nós morreu e ressuscitou, enviou de vós, ó Pai, como primeiro dom aos vossos fiéis, o Espírito Santo, que continua sua obra no mundo para levar à plenitude toda a santificação.\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nPor isso, nós vos pedimos, ó Pai, que o mesmo Espírito Santo santifique estas oferendas,\nune as mãos e traça o sinal da cruz, ao mesmo tempo sobre o pão e o cálice, dizendo:\na fim de que se tornem o Corpo e\n✠\no Sangue de Jesus Cristo, vosso Filho e Senhor nosso,\nune as mãos\npara celebrarmos este grande mistério que ele nos deixou em sinal da eterna aliança.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nQuando, pois, chegou a hora em que por vós, ó Pai, ia ser glorificado, tendo amado os seus que estavam no mundo, amou-os até o fim. Enquanto ceavam,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nEntão prossegue:\nDo mesmo modo,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nele tomou em suas mãos o cálice com vinho, deu-vos graças novamente, e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nOu\nMistério da fé e do amor!\nA assembleia aclama:\nTodas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!\nOu\nMistério da fé para a salvação do mundo!\nA assembleia aclama:\nSalvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição.\nou\nO sacerdote, de braços abertos, diz:\nCC\nCelebrando, agora, ó Pai, o memorial da nossa redenção, anunciamos a morte de Cristo e sua descida entre os mortos, proclamamos a sua ressurreição e ascensão à vossa direita e, esperando a sua vinda gloriosa, nós vos oferecemos o seu Corpo e Sangue, sacrifício do vosso agrado e salvação para o mundo inteiro.\nA assembleia aclama:\nAceitai, ó Senhor, a nossa oferta!\nOlhai, com bondade, a oblação que destes à vossa Igreja e concedei aos que vamos participar do mesmo pão e do mesmo cálice que, reunidos pelo Espírito Santo num só corpo, nos tornemos em Cristo uma oferenda viva para o louvor da vossa glória.\nA assembleia aclama:\nO Espírito nos una num só corpo!\n1C\n★\nE agora, ó Pai, lembrai-vos de todos pelos quais vos oferecemos este sacrifício: o vosso servo o Papa\nN.\n, o nosso Bispo\nN.\n, os bispos do mundo inteiro, os presbíteros, os diáconos, e todos os ministros da vossa Igreja, os fiéis que, ao redor deste altar, se unem à nossa oferta, o povo que vos pertence e aqueles que vos procuram de coração sincero.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\nAbrir oração pelos fiéis: Na Missa com Batismo, Na Missa com Crisma e Ⓑ Na Missa com Primeira Comunhão Eucarística\nNa Missa com Batismo\n★\nE agora, ó Pai, lembrai-vos de todos pelos quais vos oferecemos este sacrifício: o vosso servo o Papa\nN.\n, o nosso Bispo\nN.\n, os bispos do mundo inteiro, os presbíteros, os diáconos e todos os ministros da vossa Igreja, os que hoje fizestes renascer da água e do Espírito Santo, os fiéis que, ao redor deste altar, se unem à nossa oferta, o povo que vos pertence e aqueles que vos procuram de coração sincero.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\nNa Missa com Crisma\n★\nE agora, ó Pai, lembrai-vos de todos pelos quais vos oferecemos este sacrifício: o vosso servo o Papa\nN.\n, o nosso Bispo\nN.\n, os bispos do mundo inteiro, os presbíteros, os diáconos e todos os ministros da vossa Igreja, os que hoje foram ungidos pelo Espírito Santo, dom de Deus, os fiéis que, ao redor deste altar, se unem à nossa oferta, o povo que vos pertence e aqueles que vos procuram de coração sincero.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\nⒷ Na Missa com Primeira Comunhão Eucarística\n★\nE agora, ó Pai, lembrai-vos de todos pelos quais vos oferecemos este sacrifício: o vosso servo o Papa\nN.\n, o nosso Bispo\nN.\n, os bispos do mundo inteiro, os presbíteros, os diáconos e todos os ministros da vossa Igreja, os que hoje reunis pela primeira vez à vossa mesa na participação do Pão da vida e do Cálice da salvação, os fiéis que, ao redor deste altar, se unem à nossa oferta, o povo que vos pertence e aqueles que vos procuram de coração sincero.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\n2C\nLembrai-vos também dos que morreram na paz do vosso Cristo e de todos os defuntos dos quais só vós conhecestes a fé.\nA assembleia aclama:\nConcedei-lhes, ó Senhor, a luz eterna!\n3C\nE a todos nós, vossos filhos e filhas, concedei, ó Pai de bondade, alcançar a herança eterna, com a Virgem Maria, Mãe de Deus, São José, seu esposo, os Apóstolos e todos os Santos, no vosso reino, onde, com todas as criaturas, libertas da corrupção do pecado e da morte, vos glorificaremos,\nune as mãos\npor Cristo, Senhor nosso, por quem dais ao mundo todo bem e toda graça.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística V Ⓑ\nO prefácio não pode ser substituído por outro.\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nÉ justo e nos faz todos ser mais santos, louvar a vós, ó Pai, no mundo inteiro, de dia e de noite, agradecendo com Cristo, vosso Filho, nosso irmão.\nÉ ele o sacerdote verdadeiro que sempre se oferece por nós todos, mandando que se faça a mesma coisa que fez naquela Ceia derradeira.\nPor isso, aqui estamos reunidos, louvando e agradecendo com alegria, juntando nossa voz à voz dos Anjos e dos Santos todos, para cantar\n(\ndizer\n)\n:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nO sacerdote, de braços abertos, diz:\nCP\nÓ Pai, vós que sempre quisestes ficar muito perto de nós, vivendo conosco no Cristo, falando conosco por ele,\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nmandai o vosso Espírito Santo,\nune as mãos e traça o sinal da cruz, ao mesmo tempo sobre o pão e o cálice, dizendo:\na fim de que as nossas ofertas se mudem no Corpo\n✠\ne no Sangue de nosso Senhor Jesus Cristo.\nA assembleia aclama:\nMandai vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nNa noite em que ia ser entregue, ceando com seus Apóstolos,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou o pão em suas mãos,\neleva os olhos\nolhou para o céu e vos deu graças, partiu o pão e o entregou a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nEntão prossegue:\nDo mesmo modo, no fim da Ceia,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\ntomou o cálice em suas mãos, deu-vos graças novamente e o entregou a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nTudo isto é mistério da fé!\nA assembleia aclama:\nToda vez que\ncomemos\ndeste Pão, toda vez que\nbebemos\ndeste Vinho,\nrecordamos\na paixão de Jesus Cristo e\nficamos\nesperando sua\nvinda\n.\nou\nO sacerdote, de braços abertos, diz:\nRecordando, ó Pai, neste momento, a paixão de Jesus, nosso Senhor, sua ressurreição e ascensão, nós queremos a vós oferecer este Pão que alimenta e que dá vida, este Vinho que nos salva e dá coragem.\nA assembleia aclama:\nRecebei, ó Senhor, a nossa oferta!\nE quando recebermos Pão e Vinho, o Corpo e Sangue dele oferecidos, o Espírito nos una num só corpo, para sermos um só povo em seu amor.\nA assembleia aclama:\nO Espírito nos una num só corpo!\n1C\nProtegei vossa Igreja que caminha nas estradas do mundo rumo ao céu, cada dia renovando a\nesperança de chegar junto a vós, na vossa paz.\nA assembleia aclama:\nCaminhamos na estrada de Jesus!\n2C\nDai ao vosso servo, o Papa N., ser bem firme na fé, na caridade, e a N., que é Bispo desta\nIgreja, muita luz para guiar o vosso Povo.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\n3C\nEsperamos entrar na vida eterna com Maria, Mãe de Deus e da Igreja, os Apóstolos, e todos\nos que na vida souberam amar Cristo e seus irmãos.\nA assembleia aclama:\nEsperamos entrar na vida eterna!\n4C\nAbri as portas da misericórdia aos que chamastes para a outra vida; acolhei-os junto a vós,\nbem felizes, no reino que para todos preparastes.\nA assembleia aclama:\nA todos dai a luz que não se apaga!\nO sacerdote, de braços abertos, continua:\nCP\nE a todos nós, aqui reunidos, que somos povo santo e pecador, dai-nos a graça de participar\ndo vosso reino que também é nosso.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística (D1) para diversas circunstâncias 1\nA IGREJA A CAMINHO DA UNIDADE\nConvém usar Oração Eucarística com os formulários de Missa, pela Igreja, pelo Papa, pelo Bispo, para a eleição do Papa ou Bispo, por um Concílio ou Sínodo, pelos sacerdotes, pelo próprio sacerdote, pelos ministros da Igreja, para uma reunião espiritual ou pastoralⒷ e quando houver sintonia com a Liturgia da Palavra.\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nNa verdade, é digno e justo, é nosso dever e salvação dar-vos graças e cantar-vos um hino de glória e louvor, Senhor, Pai de infinita bondade.\nPela palavra do Evangelho do vosso Filho reunistes uma só Igreja de todos os povos, línguas e nações. Por ela, vivificada pela força do vosso Espírito, não deixais de congregar na unidade todo o gênero humano.\nManifestando a aliança do vosso amor, a Igreja irradia sem cessar a alegre esperança do vosso reino e brilha como sinal da vossa fidelidade que prometestes para sempre em Cristo Jesus, Senhor nosso.\nPor isso, unidos a todos os Anjos dos céus, nós vos celebramos na terra, cantando\n(\ndizendo\n)\ncom a Igreja inteira a uma só voz:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nO sacerdote, de braços abertos, diz:\nCP\nNa verdade, vós sois Santo e digno de louvor, ó Deus, que amais os seres humanos e sempre os acompanhais no caminho da vida. Na verdade, é bendito o vosso Filho, presente no meio de nós, quando nos reunimos por seu amor. Como outrora aos discípulos de Emaús, ele nos revela as Escrituras e parte o Pão para nós.\nA assembleia aclama:\nBendito o vosso Filho, presente entre nós!\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nPor isso, nós vos suplicamos, Pai de bondade: enviai e o vosso Espírito Santo para que santifique estes dons do pão e do vinho,\nune as mãos e traça o sinal da cruz, ao mesmo tempo que sobre o pão e o cálice, dizendo:\ne se tornem para nós o Corpo e\n✠\no Sangue\nune as mãos\nde nosso Senhor Jesus Cristo.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nNa véspera de sua paixão, na noite da última Ceia,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nEntão prossegue:\nDo mesmo modo, no fim da Ceia,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nele tomou o cálice em suas mãos, deu-vos graças novamente e o entregou a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nOu\nMistério da fé e do amor!\nA assembleia aclama:\nTodas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!\nOu\nMistério da fé para a salvação do mundo!\nA assembleia aclama:\nSalvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição.\nO sacerdote, de braços abertos, diz:\nCC\nCelebrando, pois, ó Pai santo, o memorial da Páscoa de Cristo, vosso Filho, nosso Salvador, anunciamos a obra do vosso amor; pela paixão e morte de cruz, vós o fizestes entrar na glória da ressurreição e o colocastes à vossa direita. Enquanto esperamos sua vinda gloriosa, nós vos oferecemos o Pão da vida e o Cálice da bênção.\nA assembleia aclama:\nAceitai, ó Senhor, a nossa oferta!\nOlhai com bondade a oferta da vossa Igreja; nela vos apresentamos o sacrifício pascal de Cristo, que nos foi entregue. E concedei que, pela força do Espírito do vosso amor, sejamos contados, agora e por toda a eternidade, entre os membros do vosso Filho, cujo Corpo e Sangue comungamos.\nA assembleia aclama:\nO Espírito nos una num só corpo!\n1C\nRenovai, ó Pai, com a luz do Evangelho, a vossa Igreja\n(\nque está em\nN.)\n. Fortalecei o vínculo da unidade entre os fiéis e os pastores do vosso povo, em comunhão com o nosso Papa\nN.\n, o nosso Bispo\nN.\ne toda a ordem episcopal. Assim, neste mundo dilacerado por discórdias, o vosso povo brilhe como sinal profético de unidade e concórdia.\nA assembleia aclama:\nConfirmai na unidade a vossa Igreja!\n2C\nLembrai-vos dos nossos irmãos e irmãs\n(N.\ne\nN.)\n, que adormeceram na paz do vosso Cristo, e de todos os falecidos, cuja fé só vós conhecestes: acolhei-os na luz da vossa face e, na ressurreição, concedei-lhes a plenitude da vida.\nA assembleia aclama:\nConcedei-lhes, ó Senhor, a luz eterna!\n3C\nConcedei também a nós, no fim da nossa peregrinação terrestre, chegarmos todos à morada eterna, onde viveremos para sempre convosco e, com a Bem-aventurada Virgem Maria, Mãe de Deus, os Apóstolos e Mártires,\n(\nSão\nN.\n:\nSanto do dia ou padroeiro)\ne todos os Santos, vos louvaremos e glorificaremos,\nune as mãos\npor Jesus Cristo, vosso Filho.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística (D2) para diversas circunstâncias 2\nDEUS CONDUZ SUA IGREJA NO CAMINHO DA SALVAÇÃO\nConvém usar esta Oração Eucarística com os formulários de Missa, pela Igreja, pelas vocações às ordens sagradas, pelos leigos, pela família, pelos religiosos, pelas vocações à vida religiosa, para pedir caridade, pelos parentes e amigos, em ação de graças Ⓑ e quando houver sintonia com a Liturgia da Palavra.\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nNa verdade, é digno e justo, é nosso dever e salvação dar-vos graças, sempre e em todo lugar, Senhor, Pai santo, criador do mundo e fonte de toda vida.\nNunca abandonais a obra da vossa sabedoria, mas, em vossa providência, continuais agindo no meio de nós. Com braço estendido e mão forte, guiastes o vosso povo de Israel pelo deserto.\nAgora, com a força do Espírito Santo, acompanhais sempre a vossa Igreja, peregrina neste mundo, e a conduzis pelos caminhos da história até à felicidade perfeita em vosso reino por Jesus Cristo, Senhor nosso.\nPor isso, também nós, com os Anjos e Santos, proclamamos o hino de vossa glória, cantando\n(\ndizendo\n)\nsem cessar:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nO sacerdote, de braços abertos, diz:\nCP\nNa verdade, vós sois Santo e digno de louvor, ó Deus, que amais os seres humanos e sempre os acompanhais no caminho da vida. Na verdade, é bendito o vosso Filho, presente no meio de nós, quando nos reunimos por seu amor. Como outrora aos discípulos de Emaús, ele nos revela as Escrituras e parte o Pão para nós.\nA assembleia aclama:\nBendito o vosso Filho, presente entre nós!\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nPor isso, nós vos suplicamos, Pai de bondade: enviai e o vosso Espírito Santo para que santifique estes dons do pão e do vinho,\nune as mãos e traça o sinal da cruz, ao mesmo tempo que sobre o pão e o cálice, dizendo:\ne se tornem para nós o Corpo e\n✠\no Sangue\nune as mãos\nde nosso Senhor Jesus Cristo.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nNa véspera de sua paixão, na noite da última Ceia,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nEntão prossegue:\nDo mesmo modo, no fim da Ceia,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nele tomou o cálice em suas mãos, deu-vos graças novamente e o entregou a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nOu\nMistério da fé e do amor!\nA assembleia aclama:\nTodas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!\nOu\nMistério da fé para a salvação do mundo!\nA assembleia aclama:\nSalvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição.\nO sacerdote, de braços abertos, diz:\nCC\nCelebrando, pois, ó Pai santo, o memorial da Páscoa de Cristo, vosso Filho, nosso Salvador, anunciamos a obra do vosso amor; pela paixão e morte de cruz, vós o fizestes entrar na glória da ressurreição e o colocastes à vossa direita. Enquanto esperamos sua vinda gloriosa, nós vos oferecemos o Pão da vida e o Cálice da bênção.\nA assembleia aclama:\nAceitai, ó Senhor, a nossa oferta!\nOlhai com bondade a oferta da vossa Igreja; nela vos apresentamos o sacrifício pascal de Cristo, que nos foi entregue. E concedei que, pela força do Espírito do vosso amor, sejamos contados, agora e por toda a eternidade, entre os membros do vosso Filho, cujo Corpo e Sangue comungamos.\nA assembleia aclama:\nO Espírito nos una num só corpo!\n1C\nÓ Pai, confirmai na unidade os convidados a participar da vossa mesa, para que, seguindo na fé e na esperança pelos vossos caminhos, possamos irradiar no mundo alegria e confiança em comunhão com o nosso Papa\nN.\n, o nosso Bispo\nN.\n, todos os bispos, presbíteros, diáconos e todo o vosso povo.\nA assembleia aclama:\nConfirmai na unidade a vossa Igreja!\n2C\nLembrai-vos dos nossos irmãos e irmãs\n(N.\ne\nN.)\n, que adormeceram na paz do vosso Cristo, e de todos os falecidos, cuja fé só vós conhecestes: acolhei-os na luz da vossa face e, na ressurreição, concedei-lhes a plenitude da vida.\nA assembleia aclama:\nConcedei-lhes, ó Senhor, a luz eterna!\n3C\nConcedei também a nós, no fim da nossa peregrinação terrestre, chegarmos todos à morada eterna, onde viveremos para sempre convosco e, com a Bem-aventurada Virgem Maria, Mãe de Deus, os Apóstolos e Mártires,\n(\nSão\nN.\n:\nSanto do dia ou padroeiro)\ne todos os Santos, vos louvaremos e glorificaremos,\nune as mãos\npor Jesus Cristo, vosso Filho.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística (D3) para diversas circunstâncias 3\nJESUS, CAMINHO PARA O PAI\nConvém usar esta Oração Eucarística com os formulários de Missa, pela evangelização dos povos, pelos cristãos perseguidos, pela pátria ou pela cidade, pelos governantes, pelo encontro de chefes das nações, no início do ano civil, pelo progresso dos povos Ⓑ e quando houver sintonia com a Liturgia da Palavra.\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nNa verdade, é digno e justo, é nosso dever e salvação dar-vos graças, sempre e em todo lugar, Pai santo, Senhor do céu e da terra, por Cristo, Senhor nosso.\nDe fato, pelo vosso Verbo criastes o universo e tudo governais com equidade. Vós nos destes vosso Filho, feito carne, como mediador; ele nos dirigiu a vossa palavra e nos chamou a seguir os seus passos.\nEle é o caminho que nos conduz até vós, a verdade que nos liberta, a vida que nos enche de alegria.\nPor vosso Filho, reunis em uma só família os homens e as mulheres, criados para a glória do vosso nome, redimidos pelo sangue de sua cruz e marcados com o selo do vosso Espírito.\nPor isso, agora e para sempre, unidos a todos os Anjos, proclamamos a vossa glória, cantando\n(\ndizendo\n)\ncom alegria:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nO sacerdote, de braços abertos, diz:\nCP\nNa verdade, vós sois Santo e digno de louvor, ó Deus, que amais os seres humanos e sempre os acompanhais no caminho da vida. Na verdade, é bendito o vosso Filho, presente no meio de nós, quando nos reunimos por seu amor. Como outrora aos discípulos de Emaús, ele nos revela as Escrituras e parte o Pão para nós.\nA assembleia aclama:\nBendito o vosso Filho, presente entre nós!\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nPor isso, nós vos suplicamos, Pai de bondade: enviai e o vosso Espírito Santo para que santifique estes dons do pão e do vinho,\nune as mãos e traça o sinal da cruz, ao mesmo tempo que sobre o pão e o cálice, dizendo:\ne se tornem para nós o Corpo e\n✠\no Sangue\nune as mãos\nde nosso Senhor Jesus Cristo.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nNa véspera de sua paixão, na noite da última Ceia,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nEntão prossegue:\nDo mesmo modo, no fim da Ceia,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nele tomou o cálice em suas mãos, deu-vos graças novamente e o entregou a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nOu\nMistério da fé e do amor!\nA assembleia aclama:\nTodas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!\nOu\nMistério da fé para a salvação do mundo!\nA assembleia aclama:\nSalvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição.\nO sacerdote, de braços abertos, diz:\nCC\nCelebrando, pois, ó Pai santo, o memorial da Páscoa de Cristo, vosso Filho, nosso Salvador, anunciamos a obra do vosso amor; pela paixão e morte de cruz, vós o fizestes entrar na glória da ressurreição e o colocastes à vossa direita. Enquanto esperamos sua vinda gloriosa, nós vos oferecemos o Pão da vida e o Cálice da bênção.\nA assembleia aclama:\nAceitai, ó Senhor, a nossa oferta!\nOlhai com bondade a oferta da vossa Igreja; nela vos apresentamos o sacrifício pascal de Cristo, que nos foi entregue. E concedei que, pela força do Espírito do vosso amor, sejamos contados, agora e por toda a eternidade, entre os membros do vosso Filho, cujo Corpo e Sangue comungamos.\nA assembleia aclama:\nO Espírito nos una num só corpo!\n1C\nPela participação neste mistério, ó Pai todo-poderoso, vivificai-nos no Espírito, tornai-nos semelhantes à imagem do vosso Filho e confirmai-nos no vínculo da comunhão com o nosso Papa\nN.\n, o nosso Bispo\nN.\n, os outros bispos, os presbíteros e diáconos e todo o vosso povo.\nA assembleia aclama:\nConfirmai na unidade a vossa Igreja!\n2C\nFazei que todos os fiéis da Igreja, discernindo os sinais dos tempos à luz da fé, empenhem-se coerentemente no serviço do Evangelho. Tornai-nos atentos às necessidades de todas as pessoas para que, participando de suas dores e angústias, de suas alegrias e esperanças, fielmente lhes anunciemos a salvação e, com eles, sigamos no caminho do vosso reino.\nA assembleia aclama:\nAjudai-nos a criar um mundo novo!\n3C\nLembrai-vos dos nossos irmãos e irmãs\n(N.\ne\nN.)\n, que adormeceram na paz do vosso Cristo, e de todos os falecidos, cuja fé só vós conhecestes: acolhei-os na luz da vossa face e, na ressurreição, concedei-lhes a plenitude da vida.\nA assembleia aclama:\nConcedei-lhes, ó Senhor, a luz eterna!\n4C\nConcedei também a nós, no fim da nossa peregrinação terrestre, chegarmos todos à morada eterna, onde viveremos para sempre convosco e, com a Bem-aventurada Virgem Maria, Mãe de Deus, os Apóstolos e Mártires,\n(\nSão\nN.\n:\nSanto do dia ou padroeiro)\ne todos os Santos, vos louvaremos e glorificaremos, por Jesus Cristo, vosso Filho.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística (D4) para diversas circunstâncias 4\nJESUS QUE PASSA FAZENDO O BEM\nConvém usar esta Oração Eucarística com os formulários de Missa, pelos refugiados e exilados, em tempo de fome ou pelos que passam fome, pelos que nos afligem, pelos mantidos em cativeiro, pelos prisioneiros, pelos enfermos, pelos agonizantes, para pedir a graça de uma boa morte, em qualquer necessidade Ⓑ e quando houver sintonia com a Liturgia da Palavra.\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nNa verdade, é digno e justo, é nosso dever e salvação dar-vos graças, sempre e em todo lugar, Pai das misericórdias e Deus fiel, pois nos destes vosso Filho Jesus Cristo, como Senhor e Redentor.\nEle sempre se mostrou cheio de misericórdia para com os pequenos e os pobres, os doentes e os pecadores, e se fez próximo dos aflitos e oprimidos. Por sua palavra e ação anunciou ao mundo que sois Pai e cuidais de todos os vossos filhos e filhas.\nPor isso, com todos os Anjos e Santos, nós vos louvamos e bendizemos, e proclamamos o hino de vossa glória, cantando\n(\ndizendo\n)\nsem cessar:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nO sacerdote, de braços abertos, diz:\nCP\nNa verdade, vós sois Santo e digno de louvor, ó Deus, que amais os seres humanos e sempre os acompanhais no caminho da vida. Na verdade, é bendito o vosso Filho, presente no meio de nós, quando nos reunimos por seu amor. Como outrora aos discípulos de Emaús, ele nos revela as Escrituras e parte o Pão para nós.\nA assembleia aclama:\nBendito o vosso Filho, presente entre nós!\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nPor isso, nós vos suplicamos, Pai de bondade: enviai e o vosso Espírito Santo para que santifique estes dons do pão e do vinho,\nune as mãos e traça o sinal da cruz, ao mesmo tempo que sobre o pão e o cálice, dizendo:\ne se tornem para nós o Corpo e\n✠\no Sangue\nune as mãos\nde nosso Senhor Jesus Cristo.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nNa véspera de sua paixão, na noite da última Ceia,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nEntão prossegue:\nDo mesmo modo, no fim da Ceia,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nele tomou o cálice em suas mãos, deu-vos graças novamente e o entregou a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nOu\nMistério da fé e do amor!\nA assembleia aclama:\nTodas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!\nOu\nMistério da fé para a salvação do mundo!\nA assembleia aclama:\nSalvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição.\nO sacerdote, de braços abertos, diz:\nCC\nCelebrando, pois, ó Pai santo, o memorial da Páscoa de Cristo, vosso Filho, nosso Salvador, anunciamos a obra do vosso amor; pela paixão e morte de cruz, vós o fizestes entrar na glória da ressurreição e o colocastes à vossa direita. Enquanto esperamos sua vinda gloriosa, nós vos oferecemos o Pão da vida e o Cálice da bênção.\nA assembleia aclama:\nAceitai, ó Senhor, a nossa oferta!\nOlhai com bondade a oferta da vossa Igreja; nela vos apresentamos o sacrifício pascal de Cristo, que nos foi entregue. E concedei que, pela força do Espírito do vosso amor, sejamos contados, agora e por toda a eternidade, entre os membros do vosso Filho, cujo Corpo e Sangue comungamos.\nA assembleia aclama:\nO Espírito nos una num só corpo!\n1C\nDignai-vos, Senhor, conduzir a vossa Igreja à perfeição na fé e no amor, em comunhão com o nosso Papa\nN.\ne o nosso Bispo\nN.\n, com todos os bispos, presbíteros, diáconos e todo o povo que adquiristes para vós.\nA assembleia aclama:\nConfirmai na unidade a vossa Igreja!\n2C\nAbri os nossos olhos para perceber as necessidades dos irmãos e irmãs; inspirai-nos palavras e ações para confortar os cansados e oprimidos; fazei que os sirvamos de coração sincero, seguindo o exemplo e o mandamento de Cristo. Vossa Igreja seja testemunha viva da verdade e da liberdade, da justiça e da paz, para que toda a humanidade se reanime com uma nova esperança.\nA assembleia aclama:\nAjudai-nos a criar um mundo novo!\n3C\nLembrai-vos dos nossos irmãos e irmãs\n(N.\ne\nN.)\n, que adormeceram na paz do vosso Cristo, e de todos os falecidos, cuja fé só vós conhecestes: acolhei-os na luz da vossa face e, na ressurreição, concedei-lhes a plenitude da vida.\nA assembleia aclama:\nConcedei-lhes, ó Senhor, a luz eterna!\n4C\nConcedei também a nós, no fim da nossa peregrinação terrestre, chegarmos todos à morada eterna, onde viveremos para sempre convosco e, com a Bem-aventurada Virgem Maria, Mãe de Deus, os Apóstolos e Mártires,\n(\nSão\nN.\n:\nSanto do dia ou padroeiro)\ne todos os Santos, vos louvaremos e glorificaremos, por Jesus Cristo, vosso Filho.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística (R1) sobre a reconciliação 1\nSOBRE A RECONCILIAÇÃO I\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nNa verdade, é digno e justo dar-vos graças sempre, Senhor, Pai santo, Deus eterno e todo- poderoso. Constantemente nos chamais a uma vida mais plena e, porque sois rico em misericórdia, sempre ofereceis o perdão e convidais os pecadores a confiar somente na vossa bondade.\nE a nós, que tantas vezes quebramos a vossa aliança, nunca nos rejeitastes, mas, por Jesus, vosso Filho, nosso Redentor, unistes convosco a família humana com um vínculo novo de caridade, tão estreito e forte, que nada poderá romper.\nTambém hoje, ofereceis tempo de graça e reconciliação ao vosso povo e um novo alento para que, em Cristo, se converta a vós, enquanto, sempre mais dócil ao Espírito Santo, se coloca ao serviço de todos.\nPor isso, cheios de admiração, exaltamos a força do vosso amor e, proclamando nossa alegria pela salvação, nos unimos às multidões dos céus, cantando\n(\ndizendo\n)\nsem cessar:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nO sacerdote, de braços abertos, diz:\nCP\nNa verdade, ó Pai, vós sois Santo e, desde a origem do mundo, tudo fazeis para sermos santos como vós sois Santo.\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nOlhai as oferendas do vosso povo e derramai sobre elas a força do vosso Espírito, para que se tornem\nune as mãos e traça o sinal da cruz, ao mesmo tempo que sobre o pão e o cálice, dizendo:\no Corpo\n✠\ne o Sangue do vosso amado Filho, Jesus Cristo, no qual também nós somos vossos filhos.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nQuando outrora estávamos perdidos e incapazes de vos encontrar, vós nos amastes com imenso amor, pois vosso Filho, o único Justo, entregou-se à morte, não rejeitando ser pregado no lenho da cruz. Antes, porém, de seus braços abertos traçarem entre o céu e a terra o sinal permanente da vossa aliança, Jesus quis celebrar a Páscoa com seus discípulos.\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nCeando com eles,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\ntomou o pão, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nEm seguida diz:\nDo mesmo modo, no fim da Ceia, Jesus, sabendo que ia reconciliar em si todas as coisas pelo sangue a ser derramado na cruz,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\ntomou o cálice repleto do fruto da videira, deu-vos graças novamente e o entregou a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nOu\nMistério da fé e do amor!\nA assembleia aclama:\nTodas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!\nOu\nMistério da fé para a salvação do mundo!\nA assembleia aclama:\nSalvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição.\nA seguir o sacerdote, de braços abertos, diz:\nCC\nFazendo, pois, memória de vosso Filho, Jesus Cristo, nossa Páscoa e certeza da paz definitiva, celebramos sua morte e ressurreição e, aguardando o dia feliz de sua vinda gloriosa, nós vos oferecemos, Deus fiel e misericordioso, a vítima que nos reconcilia convosco.\nA assembleia aclama:\nAceitai, ó Senhor, a nossa oferta!\nOlhai, com amor, Pai misericordioso, aqueles que unis a vós pelo sacrifício do vosso Filho, e concedei que, pela força do Espírito Santo, os que participam do único pão e do mesmo cálice sejam congregados em Cristo num só corpo, no qual todas as divisões sejam superadas.\nA assembleia aclama:\nO Espírito nos una num só corpo!\n1C\nConservai-nos sempre em comunhão de fé e amor unidos ao Papa\nN.\ne ao Bispo\nN.\n. Ajudai-nos a esperar juntos a vinda do vosso reino, até o dia em que, diante de vós, formos santos entre os Santos na morada celeste, ao lado da Virgem Maria, Mãe de Deus, dos Apóstolos e todos os Santos e com nossos irmãos e irmãs já falecidos que confiamos à vossa misericórdia. Enfim, libertos das feridas do pecado e plenamente transformados em novas criaturas, felizes cantaremos a ação de graças\nune as mãos\ndo vosso Cristo que vive para sempre.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística (R2) sobre a reconciliação 2\nSOBRE A RECONCILIAÇÃO II\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nNa verdade, é digno e justo dar-vos graças e cantar vossos louvores, Deus Pai todo-poderoso, por tudo que operais neste mundo, por Cristo, nosso Senhor.\nNo meio da humanidade dividida por inimizades e discórdias, sabemos por experiência que vós levais as pessoas a se converter e buscar a reconciliação.\nPelo vosso Espírito Santo moveis os corações, de modo que os inimigos voltem à amizade, os adversários se deem as mãos e os povos procurem reencontrar a paz.\nÉ também obra do vosso poder, ó Pai, quando o ódio é vencido pelo amor, a vingança dá lugar ao perdão e a discórdia se converte em mútua afeição.\nPor isso, com os coros celestes, nós vos damos graças sem cessar e proclamamos aqui na terra a vossa glória, cantando\n(\ndizendo\n)\na uma só voz:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nO sacerdote, de braços abertos, diz:\nCP\nPai onipotente, louvado sois por vosso Filho Jesus Cristo, que veio em vosso nome. Ele é a Palavra de salvação para a humanidade, a mão que estendeis aos pecadores e o caminho pelo qual nos é concedida a vossa paz. Quando vos abandonamos por nossos pecados, vós nos reconduzistes à reconciliação por vosso Filho, que por nós entregastes à morte, para que voltássemos a vós e nos amássemos uns aos outros.\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nE agora, celebrando a reconciliação que Cristo nos trouxe, vos pedimos: santificai estas oferendas pela efusão do vosso Espírito,\nune as mãos e traça o sinal da cruz, ao mesmo tempo que sobre o pão e o cálice, dizendo:\na fim de que se tornem o Corpo e\n✠\no Sangue do vosso Filho que nos mandou celebrar estes mistérios.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nAntes de dar a vida para nos libertar, estando à mesa,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou o pão em suas mãos, pronunciou a bênção de ação de graças, partiu e o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nDepois prossegue:\nDo mesmo modo, naquela noite,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nele tomou o cálice da bênção em suas mãos e, proclamando a vossa misericórdia, o deu a seus discípulos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nOu\nMistério da fé e do amor!\nA assembleia aclama:\nTodas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda!\nOu\nMistério da fé para a salvação do mundo!\nA assembleia aclama:\nSalvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição.\nO sacerdote, de braços abertos, diz:\nCC\nFazendo, pois, memória da morte e ressurreição do vosso Filho que nos deixou esta prova de amor, nós vos oferecemos aquilo que nos destes: o sacrifício da perfeita reconciliação.\nA assembleia aclama:\nAceitai, ó Senhor, a nossa oferta!\nPai santo, neste banquete salvífico, suplicantes, vos pedimos: aceitai-nos também com vosso Filho e dai-nos o seu Espírito para que nos liberte de tudo que nos separa uns dos outros.\nA assembleia aclama:\nO Espírito nos una num só corpo!\n1C\nEle faça da vossa Igreja sinal de unidade do gênero humano e instrumento da vossa paz, e nos conserve em comunhão com o Papa\nN.\n, o nosso Bispo\nN.\n, os Bispos do mundo inteiro e todo o vosso povo.\nA assembleia aclama:\nLembrai-vos, ó Pai, da vossa Igreja!\n2C\nÓ Pai, que agora nos reunistes, à mesa do vosso Filho, congregai-nos também na Ceia da comunhão eterna nos novos céus e nova terra, onde brilha a plenitude da vossa paz, junto com a gloriosa Virgem Maria, Mãe de Deus, os Apóstolos e todos os Santos, os nossos irmãos e as pessoas de todos os povos e línguas que morreram na vossa amizade,\nune as mãos\nem Cristo Jesus, Senhor nosso.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística (C1) para Missas com crianças I\nO uso desta Oração Eucarística é restrito às Missas que se celebram só com crianças, isto é, as que ainda não entraram na adolescência, ou àquelas Missas nas quais a maior parte dos participantes é criança.\nO prefácio dessa Oração Eucarística, por sua estrutura e índole peculiar, não pode ser substituído por outros prefácios.\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nSenhor, Pai de bondade, nos reunistes diante de vós para vos celebrar e proclamar vossos louvores com o coração em festa.\nNós vos louvamos por todas as coisas bonitas que existem no mundo e pela alegria que dais a todos nós. Nós vos louvamos pela luz do dia e por vossa Palavra que nos ilumina. Nós vos louvamos também pela terra, pelas pessoas que nela habitam e pela vida que de vós recebemos.\nA assembleia aclama:\nGlória a vós, Senhor, que tanto nos amais!\nSim, ó Pai, sois muito bom: vós nos amais e fazeis por nós coisas maravilhosas, sempre pensais em todas as pessoas e nunca desistis de estar perto delas. Enviastes vosso Filho querido para nos salvar. Ele curou os doentes, perdoou os pecadores, mostrou a todos o vosso amor, acolheu e abençoou as crianças.\nA assembleia aclama:\nGlória a vós, Senhor, que tanto nos amais!\nPai de bondade, nós não estamos sozinhos para celebrar vossos louvores, pois em toda a terra o vosso povo vos glorifica. Por isso, rezamos com a Igreja inteira, com o Papa\nN.\ne o nosso Bispo\nN.\n. No céu também vos louvam sem cessar Maria, a Mãe de Jesus, os Apóstolos e todos os Santos. Unidos a eles e aos Anjos nós vos adoramos, cantando\n(\ndizendo\n)\na uma só voz:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nO sacerdote, de braços abertos, diz:\nCP\nPai santo, para vos agradecer, trouxemos este pão e este vinho;\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\npela ação do Espírito Santo fazei que eles se tornem\nune as mãos e traça o sinal da cruz, ao mesmo tempo, sobre o pão e cálice, dizendo:\no Corpo\n✠\ne o Sangue de Jesus Cristo, vosso Filho muito amado.\nune as mãos\nAssim, ó Pai, possamos oferecer o mesmo dom que vós nos dais.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nJesus, na noite antes de sua morte na cruz, pôs-se à mesa com seus apóstolos,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\ntomou o pão em suas mãos, e, rezando, deu graças; partiu o pão e o deu a seus amigos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nDepois prossegue:\nDo mesmo modo, no fim da Ceia,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou em suas mãos o cálice com vinho, rezou, de novo, em ação de graças e o deu a seus amigos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nou\nO sacerdote, de braços abertos, diz:\nCC\nNesta Eucaristia, nós fazemos com amor o que Jesus mandou e, anunciando a sua morte e ressurreição, vos oferecemos o Pão da vida e o Cálice da salvação. Pai querido, é Jesus que nos conduz a vós; por isso, vos pedimos, recebei-nos com Ele.\nA assembleia aclama:\nCom Jesus, recebei a nossa vida!\nPai, que tanto nos amais, deixai-nos aproximar desta mesa e enviai sobre nós o Espírito Santo para que, alimentando-nos com o Corpo e Sangue do vosso Filho, sejamos um só coração e uma só alma.\nA assembleia aclama:\nFazei de nós um só corpo e um só espírito!\n1C\nSenhor, que sempre vos lembrais de todos, nós vos pedimos por aqueles que amamos: o Papa\nN.\ne o nosso Bispo\nN.\n, nossos pais, irmãos, amigos e os que cuidam de nós. Lembrai-vos também dos que sofrem em suas dores e andam tristes, e dos que morreram na vossa paz. Ó Pai, olhai com carinho o povo cristão e as pessoas do mundo inteiro. Diante de tudo o que fazeis em nosso favor por meio de Jesus Cristo, vosso Filho, nós vos bendizemos e louvamos.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\nOração Eucarística (C2) para Missas com crianças II\nO uso desta Oração Eucarística é restrito às Missas que se celebram só com crianças, isto é, as que ainda não entraram na adolescência, ou àquelas Missas nas quais a maior parte dos participantes é criança.\nO prefácio dessa Oração Eucarística, por sua estrutura e índole peculiar, não pode ser substituído por outros prefácios.\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nÓ Pai querido, que tanto nos amais, como é grande a nossa alegria em vos agradecer e com Jesus, na vossa Igreja, cantar vosso louvor.\nVós nos amastes tanto que criastes para nós este mundo imenso e maravilhoso. Vós nos amais tanto que nos dais vosso Filho Jesus para nos guiar até vós. Vós nos amais tanto que nos reunis em vosso Filho Jesus e, pelo Espírito Santo, nos tornais filhos e filhas da mesma família.\nPor este amor tão grande nós vos agradecemos e com os Anjos e os Santos, que vos adoram, cantamos\n(\ndizemos\n)\na uma só voz:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nou\nO sacerdote, de braços abertos, diz:\nCP\nSim, bendito seja Jesus que vós nos enviastes, amigo das crianças e dos pobres. Ele nos ensina a vos amar, ó Pai querido, e amar-nos uns aos outros.\nA assembleia aclama:\nGlória a vós, Senhor, que tanto nos amais!\nJesus veio tirar do coração o pecado, a maldade e o ódio que impedem a amizade e não nos deixam ser felizes. Ele prometeu que o Espírito Santo ficaria sempre conosco para vivermos bem unidos a vós como filhos e filhas.\nA assembleia aclama:\nGlória a vós, Senhor, que tanto nos amais!\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nÓ Deus, nosso Pai, enviai vosso Espírito Santo para que estes dons do pão e do vinho\nune as mãos e traça o sinal da cruz, ao mesmo tempo sobre o pão e o cálice, dizendo:\nse tornem o Corpo\n✠\ne o Sangue de nosso Senhor Jesus Cristo.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nJesus, na noite antes de sua morte na cruz, nos mostrou como é grande vosso amor. Quando ele estava à mesa com os apóstolos,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\ntomou o pão em suas mãos e rezou, louvando e agradecendo. Depois partiu o pão e o deu a seus amigos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nDepois prossegue:\nDo mesmo modo, no fim da Ceia,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou em suas mãos o cálice com vinho, rezou, de novo, em ação de graças e o deu a seus amigos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nou\nA seguir, o sacerdote, de braços abertos, diz:\nCC\nPor isso, Pai querido, celebramos a memória da morte e ressurreição de Jesus, Salvador do mundo. Ele mesmo se colocou em nossas mãos para ser este dom de reconciliação e de paz, nosso sacrifício que agora vos oferecemos e pelo qual somos atraídos para vós.\nA assembleia aclama:\nCom Jesus, recebei a nossa vida!\nO sacerdote, de braços abertos, diz:\n1C\nEscutai-nos, Senhor nosso Deus, e dai o Espírito do vosso amor aos que participam desta Ceia, para que fiquem sempre mais unidos na vossa Igreja, com o nosso Papa\nN.\n, o nosso Bispo\nN.\n, os outros bispos e todos aqueles que servem o vosso povo.\nA assembleia aclama:\nFazei de nós um só corpo e um só espírito!\n2C\nNão vos esqueçais daqueles que amamos: nossos pais, parentes, amigos e os que cuidam de nós; e também daqueles que ainda não amamos bastante. Lembrai-vos dos que em paz partiram desta vida\n(N. N.)\n; acolhei-os com amor na alegria da vossa casa.\nA assembleia aclama:\nFazei de nós um só corpo e um só espírito!\n3C\nUm dia, enfim, ó Pai, reuni a todos nós em vosso reino, com a Virgem Maria, Mãe de Deus e nossa Mãe, para celebrar a festa que no céu nunca se acaba, onde todos os amigos de Jesus cantam sem cessar o vosso louvor.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão.\n14x\nOração Eucarística (C3) para Missas com crianças III\nO uso desta Oração Eucarística é restrito às Missas que se celebram só com crianças, isto é, as que ainda não entraram na adolescência, ou àquelas Missas nas quais a maior parte dos participantes é criança.\nO prefácio dessa Oração Eucarística, por sua estrutura e índole peculiar, não pode ser substituído por outros prefácios.\n℣.\nO Senhor esteja convosco.\n℟.\nEle está no meio de nós.\n℣.\nCorações ao alto.\n℟.\nO nosso coração está em Deus.\n℣.\nDemos graças ao Senhor, nosso Deus.\n℟.\nÉ nosso dever e nossa salvação.\nDeus, nosso Pai, nós vos agradecemos, porque nos criastes, a fim de vivermos para vós, amando-nos como irmãos.\nPor vosso dom, podemos viver como amigos e repartir uns com os outros as coisas bonitas que temos e as dificuldades que passamos.\nPorque sois o Deus dos vivos, nos chamastes à vida e quereis que sejamos felizes para sempre. Jesus é o primeiro que vós ressuscitastes dentre os mortos e lhe destes a vida nova. Também a nós prometestes vida sem fim, sem miséria e sem dor.\nPor isso, ó Pai, felizes e agradecidos, em comunhão com todos os que acreditam em vós, com os Santos e os Anjos, exultantes, cantamos\n(\ndizemos\n)\na uma só voz:\nSanto, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!\nou\nO sacerdote, de braços abertos, prossegue:\nCP\nNa verdade, ó Pai, vós sois santo, sois muito bom para nós e amais todas as pessoas do mundo. Agradecemos, em primeiro lugar, pelo vosso Filho, Jesus Cristo. Ele veio ao mundo porque as pessoas se afastaram de vós pelo pecado e não conseguiam mais se entender. Ele abriu nossos olhos e ouvidos para vos conhecer como Pai e nos amarmos como irmãos e irmãs.\nA assembleia aclama:\nGlória a vós, ó Pai, que em Cristo nos salvais!\nEle nos anunciou a vida plena da ressurreição que viveremos para sempre junto de vós. Ele percorreu, antes de nós, o caminho do amor para que seguíssemos seus passos. Jesus agora nos reúne ao redor deste altar para fazermos o que na última Ceia ele mesmo fez com seus discípulos.\nA assembleia aclama:\nGlória a vós, ó Pai, que em Cristo nos salvais!\nUne as mãos e, estendendo-as sobre as oferendas, diz:\nCC\nÓ Pai, vós que sois tão bom, mandai vosso Espírito Santo para santificar estes dons do pão e do vinho.\nune as mãos e traça o sinal da cruz, ao mesmo tempo sobre o pão e o cálice, dizendo:\nEles serão para nós o Corpo\n✠\ne o Sangue de Jesus Cristo, vosso Filho.\nA assembleia aclama:\nEnviai o vosso Espírito Santo!\nO relato da instituição da Eucaristia seja proferido de modo claro e audível como requer a sua natureza.\nNa noite antes de morrer por nós, Jesus pôs-se à mesa com seus apóstolos,\ntoma o pão e, mantendo-o um pouco elevado acima do altar, prossegue:\ntomou o pão em suas mãos, e, rezando, deu graças; partiu o pão e o deu a seus amigos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS.\nMostra ao povo a hóstia consagrada, coloca-a na patena e genuflete em adoração.\nDepois prossegue:\nDo mesmo modo, no fim da Ceia,\ntoma o cálice nas mãos e, mantendo-o um pouco elevado acima do altar, prossegue:\nJesus tomou em suas mãos o cálice com vinho, rezou em ação de graças e o deu a seus amigos, dizendo:\ninclina-se levemente\nTOMAI, TODOS, E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM.\nMostra o cálice ao povo, coloca-o sobre o corporal e genuflete em adoração.\nEm seguida, diz:\nMistério da fé!\nA assembleia aclama:\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\nou\nA seguir, o sacerdote, de braços abertos, diz:\nPor isso, Pai santo, aqui estamos diante de vós, e, com alegria, celebramos a memória do que Jesus Cristo fez para nossa salvação. Neste santo sacrifício, que ele confiou à sua Igreja, celebramos sua morte e ressurreição. Pai santo, que estais nos céus, aceitai-nos com vosso Filho amado. Ele sofreu livremente a morte por nós; vós, porém, o ressuscitastes.\nA assembleia aclama:\nCom Jesus, recebei a nossa vida!\nO sacerdote, de braços abertos, prossegue:\nÓ Pai, Jesus agora vive sempre junto de vós, mas ao mesmo tempo está aqui conosco. Um dia, ele virá em sua glória e o seu reino não terá fim. Então, ninguém mais vai sofrer, ninguém mais vai chorar, ninguém mais vai ficar triste: o pecado e a morte não mais dominarão.\nA assembleia aclama:\nGlória a vós, ó Pai, que em Cristo nos salvais!\nO sacerdote, de braços abertos, prossegue:\nPai santo, vós nos chamastes para recebermos nesta mesa, com alegria, o Corpo de Cristo. Fortificados por este alimento, possamos agradar-vos sempre mais e pela comunhão do Espírito Santo nos tornemos um só corpo no amor.\nA assembleia aclama:\nFazei de nós um só corpo e um só espírito!\n1C\nLembrai-vos, ó Pai, do nosso Papa\nN.\n, do nosso Bispo\nN.\ne dos outros bispos.\n★\nAbrir opção \"No Tempo Pascal\"\nNo Tempo Pascal o sacerdote diz:\n★\nFazei que os corações dos vossos fiéis sejam repletos com as alegrias da Páscoa e levem estas mesmas alegrias aos que vivem na tristeza.\n★\nAjudai os discípulos de Cristo, para que vivam em paz e repartam com todos o dom da alegria.\nConcedei que, um dia, estejamos junto a vós, morando para sempre em vossa casa com Jesus e Maria, sua Mãe, São\nN.\ne todos os Santos, e com nossos irmãos falecidos.\nErgue a patena com a hóstia e o cálice, dizendo:\nCP ou CC\nPor Cristo, com Cristo, e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda honra e toda glória, por todos os séculos dos séculos.\nA assembleia aclama:\nAmém.\nSegue-se o Rito da Comunhão."}]});
  const dailyUrl = ymd => {
    const digits = String(ymd || '').replace(/\D/g, '');
    if (digits.length !== 8) return 'https://pocketterco.com.br/liturgia/';
    return `https://pocketterco.com.br/liturgia/${digits.slice(6, 8)}/${digits.slice(4, 6)}/${digits.slice(0, 4)}`;
  };
  global.countryMassData.BR = Object.freeze({
    schemaVersion: 2, jurisdiction: 'BR', jurisdictions: Object.freeze(['BR']),
    jurisdictionName: 'Brasil', conferenceCalendar: 'Conferência Nacional dos Bispos do Brasil',
    ordinaryLanguage: 'PT', ordinary, ordinaryStructure: 'paragraph-rubric-choices-v1',
    officialOrderCorpus, ordinaryEdition: 'Missal Romano, 3ª edição para o Brasil', ordinarySource, beta: true,
    dailyReadings: Object.freeze({ provider: 'Pocket Terço / textos litúrgicos CNBB', calendar: 'Brasil',
      translation: 'Lecionário e Missal Romano para o Brasil', parser: 'strict-brazilian-pocketterco-daily-mass', url: dailyUrl }),
    dailyPropers: Object.freeze({ provider: 'Pocket Terço / textos litúrgicos CNBB',
      parser: 'strict-brazilian-pocketterco-daily-mass', url: dailyUrl }),
    properSources: Object.freeze({ officialReadings: 'https://liturgiadiaria.edicoescnbb.com.br/app/user/user/UserView.php',
      dailyMass: 'https://pocketterco.com.br/liturgia/', nationalMissal: ordinarySource }),
    calendar: Object.freeze({})
  });
})(globalThis);
